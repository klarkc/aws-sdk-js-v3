import { RedshiftClient } from "../RedshiftClient";
import { DescribeClusterSnapshotsCommandInput } from "../commands/DescribeClusterSnapshotsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilSnapshotAvailable instead. waitForSnapshotAvailable does not throw error in non-success cases.
 */
export declare const waitForSnapshotAvailable: (params: WaiterConfiguration<RedshiftClient>, input: DescribeClusterSnapshotsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterSnapshotsCommand for polling.
 */
export declare const waitUntilSnapshotAvailable: (params: WaiterConfiguration<RedshiftClient>, input: DescribeClusterSnapshotsCommandInput) => Promise<WaiterResult>;
