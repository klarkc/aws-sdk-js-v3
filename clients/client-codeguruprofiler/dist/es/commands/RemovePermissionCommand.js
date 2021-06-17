import { __extends } from "tslib";
import { RemovePermissionRequest, RemovePermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1RemovePermissionCommand, serializeAws_restJson1RemovePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Removes permissions from a profiling group's resource-based policy that are provided
 *             using an action group. The one supported action group that can be removed is
 *                 <code>agentPermission</code> which grants <code>ConfigureAgent</code> and
 *                 <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon
 *                 CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
 *                <code>PostAgentProfile</code>
 *             </a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, RemovePermissionCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, RemovePermissionCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemovePermissionCommand = /** @class */ (function (_super) {
    __extends(RemovePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemovePermissionCommand(input) {
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
    RemovePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "RemovePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemovePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemovePermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemovePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemovePermissionCommand(input, context);
    };
    RemovePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemovePermissionCommand(output, context);
    };
    return RemovePermissionCommand;
}($Command));
export { RemovePermissionCommand };
//# sourceMappingURL=RemovePermissionCommand.js.map