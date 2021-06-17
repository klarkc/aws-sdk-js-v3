import { SearchThingsCommandInput, SearchThingsCommandOutput } from "../commands/SearchThingsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchThings(config: IoTThingsGraphPaginationConfiguration, input: SearchThingsCommandInput, ...additionalArguments: any): Paginator<SearchThingsCommandOutput>;
