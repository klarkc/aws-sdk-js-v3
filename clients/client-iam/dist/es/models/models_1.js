import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var UntagPolicyRequest;
(function (UntagPolicyRequest) {
    /**
     * @internal
     */
    UntagPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagPolicyRequest || (UntagPolicyRequest = {}));
export var UntagRoleRequest;
(function (UntagRoleRequest) {
    /**
     * @internal
     */
    UntagRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagRoleRequest || (UntagRoleRequest = {}));
export var UntagSAMLProviderRequest;
(function (UntagSAMLProviderRequest) {
    /**
     * @internal
     */
    UntagSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagSAMLProviderRequest || (UntagSAMLProviderRequest = {}));
export var UntagServerCertificateRequest;
(function (UntagServerCertificateRequest) {
    /**
     * @internal
     */
    UntagServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagServerCertificateRequest || (UntagServerCertificateRequest = {}));
export var UntagUserRequest;
(function (UntagUserRequest) {
    /**
     * @internal
     */
    UntagUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagUserRequest || (UntagUserRequest = {}));
export var UpdateAccessKeyRequest;
(function (UpdateAccessKeyRequest) {
    /**
     * @internal
     */
    UpdateAccessKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAccessKeyRequest || (UpdateAccessKeyRequest = {}));
export var UpdateAccountPasswordPolicyRequest;
(function (UpdateAccountPasswordPolicyRequest) {
    /**
     * @internal
     */
    UpdateAccountPasswordPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAccountPasswordPolicyRequest || (UpdateAccountPasswordPolicyRequest = {}));
export var UpdateAssumeRolePolicyRequest;
(function (UpdateAssumeRolePolicyRequest) {
    /**
     * @internal
     */
    UpdateAssumeRolePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssumeRolePolicyRequest || (UpdateAssumeRolePolicyRequest = {}));
export var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGroupRequest || (UpdateGroupRequest = {}));
export var UpdateLoginProfileRequest;
(function (UpdateLoginProfileRequest) {
    /**
     * @internal
     */
    UpdateLoginProfileRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(UpdateLoginProfileRequest || (UpdateLoginProfileRequest = {}));
export var UpdateOpenIDConnectProviderThumbprintRequest;
(function (UpdateOpenIDConnectProviderThumbprintRequest) {
    /**
     * @internal
     */
    UpdateOpenIDConnectProviderThumbprintRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpenIDConnectProviderThumbprintRequest || (UpdateOpenIDConnectProviderThumbprintRequest = {}));
export var UpdateRoleRequest;
(function (UpdateRoleRequest) {
    /**
     * @internal
     */
    UpdateRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoleRequest || (UpdateRoleRequest = {}));
export var UpdateRoleResponse;
(function (UpdateRoleResponse) {
    /**
     * @internal
     */
    UpdateRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoleResponse || (UpdateRoleResponse = {}));
export var UpdateRoleDescriptionRequest;
(function (UpdateRoleDescriptionRequest) {
    /**
     * @internal
     */
    UpdateRoleDescriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoleDescriptionRequest || (UpdateRoleDescriptionRequest = {}));
export var UpdateRoleDescriptionResponse;
(function (UpdateRoleDescriptionResponse) {
    /**
     * @internal
     */
    UpdateRoleDescriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoleDescriptionResponse || (UpdateRoleDescriptionResponse = {}));
export var UpdateSAMLProviderRequest;
(function (UpdateSAMLProviderRequest) {
    /**
     * @internal
     */
    UpdateSAMLProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSAMLProviderRequest || (UpdateSAMLProviderRequest = {}));
export var UpdateSAMLProviderResponse;
(function (UpdateSAMLProviderResponse) {
    /**
     * @internal
     */
    UpdateSAMLProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSAMLProviderResponse || (UpdateSAMLProviderResponse = {}));
export var UpdateServerCertificateRequest;
(function (UpdateServerCertificateRequest) {
    /**
     * @internal
     */
    UpdateServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServerCertificateRequest || (UpdateServerCertificateRequest = {}));
export var UpdateServiceSpecificCredentialRequest;
(function (UpdateServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    UpdateServiceSpecificCredentialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSpecificCredentialRequest || (UpdateServiceSpecificCredentialRequest = {}));
export var UpdateSigningCertificateRequest;
(function (UpdateSigningCertificateRequest) {
    /**
     * @internal
     */
    UpdateSigningCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSigningCertificateRequest || (UpdateSigningCertificateRequest = {}));
export var UpdateSSHPublicKeyRequest;
(function (UpdateSSHPublicKeyRequest) {
    /**
     * @internal
     */
    UpdateSSHPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSSHPublicKeyRequest || (UpdateSSHPublicKeyRequest = {}));
export var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserRequest || (UpdateUserRequest = {}));
export var KeyPairMismatchException;
(function (KeyPairMismatchException) {
    /**
     * @internal
     */
    KeyPairMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyPairMismatchException || (KeyPairMismatchException = {}));
export var MalformedCertificateException;
(function (MalformedCertificateException) {
    /**
     * @internal
     */
    MalformedCertificateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MalformedCertificateException || (MalformedCertificateException = {}));
export var UploadServerCertificateRequest;
(function (UploadServerCertificateRequest) {
    /**
     * @internal
     */
    UploadServerCertificateRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }))); };
})(UploadServerCertificateRequest || (UploadServerCertificateRequest = {}));
export var UploadServerCertificateResponse;
(function (UploadServerCertificateResponse) {
    /**
     * @internal
     */
    UploadServerCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadServerCertificateResponse || (UploadServerCertificateResponse = {}));
export var DuplicateCertificateException;
(function (DuplicateCertificateException) {
    /**
     * @internal
     */
    DuplicateCertificateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateCertificateException || (DuplicateCertificateException = {}));
export var InvalidCertificateException;
(function (InvalidCertificateException) {
    /**
     * @internal
     */
    InvalidCertificateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCertificateException || (InvalidCertificateException = {}));
export var UploadSigningCertificateRequest;
(function (UploadSigningCertificateRequest) {
    /**
     * @internal
     */
    UploadSigningCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadSigningCertificateRequest || (UploadSigningCertificateRequest = {}));
export var UploadSigningCertificateResponse;
(function (UploadSigningCertificateResponse) {
    /**
     * @internal
     */
    UploadSigningCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadSigningCertificateResponse || (UploadSigningCertificateResponse = {}));
export var DuplicateSSHPublicKeyException;
(function (DuplicateSSHPublicKeyException) {
    /**
     * @internal
     */
    DuplicateSSHPublicKeyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateSSHPublicKeyException || (DuplicateSSHPublicKeyException = {}));
export var InvalidPublicKeyException;
(function (InvalidPublicKeyException) {
    /**
     * @internal
     */
    InvalidPublicKeyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPublicKeyException || (InvalidPublicKeyException = {}));
export var UploadSSHPublicKeyRequest;
(function (UploadSSHPublicKeyRequest) {
    /**
     * @internal
     */
    UploadSSHPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadSSHPublicKeyRequest || (UploadSSHPublicKeyRequest = {}));
export var UploadSSHPublicKeyResponse;
(function (UploadSSHPublicKeyResponse) {
    /**
     * @internal
     */
    UploadSSHPublicKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadSSHPublicKeyResponse || (UploadSSHPublicKeyResponse = {}));
//# sourceMappingURL=models_1.js.map