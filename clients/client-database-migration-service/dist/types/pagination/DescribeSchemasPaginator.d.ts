import { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "../commands/DescribeSchemasCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSchemas(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeSchemasCommandInput, ...additionalArguments: any): Paginator<DescribeSchemasCommandOutput>;
