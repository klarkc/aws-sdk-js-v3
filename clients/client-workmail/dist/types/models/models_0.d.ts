import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AccessControlRuleEffect {
    ALLOW = "ALLOW",
    DENY = "DENY"
}
/**
 * <p>A rule that controls access to an Amazon WorkMail organization.</p>
 */
export interface AccessControlRule {
    /**
     * <p>The rule name.</p>
     */
    Name?: string;
    /**
     * <p>The rule effect.</p>
     */
    Effect?: AccessControlRuleEffect | string;
    /**
     * <p>The rule description.</p>
     */
    Description?: string;
    /**
     * <p>IPv4 CIDR ranges to include in the rule.</p>
     */
    IpRanges?: string[];
    /**
     * <p>IPv4 CIDR ranges to exclude from the rule.</p>
     */
    NotIpRanges?: string[];
    /**
     * <p>Access protocol actions to include in the rule. Valid values include
     *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
     *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
     */
    Actions?: string[];
    /**
     * <p>Access protocol actions to exclude from the rule. Valid values include
     *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
     *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
     */
    NotActions?: string[];
    /**
     * <p>User IDs to include in the rule.</p>
     */
    UserIds?: string[];
    /**
     * <p>User IDs to exclude from the rule.</p>
     */
    NotUserIds?: string[];
    /**
     * <p>The date that the rule was created.</p>
     */
    DateCreated?: Date;
    /**
     * <p>The date that the rule was modified.</p>
     */
    DateModified?: Date;
}
export declare namespace AccessControlRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessControlRule) => any;
}
export interface AssociateDelegateToResourceRequest {
    /**
     * <p>The organization under which the resource exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The resource for which members (users or groups) are associated.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The member (user or group) to associate to the resource.</p>
     */
    EntityId: string | undefined;
}
export declare namespace AssociateDelegateToResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDelegateToResourceRequest) => any;
}
export interface AssociateDelegateToResourceResponse {
}
export declare namespace AssociateDelegateToResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDelegateToResourceResponse) => any;
}
/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
    name: "EntityNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace EntityNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityNotFoundException) => any;
}
/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 */
export interface EntityStateException extends __SmithyException, $MetadataBearer {
    name: "EntityStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace EntityStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityStateException) => any;
}
/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 */
export interface OrganizationNotFoundException extends __SmithyException, $MetadataBearer {
    name: "OrganizationNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace OrganizationNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationNotFoundException) => any;
}
/**
 * <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 */
export interface OrganizationStateException extends __SmithyException, $MetadataBearer {
    name: "OrganizationStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace OrganizationStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationStateException) => any;
}
export interface AssociateMemberToGroupRequest {
    /**
     * <p>The organization under which the group exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The group to which the member (user or group) is associated.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>The member (user or group) to associate to the group.</p>
     */
    MemberId: string | undefined;
}
export declare namespace AssociateMemberToGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateMemberToGroupRequest) => any;
}
export interface AssociateMemberToGroupResponse {
}
export declare namespace AssociateMemberToGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateMemberToGroupResponse) => any;
}
/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 */
export interface DirectoryServiceAuthenticationFailedException extends __SmithyException, $MetadataBearer {
    name: "DirectoryServiceAuthenticationFailedException";
    $fault: "client";
    Message?: string;
}
export declare namespace DirectoryServiceAuthenticationFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryServiceAuthenticationFailedException) => any;
}
/**
 * <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 */
export interface DirectoryUnavailableException extends __SmithyException, $MetadataBearer {
    name: "DirectoryUnavailableException";
    $fault: "client";
    Message?: string;
}
export declare namespace DirectoryUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryUnavailableException) => any;
}
/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedOperationException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnsupportedOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedOperationException) => any;
}
/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies
 *          from the resource.</p>
 */
export interface BookingOptions {
    /**
     * <p>The resource's ability to automatically reply to requests. If disabled, delegates
     *          must be associated to the resource.</p>
     */
    AutoAcceptRequests?: boolean;
    /**
     * <p>The resource's ability to automatically decline any recurring requests.</p>
     */
    AutoDeclineRecurringRequests?: boolean;
    /**
     * <p>The resource's ability to automatically decline any conflicting requests.</p>
     */
    AutoDeclineConflictingRequests?: boolean;
}
export declare namespace BookingOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BookingOptions) => any;
}
export interface CancelMailboxExportJobRequest {
    /**
     * <p>The idempotency token for the client request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The job ID.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace CancelMailboxExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelMailboxExportJobRequest) => any;
}
export interface CancelMailboxExportJobResponse {
}
export declare namespace CancelMailboxExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelMailboxExportJobResponse) => any;
}
export interface CreateAliasRequest {
    /**
     * <p>The organization under which the member (user or group) exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The member (user or group) to which this alias is added.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The alias to add to the member set.</p>
     */
    Alias: string | undefined;
}
export declare namespace CreateAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAliasRequest) => any;
}
export interface CreateAliasResponse {
}
export declare namespace CreateAliasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAliasResponse) => any;
}
/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 */
export interface EmailAddressInUseException extends __SmithyException, $MetadataBearer {
    name: "EmailAddressInUseException";
    $fault: "client";
    Message?: string;
}
export declare namespace EmailAddressInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EmailAddressInUseException) => any;
}
/**
 * <p>The request exceeds the limit of the resource.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined
 *          in the organization.</p>
 */
export interface MailDomainNotFoundException extends __SmithyException, $MetadataBearer {
    name: "MailDomainNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace MailDomainNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MailDomainNotFoundException) => any;
}
/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 */
export interface MailDomainStateException extends __SmithyException, $MetadataBearer {
    name: "MailDomainStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace MailDomainStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MailDomainStateException) => any;
}
export interface CreateGroupRequest {
    /**
     * <p>The organization under which the group is to be created.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The name of the group.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupRequest) => any;
}
export interface CreateGroupResponse {
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId?: string;
}
export declare namespace CreateGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupResponse) => any;
}
/**
 * <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
 */
export interface NameAvailabilityException extends __SmithyException, $MetadataBearer {
    name: "NameAvailabilityException";
    $fault: "client";
    Message?: string;
}
export declare namespace NameAvailabilityException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NameAvailabilityException) => any;
}
/**
 * <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
 */
