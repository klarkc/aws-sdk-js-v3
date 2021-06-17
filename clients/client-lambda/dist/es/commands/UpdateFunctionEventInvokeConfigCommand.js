import { __extends } from "tslib";
import { FunctionEventInvokeConfig, UpdateFunctionEventInvokeConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand, serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFunctionEventInvokeConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFunctionEventInvokeConfigCommand(input) {
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
    UpdateFunctionEventInvokeConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateFunctionEventInvokeConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFunctionEventInvokeConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FunctionEventInvokeConfig.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFunctionEventInvokeConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand(input, context);
    };
    UpdateFunctionEventInvokeConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand(output, context);
    };
    return UpdateFunctionEventInvokeConfigCommand;
}($Command));
export { UpdateFunctionEventInvokeConfigCommand };
//# sourceMappingURL=UpdateFunctionEventInvokeConfigCommand.js.map