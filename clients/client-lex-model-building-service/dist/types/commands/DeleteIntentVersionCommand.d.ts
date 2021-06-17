import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { DeleteIntentVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIntentVersionCommandInput extends DeleteIntentVersionRequest {
}
export interface DeleteIntentVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a specific version of an intent. To delete all versions of
 *       a intent, use the <a>DeleteIntent</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteIntentVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteIntentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIntentVersionCommand extends $Command<DeleteIntentVersionCommandInput, DeleteIntentVersionCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: DeleteIntentVersionCommandInput;
    constructor(input: DeleteIntentVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIntentVersionCommandInput, DeleteIntentVersionCommandOutput>;
    private serialize;
    private deserialize;
}
