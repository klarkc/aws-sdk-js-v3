import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "../commands/DescribeJobQueuesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeJobQueues(
  config: BatchPaginationConfiguration,
  input: DescribeJobQueuesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobQueuesCommandOutput>;
