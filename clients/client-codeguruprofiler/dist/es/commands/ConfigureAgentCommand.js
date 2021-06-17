import { __extends } from "tslib";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0";
import { deserializeAws_restJson1ConfigureAgentCommand, serializeAws_restJson1ConfigureAgentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *           Used by profiler agents to report their current state and to receive remote
 *           configuration updates. For example, <code>ConfigureAgent</code> can be used
 *          to tell an agent whether to profile or not and for how long to return profiling data.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ConfigureAgentCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ConfigureAgentCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ConfigureAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureAgentCommandInput} for command's `input` shape.
 * @see {@link ConfigureAgentCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfigureAgentCommand = /** @class */ (function (_super) {
    __extends(ConfigureAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfigureAgentCommand(input) {
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
    ConfigureAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "ConfigureAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfigureAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigureAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfigureAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ConfigureAgentCommand(input, context);
    };
    ConfigureAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ConfigureAgentCommand(output, context);
    };
    return ConfigureAgentCommand;
}($Command));
export { ConfigureAgentCommand };
//# sourceMappingURL=ConfigureAgentCommand.js.map