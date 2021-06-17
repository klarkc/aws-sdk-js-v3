import { __extends } from "tslib";
import { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/models_0";
import { deserializeAws_queryDisableInsightRulesCommand, serializeAws_queryDisableInsightRulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do
 * 		not incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DisableInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DisableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableInsightRulesCommand = /** @class */ (function (_super) {
    __extends(DisableInsightRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableInsightRulesCommand(input) {
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
    DisableInsightRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DisableInsightRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisableInsightRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableInsightRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisableInsightRulesCommand(input, context);
    };
    DisableInsightRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisableInsightRulesCommand(output, context);
    };
    return DisableInsightRulesCommand;
}($Command));
export { DisableInsightRulesCommand };
//# sourceMappingURL=DisableInsightRulesCommand.js.map