import { __extends } from "tslib";
import { StopGameSessionPlacementInput, StopGameSessionPlacementOutput } from "../models/models_0";
import { deserializeAws_json1_1StopGameSessionPlacementCommand, serializeAws_json1_1StopGameSessionPlacementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a
 *         placement, provide the placement ID values. If successful, the placement is moved to
 *         <code>CANCELLED</code> status.</p>
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
 * import { GameLiftClient, StopGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StopGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StopGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopGameSessionPlacementCommand = /** @class */ (function (_super) {
    __extends(StopGameSessionPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopGameSessionPlacementCommand(input) {
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
    StopGameSessionPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "StopGameSessionPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopGameSessionPlacementInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopGameSessionPlacementOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopGameSessionPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopGameSessionPlacementCommand(input, context);
    };
    StopGameSessionPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopGameSessionPlacementCommand(output, context);
    };
    return StopGameSessionPlacementCommand;
}($Command));
export { StopGameSessionPlacementCommand };
//# sourceMappingURL=StopGameSessionPlacementCommand.js.map