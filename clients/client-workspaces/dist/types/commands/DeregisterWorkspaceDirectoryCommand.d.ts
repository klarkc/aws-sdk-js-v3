import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterWorkspaceDirectoryCommandInput extends DeregisterWorkspaceDirectoryRequest {
}
export interface DeregisterWorkspaceDirectoryCommandOutput extends DeregisterWorkspaceDirectoryResult, __MetadataBearer {
}
/**
 * <p>Deregisters the specified directory. This operation is asynchronous
 *          and returns before the WorkSpace directory is deregistered. If any WorkSpaces are
 *       registered to this directory, you must remove them before you can deregister the directory.</p>
 *
 *          <note>
 *             <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces.
 *             If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30
 *             consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces,
 *             and you will be charged for this directory as per the
 *             <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p>
 *
 *             <p>To delete empty directories, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html">
 *                Delete the Directory for Your WorkSpaces</a>. If you delete your
 *             Simple AD or AD Connector directory, you can always create a new one when you want to start using
 *             WorkSpaces again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeregisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeregisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterWorkspaceDirectoryCommand extends $Command<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DeregisterWorkspaceDirectoryCommandInput;
    constructor(input: DeregisterWorkspaceDirectoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
