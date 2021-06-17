import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeInputCommandInput } from "../commands/DescribeInputCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until an input has been attached
 *  @deprecated Use waitUntilInputAttached instead. waitForInputAttached does not throw error in non-success cases.
 */
export declare const waitForInputAttached: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
/**
 * Wait until an input has been attached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
export declare const waitUntilInputAttached: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
