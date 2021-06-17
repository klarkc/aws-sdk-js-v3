import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotLocaleRequest, UpdateBotLocaleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBotLocaleCommandInput extends UpdateBotLocaleRequest {
}
export interface UpdateBotLocaleCommandOutput extends UpdateBotLocaleResponse, __MetadataBearer {
}
/**
 * <p>Updates the settings that a bot has for a specific locale.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link UpdateBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBotLocaleCommand extends $Command<UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateBotLocaleCommandInput;
    constructor(input: UpdateBotLocaleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput>;
    private serialize;
    private deserialize;
}
