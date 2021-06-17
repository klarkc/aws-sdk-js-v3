import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListBatchInferenceJobsRequest, ListBatchInferenceJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBatchInferenceJobsCommandInput extends ListBatchInferenceJobsRequest {
}
export interface ListBatchInferenceJobsCommandOutput extends ListBatchInferenceJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the batch inference jobs that have been performed off of a solution
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListBatchInferenceJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListBatchInferenceJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListBatchInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBatchInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListBatchInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBatchInferenceJobsCommand extends $Command<ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListBatchInferenceJobsCommandInput;
    constructor(input: ListBatchInferenceJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput>;
    private serialize;
    private deserialize;
}
