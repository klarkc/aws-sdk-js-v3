import { __extends } from "tslib";
import { UpdateGameSessionInput, UpdateGameSessionOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateGameSessionCommand, serializeAws_json1_1UpdateGameSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the mutable properties of a game session. </p>
 *         <p>To update a game session, specify the game session ID and the values you want to
 *             change. </p>
 *         <p>If successful, the updated <code>GameSession</code> object is returned. </p>
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
 * import { GameLiftClient, UpdateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGameSessionCommand = /** @class */ (function (_super) {
    __extends(UpdateGameSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGameSessionCommand(input) {
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
    UpdateGameSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateGameSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGameSessionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGameSessionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGameSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGameSessionCommand(input, context);
    };
    UpdateGameSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGameSessionCommand(output, context);
    };
    return UpdateGameSessionCommand;
}($Command));
export { UpdateGameSessionCommand };
//# sourceMappingURL=UpdateGameSessionCommand.js.map