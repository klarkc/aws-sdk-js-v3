import { __extends } from "tslib";
import { GetQueueUrlRequest, GetQueueUrlResult } from "../models/models_0";
import { deserializeAws_queryGetQueueUrlCommand, serializeAws_queryGetQueueUrlCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the URL of an existing Amazon SQS queue.</p>
 *          <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue.
 *           For more information about shared queue access, see <code>
 *                <a>AddPermission</a>
 *             </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueUrlCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueUrlCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new GetQueueUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueueUrlCommandInput} for command's `input` shape.
 * @see {@link GetQueueUrlCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueueUrlCommand = /** @class */ (function (_super) {
    __extends(GetQueueUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQueueUrlCommand(input) {
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
    GetQueueUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "GetQueueUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQueueUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQueueUrlResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQueueUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetQueueUrlCommand(input, context);
    };
    GetQueueUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetQueueUrlCommand(output, context);
    };
    return GetQueueUrlCommand;
}($Command));
export { GetQueueUrlCommand };
//# sourceMappingURL=GetQueueUrlCommand.js.map