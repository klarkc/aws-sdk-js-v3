import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var ConfigurationException;
(function (ConfigurationException) {
    /**
     * @internal
     */
    ConfigurationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfigurationException || (ConfigurationException = {}));
export var DetailType;
(function (DetailType) {
    DetailType["BASIC"] = "BASIC";
    DetailType["FULL"] = "FULL";
})(DetailType || (DetailType = {}));
export var NotificationRuleStatus;
(function (NotificationRuleStatus) {
    NotificationRuleStatus["DISABLED"] = "DISABLED";
    NotificationRuleStatus["ENABLED"] = "ENABLED";
})(NotificationRuleStatus || (NotificationRuleStatus = {}));
export var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }))); };
})(Target || (Target = {}));
export var CreateNotificationRuleRequest;
(function (CreateNotificationRuleRequest) {
    /**
     * @internal
     */
    CreateNotificationRuleRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Name && { Name: SENSITIVE_STRING })), (obj.Targets && { Targets: obj.Targets.map(function (item) { return Target.filterSensitiveLog(item); }) }))); };
})(CreateNotificationRuleRequest || (CreateNotificationRuleRequest = {}));
export var CreateNotificationRuleResult;
(function (CreateNotificationRuleResult) {
    /**
     * @internal
     */
    CreateNotificationRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotificationRuleResult || (CreateNotificationRuleResult = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var DeleteNotificationRuleRequest;
(function (DeleteNotificationRuleRequest) {
    /**
     * @internal
     */
    DeleteNotificationRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotificationRuleRequest || (DeleteNotificationRuleRequest = {}));
export var DeleteNotificationRuleResult;
(function (DeleteNotificationRuleResult) {
    /**
     * @internal
     */
    DeleteNotificationRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotificationRuleResult || (DeleteNotificationRuleResult = {}));
export var DeleteTargetRequest;
(function (DeleteTargetRequest) {
    /**
     * @internal
     */
    DeleteTargetRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }))); };
})(DeleteTargetRequest || (DeleteTargetRequest = {}));
export var DeleteTargetResult;
(function (DeleteTargetResult) {
    /**
     * @internal
     */
    DeleteTargetResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTargetResult || (DeleteTargetResult = {}));
export var DescribeNotificationRuleRequest;
(function (DescribeNotificationRuleRequest) {
    /**
     * @internal
     */
    DescribeNotificationRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotificationRuleRequest || (DescribeNotificationRuleRequest = {}));
export var EventTypeSummary;
(function (EventTypeSummary) {
    /**
     * @internal
     */
    EventTypeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventTypeSummary || (EventTypeSummary = {}));
export var TargetStatus;
(function (TargetStatus) {
    TargetStatus["ACTIVE"] = "ACTIVE";
    TargetStatus["DEACTIVATED"] = "DEACTIVATED";
    TargetStatus["INACTIVE"] = "INACTIVE";
    TargetStatus["PENDING"] = "PENDING";
    TargetStatus["UNREACHABLE"] = "UNREACHABLE";
})(TargetStatus || (TargetStatus = {}));
export var TargetSummary;
(function (TargetSummary) {
    /**
     * @internal
     */
    TargetSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }))); };
})(TargetSummary || (TargetSummary = {}));
export var DescribeNotificationRuleResult;
(function (DescribeNotificationRuleResult) {
    /**
     * @internal
     */
    DescribeNotificationRuleResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Name && { Name: SENSITIVE_STRING })), (obj.Targets && { Targets: obj.Targets.map(function (item) { return TargetSummary.filterSensitiveLog(item); }) }))); };
})(DescribeNotificationRuleResult || (DescribeNotificationRuleResult = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListEventTypesFilterName;
(function (ListEventTypesFilterName) {
    ListEventTypesFilterName["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    ListEventTypesFilterName["SERVICE_NAME"] = "SERVICE_NAME";
})(ListEventTypesFilterName || (ListEventTypesFilterName = {}));
export var ListEventTypesFilter;
(function (ListEventTypesFilter) {
    /**
     * @internal
     */
    ListEventTypesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventTypesFilter || (ListEventTypesFilter = {}));
export var ListEventTypesRequest;
(function (ListEventTypesRequest) {
    /**
     * @internal
     */
    ListEventTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventTypesRequest || (ListEventTypesRequest = {}));
export var ListEventTypesResult;
(function (ListEventTypesResult) {
    /**
     * @internal
     */
    ListEventTypesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventTypesResult || (ListEventTypesResult = {}));
export var ListNotificationRulesFilterName;
(function (ListNotificationRulesFilterName) {
    ListNotificationRulesFilterName["CREATED_BY"] = "CREATED_BY";
    ListNotificationRulesFilterName["EVENT_TYPE_ID"] = "EVENT_TYPE_ID";
    ListNotificationRulesFilterName["RESOURCE"] = "RESOURCE";
    ListNotificationRulesFilterName["TARGET_ADDRESS"] = "TARGET_ADDRESS";
})(ListNotificationRulesFilterName || (ListNotificationRulesFilterName = {}));
export var ListNotificationRulesFilter;
(function (ListNotificationRulesFilter) {
    /**
     * @internal
     */
    ListNotificationRulesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNotificationRulesFilter || (ListNotificationRulesFilter = {}));
export var ListNotificationRulesRequest;
(function (ListNotificationRulesRequest) {
    /**
     * @internal
     */
    ListNotificationRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNotificationRulesRequest || (ListNotificationRulesRequest = {}));
export var NotificationRuleSummary;
(function (NotificationRuleSummary) {
    /**
     * @internal
     */
    NotificationRuleSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationRuleSummary || (NotificationRuleSummary = {}));
export var ListNotificationRulesResult;
(function (ListNotificationRulesResult) {
    /**
     * @internal
     */
    ListNotificationRulesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNotificationRulesResult || (ListNotificationRulesResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var ListTargetsFilterName;
(function (ListTargetsFilterName) {
    ListTargetsFilterName["TARGET_ADDRESS"] = "TARGET_ADDRESS";
    ListTargetsFilterName["TARGET_STATUS"] = "TARGET_STATUS";
    ListTargetsFilterName["TARGET_TYPE"] = "TARGET_TYPE";
})(ListTargetsFilterName || (ListTargetsFilterName = {}));
export var ListTargetsFilter;
(function (ListTargetsFilter) {
    /**
     * @internal
     */
    ListTargetsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsFilter || (ListTargetsFilter = {}));
export var ListTargetsRequest;
(function (ListTargetsRequest) {
    /**
     * @internal
     */
    ListTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsRequest || (ListTargetsRequest = {}));
export var ListTargetsResult;
(function (ListTargetsResult) {
    /**
     * @internal
     */
    ListTargetsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Targets && { Targets: obj.Targets.map(function (item) { return TargetSummary.filterSensitiveLog(item); }) }))); };
})(ListTargetsResult || (ListTargetsResult = {}));
export var SubscribeRequest;
(function (SubscribeRequest) {
    /**
     * @internal
     */
    SubscribeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Target && { Target: Target.filterSensitiveLog(obj.Target) }))); };
})(SubscribeRequest || (SubscribeRequest = {}));
export var SubscribeResult;
(function (SubscribeResult) {
    /**
     * @internal
     */
    SubscribeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribeResult || (SubscribeResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResult || (TagResourceResult = {}));
export var UnsubscribeRequest;
(function (UnsubscribeRequest) {
    /**
     * @internal
     */
    UnsubscribeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }))); };
})(UnsubscribeRequest || (UnsubscribeRequest = {}));
export var UnsubscribeResult;
(function (UnsubscribeResult) {
    /**
     * @internal
     */
    UnsubscribeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsubscribeResult || (UnsubscribeResult = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResult || (UntagResourceResult = {}));
export var UpdateNotificationRuleRequest;
(function (UpdateNotificationRuleRequest) {
    /**
     * @internal
     */
    UpdateNotificationRuleRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Name && { Name: SENSITIVE_STRING })), (obj.Targets && { Targets: obj.Targets.map(function (item) { return Target.filterSensitiveLog(item); }) }))); };
})(UpdateNotificationRuleRequest || (UpdateNotificationRuleRequest = {}));
export var UpdateNotificationRuleResult;
(function (UpdateNotificationRuleResult) {
    /**
     * @internal
     */
    UpdateNotificationRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNotificationRuleResult || (UpdateNotificationRuleResult = {}));
//# sourceMappingURL=models_0.js.map