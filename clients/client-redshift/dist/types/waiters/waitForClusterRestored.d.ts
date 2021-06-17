import { RedshiftClient } from "../RedshiftClient";
import { DescribeClustersCommandInput } from "../commands/DescribeClustersCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilClusterRestored instead. waitForClusterRestored does not throw error in non-success cases.
 */
export declare const waitForClusterRestored: (params: WaiterConfiguration<RedshiftClient>, input: DescribeClustersCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClustersCommand for polling.
 */
export declare const waitUntilClusterRestored: (params: WaiterConfiguration<RedshiftClient>, input: DescribeClustersCommandInput) => Promise<WaiterResult>;
