import { DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput } from "../commands/DescribeClusterSecurityGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterSecurityGroups(config: RedshiftPaginationConfiguration, input: DescribeClusterSecurityGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterSecurityGroupsCommandOutput>;
