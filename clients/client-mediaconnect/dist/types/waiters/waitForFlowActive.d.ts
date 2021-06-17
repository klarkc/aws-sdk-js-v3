import { MediaConnectClient } from "../MediaConnectClient";
import { DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a flow is active
 *  @deprecated Use waitUntilFlowActive instead. waitForFlowActive does not throw error in non-success cases.
 */
export declare const waitForFlowActive: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a flow is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export declare const waitUntilFlowActive: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
