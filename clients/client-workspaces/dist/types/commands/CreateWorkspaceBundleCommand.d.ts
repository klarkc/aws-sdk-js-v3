import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateWorkspaceBundleRequest, CreateWorkspaceBundleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkspaceBundleCommandInput extends CreateWorkspaceBundleRequest {
}
export interface CreateWorkspaceBundleCommandOutput extends CreateWorkspaceBundleResult, __MetadataBearer {
}
/**
 * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
 *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkspaceBundleCommand extends $Command<CreateWorkspaceBundleCommandInput, CreateWorkspaceBundleCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateWorkspaceBundleCommandInput;
    constructor(input: CreateWorkspaceBundleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkspaceBundleCommandInput, CreateWorkspaceBundleCommandOutput>;
    private serialize;
    private deserialize;
}
