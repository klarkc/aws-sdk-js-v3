"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTextTranslationJobResponse = exports.StartTextTranslationJobRequest = exports.ListTextTranslationJobsResponse = exports.ListTextTranslationJobsRequest = exports.TextTranslationJobFilter = exports.InvalidFilterException = exports.ListTerminologiesResponse = exports.ListTerminologiesRequest = exports.ListParallelDataResponse = exports.ListParallelDataRequest = exports.ImportTerminologyResponse = exports.ImportTerminologyRequest = exports.TerminologyData = exports.MergeStrategy = exports.GetTerminologyResponse = exports.TerminologyProperties = exports.TerminologyDataLocation = exports.GetTerminologyRequest = exports.TerminologyDataFormat = exports.GetParallelDataResponse = exports.ParallelDataProperties = exports.ParallelDataDataLocation = exports.GetParallelDataRequest = exports.DescribeTextTranslationJobResponse = exports.TextTranslationJobProperties = exports.OutputDataConfig = exports.JobStatus = exports.JobDetails = exports.InputDataConfig = exports.DescribeTextTranslationJobRequest = exports.DeleteTerminologyRequest = exports.ResourceNotFoundException = exports.DeleteParallelDataResponse = exports.DeleteParallelDataRequest = exports.ConcurrentModificationException = exports.TooManyRequestsException = exports.LimitExceededException = exports.InvalidRequestException = exports.InvalidParameterValueException = exports.InternalServerException = exports.CreateParallelDataResponse = exports.ParallelDataStatus = exports.CreateParallelDataRequest = exports.ParallelDataConfig = exports.ParallelDataFormat = exports.EncryptionKey = exports.EncryptionKeyType = exports.ConflictException = exports.AppliedTerminology = exports.Term = void 0;
exports.UpdateParallelDataResponse = exports.UpdateParallelDataRequest = exports.TranslateTextResponse = exports.TranslateTextRequest = exports.TextSizeLimitExceededException = exports.ServiceUnavailableException = exports.DetectedLanguageLowConfidenceException = exports.StopTextTranslationJobResponse = exports.StopTextTranslationJobRequest = exports.UnsupportedLanguagePairException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Term;
(function (Term) {
    /**
     * @internal
     */
    Term.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Term = exports.Term || (exports.Term = {}));
var AppliedTerminology;
(function (AppliedTerminology) {
    /**
     * @internal
     */
    AppliedTerminology.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppliedTerminology = exports.AppliedTerminology || (exports.AppliedTerminology = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType = exports.EncryptionKeyType || (exports.EncryptionKeyType = {}));
var EncryptionKey;
(function (EncryptionKey) {
    /**
     * @internal
     */
    EncryptionKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKey = exports.EncryptionKey || (exports.EncryptionKey = {}));
var ParallelDataFormat;
(function (ParallelDataFormat) {
    ParallelDataFormat["CSV"] = "CSV";
    ParallelDataFormat["TMX"] = "TMX";
    ParallelDataFormat["TSV"] = "TSV";
})(ParallelDataFormat = exports.ParallelDataFormat || (exports.ParallelDataFormat = {}));
var ParallelDataConfig;
(function (ParallelDataConfig) {
    /**
     * @internal
     */
    ParallelDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelDataConfig = exports.ParallelDataConfig || (exports.ParallelDataConfig = {}));
var CreateParallelDataRequest;
(function (CreateParallelDataRequest) {
    /**
     * @internal
     */
    CreateParallelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParallelDataRequest = exports.CreateParallelDataRequest || (exports.CreateParallelDataRequest = {}));
var ParallelDataStatus;
(function (ParallelDataStatus) {
    ParallelDataStatus["ACTIVE"] = "ACTIVE";
    ParallelDataStatus["CREATING"] = "CREATING";
    ParallelDataStatus["DELETING"] = "DELETING";
    ParallelDataStatus["FAILED"] = "FAILED";
    ParallelDataStatus["UPDATING"] = "UPDATING";
})(ParallelDataStatus = exports.ParallelDataStatus || (exports.ParallelDataStatus = {}));
var CreateParallelDataResponse;
(function (CreateParallelDataResponse) {
    /**
     * @internal
     */
    CreateParallelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParallelDataResponse = exports.CreateParallelDataResponse || (exports.CreateParallelDataResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
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
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var DeleteParallelDataRequest;
(function (DeleteParallelDataRequest) {
    /**
     * @internal
     */
    DeleteParallelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParallelDataRequest = exports.DeleteParallelDataRequest || (exports.DeleteParallelDataRequest = {}));
var DeleteParallelDataResponse;
(function (DeleteParallelDataResponse) {
    /**
     * @internal
     */
    DeleteParallelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParallelDataResponse = exports.DeleteParallelDataResponse || (exports.DeleteParallelDataResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteTerminologyRequest;
(function (DeleteTerminologyRequest) {
    /**
     * @internal
     */
    DeleteTerminologyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTerminologyRequest = exports.DeleteTerminologyRequest || (exports.DeleteTerminologyRequest = {}));
var DescribeTextTranslationJobRequest;
(function (DescribeTextTranslationJobRequest) {
    /**
     * @internal
     */
    DescribeTextTranslationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTextTranslationJobRequest = exports.DescribeTextTranslationJobRequest || (exports.DescribeTextTranslationJobRequest = {}));
var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobDetails = exports.JobDetails || (exports.JobDetails = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["COMPLETED_WITH_ERROR"] = "COMPLETED_WITH_ERROR";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var TextTranslationJobProperties;
(function (TextTranslationJobProperties) {
    /**
     * @internal
     */
    TextTranslationJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextTranslationJobProperties = exports.TextTranslationJobProperties || (exports.TextTranslationJobProperties = {}));
var DescribeTextTranslationJobResponse;
(function (DescribeTextTranslationJobResponse) {
    /**
     * @internal
     */
    DescribeTextTranslationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTextTranslationJobResponse = exports.DescribeTextTranslationJobResponse || (exports.DescribeTextTranslationJobResponse = {}));
var GetParallelDataRequest;
(function (GetParallelDataRequest) {
    /**
     * @internal
     */
    GetParallelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParallelDataRequest = exports.GetParallelDataRequest || (exports.GetParallelDataRequest = {}));
var ParallelDataDataLocation;
(function (ParallelDataDataLocation) {
    /**
     * @internal
     */
    ParallelDataDataLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelDataDataLocation = exports.ParallelDataDataLocation || (exports.ParallelDataDataLocation = {}));
var ParallelDataProperties;
(function (ParallelDataProperties) {
    /**
     * @internal
     */
    ParallelDataProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelDataProperties = exports.ParallelDataProperties || (exports.ParallelDataProperties = {}));
var GetParallelDataResponse;
(function (GetParallelDataResponse) {
    /**
     * @internal
     */
    GetParallelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParallelDataResponse = exports.GetParallelDataResponse || (exports.GetParallelDataResponse = {}));
var TerminologyDataFormat;
(function (TerminologyDataFormat) {
    TerminologyDataFormat["CSV"] = "CSV";
    TerminologyDataFormat["TMX"] = "TMX";
})(TerminologyDataFormat = exports.TerminologyDataFormat || (exports.TerminologyDataFormat = {}));
var GetTerminologyRequest;
(function (GetTerminologyRequest) {
    /**
     * @internal
     */
    GetTerminologyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTerminologyRequest = exports.GetTerminologyRequest || (exports.GetTerminologyRequest = {}));
var TerminologyDataLocation;
(function (TerminologyDataLocation) {
    /**
     * @internal
     */
    TerminologyDataLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminologyDataLocation = exports.TerminologyDataLocation || (exports.TerminologyDataLocation = {}));
var TerminologyProperties;
(function (TerminologyProperties) {
    /**
     * @internal
     */
    TerminologyProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminologyProperties = exports.TerminologyProperties || (exports.TerminologyProperties = {}));
var GetTerminologyResponse;
(function (GetTerminologyResponse) {
    /**
     * @internal
     */
    GetTerminologyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTerminologyResponse = exports.GetTerminologyResponse || (exports.GetTerminologyResponse = {}));
var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["OVERWRITE"] = "OVERWRITE";
})(MergeStrategy = exports.MergeStrategy || (exports.MergeStrategy = {}));
var TerminologyData;
(function (TerminologyData) {
    /**
     * @internal
     */
    TerminologyData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.File && { File: smithy_client_1.SENSITIVE_STRING }),
    });
})(TerminologyData = exports.TerminologyData || (exports.TerminologyData = {}));
var ImportTerminologyRequest;
(function (ImportTerminologyRequest) {
    /**
     * @internal
     */
    ImportTerminologyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TerminologyData && { TerminologyData: TerminologyData.filterSensitiveLog(obj.TerminologyData) }),
    });
})(ImportTerminologyRequest = exports.ImportTerminologyRequest || (exports.ImportTerminologyRequest = {}));
var ImportTerminologyResponse;
(function (ImportTerminologyResponse) {
    /**
     * @internal
     */
    ImportTerminologyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportTerminologyResponse = exports.ImportTerminologyResponse || (exports.ImportTerminologyResponse = {}));
var ListParallelDataRequest;
(function (ListParallelDataRequest) {
    /**
     * @internal
     */
    ListParallelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListParallelDataRequest = exports.ListParallelDataRequest || (exports.ListParallelDataRequest = {}));
var ListParallelDataResponse;
(function (ListParallelDataResponse) {
    /**
     * @internal
     */
    ListParallelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListParallelDataResponse = exports.ListParallelDataResponse || (exports.ListParallelDataResponse = {}));
var ListTerminologiesRequest;
(function (ListTerminologiesRequest) {
    /**
     * @internal
     */
    ListTerminologiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTerminologiesRequest = exports.ListTerminologiesRequest || (exports.ListTerminologiesRequest = {}));
var ListTerminologiesResponse;
(function (ListTerminologiesResponse) {
    /**
     * @internal
     */
    ListTerminologiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTerminologiesResponse = exports.ListTerminologiesResponse || (exports.ListTerminologiesResponse = {}));
var InvalidFilterException;
(function (InvalidFilterException) {
    /**
     * @internal
     */
    InvalidFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilterException = exports.InvalidFilterException || (exports.InvalidFilterException = {}));
var TextTranslationJobFilter;
(function (TextTranslationJobFilter) {
    /**
     * @internal
     */
    TextTranslationJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextTranslationJobFilter = exports.TextTranslationJobFilter || (exports.TextTranslationJobFilter = {}));
var ListTextTranslationJobsRequest;
(function (ListTextTranslationJobsRequest) {
    /**
     * @internal
     */
    ListTextTranslationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTextTranslationJobsRequest = exports.ListTextTranslationJobsRequest || (exports.ListTextTranslationJobsRequest = {}));
var ListTextTranslationJobsResponse;
(function (ListTextTranslationJobsResponse) {
    /**
     * @internal
     */
    ListTextTranslationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTextTranslationJobsResponse = exports.ListTextTranslationJobsResponse || (exports.ListTextTranslationJobsResponse = {}));
var StartTextTranslationJobRequest;
(function (StartTextTranslationJobRequest) {
    /**
     * @internal
     */
    StartTextTranslationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTextTranslationJobRequest = exports.StartTextTranslationJobRequest || (exports.StartTextTranslationJobRequest = {}));
var StartTextTranslationJobResponse;
(function (StartTextTranslationJobResponse) {
    /**
     * @internal
     */
    StartTextTranslationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTextTranslationJobResponse = exports.StartTextTranslationJobResponse || (exports.StartTextTranslationJobResponse = {}));
var UnsupportedLanguagePairException;
(function (UnsupportedLanguagePairException) {
    /**
     * @internal
     */
    UnsupportedLanguagePairException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedLanguagePairException = exports.UnsupportedLanguagePairException || (exports.UnsupportedLanguagePairException = {}));
var StopTextTranslationJobRequest;
(function (StopTextTranslationJobRequest) {
    /**
     * @internal
     */
    StopTextTranslationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTextTranslationJobRequest = exports.StopTextTranslationJobRequest || (exports.StopTextTranslationJobRequest = {}));
var StopTextTranslationJobResponse;
(function (StopTextTranslationJobResponse) {
    /**
     * @internal
     */
    StopTextTranslationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTextTranslationJobResponse = exports.StopTextTranslationJobResponse || (exports.StopTextTranslationJobResponse = {}));
var DetectedLanguageLowConfidenceException;
(function (DetectedLanguageLowConfidenceException) {
    /**
     * @internal
     */
    DetectedLanguageLowConfidenceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectedLanguageLowConfidenceException = exports.DetectedLanguageLowConfidenceException || (exports.DetectedLanguageLowConfidenceException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    /**
     * @internal
     */
    TextSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextSizeLimitExceededException = exports.TextSizeLimitExceededException || (exports.TextSizeLimitExceededException = {}));
var TranslateTextRequest;
(function (TranslateTextRequest) {
    /**
     * @internal
     */
    TranslateTextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranslateTextRequest = exports.TranslateTextRequest || (exports.TranslateTextRequest = {}));
var TranslateTextResponse;
(function (TranslateTextResponse) {
    /**
     * @internal
     */
    TranslateTextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranslateTextResponse = exports.TranslateTextResponse || (exports.TranslateTextResponse = {}));
var UpdateParallelDataRequest;
(function (UpdateParallelDataRequest) {
    /**
     * @internal
     */
    UpdateParallelDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateParallelDataRequest = exports.UpdateParallelDataRequest || (exports.UpdateParallelDataRequest = {}));
var UpdateParallelDataResponse;
(function (UpdateParallelDataResponse) {
    /**
     * @internal
     */
    UpdateParallelDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateParallelDataResponse = exports.UpdateParallelDataResponse || (exports.UpdateParallelDataResponse = {}));
//# sourceMappingURL=models_0.js.map