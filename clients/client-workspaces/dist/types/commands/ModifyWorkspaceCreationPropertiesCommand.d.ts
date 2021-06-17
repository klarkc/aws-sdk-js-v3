import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyWorkspaceCreationPropertiesCommandInput extends ModifyWorkspaceCreationPropertiesRequest {
}
export interface ModifyWorkspaceCreationPropertiesCommandOutput extends ModifyWorkspaceCreationPropertiesResult, __MetadataBearer {
}
/**
 * <p>Modify the default properties used to create WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceCreationPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceCreationPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceCreationPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyWorkspaceCreationPropertiesCommand extends $Command<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspaceCreationPropertiesCommandInput;
    constructor(input: ModifyWorkspaceCreationPropertiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
