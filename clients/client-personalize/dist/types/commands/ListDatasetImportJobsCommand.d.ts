import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetImportJobsCommandInput extends ListDatasetImportJobsRequest {
}
export interface ListDatasetImportJobsCommandOutput extends ListDatasetImportJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of dataset import jobs that use the given dataset. When a dataset is not
 *       specified, all the dataset import jobs associated with the account are listed. The response
 *       provides the properties for each dataset import job, including the Amazon Resource Name (ARN).
 *       For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For
 *       more information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetImportJobsCommand extends $Command<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetImportJobsCommandInput;
    constructor(input: ListDatasetImportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
