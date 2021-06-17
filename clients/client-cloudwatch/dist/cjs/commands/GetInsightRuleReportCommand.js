"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInsightRuleReportCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetInsightRuleReportCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchClient";
        const commandName = "GetInsightRuleReportCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetInsightRuleReportInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetInsightRuleReportOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetInsightRuleReportCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetInsightRuleReportCommand(output, context);
    }
}
exports.GetInsightRuleReportCommand = GetInsightRuleReportCommand;
//# sourceMappingURL=GetInsightRuleReportCommand.js.map