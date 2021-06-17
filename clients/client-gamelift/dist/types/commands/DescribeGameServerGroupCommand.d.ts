import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameServerGroupInput, DescribeGameServerGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGameServerGroupCommandInput extends DescribeGameServerGroupInput {
}
export interface DescribeGameServerGroupCommandOutput extends DescribeGameServerGroupOutput, __MetadataBearer {
}
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on a game server group. This operation returns only properties
 *             related to GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group,
 *             such as launch template, auto scaling policies, and maximum/minimum group size, access
 *             the Auto Scaling group directly.</p>
 *         <p>To get attributes for a game server group, provide a group name or ARN value. If
 *             successful, a <a>GameServerGroup</a> object is returned.</p>
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
 * import { GameLiftClient, DescribeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGameServerGroupCommand extends $Command<DescribeGameServerGroupCommandInput, DescribeGameServerGroupCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameServerGroupCommandInput;
    constructor(input: DescribeGameServerGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameServerGroupCommandInput, DescribeGameServerGroupCommandOutput>;
    private serialize;
    private deserialize;
}
