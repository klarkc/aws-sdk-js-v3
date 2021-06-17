"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponse = exports.Row = exports.TimeSeriesDataPoint = exports.Datum = exports.Type = exports.ColumnInfo = exports.QueryStatus = exports.QueryRequest = exports.QueryExecutionException = exports.DescribeEndpointsResponse = exports.Endpoint = exports.DescribeEndpointsRequest = exports.ConflictException = exports.ScalarType = exports.ValidationException = exports.ThrottlingException = exports.InvalidEndpointException = exports.InternalServerException = exports.CancelQueryResponse = exports.CancelQueryRequest = exports.AccessDeniedException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var CancelQueryRequest;
(function (CancelQueryRequest) {
    /**
     * @internal
     */
    CancelQueryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelQueryRequest = exports.CancelQueryRequest || (exports.CancelQueryRequest = {}));
var CancelQueryResponse;
(function (CancelQueryResponse) {
    /**
     * @internal
     */
    CancelQueryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelQueryResponse = exports.CancelQueryResponse || (exports.CancelQueryResponse = {}));
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
var ScalarType;
(function (ScalarType) {
    ScalarType["BIGINT"] = "BIGINT";
    ScalarType["BOOLEAN"] = "BOOLEAN";
    ScalarType["DATE"] = "DATE";
    ScalarType["DOUBLE"] = "DOUBLE";
    ScalarType["INTEGER"] = "INTEGER";
    ScalarType["INTERVAL_DAY_TO_SECOND"] = "INTERVAL_DAY_TO_SECOND";
    ScalarType["INTERVAL_YEAR_TO_MONTH"] = "INTERVAL_YEAR_TO_MONTH";
    ScalarType["TIME"] = "TIME";
    ScalarType["TIMESTAMP"] = "TIMESTAMP";
    ScalarType["UNKNOWN"] = "UNKNOWN";
    ScalarType["VARCHAR"] = "VARCHAR";
})(ScalarType = exports.ScalarType || (exports.ScalarType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
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
var QueryExecutionException;
(function (QueryExecutionException) {
    /**
     * @internal
     */
    QueryExecutionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryExecutionException = exports.QueryExecutionException || (exports.QueryExecutionException = {}));
var QueryRequest;
(function (QueryRequest) {
    /**
     * @internal
     */
    QueryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.QueryString && { QueryString: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.ClientToken && { ClientToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(QueryRequest = exports.QueryRequest || (exports.QueryRequest = {}));
var QueryStatus;
(function (QueryStatus) {
    /**
     * @internal
     */
    QueryStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryStatus = exports.QueryStatus || (exports.QueryStatus = {}));
var ColumnInfo;
(function (ColumnInfo) {
    /**
     * @internal
     */
    ColumnInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnInfo = exports.ColumnInfo || (exports.ColumnInfo = {}));
var Type;
(function (Type) {
    /**
     * @internal
     */
    Type.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Type = exports.Type || (exports.Type = {}));
var Datum;
(function (Datum) {
    /**
     * @internal
     */
    Datum.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Datum = exports.Datum || (exports.Datum = {}));
var TimeSeriesDataPoint;
(function (TimeSeriesDataPoint) {
    /**
     * @internal
     */
    TimeSeriesDataPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeSeriesDataPoint = exports.TimeSeriesDataPoint || (exports.TimeSeriesDataPoint = {}));
var Row;
(function (Row) {
    /**
     * @internal
     */
    Row.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Row = exports.Row || (exports.Row = {}));
var QueryResponse;
(function (QueryResponse) {
    /**
     * @internal
     */
    QueryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryResponse = exports.QueryResponse || (exports.QueryResponse = {}));
//# sourceMappingURL=models_0.js.map