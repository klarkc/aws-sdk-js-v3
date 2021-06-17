import { NetworkManagerClient } from "./NetworkManagerClient";
import { AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput } from "./commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommandInput, AssociateLinkCommandOutput } from "./commands/AssociateLinkCommand";
import { AssociateTransitGatewayConnectPeerCommandInput, AssociateTransitGatewayConnectPeerCommandOutput } from "./commands/AssociateTransitGatewayConnectPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateDeviceCommandInput, CreateDeviceCommandOutput } from "./commands/CreateDeviceCommand";
import { CreateGlobalNetworkCommandInput, CreateGlobalNetworkCommandOutput } from "./commands/CreateGlobalNetworkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "./commands/CreateLinkCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "./commands/DeleteDeviceCommand";
import { DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput } from "./commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "./commands/DeleteLinkCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import { DeregisterTransitGatewayCommandInput, DeregisterTransitGatewayCommandOutput } from "./commands/DeregisterTransitGatewayCommand";
import { DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput } from "./commands/DescribeGlobalNetworksCommand";
import { DisassociateCustomerGatewayCommandInput, DisassociateCustomerGatewayCommandOutput } from "./commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommandInput, DisassociateLinkCommandOutput } from "./commands/DisassociateLinkCommand";
import { DisassociateTransitGatewayConnectPeerCommandInput, DisassociateTransitGatewayConnectPeerCommandOutput } from "./commands/DisassociateTransitGatewayConnectPeerCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import { GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput } from "./commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommandInput, GetDevicesCommandOutput } from "./commands/GetDevicesCommand";
import { GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput } from "./commands/GetLinkAssociationsCommand";
import { GetLinksCommandInput, GetLinksCommandOutput } from "./commands/GetLinksCommand";
import { GetSitesCommandInput, GetSitesCommandOutput } from "./commands/GetSitesCommand";
import { GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput } from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import { GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput } from "./commands/GetTransitGatewayRegistrationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RegisterTransitGatewayCommandInput, RegisterTransitGatewayCommandOutput } from "./commands/RegisterTransitGatewayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "./commands/UpdateDeviceCommand";
import { UpdateGlobalNetworkCommandInput, UpdateGlobalNetworkCommandOutput } from "./commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "./commands/UpdateLinkCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your
 *             AWS and on-premises networks that are built around transit gateways.</p>
 *         <p>The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the <code>us-west-2</code> Region in all requests made to Network Manager.</p>
 */
