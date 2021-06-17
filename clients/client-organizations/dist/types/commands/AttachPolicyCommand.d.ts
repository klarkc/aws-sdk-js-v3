import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { AttachPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachPolicyCommandInput extends AttachPolicyRequest {
}
export interface AttachPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Attaches a policy to a root, an organizational unit (OU), or an individual account.
 *             How the policy affects accounts depends on the type of policy. Refer to the
 *                 <i>AWS Organizations User Guide</i> for information about each policy type:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, AttachPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, AttachPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new AttachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachPolicyCommand extends $Command<AttachPolicyCommandInput, AttachPolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: AttachPolicyCommandInput;
    constructor(input: AttachPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachPolicyCommandInput, AttachPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
