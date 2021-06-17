import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribePredictorBacktestExportJobRequest, DescribePredictorBacktestExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePredictorBacktestExportJobCommandInput extends DescribePredictorBacktestExportJobRequest {
}
export interface DescribePredictorBacktestExportJobCommandOutput extends DescribePredictorBacktestExportJobResponse, __MetadataBearer {
}
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
export declare class DescribePredictorBacktestExportJobCommand extends $Command<DescribePredictorBacktestExportJobCommandInput, DescribePredictorBacktestExportJobCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DescribePredictorBacktestExportJobCommandInput;
    constructor(input: DescribePredictorBacktestExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePredictorBacktestExportJobCommandInput, DescribePredictorBacktestExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
