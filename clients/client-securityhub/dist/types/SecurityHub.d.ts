import { SecurityHubClient } from "./SecurityHubClient";
import { AcceptAdministratorInvitationCommandInput, AcceptAdministratorInvitationCommandOutput } from "./commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { BatchDisableStandardsCommandInput, BatchDisableStandardsCommandOutput } from "./commands/BatchDisableStandardsCommand";
import { BatchEnableStandardsCommandInput, BatchEnableStandardsCommandOutput } from "./commands/BatchEnableStandardsCommand";
import { BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput } from "./commands/BatchImportFindingsCommand";
import { BatchUpdateFindingsCommandInput, BatchUpdateFindingsCommandOutput } from "./commands/BatchUpdateFindingsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "./commands/CreateActionTargetCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "./commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "./commands/DeleteActionTargetCommand";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "./commands/DeleteInsightCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import { DescribeActionTargetsCommandInput, DescribeActionTargetsCommandOutput } from "./commands/DescribeActionTargetsCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import { DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput } from "./commands/DescribeOrganizationConfigurationCommand";
import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "./commands/DescribeProductsCommand";
import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "./commands/DescribeStandardsCommand";
import { DescribeStandardsControlsCommandInput, DescribeStandardsControlsCommandOutput } from "./commands/DescribeStandardsControlsCommand";
import { DisableImportFindingsForProductCommandInput, DisableImportFindingsForProductCommandOutput } from "./commands/DisableImportFindingsForProductCommand";
import { DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput } from "./commands/DisableOrganizationAdminAccountCommand";
import { DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput } from "./commands/DisableSecurityHubCommand";
import { DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput } from "./commands/DisassociateFromAdministratorAccountCommand";
import { DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput } from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMembersCommandInput, DisassociateMembersCommandOutput } from "./commands/DisassociateMembersCommand";
import { EnableImportFindingsForProductCommandInput, EnableImportFindingsForProductCommandOutput } from "./commands/EnableImportFindingsForProductCommand";
import { EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput } from "./commands/EnableOrganizationAdminAccountCommand";
import { EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput } from "./commands/EnableSecurityHubCommand";
import { GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput } from "./commands/GetAdministratorAccountCommand";
import { GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput } from "./commands/GetEnabledStandardsCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "./commands/GetInsightResultsCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import { GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput } from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import { ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput } from "./commands/ListEnabledProductsForImportCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "./commands/ListOrganizationAdminAccountsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "./commands/UpdateActionTargetCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { UpdateInsightCommandInput, UpdateInsightCommandOutput } from "./commands/UpdateInsightCommand";
import { UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput } from "./commands/UpdateOrganizationConfigurationCommand";
import { UpdateSecurityHubConfigurationCommandInput, UpdateSecurityHubConfigurationCommandOutput } from "./commands/UpdateSecurityHubConfigurationCommand";
import { UpdateStandardsControlCommandInput, UpdateStandardsControlCommandOutput } from "./commands/UpdateStandardsControlCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Security Hub provides you with a comprehensive view of the security state of your AWS
 *          environment and resources. It also provides you with the readiness status of your
 *          environment based on controls from supported security standards. Security Hub collects security
 *          data from AWS accounts, services, and integrated third-party products and helps you analyze
 *          security trends in your environment to identify the highest priority security issues. For
 *          more information about Security Hub, see the <i>
 *                <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User
 *                Guide</a>
 *             </i>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the AWS
 *          Region that is currently active or in the specific AWS Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to.</p>
 *          <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>
 *                <a>CreateMembers</a>
 *             </code> to add a member account to Security Hub, the association of
 *          the member account with the administrator account is created only in the <code>us-west-2</code>
 *          Region. Security Hub must be enabled for the member account in the same Region that the invitation
 *          was sent from.</p>
 *          <p>The following throttling limits apply to using Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>BatchEnableStandards</a>
 *                   </code> - <code>RateLimit</code> of 1
 *                request per second, <code>BurstLimit</code> of 1 request per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>GetFindings</a>
 *                   </code> - <code>RateLimit</code> of 3 requests per second.
 *                   <code>BurstLimit</code> of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>UpdateFindings</a>
 *                   </code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>UpdateStandardsControl</a>
 *                   </code> - <code>RateLimit</code> of
 *                1 request per second, <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 */
