"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListDevicesCommand = exports.deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = exports.deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = exports.deserializeAws_restJson1DisassociateDomainCommand = exports.deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = exports.deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand = exports.deserializeAws_restJson1DescribeFleetMetadataCommand = exports.deserializeAws_restJson1DescribeDomainCommand = exports.deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand = exports.deserializeAws_restJson1DescribeDeviceCommand = exports.deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = exports.deserializeAws_restJson1DescribeAuditStreamConfigurationCommand = exports.deserializeAws_restJson1DeleteFleetCommand = exports.deserializeAws_restJson1CreateFleetCommand = exports.deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = exports.deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = exports.deserializeAws_restJson1AssociateDomainCommand = exports.serializeAws_restJson1UpdateIdentityProviderConfigurationCommand = exports.serializeAws_restJson1UpdateFleetMetadataCommand = exports.serializeAws_restJson1UpdateDomainMetadataCommand = exports.serializeAws_restJson1UpdateDevicePolicyConfigurationCommand = exports.serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = exports.serializeAws_restJson1UpdateAuditStreamConfigurationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SignOutUserCommand = exports.serializeAws_restJson1RevokeDomainAccessCommand = exports.serializeAws_restJson1RestoreDomainAccessCommand = exports.serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = exports.serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListFleetsCommand = exports.serializeAws_restJson1ListDomainsCommand = exports.serializeAws_restJson1ListDevicesCommand = exports.serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = exports.serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = exports.serializeAws_restJson1DisassociateDomainCommand = exports.serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = exports.serializeAws_restJson1DescribeIdentityProviderConfigurationCommand = exports.serializeAws_restJson1DescribeFleetMetadataCommand = exports.serializeAws_restJson1DescribeDomainCommand = exports.serializeAws_restJson1DescribeDevicePolicyConfigurationCommand = exports.serializeAws_restJson1DescribeDeviceCommand = exports.serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = exports.serializeAws_restJson1DescribeAuditStreamConfigurationCommand = exports.serializeAws_restJson1DeleteFleetCommand = exports.serializeAws_restJson1CreateFleetCommand = exports.serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = exports.serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = exports.serializeAws_restJson1AssociateDomainCommand = void 0;
exports.deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand = exports.deserializeAws_restJson1UpdateFleetMetadataCommand = exports.deserializeAws_restJson1UpdateDomainMetadataCommand = exports.deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand = exports.deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = exports.deserializeAws_restJson1UpdateAuditStreamConfigurationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SignOutUserCommand = exports.deserializeAws_restJson1RevokeDomainAccessCommand = exports.deserializeAws_restJson1RestoreDomainAccessCommand = exports.deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = exports.deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListFleetsCommand = exports.deserializeAws_restJson1ListDomainsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AssociateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associateDomain";
    let body;
    body = JSON.stringify({
        ...(input.AcmCertificateArn !== undefined &&
            input.AcmCertificateArn !== null && { AcmCertificateArn: input.AcmCertificateArn }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1AssociateDomainCommand = serializeAws_restJson1AssociateDomainCommand;
const serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associateWebsiteAuthorizationProvider";
    let body;
    body = JSON.stringify({
        ...(input.AuthorizationProviderType !== undefined &&
            input.AuthorizationProviderType !== null && { AuthorizationProviderType: input.AuthorizationProviderType }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand;
const serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associateWebsiteCertificateAuthority";
    let body;
    body = JSON.stringify({
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand;
const serializeAws_restJson1CreateFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createFleet";
    let body;
    body = JSON.stringify({
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
        ...(input.OptimizeForEndUserLocation !== undefined &&
            input.OptimizeForEndUserLocation !== null && { OptimizeForEndUserLocation: input.OptimizeForEndUserLocation }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateFleetCommand = serializeAws_restJson1CreateFleetCommand;
const serializeAws_restJson1DeleteFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteFleet";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DeleteFleetCommand = serializeAws_restJson1DeleteFleetCommand;
const serializeAws_restJson1DescribeAuditStreamConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeAuditStreamConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeAuditStreamConfigurationCommand = serializeAws_restJson1DescribeAuditStreamConfigurationCommand;
const serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeCompanyNetworkConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand;
const serializeAws_restJson1DescribeDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeDevice";
    let body;
    body = JSON.stringify({
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeDeviceCommand = serializeAws_restJson1DescribeDeviceCommand;
const serializeAws_restJson1DescribeDevicePolicyConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeDevicePolicyConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeDevicePolicyConfigurationCommand = serializeAws_restJson1DescribeDevicePolicyConfigurationCommand;
const serializeAws_restJson1DescribeDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeDomain";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeDomainCommand = serializeAws_restJson1DescribeDomainCommand;
const serializeAws_restJson1DescribeFleetMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeFleetMetadata";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeFleetMetadataCommand = serializeAws_restJson1DescribeFleetMetadataCommand;
const serializeAws_restJson1DescribeIdentityProviderConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeIdentityProviderConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DescribeIdentityProviderConfigurationCommand = serializeAws_restJson1DescribeIdentityProviderConfigurationCommand;
const serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeWebsiteCertificateAuthority";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.WebsiteCaId !== undefined && input.WebsiteCaId !== null && { WebsiteCaId: input.WebsiteCaId }),
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
exports.serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand;
const serializeAws_restJson1DisassociateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/disassociateDomain";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DisassociateDomainCommand = serializeAws_restJson1DisassociateDomainCommand;
const serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/disassociateWebsiteAuthorizationProvider";
    let body;
    body = JSON.stringify({
        ...(input.AuthorizationProviderId !== undefined &&
            input.AuthorizationProviderId !== null && { AuthorizationProviderId: input.AuthorizationProviderId }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand;
const serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/disassociateWebsiteCertificateAuthority";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.WebsiteCaId !== undefined && input.WebsiteCaId !== null && { WebsiteCaId: input.WebsiteCaId }),
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
exports.serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand;
const serializeAws_restJson1ListDevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listDevices";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1ListDevicesCommand = serializeAws_restJson1ListDevicesCommand;
const serializeAws_restJson1ListDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listDomains";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1ListDomainsCommand = serializeAws_restJson1ListDomainsCommand;
const serializeAws_restJson1ListFleetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listFleets";
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
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListFleetsCommand = serializeAws_restJson1ListFleetsCommand;
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
const serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWebsiteAuthorizationProviders";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand;
const serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listWebsiteCertificateAuthorities";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand;
const serializeAws_restJson1RestoreDomainAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/restoreDomainAccess";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1RestoreDomainAccessCommand = serializeAws_restJson1RestoreDomainAccessCommand;
const serializeAws_restJson1RevokeDomainAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/revokeDomainAccess";
    let body;
    body = JSON.stringify({
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1RevokeDomainAccessCommand = serializeAws_restJson1RevokeDomainAccessCommand;
const serializeAws_restJson1SignOutUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signOutUser";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
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
exports.serializeAws_restJson1SignOutUserCommand = serializeAws_restJson1SignOutUserCommand;
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
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
const serializeAws_restJson1UpdateAuditStreamConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateAuditStreamConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.AuditStreamArn !== undefined &&
            input.AuditStreamArn !== null && { AuditStreamArn: input.AuditStreamArn }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1UpdateAuditStreamConfigurationCommand = serializeAws_restJson1UpdateAuditStreamConfigurationCommand;
const serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateCompanyNetworkConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
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
exports.serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand;
const serializeAws_restJson1UpdateDevicePolicyConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateDevicePolicyConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.DeviceCaCertificate !== undefined &&
            input.DeviceCaCertificate !== null && { DeviceCaCertificate: input.DeviceCaCertificate }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1UpdateDevicePolicyConfigurationCommand = serializeAws_restJson1UpdateDevicePolicyConfigurationCommand;
const serializeAws_restJson1UpdateDomainMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateDomainMetadata";
    let body;
    body = JSON.stringify({
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
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
exports.serializeAws_restJson1UpdateDomainMetadataCommand = serializeAws_restJson1UpdateDomainMetadataCommand;
const serializeAws_restJson1UpdateFleetMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateFleetMetadata";
    let body;
    body = JSON.stringify({
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.OptimizeForEndUserLocation !== undefined &&
            input.OptimizeForEndUserLocation !== null && { OptimizeForEndUserLocation: input.OptimizeForEndUserLocation }),
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
exports.serializeAws_restJson1UpdateFleetMetadataCommand = serializeAws_restJson1UpdateFleetMetadataCommand;
const serializeAws_restJson1UpdateIdentityProviderConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateIdentityProviderConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
        ...(input.IdentityProviderSamlMetadata !== undefined &&
            input.IdentityProviderSamlMetadata !== null && {
            IdentityProviderSamlMetadata: input.IdentityProviderSamlMetadata,
        }),
        ...(input.IdentityProviderType !== undefined &&
            input.IdentityProviderType !== null && { IdentityProviderType: input.IdentityProviderType }),
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
exports.serializeAws_restJson1UpdateIdentityProviderConfigurationCommand = serializeAws_restJson1UpdateIdentityProviderConfigurationCommand;
const deserializeAws_restJson1AssociateDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateDomainCommand = deserializeAws_restJson1AssociateDomainCommand;
const deserializeAws_restJson1AssociateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.worklink#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AuthorizationProviderId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AuthorizationProviderId !== undefined && data.AuthorizationProviderId !== null) {
        contents.AuthorizationProviderId = data.AuthorizationProviderId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand;
const deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.worklink#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        WebsiteCaId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.WebsiteCaId !== undefined && data.WebsiteCaId !== null) {
        contents.WebsiteCaId = data.WebsiteCaId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand;
const deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.worklink#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1CreateFleetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFleetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FleetArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FleetArn !== undefined && data.FleetArn !== null) {
        contents.FleetArn = data.FleetArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFleetCommand = deserializeAws_restJson1CreateFleetCommand;
const deserializeAws_restJson1CreateFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.worklink#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DeleteFleetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFleetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFleetCommand = deserializeAws_restJson1DeleteFleetCommand;
const deserializeAws_restJson1DeleteFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeAuditStreamConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAuditStreamConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AuditStreamArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AuditStreamArn !== undefined && data.AuditStreamArn !== null) {
        contents.AuditStreamArn = data.AuditStreamArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAuditStreamConfigurationCommand = deserializeAws_restJson1DescribeAuditStreamConfigurationCommand;
const deserializeAws_restJson1DescribeAuditStreamConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SecurityGroupIds: undefined,
        SubnetIds: undefined,
        VpcId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SecurityGroupIds !== undefined && data.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIds(data.SecurityGroupIds, context);
    }
    if (data.SubnetIds !== undefined && data.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_restJson1SubnetIds(data.SubnetIds, context);
    }
    if (data.VpcId !== undefined && data.VpcId !== null) {
        contents.VpcId = data.VpcId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand;
const deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FirstAccessedTime: undefined,
        LastAccessedTime: undefined,
        Manufacturer: undefined,
        Model: undefined,
        OperatingSystem: undefined,
        OperatingSystemVersion: undefined,
        PatchLevel: undefined,
        Status: undefined,
        Username: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FirstAccessedTime !== undefined && data.FirstAccessedTime !== null) {
        contents.FirstAccessedTime = new Date(Math.round(data.FirstAccessedTime * 1000));
    }
    if (data.LastAccessedTime !== undefined && data.LastAccessedTime !== null) {
        contents.LastAccessedTime = new Date(Math.round(data.LastAccessedTime * 1000));
    }
    if (data.Manufacturer !== undefined && data.Manufacturer !== null) {
        contents.Manufacturer = data.Manufacturer;
    }
    if (data.Model !== undefined && data.Model !== null) {
        contents.Model = data.Model;
    }
    if (data.OperatingSystem !== undefined && data.OperatingSystem !== null) {
        contents.OperatingSystem = data.OperatingSystem;
    }
    if (data.OperatingSystemVersion !== undefined && data.OperatingSystemVersion !== null) {
        contents.OperatingSystemVersion = data.OperatingSystemVersion;
    }
    if (data.PatchLevel !== undefined && data.PatchLevel !== null) {
        contents.PatchLevel = data.PatchLevel;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.Username !== undefined && data.Username !== null) {
        contents.Username = data.Username;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDeviceCommand = deserializeAws_restJson1DescribeDeviceCommand;
const deserializeAws_restJson1DescribeDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDevicePolicyConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceCaCertificate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeviceCaCertificate !== undefined && data.DeviceCaCertificate !== null) {
        contents.DeviceCaCertificate = data.DeviceCaCertificate;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand = deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand;
const deserializeAws_restJson1DescribeDevicePolicyConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AcmCertificateArn: undefined,
        CreatedTime: undefined,
        DisplayName: undefined,
        DomainName: undefined,
        DomainStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AcmCertificateArn !== undefined && data.AcmCertificateArn !== null) {
        contents.AcmCertificateArn = data.AcmCertificateArn;
    }
    if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
    }
    if (data.DisplayName !== undefined && data.DisplayName !== null) {
        contents.DisplayName = data.DisplayName;
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
        contents.DomainStatus = data.DomainStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDomainCommand = deserializeAws_restJson1DescribeDomainCommand;
const deserializeAws_restJson1DescribeDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeFleetMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFleetMetadataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompanyCode: undefined,
        CreatedTime: undefined,
        DisplayName: undefined,
        FleetName: undefined,
        FleetStatus: undefined,
        LastUpdatedTime: undefined,
        OptimizeForEndUserLocation: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompanyCode !== undefined && data.CompanyCode !== null) {
        contents.CompanyCode = data.CompanyCode;
    }
    if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
    }
    if (data.DisplayName !== undefined && data.DisplayName !== null) {
        contents.DisplayName = data.DisplayName;
    }
    if (data.FleetName !== undefined && data.FleetName !== null) {
        contents.FleetName = data.FleetName;
    }
    if (data.FleetStatus !== undefined && data.FleetStatus !== null) {
        contents.FleetStatus = data.FleetStatus;
    }
    if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(data.LastUpdatedTime * 1000));
    }
    if (data.OptimizeForEndUserLocation !== undefined && data.OptimizeForEndUserLocation !== null) {
        contents.OptimizeForEndUserLocation = data.OptimizeForEndUserLocation;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFleetMetadataCommand = deserializeAws_restJson1DescribeFleetMetadataCommand;
const deserializeAws_restJson1DescribeFleetMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIdentityProviderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IdentityProviderSamlMetadata: undefined,
        IdentityProviderType: undefined,
        ServiceProviderSamlMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IdentityProviderSamlMetadata !== undefined && data.IdentityProviderSamlMetadata !== null) {
        contents.IdentityProviderSamlMetadata = data.IdentityProviderSamlMetadata;
    }
    if (data.IdentityProviderType !== undefined && data.IdentityProviderType !== null) {
        contents.IdentityProviderType = data.IdentityProviderType;
    }
    if (data.ServiceProviderSamlMetadata !== undefined && data.ServiceProviderSamlMetadata !== null) {
        contents.ServiceProviderSamlMetadata = data.ServiceProviderSamlMetadata;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand = deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand;
const deserializeAws_restJson1DescribeIdentityProviderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Certificate: undefined,
        CreatedTime: undefined,
        DisplayName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Certificate !== undefined && data.Certificate !== null) {
        contents.Certificate = data.Certificate;
    }
    if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
    }
    if (data.DisplayName !== undefined && data.DisplayName !== null) {
        contents.DisplayName = data.DisplayName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand;
const deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DisassociateDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateDomainCommand = deserializeAws_restJson1DisassociateDomainCommand;
const deserializeAws_restJson1DisassociateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand;
const deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.worklink#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand;
const deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1ListDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Devices: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Devices !== undefined && data.Devices !== null) {
        contents.Devices = deserializeAws_restJson1DeviceSummaryList(data.Devices, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDevicesCommand = deserializeAws_restJson1ListDevicesCommand;
const deserializeAws_restJson1ListDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1ListDomainsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Domains: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Domains !== undefined && data.Domains !== null) {
        contents.Domains = deserializeAws_restJson1DomainSummaryList(data.Domains, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainsCommand = deserializeAws_restJson1ListDomainsCommand;
const deserializeAws_restJson1ListDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1ListFleetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFleetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FleetSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FleetSummaryList !== undefined && data.FleetSummaryList !== null) {
        contents.FleetSummaryList = deserializeAws_restJson1FleetSummaryList(data.FleetSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFleetsCommand = deserializeAws_restJson1ListFleetsCommand;
const deserializeAws_restJson1ListFleetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
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
const deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WebsiteAuthorizationProviders: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WebsiteAuthorizationProviders !== undefined && data.WebsiteAuthorizationProviders !== null) {
        contents.WebsiteAuthorizationProviders = deserializeAws_restJson1WebsiteAuthorizationProvidersSummaryList(data.WebsiteAuthorizationProviders, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand;
const deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WebsiteCertificateAuthorities: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WebsiteCertificateAuthorities !== undefined && data.WebsiteCertificateAuthorities !== null) {
        contents.WebsiteCertificateAuthorities = deserializeAws_restJson1WebsiteCaSummaryList(data.WebsiteCertificateAuthorities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand;
const deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1RestoreDomainAccessCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RestoreDomainAccessCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RestoreDomainAccessCommand = deserializeAws_restJson1RestoreDomainAccessCommand;
const deserializeAws_restJson1RestoreDomainAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1RevokeDomainAccessCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RevokeDomainAccessCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RevokeDomainAccessCommand = deserializeAws_restJson1RevokeDomainAccessCommand;
const deserializeAws_restJson1RevokeDomainAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1SignOutUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SignOutUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SignOutUserCommand = deserializeAws_restJson1SignOutUserCommand;
const deserializeAws_restJson1SignOutUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
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
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
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
const deserializeAws_restJson1UpdateAuditStreamConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAuditStreamConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAuditStreamConfigurationCommand = deserializeAws_restJson1UpdateAuditStreamConfigurationCommand;
const deserializeAws_restJson1UpdateAuditStreamConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand;
const deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDevicePolicyConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand = deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand;
const deserializeAws_restJson1UpdateDevicePolicyConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDomainMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDomainMetadataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDomainMetadataCommand = deserializeAws_restJson1UpdateDomainMetadataCommand;
const deserializeAws_restJson1UpdateDomainMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1UpdateFleetMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFleetMetadataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFleetMetadataCommand = deserializeAws_restJson1UpdateFleetMetadataCommand;
const deserializeAws_restJson1UpdateFleetMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIdentityProviderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand = deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand;
const deserializeAws_restJson1UpdateIdentityProviderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.worklink#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.worklink#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.worklink#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.worklink#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.worklink#UnauthorizedException":
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
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
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
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
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
const deserializeAws_restJson1DeviceSummary = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        DeviceStatus: output.DeviceStatus !== undefined && output.DeviceStatus !== null ? output.DeviceStatus : undefined,
    };
};
const deserializeAws_restJson1DeviceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceSummary(entry, context);
    });
};
const deserializeAws_restJson1DomainSummary = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        DomainStatus: output.DomainStatus !== undefined && output.DomainStatus !== null ? output.DomainStatus : undefined,
    };
};
const deserializeAws_restJson1DomainSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainSummary(entry, context);
    });
};
const deserializeAws_restJson1FleetSummary = (output, context) => {
    return {
        CompanyCode: output.CompanyCode !== undefined && output.CompanyCode !== null ? output.CompanyCode : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetName: output.FleetName !== undefined && output.FleetName !== null ? output.FleetName : undefined,
        FleetStatus: output.FleetStatus !== undefined && output.FleetStatus !== null ? output.FleetStatus : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1FleetSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FleetSummary(entry, context);
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
const deserializeAws_restJson1WebsiteAuthorizationProvidersSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WebsiteAuthorizationProviderSummary(entry, context);
    });
};
const deserializeAws_restJson1WebsiteAuthorizationProviderSummary = (output, context) => {
    return {
        AuthorizationProviderId: output.AuthorizationProviderId !== undefined && output.AuthorizationProviderId !== null
            ? output.AuthorizationProviderId
            : undefined,
        AuthorizationProviderType: output.AuthorizationProviderType !== undefined && output.AuthorizationProviderType !== null
            ? output.AuthorizationProviderType
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    };
};
const deserializeAws_restJson1WebsiteCaSummary = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        WebsiteCaId: output.WebsiteCaId !== undefined && output.WebsiteCaId !== null ? output.WebsiteCaId : undefined,
    };
};
const deserializeAws_restJson1WebsiteCaSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WebsiteCaSummary(entry, context);
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