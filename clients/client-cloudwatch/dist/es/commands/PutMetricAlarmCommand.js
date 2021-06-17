import { __extends } from "tslib";
import { PutMetricAlarmInput } from "../models/models_0";
import { deserializeAws_queryPutMetricAlarmCommand, serializeAws_queryPutMetricAlarmCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression,
 * 			or anomaly detection model.</p>
 * 		       <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p>
 * 		       <p>When this operation creates an alarm, the alarm state is immediately set to
 * 			<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 * 			appropriately. Any actions associated with the new state are then executed.</p>
 * 		       <p>When you update an existing alarm, its state is left unchanged, but the
 * 			update completely overwrites the previous configuration of the alarm.</p>
 *
 * 		       <p>If you are an IAM user, you must have
 * 			Amazon EC2 permissions for some alarm operations:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p>
 *
 * 			         </li>
 *             <li>
 *
 * 				           <p>The <code>iam:CreateServiceLinkedRole</code> to create an alarm
 * 					with Systems Manager OpsItem actions.</p>
 * 			         </li>
 *          </ul>
 *
 *
 *
 *
 *
 *
 * 		       <p>The first time you create an alarm in the
 * 			AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch
 * 			creates the necessary service-linked role for you. The service-linked roles
 * 			are called <code>AWSServiceRoleForCloudWatchEvents</code> and
 * 			<code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>.
 * 			For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">AWS service-linked role</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricAlarmCommandInput} for command's `input` shape.
 * @see {@link PutMetricAlarmCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMetricAlarmCommand = /** @class */ (function (_super) {
    __extends(PutMetricAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutMetricAlarmCommand(input) {
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
    PutMetricAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutMetricAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutMetricAlarmInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutMetricAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutMetricAlarmCommand(input, context);
    };
    PutMetricAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutMetricAlarmCommand(output, context);
    };
    return PutMetricAlarmCommand;
}($Command));
export { PutMetricAlarmCommand };
//# sourceMappingURL=PutMetricAlarmCommand.js.map