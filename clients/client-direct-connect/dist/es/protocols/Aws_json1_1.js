import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        };
        body = JSON.stringify(serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AllocateConnectionOnInterconnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AllocateConnectionOnInterconnect",
        };
        body = JSON.stringify(serializeAws_json1_1AllocateConnectionOnInterconnectRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AllocateHostedConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AllocateHostedConnection",
        };
        body = JSON.stringify(serializeAws_json1_1AllocateHostedConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AllocatePrivateVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AllocatePublicVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1AllocatePublicVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AllocateTransitVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1AllocateTransitVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateConnectionWithLagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AssociateConnectionWithLag",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateConnectionWithLagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateHostedConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AssociateHostedConnection",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateHostedConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateMacSecKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AssociateMacSecKey",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateMacSecKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.AssociateVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.ConfirmConnection",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.ConfirmPrivateVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.ConfirmPublicVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.ConfirmTransitVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateBGPPeerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateBGPPeer",
        };
        body = JSON.stringify(serializeAws_json1_1CreateBGPPeerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateConnection",
        };
        body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDirectConnectGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateDirectConnectGateway",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateDirectConnectGatewayAssociation",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateDirectConnectGatewayAssociationProposal",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateInterconnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateInterconnect",
        };
        body = JSON.stringify(serializeAws_json1_1CreateInterconnectRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateLagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateLag",
        };
        body = JSON.stringify(serializeAws_json1_1CreateLagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreatePrivateVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePrivateVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePublicVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreatePublicVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePublicVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTransitVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.CreateTransitVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTransitVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteBGPPeerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteBGPPeer",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteBGPPeerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteConnection",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDirectConnectGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteDirectConnectGateway",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteDirectConnectGatewayAssociation",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteDirectConnectGatewayAssociationProposal",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteInterconnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteInterconnect",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteInterconnectRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteLagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteLag",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteLagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteVirtualInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DeleteVirtualInterface",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteVirtualInterfaceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConnectionLoaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeConnectionLoa",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConnectionLoaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeConnections",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConnectionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeConnectionsOnInterconnect",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConnectionsOnInterconnectRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAssociationProposals",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAssociations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeDirectConnectGatewayAttachments",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDirectConnectGatewaysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeDirectConnectGateways",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewaysRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeHostedConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeHostedConnections",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeHostedConnectionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeInterconnectLoaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeInterconnectLoa",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeInterconnectLoaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeInterconnectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeInterconnects",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeInterconnectsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeLagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeLags",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeLagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeLoaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeLoa",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeLoaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeLocationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeLocations",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeTags",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeVirtualGatewaysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeVirtualGateways",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeVirtualInterfacesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DescribeVirtualInterfaces",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeVirtualInterfacesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateConnectionFromLagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DisassociateConnectionFromLag",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateConnectionFromLagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateMacSecKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.DisassociateMacSecKey",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateMacSecKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.ListVirtualInterfaceTestHistory",
        };
        body = JSON.stringify(serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartBgpFailoverTestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.StartBgpFailoverTest",
        };
        body = JSON.stringify(serializeAws_json1_1StartBgpFailoverTestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopBgpFailoverTestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.StopBgpFailoverTest",
        };
        body = JSON.stringify(serializeAws_json1_1StopBgpFailoverTestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.UpdateConnection",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.UpdateDirectConnectGatewayAssociation",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateLagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.UpdateLag",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateLagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "OvertureService.UpdateVirtualInterfaceAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AllocateHostedConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AllocateHostedConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AllocateHostedConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AllocateTransitVirtualInterfaceResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateConnectionWithLagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateConnectionWithLagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateConnectionWithLagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateHostedConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateHostedConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateHostedConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateMacSecKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateMacSecKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateMacSecKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateMacSecKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmConnectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateBGPPeerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateBGPPeerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateBGPPeerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateBGPPeerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateDirectConnectGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDirectConnectGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDirectConnectGatewayResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDirectConnectGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateInterconnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateInterconnectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Interconnect(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateInterconnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateLagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateLagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Lag(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateLagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTransitVirtualInterfaceResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteBGPPeerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteBGPPeerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteBGPPeerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteBGPPeerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteDirectConnectGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDirectConnectGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteDirectConnectGatewayResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteDirectConnectGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteInterconnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteInterconnectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteInterconnectResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteInterconnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteLagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteLagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Lag(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteLagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteVirtualInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteVirtualInterfaceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteVirtualInterfaceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteVirtualInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeConnectionLoaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConnectionLoaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConnectionLoaResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConnectionLoaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConnectionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connections(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connections(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDirectConnectGatewaysResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeHostedConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeHostedConnectionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connections(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeHostedConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeInterconnectLoaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeInterconnectLoaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeInterconnectLoaResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeInterconnectLoaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeInterconnectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeInterconnectsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Interconnects(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeInterconnectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeLagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeLagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Lags(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeLagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeLoaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeLoaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Loa(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeLoaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeLocationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeLocationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Locations(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeLocationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeVirtualGatewaysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeVirtualGatewaysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualGateways(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeVirtualGatewaysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeVirtualInterfacesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeVirtualInterfacesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterfaces(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeVirtualInterfacesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateConnectionFromLagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateConnectionFromLagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateConnectionFromLagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateMacSecKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateMacSecKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateMacSecKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateMacSecKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartBgpFailoverTestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartBgpFailoverTestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartBgpFailoverTestResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartBgpFailoverTestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopBgpFailoverTestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopBgpFailoverTestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopBgpFailoverTestResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopBgpFailoverTestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.directconnect#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.directconnect#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Connection(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateLagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateLagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1Lag(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateLagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VirtualInterface(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DirectConnectClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.directconnect#DirectConnectClientException": return [3 /*break*/, 2];
                    case "DirectConnectServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.directconnect#DirectConnectServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1DirectConnectClientExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DirectConnectClientException(body, context);
        contents = __assign({ name: "DirectConnectClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DirectConnectServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DirectConnectServerException(body, context);
        contents = __assign({ name: "DirectConnectServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DuplicateTagKeysExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DuplicateTagKeysException(body, context);
        contents = __assign({ name: "DuplicateTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
        contents = __assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.associatedGatewayOwnerAccount !== undefined &&
        input.associatedGatewayOwnerAccount !== null && {
        associatedGatewayOwnerAccount: input.associatedGatewayOwnerAccount,
    })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.overrideAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.overrideAllowedPrefixesToDirectConnectGateway !== null && {
        overrideAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.overrideAllowedPrefixesToDirectConnectGateway, context),
    })), (input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }));
};
var serializeAws_json1_1AllocateConnectionOnInterconnectRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth })), (input.connectionName !== undefined &&
        input.connectionName !== null && { connectionName: input.connectionName })), (input.interconnectId !== undefined &&
        input.interconnectId !== null && { interconnectId: input.interconnectId })), (input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1AllocateHostedConnectionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth })), (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.connectionName !== undefined &&
        input.connectionName !== null && { connectionName: input.connectionName })), (input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newPrivateVirtualInterfaceAllocation !== undefined &&
        input.newPrivateVirtualInterfaceAllocation !== null && {
        newPrivateVirtualInterfaceAllocation: serializeAws_json1_1NewPrivateVirtualInterfaceAllocation(input.newPrivateVirtualInterfaceAllocation, context),
    })), (input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }));
};
var serializeAws_json1_1AllocatePublicVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newPublicVirtualInterfaceAllocation !== undefined &&
        input.newPublicVirtualInterfaceAllocation !== null && {
        newPublicVirtualInterfaceAllocation: serializeAws_json1_1NewPublicVirtualInterfaceAllocation(input.newPublicVirtualInterfaceAllocation, context),
    })), (input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }));
};
var serializeAws_json1_1AllocateTransitVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newTransitVirtualInterfaceAllocation !== undefined &&
        input.newTransitVirtualInterfaceAllocation !== null && {
        newTransitVirtualInterfaceAllocation: serializeAws_json1_1NewTransitVirtualInterfaceAllocation(input.newTransitVirtualInterfaceAllocation, context),
    })), (input.ownerAccount !== undefined && input.ownerAccount !== null && { ownerAccount: input.ownerAccount }));
};
var serializeAws_json1_1AssociateConnectionWithLagRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }));
};
var serializeAws_json1_1AssociateHostedConnectionRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.parentConnectionId !== undefined &&
        input.parentConnectionId !== null && { parentConnectionId: input.parentConnectionId }));
};
var serializeAws_json1_1AssociateMacSecKeyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.cak !== undefined && input.cak !== null && { cak: input.cak })), (input.ckn !== undefined && input.ckn !== null && { ckn: input.ckn })), (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.secretARN !== undefined && input.secretARN !== null && { secretARN: input.secretARN }));
};
var serializeAws_json1_1AssociateVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1BGPPeerIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConfirmConnectionRequest = function (input, context) {
    return __assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }));
};
var serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.virtualGatewayId !== undefined &&
        input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest = function (input, context) {
    return __assign({}, (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign({}, (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1CreateBGPPeerRequest = function (input, context) {
    return __assign(__assign({}, (input.newBGPPeer !== undefined &&
        input.newBGPPeer !== null && { newBGPPeer: serializeAws_json1_1NewBGPPeer(input.newBGPPeer, context) })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1CreateConnectionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth })), (input.connectionName !== undefined &&
        input.connectionName !== null && { connectionName: input.connectionName })), (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName })), (input.requestMACSec !== undefined && input.requestMACSec !== null && { requestMACSec: input.requestMACSec })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.addAllowedPrefixesToDirectConnectGateway !== null && {
        addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
    })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.directConnectGatewayOwnerAccount !== undefined &&
        input.directConnectGatewayOwnerAccount !== null && {
        directConnectGatewayOwnerAccount: input.directConnectGatewayOwnerAccount,
    })), (input.gatewayId !== undefined && input.gatewayId !== null && { gatewayId: input.gatewayId })), (input.removeAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.removeAllowedPrefixesToDirectConnectGateway !== null && {
        removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context),
    }));
};
var serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.addAllowedPrefixesToDirectConnectGateway !== null && {
        addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
    })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.gatewayId !== undefined && input.gatewayId !== null && { gatewayId: input.gatewayId })), (input.virtualGatewayId !== undefined &&
        input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }));
};
var serializeAws_json1_1CreateDirectConnectGatewayRequest = function (input, context) {
    return __assign(__assign({}, (input.amazonSideAsn !== undefined && input.amazonSideAsn !== null && { amazonSideAsn: input.amazonSideAsn })), (input.directConnectGatewayName !== undefined &&
        input.directConnectGatewayName !== null && { directConnectGatewayName: input.directConnectGatewayName }));
};
var serializeAws_json1_1CreateInterconnectRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.bandwidth !== undefined && input.bandwidth !== null && { bandwidth: input.bandwidth })), (input.interconnectName !== undefined &&
        input.interconnectName !== null && { interconnectName: input.interconnectName })), (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1CreateLagRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.childConnectionTags !== undefined &&
        input.childConnectionTags !== null && {
        childConnectionTags: serializeAws_json1_1TagList(input.childConnectionTags, context),
    })), (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.connectionsBandwidth !== undefined &&
        input.connectionsBandwidth !== null && { connectionsBandwidth: input.connectionsBandwidth })), (input.lagName !== undefined && input.lagName !== null && { lagName: input.lagName })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.numberOfConnections !== undefined &&
        input.numberOfConnections !== null && { numberOfConnections: input.numberOfConnections })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName })), (input.requestMACSec !== undefined && input.requestMACSec !== null && { requestMACSec: input.requestMACSec })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1CreatePrivateVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newPrivateVirtualInterface !== undefined &&
        input.newPrivateVirtualInterface !== null && {
        newPrivateVirtualInterface: serializeAws_json1_1NewPrivateVirtualInterface(input.newPrivateVirtualInterface, context),
    }));
};
var serializeAws_json1_1CreatePublicVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newPublicVirtualInterface !== undefined &&
        input.newPublicVirtualInterface !== null && {
        newPublicVirtualInterface: serializeAws_json1_1NewPublicVirtualInterface(input.newPublicVirtualInterface, context),
    }));
};
var serializeAws_json1_1CreateTransitVirtualInterfaceRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.newTransitVirtualInterface !== undefined &&
        input.newTransitVirtualInterface !== null && {
        newTransitVirtualInterface: serializeAws_json1_1NewTransitVirtualInterface(input.newTransitVirtualInterface, context),
    }));
};
var serializeAws_json1_1DeleteBGPPeerRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.bgpPeerId !== undefined && input.bgpPeerId !== null && { bgpPeerId: input.bgpPeerId })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1DeleteConnectionRequest = function (input, context) {
    return __assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }));
};
var serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest = function (input, context) {
    return __assign({}, (input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }));
};
var serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.virtualGatewayId !== undefined &&
        input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }));
};
var serializeAws_json1_1DeleteDirectConnectGatewayRequest = function (input, context) {
    return __assign({}, (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId }));
};
var serializeAws_json1_1DeleteInterconnectRequest = function (input, context) {
    return __assign({}, (input.interconnectId !== undefined &&
        input.interconnectId !== null && { interconnectId: input.interconnectId }));
};
var serializeAws_json1_1DeleteLagRequest = function (input, context) {
    return __assign({}, (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }));
};
var serializeAws_json1_1DeleteVirtualInterfaceRequest = function (input, context) {
    return __assign({}, (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1DescribeConnectionLoaRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.loaContentType !== undefined &&
        input.loaContentType !== null && { loaContentType: input.loaContentType })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }));
};
var serializeAws_json1_1DescribeConnectionsOnInterconnectRequest = function (input, context) {
    return __assign({}, (input.interconnectId !== undefined &&
        input.interconnectId !== null && { interconnectId: input.interconnectId }));
};
var serializeAws_json1_1DescribeConnectionsRequest = function (input, context) {
    return __assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }));
};
var serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.associatedGatewayId !== undefined &&
        input.associatedGatewayId !== null && { associatedGatewayId: input.associatedGatewayId })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.proposalId !== undefined && input.proposalId !== null && { proposalId: input.proposalId }));
};
var serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.associatedGatewayId !== undefined &&
        input.associatedGatewayId !== null && { associatedGatewayId: input.associatedGatewayId })), (input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.virtualGatewayId !== undefined &&
        input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId }));
};
var serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1DescribeDirectConnectGatewaysRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeHostedConnectionsRequest = function (input, context) {
    return __assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }));
};
var serializeAws_json1_1DescribeInterconnectLoaRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.interconnectId !== undefined &&
        input.interconnectId !== null && { interconnectId: input.interconnectId })), (input.loaContentType !== undefined &&
        input.loaContentType !== null && { loaContentType: input.loaContentType })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }));
};
var serializeAws_json1_1DescribeInterconnectsRequest = function (input, context) {
    return __assign({}, (input.interconnectId !== undefined &&
        input.interconnectId !== null && { interconnectId: input.interconnectId }));
};
var serializeAws_json1_1DescribeLagsRequest = function (input, context) {
    return __assign({}, (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }));
};
var serializeAws_json1_1DescribeLoaRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.loaContentType !== undefined &&
        input.loaContentType !== null && { loaContentType: input.loaContentType })), (input.providerName !== undefined && input.providerName !== null && { providerName: input.providerName }));
};
var serializeAws_json1_1DescribeTagsRequest = function (input, context) {
    return __assign({}, (input.resourceArns !== undefined &&
        input.resourceArns !== null && {
        resourceArns: serializeAws_json1_1ResourceArnList(input.resourceArns, context),
    }));
};
var serializeAws_json1_1DescribeVirtualInterfacesRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1DisassociateConnectionFromLagRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId }));
};
var serializeAws_json1_1DisassociateMacSecKeyRequest = function (input, context) {
    return __assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.secretARN !== undefined && input.secretARN !== null && { secretARN: input.secretARN }));
};
var serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.bgpPeers !== undefined &&
        input.bgpPeers !== null && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.testId !== undefined && input.testId !== null && { testId: input.testId })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1NewBGPPeer = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress }));
};
var serializeAws_json1_1NewPrivateVirtualInterface = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualGatewayId !== undefined &&
        input.virtualGatewayId !== null && { virtualGatewayId: input.virtualGatewayId })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1NewPrivateVirtualInterfaceAllocation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1NewPublicVirtualInterface = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.routeFilterPrefixes !== undefined &&
        input.routeFilterPrefixes !== null && {
        routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1NewPublicVirtualInterfaceAllocation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.routeFilterPrefixes !== undefined &&
        input.routeFilterPrefixes !== null && {
        routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1NewTransitVirtualInterface = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.directConnectGatewayId !== undefined &&
        input.directConnectGatewayId !== null && { directConnectGatewayId: input.directConnectGatewayId })), (input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1NewTransitVirtualInterfaceAllocation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addressFamily !== undefined && input.addressFamily !== null && { addressFamily: input.addressFamily })), (input.amazonAddress !== undefined && input.amazonAddress !== null && { amazonAddress: input.amazonAddress })), (input.asn !== undefined && input.asn !== null && { asn: input.asn })), (input.authKey !== undefined && input.authKey !== null && { authKey: input.authKey })), (input.customerAddress !== undefined &&
        input.customerAddress !== null && { customerAddress: input.customerAddress })), (input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.virtualInterfaceName !== undefined &&
        input.virtualInterfaceName !== null && { virtualInterfaceName: input.virtualInterfaceName })), (input.vlan !== undefined && input.vlan !== null && { vlan: input.vlan }));
};
var serializeAws_json1_1ResourceArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1RouteFilterPrefix = function (input, context) {
    return __assign({}, (input.cidr !== undefined && input.cidr !== null && { cidr: input.cidr }));
};
var serializeAws_json1_1RouteFilterPrefixList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RouteFilterPrefix(entry, context);
    });
};
var serializeAws_json1_1StartBgpFailoverTestRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.bgpPeers !== undefined &&
        input.bgpPeers !== null && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) })), (input.testDurationInMinutes !== undefined &&
        input.testDurationInMinutes !== null && { testDurationInMinutes: input.testDurationInMinutes })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1StopBgpFailoverTestRequest = function (input, context) {
    return __assign({}, (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined &&
        input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }));
};
var serializeAws_json1_1UpdateConnectionRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId })), (input.connectionName !== undefined &&
        input.connectionName !== null && { connectionName: input.connectionName })), (input.encryptionMode !== undefined &&
        input.encryptionMode !== null && { encryptionMode: input.encryptionMode }));
};
var serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.addAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.addAllowedPrefixesToDirectConnectGateway !== null && {
        addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context),
    })), (input.associationId !== undefined && input.associationId !== null && { associationId: input.associationId })), (input.removeAllowedPrefixesToDirectConnectGateway !== undefined &&
        input.removeAllowedPrefixesToDirectConnectGateway !== null && {
        removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context),
    }));
};
var serializeAws_json1_1UpdateLagRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.encryptionMode !== undefined &&
        input.encryptionMode !== null && { encryptionMode: input.encryptionMode })), (input.lagId !== undefined && input.lagId !== null && { lagId: input.lagId })), (input.lagName !== undefined && input.lagName !== null && { lagName: input.lagName })), (input.minimumLinks !== undefined && input.minimumLinks !== null && { minimumLinks: input.minimumLinks }));
};
var serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu })), (input.virtualInterfaceId !== undefined &&
        input.virtualInterfaceId !== null && { virtualInterfaceId: input.virtualInterfaceId }));
};
var deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult = function (output, context) {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
var deserializeAws_json1_1AllocateTransitVirtualInterfaceResult = function (output, context) {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
var deserializeAws_json1_1AssociatedGateway = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1AssociateMacSecKeyResponse = function (output, context) {
    return {
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
    };
};
var deserializeAws_json1_1AvailableMacSecPortSpeeds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AvailablePortSpeeds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BGPPeer = function (output, context) {
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
var deserializeAws_json1_1BGPPeerIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BGPPeerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BGPPeer(entry, context);
    });
};
var deserializeAws_json1_1ConfirmConnectionResponse = function (output, context) {
    return {
        connectionState: output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
    };
};
var deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse = function (output, context) {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
var deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse = function (output, context) {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
var deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse = function (output, context) {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
var deserializeAws_json1_1Connection = function (output, context) {
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
var deserializeAws_json1_1ConnectionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
var deserializeAws_json1_1Connections = function (output, context) {
    return {
        connections: output.connections !== undefined && output.connections !== null
            ? deserializeAws_json1_1ConnectionList(output.connections, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateBGPPeerResponse = function (output, context) {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult = function (output, context) {
    return {
        directConnectGatewayAssociationProposal: output.directConnectGatewayAssociationProposal !== undefined &&
            output.directConnectGatewayAssociationProposal !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult = function (output, context) {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateDirectConnectGatewayResult = function (output, context) {
    return {
        directConnectGateway: output.directConnectGateway !== undefined && output.directConnectGateway !== null
            ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateTransitVirtualInterfaceResult = function (output, context) {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteBGPPeerResponse = function (output, context) {
    return {
        virtualInterface: output.virtualInterface !== undefined && output.virtualInterface !== null
            ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult = function (output, context) {
    return {
        directConnectGatewayAssociationProposal: output.directConnectGatewayAssociationProposal !== undefined &&
            output.directConnectGatewayAssociationProposal !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult = function (output, context) {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteDirectConnectGatewayResult = function (output, context) {
    return {
        directConnectGateway: output.directConnectGateway !== undefined && output.directConnectGateway !== null
            ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteInterconnectResponse = function (output, context) {
    return {
        interconnectState: output.interconnectState !== undefined && output.interconnectState !== null
            ? output.interconnectState
            : undefined,
    };
};
var deserializeAws_json1_1DeleteVirtualInterfaceResponse = function (output, context) {
    return {
        virtualInterfaceState: output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
            ? output.virtualInterfaceState
            : undefined,
    };
};
var deserializeAws_json1_1DescribeConnectionLoaResponse = function (output, context) {
    return {
        loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
    };
};
var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult = function (output, context) {
    return {
        directConnectGatewayAssociationProposals: output.directConnectGatewayAssociationProposals !== undefined &&
            output.directConnectGatewayAssociationProposals !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationProposalList(output.directConnectGatewayAssociationProposals, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult = function (output, context) {
    return {
        directConnectGatewayAssociations: output.directConnectGatewayAssociations !== undefined && output.directConnectGatewayAssociations !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociationList(output.directConnectGatewayAssociations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult = function (output, context) {
    return {
        directConnectGatewayAttachments: output.directConnectGatewayAttachments !== undefined && output.directConnectGatewayAttachments !== null
            ? deserializeAws_json1_1DirectConnectGatewayAttachmentList(output.directConnectGatewayAttachments, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDirectConnectGatewaysResult = function (output, context) {
    return {
        directConnectGateways: output.directConnectGateways !== undefined && output.directConnectGateways !== null
            ? deserializeAws_json1_1DirectConnectGatewayList(output.directConnectGateways, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeInterconnectLoaResponse = function (output, context) {
    return {
        loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
    };
};
var deserializeAws_json1_1DescribeTagsResponse = function (output, context) {
    return {
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_json1_1ResourceTagList(output.resourceTags, context)
            : undefined,
    };
};
var deserializeAws_json1_1DirectConnectClientException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DirectConnectGateway = function (output, context) {
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
var deserializeAws_json1_1DirectConnectGatewayAssociation = function (output, context) {
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
var deserializeAws_json1_1DirectConnectGatewayAssociationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAssociation(entry, context);
    });
};
var deserializeAws_json1_1DirectConnectGatewayAssociationProposal = function (output, context) {
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
var deserializeAws_json1_1DirectConnectGatewayAssociationProposalList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAssociationProposal(entry, context);
    });
};
var deserializeAws_json1_1DirectConnectGatewayAttachment = function (output, context) {
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
var deserializeAws_json1_1DirectConnectGatewayAttachmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGatewayAttachment(entry, context);
    });
};
var deserializeAws_json1_1DirectConnectGatewayList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectConnectGateway(entry, context);
    });
};
var deserializeAws_json1_1DirectConnectServerException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DisassociateMacSecKeyResponse = function (output, context) {
    return {
        connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
        macSecKeys: output.macSecKeys !== undefined && output.macSecKeys !== null
            ? deserializeAws_json1_1MacSecKeyList(output.macSecKeys, context)
            : undefined,
    };
};
var deserializeAws_json1_1DuplicateTagKeysException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Interconnect = function (output, context) {
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
var deserializeAws_json1_1InterconnectList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Interconnect(entry, context);
    });
};
var deserializeAws_json1_1Interconnects = function (output, context) {
    return {
        interconnects: output.interconnects !== undefined && output.interconnects !== null
            ? deserializeAws_json1_1InterconnectList(output.interconnects, context)
            : undefined,
    };
};
var deserializeAws_json1_1Lag = function (output, context) {
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
var deserializeAws_json1_1LagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Lag(entry, context);
    });
};
var deserializeAws_json1_1Lags = function (output, context) {
    return {
        lags: output.lags !== undefined && output.lags !== null
            ? deserializeAws_json1_1LagList(output.lags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        virtualInterfaceTestHistory: output.virtualInterfaceTestHistory !== undefined && output.virtualInterfaceTestHistory !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistoryList(output.virtualInterfaceTestHistory, context)
            : undefined,
    };
};
var deserializeAws_json1_1Loa = function (output, context) {
    return {
        loaContent: output.loaContent !== undefined && output.loaContent !== null
            ? context.base64Decoder(output.loaContent)
            : undefined,
        loaContentType: output.loaContentType !== undefined && output.loaContentType !== null ? output.loaContentType : undefined,
    };
};
var deserializeAws_json1_1Location = function (output, context) {
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
var deserializeAws_json1_1LocationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Location(entry, context);
    });
};
var deserializeAws_json1_1Locations = function (output, context) {
    return {
        locations: output.locations !== undefined && output.locations !== null
            ? deserializeAws_json1_1LocationList(output.locations, context)
            : undefined,
    };
};
var deserializeAws_json1_1MacSecKey = function (output, context) {
    return {
        ckn: output.ckn !== undefined && output.ckn !== null ? output.ckn : undefined,
        secretARN: output.secretARN !== undefined && output.secretARN !== null ? output.secretARN : undefined,
        startOn: output.startOn !== undefined && output.startOn !== null ? output.startOn : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
var deserializeAws_json1_1MacSecKeyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MacSecKey(entry, context);
    });
};
var deserializeAws_json1_1ProviderList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ResourceTag = function (output, context) {
    return {
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
var deserializeAws_json1_1RouteFilterPrefix = function (output, context) {
    return {
        cidr: output.cidr !== undefined && output.cidr !== null ? output.cidr : undefined,
    };
};
var deserializeAws_json1_1RouteFilterPrefixList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RouteFilterPrefix(entry, context);
    });
};
var deserializeAws_json1_1StartBgpFailoverTestResponse = function (output, context) {
    return {
        virtualInterfaceTest: output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopBgpFailoverTestResponse = function (output, context) {
    return {
        virtualInterfaceTest: output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
            ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
            : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult = function (output, context) {
    return {
        directConnectGatewayAssociation: output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
            ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
            : undefined,
    };
};
var deserializeAws_json1_1VirtualGateway = function (output, context) {
    return {
        virtualGatewayId: output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
        virtualGatewayState: output.virtualGatewayState !== undefined && output.virtualGatewayState !== null
            ? output.virtualGatewayState
            : undefined,
    };
};
var deserializeAws_json1_1VirtualGatewayList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualGateway(entry, context);
    });
};
var deserializeAws_json1_1VirtualGateways = function (output, context) {
    return {
        virtualGateways: output.virtualGateways !== undefined && output.virtualGateways !== null
            ? deserializeAws_json1_1VirtualGatewayList(output.virtualGateways, context)
            : undefined,
    };
};
var deserializeAws_json1_1VirtualInterface = function (output, context) {
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
var deserializeAws_json1_1VirtualInterfaceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualInterface(entry, context);
    });
};
var deserializeAws_json1_1VirtualInterfaces = function (output, context) {
    return {
        virtualInterfaces: output.virtualInterfaces !== undefined && output.virtualInterfaces !== null
            ? deserializeAws_json1_1VirtualInterfaceList(output.virtualInterfaces, context)
            : undefined,
    };
};
var deserializeAws_json1_1VirtualInterfaceTestHistory = function (output, context) {
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
var deserializeAws_json1_1VirtualInterfaceTestHistoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VirtualInterfaceTestHistory(entry, context);
    });
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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