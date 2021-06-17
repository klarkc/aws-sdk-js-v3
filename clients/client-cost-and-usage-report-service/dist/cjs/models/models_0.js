"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportLimitReachedException = exports.PutReportDefinitionResponse = exports.PutReportDefinitionRequest = exports.DuplicateReportNameException = exports.ModifyReportDefinitionResponse = exports.ModifyReportDefinitionRequest = exports.DescribeReportDefinitionsResponse = exports.ReportDefinition = exports.TimeUnit = exports.AWSRegion = exports.ReportVersioning = exports.ReportFormat = exports.CompressionFormat = exports.SchemaElement = exports.DescribeReportDefinitionsRequest = exports.ValidationException = exports.InternalErrorException = exports.DeleteReportDefinitionResponse = exports.DeleteReportDefinitionRequest = exports.AdditionalArtifact = void 0;
var AdditionalArtifact;
(function (AdditionalArtifact) {
    AdditionalArtifact["ATHENA"] = "ATHENA";
    AdditionalArtifact["QUICKSIGHT"] = "QUICKSIGHT";
    AdditionalArtifact["REDSHIFT"] = "REDSHIFT";
})(AdditionalArtifact = exports.AdditionalArtifact || (exports.AdditionalArtifact = {}));
var DeleteReportDefinitionRequest;
(function (DeleteReportDefinitionRequest) {
    /**
     * @internal
     */
    DeleteReportDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportDefinitionRequest = exports.DeleteReportDefinitionRequest || (exports.DeleteReportDefinitionRequest = {}));
var DeleteReportDefinitionResponse;
(function (DeleteReportDefinitionResponse) {
    /**
     * @internal
     */
    DeleteReportDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportDefinitionResponse = exports.DeleteReportDefinitionResponse || (exports.DeleteReportDefinitionResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DescribeReportDefinitionsRequest;
(function (DescribeReportDefinitionsRequest) {
    /**
     * @internal
     */
    DescribeReportDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReportDefinitionsRequest = exports.DescribeReportDefinitionsRequest || (exports.DescribeReportDefinitionsRequest = {}));
var SchemaElement;
(function (SchemaElement) {
    SchemaElement["RESOURCES"] = "RESOURCES";
})(SchemaElement = exports.SchemaElement || (exports.SchemaElement = {}));
var CompressionFormat;
(function (CompressionFormat) {
    CompressionFormat["GZIP"] = "GZIP";
    CompressionFormat["Parquet"] = "Parquet";
    CompressionFormat["ZIP"] = "ZIP";
})(CompressionFormat = exports.CompressionFormat || (exports.CompressionFormat = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat["CSV"] = "textORcsv";
    ReportFormat["Parquet"] = "Parquet";
})(ReportFormat = exports.ReportFormat || (exports.ReportFormat = {}));
var ReportVersioning;
(function (ReportVersioning) {
    ReportVersioning["CREATE_NEW_REPORT"] = "CREATE_NEW_REPORT";
    ReportVersioning["OVERWRITE_REPORT"] = "OVERWRITE_REPORT";
})(ReportVersioning = exports.ReportVersioning || (exports.ReportVersioning = {}));
var AWSRegion;
(function (AWSRegion) {
    AWSRegion["BAHRAIN"] = "me-south-1";
    AWSRegion["BEIJING"] = "cn-north-1";
    AWSRegion["CANADA_CENTRAL"] = "ca-central-1";
    AWSRegion["CAPE_TOWN"] = "af-south-1";
    AWSRegion["FRANKFURT"] = "eu-central-1";
    AWSRegion["HONG_KONG"] = "ap-east-1";
    AWSRegion["IRELAND"] = "eu-west-1";
    AWSRegion["LONDON"] = "eu-west-2";
    AWSRegion["MILANO"] = "eu-south-1";
    AWSRegion["MUMBAI"] = "ap-south-1";
    AWSRegion["NINGXIA"] = "cn-northwest-1";
    AWSRegion["NORTHERN_CALIFORNIA"] = "us-west-1";
    AWSRegion["OHIO"] = "us-east-2";
    AWSRegion["OREGON"] = "us-west-2";
    AWSRegion["OSAKA"] = "ap-northeast-3";
    AWSRegion["PARIS"] = "eu-west-3";
    AWSRegion["SAO_PAULO"] = "sa-east-1";
    AWSRegion["SEOUL"] = "ap-northeast-2";
    AWSRegion["SINGAPORE"] = "ap-southeast-1";
    AWSRegion["STOCKHOLM"] = "eu-north-1";
    AWSRegion["SYDNEY"] = "ap-southeast-2";
    AWSRegion["TOKYO"] = "ap-northeast-1";
    AWSRegion["US_STANDARD"] = "us-east-1";
})(AWSRegion = exports.AWSRegion || (exports.AWSRegion = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["DAILY"] = "DAILY";
    TimeUnit["HOURLY"] = "HOURLY";
    TimeUnit["MONTHLY"] = "MONTHLY";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var ReportDefinition;
(function (ReportDefinition) {
    /**
     * @internal
     */
    ReportDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportDefinition = exports.ReportDefinition || (exports.ReportDefinition = {}));
var DescribeReportDefinitionsResponse;
(function (DescribeReportDefinitionsResponse) {
    /**
     * @internal
     */
    DescribeReportDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReportDefinitionsResponse = exports.DescribeReportDefinitionsResponse || (exports.DescribeReportDefinitionsResponse = {}));
var ModifyReportDefinitionRequest;
(function (ModifyReportDefinitionRequest) {
    /**
     * @internal
     */
    ModifyReportDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReportDefinitionRequest = exports.ModifyReportDefinitionRequest || (exports.ModifyReportDefinitionRequest = {}));
var ModifyReportDefinitionResponse;
(function (ModifyReportDefinitionResponse) {
    /**
     * @internal
     */
    ModifyReportDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReportDefinitionResponse = exports.ModifyReportDefinitionResponse || (exports.ModifyReportDefinitionResponse = {}));
var DuplicateReportNameException;
(function (DuplicateReportNameException) {
    /**
     * @internal
     */
    DuplicateReportNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateReportNameException = exports.DuplicateReportNameException || (exports.DuplicateReportNameException = {}));
var PutReportDefinitionRequest;
(function (PutReportDefinitionRequest) {
    /**
     * @internal
     */
    PutReportDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutReportDefinitionRequest = exports.PutReportDefinitionRequest || (exports.PutReportDefinitionRequest = {}));
var PutReportDefinitionResponse;
(function (PutReportDefinitionResponse) {
    /**
     * @internal
     */
    PutReportDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutReportDefinitionResponse = exports.PutReportDefinitionResponse || (exports.PutReportDefinitionResponse = {}));
var ReportLimitReachedException;
(function (ReportLimitReachedException) {
    /**
     * @internal
     */
    ReportLimitReachedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportLimitReachedException = exports.ReportLimitReachedException || (exports.ReportLimitReachedException = {}));
//# sourceMappingURL=models_0.js.map