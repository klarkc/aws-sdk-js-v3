import { __extends } from "tslib";
import { DeleteProfilingGroupRequest, DeleteProfilingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteProfilingGroupCommand, serializeAws_restJson1DeleteProfilingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DeleteProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DeleteProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new DeleteProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProfilingGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteProfilingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProfilingGroupCommand(input) {
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
    DeleteProfilingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "DeleteProfilingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProfilingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProfilingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProfilingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProfilingGroupCommand(input, context);
    };
    DeleteProfilingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProfilingGroupCommand(output, context);
    };
    return DeleteProfilingGroupCommand;
}($Command));
export { DeleteProfilingGroupCommand };
//# sourceMappingURL=DeleteProfilingGroupCommand.js.map