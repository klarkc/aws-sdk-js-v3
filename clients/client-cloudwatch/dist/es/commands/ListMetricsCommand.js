import { __extends } from "tslib";
import { ListMetricsInput, ListMetricsOutput } from "../models/models_0";
import { deserializeAws_queryListMetricsCommand, serializeAws_queryListMetricsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the specified metrics. You can use the returned metrics with
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to obtain statistical data.</p>
 * 		       <p>Up to 500 results are returned for any one call. To retrieve additional results,
 * 			use the returned token with subsequent calls.</p>
 * 		       <p>After you create a metric, allow up to 15 minutes before the metric appears.
 * 			You can see statistics about the metric sooner by using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 *
 * 	        <p>
 *             <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't
 * 	reported data in the past two weeks. To retrieve those metrics, use
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMetricsCommand = /** @class */ (function (_super) {
    __extends(ListMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMetricsCommand(input) {
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
    ListMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "ListMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMetricsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListMetricsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListMetricsCommand(input, context);
    };
    ListMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListMetricsCommand(output, context);
    };
    return ListMetricsCommand;
}($Command));
export { ListMetricsCommand };
//# sourceMappingURL=ListMetricsCommand.js.map