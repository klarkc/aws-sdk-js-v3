import { __extends } from "tslib";
import { DescribeGameSessionPlacementInput, DescribeGameSessionPlacementOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameSessionPlacementCommand, serializeAws_json1_1DescribeGameSessionPlacementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information, including current status, about a game session placement request. </p>
 *         <p>To get game session placement details, specify the placement ID.</p>
 *         <p>If successful, a <a>GameSessionPlacement</a> object is returned.</p>
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
 * import { GameLiftClient, DescribeGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGameSessionPlacementCommand = /** @class */ (function (_super) {
    __extends(DescribeGameSessionPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameSessionPlacementCommand(input) {
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
    DescribeGameSessionPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameSessionPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameSessionPlacementInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameSessionPlacementOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameSessionPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameSessionPlacementCommand(input, context);
    };
    DescribeGameSessionPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameSessionPlacementCommand(output, context);
    };
    return DescribeGameSessionPlacementCommand;
}($Command));
export { DescribeGameSessionPlacementCommand };
//# sourceMappingURL=DescribeGameSessionPlacementCommand.js.map