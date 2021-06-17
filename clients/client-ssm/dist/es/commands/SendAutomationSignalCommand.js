import { __extends } from "tslib";
import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1";
import { deserializeAws_json1_1SendAutomationSignalCommand, serializeAws_json1_1SendAutomationSignalCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a signal to an Automation execution to change the current behavior or status of the
 *    execution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendAutomationSignalCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendAutomationSignalCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new SendAutomationSignalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAutomationSignalCommandInput} for command's `input` shape.
 * @see {@link SendAutomationSignalCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendAutomationSignalCommand = /** @class */ (function (_super) {
    __extends(SendAutomationSignalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendAutomationSignalCommand(input) {
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
    SendAutomationSignalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "SendAutomationSignalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendAutomationSignalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendAutomationSignalResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendAutomationSignalCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendAutomationSignalCommand(input, context);
    };
    SendAutomationSignalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendAutomationSignalCommand(output, context);
    };
    return SendAutomationSignalCommand;
}($Command));
export { SendAutomationSignalCommand };
//# sourceMappingURL=SendAutomationSignalCommand.js.map