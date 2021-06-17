import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ReadJobCommandInput } from "../commands/ReadJobCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilJobComplete instead. waitForJobComplete does not throw error in non-success cases.
 */
export declare const waitForJobComplete: (params: WaiterConfiguration<ElasticTranscoderClient>, input: ReadJobCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to ReadJobCommand for polling.
 */
export declare const waitUntilJobComplete: (params: WaiterConfiguration<ElasticTranscoderClient>, input: ReadJobCommandInput) => Promise<WaiterResult>;
