"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConsoleOutputCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets the console output for the specified instance. For Linux instances, the instance
 *             console output displays the exact console output that would normally be displayed on a
 *             physical monitor attached to a computer. For Windows instances, the instance console
 *             output includes the last three system event log errors.</p>
 *         <p>By default, the console output returns buffered information that was posted shortly
 *             after an instance transition state (start, stop, reboot, or terminate). This information
 *             is available for at least one hour after the most recent post. Only the most recent 64
 *             KB of console output is available.</p>
 *         <p>You can optionally retrieve the latest serial console output at any time during the
 *             instance lifecycle. This option is supported on instance types that use the Nitro
 *             hypervisor.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
 *                 console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleOutputCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleOutputCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConsoleOutputCommandInput} for command's `input` shape.
 * @see {@link GetConsoleOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetConsoleOutputCommand extends smithy_client_1.Command {
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
        const commandName = "GetConsoleOutputCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.GetConsoleOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.GetConsoleOutputResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2GetConsoleOutputCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2GetConsoleOutputCommand(output, context);
    }
}
exports.GetConsoleOutputCommand = GetConsoleOutputCommand;
//# sourceMappingURL=GetConsoleOutputCommand.js.map