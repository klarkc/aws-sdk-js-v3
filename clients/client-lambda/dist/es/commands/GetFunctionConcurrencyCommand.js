import { __extends } from "tslib";
import { GetFunctionConcurrencyRequest, GetFunctionConcurrencyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionConcurrencyCommand, serializeAws_restJson1GetFunctionConcurrencyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
 *       function, use <a>PutFunctionConcurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionConcurrencyCommand = /** @class */ (function (_super) {
    __extends(GetFunctionConcurrencyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionConcurrencyCommand(input) {
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
    GetFunctionConcurrencyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetFunctionConcurrencyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionConcurrencyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFunctionConcurrencyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionConcurrencyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionConcurrencyCommand(input, context);
    };
    GetFunctionConcurrencyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionConcurrencyCommand(output, context);
    };
    return GetFunctionConcurrencyCommand;
}($Command));
export { GetFunctionConcurrencyCommand };
//# sourceMappingURL=GetFunctionConcurrencyCommand.js.map