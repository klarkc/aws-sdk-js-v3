import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeInputCommandInput } from "../commands/DescribeInputCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until an input has been detached
 *  @deprecated Use waitUntilInputDetached instead. waitForInputDetached does not throw error in non-success cases.
 */
export declare const waitForInputDetached: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
/**
 * Wait until an input has been detached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
export declare const waitUntilInputDetached: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
