import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotRequest, UpdateBotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBotCommandInput extends UpdateBotRequest {
}
export interface UpdateBotCommandOutput extends UpdateBotResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration of an existing bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBotCommand extends $Command<UpdateBotCommandInput, UpdateBotCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateBotCommandInput;
    constructor(input: UpdateBotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBotCommandInput, UpdateBotCommandOutput>;
    private serialize;
    private deserialize;
}
