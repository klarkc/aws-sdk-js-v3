import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifySelfservicePermissionsCommandInput extends ModifySelfservicePermissionsRequest {
}
export interface ModifySelfservicePermissionsCommandOutput extends ModifySelfservicePermissionsResult, __MetadataBearer {
}
/**
 * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySelfservicePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySelfservicePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifySelfservicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySelfservicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifySelfservicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifySelfservicePermissionsCommand extends $Command<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifySelfservicePermissionsCommandInput;
    constructor(input: ModifySelfservicePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
