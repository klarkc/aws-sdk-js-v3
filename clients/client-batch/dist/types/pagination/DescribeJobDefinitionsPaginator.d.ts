import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeJobDefinitions(
  config: BatchPaginationConfiguration,
  input: DescribeJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobDefinitionsCommandOutput>;
