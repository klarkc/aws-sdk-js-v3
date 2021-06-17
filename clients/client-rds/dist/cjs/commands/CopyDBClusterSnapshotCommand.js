"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyDBClusterSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_sdk_rds_1 = require("@aws-sdk/middleware-sdk-rds");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Copies a snapshot of a DB cluster.</p>
 *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code>
 *           must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
 *
 *          <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action
 *           is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region,
 *           you must provide the following values:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to
 *               encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PreSignedUrl</code> -  A URL that contains a Signature Version 4 signed request for the
 *               <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from.
 *               The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the
 *               source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p>
 *               <p>The pre-signed URL request must contain the following parameter values:</p>
 *               <ul>
 *                   <li>
 *                      <p>
 *                         <code>KmsKeyId</code> - The AWS KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB
 *                       cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code>
 *                       action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot is to be created in.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
 *                       snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example,
 *                       if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
 *                       looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
 *                   </li>
 *                </ul>
 *               <p>To learn how to generate a Signature Version 4 signed request, see
 *
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
 *                       Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
 *                       Signature Version 4 Signing Process</a>.</p>
 *               <note>
 *                   <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
 *                       instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
 *                       request for the operation that can be executed in the source AWS Region.</p>
 *               </note>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied.
 *               This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p>
 *             </li>
 *          </ul>
 *          <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified
 *           by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p>
 *          <p>For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html">
 *               Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CopyDBClusterSnapshotCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_sdk_rds_1.getCrossRegionPresignedUrlPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "CopyDBClusterSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopyDBClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopyDBClusterSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCopyDBClusterSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCopyDBClusterSnapshotCommand(output, context);
    }
}
exports.CopyDBClusterSnapshotCommand = CopyDBClusterSnapshotCommand;
//# sourceMappingURL=CopyDBClusterSnapshotCommand.js.map