import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AlgorithmSpec;
(function (AlgorithmSpec) {
    AlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    AlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    AlgorithmSpec["RSAES_PKCS1_V1_5"] = "RSAES_PKCS1_V1_5";
})(AlgorithmSpec || (AlgorithmSpec = {}));
export var AliasListEntry;
(function (AliasListEntry) {
    /**
     * @internal
     */
    AliasListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AliasListEntry || (AliasListEntry = {}));
export var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlreadyExistsException || (AlreadyExistsException = {}));
export var CancelKeyDeletionRequest;
(function (CancelKeyDeletionRequest) {
    /**
     * @internal
     */
    CancelKeyDeletionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelKeyDeletionRequest || (CancelKeyDeletionRequest = {}));
export var CancelKeyDeletionResponse;
(function (CancelKeyDeletionResponse) {
    /**
     * @internal
     */
    CancelKeyDeletionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelKeyDeletionResponse || (CancelKeyDeletionResponse = {}));
export var DependencyTimeoutException;
(function (DependencyTimeoutException) {
    /**
     * @internal
     */
    DependencyTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DependencyTimeoutException || (DependencyTimeoutException = {}));
export var InvalidArnException;
(function (InvalidArnException) {
    /**
     * @internal
     */
    InvalidArnException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArnException || (InvalidArnException = {}));
export var KMSInternalException;
(function (KMSInternalException) {
    /**
     * @internal
     */
    KMSInternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSInternalException || (KMSInternalException = {}));
export var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    /**
     * @internal
     */
    KMSInvalidStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSInvalidStateException || (KMSInvalidStateException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var CloudHsmClusterInUseException;
(function (CloudHsmClusterInUseException) {
    /**
     * @internal
     */
    CloudHsmClusterInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudHsmClusterInUseException || (CloudHsmClusterInUseException = {}));
export var CloudHsmClusterInvalidConfigurationException;
(function (CloudHsmClusterInvalidConfigurationException) {
    /**
     * @internal
     */
    CloudHsmClusterInvalidConfigurationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudHsmClusterInvalidConfigurationException || (CloudHsmClusterInvalidConfigurationException = {}));
export var CloudHsmClusterNotActiveException;
(function (CloudHsmClusterNotActiveException) {
    /**
     * @internal
     */
    CloudHsmClusterNotActiveException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudHsmClusterNotActiveException || (CloudHsmClusterNotActiveException = {}));
export var CloudHsmClusterNotFoundException;
(function (CloudHsmClusterNotFoundException) {
    /**
     * @internal
     */
    CloudHsmClusterNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudHsmClusterNotFoundException || (CloudHsmClusterNotFoundException = {}));
export var CloudHsmClusterNotRelatedException;
(function (CloudHsmClusterNotRelatedException) {
    /**
     * @internal
     */
    CloudHsmClusterNotRelatedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudHsmClusterNotRelatedException || (CloudHsmClusterNotRelatedException = {}));
export var ConnectCustomKeyStoreRequest;
(function (ConnectCustomKeyStoreRequest) {
    /**
     * @internal
     */
    ConnectCustomKeyStoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectCustomKeyStoreRequest || (ConnectCustomKeyStoreRequest = {}));
export var ConnectCustomKeyStoreResponse;
(function (ConnectCustomKeyStoreResponse) {
    /**
     * @internal
     */
    ConnectCustomKeyStoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectCustomKeyStoreResponse || (ConnectCustomKeyStoreResponse = {}));
export var CustomKeyStoreInvalidStateException;
(function (CustomKeyStoreInvalidStateException) {
    /**
     * @internal
     */
    CustomKeyStoreInvalidStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomKeyStoreInvalidStateException || (CustomKeyStoreInvalidStateException = {}));
export var CustomKeyStoreNotFoundException;
(function (CustomKeyStoreNotFoundException) {
    /**
     * @internal
     */
    CustomKeyStoreNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomKeyStoreNotFoundException || (CustomKeyStoreNotFoundException = {}));
export var ConnectionErrorCodeType;
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
})(ConnectionErrorCodeType || (ConnectionErrorCodeType = {}));
export var ConnectionStateType;
(function (ConnectionStateType) {
    ConnectionStateType["CONNECTED"] = "CONNECTED";
    ConnectionStateType["CONNECTING"] = "CONNECTING";
    ConnectionStateType["DISCONNECTED"] = "DISCONNECTED";
    ConnectionStateType["DISCONNECTING"] = "DISCONNECTING";
    ConnectionStateType["FAILED"] = "FAILED";
})(ConnectionStateType || (ConnectionStateType = {}));
export var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAliasRequest || (CreateAliasRequest = {}));
export var InvalidAliasNameException;
(function (InvalidAliasNameException) {
    /**
     * @internal
     */
    InvalidAliasNameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAliasNameException || (InvalidAliasNameException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateCustomKeyStoreRequest;
(function (CreateCustomKeyStoreRequest) {
    /**
     * @internal
     */
    CreateCustomKeyStoreRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }))); };
})(CreateCustomKeyStoreRequest || (CreateCustomKeyStoreRequest = {}));
export var CreateCustomKeyStoreResponse;
(function (CreateCustomKeyStoreResponse) {
    /**
     * @internal
     */
    CreateCustomKeyStoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomKeyStoreResponse || (CreateCustomKeyStoreResponse = {}));
export var CustomKeyStoreNameInUseException;
(function (CustomKeyStoreNameInUseException) {
    /**
     * @internal
     */
    CustomKeyStoreNameInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomKeyStoreNameInUseException || (CustomKeyStoreNameInUseException = {}));
export var IncorrectTrustAnchorException;
(function (IncorrectTrustAnchorException) {
    /**
     * @internal
     */
    IncorrectTrustAnchorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncorrectTrustAnchorException || (IncorrectTrustAnchorException = {}));
export var GrantConstraints;
(function (GrantConstraints) {
    /**
     * @internal
     */
    GrantConstraints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantConstraints || (GrantConstraints = {}));
export var GrantOperation;
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
})(GrantOperation || (GrantOperation = {}));
export var CreateGrantRequest;
(function (CreateGrantRequest) {
    /**
     * @internal
     */
    CreateGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantRequest || (CreateGrantRequest = {}));
export var CreateGrantResponse;
(function (CreateGrantResponse) {
    /**
     * @internal
     */
    CreateGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantResponse || (CreateGrantResponse = {}));
export var DisabledException;
(function (DisabledException) {
    /**
     * @internal
     */
    DisabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisabledException || (DisabledException = {}));
export var InvalidGrantTokenException;
(function (InvalidGrantTokenException) {
    /**
     * @internal
     */
    InvalidGrantTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidGrantTokenException || (InvalidGrantTokenException = {}));
export var CustomerMasterKeySpec;
(function (CustomerMasterKeySpec) {
    CustomerMasterKeySpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    CustomerMasterKeySpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    CustomerMasterKeySpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    CustomerMasterKeySpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    CustomerMasterKeySpec["RSA_2048"] = "RSA_2048";
    CustomerMasterKeySpec["RSA_3072"] = "RSA_3072";
    CustomerMasterKeySpec["RSA_4096"] = "RSA_4096";
    CustomerMasterKeySpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(CustomerMasterKeySpec || (CustomerMasterKeySpec = {}));
export var KeyUsageType;
(function (KeyUsageType) {
    KeyUsageType["ENCRYPT_DECRYPT"] = "ENCRYPT_DECRYPT";
    KeyUsageType["SIGN_VERIFY"] = "SIGN_VERIFY";
})(KeyUsageType || (KeyUsageType = {}));
export var OriginType;
(function (OriginType) {
    OriginType["AWS_CLOUDHSM"] = "AWS_CLOUDHSM";
    OriginType["AWS_KMS"] = "AWS_KMS";
    OriginType["EXTERNAL"] = "EXTERNAL";
})(OriginType || (OriginType = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateKeyRequest;
(function (CreateKeyRequest) {
    /**
     * @internal
     */
    CreateKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateKeyRequest || (CreateKeyRequest = {}));
export var EncryptionAlgorithmSpec;
(function (EncryptionAlgorithmSpec) {
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    EncryptionAlgorithmSpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(EncryptionAlgorithmSpec || (EncryptionAlgorithmSpec = {}));
export var ExpirationModelType;
(function (ExpirationModelType) {
    ExpirationModelType["KEY_MATERIAL_DOES_NOT_EXPIRE"] = "KEY_MATERIAL_DOES_NOT_EXPIRE";
    ExpirationModelType["KEY_MATERIAL_EXPIRES"] = "KEY_MATERIAL_EXPIRES";
})(ExpirationModelType || (ExpirationModelType = {}));
export var KeyManagerType;
(function (KeyManagerType) {
    KeyManagerType["AWS"] = "AWS";
    KeyManagerType["CUSTOMER"] = "CUSTOMER";
})(KeyManagerType || (KeyManagerType = {}));
export var KeyState;
(function (KeyState) {
    KeyState["Disabled"] = "Disabled";
    KeyState["Enabled"] = "Enabled";
    KeyState["PendingDeletion"] = "PendingDeletion";
    KeyState["PendingImport"] = "PendingImport";
    KeyState["Unavailable"] = "Unavailable";
})(KeyState || (KeyState = {}));
export var SigningAlgorithmSpec;
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
})(SigningAlgorithmSpec || (SigningAlgorithmSpec = {}));
export var KeyMetadata;
(function (KeyMetadata) {
    /**
     * @internal
     */
    KeyMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyMetadata || (KeyMetadata = {}));
export var CreateKeyResponse;
(function (CreateKeyResponse) {
    /**
     * @internal
     */
    CreateKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateKeyResponse || (CreateKeyResponse = {}));
export var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MalformedPolicyDocumentException || (MalformedPolicyDocumentException = {}));
export var TagException;
(function (TagException) {
    /**
     * @internal
     */
    TagException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagException || (TagException = {}));
export var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedOperationException || (UnsupportedOperationException = {}));
export var CustomKeyStoreHasCMKsException;
(function (CustomKeyStoreHasCMKsException) {
    /**
     * @internal
     */
    CustomKeyStoreHasCMKsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomKeyStoreHasCMKsException || (CustomKeyStoreHasCMKsException = {}));
export var CustomKeyStoresListEntry;
(function (CustomKeyStoresListEntry) {
    /**
     * @internal
     */
    CustomKeyStoresListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomKeyStoresListEntry || (CustomKeyStoresListEntry = {}));
export var DataKeyPairSpec;
(function (DataKeyPairSpec) {
    DataKeyPairSpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    DataKeyPairSpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    DataKeyPairSpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    DataKeyPairSpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    DataKeyPairSpec["RSA_2048"] = "RSA_2048";
    DataKeyPairSpec["RSA_3072"] = "RSA_3072";
    DataKeyPairSpec["RSA_4096"] = "RSA_4096";
})(DataKeyPairSpec || (DataKeyPairSpec = {}));
export var DataKeySpec;
(function (DataKeySpec) {
    DataKeySpec["AES_128"] = "AES_128";
    DataKeySpec["AES_256"] = "AES_256";
})(DataKeySpec || (DataKeySpec = {}));
export var DecryptRequest;
(function (DecryptRequest) {
    /**
     * @internal
     */
    DecryptRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DecryptRequest || (DecryptRequest = {}));
export var DecryptResponse;
(function (DecryptResponse) {
    /**
     * @internal
     */
    DecryptResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Plaintext && { Plaintext: SENSITIVE_STRING }))); };
})(DecryptResponse || (DecryptResponse = {}));
export var IncorrectKeyException;
(function (IncorrectKeyException) {
    /**
     * @internal
     */
    IncorrectKeyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncorrectKeyException || (IncorrectKeyException = {}));
export var InvalidCiphertextException;
(function (InvalidCiphertextException) {
    /**
     * @internal
     */
    InvalidCiphertextException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCiphertextException || (InvalidCiphertextException = {}));
export var InvalidKeyUsageException;
(function (InvalidKeyUsageException) {
    /**
     * @internal
     */
    InvalidKeyUsageException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidKeyUsageException || (InvalidKeyUsageException = {}));
export var KeyUnavailableException;
(function (KeyUnavailableException) {
    /**
     * @internal
     */
    KeyUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyUnavailableException || (KeyUnavailableException = {}));
export var DeleteAliasRequest;
(function (DeleteAliasRequest) {
    /**
     * @internal
     */
    DeleteAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAliasRequest || (DeleteAliasRequest = {}));
export var DeleteCustomKeyStoreRequest;
(function (DeleteCustomKeyStoreRequest) {
    /**
     * @internal
     */
    DeleteCustomKeyStoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomKeyStoreRequest || (DeleteCustomKeyStoreRequest = {}));
export var DeleteCustomKeyStoreResponse;
(function (DeleteCustomKeyStoreResponse) {
    /**
     * @internal
     */
    DeleteCustomKeyStoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomKeyStoreResponse || (DeleteCustomKeyStoreResponse = {}));
export var DeleteImportedKeyMaterialRequest;
(function (DeleteImportedKeyMaterialRequest) {
    /**
     * @internal
     */
    DeleteImportedKeyMaterialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImportedKeyMaterialRequest || (DeleteImportedKeyMaterialRequest = {}));
export var DescribeCustomKeyStoresRequest;
(function (DescribeCustomKeyStoresRequest) {
    /**
     * @internal
     */
    DescribeCustomKeyStoresRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCustomKeyStoresRequest || (DescribeCustomKeyStoresRequest = {}));
export var DescribeCustomKeyStoresResponse;
(function (DescribeCustomKeyStoresResponse) {
    /**
     * @internal
     */
    DescribeCustomKeyStoresResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCustomKeyStoresResponse || (DescribeCustomKeyStoresResponse = {}));
export var DescribeKeyRequest;
(function (DescribeKeyRequest) {
    /**
     * @internal
     */
    DescribeKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeKeyRequest || (DescribeKeyRequest = {}));
export var DescribeKeyResponse;
(function (DescribeKeyResponse) {
    /**
     * @internal
     */
    DescribeKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeKeyResponse || (DescribeKeyResponse = {}));
export var DisableKeyRequest;
(function (DisableKeyRequest) {
    /**
     * @internal
     */
    DisableKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableKeyRequest || (DisableKeyRequest = {}));
export var DisableKeyRotationRequest;
(function (DisableKeyRotationRequest) {
    /**
     * @internal
     */
    DisableKeyRotationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableKeyRotationRequest || (DisableKeyRotationRequest = {}));
export var DisconnectCustomKeyStoreRequest;
(function (DisconnectCustomKeyStoreRequest) {
    /**
     * @internal
     */
    DisconnectCustomKeyStoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectCustomKeyStoreRequest || (DisconnectCustomKeyStoreRequest = {}));
export var DisconnectCustomKeyStoreResponse;
(function (DisconnectCustomKeyStoreResponse) {
    /**
     * @internal
     */
    DisconnectCustomKeyStoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectCustomKeyStoreResponse || (DisconnectCustomKeyStoreResponse = {}));
export var EnableKeyRequest;
(function (EnableKeyRequest) {
    /**
     * @internal
     */
    EnableKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableKeyRequest || (EnableKeyRequest = {}));
export var EnableKeyRotationRequest;
(function (EnableKeyRotationRequest) {
    /**
     * @internal
     */
    EnableKeyRotationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableKeyRotationRequest || (EnableKeyRotationRequest = {}));
export var EncryptRequest;
(function (EncryptRequest) {
    /**
     * @internal
     */
    EncryptRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Plaintext && { Plaintext: SENSITIVE_STRING }))); };
})(EncryptRequest || (EncryptRequest = {}));
export var EncryptResponse;
(function (EncryptResponse) {
    /**
     * @internal
     */
    EncryptResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptResponse || (EncryptResponse = {}));
export var ExpiredImportTokenException;
(function (ExpiredImportTokenException) {
    /**
     * @internal
     */
    ExpiredImportTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExpiredImportTokenException || (ExpiredImportTokenException = {}));
export var GenerateDataKeyRequest;
(function (GenerateDataKeyRequest) {
    /**
     * @internal
     */
    GenerateDataKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyRequest || (GenerateDataKeyRequest = {}));
export var GenerateDataKeyResponse;
(function (GenerateDataKeyResponse) {
    /**
     * @internal
     */
    GenerateDataKeyResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Plaintext && { Plaintext: SENSITIVE_STRING }))); };
})(GenerateDataKeyResponse || (GenerateDataKeyResponse = {}));
export var GenerateDataKeyPairRequest;
(function (GenerateDataKeyPairRequest) {
    /**
     * @internal
     */
    GenerateDataKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyPairRequest || (GenerateDataKeyPairRequest = {}));
export var GenerateDataKeyPairResponse;
(function (GenerateDataKeyPairResponse) {
    /**
     * @internal
     */
    GenerateDataKeyPairResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.PrivateKeyPlaintext && { PrivateKeyPlaintext: SENSITIVE_STRING }))); };
})(GenerateDataKeyPairResponse || (GenerateDataKeyPairResponse = {}));
export var GenerateDataKeyPairWithoutPlaintextRequest;
(function (GenerateDataKeyPairWithoutPlaintextRequest) {
    /**
     * @internal
     */
    GenerateDataKeyPairWithoutPlaintextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyPairWithoutPlaintextRequest || (GenerateDataKeyPairWithoutPlaintextRequest = {}));
export var GenerateDataKeyPairWithoutPlaintextResponse;
(function (GenerateDataKeyPairWithoutPlaintextResponse) {
    /**
     * @internal
     */
    GenerateDataKeyPairWithoutPlaintextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyPairWithoutPlaintextResponse || (GenerateDataKeyPairWithoutPlaintextResponse = {}));
export var GenerateDataKeyWithoutPlaintextRequest;
(function (GenerateDataKeyWithoutPlaintextRequest) {
    /**
     * @internal
     */
    GenerateDataKeyWithoutPlaintextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyWithoutPlaintextRequest || (GenerateDataKeyWithoutPlaintextRequest = {}));
export var GenerateDataKeyWithoutPlaintextResponse;
(function (GenerateDataKeyWithoutPlaintextResponse) {
    /**
     * @internal
     */
    GenerateDataKeyWithoutPlaintextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateDataKeyWithoutPlaintextResponse || (GenerateDataKeyWithoutPlaintextResponse = {}));
export var GenerateRandomRequest;
(function (GenerateRandomRequest) {
    /**
     * @internal
     */
    GenerateRandomRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateRandomRequest || (GenerateRandomRequest = {}));
export var GenerateRandomResponse;
(function (GenerateRandomResponse) {
    /**
     * @internal
     */
    GenerateRandomResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Plaintext && { Plaintext: SENSITIVE_STRING }))); };
})(GenerateRandomResponse || (GenerateRandomResponse = {}));
export var GetKeyPolicyRequest;
(function (GetKeyPolicyRequest) {
    /**
     * @internal
     */
    GetKeyPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPolicyRequest || (GetKeyPolicyRequest = {}));
export var GetKeyPolicyResponse;
(function (GetKeyPolicyResponse) {
    /**
     * @internal
     */
    GetKeyPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPolicyResponse || (GetKeyPolicyResponse = {}));
export var GetKeyRotationStatusRequest;
(function (GetKeyRotationStatusRequest) {
    /**
     * @internal
     */
    GetKeyRotationStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyRotationStatusRequest || (GetKeyRotationStatusRequest = {}));
export var GetKeyRotationStatusResponse;
(function (GetKeyRotationStatusResponse) {
    /**
     * @internal
     */
    GetKeyRotationStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyRotationStatusResponse || (GetKeyRotationStatusResponse = {}));
export var WrappingKeySpec;
(function (WrappingKeySpec) {
    WrappingKeySpec["RSA_2048"] = "RSA_2048";
})(WrappingKeySpec || (WrappingKeySpec = {}));
export var GetParametersForImportRequest;
(function (GetParametersForImportRequest) {
    /**
     * @internal
     */
    GetParametersForImportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParametersForImportRequest || (GetParametersForImportRequest = {}));
export var GetParametersForImportResponse;
(function (GetParametersForImportResponse) {
    /**
     * @internal
     */
    GetParametersForImportResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.PublicKey && { PublicKey: SENSITIVE_STRING }))); };
})(GetParametersForImportResponse || (GetParametersForImportResponse = {}));
export var GetPublicKeyRequest;
(function (GetPublicKeyRequest) {
    /**
     * @internal
     */
    GetPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicKeyRequest || (GetPublicKeyRequest = {}));
export var GetPublicKeyResponse;
(function (GetPublicKeyResponse) {
    /**
     * @internal
     */
    GetPublicKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicKeyResponse || (GetPublicKeyResponse = {}));
export var GrantListEntry;
(function (GrantListEntry) {
    /**
     * @internal
     */
    GrantListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantListEntry || (GrantListEntry = {}));
export var ImportKeyMaterialRequest;
(function (ImportKeyMaterialRequest) {
    /**
     * @internal
     */
    ImportKeyMaterialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportKeyMaterialRequest || (ImportKeyMaterialRequest = {}));
export var ImportKeyMaterialResponse;
(function (ImportKeyMaterialResponse) {
    /**
     * @internal
     */
    ImportKeyMaterialResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportKeyMaterialResponse || (ImportKeyMaterialResponse = {}));
export var IncorrectKeyMaterialException;
(function (IncorrectKeyMaterialException) {
    /**
     * @internal
     */
    IncorrectKeyMaterialException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncorrectKeyMaterialException || (IncorrectKeyMaterialException = {}));
export var InvalidImportTokenException;
(function (InvalidImportTokenException) {
    /**
     * @internal
     */
    InvalidImportTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidImportTokenException || (InvalidImportTokenException = {}));
export var InvalidGrantIdException;
(function (InvalidGrantIdException) {
    /**
     * @internal
     */
    InvalidGrantIdException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidGrantIdException || (InvalidGrantIdException = {}));
export var InvalidMarkerException;
(function (InvalidMarkerException) {
    /**
     * @internal
     */
    InvalidMarkerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidMarkerException || (InvalidMarkerException = {}));
export var KeyListEntry;
(function (KeyListEntry) {
    /**
     * @internal
     */
    KeyListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyListEntry || (KeyListEntry = {}));
export var KMSInvalidSignatureException;
(function (KMSInvalidSignatureException) {
    /**
     * @internal
     */
    KMSInvalidSignatureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSInvalidSignatureException || (KMSInvalidSignatureException = {}));
export var ListAliasesRequest;
(function (ListAliasesRequest) {
    /**
     * @internal
     */
    ListAliasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAliasesRequest || (ListAliasesRequest = {}));
export var ListAliasesResponse;
(function (ListAliasesResponse) {
    /**
     * @internal
     */
    ListAliasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAliasesResponse || (ListAliasesResponse = {}));
export var ListGrantsRequest;
(function (ListGrantsRequest) {
    /**
     * @internal
     */
    ListGrantsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGrantsRequest || (ListGrantsRequest = {}));
export var ListGrantsResponse;
(function (ListGrantsResponse) {
    /**
     * @internal
     */
    ListGrantsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGrantsResponse || (ListGrantsResponse = {}));
export var ListKeyPoliciesRequest;
(function (ListKeyPoliciesRequest) {
    /**
     * @internal
     */
    ListKeyPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKeyPoliciesRequest || (ListKeyPoliciesRequest = {}));
export var ListKeyPoliciesResponse;
(function (ListKeyPoliciesResponse) {
    /**
     * @internal
     */
    ListKeyPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKeyPoliciesResponse || (ListKeyPoliciesResponse = {}));
export var ListKeysRequest;
(function (ListKeysRequest) {
    /**
     * @internal
     */
    ListKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKeysRequest || (ListKeysRequest = {}));
export var ListKeysResponse;
(function (ListKeysResponse) {
    /**
     * @internal
     */
    ListKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKeysResponse || (ListKeysResponse = {}));
export var ListResourceTagsRequest;
(function (ListResourceTagsRequest) {
    /**
     * @internal
     */
    ListResourceTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceTagsRequest || (ListResourceTagsRequest = {}));
export var ListResourceTagsResponse;
(function (ListResourceTagsResponse) {
    /**
     * @internal
     */
    ListResourceTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceTagsResponse || (ListResourceTagsResponse = {}));
export var ListRetirableGrantsRequest;
(function (ListRetirableGrantsRequest) {
    /**
     * @internal
     */
    ListRetirableGrantsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRetirableGrantsRequest || (ListRetirableGrantsRequest = {}));
export var MessageType;
(function (MessageType) {
    MessageType["DIGEST"] = "DIGEST";
    MessageType["RAW"] = "RAW";
})(MessageType || (MessageType = {}));
export var PutKeyPolicyRequest;
(function (PutKeyPolicyRequest) {
    /**
     * @internal
     */
    PutKeyPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutKeyPolicyRequest || (PutKeyPolicyRequest = {}));
export var ReEncryptRequest;
(function (ReEncryptRequest) {
    /**
     * @internal
     */
    ReEncryptRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReEncryptRequest || (ReEncryptRequest = {}));
export var ReEncryptResponse;
(function (ReEncryptResponse) {
    /**
     * @internal
     */
    ReEncryptResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReEncryptResponse || (ReEncryptResponse = {}));
export var RetireGrantRequest;
(function (RetireGrantRequest) {
    /**
     * @internal
     */
    RetireGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetireGrantRequest || (RetireGrantRequest = {}));
export var RevokeGrantRequest;
(function (RevokeGrantRequest) {
    /**
     * @internal
     */
    RevokeGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RevokeGrantRequest || (RevokeGrantRequest = {}));
export var ScheduleKeyDeletionRequest;
(function (ScheduleKeyDeletionRequest) {
    /**
     * @internal
     */
    ScheduleKeyDeletionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleKeyDeletionRequest || (ScheduleKeyDeletionRequest = {}));
export var ScheduleKeyDeletionResponse;
(function (ScheduleKeyDeletionResponse) {
    /**
     * @internal
     */
    ScheduleKeyDeletionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleKeyDeletionResponse || (ScheduleKeyDeletionResponse = {}));
export var SignRequest;
(function (SignRequest) {
    /**
     * @internal
     */
    SignRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Message && { Message: SENSITIVE_STRING }))); };
})(SignRequest || (SignRequest = {}));
export var SignResponse;
(function (SignResponse) {
    /**
     * @internal
     */
    SignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SignResponse || (SignResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateAliasRequest;
(function (UpdateAliasRequest) {
    /**
     * @internal
     */
    UpdateAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAliasRequest || (UpdateAliasRequest = {}));
export var UpdateCustomKeyStoreRequest;
(function (UpdateCustomKeyStoreRequest) {
    /**
     * @internal
     */
    UpdateCustomKeyStoreRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }))); };
})(UpdateCustomKeyStoreRequest || (UpdateCustomKeyStoreRequest = {}));
export var UpdateCustomKeyStoreResponse;
(function (UpdateCustomKeyStoreResponse) {
    /**
     * @internal
     */
    UpdateCustomKeyStoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCustomKeyStoreResponse || (UpdateCustomKeyStoreResponse = {}));
export var UpdateKeyDescriptionRequest;
(function (UpdateKeyDescriptionRequest) {
    /**
     * @internal
     */
    UpdateKeyDescriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateKeyDescriptionRequest || (UpdateKeyDescriptionRequest = {}));
export var VerifyRequest;
(function (VerifyRequest) {
    /**
     * @internal
     */
    VerifyRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Message && { Message: SENSITIVE_STRING }))); };
})(VerifyRequest || (VerifyRequest = {}));
export var VerifyResponse;
(function (VerifyResponse) {
    /**
     * @internal
     */
    VerifyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerifyResponse || (VerifyResponse = {}));
//# sourceMappingURL=models_0.js.map