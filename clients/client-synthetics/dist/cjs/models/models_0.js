"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCanaryResponse = exports.UpdateCanaryRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopCanaryResponse = exports.StopCanaryRequest = exports.StartCanaryResponse = exports.StartCanaryRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.GetCanaryRunsResponse = exports.GetCanaryRunsRequest = exports.GetCanaryResponse = exports.GetCanaryRequest = exports.DescribeRuntimeVersionsResponse = exports.RuntimeVersion = exports.DescribeRuntimeVersionsRequest = exports.DescribeCanariesLastRunResponse = exports.DescribeCanariesLastRunRequest = exports.DescribeCanariesResponse = exports.DescribeCanariesRequest = exports.ResourceNotFoundException = exports.DeleteCanaryResponse = exports.DeleteCanaryRequest = exports.ValidationException = exports.InternalServerException = exports.CreateCanaryResponse = exports.CreateCanaryRequest = exports.VpcConfigInput = exports.ConflictException = exports.CanaryScheduleInput = exports.CanaryRunConfigInput = exports.CanaryCodeInput = exports.CanaryLastRun = exports.CanaryRun = exports.CanaryRunTimeline = exports.CanaryRunStatus = exports.CanaryRunStateReasonCode = exports.CanaryRunState = exports.Canary = exports.VpcConfigOutput = exports.CanaryTimeline = exports.CanaryStatus = exports.CanaryStateReasonCode = exports.CanaryState = exports.CanaryScheduleOutput = exports.CanaryRunConfigOutput = exports.CanaryCodeOutput = void 0;
var CanaryCodeOutput;
(function (CanaryCodeOutput) {
    /**
     * @internal
     */
    CanaryCodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryCodeOutput = exports.CanaryCodeOutput || (exports.CanaryCodeOutput = {}));
var CanaryRunConfigOutput;
(function (CanaryRunConfigOutput) {
    /**
     * @internal
     */
    CanaryRunConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryRunConfigOutput = exports.CanaryRunConfigOutput || (exports.CanaryRunConfigOutput = {}));
var CanaryScheduleOutput;
(function (CanaryScheduleOutput) {
    /**
     * @internal
     */
    CanaryScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryScheduleOutput = exports.CanaryScheduleOutput || (exports.CanaryScheduleOutput = {}));
var CanaryState;
(function (CanaryState) {
    CanaryState["CREATING"] = "CREATING";
    CanaryState["DELETING"] = "DELETING";
    CanaryState["ERROR"] = "ERROR";
    CanaryState["READY"] = "READY";
    CanaryState["RUNNING"] = "RUNNING";
    CanaryState["STARTING"] = "STARTING";
    CanaryState["STOPPED"] = "STOPPED";
    CanaryState["STOPPING"] = "STOPPING";
    CanaryState["UPDATING"] = "UPDATING";
})(CanaryState = exports.CanaryState || (exports.CanaryState = {}));
var CanaryStateReasonCode;
(function (CanaryStateReasonCode) {
    CanaryStateReasonCode["INVALID_PERMISSIONS"] = "INVALID_PERMISSIONS";
})(CanaryStateReasonCode = exports.CanaryStateReasonCode || (exports.CanaryStateReasonCode = {}));
var CanaryStatus;
(function (CanaryStatus) {
    /**
     * @internal
     */
    CanaryStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryStatus = exports.CanaryStatus || (exports.CanaryStatus = {}));
var CanaryTimeline;
(function (CanaryTimeline) {
    /**
     * @internal
     */
    CanaryTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryTimeline = exports.CanaryTimeline || (exports.CanaryTimeline = {}));
var VpcConfigOutput;
(function (VpcConfigOutput) {
    /**
     * @internal
     */
    VpcConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigOutput = exports.VpcConfigOutput || (exports.VpcConfigOutput = {}));
var Canary;
(function (Canary) {
    /**
     * @internal
     */
    Canary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Canary = exports.Canary || (exports.Canary = {}));
var CanaryRunState;
(function (CanaryRunState) {
    CanaryRunState["FAILED"] = "FAILED";
    CanaryRunState["PASSED"] = "PASSED";
    CanaryRunState["RUNNING"] = "RUNNING";
})(CanaryRunState = exports.CanaryRunState || (exports.CanaryRunState = {}));
var CanaryRunStateReasonCode;
(function (CanaryRunStateReasonCode) {
    CanaryRunStateReasonCode["CANARY_FAILURE"] = "CANARY_FAILURE";
    CanaryRunStateReasonCode["EXECUTION_FAILURE"] = "EXECUTION_FAILURE";
})(CanaryRunStateReasonCode = exports.CanaryRunStateReasonCode || (exports.CanaryRunStateReasonCode = {}));
var CanaryRunStatus;
(function (CanaryRunStatus) {
    /**
     * @internal
     */
    CanaryRunStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryRunStatus = exports.CanaryRunStatus || (exports.CanaryRunStatus = {}));
var CanaryRunTimeline;
(function (CanaryRunTimeline) {
    /**
     * @internal
     */
    CanaryRunTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryRunTimeline = exports.CanaryRunTimeline || (exports.CanaryRunTimeline = {}));
var CanaryRun;
(function (CanaryRun) {
    /**
     * @internal
     */
    CanaryRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryRun = exports.CanaryRun || (exports.CanaryRun = {}));
var CanaryLastRun;
(function (CanaryLastRun) {
    /**
     * @internal
     */
    CanaryLastRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryLastRun = exports.CanaryLastRun || (exports.CanaryLastRun = {}));
var CanaryCodeInput;
(function (CanaryCodeInput) {
    /**
     * @internal
     */
    CanaryCodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryCodeInput = exports.CanaryCodeInput || (exports.CanaryCodeInput = {}));
var CanaryRunConfigInput;
(function (CanaryRunConfigInput) {
    /**
     * @internal
     */
    CanaryRunConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryRunConfigInput = exports.CanaryRunConfigInput || (exports.CanaryRunConfigInput = {}));
var CanaryScheduleInput;
(function (CanaryScheduleInput) {
    /**
     * @internal
     */
    CanaryScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CanaryScheduleInput = exports.CanaryScheduleInput || (exports.CanaryScheduleInput = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var VpcConfigInput;
(function (VpcConfigInput) {
    /**
     * @internal
     */
    VpcConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigInput = exports.VpcConfigInput || (exports.VpcConfigInput = {}));
var CreateCanaryRequest;
(function (CreateCanaryRequest) {
    /**
     * @internal
     */
    CreateCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCanaryRequest = exports.CreateCanaryRequest || (exports.CreateCanaryRequest = {}));
var CreateCanaryResponse;
(function (CreateCanaryResponse) {
    /**
     * @internal
     */
    CreateCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCanaryResponse = exports.CreateCanaryResponse || (exports.CreateCanaryResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DeleteCanaryRequest;
(function (DeleteCanaryRequest) {
    /**
     * @internal
     */
    DeleteCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCanaryRequest = exports.DeleteCanaryRequest || (exports.DeleteCanaryRequest = {}));
var DeleteCanaryResponse;
(function (DeleteCanaryResponse) {
    /**
     * @internal
     */
    DeleteCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCanaryResponse = exports.DeleteCanaryResponse || (exports.DeleteCanaryResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeCanariesRequest;
(function (DescribeCanariesRequest) {
    /**
     * @internal
     */
    DescribeCanariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCanariesRequest = exports.DescribeCanariesRequest || (exports.DescribeCanariesRequest = {}));
var DescribeCanariesResponse;
(function (DescribeCanariesResponse) {
    /**
     * @internal
     */
    DescribeCanariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCanariesResponse = exports.DescribeCanariesResponse || (exports.DescribeCanariesResponse = {}));
var DescribeCanariesLastRunRequest;
(function (DescribeCanariesLastRunRequest) {
    /**
     * @internal
     */
    DescribeCanariesLastRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCanariesLastRunRequest = exports.DescribeCanariesLastRunRequest || (exports.DescribeCanariesLastRunRequest = {}));
var DescribeCanariesLastRunResponse;
(function (DescribeCanariesLastRunResponse) {
    /**
     * @internal
     */
    DescribeCanariesLastRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCanariesLastRunResponse = exports.DescribeCanariesLastRunResponse || (exports.DescribeCanariesLastRunResponse = {}));
var DescribeRuntimeVersionsRequest;
(function (DescribeRuntimeVersionsRequest) {
    /**
     * @internal
     */
    DescribeRuntimeVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuntimeVersionsRequest = exports.DescribeRuntimeVersionsRequest || (exports.DescribeRuntimeVersionsRequest = {}));
var RuntimeVersion;
(function (RuntimeVersion) {
    /**
     * @internal
     */
    RuntimeVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuntimeVersion = exports.RuntimeVersion || (exports.RuntimeVersion = {}));
var DescribeRuntimeVersionsResponse;
(function (DescribeRuntimeVersionsResponse) {
    /**
     * @internal
     */
    DescribeRuntimeVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuntimeVersionsResponse = exports.DescribeRuntimeVersionsResponse || (exports.DescribeRuntimeVersionsResponse = {}));
var GetCanaryRequest;
(function (GetCanaryRequest) {
    /**
     * @internal
     */
    GetCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCanaryRequest = exports.GetCanaryRequest || (exports.GetCanaryRequest = {}));
var GetCanaryResponse;
(function (GetCanaryResponse) {
    /**
     * @internal
     */
    GetCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCanaryResponse = exports.GetCanaryResponse || (exports.GetCanaryResponse = {}));
var GetCanaryRunsRequest;
(function (GetCanaryRunsRequest) {
    /**
     * @internal
     */
    GetCanaryRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCanaryRunsRequest = exports.GetCanaryRunsRequest || (exports.GetCanaryRunsRequest = {}));
var GetCanaryRunsResponse;
(function (GetCanaryRunsResponse) {
    /**
     * @internal
     */
    GetCanaryRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCanaryRunsResponse = exports.GetCanaryRunsResponse || (exports.GetCanaryRunsResponse = {}));
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
var StartCanaryRequest;
(function (StartCanaryRequest) {
    /**
     * @internal
     */
    StartCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCanaryRequest = exports.StartCanaryRequest || (exports.StartCanaryRequest = {}));
var StartCanaryResponse;
(function (StartCanaryResponse) {
    /**
     * @internal
     */
    StartCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCanaryResponse = exports.StartCanaryResponse || (exports.StartCanaryResponse = {}));
var StopCanaryRequest;
(function (StopCanaryRequest) {
    /**
     * @internal
     */
    StopCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCanaryRequest = exports.StopCanaryRequest || (exports.StopCanaryRequest = {}));
var StopCanaryResponse;
(function (StopCanaryResponse) {
    /**
     * @internal
     */
    StopCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCanaryResponse = exports.StopCanaryResponse || (exports.StopCanaryResponse = {}));
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
var UpdateCanaryRequest;
(function (UpdateCanaryRequest) {
    /**
     * @internal
     */
    UpdateCanaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCanaryRequest = exports.UpdateCanaryRequest || (exports.UpdateCanaryRequest = {}));
var UpdateCanaryResponse;
(function (UpdateCanaryResponse) {
    /**
     * @internal
     */
    UpdateCanaryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCanaryResponse = exports.UpdateCanaryResponse || (exports.UpdateCanaryResponse = {}));
//# sourceMappingURL=models_0.js.map