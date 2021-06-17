import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetSnapshotAttributeRequest } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetSnapshotAttributeCommandInput extends ResetSnapshotAttributeRequest {
}
export interface ResetSnapshotAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Resets permission settings for the specified snapshot.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetSnapshotAttributeCommand extends $Command<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetSnapshotAttributeCommandInput;
    constructor(input: ResetSnapshotAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
