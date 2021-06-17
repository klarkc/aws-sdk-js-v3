import { __extends } from "tslib";
import { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribePlayerSessionsCommand, serializeAws_json1_1DescribePlayerSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribePlayerSessionsCommand = /** @class */ (function (_super) {
    __extends(DescribePlayerSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePlayerSessionsCommand(input) {
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
    DescribePlayerSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribePlayerSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlayerSessionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePlayerSessionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlayerSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePlayerSessionsCommand(input, context);
    };
    DescribePlayerSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePlayerSessionsCommand(output, context);
    };
    return DescribePlayerSessionsCommand;
}($Command));
export { DescribePlayerSessionsCommand };
//# sourceMappingURL=DescribePlayerSessionsCommand.js.map