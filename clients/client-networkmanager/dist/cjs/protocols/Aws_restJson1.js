"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DescribeGlobalNetworksCommand = exports.deserializeAws_restJson1DeregisterTransitGatewayCommand = exports.deserializeAws_restJson1DeleteSiteCommand = exports.deserializeAws_restJson1DeleteLinkCommand = exports.deserializeAws_restJson1DeleteGlobalNetworkCommand = exports.deserializeAws_restJson1DeleteDeviceCommand = exports.deserializeAws_restJson1DeleteConnectionCommand = exports.deserializeAws_restJson1CreateSiteCommand = exports.deserializeAws_restJson1CreateLinkCommand = exports.deserializeAws_restJson1CreateGlobalNetworkCommand = exports.deserializeAws_restJson1CreateDeviceCommand = exports.deserializeAws_restJson1CreateConnectionCommand = exports.deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = exports.deserializeAws_restJson1AssociateLinkCommand = exports.deserializeAws_restJson1AssociateCustomerGatewayCommand = exports.serializeAws_restJson1UpdateSiteCommand = exports.serializeAws_restJson1UpdateLinkCommand = exports.serializeAws_restJson1UpdateGlobalNetworkCommand = exports.serializeAws_restJson1UpdateDeviceCommand = exports.serializeAws_restJson1UpdateConnectionCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1RegisterTransitGatewayCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1GetTransitGatewayRegistrationsCommand = exports.serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = exports.serializeAws_restJson1GetSitesCommand = exports.serializeAws_restJson1GetLinksCommand = exports.serializeAws_restJson1GetLinkAssociationsCommand = exports.serializeAws_restJson1GetDevicesCommand = exports.serializeAws_restJson1GetCustomerGatewayAssociationsCommand = exports.serializeAws_restJson1GetConnectionsCommand = exports.serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = exports.serializeAws_restJson1DisassociateLinkCommand = exports.serializeAws_restJson1DisassociateCustomerGatewayCommand = exports.serializeAws_restJson1DescribeGlobalNetworksCommand = exports.serializeAws_restJson1DeregisterTransitGatewayCommand = exports.serializeAws_restJson1DeleteSiteCommand = exports.serializeAws_restJson1DeleteLinkCommand = exports.serializeAws_restJson1DeleteGlobalNetworkCommand = exports.serializeAws_restJson1DeleteDeviceCommand = exports.serializeAws_restJson1DeleteConnectionCommand = exports.serializeAws_restJson1CreateSiteCommand = exports.serializeAws_restJson1CreateLinkCommand = exports.serializeAws_restJson1CreateGlobalNetworkCommand = exports.serializeAws_restJson1CreateDeviceCommand = exports.serializeAws_restJson1CreateConnectionCommand = exports.serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = exports.serializeAws_restJson1AssociateLinkCommand = exports.serializeAws_restJson1AssociateCustomerGatewayCommand = void 0;
exports.deserializeAws_restJson1UpdateSiteCommand = exports.deserializeAws_restJson1UpdateLinkCommand = exports.deserializeAws_restJson1UpdateGlobalNetworkCommand = exports.deserializeAws_restJson1UpdateDeviceCommand = exports.deserializeAws_restJson1UpdateConnectionCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1RegisterTransitGatewayCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1GetTransitGatewayRegistrationsCommand = exports.deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = exports.deserializeAws_restJson1GetSitesCommand = exports.deserializeAws_restJson1GetLinksCommand = exports.deserializeAws_restJson1GetLinkAssociationsCommand = exports.deserializeAws_restJson1GetDevicesCommand = exports.deserializeAws_restJson1GetCustomerGatewayAssociationsCommand = exports.deserializeAws_restJson1GetConnectionsCommand = exports.deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = exports.deserializeAws_restJson1DisassociateLinkCommand = exports.deserializeAws_restJson1DisassociateCustomerGatewayCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AssociateCustomerGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CustomerGatewayArn !== undefined &&
            input.CustomerGatewayArn !== null && { CustomerGatewayArn: input.CustomerGatewayArn }),
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
exports.serializeAws_restJson1AssociateCustomerGatewayCommand = serializeAws_restJson1AssociateCustomerGatewayCommand;
const serializeAws_restJson1AssociateLinkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
exports.serializeAws_restJson1AssociateLinkCommand = serializeAws_restJson1AssociateLinkCommand;
const serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
        ...(input.TransitGatewayConnectPeerArn !== undefined &&
            input.TransitGatewayConnectPeerArn !== null && {
            TransitGatewayConnectPeerArn: input.TransitGatewayConnectPeerArn,
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
exports.serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand;
const serializeAws_restJson1CreateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/connections";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConnectedDeviceId !== undefined &&
            input.ConnectedDeviceId !== null && { ConnectedDeviceId: input.ConnectedDeviceId }),
        ...(input.ConnectedLinkId !== undefined &&
            input.ConnectedLinkId !== null && { ConnectedLinkId: input.ConnectedLinkId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateConnectionCommand = serializeAws_restJson1CreateConnectionCommand;
const serializeAws_restJson1CreateDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/devices";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AWSLocation !== undefined &&
            input.AWSLocation !== null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
        ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
        ...(input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }),
        ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Vendor !== undefined && input.Vendor !== null && { Vendor: input.Vendor }),
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
exports.serializeAws_restJson1CreateDeviceCommand = serializeAws_restJson1CreateDeviceCommand;
const serializeAws_restJson1CreateGlobalNetworkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateGlobalNetworkCommand = serializeAws_restJson1CreateGlobalNetworkCommand;
const serializeAws_restJson1CreateLinkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/links";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Bandwidth !== undefined &&
            input.Bandwidth !== null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Provider !== undefined && input.Provider !== null && { Provider: input.Provider }),
        ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1CreateLinkCommand = serializeAws_restJson1CreateLinkCommand;
