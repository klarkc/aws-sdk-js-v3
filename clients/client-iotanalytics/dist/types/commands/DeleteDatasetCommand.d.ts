import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DeleteDatasetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {
}
export interface DeleteDatasetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified dataset.</p>
 *          <p>You do not have to delete the content of the dataset before you perform this
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatasetCommand extends $Command<DeleteDatasetCommandInput, DeleteDatasetCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: DeleteDatasetCommandInput;
    constructor(input: DeleteDatasetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
