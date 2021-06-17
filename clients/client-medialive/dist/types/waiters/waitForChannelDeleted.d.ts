import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a channel has been deleted
 *  @deprecated Use waitUntilChannelDeleted instead. waitForChannelDeleted does not throw error in non-success cases.
 */
export declare const waitForChannelDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a channel has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export declare const waitUntilChannelDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeChannelCommandInput) => Promise<WaiterResult>;
