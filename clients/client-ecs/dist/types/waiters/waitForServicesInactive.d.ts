import { ECSClient } from "../ECSClient";
import { DescribeServicesCommandInput } from "../commands/DescribeServicesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilServicesInactive instead. waitForServicesInactive does not throw error in non-success cases.
 */
export declare const waitForServicesInactive: (params: WaiterConfiguration<ECSClient>, input: DescribeServicesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeServicesCommand for polling.
 */
export declare const waitUntilServicesInactive: (params: WaiterConfiguration<ECSClient>, input: DescribeServicesCommandInput) => Promise<WaiterResult>;
