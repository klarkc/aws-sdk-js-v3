import { __extends } from "tslib";
import { GetNotificationConfigurationRequest, GetNotificationConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetNotificationConfigurationCommand, serializeAws_restJson1GetNotificationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the current configuration for anomaly notifications for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNotificationConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetNotificationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNotificationConfigurationCommand(input) {
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
    GetNotificationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "GetNotificationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNotificationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetNotificationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNotificationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetNotificationConfigurationCommand(input, context);
    };
    GetNotificationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetNotificationConfigurationCommand(output, context);
    };
    return GetNotificationConfigurationCommand;
}($Command));
export { GetNotificationConfigurationCommand };
//# sourceMappingURL=GetNotificationConfigurationCommand.js.map