export interface ReservedNameException extends __SmithyException, $MetadataBearer {
    name: "ReservedNameException";
    $fault: "client";
    Message?: string;
}
export declare namespace ReservedNameException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReservedNameException) => any;
}
export declare enum MobileDeviceAccessRuleEffect {
    ALLOW = "ALLOW",
    DENY = "DENY"
}
export interface CreateMobileDeviceAccessRuleRequest {
    /**
     * <p>The Amazon WorkMail organization under which the rule will be created.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The idempotency token for the client request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The rule name.</p>
     */
    Name: string | undefined;
    /**
     * <p>The rule description.</p>
     */
    Description?: string;
    /**
     * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
     */
    Effect: MobileDeviceAccessRuleEffect | string | undefined;
    /**
     * <p>Device types that the rule will match.</p>
     */
    DeviceTypes?: string[];
    /**
     * <p>Device types that the rule <b>will not</b> match. All other device types will match.</p>
     */
    NotDeviceTypes?: string[];
    /**
     * <p>Device models that the rule will match.</p>
     */
    DeviceModels?: string[];
    /**
     * <p>Device models that the rule <b>will not</b> match. All other device models will match.</p>
     */
    NotDeviceModels?: string[];
    /**
     * <p>Device operating systems that the rule will match.</p>
     */
    DeviceOperatingSystems?: string[];
    /**
     * <p>Device operating systems that the rule <b>will not</b> match. All other device operating systems will match.</p>
     */
    NotDeviceOperatingSystems?: string[];
    /**
     * <p>Device user agents that the rule will match.</p>
     */
    DeviceUserAgents?: string[];
    /**
     * <p>Device user agents that the rule <b>will not</b> match. All other device user agents will match.</p>
     */
    NotDeviceUserAgents?: string[];
}
export declare namespace CreateMobileDeviceAccessRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMobileDeviceAccessRuleRequest) => any;
}
export interface CreateMobileDeviceAccessRuleResponse {
    /**
     * <p>The identifier for the newly created mobile device access rule.</p>
     */
    MobileDeviceAccessRuleId?: string;
}
export declare namespace CreateMobileDeviceAccessRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMobileDeviceAccessRuleResponse) => any;
}
/**
 * <p>The domain to associate with an Amazon WorkMail organization.</p>
 *          <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
 */
export interface Domain {
    /**
     * <p>The fully qualified domain name.</p>
     */
    DomainName?: string;
    /**
     * <p>The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.</p>
     */
    HostedZoneId?: string;
}
export declare namespace Domain {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Domain) => any;
}
export interface CreateOrganizationRequest {
    /**
     * <p>The AWS Directory Service directory ID.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The organization alias.</p>
     */
    Alias: string | undefined;
    /**
     * <p>The idempotency token associated with the request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The email domains to associate with the organization.</p>
     */
    Domains?: Domain[];
    /**
     * <p>The Amazon Resource Name (ARN) of a customer managed master key from AWS
     *          KMS.</p>
     */
    KmsKeyArn?: string;
    /**
     * <p>When <code>true</code>, allows organization interoperability between Amazon WorkMail and Microsoft Exchange. Can only be set to <code>true</code> if an AD Connector directory ID is included in the request.</p>
     */
    EnableInteroperability?: boolean;
}
export declare namespace CreateOrganizationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOrganizationRequest) => any;
}
export interface CreateOrganizationResponse {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId?: string;
}
export declare namespace CreateOrganizationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOrganizationResponse) => any;
}
/**
 * <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
 */
export interface DirectoryInUseException extends __SmithyException, $MetadataBearer {
    name: "DirectoryInUseException";
    $fault: "client";
    Message?: string;
}
export declare namespace DirectoryInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryInUseException) => any;
}
export declare enum ResourceType {
    EQUIPMENT = "EQUIPMENT",
    ROOM = "ROOM"
}
export interface CreateResourceRequest {
    /**
     * <p>The identifier associated with the organization for which the resource is
     *          created.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The name of the new resource.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of the new resource. The available types are <code>equipment</code> and
     *             <code>room</code>.</p>
     */
    Type: ResourceType | string | undefined;
}
export declare namespace CreateResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceRequest) => any;
}
export interface CreateResourceResponse {
    /**
     * <p>The identifier of the new resource.</p>
     */
    ResourceId?: string;
}
export declare namespace CreateResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceResponse) => any;
}
export interface CreateUserRequest {
    /**
     * <p>The identifier of the organization for which the user is created.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.</p>
     */
    Name: string | undefined;
    /**
     * <p>The display name for the new user.</p>
     */
    DisplayName: string | undefined;
    /**
     * <p>The password for the new user.</p>
     */
    Password: string | undefined;
}
export declare namespace CreateUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserRequest) => any;
}
export interface CreateUserResponse {
    /**
     * <p>The identifier for the new user.</p>
     */
    UserId?: string;
}
export declare namespace CreateUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserResponse) => any;
}
/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
    name: "InvalidPasswordException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidPasswordException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPasswordException) => any;
}
export declare enum MemberType {
    GROUP = "GROUP",
    USER = "USER"
}
/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute
 *          enumeration.</p>
 */
