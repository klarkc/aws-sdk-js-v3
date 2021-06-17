import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {
}
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {
}
/**
 * <p>Adds one or more JSON Line entries to a dataset. A JSON Line includes information about an image
 *          used for training or testing an Amazon Lookout for Vision model. The following is an example JSON Line.</p>
 *
 *
 *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
 *          check the <code>Status</code> field in the response.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDatasetEntriesCommand extends $Command<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: UpdateDatasetEntriesCommandInput;
    constructor(input: UpdateDatasetEntriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput>;
    private serialize;
    private deserialize;
}
