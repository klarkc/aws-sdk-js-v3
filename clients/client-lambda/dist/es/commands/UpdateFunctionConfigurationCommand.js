import { __extends } from "tslib";
import { FunctionConfiguration, UpdateFunctionConfigurationRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateFunctionConfigurationCommand, serializeAws_restJson1UpdateFunctionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modify the version-specific settings of a Lambda function.</p>
 *
 *          <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If
 *       your function connects to a VPC, this process can take a minute. During this time, you can't modify the function,
 *       but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and
 *         <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
 *       indicate when the update is complete and the function is processing events with the new configuration. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
 *       States</a>.</p>
 *
 *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
 *       modify the configuration of a published version, only the unpublished version.</p>
 *
 *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
 *       to an account or AWS service, use <a>AddPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFunctionConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFunctionConfigurationCommand(input) {
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
    UpdateFunctionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateFunctionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFunctionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFunctionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFunctionConfigurationCommand(input, context);
    };
    UpdateFunctionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFunctionConfigurationCommand(output, context);
    };
    return UpdateFunctionConfigurationCommand;
}($Command));
export { UpdateFunctionConfigurationCommand };
//# sourceMappingURL=UpdateFunctionConfigurationCommand.js.map