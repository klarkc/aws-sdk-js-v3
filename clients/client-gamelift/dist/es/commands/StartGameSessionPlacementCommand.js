import { __extends } from "tslib";
import { StartGameSessionPlacementInput, StartGameSessionPlacementOutput } from "../models/models_0";
import { deserializeAws_json1_1StartGameSessionPlacementCommand, serializeAws_json1_1StartGameSessionPlacementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Places a request for a new game session in a queue (see <a>CreateGameSessionQueue</a>). When processing a placement request, Amazon GameLift
 *         searches for available resources on the queue's destinations, scanning each until it
 *         finds resources or the placement request times out.</p>
 *          <p>A game session placement request can also request player sessions. When a new game
 *         session is successfully created, Amazon GameLift creates a player session for each player
 *         included in the request.</p>
 *          <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they
 *         are listed in the queue configuration. Ideally, a queue's destinations are listed in
 *         preference order.</p>
 *          <p>Alternatively, when requesting a game session with players, you can also provide
 *         latency data for each player in relevant Regions. Latency data indicates the performance
 *         lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency
 *         data to reorder the list of destinations to place the game session in a Region with
 *         minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each
 *         Region's average lag for all players and reorders to get the best game play across all
 *         players. </p>
 *          <p>To place a new game session request, specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>The queue name and a set of game session properties and settings</p>
 *             </li>
 *             <li>
 *                <p>A unique ID (such as a UUID) for the placement. You use this ID to track
 *                 the status of the placement request</p>
 *             </li>
 *             <li>
 *                <p>(Optional) A set of player data and a unique player ID for each player that
 *                 you are joining to the new game session (player data is optional, but if you
 *                 include it, you must also provide a unique ID for each player)</p>
 *             </li>
 *             <li>
 *                <p>Latency data for all players (if you want to optimize game play for the
 *                 players)</p>
 *             </li>
 *          </ul>
 *          <p>If successful, a new game session placement is created.</p>
 *          <p>To track the status of a placement request, call <a>DescribeGameSessionPlacement</a> and check the request's status. If the
 *         status is <code>FULFILLED</code>, a new game session has been created and a game session
 *         ARN and Region are referenced. If the placement request times out, you can resubmit the
 *         request or retry it with a different queue. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StartGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartGameSessionPlacementCommand = /** @class */ (function (_super) {
    __extends(StartGameSessionPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartGameSessionPlacementCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    StartGameSessionPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "StartGameSessionPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartGameSessionPlacementInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartGameSessionPlacementOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartGameSessionPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartGameSessionPlacementCommand(input, context);
    };
    StartGameSessionPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartGameSessionPlacementCommand(output, context);
    };
    return StartGameSessionPlacementCommand;
}($Command));
export { StartGameSessionPlacementCommand };
//# sourceMappingURL=StartGameSessionPlacementCommand.js.map