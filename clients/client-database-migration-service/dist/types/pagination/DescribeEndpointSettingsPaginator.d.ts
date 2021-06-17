import { DescribeEndpointSettingsCommandInput, DescribeEndpointSettingsCommandOutput } from "../commands/DescribeEndpointSettingsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpointSettings(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeEndpointSettingsCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointSettingsCommandOutput>;
