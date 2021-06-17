import { RDSClient } from "../RDSClient";
import { DescribeDBClusterSnapshotsCommandInput } from "../commands/DescribeDBClusterSnapshotsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilDBClusterSnapshotDeleted instead. waitForDBClusterSnapshotDeleted does not throw error in non-success cases.
 */
export declare const waitForDBClusterSnapshotDeleted: (params: WaiterConfiguration<RDSClient>, input: DescribeDBClusterSnapshotsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDBClusterSnapshotsCommand for polling.
 */
export declare const waitUntilDBClusterSnapshotDeleted: (params: WaiterConfiguration<RDSClient>, input: DescribeDBClusterSnapshotsCommandInput) => Promise<WaiterResult>;