export declare class SecurityHub extends SecurityHubClient {
    /**
     * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
     *          account that the invitation was sent from.</p>
     *          <p>This operation is only used by member accounts that are not added through
     *          Organizations.</p>
     *          <p>When the member account accepts the invitation, permission is granted to the administrator
     *          account to view findings generated in the member account.</p>
     */
    acceptAdministratorInvitation(args: AcceptAdministratorInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptAdministratorInvitationCommandOutput>;
    acceptAdministratorInvitation(args: AcceptAdministratorInvitationCommandInput, cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void): void;
    acceptAdministratorInvitation(args: AcceptAdministratorInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p>
     *          <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p>
     *          <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
     *          account that the invitation was sent from.</p>
     *          <p>This operation is only used by member accounts that are not added through
     *          Organizations.</p>
     *          <p>When the member account accepts the invitation, permission is granted to the administrator
     *          account to view findings generated in the member account.</p>
     */
    acceptInvitation(args: AcceptInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInvitationCommandOutput>;
    acceptInvitation(args: AcceptInvitationCommandInput, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    acceptInvitation(args: AcceptInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    /**
     * <p>Disables the standards specified by the provided
     *          <code>StandardsSubscriptionArns</code>.</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>AWS Security Hub User
     *          Guide</i>.</p>
     */
    batchDisableStandards(args: BatchDisableStandardsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisableStandardsCommandOutput>;
    batchDisableStandards(args: BatchDisableStandardsCommandInput, cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void): void;
    batchDisableStandards(args: BatchDisableStandardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void): void;
    /**
     * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
     *          ARN for a standard, use the <code>
     *                <a>DescribeStandards</a>
     *             </code>
     *          operation.</p>
     *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
     *          section of the <i>AWS Security Hub User Guide</i>.</p>
     */
    batchEnableStandards(args: BatchEnableStandardsCommandInput, options?: __HttpHandlerOptions): Promise<BatchEnableStandardsCommandOutput>;
    batchEnableStandards(args: BatchEnableStandardsCommandInput, cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void): void;
    batchEnableStandards(args: BatchEnableStandardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void): void;
    /**
     * <p>Imports security findings generated from an integrated product into Security Hub.
     *          This action is requested by the integrated product to import its findings into
     *          Security Hub.</p>
     *          <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
     *          larger than 240 Kb.</p>
     *          <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update
     *          the following finding fields and objects, which Security Hub customers use to manage their
     *          investigation workflow.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Note</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UserDefinedFields</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VerificationState</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Workflow</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Confidence</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Criticality</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RelatedFindings</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Severity</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Types</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
     */
    batchImportFindings(args: BatchImportFindingsCommandInput, options?: __HttpHandlerOptions): Promise<BatchImportFindingsCommandOutput>;
    batchImportFindings(args: BatchImportFindingsCommandInput, cb: (err: any, data?: BatchImportFindingsCommandOutput) => void): void;
    batchImportFindings(args: BatchImportFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchImportFindingsCommandOutput) => void): void;
    /**
     * <p>Used by Security Hub customers to update information about their investigation into a finding.
     *          Requested by administrator accounts or member accounts. Administrator accounts can update findings for
     *          their account and their member accounts. Member accounts can update findings for their
     *          account.</p>
     *          <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of
     *             <code>UpdatedAt</code> for a finding.</p>
     *          <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the
     *          following finding fields and objects.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Confidence</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Criticality</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Note</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RelatedFindings</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Severity</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Types</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UserDefinedFields</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VerificationState</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Workflow</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>You can configure IAM policies to restrict access to fields and field values. For
     *          example, you might not want member accounts to be able to suppress findings or change the
     *          finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the
     *             <i>AWS Security Hub User Guide</i>.</p>
     */
    batchUpdateFindings(args: BatchUpdateFindingsCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpdateFindingsCommandOutput>;
    batchUpdateFindings(args: BatchUpdateFindingsCommandInput, cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void): void;
    batchUpdateFindings(args: BatchUpdateFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void): void;
    /**
     * <p>Creates a custom action target in Security Hub.</p>
     *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
     *          in Amazon CloudWatch Events.</p>
     */
    createActionTarget(args: CreateActionTargetCommandInput, options?: __HttpHandlerOptions): Promise<CreateActionTargetCommandOutput>;
    createActionTarget(args: CreateActionTargetCommandInput, cb: (err: any, data?: CreateActionTargetCommandOutput) => void): void;
    createActionTarget(args: CreateActionTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateActionTargetCommandOutput) => void): void;
    /**
     * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate
     *          to a security issue that requires attention or remediation.</p>
     *          <p>To group the related findings in the insight, use the
     *          <code>GroupByAttribute</code>.</p>
     */
    createInsight(args: CreateInsightCommandInput, options?: __HttpHandlerOptions): Promise<CreateInsightCommandOutput>;
    createInsight(args: CreateInsightCommandInput, cb: (err: any, data?: CreateInsightCommandOutput) => void): void;
    createInsight(args: CreateInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInsightCommandOutput) => void): void;
    /**
     * <p>Creates a member association in Security Hub between the specified accounts and the account
     *          used to make the request, which is the administrator account. If you are integrated with
     *          Organizations, then the administrator account is designated by the organization management account.</p>
     *          <p>
     *             <code>CreateMembers</code> is always used to add accounts that are not organization
     *          members.</p>
     *          <p>For accounts that are part of an organization, <code>CreateMembers</code> is only used
     *          in the following cases:</p>
     *          <ul>
     *             <li>
     *                <p>Security Hub is not configured to automatically add new accounts in an
     *                organization.</p>
     *             </li>
     *             <li>
     *                <p>The account was disassociated or deleted in Security Hub.</p>
     *             </li>
     *          </ul>
     *          <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you
     *          can use the <code>
     *                <a>EnableSecurityHub</a>
     *             </code> operation.</p>
     *          <p>For accounts that are not organization members, you create the account association and
     *          then send an invitation to the member account. To send the invitation, you use the
     *                <code>
     *                <a>InviteMembers</a>
     *             </code> operation. If the account owner accepts
     *          the invitation, the account becomes a member account in Security Hub.</p>
     *          <p>Accounts that are part of an organization do not receive an invitation. They
     *          automatically become a member account in Security Hub.</p>
     *          <p>A permissions policy is added that permits the administrator account to view the findings
     *          generated in the member account. When Security Hub is enabled in a member account, the member account findings are
     *          also visible to the administrator account. </p>
     *          <p>To remove the association between the administrator and member accounts, use the <code>
     *                <a>DisassociateFromMasterAccount</a>
     *             </code> or <code>
     *                <a>DisassociateMembers</a>
     *             </code> operation.</p>
     */
    createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
    createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    createMembers(args: CreateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    /**
     * <p>Declines invitations to become a member account.</p>
     *          <p>This operation is only used by accounts that are not part of an organization.
     *          Organization accounts do not receive invitations.</p>
     */
    declineInvitations(args: DeclineInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeclineInvitationsCommandOutput>;
    declineInvitations(args: DeclineInvitationsCommandInput, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    declineInvitations(args: DeclineInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    /**
     * <p>Deletes a custom action target from Security Hub.</p>
     *          <p>Deleting a custom action target does not affect any findings or insights that were
     *          already sent to Amazon CloudWatch Events using the custom action.</p>
     */
    deleteActionTarget(args: DeleteActionTargetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteActionTargetCommandOutput>;
    deleteActionTarget(args: DeleteActionTargetCommandInput, cb: (err: any, data?: DeleteActionTargetCommandOutput) => void): void;
    deleteActionTarget(args: DeleteActionTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteActionTargetCommandOutput) => void): void;
    /**
     * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
     */
    deleteInsight(args: DeleteInsightCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInsightCommandOutput>;
    deleteInsight(args: DeleteInsightCommandInput, cb: (err: any, data?: DeleteInsightCommandOutput) => void): void;
    deleteInsight(args: DeleteInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInsightCommandOutput) => void): void;
    /**
     * <p>Deletes invitations received by the AWS account to become a member account.</p>
     *          <p>This operation is only used by accounts that are not part of an organization.
     *          Organization accounts do not receive invitations.</p>
     */
    deleteInvitations(args: DeleteInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInvitationsCommandOutput>;
    deleteInvitations(args: DeleteInvitationsCommandInput, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    deleteInvitations(args: DeleteInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified member accounts from Security Hub.</p>
     *          <p>Can be used to delete member accounts that belong to an organization as well as member
     *          accounts that were invited manually.</p>
     */
    deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
    deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    deleteMembers(args: DeleteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    /**
     * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
     */
    describeActionTargets(args: DescribeActionTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActionTargetsCommandOutput>;
    describeActionTargets(args: DescribeActionTargetsCommandInput, cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void): void;
    describeActionTargets(args: DescribeActionTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void): void;
    /**
     * <p>Returns details about the Hub resource in your account, including the
     *             <code>HubArn</code> and the time when you enabled Security Hub.</p>
     */
    describeHub(args: DescribeHubCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHubCommandOutput>;
    describeHub(args: DescribeHubCommandInput, cb: (err: any, data?: DescribeHubCommandOutput) => void): void;
    describeHub(args: DescribeHubCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHubCommandOutput) => void): void;
    /**
     * <p>Returns information about the Organizations configuration for Security Hub. Can only be
     *          called from a Security Hub administrator account.</p>
     */
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConfigurationCommandOutput>;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns information about product integrations in Security Hub.</p>
     *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
     *          the results only include that integration.</p>
     *          <p>If you do not provide an integration ARN, then the results include all of the available
     *          product integrations. </p>
     */
    describeProducts(args: DescribeProductsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProductsCommandOutput>;
    describeProducts(args: DescribeProductsCommandInput, cb: (err: any, data?: DescribeProductsCommandOutput) => void): void;
    describeProducts(args: DescribeProductsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProductsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available standards in Security Hub.</p>
     *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
     */
    describeStandards(args: DescribeStandardsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStandardsCommandOutput>;
    describeStandards(args: DescribeStandardsCommandInput, cb: (err: any, data?: DescribeStandardsCommandOutput) => void): void;
    describeStandards(args: DescribeStandardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStandardsCommandOutput) => void): void;
    /**
     * <p>Returns a list of security standards controls.</p>
     *          <p>For each control, the results include information about whether it is currently enabled,
     *          the severity, and a link to remediation information.</p>
     */
    describeStandardsControls(args: DescribeStandardsControlsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStandardsControlsCommandOutput>;
    describeStandardsControls(args: DescribeStandardsControlsCommandInput, cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void): void;
    describeStandardsControls(args: DescribeStandardsControlsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void): void;
    /**
     * <p>Disables the integration of the specified product with Security Hub. After the integration is
     *          disabled, findings from that product are no longer sent to Security Hub.</p>
     */
    disableImportFindingsForProduct(args: DisableImportFindingsForProductCommandInput, options?: __HttpHandlerOptions): Promise<DisableImportFindingsForProductCommandOutput>;
    disableImportFindingsForProduct(args: DisableImportFindingsForProductCommandInput, cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void): void;
    disableImportFindingsForProduct(args: DisableImportFindingsForProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void): void;
    /**
     * <p>Disables a Security Hub administrator account. Can only be called by the organization
     *          management account.</p>
     */
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisableOrganizationAdminAccountCommandOutput>;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all
     *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
     *          <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated
     *          member accounts.</p>
     *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
     *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
     *          are disabled, and your administrator and member account associations are removed.</p>
     *          <p>If you want to save your existing findings, you must export them before you disable
     *          Security Hub.</p>
     */
    disableSecurityHub(args: DisableSecurityHubCommandInput, options?: __HttpHandlerOptions): Promise<DisableSecurityHubCommandOutput>;
    disableSecurityHub(args: DisableSecurityHubCommandInput, cb: (err: any, data?: DisableSecurityHubCommandOutput) => void): void;
    disableSecurityHub(args: DisableSecurityHubCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableSecurityHubCommandOutput) => void): void;
    /**
     * <p>Disassociates the current Security Hub member account from the associated administrator
     *          account.</p>
     *          <p>This operation is only used by accounts that are not part of an organization. For
     *          organization accounts, only the administrator account can
     *          disassociate a member account.</p>
     */
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFromAdministratorAccountCommandOutput>;
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void): void;
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p>
     *          <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p>
     *          <p>Disassociates the current Security Hub member account from the associated administrator
     *          account.</p>
     *          <p>This operation is only used by accounts that are not part of an organization. For
     *          organization accounts, only the administrator account can
     *          disassociate a member account.</p>
     */
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFromMasterAccountCommandOutput>;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified member accounts from the associated administrator account.</p>
     *          <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that
     *          were invited manually.</p>
     */
    disassociateMembers(args: DisassociateMembersCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMembersCommandOutput>;
    disassociateMembers(args: DisassociateMembersCommandInput, cb: (err: any, data?: DisassociateMembersCommandOutput) => void): void;
    disassociateMembers(args: DisassociateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMembersCommandOutput) => void): void;
    /**
     * <p>Enables the integration of a partner product with Security Hub. Integrated products send
     *          findings to Security Hub.</p>
     *          <p>When you enable a product integration, a permissions policy that grants permission for
     *          the product to send findings to Security Hub is applied.</p>
     */
    enableImportFindingsForProduct(args: EnableImportFindingsForProductCommandInput, options?: __HttpHandlerOptions): Promise<EnableImportFindingsForProductCommandOutput>;
    enableImportFindingsForProduct(args: EnableImportFindingsForProductCommandInput, cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void): void;
    enableImportFindingsForProduct(args: EnableImportFindingsForProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void): void;
    /**
     * <p>Designates the Security Hub administrator account for an organization. Can only be called by
     *          the organization management account.</p>
     */
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<EnableOrganizationAdminAccountCommandOutput>;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
     *          request.</p>
     *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
     *          from other services that are integrated with Security Hub.</p>
     *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
     *          automatically enable the following standards.</p>
     *          <ul>
     *             <li>
     *                <p>CIS AWS Foundations</p>
     *             </li>
     *             <li>
     *                <p>AWS Foundational Security Best Practices</p>
     *             </li>
     *          </ul>
     *          <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p>
     *          <p>To not enable the automatically enabled standards, set
     *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
     *          <p>After you enable Security Hub, to enable a standard, use the <code>
     *                <a>BatchEnableStandards</a>
     *             </code> operation. To disable a standard, use the
     *                <code>
     *                <a>BatchDisableStandards</a>
     *             </code> operation.</p>
     *          <p>To learn more, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">Setting Up
     *             AWS Security Hub</a> in the <i>AWS Security Hub User Guide</i>.</p>
     */
    enableSecurityHub(args: EnableSecurityHubCommandInput, options?: __HttpHandlerOptions): Promise<EnableSecurityHubCommandOutput>;
    enableSecurityHub(args: EnableSecurityHubCommandInput, cb: (err: any, data?: EnableSecurityHubCommandOutput) => void): void;
    enableSecurityHub(args: EnableSecurityHubCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableSecurityHubCommandOutput) => void): void;
    /**
     * <p>Provides the details for the Security Hub administrator account for the current member account.</p>
     *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
     *          invited manually.</p>
     */
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAdministratorAccountCommandOutput>;
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void): void;
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void): void;
    /**
     * <p>Returns a list of the standards that are currently enabled.</p>
     */
    getEnabledStandards(args: GetEnabledStandardsCommandInput, options?: __HttpHandlerOptions): Promise<GetEnabledStandardsCommandOutput>;
    getEnabledStandards(args: GetEnabledStandardsCommandInput, cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void): void;
    getEnabledStandards(args: GetEnabledStandardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void): void;
    /**
     * <p>Returns a list of findings that match the specified criteria.</p>
     */
    getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
    getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    getFindings(args: GetFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    /**
     * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
     */
    getInsightResults(args: GetInsightResultsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightResultsCommandOutput>;
    getInsightResults(args: GetInsightResultsCommandInput, cb: (err: any, data?: GetInsightResultsCommandOutput) => void): void;
    getInsightResults(args: GetInsightResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightResultsCommandOutput) => void): void;
    /**
     * <p>Lists and describes insights for the specified insight ARNs.</p>
     */
    getInsights(args: GetInsightsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightsCommandOutput>;
    getInsights(args: GetInsightsCommandInput, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
    getInsights(args: GetInsightsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
    /**
     * <p>Returns the count of all Security Hub membership invitations that were sent to the
     *          current member account, not including the currently accepted invitation. </p>
     */
    getInvitationsCount(args: GetInvitationsCountCommandInput, options?: __HttpHandlerOptions): Promise<GetInvitationsCountCommandOutput>;
    getInvitationsCount(args: GetInvitationsCountCommandInput, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    getInvitationsCount(args: GetInvitationsCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p>
     *          <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p>
     *          <p>Provides the details for the Security Hub administrator account for the current member account.</p>
     *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
     *          invited manually.</p>
     */
    getMasterAccount(args: GetMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetMasterAccountCommandOutput>;
    getMasterAccount(args: GetMasterAccountCommandInput, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    getMasterAccount(args: GetMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    /**
     * <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p>
     *          <p>An administrator account can be either the delegated Security Hub administrator account for an
     *          organization or an administrator account that enabled Security Hub manually.</p>
     *          <p>The results include both member accounts that are managed using Organizations and accounts that
     *          were invited manually.</p>
     */
    getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
    getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    getMembers(args: GetMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    /**
     * <p>Invites other AWS accounts to become member accounts for the Security Hub administrator account that
     *          the invitation is sent from.</p>
     *          <p>This operation is only used to invite accounts that do not belong to an organization.
     *          Organization accounts do not receive invitations.</p>
     *          <p>Before you can use this action to invite a member, you must first use the <code>
     *                <a>CreateMembers</a>
     *             </code> action to create the member account in Security Hub.</p>
     *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
     *          account, the administrator account can view the findings generated from the member account.</p>
     */
    inviteMembers(args: InviteMembersCommandInput, options?: __HttpHandlerOptions): Promise<InviteMembersCommandOutput>;
    inviteMembers(args: InviteMembersCommandInput, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
    inviteMembers(args: InviteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
    /**
     * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
     *          findings from in Security Hub.</p>
     */
    listEnabledProductsForImport(args: ListEnabledProductsForImportCommandInput, options?: __HttpHandlerOptions): Promise<ListEnabledProductsForImportCommandOutput>;
    listEnabledProductsForImport(args: ListEnabledProductsForImportCommandInput, cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void): void;
    listEnabledProductsForImport(args: ListEnabledProductsForImportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void): void;
    /**
     * <p>Lists all Security Hub membership invitations that were sent to the current AWS account.</p>
     *          <p>This operation is only used by accounts that are managed by invitation.
     *          Accounts that are managed using the integration with AWS Organizations do not receive invitations.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Lists details about all member accounts for the current Security Hub administrator
     *          account.</p>
     *          <p>The results include both member accounts that belong to an organization and member
     *          accounts that were invited manually.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Lists the Security Hub administrator accounts. Can only be called by the organization
     *          management account.</p>
     */
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationAdminAccountsCommandOutput>;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags associated with a resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the name and description of a custom action target in Security Hub.</p>
     */
    updateActionTarget(args: UpdateActionTargetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateActionTargetCommandOutput>;
    updateActionTarget(args: UpdateActionTargetCommandInput, cb: (err: any, data?: UpdateActionTargetCommandOutput) => void): void;
    updateActionTarget(args: UpdateActionTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateActionTargetCommandOutput) => void): void;
    /**
     * <p>
     *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
     *             <code>BatchUpdateFindings</code>.</p>
     *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
     *          findings that the filter attributes specify. Any member account that can view the finding
     *          also sees the update to the finding.</p>
     */
    updateFindings(args: UpdateFindingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFindingsCommandOutput>;
    updateFindings(args: UpdateFindingsCommandInput, cb: (err: any, data?: UpdateFindingsCommandOutput) => void): void;
    updateFindings(args: UpdateFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFindingsCommandOutput) => void): void;
    /**
     * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
     */
    updateInsight(args: UpdateInsightCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInsightCommandOutput>;
    updateInsight(args: UpdateInsightCommandInput, cb: (err: any, data?: UpdateInsightCommandOutput) => void): void;
    updateInsight(args: UpdateInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInsightCommandOutput) => void): void;
    /**
     * <p>Used to update the configuration related to Organizations. Can only be called from a
     *          Security Hub administrator account.</p>
     */
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOrganizationConfigurationCommandOutput>;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates configuration options for Security Hub.</p>
     */
    updateSecurityHubConfiguration(args: UpdateSecurityHubConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSecurityHubConfigurationCommandOutput>;
    updateSecurityHubConfiguration(args: UpdateSecurityHubConfigurationCommandInput, cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void): void;
    updateSecurityHubConfiguration(args: UpdateSecurityHubConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void): void;
    /**
     * <p>Used to control whether an individual security standard control is enabled or
     *          disabled.</p>
     */
    updateStandardsControl(args: UpdateStandardsControlCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStandardsControlCommandOutput>;
    updateStandardsControl(args: UpdateStandardsControlCommandInput, cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void): void;
    updateStandardsControl(args: UpdateStandardsControlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void): void;
}
