import { __extends } from "tslib";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDeviceCommand, serializeAws_restJson1DescribeDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Given a device ID, returns a DescribeDeviceResponse object describing the
 *  details of the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, DescribeDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, DescribeDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeviceCommand = /** @class */ (function (_super) {
    __extends(DescribeDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeviceCommand(input) {
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
    DescribeDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "DescribeDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDeviceCommand(input, context);
    };
    DescribeDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDeviceCommand(output, context);
    };
    return DescribeDeviceCommand;
}($Command));
export { DescribeDeviceCommand };
//# sourceMappingURL=DescribeDeviceCommand.js.map