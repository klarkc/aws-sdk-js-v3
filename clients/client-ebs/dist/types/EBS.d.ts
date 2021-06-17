import { EBSClient } from "./EBSClient";
import { CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput } from "./commands/CompleteSnapshotCommand";
import { GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput } from "./commands/GetSnapshotBlockCommand";
import { ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput } from "./commands/ListChangedBlocksCommand";
import { ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput } from "./commands/ListSnapshotBlocksCommand";
import { PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput } from "./commands/PutSnapshotBlockCommand";
import { StartSnapshotCommandInput, StartSnapshotCommandOutput } from "./commands/StartSnapshotCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create EBS snapshots, write data directly to
 *     		your snapshots, read data on your snapshots, and identify the differences or changes between
 *     		two snapshots. If you’re an independent software vendor (ISV) who offers backup services for
 *     		Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on
 *     		your EBS volumes through snapshots. This can be done without having to create new volumes
 *     		from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences.</p>
 *
 *     	    <p>You can create incremental snapshots directly from data on-premises into EBS volumes and the
 *     		cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can
 *     		write your on-premises data to an EBS snapshot during a disaster. Then after recovery, you can
 *     		restore it back to AWS or on-premises from the snapshot. You no longer need to build and
 *     		maintain complex mechanisms to copy data to and from Amazon EBS.</p>
 *
 *
 *         <p>This API reference provides detailed information about the actions, data types,
 *             parameters, and errors of the EBS direct APIs. For more information about the elements that
 *             make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>. For more information about the supported AWS Regions, endpoints,
 *             and service quotas for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html">Amazon Elastic Block Store Endpoints and Quotas</a> in
 *             the <i>AWS General Reference</i>.</p>
 */
export declare class EBS extends EBSClient {
    /**
     * <p>Seals and completes the snapshot after all of the required blocks of data have been
     *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
     *             cannot write new blocks to a snapshot after it has been completed.</p>
     */
    completeSnapshot(args: CompleteSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CompleteSnapshotCommandOutput>;
    completeSnapshot(args: CompleteSnapshotCommandInput, cb: (err: any, data?: CompleteSnapshotCommandOutput) => void): void;
    completeSnapshot(args: CompleteSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
     */
    getSnapshotBlock(args: GetSnapshotBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotBlockCommandOutput>;
    getSnapshotBlock(args: GetSnapshotBlockCommandInput, cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void): void;
    getSnapshotBlock(args: GetSnapshotBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void): void;
    /**
     * <p>Returns information about the blocks that are different between two
     *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
     */
    listChangedBlocks(args: ListChangedBlocksCommandInput, options?: __HttpHandlerOptions): Promise<ListChangedBlocksCommandOutput>;
    listChangedBlocks(args: ListChangedBlocksCommandInput, cb: (err: any, data?: ListChangedBlocksCommandOutput) => void): void;
    listChangedBlocks(args: ListChangedBlocksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChangedBlocksCommandOutput) => void): void;
    /**
     * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
     */
    listSnapshotBlocks(args: ListSnapshotBlocksCommandInput, options?: __HttpHandlerOptions): Promise<ListSnapshotBlocksCommandOutput>;
    listSnapshotBlocks(args: ListSnapshotBlocksCommandInput, cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void): void;
    listSnapshotBlocks(args: ListSnapshotBlocksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void): void;
    /**
     * <p>Writes a block of data to a snapshot. If the specified block contains
     *             data, the existing data is overwritten. The target snapshot must be in the
     *                 <code>pending</code> state.</p>
     *     	    <p>Data written to a snapshot must be aligned with 512-byte sectors.</p>
     */
    putSnapshotBlock(args: PutSnapshotBlockCommandInput, options?: __HttpHandlerOptions): Promise<PutSnapshotBlockCommandOutput>;
    putSnapshotBlock(args: PutSnapshotBlockCommandInput, cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void): void;
    putSnapshotBlock(args: PutSnapshotBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state
     *             after the request completes. </p>
     *         <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to
     *             write blocks of data to the snapshot.</p>
     */
    startSnapshot(args: StartSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<StartSnapshotCommandOutput>;
    startSnapshot(args: StartSnapshotCommandInput, cb: (err: any, data?: StartSnapshotCommandOutput) => void): void;
    startSnapshot(args: StartSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSnapshotCommandOutput) => void): void;
}
