import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionInput, CreatePlayerSessionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlayerSessionCommandInput extends CreatePlayerSessionInput {
}
export interface CreatePlayerSessionCommandOutput extends CreatePlayerSessionOutput, __MetadataBearer {
}
/**
 * <p>Reserves an open player slot in a game session for a player. New player sessions can be
 *             created in any game session with an open slot that is in <code>ACTIVE</code> status and
 *             has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players
 *             to a game session with <a>CreatePlayerSessions</a>. </p>
 *          <p>To create a player session, specify a game session ID, player ID, and optionally a set of
 *             player data. </p>
 *         <p>If successful, a slot is reserved in the game session for the player and a new <a>PlayerSession</a> object is returned with a player session ID. The player
 *             references the player session ID when sending a connection request to the game session,
 *             and the game server can use it to validate the player reservation with the GameLift service. Player
 *             sessions cannot be updated. </p>
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
 * import { GameLiftClient, CreatePlayerSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreatePlayerSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlayerSessionCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlayerSessionCommand extends $Command<CreatePlayerSessionCommandInput, CreatePlayerSessionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreatePlayerSessionCommandInput;
    constructor(input: CreatePlayerSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlayerSessionCommandInput, CreatePlayerSessionCommandOutput>;
    private serialize;
    private deserialize;
}
