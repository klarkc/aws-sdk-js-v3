import { DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput } from "../commands/DescribeReplicationInstancesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationInstances(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationInstancesCommandOutput>;
