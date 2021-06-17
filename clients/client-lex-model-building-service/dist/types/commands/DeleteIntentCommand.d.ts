import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteIntentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIntentCommandInput extends DeleteIntentRequest {
}
export interface DeleteIntentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes all versions of the intent, including the
 *         <code>$LATEST</code> version. To delete a specific version of the
 *       intent, use the <a>DeleteIntentVersion</a> operation.</p>
 *          <p> You can delete a version of an intent only if it is not
 *       referenced. To delete an intent that is referred to in one or more bots
 *       (see <a>how-it-works</a>), you must remove those references
 *       first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception, it
 *         provides an example reference that shows where the intent is referenced.
 *         To remove the reference to the intent, either update the bot or delete
 *         it. If you get the same exception when you attempt to delete the intent
 *         again, repeat until the intent has no references and the call to
 *           <code>DeleteIntent</code> is successful. </p>
 *          </note>
 *
 *          <p> This operation requires permission for the
 *         <code>lex:DeleteIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIntentCommand extends $Command<DeleteIntentCommandInput, DeleteIntentCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteIntentCommandInput;
    constructor(input: DeleteIntentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIntentCommandInput, DeleteIntentCommandOutput>;
    private serialize;
    private deserialize;
}
