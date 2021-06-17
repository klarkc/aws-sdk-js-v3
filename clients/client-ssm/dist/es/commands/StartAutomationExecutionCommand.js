import { __extends } from "tslib";
import { StartAutomationExecutionRequest, StartAutomationExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1StartAutomationExecutionCommand, serializeAws_json1_1StartAutomationExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates execution of an Automation document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAutomationExecutionCommand = /** @class */ (function (_super) {
    __extends(StartAutomationExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAutomationExecutionCommand(input) {
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
    StartAutomationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartAutomationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAutomationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAutomationExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAutomationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAutomationExecutionCommand(input, context);
    };
    StartAutomationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAutomationExecutionCommand(output, context);
    };
    return StartAutomationExecutionCommand;
}($Command));
export { StartAutomationExecutionCommand };
//# sourceMappingURL=StartAutomationExecutionCommand.js.map