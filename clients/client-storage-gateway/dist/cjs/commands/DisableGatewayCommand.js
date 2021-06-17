"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableGatewayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
 *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
 *
 *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <important>
 *             <p>After a gateway is disabled, it cannot be enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisableGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisableGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisableGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableGatewayCommandInput} for command's `input` shape.
 * @see {@link DisableGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisableGatewayCommand extends smithy_client_1.Command {
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
        const commandName = "DisableGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisableGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisableGatewayOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisableGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisableGatewayCommand(output, context);
    }
}
exports.DisableGatewayCommand = DisableGatewayCommand;
//# sourceMappingURL=DisableGatewayCommand.js.map