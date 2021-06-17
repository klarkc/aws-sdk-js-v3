import { __extends } from "tslib";
import { CreatePlayerSessionInput, CreatePlayerSessionOutput } from "../models/models_0";
import { deserializeAws_json1_1CreatePlayerSessionCommand, serializeAws_json1_1CreatePlayerSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreatePlayerSessionCommand = /** @class */ (function (_super) {
    __extends(CreatePlayerSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlayerSessionCommand(input) {
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
    CreatePlayerSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreatePlayerSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlayerSessionInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePlayerSessionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlayerSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePlayerSessionCommand(input, context);
    };
    CreatePlayerSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePlayerSessionCommand(output, context);
    };
    return CreatePlayerSessionCommand;
}($Command));
export { CreatePlayerSessionCommand };
//# sourceMappingURL=CreatePlayerSessionCommand.js.map