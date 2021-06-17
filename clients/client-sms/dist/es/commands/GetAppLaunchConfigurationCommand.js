import { __extends } from "tslib";
import { GetAppLaunchConfigurationRequest, GetAppLaunchConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAppLaunchConfigurationCommand, serializeAws_json1_1GetAppLaunchConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the application launch configuration associated with the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppLaunchConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetAppLaunchConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppLaunchConfigurationCommand(input) {
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
    GetAppLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetAppLaunchConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppLaunchConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppLaunchConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppLaunchConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAppLaunchConfigurationCommand(input, context);
    };
    GetAppLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAppLaunchConfigurationCommand(output, context);
    };
    return GetAppLaunchConfigurationCommand;
}($Command));
export { GetAppLaunchConfigurationCommand };
//# sourceMappingURL=GetAppLaunchConfigurationCommand.js.map