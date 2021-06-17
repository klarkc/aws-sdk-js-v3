import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUsageStatistics(config: GuardDutyPaginationConfiguration, input: GetUsageStatisticsCommandInput, ...additionalArguments: any): Paginator<GetUsageStatisticsCommandOutput>;
