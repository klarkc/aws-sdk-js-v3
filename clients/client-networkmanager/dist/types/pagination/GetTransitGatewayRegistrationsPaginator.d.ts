import { GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput } from "../commands/GetTransitGatewayRegistrationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTransitGatewayRegistrations(config: NetworkManagerPaginationConfiguration, input: GetTransitGatewayRegistrationsCommandInput, ...additionalArguments: any): Paginator<GetTransitGatewayRegistrationsCommandOutput>;
