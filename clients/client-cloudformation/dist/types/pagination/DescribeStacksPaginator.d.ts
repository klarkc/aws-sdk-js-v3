import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeStacks(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStacksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStacksCommandOutput>;
