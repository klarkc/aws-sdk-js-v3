import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DetachPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachPolicyCommandInput extends DetachPolicyRequest {
}
export interface DetachPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Detaches a policy from a target root, organizational unit (OU), or account.</p>
 *         <important>
 *             <p>If the policy being detached is a service control policy (SCP), the changes to
 *                 permissions for AWS Identity and Access Management (IAM) users and roles in affected accounts are
 *                 immediate.</p>
 *         </important>
 *         <p>Every root, OU, and account must have at least one SCP attached. If you want to
 *             replace the default <code>FullAWSAccess</code> policy with an SCP that limits the
 *             permissions that can be delegated, you must attach the replacement SCP before you can
 *             remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and
 *             leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect":
 *                 "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in
 *             the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the
 *             authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DetachPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DetachPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DetachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachPolicyCommand extends $Command<DetachPolicyCommandInput, DetachPolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DetachPolicyCommandInput;
    constructor(input: DetachPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachPolicyCommandInput, DetachPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
