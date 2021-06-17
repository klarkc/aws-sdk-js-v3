import { DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput } from "../commands/DescribeUsageLimitsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeUsageLimits(config: RedshiftPaginationConfiguration, input: DescribeUsageLimitsCommandInput, ...additionalArguments: any): Paginator<DescribeUsageLimitsCommandOutput>;
