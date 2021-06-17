import { __extends } from "tslib";
import { DeleteFunctionConcurrencyRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFunctionConcurrencyCommand, serializeAws_restJson1DeleteFunctionConcurrencyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a concurrent execution limit from a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFunctionConcurrencyCommand = /** @class */ (function (_super) {
    __extends(DeleteFunctionConcurrencyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFunctionConcurrencyCommand(input) {
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
    DeleteFunctionConcurrencyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteFunctionConcurrencyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFunctionConcurrencyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFunctionConcurrencyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFunctionConcurrencyCommand(input, context);
    };
    DeleteFunctionConcurrencyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFunctionConcurrencyCommand(output, context);
    };
    return DeleteFunctionConcurrencyCommand;
}($Command));
export { DeleteFunctionConcurrencyCommand };
//# sourceMappingURL=DeleteFunctionConcurrencyCommand.js.map