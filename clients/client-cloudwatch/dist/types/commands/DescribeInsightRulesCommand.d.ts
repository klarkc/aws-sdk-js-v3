import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInsightRulesCommandInput extends DescribeInsightRulesInput {
}
export interface DescribeInsightRulesCommandOutput extends DescribeInsightRulesOutput, __MetadataBearer {
}
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
export declare class DescribeInsightRulesCommand extends $Command<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeInsightRulesCommandInput;
    constructor(input: DescribeInsightRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
