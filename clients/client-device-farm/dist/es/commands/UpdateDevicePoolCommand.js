import { __extends } from "tslib";
import { UpdateDevicePoolRequest, UpdateDevicePoolResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateDevicePoolCommand, serializeAws_json1_1UpdateDevicePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the name, description, and rules in a device pool given the attributes and
 *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 *             whole (or not at all).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDevicePoolCommand = /** @class */ (function (_super) {
    __extends(UpdateDevicePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDevicePoolCommand(input) {
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
    UpdateDevicePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateDevicePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDevicePoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDevicePoolResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDevicePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDevicePoolCommand(input, context);
    };
    UpdateDevicePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDevicePoolCommand(output, context);
    };
    return UpdateDevicePoolCommand;
}($Command));
export { UpdateDevicePoolCommand };
//# sourceMappingURL=UpdateDevicePoolCommand.js.map