import { DescribeConfigRuleEvaluationStatusCommandInput, DescribeConfigRuleEvaluationStatusCommandOutput } from "../commands/DescribeConfigRuleEvaluationStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConfigRuleEvaluationStatus(config: ConfigServicePaginationConfiguration, input: DescribeConfigRuleEvaluationStatusCommandInput, ...additionalArguments: any): Paginator<DescribeConfigRuleEvaluationStatusCommandOutput>;
