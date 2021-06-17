"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopExperimentResponse = exports.StopExperimentRequest = exports.StartExperimentResponse = exports.StartExperimentRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListExperimentTemplatesResponse = exports.ListExperimentTemplatesRequest = exports.ListExperimentsResponse = exports.ListExperimentsRequest = exports.ListActionsResponse = exports.ListActionsRequest = exports.GetExperimentTemplateResponse = exports.GetExperimentTemplateRequest = exports.GetExperimentResponse = exports.GetExperimentRequest = exports.GetActionResponse = exports.GetActionRequest = exports.ExperimentTemplateSummary = exports.ExperimentSummary = exports.Experiment = exports.ExperimentTarget = exports.ExperimentTargetFilter = exports.ExperimentStopCondition = exports.ExperimentState = exports.ExperimentStatus = exports.ExperimentAction = exports.ExperimentActionState = exports.ExperimentActionStatus = exports.DeleteExperimentTemplateResponse = exports.DeleteExperimentTemplateRequest = exports.ValidationException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.CreateExperimentTemplateResponse = exports.ExperimentTemplate = exports.ExperimentTemplateTarget = exports.ExperimentTemplateTargetFilter = exports.ExperimentTemplateStopCondition = exports.ExperimentTemplateAction = exports.CreateExperimentTemplateRequest = exports.CreateExperimentTemplateTargetInput = exports.ExperimentTemplateTargetInputFilter = exports.CreateExperimentTemplateStopConditionInput = exports.CreateExperimentTemplateActionInput = exports.ConflictException = exports.ActionSummary = exports.Action = exports.ActionTarget = exports.ActionParameter = void 0;
exports.UpdateExperimentTemplateResponse = exports.UpdateExperimentTemplateRequest = exports.UpdateExperimentTemplateTargetInput = exports.UpdateExperimentTemplateStopConditionInput = exports.UpdateExperimentTemplateActionInputItem = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = void 0;
var ActionParameter;
(function (ActionParameter) {
    /**
     * @internal
     */
    ActionParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionParameter = exports.ActionParameter || (exports.ActionParameter = {}));
var ActionTarget;
(function (ActionTarget) {
    /**
     * @internal
     */
    ActionTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTarget = exports.ActionTarget || (exports.ActionTarget = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var ActionSummary;
(function (ActionSummary) {
    /**
     * @internal
     */
    ActionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionSummary = exports.ActionSummary || (exports.ActionSummary = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateExperimentTemplateActionInput;
(function (CreateExperimentTemplateActionInput) {
    /**
     * @internal
     */
    CreateExperimentTemplateActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentTemplateActionInput = exports.CreateExperimentTemplateActionInput || (exports.CreateExperimentTemplateActionInput = {}));
var CreateExperimentTemplateStopConditionInput;
(function (CreateExperimentTemplateStopConditionInput) {
    /**
     * @internal
     */
    CreateExperimentTemplateStopConditionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentTemplateStopConditionInput = exports.CreateExperimentTemplateStopConditionInput || (exports.CreateExperimentTemplateStopConditionInput = {}));
var ExperimentTemplateTargetInputFilter;
(function (ExperimentTemplateTargetInputFilter) {
    /**
     * @internal
     */
    ExperimentTemplateTargetInputFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateTargetInputFilter = exports.ExperimentTemplateTargetInputFilter || (exports.ExperimentTemplateTargetInputFilter = {}));
var CreateExperimentTemplateTargetInput;
(function (CreateExperimentTemplateTargetInput) {
    /**
     * @internal
     */
    CreateExperimentTemplateTargetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentTemplateTargetInput = exports.CreateExperimentTemplateTargetInput || (exports.CreateExperimentTemplateTargetInput = {}));
var CreateExperimentTemplateRequest;
(function (CreateExperimentTemplateRequest) {
    /**
     * @internal
     */
    CreateExperimentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentTemplateRequest = exports.CreateExperimentTemplateRequest || (exports.CreateExperimentTemplateRequest = {}));
var ExperimentTemplateAction;
(function (ExperimentTemplateAction) {
    /**
     * @internal
     */
    ExperimentTemplateAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateAction = exports.ExperimentTemplateAction || (exports.ExperimentTemplateAction = {}));
var ExperimentTemplateStopCondition;
(function (ExperimentTemplateStopCondition) {
    /**
     * @internal
     */
    ExperimentTemplateStopCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateStopCondition = exports.ExperimentTemplateStopCondition || (exports.ExperimentTemplateStopCondition = {}));
var ExperimentTemplateTargetFilter;
(function (ExperimentTemplateTargetFilter) {
    /**
     * @internal
     */
    ExperimentTemplateTargetFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateTargetFilter = exports.ExperimentTemplateTargetFilter || (exports.ExperimentTemplateTargetFilter = {}));
var ExperimentTemplateTarget;
(function (ExperimentTemplateTarget) {
    /**
     * @internal
     */
    ExperimentTemplateTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateTarget = exports.ExperimentTemplateTarget || (exports.ExperimentTemplateTarget = {}));
var ExperimentTemplate;
(function (ExperimentTemplate) {
    /**
     * @internal
     */
    ExperimentTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplate = exports.ExperimentTemplate || (exports.ExperimentTemplate = {}));
var CreateExperimentTemplateResponse;
(function (CreateExperimentTemplateResponse) {
    /**
     * @internal
     */
    CreateExperimentTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentTemplateResponse = exports.CreateExperimentTemplateResponse || (exports.CreateExperimentTemplateResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DeleteExperimentTemplateRequest;
(function (DeleteExperimentTemplateRequest) {
    /**
     * @internal
     */
    DeleteExperimentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExperimentTemplateRequest = exports.DeleteExperimentTemplateRequest || (exports.DeleteExperimentTemplateRequest = {}));
var DeleteExperimentTemplateResponse;
(function (DeleteExperimentTemplateResponse) {
    /**
     * @internal
     */
    DeleteExperimentTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExperimentTemplateResponse = exports.DeleteExperimentTemplateResponse || (exports.DeleteExperimentTemplateResponse = {}));
var ExperimentActionStatus;
(function (ExperimentActionStatus) {
    ExperimentActionStatus["cancelled"] = "cancelled";
    ExperimentActionStatus["completed"] = "completed";
    ExperimentActionStatus["failed"] = "failed";
    ExperimentActionStatus["initiating"] = "initiating";
    ExperimentActionStatus["pending"] = "pending";
    ExperimentActionStatus["running"] = "running";
    ExperimentActionStatus["stopped"] = "stopped";
    ExperimentActionStatus["stopping"] = "stopping";
})(ExperimentActionStatus = exports.ExperimentActionStatus || (exports.ExperimentActionStatus = {}));
var ExperimentActionState;
(function (ExperimentActionState) {
    /**
     * @internal
     */
    ExperimentActionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentActionState = exports.ExperimentActionState || (exports.ExperimentActionState = {}));
var ExperimentAction;
(function (ExperimentAction) {
    /**
     * @internal
     */
    ExperimentAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentAction = exports.ExperimentAction || (exports.ExperimentAction = {}));
var ExperimentStatus;
(function (ExperimentStatus) {
    ExperimentStatus["completed"] = "completed";
    ExperimentStatus["failed"] = "failed";
    ExperimentStatus["initiating"] = "initiating";
    ExperimentStatus["pending"] = "pending";
    ExperimentStatus["running"] = "running";
    ExperimentStatus["stopped"] = "stopped";
    ExperimentStatus["stopping"] = "stopping";
})(ExperimentStatus = exports.ExperimentStatus || (exports.ExperimentStatus = {}));
var ExperimentState;
(function (ExperimentState) {
    /**
     * @internal
     */
    ExperimentState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentState = exports.ExperimentState || (exports.ExperimentState = {}));
var ExperimentStopCondition;
(function (ExperimentStopCondition) {
    /**
     * @internal
     */
    ExperimentStopCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentStopCondition = exports.ExperimentStopCondition || (exports.ExperimentStopCondition = {}));
var ExperimentTargetFilter;
(function (ExperimentTargetFilter) {
    /**
     * @internal
     */
    ExperimentTargetFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTargetFilter = exports.ExperimentTargetFilter || (exports.ExperimentTargetFilter = {}));
var ExperimentTarget;
(function (ExperimentTarget) {
    /**
     * @internal
     */
    ExperimentTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTarget = exports.ExperimentTarget || (exports.ExperimentTarget = {}));
var Experiment;
(function (Experiment) {
    /**
     * @internal
     */
    Experiment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Experiment = exports.Experiment || (exports.Experiment = {}));
var ExperimentSummary;
(function (ExperimentSummary) {
    /**
     * @internal
     */
    ExperimentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentSummary = exports.ExperimentSummary || (exports.ExperimentSummary = {}));
var ExperimentTemplateSummary;
(function (ExperimentTemplateSummary) {
    /**
     * @internal
     */
    ExperimentTemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentTemplateSummary = exports.ExperimentTemplateSummary || (exports.ExperimentTemplateSummary = {}));
var GetActionRequest;
(function (GetActionRequest) {
    /**
     * @internal
     */
    GetActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActionRequest = exports.GetActionRequest || (exports.GetActionRequest = {}));
var GetActionResponse;
(function (GetActionResponse) {
    /**
     * @internal
     */
    GetActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActionResponse = exports.GetActionResponse || (exports.GetActionResponse = {}));
var GetExperimentRequest;
(function (GetExperimentRequest) {
    /**
     * @internal
     */
    GetExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExperimentRequest = exports.GetExperimentRequest || (exports.GetExperimentRequest = {}));
var GetExperimentResponse;
(function (GetExperimentResponse) {
    /**
     * @internal
     */
    GetExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExperimentResponse = exports.GetExperimentResponse || (exports.GetExperimentResponse = {}));
var GetExperimentTemplateRequest;
(function (GetExperimentTemplateRequest) {
    /**
     * @internal
     */
    GetExperimentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExperimentTemplateRequest = exports.GetExperimentTemplateRequest || (exports.GetExperimentTemplateRequest = {}));
var GetExperimentTemplateResponse;
(function (GetExperimentTemplateResponse) {
    /**
     * @internal
     */
    GetExperimentTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExperimentTemplateResponse = exports.GetExperimentTemplateResponse || (exports.GetExperimentTemplateResponse = {}));
var ListActionsRequest;
(function (ListActionsRequest) {
    /**
     * @internal
     */
    ListActionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionsRequest = exports.ListActionsRequest || (exports.ListActionsRequest = {}));
var ListActionsResponse;
(function (ListActionsResponse) {
    /**
     * @internal
     */
    ListActionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionsResponse = exports.ListActionsResponse || (exports.ListActionsResponse = {}));
var ListExperimentsRequest;
(function (ListExperimentsRequest) {
    /**
     * @internal
     */
    ListExperimentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentsRequest = exports.ListExperimentsRequest || (exports.ListExperimentsRequest = {}));
var ListExperimentsResponse;
(function (ListExperimentsResponse) {
    /**
     * @internal
     */
    ListExperimentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentsResponse = exports.ListExperimentsResponse || (exports.ListExperimentsResponse = {}));
var ListExperimentTemplatesRequest;
(function (ListExperimentTemplatesRequest) {
    /**
     * @internal
     */
    ListExperimentTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentTemplatesRequest = exports.ListExperimentTemplatesRequest || (exports.ListExperimentTemplatesRequest = {}));
var ListExperimentTemplatesResponse;
(function (ListExperimentTemplatesResponse) {
    /**
     * @internal
     */
    ListExperimentTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExperimentTemplatesResponse = exports.ListExperimentTemplatesResponse || (exports.ListExperimentTemplatesResponse = {}));
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
var StartExperimentRequest;
(function (StartExperimentRequest) {
    /**
     * @internal
     */
    StartExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExperimentRequest = exports.StartExperimentRequest || (exports.StartExperimentRequest = {}));
var StartExperimentResponse;
(function (StartExperimentResponse) {
    /**
     * @internal
     */
    StartExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExperimentResponse = exports.StartExperimentResponse || (exports.StartExperimentResponse = {}));
var StopExperimentRequest;
(function (StopExperimentRequest) {
    /**
     * @internal
     */
    StopExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopExperimentRequest = exports.StopExperimentRequest || (exports.StopExperimentRequest = {}));
var StopExperimentResponse;
(function (StopExperimentResponse) {
    /**
     * @internal
     */
    StopExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopExperimentResponse = exports.StopExperimentResponse || (exports.StopExperimentResponse = {}));
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
var UpdateExperimentTemplateActionInputItem;
(function (UpdateExperimentTemplateActionInputItem) {
    /**
     * @internal
     */
    UpdateExperimentTemplateActionInputItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentTemplateActionInputItem = exports.UpdateExperimentTemplateActionInputItem || (exports.UpdateExperimentTemplateActionInputItem = {}));
var UpdateExperimentTemplateStopConditionInput;
(function (UpdateExperimentTemplateStopConditionInput) {
    /**
     * @internal
     */
    UpdateExperimentTemplateStopConditionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentTemplateStopConditionInput = exports.UpdateExperimentTemplateStopConditionInput || (exports.UpdateExperimentTemplateStopConditionInput = {}));
var UpdateExperimentTemplateTargetInput;
(function (UpdateExperimentTemplateTargetInput) {
    /**
     * @internal
     */
    UpdateExperimentTemplateTargetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentTemplateTargetInput = exports.UpdateExperimentTemplateTargetInput || (exports.UpdateExperimentTemplateTargetInput = {}));
var UpdateExperimentTemplateRequest;
(function (UpdateExperimentTemplateRequest) {
    /**
     * @internal
     */
    UpdateExperimentTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentTemplateRequest = exports.UpdateExperimentTemplateRequest || (exports.UpdateExperimentTemplateRequest = {}));
var UpdateExperimentTemplateResponse;
(function (UpdateExperimentTemplateResponse) {
    /**
     * @internal
     */
    UpdateExperimentTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateExperimentTemplateResponse = exports.UpdateExperimentTemplateResponse || (exports.UpdateExperimentTemplateResponse = {}));
//# sourceMappingURL=models_0.js.map