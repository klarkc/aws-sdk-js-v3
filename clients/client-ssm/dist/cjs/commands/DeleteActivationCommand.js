"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteActivationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an activation. You are not required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed instances. Deleting an
 *    activation does not de-register managed instances. You must manually de-register managed
 *    instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteActivationCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "DeleteActivationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteActivationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteActivationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteActivationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteActivationCommand(output, context);
    }
}
exports.DeleteActivationCommand = DeleteActivationCommand;
//# sourceMappingURL=DeleteActivationCommand.js.map