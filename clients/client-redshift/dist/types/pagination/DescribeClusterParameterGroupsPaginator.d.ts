import { DescribeClusterParameterGroupsCommandInput, DescribeClusterParameterGroupsCommandOutput } from "../commands/DescribeClusterParameterGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterParameterGroups(config: RedshiftPaginationConfiguration, input: DescribeClusterParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterParameterGroupsCommandOutput>;
