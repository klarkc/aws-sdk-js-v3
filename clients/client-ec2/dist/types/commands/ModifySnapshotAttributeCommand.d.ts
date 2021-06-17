import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySnapshotAttributeRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifySnapshotAttributeCommandInput extends ModifySnapshotAttributeRequest {
}
export interface ModifySnapshotAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or removes permission settings for the specified snapshot. You may add or remove
 *       specified AWS account IDs from a snapshot's list of create volume permissions, but you cannot
 *       do both in a single operation. If you need to both add and remove account IDs for a snapshot,
 *       you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p>
 *          <p>Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be made
 *       public. Snapshots encrypted with your default CMK cannot be shared with other accounts.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifySnapshotAttributeCommand extends $Command<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifySnapshotAttributeCommandInput;
    constructor(input: ModifySnapshotAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
