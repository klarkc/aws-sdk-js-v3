import { __extends } from "tslib";
import { UpdateNetworkProfileRequest, UpdateNetworkProfileResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateNetworkProfileCommand, serializeAws_json1_1UpdateNetworkProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNetworkProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateNetworkProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNetworkProfileCommand(input) {
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
    UpdateNetworkProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateNetworkProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNetworkProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNetworkProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNetworkProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNetworkProfileCommand(input, context);
    };
    UpdateNetworkProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNetworkProfileCommand(output, context);
    };
    return UpdateNetworkProfileCommand;
}($Command));
export { UpdateNetworkProfileCommand };
//# sourceMappingURL=UpdateNetworkProfileCommand.js.map