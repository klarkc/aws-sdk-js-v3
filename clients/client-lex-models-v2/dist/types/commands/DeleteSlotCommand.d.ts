import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteSlotRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSlotCommandInput extends DeleteSlotRequest {
}
export interface DeleteSlotCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified slot from an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSlotCommand extends $Command<DeleteSlotCommandInput, DeleteSlotCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteSlotCommandInput;
    constructor(input: DeleteSlotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSlotCommandInput, DeleteSlotCommandOutput>;
    private serialize;
    private deserialize;
}
