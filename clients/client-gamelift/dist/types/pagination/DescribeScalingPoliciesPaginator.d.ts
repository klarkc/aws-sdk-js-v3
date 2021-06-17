import { DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput } from "../commands/DescribeScalingPoliciesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeScalingPolicies(config: GameLiftPaginationConfiguration, input: DescribeScalingPoliciesCommandInput, ...additionalArguments: any): Paginator<DescribeScalingPoliciesCommandOutput>;
