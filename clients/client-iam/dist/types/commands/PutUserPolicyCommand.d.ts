import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutUserPolicyCommandInput extends PutUserPolicyRequest {
}
export interface PutUserPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             user.</p>
 *         <p>An IAM user can also have a managed policy attached to it. To attach a managed
 *             policy to a user, use <a>AttachUserPolicy</a>. To create a new managed
 *             policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of inline policies that you can embed in a
 *             user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutUserPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPolicyCommandInput} for command's `input` shape.
 * @see {@link PutUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutUserPolicyCommand extends $Command<PutUserPolicyCommandInput, PutUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutUserPolicyCommandInput;
    constructor(input: PutUserPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutUserPolicyCommandInput, PutUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
