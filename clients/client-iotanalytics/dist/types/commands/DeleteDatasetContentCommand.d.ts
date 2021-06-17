import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DeleteDatasetContentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatasetContentCommandInput extends DeleteDatasetContentRequest {
}
export interface DeleteDatasetContentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the content of the specified dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DeleteDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetContentCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatasetContentCommand extends $Command<DeleteDatasetContentCommandInput, DeleteDatasetContentCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: DeleteDatasetContentCommandInput;
    constructor(input: DeleteDatasetContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetContentCommandInput, DeleteDatasetContentCommandOutput>;
    private serialize;
    private deserialize;
}
