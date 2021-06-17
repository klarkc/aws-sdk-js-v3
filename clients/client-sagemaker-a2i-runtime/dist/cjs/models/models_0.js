"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopHumanLoopResponse = exports.StopHumanLoopRequest = exports.StartHumanLoopResponse = exports.StartHumanLoopRequest = exports.HumanLoopInput = exports.HumanLoopDataAttributes = exports.ContentClassifier = exports.ServiceQuotaExceededException = exports.ConflictException = exports.ListHumanLoopsResponse = exports.HumanLoopSummary = exports.ListHumanLoopsRequest = exports.SortOrder = exports.DescribeHumanLoopResponse = exports.HumanLoopStatus = exports.HumanLoopOutput = exports.DescribeHumanLoopRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.DeleteHumanLoopResponse = exports.DeleteHumanLoopRequest = void 0;
var DeleteHumanLoopRequest;
(function (DeleteHumanLoopRequest) {
    /**
     * @internal
     */
    DeleteHumanLoopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHumanLoopRequest = exports.DeleteHumanLoopRequest || (exports.DeleteHumanLoopRequest = {}));
var DeleteHumanLoopResponse;
(function (DeleteHumanLoopResponse) {
    /**
     * @internal
     */
    DeleteHumanLoopResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHumanLoopResponse = exports.DeleteHumanLoopResponse || (exports.DeleteHumanLoopResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DescribeHumanLoopRequest;
(function (DescribeHumanLoopRequest) {
    /**
     * @internal
     */
    DescribeHumanLoopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHumanLoopRequest = exports.DescribeHumanLoopRequest || (exports.DescribeHumanLoopRequest = {}));
var HumanLoopOutput;
(function (HumanLoopOutput) {
    /**
     * @internal
     */
    HumanLoopOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopOutput = exports.HumanLoopOutput || (exports.HumanLoopOutput = {}));
var HumanLoopStatus;
(function (HumanLoopStatus) {
    HumanLoopStatus["COMPLETED"] = "Completed";
    HumanLoopStatus["FAILED"] = "Failed";
    HumanLoopStatus["IN_PROGRESS"] = "InProgress";
    HumanLoopStatus["STOPPED"] = "Stopped";
    HumanLoopStatus["STOPPING"] = "Stopping";
})(HumanLoopStatus = exports.HumanLoopStatus || (exports.HumanLoopStatus = {}));
var DescribeHumanLoopResponse;
(function (DescribeHumanLoopResponse) {
    /**
     * @internal
     */
    DescribeHumanLoopResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHumanLoopResponse = exports.DescribeHumanLoopResponse || (exports.DescribeHumanLoopResponse = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "Ascending";
    SortOrder["DESCENDING"] = "Descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListHumanLoopsRequest;
(function (ListHumanLoopsRequest) {
    /**
     * @internal
     */
    ListHumanLoopsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHumanLoopsRequest = exports.ListHumanLoopsRequest || (exports.ListHumanLoopsRequest = {}));
var HumanLoopSummary;
(function (HumanLoopSummary) {
    /**
     * @internal
     */
    HumanLoopSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopSummary = exports.HumanLoopSummary || (exports.HumanLoopSummary = {}));
var ListHumanLoopsResponse;
(function (ListHumanLoopsResponse) {
    /**
     * @internal
     */
    ListHumanLoopsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHumanLoopsResponse = exports.ListHumanLoopsResponse || (exports.ListHumanLoopsResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var HumanLoopDataAttributes;
(function (HumanLoopDataAttributes) {
    /**
     * @internal
     */
    HumanLoopDataAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopDataAttributes = exports.HumanLoopDataAttributes || (exports.HumanLoopDataAttributes = {}));
var HumanLoopInput;
(function (HumanLoopInput) {
    /**
     * @internal
     */
    HumanLoopInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopInput = exports.HumanLoopInput || (exports.HumanLoopInput = {}));
var StartHumanLoopRequest;
(function (StartHumanLoopRequest) {
    /**
     * @internal
     */
    StartHumanLoopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartHumanLoopRequest = exports.StartHumanLoopRequest || (exports.StartHumanLoopRequest = {}));
var StartHumanLoopResponse;
(function (StartHumanLoopResponse) {
    /**
     * @internal
     */
    StartHumanLoopResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartHumanLoopResponse = exports.StartHumanLoopResponse || (exports.StartHumanLoopResponse = {}));
var StopHumanLoopRequest;
(function (StopHumanLoopRequest) {
    /**
     * @internal
     */
    StopHumanLoopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopHumanLoopRequest = exports.StopHumanLoopRequest || (exports.StopHumanLoopRequest = {}));
var StopHumanLoopResponse;
(function (StopHumanLoopResponse) {
    /**
     * @internal
     */
    StopHumanLoopResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopHumanLoopResponse = exports.StopHumanLoopResponse || (exports.StopHumanLoopResponse = {}));
//# sourceMappingURL=models_0.js.map