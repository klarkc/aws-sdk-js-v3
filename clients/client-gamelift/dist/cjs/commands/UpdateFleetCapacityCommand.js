"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFleetCapacityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates capacity settings for a fleet. For fleets with multiple locations, use this
 *             operation to manage capacity settings in each location individually. Fleet capacity
 *             determines the number of game sessions and players that can be hosted based on the fleet
 *             configuration. Use this operation to set the following fleet capacity properties: </p>
 *         <ul>
 *             <li>
 *                 <p>Minimum/maximum size: Set hard limits on fleet capacity. GameLift cannot set
 *                     the fleet's capacity to a value outside of this range, whether the capacity is
 *                     changed manually or through automatic scaling. </p>
 *             </li>
 *             <li>
 *                 <p>Desired capacity: Manually set the number of EC2 instances to be maintained
 *                     in a fleet location. Before changing a fleet's desired capacity, you may want to
 *                     call <a>DescribeEC2InstanceLimits</a> to get the maximum capacity of
 *                     the fleet's EC2 instance type. Alternatively, consider using automatic scaling
 *                     to adjust capacity based on player demand.</p>
 *             </li>
 *          </ul>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To update capacity for a fleet's home Region, or if the fleet has no remote
 *                     locations, omit the <code>Location</code> parameter. The fleet must be in
 *                     <code>ACTIVE</code> status. </p>
 *             </li>
 *             <li>
 *                 <p>To update capacity for a fleet's remote location, include the
 *                         <code>Location</code> parameter set to the location to be updated. The
 *                     location must be in <code>ACTIVE</code> status.</p>
 *             </li>
 *          </ul>
 *         <p>If successful, capacity settings are updated immediately. In response a change in
 *             desired capacity, GameLift initiates steps to start new instances or terminate existing
 *             instances in the requested fleet location. This continues until the location's active
 *             instance count matches the new desired instance count. You can track a fleet's current
 *             capacity by calling <a>DescribeFleetCapacity</a> or <a>DescribeFleetLocationCapacity</a>. If the requested desired instance count
 *             is higher than the instance type's limit, the <code>LimitExceeded</code> exception
 *             occurs.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>UpdateFleetPortSettings</a> |
 *                     <a>UpdateRuntimeConfiguration</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFleetCapacityCommand extends smithy_client_1.Command {
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
        const clientName = "GameLiftClient";
        const commandName = "UpdateFleetCapacityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFleetCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFleetCapacityOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateFleetCapacityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateFleetCapacityCommand(output, context);
    }
}
exports.UpdateFleetCapacityCommand = UpdateFleetCapacityCommand;
//# sourceMappingURL=UpdateFleetCapacityCommand.js.map