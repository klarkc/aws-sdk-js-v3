import { DescribePoliciesCommandInput, DescribePoliciesCommandOutput } from "../commands/DescribePoliciesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePolicies(
  config: AutoScalingPaginationConfiguration,
  input: DescribePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePoliciesCommandOutput>;
