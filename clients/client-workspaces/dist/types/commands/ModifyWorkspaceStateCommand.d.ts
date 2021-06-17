import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyWorkspaceStateCommandInput extends ModifyWorkspaceStateRequest {
}
export interface ModifyWorkspaceStateCommandOutput extends ModifyWorkspaceStateResult, __MetadataBearer {
}
/**
 * <p>Sets the state of the specified WorkSpace.</p>
 *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
 *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
 *          state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceStateCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceStateCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceStateCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceStateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyWorkspaceStateCommand extends $Command<ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspaceStateCommandInput;
    constructor(input: ModifyWorkspaceStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput>;
    private serialize;
    private deserialize;
}
