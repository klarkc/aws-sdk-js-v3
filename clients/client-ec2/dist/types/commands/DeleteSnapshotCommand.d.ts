import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSnapshotRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {
}
export interface DeleteSnapshotCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified snapshot.</p>
 *          <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the volume.</p>
 *          <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI.
 *       You must first de-register the AMI before you can delete the snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Deleting an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSnapshotCommand extends $Command<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSnapshotCommandInput;
    constructor(input: DeleteSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
