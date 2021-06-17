import { __extends } from "tslib";
import { ListQueueTagsRequest, ListQueueTagsResult } from "../models/models_0";
import { deserializeAws_queryListQueueTagsCommand, serializeAws_queryListQueueTagsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueueTagsCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueueTagsCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListQueueTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueueTagsCommandInput} for command's `input` shape.
 * @see {@link ListQueueTagsCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueueTagsCommand = /** @class */ (function (_super) {
    __extends(ListQueueTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQueueTagsCommand(input) {
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
    ListQueueTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "ListQueueTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQueueTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQueueTagsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQueueTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListQueueTagsCommand(input, context);
    };
    ListQueueTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListQueueTagsCommand(output, context);
    };
    return ListQueueTagsCommand;
}($Command));
export { ListQueueTagsCommand };
//# sourceMappingURL=ListQueueTagsCommand.js.map