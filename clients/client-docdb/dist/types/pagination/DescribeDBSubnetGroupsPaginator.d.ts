import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "../commands/DescribeDBSubnetGroupsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBSubnetGroups(config: DocDBPaginationConfiguration, input: DescribeDBSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBSubnetGroupsCommandOutput>;
