import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "../commands/DescribeDBSubnetGroupsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBSubnetGroups(config: NeptunePaginationConfiguration, input: DescribeDBSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBSubnetGroupsCommandOutput>;
