"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteRecordsRequest = exports.UpdateTableResponse = exports.UpdateTableRequest = exports.UpdateDatabaseResponse = exports.UpdateDatabaseRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RejectedRecordsException = exports.RejectedRecord = exports._Record = exports.TimeUnit = exports.MeasureValueType = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListTablesResponse = exports.ListTablesRequest = exports.ListDatabasesResponse = exports.ListDatabasesRequest = exports.Dimension = exports.DimensionValueType = exports.DescribeTableResponse = exports.DescribeTableRequest = exports.DescribeEndpointsResponse = exports.Endpoint = exports.DescribeEndpointsRequest = exports.DescribeDatabaseResponse = exports.DescribeDatabaseRequest = exports.DeleteTableRequest = exports.DeleteDatabaseRequest = exports.ResourceNotFoundException = exports.CreateTableResponse = exports.Table = exports.TableStatus = exports.CreateTableRequest = exports.RetentionProperties = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.InvalidEndpointException = exports.InternalServerException = exports.CreateDatabaseResponse = exports.Database = exports.CreateDatabaseRequest = exports.Tag = exports.ConflictException = exports.AccessDeniedException = void 0;
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
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateDatabaseRequest;
(function (CreateDatabaseRequest) {
    /**
     * @internal
     */
    CreateDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatabaseRequest = exports.CreateDatabaseRequest || (exports.CreateDatabaseRequest = {}));
var Database;
(function (Database) {
    /**
     * @internal
     */
    Database.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Database = exports.Database || (exports.Database = {}));
var CreateDatabaseResponse;
(function (CreateDatabaseResponse) {
    /**
     * @internal
     */
    CreateDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatabaseResponse = exports.CreateDatabaseResponse || (exports.CreateDatabaseResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidEndpointException;
(function (InvalidEndpointException) {
    /**
     * @internal
     */
    InvalidEndpointException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEndpointException = exports.InvalidEndpointException || (exports.InvalidEndpointException = {}));
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
var RetentionProperties;
(function (RetentionProperties) {
    /**
     * @internal
     */
    RetentionProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetentionProperties = exports.RetentionProperties || (exports.RetentionProperties = {}));
var CreateTableRequest;
(function (CreateTableRequest) {
    /**
     * @internal
     */
    CreateTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableRequest = exports.CreateTableRequest || (exports.CreateTableRequest = {}));
var TableStatus;
(function (TableStatus) {
    TableStatus["ACTIVE"] = "ACTIVE";
    TableStatus["DELETING"] = "DELETING";
})(TableStatus = exports.TableStatus || (exports.TableStatus = {}));
var Table;
(function (Table) {
    /**
     * @internal
     */
    Table.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Table = exports.Table || (exports.Table = {}));
var CreateTableResponse;
(function (CreateTableResponse) {
    /**
     * @internal
     */
    CreateTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableResponse = exports.CreateTableResponse || (exports.CreateTableResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteDatabaseRequest;
(function (DeleteDatabaseRequest) {
    /**
     * @internal
     */
    DeleteDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatabaseRequest = exports.DeleteDatabaseRequest || (exports.DeleteDatabaseRequest = {}));
var DeleteTableRequest;
(function (DeleteTableRequest) {
    /**
     * @internal
     */
    DeleteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableRequest = exports.DeleteTableRequest || (exports.DeleteTableRequest = {}));
var DescribeDatabaseRequest;
(function (DescribeDatabaseRequest) {
    /**
     * @internal
     */
    DescribeDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatabaseRequest = exports.DescribeDatabaseRequest || (exports.DescribeDatabaseRequest = {}));
var DescribeDatabaseResponse;
(function (DescribeDatabaseResponse) {
    /**
     * @internal
     */
    DescribeDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatabaseResponse = exports.DescribeDatabaseResponse || (exports.DescribeDatabaseResponse = {}));
var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    /**
     * @internal
     */
    DescribeEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsRequest = exports.DescribeEndpointsRequest || (exports.DescribeEndpointsRequest = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsResponse = exports.DescribeEndpointsResponse || (exports.DescribeEndpointsResponse = {}));
var DescribeTableRequest;
(function (DescribeTableRequest) {
    /**
     * @internal
     */
    DescribeTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableRequest = exports.DescribeTableRequest || (exports.DescribeTableRequest = {}));
var DescribeTableResponse;
(function (DescribeTableResponse) {
    /**
     * @internal
     */
    DescribeTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableResponse = exports.DescribeTableResponse || (exports.DescribeTableResponse = {}));
var DimensionValueType;
(function (DimensionValueType) {
    DimensionValueType["VARCHAR"] = "VARCHAR";
})(DimensionValueType = exports.DimensionValueType || (exports.DimensionValueType = {}));
var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var ListDatabasesRequest;
(function (ListDatabasesRequest) {
    /**
     * @internal
     */
    ListDatabasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatabasesRequest = exports.ListDatabasesRequest || (exports.ListDatabasesRequest = {}));
var ListDatabasesResponse;
(function (ListDatabasesResponse) {
    /**
     * @internal
     */
    ListDatabasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatabasesResponse = exports.ListDatabasesResponse || (exports.ListDatabasesResponse = {}));
var ListTablesRequest;
(function (ListTablesRequest) {
    /**
     * @internal
     */
    ListTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesRequest = exports.ListTablesRequest || (exports.ListTablesRequest = {}));
var ListTablesResponse;
(function (ListTablesResponse) {
    /**
     * @internal
     */
    ListTablesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesResponse = exports.ListTablesResponse || (exports.ListTablesResponse = {}));
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
var MeasureValueType;
(function (MeasureValueType) {
    MeasureValueType["BIGINT"] = "BIGINT";
    MeasureValueType["BOOLEAN"] = "BOOLEAN";
    MeasureValueType["DOUBLE"] = "DOUBLE";
    MeasureValueType["VARCHAR"] = "VARCHAR";
})(MeasureValueType = exports.MeasureValueType || (exports.MeasureValueType = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["MICROSECONDS"] = "MICROSECONDS";
    TimeUnit["MILLISECONDS"] = "MILLISECONDS";
    TimeUnit["NANOSECONDS"] = "NANOSECONDS";
    TimeUnit["SECONDS"] = "SECONDS";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Record = exports._Record || (exports._Record = {}));
var RejectedRecord;
(function (RejectedRecord) {
    /**
     * @internal
     */
    RejectedRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectedRecord = exports.RejectedRecord || (exports.RejectedRecord = {}));
var RejectedRecordsException;
(function (RejectedRecordsException) {
    /**
     * @internal
     */
    RejectedRecordsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectedRecordsException = exports.RejectedRecordsException || (exports.RejectedRecordsException = {}));
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
var UpdateDatabaseRequest;
(function (UpdateDatabaseRequest) {
    /**
     * @internal
     */
    UpdateDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatabaseRequest = exports.UpdateDatabaseRequest || (exports.UpdateDatabaseRequest = {}));
var UpdateDatabaseResponse;
(function (UpdateDatabaseResponse) {
    /**
     * @internal
     */
    UpdateDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatabaseResponse = exports.UpdateDatabaseResponse || (exports.UpdateDatabaseResponse = {}));
var UpdateTableRequest;
(function (UpdateTableRequest) {
    /**
     * @internal
     */
    UpdateTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableRequest = exports.UpdateTableRequest || (exports.UpdateTableRequest = {}));
var UpdateTableResponse;
(function (UpdateTableResponse) {
    /**
     * @internal
     */
    UpdateTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableResponse = exports.UpdateTableResponse || (exports.UpdateTableResponse = {}));
var WriteRecordsRequest;
(function (WriteRecordsRequest) {
    /**
     * @internal
     */
    WriteRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteRecordsRequest = exports.WriteRecordsRequest || (exports.WriteRecordsRequest = {}));
//# sourceMappingURL=models_0.js.map