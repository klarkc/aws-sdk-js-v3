"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSSHPublicKeyResponse = exports.UploadSSHPublicKeyRequest = exports.InvalidPublicKeyException = exports.DuplicateSSHPublicKeyException = exports.UploadSigningCertificateResponse = exports.UploadSigningCertificateRequest = exports.InvalidCertificateException = exports.DuplicateCertificateException = exports.UploadServerCertificateResponse = exports.UploadServerCertificateRequest = exports.MalformedCertificateException = exports.KeyPairMismatchException = exports.UpdateUserRequest = exports.UpdateSSHPublicKeyRequest = exports.UpdateSigningCertificateRequest = exports.UpdateServiceSpecificCredentialRequest = exports.UpdateServerCertificateRequest = exports.UpdateSAMLProviderResponse = exports.UpdateSAMLProviderRequest = exports.UpdateRoleDescriptionResponse = exports.UpdateRoleDescriptionRequest = exports.UpdateRoleResponse = exports.UpdateRoleRequest = exports.UpdateOpenIDConnectProviderThumbprintRequest = exports.UpdateLoginProfileRequest = exports.UpdateGroupRequest = exports.UpdateAssumeRolePolicyRequest = exports.UpdateAccountPasswordPolicyRequest = exports.UpdateAccessKeyRequest = exports.UntagUserRequest = exports.UntagServerCertificateRequest = exports.UntagSAMLProviderRequest = exports.UntagRoleRequest = exports.UntagPolicyRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var UntagPolicyRequest;
(function (UntagPolicyRequest) {
    /**
     * @internal
     */
    UntagPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagPolicyRequest = exports.UntagPolicyRequest || (exports.UntagPolicyRequest = {}));
var UntagRoleRequest;
(function (UntagRoleRequest) {
    /**
     * @internal
     */
    UntagRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagRoleRequest = exports.UntagRoleRequest || (exports.UntagRoleRequest = {}));
var UntagSAMLProviderRequest;
(function (UntagSAMLProviderRequest) {
    /**
     * @internal
     */
    UntagSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagSAMLProviderRequest = exports.UntagSAMLProviderRequest || (exports.UntagSAMLProviderRequest = {}));
var UntagServerCertificateRequest;
(function (UntagServerCertificateRequest) {
    /**
     * @internal
     */
    UntagServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagServerCertificateRequest = exports.UntagServerCertificateRequest || (exports.UntagServerCertificateRequest = {}));
var UntagUserRequest;
(function (UntagUserRequest) {
    /**
     * @internal
     */
    UntagUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagUserRequest = exports.UntagUserRequest || (exports.UntagUserRequest = {}));
var UpdateAccessKeyRequest;
(function (UpdateAccessKeyRequest) {
    /**
     * @internal
     */
    UpdateAccessKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccessKeyRequest = exports.UpdateAccessKeyRequest || (exports.UpdateAccessKeyRequest = {}));
var UpdateAccountPasswordPolicyRequest;
(function (UpdateAccountPasswordPolicyRequest) {
    /**
     * @internal
     */
    UpdateAccountPasswordPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountPasswordPolicyRequest = exports.UpdateAccountPasswordPolicyRequest || (exports.UpdateAccountPasswordPolicyRequest = {}));
var UpdateAssumeRolePolicyRequest;
(function (UpdateAssumeRolePolicyRequest) {
    /**
     * @internal
     */
    UpdateAssumeRolePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssumeRolePolicyRequest = exports.UpdateAssumeRolePolicyRequest || (exports.UpdateAssumeRolePolicyRequest = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateLoginProfileRequest;
(function (UpdateLoginProfileRequest) {
    /**
     * @internal
     */
    UpdateLoginProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateLoginProfileRequest = exports.UpdateLoginProfileRequest || (exports.UpdateLoginProfileRequest = {}));
var UpdateOpenIDConnectProviderThumbprintRequest;
(function (UpdateOpenIDConnectProviderThumbprintRequest) {
    /**
     * @internal
     */
    UpdateOpenIDConnectProviderThumbprintRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOpenIDConnectProviderThumbprintRequest = exports.UpdateOpenIDConnectProviderThumbprintRequest || (exports.UpdateOpenIDConnectProviderThumbprintRequest = {}));
var UpdateRoleRequest;
(function (UpdateRoleRequest) {
    /**
     * @internal
     */
    UpdateRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleRequest = exports.UpdateRoleRequest || (exports.UpdateRoleRequest = {}));
var UpdateRoleResponse;
(function (UpdateRoleResponse) {
    /**
     * @internal
     */
    UpdateRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleResponse = exports.UpdateRoleResponse || (exports.UpdateRoleResponse = {}));
var UpdateRoleDescriptionRequest;
(function (UpdateRoleDescriptionRequest) {
    /**
     * @internal
     */
    UpdateRoleDescriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleDescriptionRequest = exports.UpdateRoleDescriptionRequest || (exports.UpdateRoleDescriptionRequest = {}));
var UpdateRoleDescriptionResponse;
(function (UpdateRoleDescriptionResponse) {
    /**
     * @internal
     */
    UpdateRoleDescriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleDescriptionResponse = exports.UpdateRoleDescriptionResponse || (exports.UpdateRoleDescriptionResponse = {}));
var UpdateSAMLProviderRequest;
(function (UpdateSAMLProviderRequest) {
    /**
     * @internal
     */
    UpdateSAMLProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSAMLProviderRequest = exports.UpdateSAMLProviderRequest || (exports.UpdateSAMLProviderRequest = {}));
var UpdateSAMLProviderResponse;
(function (UpdateSAMLProviderResponse) {
    /**
     * @internal
     */
    UpdateSAMLProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSAMLProviderResponse = exports.UpdateSAMLProviderResponse || (exports.UpdateSAMLProviderResponse = {}));
var UpdateServerCertificateRequest;
(function (UpdateServerCertificateRequest) {
    /**
     * @internal
     */
    UpdateServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServerCertificateRequest = exports.UpdateServerCertificateRequest || (exports.UpdateServerCertificateRequest = {}));
var UpdateServiceSpecificCredentialRequest;
(function (UpdateServiceSpecificCredentialRequest) {
    /**
     * @internal
     */
    UpdateServiceSpecificCredentialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceSpecificCredentialRequest = exports.UpdateServiceSpecificCredentialRequest || (exports.UpdateServiceSpecificCredentialRequest = {}));
var UpdateSigningCertificateRequest;
(function (UpdateSigningCertificateRequest) {
    /**
     * @internal
     */
    UpdateSigningCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSigningCertificateRequest = exports.UpdateSigningCertificateRequest || (exports.UpdateSigningCertificateRequest = {}));
var UpdateSSHPublicKeyRequest;
(function (UpdateSSHPublicKeyRequest) {
    /**
     * @internal
     */
    UpdateSSHPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSSHPublicKeyRequest = exports.UpdateSSHPublicKeyRequest || (exports.UpdateSSHPublicKeyRequest = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var KeyPairMismatchException;
(function (KeyPairMismatchException) {
    /**
     * @internal
     */
    KeyPairMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPairMismatchException = exports.KeyPairMismatchException || (exports.KeyPairMismatchException = {}));
var MalformedCertificateException;
(function (MalformedCertificateException) {
    /**
     * @internal
     */
    MalformedCertificateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedCertificateException = exports.MalformedCertificateException || (exports.MalformedCertificateException = {}));
var UploadServerCertificateRequest;
(function (UploadServerCertificateRequest) {
    /**
     * @internal
     */
    UploadServerCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PrivateKey && { PrivateKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadServerCertificateRequest = exports.UploadServerCertificateRequest || (exports.UploadServerCertificateRequest = {}));
var UploadServerCertificateResponse;
(function (UploadServerCertificateResponse) {
    /**
     * @internal
     */
    UploadServerCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadServerCertificateResponse = exports.UploadServerCertificateResponse || (exports.UploadServerCertificateResponse = {}));
var DuplicateCertificateException;
(function (DuplicateCertificateException) {
    /**
     * @internal
     */
    DuplicateCertificateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateCertificateException = exports.DuplicateCertificateException || (exports.DuplicateCertificateException = {}));
var InvalidCertificateException;
(function (InvalidCertificateException) {
    /**
     * @internal
     */
    InvalidCertificateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCertificateException = exports.InvalidCertificateException || (exports.InvalidCertificateException = {}));
var UploadSigningCertificateRequest;
(function (UploadSigningCertificateRequest) {
    /**
     * @internal
     */
    UploadSigningCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadSigningCertificateRequest = exports.UploadSigningCertificateRequest || (exports.UploadSigningCertificateRequest = {}));
var UploadSigningCertificateResponse;
(function (UploadSigningCertificateResponse) {
    /**
     * @internal
     */
    UploadSigningCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadSigningCertificateResponse = exports.UploadSigningCertificateResponse || (exports.UploadSigningCertificateResponse = {}));
var DuplicateSSHPublicKeyException;
(function (DuplicateSSHPublicKeyException) {
    /**
     * @internal
     */
    DuplicateSSHPublicKeyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateSSHPublicKeyException = exports.DuplicateSSHPublicKeyException || (exports.DuplicateSSHPublicKeyException = {}));
var InvalidPublicKeyException;
(function (InvalidPublicKeyException) {
    /**
     * @internal
     */
    InvalidPublicKeyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPublicKeyException = exports.InvalidPublicKeyException || (exports.InvalidPublicKeyException = {}));
var UploadSSHPublicKeyRequest;
(function (UploadSSHPublicKeyRequest) {
    /**
     * @internal
     */
    UploadSSHPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadSSHPublicKeyRequest = exports.UploadSSHPublicKeyRequest || (exports.UploadSSHPublicKeyRequest = {}));
var UploadSSHPublicKeyResponse;
(function (UploadSSHPublicKeyResponse) {
    /**
     * @internal
     */
    UploadSSHPublicKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadSSHPublicKeyResponse = exports.UploadSSHPublicKeyResponse || (exports.UploadSSHPublicKeyResponse = {}));
//# sourceMappingURL=models_1.js.map