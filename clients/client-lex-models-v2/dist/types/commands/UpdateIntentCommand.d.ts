import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateIntentRequest, UpdateIntentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIntentCommandInput extends UpdateIntentRequest {
}
export interface UpdateIntentCommandOutput extends UpdateIntentResponse, __MetadataBearer {
}
/**
 * <p>Updates the settings for an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIntentCommandInput} for command's `input` shape.
 * @see {@link UpdateIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIntentCommand extends $Command<UpdateIntentCommandInput, UpdateIntentCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateIntentCommandInput;
    constructor(input: UpdateIntentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIntentCommandInput, UpdateIntentCommandOutput>;
    private serialize;
    private deserialize;
}
