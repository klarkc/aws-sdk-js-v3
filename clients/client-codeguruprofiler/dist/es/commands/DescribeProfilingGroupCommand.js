import { __extends } from "tslib";
import { DescribeProfilingGroupRequest, DescribeProfilingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeProfilingGroupCommand, serializeAws_restJson1DescribeProfilingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          object that contains information about the requested profiling group.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DescribeProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DescribeProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new DescribeProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProfilingGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeProfilingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProfilingGroupCommand(input) {
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
    DescribeProfilingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "DescribeProfilingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProfilingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProfilingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProfilingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProfilingGroupCommand(input, context);
    };
    DescribeProfilingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProfilingGroupCommand(output, context);
    };
    return DescribeProfilingGroupCommand;
}($Command));
export { DescribeProfilingGroupCommand };
//# sourceMappingURL=DescribeProfilingGroupCommand.js.map