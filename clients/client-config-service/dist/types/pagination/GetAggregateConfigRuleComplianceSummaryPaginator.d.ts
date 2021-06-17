import { GetAggregateConfigRuleComplianceSummaryCommandInput, GetAggregateConfigRuleComplianceSummaryCommandOutput } from "../commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAggregateConfigRuleComplianceSummary(config: ConfigServicePaginationConfiguration, input: GetAggregateConfigRuleComplianceSummaryCommandInput, ...additionalArguments: any): Paginator<GetAggregateConfigRuleComplianceSummaryCommandOutput>;
