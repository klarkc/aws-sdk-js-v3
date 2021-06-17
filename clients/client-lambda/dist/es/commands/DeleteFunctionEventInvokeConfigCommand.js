import { __extends } from "tslib";
import { DeleteFunctionEventInvokeConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand, serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFunctionEventInvokeConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFunctionEventInvokeConfigCommand(input) {
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
    DeleteFunctionEventInvokeConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteFunctionEventInvokeConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFunctionEventInvokeConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFunctionEventInvokeConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand(input, context);
    };
    DeleteFunctionEventInvokeConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand(output, context);
    };
    return DeleteFunctionEventInvokeConfigCommand;
}($Command));
export { DeleteFunctionEventInvokeConfigCommand };
//# sourceMappingURL=DeleteFunctionEventInvokeConfigCommand.js.map