export declare class NetworkManager extends NetworkManagerClient {
    /**
     * <p>Associates a customer gateway with a device and optionally, with a link. If you
     *             specify a link, it must be associated with the specified device. </p>
     *         <p>You can only associate customer gateways that are connected to a VPN attachment on a
     *             transit gateway. The transit gateway must be registered in your global network. When
     *             you register a transit gateway, customer gateways that are connected to the transit
     *             gateway are automatically included in the global network. To list customer gateways
     *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
     *                 <code>transit-gateway-id</code>.</p>
     *         <p>You cannot associate a customer gateway with more than one device and link. </p>
     */
    associateCustomerGateway(args: AssociateCustomerGatewayCommandInput, options?: __HttpHandlerOptions): Promise<AssociateCustomerGatewayCommandOutput>;
    associateCustomerGateway(args: AssociateCustomerGatewayCommandInput, cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void): void;
    associateCustomerGateway(args: AssociateCustomerGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void): void;
    /**
     * <p>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</p>
     */
    associateLink(args: AssociateLinkCommandInput, options?: __HttpHandlerOptions): Promise<AssociateLinkCommandOutput>;
    associateLink(args: AssociateLinkCommandInput, cb: (err: any, data?: AssociateLinkCommandOutput) => void): void;
    associateLink(args: AssociateLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateLinkCommandOutput) => void): void;
    /**
     * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
     *             specify a link, it must be associated with the specified device. </p>
     *         <p>You can only associate transit gateway Connect peers that have been created on a
     *             transit gateway that's registered in your global network.</p>
     *         <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
     */
    associateTransitGatewayConnectPeer(args: AssociateTransitGatewayConnectPeerCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTransitGatewayConnectPeerCommandOutput>;
    associateTransitGatewayConnectPeer(args: AssociateTransitGatewayConnectPeerCommandInput, cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void): void;
    associateTransitGatewayConnectPeer(args: AssociateTransitGatewayConnectPeerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void): void;
    /**
     * <p>Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.</p>
     */
    createConnection(args: CreateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectionCommandOutput>;
    createConnection(args: CreateConnectionCommandInput, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    createConnection(args: CreateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    /**
     * <p>Creates a new device in a global network. If you specify both a site ID and a
     *             location, the location of the site is used for visualization in the Network Manager console.</p>
     */
    createDevice(args: CreateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceCommandOutput>;
    createDevice(args: CreateDeviceCommandInput, cb: (err: any, data?: CreateDeviceCommandOutput) => void): void;
    createDevice(args: CreateDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeviceCommandOutput) => void): void;
    /**
     * <p>Creates a new, empty global network.</p>
     */
    createGlobalNetwork(args: CreateGlobalNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateGlobalNetworkCommandOutput>;
    createGlobalNetwork(args: CreateGlobalNetworkCommandInput, cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void): void;
    createGlobalNetwork(args: CreateGlobalNetworkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void): void;
    /**
     * <p>Creates a new link for a specified site.</p>
     */
    createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
    createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
    createLink(args: CreateLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
    /**
     * <p>Creates a new site in a global network.</p>
     */
    createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
    createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
    createSite(args: CreateSiteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
    /**
     * <p>Deletes the specified connection in your global network.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Deletes an existing device. You must first disassociate the device from any links and
     *             customer gateways.</p>
     */
    deleteDevice(args: DeleteDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceCommandOutput>;
    deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
    deleteDevice(args: DeleteDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
    /**
     * <p>Deletes an existing global network. You must first delete all global network objects
     *             (devices, links, and sites) and deregister all transit gateways.</p>
     */
    deleteGlobalNetwork(args: DeleteGlobalNetworkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGlobalNetworkCommandOutput>;
    deleteGlobalNetwork(args: DeleteGlobalNetworkCommandInput, cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void): void;
    deleteGlobalNetwork(args: DeleteGlobalNetworkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void): void;
    /**
     * <p>Deletes an existing link. You must first disassociate the link from any devices and
     *             customer gateways.</p>
     */
    deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
    deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
    deleteLink(args: DeleteLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
    /**
     * <p>Deletes an existing site. The site cannot be associated with any device or link.</p>
     */
    deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
    deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
    deleteSite(args: DeleteSiteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
    /**
     * <p>Deregisters a transit gateway from your global network. This action does not delete
     *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
     */
    deregisterTransitGateway(args: DeregisterTransitGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterTransitGatewayCommandOutput>;
    deregisterTransitGateway(args: DeregisterTransitGatewayCommandInput, cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void): void;
    deregisterTransitGateway(args: DeregisterTransitGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void): void;
    /**
     * <p>Describes one or more global networks. By default, all global networks are
     *             described. To describe the objects in your global network, you must use the appropriate
     *                 <code>Get*</code> action. For example, to list the transit gateways in your global
     *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
     */
    describeGlobalNetworks(args: DescribeGlobalNetworksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGlobalNetworksCommandOutput>;
    describeGlobalNetworks(args: DescribeGlobalNetworksCommandInput, cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void): void;
    describeGlobalNetworks(args: DescribeGlobalNetworksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void): void;
    /**
     * <p>Disassociates a customer gateway from a device and a link.</p>
     */
    disassociateCustomerGateway(args: DisassociateCustomerGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateCustomerGatewayCommandOutput>;
    disassociateCustomerGateway(args: DisassociateCustomerGatewayCommandInput, cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void): void;
    disassociateCustomerGateway(args: DisassociateCustomerGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void): void;
    /**
     * <p>Disassociates an existing device from a link. You must first disassociate any customer
     *             gateways that are associated with the link.</p>
     */
    disassociateLink(args: DisassociateLinkCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateLinkCommandOutput>;
    disassociateLink(args: DisassociateLinkCommandInput, cb: (err: any, data?: DisassociateLinkCommandOutput) => void): void;
    disassociateLink(args: DisassociateLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateLinkCommandOutput) => void): void;
    /**
     * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
     */
    disassociateTransitGatewayConnectPeer(args: DisassociateTransitGatewayConnectPeerCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTransitGatewayConnectPeerCommandOutput>;
    disassociateTransitGatewayConnectPeer(args: DisassociateTransitGatewayConnectPeerCommandInput, cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void): void;
    disassociateTransitGatewayConnectPeer(args: DisassociateTransitGatewayConnectPeerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more of your connections in a global network.</p>
     */
    getConnections(args: GetConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionsCommandOutput>;
    getConnections(args: GetConnectionsCommandInput, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
    getConnections(args: GetConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
    /**
     * <p>Gets the association information for customer gateways that are associated with
     *             devices and links in your global network.</p>
     */
    getCustomerGatewayAssociations(args: GetCustomerGatewayAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<GetCustomerGatewayAssociationsCommandOutput>;
    getCustomerGatewayAssociations(args: GetCustomerGatewayAssociationsCommandInput, cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void): void;
    getCustomerGatewayAssociations(args: GetCustomerGatewayAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more of your devices in a global network.</p>
     */
    getDevices(args: GetDevicesCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicesCommandOutput>;
    getDevices(args: GetDevicesCommandInput, cb: (err: any, data?: GetDevicesCommandOutput) => void): void;
    getDevices(args: GetDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicesCommandOutput) => void): void;
    /**
     * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
     *             must be specified.</p>
     */
    getLinkAssociations(args: GetLinkAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<GetLinkAssociationsCommandOutput>;
    getLinkAssociations(args: GetLinkAssociationsCommandInput, cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void): void;
    getLinkAssociations(args: GetLinkAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more links in a specified global network.</p>
     *         <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
     */
    getLinks(args: GetLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetLinksCommandOutput>;
    getLinks(args: GetLinksCommandInput, cb: (err: any, data?: GetLinksCommandOutput) => void): void;
    getLinks(args: GetLinksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLinksCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more of your sites in a global network.</p>
     */
    getSites(args: GetSitesCommandInput, options?: __HttpHandlerOptions): Promise<GetSitesCommandOutput>;
    getSites(args: GetSitesCommandInput, cb: (err: any, data?: GetSitesCommandOutput) => void): void;
    getSites(args: GetSitesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSitesCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
     */
    getTransitGatewayConnectPeerAssociations(args: GetTransitGatewayConnectPeerAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
    getTransitGatewayConnectPeerAssociations(args: GetTransitGatewayConnectPeerAssociationsCommandInput, cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void): void;
    getTransitGatewayConnectPeerAssociations(args: GetTransitGatewayConnectPeerAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void): void;
    /**
     * <p>Gets information about the transit gateway registrations in a specified
     *             global network.</p>
     */
    getTransitGatewayRegistrations(args: GetTransitGatewayRegistrationsCommandInput, options?: __HttpHandlerOptions): Promise<GetTransitGatewayRegistrationsCommandOutput>;
    getTransitGatewayRegistrations(args: GetTransitGatewayRegistrationsCommandInput, cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void): void;
    getTransitGatewayRegistrations(args: GetTransitGatewayRegistrationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void): void;
    /**
     * <p>Lists the tags for a specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Registers a transit gateway in your global network. The transit gateway can be in any
     *             AWS Region, but it must be owned by the same AWS account that owns the global network.
     *             You cannot register a transit gateway in more than one global network.</p>
     */
    registerTransitGateway(args: RegisterTransitGatewayCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTransitGatewayCommandOutput>;
    registerTransitGateway(args: RegisterTransitGatewayCommandInput, cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void): void;
    registerTransitGateway(args: RegisterTransitGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void): void;
    /**
     * <p>Tags a specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the information for an existing connection. To remove information for any of the parameters,
     *             specify an empty string.</p>
     */
    updateConnection(args: UpdateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConnectionCommandOutput>;
    updateConnection(args: UpdateConnectionCommandInput, cb: (err: any, data?: UpdateConnectionCommandOutput) => void): void;
    updateConnection(args: UpdateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConnectionCommandOutput) => void): void;
    /**
     * <p>Updates the details for an existing device. To remove information for any of the
     *             parameters, specify an empty string.</p>
     */
    updateDevice(args: UpdateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceCommandOutput>;
    updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
    updateDevice(args: UpdateDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
    /**
     * <p>Updates an existing global network. To remove information for any of the parameters,
     *             specify an empty string.</p>
     */
    updateGlobalNetwork(args: UpdateGlobalNetworkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGlobalNetworkCommandOutput>;
    updateGlobalNetwork(args: UpdateGlobalNetworkCommandInput, cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void): void;
    updateGlobalNetwork(args: UpdateGlobalNetworkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void): void;
    /**
     * <p>Updates the details for an existing link. To remove information for any of the
     *             parameters, specify an empty string.</p>
     */
    updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
    updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
    updateLink(args: UpdateLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
    /**
     * <p>Updates the information for an existing site. To remove information for any of the
     *             parameters, specify an empty string.</p>
     */
    updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
    updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
    updateSite(args: UpdateSiteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
}
