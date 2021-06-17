import { GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput } from "../commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAggregateComplianceDetailsByConfigRule(config: ConfigServicePaginationConfiguration, input: GetAggregateComplianceDetailsByConfigRuleCommandInput, ...additionalArguments: any): Paginator<GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
