import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchResources(config: ResourceGroupsPaginationConfiguration, input: SearchResourcesCommandInput, ...additionalArguments: any): Paginator<SearchResourcesCommandOutput>;
