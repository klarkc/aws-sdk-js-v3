import { DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput } from "../commands/DescribeOrganizationConfigRuleStatusesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrganizationConfigRuleStatuses(config: ConfigServicePaginationConfiguration, input: DescribeOrganizationConfigRuleStatusesCommandInput, ...additionalArguments: any): Paginator<DescribeOrganizationConfigRuleStatusesCommandOutput>;
