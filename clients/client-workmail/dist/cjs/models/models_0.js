"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMailboxPermissionsResponse = exports.DeleteMailboxPermissionsRequest = exports.DeleteGroupResponse = exports.DeleteGroupRequest = exports.DeleteAliasResponse = exports.DeleteAliasRequest = exports.DeleteAccessControlRuleResponse = exports.DeleteAccessControlRuleRequest = exports.Delegate = exports.MemberType = exports.InvalidPasswordException = exports.CreateUserResponse = exports.CreateUserRequest = exports.CreateResourceResponse = exports.CreateResourceRequest = exports.ResourceType = exports.DirectoryInUseException = exports.CreateOrganizationResponse = exports.CreateOrganizationRequest = exports.Domain = exports.CreateMobileDeviceAccessRuleResponse = exports.CreateMobileDeviceAccessRuleRequest = exports.MobileDeviceAccessRuleEffect = exports.ReservedNameException = exports.NameAvailabilityException = exports.CreateGroupResponse = exports.CreateGroupRequest = exports.MailDomainStateException = exports.MailDomainNotFoundException = exports.LimitExceededException = exports.EmailAddressInUseException = exports.CreateAliasResponse = exports.CreateAliasRequest = exports.CancelMailboxExportJobResponse = exports.CancelMailboxExportJobRequest = exports.BookingOptions = exports.UnsupportedOperationException = exports.DirectoryUnavailableException = exports.DirectoryServiceAuthenticationFailedException = exports.AssociateMemberToGroupResponse = exports.AssociateMemberToGroupRequest = exports.OrganizationStateException = exports.OrganizationNotFoundException = exports.InvalidParameterException = exports.EntityStateException = exports.EntityNotFoundException = exports.AssociateDelegateToResourceResponse = exports.AssociateDelegateToResourceRequest = exports.AccessControlRule = exports.AccessControlRuleEffect = void 0;
exports.ListGroupMembersRequest = exports.ListAliasesResponse = exports.ListAliasesRequest = exports.ListAccessControlRulesResponse = exports.ListAccessControlRulesRequest = exports.MailboxExportJob = exports.InvalidConfigurationException = exports.Group = exports.GetMobileDeviceAccessEffectResponse = exports.MobileDeviceAccessMatchedRule = exports.GetMobileDeviceAccessEffectRequest = exports.GetMailboxDetailsResponse = exports.GetMailboxDetailsRequest = exports.GetDefaultRetentionPolicyResponse = exports.GetDefaultRetentionPolicyRequest = exports.GetAccessControlEffectResponse = exports.GetAccessControlEffectRequest = exports.FolderConfiguration = exports.FolderName = exports.RetentionAction = exports.EntityAlreadyRegisteredException = exports.DisassociateMemberFromGroupResponse = exports.DisassociateMemberFromGroupRequest = exports.DisassociateDelegateFromResourceResponse = exports.DisassociateDelegateFromResourceRequest = exports.DescribeUserResponse = exports.UserRole = exports.DescribeUserRequest = exports.DescribeResourceResponse = exports.DescribeResourceRequest = exports.DescribeOrganizationResponse = exports.DescribeOrganizationRequest = exports.DescribeMailboxExportJobResponse = exports.MailboxExportJobState = exports.DescribeMailboxExportJobRequest = exports.DescribeGroupResponse = exports.EntityState = exports.DescribeGroupRequest = exports.DeregisterFromWorkMailResponse = exports.DeregisterFromWorkMailRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.DeleteRetentionPolicyResponse = exports.DeleteRetentionPolicyRequest = exports.DeleteResourceResponse = exports.DeleteResourceRequest = exports.DeleteOrganizationResponse = exports.DeleteOrganizationRequest = exports.DeleteMobileDeviceAccessRuleResponse = exports.DeleteMobileDeviceAccessRuleRequest = void 0;
exports.UpdatePrimaryEmailAddressRequest = exports.UpdateMobileDeviceAccessRuleResponse = exports.UpdateMobileDeviceAccessRuleRequest = exports.UpdateMailboxQuotaResponse = exports.UpdateMailboxQuotaRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartMailboxExportJobResponse = exports.StartMailboxExportJobRequest = exports.ResetPasswordResponse = exports.ResetPasswordRequest = exports.RegisterToWorkMailResponse = exports.RegisterToWorkMailRequest = exports.PutRetentionPolicyResponse = exports.PutRetentionPolicyRequest = exports.PutMailboxPermissionsResponse = exports.PutMailboxPermissionsRequest = exports.PutAccessControlRuleResponse = exports.PutAccessControlRuleRequest = exports.ListUsersResponse = exports.User = exports.ListUsersRequest = exports.ResourceNotFoundException = exports.ListTagsForResourceResponse = exports.Tag = exports.ListTagsForResourceRequest = exports.ListResourcesResponse = exports.Resource = exports.ListResourcesRequest = exports.ListResourceDelegatesResponse = exports.ListResourceDelegatesRequest = exports.ListOrganizationsResponse = exports.OrganizationSummary = exports.ListOrganizationsRequest = exports.ListMobileDeviceAccessRulesResponse = exports.MobileDeviceAccessRule = exports.ListMobileDeviceAccessRulesRequest = exports.ListMailboxPermissionsResponse = exports.Permission = exports.PermissionType = exports.ListMailboxPermissionsRequest = exports.ListMailboxExportJobsResponse = exports.ListMailboxExportJobsRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.ListGroupMembersResponse = exports.Member = void 0;
exports.UpdateResourceResponse = exports.UpdateResourceRequest = exports.UpdatePrimaryEmailAddressResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessControlRuleEffect;
(function (AccessControlRuleEffect) {
    AccessControlRuleEffect["ALLOW"] = "ALLOW";
    AccessControlRuleEffect["DENY"] = "DENY";
})(AccessControlRuleEffect = exports.AccessControlRuleEffect || (exports.AccessControlRuleEffect = {}));
var AccessControlRule;
(function (AccessControlRule) {
    /**
     * @internal
     */
    AccessControlRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlRule = exports.AccessControlRule || (exports.AccessControlRule = {}));
var AssociateDelegateToResourceRequest;
(function (AssociateDelegateToResourceRequest) {
    /**
     * @internal
     */
    AssociateDelegateToResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDelegateToResourceRequest = exports.AssociateDelegateToResourceRequest || (exports.AssociateDelegateToResourceRequest = {}));
var AssociateDelegateToResourceResponse;
(function (AssociateDelegateToResourceResponse) {
    /**
     * @internal
     */
    AssociateDelegateToResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDelegateToResourceResponse = exports.AssociateDelegateToResourceResponse || (exports.AssociateDelegateToResourceResponse = {}));
var EntityNotFoundException;
(function (EntityNotFoundException) {
    /**
     * @internal
     */
    EntityNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityNotFoundException = exports.EntityNotFoundException || (exports.EntityNotFoundException = {}));
var EntityStateException;
(function (EntityStateException) {
    /**
     * @internal
     */
    EntityStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityStateException = exports.EntityStateException || (exports.EntityStateException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var OrganizationNotFoundException;
(function (OrganizationNotFoundException) {
    /**
     * @internal
     */
    OrganizationNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationNotFoundException = exports.OrganizationNotFoundException || (exports.OrganizationNotFoundException = {}));
var OrganizationStateException;
(function (OrganizationStateException) {
    /**
     * @internal
     */
    OrganizationStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationStateException = exports.OrganizationStateException || (exports.OrganizationStateException = {}));
var AssociateMemberToGroupRequest;
(function (AssociateMemberToGroupRequest) {
    /**
     * @internal
     */
    AssociateMemberToGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateMemberToGroupRequest = exports.AssociateMemberToGroupRequest || (exports.AssociateMemberToGroupRequest = {}));
var AssociateMemberToGroupResponse;
(function (AssociateMemberToGroupResponse) {
    /**
     * @internal
     */
    AssociateMemberToGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateMemberToGroupResponse = exports.AssociateMemberToGroupResponse || (exports.AssociateMemberToGroupResponse = {}));
var DirectoryServiceAuthenticationFailedException;
(function (DirectoryServiceAuthenticationFailedException) {
    /**
     * @internal
     */
    DirectoryServiceAuthenticationFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryServiceAuthenticationFailedException = exports.DirectoryServiceAuthenticationFailedException || (exports.DirectoryServiceAuthenticationFailedException = {}));
var DirectoryUnavailableException;
(function (DirectoryUnavailableException) {
    /**
     * @internal
     */
    DirectoryUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryUnavailableException = exports.DirectoryUnavailableException || (exports.DirectoryUnavailableException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var BookingOptions;
(function (BookingOptions) {
    /**
     * @internal
     */
    BookingOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BookingOptions = exports.BookingOptions || (exports.BookingOptions = {}));
var CancelMailboxExportJobRequest;
(function (CancelMailboxExportJobRequest) {
    /**
     * @internal
     */
    CancelMailboxExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMailboxExportJobRequest = exports.CancelMailboxExportJobRequest || (exports.CancelMailboxExportJobRequest = {}));
var CancelMailboxExportJobResponse;
(function (CancelMailboxExportJobResponse) {
    /**
     * @internal
     */
    CancelMailboxExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMailboxExportJobResponse = exports.CancelMailboxExportJobResponse || (exports.CancelMailboxExportJobResponse = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var CreateAliasResponse;
(function (CreateAliasResponse) {
    /**
     * @internal
     */
    CreateAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasResponse = exports.CreateAliasResponse || (exports.CreateAliasResponse = {}));
var EmailAddressInUseException;
(function (EmailAddressInUseException) {
    /**
     * @internal
     */
    EmailAddressInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailAddressInUseException = exports.EmailAddressInUseException || (exports.EmailAddressInUseException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var MailDomainNotFoundException;
(function (MailDomainNotFoundException) {
    /**
     * @internal
     */
    MailDomainNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MailDomainNotFoundException = exports.MailDomainNotFoundException || (exports.MailDomainNotFoundException = {}));
var MailDomainStateException;
(function (MailDomainStateException) {
    /**
     * @internal
     */
    MailDomainStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MailDomainStateException = exports.MailDomainStateException || (exports.MailDomainStateException = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var NameAvailabilityException;
(function (NameAvailabilityException) {
    /**
     * @internal
     */
    NameAvailabilityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NameAvailabilityException = exports.NameAvailabilityException || (exports.NameAvailabilityException = {}));
var ReservedNameException;
(function (ReservedNameException) {
    /**
     * @internal
     */
    ReservedNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNameException = exports.ReservedNameException || (exports.ReservedNameException = {}));
var MobileDeviceAccessRuleEffect;
(function (MobileDeviceAccessRuleEffect) {
    MobileDeviceAccessRuleEffect["ALLOW"] = "ALLOW";
    MobileDeviceAccessRuleEffect["DENY"] = "DENY";
})(MobileDeviceAccessRuleEffect = exports.MobileDeviceAccessRuleEffect || (exports.MobileDeviceAccessRuleEffect = {}));
var CreateMobileDeviceAccessRuleRequest;
(function (CreateMobileDeviceAccessRuleRequest) {
    /**
     * @internal
     */
    CreateMobileDeviceAccessRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMobileDeviceAccessRuleRequest = exports.CreateMobileDeviceAccessRuleRequest || (exports.CreateMobileDeviceAccessRuleRequest = {}));
var CreateMobileDeviceAccessRuleResponse;
(function (CreateMobileDeviceAccessRuleResponse) {
    /**
     * @internal
     */
    CreateMobileDeviceAccessRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMobileDeviceAccessRuleResponse = exports.CreateMobileDeviceAccessRuleResponse || (exports.CreateMobileDeviceAccessRuleResponse = {}));
var Domain;
(function (Domain) {
    /**
     * @internal
     */
    Domain.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Domain = exports.Domain || (exports.Domain = {}));
var CreateOrganizationRequest;
(function (CreateOrganizationRequest) {
    /**
     * @internal
     */
    CreateOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOrganizationRequest = exports.CreateOrganizationRequest || (exports.CreateOrganizationRequest = {}));
var CreateOrganizationResponse;
(function (CreateOrganizationResponse) {
    /**
     * @internal
     */
    CreateOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOrganizationResponse = exports.CreateOrganizationResponse || (exports.CreateOrganizationResponse = {}));
var DirectoryInUseException;
(function (DirectoryInUseException) {
    /**
     * @internal
     */
    DirectoryInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryInUseException = exports.DirectoryInUseException || (exports.DirectoryInUseException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["EQUIPMENT"] = "EQUIPMENT";
    ResourceType["ROOM"] = "ROOM";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var CreateResourceRequest;
(function (CreateResourceRequest) {
    /**
     * @internal
     */
    CreateResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceRequest = exports.CreateResourceRequest || (exports.CreateResourceRequest = {}));
var CreateResourceResponse;
(function (CreateResourceResponse) {
    /**
     * @internal
     */
    CreateResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceResponse = exports.CreateResourceResponse || (exports.CreateResourceResponse = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var MemberType;
(function (MemberType) {
    MemberType["GROUP"] = "GROUP";
    MemberType["USER"] = "USER";
})(MemberType = exports.MemberType || (exports.MemberType = {}));
var Delegate;
(function (Delegate) {
    /**
     * @internal
     */
    Delegate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Delegate = exports.Delegate || (exports.Delegate = {}));
var DeleteAccessControlRuleRequest;
(function (DeleteAccessControlRuleRequest) {
    /**
     * @internal
     */
    DeleteAccessControlRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessControlRuleRequest = exports.DeleteAccessControlRuleRequest || (exports.DeleteAccessControlRuleRequest = {}));
var DeleteAccessControlRuleResponse;
(function (DeleteAccessControlRuleResponse) {
    /**
     * @internal
     */
    DeleteAccessControlRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessControlRuleResponse = exports.DeleteAccessControlRuleResponse || (exports.DeleteAccessControlRuleResponse = {}));
var DeleteAliasRequest;
(function (DeleteAliasRequest) {
    /**
     * @internal
     */
    DeleteAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAliasRequest = exports.DeleteAliasRequest || (exports.DeleteAliasRequest = {}));
var DeleteAliasResponse;
(function (DeleteAliasResponse) {
    /**
     * @internal
     */
    DeleteAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAliasResponse = exports.DeleteAliasResponse || (exports.DeleteAliasResponse = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupResponse;
(function (DeleteGroupResponse) {
    /**
     * @internal
     */
    DeleteGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupResponse = exports.DeleteGroupResponse || (exports.DeleteGroupResponse = {}));
var DeleteMailboxPermissionsRequest;
(function (DeleteMailboxPermissionsRequest) {
    /**
     * @internal
     */
    DeleteMailboxPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMailboxPermissionsRequest = exports.DeleteMailboxPermissionsRequest || (exports.DeleteMailboxPermissionsRequest = {}));
var DeleteMailboxPermissionsResponse;
(function (DeleteMailboxPermissionsResponse) {
    /**
     * @internal
     */
    DeleteMailboxPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMailboxPermissionsResponse = exports.DeleteMailboxPermissionsResponse || (exports.DeleteMailboxPermissionsResponse = {}));
var DeleteMobileDeviceAccessRuleRequest;
(function (DeleteMobileDeviceAccessRuleRequest) {
    /**
     * @internal
     */
    DeleteMobileDeviceAccessRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMobileDeviceAccessRuleRequest = exports.DeleteMobileDeviceAccessRuleRequest || (exports.DeleteMobileDeviceAccessRuleRequest = {}));
var DeleteMobileDeviceAccessRuleResponse;
(function (DeleteMobileDeviceAccessRuleResponse) {
    /**
     * @internal
     */
    DeleteMobileDeviceAccessRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMobileDeviceAccessRuleResponse = exports.DeleteMobileDeviceAccessRuleResponse || (exports.DeleteMobileDeviceAccessRuleResponse = {}));
var DeleteOrganizationRequest;
(function (DeleteOrganizationRequest) {
    /**
     * @internal
     */
    DeleteOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOrganizationRequest = exports.DeleteOrganizationRequest || (exports.DeleteOrganizationRequest = {}));
var DeleteOrganizationResponse;
(function (DeleteOrganizationResponse) {
    /**
     * @internal
     */
    DeleteOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOrganizationResponse = exports.DeleteOrganizationResponse || (exports.DeleteOrganizationResponse = {}));
var DeleteResourceRequest;
(function (DeleteResourceRequest) {
    /**
     * @internal
     */
    DeleteResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceRequest = exports.DeleteResourceRequest || (exports.DeleteResourceRequest = {}));
var DeleteResourceResponse;
(function (DeleteResourceResponse) {
    /**
     * @internal
     */
    DeleteResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceResponse = exports.DeleteResourceResponse || (exports.DeleteResourceResponse = {}));
var DeleteRetentionPolicyRequest;
(function (DeleteRetentionPolicyRequest) {
    /**
     * @internal
     */
    DeleteRetentionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRetentionPolicyRequest = exports.DeleteRetentionPolicyRequest || (exports.DeleteRetentionPolicyRequest = {}));
var DeleteRetentionPolicyResponse;
(function (DeleteRetentionPolicyResponse) {
    /**
     * @internal
     */
    DeleteRetentionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRetentionPolicyResponse = exports.DeleteRetentionPolicyResponse || (exports.DeleteRetentionPolicyResponse = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserResponse;
(function (DeleteUserResponse) {
    /**
     * @internal
     */
    DeleteUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserResponse = exports.DeleteUserResponse || (exports.DeleteUserResponse = {}));
var DeregisterFromWorkMailRequest;
(function (DeregisterFromWorkMailRequest) {
    /**
     * @internal
     */
    DeregisterFromWorkMailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterFromWorkMailRequest = exports.DeregisterFromWorkMailRequest || (exports.DeregisterFromWorkMailRequest = {}));
var DeregisterFromWorkMailResponse;
(function (DeregisterFromWorkMailResponse) {
    /**
     * @internal
     */
    DeregisterFromWorkMailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterFromWorkMailResponse = exports.DeregisterFromWorkMailResponse || (exports.DeregisterFromWorkMailResponse = {}));
var DescribeGroupRequest;
(function (DescribeGroupRequest) {
    /**
     * @internal
     */
    DescribeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupRequest = exports.DescribeGroupRequest || (exports.DescribeGroupRequest = {}));
var EntityState;
(function (EntityState) {
    EntityState["DELETED"] = "DELETED";
    EntityState["DISABLED"] = "DISABLED";
    EntityState["ENABLED"] = "ENABLED";
})(EntityState = exports.EntityState || (exports.EntityState = {}));
var DescribeGroupResponse;
(function (DescribeGroupResponse) {
    /**
     * @internal
     */
    DescribeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupResponse = exports.DescribeGroupResponse || (exports.DescribeGroupResponse = {}));
var DescribeMailboxExportJobRequest;
(function (DescribeMailboxExportJobRequest) {
    /**
     * @internal
     */
    DescribeMailboxExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMailboxExportJobRequest = exports.DescribeMailboxExportJobRequest || (exports.DescribeMailboxExportJobRequest = {}));
var MailboxExportJobState;
(function (MailboxExportJobState) {
    MailboxExportJobState["CANCELLED"] = "CANCELLED";
    MailboxExportJobState["COMPLETED"] = "COMPLETED";
    MailboxExportJobState["FAILED"] = "FAILED";
    MailboxExportJobState["RUNNING"] = "RUNNING";
})(MailboxExportJobState = exports.MailboxExportJobState || (exports.MailboxExportJobState = {}));
var DescribeMailboxExportJobResponse;
(function (DescribeMailboxExportJobResponse) {
    /**
     * @internal
     */
    DescribeMailboxExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMailboxExportJobResponse = exports.DescribeMailboxExportJobResponse || (exports.DescribeMailboxExportJobResponse = {}));
var DescribeOrganizationRequest;
(function (DescribeOrganizationRequest) {
    /**
     * @internal
     */
    DescribeOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationRequest = exports.DescribeOrganizationRequest || (exports.DescribeOrganizationRequest = {}));
var DescribeOrganizationResponse;
(function (DescribeOrganizationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationResponse = exports.DescribeOrganizationResponse || (exports.DescribeOrganizationResponse = {}));
var DescribeResourceRequest;
(function (DescribeResourceRequest) {
    /**
     * @internal
     */
    DescribeResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceRequest = exports.DescribeResourceRequest || (exports.DescribeResourceRequest = {}));
var DescribeResourceResponse;
(function (DescribeResourceResponse) {
    /**
     * @internal
     */
    DescribeResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceResponse = exports.DescribeResourceResponse || (exports.DescribeResourceResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var UserRole;
(function (UserRole) {
    UserRole["RESOURCE"] = "RESOURCE";
    UserRole["SYSTEM_USER"] = "SYSTEM_USER";
    UserRole["USER"] = "USER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var DisassociateDelegateFromResourceRequest;
(function (DisassociateDelegateFromResourceRequest) {
    /**
     * @internal
     */
    DisassociateDelegateFromResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDelegateFromResourceRequest = exports.DisassociateDelegateFromResourceRequest || (exports.DisassociateDelegateFromResourceRequest = {}));
var DisassociateDelegateFromResourceResponse;
(function (DisassociateDelegateFromResourceResponse) {
    /**
     * @internal
     */
    DisassociateDelegateFromResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDelegateFromResourceResponse = exports.DisassociateDelegateFromResourceResponse || (exports.DisassociateDelegateFromResourceResponse = {}));
var DisassociateMemberFromGroupRequest;
(function (DisassociateMemberFromGroupRequest) {
    /**
     * @internal
     */
    DisassociateMemberFromGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMemberFromGroupRequest = exports.DisassociateMemberFromGroupRequest || (exports.DisassociateMemberFromGroupRequest = {}));
var DisassociateMemberFromGroupResponse;
(function (DisassociateMemberFromGroupResponse) {
    /**
     * @internal
     */
    DisassociateMemberFromGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMemberFromGroupResponse = exports.DisassociateMemberFromGroupResponse || (exports.DisassociateMemberFromGroupResponse = {}));
var EntityAlreadyRegisteredException;
(function (EntityAlreadyRegisteredException) {
    /**
     * @internal
     */
    EntityAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityAlreadyRegisteredException = exports.EntityAlreadyRegisteredException || (exports.EntityAlreadyRegisteredException = {}));
var RetentionAction;
(function (RetentionAction) {
    RetentionAction["DELETE"] = "DELETE";
    RetentionAction["NONE"] = "NONE";
    RetentionAction["PERMANENTLY_DELETE"] = "PERMANENTLY_DELETE";
})(RetentionAction = exports.RetentionAction || (exports.RetentionAction = {}));
var FolderName;
(function (FolderName) {
    FolderName["DELETED_ITEMS"] = "DELETED_ITEMS";
    FolderName["DRAFTS"] = "DRAFTS";
    FolderName["INBOX"] = "INBOX";
    FolderName["JUNK_EMAIL"] = "JUNK_EMAIL";
    FolderName["SENT_ITEMS"] = "SENT_ITEMS";
})(FolderName = exports.FolderName || (exports.FolderName = {}));
var FolderConfiguration;
(function (FolderConfiguration) {
    /**
     * @internal
     */
    FolderConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FolderConfiguration = exports.FolderConfiguration || (exports.FolderConfiguration = {}));
var GetAccessControlEffectRequest;
(function (GetAccessControlEffectRequest) {
    /**
     * @internal
     */
    GetAccessControlEffectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessControlEffectRequest = exports.GetAccessControlEffectRequest || (exports.GetAccessControlEffectRequest = {}));
var GetAccessControlEffectResponse;
(function (GetAccessControlEffectResponse) {
    /**
     * @internal
     */
    GetAccessControlEffectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessControlEffectResponse = exports.GetAccessControlEffectResponse || (exports.GetAccessControlEffectResponse = {}));
var GetDefaultRetentionPolicyRequest;
(function (GetDefaultRetentionPolicyRequest) {
    /**
     * @internal
     */
    GetDefaultRetentionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultRetentionPolicyRequest = exports.GetDefaultRetentionPolicyRequest || (exports.GetDefaultRetentionPolicyRequest = {}));
var GetDefaultRetentionPolicyResponse;
(function (GetDefaultRetentionPolicyResponse) {
    /**
     * @internal
     */
    GetDefaultRetentionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultRetentionPolicyResponse = exports.GetDefaultRetentionPolicyResponse || (exports.GetDefaultRetentionPolicyResponse = {}));
var GetMailboxDetailsRequest;
(function (GetMailboxDetailsRequest) {
    /**
     * @internal
     */
    GetMailboxDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMailboxDetailsRequest = exports.GetMailboxDetailsRequest || (exports.GetMailboxDetailsRequest = {}));
var GetMailboxDetailsResponse;
(function (GetMailboxDetailsResponse) {
    /**
     * @internal
     */
    GetMailboxDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMailboxDetailsResponse = exports.GetMailboxDetailsResponse || (exports.GetMailboxDetailsResponse = {}));
var GetMobileDeviceAccessEffectRequest;
(function (GetMobileDeviceAccessEffectRequest) {
    /**
     * @internal
     */
    GetMobileDeviceAccessEffectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMobileDeviceAccessEffectRequest = exports.GetMobileDeviceAccessEffectRequest || (exports.GetMobileDeviceAccessEffectRequest = {}));
var MobileDeviceAccessMatchedRule;
(function (MobileDeviceAccessMatchedRule) {
    /**
     * @internal
     */
    MobileDeviceAccessMatchedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MobileDeviceAccessMatchedRule = exports.MobileDeviceAccessMatchedRule || (exports.MobileDeviceAccessMatchedRule = {}));
var GetMobileDeviceAccessEffectResponse;
(function (GetMobileDeviceAccessEffectResponse) {
    /**
     * @internal
     */
    GetMobileDeviceAccessEffectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMobileDeviceAccessEffectResponse = exports.GetMobileDeviceAccessEffectResponse || (exports.GetMobileDeviceAccessEffectResponse = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var InvalidConfigurationException;
(function (InvalidConfigurationException) {
    /**
     * @internal
     */
    InvalidConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConfigurationException = exports.InvalidConfigurationException || (exports.InvalidConfigurationException = {}));
var MailboxExportJob;
(function (MailboxExportJob) {
    /**
     * @internal
     */
    MailboxExportJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MailboxExportJob = exports.MailboxExportJob || (exports.MailboxExportJob = {}));
var ListAccessControlRulesRequest;
(function (ListAccessControlRulesRequest) {
    /**
     * @internal
     */
    ListAccessControlRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessControlRulesRequest = exports.ListAccessControlRulesRequest || (exports.ListAccessControlRulesRequest = {}));
var ListAccessControlRulesResponse;
(function (ListAccessControlRulesResponse) {
    /**
     * @internal
     */
    ListAccessControlRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessControlRulesResponse = exports.ListAccessControlRulesResponse || (exports.ListAccessControlRulesResponse = {}));
var ListAliasesRequest;
(function (ListAliasesRequest) {
    /**
     * @internal
     */
    ListAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesRequest = exports.ListAliasesRequest || (exports.ListAliasesRequest = {}));
var ListAliasesResponse;
(function (ListAliasesResponse) {
    /**
     * @internal
     */
    ListAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesResponse = exports.ListAliasesResponse || (exports.ListAliasesResponse = {}));
var ListGroupMembersRequest;
(function (ListGroupMembersRequest) {
    /**
     * @internal
     */
    ListGroupMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupMembersRequest = exports.ListGroupMembersRequest || (exports.ListGroupMembersRequest = {}));
var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Member = exports.Member || (exports.Member = {}));
var ListGroupMembersResponse;
(function (ListGroupMembersResponse) {
    /**
     * @internal
     */
    ListGroupMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupMembersResponse = exports.ListGroupMembersResponse || (exports.ListGroupMembersResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListMailboxExportJobsRequest;
(function (ListMailboxExportJobsRequest) {
    /**
     * @internal
     */
    ListMailboxExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMailboxExportJobsRequest = exports.ListMailboxExportJobsRequest || (exports.ListMailboxExportJobsRequest = {}));
var ListMailboxExportJobsResponse;
(function (ListMailboxExportJobsResponse) {
    /**
     * @internal
     */
    ListMailboxExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMailboxExportJobsResponse = exports.ListMailboxExportJobsResponse || (exports.ListMailboxExportJobsResponse = {}));
var ListMailboxPermissionsRequest;
(function (ListMailboxPermissionsRequest) {
    /**
     * @internal
     */
    ListMailboxPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMailboxPermissionsRequest = exports.ListMailboxPermissionsRequest || (exports.ListMailboxPermissionsRequest = {}));
var PermissionType;
(function (PermissionType) {
    PermissionType["FULL_ACCESS"] = "FULL_ACCESS";
    PermissionType["SEND_AS"] = "SEND_AS";
    PermissionType["SEND_ON_BEHALF"] = "SEND_ON_BEHALF";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
var Permission;
(function (Permission) {
    /**
     * @internal
     */
    Permission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Permission = exports.Permission || (exports.Permission = {}));
var ListMailboxPermissionsResponse;
(function (ListMailboxPermissionsResponse) {
    /**
     * @internal
     */
    ListMailboxPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMailboxPermissionsResponse = exports.ListMailboxPermissionsResponse || (exports.ListMailboxPermissionsResponse = {}));
var ListMobileDeviceAccessRulesRequest;
(function (ListMobileDeviceAccessRulesRequest) {
    /**
     * @internal
     */
    ListMobileDeviceAccessRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMobileDeviceAccessRulesRequest = exports.ListMobileDeviceAccessRulesRequest || (exports.ListMobileDeviceAccessRulesRequest = {}));
var MobileDeviceAccessRule;
(function (MobileDeviceAccessRule) {
    /**
     * @internal
     */
    MobileDeviceAccessRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MobileDeviceAccessRule = exports.MobileDeviceAccessRule || (exports.MobileDeviceAccessRule = {}));
var ListMobileDeviceAccessRulesResponse;
(function (ListMobileDeviceAccessRulesResponse) {
    /**
     * @internal
     */
    ListMobileDeviceAccessRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMobileDeviceAccessRulesResponse = exports.ListMobileDeviceAccessRulesResponse || (exports.ListMobileDeviceAccessRulesResponse = {}));
var ListOrganizationsRequest;
(function (ListOrganizationsRequest) {
    /**
     * @internal
     */
    ListOrganizationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationsRequest = exports.ListOrganizationsRequest || (exports.ListOrganizationsRequest = {}));
var OrganizationSummary;
(function (OrganizationSummary) {
    /**
     * @internal
     */
    OrganizationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationSummary = exports.OrganizationSummary || (exports.OrganizationSummary = {}));
var ListOrganizationsResponse;
(function (ListOrganizationsResponse) {
    /**
     * @internal
     */
    ListOrganizationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationsResponse = exports.ListOrganizationsResponse || (exports.ListOrganizationsResponse = {}));
var ListResourceDelegatesRequest;
(function (ListResourceDelegatesRequest) {
    /**
     * @internal
     */
    ListResourceDelegatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDelegatesRequest = exports.ListResourceDelegatesRequest || (exports.ListResourceDelegatesRequest = {}));
var ListResourceDelegatesResponse;
(function (ListResourceDelegatesResponse) {
    /**
     * @internal
     */
    ListResourceDelegatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDelegatesResponse = exports.ListResourceDelegatesResponse || (exports.ListResourceDelegatesResponse = {}));
var ListResourcesRequest;
(function (ListResourcesRequest) {
    /**
     * @internal
     */
    ListResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesRequest = exports.ListResourcesRequest || (exports.ListResourcesRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var ListResourcesResponse;
(function (ListResourcesResponse) {
    /**
     * @internal
     */
    ListResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesResponse = exports.ListResourcesResponse || (exports.ListResourcesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var PutAccessControlRuleRequest;
(function (PutAccessControlRuleRequest) {
    /**
     * @internal
     */
    PutAccessControlRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccessControlRuleRequest = exports.PutAccessControlRuleRequest || (exports.PutAccessControlRuleRequest = {}));
var PutAccessControlRuleResponse;
(function (PutAccessControlRuleResponse) {
    /**
     * @internal
     */
    PutAccessControlRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccessControlRuleResponse = exports.PutAccessControlRuleResponse || (exports.PutAccessControlRuleResponse = {}));
var PutMailboxPermissionsRequest;
(function (PutMailboxPermissionsRequest) {
    /**
     * @internal
     */
    PutMailboxPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMailboxPermissionsRequest = exports.PutMailboxPermissionsRequest || (exports.PutMailboxPermissionsRequest = {}));
var PutMailboxPermissionsResponse;
(function (PutMailboxPermissionsResponse) {
    /**
     * @internal
     */
    PutMailboxPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMailboxPermissionsResponse = exports.PutMailboxPermissionsResponse || (exports.PutMailboxPermissionsResponse = {}));
var PutRetentionPolicyRequest;
(function (PutRetentionPolicyRequest) {
    /**
     * @internal
     */
    PutRetentionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutRetentionPolicyRequest = exports.PutRetentionPolicyRequest || (exports.PutRetentionPolicyRequest = {}));
var PutRetentionPolicyResponse;
(function (PutRetentionPolicyResponse) {
    /**
     * @internal
     */
    PutRetentionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRetentionPolicyResponse = exports.PutRetentionPolicyResponse || (exports.PutRetentionPolicyResponse = {}));
var RegisterToWorkMailRequest;
(function (RegisterToWorkMailRequest) {
    /**
     * @internal
     */
    RegisterToWorkMailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterToWorkMailRequest = exports.RegisterToWorkMailRequest || (exports.RegisterToWorkMailRequest = {}));
var RegisterToWorkMailResponse;
(function (RegisterToWorkMailResponse) {
    /**
     * @internal
     */
    RegisterToWorkMailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterToWorkMailResponse = exports.RegisterToWorkMailResponse || (exports.RegisterToWorkMailResponse = {}));
var ResetPasswordRequest;
(function (ResetPasswordRequest) {
    /**
     * @internal
     */
    ResetPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(ResetPasswordRequest = exports.ResetPasswordRequest || (exports.ResetPasswordRequest = {}));
var ResetPasswordResponse;
(function (ResetPasswordResponse) {
    /**
     * @internal
     */
    ResetPasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetPasswordResponse = exports.ResetPasswordResponse || (exports.ResetPasswordResponse = {}));
var StartMailboxExportJobRequest;
(function (StartMailboxExportJobRequest) {
    /**
     * @internal
     */
    StartMailboxExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMailboxExportJobRequest = exports.StartMailboxExportJobRequest || (exports.StartMailboxExportJobRequest = {}));
var StartMailboxExportJobResponse;
(function (StartMailboxExportJobResponse) {
    /**
     * @internal
     */
    StartMailboxExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMailboxExportJobResponse = exports.StartMailboxExportJobResponse || (exports.StartMailboxExportJobResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateMailboxQuotaRequest;
(function (UpdateMailboxQuotaRequest) {
    /**
     * @internal
     */
    UpdateMailboxQuotaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMailboxQuotaRequest = exports.UpdateMailboxQuotaRequest || (exports.UpdateMailboxQuotaRequest = {}));
var UpdateMailboxQuotaResponse;
(function (UpdateMailboxQuotaResponse) {
    /**
     * @internal
     */
    UpdateMailboxQuotaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMailboxQuotaResponse = exports.UpdateMailboxQuotaResponse || (exports.UpdateMailboxQuotaResponse = {}));
var UpdateMobileDeviceAccessRuleRequest;
(function (UpdateMobileDeviceAccessRuleRequest) {
    /**
     * @internal
     */
    UpdateMobileDeviceAccessRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMobileDeviceAccessRuleRequest = exports.UpdateMobileDeviceAccessRuleRequest || (exports.UpdateMobileDeviceAccessRuleRequest = {}));
var UpdateMobileDeviceAccessRuleResponse;
(function (UpdateMobileDeviceAccessRuleResponse) {
    /**
     * @internal
     */
    UpdateMobileDeviceAccessRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMobileDeviceAccessRuleResponse = exports.UpdateMobileDeviceAccessRuleResponse || (exports.UpdateMobileDeviceAccessRuleResponse = {}));
var UpdatePrimaryEmailAddressRequest;
(function (UpdatePrimaryEmailAddressRequest) {
    /**
     * @internal
     */
    UpdatePrimaryEmailAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePrimaryEmailAddressRequest = exports.UpdatePrimaryEmailAddressRequest || (exports.UpdatePrimaryEmailAddressRequest = {}));
var UpdatePrimaryEmailAddressResponse;
(function (UpdatePrimaryEmailAddressResponse) {
    /**
     * @internal
     */
    UpdatePrimaryEmailAddressResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePrimaryEmailAddressResponse = exports.UpdatePrimaryEmailAddressResponse || (exports.UpdatePrimaryEmailAddressResponse = {}));
var UpdateResourceRequest;
(function (UpdateResourceRequest) {
    /**
     * @internal
     */
    UpdateResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceRequest = exports.UpdateResourceRequest || (exports.UpdateResourceRequest = {}));
var UpdateResourceResponse;
(function (UpdateResourceResponse) {
    /**
     * @internal
     */
    UpdateResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceResponse = exports.UpdateResourceResponse || (exports.UpdateResourceResponse = {}));
//# sourceMappingURL=models_0.js.map