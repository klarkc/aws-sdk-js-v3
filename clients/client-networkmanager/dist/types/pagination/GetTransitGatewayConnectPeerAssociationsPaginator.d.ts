import { GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput } from "../commands/GetTransitGatewayConnectPeerAssociationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTransitGatewayConnectPeerAssociations(config: NetworkManagerPaginationConfiguration, input: GetTransitGatewayConnectPeerAssociationsCommandInput, ...additionalArguments: any): Paginator<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
