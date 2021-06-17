import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "../commands/DescribeEventSubscriptionsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventSubscriptions(config: NeptunePaginationConfiguration, input: DescribeEventSubscriptionsCommandInput, ...additionalArguments: any): Paginator<DescribeEventSubscriptionsCommandOutput>;
