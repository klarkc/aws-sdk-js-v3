import { DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput } from "../commands/DescribeTableStatisticsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTableStatistics(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeTableStatisticsCommandInput, ...additionalArguments: any): Paginator<DescribeTableStatisticsCommandOutput>;
