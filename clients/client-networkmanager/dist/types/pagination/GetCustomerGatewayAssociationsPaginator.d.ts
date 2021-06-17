import { GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput } from "../commands/GetCustomerGatewayAssociationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCustomerGatewayAssociations(config: NetworkManagerPaginationConfiguration, input: GetCustomerGatewayAssociationsCommandInput, ...additionalArguments: any): Paginator<GetCustomerGatewayAssociationsCommandOutput>;
