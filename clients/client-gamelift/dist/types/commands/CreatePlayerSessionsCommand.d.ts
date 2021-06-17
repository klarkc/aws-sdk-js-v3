import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionsInput, CreatePlayerSessionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlayerSessionsCommandInput extends CreatePlayerSessionsInput {
}
export interface CreatePlayerSessionsCommandOutput extends CreatePlayerSessionsOutput, __MetadataBearer {
}
/**
 * <p>Reserves open slots in a game session for a group of players. New player sessions can be
 *             created in any game session with an open slot that is in <code>ACTIVE</code> status and
 *             has a player creation policy of <code>ACCEPT_ALL</code>.  To add a single player to a
 *             game session, use <a>CreatePlayerSession</a>. </p>
 *          <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally,
 *             provide a set of player data for each player ID. </p>
 *         <p>If successful, a slot is reserved in the game session for each player, and new <a>PlayerSession</a> objects are returned with player session IDs. Each player
 *             references their player session ID when sending a connection request to the game
 *             session, and the game server can use it to validate the player reservation with the
 *             GameLift service. Player sessions cannot be updated.</p>
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
 * import { GameLiftClient, CreatePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreatePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlayerSessionsCommand extends $Command<CreatePlayerSessionsCommandInput, CreatePlayerSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreatePlayerSessionsCommandInput;
    constructor(input: CreatePlayerSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlayerSessionsCommandInput, CreatePlayerSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
