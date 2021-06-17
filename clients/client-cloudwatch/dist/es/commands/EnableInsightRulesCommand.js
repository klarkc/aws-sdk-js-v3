import { __extends } from "tslib";
import { EnableInsightRulesInput, EnableInsightRulesOutput } from "../models/models_0";
import { deserializeAws_queryEnableInsightRulesCommand, serializeAws_queryEnableInsightRulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new EnableInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link EnableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableInsightRulesCommand = /** @class */ (function (_super) {
    __extends(EnableInsightRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableInsightRulesCommand(input) {
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
    EnableInsightRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "EnableInsightRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: EnableInsightRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableInsightRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryEnableInsightRulesCommand(input, context);
    };
    EnableInsightRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryEnableInsightRulesCommand(output, context);
    };
    return EnableInsightRulesCommand;
}($Command));
export { EnableInsightRulesCommand };
//# sourceMappingURL=EnableInsightRulesCommand.js.map