import { __assign } from "tslib";
export var AddonIssueCode;
(function (AddonIssueCode) {
    AddonIssueCode["ACCESS_DENIED"] = "AccessDenied";
    AddonIssueCode["ADMISSION_REQUEST_DENIED"] = "AdmissionRequestDenied";
    AddonIssueCode["CLUSTER_UNREACHABLE"] = "ClusterUnreachable";
    AddonIssueCode["CONFIGURATION_CONFLICT"] = "ConfigurationConflict";
    AddonIssueCode["INSUFFICIENT_NUMBER_OF_REPLICAS"] = "InsufficientNumberOfReplicas";
    AddonIssueCode["INTERNAL_FAILURE"] = "InternalFailure";
})(AddonIssueCode || (AddonIssueCode = {}));
export var AddonIssue;
(function (AddonIssue) {
    /**
     * @internal
     */
    AddonIssue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddonIssue || (AddonIssue = {}));
export var AddonHealth;
(function (AddonHealth) {
    /**
     * @internal
     */
    AddonHealth.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddonHealth || (AddonHealth = {}));
export var Addon;
(function (Addon) {
    /**
     * @internal
     */
    Addon.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Addon || (Addon = {}));
export var Compatibility;
(function (Compatibility) {
    /**
     * @internal
     */
    Compatibility.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Compatibility || (Compatibility = {}));
export var AddonVersionInfo;
(function (AddonVersionInfo) {
    /**
     * @internal
     */
    AddonVersionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddonVersionInfo || (AddonVersionInfo = {}));
export var AddonInfo;
(function (AddonInfo) {
    /**
     * @internal
     */
    AddonInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddonInfo || (AddonInfo = {}));
export var Provider;
(function (Provider) {
    /**
     * @internal
     */
    Provider.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Provider || (Provider = {}));
export var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfig || (EncryptionConfig = {}));
export var AssociateEncryptionConfigRequest;
(function (AssociateEncryptionConfigRequest) {
    /**
     * @internal
     */
    AssociateEncryptionConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateEncryptionConfigRequest || (AssociateEncryptionConfigRequest = {}));
export var ErrorCode;
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
})(ErrorCode || (ErrorCode = {}));
export var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorDetail || (ErrorDetail = {}));
export var UpdateParamType;
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
})(UpdateParamType || (UpdateParamType = {}));
export var UpdateParam;
(function (UpdateParam) {
    /**
     * @internal
     */
    UpdateParam.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateParam || (UpdateParam = {}));
export var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["CANCELLED"] = "Cancelled";
    UpdateStatus["FAILED"] = "Failed";
    UpdateStatus["IN_PROGRESS"] = "InProgress";
    UpdateStatus["SUCCESSFUL"] = "Successful";
})(UpdateStatus || (UpdateStatus = {}));
export var UpdateType;
(function (UpdateType) {
    UpdateType["ADDON_UPDATE"] = "AddonUpdate";
    UpdateType["ASSOCIATE_ENCRYPTION_CONFIG"] = "AssociateEncryptionConfig";
    UpdateType["ASSOCIATE_IDENTITY_PROVIDER_CONFIG"] = "AssociateIdentityProviderConfig";
    UpdateType["CONFIG_UPDATE"] = "ConfigUpdate";
    UpdateType["DISASSOCIATE_IDENTITY_PROVIDER_CONFIG"] = "DisassociateIdentityProviderConfig";
    UpdateType["ENDPOINT_ACCESS_UPDATE"] = "EndpointAccessUpdate";
    UpdateType["LOGGING_UPDATE"] = "LoggingUpdate";
    UpdateType["VERSION_UPDATE"] = "VersionUpdate";
})(UpdateType || (UpdateType = {}));
export var Update;
(function (Update) {
    /**
     * @internal
     */
    Update.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Update || (Update = {}));
export var AssociateEncryptionConfigResponse;
(function (AssociateEncryptionConfigResponse) {
    /**
     * @internal
     */
    AssociateEncryptionConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateEncryptionConfigResponse || (AssociateEncryptionConfigResponse = {}));
export var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientException || (ClientException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerException || (ServerException = {}));
export var OidcIdentityProviderConfigRequest;
(function (OidcIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    OidcIdentityProviderConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OidcIdentityProviderConfigRequest || (OidcIdentityProviderConfigRequest = {}));
export var AssociateIdentityProviderConfigRequest;
(function (AssociateIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    AssociateIdentityProviderConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateIdentityProviderConfigRequest || (AssociateIdentityProviderConfigRequest = {}));
export var AssociateIdentityProviderConfigResponse;
(function (AssociateIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    AssociateIdentityProviderConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateIdentityProviderConfigResponse || (AssociateIdentityProviderConfigResponse = {}));
export var AutoScalingGroup;
(function (AutoScalingGroup) {
    /**
     * @internal
     */
    AutoScalingGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroup || (AutoScalingGroup = {}));
export var CreateAddonRequest;
(function (CreateAddonRequest) {
    /**
     * @internal
     */
    CreateAddonRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAddonRequest || (CreateAddonRequest = {}));
export var CreateAddonResponse;
(function (CreateAddonResponse) {
    /**
     * @internal
     */
    CreateAddonResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAddonResponse || (CreateAddonResponse = {}));
export var KubernetesNetworkConfigRequest;
(function (KubernetesNetworkConfigRequest) {
    /**
     * @internal
     */
    KubernetesNetworkConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KubernetesNetworkConfigRequest || (KubernetesNetworkConfigRequest = {}));
export var LogType;
(function (LogType) {
    LogType["API"] = "api";
    LogType["AUDIT"] = "audit";
    LogType["AUTHENTICATOR"] = "authenticator";
    LogType["CONTROLLER_MANAGER"] = "controllerManager";
    LogType["SCHEDULER"] = "scheduler";
})(LogType || (LogType = {}));
export var LogSetup;
(function (LogSetup) {
    /**
     * @internal
     */
    LogSetup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogSetup || (LogSetup = {}));
export var Logging;
(function (Logging) {
    /**
     * @internal
     */
    Logging.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Logging || (Logging = {}));
export var VpcConfigRequest;
(function (VpcConfigRequest) {
    /**
     * @internal
     */
    VpcConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfigRequest || (VpcConfigRequest = {}));
export var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterRequest || (CreateClusterRequest = {}));
export var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Certificate || (Certificate = {}));
export var OIDC;
(function (OIDC) {
    /**
     * @internal
     */
    OIDC.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OIDC || (OIDC = {}));
export var Identity;
(function (Identity) {
    /**
     * @internal
     */
    Identity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Identity || (Identity = {}));
export var KubernetesNetworkConfigResponse;
(function (KubernetesNetworkConfigResponse) {
    /**
     * @internal
     */
    KubernetesNetworkConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KubernetesNetworkConfigResponse || (KubernetesNetworkConfigResponse = {}));
export var VpcConfigResponse;
(function (VpcConfigResponse) {
    /**
     * @internal
     */
    VpcConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfigResponse || (VpcConfigResponse = {}));
export var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Cluster || (Cluster = {}));
export var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterResponse || (CreateClusterResponse = {}));
export var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var UnsupportedAvailabilityZoneException;
(function (UnsupportedAvailabilityZoneException) {
    /**
     * @internal
     */
    UnsupportedAvailabilityZoneException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedAvailabilityZoneException || (UnsupportedAvailabilityZoneException = {}));
export var FargateProfileSelector;
(function (FargateProfileSelector) {
    /**
     * @internal
     */
    FargateProfileSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FargateProfileSelector || (FargateProfileSelector = {}));
export var CreateFargateProfileRequest;
(function (CreateFargateProfileRequest) {
    /**
     * @internal
     */
    CreateFargateProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFargateProfileRequest || (CreateFargateProfileRequest = {}));
export var FargateProfile;
(function (FargateProfile) {
    /**
     * @internal
     */
    FargateProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FargateProfile || (FargateProfile = {}));
export var CreateFargateProfileResponse;
(function (CreateFargateProfileResponse) {
    /**
     * @internal
     */
    CreateFargateProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFargateProfileResponse || (CreateFargateProfileResponse = {}));
export var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
    /**
     * @internal
     */
    LaunchTemplateSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchTemplateSpecification || (LaunchTemplateSpecification = {}));
export var RemoteAccessConfig;
(function (RemoteAccessConfig) {
    /**
     * @internal
     */
    RemoteAccessConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoteAccessConfig || (RemoteAccessConfig = {}));
export var NodegroupScalingConfig;
(function (NodegroupScalingConfig) {
    /**
     * @internal
     */
    NodegroupScalingConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodegroupScalingConfig || (NodegroupScalingConfig = {}));
export var TaintEffect;
(function (TaintEffect) {
    TaintEffect["NO_EXECUTE"] = "NO_EXECUTE";
    TaintEffect["NO_SCHEDULE"] = "NO_SCHEDULE";
    TaintEffect["PREFER_NO_SCHEDULE"] = "PREFER_NO_SCHEDULE";
})(TaintEffect || (TaintEffect = {}));
export var Taint;
(function (Taint) {
    /**
     * @internal
     */
    Taint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Taint || (Taint = {}));
export var CreateNodegroupRequest;
(function (CreateNodegroupRequest) {
    /**
     * @internal
     */
    CreateNodegroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNodegroupRequest || (CreateNodegroupRequest = {}));
export var NodegroupIssueCode;
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
})(NodegroupIssueCode || (NodegroupIssueCode = {}));
export var Issue;
(function (Issue) {
    /**
     * @internal
     */
    Issue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Issue || (Issue = {}));
export var NodegroupHealth;
(function (NodegroupHealth) {
    /**
     * @internal
     */
    NodegroupHealth.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodegroupHealth || (NodegroupHealth = {}));
export var NodegroupResources;
(function (NodegroupResources) {
    /**
     * @internal
     */
    NodegroupResources.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodegroupResources || (NodegroupResources = {}));
export var Nodegroup;
(function (Nodegroup) {
    /**
     * @internal
     */
    Nodegroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Nodegroup || (Nodegroup = {}));
export var CreateNodegroupResponse;
(function (CreateNodegroupResponse) {
    /**
     * @internal
     */
    CreateNodegroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNodegroupResponse || (CreateNodegroupResponse = {}));
export var DeleteAddonRequest;
(function (DeleteAddonRequest) {
    /**
     * @internal
     */
    DeleteAddonRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAddonRequest || (DeleteAddonRequest = {}));
export var DeleteAddonResponse;
(function (DeleteAddonResponse) {
    /**
     * @internal
     */
    DeleteAddonResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAddonResponse || (DeleteAddonResponse = {}));
export var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterRequest || (DeleteClusterRequest = {}));
export var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterResponse || (DeleteClusterResponse = {}));
export var DeleteFargateProfileRequest;
(function (DeleteFargateProfileRequest) {
    /**
     * @internal
     */
    DeleteFargateProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFargateProfileRequest || (DeleteFargateProfileRequest = {}));
export var DeleteFargateProfileResponse;
(function (DeleteFargateProfileResponse) {
    /**
     * @internal
     */
    DeleteFargateProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFargateProfileResponse || (DeleteFargateProfileResponse = {}));
export var DeleteNodegroupRequest;
(function (DeleteNodegroupRequest) {
    /**
     * @internal
     */
    DeleteNodegroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNodegroupRequest || (DeleteNodegroupRequest = {}));
export var DeleteNodegroupResponse;
(function (DeleteNodegroupResponse) {
    /**
     * @internal
     */
    DeleteNodegroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNodegroupResponse || (DeleteNodegroupResponse = {}));
export var DescribeAddonRequest;
(function (DescribeAddonRequest) {
    /**
     * @internal
     */
    DescribeAddonRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddonRequest || (DescribeAddonRequest = {}));
export var DescribeAddonResponse;
(function (DescribeAddonResponse) {
    /**
     * @internal
     */
    DescribeAddonResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddonResponse || (DescribeAddonResponse = {}));
export var DescribeAddonVersionsRequest;
(function (DescribeAddonVersionsRequest) {
    /**
     * @internal
     */
    DescribeAddonVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddonVersionsRequest || (DescribeAddonVersionsRequest = {}));
export var DescribeAddonVersionsResponse;
(function (DescribeAddonVersionsResponse) {
    /**
     * @internal
     */
    DescribeAddonVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAddonVersionsResponse || (DescribeAddonVersionsResponse = {}));
export var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterRequest || (DescribeClusterRequest = {}));
export var DescribeClusterResponse;
(function (DescribeClusterResponse) {
    /**
     * @internal
     */
    DescribeClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterResponse || (DescribeClusterResponse = {}));
export var DescribeFargateProfileRequest;
(function (DescribeFargateProfileRequest) {
    /**
     * @internal
     */
    DescribeFargateProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFargateProfileRequest || (DescribeFargateProfileRequest = {}));
export var DescribeFargateProfileResponse;
(function (DescribeFargateProfileResponse) {
    /**
     * @internal
     */
    DescribeFargateProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFargateProfileResponse || (DescribeFargateProfileResponse = {}));
export var IdentityProviderConfig;
(function (IdentityProviderConfig) {
    /**
     * @internal
     */
    IdentityProviderConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityProviderConfig || (IdentityProviderConfig = {}));
export var DescribeIdentityProviderConfigRequest;
(function (DescribeIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIdentityProviderConfigRequest || (DescribeIdentityProviderConfigRequest = {}));
export var ConfigStatus;
(function (ConfigStatus) {
    ConfigStatus["ACTIVE"] = "ACTIVE";
    ConfigStatus["CREATING"] = "CREATING";
    ConfigStatus["DELETING"] = "DELETING";
})(ConfigStatus || (ConfigStatus = {}));
export var OidcIdentityProviderConfig;
(function (OidcIdentityProviderConfig) {
    /**
     * @internal
     */
    OidcIdentityProviderConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OidcIdentityProviderConfig || (OidcIdentityProviderConfig = {}));
export var IdentityProviderConfigResponse;
(function (IdentityProviderConfigResponse) {
    /**
     * @internal
     */
    IdentityProviderConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityProviderConfigResponse || (IdentityProviderConfigResponse = {}));
export var DescribeIdentityProviderConfigResponse;
(function (DescribeIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIdentityProviderConfigResponse || (DescribeIdentityProviderConfigResponse = {}));
export var DescribeNodegroupRequest;
(function (DescribeNodegroupRequest) {
    /**
     * @internal
     */
    DescribeNodegroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNodegroupRequest || (DescribeNodegroupRequest = {}));
export var DescribeNodegroupResponse;
(function (DescribeNodegroupResponse) {
    /**
     * @internal
     */
    DescribeNodegroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNodegroupResponse || (DescribeNodegroupResponse = {}));
export var DescribeUpdateRequest;
(function (DescribeUpdateRequest) {
    /**
     * @internal
     */
    DescribeUpdateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUpdateRequest || (DescribeUpdateRequest = {}));
export var DescribeUpdateResponse;
(function (DescribeUpdateResponse) {
    /**
     * @internal
     */
    DescribeUpdateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUpdateResponse || (DescribeUpdateResponse = {}));
export var DisassociateIdentityProviderConfigRequest;
(function (DisassociateIdentityProviderConfigRequest) {
    /**
     * @internal
     */
    DisassociateIdentityProviderConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateIdentityProviderConfigRequest || (DisassociateIdentityProviderConfigRequest = {}));
export var DisassociateIdentityProviderConfigResponse;
(function (DisassociateIdentityProviderConfigResponse) {
    /**
     * @internal
     */
    DisassociateIdentityProviderConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateIdentityProviderConfigResponse || (DisassociateIdentityProviderConfigResponse = {}));
export var ListAddonsRequest;
(function (ListAddonsRequest) {
    /**
     * @internal
     */
    ListAddonsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAddonsRequest || (ListAddonsRequest = {}));
export var ListAddonsResponse;
(function (ListAddonsResponse) {
    /**
     * @internal
     */
    ListAddonsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAddonsResponse || (ListAddonsResponse = {}));
export var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersRequest || (ListClustersRequest = {}));
export var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersResponse || (ListClustersResponse = {}));
export var ListFargateProfilesRequest;
(function (ListFargateProfilesRequest) {
    /**
     * @internal
     */
    ListFargateProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFargateProfilesRequest || (ListFargateProfilesRequest = {}));
export var ListFargateProfilesResponse;
(function (ListFargateProfilesResponse) {
    /**
     * @internal
     */
    ListFargateProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFargateProfilesResponse || (ListFargateProfilesResponse = {}));
export var ListIdentityProviderConfigsRequest;
(function (ListIdentityProviderConfigsRequest) {
    /**
     * @internal
     */
    ListIdentityProviderConfigsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIdentityProviderConfigsRequest || (ListIdentityProviderConfigsRequest = {}));
export var ListIdentityProviderConfigsResponse;
(function (ListIdentityProviderConfigsResponse) {
    /**
     * @internal
     */
    ListIdentityProviderConfigsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIdentityProviderConfigsResponse || (ListIdentityProviderConfigsResponse = {}));
export var ListNodegroupsRequest;
(function (ListNodegroupsRequest) {
    /**
     * @internal
     */
    ListNodegroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodegroupsRequest || (ListNodegroupsRequest = {}));
export var ListNodegroupsResponse;
(function (ListNodegroupsResponse) {
    /**
     * @internal
     */
    ListNodegroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodegroupsResponse || (ListNodegroupsResponse = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var ListUpdatesRequest;
(function (ListUpdatesRequest) {
    /**
     * @internal
     */
    ListUpdatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUpdatesRequest || (ListUpdatesRequest = {}));
export var ListUpdatesResponse;
(function (ListUpdatesResponse) {
    /**
     * @internal
     */
    ListUpdatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUpdatesResponse || (ListUpdatesResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateAddonRequest;
(function (UpdateAddonRequest) {
    /**
     * @internal
     */
    UpdateAddonRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAddonRequest || (UpdateAddonRequest = {}));
export var UpdateAddonResponse;
(function (UpdateAddonResponse) {
    /**
     * @internal
     */
    UpdateAddonResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAddonResponse || (UpdateAddonResponse = {}));
export var UpdateClusterConfigRequest;
(function (UpdateClusterConfigRequest) {
    /**
     * @internal
     */
    UpdateClusterConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterConfigRequest || (UpdateClusterConfigRequest = {}));
export var UpdateClusterConfigResponse;
(function (UpdateClusterConfigResponse) {
    /**
     * @internal
     */
    UpdateClusterConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterConfigResponse || (UpdateClusterConfigResponse = {}));
export var UpdateClusterVersionRequest;
(function (UpdateClusterVersionRequest) {
    /**
     * @internal
     */
    UpdateClusterVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterVersionRequest || (UpdateClusterVersionRequest = {}));
export var UpdateClusterVersionResponse;
(function (UpdateClusterVersionResponse) {
    /**
     * @internal
     */
    UpdateClusterVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterVersionResponse || (UpdateClusterVersionResponse = {}));
export var UpdateLabelsPayload;
(function (UpdateLabelsPayload) {
    /**
     * @internal
     */
    UpdateLabelsPayload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLabelsPayload || (UpdateLabelsPayload = {}));
export var UpdateTaintsPayload;
(function (UpdateTaintsPayload) {
    /**
     * @internal
     */
    UpdateTaintsPayload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaintsPayload || (UpdateTaintsPayload = {}));
export var UpdateNodegroupConfigRequest;
(function (UpdateNodegroupConfigRequest) {
    /**
     * @internal
     */
    UpdateNodegroupConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodegroupConfigRequest || (UpdateNodegroupConfigRequest = {}));
export var UpdateNodegroupConfigResponse;
(function (UpdateNodegroupConfigResponse) {
    /**
     * @internal
     */
    UpdateNodegroupConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodegroupConfigResponse || (UpdateNodegroupConfigResponse = {}));
export var UpdateNodegroupVersionRequest;
(function (UpdateNodegroupVersionRequest) {
    /**
     * @internal
     */
    UpdateNodegroupVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodegroupVersionRequest || (UpdateNodegroupVersionRequest = {}));
export var UpdateNodegroupVersionResponse;
(function (UpdateNodegroupVersionResponse) {
    /**
     * @internal
     */
    UpdateNodegroupVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodegroupVersionResponse || (UpdateNodegroupVersionResponse = {}));
//# sourceMappingURL=models_0.js.map