import { __extends } from "tslib";
import { GetDevicePoolRequest, GetDevicePoolResult } from "../models/models_0";
import { deserializeAws_json1_1GetDevicePoolCommand, serializeAws_json1_1GetDevicePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePoolCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicePoolCommand = /** @class */ (function (_super) {
    __extends(GetDevicePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicePoolCommand(input) {
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
    GetDevicePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetDevicePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicePoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicePoolResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDevicePoolCommand(input, context);
    };
    GetDevicePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDevicePoolCommand(output, context);
    };
    return GetDevicePoolCommand;
}($Command));
export { GetDevicePoolCommand };
//# sourceMappingURL=GetDevicePoolCommand.js.map