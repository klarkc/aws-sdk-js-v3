import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableSerialConsoleAccessRequest, EnableSerialConsoleAccessResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableSerialConsoleAccessCommandInput extends EnableSerialConsoleAccessRequest {
}
export interface EnableSerialConsoleAccessCommandOutput extends EnableSerialConsoleAccessResult, __MetadataBearer {
}
/**
 * <p>Enables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a>
 * 			in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableSerialConsoleAccessCommand extends $Command<EnableSerialConsoleAccessCommandInput, EnableSerialConsoleAccessCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableSerialConsoleAccessCommandInput;
    constructor(input: EnableSerialConsoleAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSerialConsoleAccessCommandInput, EnableSerialConsoleAccessCommandOutput>;
    private serialize;
    private deserialize;
}
