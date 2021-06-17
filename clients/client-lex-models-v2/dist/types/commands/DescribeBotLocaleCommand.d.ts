import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotLocaleRequest, DescribeBotLocaleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBotLocaleCommandInput extends DescribeBotLocaleRequest {
}
export interface DescribeBotLocaleCommandOutput extends DescribeBotLocaleResponse, __MetadataBearer {
}
/**
 * <p>Describes the settings that a bot has for a specific locale. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DescribeBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBotLocaleCommand extends $Command<DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeBotLocaleCommandInput;
    constructor(input: DescribeBotLocaleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput>;
    private serialize;
    private deserialize;
}
