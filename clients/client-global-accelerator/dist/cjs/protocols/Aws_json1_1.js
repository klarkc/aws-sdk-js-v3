"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1AllowCustomRoutingTrafficCommand = exports.deserializeAws_json1_1AdvertiseByoipCidrCommand = exports.deserializeAws_json1_1AddCustomRoutingEndpointsCommand = exports.serializeAws_json1_1WithdrawByoipCidrCommand = exports.serializeAws_json1_1UpdateListenerCommand = exports.serializeAws_json1_1UpdateEndpointGroupCommand = exports.serializeAws_json1_1UpdateCustomRoutingListenerCommand = exports.serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = exports.serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = exports.serializeAws_json1_1UpdateAcceleratorAttributesCommand = exports.serializeAws_json1_1UpdateAcceleratorCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RemoveCustomRoutingEndpointsCommand = exports.serializeAws_json1_1ProvisionByoipCidrCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListListenersCommand = exports.serializeAws_json1_1ListEndpointGroupsCommand = exports.serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = exports.serializeAws_json1_1ListCustomRoutingPortMappingsCommand = exports.serializeAws_json1_1ListCustomRoutingListenersCommand = exports.serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = exports.serializeAws_json1_1ListCustomRoutingAcceleratorsCommand = exports.serializeAws_json1_1ListByoipCidrsCommand = exports.serializeAws_json1_1ListAcceleratorsCommand = exports.serializeAws_json1_1DescribeListenerCommand = exports.serializeAws_json1_1DescribeEndpointGroupCommand = exports.serializeAws_json1_1DescribeCustomRoutingListenerCommand = exports.serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = exports.serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = exports.serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = exports.serializeAws_json1_1DescribeAcceleratorAttributesCommand = exports.serializeAws_json1_1DescribeAcceleratorCommand = exports.serializeAws_json1_1DeprovisionByoipCidrCommand = exports.serializeAws_json1_1DenyCustomRoutingTrafficCommand = exports.serializeAws_json1_1DeleteListenerCommand = exports.serializeAws_json1_1DeleteEndpointGroupCommand = exports.serializeAws_json1_1DeleteCustomRoutingListenerCommand = exports.serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = exports.serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = exports.serializeAws_json1_1DeleteAcceleratorCommand = exports.serializeAws_json1_1CreateListenerCommand = exports.serializeAws_json1_1CreateEndpointGroupCommand = exports.serializeAws_json1_1CreateCustomRoutingListenerCommand = exports.serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = exports.serializeAws_json1_1CreateCustomRoutingAcceleratorCommand = exports.serializeAws_json1_1CreateAcceleratorCommand = exports.serializeAws_json1_1AllowCustomRoutingTrafficCommand = exports.serializeAws_json1_1AdvertiseByoipCidrCommand = exports.serializeAws_json1_1AddCustomRoutingEndpointsCommand = void 0;
exports.deserializeAws_json1_1WithdrawByoipCidrCommand = exports.deserializeAws_json1_1UpdateListenerCommand = exports.deserializeAws_json1_1UpdateEndpointGroupCommand = exports.deserializeAws_json1_1UpdateCustomRoutingListenerCommand = exports.deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = exports.deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = exports.deserializeAws_json1_1UpdateAcceleratorAttributesCommand = exports.deserializeAws_json1_1UpdateAcceleratorCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand = exports.deserializeAws_json1_1ProvisionByoipCidrCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListListenersCommand = exports.deserializeAws_json1_1ListEndpointGroupsCommand = exports.deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = exports.deserializeAws_json1_1ListCustomRoutingPortMappingsCommand = exports.deserializeAws_json1_1ListCustomRoutingListenersCommand = exports.deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = exports.deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand = exports.deserializeAws_json1_1ListByoipCidrsCommand = exports.deserializeAws_json1_1ListAcceleratorsCommand = exports.deserializeAws_json1_1DescribeListenerCommand = exports.deserializeAws_json1_1DescribeEndpointGroupCommand = exports.deserializeAws_json1_1DescribeCustomRoutingListenerCommand = exports.deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = exports.deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = exports.deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = exports.deserializeAws_json1_1DescribeAcceleratorAttributesCommand = exports.deserializeAws_json1_1DescribeAcceleratorCommand = exports.deserializeAws_json1_1DeprovisionByoipCidrCommand = exports.deserializeAws_json1_1DenyCustomRoutingTrafficCommand = exports.deserializeAws_json1_1DeleteListenerCommand = exports.deserializeAws_json1_1DeleteEndpointGroupCommand = exports.deserializeAws_json1_1DeleteCustomRoutingListenerCommand = exports.deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = exports.deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = exports.deserializeAws_json1_1DeleteAcceleratorCommand = exports.deserializeAws_json1_1CreateListenerCommand = exports.deserializeAws_json1_1CreateEndpointGroupCommand = exports.deserializeAws_json1_1CreateCustomRoutingListenerCommand = exports.deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = exports.deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand = exports.deserializeAws_json1_1CreateAcceleratorCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AddCustomRoutingEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCustomRoutingEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddCustomRoutingEndpointsCommand = serializeAws_json1_1AddCustomRoutingEndpointsCommand;
const serializeAws_json1_1AdvertiseByoipCidrCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.AdvertiseByoipCidr",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdvertiseByoipCidrRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdvertiseByoipCidrCommand = serializeAws_json1_1AdvertiseByoipCidrCommand;
const serializeAws_json1_1AllowCustomRoutingTrafficCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllowCustomRoutingTrafficRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllowCustomRoutingTrafficCommand = serializeAws_json1_1AllowCustomRoutingTrafficCommand;
const serializeAws_json1_1CreateAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAcceleratorCommand = serializeAws_json1_1CreateAcceleratorCommand;
const serializeAws_json1_1CreateCustomRoutingAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCustomRoutingAcceleratorCommand = serializeAws_json1_1CreateCustomRoutingAcceleratorCommand;
const serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand;
const serializeAws_json1_1CreateCustomRoutingListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCustomRoutingListenerCommand = serializeAws_json1_1CreateCustomRoutingListenerCommand;
const serializeAws_json1_1CreateEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEndpointGroupCommand = serializeAws_json1_1CreateEndpointGroupCommand;
const serializeAws_json1_1CreateListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.CreateListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateListenerCommand = serializeAws_json1_1CreateListenerCommand;
const serializeAws_json1_1DeleteAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAcceleratorCommand = serializeAws_json1_1DeleteAcceleratorCommand;
const serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand;
const serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand;
const serializeAws_json1_1DeleteCustomRoutingListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCustomRoutingListenerCommand = serializeAws_json1_1DeleteCustomRoutingListenerCommand;
const serializeAws_json1_1DeleteEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEndpointGroupCommand = serializeAws_json1_1DeleteEndpointGroupCommand;
const serializeAws_json1_1DeleteListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeleteListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteListenerCommand = serializeAws_json1_1DeleteListenerCommand;
const serializeAws_json1_1DenyCustomRoutingTrafficCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DenyCustomRoutingTrafficRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DenyCustomRoutingTrafficCommand = serializeAws_json1_1DenyCustomRoutingTrafficCommand;
const serializeAws_json1_1DeprovisionByoipCidrCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DeprovisionByoipCidr",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeprovisionByoipCidrRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeprovisionByoipCidrCommand = serializeAws_json1_1DeprovisionByoipCidrCommand;
const serializeAws_json1_1DescribeAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAcceleratorCommand = serializeAws_json1_1DescribeAcceleratorCommand;
const serializeAws_json1_1DescribeAcceleratorAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAcceleratorAttributesCommand = serializeAws_json1_1DescribeAcceleratorAttributesCommand;
const serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand;
const serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand;
const serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand;
const serializeAws_json1_1DescribeCustomRoutingListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCustomRoutingListenerCommand = serializeAws_json1_1DescribeCustomRoutingListenerCommand;
const serializeAws_json1_1DescribeEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEndpointGroupCommand = serializeAws_json1_1DescribeEndpointGroupCommand;
const serializeAws_json1_1DescribeListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.DescribeListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeListenerCommand = serializeAws_json1_1DescribeListenerCommand;
const serializeAws_json1_1ListAcceleratorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListAccelerators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAcceleratorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAcceleratorsCommand = serializeAws_json1_1ListAcceleratorsCommand;
const serializeAws_json1_1ListByoipCidrsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListByoipCidrs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListByoipCidrsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListByoipCidrsCommand = serializeAws_json1_1ListByoipCidrsCommand;
const serializeAws_json1_1ListCustomRoutingAcceleratorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCustomRoutingAcceleratorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCustomRoutingAcceleratorsCommand = serializeAws_json1_1ListCustomRoutingAcceleratorsCommand;
const serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCustomRoutingEndpointGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand;
const serializeAws_json1_1ListCustomRoutingListenersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingListeners",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCustomRoutingListenersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCustomRoutingListenersCommand = serializeAws_json1_1ListCustomRoutingListenersCommand;
const serializeAws_json1_1ListCustomRoutingPortMappingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCustomRoutingPortMappingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCustomRoutingPortMappingsCommand = serializeAws_json1_1ListCustomRoutingPortMappingsCommand;
const serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand;
const serializeAws_json1_1ListEndpointGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListEndpointGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEndpointGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEndpointGroupsCommand = serializeAws_json1_1ListEndpointGroupsCommand;
const serializeAws_json1_1ListListenersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListListeners",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListListenersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListListenersCommand = serializeAws_json1_1ListListenersCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ProvisionByoipCidrCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.ProvisionByoipCidr",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ProvisionByoipCidrRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ProvisionByoipCidrCommand = serializeAws_json1_1ProvisionByoipCidrCommand;
const serializeAws_json1_1RemoveCustomRoutingEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveCustomRoutingEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveCustomRoutingEndpointsCommand = serializeAws_json1_1RemoveCustomRoutingEndpointsCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAcceleratorCommand = serializeAws_json1_1UpdateAcceleratorCommand;
const serializeAws_json1_1UpdateAcceleratorAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAcceleratorAttributesCommand = serializeAws_json1_1UpdateAcceleratorAttributesCommand;
const serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingAcceleratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand;
const serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand;
const serializeAws_json1_1UpdateCustomRoutingListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCustomRoutingListenerCommand = serializeAws_json1_1UpdateCustomRoutingListenerCommand;
const serializeAws_json1_1UpdateEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateEndpointGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEndpointGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateEndpointGroupCommand = serializeAws_json1_1UpdateEndpointGroupCommand;
const serializeAws_json1_1UpdateListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.UpdateListener",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateListenerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateListenerCommand = serializeAws_json1_1UpdateListenerCommand;
const serializeAws_json1_1WithdrawByoipCidrCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GlobalAccelerator_V20180706.WithdrawByoipCidr",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1WithdrawByoipCidrRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1WithdrawByoipCidrCommand = serializeAws_json1_1WithdrawByoipCidrCommand;
const deserializeAws_json1_1AddCustomRoutingEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddCustomRoutingEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCustomRoutingEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddCustomRoutingEndpointsCommand = deserializeAws_json1_1AddCustomRoutingEndpointsCommand;
const deserializeAws_json1_1AddCustomRoutingEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.globalaccelerator#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointAlreadyExistsException":
        case "com.amazonaws.globalaccelerator#EndpointAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EndpointAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AdvertiseByoipCidrCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdvertiseByoipCidrCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdvertiseByoipCidrResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdvertiseByoipCidrCommand = deserializeAws_json1_1AdvertiseByoipCidrCommand;
