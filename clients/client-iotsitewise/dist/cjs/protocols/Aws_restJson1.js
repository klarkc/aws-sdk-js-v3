"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateAccessPolicyCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutLoggingOptionsCommand = exports.serializeAws_restJson1PutDefaultEncryptionConfigurationCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListProjectsCommand = exports.serializeAws_restJson1ListProjectAssetsCommand = exports.serializeAws_restJson1ListPortalsCommand = exports.serializeAws_restJson1ListGatewaysCommand = exports.serializeAws_restJson1ListDashboardsCommand = exports.serializeAws_restJson1ListAssociatedAssetsCommand = exports.serializeAws_restJson1ListAssetsCommand = exports.serializeAws_restJson1ListAssetRelationshipsCommand = exports.serializeAws_restJson1ListAssetModelsCommand = exports.serializeAws_restJson1ListAccessPoliciesCommand = exports.serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = exports.serializeAws_restJson1GetAssetPropertyValueHistoryCommand = exports.serializeAws_restJson1GetAssetPropertyValueCommand = exports.serializeAws_restJson1GetAssetPropertyAggregatesCommand = exports.serializeAws_restJson1DisassociateAssetsCommand = exports.serializeAws_restJson1DescribeProjectCommand = exports.serializeAws_restJson1DescribePortalCommand = exports.serializeAws_restJson1DescribeLoggingOptionsCommand = exports.serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = exports.serializeAws_restJson1DescribeGatewayCommand = exports.serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = exports.serializeAws_restJson1DescribeDashboardCommand = exports.serializeAws_restJson1DescribeAssetPropertyCommand = exports.serializeAws_restJson1DescribeAssetModelCommand = exports.serializeAws_restJson1DescribeAssetCommand = exports.serializeAws_restJson1DescribeAccessPolicyCommand = exports.serializeAws_restJson1DeleteProjectCommand = exports.serializeAws_restJson1DeletePortalCommand = exports.serializeAws_restJson1DeleteGatewayCommand = exports.serializeAws_restJson1DeleteDashboardCommand = exports.serializeAws_restJson1DeleteAssetModelCommand = exports.serializeAws_restJson1DeleteAssetCommand = exports.serializeAws_restJson1DeleteAccessPolicyCommand = exports.serializeAws_restJson1CreateProjectCommand = exports.serializeAws_restJson1CreatePortalCommand = exports.serializeAws_restJson1CreateGatewayCommand = exports.serializeAws_restJson1CreateDashboardCommand = exports.serializeAws_restJson1CreateAssetModelCommand = exports.serializeAws_restJson1CreateAssetCommand = exports.serializeAws_restJson1CreateAccessPolicyCommand = exports.serializeAws_restJson1BatchPutAssetPropertyValueCommand = exports.serializeAws_restJson1BatchDisassociateProjectAssetsCommand = exports.serializeAws_restJson1BatchAssociateProjectAssetsCommand = exports.serializeAws_restJson1AssociateAssetsCommand = void 0;
exports.deserializeAws_restJson1ListPortalsCommand = exports.deserializeAws_restJson1ListGatewaysCommand = exports.deserializeAws_restJson1ListDashboardsCommand = exports.deserializeAws_restJson1ListAssociatedAssetsCommand = exports.deserializeAws_restJson1ListAssetsCommand = exports.deserializeAws_restJson1ListAssetRelationshipsCommand = exports.deserializeAws_restJson1ListAssetModelsCommand = exports.deserializeAws_restJson1ListAccessPoliciesCommand = exports.deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = exports.deserializeAws_restJson1GetAssetPropertyValueHistoryCommand = exports.deserializeAws_restJson1GetAssetPropertyValueCommand = exports.deserializeAws_restJson1GetAssetPropertyAggregatesCommand = exports.deserializeAws_restJson1DisassociateAssetsCommand = exports.deserializeAws_restJson1DescribeProjectCommand = exports.deserializeAws_restJson1DescribePortalCommand = exports.deserializeAws_restJson1DescribeLoggingOptionsCommand = exports.deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = exports.deserializeAws_restJson1DescribeGatewayCommand = exports.deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = exports.deserializeAws_restJson1DescribeDashboardCommand = exports.deserializeAws_restJson1DescribeAssetPropertyCommand = exports.deserializeAws_restJson1DescribeAssetModelCommand = exports.deserializeAws_restJson1DescribeAssetCommand = exports.deserializeAws_restJson1DescribeAccessPolicyCommand = exports.deserializeAws_restJson1DeleteProjectCommand = exports.deserializeAws_restJson1DeletePortalCommand = exports.deserializeAws_restJson1DeleteGatewayCommand = exports.deserializeAws_restJson1DeleteDashboardCommand = exports.deserializeAws_restJson1DeleteAssetModelCommand = exports.deserializeAws_restJson1DeleteAssetCommand = exports.deserializeAws_restJson1DeleteAccessPolicyCommand = exports.deserializeAws_restJson1CreateProjectCommand = exports.deserializeAws_restJson1CreatePortalCommand = exports.deserializeAws_restJson1CreateGatewayCommand = exports.deserializeAws_restJson1CreateDashboardCommand = exports.deserializeAws_restJson1CreateAssetModelCommand = exports.deserializeAws_restJson1CreateAssetCommand = exports.deserializeAws_restJson1CreateAccessPolicyCommand = exports.deserializeAws_restJson1BatchPutAssetPropertyValueCommand = exports.deserializeAws_restJson1BatchDisassociateProjectAssetsCommand = exports.deserializeAws_restJson1BatchAssociateProjectAssetsCommand = exports.deserializeAws_restJson1AssociateAssetsCommand = exports.serializeAws_restJson1UpdateProjectCommand = exports.serializeAws_restJson1UpdatePortalCommand = exports.serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = exports.serializeAws_restJson1UpdateGatewayCommand = exports.serializeAws_restJson1UpdateDashboardCommand = exports.serializeAws_restJson1UpdateAssetPropertyCommand = exports.serializeAws_restJson1UpdateAssetModelCommand = exports.serializeAws_restJson1UpdateAssetCommand = void 0;
exports.deserializeAws_restJson1UpdateProjectCommand = exports.deserializeAws_restJson1UpdatePortalCommand = exports.deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = exports.deserializeAws_restJson1UpdateGatewayCommand = exports.deserializeAws_restJson1UpdateDashboardCommand = exports.deserializeAws_restJson1UpdateAssetPropertyCommand = exports.deserializeAws_restJson1UpdateAssetModelCommand = exports.deserializeAws_restJson1UpdateAssetCommand = exports.deserializeAws_restJson1UpdateAccessPolicyCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutLoggingOptionsCommand = exports.deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListProjectsCommand = exports.deserializeAws_restJson1ListProjectAssetsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateAssetsCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets/{assetId}/associate";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.childAssetId !== undefined && input.childAssetId !== null && { childAssetId: input.childAssetId }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1AssociateAssetsCommand = serializeAws_restJson1AssociateAssetsCommand;
const serializeAws_restJson1BatchAssociateProjectAssetsCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{projectId}/assets/associate";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.assetIds !== undefined &&
            input.assetIds !== null && { assetIds: serializeAws_restJson1IDs(input.assetIds, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchAssociateProjectAssetsCommand = serializeAws_restJson1BatchAssociateProjectAssetsCommand;
const serializeAws_restJson1BatchDisassociateProjectAssetsCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{projectId}/assets/disassociate";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.assetIds !== undefined &&
            input.assetIds !== null && { assetIds: serializeAws_restJson1IDs(input.assetIds, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDisassociateProjectAssetsCommand = serializeAws_restJson1BatchDisassociateProjectAssetsCommand;
const serializeAws_restJson1BatchPutAssetPropertyValueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/properties";
    let body;
    body = JSON.stringify({
        ...(input.entries !== undefined &&
            input.entries !== null && {
            entries: serializeAws_restJson1PutAssetPropertyValueEntries(input.entries, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchPutAssetPropertyValueCommand = serializeAws_restJson1BatchPutAssetPropertyValueCommand;
const serializeAws_restJson1CreateAccessPolicyCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/access-policies";
    let body;
    body = JSON.stringify({
        ...(input.accessPolicyIdentity !== undefined &&
            input.accessPolicyIdentity !== null && {
            accessPolicyIdentity: serializeAws_restJson1Identity(input.accessPolicyIdentity, context),
        }),
        ...(input.accessPolicyPermission !== undefined &&
            input.accessPolicyPermission !== null && { accessPolicyPermission: input.accessPolicyPermission }),
        ...(input.accessPolicyResource !== undefined &&
            input.accessPolicyResource !== null && {
            accessPolicyResource: serializeAws_restJson1Resource(input.accessPolicyResource, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateAccessPolicyCommand = serializeAws_restJson1CreateAccessPolicyCommand;
const serializeAws_restJson1CreateAssetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets";
    let body;
    body = JSON.stringify({
        ...(input.assetModelId !== undefined && input.assetModelId !== null && { assetModelId: input.assetModelId }),
        ...(input.assetName !== undefined && input.assetName !== null && { assetName: input.assetName }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateAssetCommand = serializeAws_restJson1CreateAssetCommand;
const serializeAws_restJson1CreateAssetModelCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/asset-models";
    let body;
    body = JSON.stringify({
        ...(input.assetModelCompositeModels !== undefined &&
            input.assetModelCompositeModels !== null && {
            assetModelCompositeModels: serializeAws_restJson1AssetModelCompositeModelDefinitions(input.assetModelCompositeModels, context),
        }),
        ...(input.assetModelDescription !== undefined &&
            input.assetModelDescription !== null && { assetModelDescription: input.assetModelDescription }),
        ...(input.assetModelHierarchies !== undefined &&
            input.assetModelHierarchies !== null && {
            assetModelHierarchies: serializeAws_restJson1AssetModelHierarchyDefinitions(input.assetModelHierarchies, context),
        }),
        ...(input.assetModelName !== undefined &&
            input.assetModelName !== null && { assetModelName: input.assetModelName }),
        ...(input.assetModelProperties !== undefined &&
            input.assetModelProperties !== null && {
            assetModelProperties: serializeAws_restJson1AssetModelPropertyDefinitions(input.assetModelProperties, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateAssetModelCommand = serializeAws_restJson1CreateAssetModelCommand;
const serializeAws_restJson1CreateDashboardCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/dashboards";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.dashboardDefinition !== undefined &&
            input.dashboardDefinition !== null && { dashboardDefinition: input.dashboardDefinition }),
        ...(input.dashboardDescription !== undefined &&
            input.dashboardDescription !== null && { dashboardDescription: input.dashboardDescription }),
        ...(input.dashboardName !== undefined && input.dashboardName !== null && { dashboardName: input.dashboardName }),
        ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDashboardCommand = serializeAws_restJson1CreateDashboardCommand;
const serializeAws_restJson1CreateGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/20200301/gateways";
    let body;
    body = JSON.stringify({
        ...(input.gatewayName !== undefined && input.gatewayName !== null && { gatewayName: input.gatewayName }),
        ...(input.gatewayPlatform !== undefined &&
            input.gatewayPlatform !== null && {
            gatewayPlatform: serializeAws_restJson1GatewayPlatform(input.gatewayPlatform, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateGatewayCommand = serializeAws_restJson1CreateGatewayCommand;
const serializeAws_restJson1CreatePortalCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/portals";
    let body;
    body = JSON.stringify({
        ...(input.alarms !== undefined &&
            input.alarms !== null && { alarms: serializeAws_restJson1Alarms(input.alarms, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.notificationSenderEmail !== undefined &&
            input.notificationSenderEmail !== null && { notificationSenderEmail: input.notificationSenderEmail }),
        ...(input.portalAuthMode !== undefined &&
            input.portalAuthMode !== null && { portalAuthMode: input.portalAuthMode }),
        ...(input.portalContactEmail !== undefined &&
            input.portalContactEmail !== null && { portalContactEmail: input.portalContactEmail }),
        ...(input.portalDescription !== undefined &&
            input.portalDescription !== null && { portalDescription: input.portalDescription }),
        ...(input.portalLogoImageFile !== undefined &&
            input.portalLogoImageFile !== null && {
            portalLogoImageFile: serializeAws_restJson1ImageFile(input.portalLogoImageFile, context),
        }),
        ...(input.portalName !== undefined && input.portalName !== null && { portalName: input.portalName }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePortalCommand = serializeAws_restJson1CreatePortalCommand;
const serializeAws_restJson1CreateProjectCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.portalId !== undefined && input.portalId !== null && { portalId: input.portalId }),
        ...(input.projectDescription !== undefined &&
            input.projectDescription !== null && { projectDescription: input.projectDescription }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateProjectCommand = serializeAws_restJson1CreateProjectCommand;
const serializeAws_restJson1DeleteAccessPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/access-policies/{accessPolicyId}";
    if (input.accessPolicyId !== undefined) {
        const labelValue = input.accessPolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
        }
        resolvedPath = resolvedPath.replace("{accessPolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accessPolicyId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteAccessPolicyCommand = serializeAws_restJson1DeleteAccessPolicyCommand;
const serializeAws_restJson1DeleteAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{assetId}";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteAssetCommand = serializeAws_restJson1DeleteAssetCommand;
const serializeAws_restJson1DeleteAssetModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/asset-models/{assetModelId}";
    if (input.assetModelId !== undefined) {
        const labelValue = input.assetModelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetModelId.");
        }
        resolvedPath = resolvedPath.replace("{assetModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetModelId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteAssetModelCommand = serializeAws_restJson1DeleteAssetModelCommand;
const serializeAws_restJson1DeleteDashboardCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dashboards/{dashboardId}";
    if (input.dashboardId !== undefined) {
        const labelValue = input.dashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dashboardId.");
        }
        resolvedPath = resolvedPath.replace("{dashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dashboardId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteDashboardCommand = serializeAws_restJson1DeleteDashboardCommand;
const serializeAws_restJson1DeleteGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/20200301/gateways/{gatewayId}";
    if (input.gatewayId !== undefined) {
        const labelValue = input.gatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: gatewayId.");
        }
        resolvedPath = resolvedPath.replace("{gatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: gatewayId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGatewayCommand = serializeAws_restJson1DeleteGatewayCommand;
const serializeAws_restJson1DeletePortalCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/portals/{portalId}";
    if (input.portalId !== undefined) {
        const labelValue = input.portalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: portalId.");
        }
        resolvedPath = resolvedPath.replace("{portalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: portalId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeletePortalCommand = serializeAws_restJson1DeletePortalCommand;
const serializeAws_restJson1DeleteProjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects/{projectId}";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteProjectCommand = serializeAws_restJson1DeleteProjectCommand;
const serializeAws_restJson1DescribeAccessPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/access-policies/{accessPolicyId}";
    if (input.accessPolicyId !== undefined) {
        const labelValue = input.accessPolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
        }
        resolvedPath = resolvedPath.replace("{accessPolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accessPolicyId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAccessPolicyCommand = serializeAws_restJson1DescribeAccessPolicyCommand;
const serializeAws_restJson1DescribeAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{assetId}";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAssetCommand = serializeAws_restJson1DescribeAssetCommand;
const serializeAws_restJson1DescribeAssetModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/asset-models/{assetModelId}";
    if (input.assetModelId !== undefined) {
        const labelValue = input.assetModelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetModelId.");
        }
        resolvedPath = resolvedPath.replace("{assetModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetModelId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAssetModelCommand = serializeAws_restJson1DescribeAssetModelCommand;
const serializeAws_restJson1DescribeAssetPropertyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{assetId}/properties/{propertyId}";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    if (input.propertyId !== undefined) {
        const labelValue = input.propertyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: propertyId.");
        }
        resolvedPath = resolvedPath.replace("{propertyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: propertyId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAssetPropertyCommand = serializeAws_restJson1DescribeAssetPropertyCommand;
const serializeAws_restJson1DescribeDashboardCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dashboards/{dashboardId}";
    if (input.dashboardId !== undefined) {
        const labelValue = input.dashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dashboardId.");
        }
        resolvedPath = resolvedPath.replace("{dashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dashboardId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDashboardCommand = serializeAws_restJson1DescribeDashboardCommand;
const serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/configuration/account/encryption";
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
exports.serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand;
const serializeAws_restJson1DescribeGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/20200301/gateways/{gatewayId}";
    if (input.gatewayId !== undefined) {
        const labelValue = input.gatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: gatewayId.");
        }
        resolvedPath = resolvedPath.replace("{gatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: gatewayId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeGatewayCommand = serializeAws_restJson1DescribeGatewayCommand;
const serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}";
    if (input.gatewayId !== undefined) {
        const labelValue = input.gatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: gatewayId.");
        }
        resolvedPath = resolvedPath.replace("{gatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: gatewayId.");
    }
    if (input.capabilityNamespace !== undefined) {
        const labelValue = input.capabilityNamespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: capabilityNamespace.");
        }
        resolvedPath = resolvedPath.replace("{capabilityNamespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: capabilityNamespace.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand;
const serializeAws_restJson1DescribeLoggingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/logging";
    let body;
    body = "";
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeLoggingOptionsCommand = serializeAws_restJson1DescribeLoggingOptionsCommand;
const serializeAws_restJson1DescribePortalCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/portals/{portalId}";
    if (input.portalId !== undefined) {
        const labelValue = input.portalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: portalId.");
        }
        resolvedPath = resolvedPath.replace("{portalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: portalId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribePortalCommand = serializeAws_restJson1DescribePortalCommand;
const serializeAws_restJson1DescribeProjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects/{projectId}";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeProjectCommand = serializeAws_restJson1DescribeProjectCommand;
const serializeAws_restJson1DisassociateAssetsCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets/{assetId}/disassociate";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.childAssetId !== undefined && input.childAssetId !== null && { childAssetId: input.childAssetId }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DisassociateAssetsCommand = serializeAws_restJson1DisassociateAssetsCommand;
const serializeAws_restJson1GetAssetPropertyAggregatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/properties/aggregates";
    const query = {
        ...(input.assetId !== undefined && { assetId: input.assetId }),
        ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
        ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
        ...(input.aggregateTypes !== undefined && { aggregateTypes: (input.aggregateTypes || []).map((_entry) => _entry) }),
        ...(input.resolution !== undefined && { resolution: input.resolution }),
        ...(input.qualities !== undefined && { qualities: (input.qualities || []).map((_entry) => _entry) }),
        ...(input.startDate !== undefined && { startDate: (input.startDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endDate !== undefined && { endDate: (input.endDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.timeOrdering !== undefined && { timeOrdering: input.timeOrdering }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetAssetPropertyAggregatesCommand = serializeAws_restJson1GetAssetPropertyAggregatesCommand;
const serializeAws_restJson1GetAssetPropertyValueCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/properties/latest";
    const query = {
        ...(input.assetId !== undefined && { assetId: input.assetId }),
        ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
        ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetAssetPropertyValueCommand = serializeAws_restJson1GetAssetPropertyValueCommand;
const serializeAws_restJson1GetAssetPropertyValueHistoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/properties/history";
    const query = {
        ...(input.assetId !== undefined && { assetId: input.assetId }),
        ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
        ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
        ...(input.startDate !== undefined && { startDate: (input.startDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endDate !== undefined && { endDate: (input.endDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.qualities !== undefined && { qualities: (input.qualities || []).map((_entry) => _entry) }),
        ...(input.timeOrdering !== undefined && { timeOrdering: input.timeOrdering }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetAssetPropertyValueHistoryCommand = serializeAws_restJson1GetAssetPropertyValueHistoryCommand;
const serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/properties/interpolated";
    const query = {
        ...(input.assetId !== undefined && { assetId: input.assetId }),
        ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
        ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
        ...(input.startTimeInSeconds !== undefined && { startTimeInSeconds: input.startTimeInSeconds.toString() }),
        ...(input.startTimeOffsetInNanos !== undefined && {
            startTimeOffsetInNanos: input.startTimeOffsetInNanos.toString(),
        }),
        ...(input.endTimeInSeconds !== undefined && { endTimeInSeconds: input.endTimeInSeconds.toString() }),
        ...(input.endTimeOffsetInNanos !== undefined && { endTimeOffsetInNanos: input.endTimeOffsetInNanos.toString() }),
        ...(input.quality !== undefined && { quality: input.quality }),
        ...(input.intervalInSeconds !== undefined && { intervalInSeconds: input.intervalInSeconds.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.type !== undefined && { type: input.type }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand;
const serializeAws_restJson1ListAccessPoliciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/access-policies";
    const query = {
        ...(input.identityType !== undefined && { identityType: input.identityType }),
        ...(input.identityId !== undefined && { identityId: input.identityId }),
        ...(input.resourceType !== undefined && { resourceType: input.resourceType }),
        ...(input.resourceId !== undefined && { resourceId: input.resourceId }),
        ...(input.iamArn !== undefined && { iamArn: input.iamArn }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccessPoliciesCommand = serializeAws_restJson1ListAccessPoliciesCommand;
const serializeAws_restJson1ListAssetModelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/asset-models";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAssetModelsCommand = serializeAws_restJson1ListAssetModelsCommand;
const serializeAws_restJson1ListAssetRelationshipsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{assetId}/assetRelationships";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    const query = {
        ...(input.traversalType !== undefined && { traversalType: input.traversalType }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAssetRelationshipsCommand = serializeAws_restJson1ListAssetRelationshipsCommand;
const serializeAws_restJson1ListAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.assetModelId !== undefined && { assetModelId: input.assetModelId }),
        ...(input.filter !== undefined && { filter: input.filter }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAssetsCommand = serializeAws_restJson1ListAssetsCommand;
const serializeAws_restJson1ListAssociatedAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{assetId}/hierarchies";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    const query = {
        ...(input.hierarchyId !== undefined && { hierarchyId: input.hierarchyId }),
        ...(input.traversalDirection !== undefined && { traversalDirection: input.traversalDirection }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAssociatedAssetsCommand = serializeAws_restJson1ListAssociatedAssetsCommand;
const serializeAws_restJson1ListDashboardsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dashboards";
    const query = {
        ...(input.projectId !== undefined && { projectId: input.projectId }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDashboardsCommand = serializeAws_restJson1ListDashboardsCommand;
const serializeAws_restJson1ListGatewaysCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/20200301/gateways";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListGatewaysCommand = serializeAws_restJson1ListGatewaysCommand;
const serializeAws_restJson1ListPortalsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/portals";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPortalsCommand = serializeAws_restJson1ListPortalsCommand;
const serializeAws_restJson1ListProjectAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects/{projectId}/assets";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListProjectAssetsCommand = serializeAws_restJson1ListProjectAssetsCommand;
const serializeAws_restJson1ListProjectsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/projects";
    const query = {
        ...(input.portalId !== undefined && { portalId: input.portalId }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListProjectsCommand = serializeAws_restJson1ListProjectsCommand;
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
const serializeAws_restJson1PutDefaultEncryptionConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/configuration/account/encryption";
    let body;
    body = JSON.stringify({
        ...(input.encryptionType !== undefined &&
            input.encryptionType !== null && { encryptionType: input.encryptionType }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
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
exports.serializeAws_restJson1PutDefaultEncryptionConfigurationCommand = serializeAws_restJson1PutDefaultEncryptionConfigurationCommand;
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
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutLoggingOptionsCommand = serializeAws_restJson1PutLoggingOptionsCommand;
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
const serializeAws_restJson1UpdateAccessPolicyCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/access-policies/{accessPolicyId}";
    if (input.accessPolicyId !== undefined) {
        const labelValue = input.accessPolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
        }
        resolvedPath = resolvedPath.replace("{accessPolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accessPolicyId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.accessPolicyIdentity !== undefined &&
            input.accessPolicyIdentity !== null && {
            accessPolicyIdentity: serializeAws_restJson1Identity(input.accessPolicyIdentity, context),
        }),
        ...(input.accessPolicyPermission !== undefined &&
            input.accessPolicyPermission !== null && { accessPolicyPermission: input.accessPolicyPermission }),
        ...(input.accessPolicyResource !== undefined &&
            input.accessPolicyResource !== null && {
            accessPolicyResource: serializeAws_restJson1Resource(input.accessPolicyResource, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAccessPolicyCommand = serializeAws_restJson1UpdateAccessPolicyCommand;
const serializeAws_restJson1UpdateAssetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets/{assetId}";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.assetName !== undefined && input.assetName !== null && { assetName: input.assetName }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAssetCommand = serializeAws_restJson1UpdateAssetCommand;
const serializeAws_restJson1UpdateAssetModelCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/asset-models/{assetModelId}";
    if (input.assetModelId !== undefined) {
        const labelValue = input.assetModelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetModelId.");
        }
        resolvedPath = resolvedPath.replace("{assetModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetModelId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.assetModelCompositeModels !== undefined &&
            input.assetModelCompositeModels !== null && {
            assetModelCompositeModels: serializeAws_restJson1AssetModelCompositeModels(input.assetModelCompositeModels, context),
        }),
        ...(input.assetModelDescription !== undefined &&
            input.assetModelDescription !== null && { assetModelDescription: input.assetModelDescription }),
        ...(input.assetModelHierarchies !== undefined &&
            input.assetModelHierarchies !== null && {
            assetModelHierarchies: serializeAws_restJson1AssetModelHierarchies(input.assetModelHierarchies, context),
        }),
        ...(input.assetModelName !== undefined &&
            input.assetModelName !== null && { assetModelName: input.assetModelName }),
        ...(input.assetModelProperties !== undefined &&
            input.assetModelProperties !== null && {
            assetModelProperties: serializeAws_restJson1AssetModelProperties(input.assetModelProperties, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAssetModelCommand = serializeAws_restJson1UpdateAssetModelCommand;
const serializeAws_restJson1UpdateAssetPropertyCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets/{assetId}/properties/{propertyId}";
    if (input.assetId !== undefined) {
        const labelValue = input.assetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: assetId.");
        }
        resolvedPath = resolvedPath.replace("{assetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: assetId.");
    }
    if (input.propertyId !== undefined) {
        const labelValue = input.propertyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: propertyId.");
        }
        resolvedPath = resolvedPath.replace("{propertyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: propertyId.");
    }
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
        ...(input.propertyNotificationState !== undefined &&
            input.propertyNotificationState !== null && { propertyNotificationState: input.propertyNotificationState }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "model." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAssetPropertyCommand = serializeAws_restJson1UpdateAssetPropertyCommand;
const serializeAws_restJson1UpdateDashboardCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/dashboards/{dashboardId}";
    if (input.dashboardId !== undefined) {
        const labelValue = input.dashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dashboardId.");
        }
        resolvedPath = resolvedPath.replace("{dashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dashboardId.");
    }
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.dashboardDefinition !== undefined &&
            input.dashboardDefinition !== null && { dashboardDefinition: input.dashboardDefinition }),
        ...(input.dashboardDescription !== undefined &&
            input.dashboardDescription !== null && { dashboardDescription: input.dashboardDescription }),
        ...(input.dashboardName !== undefined && input.dashboardName !== null && { dashboardName: input.dashboardName }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDashboardCommand = serializeAws_restJson1UpdateDashboardCommand;
const serializeAws_restJson1UpdateGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/20200301/gateways/{gatewayId}";
    if (input.gatewayId !== undefined) {
        const labelValue = input.gatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: gatewayId.");
        }
        resolvedPath = resolvedPath.replace("{gatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: gatewayId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.gatewayName !== undefined && input.gatewayName !== null && { gatewayName: input.gatewayName }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGatewayCommand = serializeAws_restJson1UpdateGatewayCommand;
const serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/20200301/gateways/{gatewayId}/capability";
    if (input.gatewayId !== undefined) {
        const labelValue = input.gatewayId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: gatewayId.");
        }
        resolvedPath = resolvedPath.replace("{gatewayId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: gatewayId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.capabilityConfiguration !== undefined &&
            input.capabilityConfiguration !== null && { capabilityConfiguration: input.capabilityConfiguration }),
        ...(input.capabilityNamespace !== undefined &&
            input.capabilityNamespace !== null && { capabilityNamespace: input.capabilityNamespace }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "edge." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand;
const serializeAws_restJson1UpdatePortalCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/portals/{portalId}";
    if (input.portalId !== undefined) {
        const labelValue = input.portalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: portalId.");
        }
        resolvedPath = resolvedPath.replace("{portalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: portalId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.alarms !== undefined &&
            input.alarms !== null && { alarms: serializeAws_restJson1Alarms(input.alarms, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.notificationSenderEmail !== undefined &&
            input.notificationSenderEmail !== null && { notificationSenderEmail: input.notificationSenderEmail }),
        ...(input.portalContactEmail !== undefined &&
            input.portalContactEmail !== null && { portalContactEmail: input.portalContactEmail }),
        ...(input.portalDescription !== undefined &&
            input.portalDescription !== null && { portalDescription: input.portalDescription }),
        ...(input.portalLogoImage !== undefined &&
            input.portalLogoImage !== null && {
            portalLogoImage: serializeAws_restJson1Image(input.portalLogoImage, context),
        }),
        ...(input.portalName !== undefined && input.portalName !== null && { portalName: input.portalName }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdatePortalCommand = serializeAws_restJson1UpdatePortalCommand;
const serializeAws_restJson1UpdateProjectCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/projects/{projectId}";
    if (input.projectId !== undefined) {
        const labelValue = input.projectId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: projectId.");
        }
        resolvedPath = resolvedPath.replace("{projectId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: projectId.");
    }
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.projectDescription !== undefined &&
            input.projectDescription !== null && { projectDescription: input.projectDescription }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "monitor." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateProjectCommand = serializeAws_restJson1UpdateProjectCommand;
const deserializeAws_restJson1AssociateAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateAssetsCommand = deserializeAws_restJson1AssociateAssetsCommand;
const deserializeAws_restJson1AssociateAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1BatchAssociateProjectAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchAssociateProjectAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errors !== undefined && data.errors !== null) {
        contents.errors = deserializeAws_restJson1BatchAssociateProjectAssetsErrors(data.errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchAssociateProjectAssetsCommand = deserializeAws_restJson1BatchAssociateProjectAssetsCommand;
const deserializeAws_restJson1BatchAssociateProjectAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1BatchDisassociateProjectAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDisassociateProjectAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errors: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errors !== undefined && data.errors !== null) {
        contents.errors = deserializeAws_restJson1BatchDisassociateProjectAssetsErrors(data.errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDisassociateProjectAssetsCommand = deserializeAws_restJson1BatchDisassociateProjectAssetsCommand;
const deserializeAws_restJson1BatchDisassociateProjectAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1BatchPutAssetPropertyValueCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchPutAssetPropertyValueCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchPutAssetPropertyErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchPutAssetPropertyValueCommand = deserializeAws_restJson1BatchPutAssetPropertyValueCommand;
const deserializeAws_restJson1BatchPutAssetPropertyValueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotsitewise#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        accessPolicyArn: undefined,
        accessPolicyId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.accessPolicyArn !== undefined && data.accessPolicyArn !== null) {
        contents.accessPolicyArn = data.accessPolicyArn;
    }
    if (data.accessPolicyId !== undefined && data.accessPolicyId !== null) {
        contents.accessPolicyId = data.accessPolicyId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAccessPolicyCommand = deserializeAws_restJson1CreateAccessPolicyCommand;
const deserializeAws_restJson1CreateAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateAssetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetArn: undefined,
        assetId: undefined,
        assetStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetArn !== undefined && data.assetArn !== null) {
        contents.assetArn = data.assetArn;
    }
    if (data.assetId !== undefined && data.assetId !== null) {
        contents.assetId = data.assetId;
    }
    if (data.assetStatus !== undefined && data.assetStatus !== null) {
        contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssetCommand = deserializeAws_restJson1CreateAssetCommand;
const deserializeAws_restJson1CreateAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateAssetModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAssetModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetModelArn: undefined,
        assetModelId: undefined,
        assetModelStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetModelArn !== undefined && data.assetModelArn !== null) {
        contents.assetModelArn = data.assetModelArn;
    }
    if (data.assetModelId !== undefined && data.assetModelId !== null) {
        contents.assetModelId = data.assetModelId;
    }
    if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
        contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssetModelCommand = deserializeAws_restJson1CreateAssetModelCommand;
const deserializeAws_restJson1CreateAssetModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateDashboardCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dashboardArn: undefined,
        dashboardId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dashboardArn !== undefined && data.dashboardArn !== null) {
        contents.dashboardArn = data.dashboardArn;
    }
    if (data.dashboardId !== undefined && data.dashboardId !== null) {
        contents.dashboardId = data.dashboardId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDashboardCommand = deserializeAws_restJson1CreateDashboardCommand;
const deserializeAws_restJson1CreateDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateGatewayCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        gatewayArn: undefined,
        gatewayId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.gatewayArn !== undefined && data.gatewayArn !== null) {
        contents.gatewayArn = data.gatewayArn;
    }
    if (data.gatewayId !== undefined && data.gatewayId !== null) {
        contents.gatewayId = data.gatewayId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGatewayCommand = deserializeAws_restJson1CreateGatewayCommand;
const deserializeAws_restJson1CreateGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreatePortalCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePortalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        portalArn: undefined,
        portalId: undefined,
        portalStartUrl: undefined,
        portalStatus: undefined,
        ssoApplicationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.portalArn !== undefined && data.portalArn !== null) {
        contents.portalArn = data.portalArn;
    }
    if (data.portalId !== undefined && data.portalId !== null) {
        contents.portalId = data.portalId;
    }
    if (data.portalStartUrl !== undefined && data.portalStartUrl !== null) {
        contents.portalStartUrl = data.portalStartUrl;
    }
    if (data.portalStatus !== undefined && data.portalStatus !== null) {
        contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
    }
    if (data.ssoApplicationId !== undefined && data.ssoApplicationId !== null) {
        contents.ssoApplicationId = data.ssoApplicationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePortalCommand = deserializeAws_restJson1CreatePortalCommand;
const deserializeAws_restJson1CreatePortalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1CreateProjectCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        projectArn: undefined,
        projectId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.projectArn !== undefined && data.projectArn !== null) {
        contents.projectArn = data.projectArn;
    }
    if (data.projectId !== undefined && data.projectId !== null) {
        contents.projectId = data.projectId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProjectCommand = deserializeAws_restJson1CreateProjectCommand;
const deserializeAws_restJson1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAccessPolicyCommand = deserializeAws_restJson1DeleteAccessPolicyCommand;
const deserializeAws_restJson1DeleteAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteAssetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetStatus !== undefined && data.assetStatus !== null) {
        contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssetCommand = deserializeAws_restJson1DeleteAssetCommand;
const deserializeAws_restJson1DeleteAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteAssetModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAssetModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetModelStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
        contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssetModelCommand = deserializeAws_restJson1DeleteAssetModelCommand;
const deserializeAws_restJson1DeleteAssetModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteDashboardCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDashboardCommand = deserializeAws_restJson1DeleteDashboardCommand;
const deserializeAws_restJson1DeleteDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGatewayCommand = deserializeAws_restJson1DeleteGatewayCommand;
const deserializeAws_restJson1DeleteGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeletePortalCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePortalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        portalStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.portalStatus !== undefined && data.portalStatus !== null) {
        contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePortalCommand = deserializeAws_restJson1DeletePortalCommand;
const deserializeAws_restJson1DeletePortalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProjectCommand = deserializeAws_restJson1DeleteProjectCommand;
const deserializeAws_restJson1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        accessPolicyArn: undefined,
        accessPolicyCreationDate: undefined,
        accessPolicyId: undefined,
        accessPolicyIdentity: undefined,
        accessPolicyLastUpdateDate: undefined,
        accessPolicyPermission: undefined,
        accessPolicyResource: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.accessPolicyArn !== undefined && data.accessPolicyArn !== null) {
        contents.accessPolicyArn = data.accessPolicyArn;
    }
    if (data.accessPolicyCreationDate !== undefined && data.accessPolicyCreationDate !== null) {
        contents.accessPolicyCreationDate = new Date(Math.round(data.accessPolicyCreationDate * 1000));
    }
    if (data.accessPolicyId !== undefined && data.accessPolicyId !== null) {
        contents.accessPolicyId = data.accessPolicyId;
    }
    if (data.accessPolicyIdentity !== undefined && data.accessPolicyIdentity !== null) {
        contents.accessPolicyIdentity = deserializeAws_restJson1Identity(data.accessPolicyIdentity, context);
    }
    if (data.accessPolicyLastUpdateDate !== undefined && data.accessPolicyLastUpdateDate !== null) {
        contents.accessPolicyLastUpdateDate = new Date(Math.round(data.accessPolicyLastUpdateDate * 1000));
    }
    if (data.accessPolicyPermission !== undefined && data.accessPolicyPermission !== null) {
        contents.accessPolicyPermission = data.accessPolicyPermission;
    }
    if (data.accessPolicyResource !== undefined && data.accessPolicyResource !== null) {
        contents.accessPolicyResource = deserializeAws_restJson1Resource(data.accessPolicyResource, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccessPolicyCommand = deserializeAws_restJson1DescribeAccessPolicyCommand;
const deserializeAws_restJson1DescribeAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetArn: undefined,
        assetCompositeModels: undefined,
        assetCreationDate: undefined,
        assetHierarchies: undefined,
        assetId: undefined,
        assetLastUpdateDate: undefined,
        assetModelId: undefined,
        assetName: undefined,
        assetProperties: undefined,
        assetStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetArn !== undefined && data.assetArn !== null) {
        contents.assetArn = data.assetArn;
    }
    if (data.assetCompositeModels !== undefined && data.assetCompositeModels !== null) {
        contents.assetCompositeModels = deserializeAws_restJson1AssetCompositeModels(data.assetCompositeModels, context);
    }
    if (data.assetCreationDate !== undefined && data.assetCreationDate !== null) {
        contents.assetCreationDate = new Date(Math.round(data.assetCreationDate * 1000));
    }
    if (data.assetHierarchies !== undefined && data.assetHierarchies !== null) {
        contents.assetHierarchies = deserializeAws_restJson1AssetHierarchies(data.assetHierarchies, context);
    }
    if (data.assetId !== undefined && data.assetId !== null) {
        contents.assetId = data.assetId;
    }
    if (data.assetLastUpdateDate !== undefined && data.assetLastUpdateDate !== null) {
        contents.assetLastUpdateDate = new Date(Math.round(data.assetLastUpdateDate * 1000));
    }
    if (data.assetModelId !== undefined && data.assetModelId !== null) {
        contents.assetModelId = data.assetModelId;
    }
    if (data.assetName !== undefined && data.assetName !== null) {
        contents.assetName = data.assetName;
    }
    if (data.assetProperties !== undefined && data.assetProperties !== null) {
        contents.assetProperties = deserializeAws_restJson1AssetProperties(data.assetProperties, context);
    }
    if (data.assetStatus !== undefined && data.assetStatus !== null) {
        contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAssetCommand = deserializeAws_restJson1DescribeAssetCommand;
const deserializeAws_restJson1DescribeAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeAssetModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAssetModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetModelArn: undefined,
        assetModelCompositeModels: undefined,
        assetModelCreationDate: undefined,
        assetModelDescription: undefined,
        assetModelHierarchies: undefined,
        assetModelId: undefined,
        assetModelLastUpdateDate: undefined,
        assetModelName: undefined,
        assetModelProperties: undefined,
        assetModelStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetModelArn !== undefined && data.assetModelArn !== null) {
        contents.assetModelArn = data.assetModelArn;
    }
    if (data.assetModelCompositeModels !== undefined && data.assetModelCompositeModels !== null) {
        contents.assetModelCompositeModels = deserializeAws_restJson1AssetModelCompositeModels(data.assetModelCompositeModels, context);
    }
    if (data.assetModelCreationDate !== undefined && data.assetModelCreationDate !== null) {
        contents.assetModelCreationDate = new Date(Math.round(data.assetModelCreationDate * 1000));
    }
    if (data.assetModelDescription !== undefined && data.assetModelDescription !== null) {
        contents.assetModelDescription = data.assetModelDescription;
    }
    if (data.assetModelHierarchies !== undefined && data.assetModelHierarchies !== null) {
        contents.assetModelHierarchies = deserializeAws_restJson1AssetModelHierarchies(data.assetModelHierarchies, context);
    }
    if (data.assetModelId !== undefined && data.assetModelId !== null) {
        contents.assetModelId = data.assetModelId;
    }
    if (data.assetModelLastUpdateDate !== undefined && data.assetModelLastUpdateDate !== null) {
        contents.assetModelLastUpdateDate = new Date(Math.round(data.assetModelLastUpdateDate * 1000));
    }
    if (data.assetModelName !== undefined && data.assetModelName !== null) {
        contents.assetModelName = data.assetModelName;
    }
    if (data.assetModelProperties !== undefined && data.assetModelProperties !== null) {
        contents.assetModelProperties = deserializeAws_restJson1AssetModelProperties(data.assetModelProperties, context);
    }
    if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
        contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAssetModelCommand = deserializeAws_restJson1DescribeAssetModelCommand;
const deserializeAws_restJson1DescribeAssetModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeAssetPropertyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAssetPropertyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetId: undefined,
        assetModelId: undefined,
        assetName: undefined,
        assetProperty: undefined,
        compositeModel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetId !== undefined && data.assetId !== null) {
        contents.assetId = data.assetId;
    }
    if (data.assetModelId !== undefined && data.assetModelId !== null) {
        contents.assetModelId = data.assetModelId;
    }
    if (data.assetName !== undefined && data.assetName !== null) {
        contents.assetName = data.assetName;
    }
    if (data.assetProperty !== undefined && data.assetProperty !== null) {
        contents.assetProperty = deserializeAws_restJson1Property(data.assetProperty, context);
    }
    if (data.compositeModel !== undefined && data.compositeModel !== null) {
        contents.compositeModel = deserializeAws_restJson1CompositeModelProperty(data.compositeModel, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAssetPropertyCommand = deserializeAws_restJson1DescribeAssetPropertyCommand;
const deserializeAws_restJson1DescribeAssetPropertyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dashboardArn: undefined,
        dashboardCreationDate: undefined,
        dashboardDefinition: undefined,
        dashboardDescription: undefined,
        dashboardId: undefined,
        dashboardLastUpdateDate: undefined,
        dashboardName: undefined,
        projectId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dashboardArn !== undefined && data.dashboardArn !== null) {
        contents.dashboardArn = data.dashboardArn;
    }
    if (data.dashboardCreationDate !== undefined && data.dashboardCreationDate !== null) {
        contents.dashboardCreationDate = new Date(Math.round(data.dashboardCreationDate * 1000));
    }
    if (data.dashboardDefinition !== undefined && data.dashboardDefinition !== null) {
        contents.dashboardDefinition = data.dashboardDefinition;
    }
    if (data.dashboardDescription !== undefined && data.dashboardDescription !== null) {
        contents.dashboardDescription = data.dashboardDescription;
    }
    if (data.dashboardId !== undefined && data.dashboardId !== null) {
        contents.dashboardId = data.dashboardId;
    }
    if (data.dashboardLastUpdateDate !== undefined && data.dashboardLastUpdateDate !== null) {
        contents.dashboardLastUpdateDate = new Date(Math.round(data.dashboardLastUpdateDate * 1000));
    }
    if (data.dashboardName !== undefined && data.dashboardName !== null) {
        contents.dashboardName = data.dashboardName;
    }
    if (data.projectId !== undefined && data.projectId !== null) {
        contents.projectId = data.projectId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDashboardCommand = deserializeAws_restJson1DescribeDashboardCommand;
const deserializeAws_restJson1DescribeDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configurationStatus: undefined,
        encryptionType: undefined,
        kmsKeyArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
        contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
    }
    if (data.encryptionType !== undefined && data.encryptionType !== null) {
        contents.encryptionType = data.encryptionType;
    }
    if (data.kmsKeyArn !== undefined && data.kmsKeyArn !== null) {
        contents.kmsKeyArn = data.kmsKeyArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand;
const deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        creationDate: undefined,
        gatewayArn: undefined,
        gatewayCapabilitySummaries: undefined,
        gatewayId: undefined,
        gatewayName: undefined,
        gatewayPlatform: undefined,
        lastUpdateDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.creationDate !== undefined && data.creationDate !== null) {
        contents.creationDate = new Date(Math.round(data.creationDate * 1000));
    }
    if (data.gatewayArn !== undefined && data.gatewayArn !== null) {
        contents.gatewayArn = data.gatewayArn;
    }
    if (data.gatewayCapabilitySummaries !== undefined && data.gatewayCapabilitySummaries !== null) {
        contents.gatewayCapabilitySummaries = deserializeAws_restJson1GatewayCapabilitySummaries(data.gatewayCapabilitySummaries, context);
    }
    if (data.gatewayId !== undefined && data.gatewayId !== null) {
        contents.gatewayId = data.gatewayId;
    }
    if (data.gatewayName !== undefined && data.gatewayName !== null) {
        contents.gatewayName = data.gatewayName;
    }
    if (data.gatewayPlatform !== undefined && data.gatewayPlatform !== null) {
        contents.gatewayPlatform = deserializeAws_restJson1GatewayPlatform(data.gatewayPlatform, context);
    }
    if (data.lastUpdateDate !== undefined && data.lastUpdateDate !== null) {
        contents.lastUpdateDate = new Date(Math.round(data.lastUpdateDate * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGatewayCommand = deserializeAws_restJson1DescribeGatewayCommand;
const deserializeAws_restJson1DescribeGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        capabilityConfiguration: undefined,
        capabilityNamespace: undefined,
        capabilitySyncStatus: undefined,
        gatewayId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.capabilityConfiguration !== undefined && data.capabilityConfiguration !== null) {
        contents.capabilityConfiguration = data.capabilityConfiguration;
    }
    if (data.capabilityNamespace !== undefined && data.capabilityNamespace !== null) {
        contents.capabilityNamespace = data.capabilityNamespace;
    }
    if (data.capabilitySyncStatus !== undefined && data.capabilitySyncStatus !== null) {
        contents.capabilitySyncStatus = data.capabilitySyncStatus;
    }
    if (data.gatewayId !== undefined && data.gatewayId !== null) {
        contents.gatewayId = data.gatewayId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand;
const deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribePortalCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePortalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarms: undefined,
        notificationSenderEmail: undefined,
        portalArn: undefined,
        portalAuthMode: undefined,
        portalClientId: undefined,
        portalContactEmail: undefined,
        portalCreationDate: undefined,
        portalDescription: undefined,
        portalId: undefined,
        portalLastUpdateDate: undefined,
        portalLogoImageLocation: undefined,
        portalName: undefined,
        portalStartUrl: undefined,
        portalStatus: undefined,
        roleArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.alarms !== undefined && data.alarms !== null) {
        contents.alarms = deserializeAws_restJson1Alarms(data.alarms, context);
    }
    if (data.notificationSenderEmail !== undefined && data.notificationSenderEmail !== null) {
        contents.notificationSenderEmail = data.notificationSenderEmail;
    }
    if (data.portalArn !== undefined && data.portalArn !== null) {
        contents.portalArn = data.portalArn;
    }
    if (data.portalAuthMode !== undefined && data.portalAuthMode !== null) {
        contents.portalAuthMode = data.portalAuthMode;
    }
    if (data.portalClientId !== undefined && data.portalClientId !== null) {
        contents.portalClientId = data.portalClientId;
    }
    if (data.portalContactEmail !== undefined && data.portalContactEmail !== null) {
        contents.portalContactEmail = data.portalContactEmail;
    }
    if (data.portalCreationDate !== undefined && data.portalCreationDate !== null) {
        contents.portalCreationDate = new Date(Math.round(data.portalCreationDate * 1000));
    }
    if (data.portalDescription !== undefined && data.portalDescription !== null) {
        contents.portalDescription = data.portalDescription;
    }
    if (data.portalId !== undefined && data.portalId !== null) {
        contents.portalId = data.portalId;
    }
    if (data.portalLastUpdateDate !== undefined && data.portalLastUpdateDate !== null) {
        contents.portalLastUpdateDate = new Date(Math.round(data.portalLastUpdateDate * 1000));
    }
    if (data.portalLogoImageLocation !== undefined && data.portalLogoImageLocation !== null) {
        contents.portalLogoImageLocation = deserializeAws_restJson1ImageLocation(data.portalLogoImageLocation, context);
    }
    if (data.portalName !== undefined && data.portalName !== null) {
        contents.portalName = data.portalName;
    }
    if (data.portalStartUrl !== undefined && data.portalStartUrl !== null) {
        contents.portalStartUrl = data.portalStartUrl;
    }
    if (data.portalStatus !== undefined && data.portalStatus !== null) {
        contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
    }
    if (data.roleArn !== undefined && data.roleArn !== null) {
        contents.roleArn = data.roleArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePortalCommand = deserializeAws_restJson1DescribePortalCommand;
const deserializeAws_restJson1DescribePortalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DescribeProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        portalId: undefined,
        projectArn: undefined,
        projectCreationDate: undefined,
        projectDescription: undefined,
        projectId: undefined,
        projectLastUpdateDate: undefined,
        projectName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.portalId !== undefined && data.portalId !== null) {
        contents.portalId = data.portalId;
    }
    if (data.projectArn !== undefined && data.projectArn !== null) {
        contents.projectArn = data.projectArn;
    }
    if (data.projectCreationDate !== undefined && data.projectCreationDate !== null) {
        contents.projectCreationDate = new Date(Math.round(data.projectCreationDate * 1000));
    }
    if (data.projectDescription !== undefined && data.projectDescription !== null) {
        contents.projectDescription = data.projectDescription;
    }
    if (data.projectId !== undefined && data.projectId !== null) {
        contents.projectId = data.projectId;
    }
    if (data.projectLastUpdateDate !== undefined && data.projectLastUpdateDate !== null) {
        contents.projectLastUpdateDate = new Date(Math.round(data.projectLastUpdateDate * 1000));
    }
    if (data.projectName !== undefined && data.projectName !== null) {
        contents.projectName = data.projectName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProjectCommand = deserializeAws_restJson1DescribeProjectCommand;
const deserializeAws_restJson1DescribeProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1DisassociateAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateAssetsCommand = deserializeAws_restJson1DisassociateAssetsCommand;
const deserializeAws_restJson1DisassociateAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1GetAssetPropertyAggregatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAssetPropertyAggregatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        aggregatedValues: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.aggregatedValues !== undefined && data.aggregatedValues !== null) {
        contents.aggregatedValues = deserializeAws_restJson1AggregatedValues(data.aggregatedValues, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssetPropertyAggregatesCommand = deserializeAws_restJson1GetAssetPropertyAggregatesCommand;
const deserializeAws_restJson1GetAssetPropertyAggregatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotsitewise#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1GetAssetPropertyValueCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAssetPropertyValueCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        propertyValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.propertyValue !== undefined && data.propertyValue !== null) {
        contents.propertyValue = deserializeAws_restJson1AssetPropertyValue(data.propertyValue, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssetPropertyValueCommand = deserializeAws_restJson1GetAssetPropertyValueCommand;
const deserializeAws_restJson1GetAssetPropertyValueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotsitewise#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1GetAssetPropertyValueHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAssetPropertyValueHistoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetPropertyValueHistory: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetPropertyValueHistory !== undefined && data.assetPropertyValueHistory !== null) {
        contents.assetPropertyValueHistory = deserializeAws_restJson1AssetPropertyValueHistory(data.assetPropertyValueHistory, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssetPropertyValueHistoryCommand = deserializeAws_restJson1GetAssetPropertyValueHistoryCommand;
const deserializeAws_restJson1GetAssetPropertyValueHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotsitewise#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        interpolatedAssetPropertyValues: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.interpolatedAssetPropertyValues !== undefined && data.interpolatedAssetPropertyValues !== null) {
        contents.interpolatedAssetPropertyValues = deserializeAws_restJson1InterpolatedAssetPropertyValues(data.interpolatedAssetPropertyValues, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand;
const deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotsitewise#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListAccessPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccessPoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        accessPolicySummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.accessPolicySummaries !== undefined && data.accessPolicySummaries !== null) {
        contents.accessPolicySummaries = deserializeAws_restJson1AccessPolicySummaries(data.accessPolicySummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccessPoliciesCommand = deserializeAws_restJson1ListAccessPoliciesCommand;
const deserializeAws_restJson1ListAccessPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListAssetModelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssetModelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetModelSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetModelSummaries !== undefined && data.assetModelSummaries !== null) {
        contents.assetModelSummaries = deserializeAws_restJson1AssetModelSummaries(data.assetModelSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssetModelsCommand = deserializeAws_restJson1ListAssetModelsCommand;
const deserializeAws_restJson1ListAssetModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListAssetRelationshipsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssetRelationshipsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetRelationshipSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetRelationshipSummaries !== undefined && data.assetRelationshipSummaries !== null) {
        contents.assetRelationshipSummaries = deserializeAws_restJson1AssetRelationshipSummaries(data.assetRelationshipSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssetRelationshipsCommand = deserializeAws_restJson1ListAssetRelationshipsCommand;
const deserializeAws_restJson1ListAssetRelationshipsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetSummaries !== undefined && data.assetSummaries !== null) {
        contents.assetSummaries = deserializeAws_restJson1AssetSummaries(data.assetSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssetsCommand = deserializeAws_restJson1ListAssetsCommand;
const deserializeAws_restJson1ListAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListAssociatedAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssociatedAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetSummaries !== undefined && data.assetSummaries !== null) {
        contents.assetSummaries = deserializeAws_restJson1AssociatedAssetsSummaries(data.assetSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssociatedAssetsCommand = deserializeAws_restJson1ListAssociatedAssetsCommand;
const deserializeAws_restJson1ListAssociatedAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListDashboardsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDashboardsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dashboardSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dashboardSummaries !== undefined && data.dashboardSummaries !== null) {
        contents.dashboardSummaries = deserializeAws_restJson1DashboardSummaries(data.dashboardSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDashboardsCommand = deserializeAws_restJson1ListDashboardsCommand;
const deserializeAws_restJson1ListDashboardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListGatewaysCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGatewaysCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        gatewaySummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.gatewaySummaries !== undefined && data.gatewaySummaries !== null) {
        contents.gatewaySummaries = deserializeAws_restJson1GatewaySummaries(data.gatewaySummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGatewaysCommand = deserializeAws_restJson1ListGatewaysCommand;
const deserializeAws_restJson1ListGatewaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListPortalsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPortalsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        portalSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.portalSummaries !== undefined && data.portalSummaries !== null) {
        contents.portalSummaries = deserializeAws_restJson1PortalSummaries(data.portalSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPortalsCommand = deserializeAws_restJson1ListPortalsCommand;
const deserializeAws_restJson1ListPortalsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListProjectAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProjectAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetIds: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetIds !== undefined && data.assetIds !== null) {
        contents.assetIds = deserializeAws_restJson1AssetIDs(data.assetIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProjectAssetsCommand = deserializeAws_restJson1ListProjectAssetsCommand;
const deserializeAws_restJson1ListProjectAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ListProjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        projectSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.projectSummaries !== undefined && data.projectSummaries !== null) {
        contents.projectSummaries = deserializeAws_restJson1ProjectSummaries(data.projectSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProjectsCommand = deserializeAws_restJson1ListProjectsCommand;
const deserializeAws_restJson1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iotsitewise#UnauthorizedException":
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
const deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDefaultEncryptionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configurationStatus: undefined,
        encryptionType: undefined,
        kmsKeyArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
        contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
    }
    if (data.encryptionType !== undefined && data.encryptionType !== null) {
        contents.encryptionType = data.encryptionType;
    }
    if (data.kmsKeyArn !== undefined && data.kmsKeyArn !== null) {
        contents.kmsKeyArn = data.kmsKeyArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand = deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand;
const deserializeAws_restJson1PutDefaultEncryptionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.iotsitewise#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iotsitewise#UnauthorizedException":
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
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.iotsitewise#UnauthorizedException":
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
const deserializeAws_restJson1UpdateAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAccessPolicyCommand = deserializeAws_restJson1UpdateAccessPolicyCommand;
const deserializeAws_restJson1UpdateAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateAssetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetStatus !== undefined && data.assetStatus !== null) {
        contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssetCommand = deserializeAws_restJson1UpdateAssetCommand;
const deserializeAws_restJson1UpdateAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateAssetModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAssetModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assetModelStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
        contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssetModelCommand = deserializeAws_restJson1UpdateAssetModelCommand;
const deserializeAws_restJson1UpdateAssetModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateAssetPropertyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAssetPropertyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssetPropertyCommand = deserializeAws_restJson1UpdateAssetPropertyCommand;
const deserializeAws_restJson1UpdateAssetPropertyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDashboardCommand = deserializeAws_restJson1UpdateDashboardCommand;
const deserializeAws_restJson1UpdateDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGatewayCommand = deserializeAws_restJson1UpdateGatewayCommand;
const deserializeAws_restJson1UpdateGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        capabilityNamespace: undefined,
        capabilitySyncStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.capabilityNamespace !== undefined && data.capabilityNamespace !== null) {
        contents.capabilityNamespace = data.capabilityNamespace;
    }
    if (data.capabilitySyncStatus !== undefined && data.capabilitySyncStatus !== null) {
        contents.capabilitySyncStatus = data.capabilitySyncStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand;
const deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotsitewise#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdatePortalCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePortalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        portalStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.portalStatus !== undefined && data.portalStatus !== null) {
        contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePortalCommand = deserializeAws_restJson1UpdatePortalCommand;
const deserializeAws_restJson1UpdatePortalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.iotsitewise#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1UpdateProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateProjectCommand = deserializeAws_restJson1UpdateProjectCommand;
const deserializeAws_restJson1UpdateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotsitewise#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotsitewise#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotsitewise#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotsitewise#ThrottlingException":
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
const deserializeAws_restJson1ConflictingOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingOperationException",
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
const deserializeAws_restJson1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceName !== undefined && data.resourceName !== null) {
        contents.resourceName = data.resourceName;
    }
    return contents;
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
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
const serializeAws_restJson1Alarms = (input, context) => {
    return {
        ...(input.alarmRoleArn !== undefined && input.alarmRoleArn !== null && { alarmRoleArn: input.alarmRoleArn }),
        ...(input.notificationLambdaArn !== undefined &&
            input.notificationLambdaArn !== null && { notificationLambdaArn: input.notificationLambdaArn }),
    };
};
const serializeAws_restJson1AssetModelCompositeModel = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.properties !== undefined &&
            input.properties !== null && {
            properties: serializeAws_restJson1AssetModelProperties(input.properties, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1AssetModelCompositeModelDefinition = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.properties !== undefined &&
            input.properties !== null && {
            properties: serializeAws_restJson1AssetModelPropertyDefinitions(input.properties, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1AssetModelCompositeModelDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelCompositeModelDefinition(entry, context);
    });
};
const serializeAws_restJson1AssetModelCompositeModels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelCompositeModel(entry, context);
    });
};
const serializeAws_restJson1AssetModelHierarchies = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelHierarchy(entry, context);
    });
};
const serializeAws_restJson1AssetModelHierarchy = (input, context) => {
    return {
        ...(input.childAssetModelId !== undefined &&
            input.childAssetModelId !== null && { childAssetModelId: input.childAssetModelId }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1AssetModelHierarchyDefinition = (input, context) => {
    return {
        ...(input.childAssetModelId !== undefined &&
            input.childAssetModelId !== null && { childAssetModelId: input.childAssetModelId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1AssetModelHierarchyDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelHierarchyDefinition(entry, context);
    });
};
const serializeAws_restJson1AssetModelProperties = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelProperty(entry, context);
    });
};
const serializeAws_restJson1AssetModelProperty = (input, context) => {
    return {
        ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
        ...(input.dataTypeSpec !== undefined && input.dataTypeSpec !== null && { dataTypeSpec: input.dataTypeSpec }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined &&
            input.type !== null && { type: serializeAws_restJson1PropertyType(input.type, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_restJson1AssetModelPropertyDefinition = (input, context) => {
    return {
        ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
        ...(input.dataTypeSpec !== undefined && input.dataTypeSpec !== null && { dataTypeSpec: input.dataTypeSpec }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined &&
            input.type !== null && { type: serializeAws_restJson1PropertyType(input.type, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_restJson1AssetModelPropertyDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetModelPropertyDefinition(entry, context);
    });
};
const serializeAws_restJson1AssetPropertyValue = (input, context) => {
    return {
        ...(input.quality !== undefined && input.quality !== null && { quality: input.quality }),
        ...(input.timestamp !== undefined &&
            input.timestamp !== null && { timestamp: serializeAws_restJson1TimeInNanos(input.timestamp, context) }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_restJson1Variant(input.value, context) }),
    };
};
const serializeAws_restJson1AssetPropertyValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetPropertyValue(entry, context);
    });
};
const serializeAws_restJson1Attribute = (input, context) => {
    return {
        ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
    };
};
const serializeAws_restJson1ExpressionVariable = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_restJson1VariableValue(input.value, context) }),
    };
};
const serializeAws_restJson1ExpressionVariables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ExpressionVariable(entry, context);
    });
};
const serializeAws_restJson1GatewayPlatform = (input, context) => {
    return {
        ...(input.greengrass !== undefined &&
            input.greengrass !== null && { greengrass: serializeAws_restJson1Greengrass(input.greengrass, context) }),
    };
};
const serializeAws_restJson1Greengrass = (input, context) => {
    return {
        ...(input.groupArn !== undefined && input.groupArn !== null && { groupArn: input.groupArn }),
    };
};
const serializeAws_restJson1GroupIdentity = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_restJson1IAMRoleIdentity = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_restJson1IAMUserIdentity = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_restJson1Identity = (input, context) => {
    return {
        ...(input.group !== undefined &&
            input.group !== null && { group: serializeAws_restJson1GroupIdentity(input.group, context) }),
        ...(input.iamRole !== undefined &&
            input.iamRole !== null && { iamRole: serializeAws_restJson1IAMRoleIdentity(input.iamRole, context) }),
        ...(input.iamUser !== undefined &&
            input.iamUser !== null && { iamUser: serializeAws_restJson1IAMUserIdentity(input.iamUser, context) }),
        ...(input.user !== undefined &&
            input.user !== null && { user: serializeAws_restJson1UserIdentity(input.user, context) }),
    };
};
const serializeAws_restJson1IDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Image = (input, context) => {
    return {
        ...(input.file !== undefined &&
            input.file !== null && { file: serializeAws_restJson1ImageFile(input.file, context) }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_restJson1ImageFile = (input, context) => {
    return {
        ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1LoggingOptions = (input, context) => {
    return {
        ...(input.level !== undefined && input.level !== null && { level: input.level }),
    };
};
const serializeAws_restJson1Measurement = (input, context) => {
    return {};
};
const serializeAws_restJson1Metric = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1ExpressionVariables(input.variables, context) }),
        ...(input.window !== undefined &&
            input.window !== null && { window: serializeAws_restJson1MetricWindow(input.window, context) }),
    };
};
const serializeAws_restJson1MetricWindow = (input, context) => {
    return {
        ...(input.tumbling !== undefined &&
            input.tumbling !== null && { tumbling: serializeAws_restJson1TumblingWindow(input.tumbling, context) }),
    };
};
const serializeAws_restJson1PortalResource = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_restJson1ProjectResource = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_restJson1PropertyType = (input, context) => {
    return {
        ...(input.attribute !== undefined &&
            input.attribute !== null && { attribute: serializeAws_restJson1Attribute(input.attribute, context) }),
        ...(input.measurement !== undefined &&
            input.measurement !== null && { measurement: serializeAws_restJson1Measurement(input.measurement, context) }),
        ...(input.metric !== undefined &&
            input.metric !== null && { metric: serializeAws_restJson1Metric(input.metric, context) }),
        ...(input.transform !== undefined &&
            input.transform !== null && { transform: serializeAws_restJson1Transform(input.transform, context) }),
    };
};
const serializeAws_restJson1PutAssetPropertyValueEntries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PutAssetPropertyValueEntry(entry, context);
    });
};
const serializeAws_restJson1PutAssetPropertyValueEntry = (input, context) => {
    return {
        ...(input.assetId !== undefined && input.assetId !== null && { assetId: input.assetId }),
        ...(input.entryId !== undefined && input.entryId !== null && { entryId: input.entryId }),
        ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
        ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
        ...(input.propertyValues !== undefined &&
            input.propertyValues !== null && {
            propertyValues: serializeAws_restJson1AssetPropertyValues(input.propertyValues, context),
        }),
    };
};
const serializeAws_restJson1Resource = (input, context) => {
    return {
        ...(input.portal !== undefined &&
            input.portal !== null && { portal: serializeAws_restJson1PortalResource(input.portal, context) }),
        ...(input.project !== undefined &&
            input.project !== null && { project: serializeAws_restJson1ProjectResource(input.project, context) }),
    };
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
const serializeAws_restJson1TimeInNanos = (input, context) => {
    return {
        ...(input.offsetInNanos !== undefined && input.offsetInNanos !== null && { offsetInNanos: input.offsetInNanos }),
        ...(input.timeInSeconds !== undefined && input.timeInSeconds !== null && { timeInSeconds: input.timeInSeconds }),
    };
};
const serializeAws_restJson1Transform = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1ExpressionVariables(input.variables, context) }),
    };
};
const serializeAws_restJson1TumblingWindow = (input, context) => {
    return {
        ...(input.interval !== undefined && input.interval !== null && { interval: input.interval }),
    };
};
const serializeAws_restJson1UserIdentity = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_restJson1VariableValue = (input, context) => {
    return {
        ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
        ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
    };
};
const serializeAws_restJson1Variant = (input, context) => {
    return {
        ...(input.booleanValue !== undefined && input.booleanValue !== null && { booleanValue: input.booleanValue }),
        ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
        ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const deserializeAws_restJson1AccessPolicySummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccessPolicySummary(entry, context);
    });
};
const deserializeAws_restJson1AccessPolicySummary = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        identity: output.identity !== undefined && output.identity !== null
            ? deserializeAws_restJson1Identity(output.identity, context)
            : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        permission: output.permission !== undefined && output.permission !== null ? output.permission : undefined,
        resource: output.resource !== undefined && output.resource !== null
            ? deserializeAws_restJson1Resource(output.resource, context)
            : undefined,
    };
};
const deserializeAws_restJson1AggregatedValue = (output, context) => {
    return {
        quality: output.quality !== undefined && output.quality !== null ? output.quality : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1Aggregates(output.value, context)
            : undefined,
    };
};
const deserializeAws_restJson1AggregatedValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AggregatedValue(entry, context);
    });
};
const deserializeAws_restJson1Aggregates = (output, context) => {
    return {
        average: output.average !== undefined && output.average !== null ? output.average : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        maximum: output.maximum !== undefined && output.maximum !== null ? output.maximum : undefined,
        minimum: output.minimum !== undefined && output.minimum !== null ? output.minimum : undefined,
        standardDeviation: output.standardDeviation !== undefined && output.standardDeviation !== null
            ? output.standardDeviation
            : undefined,
        sum: output.sum !== undefined && output.sum !== null ? output.sum : undefined,
    };
};
const deserializeAws_restJson1Alarms = (output, context) => {
    return {
        alarmRoleArn: output.alarmRoleArn !== undefined && output.alarmRoleArn !== null ? output.alarmRoleArn : undefined,
        notificationLambdaArn: output.notificationLambdaArn !== undefined && output.notificationLambdaArn !== null
            ? output.notificationLambdaArn
            : undefined,
    };
};
const deserializeAws_restJson1AssetCompositeModel = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1AssetProperties(output.properties, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1AssetCompositeModels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetCompositeModel(entry, context);
    });
};
const deserializeAws_restJson1AssetErrorDetails = (output, context) => {
    return {
        assetId: output.assetId !== undefined && output.assetId !== null ? output.assetId : undefined,
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1AssetHierarchies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetHierarchy(entry, context);
    });
};
const deserializeAws_restJson1AssetHierarchy = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1AssetHierarchyInfo = (output, context) => {
    return {
        childAssetId: output.childAssetId !== undefined && output.childAssetId !== null ? output.childAssetId : undefined,
        parentAssetId: output.parentAssetId !== undefined && output.parentAssetId !== null ? output.parentAssetId : undefined,
    };
};
const deserializeAws_restJson1AssetIDs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1AssetModelCompositeModel = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1AssetModelProperties(output.properties, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1AssetModelCompositeModels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetModelCompositeModel(entry, context);
    });
};
const deserializeAws_restJson1AssetModelHierarchies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetModelHierarchy(entry, context);
    });
};
const deserializeAws_restJson1AssetModelHierarchy = (output, context) => {
    return {
        childAssetModelId: output.childAssetModelId !== undefined && output.childAssetModelId !== null
            ? output.childAssetModelId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1AssetModelProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetModelProperty(entry, context);
    });
};
const deserializeAws_restJson1AssetModelProperty = (output, context) => {
    return {
        dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
        dataTypeSpec: output.dataTypeSpec !== undefined && output.dataTypeSpec !== null ? output.dataTypeSpec : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null
            ? deserializeAws_restJson1PropertyType(output.type, context)
            : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_restJson1AssetModelStatus = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_restJson1ErrorDetails(output.error, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1AssetModelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetModelSummary(entry, context);
    });
};
const deserializeAws_restJson1AssetModelSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1AssetModelStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AssetProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetProperty(entry, context);
    });
};
const deserializeAws_restJson1AssetProperty = (output, context) => {
    return {
        alias: output.alias !== undefined && output.alias !== null ? output.alias : undefined,
        dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
        dataTypeSpec: output.dataTypeSpec !== undefined && output.dataTypeSpec !== null ? output.dataTypeSpec : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notification: output.notification !== undefined && output.notification !== null
            ? deserializeAws_restJson1PropertyNotification(output.notification, context)
            : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_restJson1AssetPropertyValue = (output, context) => {
    return {
        quality: output.quality !== undefined && output.quality !== null ? output.quality : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? deserializeAws_restJson1TimeInNanos(output.timestamp, context)
            : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1Variant(output.value, context)
            : undefined,
    };
};
const deserializeAws_restJson1AssetPropertyValueHistory = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetPropertyValue(entry, context);
    });
};
const deserializeAws_restJson1AssetRelationshipSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetRelationshipSummary(entry, context);
    });
};
const deserializeAws_restJson1AssetRelationshipSummary = (output, context) => {
    return {
        hierarchyInfo: output.hierarchyInfo !== undefined && output.hierarchyInfo !== null
            ? deserializeAws_restJson1AssetHierarchyInfo(output.hierarchyInfo, context)
            : undefined,
        relationshipType: output.relationshipType !== undefined && output.relationshipType !== null ? output.relationshipType : undefined,
    };
};
const deserializeAws_restJson1AssetStatus = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_restJson1ErrorDetails(output.error, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1AssetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetSummary(entry, context);
    });
};
const deserializeAws_restJson1AssetSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assetModelId: output.assetModelId !== undefined && output.assetModelId !== null ? output.assetModelId : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        hierarchies: output.hierarchies !== undefined && output.hierarchies !== null
            ? deserializeAws_restJson1AssetHierarchies(output.hierarchies, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1AssetStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AssociatedAssetsSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssociatedAssetsSummary(entry, context);
    });
};
const deserializeAws_restJson1AssociatedAssetsSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assetModelId: output.assetModelId !== undefined && output.assetModelId !== null ? output.assetModelId : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        hierarchies: output.hierarchies !== undefined && output.hierarchies !== null
            ? deserializeAws_restJson1AssetHierarchies(output.hierarchies, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1AssetStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_restJson1Attribute = (output, context) => {
    return {
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
const deserializeAws_restJson1BatchAssociateProjectAssetsErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetErrorDetails(entry, context);
    });
};
const deserializeAws_restJson1BatchDisassociateProjectAssetsErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetErrorDetails(entry, context);
    });
};
const deserializeAws_restJson1BatchPutAssetPropertyError = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        timestamps: output.timestamps !== undefined && output.timestamps !== null
            ? deserializeAws_restJson1Timestamps(output.timestamps, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchPutAssetPropertyErrorEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutAssetPropertyErrorEntry(entry, context);
    });
};
const deserializeAws_restJson1BatchPutAssetPropertyErrorEntry = (output, context) => {
    return {
        entryId: output.entryId !== undefined && output.entryId !== null ? output.entryId : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_restJson1BatchPutAssetPropertyErrors(output.errors, context)
            : undefined,
    };
};
const deserializeAws_restJson1BatchPutAssetPropertyErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutAssetPropertyError(entry, context);
    });
};
const deserializeAws_restJson1CompositeModelProperty = (output, context) => {
    return {
        assetProperty: output.assetProperty !== undefined && output.assetProperty !== null
            ? deserializeAws_restJson1Property(output.assetProperty, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1ConfigurationErrorDetails = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1ConfigurationStatus = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_restJson1ConfigurationErrorDetails(output.error, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1DashboardSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashboardSummary(entry, context);
    });
};
const deserializeAws_restJson1DashboardSummary = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ErrorDetails = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1ExpressionVariable = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1VariableValue(output.value, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExpressionVariables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExpressionVariable(entry, context);
    });
};
const deserializeAws_restJson1GatewayCapabilitySummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GatewayCapabilitySummary(entry, context);
    });
};
const deserializeAws_restJson1GatewayCapabilitySummary = (output, context) => {
    return {
        capabilityNamespace: output.capabilityNamespace !== undefined && output.capabilityNamespace !== null
            ? output.capabilityNamespace
            : undefined,
        capabilitySyncStatus: output.capabilitySyncStatus !== undefined && output.capabilitySyncStatus !== null
            ? output.capabilitySyncStatus
            : undefined,
    };
};
const deserializeAws_restJson1GatewayPlatform = (output, context) => {
    return {
        greengrass: output.greengrass !== undefined && output.greengrass !== null
            ? deserializeAws_restJson1Greengrass(output.greengrass, context)
            : undefined,
    };
};
const deserializeAws_restJson1GatewaySummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GatewaySummary(entry, context);
    });
};
const deserializeAws_restJson1GatewaySummary = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        gatewayCapabilitySummaries: output.gatewayCapabilitySummaries !== undefined && output.gatewayCapabilitySummaries !== null
            ? deserializeAws_restJson1GatewayCapabilitySummaries(output.gatewayCapabilitySummaries, context)
            : undefined,
        gatewayId: output.gatewayId !== undefined && output.gatewayId !== null ? output.gatewayId : undefined,
        gatewayName: output.gatewayName !== undefined && output.gatewayName !== null ? output.gatewayName : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1Greengrass = (output, context) => {
    return {
        groupArn: output.groupArn !== undefined && output.groupArn !== null ? output.groupArn : undefined,
    };
};
const deserializeAws_restJson1GroupIdentity = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1IAMRoleIdentity = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
const deserializeAws_restJson1IAMUserIdentity = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
const deserializeAws_restJson1Identity = (output, context) => {
    return {
        group: output.group !== undefined && output.group !== null
            ? deserializeAws_restJson1GroupIdentity(output.group, context)
            : undefined,
        iamRole: output.iamRole !== undefined && output.iamRole !== null
            ? deserializeAws_restJson1IAMRoleIdentity(output.iamRole, context)
            : undefined,
        iamUser: output.iamUser !== undefined && output.iamUser !== null
            ? deserializeAws_restJson1IAMUserIdentity(output.iamUser, context)
            : undefined,
        user: output.user !== undefined && output.user !== null
            ? deserializeAws_restJson1UserIdentity(output.user, context)
            : undefined,
    };
};
const deserializeAws_restJson1ImageLocation = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1InterpolatedAssetPropertyValue = (output, context) => {
    return {
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? deserializeAws_restJson1TimeInNanos(output.timestamp, context)
            : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1Variant(output.value, context)
            : undefined,
    };
};
const deserializeAws_restJson1InterpolatedAssetPropertyValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InterpolatedAssetPropertyValue(entry, context);
    });
};
const deserializeAws_restJson1LoggingOptions = (output, context) => {
    return {
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
    };
};
const deserializeAws_restJson1Measurement = (output, context) => {
    return {};
};
const deserializeAws_restJson1Metric = (output, context) => {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_restJson1ExpressionVariables(output.variables, context)
            : undefined,
        window: output.window !== undefined && output.window !== null
            ? deserializeAws_restJson1MetricWindow(output.window, context)
            : undefined,
    };
};
const deserializeAws_restJson1MetricWindow = (output, context) => {
    return {
        tumbling: output.tumbling !== undefined && output.tumbling !== null
            ? deserializeAws_restJson1TumblingWindow(output.tumbling, context)
            : undefined,
    };
};
const deserializeAws_restJson1MonitorErrorDetails = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1PortalResource = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1PortalStatus = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_restJson1MonitorErrorDetails(output.error, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1PortalSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortalSummary(entry, context);
    });
};
const deserializeAws_restJson1PortalSummary = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        startUrl: output.startUrl !== undefined && output.startUrl !== null ? output.startUrl : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1PortalStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ProjectResource = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1ProjectSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProjectSummary(entry, context);
    });
};
const deserializeAws_restJson1ProjectSummary = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateDate: output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
            ? new Date(Math.round(output.lastUpdateDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1Property = (output, context) => {
    return {
        alias: output.alias !== undefined && output.alias !== null ? output.alias : undefined,
        dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notification: output.notification !== undefined && output.notification !== null
            ? deserializeAws_restJson1PropertyNotification(output.notification, context)
            : undefined,
        type: output.type !== undefined && output.type !== null
            ? deserializeAws_restJson1PropertyType(output.type, context)
            : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_restJson1PropertyNotification = (output, context) => {
    return {
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        topic: output.topic !== undefined && output.topic !== null ? output.topic : undefined,
    };
};
const deserializeAws_restJson1PropertyType = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null
            ? deserializeAws_restJson1Attribute(output.attribute, context)
            : undefined,
        measurement: output.measurement !== undefined && output.measurement !== null
            ? deserializeAws_restJson1Measurement(output.measurement, context)
            : undefined,
        metric: output.metric !== undefined && output.metric !== null
            ? deserializeAws_restJson1Metric(output.metric, context)
            : undefined,
        transform: output.transform !== undefined && output.transform !== null
            ? deserializeAws_restJson1Transform(output.transform, context)
            : undefined,
    };
};
const deserializeAws_restJson1Resource = (output, context) => {
    return {
        portal: output.portal !== undefined && output.portal !== null
            ? deserializeAws_restJson1PortalResource(output.portal, context)
            : undefined,
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_restJson1ProjectResource(output.project, context)
            : undefined,
    };
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
const deserializeAws_restJson1TimeInNanos = (output, context) => {
    return {
        offsetInNanos: output.offsetInNanos !== undefined && output.offsetInNanos !== null ? output.offsetInNanos : undefined,
        timeInSeconds: output.timeInSeconds !== undefined && output.timeInSeconds !== null ? output.timeInSeconds : undefined,
    };
};
const deserializeAws_restJson1Timestamps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimeInNanos(entry, context);
    });
};
const deserializeAws_restJson1Transform = (output, context) => {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_restJson1ExpressionVariables(output.variables, context)
            : undefined,
    };
};
const deserializeAws_restJson1TumblingWindow = (output, context) => {
    return {
        interval: output.interval !== undefined && output.interval !== null ? output.interval : undefined,
    };
};
const deserializeAws_restJson1UserIdentity = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1VariableValue = (output, context) => {
    return {
        hierarchyId: output.hierarchyId !== undefined && output.hierarchyId !== null ? output.hierarchyId : undefined,
        propertyId: output.propertyId !== undefined && output.propertyId !== null ? output.propertyId : undefined,
    };
};
const deserializeAws_restJson1Variant = (output, context) => {
    return {
        booleanValue: output.booleanValue !== undefined && output.booleanValue !== null ? output.booleanValue : undefined,
        doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
        integerValue: output.integerValue !== undefined && output.integerValue !== null ? output.integerValue : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
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