import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetCommandInput } from "../commands/DescribeAssetCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAssetActive instead. waitForAssetActive does not throw error in non-success cases.
 */
export declare const waitForAssetActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetCommand for polling.
 */
export declare const waitUntilAssetActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetCommandInput) => Promise<WaiterResult>;
