import { __extends } from "tslib";
import { CreateProfilingGroupRequest, CreateProfilingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProfilingGroupCommand, serializeAws_restJson1CreateProfilingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, CreateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, CreateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new CreateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProfilingGroupCommand = /** @class */ (function (_super) {
    __extends(CreateProfilingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProfilingGroupCommand(input) {
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
    CreateProfilingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "CreateProfilingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProfilingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProfilingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProfilingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProfilingGroupCommand(input, context);
    };
    CreateProfilingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProfilingGroupCommand(output, context);
    };
    return CreateProfilingGroupCommand;
}($Command));
export { CreateProfilingGroupCommand };
//# sourceMappingURL=CreateProfilingGroupCommand.js.map