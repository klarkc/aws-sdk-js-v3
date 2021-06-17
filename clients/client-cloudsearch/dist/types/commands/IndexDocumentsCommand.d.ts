import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IndexDocumentsCommandInput extends IndexDocumentsRequest {
}
export interface IndexDocumentsCommandOutput extends IndexDocumentsResponse, __MetadataBearer {
}
/**
 * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, IndexDocumentsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, IndexDocumentsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new IndexDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IndexDocumentsCommandInput} for command's `input` shape.
 * @see {@link IndexDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IndexDocumentsCommand extends $Command<IndexDocumentsCommandInput, IndexDocumentsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: IndexDocumentsCommandInput;
    constructor(input: IndexDocumentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IndexDocumentsCommandInput, IndexDocumentsCommandOutput>;
    private serialize;
    private deserialize;
}
