import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccuracyMetricsCommandInput extends GetAccuracyMetricsRequest {
}
export interface GetAccuracyMetricsCommandOutput extends GetAccuracyMetricsResponse, __MetadataBearer {
}
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
export declare class GetAccuracyMetricsCommand extends $Command<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: GetAccuracyMetricsCommandInput;
    constructor(input: GetAccuracyMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
