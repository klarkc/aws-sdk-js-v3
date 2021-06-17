"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmProductInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Determines whether a product code is associated with an instance. This action can only
 *             be used by the owner of the product code. It is useful when a product code owner must
 *             verify whether another user's instance is eligible for support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ConfirmProductInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ConfirmProductInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmProductInstanceCommandInput} for command's `input` shape.
 * @see {@link ConfirmProductInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ConfirmProductInstanceCommand extends smithy_client_1.Command {
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
        const commandName = "ConfirmProductInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ConfirmProductInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ConfirmProductInstanceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ConfirmProductInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ConfirmProductInstanceCommand(output, context);
    }
}
exports.ConfirmProductInstanceCommand = ConfirmProductInstanceCommand;
//# sourceMappingURL=ConfirmProductInstanceCommand.js.map