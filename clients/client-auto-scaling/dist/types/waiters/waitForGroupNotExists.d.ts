import { AutoScalingClient } from "../AutoScalingClient";
import { DescribeAutoScalingGroupsCommandInput } from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilGroupNotExists instead. waitForGroupNotExists does not throw error in non-success cases.
 */
export declare const waitForGroupNotExists: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export declare const waitUntilGroupNotExists: (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
) => Promise<WaiterResult>;
