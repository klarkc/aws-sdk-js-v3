import { QLDBClient } from "./QLDBClient";
import { CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput } from "./commands/CancelJournalKinesisStreamCommand";
import { CreateLedgerCommandInput, CreateLedgerCommandOutput } from "./commands/CreateLedgerCommand";
import { DeleteLedgerCommandInput, DeleteLedgerCommandOutput } from "./commands/DeleteLedgerCommand";
import { DescribeJournalKinesisStreamCommandInput, DescribeJournalKinesisStreamCommandOutput } from "./commands/DescribeJournalKinesisStreamCommand";
import { DescribeJournalS3ExportCommandInput, DescribeJournalS3ExportCommandOutput } from "./commands/DescribeJournalS3ExportCommand";
import { DescribeLedgerCommandInput, DescribeLedgerCommandOutput } from "./commands/DescribeLedgerCommand";
import { ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput } from "./commands/ExportJournalToS3Command";
import { GetBlockCommandInput, GetBlockCommandOutput } from "./commands/GetBlockCommand";
import { GetDigestCommandInput, GetDigestCommandOutput } from "./commands/GetDigestCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import { ListJournalKinesisStreamsForLedgerCommandInput, ListJournalKinesisStreamsForLedgerCommandOutput } from "./commands/ListJournalKinesisStreamsForLedgerCommand";
import { ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput } from "./commands/ListJournalS3ExportsCommand";
import { ListJournalS3ExportsForLedgerCommandInput, ListJournalS3ExportsForLedgerCommandOutput } from "./commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommandInput, ListLedgersCommandOutput } from "./commands/ListLedgersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput } from "./commands/StreamJournalToKinesisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLedgerCommandInput, UpdateLedgerCommandOutput } from "./commands/UpdateLedgerCommand";
import { UpdateLedgerPermissionsModeCommandInput, UpdateLedgerPermissionsModeCommandOutput } from "./commands/UpdateLedgerPermissionsModeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The control plane for Amazon QLDB</p>
 */
