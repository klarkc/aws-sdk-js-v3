"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelConversionTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all
 *    artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is
 *    in the process of transferring the final disk image, the command fails and returns an exception.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon
 *     EC2 CLI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelConversionTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelConversionTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelConversionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelConversionTaskCommandInput} for command's `input` shape.
 * @see {@link CancelConversionTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelConversionTaskCommand extends smithy_client_1.Command {
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
        const commandName = "CancelConversionTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelConversionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CancelConversionTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CancelConversionTaskCommand(output, context);
    }
}
exports.CancelConversionTaskCommand = CancelConversionTaskCommand;
//# sourceMappingURL=CancelConversionTaskCommand.js.map