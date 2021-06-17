"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopySnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CopySnapshotCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElastiCacheClient";
        const commandName = "CopySnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopySnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopySnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCopySnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCopySnapshotCommand(output, context);
    }
}
exports.CopySnapshotCommand = CopySnapshotCommand;
//# sourceMappingURL=CopySnapshotCommand.js.map