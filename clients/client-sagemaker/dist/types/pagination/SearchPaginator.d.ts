import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearch(config: SageMakerPaginationConfiguration, input: SearchCommandInput, ...additionalArguments: any): Paginator<SearchCommandOutput>;
