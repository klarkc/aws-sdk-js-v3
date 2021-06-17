import { MediaConnectClient } from "../MediaConnectClient";
import { DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a flow is in standby mode
 *  @deprecated Use waitUntilFlowStandby instead. waitForFlowStandby does not throw error in non-success cases.
 */
export declare const waitForFlowStandby: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a flow is in standby mode
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export declare const waitUntilFlowStandby: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
