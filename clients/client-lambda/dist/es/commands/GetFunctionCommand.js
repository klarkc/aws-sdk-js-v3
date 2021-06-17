import { __extends } from "tslib";
import { GetFunctionRequest, GetFunctionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionCommand, serializeAws_restJson1GetFunctionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the function or function version, with a link to download the deployment package
 *       that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are
 *       returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionCommand = /** @class */ (function (_super) {
    __extends(GetFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionCommand(input) {
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
    GetFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionCommand(input, context);
    };
    GetFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionCommand(output, context);
    };
    return GetFunctionCommand;
}($Command));
export { GetFunctionCommand };
//# sourceMappingURL=GetFunctionCommand.js.map