"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableSerialConsoleAccessCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DisableSerialConsoleAccessCommand extends smithy_client_1.Command {
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
        const commandName = "DisableSerialConsoleAccessCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.DisableSerialConsoleAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.DisableSerialConsoleAccessResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DisableSerialConsoleAccessCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DisableSerialConsoleAccessCommand(output, context);
    }
}
exports.DisableSerialConsoleAccessCommand = DisableSerialConsoleAccessCommand;
//# sourceMappingURL=DisableSerialConsoleAccessCommand.js.map