export interface Delegate {
    /**
     * <p>The identifier for the user or group associated as the resource's delegate.</p>
     */
    Id: string | undefined;
    /**
     * <p>The type of the delegate: user or group.</p>
     */
    Type: MemberType | string | undefined;
}
export declare namespace Delegate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Delegate) => any;
}
export interface DeleteAccessControlRuleRequest {
    /**
     * <p>The identifier for the organization.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The name of the access control rule.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAccessControlRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessControlRuleRequest) => any;
}
export interface DeleteAccessControlRuleResponse {
}
export declare namespace DeleteAccessControlRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessControlRuleResponse) => any;
}
export interface DeleteAliasRequest {
    /**
     * <p>The identifier for the organization under which the user exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the member (user or group) from which to have the aliases
     *          removed.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
     *          list are collapsed into single entries (the list is transformed into a set).</p>
     */
    Alias: string | undefined;
}
export declare namespace DeleteAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAliasRequest) => any;
}
export interface DeleteAliasResponse {
}
export declare namespace DeleteAliasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAliasResponse) => any;
}
export interface DeleteGroupRequest {
    /**
     * <p>The organization that contains the group.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the group to be deleted.</p>
     */
    GroupId: string | undefined;
}
export declare namespace DeleteGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGroupRequest) => any;
}
export interface DeleteGroupResponse {
}
export declare namespace DeleteGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGroupResponse) => any;
}
export interface DeleteMailboxPermissionsRequest {
    /**
     * <p>The identifier of the organization under which the member (user or group)
     *          exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the member (user or group) that owns the mailbox.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The identifier of the member (user or group) for which to delete granted
     *          permissions.</p>
     */
    GranteeId: string | undefined;
}
export declare namespace DeleteMailboxPermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMailboxPermissionsRequest) => any;
}
export interface DeleteMailboxPermissionsResponse {
}
export declare namespace DeleteMailboxPermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMailboxPermissionsResponse) => any;
}
export interface DeleteMobileDeviceAccessRuleRequest {
    /**
     * <p>The Amazon WorkMail organization under which the rule will be deleted.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the rule to be deleted.</p>
     */
    MobileDeviceAccessRuleId: string | undefined;
}
export declare namespace DeleteMobileDeviceAccessRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMobileDeviceAccessRuleRequest) => any;
}
export interface DeleteMobileDeviceAccessRuleResponse {
}
export declare namespace DeleteMobileDeviceAccessRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMobileDeviceAccessRuleResponse) => any;
}
export interface DeleteOrganizationRequest {
    /**
     * <p>The idempotency token associated with the request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>If true, deletes the AWS Directory Service directory associated with the organization.</p>
     */
    DeleteDirectory: boolean | undefined;
}
export declare namespace DeleteOrganizationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOrganizationRequest) => any;
}
export interface DeleteOrganizationResponse {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId?: string;
    /**
     * <p>The state of the organization.</p>
     */
    State?: string;
}
export declare namespace DeleteOrganizationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOrganizationResponse) => any;
}
export interface DeleteResourceRequest {
    /**
     * <p>The identifier associated with the organization from which the resource is
     *          deleted.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the resource to be deleted.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace DeleteResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceRequest) => any;
}
export interface DeleteResourceResponse {
}
export declare namespace DeleteResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceResponse) => any;
}
export interface DeleteRetentionPolicyRequest {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The retention policy ID.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteRetentionPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRetentionPolicyRequest) => any;
}
export interface DeleteRetentionPolicyResponse {
}
export declare namespace DeleteRetentionPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRetentionPolicyResponse) => any;
}
export interface DeleteUserRequest {
    /**
     * <p>The organization that contains the user to be deleted.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the user to be deleted.</p>
     */
    UserId: string | undefined;
}
export declare namespace DeleteUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserRequest) => any;
}
export interface DeleteUserResponse {
}
export declare namespace DeleteUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserResponse) => any;
}
export interface DeregisterFromWorkMailRequest {
    /**
     * <p>The identifier for the organization under which the Amazon WorkMail entity exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the member (user or group) to be updated.</p>
     */
    EntityId: string | undefined;
}
export declare namespace DeregisterFromWorkMailRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterFromWorkMailRequest) => any;
}
export interface DeregisterFromWorkMailResponse {
}
export declare namespace DeregisterFromWorkMailResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterFromWorkMailResponse) => any;
}
export interface DescribeGroupRequest {
    /**
     * <p>The identifier for the organization under which the group exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the group to be described.</p>
     */
    GroupId: string | undefined;
}
export declare namespace DescribeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGroupRequest) => any;
}
export declare enum EntityState {
    DELETED = "DELETED",
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export interface DescribeGroupResponse {
    /**
     * <p>The identifier of the described group.</p>
     */
    GroupId?: string;
    /**
     * <p>The name of the described group.</p>
     */
    Name?: string;
    /**
     * <p>The email of the described group.</p>
     */
    Email?: string;
    /**
     * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
     *          never registered to WorkMail).</p>
     */
    State?: EntityState | string;
    /**
     * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
     *          format.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
     *          format.</p>
     */
    DisabledDate?: Date;
}
export declare namespace DescribeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGroupResponse) => any;
}
export interface DescribeMailboxExportJobRequest {
    /**
     * <p>The mailbox export job ID.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace DescribeMailboxExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMailboxExportJobRequest) => any;
}
export declare enum MailboxExportJobState {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    RUNNING = "RUNNING"
}
export interface DescribeMailboxExportJobResponse {
    /**
     * <p>The identifier of the user or resource associated with the mailbox.</p>
     */
    EntityId?: string;
    /**
     * <p>The mailbox export job description.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple
     *          Storage Service (Amazon S3) bucket.</p>
     */
    RoleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
     *          key that encrypts the exported mailbox content.</p>
     */
    KmsKeyArn?: string;
    /**
     * <p>The name of the S3 bucket.</p>
     */
    S3BucketName?: string;
    /**
     * <p>The S3 bucket prefix.</p>
     */
    S3Prefix?: string;
    /**
     * <p>The path to the S3 bucket and file that the mailbox export job is exporting
     *          to.</p>
     */
    S3Path?: string;
    /**
     * <p>The estimated progress of the mailbox export job, in percentage points.</p>
     */
    EstimatedProgress?: number;
    /**
     * <p>The state of the mailbox export job.</p>
     */
    State?: MailboxExportJobState | string;
    /**
     * <p>Error information for failed mailbox export jobs.</p>
     */
    ErrorInfo?: string;
    /**
     * <p>The mailbox export job start timestamp.</p>
     */
    StartTime?: Date;
    /**
     * <p>The mailbox export job end timestamp.</p>
     */
    EndTime?: Date;
}
export declare namespace DescribeMailboxExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMailboxExportJobResponse) => any;
}
export interface DescribeOrganizationRequest {
    /**
     * <p>The identifier for the organization to be described.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace DescribeOrganizationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationRequest) => any;
}
export interface DescribeOrganizationResponse {
    /**
     * <p>The identifier of an organization.</p>
     */
    OrganizationId?: string;
    /**
     * <p>The alias for an organization.</p>
     */
    Alias?: string;
    /**
     * <p>The state of an organization.</p>
     */
    State?: string;
    /**
     * <p>The identifier for the directory associated with an Amazon WorkMail organization.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The type of directory associated with the WorkMail organization.</p>
     */
    DirectoryType?: string;
    /**
     * <p>The default mail domain associated with the organization.</p>
     */
    DefaultMailDomain?: string;
    /**
     * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
     *          time format.</p>
     */
    CompletedDate?: Date;
    /**
     * <p>(Optional) The error message indicating if unexpected behavior was encountered with
     *          regards to the organization.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the organization.</p>
     */
    ARN?: string;
}
export declare namespace DescribeOrganizationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationResponse) => any;
}
export interface DescribeResourceRequest {
    /**
     * <p>The identifier associated with the organization for which the resource is
     *          described.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the resource to be described.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace DescribeResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeResourceRequest) => any;
}
export interface DescribeResourceResponse {
    /**
     * <p>The identifier of the described resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>The email of the described resource.</p>
     */
    Email?: string;
    /**
     * <p>The name of the described resource.</p>
     */
    Name?: string;
    /**
     * <p>The type of the described resource.</p>
     */
    Type?: ResourceType | string;
    /**
     * <p>The booking options for the described resource.</p>
     */
    BookingOptions?: BookingOptions;
    /**
     * <p>The state of the resource: enabled (registered to Amazon WorkMail), disabled (deregistered
     *          or never registered to WorkMail), or deleted.</p>
     */
    State?: EntityState | string;
    /**
     * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
     *          format.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
     *          format.</p>
     */
    DisabledDate?: Date;
}
export declare namespace DescribeResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeResourceResponse) => any;
}
export interface DescribeUserRequest {
    /**
     * <p>The identifier for the organization under which the user exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the user to be described.</p>
     */
    UserId: string | undefined;
}
export declare namespace DescribeUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserRequest) => any;
}
export declare enum UserRole {
    RESOURCE = "RESOURCE",
    SYSTEM_USER = "SYSTEM_USER",
    USER = "USER"
}
export interface DescribeUserResponse {
    /**
     * <p>The identifier for the described user.</p>
     */
    UserId?: string;
    /**
     * <p>The name for the user.</p>
     */
    Name?: string;
    /**
     * <p>The email of the user.</p>
     */
    Email?: string;
    /**
     * <p>The display name of the user.</p>
     */
    DisplayName?: string;
    /**
     * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
     *          never registered to WorkMail).</p>
     */
    State?: EntityState | string;
    /**
     * <p>In certain cases, other entities are modeled as users. If interoperability is
     *          enabled, resources are imported into Amazon WorkMail as users. Because different WorkMail
     *          organizations rely on different directory types, administrators can distinguish between an
     *          unregistered user (account is disabled and has a user role) and the directory
     *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
     */
    UserRole?: UserRole | string;
    /**
     * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch
     *          time format.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch
     *          time format.</p>
     */
    DisabledDate?: Date;
}
export declare namespace DescribeUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserResponse) => any;
}
export interface DisassociateDelegateFromResourceRequest {
    /**
     * <p>The identifier for the organization under which the resource exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the resource from which delegates' set members are removed.
     *       </p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The identifier for the member (user, group) to be removed from the resource's
     *          delegates.</p>
     */
    EntityId: string | undefined;
}
export declare namespace DisassociateDelegateFromResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDelegateFromResourceRequest) => any;
}
export interface DisassociateDelegateFromResourceResponse {
}
export declare namespace DisassociateDelegateFromResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDelegateFromResourceResponse) => any;
}
export interface DisassociateMemberFromGroupRequest {
    /**
     * <p>The identifier for the organization under which the group exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the group from which members are removed.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>The identifier for the member to be removed to the group.</p>
     */
    MemberId: string | undefined;
}
export declare namespace DisassociateMemberFromGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMemberFromGroupRequest) => any;
}
export interface DisassociateMemberFromGroupResponse {
}
export declare namespace DisassociateMemberFromGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMemberFromGroupResponse) => any;
}
/**
 * <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
 */
