import { __extends } from "tslib";
import { PutInsightRuleInput, PutInsightRuleOutput } from "../models/models_0";
import { deserializeAws_queryPutInsightRuleCommand, serializeAws_queryPutInsightRuleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Contributor Insights rule. Rules evaluate log events in a
 * 		CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information,
 * 		see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
 * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutInsightRuleCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutInsightRuleCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutInsightRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInsightRuleCommandInput} for command's `input` shape.
 * @see {@link PutInsightRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInsightRuleCommand = /** @class */ (function (_super) {
    __extends(PutInsightRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutInsightRuleCommand(input) {
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
    PutInsightRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutInsightRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInsightRuleInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutInsightRuleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInsightRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutInsightRuleCommand(input, context);
    };
    PutInsightRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutInsightRuleCommand(output, context);
    };
    return PutInsightRuleCommand;
}($Command));
export { PutInsightRuleCommand };
//# sourceMappingURL=PutInsightRuleCommand.js.map