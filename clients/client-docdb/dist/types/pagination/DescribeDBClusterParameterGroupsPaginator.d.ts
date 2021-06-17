import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "../commands/DescribeDBClusterParameterGroupsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameterGroups(config: DocDBPaginationConfiguration, input: DescribeDBClusterParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParameterGroupsCommandOutput>;
