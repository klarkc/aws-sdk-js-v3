import { __extends } from "tslib";
import { InvocationRequest, InvocationResponse } from "../models/models_0";
import { deserializeAws_restJson1InvokeCommand, serializeAws_restJson1InvokeCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or
 *       asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p>
 *
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>,
 *       details about the function response, including errors, are included in the response body and headers. For either
 *       invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p>
 *
 *          <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type,
 *       client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an
 *       error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p>
 *
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>,
 *       Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity
 *       to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple
 *       times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a>.</p>
 *
 *          <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that
 *       prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration.
 *       For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to
 *       exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or
 *       function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p>
 *
 *          <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it
 *       waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long
 *       connections with timeout or keep-alive settings.</p>
 *
 *          <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeCommandInput} for command's `input` shape.
 * @see {@link InvokeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InvokeCommand = /** @class */ (function (_super) {
    __extends(InvokeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvokeCommand(input) {
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
    InvokeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "InvokeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InvocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvokeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InvokeCommand(input, context);
    };
    InvokeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InvokeCommand(output, context);
    };
    return InvokeCommand;
}($Command));
export { InvokeCommand };
//# sourceMappingURL=InvokeCommand.js.map