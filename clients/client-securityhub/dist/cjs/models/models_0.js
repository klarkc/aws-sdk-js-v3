"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCloudFrontDistributionCacheBehaviors = exports.AwsCloudFrontDistributionCacheBehavior = exports.AwsCertificateManagerCertificateDetails = exports.AwsCertificateManagerCertificateRenewalSummary = exports.AwsCertificateManagerCertificateOptions = exports.AwsCertificateManagerCertificateKeyUsage = exports.AwsCertificateManagerCertificateExtendedKeyUsage = exports.AwsCertificateManagerCertificateDomainValidationOption = exports.AwsCertificateManagerCertificateResourceRecord = exports.AwsAutoScalingAutoScalingGroupDetails = exports.AwsApiGatewayV2StageDetails = exports.AwsApiGatewayV2RouteSettings = exports.AwsApiGatewayV2ApiDetails = exports.AwsCorsConfiguration = exports.AwsApiGatewayStageDetails = exports.AwsApiGatewayRestApiDetails = exports.AwsApiGatewayMethodSettings = exports.AwsApiGatewayEndpointConfiguration = exports.AwsApiGatewayCanarySettings = exports.AwsApiGatewayAccessLogSettings = exports.AvailabilityZone = exports.AdminAccount = exports.AdminStatus = exports.ActionTarget = exports.Action = exports.PortProbeAction = exports.PortProbeDetail = exports.ActionLocalIpDetails = exports.NetworkConnectionAction = exports.ActionRemotePortDetails = exports.ActionLocalPortDetails = exports.DnsRequestAction = exports.AwsApiCallAction = exports.ActionRemoteIpDetails = exports.IpOrganizationDetails = exports.GeoLocation = exports.Country = exports.City = exports.AwsApiCallActionDomainDetails = exports.AccountDetails = exports.AccessDeniedException = exports.AcceptInvitationResponse = exports.AcceptInvitationRequest = exports.ResourceNotFoundException = exports.LimitExceededException = exports.InvalidInputException = exports.InvalidAccessException = exports.InternalException = exports.AcceptAdministratorInvitationResponse = exports.AcceptAdministratorInvitationRequest = void 0;
exports.AwsEc2SubnetDetails = exports.Ipv6CidrBlockAssociation = exports.AwsEc2SecurityGroupDetails = exports.AwsEc2SecurityGroupIpPermission = exports.AwsEc2SecurityGroupUserIdGroupPair = exports.AwsEc2SecurityGroupPrefixListId = exports.AwsEc2SecurityGroupIpv6Range = exports.AwsEc2SecurityGroupIpRange = exports.AwsEc2NetworkInterfaceDetails = exports.AwsEc2NetworkInterfaceSecurityGroup = exports.AwsEc2NetworkInterfacePrivateIpAddressDetail = exports.AwsEc2NetworkInterfaceIpV6AddressDetail = exports.AwsEc2NetworkInterfaceAttachment = exports.AwsEc2NetworkAclDetails = exports.AwsEc2NetworkAclEntry = exports.PortRangeFromTo = exports.IcmpTypeCode = exports.AwsEc2NetworkAclAssociation = exports.AwsEc2InstanceDetails = exports.AwsEc2EipDetails = exports.AwsDynamoDbTableDetails = exports.AwsDynamoDbTableStreamSpecification = exports.AwsDynamoDbTableSseDescription = exports.AwsDynamoDbTableRestoreSummary = exports.AwsDynamoDbTableReplica = exports.AwsDynamoDbTableReplicaGlobalSecondaryIndex = exports.AwsDynamoDbTableProvisionedThroughputOverride = exports.AwsDynamoDbTableLocalSecondaryIndex = exports.AwsDynamoDbTableGlobalSecondaryIndex = exports.AwsDynamoDbTableProvisionedThroughput = exports.AwsDynamoDbTableProjection = exports.AwsDynamoDbTableKeySchema = exports.AwsDynamoDbTableBillingModeSummary = exports.AwsDynamoDbTableAttributeDefinition = exports.AwsCodeBuildProjectDetails = exports.AwsCodeBuildProjectVpcConfig = exports.AwsCodeBuildProjectSource = exports.AwsCodeBuildProjectEnvironment = exports.AwsCodeBuildProjectEnvironmentRegistryCredential = exports.AwsCloudTrailTrailDetails = exports.AwsCloudFrontDistributionDetails = exports.AwsCloudFrontDistributionOrigins = exports.AwsCloudFrontDistributionOriginItem = exports.AwsCloudFrontDistributionOriginS3OriginConfig = exports.AwsCloudFrontDistributionOriginGroups = exports.AwsCloudFrontDistributionOriginGroup = exports.AwsCloudFrontDistributionOriginGroupFailover = exports.AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = exports.AwsCloudFrontDistributionLogging = exports.AwsCloudFrontDistributionDefaultCacheBehavior = void 0;
exports.AwsLambdaFunctionDeadLetterConfig = exports.AwsLambdaFunctionCode = exports.AwsKmsKeyDetails = exports.AwsIamUserDetails = exports.AwsIamUserPolicy = exports.AwsIamRoleDetails = exports.AwsIamRolePolicy = exports.AwsIamPolicyDetails = exports.AwsIamPolicyVersion = exports.AwsIamPermissionsBoundary = exports.AwsIamInstanceProfile = exports.AwsIamInstanceProfileRole = exports.AwsIamGroupDetails = exports.AwsIamGroupPolicy = exports.AwsIamAttachedManagedPolicy = exports.AwsIamAccessKeyDetails = exports.AwsIamAccessKeyStatus = exports.AwsIamAccessKeySessionContext = exports.AwsIamAccessKeySessionContextSessionIssuer = exports.AwsIamAccessKeySessionContextAttributes = exports.AwsElbv2LoadBalancerDetails = exports.LoadBalancerState = exports.AwsElbLoadBalancerDetails = exports.AwsElbLoadBalancerSourceSecurityGroup = exports.AwsElbLoadBalancerPolicies = exports.AwsElbLoadBalancerListenerDescription = exports.AwsElbLoadBalancerListener = exports.AwsElbLoadBalancerInstance = exports.AwsElbLoadBalancerHealthCheck = exports.AwsElbLoadBalancerBackendServerDescription = exports.AwsElbLoadBalancerAttributes = exports.AwsElbLoadBalancerCrossZoneLoadBalancing = exports.AwsElbLoadBalancerConnectionSettings = exports.AwsElbLoadBalancerConnectionDraining = exports.AwsElbLoadBalancerAccessLog = exports.AwsElbLbCookieStickinessPolicy = exports.AwsElbAppCookieStickinessPolicy = exports.AwsElasticsearchDomainDetails = exports.AwsElasticsearchDomainVPCOptions = exports.AwsElasticsearchDomainNodeToNodeEncryptionOptions = exports.AwsElasticsearchDomainEncryptionAtRestOptions = exports.AwsElasticsearchDomainDomainEndpointOptions = exports.AwsElasticBeanstalkEnvironmentDetails = exports.AwsElasticBeanstalkEnvironmentTier = exports.AwsElasticBeanstalkEnvironmentOptionSetting = exports.AwsElasticBeanstalkEnvironmentEnvironmentLink = exports.AwsEc2VpcDetails = exports.CidrBlockAssociation = exports.AwsEc2VolumeDetails = exports.AwsEc2VolumeAttachment = void 0;
exports.AwsSecretsManagerSecretDetails = exports.AwsSecretsManagerSecretRotationRules = exports.AwsS3ObjectDetails = exports.AwsS3BucketDetails = exports.AwsS3BucketServerSideEncryptionConfiguration = exports.AwsS3BucketServerSideEncryptionRule = exports.AwsS3BucketServerSideEncryptionByDefault = exports.AwsS3AccountPublicAccessBlockDetails = exports.AwsRedshiftClusterDetails = exports.AwsRedshiftClusterVpcSecurityGroup = exports.AwsRedshiftClusterRestoreStatus = exports.AwsRedshiftClusterResizeInfo = exports.AwsRedshiftClusterPendingModifiedValues = exports.AwsRedshiftClusterIamRole = exports.AwsRedshiftClusterHsmStatus = exports.AwsRedshiftClusterEndpoint = exports.AwsRedshiftClusterElasticIpStatus = exports.AwsRedshiftClusterDeferredMaintenanceWindow = exports.AwsRedshiftClusterClusterSnapshotCopyStatus = exports.AwsRedshiftClusterClusterSecurityGroup = exports.AwsRedshiftClusterClusterParameterGroup = exports.AwsRedshiftClusterClusterParameterStatus = exports.AwsRedshiftClusterClusterNode = exports.AwsRdsDbSnapshotDetails = exports.AwsRdsDbInstanceDetails = exports.AwsRdsDbStatusInfo = exports.AwsRdsDbPendingModifiedValues = exports.AwsRdsDbProcessorFeature = exports.AwsRdsPendingCloudWatchLogsExports = exports.AwsRdsDbOptionGroupMembership = exports.AwsRdsDbInstanceEndpoint = exports.AwsRdsDbSubnetGroup = exports.AwsRdsDbSubnetGroupSubnet = exports.AwsRdsDbSubnetGroupSubnetAvailabilityZone = exports.AwsRdsDbParameterGroup = exports.AwsRdsDbInstanceAssociatedRole = exports.AwsRdsDbClusterSnapshotDetails = exports.AwsRdsDbClusterDetails = exports.AwsRdsDbInstanceVpcSecurityGroup = exports.AwsRdsDbDomainMembership = exports.AwsRdsDbClusterOptionGroupMembership = exports.AwsRdsDbClusterMember = exports.AwsRdsDbClusterAssociatedRole = exports.AwsLambdaLayerVersionDetails = exports.AwsLambdaFunctionDetails = exports.AwsLambdaFunctionVpcConfig = exports.AwsLambdaFunctionTracingConfig = exports.AwsLambdaFunctionLayer = exports.AwsLambdaFunctionEnvironment = exports.AwsLambdaFunctionEnvironmentError = void 0;
exports.Severity = exports.Resource = exports.Partition = exports.ResourceDetails = exports.ContainerDetails = exports.AwsWafWebAclDetails = exports.AwsWafWebAclRule = exports.WafOverrideAction = exports.WafExcludedRule = exports.WafAction = exports.AwsSsmPatchComplianceDetails = exports.AwsSsmPatch = exports.AwsSsmComplianceSummary = exports.AwsSqsQueueDetails = exports.AwsSnsTopicDetails = exports.AwsSnsTopicSubscription = exports.DataClassificationDetails = exports.ClassificationResult = exports.ClassificationStatus = exports.SensitiveDataResult = exports.SensitiveDataDetections = exports.CustomDataIdentifiersResult = exports.CustomDataIdentifiersDetections = exports.Occurrences = exports._Record = exports.Page = exports.Range = exports.Cell = exports.Remediation = exports.Recommendation = exports.RecordState = exports.ProcessDetails = exports.PatchSummary = exports.Note = exports.NetworkPathComponent = exports.NetworkHeader = exports.NetworkPathComponentDetails = exports.Network = exports.PortRange = exports.NetworkDirection = exports.Malware = exports.MalwareType = exports.MalwareState = exports.FindingProviderFields = exports.FindingProviderSeverity = exports.SeverityLabel = exports.RelatedFinding = exports.Compliance = exports.StatusReason = exports.ComplianceStatus = void 0;
exports.DeclineInvitationsRequest = exports.CreateMembersResponse = exports.Result = exports.CreateMembersRequest = exports.CreateInsightResponse = exports.CreateInsightRequest = exports.ResourceConflictException = exports.CreateActionTargetResponse = exports.CreateActionTargetRequest = exports.ControlStatus = exports.BatchUpdateFindingsResponse = exports.BatchUpdateFindingsUnprocessedFinding = exports.BatchUpdateFindingsRequest = exports.WorkflowUpdate = exports.SeverityUpdate = exports.NoteUpdate = exports.BatchImportFindingsResponse = exports.ImportFindingsError = exports.BatchImportFindingsRequest = exports.BatchEnableStandardsResponse = exports.BatchEnableStandardsRequest = exports.StandardsSubscriptionRequest = exports.BatchDisableStandardsResponse = exports.StandardsSubscription = exports.StandardsStatus = exports.BatchDisableStandardsRequest = exports.AwsSecurityFindingIdentifier = exports.AwsSecurityFindingFilters = exports.MapFilter = exports.MapFilterComparison = exports.IpFilter = exports.KeywordFilter = exports.DateFilter = exports.DateRange = exports.DateRangeUnit = exports.NumberFilter = exports.StringFilter = exports.StringFilterComparison = exports.AwsSecurityFinding = exports.WorkflowState = exports.Workflow = exports.WorkflowStatus = exports.Vulnerability = exports.SoftwarePackage = exports.VulnerabilityVendor = exports.Cvss = exports.VerificationState = exports.ThreatIntelIndicator = exports.ThreatIntelIndicatorType = exports.ThreatIntelIndicatorCategory = void 0;
var AcceptAdministratorInvitationRequest;
(function (AcceptAdministratorInvitationRequest) {
    /**
     * @internal
     */
    AcceptAdministratorInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptAdministratorInvitationRequest = exports.AcceptAdministratorInvitationRequest || (exports.AcceptAdministratorInvitationRequest = {}));
var AcceptAdministratorInvitationResponse;
(function (AcceptAdministratorInvitationResponse) {
    /**
     * @internal
     */
    AcceptAdministratorInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptAdministratorInvitationResponse = exports.AcceptAdministratorInvitationResponse || (exports.AcceptAdministratorInvitationResponse = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidAccessException;
(function (InvalidAccessException) {
    /**
     * @internal
     */
    InvalidAccessException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAccessException = exports.InvalidAccessException || (exports.InvalidAccessException = {}));
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
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    /**
     * @internal
     */
    AcceptInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationRequest = exports.AcceptInvitationRequest || (exports.AcceptInvitationRequest = {}));
var AcceptInvitationResponse;
(function (AcceptInvitationResponse) {
    /**
     * @internal
     */
    AcceptInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationResponse = exports.AcceptInvitationResponse || (exports.AcceptInvitationResponse = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccountDetails;
(function (AccountDetails) {
    /**
     * @internal
     */
    AccountDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountDetails = exports.AccountDetails || (exports.AccountDetails = {}));
var AwsApiCallActionDomainDetails;
(function (AwsApiCallActionDomainDetails) {
    /**
     * @internal
     */
    AwsApiCallActionDomainDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiCallActionDomainDetails = exports.AwsApiCallActionDomainDetails || (exports.AwsApiCallActionDomainDetails = {}));
var City;
(function (City) {
    /**
     * @internal
     */
    City.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(City = exports.City || (exports.City = {}));
var Country;
(function (Country) {
    /**
     * @internal
     */
    Country.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Country = exports.Country || (exports.Country = {}));
var GeoLocation;
(function (GeoLocation) {
    /**
     * @internal
     */
    GeoLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoLocation = exports.GeoLocation || (exports.GeoLocation = {}));
var IpOrganizationDetails;
(function (IpOrganizationDetails) {
    /**
     * @internal
     */
    IpOrganizationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpOrganizationDetails = exports.IpOrganizationDetails || (exports.IpOrganizationDetails = {}));
var ActionRemoteIpDetails;
(function (ActionRemoteIpDetails) {
    /**
     * @internal
     */
    ActionRemoteIpDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionRemoteIpDetails = exports.ActionRemoteIpDetails || (exports.ActionRemoteIpDetails = {}));
var AwsApiCallAction;
(function (AwsApiCallAction) {
    /**
     * @internal
     */
    AwsApiCallAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiCallAction = exports.AwsApiCallAction || (exports.AwsApiCallAction = {}));
var DnsRequestAction;
(function (DnsRequestAction) {
    /**
     * @internal
     */
    DnsRequestAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsRequestAction = exports.DnsRequestAction || (exports.DnsRequestAction = {}));
var ActionLocalPortDetails;
(function (ActionLocalPortDetails) {
    /**
     * @internal
     */
    ActionLocalPortDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionLocalPortDetails = exports.ActionLocalPortDetails || (exports.ActionLocalPortDetails = {}));
var ActionRemotePortDetails;
(function (ActionRemotePortDetails) {
    /**
     * @internal
     */
    ActionRemotePortDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionRemotePortDetails = exports.ActionRemotePortDetails || (exports.ActionRemotePortDetails = {}));
var NetworkConnectionAction;
(function (NetworkConnectionAction) {
    /**
     * @internal
     */
    NetworkConnectionAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConnectionAction = exports.NetworkConnectionAction || (exports.NetworkConnectionAction = {}));
var ActionLocalIpDetails;
(function (ActionLocalIpDetails) {
    /**
     * @internal
     */
    ActionLocalIpDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionLocalIpDetails = exports.ActionLocalIpDetails || (exports.ActionLocalIpDetails = {}));
var PortProbeDetail;
(function (PortProbeDetail) {
    /**
     * @internal
     */
    PortProbeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortProbeDetail = exports.PortProbeDetail || (exports.PortProbeDetail = {}));
var PortProbeAction;
(function (PortProbeAction) {
    /**
     * @internal
     */
    PortProbeAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortProbeAction = exports.PortProbeAction || (exports.PortProbeAction = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var ActionTarget;
(function (ActionTarget) {
    /**
     * @internal
     */
    ActionTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTarget = exports.ActionTarget || (exports.ActionTarget = {}));
var AdminStatus;
(function (AdminStatus) {
    AdminStatus["DISABLE_IN_PROGRESS"] = "DISABLE_IN_PROGRESS";
    AdminStatus["ENABLED"] = "ENABLED";
})(AdminStatus = exports.AdminStatus || (exports.AdminStatus = {}));
var AdminAccount;
(function (AdminAccount) {
    /**
     * @internal
     */
    AdminAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminAccount = exports.AdminAccount || (exports.AdminAccount = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var AwsApiGatewayAccessLogSettings;
(function (AwsApiGatewayAccessLogSettings) {
    /**
     * @internal
     */
    AwsApiGatewayAccessLogSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayAccessLogSettings = exports.AwsApiGatewayAccessLogSettings || (exports.AwsApiGatewayAccessLogSettings = {}));
var AwsApiGatewayCanarySettings;
(function (AwsApiGatewayCanarySettings) {
    /**
     * @internal
     */
    AwsApiGatewayCanarySettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayCanarySettings = exports.AwsApiGatewayCanarySettings || (exports.AwsApiGatewayCanarySettings = {}));
var AwsApiGatewayEndpointConfiguration;
(function (AwsApiGatewayEndpointConfiguration) {
    /**
     * @internal
     */
    AwsApiGatewayEndpointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayEndpointConfiguration = exports.AwsApiGatewayEndpointConfiguration || (exports.AwsApiGatewayEndpointConfiguration = {}));
var AwsApiGatewayMethodSettings;
(function (AwsApiGatewayMethodSettings) {
    /**
     * @internal
     */
    AwsApiGatewayMethodSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayMethodSettings = exports.AwsApiGatewayMethodSettings || (exports.AwsApiGatewayMethodSettings = {}));
var AwsApiGatewayRestApiDetails;
(function (AwsApiGatewayRestApiDetails) {
    /**
     * @internal
     */
    AwsApiGatewayRestApiDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayRestApiDetails = exports.AwsApiGatewayRestApiDetails || (exports.AwsApiGatewayRestApiDetails = {}));
var AwsApiGatewayStageDetails;
(function (AwsApiGatewayStageDetails) {
    /**
     * @internal
     */
    AwsApiGatewayStageDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayStageDetails = exports.AwsApiGatewayStageDetails || (exports.AwsApiGatewayStageDetails = {}));
var AwsCorsConfiguration;
(function (AwsCorsConfiguration) {
    /**
     * @internal
     */
    AwsCorsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCorsConfiguration = exports.AwsCorsConfiguration || (exports.AwsCorsConfiguration = {}));
var AwsApiGatewayV2ApiDetails;
(function (AwsApiGatewayV2ApiDetails) {
    /**
     * @internal
     */
    AwsApiGatewayV2ApiDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayV2ApiDetails = exports.AwsApiGatewayV2ApiDetails || (exports.AwsApiGatewayV2ApiDetails = {}));
var AwsApiGatewayV2RouteSettings;
(function (AwsApiGatewayV2RouteSettings) {
    /**
     * @internal
     */
    AwsApiGatewayV2RouteSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayV2RouteSettings = exports.AwsApiGatewayV2RouteSettings || (exports.AwsApiGatewayV2RouteSettings = {}));
var AwsApiGatewayV2StageDetails;
(function (AwsApiGatewayV2StageDetails) {
    /**
     * @internal
     */
    AwsApiGatewayV2StageDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiGatewayV2StageDetails = exports.AwsApiGatewayV2StageDetails || (exports.AwsApiGatewayV2StageDetails = {}));
var AwsAutoScalingAutoScalingGroupDetails;
(function (AwsAutoScalingAutoScalingGroupDetails) {
    /**
     * @internal
     */
    AwsAutoScalingAutoScalingGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsAutoScalingAutoScalingGroupDetails = exports.AwsAutoScalingAutoScalingGroupDetails || (exports.AwsAutoScalingAutoScalingGroupDetails = {}));
var AwsCertificateManagerCertificateResourceRecord;
(function (AwsCertificateManagerCertificateResourceRecord) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateResourceRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateResourceRecord = exports.AwsCertificateManagerCertificateResourceRecord || (exports.AwsCertificateManagerCertificateResourceRecord = {}));
var AwsCertificateManagerCertificateDomainValidationOption;
(function (AwsCertificateManagerCertificateDomainValidationOption) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateDomainValidationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateDomainValidationOption = exports.AwsCertificateManagerCertificateDomainValidationOption || (exports.AwsCertificateManagerCertificateDomainValidationOption = {}));
var AwsCertificateManagerCertificateExtendedKeyUsage;
(function (AwsCertificateManagerCertificateExtendedKeyUsage) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateExtendedKeyUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateExtendedKeyUsage = exports.AwsCertificateManagerCertificateExtendedKeyUsage || (exports.AwsCertificateManagerCertificateExtendedKeyUsage = {}));
var AwsCertificateManagerCertificateKeyUsage;
(function (AwsCertificateManagerCertificateKeyUsage) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateKeyUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateKeyUsage = exports.AwsCertificateManagerCertificateKeyUsage || (exports.AwsCertificateManagerCertificateKeyUsage = {}));
var AwsCertificateManagerCertificateOptions;
(function (AwsCertificateManagerCertificateOptions) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateOptions = exports.AwsCertificateManagerCertificateOptions || (exports.AwsCertificateManagerCertificateOptions = {}));
var AwsCertificateManagerCertificateRenewalSummary;
(function (AwsCertificateManagerCertificateRenewalSummary) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateRenewalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateRenewalSummary = exports.AwsCertificateManagerCertificateRenewalSummary || (exports.AwsCertificateManagerCertificateRenewalSummary = {}));
var AwsCertificateManagerCertificateDetails;
(function (AwsCertificateManagerCertificateDetails) {
    /**
     * @internal
     */
    AwsCertificateManagerCertificateDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCertificateManagerCertificateDetails = exports.AwsCertificateManagerCertificateDetails || (exports.AwsCertificateManagerCertificateDetails = {}));
var AwsCloudFrontDistributionCacheBehavior;
(function (AwsCloudFrontDistributionCacheBehavior) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionCacheBehavior.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionCacheBehavior = exports.AwsCloudFrontDistributionCacheBehavior || (exports.AwsCloudFrontDistributionCacheBehavior = {}));
var AwsCloudFrontDistributionCacheBehaviors;
(function (AwsCloudFrontDistributionCacheBehaviors) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionCacheBehaviors.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionCacheBehaviors = exports.AwsCloudFrontDistributionCacheBehaviors || (exports.AwsCloudFrontDistributionCacheBehaviors = {}));
var AwsCloudFrontDistributionDefaultCacheBehavior;
(function (AwsCloudFrontDistributionDefaultCacheBehavior) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionDefaultCacheBehavior.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionDefaultCacheBehavior = exports.AwsCloudFrontDistributionDefaultCacheBehavior || (exports.AwsCloudFrontDistributionDefaultCacheBehavior = {}));
var AwsCloudFrontDistributionLogging;
(function (AwsCloudFrontDistributionLogging) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionLogging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionLogging = exports.AwsCloudFrontDistributionLogging || (exports.AwsCloudFrontDistributionLogging = {}));
var AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
(function (AwsCloudFrontDistributionOriginGroupFailoverStatusCodes) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginGroupFailoverStatusCodes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = exports.AwsCloudFrontDistributionOriginGroupFailoverStatusCodes || (exports.AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = {}));
var AwsCloudFrontDistributionOriginGroupFailover;
(function (AwsCloudFrontDistributionOriginGroupFailover) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginGroupFailover.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginGroupFailover = exports.AwsCloudFrontDistributionOriginGroupFailover || (exports.AwsCloudFrontDistributionOriginGroupFailover = {}));
var AwsCloudFrontDistributionOriginGroup;
(function (AwsCloudFrontDistributionOriginGroup) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginGroup = exports.AwsCloudFrontDistributionOriginGroup || (exports.AwsCloudFrontDistributionOriginGroup = {}));
var AwsCloudFrontDistributionOriginGroups;
(function (AwsCloudFrontDistributionOriginGroups) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginGroups.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginGroups = exports.AwsCloudFrontDistributionOriginGroups || (exports.AwsCloudFrontDistributionOriginGroups = {}));
var AwsCloudFrontDistributionOriginS3OriginConfig;
(function (AwsCloudFrontDistributionOriginS3OriginConfig) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginS3OriginConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginS3OriginConfig = exports.AwsCloudFrontDistributionOriginS3OriginConfig || (exports.AwsCloudFrontDistributionOriginS3OriginConfig = {}));
var AwsCloudFrontDistributionOriginItem;
(function (AwsCloudFrontDistributionOriginItem) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOriginItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOriginItem = exports.AwsCloudFrontDistributionOriginItem || (exports.AwsCloudFrontDistributionOriginItem = {}));
var AwsCloudFrontDistributionOrigins;
(function (AwsCloudFrontDistributionOrigins) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionOrigins.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionOrigins = exports.AwsCloudFrontDistributionOrigins || (exports.AwsCloudFrontDistributionOrigins = {}));
var AwsCloudFrontDistributionDetails;
(function (AwsCloudFrontDistributionDetails) {
    /**
     * @internal
     */
    AwsCloudFrontDistributionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudFrontDistributionDetails = exports.AwsCloudFrontDistributionDetails || (exports.AwsCloudFrontDistributionDetails = {}));
var AwsCloudTrailTrailDetails;
(function (AwsCloudTrailTrailDetails) {
    /**
     * @internal
     */
    AwsCloudTrailTrailDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCloudTrailTrailDetails = exports.AwsCloudTrailTrailDetails || (exports.AwsCloudTrailTrailDetails = {}));
var AwsCodeBuildProjectEnvironmentRegistryCredential;
(function (AwsCodeBuildProjectEnvironmentRegistryCredential) {
    /**
     * @internal
     */
    AwsCodeBuildProjectEnvironmentRegistryCredential.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCodeBuildProjectEnvironmentRegistryCredential = exports.AwsCodeBuildProjectEnvironmentRegistryCredential || (exports.AwsCodeBuildProjectEnvironmentRegistryCredential = {}));
var AwsCodeBuildProjectEnvironment;
(function (AwsCodeBuildProjectEnvironment) {
    /**
     * @internal
     */
    AwsCodeBuildProjectEnvironment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCodeBuildProjectEnvironment = exports.AwsCodeBuildProjectEnvironment || (exports.AwsCodeBuildProjectEnvironment = {}));
var AwsCodeBuildProjectSource;
(function (AwsCodeBuildProjectSource) {
    /**
     * @internal
     */
    AwsCodeBuildProjectSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCodeBuildProjectSource = exports.AwsCodeBuildProjectSource || (exports.AwsCodeBuildProjectSource = {}));
var AwsCodeBuildProjectVpcConfig;
(function (AwsCodeBuildProjectVpcConfig) {
    /**
     * @internal
     */
    AwsCodeBuildProjectVpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCodeBuildProjectVpcConfig = exports.AwsCodeBuildProjectVpcConfig || (exports.AwsCodeBuildProjectVpcConfig = {}));
var AwsCodeBuildProjectDetails;
(function (AwsCodeBuildProjectDetails) {
    /**
     * @internal
     */
    AwsCodeBuildProjectDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCodeBuildProjectDetails = exports.AwsCodeBuildProjectDetails || (exports.AwsCodeBuildProjectDetails = {}));
var AwsDynamoDbTableAttributeDefinition;
(function (AwsDynamoDbTableAttributeDefinition) {
    /**
     * @internal
     */
    AwsDynamoDbTableAttributeDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableAttributeDefinition = exports.AwsDynamoDbTableAttributeDefinition || (exports.AwsDynamoDbTableAttributeDefinition = {}));
var AwsDynamoDbTableBillingModeSummary;
(function (AwsDynamoDbTableBillingModeSummary) {
    /**
     * @internal
     */
    AwsDynamoDbTableBillingModeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableBillingModeSummary = exports.AwsDynamoDbTableBillingModeSummary || (exports.AwsDynamoDbTableBillingModeSummary = {}));
var AwsDynamoDbTableKeySchema;
(function (AwsDynamoDbTableKeySchema) {
    /**
     * @internal
     */
    AwsDynamoDbTableKeySchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableKeySchema = exports.AwsDynamoDbTableKeySchema || (exports.AwsDynamoDbTableKeySchema = {}));
var AwsDynamoDbTableProjection;
(function (AwsDynamoDbTableProjection) {
    /**
     * @internal
     */
    AwsDynamoDbTableProjection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableProjection = exports.AwsDynamoDbTableProjection || (exports.AwsDynamoDbTableProjection = {}));
var AwsDynamoDbTableProvisionedThroughput;
(function (AwsDynamoDbTableProvisionedThroughput) {
    /**
     * @internal
     */
    AwsDynamoDbTableProvisionedThroughput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableProvisionedThroughput = exports.AwsDynamoDbTableProvisionedThroughput || (exports.AwsDynamoDbTableProvisionedThroughput = {}));
var AwsDynamoDbTableGlobalSecondaryIndex;
(function (AwsDynamoDbTableGlobalSecondaryIndex) {
    /**
     * @internal
     */
    AwsDynamoDbTableGlobalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableGlobalSecondaryIndex = exports.AwsDynamoDbTableGlobalSecondaryIndex || (exports.AwsDynamoDbTableGlobalSecondaryIndex = {}));
var AwsDynamoDbTableLocalSecondaryIndex;
(function (AwsDynamoDbTableLocalSecondaryIndex) {
    /**
     * @internal
     */
    AwsDynamoDbTableLocalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableLocalSecondaryIndex = exports.AwsDynamoDbTableLocalSecondaryIndex || (exports.AwsDynamoDbTableLocalSecondaryIndex = {}));
var AwsDynamoDbTableProvisionedThroughputOverride;
(function (AwsDynamoDbTableProvisionedThroughputOverride) {
    /**
     * @internal
     */
    AwsDynamoDbTableProvisionedThroughputOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableProvisionedThroughputOverride = exports.AwsDynamoDbTableProvisionedThroughputOverride || (exports.AwsDynamoDbTableProvisionedThroughputOverride = {}));
var AwsDynamoDbTableReplicaGlobalSecondaryIndex;
(function (AwsDynamoDbTableReplicaGlobalSecondaryIndex) {
    /**
     * @internal
     */
    AwsDynamoDbTableReplicaGlobalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableReplicaGlobalSecondaryIndex = exports.AwsDynamoDbTableReplicaGlobalSecondaryIndex || (exports.AwsDynamoDbTableReplicaGlobalSecondaryIndex = {}));
var AwsDynamoDbTableReplica;
(function (AwsDynamoDbTableReplica) {
    /**
     * @internal
     */
    AwsDynamoDbTableReplica.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableReplica = exports.AwsDynamoDbTableReplica || (exports.AwsDynamoDbTableReplica = {}));
var AwsDynamoDbTableRestoreSummary;
(function (AwsDynamoDbTableRestoreSummary) {
    /**
     * @internal
     */
    AwsDynamoDbTableRestoreSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableRestoreSummary = exports.AwsDynamoDbTableRestoreSummary || (exports.AwsDynamoDbTableRestoreSummary = {}));
var AwsDynamoDbTableSseDescription;
(function (AwsDynamoDbTableSseDescription) {
    /**
     * @internal
     */
    AwsDynamoDbTableSseDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableSseDescription = exports.AwsDynamoDbTableSseDescription || (exports.AwsDynamoDbTableSseDescription = {}));
var AwsDynamoDbTableStreamSpecification;
(function (AwsDynamoDbTableStreamSpecification) {
    /**
     * @internal
     */
    AwsDynamoDbTableStreamSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableStreamSpecification = exports.AwsDynamoDbTableStreamSpecification || (exports.AwsDynamoDbTableStreamSpecification = {}));
var AwsDynamoDbTableDetails;
(function (AwsDynamoDbTableDetails) {
    /**
     * @internal
     */
    AwsDynamoDbTableDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsDynamoDbTableDetails = exports.AwsDynamoDbTableDetails || (exports.AwsDynamoDbTableDetails = {}));
var AwsEc2EipDetails;
(function (AwsEc2EipDetails) {
    /**
     * @internal
     */
    AwsEc2EipDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2EipDetails = exports.AwsEc2EipDetails || (exports.AwsEc2EipDetails = {}));
var AwsEc2InstanceDetails;
(function (AwsEc2InstanceDetails) {
    /**
     * @internal
     */
    AwsEc2InstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2InstanceDetails = exports.AwsEc2InstanceDetails || (exports.AwsEc2InstanceDetails = {}));
var AwsEc2NetworkAclAssociation;
(function (AwsEc2NetworkAclAssociation) {
    /**
     * @internal
     */
    AwsEc2NetworkAclAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkAclAssociation = exports.AwsEc2NetworkAclAssociation || (exports.AwsEc2NetworkAclAssociation = {}));
var IcmpTypeCode;
(function (IcmpTypeCode) {
    /**
     * @internal
     */
    IcmpTypeCode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IcmpTypeCode = exports.IcmpTypeCode || (exports.IcmpTypeCode = {}));
var PortRangeFromTo;
(function (PortRangeFromTo) {
    /**
     * @internal
     */
    PortRangeFromTo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRangeFromTo = exports.PortRangeFromTo || (exports.PortRangeFromTo = {}));
var AwsEc2NetworkAclEntry;
(function (AwsEc2NetworkAclEntry) {
    /**
     * @internal
     */
    AwsEc2NetworkAclEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkAclEntry = exports.AwsEc2NetworkAclEntry || (exports.AwsEc2NetworkAclEntry = {}));
var AwsEc2NetworkAclDetails;
(function (AwsEc2NetworkAclDetails) {
    /**
     * @internal
     */
    AwsEc2NetworkAclDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkAclDetails = exports.AwsEc2NetworkAclDetails || (exports.AwsEc2NetworkAclDetails = {}));
var AwsEc2NetworkInterfaceAttachment;
(function (AwsEc2NetworkInterfaceAttachment) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfaceAttachment = exports.AwsEc2NetworkInterfaceAttachment || (exports.AwsEc2NetworkInterfaceAttachment = {}));
var AwsEc2NetworkInterfaceIpV6AddressDetail;
(function (AwsEc2NetworkInterfaceIpV6AddressDetail) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceIpV6AddressDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfaceIpV6AddressDetail = exports.AwsEc2NetworkInterfaceIpV6AddressDetail || (exports.AwsEc2NetworkInterfaceIpV6AddressDetail = {}));
var AwsEc2NetworkInterfacePrivateIpAddressDetail;
(function (AwsEc2NetworkInterfacePrivateIpAddressDetail) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfacePrivateIpAddressDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfacePrivateIpAddressDetail = exports.AwsEc2NetworkInterfacePrivateIpAddressDetail || (exports.AwsEc2NetworkInterfacePrivateIpAddressDetail = {}));
var AwsEc2NetworkInterfaceSecurityGroup;
(function (AwsEc2NetworkInterfaceSecurityGroup) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfaceSecurityGroup = exports.AwsEc2NetworkInterfaceSecurityGroup || (exports.AwsEc2NetworkInterfaceSecurityGroup = {}));
var AwsEc2NetworkInterfaceDetails;
(function (AwsEc2NetworkInterfaceDetails) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfaceDetails = exports.AwsEc2NetworkInterfaceDetails || (exports.AwsEc2NetworkInterfaceDetails = {}));
var AwsEc2SecurityGroupIpRange;
(function (AwsEc2SecurityGroupIpRange) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupIpRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupIpRange = exports.AwsEc2SecurityGroupIpRange || (exports.AwsEc2SecurityGroupIpRange = {}));
var AwsEc2SecurityGroupIpv6Range;
(function (AwsEc2SecurityGroupIpv6Range) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupIpv6Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupIpv6Range = exports.AwsEc2SecurityGroupIpv6Range || (exports.AwsEc2SecurityGroupIpv6Range = {}));
var AwsEc2SecurityGroupPrefixListId;
(function (AwsEc2SecurityGroupPrefixListId) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupPrefixListId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupPrefixListId = exports.AwsEc2SecurityGroupPrefixListId || (exports.AwsEc2SecurityGroupPrefixListId = {}));
var AwsEc2SecurityGroupUserIdGroupPair;
(function (AwsEc2SecurityGroupUserIdGroupPair) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupUserIdGroupPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupUserIdGroupPair = exports.AwsEc2SecurityGroupUserIdGroupPair || (exports.AwsEc2SecurityGroupUserIdGroupPair = {}));
var AwsEc2SecurityGroupIpPermission;
(function (AwsEc2SecurityGroupIpPermission) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupIpPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupIpPermission = exports.AwsEc2SecurityGroupIpPermission || (exports.AwsEc2SecurityGroupIpPermission = {}));
var AwsEc2SecurityGroupDetails;
(function (AwsEc2SecurityGroupDetails) {
    /**
     * @internal
     */
    AwsEc2SecurityGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SecurityGroupDetails = exports.AwsEc2SecurityGroupDetails || (exports.AwsEc2SecurityGroupDetails = {}));
var Ipv6CidrBlockAssociation;
(function (Ipv6CidrBlockAssociation) {
    /**
     * @internal
     */
    Ipv6CidrBlockAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ipv6CidrBlockAssociation = exports.Ipv6CidrBlockAssociation || (exports.Ipv6CidrBlockAssociation = {}));
var AwsEc2SubnetDetails;
(function (AwsEc2SubnetDetails) {
    /**
     * @internal
     */
    AwsEc2SubnetDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2SubnetDetails = exports.AwsEc2SubnetDetails || (exports.AwsEc2SubnetDetails = {}));
var AwsEc2VolumeAttachment;
(function (AwsEc2VolumeAttachment) {
    /**
     * @internal
     */
    AwsEc2VolumeAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2VolumeAttachment = exports.AwsEc2VolumeAttachment || (exports.AwsEc2VolumeAttachment = {}));
var AwsEc2VolumeDetails;
(function (AwsEc2VolumeDetails) {
    /**
     * @internal
     */
    AwsEc2VolumeDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2VolumeDetails = exports.AwsEc2VolumeDetails || (exports.AwsEc2VolumeDetails = {}));
var CidrBlockAssociation;
(function (CidrBlockAssociation) {
    /**
     * @internal
     */
    CidrBlockAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CidrBlockAssociation = exports.CidrBlockAssociation || (exports.CidrBlockAssociation = {}));
var AwsEc2VpcDetails;
(function (AwsEc2VpcDetails) {
    /**
     * @internal
     */
    AwsEc2VpcDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2VpcDetails = exports.AwsEc2VpcDetails || (exports.AwsEc2VpcDetails = {}));
var AwsElasticBeanstalkEnvironmentEnvironmentLink;
(function (AwsElasticBeanstalkEnvironmentEnvironmentLink) {
    /**
     * @internal
     */
    AwsElasticBeanstalkEnvironmentEnvironmentLink.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticBeanstalkEnvironmentEnvironmentLink = exports.AwsElasticBeanstalkEnvironmentEnvironmentLink || (exports.AwsElasticBeanstalkEnvironmentEnvironmentLink = {}));
var AwsElasticBeanstalkEnvironmentOptionSetting;
(function (AwsElasticBeanstalkEnvironmentOptionSetting) {
    /**
     * @internal
     */
    AwsElasticBeanstalkEnvironmentOptionSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticBeanstalkEnvironmentOptionSetting = exports.AwsElasticBeanstalkEnvironmentOptionSetting || (exports.AwsElasticBeanstalkEnvironmentOptionSetting = {}));
var AwsElasticBeanstalkEnvironmentTier;
(function (AwsElasticBeanstalkEnvironmentTier) {
    /**
     * @internal
     */
    AwsElasticBeanstalkEnvironmentTier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticBeanstalkEnvironmentTier = exports.AwsElasticBeanstalkEnvironmentTier || (exports.AwsElasticBeanstalkEnvironmentTier = {}));
var AwsElasticBeanstalkEnvironmentDetails;
(function (AwsElasticBeanstalkEnvironmentDetails) {
    /**
     * @internal
     */
    AwsElasticBeanstalkEnvironmentDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticBeanstalkEnvironmentDetails = exports.AwsElasticBeanstalkEnvironmentDetails || (exports.AwsElasticBeanstalkEnvironmentDetails = {}));
var AwsElasticsearchDomainDomainEndpointOptions;
(function (AwsElasticsearchDomainDomainEndpointOptions) {
    /**
     * @internal
     */
    AwsElasticsearchDomainDomainEndpointOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticsearchDomainDomainEndpointOptions = exports.AwsElasticsearchDomainDomainEndpointOptions || (exports.AwsElasticsearchDomainDomainEndpointOptions = {}));
var AwsElasticsearchDomainEncryptionAtRestOptions;
(function (AwsElasticsearchDomainEncryptionAtRestOptions) {
    /**
     * @internal
     */
    AwsElasticsearchDomainEncryptionAtRestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticsearchDomainEncryptionAtRestOptions = exports.AwsElasticsearchDomainEncryptionAtRestOptions || (exports.AwsElasticsearchDomainEncryptionAtRestOptions = {}));
var AwsElasticsearchDomainNodeToNodeEncryptionOptions;
(function (AwsElasticsearchDomainNodeToNodeEncryptionOptions) {
    /**
     * @internal
     */
    AwsElasticsearchDomainNodeToNodeEncryptionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticsearchDomainNodeToNodeEncryptionOptions = exports.AwsElasticsearchDomainNodeToNodeEncryptionOptions || (exports.AwsElasticsearchDomainNodeToNodeEncryptionOptions = {}));
var AwsElasticsearchDomainVPCOptions;
(function (AwsElasticsearchDomainVPCOptions) {
    /**
     * @internal
     */
    AwsElasticsearchDomainVPCOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticsearchDomainVPCOptions = exports.AwsElasticsearchDomainVPCOptions || (exports.AwsElasticsearchDomainVPCOptions = {}));
var AwsElasticsearchDomainDetails;
(function (AwsElasticsearchDomainDetails) {
    /**
     * @internal
     */
    AwsElasticsearchDomainDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElasticsearchDomainDetails = exports.AwsElasticsearchDomainDetails || (exports.AwsElasticsearchDomainDetails = {}));
var AwsElbAppCookieStickinessPolicy;
(function (AwsElbAppCookieStickinessPolicy) {
    /**
     * @internal
     */
    AwsElbAppCookieStickinessPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbAppCookieStickinessPolicy = exports.AwsElbAppCookieStickinessPolicy || (exports.AwsElbAppCookieStickinessPolicy = {}));
var AwsElbLbCookieStickinessPolicy;
(function (AwsElbLbCookieStickinessPolicy) {
    /**
     * @internal
     */
    AwsElbLbCookieStickinessPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLbCookieStickinessPolicy = exports.AwsElbLbCookieStickinessPolicy || (exports.AwsElbLbCookieStickinessPolicy = {}));
var AwsElbLoadBalancerAccessLog;
(function (AwsElbLoadBalancerAccessLog) {
    /**
     * @internal
     */
    AwsElbLoadBalancerAccessLog.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerAccessLog = exports.AwsElbLoadBalancerAccessLog || (exports.AwsElbLoadBalancerAccessLog = {}));
var AwsElbLoadBalancerConnectionDraining;
(function (AwsElbLoadBalancerConnectionDraining) {
    /**
     * @internal
     */
    AwsElbLoadBalancerConnectionDraining.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerConnectionDraining = exports.AwsElbLoadBalancerConnectionDraining || (exports.AwsElbLoadBalancerConnectionDraining = {}));
var AwsElbLoadBalancerConnectionSettings;
(function (AwsElbLoadBalancerConnectionSettings) {
    /**
     * @internal
     */
    AwsElbLoadBalancerConnectionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerConnectionSettings = exports.AwsElbLoadBalancerConnectionSettings || (exports.AwsElbLoadBalancerConnectionSettings = {}));
var AwsElbLoadBalancerCrossZoneLoadBalancing;
(function (AwsElbLoadBalancerCrossZoneLoadBalancing) {
    /**
     * @internal
     */
    AwsElbLoadBalancerCrossZoneLoadBalancing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerCrossZoneLoadBalancing = exports.AwsElbLoadBalancerCrossZoneLoadBalancing || (exports.AwsElbLoadBalancerCrossZoneLoadBalancing = {}));
var AwsElbLoadBalancerAttributes;
(function (AwsElbLoadBalancerAttributes) {
    /**
     * @internal
     */
    AwsElbLoadBalancerAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerAttributes = exports.AwsElbLoadBalancerAttributes || (exports.AwsElbLoadBalancerAttributes = {}));
var AwsElbLoadBalancerBackendServerDescription;
(function (AwsElbLoadBalancerBackendServerDescription) {
    /**
     * @internal
     */
    AwsElbLoadBalancerBackendServerDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerBackendServerDescription = exports.AwsElbLoadBalancerBackendServerDescription || (exports.AwsElbLoadBalancerBackendServerDescription = {}));
var AwsElbLoadBalancerHealthCheck;
(function (AwsElbLoadBalancerHealthCheck) {
    /**
     * @internal
     */
    AwsElbLoadBalancerHealthCheck.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerHealthCheck = exports.AwsElbLoadBalancerHealthCheck || (exports.AwsElbLoadBalancerHealthCheck = {}));
var AwsElbLoadBalancerInstance;
(function (AwsElbLoadBalancerInstance) {
    /**
     * @internal
     */
    AwsElbLoadBalancerInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerInstance = exports.AwsElbLoadBalancerInstance || (exports.AwsElbLoadBalancerInstance = {}));
var AwsElbLoadBalancerListener;
(function (AwsElbLoadBalancerListener) {
    /**
     * @internal
     */
    AwsElbLoadBalancerListener.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerListener = exports.AwsElbLoadBalancerListener || (exports.AwsElbLoadBalancerListener = {}));
var AwsElbLoadBalancerListenerDescription;
(function (AwsElbLoadBalancerListenerDescription) {
    /**
     * @internal
     */
    AwsElbLoadBalancerListenerDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerListenerDescription = exports.AwsElbLoadBalancerListenerDescription || (exports.AwsElbLoadBalancerListenerDescription = {}));
var AwsElbLoadBalancerPolicies;
(function (AwsElbLoadBalancerPolicies) {
    /**
     * @internal
     */
    AwsElbLoadBalancerPolicies.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerPolicies = exports.AwsElbLoadBalancerPolicies || (exports.AwsElbLoadBalancerPolicies = {}));
var AwsElbLoadBalancerSourceSecurityGroup;
(function (AwsElbLoadBalancerSourceSecurityGroup) {
    /**
     * @internal
     */
    AwsElbLoadBalancerSourceSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerSourceSecurityGroup = exports.AwsElbLoadBalancerSourceSecurityGroup || (exports.AwsElbLoadBalancerSourceSecurityGroup = {}));
var AwsElbLoadBalancerDetails;
(function (AwsElbLoadBalancerDetails) {
    /**
     * @internal
     */
    AwsElbLoadBalancerDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbLoadBalancerDetails = exports.AwsElbLoadBalancerDetails || (exports.AwsElbLoadBalancerDetails = {}));
var LoadBalancerState;
(function (LoadBalancerState) {
    /**
     * @internal
     */
    LoadBalancerState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerState = exports.LoadBalancerState || (exports.LoadBalancerState = {}));
var AwsElbv2LoadBalancerDetails;
(function (AwsElbv2LoadBalancerDetails) {
    /**
     * @internal
     */
    AwsElbv2LoadBalancerDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsElbv2LoadBalancerDetails = exports.AwsElbv2LoadBalancerDetails || (exports.AwsElbv2LoadBalancerDetails = {}));
var AwsIamAccessKeySessionContextAttributes;
(function (AwsIamAccessKeySessionContextAttributes) {
    /**
     * @internal
     */
    AwsIamAccessKeySessionContextAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamAccessKeySessionContextAttributes = exports.AwsIamAccessKeySessionContextAttributes || (exports.AwsIamAccessKeySessionContextAttributes = {}));
var AwsIamAccessKeySessionContextSessionIssuer;
(function (AwsIamAccessKeySessionContextSessionIssuer) {
    /**
     * @internal
     */
    AwsIamAccessKeySessionContextSessionIssuer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamAccessKeySessionContextSessionIssuer = exports.AwsIamAccessKeySessionContextSessionIssuer || (exports.AwsIamAccessKeySessionContextSessionIssuer = {}));
var AwsIamAccessKeySessionContext;
(function (AwsIamAccessKeySessionContext) {
    /**
     * @internal
     */
    AwsIamAccessKeySessionContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamAccessKeySessionContext = exports.AwsIamAccessKeySessionContext || (exports.AwsIamAccessKeySessionContext = {}));
var AwsIamAccessKeyStatus;
(function (AwsIamAccessKeyStatus) {
    AwsIamAccessKeyStatus["ACTIVE"] = "Active";
    AwsIamAccessKeyStatus["INACTIVE"] = "Inactive";
})(AwsIamAccessKeyStatus = exports.AwsIamAccessKeyStatus || (exports.AwsIamAccessKeyStatus = {}));
var AwsIamAccessKeyDetails;
(function (AwsIamAccessKeyDetails) {
    /**
     * @internal
     */
    AwsIamAccessKeyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamAccessKeyDetails = exports.AwsIamAccessKeyDetails || (exports.AwsIamAccessKeyDetails = {}));
var AwsIamAttachedManagedPolicy;
(function (AwsIamAttachedManagedPolicy) {
    /**
     * @internal
     */
    AwsIamAttachedManagedPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamAttachedManagedPolicy = exports.AwsIamAttachedManagedPolicy || (exports.AwsIamAttachedManagedPolicy = {}));
var AwsIamGroupPolicy;
(function (AwsIamGroupPolicy) {
    /**
     * @internal
     */
    AwsIamGroupPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamGroupPolicy = exports.AwsIamGroupPolicy || (exports.AwsIamGroupPolicy = {}));
var AwsIamGroupDetails;
(function (AwsIamGroupDetails) {
    /**
     * @internal
     */
    AwsIamGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamGroupDetails = exports.AwsIamGroupDetails || (exports.AwsIamGroupDetails = {}));
var AwsIamInstanceProfileRole;
(function (AwsIamInstanceProfileRole) {
    /**
     * @internal
     */
    AwsIamInstanceProfileRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamInstanceProfileRole = exports.AwsIamInstanceProfileRole || (exports.AwsIamInstanceProfileRole = {}));
var AwsIamInstanceProfile;
(function (AwsIamInstanceProfile) {
    /**
     * @internal
     */
    AwsIamInstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamInstanceProfile = exports.AwsIamInstanceProfile || (exports.AwsIamInstanceProfile = {}));
var AwsIamPermissionsBoundary;
(function (AwsIamPermissionsBoundary) {
    /**
     * @internal
     */
    AwsIamPermissionsBoundary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamPermissionsBoundary = exports.AwsIamPermissionsBoundary || (exports.AwsIamPermissionsBoundary = {}));
var AwsIamPolicyVersion;
(function (AwsIamPolicyVersion) {
    /**
     * @internal
     */
    AwsIamPolicyVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamPolicyVersion = exports.AwsIamPolicyVersion || (exports.AwsIamPolicyVersion = {}));
var AwsIamPolicyDetails;
(function (AwsIamPolicyDetails) {
    /**
     * @internal
     */
    AwsIamPolicyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamPolicyDetails = exports.AwsIamPolicyDetails || (exports.AwsIamPolicyDetails = {}));
var AwsIamRolePolicy;
(function (AwsIamRolePolicy) {
    /**
     * @internal
     */
    AwsIamRolePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamRolePolicy = exports.AwsIamRolePolicy || (exports.AwsIamRolePolicy = {}));
var AwsIamRoleDetails;
(function (AwsIamRoleDetails) {
    /**
     * @internal
     */
    AwsIamRoleDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamRoleDetails = exports.AwsIamRoleDetails || (exports.AwsIamRoleDetails = {}));
var AwsIamUserPolicy;
(function (AwsIamUserPolicy) {
    /**
     * @internal
     */
    AwsIamUserPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamUserPolicy = exports.AwsIamUserPolicy || (exports.AwsIamUserPolicy = {}));
var AwsIamUserDetails;
(function (AwsIamUserDetails) {
    /**
     * @internal
     */
    AwsIamUserDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsIamUserDetails = exports.AwsIamUserDetails || (exports.AwsIamUserDetails = {}));
var AwsKmsKeyDetails;
(function (AwsKmsKeyDetails) {
    /**
     * @internal
     */
    AwsKmsKeyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsKmsKeyDetails = exports.AwsKmsKeyDetails || (exports.AwsKmsKeyDetails = {}));
var AwsLambdaFunctionCode;
(function (AwsLambdaFunctionCode) {
    /**
     * @internal
     */
    AwsLambdaFunctionCode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionCode = exports.AwsLambdaFunctionCode || (exports.AwsLambdaFunctionCode = {}));
var AwsLambdaFunctionDeadLetterConfig;
(function (AwsLambdaFunctionDeadLetterConfig) {
    /**
     * @internal
     */
    AwsLambdaFunctionDeadLetterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionDeadLetterConfig = exports.AwsLambdaFunctionDeadLetterConfig || (exports.AwsLambdaFunctionDeadLetterConfig = {}));
var AwsLambdaFunctionEnvironmentError;
(function (AwsLambdaFunctionEnvironmentError) {
    /**
     * @internal
     */
    AwsLambdaFunctionEnvironmentError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionEnvironmentError = exports.AwsLambdaFunctionEnvironmentError || (exports.AwsLambdaFunctionEnvironmentError = {}));
var AwsLambdaFunctionEnvironment;
(function (AwsLambdaFunctionEnvironment) {
    /**
     * @internal
     */
    AwsLambdaFunctionEnvironment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionEnvironment = exports.AwsLambdaFunctionEnvironment || (exports.AwsLambdaFunctionEnvironment = {}));
var AwsLambdaFunctionLayer;
(function (AwsLambdaFunctionLayer) {
    /**
     * @internal
     */
    AwsLambdaFunctionLayer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionLayer = exports.AwsLambdaFunctionLayer || (exports.AwsLambdaFunctionLayer = {}));
var AwsLambdaFunctionTracingConfig;
(function (AwsLambdaFunctionTracingConfig) {
    /**
     * @internal
     */
    AwsLambdaFunctionTracingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionTracingConfig = exports.AwsLambdaFunctionTracingConfig || (exports.AwsLambdaFunctionTracingConfig = {}));
var AwsLambdaFunctionVpcConfig;
(function (AwsLambdaFunctionVpcConfig) {
    /**
     * @internal
     */
    AwsLambdaFunctionVpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionVpcConfig = exports.AwsLambdaFunctionVpcConfig || (exports.AwsLambdaFunctionVpcConfig = {}));
var AwsLambdaFunctionDetails;
(function (AwsLambdaFunctionDetails) {
    /**
     * @internal
     */
    AwsLambdaFunctionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaFunctionDetails = exports.AwsLambdaFunctionDetails || (exports.AwsLambdaFunctionDetails = {}));
var AwsLambdaLayerVersionDetails;
(function (AwsLambdaLayerVersionDetails) {
    /**
     * @internal
     */
    AwsLambdaLayerVersionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaLayerVersionDetails = exports.AwsLambdaLayerVersionDetails || (exports.AwsLambdaLayerVersionDetails = {}));
var AwsRdsDbClusterAssociatedRole;
(function (AwsRdsDbClusterAssociatedRole) {
    /**
     * @internal
     */
    AwsRdsDbClusterAssociatedRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbClusterAssociatedRole = exports.AwsRdsDbClusterAssociatedRole || (exports.AwsRdsDbClusterAssociatedRole = {}));
var AwsRdsDbClusterMember;
(function (AwsRdsDbClusterMember) {
    /**
     * @internal
     */
    AwsRdsDbClusterMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbClusterMember = exports.AwsRdsDbClusterMember || (exports.AwsRdsDbClusterMember = {}));
var AwsRdsDbClusterOptionGroupMembership;
(function (AwsRdsDbClusterOptionGroupMembership) {
    /**
     * @internal
     */
    AwsRdsDbClusterOptionGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbClusterOptionGroupMembership = exports.AwsRdsDbClusterOptionGroupMembership || (exports.AwsRdsDbClusterOptionGroupMembership = {}));
var AwsRdsDbDomainMembership;
(function (AwsRdsDbDomainMembership) {
    /**
     * @internal
     */
    AwsRdsDbDomainMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbDomainMembership = exports.AwsRdsDbDomainMembership || (exports.AwsRdsDbDomainMembership = {}));
var AwsRdsDbInstanceVpcSecurityGroup;
(function (AwsRdsDbInstanceVpcSecurityGroup) {
    /**
     * @internal
     */
    AwsRdsDbInstanceVpcSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbInstanceVpcSecurityGroup = exports.AwsRdsDbInstanceVpcSecurityGroup || (exports.AwsRdsDbInstanceVpcSecurityGroup = {}));
var AwsRdsDbClusterDetails;
(function (AwsRdsDbClusterDetails) {
    /**
     * @internal
     */
    AwsRdsDbClusterDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbClusterDetails = exports.AwsRdsDbClusterDetails || (exports.AwsRdsDbClusterDetails = {}));
var AwsRdsDbClusterSnapshotDetails;
(function (AwsRdsDbClusterSnapshotDetails) {
    /**
     * @internal
     */
    AwsRdsDbClusterSnapshotDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbClusterSnapshotDetails = exports.AwsRdsDbClusterSnapshotDetails || (exports.AwsRdsDbClusterSnapshotDetails = {}));
var AwsRdsDbInstanceAssociatedRole;
(function (AwsRdsDbInstanceAssociatedRole) {
    /**
     * @internal
     */
    AwsRdsDbInstanceAssociatedRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbInstanceAssociatedRole = exports.AwsRdsDbInstanceAssociatedRole || (exports.AwsRdsDbInstanceAssociatedRole = {}));
var AwsRdsDbParameterGroup;
(function (AwsRdsDbParameterGroup) {
    /**
     * @internal
     */
    AwsRdsDbParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbParameterGroup = exports.AwsRdsDbParameterGroup || (exports.AwsRdsDbParameterGroup = {}));
var AwsRdsDbSubnetGroupSubnetAvailabilityZone;
(function (AwsRdsDbSubnetGroupSubnetAvailabilityZone) {
    /**
     * @internal
     */
    AwsRdsDbSubnetGroupSubnetAvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbSubnetGroupSubnetAvailabilityZone = exports.AwsRdsDbSubnetGroupSubnetAvailabilityZone || (exports.AwsRdsDbSubnetGroupSubnetAvailabilityZone = {}));
var AwsRdsDbSubnetGroupSubnet;
(function (AwsRdsDbSubnetGroupSubnet) {
    /**
     * @internal
     */
    AwsRdsDbSubnetGroupSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbSubnetGroupSubnet = exports.AwsRdsDbSubnetGroupSubnet || (exports.AwsRdsDbSubnetGroupSubnet = {}));
var AwsRdsDbSubnetGroup;
(function (AwsRdsDbSubnetGroup) {
    /**
     * @internal
     */
    AwsRdsDbSubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbSubnetGroup = exports.AwsRdsDbSubnetGroup || (exports.AwsRdsDbSubnetGroup = {}));
var AwsRdsDbInstanceEndpoint;
(function (AwsRdsDbInstanceEndpoint) {
    /**
     * @internal
     */
    AwsRdsDbInstanceEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbInstanceEndpoint = exports.AwsRdsDbInstanceEndpoint || (exports.AwsRdsDbInstanceEndpoint = {}));
var AwsRdsDbOptionGroupMembership;
(function (AwsRdsDbOptionGroupMembership) {
    /**
     * @internal
     */
    AwsRdsDbOptionGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbOptionGroupMembership = exports.AwsRdsDbOptionGroupMembership || (exports.AwsRdsDbOptionGroupMembership = {}));
var AwsRdsPendingCloudWatchLogsExports;
(function (AwsRdsPendingCloudWatchLogsExports) {
    /**
     * @internal
     */
    AwsRdsPendingCloudWatchLogsExports.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsPendingCloudWatchLogsExports = exports.AwsRdsPendingCloudWatchLogsExports || (exports.AwsRdsPendingCloudWatchLogsExports = {}));
var AwsRdsDbProcessorFeature;
(function (AwsRdsDbProcessorFeature) {
    /**
     * @internal
     */
    AwsRdsDbProcessorFeature.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbProcessorFeature = exports.AwsRdsDbProcessorFeature || (exports.AwsRdsDbProcessorFeature = {}));
var AwsRdsDbPendingModifiedValues;
(function (AwsRdsDbPendingModifiedValues) {
    /**
     * @internal
     */
    AwsRdsDbPendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbPendingModifiedValues = exports.AwsRdsDbPendingModifiedValues || (exports.AwsRdsDbPendingModifiedValues = {}));
var AwsRdsDbStatusInfo;
(function (AwsRdsDbStatusInfo) {
    /**
     * @internal
     */
    AwsRdsDbStatusInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbStatusInfo = exports.AwsRdsDbStatusInfo || (exports.AwsRdsDbStatusInfo = {}));
var AwsRdsDbInstanceDetails;
(function (AwsRdsDbInstanceDetails) {
    /**
     * @internal
     */
    AwsRdsDbInstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbInstanceDetails = exports.AwsRdsDbInstanceDetails || (exports.AwsRdsDbInstanceDetails = {}));
var AwsRdsDbSnapshotDetails;
(function (AwsRdsDbSnapshotDetails) {
    /**
     * @internal
     */
    AwsRdsDbSnapshotDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRdsDbSnapshotDetails = exports.AwsRdsDbSnapshotDetails || (exports.AwsRdsDbSnapshotDetails = {}));
var AwsRedshiftClusterClusterNode;
(function (AwsRedshiftClusterClusterNode) {
    /**
     * @internal
     */
    AwsRedshiftClusterClusterNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterClusterNode = exports.AwsRedshiftClusterClusterNode || (exports.AwsRedshiftClusterClusterNode = {}));
var AwsRedshiftClusterClusterParameterStatus;
(function (AwsRedshiftClusterClusterParameterStatus) {
    /**
     * @internal
     */
    AwsRedshiftClusterClusterParameterStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterClusterParameterStatus = exports.AwsRedshiftClusterClusterParameterStatus || (exports.AwsRedshiftClusterClusterParameterStatus = {}));
var AwsRedshiftClusterClusterParameterGroup;
(function (AwsRedshiftClusterClusterParameterGroup) {
    /**
     * @internal
     */
    AwsRedshiftClusterClusterParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterClusterParameterGroup = exports.AwsRedshiftClusterClusterParameterGroup || (exports.AwsRedshiftClusterClusterParameterGroup = {}));
var AwsRedshiftClusterClusterSecurityGroup;
(function (AwsRedshiftClusterClusterSecurityGroup) {
    /**
     * @internal
     */
    AwsRedshiftClusterClusterSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterClusterSecurityGroup = exports.AwsRedshiftClusterClusterSecurityGroup || (exports.AwsRedshiftClusterClusterSecurityGroup = {}));
var AwsRedshiftClusterClusterSnapshotCopyStatus;
(function (AwsRedshiftClusterClusterSnapshotCopyStatus) {
    /**
     * @internal
     */
    AwsRedshiftClusterClusterSnapshotCopyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterClusterSnapshotCopyStatus = exports.AwsRedshiftClusterClusterSnapshotCopyStatus || (exports.AwsRedshiftClusterClusterSnapshotCopyStatus = {}));
var AwsRedshiftClusterDeferredMaintenanceWindow;
(function (AwsRedshiftClusterDeferredMaintenanceWindow) {
    /**
     * @internal
     */
    AwsRedshiftClusterDeferredMaintenanceWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterDeferredMaintenanceWindow = exports.AwsRedshiftClusterDeferredMaintenanceWindow || (exports.AwsRedshiftClusterDeferredMaintenanceWindow = {}));
var AwsRedshiftClusterElasticIpStatus;
(function (AwsRedshiftClusterElasticIpStatus) {
    /**
     * @internal
     */
    AwsRedshiftClusterElasticIpStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterElasticIpStatus = exports.AwsRedshiftClusterElasticIpStatus || (exports.AwsRedshiftClusterElasticIpStatus = {}));
var AwsRedshiftClusterEndpoint;
(function (AwsRedshiftClusterEndpoint) {
    /**
     * @internal
     */
    AwsRedshiftClusterEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterEndpoint = exports.AwsRedshiftClusterEndpoint || (exports.AwsRedshiftClusterEndpoint = {}));
var AwsRedshiftClusterHsmStatus;
(function (AwsRedshiftClusterHsmStatus) {
    /**
     * @internal
     */
    AwsRedshiftClusterHsmStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterHsmStatus = exports.AwsRedshiftClusterHsmStatus || (exports.AwsRedshiftClusterHsmStatus = {}));
var AwsRedshiftClusterIamRole;
(function (AwsRedshiftClusterIamRole) {
    /**
     * @internal
     */
    AwsRedshiftClusterIamRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterIamRole = exports.AwsRedshiftClusterIamRole || (exports.AwsRedshiftClusterIamRole = {}));
var AwsRedshiftClusterPendingModifiedValues;
(function (AwsRedshiftClusterPendingModifiedValues) {
    /**
     * @internal
     */
    AwsRedshiftClusterPendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterPendingModifiedValues = exports.AwsRedshiftClusterPendingModifiedValues || (exports.AwsRedshiftClusterPendingModifiedValues = {}));
var AwsRedshiftClusterResizeInfo;
(function (AwsRedshiftClusterResizeInfo) {
    /**
     * @internal
     */
    AwsRedshiftClusterResizeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterResizeInfo = exports.AwsRedshiftClusterResizeInfo || (exports.AwsRedshiftClusterResizeInfo = {}));
var AwsRedshiftClusterRestoreStatus;
(function (AwsRedshiftClusterRestoreStatus) {
    /**
     * @internal
     */
    AwsRedshiftClusterRestoreStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterRestoreStatus = exports.AwsRedshiftClusterRestoreStatus || (exports.AwsRedshiftClusterRestoreStatus = {}));
var AwsRedshiftClusterVpcSecurityGroup;
(function (AwsRedshiftClusterVpcSecurityGroup) {
    /**
     * @internal
     */
    AwsRedshiftClusterVpcSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterVpcSecurityGroup = exports.AwsRedshiftClusterVpcSecurityGroup || (exports.AwsRedshiftClusterVpcSecurityGroup = {}));
var AwsRedshiftClusterDetails;
(function (AwsRedshiftClusterDetails) {
    /**
     * @internal
     */
    AwsRedshiftClusterDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsRedshiftClusterDetails = exports.AwsRedshiftClusterDetails || (exports.AwsRedshiftClusterDetails = {}));
var AwsS3AccountPublicAccessBlockDetails;
(function (AwsS3AccountPublicAccessBlockDetails) {
    /**
     * @internal
     */
    AwsS3AccountPublicAccessBlockDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3AccountPublicAccessBlockDetails = exports.AwsS3AccountPublicAccessBlockDetails || (exports.AwsS3AccountPublicAccessBlockDetails = {}));
var AwsS3BucketServerSideEncryptionByDefault;
(function (AwsS3BucketServerSideEncryptionByDefault) {
    /**
     * @internal
     */
    AwsS3BucketServerSideEncryptionByDefault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3BucketServerSideEncryptionByDefault = exports.AwsS3BucketServerSideEncryptionByDefault || (exports.AwsS3BucketServerSideEncryptionByDefault = {}));
var AwsS3BucketServerSideEncryptionRule;
(function (AwsS3BucketServerSideEncryptionRule) {
    /**
     * @internal
     */
    AwsS3BucketServerSideEncryptionRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3BucketServerSideEncryptionRule = exports.AwsS3BucketServerSideEncryptionRule || (exports.AwsS3BucketServerSideEncryptionRule = {}));
var AwsS3BucketServerSideEncryptionConfiguration;
(function (AwsS3BucketServerSideEncryptionConfiguration) {
    /**
     * @internal
     */
    AwsS3BucketServerSideEncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3BucketServerSideEncryptionConfiguration = exports.AwsS3BucketServerSideEncryptionConfiguration || (exports.AwsS3BucketServerSideEncryptionConfiguration = {}));
var AwsS3BucketDetails;
(function (AwsS3BucketDetails) {
    /**
     * @internal
     */
    AwsS3BucketDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3BucketDetails = exports.AwsS3BucketDetails || (exports.AwsS3BucketDetails = {}));
var AwsS3ObjectDetails;
(function (AwsS3ObjectDetails) {
    /**
     * @internal
     */
    AwsS3ObjectDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsS3ObjectDetails = exports.AwsS3ObjectDetails || (exports.AwsS3ObjectDetails = {}));
var AwsSecretsManagerSecretRotationRules;
(function (AwsSecretsManagerSecretRotationRules) {
    /**
     * @internal
     */
    AwsSecretsManagerSecretRotationRules.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSecretsManagerSecretRotationRules = exports.AwsSecretsManagerSecretRotationRules || (exports.AwsSecretsManagerSecretRotationRules = {}));
var AwsSecretsManagerSecretDetails;
(function (AwsSecretsManagerSecretDetails) {
    /**
     * @internal
     */
    AwsSecretsManagerSecretDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSecretsManagerSecretDetails = exports.AwsSecretsManagerSecretDetails || (exports.AwsSecretsManagerSecretDetails = {}));
var ComplianceStatus;
(function (ComplianceStatus) {
    ComplianceStatus["FAILED"] = "FAILED";
    ComplianceStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
    ComplianceStatus["PASSED"] = "PASSED";
    ComplianceStatus["WARNING"] = "WARNING";
})(ComplianceStatus = exports.ComplianceStatus || (exports.ComplianceStatus = {}));
var StatusReason;
(function (StatusReason) {
    /**
     * @internal
     */
    StatusReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatusReason = exports.StatusReason || (exports.StatusReason = {}));
var Compliance;
(function (Compliance) {
    /**
     * @internal
     */
    Compliance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Compliance = exports.Compliance || (exports.Compliance = {}));
var RelatedFinding;
(function (RelatedFinding) {
    /**
     * @internal
     */
    RelatedFinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelatedFinding = exports.RelatedFinding || (exports.RelatedFinding = {}));
var SeverityLabel;
(function (SeverityLabel) {
    SeverityLabel["CRITICAL"] = "CRITICAL";
    SeverityLabel["HIGH"] = "HIGH";
    SeverityLabel["INFORMATIONAL"] = "INFORMATIONAL";
    SeverityLabel["LOW"] = "LOW";
    SeverityLabel["MEDIUM"] = "MEDIUM";
})(SeverityLabel = exports.SeverityLabel || (exports.SeverityLabel = {}));
var FindingProviderSeverity;
(function (FindingProviderSeverity) {
    /**
     * @internal
     */
    FindingProviderSeverity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingProviderSeverity = exports.FindingProviderSeverity || (exports.FindingProviderSeverity = {}));
var FindingProviderFields;
(function (FindingProviderFields) {
    /**
     * @internal
     */
    FindingProviderFields.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingProviderFields = exports.FindingProviderFields || (exports.FindingProviderFields = {}));
var MalwareState;
(function (MalwareState) {
    MalwareState["OBSERVED"] = "OBSERVED";
    MalwareState["REMOVAL_FAILED"] = "REMOVAL_FAILED";
    MalwareState["REMOVED"] = "REMOVED";
})(MalwareState = exports.MalwareState || (exports.MalwareState = {}));
var MalwareType;
(function (MalwareType) {
    MalwareType["ADWARE"] = "ADWARE";
    MalwareType["BLENDED_THREAT"] = "BLENDED_THREAT";
    MalwareType["BOTNET_AGENT"] = "BOTNET_AGENT";
    MalwareType["COIN_MINER"] = "COIN_MINER";
    MalwareType["EXPLOIT_KIT"] = "EXPLOIT_KIT";
    MalwareType["KEYLOGGER"] = "KEYLOGGER";
    MalwareType["MACRO"] = "MACRO";
    MalwareType["POTENTIALLY_UNWANTED"] = "POTENTIALLY_UNWANTED";
    MalwareType["RANSOMWARE"] = "RANSOMWARE";
    MalwareType["REMOTE_ACCESS"] = "REMOTE_ACCESS";
    MalwareType["ROOTKIT"] = "ROOTKIT";
    MalwareType["SPYWARE"] = "SPYWARE";
    MalwareType["TROJAN"] = "TROJAN";
    MalwareType["VIRUS"] = "VIRUS";
    MalwareType["WORM"] = "WORM";
})(MalwareType = exports.MalwareType || (exports.MalwareType = {}));
var Malware;
(function (Malware) {
    /**
     * @internal
     */
    Malware.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Malware = exports.Malware || (exports.Malware = {}));
var NetworkDirection;
(function (NetworkDirection) {
    NetworkDirection["IN"] = "IN";
    NetworkDirection["OUT"] = "OUT";
})(NetworkDirection = exports.NetworkDirection || (exports.NetworkDirection = {}));
var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var Network;
(function (Network) {
    /**
     * @internal
     */
    Network.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Network = exports.Network || (exports.Network = {}));
var NetworkPathComponentDetails;
(function (NetworkPathComponentDetails) {
    /**
     * @internal
     */
    NetworkPathComponentDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkPathComponentDetails = exports.NetworkPathComponentDetails || (exports.NetworkPathComponentDetails = {}));
var NetworkHeader;
(function (NetworkHeader) {
    /**
     * @internal
     */
    NetworkHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkHeader = exports.NetworkHeader || (exports.NetworkHeader = {}));
var NetworkPathComponent;
(function (NetworkPathComponent) {
    /**
     * @internal
     */
    NetworkPathComponent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkPathComponent = exports.NetworkPathComponent || (exports.NetworkPathComponent = {}));
var Note;
(function (Note) {
    /**
     * @internal
     */
    Note.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Note = exports.Note || (exports.Note = {}));
var PatchSummary;
(function (PatchSummary) {
    /**
     * @internal
     */
    PatchSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchSummary = exports.PatchSummary || (exports.PatchSummary = {}));
var ProcessDetails;
(function (ProcessDetails) {
    /**
     * @internal
     */
    ProcessDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessDetails = exports.ProcessDetails || (exports.ProcessDetails = {}));
var RecordState;
(function (RecordState) {
    RecordState["ACTIVE"] = "ACTIVE";
    RecordState["ARCHIVED"] = "ARCHIVED";
})(RecordState = exports.RecordState || (exports.RecordState = {}));
var Recommendation;
(function (Recommendation) {
    /**
     * @internal
     */
    Recommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recommendation = exports.Recommendation || (exports.Recommendation = {}));
var Remediation;
(function (Remediation) {
    /**
     * @internal
     */
    Remediation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Remediation = exports.Remediation || (exports.Remediation = {}));
var Cell;
(function (Cell) {
    /**
     * @internal
     */
    Cell.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cell = exports.Cell || (exports.Cell = {}));
var Range;
(function (Range) {
    /**
     * @internal
     */
    Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Range = exports.Range || (exports.Range = {}));
var Page;
(function (Page) {
    /**
     * @internal
     */
    Page.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Page = exports.Page || (exports.Page = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Record = exports._Record || (exports._Record = {}));
var Occurrences;
(function (Occurrences) {
    /**
     * @internal
     */
    Occurrences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Occurrences = exports.Occurrences || (exports.Occurrences = {}));
var CustomDataIdentifiersDetections;
(function (CustomDataIdentifiersDetections) {
    /**
     * @internal
     */
    CustomDataIdentifiersDetections.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDataIdentifiersDetections = exports.CustomDataIdentifiersDetections || (exports.CustomDataIdentifiersDetections = {}));
var CustomDataIdentifiersResult;
(function (CustomDataIdentifiersResult) {
    /**
     * @internal
     */
    CustomDataIdentifiersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDataIdentifiersResult = exports.CustomDataIdentifiersResult || (exports.CustomDataIdentifiersResult = {}));
var SensitiveDataDetections;
(function (SensitiveDataDetections) {
    /**
     * @internal
     */
    SensitiveDataDetections.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SensitiveDataDetections = exports.SensitiveDataDetections || (exports.SensitiveDataDetections = {}));
var SensitiveDataResult;
(function (SensitiveDataResult) {
    /**
     * @internal
     */
    SensitiveDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SensitiveDataResult = exports.SensitiveDataResult || (exports.SensitiveDataResult = {}));
var ClassificationStatus;
(function (ClassificationStatus) {
    /**
     * @internal
     */
    ClassificationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationStatus = exports.ClassificationStatus || (exports.ClassificationStatus = {}));
var ClassificationResult;
(function (ClassificationResult) {
    /**
     * @internal
     */
    ClassificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationResult = exports.ClassificationResult || (exports.ClassificationResult = {}));
var DataClassificationDetails;
(function (DataClassificationDetails) {
    /**
     * @internal
     */
    DataClassificationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataClassificationDetails = exports.DataClassificationDetails || (exports.DataClassificationDetails = {}));
var AwsSnsTopicSubscription;
(function (AwsSnsTopicSubscription) {
    /**
     * @internal
     */
    AwsSnsTopicSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSnsTopicSubscription = exports.AwsSnsTopicSubscription || (exports.AwsSnsTopicSubscription = {}));
var AwsSnsTopicDetails;
(function (AwsSnsTopicDetails) {
    /**
     * @internal
     */
    AwsSnsTopicDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSnsTopicDetails = exports.AwsSnsTopicDetails || (exports.AwsSnsTopicDetails = {}));
var AwsSqsQueueDetails;
(function (AwsSqsQueueDetails) {
    /**
     * @internal
     */
    AwsSqsQueueDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSqsQueueDetails = exports.AwsSqsQueueDetails || (exports.AwsSqsQueueDetails = {}));
var AwsSsmComplianceSummary;
(function (AwsSsmComplianceSummary) {
    /**
     * @internal
     */
    AwsSsmComplianceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSsmComplianceSummary = exports.AwsSsmComplianceSummary || (exports.AwsSsmComplianceSummary = {}));
var AwsSsmPatch;
(function (AwsSsmPatch) {
    /**
     * @internal
     */
    AwsSsmPatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSsmPatch = exports.AwsSsmPatch || (exports.AwsSsmPatch = {}));
var AwsSsmPatchComplianceDetails;
(function (AwsSsmPatchComplianceDetails) {
    /**
     * @internal
     */
    AwsSsmPatchComplianceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSsmPatchComplianceDetails = exports.AwsSsmPatchComplianceDetails || (exports.AwsSsmPatchComplianceDetails = {}));
var WafAction;
(function (WafAction) {
    /**
     * @internal
     */
    WafAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WafAction = exports.WafAction || (exports.WafAction = {}));
var WafExcludedRule;
(function (WafExcludedRule) {
    /**
     * @internal
     */
    WafExcludedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WafExcludedRule = exports.WafExcludedRule || (exports.WafExcludedRule = {}));
var WafOverrideAction;
(function (WafOverrideAction) {
    /**
     * @internal
     */
    WafOverrideAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WafOverrideAction = exports.WafOverrideAction || (exports.WafOverrideAction = {}));
var AwsWafWebAclRule;
(function (AwsWafWebAclRule) {
    /**
     * @internal
     */
    AwsWafWebAclRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsWafWebAclRule = exports.AwsWafWebAclRule || (exports.AwsWafWebAclRule = {}));
var AwsWafWebAclDetails;
(function (AwsWafWebAclDetails) {
    /**
     * @internal
     */
    AwsWafWebAclDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsWafWebAclDetails = exports.AwsWafWebAclDetails || (exports.AwsWafWebAclDetails = {}));
var ContainerDetails;
(function (ContainerDetails) {
    /**
     * @internal
     */
    ContainerDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDetails = exports.ContainerDetails || (exports.ContainerDetails = {}));
var ResourceDetails;
(function (ResourceDetails) {
    /**
     * @internal
     */
    ResourceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDetails = exports.ResourceDetails || (exports.ResourceDetails = {}));
var Partition;
(function (Partition) {
    Partition["AWS"] = "aws";
    Partition["AWS_CN"] = "aws-cn";
    Partition["AWS_US_GOV"] = "aws-us-gov";
})(Partition = exports.Partition || (exports.Partition = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var Severity;
(function (Severity) {
    /**
     * @internal
     */
    Severity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Severity = exports.Severity || (exports.Severity = {}));
var ThreatIntelIndicatorCategory;
(function (ThreatIntelIndicatorCategory) {
    ThreatIntelIndicatorCategory["BACKDOOR"] = "BACKDOOR";
    ThreatIntelIndicatorCategory["CARD_STEALER"] = "CARD_STEALER";
    ThreatIntelIndicatorCategory["COMMAND_AND_CONTROL"] = "COMMAND_AND_CONTROL";
    ThreatIntelIndicatorCategory["DROP_SITE"] = "DROP_SITE";
    ThreatIntelIndicatorCategory["EXPLOIT_SITE"] = "EXPLOIT_SITE";
    ThreatIntelIndicatorCategory["KEYLOGGER"] = "KEYLOGGER";
})(ThreatIntelIndicatorCategory = exports.ThreatIntelIndicatorCategory || (exports.ThreatIntelIndicatorCategory = {}));
var ThreatIntelIndicatorType;
(function (ThreatIntelIndicatorType) {
    ThreatIntelIndicatorType["DOMAIN"] = "DOMAIN";
    ThreatIntelIndicatorType["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    ThreatIntelIndicatorType["HASH_MD5"] = "HASH_MD5";
    ThreatIntelIndicatorType["HASH_SHA1"] = "HASH_SHA1";
    ThreatIntelIndicatorType["HASH_SHA256"] = "HASH_SHA256";
    ThreatIntelIndicatorType["HASH_SHA512"] = "HASH_SHA512";
    ThreatIntelIndicatorType["IPV4_ADDRESS"] = "IPV4_ADDRESS";
    ThreatIntelIndicatorType["IPV6_ADDRESS"] = "IPV6_ADDRESS";
    ThreatIntelIndicatorType["MUTEX"] = "MUTEX";
    ThreatIntelIndicatorType["PROCESS"] = "PROCESS";
    ThreatIntelIndicatorType["URL"] = "URL";
})(ThreatIntelIndicatorType = exports.ThreatIntelIndicatorType || (exports.ThreatIntelIndicatorType = {}));
var ThreatIntelIndicator;
(function (ThreatIntelIndicator) {
    /**
     * @internal
     */
    ThreatIntelIndicator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThreatIntelIndicator = exports.ThreatIntelIndicator || (exports.ThreatIntelIndicator = {}));
var VerificationState;
(function (VerificationState) {
    VerificationState["BENIGN_POSITIVE"] = "BENIGN_POSITIVE";
    VerificationState["FALSE_POSITIVE"] = "FALSE_POSITIVE";
    VerificationState["TRUE_POSITIVE"] = "TRUE_POSITIVE";
    VerificationState["UNKNOWN"] = "UNKNOWN";
})(VerificationState = exports.VerificationState || (exports.VerificationState = {}));
var Cvss;
(function (Cvss) {
    /**
     * @internal
     */
    Cvss.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cvss = exports.Cvss || (exports.Cvss = {}));
var VulnerabilityVendor;
(function (VulnerabilityVendor) {
    /**
     * @internal
     */
    VulnerabilityVendor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VulnerabilityVendor = exports.VulnerabilityVendor || (exports.VulnerabilityVendor = {}));
var SoftwarePackage;
(function (SoftwarePackage) {
    /**
     * @internal
     */
    SoftwarePackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SoftwarePackage = exports.SoftwarePackage || (exports.SoftwarePackage = {}));
var Vulnerability;
(function (Vulnerability) {
    /**
     * @internal
     */
    Vulnerability.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Vulnerability = exports.Vulnerability || (exports.Vulnerability = {}));
var WorkflowStatus;
(function (WorkflowStatus) {
    WorkflowStatus["NEW"] = "NEW";
    WorkflowStatus["NOTIFIED"] = "NOTIFIED";
    WorkflowStatus["RESOLVED"] = "RESOLVED";
    WorkflowStatus["SUPPRESSED"] = "SUPPRESSED";
})(WorkflowStatus = exports.WorkflowStatus || (exports.WorkflowStatus = {}));
var Workflow;
(function (Workflow) {
    /**
     * @internal
     */
    Workflow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workflow = exports.Workflow || (exports.Workflow = {}));
var WorkflowState;
(function (WorkflowState) {
    WorkflowState["ASSIGNED"] = "ASSIGNED";
    WorkflowState["DEFERRED"] = "DEFERRED";
    WorkflowState["IN_PROGRESS"] = "IN_PROGRESS";
    WorkflowState["NEW"] = "NEW";
    WorkflowState["RESOLVED"] = "RESOLVED";
})(WorkflowState = exports.WorkflowState || (exports.WorkflowState = {}));
var AwsSecurityFinding;
(function (AwsSecurityFinding) {
    /**
     * @internal
     */
    AwsSecurityFinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSecurityFinding = exports.AwsSecurityFinding || (exports.AwsSecurityFinding = {}));
var StringFilterComparison;
(function (StringFilterComparison) {
    StringFilterComparison["EQUALS"] = "EQUALS";
    StringFilterComparison["NOT_EQUALS"] = "NOT_EQUALS";
    StringFilterComparison["PREFIX"] = "PREFIX";
    StringFilterComparison["PREFIX_NOT_EQUALS"] = "PREFIX_NOT_EQUALS";
})(StringFilterComparison = exports.StringFilterComparison || (exports.StringFilterComparison = {}));
var StringFilter;
(function (StringFilter) {
    /**
     * @internal
     */
    StringFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StringFilter = exports.StringFilter || (exports.StringFilter = {}));
var NumberFilter;
(function (NumberFilter) {
    /**
     * @internal
     */
    NumberFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberFilter = exports.NumberFilter || (exports.NumberFilter = {}));
var DateRangeUnit;
(function (DateRangeUnit) {
    DateRangeUnit["DAYS"] = "DAYS";
})(DateRangeUnit = exports.DateRangeUnit || (exports.DateRangeUnit = {}));
var DateRange;
(function (DateRange) {
    /**
     * @internal
     */
    DateRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateRange = exports.DateRange || (exports.DateRange = {}));
var DateFilter;
(function (DateFilter) {
    /**
     * @internal
     */
    DateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateFilter = exports.DateFilter || (exports.DateFilter = {}));
var KeywordFilter;
(function (KeywordFilter) {
    /**
     * @internal
     */
    KeywordFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeywordFilter = exports.KeywordFilter || (exports.KeywordFilter = {}));
var IpFilter;
(function (IpFilter) {
    /**
     * @internal
     */
    IpFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpFilter = exports.IpFilter || (exports.IpFilter = {}));
var MapFilterComparison;
(function (MapFilterComparison) {
    MapFilterComparison["EQUALS"] = "EQUALS";
    MapFilterComparison["NOT_EQUALS"] = "NOT_EQUALS";
})(MapFilterComparison = exports.MapFilterComparison || (exports.MapFilterComparison = {}));
var MapFilter;
(function (MapFilter) {
    /**
     * @internal
     */
    MapFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MapFilter = exports.MapFilter || (exports.MapFilter = {}));
var AwsSecurityFindingFilters;
(function (AwsSecurityFindingFilters) {
    /**
     * @internal
     */
    AwsSecurityFindingFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSecurityFindingFilters = exports.AwsSecurityFindingFilters || (exports.AwsSecurityFindingFilters = {}));
var AwsSecurityFindingIdentifier;
(function (AwsSecurityFindingIdentifier) {
    /**
     * @internal
     */
    AwsSecurityFindingIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsSecurityFindingIdentifier = exports.AwsSecurityFindingIdentifier || (exports.AwsSecurityFindingIdentifier = {}));
var BatchDisableStandardsRequest;
(function (BatchDisableStandardsRequest) {
    /**
     * @internal
     */
    BatchDisableStandardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisableStandardsRequest = exports.BatchDisableStandardsRequest || (exports.BatchDisableStandardsRequest = {}));
var StandardsStatus;
(function (StandardsStatus) {
    StandardsStatus["DELETING"] = "DELETING";
    StandardsStatus["FAILED"] = "FAILED";
    StandardsStatus["INCOMPLETE"] = "INCOMPLETE";
    StandardsStatus["PENDING"] = "PENDING";
    StandardsStatus["READY"] = "READY";
})(StandardsStatus = exports.StandardsStatus || (exports.StandardsStatus = {}));
var StandardsSubscription;
(function (StandardsSubscription) {
    /**
     * @internal
     */
    StandardsSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StandardsSubscription = exports.StandardsSubscription || (exports.StandardsSubscription = {}));
var BatchDisableStandardsResponse;
(function (BatchDisableStandardsResponse) {
    /**
     * @internal
     */
    BatchDisableStandardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisableStandardsResponse = exports.BatchDisableStandardsResponse || (exports.BatchDisableStandardsResponse = {}));
var StandardsSubscriptionRequest;
(function (StandardsSubscriptionRequest) {
    /**
     * @internal
     */
    StandardsSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StandardsSubscriptionRequest = exports.StandardsSubscriptionRequest || (exports.StandardsSubscriptionRequest = {}));
var BatchEnableStandardsRequest;
(function (BatchEnableStandardsRequest) {
    /**
     * @internal
     */
    BatchEnableStandardsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEnableStandardsRequest = exports.BatchEnableStandardsRequest || (exports.BatchEnableStandardsRequest = {}));
var BatchEnableStandardsResponse;
(function (BatchEnableStandardsResponse) {
    /**
     * @internal
     */
    BatchEnableStandardsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEnableStandardsResponse = exports.BatchEnableStandardsResponse || (exports.BatchEnableStandardsResponse = {}));
var BatchImportFindingsRequest;
(function (BatchImportFindingsRequest) {
    /**
     * @internal
     */
    BatchImportFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchImportFindingsRequest = exports.BatchImportFindingsRequest || (exports.BatchImportFindingsRequest = {}));
var ImportFindingsError;
(function (ImportFindingsError) {
    /**
     * @internal
     */
    ImportFindingsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportFindingsError = exports.ImportFindingsError || (exports.ImportFindingsError = {}));
var BatchImportFindingsResponse;
(function (BatchImportFindingsResponse) {
    /**
     * @internal
     */
    BatchImportFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchImportFindingsResponse = exports.BatchImportFindingsResponse || (exports.BatchImportFindingsResponse = {}));
var NoteUpdate;
(function (NoteUpdate) {
    /**
     * @internal
     */
    NoteUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoteUpdate = exports.NoteUpdate || (exports.NoteUpdate = {}));
var SeverityUpdate;
(function (SeverityUpdate) {
    /**
     * @internal
     */
    SeverityUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SeverityUpdate = exports.SeverityUpdate || (exports.SeverityUpdate = {}));
var WorkflowUpdate;
(function (WorkflowUpdate) {
    /**
     * @internal
     */
    WorkflowUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowUpdate = exports.WorkflowUpdate || (exports.WorkflowUpdate = {}));
var BatchUpdateFindingsRequest;
(function (BatchUpdateFindingsRequest) {
    /**
     * @internal
     */
    BatchUpdateFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateFindingsRequest = exports.BatchUpdateFindingsRequest || (exports.BatchUpdateFindingsRequest = {}));
var BatchUpdateFindingsUnprocessedFinding;
(function (BatchUpdateFindingsUnprocessedFinding) {
    /**
     * @internal
     */
    BatchUpdateFindingsUnprocessedFinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateFindingsUnprocessedFinding = exports.BatchUpdateFindingsUnprocessedFinding || (exports.BatchUpdateFindingsUnprocessedFinding = {}));
var BatchUpdateFindingsResponse;
(function (BatchUpdateFindingsResponse) {
    /**
     * @internal
     */
    BatchUpdateFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateFindingsResponse = exports.BatchUpdateFindingsResponse || (exports.BatchUpdateFindingsResponse = {}));
var ControlStatus;
(function (ControlStatus) {
    ControlStatus["DISABLED"] = "DISABLED";
    ControlStatus["ENABLED"] = "ENABLED";
})(ControlStatus = exports.ControlStatus || (exports.ControlStatus = {}));
var CreateActionTargetRequest;
(function (CreateActionTargetRequest) {
    /**
     * @internal
     */
    CreateActionTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActionTargetRequest = exports.CreateActionTargetRequest || (exports.CreateActionTargetRequest = {}));
var CreateActionTargetResponse;
(function (CreateActionTargetResponse) {
    /**
     * @internal
     */
    CreateActionTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActionTargetResponse = exports.CreateActionTargetResponse || (exports.CreateActionTargetResponse = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var CreateInsightRequest;
(function (CreateInsightRequest) {
    /**
     * @internal
     */
    CreateInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInsightRequest = exports.CreateInsightRequest || (exports.CreateInsightRequest = {}));
var CreateInsightResponse;
(function (CreateInsightResponse) {
    /**
     * @internal
     */
    CreateInsightResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInsightResponse = exports.CreateInsightResponse || (exports.CreateInsightResponse = {}));
var CreateMembersRequest;
(function (CreateMembersRequest) {
    /**
     * @internal
     */
    CreateMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersRequest = exports.CreateMembersRequest || (exports.CreateMembersRequest = {}));
var Result;
(function (Result) {
    /**
     * @internal
     */
    Result.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Result = exports.Result || (exports.Result = {}));
var CreateMembersResponse;
(function (CreateMembersResponse) {
    /**
     * @internal
     */
    CreateMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersResponse = exports.CreateMembersResponse || (exports.CreateMembersResponse = {}));
var DeclineInvitationsRequest;
(function (DeclineInvitationsRequest) {
    /**
     * @internal
     */
    DeclineInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsRequest = exports.DeclineInvitationsRequest || (exports.DeclineInvitationsRequest = {}));
//# sourceMappingURL=models_0.js.map