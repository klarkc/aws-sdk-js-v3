import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteSlotTypeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSlotTypeCommandInput extends DeleteSlotTypeRequest {
}
export interface DeleteSlotTypeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a slot type from a bot locale.</p>
 *          <p>If a slot is using the slot type, Amazon Lex throws a
 *             <code>ResourceInUseException</code> exception. To avoid the
 *          exception, set the <code>skipResourceInUseCheck</code> parameter to
 *             <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSlotTypeCommand extends $Command<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteSlotTypeCommandInput;
    constructor(input: DeleteSlotTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput>;
    private serialize;
    private deserialize;
}
