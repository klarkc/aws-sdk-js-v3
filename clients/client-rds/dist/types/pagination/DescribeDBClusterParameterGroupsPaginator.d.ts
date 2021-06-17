import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "../commands/DescribeDBClusterParameterGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameterGroups(config: RDSPaginationConfiguration, input: DescribeDBClusterParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParameterGroupsCommandOutput>;
