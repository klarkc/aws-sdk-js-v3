import { __extends } from "tslib";
import { GetWirelessDeviceRequest, GetWirelessDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessDeviceCommand, serializeAws_restJson1GetWirelessDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessDeviceCommand = /** @class */ (function (_super) {
    __extends(GetWirelessDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessDeviceCommand(input) {
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
    GetWirelessDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessDeviceCommand(input, context);
    };
    GetWirelessDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessDeviceCommand(output, context);
    };
    return GetWirelessDeviceCommand;
}($Command));
export { GetWirelessDeviceCommand };
//# sourceMappingURL=GetWirelessDeviceCommand.js.map