const serializeAws_restJson1CreateSiteCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/sites";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateSiteCommand = serializeAws_restJson1CreateSiteCommand;
const serializeAws_restJson1DeleteConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.ConnectionId !== undefined) {
        const labelValue = input.ConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectionId.");
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
exports.serializeAws_restJson1DeleteConnectionCommand = serializeAws_restJson1DeleteConnectionCommand;
const serializeAws_restJson1DeleteDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1DeleteDeviceCommand = serializeAws_restJson1DeleteDeviceCommand;
const serializeAws_restJson1DeleteGlobalNetworkCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
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
exports.serializeAws_restJson1DeleteGlobalNetworkCommand = serializeAws_restJson1DeleteGlobalNetworkCommand;
const serializeAws_restJson1DeleteLinkCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/links/{LinkId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.LinkId !== undefined) {
        const labelValue = input.LinkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LinkId.");
        }
        resolvedPath = resolvedPath.replace("{LinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LinkId.");
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
exports.serializeAws_restJson1DeleteLinkCommand = serializeAws_restJson1DeleteLinkCommand;
const serializeAws_restJson1DeleteSiteCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.SiteId !== undefined) {
        const labelValue = input.SiteId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SiteId.");
        }
        resolvedPath = resolvedPath.replace("{SiteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SiteId.");
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
exports.serializeAws_restJson1DeleteSiteCommand = serializeAws_restJson1DeleteSiteCommand;
const serializeAws_restJson1DeregisterTransitGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.TransitGatewayArn !== undefined) {
        const labelValue = input.TransitGatewayArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TransitGatewayArn.");
        }
        resolvedPath = resolvedPath.replace("{TransitGatewayArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TransitGatewayArn.");
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
exports.serializeAws_restJson1DeregisterTransitGatewayCommand = serializeAws_restJson1DeregisterTransitGatewayCommand;
const serializeAws_restJson1DescribeGlobalNetworksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks";
    const query = {
        ...(input.GlobalNetworkIds !== undefined && {
            globalNetworkIds: (input.GlobalNetworkIds || []).map((_entry) => _entry),
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
exports.serializeAws_restJson1DescribeGlobalNetworksCommand = serializeAws_restJson1DescribeGlobalNetworksCommand;
const serializeAws_restJson1DisassociateCustomerGatewayCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.CustomerGatewayArn !== undefined) {
        const labelValue = input.CustomerGatewayArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CustomerGatewayArn.");
        }
        resolvedPath = resolvedPath.replace("{CustomerGatewayArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CustomerGatewayArn.");
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
exports.serializeAws_restJson1DisassociateCustomerGatewayCommand = serializeAws_restJson1DisassociateCustomerGatewayCommand;
const serializeAws_restJson1DisassociateLinkCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && { linkId: input.LinkId }),
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
exports.serializeAws_restJson1DisassociateLinkCommand = serializeAws_restJson1DisassociateLinkCommand;
const serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.TransitGatewayConnectPeerArn !== undefined) {
        const labelValue = input.TransitGatewayConnectPeerArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TransitGatewayConnectPeerArn.");
        }
        resolvedPath = resolvedPath.replace("{TransitGatewayConnectPeerArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TransitGatewayConnectPeerArn.");
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
exports.serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand;
const serializeAws_restJson1GetConnectionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/connections";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.ConnectionIds !== undefined && { connectionIds: (input.ConnectionIds || []).map((_entry) => _entry) }),
        ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
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
exports.serializeAws_restJson1GetConnectionsCommand = serializeAws_restJson1GetConnectionsCommand;
const serializeAws_restJson1GetCustomerGatewayAssociationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.CustomerGatewayArns !== undefined && {
            customerGatewayArns: (input.CustomerGatewayArns || []).map((_entry) => _entry),
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
exports.serializeAws_restJson1GetCustomerGatewayAssociationsCommand = serializeAws_restJson1GetCustomerGatewayAssociationsCommand;
const serializeAws_restJson1GetDevicesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/devices";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.DeviceIds !== undefined && { deviceIds: (input.DeviceIds || []).map((_entry) => _entry) }),
        ...(input.SiteId !== undefined && { siteId: input.SiteId }),
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
exports.serializeAws_restJson1GetDevicesCommand = serializeAws_restJson1GetDevicesCommand;
const serializeAws_restJson1GetLinkAssociationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
        ...(input.LinkId !== undefined && { linkId: input.LinkId }),
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
exports.serializeAws_restJson1GetLinkAssociationsCommand = serializeAws_restJson1GetLinkAssociationsCommand;
const serializeAws_restJson1GetLinksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/links";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.LinkIds !== undefined && { linkIds: (input.LinkIds || []).map((_entry) => _entry) }),
        ...(input.SiteId !== undefined && { siteId: input.SiteId }),
        ...(input.Type !== undefined && { type: input.Type }),
        ...(input.Provider !== undefined && { provider: input.Provider }),
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
exports.serializeAws_restJson1GetLinksCommand = serializeAws_restJson1GetLinksCommand;
const serializeAws_restJson1GetSitesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/sites";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.SiteIds !== undefined && { siteIds: (input.SiteIds || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetSitesCommand = serializeAws_restJson1GetSitesCommand;
const serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.TransitGatewayConnectPeerArns !== undefined && {
            transitGatewayConnectPeerArns: (input.TransitGatewayConnectPeerArns || []).map((_entry) => _entry),
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
exports.serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand;
const serializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    const query = {
        ...(input.TransitGatewayArns !== undefined && {
            transitGatewayArns: (input.TransitGatewayArns || []).map((_entry) => _entry),
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
exports.serializeAws_restJson1GetTransitGatewayRegistrationsCommand = serializeAws_restJson1GetTransitGatewayRegistrationsCommand;
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
const serializeAws_restJson1RegisterTransitGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TransitGatewayArn !== undefined &&
            input.TransitGatewayArn !== null && { TransitGatewayArn: input.TransitGatewayArn }),
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
exports.serializeAws_restJson1RegisterTransitGatewayCommand = serializeAws_restJson1RegisterTransitGatewayCommand;
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
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
const serializeAws_restJson1UpdateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.ConnectionId !== undefined) {
        const labelValue = input.ConnectionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConnectedLinkId !== undefined &&
            input.ConnectedLinkId !== null && { ConnectedLinkId: input.ConnectedLinkId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateConnectionCommand = serializeAws_restJson1UpdateConnectionCommand;
const serializeAws_restJson1UpdateDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AWSLocation !== undefined &&
            input.AWSLocation !== null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
        ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
        ...(input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }),
        ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Vendor !== undefined && input.Vendor !== null && { Vendor: input.Vendor }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDeviceCommand = serializeAws_restJson1UpdateDeviceCommand;
const serializeAws_restJson1UpdateGlobalNetworkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGlobalNetworkCommand = serializeAws_restJson1UpdateGlobalNetworkCommand;
const serializeAws_restJson1UpdateLinkCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/links/{LinkId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.LinkId !== undefined) {
        const labelValue = input.LinkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LinkId.");
        }
        resolvedPath = resolvedPath.replace("{LinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LinkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Bandwidth !== undefined &&
            input.Bandwidth !== null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Provider !== undefined && input.Provider !== null && { Provider: input.Provider }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateLinkCommand = serializeAws_restJson1UpdateLinkCommand;
const serializeAws_restJson1UpdateSiteCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
    if (input.GlobalNetworkId !== undefined) {
        const labelValue = input.GlobalNetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
        }
        resolvedPath = resolvedPath.replace("{GlobalNetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
    }
    if (input.SiteId !== undefined) {
        const labelValue = input.SiteId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SiteId.");
        }
        resolvedPath = resolvedPath.replace("{SiteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SiteId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSiteCommand = serializeAws_restJson1UpdateSiteCommand;
const deserializeAws_restJson1AssociateCustomerGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateCustomerGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomerGatewayAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomerGatewayAssociation !== undefined && data.CustomerGatewayAssociation !== null) {
        contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(data.CustomerGatewayAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateCustomerGatewayCommand = deserializeAws_restJson1AssociateCustomerGatewayCommand;
const deserializeAws_restJson1AssociateCustomerGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1AssociateLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LinkAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
        contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateLinkCommand = deserializeAws_restJson1AssociateLinkCommand;
const deserializeAws_restJson1AssociateLinkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TransitGatewayConnectPeerAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TransitGatewayConnectPeerAssociation !== undefined && data.TransitGatewayConnectPeerAssociation !== null) {
        contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(data.TransitGatewayConnectPeerAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand;
const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1CreateConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Connection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Connection !== undefined && data.Connection !== null) {
        contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConnectionCommand = deserializeAws_restJson1CreateConnectionCommand;
const deserializeAws_restJson1CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1CreateDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Device: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Device !== undefined && data.Device !== null) {
        contents.Device = deserializeAws_restJson1Device(data.Device, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeviceCommand = deserializeAws_restJson1CreateDeviceCommand;
const deserializeAws_restJson1CreateDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1CreateGlobalNetworkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGlobalNetworkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GlobalNetwork: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
        contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGlobalNetworkCommand = deserializeAws_restJson1CreateGlobalNetworkCommand;
const deserializeAws_restJson1CreateGlobalNetworkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1CreateLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Link: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Link !== undefined && data.Link !== null) {
        contents.Link = deserializeAws_restJson1Link(data.Link, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLinkCommand = deserializeAws_restJson1CreateLinkCommand;
const deserializeAws_restJson1CreateLinkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1CreateSiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Site: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Site !== undefined && data.Site !== null) {
        contents.Site = deserializeAws_restJson1Site(data.Site, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSiteCommand = deserializeAws_restJson1CreateSiteCommand;
const deserializeAws_restJson1CreateSiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Connection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Connection !== undefined && data.Connection !== null) {
        contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConnectionCommand = deserializeAws_restJson1DeleteConnectionCommand;
const deserializeAws_restJson1DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeleteDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Device: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Device !== undefined && data.Device !== null) {
        contents.Device = deserializeAws_restJson1Device(data.Device, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDeviceCommand = deserializeAws_restJson1DeleteDeviceCommand;
const deserializeAws_restJson1DeleteDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeleteGlobalNetworkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGlobalNetworkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GlobalNetwork: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
        contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGlobalNetworkCommand = deserializeAws_restJson1DeleteGlobalNetworkCommand;
const deserializeAws_restJson1DeleteGlobalNetworkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeleteLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Link: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Link !== undefined && data.Link !== null) {
        contents.Link = deserializeAws_restJson1Link(data.Link, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLinkCommand = deserializeAws_restJson1DeleteLinkCommand;
const deserializeAws_restJson1DeleteLinkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeleteSiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Site: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Site !== undefined && data.Site !== null) {
        contents.Site = deserializeAws_restJson1Site(data.Site, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSiteCommand = deserializeAws_restJson1DeleteSiteCommand;
const deserializeAws_restJson1DeleteSiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DeregisterTransitGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeregisterTransitGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TransitGatewayRegistration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TransitGatewayRegistration !== undefined && data.TransitGatewayRegistration !== null) {
        contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(data.TransitGatewayRegistration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeregisterTransitGatewayCommand = deserializeAws_restJson1DeregisterTransitGatewayCommand;
const deserializeAws_restJson1DeregisterTransitGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DescribeGlobalNetworksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGlobalNetworksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GlobalNetworks: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GlobalNetworks !== undefined && data.GlobalNetworks !== null) {
        contents.GlobalNetworks = deserializeAws_restJson1GlobalNetworkList(data.GlobalNetworks, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGlobalNetworksCommand = deserializeAws_restJson1DescribeGlobalNetworksCommand;
const deserializeAws_restJson1DescribeGlobalNetworksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DisassociateCustomerGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateCustomerGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomerGatewayAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomerGatewayAssociation !== undefined && data.CustomerGatewayAssociation !== null) {
        contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(data.CustomerGatewayAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateCustomerGatewayCommand = deserializeAws_restJson1DisassociateCustomerGatewayCommand;
const deserializeAws_restJson1DisassociateCustomerGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DisassociateLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LinkAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
        contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateLinkCommand = deserializeAws_restJson1DisassociateLinkCommand;
const deserializeAws_restJson1DisassociateLinkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TransitGatewayConnectPeerAssociation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TransitGatewayConnectPeerAssociation !== undefined && data.TransitGatewayConnectPeerAssociation !== null) {
        contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(data.TransitGatewayConnectPeerAssociation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand;
const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetConnectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConnectionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Connections: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Connections !== undefined && data.Connections !== null) {
        contents.Connections = deserializeAws_restJson1ConnectionList(data.Connections, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConnectionsCommand = deserializeAws_restJson1GetConnectionsCommand;
const deserializeAws_restJson1GetConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetCustomerGatewayAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomerGatewayAssociations: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomerGatewayAssociations !== undefined && data.CustomerGatewayAssociations !== null) {
        contents.CustomerGatewayAssociations = deserializeAws_restJson1CustomerGatewayAssociationList(data.CustomerGatewayAssociations, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCustomerGatewayAssociationsCommand = deserializeAws_restJson1GetCustomerGatewayAssociationsCommand;
const deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Devices: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Devices !== undefined && data.Devices !== null) {
        contents.Devices = deserializeAws_restJson1DeviceList(data.Devices, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDevicesCommand = deserializeAws_restJson1GetDevicesCommand;
const deserializeAws_restJson1GetDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetLinkAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLinkAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LinkAssociations: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LinkAssociations !== undefined && data.LinkAssociations !== null) {
        contents.LinkAssociations = deserializeAws_restJson1LinkAssociationList(data.LinkAssociations, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLinkAssociationsCommand = deserializeAws_restJson1GetLinkAssociationsCommand;
const deserializeAws_restJson1GetLinkAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetLinksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLinksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Links: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Links !== undefined && data.Links !== null) {
        contents.Links = deserializeAws_restJson1LinkList(data.Links, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLinksCommand = deserializeAws_restJson1GetLinksCommand;
const deserializeAws_restJson1GetLinksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetSitesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSitesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Sites: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Sites !== undefined && data.Sites !== null) {
        contents.Sites = deserializeAws_restJson1SiteList(data.Sites, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSitesCommand = deserializeAws_restJson1GetSitesCommand;
const deserializeAws_restJson1GetSitesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        TransitGatewayConnectPeerAssociations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TransitGatewayConnectPeerAssociations !== undefined && data.TransitGatewayConnectPeerAssociations !== null) {
        contents.TransitGatewayConnectPeerAssociations = deserializeAws_restJson1TransitGatewayConnectPeerAssociationList(data.TransitGatewayConnectPeerAssociations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand;
const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        TransitGatewayRegistrations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TransitGatewayRegistrations !== undefined && data.TransitGatewayRegistrations !== null) {
        contents.TransitGatewayRegistrations = deserializeAws_restJson1TransitGatewayRegistrationList(data.TransitGatewayRegistrations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTransitGatewayRegistrationsCommand = deserializeAws_restJson1GetTransitGatewayRegistrationsCommand;
const deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
        TagList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TagList !== undefined && data.TagList !== null) {
        contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1RegisterTransitGatewayCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterTransitGatewayCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TransitGatewayRegistration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TransitGatewayRegistration !== undefined && data.TransitGatewayRegistration !== null) {
        contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(data.TransitGatewayRegistration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterTransitGatewayCommand = deserializeAws_restJson1RegisterTransitGatewayCommand;
const deserializeAws_restJson1RegisterTransitGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1UpdateConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Connection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Connection !== undefined && data.Connection !== null) {
        contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConnectionCommand = deserializeAws_restJson1UpdateConnectionCommand;
const deserializeAws_restJson1UpdateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1UpdateDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Device: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Device !== undefined && data.Device !== null) {
        contents.Device = deserializeAws_restJson1Device(data.Device, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDeviceCommand = deserializeAws_restJson1UpdateDeviceCommand;
const deserializeAws_restJson1UpdateDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1UpdateGlobalNetworkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGlobalNetworkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GlobalNetwork: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
        contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGlobalNetworkCommand = deserializeAws_restJson1UpdateGlobalNetworkCommand;
const deserializeAws_restJson1UpdateGlobalNetworkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1UpdateLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Link: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Link !== undefined && data.Link !== null) {
        contents.Link = deserializeAws_restJson1Link(data.Link, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLinkCommand = deserializeAws_restJson1UpdateLinkCommand;
const deserializeAws_restJson1UpdateLinkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
const deserializeAws_restJson1UpdateSiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Site: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Site !== undefined && data.Site !== null) {
        contents.Site = deserializeAws_restJson1Site(data.Site, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSiteCommand = deserializeAws_restJson1UpdateSiteCommand;
const deserializeAws_restJson1UpdateSiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.networkmanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.networkmanager#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.networkmanager#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkmanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkmanager#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.networkmanager#ValidationException":
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RetryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        LimitCode: undefined,
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        ServiceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.LimitCode !== undefined && data.LimitCode !== null) {
        contents.LimitCode = data.LimitCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RetryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Fields: undefined,
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const serializeAws_restJson1AWSLocation = (input, context) => {
    return {
        ...(input.SubnetArn !== undefined && input.SubnetArn !== null && { SubnetArn: input.SubnetArn }),
        ...(input.Zone !== undefined && input.Zone !== null && { Zone: input.Zone }),
    };
};
const serializeAws_restJson1Bandwidth = (input, context) => {
    return {
        ...(input.DownloadSpeed !== undefined && input.DownloadSpeed !== null && { DownloadSpeed: input.DownloadSpeed }),
        ...(input.UploadSpeed !== undefined && input.UploadSpeed !== null && { UploadSpeed: input.UploadSpeed }),
    };
};
const serializeAws_restJson1Location = (input, context) => {
    return {
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
        ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
    };
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
const deserializeAws_restJson1AWSLocation = (output, context) => {
    return {
        SubnetArn: output.SubnetArn !== undefined && output.SubnetArn !== null ? output.SubnetArn : undefined,
        Zone: output.Zone !== undefined && output.Zone !== null ? output.Zone : undefined,
    };
};
const deserializeAws_restJson1Bandwidth = (output, context) => {
    return {
        DownloadSpeed: output.DownloadSpeed !== undefined && output.DownloadSpeed !== null ? output.DownloadSpeed : undefined,
        UploadSpeed: output.UploadSpeed !== undefined && output.UploadSpeed !== null ? output.UploadSpeed : undefined,
    };
};
const deserializeAws_restJson1Connection = (output, context) => {
    return {
        ConnectedDeviceId: output.ConnectedDeviceId !== undefined && output.ConnectedDeviceId !== null
            ? output.ConnectedDeviceId
            : undefined,
        ConnectedLinkId: output.ConnectedLinkId !== undefined && output.ConnectedLinkId !== null ? output.ConnectedLinkId : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionId: output.ConnectionId !== undefined && output.ConnectionId !== null ? output.ConnectionId : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        LinkId: output.LinkId !== undefined && output.LinkId !== null ? output.LinkId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Connection(entry, context);
    });
};
const deserializeAws_restJson1CustomerGatewayAssociation = (output, context) => {
    return {
        CustomerGatewayArn: output.CustomerGatewayArn !== undefined && output.CustomerGatewayArn !== null
            ? output.CustomerGatewayArn
            : undefined,
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        LinkId: output.LinkId !== undefined && output.LinkId !== null ? output.LinkId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1CustomerGatewayAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomerGatewayAssociation(entry, context);
    });
};
const deserializeAws_restJson1Device = (output, context) => {
    return {
        AWSLocation: output.AWSLocation !== undefined && output.AWSLocation !== null
            ? deserializeAws_restJson1AWSLocation(output.AWSLocation, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DeviceArn: output.DeviceArn !== undefined && output.DeviceArn !== null ? output.DeviceArn : undefined,
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        Location: output.Location !== undefined && output.Location !== null
            ? deserializeAws_restJson1Location(output.Location, context)
            : undefined,
        Model: output.Model !== undefined && output.Model !== null ? output.Model : undefined,
        SerialNumber: output.SerialNumber !== undefined && output.SerialNumber !== null ? output.SerialNumber : undefined,
        SiteId: output.SiteId !== undefined && output.SiteId !== null ? output.SiteId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagList(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Vendor: output.Vendor !== undefined && output.Vendor !== null ? output.Vendor : undefined,
    };
};
const deserializeAws_restJson1DeviceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Device(entry, context);
    });
};
const deserializeAws_restJson1GlobalNetwork = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GlobalNetworkArn: output.GlobalNetworkArn !== undefined && output.GlobalNetworkArn !== null ? output.GlobalNetworkArn : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1GlobalNetworkList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GlobalNetwork(entry, context);
    });
};
const deserializeAws_restJson1Link = (output, context) => {
    return {
        Bandwidth: output.Bandwidth !== undefined && output.Bandwidth !== null
            ? deserializeAws_restJson1Bandwidth(output.Bandwidth, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        LinkArn: output.LinkArn !== undefined && output.LinkArn !== null ? output.LinkArn : undefined,
        LinkId: output.LinkId !== undefined && output.LinkId !== null ? output.LinkId : undefined,
        Provider: output.Provider !== undefined && output.Provider !== null ? output.Provider : undefined,
        SiteId: output.SiteId !== undefined && output.SiteId !== null ? output.SiteId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagList(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1LinkAssociation = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        LinkAssociationState: output.LinkAssociationState !== undefined && output.LinkAssociationState !== null
            ? output.LinkAssociationState
            : undefined,
        LinkId: output.LinkId !== undefined && output.LinkId !== null ? output.LinkId : undefined,
    };
};
const deserializeAws_restJson1LinkAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LinkAssociation(entry, context);
    });
};
const deserializeAws_restJson1LinkList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Link(entry, context);
    });
};
const deserializeAws_restJson1Location = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Latitude: output.Latitude !== undefined && output.Latitude !== null ? output.Latitude : undefined,
        Longitude: output.Longitude !== undefined && output.Longitude !== null ? output.Longitude : undefined,
    };
};
const deserializeAws_restJson1Site = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        Location: output.Location !== undefined && output.Location !== null
            ? deserializeAws_restJson1Location(output.Location, context)
            : undefined,
        SiteArn: output.SiteArn !== undefined && output.SiteArn !== null ? output.SiteArn : undefined,
        SiteId: output.SiteId !== undefined && output.SiteId !== null ? output.SiteId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SiteList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Site(entry, context);
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
const deserializeAws_restJson1TransitGatewayConnectPeerAssociation = (output, context) => {
    return {
        DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        LinkId: output.LinkId !== undefined && output.LinkId !== null ? output.LinkId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        TransitGatewayConnectPeerArn: output.TransitGatewayConnectPeerArn !== undefined && output.TransitGatewayConnectPeerArn !== null
            ? output.TransitGatewayConnectPeerArn
            : undefined,
    };
};
const deserializeAws_restJson1TransitGatewayConnectPeerAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransitGatewayConnectPeerAssociation(entry, context);
    });
};
const deserializeAws_restJson1TransitGatewayRegistration = (output, context) => {
    return {
        GlobalNetworkId: output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null ? output.GlobalNetworkId : undefined,
        State: output.State !== undefined && output.State !== null
            ? deserializeAws_restJson1TransitGatewayRegistrationStateReason(output.State, context)
            : undefined,
        TransitGatewayArn: output.TransitGatewayArn !== undefined && output.TransitGatewayArn !== null
            ? output.TransitGatewayArn
            : undefined,
    };
};
const deserializeAws_restJson1TransitGatewayRegistrationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransitGatewayRegistration(entry, context);
    });
};
const deserializeAws_restJson1TransitGatewayRegistrationStateReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
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