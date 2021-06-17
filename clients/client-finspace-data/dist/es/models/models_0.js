import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ChangeType;
(function (ChangeType) {
    ChangeType["APPEND"] = "APPEND";
    ChangeType["MODIFY"] = "MODIFY";
    ChangeType["REPLACE"] = "REPLACE";
})(ChangeType || (ChangeType = {}));
export var FormatType;
(function (FormatType) {
    FormatType["CSV"] = "CSV";
    FormatType["JSON"] = "JSON";
    FormatType["PARQUET"] = "PARQUET";
    FormatType["XML"] = "XML";
})(FormatType || (FormatType = {}));
export var SourceType;
(function (SourceType) {
    SourceType["S3"] = "S3";
})(SourceType || (SourceType = {}));
export var CreateChangesetRequest;
(function (CreateChangesetRequest) {
    /**
     * @internal
     */
    CreateChangesetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateChangesetRequest || (CreateChangesetRequest = {}));
export var ErrorCategory;
(function (ErrorCategory) {
    ErrorCategory["ACCESS_DENIED"] = "Missing_required_permission_to_perform_this_request";
    ErrorCategory["CANCELLED"] = "Cancelled";
    ErrorCategory["INTERNAL_SERVICE_EXCEPTION"] = "An_internal_error_has_occurred";
    ErrorCategory["RESOURCE_NOT_FOUND"] = "One_or_more_inputs_to_this_request_were_not_found";
    ErrorCategory["SERVICE_QUOTA_EXCEEDED"] = "Service_limits_have_been_exceeded";
    ErrorCategory["THROTTLING"] = "The_system_temporarily_lacks_sufficient_resources_to_process_the_request";
    ErrorCategory["USER_RECOVERABLE"] = "A_user_recoverable_error_has_occurred";
    ErrorCategory["VALIDATION"] = "The_inputs_to_this_request_are_invalid";
})(ErrorCategory || (ErrorCategory = {}));
export var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorInfo || (ErrorInfo = {}));
export var ChangesetStatus;
(function (ChangesetStatus) {
    ChangesetStatus["FAILED"] = "FAILED";
    ChangesetStatus["PENDING"] = "PENDING";
    ChangesetStatus["RUNNING"] = "RUNNING";
    ChangesetStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    ChangesetStatus["SUCCESS"] = "SUCCESS";
})(ChangesetStatus || (ChangesetStatus = {}));
export var ChangesetInfo;
(function (ChangesetInfo) {
    /**
     * @internal
     */
    ChangesetInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChangesetInfo || (ChangesetInfo = {}));
export var CreateChangesetResponse;
(function (CreateChangesetResponse) {
    /**
     * @internal
     */
    CreateChangesetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateChangesetResponse || (CreateChangesetResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
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
export var GetProgrammaticAccessCredentialsRequest;
(function (GetProgrammaticAccessCredentialsRequest) {
    /**
     * @internal
     */
    GetProgrammaticAccessCredentialsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProgrammaticAccessCredentialsRequest || (GetProgrammaticAccessCredentialsRequest = {}));
export var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Credentials || (Credentials = {}));
export var GetProgrammaticAccessCredentialsResponse;
(function (GetProgrammaticAccessCredentialsResponse) {
    /**
     * @internal
     */
    GetProgrammaticAccessCredentialsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProgrammaticAccessCredentialsResponse || (GetProgrammaticAccessCredentialsResponse = {}));
export var LocationType;
(function (LocationType) {
    LocationType["INGESTION"] = "INGESTION";
    LocationType["SAGEMAKER"] = "SAGEMAKER";
})(LocationType || (LocationType = {}));
export var GetWorkingLocationRequest;
(function (GetWorkingLocationRequest) {
    /**
     * @internal
     */
    GetWorkingLocationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWorkingLocationRequest || (GetWorkingLocationRequest = {}));
export var GetWorkingLocationResponse;
(function (GetWorkingLocationResponse) {
    /**
     * @internal
     */
    GetWorkingLocationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWorkingLocationResponse || (GetWorkingLocationResponse = {}));
//# sourceMappingURL=models_0.js.map