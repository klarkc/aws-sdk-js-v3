import { __extends } from "tslib";
import { NetworkManagerClient } from "./NetworkManagerClient";
import { AssociateCustomerGatewayCommand, } from "./commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommand, } from "./commands/AssociateLinkCommand";
import { AssociateTransitGatewayConnectPeerCommand, } from "./commands/AssociateTransitGatewayConnectPeerCommand";
import { CreateConnectionCommand, } from "./commands/CreateConnectionCommand";
import { CreateDeviceCommand, } from "./commands/CreateDeviceCommand";
import { CreateGlobalNetworkCommand, } from "./commands/CreateGlobalNetworkCommand";
import { CreateLinkCommand } from "./commands/CreateLinkCommand";
import { CreateSiteCommand } from "./commands/CreateSiteCommand";
import { DeleteConnectionCommand, } from "./commands/DeleteConnectionCommand";
import { DeleteDeviceCommand, } from "./commands/DeleteDeviceCommand";
import { DeleteGlobalNetworkCommand, } from "./commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommand } from "./commands/DeleteLinkCommand";
import { DeleteSiteCommand } from "./commands/DeleteSiteCommand";
import { DeregisterTransitGatewayCommand, } from "./commands/DeregisterTransitGatewayCommand";
import { DescribeGlobalNetworksCommand, } from "./commands/DescribeGlobalNetworksCommand";
import { DisassociateCustomerGatewayCommand, } from "./commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommand, } from "./commands/DisassociateLinkCommand";
import { DisassociateTransitGatewayConnectPeerCommand, } from "./commands/DisassociateTransitGatewayConnectPeerCommand";
import { GetConnectionsCommand, } from "./commands/GetConnectionsCommand";
import { GetCustomerGatewayAssociationsCommand, } from "./commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommand } from "./commands/GetDevicesCommand";
import { GetLinkAssociationsCommand, } from "./commands/GetLinkAssociationsCommand";
import { GetLinksCommand } from "./commands/GetLinksCommand";
import { GetSitesCommand } from "./commands/GetSitesCommand";
import { GetTransitGatewayConnectPeerAssociationsCommand, } from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import { GetTransitGatewayRegistrationsCommand, } from "./commands/GetTransitGatewayRegistrationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RegisterTransitGatewayCommand, } from "./commands/RegisterTransitGatewayCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateConnectionCommand, } from "./commands/UpdateConnectionCommand";
import { UpdateDeviceCommand, } from "./commands/UpdateDeviceCommand";
import { UpdateGlobalNetworkCommand, } from "./commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommand } from "./commands/UpdateLinkCommand";
import { UpdateSiteCommand } from "./commands/UpdateSiteCommand";
/**
 * <p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your
 *             AWS and on-premises networks that are built around transit gateways.</p>
 *         <p>The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the <code>us-west-2</code> Region in all requests made to Network Manager.</p>
 */
