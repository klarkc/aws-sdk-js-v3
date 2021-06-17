import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotLocaleRequest, CreateBotLocaleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBotLocaleCommandInput extends CreateBotLocaleRequest {
}
export interface CreateBotLocaleCommandOutput extends CreateBotLocaleResponse, __MetadataBearer {
}
/**
 * <p>Creates a locale in the bot. The locale contains the intents and
 *          slot types that the bot uses in conversations with users in the
 *          specified language and locale. You must add a locale to a bot before
 *          you can add intents and slot types to the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link CreateBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBotLocaleCommand extends $Command<CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateBotLocaleCommandInput;
    constructor(input: CreateBotLocaleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput>;
    private serialize;
    private deserialize;
}
