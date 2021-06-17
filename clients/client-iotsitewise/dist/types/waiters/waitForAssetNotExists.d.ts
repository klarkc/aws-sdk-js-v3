import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetCommandInput } from "../commands/DescribeAssetCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAssetNotExists instead. waitForAssetNotExists does not throw error in non-success cases.
 */
export declare const waitForAssetNotExists: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetCommand for polling.
 */
export declare const waitUntilAssetNotExists: (params: WaiterConfiguration<IoTSiteWiseClient>, input: DescribeAssetCommandInput) => Promise<WaiterResult>;
