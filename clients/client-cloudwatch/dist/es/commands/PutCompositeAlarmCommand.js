import { __extends } from "tslib";
import { PutCompositeAlarmInput } from "../models/models_0";
import { deserializeAws_queryPutCompositeAlarmCommand, serializeAws_queryPutCompositeAlarmCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a <i>composite alarm</i>. When you create a composite
 * 			alarm, you specify a rule expression for the alarm that takes into account the alarm
 * 			states of other alarms that you have created. The composite alarm goes into ALARM state
 * 			only if all conditions of the rule are met.</p>
 * 		       <p>The alarms specified in a composite alarm's rule expression can include metric alarms
 * 			and other composite alarms.</p>
 * 		       <p>Using composite alarms can reduce
 * 			alarm noise. You can create multiple metric alarms,
 * 			and also create a composite alarm and
 * 			set up alerts only
 * 			for the composite alarm. For example, you could create a composite
 * 			alarm that goes into ALARM state only when more than one of the underlying metric alarms
 * 			are in ALARM state.</p>
 * 		       <p>Currently, the only alarm actions that can be taken by composite alarms are notifying
 * 			SNS topics.</p>
 * 		       <note>
 *             <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and
 * 			composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle
 * 			because there is always still a composite alarm that depends on that alarm that you want to delete.</p>
 * 			         <p>To get out of such a situation, you must
 * 			break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest
 * 			change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p>
 * 			         <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
 * 		</p>
 *          </note>
 * 		       <p>When this operation creates an alarm, the alarm state is immediately set to
 * 				<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 * 			appropriately. Any actions associated with the new state are then executed. For a
 * 			composite alarm, this initial time after creation is the only time that
 * 			the
 * 			alarm can be in <code>INSUFFICIENT_DATA</code> state.</p>
 * 		       <p>When you update an existing alarm, its state is left unchanged, but the update
 * 			completely overwrites the previous configuration of the alarm.</p>
 *
 * 		       <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create
 * 			a composite alarm that has Systems Manager OpsItem actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutCompositeAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutCompositeAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutCompositeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCompositeAlarmCommandInput} for command's `input` shape.
 * @see {@link PutCompositeAlarmCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutCompositeAlarmCommand = /** @class */ (function (_super) {
    __extends(PutCompositeAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutCompositeAlarmCommand(input) {
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
    PutCompositeAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutCompositeAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutCompositeAlarmInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutCompositeAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutCompositeAlarmCommand(input, context);
    };
    PutCompositeAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutCompositeAlarmCommand(output, context);
    };
    return PutCompositeAlarmCommand;
}($Command));
export { PutCompositeAlarmCommand };
//# sourceMappingURL=PutCompositeAlarmCommand.js.map