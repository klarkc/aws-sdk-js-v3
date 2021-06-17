import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableFastSnapshotRestoresCommandInput extends EnableFastSnapshotRestoresRequest {
}
export interface EnableFastSnapshotRestoresCommandOutput extends EnableFastSnapshotRestoresResult, __MetadataBearer {
}
/**
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link EnableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableFastSnapshotRestoresCommand extends $Command<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableFastSnapshotRestoresCommandInput;
    constructor(input: EnableFastSnapshotRestoresCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput>;
    private serialize;
    private deserialize;
}
