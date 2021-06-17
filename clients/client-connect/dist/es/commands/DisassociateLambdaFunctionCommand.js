import { __extends } from "tslib";
import { DisassociateLambdaFunctionRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateLambdaFunctionCommand, serializeAws_restJson1DisassociateLambdaFunctionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Remove the Lambda function from the dropdown options available in the relevant contact flow
 *    blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateLambdaFunctionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateLambdaFunctionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateLambdaFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLambdaFunctionCommandInput} for command's `input` shape.
 * @see {@link DisassociateLambdaFunctionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateLambdaFunctionCommand = /** @class */ (function (_super) {
    __extends(DisassociateLambdaFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateLambdaFunctionCommand(input) {
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
    DisassociateLambdaFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateLambdaFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateLambdaFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateLambdaFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateLambdaFunctionCommand(input, context);
    };
    DisassociateLambdaFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateLambdaFunctionCommand(output, context);
    };
    return DisassociateLambdaFunctionCommand;
}($Command));
export { DisassociateLambdaFunctionCommand };
//# sourceMappingURL=DisassociateLambdaFunctionCommand.js.map