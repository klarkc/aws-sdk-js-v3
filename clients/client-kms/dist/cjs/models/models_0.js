"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomKeyStoreHasCMKsException = exports.UnsupportedOperationException = exports.TagException = exports.MalformedPolicyDocumentException = exports.CreateKeyResponse = exports.KeyMetadata = exports.SigningAlgorithmSpec = exports.KeyState = exports.KeyManagerType = exports.ExpirationModelType = exports.EncryptionAlgorithmSpec = exports.CreateKeyRequest = exports.Tag = exports.OriginType = exports.KeyUsageType = exports.CustomerMasterKeySpec = exports.InvalidGrantTokenException = exports.DisabledException = exports.CreateGrantResponse = exports.CreateGrantRequest = exports.GrantOperation = exports.GrantConstraints = exports.IncorrectTrustAnchorException = exports.CustomKeyStoreNameInUseException = exports.CreateCustomKeyStoreResponse = exports.CreateCustomKeyStoreRequest = exports.LimitExceededException = exports.InvalidAliasNameException = exports.CreateAliasRequest = exports.ConnectionStateType = exports.ConnectionErrorCodeType = exports.CustomKeyStoreNotFoundException = exports.CustomKeyStoreInvalidStateException = exports.ConnectCustomKeyStoreResponse = exports.ConnectCustomKeyStoreRequest = exports.CloudHsmClusterNotRelatedException = exports.CloudHsmClusterNotFoundException = exports.CloudHsmClusterNotActiveException = exports.CloudHsmClusterInvalidConfigurationException = exports.CloudHsmClusterInUseException = exports.NotFoundException = exports.KMSInvalidStateException = exports.KMSInternalException = exports.InvalidArnException = exports.DependencyTimeoutException = exports.CancelKeyDeletionResponse = exports.CancelKeyDeletionRequest = exports.AlreadyExistsException = exports.AliasListEntry = exports.AlgorithmSpec = void 0;
exports.InvalidImportTokenException = exports.IncorrectKeyMaterialException = exports.ImportKeyMaterialResponse = exports.ImportKeyMaterialRequest = exports.GrantListEntry = exports.GetPublicKeyResponse = exports.GetPublicKeyRequest = exports.GetParametersForImportResponse = exports.GetParametersForImportRequest = exports.WrappingKeySpec = exports.GetKeyRotationStatusResponse = exports.GetKeyRotationStatusRequest = exports.GetKeyPolicyResponse = exports.GetKeyPolicyRequest = exports.GenerateRandomResponse = exports.GenerateRandomRequest = exports.GenerateDataKeyWithoutPlaintextResponse = exports.GenerateDataKeyWithoutPlaintextRequest = exports.GenerateDataKeyPairWithoutPlaintextResponse = exports.GenerateDataKeyPairWithoutPlaintextRequest = exports.GenerateDataKeyPairResponse = exports.GenerateDataKeyPairRequest = exports.GenerateDataKeyResponse = exports.GenerateDataKeyRequest = exports.ExpiredImportTokenException = exports.EncryptResponse = exports.EncryptRequest = exports.EnableKeyRotationRequest = exports.EnableKeyRequest = exports.DisconnectCustomKeyStoreResponse = exports.DisconnectCustomKeyStoreRequest = exports.DisableKeyRotationRequest = exports.DisableKeyRequest = exports.DescribeKeyResponse = exports.DescribeKeyRequest = exports.DescribeCustomKeyStoresResponse = exports.DescribeCustomKeyStoresRequest = exports.DeleteImportedKeyMaterialRequest = exports.DeleteCustomKeyStoreResponse = exports.DeleteCustomKeyStoreRequest = exports.DeleteAliasRequest = exports.KeyUnavailableException = exports.InvalidKeyUsageException = exports.InvalidCiphertextException = exports.IncorrectKeyException = exports.DecryptResponse = exports.DecryptRequest = exports.DataKeySpec = exports.DataKeyPairSpec = exports.CustomKeyStoresListEntry = void 0;
exports.VerifyResponse = exports.VerifyRequest = exports.UpdateKeyDescriptionRequest = exports.UpdateCustomKeyStoreResponse = exports.UpdateCustomKeyStoreRequest = exports.UpdateAliasRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.SignResponse = exports.SignRequest = exports.ScheduleKeyDeletionResponse = exports.ScheduleKeyDeletionRequest = exports.RevokeGrantRequest = exports.RetireGrantRequest = exports.ReEncryptResponse = exports.ReEncryptRequest = exports.PutKeyPolicyRequest = exports.MessageType = exports.ListRetirableGrantsRequest = exports.ListResourceTagsResponse = exports.ListResourceTagsRequest = exports.ListKeysResponse = exports.ListKeysRequest = exports.ListKeyPoliciesResponse = exports.ListKeyPoliciesRequest = exports.ListGrantsResponse = exports.ListGrantsRequest = exports.ListAliasesResponse = exports.ListAliasesRequest = exports.KMSInvalidSignatureException = exports.KeyListEntry = exports.InvalidMarkerException = exports.InvalidGrantIdException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AlgorithmSpec;
(function (AlgorithmSpec) {
    AlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    AlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    AlgorithmSpec["RSAES_PKCS1_V1_5"] = "RSAES_PKCS1_V1_5";
})(AlgorithmSpec = exports.AlgorithmSpec || (exports.AlgorithmSpec = {}));
var AliasListEntry;
(function (AliasListEntry) {
    /**
     * @internal
     */
    AliasListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AliasListEntry = exports.AliasListEntry || (exports.AliasListEntry = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var CancelKeyDeletionRequest;
(function (CancelKeyDeletionRequest) {
    /**
     * @internal
     */
    CancelKeyDeletionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelKeyDeletionRequest = exports.CancelKeyDeletionRequest || (exports.CancelKeyDeletionRequest = {}));
var CancelKeyDeletionResponse;
(function (CancelKeyDeletionResponse) {
    /**
     * @internal
     */
    CancelKeyDeletionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelKeyDeletionResponse = exports.CancelKeyDeletionResponse || (exports.CancelKeyDeletionResponse = {}));
var DependencyTimeoutException;
(function (DependencyTimeoutException) {
    /**
     * @internal
     */
    DependencyTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyTimeoutException = exports.DependencyTimeoutException || (exports.DependencyTimeoutException = {}));
var InvalidArnException;
(function (InvalidArnException) {
    /**
     * @internal
     */
    InvalidArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var KMSInternalException;
(function (KMSInternalException) {
    /**
     * @internal
     */
    KMSInternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInternalException = exports.KMSInternalException || (exports.KMSInternalException = {}));
var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    /**
     * @internal
     */
    KMSInvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInvalidStateException = exports.KMSInvalidStateException || (exports.KMSInvalidStateException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var CloudHsmClusterInUseException;
(function (CloudHsmClusterInUseException) {
    /**
     * @internal
     */
    CloudHsmClusterInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmClusterInUseException = exports.CloudHsmClusterInUseException || (exports.CloudHsmClusterInUseException = {}));
var CloudHsmClusterInvalidConfigurationException;
(function (CloudHsmClusterInvalidConfigurationException) {
    /**
     * @internal
     */
    CloudHsmClusterInvalidConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmClusterInvalidConfigurationException = exports.CloudHsmClusterInvalidConfigurationException || (exports.CloudHsmClusterInvalidConfigurationException = {}));
var CloudHsmClusterNotActiveException;
(function (CloudHsmClusterNotActiveException) {
    /**
     * @internal
     */
    CloudHsmClusterNotActiveException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmClusterNotActiveException = exports.CloudHsmClusterNotActiveException || (exports.CloudHsmClusterNotActiveException = {}));
var CloudHsmClusterNotFoundException;
(function (CloudHsmClusterNotFoundException) {
    /**
     * @internal
     */
    CloudHsmClusterNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmClusterNotFoundException = exports.CloudHsmClusterNotFoundException || (exports.CloudHsmClusterNotFoundException = {}));
var CloudHsmClusterNotRelatedException;
(function (CloudHsmClusterNotRelatedException) {
    /**
     * @internal
     */
    CloudHsmClusterNotRelatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmClusterNotRelatedException = exports.CloudHsmClusterNotRelatedException || (exports.CloudHsmClusterNotRelatedException = {}));
var ConnectCustomKeyStoreRequest;
(function (ConnectCustomKeyStoreRequest) {
    /**
     * @internal
     */
    ConnectCustomKeyStoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectCustomKeyStoreRequest = exports.ConnectCustomKeyStoreRequest || (exports.ConnectCustomKeyStoreRequest = {}));
var ConnectCustomKeyStoreResponse;
(function (ConnectCustomKeyStoreResponse) {
    /**
     * @internal
     */
    ConnectCustomKeyStoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectCustomKeyStoreResponse = exports.ConnectCustomKeyStoreResponse || (exports.ConnectCustomKeyStoreResponse = {}));
var CustomKeyStoreInvalidStateException;
(function (CustomKeyStoreInvalidStateException) {
    /**
     * @internal
     */
    CustomKeyStoreInvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomKeyStoreInvalidStateException = exports.CustomKeyStoreInvalidStateException || (exports.CustomKeyStoreInvalidStateException = {}));
var CustomKeyStoreNotFoundException;
(function (CustomKeyStoreNotFoundException) {
    /**
     * @internal
     */
    CustomKeyStoreNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomKeyStoreNotFoundException = exports.CustomKeyStoreNotFoundException || (exports.CustomKeyStoreNotFoundException = {}));
var ConnectionErrorCodeType;
(function (ConnectionErrorCodeType) {
    ConnectionErrorCodeType["CLUSTER_NOT_FOUND"] = "CLUSTER_NOT_FOUND";
    ConnectionErrorCodeType["INSUFFICIENT_CLOUDHSM_HSMS"] = "INSUFFICIENT_CLOUDHSM_HSMS";
    ConnectionErrorCodeType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ConnectionErrorCodeType["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ConnectionErrorCodeType["NETWORK_ERRORS"] = "NETWORK_ERRORS";
    ConnectionErrorCodeType["SUBNET_NOT_FOUND"] = "SUBNET_NOT_FOUND";
    ConnectionErrorCodeType["USER_LOCKED_OUT"] = "USER_LOCKED_OUT";
    ConnectionErrorCodeType["USER_LOGGED_IN"] = "USER_LOGGED_IN";
    ConnectionErrorCodeType["USER_NOT_FOUND"] = "USER_NOT_FOUND";
})(ConnectionErrorCodeType = exports.ConnectionErrorCodeType || (exports.ConnectionErrorCodeType = {}));
var ConnectionStateType;
(function (ConnectionStateType) {
    ConnectionStateType["CONNECTED"] = "CONNECTED";
    ConnectionStateType["CONNECTING"] = "CONNECTING";
    ConnectionStateType["DISCONNECTED"] = "DISCONNECTED";
    ConnectionStateType["DISCONNECTING"] = "DISCONNECTING";
    ConnectionStateType["FAILED"] = "FAILED";
})(ConnectionStateType = exports.ConnectionStateType || (exports.ConnectionStateType = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var InvalidAliasNameException;
(function (InvalidAliasNameException) {
    /**
     * @internal
     */
    InvalidAliasNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAliasNameException = exports.InvalidAliasNameException || (exports.InvalidAliasNameException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateCustomKeyStoreRequest;
(function (CreateCustomKeyStoreRequest) {
    /**
     * @internal
     */
    CreateCustomKeyStoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KeyStorePassword && { KeyStorePassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateCustomKeyStoreRequest = exports.CreateCustomKeyStoreRequest || (exports.CreateCustomKeyStoreRequest = {}));
var CreateCustomKeyStoreResponse;
(function (CreateCustomKeyStoreResponse) {
    /**
     * @internal
     */
    CreateCustomKeyStoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomKeyStoreResponse = exports.CreateCustomKeyStoreResponse || (exports.CreateCustomKeyStoreResponse = {}));
var CustomKeyStoreNameInUseException;
(function (CustomKeyStoreNameInUseException) {
    /**
     * @internal
     */
    CustomKeyStoreNameInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomKeyStoreNameInUseException = exports.CustomKeyStoreNameInUseException || (exports.CustomKeyStoreNameInUseException = {}));
var IncorrectTrustAnchorException;
(function (IncorrectTrustAnchorException) {
    /**
     * @internal
     */
    IncorrectTrustAnchorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectTrustAnchorException = exports.IncorrectTrustAnchorException || (exports.IncorrectTrustAnchorException = {}));
var GrantConstraints;
(function (GrantConstraints) {
    /**
     * @internal
     */
    GrantConstraints.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantConstraints = exports.GrantConstraints || (exports.GrantConstraints = {}));
var GrantOperation;
(function (GrantOperation) {
    GrantOperation["CreateGrant"] = "CreateGrant";
    GrantOperation["Decrypt"] = "Decrypt";
    GrantOperation["DescribeKey"] = "DescribeKey";
    GrantOperation["Encrypt"] = "Encrypt";
    GrantOperation["GenerateDataKey"] = "GenerateDataKey";
    GrantOperation["GenerateDataKeyPair"] = "GenerateDataKeyPair";
    GrantOperation["GenerateDataKeyPairWithoutPlaintext"] = "GenerateDataKeyPairWithoutPlaintext";
    GrantOperation["GenerateDataKeyWithoutPlaintext"] = "GenerateDataKeyWithoutPlaintext";
    GrantOperation["GetPublicKey"] = "GetPublicKey";
    GrantOperation["ReEncryptFrom"] = "ReEncryptFrom";
    GrantOperation["ReEncryptTo"] = "ReEncryptTo";
    GrantOperation["RetireGrant"] = "RetireGrant";
    GrantOperation["Sign"] = "Sign";
    GrantOperation["Verify"] = "Verify";
})(GrantOperation = exports.GrantOperation || (exports.GrantOperation = {}));
var CreateGrantRequest;
(function (CreateGrantRequest) {
    /**
     * @internal
     */
    CreateGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantRequest = exports.CreateGrantRequest || (exports.CreateGrantRequest = {}));
var CreateGrantResponse;
(function (CreateGrantResponse) {
    /**
     * @internal
     */
    CreateGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantResponse = exports.CreateGrantResponse || (exports.CreateGrantResponse = {}));
var DisabledException;
(function (DisabledException) {
    /**
     * @internal
     */
    DisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisabledException = exports.DisabledException || (exports.DisabledException = {}));
var InvalidGrantTokenException;
(function (InvalidGrantTokenException) {
    /**
     * @internal
     */
    InvalidGrantTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGrantTokenException = exports.InvalidGrantTokenException || (exports.InvalidGrantTokenException = {}));
var CustomerMasterKeySpec;
(function (CustomerMasterKeySpec) {
    CustomerMasterKeySpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    CustomerMasterKeySpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    CustomerMasterKeySpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    CustomerMasterKeySpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    CustomerMasterKeySpec["RSA_2048"] = "RSA_2048";
    CustomerMasterKeySpec["RSA_3072"] = "RSA_3072";
    CustomerMasterKeySpec["RSA_4096"] = "RSA_4096";
    CustomerMasterKeySpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(CustomerMasterKeySpec = exports.CustomerMasterKeySpec || (exports.CustomerMasterKeySpec = {}));
var KeyUsageType;
(function (KeyUsageType) {
    KeyUsageType["ENCRYPT_DECRYPT"] = "ENCRYPT_DECRYPT";
    KeyUsageType["SIGN_VERIFY"] = "SIGN_VERIFY";
})(KeyUsageType = exports.KeyUsageType || (exports.KeyUsageType = {}));
var OriginType;
(function (OriginType) {
    OriginType["AWS_CLOUDHSM"] = "AWS_CLOUDHSM";
    OriginType["AWS_KMS"] = "AWS_KMS";
    OriginType["EXTERNAL"] = "EXTERNAL";
})(OriginType = exports.OriginType || (exports.OriginType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateKeyRequest;
(function (CreateKeyRequest) {
    /**
     * @internal
     */
    CreateKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeyRequest = exports.CreateKeyRequest || (exports.CreateKeyRequest = {}));
var EncryptionAlgorithmSpec;
(function (EncryptionAlgorithmSpec) {
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    EncryptionAlgorithmSpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(EncryptionAlgorithmSpec = exports.EncryptionAlgorithmSpec || (exports.EncryptionAlgorithmSpec = {}));
var ExpirationModelType;
(function (ExpirationModelType) {
    ExpirationModelType["KEY_MATERIAL_DOES_NOT_EXPIRE"] = "KEY_MATERIAL_DOES_NOT_EXPIRE";
    ExpirationModelType["KEY_MATERIAL_EXPIRES"] = "KEY_MATERIAL_EXPIRES";
})(ExpirationModelType = exports.ExpirationModelType || (exports.ExpirationModelType = {}));
var KeyManagerType;
(function (KeyManagerType) {
    KeyManagerType["AWS"] = "AWS";
    KeyManagerType["CUSTOMER"] = "CUSTOMER";
})(KeyManagerType = exports.KeyManagerType || (exports.KeyManagerType = {}));
var KeyState;
(function (KeyState) {
    KeyState["Disabled"] = "Disabled";
    KeyState["Enabled"] = "Enabled";
    KeyState["PendingDeletion"] = "PendingDeletion";
    KeyState["PendingImport"] = "PendingImport";
    KeyState["Unavailable"] = "Unavailable";
})(KeyState = exports.KeyState || (exports.KeyState = {}));
var SigningAlgorithmSpec;
(function (SigningAlgorithmSpec) {
    SigningAlgorithmSpec["ECDSA_SHA_256"] = "ECDSA_SHA_256";
    SigningAlgorithmSpec["ECDSA_SHA_384"] = "ECDSA_SHA_384";
    SigningAlgorithmSpec["ECDSA_SHA_512"] = "ECDSA_SHA_512";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_256"] = "RSASSA_PKCS1_V1_5_SHA_256";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_384"] = "RSASSA_PKCS1_V1_5_SHA_384";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_512"] = "RSASSA_PKCS1_V1_5_SHA_512";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_256"] = "RSASSA_PSS_SHA_256";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_384"] = "RSASSA_PSS_SHA_384";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_512"] = "RSASSA_PSS_SHA_512";
})(SigningAlgorithmSpec = exports.SigningAlgorithmSpec || (exports.SigningAlgorithmSpec = {}));
var KeyMetadata;
(function (KeyMetadata) {
    /**
     * @internal
     */
    KeyMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyMetadata = exports.KeyMetadata || (exports.KeyMetadata = {}));
var CreateKeyResponse;
(function (CreateKeyResponse) {
    /**
     * @internal
     */
    CreateKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeyResponse = exports.CreateKeyResponse || (exports.CreateKeyResponse = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var TagException;
(function (TagException) {
    /**
     * @internal
     */
    TagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagException = exports.TagException || (exports.TagException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var CustomKeyStoreHasCMKsException;
(function (CustomKeyStoreHasCMKsException) {
    /**
     * @internal
     */
    CustomKeyStoreHasCMKsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomKeyStoreHasCMKsException = exports.CustomKeyStoreHasCMKsException || (exports.CustomKeyStoreHasCMKsException = {}));
var CustomKeyStoresListEntry;
(function (CustomKeyStoresListEntry) {
    /**
     * @internal
     */
    CustomKeyStoresListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomKeyStoresListEntry = exports.CustomKeyStoresListEntry || (exports.CustomKeyStoresListEntry = {}));
var DataKeyPairSpec;
(function (DataKeyPairSpec) {
    DataKeyPairSpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    DataKeyPairSpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    DataKeyPairSpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    DataKeyPairSpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    DataKeyPairSpec["RSA_2048"] = "RSA_2048";
    DataKeyPairSpec["RSA_3072"] = "RSA_3072";
    DataKeyPairSpec["RSA_4096"] = "RSA_4096";
})(DataKeyPairSpec = exports.DataKeyPairSpec || (exports.DataKeyPairSpec = {}));
var DataKeySpec;
(function (DataKeySpec) {
    DataKeySpec["AES_128"] = "AES_128";
    DataKeySpec["AES_256"] = "AES_256";
})(DataKeySpec = exports.DataKeySpec || (exports.DataKeySpec = {}));
var DecryptRequest;
(function (DecryptRequest) {
    /**
     * @internal
     */
    DecryptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecryptRequest = exports.DecryptRequest || (exports.DecryptRequest = {}));
var DecryptResponse;
(function (DecryptResponse) {
    /**
     * @internal
     */
    DecryptResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Plaintext && { Plaintext: smithy_client_1.SENSITIVE_STRING }),
    });
})(DecryptResponse = exports.DecryptResponse || (exports.DecryptResponse = {}));
var IncorrectKeyException;
(function (IncorrectKeyException) {
    /**
     * @internal
     */
    IncorrectKeyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectKeyException = exports.IncorrectKeyException || (exports.IncorrectKeyException = {}));
var InvalidCiphertextException;
(function (InvalidCiphertextException) {
    /**
     * @internal
     */
    InvalidCiphertextException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCiphertextException = exports.InvalidCiphertextException || (exports.InvalidCiphertextException = {}));
var InvalidKeyUsageException;
(function (InvalidKeyUsageException) {
    /**
     * @internal
     */
    InvalidKeyUsageException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKeyUsageException = exports.InvalidKeyUsageException || (exports.InvalidKeyUsageException = {}));
var KeyUnavailableException;
(function (KeyUnavailableException) {
    /**
     * @internal
     */
    KeyUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyUnavailableException = exports.KeyUnavailableException || (exports.KeyUnavailableException = {}));
var DeleteAliasRequest;
(function (DeleteAliasRequest) {
    /**
     * @internal
     */
    DeleteAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAliasRequest = exports.DeleteAliasRequest || (exports.DeleteAliasRequest = {}));
var DeleteCustomKeyStoreRequest;
(function (DeleteCustomKeyStoreRequest) {
    /**
     * @internal
     */
    DeleteCustomKeyStoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomKeyStoreRequest = exports.DeleteCustomKeyStoreRequest || (exports.DeleteCustomKeyStoreRequest = {}));
var DeleteCustomKeyStoreResponse;
(function (DeleteCustomKeyStoreResponse) {
    /**
     * @internal
     */
    DeleteCustomKeyStoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomKeyStoreResponse = exports.DeleteCustomKeyStoreResponse || (exports.DeleteCustomKeyStoreResponse = {}));
var DeleteImportedKeyMaterialRequest;
(function (DeleteImportedKeyMaterialRequest) {
    /**
     * @internal
     */
    DeleteImportedKeyMaterialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImportedKeyMaterialRequest = exports.DeleteImportedKeyMaterialRequest || (exports.DeleteImportedKeyMaterialRequest = {}));
var DescribeCustomKeyStoresRequest;
(function (DescribeCustomKeyStoresRequest) {
    /**
     * @internal
     */
    DescribeCustomKeyStoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomKeyStoresRequest = exports.DescribeCustomKeyStoresRequest || (exports.DescribeCustomKeyStoresRequest = {}));
var DescribeCustomKeyStoresResponse;
(function (DescribeCustomKeyStoresResponse) {
    /**
     * @internal
     */
    DescribeCustomKeyStoresResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomKeyStoresResponse = exports.DescribeCustomKeyStoresResponse || (exports.DescribeCustomKeyStoresResponse = {}));
var DescribeKeyRequest;
(function (DescribeKeyRequest) {
    /**
     * @internal
     */
    DescribeKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyRequest = exports.DescribeKeyRequest || (exports.DescribeKeyRequest = {}));
var DescribeKeyResponse;
(function (DescribeKeyResponse) {
    /**
     * @internal
     */
    DescribeKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyResponse = exports.DescribeKeyResponse || (exports.DescribeKeyResponse = {}));
var DisableKeyRequest;
(function (DisableKeyRequest) {
    /**
     * @internal
     */
    DisableKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableKeyRequest = exports.DisableKeyRequest || (exports.DisableKeyRequest = {}));
var DisableKeyRotationRequest;
(function (DisableKeyRotationRequest) {
    /**
     * @internal
     */
    DisableKeyRotationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableKeyRotationRequest = exports.DisableKeyRotationRequest || (exports.DisableKeyRotationRequest = {}));
var DisconnectCustomKeyStoreRequest;
(function (DisconnectCustomKeyStoreRequest) {
    /**
     * @internal
     */
    DisconnectCustomKeyStoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectCustomKeyStoreRequest = exports.DisconnectCustomKeyStoreRequest || (exports.DisconnectCustomKeyStoreRequest = {}));
var DisconnectCustomKeyStoreResponse;
(function (DisconnectCustomKeyStoreResponse) {
    /**
     * @internal
     */
    DisconnectCustomKeyStoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectCustomKeyStoreResponse = exports.DisconnectCustomKeyStoreResponse || (exports.DisconnectCustomKeyStoreResponse = {}));
var EnableKeyRequest;
(function (EnableKeyRequest) {
    /**
     * @internal
     */
    EnableKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableKeyRequest = exports.EnableKeyRequest || (exports.EnableKeyRequest = {}));
var EnableKeyRotationRequest;
(function (EnableKeyRotationRequest) {
    /**
     * @internal
     */
    EnableKeyRotationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableKeyRotationRequest = exports.EnableKeyRotationRequest || (exports.EnableKeyRotationRequest = {}));
var EncryptRequest;
(function (EncryptRequest) {
    /**
     * @internal
     */
    EncryptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Plaintext && { Plaintext: smithy_client_1.SENSITIVE_STRING }),
    });
})(EncryptRequest = exports.EncryptRequest || (exports.EncryptRequest = {}));
var EncryptResponse;
(function (EncryptResponse) {
    /**
     * @internal
     */
    EncryptResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptResponse = exports.EncryptResponse || (exports.EncryptResponse = {}));
var ExpiredImportTokenException;
(function (ExpiredImportTokenException) {
    /**
     * @internal
     */
    ExpiredImportTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpiredImportTokenException = exports.ExpiredImportTokenException || (exports.ExpiredImportTokenException = {}));
var GenerateDataKeyRequest;
(function (GenerateDataKeyRequest) {
    /**
     * @internal
     */
    GenerateDataKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyRequest = exports.GenerateDataKeyRequest || (exports.GenerateDataKeyRequest = {}));
var GenerateDataKeyResponse;
(function (GenerateDataKeyResponse) {
    /**
     * @internal
     */
    GenerateDataKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Plaintext && { Plaintext: smithy_client_1.SENSITIVE_STRING }),
    });
})(GenerateDataKeyResponse = exports.GenerateDataKeyResponse || (exports.GenerateDataKeyResponse = {}));
var GenerateDataKeyPairRequest;
(function (GenerateDataKeyPairRequest) {
    /**
     * @internal
     */
    GenerateDataKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyPairRequest = exports.GenerateDataKeyPairRequest || (exports.GenerateDataKeyPairRequest = {}));
var GenerateDataKeyPairResponse;
(function (GenerateDataKeyPairResponse) {
    /**
     * @internal
     */
    GenerateDataKeyPairResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PrivateKeyPlaintext && { PrivateKeyPlaintext: smithy_client_1.SENSITIVE_STRING }),
    });
})(GenerateDataKeyPairResponse = exports.GenerateDataKeyPairResponse || (exports.GenerateDataKeyPairResponse = {}));
var GenerateDataKeyPairWithoutPlaintextRequest;
(function (GenerateDataKeyPairWithoutPlaintextRequest) {
    /**
     * @internal
     */
    GenerateDataKeyPairWithoutPlaintextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyPairWithoutPlaintextRequest = exports.GenerateDataKeyPairWithoutPlaintextRequest || (exports.GenerateDataKeyPairWithoutPlaintextRequest = {}));
var GenerateDataKeyPairWithoutPlaintextResponse;
(function (GenerateDataKeyPairWithoutPlaintextResponse) {
    /**
     * @internal
     */
    GenerateDataKeyPairWithoutPlaintextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyPairWithoutPlaintextResponse = exports.GenerateDataKeyPairWithoutPlaintextResponse || (exports.GenerateDataKeyPairWithoutPlaintextResponse = {}));
var GenerateDataKeyWithoutPlaintextRequest;
(function (GenerateDataKeyWithoutPlaintextRequest) {
    /**
     * @internal
     */
    GenerateDataKeyWithoutPlaintextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyWithoutPlaintextRequest = exports.GenerateDataKeyWithoutPlaintextRequest || (exports.GenerateDataKeyWithoutPlaintextRequest = {}));
var GenerateDataKeyWithoutPlaintextResponse;
(function (GenerateDataKeyWithoutPlaintextResponse) {
    /**
     * @internal
     */
    GenerateDataKeyWithoutPlaintextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateDataKeyWithoutPlaintextResponse = exports.GenerateDataKeyWithoutPlaintextResponse || (exports.GenerateDataKeyWithoutPlaintextResponse = {}));
var GenerateRandomRequest;
(function (GenerateRandomRequest) {
    /**
     * @internal
     */
    GenerateRandomRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateRandomRequest = exports.GenerateRandomRequest || (exports.GenerateRandomRequest = {}));
var GenerateRandomResponse;
(function (GenerateRandomResponse) {
    /**
     * @internal
     */
    GenerateRandomResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Plaintext && { Plaintext: smithy_client_1.SENSITIVE_STRING }),
    });
})(GenerateRandomResponse = exports.GenerateRandomResponse || (exports.GenerateRandomResponse = {}));
var GetKeyPolicyRequest;
(function (GetKeyPolicyRequest) {
    /**
     * @internal
     */
    GetKeyPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPolicyRequest = exports.GetKeyPolicyRequest || (exports.GetKeyPolicyRequest = {}));
var GetKeyPolicyResponse;
(function (GetKeyPolicyResponse) {
    /**
     * @internal
     */
    GetKeyPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPolicyResponse = exports.GetKeyPolicyResponse || (exports.GetKeyPolicyResponse = {}));
var GetKeyRotationStatusRequest;
(function (GetKeyRotationStatusRequest) {
    /**
     * @internal
     */
    GetKeyRotationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyRotationStatusRequest = exports.GetKeyRotationStatusRequest || (exports.GetKeyRotationStatusRequest = {}));
var GetKeyRotationStatusResponse;
(function (GetKeyRotationStatusResponse) {
    /**
     * @internal
     */
    GetKeyRotationStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyRotationStatusResponse = exports.GetKeyRotationStatusResponse || (exports.GetKeyRotationStatusResponse = {}));
var WrappingKeySpec;
(function (WrappingKeySpec) {
    WrappingKeySpec["RSA_2048"] = "RSA_2048";
})(WrappingKeySpec = exports.WrappingKeySpec || (exports.WrappingKeySpec = {}));
var GetParametersForImportRequest;
(function (GetParametersForImportRequest) {
    /**
     * @internal
     */
    GetParametersForImportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParametersForImportRequest = exports.GetParametersForImportRequest || (exports.GetParametersForImportRequest = {}));
var GetParametersForImportResponse;
(function (GetParametersForImportResponse) {
    /**
     * @internal
     */
    GetParametersForImportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PublicKey && { PublicKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetParametersForImportResponse = exports.GetParametersForImportResponse || (exports.GetParametersForImportResponse = {}));
var GetPublicKeyRequest;
(function (GetPublicKeyRequest) {
    /**
     * @internal
     */
    GetPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicKeyRequest = exports.GetPublicKeyRequest || (exports.GetPublicKeyRequest = {}));
var GetPublicKeyResponse;
(function (GetPublicKeyResponse) {
    /**
     * @internal
     */
    GetPublicKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicKeyResponse = exports.GetPublicKeyResponse || (exports.GetPublicKeyResponse = {}));
var GrantListEntry;
(function (GrantListEntry) {
    /**
     * @internal
     */
    GrantListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantListEntry = exports.GrantListEntry || (exports.GrantListEntry = {}));
var ImportKeyMaterialRequest;
(function (ImportKeyMaterialRequest) {
    /**
     * @internal
     */
    ImportKeyMaterialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyMaterialRequest = exports.ImportKeyMaterialRequest || (exports.ImportKeyMaterialRequest = {}));
var ImportKeyMaterialResponse;
(function (ImportKeyMaterialResponse) {
    /**
     * @internal
     */
    ImportKeyMaterialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyMaterialResponse = exports.ImportKeyMaterialResponse || (exports.ImportKeyMaterialResponse = {}));
var IncorrectKeyMaterialException;
(function (IncorrectKeyMaterialException) {
    /**
     * @internal
     */
    IncorrectKeyMaterialException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectKeyMaterialException = exports.IncorrectKeyMaterialException || (exports.IncorrectKeyMaterialException = {}));
var InvalidImportTokenException;
(function (InvalidImportTokenException) {
    /**
     * @internal
     */
    InvalidImportTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidImportTokenException = exports.InvalidImportTokenException || (exports.InvalidImportTokenException = {}));
var InvalidGrantIdException;
(function (InvalidGrantIdException) {
    /**
     * @internal
     */
    InvalidGrantIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGrantIdException = exports.InvalidGrantIdException || (exports.InvalidGrantIdException = {}));
var InvalidMarkerException;
(function (InvalidMarkerException) {
    /**
     * @internal
     */
    InvalidMarkerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMarkerException = exports.InvalidMarkerException || (exports.InvalidMarkerException = {}));
var KeyListEntry;
(function (KeyListEntry) {
    /**
     * @internal
     */
    KeyListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyListEntry = exports.KeyListEntry || (exports.KeyListEntry = {}));
var KMSInvalidSignatureException;
(function (KMSInvalidSignatureException) {
    /**
     * @internal
     */
    KMSInvalidSignatureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInvalidSignatureException = exports.KMSInvalidSignatureException || (exports.KMSInvalidSignatureException = {}));
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
var ListGrantsRequest;
(function (ListGrantsRequest) {
    /**
     * @internal
     */
    ListGrantsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGrantsRequest = exports.ListGrantsRequest || (exports.ListGrantsRequest = {}));
var ListGrantsResponse;
(function (ListGrantsResponse) {
    /**
     * @internal
     */
    ListGrantsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGrantsResponse = exports.ListGrantsResponse || (exports.ListGrantsResponse = {}));
var ListKeyPoliciesRequest;
(function (ListKeyPoliciesRequest) {
    /**
     * @internal
     */
    ListKeyPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeyPoliciesRequest = exports.ListKeyPoliciesRequest || (exports.ListKeyPoliciesRequest = {}));
var ListKeyPoliciesResponse;
(function (ListKeyPoliciesResponse) {
    /**
     * @internal
     */
    ListKeyPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeyPoliciesResponse = exports.ListKeyPoliciesResponse || (exports.ListKeyPoliciesResponse = {}));
var ListKeysRequest;
(function (ListKeysRequest) {
    /**
     * @internal
     */
    ListKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeysRequest = exports.ListKeysRequest || (exports.ListKeysRequest = {}));
var ListKeysResponse;
(function (ListKeysResponse) {
    /**
     * @internal
     */
    ListKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeysResponse = exports.ListKeysResponse || (exports.ListKeysResponse = {}));
var ListResourceTagsRequest;
(function (ListResourceTagsRequest) {
    /**
     * @internal
     */
    ListResourceTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceTagsRequest = exports.ListResourceTagsRequest || (exports.ListResourceTagsRequest = {}));
var ListResourceTagsResponse;
(function (ListResourceTagsResponse) {
    /**
     * @internal
     */
    ListResourceTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceTagsResponse = exports.ListResourceTagsResponse || (exports.ListResourceTagsResponse = {}));
var ListRetirableGrantsRequest;
(function (ListRetirableGrantsRequest) {
    /**
     * @internal
     */
    ListRetirableGrantsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRetirableGrantsRequest = exports.ListRetirableGrantsRequest || (exports.ListRetirableGrantsRequest = {}));
var MessageType;
(function (MessageType) {
    MessageType["DIGEST"] = "DIGEST";
    MessageType["RAW"] = "RAW";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var PutKeyPolicyRequest;
(function (PutKeyPolicyRequest) {
    /**
     * @internal
     */
    PutKeyPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutKeyPolicyRequest = exports.PutKeyPolicyRequest || (exports.PutKeyPolicyRequest = {}));
var ReEncryptRequest;
(function (ReEncryptRequest) {
    /**
     * @internal
     */
    ReEncryptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReEncryptRequest = exports.ReEncryptRequest || (exports.ReEncryptRequest = {}));
var ReEncryptResponse;
(function (ReEncryptResponse) {
    /**
     * @internal
     */
    ReEncryptResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReEncryptResponse = exports.ReEncryptResponse || (exports.ReEncryptResponse = {}));
var RetireGrantRequest;
(function (RetireGrantRequest) {
    /**
     * @internal
     */
    RetireGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetireGrantRequest = exports.RetireGrantRequest || (exports.RetireGrantRequest = {}));
var RevokeGrantRequest;
(function (RevokeGrantRequest) {
    /**
     * @internal
     */
    RevokeGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeGrantRequest = exports.RevokeGrantRequest || (exports.RevokeGrantRequest = {}));
var ScheduleKeyDeletionRequest;
(function (ScheduleKeyDeletionRequest) {
    /**
     * @internal
     */
    ScheduleKeyDeletionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleKeyDeletionRequest = exports.ScheduleKeyDeletionRequest || (exports.ScheduleKeyDeletionRequest = {}));
var ScheduleKeyDeletionResponse;
(function (ScheduleKeyDeletionResponse) {
    /**
     * @internal
     */
    ScheduleKeyDeletionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleKeyDeletionResponse = exports.ScheduleKeyDeletionResponse || (exports.ScheduleKeyDeletionResponse = {}));
var SignRequest;
(function (SignRequest) {
    /**
     * @internal
     */
    SignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
    });
})(SignRequest = exports.SignRequest || (exports.SignRequest = {}));
var SignResponse;
(function (SignResponse) {
    /**
     * @internal
     */
    SignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignResponse = exports.SignResponse || (exports.SignResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAliasRequest;
(function (UpdateAliasRequest) {
    /**
     * @internal
     */
    UpdateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAliasRequest = exports.UpdateAliasRequest || (exports.UpdateAliasRequest = {}));
var UpdateCustomKeyStoreRequest;
(function (UpdateCustomKeyStoreRequest) {
    /**
     * @internal
     */
    UpdateCustomKeyStoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KeyStorePassword && { KeyStorePassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateCustomKeyStoreRequest = exports.UpdateCustomKeyStoreRequest || (exports.UpdateCustomKeyStoreRequest = {}));
var UpdateCustomKeyStoreResponse;
(function (UpdateCustomKeyStoreResponse) {
    /**
     * @internal
     */
    UpdateCustomKeyStoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomKeyStoreResponse = exports.UpdateCustomKeyStoreResponse || (exports.UpdateCustomKeyStoreResponse = {}));
var UpdateKeyDescriptionRequest;
(function (UpdateKeyDescriptionRequest) {
    /**
     * @internal
     */
    UpdateKeyDescriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateKeyDescriptionRequest = exports.UpdateKeyDescriptionRequest || (exports.UpdateKeyDescriptionRequest = {}));
var VerifyRequest;
(function (VerifyRequest) {
    /**
     * @internal
     */
    VerifyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
    });
})(VerifyRequest = exports.VerifyRequest || (exports.VerifyRequest = {}));
var VerifyResponse;
(function (VerifyResponse) {
    /**
     * @internal
     */
    VerifyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifyResponse = exports.VerifyResponse || (exports.VerifyResponse = {}));
//# sourceMappingURL=models_0.js.map