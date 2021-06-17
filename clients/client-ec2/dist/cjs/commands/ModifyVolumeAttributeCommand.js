"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVolumeAttributeCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies a volume attribute.</p>
 *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
 *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
 *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
 *       data consistency on your volume.</p>
 *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
 *       this only for boot volumes or for volumes that are stateless or disposable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVolumeAttributeCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyVolumeAttributeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVolumeAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVolumeAttributeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVolumeAttributeCommand(output, context);
    }
}
exports.ModifyVolumeAttributeCommand = ModifyVolumeAttributeCommand;
//# sourceMappingURL=ModifyVolumeAttributeCommand.js.map