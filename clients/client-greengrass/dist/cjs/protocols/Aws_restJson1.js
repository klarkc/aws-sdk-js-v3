"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1GetResourceDefinitionCommand = exports.serializeAws_restJson1GetLoggerDefinitionVersionCommand = exports.serializeAws_restJson1GetLoggerDefinitionCommand = exports.serializeAws_restJson1GetGroupVersionCommand = exports.serializeAws_restJson1GetGroupCertificateConfigurationCommand = exports.serializeAws_restJson1GetGroupCertificateAuthorityCommand = exports.serializeAws_restJson1GetGroupCommand = exports.serializeAws_restJson1GetFunctionDefinitionVersionCommand = exports.serializeAws_restJson1GetFunctionDefinitionCommand = exports.serializeAws_restJson1GetDeviceDefinitionVersionCommand = exports.serializeAws_restJson1GetDeviceDefinitionCommand = exports.serializeAws_restJson1GetDeploymentStatusCommand = exports.serializeAws_restJson1GetCoreDefinitionVersionCommand = exports.serializeAws_restJson1GetCoreDefinitionCommand = exports.serializeAws_restJson1GetConnectorDefinitionVersionCommand = exports.serializeAws_restJson1GetConnectorDefinitionCommand = exports.serializeAws_restJson1GetConnectivityInfoCommand = exports.serializeAws_restJson1GetBulkDeploymentStatusCommand = exports.serializeAws_restJson1GetAssociatedRoleCommand = exports.serializeAws_restJson1DisassociateServiceRoleFromAccountCommand = exports.serializeAws_restJson1DisassociateRoleFromGroupCommand = exports.serializeAws_restJson1DeleteSubscriptionDefinitionCommand = exports.serializeAws_restJson1DeleteResourceDefinitionCommand = exports.serializeAws_restJson1DeleteLoggerDefinitionCommand = exports.serializeAws_restJson1DeleteGroupCommand = exports.serializeAws_restJson1DeleteFunctionDefinitionCommand = exports.serializeAws_restJson1DeleteDeviceDefinitionCommand = exports.serializeAws_restJson1DeleteCoreDefinitionCommand = exports.serializeAws_restJson1DeleteConnectorDefinitionCommand = exports.serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = exports.serializeAws_restJson1CreateSubscriptionDefinitionCommand = exports.serializeAws_restJson1CreateSoftwareUpdateJobCommand = exports.serializeAws_restJson1CreateResourceDefinitionVersionCommand = exports.serializeAws_restJson1CreateResourceDefinitionCommand = exports.serializeAws_restJson1CreateLoggerDefinitionVersionCommand = exports.serializeAws_restJson1CreateLoggerDefinitionCommand = exports.serializeAws_restJson1CreateGroupVersionCommand = exports.serializeAws_restJson1CreateGroupCertificateAuthorityCommand = exports.serializeAws_restJson1CreateGroupCommand = exports.serializeAws_restJson1CreateFunctionDefinitionVersionCommand = exports.serializeAws_restJson1CreateFunctionDefinitionCommand = exports.serializeAws_restJson1CreateDeviceDefinitionVersionCommand = exports.serializeAws_restJson1CreateDeviceDefinitionCommand = exports.serializeAws_restJson1CreateDeploymentCommand = exports.serializeAws_restJson1CreateCoreDefinitionVersionCommand = exports.serializeAws_restJson1CreateCoreDefinitionCommand = exports.serializeAws_restJson1CreateConnectorDefinitionVersionCommand = exports.serializeAws_restJson1CreateConnectorDefinitionCommand = exports.serializeAws_restJson1AssociateServiceRoleToAccountCommand = exports.serializeAws_restJson1AssociateRoleToGroupCommand = void 0;
exports.deserializeAws_restJson1CreateDeviceDefinitionCommand = exports.deserializeAws_restJson1CreateDeploymentCommand = exports.deserializeAws_restJson1CreateCoreDefinitionVersionCommand = exports.deserializeAws_restJson1CreateCoreDefinitionCommand = exports.deserializeAws_restJson1CreateConnectorDefinitionVersionCommand = exports.deserializeAws_restJson1CreateConnectorDefinitionCommand = exports.deserializeAws_restJson1AssociateServiceRoleToAccountCommand = exports.deserializeAws_restJson1AssociateRoleToGroupCommand = exports.serializeAws_restJson1UpdateThingRuntimeConfigurationCommand = exports.serializeAws_restJson1UpdateSubscriptionDefinitionCommand = exports.serializeAws_restJson1UpdateResourceDefinitionCommand = exports.serializeAws_restJson1UpdateLoggerDefinitionCommand = exports.serializeAws_restJson1UpdateGroupCertificateConfigurationCommand = exports.serializeAws_restJson1UpdateGroupCommand = exports.serializeAws_restJson1UpdateFunctionDefinitionCommand = exports.serializeAws_restJson1UpdateDeviceDefinitionCommand = exports.serializeAws_restJson1UpdateCoreDefinitionCommand = exports.serializeAws_restJson1UpdateConnectorDefinitionCommand = exports.serializeAws_restJson1UpdateConnectivityInfoCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopBulkDeploymentCommand = exports.serializeAws_restJson1StartBulkDeploymentCommand = exports.serializeAws_restJson1ResetDeploymentsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = exports.serializeAws_restJson1ListSubscriptionDefinitionsCommand = exports.serializeAws_restJson1ListResourceDefinitionVersionsCommand = exports.serializeAws_restJson1ListResourceDefinitionsCommand = exports.serializeAws_restJson1ListLoggerDefinitionVersionsCommand = exports.serializeAws_restJson1ListLoggerDefinitionsCommand = exports.serializeAws_restJson1ListGroupVersionsCommand = exports.serializeAws_restJson1ListGroupsCommand = exports.serializeAws_restJson1ListGroupCertificateAuthoritiesCommand = exports.serializeAws_restJson1ListFunctionDefinitionVersionsCommand = exports.serializeAws_restJson1ListFunctionDefinitionsCommand = exports.serializeAws_restJson1ListDeviceDefinitionVersionsCommand = exports.serializeAws_restJson1ListDeviceDefinitionsCommand = exports.serializeAws_restJson1ListDeploymentsCommand = exports.serializeAws_restJson1ListCoreDefinitionVersionsCommand = exports.serializeAws_restJson1ListCoreDefinitionsCommand = exports.serializeAws_restJson1ListConnectorDefinitionVersionsCommand = exports.serializeAws_restJson1ListConnectorDefinitionsCommand = exports.serializeAws_restJson1ListBulkDeploymentsCommand = exports.serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = exports.serializeAws_restJson1GetThingRuntimeConfigurationCommand = exports.serializeAws_restJson1GetSubscriptionDefinitionVersionCommand = exports.serializeAws_restJson1GetSubscriptionDefinitionCommand = exports.serializeAws_restJson1GetServiceRoleForAccountCommand = exports.serializeAws_restJson1GetResourceDefinitionVersionCommand = void 0;
exports.deserializeAws_restJson1ListConnectorDefinitionsCommand = exports.deserializeAws_restJson1ListBulkDeploymentsCommand = exports.deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = exports.deserializeAws_restJson1GetThingRuntimeConfigurationCommand = exports.deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand = exports.deserializeAws_restJson1GetSubscriptionDefinitionCommand = exports.deserializeAws_restJson1GetServiceRoleForAccountCommand = exports.deserializeAws_restJson1GetResourceDefinitionVersionCommand = exports.deserializeAws_restJson1GetResourceDefinitionCommand = exports.deserializeAws_restJson1GetLoggerDefinitionVersionCommand = exports.deserializeAws_restJson1GetLoggerDefinitionCommand = exports.deserializeAws_restJson1GetGroupVersionCommand = exports.deserializeAws_restJson1GetGroupCertificateConfigurationCommand = exports.deserializeAws_restJson1GetGroupCertificateAuthorityCommand = exports.deserializeAws_restJson1GetGroupCommand = exports.deserializeAws_restJson1GetFunctionDefinitionVersionCommand = exports.deserializeAws_restJson1GetFunctionDefinitionCommand = exports.deserializeAws_restJson1GetDeviceDefinitionVersionCommand = exports.deserializeAws_restJson1GetDeviceDefinitionCommand = exports.deserializeAws_restJson1GetDeploymentStatusCommand = exports.deserializeAws_restJson1GetCoreDefinitionVersionCommand = exports.deserializeAws_restJson1GetCoreDefinitionCommand = exports.deserializeAws_restJson1GetConnectorDefinitionVersionCommand = exports.deserializeAws_restJson1GetConnectorDefinitionCommand = exports.deserializeAws_restJson1GetConnectivityInfoCommand = exports.deserializeAws_restJson1GetBulkDeploymentStatusCommand = exports.deserializeAws_restJson1GetAssociatedRoleCommand = exports.deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand = exports.deserializeAws_restJson1DisassociateRoleFromGroupCommand = exports.deserializeAws_restJson1DeleteSubscriptionDefinitionCommand = exports.deserializeAws_restJson1DeleteResourceDefinitionCommand = exports.deserializeAws_restJson1DeleteLoggerDefinitionCommand = exports.deserializeAws_restJson1DeleteGroupCommand = exports.deserializeAws_restJson1DeleteFunctionDefinitionCommand = exports.deserializeAws_restJson1DeleteDeviceDefinitionCommand = exports.deserializeAws_restJson1DeleteCoreDefinitionCommand = exports.deserializeAws_restJson1DeleteConnectorDefinitionCommand = exports.deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = exports.deserializeAws_restJson1CreateSubscriptionDefinitionCommand = exports.deserializeAws_restJson1CreateSoftwareUpdateJobCommand = exports.deserializeAws_restJson1CreateResourceDefinitionVersionCommand = exports.deserializeAws_restJson1CreateResourceDefinitionCommand = exports.deserializeAws_restJson1CreateLoggerDefinitionVersionCommand = exports.deserializeAws_restJson1CreateLoggerDefinitionCommand = exports.deserializeAws_restJson1CreateGroupVersionCommand = exports.deserializeAws_restJson1CreateGroupCertificateAuthorityCommand = exports.deserializeAws_restJson1CreateGroupCommand = exports.deserializeAws_restJson1CreateFunctionDefinitionVersionCommand = exports.deserializeAws_restJson1CreateFunctionDefinitionCommand = exports.deserializeAws_restJson1CreateDeviceDefinitionVersionCommand = void 0;
exports.deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand = exports.deserializeAws_restJson1UpdateSubscriptionDefinitionCommand = exports.deserializeAws_restJson1UpdateResourceDefinitionCommand = exports.deserializeAws_restJson1UpdateLoggerDefinitionCommand = exports.deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand = exports.deserializeAws_restJson1UpdateGroupCommand = exports.deserializeAws_restJson1UpdateFunctionDefinitionCommand = exports.deserializeAws_restJson1UpdateDeviceDefinitionCommand = exports.deserializeAws_restJson1UpdateCoreDefinitionCommand = exports.deserializeAws_restJson1UpdateConnectorDefinitionCommand = exports.deserializeAws_restJson1UpdateConnectivityInfoCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopBulkDeploymentCommand = exports.deserializeAws_restJson1StartBulkDeploymentCommand = exports.deserializeAws_restJson1ResetDeploymentsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = exports.deserializeAws_restJson1ListSubscriptionDefinitionsCommand = exports.deserializeAws_restJson1ListResourceDefinitionVersionsCommand = exports.deserializeAws_restJson1ListResourceDefinitionsCommand = exports.deserializeAws_restJson1ListLoggerDefinitionVersionsCommand = exports.deserializeAws_restJson1ListLoggerDefinitionsCommand = exports.deserializeAws_restJson1ListGroupVersionsCommand = exports.deserializeAws_restJson1ListGroupsCommand = exports.deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand = exports.deserializeAws_restJson1ListFunctionDefinitionVersionsCommand = exports.deserializeAws_restJson1ListFunctionDefinitionsCommand = exports.deserializeAws_restJson1ListDeviceDefinitionVersionsCommand = exports.deserializeAws_restJson1ListDeviceDefinitionsCommand = exports.deserializeAws_restJson1ListDeploymentsCommand = exports.deserializeAws_restJson1ListCoreDefinitionVersionsCommand = exports.deserializeAws_restJson1ListCoreDefinitionsCommand = exports.deserializeAws_restJson1ListConnectorDefinitionVersionsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AssociateRoleToGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
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
exports.serializeAws_restJson1AssociateRoleToGroupCommand = serializeAws_restJson1AssociateRoleToGroupCommand;
const serializeAws_restJson1AssociateServiceRoleToAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/servicerole";
    let body;
    body = JSON.stringify({
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
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
exports.serializeAws_restJson1AssociateServiceRoleToAccountCommand = serializeAws_restJson1AssociateServiceRoleToAccountCommand;
const serializeAws_restJson1CreateConnectorDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/connectors";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1ConnectorDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateConnectorDefinitionCommand = serializeAws_restJson1CreateConnectorDefinitionCommand;
const serializeAws_restJson1CreateConnectorDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Connectors !== undefined &&
            input.Connectors !== null && { Connectors: serializeAws_restJson1__listOfConnector(input.Connectors, context) }),
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
exports.serializeAws_restJson1CreateConnectorDefinitionVersionCommand = serializeAws_restJson1CreateConnectorDefinitionVersionCommand;
const serializeAws_restJson1CreateCoreDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/cores";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1CoreDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateCoreDefinitionCommand = serializeAws_restJson1CreateCoreDefinitionCommand;
const serializeAws_restJson1CreateCoreDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Cores !== undefined &&
            input.Cores !== null && { Cores: serializeAws_restJson1__listOfCore(input.Cores, context) }),
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
exports.serializeAws_restJson1CreateCoreDefinitionVersionCommand = serializeAws_restJson1CreateCoreDefinitionVersionCommand;
const serializeAws_restJson1CreateDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId }),
        ...(input.DeploymentType !== undefined &&
            input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
        ...(input.GroupVersionId !== undefined &&
            input.GroupVersionId !== null && { GroupVersionId: input.GroupVersionId }),
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
exports.serializeAws_restJson1CreateDeploymentCommand = serializeAws_restJson1CreateDeploymentCommand;
const serializeAws_restJson1CreateDeviceDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/devices";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1DeviceDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateDeviceDefinitionCommand = serializeAws_restJson1CreateDeviceDefinitionCommand;
const serializeAws_restJson1CreateDeviceDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Devices !== undefined &&
            input.Devices !== null && { Devices: serializeAws_restJson1__listOfDevice(input.Devices, context) }),
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
exports.serializeAws_restJson1CreateDeviceDefinitionVersionCommand = serializeAws_restJson1CreateDeviceDefinitionVersionCommand;
const serializeAws_restJson1CreateFunctionDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/functions";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1FunctionDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateFunctionDefinitionCommand = serializeAws_restJson1CreateFunctionDefinitionCommand;
const serializeAws_restJson1CreateFunctionDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DefaultConfig !== undefined &&
            input.DefaultConfig !== null && {
            DefaultConfig: serializeAws_restJson1FunctionDefaultConfig(input.DefaultConfig, context),
        }),
        ...(input.Functions !== undefined &&
            input.Functions !== null && { Functions: serializeAws_restJson1__listOfFunction(input.Functions, context) }),
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
exports.serializeAws_restJson1CreateFunctionDefinitionVersionCommand = serializeAws_restJson1CreateFunctionDefinitionVersionCommand;
const serializeAws_restJson1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/groups";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1GroupVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateGroupCommand = serializeAws_restJson1CreateGroupCommand;
const serializeAws_restJson1CreateGroupCertificateAuthorityCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1CreateGroupCertificateAuthorityCommand = serializeAws_restJson1CreateGroupCertificateAuthorityCommand;
const serializeAws_restJson1CreateGroupVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/versions";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConnectorDefinitionVersionArn !== undefined &&
            input.ConnectorDefinitionVersionArn !== null && {
            ConnectorDefinitionVersionArn: input.ConnectorDefinitionVersionArn,
        }),
        ...(input.CoreDefinitionVersionArn !== undefined &&
            input.CoreDefinitionVersionArn !== null && { CoreDefinitionVersionArn: input.CoreDefinitionVersionArn }),
        ...(input.DeviceDefinitionVersionArn !== undefined &&
            input.DeviceDefinitionVersionArn !== null && { DeviceDefinitionVersionArn: input.DeviceDefinitionVersionArn }),
        ...(input.FunctionDefinitionVersionArn !== undefined &&
            input.FunctionDefinitionVersionArn !== null && {
            FunctionDefinitionVersionArn: input.FunctionDefinitionVersionArn,
        }),
        ...(input.LoggerDefinitionVersionArn !== undefined &&
            input.LoggerDefinitionVersionArn !== null && { LoggerDefinitionVersionArn: input.LoggerDefinitionVersionArn }),
        ...(input.ResourceDefinitionVersionArn !== undefined &&
            input.ResourceDefinitionVersionArn !== null && {
            ResourceDefinitionVersionArn: input.ResourceDefinitionVersionArn,
        }),
        ...(input.SubscriptionDefinitionVersionArn !== undefined &&
            input.SubscriptionDefinitionVersionArn !== null && {
            SubscriptionDefinitionVersionArn: input.SubscriptionDefinitionVersionArn,
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
exports.serializeAws_restJson1CreateGroupVersionCommand = serializeAws_restJson1CreateGroupVersionCommand;
const serializeAws_restJson1CreateLoggerDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/loggers";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1LoggerDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateLoggerDefinitionCommand = serializeAws_restJson1CreateLoggerDefinitionCommand;
const serializeAws_restJson1CreateLoggerDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Loggers !== undefined &&
            input.Loggers !== null && { Loggers: serializeAws_restJson1__listOfLogger(input.Loggers, context) }),
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
exports.serializeAws_restJson1CreateLoggerDefinitionVersionCommand = serializeAws_restJson1CreateLoggerDefinitionVersionCommand;
const serializeAws_restJson1CreateResourceDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/resources";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1ResourceDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateResourceDefinitionCommand = serializeAws_restJson1CreateResourceDefinitionCommand;
const serializeAws_restJson1CreateResourceDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
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
exports.serializeAws_restJson1CreateResourceDefinitionVersionCommand = serializeAws_restJson1CreateResourceDefinitionVersionCommand;
const serializeAws_restJson1CreateSoftwareUpdateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/updates";
    let body;
    body = JSON.stringify({
        ...(input.S3UrlSignerRole !== undefined &&
            input.S3UrlSignerRole !== null && { S3UrlSignerRole: input.S3UrlSignerRole }),
        ...(input.SoftwareToUpdate !== undefined &&
            input.SoftwareToUpdate !== null && { SoftwareToUpdate: input.SoftwareToUpdate }),
        ...(input.UpdateAgentLogLevel !== undefined &&
            input.UpdateAgentLogLevel !== null && { UpdateAgentLogLevel: input.UpdateAgentLogLevel }),
        ...(input.UpdateTargets !== undefined &&
            input.UpdateTargets !== null && {
            UpdateTargets: serializeAws_restJson1UpdateTargets(input.UpdateTargets, context),
        }),
        ...(input.UpdateTargetsArchitecture !== undefined &&
            input.UpdateTargetsArchitecture !== null && { UpdateTargetsArchitecture: input.UpdateTargetsArchitecture }),
        ...(input.UpdateTargetsOperatingSystem !== undefined &&
            input.UpdateTargetsOperatingSystem !== null && {
            UpdateTargetsOperatingSystem: input.UpdateTargetsOperatingSystem,
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
exports.serializeAws_restJson1CreateSoftwareUpdateJobCommand = serializeAws_restJson1CreateSoftwareUpdateJobCommand;
const serializeAws_restJson1CreateSubscriptionDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/subscriptions";
    let body;
    body = JSON.stringify({
        ...(input.InitialVersion !== undefined &&
            input.InitialVersion !== null && {
            InitialVersion: serializeAws_restJson1SubscriptionDefinitionVersion(input.InitialVersion, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateSubscriptionDefinitionCommand = serializeAws_restJson1CreateSubscriptionDefinitionCommand;
const serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Subscriptions !== undefined &&
            input.Subscriptions !== null && {
            Subscriptions: serializeAws_restJson1__listOfSubscription(input.Subscriptions, context),
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
exports.serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand;
const serializeAws_restJson1DeleteConnectorDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
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
exports.serializeAws_restJson1DeleteConnectorDefinitionCommand = serializeAws_restJson1DeleteConnectorDefinitionCommand;
const serializeAws_restJson1DeleteCoreDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
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
exports.serializeAws_restJson1DeleteCoreDefinitionCommand = serializeAws_restJson1DeleteCoreDefinitionCommand;
const serializeAws_restJson1DeleteDeviceDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
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
exports.serializeAws_restJson1DeleteDeviceDefinitionCommand = serializeAws_restJson1DeleteDeviceDefinitionCommand;
const serializeAws_restJson1DeleteFunctionDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
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
exports.serializeAws_restJson1DeleteFunctionDefinitionCommand = serializeAws_restJson1DeleteFunctionDefinitionCommand;
const serializeAws_restJson1DeleteGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1DeleteGroupCommand = serializeAws_restJson1DeleteGroupCommand;
const serializeAws_restJson1DeleteLoggerDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
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
exports.serializeAws_restJson1DeleteLoggerDefinitionCommand = serializeAws_restJson1DeleteLoggerDefinitionCommand;
const serializeAws_restJson1DeleteResourceDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
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
exports.serializeAws_restJson1DeleteResourceDefinitionCommand = serializeAws_restJson1DeleteResourceDefinitionCommand;
const serializeAws_restJson1DeleteSubscriptionDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
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
exports.serializeAws_restJson1DeleteSubscriptionDefinitionCommand = serializeAws_restJson1DeleteSubscriptionDefinitionCommand;
const serializeAws_restJson1DisassociateRoleFromGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1DisassociateRoleFromGroupCommand = serializeAws_restJson1DisassociateRoleFromGroupCommand;
const serializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/servicerole";
    let body;
    body = "";
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
exports.serializeAws_restJson1DisassociateServiceRoleFromAccountCommand = serializeAws_restJson1DisassociateServiceRoleFromAccountCommand;
const serializeAws_restJson1GetAssociatedRoleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1GetAssociatedRoleCommand = serializeAws_restJson1GetAssociatedRoleCommand;
const serializeAws_restJson1GetBulkDeploymentStatusCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/status";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
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
exports.serializeAws_restJson1GetBulkDeploymentStatusCommand = serializeAws_restJson1GetBulkDeploymentStatusCommand;
const serializeAws_restJson1GetConnectivityInfoCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/things/{ThingName}/connectivityInfo";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
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
exports.serializeAws_restJson1GetConnectivityInfoCommand = serializeAws_restJson1GetConnectivityInfoCommand;
const serializeAws_restJson1GetConnectorDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
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
exports.serializeAws_restJson1GetConnectorDefinitionCommand = serializeAws_restJson1GetConnectorDefinitionCommand;
const serializeAws_restJson1GetConnectorDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    if (input.ConnectorDefinitionVersionId !== undefined) {
        const labelValue = input.ConnectorDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionVersionId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetConnectorDefinitionVersionCommand = serializeAws_restJson1GetConnectorDefinitionVersionCommand;
const serializeAws_restJson1GetCoreDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
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
exports.serializeAws_restJson1GetCoreDefinitionCommand = serializeAws_restJson1GetCoreDefinitionCommand;
const serializeAws_restJson1GetCoreDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    if (input.CoreDefinitionVersionId !== undefined) {
        const labelValue = input.CoreDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionVersionId.");
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
exports.serializeAws_restJson1GetCoreDefinitionVersionCommand = serializeAws_restJson1GetCoreDefinitionVersionCommand;
const serializeAws_restJson1GetDeploymentStatusCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status";
    if (input.DeploymentId !== undefined) {
        const labelValue = input.DeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{DeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeploymentId.");
    }
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1GetDeploymentStatusCommand = serializeAws_restJson1GetDeploymentStatusCommand;
const serializeAws_restJson1GetDeviceDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
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
exports.serializeAws_restJson1GetDeviceDefinitionCommand = serializeAws_restJson1GetDeviceDefinitionCommand;
const serializeAws_restJson1GetDeviceDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    if (input.DeviceDefinitionVersionId !== undefined) {
        const labelValue = input.DeviceDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionVersionId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetDeviceDefinitionVersionCommand = serializeAws_restJson1GetDeviceDefinitionVersionCommand;
const serializeAws_restJson1GetFunctionDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
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
exports.serializeAws_restJson1GetFunctionDefinitionCommand = serializeAws_restJson1GetFunctionDefinitionCommand;
const serializeAws_restJson1GetFunctionDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    if (input.FunctionDefinitionVersionId !== undefined) {
        const labelValue = input.FunctionDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionVersionId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetFunctionDefinitionVersionCommand = serializeAws_restJson1GetFunctionDefinitionVersionCommand;
const serializeAws_restJson1GetGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1GetGroupCommand = serializeAws_restJson1GetGroupCommand;
const serializeAws_restJson1GetGroupCertificateAuthorityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}";
    if (input.CertificateAuthorityId !== undefined) {
        const labelValue = input.CertificateAuthorityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CertificateAuthorityId.");
        }
        resolvedPath = resolvedPath.replace("{CertificateAuthorityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CertificateAuthorityId.");
    }
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1GetGroupCertificateAuthorityCommand = serializeAws_restJson1GetGroupCertificateAuthorityCommand;
const serializeAws_restJson1GetGroupCertificateConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1GetGroupCertificateConfigurationCommand = serializeAws_restJson1GetGroupCertificateConfigurationCommand;
const serializeAws_restJson1GetGroupVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/versions/{GroupVersionId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    if (input.GroupVersionId !== undefined) {
        const labelValue = input.GroupVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupVersionId.");
        }
        resolvedPath = resolvedPath.replace("{GroupVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupVersionId.");
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
exports.serializeAws_restJson1GetGroupVersionCommand = serializeAws_restJson1GetGroupVersionCommand;
const serializeAws_restJson1GetLoggerDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
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
exports.serializeAws_restJson1GetLoggerDefinitionCommand = serializeAws_restJson1GetLoggerDefinitionCommand;
const serializeAws_restJson1GetLoggerDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    if (input.LoggerDefinitionVersionId !== undefined) {
        const labelValue = input.LoggerDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionVersionId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetLoggerDefinitionVersionCommand = serializeAws_restJson1GetLoggerDefinitionVersionCommand;
const serializeAws_restJson1GetResourceDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
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
exports.serializeAws_restJson1GetResourceDefinitionCommand = serializeAws_restJson1GetResourceDefinitionCommand;
const serializeAws_restJson1GetResourceDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    if (input.ResourceDefinitionVersionId !== undefined) {
        const labelValue = input.ResourceDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionVersionId.");
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
exports.serializeAws_restJson1GetResourceDefinitionVersionCommand = serializeAws_restJson1GetResourceDefinitionVersionCommand;
const serializeAws_restJson1GetServiceRoleForAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/servicerole";
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
exports.serializeAws_restJson1GetServiceRoleForAccountCommand = serializeAws_restJson1GetServiceRoleForAccountCommand;
const serializeAws_restJson1GetSubscriptionDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
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
exports.serializeAws_restJson1GetSubscriptionDefinitionCommand = serializeAws_restJson1GetSubscriptionDefinitionCommand;
const serializeAws_restJson1GetSubscriptionDefinitionVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    if (input.SubscriptionDefinitionVersionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionVersionId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetSubscriptionDefinitionVersionCommand = serializeAws_restJson1GetSubscriptionDefinitionVersionCommand;
const serializeAws_restJson1GetThingRuntimeConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/things/{ThingName}/runtimeconfig";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
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
exports.serializeAws_restJson1GetThingRuntimeConfigurationCommand = serializeAws_restJson1GetThingRuntimeConfigurationCommand;
const serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand;
const serializeAws_restJson1ListBulkDeploymentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/bulk/deployments";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListBulkDeploymentsCommand = serializeAws_restJson1ListBulkDeploymentsCommand;
const serializeAws_restJson1ListConnectorDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/connectors";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListConnectorDefinitionsCommand = serializeAws_restJson1ListConnectorDefinitionsCommand;
const serializeAws_restJson1ListConnectorDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListConnectorDefinitionVersionsCommand = serializeAws_restJson1ListConnectorDefinitionVersionsCommand;
const serializeAws_restJson1ListCoreDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/cores";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListCoreDefinitionsCommand = serializeAws_restJson1ListCoreDefinitionsCommand;
const serializeAws_restJson1ListCoreDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListCoreDefinitionVersionsCommand = serializeAws_restJson1ListCoreDefinitionVersionsCommand;
const serializeAws_restJson1ListDeploymentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListDeploymentsCommand = serializeAws_restJson1ListDeploymentsCommand;
const serializeAws_restJson1ListDeviceDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/devices";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListDeviceDefinitionsCommand = serializeAws_restJson1ListDeviceDefinitionsCommand;
const serializeAws_restJson1ListDeviceDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListDeviceDefinitionVersionsCommand = serializeAws_restJson1ListDeviceDefinitionVersionsCommand;
const serializeAws_restJson1ListFunctionDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/functions";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListFunctionDefinitionsCommand = serializeAws_restJson1ListFunctionDefinitionsCommand;
const serializeAws_restJson1ListFunctionDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListFunctionDefinitionVersionsCommand = serializeAws_restJson1ListFunctionDefinitionVersionsCommand;
const serializeAws_restJson1ListGroupCertificateAuthoritiesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
exports.serializeAws_restJson1ListGroupCertificateAuthoritiesCommand = serializeAws_restJson1ListGroupCertificateAuthoritiesCommand;
const serializeAws_restJson1ListGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListGroupsCommand = serializeAws_restJson1ListGroupsCommand;
const serializeAws_restJson1ListGroupVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/groups/{GroupId}/versions";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListGroupVersionsCommand = serializeAws_restJson1ListGroupVersionsCommand;
const serializeAws_restJson1ListLoggerDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/loggers";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListLoggerDefinitionsCommand = serializeAws_restJson1ListLoggerDefinitionsCommand;
const serializeAws_restJson1ListLoggerDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListLoggerDefinitionVersionsCommand = serializeAws_restJson1ListLoggerDefinitionVersionsCommand;
const serializeAws_restJson1ListResourceDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/resources";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListResourceDefinitionsCommand = serializeAws_restJson1ListResourceDefinitionsCommand;
const serializeAws_restJson1ListResourceDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListResourceDefinitionVersionsCommand = serializeAws_restJson1ListResourceDefinitionVersionsCommand;
const serializeAws_restJson1ListSubscriptionDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/subscriptions";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListSubscriptionDefinitionsCommand = serializeAws_restJson1ListSubscriptionDefinitionsCommand;
const serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1ResetDeploymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments/$reset";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
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
exports.serializeAws_restJson1ResetDeploymentsCommand = serializeAws_restJson1ResetDeploymentsCommand;
const serializeAws_restJson1StartBulkDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AmznClientToken) && { "x-amzn-client-token": input.AmznClientToken }),
    };
    let resolvedPath = "/greengrass/bulk/deployments";
    let body;
    body = JSON.stringify({
        ...(input.ExecutionRoleArn !== undefined &&
            input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
        ...(input.InputFileUri !== undefined && input.InputFileUri !== null && { InputFileUri: input.InputFileUri }),
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
exports.serializeAws_restJson1StartBulkDeploymentCommand = serializeAws_restJson1StartBulkDeploymentCommand;
const serializeAws_restJson1StopBulkDeploymentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
    }
    let body;
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
exports.serializeAws_restJson1StopBulkDeploymentCommand = serializeAws_restJson1StopBulkDeploymentCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
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
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1UpdateConnectivityInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/things/{ThingName}/connectivityInfo";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConnectivityInfo !== undefined &&
            input.ConnectivityInfo !== null && {
            ConnectivityInfo: serializeAws_restJson1__listOfConnectivityInfo(input.ConnectivityInfo, context),
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
exports.serializeAws_restJson1UpdateConnectivityInfoCommand = serializeAws_restJson1UpdateConnectivityInfoCommand;
const serializeAws_restJson1UpdateConnectorDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateConnectorDefinitionCommand = serializeAws_restJson1UpdateConnectorDefinitionCommand;
const serializeAws_restJson1UpdateCoreDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateCoreDefinitionCommand = serializeAws_restJson1UpdateCoreDefinitionCommand;
const serializeAws_restJson1UpdateDeviceDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDeviceDefinitionCommand = serializeAws_restJson1UpdateDeviceDefinitionCommand;
const serializeAws_restJson1UpdateFunctionDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateFunctionDefinitionCommand = serializeAws_restJson1UpdateFunctionDefinitionCommand;
const serializeAws_restJson1UpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGroupCommand = serializeAws_restJson1UpdateGroupCommand;
const serializeAws_restJson1UpdateGroupCertificateConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CertificateExpiryInMilliseconds !== undefined &&
            input.CertificateExpiryInMilliseconds !== null && {
            CertificateExpiryInMilliseconds: input.CertificateExpiryInMilliseconds,
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
exports.serializeAws_restJson1UpdateGroupCertificateConfigurationCommand = serializeAws_restJson1UpdateGroupCertificateConfigurationCommand;
const serializeAws_restJson1UpdateLoggerDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateLoggerDefinitionCommand = serializeAws_restJson1UpdateLoggerDefinitionCommand;
const serializeAws_restJson1UpdateResourceDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateResourceDefinitionCommand = serializeAws_restJson1UpdateResourceDefinitionCommand;
const serializeAws_restJson1UpdateSubscriptionDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSubscriptionDefinitionCommand = serializeAws_restJson1UpdateSubscriptionDefinitionCommand;
const serializeAws_restJson1UpdateThingRuntimeConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/things/{ThingName}/runtimeconfig";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TelemetryConfiguration !== undefined &&
            input.TelemetryConfiguration !== null && {
            TelemetryConfiguration: serializeAws_restJson1TelemetryConfigurationUpdate(input.TelemetryConfiguration, context),
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
exports.serializeAws_restJson1UpdateThingRuntimeConfigurationCommand = serializeAws_restJson1UpdateThingRuntimeConfigurationCommand;
const deserializeAws_restJson1AssociateRoleToGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateRoleToGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateRoleToGroupCommand = deserializeAws_restJson1AssociateRoleToGroupCommand;
const deserializeAws_restJson1AssociateRoleToGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AssociateServiceRoleToAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateServiceRoleToAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateServiceRoleToAccountCommand = deserializeAws_restJson1AssociateServiceRoleToAccountCommand;
const deserializeAws_restJson1AssociateServiceRoleToAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateConnectorDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConnectorDefinitionCommand = deserializeAws_restJson1CreateConnectorDefinitionCommand;
const deserializeAws_restJson1CreateConnectorDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateConnectorDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConnectorDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConnectorDefinitionVersionCommand = deserializeAws_restJson1CreateConnectorDefinitionVersionCommand;
const deserializeAws_restJson1CreateConnectorDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateCoreDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCoreDefinitionCommand = deserializeAws_restJson1CreateCoreDefinitionCommand;
const deserializeAws_restJson1CreateCoreDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateCoreDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCoreDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCoreDefinitionVersionCommand = deserializeAws_restJson1CreateCoreDefinitionVersionCommand;
const deserializeAws_restJson1CreateCoreDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeploymentArn: undefined,
        DeploymentId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentArn !== undefined && data.DeploymentArn !== null) {
        contents.DeploymentArn = data.DeploymentArn;
    }
    if (data.DeploymentId !== undefined && data.DeploymentId !== null) {
        contents.DeploymentId = data.DeploymentId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeploymentCommand = deserializeAws_restJson1CreateDeploymentCommand;
const deserializeAws_restJson1CreateDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDeviceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeviceDefinitionCommand = deserializeAws_restJson1CreateDeviceDefinitionCommand;
const deserializeAws_restJson1CreateDeviceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDeviceDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeviceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeviceDefinitionVersionCommand = deserializeAws_restJson1CreateDeviceDefinitionVersionCommand;
const deserializeAws_restJson1CreateDeviceDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFunctionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFunctionDefinitionCommand = deserializeAws_restJson1CreateFunctionDefinitionCommand;
const deserializeAws_restJson1CreateFunctionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFunctionDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFunctionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFunctionDefinitionVersionCommand = deserializeAws_restJson1CreateFunctionDefinitionVersionCommand;
const deserializeAws_restJson1CreateFunctionDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupCommand = deserializeAws_restJson1CreateGroupCommand;
const deserializeAws_restJson1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupCertificateAuthorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupCertificateAuthorityArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorityArn !== undefined && data.GroupCertificateAuthorityArn !== null) {
        contents.GroupCertificateAuthorityArn = data.GroupCertificateAuthorityArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupCertificateAuthorityCommand = deserializeAws_restJson1CreateGroupCertificateAuthorityCommand;
const deserializeAws_restJson1CreateGroupCertificateAuthorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupVersionCommand = deserializeAws_restJson1CreateGroupVersionCommand;
const deserializeAws_restJson1CreateGroupVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateLoggerDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLoggerDefinitionCommand = deserializeAws_restJson1CreateLoggerDefinitionCommand;
const deserializeAws_restJson1CreateLoggerDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateLoggerDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLoggerDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLoggerDefinitionVersionCommand = deserializeAws_restJson1CreateLoggerDefinitionVersionCommand;
const deserializeAws_restJson1CreateLoggerDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateResourceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourceDefinitionCommand = deserializeAws_restJson1CreateResourceDefinitionCommand;
const deserializeAws_restJson1CreateResourceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateResourceDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResourceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourceDefinitionVersionCommand = deserializeAws_restJson1CreateResourceDefinitionVersionCommand;
const deserializeAws_restJson1CreateResourceDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSoftwareUpdateJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSoftwareUpdateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IotJobArn: undefined,
        IotJobId: undefined,
        PlatformSoftwareVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IotJobArn !== undefined && data.IotJobArn !== null) {
        contents.IotJobArn = data.IotJobArn;
    }
    if (data.IotJobId !== undefined && data.IotJobId !== null) {
        contents.IotJobId = data.IotJobId;
    }
    if (data.PlatformSoftwareVersion !== undefined && data.PlatformSoftwareVersion !== null) {
        contents.PlatformSoftwareVersion = data.PlatformSoftwareVersion;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSoftwareUpdateJobCommand = deserializeAws_restJson1CreateSoftwareUpdateJobCommand;
const deserializeAws_restJson1CreateSoftwareUpdateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSubscriptionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSubscriptionDefinitionCommand = deserializeAws_restJson1CreateSubscriptionDefinitionCommand;
const deserializeAws_restJson1CreateSubscriptionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand = deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand;
const deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteConnectorDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConnectorDefinitionCommand = deserializeAws_restJson1DeleteConnectorDefinitionCommand;
const deserializeAws_restJson1DeleteConnectorDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteCoreDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCoreDefinitionCommand = deserializeAws_restJson1DeleteCoreDefinitionCommand;
const deserializeAws_restJson1DeleteCoreDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDeviceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDeviceDefinitionCommand = deserializeAws_restJson1DeleteDeviceDefinitionCommand;
const deserializeAws_restJson1DeleteDeviceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFunctionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionDefinitionCommand = deserializeAws_restJson1DeleteFunctionDefinitionCommand;
const deserializeAws_restJson1DeleteFunctionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGroupCommand = deserializeAws_restJson1DeleteGroupCommand;
const deserializeAws_restJson1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteLoggerDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLoggerDefinitionCommand = deserializeAws_restJson1DeleteLoggerDefinitionCommand;
const deserializeAws_restJson1DeleteLoggerDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteResourceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourceDefinitionCommand = deserializeAws_restJson1DeleteResourceDefinitionCommand;
const deserializeAws_restJson1DeleteResourceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSubscriptionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSubscriptionDefinitionCommand = deserializeAws_restJson1DeleteSubscriptionDefinitionCommand;
const deserializeAws_restJson1DeleteSubscriptionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateRoleFromGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateRoleFromGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DisassociatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DisassociatedAt !== undefined && data.DisassociatedAt !== null) {
        contents.DisassociatedAt = data.DisassociatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateRoleFromGroupCommand = deserializeAws_restJson1DisassociateRoleFromGroupCommand;
const deserializeAws_restJson1DisassociateRoleFromGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DisassociatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DisassociatedAt !== undefined && data.DisassociatedAt !== null) {
        contents.DisassociatedAt = data.DisassociatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand = deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand;
const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAssociatedRoleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAssociatedRoleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociatedAt: undefined,
        RoleArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssociatedRoleCommand = deserializeAws_restJson1GetAssociatedRoleCommand;
const deserializeAws_restJson1GetAssociatedRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetBulkDeploymentStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBulkDeploymentStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BulkDeploymentMetrics: undefined,
        BulkDeploymentStatus: undefined,
        CreatedAt: undefined,
        ErrorDetails: undefined,
        ErrorMessage: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeploymentMetrics !== undefined && data.BulkDeploymentMetrics !== null) {
        contents.BulkDeploymentMetrics = deserializeAws_restJson1BulkDeploymentMetrics(data.BulkDeploymentMetrics, context);
    }
    if (data.BulkDeploymentStatus !== undefined && data.BulkDeploymentStatus !== null) {
        contents.BulkDeploymentStatus = data.BulkDeploymentStatus;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = data.CreatedAt;
    }
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
        contents.ErrorMessage = data.ErrorMessage;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBulkDeploymentStatusCommand = deserializeAws_restJson1GetBulkDeploymentStatusCommand;
const deserializeAws_restJson1GetBulkDeploymentStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetConnectivityInfoCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConnectivityInfoCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConnectivityInfo: undefined,
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConnectivityInfo !== undefined && data.ConnectivityInfo !== null) {
        contents.ConnectivityInfo = deserializeAws_restJson1__listOfConnectivityInfo(data.ConnectivityInfo, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConnectivityInfoCommand = deserializeAws_restJson1GetConnectivityInfoCommand;
const deserializeAws_restJson1GetConnectivityInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetConnectorDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConnectorDefinitionCommand = deserializeAws_restJson1GetConnectorDefinitionCommand;
const deserializeAws_restJson1GetConnectorDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetConnectorDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConnectorDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1ConnectorDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConnectorDefinitionVersionCommand = deserializeAws_restJson1GetConnectorDefinitionVersionCommand;
const deserializeAws_restJson1GetConnectorDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCoreDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCoreDefinitionCommand = deserializeAws_restJson1GetCoreDefinitionCommand;
const deserializeAws_restJson1GetCoreDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCoreDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCoreDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1CoreDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCoreDefinitionVersionCommand = deserializeAws_restJson1GetCoreDefinitionVersionCommand;
const deserializeAws_restJson1GetCoreDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDeploymentStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeploymentStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeploymentStatus: undefined,
        DeploymentType: undefined,
        ErrorDetails: undefined,
        ErrorMessage: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentStatus !== undefined && data.DeploymentStatus !== null) {
        contents.DeploymentStatus = data.DeploymentStatus;
    }
    if (data.DeploymentType !== undefined && data.DeploymentType !== null) {
        contents.DeploymentType = data.DeploymentType;
    }
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
        contents.ErrorMessage = data.ErrorMessage;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = data.UpdatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeploymentStatusCommand = deserializeAws_restJson1GetDeploymentStatusCommand;
const deserializeAws_restJson1GetDeploymentStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDeviceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceDefinitionCommand = deserializeAws_restJson1GetDeviceDefinitionCommand;
const deserializeAws_restJson1GetDeviceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDeviceDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeviceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1DeviceDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceDefinitionVersionCommand = deserializeAws_restJson1GetDeviceDefinitionVersionCommand;
const deserializeAws_restJson1GetDeviceDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionDefinitionCommand = deserializeAws_restJson1GetFunctionDefinitionCommand;
const deserializeAws_restJson1GetFunctionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1FunctionDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionDefinitionVersionCommand = deserializeAws_restJson1GetFunctionDefinitionVersionCommand;
const deserializeAws_restJson1GetFunctionDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupCommand = deserializeAws_restJson1GetGroupCommand;
const deserializeAws_restJson1GetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupCertificateAuthorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupCertificateAuthorityArn: undefined,
        GroupCertificateAuthorityId: undefined,
        PemEncodedCertificate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorityArn !== undefined && data.GroupCertificateAuthorityArn !== null) {
        contents.GroupCertificateAuthorityArn = data.GroupCertificateAuthorityArn;
    }
    if (data.GroupCertificateAuthorityId !== undefined && data.GroupCertificateAuthorityId !== null) {
        contents.GroupCertificateAuthorityId = data.GroupCertificateAuthorityId;
    }
    if (data.PemEncodedCertificate !== undefined && data.PemEncodedCertificate !== null) {
        contents.PemEncodedCertificate = data.PemEncodedCertificate;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupCertificateAuthorityCommand = deserializeAws_restJson1GetGroupCertificateAuthorityCommand;
const deserializeAws_restJson1GetGroupCertificateAuthorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupCertificateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupCertificateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CertificateAuthorityExpiryInMilliseconds: undefined,
        CertificateExpiryInMilliseconds: undefined,
        GroupId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CertificateAuthorityExpiryInMilliseconds !== undefined &&
        data.CertificateAuthorityExpiryInMilliseconds !== null) {
        contents.CertificateAuthorityExpiryInMilliseconds = data.CertificateAuthorityExpiryInMilliseconds;
    }
    if (data.CertificateExpiryInMilliseconds !== undefined && data.CertificateExpiryInMilliseconds !== null) {
        contents.CertificateExpiryInMilliseconds = data.CertificateExpiryInMilliseconds;
    }
    if (data.GroupId !== undefined && data.GroupId !== null) {
        contents.GroupId = data.GroupId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupCertificateConfigurationCommand = deserializeAws_restJson1GetGroupCertificateConfigurationCommand;
const deserializeAws_restJson1GetGroupCertificateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1GroupVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupVersionCommand = deserializeAws_restJson1GetGroupVersionCommand;
const deserializeAws_restJson1GetGroupVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetLoggerDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLoggerDefinitionCommand = deserializeAws_restJson1GetLoggerDefinitionCommand;
const deserializeAws_restJson1GetLoggerDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetLoggerDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLoggerDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1LoggerDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLoggerDefinitionVersionCommand = deserializeAws_restJson1GetLoggerDefinitionVersionCommand;
const deserializeAws_restJson1GetLoggerDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceDefinitionCommand = deserializeAws_restJson1GetResourceDefinitionCommand;
const deserializeAws_restJson1GetResourceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourceDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1ResourceDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceDefinitionVersionCommand = deserializeAws_restJson1GetResourceDefinitionVersionCommand;
const deserializeAws_restJson1GetResourceDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetServiceRoleForAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetServiceRoleForAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssociatedAt: undefined,
        RoleArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetServiceRoleForAccountCommand = deserializeAws_restJson1GetServiceRoleForAccountCommand;
const deserializeAws_restJson1GetServiceRoleForAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSubscriptionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSubscriptionDefinitionCommand = deserializeAws_restJson1GetSubscriptionDefinitionCommand;
const deserializeAws_restJson1GetSubscriptionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSubscriptionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1SubscriptionDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand = deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand;
const deserializeAws_restJson1GetSubscriptionDefinitionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetThingRuntimeConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetThingRuntimeConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RuntimeConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RuntimeConfiguration !== undefined && data.RuntimeConfiguration !== null) {
        contents.RuntimeConfiguration = deserializeAws_restJson1RuntimeConfiguration(data.RuntimeConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetThingRuntimeConfigurationCommand = deserializeAws_restJson1GetThingRuntimeConfigurationCommand;
const deserializeAws_restJson1GetThingRuntimeConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Deployments: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Deployments !== undefined && data.Deployments !== null) {
        contents.Deployments = deserializeAws_restJson1BulkDeploymentResults(data.Deployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand = deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand;
const deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBulkDeploymentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBulkDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BulkDeployments: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeployments !== undefined && data.BulkDeployments !== null) {
        contents.BulkDeployments = deserializeAws_restJson1BulkDeployments(data.BulkDeployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBulkDeploymentsCommand = deserializeAws_restJson1ListBulkDeploymentsCommand;
const deserializeAws_restJson1ListBulkDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListConnectorDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConnectorDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConnectorDefinitionsCommand = deserializeAws_restJson1ListConnectorDefinitionsCommand;
const deserializeAws_restJson1ListConnectorDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListConnectorDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConnectorDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConnectorDefinitionVersionsCommand = deserializeAws_restJson1ListConnectorDefinitionVersionsCommand;
const deserializeAws_restJson1ListConnectorDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListCoreDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCoreDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCoreDefinitionsCommand = deserializeAws_restJson1ListCoreDefinitionsCommand;
const deserializeAws_restJson1ListCoreDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListCoreDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCoreDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCoreDefinitionVersionsCommand = deserializeAws_restJson1ListCoreDefinitionVersionsCommand;
const deserializeAws_restJson1ListCoreDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDeploymentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Deployments: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Deployments !== undefined && data.Deployments !== null) {
        contents.Deployments = deserializeAws_restJson1Deployments(data.Deployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeploymentsCommand = deserializeAws_restJson1ListDeploymentsCommand;
const deserializeAws_restJson1ListDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDeviceDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeviceDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeviceDefinitionsCommand = deserializeAws_restJson1ListDeviceDefinitionsCommand;
const deserializeAws_restJson1ListDeviceDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListDeviceDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeviceDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeviceDefinitionVersionsCommand = deserializeAws_restJson1ListDeviceDefinitionVersionsCommand;
const deserializeAws_restJson1ListDeviceDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFunctionDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFunctionDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionDefinitionsCommand = deserializeAws_restJson1ListFunctionDefinitionsCommand;
const deserializeAws_restJson1ListFunctionDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListFunctionDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFunctionDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionDefinitionVersionsCommand = deserializeAws_restJson1ListFunctionDefinitionVersionsCommand;
const deserializeAws_restJson1ListFunctionDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupCertificateAuthoritiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupCertificateAuthorities: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorities !== undefined && data.GroupCertificateAuthorities !== null) {
        contents.GroupCertificateAuthorities = deserializeAws_restJson1__listOfGroupCertificateAuthorityProperties(data.GroupCertificateAuthorities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand = deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand;
const deserializeAws_restJson1ListGroupCertificateAuthoritiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Groups: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Groups !== undefined && data.Groups !== null) {
        contents.Groups = deserializeAws_restJson1__listOfGroupInformation(data.Groups, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupsCommand = deserializeAws_restJson1ListGroupsCommand;
const deserializeAws_restJson1ListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListGroupVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupVersionsCommand = deserializeAws_restJson1ListGroupVersionsCommand;
const deserializeAws_restJson1ListGroupVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListLoggerDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLoggerDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLoggerDefinitionsCommand = deserializeAws_restJson1ListLoggerDefinitionsCommand;
const deserializeAws_restJson1ListLoggerDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListLoggerDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLoggerDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLoggerDefinitionVersionsCommand = deserializeAws_restJson1ListLoggerDefinitionVersionsCommand;
const deserializeAws_restJson1ListLoggerDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListResourceDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResourceDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResourceDefinitionsCommand = deserializeAws_restJson1ListResourceDefinitionsCommand;
const deserializeAws_restJson1ListResourceDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListResourceDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResourceDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResourceDefinitionVersionsCommand = deserializeAws_restJson1ListResourceDefinitionVersionsCommand;
const deserializeAws_restJson1ListResourceDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSubscriptionDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSubscriptionDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Definitions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSubscriptionDefinitionsCommand = deserializeAws_restJson1ListSubscriptionDefinitionsCommand;
const deserializeAws_restJson1ListSubscriptionDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand = deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand;
const deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ResetDeploymentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ResetDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeploymentArn: undefined,
        DeploymentId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentArn !== undefined && data.DeploymentArn !== null) {
        contents.DeploymentArn = data.DeploymentArn;
    }
    if (data.DeploymentId !== undefined && data.DeploymentId !== null) {
        contents.DeploymentId = data.DeploymentId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResetDeploymentsCommand = deserializeAws_restJson1ResetDeploymentsCommand;
const deserializeAws_restJson1ResetDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartBulkDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartBulkDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BulkDeploymentArn: undefined,
        BulkDeploymentId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeploymentArn !== undefined && data.BulkDeploymentArn !== null) {
        contents.BulkDeploymentArn = data.BulkDeploymentArn;
    }
    if (data.BulkDeploymentId !== undefined && data.BulkDeploymentId !== null) {
        contents.BulkDeploymentId = data.BulkDeploymentId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartBulkDeploymentCommand = deserializeAws_restJson1StartBulkDeploymentCommand;
const deserializeAws_restJson1StartBulkDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopBulkDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopBulkDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopBulkDeploymentCommand = deserializeAws_restJson1StopBulkDeploymentCommand;
const deserializeAws_restJson1StopBulkDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateConnectivityInfoCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConnectivityInfoCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConnectivityInfoCommand = deserializeAws_restJson1UpdateConnectivityInfoCommand;
const deserializeAws_restJson1UpdateConnectivityInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateConnectorDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConnectorDefinitionCommand = deserializeAws_restJson1UpdateConnectorDefinitionCommand;
const deserializeAws_restJson1UpdateConnectorDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateCoreDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateCoreDefinitionCommand = deserializeAws_restJson1UpdateCoreDefinitionCommand;
const deserializeAws_restJson1UpdateCoreDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDeviceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDeviceDefinitionCommand = deserializeAws_restJson1UpdateDeviceDefinitionCommand;
const deserializeAws_restJson1UpdateDeviceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFunctionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFunctionDefinitionCommand = deserializeAws_restJson1UpdateFunctionDefinitionCommand;
const deserializeAws_restJson1UpdateFunctionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupCommand = deserializeAws_restJson1UpdateGroupCommand;
const deserializeAws_restJson1UpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupCertificateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CertificateAuthorityExpiryInMilliseconds: undefined,
        CertificateExpiryInMilliseconds: undefined,
        GroupId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CertificateAuthorityExpiryInMilliseconds !== undefined &&
        data.CertificateAuthorityExpiryInMilliseconds !== null) {
        contents.CertificateAuthorityExpiryInMilliseconds = data.CertificateAuthorityExpiryInMilliseconds;
    }
    if (data.CertificateExpiryInMilliseconds !== undefined && data.CertificateExpiryInMilliseconds !== null) {
        contents.CertificateExpiryInMilliseconds = data.CertificateExpiryInMilliseconds;
    }
    if (data.GroupId !== undefined && data.GroupId !== null) {
        contents.GroupId = data.GroupId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand = deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand;
const deserializeAws_restJson1UpdateGroupCertificateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateLoggerDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLoggerDefinitionCommand = deserializeAws_restJson1UpdateLoggerDefinitionCommand;
const deserializeAws_restJson1UpdateLoggerDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateResourceDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResourceDefinitionCommand = deserializeAws_restJson1UpdateResourceDefinitionCommand;
const deserializeAws_restJson1UpdateResourceDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSubscriptionDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSubscriptionDefinitionCommand = deserializeAws_restJson1UpdateSubscriptionDefinitionCommand;
const deserializeAws_restJson1UpdateSubscriptionDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateThingRuntimeConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand = deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand;
const deserializeAws_restJson1UpdateThingRuntimeConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorDetails: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorDetails: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1__listOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfConnectivityInfo = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ConnectivityInfo(entry, context);
    });
};
const serializeAws_restJson1__listOfConnector = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Connector(entry, context);
    });
};
const serializeAws_restJson1__listOfCore = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Core(entry, context);
    });
};
const serializeAws_restJson1__listOfDevice = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Device(entry, context);
    });
};
const serializeAws_restJson1__listOfFunction = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Function(entry, context);
    });
};
const serializeAws_restJson1__listOfLogger = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Logger(entry, context);
    });
};
const serializeAws_restJson1__listOfResource = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Resource(entry, context);
    });
};
const serializeAws_restJson1__listOfResourceAccessPolicy = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ResourceAccessPolicy(entry, context);
    });
};
const serializeAws_restJson1__listOfSubscription = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Subscription(entry, context);
    });
};
const serializeAws_restJson1__mapOf__string = (input, context) => {
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
const serializeAws_restJson1ConnectivityInfo = (input, context) => {
    return {
        ...(input.HostAddress !== undefined && input.HostAddress !== null && { HostAddress: input.HostAddress }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
        ...(input.PortNumber !== undefined && input.PortNumber !== null && { PortNumber: input.PortNumber }),
    };
};
const serializeAws_restJson1Connector = (input, context) => {
    return {
        ...(input.ConnectorArn !== undefined && input.ConnectorArn !== null && { ConnectorArn: input.ConnectorArn }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1__mapOf__string(input.Parameters, context) }),
    };
};
const serializeAws_restJson1ConnectorDefinitionVersion = (input, context) => {
    return {
        ...(input.Connectors !== undefined &&
            input.Connectors !== null && { Connectors: serializeAws_restJson1__listOfConnector(input.Connectors, context) }),
    };
};
const serializeAws_restJson1Core = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.SyncShadow !== undefined && input.SyncShadow !== null && { SyncShadow: input.SyncShadow }),
        ...(input.ThingArn !== undefined && input.ThingArn !== null && { ThingArn: input.ThingArn }),
    };
};
const serializeAws_restJson1CoreDefinitionVersion = (input, context) => {
    return {
        ...(input.Cores !== undefined &&
            input.Cores !== null && { Cores: serializeAws_restJson1__listOfCore(input.Cores, context) }),
    };
};
const serializeAws_restJson1Device = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.SyncShadow !== undefined && input.SyncShadow !== null && { SyncShadow: input.SyncShadow }),
        ...(input.ThingArn !== undefined && input.ThingArn !== null && { ThingArn: input.ThingArn }),
    };
};
const serializeAws_restJson1DeviceDefinitionVersion = (input, context) => {
    return {
        ...(input.Devices !== undefined &&
            input.Devices !== null && { Devices: serializeAws_restJson1__listOfDevice(input.Devices, context) }),
    };
};
const serializeAws_restJson1Function = (input, context) => {
    return {
        ...(input.FunctionArn !== undefined && input.FunctionArn !== null && { FunctionArn: input.FunctionArn }),
        ...(input.FunctionConfiguration !== undefined &&
            input.FunctionConfiguration !== null && {
            FunctionConfiguration: serializeAws_restJson1FunctionConfiguration(input.FunctionConfiguration, context),
        }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_restJson1FunctionConfiguration = (input, context) => {
    return {
        ...(input.EncodingType !== undefined && input.EncodingType !== null && { EncodingType: input.EncodingType }),
        ...(input.Environment !== undefined &&
            input.Environment !== null && {
            Environment: serializeAws_restJson1FunctionConfigurationEnvironment(input.Environment, context),
        }),
        ...(input.ExecArgs !== undefined && input.ExecArgs !== null && { ExecArgs: input.ExecArgs }),
        ...(input.Executable !== undefined && input.Executable !== null && { Executable: input.Executable }),
        ...(input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize }),
        ...(input.Pinned !== undefined && input.Pinned !== null && { Pinned: input.Pinned }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    };
};
const serializeAws_restJson1FunctionConfigurationEnvironment = (input, context) => {
    return {
        ...(input.AccessSysfs !== undefined && input.AccessSysfs !== null && { AccessSysfs: input.AccessSysfs }),
        ...(input.Execution !== undefined &&
            input.Execution !== null && {
            Execution: serializeAws_restJson1FunctionExecutionConfig(input.Execution, context),
        }),
        ...(input.ResourceAccessPolicies !== undefined &&
            input.ResourceAccessPolicies !== null && {
            ResourceAccessPolicies: serializeAws_restJson1__listOfResourceAccessPolicy(input.ResourceAccessPolicies, context),
        }),
        ...(input.Variables !== undefined &&
            input.Variables !== null && { Variables: serializeAws_restJson1__mapOf__string(input.Variables, context) }),
    };
};
const serializeAws_restJson1FunctionDefaultConfig = (input, context) => {
    return {
        ...(input.Execution !== undefined &&
            input.Execution !== null && {
            Execution: serializeAws_restJson1FunctionDefaultExecutionConfig(input.Execution, context),
        }),
    };
};
const serializeAws_restJson1FunctionDefaultExecutionConfig = (input, context) => {
    return {
        ...(input.IsolationMode !== undefined && input.IsolationMode !== null && { IsolationMode: input.IsolationMode }),
        ...(input.RunAs !== undefined &&
            input.RunAs !== null && { RunAs: serializeAws_restJson1FunctionRunAsConfig(input.RunAs, context) }),
    };
};
const serializeAws_restJson1FunctionDefinitionVersion = (input, context) => {
    return {
        ...(input.DefaultConfig !== undefined &&
            input.DefaultConfig !== null && {
            DefaultConfig: serializeAws_restJson1FunctionDefaultConfig(input.DefaultConfig, context),
        }),
        ...(input.Functions !== undefined &&
            input.Functions !== null && { Functions: serializeAws_restJson1__listOfFunction(input.Functions, context) }),
    };
};
const serializeAws_restJson1FunctionExecutionConfig = (input, context) => {
    return {
        ...(input.IsolationMode !== undefined && input.IsolationMode !== null && { IsolationMode: input.IsolationMode }),
        ...(input.RunAs !== undefined &&
            input.RunAs !== null && { RunAs: serializeAws_restJson1FunctionRunAsConfig(input.RunAs, context) }),
    };
};
const serializeAws_restJson1FunctionRunAsConfig = (input, context) => {
    return {
        ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
        ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
    };
};
const serializeAws_restJson1GroupOwnerSetting = (input, context) => {
    return {
        ...(input.AutoAddGroupOwner !== undefined &&
            input.AutoAddGroupOwner !== null && { AutoAddGroupOwner: input.AutoAddGroupOwner }),
        ...(input.GroupOwner !== undefined && input.GroupOwner !== null && { GroupOwner: input.GroupOwner }),
    };
};
const serializeAws_restJson1GroupVersion = (input, context) => {
    return {
        ...(input.ConnectorDefinitionVersionArn !== undefined &&
            input.ConnectorDefinitionVersionArn !== null && {
            ConnectorDefinitionVersionArn: input.ConnectorDefinitionVersionArn,
        }),
        ...(input.CoreDefinitionVersionArn !== undefined &&
            input.CoreDefinitionVersionArn !== null && { CoreDefinitionVersionArn: input.CoreDefinitionVersionArn }),
        ...(input.DeviceDefinitionVersionArn !== undefined &&
            input.DeviceDefinitionVersionArn !== null && { DeviceDefinitionVersionArn: input.DeviceDefinitionVersionArn }),
        ...(input.FunctionDefinitionVersionArn !== undefined &&
            input.FunctionDefinitionVersionArn !== null && {
            FunctionDefinitionVersionArn: input.FunctionDefinitionVersionArn,
        }),
        ...(input.LoggerDefinitionVersionArn !== undefined &&
            input.LoggerDefinitionVersionArn !== null && { LoggerDefinitionVersionArn: input.LoggerDefinitionVersionArn }),
        ...(input.ResourceDefinitionVersionArn !== undefined &&
            input.ResourceDefinitionVersionArn !== null && {
            ResourceDefinitionVersionArn: input.ResourceDefinitionVersionArn,
        }),
        ...(input.SubscriptionDefinitionVersionArn !== undefined &&
            input.SubscriptionDefinitionVersionArn !== null && {
            SubscriptionDefinitionVersionArn: input.SubscriptionDefinitionVersionArn,
        }),
    };
};
const serializeAws_restJson1LocalDeviceResourceData = (input, context) => {
    return {
        ...(input.GroupOwnerSetting !== undefined &&
            input.GroupOwnerSetting !== null && {
            GroupOwnerSetting: serializeAws_restJson1GroupOwnerSetting(input.GroupOwnerSetting, context),
        }),
        ...(input.SourcePath !== undefined && input.SourcePath !== null && { SourcePath: input.SourcePath }),
    };
};
const serializeAws_restJson1LocalVolumeResourceData = (input, context) => {
    return {
        ...(input.DestinationPath !== undefined &&
            input.DestinationPath !== null && { DestinationPath: input.DestinationPath }),
        ...(input.GroupOwnerSetting !== undefined &&
            input.GroupOwnerSetting !== null && {
            GroupOwnerSetting: serializeAws_restJson1GroupOwnerSetting(input.GroupOwnerSetting, context),
        }),
        ...(input.SourcePath !== undefined && input.SourcePath !== null && { SourcePath: input.SourcePath }),
    };
};
const serializeAws_restJson1Logger = (input, context) => {
    return {
        ...(input.Component !== undefined && input.Component !== null && { Component: input.Component }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Level !== undefined && input.Level !== null && { Level: input.Level }),
        ...(input.Space !== undefined && input.Space !== null && { Space: input.Space }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1LoggerDefinitionVersion = (input, context) => {
    return {
        ...(input.Loggers !== undefined &&
            input.Loggers !== null && { Loggers: serializeAws_restJson1__listOfLogger(input.Loggers, context) }),
    };
};
const serializeAws_restJson1Resource = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResourceDataContainer !== undefined &&
            input.ResourceDataContainer !== null && {
            ResourceDataContainer: serializeAws_restJson1ResourceDataContainer(input.ResourceDataContainer, context),
        }),
    };
};
const serializeAws_restJson1ResourceAccessPolicy = (input, context) => {
    return {
        ...(input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_restJson1ResourceDataContainer = (input, context) => {
    return {
        ...(input.LocalDeviceResourceData !== undefined &&
            input.LocalDeviceResourceData !== null && {
            LocalDeviceResourceData: serializeAws_restJson1LocalDeviceResourceData(input.LocalDeviceResourceData, context),
        }),
        ...(input.LocalVolumeResourceData !== undefined &&
            input.LocalVolumeResourceData !== null && {
            LocalVolumeResourceData: serializeAws_restJson1LocalVolumeResourceData(input.LocalVolumeResourceData, context),
        }),
        ...(input.S3MachineLearningModelResourceData !== undefined &&
            input.S3MachineLearningModelResourceData !== null && {
            S3MachineLearningModelResourceData: serializeAws_restJson1S3MachineLearningModelResourceData(input.S3MachineLearningModelResourceData, context),
        }),
        ...(input.SageMakerMachineLearningModelResourceData !== undefined &&
            input.SageMakerMachineLearningModelResourceData !== null && {
            SageMakerMachineLearningModelResourceData: serializeAws_restJson1SageMakerMachineLearningModelResourceData(input.SageMakerMachineLearningModelResourceData, context),
        }),
        ...(input.SecretsManagerSecretResourceData !== undefined &&
            input.SecretsManagerSecretResourceData !== null && {
            SecretsManagerSecretResourceData: serializeAws_restJson1SecretsManagerSecretResourceData(input.SecretsManagerSecretResourceData, context),
        }),
    };
};
const serializeAws_restJson1ResourceDefinitionVersion = (input, context) => {
    return {
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
    };
};
const serializeAws_restJson1ResourceDownloadOwnerSetting = (input, context) => {
    return {
        ...(input.GroupOwner !== undefined && input.GroupOwner !== null && { GroupOwner: input.GroupOwner }),
        ...(input.GroupPermission !== undefined &&
            input.GroupPermission !== null && { GroupPermission: input.GroupPermission }),
    };
};
const serializeAws_restJson1S3MachineLearningModelResourceData = (input, context) => {
    return {
        ...(input.DestinationPath !== undefined &&
            input.DestinationPath !== null && { DestinationPath: input.DestinationPath }),
        ...(input.OwnerSetting !== undefined &&
            input.OwnerSetting !== null && {
            OwnerSetting: serializeAws_restJson1ResourceDownloadOwnerSetting(input.OwnerSetting, context),
        }),
        ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
    };
};
const serializeAws_restJson1SageMakerMachineLearningModelResourceData = (input, context) => {
    return {
        ...(input.DestinationPath !== undefined &&
            input.DestinationPath !== null && { DestinationPath: input.DestinationPath }),
        ...(input.OwnerSetting !== undefined &&
            input.OwnerSetting !== null && {
            OwnerSetting: serializeAws_restJson1ResourceDownloadOwnerSetting(input.OwnerSetting, context),
        }),
        ...(input.SageMakerJobArn !== undefined &&
            input.SageMakerJobArn !== null && { SageMakerJobArn: input.SageMakerJobArn }),
    };
};
const serializeAws_restJson1SecretsManagerSecretResourceData = (input, context) => {
    return {
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.AdditionalStagingLabelsToDownload !== undefined &&
            input.AdditionalStagingLabelsToDownload !== null && {
            AdditionalStagingLabelsToDownload: serializeAws_restJson1__listOf__string(input.AdditionalStagingLabelsToDownload, context),
        }),
    };
};
const serializeAws_restJson1Subscription = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_restJson1SubscriptionDefinitionVersion = (input, context) => {
    return {
        ...(input.Subscriptions !== undefined &&
            input.Subscriptions !== null && {
            Subscriptions: serializeAws_restJson1__listOfSubscription(input.Subscriptions, context),
        }),
    };
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
const serializeAws_restJson1TelemetryConfigurationUpdate = (input, context) => {
    return {
        ...(input.Telemetry !== undefined && input.Telemetry !== null && { Telemetry: input.Telemetry }),
    };
};
const serializeAws_restJson1UpdateTargets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfConnectivityInfo = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConnectivityInfo(entry, context);
    });
};
const deserializeAws_restJson1__listOfConnector = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Connector(entry, context);
    });
};
const deserializeAws_restJson1__listOfCore = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Core(entry, context);
    });
};
const deserializeAws_restJson1__listOfDefinitionInformation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DefinitionInformation(entry, context);
    });
};
const deserializeAws_restJson1__listOfDevice = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Device(entry, context);
    });
};
const deserializeAws_restJson1__listOfFunction = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Function(entry, context);
    });
};
const deserializeAws_restJson1__listOfGroupCertificateAuthorityProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupCertificateAuthorityProperties(entry, context);
    });
};
const deserializeAws_restJson1__listOfGroupInformation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupInformation(entry, context);
    });
};
const deserializeAws_restJson1__listOfLogger = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Logger(entry, context);
    });
};
const deserializeAws_restJson1__listOfResource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Resource(entry, context);
    });
};
const deserializeAws_restJson1__listOfResourceAccessPolicy = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceAccessPolicy(entry, context);
    });
};
const deserializeAws_restJson1__listOfSubscription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Subscription(entry, context);
    });
};
const deserializeAws_restJson1__listOfVersionInformation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VersionInformation(entry, context);
    });
};
const deserializeAws_restJson1__mapOf__string = (output, context) => {
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
const deserializeAws_restJson1BulkDeployment = (output, context) => {
    return {
        BulkDeploymentArn: output.BulkDeploymentArn !== undefined && output.BulkDeploymentArn !== null
            ? output.BulkDeploymentArn
            : undefined,
        BulkDeploymentId: output.BulkDeploymentId !== undefined && output.BulkDeploymentId !== null ? output.BulkDeploymentId : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    };
};
const deserializeAws_restJson1BulkDeploymentMetrics = (output, context) => {
    return {
        InvalidInputRecords: output.InvalidInputRecords !== undefined && output.InvalidInputRecords !== null
            ? output.InvalidInputRecords
            : undefined,
        RecordsProcessed: output.RecordsProcessed !== undefined && output.RecordsProcessed !== null ? output.RecordsProcessed : undefined,
        RetryAttempts: output.RetryAttempts !== undefined && output.RetryAttempts !== null ? output.RetryAttempts : undefined,
    };
};
const deserializeAws_restJson1BulkDeploymentResult = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        DeploymentArn: output.DeploymentArn !== undefined && output.DeploymentArn !== null ? output.DeploymentArn : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        DeploymentStatus: output.DeploymentStatus !== undefined && output.DeploymentStatus !== null ? output.DeploymentStatus : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        GroupArn: output.GroupArn !== undefined && output.GroupArn !== null ? output.GroupArn : undefined,
    };
};
const deserializeAws_restJson1BulkDeploymentResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BulkDeploymentResult(entry, context);
    });
};
const deserializeAws_restJson1BulkDeployments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BulkDeployment(entry, context);
    });
};
const deserializeAws_restJson1ConnectivityInfo = (output, context) => {
    return {
        HostAddress: output.HostAddress !== undefined && output.HostAddress !== null ? output.HostAddress : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Metadata: output.Metadata !== undefined && output.Metadata !== null ? output.Metadata : undefined,
        PortNumber: output.PortNumber !== undefined && output.PortNumber !== null ? output.PortNumber : undefined,
    };
};
const deserializeAws_restJson1Connector = (output, context) => {
    return {
        ConnectorArn: output.ConnectorArn !== undefined && output.ConnectorArn !== null ? output.ConnectorArn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1__mapOf__string(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConnectorDefinitionVersion = (output, context) => {
    return {
        Connectors: output.Connectors !== undefined && output.Connectors !== null
            ? deserializeAws_restJson1__listOfConnector(output.Connectors, context)
            : undefined,
    };
};
const deserializeAws_restJson1Core = (output, context) => {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        SyncShadow: output.SyncShadow !== undefined && output.SyncShadow !== null ? output.SyncShadow : undefined,
        ThingArn: output.ThingArn !== undefined && output.ThingArn !== null ? output.ThingArn : undefined,
    };
};
const deserializeAws_restJson1CoreDefinitionVersion = (output, context) => {
    return {
        Cores: output.Cores !== undefined && output.Cores !== null
            ? deserializeAws_restJson1__listOfCore(output.Cores, context)
            : undefined,
    };
};
const deserializeAws_restJson1DefinitionInformation = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? output.CreationTimestamp
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? output.LastUpdatedTimestamp
            : undefined,
        LatestVersion: output.LatestVersion !== undefined && output.LatestVersion !== null ? output.LatestVersion : undefined,
        LatestVersionArn: output.LatestVersionArn !== undefined && output.LatestVersionArn !== null ? output.LatestVersionArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1Deployment = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        DeploymentArn: output.DeploymentArn !== undefined && output.DeploymentArn !== null ? output.DeploymentArn : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        GroupArn: output.GroupArn !== undefined && output.GroupArn !== null ? output.GroupArn : undefined,
    };
};
const deserializeAws_restJson1Deployments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Deployment(entry, context);
    });
};
const deserializeAws_restJson1Device = (output, context) => {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        SyncShadow: output.SyncShadow !== undefined && output.SyncShadow !== null ? output.SyncShadow : undefined,
        ThingArn: output.ThingArn !== undefined && output.ThingArn !== null ? output.ThingArn : undefined,
    };
};
const deserializeAws_restJson1DeviceDefinitionVersion = (output, context) => {
    return {
        Devices: output.Devices !== undefined && output.Devices !== null
            ? deserializeAws_restJson1__listOfDevice(output.Devices, context)
            : undefined,
    };
};
const deserializeAws_restJson1ErrorDetail = (output, context) => {
    return {
        DetailedErrorCode: output.DetailedErrorCode !== undefined && output.DetailedErrorCode !== null
            ? output.DetailedErrorCode
            : undefined,
        DetailedErrorMessage: output.DetailedErrorMessage !== undefined && output.DetailedErrorMessage !== null
            ? output.DetailedErrorMessage
            : undefined,
    };
};
const deserializeAws_restJson1ErrorDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorDetail(entry, context);
    });
};
const deserializeAws_restJson1Function = (output, context) => {
    return {
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        FunctionConfiguration: output.FunctionConfiguration !== undefined && output.FunctionConfiguration !== null
            ? deserializeAws_restJson1FunctionConfiguration(output.FunctionConfiguration, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1FunctionConfiguration = (output, context) => {
    return {
        EncodingType: output.EncodingType !== undefined && output.EncodingType !== null ? output.EncodingType : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_restJson1FunctionConfigurationEnvironment(output.Environment, context)
            : undefined,
        ExecArgs: output.ExecArgs !== undefined && output.ExecArgs !== null ? output.ExecArgs : undefined,
        Executable: output.Executable !== undefined && output.Executable !== null ? output.Executable : undefined,
        MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
        Pinned: output.Pinned !== undefined && output.Pinned !== null ? output.Pinned : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    };
};
const deserializeAws_restJson1FunctionConfigurationEnvironment = (output, context) => {
    return {
        AccessSysfs: output.AccessSysfs !== undefined && output.AccessSysfs !== null ? output.AccessSysfs : undefined,
        Execution: output.Execution !== undefined && output.Execution !== null
            ? deserializeAws_restJson1FunctionExecutionConfig(output.Execution, context)
            : undefined,
        ResourceAccessPolicies: output.ResourceAccessPolicies !== undefined && output.ResourceAccessPolicies !== null
            ? deserializeAws_restJson1__listOfResourceAccessPolicy(output.ResourceAccessPolicies, context)
            : undefined,
        Variables: output.Variables !== undefined && output.Variables !== null
            ? deserializeAws_restJson1__mapOf__string(output.Variables, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionDefaultConfig = (output, context) => {
    return {
        Execution: output.Execution !== undefined && output.Execution !== null
            ? deserializeAws_restJson1FunctionDefaultExecutionConfig(output.Execution, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionDefaultExecutionConfig = (output, context) => {
    return {
        IsolationMode: output.IsolationMode !== undefined && output.IsolationMode !== null ? output.IsolationMode : undefined,
        RunAs: output.RunAs !== undefined && output.RunAs !== null
            ? deserializeAws_restJson1FunctionRunAsConfig(output.RunAs, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionDefinitionVersion = (output, context) => {
    return {
        DefaultConfig: output.DefaultConfig !== undefined && output.DefaultConfig !== null
            ? deserializeAws_restJson1FunctionDefaultConfig(output.DefaultConfig, context)
            : undefined,
        Functions: output.Functions !== undefined && output.Functions !== null
            ? deserializeAws_restJson1__listOfFunction(output.Functions, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionExecutionConfig = (output, context) => {
    return {
        IsolationMode: output.IsolationMode !== undefined && output.IsolationMode !== null ? output.IsolationMode : undefined,
        RunAs: output.RunAs !== undefined && output.RunAs !== null
            ? deserializeAws_restJson1FunctionRunAsConfig(output.RunAs, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionRunAsConfig = (output, context) => {
    return {
        Gid: output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
        Uid: output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
    };
};
const deserializeAws_restJson1GroupCertificateAuthorityProperties = (output, context) => {
    return {
        GroupCertificateAuthorityArn: output.GroupCertificateAuthorityArn !== undefined && output.GroupCertificateAuthorityArn !== null
            ? output.GroupCertificateAuthorityArn
            : undefined,
        GroupCertificateAuthorityId: output.GroupCertificateAuthorityId !== undefined && output.GroupCertificateAuthorityId !== null
            ? output.GroupCertificateAuthorityId
            : undefined,
    };
};
const deserializeAws_restJson1GroupInformation = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? output.CreationTimestamp
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? output.LastUpdatedTimestamp
            : undefined,
        LatestVersion: output.LatestVersion !== undefined && output.LatestVersion !== null ? output.LatestVersion : undefined,
        LatestVersionArn: output.LatestVersionArn !== undefined && output.LatestVersionArn !== null ? output.LatestVersionArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1GroupOwnerSetting = (output, context) => {
    return {
        AutoAddGroupOwner: output.AutoAddGroupOwner !== undefined && output.AutoAddGroupOwner !== null
            ? output.AutoAddGroupOwner
            : undefined,
        GroupOwner: output.GroupOwner !== undefined && output.GroupOwner !== null ? output.GroupOwner : undefined,
    };
};
const deserializeAws_restJson1GroupVersion = (output, context) => {
    return {
        ConnectorDefinitionVersionArn: output.ConnectorDefinitionVersionArn !== undefined && output.ConnectorDefinitionVersionArn !== null
            ? output.ConnectorDefinitionVersionArn
            : undefined,
        CoreDefinitionVersionArn: output.CoreDefinitionVersionArn !== undefined && output.CoreDefinitionVersionArn !== null
            ? output.CoreDefinitionVersionArn
            : undefined,
        DeviceDefinitionVersionArn: output.DeviceDefinitionVersionArn !== undefined && output.DeviceDefinitionVersionArn !== null
            ? output.DeviceDefinitionVersionArn
            : undefined,
        FunctionDefinitionVersionArn: output.FunctionDefinitionVersionArn !== undefined && output.FunctionDefinitionVersionArn !== null
            ? output.FunctionDefinitionVersionArn
            : undefined,
        LoggerDefinitionVersionArn: output.LoggerDefinitionVersionArn !== undefined && output.LoggerDefinitionVersionArn !== null
            ? output.LoggerDefinitionVersionArn
            : undefined,
        ResourceDefinitionVersionArn: output.ResourceDefinitionVersionArn !== undefined && output.ResourceDefinitionVersionArn !== null
            ? output.ResourceDefinitionVersionArn
            : undefined,
        SubscriptionDefinitionVersionArn: output.SubscriptionDefinitionVersionArn !== undefined && output.SubscriptionDefinitionVersionArn !== null
            ? output.SubscriptionDefinitionVersionArn
            : undefined,
    };
};
const deserializeAws_restJson1LocalDeviceResourceData = (output, context) => {
    return {
        GroupOwnerSetting: output.GroupOwnerSetting !== undefined && output.GroupOwnerSetting !== null
            ? deserializeAws_restJson1GroupOwnerSetting(output.GroupOwnerSetting, context)
            : undefined,
        SourcePath: output.SourcePath !== undefined && output.SourcePath !== null ? output.SourcePath : undefined,
    };
};
const deserializeAws_restJson1LocalVolumeResourceData = (output, context) => {
    return {
        DestinationPath: output.DestinationPath !== undefined && output.DestinationPath !== null ? output.DestinationPath : undefined,
        GroupOwnerSetting: output.GroupOwnerSetting !== undefined && output.GroupOwnerSetting !== null
            ? deserializeAws_restJson1GroupOwnerSetting(output.GroupOwnerSetting, context)
            : undefined,
        SourcePath: output.SourcePath !== undefined && output.SourcePath !== null ? output.SourcePath : undefined,
    };
};
const deserializeAws_restJson1Logger = (output, context) => {
    return {
        Component: output.Component !== undefined && output.Component !== null ? output.Component : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Level: output.Level !== undefined && output.Level !== null ? output.Level : undefined,
        Space: output.Space !== undefined && output.Space !== null ? output.Space : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1LoggerDefinitionVersion = (output, context) => {
    return {
        Loggers: output.Loggers !== undefined && output.Loggers !== null
            ? deserializeAws_restJson1__listOfLogger(output.Loggers, context)
            : undefined,
    };
};
const deserializeAws_restJson1Resource = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceDataContainer: output.ResourceDataContainer !== undefined && output.ResourceDataContainer !== null
            ? deserializeAws_restJson1ResourceDataContainer(output.ResourceDataContainer, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceAccessPolicy = (output, context) => {
    return {
        Permission: output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_restJson1ResourceDataContainer = (output, context) => {
    return {
        LocalDeviceResourceData: output.LocalDeviceResourceData !== undefined && output.LocalDeviceResourceData !== null
            ? deserializeAws_restJson1LocalDeviceResourceData(output.LocalDeviceResourceData, context)
            : undefined,
        LocalVolumeResourceData: output.LocalVolumeResourceData !== undefined && output.LocalVolumeResourceData !== null
            ? deserializeAws_restJson1LocalVolumeResourceData(output.LocalVolumeResourceData, context)
            : undefined,
        S3MachineLearningModelResourceData: output.S3MachineLearningModelResourceData !== undefined && output.S3MachineLearningModelResourceData !== null
            ? deserializeAws_restJson1S3MachineLearningModelResourceData(output.S3MachineLearningModelResourceData, context)
            : undefined,
        SageMakerMachineLearningModelResourceData: output.SageMakerMachineLearningModelResourceData !== undefined &&
            output.SageMakerMachineLearningModelResourceData !== null
            ? deserializeAws_restJson1SageMakerMachineLearningModelResourceData(output.SageMakerMachineLearningModelResourceData, context)
            : undefined,
        SecretsManagerSecretResourceData: output.SecretsManagerSecretResourceData !== undefined && output.SecretsManagerSecretResourceData !== null
            ? deserializeAws_restJson1SecretsManagerSecretResourceData(output.SecretsManagerSecretResourceData, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceDefinitionVersion = (output, context) => {
    return {
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1__listOfResource(output.Resources, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceDownloadOwnerSetting = (output, context) => {
    return {
        GroupOwner: output.GroupOwner !== undefined && output.GroupOwner !== null ? output.GroupOwner : undefined,
        GroupPermission: output.GroupPermission !== undefined && output.GroupPermission !== null ? output.GroupPermission : undefined,
    };
};
const deserializeAws_restJson1RuntimeConfiguration = (output, context) => {
    return {
        TelemetryConfiguration: output.TelemetryConfiguration !== undefined && output.TelemetryConfiguration !== null
            ? deserializeAws_restJson1TelemetryConfiguration(output.TelemetryConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3MachineLearningModelResourceData = (output, context) => {
    return {
        DestinationPath: output.DestinationPath !== undefined && output.DestinationPath !== null ? output.DestinationPath : undefined,
        OwnerSetting: output.OwnerSetting !== undefined && output.OwnerSetting !== null
            ? deserializeAws_restJson1ResourceDownloadOwnerSetting(output.OwnerSetting, context)
            : undefined,
        S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
    };
};
const deserializeAws_restJson1SageMakerMachineLearningModelResourceData = (output, context) => {
    return {
        DestinationPath: output.DestinationPath !== undefined && output.DestinationPath !== null ? output.DestinationPath : undefined,
        OwnerSetting: output.OwnerSetting !== undefined && output.OwnerSetting !== null
            ? deserializeAws_restJson1ResourceDownloadOwnerSetting(output.OwnerSetting, context)
            : undefined,
        SageMakerJobArn: output.SageMakerJobArn !== undefined && output.SageMakerJobArn !== null ? output.SageMakerJobArn : undefined,
    };
};
const deserializeAws_restJson1SecretsManagerSecretResourceData = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        AdditionalStagingLabelsToDownload: output.AdditionalStagingLabelsToDownload !== undefined && output.AdditionalStagingLabelsToDownload !== null
            ? deserializeAws_restJson1__listOf__string(output.AdditionalStagingLabelsToDownload, context)
            : undefined,
    };
};
const deserializeAws_restJson1Subscription = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    };
};
const deserializeAws_restJson1SubscriptionDefinitionVersion = (output, context) => {
    return {
        Subscriptions: output.Subscriptions !== undefined && output.Subscriptions !== null
            ? deserializeAws_restJson1__listOfSubscription(output.Subscriptions, context)
            : undefined,
    };
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
const deserializeAws_restJson1TelemetryConfiguration = (output, context) => {
    return {
        ConfigurationSyncStatus: output.ConfigurationSyncStatus !== undefined && output.ConfigurationSyncStatus !== null
            ? output.ConfigurationSyncStatus
            : undefined,
        Telemetry: output.Telemetry !== undefined && output.Telemetry !== null ? output.Telemetry : undefined,
    };
};
const deserializeAws_restJson1VersionInformation = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? output.CreationTimestamp
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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