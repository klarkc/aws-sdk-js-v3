import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotVersionRequest, DeleteBotVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotVersionCommandInput extends DeleteBotVersionRequest {
}
export interface DeleteBotVersionCommandOutput extends DeleteBotVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specific version of a bot. To delete all version of a bot,
 *          use the <a>DeleteBot</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotVersionCommand extends $Command<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteBotVersionCommandInput;
    constructor(input: DeleteBotVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput>;
    private serialize;
    private deserialize;
}
