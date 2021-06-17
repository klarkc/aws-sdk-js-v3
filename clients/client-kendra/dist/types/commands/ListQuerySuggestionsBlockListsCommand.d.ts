import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListQuerySuggestionsBlockListsRequest, ListQuerySuggestionsBlockListsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListQuerySuggestionsBlockListsCommandInput extends ListQuerySuggestionsBlockListsRequest {
}
export interface ListQuerySuggestionsBlockListsCommandOutput extends ListQuerySuggestionsBlockListsResponse, __MetadataBearer {
}
/**
 * <p>Lists the block lists used for query suggestions for an index.</p>
 *         <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListQuerySuggestionsBlockListsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListQuerySuggestionsBlockListsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListQuerySuggestionsBlockListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuerySuggestionsBlockListsCommandInput} for command's `input` shape.
 * @see {@link ListQuerySuggestionsBlockListsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListQuerySuggestionsBlockListsCommand extends $Command<ListQuerySuggestionsBlockListsCommandInput, ListQuerySuggestionsBlockListsCommandOutput, KendraClientResolvedConfig> {
    readonly input: ListQuerySuggestionsBlockListsCommandInput;
    constructor(input: ListQuerySuggestionsBlockListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQuerySuggestionsBlockListsCommandInput, ListQuerySuggestionsBlockListsCommandOutput>;
    private serialize;
    private deserialize;
}
