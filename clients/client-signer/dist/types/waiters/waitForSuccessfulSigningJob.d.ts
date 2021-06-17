import { SignerClient } from "../SignerClient";
import { DescribeSigningJobCommandInput } from "../commands/DescribeSigningJobCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilSuccessfulSigningJob instead. waitForSuccessfulSigningJob does not throw error in non-success cases.
 */
export declare const waitForSuccessfulSigningJob: (params: WaiterConfiguration<SignerClient>, input: DescribeSigningJobCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSigningJobCommand for polling.
 */
export declare const waitUntilSuccessfulSigningJob: (params: WaiterConfiguration<SignerClient>, input: DescribeSigningJobCommandInput) => Promise<WaiterResult>;
