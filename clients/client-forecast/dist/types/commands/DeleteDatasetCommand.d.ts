import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteDatasetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {
}
export interface DeleteDatasetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a>
 *       operation. You can only delete datasets that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a>
 *       operation.</p>
 *          <note>
 *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
 *         In order to update the dataset group, use the
 *         operation, omitting the deleted dataset's ARN.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatasetCommand extends $Command<DeleteDatasetCommandInput, DeleteDatasetCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeleteDatasetCommandInput;
    constructor(input: DeleteDatasetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
