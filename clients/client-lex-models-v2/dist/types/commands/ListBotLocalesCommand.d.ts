import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotLocalesRequest, ListBotLocalesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBotLocalesCommandInput extends ListBotLocalesRequest {
}
export interface ListBotLocalesCommandOutput extends ListBotLocalesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of locales for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotLocalesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotLocalesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotLocalesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotLocalesCommandInput} for command's `input` shape.
 * @see {@link ListBotLocalesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBotLocalesCommand extends $Command<ListBotLocalesCommandInput, ListBotLocalesCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListBotLocalesCommandInput;
    constructor(input: ListBotLocalesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBotLocalesCommandInput, ListBotLocalesCommandOutput>;
    private serialize;
    private deserialize;
}
