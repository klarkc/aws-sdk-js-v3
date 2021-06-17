import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListPredictorBacktestExportJobsRequest, ListPredictorBacktestExportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPredictorBacktestExportJobsCommandInput extends ListPredictorBacktestExportJobsRequest {
}
export interface ListPredictorBacktestExportJobsCommandOutput extends ListPredictorBacktestExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary
 *             for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *         <p>To retrieve the complete set of properties for a particular backtest export job, use the
 *             ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPredictorBacktestExportJobsCommand extends $Command<ListPredictorBacktestExportJobsCommandInput, ListPredictorBacktestExportJobsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: ListPredictorBacktestExportJobsCommandInput;
    constructor(input: ListPredictorBacktestExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPredictorBacktestExportJobsCommandInput, ListPredictorBacktestExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
