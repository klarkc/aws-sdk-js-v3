"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryLimitExceededException = exports.ConnectDirectoryResult = exports.ConnectDirectoryRequest = exports.DirectorySize = exports.DirectoryConnectSettings = exports.ConditionalForwarder = exports.ReplicationScope = exports.Computer = exports.ClientAuthenticationType = exports.CertificateLimitExceededException = exports.CertificateInUseException = exports.CertificateInfo = exports.CertificateDoesNotExistException = exports.CertificateAlreadyExistsException = exports.Certificate = exports.CertificateType = exports.CertificateState = exports.ClientCertAuthSettings = exports.CancelSchemaExtensionResult = exports.CancelSchemaExtensionRequest = exports.AuthenticationFailedException = exports.Attribute = exports.TagLimitExceededException = exports.AddTagsToResourceResult = exports.AddTagsToResourceRequest = exports.Tag = exports.UnsupportedOperationException = exports.RegionLimitExceededException = exports.DirectoryDoesNotExistException = exports.DirectoryAlreadyInRegionException = exports.AddRegionResult = exports.AddRegionRequest = exports.DirectoryVpcSettings = exports.IpRouteLimitExceededException = exports.EntityAlreadyExistsException = exports.DirectoryUnavailableException = exports.AddIpRoutesResult = exports.AddIpRoutesRequest = exports.IpRoute = exports.AccessDeniedException = exports.ServiceException = exports.InvalidParameterException = exports.EntityDoesNotExistException = exports.DirectoryAlreadySharedException = exports.ClientException = exports.AcceptSharedDirectoryResult = exports.SharedDirectory = exports.ShareStatus = exports.ShareMethod = exports.AcceptSharedDirectoryRequest = void 0;
exports.DirectoryType = exports.DirectoryStage = exports.RegionsInfo = exports.OwnerDirectoryDescription = exports.DirectoryVpcSettingsDescription = exports.RadiusStatus = exports.RadiusSettings = exports.RadiusAuthenticationProtocol = exports.DirectoryConnectSettingsDescription = exports.DescribeDirectoriesRequest = exports.DescribeConditionalForwardersResult = exports.DescribeConditionalForwardersRequest = exports.DescribeCertificateResult = exports.DescribeCertificateRequest = exports.DeregisterEventTopicResult = exports.DeregisterEventTopicRequest = exports.DeregisterCertificateResult = exports.DeregisterCertificateRequest = exports.DeleteTrustResult = exports.DeleteTrustRequest = exports.DeleteSnapshotResult = exports.DeleteSnapshotRequest = exports.DeleteLogSubscriptionResult = exports.DeleteLogSubscriptionRequest = exports.DeleteDirectoryResult = exports.DeleteDirectoryRequest = exports.DeleteConditionalForwarderResult = exports.DeleteConditionalForwarderRequest = exports.CreateTrustResult = exports.CreateTrustRequest = exports.TrustType = exports.TrustDirection = exports.SelectiveAuth = exports.SnapshotLimitExceededException = exports.CreateSnapshotResult = exports.CreateSnapshotRequest = exports.CreateMicrosoftADResult = exports.CreateMicrosoftADRequest = exports.DirectoryEdition = exports.InsufficientPermissionsException = exports.CreateLogSubscriptionResult = exports.CreateLogSubscriptionRequest = exports.CreateDirectoryResult = exports.CreateDirectoryRequest = exports.CreateConditionalForwarderResult = exports.CreateConditionalForwarderRequest = exports.CreateComputerResult = exports.CreateComputerRequest = exports.CreateAliasResult = exports.CreateAliasRequest = void 0;
exports.EnableRadiusResult = exports.EnableRadiusRequest = exports.EnableLDAPSResult = exports.EnableLDAPSRequest = exports.NoAvailableCertificateException = exports.EnableClientAuthenticationResult = exports.EnableClientAuthenticationRequest = exports.DisableSsoResult = exports.DisableSsoRequest = exports.DisableRadiusResult = exports.DisableRadiusRequest = exports.InvalidLDAPSStatusException = exports.DisableLDAPSResult = exports.DisableLDAPSRequest = exports.InvalidClientAuthStatusException = exports.DisableClientAuthenticationResult = exports.DisableClientAuthenticationRequest = exports.DirectoryNotSharedException = exports.DirectoryLimits = exports.DescribeTrustsResult = exports.Trust = exports.TrustState = exports.DescribeTrustsRequest = exports.DescribeSnapshotsResult = exports.Snapshot = exports.SnapshotType = exports.SnapshotStatus = exports.DescribeSnapshotsRequest = exports.DescribeSharedDirectoriesResult = exports.DescribeSharedDirectoriesRequest = exports.DescribeRegionsResult = exports.RegionDescription = exports.RegionType = exports.DescribeRegionsRequest = exports.DescribeLDAPSSettingsResult = exports.LDAPSSettingInfo = exports.LDAPSStatus = exports.DescribeLDAPSSettingsRequest = exports.LDAPSType = exports.DescribeEventTopicsResult = exports.EventTopic = exports.TopicStatus = exports.DescribeEventTopicsRequest = exports.DescribeDomainControllersResult = exports.DomainController = exports.DomainControllerStatus = exports.DescribeDomainControllersRequest = exports.InvalidNextTokenException = exports.DescribeDirectoriesResult = exports.DirectoryDescription = void 0;
exports.StartSchemaExtensionResult = exports.StartSchemaExtensionRequest = exports.ShareLimitExceededException = exports.ShareDirectoryResult = exports.ShareDirectoryRequest = exports.ShareTarget = exports.TargetType = exports.OrganizationsException = exports.InvalidTargetException = exports.RestoreFromSnapshotResult = exports.RestoreFromSnapshotRequest = exports.UserDoesNotExistException = exports.ResetUserPasswordResult = exports.ResetUserPasswordRequest = exports.InvalidPasswordException = exports.RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceRequest = exports.RemoveRegionResult = exports.RemoveRegionRequest = exports.RemoveIpRoutesResult = exports.RemoveIpRoutesRequest = exports.RejectSharedDirectoryResult = exports.RejectSharedDirectoryRequest = exports.RegisterEventTopicResult = exports.RegisterEventTopicRequest = exports.RegisterCertificateResult = exports.RegisterCertificateRequest = exports.InvalidCertificateException = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListSchemaExtensionsResult = exports.SchemaExtensionInfo = exports.SchemaExtensionStatus = exports.ListSchemaExtensionsRequest = exports.ListLogSubscriptionsResult = exports.LogSubscription = exports.ListLogSubscriptionsRequest = exports.ListIpRoutesResult = exports.IpRouteInfo = exports.IpRouteStatusMsg = exports.ListIpRoutesRequest = exports.ListCertificatesResult = exports.ListCertificatesRequest = exports.GetSnapshotLimitsResult = exports.SnapshotLimits = exports.GetSnapshotLimitsRequest = exports.GetDirectoryLimitsResult = exports.GetDirectoryLimitsRequest = exports.EnableSsoResult = exports.EnableSsoRequest = void 0;
exports.VerifyTrustResult = exports.VerifyTrustRequest = exports.UpdateTrustResult = exports.UpdateTrustRequest = exports.UpdateRadiusResult = exports.UpdateRadiusRequest = exports.UpdateNumberOfDomainControllersResult = exports.UpdateNumberOfDomainControllersRequest = exports.DomainControllerLimitExceededException = exports.UpdateConditionalForwarderResult = exports.UpdateConditionalForwarderRequest = exports.UnshareDirectoryResult = exports.UnshareDirectoryRequest = exports.UnshareTarget = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptSharedDirectoryRequest;
(function (AcceptSharedDirectoryRequest) {
    /**
     * @internal
     */
    AcceptSharedDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptSharedDirectoryRequest = exports.AcceptSharedDirectoryRequest || (exports.AcceptSharedDirectoryRequest = {}));
var ShareMethod;
(function (ShareMethod) {
    ShareMethod["HANDSHAKE"] = "HANDSHAKE";
    ShareMethod["ORGANIZATIONS"] = "ORGANIZATIONS";
})(ShareMethod = exports.ShareMethod || (exports.ShareMethod = {}));
var ShareStatus;
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
})(ShareStatus = exports.ShareStatus || (exports.ShareStatus = {}));
var SharedDirectory;
(function (SharedDirectory) {
    /**
     * @internal
     */
    SharedDirectory.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ShareNotes && { ShareNotes: smithy_client_1.SENSITIVE_STRING }),
    });
})(SharedDirectory = exports.SharedDirectory || (exports.SharedDirectory = {}));
var AcceptSharedDirectoryResult;
(function (AcceptSharedDirectoryResult) {
    /**
     * @internal
     */
    AcceptSharedDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SharedDirectory && { SharedDirectory: SharedDirectory.filterSensitiveLog(obj.SharedDirectory) }),
    });
})(AcceptSharedDirectoryResult = exports.AcceptSharedDirectoryResult || (exports.AcceptSharedDirectoryResult = {}));
var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var DirectoryAlreadySharedException;
(function (DirectoryAlreadySharedException) {
    /**
     * @internal
     */
    DirectoryAlreadySharedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryAlreadySharedException = exports.DirectoryAlreadySharedException || (exports.DirectoryAlreadySharedException = {}));
var EntityDoesNotExistException;
(function (EntityDoesNotExistException) {
    /**
     * @internal
     */
    EntityDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityDoesNotExistException = exports.EntityDoesNotExistException || (exports.EntityDoesNotExistException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var IpRoute;
(function (IpRoute) {
    /**
     * @internal
     */
    IpRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpRoute = exports.IpRoute || (exports.IpRoute = {}));
var AddIpRoutesRequest;
(function (AddIpRoutesRequest) {
    /**
     * @internal
     */
    AddIpRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddIpRoutesRequest = exports.AddIpRoutesRequest || (exports.AddIpRoutesRequest = {}));
var AddIpRoutesResult;
(function (AddIpRoutesResult) {
    /**
     * @internal
     */
    AddIpRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddIpRoutesResult = exports.AddIpRoutesResult || (exports.AddIpRoutesResult = {}));
var DirectoryUnavailableException;
(function (DirectoryUnavailableException) {
    /**
     * @internal
     */
    DirectoryUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryUnavailableException = exports.DirectoryUnavailableException || (exports.DirectoryUnavailableException = {}));
var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityAlreadyExistsException = exports.EntityAlreadyExistsException || (exports.EntityAlreadyExistsException = {}));
var IpRouteLimitExceededException;
(function (IpRouteLimitExceededException) {
    /**
     * @internal
     */
    IpRouteLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpRouteLimitExceededException = exports.IpRouteLimitExceededException || (exports.IpRouteLimitExceededException = {}));
var DirectoryVpcSettings;
(function (DirectoryVpcSettings) {
    /**
     * @internal
     */
    DirectoryVpcSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryVpcSettings = exports.DirectoryVpcSettings || (exports.DirectoryVpcSettings = {}));
var AddRegionRequest;
(function (AddRegionRequest) {
    /**
     * @internal
     */
    AddRegionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRegionRequest = exports.AddRegionRequest || (exports.AddRegionRequest = {}));
var AddRegionResult;
(function (AddRegionResult) {
    /**
     * @internal
     */
    AddRegionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRegionResult = exports.AddRegionResult || (exports.AddRegionResult = {}));
var DirectoryAlreadyInRegionException;
(function (DirectoryAlreadyInRegionException) {
    /**
     * @internal
     */
    DirectoryAlreadyInRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryAlreadyInRegionException = exports.DirectoryAlreadyInRegionException || (exports.DirectoryAlreadyInRegionException = {}));
var DirectoryDoesNotExistException;
(function (DirectoryDoesNotExistException) {
    /**
     * @internal
     */
    DirectoryDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryDoesNotExistException = exports.DirectoryDoesNotExistException || (exports.DirectoryDoesNotExistException = {}));
var RegionLimitExceededException;
(function (RegionLimitExceededException) {
    /**
     * @internal
     */
    RegionLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionLimitExceededException = exports.RegionLimitExceededException || (exports.RegionLimitExceededException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    /**
     * @internal
     */
    AddTagsToResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    /**
     * @internal
     */
    AddTagsToResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceResult = exports.AddTagsToResourceResult || (exports.AddTagsToResourceResult = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AuthenticationFailedException;
(function (AuthenticationFailedException) {
    /**
     * @internal
     */
    AuthenticationFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthenticationFailedException = exports.AuthenticationFailedException || (exports.AuthenticationFailedException = {}));
var CancelSchemaExtensionRequest;
(function (CancelSchemaExtensionRequest) {
    /**
     * @internal
     */
    CancelSchemaExtensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSchemaExtensionRequest = exports.CancelSchemaExtensionRequest || (exports.CancelSchemaExtensionRequest = {}));
var CancelSchemaExtensionResult;
(function (CancelSchemaExtensionResult) {
    /**
     * @internal
     */
    CancelSchemaExtensionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSchemaExtensionResult = exports.CancelSchemaExtensionResult || (exports.CancelSchemaExtensionResult = {}));
var ClientCertAuthSettings;
(function (ClientCertAuthSettings) {
    /**
     * @internal
     */
    ClientCertAuthSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientCertAuthSettings = exports.ClientCertAuthSettings || (exports.ClientCertAuthSettings = {}));
var CertificateState;
(function (CertificateState) {
    CertificateState["DEREGISTERED"] = "Deregistered";
    CertificateState["DEREGISTERING"] = "Deregistering";
    CertificateState["DEREGISTER_FAILED"] = "DeregisterFailed";
    CertificateState["REGISTERED"] = "Registered";
    CertificateState["REGISTERING"] = "Registering";
    CertificateState["REGISTER_FAILED"] = "RegisterFailed";
})(CertificateState = exports.CertificateState || (exports.CertificateState = {}));
var CertificateType;
(function (CertificateType) {
    CertificateType["CLIENT_CERT_AUTH"] = "ClientCertAuth";
    CertificateType["CLIENT_LDAPS"] = "ClientLDAPS";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var CertificateAlreadyExistsException;
(function (CertificateAlreadyExistsException) {
    /**
     * @internal
     */
    CertificateAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateAlreadyExistsException = exports.CertificateAlreadyExistsException || (exports.CertificateAlreadyExistsException = {}));
var CertificateDoesNotExistException;
(function (CertificateDoesNotExistException) {
    /**
     * @internal
     */
    CertificateDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateDoesNotExistException = exports.CertificateDoesNotExistException || (exports.CertificateDoesNotExistException = {}));
var CertificateInfo;
(function (CertificateInfo) {
    /**
     * @internal
     */
    CertificateInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateInfo = exports.CertificateInfo || (exports.CertificateInfo = {}));
var CertificateInUseException;
(function (CertificateInUseException) {
    /**
     * @internal
     */
    CertificateInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateInUseException = exports.CertificateInUseException || (exports.CertificateInUseException = {}));
var CertificateLimitExceededException;
(function (CertificateLimitExceededException) {
    /**
     * @internal
     */
    CertificateLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateLimitExceededException = exports.CertificateLimitExceededException || (exports.CertificateLimitExceededException = {}));
var ClientAuthenticationType;
(function (ClientAuthenticationType) {
    ClientAuthenticationType["SMART_CARD"] = "SmartCard";
})(ClientAuthenticationType = exports.ClientAuthenticationType || (exports.ClientAuthenticationType = {}));
var Computer;
(function (Computer) {
    /**
     * @internal
     */
    Computer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Computer = exports.Computer || (exports.Computer = {}));
var ReplicationScope;
(function (ReplicationScope) {
    ReplicationScope["Domain"] = "Domain";
})(ReplicationScope = exports.ReplicationScope || (exports.ReplicationScope = {}));
var ConditionalForwarder;
(function (ConditionalForwarder) {
    /**
     * @internal
     */
    ConditionalForwarder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionalForwarder = exports.ConditionalForwarder || (exports.ConditionalForwarder = {}));
var DirectoryConnectSettings;
(function (DirectoryConnectSettings) {
    /**
     * @internal
     */
    DirectoryConnectSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryConnectSettings = exports.DirectoryConnectSettings || (exports.DirectoryConnectSettings = {}));
var DirectorySize;
(function (DirectorySize) {
    DirectorySize["LARGE"] = "Large";
    DirectorySize["SMALL"] = "Small";
})(DirectorySize = exports.DirectorySize || (exports.DirectorySize = {}));
var ConnectDirectoryRequest;
(function (ConnectDirectoryRequest) {
    /**
     * @internal
     */
    ConnectDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(ConnectDirectoryRequest = exports.ConnectDirectoryRequest || (exports.ConnectDirectoryRequest = {}));
var ConnectDirectoryResult;
(function (ConnectDirectoryResult) {
    /**
     * @internal
     */
    ConnectDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectDirectoryResult = exports.ConnectDirectoryResult || (exports.ConnectDirectoryResult = {}));
var DirectoryLimitExceededException;
(function (DirectoryLimitExceededException) {
    /**
     * @internal
     */
    DirectoryLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryLimitExceededException = exports.DirectoryLimitExceededException || (exports.DirectoryLimitExceededException = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var CreateAliasResult;
(function (CreateAliasResult) {
    /**
     * @internal
     */
    CreateAliasResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasResult = exports.CreateAliasResult || (exports.CreateAliasResult = {}));
var CreateComputerRequest;
(function (CreateComputerRequest) {
    /**
     * @internal
     */
    CreateComputerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateComputerRequest = exports.CreateComputerRequest || (exports.CreateComputerRequest = {}));
var CreateComputerResult;
(function (CreateComputerResult) {
    /**
     * @internal
     */
    CreateComputerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateComputerResult = exports.CreateComputerResult || (exports.CreateComputerResult = {}));
var CreateConditionalForwarderRequest;
(function (CreateConditionalForwarderRequest) {
    /**
     * @internal
     */
    CreateConditionalForwarderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConditionalForwarderRequest = exports.CreateConditionalForwarderRequest || (exports.CreateConditionalForwarderRequest = {}));
var CreateConditionalForwarderResult;
(function (CreateConditionalForwarderResult) {
    /**
     * @internal
     */
    CreateConditionalForwarderResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConditionalForwarderResult = exports.CreateConditionalForwarderResult || (exports.CreateConditionalForwarderResult = {}));
var CreateDirectoryRequest;
(function (CreateDirectoryRequest) {
    /**
     * @internal
     */
    CreateDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateDirectoryRequest = exports.CreateDirectoryRequest || (exports.CreateDirectoryRequest = {}));
var CreateDirectoryResult;
(function (CreateDirectoryResult) {
    /**
     * @internal
     */
    CreateDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDirectoryResult = exports.CreateDirectoryResult || (exports.CreateDirectoryResult = {}));
var CreateLogSubscriptionRequest;
(function (CreateLogSubscriptionRequest) {
    /**
     * @internal
     */
    CreateLogSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLogSubscriptionRequest = exports.CreateLogSubscriptionRequest || (exports.CreateLogSubscriptionRequest = {}));
var CreateLogSubscriptionResult;
(function (CreateLogSubscriptionResult) {
    /**
     * @internal
     */
    CreateLogSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLogSubscriptionResult = exports.CreateLogSubscriptionResult || (exports.CreateLogSubscriptionResult = {}));
var InsufficientPermissionsException;
(function (InsufficientPermissionsException) {
    /**
     * @internal
     */
    InsufficientPermissionsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientPermissionsException = exports.InsufficientPermissionsException || (exports.InsufficientPermissionsException = {}));
var DirectoryEdition;
(function (DirectoryEdition) {
    DirectoryEdition["ENTERPRISE"] = "Enterprise";
    DirectoryEdition["STANDARD"] = "Standard";
})(DirectoryEdition = exports.DirectoryEdition || (exports.DirectoryEdition = {}));
var CreateMicrosoftADRequest;
(function (CreateMicrosoftADRequest) {
    /**
     * @internal
     */
    CreateMicrosoftADRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateMicrosoftADRequest = exports.CreateMicrosoftADRequest || (exports.CreateMicrosoftADRequest = {}));
var CreateMicrosoftADResult;
(function (CreateMicrosoftADResult) {
    /**
     * @internal
     */
    CreateMicrosoftADResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMicrosoftADResult = exports.CreateMicrosoftADResult || (exports.CreateMicrosoftADResult = {}));
var CreateSnapshotRequest;
(function (CreateSnapshotRequest) {
    /**
     * @internal
     */
    CreateSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotRequest = exports.CreateSnapshotRequest || (exports.CreateSnapshotRequest = {}));
var CreateSnapshotResult;
(function (CreateSnapshotResult) {
    /**
     * @internal
     */
    CreateSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotResult = exports.CreateSnapshotResult || (exports.CreateSnapshotResult = {}));
var SnapshotLimitExceededException;
(function (SnapshotLimitExceededException) {
    /**
     * @internal
     */
    SnapshotLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotLimitExceededException = exports.SnapshotLimitExceededException || (exports.SnapshotLimitExceededException = {}));
var SelectiveAuth;
(function (SelectiveAuth) {
    SelectiveAuth["DISABLED"] = "Disabled";
    SelectiveAuth["ENABLED"] = "Enabled";
})(SelectiveAuth = exports.SelectiveAuth || (exports.SelectiveAuth = {}));
var TrustDirection;
(function (TrustDirection) {
    TrustDirection["ONE_WAY_INCOMING"] = "One-Way: Incoming";
    TrustDirection["ONE_WAY_OUTGOING"] = "One-Way: Outgoing";
    TrustDirection["TWO_WAY"] = "Two-Way";
})(TrustDirection = exports.TrustDirection || (exports.TrustDirection = {}));
var TrustType;
(function (TrustType) {
    TrustType["EXTERNAL"] = "External";
    TrustType["FOREST"] = "Forest";
})(TrustType = exports.TrustType || (exports.TrustType = {}));
var CreateTrustRequest;
(function (CreateTrustRequest) {
    /**
     * @internal
     */
    CreateTrustRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TrustPassword && { TrustPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateTrustRequest = exports.CreateTrustRequest || (exports.CreateTrustRequest = {}));
var CreateTrustResult;
(function (CreateTrustResult) {
    /**
     * @internal
     */
    CreateTrustResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrustResult = exports.CreateTrustResult || (exports.CreateTrustResult = {}));
var DeleteConditionalForwarderRequest;
(function (DeleteConditionalForwarderRequest) {
    /**
     * @internal
     */
    DeleteConditionalForwarderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConditionalForwarderRequest = exports.DeleteConditionalForwarderRequest || (exports.DeleteConditionalForwarderRequest = {}));
var DeleteConditionalForwarderResult;
(function (DeleteConditionalForwarderResult) {
    /**
     * @internal
     */
    DeleteConditionalForwarderResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConditionalForwarderResult = exports.DeleteConditionalForwarderResult || (exports.DeleteConditionalForwarderResult = {}));
var DeleteDirectoryRequest;
(function (DeleteDirectoryRequest) {
    /**
     * @internal
     */
    DeleteDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectoryRequest = exports.DeleteDirectoryRequest || (exports.DeleteDirectoryRequest = {}));
var DeleteDirectoryResult;
(function (DeleteDirectoryResult) {
    /**
     * @internal
     */
    DeleteDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDirectoryResult = exports.DeleteDirectoryResult || (exports.DeleteDirectoryResult = {}));
var DeleteLogSubscriptionRequest;
(function (DeleteLogSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteLogSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLogSubscriptionRequest = exports.DeleteLogSubscriptionRequest || (exports.DeleteLogSubscriptionRequest = {}));
var DeleteLogSubscriptionResult;
(function (DeleteLogSubscriptionResult) {
    /**
     * @internal
     */
    DeleteLogSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLogSubscriptionResult = exports.DeleteLogSubscriptionResult || (exports.DeleteLogSubscriptionResult = {}));
var DeleteSnapshotRequest;
(function (DeleteSnapshotRequest) {
    /**
     * @internal
     */
    DeleteSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotRequest = exports.DeleteSnapshotRequest || (exports.DeleteSnapshotRequest = {}));
var DeleteSnapshotResult;
(function (DeleteSnapshotResult) {
    /**
     * @internal
     */
    DeleteSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotResult = exports.DeleteSnapshotResult || (exports.DeleteSnapshotResult = {}));
var DeleteTrustRequest;
(function (DeleteTrustRequest) {
    /**
     * @internal
     */
    DeleteTrustRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrustRequest = exports.DeleteTrustRequest || (exports.DeleteTrustRequest = {}));
var DeleteTrustResult;
(function (DeleteTrustResult) {
    /**
     * @internal
     */
    DeleteTrustResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrustResult = exports.DeleteTrustResult || (exports.DeleteTrustResult = {}));
var DeregisterCertificateRequest;
(function (DeregisterCertificateRequest) {
    /**
     * @internal
     */
    DeregisterCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterCertificateRequest = exports.DeregisterCertificateRequest || (exports.DeregisterCertificateRequest = {}));
var DeregisterCertificateResult;
(function (DeregisterCertificateResult) {
    /**
     * @internal
     */
    DeregisterCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterCertificateResult = exports.DeregisterCertificateResult || (exports.DeregisterCertificateResult = {}));
var DeregisterEventTopicRequest;
(function (DeregisterEventTopicRequest) {
    /**
     * @internal
     */
    DeregisterEventTopicRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterEventTopicRequest = exports.DeregisterEventTopicRequest || (exports.DeregisterEventTopicRequest = {}));
var DeregisterEventTopicResult;
(function (DeregisterEventTopicResult) {
    /**
     * @internal
     */
    DeregisterEventTopicResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterEventTopicResult = exports.DeregisterEventTopicResult || (exports.DeregisterEventTopicResult = {}));
var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
    /**
     * @internal
     */
    DescribeCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificateRequest = exports.DescribeCertificateRequest || (exports.DescribeCertificateRequest = {}));
var DescribeCertificateResult;
(function (DescribeCertificateResult) {
    /**
     * @internal
     */
    DescribeCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificateResult = exports.DescribeCertificateResult || (exports.DescribeCertificateResult = {}));
var DescribeConditionalForwardersRequest;
(function (DescribeConditionalForwardersRequest) {
    /**
     * @internal
     */
    DescribeConditionalForwardersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConditionalForwardersRequest = exports.DescribeConditionalForwardersRequest || (exports.DescribeConditionalForwardersRequest = {}));
var DescribeConditionalForwardersResult;
(function (DescribeConditionalForwardersResult) {
    /**
     * @internal
     */
    DescribeConditionalForwardersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConditionalForwardersResult = exports.DescribeConditionalForwardersResult || (exports.DescribeConditionalForwardersResult = {}));
var DescribeDirectoriesRequest;
(function (DescribeDirectoriesRequest) {
    /**
     * @internal
     */
    DescribeDirectoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDirectoriesRequest = exports.DescribeDirectoriesRequest || (exports.DescribeDirectoriesRequest = {}));
var DirectoryConnectSettingsDescription;
(function (DirectoryConnectSettingsDescription) {
    /**
     * @internal
     */
    DirectoryConnectSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryConnectSettingsDescription = exports.DirectoryConnectSettingsDescription || (exports.DirectoryConnectSettingsDescription = {}));
var RadiusAuthenticationProtocol;
(function (RadiusAuthenticationProtocol) {
    RadiusAuthenticationProtocol["CHAP"] = "CHAP";
    RadiusAuthenticationProtocol["MSCHAPV1"] = "MS-CHAPv1";
    RadiusAuthenticationProtocol["MSCHAPV2"] = "MS-CHAPv2";
    RadiusAuthenticationProtocol["PAP"] = "PAP";
})(RadiusAuthenticationProtocol = exports.RadiusAuthenticationProtocol || (exports.RadiusAuthenticationProtocol = {}));
var RadiusSettings;
(function (RadiusSettings) {
    /**
     * @internal
     */
    RadiusSettings.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SharedSecret && { SharedSecret: smithy_client_1.SENSITIVE_STRING }),
    });
})(RadiusSettings = exports.RadiusSettings || (exports.RadiusSettings = {}));
var RadiusStatus;
(function (RadiusStatus) {
    RadiusStatus["COMPLETED"] = "Completed";
    RadiusStatus["CREATING"] = "Creating";
    RadiusStatus["FAILED"] = "Failed";
})(RadiusStatus = exports.RadiusStatus || (exports.RadiusStatus = {}));
var DirectoryVpcSettingsDescription;
(function (DirectoryVpcSettingsDescription) {
    /**
     * @internal
     */
    DirectoryVpcSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryVpcSettingsDescription = exports.DirectoryVpcSettingsDescription || (exports.DirectoryVpcSettingsDescription = {}));
var OwnerDirectoryDescription;
(function (OwnerDirectoryDescription) {
    /**
     * @internal
     */
    OwnerDirectoryDescription.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
    });
})(OwnerDirectoryDescription = exports.OwnerDirectoryDescription || (exports.OwnerDirectoryDescription = {}));
var RegionsInfo;
(function (RegionsInfo) {
    /**
     * @internal
     */
    RegionsInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionsInfo = exports.RegionsInfo || (exports.RegionsInfo = {}));
var DirectoryStage;
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
})(DirectoryStage = exports.DirectoryStage || (exports.DirectoryStage = {}));
var DirectoryType;
(function (DirectoryType) {
    DirectoryType["AD_CONNECTOR"] = "ADConnector";
    DirectoryType["MICROSOFT_AD"] = "MicrosoftAD";
    DirectoryType["SHARED_MICROSOFT_AD"] = "SharedMicrosoftAD";
    DirectoryType["SIMPLE_AD"] = "SimpleAD";
})(DirectoryType = exports.DirectoryType || (exports.DirectoryType = {}));
var DirectoryDescription;
(function (DirectoryDescription) {
    /**
     * @internal
     */
    DirectoryDescription.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ShareNotes && { ShareNotes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
        ...(obj.OwnerDirectoryDescription && {
            OwnerDirectoryDescription: OwnerDirectoryDescription.filterSensitiveLog(obj.OwnerDirectoryDescription),
        }),
    });
})(DirectoryDescription = exports.DirectoryDescription || (exports.DirectoryDescription = {}));
var DescribeDirectoriesResult;
(function (DescribeDirectoriesResult) {
    /**
     * @internal
     */
    DescribeDirectoriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DirectoryDescriptions && {
            DirectoryDescriptions: obj.DirectoryDescriptions.map((item) => DirectoryDescription.filterSensitiveLog(item)),
        }),
    });
})(DescribeDirectoriesResult = exports.DescribeDirectoriesResult || (exports.DescribeDirectoriesResult = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var DescribeDomainControllersRequest;
(function (DescribeDomainControllersRequest) {
    /**
     * @internal
     */
    DescribeDomainControllersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainControllersRequest = exports.DescribeDomainControllersRequest || (exports.DescribeDomainControllersRequest = {}));
var DomainControllerStatus;
(function (DomainControllerStatus) {
    DomainControllerStatus["ACTIVE"] = "Active";
    DomainControllerStatus["CREATING"] = "Creating";
    DomainControllerStatus["DELETED"] = "Deleted";
    DomainControllerStatus["DELETING"] = "Deleting";
    DomainControllerStatus["FAILED"] = "Failed";
    DomainControllerStatus["IMPAIRED"] = "Impaired";
    DomainControllerStatus["RESTORING"] = "Restoring";
})(DomainControllerStatus = exports.DomainControllerStatus || (exports.DomainControllerStatus = {}));
var DomainController;
(function (DomainController) {
    /**
     * @internal
     */
    DomainController.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainController = exports.DomainController || (exports.DomainController = {}));
var DescribeDomainControllersResult;
(function (DescribeDomainControllersResult) {
    /**
     * @internal
     */
    DescribeDomainControllersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainControllersResult = exports.DescribeDomainControllersResult || (exports.DescribeDomainControllersResult = {}));
var DescribeEventTopicsRequest;
(function (DescribeEventTopicsRequest) {
    /**
     * @internal
     */
    DescribeEventTopicsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTopicsRequest = exports.DescribeEventTopicsRequest || (exports.DescribeEventTopicsRequest = {}));
var TopicStatus;
(function (TopicStatus) {
    TopicStatus["DELETED"] = "Deleted";
    TopicStatus["FAILED"] = "Failed";
    TopicStatus["REGISTERED"] = "Registered";
    TopicStatus["TOPIC_NOT_FOUND"] = "Topic not found";
})(TopicStatus = exports.TopicStatus || (exports.TopicStatus = {}));
var EventTopic;
(function (EventTopic) {
    /**
     * @internal
     */
    EventTopic.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTopic = exports.EventTopic || (exports.EventTopic = {}));
var DescribeEventTopicsResult;
(function (DescribeEventTopicsResult) {
    /**
     * @internal
     */
    DescribeEventTopicsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTopicsResult = exports.DescribeEventTopicsResult || (exports.DescribeEventTopicsResult = {}));
var LDAPSType;
(function (LDAPSType) {
    LDAPSType["CLIENT"] = "Client";
})(LDAPSType = exports.LDAPSType || (exports.LDAPSType = {}));
var DescribeLDAPSSettingsRequest;
(function (DescribeLDAPSSettingsRequest) {
    /**
     * @internal
     */
    DescribeLDAPSSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLDAPSSettingsRequest = exports.DescribeLDAPSSettingsRequest || (exports.DescribeLDAPSSettingsRequest = {}));
var LDAPSStatus;
(function (LDAPSStatus) {
    LDAPSStatus["DISABLED"] = "Disabled";
    LDAPSStatus["ENABLED"] = "Enabled";
    LDAPSStatus["ENABLE_FAILED"] = "EnableFailed";
    LDAPSStatus["ENABLING"] = "Enabling";
})(LDAPSStatus = exports.LDAPSStatus || (exports.LDAPSStatus = {}));
var LDAPSSettingInfo;
(function (LDAPSSettingInfo) {
    /**
     * @internal
     */
    LDAPSSettingInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LDAPSSettingInfo = exports.LDAPSSettingInfo || (exports.LDAPSSettingInfo = {}));
var DescribeLDAPSSettingsResult;
(function (DescribeLDAPSSettingsResult) {
    /**
     * @internal
     */
    DescribeLDAPSSettingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLDAPSSettingsResult = exports.DescribeLDAPSSettingsResult || (exports.DescribeLDAPSSettingsResult = {}));
var DescribeRegionsRequest;
(function (DescribeRegionsRequest) {
    /**
     * @internal
     */
    DescribeRegionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegionsRequest = exports.DescribeRegionsRequest || (exports.DescribeRegionsRequest = {}));
var RegionType;
(function (RegionType) {
    RegionType["ADDITIONAL"] = "Additional";
    RegionType["PRIMARY"] = "Primary";
})(RegionType = exports.RegionType || (exports.RegionType = {}));
var RegionDescription;
(function (RegionDescription) {
    /**
     * @internal
     */
    RegionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionDescription = exports.RegionDescription || (exports.RegionDescription = {}));
var DescribeRegionsResult;
(function (DescribeRegionsResult) {
    /**
     * @internal
     */
    DescribeRegionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegionsResult = exports.DescribeRegionsResult || (exports.DescribeRegionsResult = {}));
var DescribeSharedDirectoriesRequest;
(function (DescribeSharedDirectoriesRequest) {
    /**
     * @internal
     */
    DescribeSharedDirectoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSharedDirectoriesRequest = exports.DescribeSharedDirectoriesRequest || (exports.DescribeSharedDirectoriesRequest = {}));
var DescribeSharedDirectoriesResult;
(function (DescribeSharedDirectoriesResult) {
    /**
     * @internal
     */
    DescribeSharedDirectoriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SharedDirectories && {
            SharedDirectories: obj.SharedDirectories.map((item) => SharedDirectory.filterSensitiveLog(item)),
        }),
    });
})(DescribeSharedDirectoriesResult = exports.DescribeSharedDirectoriesResult || (exports.DescribeSharedDirectoriesResult = {}));
var DescribeSnapshotsRequest;
(function (DescribeSnapshotsRequest) {
    /**
     * @internal
     */
    DescribeSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsRequest = exports.DescribeSnapshotsRequest || (exports.DescribeSnapshotsRequest = {}));
var SnapshotStatus;
(function (SnapshotStatus) {
    SnapshotStatus["COMPLETED"] = "Completed";
    SnapshotStatus["CREATING"] = "Creating";
    SnapshotStatus["FAILED"] = "Failed";
})(SnapshotStatus = exports.SnapshotStatus || (exports.SnapshotStatus = {}));
var SnapshotType;
(function (SnapshotType) {
    SnapshotType["AUTO"] = "Auto";
    SnapshotType["MANUAL"] = "Manual";
})(SnapshotType = exports.SnapshotType || (exports.SnapshotType = {}));
var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var DescribeSnapshotsResult;
(function (DescribeSnapshotsResult) {
    /**
     * @internal
     */
    DescribeSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsResult = exports.DescribeSnapshotsResult || (exports.DescribeSnapshotsResult = {}));
var DescribeTrustsRequest;
(function (DescribeTrustsRequest) {
    /**
     * @internal
     */
    DescribeTrustsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustsRequest = exports.DescribeTrustsRequest || (exports.DescribeTrustsRequest = {}));
var TrustState;
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
})(TrustState = exports.TrustState || (exports.TrustState = {}));
var Trust;
(function (Trust) {
    /**
     * @internal
     */
    Trust.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trust = exports.Trust || (exports.Trust = {}));
var DescribeTrustsResult;
(function (DescribeTrustsResult) {
    /**
     * @internal
     */
    DescribeTrustsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustsResult = exports.DescribeTrustsResult || (exports.DescribeTrustsResult = {}));
var DirectoryLimits;
(function (DirectoryLimits) {
    /**
     * @internal
     */
    DirectoryLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryLimits = exports.DirectoryLimits || (exports.DirectoryLimits = {}));
var DirectoryNotSharedException;
(function (DirectoryNotSharedException) {
    /**
     * @internal
     */
    DirectoryNotSharedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryNotSharedException = exports.DirectoryNotSharedException || (exports.DirectoryNotSharedException = {}));
var DisableClientAuthenticationRequest;
(function (DisableClientAuthenticationRequest) {
    /**
     * @internal
     */
    DisableClientAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableClientAuthenticationRequest = exports.DisableClientAuthenticationRequest || (exports.DisableClientAuthenticationRequest = {}));
var DisableClientAuthenticationResult;
(function (DisableClientAuthenticationResult) {
    /**
     * @internal
     */
    DisableClientAuthenticationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableClientAuthenticationResult = exports.DisableClientAuthenticationResult || (exports.DisableClientAuthenticationResult = {}));
var InvalidClientAuthStatusException;
(function (InvalidClientAuthStatusException) {
    /**
     * @internal
     */
    InvalidClientAuthStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClientAuthStatusException = exports.InvalidClientAuthStatusException || (exports.InvalidClientAuthStatusException = {}));
var DisableLDAPSRequest;
(function (DisableLDAPSRequest) {
    /**
     * @internal
     */
    DisableLDAPSRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableLDAPSRequest = exports.DisableLDAPSRequest || (exports.DisableLDAPSRequest = {}));
var DisableLDAPSResult;
(function (DisableLDAPSResult) {
    /**
     * @internal
     */
    DisableLDAPSResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableLDAPSResult = exports.DisableLDAPSResult || (exports.DisableLDAPSResult = {}));
var InvalidLDAPSStatusException;
(function (InvalidLDAPSStatusException) {
    /**
     * @internal
     */
    InvalidLDAPSStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLDAPSStatusException = exports.InvalidLDAPSStatusException || (exports.InvalidLDAPSStatusException = {}));
var DisableRadiusRequest;
(function (DisableRadiusRequest) {
    /**
     * @internal
     */
    DisableRadiusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableRadiusRequest = exports.DisableRadiusRequest || (exports.DisableRadiusRequest = {}));
var DisableRadiusResult;
(function (DisableRadiusResult) {
    /**
     * @internal
     */
    DisableRadiusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableRadiusResult = exports.DisableRadiusResult || (exports.DisableRadiusResult = {}));
var DisableSsoRequest;
(function (DisableSsoRequest) {
    /**
     * @internal
     */
    DisableSsoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(DisableSsoRequest = exports.DisableSsoRequest || (exports.DisableSsoRequest = {}));
var DisableSsoResult;
(function (DisableSsoResult) {
    /**
     * @internal
     */
    DisableSsoResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSsoResult = exports.DisableSsoResult || (exports.DisableSsoResult = {}));
var EnableClientAuthenticationRequest;
(function (EnableClientAuthenticationRequest) {
    /**
     * @internal
     */
    EnableClientAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableClientAuthenticationRequest = exports.EnableClientAuthenticationRequest || (exports.EnableClientAuthenticationRequest = {}));
var EnableClientAuthenticationResult;
(function (EnableClientAuthenticationResult) {
    /**
     * @internal
     */
    EnableClientAuthenticationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableClientAuthenticationResult = exports.EnableClientAuthenticationResult || (exports.EnableClientAuthenticationResult = {}));
var NoAvailableCertificateException;
(function (NoAvailableCertificateException) {
    /**
     * @internal
     */
    NoAvailableCertificateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAvailableCertificateException = exports.NoAvailableCertificateException || (exports.NoAvailableCertificateException = {}));
var EnableLDAPSRequest;
(function (EnableLDAPSRequest) {
    /**
     * @internal
     */
    EnableLDAPSRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableLDAPSRequest = exports.EnableLDAPSRequest || (exports.EnableLDAPSRequest = {}));
var EnableLDAPSResult;
(function (EnableLDAPSResult) {
    /**
     * @internal
     */
    EnableLDAPSResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableLDAPSResult = exports.EnableLDAPSResult || (exports.EnableLDAPSResult = {}));
var EnableRadiusRequest;
(function (EnableRadiusRequest) {
    /**
     * @internal
     */
    EnableRadiusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
    });
})(EnableRadiusRequest = exports.EnableRadiusRequest || (exports.EnableRadiusRequest = {}));
var EnableRadiusResult;
(function (EnableRadiusResult) {
    /**
     * @internal
     */
    EnableRadiusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableRadiusResult = exports.EnableRadiusResult || (exports.EnableRadiusResult = {}));
var EnableSsoRequest;
(function (EnableSsoRequest) {
    /**
     * @internal
     */
    EnableSsoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(EnableSsoRequest = exports.EnableSsoRequest || (exports.EnableSsoRequest = {}));
var EnableSsoResult;
(function (EnableSsoResult) {
    /**
     * @internal
     */
    EnableSsoResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSsoResult = exports.EnableSsoResult || (exports.EnableSsoResult = {}));
var GetDirectoryLimitsRequest;
(function (GetDirectoryLimitsRequest) {
    /**
     * @internal
     */
    GetDirectoryLimitsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDirectoryLimitsRequest = exports.GetDirectoryLimitsRequest || (exports.GetDirectoryLimitsRequest = {}));
var GetDirectoryLimitsResult;
(function (GetDirectoryLimitsResult) {
    /**
     * @internal
     */
    GetDirectoryLimitsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDirectoryLimitsResult = exports.GetDirectoryLimitsResult || (exports.GetDirectoryLimitsResult = {}));
var GetSnapshotLimitsRequest;
(function (GetSnapshotLimitsRequest) {
    /**
     * @internal
     */
    GetSnapshotLimitsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSnapshotLimitsRequest = exports.GetSnapshotLimitsRequest || (exports.GetSnapshotLimitsRequest = {}));
var SnapshotLimits;
(function (SnapshotLimits) {
    /**
     * @internal
     */
    SnapshotLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotLimits = exports.SnapshotLimits || (exports.SnapshotLimits = {}));
var GetSnapshotLimitsResult;
(function (GetSnapshotLimitsResult) {
    /**
     * @internal
     */
    GetSnapshotLimitsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSnapshotLimitsResult = exports.GetSnapshotLimitsResult || (exports.GetSnapshotLimitsResult = {}));
var ListCertificatesRequest;
(function (ListCertificatesRequest) {
    /**
     * @internal
     */
    ListCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesRequest = exports.ListCertificatesRequest || (exports.ListCertificatesRequest = {}));
var ListCertificatesResult;
(function (ListCertificatesResult) {
    /**
     * @internal
     */
    ListCertificatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesResult = exports.ListCertificatesResult || (exports.ListCertificatesResult = {}));
var ListIpRoutesRequest;
(function (ListIpRoutesRequest) {
    /**
     * @internal
     */
    ListIpRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIpRoutesRequest = exports.ListIpRoutesRequest || (exports.ListIpRoutesRequest = {}));
var IpRouteStatusMsg;
(function (IpRouteStatusMsg) {
    IpRouteStatusMsg["ADDED"] = "Added";
    IpRouteStatusMsg["ADDING"] = "Adding";
    IpRouteStatusMsg["ADD_FAILED"] = "AddFailed";
    IpRouteStatusMsg["REMOVED"] = "Removed";
    IpRouteStatusMsg["REMOVE_FAILED"] = "RemoveFailed";
    IpRouteStatusMsg["REMOVING"] = "Removing";
})(IpRouteStatusMsg = exports.IpRouteStatusMsg || (exports.IpRouteStatusMsg = {}));
var IpRouteInfo;
(function (IpRouteInfo) {
    /**
     * @internal
     */
    IpRouteInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpRouteInfo = exports.IpRouteInfo || (exports.IpRouteInfo = {}));
var ListIpRoutesResult;
(function (ListIpRoutesResult) {
    /**
     * @internal
     */
    ListIpRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIpRoutesResult = exports.ListIpRoutesResult || (exports.ListIpRoutesResult = {}));
var ListLogSubscriptionsRequest;
(function (ListLogSubscriptionsRequest) {
    /**
     * @internal
     */
    ListLogSubscriptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLogSubscriptionsRequest = exports.ListLogSubscriptionsRequest || (exports.ListLogSubscriptionsRequest = {}));
var LogSubscription;
(function (LogSubscription) {
    /**
     * @internal
     */
    LogSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogSubscription = exports.LogSubscription || (exports.LogSubscription = {}));
var ListLogSubscriptionsResult;
(function (ListLogSubscriptionsResult) {
    /**
     * @internal
     */
    ListLogSubscriptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLogSubscriptionsResult = exports.ListLogSubscriptionsResult || (exports.ListLogSubscriptionsResult = {}));
var ListSchemaExtensionsRequest;
(function (ListSchemaExtensionsRequest) {
    /**
     * @internal
     */
    ListSchemaExtensionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaExtensionsRequest = exports.ListSchemaExtensionsRequest || (exports.ListSchemaExtensionsRequest = {}));
var SchemaExtensionStatus;
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
})(SchemaExtensionStatus = exports.SchemaExtensionStatus || (exports.SchemaExtensionStatus = {}));
var SchemaExtensionInfo;
(function (SchemaExtensionInfo) {
    /**
     * @internal
     */
    SchemaExtensionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaExtensionInfo = exports.SchemaExtensionInfo || (exports.SchemaExtensionInfo = {}));
var ListSchemaExtensionsResult;
(function (ListSchemaExtensionsResult) {
    /**
     * @internal
     */
    ListSchemaExtensionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaExtensionsResult = exports.ListSchemaExtensionsResult || (exports.ListSchemaExtensionsResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var InvalidCertificateException;
(function (InvalidCertificateException) {
    /**
     * @internal
     */
    InvalidCertificateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCertificateException = exports.InvalidCertificateException || (exports.InvalidCertificateException = {}));
var RegisterCertificateRequest;
(function (RegisterCertificateRequest) {
    /**
     * @internal
     */
    RegisterCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateRequest = exports.RegisterCertificateRequest || (exports.RegisterCertificateRequest = {}));
var RegisterCertificateResult;
(function (RegisterCertificateResult) {
    /**
     * @internal
     */
    RegisterCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateResult = exports.RegisterCertificateResult || (exports.RegisterCertificateResult = {}));
var RegisterEventTopicRequest;
(function (RegisterEventTopicRequest) {
    /**
     * @internal
     */
    RegisterEventTopicRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterEventTopicRequest = exports.RegisterEventTopicRequest || (exports.RegisterEventTopicRequest = {}));
var RegisterEventTopicResult;
(function (RegisterEventTopicResult) {
    /**
     * @internal
     */
    RegisterEventTopicResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterEventTopicResult = exports.RegisterEventTopicResult || (exports.RegisterEventTopicResult = {}));
var RejectSharedDirectoryRequest;
(function (RejectSharedDirectoryRequest) {
    /**
     * @internal
     */
    RejectSharedDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectSharedDirectoryRequest = exports.RejectSharedDirectoryRequest || (exports.RejectSharedDirectoryRequest = {}));
var RejectSharedDirectoryResult;
(function (RejectSharedDirectoryResult) {
    /**
     * @internal
     */
    RejectSharedDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectSharedDirectoryResult = exports.RejectSharedDirectoryResult || (exports.RejectSharedDirectoryResult = {}));
var RemoveIpRoutesRequest;
(function (RemoveIpRoutesRequest) {
    /**
     * @internal
     */
    RemoveIpRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveIpRoutesRequest = exports.RemoveIpRoutesRequest || (exports.RemoveIpRoutesRequest = {}));
var RemoveIpRoutesResult;
(function (RemoveIpRoutesResult) {
    /**
     * @internal
     */
    RemoveIpRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveIpRoutesResult = exports.RemoveIpRoutesResult || (exports.RemoveIpRoutesResult = {}));
var RemoveRegionRequest;
(function (RemoveRegionRequest) {
    /**
     * @internal
     */
    RemoveRegionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveRegionRequest = exports.RemoveRegionRequest || (exports.RemoveRegionRequest = {}));
var RemoveRegionResult;
(function (RemoveRegionResult) {
    /**
     * @internal
     */
    RemoveRegionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveRegionResult = exports.RemoveRegionResult || (exports.RemoveRegionResult = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveTagsFromResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceResult || (exports.RemoveTagsFromResourceResult = {}));
var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var ResetUserPasswordRequest;
(function (ResetUserPasswordRequest) {
    /**
     * @internal
     */
    ResetUserPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.NewPassword && { NewPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(ResetUserPasswordRequest = exports.ResetUserPasswordRequest || (exports.ResetUserPasswordRequest = {}));
var ResetUserPasswordResult;
(function (ResetUserPasswordResult) {
    /**
     * @internal
     */
    ResetUserPasswordResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetUserPasswordResult = exports.ResetUserPasswordResult || (exports.ResetUserPasswordResult = {}));
var UserDoesNotExistException;
(function (UserDoesNotExistException) {
    /**
     * @internal
     */
    UserDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserDoesNotExistException = exports.UserDoesNotExistException || (exports.UserDoesNotExistException = {}));
var RestoreFromSnapshotRequest;
(function (RestoreFromSnapshotRequest) {
    /**
     * @internal
     */
    RestoreFromSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreFromSnapshotRequest = exports.RestoreFromSnapshotRequest || (exports.RestoreFromSnapshotRequest = {}));
var RestoreFromSnapshotResult;
(function (RestoreFromSnapshotResult) {
    /**
     * @internal
     */
    RestoreFromSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreFromSnapshotResult = exports.RestoreFromSnapshotResult || (exports.RestoreFromSnapshotResult = {}));
var InvalidTargetException;
(function (InvalidTargetException) {
    /**
     * @internal
     */
    InvalidTargetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetException = exports.InvalidTargetException || (exports.InvalidTargetException = {}));
var OrganizationsException;
(function (OrganizationsException) {
    /**
     * @internal
     */
    OrganizationsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationsException = exports.OrganizationsException || (exports.OrganizationsException = {}));
var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var ShareTarget;
(function (ShareTarget) {
    /**
     * @internal
     */
    ShareTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareTarget = exports.ShareTarget || (exports.ShareTarget = {}));
var ShareDirectoryRequest;
(function (ShareDirectoryRequest) {
    /**
     * @internal
     */
    ShareDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ShareNotes && { ShareNotes: smithy_client_1.SENSITIVE_STRING }),
    });
})(ShareDirectoryRequest = exports.ShareDirectoryRequest || (exports.ShareDirectoryRequest = {}));
var ShareDirectoryResult;
(function (ShareDirectoryResult) {
    /**
     * @internal
     */
    ShareDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareDirectoryResult = exports.ShareDirectoryResult || (exports.ShareDirectoryResult = {}));
var ShareLimitExceededException;
(function (ShareLimitExceededException) {
    /**
     * @internal
     */
    ShareLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareLimitExceededException = exports.ShareLimitExceededException || (exports.ShareLimitExceededException = {}));
var StartSchemaExtensionRequest;
(function (StartSchemaExtensionRequest) {
    /**
     * @internal
     */
    StartSchemaExtensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSchemaExtensionRequest = exports.StartSchemaExtensionRequest || (exports.StartSchemaExtensionRequest = {}));
var StartSchemaExtensionResult;
(function (StartSchemaExtensionResult) {
    /**
     * @internal
     */
    StartSchemaExtensionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSchemaExtensionResult = exports.StartSchemaExtensionResult || (exports.StartSchemaExtensionResult = {}));
var UnshareTarget;
(function (UnshareTarget) {
    /**
     * @internal
     */
    UnshareTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnshareTarget = exports.UnshareTarget || (exports.UnshareTarget = {}));
var UnshareDirectoryRequest;
(function (UnshareDirectoryRequest) {
    /**
     * @internal
     */
    UnshareDirectoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnshareDirectoryRequest = exports.UnshareDirectoryRequest || (exports.UnshareDirectoryRequest = {}));
var UnshareDirectoryResult;
(function (UnshareDirectoryResult) {
    /**
     * @internal
     */
    UnshareDirectoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnshareDirectoryResult = exports.UnshareDirectoryResult || (exports.UnshareDirectoryResult = {}));
var UpdateConditionalForwarderRequest;
(function (UpdateConditionalForwarderRequest) {
    /**
     * @internal
     */
    UpdateConditionalForwarderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConditionalForwarderRequest = exports.UpdateConditionalForwarderRequest || (exports.UpdateConditionalForwarderRequest = {}));
var UpdateConditionalForwarderResult;
(function (UpdateConditionalForwarderResult) {
    /**
     * @internal
     */
    UpdateConditionalForwarderResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConditionalForwarderResult = exports.UpdateConditionalForwarderResult || (exports.UpdateConditionalForwarderResult = {}));
var DomainControllerLimitExceededException;
(function (DomainControllerLimitExceededException) {
    /**
     * @internal
     */
    DomainControllerLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainControllerLimitExceededException = exports.DomainControllerLimitExceededException || (exports.DomainControllerLimitExceededException = {}));
var UpdateNumberOfDomainControllersRequest;
(function (UpdateNumberOfDomainControllersRequest) {
    /**
     * @internal
     */
    UpdateNumberOfDomainControllersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNumberOfDomainControllersRequest = exports.UpdateNumberOfDomainControllersRequest || (exports.UpdateNumberOfDomainControllersRequest = {}));
var UpdateNumberOfDomainControllersResult;
(function (UpdateNumberOfDomainControllersResult) {
    /**
     * @internal
     */
    UpdateNumberOfDomainControllersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNumberOfDomainControllersResult = exports.UpdateNumberOfDomainControllersResult || (exports.UpdateNumberOfDomainControllersResult = {}));
var UpdateRadiusRequest;
(function (UpdateRadiusRequest) {
    /**
     * @internal
     */
    UpdateRadiusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
    });
})(UpdateRadiusRequest = exports.UpdateRadiusRequest || (exports.UpdateRadiusRequest = {}));
var UpdateRadiusResult;
(function (UpdateRadiusResult) {
    /**
     * @internal
     */
    UpdateRadiusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRadiusResult = exports.UpdateRadiusResult || (exports.UpdateRadiusResult = {}));
var UpdateTrustRequest;
(function (UpdateTrustRequest) {
    /**
     * @internal
     */
    UpdateTrustRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrustRequest = exports.UpdateTrustRequest || (exports.UpdateTrustRequest = {}));
var UpdateTrustResult;
(function (UpdateTrustResult) {
    /**
     * @internal
     */
    UpdateTrustResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrustResult = exports.UpdateTrustResult || (exports.UpdateTrustResult = {}));
var VerifyTrustRequest;
(function (VerifyTrustRequest) {
    /**
     * @internal
     */
    VerifyTrustRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifyTrustRequest = exports.VerifyTrustRequest || (exports.VerifyTrustRequest = {}));
var VerifyTrustResult;
(function (VerifyTrustResult) {
    /**
     * @internal
     */
    VerifyTrustResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifyTrustResult = exports.VerifyTrustResult || (exports.VerifyTrustResult = {}));
//# sourceMappingURL=models_0.js.map