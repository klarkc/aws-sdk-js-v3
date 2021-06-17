"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlowOutputCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Updates an existing flow output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFlowOutputCommand extends smithy_client_1.Command {
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
        const clientName = "MediaConnectClient";
        const commandName = "UpdateFlowOutputCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFlowOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFlowOutputResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateFlowOutputCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateFlowOutputCommand(output, context);
    }
}
exports.UpdateFlowOutputCommand = UpdateFlowOutputCommand;
//# sourceMappingURL=UpdateFlowOutputCommand.js.map