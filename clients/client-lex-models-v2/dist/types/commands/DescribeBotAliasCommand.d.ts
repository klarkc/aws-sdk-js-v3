import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotAliasRequest, DescribeBotAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBotAliasCommandInput extends DescribeBotAliasRequest {
}
export interface DescribeBotAliasCommandOutput extends DescribeBotAliasResponse, __MetadataBearer {
}
/**
 * <p>Get information about a specific bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBotAliasCommand extends $Command<DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DescribeBotAliasCommandInput;
    constructor(input: DescribeBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
