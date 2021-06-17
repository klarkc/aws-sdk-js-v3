import { DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput } from "../commands/DescribeClusterSubnetGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterSubnetGroups(config: RedshiftPaginationConfiguration, input: DescribeClusterSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterSubnetGroupsCommandOutput>;
