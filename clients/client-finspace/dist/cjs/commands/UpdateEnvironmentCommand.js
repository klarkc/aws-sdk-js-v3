"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnvironmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Update your FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateEnvironmentCommand extends smithy_client_1.Command {
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
        const clientName = "FinspaceClient";
        const commandName = "UpdateEnvironmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateEnvironmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateEnvironmentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateEnvironmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateEnvironmentCommand(output, context);
    }
}
exports.UpdateEnvironmentCommand = UpdateEnvironmentCommand;
//# sourceMappingURL=UpdateEnvironmentCommand.js.map