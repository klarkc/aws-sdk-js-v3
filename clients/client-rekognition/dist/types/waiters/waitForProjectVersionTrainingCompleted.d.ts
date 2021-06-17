import { RekognitionClient } from "../RekognitionClient";
import { DescribeProjectVersionsCommandInput } from "../commands/DescribeProjectVersionsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until the ProjectVersion training completes.
 *  @deprecated Use waitUntilProjectVersionTrainingCompleted instead. waitForProjectVersionTrainingCompleted does not throw error in non-success cases.
 */
export declare const waitForProjectVersionTrainingCompleted: (params: WaiterConfiguration<RekognitionClient>, input: DescribeProjectVersionsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until the ProjectVersion training completes.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeProjectVersionsCommand for polling.
 */
export declare const waitUntilProjectVersionTrainingCompleted: (params: WaiterConfiguration<RekognitionClient>, input: DescribeProjectVersionsCommandInput) => Promise<WaiterResult>;
