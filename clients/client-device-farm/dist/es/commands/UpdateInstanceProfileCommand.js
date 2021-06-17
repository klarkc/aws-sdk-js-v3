import { __extends } from "tslib";
import { UpdateInstanceProfileRequest, UpdateInstanceProfileResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateInstanceProfileCommand, serializeAws_json1_1UpdateInstanceProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information about an existing private device instance profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceProfileCommand(input) {
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
    UpdateInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateInstanceProfileCommand(input, context);
    };
    UpdateInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateInstanceProfileCommand(output, context);
    };
    return UpdateInstanceProfileCommand;
}($Command));
export { UpdateInstanceProfileCommand };
//# sourceMappingURL=UpdateInstanceProfileCommand.js.map