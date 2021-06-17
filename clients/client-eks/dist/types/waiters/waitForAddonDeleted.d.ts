import { EKSClient } from "../EKSClient";
import { DescribeAddonCommandInput } from "../commands/DescribeAddonCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAddonDeleted instead. waitForAddonDeleted does not throw error in non-success cases.
 */
export declare const waitForAddonDeleted: (params: WaiterConfiguration<EKSClient>, input: DescribeAddonCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAddonCommand for polling.
 */
export declare const waitUntilAddonDeleted: (params: WaiterConfiguration<EKSClient>, input: DescribeAddonCommandInput) => Promise<WaiterResult>;
