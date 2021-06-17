import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var FederationMode;
(function (FederationMode) {
    FederationMode["FEDERATED"] = "FEDERATED";
    FederationMode["LOCAL"] = "LOCAL";
})(FederationMode || (FederationMode = {}));
export var FederationParameters;
(function (FederationParameters) {
    /**
     * @internal
     */
    FederationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FederationParameters || (FederationParameters = {}));
export var CreateEnvironmentRequest;
(function (CreateEnvironmentRequest) {
    /**
     * @internal
     */
    CreateEnvironmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEnvironmentRequest || (CreateEnvironmentRequest = {}));
export var CreateEnvironmentResponse;
(function (CreateEnvironmentResponse) {
    /**
     * @internal
     */
    CreateEnvironmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEnvironmentResponse || (CreateEnvironmentResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
    /**
     * @internal
     */
    DeleteEnvironmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEnvironmentRequest || (DeleteEnvironmentRequest = {}));
export var DeleteEnvironmentResponse;
(function (DeleteEnvironmentResponse) {
    /**
     * @internal
     */
    DeleteEnvironmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEnvironmentResponse || (DeleteEnvironmentResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var GetEnvironmentRequest;
(function (GetEnvironmentRequest) {
    /**
     * @internal
     */
    GetEnvironmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnvironmentRequest || (GetEnvironmentRequest = {}));
export var EnvironmentStatus;
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
})(EnvironmentStatus || (EnvironmentStatus = {}));
export var Environment;
(function (Environment) {
    /**
     * @internal
     */
    Environment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Environment || (Environment = {}));
export var GetEnvironmentResponse;
(function (GetEnvironmentResponse) {
    /**
     * @internal
     */
    GetEnvironmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEnvironmentResponse || (GetEnvironmentResponse = {}));
export var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
    /**
     * @internal
     */
    ListEnvironmentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEnvironmentsRequest || (ListEnvironmentsRequest = {}));
export var ListEnvironmentsResponse;
(function (ListEnvironmentsResponse) {
    /**
     * @internal
     */
    ListEnvironmentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEnvironmentsResponse || (ListEnvironmentsResponse = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
    /**
     * @internal
     */
    UpdateEnvironmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEnvironmentRequest || (UpdateEnvironmentRequest = {}));
export var UpdateEnvironmentResponse;
(function (UpdateEnvironmentResponse) {
    /**
     * @internal
     */
    UpdateEnvironmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEnvironmentResponse || (UpdateEnvironmentResponse = {}));
//# sourceMappingURL=models_0.js.map