export interface EntityAlreadyRegisteredException extends __SmithyException, $MetadataBearer {
    name: "EntityAlreadyRegisteredException";
    $fault: "client";
    Message?: string;
}
export declare namespace EntityAlreadyRegisteredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityAlreadyRegisteredException) => any;
}
export declare enum RetentionAction {
    DELETE = "DELETE",
    NONE = "NONE",
    PERMANENTLY_DELETE = "PERMANENTLY_DELETE"
}
export declare enum FolderName {
    DELETED_ITEMS = "DELETED_ITEMS",
    DRAFTS = "DRAFTS",
    INBOX = "INBOX",
    JUNK_EMAIL = "JUNK_EMAIL",
    SENT_ITEMS = "SENT_ITEMS"
}
/**
 * <p>The configuration applied to an organization's folders by its retention
 *          policy.</p>
 */
export interface FolderConfiguration {
    /**
     * <p>The folder name.</p>
     */
    Name: FolderName | string | undefined;
    /**
     * <p>The action to take on the folder contents at the end of the folder configuration
     *          period.</p>
     */
    Action: RetentionAction | string | undefined;
    /**
     * <p>The period of time at which the folder configuration action is applied.</p>
     */
    Period?: number;
}
export declare namespace FolderConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FolderConfiguration) => any;
}
export interface GetAccessControlEffectRequest {
    /**
     * <p>The identifier for the organization.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The IPv4 address.</p>
     */
    IpAddress: string | undefined;
    /**
     * <p>The access protocol action. Valid values include <code>ActiveSync</code>,
     *             <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>,
     *             <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
     */
    Action: string | undefined;
    /**
     * <p>The user ID.</p>
     */
    UserId: string | undefined;
}
export declare namespace GetAccessControlEffectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessControlEffectRequest) => any;
}
export interface GetAccessControlEffectResponse {
    /**
     * <p>The rule effect.</p>
     */
    Effect?: AccessControlRuleEffect | string;
    /**
     * <p>The rules that match the given parameters, resulting in an effect.</p>
     */
    MatchedRules?: string[];
}
export declare namespace GetAccessControlEffectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessControlEffectResponse) => any;
}
export interface GetDefaultRetentionPolicyRequest {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace GetDefaultRetentionPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDefaultRetentionPolicyRequest) => any;
}
export interface GetDefaultRetentionPolicyResponse {
    /**
     * <p>The retention policy ID.</p>
     */
    Id?: string;
    /**
     * <p>The retention policy name.</p>
     */
    Name?: string;
    /**
     * <p>The retention policy description.</p>
     */
    Description?: string;
    /**
     * <p>The retention policy folder configurations.</p>
     */
    FolderConfigurations?: FolderConfiguration[];
}
export declare namespace GetDefaultRetentionPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDefaultRetentionPolicyResponse) => any;
}
export interface GetMailboxDetailsRequest {
    /**
     * <p>The identifier for the organization that contains the user whose mailbox details are
     *          being requested.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the user whose mailbox details are being requested.</p>
     */
    UserId: string | undefined;
}
export declare namespace GetMailboxDetailsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMailboxDetailsRequest) => any;
}
export interface GetMailboxDetailsResponse {
    /**
     * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
     */
    MailboxQuota?: number;
    /**
     * <p>The current mailbox size, in MB, for the specified user.</p>
     */
    MailboxSize?: number;
}
export declare namespace GetMailboxDetailsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMailboxDetailsResponse) => any;
}
export interface GetMobileDeviceAccessEffectRequest {
    /**
     * <p>The Amazon WorkMail organization to simulate the access effect for.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>Device type the simulated user will report.</p>
     */
    DeviceType?: string;
    /**
     * <p>Device model the simulated user will report.</p>
     */
    DeviceModel?: string;
    /**
     * <p>Device operating system the simulated user will report.</p>
     */
    DeviceOperatingSystem?: string;
    /**
     * <p>Device user agent the simulated user will report.</p>
     */
    DeviceUserAgent?: string;
}
export declare namespace GetMobileDeviceAccessEffectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMobileDeviceAccessEffectRequest) => any;
}
/**
 * <p>The rule that a simulated user matches.</p>
 */
