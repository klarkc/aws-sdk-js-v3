import { DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput } from "../commands/DescribeReportDefinitionsCommand";
import { CostAndUsageReportServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReportDefinitions(config: CostAndUsageReportServicePaginationConfiguration, input: DescribeReportDefinitionsCommandInput, ...additionalArguments: any): Paginator<DescribeReportDefinitionsCommandOutput>;
