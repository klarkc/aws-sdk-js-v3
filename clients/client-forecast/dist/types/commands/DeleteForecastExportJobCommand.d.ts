import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteForecastExportJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteForecastExportJobCommandInput extends DeleteForecastExportJobRequest {
}
export interface DeleteForecastExportJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
 *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteForecastExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteForecastExportJobCommand extends $Command<DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeleteForecastExportJobCommandInput;
    constructor(input: DeleteForecastExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
