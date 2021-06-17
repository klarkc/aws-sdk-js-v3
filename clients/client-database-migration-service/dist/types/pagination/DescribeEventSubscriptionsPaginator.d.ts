import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "../commands/DescribeEventSubscriptionsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventSubscriptions(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeEventSubscriptionsCommandInput, ...additionalArguments: any): Paginator<DescribeEventSubscriptionsCommandOutput>;
