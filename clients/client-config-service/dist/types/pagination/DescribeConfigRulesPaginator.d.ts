import { DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput } from "../commands/DescribeConfigRulesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConfigRules(config: ConfigServicePaginationConfiguration, input: DescribeConfigRulesCommandInput, ...additionalArguments: any): Paginator<DescribeConfigRulesCommandOutput>;
