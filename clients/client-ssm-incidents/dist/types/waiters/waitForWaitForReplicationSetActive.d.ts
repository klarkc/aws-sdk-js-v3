import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { GetReplicationSetCommandInput } from "../commands/GetReplicationSetCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait for a replication set to become ACTIVE
 *  @deprecated Use waitUntilWaitForReplicationSetActive instead. waitForWaitForReplicationSetActive does not throw error in non-success cases.
 */
export declare const waitForWaitForReplicationSetActive: (params: WaiterConfiguration<SSMIncidentsClient>, input: GetReplicationSetCommandInput) => Promise<WaiterResult>;
/**
 * Wait for a replication set to become ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetReplicationSetCommand for polling.
 */
export declare const waitUntilWaitForReplicationSetActive: (params: WaiterConfiguration<SSMIncidentsClient>, input: GetReplicationSetCommandInput) => Promise<WaiterResult>;
