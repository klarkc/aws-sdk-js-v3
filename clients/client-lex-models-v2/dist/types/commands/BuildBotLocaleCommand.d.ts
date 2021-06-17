import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { BuildBotLocaleRequest, BuildBotLocaleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BuildBotLocaleCommandInput extends BuildBotLocaleRequest {
}
export interface BuildBotLocaleCommandOutput extends BuildBotLocaleResponse, __MetadataBearer {
}
/**
 * <p>Builds a bot, its intents, and its slot types into a specific
 *          locale. A bot can be built into multiple locales. At runtime the locale
 *          is used to choose a specific build of the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BuildBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BuildBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new BuildBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BuildBotLocaleCommandInput} for command's `input` shape.
 * @see {@link BuildBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BuildBotLocaleCommand extends $Command<BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: BuildBotLocaleCommandInput;
    constructor(input: BuildBotLocaleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput>;
    private serialize;
    private deserialize;
}
