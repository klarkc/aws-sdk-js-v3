import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { ListDatasetContentsRequest, ListDatasetContentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetContentsCommandInput extends ListDatasetContentsRequest {
}
export interface ListDatasetContentsCommandOutput extends ListDatasetContentsResponse, __MetadataBearer {
}
/**
 * <p>Lists information about data set contents that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetContentsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetContentsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new ListDatasetContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetContentsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetContentsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetContentsCommand extends $Command<ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: ListDatasetContentsCommandInput;
    constructor(input: ListDatasetContentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput>;
    private serialize;
    private deserialize;
}
