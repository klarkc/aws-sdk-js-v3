import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightRuleReportCommandInput extends GetInsightRuleReportInput {
}
export interface GetInsightRuleReportCommandOutput extends GetInsightRuleReportOutput, __MetadataBearer {
}
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
export declare class GetInsightRuleReportCommand extends $Command<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetInsightRuleReportCommandInput;
    constructor(input: GetInsightRuleReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput>;
    private serialize;
    private deserialize;
}
