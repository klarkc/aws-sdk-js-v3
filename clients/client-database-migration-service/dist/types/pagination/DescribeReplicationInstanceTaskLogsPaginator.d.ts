import { DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput } from "../commands/DescribeReplicationInstanceTaskLogsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationInstanceTaskLogs(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationInstanceTaskLogsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationInstanceTaskLogsCommandOutput>;
