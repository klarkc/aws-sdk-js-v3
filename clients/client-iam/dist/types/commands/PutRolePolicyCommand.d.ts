import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRolePolicyCommandInput extends PutRolePolicyRequest {
}
export interface PutRolePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             role.</p>
 *         <p>When you embed an inline policy in a role, the inline policy is used as part of the
 *             role's access (permissions) policy. The role's trust policy is created at the same time
 *             as the role, using <a>CreateRole</a>. You can update a role's trust policy
 *             using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
 *                 delegate permissions and federate identities</a>.</p>
 *         <p>A role can also have a managed policy attached to it. To attach a managed policy to a
 *             role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of inline policies that you can embed with a
 *             role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutRolePolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRolePolicyCommandInput} for command's `input` shape.
 * @see {@link PutRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRolePolicyCommand extends $Command<PutRolePolicyCommandInput, PutRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutRolePolicyCommandInput;
    constructor(input: PutRolePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRolePolicyCommandInput, PutRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
