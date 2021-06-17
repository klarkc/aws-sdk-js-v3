import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvents(config: HealthPaginationConfiguration, input: DescribeEventsCommandInput, ...additionalArguments: any): Paginator<DescribeEventsCommandOutput>;
