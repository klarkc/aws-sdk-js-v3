import { __extends } from "tslib";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateDeviceInstanceCommand, serializeAws_json1_1UpdateDeviceInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information about a private device instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceInstanceCommand = /** @class */ (function (_super) {
    __extends(UpdateDeviceInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeviceInstanceCommand(input) {
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
    UpdateDeviceInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateDeviceInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeviceInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeviceInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeviceInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDeviceInstanceCommand(input, context);
    };
    UpdateDeviceInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDeviceInstanceCommand(output, context);
    };
    return UpdateDeviceInstanceCommand;
}($Command));
export { UpdateDeviceInstanceCommand };
//# sourceMappingURL=UpdateDeviceInstanceCommand.js.map