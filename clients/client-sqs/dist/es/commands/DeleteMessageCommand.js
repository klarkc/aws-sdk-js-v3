import { __extends } from "tslib";
import { DeleteMessageRequest } from "../models/models_0";
import { deserializeAws_queryDeleteMessageCommand, serializeAws_queryDeleteMessageCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified message from the specified queue. To select the message to
 *             delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the
 *                 <code>MessageId</code> which you receive when you send the message). Amazon SQS can
 *             delete a message from a queue even if a visibility timeout setting causes the message to
 *             be locked by another consumer. Amazon SQS automatically deletes messages left in a queue
 *             longer than the retention period configured for the queue. </p>
 *          <note>
 *             <p>The <code>ReceiptHandle</code> is associated with a <i>specific
 *                     instance</i> of receiving a message. If you receive a message more than
 *                 once, the <code>ReceiptHandle</code> is different each time you receive a message.
 *                 When you use the <code>DeleteMessage</code> action, you must provide the most
 *                 recently received <code>ReceiptHandle</code> for the message (otherwise, the request
 *                 succeeds, but the message might not be deleted).</p>
 *             <p>For standard queues, it is possible to receive a message even after you
 *                 delete it. This might happen on rare occasions if one of the servers which stores a
 *                 copy of the message is unavailable when you send the request to delete the message.
 *                 The copy remains on the server and might be returned to you during a subsequent
 *                 receive request. You should ensure that your application is idempotent, so that
 *                 receiving a message more than once does not cause issues.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMessageCommand = /** @class */ (function (_super) {
    __extends(DeleteMessageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMessageCommand(input) {
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
    DeleteMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "DeleteMessageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMessageCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteMessageCommand(input, context);
    };
    DeleteMessageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteMessageCommand(output, context);
    };
    return DeleteMessageCommand;
}($Command));
export { DeleteMessageCommand };
//# sourceMappingURL=DeleteMessageCommand.js.map