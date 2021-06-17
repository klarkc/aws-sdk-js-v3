import { __extends } from "tslib";
import { GetDeviceProfileRequest, GetDeviceProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeviceProfileCommand, serializeAws_restJson1GetDeviceProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link GetDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceProfileCommand = /** @class */ (function (_super) {
    __extends(GetDeviceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceProfileCommand(input) {
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
    GetDeviceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetDeviceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeviceProfileCommand(input, context);
    };
    GetDeviceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeviceProfileCommand(output, context);
    };
    return GetDeviceProfileCommand;
}($Command));
export { GetDeviceProfileCommand };
//# sourceMappingURL=GetDeviceProfileCommand.js.map