import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeScalingPolicies(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalingPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalingPoliciesCommandOutput>;
