"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationRuleResult = exports.UpdateNotificationRuleRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.UnsubscribeResult = exports.UnsubscribeRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.SubscribeResult = exports.SubscribeRequest = exports.ListTargetsResult = exports.ListTargetsRequest = exports.ListTargetsFilter = exports.ListTargetsFilterName = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListNotificationRulesResult = exports.NotificationRuleSummary = exports.ListNotificationRulesRequest = exports.ListNotificationRulesFilter = exports.ListNotificationRulesFilterName = exports.ListEventTypesResult = exports.ListEventTypesRequest = exports.ListEventTypesFilter = exports.ListEventTypesFilterName = exports.InvalidNextTokenException = exports.ResourceNotFoundException = exports.DescribeNotificationRuleResult = exports.TargetSummary = exports.TargetStatus = exports.EventTypeSummary = exports.DescribeNotificationRuleRequest = exports.DeleteTargetResult = exports.DeleteTargetRequest = exports.DeleteNotificationRuleResult = exports.DeleteNotificationRuleRequest = exports.ValidationException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.CreateNotificationRuleResult = exports.CreateNotificationRuleRequest = exports.Target = exports.NotificationRuleStatus = exports.DetailType = exports.ConfigurationException = exports.ConcurrentModificationException = exports.AccessDeniedException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConfigurationException;
(function (ConfigurationException) {
    /**
     * @internal
     */
    ConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationException = exports.ConfigurationException || (exports.ConfigurationException = {}));
var DetailType;
(function (DetailType) {
    DetailType["BASIC"] = "BASIC";
    DetailType["FULL"] = "FULL";
})(DetailType = exports.DetailType || (exports.DetailType = {}));
var NotificationRuleStatus;
(function (NotificationRuleStatus) {
    NotificationRuleStatus["DISABLED"] = "DISABLED";
    NotificationRuleStatus["ENABLED"] = "ENABLED";
})(NotificationRuleStatus = exports.NotificationRuleStatus || (exports.NotificationRuleStatus = {}));
var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TargetAddress && { TargetAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(Target = exports.Target || (exports.Target = {}));
var CreateNotificationRuleRequest;
(function (CreateNotificationRuleRequest) {
    /**
     * @internal
     */
    CreateNotificationRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
    });
})(CreateNotificationRuleRequest = exports.CreateNotificationRuleRequest || (exports.CreateNotificationRuleRequest = {}));
var CreateNotificationRuleResult;
(function (CreateNotificationRuleResult) {
    /**
     * @internal
     */
    CreateNotificationRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotificationRuleResult = exports.CreateNotificationRuleResult || (exports.CreateNotificationRuleResult = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DeleteNotificationRuleRequest;
(function (DeleteNotificationRuleRequest) {
    /**
     * @internal
     */
    DeleteNotificationRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotificationRuleRequest = exports.DeleteNotificationRuleRequest || (exports.DeleteNotificationRuleRequest = {}));
var DeleteNotificationRuleResult;
(function (DeleteNotificationRuleResult) {
    /**
     * @internal
     */
    DeleteNotificationRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotificationRuleResult = exports.DeleteNotificationRuleResult || (exports.DeleteNotificationRuleResult = {}));
var DeleteTargetRequest;
(function (DeleteTargetRequest) {
    /**
     * @internal
     */
    DeleteTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TargetAddress && { TargetAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteTargetRequest = exports.DeleteTargetRequest || (exports.DeleteTargetRequest = {}));
var DeleteTargetResult;
(function (DeleteTargetResult) {
    /**
     * @internal
     */
    DeleteTargetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTargetResult = exports.DeleteTargetResult || (exports.DeleteTargetResult = {}));
var DescribeNotificationRuleRequest;
(function (DescribeNotificationRuleRequest) {
    /**
     * @internal
     */
    DescribeNotificationRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotificationRuleRequest = exports.DescribeNotificationRuleRequest || (exports.DescribeNotificationRuleRequest = {}));
var EventTypeSummary;
(function (EventTypeSummary) {
    /**
     * @internal
     */
    EventTypeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTypeSummary = exports.EventTypeSummary || (exports.EventTypeSummary = {}));
var TargetStatus;
(function (TargetStatus) {
    TargetStatus["ACTIVE"] = "ACTIVE";
    TargetStatus["DEACTIVATED"] = "DEACTIVATED";
    TargetStatus["INACTIVE"] = "INACTIVE";
    TargetStatus["PENDING"] = "PENDING";
    TargetStatus["UNREACHABLE"] = "UNREACHABLE";
})(TargetStatus = exports.TargetStatus || (exports.TargetStatus = {}));
var TargetSummary;
(function (TargetSummary) {
    /**
     * @internal
     */
    TargetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TargetAddress && { TargetAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(TargetSummary = exports.TargetSummary || (exports.TargetSummary = {}));
var DescribeNotificationRuleResult;
(function (DescribeNotificationRuleResult) {
    /**
     * @internal
     */
    DescribeNotificationRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
    });
})(DescribeNotificationRuleResult = exports.DescribeNotificationRuleResult || (exports.DescribeNotificationRuleResult = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListEventTypesFilterName;
(function (ListEventTypesFilterName) {
    ListEventTypesFilterName["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    ListEventTypesFilterName["SERVICE_NAME"] = "SERVICE_NAME";
})(ListEventTypesFilterName = exports.ListEventTypesFilterName || (exports.ListEventTypesFilterName = {}));
var ListEventTypesFilter;
(function (ListEventTypesFilter) {
    /**
     * @internal
     */
    ListEventTypesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventTypesFilter = exports.ListEventTypesFilter || (exports.ListEventTypesFilter = {}));
var ListEventTypesRequest;
(function (ListEventTypesRequest) {
    /**
     * @internal
     */
    ListEventTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventTypesRequest = exports.ListEventTypesRequest || (exports.ListEventTypesRequest = {}));
var ListEventTypesResult;
(function (ListEventTypesResult) {
    /**
     * @internal
     */
    ListEventTypesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventTypesResult = exports.ListEventTypesResult || (exports.ListEventTypesResult = {}));
var ListNotificationRulesFilterName;
(function (ListNotificationRulesFilterName) {
    ListNotificationRulesFilterName["CREATED_BY"] = "CREATED_BY";
    ListNotificationRulesFilterName["EVENT_TYPE_ID"] = "EVENT_TYPE_ID";
    ListNotificationRulesFilterName["RESOURCE"] = "RESOURCE";
    ListNotificationRulesFilterName["TARGET_ADDRESS"] = "TARGET_ADDRESS";
})(ListNotificationRulesFilterName = exports.ListNotificationRulesFilterName || (exports.ListNotificationRulesFilterName = {}));
var ListNotificationRulesFilter;
(function (ListNotificationRulesFilter) {
    /**
     * @internal
     */
    ListNotificationRulesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationRulesFilter = exports.ListNotificationRulesFilter || (exports.ListNotificationRulesFilter = {}));
var ListNotificationRulesRequest;
(function (ListNotificationRulesRequest) {
    /**
     * @internal
     */
    ListNotificationRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationRulesRequest = exports.ListNotificationRulesRequest || (exports.ListNotificationRulesRequest = {}));
var NotificationRuleSummary;
(function (NotificationRuleSummary) {
    /**
     * @internal
     */
    NotificationRuleSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationRuleSummary = exports.NotificationRuleSummary || (exports.NotificationRuleSummary = {}));
var ListNotificationRulesResult;
(function (ListNotificationRulesResult) {
    /**
     * @internal
     */
    ListNotificationRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationRulesResult = exports.ListNotificationRulesResult || (exports.ListNotificationRulesResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var ListTargetsFilterName;
(function (ListTargetsFilterName) {
    ListTargetsFilterName["TARGET_ADDRESS"] = "TARGET_ADDRESS";
    ListTargetsFilterName["TARGET_STATUS"] = "TARGET_STATUS";
    ListTargetsFilterName["TARGET_TYPE"] = "TARGET_TYPE";
})(ListTargetsFilterName = exports.ListTargetsFilterName || (exports.ListTargetsFilterName = {}));
var ListTargetsFilter;
(function (ListTargetsFilter) {
    /**
     * @internal
     */
    ListTargetsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsFilter = exports.ListTargetsFilter || (exports.ListTargetsFilter = {}));
var ListTargetsRequest;
(function (ListTargetsRequest) {
    /**
     * @internal
     */
    ListTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsRequest = exports.ListTargetsRequest || (exports.ListTargetsRequest = {}));
var ListTargetsResult;
(function (ListTargetsResult) {
    /**
     * @internal
     */
    ListTargetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
    });
})(ListTargetsResult = exports.ListTargetsResult || (exports.ListTargetsResult = {}));
var SubscribeRequest;
(function (SubscribeRequest) {
    /**
     * @internal
     */
    SubscribeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Target && { Target: Target.filterSensitiveLog(obj.Target) }),
    });
})(SubscribeRequest = exports.SubscribeRequest || (exports.SubscribeRequest = {}));
var SubscribeResult;
(function (SubscribeResult) {
    /**
     * @internal
     */
    SubscribeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeResult = exports.SubscribeResult || (exports.SubscribeResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UnsubscribeRequest;
(function (UnsubscribeRequest) {
    /**
     * @internal
     */
    UnsubscribeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TargetAddress && { TargetAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(UnsubscribeRequest = exports.UnsubscribeRequest || (exports.UnsubscribeRequest = {}));
var UnsubscribeResult;
(function (UnsubscribeResult) {
    /**
     * @internal
     */
    UnsubscribeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsubscribeResult = exports.UnsubscribeResult || (exports.UnsubscribeResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdateNotificationRuleRequest;
(function (UpdateNotificationRuleRequest) {
    /**
     * @internal
     */
    UpdateNotificationRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
    });
})(UpdateNotificationRuleRequest = exports.UpdateNotificationRuleRequest || (exports.UpdateNotificationRuleRequest = {}));
var UpdateNotificationRuleResult;
(function (UpdateNotificationRuleResult) {
    /**
     * @internal
     */
    UpdateNotificationRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNotificationRuleResult = exports.UpdateNotificationRuleResult || (exports.UpdateNotificationRuleResult = {}));
//# sourceMappingURL=models_0.js.map