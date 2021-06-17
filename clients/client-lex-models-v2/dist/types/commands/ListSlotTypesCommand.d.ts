import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListSlotTypesRequest, ListSlotTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSlotTypesCommandInput extends ListSlotTypesRequest {
}
export interface ListSlotTypesCommandOutput extends ListSlotTypesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of slot types that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSlotTypesCommand extends $Command<ListSlotTypesCommandInput, ListSlotTypesCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListSlotTypesCommandInput;
    constructor(input: ListSlotTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSlotTypesCommandInput, ListSlotTypesCommandOutput>;
    private serialize;
    private deserialize;
}
