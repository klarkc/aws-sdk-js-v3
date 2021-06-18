import { AutoScalingClient } from "../AutoScalingClient";
import { DescribeAutoScalingGroupsCommandInput } from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilGroupExists instead. waitForGroupExists does not throw error in non-success cases.
 */
export declare const waitForGroupExists: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export declare const waitUntilGroupExists: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
