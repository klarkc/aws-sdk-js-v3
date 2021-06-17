import { DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput } from "../commands/DescribeDBParameterGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBParameterGroups(config: RDSPaginationConfiguration, input: DescribeDBParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBParameterGroupsCommandOutput>;
