"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopMatchmakingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being
 *             processed. To stop the matchmaking operation, specify the ticket ID. If successful, work
 *             on the ticket is stopped, and the ticket status is changed to
 *             <code>CANCELLED</code>.</p>
 *         <p>This call is also used to turn off automatic backfill for an individual game session.
 *             This is for game sessions that are created with a matchmaking configuration that has
 *             automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code>
 *             of an updated game session object, which is provided to the game server.</p>
 *         <note>
 *             <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response
 *         (not an empty HTTP body).</p>
 *          </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
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
 * import { GameLiftClient, StopMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StopMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StopMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopMatchmakingCommand extends smithy_client_1.Command {
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
        const commandName = "StopMatchmakingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StopMatchmakingInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StopMatchmakingOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StopMatchmakingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StopMatchmakingCommand(output, context);
    }
}
exports.StopMatchmakingCommand = StopMatchmakingCommand;
//# sourceMappingURL=StopMatchmakingCommand.js.map