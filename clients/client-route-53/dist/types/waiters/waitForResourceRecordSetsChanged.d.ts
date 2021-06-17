import { Route53Client } from "../Route53Client";
import { GetChangeCommandInput } from "../commands/GetChangeCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilResourceRecordSetsChanged instead. waitForResourceRecordSetsChanged does not throw error in non-success cases.
 */
export declare const waitForResourceRecordSetsChanged: (params: WaiterConfiguration<Route53Client>, input: GetChangeCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetChangeCommand for polling.
 */
export declare const waitUntilResourceRecordSetsChanged: (params: WaiterConfiguration<Route53Client>, input: GetChangeCommandInput) => Promise<WaiterResult>;
