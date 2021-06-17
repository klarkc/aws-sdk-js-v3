import { DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput } from "../commands/DescribeEventAggregatesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventAggregates(config: HealthPaginationConfiguration, input: DescribeEventAggregatesCommandInput, ...additionalArguments: any): Paginator<DescribeEventAggregatesCommandOutput>;
