import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateQuerySuggestionsBlockListRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQuerySuggestionsBlockListCommandInput extends UpdateQuerySuggestionsBlockListRequest {
}
export interface UpdateQuerySuggestionsBlockListCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a block list used for query suggestions for an index.</p>
 *         <p>Updates to a block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to apply any updates to the
 *             block list. Other changes not related to the block list apply immediately.</p>
 *         <p>If a block list is updating, then you need to wait for the first update to
 *             finish before submitting another update.</p>
 *         <p>Amazon Kendra supports partial updates, so you only need to provide the fields
 *             you want to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQuerySuggestionsBlockListCommand extends $Command<UpdateQuerySuggestionsBlockListCommandInput, UpdateQuerySuggestionsBlockListCommandOutput, KendraClientResolvedConfig> {
    readonly input: UpdateQuerySuggestionsBlockListCommandInput;
    constructor(input: UpdateQuerySuggestionsBlockListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQuerySuggestionsBlockListCommandInput, UpdateQuerySuggestionsBlockListCommandOutput>;
    private serialize;
    private deserialize;
}
