import { __extends } from "tslib";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1StopAutomationExecutionCommand, serializeAws_json1_1StopAutomationExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stop an Automation that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StopAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StopAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopAutomationExecutionCommand = /** @class */ (function (_super) {
    __extends(StopAutomationExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopAutomationExecutionCommand(input) {
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
    StopAutomationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StopAutomationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAutomationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopAutomationExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAutomationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAutomationExecutionCommand(input, context);
    };
    StopAutomationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAutomationExecutionCommand(output, context);
    };
    return StopAutomationExecutionCommand;
}($Command));
export { StopAutomationExecutionCommand };
//# sourceMappingURL=StopAutomationExecutionCommand.js.map