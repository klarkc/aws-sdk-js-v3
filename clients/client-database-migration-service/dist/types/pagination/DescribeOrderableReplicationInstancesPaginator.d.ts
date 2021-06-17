import { DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput } from "../commands/DescribeOrderableReplicationInstancesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrderableReplicationInstances(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeOrderableReplicationInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeOrderableReplicationInstancesCommandOutput>;
