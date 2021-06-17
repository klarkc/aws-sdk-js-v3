import { __extends } from "tslib";
import { UpdateGameSessionQueueInput, UpdateGameSessionQueueOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateGameSessionQueueCommand, serializeAws_json1_1UpdateGameSessionQueueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of a game session queue, which determines how the queue
 *             processes new game session requests. To update settings, specify the queue name to be
 *             updated and provide the new settings. When updating destinations, provide a complete
 *             list of destinations. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">
 *             Using Multi-Region Queues</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSessionQueue</a> |
 *                     <a>DescribeGameSessionQueues</a> |
 *                     <a>UpdateGameSessionQueue</a> |
 *                     <a>DeleteGameSessionQueue</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionQueueCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGameSessionQueueCommand = /** @class */ (function (_super) {
    __extends(UpdateGameSessionQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGameSessionQueueCommand(input) {
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
    UpdateGameSessionQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateGameSessionQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGameSessionQueueInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGameSessionQueueOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGameSessionQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGameSessionQueueCommand(input, context);
    };
    UpdateGameSessionQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGameSessionQueueCommand(output, context);
    };
    return UpdateGameSessionQueueCommand;
}($Command));
export { UpdateGameSessionQueueCommand };
//# sourceMappingURL=UpdateGameSessionQueueCommand.js.map