"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAlarmStateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SetAlarmStateCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchClient";
        const commandName = "SetAlarmStateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetAlarmStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_querySetAlarmStateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_querySetAlarmStateCommand(output, context);
    }
}
exports.SetAlarmStateCommand = SetAlarmStateCommand;
//# sourceMappingURL=SetAlarmStateCommand.js.map