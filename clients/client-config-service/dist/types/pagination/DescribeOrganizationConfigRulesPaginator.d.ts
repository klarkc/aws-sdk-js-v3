import { DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput } from "../commands/DescribeOrganizationConfigRulesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrganizationConfigRules(config: ConfigServicePaginationConfiguration, input: DescribeOrganizationConfigRulesCommandInput, ...additionalArguments: any): Paginator<DescribeOrganizationConfigRulesCommandOutput>;
