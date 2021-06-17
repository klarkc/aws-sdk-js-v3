import { __extends } from "tslib";
import { UnclaimDeviceRequest, UnclaimDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1UnclaimDeviceCommand, serializeAws_restJson1UnclaimDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a device from your AWS account using its device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new UnclaimDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnclaimDeviceCommandInput} for command's `input` shape.
 * @see {@link UnclaimDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnclaimDeviceCommand = /** @class */ (function (_super) {
    __extends(UnclaimDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnclaimDeviceCommand(input) {
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
    UnclaimDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "UnclaimDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnclaimDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnclaimDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnclaimDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UnclaimDeviceCommand(input, context);
    };
    UnclaimDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UnclaimDeviceCommand(output, context);
    };
    return UnclaimDeviceCommand;
}($Command));
export { UnclaimDeviceCommand };
//# sourceMappingURL=UnclaimDeviceCommand.js.map