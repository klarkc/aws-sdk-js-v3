import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ClearQuerySuggestionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ClearQuerySuggestionsCommandInput extends ClearQuerySuggestionsRequest {
}
export interface ClearQuerySuggestionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Clears existing query suggestions from an index.</p>
 *         <p>This deletes existing suggestions only, not the queries
 *             in the query log. After you clear suggestions, Amazon Kendra learns
 *             new suggestions based on new queries added to the query log
 *             from the time you cleared suggestions. If you do not see any
 *             new suggestions, then please allow Amazon Kendra to collect
 *             enough queries to learn new suggestions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ClearQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ClearQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ClearQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link ClearQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ClearQuerySuggestionsCommand extends $Command<ClearQuerySuggestionsCommandInput, ClearQuerySuggestionsCommandOutput, KendraClientResolvedConfig> {
    readonly input: ClearQuerySuggestionsCommandInput;
    constructor(input: ClearQuerySuggestionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClearQuerySuggestionsCommandInput, ClearQuerySuggestionsCommandOutput>;
    private serialize;
    private deserialize;
}
