import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteSlotTypeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSlotTypeCommandInput extends DeleteSlotTypeRequest {
}
export interface DeleteSlotTypeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes all versions of the slot type, including the
 *         <code>$LATEST</code> version. To delete a specific version of the slot
 *       type, use the <a>DeleteSlotTypeVersion</a> operation.</p>
 *          <p> You can delete a version of a slot type only if it is not
 *       referenced. To delete a slot type that is referred to in one or more
 *       intents, you must remove those references first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception,
 *         the exception provides an example reference that shows the intent where
 *         the slot type is referenced. To remove the reference to the slot type,
 *         either update the intent or delete it. If you get the same exception
 *         when you attempt to delete the slot type again, repeat until the slot
 *         type has no references and the <code>DeleteSlotType</code> call is
 *         successful. </p>
 *          </note>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSlotTypeCommand extends $Command<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteSlotTypeCommandInput;
    constructor(input: DeleteSlotTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput>;
    private serialize;
    private deserialize;
}