const deserializeAws_json1_1AdvertiseByoipCidrCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ByoipCidrNotFoundException":
        case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectCidrStateException":
        case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
            response = {
                ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllowCustomRoutingTrafficCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllowCustomRoutingTrafficCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllowCustomRoutingTrafficCommand = deserializeAws_json1_1AllowCustomRoutingTrafficCommand;
const deserializeAws_json1_1AllowCustomRoutingTrafficCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAcceleratorCommand = deserializeAws_json1_1CreateAcceleratorCommand;
const deserializeAws_json1_1CreateAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCustomRoutingAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand = deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand;
const deserializeAws_json1_1CreateCustomRoutingAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomRoutingEndpointGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand;
const deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupAlreadyExistsException":
        case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCustomRoutingListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCustomRoutingListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomRoutingListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCustomRoutingListenerCommand = deserializeAws_json1_1CreateCustomRoutingListenerCommand;
const deserializeAws_json1_1CreateCustomRoutingListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEndpointGroupCommand = deserializeAws_json1_1CreateEndpointGroupCommand;
const deserializeAws_json1_1CreateEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupAlreadyExistsException":
        case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateListenerCommand = deserializeAws_json1_1CreateListenerCommand;
const deserializeAws_json1_1CreateListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAcceleratorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAcceleratorCommand = deserializeAws_json1_1DeleteAcceleratorCommand;
const deserializeAws_json1_1DeleteAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotDisabledException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssociatedListenerFoundException":
        case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
            response = {
                ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand;
const deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotDisabledException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AssociatedListenerFoundException":
        case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
            response = {
                ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand;
const deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCustomRoutingListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCustomRoutingListenerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCustomRoutingListenerCommand = deserializeAws_json1_1DeleteCustomRoutingListenerCommand;
const deserializeAws_json1_1DeleteCustomRoutingListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociatedEndpointGroupFoundException":
        case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
            response = {
                ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEndpointGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEndpointGroupCommand = deserializeAws_json1_1DeleteEndpointGroupCommand;
const deserializeAws_json1_1DeleteEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteListenerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteListenerCommand = deserializeAws_json1_1DeleteListenerCommand;
const deserializeAws_json1_1DeleteListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociatedEndpointGroupFoundException":
        case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
            response = {
                ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DenyCustomRoutingTrafficCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DenyCustomRoutingTrafficCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DenyCustomRoutingTrafficCommand = deserializeAws_json1_1DenyCustomRoutingTrafficCommand;
const deserializeAws_json1_1DenyCustomRoutingTrafficCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeprovisionByoipCidrCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeprovisionByoipCidrCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeprovisionByoipCidrResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeprovisionByoipCidrCommand = deserializeAws_json1_1DeprovisionByoipCidrCommand;
const deserializeAws_json1_1DeprovisionByoipCidrCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ByoipCidrNotFoundException":
        case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectCidrStateException":
        case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
            response = {
                ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAcceleratorCommand = deserializeAws_json1_1DescribeAcceleratorCommand;
const deserializeAws_json1_1DescribeAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAcceleratorAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAcceleratorAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAcceleratorAttributesCommand = deserializeAws_json1_1DescribeAcceleratorAttributesCommand;
const deserializeAws_json1_1DescribeAcceleratorAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand;
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand;
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomRoutingEndpointGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand;
const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCustomRoutingListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCustomRoutingListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomRoutingListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCustomRoutingListenerCommand = deserializeAws_json1_1DescribeCustomRoutingListenerCommand;
const deserializeAws_json1_1DescribeCustomRoutingListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEndpointGroupCommand = deserializeAws_json1_1DescribeEndpointGroupCommand;
const deserializeAws_json1_1DescribeEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeListenerCommand = deserializeAws_json1_1DescribeListenerCommand;
const deserializeAws_json1_1DescribeListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAcceleratorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAcceleratorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAcceleratorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAcceleratorsCommand = deserializeAws_json1_1ListAcceleratorsCommand;
const deserializeAws_json1_1ListAcceleratorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListByoipCidrsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListByoipCidrsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListByoipCidrsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListByoipCidrsCommand = deserializeAws_json1_1ListByoipCidrsCommand;
const deserializeAws_json1_1ListByoipCidrsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCustomRoutingAcceleratorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand = deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand;
const deserializeAws_json1_1ListCustomRoutingAcceleratorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCustomRoutingEndpointGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand;
const deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCustomRoutingListenersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCustomRoutingListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCustomRoutingListenersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCustomRoutingListenersCommand = deserializeAws_json1_1ListCustomRoutingListenersCommand;
const deserializeAws_json1_1ListCustomRoutingListenersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCustomRoutingPortMappingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCustomRoutingPortMappingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCustomRoutingPortMappingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCustomRoutingPortMappingsCommand = deserializeAws_json1_1ListCustomRoutingPortMappingsCommand;
const deserializeAws_json1_1ListCustomRoutingPortMappingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand;
const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EndpointNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListEndpointGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEndpointGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEndpointGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEndpointGroupsCommand = deserializeAws_json1_1ListEndpointGroupsCommand;
const deserializeAws_json1_1ListEndpointGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListListenersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListListenersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListListenersCommand = deserializeAws_json1_1ListListenersCommand;
const deserializeAws_json1_1ListListenersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ProvisionByoipCidrCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ProvisionByoipCidrCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ProvisionByoipCidrResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ProvisionByoipCidrCommand = deserializeAws_json1_1ProvisionByoipCidrCommand;
const deserializeAws_json1_1ProvisionByoipCidrCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectCidrStateException":
        case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
            response = {
                ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveCustomRoutingEndpointsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand = deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand;
const deserializeAws_json1_1RemoveCustomRoutingEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.globalaccelerator#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAcceleratorCommand = deserializeAws_json1_1UpdateAcceleratorCommand;
const deserializeAws_json1_1UpdateAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAcceleratorAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAcceleratorAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAcceleratorAttributesCommand = deserializeAws_json1_1UpdateAcceleratorAttributesCommand;
const deserializeAws_json1_1UpdateAcceleratorAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand;
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand;
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AcceleratorNotFoundException":
        case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCustomRoutingListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCustomRoutingListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCustomRoutingListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCustomRoutingListenerCommand = deserializeAws_json1_1UpdateCustomRoutingListenerCommand;
const deserializeAws_json1_1UpdateCustomRoutingListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateEndpointGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateEndpointGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEndpointGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateEndpointGroupCommand = deserializeAws_json1_1UpdateEndpointGroupCommand;
const deserializeAws_json1_1UpdateEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointGroupNotFoundException":
        case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateListenerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateListenerCommand = deserializeAws_json1_1UpdateListenerCommand;
const deserializeAws_json1_1UpdateListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPortRangeException":
        case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.globalaccelerator#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1WithdrawByoipCidrCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1WithdrawByoipCidrCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1WithdrawByoipCidrResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1WithdrawByoipCidrCommand = deserializeAws_json1_1WithdrawByoipCidrCommand;
const deserializeAws_json1_1WithdrawByoipCidrCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.globalaccelerator#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ByoipCidrNotFoundException":
        case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectCidrStateException":
        case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
            response = {
                ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.globalaccelerator#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AcceleratorNotDisabledException(body, context);
    const contents = {
        name: "AcceleratorNotDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AcceleratorNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AcceleratorNotFoundException(body, context);
    const contents = {
        name: "AcceleratorNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedEndpointGroupFoundException(body, context);
    const contents = {
        name: "AssociatedEndpointGroupFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AssociatedListenerFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssociatedListenerFoundException(body, context);
    const contents = {
        name: "AssociatedListenerFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ByoipCidrNotFoundException(body, context);
    const contents = {
        name: "ByoipCidrNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EndpointAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointAlreadyExistsException(body, context);
    const contents = {
        name: "EndpointAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointGroupAlreadyExistsException(body, context);
    const contents = {
        name: "EndpointGroupAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointGroupNotFoundException(body, context);
    const contents = {
        name: "EndpointGroupNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EndpointNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EndpointNotFoundException(body, context);
    const contents = {
        name: "EndpointNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncorrectCidrStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectCidrStateException(body, context);
    const contents = {
        name: "IncorrectCidrStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = {
        name: "InvalidArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPortRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPortRangeException(body, context);
    const contents = {
        name: "InvalidPortRangeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ListenerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ListenerNotFoundException(body, context);
    const contents = {
        name: "ListenerNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddCustomRoutingEndpointsRequest = (input, context) => {
    return {
        ...(input.EndpointConfigurations !== undefined &&
            input.EndpointConfigurations !== null && {
            EndpointConfigurations: serializeAws_json1_1CustomRoutingEndpointConfigurations(input.EndpointConfigurations, context),
        }),
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    };
};
const serializeAws_json1_1AdvertiseByoipCidrRequest = (input, context) => {
    return {
        ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
    };
};
const serializeAws_json1_1AllowCustomRoutingTrafficRequest = (input, context) => {
    return {
        ...(input.AllowAllTrafficToEndpoint !== undefined &&
            input.AllowAllTrafficToEndpoint !== null && { AllowAllTrafficToEndpoint: input.AllowAllTrafficToEndpoint }),
        ...(input.DestinationAddresses !== undefined &&
            input.DestinationAddresses !== null && {
            DestinationAddresses: serializeAws_json1_1DestinationAddresses(input.DestinationAddresses, context),
        }),
        ...(input.DestinationPorts !== undefined &&
            input.DestinationPorts !== null && {
            DestinationPorts: serializeAws_json1_1DestinationPorts(input.DestinationPorts, context),
        }),
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
        ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
    };
};
const serializeAws_json1_1CidrAuthorizationContext = (input, context) => {
    return {
        ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
        ...(input.Signature !== undefined && input.Signature !== null && { Signature: input.Signature }),
    };
};
const serializeAws_json1_1CreateAcceleratorRequest = (input, context) => {
    var _a;
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
        ...(input.IpAddresses !== undefined &&
            input.IpAddresses !== null && { IpAddresses: serializeAws_json1_1IpAddresses(input.IpAddresses, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateCustomRoutingAcceleratorRequest = (input, context) => {
    var _a;
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
        ...(input.IpAddresses !== undefined &&
            input.IpAddresses !== null && { IpAddresses: serializeAws_json1_1IpAddresses(input.IpAddresses, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest = (input, context) => {
    var _a;
    return {
        ...(input.DestinationConfigurations !== undefined &&
            input.DestinationConfigurations !== null && {
            DestinationConfigurations: serializeAws_json1_1CustomRoutingDestinationConfigurations(input.DestinationConfigurations, context),
        }),
        ...(input.EndpointGroupRegion !== undefined &&
            input.EndpointGroupRegion !== null && { EndpointGroupRegion: input.EndpointGroupRegion }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    };
};
const serializeAws_json1_1CreateCustomRoutingListenerRequest = (input, context) => {
    var _a;
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.PortRanges !== undefined &&
            input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
    };
};
const serializeAws_json1_1CreateEndpointGroupRequest = (input, context) => {
    var _a;
    return {
        ...(input.EndpointConfigurations !== undefined &&
            input.EndpointConfigurations !== null && {
            EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context),
        }),
        ...(input.EndpointGroupRegion !== undefined &&
            input.EndpointGroupRegion !== null && { EndpointGroupRegion: input.EndpointGroupRegion }),
        ...(input.HealthCheckIntervalSeconds !== undefined &&
            input.HealthCheckIntervalSeconds !== null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
        ...(input.HealthCheckPath !== undefined &&
            input.HealthCheckPath !== null && { HealthCheckPath: input.HealthCheckPath }),
        ...(input.HealthCheckPort !== undefined &&
            input.HealthCheckPort !== null && { HealthCheckPort: input.HealthCheckPort }),
        ...(input.HealthCheckProtocol !== undefined &&
            input.HealthCheckProtocol !== null && { HealthCheckProtocol: input.HealthCheckProtocol }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
        ...(input.PortOverrides !== undefined &&
            input.PortOverrides !== null && {
            PortOverrides: serializeAws_json1_1PortOverrides(input.PortOverrides, context),
        }),
        ...(input.ThresholdCount !== undefined &&
            input.ThresholdCount !== null && { ThresholdCount: input.ThresholdCount }),
        ...(input.TrafficDialPercentage !== undefined &&
            input.TrafficDialPercentage !== null && { TrafficDialPercentage: input.TrafficDialPercentage }),
    };
};
const serializeAws_json1_1CreateListenerRequest = (input, context) => {
    var _a;
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.ClientAffinity !== undefined &&
            input.ClientAffinity !== null && { ClientAffinity: input.ClientAffinity }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.PortRanges !== undefined &&
            input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    };
};
const serializeAws_json1_1CustomRoutingDestinationConfiguration = (input, context) => {
    return {
        ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
        ...(input.Protocols !== undefined &&
            input.Protocols !== null && { Protocols: serializeAws_json1_1CustomRoutingProtocols(input.Protocols, context) }),
        ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
    };
};
const serializeAws_json1_1CustomRoutingDestinationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomRoutingDestinationConfiguration(entry, context);
    });
};
const serializeAws_json1_1CustomRoutingEndpointConfiguration = (input, context) => {
    return {
        ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
    };
};
const serializeAws_json1_1CustomRoutingEndpointConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomRoutingEndpointConfiguration(entry, context);
    });
};
const serializeAws_json1_1CustomRoutingProtocols = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DeleteCustomRoutingAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DeleteCustomRoutingEndpointGroupRequest = (input, context) => {
    return {
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    };
};
const serializeAws_json1_1DeleteCustomRoutingListenerRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    };
};
const serializeAws_json1_1DeleteEndpointGroupRequest = (input, context) => {
    return {
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    };
};
const serializeAws_json1_1DeleteListenerRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    };
};
const serializeAws_json1_1DenyCustomRoutingTrafficRequest = (input, context) => {
    return {
        ...(input.DenyAllTrafficToEndpoint !== undefined &&
            input.DenyAllTrafficToEndpoint !== null && { DenyAllTrafficToEndpoint: input.DenyAllTrafficToEndpoint }),
        ...(input.DestinationAddresses !== undefined &&
            input.DestinationAddresses !== null && {
            DestinationAddresses: serializeAws_json1_1DestinationAddresses(input.DestinationAddresses, context),
        }),
        ...(input.DestinationPorts !== undefined &&
            input.DestinationPorts !== null && {
            DestinationPorts: serializeAws_json1_1DestinationPorts(input.DestinationPorts, context),
        }),
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
        ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
    };
};
const serializeAws_json1_1DeprovisionByoipCidrRequest = (input, context) => {
    return {
        ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
    };
};
const serializeAws_json1_1DescribeAcceleratorAttributesRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DescribeAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DescribeCustomRoutingAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    };
};
const serializeAws_json1_1DescribeCustomRoutingEndpointGroupRequest = (input, context) => {
    return {
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    };
};
const serializeAws_json1_1DescribeCustomRoutingListenerRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    };
};
const serializeAws_json1_1DescribeEndpointGroupRequest = (input, context) => {
    return {
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    };
};
const serializeAws_json1_1DescribeListenerRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    };
};
const serializeAws_json1_1DestinationAddresses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DestinationPorts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EndpointConfiguration = (input, context) => {
    return {
        ...(input.ClientIPPreservationEnabled !== undefined &&
            input.ClientIPPreservationEnabled !== null && { ClientIPPreservationEnabled: input.ClientIPPreservationEnabled }),
        ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
        ...(input.Weight !== undefined && input.Weight !== null && { Weight: input.Weight }),
    };
};
const serializeAws_json1_1EndpointConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EndpointConfiguration(entry, context);
    });
};
const serializeAws_json1_1EndpointIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IpAddresses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListAcceleratorsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListByoipCidrsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCustomRoutingAcceleratorsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCustomRoutingEndpointGroupsRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCustomRoutingListenersRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationRequest = (input, context) => {
    return {
        ...(input.DestinationAddress !== undefined &&
            input.DestinationAddress !== null && { DestinationAddress: input.DestinationAddress }),
        ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCustomRoutingPortMappingsRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListEndpointGroupsRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListListenersRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1PortOverride = (input, context) => {
    return {
        ...(input.EndpointPort !== undefined && input.EndpointPort !== null && { EndpointPort: input.EndpointPort }),
        ...(input.ListenerPort !== undefined && input.ListenerPort !== null && { ListenerPort: input.ListenerPort }),
    };
};
const serializeAws_json1_1PortOverrides = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortOverride(entry, context);
    });
};
const serializeAws_json1_1PortRange = (input, context) => {
    return {
        ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
        ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
    };
};
const serializeAws_json1_1PortRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortRange(entry, context);
    });
};
const serializeAws_json1_1ProvisionByoipCidrRequest = (input, context) => {
    return {
        ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
        ...(input.CidrAuthorizationContext !== undefined &&
            input.CidrAuthorizationContext !== null && {
            CidrAuthorizationContext: serializeAws_json1_1CidrAuthorizationContext(input.CidrAuthorizationContext, context),
        }),
    };
};
const serializeAws_json1_1RemoveCustomRoutingEndpointsRequest = (input, context) => {
    return {
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
        ...(input.EndpointIds !== undefined &&
            input.EndpointIds !== null && { EndpointIds: serializeAws_json1_1EndpointIds(input.EndpointIds, context) }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAcceleratorAttributesRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.FlowLogsEnabled !== undefined &&
            input.FlowLogsEnabled !== null && { FlowLogsEnabled: input.FlowLogsEnabled }),
        ...(input.FlowLogsS3Bucket !== undefined &&
            input.FlowLogsS3Bucket !== null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
        ...(input.FlowLogsS3Prefix !== undefined &&
            input.FlowLogsS3Prefix !== null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
    };
};
const serializeAws_json1_1UpdateAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.FlowLogsEnabled !== undefined &&
            input.FlowLogsEnabled !== null && { FlowLogsEnabled: input.FlowLogsEnabled }),
        ...(input.FlowLogsS3Bucket !== undefined &&
            input.FlowLogsS3Bucket !== null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
        ...(input.FlowLogsS3Prefix !== undefined &&
            input.FlowLogsS3Prefix !== null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
    };
};
const serializeAws_json1_1UpdateCustomRoutingAcceleratorRequest = (input, context) => {
    return {
        ...(input.AcceleratorArn !== undefined &&
            input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateCustomRoutingListenerRequest = (input, context) => {
    return {
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
        ...(input.PortRanges !== undefined &&
            input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
    };
};
const serializeAws_json1_1UpdateEndpointGroupRequest = (input, context) => {
    return {
        ...(input.EndpointConfigurations !== undefined &&
            input.EndpointConfigurations !== null && {
            EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context),
        }),
        ...(input.EndpointGroupArn !== undefined &&
            input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
        ...(input.HealthCheckIntervalSeconds !== undefined &&
            input.HealthCheckIntervalSeconds !== null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
        ...(input.HealthCheckPath !== undefined &&
            input.HealthCheckPath !== null && { HealthCheckPath: input.HealthCheckPath }),
        ...(input.HealthCheckPort !== undefined &&
            input.HealthCheckPort !== null && { HealthCheckPort: input.HealthCheckPort }),
        ...(input.HealthCheckProtocol !== undefined &&
            input.HealthCheckProtocol !== null && { HealthCheckProtocol: input.HealthCheckProtocol }),
        ...(input.PortOverrides !== undefined &&
            input.PortOverrides !== null && {
            PortOverrides: serializeAws_json1_1PortOverrides(input.PortOverrides, context),
        }),
        ...(input.ThresholdCount !== undefined &&
            input.ThresholdCount !== null && { ThresholdCount: input.ThresholdCount }),
        ...(input.TrafficDialPercentage !== undefined &&
            input.TrafficDialPercentage !== null && { TrafficDialPercentage: input.TrafficDialPercentage }),
    };
};
const serializeAws_json1_1UpdateListenerRequest = (input, context) => {
    return {
        ...(input.ClientAffinity !== undefined &&
            input.ClientAffinity !== null && { ClientAffinity: input.ClientAffinity }),
        ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
        ...(input.PortRanges !== undefined &&
            input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    };
};
const serializeAws_json1_1WithdrawByoipCidrRequest = (input, context) => {
    return {
        ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
    };
};
const deserializeAws_json1_1Accelerator = (output, context) => {
    return {
        AcceleratorArn: output.AcceleratorArn !== undefined && output.AcceleratorArn !== null ? output.AcceleratorArn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        IpAddressType: output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
        IpSets: output.IpSets !== undefined && output.IpSets !== null
            ? deserializeAws_json1_1IpSets(output.IpSets, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1AcceleratorAttributes = (output, context) => {
    return {
        FlowLogsEnabled: output.FlowLogsEnabled !== undefined && output.FlowLogsEnabled !== null ? output.FlowLogsEnabled : undefined,
        FlowLogsS3Bucket: output.FlowLogsS3Bucket !== undefined && output.FlowLogsS3Bucket !== null ? output.FlowLogsS3Bucket : undefined,
        FlowLogsS3Prefix: output.FlowLogsS3Prefix !== undefined && output.FlowLogsS3Prefix !== null ? output.FlowLogsS3Prefix : undefined,
    };
};
const deserializeAws_json1_1AcceleratorNotDisabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AcceleratorNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Accelerators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Accelerator(entry, context);
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AddCustomRoutingEndpointsResponse = (output, context) => {
    return {
        EndpointDescriptions: output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
            ? deserializeAws_json1_1CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
            : undefined,
        EndpointGroupArn: output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null ? output.EndpointGroupArn : undefined,
    };
};
const deserializeAws_json1_1AdvertiseByoipCidrResponse = (output, context) => {
    return {
        ByoipCidr: output.ByoipCidr !== undefined && output.ByoipCidr !== null
            ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociatedEndpointGroupFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AssociatedListenerFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ByoipCidr = (output, context) => {
    return {
        Cidr: output.Cidr !== undefined && output.Cidr !== null ? output.Cidr : undefined,
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1ByoipCidrEvents(output.Events, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1ByoipCidrEvent = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ByoipCidrEvents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ByoipCidrEvent(entry, context);
    });
};
const deserializeAws_json1_1ByoipCidrNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ByoipCidrs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ByoipCidr(entry, context);
    });
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCustomRoutingEndpointGroupResponse = (output, context) => {
    return {
        EndpointGroup: output.EndpointGroup !== undefined && output.EndpointGroup !== null
            ? deserializeAws_json1_1CustomRoutingEndpointGroup(output.EndpointGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCustomRoutingListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateEndpointGroupResponse = (output, context) => {
    return {
        EndpointGroup: output.EndpointGroup !== undefined && output.EndpointGroup !== null
            ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1Listener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingAccelerator = (output, context) => {
    return {
        AcceleratorArn: output.AcceleratorArn !== undefined && output.AcceleratorArn !== null ? output.AcceleratorArn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        IpAddressType: output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
        IpSets: output.IpSets !== undefined && output.IpSets !== null
            ? deserializeAws_json1_1IpSets(output.IpSets, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingAcceleratorAttributes = (output, context) => {
    return {
        FlowLogsEnabled: output.FlowLogsEnabled !== undefined && output.FlowLogsEnabled !== null ? output.FlowLogsEnabled : undefined,
        FlowLogsS3Bucket: output.FlowLogsS3Bucket !== undefined && output.FlowLogsS3Bucket !== null ? output.FlowLogsS3Bucket : undefined,
        FlowLogsS3Prefix: output.FlowLogsS3Prefix !== undefined && output.FlowLogsS3Prefix !== null ? output.FlowLogsS3Prefix : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingAccelerators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomRoutingAccelerator(entry, context);
    });
};
const deserializeAws_json1_1CustomRoutingDestinationDescription = (output, context) => {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        Protocols: output.Protocols !== undefined && output.Protocols !== null
            ? deserializeAws_json1_1Protocols(output.Protocols, context)
            : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingDestinationDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomRoutingDestinationDescription(entry, context);
    });
};
const deserializeAws_json1_1CustomRoutingEndpointDescription = (output, context) => {
    return {
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingEndpointDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomRoutingEndpointDescription(entry, context);
    });
};
const deserializeAws_json1_1CustomRoutingEndpointGroup = (output, context) => {
    return {
        DestinationDescriptions: output.DestinationDescriptions !== undefined && output.DestinationDescriptions !== null
            ? deserializeAws_json1_1CustomRoutingDestinationDescriptions(output.DestinationDescriptions, context)
            : undefined,
        EndpointDescriptions: output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
            ? deserializeAws_json1_1CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
            : undefined,
        EndpointGroupArn: output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null ? output.EndpointGroupArn : undefined,
        EndpointGroupRegion: output.EndpointGroupRegion !== undefined && output.EndpointGroupRegion !== null
            ? output.EndpointGroupRegion
            : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingEndpointGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomRoutingEndpointGroup(entry, context);
    });
};
const deserializeAws_json1_1CustomRoutingListener = (output, context) => {
    return {
        ListenerArn: output.ListenerArn !== undefined && output.ListenerArn !== null ? output.ListenerArn : undefined,
        PortRanges: output.PortRanges !== undefined && output.PortRanges !== null
            ? deserializeAws_json1_1PortRanges(output.PortRanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomRoutingListeners = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomRoutingListener(entry, context);
    });
};
const deserializeAws_json1_1CustomRoutingProtocols = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeprovisionByoipCidrResponse = (output, context) => {
    return {
        ByoipCidr: output.ByoipCidr !== undefined && output.ByoipCidr !== null
            ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAcceleratorAttributesResponse = (output, context) => {
    return {
        AcceleratorAttributes: output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
            ? deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesResponse = (output, context) => {
    return {
        AcceleratorAttributes: output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
            ? deserializeAws_json1_1CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupResponse = (output, context) => {
    return {
        EndpointGroup: output.EndpointGroup !== undefined && output.EndpointGroup !== null
            ? deserializeAws_json1_1CustomRoutingEndpointGroup(output.EndpointGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCustomRoutingListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEndpointGroupResponse = (output, context) => {
    return {
        EndpointGroup: output.EndpointGroup !== undefined && output.EndpointGroup !== null
            ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1Listener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1DestinationPortMapping = (output, context) => {
    return {
        AcceleratorArn: output.AcceleratorArn !== undefined && output.AcceleratorArn !== null ? output.AcceleratorArn : undefined,
        AcceleratorSocketAddresses: output.AcceleratorSocketAddresses !== undefined && output.AcceleratorSocketAddresses !== null
            ? deserializeAws_json1_1SocketAddresses(output.AcceleratorSocketAddresses, context)
            : undefined,
        DestinationSocketAddress: output.DestinationSocketAddress !== undefined && output.DestinationSocketAddress !== null
            ? deserializeAws_json1_1SocketAddress(output.DestinationSocketAddress, context)
            : undefined,
        DestinationTrafficState: output.DestinationTrafficState !== undefined && output.DestinationTrafficState !== null
            ? output.DestinationTrafficState
            : undefined,
        EndpointGroupArn: output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null ? output.EndpointGroupArn : undefined,
        EndpointGroupRegion: output.EndpointGroupRegion !== undefined && output.EndpointGroupRegion !== null
            ? output.EndpointGroupRegion
            : undefined,
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
        IpAddressType: output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
    };
};
const deserializeAws_json1_1DestinationPortMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DestinationPortMapping(entry, context);
    });
};
const deserializeAws_json1_1EndpointAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EndpointDescription = (output, context) => {
    return {
        ClientIPPreservationEnabled: output.ClientIPPreservationEnabled !== undefined && output.ClientIPPreservationEnabled !== null
            ? output.ClientIPPreservationEnabled
            : undefined,
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
        HealthReason: output.HealthReason !== undefined && output.HealthReason !== null ? output.HealthReason : undefined,
        HealthState: output.HealthState !== undefined && output.HealthState !== null ? output.HealthState : undefined,
        Weight: output.Weight !== undefined && output.Weight !== null ? output.Weight : undefined,
    };
};
const deserializeAws_json1_1EndpointDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EndpointDescription(entry, context);
    });
};
const deserializeAws_json1_1EndpointGroup = (output, context) => {
    return {
        EndpointDescriptions: output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
            ? deserializeAws_json1_1EndpointDescriptions(output.EndpointDescriptions, context)
            : undefined,
        EndpointGroupArn: output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null ? output.EndpointGroupArn : undefined,
        EndpointGroupRegion: output.EndpointGroupRegion !== undefined && output.EndpointGroupRegion !== null
            ? output.EndpointGroupRegion
            : undefined,
        HealthCheckIntervalSeconds: output.HealthCheckIntervalSeconds !== undefined && output.HealthCheckIntervalSeconds !== null
            ? output.HealthCheckIntervalSeconds
            : undefined,
        HealthCheckPath: output.HealthCheckPath !== undefined && output.HealthCheckPath !== null ? output.HealthCheckPath : undefined,
        HealthCheckPort: output.HealthCheckPort !== undefined && output.HealthCheckPort !== null ? output.HealthCheckPort : undefined,
        HealthCheckProtocol: output.HealthCheckProtocol !== undefined && output.HealthCheckProtocol !== null
            ? output.HealthCheckProtocol
            : undefined,
        PortOverrides: output.PortOverrides !== undefined && output.PortOverrides !== null
            ? deserializeAws_json1_1PortOverrides(output.PortOverrides, context)
            : undefined,
        ThresholdCount: output.ThresholdCount !== undefined && output.ThresholdCount !== null ? output.ThresholdCount : undefined,
        TrafficDialPercentage: output.TrafficDialPercentage !== undefined && output.TrafficDialPercentage !== null
            ? output.TrafficDialPercentage
            : undefined,
    };
};
const deserializeAws_json1_1EndpointGroupAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EndpointGroupNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EndpointGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EndpointGroup(entry, context);
    });
};
const deserializeAws_json1_1EndpointNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IncorrectCidrStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InternalServiceErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidPortRangeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IpAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1IpSet = (output, context) => {
    return {
        IpAddresses: output.IpAddresses !== undefined && output.IpAddresses !== null
            ? deserializeAws_json1_1IpAddresses(output.IpAddresses, context)
            : undefined,
        IpFamily: output.IpFamily !== undefined && output.IpFamily !== null ? output.IpFamily : undefined,
    };
};
const deserializeAws_json1_1IpSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpSet(entry, context);
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAcceleratorsResponse = (output, context) => {
    return {
        Accelerators: output.Accelerators !== undefined && output.Accelerators !== null
            ? deserializeAws_json1_1Accelerators(output.Accelerators, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListByoipCidrsResponse = (output, context) => {
    return {
        ByoipCidrs: output.ByoipCidrs !== undefined && output.ByoipCidrs !== null
            ? deserializeAws_json1_1ByoipCidrs(output.ByoipCidrs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse = (output, context) => {
    return {
        Accelerators: output.Accelerators !== undefined && output.Accelerators !== null
            ? deserializeAws_json1_1CustomRoutingAccelerators(output.Accelerators, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCustomRoutingEndpointGroupsResponse = (output, context) => {
    return {
        EndpointGroups: output.EndpointGroups !== undefined && output.EndpointGroups !== null
            ? deserializeAws_json1_1CustomRoutingEndpointGroups(output.EndpointGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCustomRoutingListenersResponse = (output, context) => {
    return {
        Listeners: output.Listeners !== undefined && output.Listeners !== null
            ? deserializeAws_json1_1CustomRoutingListeners(output.Listeners, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationResponse = (output, context) => {
    return {
        DestinationPortMappings: output.DestinationPortMappings !== undefined && output.DestinationPortMappings !== null
            ? deserializeAws_json1_1DestinationPortMappings(output.DestinationPortMappings, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCustomRoutingPortMappingsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PortMappings: output.PortMappings !== undefined && output.PortMappings !== null
            ? deserializeAws_json1_1PortMappings(output.PortMappings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListEndpointGroupsResponse = (output, context) => {
    return {
        EndpointGroups: output.EndpointGroups !== undefined && output.EndpointGroups !== null
            ? deserializeAws_json1_1EndpointGroups(output.EndpointGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1Listener = (output, context) => {
    return {
        ClientAffinity: output.ClientAffinity !== undefined && output.ClientAffinity !== null ? output.ClientAffinity : undefined,
        ListenerArn: output.ListenerArn !== undefined && output.ListenerArn !== null ? output.ListenerArn : undefined,
        PortRanges: output.PortRanges !== undefined && output.PortRanges !== null
            ? deserializeAws_json1_1PortRanges(output.PortRanges, context)
            : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    };
};
const deserializeAws_json1_1ListenerNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Listeners = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Listener(entry, context);
    });
};
const deserializeAws_json1_1ListListenersResponse = (output, context) => {
    return {
        Listeners: output.Listeners !== undefined && output.Listeners !== null
            ? deserializeAws_json1_1Listeners(output.Listeners, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1PortMapping = (output, context) => {
    return {
        AcceleratorPort: output.AcceleratorPort !== undefined && output.AcceleratorPort !== null ? output.AcceleratorPort : undefined,
        DestinationSocketAddress: output.DestinationSocketAddress !== undefined && output.DestinationSocketAddress !== null
            ? deserializeAws_json1_1SocketAddress(output.DestinationSocketAddress, context)
            : undefined,
        DestinationTrafficState: output.DestinationTrafficState !== undefined && output.DestinationTrafficState !== null
            ? output.DestinationTrafficState
            : undefined,
        EndpointGroupArn: output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null ? output.EndpointGroupArn : undefined,
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
        Protocols: output.Protocols !== undefined && output.Protocols !== null
            ? deserializeAws_json1_1CustomRoutingProtocols(output.Protocols, context)
            : undefined,
    };
};
const deserializeAws_json1_1PortMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortMapping(entry, context);
    });
};
const deserializeAws_json1_1PortOverride = (output, context) => {
    return {
        EndpointPort: output.EndpointPort !== undefined && output.EndpointPort !== null ? output.EndpointPort : undefined,
        ListenerPort: output.ListenerPort !== undefined && output.ListenerPort !== null ? output.ListenerPort : undefined,
    };
};
const deserializeAws_json1_1PortOverrides = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortOverride(entry, context);
    });
};
const deserializeAws_json1_1PortRange = (output, context) => {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
const deserializeAws_json1_1PortRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortRange(entry, context);
    });
};
const deserializeAws_json1_1Protocols = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProvisionByoipCidrResponse = (output, context) => {
    return {
        ByoipCidr: output.ByoipCidr !== undefined && output.ByoipCidr !== null
            ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
            : undefined,
    };
};
const deserializeAws_json1_1SocketAddress = (output, context) => {
    return {
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_json1_1SocketAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SocketAddress(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateAcceleratorAttributesResponse = (output, context) => {
    return {
        AcceleratorAttributes: output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
            ? deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesResponse = (output, context) => {
    return {
        AcceleratorAttributes: output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
            ? deserializeAws_json1_1CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse = (output, context) => {
    return {
        Accelerator: output.Accelerator !== undefined && output.Accelerator !== null
            ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateCustomRoutingListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateEndpointGroupResponse = (output, context) => {
    return {
        EndpointGroup: output.EndpointGroup !== undefined && output.EndpointGroup !== null
            ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateListenerResponse = (output, context) => {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_json1_1Listener(output.Listener, context)
            : undefined,
    };
};
const deserializeAws_json1_1WithdrawByoipCidrResponse = (output, context) => {
    return {
        ByoipCidr: output.ByoipCidr !== undefined && output.ByoipCidr !== null
            ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
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
//# sourceMappingURL=Aws_json1_1.js.map