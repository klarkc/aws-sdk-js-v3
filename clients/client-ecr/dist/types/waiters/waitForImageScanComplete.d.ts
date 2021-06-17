import { ECRClient } from "../ECRClient";
import { DescribeImageScanFindingsCommandInput } from "../commands/DescribeImageScanFindingsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until an image scan is complete and findings can be accessed
 *  @deprecated Use waitUntilImageScanComplete instead. waitForImageScanComplete does not throw error in non-success cases.
 */
export declare const waitForImageScanComplete: (params: WaiterConfiguration<ECRClient>, input: DescribeImageScanFindingsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until an image scan is complete and findings can be accessed
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageScanFindingsCommand for polling.
 */
export declare const waitUntilImageScanComplete: (params: WaiterConfiguration<ECRClient>, input: DescribeImageScanFindingsCommandInput) => Promise<WaiterResult>;
