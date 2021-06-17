import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpoints(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeEndpointsCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointsCommandOutput>;
