import { DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput } from "../commands/DescribeDBSecurityGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBSecurityGroups(config: RDSPaginationConfiguration, input: DescribeDBSecurityGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBSecurityGroupsCommandOutput>;
