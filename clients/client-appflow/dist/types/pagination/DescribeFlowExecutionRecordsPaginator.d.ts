import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "../commands/DescribeFlowExecutionRecordsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFlowExecutionRecords(
  config: AppflowPaginationConfiguration,
  input: DescribeFlowExecutionRecordsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFlowExecutionRecordsCommandOutput>;
