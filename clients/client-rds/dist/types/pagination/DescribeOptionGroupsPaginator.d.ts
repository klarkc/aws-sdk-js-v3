import { DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput } from "../commands/DescribeOptionGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOptionGroups(config: RDSPaginationConfiguration, input: DescribeOptionGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeOptionGroupsCommandOutput>;
