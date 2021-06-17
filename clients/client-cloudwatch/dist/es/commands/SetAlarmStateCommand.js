import { __extends } from "tslib";
import { SetAlarmStateInput } from "../models/models_0";
import { deserializeAws_querySetAlarmStateCommand, serializeAws_querySetAlarmStateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Temporarily sets the state of an alarm for testing purposes. When the updated
 * 			state differs from the previous value, the action configured for
 * 			the appropriate state is invoked. For example, if your alarm is configured to send an
 * 			Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to
 * 			<code>ALARM</code> sends an SNS message.</p>
 * 		       <p>Metric alarms
 * 			returns to their actual state quickly, often within seconds. Because the metric alarm state change
 * 			happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p>
 * 		       <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return
 * 			to its actual state. It
 * 			returns to its actual state only once any of its children alarms change state. It is also
 * 			reevaluated if you update its
 * 			configuration.</p>
 * 		       <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include
 * 		information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, SetAlarmStateCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, SetAlarmStateCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new SetAlarmStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetAlarmStateCommandInput} for command's `input` shape.
 * @see {@link SetAlarmStateCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetAlarmStateCommand = /** @class */ (function (_super) {
    __extends(SetAlarmStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetAlarmStateCommand(input) {
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
    SetAlarmStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "SetAlarmStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetAlarmStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetAlarmStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetAlarmStateCommand(input, context);
    };
    SetAlarmStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetAlarmStateCommand(output, context);
    };
    return SetAlarmStateCommand;
}($Command));
export { SetAlarmStateCommand };
//# sourceMappingURL=SetAlarmStateCommand.js.map