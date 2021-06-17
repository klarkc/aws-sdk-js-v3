import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvents(config: RedshiftPaginationConfiguration, input: DescribeEventsCommandInput, ...additionalArguments: any): Paginator<DescribeEventsCommandOutput>;
