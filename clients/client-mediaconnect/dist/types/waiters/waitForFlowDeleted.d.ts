import { MediaConnectClient } from "../MediaConnectClient";
import { DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a flow is deleted
 *  @deprecated Use waitUntilFlowDeleted instead. waitForFlowDeleted does not throw error in non-success cases.
 */
export declare const waitForFlowDeleted: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a flow is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export declare const waitUntilFlowDeleted: (params: WaiterConfiguration<MediaConnectClient>, input: DescribeFlowCommandInput) => Promise<WaiterResult>;
