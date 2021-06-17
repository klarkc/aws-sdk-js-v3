import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResumeGameServerGroupInput, ResumeGameServerGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResumeGameServerGroupCommandInput extends ResumeGameServerGroupInput {
}
export interface ResumeGameServerGroupCommandOutput extends ResumeGameServerGroupOutput, __MetadataBearer {
}
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Reinstates activity on a game server group after it has been suspended. A game server
 *             group might be suspended by the<a>SuspendGameServerGroup</a> operation, or it
 *             might be suspended involuntarily due to a configuration problem. In the second case, you
 *             can manually resume activity on the group once the configuration problem has been
 *             resolved. Refer to the game server group status and status reason for more information
 *             on why group activity is suspended.</p>
 *         <p>To resume activity, specify a game server group ARN and the type of activity to be
 *             resumed. If successful, a <a>GameServerGroup</a> object is returned showing
 *             that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
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
 * import { GameLiftClient, ResumeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResumeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ResumeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link ResumeGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeGameServerGroupCommand extends $Command<ResumeGameServerGroupCommandInput, ResumeGameServerGroupCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ResumeGameServerGroupCommandInput;
    constructor(input: ResumeGameServerGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeGameServerGroupCommandInput, ResumeGameServerGroupCommandOutput>;
    private serialize;
    private deserialize;
}
