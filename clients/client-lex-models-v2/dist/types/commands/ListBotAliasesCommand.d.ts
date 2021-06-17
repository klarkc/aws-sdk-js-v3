import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotAliasesRequest, ListBotAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBotAliasesCommandInput extends ListBotAliasesRequest {
}
export interface ListBotAliasesCommandOutput extends ListBotAliasesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of aliases for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotAliasesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotAliasesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotAliasesCommandInput} for command's `input` shape.
 * @see {@link ListBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBotAliasesCommand extends $Command<ListBotAliasesCommandInput, ListBotAliasesCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListBotAliasesCommandInput;
    constructor(input: ListBotAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBotAliasesCommandInput, ListBotAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
