import { __extends } from "tslib";
import { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0";
import { deserializeAws_restJson1InvokeAsyncCommand, serializeAws_restJson1InvokeAsyncCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <important>
 *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
 *          </important>
 *          <p>Invokes a function asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeAsyncCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeAsyncCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeAsyncCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InvokeAsyncCommand = /** @class */ (function (_super) {
    __extends(InvokeAsyncCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvokeAsyncCommand(input) {
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
    InvokeAsyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "InvokeAsyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvokeAsyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InvokeAsyncResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvokeAsyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InvokeAsyncCommand(input, context);
    };
    InvokeAsyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InvokeAsyncCommand(output, context);
    };
    return InvokeAsyncCommand;
}($Command));
export { InvokeAsyncCommand };
//# sourceMappingURL=InvokeAsyncCommand.js.map