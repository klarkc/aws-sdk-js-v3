import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "../commands/SearchAnalysesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchAnalyses(config: QuickSightPaginationConfiguration, input: SearchAnalysesCommandInput, ...additionalArguments: any): Paginator<SearchAnalysesCommandOutput>;
