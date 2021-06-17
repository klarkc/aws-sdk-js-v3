import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSuggesterCommandInput extends DeleteSuggesterRequest {
}
export interface DeleteSuggesterCommandOutput extends DeleteSuggesterResponse, __MetadataBearer {
}
/**
 * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSuggesterCommand extends $Command<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteSuggesterCommandInput;
    constructor(input: DeleteSuggesterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput>;
    private serialize;
    private deserialize;
}
