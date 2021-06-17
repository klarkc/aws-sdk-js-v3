import { __extends } from "tslib";
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAccuracyMetricsCommand, serializeAws_json1_1GetAccuracyMetricsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and
 *       to decide whether to use the predictor to generate a forecast. For more information, see
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor
 *         Metrics</a>.</p>
 *          <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows
 *       (<code>NumberOfBacktestWindows</code>) is specified using the
 *       <a>EvaluationParameters</a> object, which is optionally
 *       included in the <code>CreatePredictor</code> request. If
 *       <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p>
 *          <p>The parameters of the <code>filling</code> method determine which items contribute to
 *       the metrics. If you want all items to contribute, specify <code>zero</code>.
 *       If you want only those items that have complete data in the range being evaluated to
 *       contribute, specify <code>nan</code>.
 *       For more information, see <a>FeaturizationMethod</a>.</p>
 *
 *          <note>
 *             <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be
 *         <code>ACTIVE</code>, signifying that training has completed.
 *         To get the status, use the <a>DescribePredictor</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, GetAccuracyMetricsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, GetAccuracyMetricsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new GetAccuracyMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccuracyMetricsCommandInput} for command's `input` shape.
 * @see {@link GetAccuracyMetricsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccuracyMetricsCommand = /** @class */ (function (_super) {
    __extends(GetAccuracyMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccuracyMetricsCommand(input) {
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
    GetAccuracyMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "GetAccuracyMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccuracyMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccuracyMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccuracyMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAccuracyMetricsCommand(input, context);
    };
    GetAccuracyMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAccuracyMetricsCommand(output, context);
    };
    return GetAccuracyMetricsCommand;
}($Command));
export { GetAccuracyMetricsCommand };
//# sourceMappingURL=GetAccuracyMetricsCommand.js.map