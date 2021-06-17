import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSnapshotRequest, Snapshot } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {
}
export interface CreateSnapshotCommandOutput extends Snapshot, __MetadataBearer {
}
/**
 * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for
 *   	backups, to make copies of EBS volumes, and to save data before shutting down an
 *   	instance.</p>
 *
 *
 *          <p>You can create snapshots of volumes in a Region and volumes on an Outpost. If you
 *     	create a snapshot of a volume in a Region, the snapshot must be stored in the same
 *     	Region as the volume. If you create a snapshot of a volume on an Outpost, the snapshot
 *     	can be stored on the same Outpost as the volume, or in the Region for that Outpost.</p>
 *
 *          <p>When a snapshot is created, any AWS Marketplace product codes that are associated with the
 *       source volume are propagated to the snapshot.</p>
 *          <p>You can take a snapshot of an attached volume that is in use. However, snapshots only
 *       capture data that has been written to your EBS volume at the time the snapshot command is
 *       issued; this might exclude any data that has been cached by any applications or the operating
 *       system. If you can pause any file systems on the volume long enough to take a snapshot, your
 *       snapshot should be complete. However, if you cannot pause all file writes to the volume, you
 *       should unmount the volume from within the instance, issue the snapshot command, and then
 *       remount the volume to ensure a consistent and complete snapshot. You may remount and use your
 *       volume while the snapshot status is <code>pending</code>.</p>
 *          <p>To create a snapshot for EBS volumes that serve as root devices, you should stop the
 *       instance before taking the snapshot.</p>
 *          <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that
 *       are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes
 *       and any associated snapshots always remain protected.</p>
 *          <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSnapshotCommand extends $Command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSnapshotCommandInput;
    constructor(input: CreateSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
