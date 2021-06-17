import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListFaqsRequest, ListFaqsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFaqsCommandInput extends ListFaqsRequest {
}
export interface ListFaqsCommandOutput extends ListFaqsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of FAQ lists associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListFaqsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListFaqsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListFaqsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFaqsCommandInput} for command's `input` shape.
 * @see {@link ListFaqsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFaqsCommand extends $Command<ListFaqsCommandInput, ListFaqsCommandOutput, KendraClientResolvedConfig> {
    readonly input: ListFaqsCommandInput;
    constructor(input: ListFaqsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFaqsCommandInput, ListFaqsCommandOutput>;
    private serialize;
    private deserialize;
}
