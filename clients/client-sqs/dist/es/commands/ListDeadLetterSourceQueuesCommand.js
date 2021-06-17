import { __extends } from "tslib";
import { ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult } from "../models/models_0";
import { deserializeAws_queryListDeadLetterSourceQueuesCommand, serializeAws_queryListDeadLetterSourceQueuesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p>
 *          <p> The <code>ListDeadLetterSourceQueues</code> methods supports
 *           pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of
 *           results to be returned in the response. If you do not set <code>MaxResults</code>,
 *           the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to
 *           display, the response includes a value for <code>NextToken</code>. Use
 *           <code>NextToken</code> as a parameter in your next request to
 *           <code>ListDeadLetterSourceQueues</code> to receive the next page of results.   </p>
 *
 *          <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a>
 *           in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListDeadLetterSourceQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListDeadLetterSourceQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListDeadLetterSourceQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeadLetterSourceQueuesCommandInput} for command's `input` shape.
 * @see {@link ListDeadLetterSourceQueuesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeadLetterSourceQueuesCommand = /** @class */ (function (_super) {
    __extends(ListDeadLetterSourceQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeadLetterSourceQueuesCommand(input) {
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
    ListDeadLetterSourceQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "ListDeadLetterSourceQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeadLetterSourceQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeadLetterSourceQueuesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeadLetterSourceQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListDeadLetterSourceQueuesCommand(input, context);
    };
    ListDeadLetterSourceQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListDeadLetterSourceQueuesCommand(output, context);
    };
    return ListDeadLetterSourceQueuesCommand;
}($Command));
export { ListDeadLetterSourceQueuesCommand };
//# sourceMappingURL=ListDeadLetterSourceQueuesCommand.js.map