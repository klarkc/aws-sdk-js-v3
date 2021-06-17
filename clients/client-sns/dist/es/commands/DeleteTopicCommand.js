import { __extends } from "tslib";
import { DeleteTopicInput } from "../models/models_0";
import { deserializeAws_queryDeleteTopicCommand, serializeAws_queryDeleteTopicCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 *             messages previously sent to the topic from being delivered to subscribers. This action
 *             is idempotent, so deleting a topic that does not exist does not result in an
 *             error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeleteTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTopicCommand = /** @class */ (function (_super) {
    __extends(DeleteTopicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTopicCommand(input) {
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
    DeleteTopicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "DeleteTopicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTopicInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTopicCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteTopicCommand(input, context);
    };
    DeleteTopicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteTopicCommand(output, context);
    };
    return DeleteTopicCommand;
}($Command));
export { DeleteTopicCommand };
//# sourceMappingURL=DeleteTopicCommand.js.map