export interface MobileDeviceAccessMatchedRule {
    /**
     * <p>Identifier of the rule that a simulated user matches.</p>
     */
    MobileDeviceAccessRuleId?: string;
    /**
     * <p>Name of a rule that a simulated user matches.</p>
     */
    Name?: string;
}
export declare namespace MobileDeviceAccessMatchedRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MobileDeviceAccessMatchedRule) => any;
}
export interface GetMobileDeviceAccessEffectResponse {
    /**
     * <p>The effect of the simulated access, <code>ALLOW</code> or <code>DENY</code>, after evaluating mobile device access rules in the Amazon WorkMail organization for the simulated
     *          user parameters.</p>
     */
    Effect?: MobileDeviceAccessRuleEffect | string;
    /**
     * <p>A list of the rules which matched the simulated user input and produced the effect.</p>
     */
    MatchedRules?: MobileDeviceAccessMatchedRule[];
}
export declare namespace GetMobileDeviceAccessEffectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMobileDeviceAccessEffectResponse) => any;
}
/**
 * <p>The representation of an Amazon WorkMail group.</p>
 */
export interface Group {
    /**
     * <p>The identifier of the group.</p>
     */
    Id?: string;
    /**
     * <p>The email of the group.</p>
     */
    Email?: string;
    /**
     * <p>The name of the group.</p>
     */
    Name?: string;
    /**
     * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
     */
    State?: EntityState | string;
    /**
     * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
     */
    DisabledDate?: Date;
}
export declare namespace Group {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Group) => any;
}
/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 */
export interface InvalidConfigurationException extends __SmithyException, $MetadataBearer {
    name: "InvalidConfigurationException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidConfigurationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidConfigurationException) => any;
}
/**
 * <p>The details of a mailbox export job, including the user or resource ID associated
 *          with the mailbox and the S3 bucket that the mailbox contents are exported to.</p>
 */
