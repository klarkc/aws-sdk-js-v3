import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {
}
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Attaches the contents of the specified resource-based permission policy to a secret. A
 *       resource-based policy is optional. Alternatively, you can use IAM identity-based policies
 *       that specify the secret's Amazon Resource Name (ARN) in the policy statement's
 *         <code>Resources</code> element. You can also use a combination of both identity-based and
 *       resource-based policies. The affected users and roles receive the permissions that are
 *       permitted by all of the relevant policies. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Using Resource-Based
 *         Policies for AWS Secrets Manager</a>. For the complete description of the AWS policy syntax and
 *       grammar, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON
 *         Policy Reference</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:PutResourcePolicy</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the resource policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To delete the resource-based policy attached to a secret, use <a>DeleteResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResourcePolicyCommand extends $Command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: PutResourcePolicyCommandInput;
    constructor(input: PutResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
