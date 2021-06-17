import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateQuerySuggestionsConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQuerySuggestionsConfigCommandInput extends UpdateQuerySuggestionsConfigRequest {
}
export interface UpdateQuerySuggestionsConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the settings of query suggestions for an index.</p>
 *         <p>Amazon Kendra supports partial updates, so you only need to provide
 *             the fields you want to update.</p>
 *         <p>If an update is currently processing (i.e. 'happening'), you
 *             need to wait for the update to finish before making another update.</p>
 *         <p>Updates to query suggestions settings might not take effect right away.
 *             The time for your updated settings to take effect depends on the updates
 *             made and the number of search queries in your index.</p>
 *         <p>You can still enable/disable query suggestions at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQuerySuggestionsConfigCommand extends $Command<UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput, KendraClientResolvedConfig> {
    readonly input: UpdateQuerySuggestionsConfigCommandInput;
    constructor(input: UpdateQuerySuggestionsConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput>;
    private serialize;
    private deserialize;
}
