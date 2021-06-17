import { DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput } from "../commands/DescribeConnectionsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConnections(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeConnectionsCommandOutput>;
