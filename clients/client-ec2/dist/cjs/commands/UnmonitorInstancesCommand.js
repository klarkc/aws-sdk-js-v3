"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmonitorInstancesCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
 *             your instances and volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnmonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnmonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnmonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnmonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link UnmonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UnmonitorInstancesCommand extends smithy_client_1.Command {
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
        const commandName = "UnmonitorInstancesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.UnmonitorInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.UnmonitorInstancesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2UnmonitorInstancesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2UnmonitorInstancesCommand(output, context);
    }
}
exports.UnmonitorInstancesCommand = UnmonitorInstancesCommand;
//# sourceMappingURL=UnmonitorInstancesCommand.js.map