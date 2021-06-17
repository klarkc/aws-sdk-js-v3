"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = exports.deserializeAws_restJson1RemoveFlowSourceCommand = exports.deserializeAws_restJson1RemoveFlowOutputCommand = exports.deserializeAws_restJson1RemoveFlowMediaStreamCommand = exports.deserializeAws_restJson1PurchaseOfferingCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListReservationsCommand = exports.deserializeAws_restJson1ListOfferingsCommand = exports.deserializeAws_restJson1ListFlowsCommand = exports.deserializeAws_restJson1ListEntitlementsCommand = exports.deserializeAws_restJson1GrantFlowEntitlementsCommand = exports.deserializeAws_restJson1DescribeReservationCommand = exports.deserializeAws_restJson1DescribeOfferingCommand = exports.deserializeAws_restJson1DescribeFlowCommand = exports.deserializeAws_restJson1DeleteFlowCommand = exports.deserializeAws_restJson1CreateFlowCommand = exports.deserializeAws_restJson1AddFlowVpcInterfacesCommand = exports.deserializeAws_restJson1AddFlowSourcesCommand = exports.deserializeAws_restJson1AddFlowOutputsCommand = exports.deserializeAws_restJson1AddFlowMediaStreamsCommand = exports.serializeAws_restJson1UpdateFlowSourceCommand = exports.serializeAws_restJson1UpdateFlowOutputCommand = exports.serializeAws_restJson1UpdateFlowMediaStreamCommand = exports.serializeAws_restJson1UpdateFlowEntitlementCommand = exports.serializeAws_restJson1UpdateFlowCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopFlowCommand = exports.serializeAws_restJson1StartFlowCommand = exports.serializeAws_restJson1RevokeFlowEntitlementCommand = exports.serializeAws_restJson1RemoveFlowVpcInterfaceCommand = exports.serializeAws_restJson1RemoveFlowSourceCommand = exports.serializeAws_restJson1RemoveFlowOutputCommand = exports.serializeAws_restJson1RemoveFlowMediaStreamCommand = exports.serializeAws_restJson1PurchaseOfferingCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListReservationsCommand = exports.serializeAws_restJson1ListOfferingsCommand = exports.serializeAws_restJson1ListFlowsCommand = exports.serializeAws_restJson1ListEntitlementsCommand = exports.serializeAws_restJson1GrantFlowEntitlementsCommand = exports.serializeAws_restJson1DescribeReservationCommand = exports.serializeAws_restJson1DescribeOfferingCommand = exports.serializeAws_restJson1DescribeFlowCommand = exports.serializeAws_restJson1DeleteFlowCommand = exports.serializeAws_restJson1CreateFlowCommand = exports.serializeAws_restJson1AddFlowVpcInterfacesCommand = exports.serializeAws_restJson1AddFlowSourcesCommand = exports.serializeAws_restJson1AddFlowOutputsCommand = exports.serializeAws_restJson1AddFlowMediaStreamsCommand = void 0;
exports.deserializeAws_restJson1UpdateFlowSourceCommand = exports.deserializeAws_restJson1UpdateFlowOutputCommand = exports.deserializeAws_restJson1UpdateFlowMediaStreamCommand = exports.deserializeAws_restJson1UpdateFlowEntitlementCommand = exports.deserializeAws_restJson1UpdateFlowCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopFlowCommand = exports.deserializeAws_restJson1StartFlowCommand = exports.deserializeAws_restJson1RevokeFlowEntitlementCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AddFlowMediaStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/mediaStreams";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MediaStreams !== undefined &&
            input.MediaStreams !== null && {
            mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
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
exports.serializeAws_restJson1AddFlowMediaStreamsCommand = serializeAws_restJson1AddFlowMediaStreamsCommand;
const serializeAws_restJson1AddFlowOutputsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/outputs";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
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
exports.serializeAws_restJson1AddFlowOutputsCommand = serializeAws_restJson1AddFlowOutputsCommand;
const serializeAws_restJson1AddFlowSourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/source";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Sources !== undefined &&
            input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
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
exports.serializeAws_restJson1AddFlowSourcesCommand = serializeAws_restJson1AddFlowSourcesCommand;
const serializeAws_restJson1AddFlowVpcInterfacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/vpcInterfaces";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.VpcInterfaces !== undefined &&
            input.VpcInterfaces !== null && {
            vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
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
exports.serializeAws_restJson1AddFlowVpcInterfacesCommand = serializeAws_restJson1AddFlowVpcInterfacesCommand;
const serializeAws_restJson1CreateFlowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows";
    let body;
    body = JSON.stringify({
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { availabilityZone: input.AvailabilityZone }),
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
        }),
        ...(input.MediaStreams !== undefined &&
            input.MediaStreams !== null && {
            mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
        ...(input.Source !== undefined &&
            input.Source !== null && { source: serializeAws_restJson1SetSourceRequest(input.Source, context) }),
        ...(input.SourceFailoverConfig !== undefined &&
            input.SourceFailoverConfig !== null && {
            sourceFailoverConfig: serializeAws_restJson1FailoverConfig(input.SourceFailoverConfig, context),
        }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
        ...(input.VpcInterfaces !== undefined &&
            input.VpcInterfaces !== null && {
            vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
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
exports.serializeAws_restJson1CreateFlowCommand = serializeAws_restJson1CreateFlowCommand;
const serializeAws_restJson1DeleteFlowCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
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
exports.serializeAws_restJson1DeleteFlowCommand = serializeAws_restJson1DeleteFlowCommand;
const serializeAws_restJson1DescribeFlowCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
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
exports.serializeAws_restJson1DescribeFlowCommand = serializeAws_restJson1DescribeFlowCommand;
const serializeAws_restJson1DescribeOfferingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/offerings/{OfferingArn}";
    if (input.OfferingArn !== undefined) {
        const labelValue = input.OfferingArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OfferingArn.");
        }
        resolvedPath = resolvedPath.replace("{OfferingArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OfferingArn.");
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
exports.serializeAws_restJson1DescribeOfferingCommand = serializeAws_restJson1DescribeOfferingCommand;
const serializeAws_restJson1DescribeReservationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/reservations/{ReservationArn}";
    if (input.ReservationArn !== undefined) {
        const labelValue = input.ReservationArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ReservationArn.");
        }
        resolvedPath = resolvedPath.replace("{ReservationArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ReservationArn.");
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
exports.serializeAws_restJson1DescribeReservationCommand = serializeAws_restJson1DescribeReservationCommand;
const serializeAws_restJson1GrantFlowEntitlementsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
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
exports.serializeAws_restJson1GrantFlowEntitlementsCommand = serializeAws_restJson1GrantFlowEntitlementsCommand;
const serializeAws_restJson1ListEntitlementsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/entitlements";
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
exports.serializeAws_restJson1ListEntitlementsCommand = serializeAws_restJson1ListEntitlementsCommand;
const serializeAws_restJson1ListFlowsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows";
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
exports.serializeAws_restJson1ListFlowsCommand = serializeAws_restJson1ListFlowsCommand;
const serializeAws_restJson1ListOfferingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/offerings";
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
exports.serializeAws_restJson1ListOfferingsCommand = serializeAws_restJson1ListOfferingsCommand;
const serializeAws_restJson1ListReservationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/reservations";
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
exports.serializeAws_restJson1ListReservationsCommand = serializeAws_restJson1ListReservationsCommand;
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
const serializeAws_restJson1PurchaseOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/offerings/{OfferingArn}";
    if (input.OfferingArn !== undefined) {
        const labelValue = input.OfferingArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OfferingArn.");
        }
        resolvedPath = resolvedPath.replace("{OfferingArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OfferingArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ReservationName !== undefined &&
            input.ReservationName !== null && { reservationName: input.ReservationName }),
        ...(input.Start !== undefined && input.Start !== null && { start: input.Start }),
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
exports.serializeAws_restJson1PurchaseOfferingCommand = serializeAws_restJson1PurchaseOfferingCommand;
const serializeAws_restJson1RemoveFlowMediaStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.MediaStreamName !== undefined) {
        const labelValue = input.MediaStreamName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
        }
        resolvedPath = resolvedPath.replace("{MediaStreamName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MediaStreamName.");
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
exports.serializeAws_restJson1RemoveFlowMediaStreamCommand = serializeAws_restJson1RemoveFlowMediaStreamCommand;
const serializeAws_restJson1RemoveFlowOutputCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.OutputArn !== undefined) {
        const labelValue = input.OutputArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OutputArn.");
        }
        resolvedPath = resolvedPath.replace("{OutputArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OutputArn.");
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
exports.serializeAws_restJson1RemoveFlowOutputCommand = serializeAws_restJson1RemoveFlowOutputCommand;
const serializeAws_restJson1RemoveFlowSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.SourceArn !== undefined) {
        const labelValue = input.SourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceArn.");
        }
        resolvedPath = resolvedPath.replace("{SourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceArn.");
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
exports.serializeAws_restJson1RemoveFlowSourceCommand = serializeAws_restJson1RemoveFlowSourceCommand;
const serializeAws_restJson1RemoveFlowVpcInterfaceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.VpcInterfaceName !== undefined) {
        const labelValue = input.VpcInterfaceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VpcInterfaceName.");
        }
        resolvedPath = resolvedPath.replace("{VpcInterfaceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VpcInterfaceName.");
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
exports.serializeAws_restJson1RemoveFlowVpcInterfaceCommand = serializeAws_restJson1RemoveFlowVpcInterfaceCommand;
const serializeAws_restJson1RevokeFlowEntitlementCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
    if (input.EntitlementArn !== undefined) {
        const labelValue = input.EntitlementArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
        }
        resolvedPath = resolvedPath.replace("{EntitlementArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EntitlementArn.");
    }
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
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
exports.serializeAws_restJson1RevokeFlowEntitlementCommand = serializeAws_restJson1RevokeFlowEntitlementCommand;
const serializeAws_restJson1StartFlowCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/start/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
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
exports.serializeAws_restJson1StartFlowCommand = serializeAws_restJson1StartFlowCommand;
const serializeAws_restJson1StopFlowCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/flows/stop/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
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
exports.serializeAws_restJson1StopFlowCommand = serializeAws_restJson1StopFlowCommand;
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
const serializeAws_restJson1UpdateFlowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SourceFailoverConfig !== undefined &&
            input.SourceFailoverConfig !== null && {
            sourceFailoverConfig: serializeAws_restJson1UpdateFailoverConfig(input.SourceFailoverConfig, context),
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
exports.serializeAws_restJson1UpdateFlowCommand = serializeAws_restJson1UpdateFlowCommand;
const serializeAws_restJson1UpdateFlowEntitlementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
    if (input.EntitlementArn !== undefined) {
        const labelValue = input.EntitlementArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
        }
        resolvedPath = resolvedPath.replace("{EntitlementArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EntitlementArn.");
    }
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
        ...(input.EntitlementStatus !== undefined &&
            input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus }),
        ...(input.Subscribers !== undefined &&
            input.Subscribers !== null && {
            subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
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
exports.serializeAws_restJson1UpdateFlowEntitlementCommand = serializeAws_restJson1UpdateFlowEntitlementCommand;
const serializeAws_restJson1UpdateFlowMediaStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.MediaStreamName !== undefined) {
        const labelValue = input.MediaStreamName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
        }
        resolvedPath = resolvedPath.replace("{MediaStreamName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MediaStreamName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
        }),
        ...(input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.MediaStreamType !== undefined &&
            input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType }),
        ...(input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat }),
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
exports.serializeAws_restJson1UpdateFlowMediaStreamCommand = serializeAws_restJson1UpdateFlowMediaStreamCommand;
const serializeAws_restJson1UpdateFlowOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.OutputArn !== undefined) {
        const labelValue = input.OutputArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OutputArn.");
        }
        resolvedPath = resolvedPath.replace("{OutputArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OutputArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CidrAllowList !== undefined &&
            input.CidrAllowList !== null && {
            cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
        ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
        ...(input.MediaStreamOutputConfigurations !== undefined &&
            input.MediaStreamOutputConfigurations !== null && {
            mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(input.MediaStreamOutputConfigurations, context),
        }),
        ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
        ...(input.Port !== undefined && input.Port !== null && { port: input.Port }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
        ...(input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId }),
        ...(input.SmoothingLatency !== undefined &&
            input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency }),
        ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
        ...(input.VpcInterfaceAttachment !== undefined &&
            input.VpcInterfaceAttachment !== null && {
            vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
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
exports.serializeAws_restJson1UpdateFlowOutputCommand = serializeAws_restJson1UpdateFlowOutputCommand;
const serializeAws_restJson1UpdateFlowSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
    if (input.FlowArn !== undefined) {
        const labelValue = input.FlowArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FlowArn.");
        }
        resolvedPath = resolvedPath.replace("{FlowArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FlowArn.");
    }
    if (input.SourceArn !== undefined) {
        const labelValue = input.SourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceArn.");
        }
        resolvedPath = resolvedPath.replace("{SourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Decryption !== undefined &&
            input.Decryption !== null && { decryption: serializeAws_restJson1UpdateEncryption(input.Decryption, context) }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.EntitlementArn !== undefined &&
            input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn }),
        ...(input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort }),
        ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
        ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
        ...(input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer }),
        ...(input.MediaStreamSourceConfigurations !== undefined &&
            input.MediaStreamSourceConfigurations !== null && {
            mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(input.MediaStreamSourceConfigurations, context),
        }),
        ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
        ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
        ...(input.VpcInterfaceName !== undefined &&
            input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
        ...(input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr }),
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
exports.serializeAws_restJson1UpdateFlowSourceCommand = serializeAws_restJson1UpdateFlowSourceCommand;
const deserializeAws_restJson1AddFlowMediaStreamsCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddFlowMediaStreamsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        MediaStreams: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.mediaStreams !== undefined && data.mediaStreams !== null) {
        contents.MediaStreams = deserializeAws_restJson1__listOfMediaStream(data.mediaStreams, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddFlowMediaStreamsCommand = deserializeAws_restJson1AddFlowMediaStreamsCommand;
const deserializeAws_restJson1AddFlowMediaStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1AddFlowOutputsCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddFlowOutputsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Outputs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.outputs !== undefined && data.outputs !== null) {
        contents.Outputs = deserializeAws_restJson1__listOfOutput(data.outputs, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddFlowOutputsCommand = deserializeAws_restJson1AddFlowOutputsCommand;
const deserializeAws_restJson1AddFlowOutputsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AddFlowOutputs420Exception":
        case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
            response = {
                ...(await deserializeAws_restJson1AddFlowOutputs420ExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1AddFlowSourcesCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddFlowSourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Sources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.sources !== undefined && data.sources !== null) {
        contents.Sources = deserializeAws_restJson1__listOfSource(data.sources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddFlowSourcesCommand = deserializeAws_restJson1AddFlowSourcesCommand;
const deserializeAws_restJson1AddFlowSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1AddFlowVpcInterfacesCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddFlowVpcInterfacesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        VpcInterfaces: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.vpcInterfaces !== undefined && data.vpcInterfaces !== null) {
        contents.VpcInterfaces = deserializeAws_restJson1__listOfVpcInterface(data.vpcInterfaces, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddFlowVpcInterfacesCommand = deserializeAws_restJson1AddFlowVpcInterfacesCommand;
const deserializeAws_restJson1AddFlowVpcInterfacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1CreateFlowCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Flow: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flow !== undefined && data.flow !== null) {
        contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFlowCommand = deserializeAws_restJson1CreateFlowCommand;
const deserializeAws_restJson1CreateFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CreateFlow420Exception":
        case "com.amazonaws.mediaconnect#CreateFlow420Exception":
            response = {
                ...(await deserializeAws_restJson1CreateFlow420ExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteFlowCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFlowCommand = deserializeAws_restJson1DeleteFlowCommand;
const deserializeAws_restJson1DeleteFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1DescribeFlowCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Flow: undefined,
        Messages: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flow !== undefined && data.flow !== null) {
        contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
    }
    if (data.messages !== undefined && data.messages !== null) {
        contents.Messages = deserializeAws_restJson1Messages(data.messages, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFlowCommand = deserializeAws_restJson1DescribeFlowCommand;
const deserializeAws_restJson1DescribeFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1DescribeOfferingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeOfferingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Offering: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.offering !== undefined && data.offering !== null) {
        contents.Offering = deserializeAws_restJson1Offering(data.offering, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeOfferingCommand = deserializeAws_restJson1DescribeOfferingCommand;
const deserializeAws_restJson1DescribeOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1DescribeReservationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeReservationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Reservation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.reservation !== undefined && data.reservation !== null) {
        contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeReservationCommand = deserializeAws_restJson1DescribeReservationCommand;
const deserializeAws_restJson1DescribeReservationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1GrantFlowEntitlementsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GrantFlowEntitlementsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entitlements: undefined,
        FlowArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.entitlements !== undefined && data.entitlements !== null) {
        contents.Entitlements = deserializeAws_restJson1__listOfEntitlement(data.entitlements, context);
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GrantFlowEntitlementsCommand = deserializeAws_restJson1GrantFlowEntitlementsCommand;
const deserializeAws_restJson1GrantFlowEntitlementsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GrantFlowEntitlements420Exception":
        case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
            response = {
                ...(await deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1ListEntitlementsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEntitlementsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entitlements: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.entitlements !== undefined && data.entitlements !== null) {
        contents.Entitlements = deserializeAws_restJson1__listOfListedEntitlement(data.entitlements, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEntitlementsCommand = deserializeAws_restJson1ListEntitlementsCommand;
const deserializeAws_restJson1ListEntitlementsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1ListFlowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFlowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Flows: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flows !== undefined && data.flows !== null) {
        contents.Flows = deserializeAws_restJson1__listOfListedFlow(data.flows, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFlowsCommand = deserializeAws_restJson1ListFlowsCommand;
const deserializeAws_restJson1ListFlowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1ListOfferingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListOfferingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Offerings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.offerings !== undefined && data.offerings !== null) {
        contents.Offerings = deserializeAws_restJson1__listOfOffering(data.offerings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListOfferingsCommand = deserializeAws_restJson1ListOfferingsCommand;
const deserializeAws_restJson1ListOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1ListReservationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListReservationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Reservations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.reservations !== undefined && data.reservations !== null) {
        contents.Reservations = deserializeAws_restJson1__listOfReservation(data.reservations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListReservationsCommand = deserializeAws_restJson1ListReservationsCommand;
const deserializeAws_restJson1ListReservationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
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
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
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
const deserializeAws_restJson1PurchaseOfferingCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PurchaseOfferingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Reservation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.reservation !== undefined && data.reservation !== null) {
        contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PurchaseOfferingCommand = deserializeAws_restJson1PurchaseOfferingCommand;
const deserializeAws_restJson1PurchaseOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveFlowMediaStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveFlowMediaStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        MediaStreamName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.mediaStreamName !== undefined && data.mediaStreamName !== null) {
        contents.MediaStreamName = data.mediaStreamName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveFlowMediaStreamCommand = deserializeAws_restJson1RemoveFlowMediaStreamCommand;
const deserializeAws_restJson1RemoveFlowMediaStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveFlowOutputCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveFlowOutputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        OutputArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.outputArn !== undefined && data.outputArn !== null) {
        contents.OutputArn = data.outputArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveFlowOutputCommand = deserializeAws_restJson1RemoveFlowOutputCommand;
const deserializeAws_restJson1RemoveFlowOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveFlowSourceCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveFlowSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        SourceArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.sourceArn !== undefined && data.sourceArn !== null) {
        contents.SourceArn = data.sourceArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveFlowSourceCommand = deserializeAws_restJson1RemoveFlowSourceCommand;
const deserializeAws_restJson1RemoveFlowSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        NonDeletedNetworkInterfaceIds: undefined,
        VpcInterfaceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.nonDeletedNetworkInterfaceIds !== undefined && data.nonDeletedNetworkInterfaceIds !== null) {
        contents.NonDeletedNetworkInterfaceIds = deserializeAws_restJson1__listOf__string(data.nonDeletedNetworkInterfaceIds, context);
    }
    if (data.vpcInterfaceName !== undefined && data.vpcInterfaceName !== null) {
        contents.VpcInterfaceName = data.vpcInterfaceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = deserializeAws_restJson1RemoveFlowVpcInterfaceCommand;
const deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1RevokeFlowEntitlementCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1RevokeFlowEntitlementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EntitlementArn: undefined,
        FlowArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.entitlementArn !== undefined && data.entitlementArn !== null) {
        contents.EntitlementArn = data.entitlementArn;
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RevokeFlowEntitlementCommand = deserializeAws_restJson1RevokeFlowEntitlementCommand;
const deserializeAws_restJson1RevokeFlowEntitlementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1StartFlowCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartFlowCommand = deserializeAws_restJson1StartFlowCommand;
const deserializeAws_restJson1StartFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1StopFlowCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopFlowCommand = deserializeAws_restJson1StopFlowCommand;
const deserializeAws_restJson1StopFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
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
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
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
const deserializeAws_restJson1UpdateFlowCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFlowCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Flow: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flow !== undefined && data.flow !== null) {
        contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowCommand = deserializeAws_restJson1UpdateFlowCommand;
const deserializeAws_restJson1UpdateFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateFlowEntitlementCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFlowEntitlementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Entitlement: undefined,
        FlowArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.entitlement !== undefined && data.entitlement !== null) {
        contents.Entitlement = deserializeAws_restJson1Entitlement(data.entitlement, context);
    }
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowEntitlementCommand = deserializeAws_restJson1UpdateFlowEntitlementCommand;
const deserializeAws_restJson1UpdateFlowEntitlementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateFlowMediaStreamCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFlowMediaStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        MediaStream: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.mediaStream !== undefined && data.mediaStream !== null) {
        contents.MediaStream = deserializeAws_restJson1MediaStream(data.mediaStream, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowMediaStreamCommand = deserializeAws_restJson1UpdateFlowMediaStreamCommand;
const deserializeAws_restJson1UpdateFlowMediaStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateFlowOutputCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFlowOutputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Output: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.output !== undefined && data.output !== null) {
        contents.Output = deserializeAws_restJson1Output(data.output, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowOutputCommand = deserializeAws_restJson1UpdateFlowOutputCommand;
const deserializeAws_restJson1UpdateFlowOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateFlowSourceCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFlowSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FlowArn: undefined,
        Source: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.flowArn !== undefined && data.flowArn !== null) {
        contents.FlowArn = data.flowArn;
    }
    if (data.source !== undefined && data.source !== null) {
        contents.Source = deserializeAws_restJson1Source(data.source, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowSourceCommand = deserializeAws_restJson1UpdateFlowSourceCommand;
const deserializeAws_restJson1UpdateFlowSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.mediaconnect#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.mediaconnect#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediaconnect#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediaconnect#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediaconnect#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
const deserializeAws_restJson1AddFlowOutputs420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AddFlowOutputs420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1CreateFlow420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CreateFlow420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "GrantFlowEntitlements420Exception",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
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
        Message: undefined,
    };
    const data = parsedOutput.body;
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
const serializeAws_restJson1__listOfAddMediaStreamRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AddMediaStreamRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfAddOutputRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AddOutputRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfDestinationConfigurationRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DestinationConfigurationRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfGrantEntitlementRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1GrantEntitlementRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfInputConfigurationRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputConfigurationRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaStreamOutputConfigurationRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaStreamSourceConfigurationRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfSetSourceRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SetSourceRequest(entry, context);
    });
};
const serializeAws_restJson1__listOfVpcInterfaceRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1VpcInterfaceRequest(entry, context);
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
const serializeAws_restJson1AddMediaStreamRequest = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
        }),
        ...(input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.MediaStreamId !== undefined && input.MediaStreamId !== null && { mediaStreamId: input.MediaStreamId }),
        ...(input.MediaStreamName !== undefined &&
            input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
        ...(input.MediaStreamType !== undefined &&
            input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType }),
        ...(input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat }),
    };
};
const serializeAws_restJson1AddOutputRequest = (input, context) => {
    return {
        ...(input.CidrAllowList !== undefined &&
            input.CidrAllowList !== null && {
            cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
        ...(input.MediaStreamOutputConfigurations !== undefined &&
            input.MediaStreamOutputConfigurations !== null && {
            mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(input.MediaStreamOutputConfigurations, context),
        }),
        ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Port !== undefined && input.Port !== null && { port: input.Port }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
        ...(input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId }),
        ...(input.SmoothingLatency !== undefined &&
            input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency }),
        ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
        ...(input.VpcInterfaceAttachment !== undefined &&
            input.VpcInterfaceAttachment !== null && {
            vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
        }),
    };
};
const serializeAws_restJson1DestinationConfigurationRequest = (input, context) => {
    return {
        ...(input.DestinationIp !== undefined && input.DestinationIp !== null && { destinationIp: input.DestinationIp }),
        ...(input.DestinationPort !== undefined &&
            input.DestinationPort !== null && { destinationPort: input.DestinationPort }),
        ...(input.Interface !== undefined &&
            input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
    };
};
const serializeAws_restJson1EncodingParametersRequest = (input, context) => {
    return {
        ...(input.CompressionFactor !== undefined &&
            input.CompressionFactor !== null && { compressionFactor: input.CompressionFactor }),
        ...(input.EncoderProfile !== undefined &&
            input.EncoderProfile !== null && { encoderProfile: input.EncoderProfile }),
    };
};
const serializeAws_restJson1Encryption = (input, context) => {
    return {
        ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
        ...(input.ConstantInitializationVector !== undefined &&
            input.ConstantInitializationVector !== null && {
            constantInitializationVector: input.ConstantInitializationVector,
        }),
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId }),
        ...(input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType }),
        ...(input.Region !== undefined && input.Region !== null && { region: input.Region }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
    };
};
const serializeAws_restJson1FailoverConfig = (input, context) => {
    return {
        ...(input.RecoveryWindow !== undefined &&
            input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow }),
        ...(input.State !== undefined && input.State !== null && { state: input.State }),
    };
};
const serializeAws_restJson1FmtpRequest = (input, context) => {
    return {
        ...(input.ChannelOrder !== undefined && input.ChannelOrder !== null && { channelOrder: input.ChannelOrder }),
        ...(input.Colorimetry !== undefined && input.Colorimetry !== null && { colorimetry: input.Colorimetry }),
        ...(input.ExactFramerate !== undefined &&
            input.ExactFramerate !== null && { exactFramerate: input.ExactFramerate }),
        ...(input.Par !== undefined && input.Par !== null && { par: input.Par }),
        ...(input.Range !== undefined && input.Range !== null && { range: input.Range }),
        ...(input.ScanMode !== undefined && input.ScanMode !== null && { scanMode: input.ScanMode }),
        ...(input.Tcs !== undefined && input.Tcs !== null && { tcs: input.Tcs }),
    };
};
const serializeAws_restJson1GrantEntitlementRequest = (input, context) => {
    return {
        ...(input.DataTransferSubscriberFeePercent !== undefined &&
            input.DataTransferSubscriberFeePercent !== null && {
            dataTransferSubscriberFeePercent: input.DataTransferSubscriberFeePercent,
        }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.EntitlementStatus !== undefined &&
            input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Subscribers !== undefined &&
            input.Subscribers !== null && {
            subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
        }),
    };
};
const serializeAws_restJson1InputConfigurationRequest = (input, context) => {
    return {
        ...(input.InputPort !== undefined && input.InputPort !== null && { inputPort: input.InputPort }),
        ...(input.Interface !== undefined &&
            input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
    };
};
const serializeAws_restJson1InterfaceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    };
};
const serializeAws_restJson1MediaStreamAttributesRequest = (input, context) => {
    return {
        ...(input.Fmtp !== undefined &&
            input.Fmtp !== null && { fmtp: serializeAws_restJson1FmtpRequest(input.Fmtp, context) }),
        ...(input.Lang !== undefined && input.Lang !== null && { lang: input.Lang }),
    };
};
const serializeAws_restJson1MediaStreamOutputConfigurationRequest = (input, context) => {
    return {
        ...(input.DestinationConfigurations !== undefined &&
            input.DestinationConfigurations !== null && {
            destinationConfigurations: serializeAws_restJson1__listOfDestinationConfigurationRequest(input.DestinationConfigurations, context),
        }),
        ...(input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName }),
        ...(input.EncodingParameters !== undefined &&
            input.EncodingParameters !== null && {
            encodingParameters: serializeAws_restJson1EncodingParametersRequest(input.EncodingParameters, context),
        }),
        ...(input.MediaStreamName !== undefined &&
            input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
    };
};
const serializeAws_restJson1MediaStreamSourceConfigurationRequest = (input, context) => {
    return {
        ...(input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName }),
        ...(input.InputConfigurations !== undefined &&
            input.InputConfigurations !== null && {
            inputConfigurations: serializeAws_restJson1__listOfInputConfigurationRequest(input.InputConfigurations, context),
        }),
        ...(input.MediaStreamName !== undefined &&
            input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
    };
};
const serializeAws_restJson1SetSourceRequest = (input, context) => {
    return {
        ...(input.Decryption !== undefined &&
            input.Decryption !== null && { decryption: serializeAws_restJson1Encryption(input.Decryption, context) }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.EntitlementArn !== undefined &&
            input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn }),
        ...(input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort }),
        ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
        ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
        ...(input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer }),
        ...(input.MediaStreamSourceConfigurations !== undefined &&
            input.MediaStreamSourceConfigurations !== null && {
            mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(input.MediaStreamSourceConfigurations, context),
        }),
        ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
        ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
        ...(input.VpcInterfaceName !== undefined &&
            input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
        ...(input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr }),
    };
};
const serializeAws_restJson1UpdateEncryption = (input, context) => {
    return {
        ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
        ...(input.ConstantInitializationVector !== undefined &&
            input.ConstantInitializationVector !== null && {
            constantInitializationVector: input.ConstantInitializationVector,
        }),
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId }),
        ...(input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType }),
        ...(input.Region !== undefined && input.Region !== null && { region: input.Region }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
    };
};
const serializeAws_restJson1UpdateFailoverConfig = (input, context) => {
    return {
        ...(input.RecoveryWindow !== undefined &&
            input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow }),
        ...(input.State !== undefined && input.State !== null && { state: input.State }),
    };
};
const serializeAws_restJson1VpcInterfaceAttachment = (input, context) => {
    return {
        ...(input.VpcInterfaceName !== undefined &&
            input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
    };
};
const serializeAws_restJson1VpcInterfaceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.NetworkInterfaceType !== undefined &&
            input.NetworkInterfaceType !== null && { networkInterfaceType: input.NetworkInterfaceType }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { subnetId: input.SubnetId }),
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
const deserializeAws_restJson1__listOfDestinationConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DestinationConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfEntitlement = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Entitlement(entry, context);
    });
};
const deserializeAws_restJson1__listOfInputConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfListedEntitlement = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListedEntitlement(entry, context);
    });
};
const deserializeAws_restJson1__listOfListedFlow = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListedFlow(entry, context);
    });
};
const deserializeAws_restJson1__listOfMediaStream = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStream(entry, context);
    });
};
const deserializeAws_restJson1__listOfMediaStreamOutputConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStreamOutputConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfMediaStreamSourceConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStreamSourceConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfOffering = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Offering(entry, context);
    });
};
const deserializeAws_restJson1__listOfOutput = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Output(entry, context);
    });
};
const deserializeAws_restJson1__listOfReservation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Reservation(entry, context);
    });
};
const deserializeAws_restJson1__listOfSource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Source(entry, context);
    });
};
const deserializeAws_restJson1__listOfVpcInterface = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VpcInterface(entry, context);
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
const deserializeAws_restJson1DestinationConfiguration = (output, context) => {
    return {
        DestinationIp: output.destinationIp !== undefined && output.destinationIp !== null ? output.destinationIp : undefined,
        DestinationPort: output.destinationPort !== undefined && output.destinationPort !== null ? output.destinationPort : undefined,
        Interface: output.interface !== undefined && output.interface !== null
            ? deserializeAws_restJson1Interface(output.interface, context)
            : undefined,
        OutboundIp: output.outboundIp !== undefined && output.outboundIp !== null ? output.outboundIp : undefined,
    };
};
const deserializeAws_restJson1EncodingParameters = (output, context) => {
    return {
        CompressionFactor: output.compressionFactor !== undefined && output.compressionFactor !== null
            ? output.compressionFactor
            : undefined,
        EncoderProfile: output.encoderProfile !== undefined && output.encoderProfile !== null ? output.encoderProfile : undefined,
    };
};
const deserializeAws_restJson1Encryption = (output, context) => {
    return {
        Algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        DeviceId: output.deviceId !== undefined && output.deviceId !== null ? output.deviceId : undefined,
        KeyType: output.keyType !== undefined && output.keyType !== null ? output.keyType : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SecretArn: output.secretArn !== undefined && output.secretArn !== null ? output.secretArn : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1Entitlement = (output, context) => {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1Encryption(output.encryption, context)
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        EntitlementStatus: output.entitlementStatus !== undefined && output.entitlementStatus !== null
            ? output.entitlementStatus
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Subscribers: output.subscribers !== undefined && output.subscribers !== null
            ? deserializeAws_restJson1__listOf__string(output.subscribers, context)
            : undefined,
    };
};
const deserializeAws_restJson1FailoverConfig = (output, context) => {
    return {
        RecoveryWindow: output.recoveryWindow !== undefined && output.recoveryWindow !== null ? output.recoveryWindow : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1Flow = (output, context) => {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EgressIp: output.egressIp !== undefined && output.egressIp !== null ? output.egressIp : undefined,
        Entitlements: output.entitlements !== undefined && output.entitlements !== null
            ? deserializeAws_restJson1__listOfEntitlement(output.entitlements, context)
            : undefined,
        FlowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
        MediaStreams: output.mediaStreams !== undefined && output.mediaStreams !== null
            ? deserializeAws_restJson1__listOfMediaStream(output.mediaStreams, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Outputs: output.outputs !== undefined && output.outputs !== null
            ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
            : undefined,
        Source: output.source !== undefined && output.source !== null
            ? deserializeAws_restJson1Source(output.source, context)
            : undefined,
        SourceFailoverConfig: output.sourceFailoverConfig !== undefined && output.sourceFailoverConfig !== null
            ? deserializeAws_restJson1FailoverConfig(output.sourceFailoverConfig, context)
            : undefined,
        Sources: output.sources !== undefined && output.sources !== null
            ? deserializeAws_restJson1__listOfSource(output.sources, context)
            : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
        VpcInterfaces: output.vpcInterfaces !== undefined && output.vpcInterfaces !== null
            ? deserializeAws_restJson1__listOfVpcInterface(output.vpcInterfaces, context)
            : undefined,
    };
};
const deserializeAws_restJson1Fmtp = (output, context) => {
    return {
        ChannelOrder: output.channelOrder !== undefined && output.channelOrder !== null ? output.channelOrder : undefined,
        Colorimetry: output.colorimetry !== undefined && output.colorimetry !== null ? output.colorimetry : undefined,
        ExactFramerate: output.exactFramerate !== undefined && output.exactFramerate !== null ? output.exactFramerate : undefined,
        Par: output.par !== undefined && output.par !== null ? output.par : undefined,
        Range: output.range !== undefined && output.range !== null ? output.range : undefined,
        ScanMode: output.scanMode !== undefined && output.scanMode !== null ? output.scanMode : undefined,
        Tcs: output.tcs !== undefined && output.tcs !== null ? output.tcs : undefined,
    };
};
const deserializeAws_restJson1InputConfiguration = (output, context) => {
    return {
        InputIp: output.inputIp !== undefined && output.inputIp !== null ? output.inputIp : undefined,
        InputPort: output.inputPort !== undefined && output.inputPort !== null ? output.inputPort : undefined,
        Interface: output.interface !== undefined && output.interface !== null
            ? deserializeAws_restJson1Interface(output.interface, context)
            : undefined,
    };
};
const deserializeAws_restJson1Interface = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ListedEntitlement = (output, context) => {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        EntitlementName: output.entitlementName !== undefined && output.entitlementName !== null ? output.entitlementName : undefined,
    };
};
const deserializeAws_restJson1ListedFlow = (output, context) => {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        FlowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1MediaStream = (output, context) => {
    return {
        Attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1MediaStreamAttributes(output.attributes, context)
            : undefined,
        ClockRate: output.clockRate !== undefined && output.clockRate !== null ? output.clockRate : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Fmt: output.fmt !== undefined && output.fmt !== null ? output.fmt : undefined,
        MediaStreamId: output.mediaStreamId !== undefined && output.mediaStreamId !== null ? output.mediaStreamId : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
        MediaStreamType: output.mediaStreamType !== undefined && output.mediaStreamType !== null ? output.mediaStreamType : undefined,
        VideoFormat: output.videoFormat !== undefined && output.videoFormat !== null ? output.videoFormat : undefined,
    };
};
const deserializeAws_restJson1MediaStreamAttributes = (output, context) => {
    return {
        Fmtp: output.fmtp !== undefined && output.fmtp !== null
            ? deserializeAws_restJson1Fmtp(output.fmtp, context)
            : undefined,
        Lang: output.lang !== undefined && output.lang !== null ? output.lang : undefined,
    };
};
const deserializeAws_restJson1MediaStreamOutputConfiguration = (output, context) => {
    return {
        DestinationConfigurations: output.destinationConfigurations !== undefined && output.destinationConfigurations !== null
            ? deserializeAws_restJson1__listOfDestinationConfiguration(output.destinationConfigurations, context)
            : undefined,
        EncodingName: output.encodingName !== undefined && output.encodingName !== null ? output.encodingName : undefined,
        EncodingParameters: output.encodingParameters !== undefined && output.encodingParameters !== null
            ? deserializeAws_restJson1EncodingParameters(output.encodingParameters, context)
            : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
    };
};
const deserializeAws_restJson1MediaStreamSourceConfiguration = (output, context) => {
    return {
        EncodingName: output.encodingName !== undefined && output.encodingName !== null ? output.encodingName : undefined,
        InputConfigurations: output.inputConfigurations !== undefined && output.inputConfigurations !== null
            ? deserializeAws_restJson1__listOfInputConfiguration(output.inputConfigurations, context)
            : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
    };
};
const deserializeAws_restJson1Messages = (output, context) => {
    return {
        Errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_restJson1__listOf__string(output.errors, context)
            : undefined,
    };
};
const deserializeAws_restJson1Offering = (output, context) => {
    return {
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        OfferingArn: output.offeringArn !== undefined && output.offeringArn !== null ? output.offeringArn : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        PricePerUnit: output.pricePerUnit !== undefined && output.pricePerUnit !== null ? output.pricePerUnit : undefined,
        PriceUnits: output.priceUnits !== undefined && output.priceUnits !== null ? output.priceUnits : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
            : undefined,
    };
};
const deserializeAws_restJson1Output = (output, context) => {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1Encryption(output.encryption, context)
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        ListenerAddress: output.listenerAddress !== undefined && output.listenerAddress !== null ? output.listenerAddress : undefined,
        MediaLiveInputArn: output.mediaLiveInputArn !== undefined && output.mediaLiveInputArn !== null
            ? output.mediaLiveInputArn
            : undefined,
        MediaStreamOutputConfigurations: output.mediaStreamOutputConfigurations !== undefined && output.mediaStreamOutputConfigurations !== null
            ? deserializeAws_restJson1__listOfMediaStreamOutputConfiguration(output.mediaStreamOutputConfigurations, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        OutputArn: output.outputArn !== undefined && output.outputArn !== null ? output.outputArn : undefined,
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        Transport: output.transport !== undefined && output.transport !== null
            ? deserializeAws_restJson1Transport(output.transport, context)
            : undefined,
        VpcInterfaceAttachment: output.vpcInterfaceAttachment !== undefined && output.vpcInterfaceAttachment !== null
            ? deserializeAws_restJson1VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
            : undefined,
    };
};
const deserializeAws_restJson1Reservation = (output, context) => {
    return {
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        End: output.end !== undefined && output.end !== null ? output.end : undefined,
        OfferingArn: output.offeringArn !== undefined && output.offeringArn !== null ? output.offeringArn : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        PricePerUnit: output.pricePerUnit !== undefined && output.pricePerUnit !== null ? output.pricePerUnit : undefined,
        PriceUnits: output.priceUnits !== undefined && output.priceUnits !== null ? output.priceUnits : undefined,
        ReservationArn: output.reservationArn !== undefined && output.reservationArn !== null ? output.reservationArn : undefined,
        ReservationName: output.reservationName !== undefined && output.reservationName !== null ? output.reservationName : undefined,
        ReservationState: output.reservationState !== undefined && output.reservationState !== null ? output.reservationState : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
            : undefined,
        Start: output.start !== undefined && output.start !== null ? output.start : undefined,
    };
};
const deserializeAws_restJson1ResourceSpecification = (output, context) => {
    return {
        ReservedBitrate: output.reservedBitrate !== undefined && output.reservedBitrate !== null ? output.reservedBitrate : undefined,
        ResourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_restJson1Source = (output, context) => {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Decryption: output.decryption !== undefined && output.decryption !== null
            ? deserializeAws_restJson1Encryption(output.decryption, context)
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        IngestIp: output.ingestIp !== undefined && output.ingestIp !== null ? output.ingestIp : undefined,
        IngestPort: output.ingestPort !== undefined && output.ingestPort !== null ? output.ingestPort : undefined,
        MediaStreamSourceConfigurations: output.mediaStreamSourceConfigurations !== undefined && output.mediaStreamSourceConfigurations !== null
            ? deserializeAws_restJson1__listOfMediaStreamSourceConfiguration(output.mediaStreamSourceConfigurations, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SourceArn: output.sourceArn !== undefined && output.sourceArn !== null ? output.sourceArn : undefined,
        Transport: output.transport !== undefined && output.transport !== null
            ? deserializeAws_restJson1Transport(output.transport, context)
            : undefined,
        VpcInterfaceName: output.vpcInterfaceName !== undefined && output.vpcInterfaceName !== null ? output.vpcInterfaceName : undefined,
        WhitelistCidr: output.whitelistCidr !== undefined && output.whitelistCidr !== null ? output.whitelistCidr : undefined,
    };
};
const deserializeAws_restJson1Transport = (output, context) => {
    return {
        CidrAllowList: output.cidrAllowList !== undefined && output.cidrAllowList !== null
            ? deserializeAws_restJson1__listOf__string(output.cidrAllowList, context)
            : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MaxLatency: output.maxLatency !== undefined && output.maxLatency !== null ? output.maxLatency : undefined,
        MaxSyncBuffer: output.maxSyncBuffer !== undefined && output.maxSyncBuffer !== null ? output.maxSyncBuffer : undefined,
        MinLatency: output.minLatency !== undefined && output.minLatency !== null ? output.minLatency : undefined,
        Protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        RemoteId: output.remoteId !== undefined && output.remoteId !== null ? output.remoteId : undefined,
        SmoothingLatency: output.smoothingLatency !== undefined && output.smoothingLatency !== null ? output.smoothingLatency : undefined,
        StreamId: output.streamId !== undefined && output.streamId !== null ? output.streamId : undefined,
    };
};
const deserializeAws_restJson1VpcInterface = (output, context) => {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        NetworkInterfaceIds: output.networkInterfaceIds !== undefined && output.networkInterfaceIds !== null
            ? deserializeAws_restJson1__listOf__string(output.networkInterfaceIds, context)
            : undefined,
        NetworkInterfaceType: output.networkInterfaceType !== undefined && output.networkInterfaceType !== null
            ? output.networkInterfaceType
            : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SecurityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1__listOf__string(output.securityGroupIds, context)
            : undefined,
        SubnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
    };
};
const deserializeAws_restJson1VpcInterfaceAttachment = (output, context) => {
    return {
        VpcInterfaceName: output.vpcInterfaceName !== undefined && output.vpcInterfaceName !== null ? output.vpcInterfaceName : undefined,
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