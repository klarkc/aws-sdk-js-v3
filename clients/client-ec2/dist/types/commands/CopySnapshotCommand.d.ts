import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopySnapshotCommandInput extends CopySnapshotRequest {
}
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {
}
/**
 * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy a
 *       snapshot within the same Region, from one Region to another, or from a Region to an Outpost.
 *       You can't copy a snapshot from an Outpost to a Region, from one Outpost to another, or within
 *       the same Outpost.</p>
 *          <p>You can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs).</p>
 *
 *
 *          <p>When copying snapshots to a Region, copies of encrypted EBS snapshots remain encrypted.
 *     	Copies of unencrypted snapshots remain unencrypted, unless you enable encryption for the
 *     	snapshot copy operation. By default, encrypted snapshot copies use the default AWS Key Management Service (AWS KMS)
 *     	customer master key (CMK); however, you can specify a different CMK. To copy an encrypted
 *     	snapshot that has been shared from another account, you must have permissions for the CMK
 *     	used to encrypt the snapshot.</p>
 *
 *   	      <p>Snapshots copied to an Outpost are encrypted by default using the default
 *   		encryption key for the Region, or a different key that you specify in the request using
 *   		<b>KmsKeyId</b>. Outposts do not support unencrypted
 *   		snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
 *   			Amazon EBS local snapshots on Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not
 *       be used for any purpose.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copying an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopySnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopySnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopySnapshotCommand extends $Command<CopySnapshotCommandInput, CopySnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CopySnapshotCommandInput;
    constructor(input: CopySnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
