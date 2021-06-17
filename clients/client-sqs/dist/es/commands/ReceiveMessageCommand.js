import { __extends } from "tslib";
import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/models_0";
import { deserializeAws_queryReceiveMessageCommand, serializeAws_queryReceiveMessageCommand, } from "../protocols/Aws_query";
import { getReceiveMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
 *     </p>
 *          <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned.
 *           If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small,
 *           you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request.
 *     </p>
 *          <p>For each message returned, the response includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The message body.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>MessageId</code> you received when you sent the message to the queue.</p>
 *             </li>
 *             <li>
 *                <p>The receipt handle.</p>
 *             </li>
 *             <li>
 *                <p>The message attributes.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message attributes.</p>
 *             </li>
 *          </ul>
 *          <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue
 *           and Message Identifiers</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue
 *           is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p>
 *          <note>
 *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ReceiveMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReceiveMessageCommandInput} for command's `input` shape.
 * @see {@link ReceiveMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReceiveMessageCommand = /** @class */ (function (_super) {
    __extends(ReceiveMessageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReceiveMessageCommand(input) {
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
    ReceiveMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getReceiveMessagePlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "ReceiveMessageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReceiveMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReceiveMessageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReceiveMessageCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryReceiveMessageCommand(input, context);
    };
    ReceiveMessageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryReceiveMessageCommand(output, context);
    };
    return ReceiveMessageCommand;
}($Command));
export { ReceiveMessageCommand };
//# sourceMappingURL=ReceiveMessageCommand.js.map