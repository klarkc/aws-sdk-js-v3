import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutMetricFilterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutMetricFilterCommandInput extends PutMetricFilterRequest {
}
export interface PutMetricFilterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates or updates a metric filter and associates it with the specified log group.
 *       Metric filters allow you to configure rules to extract metric data from log events ingested
 *       through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p>
 *          <p>The maximum number of metric filters that can be associated with a log group is
 *       100.</p>
 *          <p>When you create a metric filter, you can also optionally assign a unit and dimensions
 *     to the metric that is created.</p>
 *          <important>
 *             <p>Metrics extracted from log events are charged as custom metrics.
 *       To prevent unexpected high charges, do not specify high-cardinality fields such as
 *       <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value
 *       found for
 *       a dimension is treated as a separate metric and accrues charges as a separate custom metric.
 *     </p>
 *             <p>To help prevent accidental high charges, Amazon disables a metric filter
 *         if it generates 1000 different name/value pairs for the dimensions that you
 *         have specified within a certain amount of time.</p>
 *             <p>You can also set up a billing alarm to alert you if your charges are higher than
 *         expected. For more information,
 *         see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">
 *           Creating a Billing Alarm to Monitor Your Estimated AWS Charges</a>.
 *       </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutMetricFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricFilterCommandInput} for command's `input` shape.
 * @see {@link PutMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutMetricFilterCommand extends $Command<PutMetricFilterCommandInput, PutMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutMetricFilterCommandInput;
    constructor(input: PutMetricFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMetricFilterCommandInput, PutMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
