import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameServerGroupInput, UpdateGameServerGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGameServerGroupCommandInput extends UpdateGameServerGroupInput {
}
export interface UpdateGameServerGroupCommandOutput extends UpdateGameServerGroupOutput, __MetadataBearer {
}
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Updates GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group
 *             properties are updated on the Auto Scaling group directly, including the launch
 *             template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p>
 *         <p>To update the game server group, specify the game server group ID and provide the
 *             updated values. Before applying the updates, the new values are validated to ensure that
 *             GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <a>GameServerGroup</a> object is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameServerGroup</a> |
 *                     <a>ListGameServerGroups</a> |
 *                     <a>DescribeGameServerGroup</a> |
 *                     <a>UpdateGameServerGroup</a> |
 *                     <a>DeleteGameServerGroup</a> |
 *                     <a>ResumeGameServerGroup</a> |
 *                     <a>SuspendGameServerGroup</a> |
 *                     <a>DescribeGameServerInstances</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGameServerGroupCommand extends $Command<UpdateGameServerGroupCommandInput, UpdateGameServerGroupCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateGameServerGroupCommandInput;
    constructor(input: UpdateGameServerGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGameServerGroupCommandInput, UpdateGameServerGroupCommandOutput>;
    private serialize;
    private deserialize;
}
