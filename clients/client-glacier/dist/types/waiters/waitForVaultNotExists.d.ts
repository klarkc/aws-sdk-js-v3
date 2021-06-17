import { GlacierClient } from "../GlacierClient";
import { DescribeVaultCommandInput } from "../commands/DescribeVaultCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilVaultNotExists instead. waitForVaultNotExists does not throw error in non-success cases.
 */
export declare const waitForVaultNotExists: (params: WaiterConfiguration<GlacierClient>, input: DescribeVaultCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVaultCommand for polling.
 */
export declare const waitUntilVaultNotExists: (params: WaiterConfiguration<GlacierClient>, input: DescribeVaultCommandInput) => Promise<WaiterResult>;
