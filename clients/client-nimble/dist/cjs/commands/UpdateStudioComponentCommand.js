"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudioComponentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateStudioComponentCommand extends smithy_client_1.Command {
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
        const clientName = "NimbleClient";
        const commandName = "UpdateStudioComponentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateStudioComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateStudioComponentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateStudioComponentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateStudioComponentCommand(output, context);
    }
}
exports.UpdateStudioComponentCommand = UpdateStudioComponentCommand;
//# sourceMappingURL=UpdateStudioComponentCommand.js.map