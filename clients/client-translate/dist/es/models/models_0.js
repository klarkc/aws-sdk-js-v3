import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var Term;
(function (Term) {
    /**
     * @internal
     */
    Term.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Term || (Term = {}));
export var AppliedTerminology;
(function (AppliedTerminology) {
    /**
     * @internal
     */
    AppliedTerminology.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppliedTerminology || (AppliedTerminology = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType || (EncryptionKeyType = {}));
export var EncryptionKey;
(function (EncryptionKey) {
    /**
     * @internal
     */
    EncryptionKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionKey || (EncryptionKey = {}));
export var ParallelDataFormat;
(function (ParallelDataFormat) {
    ParallelDataFormat["CSV"] = "CSV";
    ParallelDataFormat["TMX"] = "TMX";
    ParallelDataFormat["TSV"] = "TSV";
})(ParallelDataFormat || (ParallelDataFormat = {}));
export var ParallelDataConfig;
(function (ParallelDataConfig) {
    /**
     * @internal
     */
    ParallelDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParallelDataConfig || (ParallelDataConfig = {}));
export var CreateParallelDataRequest;
(function (CreateParallelDataRequest) {
    /**
     * @internal
     */
    CreateParallelDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateParallelDataRequest || (CreateParallelDataRequest = {}));
export var ParallelDataStatus;
(function (ParallelDataStatus) {
    ParallelDataStatus["ACTIVE"] = "ACTIVE";
    ParallelDataStatus["CREATING"] = "CREATING";
    ParallelDataStatus["DELETING"] = "DELETING";
    ParallelDataStatus["FAILED"] = "FAILED";
    ParallelDataStatus["UPDATING"] = "UPDATING";
})(ParallelDataStatus || (ParallelDataStatus = {}));
export var CreateParallelDataResponse;
(function (CreateParallelDataResponse) {
    /**
     * @internal
     */
    CreateParallelDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateParallelDataResponse || (CreateParallelDataResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var DeleteParallelDataRequest;
(function (DeleteParallelDataRequest) {
    /**
     * @internal
     */
    DeleteParallelDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParallelDataRequest || (DeleteParallelDataRequest = {}));
export var DeleteParallelDataResponse;
(function (DeleteParallelDataResponse) {
    /**
     * @internal
     */
    DeleteParallelDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParallelDataResponse || (DeleteParallelDataResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeleteTerminologyRequest;
(function (DeleteTerminologyRequest) {
    /**
     * @internal
     */
    DeleteTerminologyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTerminologyRequest || (DeleteTerminologyRequest = {}));
export var DescribeTextTranslationJobRequest;
(function (DescribeTextTranslationJobRequest) {
    /**
     * @internal
     */
    DescribeTextTranslationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTextTranslationJobRequest || (DescribeTextTranslationJobRequest = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDataConfig || (InputDataConfig = {}));
export var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobDetails || (JobDetails = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["COMPLETED_WITH_ERROR"] = "COMPLETED_WITH_ERROR";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus || (JobStatus = {}));
export var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDataConfig || (OutputDataConfig = {}));
export var TextTranslationJobProperties;
(function (TextTranslationJobProperties) {
    /**
     * @internal
     */
    TextTranslationJobProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextTranslationJobProperties || (TextTranslationJobProperties = {}));
export var DescribeTextTranslationJobResponse;
(function (DescribeTextTranslationJobResponse) {
    /**
     * @internal
     */
    DescribeTextTranslationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTextTranslationJobResponse || (DescribeTextTranslationJobResponse = {}));
export var GetParallelDataRequest;
(function (GetParallelDataRequest) {
    /**
     * @internal
     */
    GetParallelDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParallelDataRequest || (GetParallelDataRequest = {}));
export var ParallelDataDataLocation;
(function (ParallelDataDataLocation) {
    /**
     * @internal
     */
    ParallelDataDataLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParallelDataDataLocation || (ParallelDataDataLocation = {}));
export var ParallelDataProperties;
(function (ParallelDataProperties) {
    /**
     * @internal
     */
    ParallelDataProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParallelDataProperties || (ParallelDataProperties = {}));
export var GetParallelDataResponse;
(function (GetParallelDataResponse) {
    /**
     * @internal
     */
    GetParallelDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParallelDataResponse || (GetParallelDataResponse = {}));
export var TerminologyDataFormat;
(function (TerminologyDataFormat) {
    TerminologyDataFormat["CSV"] = "CSV";
    TerminologyDataFormat["TMX"] = "TMX";
})(TerminologyDataFormat || (TerminologyDataFormat = {}));
export var GetTerminologyRequest;
(function (GetTerminologyRequest) {
    /**
     * @internal
     */
    GetTerminologyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTerminologyRequest || (GetTerminologyRequest = {}));
export var TerminologyDataLocation;
(function (TerminologyDataLocation) {
    /**
     * @internal
     */
    TerminologyDataLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminologyDataLocation || (TerminologyDataLocation = {}));
export var TerminologyProperties;
(function (TerminologyProperties) {
    /**
     * @internal
     */
    TerminologyProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminologyProperties || (TerminologyProperties = {}));
export var GetTerminologyResponse;
(function (GetTerminologyResponse) {
    /**
     * @internal
     */
    GetTerminologyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTerminologyResponse || (GetTerminologyResponse = {}));
export var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["OVERWRITE"] = "OVERWRITE";
})(MergeStrategy || (MergeStrategy = {}));
export var TerminologyData;
(function (TerminologyData) {
    /**
     * @internal
     */
    TerminologyData.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.File && { File: SENSITIVE_STRING }))); };
})(TerminologyData || (TerminologyData = {}));
export var ImportTerminologyRequest;
(function (ImportTerminologyRequest) {
    /**
     * @internal
     */
    ImportTerminologyRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TerminologyData && { TerminologyData: TerminologyData.filterSensitiveLog(obj.TerminologyData) }))); };
})(ImportTerminologyRequest || (ImportTerminologyRequest = {}));
export var ImportTerminologyResponse;
(function (ImportTerminologyResponse) {
    /**
     * @internal
     */
    ImportTerminologyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportTerminologyResponse || (ImportTerminologyResponse = {}));
export var ListParallelDataRequest;
(function (ListParallelDataRequest) {
    /**
     * @internal
     */
    ListParallelDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListParallelDataRequest || (ListParallelDataRequest = {}));
export var ListParallelDataResponse;
(function (ListParallelDataResponse) {
    /**
     * @internal
     */
    ListParallelDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListParallelDataResponse || (ListParallelDataResponse = {}));
export var ListTerminologiesRequest;
(function (ListTerminologiesRequest) {
    /**
     * @internal
     */
    ListTerminologiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTerminologiesRequest || (ListTerminologiesRequest = {}));
export var ListTerminologiesResponse;
(function (ListTerminologiesResponse) {
    /**
     * @internal
     */
    ListTerminologiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTerminologiesResponse || (ListTerminologiesResponse = {}));
export var InvalidFilterException;
(function (InvalidFilterException) {
    /**
     * @internal
     */
    InvalidFilterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFilterException || (InvalidFilterException = {}));
export var TextTranslationJobFilter;
(function (TextTranslationJobFilter) {
    /**
     * @internal
     */
    TextTranslationJobFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextTranslationJobFilter || (TextTranslationJobFilter = {}));
export var ListTextTranslationJobsRequest;
(function (ListTextTranslationJobsRequest) {
    /**
     * @internal
     */
    ListTextTranslationJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTextTranslationJobsRequest || (ListTextTranslationJobsRequest = {}));
export var ListTextTranslationJobsResponse;
(function (ListTextTranslationJobsResponse) {
    /**
     * @internal
     */
    ListTextTranslationJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTextTranslationJobsResponse || (ListTextTranslationJobsResponse = {}));
export var StartTextTranslationJobRequest;
(function (StartTextTranslationJobRequest) {
    /**
     * @internal
     */
    StartTextTranslationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTextTranslationJobRequest || (StartTextTranslationJobRequest = {}));
export var StartTextTranslationJobResponse;
(function (StartTextTranslationJobResponse) {
    /**
     * @internal
     */
    StartTextTranslationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTextTranslationJobResponse || (StartTextTranslationJobResponse = {}));
export var UnsupportedLanguagePairException;
(function (UnsupportedLanguagePairException) {
    /**
     * @internal
     */
    UnsupportedLanguagePairException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedLanguagePairException || (UnsupportedLanguagePairException = {}));
export var StopTextTranslationJobRequest;
(function (StopTextTranslationJobRequest) {
    /**
     * @internal
     */
    StopTextTranslationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopTextTranslationJobRequest || (StopTextTranslationJobRequest = {}));
export var StopTextTranslationJobResponse;
(function (StopTextTranslationJobResponse) {
    /**
     * @internal
     */
    StopTextTranslationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopTextTranslationJobResponse || (StopTextTranslationJobResponse = {}));
export var DetectedLanguageLowConfidenceException;
(function (DetectedLanguageLowConfidenceException) {
    /**
     * @internal
     */
    DetectedLanguageLowConfidenceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectedLanguageLowConfidenceException || (DetectedLanguageLowConfidenceException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    /**
     * @internal
     */
    TextSizeLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextSizeLimitExceededException || (TextSizeLimitExceededException = {}));
export var TranslateTextRequest;
(function (TranslateTextRequest) {
    /**
     * @internal
     */
    TranslateTextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranslateTextRequest || (TranslateTextRequest = {}));
export var TranslateTextResponse;
(function (TranslateTextResponse) {
    /**
     * @internal
     */
    TranslateTextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranslateTextResponse || (TranslateTextResponse = {}));
export var UpdateParallelDataRequest;
(function (UpdateParallelDataRequest) {
    /**
     * @internal
     */
    UpdateParallelDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateParallelDataRequest || (UpdateParallelDataRequest = {}));
export var UpdateParallelDataResponse;
(function (UpdateParallelDataResponse) {
    /**
     * @internal
     */
    UpdateParallelDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateParallelDataResponse || (UpdateParallelDataResponse = {}));
//# sourceMappingURL=models_0.js.map