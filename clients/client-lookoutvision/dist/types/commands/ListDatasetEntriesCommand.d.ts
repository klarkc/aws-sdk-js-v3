import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { ListDatasetEntriesRequest, ListDatasetEntriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetEntriesCommandInput extends ListDatasetEntriesRequest {
}
export interface ListDatasetEntriesCommandOutput extends ListDatasetEntriesResponse, __MetadataBearer {
}
/**
 * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
 *       information for a single image, including the image location and the assigned label.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetEntriesCommand extends $Command<ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: ListDatasetEntriesCommandInput;
    constructor(input: ListDatasetEntriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput>;
    private serialize;
    private deserialize;
}
