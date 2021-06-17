import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyInstanceMetadataOptionsCommandInput extends ModifyInstanceMetadataOptionsRequest {
}
export interface ModifyInstanceMetadataOptionsCommandOutput extends ModifyInstanceMetadataOptionsResult, __MetadataBearer {
}
/**
 * <p>Modify the instance metadata parameters on a running or stopped instance. When you
 *             modify the parameters on a stopped instance, they are applied when the instance is
 *             started. When you modify the parameters on a running instance, the API responds with a
 *             state of “pending”. After the parameter modifications are successfully applied to the
 *             instance, the state of the modifications changes from “pending” to “applied” in
 *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>
 *           in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMetadataOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMetadataOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceMetadataOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceMetadataOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMetadataOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyInstanceMetadataOptionsCommand extends $Command<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceMetadataOptionsCommandInput;
    constructor(input: ModifyInstanceMetadataOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
