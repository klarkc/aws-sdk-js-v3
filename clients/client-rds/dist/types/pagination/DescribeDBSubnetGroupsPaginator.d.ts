import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "../commands/DescribeDBSubnetGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBSubnetGroups(config: RDSPaginationConfiguration, input: DescribeDBSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBSubnetGroupsCommandOutput>;
