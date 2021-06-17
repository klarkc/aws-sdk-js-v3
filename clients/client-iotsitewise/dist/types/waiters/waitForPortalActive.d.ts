import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribePortalCommandInput } from "../commands/DescribePortalCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilPortalActive instead. waitForPortalActive does not throw error in non-success cases.
 */
export declare const waitForPortalActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribePortalCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribePortalCommand for polling.
 */
export declare const waitUntilPortalActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribePortalCommandInput) => Promise<WaiterResult>;
