import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRoleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRoleCommandInput extends DeleteRoleRequest {
}
export interface DeleteRoleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified role. The role must not have any policies attached. For more
 *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to delete. Deleting a role or instance profile that is associated with a
 *                 running instance will break any applications running on the instance.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRoleCommand extends $Command<DeleteRoleCommandInput, DeleteRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteRoleCommandInput;
    constructor(input: DeleteRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRoleCommandInput, DeleteRoleCommandOutput>;
    private serialize;
    private deserialize;
}
