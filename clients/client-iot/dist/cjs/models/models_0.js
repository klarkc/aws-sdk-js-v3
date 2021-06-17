"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfidenceLevel = exports.ComparisonOperator = exports.ActionType = exports.Action = exports.TimestreamAction = exports.TimestreamTimestamp = exports.TimestreamDimension = exports.StepFunctionsAction = exports.SqsAction = exports.SnsAction = exports.MessageFormat = exports.SalesforceAction = exports.S3Action = exports.CannedAccessControlList = exports.RepublishAction = exports.LambdaAction = exports.KinesisAction = exports.KafkaAction = exports.IotSiteWiseAction = exports.PutAssetPropertyValueEntry = exports.AssetPropertyValue = exports.AssetPropertyVariant = exports.AssetPropertyTimestamp = exports.IotEventsAction = exports.IotAnalyticsAction = exports.HttpAction = exports.HttpActionHeader = exports.HttpAuthorization = exports.SigV4Authorization = exports.FirehoseAction = exports.ElasticsearchAction = exports.DynamoDBv2Action = exports.PutItemInput = exports.DynamoDBAction = exports.DynamoKeyType = exports.CloudwatchMetricAction = exports.CloudwatchLogsAction = exports.CloudwatchAlarmAction = exports.UnauthorizedException = exports.TransferAlreadyCompletedException = exports.ThrottlingException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.InternalFailureException = exports.AcceptCertificateTransferRequest = exports.AbortConfig = exports.AbortCriteria = exports.JobExecutionFailureType = exports.AbortAction = void 0;
exports.AuditSuppression = exports.AuditNotificationType = exports.AuditNotificationTarget = exports.AuditMitigationActionsTaskTarget = exports.TaskStatisticsForAuditCheck = exports.AuditMitigationActionsTaskMetadata = exports.AuditMitigationActionsTaskStatus = exports.AuditMitigationActionExecutionMetadata = exports.AuditMitigationActionsExecutionStatus = exports.AuditFrequency = exports.AuditFinding = exports.AuditFindingSeverity = exports.RelatedResource = exports.NonCompliantResource = exports.ResourceType = exports.ResourceIdentifier = exports.PolicyVersionIdentifier = exports.AuditCheckDetails = exports.AuditCheckRunStatus = exports.AuditCheckConfiguration = exports.AttributePayload = exports.AttachThingPrincipalResponse = exports.AttachThingPrincipalRequest = exports.VersionConflictException = exports.AttachSecurityProfileResponse = exports.AttachSecurityProfileRequest = exports.AttachPrincipalPolicyRequest = exports.AttachPolicyRequest = exports.LimitExceededException = exports.AssociateTargetsWithJobResponse = exports.AssociateTargetsWithJobRequest = exports.Allowed = exports.Policy = exports.AlertTargetType = exports.AlertTarget = exports.AddThingToThingGroupResponse = exports.AddThingToThingGroupRequest = exports.AddThingToBillingGroupResponse = exports.AddThingToBillingGroupRequest = exports.AddThingsToThingGroupParams = exports.MetricToRetain = exports.ActiveViolation = exports.ViolationEventAdditionalInfo = exports.Behavior = exports.MetricDimension = exports.DimensionValueOperator = exports.BehaviorCriteria = exports.MetricValue = exports.StatisticalThreshold = exports.MachineLearningDetectionConfig = void 0;
exports.ServiceType = exports.CertificateValidationException = exports.CreateDimensionResponse = exports.CreateDimensionRequest = exports.DimensionType = exports.CreateCustomMetricResponse = exports.CreateCustomMetricRequest = exports.CustomMetricType = exports.CreateCertificateFromCsrResponse = exports.CreateCertificateFromCsrRequest = exports.CreateBillingGroupResponse = exports.CreateBillingGroupRequest = exports.BillingGroupProperties = exports.CreateAuthorizerResponse = exports.CreateAuthorizerRequest = exports.Tag = exports.ResourceAlreadyExistsException = exports.CreateAuditSuppressionResponse = exports.CreateAuditSuppressionRequest = exports.InternalException = exports.ConflictingResourceUpdateException = exports.ConfirmTopicRuleDestinationResponse = exports.ConfirmTopicRuleDestinationRequest = exports.ClearDefaultAuthorizerResponse = exports.ClearDefaultAuthorizerRequest = exports.InvalidStateTransitionException = exports.CancelJobExecutionRequest = exports.CancelJobResponse = exports.CancelJobRequest = exports.CancelDetectMitigationActionsTaskResponse = exports.CancelDetectMitigationActionsTaskRequest = exports.CancelCertificateTransferRequest = exports.CancelAuditTaskResponse = exports.CancelAuditTaskRequest = exports.CancelAuditMitigationActionsTaskResponse = exports.CancelAuditMitigationActionsTaskRequest = exports.AutoRegistrationStatus = exports.AuthResult = exports.Denied = exports.ImplicitDeny = exports.ExplicitDeny = exports.AuthorizerSummary = exports.AuthorizerDescription = exports.AuthorizerStatus = exports.AuthorizerConfig = exports.AuthInfo = exports.AuthDecision = exports.AuditTaskMetadata = exports.AuditTaskType = exports.AuditTaskStatus = void 0;
exports.S3Location = exports.CodeSigning = exports.StartSigningJobParameter = exports.SigningProfileParameter = exports.Destination = exports.S3Destination = exports.CustomCodeSigning = exports.CodeSigningSignature = exports.CodeSigningCertificateChain = exports.AwsJobTimeoutConfig = exports.AwsJobPresignedUrlConfig = exports.AwsJobExecutionsRolloutConfig = exports.AwsJobExponentialRolloutRate = exports.AwsJobRateIncreaseCriteria = exports.AwsJobAbortConfig = exports.AwsJobAbortCriteria = exports.AwsJobAbortCriteriaFailureType = exports.AwsJobAbortCriteriaAbortAction = exports.CreateMitigationActionResponse = exports.CreateMitigationActionRequest = exports.MitigationActionParams = exports.UpdateDeviceCertificateParams = exports.DeviceCertificateUpdateAction = exports.UpdateCACertificateParams = exports.CACertificateUpdateAction = exports.ReplaceDefaultPolicyVersionParams = exports.PolicyTemplateName = exports.PublishFindingToSnsParams = exports.EnableIoTLoggingParams = exports.LogLevel = exports.CreateKeysAndCertificateResponse = exports.KeyPair = exports.CreateKeysAndCertificateRequest = exports.CreateJobTemplateResponse = exports.CreateJobTemplateRequest = exports.ConflictException = exports.CreateJobResponse = exports.CreateJobRequest = exports.TimeoutConfig = exports.TargetSelection = exports.PresignedUrlConfig = exports.JobExecutionsRolloutConfig = exports.ExponentialRolloutRate = exports.RateIncreaseCriteria = exports.InvalidQueryException = exports.CreateDynamicThingGroupResponse = exports.CreateDynamicThingGroupRequest = exports.ThingGroupProperties = exports.CreateDomainConfigurationResponse = exports.CreateDomainConfigurationRequest = void 0;
exports.DeleteAccountAuditConfigurationRequest = exports.CreateTopicRuleDestinationResponse = exports.TopicRuleDestination = exports.VpcDestinationProperties = exports.TopicRuleDestinationStatus = exports.HttpUrlDestinationProperties = exports.CreateTopicRuleDestinationRequest = exports.TopicRuleDestinationConfiguration = exports.VpcDestinationConfiguration = exports.HttpUrlDestinationConfiguration = exports.SqlParseException = exports.CreateTopicRuleRequest = exports.TopicRulePayload = exports.CreateThingTypeResponse = exports.CreateThingTypeRequest = exports.ThingTypeProperties = exports.CreateThingGroupResponse = exports.CreateThingGroupRequest = exports.CreateThingResponse = exports.CreateThingRequest = exports.CreateStreamResponse = exports.CreateStreamRequest = exports.StreamFile = exports.CreateSecurityProfileResponse = exports.CreateSecurityProfileRequest = exports.CreateScheduledAuditResponse = exports.CreateScheduledAuditRequest = exports.DayOfWeek = exports.CreateRoleAliasResponse = exports.CreateRoleAliasRequest = exports.CreateProvisioningTemplateVersionResponse = exports.CreateProvisioningTemplateVersionRequest = exports.CreateProvisioningTemplateResponse = exports.CreateProvisioningTemplateRequest = exports.ProvisioningHook = exports.CreateProvisioningClaimResponse = exports.CreateProvisioningClaimRequest = exports.VersionsLimitExceededException = exports.CreatePolicyVersionResponse = exports.CreatePolicyVersionRequest = exports.MalformedPolicyException = exports.CreatePolicyResponse = exports.CreatePolicyRequest = exports.CreateOTAUpdateResponse = exports.OTAUpdateStatus = exports.CreateOTAUpdateRequest = exports.Protocol = exports.OTAUpdateFile = exports.FileLocation = exports._Stream = void 0;
exports.DeleteTopicRuleRequest = exports.DeleteThingTypeResponse = exports.DeleteThingTypeRequest = exports.DeleteThingGroupResponse = exports.DeleteThingGroupRequest = exports.DeleteThingResponse = exports.DeleteThingRequest = exports.DeleteStreamResponse = exports.DeleteStreamRequest = exports.DeleteSecurityProfileResponse = exports.DeleteSecurityProfileRequest = exports.DeleteScheduledAuditResponse = exports.DeleteScheduledAuditRequest = exports.DeleteRoleAliasResponse = exports.DeleteRoleAliasRequest = exports.DeleteRegistrationCodeResponse = exports.DeleteRegistrationCodeRequest = exports.DeleteProvisioningTemplateVersionResponse = exports.DeleteProvisioningTemplateVersionRequest = exports.DeleteProvisioningTemplateResponse = exports.DeleteProvisioningTemplateRequest = exports.DeletePolicyVersionRequest = exports.DeletePolicyRequest = exports.DeleteOTAUpdateResponse = exports.DeleteOTAUpdateRequest = exports.DeleteMitigationActionResponse = exports.DeleteMitigationActionRequest = exports.DeleteJobTemplateRequest = exports.DeleteJobExecutionRequest = exports.DeleteJobRequest = exports.DeleteDynamicThingGroupResponse = exports.DeleteDynamicThingGroupRequest = exports.DeleteDomainConfigurationResponse = exports.DeleteDomainConfigurationRequest = exports.DeleteDimensionResponse = exports.DeleteDimensionRequest = exports.DeleteCustomMetricResponse = exports.DeleteCustomMetricRequest = exports.DeleteCertificateRequest = exports.DeleteCACertificateResponse = exports.DeleteCACertificateRequest = exports.CertificateStateException = exports.DeleteBillingGroupResponse = exports.DeleteBillingGroupRequest = exports.DeleteConflictException = exports.DeleteAuthorizerResponse = exports.DeleteAuthorizerRequest = exports.DeleteAuditSuppressionResponse = exports.DeleteAuditSuppressionRequest = exports.DeleteAccountAuditConfigurationResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AbortAction;
(function (AbortAction) {
    AbortAction["CANCEL"] = "CANCEL";
})(AbortAction = exports.AbortAction || (exports.AbortAction = {}));
var JobExecutionFailureType;
(function (JobExecutionFailureType) {
    JobExecutionFailureType["ALL"] = "ALL";
    JobExecutionFailureType["FAILED"] = "FAILED";
    JobExecutionFailureType["REJECTED"] = "REJECTED";
    JobExecutionFailureType["TIMED_OUT"] = "TIMED_OUT";
})(JobExecutionFailureType = exports.JobExecutionFailureType || (exports.JobExecutionFailureType = {}));
var AbortCriteria;
(function (AbortCriteria) {
    /**
     * @internal
     */
    AbortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortCriteria = exports.AbortCriteria || (exports.AbortCriteria = {}));
var AbortConfig;
(function (AbortConfig) {
    /**
     * @internal
     */
    AbortConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortConfig = exports.AbortConfig || (exports.AbortConfig = {}));
var AcceptCertificateTransferRequest;
(function (AcceptCertificateTransferRequest) {
    /**
     * @internal
     */
    AcceptCertificateTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptCertificateTransferRequest = exports.AcceptCertificateTransferRequest || (exports.AcceptCertificateTransferRequest = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var TransferAlreadyCompletedException;
(function (TransferAlreadyCompletedException) {
    /**
     * @internal
     */
    TransferAlreadyCompletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferAlreadyCompletedException = exports.TransferAlreadyCompletedException || (exports.TransferAlreadyCompletedException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var CloudwatchAlarmAction;
(function (CloudwatchAlarmAction) {
    /**
     * @internal
     */
    CloudwatchAlarmAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudwatchAlarmAction = exports.CloudwatchAlarmAction || (exports.CloudwatchAlarmAction = {}));
var CloudwatchLogsAction;
(function (CloudwatchLogsAction) {
    /**
     * @internal
     */
    CloudwatchLogsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudwatchLogsAction = exports.CloudwatchLogsAction || (exports.CloudwatchLogsAction = {}));
var CloudwatchMetricAction;
(function (CloudwatchMetricAction) {
    /**
     * @internal
     */
    CloudwatchMetricAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudwatchMetricAction = exports.CloudwatchMetricAction || (exports.CloudwatchMetricAction = {}));
var DynamoKeyType;
(function (DynamoKeyType) {
    DynamoKeyType["NUMBER"] = "NUMBER";
    DynamoKeyType["STRING"] = "STRING";
})(DynamoKeyType = exports.DynamoKeyType || (exports.DynamoKeyType = {}));
var DynamoDBAction;
(function (DynamoDBAction) {
    /**
     * @internal
     */
    DynamoDBAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDBAction = exports.DynamoDBAction || (exports.DynamoDBAction = {}));
var PutItemInput;
(function (PutItemInput) {
    /**
     * @internal
     */
    PutItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutItemInput = exports.PutItemInput || (exports.PutItemInput = {}));
var DynamoDBv2Action;
(function (DynamoDBv2Action) {
    /**
     * @internal
     */
    DynamoDBv2Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DynamoDBv2Action = exports.DynamoDBv2Action || (exports.DynamoDBv2Action = {}));
var ElasticsearchAction;
(function (ElasticsearchAction) {
    /**
     * @internal
     */
    ElasticsearchAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchAction = exports.ElasticsearchAction || (exports.ElasticsearchAction = {}));
var FirehoseAction;
(function (FirehoseAction) {
    /**
     * @internal
     */
    FirehoseAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirehoseAction = exports.FirehoseAction || (exports.FirehoseAction = {}));
var SigV4Authorization;
(function (SigV4Authorization) {
    /**
     * @internal
     */
    SigV4Authorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigV4Authorization = exports.SigV4Authorization || (exports.SigV4Authorization = {}));
var HttpAuthorization;
(function (HttpAuthorization) {
    /**
     * @internal
     */
    HttpAuthorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpAuthorization = exports.HttpAuthorization || (exports.HttpAuthorization = {}));
var HttpActionHeader;
(function (HttpActionHeader) {
    /**
     * @internal
     */
    HttpActionHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpActionHeader = exports.HttpActionHeader || (exports.HttpActionHeader = {}));
var HttpAction;
(function (HttpAction) {
    /**
     * @internal
     */
    HttpAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpAction = exports.HttpAction || (exports.HttpAction = {}));
var IotAnalyticsAction;
(function (IotAnalyticsAction) {
    /**
     * @internal
     */
    IotAnalyticsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotAnalyticsAction = exports.IotAnalyticsAction || (exports.IotAnalyticsAction = {}));
var IotEventsAction;
(function (IotEventsAction) {
    /**
     * @internal
     */
    IotEventsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotEventsAction = exports.IotEventsAction || (exports.IotEventsAction = {}));
var AssetPropertyTimestamp;
(function (AssetPropertyTimestamp) {
    /**
     * @internal
     */
    AssetPropertyTimestamp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetPropertyTimestamp = exports.AssetPropertyTimestamp || (exports.AssetPropertyTimestamp = {}));
var AssetPropertyVariant;
(function (AssetPropertyVariant) {
    AssetPropertyVariant.visit = (value, visitor) => {
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.integerValue !== undefined)
            return visitor.integerValue(value.integerValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.booleanValue !== undefined)
            return visitor.booleanValue(value.booleanValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AssetPropertyVariant.filterSensitiveLog = (obj) => {
        if (obj.stringValue !== undefined)
            return { stringValue: obj.stringValue };
        if (obj.integerValue !== undefined)
            return { integerValue: obj.integerValue };
        if (obj.doubleValue !== undefined)
            return { doubleValue: obj.doubleValue };
        if (obj.booleanValue !== undefined)
            return { booleanValue: obj.booleanValue };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AssetPropertyVariant = exports.AssetPropertyVariant || (exports.AssetPropertyVariant = {}));
var AssetPropertyValue;
(function (AssetPropertyValue) {
    /**
     * @internal
     */
    AssetPropertyValue.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.value && { value: AssetPropertyVariant.filterSensitiveLog(obj.value) }),
    });
})(AssetPropertyValue = exports.AssetPropertyValue || (exports.AssetPropertyValue = {}));
var PutAssetPropertyValueEntry;
(function (PutAssetPropertyValueEntry) {
    /**
     * @internal
     */
    PutAssetPropertyValueEntry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.propertyValues && {
            propertyValues: obj.propertyValues.map((item) => AssetPropertyValue.filterSensitiveLog(item)),
        }),
    });
})(PutAssetPropertyValueEntry = exports.PutAssetPropertyValueEntry || (exports.PutAssetPropertyValueEntry = {}));
var IotSiteWiseAction;
(function (IotSiteWiseAction) {
    /**
     * @internal
     */
    IotSiteWiseAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IotSiteWiseAction = exports.IotSiteWiseAction || (exports.IotSiteWiseAction = {}));
var KafkaAction;
(function (KafkaAction) {
    /**
     * @internal
     */
    KafkaAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KafkaAction = exports.KafkaAction || (exports.KafkaAction = {}));
var KinesisAction;
(function (KinesisAction) {
    /**
     * @internal
     */
    KinesisAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisAction = exports.KinesisAction || (exports.KinesisAction = {}));
var LambdaAction;
(function (LambdaAction) {
    /**
     * @internal
     */
    LambdaAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaAction = exports.LambdaAction || (exports.LambdaAction = {}));
var RepublishAction;
(function (RepublishAction) {
    /**
     * @internal
     */
    RepublishAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepublishAction = exports.RepublishAction || (exports.RepublishAction = {}));
var CannedAccessControlList;
(function (CannedAccessControlList) {
    CannedAccessControlList["AuthenticatedRead"] = "authenticated-read";
    CannedAccessControlList["AwsExecRead"] = "aws-exec-read";
    CannedAccessControlList["BucketOwnerFullControl"] = "bucket-owner-full-control";
    CannedAccessControlList["BucketOwnerRead"] = "bucket-owner-read";
    CannedAccessControlList["LogDeliveryWrite"] = "log-delivery-write";
    CannedAccessControlList["Private"] = "private";
    CannedAccessControlList["PublicRead"] = "public-read";
    CannedAccessControlList["PublicReadWrite"] = "public-read-write";
})(CannedAccessControlList = exports.CannedAccessControlList || (exports.CannedAccessControlList = {}));
var S3Action;
(function (S3Action) {
    /**
     * @internal
     */
    S3Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Action = exports.S3Action || (exports.S3Action = {}));
var SalesforceAction;
(function (SalesforceAction) {
    /**
     * @internal
     */
    SalesforceAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SalesforceAction = exports.SalesforceAction || (exports.SalesforceAction = {}));
var MessageFormat;
(function (MessageFormat) {
    MessageFormat["JSON"] = "JSON";
    MessageFormat["RAW"] = "RAW";
})(MessageFormat = exports.MessageFormat || (exports.MessageFormat = {}));
var SnsAction;
(function (SnsAction) {
    /**
     * @internal
     */
    SnsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnsAction = exports.SnsAction || (exports.SnsAction = {}));
var SqsAction;
(function (SqsAction) {
    /**
     * @internal
     */
    SqsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqsAction = exports.SqsAction || (exports.SqsAction = {}));
var StepFunctionsAction;
(function (StepFunctionsAction) {
    /**
     * @internal
     */
    StepFunctionsAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepFunctionsAction = exports.StepFunctionsAction || (exports.StepFunctionsAction = {}));
var TimestreamDimension;
(function (TimestreamDimension) {
    /**
     * @internal
     */
    TimestreamDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestreamDimension = exports.TimestreamDimension || (exports.TimestreamDimension = {}));
var TimestreamTimestamp;
(function (TimestreamTimestamp) {
    /**
     * @internal
     */
    TimestreamTimestamp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestreamTimestamp = exports.TimestreamTimestamp || (exports.TimestreamTimestamp = {}));
var TimestreamAction;
(function (TimestreamAction) {
    /**
     * @internal
     */
    TimestreamAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestreamAction = exports.TimestreamAction || (exports.TimestreamAction = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["CONNECT"] = "CONNECT";
    ActionType["PUBLISH"] = "PUBLISH";
    ActionType["RECEIVE"] = "RECEIVE";
    ActionType["SUBSCRIBE"] = "SUBSCRIBE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GREATER_THAN"] = "greater-than";
    ComparisonOperator["GREATER_THAN_EQUALS"] = "greater-than-equals";
    ComparisonOperator["IN_CIDR_SET"] = "in-cidr-set";
    ComparisonOperator["IN_PORT_SET"] = "in-port-set";
    ComparisonOperator["IN_SET"] = "in-set";
    ComparisonOperator["LESS_THAN"] = "less-than";
    ComparisonOperator["LESS_THAN_EQUALS"] = "less-than-equals";
    ComparisonOperator["NOT_IN_CIDR_SET"] = "not-in-cidr-set";
    ComparisonOperator["NOT_IN_PORT_SET"] = "not-in-port-set";
    ComparisonOperator["NOT_IN_SET"] = "not-in-set";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var ConfidenceLevel;
(function (ConfidenceLevel) {
    ConfidenceLevel["HIGH"] = "HIGH";
    ConfidenceLevel["LOW"] = "LOW";
    ConfidenceLevel["MEDIUM"] = "MEDIUM";
})(ConfidenceLevel = exports.ConfidenceLevel || (exports.ConfidenceLevel = {}));
var MachineLearningDetectionConfig;
(function (MachineLearningDetectionConfig) {
    /**
     * @internal
     */
    MachineLearningDetectionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MachineLearningDetectionConfig = exports.MachineLearningDetectionConfig || (exports.MachineLearningDetectionConfig = {}));
var StatisticalThreshold;
(function (StatisticalThreshold) {
    /**
     * @internal
     */
    StatisticalThreshold.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatisticalThreshold = exports.StatisticalThreshold || (exports.StatisticalThreshold = {}));
var MetricValue;
(function (MetricValue) {
    /**
     * @internal
     */
    MetricValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricValue = exports.MetricValue || (exports.MetricValue = {}));
var BehaviorCriteria;
(function (BehaviorCriteria) {
    /**
     * @internal
     */
    BehaviorCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BehaviorCriteria = exports.BehaviorCriteria || (exports.BehaviorCriteria = {}));
var DimensionValueOperator;
(function (DimensionValueOperator) {
    DimensionValueOperator["IN"] = "IN";
    DimensionValueOperator["NOT_IN"] = "NOT_IN";
})(DimensionValueOperator = exports.DimensionValueOperator || (exports.DimensionValueOperator = {}));
var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDimension = exports.MetricDimension || (exports.MetricDimension = {}));
var Behavior;
(function (Behavior) {
    /**
     * @internal
     */
    Behavior.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Behavior = exports.Behavior || (exports.Behavior = {}));
var ViolationEventAdditionalInfo;
(function (ViolationEventAdditionalInfo) {
    /**
     * @internal
     */
    ViolationEventAdditionalInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViolationEventAdditionalInfo = exports.ViolationEventAdditionalInfo || (exports.ViolationEventAdditionalInfo = {}));
var ActiveViolation;
(function (ActiveViolation) {
    /**
     * @internal
     */
    ActiveViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveViolation = exports.ActiveViolation || (exports.ActiveViolation = {}));
var MetricToRetain;
(function (MetricToRetain) {
    /**
     * @internal
     */
    MetricToRetain.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricToRetain = exports.MetricToRetain || (exports.MetricToRetain = {}));
var AddThingsToThingGroupParams;
(function (AddThingsToThingGroupParams) {
    /**
     * @internal
     */
    AddThingsToThingGroupParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddThingsToThingGroupParams = exports.AddThingsToThingGroupParams || (exports.AddThingsToThingGroupParams = {}));
var AddThingToBillingGroupRequest;
(function (AddThingToBillingGroupRequest) {
    /**
     * @internal
     */
    AddThingToBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddThingToBillingGroupRequest = exports.AddThingToBillingGroupRequest || (exports.AddThingToBillingGroupRequest = {}));
var AddThingToBillingGroupResponse;
(function (AddThingToBillingGroupResponse) {
    /**
     * @internal
     */
    AddThingToBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddThingToBillingGroupResponse = exports.AddThingToBillingGroupResponse || (exports.AddThingToBillingGroupResponse = {}));
var AddThingToThingGroupRequest;
(function (AddThingToThingGroupRequest) {
    /**
     * @internal
     */
    AddThingToThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddThingToThingGroupRequest = exports.AddThingToThingGroupRequest || (exports.AddThingToThingGroupRequest = {}));
var AddThingToThingGroupResponse;
(function (AddThingToThingGroupResponse) {
    /**
     * @internal
     */
    AddThingToThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddThingToThingGroupResponse = exports.AddThingToThingGroupResponse || (exports.AddThingToThingGroupResponse = {}));
var AlertTarget;
(function (AlertTarget) {
    /**
     * @internal
     */
    AlertTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlertTarget = exports.AlertTarget || (exports.AlertTarget = {}));
var AlertTargetType;
(function (AlertTargetType) {
    AlertTargetType["SNS"] = "SNS";
})(AlertTargetType = exports.AlertTargetType || (exports.AlertTargetType = {}));
var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Policy = exports.Policy || (exports.Policy = {}));
var Allowed;
(function (Allowed) {
    /**
     * @internal
     */
    Allowed.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Allowed = exports.Allowed || (exports.Allowed = {}));
var AssociateTargetsWithJobRequest;
(function (AssociateTargetsWithJobRequest) {
    /**
     * @internal
     */
    AssociateTargetsWithJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTargetsWithJobRequest = exports.AssociateTargetsWithJobRequest || (exports.AssociateTargetsWithJobRequest = {}));
var AssociateTargetsWithJobResponse;
(function (AssociateTargetsWithJobResponse) {
    /**
     * @internal
     */
    AssociateTargetsWithJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTargetsWithJobResponse = exports.AssociateTargetsWithJobResponse || (exports.AssociateTargetsWithJobResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var AttachPolicyRequest;
(function (AttachPolicyRequest) {
    /**
     * @internal
     */
    AttachPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachPolicyRequest = exports.AttachPolicyRequest || (exports.AttachPolicyRequest = {}));
var AttachPrincipalPolicyRequest;
(function (AttachPrincipalPolicyRequest) {
    /**
     * @internal
     */
    AttachPrincipalPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachPrincipalPolicyRequest = exports.AttachPrincipalPolicyRequest || (exports.AttachPrincipalPolicyRequest = {}));
var AttachSecurityProfileRequest;
(function (AttachSecurityProfileRequest) {
    /**
     * @internal
     */
    AttachSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachSecurityProfileRequest = exports.AttachSecurityProfileRequest || (exports.AttachSecurityProfileRequest = {}));
var AttachSecurityProfileResponse;
(function (AttachSecurityProfileResponse) {
    /**
     * @internal
     */
    AttachSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachSecurityProfileResponse = exports.AttachSecurityProfileResponse || (exports.AttachSecurityProfileResponse = {}));
var VersionConflictException;
(function (VersionConflictException) {
    /**
     * @internal
     */
    VersionConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionConflictException = exports.VersionConflictException || (exports.VersionConflictException = {}));
var AttachThingPrincipalRequest;
(function (AttachThingPrincipalRequest) {
    /**
     * @internal
     */
    AttachThingPrincipalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachThingPrincipalRequest = exports.AttachThingPrincipalRequest || (exports.AttachThingPrincipalRequest = {}));
var AttachThingPrincipalResponse;
(function (AttachThingPrincipalResponse) {
    /**
     * @internal
     */
    AttachThingPrincipalResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachThingPrincipalResponse = exports.AttachThingPrincipalResponse || (exports.AttachThingPrincipalResponse = {}));
var AttributePayload;
(function (AttributePayload) {
    /**
     * @internal
     */
    AttributePayload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributePayload = exports.AttributePayload || (exports.AttributePayload = {}));
var AuditCheckConfiguration;
(function (AuditCheckConfiguration) {
    /**
     * @internal
     */
    AuditCheckConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditCheckConfiguration = exports.AuditCheckConfiguration || (exports.AuditCheckConfiguration = {}));
var AuditCheckRunStatus;
(function (AuditCheckRunStatus) {
    AuditCheckRunStatus["CANCELED"] = "CANCELED";
    AuditCheckRunStatus["COMPLETED_COMPLIANT"] = "COMPLETED_COMPLIANT";
    AuditCheckRunStatus["COMPLETED_NON_COMPLIANT"] = "COMPLETED_NON_COMPLIANT";
    AuditCheckRunStatus["FAILED"] = "FAILED";
    AuditCheckRunStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AuditCheckRunStatus["WAITING_FOR_DATA_COLLECTION"] = "WAITING_FOR_DATA_COLLECTION";
})(AuditCheckRunStatus = exports.AuditCheckRunStatus || (exports.AuditCheckRunStatus = {}));
var AuditCheckDetails;
(function (AuditCheckDetails) {
    /**
     * @internal
     */
    AuditCheckDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditCheckDetails = exports.AuditCheckDetails || (exports.AuditCheckDetails = {}));
var PolicyVersionIdentifier;
(function (PolicyVersionIdentifier) {
    /**
     * @internal
     */
    PolicyVersionIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyVersionIdentifier = exports.PolicyVersionIdentifier || (exports.PolicyVersionIdentifier = {}));
var ResourceIdentifier;
(function (ResourceIdentifier) {
    /**
     * @internal
     */
    ResourceIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceIdentifier = exports.ResourceIdentifier || (exports.ResourceIdentifier = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ACCOUNT_SETTINGS"] = "ACCOUNT_SETTINGS";
    ResourceType["CA_CERTIFICATE"] = "CA_CERTIFICATE";
    ResourceType["CLIENT_ID"] = "CLIENT_ID";
    ResourceType["COGNITO_IDENTITY_POOL"] = "COGNITO_IDENTITY_POOL";
    ResourceType["DEVICE_CERTIFICATE"] = "DEVICE_CERTIFICATE";
    ResourceType["IAM_ROLE"] = "IAM_ROLE";
    ResourceType["IOT_POLICY"] = "IOT_POLICY";
    ResourceType["ROLE_ALIAS"] = "ROLE_ALIAS";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var NonCompliantResource;
(function (NonCompliantResource) {
    /**
     * @internal
     */
    NonCompliantResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NonCompliantResource = exports.NonCompliantResource || (exports.NonCompliantResource = {}));
var RelatedResource;
(function (RelatedResource) {
    /**
     * @internal
     */
    RelatedResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelatedResource = exports.RelatedResource || (exports.RelatedResource = {}));
var AuditFindingSeverity;
(function (AuditFindingSeverity) {
    AuditFindingSeverity["CRITICAL"] = "CRITICAL";
    AuditFindingSeverity["HIGH"] = "HIGH";
    AuditFindingSeverity["LOW"] = "LOW";
    AuditFindingSeverity["MEDIUM"] = "MEDIUM";
})(AuditFindingSeverity = exports.AuditFindingSeverity || (exports.AuditFindingSeverity = {}));
var AuditFinding;
(function (AuditFinding) {
    /**
     * @internal
     */
    AuditFinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditFinding = exports.AuditFinding || (exports.AuditFinding = {}));
var AuditFrequency;
(function (AuditFrequency) {
    AuditFrequency["BIWEEKLY"] = "BIWEEKLY";
    AuditFrequency["DAILY"] = "DAILY";
    AuditFrequency["MONTHLY"] = "MONTHLY";
    AuditFrequency["WEEKLY"] = "WEEKLY";
})(AuditFrequency = exports.AuditFrequency || (exports.AuditFrequency = {}));
var AuditMitigationActionsExecutionStatus;
(function (AuditMitigationActionsExecutionStatus) {
    AuditMitigationActionsExecutionStatus["CANCELED"] = "CANCELED";
    AuditMitigationActionsExecutionStatus["COMPLETED"] = "COMPLETED";
    AuditMitigationActionsExecutionStatus["FAILED"] = "FAILED";
    AuditMitigationActionsExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AuditMitigationActionsExecutionStatus["PENDING"] = "PENDING";
    AuditMitigationActionsExecutionStatus["SKIPPED"] = "SKIPPED";
})(AuditMitigationActionsExecutionStatus = exports.AuditMitigationActionsExecutionStatus || (exports.AuditMitigationActionsExecutionStatus = {}));
var AuditMitigationActionExecutionMetadata;
(function (AuditMitigationActionExecutionMetadata) {
    /**
     * @internal
     */
    AuditMitigationActionExecutionMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditMitigationActionExecutionMetadata = exports.AuditMitigationActionExecutionMetadata || (exports.AuditMitigationActionExecutionMetadata = {}));
var AuditMitigationActionsTaskStatus;
(function (AuditMitigationActionsTaskStatus) {
    AuditMitigationActionsTaskStatus["CANCELED"] = "CANCELED";
    AuditMitigationActionsTaskStatus["COMPLETED"] = "COMPLETED";
    AuditMitigationActionsTaskStatus["FAILED"] = "FAILED";
    AuditMitigationActionsTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AuditMitigationActionsTaskStatus = exports.AuditMitigationActionsTaskStatus || (exports.AuditMitigationActionsTaskStatus = {}));
var AuditMitigationActionsTaskMetadata;
(function (AuditMitigationActionsTaskMetadata) {
    /**
     * @internal
     */
    AuditMitigationActionsTaskMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditMitigationActionsTaskMetadata = exports.AuditMitigationActionsTaskMetadata || (exports.AuditMitigationActionsTaskMetadata = {}));
var TaskStatisticsForAuditCheck;
(function (TaskStatisticsForAuditCheck) {
    /**
     * @internal
     */
    TaskStatisticsForAuditCheck.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskStatisticsForAuditCheck = exports.TaskStatisticsForAuditCheck || (exports.TaskStatisticsForAuditCheck = {}));
var AuditMitigationActionsTaskTarget;
(function (AuditMitigationActionsTaskTarget) {
    /**
     * @internal
     */
    AuditMitigationActionsTaskTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditMitigationActionsTaskTarget = exports.AuditMitigationActionsTaskTarget || (exports.AuditMitigationActionsTaskTarget = {}));
var AuditNotificationTarget;
(function (AuditNotificationTarget) {
    /**
     * @internal
     */
    AuditNotificationTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditNotificationTarget = exports.AuditNotificationTarget || (exports.AuditNotificationTarget = {}));
var AuditNotificationType;
(function (AuditNotificationType) {
    AuditNotificationType["SNS"] = "SNS";
})(AuditNotificationType = exports.AuditNotificationType || (exports.AuditNotificationType = {}));
var AuditSuppression;
(function (AuditSuppression) {
    /**
     * @internal
     */
    AuditSuppression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditSuppression = exports.AuditSuppression || (exports.AuditSuppression = {}));
var AuditTaskStatus;
(function (AuditTaskStatus) {
    AuditTaskStatus["CANCELED"] = "CANCELED";
    AuditTaskStatus["COMPLETED"] = "COMPLETED";
    AuditTaskStatus["FAILED"] = "FAILED";
    AuditTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AuditTaskStatus = exports.AuditTaskStatus || (exports.AuditTaskStatus = {}));
var AuditTaskType;
(function (AuditTaskType) {
    AuditTaskType["ON_DEMAND_AUDIT_TASK"] = "ON_DEMAND_AUDIT_TASK";
    AuditTaskType["SCHEDULED_AUDIT_TASK"] = "SCHEDULED_AUDIT_TASK";
})(AuditTaskType = exports.AuditTaskType || (exports.AuditTaskType = {}));
var AuditTaskMetadata;
(function (AuditTaskMetadata) {
    /**
     * @internal
     */
    AuditTaskMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuditTaskMetadata = exports.AuditTaskMetadata || (exports.AuditTaskMetadata = {}));
var AuthDecision;
(function (AuthDecision) {
    AuthDecision["ALLOWED"] = "ALLOWED";
    AuthDecision["EXPLICIT_DENY"] = "EXPLICIT_DENY";
    AuthDecision["IMPLICIT_DENY"] = "IMPLICIT_DENY";
})(AuthDecision = exports.AuthDecision || (exports.AuthDecision = {}));
var AuthInfo;
(function (AuthInfo) {
    /**
     * @internal
     */
    AuthInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthInfo = exports.AuthInfo || (exports.AuthInfo = {}));
var AuthorizerConfig;
(function (AuthorizerConfig) {
    /**
     * @internal
     */
    AuthorizerConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizerConfig = exports.AuthorizerConfig || (exports.AuthorizerConfig = {}));
var AuthorizerStatus;
(function (AuthorizerStatus) {
    AuthorizerStatus["ACTIVE"] = "ACTIVE";
    AuthorizerStatus["INACTIVE"] = "INACTIVE";
})(AuthorizerStatus = exports.AuthorizerStatus || (exports.AuthorizerStatus = {}));
var AuthorizerDescription;
(function (AuthorizerDescription) {
    /**
     * @internal
     */
    AuthorizerDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizerDescription = exports.AuthorizerDescription || (exports.AuthorizerDescription = {}));
var AuthorizerSummary;
(function (AuthorizerSummary) {
    /**
     * @internal
     */
    AuthorizerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizerSummary = exports.AuthorizerSummary || (exports.AuthorizerSummary = {}));
var ExplicitDeny;
(function (ExplicitDeny) {
    /**
     * @internal
     */
    ExplicitDeny.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExplicitDeny = exports.ExplicitDeny || (exports.ExplicitDeny = {}));
var ImplicitDeny;
(function (ImplicitDeny) {
    /**
     * @internal
     */
    ImplicitDeny.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImplicitDeny = exports.ImplicitDeny || (exports.ImplicitDeny = {}));
var Denied;
(function (Denied) {
    /**
     * @internal
     */
    Denied.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Denied = exports.Denied || (exports.Denied = {}));
var AuthResult;
(function (AuthResult) {
    /**
     * @internal
     */
    AuthResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthResult = exports.AuthResult || (exports.AuthResult = {}));
var AutoRegistrationStatus;
(function (AutoRegistrationStatus) {
    AutoRegistrationStatus["DISABLE"] = "DISABLE";
    AutoRegistrationStatus["ENABLE"] = "ENABLE";
})(AutoRegistrationStatus = exports.AutoRegistrationStatus || (exports.AutoRegistrationStatus = {}));
var CancelAuditMitigationActionsTaskRequest;
(function (CancelAuditMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    CancelAuditMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelAuditMitigationActionsTaskRequest = exports.CancelAuditMitigationActionsTaskRequest || (exports.CancelAuditMitigationActionsTaskRequest = {}));
var CancelAuditMitigationActionsTaskResponse;
(function (CancelAuditMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    CancelAuditMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelAuditMitigationActionsTaskResponse = exports.CancelAuditMitigationActionsTaskResponse || (exports.CancelAuditMitigationActionsTaskResponse = {}));
var CancelAuditTaskRequest;
(function (CancelAuditTaskRequest) {
    /**
     * @internal
     */
    CancelAuditTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelAuditTaskRequest = exports.CancelAuditTaskRequest || (exports.CancelAuditTaskRequest = {}));
var CancelAuditTaskResponse;
(function (CancelAuditTaskResponse) {
    /**
     * @internal
     */
    CancelAuditTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelAuditTaskResponse = exports.CancelAuditTaskResponse || (exports.CancelAuditTaskResponse = {}));
var CancelCertificateTransferRequest;
(function (CancelCertificateTransferRequest) {
    /**
     * @internal
     */
    CancelCertificateTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelCertificateTransferRequest = exports.CancelCertificateTransferRequest || (exports.CancelCertificateTransferRequest = {}));
var CancelDetectMitigationActionsTaskRequest;
(function (CancelDetectMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    CancelDetectMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDetectMitigationActionsTaskRequest = exports.CancelDetectMitigationActionsTaskRequest || (exports.CancelDetectMitigationActionsTaskRequest = {}));
var CancelDetectMitigationActionsTaskResponse;
(function (CancelDetectMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    CancelDetectMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDetectMitigationActionsTaskResponse = exports.CancelDetectMitigationActionsTaskResponse || (exports.CancelDetectMitigationActionsTaskResponse = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var CancelJobResponse;
(function (CancelJobResponse) {
    /**
     * @internal
     */
    CancelJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobResponse = exports.CancelJobResponse || (exports.CancelJobResponse = {}));
var CancelJobExecutionRequest;
(function (CancelJobExecutionRequest) {
    /**
     * @internal
     */
    CancelJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobExecutionRequest = exports.CancelJobExecutionRequest || (exports.CancelJobExecutionRequest = {}));
var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
    /**
     * @internal
     */
    InvalidStateTransitionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateTransitionException = exports.InvalidStateTransitionException || (exports.InvalidStateTransitionException = {}));
var ClearDefaultAuthorizerRequest;
(function (ClearDefaultAuthorizerRequest) {
    /**
     * @internal
     */
    ClearDefaultAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClearDefaultAuthorizerRequest = exports.ClearDefaultAuthorizerRequest || (exports.ClearDefaultAuthorizerRequest = {}));
var ClearDefaultAuthorizerResponse;
(function (ClearDefaultAuthorizerResponse) {
    /**
     * @internal
     */
    ClearDefaultAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClearDefaultAuthorizerResponse = exports.ClearDefaultAuthorizerResponse || (exports.ClearDefaultAuthorizerResponse = {}));
var ConfirmTopicRuleDestinationRequest;
(function (ConfirmTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    ConfirmTopicRuleDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmTopicRuleDestinationRequest = exports.ConfirmTopicRuleDestinationRequest || (exports.ConfirmTopicRuleDestinationRequest = {}));
var ConfirmTopicRuleDestinationResponse;
(function (ConfirmTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    ConfirmTopicRuleDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmTopicRuleDestinationResponse = exports.ConfirmTopicRuleDestinationResponse || (exports.ConfirmTopicRuleDestinationResponse = {}));
var ConflictingResourceUpdateException;
(function (ConflictingResourceUpdateException) {
    /**
     * @internal
     */
    ConflictingResourceUpdateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictingResourceUpdateException = exports.ConflictingResourceUpdateException || (exports.ConflictingResourceUpdateException = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var CreateAuditSuppressionRequest;
(function (CreateAuditSuppressionRequest) {
    /**
     * @internal
     */
    CreateAuditSuppressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAuditSuppressionRequest = exports.CreateAuditSuppressionRequest || (exports.CreateAuditSuppressionRequest = {}));
var CreateAuditSuppressionResponse;
(function (CreateAuditSuppressionResponse) {
    /**
     * @internal
     */
    CreateAuditSuppressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAuditSuppressionResponse = exports.CreateAuditSuppressionResponse || (exports.CreateAuditSuppressionResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAuthorizerRequest;
(function (CreateAuthorizerRequest) {
    /**
     * @internal
     */
    CreateAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAuthorizerRequest = exports.CreateAuthorizerRequest || (exports.CreateAuthorizerRequest = {}));
var CreateAuthorizerResponse;
(function (CreateAuthorizerResponse) {
    /**
     * @internal
     */
    CreateAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAuthorizerResponse = exports.CreateAuthorizerResponse || (exports.CreateAuthorizerResponse = {}));
var BillingGroupProperties;
(function (BillingGroupProperties) {
    /**
     * @internal
     */
    BillingGroupProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillingGroupProperties = exports.BillingGroupProperties || (exports.BillingGroupProperties = {}));
var CreateBillingGroupRequest;
(function (CreateBillingGroupRequest) {
    /**
     * @internal
     */
    CreateBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBillingGroupRequest = exports.CreateBillingGroupRequest || (exports.CreateBillingGroupRequest = {}));
var CreateBillingGroupResponse;
(function (CreateBillingGroupResponse) {
    /**
     * @internal
     */
    CreateBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBillingGroupResponse = exports.CreateBillingGroupResponse || (exports.CreateBillingGroupResponse = {}));
var CreateCertificateFromCsrRequest;
(function (CreateCertificateFromCsrRequest) {
    /**
     * @internal
     */
    CreateCertificateFromCsrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCertificateFromCsrRequest = exports.CreateCertificateFromCsrRequest || (exports.CreateCertificateFromCsrRequest = {}));
var CreateCertificateFromCsrResponse;
(function (CreateCertificateFromCsrResponse) {
    /**
     * @internal
     */
    CreateCertificateFromCsrResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCertificateFromCsrResponse = exports.CreateCertificateFromCsrResponse || (exports.CreateCertificateFromCsrResponse = {}));
var CustomMetricType;
(function (CustomMetricType) {
    CustomMetricType["IP_ADDRESS_LIST"] = "ip-address-list";
    CustomMetricType["NUMBER"] = "number";
    CustomMetricType["NUMBER_LIST"] = "number-list";
    CustomMetricType["STRING_LIST"] = "string-list";
})(CustomMetricType = exports.CustomMetricType || (exports.CustomMetricType = {}));
var CreateCustomMetricRequest;
(function (CreateCustomMetricRequest) {
    /**
     * @internal
     */
    CreateCustomMetricRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomMetricRequest = exports.CreateCustomMetricRequest || (exports.CreateCustomMetricRequest = {}));
var CreateCustomMetricResponse;
(function (CreateCustomMetricResponse) {
    /**
     * @internal
     */
    CreateCustomMetricResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomMetricResponse = exports.CreateCustomMetricResponse || (exports.CreateCustomMetricResponse = {}));
var DimensionType;
(function (DimensionType) {
    DimensionType["TOPIC_FILTER"] = "TOPIC_FILTER";
})(DimensionType = exports.DimensionType || (exports.DimensionType = {}));
var CreateDimensionRequest;
(function (CreateDimensionRequest) {
    /**
     * @internal
     */
    CreateDimensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDimensionRequest = exports.CreateDimensionRequest || (exports.CreateDimensionRequest = {}));
var CreateDimensionResponse;
(function (CreateDimensionResponse) {
    /**
     * @internal
     */
    CreateDimensionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDimensionResponse = exports.CreateDimensionResponse || (exports.CreateDimensionResponse = {}));
var CertificateValidationException;
(function (CertificateValidationException) {
    /**
     * @internal
     */
    CertificateValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateValidationException = exports.CertificateValidationException || (exports.CertificateValidationException = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["CREDENTIAL_PROVIDER"] = "CREDENTIAL_PROVIDER";
    ServiceType["DATA"] = "DATA";
    ServiceType["JOBS"] = "JOBS";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var CreateDomainConfigurationRequest;
(function (CreateDomainConfigurationRequest) {
    /**
     * @internal
     */
    CreateDomainConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainConfigurationRequest = exports.CreateDomainConfigurationRequest || (exports.CreateDomainConfigurationRequest = {}));
var CreateDomainConfigurationResponse;
(function (CreateDomainConfigurationResponse) {
    /**
     * @internal
     */
    CreateDomainConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainConfigurationResponse = exports.CreateDomainConfigurationResponse || (exports.CreateDomainConfigurationResponse = {}));
var ThingGroupProperties;
(function (ThingGroupProperties) {
    /**
     * @internal
     */
    ThingGroupProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingGroupProperties = exports.ThingGroupProperties || (exports.ThingGroupProperties = {}));
var CreateDynamicThingGroupRequest;
(function (CreateDynamicThingGroupRequest) {
    /**
     * @internal
     */
    CreateDynamicThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDynamicThingGroupRequest = exports.CreateDynamicThingGroupRequest || (exports.CreateDynamicThingGroupRequest = {}));
var CreateDynamicThingGroupResponse;
(function (CreateDynamicThingGroupResponse) {
    /**
     * @internal
     */
    CreateDynamicThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDynamicThingGroupResponse = exports.CreateDynamicThingGroupResponse || (exports.CreateDynamicThingGroupResponse = {}));
var InvalidQueryException;
(function (InvalidQueryException) {
    /**
     * @internal
     */
    InvalidQueryException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidQueryException = exports.InvalidQueryException || (exports.InvalidQueryException = {}));
var RateIncreaseCriteria;
(function (RateIncreaseCriteria) {
    /**
     * @internal
     */
    RateIncreaseCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateIncreaseCriteria = exports.RateIncreaseCriteria || (exports.RateIncreaseCriteria = {}));
var ExponentialRolloutRate;
(function (ExponentialRolloutRate) {
    /**
     * @internal
     */
    ExponentialRolloutRate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExponentialRolloutRate = exports.ExponentialRolloutRate || (exports.ExponentialRolloutRate = {}));
var JobExecutionsRolloutConfig;
(function (JobExecutionsRolloutConfig) {
    /**
     * @internal
     */
    JobExecutionsRolloutConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionsRolloutConfig = exports.JobExecutionsRolloutConfig || (exports.JobExecutionsRolloutConfig = {}));
var PresignedUrlConfig;
(function (PresignedUrlConfig) {
    /**
     * @internal
     */
    PresignedUrlConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PresignedUrlConfig = exports.PresignedUrlConfig || (exports.PresignedUrlConfig = {}));
var TargetSelection;
(function (TargetSelection) {
    TargetSelection["CONTINUOUS"] = "CONTINUOUS";
    TargetSelection["SNAPSHOT"] = "SNAPSHOT";
})(TargetSelection = exports.TargetSelection || (exports.TargetSelection = {}));
var TimeoutConfig;
(function (TimeoutConfig) {
    /**
     * @internal
     */
    TimeoutConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeoutConfig = exports.TimeoutConfig || (exports.TimeoutConfig = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateJobTemplateRequest;
(function (CreateJobTemplateRequest) {
    /**
     * @internal
     */
    CreateJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobTemplateRequest = exports.CreateJobTemplateRequest || (exports.CreateJobTemplateRequest = {}));
var CreateJobTemplateResponse;
(function (CreateJobTemplateResponse) {
    /**
     * @internal
     */
    CreateJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobTemplateResponse = exports.CreateJobTemplateResponse || (exports.CreateJobTemplateResponse = {}));
var CreateKeysAndCertificateRequest;
(function (CreateKeysAndCertificateRequest) {
    /**
     * @internal
     */
    CreateKeysAndCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeysAndCertificateRequest = exports.CreateKeysAndCertificateRequest || (exports.CreateKeysAndCertificateRequest = {}));
var KeyPair;
(function (KeyPair) {
    /**
     * @internal
     */
    KeyPair.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PrivateKey && { PrivateKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(KeyPair = exports.KeyPair || (exports.KeyPair = {}));
var CreateKeysAndCertificateResponse;
(function (CreateKeysAndCertificateResponse) {
    /**
     * @internal
     */
    CreateKeysAndCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
    });
})(CreateKeysAndCertificateResponse = exports.CreateKeysAndCertificateResponse || (exports.CreateKeysAndCertificateResponse = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var EnableIoTLoggingParams;
(function (EnableIoTLoggingParams) {
    /**
     * @internal
     */
    EnableIoTLoggingParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableIoTLoggingParams = exports.EnableIoTLoggingParams || (exports.EnableIoTLoggingParams = {}));
var PublishFindingToSnsParams;
(function (PublishFindingToSnsParams) {
    /**
     * @internal
     */
    PublishFindingToSnsParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishFindingToSnsParams = exports.PublishFindingToSnsParams || (exports.PublishFindingToSnsParams = {}));
var PolicyTemplateName;
(function (PolicyTemplateName) {
    PolicyTemplateName["BLANK_POLICY"] = "BLANK_POLICY";
})(PolicyTemplateName = exports.PolicyTemplateName || (exports.PolicyTemplateName = {}));
var ReplaceDefaultPolicyVersionParams;
(function (ReplaceDefaultPolicyVersionParams) {
    /**
     * @internal
     */
    ReplaceDefaultPolicyVersionParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceDefaultPolicyVersionParams = exports.ReplaceDefaultPolicyVersionParams || (exports.ReplaceDefaultPolicyVersionParams = {}));
var CACertificateUpdateAction;
(function (CACertificateUpdateAction) {
    CACertificateUpdateAction["DEACTIVATE"] = "DEACTIVATE";
})(CACertificateUpdateAction = exports.CACertificateUpdateAction || (exports.CACertificateUpdateAction = {}));
var UpdateCACertificateParams;
(function (UpdateCACertificateParams) {
    /**
     * @internal
     */
    UpdateCACertificateParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCACertificateParams = exports.UpdateCACertificateParams || (exports.UpdateCACertificateParams = {}));
var DeviceCertificateUpdateAction;
(function (DeviceCertificateUpdateAction) {
    DeviceCertificateUpdateAction["DEACTIVATE"] = "DEACTIVATE";
})(DeviceCertificateUpdateAction = exports.DeviceCertificateUpdateAction || (exports.DeviceCertificateUpdateAction = {}));
var UpdateDeviceCertificateParams;
(function (UpdateDeviceCertificateParams) {
    /**
     * @internal
     */
    UpdateDeviceCertificateParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceCertificateParams = exports.UpdateDeviceCertificateParams || (exports.UpdateDeviceCertificateParams = {}));
var MitigationActionParams;
(function (MitigationActionParams) {
    /**
     * @internal
     */
    MitigationActionParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MitigationActionParams = exports.MitigationActionParams || (exports.MitigationActionParams = {}));
var CreateMitigationActionRequest;
(function (CreateMitigationActionRequest) {
    /**
     * @internal
     */
    CreateMitigationActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMitigationActionRequest = exports.CreateMitigationActionRequest || (exports.CreateMitigationActionRequest = {}));
var CreateMitigationActionResponse;
(function (CreateMitigationActionResponse) {
    /**
     * @internal
     */
    CreateMitigationActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMitigationActionResponse = exports.CreateMitigationActionResponse || (exports.CreateMitigationActionResponse = {}));
var AwsJobAbortCriteriaAbortAction;
(function (AwsJobAbortCriteriaAbortAction) {
    AwsJobAbortCriteriaAbortAction["CANCEL"] = "CANCEL";
})(AwsJobAbortCriteriaAbortAction = exports.AwsJobAbortCriteriaAbortAction || (exports.AwsJobAbortCriteriaAbortAction = {}));
var AwsJobAbortCriteriaFailureType;
(function (AwsJobAbortCriteriaFailureType) {
    AwsJobAbortCriteriaFailureType["ALL"] = "ALL";
    AwsJobAbortCriteriaFailureType["FAILED"] = "FAILED";
    AwsJobAbortCriteriaFailureType["REJECTED"] = "REJECTED";
    AwsJobAbortCriteriaFailureType["TIMED_OUT"] = "TIMED_OUT";
})(AwsJobAbortCriteriaFailureType = exports.AwsJobAbortCriteriaFailureType || (exports.AwsJobAbortCriteriaFailureType = {}));
var AwsJobAbortCriteria;
(function (AwsJobAbortCriteria) {
    /**
     * @internal
     */
    AwsJobAbortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobAbortCriteria = exports.AwsJobAbortCriteria || (exports.AwsJobAbortCriteria = {}));
var AwsJobAbortConfig;
(function (AwsJobAbortConfig) {
    /**
     * @internal
     */
    AwsJobAbortConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobAbortConfig = exports.AwsJobAbortConfig || (exports.AwsJobAbortConfig = {}));
var AwsJobRateIncreaseCriteria;
(function (AwsJobRateIncreaseCriteria) {
    /**
     * @internal
     */
    AwsJobRateIncreaseCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobRateIncreaseCriteria = exports.AwsJobRateIncreaseCriteria || (exports.AwsJobRateIncreaseCriteria = {}));
var AwsJobExponentialRolloutRate;
(function (AwsJobExponentialRolloutRate) {
    /**
     * @internal
     */
    AwsJobExponentialRolloutRate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobExponentialRolloutRate = exports.AwsJobExponentialRolloutRate || (exports.AwsJobExponentialRolloutRate = {}));
var AwsJobExecutionsRolloutConfig;
(function (AwsJobExecutionsRolloutConfig) {
    /**
     * @internal
     */
    AwsJobExecutionsRolloutConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobExecutionsRolloutConfig = exports.AwsJobExecutionsRolloutConfig || (exports.AwsJobExecutionsRolloutConfig = {}));
var AwsJobPresignedUrlConfig;
(function (AwsJobPresignedUrlConfig) {
    /**
     * @internal
     */
    AwsJobPresignedUrlConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobPresignedUrlConfig = exports.AwsJobPresignedUrlConfig || (exports.AwsJobPresignedUrlConfig = {}));
var AwsJobTimeoutConfig;
(function (AwsJobTimeoutConfig) {
    /**
     * @internal
     */
    AwsJobTimeoutConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsJobTimeoutConfig = exports.AwsJobTimeoutConfig || (exports.AwsJobTimeoutConfig = {}));
var CodeSigningCertificateChain;
(function (CodeSigningCertificateChain) {
    /**
     * @internal
     */
    CodeSigningCertificateChain.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigningCertificateChain = exports.CodeSigningCertificateChain || (exports.CodeSigningCertificateChain = {}));
var CodeSigningSignature;
(function (CodeSigningSignature) {
    /**
     * @internal
     */
    CodeSigningSignature.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigningSignature = exports.CodeSigningSignature || (exports.CodeSigningSignature = {}));
var CustomCodeSigning;
(function (CustomCodeSigning) {
    /**
     * @internal
     */
    CustomCodeSigning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomCodeSigning = exports.CustomCodeSigning || (exports.CustomCodeSigning = {}));
var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Destination = exports.S3Destination || (exports.S3Destination = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var SigningProfileParameter;
(function (SigningProfileParameter) {
    /**
     * @internal
     */
    SigningProfileParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningProfileParameter = exports.SigningProfileParameter || (exports.SigningProfileParameter = {}));
var StartSigningJobParameter;
(function (StartSigningJobParameter) {
    /**
     * @internal
     */
    StartSigningJobParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSigningJobParameter = exports.StartSigningJobParameter || (exports.StartSigningJobParameter = {}));
var CodeSigning;
(function (CodeSigning) {
    /**
     * @internal
     */
    CodeSigning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigning = exports.CodeSigning || (exports.CodeSigning = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var _Stream;
(function (_Stream) {
    /**
     * @internal
     */
    _Stream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Stream = exports._Stream || (exports._Stream = {}));
var FileLocation;
(function (FileLocation) {
    /**
     * @internal
     */
    FileLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileLocation = exports.FileLocation || (exports.FileLocation = {}));
var OTAUpdateFile;
(function (OTAUpdateFile) {
    /**
     * @internal
     */
    OTAUpdateFile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OTAUpdateFile = exports.OTAUpdateFile || (exports.OTAUpdateFile = {}));
var Protocol;
(function (Protocol) {
    Protocol["HTTP"] = "HTTP";
    Protocol["MQTT"] = "MQTT";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var CreateOTAUpdateRequest;
(function (CreateOTAUpdateRequest) {
    /**
     * @internal
     */
    CreateOTAUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOTAUpdateRequest = exports.CreateOTAUpdateRequest || (exports.CreateOTAUpdateRequest = {}));
var OTAUpdateStatus;
(function (OTAUpdateStatus) {
    OTAUpdateStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    OTAUpdateStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OTAUpdateStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OTAUpdateStatus["CREATE_PENDING"] = "CREATE_PENDING";
})(OTAUpdateStatus = exports.OTAUpdateStatus || (exports.OTAUpdateStatus = {}));
var CreateOTAUpdateResponse;
(function (CreateOTAUpdateResponse) {
    /**
     * @internal
     */
    CreateOTAUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOTAUpdateResponse = exports.CreateOTAUpdateResponse || (exports.CreateOTAUpdateResponse = {}));
var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyRequest = exports.CreatePolicyRequest || (exports.CreatePolicyRequest = {}));
var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyResponse = exports.CreatePolicyResponse || (exports.CreatePolicyResponse = {}));
var MalformedPolicyException;
(function (MalformedPolicyException) {
    /**
     * @internal
     */
    MalformedPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedPolicyException = exports.MalformedPolicyException || (exports.MalformedPolicyException = {}));
var CreatePolicyVersionRequest;
(function (CreatePolicyVersionRequest) {
    /**
     * @internal
     */
    CreatePolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyVersionRequest = exports.CreatePolicyVersionRequest || (exports.CreatePolicyVersionRequest = {}));
var CreatePolicyVersionResponse;
(function (CreatePolicyVersionResponse) {
    /**
     * @internal
     */
    CreatePolicyVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyVersionResponse = exports.CreatePolicyVersionResponse || (exports.CreatePolicyVersionResponse = {}));
var VersionsLimitExceededException;
(function (VersionsLimitExceededException) {
    /**
     * @internal
     */
    VersionsLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionsLimitExceededException = exports.VersionsLimitExceededException || (exports.VersionsLimitExceededException = {}));
var CreateProvisioningClaimRequest;
(function (CreateProvisioningClaimRequest) {
    /**
     * @internal
     */
    CreateProvisioningClaimRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningClaimRequest = exports.CreateProvisioningClaimRequest || (exports.CreateProvisioningClaimRequest = {}));
var CreateProvisioningClaimResponse;
(function (CreateProvisioningClaimResponse) {
    /**
     * @internal
     */
    CreateProvisioningClaimResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
    });
})(CreateProvisioningClaimResponse = exports.CreateProvisioningClaimResponse || (exports.CreateProvisioningClaimResponse = {}));
var ProvisioningHook;
(function (ProvisioningHook) {
    /**
     * @internal
     */
    ProvisioningHook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningHook = exports.ProvisioningHook || (exports.ProvisioningHook = {}));
var CreateProvisioningTemplateRequest;
(function (CreateProvisioningTemplateRequest) {
    /**
     * @internal
     */
    CreateProvisioningTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningTemplateRequest = exports.CreateProvisioningTemplateRequest || (exports.CreateProvisioningTemplateRequest = {}));
var CreateProvisioningTemplateResponse;
(function (CreateProvisioningTemplateResponse) {
    /**
     * @internal
     */
    CreateProvisioningTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningTemplateResponse = exports.CreateProvisioningTemplateResponse || (exports.CreateProvisioningTemplateResponse = {}));
var CreateProvisioningTemplateVersionRequest;
(function (CreateProvisioningTemplateVersionRequest) {
    /**
     * @internal
     */
    CreateProvisioningTemplateVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningTemplateVersionRequest = exports.CreateProvisioningTemplateVersionRequest || (exports.CreateProvisioningTemplateVersionRequest = {}));
var CreateProvisioningTemplateVersionResponse;
(function (CreateProvisioningTemplateVersionResponse) {
    /**
     * @internal
     */
    CreateProvisioningTemplateVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningTemplateVersionResponse = exports.CreateProvisioningTemplateVersionResponse || (exports.CreateProvisioningTemplateVersionResponse = {}));
var CreateRoleAliasRequest;
(function (CreateRoleAliasRequest) {
    /**
     * @internal
     */
    CreateRoleAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoleAliasRequest = exports.CreateRoleAliasRequest || (exports.CreateRoleAliasRequest = {}));
var CreateRoleAliasResponse;
(function (CreateRoleAliasResponse) {
    /**
     * @internal
     */
    CreateRoleAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoleAliasResponse = exports.CreateRoleAliasResponse || (exports.CreateRoleAliasResponse = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["FRI"] = "FRI";
    DayOfWeek["MON"] = "MON";
    DayOfWeek["SAT"] = "SAT";
    DayOfWeek["SUN"] = "SUN";
    DayOfWeek["THU"] = "THU";
    DayOfWeek["TUE"] = "TUE";
    DayOfWeek["WED"] = "WED";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var CreateScheduledAuditRequest;
(function (CreateScheduledAuditRequest) {
    /**
     * @internal
     */
    CreateScheduledAuditRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScheduledAuditRequest = exports.CreateScheduledAuditRequest || (exports.CreateScheduledAuditRequest = {}));
var CreateScheduledAuditResponse;
(function (CreateScheduledAuditResponse) {
    /**
     * @internal
     */
    CreateScheduledAuditResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScheduledAuditResponse = exports.CreateScheduledAuditResponse || (exports.CreateScheduledAuditResponse = {}));
var CreateSecurityProfileRequest;
(function (CreateSecurityProfileRequest) {
    /**
     * @internal
     */
    CreateSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityProfileRequest = exports.CreateSecurityProfileRequest || (exports.CreateSecurityProfileRequest = {}));
var CreateSecurityProfileResponse;
(function (CreateSecurityProfileResponse) {
    /**
     * @internal
     */
    CreateSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityProfileResponse = exports.CreateSecurityProfileResponse || (exports.CreateSecurityProfileResponse = {}));
var StreamFile;
(function (StreamFile) {
    /**
     * @internal
     */
    StreamFile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamFile = exports.StreamFile || (exports.StreamFile = {}));
var CreateStreamRequest;
(function (CreateStreamRequest) {
    /**
     * @internal
     */
    CreateStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamRequest = exports.CreateStreamRequest || (exports.CreateStreamRequest = {}));
var CreateStreamResponse;
(function (CreateStreamResponse) {
    /**
     * @internal
     */
    CreateStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamResponse = exports.CreateStreamResponse || (exports.CreateStreamResponse = {}));
var CreateThingRequest;
(function (CreateThingRequest) {
    /**
     * @internal
     */
    CreateThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingRequest = exports.CreateThingRequest || (exports.CreateThingRequest = {}));
var CreateThingResponse;
(function (CreateThingResponse) {
    /**
     * @internal
     */
    CreateThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingResponse = exports.CreateThingResponse || (exports.CreateThingResponse = {}));
var CreateThingGroupRequest;
(function (CreateThingGroupRequest) {
    /**
     * @internal
     */
    CreateThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingGroupRequest = exports.CreateThingGroupRequest || (exports.CreateThingGroupRequest = {}));
var CreateThingGroupResponse;
(function (CreateThingGroupResponse) {
    /**
     * @internal
     */
    CreateThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingGroupResponse = exports.CreateThingGroupResponse || (exports.CreateThingGroupResponse = {}));
var ThingTypeProperties;
(function (ThingTypeProperties) {
    /**
     * @internal
     */
    ThingTypeProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingTypeProperties = exports.ThingTypeProperties || (exports.ThingTypeProperties = {}));
var CreateThingTypeRequest;
(function (CreateThingTypeRequest) {
    /**
     * @internal
     */
    CreateThingTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingTypeRequest = exports.CreateThingTypeRequest || (exports.CreateThingTypeRequest = {}));
var CreateThingTypeResponse;
(function (CreateThingTypeResponse) {
    /**
     * @internal
     */
    CreateThingTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThingTypeResponse = exports.CreateThingTypeResponse || (exports.CreateThingTypeResponse = {}));
var TopicRulePayload;
(function (TopicRulePayload) {
    /**
     * @internal
     */
    TopicRulePayload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRulePayload = exports.TopicRulePayload || (exports.TopicRulePayload = {}));
var CreateTopicRuleRequest;
(function (CreateTopicRuleRequest) {
    /**
     * @internal
     */
    CreateTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTopicRuleRequest = exports.CreateTopicRuleRequest || (exports.CreateTopicRuleRequest = {}));
var SqlParseException;
(function (SqlParseException) {
    /**
     * @internal
     */
    SqlParseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlParseException = exports.SqlParseException || (exports.SqlParseException = {}));
var HttpUrlDestinationConfiguration;
(function (HttpUrlDestinationConfiguration) {
    /**
     * @internal
     */
    HttpUrlDestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpUrlDestinationConfiguration = exports.HttpUrlDestinationConfiguration || (exports.HttpUrlDestinationConfiguration = {}));
var VpcDestinationConfiguration;
(function (VpcDestinationConfiguration) {
    /**
     * @internal
     */
    VpcDestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcDestinationConfiguration = exports.VpcDestinationConfiguration || (exports.VpcDestinationConfiguration = {}));
var TopicRuleDestinationConfiguration;
(function (TopicRuleDestinationConfiguration) {
    /**
     * @internal
     */
    TopicRuleDestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRuleDestinationConfiguration = exports.TopicRuleDestinationConfiguration || (exports.TopicRuleDestinationConfiguration = {}));
var CreateTopicRuleDestinationRequest;
(function (CreateTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    CreateTopicRuleDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTopicRuleDestinationRequest = exports.CreateTopicRuleDestinationRequest || (exports.CreateTopicRuleDestinationRequest = {}));
var HttpUrlDestinationProperties;
(function (HttpUrlDestinationProperties) {
    /**
     * @internal
     */
    HttpUrlDestinationProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpUrlDestinationProperties = exports.HttpUrlDestinationProperties || (exports.HttpUrlDestinationProperties = {}));
var TopicRuleDestinationStatus;
(function (TopicRuleDestinationStatus) {
    TopicRuleDestinationStatus["DELETING"] = "DELETING";
    TopicRuleDestinationStatus["DISABLED"] = "DISABLED";
    TopicRuleDestinationStatus["ENABLED"] = "ENABLED";
    TopicRuleDestinationStatus["ERROR"] = "ERROR";
    TopicRuleDestinationStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(TopicRuleDestinationStatus = exports.TopicRuleDestinationStatus || (exports.TopicRuleDestinationStatus = {}));
var VpcDestinationProperties;
(function (VpcDestinationProperties) {
    /**
     * @internal
     */
    VpcDestinationProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcDestinationProperties = exports.VpcDestinationProperties || (exports.VpcDestinationProperties = {}));
var TopicRuleDestination;
(function (TopicRuleDestination) {
    /**
     * @internal
     */
    TopicRuleDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicRuleDestination = exports.TopicRuleDestination || (exports.TopicRuleDestination = {}));
var CreateTopicRuleDestinationResponse;
(function (CreateTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    CreateTopicRuleDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTopicRuleDestinationResponse = exports.CreateTopicRuleDestinationResponse || (exports.CreateTopicRuleDestinationResponse = {}));
var DeleteAccountAuditConfigurationRequest;
(function (DeleteAccountAuditConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAccountAuditConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountAuditConfigurationRequest = exports.DeleteAccountAuditConfigurationRequest || (exports.DeleteAccountAuditConfigurationRequest = {}));
var DeleteAccountAuditConfigurationResponse;
(function (DeleteAccountAuditConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAccountAuditConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountAuditConfigurationResponse = exports.DeleteAccountAuditConfigurationResponse || (exports.DeleteAccountAuditConfigurationResponse = {}));
var DeleteAuditSuppressionRequest;
(function (DeleteAuditSuppressionRequest) {
    /**
     * @internal
     */
    DeleteAuditSuppressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAuditSuppressionRequest = exports.DeleteAuditSuppressionRequest || (exports.DeleteAuditSuppressionRequest = {}));
var DeleteAuditSuppressionResponse;
(function (DeleteAuditSuppressionResponse) {
    /**
     * @internal
     */
    DeleteAuditSuppressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAuditSuppressionResponse = exports.DeleteAuditSuppressionResponse || (exports.DeleteAuditSuppressionResponse = {}));
var DeleteAuthorizerRequest;
(function (DeleteAuthorizerRequest) {
    /**
     * @internal
     */
    DeleteAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAuthorizerRequest = exports.DeleteAuthorizerRequest || (exports.DeleteAuthorizerRequest = {}));
var DeleteAuthorizerResponse;
(function (DeleteAuthorizerResponse) {
    /**
     * @internal
     */
    DeleteAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAuthorizerResponse = exports.DeleteAuthorizerResponse || (exports.DeleteAuthorizerResponse = {}));
var DeleteConflictException;
(function (DeleteConflictException) {
    /**
     * @internal
     */
    DeleteConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConflictException = exports.DeleteConflictException || (exports.DeleteConflictException = {}));
var DeleteBillingGroupRequest;
(function (DeleteBillingGroupRequest) {
    /**
     * @internal
     */
    DeleteBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBillingGroupRequest = exports.DeleteBillingGroupRequest || (exports.DeleteBillingGroupRequest = {}));
var DeleteBillingGroupResponse;
(function (DeleteBillingGroupResponse) {
    /**
     * @internal
     */
    DeleteBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBillingGroupResponse = exports.DeleteBillingGroupResponse || (exports.DeleteBillingGroupResponse = {}));
var CertificateStateException;
(function (CertificateStateException) {
    /**
     * @internal
     */
    CertificateStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateStateException = exports.CertificateStateException || (exports.CertificateStateException = {}));
var DeleteCACertificateRequest;
(function (DeleteCACertificateRequest) {
    /**
     * @internal
     */
    DeleteCACertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCACertificateRequest = exports.DeleteCACertificateRequest || (exports.DeleteCACertificateRequest = {}));
var DeleteCACertificateResponse;
(function (DeleteCACertificateResponse) {
    /**
     * @internal
     */
    DeleteCACertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCACertificateResponse = exports.DeleteCACertificateResponse || (exports.DeleteCACertificateResponse = {}));
var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
    /**
     * @internal
     */
    DeleteCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCertificateRequest = exports.DeleteCertificateRequest || (exports.DeleteCertificateRequest = {}));
var DeleteCustomMetricRequest;
(function (DeleteCustomMetricRequest) {
    /**
     * @internal
     */
    DeleteCustomMetricRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomMetricRequest = exports.DeleteCustomMetricRequest || (exports.DeleteCustomMetricRequest = {}));
var DeleteCustomMetricResponse;
(function (DeleteCustomMetricResponse) {
    /**
     * @internal
     */
    DeleteCustomMetricResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomMetricResponse = exports.DeleteCustomMetricResponse || (exports.DeleteCustomMetricResponse = {}));
var DeleteDimensionRequest;
(function (DeleteDimensionRequest) {
    /**
     * @internal
     */
    DeleteDimensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDimensionRequest = exports.DeleteDimensionRequest || (exports.DeleteDimensionRequest = {}));
var DeleteDimensionResponse;
(function (DeleteDimensionResponse) {
    /**
     * @internal
     */
    DeleteDimensionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDimensionResponse = exports.DeleteDimensionResponse || (exports.DeleteDimensionResponse = {}));
var DeleteDomainConfigurationRequest;
(function (DeleteDomainConfigurationRequest) {
    /**
     * @internal
     */
    DeleteDomainConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainConfigurationRequest = exports.DeleteDomainConfigurationRequest || (exports.DeleteDomainConfigurationRequest = {}));
var DeleteDomainConfigurationResponse;
(function (DeleteDomainConfigurationResponse) {
    /**
     * @internal
     */
    DeleteDomainConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainConfigurationResponse = exports.DeleteDomainConfigurationResponse || (exports.DeleteDomainConfigurationResponse = {}));
var DeleteDynamicThingGroupRequest;
(function (DeleteDynamicThingGroupRequest) {
    /**
     * @internal
     */
    DeleteDynamicThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDynamicThingGroupRequest = exports.DeleteDynamicThingGroupRequest || (exports.DeleteDynamicThingGroupRequest = {}));
var DeleteDynamicThingGroupResponse;
(function (DeleteDynamicThingGroupResponse) {
    /**
     * @internal
     */
    DeleteDynamicThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDynamicThingGroupResponse = exports.DeleteDynamicThingGroupResponse || (exports.DeleteDynamicThingGroupResponse = {}));
var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobRequest = exports.DeleteJobRequest || (exports.DeleteJobRequest = {}));
var DeleteJobExecutionRequest;
(function (DeleteJobExecutionRequest) {
    /**
     * @internal
     */
    DeleteJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobExecutionRequest = exports.DeleteJobExecutionRequest || (exports.DeleteJobExecutionRequest = {}));
var DeleteJobTemplateRequest;
(function (DeleteJobTemplateRequest) {
    /**
     * @internal
     */
    DeleteJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobTemplateRequest = exports.DeleteJobTemplateRequest || (exports.DeleteJobTemplateRequest = {}));
var DeleteMitigationActionRequest;
(function (DeleteMitigationActionRequest) {
    /**
     * @internal
     */
    DeleteMitigationActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMitigationActionRequest = exports.DeleteMitigationActionRequest || (exports.DeleteMitigationActionRequest = {}));
var DeleteMitigationActionResponse;
(function (DeleteMitigationActionResponse) {
    /**
     * @internal
     */
    DeleteMitigationActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMitigationActionResponse = exports.DeleteMitigationActionResponse || (exports.DeleteMitigationActionResponse = {}));
var DeleteOTAUpdateRequest;
(function (DeleteOTAUpdateRequest) {
    /**
     * @internal
     */
    DeleteOTAUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOTAUpdateRequest = exports.DeleteOTAUpdateRequest || (exports.DeleteOTAUpdateRequest = {}));
var DeleteOTAUpdateResponse;
(function (DeleteOTAUpdateResponse) {
    /**
     * @internal
     */
    DeleteOTAUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOTAUpdateResponse = exports.DeleteOTAUpdateResponse || (exports.DeleteOTAUpdateResponse = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var DeletePolicyVersionRequest;
(function (DeletePolicyVersionRequest) {
    /**
     * @internal
     */
    DeletePolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyVersionRequest = exports.DeletePolicyVersionRequest || (exports.DeletePolicyVersionRequest = {}));
var DeleteProvisioningTemplateRequest;
(function (DeleteProvisioningTemplateRequest) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningTemplateRequest = exports.DeleteProvisioningTemplateRequest || (exports.DeleteProvisioningTemplateRequest = {}));
var DeleteProvisioningTemplateResponse;
(function (DeleteProvisioningTemplateResponse) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningTemplateResponse = exports.DeleteProvisioningTemplateResponse || (exports.DeleteProvisioningTemplateResponse = {}));
var DeleteProvisioningTemplateVersionRequest;
(function (DeleteProvisioningTemplateVersionRequest) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningTemplateVersionRequest = exports.DeleteProvisioningTemplateVersionRequest || (exports.DeleteProvisioningTemplateVersionRequest = {}));
var DeleteProvisioningTemplateVersionResponse;
(function (DeleteProvisioningTemplateVersionResponse) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningTemplateVersionResponse = exports.DeleteProvisioningTemplateVersionResponse || (exports.DeleteProvisioningTemplateVersionResponse = {}));
var DeleteRegistrationCodeRequest;
(function (DeleteRegistrationCodeRequest) {
    /**
     * @internal
     */
    DeleteRegistrationCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistrationCodeRequest = exports.DeleteRegistrationCodeRequest || (exports.DeleteRegistrationCodeRequest = {}));
var DeleteRegistrationCodeResponse;
(function (DeleteRegistrationCodeResponse) {
    /**
     * @internal
     */
    DeleteRegistrationCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistrationCodeResponse = exports.DeleteRegistrationCodeResponse || (exports.DeleteRegistrationCodeResponse = {}));
var DeleteRoleAliasRequest;
(function (DeleteRoleAliasRequest) {
    /**
     * @internal
     */
    DeleteRoleAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRoleAliasRequest = exports.DeleteRoleAliasRequest || (exports.DeleteRoleAliasRequest = {}));
var DeleteRoleAliasResponse;
(function (DeleteRoleAliasResponse) {
    /**
     * @internal
     */
    DeleteRoleAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRoleAliasResponse = exports.DeleteRoleAliasResponse || (exports.DeleteRoleAliasResponse = {}));
var DeleteScheduledAuditRequest;
(function (DeleteScheduledAuditRequest) {
    /**
     * @internal
     */
    DeleteScheduledAuditRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduledAuditRequest = exports.DeleteScheduledAuditRequest || (exports.DeleteScheduledAuditRequest = {}));
var DeleteScheduledAuditResponse;
(function (DeleteScheduledAuditResponse) {
    /**
     * @internal
     */
    DeleteScheduledAuditResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduledAuditResponse = exports.DeleteScheduledAuditResponse || (exports.DeleteScheduledAuditResponse = {}));
var DeleteSecurityProfileRequest;
(function (DeleteSecurityProfileRequest) {
    /**
     * @internal
     */
    DeleteSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityProfileRequest = exports.DeleteSecurityProfileRequest || (exports.DeleteSecurityProfileRequest = {}));
var DeleteSecurityProfileResponse;
(function (DeleteSecurityProfileResponse) {
    /**
     * @internal
     */
    DeleteSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityProfileResponse = exports.DeleteSecurityProfileResponse || (exports.DeleteSecurityProfileResponse = {}));
var DeleteStreamRequest;
(function (DeleteStreamRequest) {
    /**
     * @internal
     */
    DeleteStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamRequest = exports.DeleteStreamRequest || (exports.DeleteStreamRequest = {}));
var DeleteStreamResponse;
(function (DeleteStreamResponse) {
    /**
     * @internal
     */
    DeleteStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamResponse = exports.DeleteStreamResponse || (exports.DeleteStreamResponse = {}));
var DeleteThingRequest;
(function (DeleteThingRequest) {
    /**
     * @internal
     */
    DeleteThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingRequest = exports.DeleteThingRequest || (exports.DeleteThingRequest = {}));
var DeleteThingResponse;
(function (DeleteThingResponse) {
    /**
     * @internal
     */
    DeleteThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingResponse = exports.DeleteThingResponse || (exports.DeleteThingResponse = {}));
var DeleteThingGroupRequest;
(function (DeleteThingGroupRequest) {
    /**
     * @internal
     */
    DeleteThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingGroupRequest = exports.DeleteThingGroupRequest || (exports.DeleteThingGroupRequest = {}));
var DeleteThingGroupResponse;
(function (DeleteThingGroupResponse) {
    /**
     * @internal
     */
    DeleteThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingGroupResponse = exports.DeleteThingGroupResponse || (exports.DeleteThingGroupResponse = {}));
var DeleteThingTypeRequest;
(function (DeleteThingTypeRequest) {
    /**
     * @internal
     */
    DeleteThingTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingTypeRequest = exports.DeleteThingTypeRequest || (exports.DeleteThingTypeRequest = {}));
var DeleteThingTypeResponse;
(function (DeleteThingTypeResponse) {
    /**
     * @internal
     */
    DeleteThingTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThingTypeResponse = exports.DeleteThingTypeResponse || (exports.DeleteThingTypeResponse = {}));
var DeleteTopicRuleRequest;
(function (DeleteTopicRuleRequest) {
    /**
     * @internal
     */
    DeleteTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTopicRuleRequest = exports.DeleteTopicRuleRequest || (exports.DeleteTopicRuleRequest = {}));
//# sourceMappingURL=models_0.js.map