export interface MailboxExportJob {
    /**
     * <p>The identifier of the mailbox export job.</p>
     */
    JobId?: string;
    /**
     * <p>The identifier of the user or resource associated with the mailbox.</p>
     */
    EntityId?: string;
    /**
     * <p>The mailbox export job description.</p>
     */
    Description?: string;
    /**
     * <p>The name of the S3 bucket.</p>
     */
    S3BucketName?: string;
    /**
     * <p>The path to the S3 bucket and file that the mailbox export job exports to.</p>
     */
    S3Path?: string;
    /**
     * <p>The estimated progress of the mailbox export job, in percentage points.</p>
     */
    EstimatedProgress?: number;
    /**
     * <p>The state of the mailbox export job.</p>
     */
    State?: MailboxExportJobState | string;
    /**
     * <p>The mailbox export job start timestamp.</p>
     */
    StartTime?: Date;
    /**
     * <p>The mailbox export job end timestamp.</p>
     */
    EndTime?: Date;
}
export declare namespace MailboxExportJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MailboxExportJob) => any;
}
export interface ListAccessControlRulesRequest {
    /**
     * <p>The identifier for the organization.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace ListAccessControlRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessControlRulesRequest) => any;
}
export interface ListAccessControlRulesResponse {
    /**
     * <p>The access control rules.</p>
     */
    Rules?: AccessControlRule[];
}
export declare namespace ListAccessControlRulesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessControlRulesResponse) => any;
}
export interface ListAliasesRequest {
    /**
     * <p>The identifier for the organization under which the entity exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the entity for which to list the aliases.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAliasesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAliasesRequest) => any;
}
export interface ListAliasesResponse {
    /**
     * <p>The entity's paginated aliases.</p>
     */
    Aliases?: string[];
    /**
     * <p>The token to use to retrieve the next page of results. The value is "null" when there
     *          are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListAliasesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAliasesResponse) => any;
}
export interface ListGroupMembersRequest {
    /**
     * <p>The identifier for the organization under which the group exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the group to which the members (users or groups) are
     *          associated.</p>
     */
    GroupId: string | undefined;
    /**
     * <p> The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListGroupMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupMembersRequest) => any;
}
/**
 * <p>The representation of a user or group.</p>
 */
export interface Member {
    /**
     * <p>The identifier of the member.</p>
     */
    Id?: string;
    /**
     * <p>The name of the member.</p>
     */
    Name?: string;
    /**
     * <p>A member can be a user or group.</p>
     */
    Type?: MemberType | string;
    /**
     * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
     */
    State?: EntityState | string;
    /**
     * <p>The date indicating when the member was enabled for Amazon WorkMail use.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date indicating when the member was disabled from Amazon WorkMail use.</p>
     */
    DisabledDate?: Date;
}
export declare namespace Member {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Member) => any;
}
export interface ListGroupMembersResponse {
    /**
     * <p>The members associated to the group.</p>
     */
    Members?: Member[];
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
}
export declare namespace ListGroupMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupMembersResponse) => any;
}
export interface ListGroupsRequest {
    /**
     * <p>The identifier for the organization under which the groups exist.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupsRequest) => any;
}
export interface ListGroupsResponse {
    /**
     * <p>The overview of groups for an organization.</p>
     */
    Groups?: Group[];
    /**
     * <p>The token to use to retrieve the next page of results. The value is "null" when there
     *          are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupsResponse) => any;
}
export interface ListMailboxExportJobsRequest {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListMailboxExportJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMailboxExportJobsRequest) => any;
}
export interface ListMailboxExportJobsResponse {
    /**
     * <p>The mailbox export job details.</p>
     */
    Jobs?: MailboxExportJob[];
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListMailboxExportJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMailboxExportJobsResponse) => any;
}
export interface ListMailboxPermissionsRequest {
    /**
     * <p>The identifier of the organization under which the user, group, or resource
     *          exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the user, group, or resource for which to list mailbox
     *          permissions.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListMailboxPermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMailboxPermissionsRequest) => any;
}
export declare enum PermissionType {
    FULL_ACCESS = "FULL_ACCESS",
    SEND_AS = "SEND_AS",
    SEND_ON_BEHALF = "SEND_ON_BEHALF"
}
/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of
 *          another user, group, or resource mailbox.</p>
 */
export interface Permission {
    /**
     * <p>The identifier of the user, group, or resource to which the permissions are
     *          granted.</p>
     */
    GranteeId: string | undefined;
    /**
     * <p>The type of user, group, or resource referred to in GranteeId.</p>
     */
    GranteeType: MemberType | string | undefined;
    /**
     * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
     *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
     *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
     *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
     *          access to the mailbox, irrespective of other folder-level permissions set on the
     *          mailbox.</p>
     */
    PermissionValues: (PermissionType | string)[] | undefined;
}
export declare namespace Permission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Permission) => any;
}
export interface ListMailboxPermissionsResponse {
    /**
     * <p>One page of the user, group, or resource mailbox permissions.</p>
     */
    Permissions?: Permission[];
    /**
     * <p>The token to use to retrieve the next page of results. The value is "null" when there
     *          are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListMailboxPermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMailboxPermissionsResponse) => any;
}
export interface ListMobileDeviceAccessRulesRequest {
    /**
     * <p>The Amazon WorkMail organization for which to list the rules.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace ListMobileDeviceAccessRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMobileDeviceAccessRulesRequest) => any;
}
/**
 * <p>A rule that controls access to mobile devices for an Amazon WorkMail group.</p>
 */
export interface MobileDeviceAccessRule {
    /**
     * <p>The ID assigned to a mobile access rule. </p>
     */
    MobileDeviceAccessRuleId?: string;
    /**
     * <p>The name of a mobile access rule.</p>
     */
    Name?: string;
    /**
     * <p>The description of a mobile access rule.</p>
     */
    Description?: string;
    /**
     * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
     */
    Effect?: MobileDeviceAccessRuleEffect | string;
    /**
     * <p>Device types that a rule will match. </p>
     */
    DeviceTypes?: string[];
    /**
     * <p>Device types that a rule <b>will not</b> match. All other device types will match.</p>
     */
    NotDeviceTypes?: string[];
    /**
     * <p>Device models that a rule will match.</p>
     */
    DeviceModels?: string[];
    /**
     * <p>Device models that a rule <b>will not</b> match. All other device models will match.</p>
     */
    NotDeviceModels?: string[];
    /**
     * <p>Device operating systems that a rule will match.</p>
     */
    DeviceOperatingSystems?: string[];
    /**
     * <p>Device operating systems that a rule <b>will not</b> match. All other device types will match.</p>
     */
    NotDeviceOperatingSystems?: string[];
    /**
     * <p>Device user agents that a rule will match.</p>
     */
    DeviceUserAgents?: string[];
    /**
     * <p>Device user agents that a rule <b>will not</b> match. All other device user agents will match.</p>
     */
    NotDeviceUserAgents?: string[];
    /**
     * <p>The date and time at which an access rule was created.</p>
     */
    DateCreated?: Date;
    /**
     * <p>The date and time at which an access rule was modified.</p>
     */
    DateModified?: Date;
}
export declare namespace MobileDeviceAccessRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MobileDeviceAccessRule) => any;
}
export interface ListMobileDeviceAccessRulesResponse {
    /**
     * <p>The list of mobile device access rules that exist under the specified Amazon WorkMail organization.</p>
     */
    Rules?: MobileDeviceAccessRule[];
}
export declare namespace ListMobileDeviceAccessRulesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMobileDeviceAccessRulesResponse) => any;
}
export interface ListOrganizationsRequest {
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListOrganizationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationsRequest) => any;
}
/**
 * <p>The representation of an organization.</p>
 */
