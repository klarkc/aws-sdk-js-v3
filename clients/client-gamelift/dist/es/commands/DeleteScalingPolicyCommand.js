import { __extends } from "tslib";
import { DeleteScalingPolicyInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteScalingPolicyCommand, serializeAws_json1_1DeleteScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in
 *             force and GameLift removes all record of it. To delete a scaling policy, specify both the scaling
 *             policy name and the fleet ID it is associated with.</p>
 *         <p>To temporarily suspend scaling policies, call <a>StopFleetActions</a>.
 *             This operation suspends all policies for the fleet.</p>
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
 * import { GameLiftClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteScalingPolicyCommand(input) {
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
    DeleteScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteScalingPolicyCommand(input, context);
    };
    DeleteScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteScalingPolicyCommand(output, context);
    };
    return DeleteScalingPolicyCommand;
}($Command));
export { DeleteScalingPolicyCommand };
//# sourceMappingURL=DeleteScalingPolicyCommand.js.map