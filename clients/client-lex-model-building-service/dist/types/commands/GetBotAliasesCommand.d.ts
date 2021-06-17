import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBotAliasesRequest, GetBotAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBotAliasesCommandInput extends GetBotAliasesRequest {
}
export interface GetBotAliasesCommandOutput extends GetBotAliasesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAliases</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotAliasesCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBotAliasesCommand extends $Command<GetBotAliasesCommandInput, GetBotAliasesCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBotAliasesCommandInput;
    constructor(input: GetBotAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBotAliasesCommandInput, GetBotAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
