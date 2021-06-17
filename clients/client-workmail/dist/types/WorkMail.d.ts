import { WorkMailClient } from "./WorkMailClient";
import { AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput } from "./commands/AssociateDelegateToResourceCommand";
import { AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput } from "./commands/AssociateMemberToGroupCommand";
import { CancelMailboxExportJobCommandInput, CancelMailboxExportJobCommandOutput } from "./commands/CancelMailboxExportJobCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateMobileDeviceAccessRuleCommandInput, CreateMobileDeviceAccessRuleCommandOutput } from "./commands/CreateMobileDeviceAccessRuleCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAccessControlRuleCommandInput, DeleteAccessControlRuleCommandOutput } from "./commands/DeleteAccessControlRuleCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput } from "./commands/DeleteMailboxPermissionsCommand";
import { DeleteMobileDeviceAccessRuleCommandInput, DeleteMobileDeviceAccessRuleCommandOutput } from "./commands/DeleteMobileDeviceAccessRuleCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import { DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput } from "./commands/DeleteRetentionPolicyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput } from "./commands/DeregisterFromWorkMailCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import { DescribeMailboxExportJobCommandInput, DescribeMailboxExportJobCommandOutput } from "./commands/DescribeMailboxExportJobCommand";
import { DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput } from "./commands/DescribeOrganizationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput } from "./commands/DisassociateDelegateFromResourceCommand";
import { DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput } from "./commands/DisassociateMemberFromGroupCommand";
import { GetAccessControlEffectCommandInput, GetAccessControlEffectCommandOutput } from "./commands/GetAccessControlEffectCommand";
import { GetDefaultRetentionPolicyCommandInput, GetDefaultRetentionPolicyCommandOutput } from "./commands/GetDefaultRetentionPolicyCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "./commands/GetMailboxDetailsCommand";
import { GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput } from "./commands/GetMobileDeviceAccessEffectCommand";
import { ListAccessControlRulesCommandInput, ListAccessControlRulesCommandOutput } from "./commands/ListAccessControlRulesCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListMailboxExportJobsCommandInput, ListMailboxExportJobsCommandOutput } from "./commands/ListMailboxExportJobsCommand";
import { ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput } from "./commands/ListMailboxPermissionsCommand";
import { ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput } from "./commands/ListMobileDeviceAccessRulesCommand";
import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "./commands/ListOrganizationsCommand";
import { ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput } from "./commands/ListResourceDelegatesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput } from "./commands/PutAccessControlRuleCommand";
import { PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput } from "./commands/PutMailboxPermissionsCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "./commands/PutRetentionPolicyCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import { StartMailboxExportJobCommandInput, StartMailboxExportJobCommandOutput } from "./commands/StartMailboxExportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput } from "./commands/UpdateMailboxQuotaCommand";
import { UpdateMobileDeviceAccessRuleCommandInput, UpdateMobileDeviceAccessRuleCommandOutput } from "./commands/UpdateMobileDeviceAccessRuleCommand";
import { UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput } from "./commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not
 *          only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management
 *          users and roles to help facilitate access, trust, and permission policies. By creating a
 *          role and allowing an IAM user to access the WorkMail site, the IAM user gains full
 *          administrative visibility into the entire WorkMail organization (or as set in the IAM
 *          policy). This includes, but is not limited to, the ability to create, update, and delete
 *          users, groups, and resources. This allows developers to perform the scenarios listed above,
 *          as well as give users the ability to grant access on a selective basis using the IAM
 *          model.</p>
 */
