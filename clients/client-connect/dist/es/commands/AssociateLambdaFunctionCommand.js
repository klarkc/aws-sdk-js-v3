import { __extends } from "tslib";
import { AssociateLambdaFunctionRequest } from "../models/models_0";
import { deserializeAws_restJson1AssociateLambdaFunctionCommand, serializeAws_restJson1AssociateLambdaFunctionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Lambda function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateLambdaFunctionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateLambdaFunctionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateLambdaFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLambdaFunctionCommandInput} for command's `input` shape.
 * @see {@link AssociateLambdaFunctionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateLambdaFunctionCommand = /** @class */ (function (_super) {
    __extends(AssociateLambdaFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateLambdaFunctionCommand(input) {
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
    AssociateLambdaFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateLambdaFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateLambdaFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateLambdaFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateLambdaFunctionCommand(input, context);
    };
    AssociateLambdaFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateLambdaFunctionCommand(output, context);
    };
    return AssociateLambdaFunctionCommand;
}($Command));
export { AssociateLambdaFunctionCommand };
//# sourceMappingURL=AssociateLambdaFunctionCommand.js.map