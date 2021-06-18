import { AutoScalingClient } from "../AutoScalingClient";
import { DescribeAutoScalingGroupsCommandInput } from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilGroupInService instead. waitForGroupInService does not throw error in non-success cases.
 */
export declare const waitForGroupInService: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export declare const waitUntilGroupInService: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
