import { DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput } from "../commands/DescribeReplicationTasksCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationTasks(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationTasksCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationTasksCommandOutput>;
