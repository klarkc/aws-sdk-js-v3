import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableSerialConsoleAccessRequest, DisableSerialConsoleAccessResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableSerialConsoleAccessCommandInput extends DisableSerialConsoleAccessRequest {
}
export interface DisableSerialConsoleAccessCommandOutput extends DisableSerialConsoleAccessResult, __MetadataBearer {
}
/**
 * <p>Disables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link DisableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableSerialConsoleAccessCommand extends $Command<DisableSerialConsoleAccessCommandInput, DisableSerialConsoleAccessCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableSerialConsoleAccessCommandInput;
    constructor(input: DisableSerialConsoleAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSerialConsoleAccessCommandInput, DisableSerialConsoleAccessCommandOutput>;
    private serialize;
    private deserialize;
}
