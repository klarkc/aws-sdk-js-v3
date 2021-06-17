import { RekognitionClient } from "../RekognitionClient";
import { DescribeProjectVersionsCommandInput } from "../commands/DescribeProjectVersionsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until the ProjectVersion is running.
 *  @deprecated Use waitUntilProjectVersionRunning instead. waitForProjectVersionRunning does not throw error in non-success cases.
 */
export declare const waitForProjectVersionRunning: (params: WaiterConfiguration<RekognitionClient>, input: DescribeProjectVersionsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until the ProjectVersion is running.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeProjectVersionsCommand for polling.
 */
export declare const waitUntilProjectVersionRunning: (params: WaiterConfiguration<RekognitionClient>, input: DescribeProjectVersionsCommandInput) => Promise<WaiterResult>;
