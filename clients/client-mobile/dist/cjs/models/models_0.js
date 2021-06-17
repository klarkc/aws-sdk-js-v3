"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectResult = exports.UpdateProjectRequest = exports.ListProjectsResult = exports.ProjectSummary = exports.ListProjectsRequest = exports.ListBundlesResult = exports.ListBundlesRequest = exports.ExportProjectResult = exports.ExportProjectRequest = exports.ExportBundleResult = exports.ExportBundleRequest = exports.DescribeProjectResult = exports.DescribeProjectRequest = exports.DescribeBundleResult = exports.BundleDetails = exports.Platform = exports.DescribeBundleRequest = exports.DeleteProjectResult = exports.DeleteProjectRequest = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ServiceUnavailableException = exports.NotFoundException = exports.LimitExceededException = exports.InternalFailureException = exports.CreateProjectResult = exports.ProjectDetails = exports.ProjectState = exports.Resource = exports.CreateProjectRequest = exports.BadRequestException = exports.AccountActionRequiredException = void 0;
var AccountActionRequiredException;
(function (AccountActionRequiredException) {
    /**
     * @internal
     */
    AccountActionRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountActionRequiredException = exports.AccountActionRequiredException || (exports.AccountActionRequiredException = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var ProjectState;
(function (ProjectState) {
    ProjectState["IMPORTING"] = "IMPORTING";
    ProjectState["NORMAL"] = "NORMAL";
    ProjectState["SYNCING"] = "SYNCING";
})(ProjectState = exports.ProjectState || (exports.ProjectState = {}));
var ProjectDetails;
(function (ProjectDetails) {
    /**
     * @internal
     */
    ProjectDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectDetails = exports.ProjectDetails || (exports.ProjectDetails = {}));
var CreateProjectResult;
(function (CreateProjectResult) {
    /**
     * @internal
     */
    CreateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResult = exports.CreateProjectResult || (exports.CreateProjectResult = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResult;
(function (DeleteProjectResult) {
    /**
     * @internal
     */
    DeleteProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResult = exports.DeleteProjectResult || (exports.DeleteProjectResult = {}));
var DescribeBundleRequest;
(function (DescribeBundleRequest) {
    /**
     * @internal
     */
    DescribeBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBundleRequest = exports.DescribeBundleRequest || (exports.DescribeBundleRequest = {}));
var Platform;
(function (Platform) {
    Platform["ANDROID"] = "ANDROID";
    Platform["JAVASCRIPT"] = "JAVASCRIPT";
    Platform["LINUX"] = "LINUX";
    Platform["OBJC"] = "OBJC";
    Platform["OSX"] = "OSX";
    Platform["SWIFT"] = "SWIFT";
    Platform["WINDOWS"] = "WINDOWS";
})(Platform = exports.Platform || (exports.Platform = {}));
var BundleDetails;
(function (BundleDetails) {
    /**
     * @internal
     */
    BundleDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BundleDetails = exports.BundleDetails || (exports.BundleDetails = {}));
var DescribeBundleResult;
(function (DescribeBundleResult) {
    /**
     * @internal
     */
    DescribeBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBundleResult = exports.DescribeBundleResult || (exports.DescribeBundleResult = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var DescribeProjectResult;
(function (DescribeProjectResult) {
    /**
     * @internal
     */
    DescribeProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectResult = exports.DescribeProjectResult || (exports.DescribeProjectResult = {}));
var ExportBundleRequest;
(function (ExportBundleRequest) {
    /**
     * @internal
     */
    ExportBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportBundleRequest = exports.ExportBundleRequest || (exports.ExportBundleRequest = {}));
var ExportBundleResult;
(function (ExportBundleResult) {
    /**
     * @internal
     */
    ExportBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportBundleResult = exports.ExportBundleResult || (exports.ExportBundleResult = {}));
var ExportProjectRequest;
(function (ExportProjectRequest) {
    /**
     * @internal
     */
    ExportProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportProjectRequest = exports.ExportProjectRequest || (exports.ExportProjectRequest = {}));
var ExportProjectResult;
(function (ExportProjectResult) {
    /**
     * @internal
     */
    ExportProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportProjectResult = exports.ExportProjectResult || (exports.ExportProjectResult = {}));
var ListBundlesRequest;
(function (ListBundlesRequest) {
    /**
     * @internal
     */
    ListBundlesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBundlesRequest = exports.ListBundlesRequest || (exports.ListBundlesRequest = {}));
var ListBundlesResult;
(function (ListBundlesResult) {
    /**
     * @internal
     */
    ListBundlesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBundlesResult = exports.ListBundlesResult || (exports.ListBundlesResult = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSummary = exports.ProjectSummary || (exports.ProjectSummary = {}));
var ListProjectsResult;
(function (ListProjectsResult) {
    /**
     * @internal
     */
    ListProjectsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResult = exports.ListProjectsResult || (exports.ListProjectsResult = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResult;
(function (UpdateProjectResult) {
    /**
     * @internal
     */
    UpdateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResult = exports.UpdateProjectResult || (exports.UpdateProjectResult = {}));
//# sourceMappingURL=models_0.js.map