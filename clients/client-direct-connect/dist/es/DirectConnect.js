import { __extends } from "tslib";
import { DirectConnectClient } from "./DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalCommand, } from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import { AllocateConnectionOnInterconnectCommand, } from "./commands/AllocateConnectionOnInterconnectCommand";
import { AllocateHostedConnectionCommand, } from "./commands/AllocateHostedConnectionCommand";
import { AllocatePrivateVirtualInterfaceCommand, } from "./commands/AllocatePrivateVirtualInterfaceCommand";
import { AllocatePublicVirtualInterfaceCommand, } from "./commands/AllocatePublicVirtualInterfaceCommand";
import { AllocateTransitVirtualInterfaceCommand, } from "./commands/AllocateTransitVirtualInterfaceCommand";
import { AssociateConnectionWithLagCommand, } from "./commands/AssociateConnectionWithLagCommand";
import { AssociateHostedConnectionCommand, } from "./commands/AssociateHostedConnectionCommand";
import { AssociateMacSecKeyCommand, } from "./commands/AssociateMacSecKeyCommand";
import { AssociateVirtualInterfaceCommand, } from "./commands/AssociateVirtualInterfaceCommand";
import { ConfirmConnectionCommand, } from "./commands/ConfirmConnectionCommand";
import { ConfirmPrivateVirtualInterfaceCommand, } from "./commands/ConfirmPrivateVirtualInterfaceCommand";
import { ConfirmPublicVirtualInterfaceCommand, } from "./commands/ConfirmPublicVirtualInterfaceCommand";
import { ConfirmTransitVirtualInterfaceCommand, } from "./commands/ConfirmTransitVirtualInterfaceCommand";
import { CreateBGPPeerCommand, } from "./commands/CreateBGPPeerCommand";
import { CreateConnectionCommand, } from "./commands/CreateConnectionCommand";
import { CreateDirectConnectGatewayAssociationCommand, } from "./commands/CreateDirectConnectGatewayAssociationCommand";
import { CreateDirectConnectGatewayAssociationProposalCommand, } from "./commands/CreateDirectConnectGatewayAssociationProposalCommand";
import { CreateDirectConnectGatewayCommand, } from "./commands/CreateDirectConnectGatewayCommand";
import { CreateInterconnectCommand, } from "./commands/CreateInterconnectCommand";
import { CreateLagCommand } from "./commands/CreateLagCommand";
import { CreatePrivateVirtualInterfaceCommand, } from "./commands/CreatePrivateVirtualInterfaceCommand";
import { CreatePublicVirtualInterfaceCommand, } from "./commands/CreatePublicVirtualInterfaceCommand";
import { CreateTransitVirtualInterfaceCommand, } from "./commands/CreateTransitVirtualInterfaceCommand";
import { DeleteBGPPeerCommand, } from "./commands/DeleteBGPPeerCommand";
import { DeleteConnectionCommand, } from "./commands/DeleteConnectionCommand";
import { DeleteDirectConnectGatewayAssociationCommand, } from "./commands/DeleteDirectConnectGatewayAssociationCommand";
import { DeleteDirectConnectGatewayAssociationProposalCommand, } from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import { DeleteDirectConnectGatewayCommand, } from "./commands/DeleteDirectConnectGatewayCommand";
import { DeleteInterconnectCommand, } from "./commands/DeleteInterconnectCommand";
import { DeleteLagCommand } from "./commands/DeleteLagCommand";
import { DeleteVirtualInterfaceCommand, } from "./commands/DeleteVirtualInterfaceCommand";
import { DescribeConnectionLoaCommand, } from "./commands/DescribeConnectionLoaCommand";
import { DescribeConnectionsCommand, } from "./commands/DescribeConnectionsCommand";
import { DescribeConnectionsOnInterconnectCommand, } from "./commands/DescribeConnectionsOnInterconnectCommand";
import { DescribeDirectConnectGatewayAssociationProposalsCommand, } from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import { DescribeDirectConnectGatewayAssociationsCommand, } from "./commands/DescribeDirectConnectGatewayAssociationsCommand";
import { DescribeDirectConnectGatewayAttachmentsCommand, } from "./commands/DescribeDirectConnectGatewayAttachmentsCommand";
import { DescribeDirectConnectGatewaysCommand, } from "./commands/DescribeDirectConnectGatewaysCommand";
import { DescribeHostedConnectionsCommand, } from "./commands/DescribeHostedConnectionsCommand";
import { DescribeInterconnectLoaCommand, } from "./commands/DescribeInterconnectLoaCommand";
import { DescribeInterconnectsCommand, } from "./commands/DescribeInterconnectsCommand";
import { DescribeLagsCommand, } from "./commands/DescribeLagsCommand";
import { DescribeLoaCommand } from "./commands/DescribeLoaCommand";
import { DescribeLocationsCommand, } from "./commands/DescribeLocationsCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { DescribeVirtualGatewaysCommand, } from "./commands/DescribeVirtualGatewaysCommand";
import { DescribeVirtualInterfacesCommand, } from "./commands/DescribeVirtualInterfacesCommand";
import { DisassociateConnectionFromLagCommand, } from "./commands/DisassociateConnectionFromLagCommand";
import { DisassociateMacSecKeyCommand, } from "./commands/DisassociateMacSecKeyCommand";
import { ListVirtualInterfaceTestHistoryCommand, } from "./commands/ListVirtualInterfaceTestHistoryCommand";
import { StartBgpFailoverTestCommand, } from "./commands/StartBgpFailoverTestCommand";
import { StopBgpFailoverTestCommand, } from "./commands/StopBgpFailoverTestCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateConnectionCommand, } from "./commands/UpdateConnectionCommand";
import { UpdateDirectConnectGatewayAssociationCommand, } from "./commands/UpdateDirectConnectGatewayAssociationCommand";
import { UpdateLagCommand } from "./commands/UpdateLagCommand";
import { UpdateVirtualInterfaceAttributesCommand, } from "./commands/UpdateVirtualInterfaceAttributesCommand";
/**
 * <p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions.
 *       AWS resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
var DirectConnect = /** @class */ (function (_super) {
    __extends(DirectConnect, _super);
    function DirectConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectConnect.prototype.acceptDirectConnectGatewayAssociationProposal = function (args, optionsOrCb, cb) {
        var command = new AcceptDirectConnectGatewayAssociationProposalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.allocateConnectionOnInterconnect = function (args, optionsOrCb, cb) {
        var command = new AllocateConnectionOnInterconnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.allocateHostedConnection = function (args, optionsOrCb, cb) {
        var command = new AllocateHostedConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.allocatePrivateVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new AllocatePrivateVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.allocatePublicVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new AllocatePublicVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.allocateTransitVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new AllocateTransitVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.associateConnectionWithLag = function (args, optionsOrCb, cb) {
        var command = new AssociateConnectionWithLagCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.associateHostedConnection = function (args, optionsOrCb, cb) {
        var command = new AssociateHostedConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.associateMacSecKey = function (args, optionsOrCb, cb) {
        var command = new AssociateMacSecKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.associateVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new AssociateVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.confirmConnection = function (args, optionsOrCb, cb) {
        var command = new ConfirmConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.confirmPrivateVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new ConfirmPrivateVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.confirmPublicVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new ConfirmPublicVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.confirmTransitVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new ConfirmTransitVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createBGPPeer = function (args, optionsOrCb, cb) {
        var command = new CreateBGPPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createConnection = function (args, optionsOrCb, cb) {
        var command = new CreateConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createDirectConnectGateway = function (args, optionsOrCb, cb) {
        var command = new CreateDirectConnectGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createDirectConnectGatewayAssociation = function (args, optionsOrCb, cb) {
        var command = new CreateDirectConnectGatewayAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createDirectConnectGatewayAssociationProposal = function (args, optionsOrCb, cb) {
        var command = new CreateDirectConnectGatewayAssociationProposalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createInterconnect = function (args, optionsOrCb, cb) {
        var command = new CreateInterconnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createLag = function (args, optionsOrCb, cb) {
        var command = new CreateLagCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createPrivateVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new CreatePrivateVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createPublicVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new CreatePublicVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.createTransitVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new CreateTransitVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteBGPPeer = function (args, optionsOrCb, cb) {
        var command = new DeleteBGPPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteDirectConnectGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteDirectConnectGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteDirectConnectGatewayAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteDirectConnectGatewayAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteDirectConnectGatewayAssociationProposal = function (args, optionsOrCb, cb) {
        var command = new DeleteDirectConnectGatewayAssociationProposalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteInterconnect = function (args, optionsOrCb, cb) {
        var command = new DeleteInterconnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteLag = function (args, optionsOrCb, cb) {
        var command = new DeleteLagCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.deleteVirtualInterface = function (args, optionsOrCb, cb) {
        var command = new DeleteVirtualInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeConnectionLoa = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionLoaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeConnectionsOnInterconnect = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionsOnInterconnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeDirectConnectGatewayAssociationProposals = function (args, optionsOrCb, cb) {
        var command = new DescribeDirectConnectGatewayAssociationProposalsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeDirectConnectGatewayAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeDirectConnectGatewayAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeDirectConnectGatewayAttachments = function (args, optionsOrCb, cb) {
        var command = new DescribeDirectConnectGatewayAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeDirectConnectGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeDirectConnectGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeHostedConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeHostedConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeInterconnectLoa = function (args, optionsOrCb, cb) {
        var command = new DescribeInterconnectLoaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeInterconnects = function (args, optionsOrCb, cb) {
        var command = new DescribeInterconnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeLags = function (args, optionsOrCb, cb) {
        var command = new DescribeLagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeLoa = function (args, optionsOrCb, cb) {
        var command = new DescribeLoaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeLocations = function (args, optionsOrCb, cb) {
        var command = new DescribeLocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeTags = function (args, optionsOrCb, cb) {
        var command = new DescribeTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeVirtualGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeVirtualGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.describeVirtualInterfaces = function (args, optionsOrCb, cb) {
        var command = new DescribeVirtualInterfacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.disassociateConnectionFromLag = function (args, optionsOrCb, cb) {
        var command = new DisassociateConnectionFromLagCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.disassociateMacSecKey = function (args, optionsOrCb, cb) {
        var command = new DisassociateMacSecKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.listVirtualInterfaceTestHistory = function (args, optionsOrCb, cb) {
        var command = new ListVirtualInterfaceTestHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.startBgpFailoverTest = function (args, optionsOrCb, cb) {
        var command = new StartBgpFailoverTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.stopBgpFailoverTest = function (args, optionsOrCb, cb) {
        var command = new StopBgpFailoverTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.updateConnection = function (args, optionsOrCb, cb) {
        var command = new UpdateConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.updateDirectConnectGatewayAssociation = function (args, optionsOrCb, cb) {
        var command = new UpdateDirectConnectGatewayAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.updateLag = function (args, optionsOrCb, cb) {
        var command = new UpdateLagCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DirectConnect.prototype.updateVirtualInterfaceAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateVirtualInterfaceAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return DirectConnect;
}(DirectConnectClient));
export { DirectConnect };
//# sourceMappingURL=DirectConnect.js.map