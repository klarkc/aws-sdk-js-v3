import { DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput } from "../commands/DescribeDBParameterGroupsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBParameterGroups(config: NeptunePaginationConfiguration, input: DescribeDBParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBParameterGroupsCommandOutput>;
