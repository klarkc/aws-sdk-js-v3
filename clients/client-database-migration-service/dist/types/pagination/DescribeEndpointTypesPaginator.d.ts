import { DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput } from "../commands/DescribeEndpointTypesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpointTypes(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeEndpointTypesCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointTypesCommandOutput>;
