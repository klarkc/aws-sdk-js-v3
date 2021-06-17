import { __extends } from "tslib";
import { DeleteDeviceProfileRequest, DeleteDeviceProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDeviceProfileCommand, serializeAws_restJson1DeleteDeviceProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteDeviceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeviceProfileCommand(input) {
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
    DeleteDeviceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DeleteDeviceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeviceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDeviceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeviceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDeviceProfileCommand(input, context);
    };
    DeleteDeviceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDeviceProfileCommand(output, context);
    };
    return DeleteDeviceProfileCommand;
}($Command));
export { DeleteDeviceProfileCommand };
//# sourceMappingURL=DeleteDeviceProfileCommand.js.map