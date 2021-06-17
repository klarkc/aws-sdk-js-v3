"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContainerServiceCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the configuration of your Amazon Lightsail container service, such as its power,
 *       scale, and public domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateContainerServiceCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "UpdateContainerServiceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UpdateContainerServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UpdateContainerServiceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateContainerServiceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateContainerServiceCommand(output, context);
    }
}
exports.UpdateContainerServiceCommand = UpdateContainerServiceCommand;
//# sourceMappingURL=UpdateContainerServiceCommand.js.map