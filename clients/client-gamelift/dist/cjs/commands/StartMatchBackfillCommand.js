"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMatchBackfillCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Finds new players to fill open slots in currently running game sessions.
 *             The backfill match process is essentially identical to the process of forming new
 *             matches. Backfill
 *             requests use the same matchmaker that was used to make the original match, and they provide
 *             matchmaking data for all players currently in the game session. FlexMatch uses this information
 *             to select new players so that backfilled match continues to meet the original match requirements. </p>
 *         <p>When using FlexMatch with GameLift managed hosting, you can request a backfill match from
 *             a client service by calling this operation with a <a>GameSession</a>
 *             identifier. You also have the option of making backfill requests directly from your game
 *             server. In response to a request, FlexMatch creates player sessions for the new players,
 *             updates the <code>GameSession</code> resource, and sends updated matchmaking data to the
 *             game server. You can request a backfill match at any point after a game session is
 *             started. Each game session can have only one active backfill request at a time; a
 *             subsequent request automatically replaces the earlier request.</p>
 *         <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation
 *         without a game session identifier. As with newly formed matches, matchmaking results are returned
 *         in a matchmaking event so that your game can update the game session that is being backfilled.</p>
 *         <p>To request a backfill match, specify a unique ticket ID, the original matchmaking
 *             configuration, and matchmaking data for all current players in the game session being
 *             backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match
 *             backfill ticket is created and returned with status set to QUEUED. Track the status of
 *             backfill tickets using the same method for tracking tickets for new matches.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">
 *             Backfill existing games with FlexMatch</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html">
 *             Matchmaking events</a> (reference)</p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How GameLift FlexMatch works</a>
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
 * import { GameLiftClient, StartMatchBackfillCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchBackfillCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartMatchBackfillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMatchBackfillCommandInput} for command's `input` shape.
 * @see {@link StartMatchBackfillCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartMatchBackfillCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "StartMatchBackfillCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartMatchBackfillInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartMatchBackfillOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartMatchBackfillCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartMatchBackfillCommand(output, context);
    }
}
exports.StartMatchBackfillCommand = StartMatchBackfillCommand;
//# sourceMappingURL=StartMatchBackfillCommand.js.map