"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainConfigurationStatus = exports.DescribeDomainConfigurationRequest = exports.DescribeDimensionResponse = exports.DescribeDimensionRequest = exports.DescribeDetectMitigationActionsTaskResponse = exports.DetectMitigationActionsTaskSummary = exports.ViolationEventOccurrenceRange = exports.DetectMitigationActionsTaskStatus = exports.DetectMitigationActionsTaskStatistics = exports.DetectMitigationActionsTaskTarget = exports.DescribeDetectMitigationActionsTaskRequest = exports.DescribeDefaultAuthorizerResponse = exports.DescribeDefaultAuthorizerRequest = exports.DescribeCustomMetricResponse = exports.DescribeCustomMetricRequest = exports.DescribeCertificateResponse = exports.CertificateDescription = exports.TransferData = exports.CertificateStatus = exports.CertificateMode = exports.DescribeCertificateRequest = exports.DescribeCACertificateResponse = exports.RegistrationConfig = exports.CACertificateDescription = exports.CertificateValidity = exports.CACertificateStatus = exports.DescribeCACertificateRequest = exports.DescribeBillingGroupResponse = exports.BillingGroupMetadata = exports.DescribeBillingGroupRequest = exports.DescribeAuthorizerResponse = exports.DescribeAuthorizerRequest = exports.DescribeAuditTaskResponse = exports.TaskStatistics = exports.DescribeAuditTaskRequest = exports.DescribeAuditSuppressionResponse = exports.DescribeAuditSuppressionRequest = exports.DescribeAuditMitigationActionsTaskResponse = exports.MitigationAction = exports.DescribeAuditMitigationActionsTaskRequest = exports.DescribeAuditFindingResponse = exports.DescribeAuditFindingRequest = exports.DescribeAccountAuditConfigurationResponse = exports.DescribeAccountAuditConfigurationRequest = exports.DeprecateThingTypeResponse = exports.DeprecateThingTypeRequest = exports.DeleteV2LoggingLevelRequest = exports.LogTargetType = exports.DeleteTopicRuleDestinationResponse = exports.DeleteTopicRuleDestinationRequest = void 0;
exports.DescribeThingRegistrationTaskRequest = exports.DescribeThingGroupResponse = exports.ThingGroupMetadata = exports.GroupNameAndArn = exports.DynamicGroupStatus = exports.DescribeThingGroupRequest = exports.DescribeThingResponse = exports.DescribeThingRequest = exports.DescribeStreamResponse = exports.StreamInfo = exports.DescribeStreamRequest = exports.DescribeSecurityProfileResponse = exports.DescribeSecurityProfileRequest = exports.DescribeScheduledAuditResponse = exports.DescribeScheduledAuditRequest = exports.DescribeRoleAliasResponse = exports.RoleAliasDescription = exports.DescribeRoleAliasRequest = exports.DescribeProvisioningTemplateVersionResponse = exports.DescribeProvisioningTemplateVersionRequest = exports.DescribeProvisioningTemplateResponse = exports.DescribeProvisioningTemplateRequest = exports.DescribeMitigationActionResponse = exports.MitigationActionType = exports.DescribeMitigationActionRequest = exports.DescribeJobTemplateResponse = exports.DescribeJobTemplateRequest = exports.DescribeJobExecutionResponse = exports.JobExecution = exports.JobExecutionStatusDetails = exports.JobExecutionStatus = exports.DescribeJobExecutionRequest = exports.DescribeJobResponse = exports.Job = exports.JobStatus = exports.JobProcessDetails = exports.DescribeJobRequest = exports.DescribeIndexResponse = exports.IndexStatus = exports.DescribeIndexRequest = exports.DescribeEventConfigurationsResponse = exports.Configuration = exports.EventType = exports.DescribeEventConfigurationsRequest = exports.DescribeEndpointResponse = exports.DescribeEndpointRequest = exports.DescribeDomainConfigurationResponse = exports.ServerCertificateSummary = exports.ServerCertificateStatus = exports.DomainType = void 0;
exports.GetRegistrationCodeResponse = exports.GetRegistrationCodeRequest = exports.GetPolicyVersionResponse = exports.GetPolicyVersionRequest = exports.GetPolicyResponse = exports.GetPolicyRequest = exports.GetPercentilesResponse = exports.PercentPair = exports.GetPercentilesRequest = exports.GetOTAUpdateResponse = exports.OTAUpdateInfo = exports.ErrorInfo = exports.GetOTAUpdateRequest = exports.GetLoggingOptionsResponse = exports.GetLoggingOptionsRequest = exports.GetJobDocumentResponse = exports.GetJobDocumentRequest = exports.GetIndexingConfigurationResponse = exports.ThingIndexingConfiguration = exports.ThingIndexingMode = exports.ThingConnectivityIndexingMode = exports.ThingGroupIndexingConfiguration = exports.ThingGroupIndexingMode = exports.Field = exports.FieldType = exports.GetIndexingConfigurationRequest = exports.GetEffectivePoliciesResponse = exports.EffectivePolicy = exports.GetEffectivePoliciesRequest = exports.InvalidAggregationException = exports.IndexNotReadyException = exports.GetCardinalityResponse = exports.GetCardinalityRequest = exports.GetBehaviorModelTrainingSummariesResponse = exports.BehaviorModelTrainingSummary = exports.ModelStatus = exports.GetBehaviorModelTrainingSummariesRequest = exports.EnableTopicRuleRequest = exports.DisableTopicRuleRequest = exports.DetachThingPrincipalResponse = exports.DetachThingPrincipalRequest = exports.DetachSecurityProfileResponse = exports.DetachSecurityProfileRequest = exports.DetachPrincipalPolicyRequest = exports.DetachPolicyRequest = exports.DescribeThingTypeResponse = exports.ThingTypeMetadata = exports.DescribeThingTypeRequest = exports.DescribeThingRegistrationTaskResponse = exports.Status = void 0;
exports.DomainConfigurationSummary = exports.ListDomainConfigurationsRequest = exports.ListDimensionsResponse = exports.ListDimensionsRequest = exports.ListDetectMitigationActionsTasksResponse = exports.ListDetectMitigationActionsTasksRequest = exports.ListDetectMitigationActionsExecutionsResponse = exports.DetectMitigationActionExecution = exports.DetectMitigationActionExecutionStatus = exports.ListDetectMitigationActionsExecutionsRequest = exports.ListCustomMetricsResponse = exports.ListCustomMetricsRequest = exports.ListCertificatesByCAResponse = exports.ListCertificatesByCARequest = exports.ListCertificatesResponse = exports.Certificate = exports.ListCertificatesRequest = exports.ListCACertificatesResponse = exports.CACertificate = exports.ListCACertificatesRequest = exports.ListBillingGroupsResponse = exports.ListBillingGroupsRequest = exports.ListAuthorizersResponse = exports.ListAuthorizersRequest = exports.ListAuditTasksResponse = exports.ListAuditTasksRequest = exports.ListAuditSuppressionsResponse = exports.ListAuditSuppressionsRequest = exports.ListAuditMitigationActionsTasksResponse = exports.ListAuditMitigationActionsTasksRequest = exports.ListAuditMitigationActionsExecutionsResponse = exports.ListAuditMitigationActionsExecutionsRequest = exports.ListAuditFindingsResponse = exports.ListAuditFindingsRequest = exports.ListAttachedPoliciesResponse = exports.ListAttachedPoliciesRequest = exports.ListActiveViolationsResponse = exports.ListActiveViolationsRequest = exports.BehaviorCriteriaType = exports.NotConfiguredException = exports.GetV2LoggingOptionsResponse = exports.GetV2LoggingOptionsRequest = exports.GetTopicRuleDestinationResponse = exports.GetTopicRuleDestinationRequest = exports.GetTopicRuleResponse = exports.TopicRule = exports.GetTopicRuleRequest = exports.GetStatisticsResponse = exports.Statistics = exports.GetStatisticsRequest = void 0;
exports.ListSecurityProfilesResponse = exports.SecurityProfileIdentifier = exports.ListSecurityProfilesRequest = exports.ListScheduledAuditsResponse = exports.ScheduledAuditMetadata = exports.ListScheduledAuditsRequest = exports.ListRoleAliasesResponse = exports.ListRoleAliasesRequest = exports.ListProvisioningTemplateVersionsResponse = exports.ProvisioningTemplateVersionSummary = exports.ListProvisioningTemplateVersionsRequest = exports.ListProvisioningTemplatesResponse = exports.ProvisioningTemplateSummary = exports.ListProvisioningTemplatesRequest = exports.ListPrincipalThingsResponse = exports.ListPrincipalThingsRequest = exports.ListPrincipalPoliciesResponse = exports.ListPrincipalPoliciesRequest = exports.ListPolicyVersionsResponse = exports.PolicyVersion = exports.ListPolicyVersionsRequest = exports.ListPolicyPrincipalsResponse = exports.ListPolicyPrincipalsRequest = exports.ListPoliciesResponse = exports.ListPoliciesRequest = exports.ListOutgoingCertificatesResponse = exports.OutgoingCertificate = exports.ListOutgoingCertificatesRequest = exports.ListOTAUpdatesResponse = exports.OTAUpdateSummary = exports.ListOTAUpdatesRequest = exports.ListMitigationActionsResponse = exports.MitigationActionIdentifier = exports.ListMitigationActionsRequest = exports.ListJobTemplatesResponse = exports.JobTemplateSummary = exports.ListJobTemplatesRequest = exports.ListJobsResponse = exports.JobSummary = exports.ListJobsRequest = exports.ListJobExecutionsForThingResponse = exports.JobExecutionSummaryForThing = exports.ListJobExecutionsForThingRequest = exports.ListJobExecutionsForJobResponse = exports.JobExecutionSummaryForJob = exports.JobExecutionSummary = exports.ListJobExecutionsForJobRequest = exports.ListIndicesResponse = exports.ListIndicesRequest = exports.ListDomainConfigurationsResponse = void 0;
exports.ListViolationEventsResponse = exports.ViolationEvent = exports.ViolationEventType = exports.ListViolationEventsRequest = exports.ListV2LoggingLevelsResponse = exports.LogTargetConfiguration = exports.LogTarget = exports.ListV2LoggingLevelsRequest = exports.ListTopicRulesResponse = exports.TopicRuleListItem = exports.ListTopicRulesRequest = exports.ListTopicRuleDestinationsResponse = exports.TopicRuleDestinationSummary = exports.VpcDestinationSummary = exports.HttpUrlDestinationSummary = exports.ListTopicRuleDestinationsRequest = exports.ListThingTypesResponse = exports.ThingTypeDefinition = exports.ListThingTypesRequest = exports.ListThingsInThingGroupResponse = exports.ListThingsInThingGroupRequest = exports.ListThingsInBillingGroupResponse = exports.ListThingsInBillingGroupRequest = exports.ListThingsResponse = exports.ThingAttribute = exports.ListThingsRequest = exports.ListThingRegistrationTasksResponse = exports.ListThingRegistrationTasksRequest = exports.ListThingRegistrationTaskReportsResponse = exports.ListThingRegistrationTaskReportsRequest = exports.ReportType = exports.ListThingPrincipalsResponse = exports.ListThingPrincipalsRequest = exports.ListThingGroupsForThingResponse = exports.ListThingGroupsForThingRequest = exports.ListThingGroupsResponse = exports.ListThingGroupsRequest = exports.ListTargetsForSecurityProfileResponse = exports.ListTargetsForSecurityProfileRequest = exports.ListTargetsForPolicyResponse = exports.ListTargetsForPolicyRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListStreamsResponse = exports.StreamSummary = exports.ListStreamsRequest = exports.ListSecurityProfilesForTargetResponse = exports.SecurityProfileTargetMapping = exports.SecurityProfileTarget = exports.ListSecurityProfilesForTargetRequest = void 0;
var DeleteTopicRuleDestinationRequest;
(function (DeleteTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    DeleteTopicRuleDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTopicRuleDestinationRequest = exports.DeleteTopicRuleDestinationRequest || (exports.DeleteTopicRuleDestinationRequest = {}));
var DeleteTopicRuleDestinationResponse;
(function (DeleteTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    DeleteTopicRuleDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTopicRuleDestinationResponse = exports.DeleteTopicRuleDestinationResponse || (exports.DeleteTopicRuleDestinationResponse = {}));
var LogTargetType;
(function (LogTargetType) {
    LogTargetType["DEFAULT"] = "DEFAULT";
    LogTargetType["THING_GROUP"] = "THING_GROUP";
})(LogTargetType = exports.LogTargetType || (exports.LogTargetType = {}));
var DeleteV2LoggingLevelRequest;
(function (DeleteV2LoggingLevelRequest) {
    /**
     * @internal
     */
    DeleteV2LoggingLevelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteV2LoggingLevelRequest = exports.DeleteV2LoggingLevelRequest || (exports.DeleteV2LoggingLevelRequest = {}));
var DeprecateThingTypeRequest;
(function (DeprecateThingTypeRequest) {
    /**
     * @internal
     */
    DeprecateThingTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateThingTypeRequest = exports.DeprecateThingTypeRequest || (exports.DeprecateThingTypeRequest = {}));
var DeprecateThingTypeResponse;
(function (DeprecateThingTypeResponse) {
    /**
     * @internal
     */
    DeprecateThingTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateThingTypeResponse = exports.DeprecateThingTypeResponse || (exports.DeprecateThingTypeResponse = {}));
var DescribeAccountAuditConfigurationRequest;
(function (DescribeAccountAuditConfigurationRequest) {
    /**
     * @internal
     */
    DescribeAccountAuditConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAuditConfigurationRequest = exports.DescribeAccountAuditConfigurationRequest || (exports.DescribeAccountAuditConfigurationRequest = {}));
var DescribeAccountAuditConfigurationResponse;
(function (DescribeAccountAuditConfigurationResponse) {
    /**
     * @internal
     */
    DescribeAccountAuditConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAuditConfigurationResponse = exports.DescribeAccountAuditConfigurationResponse || (exports.DescribeAccountAuditConfigurationResponse = {}));
var DescribeAuditFindingRequest;
(function (DescribeAuditFindingRequest) {
    /**
     * @internal
     */
    DescribeAuditFindingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditFindingRequest = exports.DescribeAuditFindingRequest || (exports.DescribeAuditFindingRequest = {}));
var DescribeAuditFindingResponse;
(function (DescribeAuditFindingResponse) {
    /**
     * @internal
     */
    DescribeAuditFindingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditFindingResponse = exports.DescribeAuditFindingResponse || (exports.DescribeAuditFindingResponse = {}));
var DescribeAuditMitigationActionsTaskRequest;
(function (DescribeAuditMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    DescribeAuditMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditMitigationActionsTaskRequest = exports.DescribeAuditMitigationActionsTaskRequest || (exports.DescribeAuditMitigationActionsTaskRequest = {}));
var MitigationAction;
(function (MitigationAction) {
    /**
     * @internal
     */
    MitigationAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MitigationAction = exports.MitigationAction || (exports.MitigationAction = {}));
var DescribeAuditMitigationActionsTaskResponse;
(function (DescribeAuditMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    DescribeAuditMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditMitigationActionsTaskResponse = exports.DescribeAuditMitigationActionsTaskResponse || (exports.DescribeAuditMitigationActionsTaskResponse = {}));
var DescribeAuditSuppressionRequest;
(function (DescribeAuditSuppressionRequest) {
    /**
     * @internal
     */
    DescribeAuditSuppressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditSuppressionRequest = exports.DescribeAuditSuppressionRequest || (exports.DescribeAuditSuppressionRequest = {}));
var DescribeAuditSuppressionResponse;
(function (DescribeAuditSuppressionResponse) {
    /**
     * @internal
     */
    DescribeAuditSuppressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditSuppressionResponse = exports.DescribeAuditSuppressionResponse || (exports.DescribeAuditSuppressionResponse = {}));
var DescribeAuditTaskRequest;
(function (DescribeAuditTaskRequest) {
    /**
     * @internal
     */
    DescribeAuditTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditTaskRequest = exports.DescribeAuditTaskRequest || (exports.DescribeAuditTaskRequest = {}));
var TaskStatistics;
(function (TaskStatistics) {
    /**
     * @internal
     */
    TaskStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskStatistics = exports.TaskStatistics || (exports.TaskStatistics = {}));
var DescribeAuditTaskResponse;
(function (DescribeAuditTaskResponse) {
    /**
     * @internal
     */
    DescribeAuditTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditTaskResponse = exports.DescribeAuditTaskResponse || (exports.DescribeAuditTaskResponse = {}));
var DescribeAuthorizerRequest;
(function (DescribeAuthorizerRequest) {
    /**
     * @internal
     */
    DescribeAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuthorizerRequest = exports.DescribeAuthorizerRequest || (exports.DescribeAuthorizerRequest = {}));
var DescribeAuthorizerResponse;
(function (DescribeAuthorizerResponse) {
    /**
     * @internal
     */
    DescribeAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuthorizerResponse = exports.DescribeAuthorizerResponse || (exports.DescribeAuthorizerResponse = {}));
var DescribeBillingGroupRequest;
(function (DescribeBillingGroupRequest) {
    /**
     * @internal
     */
    DescribeBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBillingGroupRequest = exports.DescribeBillingGroupRequest || (exports.DescribeBillingGroupRequest = {}));
var BillingGroupMetadata;
(function (BillingGroupMetadata) {
    /**
     * @internal
     */
    BillingGroupMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillingGroupMetadata = exports.BillingGroupMetadata || (exports.BillingGroupMetadata = {}));
var DescribeBillingGroupResponse;
(function (DescribeBillingGroupResponse) {
    /**
     * @internal
     */
    DescribeBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBillingGroupResponse = exports.DescribeBillingGroupResponse || (exports.DescribeBillingGroupResponse = {}));
var DescribeCACertificateRequest;
(function (DescribeCACertificateRequest) {
    /**
     * @internal
     */
    DescribeCACertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCACertificateRequest = exports.DescribeCACertificateRequest || (exports.DescribeCACertificateRequest = {}));
var CACertificateStatus;
(function (CACertificateStatus) {
    CACertificateStatus["ACTIVE"] = "ACTIVE";
    CACertificateStatus["INACTIVE"] = "INACTIVE";
})(CACertificateStatus = exports.CACertificateStatus || (exports.CACertificateStatus = {}));
var CertificateValidity;
(function (CertificateValidity) {
    /**
     * @internal
     */
    CertificateValidity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateValidity = exports.CertificateValidity || (exports.CertificateValidity = {}));
var CACertificateDescription;
(function (CACertificateDescription) {
    /**
     * @internal
     */
    CACertificateDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CACertificateDescription = exports.CACertificateDescription || (exports.CACertificateDescription = {}));
var RegistrationConfig;
(function (RegistrationConfig) {
    /**
     * @internal
     */
    RegistrationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistrationConfig = exports.RegistrationConfig || (exports.RegistrationConfig = {}));
var DescribeCACertificateResponse;
(function (DescribeCACertificateResponse) {
    /**
     * @internal
     */
    DescribeCACertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCACertificateResponse = exports.DescribeCACertificateResponse || (exports.DescribeCACertificateResponse = {}));
var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
    /**
     * @internal
     */
    DescribeCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificateRequest = exports.DescribeCertificateRequest || (exports.DescribeCertificateRequest = {}));
var CertificateMode;
(function (CertificateMode) {
    CertificateMode["DEFAULT"] = "DEFAULT";
    CertificateMode["SNI_ONLY"] = "SNI_ONLY";
})(CertificateMode = exports.CertificateMode || (exports.CertificateMode = {}));
var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["ACTIVE"] = "ACTIVE";
    CertificateStatus["INACTIVE"] = "INACTIVE";
    CertificateStatus["PENDING_ACTIVATION"] = "PENDING_ACTIVATION";
    CertificateStatus["PENDING_TRANSFER"] = "PENDING_TRANSFER";
    CertificateStatus["REGISTER_INACTIVE"] = "REGISTER_INACTIVE";
    CertificateStatus["REVOKED"] = "REVOKED";
})(CertificateStatus = exports.CertificateStatus || (exports.CertificateStatus = {}));
var TransferData;
(function (TransferData) {
    /**
     * @internal
     */
    TransferData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferData = exports.TransferData || (exports.TransferData = {}));
var CertificateDescription;
(function (CertificateDescription) {
    /**
     * @internal
     */
    CertificateDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateDescription = exports.CertificateDescription || (exports.CertificateDescription = {}));
var DescribeCertificateResponse;
(function (DescribeCertificateResponse) {
    /**
     * @internal
     */
    DescribeCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificateResponse = exports.DescribeCertificateResponse || (exports.DescribeCertificateResponse = {}));
var DescribeCustomMetricRequest;
(function (DescribeCustomMetricRequest) {
    /**
     * @internal
     */
    DescribeCustomMetricRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomMetricRequest = exports.DescribeCustomMetricRequest || (exports.DescribeCustomMetricRequest = {}));
var DescribeCustomMetricResponse;
(function (DescribeCustomMetricResponse) {
    /**
     * @internal
     */
    DescribeCustomMetricResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomMetricResponse = exports.DescribeCustomMetricResponse || (exports.DescribeCustomMetricResponse = {}));
var DescribeDefaultAuthorizerRequest;
(function (DescribeDefaultAuthorizerRequest) {
    /**
     * @internal
     */
    DescribeDefaultAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultAuthorizerRequest = exports.DescribeDefaultAuthorizerRequest || (exports.DescribeDefaultAuthorizerRequest = {}));
var DescribeDefaultAuthorizerResponse;
(function (DescribeDefaultAuthorizerResponse) {
    /**
     * @internal
     */
    DescribeDefaultAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultAuthorizerResponse = exports.DescribeDefaultAuthorizerResponse || (exports.DescribeDefaultAuthorizerResponse = {}));
var DescribeDetectMitigationActionsTaskRequest;
(function (DescribeDetectMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    DescribeDetectMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectMitigationActionsTaskRequest = exports.DescribeDetectMitigationActionsTaskRequest || (exports.DescribeDetectMitigationActionsTaskRequest = {}));
var DetectMitigationActionsTaskTarget;
(function (DetectMitigationActionsTaskTarget) {
    /**
     * @internal
     */
    DetectMitigationActionsTaskTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectMitigationActionsTaskTarget = exports.DetectMitigationActionsTaskTarget || (exports.DetectMitigationActionsTaskTarget = {}));
var DetectMitigationActionsTaskStatistics;
(function (DetectMitigationActionsTaskStatistics) {
    /**
     * @internal
     */
    DetectMitigationActionsTaskStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectMitigationActionsTaskStatistics = exports.DetectMitigationActionsTaskStatistics || (exports.DetectMitigationActionsTaskStatistics = {}));
var DetectMitigationActionsTaskStatus;
(function (DetectMitigationActionsTaskStatus) {
    DetectMitigationActionsTaskStatus["CANCELED"] = "CANCELED";
    DetectMitigationActionsTaskStatus["FAILED"] = "FAILED";
    DetectMitigationActionsTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    DetectMitigationActionsTaskStatus["SUCCESSFUL"] = "SUCCESSFUL";
})(DetectMitigationActionsTaskStatus = exports.DetectMitigationActionsTaskStatus || (exports.DetectMitigationActionsTaskStatus = {}));
var ViolationEventOccurrenceRange;
(function (ViolationEventOccurrenceRange) {
    /**
     * @internal
     */
    ViolationEventOccurrenceRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViolationEventOccurrenceRange = exports.ViolationEventOccurrenceRange || (exports.ViolationEventOccurrenceRange = {}));
var DetectMitigationActionsTaskSummary;
(function (DetectMitigationActionsTaskSummary) {
    /**
     * @internal
     */
    DetectMitigationActionsTaskSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectMitigationActionsTaskSummary = exports.DetectMitigationActionsTaskSummary || (exports.DetectMitigationActionsTaskSummary = {}));
var DescribeDetectMitigationActionsTaskResponse;
(function (DescribeDetectMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    DescribeDetectMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectMitigationActionsTaskResponse = exports.DescribeDetectMitigationActionsTaskResponse || (exports.DescribeDetectMitigationActionsTaskResponse = {}));
var DescribeDimensionRequest;
(function (DescribeDimensionRequest) {
    /**
     * @internal
     */
    DescribeDimensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDimensionRequest = exports.DescribeDimensionRequest || (exports.DescribeDimensionRequest = {}));
var DescribeDimensionResponse;
(function (DescribeDimensionResponse) {
    /**
     * @internal
     */
    DescribeDimensionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDimensionResponse = exports.DescribeDimensionResponse || (exports.DescribeDimensionResponse = {}));
var DescribeDomainConfigurationRequest;
(function (DescribeDomainConfigurationRequest) {
    /**
     * @internal
     */
    DescribeDomainConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainConfigurationRequest = exports.DescribeDomainConfigurationRequest || (exports.DescribeDomainConfigurationRequest = {}));
var DomainConfigurationStatus;
(function (DomainConfigurationStatus) {
    DomainConfigurationStatus["DISABLED"] = "DISABLED";
    DomainConfigurationStatus["ENABLED"] = "ENABLED";
})(DomainConfigurationStatus = exports.DomainConfigurationStatus || (exports.DomainConfigurationStatus = {}));
var DomainType;
(function (DomainType) {
    DomainType["AWS_MANAGED"] = "AWS_MANAGED";
    DomainType["CUSTOMER_MANAGED"] = "CUSTOMER_MANAGED";
    DomainType["ENDPOINT"] = "ENDPOINT";
})(DomainType = exports.DomainType || (exports.DomainType = {}));
var ServerCertificateStatus;
(function (ServerCertificateStatus) {
    ServerCertificateStatus["INVALID"] = "INVALID";
    ServerCertificateStatus["VALID"] = "VALID";
})(ServerCertificateStatus = exports.ServerCertificateStatus || (exports.ServerCertificateStatus = {}));
var ServerCertificateSummary;
(function (ServerCertificateSummary) {
    /**
     * @internal
     */
    ServerCertificateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerCertificateSummary = exports.ServerCertificateSummary || (exports.ServerCertificateSummary = {}));
var DescribeDomainConfigurationResponse;
(function (DescribeDomainConfigurationResponse) {
    /**
     * @internal
     */
    DescribeDomainConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainConfigurationResponse = exports.DescribeDomainConfigurationResponse || (exports.DescribeDomainConfigurationResponse = {}));
var DescribeEndpointRequest;
(function (DescribeEndpointRequest) {
    /**
     * @internal
     */
    DescribeEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointRequest = exports.DescribeEndpointRequest || (exports.DescribeEndpointRequest = {}));
var DescribeEndpointResponse;
(function (DescribeEndpointResponse) {
    /**
     * @internal
     */
    DescribeEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointResponse = exports.DescribeEndpointResponse || (exports.DescribeEndpointResponse = {}));
var DescribeEventConfigurationsRequest;
(function (DescribeEventConfigurationsRequest) {
    /**
     * @internal
     */
    DescribeEventConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventConfigurationsRequest = exports.DescribeEventConfigurationsRequest || (exports.DescribeEventConfigurationsRequest = {}));
var EventType;
(function (EventType) {
    EventType["CA_CERTIFICATE"] = "CA_CERTIFICATE";
    EventType["CERTIFICATE"] = "CERTIFICATE";
    EventType["JOB"] = "JOB";
    EventType["JOB_EXECUTION"] = "JOB_EXECUTION";
    EventType["POLICY"] = "POLICY";
    EventType["THING"] = "THING";
    EventType["THING_GROUP"] = "THING_GROUP";
    EventType["THING_GROUP_HIERARCHY"] = "THING_GROUP_HIERARCHY";
    EventType["THING_GROUP_MEMBERSHIP"] = "THING_GROUP_MEMBERSHIP";
    EventType["THING_TYPE"] = "THING_TYPE";
    EventType["THING_TYPE_ASSOCIATION"] = "THING_TYPE_ASSOCIATION";
})(EventType = exports.EventType || (exports.EventType = {}));
var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var DescribeEventConfigurationsResponse;
(function (DescribeEventConfigurationsResponse) {
    /**
     * @internal
     */
    DescribeEventConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventConfigurationsResponse = exports.DescribeEventConfigurationsResponse || (exports.DescribeEventConfigurationsResponse = {}));
var DescribeIndexRequest;
(function (DescribeIndexRequest) {
    /**
     * @internal
     */
    DescribeIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIndexRequest = exports.DescribeIndexRequest || (exports.DescribeIndexRequest = {}));
var IndexStatus;
(function (IndexStatus) {
    IndexStatus["ACTIVE"] = "ACTIVE";
    IndexStatus["BUILDING"] = "BUILDING";
    IndexStatus["REBUILDING"] = "REBUILDING";
})(IndexStatus = exports.IndexStatus || (exports.IndexStatus = {}));
var DescribeIndexResponse;
(function (DescribeIndexResponse) {
    /**
     * @internal
     */
    DescribeIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIndexResponse = exports.DescribeIndexResponse || (exports.DescribeIndexResponse = {}));
var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRequest = exports.DescribeJobRequest || (exports.DescribeJobRequest = {}));
var JobProcessDetails;
(function (JobProcessDetails) {
    /**
     * @internal
     */
    JobProcessDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobProcessDetails = exports.JobProcessDetails || (exports.JobProcessDetails = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["CANCELED"] = "CANCELED";
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["DELETION_IN_PROGRESS"] = "DELETION_IN_PROGRESS";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var DescribeJobResponse;
(function (DescribeJobResponse) {
    /**
     * @internal
     */
    DescribeJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobResponse = exports.DescribeJobResponse || (exports.DescribeJobResponse = {}));
var DescribeJobExecutionRequest;
(function (DescribeJobExecutionRequest) {
    /**
     * @internal
     */
    DescribeJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobExecutionRequest = exports.DescribeJobExecutionRequest || (exports.DescribeJobExecutionRequest = {}));
var JobExecutionStatus;
(function (JobExecutionStatus) {
    JobExecutionStatus["CANCELED"] = "CANCELED";
    JobExecutionStatus["FAILED"] = "FAILED";
    JobExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobExecutionStatus["QUEUED"] = "QUEUED";
    JobExecutionStatus["REJECTED"] = "REJECTED";
    JobExecutionStatus["REMOVED"] = "REMOVED";
    JobExecutionStatus["SUCCEEDED"] = "SUCCEEDED";
    JobExecutionStatus["TIMED_OUT"] = "TIMED_OUT";
})(JobExecutionStatus = exports.JobExecutionStatus || (exports.JobExecutionStatus = {}));
var JobExecutionStatusDetails;
(function (JobExecutionStatusDetails) {
    /**
     * @internal
     */
    JobExecutionStatusDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionStatusDetails = exports.JobExecutionStatusDetails || (exports.JobExecutionStatusDetails = {}));
var JobExecution;
(function (JobExecution) {
    /**
     * @internal
     */
    JobExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecution = exports.JobExecution || (exports.JobExecution = {}));
var DescribeJobExecutionResponse;
(function (DescribeJobExecutionResponse) {
    /**
     * @internal
     */
    DescribeJobExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobExecutionResponse = exports.DescribeJobExecutionResponse || (exports.DescribeJobExecutionResponse = {}));
var DescribeJobTemplateRequest;
(function (DescribeJobTemplateRequest) {
    /**
     * @internal
     */
    DescribeJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobTemplateRequest = exports.DescribeJobTemplateRequest || (exports.DescribeJobTemplateRequest = {}));
var DescribeJobTemplateResponse;
(function (DescribeJobTemplateResponse) {
    /**
     * @internal
     */
    DescribeJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobTemplateResponse = exports.DescribeJobTemplateResponse || (exports.DescribeJobTemplateResponse = {}));
var DescribeMitigationActionRequest;
(function (DescribeMitigationActionRequest) {
    /**
     * @internal
     */
    DescribeMitigationActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMitigationActionRequest = exports.DescribeMitigationActionRequest || (exports.DescribeMitigationActionRequest = {}));
var MitigationActionType;
(function (MitigationActionType) {
    MitigationActionType["ADD_THINGS_TO_THING_GROUP"] = "ADD_THINGS_TO_THING_GROUP";
    MitigationActionType["ENABLE_IOT_LOGGING"] = "ENABLE_IOT_LOGGING";
    MitigationActionType["PUBLISH_FINDING_TO_SNS"] = "PUBLISH_FINDING_TO_SNS";
    MitigationActionType["REPLACE_DEFAULT_POLICY_VERSION"] = "REPLACE_DEFAULT_POLICY_VERSION";
    MitigationActionType["UPDATE_CA_CERTIFICATE"] = "UPDATE_CA_CERTIFICATE";
    MitigationActionType["UPDATE_DEVICE_CERTIFICATE"] = "UPDATE_DEVICE_CERTIFICATE";
})(MitigationActionType = exports.MitigationActionType || (exports.MitigationActionType = {}));
var DescribeMitigationActionResponse;
(function (DescribeMitigationActionResponse) {
    /**
     * @internal
     */
    DescribeMitigationActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMitigationActionResponse = exports.DescribeMitigationActionResponse || (exports.DescribeMitigationActionResponse = {}));
var DescribeProvisioningTemplateRequest;
(function (DescribeProvisioningTemplateRequest) {
    /**
     * @internal
     */
    DescribeProvisioningTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningTemplateRequest = exports.DescribeProvisioningTemplateRequest || (exports.DescribeProvisioningTemplateRequest = {}));
var DescribeProvisioningTemplateResponse;
(function (DescribeProvisioningTemplateResponse) {
    /**
     * @internal
     */
    DescribeProvisioningTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningTemplateResponse = exports.DescribeProvisioningTemplateResponse || (exports.DescribeProvisioningTemplateResponse = {}));
var DescribeProvisioningTemplateVersionRequest;
(function (DescribeProvisioningTemplateVersionRequest) {
    /**
     * @internal
     */
    DescribeProvisioningTemplateVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningTemplateVersionRequest = exports.DescribeProvisioningTemplateVersionRequest || (exports.DescribeProvisioningTemplateVersionRequest = {}));
var DescribeProvisioningTemplateVersionResponse;
(function (DescribeProvisioningTemplateVersionResponse) {
    /**
     * @internal
     */
    DescribeProvisioningTemplateVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningTemplateVersionResponse = exports.DescribeProvisioningTemplateVersionResponse || (exports.DescribeProvisioningTemplateVersionResponse = {}));
var DescribeRoleAliasRequest;
(function (DescribeRoleAliasRequest) {
    /**
     * @internal
     */
    DescribeRoleAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRoleAliasRequest = exports.DescribeRoleAliasRequest || (exports.DescribeRoleAliasRequest = {}));
var RoleAliasDescription;
(function (RoleAliasDescription) {
    /**
     * @internal
     */
    RoleAliasDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleAliasDescription = exports.RoleAliasDescription || (exports.RoleAliasDescription = {}));
var DescribeRoleAliasResponse;
(function (DescribeRoleAliasResponse) {
    /**
     * @internal
     */
    DescribeRoleAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRoleAliasResponse = exports.DescribeRoleAliasResponse || (exports.DescribeRoleAliasResponse = {}));
var DescribeScheduledAuditRequest;
(function (DescribeScheduledAuditRequest) {
    /**
     * @internal
     */
    DescribeScheduledAuditRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledAuditRequest = exports.DescribeScheduledAuditRequest || (exports.DescribeScheduledAuditRequest = {}));
var DescribeScheduledAuditResponse;
(function (DescribeScheduledAuditResponse) {
    /**
     * @internal
     */
    DescribeScheduledAuditResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledAuditResponse = exports.DescribeScheduledAuditResponse || (exports.DescribeScheduledAuditResponse = {}));
var DescribeSecurityProfileRequest;
(function (DescribeSecurityProfileRequest) {
    /**
     * @internal
     */
    DescribeSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityProfileRequest = exports.DescribeSecurityProfileRequest || (exports.DescribeSecurityProfileRequest = {}));
var DescribeSecurityProfileResponse;
(function (DescribeSecurityProfileResponse) {
    /**
     * @internal
     */
    DescribeSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityProfileResponse = exports.DescribeSecurityProfileResponse || (exports.DescribeSecurityProfileResponse = {}));
var DescribeStreamRequest;
(function (DescribeStreamRequest) {
    /**
     * @internal
     */
    DescribeStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamRequest = exports.DescribeStreamRequest || (exports.DescribeStreamRequest = {}));
var StreamInfo;
(function (StreamInfo) {
    /**
     * @internal
     */
    StreamInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamInfo = exports.StreamInfo || (exports.StreamInfo = {}));
var DescribeStreamResponse;
(function (DescribeStreamResponse) {
    /**
     * @internal
     */
    DescribeStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamResponse = exports.DescribeStreamResponse || (exports.DescribeStreamResponse = {}));
var DescribeThingRequest;
(function (DescribeThingRequest) {
    /**
     * @internal
     */
    DescribeThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingRequest = exports.DescribeThingRequest || (exports.DescribeThingRequest = {}));
var DescribeThingResponse;
(function (DescribeThingResponse) {
    /**
     * @internal
     */
    DescribeThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingResponse = exports.DescribeThingResponse || (exports.DescribeThingResponse = {}));
var DescribeThingGroupRequest;
(function (DescribeThingGroupRequest) {
    /**
     * @internal
     */
    DescribeThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingGroupRequest = exports.DescribeThingGroupRequest || (exports.DescribeThingGroupRequest = {}));
var DynamicGroupStatus;
(function (DynamicGroupStatus) {
    DynamicGroupStatus["ACTIVE"] = "ACTIVE";
    DynamicGroupStatus["BUILDING"] = "BUILDING";
    DynamicGroupStatus["REBUILDING"] = "REBUILDING";
})(DynamicGroupStatus = exports.DynamicGroupStatus || (exports.DynamicGroupStatus = {}));
var GroupNameAndArn;
(function (GroupNameAndArn) {
    /**
     * @internal
     */
    GroupNameAndArn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupNameAndArn = exports.GroupNameAndArn || (exports.GroupNameAndArn = {}));
var ThingGroupMetadata;
(function (ThingGroupMetadata) {
    /**
     * @internal
     */
    ThingGroupMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingGroupMetadata = exports.ThingGroupMetadata || (exports.ThingGroupMetadata = {}));
var DescribeThingGroupResponse;
(function (DescribeThingGroupResponse) {
    /**
     * @internal
     */
    DescribeThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingGroupResponse = exports.DescribeThingGroupResponse || (exports.DescribeThingGroupResponse = {}));
var DescribeThingRegistrationTaskRequest;
(function (DescribeThingRegistrationTaskRequest) {
    /**
     * @internal
     */
    DescribeThingRegistrationTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingRegistrationTaskRequest = exports.DescribeThingRegistrationTaskRequest || (exports.DescribeThingRegistrationTaskRequest = {}));
var Status;
(function (Status) {
    Status["Cancelled"] = "Cancelled";
    Status["Cancelling"] = "Cancelling";
    Status["Completed"] = "Completed";
    Status["Failed"] = "Failed";
    Status["InProgress"] = "InProgress";
})(Status = exports.Status || (exports.Status = {}));
var DescribeThingRegistrationTaskResponse;
(function (DescribeThingRegistrationTaskResponse) {
    /**
     * @internal
     */
    DescribeThingRegistrationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingRegistrationTaskResponse = exports.DescribeThingRegistrationTaskResponse || (exports.DescribeThingRegistrationTaskResponse = {}));
var DescribeThingTypeRequest;
(function (DescribeThingTypeRequest) {
    /**
     * @internal
     */
    DescribeThingTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingTypeRequest = exports.DescribeThingTypeRequest || (exports.DescribeThingTypeRequest = {}));
var ThingTypeMetadata;
(function (ThingTypeMetadata) {
    /**
     * @internal
     */
    ThingTypeMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingTypeMetadata = exports.ThingTypeMetadata || (exports.ThingTypeMetadata = {}));
var DescribeThingTypeResponse;
(function (DescribeThingTypeResponse) {
    /**
     * @internal
     */
    DescribeThingTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeThingTypeResponse = exports.DescribeThingTypeResponse || (exports.DescribeThingTypeResponse = {}));
var DetachPolicyRequest;
(function (DetachPolicyRequest) {
    /**
     * @internal
     */
    DetachPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachPolicyRequest = exports.DetachPolicyRequest || (exports.DetachPolicyRequest = {}));
var DetachPrincipalPolicyRequest;
(function (DetachPrincipalPolicyRequest) {
    /**
     * @internal
     */
    DetachPrincipalPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachPrincipalPolicyRequest = exports.DetachPrincipalPolicyRequest || (exports.DetachPrincipalPolicyRequest = {}));
var DetachSecurityProfileRequest;
(function (DetachSecurityProfileRequest) {
    /**
     * @internal
     */
    DetachSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachSecurityProfileRequest = exports.DetachSecurityProfileRequest || (exports.DetachSecurityProfileRequest = {}));
var DetachSecurityProfileResponse;
(function (DetachSecurityProfileResponse) {
    /**
     * @internal
     */
    DetachSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachSecurityProfileResponse = exports.DetachSecurityProfileResponse || (exports.DetachSecurityProfileResponse = {}));
var DetachThingPrincipalRequest;
(function (DetachThingPrincipalRequest) {
    /**
     * @internal
     */
    DetachThingPrincipalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachThingPrincipalRequest = exports.DetachThingPrincipalRequest || (exports.DetachThingPrincipalRequest = {}));
var DetachThingPrincipalResponse;
(function (DetachThingPrincipalResponse) {
    /**
     * @internal
     */
    DetachThingPrincipalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachThingPrincipalResponse = exports.DetachThingPrincipalResponse || (exports.DetachThingPrincipalResponse = {}));
var DisableTopicRuleRequest;
(function (DisableTopicRuleRequest) {
    /**
     * @internal
     */
    DisableTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableTopicRuleRequest = exports.DisableTopicRuleRequest || (exports.DisableTopicRuleRequest = {}));
var EnableTopicRuleRequest;
(function (EnableTopicRuleRequest) {
    /**
     * @internal
     */
    EnableTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableTopicRuleRequest = exports.EnableTopicRuleRequest || (exports.EnableTopicRuleRequest = {}));
var GetBehaviorModelTrainingSummariesRequest;
(function (GetBehaviorModelTrainingSummariesRequest) {
    /**
     * @internal
     */
    GetBehaviorModelTrainingSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBehaviorModelTrainingSummariesRequest = exports.GetBehaviorModelTrainingSummariesRequest || (exports.GetBehaviorModelTrainingSummariesRequest = {}));
var ModelStatus;
(function (ModelStatus) {
    ModelStatus["ACTIVE"] = "ACTIVE";
    ModelStatus["EXPIRED"] = "EXPIRED";
    ModelStatus["PENDING_BUILD"] = "PENDING_BUILD";
})(ModelStatus = exports.ModelStatus || (exports.ModelStatus = {}));
var BehaviorModelTrainingSummary;
(function (BehaviorModelTrainingSummary) {
    /**
     * @internal
     */
    BehaviorModelTrainingSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BehaviorModelTrainingSummary = exports.BehaviorModelTrainingSummary || (exports.BehaviorModelTrainingSummary = {}));
var GetBehaviorModelTrainingSummariesResponse;
(function (GetBehaviorModelTrainingSummariesResponse) {
    /**
     * @internal
     */
    GetBehaviorModelTrainingSummariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBehaviorModelTrainingSummariesResponse = exports.GetBehaviorModelTrainingSummariesResponse || (exports.GetBehaviorModelTrainingSummariesResponse = {}));
var GetCardinalityRequest;
(function (GetCardinalityRequest) {
    /**
     * @internal
     */
    GetCardinalityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCardinalityRequest = exports.GetCardinalityRequest || (exports.GetCardinalityRequest = {}));
var GetCardinalityResponse;
(function (GetCardinalityResponse) {
    /**
     * @internal
     */
    GetCardinalityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCardinalityResponse = exports.GetCardinalityResponse || (exports.GetCardinalityResponse = {}));
var IndexNotReadyException;
(function (IndexNotReadyException) {
    /**
     * @internal
     */
    IndexNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexNotReadyException = exports.IndexNotReadyException || (exports.IndexNotReadyException = {}));
var InvalidAggregationException;
(function (InvalidAggregationException) {
    /**
     * @internal
     */
    InvalidAggregationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAggregationException = exports.InvalidAggregationException || (exports.InvalidAggregationException = {}));
var GetEffectivePoliciesRequest;
(function (GetEffectivePoliciesRequest) {
    /**
     * @internal
     */
    GetEffectivePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEffectivePoliciesRequest = exports.GetEffectivePoliciesRequest || (exports.GetEffectivePoliciesRequest = {}));
var EffectivePolicy;
(function (EffectivePolicy) {
    /**
     * @internal
     */
    EffectivePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EffectivePolicy = exports.EffectivePolicy || (exports.EffectivePolicy = {}));
var GetEffectivePoliciesResponse;
(function (GetEffectivePoliciesResponse) {
    /**
     * @internal
     */
    GetEffectivePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEffectivePoliciesResponse = exports.GetEffectivePoliciesResponse || (exports.GetEffectivePoliciesResponse = {}));
var GetIndexingConfigurationRequest;
(function (GetIndexingConfigurationRequest) {
    /**
     * @internal
     */
    GetIndexingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIndexingConfigurationRequest = exports.GetIndexingConfigurationRequest || (exports.GetIndexingConfigurationRequest = {}));
var FieldType;
(function (FieldType) {
    FieldType["BOOLEAN"] = "Boolean";
    FieldType["NUMBER"] = "Number";
    FieldType["STRING"] = "String";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var Field;
(function (Field) {
    /**
     * @internal
     */
    Field.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Field = exports.Field || (exports.Field = {}));
var ThingGroupIndexingMode;
(function (ThingGroupIndexingMode) {
    ThingGroupIndexingMode["OFF"] = "OFF";
    ThingGroupIndexingMode["ON"] = "ON";
})(ThingGroupIndexingMode = exports.ThingGroupIndexingMode || (exports.ThingGroupIndexingMode = {}));
var ThingGroupIndexingConfiguration;
(function (ThingGroupIndexingConfiguration) {
    /**
     * @internal
     */
    ThingGroupIndexingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingGroupIndexingConfiguration = exports.ThingGroupIndexingConfiguration || (exports.ThingGroupIndexingConfiguration = {}));
var ThingConnectivityIndexingMode;
(function (ThingConnectivityIndexingMode) {
    ThingConnectivityIndexingMode["OFF"] = "OFF";
    ThingConnectivityIndexingMode["STATUS"] = "STATUS";
})(ThingConnectivityIndexingMode = exports.ThingConnectivityIndexingMode || (exports.ThingConnectivityIndexingMode = {}));
var ThingIndexingMode;
(function (ThingIndexingMode) {
    ThingIndexingMode["OFF"] = "OFF";
    ThingIndexingMode["REGISTRY"] = "REGISTRY";
    ThingIndexingMode["REGISTRY_AND_SHADOW"] = "REGISTRY_AND_SHADOW";
})(ThingIndexingMode = exports.ThingIndexingMode || (exports.ThingIndexingMode = {}));
var ThingIndexingConfiguration;
(function (ThingIndexingConfiguration) {
    /**
     * @internal
     */
    ThingIndexingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingIndexingConfiguration = exports.ThingIndexingConfiguration || (exports.ThingIndexingConfiguration = {}));
var GetIndexingConfigurationResponse;
(function (GetIndexingConfigurationResponse) {
    /**
     * @internal
     */
    GetIndexingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIndexingConfigurationResponse = exports.GetIndexingConfigurationResponse || (exports.GetIndexingConfigurationResponse = {}));
var GetJobDocumentRequest;
(function (GetJobDocumentRequest) {
    /**
     * @internal
     */
    GetJobDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobDocumentRequest = exports.GetJobDocumentRequest || (exports.GetJobDocumentRequest = {}));
var GetJobDocumentResponse;
(function (GetJobDocumentResponse) {
    /**
     * @internal
     */
    GetJobDocumentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobDocumentResponse = exports.GetJobDocumentResponse || (exports.GetJobDocumentResponse = {}));
var GetLoggingOptionsRequest;
(function (GetLoggingOptionsRequest) {
    /**
     * @internal
     */
    GetLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggingOptionsRequest = exports.GetLoggingOptionsRequest || (exports.GetLoggingOptionsRequest = {}));
var GetLoggingOptionsResponse;
(function (GetLoggingOptionsResponse) {
    /**
     * @internal
     */
    GetLoggingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggingOptionsResponse = exports.GetLoggingOptionsResponse || (exports.GetLoggingOptionsResponse = {}));
var GetOTAUpdateRequest;
(function (GetOTAUpdateRequest) {
    /**
     * @internal
     */
    GetOTAUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOTAUpdateRequest = exports.GetOTAUpdateRequest || (exports.GetOTAUpdateRequest = {}));
var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorInfo = exports.ErrorInfo || (exports.ErrorInfo = {}));
var OTAUpdateInfo;
(function (OTAUpdateInfo) {
    /**
     * @internal
     */
    OTAUpdateInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OTAUpdateInfo = exports.OTAUpdateInfo || (exports.OTAUpdateInfo = {}));
var GetOTAUpdateResponse;
(function (GetOTAUpdateResponse) {
    /**
     * @internal
     */
    GetOTAUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOTAUpdateResponse = exports.GetOTAUpdateResponse || (exports.GetOTAUpdateResponse = {}));
var GetPercentilesRequest;
(function (GetPercentilesRequest) {
    /**
     * @internal
     */
    GetPercentilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPercentilesRequest = exports.GetPercentilesRequest || (exports.GetPercentilesRequest = {}));
var PercentPair;
(function (PercentPair) {
    /**
     * @internal
     */
    PercentPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PercentPair = exports.PercentPair || (exports.PercentPair = {}));
var GetPercentilesResponse;
(function (GetPercentilesResponse) {
    /**
     * @internal
     */
    GetPercentilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPercentilesResponse = exports.GetPercentilesResponse || (exports.GetPercentilesResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var GetPolicyVersionRequest;
(function (GetPolicyVersionRequest) {
    /**
     * @internal
     */
    GetPolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyVersionRequest = exports.GetPolicyVersionRequest || (exports.GetPolicyVersionRequest = {}));
var GetPolicyVersionResponse;
(function (GetPolicyVersionResponse) {
    /**
     * @internal
     */
    GetPolicyVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyVersionResponse = exports.GetPolicyVersionResponse || (exports.GetPolicyVersionResponse = {}));
var GetRegistrationCodeRequest;
(function (GetRegistrationCodeRequest) {
    /**
     * @internal
     */
    GetRegistrationCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistrationCodeRequest = exports.GetRegistrationCodeRequest || (exports.GetRegistrationCodeRequest = {}));
var GetRegistrationCodeResponse;
(function (GetRegistrationCodeResponse) {
    /**
     * @internal
     */
    GetRegistrationCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistrationCodeResponse = exports.GetRegistrationCodeResponse || (exports.GetRegistrationCodeResponse = {}));
var GetStatisticsRequest;
(function (GetStatisticsRequest) {
    /**
     * @internal
     */
    GetStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStatisticsRequest = exports.GetStatisticsRequest || (exports.GetStatisticsRequest = {}));
var Statistics;
(function (Statistics) {
    /**
     * @internal
     */
    Statistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statistics = exports.Statistics || (exports.Statistics = {}));
var GetStatisticsResponse;
(function (GetStatisticsResponse) {
    /**
     * @internal
     */
    GetStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStatisticsResponse = exports.GetStatisticsResponse || (exports.GetStatisticsResponse = {}));
var GetTopicRuleRequest;
(function (GetTopicRuleRequest) {
    /**
     * @internal
     */
    GetTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicRuleRequest = exports.GetTopicRuleRequest || (exports.GetTopicRuleRequest = {}));
var TopicRule;
(function (TopicRule) {
    /**
     * @internal
     */
    TopicRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRule = exports.TopicRule || (exports.TopicRule = {}));
var GetTopicRuleResponse;
(function (GetTopicRuleResponse) {
    /**
     * @internal
     */
    GetTopicRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicRuleResponse = exports.GetTopicRuleResponse || (exports.GetTopicRuleResponse = {}));
var GetTopicRuleDestinationRequest;
(function (GetTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    GetTopicRuleDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicRuleDestinationRequest = exports.GetTopicRuleDestinationRequest || (exports.GetTopicRuleDestinationRequest = {}));
var GetTopicRuleDestinationResponse;
(function (GetTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    GetTopicRuleDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicRuleDestinationResponse = exports.GetTopicRuleDestinationResponse || (exports.GetTopicRuleDestinationResponse = {}));
var GetV2LoggingOptionsRequest;
(function (GetV2LoggingOptionsRequest) {
    /**
     * @internal
     */
    GetV2LoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetV2LoggingOptionsRequest = exports.GetV2LoggingOptionsRequest || (exports.GetV2LoggingOptionsRequest = {}));
var GetV2LoggingOptionsResponse;
(function (GetV2LoggingOptionsResponse) {
    /**
     * @internal
     */
    GetV2LoggingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetV2LoggingOptionsResponse = exports.GetV2LoggingOptionsResponse || (exports.GetV2LoggingOptionsResponse = {}));
var NotConfiguredException;
(function (NotConfiguredException) {
    /**
     * @internal
     */
    NotConfiguredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotConfiguredException = exports.NotConfiguredException || (exports.NotConfiguredException = {}));
var BehaviorCriteriaType;
(function (BehaviorCriteriaType) {
    BehaviorCriteriaType["MACHINE_LEARNING"] = "MACHINE_LEARNING";
    BehaviorCriteriaType["STATIC"] = "STATIC";
    BehaviorCriteriaType["STATISTICAL"] = "STATISTICAL";
})(BehaviorCriteriaType = exports.BehaviorCriteriaType || (exports.BehaviorCriteriaType = {}));
var ListActiveViolationsRequest;
(function (ListActiveViolationsRequest) {
    /**
     * @internal
     */
    ListActiveViolationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActiveViolationsRequest = exports.ListActiveViolationsRequest || (exports.ListActiveViolationsRequest = {}));
var ListActiveViolationsResponse;
(function (ListActiveViolationsResponse) {
    /**
     * @internal
     */
    ListActiveViolationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActiveViolationsResponse = exports.ListActiveViolationsResponse || (exports.ListActiveViolationsResponse = {}));
var ListAttachedPoliciesRequest;
(function (ListAttachedPoliciesRequest) {
    /**
     * @internal
     */
    ListAttachedPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedPoliciesRequest = exports.ListAttachedPoliciesRequest || (exports.ListAttachedPoliciesRequest = {}));
var ListAttachedPoliciesResponse;
(function (ListAttachedPoliciesResponse) {
    /**
     * @internal
     */
    ListAttachedPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttachedPoliciesResponse = exports.ListAttachedPoliciesResponse || (exports.ListAttachedPoliciesResponse = {}));
var ListAuditFindingsRequest;
(function (ListAuditFindingsRequest) {
    /**
     * @internal
     */
    ListAuditFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditFindingsRequest = exports.ListAuditFindingsRequest || (exports.ListAuditFindingsRequest = {}));
var ListAuditFindingsResponse;
(function (ListAuditFindingsResponse) {
    /**
     * @internal
     */
    ListAuditFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditFindingsResponse = exports.ListAuditFindingsResponse || (exports.ListAuditFindingsResponse = {}));
var ListAuditMitigationActionsExecutionsRequest;
(function (ListAuditMitigationActionsExecutionsRequest) {
    /**
     * @internal
     */
    ListAuditMitigationActionsExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditMitigationActionsExecutionsRequest = exports.ListAuditMitigationActionsExecutionsRequest || (exports.ListAuditMitigationActionsExecutionsRequest = {}));
var ListAuditMitigationActionsExecutionsResponse;
(function (ListAuditMitigationActionsExecutionsResponse) {
    /**
     * @internal
     */
    ListAuditMitigationActionsExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditMitigationActionsExecutionsResponse = exports.ListAuditMitigationActionsExecutionsResponse || (exports.ListAuditMitigationActionsExecutionsResponse = {}));
var ListAuditMitigationActionsTasksRequest;
(function (ListAuditMitigationActionsTasksRequest) {
    /**
     * @internal
     */
    ListAuditMitigationActionsTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditMitigationActionsTasksRequest = exports.ListAuditMitigationActionsTasksRequest || (exports.ListAuditMitigationActionsTasksRequest = {}));
var ListAuditMitigationActionsTasksResponse;
(function (ListAuditMitigationActionsTasksResponse) {
    /**
     * @internal
     */
    ListAuditMitigationActionsTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditMitigationActionsTasksResponse = exports.ListAuditMitigationActionsTasksResponse || (exports.ListAuditMitigationActionsTasksResponse = {}));
var ListAuditSuppressionsRequest;
(function (ListAuditSuppressionsRequest) {
    /**
     * @internal
     */
    ListAuditSuppressionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditSuppressionsRequest = exports.ListAuditSuppressionsRequest || (exports.ListAuditSuppressionsRequest = {}));
var ListAuditSuppressionsResponse;
(function (ListAuditSuppressionsResponse) {
    /**
     * @internal
     */
    ListAuditSuppressionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditSuppressionsResponse = exports.ListAuditSuppressionsResponse || (exports.ListAuditSuppressionsResponse = {}));
var ListAuditTasksRequest;
(function (ListAuditTasksRequest) {
    /**
     * @internal
     */
    ListAuditTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditTasksRequest = exports.ListAuditTasksRequest || (exports.ListAuditTasksRequest = {}));
var ListAuditTasksResponse;
(function (ListAuditTasksResponse) {
    /**
     * @internal
     */
    ListAuditTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuditTasksResponse = exports.ListAuditTasksResponse || (exports.ListAuditTasksResponse = {}));
var ListAuthorizersRequest;
(function (ListAuthorizersRequest) {
    /**
     * @internal
     */
    ListAuthorizersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuthorizersRequest = exports.ListAuthorizersRequest || (exports.ListAuthorizersRequest = {}));
var ListAuthorizersResponse;
(function (ListAuthorizersResponse) {
    /**
     * @internal
     */
    ListAuthorizersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAuthorizersResponse = exports.ListAuthorizersResponse || (exports.ListAuthorizersResponse = {}));
var ListBillingGroupsRequest;
(function (ListBillingGroupsRequest) {
    /**
     * @internal
     */
    ListBillingGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBillingGroupsRequest = exports.ListBillingGroupsRequest || (exports.ListBillingGroupsRequest = {}));
var ListBillingGroupsResponse;
(function (ListBillingGroupsResponse) {
    /**
     * @internal
     */
    ListBillingGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBillingGroupsResponse = exports.ListBillingGroupsResponse || (exports.ListBillingGroupsResponse = {}));
var ListCACertificatesRequest;
(function (ListCACertificatesRequest) {
    /**
     * @internal
     */
    ListCACertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCACertificatesRequest = exports.ListCACertificatesRequest || (exports.ListCACertificatesRequest = {}));
var CACertificate;
(function (CACertificate) {
    /**
     * @internal
     */
    CACertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CACertificate = exports.CACertificate || (exports.CACertificate = {}));
var ListCACertificatesResponse;
(function (ListCACertificatesResponse) {
    /**
     * @internal
     */
    ListCACertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCACertificatesResponse = exports.ListCACertificatesResponse || (exports.ListCACertificatesResponse = {}));
var ListCertificatesRequest;
(function (ListCertificatesRequest) {
    /**
     * @internal
     */
    ListCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesRequest = exports.ListCertificatesRequest || (exports.ListCertificatesRequest = {}));
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var ListCertificatesResponse;
(function (ListCertificatesResponse) {
    /**
     * @internal
     */
    ListCertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesResponse = exports.ListCertificatesResponse || (exports.ListCertificatesResponse = {}));
var ListCertificatesByCARequest;
(function (ListCertificatesByCARequest) {
    /**
     * @internal
     */
    ListCertificatesByCARequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesByCARequest = exports.ListCertificatesByCARequest || (exports.ListCertificatesByCARequest = {}));
var ListCertificatesByCAResponse;
(function (ListCertificatesByCAResponse) {
    /**
     * @internal
     */
    ListCertificatesByCAResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCertificatesByCAResponse = exports.ListCertificatesByCAResponse || (exports.ListCertificatesByCAResponse = {}));
var ListCustomMetricsRequest;
(function (ListCustomMetricsRequest) {
    /**
     * @internal
     */
    ListCustomMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomMetricsRequest = exports.ListCustomMetricsRequest || (exports.ListCustomMetricsRequest = {}));
var ListCustomMetricsResponse;
(function (ListCustomMetricsResponse) {
    /**
     * @internal
     */
    ListCustomMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomMetricsResponse = exports.ListCustomMetricsResponse || (exports.ListCustomMetricsResponse = {}));
var ListDetectMitigationActionsExecutionsRequest;
(function (ListDetectMitigationActionsExecutionsRequest) {
    /**
     * @internal
     */
    ListDetectMitigationActionsExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectMitigationActionsExecutionsRequest = exports.ListDetectMitigationActionsExecutionsRequest || (exports.ListDetectMitigationActionsExecutionsRequest = {}));
var DetectMitigationActionExecutionStatus;
(function (DetectMitigationActionExecutionStatus) {
    DetectMitigationActionExecutionStatus["FAILED"] = "FAILED";
    DetectMitigationActionExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    DetectMitigationActionExecutionStatus["SKIPPED"] = "SKIPPED";
    DetectMitigationActionExecutionStatus["SUCCESSFUL"] = "SUCCESSFUL";
})(DetectMitigationActionExecutionStatus = exports.DetectMitigationActionExecutionStatus || (exports.DetectMitigationActionExecutionStatus = {}));
var DetectMitigationActionExecution;
(function (DetectMitigationActionExecution) {
    /**
     * @internal
     */
    DetectMitigationActionExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectMitigationActionExecution = exports.DetectMitigationActionExecution || (exports.DetectMitigationActionExecution = {}));
var ListDetectMitigationActionsExecutionsResponse;
(function (ListDetectMitigationActionsExecutionsResponse) {
    /**
     * @internal
     */
    ListDetectMitigationActionsExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectMitigationActionsExecutionsResponse = exports.ListDetectMitigationActionsExecutionsResponse || (exports.ListDetectMitigationActionsExecutionsResponse = {}));
var ListDetectMitigationActionsTasksRequest;
(function (ListDetectMitigationActionsTasksRequest) {
    /**
     * @internal
     */
    ListDetectMitigationActionsTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectMitigationActionsTasksRequest = exports.ListDetectMitigationActionsTasksRequest || (exports.ListDetectMitigationActionsTasksRequest = {}));
var ListDetectMitigationActionsTasksResponse;
(function (ListDetectMitigationActionsTasksResponse) {
    /**
     * @internal
     */
    ListDetectMitigationActionsTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectMitigationActionsTasksResponse = exports.ListDetectMitigationActionsTasksResponse || (exports.ListDetectMitigationActionsTasksResponse = {}));
var ListDimensionsRequest;
(function (ListDimensionsRequest) {
    /**
     * @internal
     */
    ListDimensionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDimensionsRequest = exports.ListDimensionsRequest || (exports.ListDimensionsRequest = {}));
var ListDimensionsResponse;
(function (ListDimensionsResponse) {
    /**
     * @internal
     */
    ListDimensionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDimensionsResponse = exports.ListDimensionsResponse || (exports.ListDimensionsResponse = {}));
var ListDomainConfigurationsRequest;
(function (ListDomainConfigurationsRequest) {
    /**
     * @internal
     */
    ListDomainConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainConfigurationsRequest = exports.ListDomainConfigurationsRequest || (exports.ListDomainConfigurationsRequest = {}));
var DomainConfigurationSummary;
(function (DomainConfigurationSummary) {
    /**
     * @internal
     */
    DomainConfigurationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainConfigurationSummary = exports.DomainConfigurationSummary || (exports.DomainConfigurationSummary = {}));
var ListDomainConfigurationsResponse;
(function (ListDomainConfigurationsResponse) {
    /**
     * @internal
     */
    ListDomainConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainConfigurationsResponse = exports.ListDomainConfigurationsResponse || (exports.ListDomainConfigurationsResponse = {}));
var ListIndicesRequest;
(function (ListIndicesRequest) {
    /**
     * @internal
     */
    ListIndicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIndicesRequest = exports.ListIndicesRequest || (exports.ListIndicesRequest = {}));
var ListIndicesResponse;
(function (ListIndicesResponse) {
    /**
     * @internal
     */
    ListIndicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIndicesResponse = exports.ListIndicesResponse || (exports.ListIndicesResponse = {}));
var ListJobExecutionsForJobRequest;
(function (ListJobExecutionsForJobRequest) {
    /**
     * @internal
     */
    ListJobExecutionsForJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobExecutionsForJobRequest = exports.ListJobExecutionsForJobRequest || (exports.ListJobExecutionsForJobRequest = {}));
var JobExecutionSummary;
(function (JobExecutionSummary) {
    /**
     * @internal
     */
    JobExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionSummary = exports.JobExecutionSummary || (exports.JobExecutionSummary = {}));
var JobExecutionSummaryForJob;
(function (JobExecutionSummaryForJob) {
    /**
     * @internal
     */
    JobExecutionSummaryForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionSummaryForJob = exports.JobExecutionSummaryForJob || (exports.JobExecutionSummaryForJob = {}));
var ListJobExecutionsForJobResponse;
(function (ListJobExecutionsForJobResponse) {
    /**
     * @internal
     */
    ListJobExecutionsForJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobExecutionsForJobResponse = exports.ListJobExecutionsForJobResponse || (exports.ListJobExecutionsForJobResponse = {}));
var ListJobExecutionsForThingRequest;
(function (ListJobExecutionsForThingRequest) {
    /**
     * @internal
     */
    ListJobExecutionsForThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobExecutionsForThingRequest = exports.ListJobExecutionsForThingRequest || (exports.ListJobExecutionsForThingRequest = {}));
var JobExecutionSummaryForThing;
(function (JobExecutionSummaryForThing) {
    /**
     * @internal
     */
    JobExecutionSummaryForThing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionSummaryForThing = exports.JobExecutionSummaryForThing || (exports.JobExecutionSummaryForThing = {}));
var ListJobExecutionsForThingResponse;
(function (ListJobExecutionsForThingResponse) {
    /**
     * @internal
     */
    ListJobExecutionsForThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobExecutionsForThingResponse = exports.ListJobExecutionsForThingResponse || (exports.ListJobExecutionsForThingResponse = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var JobSummary;
(function (JobSummary) {
    /**
     * @internal
     */
    JobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobSummary = exports.JobSummary || (exports.JobSummary = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListJobTemplatesRequest;
(function (ListJobTemplatesRequest) {
    /**
     * @internal
     */
    ListJobTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobTemplatesRequest = exports.ListJobTemplatesRequest || (exports.ListJobTemplatesRequest = {}));
var JobTemplateSummary;
(function (JobTemplateSummary) {
    /**
     * @internal
     */
    JobTemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobTemplateSummary = exports.JobTemplateSummary || (exports.JobTemplateSummary = {}));
var ListJobTemplatesResponse;
(function (ListJobTemplatesResponse) {
    /**
     * @internal
     */
    ListJobTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobTemplatesResponse = exports.ListJobTemplatesResponse || (exports.ListJobTemplatesResponse = {}));
var ListMitigationActionsRequest;
(function (ListMitigationActionsRequest) {
    /**
     * @internal
     */
    ListMitigationActionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMitigationActionsRequest = exports.ListMitigationActionsRequest || (exports.ListMitigationActionsRequest = {}));
var MitigationActionIdentifier;
(function (MitigationActionIdentifier) {
    /**
     * @internal
     */
    MitigationActionIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MitigationActionIdentifier = exports.MitigationActionIdentifier || (exports.MitigationActionIdentifier = {}));
var ListMitigationActionsResponse;
(function (ListMitigationActionsResponse) {
    /**
     * @internal
     */
    ListMitigationActionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMitigationActionsResponse = exports.ListMitigationActionsResponse || (exports.ListMitigationActionsResponse = {}));
var ListOTAUpdatesRequest;
(function (ListOTAUpdatesRequest) {
    /**
     * @internal
     */
    ListOTAUpdatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOTAUpdatesRequest = exports.ListOTAUpdatesRequest || (exports.ListOTAUpdatesRequest = {}));
var OTAUpdateSummary;
(function (OTAUpdateSummary) {
    /**
     * @internal
     */
    OTAUpdateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OTAUpdateSummary = exports.OTAUpdateSummary || (exports.OTAUpdateSummary = {}));
var ListOTAUpdatesResponse;
(function (ListOTAUpdatesResponse) {
    /**
     * @internal
     */
    ListOTAUpdatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOTAUpdatesResponse = exports.ListOTAUpdatesResponse || (exports.ListOTAUpdatesResponse = {}));
var ListOutgoingCertificatesRequest;
(function (ListOutgoingCertificatesRequest) {
    /**
     * @internal
     */
    ListOutgoingCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOutgoingCertificatesRequest = exports.ListOutgoingCertificatesRequest || (exports.ListOutgoingCertificatesRequest = {}));
var OutgoingCertificate;
(function (OutgoingCertificate) {
    /**
     * @internal
     */
    OutgoingCertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutgoingCertificate = exports.OutgoingCertificate || (exports.OutgoingCertificate = {}));
var ListOutgoingCertificatesResponse;
(function (ListOutgoingCertificatesResponse) {
    /**
     * @internal
     */
    ListOutgoingCertificatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOutgoingCertificatesResponse = exports.ListOutgoingCertificatesResponse || (exports.ListOutgoingCertificatesResponse = {}));
var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesRequest = exports.ListPoliciesRequest || (exports.ListPoliciesRequest = {}));
var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesResponse = exports.ListPoliciesResponse || (exports.ListPoliciesResponse = {}));
var ListPolicyPrincipalsRequest;
(function (ListPolicyPrincipalsRequest) {
    /**
     * @internal
     */
    ListPolicyPrincipalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyPrincipalsRequest = exports.ListPolicyPrincipalsRequest || (exports.ListPolicyPrincipalsRequest = {}));
var ListPolicyPrincipalsResponse;
(function (ListPolicyPrincipalsResponse) {
    /**
     * @internal
     */
    ListPolicyPrincipalsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyPrincipalsResponse = exports.ListPolicyPrincipalsResponse || (exports.ListPolicyPrincipalsResponse = {}));
var ListPolicyVersionsRequest;
(function (ListPolicyVersionsRequest) {
    /**
     * @internal
     */
    ListPolicyVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyVersionsRequest = exports.ListPolicyVersionsRequest || (exports.ListPolicyVersionsRequest = {}));
var PolicyVersion;
(function (PolicyVersion) {
    /**
     * @internal
     */
    PolicyVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyVersion = exports.PolicyVersion || (exports.PolicyVersion = {}));
var ListPolicyVersionsResponse;
(function (ListPolicyVersionsResponse) {
    /**
     * @internal
     */
    ListPolicyVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPolicyVersionsResponse = exports.ListPolicyVersionsResponse || (exports.ListPolicyVersionsResponse = {}));
var ListPrincipalPoliciesRequest;
(function (ListPrincipalPoliciesRequest) {
    /**
     * @internal
     */
    ListPrincipalPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalPoliciesRequest = exports.ListPrincipalPoliciesRequest || (exports.ListPrincipalPoliciesRequest = {}));
var ListPrincipalPoliciesResponse;
(function (ListPrincipalPoliciesResponse) {
    /**
     * @internal
     */
    ListPrincipalPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalPoliciesResponse = exports.ListPrincipalPoliciesResponse || (exports.ListPrincipalPoliciesResponse = {}));
var ListPrincipalThingsRequest;
(function (ListPrincipalThingsRequest) {
    /**
     * @internal
     */
    ListPrincipalThingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalThingsRequest = exports.ListPrincipalThingsRequest || (exports.ListPrincipalThingsRequest = {}));
var ListPrincipalThingsResponse;
(function (ListPrincipalThingsResponse) {
    /**
     * @internal
     */
    ListPrincipalThingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalThingsResponse = exports.ListPrincipalThingsResponse || (exports.ListPrincipalThingsResponse = {}));
var ListProvisioningTemplatesRequest;
(function (ListProvisioningTemplatesRequest) {
    /**
     * @internal
     */
    ListProvisioningTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningTemplatesRequest = exports.ListProvisioningTemplatesRequest || (exports.ListProvisioningTemplatesRequest = {}));
var ProvisioningTemplateSummary;
(function (ProvisioningTemplateSummary) {
    /**
     * @internal
     */
    ProvisioningTemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningTemplateSummary = exports.ProvisioningTemplateSummary || (exports.ProvisioningTemplateSummary = {}));
var ListProvisioningTemplatesResponse;
(function (ListProvisioningTemplatesResponse) {
    /**
     * @internal
     */
    ListProvisioningTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningTemplatesResponse = exports.ListProvisioningTemplatesResponse || (exports.ListProvisioningTemplatesResponse = {}));
var ListProvisioningTemplateVersionsRequest;
(function (ListProvisioningTemplateVersionsRequest) {
    /**
     * @internal
     */
    ListProvisioningTemplateVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningTemplateVersionsRequest = exports.ListProvisioningTemplateVersionsRequest || (exports.ListProvisioningTemplateVersionsRequest = {}));
var ProvisioningTemplateVersionSummary;
(function (ProvisioningTemplateVersionSummary) {
    /**
     * @internal
     */
    ProvisioningTemplateVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningTemplateVersionSummary = exports.ProvisioningTemplateVersionSummary || (exports.ProvisioningTemplateVersionSummary = {}));
var ListProvisioningTemplateVersionsResponse;
(function (ListProvisioningTemplateVersionsResponse) {
    /**
     * @internal
     */
    ListProvisioningTemplateVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningTemplateVersionsResponse = exports.ListProvisioningTemplateVersionsResponse || (exports.ListProvisioningTemplateVersionsResponse = {}));
var ListRoleAliasesRequest;
(function (ListRoleAliasesRequest) {
    /**
     * @internal
     */
    ListRoleAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoleAliasesRequest = exports.ListRoleAliasesRequest || (exports.ListRoleAliasesRequest = {}));
var ListRoleAliasesResponse;
(function (ListRoleAliasesResponse) {
    /**
     * @internal
     */
    ListRoleAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoleAliasesResponse = exports.ListRoleAliasesResponse || (exports.ListRoleAliasesResponse = {}));
var ListScheduledAuditsRequest;
(function (ListScheduledAuditsRequest) {
    /**
     * @internal
     */
    ListScheduledAuditsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScheduledAuditsRequest = exports.ListScheduledAuditsRequest || (exports.ListScheduledAuditsRequest = {}));
var ScheduledAuditMetadata;
(function (ScheduledAuditMetadata) {
    /**
     * @internal
     */
    ScheduledAuditMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledAuditMetadata = exports.ScheduledAuditMetadata || (exports.ScheduledAuditMetadata = {}));
var ListScheduledAuditsResponse;
(function (ListScheduledAuditsResponse) {
    /**
     * @internal
     */
    ListScheduledAuditsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScheduledAuditsResponse = exports.ListScheduledAuditsResponse || (exports.ListScheduledAuditsResponse = {}));
var ListSecurityProfilesRequest;
(function (ListSecurityProfilesRequest) {
    /**
     * @internal
     */
    ListSecurityProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesRequest = exports.ListSecurityProfilesRequest || (exports.ListSecurityProfilesRequest = {}));
var SecurityProfileIdentifier;
(function (SecurityProfileIdentifier) {
    /**
     * @internal
     */
    SecurityProfileIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityProfileIdentifier = exports.SecurityProfileIdentifier || (exports.SecurityProfileIdentifier = {}));
var ListSecurityProfilesResponse;
(function (ListSecurityProfilesResponse) {
    /**
     * @internal
     */
    ListSecurityProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesResponse = exports.ListSecurityProfilesResponse || (exports.ListSecurityProfilesResponse = {}));
var ListSecurityProfilesForTargetRequest;
(function (ListSecurityProfilesForTargetRequest) {
    /**
     * @internal
     */
    ListSecurityProfilesForTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesForTargetRequest = exports.ListSecurityProfilesForTargetRequest || (exports.ListSecurityProfilesForTargetRequest = {}));
var SecurityProfileTarget;
(function (SecurityProfileTarget) {
    /**
     * @internal
     */
    SecurityProfileTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityProfileTarget = exports.SecurityProfileTarget || (exports.SecurityProfileTarget = {}));
var SecurityProfileTargetMapping;
(function (SecurityProfileTargetMapping) {
    /**
     * @internal
     */
    SecurityProfileTargetMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityProfileTargetMapping = exports.SecurityProfileTargetMapping || (exports.SecurityProfileTargetMapping = {}));
var ListSecurityProfilesForTargetResponse;
(function (ListSecurityProfilesForTargetResponse) {
    /**
     * @internal
     */
    ListSecurityProfilesForTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesForTargetResponse = exports.ListSecurityProfilesForTargetResponse || (exports.ListSecurityProfilesForTargetResponse = {}));
var ListStreamsRequest;
(function (ListStreamsRequest) {
    /**
     * @internal
     */
    ListStreamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsRequest = exports.ListStreamsRequest || (exports.ListStreamsRequest = {}));
var StreamSummary;
(function (StreamSummary) {
    /**
     * @internal
     */
    StreamSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamSummary = exports.StreamSummary || (exports.StreamSummary = {}));
var ListStreamsResponse;
(function (ListStreamsResponse) {
    /**
     * @internal
     */
    ListStreamsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsResponse = exports.ListStreamsResponse || (exports.ListStreamsResponse = {}));
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
var ListTargetsForPolicyRequest;
(function (ListTargetsForPolicyRequest) {
    /**
     * @internal
     */
    ListTargetsForPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForPolicyRequest = exports.ListTargetsForPolicyRequest || (exports.ListTargetsForPolicyRequest = {}));
var ListTargetsForPolicyResponse;
(function (ListTargetsForPolicyResponse) {
    /**
     * @internal
     */
    ListTargetsForPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForPolicyResponse = exports.ListTargetsForPolicyResponse || (exports.ListTargetsForPolicyResponse = {}));
var ListTargetsForSecurityProfileRequest;
(function (ListTargetsForSecurityProfileRequest) {
    /**
     * @internal
     */
    ListTargetsForSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForSecurityProfileRequest = exports.ListTargetsForSecurityProfileRequest || (exports.ListTargetsForSecurityProfileRequest = {}));
var ListTargetsForSecurityProfileResponse;
(function (ListTargetsForSecurityProfileResponse) {
    /**
     * @internal
     */
    ListTargetsForSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForSecurityProfileResponse = exports.ListTargetsForSecurityProfileResponse || (exports.ListTargetsForSecurityProfileResponse = {}));
var ListThingGroupsRequest;
(function (ListThingGroupsRequest) {
    /**
     * @internal
     */
    ListThingGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingGroupsRequest = exports.ListThingGroupsRequest || (exports.ListThingGroupsRequest = {}));
var ListThingGroupsResponse;
(function (ListThingGroupsResponse) {
    /**
     * @internal
     */
    ListThingGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingGroupsResponse = exports.ListThingGroupsResponse || (exports.ListThingGroupsResponse = {}));
var ListThingGroupsForThingRequest;
(function (ListThingGroupsForThingRequest) {
    /**
     * @internal
     */
    ListThingGroupsForThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingGroupsForThingRequest = exports.ListThingGroupsForThingRequest || (exports.ListThingGroupsForThingRequest = {}));
var ListThingGroupsForThingResponse;
(function (ListThingGroupsForThingResponse) {
    /**
     * @internal
     */
    ListThingGroupsForThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingGroupsForThingResponse = exports.ListThingGroupsForThingResponse || (exports.ListThingGroupsForThingResponse = {}));
var ListThingPrincipalsRequest;
(function (ListThingPrincipalsRequest) {
    /**
     * @internal
     */
    ListThingPrincipalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingPrincipalsRequest = exports.ListThingPrincipalsRequest || (exports.ListThingPrincipalsRequest = {}));
var ListThingPrincipalsResponse;
(function (ListThingPrincipalsResponse) {
    /**
     * @internal
     */
    ListThingPrincipalsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingPrincipalsResponse = exports.ListThingPrincipalsResponse || (exports.ListThingPrincipalsResponse = {}));
var ReportType;
(function (ReportType) {
    ReportType["ERRORS"] = "ERRORS";
    ReportType["RESULTS"] = "RESULTS";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var ListThingRegistrationTaskReportsRequest;
(function (ListThingRegistrationTaskReportsRequest) {
    /**
     * @internal
     */
    ListThingRegistrationTaskReportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingRegistrationTaskReportsRequest = exports.ListThingRegistrationTaskReportsRequest || (exports.ListThingRegistrationTaskReportsRequest = {}));
var ListThingRegistrationTaskReportsResponse;
(function (ListThingRegistrationTaskReportsResponse) {
    /**
     * @internal
     */
    ListThingRegistrationTaskReportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingRegistrationTaskReportsResponse = exports.ListThingRegistrationTaskReportsResponse || (exports.ListThingRegistrationTaskReportsResponse = {}));
var ListThingRegistrationTasksRequest;
(function (ListThingRegistrationTasksRequest) {
    /**
     * @internal
     */
    ListThingRegistrationTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingRegistrationTasksRequest = exports.ListThingRegistrationTasksRequest || (exports.ListThingRegistrationTasksRequest = {}));
var ListThingRegistrationTasksResponse;
(function (ListThingRegistrationTasksResponse) {
    /**
     * @internal
     */
    ListThingRegistrationTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingRegistrationTasksResponse = exports.ListThingRegistrationTasksResponse || (exports.ListThingRegistrationTasksResponse = {}));
var ListThingsRequest;
(function (ListThingsRequest) {
    /**
     * @internal
     */
    ListThingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsRequest = exports.ListThingsRequest || (exports.ListThingsRequest = {}));
var ThingAttribute;
(function (ThingAttribute) {
    /**
     * @internal
     */
    ThingAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingAttribute = exports.ThingAttribute || (exports.ThingAttribute = {}));
var ListThingsResponse;
(function (ListThingsResponse) {
    /**
     * @internal
     */
    ListThingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsResponse = exports.ListThingsResponse || (exports.ListThingsResponse = {}));
var ListThingsInBillingGroupRequest;
(function (ListThingsInBillingGroupRequest) {
    /**
     * @internal
     */
    ListThingsInBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsInBillingGroupRequest = exports.ListThingsInBillingGroupRequest || (exports.ListThingsInBillingGroupRequest = {}));
var ListThingsInBillingGroupResponse;
(function (ListThingsInBillingGroupResponse) {
    /**
     * @internal
     */
    ListThingsInBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsInBillingGroupResponse = exports.ListThingsInBillingGroupResponse || (exports.ListThingsInBillingGroupResponse = {}));
var ListThingsInThingGroupRequest;
(function (ListThingsInThingGroupRequest) {
    /**
     * @internal
     */
    ListThingsInThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsInThingGroupRequest = exports.ListThingsInThingGroupRequest || (exports.ListThingsInThingGroupRequest = {}));
var ListThingsInThingGroupResponse;
(function (ListThingsInThingGroupResponse) {
    /**
     * @internal
     */
    ListThingsInThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingsInThingGroupResponse = exports.ListThingsInThingGroupResponse || (exports.ListThingsInThingGroupResponse = {}));
var ListThingTypesRequest;
(function (ListThingTypesRequest) {
    /**
     * @internal
     */
    ListThingTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingTypesRequest = exports.ListThingTypesRequest || (exports.ListThingTypesRequest = {}));
var ThingTypeDefinition;
(function (ThingTypeDefinition) {
    /**
     * @internal
     */
    ThingTypeDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingTypeDefinition = exports.ThingTypeDefinition || (exports.ThingTypeDefinition = {}));
var ListThingTypesResponse;
(function (ListThingTypesResponse) {
    /**
     * @internal
     */
    ListThingTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThingTypesResponse = exports.ListThingTypesResponse || (exports.ListThingTypesResponse = {}));
var ListTopicRuleDestinationsRequest;
(function (ListTopicRuleDestinationsRequest) {
    /**
     * @internal
     */
    ListTopicRuleDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicRuleDestinationsRequest = exports.ListTopicRuleDestinationsRequest || (exports.ListTopicRuleDestinationsRequest = {}));
var HttpUrlDestinationSummary;
(function (HttpUrlDestinationSummary) {
    /**
     * @internal
     */
    HttpUrlDestinationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpUrlDestinationSummary = exports.HttpUrlDestinationSummary || (exports.HttpUrlDestinationSummary = {}));
var VpcDestinationSummary;
(function (VpcDestinationSummary) {
    /**
     * @internal
     */
    VpcDestinationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcDestinationSummary = exports.VpcDestinationSummary || (exports.VpcDestinationSummary = {}));
var TopicRuleDestinationSummary;
(function (TopicRuleDestinationSummary) {
    /**
     * @internal
     */
    TopicRuleDestinationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRuleDestinationSummary = exports.TopicRuleDestinationSummary || (exports.TopicRuleDestinationSummary = {}));
var ListTopicRuleDestinationsResponse;
(function (ListTopicRuleDestinationsResponse) {
    /**
     * @internal
     */
    ListTopicRuleDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicRuleDestinationsResponse = exports.ListTopicRuleDestinationsResponse || (exports.ListTopicRuleDestinationsResponse = {}));
var ListTopicRulesRequest;
(function (ListTopicRulesRequest) {
    /**
     * @internal
     */
    ListTopicRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicRulesRequest = exports.ListTopicRulesRequest || (exports.ListTopicRulesRequest = {}));
var TopicRuleListItem;
(function (TopicRuleListItem) {
    /**
     * @internal
     */
    TopicRuleListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRuleListItem = exports.TopicRuleListItem || (exports.TopicRuleListItem = {}));
var ListTopicRulesResponse;
(function (ListTopicRulesResponse) {
    /**
     * @internal
     */
    ListTopicRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicRulesResponse = exports.ListTopicRulesResponse || (exports.ListTopicRulesResponse = {}));
var ListV2LoggingLevelsRequest;
(function (ListV2LoggingLevelsRequest) {
    /**
     * @internal
     */
    ListV2LoggingLevelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListV2LoggingLevelsRequest = exports.ListV2LoggingLevelsRequest || (exports.ListV2LoggingLevelsRequest = {}));
var LogTarget;
(function (LogTarget) {
    /**
     * @internal
     */
    LogTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogTarget = exports.LogTarget || (exports.LogTarget = {}));
var LogTargetConfiguration;
(function (LogTargetConfiguration) {
    /**
     * @internal
     */
    LogTargetConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogTargetConfiguration = exports.LogTargetConfiguration || (exports.LogTargetConfiguration = {}));
var ListV2LoggingLevelsResponse;
(function (ListV2LoggingLevelsResponse) {
    /**
     * @internal
     */
    ListV2LoggingLevelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListV2LoggingLevelsResponse = exports.ListV2LoggingLevelsResponse || (exports.ListV2LoggingLevelsResponse = {}));
var ListViolationEventsRequest;
(function (ListViolationEventsRequest) {
    /**
     * @internal
     */
    ListViolationEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListViolationEventsRequest = exports.ListViolationEventsRequest || (exports.ListViolationEventsRequest = {}));
var ViolationEventType;
(function (ViolationEventType) {
    ViolationEventType["ALARM_CLEARED"] = "alarm-cleared";
    ViolationEventType["ALARM_INVALIDATED"] = "alarm-invalidated";
    ViolationEventType["IN_ALARM"] = "in-alarm";
})(ViolationEventType = exports.ViolationEventType || (exports.ViolationEventType = {}));
var ViolationEvent;
(function (ViolationEvent) {
    /**
     * @internal
     */
    ViolationEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViolationEvent = exports.ViolationEvent || (exports.ViolationEvent = {}));
var ListViolationEventsResponse;
(function (ListViolationEventsResponse) {
    /**
     * @internal
     */
    ListViolationEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListViolationEventsResponse = exports.ListViolationEventsResponse || (exports.ListViolationEventsResponse = {}));
//# sourceMappingURL=models_1.js.map