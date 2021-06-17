import { __extends } from "tslib";
import { DeleteMessageBatchRequest, DeleteMessageBatchResult } from "../models/models_0";
import { deserializeAws_queryDeleteMessageBatchCommand, serializeAws_queryDeleteMessageBatchCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code>
 *                <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          </important>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteMessageBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessageBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMessageBatchCommand = /** @class */ (function (_super) {
    __extends(DeleteMessageBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMessageBatchCommand(input) {
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
    DeleteMessageBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "DeleteMessageBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMessageBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMessageBatchResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMessageBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteMessageBatchCommand(input, context);
    };
    DeleteMessageBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteMessageBatchCommand(output, context);
    };
    return DeleteMessageBatchCommand;
}($Command));
export { DeleteMessageBatchCommand };
//# sourceMappingURL=DeleteMessageBatchCommand.js.map