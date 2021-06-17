import { __extends } from "tslib";
import { CreateQueueRequest, CreateQueueResult } from "../models/models_0";
import { deserializeAws_queryCreateQueueCommand, serializeAws_queryCreateQueueCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in
 *             the request. Keep the following in mind:</p>
 *          <ul>
 *             <li>
 *               <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p>
 *               <note>
 *                   <p>You can't change the queue type after you create it and you can't convert
 *                         an existing standard queue into a FIFO queue. You must either create a new
 *                         FIFO queue for your application or delete your existing standard queue and
 *                         recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the
 *                             <i>Amazon Simple Queue Service Developer Guide</i>. </p>
 *               </note>
 *             </li>
 *             <li>
 *               <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p>
 *             </li>
 *             <li>
 *               <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p>
 *             </li>
 *          </ul>
 *
 *          <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p>
 *         <note>
 *             <p>After you create a queue, you must wait at least one second after the queue is
 *                 created to be able to use the queue.</p>
 *         </note>
 *          <p>To get the queue URL, use the <code>
 *                <a>GetQueueUrl</a>
 *             </code> action. <code>
 *                <a>GetQueueUrl</a>
 *             </code> requires only the <code>QueueName</code> parameter.
 *           be aware of existing queue names:</p>
 *          <ul>
 *             <li>
 *                <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p>
 *             </li>
 *             <li>
 *                <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p>
 *             </li>
 *          </ul>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, CreateQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, CreateQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQueueCommand = /** @class */ (function (_super) {
    __extends(CreateQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQueueCommand(input) {
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
    CreateQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "CreateQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQueueResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateQueueCommand(input, context);
    };
    CreateQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateQueueCommand(output, context);
    };
    return CreateQueueCommand;
}($Command));
export { CreateQueueCommand };
//# sourceMappingURL=CreateQueueCommand.js.map