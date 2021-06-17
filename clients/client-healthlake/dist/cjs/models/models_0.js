"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartFHIRImportJobResponse = exports.StartFHIRImportJobRequest = exports.StartFHIRExportJobResponse = exports.StartFHIRExportJobRequest = exports.ListFHIRDatastoresResponse = exports.ListFHIRDatastoresRequest = exports.DescribeFHIRImportJobResponse = exports.ImportJobProperties = exports.InputDataConfig = exports.DescribeFHIRImportJobRequest = exports.DescribeFHIRExportJobResponse = exports.ExportJobProperties = exports.OutputDataConfig = exports.JobStatus = exports.DescribeFHIRExportJobRequest = exports.DescribeFHIRDatastoreResponse = exports.DescribeFHIRDatastoreRequest = exports.ResourceNotFoundException = exports.DeleteFHIRDatastoreResponse = exports.DeleteFHIRDatastoreRequest = exports.DatastoreProperties = exports.DatastoreFilter = exports.ValidationException = exports.ThrottlingException = exports.InternalServerException = exports.CreateFHIRDatastoreResponse = exports.DatastoreStatus = exports.CreateFHIRDatastoreRequest = exports.PreloadDataConfig = exports.PreloadDataType = exports.FHIRVersion = exports.ConflictException = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var FHIRVersion;
(function (FHIRVersion) {
    FHIRVersion["R4"] = "R4";
})(FHIRVersion = exports.FHIRVersion || (exports.FHIRVersion = {}));
var PreloadDataType;
(function (PreloadDataType) {
    PreloadDataType["SYNTHEA"] = "SYNTHEA";
})(PreloadDataType = exports.PreloadDataType || (exports.PreloadDataType = {}));
var PreloadDataConfig;
(function (PreloadDataConfig) {
    /**
     * @internal
     */
    PreloadDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreloadDataConfig = exports.PreloadDataConfig || (exports.PreloadDataConfig = {}));
var CreateFHIRDatastoreRequest;
(function (CreateFHIRDatastoreRequest) {
    /**
     * @internal
     */
    CreateFHIRDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFHIRDatastoreRequest = exports.CreateFHIRDatastoreRequest || (exports.CreateFHIRDatastoreRequest = {}));
var DatastoreStatus;
(function (DatastoreStatus) {
    DatastoreStatus["ACTIVE"] = "ACTIVE";
    DatastoreStatus["CREATING"] = "CREATING";
    DatastoreStatus["DELETED"] = "DELETED";
    DatastoreStatus["DELETING"] = "DELETING";
})(DatastoreStatus = exports.DatastoreStatus || (exports.DatastoreStatus = {}));
var CreateFHIRDatastoreResponse;
(function (CreateFHIRDatastoreResponse) {
    /**
     * @internal
     */
    CreateFHIRDatastoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFHIRDatastoreResponse = exports.CreateFHIRDatastoreResponse || (exports.CreateFHIRDatastoreResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
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
var DatastoreFilter;
(function (DatastoreFilter) {
    /**
     * @internal
     */
    DatastoreFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreFilter = exports.DatastoreFilter || (exports.DatastoreFilter = {}));
var DatastoreProperties;
(function (DatastoreProperties) {
    /**
     * @internal
     */
    DatastoreProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatastoreProperties = exports.DatastoreProperties || (exports.DatastoreProperties = {}));
var DeleteFHIRDatastoreRequest;
(function (DeleteFHIRDatastoreRequest) {
    /**
     * @internal
     */
    DeleteFHIRDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFHIRDatastoreRequest = exports.DeleteFHIRDatastoreRequest || (exports.DeleteFHIRDatastoreRequest = {}));
var DeleteFHIRDatastoreResponse;
(function (DeleteFHIRDatastoreResponse) {
    /**
     * @internal
     */
    DeleteFHIRDatastoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFHIRDatastoreResponse = exports.DeleteFHIRDatastoreResponse || (exports.DeleteFHIRDatastoreResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeFHIRDatastoreRequest;
(function (DescribeFHIRDatastoreRequest) {
    /**
     * @internal
     */
    DescribeFHIRDatastoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFHIRDatastoreRequest = exports.DescribeFHIRDatastoreRequest || (exports.DescribeFHIRDatastoreRequest = {}));
var DescribeFHIRDatastoreResponse;
(function (DescribeFHIRDatastoreResponse) {
    /**
     * @internal
     */
    DescribeFHIRDatastoreResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFHIRDatastoreResponse = exports.DescribeFHIRDatastoreResponse || (exports.DescribeFHIRDatastoreResponse = {}));
var DescribeFHIRExportJobRequest;
(function (DescribeFHIRExportJobRequest) {
    /**
     * @internal
     */
    DescribeFHIRExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFHIRExportJobRequest = exports.DescribeFHIRExportJobRequest || (exports.DescribeFHIRExportJobRequest = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    OutputDataConfig.visit = (value, visitor) => {
        if (value.S3Uri !== undefined)
            return visitor.S3Uri(value.S3Uri);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = (obj) => {
        if (obj.S3Uri !== undefined)
            return { S3Uri: obj.S3Uri };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var ExportJobProperties;
(function (ExportJobProperties) {
    /**
     * @internal
     */
    ExportJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OutputDataConfig && { OutputDataConfig: OutputDataConfig.filterSensitiveLog(obj.OutputDataConfig) }),
    });
})(ExportJobProperties = exports.ExportJobProperties || (exports.ExportJobProperties = {}));
var DescribeFHIRExportJobResponse;
(function (DescribeFHIRExportJobResponse) {
    /**
     * @internal
     */
    DescribeFHIRExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ExportJobProperties && {
            ExportJobProperties: ExportJobProperties.filterSensitiveLog(obj.ExportJobProperties),
        }),
    });
})(DescribeFHIRExportJobResponse = exports.DescribeFHIRExportJobResponse || (exports.DescribeFHIRExportJobResponse = {}));
var DescribeFHIRImportJobRequest;
(function (DescribeFHIRImportJobRequest) {
    /**
     * @internal
     */
    DescribeFHIRImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFHIRImportJobRequest = exports.DescribeFHIRImportJobRequest || (exports.DescribeFHIRImportJobRequest = {}));
var InputDataConfig;
(function (InputDataConfig) {
    InputDataConfig.visit = (value, visitor) => {
        if (value.S3Uri !== undefined)
            return visitor.S3Uri(value.S3Uri);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = (obj) => {
        if (obj.S3Uri !== undefined)
            return { S3Uri: obj.S3Uri };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var ImportJobProperties;
(function (ImportJobProperties) {
    /**
     * @internal
     */
    ImportJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InputDataConfig && { InputDataConfig: InputDataConfig.filterSensitiveLog(obj.InputDataConfig) }),
    });
})(ImportJobProperties = exports.ImportJobProperties || (exports.ImportJobProperties = {}));
var DescribeFHIRImportJobResponse;
(function (DescribeFHIRImportJobResponse) {
    /**
     * @internal
     */
    DescribeFHIRImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ImportJobProperties && {
            ImportJobProperties: ImportJobProperties.filterSensitiveLog(obj.ImportJobProperties),
        }),
    });
})(DescribeFHIRImportJobResponse = exports.DescribeFHIRImportJobResponse || (exports.DescribeFHIRImportJobResponse = {}));
var ListFHIRDatastoresRequest;
(function (ListFHIRDatastoresRequest) {
    /**
     * @internal
     */
    ListFHIRDatastoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFHIRDatastoresRequest = exports.ListFHIRDatastoresRequest || (exports.ListFHIRDatastoresRequest = {}));
var ListFHIRDatastoresResponse;
(function (ListFHIRDatastoresResponse) {
    /**
     * @internal
     */
    ListFHIRDatastoresResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFHIRDatastoresResponse = exports.ListFHIRDatastoresResponse || (exports.ListFHIRDatastoresResponse = {}));
var StartFHIRExportJobRequest;
(function (StartFHIRExportJobRequest) {
    /**
     * @internal
     */
    StartFHIRExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OutputDataConfig && { OutputDataConfig: OutputDataConfig.filterSensitiveLog(obj.OutputDataConfig) }),
    });
})(StartFHIRExportJobRequest = exports.StartFHIRExportJobRequest || (exports.StartFHIRExportJobRequest = {}));
var StartFHIRExportJobResponse;
(function (StartFHIRExportJobResponse) {
    /**
     * @internal
     */
    StartFHIRExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFHIRExportJobResponse = exports.StartFHIRExportJobResponse || (exports.StartFHIRExportJobResponse = {}));
var StartFHIRImportJobRequest;
(function (StartFHIRImportJobRequest) {
    /**
     * @internal
     */
    StartFHIRImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InputDataConfig && { InputDataConfig: InputDataConfig.filterSensitiveLog(obj.InputDataConfig) }),
    });
})(StartFHIRImportJobRequest = exports.StartFHIRImportJobRequest || (exports.StartFHIRImportJobRequest = {}));
var StartFHIRImportJobResponse;
(function (StartFHIRImportJobResponse) {
    /**
     * @internal
     */
    StartFHIRImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFHIRImportJobResponse = exports.StartFHIRImportJobResponse || (exports.StartFHIRImportJobResponse = {}));
//# sourceMappingURL=models_0.js.map