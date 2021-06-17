import { DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput } from "../commands/DescribeReplicationSubnetGroupsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationSubnetGroups(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationSubnetGroupsCommandOutput>;
