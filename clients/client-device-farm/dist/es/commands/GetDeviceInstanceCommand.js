import { __extends } from "tslib";
import { GetDeviceInstanceRequest, GetDeviceInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1GetDeviceInstanceCommand, serializeAws_json1_1GetDeviceInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a device instance that belongs to a private device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceInstanceCommand = /** @class */ (function (_super) {
    __extends(GetDeviceInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceInstanceCommand(input) {
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
    GetDeviceInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetDeviceInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeviceInstanceCommand(input, context);
    };
    GetDeviceInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeviceInstanceCommand(output, context);
    };
    return GetDeviceInstanceCommand;
}($Command));
export { GetDeviceInstanceCommand };
//# sourceMappingURL=GetDeviceInstanceCommand.js.map