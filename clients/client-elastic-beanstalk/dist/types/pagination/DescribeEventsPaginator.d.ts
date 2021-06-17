import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvents(config: ElasticBeanstalkPaginationConfiguration, input: DescribeEventsCommandInput, ...additionalArguments: any): Paginator<DescribeEventsCommandOutput>;
