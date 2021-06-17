"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSMBSecurityStrategyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateSMBSecurityStrategyCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateSMBSecurityStrategyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateSMBSecurityStrategyInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateSMBSecurityStrategyOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateSMBSecurityStrategyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateSMBSecurityStrategyCommand(output, context);
    }
}
exports.UpdateSMBSecurityStrategyCommand = UpdateSMBSecurityStrategyCommand;
//# sourceMappingURL=UpdateSMBSecurityStrategyCommand.js.map