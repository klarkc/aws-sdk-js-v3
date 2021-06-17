import { __extends } from "tslib";
import { PostAgentProfileRequest, PostAgentProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1PostAgentProfileCommand, serializeAws_restJson1PostAgentProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Submits profiling data to an aggregated profile of a profiling group. To get an
 *          aggregated profile that is created with this profiling data, use
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
 *                <code>GetProfile</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PostAgentProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PostAgentProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new PostAgentProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostAgentProfileCommandInput} for command's `input` shape.
 * @see {@link PostAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PostAgentProfileCommand = /** @class */ (function (_super) {
    __extends(PostAgentProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostAgentProfileCommand(input) {
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
    PostAgentProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "PostAgentProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostAgentProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PostAgentProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostAgentProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PostAgentProfileCommand(input, context);
    };
    PostAgentProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PostAgentProfileCommand(output, context);
    };
    return PostAgentProfileCommand;
}($Command));
export { PostAgentProfileCommand };
//# sourceMappingURL=PostAgentProfileCommand.js.map