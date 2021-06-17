import { __extends } from "tslib";
import { DeleteWirelessDeviceRequest, DeleteWirelessDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteWirelessDeviceCommand, serializeAws_restJson1DeleteWirelessDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWirelessDeviceCommand = /** @class */ (function (_super) {
    __extends(DeleteWirelessDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWirelessDeviceCommand(input) {
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
    DeleteWirelessDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DeleteWirelessDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWirelessDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWirelessDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWirelessDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWirelessDeviceCommand(input, context);
    };
    DeleteWirelessDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWirelessDeviceCommand(output, context);
    };
    return DeleteWirelessDeviceCommand;
}($Command));
export { DeleteWirelessDeviceCommand };
//# sourceMappingURL=DeleteWirelessDeviceCommand.js.map