import { __extends } from "tslib";
import { UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateVPCEConfigurationCommand, serializeAws_json1_1UpdateVPCEConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVPCEConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateVPCEConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVPCEConfigurationCommand(input) {
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
    UpdateVPCEConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateVPCEConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVPCEConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVPCEConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVPCEConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVPCEConfigurationCommand(input, context);
    };
    UpdateVPCEConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVPCEConfigurationCommand(output, context);
    };
    return UpdateVPCEConfigurationCommand;
}($Command));
export { UpdateVPCEConfigurationCommand };
//# sourceMappingURL=UpdateVPCEConfigurationCommand.js.map