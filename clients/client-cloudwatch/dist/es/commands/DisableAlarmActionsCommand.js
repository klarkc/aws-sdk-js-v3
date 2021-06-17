import { __extends } from "tslib";
import { DisableAlarmActionsInput } from "../models/models_0";
import { deserializeAws_queryDisableAlarmActionsCommand, serializeAws_queryDisableAlarmActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the
 * 			alarm actions do not execute when the alarm state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DisableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link DisableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableAlarmActionsCommand = /** @class */ (function (_super) {
    __extends(DisableAlarmActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableAlarmActionsCommand(input) {
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
    DisableAlarmActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DisableAlarmActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableAlarmActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableAlarmActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisableAlarmActionsCommand(input, context);
    };
    DisableAlarmActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisableAlarmActionsCommand(output, context);
    };
    return DisableAlarmActionsCommand;
}($Command));
export { DisableAlarmActionsCommand };
//# sourceMappingURL=DisableAlarmActionsCommand.js.map