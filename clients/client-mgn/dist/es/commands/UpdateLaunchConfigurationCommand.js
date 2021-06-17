import { __extends } from "tslib";
import { LaunchConfiguration, UpdateLaunchConfigurationRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateLaunchConfigurationCommand, serializeAws_restJson1UpdateLaunchConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates multiple LaunchConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UpdateLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLaunchConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLaunchConfigurationCommand(input) {
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
    UpdateLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "UpdateLaunchConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLaunchConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LaunchConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLaunchConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLaunchConfigurationCommand(input, context);
    };
    UpdateLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLaunchConfigurationCommand(output, context);
    };
    return UpdateLaunchConfigurationCommand;
}($Command));
export { UpdateLaunchConfigurationCommand };
//# sourceMappingURL=UpdateLaunchConfigurationCommand.js.map