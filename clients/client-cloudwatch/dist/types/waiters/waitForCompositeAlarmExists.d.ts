import { CloudWatchClient } from "../CloudWatchClient";
import { DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilCompositeAlarmExists instead. waitForCompositeAlarmExists does not throw error in non-success cases.
 */
export declare const waitForCompositeAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export declare const waitUntilCompositeAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
