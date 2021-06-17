import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribePredictorRequest, DescribePredictorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePredictorCommandInput extends DescribePredictorRequest {
}
export interface DescribePredictorCommandOutput extends DescribePredictorResponse, __MetadataBearer {
}
/**
 * <p>Describes a predictor created using the <a>CreatePredictor</a>
 *       operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
 *       request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
 *           evaluated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePredictorCommand extends $Command<DescribePredictorCommandInput, DescribePredictorCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DescribePredictorCommandInput;
    constructor(input: DescribePredictorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePredictorCommandInput, DescribePredictorCommandOutput>;
    private serialize;
    private deserialize;
}
