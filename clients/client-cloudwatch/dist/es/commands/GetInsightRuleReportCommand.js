import { __extends } from "tslib";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0";
import { deserializeAws_queryGetInsightRuleReportCommand, serializeAws_queryGetInsightRuleReportCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of
 * 		contributors to the log group.</p>
 * 		       <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
 * 					contributor might change for each data point in the graph.</p>
 * 				           <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
 * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
 * 					by the rule's <code>Value</code>, during that period.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetInsightRuleReportCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetInsightRuleReportCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetInsightRuleReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightRuleReportCommandInput} for command's `input` shape.
 * @see {@link GetInsightRuleReportCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightRuleReportCommand = /** @class */ (function (_super) {
    __extends(GetInsightRuleReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightRuleReportCommand(input) {
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
    GetInsightRuleReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "GetInsightRuleReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightRuleReportInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightRuleReportOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightRuleReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetInsightRuleReportCommand(input, context);
    };
    GetInsightRuleReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetInsightRuleReportCommand(output, context);
    };
    return GetInsightRuleReportCommand;
}($Command));
export { GetInsightRuleReportCommand };
//# sourceMappingURL=GetInsightRuleReportCommand.js.map