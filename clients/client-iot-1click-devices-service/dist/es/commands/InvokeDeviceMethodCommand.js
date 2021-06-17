import { __extends } from "tslib";
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/models_0";
import { deserializeAws_restJson1InvokeDeviceMethodCommand, serializeAws_restJson1InvokeDeviceMethodCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Given a device ID, issues a request to invoke a named device method (with possible
 *  parameters). See the "Example POST" code snippet below.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InvokeDeviceMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeDeviceMethodCommandInput} for command's `input` shape.
 * @see {@link InvokeDeviceMethodCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InvokeDeviceMethodCommand = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvokeDeviceMethodCommand(input) {
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
    InvokeDeviceMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "InvokeDeviceMethodCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvokeDeviceMethodRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InvokeDeviceMethodResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvokeDeviceMethodCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InvokeDeviceMethodCommand(input, context);
    };
    InvokeDeviceMethodCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InvokeDeviceMethodCommand(output, context);
    };
    return InvokeDeviceMethodCommand;
}($Command));
export { InvokeDeviceMethodCommand };
//# sourceMappingURL=InvokeDeviceMethodCommand.js.map