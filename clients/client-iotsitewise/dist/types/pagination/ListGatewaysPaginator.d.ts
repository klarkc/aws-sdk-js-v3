import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGateways(config: IoTSiteWisePaginationConfiguration, input: ListGatewaysCommandInput, ...additionalArguments: any): Paginator<ListGatewaysCommandOutput>;
