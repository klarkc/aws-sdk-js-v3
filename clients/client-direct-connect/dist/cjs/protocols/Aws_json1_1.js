"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DisassociateMacSecKeyCommand = exports.serializeAws_json1_1DisassociateConnectionFromLagCommand = exports.serializeAws_json1_1DescribeVirtualInterfacesCommand = exports.serializeAws_json1_1DescribeVirtualGatewaysCommand = exports.serializeAws_json1_1DescribeTagsCommand = exports.serializeAws_json1_1DescribeLocationsCommand = exports.serializeAws_json1_1DescribeLoaCommand = exports.serializeAws_json1_1DescribeLagsCommand = exports.serializeAws_json1_1DescribeInterconnectsCommand = exports.serializeAws_json1_1DescribeInterconnectLoaCommand = exports.serializeAws_json1_1DescribeHostedConnectionsCommand = exports.serializeAws_json1_1DescribeDirectConnectGatewaysCommand = exports.serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = exports.serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = exports.serializeAws_json1_1DescribeConnectionsCommand = exports.serializeAws_json1_1DescribeConnectionLoaCommand = exports.serializeAws_json1_1DeleteVirtualInterfaceCommand = exports.serializeAws_json1_1DeleteLagCommand = exports.serializeAws_json1_1DeleteInterconnectCommand = exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = exports.serializeAws_json1_1DeleteDirectConnectGatewayCommand = exports.serializeAws_json1_1DeleteConnectionCommand = exports.serializeAws_json1_1DeleteBGPPeerCommand = exports.serializeAws_json1_1CreateTransitVirtualInterfaceCommand = exports.serializeAws_json1_1CreatePublicVirtualInterfaceCommand = exports.serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = exports.serializeAws_json1_1CreateLagCommand = exports.serializeAws_json1_1CreateInterconnectCommand = exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = exports.serializeAws_json1_1CreateDirectConnectGatewayCommand = exports.serializeAws_json1_1CreateConnectionCommand = exports.serializeAws_json1_1CreateBGPPeerCommand = exports.serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = exports.serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = exports.serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = exports.serializeAws_json1_1ConfirmConnectionCommand = exports.serializeAws_json1_1AssociateVirtualInterfaceCommand = exports.serializeAws_json1_1AssociateMacSecKeyCommand = exports.serializeAws_json1_1AssociateHostedConnectionCommand = exports.serializeAws_json1_1AssociateConnectionWithLagCommand = exports.serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = exports.serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = exports.serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = exports.serializeAws_json1_1AllocateHostedConnectionCommand = exports.serializeAws_json1_1AllocateConnectionOnInterconnectCommand = exports.serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = void 0;
exports.deserializeAws_json1_1DescribeInterconnectLoaCommand = exports.deserializeAws_json1_1DescribeHostedConnectionsCommand = exports.deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = exports.deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = exports.deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = exports.deserializeAws_json1_1DescribeConnectionsCommand = exports.deserializeAws_json1_1DescribeConnectionLoaCommand = exports.deserializeAws_json1_1DeleteVirtualInterfaceCommand = exports.deserializeAws_json1_1DeleteLagCommand = exports.deserializeAws_json1_1DeleteInterconnectCommand = exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = exports.deserializeAws_json1_1DeleteDirectConnectGatewayCommand = exports.deserializeAws_json1_1DeleteConnectionCommand = exports.deserializeAws_json1_1DeleteBGPPeerCommand = exports.deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = exports.deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = exports.deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = exports.deserializeAws_json1_1CreateLagCommand = exports.deserializeAws_json1_1CreateInterconnectCommand = exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = exports.deserializeAws_json1_1CreateDirectConnectGatewayCommand = exports.deserializeAws_json1_1CreateConnectionCommand = exports.deserializeAws_json1_1CreateBGPPeerCommand = exports.deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = exports.deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = exports.deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = exports.deserializeAws_json1_1ConfirmConnectionCommand = exports.deserializeAws_json1_1AssociateVirtualInterfaceCommand = exports.deserializeAws_json1_1AssociateMacSecKeyCommand = exports.deserializeAws_json1_1AssociateHostedConnectionCommand = exports.deserializeAws_json1_1AssociateConnectionWithLagCommand = exports.deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = exports.deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = exports.deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = exports.deserializeAws_json1_1AllocateHostedConnectionCommand = exports.deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = exports.deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = exports.serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = exports.serializeAws_json1_1UpdateLagCommand = exports.serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = exports.serializeAws_json1_1UpdateConnectionCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopBgpFailoverTestCommand = exports.serializeAws_json1_1StartBgpFailoverTestCommand = exports.serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = void 0;
exports.deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = exports.deserializeAws_json1_1UpdateLagCommand = exports.deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = exports.deserializeAws_json1_1UpdateConnectionCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopBgpFailoverTestCommand = exports.deserializeAws_json1_1StartBgpFailoverTestCommand = exports.deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = exports.deserializeAws_json1_1DisassociateMacSecKeyCommand = exports.deserializeAws_json1_1DisassociateConnectionFromLagCommand = exports.deserializeAws_json1_1DescribeVirtualInterfacesCommand = exports.deserializeAws_json1_1DescribeVirtualGatewaysCommand = exports.deserializeAws_json1_1DescribeTagsCommand = exports.deserializeAws_json1_1DescribeLocationsCommand = exports.deserializeAws_json1_1DescribeLoaCommand = exports.deserializeAws_json1_1DescribeLagsCommand = exports.deserializeAws_json1_1DescribeInterconnectsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand;
const serializeAws_json1_1AllocateConnectionOnInterconnectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AllocateConnectionOnInterconnect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateConnectionOnInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocateConnectionOnInterconnectCommand = serializeAws_json1_1AllocateConnectionOnInterconnectCommand;
const serializeAws_json1_1AllocateHostedConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AllocateHostedConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateHostedConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocateHostedConnectionCommand = serializeAws_json1_1AllocateHostedConnectionCommand;
const serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AllocatePrivateVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand;
const serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AllocatePublicVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocatePublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = serializeAws_json1_1AllocatePublicVirtualInterfaceCommand;
const serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AllocateTransitVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = serializeAws_json1_1AllocateTransitVirtualInterfaceCommand;
const serializeAws_json1_1AssociateConnectionWithLagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AssociateConnectionWithLag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateConnectionWithLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateConnectionWithLagCommand = serializeAws_json1_1AssociateConnectionWithLagCommand;
const serializeAws_json1_1AssociateHostedConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AssociateHostedConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateHostedConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateHostedConnectionCommand = serializeAws_json1_1AssociateHostedConnectionCommand;
const serializeAws_json1_1AssociateMacSecKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AssociateMacSecKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateMacSecKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateMacSecKeyCommand = serializeAws_json1_1AssociateMacSecKeyCommand;
const serializeAws_json1_1AssociateVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.AssociateVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateVirtualInterfaceCommand = serializeAws_json1_1AssociateVirtualInterfaceCommand;
const serializeAws_json1_1ConfirmConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.ConfirmConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmConnectionCommand = serializeAws_json1_1ConfirmConnectionCommand;
const serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.ConfirmPrivateVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand;
const serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.ConfirmPublicVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand;
const serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.ConfirmTransitVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand;
const serializeAws_json1_1CreateBGPPeerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateBGPPeer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBGPPeerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBGPPeerCommand = serializeAws_json1_1CreateBGPPeerCommand;
const serializeAws_json1_1CreateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConnectionCommand = serializeAws_json1_1CreateConnectionCommand;
const serializeAws_json1_1CreateDirectConnectGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateDirectConnectGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDirectConnectGatewayCommand = serializeAws_json1_1CreateDirectConnectGatewayCommand;
const serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateDirectConnectGatewayAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand;
const serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateDirectConnectGatewayAssociationProposal",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand;
const serializeAws_json1_1CreateInterconnectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateInterconnect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInterconnectCommand = serializeAws_json1_1CreateInterconnectCommand;
const serializeAws_json1_1CreateLagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateLag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLagCommand = serializeAws_json1_1CreateLagCommand;
const serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreatePrivateVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = serializeAws_json1_1CreatePrivateVirtualInterfaceCommand;
const serializeAws_json1_1CreatePublicVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreatePublicVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePublicVirtualInterfaceCommand = serializeAws_json1_1CreatePublicVirtualInterfaceCommand;
const serializeAws_json1_1CreateTransitVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.CreateTransitVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTransitVirtualInterfaceCommand = serializeAws_json1_1CreateTransitVirtualInterfaceCommand;
const serializeAws_json1_1DeleteBGPPeerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteBGPPeer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBGPPeerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBGPPeerCommand = serializeAws_json1_1DeleteBGPPeerCommand;
const serializeAws_json1_1DeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
const serializeAws_json1_1DeleteDirectConnectGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteDirectConnectGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDirectConnectGatewayCommand = serializeAws_json1_1DeleteDirectConnectGatewayCommand;
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteDirectConnectGatewayAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand;
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteDirectConnectGatewayAssociationProposal",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand;
const serializeAws_json1_1DeleteInterconnectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteInterconnect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInterconnectCommand = serializeAws_json1_1DeleteInterconnectCommand;
const serializeAws_json1_1DeleteLagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteLag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLagCommand = serializeAws_json1_1DeleteLagCommand;
const serializeAws_json1_1DeleteVirtualInterfaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DeleteVirtualInterface",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVirtualInterfaceCommand = serializeAws_json1_1DeleteVirtualInterfaceCommand;
const serializeAws_json1_1DescribeConnectionLoaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeConnectionLoa",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionLoaCommand = serializeAws_json1_1DescribeConnectionLoaCommand;
const serializeAws_json1_1DescribeConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionsCommand = serializeAws_json1_1DescribeConnectionsCommand;
const serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeConnectionsOnInterconnect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsOnInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = serializeAws_json1_1DescribeConnectionsOnInterconnectCommand;
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAssociationProposals",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand;
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand;
const serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAttachments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand;
const serializeAws_json1_1DescribeDirectConnectGatewaysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeDirectConnectGateways",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewaysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectConnectGatewaysCommand = serializeAws_json1_1DescribeDirectConnectGatewaysCommand;
const serializeAws_json1_1DescribeHostedConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeHostedConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHostedConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHostedConnectionsCommand = serializeAws_json1_1DescribeHostedConnectionsCommand;
const serializeAws_json1_1DescribeInterconnectLoaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeInterconnectLoa",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInterconnectLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInterconnectLoaCommand = serializeAws_json1_1DescribeInterconnectLoaCommand;
const serializeAws_json1_1DescribeInterconnectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeInterconnects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInterconnectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInterconnectsCommand = serializeAws_json1_1DescribeInterconnectsCommand;
const serializeAws_json1_1DescribeLagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeLags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLagsCommand = serializeAws_json1_1DescribeLagsCommand;
const serializeAws_json1_1DescribeLoaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeLoa",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLoaCommand = serializeAws_json1_1DescribeLoaCommand;
const serializeAws_json1_1DescribeLocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeLocations",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationsCommand = serializeAws_json1_1DescribeLocationsCommand;
const serializeAws_json1_1DescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
const serializeAws_json1_1DescribeVirtualGatewaysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeVirtualGateways",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVirtualGatewaysCommand = serializeAws_json1_1DescribeVirtualGatewaysCommand;
const serializeAws_json1_1DescribeVirtualInterfacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DescribeVirtualInterfaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVirtualInterfacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVirtualInterfacesCommand = serializeAws_json1_1DescribeVirtualInterfacesCommand;
const serializeAws_json1_1DisassociateConnectionFromLagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DisassociateConnectionFromLag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConnectionFromLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateConnectionFromLagCommand = serializeAws_json1_1DisassociateConnectionFromLagCommand;
const serializeAws_json1_1DisassociateMacSecKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.DisassociateMacSecKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateMacSecKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateMacSecKeyCommand = serializeAws_json1_1DisassociateMacSecKeyCommand;
const serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.ListVirtualInterfaceTestHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand;
const serializeAws_json1_1StartBgpFailoverTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.StartBgpFailoverTest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartBgpFailoverTestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartBgpFailoverTestCommand = serializeAws_json1_1StartBgpFailoverTestCommand;
const serializeAws_json1_1StopBgpFailoverTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.StopBgpFailoverTest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopBgpFailoverTestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopBgpFailoverTestCommand = serializeAws_json1_1StopBgpFailoverTestCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.UpdateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConnectionCommand = serializeAws_json1_1UpdateConnectionCommand;
const serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.UpdateDirectConnectGatewayAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand;
const serializeAws_json1_1UpdateLagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.UpdateLag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLagCommand = serializeAws_json1_1UpdateLagCommand;
const serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OvertureService.UpdateVirtualInterfaceAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand;
const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand;
const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = deserializeAws_json1_1AllocateConnectionOnInterconnectCommand;
const deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllocateHostedConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocateHostedConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocateHostedConnectionCommand = deserializeAws_json1_1AllocateHostedConnectionCommand;
const deserializeAws_json1_1AllocateHostedConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand;
const deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand;
const deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AllocateTransitVirtualInterfaceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand;
const deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateConnectionWithLagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateConnectionWithLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateConnectionWithLagCommand = deserializeAws_json1_1AssociateConnectionWithLagCommand;
const deserializeAws_json1_1AssociateConnectionWithLagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateHostedConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateHostedConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateHostedConnectionCommand = deserializeAws_json1_1AssociateHostedConnectionCommand;
const deserializeAws_json1_1AssociateHostedConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateMacSecKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateMacSecKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateMacSecKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateMacSecKeyCommand = deserializeAws_json1_1AssociateMacSecKeyCommand;
const deserializeAws_json1_1AssociateMacSecKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateVirtualInterfaceCommand = deserializeAws_json1_1AssociateVirtualInterfaceCommand;
const deserializeAws_json1_1AssociateVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConfirmConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmConnectionCommand = deserializeAws_json1_1ConfirmConnectionCommand;
const deserializeAws_json1_1ConfirmConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand;
const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand;
const deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand;
const deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateBGPPeerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBGPPeerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBGPPeerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBGPPeerCommand = deserializeAws_json1_1CreateBGPPeerCommand;
const deserializeAws_json1_1CreateBGPPeerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConnectionCommand = deserializeAws_json1_1CreateConnectionCommand;
const deserializeAws_json1_1CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDirectConnectGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDirectConnectGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDirectConnectGatewayCommand = deserializeAws_json1_1CreateDirectConnectGatewayCommand;
const deserializeAws_json1_1CreateDirectConnectGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand;
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand;
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateInterconnectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Interconnect(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInterconnectCommand = deserializeAws_json1_1CreateInterconnectCommand;
const deserializeAws_json1_1CreateInterconnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateLagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLagCommand = deserializeAws_json1_1CreateLagCommand;
const deserializeAws_json1_1CreateLagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand;
const deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = deserializeAws_json1_1CreatePublicVirtualInterfaceCommand;
const deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTransitVirtualInterfaceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = deserializeAws_json1_1CreateTransitVirtualInterfaceCommand;
const deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteBGPPeerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBGPPeerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBGPPeerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBGPPeerCommand = deserializeAws_json1_1DeleteBGPPeerCommand;
const deserializeAws_json1_1DeleteBGPPeerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
const deserializeAws_json1_1DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDirectConnectGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDirectConnectGatewayCommand = deserializeAws_json1_1DeleteDirectConnectGatewayCommand;
const deserializeAws_json1_1DeleteDirectConnectGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand;
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand;
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteInterconnectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInterconnectResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInterconnectCommand = deserializeAws_json1_1DeleteInterconnectCommand;
const deserializeAws_json1_1DeleteInterconnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteLagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLagCommand = deserializeAws_json1_1DeleteLagCommand;
const deserializeAws_json1_1DeleteLagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteVirtualInterfaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVirtualInterfaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVirtualInterfaceCommand = deserializeAws_json1_1DeleteVirtualInterfaceCommand;
const deserializeAws_json1_1DeleteVirtualInterfaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConnectionLoaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionLoaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionLoaCommand = deserializeAws_json1_1DescribeConnectionLoaCommand;
const deserializeAws_json1_1DescribeConnectionLoaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionsCommand = deserializeAws_json1_1DescribeConnectionsCommand;
const deserializeAws_json1_1DescribeConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand;
const deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand;
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand;
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand;
const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewaysResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = deserializeAws_json1_1DescribeDirectConnectGatewaysCommand;
const deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeHostedConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHostedConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHostedConnectionsCommand = deserializeAws_json1_1DescribeHostedConnectionsCommand;
const deserializeAws_json1_1DescribeHostedConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInterconnectLoaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInterconnectLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInterconnectLoaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInterconnectLoaCommand = deserializeAws_json1_1DescribeInterconnectLoaCommand;
const deserializeAws_json1_1DescribeInterconnectLoaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeInterconnectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInterconnectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Interconnects(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInterconnectsCommand = deserializeAws_json1_1DescribeInterconnectsCommand;
const deserializeAws_json1_1DescribeInterconnectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeLagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lags(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLagsCommand = deserializeAws_json1_1DescribeLagsCommand;
const deserializeAws_json1_1DescribeLagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeLoaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Loa(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLoaCommand = deserializeAws_json1_1DescribeLoaCommand;
const deserializeAws_json1_1DescribeLoaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeLocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Locations(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationsCommand = deserializeAws_json1_1DescribeLocationsCommand;
const deserializeAws_json1_1DescribeLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
const deserializeAws_json1_1DescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeVirtualGatewaysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVirtualGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualGateways(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVirtualGatewaysCommand = deserializeAws_json1_1DescribeVirtualGatewaysCommand;
const deserializeAws_json1_1DescribeVirtualGatewaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeVirtualInterfacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVirtualInterfacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterfaces(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVirtualInterfacesCommand = deserializeAws_json1_1DescribeVirtualInterfacesCommand;
const deserializeAws_json1_1DescribeVirtualInterfacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateConnectionFromLagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateConnectionFromLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateConnectionFromLagCommand = deserializeAws_json1_1DisassociateConnectionFromLagCommand;
const deserializeAws_json1_1DisassociateConnectionFromLagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateMacSecKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateMacSecKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateMacSecKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateMacSecKeyCommand = deserializeAws_json1_1DisassociateMacSecKeyCommand;
const deserializeAws_json1_1DisassociateMacSecKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand;
const deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartBgpFailoverTestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartBgpFailoverTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartBgpFailoverTestResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartBgpFailoverTestCommand = deserializeAws_json1_1StartBgpFailoverTestCommand;
const deserializeAws_json1_1StartBgpFailoverTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopBgpFailoverTestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopBgpFailoverTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopBgpFailoverTestResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopBgpFailoverTestCommand = deserializeAws_json1_1StopBgpFailoverTestCommand;
const deserializeAws_json1_1StopBgpFailoverTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.directconnect#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.directconnect#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConnectionCommand = deserializeAws_json1_1UpdateConnectionCommand;
const deserializeAws_json1_1UpdateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand;
const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateLagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLagCommand = deserializeAws_json1_1UpdateLagCommand;
const deserializeAws_json1_1UpdateLagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand;
const deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazonaws.directconnect#DirectConnectClientException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectConnectServerException":
        case "com.amazonaws.directconnect#DirectConnectServerException":
            response = {
                ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DirectConnectClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectConnectClientException(body, context);
    const contents = {
        name: "DirectConnectClientException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectConnectServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectConnectServerException(body, context);
    const contents = {
        name: "DirectConnectServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateTagKeysException(body, context);
    const contents = {
        name: "DuplicateTagKeysException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    return {
        ...(input.associatedGatewayOwnerAccount !== undefined &&
            input.associatedGatewayOwnerAccount !== null && {
            associatedGatewayOwnerAccount: input.associatedGatewayOwnerAccount,
        }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.overrideAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.overrideAllowedPrefixesToDirectConnectGateway !== null && {
            overrideAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.overrideAllowedPrefixesToDirectConnectGateway, context),
        }),
        ...(input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }),
    };
};
const serializeAws_json1_1AllocateConnectionOnInterconnectRequest = (input, context) => {
    return {
        ...(input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth }),
        ...(input.connectionName !== undefined &&
            input.connectionName !== null && { connectionName: input.connectionName }),
        ...(input.interconnectId !== undefined &&
            input.interconnectId !== null && { interconnectId: input.interconnectId }),
        ...(input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1AllocateHostedConnectionRequest = (input, context) => {
    return {
        ...(input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth }),
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.connectionName !== undefined &&
            input.connectionName !== null && { connectionName: input.connectionName }),
        ...(input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newPrivateVirtualInterfaceAllocation !== undefined &&
            input.newPrivateVirtualInterfaceAllocation !== null && {
            newPrivateVirtualInterfaceAllocation: serializeAws_json1_1NewPrivateVirtualInterfaceAllocation(input.newPrivateVirtualInterfaceAllocation, context),
        }),
        ...(input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }),
    };
};
const serializeAws_json1_1AllocatePublicVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newPublicVirtualInterfaceAllocation !== undefined &&
            input.newPublicVirtualInterfaceAllocation !== null && {
            newPublicVirtualInterfaceAllocation: serializeAws_json1_1NewPublicVirtualInterfaceAllocation(input.newPublicVirtualInterfaceAllocation, context),
        }),
        ...(input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }),
    };
};
const serializeAws_json1_1AllocateTransitVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newTransitVirtualInterfaceAllocation !== undefined &&
            input.newTransitVirtualInterfaceAllocation !== null && {
            newTransitVirtualInterfaceAllocation: serializeAws_json1_1NewTransitVirtualInterfaceAllocation(input.newTransitVirtualInterfaceAllocation, context),
        }),
        ...(input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }),
    };
};
const serializeAws_json1_1AssociateConnectionWithLagRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
    };
};
const serializeAws_json1_1AssociateHostedConnectionRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.parentConnectionId !== undefined &&
            input.parentConnectionId !== null && { parentConnectionId: input.parentConnectionId }),
    };
};
const serializeAws_json1_1AssociateMacSecKeyRequest = (input, context) => {
    return {
        ...(input.cak !== undefined && input.cak !== null && { cak: input.cak }),
        ...(input.ckn !== undefined && input.ckn !== null && { ckn: input.ckn }),
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.secretARN !== undefined && input.secretARN !== null && { secretARN: input.secretARN }),
    };
};
const serializeAws_json1_1AssociateVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1BGPPeerIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConfirmConnectionRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
    };
};
const serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.virtualGatewayId !== undefined &&
            input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1CreateBGPPeerRequest = (input, context) => {
    return {
        ...(input.newBGPPeer !== undefined &&
            input.newBGPPeer !== null && { newBGPPeer: serializeAws_json1_1NewBGPPeer(input.newBGPPeer, context) }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1CreateConnectionRequest = (input, context) => {
    return {
        ...(input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth }),
        ...(input.connectionName !== undefined &&
            input.connectionName !== null && { connectionName: input.connectionName }),
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
        ...(input.requestMACSec !== undefined && input.requestMACSec !== null && { requestMACSec: input.requestMACSec }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    return {
        ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.addAllowedPrefixesToDirectConnectGateway !== null && {
            addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
        }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.directConnectGatewayOwnerAccount !== undefined &&
            input.directConnectGatewayOwnerAccount !== null && {
            directConnectGatewayOwnerAccount: input.directConnectGatewayOwnerAccount,
        }),
        ...(input.gatewayId !== undefined && input.gatewayId !== null && { gatewayId: input.gatewayId }),
        ...(input.removeAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.removeAllowedPrefixesToDirectConnectGateway !== null && {
            removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context),
        }),
    };
};
const serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest = (input, context) => {
    return {
        ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.addAllowedPrefixesToDirectConnectGateway !== null && {
            addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
        }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.gatewayId !== undefined && input.gatewayId !== null && { gatewayId: input.gatewayId }),
        ...(input.virtualGatewayId !== undefined &&
            input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }),
    };
};
const serializeAws_json1_1CreateDirectConnectGatewayRequest = (input, context) => {
    return {
        ...(input.amazonSideAsn !== undefined && input.amazonSideAsn !== null && { amazonSideAsn: input.amazonSideAsn }),
        ...(input.directConnectGatewayName !== undefined &&
            input.directConnectGatewayName !== null && { directConnectGatewayName: input.directConnectGatewayName }),
    };
};
const serializeAws_json1_1CreateInterconnectRequest = (input, context) => {
    return {
        ...(input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth }),
        ...(input.interconnectName !== undefined &&
            input.interconnectName !== null && { interconnectName: input.interconnectName }),
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateLagRequest = (input, context) => {
    return {
        ...(input.childConnectionTags !== undefined &&
            input.childConnectionTags !== null && {
            childConnectionTags: serializeAws_json1_1TagList(input.childConnectionTags, context),
        }),
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.connectionsBandwidth !== undefined &&
            input.connectionsBandwidth !== null && { connectionsBandwidth: input.connectionsBandwidth }),
        ...(input.lagName !== undefined && input.lagName !== null && { lagName: input.lagName }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.numberOfConnections !== undefined &&
            input.numberOfConnections !== null && { numberOfConnections: input.numberOfConnections }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
        ...(input.requestMACSec !== undefined && input.requestMACSec !== null && { requestMACSec: input.requestMACSec }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreatePrivateVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newPrivateVirtualInterface !== undefined &&
            input.newPrivateVirtualInterface !== null && {
            newPrivateVirtualInterface: serializeAws_json1_1NewPrivateVirtualInterface(input.newPrivateVirtualInterface, context),
        }),
    };
};
const serializeAws_json1_1CreatePublicVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newPublicVirtualInterface !== undefined &&
            input.newPublicVirtualInterface !== null && {
            newPublicVirtualInterface: serializeAws_json1_1NewPublicVirtualInterface(input.newPublicVirtualInterface, context),
        }),
    };
};
const serializeAws_json1_1CreateTransitVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.newTransitVirtualInterface !== undefined &&
            input.newTransitVirtualInterface !== null && {
            newTransitVirtualInterface: serializeAws_json1_1NewTransitVirtualInterface(input.newTransitVirtualInterface, context),
        }),
    };
};
const serializeAws_json1_1DeleteBGPPeerRequest = (input, context) => {
    return {
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.bgpPeerId !== undefined && input.bgpPeerId !== null && { bgpPeerId: input.bgpPeerId }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1DeleteConnectionRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
    };
};
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    return {
        ...(input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }),
    };
};
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest = (input, context) => {
    return {
        ...(input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.virtualGatewayId !== undefined &&
            input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }),
    };
};
const serializeAws_json1_1DeleteDirectConnectGatewayRequest = (input, context) => {
    return {
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
    };
};
const serializeAws_json1_1DeleteInterconnectRequest = (input, context) => {
    return {
        ...(input.interconnectId !== undefined &&
            input.interconnectId !== null && { interconnectId: input.interconnectId }),
    };
};
const serializeAws_json1_1DeleteLagRequest = (input, context) => {
    return {
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
    };
};
const serializeAws_json1_1DeleteVirtualInterfaceRequest = (input, context) => {
    return {
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1DescribeConnectionLoaRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.loaContentType !== undefined &&
            input.loaContentType !== null && { loaContentType: input.loaContentType }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
    };
};
const serializeAws_json1_1DescribeConnectionsOnInterconnectRequest = (input, context) => {
    return {
        ...(input.interconnectId !== undefined &&
            input.interconnectId !== null && { interconnectId: input.interconnectId }),
    };
};
const serializeAws_json1_1DescribeConnectionsRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
    };
};
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest = (input, context) => {
    return {
        ...(input.associatedGatewayId !== undefined &&
            input.associatedGatewayId !== null && { associatedGatewayId: input.associatedGatewayId }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }),
    };
};
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest = (input, context) => {
    return {
        ...(input.associatedGatewayId !== undefined &&
            input.associatedGatewayId !== null && { associatedGatewayId: input.associatedGatewayId }),
        ...(input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.virtualGatewayId !== undefined &&
            input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }),
    };
};
const serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest = (input, context) => {
    return {
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1DescribeDirectConnectGatewaysRequest = (input, context) => {
    return {
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeHostedConnectionsRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
    };
};
const serializeAws_json1_1DescribeInterconnectLoaRequest = (input, context) => {
    return {
        ...(input.interconnectId !== undefined &&
            input.interconnectId !== null && { interconnectId: input.interconnectId }),
        ...(input.loaContentType !== undefined &&
            input.loaContentType !== null && { loaContentType: input.loaContentType }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
    };
};
const serializeAws_json1_1DescribeInterconnectsRequest = (input, context) => {
    return {
        ...(input.interconnectId !== undefined &&
            input.interconnectId !== null && { interconnectId: input.interconnectId }),
    };
};
const serializeAws_json1_1DescribeLagsRequest = (input, context) => {
    return {
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
    };
};
const serializeAws_json1_1DescribeLoaRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.loaContentType !== undefined &&
            input.loaContentType !== null && { loaContentType: input.loaContentType }),
        ...(input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }),
    };
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
    return {
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_json1_1ResourceArnList(input.resourceArns, context),
        }),
    };
};
const serializeAws_json1_1DescribeVirtualInterfacesRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1DisassociateConnectionFromLagRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
    };
};
const serializeAws_json1_1DisassociateMacSecKeyRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.secretARN !== undefined && input.secretARN !== null && { secretARN: input.secretARN }),
    };
};
const serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest = (input, context) => {
    return {
        ...(input.bgpPeers !== undefined &&
            input.bgpPeers !== null && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.testId !== undefined && input.testId !== null && { testId: input.testId }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1NewBGPPeer = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
    };
};
const serializeAws_json1_1NewPrivateVirtualInterface = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualGatewayId !== undefined &&
            input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1NewPrivateVirtualInterfaceAllocation = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1NewPublicVirtualInterface = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.routeFilterPrefixes !== undefined &&
            input.routeFilterPrefixes !== null && {
            routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1NewPublicVirtualInterfaceAllocation = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.routeFilterPrefixes !== undefined &&
            input.routeFilterPrefixes !== null && {
            routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1NewTransitVirtualInterface = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.directConnectGatewayId !== undefined &&
            input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }),
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1NewTransitVirtualInterfaceAllocation = (input, context) => {
    return {
        ...(input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily }),
        ...(input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress }),
        ...(input.asn !== undefined && input.asn !== null && { asn: input.asn }),
        ...(input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey }),
        ...(input.customerAddress !== undefined &&
            input.customerAddress !== null && { customerAddress: input.customerAddress }),
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.virtualInterfaceName !== undefined &&
            input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName }),
        ...(input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }),
    };
};
const serializeAws_json1_1ResourceArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RouteFilterPrefix = (input, context) => {
    return {
        ...(input.cidr !== undefined && input.cidr !== null && { cidr: input.cidr }),
    };
};
const serializeAws_json1_1RouteFilterPrefixList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RouteFilterPrefix(entry, context);
    });
};
const serializeAws_json1_1StartBgpFailoverTestRequest = (input, context) => {
    return {
        ...(input.bgpPeers !== undefined &&
            input.bgpPeers !== null && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) }),
        ...(input.testDurationInMinutes !== undefined &&
            input.testDurationInMinutes !== null && { testDurationInMinutes: input.testDurationInMinutes }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1StopBgpFailoverTestRequest = (input, context) => {
    return {
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateConnectionRequest = (input, context) => {
    return {
        ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
        ...(input.connectionName !== undefined &&
            input.connectionName !== null && { connectionName: input.connectionName }),
        ...(input.encryptionMode !== undefined &&
            input.encryptionMode !== null && { encryptionMode: input.encryptionMode }),
    };
};
const serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest = (input, context) => {
    return {
        ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.addAllowedPrefixesToDirectConnectGateway !== null && {
            addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
        }),
        ...(input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId }),
        ...(input.removeAllowedPrefixesToDirectConnectGateway !== undefined &&
            input.removeAllowedPrefixesToDirectConnectGateway !== null && {
            removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context),
        }),
    };
};
const serializeAws_json1_1UpdateLagRequest = (input, context) => {
    return {
        ...(input.encryptionMode !== undefined &&
            input.encryptionMode !== null && { encryptionMode: input.encryptionMode }),
        ...(input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }),
        ...(input.lagName !== undefined && input.lagName !== null && { lagName: input.lagName }),
        ...(input.minimumLinks !== undefined && input.minimumLinks !== null && { minimumLinks: input.minimumLinks }),
    };
};
const serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest = (input, context) => {
    return {
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.virtualInterfaceId !== undefined &&
            input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }),
    };
};
const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult = (output, context) => {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1AllocateTransitVirtualInterfaceResult = (output, context) => {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociatedGateway = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1AssociateMacSecKeyResponse = (output, context) => {
    return {
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1AvailableMacSecPortSpeeds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AvailablePortSpeeds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BGPPeer = (output, context) => {
    return {
        addressFamily: output.addressFamily !== undefined && output.addressFamily !== null ? output.addressFamily : undefined,
        amazonAddress: output.amazonAddress !== undefined && output.amazonAddress !== null ? output.amazonAddress : undefined,
        asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        authKey: output.authKey !== undefined && output.authKey !== null ? output.authKey : undefined,
        awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
        bgpPeerId: output.bgpPeerId !== undefined && output.bgpPeerId !== null ? output.bgpPeerId : undefined,
        bgpPeerState: output.bgpPeerState !== undefined && output.bgpPeerState !== null ? output.bgpPeerState : undefined,
        bgpStatus: output.bgpStatus !== undefined && output.bgpStatus !== null ? output.bgpStatus : undefined,
        customerAddress: output.customerAddress !== undefined && output.customerAddress !== null ? output.customerAddress : undefined,
    };
};
const deserializeAws_json1_1BGPPeerIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BGPPeerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BGPPeer(entry, context);
    });
};
const deserializeAws_json1_1ConfirmConnectionResponse = (output, context) => {
    return {
        connectionState: output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
    };
};
const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse = (output, context) => {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
const deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse = (output, context) => {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
const deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse = (output, context) => {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
const deserializeAws_json1_1Connection = (output, context) => {
    return {
        awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
        awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
        bandwidth: output.bandwidth !== undefined && output.bandwidth !== null ? output.bandwidth : undefined,
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        connectionName: output.connectionName !== undefined && output.connectionName !== null ? output.connectionName : undefined,
        connectionState: output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
        encryptionMode: output.encryptionMode !== undefined && output.encryptionMode !== null ? output.encryptionMode : undefined,
        hasLogicalRedundancy: output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
            ? output.hasLogicalRedundancy
            : undefined,
        jumboFrameCapable: output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
            ? output.jumboFrameCapable
            : undefined,
        lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
        loaIssueTime: output.loaIssueTime !== undefined && output.loaIssueTime !== null
            ? new Date(Math.round(output.loaIssueTime * 1000))
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        macSecCapable: output.macSecCapable !== undefined && output.macSecCapable !== null ? output.macSecCapable : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        partnerName: output.partnerName !== undefined && output.partnerName !== null ? output.partnerName : undefined,
        portEncryptionStatus: output.portEncryptionStatus !== undefined && output.portEncryptionStatus !== null
            ? output.portEncryptionStatus
            : undefined,
        providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        vlan: output.vlan !== undefined && output.vlan !== null ? output.vlan : undefined,
    };
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
const deserializeAws_json1_1Connections = (output, context) => {
    return {
        connections: output.connections !== undefined && output.connections !== null
            ? deserializeAws_json1_1ConnectionList(output.connections, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateBGPPeerResponse = (output, context) => {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult = (output, context) => {
    return {
        directConnectGatewayAssociationProposal: output.directConnectGatewayAssociationProposal !== undefined &&
            output.directConnectGatewayAssociationProposal !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult = (output, context) => {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDirectConnectGatewayResult = (output, context) => {
    return {
        directConnectGateway: output.directConnectGateway !== undefined && output.directConnectGateway !== null
            ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTransitVirtualInterfaceResult = (output, context) => {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteBGPPeerResponse = (output, context) => {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult = (output, context) => {
    return {
        directConnectGatewayAssociationProposal: output.directConnectGatewayAssociationProposal !== undefined &&
            output.directConnectGatewayAssociationProposal !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult = (output, context) => {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDirectConnectGatewayResult = (output, context) => {
    return {
        directConnectGateway: output.directConnectGateway !== undefined && output.directConnectGateway !== null
            ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteInterconnectResponse = (output, context) => {
    return {
        interconnectState: output.interconnectState !== undefined && output.interconnectState !== null
            ? output.interconnectState
            : undefined,
    };
};
const deserializeAws_json1_1DeleteVirtualInterfaceResponse = (output, context) => {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
const deserializeAws_json1_1DescribeConnectionLoaResponse = (output, context) => {
    return {
        loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult = (output, context) => {
    return {
        directConnectGatewayAssociationProposals: output.directConnectGatewayAssociationProposals !== undefined &&
            output.directConnectGatewayAssociationProposals !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposalList(output.directConnectGatewayAssociationProposals, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult = (output, context) => {
    return {
        directConnectGatewayAssociations: output.directConnectGatewayAssociations !== undefined && output.directConnectGatewayAssociations !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationList(output.directConnectGatewayAssociations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult = (output, context) => {
    return {
        directConnectGatewayAttachments: output.directConnectGatewayAttachments !== undefined && output.directConnectGatewayAttachments !== null
            ? deserializeAws_json1_1DirectConnectGatewayAttachmentList(output.directConnectGatewayAttachments, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDirectConnectGatewaysResult = (output, context) => {
    return {
        directConnectGateways: output.directConnectGateways !== undefined && output.directConnectGateways !== null
            ? deserializeAws_json1_1DirectConnectGatewayList(output.directConnectGateways, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeInterconnectLoaResponse = (output, context) => {
    return {
        loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeTagsResponse = (output, context) => {
    return {
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_json1_1ResourceTagList(output.resourceTags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DirectConnectClientException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DirectConnectGateway = (output, context) => {
    return {
        amazonSideAsn: output.amazonSideAsn !== undefined && output.amazonSideAsn !== null ? output.amazonSideAsn : undefined,
        directConnectGatewayId: output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
            ? output.directConnectGatewayId
            : undefined,
        directConnectGatewayName: output.directConnectGatewayName !== undefined && output.directConnectGatewayName !== null
            ? output.directConnectGatewayName
            : undefined,
        directConnectGatewayState: output.directConnectGatewayState !== undefined && output.directConnectGatewayState !== null
            ? output.directConnectGatewayState
            : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        stateChangeError: output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
    };
};
const deserializeAws_json1_1DirectConnectGatewayAssociation = (output, context) => {
    return {
        allowedPrefixesToDirectConnectGateway: output.allowedPrefixesToDirectConnectGateway !== undefined &&
            output.allowedPrefixesToDirectConnectGateway !== null
            ? deserializeAws_json1_1RouteFilterPrefixList(output.allowedPrefixesToDirectConnectGateway, context)
            : undefined,
        associatedGateway: output.associatedGateway !== undefined && output.associatedGateway !== null
            ? deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context)
            : undefined,
        associationId: output.associationId !== undefined && output.associationId !== null ? output.associationId : undefined,
        associationState: output.associationState !== undefined && output.associationState !== null ? output.associationState : undefined,
        directConnectGatewayId: output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
            ? output.directConnectGatewayId
            : undefined,
        directConnectGatewayOwnerAccount: output.directConnectGatewayOwnerAccount !== undefined && output.directConnectGatewayOwnerAccount !== null
            ? output.directConnectGatewayOwnerAccount
            : undefined,
        stateChangeError: output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
        virtualGatewayId: output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
        virtualGatewayOwnerAccount: output.virtualGatewayOwnerAccount !== undefined && output.virtualGatewayOwnerAccount !== null
            ? output.virtualGatewayOwnerAccount
            : undefined,
        virtualGatewayRegion: output.virtualGatewayRegion !== undefined && output.virtualGatewayRegion !== null
            ? output.virtualGatewayRegion
            : undefined,
    };
};
const deserializeAws_json1_1DirectConnectGatewayAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAssociation(entry, context);
    });
};
const deserializeAws_json1_1DirectConnectGatewayAssociationProposal = (output, context) => {
    return {
        associatedGateway: output.associatedGateway !== undefined && output.associatedGateway !== null
            ? deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context)
            : undefined,
        directConnectGatewayId: output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
            ? output.directConnectGatewayId
            : undefined,
        directConnectGatewayOwnerAccount: output.directConnectGatewayOwnerAccount !== undefined && output.directConnectGatewayOwnerAccount !== null
            ? output.directConnectGatewayOwnerAccount
            : undefined,
        existingAllowedPrefixesToDirectConnectGateway: output.existingAllowedPrefixesToDirectConnectGateway !== undefined &&
            output.existingAllowedPrefixesToDirectConnectGateway !== null
            ? deserializeAws_json1_1RouteFilterPrefixList(output.existingAllowedPrefixesToDirectConnectGateway, context)
            : undefined,
        proposalId: output.proposalId !== undefined && output.proposalId !== null ? output.proposalId : undefined,
        proposalState: output.proposalState !== undefined && output.proposalState !== null ? output.proposalState : undefined,
        requestedAllowedPrefixesToDirectConnectGateway: output.requestedAllowedPrefixesToDirectConnectGateway !== undefined &&
            output.requestedAllowedPrefixesToDirectConnectGateway !== null
            ? deserializeAws_json1_1RouteFilterPrefixList(output.requestedAllowedPrefixesToDirectConnectGateway, context)
            : undefined,
    };
};
const deserializeAws_json1_1DirectConnectGatewayAssociationProposalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAssociationProposal(entry, context);
    });
};
const deserializeAws_json1_1DirectConnectGatewayAttachment = (output, context) => {
    return {
        attachmentState: output.attachmentState !== undefined && output.attachmentState !== null ? output.attachmentState : undefined,
        attachmentType: output.attachmentType !== undefined && output.attachmentType !== null ? output.attachmentType : undefined,
        directConnectGatewayId: output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
            ? output.directConnectGatewayId
            : undefined,
        stateChangeError: output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
        virtualInterfaceId: output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
            ? output.virtualInterfaceId
            : undefined,
        virtualInterfaceOwnerAccount: output.virtualInterfaceOwnerAccount !== undefined && output.virtualInterfaceOwnerAccount !== null
            ? output.virtualInterfaceOwnerAccount
            : undefined,
        virtualInterfaceRegion: output.virtualInterfaceRegion !== undefined && output.virtualInterfaceRegion !== null
            ? output.virtualInterfaceRegion
            : undefined,
    };
};
const deserializeAws_json1_1DirectConnectGatewayAttachmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAttachment(entry, context);
    });
};
const deserializeAws_json1_1DirectConnectGatewayList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGateway(entry, context);
    });
};
const deserializeAws_json1_1DirectConnectServerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DisassociateMacSecKeyResponse = (output, context) => {
    return {
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1DuplicateTagKeysException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Interconnect = (output, context) => {
    return {
        awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
        awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
        bandwidth: output.bandwidth !== undefined && output.bandwidth !== null ? output.bandwidth : undefined,
        hasLogicalRedundancy: output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
            ? output.hasLogicalRedundancy
            : undefined,
        interconnectId: output.interconnectId !== undefined && output.interconnectId !== null ? output.interconnectId : undefined,
        interconnectName: output.interconnectName !== undefined && output.interconnectName !== null ? output.interconnectName : undefined,
        interconnectState: output.interconnectState !== undefined && output.interconnectState !== null
            ? output.interconnectState
            : undefined,
        jumboFrameCapable: output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
            ? output.jumboFrameCapable
            : undefined,
        lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
        loaIssueTime: output.loaIssueTime !== undefined && output.loaIssueTime !== null
            ? new Date(Math.round(output.loaIssueTime * 1000))
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1InterconnectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Interconnect(entry, context);
    });
};
const deserializeAws_json1_1Interconnects = (output, context) => {
    return {
        interconnects: output.interconnects !== undefined && output.interconnects !== null
            ? deserializeAws_json1_1InterconnectList(output.interconnects, context)
            : undefined,
    };
};
const deserializeAws_json1_1Lag = (output, context) => {
    return {
        allowsHostedConnections: output.allowsHostedConnections !== undefined && output.allowsHostedConnections !== null
            ? output.allowsHostedConnections
            : undefined,
        awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
        awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
        connections: output.connections !== undefined && output.connections !== null
            ? deserializeAws_json1_1ConnectionList(output.connections, context)
            : undefined,
        connectionsBandwidth: output.connectionsBandwidth !== undefined && output.connectionsBandwidth !== null
            ? output.connectionsBandwidth
            : undefined,
        encryptionMode: output.encryptionMode !== undefined && output.encryptionMode !== null ? output.encryptionMode : undefined,
        hasLogicalRedundancy: output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
            ? output.hasLogicalRedundancy
            : undefined,
        jumboFrameCapable: output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
            ? output.jumboFrameCapable
            : undefined,
        lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
        lagName: output.lagName !== undefined && output.lagName !== null ? output.lagName : undefined,
        lagState: output.lagState !== undefined && output.lagState !== null ? output.lagState : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        macSecCapable: output.macSecCapable !== undefined && output.macSecCapable !== null ? output.macSecCapable : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
        minimumLinks: output.minimumLinks !== undefined && output.minimumLinks !== null ? output.minimumLinks : undefined,
        numberOfConnections: output.numberOfConnections !== undefined && output.numberOfConnections !== null
            ? output.numberOfConnections
            : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Lag(entry, context);
    });
};
const deserializeAws_json1_1Lags = (output, context) => {
    return {
        lags: output.lags !== undefined && output.lags !== null
            ? deserializeAws_json1_1LagList(output.lags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        virtualInterfaceTestHistory: output.virtualInterfaceTestHistory !== undefined && output.virtualInterfaceTestHistory !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistoryList(output.virtualInterfaceTestHistory, context)
            : undefined,
    };
};
const deserializeAws_json1_1Loa = (output, context) => {
    return {
        loaContent: output.loaContent !== undefined && output.loaContent !== null
            ? context.base64Decoder(output.loaContent)
            : undefined,
        loaContentType: output.loaContentType !== undefined && output.loaContentType !== null ? output.loaContentType : undefined,
    };
};
const deserializeAws_json1_1Location = (output, context) => {
    return {
        availableMacSecPortSpeeds: output.availableMacSecPortSpeeds !== undefined && output.availableMacSecPortSpeeds !== null
            ? deserializeAws_json1_1AvailableMacSecPortSpeeds(output.availableMacSecPortSpeeds, context)
            : undefined,
        availablePortSpeeds: output.availablePortSpeeds !== undefined && output.availablePortSpeeds !== null
            ? deserializeAws_json1_1AvailablePortSpeeds(output.availablePortSpeeds, context)
            : undefined,
        availableProviders: output.availableProviders !== undefined && output.availableProviders !== null
            ? deserializeAws_json1_1ProviderList(output.availableProviders, context)
            : undefined,
        locationCode: output.locationCode !== undefined && output.locationCode !== null ? output.locationCode : undefined,
        locationName: output.locationName !== undefined && output.locationName !== null ? output.locationName : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
const deserializeAws_json1_1LocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Location(entry, context);
    });
};
const deserializeAws_json1_1Locations = (output, context) => {
    return {
        locations: output.locations !== undefined && output.locations !== null
            ? deserializeAws_json1_1LocationList(output.locations, context)
            : undefined,
    };
};
const deserializeAws_json1_1MacSecKey = (output, context) => {
    return {
        ckn: output.ckn !== undefined && output.ckn !== null ? output.ckn : undefined,
        secretARN: output.secretARN !== undefined && output.secretARN !== null ? output.secretARN : undefined,
        startOn: output.startOn !== undefined && output.startOn !== null ? output.startOn : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_json1_1MacSecKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MacSecKey(entry, context);
    });
};
const deserializeAws_json1_1ProviderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceTag = (output, context) => {
    return {
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
const deserializeAws_json1_1RouteFilterPrefix = (output, context) => {
    return {
        cidr: output.cidr !== undefined && output.cidr !== null ? output.cidr : undefined,
    };
};
const deserializeAws_json1_1RouteFilterPrefixList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RouteFilterPrefix(entry, context);
    });
};
const deserializeAws_json1_1StartBgpFailoverTestResponse = (output, context) => {
    return {
        virtualInterfaceTest: output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopBgpFailoverTestResponse = (output, context) => {
    return {
        virtualInterfaceTest: output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
            : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult = (output, context) => {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1VirtualGateway = (output, context) => {
    return {
        virtualGatewayId: output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
        virtualGatewayState: output.virtualGatewayState !== undefined && output.virtualGatewayState !== null
            ? output.virtualGatewayState
            : undefined,
    };
};
const deserializeAws_json1_1VirtualGatewayList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualGateway(entry, context);
    });
};
const deserializeAws_json1_1VirtualGateways = (output, context) => {
    return {
        virtualGateways: output.virtualGateways !== undefined && output.virtualGateways !== null
            ? deserializeAws_json1_1VirtualGatewayList(output.virtualGateways, context)
            : undefined,
    };
};
const deserializeAws_json1_1VirtualInterface = (output, context) => {
    return {
        addressFamily: output.addressFamily !== undefined && output.addressFamily !== null ? output.addressFamily : undefined,
        amazonAddress: output.amazonAddress !== undefined && output.amazonAddress !== null ? output.amazonAddress : undefined,
        amazonSideAsn: output.amazonSideAsn !== undefined && output.amazonSideAsn !== null ? output.amazonSideAsn : undefined,
        asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        authKey: output.authKey !== undefined && output.authKey !== null ? output.authKey : undefined,
        awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
        bgpPeers: output.bgpPeers !== undefined && output.bgpPeers !== null
            ? deserializeAws_json1_1BGPPeerList(output.bgpPeers, context)
            : undefined,
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        customerAddress: output.customerAddress !== undefined && output.customerAddress !== null ? output.customerAddress : undefined,
        customerRouterConfig: output.customerRouterConfig !== undefined && output.customerRouterConfig !== null
            ? output.customerRouterConfig
            : undefined,
        directConnectGatewayId: output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
            ? output.directConnectGatewayId
            : undefined,
        jumboFrameCapable: output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
            ? output.jumboFrameCapable
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        mtu: output.mtu !== undefined && output.mtu !== null ? output.mtu : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        routeFilterPrefixes: output.routeFilterPrefixes !== undefined && output.routeFilterPrefixes !== null
            ? deserializeAws_json1_1RouteFilterPrefixList(output.routeFilterPrefixes, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        virtualGatewayId: output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
        virtualInterfaceId: output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
            ? output.virtualInterfaceId
            : undefined,
        virtualInterfaceName: output.virtualInterfaceName !== undefined && output.virtualInterfaceName !== null
            ? output.virtualInterfaceName
            : undefined,
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
        virtualInterfaceType: output.virtualInterfaceType !== undefined && output.virtualInterfaceType !== null
            ? output.virtualInterfaceType
            : undefined,
        vlan: output.vlan !== undefined && output.vlan !== null ? output.vlan : undefined,
    };
};
const deserializeAws_json1_1VirtualInterfaceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualInterface(entry, context);
    });
};
const deserializeAws_json1_1VirtualInterfaces = (output, context) => {
    return {
        virtualInterfaces: output.virtualInterfaces !== undefined && output.virtualInterfaces !== null
            ? deserializeAws_json1_1VirtualInterfaceList(output.virtualInterfaces, context)
            : undefined,
    };
};
const deserializeAws_json1_1VirtualInterfaceTestHistory = (output, context) => {
    return {
        bgpPeers: output.bgpPeers !== undefined && output.bgpPeers !== null
            ? deserializeAws_json1_1BGPPeerIdList(output.bgpPeers, context)
            : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        testDurationInMinutes: output.testDurationInMinutes !== undefined && output.testDurationInMinutes !== null
            ? output.testDurationInMinutes
            : undefined,
        testId: output.testId !== undefined && output.testId !== null ? output.testId : undefined,
        virtualInterfaceId: output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
            ? output.virtualInterfaceId
            : undefined,
    };
};
const deserializeAws_json1_1VirtualInterfaceTestHistoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualInterfaceTestHistory(entry, context);
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