import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteBotVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBotVersionCommandInput extends DeleteBotVersionRequest {
}
export interface DeleteBotVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a specific version of a bot. To delete all versions of a
 *       bot, use the <a>DeleteBot</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteBotVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBotVersionCommand extends $Command<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteBotVersionCommandInput;
    constructor(input: DeleteBotVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput>;
    private serialize;
    private deserialize;
}
