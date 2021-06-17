import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessAdvisorUsageGranularityType;
(function (AccessAdvisorUsageGranularityType) {
    AccessAdvisorUsageGranularityType["ACTION_LEVEL"] = "ACTION_LEVEL";
    AccessAdvisorUsageGranularityType["SERVICE_LEVEL"] = "SERVICE_LEVEL";
})(AccessAdvisorUsageGranularityType || (AccessAdvisorUsageGranularityType = {}));
export var AccessDetail;
(function (AccessDetail) {
    /**
     * @internal
     */
    AccessDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDetail || (AccessDetail = {}));
export var AccessKey;
(function (AccessKey) {
    /**
     * @internal
     */
    AccessKey.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }))); };
})(AccessKey || (AccessKey = {}));
export var AccessKeyLastUsed;
(function (AccessKeyLastUsed) {
    /**
     * @internal
     */
    AccessKeyLastUsed.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessKeyLastUsed || (AccessKeyLastUsed = {}));
export var AccessKeyMetadata;
(function (AccessKeyMetadata) {
    /**
     * @internal
     */
    AccessKeyMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessKeyMetadata || (AccessKeyMetadata = {}));
export var AddClientIDToOpenIDConnectProviderRequest;
(function (AddClientIDToOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    AddClientIDToOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddClientIDToOpenIDConnectProviderRequest || (AddClientIDToOpenIDConnectProviderRequest = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NoSuchEntityException;
(function (NoSuchEntityException) {
    /**
     * @internal
     */
    NoSuchEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchEntityException || (NoSuchEntityException = {}));
export var ServiceFailureException;
(function (ServiceFailureException) {
    /**
     * @internal
     */
    ServiceFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceFailureException || (ServiceFailureException = {}));
export var AddRoleToInstanceProfileRequest;
(function (AddRoleToInstanceProfileRequest) {
    /**
     * @internal
     */
    AddRoleToInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddRoleToInstanceProfileRequest || (AddRoleToInstanceProfileRequest = {}));
export var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityAlreadyExistsException || (EntityAlreadyExistsException = {}));
export var UnmodifiableEntityException;
(function (UnmodifiableEntityException) {
    /**
     * @internal
     */
    UnmodifiableEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnmodifiableEntityException || (UnmodifiableEntityException = {}));
export var AddUserToGroupRequest;
(function (AddUserToGroupRequest) {
    /**
     * @internal
     */
    AddUserToGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddUserToGroupRequest || (AddUserToGroupRequest = {}));
export var PermissionsBoundaryAttachmentType;
(function (PermissionsBoundaryAttachmentType) {
    PermissionsBoundaryAttachmentType["Policy"] = "PermissionsBoundaryPolicy";
})(PermissionsBoundaryAttachmentType || (PermissionsBoundaryAttachmentType = {}));
export var AttachedPermissionsBoundary;
(function (AttachedPermissionsBoundary) {
    /**
     * @internal
     */
    AttachedPermissionsBoundary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachedPermissionsBoundary || (AttachedPermissionsBoundary = {}));
export var AttachedPolicy;
(function (AttachedPolicy) {
    /**
     * @internal
     */
    AttachedPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachedPolicy || (AttachedPolicy = {}));
export var AttachGroupPolicyRequest;
(function (AttachGroupPolicyRequest) {
    /**
     * @internal
     */
    AttachGroupPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachGroupPolicyRequest || (AttachGroupPolicyRequest = {}));
export var PolicyNotAttachableException;
(function (PolicyNotAttachableException) {
    /**
     * @internal
     */
    PolicyNotAttachableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyNotAttachableException || (PolicyNotAttachableException = {}));
export var AttachRolePolicyRequest;
(function (AttachRolePolicyRequest) {
    /**
     * @internal
     */
    AttachRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachRolePolicyRequest || (AttachRolePolicyRequest = {}));
export var AttachUserPolicyRequest;
(function (AttachUserPolicyRequest) {
    /**
     * @internal
     */
    AttachUserPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachUserPolicyRequest || (AttachUserPolicyRequest = {}));
export var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    /**
     * @internal
     */
    ChangePasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OldPassword && { OldPassword: SENSITIVE_STRING })), (obj.NewPassword && { NewPassword: SENSITIVE_STRING }))); };
})(ChangePasswordRequest || (ChangePasswordRequest = {}));
export var EntityTemporarilyUnmodifiableException;
(function (EntityTemporarilyUnmodifiableException) {
    /**
     * @internal
     */
    EntityTemporarilyUnmodifiableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityTemporarilyUnmodifiableException || (EntityTemporarilyUnmodifiableException = {}));
export var InvalidUserTypeException;
(function (InvalidUserTypeException) {
    /**
     * @internal
     */
    InvalidUserTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidUserTypeException || (InvalidUserTypeException = {}));
export var PasswordPolicyViolationException;
(function (PasswordPolicyViolationException) {
    /**
     * @internal
     */
    PasswordPolicyViolationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PasswordPolicyViolationException || (PasswordPolicyViolationException = {}));
export var CreateAccessKeyRequest;
(function (CreateAccessKeyRequest) {
    /**
     * @internal
     */
    CreateAccessKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessKeyRequest || (CreateAccessKeyRequest = {}));
export var CreateAccessKeyResponse;
(function (CreateAccessKeyResponse) {
    /**
     * @internal
     */
    CreateAccessKeyResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }))); };
})(CreateAccessKeyResponse || (CreateAccessKeyResponse = {}));
export var CreateAccountAliasRequest;
(function (CreateAccountAliasRequest) {
    /**
     * @internal
     */
    CreateAccountAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccountAliasRequest || (CreateAccountAliasRequest = {}));
export var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupRequest || (CreateGroupRequest = {}));
export var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Group || (Group = {}));
export var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupResponse || (CreateGroupResponse = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    /**
     * @internal
     */
    CreateInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceProfileRequest || (CreateInstanceProfileRequest = {}));
export var RoleLastUsed;
(function (RoleLastUsed) {
    /**
     * @internal
     */
    RoleLastUsed.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoleLastUsed || (RoleLastUsed = {}));
export var Role;
(function (Role) {
    /**
     * @internal
     */
    Role.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Role || (Role = {}));
export var InstanceProfile;
(function (InstanceProfile) {
    /**
     * @internal
     */
    InstanceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceProfile || (InstanceProfile = {}));
export var CreateInstanceProfileResponse;
(function (CreateInstanceProfileResponse) {
    /**
     * @internal
     */
    CreateInstanceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceProfileResponse || (CreateInstanceProfileResponse = {}));
export var CreateLoginProfileRequest;
(function (CreateLoginProfileRequest) {
    /**
     * @internal
     */
    CreateLoginProfileRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateLoginProfileRequest || (CreateLoginProfileRequest = {}));
export var LoginProfile;
(function (LoginProfile) {
    /**
     * @internal
     */
    LoginProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoginProfile || (LoginProfile = {}));
export var CreateLoginProfileResponse;
(function (CreateLoginProfileResponse) {
    /**
     * @internal
     */
    CreateLoginProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoginProfileResponse || (CreateLoginProfileResponse = {}));
export var CreateOpenIDConnectProviderRequest;
(function (CreateOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    CreateOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpenIDConnectProviderRequest || (CreateOpenIDConnectProviderRequest = {}));
export var CreateOpenIDConnectProviderResponse;
(function (CreateOpenIDConnectProviderResponse) {
    /**
     * @internal
     */
    CreateOpenIDConnectProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpenIDConnectProviderResponse || (CreateOpenIDConnectProviderResponse = {}));
export var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyRequest || (CreatePolicyRequest = {}));
export var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Policy || (Policy = {}));
export var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyResponse || (CreatePolicyResponse = {}));
export var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MalformedPolicyDocumentException || (MalformedPolicyDocumentException = {}));
export var CreatePolicyVersionRequest;
(function (CreatePolicyVersionRequest) {
    /**
     * @internal
     */
    CreatePolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyVersionRequest || (CreatePolicyVersionRequest = {}));
export var PolicyVersion;
(function (PolicyVersion) {
    /**
     * @internal
     */
    PolicyVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyVersion || (PolicyVersion = {}));
export var CreatePolicyVersionResponse;
(function (CreatePolicyVersionResponse) {
    /**
     * @internal
     */
    CreatePolicyVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyVersionResponse || (CreatePolicyVersionResponse = {}));
export var CreateRoleRequest;
(function (CreateRoleRequest) {
    /**
     * @internal
     */
    CreateRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoleRequest || (CreateRoleRequest = {}));
export var CreateRoleResponse;
(function (CreateRoleResponse) {
    /**
     * @internal
     */
    CreateRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoleResponse || (CreateRoleResponse = {}));
export var CreateSAMLProviderRequest;
(function (CreateSAMLProviderRequest) {
    /**
     * @internal
     */
    CreateSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSAMLProviderRequest || (CreateSAMLProviderRequest = {}));
export var CreateSAMLProviderResponse;
(function (CreateSAMLProviderResponse) {
    /**
     * @internal
     */
    CreateSAMLProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSAMLProviderResponse || (CreateSAMLProviderResponse = {}));
export var CreateServiceLinkedRoleRequest;
(function (CreateServiceLinkedRoleRequest) {
    /**
     * @internal
     */
    CreateServiceLinkedRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceLinkedRoleRequest || (CreateServiceLinkedRoleRequest = {}));
export var CreateServiceLinkedRoleResponse;
(function (CreateServiceLinkedRoleResponse) {
    /**
     * @internal
     */
    CreateServiceLinkedRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceLinkedRoleResponse || (CreateServiceLinkedRoleResponse = {}));
export var CreateServiceSpecificCredentialRequest;
(function (CreateServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    CreateServiceSpecificCredentialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceSpecificCredentialRequest || (CreateServiceSpecificCredentialRequest = {}));
export var ServiceSpecificCredential;
(function (ServiceSpecificCredential) {
    /**
     * @internal
     */
    ServiceSpecificCredential.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServicePassword && { ServicePassword: SENSITIVE_STRING }))); };
})(ServiceSpecificCredential || (ServiceSpecificCredential = {}));
export var CreateServiceSpecificCredentialResponse;
(function (CreateServiceSpecificCredentialResponse) {
    /**
     * @internal
     */
    CreateServiceSpecificCredentialResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServiceSpecificCredential && {
        ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
    }))); };
})(CreateServiceSpecificCredentialResponse || (CreateServiceSpecificCredentialResponse = {}));
export var ServiceNotSupportedException;
(function (ServiceNotSupportedException) {
    /**
     * @internal
     */
    ServiceNotSupportedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNotSupportedException || (ServiceNotSupportedException = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserRequest || (CreateUserRequest = {}));
export var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(User || (User = {}));
export var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserResponse || (CreateUserResponse = {}));
export var CreateVirtualMFADeviceRequest;
(function (CreateVirtualMFADeviceRequest) {
    /**
     * @internal
     */
    CreateVirtualMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVirtualMFADeviceRequest || (CreateVirtualMFADeviceRequest = {}));
export var VirtualMFADevice;
(function (VirtualMFADevice) {
    /**
     * @internal
     */
    VirtualMFADevice.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Base32StringSeed && { Base32StringSeed: SENSITIVE_STRING })), (obj.QRCodePNG && { QRCodePNG: SENSITIVE_STRING }))); };
})(VirtualMFADevice || (VirtualMFADevice = {}));
export var CreateVirtualMFADeviceResponse;
(function (CreateVirtualMFADeviceResponse) {
    /**
     * @internal
     */
    CreateVirtualMFADeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.VirtualMFADevice && { VirtualMFADevice: VirtualMFADevice.filterSensitiveLog(obj.VirtualMFADevice) }))); };
})(CreateVirtualMFADeviceResponse || (CreateVirtualMFADeviceResponse = {}));
export var DeactivateMFADeviceRequest;
(function (DeactivateMFADeviceRequest) {
    /**
     * @internal
     */
    DeactivateMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeactivateMFADeviceRequest || (DeactivateMFADeviceRequest = {}));
export var DeleteAccessKeyRequest;
(function (DeleteAccessKeyRequest) {
    /**
     * @internal
     */
    DeleteAccessKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessKeyRequest || (DeleteAccessKeyRequest = {}));
export var DeleteAccountAliasRequest;
(function (DeleteAccountAliasRequest) {
    /**
     * @internal
     */
    DeleteAccountAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountAliasRequest || (DeleteAccountAliasRequest = {}));
export var DeleteConflictException;
(function (DeleteConflictException) {
    /**
     * @internal
     */
    DeleteConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConflictException || (DeleteConflictException = {}));
export var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGroupRequest || (DeleteGroupRequest = {}));
export var DeleteGroupPolicyRequest;
(function (DeleteGroupPolicyRequest) {
    /**
     * @internal
     */
    DeleteGroupPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGroupPolicyRequest || (DeleteGroupPolicyRequest = {}));
export var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    /**
     * @internal
     */
    DeleteInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceProfileRequest || (DeleteInstanceProfileRequest = {}));
export var DeleteLoginProfileRequest;
(function (DeleteLoginProfileRequest) {
    /**
     * @internal
     */
    DeleteLoginProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoginProfileRequest || (DeleteLoginProfileRequest = {}));
export var DeleteOpenIDConnectProviderRequest;
(function (DeleteOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    DeleteOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOpenIDConnectProviderRequest || (DeleteOpenIDConnectProviderRequest = {}));
export var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyRequest || (DeletePolicyRequest = {}));
export var DeletePolicyVersionRequest;
(function (DeletePolicyVersionRequest) {
    /**
     * @internal
     */
    DeletePolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyVersionRequest || (DeletePolicyVersionRequest = {}));
export var DeleteRoleRequest;
(function (DeleteRoleRequest) {
    /**
     * @internal
     */
    DeleteRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRoleRequest || (DeleteRoleRequest = {}));
export var DeleteRolePermissionsBoundaryRequest;
(function (DeleteRolePermissionsBoundaryRequest) {
    /**
     * @internal
     */
    DeleteRolePermissionsBoundaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRolePermissionsBoundaryRequest || (DeleteRolePermissionsBoundaryRequest = {}));
export var DeleteRolePolicyRequest;
(function (DeleteRolePolicyRequest) {
    /**
     * @internal
     */
    DeleteRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRolePolicyRequest || (DeleteRolePolicyRequest = {}));
export var DeleteSAMLProviderRequest;
(function (DeleteSAMLProviderRequest) {
    /**
     * @internal
     */
    DeleteSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSAMLProviderRequest || (DeleteSAMLProviderRequest = {}));
export var DeleteServerCertificateRequest;
(function (DeleteServerCertificateRequest) {
    /**
     * @internal
     */
    DeleteServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerCertificateRequest || (DeleteServerCertificateRequest = {}));
export var DeleteServiceLinkedRoleRequest;
(function (DeleteServiceLinkedRoleRequest) {
    /**
     * @internal
     */
    DeleteServiceLinkedRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceLinkedRoleRequest || (DeleteServiceLinkedRoleRequest = {}));
export var DeleteServiceLinkedRoleResponse;
(function (DeleteServiceLinkedRoleResponse) {
    /**
     * @internal
     */
    DeleteServiceLinkedRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceLinkedRoleResponse || (DeleteServiceLinkedRoleResponse = {}));
export var DeleteServiceSpecificCredentialRequest;
(function (DeleteServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    DeleteServiceSpecificCredentialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceSpecificCredentialRequest || (DeleteServiceSpecificCredentialRequest = {}));
export var DeleteSigningCertificateRequest;
(function (DeleteSigningCertificateRequest) {
    /**
     * @internal
     */
    DeleteSigningCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSigningCertificateRequest || (DeleteSigningCertificateRequest = {}));
export var DeleteSSHPublicKeyRequest;
(function (DeleteSSHPublicKeyRequest) {
    /**
     * @internal
     */
    DeleteSSHPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSSHPublicKeyRequest || (DeleteSSHPublicKeyRequest = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DeleteUserPermissionsBoundaryRequest;
(function (DeleteUserPermissionsBoundaryRequest) {
    /**
     * @internal
     */
    DeleteUserPermissionsBoundaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserPermissionsBoundaryRequest || (DeleteUserPermissionsBoundaryRequest = {}));
export var DeleteUserPolicyRequest;
(function (DeleteUserPolicyRequest) {
    /**
     * @internal
     */
    DeleteUserPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserPolicyRequest || (DeleteUserPolicyRequest = {}));
export var DeleteVirtualMFADeviceRequest;
(function (DeleteVirtualMFADeviceRequest) {
    /**
     * @internal
     */
    DeleteVirtualMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVirtualMFADeviceRequest || (DeleteVirtualMFADeviceRequest = {}));
export var DetachGroupPolicyRequest;
(function (DetachGroupPolicyRequest) {
    /**
     * @internal
     */
    DetachGroupPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachGroupPolicyRequest || (DetachGroupPolicyRequest = {}));
export var DetachRolePolicyRequest;
(function (DetachRolePolicyRequest) {
    /**
     * @internal
     */
    DetachRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachRolePolicyRequest || (DetachRolePolicyRequest = {}));
export var DetachUserPolicyRequest;
(function (DetachUserPolicyRequest) {
    /**
     * @internal
     */
    DetachUserPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachUserPolicyRequest || (DetachUserPolicyRequest = {}));
export var EnableMFADeviceRequest;
(function (EnableMFADeviceRequest) {
    /**
     * @internal
     */
    EnableMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableMFADeviceRequest || (EnableMFADeviceRequest = {}));
export var InvalidAuthenticationCodeException;
(function (InvalidAuthenticationCodeException) {
    /**
     * @internal
     */
    InvalidAuthenticationCodeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAuthenticationCodeException || (InvalidAuthenticationCodeException = {}));
export var ReportStateType;
(function (ReportStateType) {
    ReportStateType["COMPLETE"] = "COMPLETE";
    ReportStateType["INPROGRESS"] = "INPROGRESS";
    ReportStateType["STARTED"] = "STARTED";
})(ReportStateType || (ReportStateType = {}));
export var GenerateCredentialReportResponse;
(function (GenerateCredentialReportResponse) {
    /**
     * @internal
     */
    GenerateCredentialReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateCredentialReportResponse || (GenerateCredentialReportResponse = {}));
export var GenerateOrganizationsAccessReportRequest;
(function (GenerateOrganizationsAccessReportRequest) {
    /**
     * @internal
     */
    GenerateOrganizationsAccessReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateOrganizationsAccessReportRequest || (GenerateOrganizationsAccessReportRequest = {}));
export var GenerateOrganizationsAccessReportResponse;
(function (GenerateOrganizationsAccessReportResponse) {
    /**
     * @internal
     */
    GenerateOrganizationsAccessReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateOrganizationsAccessReportResponse || (GenerateOrganizationsAccessReportResponse = {}));
export var ReportGenerationLimitExceededException;
(function (ReportGenerationLimitExceededException) {
    /**
     * @internal
     */
    ReportGenerationLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportGenerationLimitExceededException || (ReportGenerationLimitExceededException = {}));
export var GenerateServiceLastAccessedDetailsRequest;
(function (GenerateServiceLastAccessedDetailsRequest) {
    /**
     * @internal
     */
    GenerateServiceLastAccessedDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateServiceLastAccessedDetailsRequest || (GenerateServiceLastAccessedDetailsRequest = {}));
export var GenerateServiceLastAccessedDetailsResponse;
(function (GenerateServiceLastAccessedDetailsResponse) {
    /**
     * @internal
     */
    GenerateServiceLastAccessedDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateServiceLastAccessedDetailsResponse || (GenerateServiceLastAccessedDetailsResponse = {}));
export var GetAccessKeyLastUsedRequest;
(function (GetAccessKeyLastUsedRequest) {
    /**
     * @internal
     */
    GetAccessKeyLastUsedRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessKeyLastUsedRequest || (GetAccessKeyLastUsedRequest = {}));
export var GetAccessKeyLastUsedResponse;
(function (GetAccessKeyLastUsedResponse) {
    /**
     * @internal
     */
    GetAccessKeyLastUsedResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessKeyLastUsedResponse || (GetAccessKeyLastUsedResponse = {}));
export var EntityType;
(function (EntityType) {
    EntityType["AWSManagedPolicy"] = "AWSManagedPolicy";
    EntityType["Group"] = "Group";
    EntityType["LocalManagedPolicy"] = "LocalManagedPolicy";
    EntityType["Role"] = "Role";
    EntityType["User"] = "User";
})(EntityType || (EntityType = {}));
export var GetAccountAuthorizationDetailsRequest;
(function (GetAccountAuthorizationDetailsRequest) {
    /**
     * @internal
     */
    GetAccountAuthorizationDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountAuthorizationDetailsRequest || (GetAccountAuthorizationDetailsRequest = {}));
export var PolicyDetail;
(function (PolicyDetail) {
    /**
     * @internal
     */
    PolicyDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyDetail || (PolicyDetail = {}));
export var GroupDetail;
(function (GroupDetail) {
    /**
     * @internal
     */
    GroupDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupDetail || (GroupDetail = {}));
export var ManagedPolicyDetail;
(function (ManagedPolicyDetail) {
    /**
     * @internal
     */
    ManagedPolicyDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedPolicyDetail || (ManagedPolicyDetail = {}));
export var RoleDetail;
(function (RoleDetail) {
    /**
     * @internal
     */
    RoleDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoleDetail || (RoleDetail = {}));
export var UserDetail;
(function (UserDetail) {
    /**
     * @internal
     */
    UserDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserDetail || (UserDetail = {}));
export var GetAccountAuthorizationDetailsResponse;
(function (GetAccountAuthorizationDetailsResponse) {
    /**
     * @internal
     */
    GetAccountAuthorizationDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountAuthorizationDetailsResponse || (GetAccountAuthorizationDetailsResponse = {}));
export var PasswordPolicy;
(function (PasswordPolicy) {
    /**
     * @internal
     */
    PasswordPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PasswordPolicy || (PasswordPolicy = {}));
export var GetAccountPasswordPolicyResponse;
(function (GetAccountPasswordPolicyResponse) {
    /**
     * @internal
     */
    GetAccountPasswordPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountPasswordPolicyResponse || (GetAccountPasswordPolicyResponse = {}));
export var GetAccountSummaryResponse;
(function (GetAccountSummaryResponse) {
    /**
     * @internal
     */
    GetAccountSummaryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountSummaryResponse || (GetAccountSummaryResponse = {}));
export var GetContextKeysForCustomPolicyRequest;
(function (GetContextKeysForCustomPolicyRequest) {
    /**
     * @internal
     */
    GetContextKeysForCustomPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContextKeysForCustomPolicyRequest || (GetContextKeysForCustomPolicyRequest = {}));
export var GetContextKeysForPolicyResponse;
(function (GetContextKeysForPolicyResponse) {
    /**
     * @internal
     */
    GetContextKeysForPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContextKeysForPolicyResponse || (GetContextKeysForPolicyResponse = {}));
export var GetContextKeysForPrincipalPolicyRequest;
(function (GetContextKeysForPrincipalPolicyRequest) {
    /**
     * @internal
     */
    GetContextKeysForPrincipalPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContextKeysForPrincipalPolicyRequest || (GetContextKeysForPrincipalPolicyRequest = {}));
export var CredentialReportExpiredException;
(function (CredentialReportExpiredException) {
    /**
     * @internal
     */
    CredentialReportExpiredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CredentialReportExpiredException || (CredentialReportExpiredException = {}));
export var CredentialReportNotPresentException;
(function (CredentialReportNotPresentException) {
    /**
     * @internal
     */
    CredentialReportNotPresentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CredentialReportNotPresentException || (CredentialReportNotPresentException = {}));
export var CredentialReportNotReadyException;
(function (CredentialReportNotReadyException) {
    /**
     * @internal
     */
    CredentialReportNotReadyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CredentialReportNotReadyException || (CredentialReportNotReadyException = {}));
export var GetCredentialReportResponse;
(function (GetCredentialReportResponse) {
    /**
     * @internal
     */
    GetCredentialReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCredentialReportResponse || (GetCredentialReportResponse = {}));
export var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupRequest || (GetGroupRequest = {}));
export var GetGroupResponse;
(function (GetGroupResponse) {
    /**
     * @internal
     */
    GetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupResponse || (GetGroupResponse = {}));
export var GetGroupPolicyRequest;
(function (GetGroupPolicyRequest) {
    /**
     * @internal
     */
    GetGroupPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupPolicyRequest || (GetGroupPolicyRequest = {}));
export var GetGroupPolicyResponse;
(function (GetGroupPolicyResponse) {
    /**
     * @internal
     */
    GetGroupPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupPolicyResponse || (GetGroupPolicyResponse = {}));
export var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    /**
     * @internal
     */
    GetInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceProfileRequest || (GetInstanceProfileRequest = {}));
export var GetInstanceProfileResponse;
(function (GetInstanceProfileResponse) {
    /**
     * @internal
     */
    GetInstanceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceProfileResponse || (GetInstanceProfileResponse = {}));
export var GetLoginProfileRequest;
(function (GetLoginProfileRequest) {
    /**
     * @internal
     */
    GetLoginProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoginProfileRequest || (GetLoginProfileRequest = {}));
export var GetLoginProfileResponse;
(function (GetLoginProfileResponse) {
    /**
     * @internal
     */
    GetLoginProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoginProfileResponse || (GetLoginProfileResponse = {}));
export var GetOpenIDConnectProviderRequest;
(function (GetOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    GetOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpenIDConnectProviderRequest || (GetOpenIDConnectProviderRequest = {}));
export var GetOpenIDConnectProviderResponse;
(function (GetOpenIDConnectProviderResponse) {
    /**
     * @internal
     */
    GetOpenIDConnectProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpenIDConnectProviderResponse || (GetOpenIDConnectProviderResponse = {}));
export var SortKeyType;
(function (SortKeyType) {
    SortKeyType["LAST_AUTHENTICATED_TIME_ASCENDING"] = "LAST_AUTHENTICATED_TIME_ASCENDING";
    SortKeyType["LAST_AUTHENTICATED_TIME_DESCENDING"] = "LAST_AUTHENTICATED_TIME_DESCENDING";
    SortKeyType["SERVICE_NAMESPACE_ASCENDING"] = "SERVICE_NAMESPACE_ASCENDING";
    SortKeyType["SERVICE_NAMESPACE_DESCENDING"] = "SERVICE_NAMESPACE_DESCENDING";
})(SortKeyType || (SortKeyType = {}));
export var GetOrganizationsAccessReportRequest;
(function (GetOrganizationsAccessReportRequest) {
    /**
     * @internal
     */
    GetOrganizationsAccessReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOrganizationsAccessReportRequest || (GetOrganizationsAccessReportRequest = {}));
export var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorDetails || (ErrorDetails = {}));
export var GetOrganizationsAccessReportResponse;
(function (GetOrganizationsAccessReportResponse) {
    /**
     * @internal
     */
    GetOrganizationsAccessReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOrganizationsAccessReportResponse || (GetOrganizationsAccessReportResponse = {}));
export var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyRequest || (GetPolicyRequest = {}));
export var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyResponse || (GetPolicyResponse = {}));
export var GetPolicyVersionRequest;
(function (GetPolicyVersionRequest) {
    /**
     * @internal
     */
    GetPolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyVersionRequest || (GetPolicyVersionRequest = {}));
export var GetPolicyVersionResponse;
(function (GetPolicyVersionResponse) {
    /**
     * @internal
     */
    GetPolicyVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyVersionResponse || (GetPolicyVersionResponse = {}));
export var GetRoleRequest;
(function (GetRoleRequest) {
    /**
     * @internal
     */
    GetRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRoleRequest || (GetRoleRequest = {}));
export var GetRoleResponse;
(function (GetRoleResponse) {
    /**
     * @internal
     */
    GetRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRoleResponse || (GetRoleResponse = {}));
export var GetRolePolicyRequest;
(function (GetRolePolicyRequest) {
    /**
     * @internal
     */
    GetRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRolePolicyRequest || (GetRolePolicyRequest = {}));
export var GetRolePolicyResponse;
(function (GetRolePolicyResponse) {
    /**
     * @internal
     */
    GetRolePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRolePolicyResponse || (GetRolePolicyResponse = {}));
export var GetSAMLProviderRequest;
(function (GetSAMLProviderRequest) {
    /**
     * @internal
     */
    GetSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSAMLProviderRequest || (GetSAMLProviderRequest = {}));
export var GetSAMLProviderResponse;
(function (GetSAMLProviderResponse) {
    /**
     * @internal
     */
    GetSAMLProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSAMLProviderResponse || (GetSAMLProviderResponse = {}));
export var GetServerCertificateRequest;
(function (GetServerCertificateRequest) {
    /**
     * @internal
     */
    GetServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServerCertificateRequest || (GetServerCertificateRequest = {}));
export var ServerCertificateMetadata;
(function (ServerCertificateMetadata) {
    /**
     * @internal
     */
    ServerCertificateMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerCertificateMetadata || (ServerCertificateMetadata = {}));
export var ServerCertificate;
(function (ServerCertificate) {
    /**
     * @internal
     */
    ServerCertificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerCertificate || (ServerCertificate = {}));
export var GetServerCertificateResponse;
(function (GetServerCertificateResponse) {
    /**
     * @internal
     */
    GetServerCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServerCertificateResponse || (GetServerCertificateResponse = {}));
export var GetServiceLastAccessedDetailsRequest;
(function (GetServiceLastAccessedDetailsRequest) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLastAccessedDetailsRequest || (GetServiceLastAccessedDetailsRequest = {}));
export var TrackedActionLastAccessed;
(function (TrackedActionLastAccessed) {
    /**
     * @internal
     */
    TrackedActionLastAccessed.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrackedActionLastAccessed || (TrackedActionLastAccessed = {}));
export var ServiceLastAccessed;
(function (ServiceLastAccessed) {
    /**
     * @internal
     */
    ServiceLastAccessed.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceLastAccessed || (ServiceLastAccessed = {}));
export var GetServiceLastAccessedDetailsResponse;
(function (GetServiceLastAccessedDetailsResponse) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLastAccessedDetailsResponse || (GetServiceLastAccessedDetailsResponse = {}));
export var GetServiceLastAccessedDetailsWithEntitiesRequest;
(function (GetServiceLastAccessedDetailsWithEntitiesRequest) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLastAccessedDetailsWithEntitiesRequest || (GetServiceLastAccessedDetailsWithEntitiesRequest = {}));
export var PolicyOwnerEntityType;
(function (PolicyOwnerEntityType) {
    PolicyOwnerEntityType["GROUP"] = "GROUP";
    PolicyOwnerEntityType["ROLE"] = "ROLE";
    PolicyOwnerEntityType["USER"] = "USER";
})(PolicyOwnerEntityType || (PolicyOwnerEntityType = {}));
export var EntityInfo;
(function (EntityInfo) {
    /**
     * @internal
     */
    EntityInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityInfo || (EntityInfo = {}));
export var EntityDetails;
(function (EntityDetails) {
    /**
     * @internal
     */
    EntityDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityDetails || (EntityDetails = {}));
export var GetServiceLastAccessedDetailsWithEntitiesResponse;
(function (GetServiceLastAccessedDetailsWithEntitiesResponse) {
    /**
     * @internal
     */
    GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLastAccessedDetailsWithEntitiesResponse || (GetServiceLastAccessedDetailsWithEntitiesResponse = {}));
export var GetServiceLinkedRoleDeletionStatusRequest;
(function (GetServiceLinkedRoleDeletionStatusRequest) {
    /**
     * @internal
     */
    GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLinkedRoleDeletionStatusRequest || (GetServiceLinkedRoleDeletionStatusRequest = {}));
export var RoleUsageType;
(function (RoleUsageType) {
    /**
     * @internal
     */
    RoleUsageType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoleUsageType || (RoleUsageType = {}));
export var DeletionTaskFailureReasonType;
(function (DeletionTaskFailureReasonType) {
    /**
     * @internal
     */
    DeletionTaskFailureReasonType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletionTaskFailureReasonType || (DeletionTaskFailureReasonType = {}));
export var DeletionTaskStatusType;
(function (DeletionTaskStatusType) {
    DeletionTaskStatusType["FAILED"] = "FAILED";
    DeletionTaskStatusType["IN_PROGRESS"] = "IN_PROGRESS";
    DeletionTaskStatusType["NOT_STARTED"] = "NOT_STARTED";
    DeletionTaskStatusType["SUCCEEDED"] = "SUCCEEDED";
})(DeletionTaskStatusType || (DeletionTaskStatusType = {}));
export var GetServiceLinkedRoleDeletionStatusResponse;
(function (GetServiceLinkedRoleDeletionStatusResponse) {
    /**
     * @internal
     */
    GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceLinkedRoleDeletionStatusResponse || (GetServiceLinkedRoleDeletionStatusResponse = {}));
export var GetSSHPublicKeyRequest;
(function (GetSSHPublicKeyRequest) {
    /**
     * @internal
     */
    GetSSHPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSSHPublicKeyRequest || (GetSSHPublicKeyRequest = {}));
export var SSHPublicKey;
(function (SSHPublicKey) {
    /**
     * @internal
     */
    SSHPublicKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSHPublicKey || (SSHPublicKey = {}));
export var GetSSHPublicKeyResponse;
(function (GetSSHPublicKeyResponse) {
    /**
     * @internal
     */
    GetSSHPublicKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSSHPublicKeyResponse || (GetSSHPublicKeyResponse = {}));
export var UnrecognizedPublicKeyEncodingException;
(function (UnrecognizedPublicKeyEncodingException) {
    /**
     * @internal
     */
    UnrecognizedPublicKeyEncodingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnrecognizedPublicKeyEncodingException || (UnrecognizedPublicKeyEncodingException = {}));
export var GetUserRequest;
(function (GetUserRequest) {
    /**
     * @internal
     */
    GetUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserRequest || (GetUserRequest = {}));
export var GetUserResponse;
(function (GetUserResponse) {
    /**
     * @internal
     */
    GetUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserResponse || (GetUserResponse = {}));
export var GetUserPolicyRequest;
(function (GetUserPolicyRequest) {
    /**
     * @internal
     */
    GetUserPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserPolicyRequest || (GetUserPolicyRequest = {}));
export var GetUserPolicyResponse;
(function (GetUserPolicyResponse) {
    /**
     * @internal
     */
    GetUserPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserPolicyResponse || (GetUserPolicyResponse = {}));
export var ListAccessKeysRequest;
(function (ListAccessKeysRequest) {
    /**
     * @internal
     */
    ListAccessKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessKeysRequest || (ListAccessKeysRequest = {}));
export var ListAccessKeysResponse;
(function (ListAccessKeysResponse) {
    /**
     * @internal
     */
    ListAccessKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessKeysResponse || (ListAccessKeysResponse = {}));
export var ListAccountAliasesRequest;
(function (ListAccountAliasesRequest) {
    /**
     * @internal
     */
    ListAccountAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAliasesRequest || (ListAccountAliasesRequest = {}));
export var ListAccountAliasesResponse;
(function (ListAccountAliasesResponse) {
    /**
     * @internal
     */
    ListAccountAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAliasesResponse || (ListAccountAliasesResponse = {}));
export var ListAttachedGroupPoliciesRequest;
(function (ListAttachedGroupPoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedGroupPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedGroupPoliciesRequest || (ListAttachedGroupPoliciesRequest = {}));
export var ListAttachedGroupPoliciesResponse;
(function (ListAttachedGroupPoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedGroupPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedGroupPoliciesResponse || (ListAttachedGroupPoliciesResponse = {}));
export var ListAttachedRolePoliciesRequest;
(function (ListAttachedRolePoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedRolePoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedRolePoliciesRequest || (ListAttachedRolePoliciesRequest = {}));
export var ListAttachedRolePoliciesResponse;
(function (ListAttachedRolePoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedRolePoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedRolePoliciesResponse || (ListAttachedRolePoliciesResponse = {}));
export var ListAttachedUserPoliciesRequest;
(function (ListAttachedUserPoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedUserPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedUserPoliciesRequest || (ListAttachedUserPoliciesRequest = {}));
export var ListAttachedUserPoliciesResponse;
(function (ListAttachedUserPoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedUserPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttachedUserPoliciesResponse || (ListAttachedUserPoliciesResponse = {}));
export var ListEntitiesForPolicyRequest;
(function (ListEntitiesForPolicyRequest) {
    /**
     * @internal
     */
    ListEntitiesForPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitiesForPolicyRequest || (ListEntitiesForPolicyRequest = {}));
export var PolicyGroup;
(function (PolicyGroup) {
    /**
     * @internal
     */
    PolicyGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyGroup || (PolicyGroup = {}));
export var PolicyRole;
(function (PolicyRole) {
    /**
     * @internal
     */
    PolicyRole.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyRole || (PolicyRole = {}));
export var PolicyUser;
(function (PolicyUser) {
    /**
     * @internal
     */
    PolicyUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyUser || (PolicyUser = {}));
export var ListEntitiesForPolicyResponse;
(function (ListEntitiesForPolicyResponse) {
    /**
     * @internal
     */
    ListEntitiesForPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitiesForPolicyResponse || (ListEntitiesForPolicyResponse = {}));
export var ListGroupPoliciesRequest;
(function (ListGroupPoliciesRequest) {
    /**
     * @internal
     */
    ListGroupPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupPoliciesRequest || (ListGroupPoliciesRequest = {}));
export var ListGroupPoliciesResponse;
(function (ListGroupPoliciesResponse) {
    /**
     * @internal
     */
    ListGroupPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupPoliciesResponse || (ListGroupPoliciesResponse = {}));
export var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsRequest || (ListGroupsRequest = {}));
export var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsResponse || (ListGroupsResponse = {}));
export var ListGroupsForUserRequest;
(function (ListGroupsForUserRequest) {
    /**
     * @internal
     */
    ListGroupsForUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsForUserRequest || (ListGroupsForUserRequest = {}));
export var ListGroupsForUserResponse;
(function (ListGroupsForUserResponse) {
    /**
     * @internal
     */
    ListGroupsForUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsForUserResponse || (ListGroupsForUserResponse = {}));
export var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesRequest || (ListInstanceProfilesRequest = {}));
export var ListInstanceProfilesResponse;
(function (ListInstanceProfilesResponse) {
    /**
     * @internal
     */
    ListInstanceProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesResponse || (ListInstanceProfilesResponse = {}));
export var ListInstanceProfilesForRoleRequest;
(function (ListInstanceProfilesForRoleRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesForRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesForRoleRequest || (ListInstanceProfilesForRoleRequest = {}));
export var ListInstanceProfilesForRoleResponse;
(function (ListInstanceProfilesForRoleResponse) {
    /**
     * @internal
     */
    ListInstanceProfilesForRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesForRoleResponse || (ListInstanceProfilesForRoleResponse = {}));
export var ListInstanceProfileTagsRequest;
(function (ListInstanceProfileTagsRequest) {
    /**
     * @internal
     */
    ListInstanceProfileTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfileTagsRequest || (ListInstanceProfileTagsRequest = {}));
export var ListInstanceProfileTagsResponse;
(function (ListInstanceProfileTagsResponse) {
    /**
     * @internal
     */
    ListInstanceProfileTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfileTagsResponse || (ListInstanceProfileTagsResponse = {}));
export var ListMFADevicesRequest;
(function (ListMFADevicesRequest) {
    /**
     * @internal
     */
    ListMFADevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMFADevicesRequest || (ListMFADevicesRequest = {}));
export var MFADevice;
(function (MFADevice) {
    /**
     * @internal
     */
    MFADevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MFADevice || (MFADevice = {}));
export var ListMFADevicesResponse;
(function (ListMFADevicesResponse) {
    /**
     * @internal
     */
    ListMFADevicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMFADevicesResponse || (ListMFADevicesResponse = {}));
export var ListMFADeviceTagsRequest;
(function (ListMFADeviceTagsRequest) {
    /**
     * @internal
     */
    ListMFADeviceTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMFADeviceTagsRequest || (ListMFADeviceTagsRequest = {}));
export var ListMFADeviceTagsResponse;
(function (ListMFADeviceTagsResponse) {
    /**
     * @internal
     */
    ListMFADeviceTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMFADeviceTagsResponse || (ListMFADeviceTagsResponse = {}));
export var ListOpenIDConnectProvidersRequest;
(function (ListOpenIDConnectProvidersRequest) {
    /**
     * @internal
     */
    ListOpenIDConnectProvidersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpenIDConnectProvidersRequest || (ListOpenIDConnectProvidersRequest = {}));
export var OpenIDConnectProviderListEntry;
(function (OpenIDConnectProviderListEntry) {
    /**
     * @internal
     */
    OpenIDConnectProviderListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenIDConnectProviderListEntry || (OpenIDConnectProviderListEntry = {}));
export var ListOpenIDConnectProvidersResponse;
(function (ListOpenIDConnectProvidersResponse) {
    /**
     * @internal
     */
    ListOpenIDConnectProvidersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpenIDConnectProvidersResponse || (ListOpenIDConnectProvidersResponse = {}));
export var ListOpenIDConnectProviderTagsRequest;
(function (ListOpenIDConnectProviderTagsRequest) {
    /**
     * @internal
     */
    ListOpenIDConnectProviderTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpenIDConnectProviderTagsRequest || (ListOpenIDConnectProviderTagsRequest = {}));
export var ListOpenIDConnectProviderTagsResponse;
(function (ListOpenIDConnectProviderTagsResponse) {
    /**
     * @internal
     */
    ListOpenIDConnectProviderTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpenIDConnectProviderTagsResponse || (ListOpenIDConnectProviderTagsResponse = {}));
export var PolicyScopeType;
(function (PolicyScopeType) {
    PolicyScopeType["AWS"] = "AWS";
    PolicyScopeType["All"] = "All";
    PolicyScopeType["Local"] = "Local";
})(PolicyScopeType || (PolicyScopeType = {}));
export var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesRequest || (ListPoliciesRequest = {}));
export var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesResponse || (ListPoliciesResponse = {}));
export var ListPoliciesGrantingServiceAccessRequest;
(function (ListPoliciesGrantingServiceAccessRequest) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesGrantingServiceAccessRequest || (ListPoliciesGrantingServiceAccessRequest = {}));
export var PolicyType;
(function (PolicyType) {
    PolicyType["INLINE"] = "INLINE";
    PolicyType["MANAGED"] = "MANAGED";
})(PolicyType || (PolicyType = {}));
export var PolicyGrantingServiceAccess;
(function (PolicyGrantingServiceAccess) {
    /**
     * @internal
     */
    PolicyGrantingServiceAccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyGrantingServiceAccess || (PolicyGrantingServiceAccess = {}));
export var ListPoliciesGrantingServiceAccessEntry;
(function (ListPoliciesGrantingServiceAccessEntry) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesGrantingServiceAccessEntry || (ListPoliciesGrantingServiceAccessEntry = {}));
export var ListPoliciesGrantingServiceAccessResponse;
(function (ListPoliciesGrantingServiceAccessResponse) {
    /**
     * @internal
     */
    ListPoliciesGrantingServiceAccessResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesGrantingServiceAccessResponse || (ListPoliciesGrantingServiceAccessResponse = {}));
export var ListPolicyTagsRequest;
(function (ListPolicyTagsRequest) {
    /**
     * @internal
     */
    ListPolicyTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPolicyTagsRequest || (ListPolicyTagsRequest = {}));
export var ListPolicyTagsResponse;
(function (ListPolicyTagsResponse) {
    /**
     * @internal
     */
    ListPolicyTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPolicyTagsResponse || (ListPolicyTagsResponse = {}));
export var ListPolicyVersionsRequest;
(function (ListPolicyVersionsRequest) {
    /**
     * @internal
     */
    ListPolicyVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPolicyVersionsRequest || (ListPolicyVersionsRequest = {}));
export var ListPolicyVersionsResponse;
(function (ListPolicyVersionsResponse) {
    /**
     * @internal
     */
    ListPolicyVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPolicyVersionsResponse || (ListPolicyVersionsResponse = {}));
export var ListRolePoliciesRequest;
(function (ListRolePoliciesRequest) {
    /**
     * @internal
     */
    ListRolePoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRolePoliciesRequest || (ListRolePoliciesRequest = {}));
export var ListRolePoliciesResponse;
(function (ListRolePoliciesResponse) {
    /**
     * @internal
     */
    ListRolePoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRolePoliciesResponse || (ListRolePoliciesResponse = {}));
export var ListRolesRequest;
(function (ListRolesRequest) {
    /**
     * @internal
     */
    ListRolesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRolesRequest || (ListRolesRequest = {}));
export var ListRolesResponse;
(function (ListRolesResponse) {
    /**
     * @internal
     */
    ListRolesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRolesResponse || (ListRolesResponse = {}));
export var ListRoleTagsRequest;
(function (ListRoleTagsRequest) {
    /**
     * @internal
     */
    ListRoleTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoleTagsRequest || (ListRoleTagsRequest = {}));
export var ListRoleTagsResponse;
(function (ListRoleTagsResponse) {
    /**
     * @internal
     */
    ListRoleTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoleTagsResponse || (ListRoleTagsResponse = {}));
export var ListSAMLProvidersRequest;
(function (ListSAMLProvidersRequest) {
    /**
     * @internal
     */
    ListSAMLProvidersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSAMLProvidersRequest || (ListSAMLProvidersRequest = {}));
export var SAMLProviderListEntry;
(function (SAMLProviderListEntry) {
    /**
     * @internal
     */
    SAMLProviderListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SAMLProviderListEntry || (SAMLProviderListEntry = {}));
export var ListSAMLProvidersResponse;
(function (ListSAMLProvidersResponse) {
    /**
     * @internal
     */
    ListSAMLProvidersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSAMLProvidersResponse || (ListSAMLProvidersResponse = {}));
export var ListSAMLProviderTagsRequest;
(function (ListSAMLProviderTagsRequest) {
    /**
     * @internal
     */
    ListSAMLProviderTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSAMLProviderTagsRequest || (ListSAMLProviderTagsRequest = {}));
export var ListSAMLProviderTagsResponse;
(function (ListSAMLProviderTagsResponse) {
    /**
     * @internal
     */
    ListSAMLProviderTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSAMLProviderTagsResponse || (ListSAMLProviderTagsResponse = {}));
export var ListServerCertificatesRequest;
(function (ListServerCertificatesRequest) {
    /**
     * @internal
     */
    ListServerCertificatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServerCertificatesRequest || (ListServerCertificatesRequest = {}));
export var ListServerCertificatesResponse;
(function (ListServerCertificatesResponse) {
    /**
     * @internal
     */
    ListServerCertificatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServerCertificatesResponse || (ListServerCertificatesResponse = {}));
export var ListServerCertificateTagsRequest;
(function (ListServerCertificateTagsRequest) {
    /**
     * @internal
     */
    ListServerCertificateTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServerCertificateTagsRequest || (ListServerCertificateTagsRequest = {}));
export var ListServerCertificateTagsResponse;
(function (ListServerCertificateTagsResponse) {
    /**
     * @internal
     */
    ListServerCertificateTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServerCertificateTagsResponse || (ListServerCertificateTagsResponse = {}));
export var ListServiceSpecificCredentialsRequest;
(function (ListServiceSpecificCredentialsRequest) {
    /**
     * @internal
     */
    ListServiceSpecificCredentialsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServiceSpecificCredentialsRequest || (ListServiceSpecificCredentialsRequest = {}));
export var ServiceSpecificCredentialMetadata;
(function (ServiceSpecificCredentialMetadata) {
    /**
     * @internal
     */
    ServiceSpecificCredentialMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceSpecificCredentialMetadata || (ServiceSpecificCredentialMetadata = {}));
export var ListServiceSpecificCredentialsResponse;
(function (ListServiceSpecificCredentialsResponse) {
    /**
     * @internal
     */
    ListServiceSpecificCredentialsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServiceSpecificCredentialsResponse || (ListServiceSpecificCredentialsResponse = {}));
export var ListSigningCertificatesRequest;
(function (ListSigningCertificatesRequest) {
    /**
     * @internal
     */
    ListSigningCertificatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSigningCertificatesRequest || (ListSigningCertificatesRequest = {}));
export var SigningCertificate;
(function (SigningCertificate) {
    /**
     * @internal
     */
    SigningCertificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SigningCertificate || (SigningCertificate = {}));
export var ListSigningCertificatesResponse;
(function (ListSigningCertificatesResponse) {
    /**
     * @internal
     */
    ListSigningCertificatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSigningCertificatesResponse || (ListSigningCertificatesResponse = {}));
export var ListSSHPublicKeysRequest;
(function (ListSSHPublicKeysRequest) {
    /**
     * @internal
     */
    ListSSHPublicKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSSHPublicKeysRequest || (ListSSHPublicKeysRequest = {}));
export var SSHPublicKeyMetadata;
(function (SSHPublicKeyMetadata) {
    /**
     * @internal
     */
    SSHPublicKeyMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSHPublicKeyMetadata || (SSHPublicKeyMetadata = {}));
export var ListSSHPublicKeysResponse;
(function (ListSSHPublicKeysResponse) {
    /**
     * @internal
     */
    ListSSHPublicKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSSHPublicKeysResponse || (ListSSHPublicKeysResponse = {}));
export var ListUserPoliciesRequest;
(function (ListUserPoliciesRequest) {
    /**
     * @internal
     */
    ListUserPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserPoliciesRequest || (ListUserPoliciesRequest = {}));
export var ListUserPoliciesResponse;
(function (ListUserPoliciesResponse) {
    /**
     * @internal
     */
    ListUserPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserPoliciesResponse || (ListUserPoliciesResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersRequest || (ListUsersRequest = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersResponse || (ListUsersResponse = {}));
export var ListUserTagsRequest;
(function (ListUserTagsRequest) {
    /**
     * @internal
     */
    ListUserTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserTagsRequest || (ListUserTagsRequest = {}));
export var ListUserTagsResponse;
(function (ListUserTagsResponse) {
    /**
     * @internal
     */
    ListUserTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserTagsResponse || (ListUserTagsResponse = {}));
export var ListVirtualMFADevicesRequest;
(function (ListVirtualMFADevicesRequest) {
    /**
     * @internal
     */
    ListVirtualMFADevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVirtualMFADevicesRequest || (ListVirtualMFADevicesRequest = {}));
export var ListVirtualMFADevicesResponse;
(function (ListVirtualMFADevicesResponse) {
    /**
     * @internal
     */
    ListVirtualMFADevicesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.VirtualMFADevices && {
        VirtualMFADevices: obj.VirtualMFADevices.map(function (item) { return VirtualMFADevice.filterSensitiveLog(item); }),
    }))); };
})(ListVirtualMFADevicesResponse || (ListVirtualMFADevicesResponse = {}));
export var PutGroupPolicyRequest;
(function (PutGroupPolicyRequest) {
    /**
     * @internal
     */
    PutGroupPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutGroupPolicyRequest || (PutGroupPolicyRequest = {}));
export var PutRolePermissionsBoundaryRequest;
(function (PutRolePermissionsBoundaryRequest) {
    /**
     * @internal
     */
    PutRolePermissionsBoundaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRolePermissionsBoundaryRequest || (PutRolePermissionsBoundaryRequest = {}));
export var PutRolePolicyRequest;
(function (PutRolePolicyRequest) {
    /**
     * @internal
     */
    PutRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRolePolicyRequest || (PutRolePolicyRequest = {}));
export var PutUserPermissionsBoundaryRequest;
(function (PutUserPermissionsBoundaryRequest) {
    /**
     * @internal
     */
    PutUserPermissionsBoundaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutUserPermissionsBoundaryRequest || (PutUserPermissionsBoundaryRequest = {}));
export var PutUserPolicyRequest;
(function (PutUserPolicyRequest) {
    /**
     * @internal
     */
    PutUserPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutUserPolicyRequest || (PutUserPolicyRequest = {}));
export var RemoveClientIDFromOpenIDConnectProviderRequest;
(function (RemoveClientIDFromOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    RemoveClientIDFromOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveClientIDFromOpenIDConnectProviderRequest || (RemoveClientIDFromOpenIDConnectProviderRequest = {}));
export var RemoveRoleFromInstanceProfileRequest;
(function (RemoveRoleFromInstanceProfileRequest) {
    /**
     * @internal
     */
    RemoveRoleFromInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveRoleFromInstanceProfileRequest || (RemoveRoleFromInstanceProfileRequest = {}));
export var RemoveUserFromGroupRequest;
(function (RemoveUserFromGroupRequest) {
    /**
     * @internal
     */
    RemoveUserFromGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveUserFromGroupRequest || (RemoveUserFromGroupRequest = {}));
export var ResetServiceSpecificCredentialRequest;
(function (ResetServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    ResetServiceSpecificCredentialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetServiceSpecificCredentialRequest || (ResetServiceSpecificCredentialRequest = {}));
export var ResetServiceSpecificCredentialResponse;
(function (ResetServiceSpecificCredentialResponse) {
    /**
     * @internal
     */
    ResetServiceSpecificCredentialResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServiceSpecificCredential && {
        ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
    }))); };
})(ResetServiceSpecificCredentialResponse || (ResetServiceSpecificCredentialResponse = {}));
export var ResyncMFADeviceRequest;
(function (ResyncMFADeviceRequest) {
    /**
     * @internal
     */
    ResyncMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResyncMFADeviceRequest || (ResyncMFADeviceRequest = {}));
export var SetDefaultPolicyVersionRequest;
(function (SetDefaultPolicyVersionRequest) {
    /**
     * @internal
     */
    SetDefaultPolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetDefaultPolicyVersionRequest || (SetDefaultPolicyVersionRequest = {}));
export var GlobalEndpointTokenVersion;
(function (GlobalEndpointTokenVersion) {
    GlobalEndpointTokenVersion["v1Token"] = "v1Token";
    GlobalEndpointTokenVersion["v2Token"] = "v2Token";
})(GlobalEndpointTokenVersion || (GlobalEndpointTokenVersion = {}));
export var SetSecurityTokenServicePreferencesRequest;
(function (SetSecurityTokenServicePreferencesRequest) {
    /**
     * @internal
     */
    SetSecurityTokenServicePreferencesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSecurityTokenServicePreferencesRequest || (SetSecurityTokenServicePreferencesRequest = {}));
export var PolicyEvaluationException;
(function (PolicyEvaluationException) {
    /**
     * @internal
     */
    PolicyEvaluationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyEvaluationException || (PolicyEvaluationException = {}));
export var ContextKeyTypeEnum;
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
})(ContextKeyTypeEnum || (ContextKeyTypeEnum = {}));
export var ContextEntry;
(function (ContextEntry) {
    /**
     * @internal
     */
    ContextEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContextEntry || (ContextEntry = {}));
export var SimulateCustomPolicyRequest;
(function (SimulateCustomPolicyRequest) {
    /**
     * @internal
     */
    SimulateCustomPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulateCustomPolicyRequest || (SimulateCustomPolicyRequest = {}));
export var PolicyEvaluationDecisionType;
(function (PolicyEvaluationDecisionType) {
    PolicyEvaluationDecisionType["ALLOWED"] = "allowed";
    PolicyEvaluationDecisionType["EXPLICIT_DENY"] = "explicitDeny";
    PolicyEvaluationDecisionType["IMPLICIT_DENY"] = "implicitDeny";
})(PolicyEvaluationDecisionType || (PolicyEvaluationDecisionType = {}));
export var Position;
(function (Position) {
    /**
     * @internal
     */
    Position.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Position || (Position = {}));
export var PolicySourceType;
(function (PolicySourceType) {
    PolicySourceType["AWS_MANAGED"] = "aws-managed";
    PolicySourceType["GROUP"] = "group";
    PolicySourceType["NONE"] = "none";
    PolicySourceType["RESOURCE"] = "resource";
    PolicySourceType["ROLE"] = "role";
    PolicySourceType["USER"] = "user";
    PolicySourceType["USER_MANAGED"] = "user-managed";
})(PolicySourceType || (PolicySourceType = {}));
export var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Statement || (Statement = {}));
export var OrganizationsDecisionDetail;
(function (OrganizationsDecisionDetail) {
    /**
     * @internal
     */
    OrganizationsDecisionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationsDecisionDetail || (OrganizationsDecisionDetail = {}));
export var PermissionsBoundaryDecisionDetail;
(function (PermissionsBoundaryDecisionDetail) {
    /**
     * @internal
     */
    PermissionsBoundaryDecisionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PermissionsBoundaryDecisionDetail || (PermissionsBoundaryDecisionDetail = {}));
export var ResourceSpecificResult;
(function (ResourceSpecificResult) {
    /**
     * @internal
     */
    ResourceSpecificResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceSpecificResult || (ResourceSpecificResult = {}));
export var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EvaluationResult || (EvaluationResult = {}));
export var SimulatePolicyResponse;
(function (SimulatePolicyResponse) {
    /**
     * @internal
     */
    SimulatePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulatePolicyResponse || (SimulatePolicyResponse = {}));
export var SimulatePrincipalPolicyRequest;
(function (SimulatePrincipalPolicyRequest) {
    /**
     * @internal
     */
    SimulatePrincipalPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulatePrincipalPolicyRequest || (SimulatePrincipalPolicyRequest = {}));
export var TagInstanceProfileRequest;
(function (TagInstanceProfileRequest) {
    /**
     * @internal
     */
    TagInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagInstanceProfileRequest || (TagInstanceProfileRequest = {}));
export var TagMFADeviceRequest;
(function (TagMFADeviceRequest) {
    /**
     * @internal
     */
    TagMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagMFADeviceRequest || (TagMFADeviceRequest = {}));
export var TagOpenIDConnectProviderRequest;
(function (TagOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    TagOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagOpenIDConnectProviderRequest || (TagOpenIDConnectProviderRequest = {}));
export var TagPolicyRequest;
(function (TagPolicyRequest) {
    /**
     * @internal
     */
    TagPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagPolicyRequest || (TagPolicyRequest = {}));
export var TagRoleRequest;
(function (TagRoleRequest) {
    /**
     * @internal
     */
    TagRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagRoleRequest || (TagRoleRequest = {}));
export var TagSAMLProviderRequest;
(function (TagSAMLProviderRequest) {
    /**
     * @internal
     */
    TagSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagSAMLProviderRequest || (TagSAMLProviderRequest = {}));
export var TagServerCertificateRequest;
(function (TagServerCertificateRequest) {
    /**
     * @internal
     */
    TagServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagServerCertificateRequest || (TagServerCertificateRequest = {}));
export var TagUserRequest;
(function (TagUserRequest) {
    /**
     * @internal
     */
    TagUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagUserRequest || (TagUserRequest = {}));
export var UntagInstanceProfileRequest;
(function (UntagInstanceProfileRequest) {
    /**
     * @internal
     */
    UntagInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagInstanceProfileRequest || (UntagInstanceProfileRequest = {}));
export var UntagMFADeviceRequest;
(function (UntagMFADeviceRequest) {
    /**
     * @internal
     */
    UntagMFADeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagMFADeviceRequest || (UntagMFADeviceRequest = {}));
export var UntagOpenIDConnectProviderRequest;
(function (UntagOpenIDConnectProviderRequest) {
    /**
     * @internal
     */
    UntagOpenIDConnectProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagOpenIDConnectProviderRequest || (UntagOpenIDConnectProviderRequest = {}));
//# sourceMappingURL=models_0.js.map