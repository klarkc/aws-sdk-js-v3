import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccountPasswordPolicyRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAccountPasswordPolicyCommandInput extends UpdateAccountPasswordPolicyRequest {
}
export interface UpdateAccountPasswordPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the password policy settings for the AWS account.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>This operation does not support partial updates. No parameters are
 *                         required, but if you do not specify a parameter, that parameter's value
 *                         reverts to its default value. See the <b>Request
 *                             Parameters</b> section for each parameter's default value. Also
 *                         note that some parameters do not allow the default parameter to be
 *                         explicitly set. Instead, to invoke the default value, do not include that
 *                         parameter when you invoke the operation.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAccountPasswordPolicyCommand extends $Command<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateAccountPasswordPolicyCommandInput;
    constructor(input: UpdateAccountPasswordPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
