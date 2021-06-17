import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResources(config: WorkMailPaginationConfiguration, input: ListResourcesCommandInput, ...additionalArguments: any): Paginator<ListResourcesCommandOutput>;
