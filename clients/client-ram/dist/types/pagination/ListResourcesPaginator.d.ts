import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResources(config: RAMPaginationConfiguration, input: ListResourcesCommandInput, ...additionalArguments: any): Paginator<ListResourcesCommandOutput>;
