import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteSlotTypeVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSlotTypeVersionCommandInput extends DeleteSlotTypeVersionRequest {
}
export interface DeleteSlotTypeVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a specific version of a slot type. To delete all versions
 *       of a slot type, use the <a>DeleteSlotType</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSlotTypeVersionCommand extends $Command<DeleteSlotTypeVersionCommandInput, DeleteSlotTypeVersionCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteSlotTypeVersionCommandInput;
    constructor(input: DeleteSlotTypeVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSlotTypeVersionCommandInput, DeleteSlotTypeVersionCommandOutput>;
    private serialize;
    private deserialize;
}
