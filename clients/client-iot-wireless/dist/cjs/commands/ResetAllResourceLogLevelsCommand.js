"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetAllResourceLogLevelsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Remove log-level overrides if any for all resources (both wireless devices and wireless gateways).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetAllResourceLogLevelsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetAllResourceLogLevelsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetAllResourceLogLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAllResourceLogLevelsCommandInput} for command's `input` shape.
 * @see {@link ResetAllResourceLogLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetAllResourceLogLevelsCommand extends smithy_client_1.Command {
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
        const clientName = "IoTWirelessClient";
        const commandName = "ResetAllResourceLogLevelsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResetAllResourceLogLevelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResetAllResourceLogLevelsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ResetAllResourceLogLevelsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ResetAllResourceLogLevelsCommand(output, context);
    }
}
exports.ResetAllResourceLogLevelsCommand = ResetAllResourceLogLevelsCommand;
//# sourceMappingURL=ResetAllResourceLogLevelsCommand.js.map