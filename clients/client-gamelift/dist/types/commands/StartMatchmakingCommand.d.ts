import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchmakingInput, StartMatchmakingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMatchmakingCommandInput extends StartMatchmakingInput {
}
export interface StartMatchmakingCommandOutput extends StartMatchmakingOutput, __MetadataBearer {
}
/**
 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking
 *             rules. With games that use GameLift managed hosting, this operation also triggers GameLift
 *             to find hosting resources and start a new game session for the new match. Each
 *             matchmaking request includes information on one or more players and specifies the
 *             FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to
 *             build a match that includes all players in the request, placing them in the same team
 *             and finding additional players as needed to fill the match. </p>
 *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. You must also include any player attributes that
 *             are required by the matchmaking configuration's rule set. If successful, a matchmaking
 *             ticket is returned with status set to <code>QUEUED</code>. </p>
 *         <p>Track matchmaking events to respond as needed and acquire game session connection
 *             information for successfully completed matches. Ticket status updates are tracked using
 *             event notification through Amazon Simple Notification Service (SNS), which is defined in the matchmaking
 *             configuration.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *             Add FlexMatch to a game client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set Up FlexMatch event notification</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *             How GameLift FlexMatch works</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>StartMatchmaking</a> |
 *                     <a>DescribeMatchmaking</a> |
 *                     <a>StopMatchmaking</a> |
 *                     <a>AcceptMatch</a> |
 *                     <a>StartMatchBackfill</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StartMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMatchmakingCommand extends $Command<StartMatchmakingCommandInput, StartMatchmakingCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartMatchmakingCommandInput;
    constructor(input: StartMatchmakingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMatchmakingCommandInput, StartMatchmakingCommandOutput>;
    private serialize;
    private deserialize;
}
