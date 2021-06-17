import { __extends } from "tslib";
import { DescribeGameSessionsInput, DescribeGameSessionsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameSessionsCommand, serializeAws_json1_1DescribeGameSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a set of one or more game sessions in a specific fleet location. You can
 *             optionally filter the results by current game session status. Alternatively, use <a>SearchGameSessions</a> to request a set of active game sessions that are
 *             filtered by certain criteria. To retrieve the protection policy for game sessions, use
 *                 <a>DescribeGameSessionDetails</a>.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID, with an optional status filter. This
 *                     approach returns all game sessions in the fleet's home Region and all remote
 *                     locations.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name, with optional status
 *                     filter. The location can be the fleet's home Region or any remote
 *                     location.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve a specific game session, provide the game session ID. This
 *                     approach looks for the game session ID in all fleets that reside in the AWS
 *                     Region defined in the request.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request.</p>
 *         <p>
 *             <i>Available in GameLift Local.</i>
 *          </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a>
 *          </p>
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
 * import { GameLiftClient, DescribeGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGameSessionsCommand = /** @class */ (function (_super) {
    __extends(DescribeGameSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameSessionsCommand(input) {
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
    DescribeGameSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameSessionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameSessionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameSessionsCommand(input, context);
    };
    DescribeGameSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameSessionsCommand(output, context);
    };
    return DescribeGameSessionsCommand;
}($Command));
export { DescribeGameSessionsCommand };
//# sourceMappingURL=DescribeGameSessionsCommand.js.map