import { DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput } from "../commands/DescribeAggregateComplianceByConfigRulesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAggregateComplianceByConfigRules(config: ConfigServicePaginationConfiguration, input: DescribeAggregateComplianceByConfigRulesCommandInput, ...additionalArguments: any): Paginator<DescribeAggregateComplianceByConfigRulesCommandOutput>;
