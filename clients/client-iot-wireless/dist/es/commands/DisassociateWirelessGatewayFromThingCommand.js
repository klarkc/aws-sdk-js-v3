import { __extends } from "tslib";
import { DisassociateWirelessGatewayFromThingRequest, DisassociateWirelessGatewayFromThingResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand, serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a wireless gateway from its currently associated thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessGatewayFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessGatewayFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWirelessGatewayFromThingCommand = /** @class */ (function (_super) {
    __extends(DisassociateWirelessGatewayFromThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWirelessGatewayFromThingCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DisassociateWirelessGatewayFromThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWirelessGatewayFromThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWirelessGatewayFromThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWirelessGatewayFromThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand(input, context);
    };
    DisassociateWirelessGatewayFromThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand(output, context);
    };
    return DisassociateWirelessGatewayFromThingCommand;
}($Command));
export { DisassociateWirelessGatewayFromThingCommand };
//# sourceMappingURL=DisassociateWirelessGatewayFromThingCommand.js.map