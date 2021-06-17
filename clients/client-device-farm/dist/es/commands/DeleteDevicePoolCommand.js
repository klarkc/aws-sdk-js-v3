import { __extends } from "tslib";
import { DeleteDevicePoolRequest, DeleteDevicePoolResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDevicePoolCommand, serializeAws_json1_1DeleteDevicePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 *             owned by the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDevicePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDevicePoolCommand = /** @class */ (function (_super) {
    __extends(DeleteDevicePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDevicePoolCommand(input) {
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
    DeleteDevicePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteDevicePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDevicePoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDevicePoolResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDevicePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDevicePoolCommand(input, context);
    };
    DeleteDevicePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDevicePoolCommand(output, context);
    };
    return DeleteDevicePoolCommand;
}($Command));
export { DeleteDevicePoolCommand };
//# sourceMappingURL=DeleteDevicePoolCommand.js.map