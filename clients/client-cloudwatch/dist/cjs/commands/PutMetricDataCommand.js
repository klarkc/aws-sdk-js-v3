"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutMetricDataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates
 * 			the data points with the specified metric. If the specified metric does not exist,
 * 			CloudWatch creates the metric. When CloudWatch creates a metric, it can
 * 			take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
 *
 * 		       <p>You can publish either individual data points in the <code>Value</code> field, or
 * 		arrays of values and the number of times each value occurred during the period by using the
 * 		<code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using
 * 		the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric
 * 			with one <code>PutMetricData</code> request, and
 * 		supports retrieving percentile statistics on this data.</p>
 * 		       <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests. You can
 * 			send a payload compressed by gzip. Each request
 * 		is also limited to no more than 20 different metrics.</p>
 * 		       <p>Although the <code>Value</code> parameter accepts numbers of type
 * 			<code>Double</code>, CloudWatch rejects values that are either too small
 * 			or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
 * 			-Infinity) are not supported.</p>
 * 		       <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension
 * 			consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the
 * 			<i>Amazon CloudWatch User Guide</i>.</p>
 *
 * 		       <p>You specify the time stamp to be associated with each data point. You can specify
 * 		time stamps that are as much as two weeks before the current date, and as much as 2 hours after
 * 		the current day and time.</p>
 * 		       <p>Data points with time stamps from 24 hours ago or longer can take at least 48
 * 			hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they
 * 			are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available
 * 			for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 * 		       <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
 * 			data using a statistic set instead, you can only retrieve
 * 			percentile statistics for this data if one of the following conditions is true:</p>
 * 			      <ul>
 *             <li>
 *                <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>,
 * 					<code>Max</code>, and <code>Sum</code> are all equal.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Min</code> and
 * 					<code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code>
 * 					multiplied by <code>SampleCount</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricDataCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricDataCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricDataCommandInput} for command's `input` shape.
 * @see {@link PutMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutMetricDataCommand extends smithy_client_1.Command {
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
        const commandName = "PutMetricDataCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutMetricDataInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPutMetricDataCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPutMetricDataCommand(output, context);
    }
}
exports.PutMetricDataCommand = PutMetricDataCommand;
//# sourceMappingURL=PutMetricDataCommand.js.map