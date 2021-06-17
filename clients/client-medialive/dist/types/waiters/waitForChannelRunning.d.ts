import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a channel is running
 *  @deprecated Use waitUntilChannelRunning instead. waitForChannelRunning does not throw error in non-success cases.
 */
export declare const waitForChannelRunning: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a channel is running
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export declare const waitUntilChannelRunning: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
