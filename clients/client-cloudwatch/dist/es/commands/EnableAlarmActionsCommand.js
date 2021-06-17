import { __extends } from "tslib";
import { EnableAlarmActionsInput } from "../models/models_0";
import { deserializeAws_queryEnableAlarmActionsCommand, serializeAws_queryEnableAlarmActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the actions for the specified alarms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new EnableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link EnableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableAlarmActionsCommand = /** @class */ (function (_super) {
    __extends(EnableAlarmActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableAlarmActionsCommand(input) {
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
    EnableAlarmActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "EnableAlarmActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableAlarmActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableAlarmActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryEnableAlarmActionsCommand(input, context);
    };
    EnableAlarmActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryEnableAlarmActionsCommand(output, context);
    };
    return EnableAlarmActionsCommand;
}($Command));
export { EnableAlarmActionsCommand };
//# sourceMappingURL=EnableAlarmActionsCommand.js.map