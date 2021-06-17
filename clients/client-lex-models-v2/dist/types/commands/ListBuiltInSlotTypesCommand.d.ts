import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBuiltInSlotTypesRequest, ListBuiltInSlotTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBuiltInSlotTypesCommandInput extends ListBuiltInSlotTypesRequest {
}
export interface ListBuiltInSlotTypesCommandOutput extends ListBuiltInSlotTypesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of built-in slot types that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBuiltInSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuiltInSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBuiltInSlotTypesCommand extends $Command<ListBuiltInSlotTypesCommandInput, ListBuiltInSlotTypesCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListBuiltInSlotTypesCommandInput;
    constructor(input: ListBuiltInSlotTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuiltInSlotTypesCommandInput, ListBuiltInSlotTypesCommandOutput>;
    private serialize;
    private deserialize;
}
