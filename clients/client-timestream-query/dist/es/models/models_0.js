import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var CancelQueryRequest;
(function (CancelQueryRequest) {
    /**
     * @internal
     */
    CancelQueryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelQueryRequest || (CancelQueryRequest = {}));
export var CancelQueryResponse;
(function (CancelQueryResponse) {
    /**
     * @internal
     */
    CancelQueryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelQueryResponse || (CancelQueryResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidEndpointException;
(function (InvalidEndpointException) {
    /**
     * @internal
     */
    InvalidEndpointException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidEndpointException || (InvalidEndpointException = {}));
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
export var ScalarType;
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
})(ScalarType || (ScalarType = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    /**
     * @internal
     */
    DescribeEndpointsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointsRequest || (DescribeEndpointsRequest = {}));
export var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Endpoint || (Endpoint = {}));
export var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointsResponse || (DescribeEndpointsResponse = {}));
export var QueryExecutionException;
(function (QueryExecutionException) {
    /**
     * @internal
     */
    QueryExecutionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryExecutionException || (QueryExecutionException = {}));
export var QueryRequest;
(function (QueryRequest) {
    /**
     * @internal
     */
    QueryRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.QueryString && { QueryString: SENSITIVE_STRING })), (obj.ClientToken && { ClientToken: SENSITIVE_STRING }))); };
})(QueryRequest || (QueryRequest = {}));
export var QueryStatus;
(function (QueryStatus) {
    /**
     * @internal
     */
    QueryStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryStatus || (QueryStatus = {}));
export var ColumnInfo;
(function (ColumnInfo) {
    /**
     * @internal
     */
    ColumnInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColumnInfo || (ColumnInfo = {}));
export var Type;
(function (Type) {
    /**
     * @internal
     */
    Type.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Type || (Type = {}));
export var Datum;
(function (Datum) {
    /**
     * @internal
     */
    Datum.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Datum || (Datum = {}));
export var TimeSeriesDataPoint;
(function (TimeSeriesDataPoint) {
    /**
     * @internal
     */
    TimeSeriesDataPoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeSeriesDataPoint || (TimeSeriesDataPoint = {}));
export var Row;
(function (Row) {
    /**
     * @internal
     */
    Row.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Row || (Row = {}));
export var QueryResponse;
(function (QueryResponse) {
    /**
     * @internal
     */
    QueryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryResponse || (QueryResponse = {}));
//# sourceMappingURL=models_0.js.map