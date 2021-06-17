import { __extends } from "tslib";
import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/models_1";
import { deserializeAws_json1_1GetCommandInvocationCommand, serializeAws_json1_1GetCommandInvocationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about command execution for an invocation or plugin.</p>
 *          <p>
 *             <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document.
 *    To get the command execution status on a specific instance, use <a>ListCommandInvocations</a>. To get the command execution status across instances, use
 *     <a>ListCommands</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCommandInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCommandInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCommandInvocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommandInvocationCommandInput} for command's `input` shape.
 * @see {@link GetCommandInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCommandInvocationCommand = /** @class */ (function (_super) {
    __extends(GetCommandInvocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCommandInvocationCommand(input) {
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
    GetCommandInvocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetCommandInvocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommandInvocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommandInvocationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommandInvocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommandInvocationCommand(input, context);
    };
    GetCommandInvocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommandInvocationCommand(output, context);
    };
    return GetCommandInvocationCommand;
}($Command));
export { GetCommandInvocationCommand };
//# sourceMappingURL=GetCommandInvocationCommand.js.map