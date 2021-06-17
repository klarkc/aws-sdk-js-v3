"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSuiteDefinitionResponse = exports.UpdateSuiteDefinitionRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopSuiteRunResponse = exports.StopSuiteRunRequest = exports.StartSuiteRunResponse = exports.StartSuiteRunRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSuiteRunsResponse = exports.SuiteRunInformation = exports.ListSuiteRunsRequest = exports.ListSuiteDefinitionsResponse = exports.SuiteDefinitionInformation = exports.ListSuiteDefinitionsRequest = exports.GetSuiteRunReportResponse = exports.GetSuiteRunReportRequest = exports.GetSuiteRunResponse = exports.TestResult = exports.GroupResult = exports.TestCaseRun = exports.Status = exports.SuiteRunConfiguration = exports.SuiteRunStatus = exports.GetSuiteRunRequest = exports.ResourceNotFoundException = exports.GetSuiteDefinitionResponse = exports.GetSuiteDefinitionRequest = exports.DeleteSuiteDefinitionResponse = exports.DeleteSuiteDefinitionRequest = exports.ValidationException = exports.InternalServerException = exports.CreateSuiteDefinitionResponse = exports.CreateSuiteDefinitionRequest = exports.SuiteDefinitionConfiguration = exports.DeviceUnderTest = exports.ConflictException = void 0;
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeviceUnderTest;
(function (DeviceUnderTest) {
    /**
     * @internal
     */
    DeviceUnderTest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceUnderTest = exports.DeviceUnderTest || (exports.DeviceUnderTest = {}));
var SuiteDefinitionConfiguration;
(function (SuiteDefinitionConfiguration) {
    /**
     * @internal
     */
    SuiteDefinitionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuiteDefinitionConfiguration = exports.SuiteDefinitionConfiguration || (exports.SuiteDefinitionConfiguration = {}));
var CreateSuiteDefinitionRequest;
(function (CreateSuiteDefinitionRequest) {
    /**
     * @internal
     */
    CreateSuiteDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSuiteDefinitionRequest = exports.CreateSuiteDefinitionRequest || (exports.CreateSuiteDefinitionRequest = {}));
var CreateSuiteDefinitionResponse;
(function (CreateSuiteDefinitionResponse) {
    /**
     * @internal
     */
    CreateSuiteDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSuiteDefinitionResponse = exports.CreateSuiteDefinitionResponse || (exports.CreateSuiteDefinitionResponse = {}));
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
var DeleteSuiteDefinitionRequest;
(function (DeleteSuiteDefinitionRequest) {
    /**
     * @internal
     */
    DeleteSuiteDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuiteDefinitionRequest = exports.DeleteSuiteDefinitionRequest || (exports.DeleteSuiteDefinitionRequest = {}));
var DeleteSuiteDefinitionResponse;
(function (DeleteSuiteDefinitionResponse) {
    /**
     * @internal
     */
    DeleteSuiteDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuiteDefinitionResponse = exports.DeleteSuiteDefinitionResponse || (exports.DeleteSuiteDefinitionResponse = {}));
var GetSuiteDefinitionRequest;
(function (GetSuiteDefinitionRequest) {
    /**
     * @internal
     */
    GetSuiteDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteDefinitionRequest = exports.GetSuiteDefinitionRequest || (exports.GetSuiteDefinitionRequest = {}));
var GetSuiteDefinitionResponse;
(function (GetSuiteDefinitionResponse) {
    /**
     * @internal
     */
    GetSuiteDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteDefinitionResponse = exports.GetSuiteDefinitionResponse || (exports.GetSuiteDefinitionResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var GetSuiteRunRequest;
(function (GetSuiteRunRequest) {
    /**
     * @internal
     */
    GetSuiteRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteRunRequest = exports.GetSuiteRunRequest || (exports.GetSuiteRunRequest = {}));
var SuiteRunStatus;
(function (SuiteRunStatus) {
    SuiteRunStatus["CANCELED"] = "CANCELED";
    SuiteRunStatus["ERROR"] = "ERROR";
    SuiteRunStatus["FAIL"] = "FAIL";
    SuiteRunStatus["PASS"] = "PASS";
    SuiteRunStatus["PASS_WITH_WARNINGS"] = "PASS_WITH_WARNINGS";
    SuiteRunStatus["PENDING"] = "PENDING";
    SuiteRunStatus["RUNNING"] = "RUNNING";
    SuiteRunStatus["STOPPED"] = "STOPPED";
    SuiteRunStatus["STOPPING"] = "STOPPING";
})(SuiteRunStatus = exports.SuiteRunStatus || (exports.SuiteRunStatus = {}));
var SuiteRunConfiguration;
(function (SuiteRunConfiguration) {
    /**
     * @internal
     */
    SuiteRunConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuiteRunConfiguration = exports.SuiteRunConfiguration || (exports.SuiteRunConfiguration = {}));
var Status;
(function (Status) {
    Status["CANCELED"] = "CANCELED";
    Status["ERROR"] = "ERROR";
    Status["FAIL"] = "FAIL";
    Status["PASS"] = "PASS";
    Status["PASS_WITH_WARNINGS"] = "PASS_WITH_WARNINGS";
    Status["PENDING"] = "PENDING";
    Status["RUNNING"] = "RUNNING";
    Status["STOPPED"] = "STOPPED";
    Status["STOPPING"] = "STOPPING";
})(Status = exports.Status || (exports.Status = {}));
var TestCaseRun;
(function (TestCaseRun) {
    /**
     * @internal
     */
    TestCaseRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestCaseRun = exports.TestCaseRun || (exports.TestCaseRun = {}));
var GroupResult;
(function (GroupResult) {
    /**
     * @internal
     */
    GroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupResult = exports.GroupResult || (exports.GroupResult = {}));
var TestResult;
(function (TestResult) {
    /**
     * @internal
     */
    TestResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestResult = exports.TestResult || (exports.TestResult = {}));
var GetSuiteRunResponse;
(function (GetSuiteRunResponse) {
    /**
     * @internal
     */
    GetSuiteRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteRunResponse = exports.GetSuiteRunResponse || (exports.GetSuiteRunResponse = {}));
var GetSuiteRunReportRequest;
(function (GetSuiteRunReportRequest) {
    /**
     * @internal
     */
    GetSuiteRunReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteRunReportRequest = exports.GetSuiteRunReportRequest || (exports.GetSuiteRunReportRequest = {}));
var GetSuiteRunReportResponse;
(function (GetSuiteRunReportResponse) {
    /**
     * @internal
     */
    GetSuiteRunReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteRunReportResponse = exports.GetSuiteRunReportResponse || (exports.GetSuiteRunReportResponse = {}));
var ListSuiteDefinitionsRequest;
(function (ListSuiteDefinitionsRequest) {
    /**
     * @internal
     */
    ListSuiteDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuiteDefinitionsRequest = exports.ListSuiteDefinitionsRequest || (exports.ListSuiteDefinitionsRequest = {}));
var SuiteDefinitionInformation;
(function (SuiteDefinitionInformation) {
    /**
     * @internal
     */
    SuiteDefinitionInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuiteDefinitionInformation = exports.SuiteDefinitionInformation || (exports.SuiteDefinitionInformation = {}));
var ListSuiteDefinitionsResponse;
(function (ListSuiteDefinitionsResponse) {
    /**
     * @internal
     */
    ListSuiteDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuiteDefinitionsResponse = exports.ListSuiteDefinitionsResponse || (exports.ListSuiteDefinitionsResponse = {}));
var ListSuiteRunsRequest;
(function (ListSuiteRunsRequest) {
    /**
     * @internal
     */
    ListSuiteRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuiteRunsRequest = exports.ListSuiteRunsRequest || (exports.ListSuiteRunsRequest = {}));
var SuiteRunInformation;
(function (SuiteRunInformation) {
    /**
     * @internal
     */
    SuiteRunInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuiteRunInformation = exports.SuiteRunInformation || (exports.SuiteRunInformation = {}));
var ListSuiteRunsResponse;
(function (ListSuiteRunsResponse) {
    /**
     * @internal
     */
    ListSuiteRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuiteRunsResponse = exports.ListSuiteRunsResponse || (exports.ListSuiteRunsResponse = {}));
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
var StartSuiteRunRequest;
(function (StartSuiteRunRequest) {
    /**
     * @internal
     */
    StartSuiteRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSuiteRunRequest = exports.StartSuiteRunRequest || (exports.StartSuiteRunRequest = {}));
var StartSuiteRunResponse;
(function (StartSuiteRunResponse) {
    /**
     * @internal
     */
    StartSuiteRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSuiteRunResponse = exports.StartSuiteRunResponse || (exports.StartSuiteRunResponse = {}));
var StopSuiteRunRequest;
(function (StopSuiteRunRequest) {
    /**
     * @internal
     */
    StopSuiteRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopSuiteRunRequest = exports.StopSuiteRunRequest || (exports.StopSuiteRunRequest = {}));
var StopSuiteRunResponse;
(function (StopSuiteRunResponse) {
    /**
     * @internal
     */
    StopSuiteRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopSuiteRunResponse = exports.StopSuiteRunResponse || (exports.StopSuiteRunResponse = {}));
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
var UpdateSuiteDefinitionRequest;
(function (UpdateSuiteDefinitionRequest) {
    /**
     * @internal
     */
    UpdateSuiteDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSuiteDefinitionRequest = exports.UpdateSuiteDefinitionRequest || (exports.UpdateSuiteDefinitionRequest = {}));
var UpdateSuiteDefinitionResponse;
(function (UpdateSuiteDefinitionResponse) {
    /**
     * @internal
     */
    UpdateSuiteDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSuiteDefinitionResponse = exports.UpdateSuiteDefinitionResponse || (exports.UpdateSuiteDefinitionResponse = {}));
//# sourceMappingURL=models_0.js.map