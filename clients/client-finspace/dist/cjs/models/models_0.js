"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnvironmentResponse = exports.UpdateEnvironmentRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.InvalidRequestException = exports.ListEnvironmentsResponse = exports.ListEnvironmentsRequest = exports.GetEnvironmentResponse = exports.Environment = exports.EnvironmentStatus = exports.GetEnvironmentRequest = exports.ResourceNotFoundException = exports.DeleteEnvironmentResponse = exports.DeleteEnvironmentRequest = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.LimitExceededException = exports.InternalServerException = exports.CreateEnvironmentResponse = exports.CreateEnvironmentRequest = exports.FederationParameters = exports.FederationMode = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var FederationMode;
(function (FederationMode) {
    FederationMode["FEDERATED"] = "FEDERATED";
    FederationMode["LOCAL"] = "LOCAL";
})(FederationMode = exports.FederationMode || (exports.FederationMode = {}));
var FederationParameters;
(function (FederationParameters) {
    /**
     * @internal
     */
    FederationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FederationParameters = exports.FederationParameters || (exports.FederationParameters = {}));
var CreateEnvironmentRequest;
(function (CreateEnvironmentRequest) {
    /**
     * @internal
     */
    CreateEnvironmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEnvironmentRequest = exports.CreateEnvironmentRequest || (exports.CreateEnvironmentRequest = {}));
var CreateEnvironmentResponse;
(function (CreateEnvironmentResponse) {
    /**
     * @internal
     */
    CreateEnvironmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEnvironmentResponse = exports.CreateEnvironmentResponse || (exports.CreateEnvironmentResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
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
var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
    /**
     * @internal
     */
    DeleteEnvironmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEnvironmentRequest = exports.DeleteEnvironmentRequest || (exports.DeleteEnvironmentRequest = {}));
var DeleteEnvironmentResponse;
(function (DeleteEnvironmentResponse) {
    /**
     * @internal
     */
    DeleteEnvironmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEnvironmentResponse = exports.DeleteEnvironmentResponse || (exports.DeleteEnvironmentResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var GetEnvironmentRequest;
(function (GetEnvironmentRequest) {
    /**
     * @internal
     */
    GetEnvironmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnvironmentRequest = exports.GetEnvironmentRequest || (exports.GetEnvironmentRequest = {}));
var EnvironmentStatus;
(function (EnvironmentStatus) {
    EnvironmentStatus["CREATED"] = "CREATED";
    EnvironmentStatus["CREATE_REQUESTED"] = "CREATE_REQUESTED";
    EnvironmentStatus["CREATING"] = "CREATING";
    EnvironmentStatus["DELETED"] = "DELETED";
    EnvironmentStatus["DELETE_REQUESTED"] = "DELETE_REQUESTED";
    EnvironmentStatus["DELETING"] = "DELETING";
    EnvironmentStatus["FAILED_CREATION"] = "FAILED_CREATION";
    EnvironmentStatus["FAILED_DELETION"] = "FAILED_DELETION";
    EnvironmentStatus["RETRY_DELETION"] = "RETRY_DELETION";
    EnvironmentStatus["SUSPENDED"] = "SUSPENDED";
})(EnvironmentStatus = exports.EnvironmentStatus || (exports.EnvironmentStatus = {}));
var Environment;
(function (Environment) {
    /**
     * @internal
     */
    Environment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Environment = exports.Environment || (exports.Environment = {}));
var GetEnvironmentResponse;
(function (GetEnvironmentResponse) {
    /**
     * @internal
     */
    GetEnvironmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEnvironmentResponse = exports.GetEnvironmentResponse || (exports.GetEnvironmentResponse = {}));
var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
    /**
     * @internal
     */
    ListEnvironmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnvironmentsRequest = exports.ListEnvironmentsRequest || (exports.ListEnvironmentsRequest = {}));
var ListEnvironmentsResponse;
(function (ListEnvironmentsResponse) {
    /**
     * @internal
     */
    ListEnvironmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEnvironmentsResponse = exports.ListEnvironmentsResponse || (exports.ListEnvironmentsResponse = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
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
var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
    /**
     * @internal
     */
    UpdateEnvironmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnvironmentRequest = exports.UpdateEnvironmentRequest || (exports.UpdateEnvironmentRequest = {}));
var UpdateEnvironmentResponse;
(function (UpdateEnvironmentResponse) {
    /**
     * @internal
     */
    UpdateEnvironmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnvironmentResponse = exports.UpdateEnvironmentResponse || (exports.UpdateEnvironmentResponse = {}));
//# sourceMappingURL=models_0.js.map