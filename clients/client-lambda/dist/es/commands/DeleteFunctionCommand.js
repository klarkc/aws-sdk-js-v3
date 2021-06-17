import { __extends } from "tslib";
import { DeleteFunctionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFunctionCommand, serializeAws_restJson1DeleteFunctionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter.
 *       Otherwise, all versions and aliases are deleted.</p>
 *
 *          <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>.
 *       For AWS services and resources that invoke your function directly, delete the trigger in the service where you
 *       originally configured it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFunctionCommand = /** @class */ (function (_super) {
    __extends(DeleteFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFunctionCommand(input) {
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
    DeleteFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFunctionCommand(input, context);
    };
    DeleteFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFunctionCommand(output, context);
    };
    return DeleteFunctionCommand;
}($Command));
export { DeleteFunctionCommand };
//# sourceMappingURL=DeleteFunctionCommand.js.map