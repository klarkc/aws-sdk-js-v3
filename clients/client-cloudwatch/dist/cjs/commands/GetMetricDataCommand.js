"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMetricDataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You can use the <code>GetMetricData</code> API to retrieve as many as 500 different
 * 			metrics in a single request, with a total of as many as 100,800 data points. You can also
 * 			optionally perform math expressions on the values of the returned statistics, to create
 * 			new time series that represent new insights into your data. For example, using Lambda
 * 			metrics, you could divide the Errors metric by the Invocations metric to get an error
 * 			rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
 * 				Guide</i>.</p>
 *
 * 		       <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than
 * 			calls to <code>GetMetricStatistics</code>. For more information about pricing, see
 * 			<a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *
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
 * 			a resolution of 1 hour.</p>
 *
 * 		       <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified
 * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
 * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricDataCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricDataCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetMetricDataCommand extends smithy_client_1.Command {
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
        const commandName = "GetMetricDataCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetMetricDataInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetMetricDataOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetMetricDataCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetMetricDataCommand(output, context);
    }
}
exports.GetMetricDataCommand = GetMetricDataCommand;
//# sourceMappingURL=GetMetricDataCommand.js.map