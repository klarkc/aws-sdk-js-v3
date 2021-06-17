import { __extends } from "tslib";
import { UntagQueueRequest } from "../models/models_0";
import { deserializeAws_queryUntagQueueCommand, serializeAws_queryUntagQueueCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, UntagQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, UntagQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new UntagQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagQueueCommandInput} for command's `input` shape.
 * @see {@link UntagQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagQueueCommand = /** @class */ (function (_super) {
    __extends(UntagQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagQueueCommand(input) {
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
    UntagQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "UntagQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagQueueCommand(input, context);
    };
    UntagQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagQueueCommand(output, context);
    };
    return UntagQueueCommand;
}($Command));
export { UntagQueueCommand };
//# sourceMappingURL=UntagQueueCommand.js.map