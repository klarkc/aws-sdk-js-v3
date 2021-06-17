import { __extends } from "tslib";
import { StopWorkflowRunRequest, StopWorkflowRunResponse } from "../models/models_1";
import { deserializeAws_json1_1StopWorkflowRunCommand, serializeAws_json1_1StopWorkflowRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the execution of the specified workflow run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StopWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopWorkflowRunCommand = /** @class */ (function (_super) {
    __extends(StopWorkflowRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopWorkflowRunCommand(input) {
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
    StopWorkflowRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StopWorkflowRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopWorkflowRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopWorkflowRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopWorkflowRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopWorkflowRunCommand(input, context);
    };
    StopWorkflowRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopWorkflowRunCommand(output, context);
    };
    return StopWorkflowRunCommand;
}($Command));
export { StopWorkflowRunCommand };
//# sourceMappingURL=StopWorkflowRunCommand.js.map