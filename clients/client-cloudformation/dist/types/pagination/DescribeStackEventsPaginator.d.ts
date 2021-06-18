import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeStackEvents(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStackEventsCommandOutput>;
