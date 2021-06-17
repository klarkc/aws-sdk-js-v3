import { __assign } from "tslib";
export var ActiveStatementsExceededException;
(function (ActiveStatementsExceededException) {
    /**
     * @internal
     */
    ActiveStatementsExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveStatementsExceededException || (ActiveStatementsExceededException = {}));
export var CancelStatementRequest;
(function (CancelStatementRequest) {
    /**
     * @internal
     */
    CancelStatementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelStatementRequest || (CancelStatementRequest = {}));
export var CancelStatementResponse;
(function (CancelStatementResponse) {
    /**
     * @internal
     */
    CancelStatementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelStatementResponse || (CancelStatementResponse = {}));
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
export var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColumnMetadata || (ColumnMetadata = {}));
export var DescribeStatementRequest;
(function (DescribeStatementRequest) {
    /**
     * @internal
     */
    DescribeStatementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStatementRequest || (DescribeStatementRequest = {}));
export var StatusString;
(function (StatusString) {
    StatusString["ABORTED"] = "ABORTED";
    StatusString["ALL"] = "ALL";
    StatusString["FAILED"] = "FAILED";
    StatusString["FINISHED"] = "FINISHED";
    StatusString["PICKED"] = "PICKED";
    StatusString["STARTED"] = "STARTED";
    StatusString["SUBMITTED"] = "SUBMITTED";
})(StatusString || (StatusString = {}));
export var DescribeStatementResponse;
(function (DescribeStatementResponse) {
    /**
     * @internal
     */
    DescribeStatementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStatementResponse || (DescribeStatementResponse = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var DescribeTableRequest;
(function (DescribeTableRequest) {
    /**
     * @internal
     */
    DescribeTableRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTableRequest || (DescribeTableRequest = {}));
export var DescribeTableResponse;
(function (DescribeTableResponse) {
    /**
     * @internal
     */
    DescribeTableResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTableResponse || (DescribeTableResponse = {}));
export var ExecuteStatementException;
(function (ExecuteStatementException) {
    /**
     * @internal
     */
    ExecuteStatementException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteStatementException || (ExecuteStatementException = {}));
export var ExecuteStatementInput;
(function (ExecuteStatementInput) {
    /**
     * @internal
     */
    ExecuteStatementInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteStatementInput || (ExecuteStatementInput = {}));
export var ExecuteStatementOutput;
(function (ExecuteStatementOutput) {
    /**
     * @internal
     */
    ExecuteStatementOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteStatementOutput || (ExecuteStatementOutput = {}));
export var Field;
(function (Field) {
    Field.visit = function (value, visitor) {
        if (value.isNull !== undefined)
            return visitor.isNull(value.isNull);
        if (value.booleanValue !== undefined)
            return visitor.booleanValue(value.booleanValue);
        if (value.longValue !== undefined)
            return visitor.longValue(value.longValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.blobValue !== undefined)
            return visitor.blobValue(value.blobValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    Field.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.isNull !== undefined)
            return { isNull: obj.isNull };
        if (obj.booleanValue !== undefined)
            return { booleanValue: obj.booleanValue };
        if (obj.longValue !== undefined)
            return { longValue: obj.longValue };
        if (obj.doubleValue !== undefined)
            return { doubleValue: obj.doubleValue };
        if (obj.stringValue !== undefined)
            return { stringValue: obj.stringValue };
        if (obj.blobValue !== undefined)
            return { blobValue: obj.blobValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(Field || (Field = {}));
export var GetStatementResultRequest;
(function (GetStatementResultRequest) {
    /**
     * @internal
     */
    GetStatementResultRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStatementResultRequest || (GetStatementResultRequest = {}));
export var GetStatementResultResponse;
(function (GetStatementResultResponse) {
    /**
     * @internal
     */
    GetStatementResultResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Records && { Records: obj.Records.map(function (item) { return item.map(function (item) { return Field.filterSensitiveLog(item); }); }) }))); };
})(GetStatementResultResponse || (GetStatementResultResponse = {}));
export var ListDatabasesRequest;
(function (ListDatabasesRequest) {
    /**
     * @internal
     */
    ListDatabasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatabasesRequest || (ListDatabasesRequest = {}));
export var ListDatabasesResponse;
(function (ListDatabasesResponse) {
    /**
     * @internal
     */
    ListDatabasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatabasesResponse || (ListDatabasesResponse = {}));
export var ListSchemasRequest;
(function (ListSchemasRequest) {
    /**
     * @internal
     */
    ListSchemasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemasRequest || (ListSchemasRequest = {}));
export var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemasResponse || (ListSchemasResponse = {}));
export var ListStatementsRequest;
(function (ListStatementsRequest) {
    /**
     * @internal
     */
    ListStatementsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStatementsRequest || (ListStatementsRequest = {}));
export var StatementData;
(function (StatementData) {
    /**
     * @internal
     */
    StatementData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatementData || (StatementData = {}));
export var ListStatementsResponse;
(function (ListStatementsResponse) {
    /**
     * @internal
     */
    ListStatementsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStatementsResponse || (ListStatementsResponse = {}));
export var ListTablesRequest;
(function (ListTablesRequest) {
    /**
     * @internal
     */
    ListTablesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTablesRequest || (ListTablesRequest = {}));
export var TableMember;
(function (TableMember) {
    /**
     * @internal
     */
    TableMember.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TableMember || (TableMember = {}));
export var ListTablesResponse;
(function (ListTablesResponse) {
    /**
     * @internal
     */
    ListTablesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTablesResponse || (ListTablesResponse = {}));
//# sourceMappingURL=models_0.js.map