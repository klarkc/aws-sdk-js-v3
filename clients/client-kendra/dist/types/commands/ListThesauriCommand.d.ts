import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListThesauriRequest, ListThesauriResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThesauriCommandInput extends ListThesauriRequest {
}
export interface ListThesauriCommandOutput extends ListThesauriResponse, __MetadataBearer {
}
/**
 * <p>Lists the Amazon Kendra thesauri associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListThesauriCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListThesauriCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListThesauriCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThesauriCommandInput} for command's `input` shape.
 * @see {@link ListThesauriCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThesauriCommand extends $Command<ListThesauriCommandInput, ListThesauriCommandOutput, KendraClientResolvedConfig> {
    readonly input: ListThesauriCommandInput;
    constructor(input: ListThesauriCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThesauriCommandInput, ListThesauriCommandOutput>;
    private serialize;
    private deserialize;
}
