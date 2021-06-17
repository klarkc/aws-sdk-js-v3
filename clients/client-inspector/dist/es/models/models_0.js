import { __assign } from "tslib";
export var AccessDeniedErrorCode;
(function (AccessDeniedErrorCode) {
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_RUN"] = "ACCESS_DENIED_TO_ASSESSMENT_RUN";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TARGET"] = "ACCESS_DENIED_TO_ASSESSMENT_TARGET";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE"] = "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_FINDING"] = "ACCESS_DENIED_TO_FINDING";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_IAM_ROLE"] = "ACCESS_DENIED_TO_IAM_ROLE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RESOURCE_GROUP"] = "ACCESS_DENIED_TO_RESOURCE_GROUP";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RULES_PACKAGE"] = "ACCESS_DENIED_TO_RULES_PACKAGE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_SNS_TOPIC"] = "ACCESS_DENIED_TO_SNS_TOPIC";
})(AccessDeniedErrorCode || (AccessDeniedErrorCode = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var AddAttributesToFindingsRequest;
(function (AddAttributesToFindingsRequest) {
    /**
     * @internal
     */
    AddAttributesToFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddAttributesToFindingsRequest || (AddAttributesToFindingsRequest = {}));
export var FailedItemErrorCode;
(function (FailedItemErrorCode) {
    FailedItemErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    FailedItemErrorCode["DUPLICATE_ARN"] = "DUPLICATE_ARN";
    FailedItemErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    FailedItemErrorCode["INVALID_ARN"] = "INVALID_ARN";
    FailedItemErrorCode["ITEM_DOES_NOT_EXIST"] = "ITEM_DOES_NOT_EXIST";
    FailedItemErrorCode["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
})(FailedItemErrorCode || (FailedItemErrorCode = {}));
export var FailedItemDetails;
(function (FailedItemDetails) {
    /**
     * @internal
     */
    FailedItemDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedItemDetails || (FailedItemDetails = {}));
export var AddAttributesToFindingsResponse;
(function (AddAttributesToFindingsResponse) {
    /**
     * @internal
     */
    AddAttributesToFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddAttributesToFindingsResponse || (AddAttributesToFindingsResponse = {}));
export var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalException || (InternalException = {}));
export var InvalidInputErrorCode;
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
})(InvalidInputErrorCode || (InvalidInputErrorCode = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var NoSuchEntityErrorCode;
(function (NoSuchEntityErrorCode) {
    NoSuchEntityErrorCode["ASSESSMENT_RUN_DOES_NOT_EXIST"] = "ASSESSMENT_RUN_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TARGET_DOES_NOT_EXIST"] = "ASSESSMENT_TARGET_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TEMPLATE_DOES_NOT_EXIST"] = "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["FINDING_DOES_NOT_EXIST"] = "FINDING_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["IAM_ROLE_DOES_NOT_EXIST"] = "IAM_ROLE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RESOURCE_GROUP_DOES_NOT_EXIST"] = "RESOURCE_GROUP_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RULES_PACKAGE_DOES_NOT_EXIST"] = "RULES_PACKAGE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["SNS_TOPIC_DOES_NOT_EXIST"] = "SNS_TOPIC_DOES_NOT_EXIST";
})(NoSuchEntityErrorCode || (NoSuchEntityErrorCode = {}));
export var NoSuchEntityException;
(function (NoSuchEntityException) {
    /**
     * @internal
     */
    NoSuchEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchEntityException || (NoSuchEntityException = {}));
export var ServiceTemporarilyUnavailableException;
(function (ServiceTemporarilyUnavailableException) {
    /**
     * @internal
     */
    ServiceTemporarilyUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceTemporarilyUnavailableException || (ServiceTemporarilyUnavailableException = {}));
export var AgentAlreadyRunningAssessment;
(function (AgentAlreadyRunningAssessment) {
    /**
     * @internal
     */
    AgentAlreadyRunningAssessment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentAlreadyRunningAssessment || (AgentAlreadyRunningAssessment = {}));
export var AgentHealthCode;
(function (AgentHealthCode) {
    AgentHealthCode["IDLE"] = "IDLE";
    AgentHealthCode["RUNNING"] = "RUNNING";
    AgentHealthCode["SHUTDOWN"] = "SHUTDOWN";
    AgentHealthCode["THROTTLED"] = "THROTTLED";
    AgentHealthCode["UNHEALTHY"] = "UNHEALTHY";
    AgentHealthCode["UNKNOWN"] = "UNKNOWN";
})(AgentHealthCode || (AgentHealthCode = {}));
export var AgentHealth;
(function (AgentHealth) {
    AgentHealth["HEALTHY"] = "HEALTHY";
    AgentHealth["UNHEALTHY"] = "UNHEALTHY";
    AgentHealth["UNKNOWN"] = "UNKNOWN";
})(AgentHealth || (AgentHealth = {}));
export var AgentFilter;
(function (AgentFilter) {
    /**
     * @internal
     */
    AgentFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentFilter || (AgentFilter = {}));
export var AgentPreview;
(function (AgentPreview) {
    /**
     * @internal
     */
    AgentPreview.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentPreview || (AgentPreview = {}));
export var AgentsAlreadyRunningAssessmentException;
(function (AgentsAlreadyRunningAssessmentException) {
    /**
     * @internal
     */
    AgentsAlreadyRunningAssessmentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentsAlreadyRunningAssessmentException || (AgentsAlreadyRunningAssessmentException = {}));
export var Severity;
(function (Severity) {
    Severity["HIGH"] = "High";
    Severity["INFORMATIONAL"] = "Informational";
    Severity["LOW"] = "Low";
    Severity["MEDIUM"] = "Medium";
    Severity["UNDEFINED"] = "Undefined";
})(Severity || (Severity = {}));
export var InspectorEvent;
(function (InspectorEvent) {
    InspectorEvent["ASSESSMENT_RUN_COMPLETED"] = "ASSESSMENT_RUN_COMPLETED";
    InspectorEvent["ASSESSMENT_RUN_STARTED"] = "ASSESSMENT_RUN_STARTED";
    InspectorEvent["ASSESSMENT_RUN_STATE_CHANGED"] = "ASSESSMENT_RUN_STATE_CHANGED";
    InspectorEvent["FINDING_REPORTED"] = "FINDING_REPORTED";
    InspectorEvent["OTHER"] = "OTHER";
})(InspectorEvent || (InspectorEvent = {}));
export var AssessmentRunNotificationSnsStatusCode;
(function (AssessmentRunNotificationSnsStatusCode) {
    AssessmentRunNotificationSnsStatusCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    AssessmentRunNotificationSnsStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    AssessmentRunNotificationSnsStatusCode["SUCCESS"] = "SUCCESS";
    AssessmentRunNotificationSnsStatusCode["TOPIC_DOES_NOT_EXIST"] = "TOPIC_DOES_NOT_EXIST";
})(AssessmentRunNotificationSnsStatusCode || (AssessmentRunNotificationSnsStatusCode = {}));
export var AssessmentRunNotification;
(function (AssessmentRunNotification) {
    /**
     * @internal
     */
    AssessmentRunNotification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRunNotification || (AssessmentRunNotification = {}));
export var AssessmentRunState;
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
})(AssessmentRunState || (AssessmentRunState = {}));
export var AssessmentRunStateChange;
(function (AssessmentRunStateChange) {
    /**
     * @internal
     */
    AssessmentRunStateChange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRunStateChange || (AssessmentRunStateChange = {}));
export var AssessmentRun;
(function (AssessmentRun) {
    /**
     * @internal
     */
    AssessmentRun.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRun || (AssessmentRun = {}));
export var TelemetryMetadata;
(function (TelemetryMetadata) {
    /**
     * @internal
     */
    TelemetryMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TelemetryMetadata || (TelemetryMetadata = {}));
export var AssessmentRunAgent;
(function (AssessmentRunAgent) {
    /**
     * @internal
     */
    AssessmentRunAgent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRunAgent || (AssessmentRunAgent = {}));
export var TimestampRange;
(function (TimestampRange) {
    /**
     * @internal
     */
    TimestampRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestampRange || (TimestampRange = {}));
export var DurationRange;
(function (DurationRange) {
    /**
     * @internal
     */
    DurationRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DurationRange || (DurationRange = {}));
export var AssessmentRunFilter;
(function (AssessmentRunFilter) {
    /**
     * @internal
     */
    AssessmentRunFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRunFilter || (AssessmentRunFilter = {}));
export var AssessmentRunInProgressException;
(function (AssessmentRunInProgressException) {
    /**
     * @internal
     */
    AssessmentRunInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentRunInProgressException || (AssessmentRunInProgressException = {}));
export var AssessmentTarget;
(function (AssessmentTarget) {
    /**
     * @internal
     */
    AssessmentTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentTarget || (AssessmentTarget = {}));
export var AssessmentTargetFilter;
(function (AssessmentTargetFilter) {
    /**
     * @internal
     */
    AssessmentTargetFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentTargetFilter || (AssessmentTargetFilter = {}));
export var AssessmentTemplate;
(function (AssessmentTemplate) {
    /**
     * @internal
     */
    AssessmentTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentTemplate || (AssessmentTemplate = {}));
export var AssessmentTemplateFilter;
(function (AssessmentTemplateFilter) {
    /**
     * @internal
     */
    AssessmentTemplateFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssessmentTemplateFilter || (AssessmentTemplateFilter = {}));
export var PrivateIp;
(function (PrivateIp) {
    /**
     * @internal
     */
    PrivateIp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrivateIp || (PrivateIp = {}));
export var SecurityGroup;
(function (SecurityGroup) {
    /**
     * @internal
     */
    SecurityGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityGroup || (SecurityGroup = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AssetAttributes;
(function (AssetAttributes) {
    /**
     * @internal
     */
    AssetAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetAttributes || (AssetAttributes = {}));
export var AssetType;
(function (AssetType) {
    AssetType["EC2_INSTANCE"] = "ec2-instance";
})(AssetType || (AssetType = {}));
export var CreateAssessmentTargetRequest;
(function (CreateAssessmentTargetRequest) {
    /**
     * @internal
     */
    CreateAssessmentTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssessmentTargetRequest || (CreateAssessmentTargetRequest = {}));
export var CreateAssessmentTargetResponse;
(function (CreateAssessmentTargetResponse) {
    /**
     * @internal
     */
    CreateAssessmentTargetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssessmentTargetResponse || (CreateAssessmentTargetResponse = {}));
export var InvalidCrossAccountRoleErrorCode;
(function (InvalidCrossAccountRoleErrorCode) {
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP"] = "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP";
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_HAVE_CORRECT_POLICY"] = "ROLE_DOES_NOT_HAVE_CORRECT_POLICY";
})(InvalidCrossAccountRoleErrorCode || (InvalidCrossAccountRoleErrorCode = {}));
export var InvalidCrossAccountRoleException;
(function (InvalidCrossAccountRoleException) {
    /**
     * @internal
     */
    InvalidCrossAccountRoleException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCrossAccountRoleException || (InvalidCrossAccountRoleException = {}));
export var LimitExceededErrorCode;
(function (LimitExceededErrorCode) {
    LimitExceededErrorCode["ASSESSMENT_RUN_LIMIT_EXCEEDED"] = "ASSESSMENT_RUN_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TARGET_LIMIT_EXCEEDED"] = "ASSESSMENT_TARGET_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED"] = "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED";
    LimitExceededErrorCode["EVENT_SUBSCRIPTION_LIMIT_EXCEEDED"] = "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED";
    LimitExceededErrorCode["RESOURCE_GROUP_LIMIT_EXCEEDED"] = "RESOURCE_GROUP_LIMIT_EXCEEDED";
})(LimitExceededErrorCode || (LimitExceededErrorCode = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateAssessmentTemplateRequest;
(function (CreateAssessmentTemplateRequest) {
    /**
     * @internal
     */
    CreateAssessmentTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssessmentTemplateRequest || (CreateAssessmentTemplateRequest = {}));
export var CreateAssessmentTemplateResponse;
(function (CreateAssessmentTemplateResponse) {
    /**
     * @internal
     */
    CreateAssessmentTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssessmentTemplateResponse || (CreateAssessmentTemplateResponse = {}));
export var CreateExclusionsPreviewRequest;
(function (CreateExclusionsPreviewRequest) {
    /**
     * @internal
     */
    CreateExclusionsPreviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExclusionsPreviewRequest || (CreateExclusionsPreviewRequest = {}));
export var CreateExclusionsPreviewResponse;
(function (CreateExclusionsPreviewResponse) {
    /**
     * @internal
     */
    CreateExclusionsPreviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExclusionsPreviewResponse || (CreateExclusionsPreviewResponse = {}));
export var PreviewGenerationInProgressException;
(function (PreviewGenerationInProgressException) {
    /**
     * @internal
     */
    PreviewGenerationInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreviewGenerationInProgressException || (PreviewGenerationInProgressException = {}));
export var ResourceGroupTag;
(function (ResourceGroupTag) {
    /**
     * @internal
     */
    ResourceGroupTag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceGroupTag || (ResourceGroupTag = {}));
export var CreateResourceGroupRequest;
(function (CreateResourceGroupRequest) {
    /**
     * @internal
     */
    CreateResourceGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceGroupRequest || (CreateResourceGroupRequest = {}));
export var CreateResourceGroupResponse;
(function (CreateResourceGroupResponse) {
    /**
     * @internal
     */
    CreateResourceGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceGroupResponse || (CreateResourceGroupResponse = {}));
export var DeleteAssessmentRunRequest;
(function (DeleteAssessmentRunRequest) {
    /**
     * @internal
     */
    DeleteAssessmentRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssessmentRunRequest || (DeleteAssessmentRunRequest = {}));
export var DeleteAssessmentTargetRequest;
(function (DeleteAssessmentTargetRequest) {
    /**
     * @internal
     */
    DeleteAssessmentTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssessmentTargetRequest || (DeleteAssessmentTargetRequest = {}));
export var DeleteAssessmentTemplateRequest;
(function (DeleteAssessmentTemplateRequest) {
    /**
     * @internal
     */
    DeleteAssessmentTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssessmentTemplateRequest || (DeleteAssessmentTemplateRequest = {}));
export var DescribeAssessmentRunsRequest;
(function (DescribeAssessmentRunsRequest) {
    /**
     * @internal
     */
    DescribeAssessmentRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentRunsRequest || (DescribeAssessmentRunsRequest = {}));
export var DescribeAssessmentRunsResponse;
(function (DescribeAssessmentRunsResponse) {
    /**
     * @internal
     */
    DescribeAssessmentRunsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentRunsResponse || (DescribeAssessmentRunsResponse = {}));
export var DescribeAssessmentTargetsRequest;
(function (DescribeAssessmentTargetsRequest) {
    /**
     * @internal
     */
    DescribeAssessmentTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentTargetsRequest || (DescribeAssessmentTargetsRequest = {}));
export var DescribeAssessmentTargetsResponse;
(function (DescribeAssessmentTargetsResponse) {
    /**
     * @internal
     */
    DescribeAssessmentTargetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentTargetsResponse || (DescribeAssessmentTargetsResponse = {}));
export var DescribeAssessmentTemplatesRequest;
(function (DescribeAssessmentTemplatesRequest) {
    /**
     * @internal
     */
    DescribeAssessmentTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentTemplatesRequest || (DescribeAssessmentTemplatesRequest = {}));
export var DescribeAssessmentTemplatesResponse;
(function (DescribeAssessmentTemplatesResponse) {
    /**
     * @internal
     */
    DescribeAssessmentTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssessmentTemplatesResponse || (DescribeAssessmentTemplatesResponse = {}));
export var DescribeCrossAccountAccessRoleResponse;
(function (DescribeCrossAccountAccessRoleResponse) {
    /**
     * @internal
     */
    DescribeCrossAccountAccessRoleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCrossAccountAccessRoleResponse || (DescribeCrossAccountAccessRoleResponse = {}));
export var Locale;
(function (Locale) {
    Locale["EN_US"] = "EN_US";
})(Locale || (Locale = {}));
export var DescribeExclusionsRequest;
(function (DescribeExclusionsRequest) {
    /**
     * @internal
     */
    DescribeExclusionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExclusionsRequest || (DescribeExclusionsRequest = {}));
export var ScopeType;
(function (ScopeType) {
    ScopeType["INSTANCE_ID"] = "INSTANCE_ID";
    ScopeType["RULES_PACKAGE_ARN"] = "RULES_PACKAGE_ARN";
})(ScopeType || (ScopeType = {}));
export var Scope;
(function (Scope) {
    /**
     * @internal
     */
    Scope.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scope || (Scope = {}));
export var Exclusion;
(function (Exclusion) {
    /**
     * @internal
     */
    Exclusion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Exclusion || (Exclusion = {}));
export var DescribeExclusionsResponse;
(function (DescribeExclusionsResponse) {
    /**
     * @internal
     */
    DescribeExclusionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExclusionsResponse || (DescribeExclusionsResponse = {}));
export var DescribeFindingsRequest;
(function (DescribeFindingsRequest) {
    /**
     * @internal
     */
    DescribeFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFindingsRequest || (DescribeFindingsRequest = {}));
export var InspectorServiceAttributes;
(function (InspectorServiceAttributes) {
    /**
     * @internal
     */
    InspectorServiceAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InspectorServiceAttributes || (InspectorServiceAttributes = {}));
export var Finding;
(function (Finding) {
    /**
     * @internal
     */
    Finding.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Finding || (Finding = {}));
export var DescribeFindingsResponse;
(function (DescribeFindingsResponse) {
    /**
     * @internal
     */
    DescribeFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFindingsResponse || (DescribeFindingsResponse = {}));
export var DescribeResourceGroupsRequest;
(function (DescribeResourceGroupsRequest) {
    /**
     * @internal
     */
    DescribeResourceGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourceGroupsRequest || (DescribeResourceGroupsRequest = {}));
export var ResourceGroup;
(function (ResourceGroup) {
    /**
     * @internal
     */
    ResourceGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceGroup || (ResourceGroup = {}));
export var DescribeResourceGroupsResponse;
(function (DescribeResourceGroupsResponse) {
    /**
     * @internal
     */
    DescribeResourceGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourceGroupsResponse || (DescribeResourceGroupsResponse = {}));
export var DescribeRulesPackagesRequest;
(function (DescribeRulesPackagesRequest) {
    /**
     * @internal
     */
    DescribeRulesPackagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRulesPackagesRequest || (DescribeRulesPackagesRequest = {}));
export var RulesPackage;
(function (RulesPackage) {
    /**
     * @internal
     */
    RulesPackage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RulesPackage || (RulesPackage = {}));
export var DescribeRulesPackagesResponse;
(function (DescribeRulesPackagesResponse) {
    /**
     * @internal
     */
    DescribeRulesPackagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRulesPackagesResponse || (DescribeRulesPackagesResponse = {}));
export var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventSubscription || (EventSubscription = {}));
export var ExclusionPreview;
(function (ExclusionPreview) {
    /**
     * @internal
     */
    ExclusionPreview.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExclusionPreview || (ExclusionPreview = {}));
export var FindingFilter;
(function (FindingFilter) {
    /**
     * @internal
     */
    FindingFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingFilter || (FindingFilter = {}));
export var ReportFileFormat;
(function (ReportFileFormat) {
    ReportFileFormat["HTML"] = "HTML";
    ReportFileFormat["PDF"] = "PDF";
})(ReportFileFormat || (ReportFileFormat = {}));
export var ReportType;
(function (ReportType) {
    ReportType["FINDING"] = "FINDING";
    ReportType["FULL"] = "FULL";
})(ReportType || (ReportType = {}));
export var GetAssessmentReportRequest;
(function (GetAssessmentReportRequest) {
    /**
     * @internal
     */
    GetAssessmentReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAssessmentReportRequest || (GetAssessmentReportRequest = {}));
export var ReportStatus;
(function (ReportStatus) {
    ReportStatus["COMPLETED"] = "COMPLETED";
    ReportStatus["FAILED"] = "FAILED";
    ReportStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(ReportStatus || (ReportStatus = {}));
export var GetAssessmentReportResponse;
(function (GetAssessmentReportResponse) {
    /**
     * @internal
     */
    GetAssessmentReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAssessmentReportResponse || (GetAssessmentReportResponse = {}));
export var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    /**
     * @internal
     */
    UnsupportedFeatureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedFeatureException || (UnsupportedFeatureException = {}));
export var GetExclusionsPreviewRequest;
(function (GetExclusionsPreviewRequest) {
    /**
     * @internal
     */
    GetExclusionsPreviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExclusionsPreviewRequest || (GetExclusionsPreviewRequest = {}));
export var PreviewStatus;
(function (PreviewStatus) {
    PreviewStatus["COMPLETED"] = "COMPLETED";
    PreviewStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(PreviewStatus || (PreviewStatus = {}));
export var GetExclusionsPreviewResponse;
(function (GetExclusionsPreviewResponse) {
    /**
     * @internal
     */
    GetExclusionsPreviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExclusionsPreviewResponse || (GetExclusionsPreviewResponse = {}));
export var GetTelemetryMetadataRequest;
(function (GetTelemetryMetadataRequest) {
    /**
     * @internal
     */
    GetTelemetryMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTelemetryMetadataRequest || (GetTelemetryMetadataRequest = {}));
export var GetTelemetryMetadataResponse;
(function (GetTelemetryMetadataResponse) {
    /**
     * @internal
     */
    GetTelemetryMetadataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTelemetryMetadataResponse || (GetTelemetryMetadataResponse = {}));
export var ListAssessmentRunAgentsRequest;
(function (ListAssessmentRunAgentsRequest) {
    /**
     * @internal
     */
    ListAssessmentRunAgentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentRunAgentsRequest || (ListAssessmentRunAgentsRequest = {}));
export var ListAssessmentRunAgentsResponse;
(function (ListAssessmentRunAgentsResponse) {
    /**
     * @internal
     */
    ListAssessmentRunAgentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentRunAgentsResponse || (ListAssessmentRunAgentsResponse = {}));
export var ListAssessmentRunsRequest;
(function (ListAssessmentRunsRequest) {
    /**
     * @internal
     */
    ListAssessmentRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentRunsRequest || (ListAssessmentRunsRequest = {}));
export var ListAssessmentRunsResponse;
(function (ListAssessmentRunsResponse) {
    /**
     * @internal
     */
    ListAssessmentRunsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentRunsResponse || (ListAssessmentRunsResponse = {}));
export var ListAssessmentTargetsRequest;
(function (ListAssessmentTargetsRequest) {
    /**
     * @internal
     */
    ListAssessmentTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentTargetsRequest || (ListAssessmentTargetsRequest = {}));
export var ListAssessmentTargetsResponse;
(function (ListAssessmentTargetsResponse) {
    /**
     * @internal
     */
    ListAssessmentTargetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentTargetsResponse || (ListAssessmentTargetsResponse = {}));
export var ListAssessmentTemplatesRequest;
(function (ListAssessmentTemplatesRequest) {
    /**
     * @internal
     */
    ListAssessmentTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentTemplatesRequest || (ListAssessmentTemplatesRequest = {}));
export var ListAssessmentTemplatesResponse;
(function (ListAssessmentTemplatesResponse) {
    /**
     * @internal
     */
    ListAssessmentTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssessmentTemplatesResponse || (ListAssessmentTemplatesResponse = {}));
export var ListEventSubscriptionsRequest;
(function (ListEventSubscriptionsRequest) {
    /**
     * @internal
     */
    ListEventSubscriptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventSubscriptionsRequest || (ListEventSubscriptionsRequest = {}));
export var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Subscription || (Subscription = {}));
export var ListEventSubscriptionsResponse;
(function (ListEventSubscriptionsResponse) {
    /**
     * @internal
     */
    ListEventSubscriptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventSubscriptionsResponse || (ListEventSubscriptionsResponse = {}));
export var ListExclusionsRequest;
(function (ListExclusionsRequest) {
    /**
     * @internal
     */
    ListExclusionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExclusionsRequest || (ListExclusionsRequest = {}));
export var ListExclusionsResponse;
(function (ListExclusionsResponse) {
    /**
     * @internal
     */
    ListExclusionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExclusionsResponse || (ListExclusionsResponse = {}));
export var ListFindingsRequest;
(function (ListFindingsRequest) {
    /**
     * @internal
     */
    ListFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsRequest || (ListFindingsRequest = {}));
export var ListFindingsResponse;
(function (ListFindingsResponse) {
    /**
     * @internal
     */
    ListFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsResponse || (ListFindingsResponse = {}));
export var ListRulesPackagesRequest;
(function (ListRulesPackagesRequest) {
    /**
     * @internal
     */
    ListRulesPackagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesPackagesRequest || (ListRulesPackagesRequest = {}));
export var ListRulesPackagesResponse;
(function (ListRulesPackagesResponse) {
    /**
     * @internal
     */
    ListRulesPackagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesPackagesResponse || (ListRulesPackagesResponse = {}));
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
export var PreviewAgentsRequest;
(function (PreviewAgentsRequest) {
    /**
     * @internal
     */
    PreviewAgentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreviewAgentsRequest || (PreviewAgentsRequest = {}));
export var PreviewAgentsResponse;
(function (PreviewAgentsResponse) {
    /**
     * @internal
     */
    PreviewAgentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreviewAgentsResponse || (PreviewAgentsResponse = {}));
export var RegisterCrossAccountAccessRoleRequest;
(function (RegisterCrossAccountAccessRoleRequest) {
    /**
     * @internal
     */
    RegisterCrossAccountAccessRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterCrossAccountAccessRoleRequest || (RegisterCrossAccountAccessRoleRequest = {}));
export var RemoveAttributesFromFindingsRequest;
(function (RemoveAttributesFromFindingsRequest) {
    /**
     * @internal
     */
    RemoveAttributesFromFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAttributesFromFindingsRequest || (RemoveAttributesFromFindingsRequest = {}));
export var RemoveAttributesFromFindingsResponse;
(function (RemoveAttributesFromFindingsResponse) {
    /**
     * @internal
     */
    RemoveAttributesFromFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAttributesFromFindingsResponse || (RemoveAttributesFromFindingsResponse = {}));
export var SetTagsForResourceRequest;
(function (SetTagsForResourceRequest) {
    /**
     * @internal
     */
    SetTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetTagsForResourceRequest || (SetTagsForResourceRequest = {}));
export var StartAssessmentRunRequest;
(function (StartAssessmentRunRequest) {
    /**
     * @internal
     */
    StartAssessmentRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAssessmentRunRequest || (StartAssessmentRunRequest = {}));
export var StartAssessmentRunResponse;
(function (StartAssessmentRunResponse) {
    /**
     * @internal
     */
    StartAssessmentRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAssessmentRunResponse || (StartAssessmentRunResponse = {}));
export var StopAction;
(function (StopAction) {
    StopAction["SKIP_EVALUATION"] = "SKIP_EVALUATION";
    StopAction["START_EVALUATION"] = "START_EVALUATION";
})(StopAction || (StopAction = {}));
export var StopAssessmentRunRequest;
(function (StopAssessmentRunRequest) {
    /**
     * @internal
     */
    StopAssessmentRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAssessmentRunRequest || (StopAssessmentRunRequest = {}));
export var SubscribeToEventRequest;
(function (SubscribeToEventRequest) {
    /**
     * @internal
     */
    SubscribeToEventRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribeToEventRequest || (SubscribeToEventRequest = {}));
export var UnsubscribeFromEventRequest;
(function (UnsubscribeFromEventRequest) {
    /**
     * @internal
     */
    UnsubscribeFromEventRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsubscribeFromEventRequest || (UnsubscribeFromEventRequest = {}));
export var UpdateAssessmentTargetRequest;
(function (UpdateAssessmentTargetRequest) {
    /**
     * @internal
     */
    UpdateAssessmentTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssessmentTargetRequest || (UpdateAssessmentTargetRequest = {}));
//# sourceMappingURL=models_0.js.map