"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePredictorBacktestExportJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *         <p>In addition to listing the properties provided by the user in the
 *             <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
 *             following properties:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>CreationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>LastModificationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>Status</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Message</code> (if an error occurred)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribePredictorBacktestExportJobCommand extends smithy_client_1.Command {
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
        const commandName = "DescribePredictorBacktestExportJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribePredictorBacktestExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribePredictorBacktestExportJobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribePredictorBacktestExportJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribePredictorBacktestExportJobCommand(output, context);
    }
}
exports.DescribePredictorBacktestExportJobCommand = DescribePredictorBacktestExportJobCommand;
//# sourceMappingURL=DescribePredictorBacktestExportJobCommand.js.map