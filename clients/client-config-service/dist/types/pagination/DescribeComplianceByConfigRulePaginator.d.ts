import { DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput } from "../commands/DescribeComplianceByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeComplianceByConfigRule(config: ConfigServicePaginationConfiguration, input: DescribeComplianceByConfigRuleCommandInput, ...additionalArguments: any): Paginator<DescribeComplianceByConfigRuleCommandOutput>;
