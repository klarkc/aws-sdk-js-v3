import { __extends } from "tslib";
import { DescribeFleetCapacityInput, DescribeFleetCapacityOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeFleetCapacityCommand, serializeAws_json1_1DescribeFleetCapacityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resource capacity settings for one or more fleets. The data returned
 *             includes the current fleet capacity (number of EC2 instances), and settings that can
 *             control how capacity scaling. For fleets with remote locations, this operation retrieves
 *             data for the fleet's home Region only. See <a>DescribeFleetLocationCapacity</a> to get capacity settings for a fleet's remote locations.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get capacity data for one or more specific fleets, provide a list of fleet
 *                     IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get capacity data for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *         <p>If successful, a <a>FleetCapacity</a> object is returned for each requested
 *             fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is
 *             set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects
 *             are returned only for fleets that currently exist.</p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs that are allowed in one
 *                 request. If a request exceeds this limit, the request fails and the error message
 *                 includes the maximum allowed.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>ListFleets</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetEvents</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetPortSettings</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>DescribeRuntimeConfiguration</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetCapacityCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetCapacityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetCapacityCommand(input) {
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
    DescribeFleetCapacityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeFleetCapacityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetCapacityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetCapacityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFleetCapacityCommand(input, context);
    };
    DescribeFleetCapacityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFleetCapacityCommand(output, context);
    };
    return DescribeFleetCapacityCommand;
}($Command));
export { DescribeFleetCapacityCommand };
//# sourceMappingURL=DescribeFleetCapacityCommand.js.map