"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkingLocationResponse = exports.GetWorkingLocationRequest = exports.LocationType = exports.GetProgrammaticAccessCredentialsResponse = exports.Credentials = exports.GetProgrammaticAccessCredentialsRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.CreateChangesetResponse = exports.ChangesetInfo = exports.ChangesetStatus = exports.ErrorInfo = exports.ErrorCategory = exports.CreateChangesetRequest = exports.SourceType = exports.FormatType = exports.ChangeType = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ChangeType;
(function (ChangeType) {
    ChangeType["APPEND"] = "APPEND";
    ChangeType["MODIFY"] = "MODIFY";
    ChangeType["REPLACE"] = "REPLACE";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
var FormatType;
(function (FormatType) {
    FormatType["CSV"] = "CSV";
    FormatType["JSON"] = "JSON";
    FormatType["PARQUET"] = "PARQUET";
    FormatType["XML"] = "XML";
})(FormatType = exports.FormatType || (exports.FormatType = {}));
var SourceType;
(function (SourceType) {
    SourceType["S3"] = "S3";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var CreateChangesetRequest;
(function (CreateChangesetRequest) {
    /**
     * @internal
     */
    CreateChangesetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChangesetRequest = exports.CreateChangesetRequest || (exports.CreateChangesetRequest = {}));
var ErrorCategory;
(function (ErrorCategory) {
    ErrorCategory["ACCESS_DENIED"] = "Missing_required_permission_to_perform_this_request";
    ErrorCategory["CANCELLED"] = "Cancelled";
    ErrorCategory["INTERNAL_SERVICE_EXCEPTION"] = "An_internal_error_has_occurred";
    ErrorCategory["RESOURCE_NOT_FOUND"] = "One_or_more_inputs_to_this_request_were_not_found";
    ErrorCategory["SERVICE_QUOTA_EXCEEDED"] = "Service_limits_have_been_exceeded";
    ErrorCategory["THROTTLING"] = "The_system_temporarily_lacks_sufficient_resources_to_process_the_request";
    ErrorCategory["USER_RECOVERABLE"] = "A_user_recoverable_error_has_occurred";
    ErrorCategory["VALIDATION"] = "The_inputs_to_this_request_are_invalid";
})(ErrorCategory = exports.ErrorCategory || (exports.ErrorCategory = {}));
var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorInfo = exports.ErrorInfo || (exports.ErrorInfo = {}));
var ChangesetStatus;
(function (ChangesetStatus) {
    ChangesetStatus["FAILED"] = "FAILED";
    ChangesetStatus["PENDING"] = "PENDING";
    ChangesetStatus["RUNNING"] = "RUNNING";
    ChangesetStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    ChangesetStatus["SUCCESS"] = "SUCCESS";
})(ChangesetStatus = exports.ChangesetStatus || (exports.ChangesetStatus = {}));
var ChangesetInfo;
(function (ChangesetInfo) {
    /**
     * @internal
     */
    ChangesetInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangesetInfo = exports.ChangesetInfo || (exports.ChangesetInfo = {}));
var CreateChangesetResponse;
(function (CreateChangesetResponse) {
    /**
     * @internal
     */
    CreateChangesetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChangesetResponse = exports.CreateChangesetResponse || (exports.CreateChangesetResponse = {}));
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
var GetProgrammaticAccessCredentialsRequest;
(function (GetProgrammaticAccessCredentialsRequest) {
    /**
     * @internal
     */
    GetProgrammaticAccessCredentialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProgrammaticAccessCredentialsRequest = exports.GetProgrammaticAccessCredentialsRequest || (exports.GetProgrammaticAccessCredentialsRequest = {}));
var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var GetProgrammaticAccessCredentialsResponse;
(function (GetProgrammaticAccessCredentialsResponse) {
    /**
     * @internal
     */
    GetProgrammaticAccessCredentialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProgrammaticAccessCredentialsResponse = exports.GetProgrammaticAccessCredentialsResponse || (exports.GetProgrammaticAccessCredentialsResponse = {}));
var LocationType;
(function (LocationType) {
    LocationType["INGESTION"] = "INGESTION";
    LocationType["SAGEMAKER"] = "SAGEMAKER";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
var GetWorkingLocationRequest;
(function (GetWorkingLocationRequest) {
    /**
     * @internal
     */
    GetWorkingLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkingLocationRequest = exports.GetWorkingLocationRequest || (exports.GetWorkingLocationRequest = {}));
var GetWorkingLocationResponse;
(function (GetWorkingLocationResponse) {
    /**
     * @internal
     */
    GetWorkingLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkingLocationResponse = exports.GetWorkingLocationResponse || (exports.GetWorkingLocationResponse = {}));
//# sourceMappingURL=models_0.js.map