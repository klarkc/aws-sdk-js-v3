import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopFleetActionsInput, StopFleetActionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopFleetActionsCommandInput extends StopFleetActionsInput {
}
export interface StopFleetActionsCommandOutput extends StopFleetActionsOutput, __MetadataBearer {
}
/**
 * <p>Suspends certain types of activity in a fleet location. Currently, this operation is
 *             used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed
 *             separately for each location. </p>
 *         <p>Stopping fleet actions has several potential purposes. It allows you to temporarily
 *             stop auto-scaling activity but retain your scaling policies for use in the future. For
 *             multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it
 *             for certain locations. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To stop actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to suspend. </p>
 *             </li>
 *             <li>
 *                 <p>To stop actions on instances in one of the fleet's remote locations, provide a
 *                     fleet ID, a location name, and the type of actions to suspend. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift no longer initiates scaling events except in response to manual
 *             changes using <a>UpdateFleetCapacity</a>. You can view a fleet's stopped
 *             actions using <a>DescribeFleetAttributes</a> or <a>DescribeFleetLocationAttributes</a>. Suspended activity can be restarted
 *             using <a>StartFleetActions</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StopFleetActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StopFleetActionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopFleetActionsCommand extends $Command<StopFleetActionsCommandInput, StopFleetActionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StopFleetActionsCommandInput;
    constructor(input: StopFleetActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopFleetActionsCommandInput, StopFleetActionsCommandOutput>;
    private serialize;
    private deserialize;
}
