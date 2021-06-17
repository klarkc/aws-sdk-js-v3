import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeletePredictorBacktestExportJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePredictorBacktestExportJobCommandInput extends DeletePredictorBacktestExportJobRequest {
}
export interface DeletePredictorBacktestExportJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a predictor backtest export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeletePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeletePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeletePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DeletePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePredictorBacktestExportJobCommand extends $Command<DeletePredictorBacktestExportJobCommandInput, DeletePredictorBacktestExportJobCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeletePredictorBacktestExportJobCommandInput;
    constructor(input: DeletePredictorBacktestExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePredictorBacktestExportJobCommandInput, DeletePredictorBacktestExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
