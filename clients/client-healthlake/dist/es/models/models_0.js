import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var FHIRVersion;
(function (FHIRVersion) {
    FHIRVersion["R4"] = "R4";
})(FHIRVersion || (FHIRVersion = {}));
export var PreloadDataType;
(function (PreloadDataType) {
    PreloadDataType["SYNTHEA"] = "SYNTHEA";
})(PreloadDataType || (PreloadDataType = {}));
export var PreloadDataConfig;
(function (PreloadDataConfig) {
    /**
     * @internal
     */
    PreloadDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreloadDataConfig || (PreloadDataConfig = {}));
export var CreateFHIRDatastoreRequest;
(function (CreateFHIRDatastoreRequest) {
    /**
     * @internal
     */
    CreateFHIRDatastoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFHIRDatastoreRequest || (CreateFHIRDatastoreRequest = {}));
export var DatastoreStatus;
(function (DatastoreStatus) {
    DatastoreStatus["ACTIVE"] = "ACTIVE";
    DatastoreStatus["CREATING"] = "CREATING";
    DatastoreStatus["DELETED"] = "DELETED";
    DatastoreStatus["DELETING"] = "DELETING";
})(DatastoreStatus || (DatastoreStatus = {}));
export var CreateFHIRDatastoreResponse;
(function (CreateFHIRDatastoreResponse) {
    /**
     * @internal
     */
    CreateFHIRDatastoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFHIRDatastoreResponse || (CreateFHIRDatastoreResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
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
export var DatastoreFilter;
(function (DatastoreFilter) {
    /**
     * @internal
     */
    DatastoreFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatastoreFilter || (DatastoreFilter = {}));
export var DatastoreProperties;
(function (DatastoreProperties) {
    /**
     * @internal
     */
    DatastoreProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatastoreProperties || (DatastoreProperties = {}));
export var DeleteFHIRDatastoreRequest;
(function (DeleteFHIRDatastoreRequest) {
    /**
     * @internal
     */
    DeleteFHIRDatastoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFHIRDatastoreRequest || (DeleteFHIRDatastoreRequest = {}));
export var DeleteFHIRDatastoreResponse;
(function (DeleteFHIRDatastoreResponse) {
    /**
     * @internal
     */
    DeleteFHIRDatastoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFHIRDatastoreResponse || (DeleteFHIRDatastoreResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DescribeFHIRDatastoreRequest;
(function (DescribeFHIRDatastoreRequest) {
    /**
     * @internal
     */
    DescribeFHIRDatastoreRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFHIRDatastoreRequest || (DescribeFHIRDatastoreRequest = {}));
export var DescribeFHIRDatastoreResponse;
(function (DescribeFHIRDatastoreResponse) {
    /**
     * @internal
     */
    DescribeFHIRDatastoreResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFHIRDatastoreResponse || (DescribeFHIRDatastoreResponse = {}));
export var DescribeFHIRExportJobRequest;
(function (DescribeFHIRExportJobRequest) {
    /**
     * @internal
     */
    DescribeFHIRExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFHIRExportJobRequest || (DescribeFHIRExportJobRequest = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus || (JobStatus = {}));
export var OutputDataConfig;
(function (OutputDataConfig) {
    OutputDataConfig.visit = function (value, visitor) {
        if (value.S3Uri !== undefined)
            return visitor.S3Uri(value.S3Uri);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.S3Uri !== undefined)
            return { S3Uri: obj.S3Uri };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(OutputDataConfig || (OutputDataConfig = {}));
export var ExportJobProperties;
(function (ExportJobProperties) {
    /**
     * @internal
     */
    ExportJobProperties.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OutputDataConfig && { OutputDataConfig: OutputDataConfig.filterSensitiveLog(obj.OutputDataConfig) }))); };
})(ExportJobProperties || (ExportJobProperties = {}));
export var DescribeFHIRExportJobResponse;
(function (DescribeFHIRExportJobResponse) {
    /**
     * @internal
     */
    DescribeFHIRExportJobResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ExportJobProperties && {
        ExportJobProperties: ExportJobProperties.filterSensitiveLog(obj.ExportJobProperties),
    }))); };
})(DescribeFHIRExportJobResponse || (DescribeFHIRExportJobResponse = {}));
export var DescribeFHIRImportJobRequest;
(function (DescribeFHIRImportJobRequest) {
    /**
     * @internal
     */
    DescribeFHIRImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFHIRImportJobRequest || (DescribeFHIRImportJobRequest = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    InputDataConfig.visit = function (value, visitor) {
        if (value.S3Uri !== undefined)
            return visitor.S3Uri(value.S3Uri);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.S3Uri !== undefined)
            return { S3Uri: obj.S3Uri };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(InputDataConfig || (InputDataConfig = {}));
export var ImportJobProperties;
(function (ImportJobProperties) {
    /**
     * @internal
     */
    ImportJobProperties.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InputDataConfig && { InputDataConfig: InputDataConfig.filterSensitiveLog(obj.InputDataConfig) }))); };
})(ImportJobProperties || (ImportJobProperties = {}));
export var DescribeFHIRImportJobResponse;
(function (DescribeFHIRImportJobResponse) {
    /**
     * @internal
     */
    DescribeFHIRImportJobResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ImportJobProperties && {
        ImportJobProperties: ImportJobProperties.filterSensitiveLog(obj.ImportJobProperties),
    }))); };
})(DescribeFHIRImportJobResponse || (DescribeFHIRImportJobResponse = {}));
export var ListFHIRDatastoresRequest;
(function (ListFHIRDatastoresRequest) {
    /**
     * @internal
     */
    ListFHIRDatastoresRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFHIRDatastoresRequest || (ListFHIRDatastoresRequest = {}));
export var ListFHIRDatastoresResponse;
(function (ListFHIRDatastoresResponse) {
    /**
     * @internal
     */
    ListFHIRDatastoresResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFHIRDatastoresResponse || (ListFHIRDatastoresResponse = {}));
export var StartFHIRExportJobRequest;
(function (StartFHIRExportJobRequest) {
    /**
     * @internal
     */
    StartFHIRExportJobRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OutputDataConfig && { OutputDataConfig: OutputDataConfig.filterSensitiveLog(obj.OutputDataConfig) }))); };
})(StartFHIRExportJobRequest || (StartFHIRExportJobRequest = {}));
export var StartFHIRExportJobResponse;
(function (StartFHIRExportJobResponse) {
    /**
     * @internal
     */
    StartFHIRExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFHIRExportJobResponse || (StartFHIRExportJobResponse = {}));
export var StartFHIRImportJobRequest;
(function (StartFHIRImportJobRequest) {
    /**
     * @internal
     */
    StartFHIRImportJobRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InputDataConfig && { InputDataConfig: InputDataConfig.filterSensitiveLog(obj.InputDataConfig) }))); };
})(StartFHIRImportJobRequest || (StartFHIRImportJobRequest = {}));
export var StartFHIRImportJobResponse;
(function (StartFHIRImportJobResponse) {
    /**
     * @internal
     */
    StartFHIRImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFHIRImportJobResponse || (StartFHIRImportJobResponse = {}));
//# sourceMappingURL=models_0.js.map