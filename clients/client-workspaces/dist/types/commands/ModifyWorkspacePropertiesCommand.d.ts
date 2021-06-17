import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyWorkspacePropertiesCommandInput extends ModifyWorkspacePropertiesRequest {
}
export interface ModifyWorkspacePropertiesCommandOutput extends ModifyWorkspacePropertiesResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified WorkSpace properties. For important information about how
 *          to modify the size of the root and user volumes, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">
 *             Modify a WorkSpace</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspacePropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspacePropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspacePropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspacePropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspacePropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyWorkspacePropertiesCommand extends $Command<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspacePropertiesCommandInput;
    constructor(input: ModifyWorkspacePropertiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
