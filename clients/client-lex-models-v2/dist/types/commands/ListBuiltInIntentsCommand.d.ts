import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBuiltInIntentsRequest, ListBuiltInIntentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBuiltInIntentsCommandInput extends ListBuiltInIntentsRequest {
}
export interface ListBuiltInIntentsCommandOutput extends ListBuiltInIntentsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
 *          in your bot. </p>
 *          <p>To use a built-in intent as a the base for your own intent, include
 *          the built-in intent signature in the <code>parentIntentSignature</code>
 *          parameter when you call the <code>CreateIntent</code> operation. For
 *          more information, see <a>CreateIntent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBuiltInIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuiltInIntentsCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBuiltInIntentsCommand extends $Command<ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListBuiltInIntentsCommandInput;
    constructor(input: ListBuiltInIntentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput>;
    private serialize;
    private deserialize;
}
