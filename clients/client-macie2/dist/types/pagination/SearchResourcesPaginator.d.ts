import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchResources(config: Macie2PaginationConfiguration, input: SearchResourcesCommandInput, ...additionalArguments: any): Paginator<SearchResourcesCommandOutput>;
