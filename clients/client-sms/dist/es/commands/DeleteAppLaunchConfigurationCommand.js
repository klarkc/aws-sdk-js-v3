import { __extends } from "tslib";
import { DeleteAppLaunchConfigurationRequest, DeleteAppLaunchConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAppLaunchConfigurationCommand, serializeAws_json1_1DeleteAppLaunchConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppLaunchConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteAppLaunchConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppLaunchConfigurationCommand(input) {
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
    DeleteAppLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DeleteAppLaunchConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppLaunchConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAppLaunchConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppLaunchConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppLaunchConfigurationCommand(input, context);
    };
    DeleteAppLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppLaunchConfigurationCommand(output, context);
    };
    return DeleteAppLaunchConfigurationCommand;
}($Command));
export { DeleteAppLaunchConfigurationCommand };
//# sourceMappingURL=DeleteAppLaunchConfigurationCommand.js.map