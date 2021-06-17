import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotVersionRequest, DescribeBotVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBotVersionCommandInput extends DescribeBotVersionRequest {
}
export interface DescribeBotVersionCommandOutput extends DescribeBotVersionResponse, __MetadataBearer {
}
/**
 * <p>Provides metadata about a version of a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBotVersionCommand extends $Command<DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeBotVersionCommandInput;
    constructor(input: DescribeBotVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput>;
    private serialize;
    private deserialize;
}
