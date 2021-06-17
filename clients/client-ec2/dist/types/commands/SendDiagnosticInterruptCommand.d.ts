import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SendDiagnosticInterruptRequest } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendDiagnosticInterruptCommandInput extends SendDiagnosticInterruptRequest {
}
export interface SendDiagnosticInterruptCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a
 * 			<i>kernel panic</i> (on Linux instances), or a
 * 			<i>blue screen</i>/<i>stop error</i> (on Windows
 * 			instances). For instances based on Intel and AMD processors, the interrupt is
 * 			received as a <i>non-maskable interrupt</i> (NMI).</p>
 *
 * 		       <p>In general, the operating system crashes and reboots when a kernel panic or stop
 * 			error is triggered. The operating system can also be configured to perform diagnostic
 * 			tasks, such as generating a memory dump file, loading a secondary kernel, or
 * 			obtaining a call trace.</p>
 *
 * 		       <p>Before sending a diagnostic interrupt to your instance, ensure that its operating
 * 			system is configured to perform the required diagnostic tasks.</p>
 *
 * 		       <p>For more information about configuring your operating system to generate a crash dump
 * 			when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a Diagnostic Interrupt</a> (Windows instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SendDiagnosticInterruptCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SendDiagnosticInterruptCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new SendDiagnosticInterruptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendDiagnosticInterruptCommandInput} for command's `input` shape.
 * @see {@link SendDiagnosticInterruptCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendDiagnosticInterruptCommand extends $Command<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SendDiagnosticInterruptCommandInput;
    constructor(input: SendDiagnosticInterruptCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput>;
    private serialize;
    private deserialize;
}
