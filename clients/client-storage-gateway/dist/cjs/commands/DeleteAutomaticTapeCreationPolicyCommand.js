"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAutomaticTapeCreationPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 *          in your request to remove the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteAutomaticTapeCreationPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "StorageGatewayClient";
        const commandName = "DeleteAutomaticTapeCreationPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteAutomaticTapeCreationPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(output, context);
    }
}
exports.DeleteAutomaticTapeCreationPolicyCommand = DeleteAutomaticTapeCreationPolicyCommand;
//# sourceMappingURL=DeleteAutomaticTapeCreationPolicyCommand.js.map