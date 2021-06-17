import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteResourceTreeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourceTreeCommandInput extends DeleteResourceTreeRequest {
}
export interface DeleteResourceTreeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an entire resource tree. This operation will delete the parent resource and
 *             its child resources.</p>
 *         <p>Child resources are resources that were created from another resource. For example,
 *             when a forecast is generated from a predictor, the forecast is the child resource and
 *             the predictor is the parent resource.</p>
 *         <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Dataset</b>: dataset import jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Dataset Group</b>: predictors, predictor backtest
 *                     export jobs, forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Predictor</b>: predictor backtest export jobs,
 *                     forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Forecast</b>: forecast export jobs</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>
 *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
 *                 delete datasets or exported files stored in Amazon S3. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteResourceTreeCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteResourceTreeCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteResourceTreeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceTreeCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceTreeCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourceTreeCommand extends $Command<DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeleteResourceTreeCommandInput;
    constructor(input: DeleteResourceTreeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput>;
    private serialize;
    private deserialize;
}
