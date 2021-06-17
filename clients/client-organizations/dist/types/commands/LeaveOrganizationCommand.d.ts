import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface LeaveOrganizationCommandInput {
}
export interface LeaveOrganizationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a member account from its parent organization. This version of the operation
 *             is performed by the account that wants to leave. To remove a member account as a user in
 *             the management account, use <a>RemoveAccountFromOrganization</a>
 *             instead.</p>
 *         <p>This operation can be called only from a member account in the organization.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>The management account in an organization with all features enabled can
 *                         set service control policies (SCPs) that can restrict what administrators of
 *                         member accounts can do. This includes preventing them from successfully
 *                         calling <code>LeaveOrganization</code> and leaving the organization.</p>
 *                 </li>
 *                <li>
 *                     <p>You can leave an organization as a member account only if the account is
 *                         configured with the information required to operate as a standalone account.
 *                         When you create an account in an organization using the AWS Organizations console,
 *                         API, or CLI commands, the information required of standalone accounts is
 *                             <i>not</i> automatically collected. For each account that
 *                         you want to make standalone, you must perform the following steps. If any of
 *                         the steps are already completed for this account, that step doesn't
 *                         appear.</p>
 *                     <ul>
 *                      <li>
 *                             <p>Choose a support plan</p>
 *                         </li>
 *                      <li>
 *                             <p>Provide and verify the required contact information</p>
 *                         </li>
 *                      <li>
 *                             <p>Provide a current payment method</p>
 *                         </li>
 *                   </ul>
 *                     <p>AWS uses the payment method to charge for any billable (not free tier)
 *                         AWS activity that occurs while the account isn't attached to an
 *                         organization. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
 *                             yet been provided</a> in the
 *                         <i>AWS Organizations User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>The account that you want to leave must not be a delegated administrator
 *                         account for any AWS service enabled for your organization. If the account
 *                         is a delegated administrator, you must first change the delegated
 *                         administrator account to another account that is remaining in the
 *                         organization.</p>
 *                 </li>
 *                <li>
 *                     <p>You can leave an organization only after you enable IAM user access to
 *                         billing in your account. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in
 *                         the <i>AWS Billing and Cost Management User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>After the account leaves the organization, all tags that were attached to
 *                         the account object in the organization are deleted. AWS accounts outside
 *                         of an organization do not support tags.</p>
 *                 </li>
 *                <li>
 *                     <p>A newly created account has a waiting period before it can be removed from
 *                         its organization. If you get an error that indicates that a wait period is
 *                         required, then try again in a few days.</p>
 *                 </li>
 *             </ul>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, LeaveOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, LeaveOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new LeaveOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LeaveOrganizationCommandInput} for command's `input` shape.
 * @see {@link LeaveOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class LeaveOrganizationCommand extends $Command<LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: LeaveOrganizationCommandInput;
    constructor(input: LeaveOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
