import { __extends } from "tslib";
import { SearchGameSessionsInput, SearchGameSessionsOutput } from "../models/models_0";
import { deserializeAws_json1_1SearchGameSessionsCommand, serializeAws_json1_1SearchGameSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all active game sessions that match a set of search criteria and sorts them
 *             into a specified order. </p>
 *         <p>When searching for game sessions, you specify exactly where you want to search and
 *             provide a search filter expression, a sort expression, or both. A search request can
 *             search only one fleet, but it can search all of a fleet's locations.  </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To search all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID. This approach returns game sessions in the
 *                     fleet's home Region and all remote locations that fit the search
 *                     criteria.</p>
 *             </li>
 *             <li>
 *                 <p>To search all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name. For location, you can
 *                     specify a fleet's home Region or any remote location.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request. Search finds game sessions that are in <code>ACTIVE</code>
 *             status only. To retrieve information on game sessions in other statuses, use <a>DescribeGameSessions</a>.</p>
 *         <p>You can search or sort by the following game session attributes:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>gameSessionId</b> -- A unique identifier for the game session. You can use
 *                     either a <code>GameSessionId</code> or <code>GameSessionArn</code> value.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionName</b> -- Name assigned to a game
 *                     session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>. Game session names do not need to be unique
 *                     to a game session.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionProperties</b> -- Custom data
 *                     defined in a game session's <code>GameProperty</code> parameter.
 *                         <code>GameProperty</code> values are stored as key:value pairs; the filter
 *                     expression must indicate the key and a string to search the data values for. For
 *                     example, to search for game sessions with custom data containing the key:value
 *                     pair "gameMode:brawl", specify the following:
 *                         <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data
 *                     values are searched as strings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>maximumSessions</b> -- Maximum number of
 *                     player sessions allowed for a game session. This value is set when requesting a
 *                     new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>creationTimeMillis</b> -- Value indicating
 *                     when a game session was created. It is expressed in Unix time as
 *                     milliseconds.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>playerSessionCount</b> -- Number of players
 *                     currently connected to a game session. This value changes rapidly as players
 *                     join the session or drop out.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>hasAvailablePlayerSessions</b> -- Boolean
 *                     value indicating whether a game session has reached its maximum number of
 *                     players. It is highly recommended that all search requests include this filter
 *                     attribute to optimize search performance and return only sessions that players
 *                     can join. </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>Returned values for <code>playerSessionCount</code> and
 *                     <code>hasAvailablePlayerSessions</code> change quickly as players join sessions
 *                 and others drop out. Results should be considered a snapshot in time. Be sure to
 *                 refresh search results often, and handle sessions that fill up before a player can
 *                 join. </p>
 *         </note>
 *         <p>
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
 * import { GameLiftClient, SearchGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SearchGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new SearchGameSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchGameSessionsCommandInput} for command's `input` shape.
 * @see {@link SearchGameSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchGameSessionsCommand = /** @class */ (function (_super) {
    __extends(SearchGameSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchGameSessionsCommand(input) {
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
    SearchGameSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "SearchGameSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchGameSessionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: SearchGameSessionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchGameSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchGameSessionsCommand(input, context);
    };
    SearchGameSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchGameSessionsCommand(output, context);
    };
    return SearchGameSessionsCommand;
}($Command));
export { SearchGameSessionsCommand };
//# sourceMappingURL=SearchGameSessionsCommand.js.map