import { __extends } from "tslib";
import { UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateWirelessDeviceCommand, serializeAws_restJson1UpdateWirelessDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties of a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWirelessDeviceCommand = /** @class */ (function (_super) {
    __extends(UpdateWirelessDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWirelessDeviceCommand(input) {
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
    UpdateWirelessDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "UpdateWirelessDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWirelessDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWirelessDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWirelessDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateWirelessDeviceCommand(input, context);
    };
    UpdateWirelessDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateWirelessDeviceCommand(output, context);
    };
    return UpdateWirelessDeviceCommand;
}($Command));
export { UpdateWirelessDeviceCommand };
//# sourceMappingURL=UpdateWirelessDeviceCommand.js.map