import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePolicyCommandInput extends DeletePolicyRequest {
}
export interface DeletePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified managed policy.</p>
 *         <p>Before you can delete a managed policy, you must first detach the policy from all
 *             users, groups, and roles that it is attached to. In addition, you must delete all the
 *             policy's versions. The following steps describe the process for deleting a managed
 *             policy:</p>
 *         <ul>
 *             <li>
 *                 <p>Detach the policy from all users, groups, and roles that the policy is
 *                     attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To
 *                     list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>.
 *                     To list the policy's versions, use <a>ListPolicyVersions</a>. You
 *                     cannot use <a>DeletePolicyVersion</a> to delete the version that is
 *                     marked as the default version. You delete the policy's default version in the
 *                     next step of the process.</p>
 *             </li>
 *             <li>
 *                 <p>Delete the policy (this automatically deletes the policy's default version)
 *                     using this operation.</p>
 *             </li>
 *          </ul>
 *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePolicyCommand extends $Command<DeletePolicyCommandInput, DeletePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeletePolicyCommandInput;
    constructor(input: DeletePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