export interface OrganizationSummary {
    /**
     * <p>The identifier associated with the organization.</p>
     */
    OrganizationId?: string;
    /**
     * <p>The alias associated with the organization.</p>
     */
    Alias?: string;
    /**
     * <p>The default email domain associated with the organization.</p>
     */
    DefaultMailDomain?: string;
    /**
     * <p>The error message associated with the organization. It is only present if unexpected
     *          behavior has occurred with regards to the organization. It provides insight or solutions
     *          regarding unexpected behavior.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The state associated with the organization.</p>
     */
    State?: string;
}
export declare namespace OrganizationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationSummary) => any;
}
export interface ListOrganizationsResponse {
    /**
     * <p>The overview of owned organizations presented as a list of organization
     *          summaries.</p>
     */
    OrganizationSummaries?: OrganizationSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. The value is "null" when there
     *          are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListOrganizationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationsResponse) => any;
}
export interface ListResourceDelegatesRequest {
    /**
     * <p>The identifier for the organization that contains the resource for which delegates
     *          are listed.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the resource whose delegates are listed.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The token used to paginate through the delegates associated with a
     *          resource.</p>
     */
    NextToken?: string;
    /**
     * <p>The number of maximum results in a page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListResourceDelegatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDelegatesRequest) => any;
}
export interface ListResourceDelegatesResponse {
    /**
     * <p>One page of the resource's delegates.</p>
     */
    Delegates?: Delegate[];
    /**
     * <p>The token used to paginate through the delegates associated with a resource. While
     *          results are still available, it has an associated value. When the last page is reached, the
     *          token is empty. </p>
     */
    NextToken?: string;
}
export declare namespace ListResourceDelegatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDelegatesResponse) => any;
}
export interface ListResourcesRequest {
    /**
     * <p>The identifier for the organization under which the resources exist.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesRequest) => any;
}
/**
 * <p>The representation of a resource.</p>
 */
export interface Resource {
    /**
     * <p>The identifier of the resource.</p>
     */
    Id?: string;
    /**
     * <p>The email of the resource.</p>
     */
    Email?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The type of the resource: equipment or room.</p>
     */
    Type?: ResourceType | string;
    /**
     * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
     */
    State?: EntityState | string;
    /**
     * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>
     */
    DisabledDate?: Date;
}
export declare namespace Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Resource) => any;
}
export interface ListResourcesResponse {
    /**
     * <p>One page of the organization's resource representation.</p>
     */
    Resources?: Resource[];
    /**
     * <p> The token used to paginate through all the organization's resources. While results
     *          are still available, it has an associated value. When the last page is reached, the token
     *          is empty.</p>
     */
    NextToken?: string;
}
export declare namespace ListResourcesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    ResourceARN: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
    /**
     * <p>The key of the tag.</p>
     */
    Key: string | undefined;
    /**
     * <p>The value of the tag.</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>A list of tag key-value pairs.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
/**
 * <p>The resource cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface ListUsersRequest {
    /**
     * <p>The identifier for the organization under which the users exist.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The token to use to retrieve the next page of results. The first call does not
     *          contain any tokens.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListUsersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsersRequest) => any;
}
/**
 * <p>The representation of an Amazon WorkMail user.</p>
 */
