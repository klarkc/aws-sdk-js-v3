import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeInputCommandInput } from "../commands/DescribeInputCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until an input has been deleted
 *  @deprecated Use waitUntilInputDeleted instead. waitForInputDeleted does not throw error in non-success cases.
 */
export declare const waitForInputDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
/**
 * Wait until an input has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
export declare const waitUntilInputDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeInputCommandInput) => Promise<WaiterResult>;
