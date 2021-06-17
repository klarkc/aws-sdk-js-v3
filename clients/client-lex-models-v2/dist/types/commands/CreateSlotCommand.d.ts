import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateSlotRequest, CreateSlotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSlotCommandInput extends CreateSlotRequest {
}
export interface CreateSlotCommandOutput extends CreateSlotResponse, __MetadataBearer {
}
/**
 * <p>Creates a slot in an intent. A slot is a variable needed to fulfill
 *          an intent. For example, an <code>OrderPizza</code> intent might need
 *          slots for size, crust, and number of pizzas. For each slot, you define
 *          one or more utterances that Amazon Lex uses to elicit a response from the
 *          user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotCommandInput} for command's `input` shape.
 * @see {@link CreateSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSlotCommand extends $Command<CreateSlotCommandInput, CreateSlotCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateSlotCommandInput;
    constructor(input: CreateSlotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSlotCommandInput, CreateSlotCommandOutput>;
    private serialize;
    private deserialize;
}
