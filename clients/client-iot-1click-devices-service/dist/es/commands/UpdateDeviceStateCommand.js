import { __extends } from "tslib";
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDeviceStateCommand, serializeAws_restJson1UpdateDeviceStateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Using a Boolean value (true or false), this operation
 *  enables or disables the device given a device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new UpdateDeviceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStateCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStateCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceStateCommand = /** @class */ (function (_super) {
    __extends(UpdateDeviceStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeviceStateCommand(input) {
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
    UpdateDeviceStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "UpdateDeviceStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeviceStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeviceStateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeviceStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDeviceStateCommand(input, context);
    };
    UpdateDeviceStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDeviceStateCommand(output, context);
    };
    return UpdateDeviceStateCommand;
}($Command));
export { UpdateDeviceStateCommand };
//# sourceMappingURL=UpdateDeviceStateCommand.js.map