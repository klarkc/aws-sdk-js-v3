import { ListInsightsCommandInput, ListInsightsCommandOutput } from "../commands/ListInsightsCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInsights(config: DevOpsGuruPaginationConfiguration, input: ListInsightsCommandInput, ...additionalArguments: any): Paginator<ListInsightsCommandOutput>;
