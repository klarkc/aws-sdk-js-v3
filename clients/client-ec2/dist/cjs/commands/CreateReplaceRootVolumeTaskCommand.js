"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReplaceRootVolumeTaskCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a root volume replacement task for an Amazon EC2 instance. The root volume
 *       can either be restored to its initial launch state, or it can be restored using a
 *       specific snapshot.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/">Replace a root volume</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReplaceRootVolumeTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReplaceRootVolumeTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReplaceRootVolumeTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplaceRootVolumeTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplaceRootVolumeTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateReplaceRootVolumeTaskCommand extends smithy_client_1.Command {
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
        const commandName = "CreateReplaceRootVolumeTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateReplaceRootVolumeTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateReplaceRootVolumeTaskResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateReplaceRootVolumeTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateReplaceRootVolumeTaskCommand(output, context);
    }
}
exports.CreateReplaceRootVolumeTaskCommand = CreateReplaceRootVolumeTaskCommand;
//# sourceMappingURL=CreateReplaceRootVolumeTaskCommand.js.map