import { __extends } from "tslib";
import { GetAutomationExecutionRequest, GetAutomationExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1GetAutomationExecutionCommand, serializeAws_json1_1GetAutomationExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get detailed information about a particular Automation execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link GetAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAutomationExecutionCommand = /** @class */ (function (_super) {
    __extends(GetAutomationExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAutomationExecutionCommand(input) {
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
    GetAutomationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetAutomationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAutomationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAutomationExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAutomationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAutomationExecutionCommand(input, context);
    };
    GetAutomationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAutomationExecutionCommand(output, context);
    };
    return GetAutomationExecutionCommand;
}($Command));
export { GetAutomationExecutionCommand };
//# sourceMappingURL=GetAutomationExecutionCommand.js.map