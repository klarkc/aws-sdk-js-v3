import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFleetCapacityCommandInput extends UpdateFleetCapacityInput {
}
export interface UpdateFleetCapacityCommandOutput extends UpdateFleetCapacityOutput, __MetadataBearer {
}
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
export declare class UpdateFleetCapacityCommand extends $Command<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetCapacityCommandInput;
    constructor(input: UpdateFleetCapacityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
