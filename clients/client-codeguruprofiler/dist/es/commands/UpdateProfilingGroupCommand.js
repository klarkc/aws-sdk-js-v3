import { __extends } from "tslib";
import { UpdateProfilingGroupRequest, UpdateProfilingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateProfilingGroupCommand, serializeAws_restJson1UpdateProfilingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, UpdateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, UpdateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new UpdateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProfilingGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProfilingGroupCommand(input) {
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
    UpdateProfilingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "UpdateProfilingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProfilingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProfilingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProfilingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateProfilingGroupCommand(input, context);
    };
    UpdateProfilingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateProfilingGroupCommand(output, context);
    };
    return UpdateProfilingGroupCommand;
}($Command));
export { UpdateProfilingGroupCommand };
//# sourceMappingURL=UpdateProfilingGroupCommand.js.map