import { ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput } from "../commands/ListAnomaliesForInsightCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnomaliesForInsight(config: DevOpsGuruPaginationConfiguration, input: ListAnomaliesForInsightCommandInput, ...additionalArguments: any): Paginator<ListAnomaliesForInsightCommandOutput>;
