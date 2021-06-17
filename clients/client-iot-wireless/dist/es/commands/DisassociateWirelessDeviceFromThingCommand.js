import { __extends } from "tslib";
import { DisassociateWirelessDeviceFromThingRequest, DisassociateWirelessDeviceFromThingResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand, serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a wireless device from its currently associated thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessDeviceFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessDeviceFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWirelessDeviceFromThingCommand = /** @class */ (function (_super) {
    __extends(DisassociateWirelessDeviceFromThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWirelessDeviceFromThingCommand(input) {
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
    DisassociateWirelessDeviceFromThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DisassociateWirelessDeviceFromThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWirelessDeviceFromThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWirelessDeviceFromThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWirelessDeviceFromThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand(input, context);
    };
    DisassociateWirelessDeviceFromThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand(output, context);
    };
    return DisassociateWirelessDeviceFromThingCommand;
}($Command));
export { DisassociateWirelessDeviceFromThingCommand };
//# sourceMappingURL=DisassociateWirelessDeviceFromThingCommand.js.map