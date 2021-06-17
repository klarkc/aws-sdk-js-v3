"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateUserCommand = exports.deserializeAws_restJson1UpdateConfigurationCommand = exports.deserializeAws_restJson1UpdateBrokerCommand = exports.deserializeAws_restJson1RebootBrokerCommand = exports.deserializeAws_restJson1ListUsersCommand = exports.deserializeAws_restJson1ListTagsCommand = exports.deserializeAws_restJson1ListConfigurationsCommand = exports.deserializeAws_restJson1ListConfigurationRevisionsCommand = exports.deserializeAws_restJson1ListBrokersCommand = exports.deserializeAws_restJson1DescribeUserCommand = exports.deserializeAws_restJson1DescribeConfigurationRevisionCommand = exports.deserializeAws_restJson1DescribeConfigurationCommand = exports.deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand = exports.deserializeAws_restJson1DescribeBrokerEngineTypesCommand = exports.deserializeAws_restJson1DescribeBrokerCommand = exports.deserializeAws_restJson1DeleteUserCommand = exports.deserializeAws_restJson1DeleteTagsCommand = exports.deserializeAws_restJson1DeleteBrokerCommand = exports.deserializeAws_restJson1CreateUserCommand = exports.deserializeAws_restJson1CreateTagsCommand = exports.deserializeAws_restJson1CreateConfigurationCommand = exports.deserializeAws_restJson1CreateBrokerCommand = exports.serializeAws_restJson1UpdateUserCommand = exports.serializeAws_restJson1UpdateConfigurationCommand = exports.serializeAws_restJson1UpdateBrokerCommand = exports.serializeAws_restJson1RebootBrokerCommand = exports.serializeAws_restJson1ListUsersCommand = exports.serializeAws_restJson1ListTagsCommand = exports.serializeAws_restJson1ListConfigurationsCommand = exports.serializeAws_restJson1ListConfigurationRevisionsCommand = exports.serializeAws_restJson1ListBrokersCommand = exports.serializeAws_restJson1DescribeUserCommand = exports.serializeAws_restJson1DescribeConfigurationRevisionCommand = exports.serializeAws_restJson1DescribeConfigurationCommand = exports.serializeAws_restJson1DescribeBrokerInstanceOptionsCommand = exports.serializeAws_restJson1DescribeBrokerEngineTypesCommand = exports.serializeAws_restJson1DescribeBrokerCommand = exports.serializeAws_restJson1DeleteUserCommand = exports.serializeAws_restJson1DeleteTagsCommand = exports.serializeAws_restJson1DeleteBrokerCommand = exports.serializeAws_restJson1CreateUserCommand = exports.serializeAws_restJson1CreateTagsCommand = exports.serializeAws_restJson1CreateConfigurationCommand = exports.serializeAws_restJson1CreateBrokerCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateBrokerCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/brokers";
    let body;
    body = JSON.stringify({
        ...(input.AuthenticationStrategy !== undefined &&
            input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
        ...(input.AutoMinorVersionUpgrade !== undefined &&
            input.AutoMinorVersionUpgrade !== null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
        ...(input.BrokerName !== undefined && input.BrokerName !== null && { brokerName: input.BrokerName }),
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            configuration: serializeAws_restJson1ConfigurationId(input.Configuration, context),
        }),
        creatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DeploymentMode !== undefined &&
            input.DeploymentMode !== null && { deploymentMode: input.DeploymentMode }),
        ...(input.EncryptionOptions !== undefined &&
            input.EncryptionOptions !== null && {
            encryptionOptions: serializeAws_restJson1EncryptionOptions(input.EncryptionOptions, context),
        }),
        ...(input.EngineType !== undefined && input.EngineType !== null && { engineType: input.EngineType }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
        ...(input.HostInstanceType !== undefined &&
            input.HostInstanceType !== null && { hostInstanceType: input.HostInstanceType }),
        ...(input.LdapServerMetadata !== undefined &&
            input.LdapServerMetadata !== null && {
            ldapServerMetadata: serializeAws_restJson1LdapServerMetadataInput(input.LdapServerMetadata, context),
        }),
        ...(input.Logs !== undefined && input.Logs !== null && { logs: serializeAws_restJson1Logs(input.Logs, context) }),
        ...(input.MaintenanceWindowStartTime !== undefined &&
            input.MaintenanceWindowStartTime !== null && {
            maintenanceWindowStartTime: serializeAws_restJson1WeeklyStartTime(input.MaintenanceWindowStartTime, context),
        }),
        ...(input.PubliclyAccessible !== undefined &&
            input.PubliclyAccessible !== null && { publiclyAccessible: input.PubliclyAccessible }),
        ...(input.SecurityGroups !== undefined &&
            input.SecurityGroups !== null && {
            securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
        }),
        ...(input.StorageType !== undefined && input.StorageType !== null && { storageType: input.StorageType }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { subnetIds: serializeAws_restJson1__listOf__string(input.SubnetIds, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
        ...(input.Users !== undefined &&
            input.Users !== null && { users: serializeAws_restJson1__listOfUser(input.Users, context) }),
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
exports.serializeAws_restJson1CreateBrokerCommand = serializeAws_restJson1CreateBrokerCommand;
const serializeAws_restJson1CreateConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/configurations";
    let body;
    body = JSON.stringify({
        ...(input.AuthenticationStrategy !== undefined &&
            input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
        ...(input.EngineType !== undefined && input.EngineType !== null && { engineType: input.EngineType }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateConfigurationCommand = serializeAws_restJson1CreateConfigurationCommand;
const serializeAws_restJson1CreateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/tags/{ResourceArn}";
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
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateTagsCommand = serializeAws_restJson1CreateTagsCommand;
const serializeAws_restJson1CreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    if (input.Username !== undefined) {
        const labelValue = input.Username;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Username.");
        }
        resolvedPath = resolvedPath.replace("{Username}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Username.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
        ...(input.Groups !== undefined &&
            input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
        ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
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
exports.serializeAws_restJson1CreateUserCommand = serializeAws_restJson1CreateUserCommand;
const serializeAws_restJson1DeleteBrokerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
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
exports.serializeAws_restJson1DeleteBrokerCommand = serializeAws_restJson1DeleteBrokerCommand;
const serializeAws_restJson1DeleteTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/tags/{ResourceArn}";
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
exports.serializeAws_restJson1DeleteTagsCommand = serializeAws_restJson1DeleteTagsCommand;
const serializeAws_restJson1DeleteUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    if (input.Username !== undefined) {
        const labelValue = input.Username;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Username.");
        }
        resolvedPath = resolvedPath.replace("{Username}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Username.");
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
const serializeAws_restJson1DescribeBrokerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
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
exports.serializeAws_restJson1DescribeBrokerCommand = serializeAws_restJson1DescribeBrokerCommand;
const serializeAws_restJson1DescribeBrokerEngineTypesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/broker-engine-types";
    const query = {
        ...(input.EngineType !== undefined && { engineType: input.EngineType }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1DescribeBrokerEngineTypesCommand = serializeAws_restJson1DescribeBrokerEngineTypesCommand;
const serializeAws_restJson1DescribeBrokerInstanceOptionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/broker-instance-options";
    const query = {
        ...(input.EngineType !== undefined && { engineType: input.EngineType }),
        ...(input.HostInstanceType !== undefined && { hostInstanceType: input.HostInstanceType }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.StorageType !== undefined && { storageType: input.StorageType }),
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
exports.serializeAws_restJson1DescribeBrokerInstanceOptionsCommand = serializeAws_restJson1DescribeBrokerInstanceOptionsCommand;
const serializeAws_restJson1DescribeConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/configurations/{ConfigurationId}";
    if (input.ConfigurationId !== undefined) {
        const labelValue = input.ConfigurationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationId.");
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
exports.serializeAws_restJson1DescribeConfigurationCommand = serializeAws_restJson1DescribeConfigurationCommand;
const serializeAws_restJson1DescribeConfigurationRevisionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}";
    if (input.ConfigurationId !== undefined) {
        const labelValue = input.ConfigurationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationId.");
    }
    if (input.ConfigurationRevision !== undefined) {
        const labelValue = input.ConfigurationRevision;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationRevision.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationRevision}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationRevision.");
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
exports.serializeAws_restJson1DescribeConfigurationRevisionCommand = serializeAws_restJson1DescribeConfigurationRevisionCommand;
const serializeAws_restJson1DescribeUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    if (input.Username !== undefined) {
        const labelValue = input.Username;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Username.");
        }
        resolvedPath = resolvedPath.replace("{Username}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Username.");
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
const serializeAws_restJson1ListBrokersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListBrokersCommand = serializeAws_restJson1ListBrokersCommand;
const serializeAws_restJson1ListConfigurationRevisionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/configurations/{ConfigurationId}/revisions";
    if (input.ConfigurationId !== undefined) {
        const labelValue = input.ConfigurationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListConfigurationRevisionsCommand = serializeAws_restJson1ListConfigurationRevisionsCommand;
const serializeAws_restJson1ListConfigurationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/configurations";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListConfigurationsCommand = serializeAws_restJson1ListConfigurationsCommand;
const serializeAws_restJson1ListTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/tags/{ResourceArn}";
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
exports.serializeAws_restJson1ListTagsCommand = serializeAws_restJson1ListTagsCommand;
const serializeAws_restJson1ListUsersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}/users";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
const serializeAws_restJson1RebootBrokerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/brokers/{BrokerId}/reboot";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
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
exports.serializeAws_restJson1RebootBrokerCommand = serializeAws_restJson1RebootBrokerCommand;
const serializeAws_restJson1UpdateBrokerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/brokers/{BrokerId}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AuthenticationStrategy !== undefined &&
            input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
        ...(input.AutoMinorVersionUpgrade !== undefined &&
            input.AutoMinorVersionUpgrade !== null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            configuration: serializeAws_restJson1ConfigurationId(input.Configuration, context),
        }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
        ...(input.HostInstanceType !== undefined &&
            input.HostInstanceType !== null && { hostInstanceType: input.HostInstanceType }),
        ...(input.LdapServerMetadata !== undefined &&
            input.LdapServerMetadata !== null && {
            ldapServerMetadata: serializeAws_restJson1LdapServerMetadataInput(input.LdapServerMetadata, context),
        }),
        ...(input.Logs !== undefined && input.Logs !== null && { logs: serializeAws_restJson1Logs(input.Logs, context) }),
        ...(input.SecurityGroups !== undefined &&
            input.SecurityGroups !== null && {
            securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
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
exports.serializeAws_restJson1UpdateBrokerCommand = serializeAws_restJson1UpdateBrokerCommand;
const serializeAws_restJson1UpdateConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/configurations/{ConfigurationId}";
    if (input.ConfigurationId !== undefined) {
        const labelValue = input.ConfigurationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Data !== undefined && input.Data !== null && { data: input.Data }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
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
exports.serializeAws_restJson1UpdateConfigurationCommand = serializeAws_restJson1UpdateConfigurationCommand;
const serializeAws_restJson1UpdateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
    if (input.BrokerId !== undefined) {
        const labelValue = input.BrokerId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BrokerId.");
        }
        resolvedPath = resolvedPath.replace("{BrokerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BrokerId.");
    }
    if (input.Username !== undefined) {
        const labelValue = input.Username;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Username.");
        }
        resolvedPath = resolvedPath.replace("{Username}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Username.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
        ...(input.Groups !== undefined &&
            input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
        ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
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
exports.serializeAws_restJson1UpdateUserCommand = serializeAws_restJson1UpdateUserCommand;
const deserializeAws_restJson1CreateBrokerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateBrokerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BrokerArn: undefined,
        BrokerId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerArn !== undefined && data.brokerArn !== null) {
        contents.BrokerArn = data.brokerArn;
    }
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBrokerCommand = deserializeAws_restJson1CreateBrokerCommand;
const deserializeAws_restJson1CreateBrokerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.mq#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AuthenticationStrategy: undefined,
        Created: undefined,
        Id: undefined,
        LatestRevision: undefined,
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
        contents.AuthenticationStrategy = data.authenticationStrategy;
    }
    if (data.created !== undefined && data.created !== null) {
        contents.Created = new Date(data.created);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.latestRevision !== undefined && data.latestRevision !== null) {
        contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigurationCommand = deserializeAws_restJson1CreateConfigurationCommand;
const deserializeAws_restJson1CreateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
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
const deserializeAws_restJson1CreateTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTagsCommand = deserializeAws_restJson1CreateTagsCommand;
const deserializeAws_restJson1CreateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
    };
    await collectBody(output.body, context);
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
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBrokerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBrokerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BrokerId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBrokerCommand = deserializeAws_restJson1DeleteBrokerCommand;
const deserializeAws_restJson1DeleteBrokerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTagsCommand = deserializeAws_restJson1DeleteTagsCommand;
const deserializeAws_restJson1DeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeBrokerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBrokerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AuthenticationStrategy: undefined,
        AutoMinorVersionUpgrade: undefined,
        BrokerArn: undefined,
        BrokerId: undefined,
        BrokerInstances: undefined,
        BrokerName: undefined,
        BrokerState: undefined,
        Configurations: undefined,
        Created: undefined,
        DeploymentMode: undefined,
        EncryptionOptions: undefined,
        EngineType: undefined,
        EngineVersion: undefined,
        HostInstanceType: undefined,
        LdapServerMetadata: undefined,
        Logs: undefined,
        MaintenanceWindowStartTime: undefined,
        PendingAuthenticationStrategy: undefined,
        PendingEngineVersion: undefined,
        PendingHostInstanceType: undefined,
        PendingLdapServerMetadata: undefined,
        PendingSecurityGroups: undefined,
        PubliclyAccessible: undefined,
        SecurityGroups: undefined,
        StorageType: undefined,
        SubnetIds: undefined,
        Tags: undefined,
        Users: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
        contents.AuthenticationStrategy = data.authenticationStrategy;
    }
    if (data.autoMinorVersionUpgrade !== undefined && data.autoMinorVersionUpgrade !== null) {
        contents.AutoMinorVersionUpgrade = data.autoMinorVersionUpgrade;
    }
    if (data.brokerArn !== undefined && data.brokerArn !== null) {
        contents.BrokerArn = data.brokerArn;
    }
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    if (data.brokerInstances !== undefined && data.brokerInstances !== null) {
        contents.BrokerInstances = deserializeAws_restJson1__listOfBrokerInstance(data.brokerInstances, context);
    }
    if (data.brokerName !== undefined && data.brokerName !== null) {
        contents.BrokerName = data.brokerName;
    }
    if (data.brokerState !== undefined && data.brokerState !== null) {
        contents.BrokerState = data.brokerState;
    }
    if (data.configurations !== undefined && data.configurations !== null) {
        contents.Configurations = deserializeAws_restJson1Configurations(data.configurations, context);
    }
    if (data.created !== undefined && data.created !== null) {
        contents.Created = new Date(data.created);
    }
    if (data.deploymentMode !== undefined && data.deploymentMode !== null) {
        contents.DeploymentMode = data.deploymentMode;
    }
    if (data.encryptionOptions !== undefined && data.encryptionOptions !== null) {
        contents.EncryptionOptions = deserializeAws_restJson1EncryptionOptions(data.encryptionOptions, context);
    }
    if (data.engineType !== undefined && data.engineType !== null) {
        contents.EngineType = data.engineType;
    }
    if (data.engineVersion !== undefined && data.engineVersion !== null) {
        contents.EngineVersion = data.engineVersion;
    }
    if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
        contents.HostInstanceType = data.hostInstanceType;
    }
    if (data.ldapServerMetadata !== undefined && data.ldapServerMetadata !== null) {
        contents.LdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(data.ldapServerMetadata, context);
    }
    if (data.logs !== undefined && data.logs !== null) {
        contents.Logs = deserializeAws_restJson1LogsSummary(data.logs, context);
    }
    if (data.maintenanceWindowStartTime !== undefined && data.maintenanceWindowStartTime !== null) {
        contents.MaintenanceWindowStartTime = deserializeAws_restJson1WeeklyStartTime(data.maintenanceWindowStartTime, context);
    }
    if (data.pendingAuthenticationStrategy !== undefined && data.pendingAuthenticationStrategy !== null) {
        contents.PendingAuthenticationStrategy = data.pendingAuthenticationStrategy;
    }
    if (data.pendingEngineVersion !== undefined && data.pendingEngineVersion !== null) {
        contents.PendingEngineVersion = data.pendingEngineVersion;
    }
    if (data.pendingHostInstanceType !== undefined && data.pendingHostInstanceType !== null) {
        contents.PendingHostInstanceType = data.pendingHostInstanceType;
    }
    if (data.pendingLdapServerMetadata !== undefined && data.pendingLdapServerMetadata !== null) {
        contents.PendingLdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(data.pendingLdapServerMetadata, context);
    }
    if (data.pendingSecurityGroups !== undefined && data.pendingSecurityGroups !== null) {
        contents.PendingSecurityGroups = deserializeAws_restJson1__listOf__string(data.pendingSecurityGroups, context);
    }
    if (data.publiclyAccessible !== undefined && data.publiclyAccessible !== null) {
        contents.PubliclyAccessible = data.publiclyAccessible;
    }
    if (data.securityGroups !== undefined && data.securityGroups !== null) {
        contents.SecurityGroups = deserializeAws_restJson1__listOf__string(data.securityGroups, context);
    }
    if (data.storageType !== undefined && data.storageType !== null) {
        contents.StorageType = data.storageType;
    }
    if (data.subnetIds !== undefined && data.subnetIds !== null) {
        contents.SubnetIds = deserializeAws_restJson1__listOf__string(data.subnetIds, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.users !== undefined && data.users !== null) {
        contents.Users = deserializeAws_restJson1__listOfUserSummary(data.users, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBrokerCommand = deserializeAws_restJson1DescribeBrokerCommand;
const deserializeAws_restJson1DescribeBrokerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeBrokerEngineTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBrokerEngineTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BrokerEngineTypes: undefined,
        MaxResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerEngineTypes !== undefined && data.brokerEngineTypes !== null) {
        contents.BrokerEngineTypes = deserializeAws_restJson1__listOfBrokerEngineType(data.brokerEngineTypes, context);
    }
    if (data.maxResults !== undefined && data.maxResults !== null) {
        contents.MaxResults = data.maxResults;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBrokerEngineTypesCommand = deserializeAws_restJson1DescribeBrokerEngineTypesCommand;
const deserializeAws_restJson1DescribeBrokerEngineTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
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
const deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBrokerInstanceOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BrokerInstanceOptions: undefined,
        MaxResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerInstanceOptions !== undefined && data.brokerInstanceOptions !== null) {
        contents.BrokerInstanceOptions = deserializeAws_restJson1__listOfBrokerInstanceOption(data.brokerInstanceOptions, context);
    }
    if (data.maxResults !== undefined && data.maxResults !== null) {
        contents.MaxResults = data.maxResults;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand = deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand;
const deserializeAws_restJson1DescribeBrokerInstanceOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
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
const deserializeAws_restJson1DescribeConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AuthenticationStrategy: undefined,
        Created: undefined,
        Description: undefined,
        EngineType: undefined,
        EngineVersion: undefined,
        Id: undefined,
        LatestRevision: undefined,
        Name: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
        contents.AuthenticationStrategy = data.authenticationStrategy;
    }
    if (data.created !== undefined && data.created !== null) {
        contents.Created = new Date(data.created);
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    if (data.engineType !== undefined && data.engineType !== null) {
        contents.EngineType = data.engineType;
    }
    if (data.engineVersion !== undefined && data.engineVersion !== null) {
        contents.EngineVersion = data.engineVersion;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.latestRevision !== undefined && data.latestRevision !== null) {
        contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeConfigurationCommand = deserializeAws_restJson1DescribeConfigurationCommand;
const deserializeAws_restJson1DescribeConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeConfigurationRevisionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeConfigurationRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationId: undefined,
        Created: undefined,
        Data: undefined,
        Description: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configurationId !== undefined && data.configurationId !== null) {
        contents.ConfigurationId = data.configurationId;
    }
    if (data.created !== undefined && data.created !== null) {
        contents.Created = new Date(data.created);
    }
    if (data.data !== undefined && data.data !== null) {
        contents.Data = data.data;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeConfigurationRevisionCommand = deserializeAws_restJson1DescribeConfigurationRevisionCommand;
const deserializeAws_restJson1DescribeConfigurationRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        BrokerId: undefined,
        ConsoleAccess: undefined,
        Groups: undefined,
        Pending: undefined,
        Username: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    if (data.consoleAccess !== undefined && data.consoleAccess !== null) {
        contents.ConsoleAccess = data.consoleAccess;
    }
    if (data.groups !== undefined && data.groups !== null) {
        contents.Groups = deserializeAws_restJson1__listOf__string(data.groups, context);
    }
    if (data.pending !== undefined && data.pending !== null) {
        contents.Pending = deserializeAws_restJson1UserPendingChanges(data.pending, context);
    }
    if (data.username !== undefined && data.username !== null) {
        contents.Username = data.username;
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
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBrokersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBrokersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BrokerSummaries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerSummaries !== undefined && data.brokerSummaries !== null) {
        contents.BrokerSummaries = deserializeAws_restJson1__listOfBrokerSummary(data.brokerSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBrokersCommand = deserializeAws_restJson1ListBrokersCommand;
const deserializeAws_restJson1ListBrokersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
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
const deserializeAws_restJson1ListConfigurationRevisionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConfigurationRevisionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationId: undefined,
        MaxResults: undefined,
        NextToken: undefined,
        Revisions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configurationId !== undefined && data.configurationId !== null) {
        contents.ConfigurationId = data.configurationId;
    }
    if (data.maxResults !== undefined && data.maxResults !== null) {
        contents.MaxResults = data.maxResults;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.revisions !== undefined && data.revisions !== null) {
        contents.Revisions = deserializeAws_restJson1__listOfConfigurationRevision(data.revisions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConfigurationRevisionsCommand = deserializeAws_restJson1ListConfigurationRevisionsCommand;
const deserializeAws_restJson1ListConfigurationRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Configurations: undefined,
        MaxResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configurations !== undefined && data.configurations !== null) {
        contents.Configurations = deserializeAws_restJson1__listOfConfiguration(data.configurations, context);
    }
    if (data.maxResults !== undefined && data.maxResults !== null) {
        contents.MaxResults = data.maxResults;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConfigurationsCommand = deserializeAws_restJson1ListConfigurationsCommand;
const deserializeAws_restJson1ListConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
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
const deserializeAws_restJson1ListTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        BrokerId: undefined,
        MaxResults: undefined,
        NextToken: undefined,
        Users: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    if (data.maxResults !== undefined && data.maxResults !== null) {
        contents.MaxResults = data.maxResults;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.users !== undefined && data.users !== null) {
        contents.Users = deserializeAws_restJson1__listOfUserSummary(data.users, context);
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
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RebootBrokerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RebootBrokerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RebootBrokerCommand = deserializeAws_restJson1RebootBrokerCommand;
const deserializeAws_restJson1RebootBrokerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateBrokerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateBrokerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AuthenticationStrategy: undefined,
        AutoMinorVersionUpgrade: undefined,
        BrokerId: undefined,
        Configuration: undefined,
        EngineVersion: undefined,
        HostInstanceType: undefined,
        LdapServerMetadata: undefined,
        Logs: undefined,
        SecurityGroups: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
        contents.AuthenticationStrategy = data.authenticationStrategy;
    }
    if (data.autoMinorVersionUpgrade !== undefined && data.autoMinorVersionUpgrade !== null) {
        contents.AutoMinorVersionUpgrade = data.autoMinorVersionUpgrade;
    }
    if (data.brokerId !== undefined && data.brokerId !== null) {
        contents.BrokerId = data.brokerId;
    }
    if (data.configuration !== undefined && data.configuration !== null) {
        contents.Configuration = deserializeAws_restJson1ConfigurationId(data.configuration, context);
    }
    if (data.engineVersion !== undefined && data.engineVersion !== null) {
        contents.EngineVersion = data.engineVersion;
    }
    if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
        contents.HostInstanceType = data.hostInstanceType;
    }
    if (data.ldapServerMetadata !== undefined && data.ldapServerMetadata !== null) {
        contents.LdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(data.ldapServerMetadata, context);
    }
    if (data.logs !== undefined && data.logs !== null) {
        contents.Logs = deserializeAws_restJson1Logs(data.logs, context);
    }
    if (data.securityGroups !== undefined && data.securityGroups !== null) {
        contents.SecurityGroups = deserializeAws_restJson1__listOf__string(data.securityGroups, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBrokerCommand = deserializeAws_restJson1UpdateBrokerCommand;
const deserializeAws_restJson1UpdateBrokerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Created: undefined,
        Id: undefined,
        LatestRevision: undefined,
        Name: undefined,
        Warnings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.created !== undefined && data.created !== null) {
        contents.Created = new Date(data.created);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.latestRevision !== undefined && data.latestRevision !== null) {
        contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.warnings !== undefined && data.warnings !== null) {
        contents.Warnings = deserializeAws_restJson1__listOfSanitizationWarning(data.warnings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConfigurationCommand = deserializeAws_restJson1UpdateConfigurationCommand;
const deserializeAws_restJson1UpdateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserCommand = deserializeAws_restJson1UpdateUserCommand;
const deserializeAws_restJson1UpdateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mq#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.mq#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mq#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mq#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mq#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorAttribute: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
        contents.ErrorAttribute = data.errorAttribute;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
const serializeAws_restJson1__listOfUser = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1User(entry, context);
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
const serializeAws_restJson1ConfigurationId = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
        ...(input.Revision !== undefined && input.Revision !== null && { revision: input.Revision }),
    };
};
const serializeAws_restJson1EncryptionOptions = (input, context) => {
    return {
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { kmsKeyId: input.KmsKeyId }),
        ...(input.UseAwsOwnedKey !== undefined &&
            input.UseAwsOwnedKey !== null && { useAwsOwnedKey: input.UseAwsOwnedKey }),
    };
};
const serializeAws_restJson1LdapServerMetadataInput = (input, context) => {
    return {
        ...(input.Hosts !== undefined &&
            input.Hosts !== null && { hosts: serializeAws_restJson1__listOf__string(input.Hosts, context) }),
        ...(input.RoleBase !== undefined && input.RoleBase !== null && { roleBase: input.RoleBase }),
        ...(input.RoleName !== undefined && input.RoleName !== null && { roleName: input.RoleName }),
        ...(input.RoleSearchMatching !== undefined &&
            input.RoleSearchMatching !== null && { roleSearchMatching: input.RoleSearchMatching }),
        ...(input.RoleSearchSubtree !== undefined &&
            input.RoleSearchSubtree !== null && { roleSearchSubtree: input.RoleSearchSubtree }),
        ...(input.ServiceAccountPassword !== undefined &&
            input.ServiceAccountPassword !== null && { serviceAccountPassword: input.ServiceAccountPassword }),
        ...(input.ServiceAccountUsername !== undefined &&
            input.ServiceAccountUsername !== null && { serviceAccountUsername: input.ServiceAccountUsername }),
        ...(input.UserBase !== undefined && input.UserBase !== null && { userBase: input.UserBase }),
        ...(input.UserRoleName !== undefined && input.UserRoleName !== null && { userRoleName: input.UserRoleName }),
        ...(input.UserSearchMatching !== undefined &&
            input.UserSearchMatching !== null && { userSearchMatching: input.UserSearchMatching }),
        ...(input.UserSearchSubtree !== undefined &&
            input.UserSearchSubtree !== null && { userSearchSubtree: input.UserSearchSubtree }),
    };
};
const serializeAws_restJson1Logs = (input, context) => {
    return {
        ...(input.Audit !== undefined && input.Audit !== null && { audit: input.Audit }),
        ...(input.General !== undefined && input.General !== null && { general: input.General }),
    };
};
const serializeAws_restJson1User = (input, context) => {
    return {
        ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
        ...(input.Groups !== undefined &&
            input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
        ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
    };
};
const serializeAws_restJson1WeeklyStartTime = (input, context) => {
    return {
        ...(input.DayOfWeek !== undefined && input.DayOfWeek !== null && { dayOfWeek: input.DayOfWeek }),
        ...(input.TimeOfDay !== undefined && input.TimeOfDay !== null && { timeOfDay: input.TimeOfDay }),
        ...(input.TimeZone !== undefined && input.TimeZone !== null && { timeZone: input.TimeZone }),
    };
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
const deserializeAws_restJson1__listOfAvailabilityZone = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AvailabilityZone(entry, context);
    });
};
const deserializeAws_restJson1__listOfBrokerEngineType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BrokerEngineType(entry, context);
    });
};
const deserializeAws_restJson1__listOfBrokerInstance = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BrokerInstance(entry, context);
    });
};
const deserializeAws_restJson1__listOfBrokerInstanceOption = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BrokerInstanceOption(entry, context);
    });
};
const deserializeAws_restJson1__listOfBrokerSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BrokerSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Configuration(entry, context);
    });
};
const deserializeAws_restJson1__listOfConfigurationId = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConfigurationId(entry, context);
    });
};
const deserializeAws_restJson1__listOfConfigurationRevision = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConfigurationRevision(entry, context);
    });
};
const deserializeAws_restJson1__listOfDeploymentMode = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfEngineVersion = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EngineVersion(entry, context);
    });
};
const deserializeAws_restJson1__listOfSanitizationWarning = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SanitizationWarning(entry, context);
    });
};
const deserializeAws_restJson1__listOfUserSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UserSummary(entry, context);
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
const deserializeAws_restJson1AvailabilityZone = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1BrokerEngineType = (output, context) => {
    return {
        EngineType: output.engineType !== undefined && output.engineType !== null ? output.engineType : undefined,
        EngineVersions: output.engineVersions !== undefined && output.engineVersions !== null
            ? deserializeAws_restJson1__listOfEngineVersion(output.engineVersions, context)
            : undefined,
    };
};
const deserializeAws_restJson1BrokerInstance = (output, context) => {
    return {
        ConsoleURL: output.consoleURL !== undefined && output.consoleURL !== null ? output.consoleURL : undefined,
        Endpoints: output.endpoints !== undefined && output.endpoints !== null
            ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
            : undefined,
        IpAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    };
};
const deserializeAws_restJson1BrokerInstanceOption = (output, context) => {
    return {
        AvailabilityZones: output.availabilityZones !== undefined && output.availabilityZones !== null
            ? deserializeAws_restJson1__listOfAvailabilityZone(output.availabilityZones, context)
            : undefined,
        EngineType: output.engineType !== undefined && output.engineType !== null ? output.engineType : undefined,
        HostInstanceType: output.hostInstanceType !== undefined && output.hostInstanceType !== null ? output.hostInstanceType : undefined,
        StorageType: output.storageType !== undefined && output.storageType !== null ? output.storageType : undefined,
        SupportedDeploymentModes: output.supportedDeploymentModes !== undefined && output.supportedDeploymentModes !== null
            ? deserializeAws_restJson1__listOfDeploymentMode(output.supportedDeploymentModes, context)
            : undefined,
        SupportedEngineVersions: output.supportedEngineVersions !== undefined && output.supportedEngineVersions !== null
            ? deserializeAws_restJson1__listOf__string(output.supportedEngineVersions, context)
            : undefined,
    };
};
const deserializeAws_restJson1BrokerSummary = (output, context) => {
    return {
        BrokerArn: output.brokerArn !== undefined && output.brokerArn !== null ? output.brokerArn : undefined,
        BrokerId: output.brokerId !== undefined && output.brokerId !== null ? output.brokerId : undefined,
        BrokerName: output.brokerName !== undefined && output.brokerName !== null ? output.brokerName : undefined,
        BrokerState: output.brokerState !== undefined && output.brokerState !== null ? output.brokerState : undefined,
        Created: output.created !== undefined && output.created !== null ? new Date(output.created) : undefined,
        DeploymentMode: output.deploymentMode !== undefined && output.deploymentMode !== null ? output.deploymentMode : undefined,
        EngineType: output.engineType !== undefined && output.engineType !== null ? output.engineType : undefined,
        HostInstanceType: output.hostInstanceType !== undefined && output.hostInstanceType !== null ? output.hostInstanceType : undefined,
    };
};
const deserializeAws_restJson1Configuration = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        AuthenticationStrategy: output.authenticationStrategy !== undefined && output.authenticationStrategy !== null
            ? output.authenticationStrategy
            : undefined,
        Created: output.created !== undefined && output.created !== null ? new Date(output.created) : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EngineType: output.engineType !== undefined && output.engineType !== null ? output.engineType : undefined,
        EngineVersion: output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        LatestRevision: output.latestRevision !== undefined && output.latestRevision !== null
            ? deserializeAws_restJson1ConfigurationRevision(output.latestRevision, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConfigurationId = (output, context) => {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
const deserializeAws_restJson1ConfigurationRevision = (output, context) => {
    return {
        Created: output.created !== undefined && output.created !== null ? new Date(output.created) : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
const deserializeAws_restJson1Configurations = (output, context) => {
    return {
        Current: output.current !== undefined && output.current !== null
            ? deserializeAws_restJson1ConfigurationId(output.current, context)
            : undefined,
        History: output.history !== undefined && output.history !== null
            ? deserializeAws_restJson1__listOfConfigurationId(output.history, context)
            : undefined,
        Pending: output.pending !== undefined && output.pending !== null
            ? deserializeAws_restJson1ConfigurationId(output.pending, context)
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionOptions = (output, context) => {
    return {
        KmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        UseAwsOwnedKey: output.useAwsOwnedKey !== undefined && output.useAwsOwnedKey !== null ? output.useAwsOwnedKey : undefined,
    };
};
const deserializeAws_restJson1EngineVersion = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1LdapServerMetadataOutput = (output, context) => {
    return {
        Hosts: output.hosts !== undefined && output.hosts !== null
            ? deserializeAws_restJson1__listOf__string(output.hosts, context)
            : undefined,
        RoleBase: output.roleBase !== undefined && output.roleBase !== null ? output.roleBase : undefined,
        RoleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        RoleSearchMatching: output.roleSearchMatching !== undefined && output.roleSearchMatching !== null
            ? output.roleSearchMatching
            : undefined,
        RoleSearchSubtree: output.roleSearchSubtree !== undefined && output.roleSearchSubtree !== null
            ? output.roleSearchSubtree
            : undefined,
        ServiceAccountUsername: output.serviceAccountUsername !== undefined && output.serviceAccountUsername !== null
            ? output.serviceAccountUsername
            : undefined,
        UserBase: output.userBase !== undefined && output.userBase !== null ? output.userBase : undefined,
        UserRoleName: output.userRoleName !== undefined && output.userRoleName !== null ? output.userRoleName : undefined,
        UserSearchMatching: output.userSearchMatching !== undefined && output.userSearchMatching !== null
            ? output.userSearchMatching
            : undefined,
        UserSearchSubtree: output.userSearchSubtree !== undefined && output.userSearchSubtree !== null
            ? output.userSearchSubtree
            : undefined,
    };
};
const deserializeAws_restJson1Logs = (output, context) => {
    return {
        Audit: output.audit !== undefined && output.audit !== null ? output.audit : undefined,
        General: output.general !== undefined && output.general !== null ? output.general : undefined,
    };
};
const deserializeAws_restJson1LogsSummary = (output, context) => {
    return {
        Audit: output.audit !== undefined && output.audit !== null ? output.audit : undefined,
        AuditLogGroup: output.auditLogGroup !== undefined && output.auditLogGroup !== null ? output.auditLogGroup : undefined,
        General: output.general !== undefined && output.general !== null ? output.general : undefined,
        GeneralLogGroup: output.generalLogGroup !== undefined && output.generalLogGroup !== null ? output.generalLogGroup : undefined,
        Pending: output.pending !== undefined && output.pending !== null
            ? deserializeAws_restJson1PendingLogs(output.pending, context)
            : undefined,
    };
};
const deserializeAws_restJson1PendingLogs = (output, context) => {
    return {
        Audit: output.audit !== undefined && output.audit !== null ? output.audit : undefined,
        General: output.general !== undefined && output.general !== null ? output.general : undefined,
    };
};
const deserializeAws_restJson1SanitizationWarning = (output, context) => {
    return {
        AttributeName: output.attributeName !== undefined && output.attributeName !== null ? output.attributeName : undefined,
        ElementName: output.elementName !== undefined && output.elementName !== null ? output.elementName : undefined,
        Reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_restJson1UserPendingChanges = (output, context) => {
    return {
        ConsoleAccess: output.consoleAccess !== undefined && output.consoleAccess !== null ? output.consoleAccess : undefined,
        Groups: output.groups !== undefined && output.groups !== null
            ? deserializeAws_restJson1__listOf__string(output.groups, context)
            : undefined,
        PendingChange: output.pendingChange !== undefined && output.pendingChange !== null ? output.pendingChange : undefined,
    };
};
const deserializeAws_restJson1UserSummary = (output, context) => {
    return {
        PendingChange: output.pendingChange !== undefined && output.pendingChange !== null ? output.pendingChange : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_restJson1WeeklyStartTime = (output, context) => {
    return {
        DayOfWeek: output.dayOfWeek !== undefined && output.dayOfWeek !== null ? output.dayOfWeek : undefined,
        TimeOfDay: output.timeOfDay !== undefined && output.timeOfDay !== null ? output.timeOfDay : undefined,
        TimeZone: output.timeZone !== undefined && output.timeZone !== null ? output.timeZone : undefined,
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