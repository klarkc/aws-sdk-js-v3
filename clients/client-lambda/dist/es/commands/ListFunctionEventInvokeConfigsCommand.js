import { __extends } from "tslib";
import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand, serializeAws_restJson1ListFunctionEventInvokeConfigsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionEventInvokeConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionEventInvokeConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionEventInvokeConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionEventInvokeConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionEventInvokeConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFunctionEventInvokeConfigsCommand = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFunctionEventInvokeConfigsCommand(input) {
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
    ListFunctionEventInvokeConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListFunctionEventInvokeConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFunctionEventInvokeConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFunctionEventInvokeConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFunctionEventInvokeConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFunctionEventInvokeConfigsCommand(input, context);
    };
    ListFunctionEventInvokeConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand(output, context);
    };
    return ListFunctionEventInvokeConfigsCommand;
}($Command));
export { ListFunctionEventInvokeConfigsCommand };
//# sourceMappingURL=ListFunctionEventInvokeConfigsCommand.js.map