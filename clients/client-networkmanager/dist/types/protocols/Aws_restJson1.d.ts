import { AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput } from "../commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommandInput, AssociateLinkCommandOutput } from "../commands/AssociateLinkCommand";
import { AssociateTransitGatewayConnectPeerCommandInput, AssociateTransitGatewayConnectPeerCommandOutput } from "../commands/AssociateTransitGatewayConnectPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateDeviceCommandInput, CreateDeviceCommandOutput } from "../commands/CreateDeviceCommand";
import { CreateGlobalNetworkCommandInput, CreateGlobalNetworkCommandOutput } from "../commands/CreateGlobalNetworkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "../commands/CreateLinkCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import { DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput } from "../commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "../commands/DeleteLinkCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "../commands/DeleteSiteCommand";
import { DeregisterTransitGatewayCommandInput, DeregisterTransitGatewayCommandOutput } from "../commands/DeregisterTransitGatewayCommand";
import { DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput } from "../commands/DescribeGlobalNetworksCommand";
import { DisassociateCustomerGatewayCommandInput, DisassociateCustomerGatewayCommandOutput } from "../commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommandInput, DisassociateLinkCommandOutput } from "../commands/DisassociateLinkCommand";
import { DisassociateTransitGatewayConnectPeerCommandInput, DisassociateTransitGatewayConnectPeerCommandOutput } from "../commands/DisassociateTransitGatewayConnectPeerCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import { GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput } from "../commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommandInput, GetDevicesCommandOutput } from "../commands/GetDevicesCommand";
import { GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput } from "../commands/GetLinkAssociationsCommand";
import { GetLinksCommandInput, GetLinksCommandOutput } from "../commands/GetLinksCommand";
import { GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import { GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput } from "../commands/GetTransitGatewayConnectPeerAssociationsCommand";
import { GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput } from "../commands/GetTransitGatewayRegistrationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { RegisterTransitGatewayCommandInput, RegisterTransitGatewayCommandOutput } from "../commands/RegisterTransitGatewayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import { UpdateGlobalNetworkCommandInput, UpdateGlobalNetworkCommandOutput } from "../commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "../commands/UpdateLinkCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "../commands/UpdateSiteCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AssociateCustomerGatewayCommand: (input: AssociateCustomerGatewayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AssociateLinkCommand: (input: AssociateLinkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand: (input: AssociateTransitGatewayConnectPeerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateConnectionCommand: (input: CreateConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDeviceCommand: (input: CreateDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateGlobalNetworkCommand: (input: CreateGlobalNetworkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateLinkCommand: (input: CreateLinkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateSiteCommand: (input: CreateSiteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteConnectionCommand: (input: DeleteConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDeviceCommand: (input: DeleteDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteGlobalNetworkCommand: (input: DeleteGlobalNetworkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteLinkCommand: (input: DeleteLinkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteSiteCommand: (input: DeleteSiteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeregisterTransitGatewayCommand: (input: DeregisterTransitGatewayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeGlobalNetworksCommand: (input: DescribeGlobalNetworksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateCustomerGatewayCommand: (input: DisassociateCustomerGatewayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateLinkCommand: (input: DisassociateLinkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand: (input: DisassociateTransitGatewayConnectPeerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetConnectionsCommand: (input: GetConnectionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetCustomerGatewayAssociationsCommand: (input: GetCustomerGatewayAssociationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDevicesCommand: (input: GetDevicesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetLinkAssociationsCommand: (input: GetLinkAssociationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetLinksCommand: (input: GetLinksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSitesCommand: (input: GetSitesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand: (input: GetTransitGatewayConnectPeerAssociationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTransitGatewayRegistrationsCommand: (input: GetTransitGatewayRegistrationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterTransitGatewayCommand: (input: RegisterTransitGatewayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateConnectionCommand: (input: UpdateConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDeviceCommand: (input: UpdateDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateGlobalNetworkCommand: (input: UpdateGlobalNetworkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateLinkCommand: (input: UpdateLinkCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateSiteCommand: (input: UpdateSiteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AssociateCustomerGatewayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateCustomerGatewayCommandOutput>;
export declare const deserializeAws_restJson1AssociateLinkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateLinkCommandOutput>;
export declare const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateTransitGatewayConnectPeerCommandOutput>;
export declare const deserializeAws_restJson1CreateConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateConnectionCommandOutput>;
export declare const deserializeAws_restJson1CreateDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDeviceCommandOutput>;
export declare const deserializeAws_restJson1CreateGlobalNetworkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateGlobalNetworkCommandOutput>;
export declare const deserializeAws_restJson1CreateLinkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLinkCommandOutput>;
export declare const deserializeAws_restJson1CreateSiteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateSiteCommandOutput>;
export declare const deserializeAws_restJson1DeleteConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteConnectionCommandOutput>;
export declare const deserializeAws_restJson1DeleteDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDeviceCommandOutput>;
export declare const deserializeAws_restJson1DeleteGlobalNetworkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteGlobalNetworkCommandOutput>;
export declare const deserializeAws_restJson1DeleteLinkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLinkCommandOutput>;
export declare const deserializeAws_restJson1DeleteSiteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteSiteCommandOutput>;
export declare const deserializeAws_restJson1DeregisterTransitGatewayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeregisterTransitGatewayCommandOutput>;
export declare const deserializeAws_restJson1DescribeGlobalNetworksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeGlobalNetworksCommandOutput>;
export declare const deserializeAws_restJson1DisassociateCustomerGatewayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateCustomerGatewayCommandOutput>;
export declare const deserializeAws_restJson1DisassociateLinkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateLinkCommandOutput>;
export declare const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateTransitGatewayConnectPeerCommandOutput>;
export declare const deserializeAws_restJson1GetConnectionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetConnectionsCommandOutput>;
export declare const deserializeAws_restJson1GetCustomerGatewayAssociationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCustomerGatewayAssociationsCommandOutput>;
export declare const deserializeAws_restJson1GetDevicesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDevicesCommandOutput>;
export declare const deserializeAws_restJson1GetLinkAssociationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLinkAssociationsCommandOutput>;
export declare const deserializeAws_restJson1GetLinksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLinksCommandOutput>;
export declare const deserializeAws_restJson1GetSitesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSitesCommandOutput>;
export declare const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
export declare const deserializeAws_restJson1GetTransitGatewayRegistrationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTransitGatewayRegistrationsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1RegisterTransitGatewayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterTransitGatewayCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateConnectionCommandOutput>;
export declare const deserializeAws_restJson1UpdateDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDeviceCommandOutput>;
export declare const deserializeAws_restJson1UpdateGlobalNetworkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateGlobalNetworkCommandOutput>;
export declare const deserializeAws_restJson1UpdateLinkCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLinkCommandOutput>;
export declare const deserializeAws_restJson1UpdateSiteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateSiteCommandOutput>;
