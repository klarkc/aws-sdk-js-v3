import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotAliasRequest, CreateBotAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBotAliasCommandInput extends CreateBotAliasRequest {
}
export interface CreateBotAliasCommandOutput extends CreateBotAliasResponse, __MetadataBearer {
}
/**
 * <p>Creates an alias for the specified version of a bot. Use an alias to
 *          enable you to change the version of a bot without updating applications
 *          that use the bot.</p>
 *          <p>For example, you can create an alias called "PROD" that your
 *          applications use to call the Amazon Lex bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotAliasCommandInput} for command's `input` shape.
 * @see {@link CreateBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBotAliasCommand extends $Command<CreateBotAliasCommandInput, CreateBotAliasCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateBotAliasCommandInput;
    constructor(input: CreateBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBotAliasCommandInput, CreateBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
