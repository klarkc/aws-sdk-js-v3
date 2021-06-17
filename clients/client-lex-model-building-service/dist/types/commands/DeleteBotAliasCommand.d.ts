import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteBotAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotAliasCommandInput extends DeleteBotAliasRequest {
}
export interface DeleteBotAliasCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an alias for the specified bot. </p>
 *          <p>You can't delete an alias that is used in the association between a
 *       bot and a messaging channel. If an alias is used in a channel association,
 *       the <code>DeleteBot</code> operation returns a
 *         <code>ResourceInUseException</code> exception that includes a reference
 *       to the channel association that refers to the bot. You can remove the
 *       reference to the alias by deleting the channel association. If you get the
 *       same exception again, delete the referring association until the
 *         <code>DeleteBotAlias</code> operation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotAliasCommand extends $Command<DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteBotAliasCommandInput;
    constructor(input: DeleteBotAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput>;
    private serialize;
    private deserialize;
}
