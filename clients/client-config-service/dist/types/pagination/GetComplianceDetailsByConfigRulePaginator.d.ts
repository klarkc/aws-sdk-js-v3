import { GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput } from "../commands/GetComplianceDetailsByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetComplianceDetailsByConfigRule(config: ConfigServicePaginationConfiguration, input: GetComplianceDetailsByConfigRuleCommandInput, ...additionalArguments: any): Paginator<GetComplianceDetailsByConfigRuleCommandOutput>;
