import { DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput } from "../commands/DescribeDBProxyTargetGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBProxyTargetGroups(config: RDSPaginationConfiguration, input: DescribeDBProxyTargetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBProxyTargetGroupsCommandOutput>;
