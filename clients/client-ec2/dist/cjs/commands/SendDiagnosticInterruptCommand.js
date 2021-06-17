"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendDiagnosticInterruptCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SendDiagnosticInterruptCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "SendDiagnosticInterruptCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.SendDiagnosticInterruptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2SendDiagnosticInterruptCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2SendDiagnosticInterruptCommand(output, context);
    }
}
exports.SendDiagnosticInterruptCommand = SendDiagnosticInterruptCommand;
//# sourceMappingURL=SendDiagnosticInterruptCommand.js.map