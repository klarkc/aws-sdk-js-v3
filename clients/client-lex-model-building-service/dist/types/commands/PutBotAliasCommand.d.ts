import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { PutBotAliasRequest, PutBotAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutBotAliasCommandInput extends PutBotAliasRequest {
}
export interface PutBotAliasCommandOutput extends PutBotAliasResponse, __MetadataBearer {
}
/**
 * <p>Creates an alias for the specified version of the bot or replaces
 *       an alias for the specified bot. To change the version of the bot that the
 *       alias points to, replace the alias. For more information about aliases,
 *       see <a>versioning-aliases</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutBotAlias</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBotAliasCommandInput} for command's `input` shape.
 * @see {@link PutBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutBotAliasCommand extends $Command<PutBotAliasCommandInput, PutBotAliasCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: PutBotAliasCommandInput;
    constructor(input: PutBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBotAliasCommandInput, PutBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
