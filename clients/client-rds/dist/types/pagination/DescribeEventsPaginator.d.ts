import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvents(config: RDSPaginationConfiguration, input: DescribeEventsCommandInput, ...additionalArguments: any): Paginator<DescribeEventsCommandOutput>;
