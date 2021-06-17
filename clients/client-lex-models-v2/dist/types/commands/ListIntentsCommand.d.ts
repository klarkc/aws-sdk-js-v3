import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListIntentsRequest, ListIntentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIntentsCommandInput extends ListIntentsRequest {
}
export interface ListIntentsCommandOutput extends ListIntentsResponse, __MetadataBearer {
}
/**
 * <p>Get a list of intents that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntentsCommandInput} for command's `input` shape.
 * @see {@link ListIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIntentsCommand extends $Command<ListIntentsCommandInput, ListIntentsCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: ListIntentsCommandInput;
    constructor(input: ListIntentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIntentsCommandInput, ListIntentsCommandOutput>;
    private serialize;
    private deserialize;
}
