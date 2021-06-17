"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = exports.deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = exports.deserializeAws_restJson1DeleteElasticsearchDomainCommand = exports.deserializeAws_restJson1CreatePackageCommand = exports.deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = exports.deserializeAws_restJson1CreateElasticsearchDomainCommand = exports.deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = exports.deserializeAws_restJson1AssociatePackageCommand = exports.deserializeAws_restJson1AddTagsCommand = exports.deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = exports.serializeAws_restJson1UpgradeElasticsearchDomainCommand = exports.serializeAws_restJson1UpdatePackageCommand = exports.serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = exports.serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = exports.serializeAws_restJson1RemoveTagsCommand = exports.serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = exports.serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = exports.serializeAws_restJson1ListTagsCommand = exports.serializeAws_restJson1ListPackagesForDomainCommand = exports.serializeAws_restJson1ListElasticsearchVersionsCommand = exports.serializeAws_restJson1ListElasticsearchInstanceTypesCommand = exports.serializeAws_restJson1ListDomainsForPackageCommand = exports.serializeAws_restJson1ListDomainNamesCommand = exports.serializeAws_restJson1GetUpgradeStatusCommand = exports.serializeAws_restJson1GetUpgradeHistoryCommand = exports.serializeAws_restJson1GetPackageVersionHistoryCommand = exports.serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = exports.serializeAws_restJson1DissociatePackageCommand = exports.serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = exports.serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = exports.serializeAws_restJson1DescribePackagesCommand = exports.serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = exports.serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = exports.serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = exports.serializeAws_restJson1DescribeElasticsearchDomainsCommand = exports.serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = exports.serializeAws_restJson1DescribeElasticsearchDomainCommand = exports.serializeAws_restJson1DescribeDomainAutoTunesCommand = exports.serializeAws_restJson1DeletePackageCommand = exports.serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = exports.serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = exports.serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = exports.serializeAws_restJson1DeleteElasticsearchDomainCommand = exports.serializeAws_restJson1CreatePackageCommand = exports.serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = exports.serializeAws_restJson1CreateElasticsearchDomainCommand = exports.serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = exports.serializeAws_restJson1AssociatePackageCommand = exports.serializeAws_restJson1AddTagsCommand = exports.serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = void 0;
exports.deserializeAws_restJson1UpgradeElasticsearchDomainCommand = exports.deserializeAws_restJson1UpdatePackageCommand = exports.deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = exports.deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = exports.deserializeAws_restJson1RemoveTagsCommand = exports.deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = exports.deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = exports.deserializeAws_restJson1ListTagsCommand = exports.deserializeAws_restJson1ListPackagesForDomainCommand = exports.deserializeAws_restJson1ListElasticsearchVersionsCommand = exports.deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = exports.deserializeAws_restJson1ListDomainsForPackageCommand = exports.deserializeAws_restJson1ListDomainNamesCommand = exports.deserializeAws_restJson1GetUpgradeStatusCommand = exports.deserializeAws_restJson1GetUpgradeHistoryCommand = exports.deserializeAws_restJson1GetPackageVersionHistoryCommand = exports.deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = exports.deserializeAws_restJson1DissociatePackageCommand = exports.deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = exports.deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = exports.deserializeAws_restJson1DescribePackagesCommand = exports.deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = exports.deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = exports.deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = exports.deserializeAws_restJson1DescribeElasticsearchDomainsCommand = exports.deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = exports.deserializeAws_restJson1DescribeElasticsearchDomainCommand = exports.deserializeAws_restJson1DescribeDomainAutoTunesCommand = exports.deserializeAws_restJson1DeletePackageCommand = exports.deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept";
    if (input.CrossClusterSearchConnectionId !== undefined) {
        const labelValue = input.CrossClusterSearchConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
exports.serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand;
const serializeAws_restJson1AddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/tags";
    let body;
    body = JSON.stringify({
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
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
exports.serializeAws_restJson1AddTagsCommand = serializeAws_restJson1AddTagsCommand;
const serializeAws_restJson1AssociatePackageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/packages/associate/{PackageID}/{DomainName}";
    if (input.PackageID !== undefined) {
        const labelValue = input.PackageID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PackageID.");
        }
        resolvedPath = resolvedPath.replace("{PackageID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PackageID.");
    }
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1AssociatePackageCommand = serializeAws_restJson1AssociatePackageCommand;
const serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/cancel";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
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
exports.serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand;
const serializeAws_restJson1CreateElasticsearchDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/domain";
    let body;
    body = JSON.stringify({
        ...(input.AccessPolicies !== undefined &&
            input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies }),
        ...(input.AdvancedOptions !== undefined &&
            input.AdvancedOptions !== null && {
            AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
        }),
        ...(input.AdvancedSecurityOptions !== undefined &&
            input.AdvancedSecurityOptions !== null && {
            AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
        }),
        ...(input.AutoTuneOptions !== undefined &&
            input.AutoTuneOptions !== null && {
            AutoTuneOptions: serializeAws_restJson1AutoTuneOptionsInput(input.AutoTuneOptions, context),
        }),
        ...(input.CognitoOptions !== undefined &&
            input.CognitoOptions !== null && {
            CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
        }),
        ...(input.DomainEndpointOptions !== undefined &&
            input.DomainEndpointOptions !== null && {
            DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
        }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.EBSOptions !== undefined &&
            input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
        ...(input.ElasticsearchClusterConfig !== undefined &&
            input.ElasticsearchClusterConfig !== null && {
            ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(input.ElasticsearchClusterConfig, context),
        }),
        ...(input.ElasticsearchVersion !== undefined &&
            input.ElasticsearchVersion !== null && { ElasticsearchVersion: input.ElasticsearchVersion }),
        ...(input.EncryptionAtRestOptions !== undefined &&
            input.EncryptionAtRestOptions !== null && {
            EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
        }),
        ...(input.LogPublishingOptions !== undefined &&
            input.LogPublishingOptions !== null && {
            LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
        }),
        ...(input.NodeToNodeEncryptionOptions !== undefined &&
            input.NodeToNodeEncryptionOptions !== null && {
            NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
        }),
        ...(input.SnapshotOptions !== undefined &&
            input.SnapshotOptions !== null && {
            SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
        }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
        ...(input.VPCOptions !== undefined &&
            input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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
exports.serializeAws_restJson1CreateElasticsearchDomainCommand = serializeAws_restJson1CreateElasticsearchDomainCommand;
const serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/ccs/outboundConnection";
    let body;
    body = JSON.stringify({
        ...(input.ConnectionAlias !== undefined &&
            input.ConnectionAlias !== null && { ConnectionAlias: input.ConnectionAlias }),
        ...(input.DestinationDomainInfo !== undefined &&
            input.DestinationDomainInfo !== null && {
            DestinationDomainInfo: serializeAws_restJson1DomainInformation(input.DestinationDomainInfo, context),
        }),
        ...(input.SourceDomainInfo !== undefined &&
            input.SourceDomainInfo !== null && {
            SourceDomainInfo: serializeAws_restJson1DomainInformation(input.SourceDomainInfo, context),
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
exports.serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand;
const serializeAws_restJson1CreatePackageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/packages";
    let body;
    body = JSON.stringify({
        ...(input.PackageDescription !== undefined &&
            input.PackageDescription !== null && { PackageDescription: input.PackageDescription }),
        ...(input.PackageName !== undefined && input.PackageName !== null && { PackageName: input.PackageName }),
        ...(input.PackageSource !== undefined &&
            input.PackageSource !== null && {
            PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
        }),
        ...(input.PackageType !== undefined && input.PackageType !== null && { PackageType: input.PackageType }),
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
exports.serializeAws_restJson1CreatePackageCommand = serializeAws_restJson1CreatePackageCommand;
const serializeAws_restJson1DeleteElasticsearchDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/domain/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DeleteElasticsearchDomainCommand = serializeAws_restJson1DeleteElasticsearchDomainCommand;
const serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/role";
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
exports.serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = serializeAws_restJson1DeleteElasticsearchServiceRoleCommand;
const serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}";
    if (input.CrossClusterSearchConnectionId !== undefined) {
        const labelValue = input.CrossClusterSearchConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
exports.serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand;
const serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}";
    if (input.CrossClusterSearchConnectionId !== undefined) {
        const labelValue = input.CrossClusterSearchConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
exports.serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand;
const serializeAws_restJson1DeletePackageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/packages/{PackageID}";
    if (input.PackageID !== undefined) {
        const labelValue = input.PackageID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PackageID.");
        }
        resolvedPath = resolvedPath.replace("{PackageID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PackageID.");
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
exports.serializeAws_restJson1DeletePackageCommand = serializeAws_restJson1DeletePackageCommand;
const serializeAws_restJson1DescribeDomainAutoTunesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/domain/{DomainName}/autoTunes";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
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
exports.serializeAws_restJson1DescribeDomainAutoTunesCommand = serializeAws_restJson1DescribeDomainAutoTunesCommand;
const serializeAws_restJson1DescribeElasticsearchDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/domain/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DescribeElasticsearchDomainCommand = serializeAws_restJson1DescribeElasticsearchDomainCommand;
const serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = serializeAws_restJson1DescribeElasticsearchDomainConfigCommand;
const serializeAws_restJson1DescribeElasticsearchDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/domain-info";
    let body;
    body = JSON.stringify({
        ...(input.DomainNames !== undefined &&
            input.DomainNames !== null && { DomainNames: serializeAws_restJson1DomainNameList(input.DomainNames, context) }),
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
exports.serializeAws_restJson1DescribeElasticsearchDomainsCommand = serializeAws_restJson1DescribeElasticsearchDomainsCommand;
const serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}";
    if (input.InstanceType !== undefined) {
        const labelValue = input.InstanceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InstanceType.");
        }
        resolvedPath = resolvedPath.replace("{InstanceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InstanceType.");
    }
    if (input.ElasticsearchVersion !== undefined) {
        const labelValue = input.ElasticsearchVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
        }
        resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
    }
    const query = {
        ...(input.DomainName !== undefined && { domainName: input.DomainName }),
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
exports.serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand;
const serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/ccs/inboundConnection/search";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
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
exports.serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand;
const serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/ccs/outboundConnection/search";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
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
exports.serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand;
const serializeAws_restJson1DescribePackagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/packages/describe";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1DescribePackagesFilterList(input.Filters, context) }),
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
exports.serializeAws_restJson1DescribePackagesCommand = serializeAws_restJson1DescribePackagesCommand;
const serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/reservedInstanceOfferings";
    const query = {
        ...(input.ReservedElasticsearchInstanceOfferingId !== undefined && {
            offeringId: input.ReservedElasticsearchInstanceOfferingId,
        }),
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
exports.serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand;
const serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/reservedInstances";
    const query = {
        ...(input.ReservedElasticsearchInstanceId !== undefined && {
            reservationId: input.ReservedElasticsearchInstanceId,
        }),
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
exports.serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand;
const serializeAws_restJson1DissociatePackageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/packages/dissociate/{PackageID}/{DomainName}";
    if (input.PackageID !== undefined) {
        const labelValue = input.PackageID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PackageID.");
        }
        resolvedPath = resolvedPath.replace("{PackageID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PackageID.");
    }
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DissociatePackageCommand = serializeAws_restJson1DissociatePackageCommand;
const serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/compatibleVersions";
    const query = {
        ...(input.DomainName !== undefined && { domainName: input.DomainName }),
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
exports.serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand;
const serializeAws_restJson1GetPackageVersionHistoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/packages/{PackageID}/history";
    if (input.PackageID !== undefined) {
        const labelValue = input.PackageID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PackageID.");
        }
        resolvedPath = resolvedPath.replace("{PackageID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PackageID.");
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
exports.serializeAws_restJson1GetPackageVersionHistoryCommand = serializeAws_restJson1GetPackageVersionHistoryCommand;
const serializeAws_restJson1GetUpgradeHistoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/history";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1GetUpgradeHistoryCommand = serializeAws_restJson1GetUpgradeHistoryCommand;
const serializeAws_restJson1GetUpgradeStatusCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/status";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1GetUpgradeStatusCommand = serializeAws_restJson1GetUpgradeStatusCommand;
const serializeAws_restJson1ListDomainNamesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/domain";
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
exports.serializeAws_restJson1ListDomainNamesCommand = serializeAws_restJson1ListDomainNamesCommand;
const serializeAws_restJson1ListDomainsForPackageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/packages/{PackageID}/domains";
    if (input.PackageID !== undefined) {
        const labelValue = input.PackageID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PackageID.");
        }
        resolvedPath = resolvedPath.replace("{PackageID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PackageID.");
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
exports.serializeAws_restJson1ListDomainsForPackageCommand = serializeAws_restJson1ListDomainsForPackageCommand;
const serializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}";
    if (input.ElasticsearchVersion !== undefined) {
        const labelValue = input.ElasticsearchVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
        }
        resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
    }
    const query = {
        ...(input.DomainName !== undefined && { domainName: input.DomainName }),
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
exports.serializeAws_restJson1ListElasticsearchInstanceTypesCommand = serializeAws_restJson1ListElasticsearchInstanceTypesCommand;
const serializeAws_restJson1ListElasticsearchVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/versions";
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
exports.serializeAws_restJson1ListElasticsearchVersionsCommand = serializeAws_restJson1ListElasticsearchVersionsCommand;
const serializeAws_restJson1ListPackagesForDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/domain/{DomainName}/packages";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1ListPackagesForDomainCommand = serializeAws_restJson1ListPackagesForDomainCommand;
const serializeAws_restJson1ListTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/tags";
    const query = {
        ...(input.ARN !== undefined && { arn: input.ARN }),
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
exports.serializeAws_restJson1ListTagsCommand = serializeAws_restJson1ListTagsCommand;
const serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/purchaseReservedInstanceOffering";
    let body;
    body = JSON.stringify({
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.ReservationName !== undefined &&
            input.ReservationName !== null && { ReservationName: input.ReservationName }),
        ...(input.ReservedElasticsearchInstanceOfferingId !== undefined &&
            input.ReservedElasticsearchInstanceOfferingId !== null && {
            ReservedElasticsearchInstanceOfferingId: input.ReservedElasticsearchInstanceOfferingId,
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
exports.serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand;
const serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject";
    if (input.CrossClusterSearchConnectionId !== undefined) {
        const labelValue = input.CrossClusterSearchConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
exports.serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand;
const serializeAws_restJson1RemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/tags-removal";
    let body;
    body = JSON.stringify({
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_restJson1StringList(input.TagKeys, context) }),
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
exports.serializeAws_restJson1RemoveTagsCommand = serializeAws_restJson1RemoveTagsCommand;
const serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/start";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
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
exports.serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand;
const serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccessPolicies !== undefined &&
            input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies }),
        ...(input.AdvancedOptions !== undefined &&
            input.AdvancedOptions !== null && {
            AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
        }),
        ...(input.AdvancedSecurityOptions !== undefined &&
            input.AdvancedSecurityOptions !== null && {
            AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
        }),
        ...(input.AutoTuneOptions !== undefined &&
            input.AutoTuneOptions !== null && {
            AutoTuneOptions: serializeAws_restJson1AutoTuneOptions(input.AutoTuneOptions, context),
        }),
        ...(input.CognitoOptions !== undefined &&
            input.CognitoOptions !== null && {
            CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
        }),
        ...(input.DomainEndpointOptions !== undefined &&
            input.DomainEndpointOptions !== null && {
            DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
        }),
        ...(input.EBSOptions !== undefined &&
            input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
        ...(input.ElasticsearchClusterConfig !== undefined &&
            input.ElasticsearchClusterConfig !== null && {
            ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(input.ElasticsearchClusterConfig, context),
        }),
        ...(input.EncryptionAtRestOptions !== undefined &&
            input.EncryptionAtRestOptions !== null && {
            EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
        }),
        ...(input.LogPublishingOptions !== undefined &&
            input.LogPublishingOptions !== null && {
            LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
        }),
        ...(input.NodeToNodeEncryptionOptions !== undefined &&
            input.NodeToNodeEncryptionOptions !== null && {
            NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
        }),
        ...(input.SnapshotOptions !== undefined &&
            input.SnapshotOptions !== null && {
            SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
        }),
        ...(input.VPCOptions !== undefined &&
            input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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
exports.serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = serializeAws_restJson1UpdateElasticsearchDomainConfigCommand;
const serializeAws_restJson1UpdatePackageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/packages/update";
    let body;
    body = JSON.stringify({
        ...(input.CommitMessage !== undefined && input.CommitMessage !== null && { CommitMessage: input.CommitMessage }),
        ...(input.PackageDescription !== undefined &&
            input.PackageDescription !== null && { PackageDescription: input.PackageDescription }),
        ...(input.PackageID !== undefined && input.PackageID !== null && { PackageID: input.PackageID }),
        ...(input.PackageSource !== undefined &&
            input.PackageSource !== null && {
            PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
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
exports.serializeAws_restJson1UpdatePackageCommand = serializeAws_restJson1UpdatePackageCommand;
const serializeAws_restJson1UpgradeElasticsearchDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-01-01/es/upgradeDomain";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.PerformCheckOnly !== undefined &&
            input.PerformCheckOnly !== null && { PerformCheckOnly: input.PerformCheckOnly }),
        ...(input.TargetVersion !== undefined && input.TargetVersion !== null && { TargetVersion: input.TargetVersion }),
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
exports.serializeAws_restJson1UpgradeElasticsearchDomainCommand = serializeAws_restJson1UpgradeElasticsearchDomainCommand;
const deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
        contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand;
const deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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
const deserializeAws_restJson1AddTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddTagsCommand = deserializeAws_restJson1AddTagsCommand;
const deserializeAws_restJson1AddTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1AssociatePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociatePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainPackageDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
        contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociatePackageCommand = deserializeAws_restJson1AssociatePackageCommand;
const deserializeAws_restJson1AssociatePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.elasticsearchservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ServiceSoftwareOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
        contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand;
const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1CreateElasticsearchDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateElasticsearchDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
        contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateElasticsearchDomainCommand = deserializeAws_restJson1CreateElasticsearchDomainCommand;
const deserializeAws_restJson1CreateElasticsearchDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.elasticsearchservice#InvalidTypeException":
            response = {
                ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConnectionAlias: undefined,
        ConnectionStatus: undefined,
        CrossClusterSearchConnectionId: undefined,
        DestinationDomainInfo: undefined,
        SourceDomainInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConnectionAlias !== undefined && data.ConnectionAlias !== null) {
        contents.ConnectionAlias = data.ConnectionAlias;
    }
    if (data.ConnectionStatus !== undefined && data.ConnectionStatus !== null) {
        contents.ConnectionStatus = deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(data.ConnectionStatus, context);
    }
    if (data.CrossClusterSearchConnectionId !== undefined && data.CrossClusterSearchConnectionId !== null) {
        contents.CrossClusterSearchConnectionId = data.CrossClusterSearchConnectionId;
    }
    if (data.DestinationDomainInfo !== undefined && data.DestinationDomainInfo !== null) {
        contents.DestinationDomainInfo = deserializeAws_restJson1DomainInformation(data.DestinationDomainInfo, context);
    }
    if (data.SourceDomainInfo !== undefined && data.SourceDomainInfo !== null) {
        contents.SourceDomainInfo = deserializeAws_restJson1DomainInformation(data.SourceDomainInfo, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand;
const deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreatePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PackageDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
        contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePackageCommand = deserializeAws_restJson1CreatePackageCommand;
const deserializeAws_restJson1CreatePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.elasticsearchservice#InvalidTypeException":
            response = {
                ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DeleteElasticsearchDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteElasticsearchDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
        contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteElasticsearchDomainCommand = deserializeAws_restJson1DeleteElasticsearchDomainCommand;
const deserializeAws_restJson1DeleteElasticsearchDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand;
const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
        contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand;
const deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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
const deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
        contents.CrossClusterSearchConnection = deserializeAws_restJson1OutboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand;
const deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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
const deserializeAws_restJson1DeletePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PackageDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
        contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePackageCommand = deserializeAws_restJson1DeletePackageCommand;
const deserializeAws_restJson1DeletePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.elasticsearchservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeDomainAutoTunesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDomainAutoTunesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AutoTunes: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AutoTunes !== undefined && data.AutoTunes !== null) {
        contents.AutoTunes = deserializeAws_restJson1AutoTuneList(data.AutoTunes, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDomainAutoTunesCommand = deserializeAws_restJson1DescribeDomainAutoTunesCommand;
const deserializeAws_restJson1DescribeDomainAutoTunesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeElasticsearchDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeElasticsearchDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
        contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeElasticsearchDomainCommand = deserializeAws_restJson1DescribeElasticsearchDomainCommand;
const deserializeAws_restJson1DescribeElasticsearchDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
        contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand;
const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeElasticsearchDomainsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeElasticsearchDomainsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainStatusList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainStatusList !== undefined && data.DomainStatusList !== null) {
        contents.DomainStatusList = deserializeAws_restJson1ElasticsearchDomainStatusList(data.DomainStatusList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeElasticsearchDomainsCommand = deserializeAws_restJson1DescribeElasticsearchDomainsCommand;
const deserializeAws_restJson1DescribeElasticsearchDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LimitsByRole: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LimitsByRole !== undefined && data.LimitsByRole !== null) {
        contents.LimitsByRole = deserializeAws_restJson1LimitsByRole(data.LimitsByRole, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand;
const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.elasticsearchservice#InvalidTypeException":
            response = {
                ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnections: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
        contents.CrossClusterSearchConnections = deserializeAws_restJson1InboundCrossClusterSearchConnections(data.CrossClusterSearchConnections, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand;
const deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnections: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
        contents.CrossClusterSearchConnections = deserializeAws_restJson1OutboundCrossClusterSearchConnections(data.CrossClusterSearchConnections, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand;
const deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribePackagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PackageDetailsList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.PackageDetailsList !== undefined && data.PackageDetailsList !== null) {
        contents.PackageDetailsList = deserializeAws_restJson1PackageDetailsList(data.PackageDetailsList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackagesCommand = deserializeAws_restJson1DescribePackagesCommand;
const deserializeAws_restJson1DescribePackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ReservedElasticsearchInstanceOfferings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ReservedElasticsearchInstanceOfferings !== undefined &&
        data.ReservedElasticsearchInstanceOfferings !== null) {
        contents.ReservedElasticsearchInstanceOfferings = deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList(data.ReservedElasticsearchInstanceOfferings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand;
const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ReservedElasticsearchInstances: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ReservedElasticsearchInstances !== undefined && data.ReservedElasticsearchInstances !== null) {
        contents.ReservedElasticsearchInstances = deserializeAws_restJson1ReservedElasticsearchInstanceList(data.ReservedElasticsearchInstances, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand;
const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1DissociatePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DissociatePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainPackageDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
        contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DissociatePackageCommand = deserializeAws_restJson1DissociatePackageCommand;
const deserializeAws_restJson1DissociatePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.elasticsearchservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompatibleElasticsearchVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompatibleElasticsearchVersions !== undefined && data.CompatibleElasticsearchVersions !== null) {
        contents.CompatibleElasticsearchVersions = deserializeAws_restJson1CompatibleElasticsearchVersionsList(data.CompatibleElasticsearchVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand;
const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1GetPackageVersionHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPackageVersionHistoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PackageID: undefined,
        PackageVersionHistoryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.PackageID !== undefined && data.PackageID !== null) {
        contents.PackageID = data.PackageID;
    }
    if (data.PackageVersionHistoryList !== undefined && data.PackageVersionHistoryList !== null) {
        contents.PackageVersionHistoryList = deserializeAws_restJson1PackageVersionHistoryList(data.PackageVersionHistoryList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPackageVersionHistoryCommand = deserializeAws_restJson1GetPackageVersionHistoryCommand;
const deserializeAws_restJson1GetPackageVersionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1GetUpgradeHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetUpgradeHistoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        UpgradeHistories: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.UpgradeHistories !== undefined && data.UpgradeHistories !== null) {
        contents.UpgradeHistories = deserializeAws_restJson1UpgradeHistoryList(data.UpgradeHistories, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUpgradeHistoryCommand = deserializeAws_restJson1GetUpgradeHistoryCommand;
const deserializeAws_restJson1GetUpgradeHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1GetUpgradeStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetUpgradeStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StepStatus: undefined,
        UpgradeName: undefined,
        UpgradeStep: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StepStatus !== undefined && data.StepStatus !== null) {
        contents.StepStatus = data.StepStatus;
    }
    if (data.UpgradeName !== undefined && data.UpgradeName !== null) {
        contents.UpgradeName = data.UpgradeName;
    }
    if (data.UpgradeStep !== undefined && data.UpgradeStep !== null) {
        contents.UpgradeStep = data.UpgradeStep;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUpgradeStatusCommand = deserializeAws_restJson1GetUpgradeStatusCommand;
const deserializeAws_restJson1GetUpgradeStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListDomainNamesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainNamesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainNames: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainNames !== undefined && data.DomainNames !== null) {
        contents.DomainNames = deserializeAws_restJson1DomainInfoList(data.DomainNames, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainNamesCommand = deserializeAws_restJson1ListDomainNamesCommand;
const deserializeAws_restJson1ListDomainNamesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListDomainsForPackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainsForPackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainPackageDetailsList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
        contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(data.DomainPackageDetailsList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainsForPackageCommand = deserializeAws_restJson1ListDomainsForPackageCommand;
const deserializeAws_restJson1ListDomainsForPackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ElasticsearchInstanceTypes: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ElasticsearchInstanceTypes !== undefined && data.ElasticsearchInstanceTypes !== null) {
        contents.ElasticsearchInstanceTypes = deserializeAws_restJson1ElasticsearchInstanceTypeList(data.ElasticsearchInstanceTypes, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = deserializeAws_restJson1ListElasticsearchInstanceTypesCommand;
const deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListElasticsearchVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListElasticsearchVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ElasticsearchVersions: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ElasticsearchVersions !== undefined && data.ElasticsearchVersions !== null) {
        contents.ElasticsearchVersions = deserializeAws_restJson1ElasticsearchVersionList(data.ElasticsearchVersions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListElasticsearchVersionsCommand = deserializeAws_restJson1ListElasticsearchVersionsCommand;
const deserializeAws_restJson1ListElasticsearchVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListPackagesForDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackagesForDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainPackageDetailsList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
        contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(data.DomainPackageDetailsList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackagesForDomainCommand = deserializeAws_restJson1ListPackagesForDomainCommand;
const deserializeAws_restJson1ListPackagesForDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1ListTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TagList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TagList !== undefined && data.TagList !== null) {
        contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
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
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ReservationName: undefined,
        ReservedElasticsearchInstanceId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ReservationName !== undefined && data.ReservationName !== null) {
        contents.ReservationName = data.ReservationName;
    }
    if (data.ReservedElasticsearchInstanceId !== undefined && data.ReservedElasticsearchInstanceId !== null) {
        contents.ReservedElasticsearchInstanceId = data.ReservedElasticsearchInstanceId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand;
const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CrossClusterSearchConnection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
        contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand;
const deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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
const deserializeAws_restJson1RemoveTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveTagsCommand = deserializeAws_restJson1RemoveTagsCommand;
const deserializeAws_restJson1RemoveTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ServiceSoftwareOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
        contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand;
const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
        contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand;
const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.elasticsearchservice#InvalidTypeException":
            response = {
                ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1UpdatePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PackageDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
        contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePackageCommand = deserializeAws_restJson1UpdatePackageCommand;
const deserializeAws_restJson1UpdatePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elasticsearchservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elasticsearchservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1UpgradeElasticsearchDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpgradeElasticsearchDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainName: undefined,
        PerformCheckOnly: undefined,
        TargetVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.PerformCheckOnly !== undefined && data.PerformCheckOnly !== null) {
        contents.PerformCheckOnly = data.PerformCheckOnly;
    }
    if (data.TargetVersion !== undefined && data.TargetVersion !== null) {
        contents.TargetVersion = data.TargetVersion;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpgradeElasticsearchDomainCommand = deserializeAws_restJson1UpgradeElasticsearchDomainCommand;
const deserializeAws_restJson1UpgradeElasticsearchDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.elasticsearchservice#BaseException":
            response = {
                ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.elasticsearchservice#DisabledOperationException":
            response = {
                ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.elasticsearchservice#InternalException":
            response = {
                ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elasticsearchservice#ValidationException":
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
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
const deserializeAws_restJson1BaseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BaseException",
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
const deserializeAws_restJson1DisabledOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DisabledOperationException",
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
const deserializeAws_restJson1InternalExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalException",
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
const deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPaginationTokenException",
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
const deserializeAws_restJson1InvalidTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidTypeException",
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
const serializeAws_restJson1AdvancedOptions = (input, context) => {
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
const serializeAws_restJson1AdvancedSecurityOptionsInput = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.InternalUserDatabaseEnabled !== undefined &&
            input.InternalUserDatabaseEnabled !== null && { InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled }),
        ...(input.MasterUserOptions !== undefined &&
            input.MasterUserOptions !== null && {
            MasterUserOptions: serializeAws_restJson1MasterUserOptions(input.MasterUserOptions, context),
        }),
        ...(input.SAMLOptions !== undefined &&
            input.SAMLOptions !== null && {
            SAMLOptions: serializeAws_restJson1SAMLOptionsInput(input.SAMLOptions, context),
        }),
    };
};
const serializeAws_restJson1AutoTuneMaintenanceSchedule = (input, context) => {
    return {
        ...(input.CronExpressionForRecurrence !== undefined &&
            input.CronExpressionForRecurrence !== null && { CronExpressionForRecurrence: input.CronExpressionForRecurrence }),
        ...(input.Duration !== undefined &&
            input.Duration !== null && { Duration: serializeAws_restJson1Duration(input.Duration, context) }),
        ...(input.StartAt !== undefined &&
            input.StartAt !== null && { StartAt: Math.round(input.StartAt.getTime() / 1000) }),
    };
};
const serializeAws_restJson1AutoTuneMaintenanceScheduleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};
const serializeAws_restJson1AutoTuneOptions = (input, context) => {
    return {
        ...(input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState }),
        ...(input.MaintenanceSchedules !== undefined &&
            input.MaintenanceSchedules !== null && {
            MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
        }),
        ...(input.RollbackOnDisable !== undefined &&
            input.RollbackOnDisable !== null && { RollbackOnDisable: input.RollbackOnDisable }),
    };
};
const serializeAws_restJson1AutoTuneOptionsInput = (input, context) => {
    return {
        ...(input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState }),
        ...(input.MaintenanceSchedules !== undefined &&
            input.MaintenanceSchedules !== null && {
            MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
        }),
    };
};
const serializeAws_restJson1CognitoOptions = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_restJson1ColdStorageOptions = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1DescribePackagesFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined &&
            input.Value !== null && { Value: serializeAws_restJson1DescribePackagesFilterValues(input.Value, context) }),
    };
};
const serializeAws_restJson1DescribePackagesFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DescribePackagesFilter(entry, context);
    });
};
const serializeAws_restJson1DescribePackagesFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DomainEndpointOptions = (input, context) => {
    return {
        ...(input.CustomEndpoint !== undefined &&
            input.CustomEndpoint !== null && { CustomEndpoint: input.CustomEndpoint }),
        ...(input.CustomEndpointCertificateArn !== undefined &&
            input.CustomEndpointCertificateArn !== null && {
            CustomEndpointCertificateArn: input.CustomEndpointCertificateArn,
        }),
        ...(input.CustomEndpointEnabled !== undefined &&
            input.CustomEndpointEnabled !== null && { CustomEndpointEnabled: input.CustomEndpointEnabled }),
        ...(input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null && { EnforceHTTPS: input.EnforceHTTPS }),
        ...(input.TLSSecurityPolicy !== undefined &&
            input.TLSSecurityPolicy !== null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
    };
};
const serializeAws_restJson1DomainInformation = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    };
};
const serializeAws_restJson1DomainNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Duration = (input, context) => {
    return {
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1EBSOptions = (input, context) => {
    return {
        ...(input.EBSEnabled !== undefined && input.EBSEnabled !== null && { EBSEnabled: input.EBSEnabled }),
        ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
        ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
        ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
    };
};
const serializeAws_restJson1ElasticsearchClusterConfig = (input, context) => {
    return {
        ...(input.ColdStorageOptions !== undefined &&
            input.ColdStorageOptions !== null && {
            ColdStorageOptions: serializeAws_restJson1ColdStorageOptions(input.ColdStorageOptions, context),
        }),
        ...(input.DedicatedMasterCount !== undefined &&
            input.DedicatedMasterCount !== null && { DedicatedMasterCount: input.DedicatedMasterCount }),
        ...(input.DedicatedMasterEnabled !== undefined &&
            input.DedicatedMasterEnabled !== null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
        ...(input.DedicatedMasterType !== undefined &&
            input.DedicatedMasterType !== null && { DedicatedMasterType: input.DedicatedMasterType }),
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.WarmCount !== undefined && input.WarmCount !== null && { WarmCount: input.WarmCount }),
        ...(input.WarmEnabled !== undefined && input.WarmEnabled !== null && { WarmEnabled: input.WarmEnabled }),
        ...(input.WarmType !== undefined && input.WarmType !== null && { WarmType: input.WarmType }),
        ...(input.ZoneAwarenessConfig !== undefined &&
            input.ZoneAwarenessConfig !== null && {
            ZoneAwarenessConfig: serializeAws_restJson1ZoneAwarenessConfig(input.ZoneAwarenessConfig, context),
        }),
        ...(input.ZoneAwarenessEnabled !== undefined &&
            input.ZoneAwarenessEnabled !== null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
    };
};
const serializeAws_restJson1EncryptionAtRestOptions = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    };
};
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1ValueStringList(input.Values, context) }),
    };
};
const serializeAws_restJson1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
const serializeAws_restJson1LogPublishingOption = (input, context) => {
    return {
        ...(input.CloudWatchLogsLogGroupArn !== undefined &&
            input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1LogPublishingOptions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1LogPublishingOption(value, context),
        };
    }, {});
};
const serializeAws_restJson1MasterUserOptions = (input, context) => {
    return {
        ...(input.MasterUserARN !== undefined && input.MasterUserARN !== null && { MasterUserARN: input.MasterUserARN }),
        ...(input.MasterUserName !== undefined &&
            input.MasterUserName !== null && { MasterUserName: input.MasterUserName }),
        ...(input.MasterUserPassword !== undefined &&
            input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword }),
    };
};
const serializeAws_restJson1NodeToNodeEncryptionOptions = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1PackageSource = (input, context) => {
    return {
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
    };
};
const serializeAws_restJson1SAMLIdp = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.MetadataContent !== undefined &&
            input.MetadataContent !== null && { MetadataContent: input.MetadataContent }),
    };
};
const serializeAws_restJson1SAMLOptionsInput = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.Idp !== undefined && input.Idp !== null && { Idp: serializeAws_restJson1SAMLIdp(input.Idp, context) }),
        ...(input.MasterBackendRole !== undefined &&
            input.MasterBackendRole !== null && { MasterBackendRole: input.MasterBackendRole }),
        ...(input.MasterUserName !== undefined &&
            input.MasterUserName !== null && { MasterUserName: input.MasterUserName }),
        ...(input.RolesKey !== undefined && input.RolesKey !== null && { RolesKey: input.RolesKey }),
        ...(input.SessionTimeoutMinutes !== undefined &&
            input.SessionTimeoutMinutes !== null && { SessionTimeoutMinutes: input.SessionTimeoutMinutes }),
        ...(input.SubjectKey !== undefined && input.SubjectKey !== null && { SubjectKey: input.SubjectKey }),
    };
};
const serializeAws_restJson1SnapshotOptions = (input, context) => {
    return {
        ...(input.AutomatedSnapshotStartHour !== undefined &&
            input.AutomatedSnapshotStartHour !== null && { AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour }),
    };
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
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1ValueStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1VPCOptions = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_restJson1StringList(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1StringList(input.SubnetIds, context) }),
    };
};
const serializeAws_restJson1ZoneAwarenessConfig = (input, context) => {
    return {
        ...(input.AvailabilityZoneCount !== undefined &&
            input.AvailabilityZoneCount !== null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
    };
};
const deserializeAws_restJson1AccessPoliciesStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdditionalLimit = (output, context) => {
    return {
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValues: output.LimitValues !== undefined && output.LimitValues !== null
            ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdditionalLimitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdditionalLimit(entry, context);
    });
};
const deserializeAws_restJson1AdvancedOptions = (output, context) => {
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
const deserializeAws_restJson1AdvancedOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AdvancedOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdvancedSecurityOptions = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        InternalUserDatabaseEnabled: output.InternalUserDatabaseEnabled !== undefined && output.InternalUserDatabaseEnabled !== null
            ? output.InternalUserDatabaseEnabled
            : undefined,
        SAMLOptions: output.SAMLOptions !== undefined && output.SAMLOptions !== null
            ? deserializeAws_restJson1SAMLOptionsOutput(output.SAMLOptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdvancedSecurityOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AdvancedSecurityOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AutoTune = (output, context) => {
    return {
        AutoTuneDetails: output.AutoTuneDetails !== undefined && output.AutoTuneDetails !== null
            ? deserializeAws_restJson1AutoTuneDetails(output.AutoTuneDetails, context)
            : undefined,
        AutoTuneType: output.AutoTuneType !== undefined && output.AutoTuneType !== null ? output.AutoTuneType : undefined,
    };
};
const deserializeAws_restJson1AutoTuneDetails = (output, context) => {
    return {
        ScheduledAutoTuneDetails: output.ScheduledAutoTuneDetails !== undefined && output.ScheduledAutoTuneDetails !== null
            ? deserializeAws_restJson1ScheduledAutoTuneDetails(output.ScheduledAutoTuneDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1AutoTuneList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoTune(entry, context);
    });
};
const deserializeAws_restJson1AutoTuneMaintenanceSchedule = (output, context) => {
    return {
        CronExpressionForRecurrence: output.CronExpressionForRecurrence !== undefined && output.CronExpressionForRecurrence !== null
            ? output.CronExpressionForRecurrence
            : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null
            ? deserializeAws_restJson1Duration(output.Duration, context)
            : undefined,
        StartAt: output.StartAt !== undefined && output.StartAt !== null ? new Date(Math.round(output.StartAt * 1000)) : undefined,
    };
};
const deserializeAws_restJson1AutoTuneMaintenanceScheduleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};
const deserializeAws_restJson1AutoTuneOptions = (output, context) => {
    return {
        DesiredState: output.DesiredState !== undefined && output.DesiredState !== null ? output.DesiredState : undefined,
        MaintenanceSchedules: output.MaintenanceSchedules !== undefined && output.MaintenanceSchedules !== null
            ? deserializeAws_restJson1AutoTuneMaintenanceScheduleList(output.MaintenanceSchedules, context)
            : undefined,
        RollbackOnDisable: output.RollbackOnDisable !== undefined && output.RollbackOnDisable !== null
            ? output.RollbackOnDisable
            : undefined,
    };
};
const deserializeAws_restJson1AutoTuneOptionsOutput = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1AutoTuneOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AutoTuneOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1AutoTuneStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1AutoTuneStatus = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        PendingDeletion: output.PendingDeletion !== undefined && output.PendingDeletion !== null ? output.PendingDeletion : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null
            ? new Date(Math.round(output.UpdateDate * 1000))
            : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null ? output.UpdateVersion : undefined,
    };
};
const deserializeAws_restJson1CognitoOptions = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
const deserializeAws_restJson1CognitoOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1CognitoOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ColdStorageOptions = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1CompatibleElasticsearchVersionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CompatibleVersionsMap(entry, context);
    });
};
const deserializeAws_restJson1CompatibleVersionsMap = (output, context) => {
    return {
        SourceVersion: output.SourceVersion !== undefined && output.SourceVersion !== null ? output.SourceVersion : undefined,
        TargetVersions: output.TargetVersions !== undefined && output.TargetVersions !== null
            ? deserializeAws_restJson1ElasticsearchVersionList(output.TargetVersions, context)
            : undefined,
    };
};
const deserializeAws_restJson1DomainEndpointOptions = (output, context) => {
    return {
        CustomEndpoint: output.CustomEndpoint !== undefined && output.CustomEndpoint !== null ? output.CustomEndpoint : undefined,
        CustomEndpointCertificateArn: output.CustomEndpointCertificateArn !== undefined && output.CustomEndpointCertificateArn !== null
            ? output.CustomEndpointCertificateArn
            : undefined,
        CustomEndpointEnabled: output.CustomEndpointEnabled !== undefined && output.CustomEndpointEnabled !== null
            ? output.CustomEndpointEnabled
            : undefined,
        EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
        TLSSecurityPolicy: output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null
            ? output.TLSSecurityPolicy
            : undefined,
    };
};
const deserializeAws_restJson1DomainEndpointOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1DomainEndpointOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1DomainInfo = (output, context) => {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    };
};
const deserializeAws_restJson1DomainInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainInfo(entry, context);
    });
};
const deserializeAws_restJson1DomainInformation = (output, context) => {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
const deserializeAws_restJson1DomainPackageDetails = (output, context) => {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        DomainPackageStatus: output.DomainPackageStatus !== undefined && output.DomainPackageStatus !== null
            ? output.DomainPackageStatus
            : undefined,
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        PackageID: output.PackageID !== undefined && output.PackageID !== null ? output.PackageID : undefined,
        PackageName: output.PackageName !== undefined && output.PackageName !== null ? output.PackageName : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
        PackageVersion: output.PackageVersion !== undefined && output.PackageVersion !== null ? output.PackageVersion : undefined,
        ReferencePath: output.ReferencePath !== undefined && output.ReferencePath !== null ? output.ReferencePath : undefined,
    };
};
const deserializeAws_restJson1DomainPackageDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainPackageDetails(entry, context);
    });
};
const deserializeAws_restJson1Duration = (output, context) => {
    return {
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1EBSOptions = (output, context) => {
    return {
        EBSEnabled: output.EBSEnabled !== undefined && output.EBSEnabled !== null ? output.EBSEnabled : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        VolumeSize: output.VolumeSize !== undefined && output.VolumeSize !== null ? output.VolumeSize : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_restJson1EBSOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1EBSOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ElasticsearchClusterConfig = (output, context) => {
    return {
        ColdStorageOptions: output.ColdStorageOptions !== undefined && output.ColdStorageOptions !== null
            ? deserializeAws_restJson1ColdStorageOptions(output.ColdStorageOptions, context)
            : undefined,
        DedicatedMasterCount: output.DedicatedMasterCount !== undefined && output.DedicatedMasterCount !== null
            ? output.DedicatedMasterCount
            : undefined,
        DedicatedMasterEnabled: output.DedicatedMasterEnabled !== undefined && output.DedicatedMasterEnabled !== null
            ? output.DedicatedMasterEnabled
            : undefined,
        DedicatedMasterType: output.DedicatedMasterType !== undefined && output.DedicatedMasterType !== null
            ? output.DedicatedMasterType
            : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        WarmCount: output.WarmCount !== undefined && output.WarmCount !== null ? output.WarmCount : undefined,
        WarmEnabled: output.WarmEnabled !== undefined && output.WarmEnabled !== null ? output.WarmEnabled : undefined,
        WarmType: output.WarmType !== undefined && output.WarmType !== null ? output.WarmType : undefined,
        ZoneAwarenessConfig: output.ZoneAwarenessConfig !== undefined && output.ZoneAwarenessConfig !== null
            ? deserializeAws_restJson1ZoneAwarenessConfig(output.ZoneAwarenessConfig, context)
            : undefined,
        ZoneAwarenessEnabled: output.ZoneAwarenessEnabled !== undefined && output.ZoneAwarenessEnabled !== null
            ? output.ZoneAwarenessEnabled
            : undefined,
    };
};
const deserializeAws_restJson1ElasticsearchClusterConfigStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfig(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ElasticsearchDomainConfig = (output, context) => {
    return {
        AccessPolicies: output.AccessPolicies !== undefined && output.AccessPolicies !== null
            ? deserializeAws_restJson1AccessPoliciesStatus(output.AccessPolicies, context)
            : undefined,
        AdvancedOptions: output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
            ? deserializeAws_restJson1AdvancedOptionsStatus(output.AdvancedOptions, context)
            : undefined,
        AdvancedSecurityOptions: output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
            ? deserializeAws_restJson1AdvancedSecurityOptionsStatus(output.AdvancedSecurityOptions, context)
            : undefined,
        AutoTuneOptions: output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
            ? deserializeAws_restJson1AutoTuneOptionsStatus(output.AutoTuneOptions, context)
            : undefined,
        CognitoOptions: output.CognitoOptions !== undefined && output.CognitoOptions !== null
            ? deserializeAws_restJson1CognitoOptionsStatus(output.CognitoOptions, context)
            : undefined,
        DomainEndpointOptions: output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
            ? deserializeAws_restJson1DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
            : undefined,
        EBSOptions: output.EBSOptions !== undefined && output.EBSOptions !== null
            ? deserializeAws_restJson1EBSOptionsStatus(output.EBSOptions, context)
            : undefined,
        ElasticsearchClusterConfig: output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfigStatus(output.ElasticsearchClusterConfig, context)
            : undefined,
        ElasticsearchVersion: output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
            ? deserializeAws_restJson1ElasticsearchVersionStatus(output.ElasticsearchVersion, context)
            : undefined,
        EncryptionAtRestOptions: output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
            ? deserializeAws_restJson1EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
            : undefined,
        LogPublishingOptions: output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
            ? deserializeAws_restJson1LogPublishingOptionsStatus(output.LogPublishingOptions, context)
            : undefined,
        NodeToNodeEncryptionOptions: output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
            : undefined,
        SnapshotOptions: output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
            ? deserializeAws_restJson1SnapshotOptionsStatus(output.SnapshotOptions, context)
            : undefined,
        VPCOptions: output.VPCOptions !== undefined && output.VPCOptions !== null
            ? deserializeAws_restJson1VPCDerivedInfoStatus(output.VPCOptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1ElasticsearchDomainStatus = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        AccessPolicies: output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
        AdvancedOptions: output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
            ? deserializeAws_restJson1AdvancedOptions(output.AdvancedOptions, context)
            : undefined,
        AdvancedSecurityOptions: output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
            ? deserializeAws_restJson1AdvancedSecurityOptions(output.AdvancedSecurityOptions, context)
            : undefined,
        AutoTuneOptions: output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
            ? deserializeAws_restJson1AutoTuneOptionsOutput(output.AutoTuneOptions, context)
            : undefined,
        CognitoOptions: output.CognitoOptions !== undefined && output.CognitoOptions !== null
            ? deserializeAws_restJson1CognitoOptions(output.CognitoOptions, context)
            : undefined,
        Created: output.Created !== undefined && output.Created !== null ? output.Created : undefined,
        Deleted: output.Deleted !== undefined && output.Deleted !== null ? output.Deleted : undefined,
        DomainEndpointOptions: output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
            ? deserializeAws_restJson1DomainEndpointOptions(output.DomainEndpointOptions, context)
            : undefined,
        DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        EBSOptions: output.EBSOptions !== undefined && output.EBSOptions !== null
            ? deserializeAws_restJson1EBSOptions(output.EBSOptions, context)
            : undefined,
        ElasticsearchClusterConfig: output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfig(output.ElasticsearchClusterConfig, context)
            : undefined,
        ElasticsearchVersion: output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
            ? output.ElasticsearchVersion
            : undefined,
        EncryptionAtRestOptions: output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
            ? deserializeAws_restJson1EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_restJson1EndpointsMap(output.Endpoints, context)
            : undefined,
        LogPublishingOptions: output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
            ? deserializeAws_restJson1LogPublishingOptions(output.LogPublishingOptions, context)
            : undefined,
        NodeToNodeEncryptionOptions: output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
            : undefined,
        Processing: output.Processing !== undefined && output.Processing !== null ? output.Processing : undefined,
        ServiceSoftwareOptions: output.ServiceSoftwareOptions !== undefined && output.ServiceSoftwareOptions !== null
            ? deserializeAws_restJson1ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
            : undefined,
        SnapshotOptions: output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
            ? deserializeAws_restJson1SnapshotOptions(output.SnapshotOptions, context)
            : undefined,
        UpgradeProcessing: output.UpgradeProcessing !== undefined && output.UpgradeProcessing !== null
            ? output.UpgradeProcessing
            : undefined,
        VPCOptions: output.VPCOptions !== undefined && output.VPCOptions !== null
            ? deserializeAws_restJson1VPCDerivedInfo(output.VPCOptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1ElasticsearchDomainStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ElasticsearchDomainStatus(entry, context);
    });
};
const deserializeAws_restJson1ElasticsearchInstanceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ElasticsearchVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ElasticsearchVersionStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionAtRestOptions = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    };
};
const deserializeAws_restJson1EncryptionAtRestOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1EncryptionAtRestOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointsMap = (output, context) => {
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
const deserializeAws_restJson1ErrorDetails = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ErrorType: output.ErrorType !== undefined && output.ErrorType !== null ? output.ErrorType : undefined,
    };
};
const deserializeAws_restJson1InboundCrossClusterSearchConnection = (output, context) => {
    return {
        ConnectionStatus: output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
            ? deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
            : undefined,
        CrossClusterSearchConnectionId: output.CrossClusterSearchConnectionId !== undefined && output.CrossClusterSearchConnectionId !== null
            ? output.CrossClusterSearchConnectionId
            : undefined,
        DestinationDomainInfo: output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
            : undefined,
        SourceDomainInfo: output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
            : undefined,
    };
};
const deserializeAws_restJson1InboundCrossClusterSearchConnections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InboundCrossClusterSearchConnection(entry, context);
    });
};
const deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
const deserializeAws_restJson1InstanceCountLimits = (output, context) => {
    return {
        MaximumInstanceCount: output.MaximumInstanceCount !== undefined && output.MaximumInstanceCount !== null
            ? output.MaximumInstanceCount
            : undefined,
        MinimumInstanceCount: output.MinimumInstanceCount !== undefined && output.MinimumInstanceCount !== null
            ? output.MinimumInstanceCount
            : undefined,
    };
};
const deserializeAws_restJson1InstanceLimits = (output, context) => {
    return {
        InstanceCountLimits: output.InstanceCountLimits !== undefined && output.InstanceCountLimits !== null
            ? deserializeAws_restJson1InstanceCountLimits(output.InstanceCountLimits, context)
            : undefined,
    };
};
const deserializeAws_restJson1Issues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Limits = (output, context) => {
    return {
        AdditionalLimits: output.AdditionalLimits !== undefined && output.AdditionalLimits !== null
            ? deserializeAws_restJson1AdditionalLimitList(output.AdditionalLimits, context)
            : undefined,
        InstanceLimits: output.InstanceLimits !== undefined && output.InstanceLimits !== null
            ? deserializeAws_restJson1InstanceLimits(output.InstanceLimits, context)
            : undefined,
        StorageTypes: output.StorageTypes !== undefined && output.StorageTypes !== null
            ? deserializeAws_restJson1StorageTypeList(output.StorageTypes, context)
            : undefined,
    };
};
const deserializeAws_restJson1LimitsByRole = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1Limits(value, context),
        };
    }, {});
};
const deserializeAws_restJson1LimitValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LogPublishingOption = (output, context) => {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1LogPublishingOptions = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1LogPublishingOption(value, context),
        };
    }, {});
};
const deserializeAws_restJson1LogPublishingOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1LogPublishingOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodeToNodeEncryptionOptions = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1OptionStatus = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        PendingDeletion: output.PendingDeletion !== undefined && output.PendingDeletion !== null ? output.PendingDeletion : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null
            ? new Date(Math.round(output.UpdateDate * 1000))
            : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null ? output.UpdateVersion : undefined,
    };
};
const deserializeAws_restJson1OutboundCrossClusterSearchConnection = (output, context) => {
    return {
        ConnectionAlias: output.ConnectionAlias !== undefined && output.ConnectionAlias !== null ? output.ConnectionAlias : undefined,
        ConnectionStatus: output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
            ? deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
            : undefined,
        CrossClusterSearchConnectionId: output.CrossClusterSearchConnectionId !== undefined && output.CrossClusterSearchConnectionId !== null
            ? output.CrossClusterSearchConnectionId
            : undefined,
        DestinationDomainInfo: output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
            : undefined,
        SourceDomainInfo: output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutboundCrossClusterSearchConnections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutboundCrossClusterSearchConnection(entry, context);
    });
};
const deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
const deserializeAws_restJson1PackageDetails = (output, context) => {
    return {
        AvailablePackageVersion: output.AvailablePackageVersion !== undefined && output.AvailablePackageVersion !== null
            ? output.AvailablePackageVersion
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        PackageDescription: output.PackageDescription !== undefined && output.PackageDescription !== null
            ? output.PackageDescription
            : undefined,
        PackageID: output.PackageID !== undefined && output.PackageID !== null ? output.PackageID : undefined,
        PackageName: output.PackageName !== undefined && output.PackageName !== null ? output.PackageName : undefined,
        PackageStatus: output.PackageStatus !== undefined && output.PackageStatus !== null ? output.PackageStatus : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
    };
};
const deserializeAws_restJson1PackageDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageDetails(entry, context);
    });
};
const deserializeAws_restJson1PackageVersionHistory = (output, context) => {
    return {
        CommitMessage: output.CommitMessage !== undefined && output.CommitMessage !== null ? output.CommitMessage : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        PackageVersion: output.PackageVersion !== undefined && output.PackageVersion !== null ? output.PackageVersion : undefined,
    };
};
const deserializeAws_restJson1PackageVersionHistoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageVersionHistory(entry, context);
    });
};
const deserializeAws_restJson1RecurringCharge = (output, context) => {
    return {
        RecurringChargeAmount: output.RecurringChargeAmount !== undefined && output.RecurringChargeAmount !== null
            ? output.RecurringChargeAmount
            : undefined,
        RecurringChargeFrequency: output.RecurringChargeFrequency !== undefined && output.RecurringChargeFrequency !== null
            ? output.RecurringChargeFrequency
            : undefined,
    };
};
const deserializeAws_restJson1RecurringChargeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecurringCharge(entry, context);
    });
};
const deserializeAws_restJson1ReservedElasticsearchInstance = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        ElasticsearchInstanceCount: output.ElasticsearchInstanceCount !== undefined && output.ElasticsearchInstanceCount !== null
            ? output.ElasticsearchInstanceCount
            : undefined,
        ElasticsearchInstanceType: output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
            ? output.ElasticsearchInstanceType
            : undefined,
        FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecurringCharges: output.RecurringCharges !== undefined && output.RecurringCharges !== null
            ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
            : undefined,
        ReservationName: output.ReservationName !== undefined && output.ReservationName !== null ? output.ReservationName : undefined,
        ReservedElasticsearchInstanceId: output.ReservedElasticsearchInstanceId !== undefined && output.ReservedElasticsearchInstanceId !== null
            ? output.ReservedElasticsearchInstanceId
            : undefined,
        ReservedElasticsearchInstanceOfferingId: output.ReservedElasticsearchInstanceOfferingId !== undefined &&
            output.ReservedElasticsearchInstanceOfferingId !== null
            ? output.ReservedElasticsearchInstanceOfferingId
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined,
    };
};
const deserializeAws_restJson1ReservedElasticsearchInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReservedElasticsearchInstance(entry, context);
    });
};
const deserializeAws_restJson1ReservedElasticsearchInstanceOffering = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        ElasticsearchInstanceType: output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
            ? output.ElasticsearchInstanceType
            : undefined,
        FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecurringCharges: output.RecurringCharges !== undefined && output.RecurringCharges !== null
            ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
            : undefined,
        ReservedElasticsearchInstanceOfferingId: output.ReservedElasticsearchInstanceOfferingId !== undefined &&
            output.ReservedElasticsearchInstanceOfferingId !== null
            ? output.ReservedElasticsearchInstanceOfferingId
            : undefined,
        UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined,
    };
};
const deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReservedElasticsearchInstanceOffering(entry, context);
    });
};
const deserializeAws_restJson1SAMLIdp = (output, context) => {
    return {
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        MetadataContent: output.MetadataContent !== undefined && output.MetadataContent !== null ? output.MetadataContent : undefined,
    };
};
const deserializeAws_restJson1SAMLOptionsOutput = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        Idp: output.Idp !== undefined && output.Idp !== null
            ? deserializeAws_restJson1SAMLIdp(output.Idp, context)
            : undefined,
        RolesKey: output.RolesKey !== undefined && output.RolesKey !== null ? output.RolesKey : undefined,
        SessionTimeoutMinutes: output.SessionTimeoutMinutes !== undefined && output.SessionTimeoutMinutes !== null
            ? output.SessionTimeoutMinutes
            : undefined,
        SubjectKey: output.SubjectKey !== undefined && output.SubjectKey !== null ? output.SubjectKey : undefined,
    };
};
const deserializeAws_restJson1ScheduledAutoTuneDetails = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        ActionType: output.ActionType !== undefined && output.ActionType !== null ? output.ActionType : undefined,
        Date: output.Date !== undefined && output.Date !== null ? new Date(Math.round(output.Date * 1000)) : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    };
};
const deserializeAws_restJson1ServiceSoftwareOptions = (output, context) => {
    return {
        AutomatedUpdateDate: output.AutomatedUpdateDate !== undefined && output.AutomatedUpdateDate !== null
            ? new Date(Math.round(output.AutomatedUpdateDate * 1000))
            : undefined,
        Cancellable: output.Cancellable !== undefined && output.Cancellable !== null ? output.Cancellable : undefined,
        CurrentVersion: output.CurrentVersion !== undefined && output.CurrentVersion !== null ? output.CurrentVersion : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        NewVersion: output.NewVersion !== undefined && output.NewVersion !== null ? output.NewVersion : undefined,
        OptionalDeployment: output.OptionalDeployment !== undefined && output.OptionalDeployment !== null
            ? output.OptionalDeployment
            : undefined,
        UpdateAvailable: output.UpdateAvailable !== undefined && output.UpdateAvailable !== null ? output.UpdateAvailable : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
const deserializeAws_restJson1SnapshotOptions = (output, context) => {
    return {
        AutomatedSnapshotStartHour: output.AutomatedSnapshotStartHour !== undefined && output.AutomatedSnapshotStartHour !== null
            ? output.AutomatedSnapshotStartHour
            : undefined,
    };
};
const deserializeAws_restJson1SnapshotOptionsStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1SnapshotOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1StorageType = (output, context) => {
    return {
        StorageSubTypeName: output.StorageSubTypeName !== undefined && output.StorageSubTypeName !== null
            ? output.StorageSubTypeName
            : undefined,
        StorageTypeLimits: output.StorageTypeLimits !== undefined && output.StorageTypeLimits !== null
            ? deserializeAws_restJson1StorageTypeLimitList(output.StorageTypeLimits, context)
            : undefined,
        StorageTypeName: output.StorageTypeName !== undefined && output.StorageTypeName !== null ? output.StorageTypeName : undefined,
    };
};
const deserializeAws_restJson1StorageTypeLimit = (output, context) => {
    return {
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValues: output.LimitValues !== undefined && output.LimitValues !== null
            ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
            : undefined,
    };
};
const deserializeAws_restJson1StorageTypeLimitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StorageTypeLimit(entry, context);
    });
};
const deserializeAws_restJson1StorageTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StorageType(entry, context);
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
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1UpgradeHistory = (output, context) => {
    return {
        StartTimestamp: output.StartTimestamp !== undefined && output.StartTimestamp !== null
            ? new Date(Math.round(output.StartTimestamp * 1000))
            : undefined,
        StepsList: output.StepsList !== undefined && output.StepsList !== null
            ? deserializeAws_restJson1UpgradeStepsList(output.StepsList, context)
            : undefined,
        UpgradeName: output.UpgradeName !== undefined && output.UpgradeName !== null ? output.UpgradeName : undefined,
        UpgradeStatus: output.UpgradeStatus !== undefined && output.UpgradeStatus !== null ? output.UpgradeStatus : undefined,
    };
};
const deserializeAws_restJson1UpgradeHistoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpgradeHistory(entry, context);
    });
};
const deserializeAws_restJson1UpgradeStepItem = (output, context) => {
    return {
        Issues: output.Issues !== undefined && output.Issues !== null
            ? deserializeAws_restJson1Issues(output.Issues, context)
            : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        UpgradeStep: output.UpgradeStep !== undefined && output.UpgradeStep !== null ? output.UpgradeStep : undefined,
        UpgradeStepStatus: output.UpgradeStepStatus !== undefined && output.UpgradeStepStatus !== null
            ? output.UpgradeStepStatus
            : undefined,
    };
};
const deserializeAws_restJson1UpgradeStepsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpgradeStepItem(entry, context);
    });
};
const deserializeAws_restJson1VPCDerivedInfo = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1StringList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1StringList(output.SubnetIds, context)
            : undefined,
        VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
    };
};
const deserializeAws_restJson1VPCDerivedInfoStatus = (output, context) => {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1VPCDerivedInfo(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ZoneAwarenessConfig = (output, context) => {
    return {
        AvailabilityZoneCount: output.AvailabilityZoneCount !== undefined && output.AvailabilityZoneCount !== null
            ? output.AvailabilityZoneCount
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