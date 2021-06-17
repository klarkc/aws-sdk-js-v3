import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a channel has is stopped
 *  @deprecated Use waitUntilChannelStopped instead. waitForChannelStopped does not throw error in non-success cases.
 */
export declare const waitForChannelStopped: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a channel has is stopped
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export declare const waitUntilChannelStopped: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
