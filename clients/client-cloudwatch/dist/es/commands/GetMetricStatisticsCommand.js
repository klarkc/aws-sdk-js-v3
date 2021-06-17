import { __extends } from "tslib";
import { GetMetricStatisticsInput, GetMetricStatisticsOutput } from "../models/models_0";
import { deserializeAws_queryGetMetricStatisticsCommand, serializeAws_queryGetMetricStatisticsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets statistics for the specified metric.</p>
 *
 *
 *
 * 		       <p>The maximum number of data points returned from a single call is 1,440. If
 * 			you request more than 1,440 data points, CloudWatch returns an error.
 * 			To reduce the number of data points, you can narrow the specified time range and make
 * 			multiple requests across adjacent time ranges, or you can increase the specified period.
 * 			Data points are not returned in chronological order.</p>
 *
 * 		       <p>CloudWatch aggregates data points based on the length of the period
 * 			that you specify. For example, if you request statistics with a one-hour period,
 * 			CloudWatch aggregates all data points with time stamps that fall within each
 * 			one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than
 * 			the number of data points returned.</p>
 * 		       <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
 * 			data using a statistic set instead, you can only retrieve
 * 			percentile statistics for this data if one of the following conditions is true:</p>
 * 		       <ul>
 *             <li>
 *                <p>The SampleCount value of the statistic set is 1.</p>
 *             </li>
 *             <li>
 *                <p>The Min and the Max values of the statistic set are equal.</p>
 *             </li>
 *          </ul>
 * 		       <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p>
 * 		       <p>Amazon CloudWatch retains metric data as follows:</p>
 * 		       <ul>
 *             <li>
 *                <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution
 * 				metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p>
 *             </li>
 *          </ul>
 * 		       <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect
 * 			data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available,
 * 			but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with
 * 		a resolution of 1 hour.</p>
 * 		       <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p>
 *
 * 		       <p>For information about metrics and dimensions supported by AWS services, see the
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the
 * 			<i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStatisticsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStatisticsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetMetricStatisticsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMetricStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetMetricStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMetricStatisticsCommand(input) {
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
    GetMetricStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "GetMetricStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMetricStatisticsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMetricStatisticsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMetricStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetMetricStatisticsCommand(input, context);
    };
    GetMetricStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetMetricStatisticsCommand(output, context);
    };
    return GetMetricStatisticsCommand;
}($Command));
export { GetMetricStatisticsCommand };
//# sourceMappingURL=GetMetricStatisticsCommand.js.map