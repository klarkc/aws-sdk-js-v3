import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvents(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeEventsCommandInput, ...additionalArguments: any): Paginator<DescribeEventsCommandOutput>;
