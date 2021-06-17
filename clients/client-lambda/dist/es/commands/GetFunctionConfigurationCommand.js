import { __extends } from "tslib";
import { FunctionConfiguration, GetFunctionConfigurationRequest } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionConfigurationCommand, serializeAws_restJson1GetFunctionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that
 *       can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetFunctionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionConfigurationCommand(input) {
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
    GetFunctionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetFunctionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionConfigurationCommand(input, context);
    };
    GetFunctionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionConfigurationCommand(output, context);
    };
    return GetFunctionConfigurationCommand;
}($Command));
export { GetFunctionConfigurationCommand };
//# sourceMappingURL=GetFunctionConfigurationCommand.js.map