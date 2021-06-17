import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotLocaleRequest, DeleteBotLocaleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotLocaleCommandInput extends DeleteBotLocaleRequest {
}
export interface DeleteBotLocaleCommandOutput extends DeleteBotLocaleResponse, __MetadataBearer {
}
/**
 * <p>Removes a locale from a bot.</p>
 *          <p>When you delete a locale, all intents, slots, and slot types defined
 *          for the locale are also deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DeleteBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotLocaleCommand extends $Command<DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteBotLocaleCommandInput;
    constructor(input: DeleteBotLocaleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput>;
    private serialize;
    private deserialize;
}
