import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUsageStatistics(config: Macie2PaginationConfiguration, input: GetUsageStatisticsCommandInput, ...additionalArguments: any): Paginator<GetUsageStatisticsCommandOutput>;
