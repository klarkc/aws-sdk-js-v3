import { GetAggregateConformancePackComplianceSummaryCommandInput, GetAggregateConformancePackComplianceSummaryCommandOutput } from "../commands/GetAggregateConformancePackComplianceSummaryCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAggregateConformancePackComplianceSummary(config: ConfigServicePaginationConfiguration, input: GetAggregateConformancePackComplianceSummaryCommandInput, ...additionalArguments: any): Paginator<GetAggregateConformancePackComplianceSummaryCommandOutput>;
