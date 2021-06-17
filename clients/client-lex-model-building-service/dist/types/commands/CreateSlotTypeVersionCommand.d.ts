import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSlotTypeVersionCommandInput extends CreateSlotTypeVersionRequest {
}
export interface CreateSlotTypeVersionCommandOutput extends CreateSlotTypeVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of a slot type based on the
 *         <code>$LATEST</code> version of the specified slot type. If the
 *         <code>$LATEST</code> version of this resource has not changed since the
 *       last version that you created, Amazon Lex doesn't create a new version. It
 *       returns the last version that you created. </p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of a slot
 *         type. You can't update the numbered versions that you create with the
 *           <code>CreateSlotTypeVersion</code> operation.</p>
 *          </note>
 *
 *          <p>When you create a version of a slot type, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:CreateSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSlotTypeVersionCommand extends $Command<CreateSlotTypeVersionCommandInput, CreateSlotTypeVersionCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: CreateSlotTypeVersionCommandInput;
    constructor(input: CreateSlotTypeVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSlotTypeVersionCommandInput, CreateSlotTypeVersionCommandOutput>;
    private serialize;
    private deserialize;
}
