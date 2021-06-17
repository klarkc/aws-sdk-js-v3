import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePlayerSessionsCommandInput extends DescribePlayerSessionsInput {
}
export interface DescribePlayerSessionsCommandOutput extends DescribePlayerSessionsOutput, __MetadataBearer {
}
/**
 * <p>Retrieves properties for one or more player sessions. </p>
 *         <p>This action can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve a specific player session, provide the player session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions in a game session, provide the game session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions for a specific player, provide a player ID
 *                     only.</p>
 *             </li>
 *          </ul>
 *          <p>To request player sessions, specify either a player session ID, game session ID, or player
 *             ID. You can filter this request by player session status. Use the pagination parameters
 *             to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>PlayerSession</code> object is returned for each session that
 *             matches the request.</p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreatePlayerSession</a> |
 *                     <a>CreatePlayerSessions</a> |
 *                     <a>DescribePlayerSessions</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribePlayerSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePlayerSessionsCommand extends $Command<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribePlayerSessionsCommandInput;
    constructor(input: DescribePlayerSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
