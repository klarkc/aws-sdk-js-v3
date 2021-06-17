import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AbortAction;
(function (AbortAction) {
    AbortAction["CANCEL"] = "CANCEL";
})(AbortAction || (AbortAction = {}));
export var JobExecutionFailureType;
(function (JobExecutionFailureType) {
    JobExecutionFailureType["ALL"] = "ALL";
    JobExecutionFailureType["FAILED"] = "FAILED";
    JobExecutionFailureType["REJECTED"] = "REJECTED";
    JobExecutionFailureType["TIMED_OUT"] = "TIMED_OUT";
})(JobExecutionFailureType || (JobExecutionFailureType = {}));
export var AbortCriteria;
(function (AbortCriteria) {
    /**
     * @internal
     */
    AbortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortCriteria || (AbortCriteria = {}));
export var AbortConfig;
(function (AbortConfig) {
    /**
     * @internal
     */
    AbortConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortConfig || (AbortConfig = {}));
export var AcceptCertificateTransferRequest;
(function (AcceptCertificateTransferRequest) {
    /**
     * @internal
     */
    AcceptCertificateTransferRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptCertificateTransferRequest || (AcceptCertificateTransferRequest = {}));
export var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var TransferAlreadyCompletedException;
(function (TransferAlreadyCompletedException) {
    /**
     * @internal
     */
    TransferAlreadyCompletedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferAlreadyCompletedException || (TransferAlreadyCompletedException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedException || (UnauthorizedException = {}));
export var CloudwatchAlarmAction;
(function (CloudwatchAlarmAction) {
    /**
     * @internal
     */
    CloudwatchAlarmAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudwatchAlarmAction || (CloudwatchAlarmAction = {}));
export var CloudwatchLogsAction;
(function (CloudwatchLogsAction) {
    /**
     * @internal
     */
    CloudwatchLogsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudwatchLogsAction || (CloudwatchLogsAction = {}));
export var CloudwatchMetricAction;
(function (CloudwatchMetricAction) {
    /**
     * @internal
     */
    CloudwatchMetricAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudwatchMetricAction || (CloudwatchMetricAction = {}));
export var DynamoKeyType;
(function (DynamoKeyType) {
    DynamoKeyType["NUMBER"] = "NUMBER";
    DynamoKeyType["STRING"] = "STRING";
})(DynamoKeyType || (DynamoKeyType = {}));
export var DynamoDBAction;
(function (DynamoDBAction) {
    /**
     * @internal
     */
    DynamoDBAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DynamoDBAction || (DynamoDBAction = {}));
export var PutItemInput;
(function (PutItemInput) {
    /**
     * @internal
     */
    PutItemInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutItemInput || (PutItemInput = {}));
export var DynamoDBv2Action;
(function (DynamoDBv2Action) {
    /**
     * @internal
     */
    DynamoDBv2Action.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DynamoDBv2Action || (DynamoDBv2Action = {}));
export var ElasticsearchAction;
(function (ElasticsearchAction) {
    /**
     * @internal
     */
    ElasticsearchAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchAction || (ElasticsearchAction = {}));
export var FirehoseAction;
(function (FirehoseAction) {
    /**
     * @internal
     */
    FirehoseAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FirehoseAction || (FirehoseAction = {}));
export var SigV4Authorization;
(function (SigV4Authorization) {
    /**
     * @internal
     */
    SigV4Authorization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SigV4Authorization || (SigV4Authorization = {}));
export var HttpAuthorization;
(function (HttpAuthorization) {
    /**
     * @internal
     */
    HttpAuthorization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpAuthorization || (HttpAuthorization = {}));
export var HttpActionHeader;
(function (HttpActionHeader) {
    /**
     * @internal
     */
    HttpActionHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpActionHeader || (HttpActionHeader = {}));
export var HttpAction;
(function (HttpAction) {
    /**
     * @internal
     */
    HttpAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpAction || (HttpAction = {}));
export var IotAnalyticsAction;
(function (IotAnalyticsAction) {
    /**
     * @internal
     */
    IotAnalyticsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IotAnalyticsAction || (IotAnalyticsAction = {}));
export var IotEventsAction;
(function (IotEventsAction) {
    /**
     * @internal
     */
    IotEventsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IotEventsAction || (IotEventsAction = {}));
export var AssetPropertyTimestamp;
(function (AssetPropertyTimestamp) {
    /**
     * @internal
     */
    AssetPropertyTimestamp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetPropertyTimestamp || (AssetPropertyTimestamp = {}));
export var AssetPropertyVariant;
(function (AssetPropertyVariant) {
    AssetPropertyVariant.visit = function (value, visitor) {
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
    AssetPropertyVariant.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.stringValue !== undefined)
            return { stringValue: obj.stringValue };
        if (obj.integerValue !== undefined)
            return { integerValue: obj.integerValue };
        if (obj.doubleValue !== undefined)
            return { doubleValue: obj.doubleValue };
        if (obj.booleanValue !== undefined)
            return { booleanValue: obj.booleanValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AssetPropertyVariant || (AssetPropertyVariant = {}));
export var AssetPropertyValue;
(function (AssetPropertyValue) {
    /**
     * @internal
     */
    AssetPropertyValue.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.value && { value: AssetPropertyVariant.filterSensitiveLog(obj.value) }))); };
})(AssetPropertyValue || (AssetPropertyValue = {}));
export var PutAssetPropertyValueEntry;
(function (PutAssetPropertyValueEntry) {
    /**
     * @internal
     */
    PutAssetPropertyValueEntry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.propertyValues && {
        propertyValues: obj.propertyValues.map(function (item) { return AssetPropertyValue.filterSensitiveLog(item); }),
    }))); };
})(PutAssetPropertyValueEntry || (PutAssetPropertyValueEntry = {}));
export var IotSiteWiseAction;
(function (IotSiteWiseAction) {
    /**
     * @internal
     */
    IotSiteWiseAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IotSiteWiseAction || (IotSiteWiseAction = {}));
export var KafkaAction;
(function (KafkaAction) {
    /**
     * @internal
     */
    KafkaAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KafkaAction || (KafkaAction = {}));
export var KinesisAction;
(function (KinesisAction) {
    /**
     * @internal
     */
    KinesisAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisAction || (KinesisAction = {}));
export var LambdaAction;
(function (LambdaAction) {
    /**
     * @internal
     */
    LambdaAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaAction || (LambdaAction = {}));
export var RepublishAction;
(function (RepublishAction) {
    /**
     * @internal
     */
    RepublishAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepublishAction || (RepublishAction = {}));
export var CannedAccessControlList;
(function (CannedAccessControlList) {
    CannedAccessControlList["AuthenticatedRead"] = "authenticated-read";
    CannedAccessControlList["AwsExecRead"] = "aws-exec-read";
    CannedAccessControlList["BucketOwnerFullControl"] = "bucket-owner-full-control";
    CannedAccessControlList["BucketOwnerRead"] = "bucket-owner-read";
    CannedAccessControlList["LogDeliveryWrite"] = "log-delivery-write";
    CannedAccessControlList["Private"] = "private";
    CannedAccessControlList["PublicRead"] = "public-read";
    CannedAccessControlList["PublicReadWrite"] = "public-read-write";
})(CannedAccessControlList || (CannedAccessControlList = {}));
export var S3Action;
(function (S3Action) {
    /**
     * @internal
     */
    S3Action.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Action || (S3Action = {}));
export var SalesforceAction;
(function (SalesforceAction) {
    /**
     * @internal
     */
    SalesforceAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SalesforceAction || (SalesforceAction = {}));
export var MessageFormat;
(function (MessageFormat) {
    MessageFormat["JSON"] = "JSON";
    MessageFormat["RAW"] = "RAW";
})(MessageFormat || (MessageFormat = {}));
export var SnsAction;
(function (SnsAction) {
    /**
     * @internal
     */
    SnsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnsAction || (SnsAction = {}));
export var SqsAction;
(function (SqsAction) {
    /**
     * @internal
     */
    SqsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqsAction || (SqsAction = {}));
export var StepFunctionsAction;
(function (StepFunctionsAction) {
    /**
     * @internal
     */
    StepFunctionsAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepFunctionsAction || (StepFunctionsAction = {}));
export var TimestreamDimension;
(function (TimestreamDimension) {
    /**
     * @internal
     */
    TimestreamDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestreamDimension || (TimestreamDimension = {}));
export var TimestreamTimestamp;
(function (TimestreamTimestamp) {
    /**
     * @internal
     */
    TimestreamTimestamp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestreamTimestamp || (TimestreamTimestamp = {}));
export var TimestreamAction;
(function (TimestreamAction) {
    /**
     * @internal
     */
    TimestreamAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestreamAction || (TimestreamAction = {}));
export var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Action || (Action = {}));
export var ActionType;
(function (ActionType) {
    ActionType["CONNECT"] = "CONNECT";
    ActionType["PUBLISH"] = "PUBLISH";
    ActionType["RECEIVE"] = "RECEIVE";
    ActionType["SUBSCRIBE"] = "SUBSCRIBE";
})(ActionType || (ActionType = {}));
export var ComparisonOperator;
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
})(ComparisonOperator || (ComparisonOperator = {}));
export var ConfidenceLevel;
(function (ConfidenceLevel) {
    ConfidenceLevel["HIGH"] = "HIGH";
    ConfidenceLevel["LOW"] = "LOW";
    ConfidenceLevel["MEDIUM"] = "MEDIUM";
})(ConfidenceLevel || (ConfidenceLevel = {}));
export var MachineLearningDetectionConfig;
(function (MachineLearningDetectionConfig) {
    /**
     * @internal
     */
    MachineLearningDetectionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MachineLearningDetectionConfig || (MachineLearningDetectionConfig = {}));
export var StatisticalThreshold;
(function (StatisticalThreshold) {
    /**
     * @internal
     */
    StatisticalThreshold.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatisticalThreshold || (StatisticalThreshold = {}));
export var MetricValue;
(function (MetricValue) {
    /**
     * @internal
     */
    MetricValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricValue || (MetricValue = {}));
export var BehaviorCriteria;
(function (BehaviorCriteria) {
    /**
     * @internal
     */
    BehaviorCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BehaviorCriteria || (BehaviorCriteria = {}));
export var DimensionValueOperator;
(function (DimensionValueOperator) {
    DimensionValueOperator["IN"] = "IN";
    DimensionValueOperator["NOT_IN"] = "NOT_IN";
})(DimensionValueOperator || (DimensionValueOperator = {}));
export var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDimension || (MetricDimension = {}));
export var Behavior;
(function (Behavior) {
    /**
     * @internal
     */
    Behavior.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Behavior || (Behavior = {}));
export var ViolationEventAdditionalInfo;
(function (ViolationEventAdditionalInfo) {
    /**
     * @internal
     */
    ViolationEventAdditionalInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ViolationEventAdditionalInfo || (ViolationEventAdditionalInfo = {}));
export var ActiveViolation;
(function (ActiveViolation) {
    /**
     * @internal
     */
    ActiveViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveViolation || (ActiveViolation = {}));
export var MetricToRetain;
(function (MetricToRetain) {
    /**
     * @internal
     */
    MetricToRetain.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricToRetain || (MetricToRetain = {}));
export var AddThingsToThingGroupParams;
(function (AddThingsToThingGroupParams) {
    /**
     * @internal
     */
    AddThingsToThingGroupParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddThingsToThingGroupParams || (AddThingsToThingGroupParams = {}));
export var AddThingToBillingGroupRequest;
(function (AddThingToBillingGroupRequest) {
    /**
     * @internal
     */
    AddThingToBillingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddThingToBillingGroupRequest || (AddThingToBillingGroupRequest = {}));
export var AddThingToBillingGroupResponse;
(function (AddThingToBillingGroupResponse) {
    /**
     * @internal
     */
    AddThingToBillingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddThingToBillingGroupResponse || (AddThingToBillingGroupResponse = {}));
export var AddThingToThingGroupRequest;
(function (AddThingToThingGroupRequest) {
    /**
     * @internal
     */
    AddThingToThingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddThingToThingGroupRequest || (AddThingToThingGroupRequest = {}));
export var AddThingToThingGroupResponse;
(function (AddThingToThingGroupResponse) {
    /**
     * @internal
     */
    AddThingToThingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddThingToThingGroupResponse || (AddThingToThingGroupResponse = {}));
export var AlertTarget;
(function (AlertTarget) {
    /**
     * @internal
     */
    AlertTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlertTarget || (AlertTarget = {}));
export var AlertTargetType;
(function (AlertTargetType) {
    AlertTargetType["SNS"] = "SNS";
})(AlertTargetType || (AlertTargetType = {}));
export var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Policy || (Policy = {}));
export var Allowed;
(function (Allowed) {
    /**
     * @internal
     */
    Allowed.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Allowed || (Allowed = {}));
export var AssociateTargetsWithJobRequest;
(function (AssociateTargetsWithJobRequest) {
    /**
     * @internal
     */
    AssociateTargetsWithJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTargetsWithJobRequest || (AssociateTargetsWithJobRequest = {}));
export var AssociateTargetsWithJobResponse;
(function (AssociateTargetsWithJobResponse) {
    /**
     * @internal
     */
    AssociateTargetsWithJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTargetsWithJobResponse || (AssociateTargetsWithJobResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var AttachPolicyRequest;
(function (AttachPolicyRequest) {
    /**
     * @internal
     */
    AttachPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachPolicyRequest || (AttachPolicyRequest = {}));
export var AttachPrincipalPolicyRequest;
(function (AttachPrincipalPolicyRequest) {
    /**
     * @internal
     */
    AttachPrincipalPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachPrincipalPolicyRequest || (AttachPrincipalPolicyRequest = {}));
export var AttachSecurityProfileRequest;
(function (AttachSecurityProfileRequest) {
    /**
     * @internal
     */
    AttachSecurityProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachSecurityProfileRequest || (AttachSecurityProfileRequest = {}));
export var AttachSecurityProfileResponse;
(function (AttachSecurityProfileResponse) {
    /**
     * @internal
     */
    AttachSecurityProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachSecurityProfileResponse || (AttachSecurityProfileResponse = {}));
export var VersionConflictException;
(function (VersionConflictException) {
    /**
     * @internal
     */
    VersionConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VersionConflictException || (VersionConflictException = {}));
export var AttachThingPrincipalRequest;
(function (AttachThingPrincipalRequest) {
    /**
     * @internal
     */
    AttachThingPrincipalRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachThingPrincipalRequest || (AttachThingPrincipalRequest = {}));
export var AttachThingPrincipalResponse;
(function (AttachThingPrincipalResponse) {
    /**
     * @internal
     */
    AttachThingPrincipalResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachThingPrincipalResponse || (AttachThingPrincipalResponse = {}));
export var AttributePayload;
(function (AttributePayload) {
    /**
     * @internal
     */
    AttributePayload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttributePayload || (AttributePayload = {}));
export var AuditCheckConfiguration;
(function (AuditCheckConfiguration) {
    /**
     * @internal
     */
    AuditCheckConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditCheckConfiguration || (AuditCheckConfiguration = {}));
export var AuditCheckRunStatus;
(function (AuditCheckRunStatus) {
    AuditCheckRunStatus["CANCELED"] = "CANCELED";
    AuditCheckRunStatus["COMPLETED_COMPLIANT"] = "COMPLETED_COMPLIANT";
    AuditCheckRunStatus["COMPLETED_NON_COMPLIANT"] = "COMPLETED_NON_COMPLIANT";
    AuditCheckRunStatus["FAILED"] = "FAILED";
    AuditCheckRunStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AuditCheckRunStatus["WAITING_FOR_DATA_COLLECTION"] = "WAITING_FOR_DATA_COLLECTION";
})(AuditCheckRunStatus || (AuditCheckRunStatus = {}));
export var AuditCheckDetails;
(function (AuditCheckDetails) {
    /**
     * @internal
     */
    AuditCheckDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditCheckDetails || (AuditCheckDetails = {}));
export var PolicyVersionIdentifier;
(function (PolicyVersionIdentifier) {
    /**
     * @internal
     */
    PolicyVersionIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyVersionIdentifier || (PolicyVersionIdentifier = {}));
export var ResourceIdentifier;
(function (ResourceIdentifier) {
    /**
     * @internal
     */
    ResourceIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceIdentifier || (ResourceIdentifier = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["ACCOUNT_SETTINGS"] = "ACCOUNT_SETTINGS";
    ResourceType["CA_CERTIFICATE"] = "CA_CERTIFICATE";
    ResourceType["CLIENT_ID"] = "CLIENT_ID";
    ResourceType["COGNITO_IDENTITY_POOL"] = "COGNITO_IDENTITY_POOL";
    ResourceType["DEVICE_CERTIFICATE"] = "DEVICE_CERTIFICATE";
    ResourceType["IAM_ROLE"] = "IAM_ROLE";
    ResourceType["IOT_POLICY"] = "IOT_POLICY";
    ResourceType["ROLE_ALIAS"] = "ROLE_ALIAS";
})(ResourceType || (ResourceType = {}));
export var NonCompliantResource;
(function (NonCompliantResource) {
    /**
     * @internal
     */
    NonCompliantResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NonCompliantResource || (NonCompliantResource = {}));
export var RelatedResource;
(function (RelatedResource) {
    /**
     * @internal
     */
    RelatedResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelatedResource || (RelatedResource = {}));
export var AuditFindingSeverity;
(function (AuditFindingSeverity) {
    AuditFindingSeverity["CRITICAL"] = "CRITICAL";
    AuditFindingSeverity["HIGH"] = "HIGH";
    AuditFindingSeverity["LOW"] = "LOW";
    AuditFindingSeverity["MEDIUM"] = "MEDIUM";
})(AuditFindingSeverity || (AuditFindingSeverity = {}));
export var AuditFinding;
(function (AuditFinding) {
    /**
     * @internal
     */
    AuditFinding.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditFinding || (AuditFinding = {}));
export var AuditFrequency;
(function (AuditFrequency) {
    AuditFrequency["BIWEEKLY"] = "BIWEEKLY";
    AuditFrequency["DAILY"] = "DAILY";
    AuditFrequency["MONTHLY"] = "MONTHLY";
    AuditFrequency["WEEKLY"] = "WEEKLY";
})(AuditFrequency || (AuditFrequency = {}));
export var AuditMitigationActionsExecutionStatus;
(function (AuditMitigationActionsExecutionStatus) {
    AuditMitigationActionsExecutionStatus["CANCELED"] = "CANCELED";
    AuditMitigationActionsExecutionStatus["COMPLETED"] = "COMPLETED";
    AuditMitigationActionsExecutionStatus["FAILED"] = "FAILED";
    AuditMitigationActionsExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AuditMitigationActionsExecutionStatus["PENDING"] = "PENDING";
    AuditMitigationActionsExecutionStatus["SKIPPED"] = "SKIPPED";
})(AuditMitigationActionsExecutionStatus || (AuditMitigationActionsExecutionStatus = {}));
export var AuditMitigationActionExecutionMetadata;
(function (AuditMitigationActionExecutionMetadata) {
    /**
     * @internal
     */
    AuditMitigationActionExecutionMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditMitigationActionExecutionMetadata || (AuditMitigationActionExecutionMetadata = {}));
export var AuditMitigationActionsTaskStatus;
(function (AuditMitigationActionsTaskStatus) {
    AuditMitigationActionsTaskStatus["CANCELED"] = "CANCELED";
    AuditMitigationActionsTaskStatus["COMPLETED"] = "COMPLETED";
    AuditMitigationActionsTaskStatus["FAILED"] = "FAILED";
    AuditMitigationActionsTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AuditMitigationActionsTaskStatus || (AuditMitigationActionsTaskStatus = {}));
export var AuditMitigationActionsTaskMetadata;
(function (AuditMitigationActionsTaskMetadata) {
    /**
     * @internal
     */
    AuditMitigationActionsTaskMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditMitigationActionsTaskMetadata || (AuditMitigationActionsTaskMetadata = {}));
export var TaskStatisticsForAuditCheck;
(function (TaskStatisticsForAuditCheck) {
    /**
     * @internal
     */
    TaskStatisticsForAuditCheck.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskStatisticsForAuditCheck || (TaskStatisticsForAuditCheck = {}));
export var AuditMitigationActionsTaskTarget;
(function (AuditMitigationActionsTaskTarget) {
    /**
     * @internal
     */
    AuditMitigationActionsTaskTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditMitigationActionsTaskTarget || (AuditMitigationActionsTaskTarget = {}));
export var AuditNotificationTarget;
(function (AuditNotificationTarget) {
    /**
     * @internal
     */
    AuditNotificationTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditNotificationTarget || (AuditNotificationTarget = {}));
export var AuditNotificationType;
(function (AuditNotificationType) {
    AuditNotificationType["SNS"] = "SNS";
})(AuditNotificationType || (AuditNotificationType = {}));
export var AuditSuppression;
(function (AuditSuppression) {
    /**
     * @internal
     */
    AuditSuppression.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditSuppression || (AuditSuppression = {}));
export var AuditTaskStatus;
(function (AuditTaskStatus) {
    AuditTaskStatus["CANCELED"] = "CANCELED";
    AuditTaskStatus["COMPLETED"] = "COMPLETED";
    AuditTaskStatus["FAILED"] = "FAILED";
    AuditTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AuditTaskStatus || (AuditTaskStatus = {}));
export var AuditTaskType;
(function (AuditTaskType) {
    AuditTaskType["ON_DEMAND_AUDIT_TASK"] = "ON_DEMAND_AUDIT_TASK";
    AuditTaskType["SCHEDULED_AUDIT_TASK"] = "SCHEDULED_AUDIT_TASK";
})(AuditTaskType || (AuditTaskType = {}));
export var AuditTaskMetadata;
(function (AuditTaskMetadata) {
    /**
     * @internal
     */
    AuditTaskMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuditTaskMetadata || (AuditTaskMetadata = {}));
export var AuthDecision;
(function (AuthDecision) {
    AuthDecision["ALLOWED"] = "ALLOWED";
    AuthDecision["EXPLICIT_DENY"] = "EXPLICIT_DENY";
    AuthDecision["IMPLICIT_DENY"] = "IMPLICIT_DENY";
})(AuthDecision || (AuthDecision = {}));
export var AuthInfo;
(function (AuthInfo) {
    /**
     * @internal
     */
    AuthInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthInfo || (AuthInfo = {}));
export var AuthorizerConfig;
(function (AuthorizerConfig) {
    /**
     * @internal
     */
    AuthorizerConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizerConfig || (AuthorizerConfig = {}));
export var AuthorizerStatus;
(function (AuthorizerStatus) {
    AuthorizerStatus["ACTIVE"] = "ACTIVE";
    AuthorizerStatus["INACTIVE"] = "INACTIVE";
})(AuthorizerStatus || (AuthorizerStatus = {}));
export var AuthorizerDescription;
(function (AuthorizerDescription) {
    /**
     * @internal
     */
    AuthorizerDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizerDescription || (AuthorizerDescription = {}));
export var AuthorizerSummary;
(function (AuthorizerSummary) {
    /**
     * @internal
     */
    AuthorizerSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizerSummary || (AuthorizerSummary = {}));
export var ExplicitDeny;
(function (ExplicitDeny) {
    /**
     * @internal
     */
    ExplicitDeny.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExplicitDeny || (ExplicitDeny = {}));
export var ImplicitDeny;
(function (ImplicitDeny) {
    /**
     * @internal
     */
    ImplicitDeny.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImplicitDeny || (ImplicitDeny = {}));
export var Denied;
(function (Denied) {
    /**
     * @internal
     */
    Denied.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Denied || (Denied = {}));
export var AuthResult;
(function (AuthResult) {
    /**
     * @internal
     */
    AuthResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthResult || (AuthResult = {}));
export var AutoRegistrationStatus;
(function (AutoRegistrationStatus) {
    AutoRegistrationStatus["DISABLE"] = "DISABLE";
    AutoRegistrationStatus["ENABLE"] = "ENABLE";
})(AutoRegistrationStatus || (AutoRegistrationStatus = {}));
export var CancelAuditMitigationActionsTaskRequest;
(function (CancelAuditMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    CancelAuditMitigationActionsTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelAuditMitigationActionsTaskRequest || (CancelAuditMitigationActionsTaskRequest = {}));
export var CancelAuditMitigationActionsTaskResponse;
(function (CancelAuditMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    CancelAuditMitigationActionsTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelAuditMitigationActionsTaskResponse || (CancelAuditMitigationActionsTaskResponse = {}));
export var CancelAuditTaskRequest;
(function (CancelAuditTaskRequest) {
    /**
     * @internal
     */
    CancelAuditTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelAuditTaskRequest || (CancelAuditTaskRequest = {}));
export var CancelAuditTaskResponse;
(function (CancelAuditTaskResponse) {
    /**
     * @internal
     */
    CancelAuditTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelAuditTaskResponse || (CancelAuditTaskResponse = {}));
export var CancelCertificateTransferRequest;
(function (CancelCertificateTransferRequest) {
    /**
     * @internal
     */
    CancelCertificateTransferRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelCertificateTransferRequest || (CancelCertificateTransferRequest = {}));
export var CancelDetectMitigationActionsTaskRequest;
(function (CancelDetectMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    CancelDetectMitigationActionsTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDetectMitigationActionsTaskRequest || (CancelDetectMitigationActionsTaskRequest = {}));
export var CancelDetectMitigationActionsTaskResponse;
(function (CancelDetectMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    CancelDetectMitigationActionsTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDetectMitigationActionsTaskResponse || (CancelDetectMitigationActionsTaskResponse = {}));
export var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRequest || (CancelJobRequest = {}));
export var CancelJobResponse;
(function (CancelJobResponse) {
    /**
     * @internal
     */
    CancelJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobResponse || (CancelJobResponse = {}));
export var CancelJobExecutionRequest;
(function (CancelJobExecutionRequest) {
    /**
     * @internal
     */
    CancelJobExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobExecutionRequest || (CancelJobExecutionRequest = {}));
export var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
    /**
     * @internal
     */
    InvalidStateTransitionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidStateTransitionException || (InvalidStateTransitionException = {}));
export var ClearDefaultAuthorizerRequest;
(function (ClearDefaultAuthorizerRequest) {
    /**
     * @internal
     */
    ClearDefaultAuthorizerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClearDefaultAuthorizerRequest || (ClearDefaultAuthorizerRequest = {}));
export var ClearDefaultAuthorizerResponse;
(function (ClearDefaultAuthorizerResponse) {
    /**
     * @internal
     */
    ClearDefaultAuthorizerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClearDefaultAuthorizerResponse || (ClearDefaultAuthorizerResponse = {}));
export var ConfirmTopicRuleDestinationRequest;
(function (ConfirmTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    ConfirmTopicRuleDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfirmTopicRuleDestinationRequest || (ConfirmTopicRuleDestinationRequest = {}));
export var ConfirmTopicRuleDestinationResponse;
(function (ConfirmTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    ConfirmTopicRuleDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfirmTopicRuleDestinationResponse || (ConfirmTopicRuleDestinationResponse = {}));
export var ConflictingResourceUpdateException;
(function (ConflictingResourceUpdateException) {
    /**
     * @internal
     */
    ConflictingResourceUpdateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictingResourceUpdateException || (ConflictingResourceUpdateException = {}));
export var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalException || (InternalException = {}));
export var CreateAuditSuppressionRequest;
(function (CreateAuditSuppressionRequest) {
    /**
     * @internal
     */
    CreateAuditSuppressionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAuditSuppressionRequest || (CreateAuditSuppressionRequest = {}));
export var CreateAuditSuppressionResponse;
(function (CreateAuditSuppressionResponse) {
    /**
     * @internal
     */
    CreateAuditSuppressionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAuditSuppressionResponse || (CreateAuditSuppressionResponse = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateAuthorizerRequest;
(function (CreateAuthorizerRequest) {
    /**
     * @internal
     */
    CreateAuthorizerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAuthorizerRequest || (CreateAuthorizerRequest = {}));
export var CreateAuthorizerResponse;
(function (CreateAuthorizerResponse) {
    /**
     * @internal
     */
    CreateAuthorizerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAuthorizerResponse || (CreateAuthorizerResponse = {}));
export var BillingGroupProperties;
(function (BillingGroupProperties) {
    /**
     * @internal
     */
    BillingGroupProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BillingGroupProperties || (BillingGroupProperties = {}));
export var CreateBillingGroupRequest;
(function (CreateBillingGroupRequest) {
    /**
     * @internal
     */
    CreateBillingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBillingGroupRequest || (CreateBillingGroupRequest = {}));
export var CreateBillingGroupResponse;
(function (CreateBillingGroupResponse) {
    /**
     * @internal
     */
    CreateBillingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBillingGroupResponse || (CreateBillingGroupResponse = {}));
export var CreateCertificateFromCsrRequest;
(function (CreateCertificateFromCsrRequest) {
    /**
     * @internal
     */
    CreateCertificateFromCsrRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCertificateFromCsrRequest || (CreateCertificateFromCsrRequest = {}));
export var CreateCertificateFromCsrResponse;
(function (CreateCertificateFromCsrResponse) {
    /**
     * @internal
     */
    CreateCertificateFromCsrResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCertificateFromCsrResponse || (CreateCertificateFromCsrResponse = {}));
export var CustomMetricType;
(function (CustomMetricType) {
    CustomMetricType["IP_ADDRESS_LIST"] = "ip-address-list";
    CustomMetricType["NUMBER"] = "number";
    CustomMetricType["NUMBER_LIST"] = "number-list";
    CustomMetricType["STRING_LIST"] = "string-list";
})(CustomMetricType || (CustomMetricType = {}));
export var CreateCustomMetricRequest;
(function (CreateCustomMetricRequest) {
    /**
     * @internal
     */
    CreateCustomMetricRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomMetricRequest || (CreateCustomMetricRequest = {}));
export var CreateCustomMetricResponse;
(function (CreateCustomMetricResponse) {
    /**
     * @internal
     */
    CreateCustomMetricResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomMetricResponse || (CreateCustomMetricResponse = {}));
export var DimensionType;
(function (DimensionType) {
    DimensionType["TOPIC_FILTER"] = "TOPIC_FILTER";
})(DimensionType || (DimensionType = {}));
export var CreateDimensionRequest;
(function (CreateDimensionRequest) {
    /**
     * @internal
     */
    CreateDimensionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDimensionRequest || (CreateDimensionRequest = {}));
export var CreateDimensionResponse;
(function (CreateDimensionResponse) {
    /**
     * @internal
     */
    CreateDimensionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDimensionResponse || (CreateDimensionResponse = {}));
export var CertificateValidationException;
(function (CertificateValidationException) {
    /**
     * @internal
     */
    CertificateValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateValidationException || (CertificateValidationException = {}));
export var ServiceType;
(function (ServiceType) {
    ServiceType["CREDENTIAL_PROVIDER"] = "CREDENTIAL_PROVIDER";
    ServiceType["DATA"] = "DATA";
    ServiceType["JOBS"] = "JOBS";
})(ServiceType || (ServiceType = {}));
export var CreateDomainConfigurationRequest;
(function (CreateDomainConfigurationRequest) {
    /**
     * @internal
     */
    CreateDomainConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainConfigurationRequest || (CreateDomainConfigurationRequest = {}));
export var CreateDomainConfigurationResponse;
(function (CreateDomainConfigurationResponse) {
    /**
     * @internal
     */
    CreateDomainConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainConfigurationResponse || (CreateDomainConfigurationResponse = {}));
export var ThingGroupProperties;
(function (ThingGroupProperties) {
    /**
     * @internal
     */
    ThingGroupProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThingGroupProperties || (ThingGroupProperties = {}));
export var CreateDynamicThingGroupRequest;
(function (CreateDynamicThingGroupRequest) {
    /**
     * @internal
     */
    CreateDynamicThingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDynamicThingGroupRequest || (CreateDynamicThingGroupRequest = {}));
export var CreateDynamicThingGroupResponse;
(function (CreateDynamicThingGroupResponse) {
    /**
     * @internal
     */
    CreateDynamicThingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDynamicThingGroupResponse || (CreateDynamicThingGroupResponse = {}));
export var InvalidQueryException;
(function (InvalidQueryException) {
    /**
     * @internal
     */
    InvalidQueryException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidQueryException || (InvalidQueryException = {}));
export var RateIncreaseCriteria;
(function (RateIncreaseCriteria) {
    /**
     * @internal
     */
    RateIncreaseCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RateIncreaseCriteria || (RateIncreaseCriteria = {}));
export var ExponentialRolloutRate;
(function (ExponentialRolloutRate) {
    /**
     * @internal
     */
    ExponentialRolloutRate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExponentialRolloutRate || (ExponentialRolloutRate = {}));
export var JobExecutionsRolloutConfig;
(function (JobExecutionsRolloutConfig) {
    /**
     * @internal
     */
    JobExecutionsRolloutConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobExecutionsRolloutConfig || (JobExecutionsRolloutConfig = {}));
export var PresignedUrlConfig;
(function (PresignedUrlConfig) {
    /**
     * @internal
     */
    PresignedUrlConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PresignedUrlConfig || (PresignedUrlConfig = {}));
export var TargetSelection;
(function (TargetSelection) {
    TargetSelection["CONTINUOUS"] = "CONTINUOUS";
    TargetSelection["SNAPSHOT"] = "SNAPSHOT";
})(TargetSelection || (TargetSelection = {}));
export var TimeoutConfig;
(function (TimeoutConfig) {
    /**
     * @internal
     */
    TimeoutConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeoutConfig || (TimeoutConfig = {}));
export var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobRequest || (CreateJobRequest = {}));
export var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobResponse || (CreateJobResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CreateJobTemplateRequest;
(function (CreateJobTemplateRequest) {
    /**
     * @internal
     */
    CreateJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobTemplateRequest || (CreateJobTemplateRequest = {}));
export var CreateJobTemplateResponse;
(function (CreateJobTemplateResponse) {
    /**
     * @internal
     */
    CreateJobTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobTemplateResponse || (CreateJobTemplateResponse = {}));
export var CreateKeysAndCertificateRequest;
(function (CreateKeysAndCertificateRequest) {
    /**
     * @internal
     */
    CreateKeysAndCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateKeysAndCertificateRequest || (CreateKeysAndCertificateRequest = {}));
export var KeyPair;
(function (KeyPair) {
    /**
     * @internal
     */
    KeyPair.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }))); };
})(KeyPair || (KeyPair = {}));
export var CreateKeysAndCertificateResponse;
(function (CreateKeysAndCertificateResponse) {
    /**
     * @internal
     */
    CreateKeysAndCertificateResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }))); };
})(CreateKeysAndCertificateResponse || (CreateKeysAndCertificateResponse = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
})(LogLevel || (LogLevel = {}));
export var EnableIoTLoggingParams;
(function (EnableIoTLoggingParams) {
    /**
     * @internal
     */
    EnableIoTLoggingParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableIoTLoggingParams || (EnableIoTLoggingParams = {}));
export var PublishFindingToSnsParams;
(function (PublishFindingToSnsParams) {
    /**
     * @internal
     */
    PublishFindingToSnsParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublishFindingToSnsParams || (PublishFindingToSnsParams = {}));
export var PolicyTemplateName;
(function (PolicyTemplateName) {
    PolicyTemplateName["BLANK_POLICY"] = "BLANK_POLICY";
})(PolicyTemplateName || (PolicyTemplateName = {}));
export var ReplaceDefaultPolicyVersionParams;
(function (ReplaceDefaultPolicyVersionParams) {
    /**
     * @internal
     */
    ReplaceDefaultPolicyVersionParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplaceDefaultPolicyVersionParams || (ReplaceDefaultPolicyVersionParams = {}));
export var CACertificateUpdateAction;
(function (CACertificateUpdateAction) {
    CACertificateUpdateAction["DEACTIVATE"] = "DEACTIVATE";
})(CACertificateUpdateAction || (CACertificateUpdateAction = {}));
export var UpdateCACertificateParams;
(function (UpdateCACertificateParams) {
    /**
     * @internal
     */
    UpdateCACertificateParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCACertificateParams || (UpdateCACertificateParams = {}));
export var DeviceCertificateUpdateAction;
(function (DeviceCertificateUpdateAction) {
    DeviceCertificateUpdateAction["DEACTIVATE"] = "DEACTIVATE";
})(DeviceCertificateUpdateAction || (DeviceCertificateUpdateAction = {}));
export var UpdateDeviceCertificateParams;
(function (UpdateDeviceCertificateParams) {
    /**
     * @internal
     */
    UpdateDeviceCertificateParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeviceCertificateParams || (UpdateDeviceCertificateParams = {}));
export var MitigationActionParams;
(function (MitigationActionParams) {
    /**
     * @internal
     */
    MitigationActionParams.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MitigationActionParams || (MitigationActionParams = {}));
export var CreateMitigationActionRequest;
(function (CreateMitigationActionRequest) {
    /**
     * @internal
     */
    CreateMitigationActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMitigationActionRequest || (CreateMitigationActionRequest = {}));
export var CreateMitigationActionResponse;
(function (CreateMitigationActionResponse) {
    /**
     * @internal
     */
    CreateMitigationActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMitigationActionResponse || (CreateMitigationActionResponse = {}));
export var AwsJobAbortCriteriaAbortAction;
(function (AwsJobAbortCriteriaAbortAction) {
    AwsJobAbortCriteriaAbortAction["CANCEL"] = "CANCEL";
})(AwsJobAbortCriteriaAbortAction || (AwsJobAbortCriteriaAbortAction = {}));
export var AwsJobAbortCriteriaFailureType;
(function (AwsJobAbortCriteriaFailureType) {
    AwsJobAbortCriteriaFailureType["ALL"] = "ALL";
    AwsJobAbortCriteriaFailureType["FAILED"] = "FAILED";
    AwsJobAbortCriteriaFailureType["REJECTED"] = "REJECTED";
    AwsJobAbortCriteriaFailureType["TIMED_OUT"] = "TIMED_OUT";
})(AwsJobAbortCriteriaFailureType || (AwsJobAbortCriteriaFailureType = {}));
export var AwsJobAbortCriteria;
(function (AwsJobAbortCriteria) {
    /**
     * @internal
     */
    AwsJobAbortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobAbortCriteria || (AwsJobAbortCriteria = {}));
export var AwsJobAbortConfig;
(function (AwsJobAbortConfig) {
    /**
     * @internal
     */
    AwsJobAbortConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobAbortConfig || (AwsJobAbortConfig = {}));
export var AwsJobRateIncreaseCriteria;
(function (AwsJobRateIncreaseCriteria) {
    /**
     * @internal
     */
    AwsJobRateIncreaseCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobRateIncreaseCriteria || (AwsJobRateIncreaseCriteria = {}));
export var AwsJobExponentialRolloutRate;
(function (AwsJobExponentialRolloutRate) {
    /**
     * @internal
     */
    AwsJobExponentialRolloutRate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobExponentialRolloutRate || (AwsJobExponentialRolloutRate = {}));
export var AwsJobExecutionsRolloutConfig;
(function (AwsJobExecutionsRolloutConfig) {
    /**
     * @internal
     */
    AwsJobExecutionsRolloutConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobExecutionsRolloutConfig || (AwsJobExecutionsRolloutConfig = {}));
export var AwsJobPresignedUrlConfig;
(function (AwsJobPresignedUrlConfig) {
    /**
     * @internal
     */
    AwsJobPresignedUrlConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobPresignedUrlConfig || (AwsJobPresignedUrlConfig = {}));
export var AwsJobTimeoutConfig;
(function (AwsJobTimeoutConfig) {
    /**
     * @internal
     */
    AwsJobTimeoutConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsJobTimeoutConfig || (AwsJobTimeoutConfig = {}));
export var CodeSigningCertificateChain;
(function (CodeSigningCertificateChain) {
    /**
     * @internal
     */
    CodeSigningCertificateChain.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeSigningCertificateChain || (CodeSigningCertificateChain = {}));
export var CodeSigningSignature;
(function (CodeSigningSignature) {
    /**
     * @internal
     */
    CodeSigningSignature.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeSigningSignature || (CodeSigningSignature = {}));
export var CustomCodeSigning;
(function (CustomCodeSigning) {
    /**
     * @internal
     */
    CustomCodeSigning.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomCodeSigning || (CustomCodeSigning = {}));
export var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Destination || (S3Destination = {}));
export var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Destination || (Destination = {}));
export var SigningProfileParameter;
(function (SigningProfileParameter) {
    /**
     * @internal
     */
    SigningProfileParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SigningProfileParameter || (SigningProfileParameter = {}));
export var StartSigningJobParameter;
(function (StartSigningJobParameter) {
    /**
     * @internal
     */
    StartSigningJobParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSigningJobParameter || (StartSigningJobParameter = {}));
export var CodeSigning;
(function (CodeSigning) {
    /**
     * @internal
     */
    CodeSigning.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeSigning || (CodeSigning = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var _Stream;
(function (_Stream) {
    /**
     * @internal
     */
    _Stream.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Stream || (_Stream = {}));
export var FileLocation;
(function (FileLocation) {
    /**
     * @internal
     */
    FileLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileLocation || (FileLocation = {}));
export var OTAUpdateFile;
(function (OTAUpdateFile) {
    /**
     * @internal
     */
    OTAUpdateFile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OTAUpdateFile || (OTAUpdateFile = {}));
export var Protocol;
(function (Protocol) {
    Protocol["HTTP"] = "HTTP";
    Protocol["MQTT"] = "MQTT";
})(Protocol || (Protocol = {}));
export var CreateOTAUpdateRequest;
(function (CreateOTAUpdateRequest) {
    /**
     * @internal
     */
    CreateOTAUpdateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOTAUpdateRequest || (CreateOTAUpdateRequest = {}));
export var OTAUpdateStatus;
(function (OTAUpdateStatus) {
    OTAUpdateStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    OTAUpdateStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OTAUpdateStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OTAUpdateStatus["CREATE_PENDING"] = "CREATE_PENDING";
})(OTAUpdateStatus || (OTAUpdateStatus = {}));
export var CreateOTAUpdateResponse;
(function (CreateOTAUpdateResponse) {
    /**
     * @internal
     */
    CreateOTAUpdateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOTAUpdateResponse || (CreateOTAUpdateResponse = {}));
export var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyRequest || (CreatePolicyRequest = {}));
export var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyResponse || (CreatePolicyResponse = {}));
export var MalformedPolicyException;
(function (MalformedPolicyException) {
    /**
     * @internal
     */
    MalformedPolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MalformedPolicyException || (MalformedPolicyException = {}));
export var CreatePolicyVersionRequest;
(function (CreatePolicyVersionRequest) {
    /**
     * @internal
     */
    CreatePolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyVersionRequest || (CreatePolicyVersionRequest = {}));
export var CreatePolicyVersionResponse;
(function (CreatePolicyVersionResponse) {
    /**
     * @internal
     */
    CreatePolicyVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyVersionResponse || (CreatePolicyVersionResponse = {}));
export var VersionsLimitExceededException;
(function (VersionsLimitExceededException) {
    /**
     * @internal
     */
    VersionsLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VersionsLimitExceededException || (VersionsLimitExceededException = {}));
export var CreateProvisioningClaimRequest;
(function (CreateProvisioningClaimRequest) {
    /**
     * @internal
     */
    CreateProvisioningClaimRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProvisioningClaimRequest || (CreateProvisioningClaimRequest = {}));
export var CreateProvisioningClaimResponse;
(function (CreateProvisioningClaimResponse) {
    /**
     * @internal
     */
    CreateProvisioningClaimResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }))); };
})(CreateProvisioningClaimResponse || (CreateProvisioningClaimResponse = {}));
export var ProvisioningHook;
(function (ProvisioningHook) {
    /**
     * @internal
     */
    ProvisioningHook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisioningHook || (ProvisioningHook = {}));
export var CreateProvisioningTemplateRequest;
(function (CreateProvisioningTemplateRequest) {
    /**
     * @internal
     */
    CreateProvisioningTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProvisioningTemplateRequest || (CreateProvisioningTemplateRequest = {}));
export var CreateProvisioningTemplateResponse;
(function (CreateProvisioningTemplateResponse) {
    /**
     * @internal
     */
    CreateProvisioningTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProvisioningTemplateResponse || (CreateProvisioningTemplateResponse = {}));
export var CreateProvisioningTemplateVersionRequest;
(function (CreateProvisioningTemplateVersionRequest) {
    /**
     * @internal
     */
    CreateProvisioningTemplateVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProvisioningTemplateVersionRequest || (CreateProvisioningTemplateVersionRequest = {}));
export var CreateProvisioningTemplateVersionResponse;
(function (CreateProvisioningTemplateVersionResponse) {
    /**
     * @internal
     */
    CreateProvisioningTemplateVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProvisioningTemplateVersionResponse || (CreateProvisioningTemplateVersionResponse = {}));
export var CreateRoleAliasRequest;
(function (CreateRoleAliasRequest) {
    /**
     * @internal
     */
    CreateRoleAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoleAliasRequest || (CreateRoleAliasRequest = {}));
export var CreateRoleAliasResponse;
(function (CreateRoleAliasResponse) {
    /**
     * @internal
     */
    CreateRoleAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoleAliasResponse || (CreateRoleAliasResponse = {}));
export var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["FRI"] = "FRI";
    DayOfWeek["MON"] = "MON";
    DayOfWeek["SAT"] = "SAT";
    DayOfWeek["SUN"] = "SUN";
    DayOfWeek["THU"] = "THU";
    DayOfWeek["TUE"] = "TUE";
    DayOfWeek["WED"] = "WED";
})(DayOfWeek || (DayOfWeek = {}));
export var CreateScheduledAuditRequest;
(function (CreateScheduledAuditRequest) {
    /**
     * @internal
     */
    CreateScheduledAuditRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScheduledAuditRequest || (CreateScheduledAuditRequest = {}));
export var CreateScheduledAuditResponse;
(function (CreateScheduledAuditResponse) {
    /**
     * @internal
     */
    CreateScheduledAuditResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScheduledAuditResponse || (CreateScheduledAuditResponse = {}));
export var CreateSecurityProfileRequest;
(function (CreateSecurityProfileRequest) {
    /**
     * @internal
     */
    CreateSecurityProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSecurityProfileRequest || (CreateSecurityProfileRequest = {}));
export var CreateSecurityProfileResponse;
(function (CreateSecurityProfileResponse) {
    /**
     * @internal
     */
    CreateSecurityProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSecurityProfileResponse || (CreateSecurityProfileResponse = {}));
export var StreamFile;
(function (StreamFile) {
    /**
     * @internal
     */
    StreamFile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamFile || (StreamFile = {}));
export var CreateStreamRequest;
(function (CreateStreamRequest) {
    /**
     * @internal
     */
    CreateStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamRequest || (CreateStreamRequest = {}));
export var CreateStreamResponse;
(function (CreateStreamResponse) {
    /**
     * @internal
     */
    CreateStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamResponse || (CreateStreamResponse = {}));
export var CreateThingRequest;
(function (CreateThingRequest) {
    /**
     * @internal
     */
    CreateThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingRequest || (CreateThingRequest = {}));
export var CreateThingResponse;
(function (CreateThingResponse) {
    /**
     * @internal
     */
    CreateThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingResponse || (CreateThingResponse = {}));
export var CreateThingGroupRequest;
(function (CreateThingGroupRequest) {
    /**
     * @internal
     */
    CreateThingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingGroupRequest || (CreateThingGroupRequest = {}));
export var CreateThingGroupResponse;
(function (CreateThingGroupResponse) {
    /**
     * @internal
     */
    CreateThingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingGroupResponse || (CreateThingGroupResponse = {}));
export var ThingTypeProperties;
(function (ThingTypeProperties) {
    /**
     * @internal
     */
    ThingTypeProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThingTypeProperties || (ThingTypeProperties = {}));
export var CreateThingTypeRequest;
(function (CreateThingTypeRequest) {
    /**
     * @internal
     */
    CreateThingTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingTypeRequest || (CreateThingTypeRequest = {}));
export var CreateThingTypeResponse;
(function (CreateThingTypeResponse) {
    /**
     * @internal
     */
    CreateThingTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateThingTypeResponse || (CreateThingTypeResponse = {}));
export var TopicRulePayload;
(function (TopicRulePayload) {
    /**
     * @internal
     */
    TopicRulePayload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicRulePayload || (TopicRulePayload = {}));
export var CreateTopicRuleRequest;
(function (CreateTopicRuleRequest) {
    /**
     * @internal
     */
    CreateTopicRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTopicRuleRequest || (CreateTopicRuleRequest = {}));
export var SqlParseException;
(function (SqlParseException) {
    /**
     * @internal
     */
    SqlParseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlParseException || (SqlParseException = {}));
export var HttpUrlDestinationConfiguration;
(function (HttpUrlDestinationConfiguration) {
    /**
     * @internal
     */
    HttpUrlDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpUrlDestinationConfiguration || (HttpUrlDestinationConfiguration = {}));
export var VpcDestinationConfiguration;
(function (VpcDestinationConfiguration) {
    /**
     * @internal
     */
    VpcDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcDestinationConfiguration || (VpcDestinationConfiguration = {}));
export var TopicRuleDestinationConfiguration;
(function (TopicRuleDestinationConfiguration) {
    /**
     * @internal
     */
    TopicRuleDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicRuleDestinationConfiguration || (TopicRuleDestinationConfiguration = {}));
export var CreateTopicRuleDestinationRequest;
(function (CreateTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    CreateTopicRuleDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTopicRuleDestinationRequest || (CreateTopicRuleDestinationRequest = {}));
export var HttpUrlDestinationProperties;
(function (HttpUrlDestinationProperties) {
    /**
     * @internal
     */
    HttpUrlDestinationProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpUrlDestinationProperties || (HttpUrlDestinationProperties = {}));
export var TopicRuleDestinationStatus;
(function (TopicRuleDestinationStatus) {
    TopicRuleDestinationStatus["DELETING"] = "DELETING";
    TopicRuleDestinationStatus["DISABLED"] = "DISABLED";
    TopicRuleDestinationStatus["ENABLED"] = "ENABLED";
    TopicRuleDestinationStatus["ERROR"] = "ERROR";
    TopicRuleDestinationStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(TopicRuleDestinationStatus || (TopicRuleDestinationStatus = {}));
export var VpcDestinationProperties;
(function (VpcDestinationProperties) {
    /**
     * @internal
     */
    VpcDestinationProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcDestinationProperties || (VpcDestinationProperties = {}));
export var TopicRuleDestination;
(function (TopicRuleDestination) {
    /**
     * @internal
     */
    TopicRuleDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicRuleDestination || (TopicRuleDestination = {}));
export var CreateTopicRuleDestinationResponse;
(function (CreateTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    CreateTopicRuleDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTopicRuleDestinationResponse || (CreateTopicRuleDestinationResponse = {}));
export var DeleteAccountAuditConfigurationRequest;
(function (DeleteAccountAuditConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAccountAuditConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountAuditConfigurationRequest || (DeleteAccountAuditConfigurationRequest = {}));
export var DeleteAccountAuditConfigurationResponse;
(function (DeleteAccountAuditConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAccountAuditConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountAuditConfigurationResponse || (DeleteAccountAuditConfigurationResponse = {}));
export var DeleteAuditSuppressionRequest;
(function (DeleteAuditSuppressionRequest) {
    /**
     * @internal
     */
    DeleteAuditSuppressionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAuditSuppressionRequest || (DeleteAuditSuppressionRequest = {}));
export var DeleteAuditSuppressionResponse;
(function (DeleteAuditSuppressionResponse) {
    /**
     * @internal
     */
    DeleteAuditSuppressionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAuditSuppressionResponse || (DeleteAuditSuppressionResponse = {}));
export var DeleteAuthorizerRequest;
(function (DeleteAuthorizerRequest) {
    /**
     * @internal
     */
    DeleteAuthorizerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAuthorizerRequest || (DeleteAuthorizerRequest = {}));
export var DeleteAuthorizerResponse;
(function (DeleteAuthorizerResponse) {
    /**
     * @internal
     */
    DeleteAuthorizerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAuthorizerResponse || (DeleteAuthorizerResponse = {}));
export var DeleteConflictException;
(function (DeleteConflictException) {
    /**
     * @internal
     */
    DeleteConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConflictException || (DeleteConflictException = {}));
export var DeleteBillingGroupRequest;
(function (DeleteBillingGroupRequest) {
    /**
     * @internal
     */
    DeleteBillingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBillingGroupRequest || (DeleteBillingGroupRequest = {}));
export var DeleteBillingGroupResponse;
(function (DeleteBillingGroupResponse) {
    /**
     * @internal
     */
    DeleteBillingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBillingGroupResponse || (DeleteBillingGroupResponse = {}));
export var CertificateStateException;
(function (CertificateStateException) {
    /**
     * @internal
     */
    CertificateStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateStateException || (CertificateStateException = {}));
export var DeleteCACertificateRequest;
(function (DeleteCACertificateRequest) {
    /**
     * @internal
     */
    DeleteCACertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCACertificateRequest || (DeleteCACertificateRequest = {}));
export var DeleteCACertificateResponse;
(function (DeleteCACertificateResponse) {
    /**
     * @internal
     */
    DeleteCACertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCACertificateResponse || (DeleteCACertificateResponse = {}));
export var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
    /**
     * @internal
     */
    DeleteCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCertificateRequest || (DeleteCertificateRequest = {}));
export var DeleteCustomMetricRequest;
(function (DeleteCustomMetricRequest) {
    /**
     * @internal
     */
    DeleteCustomMetricRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomMetricRequest || (DeleteCustomMetricRequest = {}));
export var DeleteCustomMetricResponse;
(function (DeleteCustomMetricResponse) {
    /**
     * @internal
     */
    DeleteCustomMetricResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomMetricResponse || (DeleteCustomMetricResponse = {}));
export var DeleteDimensionRequest;
(function (DeleteDimensionRequest) {
    /**
     * @internal
     */
    DeleteDimensionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDimensionRequest || (DeleteDimensionRequest = {}));
export var DeleteDimensionResponse;
(function (DeleteDimensionResponse) {
    /**
     * @internal
     */
    DeleteDimensionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDimensionResponse || (DeleteDimensionResponse = {}));
export var DeleteDomainConfigurationRequest;
(function (DeleteDomainConfigurationRequest) {
    /**
     * @internal
     */
    DeleteDomainConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainConfigurationRequest || (DeleteDomainConfigurationRequest = {}));
export var DeleteDomainConfigurationResponse;
(function (DeleteDomainConfigurationResponse) {
    /**
     * @internal
     */
    DeleteDomainConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainConfigurationResponse || (DeleteDomainConfigurationResponse = {}));
export var DeleteDynamicThingGroupRequest;
(function (DeleteDynamicThingGroupRequest) {
    /**
     * @internal
     */
    DeleteDynamicThingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDynamicThingGroupRequest || (DeleteDynamicThingGroupRequest = {}));
export var DeleteDynamicThingGroupResponse;
(function (DeleteDynamicThingGroupResponse) {
    /**
     * @internal
     */
    DeleteDynamicThingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDynamicThingGroupResponse || (DeleteDynamicThingGroupResponse = {}));
export var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobRequest || (DeleteJobRequest = {}));
export var DeleteJobExecutionRequest;
(function (DeleteJobExecutionRequest) {
    /**
     * @internal
     */
    DeleteJobExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobExecutionRequest || (DeleteJobExecutionRequest = {}));
export var DeleteJobTemplateRequest;
(function (DeleteJobTemplateRequest) {
    /**
     * @internal
     */
    DeleteJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobTemplateRequest || (DeleteJobTemplateRequest = {}));
export var DeleteMitigationActionRequest;
(function (DeleteMitigationActionRequest) {
    /**
     * @internal
     */
    DeleteMitigationActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMitigationActionRequest || (DeleteMitigationActionRequest = {}));
export var DeleteMitigationActionResponse;
(function (DeleteMitigationActionResponse) {
    /**
     * @internal
     */
    DeleteMitigationActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMitigationActionResponse || (DeleteMitigationActionResponse = {}));
export var DeleteOTAUpdateRequest;
(function (DeleteOTAUpdateRequest) {
    /**
     * @internal
     */
    DeleteOTAUpdateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOTAUpdateRequest || (DeleteOTAUpdateRequest = {}));
export var DeleteOTAUpdateResponse;
(function (DeleteOTAUpdateResponse) {
    /**
     * @internal
     */
    DeleteOTAUpdateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOTAUpdateResponse || (DeleteOTAUpdateResponse = {}));
export var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyRequest || (DeletePolicyRequest = {}));
export var DeletePolicyVersionRequest;
(function (DeletePolicyVersionRequest) {
    /**
     * @internal
     */
    DeletePolicyVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyVersionRequest || (DeletePolicyVersionRequest = {}));
export var DeleteProvisioningTemplateRequest;
(function (DeleteProvisioningTemplateRequest) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProvisioningTemplateRequest || (DeleteProvisioningTemplateRequest = {}));
export var DeleteProvisioningTemplateResponse;
(function (DeleteProvisioningTemplateResponse) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProvisioningTemplateResponse || (DeleteProvisioningTemplateResponse = {}));
export var DeleteProvisioningTemplateVersionRequest;
(function (DeleteProvisioningTemplateVersionRequest) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProvisioningTemplateVersionRequest || (DeleteProvisioningTemplateVersionRequest = {}));
export var DeleteProvisioningTemplateVersionResponse;
(function (DeleteProvisioningTemplateVersionResponse) {
    /**
     * @internal
     */
    DeleteProvisioningTemplateVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProvisioningTemplateVersionResponse || (DeleteProvisioningTemplateVersionResponse = {}));
export var DeleteRegistrationCodeRequest;
(function (DeleteRegistrationCodeRequest) {
    /**
     * @internal
     */
    DeleteRegistrationCodeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegistrationCodeRequest || (DeleteRegistrationCodeRequest = {}));
export var DeleteRegistrationCodeResponse;
(function (DeleteRegistrationCodeResponse) {
    /**
     * @internal
     */
    DeleteRegistrationCodeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegistrationCodeResponse || (DeleteRegistrationCodeResponse = {}));
export var DeleteRoleAliasRequest;
(function (DeleteRoleAliasRequest) {
    /**
     * @internal
     */
    DeleteRoleAliasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRoleAliasRequest || (DeleteRoleAliasRequest = {}));
export var DeleteRoleAliasResponse;
(function (DeleteRoleAliasResponse) {
    /**
     * @internal
     */
    DeleteRoleAliasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRoleAliasResponse || (DeleteRoleAliasResponse = {}));
export var DeleteScheduledAuditRequest;
(function (DeleteScheduledAuditRequest) {
    /**
     * @internal
     */
    DeleteScheduledAuditRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduledAuditRequest || (DeleteScheduledAuditRequest = {}));
export var DeleteScheduledAuditResponse;
(function (DeleteScheduledAuditResponse) {
    /**
     * @internal
     */
    DeleteScheduledAuditResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduledAuditResponse || (DeleteScheduledAuditResponse = {}));
export var DeleteSecurityProfileRequest;
(function (DeleteSecurityProfileRequest) {
    /**
     * @internal
     */
    DeleteSecurityProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSecurityProfileRequest || (DeleteSecurityProfileRequest = {}));
export var DeleteSecurityProfileResponse;
(function (DeleteSecurityProfileResponse) {
    /**
     * @internal
     */
    DeleteSecurityProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSecurityProfileResponse || (DeleteSecurityProfileResponse = {}));
export var DeleteStreamRequest;
(function (DeleteStreamRequest) {
    /**
     * @internal
     */
    DeleteStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamRequest || (DeleteStreamRequest = {}));
export var DeleteStreamResponse;
(function (DeleteStreamResponse) {
    /**
     * @internal
     */
    DeleteStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamResponse || (DeleteStreamResponse = {}));
export var DeleteThingRequest;
(function (DeleteThingRequest) {
    /**
     * @internal
     */
    DeleteThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingRequest || (DeleteThingRequest = {}));
export var DeleteThingResponse;
(function (DeleteThingResponse) {
    /**
     * @internal
     */
    DeleteThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingResponse || (DeleteThingResponse = {}));
export var DeleteThingGroupRequest;
(function (DeleteThingGroupRequest) {
    /**
     * @internal
     */
    DeleteThingGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingGroupRequest || (DeleteThingGroupRequest = {}));
export var DeleteThingGroupResponse;
(function (DeleteThingGroupResponse) {
    /**
     * @internal
     */
    DeleteThingGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingGroupResponse || (DeleteThingGroupResponse = {}));
export var DeleteThingTypeRequest;
(function (DeleteThingTypeRequest) {
    /**
     * @internal
     */
    DeleteThingTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingTypeRequest || (DeleteThingTypeRequest = {}));
export var DeleteThingTypeResponse;
(function (DeleteThingTypeResponse) {
    /**
     * @internal
     */
    DeleteThingTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteThingTypeResponse || (DeleteThingTypeResponse = {}));
export var DeleteTopicRuleRequest;
(function (DeleteTopicRuleRequest) {
    /**
     * @internal
     */
    DeleteTopicRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTopicRuleRequest || (DeleteTopicRuleRequest = {}));
//# sourceMappingURL=models_0.js.map