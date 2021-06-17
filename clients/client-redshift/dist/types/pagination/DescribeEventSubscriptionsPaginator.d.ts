import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "../commands/DescribeEventSubscriptionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventSubscriptions(config: RedshiftPaginationConfiguration, input: DescribeEventSubscriptionsCommandInput, ...additionalArguments: any): Paginator<DescribeEventSubscriptionsCommandOutput>;
