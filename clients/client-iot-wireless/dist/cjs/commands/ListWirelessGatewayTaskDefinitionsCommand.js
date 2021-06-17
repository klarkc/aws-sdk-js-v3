"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWirelessGatewayTaskDefinitionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListWirelessGatewayTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListWirelessGatewayTaskDefinitionsCommand extends smithy_client_1.Command {
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
        const commandName = "ListWirelessGatewayTaskDefinitionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListWirelessGatewayTaskDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListWirelessGatewayTaskDefinitionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(output, context);
    }
}
exports.ListWirelessGatewayTaskDefinitionsCommand = ListWirelessGatewayTaskDefinitionsCommand;
//# sourceMappingURL=ListWirelessGatewayTaskDefinitionsCommand.js.map