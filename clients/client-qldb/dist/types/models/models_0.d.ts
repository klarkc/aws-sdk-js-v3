import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface CancelJournalKinesisStreamRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The unique ID that QLDB assigns to each QLDB journal stream.</p>
     */
    StreamId: string | undefined;
}
export declare namespace CancelJournalKinesisStreamRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJournalKinesisStreamRequest) => any;
}
export interface CancelJournalKinesisStreamResponse {
    /**
     * <p>The unique ID that QLDB assigns to each QLDB journal stream.</p>
     */
    StreamId?: string;
}
export declare namespace CancelJournalKinesisStreamResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJournalKinesisStreamResponse) => any;
}
/**
 * <p>One or more parameters in the request aren't valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The name of the invalid parameter.</p>
     */
    ParameterName?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
    /**
     * <p>The name of the resource.</p>
     */
    ResourceName?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The operation failed because a condition wasn't satisfied in advance.</p>
 */
export interface ResourcePreconditionNotMetException extends __SmithyException, $MetadataBearer {
    name: "ResourcePreconditionNotMetException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
    /**
     * <p>The name of the resource.</p>
     */
    ResourceName?: string;
}
export declare namespace ResourcePreconditionNotMetException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourcePreconditionNotMetException) => any;
}
export declare enum PermissionsMode {
    ALLOW_ALL = "ALLOW_ALL",
    STANDARD = "STANDARD"
}
export interface CreateLedgerRequest {
    /**
     * <p>The name of the ledger that you want to create. The name must be unique among all of
     *          your ledgers in the current AWS Region.</p>
     *          <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a>
     *          in the <i>Amazon QLDB Developer Guide</i>.</p>
     */
    Name: string | undefined;
    /**
     * <p>The key-value pairs to add as tags to the ledger that you want to create. Tag keys are
     *          case sensitive. Tag values are case sensitive and can be null.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The permissions mode to assign to the ledger that you want to create. This parameter can
     *          have one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with
     *                API-level granularity for ledgers.</p>
     *                <p>This mode allows users who have <code>SendCommand</code> permissions for this
     *                ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in
     *                the specified ledger. This mode disregards any table-level or command-level IAM
     *                permissions policies that you create for the ledger.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that
     *                enables access control with finer granularity for ledgers, tables, and PartiQL
     *                commands.</p>
     *                <p>By default, this mode denies all user requests to run any PartiQL commands on any
     *                tables in this ledger. To allow PartiQL commands to run, you must create IAM
     *                permissions policies for specific table resources and PartiQL actions, in addition to
     *                   <code>SendCommand</code> API permissions for the ledger.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize
     *             the security of your ledger data.</p>
     *          </note>
     */
    PermissionsMode: PermissionsMode | string | undefined;
    /**
     * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
     *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    DeletionProtection?: boolean;
}
export declare namespace CreateLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLedgerRequest) => any;
}
export declare enum LedgerState {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING",
    DELETED = "DELETED",
    DELETING = "DELETING"
}
export interface CreateLedgerResponse {
    /**
     * <p>The name of the ledger.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the ledger.</p>
     */
    Arn?: string;
    /**
     * <p>The current status of the ledger.</p>
     */
    State?: LedgerState | string;
    /**
     * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
     *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
     */
    CreationDateTime?: Date;
    /**
     * <p>The permissions mode of the ledger that you created.</p>
     */
    PermissionsMode?: PermissionsMode | string;
    /**
     * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
     *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    DeletionProtection?: boolean;
}
export declare namespace CreateLedgerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLedgerResponse) => any;
}
/**
 * <p>You have reached the limit on the maximum number of resources allowed.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
    /**
     * <p>The name of the resource.</p>
     */
    ResourceName?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>The specified resource can't be modified at this time.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
    /**
     * <p>The name of the resource.</p>
     */
    ResourceName?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
export interface DeleteLedgerRequest {
    /**
     * <p>The name of the ledger that you want to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLedgerRequest) => any;
}
export interface DescribeJournalKinesisStreamRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The unique ID that QLDB assigns to each QLDB journal stream.</p>
     */
    StreamId: string | undefined;
}
export declare namespace DescribeJournalKinesisStreamRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJournalKinesisStreamRequest) => any;
}
export declare enum ErrorCause {
    IAM_PERMISSION_REVOKED = "IAM_PERMISSION_REVOKED",
    KINESIS_STREAM_NOT_FOUND = "KINESIS_STREAM_NOT_FOUND"
}
/**
 * <p>The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal
 *          stream.</p>
 */
export interface KinesisConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the Kinesis data stream resource.</p>
     */
    StreamArn: string | undefined;
    /**
     * <p>Enables QLDB to publish multiple data records in a single Kinesis Data Streams record. To learn more,
     *          see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-concepts.html">KPL Key
     *             Concepts</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
     */
    AggregationEnabled?: boolean;
}
export declare namespace KinesisConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KinesisConfiguration) => any;
}
export declare enum StreamStatus {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    IMPAIRED = "IMPAIRED"
}
/**
 * <p>The information about an Amazon QLDB journal stream, including the Amazon Resource Name
 *          (ARN), stream name, creation time, current status, and the parameters of your original
 *          stream creation request.</p>
 */
export interface JournalKinesisStreamDescription {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The date and time, in epoch time format, when the QLDB journal stream was created.
     *          (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970
     *          UTC.)</p>
     */
    CreationTime?: Date;
    /**
     * <p>The inclusive start date and time from which to start streaming journal data.</p>
     */
    InclusiveStartTime?: Date;
    /**
     * <p>The exclusive date and time that specifies when the stream ends. If this parameter is
     *          blank, the stream runs indefinitely until you cancel it.</p>
     */
    ExclusiveEndTime?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
     *          journal stream to write data records to a Kinesis Data Streams resource.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The unique ID that QLDB assigns to each QLDB journal stream.</p>
     */
    StreamId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the QLDB journal stream.</p>
     */
    Arn?: string;
    /**
     * <p>The current state of the QLDB journal stream.</p>
     */
    Status: StreamStatus | string | undefined;
    /**
     * <p>The configuration settings of the Amazon Kinesis Data Streams destination for your QLDB journal
     *          stream.</p>
     */
    KinesisConfiguration: KinesisConfiguration | undefined;
    /**
     * <p>The error message that describes the reason that a stream has a status of
     *             <code>IMPAIRED</code> or <code>FAILED</code>. This is not applicable to streams that
     *          have other status values.</p>
     */
    ErrorCause?: ErrorCause | string;
    /**
     * <p>The user-defined name of the QLDB journal stream.</p>
     */
    StreamName: string | undefined;
}
export declare namespace JournalKinesisStreamDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JournalKinesisStreamDescription) => any;
}
export interface DescribeJournalKinesisStreamResponse {
    /**
     * <p>Information about the QLDB journal stream returned by a
     *             <code>DescribeJournalS3Export</code> request.</p>
     */
    Stream?: JournalKinesisStreamDescription;
}
export declare namespace DescribeJournalKinesisStreamResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJournalKinesisStreamResponse) => any;
}
export interface DescribeJournalS3ExportRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The unique ID of the journal export job that you want to describe.</p>
     */
    ExportId: string | undefined;
}
export declare namespace DescribeJournalS3ExportRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJournalS3ExportRequest) => any;
}
export declare enum S3ObjectEncryptionType {
    NO_ENCRYPTION = "NO_ENCRYPTION",
    SSE_KMS = "SSE_KMS",
    SSE_S3 = "SSE_S3"
}
/**
 * <p>The encryption settings that are used by a journal export job to write data in an
 *          Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface S3EncryptionConfiguration {
    /**
     * <p>The Amazon S3 object encryption type.</p>
     *          <p>To learn more about server-side encryption options in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data
     *             Using Server-Side Encryption</a> in the <i>Amazon S3 Developer
     *          Guide</i>.</p>
     */
    ObjectEncryptionType: S3ObjectEncryptionType | string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for a symmetric customer master key (CMK) in AWS Key
     *          Management Service (AWS KMS). Amazon QLDB does not support asymmetric CMKs.</p>
     *          <p>You must provide a <code>KmsKeyArn</code> if you specify <code>SSE_KMS</code> as the
     *             <code>ObjectEncryptionType</code>.</p>
     *          <p>
     *             <code>KmsKeyArn</code> is not required if you specify <code>SSE_S3</code> as the
     *             <code>ObjectEncryptionType</code>.</p>
     */
    KmsKeyArn?: string;
}
export declare namespace S3EncryptionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3EncryptionConfiguration) => any;
}
/**
 * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
 *          contents.</p>
 */
export interface S3ExportConfiguration {
    /**
     * <p>The Amazon S3 bucket name in which a journal export job writes the journal contents.</p>
     *          <p>The bucket name must comply with the Amazon S3 bucket naming conventions. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and
     *             Limitations</a> in the <i>Amazon S3 Developer Guide</i>.</p>
     */
    Bucket: string | undefined;
    /**
     * <p>The prefix for the Amazon S3 bucket in which a journal export job writes the journal
     *          contents.</p>
     *          <p>The prefix must comply with Amazon S3 key naming rules and restrictions. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3 Developer
     *          Guide</i>.</p>
     *          <p>The following are examples of valid <code>Prefix</code> values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>JournalExports-ForMyLedger/Testing/</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JournalExports</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>My:Tests/</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Prefix: string | undefined;
    /**
     * <p>The encryption settings that are used by a journal export job to write data in an Amazon S3
     *          bucket.</p>
     */
    EncryptionConfiguration: S3EncryptionConfiguration | undefined;
}
export declare namespace S3ExportConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ExportConfiguration) => any;
}
export declare enum ExportStatus {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS"
}
/**
 * <p>The information about a journal export job, including the ledger name, export ID, when
 *          it was created, current status, and its start and end time export parameters.</p>
 */
export interface JournalS3ExportDescription {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The unique ID of the journal export job.</p>
     */
    ExportId: string | undefined;
    /**
     * <p>The date and time, in epoch time format, when the export job was created. (Epoch time
     *          format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
     */
    ExportCreationTime: Date | undefined;
    /**
     * <p>The current state of the journal export job.</p>
     */
    Status: ExportStatus | string | undefined;
    /**
     * <p>The inclusive start date and time for the range of journal contents that are specified
     *          in the original export request.</p>
     */
    InclusiveStartTime: Date | undefined;
    /**
     * <p>The exclusive end date and time for the range of journal contents that are specified in
     *          the original export request.</p>
     */
    ExclusiveEndTime: Date | undefined;
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
     *          contents.</p>
     */
    S3ExportConfiguration: S3ExportConfiguration | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
     *          journal export job to do the following:</p>
     *          <ul>
     *             <li>
     *                <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p>
     *             </li>
     *             <li>
     *                <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS
     *                KMS) for server-side encryption of your exported data.</p>
     *             </li>
     *          </ul>
     */
    RoleArn: string | undefined;
}
export declare namespace JournalS3ExportDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JournalS3ExportDescription) => any;
}
export interface DescribeJournalS3ExportResponse {
    /**
     * <p>Information about the journal export job returned by a
     *             <code>DescribeJournalS3Export</code> request.</p>
     */
    ExportDescription: JournalS3ExportDescription | undefined;
}
export declare namespace DescribeJournalS3ExportResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJournalS3ExportResponse) => any;
}
export interface DescribeLedgerRequest {
    /**
     * <p>The name of the ledger that you want to describe.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLedgerRequest) => any;
}
export interface DescribeLedgerResponse {
    /**
     * <p>The name of the ledger.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the ledger.</p>
     */
    Arn?: string;
    /**
     * <p>The current status of the ledger.</p>
     */
    State?: LedgerState | string;
    /**
     * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
     *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
     */
    CreationDateTime?: Date;
    /**
     * <p>The permissions mode of the ledger.</p>
     */
    PermissionsMode?: PermissionsMode | string;
    /**
     * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
     *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    DeletionProtection?: boolean;
}
export declare namespace DescribeLedgerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLedgerResponse) => any;
}
export interface ExportJournalToS3Request {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The inclusive start date and time for the range of journal contents that you want to
     *          export.</p>
     *          <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time
     *          format and in Universal Coordinated Time (UTC). For example:
     *             <code>2019-06-13T21:36:34Z</code>
     *          </p>
     *          <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p>
     *          <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's
     *             <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's
     *             <code>CreationDateTime</code>.</p>
     */
    InclusiveStartTime: Date | undefined;
    /**
     * <p>The exclusive end date and time for the range of journal contents that you want to
     *          export.</p>
     *          <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format
     *          and in Universal Coordinated Time (UTC). For example:
     *          <code>2019-06-13T21:36:34Z</code>
     *          </p>
     *          <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and
     *          time.</p>
     */
    ExclusiveEndTime: Date | undefined;
    /**
     * <p>The configuration settings of the Amazon S3 bucket destination for your export
     *          request.</p>
     */
    S3ExportConfiguration: S3ExportConfiguration | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
     *          journal export job to do the following:</p>
     *          <ul>
     *             <li>
     *                <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p>
     *             </li>
     *             <li>
     *                <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS
     *                KMS) for server-side encryption of your exported data.</p>
     *             </li>
     *          </ul>
     */
    RoleArn: string | undefined;
}
export declare namespace ExportJournalToS3Request {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportJournalToS3Request) => any;
}
export interface ExportJournalToS3Response {
    /**
     * <p>The unique ID that QLDB assigns to each journal export job.</p>
     *          <p>To describe your export request and check the status of the job, you can use
     *             <code>ExportId</code> to call <code>DescribeJournalS3Export</code>.</p>
     */
    ExportId: string | undefined;
}
export declare namespace ExportJournalToS3Response {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportJournalToS3Response) => any;
}
/**
 * <p>A structure that can contain a value in multiple encoding formats.</p>
 */
export interface ValueHolder {
    /**
     * <p>An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.</p>
     */
    IonText?: string;
}
export declare namespace ValueHolder {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValueHolder) => any;
}
export interface GetBlockRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The location of the block that you want to request. An address is an Amazon Ion
     *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
     *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>
     *          </p>
     */
    BlockAddress: ValueHolder | undefined;
    /**
     * <p>The latest block location covered by the digest for which to request a proof. An address
     *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
     *             <code>sequenceNo</code>.</p>
     *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>
     *          </p>
     */
    DigestTipAddress?: ValueHolder;
}
export declare namespace GetBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBlockRequest) => any;
}
export interface GetBlockResponse {
    /**
     * <p>The block data object in Amazon Ion format.</p>
     */
    Block: ValueHolder | undefined;
    /**
     * <p>The proof object in Amazon Ion format returned by a <code>GetBlock</code> request. A
     *          proof contains the list of hash values required to recalculate the specified digest using a
     *          Merkle tree, starting with the specified block.</p>
     */
    Proof?: ValueHolder;
}
export declare namespace GetBlockResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBlockResponse) => any;
}
export interface GetDigestRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
}
export declare namespace GetDigestRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDigestRequest) => any;
}
export interface GetDigestResponse {
    /**
     * <p>The 256-bit hash value representing the digest returned by a <code>GetDigest</code>
     *          request.</p>
     */
    Digest: Uint8Array | undefined;
    /**
     * <p>The latest block location covered by the digest that you requested. An address is an
     *          Amazon Ion structure that has two fields: <code>strandId</code> and
     *          <code>sequenceNo</code>.</p>
     */
    DigestTipAddress: ValueHolder | undefined;
}
export declare namespace GetDigestResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDigestResponse) => any;
}
export interface GetRevisionRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The block location of the document revision to be verified. An address is an Amazon Ion
     *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
     *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>
     *          </p>
     */
    BlockAddress: ValueHolder | undefined;
    /**
     * <p>The unique ID of the document to be verified.</p>
     */
    DocumentId: string | undefined;
    /**
     * <p>The latest block location covered by the digest for which to request a proof. An address
     *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
     *             <code>sequenceNo</code>.</p>
     *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>
     *          </p>
     */
    DigestTipAddress?: ValueHolder;
}
export declare namespace GetRevisionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRevisionRequest) => any;
}
export interface GetRevisionResponse {
    /**
     * <p>The proof object in Amazon Ion format returned by a <code>GetRevision</code> request. A
     *          proof contains the list of hash values that are required to recalculate the specified
     *          digest using a Merkle tree, starting with the specified document revision.</p>
     */
    Proof?: ValueHolder;
    /**
     * <p>The document revision data object in Amazon Ion format.</p>
     */
    Revision: ValueHolder | undefined;
}
export declare namespace GetRevisionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRevisionResponse) => any;
}
export interface ListJournalKinesisStreamsForLedgerRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The maximum number of results to return in a single
     *             <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results
     *          returned might be fewer.)</p>
     */
    MaxResults?: number;
    /**
     * <p>A pagination token, indicating that you want to retrieve the next page of results. If
     *          you received a value for <code>NextToken</code> in the response from a previous
     *             <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input
     *          here.</p>
     */
    NextToken?: string;
}
export declare namespace ListJournalKinesisStreamsForLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalKinesisStreamsForLedgerRequest) => any;
}
export interface ListJournalKinesisStreamsForLedgerResponse {
    /**
     * <p>The array of QLDB journal stream descriptors that are associated with the given
     *          ledger.</p>
     */
    Streams?: JournalKinesisStreamDescription[];
    /**
     * <ul>
     *             <li>
     *                <p>If <code>NextToken</code> is empty, the last page of results has been processed
     *                and there are no more results to be retrieved.</p>
     *             </li>
     *             <li>
     *                <p>If <code>NextToken</code> is <i>not</i> empty, more results are
     *                available. To retrieve the next page of results, use the value of
     *                   <code>NextToken</code> in a subsequent
     *                   <code>ListJournalKinesisStreamsForLedger</code> call.</p>
     *             </li>
     *          </ul>
     */
    NextToken?: string;
}
export declare namespace ListJournalKinesisStreamsForLedgerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalKinesisStreamsForLedgerResponse) => any;
}
export interface ListJournalS3ExportsRequest {
    /**
     * <p>The maximum number of results to return in a single <code>ListJournalS3Exports</code>
     *          request. (The actual number of results returned might be fewer.)</p>
     */
    MaxResults?: number;
    /**
     * <p>A pagination token, indicating that you want to retrieve the next page of results. If
     *          you received a value for <code>NextToken</code> in the response from a previous
     *             <code>ListJournalS3Exports</code> call, then you should use that value as input
     *          here.</p>
     */
    NextToken?: string;
}
export declare namespace ListJournalS3ExportsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalS3ExportsRequest) => any;
}
export interface ListJournalS3ExportsResponse {
    /**
     * <p>The array of journal export job descriptions for all ledgers that are associated with
     *          the current AWS account and Region.</p>
     */
    JournalS3Exports?: JournalS3ExportDescription[];
    /**
     * <ul>
     *             <li>
     *                <p>If <code>NextToken</code> is empty, then the last page of results has been
     *                processed and there are no more results to be retrieved.</p>
     *             </li>
     *             <li>
     *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
     *                results available. To retrieve the next page of results, use the value of
     *                   <code>NextToken</code> in a subsequent <code>ListJournalS3Exports</code>
     *                call.</p>
     *             </li>
     *          </ul>
     */
    NextToken?: string;
}
export declare namespace ListJournalS3ExportsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalS3ExportsResponse) => any;
}
export interface ListJournalS3ExportsForLedgerRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The maximum number of results to return in a single
     *             <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results
     *          returned might be fewer.)</p>
     */
    MaxResults?: number;
    /**
     * <p>A pagination token, indicating that you want to retrieve the next page of results. If
     *          you received a value for <code>NextToken</code> in the response from a previous
     *             <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input
     *          here.</p>
     */
    NextToken?: string;
}
export declare namespace ListJournalS3ExportsForLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalS3ExportsForLedgerRequest) => any;
}
export interface ListJournalS3ExportsForLedgerResponse {
    /**
     * <p>The array of journal export job descriptions that are associated with the specified
     *          ledger.</p>
     */
    JournalS3Exports?: JournalS3ExportDescription[];
    /**
     * <ul>
     *             <li>
     *                <p>If <code>NextToken</code> is empty, then the last page of results has been
     *                processed and there are no more results to be retrieved.</p>
     *             </li>
     *             <li>
     *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
     *                results available. To retrieve the next page of results, use the value of
     *                   <code>NextToken</code> in a subsequent <code>ListJournalS3ExportsForLedger</code>
     *                call.</p>
     *             </li>
     *          </ul>
     */
    NextToken?: string;
}
export declare namespace ListJournalS3ExportsForLedgerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJournalS3ExportsForLedgerResponse) => any;
}
export interface ListLedgersRequest {
    /**
     * <p>The maximum number of results to return in a single <code>ListLedgers</code> request.
     *          (The actual number of results returned might be fewer.)</p>
     */
    MaxResults?: number;
    /**
     * <p>A pagination token, indicating that you want to retrieve the next page of results. If
     *          you received a value for <code>NextToken</code> in the response from a previous
     *             <code>ListLedgers</code> call, then you should use that value as input here.</p>
     */
    NextToken?: string;
}
export declare namespace ListLedgersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLedgersRequest) => any;
}
/**
 * <p>Information about a ledger, including its name, state, and when it was created.</p>
 */
