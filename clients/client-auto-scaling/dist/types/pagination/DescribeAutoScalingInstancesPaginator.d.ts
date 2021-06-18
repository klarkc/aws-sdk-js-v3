import {
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "../commands/DescribeAutoScalingInstancesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAutoScalingInstances(
  config: AutoScalingPaginationConfiguration,
  input: DescribeAutoScalingInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutoScalingInstancesCommandOutput>;
