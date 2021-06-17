import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CopySnapshotMessage, CopySnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopySnapshotCommandInput extends CopySnapshotMessage {
}
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {
}
/**
 * <p>Makes a copy of an existing snapshot.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 *
 *         <important>
 *             <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation
 *                 can create their own Amazon S3 buckets and copy snapshots to it.
 *                 To control access to your snapshots, use an IAM policy to control who has the ability to use
 *                 the <code>CopySnapshot</code> operation.
 *                 For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a>
 *                 and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication & Access Control</a>.</p>
 *          </important>
 *
 *         <p>You could receive the following error messages.</p>
 *         <p class="title">
 *             <b>Error Messages</b>
 *          </p>
 *          <ul>
 *             <li>
 *                 <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s is outside of the region.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s does not exist.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s is not owned by the authenticated user.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message:</b>
 *                     The authenticated user does not have sufficient permissions to perform the desired activity.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Contact your system administrator to get the needed permissions.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s already contains an object with key %s.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Give the <code>TargetSnapshotName</code> a new and unique value.
 *                     If exporting a snapshot,
 *                     you could alternatively create a new Amazon S3 bucket
 *                     and use this same value for <code>TargetSnapshotName</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Add List and Read permissions on the bucket.
 *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Add Upload/Delete permissions on the bucket.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p>
 *                 <p>
 *                   <b>Solution:</b>
 *                     Add View Permissions on the bucket.
 *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopySnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopySnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopySnapshotCommand extends $Command<CopySnapshotCommandInput, CopySnapshotCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CopySnapshotCommandInput;
    constructor(input: CopySnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
