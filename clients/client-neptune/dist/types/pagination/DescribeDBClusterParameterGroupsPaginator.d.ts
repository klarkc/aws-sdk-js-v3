import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "../commands/DescribeDBClusterParameterGroupsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameterGroups(config: NeptunePaginationConfiguration, input: DescribeDBClusterParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParameterGroupsCommandOutput>;
