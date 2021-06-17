import { FMSClient } from "./FMSClient";
import { AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput } from "./commands/AssociateAdminAccountCommand";
import { DeleteAppsListCommandInput, DeleteAppsListCommandOutput } from "./commands/DeleteAppsListCommand";
import { DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput } from "./commands/DeleteNotificationChannelCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DeleteProtocolsListCommandInput, DeleteProtocolsListCommandOutput } from "./commands/DeleteProtocolsListCommand";
import { DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput } from "./commands/DisassociateAdminAccountCommand";
import { GetAdminAccountCommandInput, GetAdminAccountCommandOutput } from "./commands/GetAdminAccountCommand";
import { GetAppsListCommandInput, GetAppsListCommandOutput } from "./commands/GetAppsListCommand";
import { GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput } from "./commands/GetComplianceDetailCommand";
import { GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput } from "./commands/GetNotificationChannelCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput } from "./commands/GetProtectionStatusCommand";
import { GetProtocolsListCommandInput, GetProtocolsListCommandOutput } from "./commands/GetProtocolsListCommand";
import { GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput } from "./commands/GetViolationDetailsCommand";
import { ListAppsListsCommandInput, ListAppsListsCommandOutput } from "./commands/ListAppsListsCommand";
import { ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput } from "./commands/ListComplianceStatusCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "./commands/ListMemberAccountsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import { ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput } from "./commands/ListProtocolsListsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutAppsListCommandInput, PutAppsListCommandOutput } from "./commands/PutAppsListCommand";
import { PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput } from "./commands/PutNotificationChannelCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import { PutProtocolsListCommandInput, PutProtocolsListCommandOutput } from "./commands/PutProtocolsListCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Firewall Manager</fullname>
 *          <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the AWS Firewall Manager API actions, data
 *       types, and errors. For detailed information about AWS Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall Manager Developer Guide</a>.</p>
 *          <p>Some API actions require explicit resource permissions. For information, see the developer guide topic
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a>.
 * </p>
 */
export declare class FMS extends FMSClient {
    /**
     * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be
     *       associated with the master account of your AWS organization or associated with a member
     *       account that has the appropriate permissions. If the account ID that you submit is not an AWS
     *       Organizations master account, AWS Firewall Manager will set the appropriate permissions for
     *       the given member account.</p>
     *          <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall
     *       Manager administrator account. </p>
     */
    associateAdminAccount(args: AssociateAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<AssociateAdminAccountCommandOutput>;
    associateAdminAccount(args: AssociateAdminAccountCommandInput, cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void): void;
    associateAdminAccount(args: AssociateAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void): void;
    /**
     * <p>Permanently deletes an AWS Firewall Manager applications list.</p>
     */
    deleteAppsList(args: DeleteAppsListCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppsListCommandOutput>;
    deleteAppsList(args: DeleteAppsListCommandInput, cb: (err: any, data?: DeleteAppsListCommandOutput) => void): void;
    deleteAppsList(args: DeleteAppsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppsListCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple
     *       Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
     */
    deleteNotificationChannel(args: DeleteNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotificationChannelCommandOutput>;
    deleteNotificationChannel(args: DeleteNotificationChannelCommandInput, cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void): void;
    deleteNotificationChannel(args: DeleteNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void): void;
    /**
     * <p>Permanently deletes an AWS Firewall Manager policy. </p>
     */
    deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
    deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    deletePolicy(args: DeletePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    /**
     * <p>Permanently deletes an AWS Firewall Manager protocols list.</p>
     */
    deleteProtocolsList(args: DeleteProtocolsListCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProtocolsListCommandOutput>;
    deleteProtocolsList(args: DeleteProtocolsListCommandInput, cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void): void;
    deleteProtocolsList(args: DeleteProtocolsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void): void;
    /**
     * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator
     *       account. To set a different account as the administrator account, you must submit an
     *         <code>AssociateAdminAccount</code> request.</p>
     */
    disassociateAdminAccount(args: DisassociateAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateAdminAccountCommandOutput>;
    disassociateAdminAccount(args: DisassociateAdminAccountCommandInput, cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void): void;
    disassociateAdminAccount(args: DisassociateAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void): void;
    /**
     * <p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager
     *       as the AWS Firewall Manager administrator.</p>
     */
    getAdminAccount(args: GetAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAdminAccountCommandOutput>;
    getAdminAccount(args: GetAdminAccountCommandInput, cb: (err: any, data?: GetAdminAccountCommandOutput) => void): void;
    getAdminAccount(args: GetAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAdminAccountCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified AWS Firewall Manager applications list.</p>
     */
    getAppsList(args: GetAppsListCommandInput, options?: __HttpHandlerOptions): Promise<GetAppsListCommandOutput>;
    getAppsList(args: GetAppsListCommandInput, cb: (err: any, data?: GetAppsListCommandOutput) => void): void;
    getAppsList(args: GetAppsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAppsListCommandOutput) => void): void;
    /**
     * <p>Returns detailed compliance information about the specified member account. Details
     *       include resources that are in and out of compliance with the specified policy. Resources are
     *       considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has
     *       not been applied to them. Resources are considered noncompliant for security group policies if
     *       they are in scope of the policy, they violate one or more of the policy rules, and remediation
     *         is disabled or not possible. Resources are considered noncompliant for Network Firewall policies
     *         if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
     *         if a subnet created by the Firewall Manager doesn't have the expected route table,
     *         and for modifications to a firewall policy that violate the Firewall Manager policy's rules. </p>
     */
    getComplianceDetail(args: GetComplianceDetailCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceDetailCommandOutput>;
    getComplianceDetail(args: GetComplianceDetailCommandInput, cb: (err: any, data?: GetComplianceDetailCommandOutput) => void): void;
    getComplianceDetail(args: GetComplianceDetailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceDetailCommandOutput) => void): void;
    /**
     * <p>Information
     *       about the Amazon Simple Notification Service (SNS) topic that is used to
     *       record AWS Firewall Manager SNS logs.</p>
     */
    getNotificationChannel(args: GetNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetNotificationChannelCommandOutput>;
    getNotificationChannel(args: GetNotificationChannelCommandInput, cb: (err: any, data?: GetNotificationChannelCommandOutput) => void): void;
    getNotificationChannel(args: GetNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNotificationChannelCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified AWS Firewall Manager policy.</p>
     */
    getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
    getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    getPolicy(args: GetPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    /**
     * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
     *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
     */
    getProtectionStatus(args: GetProtectionStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetProtectionStatusCommandOutput>;
    getProtectionStatus(args: GetProtectionStatusCommandInput, cb: (err: any, data?: GetProtectionStatusCommandOutput) => void): void;
    getProtectionStatus(args: GetProtectionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProtectionStatusCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified AWS Firewall Manager protocols list.</p>
     */
    getProtocolsList(args: GetProtocolsListCommandInput, options?: __HttpHandlerOptions): Promise<GetProtocolsListCommandOutput>;
    getProtocolsList(args: GetProtocolsListCommandInput, cb: (err: any, data?: GetProtocolsListCommandOutput) => void): void;
    getProtocolsList(args: GetProtocolsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProtocolsListCommandOutput) => void): void;
    /**
     * <p>Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
     */
    getViolationDetails(args: GetViolationDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetViolationDetailsCommandOutput>;
    getViolationDetails(args: GetViolationDetailsCommandInput, cb: (err: any, data?: GetViolationDetailsCommandOutput) => void): void;
    getViolationDetails(args: GetViolationDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetViolationDetailsCommandOutput) => void): void;
    /**
     * <p>Returns an array of <code>AppsListDataSummary</code> objects.</p>
     */
    listAppsLists(args: ListAppsListsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsListsCommandOutput>;
    listAppsLists(args: ListAppsListsCommandInput, cb: (err: any, data?: ListAppsListsCommandOutput) => void): void;
    listAppsLists(args: ListAppsListsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAppsListsCommandOutput) => void): void;
    /**
     * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
     *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
     *       by the specified policy. </p>
     */
    listComplianceStatus(args: ListComplianceStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListComplianceStatusCommandOutput>;
    listComplianceStatus(args: ListComplianceStatusCommandInput, cb: (err: any, data?: ListComplianceStatusCommandOutput) => void): void;
    listComplianceStatus(args: ListComplianceStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComplianceStatusCommandOutput) => void): void;
    /**
     * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
     *       administrator's AWS organization.</p>
     *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
     *       AWS Firewall Manager administrator.</p>
     */
    listMemberAccounts(args: ListMemberAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListMemberAccountsCommandOutput>;
    listMemberAccounts(args: ListMemberAccountsCommandInput, cb: (err: any, data?: ListMemberAccountsCommandOutput) => void): void;
    listMemberAccounts(args: ListMemberAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMemberAccountsCommandOutput) => void): void;
    /**
     * <p>Returns an array of <code>PolicySummary</code> objects.</p>
     */
    listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
    listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    listPolicies(args: ListPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    /**
     * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
     */
    listProtocolsLists(args: ListProtocolsListsCommandInput, options?: __HttpHandlerOptions): Promise<ListProtocolsListsCommandOutput>;
    listProtocolsLists(args: ListProtocolsListsCommandInput, cb: (err: any, data?: ListProtocolsListsCommandOutput) => void): void;
    listProtocolsLists(args: ListProtocolsListsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProtocolsListsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of tags for the specified AWS resource.   </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates an AWS Firewall Manager applications list.</p>
     */
    putAppsList(args: PutAppsListCommandInput, options?: __HttpHandlerOptions): Promise<PutAppsListCommandOutput>;
    putAppsList(args: PutAppsListCommandInput, cb: (err: any, data?: PutAppsListCommandOutput) => void): void;
    putAppsList(args: PutAppsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAppsListCommandOutput) => void): void;
    /**
     * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS
     *       Firewall Manager uses to record SNS logs.</p>
     *          <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager
     *       role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see
     *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>AWS Firewall Manager Developer Guide</i>.</p>
     */
    putNotificationChannel(args: PutNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<PutNotificationChannelCommandOutput>;
    putNotificationChannel(args: PutNotificationChannelCommandInput, cb: (err: any, data?: PutNotificationChannelCommandOutput) => void): void;
    putNotificationChannel(args: PutNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutNotificationChannelCommandOutput) => void): void;
    /**
     * <p>Creates an AWS Firewall Manager policy.</p>
     *          <p>Firewall Manager provides the following types of policies: </p>
     *          <ul>
     *             <li>
     *                <p>An AWS WAF policy (type WAFV2), which defines rule groups to run first in the
     *               corresponding AWS WAF web ACL and rule groups to run last in the web ACL.</p>
     *             </li>
     *             <li>
     *                <p>An AWS WAF Classic policy (type WAF), which defines a rule group. </p>
     *             </li>
     *             <li>
     *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
     *           accounts and resources.</p>
     *             </li>
     *             <li>
     *                <p>A security group policy, which manages VPC security groups across your AWS
     *           organization. </p>
     *             </li>
     *             <li>
     *                <p>An AWS Network Firewall policy, which provides firewall rules to filter network traffic in specified
     *           Amazon VPCs.</p>
     *             </li>
     *          </ul>
     *          <p>Each policy is specific to one of the types. If you want to enforce more than one
     *       policy type across accounts, create multiple policies. You can create multiple
     *       policies for each type.</p>
     *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
     *         information about subscribing to Shield Advanced, see
     *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
     */
    putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
    putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
    putPolicy(args: PutPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
    /**
     * <p>Creates an AWS Firewall Manager protocols list.</p>
     */
    putProtocolsList(args: PutProtocolsListCommandInput, options?: __HttpHandlerOptions): Promise<PutProtocolsListCommandOutput>;
    putProtocolsList(args: PutProtocolsListCommandInput, cb: (err: any, data?: PutProtocolsListCommandOutput) => void): void;
    putProtocolsList(args: PutProtocolsListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutProtocolsListCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to an AWS resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from an AWS resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
