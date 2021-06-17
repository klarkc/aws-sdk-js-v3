import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteDatasetGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatasetGroupCommandInput extends DeleteDatasetGroupRequest {
}
export interface DeleteDatasetGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation.
 *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
 *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
 *          <p>This operation deletes only the dataset group, not the datasets in the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatasetGroupCommand extends $Command<DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeleteDatasetGroupCommandInput;
    constructor(input: DeleteDatasetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
