import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "../commands/ListDestinationsCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDestinations(config: IoTWirelessPaginationConfiguration, input: ListDestinationsCommandInput, ...additionalArguments: any): Paginator<ListDestinationsCommandOutput>;
