import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotRequest, DeleteBotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotCommandInput extends DeleteBotRequest {
}
export interface DeleteBotCommandOutput extends DeleteBotResponse, __MetadataBearer {
}
/**
 * <p>Deletes all versions of a bot, including the <code>Draft</code>
 *          version. To delete a specific version, use the
 *             <code>DeleteBotVersion</code> operation.</p>
 *          <p>When you delete a bot, all of the resources contained in the bot are
 *          also deleted. Deleting a bot removes all locales, intents, slot, and
 *          slot types defined for the bot.</p>
 *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
 *          a <code>ResourceInUseException</code> exception. If you want to delete
 *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
 *          parameter to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotCommand extends $Command<DeleteBotCommandInput, DeleteBotCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteBotCommandInput;
    constructor(input: DeleteBotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotCommandInput, DeleteBotCommandOutput>;
    private serialize;
    private deserialize;
}
