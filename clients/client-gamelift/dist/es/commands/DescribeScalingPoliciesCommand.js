import { __extends } from "tslib";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeScalingPoliciesCommand, serializeAws_json1_1DescribeScalingPoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all scaling policies applied to a fleet.</p>
 *         <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this
 *             request by policy status, such as to retrieve only active scaling policies. Use the
 *             pagination parameters to retrieve results as a set of sequential pages. If successful,
 *             set of <a>ScalingPolicy</a> objects is returned for the fleet.</p>
 *         <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This operation does not affect the status of the scaling
 *             policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force
 *             or suspended, call <a>DescribeFleetAttributes</a> and check the stopped
 *             actions.</p>
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
 * import { GameLiftClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingPoliciesCommand = /** @class */ (function (_super) {
    __extends(DescribeScalingPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScalingPoliciesCommand(input) {
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
    DescribeScalingPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeScalingPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScalingPoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScalingPoliciesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScalingPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeScalingPoliciesCommand(input, context);
    };
    DescribeScalingPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context);
    };
    return DescribeScalingPoliciesCommand;
}($Command));
export { DescribeScalingPoliciesCommand };
//# sourceMappingURL=DescribeScalingPoliciesCommand.js.map