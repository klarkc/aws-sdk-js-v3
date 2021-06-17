import { __extends } from "tslib";
import { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeInsightRulesCommand, serializeAws_queryDescribeInsightRulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all the Contributor Insights rules in your account.</p>
 *
 * 		       <p>For more information about Contributor Insights, see
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInsightRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeInsightRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInsightRulesCommand(input) {
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
    DescribeInsightRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DescribeInsightRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInsightRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInsightRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeInsightRulesCommand(input, context);
    };
    DescribeInsightRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeInsightRulesCommand(output, context);
    };
    return DescribeInsightRulesCommand;
}($Command));
export { DescribeInsightRulesCommand };
//# sourceMappingURL=DescribeInsightRulesCommand.js.map