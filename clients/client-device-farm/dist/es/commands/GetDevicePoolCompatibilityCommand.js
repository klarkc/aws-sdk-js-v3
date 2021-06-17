import { __extends } from "tslib";
import { GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult } from "../models/models_0";
import { deserializeAws_json1_1GetDevicePoolCompatibilityCommand, serializeAws_json1_1GetDevicePoolCompatibilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about compatibility with a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCompatibilityCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCompatibilityCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePoolCompatibilityCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCompatibilityCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicePoolCompatibilityCommand = /** @class */ (function (_super) {
    __extends(GetDevicePoolCompatibilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicePoolCompatibilityCommand(input) {
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
    GetDevicePoolCompatibilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetDevicePoolCompatibilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicePoolCompatibilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicePoolCompatibilityResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicePoolCompatibilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDevicePoolCompatibilityCommand(input, context);
    };
    GetDevicePoolCompatibilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDevicePoolCompatibilityCommand(output, context);
    };
    return GetDevicePoolCompatibilityCommand;
}($Command));
export { GetDevicePoolCompatibilityCommand };
//# sourceMappingURL=GetDevicePoolCompatibilityCommand.js.map