import { SearchInsightsCommandInput, SearchInsightsCommandOutput } from "../commands/SearchInsightsCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchInsights(config: DevOpsGuruPaginationConfiguration, input: SearchInsightsCommandInput, ...additionalArguments: any): Paginator<SearchInsightsCommandOutput>;
