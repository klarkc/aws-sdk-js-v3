import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "../commands/ListAnalysesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnalyses(config: QuickSightPaginationConfiguration, input: ListAnalysesCommandInput, ...additionalArguments: any): Paginator<ListAnalysesCommandOutput>;
