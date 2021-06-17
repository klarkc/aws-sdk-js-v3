"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssessmentTemplateResponse = exports.CreateAssessmentTemplateRequest = exports.LimitExceededException = exports.LimitExceededErrorCode = exports.InvalidCrossAccountRoleException = exports.InvalidCrossAccountRoleErrorCode = exports.CreateAssessmentTargetResponse = exports.CreateAssessmentTargetRequest = exports.AssetType = exports.AssetAttributes = exports.Tag = exports.NetworkInterface = exports.SecurityGroup = exports.PrivateIp = exports.AssessmentTemplateFilter = exports.AssessmentTemplate = exports.AssessmentTargetFilter = exports.AssessmentTarget = exports.AssessmentRunInProgressException = exports.AssessmentRunFilter = exports.DurationRange = exports.TimestampRange = exports.AssessmentRunAgent = exports.TelemetryMetadata = exports.AssessmentRun = exports.AssessmentRunStateChange = exports.AssessmentRunState = exports.AssessmentRunNotification = exports.AssessmentRunNotificationSnsStatusCode = exports.InspectorEvent = exports.Severity = exports.AgentsAlreadyRunningAssessmentException = exports.AgentPreview = exports.AgentFilter = exports.AgentHealth = exports.AgentHealthCode = exports.AgentAlreadyRunningAssessment = exports.ServiceTemporarilyUnavailableException = exports.NoSuchEntityException = exports.NoSuchEntityErrorCode = exports.InvalidInputException = exports.InvalidInputErrorCode = exports.InternalException = exports.AddAttributesToFindingsResponse = exports.FailedItemDetails = exports.FailedItemErrorCode = exports.AddAttributesToFindingsRequest = exports.Attribute = exports.AccessDeniedException = exports.AccessDeniedErrorCode = void 0;
exports.ListAssessmentRunsResponse = exports.ListAssessmentRunsRequest = exports.ListAssessmentRunAgentsResponse = exports.ListAssessmentRunAgentsRequest = exports.GetTelemetryMetadataResponse = exports.GetTelemetryMetadataRequest = exports.GetExclusionsPreviewResponse = exports.PreviewStatus = exports.GetExclusionsPreviewRequest = exports.UnsupportedFeatureException = exports.GetAssessmentReportResponse = exports.ReportStatus = exports.GetAssessmentReportRequest = exports.ReportType = exports.ReportFileFormat = exports.FindingFilter = exports.ExclusionPreview = exports.EventSubscription = exports.DescribeRulesPackagesResponse = exports.RulesPackage = exports.DescribeRulesPackagesRequest = exports.DescribeResourceGroupsResponse = exports.ResourceGroup = exports.DescribeResourceGroupsRequest = exports.DescribeFindingsResponse = exports.Finding = exports.InspectorServiceAttributes = exports.DescribeFindingsRequest = exports.DescribeExclusionsResponse = exports.Exclusion = exports.Scope = exports.ScopeType = exports.DescribeExclusionsRequest = exports.Locale = exports.DescribeCrossAccountAccessRoleResponse = exports.DescribeAssessmentTemplatesResponse = exports.DescribeAssessmentTemplatesRequest = exports.DescribeAssessmentTargetsResponse = exports.DescribeAssessmentTargetsRequest = exports.DescribeAssessmentRunsResponse = exports.DescribeAssessmentRunsRequest = exports.DeleteAssessmentTemplateRequest = exports.DeleteAssessmentTargetRequest = exports.DeleteAssessmentRunRequest = exports.CreateResourceGroupResponse = exports.CreateResourceGroupRequest = exports.ResourceGroupTag = exports.PreviewGenerationInProgressException = exports.CreateExclusionsPreviewResponse = exports.CreateExclusionsPreviewRequest = void 0;
exports.UpdateAssessmentTargetRequest = exports.UnsubscribeFromEventRequest = exports.SubscribeToEventRequest = exports.StopAssessmentRunRequest = exports.StopAction = exports.StartAssessmentRunResponse = exports.StartAssessmentRunRequest = exports.SetTagsForResourceRequest = exports.RemoveAttributesFromFindingsResponse = exports.RemoveAttributesFromFindingsRequest = exports.RegisterCrossAccountAccessRoleRequest = exports.PreviewAgentsResponse = exports.PreviewAgentsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRulesPackagesResponse = exports.ListRulesPackagesRequest = exports.ListFindingsResponse = exports.ListFindingsRequest = exports.ListExclusionsResponse = exports.ListExclusionsRequest = exports.ListEventSubscriptionsResponse = exports.Subscription = exports.ListEventSubscriptionsRequest = exports.ListAssessmentTemplatesResponse = exports.ListAssessmentTemplatesRequest = exports.ListAssessmentTargetsResponse = exports.ListAssessmentTargetsRequest = void 0;
var AccessDeniedErrorCode;
(function (AccessDeniedErrorCode) {
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_RUN"] = "ACCESS_DENIED_TO_ASSESSMENT_RUN";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TARGET"] = "ACCESS_DENIED_TO_ASSESSMENT_TARGET";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE"] = "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_FINDING"] = "ACCESS_DENIED_TO_FINDING";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_IAM_ROLE"] = "ACCESS_DENIED_TO_IAM_ROLE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RESOURCE_GROUP"] = "ACCESS_DENIED_TO_RESOURCE_GROUP";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RULES_PACKAGE"] = "ACCESS_DENIED_TO_RULES_PACKAGE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_SNS_TOPIC"] = "ACCESS_DENIED_TO_SNS_TOPIC";
})(AccessDeniedErrorCode = exports.AccessDeniedErrorCode || (exports.AccessDeniedErrorCode = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AddAttributesToFindingsRequest;
(function (AddAttributesToFindingsRequest) {
    /**
     * @internal
     */
    AddAttributesToFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAttributesToFindingsRequest = exports.AddAttributesToFindingsRequest || (exports.AddAttributesToFindingsRequest = {}));
var FailedItemErrorCode;
(function (FailedItemErrorCode) {
    FailedItemErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    FailedItemErrorCode["DUPLICATE_ARN"] = "DUPLICATE_ARN";
    FailedItemErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    FailedItemErrorCode["INVALID_ARN"] = "INVALID_ARN";
    FailedItemErrorCode["ITEM_DOES_NOT_EXIST"] = "ITEM_DOES_NOT_EXIST";
    FailedItemErrorCode["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
})(FailedItemErrorCode = exports.FailedItemErrorCode || (exports.FailedItemErrorCode = {}));
var FailedItemDetails;
(function (FailedItemDetails) {
    /**
     * @internal
     */
    FailedItemDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedItemDetails = exports.FailedItemDetails || (exports.FailedItemDetails = {}));
var AddAttributesToFindingsResponse;
(function (AddAttributesToFindingsResponse) {
    /**
     * @internal
     */
    AddAttributesToFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAttributesToFindingsResponse = exports.AddAttributesToFindingsResponse || (exports.AddAttributesToFindingsResponse = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidInputErrorCode;
(function (InvalidInputErrorCode) {
    InvalidInputErrorCode["ASSESSMENT_TARGET_NAME_ALREADY_TAKEN"] = "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN";
    InvalidInputErrorCode["ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN"] = "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN";
    InvalidInputErrorCode["INVALID_AGENT_ID"] = "INVALID_AGENT_ID";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_ARN"] = "INVALID_ASSESSMENT_RUN_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_DURATION_RANGE"] = "INVALID_ASSESSMENT_RUN_DURATION_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_START_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_START_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_STATE"] = "INVALID_ASSESSMENT_RUN_STATE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_ARN"] = "INVALID_ASSESSMENT_TARGET_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_NAME"] = "INVALID_ASSESSMENT_TARGET_NAME";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_NAME_PATTERN"] = "INVALID_ASSESSMENT_TARGET_NAME_PATTERN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_ARN"] = "INVALID_ASSESSMENT_TEMPLATE_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_DURATION"] = "INVALID_ASSESSMENT_TEMPLATE_DURATION";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE"] = "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_NAME"] = "INVALID_ASSESSMENT_TEMPLATE_NAME";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN"] = "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN";
    InvalidInputErrorCode["INVALID_ATTRIBUTE"] = "INVALID_ATTRIBUTE";
    InvalidInputErrorCode["INVALID_AUTO_SCALING_GROUP"] = "INVALID_AUTO_SCALING_GROUP";
    InvalidInputErrorCode["INVALID_EVENT"] = "INVALID_EVENT";
    InvalidInputErrorCode["INVALID_FINDING_ARN"] = "INVALID_FINDING_ARN";
    InvalidInputErrorCode["INVALID_IAM_ROLE_ARN"] = "INVALID_IAM_ROLE_ARN";
    InvalidInputErrorCode["INVALID_LOCALE"] = "INVALID_LOCALE";
    InvalidInputErrorCode["INVALID_MAX_RESULTS"] = "INVALID_MAX_RESULTS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_AGENT_IDS"] = "INVALID_NUMBER_OF_AGENT_IDS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES"] = "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ATTRIBUTES"] = "INVALID_NUMBER_OF_ATTRIBUTES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_AUTO_SCALING_GROUPS"] = "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_FINDING_ARNS"] = "INVALID_NUMBER_OF_FINDING_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS"] = "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS"] = "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RULES_PACKAGE_ARNS"] = "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RULE_NAMES"] = "INVALID_NUMBER_OF_RULE_NAMES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_SEVERITIES"] = "INVALID_NUMBER_OF_SEVERITIES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_TAGS"] = "INVALID_NUMBER_OF_TAGS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_USER_ATTRIBUTES"] = "INVALID_NUMBER_OF_USER_ATTRIBUTES";
    InvalidInputErrorCode["INVALID_PAGINATION_TOKEN"] = "INVALID_PAGINATION_TOKEN";
    InvalidInputErrorCode["INVALID_RESOURCE_ARN"] = "INVALID_RESOURCE_ARN";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_ARN"] = "INVALID_RESOURCE_GROUP_ARN";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_TAG_KEY"] = "INVALID_RESOURCE_GROUP_TAG_KEY";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_TAG_VALUE"] = "INVALID_RESOURCE_GROUP_TAG_VALUE";
    InvalidInputErrorCode["INVALID_RULES_PACKAGE_ARN"] = "INVALID_RULES_PACKAGE_ARN";
    InvalidInputErrorCode["INVALID_RULE_NAME"] = "INVALID_RULE_NAME";
    InvalidInputErrorCode["INVALID_SEVERITY"] = "INVALID_SEVERITY";
    InvalidInputErrorCode["INVALID_SNS_TOPIC_ARN"] = "INVALID_SNS_TOPIC_ARN";
    InvalidInputErrorCode["INVALID_TAG"] = "INVALID_TAG";
    InvalidInputErrorCode["INVALID_TAG_KEY"] = "INVALID_TAG_KEY";
    InvalidInputErrorCode["INVALID_TAG_VALUE"] = "INVALID_TAG_VALUE";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE"] = "INVALID_USER_ATTRIBUTE";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE_KEY"] = "INVALID_USER_ATTRIBUTE_KEY";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE_VALUE"] = "INVALID_USER_ATTRIBUTE_VALUE";
})(InvalidInputErrorCode = exports.InvalidInputErrorCode || (exports.InvalidInputErrorCode = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var NoSuchEntityErrorCode;
(function (NoSuchEntityErrorCode) {
    NoSuchEntityErrorCode["ASSESSMENT_RUN_DOES_NOT_EXIST"] = "ASSESSMENT_RUN_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TARGET_DOES_NOT_EXIST"] = "ASSESSMENT_TARGET_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TEMPLATE_DOES_NOT_EXIST"] = "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["FINDING_DOES_NOT_EXIST"] = "FINDING_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["IAM_ROLE_DOES_NOT_EXIST"] = "IAM_ROLE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RESOURCE_GROUP_DOES_NOT_EXIST"] = "RESOURCE_GROUP_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RULES_PACKAGE_DOES_NOT_EXIST"] = "RULES_PACKAGE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["SNS_TOPIC_DOES_NOT_EXIST"] = "SNS_TOPIC_DOES_NOT_EXIST";
})(NoSuchEntityErrorCode = exports.NoSuchEntityErrorCode || (exports.NoSuchEntityErrorCode = {}));
var NoSuchEntityException;
(function (NoSuchEntityException) {
    /**
     * @internal
     */
    NoSuchEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchEntityException = exports.NoSuchEntityException || (exports.NoSuchEntityException = {}));
var ServiceTemporarilyUnavailableException;
(function (ServiceTemporarilyUnavailableException) {
    /**
     * @internal
     */
    ServiceTemporarilyUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceTemporarilyUnavailableException = exports.ServiceTemporarilyUnavailableException || (exports.ServiceTemporarilyUnavailableException = {}));
var AgentAlreadyRunningAssessment;
(function (AgentAlreadyRunningAssessment) {
    /**
     * @internal
     */
    AgentAlreadyRunningAssessment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentAlreadyRunningAssessment = exports.AgentAlreadyRunningAssessment || (exports.AgentAlreadyRunningAssessment = {}));
var AgentHealthCode;
(function (AgentHealthCode) {
    AgentHealthCode["IDLE"] = "IDLE";
    AgentHealthCode["RUNNING"] = "RUNNING";
    AgentHealthCode["SHUTDOWN"] = "SHUTDOWN";
    AgentHealthCode["THROTTLED"] = "THROTTLED";
    AgentHealthCode["UNHEALTHY"] = "UNHEALTHY";
    AgentHealthCode["UNKNOWN"] = "UNKNOWN";
})(AgentHealthCode = exports.AgentHealthCode || (exports.AgentHealthCode = {}));
var AgentHealth;
(function (AgentHealth) {
    AgentHealth["HEALTHY"] = "HEALTHY";
    AgentHealth["UNHEALTHY"] = "UNHEALTHY";
    AgentHealth["UNKNOWN"] = "UNKNOWN";
})(AgentHealth = exports.AgentHealth || (exports.AgentHealth = {}));
var AgentFilter;
(function (AgentFilter) {
    /**
     * @internal
     */
    AgentFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentFilter = exports.AgentFilter || (exports.AgentFilter = {}));
var AgentPreview;
(function (AgentPreview) {
    /**
     * @internal
     */
    AgentPreview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentPreview = exports.AgentPreview || (exports.AgentPreview = {}));
var AgentsAlreadyRunningAssessmentException;
(function (AgentsAlreadyRunningAssessmentException) {
    /**
     * @internal
     */
    AgentsAlreadyRunningAssessmentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentsAlreadyRunningAssessmentException = exports.AgentsAlreadyRunningAssessmentException || (exports.AgentsAlreadyRunningAssessmentException = {}));
var Severity;
(function (Severity) {
    Severity["HIGH"] = "High";
    Severity["INFORMATIONAL"] = "Informational";
    Severity["LOW"] = "Low";
    Severity["MEDIUM"] = "Medium";
    Severity["UNDEFINED"] = "Undefined";
})(Severity = exports.Severity || (exports.Severity = {}));
var InspectorEvent;
(function (InspectorEvent) {
    InspectorEvent["ASSESSMENT_RUN_COMPLETED"] = "ASSESSMENT_RUN_COMPLETED";
    InspectorEvent["ASSESSMENT_RUN_STARTED"] = "ASSESSMENT_RUN_STARTED";
    InspectorEvent["ASSESSMENT_RUN_STATE_CHANGED"] = "ASSESSMENT_RUN_STATE_CHANGED";
    InspectorEvent["FINDING_REPORTED"] = "FINDING_REPORTED";
    InspectorEvent["OTHER"] = "OTHER";
})(InspectorEvent = exports.InspectorEvent || (exports.InspectorEvent = {}));
var AssessmentRunNotificationSnsStatusCode;
(function (AssessmentRunNotificationSnsStatusCode) {
    AssessmentRunNotificationSnsStatusCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    AssessmentRunNotificationSnsStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    AssessmentRunNotificationSnsStatusCode["SUCCESS"] = "SUCCESS";
    AssessmentRunNotificationSnsStatusCode["TOPIC_DOES_NOT_EXIST"] = "TOPIC_DOES_NOT_EXIST";
})(AssessmentRunNotificationSnsStatusCode = exports.AssessmentRunNotificationSnsStatusCode || (exports.AssessmentRunNotificationSnsStatusCode = {}));
var AssessmentRunNotification;
(function (AssessmentRunNotification) {
    /**
     * @internal
     */
    AssessmentRunNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRunNotification = exports.AssessmentRunNotification || (exports.AssessmentRunNotification = {}));
var AssessmentRunState;
(function (AssessmentRunState) {
    AssessmentRunState["CANCELED"] = "CANCELED";
    AssessmentRunState["COLLECTING_DATA"] = "COLLECTING_DATA";
    AssessmentRunState["COMPLETED"] = "COMPLETED";
    AssessmentRunState["COMPLETED_WITH_ERRORS"] = "COMPLETED_WITH_ERRORS";
    AssessmentRunState["CREATED"] = "CREATED";
    AssessmentRunState["DATA_COLLECTED"] = "DATA_COLLECTED";
    AssessmentRunState["ERROR"] = "ERROR";
    AssessmentRunState["EVALUATING_RULES"] = "EVALUATING_RULES";
    AssessmentRunState["FAILED"] = "FAILED";
    AssessmentRunState["START_DATA_COLLECTION_IN_PROGRESS"] = "START_DATA_COLLECTION_IN_PROGRESS";
    AssessmentRunState["START_DATA_COLLECTION_PENDING"] = "START_DATA_COLLECTION_PENDING";
    AssessmentRunState["START_EVALUATING_RULES_PENDING"] = "START_EVALUATING_RULES_PENDING";
    AssessmentRunState["STOP_DATA_COLLECTION_PENDING"] = "STOP_DATA_COLLECTION_PENDING";
})(AssessmentRunState = exports.AssessmentRunState || (exports.AssessmentRunState = {}));
var AssessmentRunStateChange;
(function (AssessmentRunStateChange) {
    /**
     * @internal
     */
    AssessmentRunStateChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRunStateChange = exports.AssessmentRunStateChange || (exports.AssessmentRunStateChange = {}));
var AssessmentRun;
(function (AssessmentRun) {
    /**
     * @internal
     */
    AssessmentRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRun = exports.AssessmentRun || (exports.AssessmentRun = {}));
var TelemetryMetadata;
(function (TelemetryMetadata) {
    /**
     * @internal
     */
    TelemetryMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TelemetryMetadata = exports.TelemetryMetadata || (exports.TelemetryMetadata = {}));
var AssessmentRunAgent;
(function (AssessmentRunAgent) {
    /**
     * @internal
     */
    AssessmentRunAgent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRunAgent = exports.AssessmentRunAgent || (exports.AssessmentRunAgent = {}));
var TimestampRange;
(function (TimestampRange) {
    /**
     * @internal
     */
    TimestampRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestampRange = exports.TimestampRange || (exports.TimestampRange = {}));
var DurationRange;
(function (DurationRange) {
    /**
     * @internal
     */
    DurationRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DurationRange = exports.DurationRange || (exports.DurationRange = {}));
var AssessmentRunFilter;
(function (AssessmentRunFilter) {
    /**
     * @internal
     */
    AssessmentRunFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRunFilter = exports.AssessmentRunFilter || (exports.AssessmentRunFilter = {}));
var AssessmentRunInProgressException;
(function (AssessmentRunInProgressException) {
    /**
     * @internal
     */
    AssessmentRunInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentRunInProgressException = exports.AssessmentRunInProgressException || (exports.AssessmentRunInProgressException = {}));
var AssessmentTarget;
(function (AssessmentTarget) {
    /**
     * @internal
     */
    AssessmentTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentTarget = exports.AssessmentTarget || (exports.AssessmentTarget = {}));
var AssessmentTargetFilter;
(function (AssessmentTargetFilter) {
    /**
     * @internal
     */
    AssessmentTargetFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentTargetFilter = exports.AssessmentTargetFilter || (exports.AssessmentTargetFilter = {}));
var AssessmentTemplate;
(function (AssessmentTemplate) {
    /**
     * @internal
     */
    AssessmentTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentTemplate = exports.AssessmentTemplate || (exports.AssessmentTemplate = {}));
var AssessmentTemplateFilter;
(function (AssessmentTemplateFilter) {
    /**
     * @internal
     */
    AssessmentTemplateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssessmentTemplateFilter = exports.AssessmentTemplateFilter || (exports.AssessmentTemplateFilter = {}));
var PrivateIp;
(function (PrivateIp) {
    /**
     * @internal
     */
    PrivateIp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateIp = exports.PrivateIp || (exports.PrivateIp = {}));
var SecurityGroup;
(function (SecurityGroup) {
    /**
     * @internal
     */
    SecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroup = exports.SecurityGroup || (exports.SecurityGroup = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AssetAttributes;
(function (AssetAttributes) {
    /**
     * @internal
     */
    AssetAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetAttributes = exports.AssetAttributes || (exports.AssetAttributes = {}));
var AssetType;
(function (AssetType) {
    AssetType["EC2_INSTANCE"] = "ec2-instance";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var CreateAssessmentTargetRequest;
(function (CreateAssessmentTargetRequest) {
    /**
     * @internal
     */
    CreateAssessmentTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssessmentTargetRequest = exports.CreateAssessmentTargetRequest || (exports.CreateAssessmentTargetRequest = {}));
var CreateAssessmentTargetResponse;
(function (CreateAssessmentTargetResponse) {
    /**
     * @internal
     */
    CreateAssessmentTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssessmentTargetResponse = exports.CreateAssessmentTargetResponse || (exports.CreateAssessmentTargetResponse = {}));
var InvalidCrossAccountRoleErrorCode;
(function (InvalidCrossAccountRoleErrorCode) {
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP"] = "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP";
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_HAVE_CORRECT_POLICY"] = "ROLE_DOES_NOT_HAVE_CORRECT_POLICY";
})(InvalidCrossAccountRoleErrorCode = exports.InvalidCrossAccountRoleErrorCode || (exports.InvalidCrossAccountRoleErrorCode = {}));
var InvalidCrossAccountRoleException;
(function (InvalidCrossAccountRoleException) {
    /**
     * @internal
     */
    InvalidCrossAccountRoleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCrossAccountRoleException = exports.InvalidCrossAccountRoleException || (exports.InvalidCrossAccountRoleException = {}));
var LimitExceededErrorCode;
(function (LimitExceededErrorCode) {
    LimitExceededErrorCode["ASSESSMENT_RUN_LIMIT_EXCEEDED"] = "ASSESSMENT_RUN_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TARGET_LIMIT_EXCEEDED"] = "ASSESSMENT_TARGET_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED"] = "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED";
    LimitExceededErrorCode["EVENT_SUBSCRIPTION_LIMIT_EXCEEDED"] = "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED";
    LimitExceededErrorCode["RESOURCE_GROUP_LIMIT_EXCEEDED"] = "RESOURCE_GROUP_LIMIT_EXCEEDED";
})(LimitExceededErrorCode = exports.LimitExceededErrorCode || (exports.LimitExceededErrorCode = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateAssessmentTemplateRequest;
(function (CreateAssessmentTemplateRequest) {
    /**
     * @internal
     */
    CreateAssessmentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssessmentTemplateRequest = exports.CreateAssessmentTemplateRequest || (exports.CreateAssessmentTemplateRequest = {}));
var CreateAssessmentTemplateResponse;
(function (CreateAssessmentTemplateResponse) {
    /**
     * @internal
     */
    CreateAssessmentTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssessmentTemplateResponse = exports.CreateAssessmentTemplateResponse || (exports.CreateAssessmentTemplateResponse = {}));
var CreateExclusionsPreviewRequest;
(function (CreateExclusionsPreviewRequest) {
    /**
     * @internal
     */
    CreateExclusionsPreviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExclusionsPreviewRequest = exports.CreateExclusionsPreviewRequest || (exports.CreateExclusionsPreviewRequest = {}));
var CreateExclusionsPreviewResponse;
(function (CreateExclusionsPreviewResponse) {
    /**
     * @internal
     */
    CreateExclusionsPreviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExclusionsPreviewResponse = exports.CreateExclusionsPreviewResponse || (exports.CreateExclusionsPreviewResponse = {}));
var PreviewGenerationInProgressException;
(function (PreviewGenerationInProgressException) {
    /**
     * @internal
     */
    PreviewGenerationInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreviewGenerationInProgressException = exports.PreviewGenerationInProgressException || (exports.PreviewGenerationInProgressException = {}));
var ResourceGroupTag;
(function (ResourceGroupTag) {
    /**
     * @internal
     */
    ResourceGroupTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceGroupTag = exports.ResourceGroupTag || (exports.ResourceGroupTag = {}));
var CreateResourceGroupRequest;
(function (CreateResourceGroupRequest) {
    /**
     * @internal
     */
    CreateResourceGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceGroupRequest = exports.CreateResourceGroupRequest || (exports.CreateResourceGroupRequest = {}));
var CreateResourceGroupResponse;
(function (CreateResourceGroupResponse) {
    /**
     * @internal
     */
    CreateResourceGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceGroupResponse = exports.CreateResourceGroupResponse || (exports.CreateResourceGroupResponse = {}));
var DeleteAssessmentRunRequest;
(function (DeleteAssessmentRunRequest) {
    /**
     * @internal
     */
    DeleteAssessmentRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssessmentRunRequest = exports.DeleteAssessmentRunRequest || (exports.DeleteAssessmentRunRequest = {}));
var DeleteAssessmentTargetRequest;
(function (DeleteAssessmentTargetRequest) {
    /**
     * @internal
     */
    DeleteAssessmentTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssessmentTargetRequest = exports.DeleteAssessmentTargetRequest || (exports.DeleteAssessmentTargetRequest = {}));
var DeleteAssessmentTemplateRequest;
(function (DeleteAssessmentTemplateRequest) {
    /**
     * @internal
     */
    DeleteAssessmentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssessmentTemplateRequest = exports.DeleteAssessmentTemplateRequest || (exports.DeleteAssessmentTemplateRequest = {}));
var DescribeAssessmentRunsRequest;
(function (DescribeAssessmentRunsRequest) {
    /**
     * @internal
     */
    DescribeAssessmentRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentRunsRequest = exports.DescribeAssessmentRunsRequest || (exports.DescribeAssessmentRunsRequest = {}));
var DescribeAssessmentRunsResponse;
(function (DescribeAssessmentRunsResponse) {
    /**
     * @internal
     */
    DescribeAssessmentRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentRunsResponse = exports.DescribeAssessmentRunsResponse || (exports.DescribeAssessmentRunsResponse = {}));
var DescribeAssessmentTargetsRequest;
(function (DescribeAssessmentTargetsRequest) {
    /**
     * @internal
     */
    DescribeAssessmentTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentTargetsRequest = exports.DescribeAssessmentTargetsRequest || (exports.DescribeAssessmentTargetsRequest = {}));
var DescribeAssessmentTargetsResponse;
(function (DescribeAssessmentTargetsResponse) {
    /**
     * @internal
     */
    DescribeAssessmentTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentTargetsResponse = exports.DescribeAssessmentTargetsResponse || (exports.DescribeAssessmentTargetsResponse = {}));
var DescribeAssessmentTemplatesRequest;
(function (DescribeAssessmentTemplatesRequest) {
    /**
     * @internal
     */
    DescribeAssessmentTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentTemplatesRequest = exports.DescribeAssessmentTemplatesRequest || (exports.DescribeAssessmentTemplatesRequest = {}));
var DescribeAssessmentTemplatesResponse;
(function (DescribeAssessmentTemplatesResponse) {
    /**
     * @internal
     */
    DescribeAssessmentTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssessmentTemplatesResponse = exports.DescribeAssessmentTemplatesResponse || (exports.DescribeAssessmentTemplatesResponse = {}));
var DescribeCrossAccountAccessRoleResponse;
(function (DescribeCrossAccountAccessRoleResponse) {
    /**
     * @internal
     */
    DescribeCrossAccountAccessRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCrossAccountAccessRoleResponse = exports.DescribeCrossAccountAccessRoleResponse || (exports.DescribeCrossAccountAccessRoleResponse = {}));
var Locale;
(function (Locale) {
    Locale["EN_US"] = "EN_US";
})(Locale = exports.Locale || (exports.Locale = {}));
var DescribeExclusionsRequest;
(function (DescribeExclusionsRequest) {
    /**
     * @internal
     */
    DescribeExclusionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExclusionsRequest = exports.DescribeExclusionsRequest || (exports.DescribeExclusionsRequest = {}));
var ScopeType;
(function (ScopeType) {
    ScopeType["INSTANCE_ID"] = "INSTANCE_ID";
    ScopeType["RULES_PACKAGE_ARN"] = "RULES_PACKAGE_ARN";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
var Scope;
(function (Scope) {
    /**
     * @internal
     */
    Scope.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scope = exports.Scope || (exports.Scope = {}));
var Exclusion;
(function (Exclusion) {
    /**
     * @internal
     */
    Exclusion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Exclusion = exports.Exclusion || (exports.Exclusion = {}));
var DescribeExclusionsResponse;
(function (DescribeExclusionsResponse) {
    /**
     * @internal
     */
    DescribeExclusionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExclusionsResponse = exports.DescribeExclusionsResponse || (exports.DescribeExclusionsResponse = {}));
var DescribeFindingsRequest;
(function (DescribeFindingsRequest) {
    /**
     * @internal
     */
    DescribeFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFindingsRequest = exports.DescribeFindingsRequest || (exports.DescribeFindingsRequest = {}));
var InspectorServiceAttributes;
(function (InspectorServiceAttributes) {
    /**
     * @internal
     */
    InspectorServiceAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InspectorServiceAttributes = exports.InspectorServiceAttributes || (exports.InspectorServiceAttributes = {}));
var Finding;
(function (Finding) {
    /**
     * @internal
     */
    Finding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Finding = exports.Finding || (exports.Finding = {}));
var DescribeFindingsResponse;
(function (DescribeFindingsResponse) {
    /**
     * @internal
     */
    DescribeFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFindingsResponse = exports.DescribeFindingsResponse || (exports.DescribeFindingsResponse = {}));
var DescribeResourceGroupsRequest;
(function (DescribeResourceGroupsRequest) {
    /**
     * @internal
     */
    DescribeResourceGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceGroupsRequest = exports.DescribeResourceGroupsRequest || (exports.DescribeResourceGroupsRequest = {}));
var ResourceGroup;
(function (ResourceGroup) {
    /**
     * @internal
     */
    ResourceGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceGroup = exports.ResourceGroup || (exports.ResourceGroup = {}));
var DescribeResourceGroupsResponse;
(function (DescribeResourceGroupsResponse) {
    /**
     * @internal
     */
    DescribeResourceGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceGroupsResponse = exports.DescribeResourceGroupsResponse || (exports.DescribeResourceGroupsResponse = {}));
var DescribeRulesPackagesRequest;
(function (DescribeRulesPackagesRequest) {
    /**
     * @internal
     */
    DescribeRulesPackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRulesPackagesRequest = exports.DescribeRulesPackagesRequest || (exports.DescribeRulesPackagesRequest = {}));
var RulesPackage;
(function (RulesPackage) {
    /**
     * @internal
     */
    RulesPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RulesPackage = exports.RulesPackage || (exports.RulesPackage = {}));
var DescribeRulesPackagesResponse;
(function (DescribeRulesPackagesResponse) {
    /**
     * @internal
     */
    DescribeRulesPackagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRulesPackagesResponse = exports.DescribeRulesPackagesResponse || (exports.DescribeRulesPackagesResponse = {}));
var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscription = exports.EventSubscription || (exports.EventSubscription = {}));
var ExclusionPreview;
(function (ExclusionPreview) {
    /**
     * @internal
     */
    ExclusionPreview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExclusionPreview = exports.ExclusionPreview || (exports.ExclusionPreview = {}));
var FindingFilter;
(function (FindingFilter) {
    /**
     * @internal
     */
    FindingFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingFilter = exports.FindingFilter || (exports.FindingFilter = {}));
var ReportFileFormat;
(function (ReportFileFormat) {
    ReportFileFormat["HTML"] = "HTML";
    ReportFileFormat["PDF"] = "PDF";
})(ReportFileFormat = exports.ReportFileFormat || (exports.ReportFileFormat = {}));
var ReportType;
(function (ReportType) {
    ReportType["FINDING"] = "FINDING";
    ReportType["FULL"] = "FULL";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var GetAssessmentReportRequest;
(function (GetAssessmentReportRequest) {
    /**
     * @internal
     */
    GetAssessmentReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssessmentReportRequest = exports.GetAssessmentReportRequest || (exports.GetAssessmentReportRequest = {}));
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["COMPLETED"] = "COMPLETED";
    ReportStatus["FAILED"] = "FAILED";
    ReportStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(ReportStatus = exports.ReportStatus || (exports.ReportStatus = {}));
var GetAssessmentReportResponse;
(function (GetAssessmentReportResponse) {
    /**
     * @internal
     */
    GetAssessmentReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssessmentReportResponse = exports.GetAssessmentReportResponse || (exports.GetAssessmentReportResponse = {}));
var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    /**
     * @internal
     */
    UnsupportedFeatureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedFeatureException = exports.UnsupportedFeatureException || (exports.UnsupportedFeatureException = {}));
var GetExclusionsPreviewRequest;
(function (GetExclusionsPreviewRequest) {
    /**
     * @internal
     */
    GetExclusionsPreviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExclusionsPreviewRequest = exports.GetExclusionsPreviewRequest || (exports.GetExclusionsPreviewRequest = {}));
var PreviewStatus;
(function (PreviewStatus) {
    PreviewStatus["COMPLETED"] = "COMPLETED";
    PreviewStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(PreviewStatus = exports.PreviewStatus || (exports.PreviewStatus = {}));
var GetExclusionsPreviewResponse;
(function (GetExclusionsPreviewResponse) {
    /**
     * @internal
     */
    GetExclusionsPreviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExclusionsPreviewResponse = exports.GetExclusionsPreviewResponse || (exports.GetExclusionsPreviewResponse = {}));
var GetTelemetryMetadataRequest;
(function (GetTelemetryMetadataRequest) {
    /**
     * @internal
     */
    GetTelemetryMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTelemetryMetadataRequest = exports.GetTelemetryMetadataRequest || (exports.GetTelemetryMetadataRequest = {}));
var GetTelemetryMetadataResponse;
(function (GetTelemetryMetadataResponse) {
    /**
     * @internal
     */
    GetTelemetryMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTelemetryMetadataResponse = exports.GetTelemetryMetadataResponse || (exports.GetTelemetryMetadataResponse = {}));
var ListAssessmentRunAgentsRequest;
(function (ListAssessmentRunAgentsRequest) {
    /**
     * @internal
     */
    ListAssessmentRunAgentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentRunAgentsRequest = exports.ListAssessmentRunAgentsRequest || (exports.ListAssessmentRunAgentsRequest = {}));
var ListAssessmentRunAgentsResponse;
(function (ListAssessmentRunAgentsResponse) {
    /**
     * @internal
     */
    ListAssessmentRunAgentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentRunAgentsResponse = exports.ListAssessmentRunAgentsResponse || (exports.ListAssessmentRunAgentsResponse = {}));
var ListAssessmentRunsRequest;
(function (ListAssessmentRunsRequest) {
    /**
     * @internal
     */
    ListAssessmentRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentRunsRequest = exports.ListAssessmentRunsRequest || (exports.ListAssessmentRunsRequest = {}));
var ListAssessmentRunsResponse;
(function (ListAssessmentRunsResponse) {
    /**
     * @internal
     */
    ListAssessmentRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentRunsResponse = exports.ListAssessmentRunsResponse || (exports.ListAssessmentRunsResponse = {}));
var ListAssessmentTargetsRequest;
(function (ListAssessmentTargetsRequest) {
    /**
     * @internal
     */
    ListAssessmentTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentTargetsRequest = exports.ListAssessmentTargetsRequest || (exports.ListAssessmentTargetsRequest = {}));
var ListAssessmentTargetsResponse;
(function (ListAssessmentTargetsResponse) {
    /**
     * @internal
     */
    ListAssessmentTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentTargetsResponse = exports.ListAssessmentTargetsResponse || (exports.ListAssessmentTargetsResponse = {}));
var ListAssessmentTemplatesRequest;
(function (ListAssessmentTemplatesRequest) {
    /**
     * @internal
     */
    ListAssessmentTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentTemplatesRequest = exports.ListAssessmentTemplatesRequest || (exports.ListAssessmentTemplatesRequest = {}));
var ListAssessmentTemplatesResponse;
(function (ListAssessmentTemplatesResponse) {
    /**
     * @internal
     */
    ListAssessmentTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssessmentTemplatesResponse = exports.ListAssessmentTemplatesResponse || (exports.ListAssessmentTemplatesResponse = {}));
var ListEventSubscriptionsRequest;
(function (ListEventSubscriptionsRequest) {
    /**
     * @internal
     */
    ListEventSubscriptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSubscriptionsRequest = exports.ListEventSubscriptionsRequest || (exports.ListEventSubscriptionsRequest = {}));
var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var ListEventSubscriptionsResponse;
(function (ListEventSubscriptionsResponse) {
    /**
     * @internal
     */
    ListEventSubscriptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSubscriptionsResponse = exports.ListEventSubscriptionsResponse || (exports.ListEventSubscriptionsResponse = {}));
var ListExclusionsRequest;
(function (ListExclusionsRequest) {
    /**
     * @internal
     */
    ListExclusionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExclusionsRequest = exports.ListExclusionsRequest || (exports.ListExclusionsRequest = {}));
var ListExclusionsResponse;
(function (ListExclusionsResponse) {
    /**
     * @internal
     */
    ListExclusionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExclusionsResponse = exports.ListExclusionsResponse || (exports.ListExclusionsResponse = {}));
var ListFindingsRequest;
(function (ListFindingsRequest) {
    /**
     * @internal
     */
    ListFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsRequest = exports.ListFindingsRequest || (exports.ListFindingsRequest = {}));
var ListFindingsResponse;
(function (ListFindingsResponse) {
    /**
     * @internal
     */
    ListFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsResponse = exports.ListFindingsResponse || (exports.ListFindingsResponse = {}));
var ListRulesPackagesRequest;
(function (ListRulesPackagesRequest) {
    /**
     * @internal
     */
    ListRulesPackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesPackagesRequest = exports.ListRulesPackagesRequest || (exports.ListRulesPackagesRequest = {}));
var ListRulesPackagesResponse;
(function (ListRulesPackagesResponse) {
    /**
     * @internal
     */
    ListRulesPackagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesPackagesResponse = exports.ListRulesPackagesResponse || (exports.ListRulesPackagesResponse = {}));
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
var PreviewAgentsRequest;
(function (PreviewAgentsRequest) {
    /**
     * @internal
     */
    PreviewAgentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreviewAgentsRequest = exports.PreviewAgentsRequest || (exports.PreviewAgentsRequest = {}));
var PreviewAgentsResponse;
(function (PreviewAgentsResponse) {
    /**
     * @internal
     */
    PreviewAgentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreviewAgentsResponse = exports.PreviewAgentsResponse || (exports.PreviewAgentsResponse = {}));
var RegisterCrossAccountAccessRoleRequest;
(function (RegisterCrossAccountAccessRoleRequest) {
    /**
     * @internal
     */
    RegisterCrossAccountAccessRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCrossAccountAccessRoleRequest = exports.RegisterCrossAccountAccessRoleRequest || (exports.RegisterCrossAccountAccessRoleRequest = {}));
var RemoveAttributesFromFindingsRequest;
(function (RemoveAttributesFromFindingsRequest) {
    /**
     * @internal
     */
    RemoveAttributesFromFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAttributesFromFindingsRequest = exports.RemoveAttributesFromFindingsRequest || (exports.RemoveAttributesFromFindingsRequest = {}));
var RemoveAttributesFromFindingsResponse;
(function (RemoveAttributesFromFindingsResponse) {
    /**
     * @internal
     */
    RemoveAttributesFromFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAttributesFromFindingsResponse = exports.RemoveAttributesFromFindingsResponse || (exports.RemoveAttributesFromFindingsResponse = {}));
var SetTagsForResourceRequest;
(function (SetTagsForResourceRequest) {
    /**
     * @internal
     */
    SetTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTagsForResourceRequest = exports.SetTagsForResourceRequest || (exports.SetTagsForResourceRequest = {}));
var StartAssessmentRunRequest;
(function (StartAssessmentRunRequest) {
    /**
     * @internal
     */
    StartAssessmentRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAssessmentRunRequest = exports.StartAssessmentRunRequest || (exports.StartAssessmentRunRequest = {}));
var StartAssessmentRunResponse;
(function (StartAssessmentRunResponse) {
    /**
     * @internal
     */
    StartAssessmentRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAssessmentRunResponse = exports.StartAssessmentRunResponse || (exports.StartAssessmentRunResponse = {}));
var StopAction;
(function (StopAction) {
    StopAction["SKIP_EVALUATION"] = "SKIP_EVALUATION";
    StopAction["START_EVALUATION"] = "START_EVALUATION";
})(StopAction = exports.StopAction || (exports.StopAction = {}));
var StopAssessmentRunRequest;
(function (StopAssessmentRunRequest) {
    /**
     * @internal
     */
    StopAssessmentRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAssessmentRunRequest = exports.StopAssessmentRunRequest || (exports.StopAssessmentRunRequest = {}));
var SubscribeToEventRequest;
(function (SubscribeToEventRequest) {
    /**
     * @internal
     */
    SubscribeToEventRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeToEventRequest = exports.SubscribeToEventRequest || (exports.SubscribeToEventRequest = {}));
var UnsubscribeFromEventRequest;
(function (UnsubscribeFromEventRequest) {
    /**
     * @internal
     */
    UnsubscribeFromEventRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsubscribeFromEventRequest = exports.UnsubscribeFromEventRequest || (exports.UnsubscribeFromEventRequest = {}));
var UpdateAssessmentTargetRequest;
(function (UpdateAssessmentTargetRequest) {
    /**
     * @internal
     */
    UpdateAssessmentTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssessmentTargetRequest = exports.UpdateAssessmentTargetRequest || (exports.UpdateAssessmentTargetRequest = {}));
//# sourceMappingURL=models_0.js.map