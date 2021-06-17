"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLifecyclePolicyResponse = exports.UpdateLifecyclePolicyRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.GetLifecyclePolicyResponse = exports.LifecyclePolicy = exports.GetLifecyclePolicyRequest = exports.GetLifecyclePoliciesResponse = exports.LifecyclePolicySummary = exports.GetLifecyclePoliciesRequest = exports.GettablePolicyStateValues = exports.ResourceNotFoundException = exports.DeleteLifecyclePolicyResponse = exports.DeleteLifecyclePolicyRequest = exports.LimitExceededException = exports.InvalidRequestException = exports.InternalServerException = exports.CreateLifecyclePolicyResponse = exports.CreateLifecyclePolicyRequest = exports.SettablePolicyStateValues = exports.PolicyDetails = exports.Schedule = exports.Tag = exports.ShareRule = exports.RetainRule = exports.FastRestoreRule = exports.CrossRegionCopyRule = exports.CreateRule = exports.LocationValues = exports.IntervalUnitValues = exports.ResourceTypeValues = exports.ResourceLocationValues = exports.PolicyTypeValues = exports._Parameters = exports.EventSource = exports.EventSourceValues = exports.EventParameters = exports.EventTypeValues = exports.Action = exports.CrossRegionCopyAction = exports.CrossRegionCopyRetainRule = exports.RetentionIntervalUnitValues = exports.EncryptionConfiguration = void 0;
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var RetentionIntervalUnitValues;
(function (RetentionIntervalUnitValues) {
    RetentionIntervalUnitValues["DAYS"] = "DAYS";
    RetentionIntervalUnitValues["MONTHS"] = "MONTHS";
    RetentionIntervalUnitValues["WEEKS"] = "WEEKS";
    RetentionIntervalUnitValues["YEARS"] = "YEARS";
})(RetentionIntervalUnitValues = exports.RetentionIntervalUnitValues || (exports.RetentionIntervalUnitValues = {}));
var CrossRegionCopyRetainRule;
(function (CrossRegionCopyRetainRule) {
    /**
     * @internal
     */
    CrossRegionCopyRetainRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrossRegionCopyRetainRule = exports.CrossRegionCopyRetainRule || (exports.CrossRegionCopyRetainRule = {}));
var CrossRegionCopyAction;
(function (CrossRegionCopyAction) {
    /**
     * @internal
     */
    CrossRegionCopyAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrossRegionCopyAction = exports.CrossRegionCopyAction || (exports.CrossRegionCopyAction = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var EventTypeValues;
(function (EventTypeValues) {
    EventTypeValues["SHARE_SNAPSHOT"] = "shareSnapshot";
})(EventTypeValues = exports.EventTypeValues || (exports.EventTypeValues = {}));
var EventParameters;
(function (EventParameters) {
    /**
     * @internal
     */
    EventParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventParameters = exports.EventParameters || (exports.EventParameters = {}));
var EventSourceValues;
(function (EventSourceValues) {
    EventSourceValues["MANAGED_CWE"] = "MANAGED_CWE";
})(EventSourceValues = exports.EventSourceValues || (exports.EventSourceValues = {}));
var EventSource;
(function (EventSource) {
    /**
     * @internal
     */
    EventSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSource = exports.EventSource || (exports.EventSource = {}));
var _Parameters;
(function (_Parameters) {
    /**
     * @internal
     */
    _Parameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Parameters = exports._Parameters || (exports._Parameters = {}));
var PolicyTypeValues;
(function (PolicyTypeValues) {
    PolicyTypeValues["EBS_SNAPSHOT_MANAGEMENT"] = "EBS_SNAPSHOT_MANAGEMENT";
    PolicyTypeValues["EVENT_BASED_POLICY"] = "EVENT_BASED_POLICY";
    PolicyTypeValues["IMAGE_MANAGEMENT"] = "IMAGE_MANAGEMENT";
})(PolicyTypeValues = exports.PolicyTypeValues || (exports.PolicyTypeValues = {}));
var ResourceLocationValues;
(function (ResourceLocationValues) {
    ResourceLocationValues["CLOUD"] = "CLOUD";
    ResourceLocationValues["OUTPOST"] = "OUTPOST";
})(ResourceLocationValues = exports.ResourceLocationValues || (exports.ResourceLocationValues = {}));
var ResourceTypeValues;
(function (ResourceTypeValues) {
    ResourceTypeValues["INSTANCE"] = "INSTANCE";
    ResourceTypeValues["VOLUME"] = "VOLUME";
})(ResourceTypeValues = exports.ResourceTypeValues || (exports.ResourceTypeValues = {}));
var IntervalUnitValues;
(function (IntervalUnitValues) {
    IntervalUnitValues["HOURS"] = "HOURS";
})(IntervalUnitValues = exports.IntervalUnitValues || (exports.IntervalUnitValues = {}));
var LocationValues;
(function (LocationValues) {
    LocationValues["CLOUD"] = "CLOUD";
    LocationValues["OUTPOST_LOCAL"] = "OUTPOST_LOCAL";
})(LocationValues = exports.LocationValues || (exports.LocationValues = {}));
var CreateRule;
(function (CreateRule) {
    /**
     * @internal
     */
    CreateRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRule = exports.CreateRule || (exports.CreateRule = {}));
var CrossRegionCopyRule;
(function (CrossRegionCopyRule) {
    /**
     * @internal
     */
    CrossRegionCopyRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrossRegionCopyRule = exports.CrossRegionCopyRule || (exports.CrossRegionCopyRule = {}));
var FastRestoreRule;
(function (FastRestoreRule) {
    /**
     * @internal
     */
    FastRestoreRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FastRestoreRule = exports.FastRestoreRule || (exports.FastRestoreRule = {}));
var RetainRule;
(function (RetainRule) {
    /**
     * @internal
     */
    RetainRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetainRule = exports.RetainRule || (exports.RetainRule = {}));
var ShareRule;
(function (ShareRule) {
    /**
     * @internal
     */
    ShareRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareRule = exports.ShareRule || (exports.ShareRule = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var PolicyDetails;
(function (PolicyDetails) {
    /**
     * @internal
     */
    PolicyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyDetails = exports.PolicyDetails || (exports.PolicyDetails = {}));
var SettablePolicyStateValues;
(function (SettablePolicyStateValues) {
    SettablePolicyStateValues["DISABLED"] = "DISABLED";
    SettablePolicyStateValues["ENABLED"] = "ENABLED";
})(SettablePolicyStateValues = exports.SettablePolicyStateValues || (exports.SettablePolicyStateValues = {}));
var CreateLifecyclePolicyRequest;
(function (CreateLifecyclePolicyRequest) {
    /**
     * @internal
     */
    CreateLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLifecyclePolicyRequest = exports.CreateLifecyclePolicyRequest || (exports.CreateLifecyclePolicyRequest = {}));
var CreateLifecyclePolicyResponse;
(function (CreateLifecyclePolicyResponse) {
    /**
     * @internal
     */
    CreateLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLifecyclePolicyResponse = exports.CreateLifecyclePolicyResponse || (exports.CreateLifecyclePolicyResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var DeleteLifecyclePolicyRequest;
(function (DeleteLifecyclePolicyRequest) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyRequest = exports.DeleteLifecyclePolicyRequest || (exports.DeleteLifecyclePolicyRequest = {}));
var DeleteLifecyclePolicyResponse;
(function (DeleteLifecyclePolicyResponse) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyResponse = exports.DeleteLifecyclePolicyResponse || (exports.DeleteLifecyclePolicyResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var GettablePolicyStateValues;
(function (GettablePolicyStateValues) {
    GettablePolicyStateValues["DISABLED"] = "DISABLED";
    GettablePolicyStateValues["ENABLED"] = "ENABLED";
    GettablePolicyStateValues["ERROR"] = "ERROR";
})(GettablePolicyStateValues = exports.GettablePolicyStateValues || (exports.GettablePolicyStateValues = {}));
var GetLifecyclePoliciesRequest;
(function (GetLifecyclePoliciesRequest) {
    /**
     * @internal
     */
    GetLifecyclePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePoliciesRequest = exports.GetLifecyclePoliciesRequest || (exports.GetLifecyclePoliciesRequest = {}));
var LifecyclePolicySummary;
(function (LifecyclePolicySummary) {
    /**
     * @internal
     */
    LifecyclePolicySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicySummary = exports.LifecyclePolicySummary || (exports.LifecyclePolicySummary = {}));
var GetLifecyclePoliciesResponse;
(function (GetLifecyclePoliciesResponse) {
    /**
     * @internal
     */
    GetLifecyclePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePoliciesResponse = exports.GetLifecyclePoliciesResponse || (exports.GetLifecyclePoliciesResponse = {}));
var GetLifecyclePolicyRequest;
(function (GetLifecyclePolicyRequest) {
    /**
     * @internal
     */
    GetLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyRequest = exports.GetLifecyclePolicyRequest || (exports.GetLifecyclePolicyRequest = {}));
var LifecyclePolicy;
(function (LifecyclePolicy) {
    /**
     * @internal
     */
    LifecyclePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicy = exports.LifecyclePolicy || (exports.LifecyclePolicy = {}));
var GetLifecyclePolicyResponse;
(function (GetLifecyclePolicyResponse) {
    /**
     * @internal
     */
    GetLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyResponse = exports.GetLifecyclePolicyResponse || (exports.GetLifecyclePolicyResponse = {}));
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
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateLifecyclePolicyRequest;
(function (UpdateLifecyclePolicyRequest) {
    /**
     * @internal
     */
    UpdateLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLifecyclePolicyRequest = exports.UpdateLifecyclePolicyRequest || (exports.UpdateLifecyclePolicyRequest = {}));
var UpdateLifecyclePolicyResponse;
(function (UpdateLifecyclePolicyResponse) {
    /**
     * @internal
     */
    UpdateLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLifecyclePolicyResponse = exports.UpdateLifecyclePolicyResponse || (exports.UpdateLifecyclePolicyResponse = {}));
//# sourceMappingURL=models_0.js.map