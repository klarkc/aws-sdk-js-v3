"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplicationResponse = exports.UpdateApplicationRequest = exports.ConflictException = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.DescribeApplicationResponse = exports.DescribeApplicationRequest = exports.ResourceNotFoundException = exports.DeleteApplicationResponse = exports.DeleteApplicationRequest = exports.ThrottlingException = exports.LimitExceededException = exports.InvalidRequestException = exports.InternalFailureException = exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.ApplicationSummary = exports.ApplicationState = void 0;
var ApplicationState;
(function (ApplicationState) {
    ApplicationState["ACTIVE"] = "ACTIVE";
    ApplicationState["CREATE_FAILED"] = "CREATE_FAILED";
    ApplicationState["CREATING"] = "CREATING";
    ApplicationState["DELETE_FAILED"] = "DELETE_FAILED";
    ApplicationState["DELETING"] = "DELETING";
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    /**
     * @internal
     */
    ApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    /**
     * @internal
     */
    CreateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
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
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    /**
     * @internal
     */
    DeleteApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
    /**
     * @internal
     */
    DeleteApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeApplicationRequest;
(function (DescribeApplicationRequest) {
    /**
     * @internal
     */
    DescribeApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationRequest = exports.DescribeApplicationRequest || (exports.DescribeApplicationRequest = {}));
var DescribeApplicationResponse;
(function (DescribeApplicationResponse) {
    /**
     * @internal
     */
    DescribeApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationResponse = exports.DescribeApplicationResponse || (exports.DescribeApplicationResponse = {}));
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
    /**
     * @internal
     */
    ListApplicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {}));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
    /**
     * @internal
     */
    ListApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {}));
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
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
    /**
     * @internal
     */
    UpdateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {}));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
    /**
     * @internal
     */
    UpdateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {}));
//# sourceMappingURL=models_0.js.map