import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcceptSharedDirectoryRequest;
(function (AcceptSharedDirectoryRequest) {
    /**
     * @internal
     */
    AcceptSharedDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptSharedDirectoryRequest || (AcceptSharedDirectoryRequest = {}));
export var ShareMethod;
(function (ShareMethod) {
    ShareMethod["HANDSHAKE"] = "HANDSHAKE";
    ShareMethod["ORGANIZATIONS"] = "ORGANIZATIONS";
})(ShareMethod || (ShareMethod = {}));
export var ShareStatus;
(function (ShareStatus) {
    ShareStatus["DELETED"] = "Deleted";
    ShareStatus["DELETING"] = "Deleting";
    ShareStatus["PENDING_ACCEPTANCE"] = "PendingAcceptance";
    ShareStatus["REJECTED"] = "Rejected";
    ShareStatus["REJECTING"] = "Rejecting";
    ShareStatus["REJECT_FAILED"] = "RejectFailed";
    ShareStatus["SHARED"] = "Shared";
    ShareStatus["SHARE_FAILED"] = "ShareFailed";
    ShareStatus["SHARING"] = "Sharing";
})(ShareStatus || (ShareStatus = {}));
export var SharedDirectory;
(function (SharedDirectory) {
    /**
     * @internal
     */
    SharedDirectory.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }))); };
})(SharedDirectory || (SharedDirectory = {}));
export var AcceptSharedDirectoryResult;
(function (AcceptSharedDirectoryResult) {
    /**
     * @internal
     */
    AcceptSharedDirectoryResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SharedDirectory && { SharedDirectory: SharedDirectory.filterSensitiveLog(obj.SharedDirectory) }))); };
})(AcceptSharedDirectoryResult || (AcceptSharedDirectoryResult = {}));
export var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientException || (ClientException = {}));
export var DirectoryAlreadySharedException;
(function (DirectoryAlreadySharedException) {
    /**
     * @internal
     */
    DirectoryAlreadySharedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryAlreadySharedException || (DirectoryAlreadySharedException = {}));
export var EntityDoesNotExistException;
(function (EntityDoesNotExistException) {
    /**
     * @internal
     */
    EntityDoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityDoesNotExistException || (EntityDoesNotExistException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceException || (ServiceException = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var IpRoute;
(function (IpRoute) {
    /**
     * @internal
     */
    IpRoute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpRoute || (IpRoute = {}));
export var AddIpRoutesRequest;
(function (AddIpRoutesRequest) {
    /**
     * @internal
     */
    AddIpRoutesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddIpRoutesRequest || (AddIpRoutesRequest = {}));
export var AddIpRoutesResult;
(function (AddIpRoutesResult) {
    /**
     * @internal
     */
    AddIpRoutesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddIpRoutesResult || (AddIpRoutesResult = {}));
export var DirectoryUnavailableException;
(function (DirectoryUnavailableException) {
    /**
     * @internal
     */
    DirectoryUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryUnavailableException || (DirectoryUnavailableException = {}));
export var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityAlreadyExistsException || (EntityAlreadyExistsException = {}));
export var IpRouteLimitExceededException;
(function (IpRouteLimitExceededException) {
    /**
     * @internal
     */
    IpRouteLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpRouteLimitExceededException || (IpRouteLimitExceededException = {}));
export var DirectoryVpcSettings;
(function (DirectoryVpcSettings) {
    /**
     * @internal
     */
    DirectoryVpcSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryVpcSettings || (DirectoryVpcSettings = {}));
export var AddRegionRequest;
(function (AddRegionRequest) {
    /**
     * @internal
     */
    AddRegionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddRegionRequest || (AddRegionRequest = {}));
export var AddRegionResult;
(function (AddRegionResult) {
    /**
     * @internal
     */
    AddRegionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddRegionResult || (AddRegionResult = {}));
export var DirectoryAlreadyInRegionException;
(function (DirectoryAlreadyInRegionException) {
    /**
     * @internal
     */
    DirectoryAlreadyInRegionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryAlreadyInRegionException || (DirectoryAlreadyInRegionException = {}));
export var DirectoryDoesNotExistException;
(function (DirectoryDoesNotExistException) {
    /**
     * @internal
     */
    DirectoryDoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryDoesNotExistException || (DirectoryDoesNotExistException = {}));
export var RegionLimitExceededException;
(function (RegionLimitExceededException) {
    /**
     * @internal
     */
    RegionLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionLimitExceededException || (RegionLimitExceededException = {}));
export var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedOperationException || (UnsupportedOperationException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    /**
     * @internal
     */
    AddTagsToResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceRequest || (AddTagsToResourceRequest = {}));
export var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    /**
     * @internal
     */
    AddTagsToResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceResult || (AddTagsToResourceResult = {}));
export var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagLimitExceededException || (TagLimitExceededException = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var AuthenticationFailedException;
(function (AuthenticationFailedException) {
    /**
     * @internal
     */
    AuthenticationFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthenticationFailedException || (AuthenticationFailedException = {}));
export var CancelSchemaExtensionRequest;
(function (CancelSchemaExtensionRequest) {
    /**
     * @internal
     */
    CancelSchemaExtensionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSchemaExtensionRequest || (CancelSchemaExtensionRequest = {}));
export var CancelSchemaExtensionResult;
(function (CancelSchemaExtensionResult) {
    /**
     * @internal
     */
    CancelSchemaExtensionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSchemaExtensionResult || (CancelSchemaExtensionResult = {}));
export var ClientCertAuthSettings;
(function (ClientCertAuthSettings) {
    /**
     * @internal
     */
    ClientCertAuthSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientCertAuthSettings || (ClientCertAuthSettings = {}));
export var CertificateState;
(function (CertificateState) {
    CertificateState["DEREGISTERED"] = "Deregistered";
    CertificateState["DEREGISTERING"] = "Deregistering";
    CertificateState["DEREGISTER_FAILED"] = "DeregisterFailed";
    CertificateState["REGISTERED"] = "Registered";
    CertificateState["REGISTERING"] = "Registering";
    CertificateState["REGISTER_FAILED"] = "RegisterFailed";
})(CertificateState || (CertificateState = {}));
export var CertificateType;
(function (CertificateType) {
    CertificateType["CLIENT_CERT_AUTH"] = "ClientCertAuth";
    CertificateType["CLIENT_LDAPS"] = "ClientLDAPS";
})(CertificateType || (CertificateType = {}));
export var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Certificate || (Certificate = {}));
export var CertificateAlreadyExistsException;
(function (CertificateAlreadyExistsException) {
    /**
     * @internal
     */
    CertificateAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateAlreadyExistsException || (CertificateAlreadyExistsException = {}));
export var CertificateDoesNotExistException;
(function (CertificateDoesNotExistException) {
    /**
     * @internal
     */
    CertificateDoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateDoesNotExistException || (CertificateDoesNotExistException = {}));
export var CertificateInfo;
(function (CertificateInfo) {
    /**
     * @internal
     */
    CertificateInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateInfo || (CertificateInfo = {}));
export var CertificateInUseException;
(function (CertificateInUseException) {
    /**
     * @internal
     */
    CertificateInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateInUseException || (CertificateInUseException = {}));
export var CertificateLimitExceededException;
(function (CertificateLimitExceededException) {
    /**
     * @internal
     */
    CertificateLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateLimitExceededException || (CertificateLimitExceededException = {}));
export var ClientAuthenticationType;
(function (ClientAuthenticationType) {
    ClientAuthenticationType["SMART_CARD"] = "SmartCard";
})(ClientAuthenticationType || (ClientAuthenticationType = {}));
export var Computer;
(function (Computer) {
    /**
     * @internal
     */
    Computer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Computer || (Computer = {}));
export var ReplicationScope;
(function (ReplicationScope) {
    ReplicationScope["Domain"] = "Domain";
})(ReplicationScope || (ReplicationScope = {}));
export var ConditionalForwarder;
(function (ConditionalForwarder) {
    /**
     * @internal
     */
    ConditionalForwarder.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConditionalForwarder || (ConditionalForwarder = {}));
export var DirectoryConnectSettings;
(function (DirectoryConnectSettings) {
    /**
     * @internal
     */
    DirectoryConnectSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryConnectSettings || (DirectoryConnectSettings = {}));
export var DirectorySize;
(function (DirectorySize) {
    DirectorySize["LARGE"] = "Large";
    DirectorySize["SMALL"] = "Small";
})(DirectorySize || (DirectorySize = {}));
export var ConnectDirectoryRequest;
(function (ConnectDirectoryRequest) {
    /**
     * @internal
     */
    ConnectDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(ConnectDirectoryRequest || (ConnectDirectoryRequest = {}));
export var ConnectDirectoryResult;
(function (ConnectDirectoryResult) {
    /**
     * @internal
     */
    ConnectDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectDirectoryResult || (ConnectDirectoryResult = {}));
export var DirectoryLimitExceededException;
(function (DirectoryLimitExceededException) {
    /**
     * @internal
     */
    DirectoryLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryLimitExceededException || (DirectoryLimitExceededException = {}));
export var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAliasRequest || (CreateAliasRequest = {}));
export var CreateAliasResult;
(function (CreateAliasResult) {
    /**
     * @internal
     */
    CreateAliasResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAliasResult || (CreateAliasResult = {}));
export var CreateComputerRequest;
(function (CreateComputerRequest) {
    /**
     * @internal
     */
    CreateComputerRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateComputerRequest || (CreateComputerRequest = {}));
export var CreateComputerResult;
(function (CreateComputerResult) {
    /**
     * @internal
     */
    CreateComputerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateComputerResult || (CreateComputerResult = {}));
export var CreateConditionalForwarderRequest;
(function (CreateConditionalForwarderRequest) {
    /**
     * @internal
     */
    CreateConditionalForwarderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConditionalForwarderRequest || (CreateConditionalForwarderRequest = {}));
export var CreateConditionalForwarderResult;
(function (CreateConditionalForwarderResult) {
    /**
     * @internal
     */
    CreateConditionalForwarderResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConditionalForwarderResult || (CreateConditionalForwarderResult = {}));
export var CreateDirectoryRequest;
(function (CreateDirectoryRequest) {
    /**
     * @internal
     */
    CreateDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateDirectoryRequest || (CreateDirectoryRequest = {}));
export var CreateDirectoryResult;
(function (CreateDirectoryResult) {
    /**
     * @internal
     */
    CreateDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDirectoryResult || (CreateDirectoryResult = {}));
export var CreateLogSubscriptionRequest;
(function (CreateLogSubscriptionRequest) {
    /**
     * @internal
     */
    CreateLogSubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLogSubscriptionRequest || (CreateLogSubscriptionRequest = {}));
export var CreateLogSubscriptionResult;
(function (CreateLogSubscriptionResult) {
    /**
     * @internal
     */
    CreateLogSubscriptionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLogSubscriptionResult || (CreateLogSubscriptionResult = {}));
export var InsufficientPermissionsException;
(function (InsufficientPermissionsException) {
    /**
     * @internal
     */
    InsufficientPermissionsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsufficientPermissionsException || (InsufficientPermissionsException = {}));
export var DirectoryEdition;
(function (DirectoryEdition) {
    DirectoryEdition["ENTERPRISE"] = "Enterprise";
    DirectoryEdition["STANDARD"] = "Standard";
})(DirectoryEdition || (DirectoryEdition = {}));
export var CreateMicrosoftADRequest;
(function (CreateMicrosoftADRequest) {
    /**
     * @internal
     */
    CreateMicrosoftADRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateMicrosoftADRequest || (CreateMicrosoftADRequest = {}));
export var CreateMicrosoftADResult;
(function (CreateMicrosoftADResult) {
    /**
     * @internal
     */
    CreateMicrosoftADResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMicrosoftADResult || (CreateMicrosoftADResult = {}));
export var CreateSnapshotRequest;
(function (CreateSnapshotRequest) {
    /**
     * @internal
     */
    CreateSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotRequest || (CreateSnapshotRequest = {}));
export var CreateSnapshotResult;
(function (CreateSnapshotResult) {
    /**
     * @internal
     */
    CreateSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotResult || (CreateSnapshotResult = {}));
export var SnapshotLimitExceededException;
(function (SnapshotLimitExceededException) {
    /**
     * @internal
     */
    SnapshotLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnapshotLimitExceededException || (SnapshotLimitExceededException = {}));
export var SelectiveAuth;
(function (SelectiveAuth) {
    SelectiveAuth["DISABLED"] = "Disabled";
    SelectiveAuth["ENABLED"] = "Enabled";
})(SelectiveAuth || (SelectiveAuth = {}));
export var TrustDirection;
(function (TrustDirection) {
    TrustDirection["ONE_WAY_INCOMING"] = "One-Way: Incoming";
    TrustDirection["ONE_WAY_OUTGOING"] = "One-Way: Outgoing";
    TrustDirection["TWO_WAY"] = "Two-Way";
})(TrustDirection || (TrustDirection = {}));
export var TrustType;
(function (TrustType) {
    TrustType["EXTERNAL"] = "External";
    TrustType["FOREST"] = "Forest";
})(TrustType || (TrustType = {}));
export var CreateTrustRequest;
(function (CreateTrustRequest) {
    /**
     * @internal
     */
    CreateTrustRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TrustPassword && { TrustPassword: SENSITIVE_STRING }))); };
})(CreateTrustRequest || (CreateTrustRequest = {}));
export var CreateTrustResult;
(function (CreateTrustResult) {
    /**
     * @internal
     */
    CreateTrustResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrustResult || (CreateTrustResult = {}));
export var DeleteConditionalForwarderRequest;
(function (DeleteConditionalForwarderRequest) {
    /**
     * @internal
     */
    DeleteConditionalForwarderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConditionalForwarderRequest || (DeleteConditionalForwarderRequest = {}));
export var DeleteConditionalForwarderResult;
(function (DeleteConditionalForwarderResult) {
    /**
     * @internal
     */
    DeleteConditionalForwarderResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConditionalForwarderResult || (DeleteConditionalForwarderResult = {}));
export var DeleteDirectoryRequest;
(function (DeleteDirectoryRequest) {
    /**
     * @internal
     */
    DeleteDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDirectoryRequest || (DeleteDirectoryRequest = {}));
export var DeleteDirectoryResult;
(function (DeleteDirectoryResult) {
    /**
     * @internal
     */
    DeleteDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDirectoryResult || (DeleteDirectoryResult = {}));
export var DeleteLogSubscriptionRequest;
(function (DeleteLogSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteLogSubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLogSubscriptionRequest || (DeleteLogSubscriptionRequest = {}));
export var DeleteLogSubscriptionResult;
(function (DeleteLogSubscriptionResult) {
    /**
     * @internal
     */
    DeleteLogSubscriptionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLogSubscriptionResult || (DeleteLogSubscriptionResult = {}));
export var DeleteSnapshotRequest;
(function (DeleteSnapshotRequest) {
    /**
     * @internal
     */
    DeleteSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSnapshotRequest || (DeleteSnapshotRequest = {}));
export var DeleteSnapshotResult;
(function (DeleteSnapshotResult) {
    /**
     * @internal
     */
    DeleteSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSnapshotResult || (DeleteSnapshotResult = {}));
export var DeleteTrustRequest;
(function (DeleteTrustRequest) {
    /**
     * @internal
     */
    DeleteTrustRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrustRequest || (DeleteTrustRequest = {}));
export var DeleteTrustResult;
(function (DeleteTrustResult) {
    /**
     * @internal
     */
    DeleteTrustResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrustResult || (DeleteTrustResult = {}));
export var DeregisterCertificateRequest;
(function (DeregisterCertificateRequest) {
    /**
     * @internal
     */
    DeregisterCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterCertificateRequest || (DeregisterCertificateRequest = {}));
export var DeregisterCertificateResult;
(function (DeregisterCertificateResult) {
    /**
     * @internal
     */
    DeregisterCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterCertificateResult || (DeregisterCertificateResult = {}));
export var DeregisterEventTopicRequest;
(function (DeregisterEventTopicRequest) {
    /**
     * @internal
     */
    DeregisterEventTopicRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterEventTopicRequest || (DeregisterEventTopicRequest = {}));
export var DeregisterEventTopicResult;
(function (DeregisterEventTopicResult) {
    /**
     * @internal
     */
    DeregisterEventTopicResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterEventTopicResult || (DeregisterEventTopicResult = {}));
export var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
    /**
     * @internal
     */
    DescribeCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCertificateRequest || (DescribeCertificateRequest = {}));
export var DescribeCertificateResult;
(function (DescribeCertificateResult) {
    /**
     * @internal
     */
    DescribeCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCertificateResult || (DescribeCertificateResult = {}));
export var DescribeConditionalForwardersRequest;
(function (DescribeConditionalForwardersRequest) {
    /**
     * @internal
     */
    DescribeConditionalForwardersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConditionalForwardersRequest || (DescribeConditionalForwardersRequest = {}));
export var DescribeConditionalForwardersResult;
(function (DescribeConditionalForwardersResult) {
    /**
     * @internal
     */
    DescribeConditionalForwardersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConditionalForwardersResult || (DescribeConditionalForwardersResult = {}));
export var DescribeDirectoriesRequest;
(function (DescribeDirectoriesRequest) {
    /**
     * @internal
     */
    DescribeDirectoriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDirectoriesRequest || (DescribeDirectoriesRequest = {}));
export var DirectoryConnectSettingsDescription;
(function (DirectoryConnectSettingsDescription) {
    /**
     * @internal
     */
    DirectoryConnectSettingsDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryConnectSettingsDescription || (DirectoryConnectSettingsDescription = {}));
export var RadiusAuthenticationProtocol;
(function (RadiusAuthenticationProtocol) {
    RadiusAuthenticationProtocol["CHAP"] = "CHAP";
    RadiusAuthenticationProtocol["MSCHAPV1"] = "MS-CHAPv1";
    RadiusAuthenticationProtocol["MSCHAPV2"] = "MS-CHAPv2";
    RadiusAuthenticationProtocol["PAP"] = "PAP";
})(RadiusAuthenticationProtocol || (RadiusAuthenticationProtocol = {}));
export var RadiusSettings;
(function (RadiusSettings) {
    /**
     * @internal
     */
    RadiusSettings.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SharedSecret && { SharedSecret: SENSITIVE_STRING }))); };
})(RadiusSettings || (RadiusSettings = {}));
export var RadiusStatus;
(function (RadiusStatus) {
    RadiusStatus["COMPLETED"] = "Completed";
    RadiusStatus["CREATING"] = "Creating";
    RadiusStatus["FAILED"] = "Failed";
})(RadiusStatus || (RadiusStatus = {}));
export var DirectoryVpcSettingsDescription;
(function (DirectoryVpcSettingsDescription) {
    /**
     * @internal
     */
    DirectoryVpcSettingsDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryVpcSettingsDescription || (DirectoryVpcSettingsDescription = {}));
export var OwnerDirectoryDescription;
(function (OwnerDirectoryDescription) {
    /**
     * @internal
     */
    OwnerDirectoryDescription.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }))); };
})(OwnerDirectoryDescription || (OwnerDirectoryDescription = {}));
export var RegionsInfo;
(function (RegionsInfo) {
    /**
     * @internal
     */
    RegionsInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionsInfo || (RegionsInfo = {}));
export var DirectoryStage;
(function (DirectoryStage) {
    DirectoryStage["ACTIVE"] = "Active";
    DirectoryStage["CREATED"] = "Created";
    DirectoryStage["CREATING"] = "Creating";
    DirectoryStage["DELETED"] = "Deleted";
    DirectoryStage["DELETING"] = "Deleting";
    DirectoryStage["FAILED"] = "Failed";
    DirectoryStage["IMPAIRED"] = "Impaired";
    DirectoryStage["INOPERABLE"] = "Inoperable";
    DirectoryStage["REQUESTED"] = "Requested";
    DirectoryStage["RESTOREFAILED"] = "RestoreFailed";
    DirectoryStage["RESTORING"] = "Restoring";
})(DirectoryStage || (DirectoryStage = {}));
export var DirectoryType;
(function (DirectoryType) {
    DirectoryType["AD_CONNECTOR"] = "ADConnector";
    DirectoryType["MICROSOFT_AD"] = "MicrosoftAD";
    DirectoryType["SHARED_MICROSOFT_AD"] = "SharedMicrosoftAD";
    DirectoryType["SIMPLE_AD"] = "SimpleAD";
})(DirectoryType || (DirectoryType = {}));
export var DirectoryDescription;
(function (DirectoryDescription) {
    /**
     * @internal
     */
    DirectoryDescription.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.ShareNotes && { ShareNotes: SENSITIVE_STRING })), (obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) })), (obj.OwnerDirectoryDescription && {
        OwnerDirectoryDescription: OwnerDirectoryDescription.filterSensitiveLog(obj.OwnerDirectoryDescription),
    }))); };
})(DirectoryDescription || (DirectoryDescription = {}));
export var DescribeDirectoriesResult;
(function (DescribeDirectoriesResult) {
    /**
     * @internal
     */
    DescribeDirectoriesResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DirectoryDescriptions && {
        DirectoryDescriptions: obj.DirectoryDescriptions.map(function (item) { return DirectoryDescription.filterSensitiveLog(item); }),
    }))); };
})(DescribeDirectoriesResult || (DescribeDirectoriesResult = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeDomainControllersRequest;
(function (DescribeDomainControllersRequest) {
    /**
     * @internal
     */
    DescribeDomainControllersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainControllersRequest || (DescribeDomainControllersRequest = {}));
export var DomainControllerStatus;
(function (DomainControllerStatus) {
    DomainControllerStatus["ACTIVE"] = "Active";
    DomainControllerStatus["CREATING"] = "Creating";
    DomainControllerStatus["DELETED"] = "Deleted";
    DomainControllerStatus["DELETING"] = "Deleting";
    DomainControllerStatus["FAILED"] = "Failed";
    DomainControllerStatus["IMPAIRED"] = "Impaired";
    DomainControllerStatus["RESTORING"] = "Restoring";
})(DomainControllerStatus || (DomainControllerStatus = {}));
export var DomainController;
(function (DomainController) {
    /**
     * @internal
     */
    DomainController.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainController || (DomainController = {}));
export var DescribeDomainControllersResult;
(function (DescribeDomainControllersResult) {
    /**
     * @internal
     */
    DescribeDomainControllersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainControllersResult || (DescribeDomainControllersResult = {}));
export var DescribeEventTopicsRequest;
(function (DescribeEventTopicsRequest) {
    /**
     * @internal
     */
    DescribeEventTopicsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventTopicsRequest || (DescribeEventTopicsRequest = {}));
export var TopicStatus;
(function (TopicStatus) {
    TopicStatus["DELETED"] = "Deleted";
    TopicStatus["FAILED"] = "Failed";
    TopicStatus["REGISTERED"] = "Registered";
    TopicStatus["TOPIC_NOT_FOUND"] = "Topic not found";
})(TopicStatus || (TopicStatus = {}));
export var EventTopic;
(function (EventTopic) {
    /**
     * @internal
     */
    EventTopic.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventTopic || (EventTopic = {}));
export var DescribeEventTopicsResult;
(function (DescribeEventTopicsResult) {
    /**
     * @internal
     */
    DescribeEventTopicsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventTopicsResult || (DescribeEventTopicsResult = {}));
export var LDAPSType;
(function (LDAPSType) {
    LDAPSType["CLIENT"] = "Client";
})(LDAPSType || (LDAPSType = {}));
export var DescribeLDAPSSettingsRequest;
(function (DescribeLDAPSSettingsRequest) {
    /**
     * @internal
     */
    DescribeLDAPSSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLDAPSSettingsRequest || (DescribeLDAPSSettingsRequest = {}));
export var LDAPSStatus;
(function (LDAPSStatus) {
    LDAPSStatus["DISABLED"] = "Disabled";
    LDAPSStatus["ENABLED"] = "Enabled";
    LDAPSStatus["ENABLE_FAILED"] = "EnableFailed";
    LDAPSStatus["ENABLING"] = "Enabling";
})(LDAPSStatus || (LDAPSStatus = {}));
export var LDAPSSettingInfo;
(function (LDAPSSettingInfo) {
    /**
     * @internal
     */
    LDAPSSettingInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LDAPSSettingInfo || (LDAPSSettingInfo = {}));
export var DescribeLDAPSSettingsResult;
(function (DescribeLDAPSSettingsResult) {
    /**
     * @internal
     */
    DescribeLDAPSSettingsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLDAPSSettingsResult || (DescribeLDAPSSettingsResult = {}));
export var DescribeRegionsRequest;
(function (DescribeRegionsRequest) {
    /**
     * @internal
     */
    DescribeRegionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegionsRequest || (DescribeRegionsRequest = {}));
export var RegionType;
(function (RegionType) {
    RegionType["ADDITIONAL"] = "Additional";
    RegionType["PRIMARY"] = "Primary";
})(RegionType || (RegionType = {}));
export var RegionDescription;
(function (RegionDescription) {
    /**
     * @internal
     */
    RegionDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionDescription || (RegionDescription = {}));
export var DescribeRegionsResult;
(function (DescribeRegionsResult) {
    /**
     * @internal
     */
    DescribeRegionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegionsResult || (DescribeRegionsResult = {}));
export var DescribeSharedDirectoriesRequest;
(function (DescribeSharedDirectoriesRequest) {
    /**
     * @internal
     */
    DescribeSharedDirectoriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSharedDirectoriesRequest || (DescribeSharedDirectoriesRequest = {}));
export var DescribeSharedDirectoriesResult;
(function (DescribeSharedDirectoriesResult) {
    /**
     * @internal
     */
    DescribeSharedDirectoriesResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SharedDirectories && {
        SharedDirectories: obj.SharedDirectories.map(function (item) { return SharedDirectory.filterSensitiveLog(item); }),
    }))); };
})(DescribeSharedDirectoriesResult || (DescribeSharedDirectoriesResult = {}));
export var DescribeSnapshotsRequest;
(function (DescribeSnapshotsRequest) {
    /**
     * @internal
     */
    DescribeSnapshotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSnapshotsRequest || (DescribeSnapshotsRequest = {}));
export var SnapshotStatus;
(function (SnapshotStatus) {
    SnapshotStatus["COMPLETED"] = "Completed";
    SnapshotStatus["CREATING"] = "Creating";
    SnapshotStatus["FAILED"] = "Failed";
})(SnapshotStatus || (SnapshotStatus = {}));
export var SnapshotType;
(function (SnapshotType) {
    SnapshotType["AUTO"] = "Auto";
    SnapshotType["MANUAL"] = "Manual";
})(SnapshotType || (SnapshotType = {}));
export var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Snapshot || (Snapshot = {}));
export var DescribeSnapshotsResult;
(function (DescribeSnapshotsResult) {
    /**
     * @internal
     */
    DescribeSnapshotsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSnapshotsResult || (DescribeSnapshotsResult = {}));
export var DescribeTrustsRequest;
(function (DescribeTrustsRequest) {
    /**
     * @internal
     */
    DescribeTrustsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrustsRequest || (DescribeTrustsRequest = {}));
export var TrustState;
(function (TrustState) {
    TrustState["CREATED"] = "Created";
    TrustState["CREATING"] = "Creating";
    TrustState["DELETED"] = "Deleted";
    TrustState["DELETING"] = "Deleting";
    TrustState["FAILED"] = "Failed";
    TrustState["UPDATED"] = "Updated";
    TrustState["UPDATE_FAILED"] = "UpdateFailed";
    TrustState["UPDATING"] = "Updating";
    TrustState["VERIFIED"] = "Verified";
    TrustState["VERIFYING"] = "Verifying";
    TrustState["VERIFY_FAILED"] = "VerifyFailed";
})(TrustState || (TrustState = {}));
export var Trust;
(function (Trust) {
    /**
     * @internal
     */
    Trust.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Trust || (Trust = {}));
export var DescribeTrustsResult;
(function (DescribeTrustsResult) {
    /**
     * @internal
     */
    DescribeTrustsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrustsResult || (DescribeTrustsResult = {}));
export var DirectoryLimits;
(function (DirectoryLimits) {
    /**
     * @internal
     */
    DirectoryLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryLimits || (DirectoryLimits = {}));
export var DirectoryNotSharedException;
(function (DirectoryNotSharedException) {
    /**
     * @internal
     */
    DirectoryNotSharedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectoryNotSharedException || (DirectoryNotSharedException = {}));
export var DisableClientAuthenticationRequest;
(function (DisableClientAuthenticationRequest) {
    /**
     * @internal
     */
    DisableClientAuthenticationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableClientAuthenticationRequest || (DisableClientAuthenticationRequest = {}));
export var DisableClientAuthenticationResult;
(function (DisableClientAuthenticationResult) {
    /**
     * @internal
     */
    DisableClientAuthenticationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableClientAuthenticationResult || (DisableClientAuthenticationResult = {}));
export var InvalidClientAuthStatusException;
(function (InvalidClientAuthStatusException) {
    /**
     * @internal
     */
    InvalidClientAuthStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidClientAuthStatusException || (InvalidClientAuthStatusException = {}));
export var DisableLDAPSRequest;
(function (DisableLDAPSRequest) {
    /**
     * @internal
     */
    DisableLDAPSRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableLDAPSRequest || (DisableLDAPSRequest = {}));
export var DisableLDAPSResult;
(function (DisableLDAPSResult) {
    /**
     * @internal
     */
    DisableLDAPSResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableLDAPSResult || (DisableLDAPSResult = {}));
export var InvalidLDAPSStatusException;
(function (InvalidLDAPSStatusException) {
    /**
     * @internal
     */
    InvalidLDAPSStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLDAPSStatusException || (InvalidLDAPSStatusException = {}));
export var DisableRadiusRequest;
(function (DisableRadiusRequest) {
    /**
     * @internal
     */
    DisableRadiusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableRadiusRequest || (DisableRadiusRequest = {}));
export var DisableRadiusResult;
(function (DisableRadiusResult) {
    /**
     * @internal
     */
    DisableRadiusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableRadiusResult || (DisableRadiusResult = {}));
export var DisableSsoRequest;
(function (DisableSsoRequest) {
    /**
     * @internal
     */
    DisableSsoRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(DisableSsoRequest || (DisableSsoRequest = {}));
export var DisableSsoResult;
(function (DisableSsoResult) {
    /**
     * @internal
     */
    DisableSsoResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableSsoResult || (DisableSsoResult = {}));
export var EnableClientAuthenticationRequest;
(function (EnableClientAuthenticationRequest) {
    /**
     * @internal
     */
    EnableClientAuthenticationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableClientAuthenticationRequest || (EnableClientAuthenticationRequest = {}));
export var EnableClientAuthenticationResult;
(function (EnableClientAuthenticationResult) {
    /**
     * @internal
     */
    EnableClientAuthenticationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableClientAuthenticationResult || (EnableClientAuthenticationResult = {}));
export var NoAvailableCertificateException;
(function (NoAvailableCertificateException) {
    /**
     * @internal
     */
    NoAvailableCertificateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoAvailableCertificateException || (NoAvailableCertificateException = {}));
export var EnableLDAPSRequest;
(function (EnableLDAPSRequest) {
    /**
     * @internal
     */
    EnableLDAPSRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableLDAPSRequest || (EnableLDAPSRequest = {}));
export var EnableLDAPSResult;
(function (EnableLDAPSResult) {
    /**
     * @internal
     */
    EnableLDAPSResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableLDAPSResult || (EnableLDAPSResult = {}));
export var EnableRadiusRequest;
(function (EnableRadiusRequest) {
    /**
     * @internal
     */
    EnableRadiusRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }))); };
})(EnableRadiusRequest || (EnableRadiusRequest = {}));
export var EnableRadiusResult;
(function (EnableRadiusResult) {
    /**
     * @internal
     */
    EnableRadiusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableRadiusResult || (EnableRadiusResult = {}));
export var EnableSsoRequest;
(function (EnableSsoRequest) {
    /**
     * @internal
     */
    EnableSsoRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(EnableSsoRequest || (EnableSsoRequest = {}));
export var EnableSsoResult;
(function (EnableSsoResult) {
    /**
     * @internal
     */
    EnableSsoResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableSsoResult || (EnableSsoResult = {}));
export var GetDirectoryLimitsRequest;
(function (GetDirectoryLimitsRequest) {
    /**
     * @internal
     */
    GetDirectoryLimitsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDirectoryLimitsRequest || (GetDirectoryLimitsRequest = {}));
export var GetDirectoryLimitsResult;
(function (GetDirectoryLimitsResult) {
    /**
     * @internal
     */
    GetDirectoryLimitsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDirectoryLimitsResult || (GetDirectoryLimitsResult = {}));
export var GetSnapshotLimitsRequest;
(function (GetSnapshotLimitsRequest) {
    /**
     * @internal
     */
    GetSnapshotLimitsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSnapshotLimitsRequest || (GetSnapshotLimitsRequest = {}));
export var SnapshotLimits;
(function (SnapshotLimits) {
    /**
     * @internal
     */
    SnapshotLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnapshotLimits || (SnapshotLimits = {}));
export var GetSnapshotLimitsResult;
(function (GetSnapshotLimitsResult) {
    /**
     * @internal
     */
    GetSnapshotLimitsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSnapshotLimitsResult || (GetSnapshotLimitsResult = {}));
export var ListCertificatesRequest;
(function (ListCertificatesRequest) {
    /**
     * @internal
     */
    ListCertificatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCertificatesRequest || (ListCertificatesRequest = {}));
export var ListCertificatesResult;
(function (ListCertificatesResult) {
    /**
     * @internal
     */
    ListCertificatesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCertificatesResult || (ListCertificatesResult = {}));
export var ListIpRoutesRequest;
(function (ListIpRoutesRequest) {
    /**
     * @internal
     */
    ListIpRoutesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIpRoutesRequest || (ListIpRoutesRequest = {}));
export var IpRouteStatusMsg;
(function (IpRouteStatusMsg) {
    IpRouteStatusMsg["ADDED"] = "Added";
    IpRouteStatusMsg["ADDING"] = "Adding";
    IpRouteStatusMsg["ADD_FAILED"] = "AddFailed";
    IpRouteStatusMsg["REMOVED"] = "Removed";
    IpRouteStatusMsg["REMOVE_FAILED"] = "RemoveFailed";
    IpRouteStatusMsg["REMOVING"] = "Removing";
})(IpRouteStatusMsg || (IpRouteStatusMsg = {}));
export var IpRouteInfo;
(function (IpRouteInfo) {
    /**
     * @internal
     */
    IpRouteInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpRouteInfo || (IpRouteInfo = {}));
export var ListIpRoutesResult;
(function (ListIpRoutesResult) {
    /**
     * @internal
     */
    ListIpRoutesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIpRoutesResult || (ListIpRoutesResult = {}));
export var ListLogSubscriptionsRequest;
(function (ListLogSubscriptionsRequest) {
    /**
     * @internal
     */
    ListLogSubscriptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLogSubscriptionsRequest || (ListLogSubscriptionsRequest = {}));
export var LogSubscription;
(function (LogSubscription) {
    /**
     * @internal
     */
    LogSubscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogSubscription || (LogSubscription = {}));
export var ListLogSubscriptionsResult;
(function (ListLogSubscriptionsResult) {
    /**
     * @internal
     */
    ListLogSubscriptionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLogSubscriptionsResult || (ListLogSubscriptionsResult = {}));
export var ListSchemaExtensionsRequest;
(function (ListSchemaExtensionsRequest) {
    /**
     * @internal
     */
    ListSchemaExtensionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemaExtensionsRequest || (ListSchemaExtensionsRequest = {}));
export var SchemaExtensionStatus;
(function (SchemaExtensionStatus) {
    SchemaExtensionStatus["CANCELLED"] = "Cancelled";
    SchemaExtensionStatus["CANCEL_IN_PROGRESS"] = "CancelInProgress";
    SchemaExtensionStatus["COMPLETED"] = "Completed";
    SchemaExtensionStatus["CREATING_SNAPSHOT"] = "CreatingSnapshot";
    SchemaExtensionStatus["FAILED"] = "Failed";
    SchemaExtensionStatus["INITIALIZING"] = "Initializing";
    SchemaExtensionStatus["REPLICATING"] = "Replicating";
    SchemaExtensionStatus["ROLLBACK_IN_PROGRESS"] = "RollbackInProgress";
    SchemaExtensionStatus["UPDATING_SCHEMA"] = "UpdatingSchema";
})(SchemaExtensionStatus || (SchemaExtensionStatus = {}));
export var SchemaExtensionInfo;
(function (SchemaExtensionInfo) {
    /**
     * @internal
     */
    SchemaExtensionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaExtensionInfo || (SchemaExtensionInfo = {}));
export var ListSchemaExtensionsResult;
(function (ListSchemaExtensionsResult) {
    /**
     * @internal
     */
    ListSchemaExtensionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemaExtensionsResult || (ListSchemaExtensionsResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var InvalidCertificateException;
(function (InvalidCertificateException) {
    /**
     * @internal
     */
    InvalidCertificateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCertificateException || (InvalidCertificateException = {}));
export var RegisterCertificateRequest;
(function (RegisterCertificateRequest) {
    /**
     * @internal
     */
    RegisterCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterCertificateRequest || (RegisterCertificateRequest = {}));
export var RegisterCertificateResult;
(function (RegisterCertificateResult) {
    /**
     * @internal
     */
    RegisterCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterCertificateResult || (RegisterCertificateResult = {}));
export var RegisterEventTopicRequest;
(function (RegisterEventTopicRequest) {
    /**
     * @internal
     */
    RegisterEventTopicRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterEventTopicRequest || (RegisterEventTopicRequest = {}));
export var RegisterEventTopicResult;
(function (RegisterEventTopicResult) {
    /**
     * @internal
     */
    RegisterEventTopicResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterEventTopicResult || (RegisterEventTopicResult = {}));
export var RejectSharedDirectoryRequest;
(function (RejectSharedDirectoryRequest) {
    /**
     * @internal
     */
    RejectSharedDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectSharedDirectoryRequest || (RejectSharedDirectoryRequest = {}));
export var RejectSharedDirectoryResult;
(function (RejectSharedDirectoryResult) {
    /**
     * @internal
     */
    RejectSharedDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectSharedDirectoryResult || (RejectSharedDirectoryResult = {}));
export var RemoveIpRoutesRequest;
(function (RemoveIpRoutesRequest) {
    /**
     * @internal
     */
    RemoveIpRoutesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveIpRoutesRequest || (RemoveIpRoutesRequest = {}));
export var RemoveIpRoutesResult;
(function (RemoveIpRoutesResult) {
    /**
     * @internal
     */
    RemoveIpRoutesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveIpRoutesResult || (RemoveIpRoutesResult = {}));
export var RemoveRegionRequest;
(function (RemoveRegionRequest) {
    /**
     * @internal
     */
    RemoveRegionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveRegionRequest || (RemoveRegionRequest = {}));
export var RemoveRegionResult;
(function (RemoveRegionResult) {
    /**
     * @internal
     */
    RemoveRegionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveRegionResult || (RemoveRegionResult = {}));
export var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveTagsFromResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceRequest || (RemoveTagsFromResourceRequest = {}));
export var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceResult || (RemoveTagsFromResourceResult = {}));
export var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPasswordException || (InvalidPasswordException = {}));
export var ResetUserPasswordRequest;
(function (ResetUserPasswordRequest) {
    /**
     * @internal
     */
    ResetUserPasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.NewPassword && { NewPassword: SENSITIVE_STRING }))); };
})(ResetUserPasswordRequest || (ResetUserPasswordRequest = {}));
export var ResetUserPasswordResult;
(function (ResetUserPasswordResult) {
    /**
     * @internal
     */
    ResetUserPasswordResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetUserPasswordResult || (ResetUserPasswordResult = {}));
export var UserDoesNotExistException;
(function (UserDoesNotExistException) {
    /**
     * @internal
     */
    UserDoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserDoesNotExistException || (UserDoesNotExistException = {}));
export var RestoreFromSnapshotRequest;
(function (RestoreFromSnapshotRequest) {
    /**
     * @internal
     */
    RestoreFromSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestoreFromSnapshotRequest || (RestoreFromSnapshotRequest = {}));
export var RestoreFromSnapshotResult;
(function (RestoreFromSnapshotResult) {
    /**
     * @internal
     */
    RestoreFromSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestoreFromSnapshotResult || (RestoreFromSnapshotResult = {}));
export var InvalidTargetException;
(function (InvalidTargetException) {
    /**
     * @internal
     */
    InvalidTargetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTargetException || (InvalidTargetException = {}));
export var OrganizationsException;
(function (OrganizationsException) {
    /**
     * @internal
     */
    OrganizationsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationsException || (OrganizationsException = {}));
export var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
})(TargetType || (TargetType = {}));
export var ShareTarget;
(function (ShareTarget) {
    /**
     * @internal
     */
    ShareTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShareTarget || (ShareTarget = {}));
export var ShareDirectoryRequest;
(function (ShareDirectoryRequest) {
    /**
     * @internal
     */
    ShareDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }))); };
})(ShareDirectoryRequest || (ShareDirectoryRequest = {}));
export var ShareDirectoryResult;
(function (ShareDirectoryResult) {
    /**
     * @internal
     */
    ShareDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShareDirectoryResult || (ShareDirectoryResult = {}));
export var ShareLimitExceededException;
(function (ShareLimitExceededException) {
    /**
     * @internal
     */
    ShareLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShareLimitExceededException || (ShareLimitExceededException = {}));
export var StartSchemaExtensionRequest;
(function (StartSchemaExtensionRequest) {
    /**
     * @internal
     */
    StartSchemaExtensionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSchemaExtensionRequest || (StartSchemaExtensionRequest = {}));
export var StartSchemaExtensionResult;
(function (StartSchemaExtensionResult) {
    /**
     * @internal
     */
    StartSchemaExtensionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSchemaExtensionResult || (StartSchemaExtensionResult = {}));
export var UnshareTarget;
(function (UnshareTarget) {
    /**
     * @internal
     */
    UnshareTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnshareTarget || (UnshareTarget = {}));
export var UnshareDirectoryRequest;
(function (UnshareDirectoryRequest) {
    /**
     * @internal
     */
    UnshareDirectoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnshareDirectoryRequest || (UnshareDirectoryRequest = {}));
export var UnshareDirectoryResult;
(function (UnshareDirectoryResult) {
    /**
     * @internal
     */
    UnshareDirectoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnshareDirectoryResult || (UnshareDirectoryResult = {}));
export var UpdateConditionalForwarderRequest;
(function (UpdateConditionalForwarderRequest) {
    /**
     * @internal
     */
    UpdateConditionalForwarderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConditionalForwarderRequest || (UpdateConditionalForwarderRequest = {}));
export var UpdateConditionalForwarderResult;
(function (UpdateConditionalForwarderResult) {
    /**
     * @internal
     */
    UpdateConditionalForwarderResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConditionalForwarderResult || (UpdateConditionalForwarderResult = {}));
export var DomainControllerLimitExceededException;
(function (DomainControllerLimitExceededException) {
    /**
     * @internal
     */
    DomainControllerLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainControllerLimitExceededException || (DomainControllerLimitExceededException = {}));
export var UpdateNumberOfDomainControllersRequest;
(function (UpdateNumberOfDomainControllersRequest) {
    /**
     * @internal
     */
    UpdateNumberOfDomainControllersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNumberOfDomainControllersRequest || (UpdateNumberOfDomainControllersRequest = {}));
export var UpdateNumberOfDomainControllersResult;
(function (UpdateNumberOfDomainControllersResult) {
    /**
     * @internal
     */
    UpdateNumberOfDomainControllersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNumberOfDomainControllersResult || (UpdateNumberOfDomainControllersResult = {}));
export var UpdateRadiusRequest;
(function (UpdateRadiusRequest) {
    /**
     * @internal
     */
    UpdateRadiusRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }))); };
})(UpdateRadiusRequest || (UpdateRadiusRequest = {}));
export var UpdateRadiusResult;
(function (UpdateRadiusResult) {
    /**
     * @internal
     */
    UpdateRadiusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRadiusResult || (UpdateRadiusResult = {}));
export var UpdateTrustRequest;
(function (UpdateTrustRequest) {
    /**
     * @internal
     */
    UpdateTrustRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrustRequest || (UpdateTrustRequest = {}));
export var UpdateTrustResult;
(function (UpdateTrustResult) {
    /**
     * @internal
     */
    UpdateTrustResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrustResult || (UpdateTrustResult = {}));
export var VerifyTrustRequest;
(function (VerifyTrustRequest) {
    /**
     * @internal
     */
    VerifyTrustRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerifyTrustRequest || (VerifyTrustRequest = {}));
export var VerifyTrustResult;
(function (VerifyTrustResult) {
    /**
     * @internal
     */
    VerifyTrustResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerifyTrustResult || (VerifyTrustResult = {}));
//# sourceMappingURL=models_0.js.map