export interface User {
    /**
     * <p>The identifier of the user.</p>
     */
    Id?: string;
    /**
     * <p>The email of the user.</p>
     */
    Email?: string;
    /**
     * <p>The name of the user.</p>
     */
    Name?: string;
    /**
     * <p>The display name of the user.</p>
     */
    DisplayName?: string;
    /**
     * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
     */
    State?: EntityState | string;
    /**
     * <p>The role of the user.</p>
     */
    UserRole?: UserRole | string;
    /**
     * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
     */
    EnabledDate?: Date;
    /**
     * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
     */
    DisabledDate?: Date;
}
export declare namespace User {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: User) => any;
}
export interface ListUsersResponse {
    /**
     * <p>The overview of users for an organization.</p>
     */
    Users?: User[];
    /**
     * <p> The token to use to retrieve the next page of results. This value is `null` when
     *          there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListUsersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsersResponse) => any;
}
export interface PutAccessControlRuleRequest {
    /**
     * <p>The rule name.</p>
     */
    Name: string | undefined;
    /**
     * <p>The rule effect.</p>
     */
    Effect: AccessControlRuleEffect | string | undefined;
    /**
     * <p>The rule description.</p>
     */
    Description: string | undefined;
    /**
     * <p>IPv4 CIDR ranges to include in the rule.</p>
     */
    IpRanges?: string[];
    /**
     * <p>IPv4 CIDR ranges to exclude from the rule.</p>
     */
    NotIpRanges?: string[];
    /**
     * <p>Access protocol actions to include in the rule. Valid values include
     *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
     *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
     */
    Actions?: string[];
    /**
     * <p>Access protocol actions to exclude from the rule. Valid values include
     *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
     *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
     */
    NotActions?: string[];
    /**
     * <p>User IDs to include in the rule.</p>
     */
    UserIds?: string[];
    /**
     * <p>User IDs to exclude from the rule.</p>
     */
    NotUserIds?: string[];
    /**
     * <p>The identifier of the organization.</p>
     */
    OrganizationId: string | undefined;
}
export declare namespace PutAccessControlRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAccessControlRuleRequest) => any;
}
export interface PutAccessControlRuleResponse {
}
export declare namespace PutAccessControlRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAccessControlRuleResponse) => any;
}
export interface PutMailboxPermissionsRequest {
    /**
     * <p>The identifier of the organization under which the user, group, or resource
     *          exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the user, group, or resource for which to update mailbox
     *          permissions.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The identifier of the user, group, or resource to which to grant the
     *          permissions.</p>
     */
    GranteeId: string | undefined;
    /**
     * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
     *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
     *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
     *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
     *          access to the mailbox, irrespective of other folder-level permissions set on the
     *          mailbox.</p>
     */
    PermissionValues: (PermissionType | string)[] | undefined;
}
export declare namespace PutMailboxPermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutMailboxPermissionsRequest) => any;
}
export interface PutMailboxPermissionsResponse {
}
export declare namespace PutMailboxPermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutMailboxPermissionsResponse) => any;
}
export interface PutRetentionPolicyRequest {
    /**
     * <p>The organization ID.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The retention policy ID.</p>
     */
    Id?: string;
    /**
     * <p>The retention policy name.</p>
     */
    Name: string | undefined;
    /**
     * <p>The retention policy description.</p>
     */
    Description?: string;
    /**
     * <p>The retention policy folder configurations.</p>
     */
    FolderConfigurations: FolderConfiguration[] | undefined;
}
export declare namespace PutRetentionPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRetentionPolicyRequest) => any;
}
export interface PutRetentionPolicyResponse {
}
export declare namespace PutRetentionPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRetentionPolicyResponse) => any;
}
export interface RegisterToWorkMailRequest {
    /**
     * <p>The identifier for the organization under which the user, group, or resource
     *          exists.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier for the user, group, or resource to be updated.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The email for the user, group, or resource to be updated.</p>
     */
    Email: string | undefined;
}
export declare namespace RegisterToWorkMailRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterToWorkMailRequest) => any;
}
export interface RegisterToWorkMailResponse {
}
export declare namespace RegisterToWorkMailResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterToWorkMailResponse) => any;
}
export interface ResetPasswordRequest {
    /**
     * <p>The identifier of the organization that contains the user for which the password is
     *          reset.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the user for whom the password is reset.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The new password for the user.</p>
     */
    Password: string | undefined;
}
export declare namespace ResetPasswordRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetPasswordRequest) => any;
}
export interface ResetPasswordResponse {
}
export declare namespace ResetPasswordResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetPasswordResponse) => any;
}
export interface StartMailboxExportJobRequest {
    /**
     * <p>The idempotency token for the client request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The identifier associated with the organization.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the user or resource associated with the mailbox.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The mailbox export job description.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3
     *          bucket.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
     *          key that encrypts the exported mailbox content.</p>
     */
    KmsKeyArn: string | undefined;
    /**
     * <p>The name of the S3 bucket.</p>
     */
    S3BucketName: string | undefined;
    /**
     * <p>The S3 bucket prefix.</p>
     */
    S3Prefix: string | undefined;
}
export declare namespace StartMailboxExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartMailboxExportJobRequest) => any;
}
export interface StartMailboxExportJobResponse {
    /**
     * <p>The job ID.</p>
     */
    JobId?: string;
}
export declare namespace StartMailboxExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartMailboxExportJobResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The tag key-value pairs.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
/**
 * <p>The resource can have up to 50 user-applied tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
    name: "TooManyTagsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyTagsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The tag keys.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateMailboxQuotaRequest {
    /**
     * <p>The identifier for the organization that contains the user for whom to update the
     *          mailbox quota.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifer for the user for whom to update the mailbox quota.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The updated mailbox quota, in MB, for the specified user.</p>
     */
    MailboxQuota: number | undefined;
}
export declare namespace UpdateMailboxQuotaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMailboxQuotaRequest) => any;
}
export interface UpdateMailboxQuotaResponse {
}
export declare namespace UpdateMailboxQuotaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMailboxQuotaResponse) => any;
}
export interface UpdateMobileDeviceAccessRuleRequest {
    /**
     * <p>The Amazon WorkMail organization under which the rule will be updated.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the rule to be updated.</p>
     */
    MobileDeviceAccessRuleId: string | undefined;
    /**
     * <p>The updated rule name.</p>
     */
    Name: string | undefined;
    /**
     * <p>The updated rule description.</p>
     */
    Description?: string;
    /**
     * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
     */
    Effect: MobileDeviceAccessRuleEffect | string | undefined;
    /**
     * <p>Device types that the updated rule will match.</p>
     */
    DeviceTypes?: string[];
    /**
     * <p>Device types that the updated rule <b>will not</b> match. All other device types will match.</p>
     */
    NotDeviceTypes?: string[];
    /**
     * <p>Device models that the updated rule will match.</p>
     */
    DeviceModels?: string[];
    /**
     * <p>Device models that the updated rule <b>will not</b> match. All other device models will match.</p>
     */
    NotDeviceModels?: string[];
    /**
     * <p>Device operating systems that the updated rule will match.</p>
     */
    DeviceOperatingSystems?: string[];
    /**
     * <p>Device operating systems that the updated rule <b>will not</b> match. All other device operating systems will match.</p>
     */
    NotDeviceOperatingSystems?: string[];
    /**
     * <p>User agents that the updated rule will match.</p>
     */
    DeviceUserAgents?: string[];
    /**
     * <p>User agents that the updated rule <b>will not</b> match. All other user agents will match.</p>
     */
    NotDeviceUserAgents?: string[];
}
export declare namespace UpdateMobileDeviceAccessRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMobileDeviceAccessRuleRequest) => any;
}
export interface UpdateMobileDeviceAccessRuleResponse {
}
export declare namespace UpdateMobileDeviceAccessRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMobileDeviceAccessRuleResponse) => any;
}
export interface UpdatePrimaryEmailAddressRequest {
    /**
     * <p>The organization that contains the user, group, or resource to update.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The user, group, or resource to update.</p>
     */
    EntityId: string | undefined;
    /**
     * <p>The value of the email to be updated as primary.</p>
     */
    Email: string | undefined;
}
export declare namespace UpdatePrimaryEmailAddressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePrimaryEmailAddressRequest) => any;
}
export interface UpdatePrimaryEmailAddressResponse {
}
export declare namespace UpdatePrimaryEmailAddressResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePrimaryEmailAddressResponse) => any;
}
export interface UpdateResourceRequest {
    /**
     * <p>The identifier associated with the organization for which the resource is
     *          updated.</p>
     */
    OrganizationId: string | undefined;
    /**
     * <p>The identifier of the resource to be updated.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The name of the resource to be updated.</p>
     */
    Name?: string;
    /**
     * <p>The resource's booking options to be updated.</p>
     */
    BookingOptions?: BookingOptions;
}
export declare namespace UpdateResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceRequest) => any;
}
export interface UpdateResourceResponse {
}
export declare namespace UpdateResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceResponse) => any;
}
