import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteBotChannelAssociationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotChannelAssociationCommandInput extends DeleteBotChannelAssociationRequest {
}
export interface DeleteBotChannelAssociationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the association between an Amazon Lex bot and a messaging
 *       platform.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteBotChannelAssociationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotChannelAssociationCommand extends $Command<DeleteBotChannelAssociationCommandInput, DeleteBotChannelAssociationCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteBotChannelAssociationCommandInput;
    constructor(input: DeleteBotChannelAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotChannelAssociationCommandInput, DeleteBotChannelAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
