import { __extends } from "tslib";
import { DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAutomationStepExecutionsCommand, serializeAws_json1_1DescribeAutomationStepExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information about all active and terminated step executions in an Automation
 *    workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationStepExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationStepExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAutomationStepExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutomationStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationStepExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutomationStepExecutionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAutomationStepExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAutomationStepExecutionsCommand(input) {
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
    DescribeAutomationStepExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAutomationStepExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAutomationStepExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAutomationStepExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAutomationStepExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAutomationStepExecutionsCommand(input, context);
    };
    DescribeAutomationStepExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAutomationStepExecutionsCommand(output, context);
    };
    return DescribeAutomationStepExecutionsCommand;
}($Command));
export { DescribeAutomationStepExecutionsCommand };
//# sourceMappingURL=DescribeAutomationStepExecutionsCommand.js.map