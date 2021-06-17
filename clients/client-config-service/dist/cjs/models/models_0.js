"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRuleComplianceFilters = exports.ConfigRule = exports.Source = exports.SourceDetail = exports.MessageType = exports.EventSource = exports.Owner = exports.Scope = exports.MaximumExecutionFrequency = exports.ConfigRuleState = exports.ConfigExportDeliveryInfo = exports.DeliveryStatus = exports.ComplianceSummaryByResourceType = exports.ComplianceByResource = exports.ComplianceByConfigRule = exports.ChronologicalOrder = exports.NoAvailableConfigurationRecorderException = exports.BatchGetResourceConfigResponse = exports.BatchGetResourceConfigRequest = exports.ResourceKey = exports.ValidationException = exports.NoSuchConfigurationAggregatorException = exports.BatchGetAggregateResourceConfigResponse = exports.BatchGetAggregateResourceConfigRequest = exports.BaseConfigurationItem = exports.ConfigurationItemStatus = exports.AggregationAuthorization = exports.AggregateResourceIdentifier = exports.ResourceType = exports.AggregateEvaluationResult = exports.EvaluationResultIdentifier = exports.EvaluationResultQualifier = exports.AggregatedSourceStatus = exports.AggregatedSourceType = exports.AggregatedSourceStatusType = exports.AggregateConformancePackComplianceSummaryGroupKey = exports.AggregateConformancePackComplianceSummaryFilters = exports.AggregateConformancePackComplianceSummary = exports.AggregateConformancePackComplianceFilters = exports.AggregateConformancePackComplianceCount = exports.AggregateComplianceCount = exports.ComplianceSummary = exports.AggregateComplianceByConformancePack = exports.AggregateConformancePackCompliance = exports.ConformancePackComplianceType = exports.AggregateComplianceByConfigRule = exports.Compliance = exports.ComplianceType = exports.ComplianceContributorCount = exports.AccountAggregationSource = void 0;
exports.RemediationExceptionResourceKey = exports.RemediationInProgressException = exports.NoSuchRemediationConfigurationException = exports.InsufficientPermissionsException = exports.DeleteRemediationConfigurationResponse = exports.DeleteRemediationConfigurationRequest = exports.DeletePendingAggregationRequestRequest = exports.NoSuchOrganizationConformancePackException = exports.DeleteOrganizationConformancePackRequest = exports.OrganizationAccessDeniedException = exports.NoSuchOrganizationConfigRuleException = exports.DeleteOrganizationConfigRuleRequest = exports.DeleteEvaluationResultsResponse = exports.DeleteEvaluationResultsRequest = exports.NoSuchDeliveryChannelException = exports.LastDeliveryChannelDeleteFailedException = exports.DeleteDeliveryChannelRequest = exports.NoSuchConformancePackException = exports.DeleteConformancePackRequest = exports.NoSuchConfigurationRecorderException = exports.DeleteConfigurationRecorderRequest = exports.DeleteConfigurationAggregatorRequest = exports.ResourceInUseException = exports.NoSuchConfigRuleException = exports.DeleteConfigRuleRequest = exports.InvalidParameterValueException = exports.DeleteAggregationAuthorizationRequest = exports.ConformancePackTemplateValidationException = exports.ConformancePackStatusDetail = exports.ConformancePackState = exports.ConformancePackRuleCompliance = exports.ConformancePackEvaluationResult = exports.ConformancePackEvaluationFilters = exports.ConformancePackDetail = exports.ConformancePackInputParameter = exports.ConformancePackComplianceSummary = exports.ConformancePackComplianceFilters = exports.ConfigurationRecorderStatus = exports.RecorderStatus = exports.ConfigurationRecorder = exports.RecordingGroup = exports.ConfigurationItem = exports.Relationship = exports.ConfigurationAggregator = exports.OrganizationAggregationSource = exports.ConfigStreamDeliveryInfo = exports.ConfigSnapshotDeliveryProperties = exports.ConfigRuleEvaluationStatus = exports.ConfigRuleComplianceSummaryGroupKey = exports.ConfigRuleComplianceSummaryFilters = void 0;
exports.DescribeDeliveryChannelStatusResponse = exports.DescribeDeliveryChannelStatusRequest = exports.DescribeDeliveryChannelsResponse = exports.DescribeDeliveryChannelsRequest = exports.DescribeConformancePackStatusResponse = exports.DescribeConformancePackStatusRequest = exports.DescribeConformancePacksResponse = exports.DescribeConformancePacksRequest = exports.NoSuchConfigRuleInConformancePackException = exports.DescribeConformancePackComplianceResponse = exports.DescribeConformancePackComplianceRequest = exports.DescribeConfigurationRecorderStatusResponse = exports.DescribeConfigurationRecorderStatusRequest = exports.DescribeConfigurationRecordersResponse = exports.DescribeConfigurationRecordersRequest = exports.DescribeConfigurationAggregatorSourcesStatusResponse = exports.DescribeConfigurationAggregatorSourcesStatusRequest = exports.DescribeConfigurationAggregatorsResponse = exports.DescribeConfigurationAggregatorsRequest = exports.DescribeConfigRulesResponse = exports.DescribeConfigRulesRequest = exports.DescribeConfigRuleEvaluationStatusResponse = exports.DescribeConfigRuleEvaluationStatusRequest = exports.DescribeComplianceByResourceResponse = exports.DescribeComplianceByResourceRequest = exports.DescribeComplianceByConfigRuleResponse = exports.DescribeComplianceByConfigRuleRequest = exports.DescribeAggregationAuthorizationsResponse = exports.DescribeAggregationAuthorizationsRequest = exports.DescribeAggregateComplianceByConformancePacksResponse = exports.DescribeAggregateComplianceByConformancePacksRequest = exports.InvalidNextTokenException = exports.InvalidLimitException = exports.DescribeAggregateComplianceByConfigRulesResponse = exports.DescribeAggregateComplianceByConfigRulesRequest = exports.DeliveryChannelStatus = exports.DeliveryChannel = exports.DeliverConfigSnapshotResponse = exports.DeliverConfigSnapshotRequest = exports.ResourceNotFoundException = exports.DeleteStoredQueryResponse = exports.DeleteStoredQueryRequest = exports.NoSuchRetentionConfigurationException = exports.DeleteRetentionConfigurationRequest = exports.NoRunningConfigurationRecorderException = exports.DeleteResourceConfigRequest = exports.NoSuchRemediationExceptionException = exports.DeleteRemediationExceptionsResponse = exports.FailedDeleteRemediationExceptionsBatch = exports.DeleteRemediationExceptionsRequest = void 0;
exports.GetAggregateComplianceDetailsByConfigRuleResponse = exports.GetAggregateComplianceDetailsByConfigRuleRequest = exports.FieldInfo = exports.FailedRemediationExceptionBatch = exports.FailedRemediationBatch = exports.ExternalEvaluation = exports.EvaluationResult = exports.Evaluation = exports.DescribeRetentionConfigurationsResponse = exports.RetentionConfiguration = exports.DescribeRetentionConfigurationsRequest = exports.DescribeRemediationExecutionStatusResponse = exports.RemediationExecutionStatus = exports.RemediationExecutionStep = exports.RemediationExecutionStepState = exports.RemediationExecutionState = exports.DescribeRemediationExecutionStatusRequest = exports.DescribeRemediationExceptionsResponse = exports.RemediationException = exports.DescribeRemediationExceptionsRequest = exports.DescribeRemediationConfigurationsResponse = exports.RemediationConfiguration = exports.RemediationTargetType = exports.RemediationParameterValue = exports.StaticValue = exports.ResourceValue = exports.ResourceValueType = exports.ExecutionControls = exports.SsmControls = exports.DescribeRemediationConfigurationsRequest = exports.DescribePendingAggregationRequestsResponse = exports.PendingAggregationRequest = exports.DescribePendingAggregationRequestsRequest = exports.DescribeOrganizationConformancePackStatusesResponse = exports.OrganizationConformancePackStatus = exports.OrganizationResourceStatus = exports.DescribeOrganizationConformancePackStatusesRequest = exports.DescribeOrganizationConformancePacksResponse = exports.OrganizationConformancePack = exports.DescribeOrganizationConformancePacksRequest = exports.DescribeOrganizationConfigRuleStatusesResponse = exports.OrganizationConfigRuleStatus = exports.OrganizationRuleStatus = exports.DescribeOrganizationConfigRuleStatusesRequest = exports.DescribeOrganizationConfigRulesResponse = exports.OrganizationConfigRule = exports.OrganizationManagedRuleMetadata = exports.OrganizationCustomRuleMetadata = exports.OrganizationConfigRuleTriggerType = exports.DescribeOrganizationConfigRulesRequest = void 0;
exports.InvalidRoleException = exports.InvalidResultTokenException = exports.InvalidRecordingGroupException = exports.InvalidExpressionException = exports.InvalidDeliveryChannelNameException = exports.InvalidConfigurationRecorderNameException = exports.InsufficientDeliveryPolicyException = exports.GetStoredQueryResponse = exports.StoredQuery = exports.GetStoredQueryRequest = exports.InvalidTimeRangeException = exports.GetResourceConfigHistoryResponse = exports.GetResourceConfigHistoryRequest = exports.GetOrganizationConformancePackDetailedStatusResponse = exports.OrganizationConformancePackDetailedStatus = exports.GetOrganizationConformancePackDetailedStatusRequest = exports.OrganizationResourceDetailedStatusFilters = exports.OrganizationResourceDetailedStatus = exports.GetOrganizationConfigRuleDetailedStatusResponse = exports.MemberAccountStatus = exports.GetOrganizationConfigRuleDetailedStatusRequest = exports.StatusDetailFilters = exports.MemberAccountRuleStatus = exports.GetDiscoveredResourceCountsResponse = exports.ResourceCount = exports.GetDiscoveredResourceCountsRequest = exports.GetConformancePackComplianceSummaryResponse = exports.GetConformancePackComplianceSummaryRequest = exports.GetConformancePackComplianceDetailsResponse = exports.GetConformancePackComplianceDetailsRequest = exports.GetComplianceSummaryByResourceTypeResponse = exports.GetComplianceSummaryByResourceTypeRequest = exports.GetComplianceSummaryByConfigRuleResponse = exports.GetComplianceDetailsByResourceResponse = exports.GetComplianceDetailsByResourceRequest = exports.GetComplianceDetailsByConfigRuleResponse = exports.GetComplianceDetailsByConfigRuleRequest = exports.ResourceNotDiscoveredException = exports.OversizedConfigurationItemException = exports.GetAggregateResourceConfigResponse = exports.GetAggregateResourceConfigRequest = exports.GetAggregateDiscoveredResourceCountsResponse = exports.GroupedResourceCount = exports.GetAggregateDiscoveredResourceCountsRequest = exports.ResourceCountGroupKey = exports.ResourceCountFilters = exports.GetAggregateConformancePackComplianceSummaryResponse = exports.GetAggregateConformancePackComplianceSummaryRequest = exports.GetAggregateConfigRuleComplianceSummaryResponse = exports.GetAggregateConfigRuleComplianceSummaryRequest = void 0;
exports.PutRemediationExceptionsResponse = exports.PutRemediationExceptionsRequest = exports.PutRemediationConfigurationsResponse = exports.PutRemediationConfigurationsRequest = exports.PutOrganizationConformancePackResponse = exports.PutOrganizationConformancePackRequest = exports.PutOrganizationConfigRuleResponse = exports.PutOrganizationConfigRuleRequest = exports.PutExternalEvaluationResponse = exports.PutExternalEvaluationRequest = exports.PutEvaluationsResponse = exports.PutEvaluationsRequest = exports.PutDeliveryChannelRequest = exports.PutConformancePackResponse = exports.PutConformancePackRequest = exports.PutConfigurationRecorderRequest = exports.PutConfigurationAggregatorResponse = exports.PutConfigurationAggregatorRequest = exports.PutConfigRuleRequest = exports.PutAggregationAuthorizationResponse = exports.PutAggregationAuthorizationRequest = exports.OrganizationConformancePackTemplateValidationException = exports.OrganizationAllFeaturesNotEnabledException = exports.NoSuchBucketException = exports.NoAvailableOrganizationException = exports.NoAvailableDeliveryChannelException = exports.MaxNumberOfRetentionConfigurationsExceededException = exports.MaxNumberOfOrganizationConformancePacksExceededException = exports.MaxNumberOfOrganizationConfigRulesExceededException = exports.MaxNumberOfDeliveryChannelsExceededException = exports.MaxNumberOfConformancePacksExceededException = exports.MaxNumberOfConfigurationRecordersExceededException = exports.MaxNumberOfConfigRulesExceededException = exports.MaxActiveResourcesExceededException = exports.ListTagsForResourceResponse = exports.Tag = exports.ListTagsForResourceRequest = exports.ListStoredQueriesResponse = exports.StoredQueryMetadata = exports.ListStoredQueriesRequest = exports.ListDiscoveredResourcesResponse = exports.ResourceIdentifier = exports.ListDiscoveredResourcesRequest = exports.ListAggregateDiscoveredResourcesResponse = exports.ListAggregateDiscoveredResourcesRequest = exports.ResourceFilters = exports.LimitExceededException = exports.InvalidSNSTopicARNException = exports.InvalidS3KmsKeyArnException = exports.InvalidS3KeyPrefixException = void 0;
var AccountAggregationSource;
(function (AccountAggregationSource) {
    /**
     * @internal
     */
    AccountAggregationSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAggregationSource = exports.AccountAggregationSource || (exports.AccountAggregationSource = {}));
var ComplianceContributorCount;
(function (ComplianceContributorCount) {
    /**
     * @internal
     */
    ComplianceContributorCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceContributorCount = exports.ComplianceContributorCount || (exports.ComplianceContributorCount = {}));
var ComplianceType;
(function (ComplianceType) {
    ComplianceType["Compliant"] = "COMPLIANT";
    ComplianceType["Insufficient_Data"] = "INSUFFICIENT_DATA";
    ComplianceType["Non_Compliant"] = "NON_COMPLIANT";
    ComplianceType["Not_Applicable"] = "NOT_APPLICABLE";
})(ComplianceType = exports.ComplianceType || (exports.ComplianceType = {}));
var Compliance;
(function (Compliance) {
    /**
     * @internal
     */
    Compliance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Compliance = exports.Compliance || (exports.Compliance = {}));
var AggregateComplianceByConfigRule;
(function (AggregateComplianceByConfigRule) {
    /**
     * @internal
     */
    AggregateComplianceByConfigRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateComplianceByConfigRule = exports.AggregateComplianceByConfigRule || (exports.AggregateComplianceByConfigRule = {}));
var ConformancePackComplianceType;
(function (ConformancePackComplianceType) {
    ConformancePackComplianceType["COMPLIANT"] = "COMPLIANT";
    ConformancePackComplianceType["INSUFFICIENT_DATA"] = "INSUFFICIENT_DATA";
    ConformancePackComplianceType["NON_COMPLIANT"] = "NON_COMPLIANT";
})(ConformancePackComplianceType = exports.ConformancePackComplianceType || (exports.ConformancePackComplianceType = {}));
var AggregateConformancePackCompliance;
(function (AggregateConformancePackCompliance) {
    /**
     * @internal
     */
    AggregateConformancePackCompliance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateConformancePackCompliance = exports.AggregateConformancePackCompliance || (exports.AggregateConformancePackCompliance = {}));
var AggregateComplianceByConformancePack;
(function (AggregateComplianceByConformancePack) {
    /**
     * @internal
     */
    AggregateComplianceByConformancePack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateComplianceByConformancePack = exports.AggregateComplianceByConformancePack || (exports.AggregateComplianceByConformancePack = {}));
var ComplianceSummary;
(function (ComplianceSummary) {
    /**
     * @internal
     */
    ComplianceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceSummary = exports.ComplianceSummary || (exports.ComplianceSummary = {}));
var AggregateComplianceCount;
(function (AggregateComplianceCount) {
    /**
     * @internal
     */
    AggregateComplianceCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateComplianceCount = exports.AggregateComplianceCount || (exports.AggregateComplianceCount = {}));
var AggregateConformancePackComplianceCount;
(function (AggregateConformancePackComplianceCount) {
    /**
     * @internal
     */
    AggregateConformancePackComplianceCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateConformancePackComplianceCount = exports.AggregateConformancePackComplianceCount || (exports.AggregateConformancePackComplianceCount = {}));
var AggregateConformancePackComplianceFilters;
(function (AggregateConformancePackComplianceFilters) {
    /**
     * @internal
     */
    AggregateConformancePackComplianceFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateConformancePackComplianceFilters = exports.AggregateConformancePackComplianceFilters || (exports.AggregateConformancePackComplianceFilters = {}));
var AggregateConformancePackComplianceSummary;
(function (AggregateConformancePackComplianceSummary) {
    /**
     * @internal
     */
    AggregateConformancePackComplianceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateConformancePackComplianceSummary = exports.AggregateConformancePackComplianceSummary || (exports.AggregateConformancePackComplianceSummary = {}));
var AggregateConformancePackComplianceSummaryFilters;
(function (AggregateConformancePackComplianceSummaryFilters) {
    /**
     * @internal
     */
    AggregateConformancePackComplianceSummaryFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateConformancePackComplianceSummaryFilters = exports.AggregateConformancePackComplianceSummaryFilters || (exports.AggregateConformancePackComplianceSummaryFilters = {}));
var AggregateConformancePackComplianceSummaryGroupKey;
(function (AggregateConformancePackComplianceSummaryGroupKey) {
    AggregateConformancePackComplianceSummaryGroupKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    AggregateConformancePackComplianceSummaryGroupKey["AWS_REGION"] = "AWS_REGION";
})(AggregateConformancePackComplianceSummaryGroupKey = exports.AggregateConformancePackComplianceSummaryGroupKey || (exports.AggregateConformancePackComplianceSummaryGroupKey = {}));
var AggregatedSourceStatusType;
(function (AggregatedSourceStatusType) {
    AggregatedSourceStatusType["FAILED"] = "FAILED";
    AggregatedSourceStatusType["OUTDATED"] = "OUTDATED";
    AggregatedSourceStatusType["SUCCEEDED"] = "SUCCEEDED";
})(AggregatedSourceStatusType = exports.AggregatedSourceStatusType || (exports.AggregatedSourceStatusType = {}));
var AggregatedSourceType;
(function (AggregatedSourceType) {
    AggregatedSourceType["ACCOUNT"] = "ACCOUNT";
    AggregatedSourceType["ORGANIZATION"] = "ORGANIZATION";
})(AggregatedSourceType = exports.AggregatedSourceType || (exports.AggregatedSourceType = {}));
var AggregatedSourceStatus;
(function (AggregatedSourceStatus) {
    /**
     * @internal
     */
    AggregatedSourceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregatedSourceStatus = exports.AggregatedSourceStatus || (exports.AggregatedSourceStatus = {}));
var EvaluationResultQualifier;
(function (EvaluationResultQualifier) {
    /**
     * @internal
     */
    EvaluationResultQualifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResultQualifier = exports.EvaluationResultQualifier || (exports.EvaluationResultQualifier = {}));
var EvaluationResultIdentifier;
(function (EvaluationResultIdentifier) {
    /**
     * @internal
     */
    EvaluationResultIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResultIdentifier = exports.EvaluationResultIdentifier || (exports.EvaluationResultIdentifier = {}));
var AggregateEvaluationResult;
(function (AggregateEvaluationResult) {
    /**
     * @internal
     */
    AggregateEvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateEvaluationResult = exports.AggregateEvaluationResult || (exports.AggregateEvaluationResult = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["AccountPublicAccessBlock"] = "AWS::S3::AccountPublicAccessBlock";
    ResourceType["Alarm"] = "AWS::CloudWatch::Alarm";
    ResourceType["Api"] = "AWS::ApiGatewayV2::Api";
    ResourceType["Application"] = "AWS::ElasticBeanstalk::Application";
    ResourceType["ApplicationVersion"] = "AWS::ElasticBeanstalk::ApplicationVersion";
    ResourceType["AssociationCompliance"] = "AWS::SSM::AssociationCompliance";
    ResourceType["AutoScalingGroup"] = "AWS::AutoScaling::AutoScalingGroup";
    ResourceType["Bucket"] = "AWS::S3::Bucket";
    ResourceType["Certificate"] = "AWS::ACM::Certificate";
    ResourceType["CloudFormationProduct"] = "AWS::ServiceCatalog::CloudFormationProduct";
    ResourceType["CloudFormationProvisionedProduct"] = "AWS::ServiceCatalog::CloudFormationProvisionedProduct";
    ResourceType["Cluster"] = "AWS::Redshift::Cluster";
    ResourceType["ClusterParameterGroup"] = "AWS::Redshift::ClusterParameterGroup";
    ResourceType["ClusterSecurityGroup"] = "AWS::Redshift::ClusterSecurityGroup";
    ResourceType["ClusterSnapshot"] = "AWS::Redshift::ClusterSnapshot";
    ResourceType["ClusterSubnetGroup"] = "AWS::Redshift::ClusterSubnetGroup";
    ResourceType["ConformancePackCompliance"] = "AWS::Config::ConformancePackCompliance";
    ResourceType["CustomerGateway"] = "AWS::EC2::CustomerGateway";
    ResourceType["DBCluster"] = "AWS::RDS::DBCluster";
    ResourceType["DBClusterSnapshot"] = "AWS::RDS::DBClusterSnapshot";
    ResourceType["DBInstance"] = "AWS::RDS::DBInstance";
    ResourceType["DBSecurityGroup"] = "AWS::RDS::DBSecurityGroup";
    ResourceType["DBSnapshot"] = "AWS::RDS::DBSnapshot";
    ResourceType["DBSubnetGroup"] = "AWS::RDS::DBSubnetGroup";
    ResourceType["Distribution"] = "AWS::CloudFront::Distribution";
    ResourceType["Domain"] = "AWS::Elasticsearch::Domain";
    ResourceType["EIP"] = "AWS::EC2::EIP";
    ResourceType["EgressOnlyInternetGateway"] = "AWS::EC2::EgressOnlyInternetGateway";
    ResourceType["EncryptionConfig"] = "AWS::XRay::EncryptionConfig";
    ResourceType["Environment"] = "AWS::ElasticBeanstalk::Environment";
    ResourceType["EventSubscription"] = "AWS::RDS::EventSubscription";
    ResourceType["FileData"] = "AWS::SSM::FileData";
    ResourceType["FlowLog"] = "AWS::EC2::FlowLog";
    ResourceType["Function"] = "AWS::Lambda::Function";
    ResourceType["Group"] = "AWS::IAM::Group";
    ResourceType["Host"] = "AWS::EC2::Host";
    ResourceType["IPSetV2"] = "AWS::WAFv2::IPSet";
    ResourceType["Instance"] = "AWS::EC2::Instance";
    ResourceType["InternetGateway"] = "AWS::EC2::InternetGateway";
    ResourceType["Key"] = "AWS::KMS::Key";
    ResourceType["LaunchConfiguration"] = "AWS::AutoScaling::LaunchConfiguration";
    ResourceType["LoadBalancer"] = "AWS::ElasticLoadBalancing::LoadBalancer";
    ResourceType["LoadBalancerV2"] = "AWS::ElasticLoadBalancingV2::LoadBalancer";
    ResourceType["ManagedInstanceInventory"] = "AWS::SSM::ManagedInstanceInventory";
    ResourceType["ManagedRuleSetV2"] = "AWS::WAFv2::ManagedRuleSet";
    ResourceType["NatGateway"] = "AWS::EC2::NatGateway";
    ResourceType["NetworkAcl"] = "AWS::EC2::NetworkAcl";
    ResourceType["NetworkFirewallFirewall"] = "AWS::NetworkFirewall::Firewall";
    ResourceType["NetworkFirewallFirewallPolicy"] = "AWS::NetworkFirewall::FirewallPolicy";
    ResourceType["NetworkFirewallRuleGroup"] = "AWS::NetworkFirewall::RuleGroup";
    ResourceType["NetworkInterface"] = "AWS::EC2::NetworkInterface";
    ResourceType["PatchCompliance"] = "AWS::SSM::PatchCompliance";
    ResourceType["Pipeline"] = "AWS::CodePipeline::Pipeline";
    ResourceType["Policy"] = "AWS::IAM::Policy";
    ResourceType["Portfolio"] = "AWS::ServiceCatalog::Portfolio";
    ResourceType["Project"] = "AWS::CodeBuild::Project";
    ResourceType["Protection"] = "AWS::Shield::Protection";
    ResourceType["QLDBLedger"] = "AWS::QLDB::Ledger";
    ResourceType["Queue"] = "AWS::SQS::Queue";
    ResourceType["RateBasedRule"] = "AWS::WAF::RateBasedRule";
    ResourceType["RedshiftEventSubscription"] = "AWS::Redshift::EventSubscription";
    ResourceType["RegexPatternSetV2"] = "AWS::WAFv2::RegexPatternSet";
    ResourceType["RegionalProtection"] = "AWS::ShieldRegional::Protection";
    ResourceType["RegionalRateBasedRule"] = "AWS::WAFRegional::RateBasedRule";
    ResourceType["RegionalRule"] = "AWS::WAFRegional::Rule";
    ResourceType["RegionalRuleGroup"] = "AWS::WAFRegional::RuleGroup";
    ResourceType["RegionalWebACL"] = "AWS::WAFRegional::WebACL";
    ResourceType["RegisteredHAInstance"] = "AWS::EC2::RegisteredHAInstance";
    ResourceType["ResourceCompliance"] = "AWS::Config::ResourceCompliance";
    ResourceType["RestApi"] = "AWS::ApiGateway::RestApi";
    ResourceType["Role"] = "AWS::IAM::Role";
    ResourceType["RouteTable"] = "AWS::EC2::RouteTable";
    ResourceType["Rule"] = "AWS::WAF::Rule";
    ResourceType["RuleGroup"] = "AWS::WAF::RuleGroup";
    ResourceType["RuleGroupV2"] = "AWS::WAFv2::RuleGroup";
    ResourceType["ScalingPolicy"] = "AWS::AutoScaling::ScalingPolicy";
    ResourceType["ScheduledAction"] = "AWS::AutoScaling::ScheduledAction";
    ResourceType["Secret"] = "AWS::SecretsManager::Secret";
    ResourceType["SecurityGroup"] = "AWS::EC2::SecurityGroup";
    ResourceType["Stack"] = "AWS::CloudFormation::Stack";
    ResourceType["Stage"] = "AWS::ApiGateway::Stage";
    ResourceType["StageV2"] = "AWS::ApiGatewayV2::Stage";
    ResourceType["StreamingDistribution"] = "AWS::CloudFront::StreamingDistribution";
    ResourceType["Subnet"] = "AWS::EC2::Subnet";
    ResourceType["Table"] = "AWS::DynamoDB::Table";
    ResourceType["Topic"] = "AWS::SNS::Topic";
    ResourceType["Trail"] = "AWS::CloudTrail::Trail";
    ResourceType["User"] = "AWS::IAM::User";
    ResourceType["VPC"] = "AWS::EC2::VPC";
    ResourceType["VPCEndpoint"] = "AWS::EC2::VPCEndpoint";
    ResourceType["VPCEndpointService"] = "AWS::EC2::VPCEndpointService";
    ResourceType["VPCPeeringConnection"] = "AWS::EC2::VPCPeeringConnection";
    ResourceType["VPNConnection"] = "AWS::EC2::VPNConnection";
    ResourceType["VPNGateway"] = "AWS::EC2::VPNGateway";
    ResourceType["Volume"] = "AWS::EC2::Volume";
    ResourceType["WebACL"] = "AWS::WAF::WebACL";
    ResourceType["WebACLV2"] = "AWS::WAFv2::WebACL";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var AggregateResourceIdentifier;
(function (AggregateResourceIdentifier) {
    /**
     * @internal
     */
    AggregateResourceIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregateResourceIdentifier = exports.AggregateResourceIdentifier || (exports.AggregateResourceIdentifier = {}));
var AggregationAuthorization;
(function (AggregationAuthorization) {
    /**
     * @internal
     */
    AggregationAuthorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AggregationAuthorization = exports.AggregationAuthorization || (exports.AggregationAuthorization = {}));
var ConfigurationItemStatus;
(function (ConfigurationItemStatus) {
    ConfigurationItemStatus["OK"] = "OK";
    ConfigurationItemStatus["ResourceDeleted"] = "ResourceDeleted";
    ConfigurationItemStatus["ResourceDeletedNotRecorded"] = "ResourceDeletedNotRecorded";
    ConfigurationItemStatus["ResourceDiscovered"] = "ResourceDiscovered";
    ConfigurationItemStatus["ResourceNotRecorded"] = "ResourceNotRecorded";
})(ConfigurationItemStatus = exports.ConfigurationItemStatus || (exports.ConfigurationItemStatus = {}));
var BaseConfigurationItem;
(function (BaseConfigurationItem) {
    /**
     * @internal
     */
    BaseConfigurationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaseConfigurationItem = exports.BaseConfigurationItem || (exports.BaseConfigurationItem = {}));
var BatchGetAggregateResourceConfigRequest;
(function (BatchGetAggregateResourceConfigRequest) {
    /**
     * @internal
     */
    BatchGetAggregateResourceConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetAggregateResourceConfigRequest = exports.BatchGetAggregateResourceConfigRequest || (exports.BatchGetAggregateResourceConfigRequest = {}));
var BatchGetAggregateResourceConfigResponse;
(function (BatchGetAggregateResourceConfigResponse) {
    /**
     * @internal
     */
    BatchGetAggregateResourceConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetAggregateResourceConfigResponse = exports.BatchGetAggregateResourceConfigResponse || (exports.BatchGetAggregateResourceConfigResponse = {}));
var NoSuchConfigurationAggregatorException;
(function (NoSuchConfigurationAggregatorException) {
    /**
     * @internal
     */
    NoSuchConfigurationAggregatorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchConfigurationAggregatorException = exports.NoSuchConfigurationAggregatorException || (exports.NoSuchConfigurationAggregatorException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ResourceKey;
(function (ResourceKey) {
    /**
     * @internal
     */
    ResourceKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceKey = exports.ResourceKey || (exports.ResourceKey = {}));
var BatchGetResourceConfigRequest;
(function (BatchGetResourceConfigRequest) {
    /**
     * @internal
     */
    BatchGetResourceConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetResourceConfigRequest = exports.BatchGetResourceConfigRequest || (exports.BatchGetResourceConfigRequest = {}));
var BatchGetResourceConfigResponse;
(function (BatchGetResourceConfigResponse) {
    /**
     * @internal
     */
    BatchGetResourceConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetResourceConfigResponse = exports.BatchGetResourceConfigResponse || (exports.BatchGetResourceConfigResponse = {}));
var NoAvailableConfigurationRecorderException;
(function (NoAvailableConfigurationRecorderException) {
    /**
     * @internal
     */
    NoAvailableConfigurationRecorderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAvailableConfigurationRecorderException = exports.NoAvailableConfigurationRecorderException || (exports.NoAvailableConfigurationRecorderException = {}));
var ChronologicalOrder;
(function (ChronologicalOrder) {
    ChronologicalOrder["Forward"] = "Forward";
    ChronologicalOrder["Reverse"] = "Reverse";
})(ChronologicalOrder = exports.ChronologicalOrder || (exports.ChronologicalOrder = {}));
var ComplianceByConfigRule;
(function (ComplianceByConfigRule) {
    /**
     * @internal
     */
    ComplianceByConfigRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceByConfigRule = exports.ComplianceByConfigRule || (exports.ComplianceByConfigRule = {}));
var ComplianceByResource;
(function (ComplianceByResource) {
    /**
     * @internal
     */
    ComplianceByResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceByResource = exports.ComplianceByResource || (exports.ComplianceByResource = {}));
var ComplianceSummaryByResourceType;
(function (ComplianceSummaryByResourceType) {
    /**
     * @internal
     */
    ComplianceSummaryByResourceType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceSummaryByResourceType = exports.ComplianceSummaryByResourceType || (exports.ComplianceSummaryByResourceType = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["Failure"] = "Failure";
    DeliveryStatus["Not_Applicable"] = "Not_Applicable";
    DeliveryStatus["Success"] = "Success";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var ConfigExportDeliveryInfo;
(function (ConfigExportDeliveryInfo) {
    /**
     * @internal
     */
    ConfigExportDeliveryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigExportDeliveryInfo = exports.ConfigExportDeliveryInfo || (exports.ConfigExportDeliveryInfo = {}));
var ConfigRuleState;
(function (ConfigRuleState) {
    ConfigRuleState["ACTIVE"] = "ACTIVE";
    ConfigRuleState["DELETING"] = "DELETING";
    ConfigRuleState["DELETING_RESULTS"] = "DELETING_RESULTS";
    ConfigRuleState["EVALUATING"] = "EVALUATING";
})(ConfigRuleState = exports.ConfigRuleState || (exports.ConfigRuleState = {}));
var MaximumExecutionFrequency;
(function (MaximumExecutionFrequency) {
    MaximumExecutionFrequency["One_Hour"] = "One_Hour";
    MaximumExecutionFrequency["Six_Hours"] = "Six_Hours";
    MaximumExecutionFrequency["Three_Hours"] = "Three_Hours";
    MaximumExecutionFrequency["Twelve_Hours"] = "Twelve_Hours";
    MaximumExecutionFrequency["TwentyFour_Hours"] = "TwentyFour_Hours";
})(MaximumExecutionFrequency = exports.MaximumExecutionFrequency || (exports.MaximumExecutionFrequency = {}));
var Scope;
(function (Scope) {
    /**
     * @internal
     */
    Scope.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scope = exports.Scope || (exports.Scope = {}));
var Owner;
(function (Owner) {
    Owner["Aws"] = "AWS";
    Owner["Custom_Lambda"] = "CUSTOM_LAMBDA";
})(Owner = exports.Owner || (exports.Owner = {}));
var EventSource;
(function (EventSource) {
    EventSource["Aws_Config"] = "aws.config";
})(EventSource = exports.EventSource || (exports.EventSource = {}));
var MessageType;
(function (MessageType) {
    MessageType["ConfigurationItemChangeNotification"] = "ConfigurationItemChangeNotification";
    MessageType["ConfigurationSnapshotDeliveryCompleted"] = "ConfigurationSnapshotDeliveryCompleted";
    MessageType["OversizedConfigurationItemChangeNotification"] = "OversizedConfigurationItemChangeNotification";
    MessageType["ScheduledNotification"] = "ScheduledNotification";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var SourceDetail;
(function (SourceDetail) {
    /**
     * @internal
     */
    SourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceDetail = exports.SourceDetail || (exports.SourceDetail = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var ConfigRule;
(function (ConfigRule) {
    /**
     * @internal
     */
    ConfigRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigRule = exports.ConfigRule || (exports.ConfigRule = {}));
var ConfigRuleComplianceFilters;
(function (ConfigRuleComplianceFilters) {
    /**
     * @internal
     */
    ConfigRuleComplianceFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigRuleComplianceFilters = exports.ConfigRuleComplianceFilters || (exports.ConfigRuleComplianceFilters = {}));
var ConfigRuleComplianceSummaryFilters;
(function (ConfigRuleComplianceSummaryFilters) {
    /**
     * @internal
     */
    ConfigRuleComplianceSummaryFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigRuleComplianceSummaryFilters = exports.ConfigRuleComplianceSummaryFilters || (exports.ConfigRuleComplianceSummaryFilters = {}));
var ConfigRuleComplianceSummaryGroupKey;
(function (ConfigRuleComplianceSummaryGroupKey) {
    ConfigRuleComplianceSummaryGroupKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    ConfigRuleComplianceSummaryGroupKey["AWS_REGION"] = "AWS_REGION";
})(ConfigRuleComplianceSummaryGroupKey = exports.ConfigRuleComplianceSummaryGroupKey || (exports.ConfigRuleComplianceSummaryGroupKey = {}));
var ConfigRuleEvaluationStatus;
(function (ConfigRuleEvaluationStatus) {
    /**
     * @internal
     */
    ConfigRuleEvaluationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigRuleEvaluationStatus = exports.ConfigRuleEvaluationStatus || (exports.ConfigRuleEvaluationStatus = {}));
var ConfigSnapshotDeliveryProperties;
(function (ConfigSnapshotDeliveryProperties) {
    /**
     * @internal
     */
    ConfigSnapshotDeliveryProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigSnapshotDeliveryProperties = exports.ConfigSnapshotDeliveryProperties || (exports.ConfigSnapshotDeliveryProperties = {}));
var ConfigStreamDeliveryInfo;
(function (ConfigStreamDeliveryInfo) {
    /**
     * @internal
     */
    ConfigStreamDeliveryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigStreamDeliveryInfo = exports.ConfigStreamDeliveryInfo || (exports.ConfigStreamDeliveryInfo = {}));
var OrganizationAggregationSource;
(function (OrganizationAggregationSource) {
    /**
     * @internal
     */
    OrganizationAggregationSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationAggregationSource = exports.OrganizationAggregationSource || (exports.OrganizationAggregationSource = {}));
var ConfigurationAggregator;
(function (ConfigurationAggregator) {
    /**
     * @internal
     */
    ConfigurationAggregator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationAggregator = exports.ConfigurationAggregator || (exports.ConfigurationAggregator = {}));
var Relationship;
(function (Relationship) {
    /**
     * @internal
     */
    Relationship.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Relationship = exports.Relationship || (exports.Relationship = {}));
var ConfigurationItem;
(function (ConfigurationItem) {
    /**
     * @internal
     */
    ConfigurationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationItem = exports.ConfigurationItem || (exports.ConfigurationItem = {}));
var RecordingGroup;
(function (RecordingGroup) {
    /**
     * @internal
     */
    RecordingGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordingGroup = exports.RecordingGroup || (exports.RecordingGroup = {}));
var ConfigurationRecorder;
(function (ConfigurationRecorder) {
    /**
     * @internal
     */
    ConfigurationRecorder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationRecorder = exports.ConfigurationRecorder || (exports.ConfigurationRecorder = {}));
var RecorderStatus;
(function (RecorderStatus) {
    RecorderStatus["Failure"] = "Failure";
    RecorderStatus["Pending"] = "Pending";
    RecorderStatus["Success"] = "Success";
})(RecorderStatus = exports.RecorderStatus || (exports.RecorderStatus = {}));
var ConfigurationRecorderStatus;
(function (ConfigurationRecorderStatus) {
    /**
     * @internal
     */
    ConfigurationRecorderStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationRecorderStatus = exports.ConfigurationRecorderStatus || (exports.ConfigurationRecorderStatus = {}));
var ConformancePackComplianceFilters;
(function (ConformancePackComplianceFilters) {
    /**
     * @internal
     */
    ConformancePackComplianceFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackComplianceFilters = exports.ConformancePackComplianceFilters || (exports.ConformancePackComplianceFilters = {}));
var ConformancePackComplianceSummary;
(function (ConformancePackComplianceSummary) {
    /**
     * @internal
     */
    ConformancePackComplianceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackComplianceSummary = exports.ConformancePackComplianceSummary || (exports.ConformancePackComplianceSummary = {}));
var ConformancePackInputParameter;
(function (ConformancePackInputParameter) {
    /**
     * @internal
     */
    ConformancePackInputParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackInputParameter = exports.ConformancePackInputParameter || (exports.ConformancePackInputParameter = {}));
var ConformancePackDetail;
(function (ConformancePackDetail) {
    /**
     * @internal
     */
    ConformancePackDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackDetail = exports.ConformancePackDetail || (exports.ConformancePackDetail = {}));
var ConformancePackEvaluationFilters;
(function (ConformancePackEvaluationFilters) {
    /**
     * @internal
     */
    ConformancePackEvaluationFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackEvaluationFilters = exports.ConformancePackEvaluationFilters || (exports.ConformancePackEvaluationFilters = {}));
var ConformancePackEvaluationResult;
(function (ConformancePackEvaluationResult) {
    /**
     * @internal
     */
    ConformancePackEvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackEvaluationResult = exports.ConformancePackEvaluationResult || (exports.ConformancePackEvaluationResult = {}));
var ConformancePackRuleCompliance;
(function (ConformancePackRuleCompliance) {
    /**
     * @internal
     */
    ConformancePackRuleCompliance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackRuleCompliance = exports.ConformancePackRuleCompliance || (exports.ConformancePackRuleCompliance = {}));
var ConformancePackState;
(function (ConformancePackState) {
    ConformancePackState["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    ConformancePackState["CREATE_FAILED"] = "CREATE_FAILED";
    ConformancePackState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ConformancePackState["DELETE_FAILED"] = "DELETE_FAILED";
    ConformancePackState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
})(ConformancePackState = exports.ConformancePackState || (exports.ConformancePackState = {}));
var ConformancePackStatusDetail;
(function (ConformancePackStatusDetail) {
    /**
     * @internal
     */
    ConformancePackStatusDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackStatusDetail = exports.ConformancePackStatusDetail || (exports.ConformancePackStatusDetail = {}));
var ConformancePackTemplateValidationException;
(function (ConformancePackTemplateValidationException) {
    /**
     * @internal
     */
    ConformancePackTemplateValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConformancePackTemplateValidationException = exports.ConformancePackTemplateValidationException || (exports.ConformancePackTemplateValidationException = {}));
var DeleteAggregationAuthorizationRequest;
(function (DeleteAggregationAuthorizationRequest) {
    /**
     * @internal
     */
    DeleteAggregationAuthorizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAggregationAuthorizationRequest = exports.DeleteAggregationAuthorizationRequest || (exports.DeleteAggregationAuthorizationRequest = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var DeleteConfigRuleRequest;
(function (DeleteConfigRuleRequest) {
    /**
     * @internal
     */
    DeleteConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigRuleRequest = exports.DeleteConfigRuleRequest || (exports.DeleteConfigRuleRequest = {}));
var NoSuchConfigRuleException;
(function (NoSuchConfigRuleException) {
    /**
     * @internal
     */
    NoSuchConfigRuleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchConfigRuleException = exports.NoSuchConfigRuleException || (exports.NoSuchConfigRuleException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteConfigurationAggregatorRequest;
(function (DeleteConfigurationAggregatorRequest) {
    /**
     * @internal
     */
    DeleteConfigurationAggregatorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationAggregatorRequest = exports.DeleteConfigurationAggregatorRequest || (exports.DeleteConfigurationAggregatorRequest = {}));
var DeleteConfigurationRecorderRequest;
(function (DeleteConfigurationRecorderRequest) {
    /**
     * @internal
     */
    DeleteConfigurationRecorderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationRecorderRequest = exports.DeleteConfigurationRecorderRequest || (exports.DeleteConfigurationRecorderRequest = {}));
var NoSuchConfigurationRecorderException;
(function (NoSuchConfigurationRecorderException) {
    /**
     * @internal
     */
    NoSuchConfigurationRecorderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchConfigurationRecorderException = exports.NoSuchConfigurationRecorderException || (exports.NoSuchConfigurationRecorderException = {}));
var DeleteConformancePackRequest;
(function (DeleteConformancePackRequest) {
    /**
     * @internal
     */
    DeleteConformancePackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConformancePackRequest = exports.DeleteConformancePackRequest || (exports.DeleteConformancePackRequest = {}));
var NoSuchConformancePackException;
(function (NoSuchConformancePackException) {
    /**
     * @internal
     */
    NoSuchConformancePackException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchConformancePackException = exports.NoSuchConformancePackException || (exports.NoSuchConformancePackException = {}));
var DeleteDeliveryChannelRequest;
(function (DeleteDeliveryChannelRequest) {
    /**
     * @internal
     */
    DeleteDeliveryChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeliveryChannelRequest = exports.DeleteDeliveryChannelRequest || (exports.DeleteDeliveryChannelRequest = {}));
var LastDeliveryChannelDeleteFailedException;
(function (LastDeliveryChannelDeleteFailedException) {
    /**
     * @internal
     */
    LastDeliveryChannelDeleteFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastDeliveryChannelDeleteFailedException = exports.LastDeliveryChannelDeleteFailedException || (exports.LastDeliveryChannelDeleteFailedException = {}));
var NoSuchDeliveryChannelException;
(function (NoSuchDeliveryChannelException) {
    /**
     * @internal
     */
    NoSuchDeliveryChannelException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchDeliveryChannelException = exports.NoSuchDeliveryChannelException || (exports.NoSuchDeliveryChannelException = {}));
var DeleteEvaluationResultsRequest;
(function (DeleteEvaluationResultsRequest) {
    /**
     * @internal
     */
    DeleteEvaluationResultsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEvaluationResultsRequest = exports.DeleteEvaluationResultsRequest || (exports.DeleteEvaluationResultsRequest = {}));
var DeleteEvaluationResultsResponse;
(function (DeleteEvaluationResultsResponse) {
    /**
     * @internal
     */
    DeleteEvaluationResultsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEvaluationResultsResponse = exports.DeleteEvaluationResultsResponse || (exports.DeleteEvaluationResultsResponse = {}));
var DeleteOrganizationConfigRuleRequest;
(function (DeleteOrganizationConfigRuleRequest) {
    /**
     * @internal
     */
    DeleteOrganizationConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOrganizationConfigRuleRequest = exports.DeleteOrganizationConfigRuleRequest || (exports.DeleteOrganizationConfigRuleRequest = {}));
var NoSuchOrganizationConfigRuleException;
(function (NoSuchOrganizationConfigRuleException) {
    /**
     * @internal
     */
    NoSuchOrganizationConfigRuleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchOrganizationConfigRuleException = exports.NoSuchOrganizationConfigRuleException || (exports.NoSuchOrganizationConfigRuleException = {}));
var OrganizationAccessDeniedException;
(function (OrganizationAccessDeniedException) {
    /**
     * @internal
     */
    OrganizationAccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationAccessDeniedException = exports.OrganizationAccessDeniedException || (exports.OrganizationAccessDeniedException = {}));
var DeleteOrganizationConformancePackRequest;
(function (DeleteOrganizationConformancePackRequest) {
    /**
     * @internal
     */
    DeleteOrganizationConformancePackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOrganizationConformancePackRequest = exports.DeleteOrganizationConformancePackRequest || (exports.DeleteOrganizationConformancePackRequest = {}));
var NoSuchOrganizationConformancePackException;
(function (NoSuchOrganizationConformancePackException) {
    /**
     * @internal
     */
    NoSuchOrganizationConformancePackException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchOrganizationConformancePackException = exports.NoSuchOrganizationConformancePackException || (exports.NoSuchOrganizationConformancePackException = {}));
var DeletePendingAggregationRequestRequest;
(function (DeletePendingAggregationRequestRequest) {
    /**
     * @internal
     */
    DeletePendingAggregationRequestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePendingAggregationRequestRequest = exports.DeletePendingAggregationRequestRequest || (exports.DeletePendingAggregationRequestRequest = {}));
var DeleteRemediationConfigurationRequest;
(function (DeleteRemediationConfigurationRequest) {
    /**
     * @internal
     */
    DeleteRemediationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemediationConfigurationRequest = exports.DeleteRemediationConfigurationRequest || (exports.DeleteRemediationConfigurationRequest = {}));
var DeleteRemediationConfigurationResponse;
(function (DeleteRemediationConfigurationResponse) {
    /**
     * @internal
     */
    DeleteRemediationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemediationConfigurationResponse = exports.DeleteRemediationConfigurationResponse || (exports.DeleteRemediationConfigurationResponse = {}));
var InsufficientPermissionsException;
(function (InsufficientPermissionsException) {
    /**
     * @internal
     */
    InsufficientPermissionsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientPermissionsException = exports.InsufficientPermissionsException || (exports.InsufficientPermissionsException = {}));
var NoSuchRemediationConfigurationException;
(function (NoSuchRemediationConfigurationException) {
    /**
     * @internal
     */
    NoSuchRemediationConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchRemediationConfigurationException = exports.NoSuchRemediationConfigurationException || (exports.NoSuchRemediationConfigurationException = {}));
var RemediationInProgressException;
(function (RemediationInProgressException) {
    /**
     * @internal
     */
    RemediationInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationInProgressException = exports.RemediationInProgressException || (exports.RemediationInProgressException = {}));
var RemediationExceptionResourceKey;
(function (RemediationExceptionResourceKey) {
    /**
     * @internal
     */
    RemediationExceptionResourceKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationExceptionResourceKey = exports.RemediationExceptionResourceKey || (exports.RemediationExceptionResourceKey = {}));
var DeleteRemediationExceptionsRequest;
(function (DeleteRemediationExceptionsRequest) {
    /**
     * @internal
     */
    DeleteRemediationExceptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemediationExceptionsRequest = exports.DeleteRemediationExceptionsRequest || (exports.DeleteRemediationExceptionsRequest = {}));
var FailedDeleteRemediationExceptionsBatch;
(function (FailedDeleteRemediationExceptionsBatch) {
    /**
     * @internal
     */
    FailedDeleteRemediationExceptionsBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedDeleteRemediationExceptionsBatch = exports.FailedDeleteRemediationExceptionsBatch || (exports.FailedDeleteRemediationExceptionsBatch = {}));
var DeleteRemediationExceptionsResponse;
(function (DeleteRemediationExceptionsResponse) {
    /**
     * @internal
     */
    DeleteRemediationExceptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemediationExceptionsResponse = exports.DeleteRemediationExceptionsResponse || (exports.DeleteRemediationExceptionsResponse = {}));
var NoSuchRemediationExceptionException;
(function (NoSuchRemediationExceptionException) {
    /**
     * @internal
     */
    NoSuchRemediationExceptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchRemediationExceptionException = exports.NoSuchRemediationExceptionException || (exports.NoSuchRemediationExceptionException = {}));
var DeleteResourceConfigRequest;
(function (DeleteResourceConfigRequest) {
    /**
     * @internal
     */
    DeleteResourceConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceConfigRequest = exports.DeleteResourceConfigRequest || (exports.DeleteResourceConfigRequest = {}));
var NoRunningConfigurationRecorderException;
(function (NoRunningConfigurationRecorderException) {
    /**
     * @internal
     */
    NoRunningConfigurationRecorderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoRunningConfigurationRecorderException = exports.NoRunningConfigurationRecorderException || (exports.NoRunningConfigurationRecorderException = {}));
var DeleteRetentionConfigurationRequest;
(function (DeleteRetentionConfigurationRequest) {
    /**
     * @internal
     */
    DeleteRetentionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRetentionConfigurationRequest = exports.DeleteRetentionConfigurationRequest || (exports.DeleteRetentionConfigurationRequest = {}));
var NoSuchRetentionConfigurationException;
(function (NoSuchRetentionConfigurationException) {
    /**
     * @internal
     */
    NoSuchRetentionConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchRetentionConfigurationException = exports.NoSuchRetentionConfigurationException || (exports.NoSuchRetentionConfigurationException = {}));
var DeleteStoredQueryRequest;
(function (DeleteStoredQueryRequest) {
    /**
     * @internal
     */
    DeleteStoredQueryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStoredQueryRequest = exports.DeleteStoredQueryRequest || (exports.DeleteStoredQueryRequest = {}));
var DeleteStoredQueryResponse;
(function (DeleteStoredQueryResponse) {
    /**
     * @internal
     */
    DeleteStoredQueryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStoredQueryResponse = exports.DeleteStoredQueryResponse || (exports.DeleteStoredQueryResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeliverConfigSnapshotRequest;
(function (DeliverConfigSnapshotRequest) {
    /**
     * @internal
     */
    DeliverConfigSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliverConfigSnapshotRequest = exports.DeliverConfigSnapshotRequest || (exports.DeliverConfigSnapshotRequest = {}));
var DeliverConfigSnapshotResponse;
(function (DeliverConfigSnapshotResponse) {
    /**
     * @internal
     */
    DeliverConfigSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliverConfigSnapshotResponse = exports.DeliverConfigSnapshotResponse || (exports.DeliverConfigSnapshotResponse = {}));
var DeliveryChannel;
(function (DeliveryChannel) {
    /**
     * @internal
     */
    DeliveryChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliveryChannel = exports.DeliveryChannel || (exports.DeliveryChannel = {}));
var DeliveryChannelStatus;
(function (DeliveryChannelStatus) {
    /**
     * @internal
     */
    DeliveryChannelStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliveryChannelStatus = exports.DeliveryChannelStatus || (exports.DeliveryChannelStatus = {}));
var DescribeAggregateComplianceByConfigRulesRequest;
(function (DescribeAggregateComplianceByConfigRulesRequest) {
    /**
     * @internal
     */
    DescribeAggregateComplianceByConfigRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateComplianceByConfigRulesRequest = exports.DescribeAggregateComplianceByConfigRulesRequest || (exports.DescribeAggregateComplianceByConfigRulesRequest = {}));
var DescribeAggregateComplianceByConfigRulesResponse;
(function (DescribeAggregateComplianceByConfigRulesResponse) {
    /**
     * @internal
     */
    DescribeAggregateComplianceByConfigRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateComplianceByConfigRulesResponse = exports.DescribeAggregateComplianceByConfigRulesResponse || (exports.DescribeAggregateComplianceByConfigRulesResponse = {}));
var InvalidLimitException;
(function (InvalidLimitException) {
    /**
     * @internal
     */
    InvalidLimitException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLimitException = exports.InvalidLimitException || (exports.InvalidLimitException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var DescribeAggregateComplianceByConformancePacksRequest;
(function (DescribeAggregateComplianceByConformancePacksRequest) {
    /**
     * @internal
     */
    DescribeAggregateComplianceByConformancePacksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateComplianceByConformancePacksRequest = exports.DescribeAggregateComplianceByConformancePacksRequest || (exports.DescribeAggregateComplianceByConformancePacksRequest = {}));
var DescribeAggregateComplianceByConformancePacksResponse;
(function (DescribeAggregateComplianceByConformancePacksResponse) {
    /**
     * @internal
     */
    DescribeAggregateComplianceByConformancePacksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateComplianceByConformancePacksResponse = exports.DescribeAggregateComplianceByConformancePacksResponse || (exports.DescribeAggregateComplianceByConformancePacksResponse = {}));
var DescribeAggregationAuthorizationsRequest;
(function (DescribeAggregationAuthorizationsRequest) {
    /**
     * @internal
     */
    DescribeAggregationAuthorizationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregationAuthorizationsRequest = exports.DescribeAggregationAuthorizationsRequest || (exports.DescribeAggregationAuthorizationsRequest = {}));
var DescribeAggregationAuthorizationsResponse;
(function (DescribeAggregationAuthorizationsResponse) {
    /**
     * @internal
     */
    DescribeAggregationAuthorizationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregationAuthorizationsResponse = exports.DescribeAggregationAuthorizationsResponse || (exports.DescribeAggregationAuthorizationsResponse = {}));
var DescribeComplianceByConfigRuleRequest;
(function (DescribeComplianceByConfigRuleRequest) {
    /**
     * @internal
     */
    DescribeComplianceByConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeComplianceByConfigRuleRequest = exports.DescribeComplianceByConfigRuleRequest || (exports.DescribeComplianceByConfigRuleRequest = {}));
var DescribeComplianceByConfigRuleResponse;
(function (DescribeComplianceByConfigRuleResponse) {
    /**
     * @internal
     */
    DescribeComplianceByConfigRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeComplianceByConfigRuleResponse = exports.DescribeComplianceByConfigRuleResponse || (exports.DescribeComplianceByConfigRuleResponse = {}));
var DescribeComplianceByResourceRequest;
(function (DescribeComplianceByResourceRequest) {
    /**
     * @internal
     */
    DescribeComplianceByResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeComplianceByResourceRequest = exports.DescribeComplianceByResourceRequest || (exports.DescribeComplianceByResourceRequest = {}));
var DescribeComplianceByResourceResponse;
(function (DescribeComplianceByResourceResponse) {
    /**
     * @internal
     */
    DescribeComplianceByResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeComplianceByResourceResponse = exports.DescribeComplianceByResourceResponse || (exports.DescribeComplianceByResourceResponse = {}));
var DescribeConfigRuleEvaluationStatusRequest;
(function (DescribeConfigRuleEvaluationStatusRequest) {
    /**
     * @internal
     */
    DescribeConfigRuleEvaluationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigRuleEvaluationStatusRequest = exports.DescribeConfigRuleEvaluationStatusRequest || (exports.DescribeConfigRuleEvaluationStatusRequest = {}));
var DescribeConfigRuleEvaluationStatusResponse;
(function (DescribeConfigRuleEvaluationStatusResponse) {
    /**
     * @internal
     */
    DescribeConfigRuleEvaluationStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigRuleEvaluationStatusResponse = exports.DescribeConfigRuleEvaluationStatusResponse || (exports.DescribeConfigRuleEvaluationStatusResponse = {}));
var DescribeConfigRulesRequest;
(function (DescribeConfigRulesRequest) {
    /**
     * @internal
     */
    DescribeConfigRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigRulesRequest = exports.DescribeConfigRulesRequest || (exports.DescribeConfigRulesRequest = {}));
var DescribeConfigRulesResponse;
(function (DescribeConfigRulesResponse) {
    /**
     * @internal
     */
    DescribeConfigRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigRulesResponse = exports.DescribeConfigRulesResponse || (exports.DescribeConfigRulesResponse = {}));
var DescribeConfigurationAggregatorsRequest;
(function (DescribeConfigurationAggregatorsRequest) {
    /**
     * @internal
     */
    DescribeConfigurationAggregatorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationAggregatorsRequest = exports.DescribeConfigurationAggregatorsRequest || (exports.DescribeConfigurationAggregatorsRequest = {}));
var DescribeConfigurationAggregatorsResponse;
(function (DescribeConfigurationAggregatorsResponse) {
    /**
     * @internal
     */
    DescribeConfigurationAggregatorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationAggregatorsResponse = exports.DescribeConfigurationAggregatorsResponse || (exports.DescribeConfigurationAggregatorsResponse = {}));
var DescribeConfigurationAggregatorSourcesStatusRequest;
(function (DescribeConfigurationAggregatorSourcesStatusRequest) {
    /**
     * @internal
     */
    DescribeConfigurationAggregatorSourcesStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationAggregatorSourcesStatusRequest = exports.DescribeConfigurationAggregatorSourcesStatusRequest || (exports.DescribeConfigurationAggregatorSourcesStatusRequest = {}));
var DescribeConfigurationAggregatorSourcesStatusResponse;
(function (DescribeConfigurationAggregatorSourcesStatusResponse) {
    /**
     * @internal
     */
    DescribeConfigurationAggregatorSourcesStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationAggregatorSourcesStatusResponse = exports.DescribeConfigurationAggregatorSourcesStatusResponse || (exports.DescribeConfigurationAggregatorSourcesStatusResponse = {}));
var DescribeConfigurationRecordersRequest;
(function (DescribeConfigurationRecordersRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRecordersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRecordersRequest = exports.DescribeConfigurationRecordersRequest || (exports.DescribeConfigurationRecordersRequest = {}));
var DescribeConfigurationRecordersResponse;
(function (DescribeConfigurationRecordersResponse) {
    /**
     * @internal
     */
    DescribeConfigurationRecordersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRecordersResponse = exports.DescribeConfigurationRecordersResponse || (exports.DescribeConfigurationRecordersResponse = {}));
var DescribeConfigurationRecorderStatusRequest;
(function (DescribeConfigurationRecorderStatusRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRecorderStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRecorderStatusRequest = exports.DescribeConfigurationRecorderStatusRequest || (exports.DescribeConfigurationRecorderStatusRequest = {}));
var DescribeConfigurationRecorderStatusResponse;
(function (DescribeConfigurationRecorderStatusResponse) {
    /**
     * @internal
     */
    DescribeConfigurationRecorderStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRecorderStatusResponse = exports.DescribeConfigurationRecorderStatusResponse || (exports.DescribeConfigurationRecorderStatusResponse = {}));
var DescribeConformancePackComplianceRequest;
(function (DescribeConformancePackComplianceRequest) {
    /**
     * @internal
     */
    DescribeConformancePackComplianceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePackComplianceRequest = exports.DescribeConformancePackComplianceRequest || (exports.DescribeConformancePackComplianceRequest = {}));
var DescribeConformancePackComplianceResponse;
(function (DescribeConformancePackComplianceResponse) {
    /**
     * @internal
     */
    DescribeConformancePackComplianceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePackComplianceResponse = exports.DescribeConformancePackComplianceResponse || (exports.DescribeConformancePackComplianceResponse = {}));
var NoSuchConfigRuleInConformancePackException;
(function (NoSuchConfigRuleInConformancePackException) {
    /**
     * @internal
     */
    NoSuchConfigRuleInConformancePackException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchConfigRuleInConformancePackException = exports.NoSuchConfigRuleInConformancePackException || (exports.NoSuchConfigRuleInConformancePackException = {}));
var DescribeConformancePacksRequest;
(function (DescribeConformancePacksRequest) {
    /**
     * @internal
     */
    DescribeConformancePacksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePacksRequest = exports.DescribeConformancePacksRequest || (exports.DescribeConformancePacksRequest = {}));
var DescribeConformancePacksResponse;
(function (DescribeConformancePacksResponse) {
    /**
     * @internal
     */
    DescribeConformancePacksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePacksResponse = exports.DescribeConformancePacksResponse || (exports.DescribeConformancePacksResponse = {}));
var DescribeConformancePackStatusRequest;
(function (DescribeConformancePackStatusRequest) {
    /**
     * @internal
     */
    DescribeConformancePackStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePackStatusRequest = exports.DescribeConformancePackStatusRequest || (exports.DescribeConformancePackStatusRequest = {}));
var DescribeConformancePackStatusResponse;
(function (DescribeConformancePackStatusResponse) {
    /**
     * @internal
     */
    DescribeConformancePackStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConformancePackStatusResponse = exports.DescribeConformancePackStatusResponse || (exports.DescribeConformancePackStatusResponse = {}));
var DescribeDeliveryChannelsRequest;
(function (DescribeDeliveryChannelsRequest) {
    /**
     * @internal
     */
    DescribeDeliveryChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeliveryChannelsRequest = exports.DescribeDeliveryChannelsRequest || (exports.DescribeDeliveryChannelsRequest = {}));
var DescribeDeliveryChannelsResponse;
(function (DescribeDeliveryChannelsResponse) {
    /**
     * @internal
     */
    DescribeDeliveryChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeliveryChannelsResponse = exports.DescribeDeliveryChannelsResponse || (exports.DescribeDeliveryChannelsResponse = {}));
var DescribeDeliveryChannelStatusRequest;
(function (DescribeDeliveryChannelStatusRequest) {
    /**
     * @internal
     */
    DescribeDeliveryChannelStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeliveryChannelStatusRequest = exports.DescribeDeliveryChannelStatusRequest || (exports.DescribeDeliveryChannelStatusRequest = {}));
var DescribeDeliveryChannelStatusResponse;
(function (DescribeDeliveryChannelStatusResponse) {
    /**
     * @internal
     */
    DescribeDeliveryChannelStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeliveryChannelStatusResponse = exports.DescribeDeliveryChannelStatusResponse || (exports.DescribeDeliveryChannelStatusResponse = {}));
var DescribeOrganizationConfigRulesRequest;
(function (DescribeOrganizationConfigRulesRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigRulesRequest = exports.DescribeOrganizationConfigRulesRequest || (exports.DescribeOrganizationConfigRulesRequest = {}));
var OrganizationConfigRuleTriggerType;
(function (OrganizationConfigRuleTriggerType) {
    OrganizationConfigRuleTriggerType["CONFIGURATION_ITEM_CHANGE_NOTIFICATION"] = "ConfigurationItemChangeNotification";
    OrganizationConfigRuleTriggerType["OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION"] = "OversizedConfigurationItemChangeNotification";
    OrganizationConfigRuleTriggerType["SCHEDULED_NOTIFICATION"] = "ScheduledNotification";
})(OrganizationConfigRuleTriggerType = exports.OrganizationConfigRuleTriggerType || (exports.OrganizationConfigRuleTriggerType = {}));
var OrganizationCustomRuleMetadata;
(function (OrganizationCustomRuleMetadata) {
    /**
     * @internal
     */
    OrganizationCustomRuleMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationCustomRuleMetadata = exports.OrganizationCustomRuleMetadata || (exports.OrganizationCustomRuleMetadata = {}));
var OrganizationManagedRuleMetadata;
(function (OrganizationManagedRuleMetadata) {
    /**
     * @internal
     */
    OrganizationManagedRuleMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationManagedRuleMetadata = exports.OrganizationManagedRuleMetadata || (exports.OrganizationManagedRuleMetadata = {}));
var OrganizationConfigRule;
(function (OrganizationConfigRule) {
    /**
     * @internal
     */
    OrganizationConfigRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConfigRule = exports.OrganizationConfigRule || (exports.OrganizationConfigRule = {}));
var DescribeOrganizationConfigRulesResponse;
(function (DescribeOrganizationConfigRulesResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigRulesResponse = exports.DescribeOrganizationConfigRulesResponse || (exports.DescribeOrganizationConfigRulesResponse = {}));
var DescribeOrganizationConfigRuleStatusesRequest;
(function (DescribeOrganizationConfigRuleStatusesRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigRuleStatusesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigRuleStatusesRequest = exports.DescribeOrganizationConfigRuleStatusesRequest || (exports.DescribeOrganizationConfigRuleStatusesRequest = {}));
var OrganizationRuleStatus;
(function (OrganizationRuleStatus) {
    OrganizationRuleStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationRuleStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationRuleStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationRuleStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationRuleStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationRuleStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationRuleStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationRuleStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationRuleStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationRuleStatus = exports.OrganizationRuleStatus || (exports.OrganizationRuleStatus = {}));
var OrganizationConfigRuleStatus;
(function (OrganizationConfigRuleStatus) {
    /**
     * @internal
     */
    OrganizationConfigRuleStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConfigRuleStatus = exports.OrganizationConfigRuleStatus || (exports.OrganizationConfigRuleStatus = {}));
var DescribeOrganizationConfigRuleStatusesResponse;
(function (DescribeOrganizationConfigRuleStatusesResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigRuleStatusesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigRuleStatusesResponse = exports.DescribeOrganizationConfigRuleStatusesResponse || (exports.DescribeOrganizationConfigRuleStatusesResponse = {}));
var DescribeOrganizationConformancePacksRequest;
(function (DescribeOrganizationConformancePacksRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConformancePacksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConformancePacksRequest = exports.DescribeOrganizationConformancePacksRequest || (exports.DescribeOrganizationConformancePacksRequest = {}));
var OrganizationConformancePack;
(function (OrganizationConformancePack) {
    /**
     * @internal
     */
    OrganizationConformancePack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConformancePack = exports.OrganizationConformancePack || (exports.OrganizationConformancePack = {}));
var DescribeOrganizationConformancePacksResponse;
(function (DescribeOrganizationConformancePacksResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConformancePacksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConformancePacksResponse = exports.DescribeOrganizationConformancePacksResponse || (exports.DescribeOrganizationConformancePacksResponse = {}));
var DescribeOrganizationConformancePackStatusesRequest;
(function (DescribeOrganizationConformancePackStatusesRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConformancePackStatusesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConformancePackStatusesRequest = exports.DescribeOrganizationConformancePackStatusesRequest || (exports.DescribeOrganizationConformancePackStatusesRequest = {}));
var OrganizationResourceStatus;
(function (OrganizationResourceStatus) {
    OrganizationResourceStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationResourceStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationResourceStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationResourceStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationResourceStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationResourceStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationResourceStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationResourceStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationResourceStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationResourceStatus = exports.OrganizationResourceStatus || (exports.OrganizationResourceStatus = {}));
var OrganizationConformancePackStatus;
(function (OrganizationConformancePackStatus) {
    /**
     * @internal
     */
    OrganizationConformancePackStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConformancePackStatus = exports.OrganizationConformancePackStatus || (exports.OrganizationConformancePackStatus = {}));
var DescribeOrganizationConformancePackStatusesResponse;
(function (DescribeOrganizationConformancePackStatusesResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConformancePackStatusesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConformancePackStatusesResponse = exports.DescribeOrganizationConformancePackStatusesResponse || (exports.DescribeOrganizationConformancePackStatusesResponse = {}));
var DescribePendingAggregationRequestsRequest;
(function (DescribePendingAggregationRequestsRequest) {
    /**
     * @internal
     */
    DescribePendingAggregationRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePendingAggregationRequestsRequest = exports.DescribePendingAggregationRequestsRequest || (exports.DescribePendingAggregationRequestsRequest = {}));
var PendingAggregationRequest;
(function (PendingAggregationRequest) {
    /**
     * @internal
     */
    PendingAggregationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingAggregationRequest = exports.PendingAggregationRequest || (exports.PendingAggregationRequest = {}));
var DescribePendingAggregationRequestsResponse;
(function (DescribePendingAggregationRequestsResponse) {
    /**
     * @internal
     */
    DescribePendingAggregationRequestsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePendingAggregationRequestsResponse = exports.DescribePendingAggregationRequestsResponse || (exports.DescribePendingAggregationRequestsResponse = {}));
var DescribeRemediationConfigurationsRequest;
(function (DescribeRemediationConfigurationsRequest) {
    /**
     * @internal
     */
    DescribeRemediationConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationConfigurationsRequest = exports.DescribeRemediationConfigurationsRequest || (exports.DescribeRemediationConfigurationsRequest = {}));
var SsmControls;
(function (SsmControls) {
    /**
     * @internal
     */
    SsmControls.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SsmControls = exports.SsmControls || (exports.SsmControls = {}));
var ExecutionControls;
(function (ExecutionControls) {
    /**
     * @internal
     */
    ExecutionControls.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionControls = exports.ExecutionControls || (exports.ExecutionControls = {}));
var ResourceValueType;
(function (ResourceValueType) {
    ResourceValueType["RESOURCE_ID"] = "RESOURCE_ID";
})(ResourceValueType = exports.ResourceValueType || (exports.ResourceValueType = {}));
var ResourceValue;
(function (ResourceValue) {
    /**
     * @internal
     */
    ResourceValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceValue = exports.ResourceValue || (exports.ResourceValue = {}));
var StaticValue;
(function (StaticValue) {
    /**
     * @internal
     */
    StaticValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticValue = exports.StaticValue || (exports.StaticValue = {}));
var RemediationParameterValue;
(function (RemediationParameterValue) {
    /**
     * @internal
     */
    RemediationParameterValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationParameterValue = exports.RemediationParameterValue || (exports.RemediationParameterValue = {}));
var RemediationTargetType;
(function (RemediationTargetType) {
    RemediationTargetType["SSM_DOCUMENT"] = "SSM_DOCUMENT";
})(RemediationTargetType = exports.RemediationTargetType || (exports.RemediationTargetType = {}));
var RemediationConfiguration;
(function (RemediationConfiguration) {
    /**
     * @internal
     */
    RemediationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationConfiguration = exports.RemediationConfiguration || (exports.RemediationConfiguration = {}));
var DescribeRemediationConfigurationsResponse;
(function (DescribeRemediationConfigurationsResponse) {
    /**
     * @internal
     */
    DescribeRemediationConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationConfigurationsResponse = exports.DescribeRemediationConfigurationsResponse || (exports.DescribeRemediationConfigurationsResponse = {}));
var DescribeRemediationExceptionsRequest;
(function (DescribeRemediationExceptionsRequest) {
    /**
     * @internal
     */
    DescribeRemediationExceptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationExceptionsRequest = exports.DescribeRemediationExceptionsRequest || (exports.DescribeRemediationExceptionsRequest = {}));
var RemediationException;
(function (RemediationException) {
    /**
     * @internal
     */
    RemediationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationException = exports.RemediationException || (exports.RemediationException = {}));
var DescribeRemediationExceptionsResponse;
(function (DescribeRemediationExceptionsResponse) {
    /**
     * @internal
     */
    DescribeRemediationExceptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationExceptionsResponse = exports.DescribeRemediationExceptionsResponse || (exports.DescribeRemediationExceptionsResponse = {}));
var DescribeRemediationExecutionStatusRequest;
(function (DescribeRemediationExecutionStatusRequest) {
    /**
     * @internal
     */
    DescribeRemediationExecutionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationExecutionStatusRequest = exports.DescribeRemediationExecutionStatusRequest || (exports.DescribeRemediationExecutionStatusRequest = {}));
var RemediationExecutionState;
(function (RemediationExecutionState) {
    RemediationExecutionState["FAILED"] = "FAILED";
    RemediationExecutionState["IN_PROGRESS"] = "IN_PROGRESS";
    RemediationExecutionState["QUEUED"] = "QUEUED";
    RemediationExecutionState["SUCCEEDED"] = "SUCCEEDED";
})(RemediationExecutionState = exports.RemediationExecutionState || (exports.RemediationExecutionState = {}));
var RemediationExecutionStepState;
(function (RemediationExecutionStepState) {
    RemediationExecutionStepState["FAILED"] = "FAILED";
    RemediationExecutionStepState["PENDING"] = "PENDING";
    RemediationExecutionStepState["SUCCEEDED"] = "SUCCEEDED";
})(RemediationExecutionStepState = exports.RemediationExecutionStepState || (exports.RemediationExecutionStepState = {}));
var RemediationExecutionStep;
(function (RemediationExecutionStep) {
    /**
     * @internal
     */
    RemediationExecutionStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationExecutionStep = exports.RemediationExecutionStep || (exports.RemediationExecutionStep = {}));
var RemediationExecutionStatus;
(function (RemediationExecutionStatus) {
    /**
     * @internal
     */
    RemediationExecutionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemediationExecutionStatus = exports.RemediationExecutionStatus || (exports.RemediationExecutionStatus = {}));
var DescribeRemediationExecutionStatusResponse;
(function (DescribeRemediationExecutionStatusResponse) {
    /**
     * @internal
     */
    DescribeRemediationExecutionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRemediationExecutionStatusResponse = exports.DescribeRemediationExecutionStatusResponse || (exports.DescribeRemediationExecutionStatusResponse = {}));
var DescribeRetentionConfigurationsRequest;
(function (DescribeRetentionConfigurationsRequest) {
    /**
     * @internal
     */
    DescribeRetentionConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRetentionConfigurationsRequest = exports.DescribeRetentionConfigurationsRequest || (exports.DescribeRetentionConfigurationsRequest = {}));
var RetentionConfiguration;
(function (RetentionConfiguration) {
    /**
     * @internal
     */
    RetentionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetentionConfiguration = exports.RetentionConfiguration || (exports.RetentionConfiguration = {}));
var DescribeRetentionConfigurationsResponse;
(function (DescribeRetentionConfigurationsResponse) {
    /**
     * @internal
     */
    DescribeRetentionConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRetentionConfigurationsResponse = exports.DescribeRetentionConfigurationsResponse || (exports.DescribeRetentionConfigurationsResponse = {}));
var Evaluation;
(function (Evaluation) {
    /**
     * @internal
     */
    Evaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var ExternalEvaluation;
(function (ExternalEvaluation) {
    /**
     * @internal
     */
    ExternalEvaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalEvaluation = exports.ExternalEvaluation || (exports.ExternalEvaluation = {}));
var FailedRemediationBatch;
(function (FailedRemediationBatch) {
    /**
     * @internal
     */
    FailedRemediationBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedRemediationBatch = exports.FailedRemediationBatch || (exports.FailedRemediationBatch = {}));
var FailedRemediationExceptionBatch;
(function (FailedRemediationExceptionBatch) {
    /**
     * @internal
     */
    FailedRemediationExceptionBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedRemediationExceptionBatch = exports.FailedRemediationExceptionBatch || (exports.FailedRemediationExceptionBatch = {}));
var FieldInfo;
(function (FieldInfo) {
    /**
     * @internal
     */
    FieldInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FieldInfo = exports.FieldInfo || (exports.FieldInfo = {}));
var GetAggregateComplianceDetailsByConfigRuleRequest;
(function (GetAggregateComplianceDetailsByConfigRuleRequest) {
    /**
     * @internal
     */
    GetAggregateComplianceDetailsByConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateComplianceDetailsByConfigRuleRequest = exports.GetAggregateComplianceDetailsByConfigRuleRequest || (exports.GetAggregateComplianceDetailsByConfigRuleRequest = {}));
var GetAggregateComplianceDetailsByConfigRuleResponse;
(function (GetAggregateComplianceDetailsByConfigRuleResponse) {
    /**
     * @internal
     */
    GetAggregateComplianceDetailsByConfigRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateComplianceDetailsByConfigRuleResponse = exports.GetAggregateComplianceDetailsByConfigRuleResponse || (exports.GetAggregateComplianceDetailsByConfigRuleResponse = {}));
var GetAggregateConfigRuleComplianceSummaryRequest;
(function (GetAggregateConfigRuleComplianceSummaryRequest) {
    /**
     * @internal
     */
    GetAggregateConfigRuleComplianceSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateConfigRuleComplianceSummaryRequest = exports.GetAggregateConfigRuleComplianceSummaryRequest || (exports.GetAggregateConfigRuleComplianceSummaryRequest = {}));
var GetAggregateConfigRuleComplianceSummaryResponse;
(function (GetAggregateConfigRuleComplianceSummaryResponse) {
    /**
     * @internal
     */
    GetAggregateConfigRuleComplianceSummaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateConfigRuleComplianceSummaryResponse = exports.GetAggregateConfigRuleComplianceSummaryResponse || (exports.GetAggregateConfigRuleComplianceSummaryResponse = {}));
var GetAggregateConformancePackComplianceSummaryRequest;
(function (GetAggregateConformancePackComplianceSummaryRequest) {
    /**
     * @internal
     */
    GetAggregateConformancePackComplianceSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateConformancePackComplianceSummaryRequest = exports.GetAggregateConformancePackComplianceSummaryRequest || (exports.GetAggregateConformancePackComplianceSummaryRequest = {}));
var GetAggregateConformancePackComplianceSummaryResponse;
(function (GetAggregateConformancePackComplianceSummaryResponse) {
    /**
     * @internal
     */
    GetAggregateConformancePackComplianceSummaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateConformancePackComplianceSummaryResponse = exports.GetAggregateConformancePackComplianceSummaryResponse || (exports.GetAggregateConformancePackComplianceSummaryResponse = {}));
var ResourceCountFilters;
(function (ResourceCountFilters) {
    /**
     * @internal
     */
    ResourceCountFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCountFilters = exports.ResourceCountFilters || (exports.ResourceCountFilters = {}));
var ResourceCountGroupKey;
(function (ResourceCountGroupKey) {
    ResourceCountGroupKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    ResourceCountGroupKey["AWS_REGION"] = "AWS_REGION";
    ResourceCountGroupKey["RESOURCE_TYPE"] = "RESOURCE_TYPE";
})(ResourceCountGroupKey = exports.ResourceCountGroupKey || (exports.ResourceCountGroupKey = {}));
var GetAggregateDiscoveredResourceCountsRequest;
(function (GetAggregateDiscoveredResourceCountsRequest) {
    /**
     * @internal
     */
    GetAggregateDiscoveredResourceCountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateDiscoveredResourceCountsRequest = exports.GetAggregateDiscoveredResourceCountsRequest || (exports.GetAggregateDiscoveredResourceCountsRequest = {}));
var GroupedResourceCount;
(function (GroupedResourceCount) {
    /**
     * @internal
     */
    GroupedResourceCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupedResourceCount = exports.GroupedResourceCount || (exports.GroupedResourceCount = {}));
var GetAggregateDiscoveredResourceCountsResponse;
(function (GetAggregateDiscoveredResourceCountsResponse) {
    /**
     * @internal
     */
    GetAggregateDiscoveredResourceCountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateDiscoveredResourceCountsResponse = exports.GetAggregateDiscoveredResourceCountsResponse || (exports.GetAggregateDiscoveredResourceCountsResponse = {}));
var GetAggregateResourceConfigRequest;
(function (GetAggregateResourceConfigRequest) {
    /**
     * @internal
     */
    GetAggregateResourceConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateResourceConfigRequest = exports.GetAggregateResourceConfigRequest || (exports.GetAggregateResourceConfigRequest = {}));
var GetAggregateResourceConfigResponse;
(function (GetAggregateResourceConfigResponse) {
    /**
     * @internal
     */
    GetAggregateResourceConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAggregateResourceConfigResponse = exports.GetAggregateResourceConfigResponse || (exports.GetAggregateResourceConfigResponse = {}));
var OversizedConfigurationItemException;
(function (OversizedConfigurationItemException) {
    /**
     * @internal
     */
    OversizedConfigurationItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OversizedConfigurationItemException = exports.OversizedConfigurationItemException || (exports.OversizedConfigurationItemException = {}));
var ResourceNotDiscoveredException;
(function (ResourceNotDiscoveredException) {
    /**
     * @internal
     */
    ResourceNotDiscoveredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotDiscoveredException = exports.ResourceNotDiscoveredException || (exports.ResourceNotDiscoveredException = {}));
var GetComplianceDetailsByConfigRuleRequest;
(function (GetComplianceDetailsByConfigRuleRequest) {
    /**
     * @internal
     */
    GetComplianceDetailsByConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailsByConfigRuleRequest = exports.GetComplianceDetailsByConfigRuleRequest || (exports.GetComplianceDetailsByConfigRuleRequest = {}));
var GetComplianceDetailsByConfigRuleResponse;
(function (GetComplianceDetailsByConfigRuleResponse) {
    /**
     * @internal
     */
    GetComplianceDetailsByConfigRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailsByConfigRuleResponse = exports.GetComplianceDetailsByConfigRuleResponse || (exports.GetComplianceDetailsByConfigRuleResponse = {}));
var GetComplianceDetailsByResourceRequest;
(function (GetComplianceDetailsByResourceRequest) {
    /**
     * @internal
     */
    GetComplianceDetailsByResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailsByResourceRequest = exports.GetComplianceDetailsByResourceRequest || (exports.GetComplianceDetailsByResourceRequest = {}));
var GetComplianceDetailsByResourceResponse;
(function (GetComplianceDetailsByResourceResponse) {
    /**
     * @internal
     */
    GetComplianceDetailsByResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailsByResourceResponse = exports.GetComplianceDetailsByResourceResponse || (exports.GetComplianceDetailsByResourceResponse = {}));
var GetComplianceSummaryByConfigRuleResponse;
(function (GetComplianceSummaryByConfigRuleResponse) {
    /**
     * @internal
     */
    GetComplianceSummaryByConfigRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceSummaryByConfigRuleResponse = exports.GetComplianceSummaryByConfigRuleResponse || (exports.GetComplianceSummaryByConfigRuleResponse = {}));
var GetComplianceSummaryByResourceTypeRequest;
(function (GetComplianceSummaryByResourceTypeRequest) {
    /**
     * @internal
     */
    GetComplianceSummaryByResourceTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceSummaryByResourceTypeRequest = exports.GetComplianceSummaryByResourceTypeRequest || (exports.GetComplianceSummaryByResourceTypeRequest = {}));
var GetComplianceSummaryByResourceTypeResponse;
(function (GetComplianceSummaryByResourceTypeResponse) {
    /**
     * @internal
     */
    GetComplianceSummaryByResourceTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceSummaryByResourceTypeResponse = exports.GetComplianceSummaryByResourceTypeResponse || (exports.GetComplianceSummaryByResourceTypeResponse = {}));
var GetConformancePackComplianceDetailsRequest;
(function (GetConformancePackComplianceDetailsRequest) {
    /**
     * @internal
     */
    GetConformancePackComplianceDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConformancePackComplianceDetailsRequest = exports.GetConformancePackComplianceDetailsRequest || (exports.GetConformancePackComplianceDetailsRequest = {}));
var GetConformancePackComplianceDetailsResponse;
(function (GetConformancePackComplianceDetailsResponse) {
    /**
     * @internal
     */
    GetConformancePackComplianceDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConformancePackComplianceDetailsResponse = exports.GetConformancePackComplianceDetailsResponse || (exports.GetConformancePackComplianceDetailsResponse = {}));
var GetConformancePackComplianceSummaryRequest;
(function (GetConformancePackComplianceSummaryRequest) {
    /**
     * @internal
     */
    GetConformancePackComplianceSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConformancePackComplianceSummaryRequest = exports.GetConformancePackComplianceSummaryRequest || (exports.GetConformancePackComplianceSummaryRequest = {}));
var GetConformancePackComplianceSummaryResponse;
(function (GetConformancePackComplianceSummaryResponse) {
    /**
     * @internal
     */
    GetConformancePackComplianceSummaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConformancePackComplianceSummaryResponse = exports.GetConformancePackComplianceSummaryResponse || (exports.GetConformancePackComplianceSummaryResponse = {}));
var GetDiscoveredResourceCountsRequest;
(function (GetDiscoveredResourceCountsRequest) {
    /**
     * @internal
     */
    GetDiscoveredResourceCountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiscoveredResourceCountsRequest = exports.GetDiscoveredResourceCountsRequest || (exports.GetDiscoveredResourceCountsRequest = {}));
var ResourceCount;
(function (ResourceCount) {
    /**
     * @internal
     */
    ResourceCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCount = exports.ResourceCount || (exports.ResourceCount = {}));
var GetDiscoveredResourceCountsResponse;
(function (GetDiscoveredResourceCountsResponse) {
    /**
     * @internal
     */
    GetDiscoveredResourceCountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiscoveredResourceCountsResponse = exports.GetDiscoveredResourceCountsResponse || (exports.GetDiscoveredResourceCountsResponse = {}));
var MemberAccountRuleStatus;
(function (MemberAccountRuleStatus) {
    MemberAccountRuleStatus["CREATE_FAILED"] = "CREATE_FAILED";
    MemberAccountRuleStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    MemberAccountRuleStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    MemberAccountRuleStatus["DELETE_FAILED"] = "DELETE_FAILED";
    MemberAccountRuleStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    MemberAccountRuleStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    MemberAccountRuleStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    MemberAccountRuleStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    MemberAccountRuleStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(MemberAccountRuleStatus = exports.MemberAccountRuleStatus || (exports.MemberAccountRuleStatus = {}));
var StatusDetailFilters;
(function (StatusDetailFilters) {
    /**
     * @internal
     */
    StatusDetailFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatusDetailFilters = exports.StatusDetailFilters || (exports.StatusDetailFilters = {}));
var GetOrganizationConfigRuleDetailedStatusRequest;
(function (GetOrganizationConfigRuleDetailedStatusRequest) {
    /**
     * @internal
     */
    GetOrganizationConfigRuleDetailedStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationConfigRuleDetailedStatusRequest = exports.GetOrganizationConfigRuleDetailedStatusRequest || (exports.GetOrganizationConfigRuleDetailedStatusRequest = {}));
var MemberAccountStatus;
(function (MemberAccountStatus) {
    /**
     * @internal
     */
    MemberAccountStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberAccountStatus = exports.MemberAccountStatus || (exports.MemberAccountStatus = {}));
var GetOrganizationConfigRuleDetailedStatusResponse;
(function (GetOrganizationConfigRuleDetailedStatusResponse) {
    /**
     * @internal
     */
    GetOrganizationConfigRuleDetailedStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationConfigRuleDetailedStatusResponse = exports.GetOrganizationConfigRuleDetailedStatusResponse || (exports.GetOrganizationConfigRuleDetailedStatusResponse = {}));
var OrganizationResourceDetailedStatus;
(function (OrganizationResourceDetailedStatus) {
    OrganizationResourceDetailedStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationResourceDetailedStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationResourceDetailedStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationResourceDetailedStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationResourceDetailedStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationResourceDetailedStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationResourceDetailedStatus = exports.OrganizationResourceDetailedStatus || (exports.OrganizationResourceDetailedStatus = {}));
var OrganizationResourceDetailedStatusFilters;
(function (OrganizationResourceDetailedStatusFilters) {
    /**
     * @internal
     */
    OrganizationResourceDetailedStatusFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationResourceDetailedStatusFilters = exports.OrganizationResourceDetailedStatusFilters || (exports.OrganizationResourceDetailedStatusFilters = {}));
var GetOrganizationConformancePackDetailedStatusRequest;
(function (GetOrganizationConformancePackDetailedStatusRequest) {
    /**
     * @internal
     */
    GetOrganizationConformancePackDetailedStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationConformancePackDetailedStatusRequest = exports.GetOrganizationConformancePackDetailedStatusRequest || (exports.GetOrganizationConformancePackDetailedStatusRequest = {}));
var OrganizationConformancePackDetailedStatus;
(function (OrganizationConformancePackDetailedStatus) {
    /**
     * @internal
     */
    OrganizationConformancePackDetailedStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConformancePackDetailedStatus = exports.OrganizationConformancePackDetailedStatus || (exports.OrganizationConformancePackDetailedStatus = {}));
var GetOrganizationConformancePackDetailedStatusResponse;
(function (GetOrganizationConformancePackDetailedStatusResponse) {
    /**
     * @internal
     */
    GetOrganizationConformancePackDetailedStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOrganizationConformancePackDetailedStatusResponse = exports.GetOrganizationConformancePackDetailedStatusResponse || (exports.GetOrganizationConformancePackDetailedStatusResponse = {}));
var GetResourceConfigHistoryRequest;
(function (GetResourceConfigHistoryRequest) {
    /**
     * @internal
     */
    GetResourceConfigHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceConfigHistoryRequest = exports.GetResourceConfigHistoryRequest || (exports.GetResourceConfigHistoryRequest = {}));
var GetResourceConfigHistoryResponse;
(function (GetResourceConfigHistoryResponse) {
    /**
     * @internal
     */
    GetResourceConfigHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceConfigHistoryResponse = exports.GetResourceConfigHistoryResponse || (exports.GetResourceConfigHistoryResponse = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    /**
     * @internal
     */
    InvalidTimeRangeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var GetStoredQueryRequest;
(function (GetStoredQueryRequest) {
    /**
     * @internal
     */
    GetStoredQueryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStoredQueryRequest = exports.GetStoredQueryRequest || (exports.GetStoredQueryRequest = {}));
var StoredQuery;
(function (StoredQuery) {
    /**
     * @internal
     */
    StoredQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StoredQuery = exports.StoredQuery || (exports.StoredQuery = {}));
var GetStoredQueryResponse;
(function (GetStoredQueryResponse) {
    /**
     * @internal
     */
    GetStoredQueryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStoredQueryResponse = exports.GetStoredQueryResponse || (exports.GetStoredQueryResponse = {}));
var InsufficientDeliveryPolicyException;
(function (InsufficientDeliveryPolicyException) {
    /**
     * @internal
     */
    InsufficientDeliveryPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientDeliveryPolicyException = exports.InsufficientDeliveryPolicyException || (exports.InsufficientDeliveryPolicyException = {}));
var InvalidConfigurationRecorderNameException;
(function (InvalidConfigurationRecorderNameException) {
    /**
     * @internal
     */
    InvalidConfigurationRecorderNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConfigurationRecorderNameException = exports.InvalidConfigurationRecorderNameException || (exports.InvalidConfigurationRecorderNameException = {}));
var InvalidDeliveryChannelNameException;
(function (InvalidDeliveryChannelNameException) {
    /**
     * @internal
     */
    InvalidDeliveryChannelNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeliveryChannelNameException = exports.InvalidDeliveryChannelNameException || (exports.InvalidDeliveryChannelNameException = {}));
var InvalidExpressionException;
(function (InvalidExpressionException) {
    /**
     * @internal
     */
    InvalidExpressionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExpressionException = exports.InvalidExpressionException || (exports.InvalidExpressionException = {}));
var InvalidRecordingGroupException;
(function (InvalidRecordingGroupException) {
    /**
     * @internal
     */
    InvalidRecordingGroupException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRecordingGroupException = exports.InvalidRecordingGroupException || (exports.InvalidRecordingGroupException = {}));
var InvalidResultTokenException;
(function (InvalidResultTokenException) {
    /**
     * @internal
     */
    InvalidResultTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResultTokenException = exports.InvalidResultTokenException || (exports.InvalidResultTokenException = {}));
var InvalidRoleException;
(function (InvalidRoleException) {
    /**
     * @internal
     */
    InvalidRoleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {}));
var InvalidS3KeyPrefixException;
(function (InvalidS3KeyPrefixException) {
    /**
     * @internal
     */
    InvalidS3KeyPrefixException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3KeyPrefixException = exports.InvalidS3KeyPrefixException || (exports.InvalidS3KeyPrefixException = {}));
var InvalidS3KmsKeyArnException;
(function (InvalidS3KmsKeyArnException) {
    /**
     * @internal
     */
    InvalidS3KmsKeyArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3KmsKeyArnException = exports.InvalidS3KmsKeyArnException || (exports.InvalidS3KmsKeyArnException = {}));
var InvalidSNSTopicARNException;
(function (InvalidSNSTopicARNException) {
    /**
     * @internal
     */
    InvalidSNSTopicARNException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSNSTopicARNException = exports.InvalidSNSTopicARNException || (exports.InvalidSNSTopicARNException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceFilters;
(function (ResourceFilters) {
    /**
     * @internal
     */
    ResourceFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceFilters = exports.ResourceFilters || (exports.ResourceFilters = {}));
var ListAggregateDiscoveredResourcesRequest;
(function (ListAggregateDiscoveredResourcesRequest) {
    /**
     * @internal
     */
    ListAggregateDiscoveredResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAggregateDiscoveredResourcesRequest = exports.ListAggregateDiscoveredResourcesRequest || (exports.ListAggregateDiscoveredResourcesRequest = {}));
var ListAggregateDiscoveredResourcesResponse;
(function (ListAggregateDiscoveredResourcesResponse) {
    /**
     * @internal
     */
    ListAggregateDiscoveredResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAggregateDiscoveredResourcesResponse = exports.ListAggregateDiscoveredResourcesResponse || (exports.ListAggregateDiscoveredResourcesResponse = {}));
var ListDiscoveredResourcesRequest;
(function (ListDiscoveredResourcesRequest) {
    /**
     * @internal
     */
    ListDiscoveredResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoveredResourcesRequest = exports.ListDiscoveredResourcesRequest || (exports.ListDiscoveredResourcesRequest = {}));
var ResourceIdentifier;
(function (ResourceIdentifier) {
    /**
     * @internal
     */
    ResourceIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceIdentifier = exports.ResourceIdentifier || (exports.ResourceIdentifier = {}));
var ListDiscoveredResourcesResponse;
(function (ListDiscoveredResourcesResponse) {
    /**
     * @internal
     */
    ListDiscoveredResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoveredResourcesResponse = exports.ListDiscoveredResourcesResponse || (exports.ListDiscoveredResourcesResponse = {}));
var ListStoredQueriesRequest;
(function (ListStoredQueriesRequest) {
    /**
     * @internal
     */
    ListStoredQueriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStoredQueriesRequest = exports.ListStoredQueriesRequest || (exports.ListStoredQueriesRequest = {}));
var StoredQueryMetadata;
(function (StoredQueryMetadata) {
    /**
     * @internal
     */
    StoredQueryMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StoredQueryMetadata = exports.StoredQueryMetadata || (exports.StoredQueryMetadata = {}));
var ListStoredQueriesResponse;
(function (ListStoredQueriesResponse) {
    /**
     * @internal
     */
    ListStoredQueriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStoredQueriesResponse = exports.ListStoredQueriesResponse || (exports.ListStoredQueriesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var MaxActiveResourcesExceededException;
(function (MaxActiveResourcesExceededException) {
    /**
     * @internal
     */
    MaxActiveResourcesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxActiveResourcesExceededException = exports.MaxActiveResourcesExceededException || (exports.MaxActiveResourcesExceededException = {}));
var MaxNumberOfConfigRulesExceededException;
(function (MaxNumberOfConfigRulesExceededException) {
    /**
     * @internal
     */
    MaxNumberOfConfigRulesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfConfigRulesExceededException = exports.MaxNumberOfConfigRulesExceededException || (exports.MaxNumberOfConfigRulesExceededException = {}));
var MaxNumberOfConfigurationRecordersExceededException;
(function (MaxNumberOfConfigurationRecordersExceededException) {
    /**
     * @internal
     */
    MaxNumberOfConfigurationRecordersExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfConfigurationRecordersExceededException = exports.MaxNumberOfConfigurationRecordersExceededException || (exports.MaxNumberOfConfigurationRecordersExceededException = {}));
var MaxNumberOfConformancePacksExceededException;
(function (MaxNumberOfConformancePacksExceededException) {
    /**
     * @internal
     */
    MaxNumberOfConformancePacksExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfConformancePacksExceededException = exports.MaxNumberOfConformancePacksExceededException || (exports.MaxNumberOfConformancePacksExceededException = {}));
var MaxNumberOfDeliveryChannelsExceededException;
(function (MaxNumberOfDeliveryChannelsExceededException) {
    /**
     * @internal
     */
    MaxNumberOfDeliveryChannelsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfDeliveryChannelsExceededException = exports.MaxNumberOfDeliveryChannelsExceededException || (exports.MaxNumberOfDeliveryChannelsExceededException = {}));
var MaxNumberOfOrganizationConfigRulesExceededException;
(function (MaxNumberOfOrganizationConfigRulesExceededException) {
    /**
     * @internal
     */
    MaxNumberOfOrganizationConfigRulesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfOrganizationConfigRulesExceededException = exports.MaxNumberOfOrganizationConfigRulesExceededException || (exports.MaxNumberOfOrganizationConfigRulesExceededException = {}));
var MaxNumberOfOrganizationConformancePacksExceededException;
(function (MaxNumberOfOrganizationConformancePacksExceededException) {
    /**
     * @internal
     */
    MaxNumberOfOrganizationConformancePacksExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfOrganizationConformancePacksExceededException = exports.MaxNumberOfOrganizationConformancePacksExceededException || (exports.MaxNumberOfOrganizationConformancePacksExceededException = {}));
var MaxNumberOfRetentionConfigurationsExceededException;
(function (MaxNumberOfRetentionConfigurationsExceededException) {
    /**
     * @internal
     */
    MaxNumberOfRetentionConfigurationsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxNumberOfRetentionConfigurationsExceededException = exports.MaxNumberOfRetentionConfigurationsExceededException || (exports.MaxNumberOfRetentionConfigurationsExceededException = {}));
var NoAvailableDeliveryChannelException;
(function (NoAvailableDeliveryChannelException) {
    /**
     * @internal
     */
    NoAvailableDeliveryChannelException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAvailableDeliveryChannelException = exports.NoAvailableDeliveryChannelException || (exports.NoAvailableDeliveryChannelException = {}));
var NoAvailableOrganizationException;
(function (NoAvailableOrganizationException) {
    /**
     * @internal
     */
    NoAvailableOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAvailableOrganizationException = exports.NoAvailableOrganizationException || (exports.NoAvailableOrganizationException = {}));
var NoSuchBucketException;
(function (NoSuchBucketException) {
    /**
     * @internal
     */
    NoSuchBucketException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchBucketException = exports.NoSuchBucketException || (exports.NoSuchBucketException = {}));
var OrganizationAllFeaturesNotEnabledException;
(function (OrganizationAllFeaturesNotEnabledException) {
    /**
     * @internal
     */
    OrganizationAllFeaturesNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationAllFeaturesNotEnabledException = exports.OrganizationAllFeaturesNotEnabledException || (exports.OrganizationAllFeaturesNotEnabledException = {}));
var OrganizationConformancePackTemplateValidationException;
(function (OrganizationConformancePackTemplateValidationException) {
    /**
     * @internal
     */
    OrganizationConformancePackTemplateValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConformancePackTemplateValidationException = exports.OrganizationConformancePackTemplateValidationException || (exports.OrganizationConformancePackTemplateValidationException = {}));
var PutAggregationAuthorizationRequest;
(function (PutAggregationAuthorizationRequest) {
    /**
     * @internal
     */
    PutAggregationAuthorizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAggregationAuthorizationRequest = exports.PutAggregationAuthorizationRequest || (exports.PutAggregationAuthorizationRequest = {}));
var PutAggregationAuthorizationResponse;
(function (PutAggregationAuthorizationResponse) {
    /**
     * @internal
     */
    PutAggregationAuthorizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAggregationAuthorizationResponse = exports.PutAggregationAuthorizationResponse || (exports.PutAggregationAuthorizationResponse = {}));
var PutConfigRuleRequest;
(function (PutConfigRuleRequest) {
    /**
     * @internal
     */
    PutConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigRuleRequest = exports.PutConfigRuleRequest || (exports.PutConfigRuleRequest = {}));
var PutConfigurationAggregatorRequest;
(function (PutConfigurationAggregatorRequest) {
    /**
     * @internal
     */
    PutConfigurationAggregatorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationAggregatorRequest = exports.PutConfigurationAggregatorRequest || (exports.PutConfigurationAggregatorRequest = {}));
var PutConfigurationAggregatorResponse;
(function (PutConfigurationAggregatorResponse) {
    /**
     * @internal
     */
    PutConfigurationAggregatorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationAggregatorResponse = exports.PutConfigurationAggregatorResponse || (exports.PutConfigurationAggregatorResponse = {}));
var PutConfigurationRecorderRequest;
(function (PutConfigurationRecorderRequest) {
    /**
     * @internal
     */
    PutConfigurationRecorderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationRecorderRequest = exports.PutConfigurationRecorderRequest || (exports.PutConfigurationRecorderRequest = {}));
var PutConformancePackRequest;
(function (PutConformancePackRequest) {
    /**
     * @internal
     */
    PutConformancePackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConformancePackRequest = exports.PutConformancePackRequest || (exports.PutConformancePackRequest = {}));
var PutConformancePackResponse;
(function (PutConformancePackResponse) {
    /**
     * @internal
     */
    PutConformancePackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConformancePackResponse = exports.PutConformancePackResponse || (exports.PutConformancePackResponse = {}));
var PutDeliveryChannelRequest;
(function (PutDeliveryChannelRequest) {
    /**
     * @internal
     */
    PutDeliveryChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDeliveryChannelRequest = exports.PutDeliveryChannelRequest || (exports.PutDeliveryChannelRequest = {}));
var PutEvaluationsRequest;
(function (PutEvaluationsRequest) {
    /**
     * @internal
     */
    PutEvaluationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEvaluationsRequest = exports.PutEvaluationsRequest || (exports.PutEvaluationsRequest = {}));
var PutEvaluationsResponse;
(function (PutEvaluationsResponse) {
    /**
     * @internal
     */
    PutEvaluationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEvaluationsResponse = exports.PutEvaluationsResponse || (exports.PutEvaluationsResponse = {}));
var PutExternalEvaluationRequest;
(function (PutExternalEvaluationRequest) {
    /**
     * @internal
     */
    PutExternalEvaluationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutExternalEvaluationRequest = exports.PutExternalEvaluationRequest || (exports.PutExternalEvaluationRequest = {}));
var PutExternalEvaluationResponse;
(function (PutExternalEvaluationResponse) {
    /**
     * @internal
     */
    PutExternalEvaluationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutExternalEvaluationResponse = exports.PutExternalEvaluationResponse || (exports.PutExternalEvaluationResponse = {}));
var PutOrganizationConfigRuleRequest;
(function (PutOrganizationConfigRuleRequest) {
    /**
     * @internal
     */
    PutOrganizationConfigRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOrganizationConfigRuleRequest = exports.PutOrganizationConfigRuleRequest || (exports.PutOrganizationConfigRuleRequest = {}));
var PutOrganizationConfigRuleResponse;
(function (PutOrganizationConfigRuleResponse) {
    /**
     * @internal
     */
    PutOrganizationConfigRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOrganizationConfigRuleResponse = exports.PutOrganizationConfigRuleResponse || (exports.PutOrganizationConfigRuleResponse = {}));
var PutOrganizationConformancePackRequest;
(function (PutOrganizationConformancePackRequest) {
    /**
     * @internal
     */
    PutOrganizationConformancePackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOrganizationConformancePackRequest = exports.PutOrganizationConformancePackRequest || (exports.PutOrganizationConformancePackRequest = {}));
var PutOrganizationConformancePackResponse;
(function (PutOrganizationConformancePackResponse) {
    /**
     * @internal
     */
    PutOrganizationConformancePackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutOrganizationConformancePackResponse = exports.PutOrganizationConformancePackResponse || (exports.PutOrganizationConformancePackResponse = {}));
var PutRemediationConfigurationsRequest;
(function (PutRemediationConfigurationsRequest) {
    /**
     * @internal
     */
    PutRemediationConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRemediationConfigurationsRequest = exports.PutRemediationConfigurationsRequest || (exports.PutRemediationConfigurationsRequest = {}));
var PutRemediationConfigurationsResponse;
(function (PutRemediationConfigurationsResponse) {
    /**
     * @internal
     */
    PutRemediationConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRemediationConfigurationsResponse = exports.PutRemediationConfigurationsResponse || (exports.PutRemediationConfigurationsResponse = {}));
var PutRemediationExceptionsRequest;
(function (PutRemediationExceptionsRequest) {
    /**
     * @internal
     */
    PutRemediationExceptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRemediationExceptionsRequest = exports.PutRemediationExceptionsRequest || (exports.PutRemediationExceptionsRequest = {}));
var PutRemediationExceptionsResponse;
(function (PutRemediationExceptionsResponse) {
    /**
     * @internal
     */
    PutRemediationExceptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRemediationExceptionsResponse = exports.PutRemediationExceptionsResponse || (exports.PutRemediationExceptionsResponse = {}));
//# sourceMappingURL=models_0.js.map