"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1ListInstanceStorageConfigsCommand = exports.serializeAws_restJson1ListInstancesCommand = exports.serializeAws_restJson1ListInstanceAttributesCommand = exports.serializeAws_restJson1ListHoursOfOperationsCommand = exports.serializeAws_restJson1ListContactFlowsCommand = exports.serializeAws_restJson1ListApprovedOriginsCommand = exports.serializeAws_restJson1GetMetricDataCommand = exports.serializeAws_restJson1GetFederationTokenCommand = exports.serializeAws_restJson1GetCurrentMetricDataCommand = exports.serializeAws_restJson1GetContactAttributesCommand = exports.serializeAws_restJson1DisassociateSecurityKeyCommand = exports.serializeAws_restJson1DisassociateRoutingProfileQueuesCommand = exports.serializeAws_restJson1DisassociateQueueQuickConnectsCommand = exports.serializeAws_restJson1DisassociateLexBotCommand = exports.serializeAws_restJson1DisassociateLambdaFunctionCommand = exports.serializeAws_restJson1DisassociateInstanceStorageConfigCommand = exports.serializeAws_restJson1DisassociateApprovedOriginCommand = exports.serializeAws_restJson1DescribeUserHierarchyStructureCommand = exports.serializeAws_restJson1DescribeUserHierarchyGroupCommand = exports.serializeAws_restJson1DescribeUserCommand = exports.serializeAws_restJson1DescribeRoutingProfileCommand = exports.serializeAws_restJson1DescribeQuickConnectCommand = exports.serializeAws_restJson1DescribeQueueCommand = exports.serializeAws_restJson1DescribeInstanceStorageConfigCommand = exports.serializeAws_restJson1DescribeInstanceAttributeCommand = exports.serializeAws_restJson1DescribeInstanceCommand = exports.serializeAws_restJson1DescribeHoursOfOperationCommand = exports.serializeAws_restJson1DescribeContactFlowCommand = exports.serializeAws_restJson1DeleteUserHierarchyGroupCommand = exports.serializeAws_restJson1DeleteUserCommand = exports.serializeAws_restJson1DeleteUseCaseCommand = exports.serializeAws_restJson1DeleteQuickConnectCommand = exports.serializeAws_restJson1DeleteIntegrationAssociationCommand = exports.serializeAws_restJson1DeleteInstanceCommand = exports.serializeAws_restJson1CreateUserHierarchyGroupCommand = exports.serializeAws_restJson1CreateUserCommand = exports.serializeAws_restJson1CreateUseCaseCommand = exports.serializeAws_restJson1CreateRoutingProfileCommand = exports.serializeAws_restJson1CreateQuickConnectCommand = exports.serializeAws_restJson1CreateQueueCommand = exports.serializeAws_restJson1CreateIntegrationAssociationCommand = exports.serializeAws_restJson1CreateInstanceCommand = exports.serializeAws_restJson1CreateContactFlowCommand = exports.serializeAws_restJson1AssociateSecurityKeyCommand = exports.serializeAws_restJson1AssociateRoutingProfileQueuesCommand = exports.serializeAws_restJson1AssociateQueueQuickConnectsCommand = exports.serializeAws_restJson1AssociateLexBotCommand = exports.serializeAws_restJson1AssociateLambdaFunctionCommand = exports.serializeAws_restJson1AssociateInstanceStorageConfigCommand = exports.serializeAws_restJson1AssociateApprovedOriginCommand = void 0;
exports.deserializeAws_restJson1AssociateApprovedOriginCommand = exports.serializeAws_restJson1UpdateUserSecurityProfilesCommand = exports.serializeAws_restJson1UpdateUserRoutingProfileCommand = exports.serializeAws_restJson1UpdateUserPhoneConfigCommand = exports.serializeAws_restJson1UpdateUserIdentityInfoCommand = exports.serializeAws_restJson1UpdateUserHierarchyStructureCommand = exports.serializeAws_restJson1UpdateUserHierarchyGroupNameCommand = exports.serializeAws_restJson1UpdateUserHierarchyCommand = exports.serializeAws_restJson1UpdateRoutingProfileQueuesCommand = exports.serializeAws_restJson1UpdateRoutingProfileNameCommand = exports.serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = exports.serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = exports.serializeAws_restJson1UpdateQuickConnectNameCommand = exports.serializeAws_restJson1UpdateQuickConnectConfigCommand = exports.serializeAws_restJson1UpdateQueueStatusCommand = exports.serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = exports.serializeAws_restJson1UpdateQueueNameCommand = exports.serializeAws_restJson1UpdateQueueMaxContactsCommand = exports.serializeAws_restJson1UpdateQueueHoursOfOperationCommand = exports.serializeAws_restJson1UpdateInstanceStorageConfigCommand = exports.serializeAws_restJson1UpdateInstanceAttributeCommand = exports.serializeAws_restJson1UpdateContactFlowNameCommand = exports.serializeAws_restJson1UpdateContactFlowContentCommand = exports.serializeAws_restJson1UpdateContactAttributesCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SuspendContactRecordingCommand = exports.serializeAws_restJson1StopContactRecordingCommand = exports.serializeAws_restJson1StopContactCommand = exports.serializeAws_restJson1StartTaskContactCommand = exports.serializeAws_restJson1StartOutboundVoiceContactCommand = exports.serializeAws_restJson1StartContactRecordingCommand = exports.serializeAws_restJson1StartChatContactCommand = exports.serializeAws_restJson1ResumeContactRecordingCommand = exports.serializeAws_restJson1ListUsersCommand = exports.serializeAws_restJson1ListUserHierarchyGroupsCommand = exports.serializeAws_restJson1ListUseCasesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSecurityProfilesCommand = exports.serializeAws_restJson1ListSecurityKeysCommand = exports.serializeAws_restJson1ListRoutingProfilesCommand = exports.serializeAws_restJson1ListRoutingProfileQueuesCommand = exports.serializeAws_restJson1ListQuickConnectsCommand = exports.serializeAws_restJson1ListQueuesCommand = exports.serializeAws_restJson1ListQueueQuickConnectsCommand = exports.serializeAws_restJson1ListPromptsCommand = exports.serializeAws_restJson1ListPhoneNumbersCommand = exports.serializeAws_restJson1ListLexBotsCommand = exports.serializeAws_restJson1ListLambdaFunctionsCommand = exports.serializeAws_restJson1ListIntegrationAssociationsCommand = void 0;
exports.deserializeAws_restJson1ListIntegrationAssociationsCommand = exports.deserializeAws_restJson1ListInstanceStorageConfigsCommand = exports.deserializeAws_restJson1ListInstancesCommand = exports.deserializeAws_restJson1ListInstanceAttributesCommand = exports.deserializeAws_restJson1ListHoursOfOperationsCommand = exports.deserializeAws_restJson1ListContactFlowsCommand = exports.deserializeAws_restJson1ListApprovedOriginsCommand = exports.deserializeAws_restJson1GetMetricDataCommand = exports.deserializeAws_restJson1GetFederationTokenCommand = exports.deserializeAws_restJson1GetCurrentMetricDataCommand = exports.deserializeAws_restJson1GetContactAttributesCommand = exports.deserializeAws_restJson1DisassociateSecurityKeyCommand = exports.deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand = exports.deserializeAws_restJson1DisassociateQueueQuickConnectsCommand = exports.deserializeAws_restJson1DisassociateLexBotCommand = exports.deserializeAws_restJson1DisassociateLambdaFunctionCommand = exports.deserializeAws_restJson1DisassociateInstanceStorageConfigCommand = exports.deserializeAws_restJson1DisassociateApprovedOriginCommand = exports.deserializeAws_restJson1DescribeUserHierarchyStructureCommand = exports.deserializeAws_restJson1DescribeUserHierarchyGroupCommand = exports.deserializeAws_restJson1DescribeUserCommand = exports.deserializeAws_restJson1DescribeRoutingProfileCommand = exports.deserializeAws_restJson1DescribeQuickConnectCommand = exports.deserializeAws_restJson1DescribeQueueCommand = exports.deserializeAws_restJson1DescribeInstanceStorageConfigCommand = exports.deserializeAws_restJson1DescribeInstanceAttributeCommand = exports.deserializeAws_restJson1DescribeInstanceCommand = exports.deserializeAws_restJson1DescribeHoursOfOperationCommand = exports.deserializeAws_restJson1DescribeContactFlowCommand = exports.deserializeAws_restJson1DeleteUserHierarchyGroupCommand = exports.deserializeAws_restJson1DeleteUserCommand = exports.deserializeAws_restJson1DeleteUseCaseCommand = exports.deserializeAws_restJson1DeleteQuickConnectCommand = exports.deserializeAws_restJson1DeleteIntegrationAssociationCommand = exports.deserializeAws_restJson1DeleteInstanceCommand = exports.deserializeAws_restJson1CreateUserHierarchyGroupCommand = exports.deserializeAws_restJson1CreateUserCommand = exports.deserializeAws_restJson1CreateUseCaseCommand = exports.deserializeAws_restJson1CreateRoutingProfileCommand = exports.deserializeAws_restJson1CreateQuickConnectCommand = exports.deserializeAws_restJson1CreateQueueCommand = exports.deserializeAws_restJson1CreateIntegrationAssociationCommand = exports.deserializeAws_restJson1CreateInstanceCommand = exports.deserializeAws_restJson1CreateContactFlowCommand = exports.deserializeAws_restJson1AssociateSecurityKeyCommand = exports.deserializeAws_restJson1AssociateRoutingProfileQueuesCommand = exports.deserializeAws_restJson1AssociateQueueQuickConnectsCommand = exports.deserializeAws_restJson1AssociateLexBotCommand = exports.deserializeAws_restJson1AssociateLambdaFunctionCommand = exports.deserializeAws_restJson1AssociateInstanceStorageConfigCommand = void 0;
exports.deserializeAws_restJson1UpdateUserSecurityProfilesCommand = exports.deserializeAws_restJson1UpdateUserRoutingProfileCommand = exports.deserializeAws_restJson1UpdateUserPhoneConfigCommand = exports.deserializeAws_restJson1UpdateUserIdentityInfoCommand = exports.deserializeAws_restJson1UpdateUserHierarchyStructureCommand = exports.deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand = exports.deserializeAws_restJson1UpdateUserHierarchyCommand = exports.deserializeAws_restJson1UpdateRoutingProfileQueuesCommand = exports.deserializeAws_restJson1UpdateRoutingProfileNameCommand = exports.deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = exports.deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = exports.deserializeAws_restJson1UpdateQuickConnectNameCommand = exports.deserializeAws_restJson1UpdateQuickConnectConfigCommand = exports.deserializeAws_restJson1UpdateQueueStatusCommand = exports.deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = exports.deserializeAws_restJson1UpdateQueueNameCommand = exports.deserializeAws_restJson1UpdateQueueMaxContactsCommand = exports.deserializeAws_restJson1UpdateQueueHoursOfOperationCommand = exports.deserializeAws_restJson1UpdateInstanceStorageConfigCommand = exports.deserializeAws_restJson1UpdateInstanceAttributeCommand = exports.deserializeAws_restJson1UpdateContactFlowNameCommand = exports.deserializeAws_restJson1UpdateContactFlowContentCommand = exports.deserializeAws_restJson1UpdateContactAttributesCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SuspendContactRecordingCommand = exports.deserializeAws_restJson1StopContactRecordingCommand = exports.deserializeAws_restJson1StopContactCommand = exports.deserializeAws_restJson1StartTaskContactCommand = exports.deserializeAws_restJson1StartOutboundVoiceContactCommand = exports.deserializeAws_restJson1StartContactRecordingCommand = exports.deserializeAws_restJson1StartChatContactCommand = exports.deserializeAws_restJson1ResumeContactRecordingCommand = exports.deserializeAws_restJson1ListUsersCommand = exports.deserializeAws_restJson1ListUserHierarchyGroupsCommand = exports.deserializeAws_restJson1ListUseCasesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSecurityProfilesCommand = exports.deserializeAws_restJson1ListSecurityKeysCommand = exports.deserializeAws_restJson1ListRoutingProfilesCommand = exports.deserializeAws_restJson1ListRoutingProfileQueuesCommand = exports.deserializeAws_restJson1ListQuickConnectsCommand = exports.deserializeAws_restJson1ListQueuesCommand = exports.deserializeAws_restJson1ListQueueQuickConnectsCommand = exports.deserializeAws_restJson1ListPromptsCommand = exports.deserializeAws_restJson1ListPhoneNumbersCommand = exports.deserializeAws_restJson1ListLexBotsCommand = exports.deserializeAws_restJson1ListLambdaFunctionsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateApprovedOriginCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/approved-origin";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin }),
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
exports.serializeAws_restJson1AssociateApprovedOriginCommand = serializeAws_restJson1AssociateApprovedOriginCommand;
const serializeAws_restJson1AssociateInstanceStorageConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/storage-config";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.StorageConfig !== undefined &&
            input.StorageConfig !== null && {
            StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
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
exports.serializeAws_restJson1AssociateInstanceStorageConfigCommand = serializeAws_restJson1AssociateInstanceStorageConfigCommand;
const serializeAws_restJson1AssociateLambdaFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/lambda-function";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FunctionArn !== undefined && input.FunctionArn !== null && { FunctionArn: input.FunctionArn }),
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
exports.serializeAws_restJson1AssociateLambdaFunctionCommand = serializeAws_restJson1AssociateLambdaFunctionCommand;
const serializeAws_restJson1AssociateLexBotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/lex-bot";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LexBot !== undefined &&
            input.LexBot !== null && { LexBot: serializeAws_restJson1LexBot(input.LexBot, context) }),
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
exports.serializeAws_restJson1AssociateLexBotCommand = serializeAws_restJson1AssociateLexBotCommand;
const serializeAws_restJson1AssociateQueueQuickConnectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/associate-quick-connects";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QuickConnectIds !== undefined &&
            input.QuickConnectIds !== null && {
            QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
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
exports.serializeAws_restJson1AssociateQueueQuickConnectsCommand = serializeAws_restJson1AssociateQueueQuickConnectsCommand;
const serializeAws_restJson1AssociateRoutingProfileQueuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QueueConfigs !== undefined &&
            input.QueueConfigs !== null && {
            QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
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
exports.serializeAws_restJson1AssociateRoutingProfileQueuesCommand = serializeAws_restJson1AssociateRoutingProfileQueuesCommand;
const serializeAws_restJson1AssociateSecurityKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/security-key";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
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
exports.serializeAws_restJson1AssociateSecurityKeyCommand = serializeAws_restJson1AssociateSecurityKeyCommand;
const serializeAws_restJson1CreateContactFlowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact-flows/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1CreateContactFlowCommand = serializeAws_restJson1CreateContactFlowCommand;
const serializeAws_restJson1CreateInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance";
    let body;
    body = JSON.stringify({
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.IdentityManagementType !== undefined &&
            input.IdentityManagementType !== null && { IdentityManagementType: input.IdentityManagementType }),
        ...(input.InboundCallsEnabled !== undefined &&
            input.InboundCallsEnabled !== null && { InboundCallsEnabled: input.InboundCallsEnabled }),
        ...(input.InstanceAlias !== undefined && input.InstanceAlias !== null && { InstanceAlias: input.InstanceAlias }),
        ...(input.OutboundCallsEnabled !== undefined &&
            input.OutboundCallsEnabled !== null && { OutboundCallsEnabled: input.OutboundCallsEnabled }),
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
exports.serializeAws_restJson1CreateInstanceCommand = serializeAws_restJson1CreateInstanceCommand;
const serializeAws_restJson1CreateIntegrationAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/integration-associations";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.IntegrationArn !== undefined &&
            input.IntegrationArn !== null && { IntegrationArn: input.IntegrationArn }),
        ...(input.IntegrationType !== undefined &&
            input.IntegrationType !== null && { IntegrationType: input.IntegrationType }),
        ...(input.SourceApplicationName !== undefined &&
            input.SourceApplicationName !== null && { SourceApplicationName: input.SourceApplicationName }),
        ...(input.SourceApplicationUrl !== undefined &&
            input.SourceApplicationUrl !== null && { SourceApplicationUrl: input.SourceApplicationUrl }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateIntegrationAssociationCommand = serializeAws_restJson1CreateIntegrationAssociationCommand;
const serializeAws_restJson1CreateQueueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.HoursOfOperationId !== undefined &&
            input.HoursOfOperationId !== null && { HoursOfOperationId: input.HoursOfOperationId }),
        ...(input.MaxContacts !== undefined && input.MaxContacts !== null && { MaxContacts: input.MaxContacts }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutboundCallerConfig !== undefined &&
            input.OutboundCallerConfig !== null && {
            OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
        }),
        ...(input.QuickConnectIds !== undefined &&
            input.QuickConnectIds !== null && {
            QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateQueueCommand = serializeAws_restJson1CreateQueueCommand;
const serializeAws_restJson1CreateQuickConnectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/quick-connects/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QuickConnectConfig !== undefined &&
            input.QuickConnectConfig !== null && {
            QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateQuickConnectCommand = serializeAws_restJson1CreateQuickConnectCommand;
const serializeAws_restJson1CreateRoutingProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DefaultOutboundQueueId !== undefined &&
            input.DefaultOutboundQueueId !== null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MediaConcurrencies !== undefined &&
            input.MediaConcurrencies !== null && {
            MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QueueConfigs !== undefined &&
            input.QueueConfigs !== null && {
            QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateRoutingProfileCommand = serializeAws_restJson1CreateRoutingProfileCommand;
const serializeAws_restJson1CreateUseCaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.IntegrationAssociationId !== undefined) {
        const labelValue = input.IntegrationAssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
        }
        resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.UseCaseType !== undefined && input.UseCaseType !== null && { UseCaseType: input.UseCaseType }),
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
exports.serializeAws_restJson1CreateUseCaseCommand = serializeAws_restJson1CreateUseCaseCommand;
const serializeAws_restJson1CreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DirectoryUserId !== undefined &&
            input.DirectoryUserId !== null && { DirectoryUserId: input.DirectoryUserId }),
        ...(input.HierarchyGroupId !== undefined &&
            input.HierarchyGroupId !== null && { HierarchyGroupId: input.HierarchyGroupId }),
        ...(input.IdentityInfo !== undefined &&
            input.IdentityInfo !== null && {
            IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.PhoneConfig !== undefined &&
            input.PhoneConfig !== null && { PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context) }),
        ...(input.RoutingProfileId !== undefined &&
            input.RoutingProfileId !== null && { RoutingProfileId: input.RoutingProfileId }),
        ...(input.SecurityProfileIds !== undefined &&
            input.SecurityProfileIds !== null && {
            SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
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
exports.serializeAws_restJson1CreateUserCommand = serializeAws_restJson1CreateUserCommand;
const serializeAws_restJson1CreateUserHierarchyGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/user-hierarchy-groups/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentGroupId !== undefined && input.ParentGroupId !== null && { ParentGroupId: input.ParentGroupId }),
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
exports.serializeAws_restJson1CreateUserHierarchyGroupCommand = serializeAws_restJson1CreateUserHierarchyGroupCommand;
const serializeAws_restJson1DeleteInstanceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DeleteInstanceCommand = serializeAws_restJson1DeleteInstanceCommand;
const serializeAws_restJson1DeleteIntegrationAssociationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.IntegrationAssociationId !== undefined) {
        const labelValue = input.IntegrationAssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
        }
        resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
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
exports.serializeAws_restJson1DeleteIntegrationAssociationCommand = serializeAws_restJson1DeleteIntegrationAssociationCommand;
const serializeAws_restJson1DeleteQuickConnectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QuickConnectId !== undefined) {
        const labelValue = input.QuickConnectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
        }
        resolvedPath = resolvedPath.replace("{QuickConnectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuickConnectId.");
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
exports.serializeAws_restJson1DeleteQuickConnectCommand = serializeAws_restJson1DeleteQuickConnectCommand;
const serializeAws_restJson1DeleteUseCaseCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.IntegrationAssociationId !== undefined) {
        const labelValue = input.IntegrationAssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
        }
        resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
    }
    if (input.UseCaseId !== undefined) {
        const labelValue = input.UseCaseId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UseCaseId.");
        }
        resolvedPath = resolvedPath.replace("{UseCaseId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UseCaseId.");
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
exports.serializeAws_restJson1DeleteUseCaseCommand = serializeAws_restJson1DeleteUseCaseCommand;
const serializeAws_restJson1DeleteUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/users/{InstanceId}/{UserId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
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
exports.serializeAws_restJson1DeleteUserCommand = serializeAws_restJson1DeleteUserCommand;
const serializeAws_restJson1DeleteUserHierarchyGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
    if (input.HierarchyGroupId !== undefined) {
        const labelValue = input.HierarchyGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
        }
        resolvedPath = resolvedPath.replace("{HierarchyGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DeleteUserHierarchyGroupCommand = serializeAws_restJson1DeleteUserHierarchyGroupCommand;
const serializeAws_restJson1DescribeContactFlowCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.ContactFlowId !== undefined) {
        const labelValue = input.ContactFlowId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
        }
        resolvedPath = resolvedPath.replace("{ContactFlowId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactFlowId.");
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
exports.serializeAws_restJson1DescribeContactFlowCommand = serializeAws_restJson1DescribeContactFlowCommand;
const serializeAws_restJson1DescribeHoursOfOperationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/hours-of-operations/{InstanceId}/{HoursOfOperationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.HoursOfOperationId !== undefined) {
        const labelValue = input.HoursOfOperationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HoursOfOperationId.");
        }
        resolvedPath = resolvedPath.replace("{HoursOfOperationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HoursOfOperationId.");
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
exports.serializeAws_restJson1DescribeHoursOfOperationCommand = serializeAws_restJson1DescribeHoursOfOperationCommand;
const serializeAws_restJson1DescribeInstanceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DescribeInstanceCommand = serializeAws_restJson1DescribeInstanceCommand;
const serializeAws_restJson1DescribeInstanceAttributeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/attribute/{AttributeType}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AttributeType !== undefined) {
        const labelValue = input.AttributeType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AttributeType.");
        }
        resolvedPath = resolvedPath.replace("{AttributeType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AttributeType.");
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
exports.serializeAws_restJson1DescribeInstanceAttributeCommand = serializeAws_restJson1DescribeInstanceAttributeCommand;
const serializeAws_restJson1DescribeInstanceStorageConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AssociationId !== undefined) {
        const labelValue = input.AssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationId.");
        }
        resolvedPath = resolvedPath.replace("{AssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationId.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
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
exports.serializeAws_restJson1DescribeInstanceStorageConfigCommand = serializeAws_restJson1DescribeInstanceStorageConfigCommand;
const serializeAws_restJson1DescribeQueueCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/queues/{InstanceId}/{QueueId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
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
exports.serializeAws_restJson1DescribeQueueCommand = serializeAws_restJson1DescribeQueueCommand;
const serializeAws_restJson1DescribeQuickConnectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QuickConnectId !== undefined) {
        const labelValue = input.QuickConnectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
        }
        resolvedPath = resolvedPath.replace("{QuickConnectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuickConnectId.");
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
exports.serializeAws_restJson1DescribeQuickConnectCommand = serializeAws_restJson1DescribeQuickConnectCommand;
const serializeAws_restJson1DescribeRoutingProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
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
exports.serializeAws_restJson1DescribeRoutingProfileCommand = serializeAws_restJson1DescribeRoutingProfileCommand;
const serializeAws_restJson1DescribeUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/users/{InstanceId}/{UserId}";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DescribeUserCommand = serializeAws_restJson1DescribeUserCommand;
const serializeAws_restJson1DescribeUserHierarchyGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
    if (input.HierarchyGroupId !== undefined) {
        const labelValue = input.HierarchyGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
        }
        resolvedPath = resolvedPath.replace("{HierarchyGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DescribeUserHierarchyGroupCommand = serializeAws_restJson1DescribeUserHierarchyGroupCommand;
const serializeAws_restJson1DescribeUserHierarchyStructureCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/user-hierarchy-structure/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1DescribeUserHierarchyStructureCommand = serializeAws_restJson1DescribeUserHierarchyStructureCommand;
const serializeAws_restJson1DisassociateApprovedOriginCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/approved-origin";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.Origin !== undefined && { origin: input.Origin }),
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
exports.serializeAws_restJson1DisassociateApprovedOriginCommand = serializeAws_restJson1DisassociateApprovedOriginCommand;
const serializeAws_restJson1DisassociateInstanceStorageConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AssociationId !== undefined) {
        const labelValue = input.AssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationId.");
        }
        resolvedPath = resolvedPath.replace("{AssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationId.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
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
exports.serializeAws_restJson1DisassociateInstanceStorageConfigCommand = serializeAws_restJson1DisassociateInstanceStorageConfigCommand;
const serializeAws_restJson1DisassociateLambdaFunctionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/lambda-function";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.FunctionArn !== undefined && { functionArn: input.FunctionArn }),
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
exports.serializeAws_restJson1DisassociateLambdaFunctionCommand = serializeAws_restJson1DisassociateLambdaFunctionCommand;
const serializeAws_restJson1DisassociateLexBotCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/lex-bot";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.BotName !== undefined && { botName: input.BotName }),
        ...(input.LexRegion !== undefined && { lexRegion: input.LexRegion }),
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
exports.serializeAws_restJson1DisassociateLexBotCommand = serializeAws_restJson1DisassociateLexBotCommand;
const serializeAws_restJson1DisassociateQueueQuickConnectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/disassociate-quick-connects";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QuickConnectIds !== undefined &&
            input.QuickConnectIds !== null && {
            QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
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
exports.serializeAws_restJson1DisassociateQueueQuickConnectsCommand = serializeAws_restJson1DisassociateQueueQuickConnectsCommand;
const serializeAws_restJson1DisassociateRoutingProfileQueuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QueueReferences !== undefined &&
            input.QueueReferences !== null && {
            QueueReferences: serializeAws_restJson1RoutingProfileQueueReferenceList(input.QueueReferences, context),
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
exports.serializeAws_restJson1DisassociateRoutingProfileQueuesCommand = serializeAws_restJson1DisassociateRoutingProfileQueuesCommand;
const serializeAws_restJson1DisassociateSecurityKeyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/security-key/{AssociationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AssociationId !== undefined) {
        const labelValue = input.AssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationId.");
        }
        resolvedPath = resolvedPath.replace("{AssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationId.");
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
exports.serializeAws_restJson1DisassociateSecurityKeyCommand = serializeAws_restJson1DisassociateSecurityKeyCommand;
const serializeAws_restJson1GetContactAttributesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/contact/attributes/{InstanceId}/{InitialContactId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.InitialContactId !== undefined) {
        const labelValue = input.InitialContactId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InitialContactId.");
        }
        resolvedPath = resolvedPath.replace("{InitialContactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InitialContactId.");
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
exports.serializeAws_restJson1GetContactAttributesCommand = serializeAws_restJson1GetContactAttributesCommand;
const serializeAws_restJson1GetCurrentMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/metrics/current/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CurrentMetrics !== undefined &&
            input.CurrentMetrics !== null && {
            CurrentMetrics: serializeAws_restJson1CurrentMetrics(input.CurrentMetrics, context),
        }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1Filters(input.Filters, context) }),
        ...(input.Groupings !== undefined &&
            input.Groupings !== null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetCurrentMetricDataCommand = serializeAws_restJson1GetCurrentMetricDataCommand;
const serializeAws_restJson1GetFederationTokenCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/user/federate/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
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
exports.serializeAws_restJson1GetFederationTokenCommand = serializeAws_restJson1GetFederationTokenCommand;
const serializeAws_restJson1GetMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/metrics/historical/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1Filters(input.Filters, context) }),
        ...(input.Groupings !== undefined &&
            input.Groupings !== null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) }),
        ...(input.HistoricalMetrics !== undefined &&
            input.HistoricalMetrics !== null && {
            HistoricalMetrics: serializeAws_restJson1HistoricalMetrics(input.HistoricalMetrics, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1GetMetricDataCommand = serializeAws_restJson1GetMetricDataCommand;
const serializeAws_restJson1ListApprovedOriginsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/approved-origins";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListApprovedOriginsCommand = serializeAws_restJson1ListApprovedOriginsCommand;
const serializeAws_restJson1ListContactFlowsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/contact-flows-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.ContactFlowTypes !== undefined && {
            contactFlowTypes: (input.ContactFlowTypes || []).map((_entry) => _entry),
        }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListContactFlowsCommand = serializeAws_restJson1ListContactFlowsCommand;
const serializeAws_restJson1ListHoursOfOperationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/hours-of-operations-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListHoursOfOperationsCommand = serializeAws_restJson1ListHoursOfOperationsCommand;
const serializeAws_restJson1ListInstanceAttributesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/attributes";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListInstanceAttributesCommand = serializeAws_restJson1ListInstanceAttributesCommand;
const serializeAws_restJson1ListInstancesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListInstancesCommand = serializeAws_restJson1ListInstancesCommand;
const serializeAws_restJson1ListInstanceStorageConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/storage-configs";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListInstanceStorageConfigsCommand = serializeAws_restJson1ListInstanceStorageConfigsCommand;
const serializeAws_restJson1ListIntegrationAssociationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/integration-associations";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListIntegrationAssociationsCommand = serializeAws_restJson1ListIntegrationAssociationsCommand;
const serializeAws_restJson1ListLambdaFunctionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/lambda-functions";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListLambdaFunctionsCommand = serializeAws_restJson1ListLambdaFunctionsCommand;
const serializeAws_restJson1ListLexBotsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/lex-bots";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListLexBotsCommand = serializeAws_restJson1ListLexBotsCommand;
const serializeAws_restJson1ListPhoneNumbersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/phone-numbers-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.PhoneNumberTypes !== undefined && {
            phoneNumberTypes: (input.PhoneNumberTypes || []).map((_entry) => _entry),
        }),
        ...(input.PhoneNumberCountryCodes !== undefined && {
            phoneNumberCountryCodes: (input.PhoneNumberCountryCodes || []).map((_entry) => _entry),
        }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListPhoneNumbersCommand = serializeAws_restJson1ListPhoneNumbersCommand;
const serializeAws_restJson1ListPromptsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/prompts-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListPromptsCommand = serializeAws_restJson1ListPromptsCommand;
const serializeAws_restJson1ListQueueQuickConnectsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/quick-connects";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListQueueQuickConnectsCommand = serializeAws_restJson1ListQueueQuickConnectsCommand;
const serializeAws_restJson1ListQueuesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/queues-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.QueueTypes !== undefined && { queueTypes: (input.QueueTypes || []).map((_entry) => _entry) }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListQueuesCommand = serializeAws_restJson1ListQueuesCommand;
const serializeAws_restJson1ListQuickConnectsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/quick-connects/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.QuickConnectTypes !== undefined && {
            QuickConnectTypes: (input.QuickConnectTypes || []).map((_entry) => _entry),
        }),
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
exports.serializeAws_restJson1ListQuickConnectsCommand = serializeAws_restJson1ListQuickConnectsCommand;
const serializeAws_restJson1ListRoutingProfileQueuesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListRoutingProfileQueuesCommand = serializeAws_restJson1ListRoutingProfileQueuesCommand;
const serializeAws_restJson1ListRoutingProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/routing-profiles-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListRoutingProfilesCommand = serializeAws_restJson1ListRoutingProfilesCommand;
const serializeAws_restJson1ListSecurityKeysCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/security-keys";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListSecurityKeysCommand = serializeAws_restJson1ListSecurityKeysCommand;
const serializeAws_restJson1ListSecurityProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/security-profiles-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListSecurityProfilesCommand = serializeAws_restJson1ListSecurityProfilesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListUseCasesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.IntegrationAssociationId !== undefined) {
        const labelValue = input.IntegrationAssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
        }
        resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListUseCasesCommand = serializeAws_restJson1ListUseCasesCommand;
const serializeAws_restJson1ListUserHierarchyGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/user-hierarchy-groups-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListUserHierarchyGroupsCommand = serializeAws_restJson1ListUserHierarchyGroupsCommand;
const serializeAws_restJson1ListUsersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/users-summary/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListUsersCommand = serializeAws_restJson1ListUsersCommand;
const serializeAws_restJson1ResumeContactRecordingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/resume-recording";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InitialContactId !== undefined &&
            input.InitialContactId !== null && { InitialContactId: input.InitialContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
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
exports.serializeAws_restJson1ResumeContactRecordingCommand = serializeAws_restJson1ResumeContactRecordingCommand;
const serializeAws_restJson1StartChatContactCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/chat";
    let body;
    body = JSON.stringify({
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId }),
        ...(input.InitialMessage !== undefined &&
            input.InitialMessage !== null && {
            InitialMessage: serializeAws_restJson1ChatMessage(input.InitialMessage, context),
        }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ParticipantDetails !== undefined &&
            input.ParticipantDetails !== null && {
            ParticipantDetails: serializeAws_restJson1ParticipantDetails(input.ParticipantDetails, context),
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
exports.serializeAws_restJson1StartChatContactCommand = serializeAws_restJson1StartChatContactCommand;
const serializeAws_restJson1StartContactRecordingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/start-recording";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InitialContactId !== undefined &&
            input.InitialContactId !== null && { InitialContactId: input.InitialContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.VoiceRecordingConfiguration !== undefined &&
            input.VoiceRecordingConfiguration !== null && {
            VoiceRecordingConfiguration: serializeAws_restJson1VoiceRecordingConfiguration(input.VoiceRecordingConfiguration, context),
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
exports.serializeAws_restJson1StartContactRecordingCommand = serializeAws_restJson1StartContactRecordingCommand;
const serializeAws_restJson1StartOutboundVoiceContactCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/outbound-voice";
    let body;
    body = JSON.stringify({
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId }),
        ...(input.DestinationPhoneNumber !== undefined &&
            input.DestinationPhoneNumber !== null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId }),
        ...(input.SourcePhoneNumber !== undefined &&
            input.SourcePhoneNumber !== null && { SourcePhoneNumber: input.SourcePhoneNumber }),
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
exports.serializeAws_restJson1StartOutboundVoiceContactCommand = serializeAws_restJson1StartOutboundVoiceContactCommand;
const serializeAws_restJson1StartTaskContactCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/task";
    let body;
    body = JSON.stringify({
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PreviousContactId !== undefined &&
            input.PreviousContactId !== null && { PreviousContactId: input.PreviousContactId }),
        ...(input.References !== undefined &&
            input.References !== null && { References: serializeAws_restJson1ContactReferences(input.References, context) }),
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
exports.serializeAws_restJson1StartTaskContactCommand = serializeAws_restJson1StartTaskContactCommand;
const serializeAws_restJson1StopContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/stop";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
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
exports.serializeAws_restJson1StopContactCommand = serializeAws_restJson1StopContactCommand;
const serializeAws_restJson1StopContactRecordingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/stop-recording";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InitialContactId !== undefined &&
            input.InitialContactId !== null && { InitialContactId: input.InitialContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
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
exports.serializeAws_restJson1StopContactRecordingCommand = serializeAws_restJson1StopContactRecordingCommand;
const serializeAws_restJson1SuspendContactRecordingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/suspend-recording";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InitialContactId !== undefined &&
            input.InitialContactId !== null && { InitialContactId: input.InitialContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
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
exports.serializeAws_restJson1SuspendContactRecordingCommand = serializeAws_restJson1SuspendContactRecordingCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
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
    let resolvedPath = "/tags/{resourceArn}";
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
const serializeAws_restJson1UpdateContactAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact/attributes";
    let body;
    body = JSON.stringify({
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
        ...(input.InitialContactId !== undefined &&
            input.InitialContactId !== null && { InitialContactId: input.InitialContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
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
exports.serializeAws_restJson1UpdateContactAttributesCommand = serializeAws_restJson1UpdateContactAttributesCommand;
const serializeAws_restJson1UpdateContactFlowContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}/content";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.ContactFlowId !== undefined) {
        const labelValue = input.ContactFlowId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
        }
        resolvedPath = resolvedPath.replace("{ContactFlowId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactFlowId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
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
exports.serializeAws_restJson1UpdateContactFlowContentCommand = serializeAws_restJson1UpdateContactFlowContentCommand;
const serializeAws_restJson1UpdateContactFlowNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}/name";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.ContactFlowId !== undefined) {
        const labelValue = input.ContactFlowId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
        }
        resolvedPath = resolvedPath.replace("{ContactFlowId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactFlowId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateContactFlowNameCommand = serializeAws_restJson1UpdateContactFlowNameCommand;
const serializeAws_restJson1UpdateInstanceAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/attribute/{AttributeType}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AttributeType !== undefined) {
        const labelValue = input.AttributeType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AttributeType.");
        }
        resolvedPath = resolvedPath.replace("{AttributeType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AttributeType.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
exports.serializeAws_restJson1UpdateInstanceAttributeCommand = serializeAws_restJson1UpdateInstanceAttributeCommand;
const serializeAws_restJson1UpdateInstanceStorageConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.AssociationId !== undefined) {
        const labelValue = input.AssociationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationId.");
        }
        resolvedPath = resolvedPath.replace("{AssociationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationId.");
    }
    const query = {
        ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    };
    let body;
    body = JSON.stringify({
        ...(input.StorageConfig !== undefined &&
            input.StorageConfig !== null && {
            StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
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
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateInstanceStorageConfigCommand = serializeAws_restJson1UpdateInstanceStorageConfigCommand;
const serializeAws_restJson1UpdateQueueHoursOfOperationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/hours-of-operation";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HoursOfOperationId !== undefined &&
            input.HoursOfOperationId !== null && { HoursOfOperationId: input.HoursOfOperationId }),
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
exports.serializeAws_restJson1UpdateQueueHoursOfOperationCommand = serializeAws_restJson1UpdateQueueHoursOfOperationCommand;
const serializeAws_restJson1UpdateQueueMaxContactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/max-contacts";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxContacts !== undefined && input.MaxContacts !== null && { MaxContacts: input.MaxContacts }),
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
exports.serializeAws_restJson1UpdateQueueMaxContactsCommand = serializeAws_restJson1UpdateQueueMaxContactsCommand;
const serializeAws_restJson1UpdateQueueNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/name";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateQueueNameCommand = serializeAws_restJson1UpdateQueueNameCommand;
const serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/outbound-caller-config";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.OutboundCallerConfig !== undefined &&
            input.OutboundCallerConfig !== null && {
            OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
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
exports.serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand;
const serializeAws_restJson1UpdateQueueStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/queues/{InstanceId}/{QueueId}/status";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QueueId !== undefined) {
        const labelValue = input.QueueId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QueueId.");
        }
        resolvedPath = resolvedPath.replace("{QueueId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QueueId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
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
exports.serializeAws_restJson1UpdateQueueStatusCommand = serializeAws_restJson1UpdateQueueStatusCommand;
const serializeAws_restJson1UpdateQuickConnectConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}/config";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QuickConnectId !== undefined) {
        const labelValue = input.QuickConnectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
        }
        resolvedPath = resolvedPath.replace("{QuickConnectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuickConnectId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QuickConnectConfig !== undefined &&
            input.QuickConnectConfig !== null && {
            QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
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
exports.serializeAws_restJson1UpdateQuickConnectConfigCommand = serializeAws_restJson1UpdateQuickConnectConfigCommand;
const serializeAws_restJson1UpdateQuickConnectNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}/name";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.QuickConnectId !== undefined) {
        const labelValue = input.QuickConnectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
        }
        resolvedPath = resolvedPath.replace("{QuickConnectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuickConnectId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateQuickConnectNameCommand = serializeAws_restJson1UpdateQuickConnectNameCommand;
const serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MediaConcurrencies !== undefined &&
            input.MediaConcurrencies !== null && {
            MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
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
exports.serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand;
const serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DefaultOutboundQueueId !== undefined &&
            input.DefaultOutboundQueueId !== null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId }),
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
exports.serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand;
const serializeAws_restJson1UpdateRoutingProfileNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/name";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateRoutingProfileNameCommand = serializeAws_restJson1UpdateRoutingProfileNameCommand;
const serializeAws_restJson1UpdateRoutingProfileQueuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    if (input.RoutingProfileId !== undefined) {
        const labelValue = input.RoutingProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
        }
        resolvedPath = resolvedPath.replace("{RoutingProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RoutingProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.QueueConfigs !== undefined &&
            input.QueueConfigs !== null && {
            QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
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
exports.serializeAws_restJson1UpdateRoutingProfileQueuesCommand = serializeAws_restJson1UpdateRoutingProfileQueuesCommand;
const serializeAws_restJson1UpdateUserHierarchyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}/{UserId}/hierarchy";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HierarchyGroupId !== undefined &&
            input.HierarchyGroupId !== null && { HierarchyGroupId: input.HierarchyGroupId }),
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
exports.serializeAws_restJson1UpdateUserHierarchyCommand = serializeAws_restJson1UpdateUserHierarchyCommand;
const serializeAws_restJson1UpdateUserHierarchyGroupNameCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name";
    if (input.HierarchyGroupId !== undefined) {
        const labelValue = input.HierarchyGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
        }
        resolvedPath = resolvedPath.replace("{HierarchyGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateUserHierarchyGroupNameCommand = serializeAws_restJson1UpdateUserHierarchyGroupNameCommand;
const serializeAws_restJson1UpdateUserHierarchyStructureCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/user-hierarchy-structure/{InstanceId}";
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HierarchyStructure !== undefined &&
            input.HierarchyStructure !== null && {
            HierarchyStructure: serializeAws_restJson1HierarchyStructureUpdate(input.HierarchyStructure, context),
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
exports.serializeAws_restJson1UpdateUserHierarchyStructureCommand = serializeAws_restJson1UpdateUserHierarchyStructureCommand;
const serializeAws_restJson1UpdateUserIdentityInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}/{UserId}/identity-info";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.IdentityInfo !== undefined &&
            input.IdentityInfo !== null && {
            IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
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
exports.serializeAws_restJson1UpdateUserIdentityInfoCommand = serializeAws_restJson1UpdateUserIdentityInfoCommand;
const serializeAws_restJson1UpdateUserPhoneConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}/{UserId}/phone-config";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.PhoneConfig !== undefined &&
            input.PhoneConfig !== null && { PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context) }),
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
exports.serializeAws_restJson1UpdateUserPhoneConfigCommand = serializeAws_restJson1UpdateUserPhoneConfigCommand;
const serializeAws_restJson1UpdateUserRoutingProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}/{UserId}/routing-profile";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.RoutingProfileId !== undefined &&
            input.RoutingProfileId !== null && { RoutingProfileId: input.RoutingProfileId }),
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
exports.serializeAws_restJson1UpdateUserRoutingProfileCommand = serializeAws_restJson1UpdateUserRoutingProfileCommand;
const serializeAws_restJson1UpdateUserSecurityProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/users/{InstanceId}/{UserId}/security-profiles";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    if (input.InstanceId !== undefined) {
        const labelValue = input.InstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceId.");
        }
        resolvedPath = resolvedPath.replace("{InstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SecurityProfileIds !== undefined &&
            input.SecurityProfileIds !== null && {
            SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
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
exports.serializeAws_restJson1UpdateUserSecurityProfilesCommand = serializeAws_restJson1UpdateUserSecurityProfilesCommand;
const deserializeAws_restJson1AssociateApprovedOriginCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateApprovedOriginCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateApprovedOriginCommand = deserializeAws_restJson1AssociateApprovedOriginCommand;
const deserializeAws_restJson1AssociateApprovedOriginCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.connect#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateInstanceStorageConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateInstanceStorageConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociationId !== undefined && data.AssociationId !== null) {
        contents.AssociationId = data.AssociationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateInstanceStorageConfigCommand = deserializeAws_restJson1AssociateInstanceStorageConfigCommand;
const deserializeAws_restJson1AssociateInstanceStorageConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.connect#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateLambdaFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateLambdaFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateLambdaFunctionCommand = deserializeAws_restJson1AssociateLambdaFunctionCommand;
const deserializeAws_restJson1AssociateLambdaFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.connect#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateLexBotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateLexBotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateLexBotCommand = deserializeAws_restJson1AssociateLexBotCommand;
const deserializeAws_restJson1AssociateLexBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.connect#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateQueueQuickConnectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateQueueQuickConnectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateQueueQuickConnectsCommand = deserializeAws_restJson1AssociateQueueQuickConnectsCommand;
const deserializeAws_restJson1AssociateQueueQuickConnectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateRoutingProfileQueuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateRoutingProfileQueuesCommand = deserializeAws_restJson1AssociateRoutingProfileQueuesCommand;
const deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1AssociateSecurityKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateSecurityKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociationId !== undefined && data.AssociationId !== null) {
        contents.AssociationId = data.AssociationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateSecurityKeyCommand = deserializeAws_restJson1AssociateSecurityKeyCommand;
const deserializeAws_restJson1AssociateSecurityKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.connect#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateContactFlowCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateContactFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactFlowArn: undefined,
        ContactFlowId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactFlowArn !== undefined && data.ContactFlowArn !== null) {
        contents.ContactFlowArn = data.ContactFlowArn;
    }
    if (data.ContactFlowId !== undefined && data.ContactFlowId !== null) {
        contents.ContactFlowId = data.ContactFlowId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateContactFlowCommand = deserializeAws_restJson1CreateContactFlowCommand;
const deserializeAws_restJson1CreateContactFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContactFlowException":
        case "com.amazonaws.connect#InvalidContactFlowException":
            response = {
                ...(await deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInstanceCommand = deserializeAws_restJson1CreateInstanceCommand;
const deserializeAws_restJson1CreateInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateIntegrationAssociationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateIntegrationAssociationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IntegrationAssociationArn: undefined,
        IntegrationAssociationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IntegrationAssociationArn !== undefined && data.IntegrationAssociationArn !== null) {
        contents.IntegrationAssociationArn = data.IntegrationAssociationArn;
    }
    if (data.IntegrationAssociationId !== undefined && data.IntegrationAssociationId !== null) {
        contents.IntegrationAssociationId = data.IntegrationAssociationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIntegrationAssociationCommand = deserializeAws_restJson1CreateIntegrationAssociationCommand;
const deserializeAws_restJson1CreateIntegrationAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateQueueCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateQueueCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        QueueArn: undefined,
        QueueId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.QueueArn !== undefined && data.QueueArn !== null) {
        contents.QueueArn = data.QueueArn;
    }
    if (data.QueueId !== undefined && data.QueueId !== null) {
        contents.QueueId = data.QueueId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateQueueCommand = deserializeAws_restJson1CreateQueueCommand;
const deserializeAws_restJson1CreateQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateQuickConnectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateQuickConnectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        QuickConnectARN: undefined,
        QuickConnectId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.QuickConnectARN !== undefined && data.QuickConnectARN !== null) {
        contents.QuickConnectARN = data.QuickConnectARN;
    }
    if (data.QuickConnectId !== undefined && data.QuickConnectId !== null) {
        contents.QuickConnectId = data.QuickConnectId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateQuickConnectCommand = deserializeAws_restJson1CreateQuickConnectCommand;
const deserializeAws_restJson1CreateQuickConnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateRoutingProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRoutingProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RoutingProfileArn: undefined,
        RoutingProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RoutingProfileArn !== undefined && data.RoutingProfileArn !== null) {
        contents.RoutingProfileArn = data.RoutingProfileArn;
    }
    if (data.RoutingProfileId !== undefined && data.RoutingProfileId !== null) {
        contents.RoutingProfileId = data.RoutingProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRoutingProfileCommand = deserializeAws_restJson1CreateRoutingProfileCommand;
const deserializeAws_restJson1CreateRoutingProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateUseCaseCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateUseCaseCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UseCaseArn: undefined,
        UseCaseId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.UseCaseArn !== undefined && data.UseCaseArn !== null) {
        contents.UseCaseArn = data.UseCaseArn;
    }
    if (data.UseCaseId !== undefined && data.UseCaseId !== null) {
        contents.UseCaseId = data.UseCaseId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUseCaseCommand = deserializeAws_restJson1CreateUseCaseCommand;
const deserializeAws_restJson1CreateUseCaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UserArn: undefined,
        UserId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.UserArn !== undefined && data.UserArn !== null) {
        contents.UserArn = data.UserArn;
    }
    if (data.UserId !== undefined && data.UserId !== null) {
        contents.UserId = data.UserId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUserCommand = deserializeAws_restJson1CreateUserCommand;
const deserializeAws_restJson1CreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1CreateUserHierarchyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateUserHierarchyGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HierarchyGroupArn: undefined,
        HierarchyGroupId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HierarchyGroupArn !== undefined && data.HierarchyGroupArn !== null) {
        contents.HierarchyGroupArn = data.HierarchyGroupArn;
    }
    if (data.HierarchyGroupId !== undefined && data.HierarchyGroupId !== null) {
        contents.HierarchyGroupId = data.HierarchyGroupId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUserHierarchyGroupCommand = deserializeAws_restJson1CreateUserHierarchyGroupCommand;
const deserializeAws_restJson1CreateUserHierarchyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DeleteInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInstanceCommand = deserializeAws_restJson1DeleteInstanceCommand;
const deserializeAws_restJson1DeleteInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteIntegrationAssociationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIntegrationAssociationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIntegrationAssociationCommand = deserializeAws_restJson1DeleteIntegrationAssociationCommand;
const deserializeAws_restJson1DeleteIntegrationAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DeleteQuickConnectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteQuickConnectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteQuickConnectCommand = deserializeAws_restJson1DeleteQuickConnectCommand;
const deserializeAws_restJson1DeleteQuickConnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DeleteUseCaseCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUseCaseCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUseCaseCommand = deserializeAws_restJson1DeleteUseCaseCommand;
const deserializeAws_restJson1DeleteUseCaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DeleteUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUserCommand = deserializeAws_restJson1DeleteUserCommand;
const deserializeAws_restJson1DeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DeleteUserHierarchyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserHierarchyGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUserHierarchyGroupCommand = deserializeAws_restJson1DeleteUserHierarchyGroupCommand;
const deserializeAws_restJson1DeleteUserHierarchyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.connect#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeContactFlowCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeContactFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactFlow: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactFlow !== undefined && data.ContactFlow !== null) {
        contents.ContactFlow = deserializeAws_restJson1ContactFlow(data.ContactFlow, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeContactFlowCommand = deserializeAws_restJson1DescribeContactFlowCommand;
const deserializeAws_restJson1DescribeContactFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContactFlowNotPublishedException":
        case "com.amazonaws.connect#ContactFlowNotPublishedException":
            response = {
                ...(await deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeHoursOfOperationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeHoursOfOperationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HoursOfOperation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HoursOfOperation !== undefined && data.HoursOfOperation !== null) {
        contents.HoursOfOperation = deserializeAws_restJson1HoursOfOperation(data.HoursOfOperation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeHoursOfOperationCommand = deserializeAws_restJson1DescribeHoursOfOperationCommand;
const deserializeAws_restJson1DescribeHoursOfOperationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Instance: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Instance !== undefined && data.Instance !== null) {
        contents.Instance = deserializeAws_restJson1Instance(data.Instance, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInstanceCommand = deserializeAws_restJson1DescribeInstanceCommand;
const deserializeAws_restJson1DescribeInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeInstanceAttributeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInstanceAttributeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Attribute: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Attribute !== undefined && data.Attribute !== null) {
        contents.Attribute = deserializeAws_restJson1Attribute(data.Attribute, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInstanceAttributeCommand = deserializeAws_restJson1DescribeInstanceAttributeCommand;
const deserializeAws_restJson1DescribeInstanceAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeInstanceStorageConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInstanceStorageConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StorageConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StorageConfig !== undefined && data.StorageConfig !== null) {
        contents.StorageConfig = deserializeAws_restJson1InstanceStorageConfig(data.StorageConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInstanceStorageConfigCommand = deserializeAws_restJson1DescribeInstanceStorageConfigCommand;
const deserializeAws_restJson1DescribeInstanceStorageConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeQueueCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeQueueCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Queue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Queue !== undefined && data.Queue !== null) {
        contents.Queue = deserializeAws_restJson1Queue(data.Queue, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeQueueCommand = deserializeAws_restJson1DescribeQueueCommand;
const deserializeAws_restJson1DescribeQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeQuickConnectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeQuickConnectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        QuickConnect: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.QuickConnect !== undefined && data.QuickConnect !== null) {
        contents.QuickConnect = deserializeAws_restJson1QuickConnect(data.QuickConnect, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeQuickConnectCommand = deserializeAws_restJson1DescribeQuickConnectCommand;
const deserializeAws_restJson1DescribeQuickConnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeRoutingProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRoutingProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RoutingProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RoutingProfile !== undefined && data.RoutingProfile !== null) {
        contents.RoutingProfile = deserializeAws_restJson1RoutingProfile(data.RoutingProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRoutingProfileCommand = deserializeAws_restJson1DescribeRoutingProfileCommand;
const deserializeAws_restJson1DescribeRoutingProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUserCommand = deserializeAws_restJson1DescribeUserCommand;
const deserializeAws_restJson1DescribeUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeUserHierarchyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUserHierarchyGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HierarchyGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HierarchyGroup !== undefined && data.HierarchyGroup !== null) {
        contents.HierarchyGroup = deserializeAws_restJson1HierarchyGroup(data.HierarchyGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUserHierarchyGroupCommand = deserializeAws_restJson1DescribeUserHierarchyGroupCommand;
const deserializeAws_restJson1DescribeUserHierarchyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DescribeUserHierarchyStructureCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUserHierarchyStructureCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HierarchyStructure: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HierarchyStructure !== undefined && data.HierarchyStructure !== null) {
        contents.HierarchyStructure = deserializeAws_restJson1HierarchyStructure(data.HierarchyStructure, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUserHierarchyStructureCommand = deserializeAws_restJson1DescribeUserHierarchyStructureCommand;
const deserializeAws_restJson1DescribeUserHierarchyStructureCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateApprovedOriginCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateApprovedOriginCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateApprovedOriginCommand = deserializeAws_restJson1DisassociateApprovedOriginCommand;
const deserializeAws_restJson1DisassociateApprovedOriginCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateInstanceStorageConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateInstanceStorageConfigCommand = deserializeAws_restJson1DisassociateInstanceStorageConfigCommand;
const deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateLambdaFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateLambdaFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateLambdaFunctionCommand = deserializeAws_restJson1DisassociateLambdaFunctionCommand;
const deserializeAws_restJson1DisassociateLambdaFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateLexBotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateLexBotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateLexBotCommand = deserializeAws_restJson1DisassociateLexBotCommand;
const deserializeAws_restJson1DisassociateLexBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateQueueQuickConnectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateQueueQuickConnectsCommand = deserializeAws_restJson1DisassociateQueueQuickConnectsCommand;
const deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand = deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand;
const deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1DisassociateSecurityKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateSecurityKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateSecurityKeyCommand = deserializeAws_restJson1DisassociateSecurityKeyCommand;
const deserializeAws_restJson1DisassociateSecurityKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1GetContactAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetContactAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Attributes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Attributes !== undefined && data.Attributes !== null) {
        contents.Attributes = deserializeAws_restJson1Attributes(data.Attributes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetContactAttributesCommand = deserializeAws_restJson1GetContactAttributesCommand;
const deserializeAws_restJson1GetContactAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCurrentMetricDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCurrentMetricDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSnapshotTime: undefined,
        MetricResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSnapshotTime !== undefined && data.DataSnapshotTime !== null) {
        contents.DataSnapshotTime = new Date(Math.round(data.DataSnapshotTime * 1000));
    }
    if (data.MetricResults !== undefined && data.MetricResults !== null) {
        contents.MetricResults = deserializeAws_restJson1CurrentMetricResults(data.MetricResults, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCurrentMetricDataCommand = deserializeAws_restJson1GetCurrentMetricDataCommand;
const deserializeAws_restJson1GetCurrentMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1GetFederationTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFederationTokenCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Credentials: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Credentials !== undefined && data.Credentials !== null) {
        contents.Credentials = deserializeAws_restJson1Credentials(data.Credentials, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFederationTokenCommand = deserializeAws_restJson1GetFederationTokenCommand;
const deserializeAws_restJson1GetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.connect#UserNotFoundException":
            response = {
                ...(await deserializeAws_restJson1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMetricDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMetricDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MetricResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MetricResults !== undefined && data.MetricResults !== null) {
        contents.MetricResults = deserializeAws_restJson1HistoricalMetricResults(data.MetricResults, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMetricDataCommand = deserializeAws_restJson1GetMetricDataCommand;
const deserializeAws_restJson1GetMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListApprovedOriginsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListApprovedOriginsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Origins: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Origins !== undefined && data.Origins !== null) {
        contents.Origins = deserializeAws_restJson1OriginsList(data.Origins, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApprovedOriginsCommand = deserializeAws_restJson1ListApprovedOriginsCommand;
const deserializeAws_restJson1ListApprovedOriginsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListContactFlowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListContactFlowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactFlowSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactFlowSummaryList !== undefined && data.ContactFlowSummaryList !== null) {
        contents.ContactFlowSummaryList = deserializeAws_restJson1ContactFlowSummaryList(data.ContactFlowSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListContactFlowsCommand = deserializeAws_restJson1ListContactFlowsCommand;
const deserializeAws_restJson1ListContactFlowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListHoursOfOperationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListHoursOfOperationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HoursOfOperationSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HoursOfOperationSummaryList !== undefined && data.HoursOfOperationSummaryList !== null) {
        contents.HoursOfOperationSummaryList = deserializeAws_restJson1HoursOfOperationSummaryList(data.HoursOfOperationSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListHoursOfOperationsCommand = deserializeAws_restJson1ListHoursOfOperationsCommand;
const deserializeAws_restJson1ListHoursOfOperationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListInstanceAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInstanceAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Attributes: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Attributes !== undefined && data.Attributes !== null) {
        contents.Attributes = deserializeAws_restJson1AttributesList(data.Attributes, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInstanceAttributesCommand = deserializeAws_restJson1ListInstanceAttributesCommand;
const deserializeAws_restJson1ListInstanceAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListInstancesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInstancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InstanceSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.InstanceSummaryList !== undefined && data.InstanceSummaryList !== null) {
        contents.InstanceSummaryList = deserializeAws_restJson1InstanceSummaryList(data.InstanceSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInstancesCommand = deserializeAws_restJson1ListInstancesCommand;
const deserializeAws_restJson1ListInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInstanceStorageConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInstanceStorageConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        StorageConfigs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.StorageConfigs !== undefined && data.StorageConfigs !== null) {
        contents.StorageConfigs = deserializeAws_restJson1InstanceStorageConfigs(data.StorageConfigs, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInstanceStorageConfigsCommand = deserializeAws_restJson1ListInstanceStorageConfigsCommand;
const deserializeAws_restJson1ListInstanceStorageConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListIntegrationAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIntegrationAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IntegrationAssociationSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IntegrationAssociationSummaryList !== undefined && data.IntegrationAssociationSummaryList !== null) {
        contents.IntegrationAssociationSummaryList = deserializeAws_restJson1IntegrationAssociationSummaryList(data.IntegrationAssociationSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIntegrationAssociationsCommand = deserializeAws_restJson1ListIntegrationAssociationsCommand;
const deserializeAws_restJson1ListIntegrationAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListLambdaFunctionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLambdaFunctionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LambdaFunctions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LambdaFunctions !== undefined && data.LambdaFunctions !== null) {
        contents.LambdaFunctions = deserializeAws_restJson1FunctionArnsList(data.LambdaFunctions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLambdaFunctionsCommand = deserializeAws_restJson1ListLambdaFunctionsCommand;
const deserializeAws_restJson1ListLambdaFunctionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListLexBotsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLexBotsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LexBots: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LexBots !== undefined && data.LexBots !== null) {
        contents.LexBots = deserializeAws_restJson1LexBotsList(data.LexBots, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLexBotsCommand = deserializeAws_restJson1ListLexBotsCommand;
const deserializeAws_restJson1ListLexBotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListPhoneNumbersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPhoneNumbersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PhoneNumberSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.PhoneNumberSummaryList !== undefined && data.PhoneNumberSummaryList !== null) {
        contents.PhoneNumberSummaryList = deserializeAws_restJson1PhoneNumberSummaryList(data.PhoneNumberSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPhoneNumbersCommand = deserializeAws_restJson1ListPhoneNumbersCommand;
const deserializeAws_restJson1ListPhoneNumbersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListPromptsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPromptsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PromptSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.PromptSummaryList !== undefined && data.PromptSummaryList !== null) {
        contents.PromptSummaryList = deserializeAws_restJson1PromptSummaryList(data.PromptSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPromptsCommand = deserializeAws_restJson1ListPromptsCommand;
const deserializeAws_restJson1ListPromptsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListQueueQuickConnectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListQueueQuickConnectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QuickConnectSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.QuickConnectSummaryList !== undefined && data.QuickConnectSummaryList !== null) {
        contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(data.QuickConnectSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListQueueQuickConnectsCommand = deserializeAws_restJson1ListQueueQuickConnectsCommand;
const deserializeAws_restJson1ListQueueQuickConnectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListQueuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListQueuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QueueSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.QueueSummaryList !== undefined && data.QueueSummaryList !== null) {
        contents.QueueSummaryList = deserializeAws_restJson1QueueSummaryList(data.QueueSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListQueuesCommand = deserializeAws_restJson1ListQueuesCommand;
const deserializeAws_restJson1ListQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListQuickConnectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListQuickConnectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QuickConnectSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.QuickConnectSummaryList !== undefined && data.QuickConnectSummaryList !== null) {
        contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(data.QuickConnectSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListQuickConnectsCommand = deserializeAws_restJson1ListQuickConnectsCommand;
const deserializeAws_restJson1ListQuickConnectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListRoutingProfileQueuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRoutingProfileQueuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RoutingProfileQueueConfigSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RoutingProfileQueueConfigSummaryList !== undefined && data.RoutingProfileQueueConfigSummaryList !== null) {
        contents.RoutingProfileQueueConfigSummaryList = deserializeAws_restJson1RoutingProfileQueueConfigSummaryList(data.RoutingProfileQueueConfigSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRoutingProfileQueuesCommand = deserializeAws_restJson1ListRoutingProfileQueuesCommand;
const deserializeAws_restJson1ListRoutingProfileQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListRoutingProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRoutingProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RoutingProfileSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RoutingProfileSummaryList !== undefined && data.RoutingProfileSummaryList !== null) {
        contents.RoutingProfileSummaryList = deserializeAws_restJson1RoutingProfileSummaryList(data.RoutingProfileSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRoutingProfilesCommand = deserializeAws_restJson1ListRoutingProfilesCommand;
const deserializeAws_restJson1ListRoutingProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListSecurityKeysCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSecurityKeysCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SecurityKeys: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SecurityKeys !== undefined && data.SecurityKeys !== null) {
        contents.SecurityKeys = deserializeAws_restJson1SecurityKeysList(data.SecurityKeys, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSecurityKeysCommand = deserializeAws_restJson1ListSecurityKeysCommand;
const deserializeAws_restJson1ListSecurityKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListSecurityProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSecurityProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SecurityProfileSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SecurityProfileSummaryList !== undefined && data.SecurityProfileSummaryList !== null) {
        contents.SecurityProfileSummaryList = deserializeAws_restJson1SecurityProfileSummaryList(data.SecurityProfileSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSecurityProfilesCommand = deserializeAws_restJson1ListSecurityProfilesCommand;
const deserializeAws_restJson1ListSecurityProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListUseCasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUseCasesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        UseCaseSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.UseCaseSummaryList !== undefined && data.UseCaseSummaryList !== null) {
        contents.UseCaseSummaryList = deserializeAws_restJson1UseCaseSummaryList(data.UseCaseSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUseCasesCommand = deserializeAws_restJson1ListUseCasesCommand;
const deserializeAws_restJson1ListUseCasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListUserHierarchyGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUserHierarchyGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        UserHierarchyGroupSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.UserHierarchyGroupSummaryList !== undefined && data.UserHierarchyGroupSummaryList !== null) {
        contents.UserHierarchyGroupSummaryList = deserializeAws_restJson1HierarchyGroupSummaryList(data.UserHierarchyGroupSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUserHierarchyGroupsCommand = deserializeAws_restJson1ListUserHierarchyGroupsCommand;
const deserializeAws_restJson1ListUserHierarchyGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ListUsersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUsersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        UserSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.UserSummaryList !== undefined && data.UserSummaryList !== null) {
        contents.UserSummaryList = deserializeAws_restJson1UserSummaryList(data.UserSummaryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUsersCommand = deserializeAws_restJson1ListUsersCommand;
const deserializeAws_restJson1ListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ResumeContactRecordingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ResumeContactRecordingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResumeContactRecordingCommand = deserializeAws_restJson1ResumeContactRecordingCommand;
const deserializeAws_restJson1ResumeContactRecordingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartChatContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartChatContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactId: undefined,
        ParticipantId: undefined,
        ParticipantToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactId !== undefined && data.ContactId !== null) {
        contents.ContactId = data.ContactId;
    }
    if (data.ParticipantId !== undefined && data.ParticipantId !== null) {
        contents.ParticipantId = data.ParticipantId;
    }
    if (data.ParticipantToken !== undefined && data.ParticipantToken !== null) {
        contents.ParticipantToken = data.ParticipantToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartChatContactCommand = deserializeAws_restJson1StartChatContactCommand;
const deserializeAws_restJson1StartChatContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartContactRecordingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartContactRecordingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartContactRecordingCommand = deserializeAws_restJson1StartContactRecordingCommand;
const deserializeAws_restJson1StartContactRecordingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartOutboundVoiceContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartOutboundVoiceContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactId !== undefined && data.ContactId !== null) {
        contents.ContactId = data.ContactId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartOutboundVoiceContactCommand = deserializeAws_restJson1StartOutboundVoiceContactCommand;
const deserializeAws_restJson1StartOutboundVoiceContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DestinationNotAllowedException":
        case "com.amazonaws.connect#DestinationNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1DestinationNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.connect#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OutboundContactNotPermittedException":
        case "com.amazonaws.connect#OutboundContactNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartTaskContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartTaskContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactId !== undefined && data.ContactId !== null) {
        contents.ContactId = data.ContactId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartTaskContactCommand = deserializeAws_restJson1StartTaskContactCommand;
const deserializeAws_restJson1StartTaskContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connect#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1StopContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopContactCommand = deserializeAws_restJson1StopContactCommand;
const deserializeAws_restJson1StopContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContactNotFoundException":
        case "com.amazonaws.connect#ContactNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContactNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopContactRecordingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopContactRecordingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopContactRecordingCommand = deserializeAws_restJson1StopContactRecordingCommand;
const deserializeAws_restJson1StopContactRecordingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SuspendContactRecordingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SuspendContactRecordingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SuspendContactRecordingCommand = deserializeAws_restJson1SuspendContactRecordingCommand;
const deserializeAws_restJson1SuspendContactRecordingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateContactAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateContactAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateContactAttributesCommand = deserializeAws_restJson1UpdateContactAttributesCommand;
const deserializeAws_restJson1UpdateContactAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateContactFlowContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateContactFlowContentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateContactFlowContentCommand = deserializeAws_restJson1UpdateContactFlowContentCommand;
const deserializeAws_restJson1UpdateContactFlowContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidContactFlowException":
        case "com.amazonaws.connect#InvalidContactFlowException":
            response = {
                ...(await deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateContactFlowNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateContactFlowNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateContactFlowNameCommand = deserializeAws_restJson1UpdateContactFlowNameCommand;
const deserializeAws_restJson1UpdateContactFlowNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateInstanceAttributeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInstanceAttributeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInstanceAttributeCommand = deserializeAws_restJson1UpdateInstanceAttributeCommand;
const deserializeAws_restJson1UpdateInstanceAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateInstanceStorageConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInstanceStorageConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInstanceStorageConfigCommand = deserializeAws_restJson1UpdateInstanceStorageConfigCommand;
const deserializeAws_restJson1UpdateInstanceStorageConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQueueHoursOfOperationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQueueHoursOfOperationCommand = deserializeAws_restJson1UpdateQueueHoursOfOperationCommand;
const deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQueueMaxContactsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQueueMaxContactsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQueueMaxContactsCommand = deserializeAws_restJson1UpdateQueueMaxContactsCommand;
const deserializeAws_restJson1UpdateQueueMaxContactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQueueNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQueueNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQueueNameCommand = deserializeAws_restJson1UpdateQueueNameCommand;
const deserializeAws_restJson1UpdateQueueNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand;
const deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQueueStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQueueStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQueueStatusCommand = deserializeAws_restJson1UpdateQueueStatusCommand;
const deserializeAws_restJson1UpdateQueueStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQuickConnectConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQuickConnectConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQuickConnectConfigCommand = deserializeAws_restJson1UpdateQuickConnectConfigCommand;
const deserializeAws_restJson1UpdateQuickConnectConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateQuickConnectNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateQuickConnectNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateQuickConnectNameCommand = deserializeAws_restJson1UpdateQuickConnectNameCommand;
const deserializeAws_restJson1UpdateQuickConnectNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand;
const deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand;
const deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateRoutingProfileNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRoutingProfileNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRoutingProfileNameCommand = deserializeAws_restJson1UpdateRoutingProfileNameCommand;
const deserializeAws_restJson1UpdateRoutingProfileNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateRoutingProfileQueuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRoutingProfileQueuesCommand = deserializeAws_restJson1UpdateRoutingProfileQueuesCommand;
const deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserHierarchyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserHierarchyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserHierarchyCommand = deserializeAws_restJson1UpdateUserHierarchyCommand;
const deserializeAws_restJson1UpdateUserHierarchyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand = deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand;
const deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.connect#DuplicateResourceException":
            response = {
                ...(await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserHierarchyStructureCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserHierarchyStructureCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserHierarchyStructureCommand = deserializeAws_restJson1UpdateUserHierarchyStructureCommand;
const deserializeAws_restJson1UpdateUserHierarchyStructureCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.connect#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserIdentityInfoCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserIdentityInfoCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserIdentityInfoCommand = deserializeAws_restJson1UpdateUserIdentityInfoCommand;
const deserializeAws_restJson1UpdateUserIdentityInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserPhoneConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserPhoneConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserPhoneConfigCommand = deserializeAws_restJson1UpdateUserPhoneConfigCommand;
const deserializeAws_restJson1UpdateUserPhoneConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserRoutingProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserRoutingProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserRoutingProfileCommand = deserializeAws_restJson1UpdateUserRoutingProfileCommand;
const deserializeAws_restJson1UpdateUserRoutingProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1UpdateUserSecurityProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserSecurityProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserSecurityProfilesCommand = deserializeAws_restJson1UpdateUserSecurityProfilesCommand;
const deserializeAws_restJson1UpdateUserSecurityProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.connect#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.connect#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connect#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connect#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connect#ThrottlingException":
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
const deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ContactFlowNotPublishedException",
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
const deserializeAws_restJson1ContactNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ContactNotFoundException",
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
const deserializeAws_restJson1DestinationNotAllowedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DestinationNotAllowedException",
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
const deserializeAws_restJson1DuplicateResourceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DuplicateResourceException",
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
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
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
const deserializeAws_restJson1InvalidContactFlowExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidContactFlowException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        problems: undefined,
    };
    const data = parsedOutput.body;
    if (data.problems !== undefined && data.problems !== null) {
        contents.problems = deserializeAws_restJson1Problems(data.problems, context);
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
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
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "OutboundContactNotPermittedException",
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
const deserializeAws_restJson1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceConflictException",
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
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1UserNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UserNotFoundException",
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
const serializeAws_restJson1Attributes = (input, context) => {
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
const serializeAws_restJson1Channels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ChatMessage = (input, context) => {
    return {
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    };
};
const serializeAws_restJson1ContactReferences = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1Reference(value, context),
        };
    }, {});
};
const serializeAws_restJson1CurrentMetric = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    };
};
const serializeAws_restJson1CurrentMetrics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CurrentMetric(entry, context);
    });
};
const serializeAws_restJson1EncryptionConfig = (input, context) => {
    return {
        ...(input.EncryptionType !== undefined &&
            input.EncryptionType !== null && { EncryptionType: input.EncryptionType }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_restJson1Filters = (input, context) => {
    return {
        ...(input.Channels !== undefined &&
            input.Channels !== null && { Channels: serializeAws_restJson1Channels(input.Channels, context) }),
        ...(input.Queues !== undefined &&
            input.Queues !== null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }),
    };
};
const serializeAws_restJson1Groupings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1HierarchyLevelUpdate = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_restJson1HierarchyStructureUpdate = (input, context) => {
    return {
        ...(input.LevelFive !== undefined &&
            input.LevelFive !== null && { LevelFive: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFive, context) }),
        ...(input.LevelFour !== undefined &&
            input.LevelFour !== null && { LevelFour: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFour, context) }),
        ...(input.LevelOne !== undefined &&
            input.LevelOne !== null && { LevelOne: serializeAws_restJson1HierarchyLevelUpdate(input.LevelOne, context) }),
        ...(input.LevelThree !== undefined &&
            input.LevelThree !== null && {
            LevelThree: serializeAws_restJson1HierarchyLevelUpdate(input.LevelThree, context),
        }),
        ...(input.LevelTwo !== undefined &&
            input.LevelTwo !== null && { LevelTwo: serializeAws_restJson1HierarchyLevelUpdate(input.LevelTwo, context) }),
    };
};
const serializeAws_restJson1HistoricalMetric = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
        ...(input.Threshold !== undefined &&
            input.Threshold !== null && { Threshold: serializeAws_restJson1Threshold(input.Threshold, context) }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    };
};
const serializeAws_restJson1HistoricalMetrics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HistoricalMetric(entry, context);
    });
};
const serializeAws_restJson1InstanceStorageConfig = (input, context) => {
    return {
        ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
        ...(input.KinesisFirehoseConfig !== undefined &&
            input.KinesisFirehoseConfig !== null && {
            KinesisFirehoseConfig: serializeAws_restJson1KinesisFirehoseConfig(input.KinesisFirehoseConfig, context),
        }),
        ...(input.KinesisStreamConfig !== undefined &&
            input.KinesisStreamConfig !== null && {
            KinesisStreamConfig: serializeAws_restJson1KinesisStreamConfig(input.KinesisStreamConfig, context),
        }),
        ...(input.KinesisVideoStreamConfig !== undefined &&
            input.KinesisVideoStreamConfig !== null && {
            KinesisVideoStreamConfig: serializeAws_restJson1KinesisVideoStreamConfig(input.KinesisVideoStreamConfig, context),
        }),
        ...(input.S3Config !== undefined &&
            input.S3Config !== null && { S3Config: serializeAws_restJson1S3Config(input.S3Config, context) }),
        ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    };
};
const serializeAws_restJson1KinesisFirehoseConfig = (input, context) => {
    return {
        ...(input.FirehoseArn !== undefined && input.FirehoseArn !== null && { FirehoseArn: input.FirehoseArn }),
    };
};
const serializeAws_restJson1KinesisStreamConfig = (input, context) => {
    return {
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
    };
};
const serializeAws_restJson1KinesisVideoStreamConfig = (input, context) => {
    return {
        ...(input.EncryptionConfig !== undefined &&
            input.EncryptionConfig !== null && {
            EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
        }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.RetentionPeriodHours !== undefined &&
            input.RetentionPeriodHours !== null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    };
};
const serializeAws_restJson1LexBot = (input, context) => {
    return {
        ...(input.LexRegion !== undefined && input.LexRegion !== null && { LexRegion: input.LexRegion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_restJson1MediaConcurrencies = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaConcurrency(entry, context);
    });
};
const serializeAws_restJson1MediaConcurrency = (input, context) => {
    return {
        ...(input.Channel !== undefined && input.Channel !== null && { Channel: input.Channel }),
        ...(input.Concurrency !== undefined && input.Concurrency !== null && { Concurrency: input.Concurrency }),
    };
};
const serializeAws_restJson1OutboundCallerConfig = (input, context) => {
    return {
        ...(input.OutboundCallerIdName !== undefined &&
            input.OutboundCallerIdName !== null && { OutboundCallerIdName: input.OutboundCallerIdName }),
        ...(input.OutboundCallerIdNumberId !== undefined &&
            input.OutboundCallerIdNumberId !== null && { OutboundCallerIdNumberId: input.OutboundCallerIdNumberId }),
        ...(input.OutboundFlowId !== undefined &&
            input.OutboundFlowId !== null && { OutboundFlowId: input.OutboundFlowId }),
    };
};
const serializeAws_restJson1ParticipantDetails = (input, context) => {
    return {
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    };
};
const serializeAws_restJson1PhoneNumberQuickConnectConfig = (input, context) => {
    return {
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    };
};
const serializeAws_restJson1QueueQuickConnectConfig = (input, context) => {
    return {
        ...(input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId }),
        ...(input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId }),
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
const serializeAws_restJson1QuickConnectConfig = (input, context) => {
    return {
        ...(input.PhoneConfig !== undefined &&
            input.PhoneConfig !== null && {
            PhoneConfig: serializeAws_restJson1PhoneNumberQuickConnectConfig(input.PhoneConfig, context),
        }),
        ...(input.QueueConfig !== undefined &&
            input.QueueConfig !== null && {
            QueueConfig: serializeAws_restJson1QueueQuickConnectConfig(input.QueueConfig, context),
        }),
        ...(input.QuickConnectType !== undefined &&
            input.QuickConnectType !== null && { QuickConnectType: input.QuickConnectType }),
        ...(input.UserConfig !== undefined &&
            input.UserConfig !== null && {
            UserConfig: serializeAws_restJson1UserQuickConnectConfig(input.UserConfig, context),
        }),
    };
};
const serializeAws_restJson1QuickConnectsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Reference = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1RoutingProfileQueueConfig = (input, context) => {
    return {
        ...(input.Delay !== undefined && input.Delay !== null && { Delay: input.Delay }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.QueueReference !== undefined &&
            input.QueueReference !== null && {
            QueueReference: serializeAws_restJson1RoutingProfileQueueReference(input.QueueReference, context),
        }),
    };
};
const serializeAws_restJson1RoutingProfileQueueConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RoutingProfileQueueConfig(entry, context);
    });
};
const serializeAws_restJson1RoutingProfileQueueReference = (input, context) => {
    return {
        ...(input.Channel !== undefined && input.Channel !== null && { Channel: input.Channel }),
        ...(input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId }),
    };
};
const serializeAws_restJson1RoutingProfileQueueReferenceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RoutingProfileQueueReference(entry, context);
    });
};
const serializeAws_restJson1S3Config = (input, context) => {
    return {
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.BucketPrefix !== undefined && input.BucketPrefix !== null && { BucketPrefix: input.BucketPrefix }),
        ...(input.EncryptionConfig !== undefined &&
            input.EncryptionConfig !== null && {
            EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
        }),
    };
};
const serializeAws_restJson1SecurityProfileIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
const serializeAws_restJson1Threshold = (input, context) => {
    return {
        ...(input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison }),
        ...(input.ThresholdValue !== undefined &&
            input.ThresholdValue !== null && { ThresholdValue: input.ThresholdValue }),
    };
};
const serializeAws_restJson1UserIdentityInfo = (input, context) => {
    return {
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
        ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    };
};
const serializeAws_restJson1UserPhoneConfig = (input, context) => {
    return {
        ...(input.AfterContactWorkTimeLimit !== undefined &&
            input.AfterContactWorkTimeLimit !== null && { AfterContactWorkTimeLimit: input.AfterContactWorkTimeLimit }),
        ...(input.AutoAccept !== undefined && input.AutoAccept !== null && { AutoAccept: input.AutoAccept }),
        ...(input.DeskPhoneNumber !== undefined &&
            input.DeskPhoneNumber !== null && { DeskPhoneNumber: input.DeskPhoneNumber }),
        ...(input.PhoneType !== undefined && input.PhoneType !== null && { PhoneType: input.PhoneType }),
    };
};
const serializeAws_restJson1UserQuickConnectConfig = (input, context) => {
    return {
        ...(input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_restJson1VoiceRecordingConfiguration = (input, context) => {
    return {
        ...(input.VoiceRecordingTrack !== undefined &&
            input.VoiceRecordingTrack !== null && { VoiceRecordingTrack: input.VoiceRecordingTrack }),
    };
};
const deserializeAws_restJson1Attribute = (output, context) => {
    return {
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Attributes = (output, context) => {
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
const deserializeAws_restJson1AttributesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Attribute(entry, context);
    });
};
const deserializeAws_restJson1ContactFlow = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ContactFlowSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ContactFlowType: output.ContactFlowType !== undefined && output.ContactFlowType !== null ? output.ContactFlowType : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ContactFlowSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContactFlowSummary(entry, context);
    });
};
const deserializeAws_restJson1Credentials = (output, context) => {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
        AccessTokenExpiration: output.AccessTokenExpiration !== undefined && output.AccessTokenExpiration !== null
            ? new Date(Math.round(output.AccessTokenExpiration * 1000))
            : undefined,
        RefreshToken: output.RefreshToken !== undefined && output.RefreshToken !== null ? output.RefreshToken : undefined,
        RefreshTokenExpiration: output.RefreshTokenExpiration !== undefined && output.RefreshTokenExpiration !== null
            ? new Date(Math.round(output.RefreshTokenExpiration * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1CurrentMetric = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_restJson1CurrentMetricData = (output, context) => {
    return {
        Metric: output.Metric !== undefined && output.Metric !== null
            ? deserializeAws_restJson1CurrentMetric(output.Metric, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1CurrentMetricDataCollections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CurrentMetricData(entry, context);
    });
};
const deserializeAws_restJson1CurrentMetricResult = (output, context) => {
    return {
        Collections: output.Collections !== undefined && output.Collections !== null
            ? deserializeAws_restJson1CurrentMetricDataCollections(output.Collections, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1Dimensions(output.Dimensions, context)
            : undefined,
    };
};
const deserializeAws_restJson1CurrentMetricResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CurrentMetricResult(entry, context);
    });
};
const deserializeAws_restJson1Dimensions = (output, context) => {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Queue: output.Queue !== undefined && output.Queue !== null
            ? deserializeAws_restJson1QueueReference(output.Queue, context)
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionConfig = (output, context) => {
    return {
        EncryptionType: output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
const deserializeAws_restJson1FunctionArnsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1HierarchyGroup = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        HierarchyPath: output.HierarchyPath !== undefined && output.HierarchyPath !== null
            ? deserializeAws_restJson1HierarchyPath(output.HierarchyPath, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LevelId: output.LevelId !== undefined && output.LevelId !== null ? output.LevelId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1HierarchyGroupSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1HierarchyGroupSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HierarchyGroupSummary(entry, context);
    });
};
const deserializeAws_restJson1HierarchyLevel = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1HierarchyPath = (output, context) => {
    return {
        LevelFive: output.LevelFive !== undefined && output.LevelFive !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFive, context)
            : undefined,
        LevelFour: output.LevelFour !== undefined && output.LevelFour !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFour, context)
            : undefined,
        LevelOne: output.LevelOne !== undefined && output.LevelOne !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelOne, context)
            : undefined,
        LevelThree: output.LevelThree !== undefined && output.LevelThree !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelThree, context)
            : undefined,
        LevelTwo: output.LevelTwo !== undefined && output.LevelTwo !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelTwo, context)
            : undefined,
    };
};
const deserializeAws_restJson1HierarchyStructure = (output, context) => {
    return {
        LevelFive: output.LevelFive !== undefined && output.LevelFive !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelFive, context)
            : undefined,
        LevelFour: output.LevelFour !== undefined && output.LevelFour !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelFour, context)
            : undefined,
        LevelOne: output.LevelOne !== undefined && output.LevelOne !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelOne, context)
            : undefined,
        LevelThree: output.LevelThree !== undefined && output.LevelThree !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelThree, context)
            : undefined,
        LevelTwo: output.LevelTwo !== undefined && output.LevelTwo !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelTwo, context)
            : undefined,
    };
};
const deserializeAws_restJson1HistoricalMetric = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null
            ? deserializeAws_restJson1Threshold(output.Threshold, context)
            : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_restJson1HistoricalMetricData = (output, context) => {
    return {
        Metric: output.Metric !== undefined && output.Metric !== null
            ? deserializeAws_restJson1HistoricalMetric(output.Metric, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1HistoricalMetricDataCollections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistoricalMetricData(entry, context);
    });
};
const deserializeAws_restJson1HistoricalMetricResult = (output, context) => {
    return {
        Collections: output.Collections !== undefined && output.Collections !== null
            ? deserializeAws_restJson1HistoricalMetricDataCollections(output.Collections, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1Dimensions(output.Dimensions, context)
            : undefined,
    };
};
const deserializeAws_restJson1HistoricalMetricResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistoricalMetricResult(entry, context);
    });
};
const deserializeAws_restJson1HoursOfOperation = (output, context) => {
    return {
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_restJson1HoursOfOperationConfigList(output.Config, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HoursOfOperationArn: output.HoursOfOperationArn !== undefined && output.HoursOfOperationArn !== null
            ? output.HoursOfOperationArn
            : undefined,
        HoursOfOperationId: output.HoursOfOperationId !== undefined && output.HoursOfOperationId !== null
            ? output.HoursOfOperationId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        TimeZone: output.TimeZone !== undefined && output.TimeZone !== null ? output.TimeZone : undefined,
    };
};
const deserializeAws_restJson1HoursOfOperationConfig = (output, context) => {
    return {
        Day: output.Day !== undefined && output.Day !== null ? output.Day : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.EndTime, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.StartTime, context)
            : undefined,
    };
};
const deserializeAws_restJson1HoursOfOperationConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HoursOfOperationConfig(entry, context);
    });
};
const deserializeAws_restJson1HoursOfOperationSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1HoursOfOperationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HoursOfOperationSummary(entry, context);
    });
};
const deserializeAws_restJson1HoursOfOperationTimeSlice = (output, context) => {
    return {
        Hours: output.Hours !== undefined && output.Hours !== null ? output.Hours : undefined,
        Minutes: output.Minutes !== undefined && output.Minutes !== null ? output.Minutes : undefined,
    };
};
const deserializeAws_restJson1Instance = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityManagementType: output.IdentityManagementType !== undefined && output.IdentityManagementType !== null
            ? output.IdentityManagementType
            : undefined,
        InboundCallsEnabled: output.InboundCallsEnabled !== undefined && output.InboundCallsEnabled !== null
            ? output.InboundCallsEnabled
            : undefined,
        InstanceAlias: output.InstanceAlias !== undefined && output.InstanceAlias !== null ? output.InstanceAlias : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
        OutboundCallsEnabled: output.OutboundCallsEnabled !== undefined && output.OutboundCallsEnabled !== null
            ? output.OutboundCallsEnabled
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null
            ? deserializeAws_restJson1InstanceStatusReason(output.StatusReason, context)
            : undefined,
    };
};
const deserializeAws_restJson1InstanceStatusReason = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1InstanceStorageConfig = (output, context) => {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        KinesisFirehoseConfig: output.KinesisFirehoseConfig !== undefined && output.KinesisFirehoseConfig !== null
            ? deserializeAws_restJson1KinesisFirehoseConfig(output.KinesisFirehoseConfig, context)
            : undefined,
        KinesisStreamConfig: output.KinesisStreamConfig !== undefined && output.KinesisStreamConfig !== null
            ? deserializeAws_restJson1KinesisStreamConfig(output.KinesisStreamConfig, context)
            : undefined,
        KinesisVideoStreamConfig: output.KinesisVideoStreamConfig !== undefined && output.KinesisVideoStreamConfig !== null
            ? deserializeAws_restJson1KinesisVideoStreamConfig(output.KinesisVideoStreamConfig, context)
            : undefined,
        S3Config: output.S3Config !== undefined && output.S3Config !== null
            ? deserializeAws_restJson1S3Config(output.S3Config, context)
            : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    };
};
const deserializeAws_restJson1InstanceStorageConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceStorageConfig(entry, context);
    });
};
const deserializeAws_restJson1InstanceSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityManagementType: output.IdentityManagementType !== undefined && output.IdentityManagementType !== null
            ? output.IdentityManagementType
            : undefined,
        InboundCallsEnabled: output.InboundCallsEnabled !== undefined && output.InboundCallsEnabled !== null
            ? output.InboundCallsEnabled
            : undefined,
        InstanceAlias: output.InstanceAlias !== undefined && output.InstanceAlias !== null ? output.InstanceAlias : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
        OutboundCallsEnabled: output.OutboundCallsEnabled !== undefined && output.OutboundCallsEnabled !== null
            ? output.OutboundCallsEnabled
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    };
};
const deserializeAws_restJson1InstanceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceSummary(entry, context);
    });
};
const deserializeAws_restJson1IntegrationAssociationSummary = (output, context) => {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IntegrationArn: output.IntegrationArn !== undefined && output.IntegrationArn !== null ? output.IntegrationArn : undefined,
        IntegrationAssociationArn: output.IntegrationAssociationArn !== undefined && output.IntegrationAssociationArn !== null
            ? output.IntegrationAssociationArn
            : undefined,
        IntegrationAssociationId: output.IntegrationAssociationId !== undefined && output.IntegrationAssociationId !== null
            ? output.IntegrationAssociationId
            : undefined,
        IntegrationType: output.IntegrationType !== undefined && output.IntegrationType !== null ? output.IntegrationType : undefined,
        SourceApplicationName: output.SourceApplicationName !== undefined && output.SourceApplicationName !== null
            ? output.SourceApplicationName
            : undefined,
        SourceApplicationUrl: output.SourceApplicationUrl !== undefined && output.SourceApplicationUrl !== null
            ? output.SourceApplicationUrl
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
const deserializeAws_restJson1IntegrationAssociationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntegrationAssociationSummary(entry, context);
    });
};
const deserializeAws_restJson1KinesisFirehoseConfig = (output, context) => {
    return {
        FirehoseArn: output.FirehoseArn !== undefined && output.FirehoseArn !== null ? output.FirehoseArn : undefined,
    };
};
const deserializeAws_restJson1KinesisStreamConfig = (output, context) => {
    return {
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
const deserializeAws_restJson1KinesisVideoStreamConfig = (output, context) => {
    return {
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
        RetentionPeriodHours: output.RetentionPeriodHours !== undefined && output.RetentionPeriodHours !== null
            ? output.RetentionPeriodHours
            : undefined,
    };
};
const deserializeAws_restJson1LexBot = (output, context) => {
    return {
        LexRegion: output.LexRegion !== undefined && output.LexRegion !== null ? output.LexRegion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1LexBotsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LexBot(entry, context);
    });
};
const deserializeAws_restJson1MediaConcurrencies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaConcurrency(entry, context);
    });
};
const deserializeAws_restJson1MediaConcurrency = (output, context) => {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Concurrency: output.Concurrency !== undefined && output.Concurrency !== null ? output.Concurrency : undefined,
    };
};
const deserializeAws_restJson1OriginsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1OutboundCallerConfig = (output, context) => {
    return {
        OutboundCallerIdName: output.OutboundCallerIdName !== undefined && output.OutboundCallerIdName !== null
            ? output.OutboundCallerIdName
            : undefined,
        OutboundCallerIdNumberId: output.OutboundCallerIdNumberId !== undefined && output.OutboundCallerIdNumberId !== null
            ? output.OutboundCallerIdNumberId
            : undefined,
        OutboundFlowId: output.OutboundFlowId !== undefined && output.OutboundFlowId !== null ? output.OutboundFlowId : undefined,
    };
};
const deserializeAws_restJson1PhoneNumberQuickConnectConfig = (output, context) => {
    return {
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
    };
};
const deserializeAws_restJson1PhoneNumberSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        PhoneNumberCountryCode: output.PhoneNumberCountryCode !== undefined && output.PhoneNumberCountryCode !== null
            ? output.PhoneNumberCountryCode
            : undefined,
        PhoneNumberType: output.PhoneNumberType !== undefined && output.PhoneNumberType !== null ? output.PhoneNumberType : undefined,
    };
};
const deserializeAws_restJson1PhoneNumberSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PhoneNumberSummary(entry, context);
    });
};
const deserializeAws_restJson1ProblemDetail = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1Problems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProblemDetail(entry, context);
    });
};
const deserializeAws_restJson1PromptSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1PromptSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PromptSummary(entry, context);
    });
};
const deserializeAws_restJson1Queue = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HoursOfOperationId: output.HoursOfOperationId !== undefined && output.HoursOfOperationId !== null
            ? output.HoursOfOperationId
            : undefined,
        MaxContacts: output.MaxContacts !== undefined && output.MaxContacts !== null ? output.MaxContacts : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutboundCallerConfig: output.OutboundCallerConfig !== undefined && output.OutboundCallerConfig !== null
            ? deserializeAws_restJson1OutboundCallerConfig(output.OutboundCallerConfig, context)
            : undefined,
        QueueArn: output.QueueArn !== undefined && output.QueueArn !== null ? output.QueueArn : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1QueueQuickConnectConfig = (output, context) => {
    return {
        ContactFlowId: output.ContactFlowId !== undefined && output.ContactFlowId !== null ? output.ContactFlowId : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
    };
};
const deserializeAws_restJson1QueueReference = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1QueueSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QueueType: output.QueueType !== undefined && output.QueueType !== null ? output.QueueType : undefined,
    };
};
const deserializeAws_restJson1QueueSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QueueSummary(entry, context);
    });
};
const deserializeAws_restJson1QuickConnect = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuickConnectARN: output.QuickConnectARN !== undefined && output.QuickConnectARN !== null ? output.QuickConnectARN : undefined,
        QuickConnectConfig: output.QuickConnectConfig !== undefined && output.QuickConnectConfig !== null
            ? deserializeAws_restJson1QuickConnectConfig(output.QuickConnectConfig, context)
            : undefined,
        QuickConnectId: output.QuickConnectId !== undefined && output.QuickConnectId !== null ? output.QuickConnectId : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1QuickConnectConfig = (output, context) => {
    return {
        PhoneConfig: output.PhoneConfig !== undefined && output.PhoneConfig !== null
            ? deserializeAws_restJson1PhoneNumberQuickConnectConfig(output.PhoneConfig, context)
            : undefined,
        QueueConfig: output.QueueConfig !== undefined && output.QueueConfig !== null
            ? deserializeAws_restJson1QueueQuickConnectConfig(output.QueueConfig, context)
            : undefined,
        QuickConnectType: output.QuickConnectType !== undefined && output.QuickConnectType !== null ? output.QuickConnectType : undefined,
        UserConfig: output.UserConfig !== undefined && output.UserConfig !== null
            ? deserializeAws_restJson1UserQuickConnectConfig(output.UserConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1QuickConnectSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuickConnectType: output.QuickConnectType !== undefined && output.QuickConnectType !== null ? output.QuickConnectType : undefined,
    };
};
const deserializeAws_restJson1QuickConnectSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QuickConnectSummary(entry, context);
    });
};
const deserializeAws_restJson1RoutingProfile = (output, context) => {
    return {
        DefaultOutboundQueueId: output.DefaultOutboundQueueId !== undefined && output.DefaultOutboundQueueId !== null
            ? output.DefaultOutboundQueueId
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        MediaConcurrencies: output.MediaConcurrencies !== undefined && output.MediaConcurrencies !== null
            ? deserializeAws_restJson1MediaConcurrencies(output.MediaConcurrencies, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoutingProfileArn: output.RoutingProfileArn !== undefined && output.RoutingProfileArn !== null
            ? output.RoutingProfileArn
            : undefined,
        RoutingProfileId: output.RoutingProfileId !== undefined && output.RoutingProfileId !== null ? output.RoutingProfileId : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1RoutingProfileQueueConfigSummary = (output, context) => {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Delay: output.Delay !== undefined && output.Delay !== null ? output.Delay : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        QueueArn: output.QueueArn !== undefined && output.QueueArn !== null ? output.QueueArn : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
        QueueName: output.QueueName !== undefined && output.QueueName !== null ? output.QueueName : undefined,
    };
};
const deserializeAws_restJson1RoutingProfileQueueConfigSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutingProfileQueueConfigSummary(entry, context);
    });
};
const deserializeAws_restJson1RoutingProfileSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1RoutingProfileSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutingProfileSummary(entry, context);
    });
};
const deserializeAws_restJson1S3Config = (output, context) => {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        BucketPrefix: output.BucketPrefix !== undefined && output.BucketPrefix !== null ? output.BucketPrefix : undefined,
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1SecurityKey = (output, context) => {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1SecurityKeysList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityKey(entry, context);
    });
};
const deserializeAws_restJson1SecurityProfileIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SecurityProfileSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1SecurityProfileSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityProfileSummary(entry, context);
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
const deserializeAws_restJson1Threshold = (output, context) => {
    return {
        Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
        ThresholdValue: output.ThresholdValue !== undefined && output.ThresholdValue !== null ? output.ThresholdValue : undefined,
    };
};
const deserializeAws_restJson1UseCase = (output, context) => {
    return {
        UseCaseArn: output.UseCaseArn !== undefined && output.UseCaseArn !== null ? output.UseCaseArn : undefined,
        UseCaseId: output.UseCaseId !== undefined && output.UseCaseId !== null ? output.UseCaseId : undefined,
        UseCaseType: output.UseCaseType !== undefined && output.UseCaseType !== null ? output.UseCaseType : undefined,
    };
};
const deserializeAws_restJson1UseCaseSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UseCase(entry, context);
    });
};
const deserializeAws_restJson1User = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        DirectoryUserId: output.DirectoryUserId !== undefined && output.DirectoryUserId !== null ? output.DirectoryUserId : undefined,
        HierarchyGroupId: output.HierarchyGroupId !== undefined && output.HierarchyGroupId !== null ? output.HierarchyGroupId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityInfo: output.IdentityInfo !== undefined && output.IdentityInfo !== null
            ? deserializeAws_restJson1UserIdentityInfo(output.IdentityInfo, context)
            : undefined,
        PhoneConfig: output.PhoneConfig !== undefined && output.PhoneConfig !== null
            ? deserializeAws_restJson1UserPhoneConfig(output.PhoneConfig, context)
            : undefined,
        RoutingProfileId: output.RoutingProfileId !== undefined && output.RoutingProfileId !== null ? output.RoutingProfileId : undefined,
        SecurityProfileIds: output.SecurityProfileIds !== undefined && output.SecurityProfileIds !== null
            ? deserializeAws_restJson1SecurityProfileIds(output.SecurityProfileIds, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_restJson1UserIdentityInfo = (output, context) => {
    return {
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
        LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    };
};
const deserializeAws_restJson1UserPhoneConfig = (output, context) => {
    return {
        AfterContactWorkTimeLimit: output.AfterContactWorkTimeLimit !== undefined && output.AfterContactWorkTimeLimit !== null
            ? output.AfterContactWorkTimeLimit
            : undefined,
        AutoAccept: output.AutoAccept !== undefined && output.AutoAccept !== null ? output.AutoAccept : undefined,
        DeskPhoneNumber: output.DeskPhoneNumber !== undefined && output.DeskPhoneNumber !== null ? output.DeskPhoneNumber : undefined,
        PhoneType: output.PhoneType !== undefined && output.PhoneType !== null ? output.PhoneType : undefined,
    };
};
const deserializeAws_restJson1UserQuickConnectConfig = (output, context) => {
    return {
        ContactFlowId: output.ContactFlowId !== undefined && output.ContactFlowId !== null ? output.ContactFlowId : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
const deserializeAws_restJson1UserSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_restJson1UserSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UserSummary(entry, context);
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