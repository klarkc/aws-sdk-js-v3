import { __extends } from "tslib";
import { ListProfilingGroupsRequest, ListProfilingGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfilingGroupsCommand, serializeAws_restJson1ListProfilingGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a list of profiling groups. The profiling groups are returned as
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          objects.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfilingGroupsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfilingGroupsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListProfilingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProfilingGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfilingGroupsCommand = /** @class */ (function (_super) {
    __extends(ListProfilingGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfilingGroupsCommand(input) {
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
    ListProfilingGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "ListProfilingGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfilingGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfilingGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfilingGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfilingGroupsCommand(input, context);
    };
    ListProfilingGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfilingGroupsCommand(output, context);
    };
    return ListProfilingGroupsCommand;
}($Command));
export { ListProfilingGroupsCommand };
//# sourceMappingURL=ListProfilingGroupsCommand.js.map