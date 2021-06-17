import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotAliasRequest, UpdateBotAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBotAliasCommandInput extends UpdateBotAliasRequest {
}
export interface UpdateBotAliasCommandOutput extends UpdateBotAliasResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration of an existing bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBotAliasCommand extends $Command<UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateBotAliasCommandInput;
    constructor(input: UpdateBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
