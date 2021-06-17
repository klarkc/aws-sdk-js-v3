"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccuracyMetricsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetAccuracyMetricsCommand extends smithy_client_1.Command {
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
        const clientName = "ForecastClient";
        const commandName = "GetAccuracyMetricsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAccuracyMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAccuracyMetricsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetAccuracyMetricsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetAccuracyMetricsCommand(output, context);
    }
}
exports.GetAccuracyMetricsCommand = GetAccuracyMetricsCommand;
//# sourceMappingURL=GetAccuracyMetricsCommand.js.map