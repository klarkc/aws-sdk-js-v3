import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateConnectionAliasPermissionRequest, UpdateConnectionAliasPermissionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConnectionAliasPermissionCommandInput extends UpdateConnectionAliasPermissionRequest {
}
export interface UpdateConnectionAliasPermissionCommandOutput extends UpdateConnectionAliasPermissionResult, __MetadataBearer {
}
/**
 * <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to
 *          associate the connection alias with a directory. If the association permission is granted, the connection alias
 *          is shared with that account. If the association permission is revoked, the connection alias is unshared with the
 *          account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *                   DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *                </li>
 *                <li>
 *                   <p>To delete a connection alias that has been shared, the shared account must first disassociate the
 *                   connection alias from any directories it has been associated with. Then you must unshare the connection
 *                   alias from the account it has been shared with. You can delete a connection alias only after it is no
 *                   longer shared with any accounts or associated with any directories.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateConnectionAliasPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionAliasPermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionAliasPermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConnectionAliasPermissionCommand extends $Command<UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: UpdateConnectionAliasPermissionCommandInput;
    constructor(input: UpdateConnectionAliasPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
