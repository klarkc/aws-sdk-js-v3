import { ECSClient } from "../ECSClient";
import { DescribeTasksCommandInput } from "../commands/DescribeTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilTasksRunning instead. waitForTasksRunning does not throw error in non-success cases.
 */
export declare const waitForTasksRunning: (params: WaiterConfiguration<ECSClient>, input: DescribeTasksCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
export declare const waitUntilTasksRunning: (params: WaiterConfiguration<ECSClient>, input: DescribeTasksCommandInput) => Promise<WaiterResult>;
