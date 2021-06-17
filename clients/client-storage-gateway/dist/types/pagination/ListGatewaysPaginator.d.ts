import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGateways(config: StorageGatewayPaginationConfiguration, input: ListGatewaysCommandInput, ...additionalArguments: any): Paginator<ListGatewaysCommandOutput>;
