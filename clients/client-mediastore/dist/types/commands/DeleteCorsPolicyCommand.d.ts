import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteCorsPolicyInput, DeleteCorsPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCorsPolicyCommandInput extends DeleteCorsPolicyInput {
}
export interface DeleteCorsPolicyCommandOutput extends DeleteCorsPolicyOutput, __MetadataBearer {
}
/**
 * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission
 *          by default and can grant this permission to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCorsPolicyCommand extends $Command<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteCorsPolicyCommandInput;
    constructor(input: DeleteCorsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