export interface LedgerSummary {
    /**
     * <p>The name of the ledger.</p>
     */
    Name?: string;
    /**
     * <p>The current status of the ledger.</p>
     */
    State?: LedgerState | string;
    /**
     * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
     *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
     */
    CreationDateTime?: Date;
}
export declare namespace LedgerSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LedgerSummary) => any;
}
export interface ListLedgersResponse {
    /**
     * <p>The array of ledger summaries that are associated with the current AWS account and
     *          Region.</p>
     */
    Ledgers?: LedgerSummary[];
    /**
     * <p>A pagination token, indicating whether there are more results available:</p>
     *          <ul>
     *             <li>
     *                <p>If <code>NextToken</code> is empty, then the last page of results has been
     *                processed and there are no more results to be retrieved.</p>
     *             </li>
     *             <li>
     *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
     *                results available. To retrieve the next page of results, use the value of
     *                   <code>NextToken</code> in a subsequent <code>ListLedgers</code> call.</p>
     *             </li>
     *          </ul>
     */
    NextToken?: string;
}
export declare namespace ListLedgersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLedgersResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for which you want to list the tags. For example:</p>
     *          <p>
     *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
     *          </p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The tags that are currently associated with the specified Amazon QLDB resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface StreamJournalToKinesisRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    LedgerName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
     *          journal stream to write data records to a Kinesis Data Streams resource.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The key-value pairs to add as tags to the stream that you want to create. Tag keys are
     *          case sensitive. Tag values are case sensitive and can be null.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The inclusive start date and time from which to start streaming journal data. This
     *          parameter must be in <code>ISO 8601</code> date and time format and in Universal
     *          Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>
     *          </p>
     *          <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before
     *             <code>ExclusiveEndTime</code>.</p>
     *          <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's
     *             <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's
     *             <code>CreationDateTime</code>.</p>
     */
    InclusiveStartTime: Date | undefined;
    /**
     * <p>The exclusive date and time that specifies when the stream ends. If you don't define
     *          this parameter, the stream runs indefinitely until you cancel it.</p>
     *          <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format
     *          and in Universal Coordinated Time (UTC). For example:
     *          <code>2019-06-13T21:36:34Z</code>
     *          </p>
     */
    ExclusiveEndTime?: Date;
    /**
     * <p>The configuration settings of the Kinesis Data Streams destination for your stream request.</p>
     */
    KinesisConfiguration: KinesisConfiguration | undefined;
    /**
     * <p>The name that you want to assign to the QLDB journal stream. User-defined names can
     *          help identify and indicate the purpose of a stream.</p>
     *          <p>Your stream name must be unique among other <i>active</i> streams for a
     *          given ledger. Stream names have the same naming constraints as ledger names, as defined in
     *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer
     *          Guide</i>.</p>
     */
    StreamName: string | undefined;
}
export declare namespace StreamJournalToKinesisRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamJournalToKinesisRequest) => any;
}
export interface StreamJournalToKinesisResponse {
    /**
     * <p>The unique ID that QLDB assigns to each QLDB journal stream.</p>
     */
    StreamId?: string;
}
export declare namespace StreamJournalToKinesisResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamJournalToKinesisResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p>
     *          <p>
     *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
     *          </p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case
     *          sensitive. If you specify a key that already exists for the resource, your request fails
     *          and returns an error. Tag values are case sensitive and can be null.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) from which you want to remove the tags. For
     *          example:</p>
     *          <p>
     *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
     *          </p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The list of tag keys that you want to remove.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateLedgerRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
     *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    DeletionProtection?: boolean;
}
export declare namespace UpdateLedgerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLedgerRequest) => any;
}
export interface UpdateLedgerResponse {
    /**
     * <p>The name of the ledger.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the ledger.</p>
     */
    Arn?: string;
    /**
     * <p>The current status of the ledger.</p>
     */
    State?: LedgerState | string;
    /**
     * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
     *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
     */
    CreationDateTime?: Date;
    /**
     * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
     *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
     *          <p>If deletion protection is enabled, you must first disable it before you can delete the
     *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
     *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
     *          console disables deletion protection for you when you use it to delete a ledger.</p>
     */
    DeletionProtection?: boolean;
}
export declare namespace UpdateLedgerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLedgerResponse) => any;
}
export interface UpdateLedgerPermissionsModeRequest {
    /**
     * <p>The name of the ledger.</p>
     */
    Name: string | undefined;
    /**
     * <p>The permissions mode to assign to the ledger. This parameter can have one of the
     *          following values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with
     *                API-level granularity for ledgers.</p>
     *                <p>This mode allows users who have <code>SendCommand</code> permissions for this
     *                ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in
     *                the specified ledger. This mode disregards any table-level or command-level IAM
     *                permissions policies that you create for the ledger.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that
     *                enables access control with finer granularity for ledgers, tables, and PartiQL
     *                commands.</p>
     *                <p>By default, this mode denies all user requests to run any PartiQL commands on any
     *                tables in this ledger. To allow PartiQL commands to run, you must create IAM
     *                permissions policies for specific table resources and PartiQL actions, in addition to
     *                   <code>SendCommand</code> API permissions for the ledger.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize
     *             the security of your ledger data.</p>
     *          </note>
     */
    PermissionsMode: PermissionsMode | string | undefined;
}
export declare namespace UpdateLedgerPermissionsModeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLedgerPermissionsModeRequest) => any;
}
export interface UpdateLedgerPermissionsModeResponse {
    /**
     * <p>The name of the ledger.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the ledger.</p>
     */
    Arn?: string;
    /**
     * <p>The current permissions mode of the ledger.</p>
     */
    PermissionsMode?: PermissionsMode | string;
}
export declare namespace UpdateLedgerPermissionsModeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLedgerPermissionsModeResponse) => any;
}
