import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a channel has been created
 *  @deprecated Use waitUntilChannelCreated instead. waitForChannelCreated does not throw error in non-success cases.
 */
export declare const waitForChannelCreated: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a channel has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export declare const waitUntilChannelCreated: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
