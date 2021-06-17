"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkManager = void 0;
const NetworkManagerClient_1 = require("./NetworkManagerClient");
const AssociateCustomerGatewayCommand_1 = require("./commands/AssociateCustomerGatewayCommand");
const AssociateLinkCommand_1 = require("./commands/AssociateLinkCommand");
const AssociateTransitGatewayConnectPeerCommand_1 = require("./commands/AssociateTransitGatewayConnectPeerCommand");
const CreateConnectionCommand_1 = require("./commands/CreateConnectionCommand");
const CreateDeviceCommand_1 = require("./commands/CreateDeviceCommand");
const CreateGlobalNetworkCommand_1 = require("./commands/CreateGlobalNetworkCommand");
const CreateLinkCommand_1 = require("./commands/CreateLinkCommand");
const CreateSiteCommand_1 = require("./commands/CreateSiteCommand");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const DeleteDeviceCommand_1 = require("./commands/DeleteDeviceCommand");
const DeleteGlobalNetworkCommand_1 = require("./commands/DeleteGlobalNetworkCommand");
const DeleteLinkCommand_1 = require("./commands/DeleteLinkCommand");
const DeleteSiteCommand_1 = require("./commands/DeleteSiteCommand");
const DeregisterTransitGatewayCommand_1 = require("./commands/DeregisterTransitGatewayCommand");
const DescribeGlobalNetworksCommand_1 = require("./commands/DescribeGlobalNetworksCommand");
const DisassociateCustomerGatewayCommand_1 = require("./commands/DisassociateCustomerGatewayCommand");
const DisassociateLinkCommand_1 = require("./commands/DisassociateLinkCommand");
const DisassociateTransitGatewayConnectPeerCommand_1 = require("./commands/DisassociateTransitGatewayConnectPeerCommand");
const GetConnectionsCommand_1 = require("./commands/GetConnectionsCommand");
const GetCustomerGatewayAssociationsCommand_1 = require("./commands/GetCustomerGatewayAssociationsCommand");
const GetDevicesCommand_1 = require("./commands/GetDevicesCommand");
const GetLinkAssociationsCommand_1 = require("./commands/GetLinkAssociationsCommand");
const GetLinksCommand_1 = require("./commands/GetLinksCommand");
const GetSitesCommand_1 = require("./commands/GetSitesCommand");
const GetTransitGatewayConnectPeerAssociationsCommand_1 = require("./commands/GetTransitGatewayConnectPeerAssociationsCommand");
const GetTransitGatewayRegistrationsCommand_1 = require("./commands/GetTransitGatewayRegistrationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RegisterTransitGatewayCommand_1 = require("./commands/RegisterTransitGatewayCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateConnectionCommand_1 = require("./commands/UpdateConnectionCommand");
const UpdateDeviceCommand_1 = require("./commands/UpdateDeviceCommand");
const UpdateGlobalNetworkCommand_1 = require("./commands/UpdateGlobalNetworkCommand");
const UpdateLinkCommand_1 = require("./commands/UpdateLinkCommand");
const UpdateSiteCommand_1 = require("./commands/UpdateSiteCommand");
/**
 * <p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your
 *             AWS and on-premises networks that are built around transit gateways.</p>
 *         <p>The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the <code>us-west-2</code> Region in all requests made to Network Manager.</p>
 */
class NetworkManager extends NetworkManagerClient_1.NetworkManagerClient {
    associateCustomerGateway(args, optionsOrCb, cb) {
        const command = new AssociateCustomerGatewayCommand_1.AssociateCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateLink(args, optionsOrCb, cb) {
        const command = new AssociateLinkCommand_1.AssociateLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTransitGatewayConnectPeer(args, optionsOrCb, cb) {
        const command = new AssociateTransitGatewayConnectPeerCommand_1.AssociateTransitGatewayConnectPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConnection(args, optionsOrCb, cb) {
        const command = new CreateConnectionCommand_1.CreateConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDevice(args, optionsOrCb, cb) {
        const command = new CreateDeviceCommand_1.CreateDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGlobalNetwork(args, optionsOrCb, cb) {
        const command = new CreateGlobalNetworkCommand_1.CreateGlobalNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLink(args, optionsOrCb, cb) {
        const command = new CreateLinkCommand_1.CreateLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSite(args, optionsOrCb, cb) {
        const command = new CreateSiteCommand_1.CreateSiteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConnection(args, optionsOrCb, cb) {
        const command = new DeleteConnectionCommand_1.DeleteConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDevice(args, optionsOrCb, cb) {
        const command = new DeleteDeviceCommand_1.DeleteDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGlobalNetwork(args, optionsOrCb, cb) {
        const command = new DeleteGlobalNetworkCommand_1.DeleteGlobalNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLink(args, optionsOrCb, cb) {
        const command = new DeleteLinkCommand_1.DeleteLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSite(args, optionsOrCb, cb) {
        const command = new DeleteSiteCommand_1.DeleteSiteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTransitGateway(args, optionsOrCb, cb) {
        const command = new DeregisterTransitGatewayCommand_1.DeregisterTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGlobalNetworks(args, optionsOrCb, cb) {
        const command = new DescribeGlobalNetworksCommand_1.DescribeGlobalNetworksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateCustomerGateway(args, optionsOrCb, cb) {
        const command = new DisassociateCustomerGatewayCommand_1.DisassociateCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateLink(args, optionsOrCb, cb) {
        const command = new DisassociateLinkCommand_1.DisassociateLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTransitGatewayConnectPeer(args, optionsOrCb, cb) {
        const command = new DisassociateTransitGatewayConnectPeerCommand_1.DisassociateTransitGatewayConnectPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConnections(args, optionsOrCb, cb) {
        const command = new GetConnectionsCommand_1.GetConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCustomerGatewayAssociations(args, optionsOrCb, cb) {
        const command = new GetCustomerGatewayAssociationsCommand_1.GetCustomerGatewayAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevices(args, optionsOrCb, cb) {
        const command = new GetDevicesCommand_1.GetDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLinkAssociations(args, optionsOrCb, cb) {
        const command = new GetLinkAssociationsCommand_1.GetLinkAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLinks(args, optionsOrCb, cb) {
        const command = new GetLinksCommand_1.GetLinksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSites(args, optionsOrCb, cb) {
        const command = new GetSitesCommand_1.GetSitesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayConnectPeerAssociations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayConnectPeerAssociationsCommand_1.GetTransitGatewayConnectPeerAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayRegistrations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayRegistrationsCommand_1.GetTransitGatewayRegistrationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTransitGateway(args, optionsOrCb, cb) {
        const command = new RegisterTransitGatewayCommand_1.RegisterTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConnection(args, optionsOrCb, cb) {
        const command = new UpdateConnectionCommand_1.UpdateConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDevice(args, optionsOrCb, cb) {
        const command = new UpdateDeviceCommand_1.UpdateDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGlobalNetwork(args, optionsOrCb, cb) {
        const command = new UpdateGlobalNetworkCommand_1.UpdateGlobalNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateLink(args, optionsOrCb, cb) {
        const command = new UpdateLinkCommand_1.UpdateLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSite(args, optionsOrCb, cb) {
        const command = new UpdateSiteCommand_1.UpdateSiteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.NetworkManager = NetworkManager;
//# sourceMappingURL=NetworkManager.js.map