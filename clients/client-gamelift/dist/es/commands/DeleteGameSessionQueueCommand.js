import { __extends } from "tslib";
import { DeleteGameSessionQueueInput, DeleteGameSessionQueueOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteGameSessionQueueCommand, serializeAws_json1_1DeleteGameSessionQueueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a>StartGameSessionPlacement</a> requests that reference the queue will fail.
 *             To delete a queue, specify the queue name.</p>
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
 * import { GameLiftClient, DeleteGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteGameSessionQueueCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGameSessionQueueCommand = /** @class */ (function (_super) {
    __extends(DeleteGameSessionQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGameSessionQueueCommand(input) {
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
    DeleteGameSessionQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteGameSessionQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGameSessionQueueInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGameSessionQueueOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGameSessionQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteGameSessionQueueCommand(input, context);
    };
    DeleteGameSessionQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteGameSessionQueueCommand(output, context);
    };
    return DeleteGameSessionQueueCommand;
}($Command));
export { DeleteGameSessionQueueCommand };
//# sourceMappingURL=DeleteGameSessionQueueCommand.js.map