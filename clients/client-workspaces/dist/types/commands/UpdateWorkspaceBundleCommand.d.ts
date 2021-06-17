import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorkspaceBundleCommandInput extends UpdateWorkspaceBundleRequest {
}
export interface UpdateWorkspaceBundleCommandOutput extends UpdateWorkspaceBundleResult, __MetadataBearer {
}
/**
 * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html">
 *             Update a Custom WorkSpaces Bundle</a>.</p>
 *
 *          <important>
 *             <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 *             based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 *             must either rebuild the WorkSpaces or delete and recreate them.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkspaceBundleCommand extends $Command<UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: UpdateWorkspaceBundleCommandInput;
    constructor(input: UpdateWorkspaceBundleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput>;
    private serialize;
    private deserialize;
}
