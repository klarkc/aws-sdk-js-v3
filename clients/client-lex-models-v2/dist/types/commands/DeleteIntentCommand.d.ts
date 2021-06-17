import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteIntentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIntentCommandInput extends DeleteIntentRequest {
}
export interface DeleteIntentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified intent.</p>
 *          <p>Deleting an intent also deletes the slots associated with the
 *          intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIntentCommand extends $Command<DeleteIntentCommandInput, DeleteIntentCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteIntentCommandInput;
    constructor(input: DeleteIntentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIntentCommandInput, DeleteIntentCommandOutput>;
    private serialize;
    private deserialize;
}
