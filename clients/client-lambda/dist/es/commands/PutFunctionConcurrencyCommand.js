import { __extends } from "tslib";
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
import { deserializeAws_restJson1PutFunctionConcurrencyCommand, serializeAws_restJson1PutFunctionConcurrencyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
 *       level.</p>
 *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
 *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
 *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
 *       the current setting for a function.</p>
 *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
 *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
 *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link PutFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFunctionConcurrencyCommand = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFunctionConcurrencyCommand(input) {
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
    PutFunctionConcurrencyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "PutFunctionConcurrencyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFunctionConcurrencyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Concurrency.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFunctionConcurrencyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutFunctionConcurrencyCommand(input, context);
    };
    PutFunctionConcurrencyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutFunctionConcurrencyCommand(output, context);
    };
    return PutFunctionConcurrencyCommand;
}($Command));
export { PutFunctionConcurrencyCommand };
//# sourceMappingURL=PutFunctionConcurrencyCommand.js.map