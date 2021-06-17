"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomaticTapeCreationPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
 *          with a new set of automatic tape creation rules. This is only supported for tape
 *          gateways.</p>
 *
 *          <p>By default, there is no automatic tape creation policy.</p>
 *
 *          <note>
 *             <p>A gateway can have only one automatic tape creation policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateAutomaticTapeCreationPolicyCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateAutomaticTapeCreationPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateAutomaticTapeCreationPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(output, context);
    }
}
exports.UpdateAutomaticTapeCreationPolicyCommand = UpdateAutomaticTapeCreationPolicyCommand;
//# sourceMappingURL=UpdateAutomaticTapeCreationPolicyCommand.js.map