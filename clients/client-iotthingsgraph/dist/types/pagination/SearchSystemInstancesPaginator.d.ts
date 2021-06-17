import { SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput } from "../commands/SearchSystemInstancesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchSystemInstances(config: IoTThingsGraphPaginationConfiguration, input: SearchSystemInstancesCommandInput, ...additionalArguments: any): Paginator<SearchSystemInstancesCommandOutput>;
