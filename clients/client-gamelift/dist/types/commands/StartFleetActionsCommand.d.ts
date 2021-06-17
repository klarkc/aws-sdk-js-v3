import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartFleetActionsInput, StartFleetActionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartFleetActionsCommandInput extends StartFleetActionsInput {
}
export interface StartFleetActionsCommandOutput extends StartFleetActionsOutput, __MetadataBearer {
}
/**
 * <p>Resumes certain types of activity on fleet instances that were suspended with <a>StopFleetActions</a>. For multi-location fleets, fleet actions are managed
 *             separately for each location. Currently, this operation is used to restart a fleet's
 *             auto-scaling activity.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To restart actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to resume. </p>
 *             </li>
 *             <li>
 *                 <p>To restart actions on instances in one of the fleet's remote locations,
 *                     provide a fleet ID, a location name, and the type of actions to resume.  </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift once again initiates scaling events as triggered by the fleet's
 *             scaling policies. If actions on the fleet location were never stopped, this operation
 *             will have no effect. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a> or <a>DescribeFleetLocationAttributes</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
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
 * import { GameLiftClient, StartFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartFleetActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StartFleetActionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartFleetActionsCommand extends $Command<StartFleetActionsCommandInput, StartFleetActionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartFleetActionsCommandInput;
    constructor(input: StartFleetActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFleetActionsCommandInput, StartFleetActionsCommandOutput>;
    private serialize;
    private deserialize;
}
