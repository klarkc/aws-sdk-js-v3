"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDirectConnectGatewayAssociationRequest = exports.CreateDirectConnectGatewayResult = exports.DirectConnectGateway = exports.CreateDirectConnectGatewayRequest = exports.CreateConnectionRequest = exports.CreateBGPPeerResponse = exports.CreateBGPPeerRequest = exports.NewBGPPeer = exports.Connections = exports.ConfirmTransitVirtualInterfaceResponse = exports.ConfirmTransitVirtualInterfaceRequest = exports.ConfirmPublicVirtualInterfaceResponse = exports.ConfirmPublicVirtualInterfaceRequest = exports.ConfirmPrivateVirtualInterfaceResponse = exports.ConfirmPrivateVirtualInterfaceRequest = exports.ConfirmConnectionResponse = exports.ConfirmConnectionRequest = exports.AssociateVirtualInterfaceRequest = exports.AssociateMacSecKeyResponse = exports.AssociateMacSecKeyRequest = exports.AssociateHostedConnectionRequest = exports.AssociateConnectionWithLagRequest = exports.AllocateTransitVirtualInterfaceResult = exports.AllocateTransitVirtualInterfaceRequest = exports.NewTransitVirtualInterfaceAllocation = exports.AllocatePublicVirtualInterfaceRequest = exports.NewPublicVirtualInterfaceAllocation = exports.VirtualInterface = exports.BGPPeer = exports.BGPStatus = exports.BGPPeerState = exports.AllocatePrivateVirtualInterfaceRequest = exports.NewPrivateVirtualInterfaceAllocation = exports.TooManyTagsException = exports.DuplicateTagKeysException = exports.AllocateHostedConnectionRequest = exports.Connection = exports.Tag = exports.MacSecKey = exports.HasLogicalRedundancy = exports.AllocateConnectionOnInterconnectRequest = exports.AddressFamily = exports.DirectConnectServerException = exports.DirectConnectClientException = exports.AcceptDirectConnectGatewayAssociationProposalResult = exports.DirectConnectGatewayAssociation = exports.AssociatedGateway = exports.GatewayType = exports.AcceptDirectConnectGatewayAssociationProposalRequest = exports.RouteFilterPrefix = void 0;
exports.DescribeLagsRequest = exports.Interconnects = exports.DescribeInterconnectsRequest = exports.DescribeInterconnectLoaResponse = exports.DescribeInterconnectLoaRequest = exports.DescribeHostedConnectionsRequest = exports.DescribeDirectConnectGatewaysResult = exports.DescribeDirectConnectGatewaysRequest = exports.DescribeDirectConnectGatewayAttachmentsResult = exports.DirectConnectGatewayAttachment = exports.DescribeDirectConnectGatewayAttachmentsRequest = exports.DescribeDirectConnectGatewayAssociationsResult = exports.DescribeDirectConnectGatewayAssociationsRequest = exports.DescribeDirectConnectGatewayAssociationProposalsResult = exports.DescribeDirectConnectGatewayAssociationProposalsRequest = exports.DescribeConnectionsOnInterconnectRequest = exports.DescribeConnectionsRequest = exports.DescribeConnectionLoaResponse = exports.Loa = exports.DescribeConnectionLoaRequest = exports.LoaContentType = exports.DeleteVirtualInterfaceResponse = exports.DeleteVirtualInterfaceRequest = exports.DeleteLagRequest = exports.DeleteInterconnectResponse = exports.DeleteInterconnectRequest = exports.DeleteDirectConnectGatewayAssociationProposalResult = exports.DeleteDirectConnectGatewayAssociationProposalRequest = exports.DeleteDirectConnectGatewayAssociationResult = exports.DeleteDirectConnectGatewayAssociationRequest = exports.DeleteDirectConnectGatewayResult = exports.DeleteDirectConnectGatewayRequest = exports.DeleteConnectionRequest = exports.DeleteBGPPeerResponse = exports.DeleteBGPPeerRequest = exports.CreateTransitVirtualInterfaceResult = exports.CreateTransitVirtualInterfaceRequest = exports.NewTransitVirtualInterface = exports.CreatePublicVirtualInterfaceRequest = exports.NewPublicVirtualInterface = exports.CreatePrivateVirtualInterfaceRequest = exports.NewPrivateVirtualInterface = exports.Lag = exports.CreateLagRequest = exports.Interconnect = exports.CreateInterconnectRequest = exports.CreateDirectConnectGatewayAssociationProposalResult = exports.DirectConnectGatewayAssociationProposal = exports.CreateDirectConnectGatewayAssociationProposalRequest = exports.CreateDirectConnectGatewayAssociationResult = void 0;
exports.UpdateVirtualInterfaceAttributesRequest = exports.UpdateLagRequest = exports.UpdateDirectConnectGatewayAssociationResult = exports.UpdateDirectConnectGatewayAssociationRequest = exports.UpdateConnectionRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopBgpFailoverTestResponse = exports.StopBgpFailoverTestRequest = exports.StartBgpFailoverTestResponse = exports.StartBgpFailoverTestRequest = exports.ListVirtualInterfaceTestHistoryResponse = exports.VirtualInterfaceTestHistory = exports.ListVirtualInterfaceTestHistoryRequest = exports.DisassociateMacSecKeyResponse = exports.DisassociateMacSecKeyRequest = exports.DisassociateConnectionFromLagRequest = exports.VirtualInterfaces = exports.DescribeVirtualInterfacesRequest = exports.VirtualGateways = exports.VirtualGateway = exports.DescribeTagsResponse = exports.ResourceTag = exports.DescribeTagsRequest = exports.Locations = exports.Location = exports.DescribeLoaRequest = exports.Lags = void 0;
var RouteFilterPrefix;
(function (RouteFilterPrefix) {
    /**
     * @internal
     */
    RouteFilterPrefix.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RouteFilterPrefix = exports.RouteFilterPrefix || (exports.RouteFilterPrefix = {}));
var AcceptDirectConnectGatewayAssociationProposalRequest;
(function (AcceptDirectConnectGatewayAssociationProposalRequest) {
    /**
     * @internal
     */
    AcceptDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptDirectConnectGatewayAssociationProposalRequest = exports.AcceptDirectConnectGatewayAssociationProposalRequest || (exports.AcceptDirectConnectGatewayAssociationProposalRequest = {}));
var GatewayType;
(function (GatewayType) {
    GatewayType["TransitGateway"] = "transitGateway";
    GatewayType["VirtualPrivateGateway"] = "virtualPrivateGateway";
})(GatewayType = exports.GatewayType || (exports.GatewayType = {}));
var AssociatedGateway;
(function (AssociatedGateway) {
    /**
     * @internal
     */
    AssociatedGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedGateway = exports.AssociatedGateway || (exports.AssociatedGateway = {}));
var DirectConnectGatewayAssociation;
(function (DirectConnectGatewayAssociation) {
    /**
     * @internal
     */
    DirectConnectGatewayAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectGatewayAssociation = exports.DirectConnectGatewayAssociation || (exports.DirectConnectGatewayAssociation = {}));
var AcceptDirectConnectGatewayAssociationProposalResult;
(function (AcceptDirectConnectGatewayAssociationProposalResult) {
    /**
     * @internal
     */
    AcceptDirectConnectGatewayAssociationProposalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptDirectConnectGatewayAssociationProposalResult = exports.AcceptDirectConnectGatewayAssociationProposalResult || (exports.AcceptDirectConnectGatewayAssociationProposalResult = {}));
var DirectConnectClientException;
(function (DirectConnectClientException) {
    /**
     * @internal
     */
    DirectConnectClientException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectClientException = exports.DirectConnectClientException || (exports.DirectConnectClientException = {}));
var DirectConnectServerException;
(function (DirectConnectServerException) {
    /**
     * @internal
     */
    DirectConnectServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectServerException = exports.DirectConnectServerException || (exports.DirectConnectServerException = {}));
var AddressFamily;
(function (AddressFamily) {
    AddressFamily["IPv4"] = "ipv4";
    AddressFamily["IPv6"] = "ipv6";
})(AddressFamily = exports.AddressFamily || (exports.AddressFamily = {}));
var AllocateConnectionOnInterconnectRequest;
(function (AllocateConnectionOnInterconnectRequest) {
    /**
     * @internal
     */
    AllocateConnectionOnInterconnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateConnectionOnInterconnectRequest = exports.AllocateConnectionOnInterconnectRequest || (exports.AllocateConnectionOnInterconnectRequest = {}));
var HasLogicalRedundancy;
(function (HasLogicalRedundancy) {
    HasLogicalRedundancy["No"] = "no";
    HasLogicalRedundancy["Unknown"] = "unknown";
    HasLogicalRedundancy["Yes"] = "yes";
})(HasLogicalRedundancy = exports.HasLogicalRedundancy || (exports.HasLogicalRedundancy = {}));
var MacSecKey;
(function (MacSecKey) {
    /**
     * @internal
     */
    MacSecKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MacSecKey = exports.MacSecKey || (exports.MacSecKey = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var AllocateHostedConnectionRequest;
(function (AllocateHostedConnectionRequest) {
    /**
     * @internal
     */
    AllocateHostedConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateHostedConnectionRequest = exports.AllocateHostedConnectionRequest || (exports.AllocateHostedConnectionRequest = {}));
var DuplicateTagKeysException;
(function (DuplicateTagKeysException) {
    /**
     * @internal
     */
    DuplicateTagKeysException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateTagKeysException = exports.DuplicateTagKeysException || (exports.DuplicateTagKeysException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var NewPrivateVirtualInterfaceAllocation;
(function (NewPrivateVirtualInterfaceAllocation) {
    /**
     * @internal
     */
    NewPrivateVirtualInterfaceAllocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewPrivateVirtualInterfaceAllocation = exports.NewPrivateVirtualInterfaceAllocation || (exports.NewPrivateVirtualInterfaceAllocation = {}));
var AllocatePrivateVirtualInterfaceRequest;
(function (AllocatePrivateVirtualInterfaceRequest) {
    /**
     * @internal
     */
    AllocatePrivateVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocatePrivateVirtualInterfaceRequest = exports.AllocatePrivateVirtualInterfaceRequest || (exports.AllocatePrivateVirtualInterfaceRequest = {}));
var BGPPeerState;
(function (BGPPeerState) {
    BGPPeerState["Available"] = "available";
    BGPPeerState["Deleted"] = "deleted";
    BGPPeerState["Deleting"] = "deleting";
    BGPPeerState["Pending"] = "pending";
    BGPPeerState["Verifying"] = "verifying";
})(BGPPeerState = exports.BGPPeerState || (exports.BGPPeerState = {}));
var BGPStatus;
(function (BGPStatus) {
    BGPStatus["Down"] = "down";
    BGPStatus["Unknown"] = "unknown";
    BGPStatus["Up"] = "up";
})(BGPStatus = exports.BGPStatus || (exports.BGPStatus = {}));
var BGPPeer;
(function (BGPPeer) {
    /**
     * @internal
     */
    BGPPeer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BGPPeer = exports.BGPPeer || (exports.BGPPeer = {}));
var VirtualInterface;
(function (VirtualInterface) {
    /**
     * @internal
     */
    VirtualInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VirtualInterface = exports.VirtualInterface || (exports.VirtualInterface = {}));
var NewPublicVirtualInterfaceAllocation;
(function (NewPublicVirtualInterfaceAllocation) {
    /**
     * @internal
     */
    NewPublicVirtualInterfaceAllocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewPublicVirtualInterfaceAllocation = exports.NewPublicVirtualInterfaceAllocation || (exports.NewPublicVirtualInterfaceAllocation = {}));
var AllocatePublicVirtualInterfaceRequest;
(function (AllocatePublicVirtualInterfaceRequest) {
    /**
     * @internal
     */
    AllocatePublicVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocatePublicVirtualInterfaceRequest = exports.AllocatePublicVirtualInterfaceRequest || (exports.AllocatePublicVirtualInterfaceRequest = {}));
var NewTransitVirtualInterfaceAllocation;
(function (NewTransitVirtualInterfaceAllocation) {
    /**
     * @internal
     */
    NewTransitVirtualInterfaceAllocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewTransitVirtualInterfaceAllocation = exports.NewTransitVirtualInterfaceAllocation || (exports.NewTransitVirtualInterfaceAllocation = {}));
var AllocateTransitVirtualInterfaceRequest;
(function (AllocateTransitVirtualInterfaceRequest) {
    /**
     * @internal
     */
    AllocateTransitVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateTransitVirtualInterfaceRequest = exports.AllocateTransitVirtualInterfaceRequest || (exports.AllocateTransitVirtualInterfaceRequest = {}));
var AllocateTransitVirtualInterfaceResult;
(function (AllocateTransitVirtualInterfaceResult) {
    /**
     * @internal
     */
    AllocateTransitVirtualInterfaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateTransitVirtualInterfaceResult = exports.AllocateTransitVirtualInterfaceResult || (exports.AllocateTransitVirtualInterfaceResult = {}));
var AssociateConnectionWithLagRequest;
(function (AssociateConnectionWithLagRequest) {
    /**
     * @internal
     */
    AssociateConnectionWithLagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateConnectionWithLagRequest = exports.AssociateConnectionWithLagRequest || (exports.AssociateConnectionWithLagRequest = {}));
var AssociateHostedConnectionRequest;
(function (AssociateHostedConnectionRequest) {
    /**
     * @internal
     */
    AssociateHostedConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateHostedConnectionRequest = exports.AssociateHostedConnectionRequest || (exports.AssociateHostedConnectionRequest = {}));
var AssociateMacSecKeyRequest;
(function (AssociateMacSecKeyRequest) {
    /**
     * @internal
     */
    AssociateMacSecKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateMacSecKeyRequest = exports.AssociateMacSecKeyRequest || (exports.AssociateMacSecKeyRequest = {}));
var AssociateMacSecKeyResponse;
(function (AssociateMacSecKeyResponse) {
    /**
     * @internal
     */
    AssociateMacSecKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateMacSecKeyResponse = exports.AssociateMacSecKeyResponse || (exports.AssociateMacSecKeyResponse = {}));
var AssociateVirtualInterfaceRequest;
(function (AssociateVirtualInterfaceRequest) {
    /**
     * @internal
     */
    AssociateVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateVirtualInterfaceRequest = exports.AssociateVirtualInterfaceRequest || (exports.AssociateVirtualInterfaceRequest = {}));
var ConfirmConnectionRequest;
(function (ConfirmConnectionRequest) {
    /**
     * @internal
     */
    ConfirmConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmConnectionRequest = exports.ConfirmConnectionRequest || (exports.ConfirmConnectionRequest = {}));
var ConfirmConnectionResponse;
(function (ConfirmConnectionResponse) {
    /**
     * @internal
     */
    ConfirmConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmConnectionResponse = exports.ConfirmConnectionResponse || (exports.ConfirmConnectionResponse = {}));
var ConfirmPrivateVirtualInterfaceRequest;
(function (ConfirmPrivateVirtualInterfaceRequest) {
    /**
     * @internal
     */
    ConfirmPrivateVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmPrivateVirtualInterfaceRequest = exports.ConfirmPrivateVirtualInterfaceRequest || (exports.ConfirmPrivateVirtualInterfaceRequest = {}));
var ConfirmPrivateVirtualInterfaceResponse;
(function (ConfirmPrivateVirtualInterfaceResponse) {
    /**
     * @internal
     */
    ConfirmPrivateVirtualInterfaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmPrivateVirtualInterfaceResponse = exports.ConfirmPrivateVirtualInterfaceResponse || (exports.ConfirmPrivateVirtualInterfaceResponse = {}));
var ConfirmPublicVirtualInterfaceRequest;
(function (ConfirmPublicVirtualInterfaceRequest) {
    /**
     * @internal
     */
    ConfirmPublicVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmPublicVirtualInterfaceRequest = exports.ConfirmPublicVirtualInterfaceRequest || (exports.ConfirmPublicVirtualInterfaceRequest = {}));
var ConfirmPublicVirtualInterfaceResponse;
(function (ConfirmPublicVirtualInterfaceResponse) {
    /**
     * @internal
     */
    ConfirmPublicVirtualInterfaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmPublicVirtualInterfaceResponse = exports.ConfirmPublicVirtualInterfaceResponse || (exports.ConfirmPublicVirtualInterfaceResponse = {}));
var ConfirmTransitVirtualInterfaceRequest;
(function (ConfirmTransitVirtualInterfaceRequest) {
    /**
     * @internal
     */
    ConfirmTransitVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmTransitVirtualInterfaceRequest = exports.ConfirmTransitVirtualInterfaceRequest || (exports.ConfirmTransitVirtualInterfaceRequest = {}));
var ConfirmTransitVirtualInterfaceResponse;
(function (ConfirmTransitVirtualInterfaceResponse) {
    /**
     * @internal
     */
    ConfirmTransitVirtualInterfaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmTransitVirtualInterfaceResponse = exports.ConfirmTransitVirtualInterfaceResponse || (exports.ConfirmTransitVirtualInterfaceResponse = {}));
var Connections;
(function (Connections) {
    /**
     * @internal
     */
    Connections.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connections = exports.Connections || (exports.Connections = {}));
var NewBGPPeer;
(function (NewBGPPeer) {
    /**
     * @internal
     */
    NewBGPPeer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewBGPPeer = exports.NewBGPPeer || (exports.NewBGPPeer = {}));
var CreateBGPPeerRequest;
(function (CreateBGPPeerRequest) {
    /**
     * @internal
     */
    CreateBGPPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBGPPeerRequest = exports.CreateBGPPeerRequest || (exports.CreateBGPPeerRequest = {}));
var CreateBGPPeerResponse;
(function (CreateBGPPeerResponse) {
    /**
     * @internal
     */
    CreateBGPPeerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBGPPeerResponse = exports.CreateBGPPeerResponse || (exports.CreateBGPPeerResponse = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var CreateDirectConnectGatewayRequest;
(function (CreateDirectConnectGatewayRequest) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayRequest = exports.CreateDirectConnectGatewayRequest || (exports.CreateDirectConnectGatewayRequest = {}));
var DirectConnectGateway;
(function (DirectConnectGateway) {
    /**
     * @internal
     */
    DirectConnectGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectGateway = exports.DirectConnectGateway || (exports.DirectConnectGateway = {}));
var CreateDirectConnectGatewayResult;
(function (CreateDirectConnectGatewayResult) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayResult = exports.CreateDirectConnectGatewayResult || (exports.CreateDirectConnectGatewayResult = {}));
var CreateDirectConnectGatewayAssociationRequest;
(function (CreateDirectConnectGatewayAssociationRequest) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayAssociationRequest = exports.CreateDirectConnectGatewayAssociationRequest || (exports.CreateDirectConnectGatewayAssociationRequest = {}));
var CreateDirectConnectGatewayAssociationResult;
(function (CreateDirectConnectGatewayAssociationResult) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayAssociationResult = exports.CreateDirectConnectGatewayAssociationResult || (exports.CreateDirectConnectGatewayAssociationResult = {}));
var CreateDirectConnectGatewayAssociationProposalRequest;
(function (CreateDirectConnectGatewayAssociationProposalRequest) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayAssociationProposalRequest = exports.CreateDirectConnectGatewayAssociationProposalRequest || (exports.CreateDirectConnectGatewayAssociationProposalRequest = {}));
var DirectConnectGatewayAssociationProposal;
(function (DirectConnectGatewayAssociationProposal) {
    /**
     * @internal
     */
    DirectConnectGatewayAssociationProposal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectGatewayAssociationProposal = exports.DirectConnectGatewayAssociationProposal || (exports.DirectConnectGatewayAssociationProposal = {}));
var CreateDirectConnectGatewayAssociationProposalResult;
(function (CreateDirectConnectGatewayAssociationProposalResult) {
    /**
     * @internal
     */
    CreateDirectConnectGatewayAssociationProposalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectConnectGatewayAssociationProposalResult = exports.CreateDirectConnectGatewayAssociationProposalResult || (exports.CreateDirectConnectGatewayAssociationProposalResult = {}));
var CreateInterconnectRequest;
(function (CreateInterconnectRequest) {
    /**
     * @internal
     */
    CreateInterconnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInterconnectRequest = exports.CreateInterconnectRequest || (exports.CreateInterconnectRequest = {}));
var Interconnect;
(function (Interconnect) {
    /**
     * @internal
     */
    Interconnect.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Interconnect = exports.Interconnect || (exports.Interconnect = {}));
var CreateLagRequest;
(function (CreateLagRequest) {
    /**
     * @internal
     */
    CreateLagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLagRequest = exports.CreateLagRequest || (exports.CreateLagRequest = {}));
var Lag;
(function (Lag) {
    /**
     * @internal
     */
    Lag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Lag = exports.Lag || (exports.Lag = {}));
var NewPrivateVirtualInterface;
(function (NewPrivateVirtualInterface) {
    /**
     * @internal
     */
    NewPrivateVirtualInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewPrivateVirtualInterface = exports.NewPrivateVirtualInterface || (exports.NewPrivateVirtualInterface = {}));
var CreatePrivateVirtualInterfaceRequest;
(function (CreatePrivateVirtualInterfaceRequest) {
    /**
     * @internal
     */
    CreatePrivateVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePrivateVirtualInterfaceRequest = exports.CreatePrivateVirtualInterfaceRequest || (exports.CreatePrivateVirtualInterfaceRequest = {}));
var NewPublicVirtualInterface;
(function (NewPublicVirtualInterface) {
    /**
     * @internal
     */
    NewPublicVirtualInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewPublicVirtualInterface = exports.NewPublicVirtualInterface || (exports.NewPublicVirtualInterface = {}));
var CreatePublicVirtualInterfaceRequest;
(function (CreatePublicVirtualInterfaceRequest) {
    /**
     * @internal
     */
    CreatePublicVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePublicVirtualInterfaceRequest = exports.CreatePublicVirtualInterfaceRequest || (exports.CreatePublicVirtualInterfaceRequest = {}));
var NewTransitVirtualInterface;
(function (NewTransitVirtualInterface) {
    /**
     * @internal
     */
    NewTransitVirtualInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewTransitVirtualInterface = exports.NewTransitVirtualInterface || (exports.NewTransitVirtualInterface = {}));
var CreateTransitVirtualInterfaceRequest;
(function (CreateTransitVirtualInterfaceRequest) {
    /**
     * @internal
     */
    CreateTransitVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitVirtualInterfaceRequest = exports.CreateTransitVirtualInterfaceRequest || (exports.CreateTransitVirtualInterfaceRequest = {}));
var CreateTransitVirtualInterfaceResult;
(function (CreateTransitVirtualInterfaceResult) {
    /**
     * @internal
     */
    CreateTransitVirtualInterfaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitVirtualInterfaceResult = exports.CreateTransitVirtualInterfaceResult || (exports.CreateTransitVirtualInterfaceResult = {}));
var DeleteBGPPeerRequest;
(function (DeleteBGPPeerRequest) {
    /**
     * @internal
     */
    DeleteBGPPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBGPPeerRequest = exports.DeleteBGPPeerRequest || (exports.DeleteBGPPeerRequest = {}));
var DeleteBGPPeerResponse;
(function (DeleteBGPPeerResponse) {
    /**
     * @internal
     */
    DeleteBGPPeerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBGPPeerResponse = exports.DeleteBGPPeerResponse || (exports.DeleteBGPPeerResponse = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteDirectConnectGatewayRequest;
(function (DeleteDirectConnectGatewayRequest) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayRequest = exports.DeleteDirectConnectGatewayRequest || (exports.DeleteDirectConnectGatewayRequest = {}));
var DeleteDirectConnectGatewayResult;
(function (DeleteDirectConnectGatewayResult) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayResult = exports.DeleteDirectConnectGatewayResult || (exports.DeleteDirectConnectGatewayResult = {}));
var DeleteDirectConnectGatewayAssociationRequest;
(function (DeleteDirectConnectGatewayAssociationRequest) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayAssociationRequest = exports.DeleteDirectConnectGatewayAssociationRequest || (exports.DeleteDirectConnectGatewayAssociationRequest = {}));
var DeleteDirectConnectGatewayAssociationResult;
(function (DeleteDirectConnectGatewayAssociationResult) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayAssociationResult = exports.DeleteDirectConnectGatewayAssociationResult || (exports.DeleteDirectConnectGatewayAssociationResult = {}));
var DeleteDirectConnectGatewayAssociationProposalRequest;
(function (DeleteDirectConnectGatewayAssociationProposalRequest) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayAssociationProposalRequest = exports.DeleteDirectConnectGatewayAssociationProposalRequest || (exports.DeleteDirectConnectGatewayAssociationProposalRequest = {}));
var DeleteDirectConnectGatewayAssociationProposalResult;
(function (DeleteDirectConnectGatewayAssociationProposalResult) {
    /**
     * @internal
     */
    DeleteDirectConnectGatewayAssociationProposalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectConnectGatewayAssociationProposalResult = exports.DeleteDirectConnectGatewayAssociationProposalResult || (exports.DeleteDirectConnectGatewayAssociationProposalResult = {}));
var DeleteInterconnectRequest;
(function (DeleteInterconnectRequest) {
    /**
     * @internal
     */
    DeleteInterconnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInterconnectRequest = exports.DeleteInterconnectRequest || (exports.DeleteInterconnectRequest = {}));
var DeleteInterconnectResponse;
(function (DeleteInterconnectResponse) {
    /**
     * @internal
     */
    DeleteInterconnectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInterconnectResponse = exports.DeleteInterconnectResponse || (exports.DeleteInterconnectResponse = {}));
var DeleteLagRequest;
(function (DeleteLagRequest) {
    /**
     * @internal
     */
    DeleteLagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLagRequest = exports.DeleteLagRequest || (exports.DeleteLagRequest = {}));
var DeleteVirtualInterfaceRequest;
(function (DeleteVirtualInterfaceRequest) {
    /**
     * @internal
     */
    DeleteVirtualInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVirtualInterfaceRequest = exports.DeleteVirtualInterfaceRequest || (exports.DeleteVirtualInterfaceRequest = {}));
var DeleteVirtualInterfaceResponse;
(function (DeleteVirtualInterfaceResponse) {
    /**
     * @internal
     */
    DeleteVirtualInterfaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVirtualInterfaceResponse = exports.DeleteVirtualInterfaceResponse || (exports.DeleteVirtualInterfaceResponse = {}));
var LoaContentType;
(function (LoaContentType) {
    LoaContentType["PDF"] = "application/pdf";
})(LoaContentType = exports.LoaContentType || (exports.LoaContentType = {}));
var DescribeConnectionLoaRequest;
(function (DescribeConnectionLoaRequest) {
    /**
     * @internal
     */
    DescribeConnectionLoaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionLoaRequest = exports.DescribeConnectionLoaRequest || (exports.DescribeConnectionLoaRequest = {}));
var Loa;
(function (Loa) {
    /**
     * @internal
     */
    Loa.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Loa = exports.Loa || (exports.Loa = {}));
var DescribeConnectionLoaResponse;
(function (DescribeConnectionLoaResponse) {
    /**
     * @internal
     */
    DescribeConnectionLoaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionLoaResponse = exports.DescribeConnectionLoaResponse || (exports.DescribeConnectionLoaResponse = {}));
var DescribeConnectionsRequest;
(function (DescribeConnectionsRequest) {
    /**
     * @internal
     */
    DescribeConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionsRequest = exports.DescribeConnectionsRequest || (exports.DescribeConnectionsRequest = {}));
var DescribeConnectionsOnInterconnectRequest;
(function (DescribeConnectionsOnInterconnectRequest) {
    /**
     * @internal
     */
    DescribeConnectionsOnInterconnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionsOnInterconnectRequest = exports.DescribeConnectionsOnInterconnectRequest || (exports.DescribeConnectionsOnInterconnectRequest = {}));
var DescribeDirectConnectGatewayAssociationProposalsRequest;
(function (DescribeDirectConnectGatewayAssociationProposalsRequest) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAssociationProposalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAssociationProposalsRequest = exports.DescribeDirectConnectGatewayAssociationProposalsRequest || (exports.DescribeDirectConnectGatewayAssociationProposalsRequest = {}));
var DescribeDirectConnectGatewayAssociationProposalsResult;
(function (DescribeDirectConnectGatewayAssociationProposalsResult) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAssociationProposalsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAssociationProposalsResult = exports.DescribeDirectConnectGatewayAssociationProposalsResult || (exports.DescribeDirectConnectGatewayAssociationProposalsResult = {}));
var DescribeDirectConnectGatewayAssociationsRequest;
(function (DescribeDirectConnectGatewayAssociationsRequest) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAssociationsRequest = exports.DescribeDirectConnectGatewayAssociationsRequest || (exports.DescribeDirectConnectGatewayAssociationsRequest = {}));
var DescribeDirectConnectGatewayAssociationsResult;
(function (DescribeDirectConnectGatewayAssociationsResult) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAssociationsResult = exports.DescribeDirectConnectGatewayAssociationsResult || (exports.DescribeDirectConnectGatewayAssociationsResult = {}));
var DescribeDirectConnectGatewayAttachmentsRequest;
(function (DescribeDirectConnectGatewayAttachmentsRequest) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAttachmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAttachmentsRequest = exports.DescribeDirectConnectGatewayAttachmentsRequest || (exports.DescribeDirectConnectGatewayAttachmentsRequest = {}));
var DirectConnectGatewayAttachment;
(function (DirectConnectGatewayAttachment) {
    /**
     * @internal
     */
    DirectConnectGatewayAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectConnectGatewayAttachment = exports.DirectConnectGatewayAttachment || (exports.DirectConnectGatewayAttachment = {}));
var DescribeDirectConnectGatewayAttachmentsResult;
(function (DescribeDirectConnectGatewayAttachmentsResult) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewayAttachmentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewayAttachmentsResult = exports.DescribeDirectConnectGatewayAttachmentsResult || (exports.DescribeDirectConnectGatewayAttachmentsResult = {}));
var DescribeDirectConnectGatewaysRequest;
(function (DescribeDirectConnectGatewaysRequest) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewaysRequest = exports.DescribeDirectConnectGatewaysRequest || (exports.DescribeDirectConnectGatewaysRequest = {}));
var DescribeDirectConnectGatewaysResult;
(function (DescribeDirectConnectGatewaysResult) {
    /**
     * @internal
     */
    DescribeDirectConnectGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectConnectGatewaysResult = exports.DescribeDirectConnectGatewaysResult || (exports.DescribeDirectConnectGatewaysResult = {}));
var DescribeHostedConnectionsRequest;
(function (DescribeHostedConnectionsRequest) {
    /**
     * @internal
     */
    DescribeHostedConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostedConnectionsRequest = exports.DescribeHostedConnectionsRequest || (exports.DescribeHostedConnectionsRequest = {}));
var DescribeInterconnectLoaRequest;
(function (DescribeInterconnectLoaRequest) {
    /**
     * @internal
     */
    DescribeInterconnectLoaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInterconnectLoaRequest = exports.DescribeInterconnectLoaRequest || (exports.DescribeInterconnectLoaRequest = {}));
var DescribeInterconnectLoaResponse;
(function (DescribeInterconnectLoaResponse) {
    /**
     * @internal
     */
    DescribeInterconnectLoaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInterconnectLoaResponse = exports.DescribeInterconnectLoaResponse || (exports.DescribeInterconnectLoaResponse = {}));
var DescribeInterconnectsRequest;
(function (DescribeInterconnectsRequest) {
    /**
     * @internal
     */
    DescribeInterconnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInterconnectsRequest = exports.DescribeInterconnectsRequest || (exports.DescribeInterconnectsRequest = {}));
var Interconnects;
(function (Interconnects) {
    /**
     * @internal
     */
    Interconnects.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Interconnects = exports.Interconnects || (exports.Interconnects = {}));
var DescribeLagsRequest;
(function (DescribeLagsRequest) {
    /**
     * @internal
     */
    DescribeLagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLagsRequest = exports.DescribeLagsRequest || (exports.DescribeLagsRequest = {}));
var Lags;
(function (Lags) {
    /**
     * @internal
     */
    Lags.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Lags = exports.Lags || (exports.Lags = {}));
var DescribeLoaRequest;
(function (DescribeLoaRequest) {
    /**
     * @internal
     */
    DescribeLoaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoaRequest = exports.DescribeLoaRequest || (exports.DescribeLoaRequest = {}));
var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Location = exports.Location || (exports.Location = {}));
var Locations;
(function (Locations) {
    /**
     * @internal
     */
    Locations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Locations = exports.Locations || (exports.Locations = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    /**
     * @internal
     */
    DescribeTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var ResourceTag;
(function (ResourceTag) {
    /**
     * @internal
     */
    ResourceTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var DescribeTagsResponse;
(function (DescribeTagsResponse) {
    /**
     * @internal
     */
    DescribeTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsResponse = exports.DescribeTagsResponse || (exports.DescribeTagsResponse = {}));
var VirtualGateway;
(function (VirtualGateway) {
    /**
     * @internal
     */
    VirtualGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VirtualGateway = exports.VirtualGateway || (exports.VirtualGateway = {}));
var VirtualGateways;
(function (VirtualGateways) {
    /**
     * @internal
     */
    VirtualGateways.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VirtualGateways = exports.VirtualGateways || (exports.VirtualGateways = {}));
var DescribeVirtualInterfacesRequest;
(function (DescribeVirtualInterfacesRequest) {
    /**
     * @internal
     */
    DescribeVirtualInterfacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVirtualInterfacesRequest = exports.DescribeVirtualInterfacesRequest || (exports.DescribeVirtualInterfacesRequest = {}));
var VirtualInterfaces;
(function (VirtualInterfaces) {
    /**
     * @internal
     */
    VirtualInterfaces.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VirtualInterfaces = exports.VirtualInterfaces || (exports.VirtualInterfaces = {}));
var DisassociateConnectionFromLagRequest;
(function (DisassociateConnectionFromLagRequest) {
    /**
     * @internal
     */
    DisassociateConnectionFromLagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateConnectionFromLagRequest = exports.DisassociateConnectionFromLagRequest || (exports.DisassociateConnectionFromLagRequest = {}));
var DisassociateMacSecKeyRequest;
(function (DisassociateMacSecKeyRequest) {
    /**
     * @internal
     */
    DisassociateMacSecKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMacSecKeyRequest = exports.DisassociateMacSecKeyRequest || (exports.DisassociateMacSecKeyRequest = {}));
var DisassociateMacSecKeyResponse;
(function (DisassociateMacSecKeyResponse) {
    /**
     * @internal
     */
    DisassociateMacSecKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMacSecKeyResponse = exports.DisassociateMacSecKeyResponse || (exports.DisassociateMacSecKeyResponse = {}));
var ListVirtualInterfaceTestHistoryRequest;
(function (ListVirtualInterfaceTestHistoryRequest) {
    /**
     * @internal
     */
    ListVirtualInterfaceTestHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVirtualInterfaceTestHistoryRequest = exports.ListVirtualInterfaceTestHistoryRequest || (exports.ListVirtualInterfaceTestHistoryRequest = {}));
var VirtualInterfaceTestHistory;
(function (VirtualInterfaceTestHistory) {
    /**
     * @internal
     */
    VirtualInterfaceTestHistory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VirtualInterfaceTestHistory = exports.VirtualInterfaceTestHistory || (exports.VirtualInterfaceTestHistory = {}));
var ListVirtualInterfaceTestHistoryResponse;
(function (ListVirtualInterfaceTestHistoryResponse) {
    /**
     * @internal
     */
    ListVirtualInterfaceTestHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVirtualInterfaceTestHistoryResponse = exports.ListVirtualInterfaceTestHistoryResponse || (exports.ListVirtualInterfaceTestHistoryResponse = {}));
var StartBgpFailoverTestRequest;
(function (StartBgpFailoverTestRequest) {
    /**
     * @internal
     */
    StartBgpFailoverTestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBgpFailoverTestRequest = exports.StartBgpFailoverTestRequest || (exports.StartBgpFailoverTestRequest = {}));
var StartBgpFailoverTestResponse;
(function (StartBgpFailoverTestResponse) {
    /**
     * @internal
     */
    StartBgpFailoverTestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBgpFailoverTestResponse = exports.StartBgpFailoverTestResponse || (exports.StartBgpFailoverTestResponse = {}));
var StopBgpFailoverTestRequest;
(function (StopBgpFailoverTestRequest) {
    /**
     * @internal
     */
    StopBgpFailoverTestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBgpFailoverTestRequest = exports.StopBgpFailoverTestRequest || (exports.StopBgpFailoverTestRequest = {}));
var StopBgpFailoverTestResponse;
(function (StopBgpFailoverTestResponse) {
    /**
     * @internal
     */
    StopBgpFailoverTestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBgpFailoverTestResponse = exports.StopBgpFailoverTestResponse || (exports.StopBgpFailoverTestResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionRequest = exports.UpdateConnectionRequest || (exports.UpdateConnectionRequest = {}));
var UpdateDirectConnectGatewayAssociationRequest;
(function (UpdateDirectConnectGatewayAssociationRequest) {
    /**
     * @internal
     */
    UpdateDirectConnectGatewayAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDirectConnectGatewayAssociationRequest = exports.UpdateDirectConnectGatewayAssociationRequest || (exports.UpdateDirectConnectGatewayAssociationRequest = {}));
var UpdateDirectConnectGatewayAssociationResult;
(function (UpdateDirectConnectGatewayAssociationResult) {
    /**
     * @internal
     */
    UpdateDirectConnectGatewayAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDirectConnectGatewayAssociationResult = exports.UpdateDirectConnectGatewayAssociationResult || (exports.UpdateDirectConnectGatewayAssociationResult = {}));
var UpdateLagRequest;
(function (UpdateLagRequest) {
    /**
     * @internal
     */
    UpdateLagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLagRequest = exports.UpdateLagRequest || (exports.UpdateLagRequest = {}));
var UpdateVirtualInterfaceAttributesRequest;
(function (UpdateVirtualInterfaceAttributesRequest) {
    /**
     * @internal
     */
    UpdateVirtualInterfaceAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVirtualInterfaceAttributesRequest = exports.UpdateVirtualInterfaceAttributesRequest || (exports.UpdateVirtualInterfaceAttributesRequest = {}));
//# sourceMappingURL=models_0.js.map