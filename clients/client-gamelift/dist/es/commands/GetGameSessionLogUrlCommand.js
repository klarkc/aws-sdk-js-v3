import { __extends } from "tslib";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/models_0";
import { deserializeAws_json1_1GetGameSessionLogUrlCommand, serializeAws_json1_1GetGameSessionLogUrlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the location of stored game session logs for a specified game session.
 *             When a game session is terminated, GameLift automatically stores the logs in Amazon S3 and
 *             retains them for 14 days. Use this URL to download the logs.</p>
 *         <note>
 *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">AWS Service
 *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
 *                 are not saved.</p>
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
 * import { GameLiftClient, GetGameSessionLogUrlCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetGameSessionLogUrlCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetGameSessionLogUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameSessionLogUrlCommandInput} for command's `input` shape.
 * @see {@link GetGameSessionLogUrlCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGameSessionLogUrlCommand = /** @class */ (function (_super) {
    __extends(GetGameSessionLogUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGameSessionLogUrlCommand(input) {
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
    GetGameSessionLogUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "GetGameSessionLogUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGameSessionLogUrlInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetGameSessionLogUrlOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGameSessionLogUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetGameSessionLogUrlCommand(input, context);
    };
    GetGameSessionLogUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetGameSessionLogUrlCommand(output, context);
    };
    return GetGameSessionLogUrlCommand;
}($Command));
export { GetGameSessionLogUrlCommand };
//# sourceMappingURL=GetGameSessionLogUrlCommand.js.map