var NetworkManager = /** @class */ (function (_super) {
    __extends(NetworkManager, _super);
    function NetworkManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkManager.prototype.associateCustomerGateway = function (args, optionsOrCb, cb) {
        var command = new AssociateCustomerGatewayCommand(args);
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
    NetworkManager.prototype.associateLink = function (args, optionsOrCb, cb) {
        var command = new AssociateLinkCommand(args);
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
    NetworkManager.prototype.associateTransitGatewayConnectPeer = function (args, optionsOrCb, cb) {
        var command = new AssociateTransitGatewayConnectPeerCommand(args);
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
    NetworkManager.prototype.createConnection = function (args, optionsOrCb, cb) {
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
    NetworkManager.prototype.createDevice = function (args, optionsOrCb, cb) {
        var command = new CreateDeviceCommand(args);
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
    NetworkManager.prototype.createGlobalNetwork = function (args, optionsOrCb, cb) {
        var command = new CreateGlobalNetworkCommand(args);
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
    NetworkManager.prototype.createLink = function (args, optionsOrCb, cb) {
        var command = new CreateLinkCommand(args);
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
    NetworkManager.prototype.createSite = function (args, optionsOrCb, cb) {
        var command = new CreateSiteCommand(args);
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
    NetworkManager.prototype.deleteConnection = function (args, optionsOrCb, cb) {
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
    NetworkManager.prototype.deleteDevice = function (args, optionsOrCb, cb) {
        var command = new DeleteDeviceCommand(args);
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
    NetworkManager.prototype.deleteGlobalNetwork = function (args, optionsOrCb, cb) {
        var command = new DeleteGlobalNetworkCommand(args);
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
    NetworkManager.prototype.deleteLink = function (args, optionsOrCb, cb) {
        var command = new DeleteLinkCommand(args);
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
    NetworkManager.prototype.deleteSite = function (args, optionsOrCb, cb) {
        var command = new DeleteSiteCommand(args);
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
    NetworkManager.prototype.deregisterTransitGateway = function (args, optionsOrCb, cb) {
        var command = new DeregisterTransitGatewayCommand(args);
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
    NetworkManager.prototype.describeGlobalNetworks = function (args, optionsOrCb, cb) {
        var command = new DescribeGlobalNetworksCommand(args);
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
    NetworkManager.prototype.disassociateCustomerGateway = function (args, optionsOrCb, cb) {
        var command = new DisassociateCustomerGatewayCommand(args);
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
    NetworkManager.prototype.disassociateLink = function (args, optionsOrCb, cb) {
        var command = new DisassociateLinkCommand(args);
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
    NetworkManager.prototype.disassociateTransitGatewayConnectPeer = function (args, optionsOrCb, cb) {
        var command = new DisassociateTransitGatewayConnectPeerCommand(args);
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
    NetworkManager.prototype.getConnections = function (args, optionsOrCb, cb) {
        var command = new GetConnectionsCommand(args);
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
    NetworkManager.prototype.getCustomerGatewayAssociations = function (args, optionsOrCb, cb) {
        var command = new GetCustomerGatewayAssociationsCommand(args);
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
    NetworkManager.prototype.getDevices = function (args, optionsOrCb, cb) {
        var command = new GetDevicesCommand(args);
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
    NetworkManager.prototype.getLinkAssociations = function (args, optionsOrCb, cb) {
        var command = new GetLinkAssociationsCommand(args);
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
    NetworkManager.prototype.getLinks = function (args, optionsOrCb, cb) {
        var command = new GetLinksCommand(args);
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
    NetworkManager.prototype.getSites = function (args, optionsOrCb, cb) {
        var command = new GetSitesCommand(args);
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
    NetworkManager.prototype.getTransitGatewayConnectPeerAssociations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayConnectPeerAssociationsCommand(args);
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
    NetworkManager.prototype.getTransitGatewayRegistrations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayRegistrationsCommand(args);
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
    NetworkManager.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    NetworkManager.prototype.registerTransitGateway = function (args, optionsOrCb, cb) {
        var command = new RegisterTransitGatewayCommand(args);
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
    NetworkManager.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    NetworkManager.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    NetworkManager.prototype.updateConnection = function (args, optionsOrCb, cb) {
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
    NetworkManager.prototype.updateDevice = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceCommand(args);
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
    NetworkManager.prototype.updateGlobalNetwork = function (args, optionsOrCb, cb) {
        var command = new UpdateGlobalNetworkCommand(args);
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
    NetworkManager.prototype.updateLink = function (args, optionsOrCb, cb) {
        var command = new UpdateLinkCommand(args);
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
    NetworkManager.prototype.updateSite = function (args, optionsOrCb, cb) {
        var command = new UpdateSiteCommand(args);
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
    return NetworkManager;
}(NetworkManagerClient));
export { NetworkManager };
//# sourceMappingURL=NetworkManager.js.map