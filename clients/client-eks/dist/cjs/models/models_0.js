"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFargateProfileResponse = exports.FargateProfile = exports.CreateFargateProfileRequest = exports.FargateProfileSelector = exports.UnsupportedAvailabilityZoneException = exports.ServiceUnavailableException = exports.ResourceLimitExceededException = exports.CreateClusterResponse = exports.Cluster = exports.VpcConfigResponse = exports.KubernetesNetworkConfigResponse = exports.Identity = exports.OIDC = exports.Certificate = exports.CreateClusterRequest = exports.VpcConfigRequest = exports.Logging = exports.LogSetup = exports.LogType = exports.KubernetesNetworkConfigRequest = exports.CreateAddonResponse = exports.CreateAddonRequest = exports.AutoScalingGroup = exports.AssociateIdentityProviderConfigResponse = exports.AssociateIdentityProviderConfigRequest = exports.OidcIdentityProviderConfigRequest = exports.ServerException = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InvalidRequestException = exports.InvalidParameterException = exports.ClientException = exports.AssociateEncryptionConfigResponse = exports.Update = exports.UpdateType = exports.UpdateStatus = exports.UpdateParam = exports.UpdateParamType = exports.ErrorDetail = exports.ErrorCode = exports.AssociateEncryptionConfigRequest = exports.EncryptionConfig = exports.Provider = exports.AddonInfo = exports.AddonVersionInfo = exports.Compatibility = exports.Addon = exports.AddonHealth = exports.AddonIssue = exports.AddonIssueCode = void 0;
exports.ListNodegroupsResponse = exports.ListNodegroupsRequest = exports.ListIdentityProviderConfigsResponse = exports.ListIdentityProviderConfigsRequest = exports.ListFargateProfilesResponse = exports.ListFargateProfilesRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.ListAddonsResponse = exports.ListAddonsRequest = exports.DisassociateIdentityProviderConfigResponse = exports.DisassociateIdentityProviderConfigRequest = exports.DescribeUpdateResponse = exports.DescribeUpdateRequest = exports.DescribeNodegroupResponse = exports.DescribeNodegroupRequest = exports.DescribeIdentityProviderConfigResponse = exports.IdentityProviderConfigResponse = exports.OidcIdentityProviderConfig = exports.ConfigStatus = exports.DescribeIdentityProviderConfigRequest = exports.IdentityProviderConfig = exports.DescribeFargateProfileResponse = exports.DescribeFargateProfileRequest = exports.DescribeClusterResponse = exports.DescribeClusterRequest = exports.DescribeAddonVersionsResponse = exports.DescribeAddonVersionsRequest = exports.DescribeAddonResponse = exports.DescribeAddonRequest = exports.DeleteNodegroupResponse = exports.DeleteNodegroupRequest = exports.DeleteFargateProfileResponse = exports.DeleteFargateProfileRequest = exports.DeleteClusterResponse = exports.DeleteClusterRequest = exports.DeleteAddonResponse = exports.DeleteAddonRequest = exports.CreateNodegroupResponse = exports.Nodegroup = exports.NodegroupResources = exports.NodegroupHealth = exports.Issue = exports.NodegroupIssueCode = exports.CreateNodegroupRequest = exports.Taint = exports.TaintEffect = exports.NodegroupScalingConfig = exports.RemoteAccessConfig = exports.LaunchTemplateSpecification = void 0;
exports.UpdateNodegroupVersionResponse = exports.UpdateNodegroupVersionRequest = exports.UpdateNodegroupConfigResponse = exports.UpdateNodegroupConfigRequest = exports.UpdateTaintsPayload = exports.UpdateLabelsPayload = exports.UpdateClusterVersionResponse = exports.UpdateClusterVersionRequest = exports.UpdateClusterConfigResponse = exports.UpdateClusterConfigRequest = exports.UpdateAddonResponse = exports.UpdateAddonRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListUpdatesResponse = exports.ListUpdatesRequest = exports.NotFoundException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.BadRequestException = void 0;
var AddonIssueCode;
(function (AddonIssueCode) {
    AddonIssueCode["ACCESS_DENIED"] = "AccessDenied";
    AddonIssueCode["ADMISSION_REQUEST_DENIED"] = "AdmissionRequestDenied";
    AddonIssueCode["CLUSTER_UNREACHABLE"] = "ClusterUnreachable";
    AddonIssueCode["CONFIGURATION_CONFLICT"] = "ConfigurationConflict";
    AddonIssueCode["INSUFFICIENT_NUMBER_OF_REPLICAS"] = "InsufficientNumberOfReplicas";
    AddonIssueCode["INTERNAL_FAILURE"] = "InternalFailure";
})(AddonIssueCode = exports.AddonIssueCode || (exports.AddonIssueCode = {}));
var AddonIssue;
(function (AddonIssue) {
    /**
     * @internal
     */
    AddonIssue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddonIssue = exports.AddonIssue || (exports.AddonIssue = {}));
var AddonHealth;
(function (AddonHealth) {
    /**
     * @internal
     */
    AddonHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddonHealth = exports.AddonHealth || (exports.AddonHealth = {}));
var Addon;
(function (Addon) {
    /**
     * @internal
     */
    Addon.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Addon = exports.Addon || (exports.Addon = {}));
var Compatibility;
(function (Compatibility) {
    /**
     * @internal
     */
    Compatibility.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Compatibility = exports.Compatibility || (exports.Compatibility = {}));
var AddonVersionInfo;
(function (AddonVersionInfo) {
    /**
     * @internal
     */
    AddonVersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddonVersionInfo = exports.AddonVersionInfo || (exports.AddonVersionInfo = {}));
var AddonInfo;
(function (AddonInfo) {
    /**
     * @internal
     */
    AddonInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddonInfo = exports.AddonInfo || (exports.AddonInfo = {}));
var Provider;
(function (Provider) {
    /**
     * @internal
     */
    Provider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Provider = exports.Provider || (exports.Provider = {}));
var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfig = exports.EncryptionConfig || (exports.EncryptionConfig = {}));
var AssociateEncryptionConfigRequest;
(function (AssociateEncryptionConfigRequest) {
    /**
     * @internal
     */
    AssociateEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEncryptionConfigRequest = exports.AssociateEncryptionConfigRequest || (exports.AssociateEncryptionConfigRequest = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ACCESS_DENIED"] = "AccessDenied";
    ErrorCode["ADMISSION_REQUEST_DENIED"] = "AdmissionRequestDenied";
    ErrorCode["CLUSTER_UNREACHABLE"] = "ClusterUnreachable";
    ErrorCode["CONFIGURATION_CONFLICT"] = "ConfigurationConflict";
    ErrorCode["ENI_LIMIT_REACHED"] = "EniLimitReached";
    ErrorCode["INSUFFICIENT_FREE_ADDRESSES"] = "InsufficientFreeAddresses";
    ErrorCode["INSUFFICIENT_NUMBER_OF_REPLICAS"] = "InsufficientNumberOfReplicas";
    ErrorCode["IP_NOT_AVAILABLE"] = "IpNotAvailable";
    ErrorCode["NODE_CREATION_FAILURE"] = "NodeCreationFailure";
    ErrorCode["OPERATION_NOT_PERMITTED"] = "OperationNotPermitted";
    ErrorCode["POD_EVICTION_FAILURE"] = "PodEvictionFailure";
    ErrorCode["SECURITY_GROUP_NOT_FOUND"] = "SecurityGroupNotFound";
    ErrorCode["SUBNET_NOT_FOUND"] = "SubnetNotFound";
    ErrorCode["UNKNOWN"] = "Unknown";
    ErrorCode["VPC_ID_NOT_FOUND"] = "VpcIdNotFound";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var UpdateParamType;
(function (UpdateParamType) {
    UpdateParamType["ADDON_VERSION"] = "AddonVersion";
    UpdateParamType["CLUSTER_LOGGING"] = "ClusterLogging";
    UpdateParamType["DESIRED_SIZE"] = "DesiredSize";
    UpdateParamType["ENCRYPTION_CONFIG"] = "EncryptionConfig";
    UpdateParamType["ENDPOINT_PRIVATE_ACCESS"] = "EndpointPrivateAccess";
    UpdateParamType["ENDPOINT_PUBLIC_ACCESS"] = "EndpointPublicAccess";
    UpdateParamType["IDENTITY_PROVIDER_CONFIG"] = "IdentityProviderConfig";
    UpdateParamType["LABELS_TO_ADD"] = "LabelsToAdd";
    UpdateParamType["LABELS_TO_REMOVE"] = "LabelsToRemove";
    UpdateParamType["LAUNCH_TEMPLATE_NAME"] = "LaunchTemplateName";
    UpdateParamType["LAUNCH_TEMPLATE_VERSION"] = "LaunchTemplateVersion";
    UpdateParamType["MAX_SIZE"] = "MaxSize";
    UpdateParamType["MIN_SIZE"] = "MinSize";
    UpdateParamType["PLATFORM_VERSION"] = "PlatformVersion";
    UpdateParamType["PUBLIC_ACCESS_CIDRS"] = "PublicAccessCidrs";
    UpdateParamType["RELEASE_VERSION"] = "ReleaseVersion";
    UpdateParamType["RESOLVE_CONFLICTS"] = "ResolveConflicts";
    UpdateParamType["SERVICE_ACCOUNT_ROLE_ARN"] = "ServiceAccountRoleArn";
    UpdateParamType["TAINTS_TO_ADD"] = "TaintsToAdd";
    UpdateParamType["TAINTS_TO_REMOVE"] = "TaintsToRemove";
    UpdateParamType["VERSION"] = "Version";
})(UpdateParamType = exports.UpdateParamType || (exports.UpdateParamType = {}));
var UpdateParam;
(function (UpdateParam) {
    /**
     * @internal
     */
    UpdateParam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateParam = exports.UpdateParam || (exports.UpdateParam = {}));
var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["CANCELLED"] = "Cancelled";
    UpdateStatus["FAILED"] = "Failed";
    UpdateStatus["IN_PROGRESS"] = "InProgress";
    UpdateStatus["SUCCESSFUL"] = "Successful";
})(UpdateStatus = exports.UpdateStatus || (exports.UpdateStatus = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["ADDON_UPDATE"] = "AddonUpdate";
    UpdateType["ASSOCIATE_ENCRYPTION_CONFIG"] = "AssociateEncryptionConfig";
    UpdateType["ASSOCIATE_IDENTITY_PROVIDER_CONFIG"] = "AssociateIdentityProviderConfig";
    UpdateType["CONFIG_UPDATE"] = "ConfigUpdate";
    UpdateType["DISASSOCIATE_IDENTITY_PROVIDER_CONFIG"] = "DisassociateIdentityProviderConfig";
    UpdateType["ENDPOINT_ACCESS_UPDATE"] = "EndpointAccessUpdate";
    UpdateType["LOGGING_UPDATE"] = "LoggingUpdate";
    UpdateType["VERSION_UPDATE"] = "VersionUpdate";
})(UpdateType = exports.UpdateType || (exports.UpdateType = {}));
var Update;
(function (Update) {
    /**
     * @internal
     */
    Update.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Update = exports.Update || (exports.Update = {}));
var AssociateEncryptionConfigResponse;
(function (AssociateEncryptionConfigResponse) {
    /**
     * @internal
     */
    AssociateEncryptionConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEncryptionConfigResponse = exports.AssociateEncryptionConfigResponse || (exports.AssociateEncryptionConfigResponse = {}));
var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerException = exports.ServerException || (exports.ServerException = {}));
var OidcIdentityProviderConfigRequest;
(function (OidcIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    OidcIdentityProviderConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OidcIdentityProviderConfigRequest = exports.OidcIdentityProviderConfigRequest || (exports.OidcIdentityProviderConfigRequest = {}));
var AssociateIdentityProviderConfigRequest;
(function (AssociateIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    AssociateIdentityProviderConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIdentityProviderConfigRequest = exports.AssociateIdentityProviderConfigRequest || (exports.AssociateIdentityProviderConfigRequest = {}));
var AssociateIdentityProviderConfigResponse;
(function (AssociateIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    AssociateIdentityProviderConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIdentityProviderConfigResponse = exports.AssociateIdentityProviderConfigResponse || (exports.AssociateIdentityProviderConfigResponse = {}));
var AutoScalingGroup;
(function (AutoScalingGroup) {
    /**
     * @internal
     */
    AutoScalingGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroup = exports.AutoScalingGroup || (exports.AutoScalingGroup = {}));
var CreateAddonRequest;
(function (CreateAddonRequest) {
    /**
     * @internal
     */
    CreateAddonRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAddonRequest = exports.CreateAddonRequest || (exports.CreateAddonRequest = {}));
var CreateAddonResponse;
(function (CreateAddonResponse) {
    /**
     * @internal
     */
    CreateAddonResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAddonResponse = exports.CreateAddonResponse || (exports.CreateAddonResponse = {}));
var KubernetesNetworkConfigRequest;
(function (KubernetesNetworkConfigRequest) {
    /**
     * @internal
     */
    KubernetesNetworkConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KubernetesNetworkConfigRequest = exports.KubernetesNetworkConfigRequest || (exports.KubernetesNetworkConfigRequest = {}));
var LogType;
(function (LogType) {
    LogType["API"] = "api";
    LogType["AUDIT"] = "audit";
    LogType["AUTHENTICATOR"] = "authenticator";
    LogType["CONTROLLER_MANAGER"] = "controllerManager";
    LogType["SCHEDULER"] = "scheduler";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogSetup;
(function (LogSetup) {
    /**
     * @internal
     */
    LogSetup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogSetup = exports.LogSetup || (exports.LogSetup = {}));
var Logging;
(function (Logging) {
    /**
     * @internal
     */
    Logging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Logging = exports.Logging || (exports.Logging = {}));
var VpcConfigRequest;
(function (VpcConfigRequest) {
    /**
     * @internal
     */
    VpcConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigRequest = exports.VpcConfigRequest || (exports.VpcConfigRequest = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var OIDC;
(function (OIDC) {
    /**
     * @internal
     */
    OIDC.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OIDC = exports.OIDC || (exports.OIDC = {}));
var Identity;
(function (Identity) {
    /**
     * @internal
     */
    Identity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Identity = exports.Identity || (exports.Identity = {}));
var KubernetesNetworkConfigResponse;
(function (KubernetesNetworkConfigResponse) {
    /**
     * @internal
     */
    KubernetesNetworkConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KubernetesNetworkConfigResponse = exports.KubernetesNetworkConfigResponse || (exports.KubernetesNetworkConfigResponse = {}));
var VpcConfigResponse;
(function (VpcConfigResponse) {
    /**
     * @internal
     */
    VpcConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigResponse = exports.VpcConfigResponse || (exports.VpcConfigResponse = {}));
var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var UnsupportedAvailabilityZoneException;
(function (UnsupportedAvailabilityZoneException) {
    /**
     * @internal
     */
    UnsupportedAvailabilityZoneException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedAvailabilityZoneException = exports.UnsupportedAvailabilityZoneException || (exports.UnsupportedAvailabilityZoneException = {}));
var FargateProfileSelector;
(function (FargateProfileSelector) {
    /**
     * @internal
     */
    FargateProfileSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FargateProfileSelector = exports.FargateProfileSelector || (exports.FargateProfileSelector = {}));
var CreateFargateProfileRequest;
(function (CreateFargateProfileRequest) {
    /**
     * @internal
     */
    CreateFargateProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFargateProfileRequest = exports.CreateFargateProfileRequest || (exports.CreateFargateProfileRequest = {}));
var FargateProfile;
(function (FargateProfile) {
    /**
     * @internal
     */
    FargateProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FargateProfile = exports.FargateProfile || (exports.FargateProfile = {}));
var CreateFargateProfileResponse;
(function (CreateFargateProfileResponse) {
    /**
     * @internal
     */
    CreateFargateProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFargateProfileResponse = exports.CreateFargateProfileResponse || (exports.CreateFargateProfileResponse = {}));
var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
    /**
     * @internal
     */
    LaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateSpecification = exports.LaunchTemplateSpecification || (exports.LaunchTemplateSpecification = {}));
var RemoteAccessConfig;
(function (RemoteAccessConfig) {
    /**
     * @internal
     */
    RemoteAccessConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoteAccessConfig = exports.RemoteAccessConfig || (exports.RemoteAccessConfig = {}));
var NodegroupScalingConfig;
(function (NodegroupScalingConfig) {
    /**
     * @internal
     */
    NodegroupScalingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodegroupScalingConfig = exports.NodegroupScalingConfig || (exports.NodegroupScalingConfig = {}));
var TaintEffect;
(function (TaintEffect) {
    TaintEffect["NO_EXECUTE"] = "NO_EXECUTE";
    TaintEffect["NO_SCHEDULE"] = "NO_SCHEDULE";
    TaintEffect["PREFER_NO_SCHEDULE"] = "PREFER_NO_SCHEDULE";
})(TaintEffect = exports.TaintEffect || (exports.TaintEffect = {}));
var Taint;
(function (Taint) {
    /**
     * @internal
     */
    Taint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Taint = exports.Taint || (exports.Taint = {}));
var CreateNodegroupRequest;
(function (CreateNodegroupRequest) {
    /**
     * @internal
     */
    CreateNodegroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNodegroupRequest = exports.CreateNodegroupRequest || (exports.CreateNodegroupRequest = {}));
var NodegroupIssueCode;
(function (NodegroupIssueCode) {
    NodegroupIssueCode["ACCESS_DENIED"] = "AccessDenied";
    NodegroupIssueCode["ASG_INSTANCE_LAUNCH_FAILURES"] = "AsgInstanceLaunchFailures";
    NodegroupIssueCode["AUTO_SCALING_GROUP_INVALID_CONFIGURATION"] = "AutoScalingGroupInvalidConfiguration";
    NodegroupIssueCode["AUTO_SCALING_GROUP_NOT_FOUND"] = "AutoScalingGroupNotFound";
    NodegroupIssueCode["CLUSTER_UNREACHABLE"] = "ClusterUnreachable";
    NodegroupIssueCode["EC2_LAUNCH_TEMPLATE_NOT_FOUND"] = "Ec2LaunchTemplateNotFound";
    NodegroupIssueCode["EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH"] = "Ec2LaunchTemplateVersionMismatch";
    NodegroupIssueCode["EC2_SECURITY_GROUP_DELETION_FAILURE"] = "Ec2SecurityGroupDeletionFailure";
    NodegroupIssueCode["EC2_SECURITY_GROUP_NOT_FOUND"] = "Ec2SecurityGroupNotFound";
    NodegroupIssueCode["EC2_SUBNET_INVALID_CONFIGURATION"] = "Ec2SubnetInvalidConfiguration";
    NodegroupIssueCode["EC2_SUBNET_NOT_FOUND"] = "Ec2SubnetNotFound";
    NodegroupIssueCode["IAM_INSTANCE_PROFILE_NOT_FOUND"] = "IamInstanceProfileNotFound";
    NodegroupIssueCode["IAM_LIMIT_EXCEEDED"] = "IamLimitExceeded";
    NodegroupIssueCode["IAM_NODE_ROLE_NOT_FOUND"] = "IamNodeRoleNotFound";
    NodegroupIssueCode["INSTANCE_LIMIT_EXCEEDED"] = "InstanceLimitExceeded";
    NodegroupIssueCode["INSUFFICIENT_FREE_ADDRESSES"] = "InsufficientFreeAddresses";
    NodegroupIssueCode["INTERNAL_FAILURE"] = "InternalFailure";
    NodegroupIssueCode["NODE_CREATION_FAILURE"] = "NodeCreationFailure";
})(NodegroupIssueCode = exports.NodegroupIssueCode || (exports.NodegroupIssueCode = {}));
var Issue;
(function (Issue) {
    /**
     * @internal
     */
    Issue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Issue = exports.Issue || (exports.Issue = {}));
var NodegroupHealth;
(function (NodegroupHealth) {
    /**
     * @internal
     */
    NodegroupHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodegroupHealth = exports.NodegroupHealth || (exports.NodegroupHealth = {}));
var NodegroupResources;
(function (NodegroupResources) {
    /**
     * @internal
     */
    NodegroupResources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodegroupResources = exports.NodegroupResources || (exports.NodegroupResources = {}));
var Nodegroup;
(function (Nodegroup) {
    /**
     * @internal
     */
    Nodegroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Nodegroup = exports.Nodegroup || (exports.Nodegroup = {}));
var CreateNodegroupResponse;
(function (CreateNodegroupResponse) {
    /**
     * @internal
     */
    CreateNodegroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNodegroupResponse = exports.CreateNodegroupResponse || (exports.CreateNodegroupResponse = {}));
var DeleteAddonRequest;
(function (DeleteAddonRequest) {
    /**
     * @internal
     */
    DeleteAddonRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAddonRequest = exports.DeleteAddonRequest || (exports.DeleteAddonRequest = {}));
var DeleteAddonResponse;
(function (DeleteAddonResponse) {
    /**
     * @internal
     */
    DeleteAddonResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAddonResponse = exports.DeleteAddonResponse || (exports.DeleteAddonResponse = {}));
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {}));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {}));
var DeleteFargateProfileRequest;
(function (DeleteFargateProfileRequest) {
    /**
     * @internal
     */
    DeleteFargateProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFargateProfileRequest = exports.DeleteFargateProfileRequest || (exports.DeleteFargateProfileRequest = {}));
var DeleteFargateProfileResponse;
(function (DeleteFargateProfileResponse) {
    /**
     * @internal
     */
    DeleteFargateProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFargateProfileResponse = exports.DeleteFargateProfileResponse || (exports.DeleteFargateProfileResponse = {}));
var DeleteNodegroupRequest;
(function (DeleteNodegroupRequest) {
    /**
     * @internal
     */
    DeleteNodegroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNodegroupRequest = exports.DeleteNodegroupRequest || (exports.DeleteNodegroupRequest = {}));
var DeleteNodegroupResponse;
(function (DeleteNodegroupResponse) {
    /**
     * @internal
     */
    DeleteNodegroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNodegroupResponse = exports.DeleteNodegroupResponse || (exports.DeleteNodegroupResponse = {}));
var DescribeAddonRequest;
(function (DescribeAddonRequest) {
    /**
     * @internal
     */
    DescribeAddonRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddonRequest = exports.DescribeAddonRequest || (exports.DescribeAddonRequest = {}));
var DescribeAddonResponse;
(function (DescribeAddonResponse) {
    /**
     * @internal
     */
    DescribeAddonResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddonResponse = exports.DescribeAddonResponse || (exports.DescribeAddonResponse = {}));
var DescribeAddonVersionsRequest;
(function (DescribeAddonVersionsRequest) {
    /**
     * @internal
     */
    DescribeAddonVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddonVersionsRequest = exports.DescribeAddonVersionsRequest || (exports.DescribeAddonVersionsRequest = {}));
var DescribeAddonVersionsResponse;
(function (DescribeAddonVersionsResponse) {
    /**
     * @internal
     */
    DescribeAddonVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddonVersionsResponse = exports.DescribeAddonVersionsResponse || (exports.DescribeAddonVersionsResponse = {}));
var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterRequest = exports.DescribeClusterRequest || (exports.DescribeClusterRequest = {}));
var DescribeClusterResponse;
(function (DescribeClusterResponse) {
    /**
     * @internal
     */
    DescribeClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterResponse = exports.DescribeClusterResponse || (exports.DescribeClusterResponse = {}));
var DescribeFargateProfileRequest;
(function (DescribeFargateProfileRequest) {
    /**
     * @internal
     */
    DescribeFargateProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFargateProfileRequest = exports.DescribeFargateProfileRequest || (exports.DescribeFargateProfileRequest = {}));
var DescribeFargateProfileResponse;
(function (DescribeFargateProfileResponse) {
    /**
     * @internal
     */
    DescribeFargateProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFargateProfileResponse = exports.DescribeFargateProfileResponse || (exports.DescribeFargateProfileResponse = {}));
var IdentityProviderConfig;
(function (IdentityProviderConfig) {
    /**
     * @internal
     */
    IdentityProviderConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityProviderConfig = exports.IdentityProviderConfig || (exports.IdentityProviderConfig = {}));
var DescribeIdentityProviderConfigRequest;
(function (DescribeIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderConfigRequest = exports.DescribeIdentityProviderConfigRequest || (exports.DescribeIdentityProviderConfigRequest = {}));
var ConfigStatus;
(function (ConfigStatus) {
    ConfigStatus["ACTIVE"] = "ACTIVE";
    ConfigStatus["CREATING"] = "CREATING";
    ConfigStatus["DELETING"] = "DELETING";
})(ConfigStatus = exports.ConfigStatus || (exports.ConfigStatus = {}));
var OidcIdentityProviderConfig;
(function (OidcIdentityProviderConfig) {
    /**
     * @internal
     */
    OidcIdentityProviderConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OidcIdentityProviderConfig = exports.OidcIdentityProviderConfig || (exports.OidcIdentityProviderConfig = {}));
var IdentityProviderConfigResponse;
(function (IdentityProviderConfigResponse) {
    /**
     * @internal
     */
    IdentityProviderConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityProviderConfigResponse = exports.IdentityProviderConfigResponse || (exports.IdentityProviderConfigResponse = {}));
var DescribeIdentityProviderConfigResponse;
(function (DescribeIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderConfigResponse = exports.DescribeIdentityProviderConfigResponse || (exports.DescribeIdentityProviderConfigResponse = {}));
var DescribeNodegroupRequest;
(function (DescribeNodegroupRequest) {
    /**
     * @internal
     */
    DescribeNodegroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNodegroupRequest = exports.DescribeNodegroupRequest || (exports.DescribeNodegroupRequest = {}));
var DescribeNodegroupResponse;
(function (DescribeNodegroupResponse) {
    /**
     * @internal
     */
    DescribeNodegroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNodegroupResponse = exports.DescribeNodegroupResponse || (exports.DescribeNodegroupResponse = {}));
var DescribeUpdateRequest;
(function (DescribeUpdateRequest) {
    /**
     * @internal
     */
    DescribeUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUpdateRequest = exports.DescribeUpdateRequest || (exports.DescribeUpdateRequest = {}));
var DescribeUpdateResponse;
(function (DescribeUpdateResponse) {
    /**
     * @internal
     */
    DescribeUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUpdateResponse = exports.DescribeUpdateResponse || (exports.DescribeUpdateResponse = {}));
var DisassociateIdentityProviderConfigRequest;
(function (DisassociateIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    DisassociateIdentityProviderConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIdentityProviderConfigRequest = exports.DisassociateIdentityProviderConfigRequest || (exports.DisassociateIdentityProviderConfigRequest = {}));
var DisassociateIdentityProviderConfigResponse;
(function (DisassociateIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    DisassociateIdentityProviderConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIdentityProviderConfigResponse = exports.DisassociateIdentityProviderConfigResponse || (exports.DisassociateIdentityProviderConfigResponse = {}));
var ListAddonsRequest;
(function (ListAddonsRequest) {
    /**
     * @internal
     */
    ListAddonsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAddonsRequest = exports.ListAddonsRequest || (exports.ListAddonsRequest = {}));
var ListAddonsResponse;
(function (ListAddonsResponse) {
    /**
     * @internal
     */
    ListAddonsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAddonsResponse = exports.ListAddonsResponse || (exports.ListAddonsResponse = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersResponse = exports.ListClustersResponse || (exports.ListClustersResponse = {}));
var ListFargateProfilesRequest;
(function (ListFargateProfilesRequest) {
    /**
     * @internal
     */
    ListFargateProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFargateProfilesRequest = exports.ListFargateProfilesRequest || (exports.ListFargateProfilesRequest = {}));
var ListFargateProfilesResponse;
(function (ListFargateProfilesResponse) {
    /**
     * @internal
     */
    ListFargateProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFargateProfilesResponse = exports.ListFargateProfilesResponse || (exports.ListFargateProfilesResponse = {}));
var ListIdentityProviderConfigsRequest;
(function (ListIdentityProviderConfigsRequest) {
    /**
     * @internal
     */
    ListIdentityProviderConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityProviderConfigsRequest = exports.ListIdentityProviderConfigsRequest || (exports.ListIdentityProviderConfigsRequest = {}));
var ListIdentityProviderConfigsResponse;
(function (ListIdentityProviderConfigsResponse) {
    /**
     * @internal
     */
    ListIdentityProviderConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityProviderConfigsResponse = exports.ListIdentityProviderConfigsResponse || (exports.ListIdentityProviderConfigsResponse = {}));
var ListNodegroupsRequest;
(function (ListNodegroupsRequest) {
    /**
     * @internal
     */
    ListNodegroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodegroupsRequest = exports.ListNodegroupsRequest || (exports.ListNodegroupsRequest = {}));
var ListNodegroupsResponse;
(function (ListNodegroupsResponse) {
    /**
     * @internal
     */
    ListNodegroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodegroupsResponse = exports.ListNodegroupsResponse || (exports.ListNodegroupsResponse = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var ListUpdatesRequest;
(function (ListUpdatesRequest) {
    /**
     * @internal
     */
    ListUpdatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUpdatesRequest = exports.ListUpdatesRequest || (exports.ListUpdatesRequest = {}));
var ListUpdatesResponse;
(function (ListUpdatesResponse) {
    /**
     * @internal
     */
    ListUpdatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUpdatesResponse = exports.ListUpdatesResponse || (exports.ListUpdatesResponse = {}));
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
var UpdateAddonRequest;
(function (UpdateAddonRequest) {
    /**
     * @internal
     */
    UpdateAddonRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAddonRequest = exports.UpdateAddonRequest || (exports.UpdateAddonRequest = {}));
var UpdateAddonResponse;
(function (UpdateAddonResponse) {
    /**
     * @internal
     */
    UpdateAddonResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAddonResponse = exports.UpdateAddonResponse || (exports.UpdateAddonResponse = {}));
var UpdateClusterConfigRequest;
(function (UpdateClusterConfigRequest) {
    /**
     * @internal
     */
    UpdateClusterConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterConfigRequest = exports.UpdateClusterConfigRequest || (exports.UpdateClusterConfigRequest = {}));
var UpdateClusterConfigResponse;
(function (UpdateClusterConfigResponse) {
    /**
     * @internal
     */
    UpdateClusterConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterConfigResponse = exports.UpdateClusterConfigResponse || (exports.UpdateClusterConfigResponse = {}));
var UpdateClusterVersionRequest;
(function (UpdateClusterVersionRequest) {
    /**
     * @internal
     */
    UpdateClusterVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterVersionRequest = exports.UpdateClusterVersionRequest || (exports.UpdateClusterVersionRequest = {}));
var UpdateClusterVersionResponse;
(function (UpdateClusterVersionResponse) {
    /**
     * @internal
     */
    UpdateClusterVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterVersionResponse = exports.UpdateClusterVersionResponse || (exports.UpdateClusterVersionResponse = {}));
var UpdateLabelsPayload;
(function (UpdateLabelsPayload) {
    /**
     * @internal
     */
    UpdateLabelsPayload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLabelsPayload = exports.UpdateLabelsPayload || (exports.UpdateLabelsPayload = {}));
var UpdateTaintsPayload;
(function (UpdateTaintsPayload) {
    /**
     * @internal
     */
    UpdateTaintsPayload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaintsPayload = exports.UpdateTaintsPayload || (exports.UpdateTaintsPayload = {}));
var UpdateNodegroupConfigRequest;
(function (UpdateNodegroupConfigRequest) {
    /**
     * @internal
     */
    UpdateNodegroupConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodegroupConfigRequest = exports.UpdateNodegroupConfigRequest || (exports.UpdateNodegroupConfigRequest = {}));
var UpdateNodegroupConfigResponse;
(function (UpdateNodegroupConfigResponse) {
    /**
     * @internal
     */
    UpdateNodegroupConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodegroupConfigResponse = exports.UpdateNodegroupConfigResponse || (exports.UpdateNodegroupConfigResponse = {}));
var UpdateNodegroupVersionRequest;
(function (UpdateNodegroupVersionRequest) {
    /**
     * @internal
     */
    UpdateNodegroupVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodegroupVersionRequest = exports.UpdateNodegroupVersionRequest || (exports.UpdateNodegroupVersionRequest = {}));
var UpdateNodegroupVersionResponse;
(function (UpdateNodegroupVersionResponse) {
    /**
     * @internal
     */
    UpdateNodegroupVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodegroupVersionResponse = exports.UpdateNodegroupVersionResponse || (exports.UpdateNodegroupVersionResponse = {}));
//# sourceMappingURL=models_0.js.map