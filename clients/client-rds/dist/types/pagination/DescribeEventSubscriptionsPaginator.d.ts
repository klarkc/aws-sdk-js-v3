import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "../commands/DescribeEventSubscriptionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventSubscriptions(config: RDSPaginationConfiguration, input: DescribeEventSubscriptionsCommandInput, ...additionalArguments: any): Paginator<DescribeEventSubscriptionsCommandOutput>;
