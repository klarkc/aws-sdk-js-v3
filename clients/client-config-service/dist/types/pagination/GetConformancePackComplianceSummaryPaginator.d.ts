import { GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput } from "../commands/GetConformancePackComplianceSummaryCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetConformancePackComplianceSummary(config: ConfigServicePaginationConfiguration, input: GetConformancePackComplianceSummaryCommandInput, ...additionalArguments: any): Paginator<GetConformancePackComplianceSummaryCommandOutput>;
