"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobExecutionResponse = exports.JobExecutionState = exports.UpdateJobExecutionRequest = exports.StartNextPendingJobExecutionResponse = exports.StartNextPendingJobExecutionRequest = exports.InvalidStateTransitionException = exports.GetPendingJobExecutionsResponse = exports.JobExecutionSummary = exports.GetPendingJobExecutionsRequest = exports.ThrottlingException = exports.TerminalStateException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.DescribeJobExecutionResponse = exports.JobExecution = exports.JobExecutionStatus = exports.DescribeJobExecutionRequest = exports.CertificateValidationException = void 0;
var CertificateValidationException;
(function (CertificateValidationException) {
    /**
     * @internal
     */
    CertificateValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateValidationException = exports.CertificateValidationException || (exports.CertificateValidationException = {}));
var DescribeJobExecutionRequest;
(function (DescribeJobExecutionRequest) {
    /**
     * @internal
     */
    DescribeJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobExecutionRequest = exports.DescribeJobExecutionRequest || (exports.DescribeJobExecutionRequest = {}));
var JobExecutionStatus;
(function (JobExecutionStatus) {
    JobExecutionStatus["CANCELED"] = "CANCELED";
    JobExecutionStatus["FAILED"] = "FAILED";
    JobExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobExecutionStatus["QUEUED"] = "QUEUED";
    JobExecutionStatus["REJECTED"] = "REJECTED";
    JobExecutionStatus["REMOVED"] = "REMOVED";
    JobExecutionStatus["SUCCEEDED"] = "SUCCEEDED";
    JobExecutionStatus["TIMED_OUT"] = "TIMED_OUT";
})(JobExecutionStatus = exports.JobExecutionStatus || (exports.JobExecutionStatus = {}));
var JobExecution;
(function (JobExecution) {
    /**
     * @internal
     */
    JobExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecution = exports.JobExecution || (exports.JobExecution = {}));
var DescribeJobExecutionResponse;
(function (DescribeJobExecutionResponse) {
    /**
     * @internal
     */
    DescribeJobExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobExecutionResponse = exports.DescribeJobExecutionResponse || (exports.DescribeJobExecutionResponse = {}));
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
var TerminalStateException;
(function (TerminalStateException) {
    /**
     * @internal
     */
    TerminalStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminalStateException = exports.TerminalStateException || (exports.TerminalStateException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var GetPendingJobExecutionsRequest;
(function (GetPendingJobExecutionsRequest) {
    /**
     * @internal
     */
    GetPendingJobExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPendingJobExecutionsRequest = exports.GetPendingJobExecutionsRequest || (exports.GetPendingJobExecutionsRequest = {}));
var JobExecutionSummary;
(function (JobExecutionSummary) {
    /**
     * @internal
     */
    JobExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionSummary = exports.JobExecutionSummary || (exports.JobExecutionSummary = {}));
var GetPendingJobExecutionsResponse;
(function (GetPendingJobExecutionsResponse) {
    /**
     * @internal
     */
    GetPendingJobExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPendingJobExecutionsResponse = exports.GetPendingJobExecutionsResponse || (exports.GetPendingJobExecutionsResponse = {}));
var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
    /**
     * @internal
     */
    InvalidStateTransitionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateTransitionException = exports.InvalidStateTransitionException || (exports.InvalidStateTransitionException = {}));
var StartNextPendingJobExecutionRequest;
(function (StartNextPendingJobExecutionRequest) {
    /**
     * @internal
     */
    StartNextPendingJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNextPendingJobExecutionRequest = exports.StartNextPendingJobExecutionRequest || (exports.StartNextPendingJobExecutionRequest = {}));
var StartNextPendingJobExecutionResponse;
(function (StartNextPendingJobExecutionResponse) {
    /**
     * @internal
     */
    StartNextPendingJobExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNextPendingJobExecutionResponse = exports.StartNextPendingJobExecutionResponse || (exports.StartNextPendingJobExecutionResponse = {}));
var UpdateJobExecutionRequest;
(function (UpdateJobExecutionRequest) {
    /**
     * @internal
     */
    UpdateJobExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobExecutionRequest = exports.UpdateJobExecutionRequest || (exports.UpdateJobExecutionRequest = {}));
var JobExecutionState;
(function (JobExecutionState) {
    /**
     * @internal
     */
    JobExecutionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionState = exports.JobExecutionState || (exports.JobExecutionState = {}));
var UpdateJobExecutionResponse;
(function (UpdateJobExecutionResponse) {
    /**
     * @internal
     */
    UpdateJobExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobExecutionResponse = exports.UpdateJobExecutionResponse || (exports.UpdateJobExecutionResponse = {}));
//# sourceMappingURL=models_0.js.map