import { EKSClient } from "../EKSClient";
import { DescribeNodegroupCommandInput } from "../commands/DescribeNodegroupCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilNodegroupActive instead. waitForNodegroupActive does not throw error in non-success cases.
 */
export declare const waitForNodegroupActive: (params: WaiterConfiguration<EKSClient>, input: DescribeNodegroupCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodegroupCommand for polling.
 */
export declare const waitUntilNodegroupActive: (params: WaiterConfiguration<EKSClient>, input: DescribeNodegroupCommandInput) => Promise<WaiterResult>;