export declare class WorkMail extends WorkMailClient {
    /**
     * <p>Adds a member (user or group) to the resource's set of delegates.</p>
     */
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDelegateToResourceCommandOutput>;
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void): void;
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void): void;
    /**
     * <p>Adds a member (user or group) to the group's set.</p>
     */
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateMemberToGroupCommandOutput>;
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void): void;
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void): void;
    /**
     * <p>Cancels a mailbox export job.</p>
     *          <note>
     *             <p>If the mailbox export job is near completion, it might not be possible to cancel
     *             it.</p>
     *          </note>
     */
    cancelMailboxExportJob(args: CancelMailboxExportJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelMailboxExportJobCommandOutput>;
    cancelMailboxExportJob(args: CancelMailboxExportJobCommandInput, cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void): void;
    cancelMailboxExportJob(args: CancelMailboxExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void): void;
    /**
     * <p>Adds an alias to the set of a given member (user or group) of Amazon WorkMail.</p>
     */
    createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
    createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    createAlias(args: CreateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    /**
     * <p>Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new mobile device access rule for the specified Amazon WorkMail organization.</p>
     */
    createMobileDeviceAccessRule(args: CreateMobileDeviceAccessRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateMobileDeviceAccessRuleCommandOutput>;
    createMobileDeviceAccessRule(args: CreateMobileDeviceAccessRuleCommandInput, cb: (err: any, data?: CreateMobileDeviceAccessRuleCommandOutput) => void): void;
    createMobileDeviceAccessRule(args: CreateMobileDeviceAccessRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMobileDeviceAccessRuleCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
     *          <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
     *          <p>Optionally, you can use a customer managed master key from AWS Key Management Service
     *          (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a
     *          default AWS managed master key for you.</p>
     */
    createOrganization(args: CreateOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrganizationCommandOutput>;
    createOrganization(args: CreateOrganizationCommandInput, cb: (err: any, data?: CreateOrganizationCommandOutput) => void): void;
    createOrganization(args: CreateOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOrganizationCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon WorkMail resource. </p>
     */
    createResource(args: CreateResourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceCommandOutput>;
    createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
    createResource(args: CreateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
    /**
     * <p>Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Deletes an access control rule for the specified WorkMail organization.</p>
     */
    deleteAccessControlRule(args: DeleteAccessControlRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessControlRuleCommandOutput>;
    deleteAccessControlRule(args: DeleteAccessControlRuleCommandInput, cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void): void;
    deleteAccessControlRule(args: DeleteAccessControlRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void): void;
    /**
     * <p>Remove one or more specified aliases from a set of aliases for a given
     *          user.</p>
     */
    deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
    deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    deleteAlias(args: DeleteAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    /**
     * <p>Deletes a group from Amazon WorkMail.</p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Deletes permissions granted to a member (user or group).</p>
     */
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMailboxPermissionsCommandOutput>;
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void): void;
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Deletes a mobile device access rule for the specified Amazon WorkMail organization.</p>
     */
    deleteMobileDeviceAccessRule(args: DeleteMobileDeviceAccessRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMobileDeviceAccessRuleCommandOutput>;
    deleteMobileDeviceAccessRule(args: DeleteMobileDeviceAccessRuleCommandInput, cb: (err: any, data?: DeleteMobileDeviceAccessRuleCommandOutput) => void): void;
    deleteMobileDeviceAccessRule(args: DeleteMobileDeviceAccessRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMobileDeviceAccessRuleCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
     */
    deleteOrganization(args: DeleteOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOrganizationCommandOutput>;
    deleteOrganization(args: DeleteOrganizationCommandInput, cb: (err: any, data?: DeleteOrganizationCommandOutput) => void): void;
    deleteOrganization(args: DeleteOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOrganizationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified resource. </p>
     */
    deleteResource(args: DeleteResourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceCommandOutput>;
    deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
    deleteResource(args: DeleteResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
    /**
     * <p>Deletes the specified retention policy from the specified organization.</p>
     */
    deleteRetentionPolicy(args: DeleteRetentionPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRetentionPolicyCommandOutput>;
    deleteRetentionPolicy(args: DeleteRetentionPolicyCommandInput, cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void): void;
    deleteRetentionPolicy(args: DeleteRetentionPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a
     *          user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a>
     *          action to confirm the user state.</p>
     *          <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for
     *          30 days before they are permanently removed.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
     *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
     *          before they are permanently removed. The functionality in the console is
     *             <i>Disable</i>.</p>
     */
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterFromWorkMailCommandOutput>;
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void): void;
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void): void;
    /**
     * <p>Returns the data available for the group.</p>
     */
    describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
    describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    describeGroup(args: DescribeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    /**
     * <p>Describes the current status of a mailbox export job.</p>
     */
    describeMailboxExportJob(args: DescribeMailboxExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMailboxExportJobCommandOutput>;
    describeMailboxExportJob(args: DescribeMailboxExportJobCommandInput, cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void): void;
    describeMailboxExportJob(args: DescribeMailboxExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void): void;
    /**
     * <p>Provides more information regarding a given organization based on its
     *          identifier.</p>
     */
    describeOrganization(args: DescribeOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationCommandOutput>;
    describeOrganization(args: DescribeOrganizationCommandInput, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    describeOrganization(args: DescribeOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the data available for the resource.</p>
     */
    describeResource(args: DescribeResourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceCommandOutput>;
    describeResource(args: DescribeResourceCommandInput, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    describeResource(args: DescribeResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    /**
     * <p>Provides information regarding the user.</p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Removes a member from the resource's set of delegates.</p>
     */
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDelegateFromResourceCommandOutput>;
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void): void;
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void): void;
    /**
     * <p>Removes a member from a group.</p>
     */
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMemberFromGroupCommandOutput>;
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void): void;
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void): void;
    /**
     * <p>Gets the effects of an organization's access control rules as they apply to a
     *          specified IPv4 address, access protocol action, or user ID. </p>
     */
    getAccessControlEffect(args: GetAccessControlEffectCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessControlEffectCommandOutput>;
    getAccessControlEffect(args: GetAccessControlEffectCommandInput, cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void): void;
    getAccessControlEffect(args: GetAccessControlEffectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void): void;
    /**
     * <p>Gets the default retention policy details for the specified organization.</p>
     */
    getDefaultRetentionPolicy(args: GetDefaultRetentionPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetDefaultRetentionPolicyCommandOutput>;
    getDefaultRetentionPolicy(args: GetDefaultRetentionPolicyCommandInput, cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void): void;
    getDefaultRetentionPolicy(args: GetDefaultRetentionPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void): void;
    /**
     * <p>Requests a user's mailbox details for a specified organization and user.</p>
     */
    getMailboxDetails(args: GetMailboxDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetMailboxDetailsCommandOutput>;
    getMailboxDetails(args: GetMailboxDetailsCommandInput, cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void): void;
    getMailboxDetails(args: GetMailboxDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void): void;
    /**
     * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
     *          rules for the Amazon WorkMail organization for a particular user's attributes.</p>
     */
    getMobileDeviceAccessEffect(args: GetMobileDeviceAccessEffectCommandInput, options?: __HttpHandlerOptions): Promise<GetMobileDeviceAccessEffectCommandOutput>;
    getMobileDeviceAccessEffect(args: GetMobileDeviceAccessEffectCommandInput, cb: (err: any, data?: GetMobileDeviceAccessEffectCommandOutput) => void): void;
    getMobileDeviceAccessEffect(args: GetMobileDeviceAccessEffectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMobileDeviceAccessEffectCommandOutput) => void): void;
    /**
     * <p>Lists the access control rules for the specified organization.</p>
     */
    listAccessControlRules(args: ListAccessControlRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessControlRulesCommandOutput>;
    listAccessControlRules(args: ListAccessControlRulesCommandInput, cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void): void;
    listAccessControlRules(args: ListAccessControlRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void): void;
    /**
     * <p>Creates a paginated call to list the aliases associated with a given
     *          entity.</p>
     */
    listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
    listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    listAliases(args: ListAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    /**
     * <p>Returns an overview of the members of a group. Users and groups can be members of a
     *          group.</p>
     */
    listGroupMembers(args: ListGroupMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupMembersCommandOutput>;
    listGroupMembers(args: ListGroupMembersCommandInput, cb: (err: any, data?: ListGroupMembersCommandOutput) => void): void;
    listGroupMembers(args: ListGroupMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupMembersCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's groups.</p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the mailbox export jobs started for the specified organization within the last
     *          seven days.</p>
     */
    listMailboxExportJobs(args: ListMailboxExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListMailboxExportJobsCommandOutput>;
    listMailboxExportJobs(args: ListMailboxExportJobsCommandInput, cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void): void;
    listMailboxExportJobs(args: ListMailboxExportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void): void;
    /**
     * <p>Lists the mailbox permissions associated with a user, group, or resource
     *          mailbox.</p>
     */
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListMailboxPermissionsCommandOutput>;
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void): void;
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Lists the mobile device access rules for the specified Amazon WorkMail organization.</p>
     */
    listMobileDeviceAccessRules(args: ListMobileDeviceAccessRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListMobileDeviceAccessRulesCommandOutput>;
    listMobileDeviceAccessRules(args: ListMobileDeviceAccessRulesCommandInput, cb: (err: any, data?: ListMobileDeviceAccessRulesCommandOutput) => void): void;
    listMobileDeviceAccessRules(args: ListMobileDeviceAccessRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMobileDeviceAccessRulesCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the customer's organizations.</p>
     */
    listOrganizations(args: ListOrganizationsCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationsCommandOutput>;
    listOrganizations(args: ListOrganizationsCommandInput, cb: (err: any, data?: ListOrganizationsCommandOutput) => void): void;
    listOrganizations(args: ListOrganizationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationsCommandOutput) => void): void;
    /**
     * <p>Lists the delegates associated with a resource. Users and groups can be resource
     *          delegates and answer requests on behalf of the resource.</p>
     */
    listResourceDelegates(args: ListResourceDelegatesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceDelegatesCommandOutput>;
    listResourceDelegates(args: ListResourceDelegatesCommandInput, cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void): void;
    listResourceDelegates(args: ListResourceDelegatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's resources.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>Lists the tags applied to an Amazon WorkMail organization resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's users.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Adds a new access control rule for the specified organization. The rule allows or
     *          denies access to the organization for the specified IPv4 addresses, access protocol
     *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
     *          the older rule.</p>
     */
    putAccessControlRule(args: PutAccessControlRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutAccessControlRuleCommandOutput>;
    putAccessControlRule(args: PutAccessControlRuleCommandInput, cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void): void;
    putAccessControlRule(args: PutAccessControlRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void): void;
    /**
     * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
     *          permissions.</p>
     */
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<PutMailboxPermissionsCommandOutput>;
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void): void;
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Puts a retention policy to the specified organization.</p>
     */
    putRetentionPolicy(args: PutRetentionPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutRetentionPolicyCommandOutput>;
    putRetentionPolicy(args: PutRetentionPolicyCommandInput, cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void): void;
    putRetentionPolicy(args: PutRetentionPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void): void;
    /**
     * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
     *          associating a mailbox and calendaring capabilities. It performs no change if the user,
     *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
     *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
     *          functionality for this operation is <i>Enable</i>. </p>
     *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
     *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
     */
    registerToWorkMail(args: RegisterToWorkMailCommandInput, options?: __HttpHandlerOptions): Promise<RegisterToWorkMailCommandOutput>;
    registerToWorkMail(args: RegisterToWorkMailCommandInput, cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void): void;
    registerToWorkMail(args: RegisterToWorkMailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void): void;
    /**
     * <p>Allows the administrator to reset the password for a user.</p>
     */
    resetPassword(args: ResetPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ResetPasswordCommandOutput>;
    resetPassword(args: ResetPasswordCommandInput, cb: (err: any, data?: ResetPasswordCommandOutput) => void): void;
    resetPassword(args: ResetPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetPasswordCommandOutput) => void): void;
    /**
     * <p>Starts a mailbox export job to export MIME-format email messages and calendar items
     *          from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3)
     *          bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in
     *          the <i>Amazon WorkMail Administrator Guide</i>.</p>
     */
    startMailboxExportJob(args: StartMailboxExportJobCommandInput, options?: __HttpHandlerOptions): Promise<StartMailboxExportJobCommandOutput>;
    startMailboxExportJob(args: StartMailboxExportJobCommandInput, cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void): void;
    startMailboxExportJob(args: StartMailboxExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void): void;
    /**
     * <p>Applies the specified tags to the specified Amazon WorkMail organization
     *          resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Untags the specified tags from the specified Amazon WorkMail organization
     *          resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a user's current mailbox quota for a specified organization and
     *          user.</p>
     */
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMailboxQuotaCommandOutput>;
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void): void;
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void): void;
    /**
     * <p>Updates a mobile device access rule for the specified Amazon WorkMail organization.</p>
     */
    updateMobileDeviceAccessRule(args: UpdateMobileDeviceAccessRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMobileDeviceAccessRuleCommandOutput>;
    updateMobileDeviceAccessRule(args: UpdateMobileDeviceAccessRuleCommandInput, cb: (err: any, data?: UpdateMobileDeviceAccessRuleCommandOutput) => void): void;
    updateMobileDeviceAccessRule(args: UpdateMobileDeviceAccessRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMobileDeviceAccessRuleCommandOutput) => void): void;
    /**
     * <p>Updates the primary email for a user, group, or resource. The current email is moved
     *          into the list of aliases (or swapped between an existing alias and the current primary
     *          email), and the email provided in the input is promoted as the primary.</p>
     */
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePrimaryEmailAddressCommandOutput>;
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void): void;
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void): void;
    /**
     * <p>Updates data for the resource. To have the latest information, it must be preceded by
     *          a <a>DescribeResource</a> call. The dataset in the request should be the one
     *          expected when performing another <code>DescribeResource</code> call.</p>
     */
    updateResource(args: UpdateResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceCommandOutput>;
    updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
    updateResource(args: UpdateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
}
