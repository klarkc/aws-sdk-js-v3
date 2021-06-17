import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetModelCommandInput } from "../commands/DescribeAssetModelCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAssetModelActive instead. waitForAssetModelActive does not throw error in non-success cases.
 */
export declare const waitForAssetModelActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetModelCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetModelCommand for polling.
 */
export declare const waitUntilAssetModelActive: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetModelCommandInput) => Promise<WaiterResult>;
