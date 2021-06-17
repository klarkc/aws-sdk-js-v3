import { __extends } from "tslib";
import { PutAppLaunchConfigurationRequest, PutAppLaunchConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAppLaunchConfigurationCommand, serializeAws_json1_1PutAppLaunchConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppLaunchConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutAppLaunchConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAppLaunchConfigurationCommand(input) {
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
    PutAppLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "PutAppLaunchConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAppLaunchConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAppLaunchConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAppLaunchConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAppLaunchConfigurationCommand(input, context);
    };
    PutAppLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAppLaunchConfigurationCommand(output, context);
    };
    return PutAppLaunchConfigurationCommand;
}($Command));
export { PutAppLaunchConfigurationCommand };
//# sourceMappingURL=PutAppLaunchConfigurationCommand.js.map