import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBotAliasRequest, GetBotAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBotAliasCommandInput extends GetBotAliasRequest {
}
export interface GetBotAliasCommandOutput extends GetBotAliasResponse, __MetadataBearer {
}
/**
 * <p>Returns information about an Amazon Lex bot alias. For more information
 *       about aliases, see <a>versioning-aliases</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAlias</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotAliasCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBotAliasCommand extends $Command<GetBotAliasCommandInput, GetBotAliasCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBotAliasCommandInput;
    constructor(input: GetBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBotAliasCommandInput, GetBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
