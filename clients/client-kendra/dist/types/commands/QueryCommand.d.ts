import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { QueryRequest, QueryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface QueryCommandInput extends QueryRequest {
}
export interface QueryCommandOutput extends QueryResult, __MetadataBearer {
}
/**
 * <p>Searches an active index. Use this API to search your documents
 *          using query. The <code>Query</code> operation enables to do faceted
 *          search and to filter results based on document attributes.</p>
 *          <p>It also enables you to provide user context that Amazon Kendra uses
 *          to enforce document access control in the search results. </p>
 *          <p>Amazon Kendra searches your index for text content and question and
 *          answer (FAQ) content. By default the response contains three types of
 *          results.</p>
 *          <ul>
 *             <li>
 *                <p>Relevant passages</p>
 *             </li>
 *             <li>
 *                <p>Matching FAQs</p>
 *             </li>
 *             <li>
 *                <p>Relevant documents</p>
 *             </li>
 *          </ul>
 *          <p>You can specify that the query return only one type of result using
 *          the <code>QueryResultTypeConfig</code> parameter.</p>
 *          <p>Each query returns the 100 most relevant results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, QueryCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, QueryCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, KendraClientResolvedConfig> {
    readonly input: QueryCommandInput;
    constructor(input: QueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryCommandInput, QueryCommandOutput>;
    private serialize;
    private deserialize;
}
