import { __extends } from "tslib";
import { PutScalingPolicyInput, PutScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutScalingPolicyCommand, serializeAws_json1_1PutScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to
 *             automatically scale a fleet's hosting capacity to meet player demand. An active scaling
 *             policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's
 *             capacity when a certain threshold is reached. There are two types of scaling policies:
 *             target-based and rule-based. Use a target-based policy to quickly and efficiently manage
 *             fleet scaling; this option is the most commonly used. Use rule-based policies when you
 *             need to exert fine-grained control over auto-scaling. </p>
 *         <p>Fleets can have multiple scaling policies of each type in force at the same time;
 *             you can have one target-based policy, one or multiple rule-based scaling policies, or
 *             both. We recommend caution, however, because multiple auto-scaling policies can have
 *             unintended consequences.</p>
 *         <p>You can temporarily suspend all scaling policies for a fleet by calling <a>StopFleetActions</a> with the fleet action AUTO_SCALING. To resume scaling
 *             policies, call <a>StartFleetActions</a> with the same fleet action. To stop
 *             just one scaling policy--or to permanently remove it, you must delete the policy with
 *                 <a>DeleteScalingPolicy</a>.</p>
 *         <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic
 *                 Scaling</a>.</p>
 *         <p>
 *             <b>Target-based policy</b>
 *          </p>
 *         <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This
 *             metric tells us how much of a fleet's hosting capacity is ready to host game sessions
 *             but is not currently in use. This is the fleet's buffer; it measures the additional
 *             player demand that the fleet could handle at current capacity. With a target-based
 *             policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action
 *             is needed to maintain that target. </p>
 *         <p>For example, you might choose to maintain a 10% buffer for a fleet that has the
 *             capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take
 *             action whenever the fleet's available capacity falls below or rises above 10 game
 *             sessions. Amazon GameLift will start new instances or stop unused instances in order to return
 *             to the 10% buffer. </p>
 *         <p>To create or update a target-based policy, specify a fleet ID and name, and set the
 *             policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions)
 *             and reference a <a>TargetConfiguration</a> object with your desired buffer
 *             value. Exclude all other parameters. On a successful request, the policy name is
 *             returned. The scaling policy is automatically in force as soon as it's successfully
 *             created. If the fleet's auto-scaling actions are temporarily suspended, the new policy
 *             will be in force once the fleet actions are restarted.</p>
 *         <p>
 *             <b>Rule-based policy</b>
 *          </p>
 *         <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and
 *             specifies the type of action to initiate when triggered. With a rule-based policy, you
 *             can select from several available fleet metrics. Each policy specifies whether to scale
 *             up or scale down (and by how much), so you need one policy for each type of action. </p>
 *         <p>For example, a policy may make the following statement: "If the percentage of idle
 *             instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity
 *             by 10%."</p>
 *         <p>A policy's rule statement has the following structure:</p>
 *         <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code>
 *             <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then
 *                 <code>[ScalingAdjustmentType]</code> to/by
 *             <code>[ScalingAdjustment]</code>.</p>
 *         <p>To implement the example, the rule statement would look like this:</p>
 *         <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code>
 *             <code>[20]</code> for <code>[15]</code> minutes, then
 *                 <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p>
 *         <p>To create or update a scaling policy, specify a unique combination of name and
 *             fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a
 *             policy rule statement. On a successful request, the policy name is returned. Scaling
 *             policies are automatically in force as soon as they're successfully created. If the
 *             fleet's auto-scaling actions are temporarily suspended, the new policy will be in force
 *             once the fleet actions are restarted.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeFleetCapacity</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, PutScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, PutScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(PutScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutScalingPolicyCommand(input) {
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
    PutScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "PutScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutScalingPolicyCommand(input, context);
    };
    PutScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutScalingPolicyCommand(output, context);
    };
    return PutScalingPolicyCommand;
}($Command));
export { PutScalingPolicyCommand };
//# sourceMappingURL=PutScalingPolicyCommand.js.map