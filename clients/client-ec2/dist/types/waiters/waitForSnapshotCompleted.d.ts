import { EC2Client } from "../EC2Client";
import { DescribeSnapshotsCommandInput } from "../commands/DescribeSnapshotsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilSnapshotCompleted instead. waitForSnapshotCompleted does not throw error in non-success cases.
 */
export declare const waitForSnapshotCompleted: (params: WaiterConfiguration<EC2Client>, input: DescribeSnapshotsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSnapshotsCommand for polling.
 */
export declare const waitUntilSnapshotCompleted: (params: WaiterConfiguration<EC2Client>, input: DescribeSnapshotsCommandInput) => Promise<WaiterResult>;
