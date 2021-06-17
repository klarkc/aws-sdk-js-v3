import { __extends } from "tslib";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeviceEventsCommand, serializeAws_restJson1ListDeviceEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Using a device ID, returns a DeviceEventsResponse object containing an
 *  array of events for the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ListDeviceEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceEventsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeviceEventsCommand = /** @class */ (function (_super) {
    __extends(ListDeviceEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeviceEventsCommand(input) {
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
    ListDeviceEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "ListDeviceEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeviceEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeviceEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeviceEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeviceEventsCommand(input, context);
    };
    ListDeviceEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeviceEventsCommand(output, context);
    };
    return ListDeviceEventsCommand;
}($Command));
export { ListDeviceEventsCommand };
//# sourceMappingURL=ListDeviceEventsCommand.js.map