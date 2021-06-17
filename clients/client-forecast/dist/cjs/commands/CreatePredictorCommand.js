"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePredictorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Forecast predictor.</p>
 *          <p>In the request, provide a dataset group and either specify an algorithm or let
 *       Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can
 *       override algorithm-specific hyperparameters.</p>
 *          <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the
 *       datasets in the specified dataset group. You can then generate a
 *       forecast using the <a>CreateForecast</a> operation.</p>
 *          <p>
 *       To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation.
 *     </p>
 *          <p>You can specify a featurization configuration to fill and aggregate the data
 *       fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more
 *       information, see <a>FeaturizationConfig</a>.</p>
 *          <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the
 *         <code>DataFrequency</code> specified when the dataset was created matches the
 *         <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction.
 *       Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p>
 *          <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9
 *       (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor
 *       by setting the <code>ForecastTypes</code>.
 *     </p>
 *          <p>
 *             <b>AutoML</b>
 *          </p>
 *          <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the
 *         <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The
 *         <code>objective function</code> is defined as the mean of the weighted losses over the
 *       forecast types. By default, these are the p10, p50, and p90
 *       quantile losses. For more information, see <a>EvaluationResult</a>.</p>
 *          <p>When AutoML is enabled, the following properties are disallowed:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AlgorithmArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HPOConfig</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PerformHPO</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrainingParameters</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>To get a list of all of your predictors, use the <a>ListPredictors</a>
 *       operation.</p>
 *          <note>
 *             <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the
 *         predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the
 *         status, use the <a>DescribePredictor</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreatePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreatePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreatePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePredictorCommandInput} for command's `input` shape.
 * @see {@link CreatePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePredictorCommand extends smithy_client_1.Command {
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
        const commandName = "CreatePredictorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePredictorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePredictorResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePredictorCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePredictorCommand(output, context);
    }
}
exports.CreatePredictorCommand = CreatePredictorCommand;
//# sourceMappingURL=CreatePredictorCommand.js.map