export declare class QLDB extends QLDBClient {
    /**
     * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
     *          status must be <code>ACTIVE</code>.</p>
     *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
     *          subject to a 7-day retention period, so they are automatically deleted after this limit
     *          expires.</p>
     */
    cancelJournalKinesisStream(args: CancelJournalKinesisStreamCommandInput, options?: __HttpHandlerOptions): Promise<CancelJournalKinesisStreamCommandOutput>;
    cancelJournalKinesisStream(args: CancelJournalKinesisStreamCommandInput, cb: (err: any, data?: CancelJournalKinesisStreamCommandOutput) => void): void;
    cancelJournalKinesisStream(args: CancelJournalKinesisStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJournalKinesisStreamCommandOutput) => void): void;
    /**
     * <p>Creates a new ledger in your AWS account.</p>
     */
    createLedger(args: CreateLedgerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLedgerCommandOutput>;
    createLedger(args: CreateLedgerCommandInput, cb: (err: any, data?: CreateLedgerCommandOutput) => void): void;
    createLedger(args: CreateLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLedgerCommandOutput) => void): void;
    /**
     * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    deleteLedger(args: DeleteLedgerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLedgerCommandOutput>;
    deleteLedger(args: DeleteLedgerCommandInput, cb: (err: any, data?: DeleteLedgerCommandOutput) => void): void;
    deleteLedger(args: DeleteLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLedgerCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
     *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
     *          the parameters of your original stream creation request.</p>
     */
    describeJournalKinesisStream(args: DescribeJournalKinesisStreamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJournalKinesisStreamCommandOutput>;
    describeJournalKinesisStream(args: DescribeJournalKinesisStreamCommandInput, cb: (err: any, data?: DescribeJournalKinesisStreamCommandOutput) => void): void;
    describeJournalKinesisStream(args: DescribeJournalKinesisStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJournalKinesisStreamCommandOutput) => void): void;
    /**
     * <p>Returns information about a journal export job, including the ledger name, export ID,
     *          when it was created, current status, and its start and end time export parameters.</p>
     *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
     *          Guide</i>.</p>
     *          <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws
     *             <code>ResourceNotFoundException</code>.</p>
     *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
     *             <code>ResourceNotFoundException</code>.</p>
     */
    describeJournalS3Export(args: DescribeJournalS3ExportCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJournalS3ExportCommandOutput>;
    describeJournalS3Export(args: DescribeJournalS3ExportCommandInput, cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void): void;
    describeJournalS3Export(args: DescribeJournalS3ExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void): void;
    /**
     * <p>Returns information about a ledger, including its state and when it was created.</p>
     */
    describeLedger(args: DescribeLedgerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLedgerCommandOutput>;
    describeLedger(args: DescribeLedgerCommandInput, cb: (err: any, data?: DescribeLedgerCommandOutput) => void): void;
    describeLedger(args: DescribeLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLedgerCommandOutput) => void): void;
    /**
     * <p>Exports journal contents within a date and time range from a ledger into a specified
     *          Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format.</p>
     *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
     *             <code>ResourceNotFoundException</code>.</p>
     *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
     *          throws <code>ResourcePreconditionNotMetException</code>.</p>
     *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
     *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
     */
    exportJournalToS3(args: ExportJournalToS3CommandInput, options?: __HttpHandlerOptions): Promise<ExportJournalToS3CommandOutput>;
    exportJournalToS3(args: ExportJournalToS3CommandInput, cb: (err: any, data?: ExportJournalToS3CommandOutput) => void): void;
    exportJournalToS3(args: ExportJournalToS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportJournalToS3CommandOutput) => void): void;
    /**
     * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
     *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
     *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
     *             <i>Amazon QLDB Developer Guide</i>.</p>
     *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
     *             <code>ResourceNotFoundException</code>.</p>
     *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
     *             <code>ResourcePreconditionNotMetException</code>.</p>
     *          <p>If no block exists with the specified address, then throws
     *             <code>InvalidParameterException</code>.</p>
     */
    getBlock(args: GetBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetBlockCommandOutput>;
    getBlock(args: GetBlockCommandInput, cb: (err: any, data?: GetBlockCommandOutput) => void): void;
    getBlock(args: GetBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlockCommandOutput) => void): void;
    /**
     * <p>Returns the digest of a ledger at the latest committed block in the journal. The
     *          response includes a 256-bit hash value and a block address.</p>
     */
    getDigest(args: GetDigestCommandInput, options?: __HttpHandlerOptions): Promise<GetDigestCommandOutput>;
    getDigest(args: GetDigestCommandInput, cb: (err: any, data?: GetDigestCommandOutput) => void): void;
    getDigest(args: GetDigestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDigestCommandOutput) => void): void;
    /**
     * <p>Returns a revision data object for a specified document ID and block address. Also
     *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
     *          is provided.</p>
     */
    getRevision(args: GetRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetRevisionCommandOutput>;
    getRevision(args: GetRevisionCommandInput, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
    getRevision(args: GetRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
    /**
     * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The
     *          output of each stream descriptor includes the same details that are returned by
     *             <code>DescribeJournalKinesisStream</code>.</p>
     *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
     *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
     *          multiple times.</p>
     */
    listJournalKinesisStreamsForLedger(args: ListJournalKinesisStreamsForLedgerCommandInput, options?: __HttpHandlerOptions): Promise<ListJournalKinesisStreamsForLedgerCommandOutput>;
    listJournalKinesisStreamsForLedger(args: ListJournalKinesisStreamsForLedgerCommandInput, cb: (err: any, data?: ListJournalKinesisStreamsForLedgerCommandOutput) => void): void;
    listJournalKinesisStreamsForLedger(args: ListJournalKinesisStreamsForLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJournalKinesisStreamsForLedgerCommandOutput) => void): void;
    /**
     * <p>Returns an array of journal export job descriptions for all ledgers that are associated
     *          with the current AWS account and Region.</p>
     *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
     *          you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple
     *          times.</p>
     *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
     *          Guide</i>.</p>
     */
    listJournalS3Exports(args: ListJournalS3ExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListJournalS3ExportsCommandOutput>;
    listJournalS3Exports(args: ListJournalS3ExportsCommandInput, cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void): void;
    listJournalS3Exports(args: ListJournalS3ExportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void): void;
    /**
     * <p>Returns an array of journal export job descriptions for a specified ledger.</p>
     *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
     *          you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code>
     *          multiple times.</p>
     *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
     *          Guide</i>.</p>
     */
    listJournalS3ExportsForLedger(args: ListJournalS3ExportsForLedgerCommandInput, options?: __HttpHandlerOptions): Promise<ListJournalS3ExportsForLedgerCommandOutput>;
    listJournalS3ExportsForLedger(args: ListJournalS3ExportsForLedgerCommandInput, cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void): void;
    listJournalS3ExportsForLedger(args: ListJournalS3ExportsForLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void): void;
    /**
     * <p>Returns an array of ledger summaries that are associated with the current AWS account
     *          and Region.</p>
     *          <p>This action returns a maximum of 100 items and is paginated so that you can
     *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
     */
    listLedgers(args: ListLedgersCommandInput, options?: __HttpHandlerOptions): Promise<ListLedgersCommandOutput>;
    listLedgers(args: ListLedgersCommandInput, cb: (err: any, data?: ListLedgersCommandOutput) => void): void;
    listLedgers(args: ListLedgersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLedgersCommandOutput) => void): void;
    /**
     * <p>Returns all tags for a specified Amazon QLDB resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
     *          document revision that is committed to the ledger's journal and delivers the data to a
     *          specified Amazon Kinesis Data Streams resource.</p>
     */
    streamJournalToKinesis(args: StreamJournalToKinesisCommandInput, options?: __HttpHandlerOptions): Promise<StreamJournalToKinesisCommandOutput>;
    streamJournalToKinesis(args: StreamJournalToKinesisCommandInput, cb: (err: any, data?: StreamJournalToKinesisCommandOutput) => void): void;
    streamJournalToKinesis(args: StreamJournalToKinesisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StreamJournalToKinesisCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to a specified Amazon QLDB resource.</p>
     *          <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
     *          resource, your request fails and returns an error.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50
     *          tag keys to remove.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates properties on a ledger.</p>
     */
    updateLedger(args: UpdateLedgerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLedgerCommandOutput>;
    updateLedger(args: UpdateLedgerCommandInput, cb: (err: any, data?: UpdateLedgerCommandOutput) => void): void;
    updateLedger(args: UpdateLedgerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLedgerCommandOutput) => void): void;
    /**
     * <p>Updates the permissions mode of a ledger.</p>
     */
    updateLedgerPermissionsMode(args: UpdateLedgerPermissionsModeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLedgerPermissionsModeCommandOutput>;
    updateLedgerPermissionsMode(args: UpdateLedgerPermissionsModeCommandInput, cb: (err: any, data?: UpdateLedgerPermissionsModeCommandOutput) => void): void;
    updateLedgerPermissionsMode(args: UpdateLedgerPermissionsModeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLedgerPermissionsModeCommandOutput) => void): void;
}
