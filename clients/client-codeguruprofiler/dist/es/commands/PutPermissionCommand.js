import { __extends } from "tslib";
import { PutPermissionRequest, PutPermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1PutPermissionCommand, serializeAws_restJson1PutPermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Adds permissions to a profiling group's resource-based policy
 *             that are provided using an action group. If a profiling group doesn't have
 *             a resource-based policy, one is created for it using the permissions in the action group and
 *             the roles and users in the <code>principals</code> parameter.
 *         </p>
 *
 *         <p> The one supported action group that can be added is <code>agentPermission</code>
 *             which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For
 *             more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based
 *                 policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User
 *                 Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
 *                <code>PostAgentProfile</code>
 *             </a>. </p>
 *
 *         <p>
 *             The first time you call <code>PutPermission</code> on a profiling group, do not specify a <code>revisionId</code> because
 *             it doesn't have a resource-based policy. Subsequent calls must provide a <code>revisionId</code> to specify
 *             which revision of the resource-based policy to add the permissions to.
 *         </p>
 *
 *         <p>
 *             The response contains the profiling group's JSON-formatted resource policy.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PutPermissionCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PutPermissionCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPermissionCommand = /** @class */ (function (_super) {
    __extends(PutPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPermissionCommand(input) {
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
    PutPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "PutPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutPermissionCommand(input, context);
    };
    PutPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutPermissionCommand(output, context);
    };
    return PutPermissionCommand;
}($Command));
export { PutPermissionCommand };
//# sourceMappingURL=PutPermissionCommand.js.map