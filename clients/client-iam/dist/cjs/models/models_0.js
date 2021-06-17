"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePolicyVersionResponse = exports.PolicyVersion = exports.CreatePolicyVersionRequest = exports.MalformedPolicyDocumentException = exports.CreatePolicyResponse = exports.Policy = exports.CreatePolicyRequest = exports.CreateOpenIDConnectProviderResponse = exports.CreateOpenIDConnectProviderRequest = exports.CreateLoginProfileResponse = exports.LoginProfile = exports.CreateLoginProfileRequest = exports.CreateInstanceProfileResponse = exports.InstanceProfile = exports.Role = exports.RoleLastUsed = exports.CreateInstanceProfileRequest = exports.Tag = exports.ConcurrentModificationException = exports.CreateGroupResponse = exports.Group = exports.CreateGroupRequest = exports.CreateAccountAliasRequest = exports.CreateAccessKeyResponse = exports.CreateAccessKeyRequest = exports.PasswordPolicyViolationException = exports.InvalidUserTypeException = exports.EntityTemporarilyUnmodifiableException = exports.ChangePasswordRequest = exports.AttachUserPolicyRequest = exports.AttachRolePolicyRequest = exports.PolicyNotAttachableException = exports.AttachGroupPolicyRequest = exports.AttachedPolicy = exports.AttachedPermissionsBoundary = exports.PermissionsBoundaryAttachmentType = exports.AddUserToGroupRequest = exports.UnmodifiableEntityException = exports.EntityAlreadyExistsException = exports.AddRoleToInstanceProfileRequest = exports.ServiceFailureException = exports.NoSuchEntityException = exports.LimitExceededException = exports.InvalidInputException = exports.AddClientIDToOpenIDConnectProviderRequest = exports.AccessKeyMetadata = exports.AccessKeyLastUsed = exports.AccessKey = exports.AccessDetail = exports.AccessAdvisorUsageGranularityType = void 0;
exports.GenerateOrganizationsAccessReportResponse = exports.GenerateOrganizationsAccessReportRequest = exports.GenerateCredentialReportResponse = exports.ReportStateType = exports.InvalidAuthenticationCodeException = exports.EnableMFADeviceRequest = exports.DetachUserPolicyRequest = exports.DetachRolePolicyRequest = exports.DetachGroupPolicyRequest = exports.DeleteVirtualMFADeviceRequest = exports.DeleteUserPolicyRequest = exports.DeleteUserPermissionsBoundaryRequest = exports.DeleteUserRequest = exports.DeleteSSHPublicKeyRequest = exports.DeleteSigningCertificateRequest = exports.DeleteServiceSpecificCredentialRequest = exports.DeleteServiceLinkedRoleResponse = exports.DeleteServiceLinkedRoleRequest = exports.DeleteServerCertificateRequest = exports.DeleteSAMLProviderRequest = exports.DeleteRolePolicyRequest = exports.DeleteRolePermissionsBoundaryRequest = exports.DeleteRoleRequest = exports.DeletePolicyVersionRequest = exports.DeletePolicyRequest = exports.DeleteOpenIDConnectProviderRequest = exports.DeleteLoginProfileRequest = exports.DeleteInstanceProfileRequest = exports.DeleteGroupPolicyRequest = exports.DeleteGroupRequest = exports.DeleteConflictException = exports.DeleteAccountAliasRequest = exports.DeleteAccessKeyRequest = exports.DeactivateMFADeviceRequest = exports.CreateVirtualMFADeviceResponse = exports.VirtualMFADevice = exports.CreateVirtualMFADeviceRequest = exports.CreateUserResponse = exports.User = exports.CreateUserRequest = exports.ServiceNotSupportedException = exports.CreateServiceSpecificCredentialResponse = exports.ServiceSpecificCredential = exports.CreateServiceSpecificCredentialRequest = exports.CreateServiceLinkedRoleResponse = exports.CreateServiceLinkedRoleRequest = exports.CreateSAMLProviderResponse = exports.CreateSAMLProviderRequest = exports.CreateRoleResponse = exports.CreateRoleRequest = void 0;
exports.ServerCertificate = exports.ServerCertificateMetadata = exports.GetServerCertificateRequest = exports.GetSAMLProviderResponse = exports.GetSAMLProviderRequest = exports.GetRolePolicyResponse = exports.GetRolePolicyRequest = exports.GetRoleResponse = exports.GetRoleRequest = exports.GetPolicyVersionResponse = exports.GetPolicyVersionRequest = exports.GetPolicyResponse = exports.GetPolicyRequest = exports.GetOrganizationsAccessReportResponse = exports.ErrorDetails = exports.GetOrganizationsAccessReportRequest = exports.SortKeyType = exports.GetOpenIDConnectProviderResponse = exports.GetOpenIDConnectProviderRequest = exports.GetLoginProfileResponse = exports.GetLoginProfileRequest = exports.GetInstanceProfileResponse = exports.GetInstanceProfileRequest = exports.GetGroupPolicyResponse = exports.GetGroupPolicyRequest = exports.GetGroupResponse = exports.GetGroupRequest = exports.GetCredentialReportResponse = exports.CredentialReportNotReadyException = exports.CredentialReportNotPresentException = exports.CredentialReportExpiredException = exports.GetContextKeysForPrincipalPolicyRequest = exports.GetContextKeysForPolicyResponse = exports.GetContextKeysForCustomPolicyRequest = exports.GetAccountSummaryResponse = exports.GetAccountPasswordPolicyResponse = exports.PasswordPolicy = exports.GetAccountAuthorizationDetailsResponse = exports.UserDetail = exports.RoleDetail = exports.ManagedPolicyDetail = exports.GroupDetail = exports.PolicyDetail = exports.GetAccountAuthorizationDetailsRequest = exports.EntityType = exports.GetAccessKeyLastUsedResponse = exports.GetAccessKeyLastUsedRequest = exports.GenerateServiceLastAccessedDetailsResponse = exports.GenerateServiceLastAccessedDetailsRequest = exports.ReportGenerationLimitExceededException = void 0;
exports.ListInstanceProfileTagsResponse = exports.ListInstanceProfileTagsRequest = exports.ListInstanceProfilesForRoleResponse = exports.ListInstanceProfilesForRoleRequest = exports.ListInstanceProfilesResponse = exports.ListInstanceProfilesRequest = exports.ListGroupsForUserResponse = exports.ListGroupsForUserRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.ListGroupPoliciesResponse = exports.ListGroupPoliciesRequest = exports.ListEntitiesForPolicyResponse = exports.PolicyUser = exports.PolicyRole = exports.PolicyGroup = exports.ListEntitiesForPolicyRequest = exports.ListAttachedUserPoliciesResponse = exports.ListAttachedUserPoliciesRequest = exports.ListAttachedRolePoliciesResponse = exports.ListAttachedRolePoliciesRequest = exports.ListAttachedGroupPoliciesResponse = exports.ListAttachedGroupPoliciesRequest = exports.ListAccountAliasesResponse = exports.ListAccountAliasesRequest = exports.ListAccessKeysResponse = exports.ListAccessKeysRequest = exports.GetUserPolicyResponse = exports.GetUserPolicyRequest = exports.GetUserResponse = exports.GetUserRequest = exports.UnrecognizedPublicKeyEncodingException = exports.GetSSHPublicKeyResponse = exports.SSHPublicKey = exports.GetSSHPublicKeyRequest = exports.GetServiceLinkedRoleDeletionStatusResponse = exports.DeletionTaskStatusType = exports.DeletionTaskFailureReasonType = exports.RoleUsageType = exports.GetServiceLinkedRoleDeletionStatusRequest = exports.GetServiceLastAccessedDetailsWithEntitiesResponse = exports.EntityDetails = exports.EntityInfo = exports.PolicyOwnerEntityType = exports.GetServiceLastAccessedDetailsWithEntitiesRequest = exports.GetServiceLastAccessedDetailsResponse = exports.ServiceLastAccessed = exports.TrackedActionLastAccessed = exports.GetServiceLastAccessedDetailsRequest = exports.GetServerCertificateResponse = void 0;
exports.ListUsersResponse = exports.ListUsersRequest = exports.ListUserPoliciesResponse = exports.ListUserPoliciesRequest = exports.ListSSHPublicKeysResponse = exports.SSHPublicKeyMetadata = exports.ListSSHPublicKeysRequest = exports.ListSigningCertificatesResponse = exports.SigningCertificate = exports.ListSigningCertificatesRequest = exports.ListServiceSpecificCredentialsResponse = exports.ServiceSpecificCredentialMetadata = exports.ListServiceSpecificCredentialsRequest = exports.ListServerCertificateTagsResponse = exports.ListServerCertificateTagsRequest = exports.ListServerCertificatesResponse = exports.ListServerCertificatesRequest = exports.ListSAMLProviderTagsResponse = exports.ListSAMLProviderTagsRequest = exports.ListSAMLProvidersResponse = exports.SAMLProviderListEntry = exports.ListSAMLProvidersRequest = exports.ListRoleTagsResponse = exports.ListRoleTagsRequest = exports.ListRolesResponse = exports.ListRolesRequest = exports.ListRolePoliciesResponse = exports.ListRolePoliciesRequest = exports.ListPolicyVersionsResponse = exports.ListPolicyVersionsRequest = exports.ListPolicyTagsResponse = exports.ListPolicyTagsRequest = exports.ListPoliciesGrantingServiceAccessResponse = exports.ListPoliciesGrantingServiceAccessEntry = exports.PolicyGrantingServiceAccess = exports.PolicyType = exports.ListPoliciesGrantingServiceAccessRequest = exports.ListPoliciesResponse = exports.ListPoliciesRequest = exports.PolicyScopeType = exports.ListOpenIDConnectProviderTagsResponse = exports.ListOpenIDConnectProviderTagsRequest = exports.ListOpenIDConnectProvidersResponse = exports.OpenIDConnectProviderListEntry = exports.ListOpenIDConnectProvidersRequest = exports.ListMFADeviceTagsResponse = exports.ListMFADeviceTagsRequest = exports.ListMFADevicesResponse = exports.MFADevice = exports.ListMFADevicesRequest = void 0;
exports.UntagOpenIDConnectProviderRequest = exports.UntagMFADeviceRequest = exports.UntagInstanceProfileRequest = exports.TagUserRequest = exports.TagServerCertificateRequest = exports.TagSAMLProviderRequest = exports.TagRoleRequest = exports.TagPolicyRequest = exports.TagOpenIDConnectProviderRequest = exports.TagMFADeviceRequest = exports.TagInstanceProfileRequest = exports.SimulatePrincipalPolicyRequest = exports.SimulatePolicyResponse = exports.EvaluationResult = exports.ResourceSpecificResult = exports.PermissionsBoundaryDecisionDetail = exports.OrganizationsDecisionDetail = exports.Statement = exports.PolicySourceType = exports.Position = exports.PolicyEvaluationDecisionType = exports.SimulateCustomPolicyRequest = exports.ContextEntry = exports.ContextKeyTypeEnum = exports.PolicyEvaluationException = exports.SetSecurityTokenServicePreferencesRequest = exports.GlobalEndpointTokenVersion = exports.SetDefaultPolicyVersionRequest = exports.ResyncMFADeviceRequest = exports.ResetServiceSpecificCredentialResponse = exports.ResetServiceSpecificCredentialRequest = exports.RemoveUserFromGroupRequest = exports.RemoveRoleFromInstanceProfileRequest = exports.RemoveClientIDFromOpenIDConnectProviderRequest = exports.PutUserPolicyRequest = exports.PutUserPermissionsBoundaryRequest = exports.PutRolePolicyRequest = exports.PutRolePermissionsBoundaryRequest = exports.PutGroupPolicyRequest = exports.ListVirtualMFADevicesResponse = exports.ListVirtualMFADevicesRequest = exports.ListUserTagsResponse = exports.ListUserTagsRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessAdvisorUsageGranularityType;
(function (AccessAdvisorUsageGranularityType) {
    AccessAdvisorUsageGranularityType["ACTION_LEVEL"] = "ACTION_LEVEL";
    AccessAdvisorUsageGranularityType["SERVICE_LEVEL"] = "SERVICE_LEVEL";
})(AccessAdvisorUsageGranularityType = exports.AccessAdvisorUsageGranularityType || (exports.AccessAdvisorUsageGranularityType = {}));
var AccessDetail;
(function (AccessDetail) {
    /**
     * @internal
     */
    AccessDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDetail = exports.AccessDetail || (exports.AccessDetail = {}));
var AccessKey;
(function (AccessKey) {
    /**
     * @internal
     */
    AccessKey.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretAccessKey && { SecretAccessKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(AccessKey = exports.AccessKey || (exports.AccessKey = {}));
var AccessKeyLastUsed;
(function (AccessKeyLastUsed) {
    /**
     * @internal
     */
    AccessKeyLastUsed.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessKeyLastUsed = exports.AccessKeyLastUsed || (exports.AccessKeyLastUsed = {}));
var AccessKeyMetadata;
(function (AccessKeyMetadata) {
    /**
     * @internal
     */
    AccessKeyMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessKeyMetadata = exports.AccessKeyMetadata || (exports.AccessKeyMetadata = {}));
var AddClientIDToOpenIDConnectProviderRequest;
(function (AddClientIDToOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    AddClientIDToOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddClientIDToOpenIDConnectProviderRequest = exports.AddClientIDToOpenIDConnectProviderRequest || (exports.AddClientIDToOpenIDConnectProviderRequest = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NoSuchEntityException;
(function (NoSuchEntityException) {
    /**
     * @internal
     */
    NoSuchEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchEntityException = exports.NoSuchEntityException || (exports.NoSuchEntityException = {}));
var ServiceFailureException;
(function (ServiceFailureException) {
    /**
     * @internal
     */
    ServiceFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceFailureException = exports.ServiceFailureException || (exports.ServiceFailureException = {}));
var AddRoleToInstanceProfileRequest;
(function (AddRoleToInstanceProfileRequest) {
    /**
     * @internal
     */
    AddRoleToInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRoleToInstanceProfileRequest = exports.AddRoleToInstanceProfileRequest || (exports.AddRoleToInstanceProfileRequest = {}));
var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityAlreadyExistsException = exports.EntityAlreadyExistsException || (exports.EntityAlreadyExistsException = {}));
var UnmodifiableEntityException;
(function (UnmodifiableEntityException) {
    /**
     * @internal
     */
    UnmodifiableEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnmodifiableEntityException = exports.UnmodifiableEntityException || (exports.UnmodifiableEntityException = {}));
var AddUserToGroupRequest;
(function (AddUserToGroupRequest) {
    /**
     * @internal
     */
    AddUserToGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddUserToGroupRequest = exports.AddUserToGroupRequest || (exports.AddUserToGroupRequest = {}));
var PermissionsBoundaryAttachmentType;
(function (PermissionsBoundaryAttachmentType) {
    PermissionsBoundaryAttachmentType["Policy"] = "PermissionsBoundaryPolicy";
})(PermissionsBoundaryAttachmentType = exports.PermissionsBoundaryAttachmentType || (exports.PermissionsBoundaryAttachmentType = {}));
var AttachedPermissionsBoundary;
(function (AttachedPermissionsBoundary) {
    /**
     * @internal
     */
    AttachedPermissionsBoundary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachedPermissionsBoundary = exports.AttachedPermissionsBoundary || (exports.AttachedPermissionsBoundary = {}));
var AttachedPolicy;
(function (AttachedPolicy) {
    /**
     * @internal
     */
    AttachedPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachedPolicy = exports.AttachedPolicy || (exports.AttachedPolicy = {}));
var AttachGroupPolicyRequest;
(function (AttachGroupPolicyRequest) {
    /**
     * @internal
     */
    AttachGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachGroupPolicyRequest = exports.AttachGroupPolicyRequest || (exports.AttachGroupPolicyRequest = {}));
var PolicyNotAttachableException;
(function (PolicyNotAttachableException) {
    /**
     * @internal
     */
    PolicyNotAttachableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyNotAttachableException = exports.PolicyNotAttachableException || (exports.PolicyNotAttachableException = {}));
var AttachRolePolicyRequest;
(function (AttachRolePolicyRequest) {
    /**
     * @internal
     */
    AttachRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachRolePolicyRequest = exports.AttachRolePolicyRequest || (exports.AttachRolePolicyRequest = {}));
var AttachUserPolicyRequest;
(function (AttachUserPolicyRequest) {
    /**
     * @internal
     */
    AttachUserPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachUserPolicyRequest = exports.AttachUserPolicyRequest || (exports.AttachUserPolicyRequest = {}));
var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    /**
     * @internal
     */
    ChangePasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OldPassword && { OldPassword: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.NewPassword && { NewPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(ChangePasswordRequest = exports.ChangePasswordRequest || (exports.ChangePasswordRequest = {}));
var EntityTemporarilyUnmodifiableException;
(function (EntityTemporarilyUnmodifiableException) {
    /**
     * @internal
     */
    EntityTemporarilyUnmodifiableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityTemporarilyUnmodifiableException = exports.EntityTemporarilyUnmodifiableException || (exports.EntityTemporarilyUnmodifiableException = {}));
var InvalidUserTypeException;
(function (InvalidUserTypeException) {
    /**
     * @internal
     */
    InvalidUserTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUserTypeException = exports.InvalidUserTypeException || (exports.InvalidUserTypeException = {}));
var PasswordPolicyViolationException;
(function (PasswordPolicyViolationException) {
    /**
     * @internal
     */
    PasswordPolicyViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PasswordPolicyViolationException = exports.PasswordPolicyViolationException || (exports.PasswordPolicyViolationException = {}));
var CreateAccessKeyRequest;
(function (CreateAccessKeyRequest) {
    /**
     * @internal
     */
    CreateAccessKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessKeyRequest = exports.CreateAccessKeyRequest || (exports.CreateAccessKeyRequest = {}));
var CreateAccessKeyResponse;
(function (CreateAccessKeyResponse) {
    /**
     * @internal
     */
    CreateAccessKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }),
    });
})(CreateAccessKeyResponse = exports.CreateAccessKeyResponse || (exports.CreateAccessKeyResponse = {}));
var CreateAccountAliasRequest;
(function (CreateAccountAliasRequest) {
    /**
     * @internal
     */
    CreateAccountAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountAliasRequest = exports.CreateAccountAliasRequest || (exports.CreateAccountAliasRequest = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    /**
     * @internal
     */
    CreateInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceProfileRequest = exports.CreateInstanceProfileRequest || (exports.CreateInstanceProfileRequest = {}));
var RoleLastUsed;
(function (RoleLastUsed) {
    /**
     * @internal
     */
    RoleLastUsed.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleLastUsed = exports.RoleLastUsed || (exports.RoleLastUsed = {}));
var Role;
(function (Role) {
    /**
     * @internal
     */
    Role.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Role = exports.Role || (exports.Role = {}));
var InstanceProfile;
(function (InstanceProfile) {
    /**
     * @internal
     */
    InstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceProfile = exports.InstanceProfile || (exports.InstanceProfile = {}));
var CreateInstanceProfileResponse;
(function (CreateInstanceProfileResponse) {
    /**
     * @internal
     */
    CreateInstanceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceProfileResponse = exports.CreateInstanceProfileResponse || (exports.CreateInstanceProfileResponse = {}));
var CreateLoginProfileRequest;
(function (CreateLoginProfileRequest) {
    /**
     * @internal
     */
    CreateLoginProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateLoginProfileRequest = exports.CreateLoginProfileRequest || (exports.CreateLoginProfileRequest = {}));
var LoginProfile;
(function (LoginProfile) {
    /**
     * @internal
     */
    LoginProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoginProfile = exports.LoginProfile || (exports.LoginProfile = {}));
var CreateLoginProfileResponse;
(function (CreateLoginProfileResponse) {
    /**
     * @internal
     */
    CreateLoginProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoginProfileResponse = exports.CreateLoginProfileResponse || (exports.CreateLoginProfileResponse = {}));
var CreateOpenIDConnectProviderRequest;
(function (CreateOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    CreateOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpenIDConnectProviderRequest = exports.CreateOpenIDConnectProviderRequest || (exports.CreateOpenIDConnectProviderRequest = {}));
var CreateOpenIDConnectProviderResponse;
(function (CreateOpenIDConnectProviderResponse) {
    /**
     * @internal
     */
    CreateOpenIDConnectProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpenIDConnectProviderResponse = exports.CreateOpenIDConnectProviderResponse || (exports.CreateOpenIDConnectProviderResponse = {}));
var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyRequest = exports.CreatePolicyRequest || (exports.CreatePolicyRequest = {}));
var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Policy = exports.Policy || (exports.Policy = {}));
var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyResponse = exports.CreatePolicyResponse || (exports.CreatePolicyResponse = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var CreatePolicyVersionRequest;
(function (CreatePolicyVersionRequest) {
    /**
     * @internal
     */
    CreatePolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyVersionRequest = exports.CreatePolicyVersionRequest || (exports.CreatePolicyVersionRequest = {}));
var PolicyVersion;
(function (PolicyVersion) {
    /**
     * @internal
     */
    PolicyVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyVersion = exports.PolicyVersion || (exports.PolicyVersion = {}));
var CreatePolicyVersionResponse;
(function (CreatePolicyVersionResponse) {
    /**
     * @internal
     */
    CreatePolicyVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyVersionResponse = exports.CreatePolicyVersionResponse || (exports.CreatePolicyVersionResponse = {}));
var CreateRoleRequest;
(function (CreateRoleRequest) {
    /**
     * @internal
     */
    CreateRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoleRequest = exports.CreateRoleRequest || (exports.CreateRoleRequest = {}));
var CreateRoleResponse;
(function (CreateRoleResponse) {
    /**
     * @internal
     */
    CreateRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoleResponse = exports.CreateRoleResponse || (exports.CreateRoleResponse = {}));
var CreateSAMLProviderRequest;
(function (CreateSAMLProviderRequest) {
    /**
     * @internal
     */
    CreateSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSAMLProviderRequest = exports.CreateSAMLProviderRequest || (exports.CreateSAMLProviderRequest = {}));
var CreateSAMLProviderResponse;
(function (CreateSAMLProviderResponse) {
    /**
     * @internal
     */
    CreateSAMLProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSAMLProviderResponse = exports.CreateSAMLProviderResponse || (exports.CreateSAMLProviderResponse = {}));
var CreateServiceLinkedRoleRequest;
(function (CreateServiceLinkedRoleRequest) {
    /**
     * @internal
     */
    CreateServiceLinkedRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceLinkedRoleRequest = exports.CreateServiceLinkedRoleRequest || (exports.CreateServiceLinkedRoleRequest = {}));
var CreateServiceLinkedRoleResponse;
(function (CreateServiceLinkedRoleResponse) {
    /**
     * @internal
     */
    CreateServiceLinkedRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceLinkedRoleResponse = exports.CreateServiceLinkedRoleResponse || (exports.CreateServiceLinkedRoleResponse = {}));
var CreateServiceSpecificCredentialRequest;
(function (CreateServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    CreateServiceSpecificCredentialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceSpecificCredentialRequest = exports.CreateServiceSpecificCredentialRequest || (exports.CreateServiceSpecificCredentialRequest = {}));
var ServiceSpecificCredential;
(function (ServiceSpecificCredential) {
    /**
     * @internal
     */
    ServiceSpecificCredential.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServicePassword && { ServicePassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(ServiceSpecificCredential = exports.ServiceSpecificCredential || (exports.ServiceSpecificCredential = {}));
var CreateServiceSpecificCredentialResponse;
(function (CreateServiceSpecificCredentialResponse) {
    /**
     * @internal
     */
    CreateServiceSpecificCredentialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServiceSpecificCredential && {
            ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
        }),
    });
})(CreateServiceSpecificCredentialResponse = exports.CreateServiceSpecificCredentialResponse || (exports.CreateServiceSpecificCredentialResponse = {}));
var ServiceNotSupportedException;
(function (ServiceNotSupportedException) {
    /**
     * @internal
     */
    ServiceNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNotSupportedException = exports.ServiceNotSupportedException || (exports.ServiceNotSupportedException = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var CreateVirtualMFADeviceRequest;
(function (CreateVirtualMFADeviceRequest) {
    /**
     * @internal
     */
    CreateVirtualMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVirtualMFADeviceRequest = exports.CreateVirtualMFADeviceRequest || (exports.CreateVirtualMFADeviceRequest = {}));
var VirtualMFADevice;
(function (VirtualMFADevice) {
    /**
     * @internal
     */
    VirtualMFADevice.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Base32StringSeed && { Base32StringSeed: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.QRCodePNG && { QRCodePNG: smithy_client_1.SENSITIVE_STRING }),
    });
})(VirtualMFADevice = exports.VirtualMFADevice || (exports.VirtualMFADevice = {}));
var CreateVirtualMFADeviceResponse;
(function (CreateVirtualMFADeviceResponse) {
    /**
     * @internal
     */
    CreateVirtualMFADeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.VirtualMFADevice && { VirtualMFADevice: VirtualMFADevice.filterSensitiveLog(obj.VirtualMFADevice) }),
    });
})(CreateVirtualMFADeviceResponse = exports.CreateVirtualMFADeviceResponse || (exports.CreateVirtualMFADeviceResponse = {}));
var DeactivateMFADeviceRequest;
(function (DeactivateMFADeviceRequest) {
    /**
     * @internal
     */
    DeactivateMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateMFADeviceRequest = exports.DeactivateMFADeviceRequest || (exports.DeactivateMFADeviceRequest = {}));
var DeleteAccessKeyRequest;
(function (DeleteAccessKeyRequest) {
    /**
     * @internal
     */
    DeleteAccessKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessKeyRequest = exports.DeleteAccessKeyRequest || (exports.DeleteAccessKeyRequest = {}));
var DeleteAccountAliasRequest;
(function (DeleteAccountAliasRequest) {
    /**
     * @internal
     */
    DeleteAccountAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountAliasRequest = exports.DeleteAccountAliasRequest || (exports.DeleteAccountAliasRequest = {}));
var DeleteConflictException;
(function (DeleteConflictException) {
    /**
     * @internal
     */
    DeleteConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConflictException = exports.DeleteConflictException || (exports.DeleteConflictException = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupPolicyRequest;
(function (DeleteGroupPolicyRequest) {
    /**
     * @internal
     */
    DeleteGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupPolicyRequest = exports.DeleteGroupPolicyRequest || (exports.DeleteGroupPolicyRequest = {}));
var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    /**
     * @internal
     */
    DeleteInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceProfileRequest = exports.DeleteInstanceProfileRequest || (exports.DeleteInstanceProfileRequest = {}));
var DeleteLoginProfileRequest;
(function (DeleteLoginProfileRequest) {
    /**
     * @internal
     */
    DeleteLoginProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoginProfileRequest = exports.DeleteLoginProfileRequest || (exports.DeleteLoginProfileRequest = {}));
var DeleteOpenIDConnectProviderRequest;
(function (DeleteOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    DeleteOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOpenIDConnectProviderRequest = exports.DeleteOpenIDConnectProviderRequest || (exports.DeleteOpenIDConnectProviderRequest = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var DeletePolicyVersionRequest;
(function (DeletePolicyVersionRequest) {
    /**
     * @internal
     */
    DeletePolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyVersionRequest = exports.DeletePolicyVersionRequest || (exports.DeletePolicyVersionRequest = {}));
var DeleteRoleRequest;
(function (DeleteRoleRequest) {
    /**
     * @internal
     */
    DeleteRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRoleRequest = exports.DeleteRoleRequest || (exports.DeleteRoleRequest = {}));
var DeleteRolePermissionsBoundaryRequest;
(function (DeleteRolePermissionsBoundaryRequest) {
    /**
     * @internal
     */
    DeleteRolePermissionsBoundaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRolePermissionsBoundaryRequest = exports.DeleteRolePermissionsBoundaryRequest || (exports.DeleteRolePermissionsBoundaryRequest = {}));
var DeleteRolePolicyRequest;
(function (DeleteRolePolicyRequest) {
    /**
     * @internal
     */
    DeleteRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRolePolicyRequest = exports.DeleteRolePolicyRequest || (exports.DeleteRolePolicyRequest = {}));
var DeleteSAMLProviderRequest;
(function (DeleteSAMLProviderRequest) {
    /**
     * @internal
     */
    DeleteSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSAMLProviderRequest = exports.DeleteSAMLProviderRequest || (exports.DeleteSAMLProviderRequest = {}));
var DeleteServerCertificateRequest;
(function (DeleteServerCertificateRequest) {
    /**
     * @internal
     */
    DeleteServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerCertificateRequest = exports.DeleteServerCertificateRequest || (exports.DeleteServerCertificateRequest = {}));
var DeleteServiceLinkedRoleRequest;
(function (DeleteServiceLinkedRoleRequest) {
    /**
     * @internal
     */
    DeleteServiceLinkedRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceLinkedRoleRequest = exports.DeleteServiceLinkedRoleRequest || (exports.DeleteServiceLinkedRoleRequest = {}));
var DeleteServiceLinkedRoleResponse;
(function (DeleteServiceLinkedRoleResponse) {
    /**
     * @internal
     */
    DeleteServiceLinkedRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceLinkedRoleResponse = exports.DeleteServiceLinkedRoleResponse || (exports.DeleteServiceLinkedRoleResponse = {}));
var DeleteServiceSpecificCredentialRequest;
(function (DeleteServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    DeleteServiceSpecificCredentialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceSpecificCredentialRequest = exports.DeleteServiceSpecificCredentialRequest || (exports.DeleteServiceSpecificCredentialRequest = {}));
var DeleteSigningCertificateRequest;
(function (DeleteSigningCertificateRequest) {
    /**
     * @internal
     */
    DeleteSigningCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSigningCertificateRequest = exports.DeleteSigningCertificateRequest || (exports.DeleteSigningCertificateRequest = {}));
var DeleteSSHPublicKeyRequest;
(function (DeleteSSHPublicKeyRequest) {
    /**
     * @internal
     */
    DeleteSSHPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSSHPublicKeyRequest = exports.DeleteSSHPublicKeyRequest || (exports.DeleteSSHPublicKeyRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserPermissionsBoundaryRequest;
(function (DeleteUserPermissionsBoundaryRequest) {
    /**
     * @internal
     */
    DeleteUserPermissionsBoundaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserPermissionsBoundaryRequest = exports.DeleteUserPermissionsBoundaryRequest || (exports.DeleteUserPermissionsBoundaryRequest = {}));
var DeleteUserPolicyRequest;
(function (DeleteUserPolicyRequest) {
    /**
     * @internal
     */
    DeleteUserPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserPolicyRequest = exports.DeleteUserPolicyRequest || (exports.DeleteUserPolicyRequest = {}));
var DeleteVirtualMFADeviceRequest;
(function (DeleteVirtualMFADeviceRequest) {
    /**
     * @internal
     */
    DeleteVirtualMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVirtualMFADeviceRequest = exports.DeleteVirtualMFADeviceRequest || (exports.DeleteVirtualMFADeviceRequest = {}));
var DetachGroupPolicyRequest;
(function (DetachGroupPolicyRequest) {
    /**
     * @internal
     */
    DetachGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachGroupPolicyRequest = exports.DetachGroupPolicyRequest || (exports.DetachGroupPolicyRequest = {}));
var DetachRolePolicyRequest;
(function (DetachRolePolicyRequest) {
    /**
     * @internal
     */
    DetachRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachRolePolicyRequest = exports.DetachRolePolicyRequest || (exports.DetachRolePolicyRequest = {}));
var DetachUserPolicyRequest;
(function (DetachUserPolicyRequest) {
    /**
     * @internal
     */
    DetachUserPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachUserPolicyRequest = exports.DetachUserPolicyRequest || (exports.DetachUserPolicyRequest = {}));
var EnableMFADeviceRequest;
(function (EnableMFADeviceRequest) {
    /**
     * @internal
     */
    EnableMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableMFADeviceRequest = exports.EnableMFADeviceRequest || (exports.EnableMFADeviceRequest = {}));
var InvalidAuthenticationCodeException;
(function (InvalidAuthenticationCodeException) {
    /**
     * @internal
     */
    InvalidAuthenticationCodeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAuthenticationCodeException = exports.InvalidAuthenticationCodeException || (exports.InvalidAuthenticationCodeException = {}));
var ReportStateType;
(function (ReportStateType) {
    ReportStateType["COMPLETE"] = "COMPLETE";
    ReportStateType["INPROGRESS"] = "INPROGRESS";
    ReportStateType["STARTED"] = "STARTED";
})(ReportStateType = exports.ReportStateType || (exports.ReportStateType = {}));
var GenerateCredentialReportResponse;
(function (GenerateCredentialReportResponse) {
    /**
     * @internal
     */
    GenerateCredentialReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateCredentialReportResponse = exports.GenerateCredentialReportResponse || (exports.GenerateCredentialReportResponse = {}));
var GenerateOrganizationsAccessReportRequest;
(function (GenerateOrganizationsAccessReportRequest) {
    /**
     * @internal
     */
    GenerateOrganizationsAccessReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateOrganizationsAccessReportRequest = exports.GenerateOrganizationsAccessReportRequest || (exports.GenerateOrganizationsAccessReportRequest = {}));
var GenerateOrganizationsAccessReportResponse;
(function (GenerateOrganizationsAccessReportResponse) {
    /**
     * @internal
     */
    GenerateOrganizationsAccessReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateOrganizationsAccessReportResponse = exports.GenerateOrganizationsAccessReportResponse || (exports.GenerateOrganizationsAccessReportResponse = {}));
var ReportGenerationLimitExceededException;
(function (ReportGenerationLimitExceededException) {
    /**
     * @internal
     */
    ReportGenerationLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportGenerationLimitExceededException = exports.ReportGenerationLimitExceededException || (exports.ReportGenerationLimitExceededException = {}));
var GenerateServiceLastAccessedDetailsRequest;
(function (GenerateServiceLastAccessedDetailsRequest) {
    /**
     * @internal
     */
    GenerateServiceLastAccessedDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateServiceLastAccessedDetailsRequest = exports.GenerateServiceLastAccessedDetailsRequest || (exports.GenerateServiceLastAccessedDetailsRequest = {}));
var GenerateServiceLastAccessedDetailsResponse;
(function (GenerateServiceLastAccessedDetailsResponse) {
    /**
     * @internal
     */
    GenerateServiceLastAccessedDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateServiceLastAccessedDetailsResponse = exports.GenerateServiceLastAccessedDetailsResponse || (exports.GenerateServiceLastAccessedDetailsResponse = {}));
var GetAccessKeyLastUsedRequest;
(function (GetAccessKeyLastUsedRequest) {
    /**
     * @internal
     */
    GetAccessKeyLastUsedRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessKeyLastUsedRequest = exports.GetAccessKeyLastUsedRequest || (exports.GetAccessKeyLastUsedRequest = {}));
var GetAccessKeyLastUsedResponse;
(function (GetAccessKeyLastUsedResponse) {
    /**
     * @internal
     */
    GetAccessKeyLastUsedResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessKeyLastUsedResponse = exports.GetAccessKeyLastUsedResponse || (exports.GetAccessKeyLastUsedResponse = {}));
var EntityType;
(function (EntityType) {
    EntityType["AWSManagedPolicy"] = "AWSManagedPolicy";
    EntityType["Group"] = "Group";
    EntityType["LocalManagedPolicy"] = "LocalManagedPolicy";
    EntityType["Role"] = "Role";
    EntityType["User"] = "User";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var GetAccountAuthorizationDetailsRequest;
(function (GetAccountAuthorizationDetailsRequest) {
    /**
     * @internal
     */
    GetAccountAuthorizationDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountAuthorizationDetailsRequest = exports.GetAccountAuthorizationDetailsRequest || (exports.GetAccountAuthorizationDetailsRequest = {}));
var PolicyDetail;
(function (PolicyDetail) {
    /**
     * @internal
     */
    PolicyDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyDetail = exports.PolicyDetail || (exports.PolicyDetail = {}));
var GroupDetail;
(function (GroupDetail) {
    /**
     * @internal
     */
    GroupDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupDetail = exports.GroupDetail || (exports.GroupDetail = {}));
var ManagedPolicyDetail;
(function (ManagedPolicyDetail) {
    /**
     * @internal
     */
    ManagedPolicyDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedPolicyDetail = exports.ManagedPolicyDetail || (exports.ManagedPolicyDetail = {}));
var RoleDetail;
(function (RoleDetail) {
    /**
     * @internal
     */
    RoleDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleDetail = exports.RoleDetail || (exports.RoleDetail = {}));
var UserDetail;
(function (UserDetail) {
    /**
     * @internal
     */
    UserDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserDetail = exports.UserDetail || (exports.UserDetail = {}));
var GetAccountAuthorizationDetailsResponse;
(function (GetAccountAuthorizationDetailsResponse) {
    /**
     * @internal
     */
    GetAccountAuthorizationDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountAuthorizationDetailsResponse = exports.GetAccountAuthorizationDetailsResponse || (exports.GetAccountAuthorizationDetailsResponse = {}));
var PasswordPolicy;
(function (PasswordPolicy) {
    /**
     * @internal
     */
    PasswordPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PasswordPolicy = exports.PasswordPolicy || (exports.PasswordPolicy = {}));
var GetAccountPasswordPolicyResponse;
(function (GetAccountPasswordPolicyResponse) {
    /**
     * @internal
     */
    GetAccountPasswordPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountPasswordPolicyResponse = exports.GetAccountPasswordPolicyResponse || (exports.GetAccountPasswordPolicyResponse = {}));
var GetAccountSummaryResponse;
(function (GetAccountSummaryResponse) {
    /**
     * @internal
     */
    GetAccountSummaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountSummaryResponse = exports.GetAccountSummaryResponse || (exports.GetAccountSummaryResponse = {}));
var GetContextKeysForCustomPolicyRequest;
(function (GetContextKeysForCustomPolicyRequest) {
    /**
     * @internal
     */
    GetContextKeysForCustomPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContextKeysForCustomPolicyRequest = exports.GetContextKeysForCustomPolicyRequest || (exports.GetContextKeysForCustomPolicyRequest = {}));
var GetContextKeysForPolicyResponse;
(function (GetContextKeysForPolicyResponse) {
    /**
     * @internal
     */
    GetContextKeysForPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContextKeysForPolicyResponse = exports.GetContextKeysForPolicyResponse || (exports.GetContextKeysForPolicyResponse = {}));
var GetContextKeysForPrincipalPolicyRequest;
(function (GetContextKeysForPrincipalPolicyRequest) {
    /**
     * @internal
     */
    GetContextKeysForPrincipalPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContextKeysForPrincipalPolicyRequest = exports.GetContextKeysForPrincipalPolicyRequest || (exports.GetContextKeysForPrincipalPolicyRequest = {}));
var CredentialReportExpiredException;
(function (CredentialReportExpiredException) {
    /**
     * @internal
     */
    CredentialReportExpiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CredentialReportExpiredException = exports.CredentialReportExpiredException || (exports.CredentialReportExpiredException = {}));
var CredentialReportNotPresentException;
(function (CredentialReportNotPresentException) {
    /**
     * @internal
     */
    CredentialReportNotPresentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CredentialReportNotPresentException = exports.CredentialReportNotPresentException || (exports.CredentialReportNotPresentException = {}));
var CredentialReportNotReadyException;
(function (CredentialReportNotReadyException) {
    /**
     * @internal
     */
    CredentialReportNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CredentialReportNotReadyException = exports.CredentialReportNotReadyException || (exports.CredentialReportNotReadyException = {}));
var GetCredentialReportResponse;
(function (GetCredentialReportResponse) {
    /**
     * @internal
     */
    GetCredentialReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCredentialReportResponse = exports.GetCredentialReportResponse || (exports.GetCredentialReportResponse = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResponse;
(function (GetGroupResponse) {
    /**
     * @internal
     */
    GetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupResponse = exports.GetGroupResponse || (exports.GetGroupResponse = {}));
var GetGroupPolicyRequest;
(function (GetGroupPolicyRequest) {
    /**
     * @internal
     */
    GetGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupPolicyRequest = exports.GetGroupPolicyRequest || (exports.GetGroupPolicyRequest = {}));
var GetGroupPolicyResponse;
(function (GetGroupPolicyResponse) {
    /**
     * @internal
     */
    GetGroupPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupPolicyResponse = exports.GetGroupPolicyResponse || (exports.GetGroupPolicyResponse = {}));
var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    /**
     * @internal
     */
    GetInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceProfileRequest = exports.GetInstanceProfileRequest || (exports.GetInstanceProfileRequest = {}));
var GetInstanceProfileResponse;
(function (GetInstanceProfileResponse) {
    /**
     * @internal
     */
    GetInstanceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceProfileResponse = exports.GetInstanceProfileResponse || (exports.GetInstanceProfileResponse = {}));
var GetLoginProfileRequest;
(function (GetLoginProfileRequest) {
    /**
     * @internal
     */
    GetLoginProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoginProfileRequest = exports.GetLoginProfileRequest || (exports.GetLoginProfileRequest = {}));
var GetLoginProfileResponse;
(function (GetLoginProfileResponse) {
    /**
     * @internal
     */
    GetLoginProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoginProfileResponse = exports.GetLoginProfileResponse || (exports.GetLoginProfileResponse = {}));
var GetOpenIDConnectProviderRequest;
(function (GetOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    GetOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIDConnectProviderRequest = exports.GetOpenIDConnectProviderRequest || (exports.GetOpenIDConnectProviderRequest = {}));
var GetOpenIDConnectProviderResponse;
(function (GetOpenIDConnectProviderResponse) {
    /**
     * @internal
     */
    GetOpenIDConnectProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIDConnectProviderResponse = exports.GetOpenIDConnectProviderResponse || (exports.GetOpenIDConnectProviderResponse = {}));
var SortKeyType;
(function (SortKeyType) {
    SortKeyType["LAST_AUTHENTICATED_TIME_ASCENDING"] = "LAST_AUTHENTICATED_TIME_ASCENDING";
    SortKeyType["LAST_AUTHENTICATED_TIME_DESCENDING"] = "LAST_AUTHENTICATED_TIME_DESCENDING";
    SortKeyType["SERVICE_NAMESPACE_ASCENDING"] = "SERVICE_NAMESPACE_ASCENDING";
    SortKeyType["SERVICE_NAMESPACE_DESCENDING"] = "SERVICE_NAMESPACE_DESCENDING";
})(SortKeyType = exports.SortKeyType || (exports.SortKeyType = {}));
var GetOrganizationsAccessReportRequest;
(function (GetOrganizationsAccessReportRequest) {
    /**
     * @internal
     */
    GetOrganizationsAccessReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationsAccessReportRequest = exports.GetOrganizationsAccessReportRequest || (exports.GetOrganizationsAccessReportRequest = {}));
var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var GetOrganizationsAccessReportResponse;
(function (GetOrganizationsAccessReportResponse) {
    /**
     * @internal
     */
    GetOrganizationsAccessReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationsAccessReportResponse = exports.GetOrganizationsAccessReportResponse || (exports.GetOrganizationsAccessReportResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var GetPolicyVersionRequest;
(function (GetPolicyVersionRequest) {
    /**
     * @internal
     */
    GetPolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyVersionRequest = exports.GetPolicyVersionRequest || (exports.GetPolicyVersionRequest = {}));
var GetPolicyVersionResponse;
(function (GetPolicyVersionResponse) {
    /**
     * @internal
     */
    GetPolicyVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyVersionResponse = exports.GetPolicyVersionResponse || (exports.GetPolicyVersionResponse = {}));
var GetRoleRequest;
(function (GetRoleRequest) {
    /**
     * @internal
     */
    GetRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRoleRequest = exports.GetRoleRequest || (exports.GetRoleRequest = {}));
var GetRoleResponse;
(function (GetRoleResponse) {
    /**
     * @internal
     */
    GetRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRoleResponse = exports.GetRoleResponse || (exports.GetRoleResponse = {}));
var GetRolePolicyRequest;
(function (GetRolePolicyRequest) {
    /**
     * @internal
     */
    GetRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRolePolicyRequest = exports.GetRolePolicyRequest || (exports.GetRolePolicyRequest = {}));
var GetRolePolicyResponse;
(function (GetRolePolicyResponse) {
    /**
     * @internal
     */
    GetRolePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRolePolicyResponse = exports.GetRolePolicyResponse || (exports.GetRolePolicyResponse = {}));
var GetSAMLProviderRequest;
(function (GetSAMLProviderRequest) {
    /**
     * @internal
     */
    GetSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSAMLProviderRequest = exports.GetSAMLProviderRequest || (exports.GetSAMLProviderRequest = {}));
var GetSAMLProviderResponse;
(function (GetSAMLProviderResponse) {
    /**
     * @internal
     */
    GetSAMLProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSAMLProviderResponse = exports.GetSAMLProviderResponse || (exports.GetSAMLProviderResponse = {}));
var GetServerCertificateRequest;
(function (GetServerCertificateRequest) {
    /**
     * @internal
     */
    GetServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServerCertificateRequest = exports.GetServerCertificateRequest || (exports.GetServerCertificateRequest = {}));
var ServerCertificateMetadata;
(function (ServerCertificateMetadata) {
    /**
     * @internal
     */
    ServerCertificateMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerCertificateMetadata = exports.ServerCertificateMetadata || (exports.ServerCertificateMetadata = {}));
var ServerCertificate;
(function (ServerCertificate) {
    /**
     * @internal
     */
    ServerCertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerCertificate = exports.ServerCertificate || (exports.ServerCertificate = {}));
var GetServerCertificateResponse;
(function (GetServerCertificateResponse) {
    /**
     * @internal
     */
    GetServerCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServerCertificateResponse = exports.GetServerCertificateResponse || (exports.GetServerCertificateResponse = {}));
var GetServiceLastAccessedDetailsRequest;
(function (GetServiceLastAccessedDetailsRequest) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLastAccessedDetailsRequest = exports.GetServiceLastAccessedDetailsRequest || (exports.GetServiceLastAccessedDetailsRequest = {}));
var TrackedActionLastAccessed;
(function (TrackedActionLastAccessed) {
    /**
     * @internal
     */
    TrackedActionLastAccessed.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrackedActionLastAccessed = exports.TrackedActionLastAccessed || (exports.TrackedActionLastAccessed = {}));
var ServiceLastAccessed;
(function (ServiceLastAccessed) {
    /**
     * @internal
     */
    ServiceLastAccessed.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLastAccessed = exports.ServiceLastAccessed || (exports.ServiceLastAccessed = {}));
var GetServiceLastAccessedDetailsResponse;
(function (GetServiceLastAccessedDetailsResponse) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLastAccessedDetailsResponse = exports.GetServiceLastAccessedDetailsResponse || (exports.GetServiceLastAccessedDetailsResponse = {}));
var GetServiceLastAccessedDetailsWithEntitiesRequest;
(function (GetServiceLastAccessedDetailsWithEntitiesRequest) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLastAccessedDetailsWithEntitiesRequest = exports.GetServiceLastAccessedDetailsWithEntitiesRequest || (exports.GetServiceLastAccessedDetailsWithEntitiesRequest = {}));
var PolicyOwnerEntityType;
(function (PolicyOwnerEntityType) {
    PolicyOwnerEntityType["GROUP"] = "GROUP";
    PolicyOwnerEntityType["ROLE"] = "ROLE";
    PolicyOwnerEntityType["USER"] = "USER";
})(PolicyOwnerEntityType = exports.PolicyOwnerEntityType || (exports.PolicyOwnerEntityType = {}));
var EntityInfo;
(function (EntityInfo) {
    /**
     * @internal
     */
    EntityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityInfo = exports.EntityInfo || (exports.EntityInfo = {}));
var EntityDetails;
(function (EntityDetails) {
    /**
     * @internal
     */
    EntityDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityDetails = exports.EntityDetails || (exports.EntityDetails = {}));
var GetServiceLastAccessedDetailsWithEntitiesResponse;
(function (GetServiceLastAccessedDetailsWithEntitiesResponse) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLastAccessedDetailsWithEntitiesResponse = exports.GetServiceLastAccessedDetailsWithEntitiesResponse || (exports.GetServiceLastAccessedDetailsWithEntitiesResponse = {}));
var GetServiceLinkedRoleDeletionStatusRequest;
(function (GetServiceLinkedRoleDeletionStatusRequest) {
    /**
     * @internal
     */
    GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLinkedRoleDeletionStatusRequest = exports.GetServiceLinkedRoleDeletionStatusRequest || (exports.GetServiceLinkedRoleDeletionStatusRequest = {}));
var RoleUsageType;
(function (RoleUsageType) {
    /**
     * @internal
     */
    RoleUsageType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleUsageType = exports.RoleUsageType || (exports.RoleUsageType = {}));
var DeletionTaskFailureReasonType;
(function (DeletionTaskFailureReasonType) {
    /**
     * @internal
     */
    DeletionTaskFailureReasonType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletionTaskFailureReasonType = exports.DeletionTaskFailureReasonType || (exports.DeletionTaskFailureReasonType = {}));
var DeletionTaskStatusType;
(function (DeletionTaskStatusType) {
    DeletionTaskStatusType["FAILED"] = "FAILED";
    DeletionTaskStatusType["IN_PROGRESS"] = "IN_PROGRESS";
    DeletionTaskStatusType["NOT_STARTED"] = "NOT_STARTED";
    DeletionTaskStatusType["SUCCEEDED"] = "SUCCEEDED";
})(DeletionTaskStatusType = exports.DeletionTaskStatusType || (exports.DeletionTaskStatusType = {}));
var GetServiceLinkedRoleDeletionStatusResponse;
(function (GetServiceLinkedRoleDeletionStatusResponse) {
    /**
     * @internal
     */
    GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceLinkedRoleDeletionStatusResponse = exports.GetServiceLinkedRoleDeletionStatusResponse || (exports.GetServiceLinkedRoleDeletionStatusResponse = {}));
var GetSSHPublicKeyRequest;
(function (GetSSHPublicKeyRequest) {
    /**
     * @internal
     */
    GetSSHPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSSHPublicKeyRequest = exports.GetSSHPublicKeyRequest || (exports.GetSSHPublicKeyRequest = {}));
var SSHPublicKey;
(function (SSHPublicKey) {
    /**
     * @internal
     */
    SSHPublicKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSHPublicKey = exports.SSHPublicKey || (exports.SSHPublicKey = {}));
var GetSSHPublicKeyResponse;
(function (GetSSHPublicKeyResponse) {
    /**
     * @internal
     */
    GetSSHPublicKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSSHPublicKeyResponse = exports.GetSSHPublicKeyResponse || (exports.GetSSHPublicKeyResponse = {}));
var UnrecognizedPublicKeyEncodingException;
(function (UnrecognizedPublicKeyEncodingException) {
    /**
     * @internal
     */
    UnrecognizedPublicKeyEncodingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnrecognizedPublicKeyEncodingException = exports.UnrecognizedPublicKeyEncodingException || (exports.UnrecognizedPublicKeyEncodingException = {}));
var GetUserRequest;
(function (GetUserRequest) {
    /**
     * @internal
     */
    GetUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserRequest = exports.GetUserRequest || (exports.GetUserRequest = {}));
var GetUserResponse;
(function (GetUserResponse) {
    /**
     * @internal
     */
    GetUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserResponse = exports.GetUserResponse || (exports.GetUserResponse = {}));
var GetUserPolicyRequest;
(function (GetUserPolicyRequest) {
    /**
     * @internal
     */
    GetUserPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserPolicyRequest = exports.GetUserPolicyRequest || (exports.GetUserPolicyRequest = {}));
var GetUserPolicyResponse;
(function (GetUserPolicyResponse) {
    /**
     * @internal
     */
    GetUserPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserPolicyResponse = exports.GetUserPolicyResponse || (exports.GetUserPolicyResponse = {}));
var ListAccessKeysRequest;
(function (ListAccessKeysRequest) {
    /**
     * @internal
     */
    ListAccessKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessKeysRequest = exports.ListAccessKeysRequest || (exports.ListAccessKeysRequest = {}));
var ListAccessKeysResponse;
(function (ListAccessKeysResponse) {
    /**
     * @internal
     */
    ListAccessKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessKeysResponse = exports.ListAccessKeysResponse || (exports.ListAccessKeysResponse = {}));
var ListAccountAliasesRequest;
(function (ListAccountAliasesRequest) {
    /**
     * @internal
     */
    ListAccountAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAliasesRequest = exports.ListAccountAliasesRequest || (exports.ListAccountAliasesRequest = {}));
var ListAccountAliasesResponse;
(function (ListAccountAliasesResponse) {
    /**
     * @internal
     */
    ListAccountAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAliasesResponse = exports.ListAccountAliasesResponse || (exports.ListAccountAliasesResponse = {}));
var ListAttachedGroupPoliciesRequest;
(function (ListAttachedGroupPoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedGroupPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedGroupPoliciesRequest = exports.ListAttachedGroupPoliciesRequest || (exports.ListAttachedGroupPoliciesRequest = {}));
var ListAttachedGroupPoliciesResponse;
(function (ListAttachedGroupPoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedGroupPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedGroupPoliciesResponse = exports.ListAttachedGroupPoliciesResponse || (exports.ListAttachedGroupPoliciesResponse = {}));
var ListAttachedRolePoliciesRequest;
(function (ListAttachedRolePoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedRolePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedRolePoliciesRequest = exports.ListAttachedRolePoliciesRequest || (exports.ListAttachedRolePoliciesRequest = {}));
var ListAttachedRolePoliciesResponse;
(function (ListAttachedRolePoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedRolePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedRolePoliciesResponse = exports.ListAttachedRolePoliciesResponse || (exports.ListAttachedRolePoliciesResponse = {}));
var ListAttachedUserPoliciesRequest;
(function (ListAttachedUserPoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedUserPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedUserPoliciesRequest = exports.ListAttachedUserPoliciesRequest || (exports.ListAttachedUserPoliciesRequest = {}));
var ListAttachedUserPoliciesResponse;
(function (ListAttachedUserPoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedUserPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedUserPoliciesResponse = exports.ListAttachedUserPoliciesResponse || (exports.ListAttachedUserPoliciesResponse = {}));
var ListEntitiesForPolicyRequest;
(function (ListEntitiesForPolicyRequest) {
    /**
     * @internal
     */
    ListEntitiesForPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesForPolicyRequest = exports.ListEntitiesForPolicyRequest || (exports.ListEntitiesForPolicyRequest = {}));
var PolicyGroup;
(function (PolicyGroup) {
    /**
     * @internal
     */
    PolicyGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyGroup = exports.PolicyGroup || (exports.PolicyGroup = {}));
var PolicyRole;
(function (PolicyRole) {
    /**
     * @internal
     */
    PolicyRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyRole = exports.PolicyRole || (exports.PolicyRole = {}));
var PolicyUser;
(function (PolicyUser) {
    /**
     * @internal
     */
    PolicyUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyUser = exports.PolicyUser || (exports.PolicyUser = {}));
var ListEntitiesForPolicyResponse;
(function (ListEntitiesForPolicyResponse) {
    /**
     * @internal
     */
    ListEntitiesForPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesForPolicyResponse = exports.ListEntitiesForPolicyResponse || (exports.ListEntitiesForPolicyResponse = {}));
var ListGroupPoliciesRequest;
(function (ListGroupPoliciesRequest) {
    /**
     * @internal
     */
    ListGroupPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupPoliciesRequest = exports.ListGroupPoliciesRequest || (exports.ListGroupPoliciesRequest = {}));
var ListGroupPoliciesResponse;
(function (ListGroupPoliciesResponse) {
    /**
     * @internal
     */
    ListGroupPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupPoliciesResponse = exports.ListGroupPoliciesResponse || (exports.ListGroupPoliciesResponse = {}));
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
var ListGroupsForUserRequest;
(function (ListGroupsForUserRequest) {
    /**
     * @internal
     */
    ListGroupsForUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsForUserRequest = exports.ListGroupsForUserRequest || (exports.ListGroupsForUserRequest = {}));
var ListGroupsForUserResponse;
(function (ListGroupsForUserResponse) {
    /**
     * @internal
     */
    ListGroupsForUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsForUserResponse = exports.ListGroupsForUserResponse || (exports.ListGroupsForUserResponse = {}));
var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesRequest = exports.ListInstanceProfilesRequest || (exports.ListInstanceProfilesRequest = {}));
var ListInstanceProfilesResponse;
(function (ListInstanceProfilesResponse) {
    /**
     * @internal
     */
    ListInstanceProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesResponse = exports.ListInstanceProfilesResponse || (exports.ListInstanceProfilesResponse = {}));
var ListInstanceProfilesForRoleRequest;
(function (ListInstanceProfilesForRoleRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesForRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesForRoleRequest = exports.ListInstanceProfilesForRoleRequest || (exports.ListInstanceProfilesForRoleRequest = {}));
var ListInstanceProfilesForRoleResponse;
(function (ListInstanceProfilesForRoleResponse) {
    /**
     * @internal
     */
    ListInstanceProfilesForRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesForRoleResponse = exports.ListInstanceProfilesForRoleResponse || (exports.ListInstanceProfilesForRoleResponse = {}));
var ListInstanceProfileTagsRequest;
(function (ListInstanceProfileTagsRequest) {
    /**
     * @internal
     */
    ListInstanceProfileTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfileTagsRequest = exports.ListInstanceProfileTagsRequest || (exports.ListInstanceProfileTagsRequest = {}));
var ListInstanceProfileTagsResponse;
(function (ListInstanceProfileTagsResponse) {
    /**
     * @internal
     */
    ListInstanceProfileTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfileTagsResponse = exports.ListInstanceProfileTagsResponse || (exports.ListInstanceProfileTagsResponse = {}));
var ListMFADevicesRequest;
(function (ListMFADevicesRequest) {
    /**
     * @internal
     */
    ListMFADevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMFADevicesRequest = exports.ListMFADevicesRequest || (exports.ListMFADevicesRequest = {}));
var MFADevice;
(function (MFADevice) {
    /**
     * @internal
     */
    MFADevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MFADevice = exports.MFADevice || (exports.MFADevice = {}));
var ListMFADevicesResponse;
(function (ListMFADevicesResponse) {
    /**
     * @internal
     */
    ListMFADevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMFADevicesResponse = exports.ListMFADevicesResponse || (exports.ListMFADevicesResponse = {}));
var ListMFADeviceTagsRequest;
(function (ListMFADeviceTagsRequest) {
    /**
     * @internal
     */
    ListMFADeviceTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMFADeviceTagsRequest = exports.ListMFADeviceTagsRequest || (exports.ListMFADeviceTagsRequest = {}));
var ListMFADeviceTagsResponse;
(function (ListMFADeviceTagsResponse) {
    /**
     * @internal
     */
    ListMFADeviceTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMFADeviceTagsResponse = exports.ListMFADeviceTagsResponse || (exports.ListMFADeviceTagsResponse = {}));
var ListOpenIDConnectProvidersRequest;
(function (ListOpenIDConnectProvidersRequest) {
    /**
     * @internal
     */
    ListOpenIDConnectProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpenIDConnectProvidersRequest = exports.ListOpenIDConnectProvidersRequest || (exports.ListOpenIDConnectProvidersRequest = {}));
var OpenIDConnectProviderListEntry;
(function (OpenIDConnectProviderListEntry) {
    /**
     * @internal
     */
    OpenIDConnectProviderListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenIDConnectProviderListEntry = exports.OpenIDConnectProviderListEntry || (exports.OpenIDConnectProviderListEntry = {}));
var ListOpenIDConnectProvidersResponse;
(function (ListOpenIDConnectProvidersResponse) {
    /**
     * @internal
     */
    ListOpenIDConnectProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpenIDConnectProvidersResponse = exports.ListOpenIDConnectProvidersResponse || (exports.ListOpenIDConnectProvidersResponse = {}));
var ListOpenIDConnectProviderTagsRequest;
(function (ListOpenIDConnectProviderTagsRequest) {
    /**
     * @internal
     */
    ListOpenIDConnectProviderTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpenIDConnectProviderTagsRequest = exports.ListOpenIDConnectProviderTagsRequest || (exports.ListOpenIDConnectProviderTagsRequest = {}));
var ListOpenIDConnectProviderTagsResponse;
(function (ListOpenIDConnectProviderTagsResponse) {
    /**
     * @internal
     */
    ListOpenIDConnectProviderTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpenIDConnectProviderTagsResponse = exports.ListOpenIDConnectProviderTagsResponse || (exports.ListOpenIDConnectProviderTagsResponse = {}));
var PolicyScopeType;
(function (PolicyScopeType) {
    PolicyScopeType["AWS"] = "AWS";
    PolicyScopeType["All"] = "All";
    PolicyScopeType["Local"] = "Local";
})(PolicyScopeType = exports.PolicyScopeType || (exports.PolicyScopeType = {}));
var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesRequest = exports.ListPoliciesRequest || (exports.ListPoliciesRequest = {}));
var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesResponse = exports.ListPoliciesResponse || (exports.ListPoliciesResponse = {}));
var ListPoliciesGrantingServiceAccessRequest;
(function (ListPoliciesGrantingServiceAccessRequest) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesGrantingServiceAccessRequest = exports.ListPoliciesGrantingServiceAccessRequest || (exports.ListPoliciesGrantingServiceAccessRequest = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["INLINE"] = "INLINE";
    PolicyType["MANAGED"] = "MANAGED";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var PolicyGrantingServiceAccess;
(function (PolicyGrantingServiceAccess) {
    /**
     * @internal
     */
    PolicyGrantingServiceAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyGrantingServiceAccess = exports.PolicyGrantingServiceAccess || (exports.PolicyGrantingServiceAccess = {}));
var ListPoliciesGrantingServiceAccessEntry;
(function (ListPoliciesGrantingServiceAccessEntry) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesGrantingServiceAccessEntry = exports.ListPoliciesGrantingServiceAccessEntry || (exports.ListPoliciesGrantingServiceAccessEntry = {}));
var ListPoliciesGrantingServiceAccessResponse;
(function (ListPoliciesGrantingServiceAccessResponse) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesGrantingServiceAccessResponse = exports.ListPoliciesGrantingServiceAccessResponse || (exports.ListPoliciesGrantingServiceAccessResponse = {}));
var ListPolicyTagsRequest;
(function (ListPolicyTagsRequest) {
    /**
     * @internal
     */
    ListPolicyTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyTagsRequest = exports.ListPolicyTagsRequest || (exports.ListPolicyTagsRequest = {}));
var ListPolicyTagsResponse;
(function (ListPolicyTagsResponse) {
    /**
     * @internal
     */
    ListPolicyTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyTagsResponse = exports.ListPolicyTagsResponse || (exports.ListPolicyTagsResponse = {}));
var ListPolicyVersionsRequest;
(function (ListPolicyVersionsRequest) {
    /**
     * @internal
     */
    ListPolicyVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyVersionsRequest = exports.ListPolicyVersionsRequest || (exports.ListPolicyVersionsRequest = {}));
var ListPolicyVersionsResponse;
(function (ListPolicyVersionsResponse) {
    /**
     * @internal
     */
    ListPolicyVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyVersionsResponse = exports.ListPolicyVersionsResponse || (exports.ListPolicyVersionsResponse = {}));
var ListRolePoliciesRequest;
(function (ListRolePoliciesRequest) {
    /**
     * @internal
     */
    ListRolePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRolePoliciesRequest = exports.ListRolePoliciesRequest || (exports.ListRolePoliciesRequest = {}));
var ListRolePoliciesResponse;
(function (ListRolePoliciesResponse) {
    /**
     * @internal
     */
    ListRolePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRolePoliciesResponse = exports.ListRolePoliciesResponse || (exports.ListRolePoliciesResponse = {}));
var ListRolesRequest;
(function (ListRolesRequest) {
    /**
     * @internal
     */
    ListRolesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRolesRequest = exports.ListRolesRequest || (exports.ListRolesRequest = {}));
var ListRolesResponse;
(function (ListRolesResponse) {
    /**
     * @internal
     */
    ListRolesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRolesResponse = exports.ListRolesResponse || (exports.ListRolesResponse = {}));
var ListRoleTagsRequest;
(function (ListRoleTagsRequest) {
    /**
     * @internal
     */
    ListRoleTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoleTagsRequest = exports.ListRoleTagsRequest || (exports.ListRoleTagsRequest = {}));
var ListRoleTagsResponse;
(function (ListRoleTagsResponse) {
    /**
     * @internal
     */
    ListRoleTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoleTagsResponse = exports.ListRoleTagsResponse || (exports.ListRoleTagsResponse = {}));
var ListSAMLProvidersRequest;
(function (ListSAMLProvidersRequest) {
    /**
     * @internal
     */
    ListSAMLProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSAMLProvidersRequest = exports.ListSAMLProvidersRequest || (exports.ListSAMLProvidersRequest = {}));
var SAMLProviderListEntry;
(function (SAMLProviderListEntry) {
    /**
     * @internal
     */
    SAMLProviderListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SAMLProviderListEntry = exports.SAMLProviderListEntry || (exports.SAMLProviderListEntry = {}));
var ListSAMLProvidersResponse;
(function (ListSAMLProvidersResponse) {
    /**
     * @internal
     */
    ListSAMLProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSAMLProvidersResponse = exports.ListSAMLProvidersResponse || (exports.ListSAMLProvidersResponse = {}));
var ListSAMLProviderTagsRequest;
(function (ListSAMLProviderTagsRequest) {
    /**
     * @internal
     */
    ListSAMLProviderTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSAMLProviderTagsRequest = exports.ListSAMLProviderTagsRequest || (exports.ListSAMLProviderTagsRequest = {}));
var ListSAMLProviderTagsResponse;
(function (ListSAMLProviderTagsResponse) {
    /**
     * @internal
     */
    ListSAMLProviderTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSAMLProviderTagsResponse = exports.ListSAMLProviderTagsResponse || (exports.ListSAMLProviderTagsResponse = {}));
var ListServerCertificatesRequest;
(function (ListServerCertificatesRequest) {
    /**
     * @internal
     */
    ListServerCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServerCertificatesRequest = exports.ListServerCertificatesRequest || (exports.ListServerCertificatesRequest = {}));
var ListServerCertificatesResponse;
(function (ListServerCertificatesResponse) {
    /**
     * @internal
     */
    ListServerCertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServerCertificatesResponse = exports.ListServerCertificatesResponse || (exports.ListServerCertificatesResponse = {}));
var ListServerCertificateTagsRequest;
(function (ListServerCertificateTagsRequest) {
    /**
     * @internal
     */
    ListServerCertificateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServerCertificateTagsRequest = exports.ListServerCertificateTagsRequest || (exports.ListServerCertificateTagsRequest = {}));
var ListServerCertificateTagsResponse;
(function (ListServerCertificateTagsResponse) {
    /**
     * @internal
     */
    ListServerCertificateTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServerCertificateTagsResponse = exports.ListServerCertificateTagsResponse || (exports.ListServerCertificateTagsResponse = {}));
var ListServiceSpecificCredentialsRequest;
(function (ListServiceSpecificCredentialsRequest) {
    /**
     * @internal
     */
    ListServiceSpecificCredentialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceSpecificCredentialsRequest = exports.ListServiceSpecificCredentialsRequest || (exports.ListServiceSpecificCredentialsRequest = {}));
var ServiceSpecificCredentialMetadata;
(function (ServiceSpecificCredentialMetadata) {
    /**
     * @internal
     */
    ServiceSpecificCredentialMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSpecificCredentialMetadata = exports.ServiceSpecificCredentialMetadata || (exports.ServiceSpecificCredentialMetadata = {}));
var ListServiceSpecificCredentialsResponse;
(function (ListServiceSpecificCredentialsResponse) {
    /**
     * @internal
     */
    ListServiceSpecificCredentialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceSpecificCredentialsResponse = exports.ListServiceSpecificCredentialsResponse || (exports.ListServiceSpecificCredentialsResponse = {}));
var ListSigningCertificatesRequest;
(function (ListSigningCertificatesRequest) {
    /**
     * @internal
     */
    ListSigningCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningCertificatesRequest = exports.ListSigningCertificatesRequest || (exports.ListSigningCertificatesRequest = {}));
var SigningCertificate;
(function (SigningCertificate) {
    /**
     * @internal
     */
    SigningCertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningCertificate = exports.SigningCertificate || (exports.SigningCertificate = {}));
var ListSigningCertificatesResponse;
(function (ListSigningCertificatesResponse) {
    /**
     * @internal
     */
    ListSigningCertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningCertificatesResponse = exports.ListSigningCertificatesResponse || (exports.ListSigningCertificatesResponse = {}));
var ListSSHPublicKeysRequest;
(function (ListSSHPublicKeysRequest) {
    /**
     * @internal
     */
    ListSSHPublicKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSSHPublicKeysRequest = exports.ListSSHPublicKeysRequest || (exports.ListSSHPublicKeysRequest = {}));
var SSHPublicKeyMetadata;
(function (SSHPublicKeyMetadata) {
    /**
     * @internal
     */
    SSHPublicKeyMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSHPublicKeyMetadata = exports.SSHPublicKeyMetadata || (exports.SSHPublicKeyMetadata = {}));
var ListSSHPublicKeysResponse;
(function (ListSSHPublicKeysResponse) {
    /**
     * @internal
     */
    ListSSHPublicKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSSHPublicKeysResponse = exports.ListSSHPublicKeysResponse || (exports.ListSSHPublicKeysResponse = {}));
var ListUserPoliciesRequest;
(function (ListUserPoliciesRequest) {
    /**
     * @internal
     */
    ListUserPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserPoliciesRequest = exports.ListUserPoliciesRequest || (exports.ListUserPoliciesRequest = {}));
var ListUserPoliciesResponse;
(function (ListUserPoliciesResponse) {
    /**
     * @internal
     */
    ListUserPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserPoliciesResponse = exports.ListUserPoliciesResponse || (exports.ListUserPoliciesResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var ListUserTagsRequest;
(function (ListUserTagsRequest) {
    /**
     * @internal
     */
    ListUserTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserTagsRequest = exports.ListUserTagsRequest || (exports.ListUserTagsRequest = {}));
var ListUserTagsResponse;
(function (ListUserTagsResponse) {
    /**
     * @internal
     */
    ListUserTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserTagsResponse = exports.ListUserTagsResponse || (exports.ListUserTagsResponse = {}));
var ListVirtualMFADevicesRequest;
(function (ListVirtualMFADevicesRequest) {
    /**
     * @internal
     */
    ListVirtualMFADevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVirtualMFADevicesRequest = exports.ListVirtualMFADevicesRequest || (exports.ListVirtualMFADevicesRequest = {}));
var ListVirtualMFADevicesResponse;
(function (ListVirtualMFADevicesResponse) {
    /**
     * @internal
     */
    ListVirtualMFADevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.VirtualMFADevices && {
            VirtualMFADevices: obj.VirtualMFADevices.map((item) => VirtualMFADevice.filterSensitiveLog(item)),
        }),
    });
})(ListVirtualMFADevicesResponse = exports.ListVirtualMFADevicesResponse || (exports.ListVirtualMFADevicesResponse = {}));
var PutGroupPolicyRequest;
(function (PutGroupPolicyRequest) {
    /**
     * @internal
     */
    PutGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutGroupPolicyRequest = exports.PutGroupPolicyRequest || (exports.PutGroupPolicyRequest = {}));
var PutRolePermissionsBoundaryRequest;
(function (PutRolePermissionsBoundaryRequest) {
    /**
     * @internal
     */
    PutRolePermissionsBoundaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRolePermissionsBoundaryRequest = exports.PutRolePermissionsBoundaryRequest || (exports.PutRolePermissionsBoundaryRequest = {}));
var PutRolePolicyRequest;
(function (PutRolePolicyRequest) {
    /**
     * @internal
     */
    PutRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRolePolicyRequest = exports.PutRolePolicyRequest || (exports.PutRolePolicyRequest = {}));
var PutUserPermissionsBoundaryRequest;
(function (PutUserPermissionsBoundaryRequest) {
    /**
     * @internal
     */
    PutUserPermissionsBoundaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutUserPermissionsBoundaryRequest = exports.PutUserPermissionsBoundaryRequest || (exports.PutUserPermissionsBoundaryRequest = {}));
var PutUserPolicyRequest;
(function (PutUserPolicyRequest) {
    /**
     * @internal
     */
    PutUserPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutUserPolicyRequest = exports.PutUserPolicyRequest || (exports.PutUserPolicyRequest = {}));
var RemoveClientIDFromOpenIDConnectProviderRequest;
(function (RemoveClientIDFromOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    RemoveClientIDFromOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveClientIDFromOpenIDConnectProviderRequest = exports.RemoveClientIDFromOpenIDConnectProviderRequest || (exports.RemoveClientIDFromOpenIDConnectProviderRequest = {}));
var RemoveRoleFromInstanceProfileRequest;
(function (RemoveRoleFromInstanceProfileRequest) {
    /**
     * @internal
     */
    RemoveRoleFromInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveRoleFromInstanceProfileRequest = exports.RemoveRoleFromInstanceProfileRequest || (exports.RemoveRoleFromInstanceProfileRequest = {}));
var RemoveUserFromGroupRequest;
(function (RemoveUserFromGroupRequest) {
    /**
     * @internal
     */
    RemoveUserFromGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveUserFromGroupRequest = exports.RemoveUserFromGroupRequest || (exports.RemoveUserFromGroupRequest = {}));
var ResetServiceSpecificCredentialRequest;
(function (ResetServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    ResetServiceSpecificCredentialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetServiceSpecificCredentialRequest = exports.ResetServiceSpecificCredentialRequest || (exports.ResetServiceSpecificCredentialRequest = {}));
var ResetServiceSpecificCredentialResponse;
(function (ResetServiceSpecificCredentialResponse) {
    /**
     * @internal
     */
    ResetServiceSpecificCredentialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServiceSpecificCredential && {
            ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
        }),
    });
})(ResetServiceSpecificCredentialResponse = exports.ResetServiceSpecificCredentialResponse || (exports.ResetServiceSpecificCredentialResponse = {}));
var ResyncMFADeviceRequest;
(function (ResyncMFADeviceRequest) {
    /**
     * @internal
     */
    ResyncMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResyncMFADeviceRequest = exports.ResyncMFADeviceRequest || (exports.ResyncMFADeviceRequest = {}));
var SetDefaultPolicyVersionRequest;
(function (SetDefaultPolicyVersionRequest) {
    /**
     * @internal
     */
    SetDefaultPolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDefaultPolicyVersionRequest = exports.SetDefaultPolicyVersionRequest || (exports.SetDefaultPolicyVersionRequest = {}));
var GlobalEndpointTokenVersion;
(function (GlobalEndpointTokenVersion) {
    GlobalEndpointTokenVersion["v1Token"] = "v1Token";
    GlobalEndpointTokenVersion["v2Token"] = "v2Token";
})(GlobalEndpointTokenVersion = exports.GlobalEndpointTokenVersion || (exports.GlobalEndpointTokenVersion = {}));
var SetSecurityTokenServicePreferencesRequest;
(function (SetSecurityTokenServicePreferencesRequest) {
    /**
     * @internal
     */
    SetSecurityTokenServicePreferencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSecurityTokenServicePreferencesRequest = exports.SetSecurityTokenServicePreferencesRequest || (exports.SetSecurityTokenServicePreferencesRequest = {}));
var PolicyEvaluationException;
(function (PolicyEvaluationException) {
    /**
     * @internal
     */
    PolicyEvaluationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyEvaluationException = exports.PolicyEvaluationException || (exports.PolicyEvaluationException = {}));
var ContextKeyTypeEnum;
(function (ContextKeyTypeEnum) {
    ContextKeyTypeEnum["BINARY"] = "binary";
    ContextKeyTypeEnum["BINARY_LIST"] = "binaryList";
    ContextKeyTypeEnum["BOOLEAN"] = "boolean";
    ContextKeyTypeEnum["BOOLEAN_LIST"] = "booleanList";
    ContextKeyTypeEnum["DATE"] = "date";
    ContextKeyTypeEnum["DATE_LIST"] = "dateList";
    ContextKeyTypeEnum["IP"] = "ip";
    ContextKeyTypeEnum["IP_LIST"] = "ipList";
    ContextKeyTypeEnum["NUMERIC"] = "numeric";
    ContextKeyTypeEnum["NUMERIC_LIST"] = "numericList";
    ContextKeyTypeEnum["STRING"] = "string";
    ContextKeyTypeEnum["STRING_LIST"] = "stringList";
})(ContextKeyTypeEnum = exports.ContextKeyTypeEnum || (exports.ContextKeyTypeEnum = {}));
var ContextEntry;
(function (ContextEntry) {
    /**
     * @internal
     */
    ContextEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContextEntry = exports.ContextEntry || (exports.ContextEntry = {}));
var SimulateCustomPolicyRequest;
(function (SimulateCustomPolicyRequest) {
    /**
     * @internal
     */
    SimulateCustomPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulateCustomPolicyRequest = exports.SimulateCustomPolicyRequest || (exports.SimulateCustomPolicyRequest = {}));
var PolicyEvaluationDecisionType;
(function (PolicyEvaluationDecisionType) {
    PolicyEvaluationDecisionType["ALLOWED"] = "allowed";
    PolicyEvaluationDecisionType["EXPLICIT_DENY"] = "explicitDeny";
    PolicyEvaluationDecisionType["IMPLICIT_DENY"] = "implicitDeny";
})(PolicyEvaluationDecisionType = exports.PolicyEvaluationDecisionType || (exports.PolicyEvaluationDecisionType = {}));
var Position;
(function (Position) {
    /**
     * @internal
     */
    Position.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Position = exports.Position || (exports.Position = {}));
var PolicySourceType;
(function (PolicySourceType) {
    PolicySourceType["AWS_MANAGED"] = "aws-managed";
    PolicySourceType["GROUP"] = "group";
    PolicySourceType["NONE"] = "none";
    PolicySourceType["RESOURCE"] = "resource";
    PolicySourceType["ROLE"] = "role";
    PolicySourceType["USER"] = "user";
    PolicySourceType["USER_MANAGED"] = "user-managed";
})(PolicySourceType = exports.PolicySourceType || (exports.PolicySourceType = {}));
var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statement = exports.Statement || (exports.Statement = {}));
var OrganizationsDecisionDetail;
(function (OrganizationsDecisionDetail) {
    /**
     * @internal
     */
    OrganizationsDecisionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationsDecisionDetail = exports.OrganizationsDecisionDetail || (exports.OrganizationsDecisionDetail = {}));
var PermissionsBoundaryDecisionDetail;
(function (PermissionsBoundaryDecisionDetail) {
    /**
     * @internal
     */
    PermissionsBoundaryDecisionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionsBoundaryDecisionDetail = exports.PermissionsBoundaryDecisionDetail || (exports.PermissionsBoundaryDecisionDetail = {}));
var ResourceSpecificResult;
(function (ResourceSpecificResult) {
    /**
     * @internal
     */
    ResourceSpecificResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceSpecificResult = exports.ResourceSpecificResult || (exports.ResourceSpecificResult = {}));
var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var SimulatePolicyResponse;
(function (SimulatePolicyResponse) {
    /**
     * @internal
     */
    SimulatePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulatePolicyResponse = exports.SimulatePolicyResponse || (exports.SimulatePolicyResponse = {}));
var SimulatePrincipalPolicyRequest;
(function (SimulatePrincipalPolicyRequest) {
    /**
     * @internal
     */
    SimulatePrincipalPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulatePrincipalPolicyRequest = exports.SimulatePrincipalPolicyRequest || (exports.SimulatePrincipalPolicyRequest = {}));
var TagInstanceProfileRequest;
(function (TagInstanceProfileRequest) {
    /**
     * @internal
     */
    TagInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagInstanceProfileRequest = exports.TagInstanceProfileRequest || (exports.TagInstanceProfileRequest = {}));
var TagMFADeviceRequest;
(function (TagMFADeviceRequest) {
    /**
     * @internal
     */
    TagMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagMFADeviceRequest = exports.TagMFADeviceRequest || (exports.TagMFADeviceRequest = {}));
var TagOpenIDConnectProviderRequest;
(function (TagOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    TagOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOpenIDConnectProviderRequest = exports.TagOpenIDConnectProviderRequest || (exports.TagOpenIDConnectProviderRequest = {}));
var TagPolicyRequest;
(function (TagPolicyRequest) {
    /**
     * @internal
     */
    TagPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyRequest = exports.TagPolicyRequest || (exports.TagPolicyRequest = {}));
var TagRoleRequest;
(function (TagRoleRequest) {
    /**
     * @internal
     */
    TagRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagRoleRequest = exports.TagRoleRequest || (exports.TagRoleRequest = {}));
var TagSAMLProviderRequest;
(function (TagSAMLProviderRequest) {
    /**
     * @internal
     */
    TagSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagSAMLProviderRequest = exports.TagSAMLProviderRequest || (exports.TagSAMLProviderRequest = {}));
var TagServerCertificateRequest;
(function (TagServerCertificateRequest) {
    /**
     * @internal
     */
    TagServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagServerCertificateRequest = exports.TagServerCertificateRequest || (exports.TagServerCertificateRequest = {}));
var TagUserRequest;
(function (TagUserRequest) {
    /**
     * @internal
     */
    TagUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagUserRequest = exports.TagUserRequest || (exports.TagUserRequest = {}));
var UntagInstanceProfileRequest;
(function (UntagInstanceProfileRequest) {
    /**
     * @internal
     */
    UntagInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagInstanceProfileRequest = exports.UntagInstanceProfileRequest || (exports.UntagInstanceProfileRequest = {}));
var UntagMFADeviceRequest;
(function (UntagMFADeviceRequest) {
    /**
     * @internal
     */
    UntagMFADeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagMFADeviceRequest = exports.UntagMFADeviceRequest || (exports.UntagMFADeviceRequest = {}));
var UntagOpenIDConnectProviderRequest;
(function (UntagOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    UntagOpenIDConnectProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagOpenIDConnectProviderRequest = exports.UntagOpenIDConnectProviderRequest || (exports.UntagOpenIDConnectProviderRequest = {}));
//# sourceMappingURL=models_0.js.map