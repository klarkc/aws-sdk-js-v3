import { ListWirelessGatewaysCommandInput, ListWirelessGatewaysCommandOutput } from "../commands/ListWirelessGatewaysCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWirelessGateways(config: IoTWirelessPaginationConfiguration, input: ListWirelessGatewaysCommandInput, ...additionalArguments: any): Paginator<ListWirelessGatewaysCommandOutput>;
