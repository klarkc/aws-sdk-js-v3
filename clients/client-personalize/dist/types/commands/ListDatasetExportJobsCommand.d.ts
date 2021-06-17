import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetExportJobsRequest, ListDatasetExportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetExportJobsCommandInput extends ListDatasetExportJobsRequest {
}
export interface ListDatasetExportJobsCommandOutput extends ListDatasetExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of dataset export jobs that use the given dataset. When a dataset is not
 *       specified, all the dataset export jobs associated with the account are listed. The response
 *       provides the properties for each dataset export job, including the Amazon Resource Name (ARN).
 *       For more information on dataset export jobs, see <a>CreateDatasetExportJob</a>. For
 *       more information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetExportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetExportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetExportJobsCommand extends $Command<ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetExportJobsCommandInput;
    constructor(input: ListDatasetExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
