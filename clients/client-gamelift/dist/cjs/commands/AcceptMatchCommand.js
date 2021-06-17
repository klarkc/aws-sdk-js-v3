"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptMatchCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A
 *             matchmaking configuration may require player acceptance; if so, then matches built with
 *             that configuration cannot be completed unless all players accept the proposed match
 *             within a specified time limit. </p>
 *         <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed
 *             match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for
 *             your game to get acceptance from all players in the ticket. Acceptances are only valid
 *             for tickets when they are in this status; all other acceptances result in an
 *             error.</p>
 *         <p>To register acceptance, specify the ticket ID, a response, and one or more players.
 *             Once all players have registered acceptance, the matchmaking tickets advance to status
 *             <code>PLACING</code>, where a new game session is created for the match. </p>
 *         <p>If any player rejects the match, or if acceptances are not received before a specified
 *             timeout, the proposed match is dropped. The matchmaking tickets are then handled in one
 *             of two ways: For tickets where one or more players rejected the match, the ticket status
 *             is returned to <code>SEARCHING</code> to find a new match. For tickets where one or more
 *             players failed to respond, the ticket status is set to <code>CANCELLED</code>, and
 *             processing is terminated. A new matchmaking request for these players can be submitted
 *             as needed. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>
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
 * import { GameLiftClient, AcceptMatchCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, AcceptMatchCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new AcceptMatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptMatchCommandInput} for command's `input` shape.
 * @see {@link AcceptMatchCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptMatchCommand extends smithy_client_1.Command {
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
        const commandName = "AcceptMatchCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AcceptMatchInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AcceptMatchOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AcceptMatchCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AcceptMatchCommand(output, context);
    }
}
exports.AcceptMatchCommand = AcceptMatchCommand;
//# sourceMappingURL=AcceptMatchCommand.js.map