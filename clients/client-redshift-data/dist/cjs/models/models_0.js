"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTablesResponse = exports.TableMember = exports.ListTablesRequest = exports.ListStatementsResponse = exports.StatementData = exports.ListStatementsRequest = exports.ListSchemasResponse = exports.ListSchemasRequest = exports.ListDatabasesResponse = exports.ListDatabasesRequest = exports.GetStatementResultResponse = exports.GetStatementResultRequest = exports.Field = exports.ExecuteStatementOutput = exports.ExecuteStatementInput = exports.ExecuteStatementException = exports.DescribeTableResponse = exports.DescribeTableRequest = exports.ValidationException = exports.DescribeStatementResponse = exports.StatusString = exports.DescribeStatementRequest = exports.ColumnMetadata = exports.ResourceNotFoundException = exports.InternalServerException = exports.CancelStatementResponse = exports.CancelStatementRequest = exports.ActiveStatementsExceededException = void 0;
var ActiveStatementsExceededException;
(function (ActiveStatementsExceededException) {
    /**
     * @internal
     */
    ActiveStatementsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveStatementsExceededException = exports.ActiveStatementsExceededException || (exports.ActiveStatementsExceededException = {}));
var CancelStatementRequest;
(function (CancelStatementRequest) {
    /**
     * @internal
     */
    CancelStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelStatementRequest = exports.CancelStatementRequest || (exports.CancelStatementRequest = {}));
var CancelStatementResponse;
(function (CancelStatementResponse) {
    /**
     * @internal
     */
    CancelStatementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelStatementResponse = exports.CancelStatementResponse || (exports.CancelStatementResponse = {}));
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
var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnMetadata = exports.ColumnMetadata || (exports.ColumnMetadata = {}));
var DescribeStatementRequest;
(function (DescribeStatementRequest) {
    /**
     * @internal
     */
    DescribeStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStatementRequest = exports.DescribeStatementRequest || (exports.DescribeStatementRequest = {}));
var StatusString;
(function (StatusString) {
    StatusString["ABORTED"] = "ABORTED";
    StatusString["ALL"] = "ALL";
    StatusString["FAILED"] = "FAILED";
    StatusString["FINISHED"] = "FINISHED";
    StatusString["PICKED"] = "PICKED";
    StatusString["STARTED"] = "STARTED";
    StatusString["SUBMITTED"] = "SUBMITTED";
})(StatusString = exports.StatusString || (exports.StatusString = {}));
var DescribeStatementResponse;
(function (DescribeStatementResponse) {
    /**
     * @internal
     */
    DescribeStatementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStatementResponse = exports.DescribeStatementResponse || (exports.DescribeStatementResponse = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
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
var ExecuteStatementException;
(function (ExecuteStatementException) {
    /**
     * @internal
     */
    ExecuteStatementException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteStatementException = exports.ExecuteStatementException || (exports.ExecuteStatementException = {}));
var ExecuteStatementInput;
(function (ExecuteStatementInput) {
    /**
     * @internal
     */
    ExecuteStatementInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteStatementInput = exports.ExecuteStatementInput || (exports.ExecuteStatementInput = {}));
var ExecuteStatementOutput;
(function (ExecuteStatementOutput) {
    /**
     * @internal
     */
    ExecuteStatementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteStatementOutput = exports.ExecuteStatementOutput || (exports.ExecuteStatementOutput = {}));
var Field;
(function (Field) {
    Field.visit = (value, visitor) => {
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
    Field.filterSensitiveLog = (obj) => {
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
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(Field = exports.Field || (exports.Field = {}));
var GetStatementResultRequest;
(function (GetStatementResultRequest) {
    /**
     * @internal
     */
    GetStatementResultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStatementResultRequest = exports.GetStatementResultRequest || (exports.GetStatementResultRequest = {}));
var GetStatementResultResponse;
(function (GetStatementResultResponse) {
    /**
     * @internal
     */
    GetStatementResultResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Records && { Records: obj.Records.map((item) => item.map((item) => Field.filterSensitiveLog(item))) }),
    });
})(GetStatementResultResponse = exports.GetStatementResultResponse || (exports.GetStatementResultResponse = {}));
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
var ListSchemasRequest;
(function (ListSchemasRequest) {
    /**
     * @internal
     */
    ListSchemasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasRequest = exports.ListSchemasRequest || (exports.ListSchemasRequest = {}));
var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasResponse = exports.ListSchemasResponse || (exports.ListSchemasResponse = {}));
var ListStatementsRequest;
(function (ListStatementsRequest) {
    /**
     * @internal
     */
    ListStatementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStatementsRequest = exports.ListStatementsRequest || (exports.ListStatementsRequest = {}));
var StatementData;
(function (StatementData) {
    /**
     * @internal
     */
    StatementData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatementData = exports.StatementData || (exports.StatementData = {}));
var ListStatementsResponse;
(function (ListStatementsResponse) {
    /**
     * @internal
     */
    ListStatementsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStatementsResponse = exports.ListStatementsResponse || (exports.ListStatementsResponse = {}));
var ListTablesRequest;
(function (ListTablesRequest) {
    /**
     * @internal
     */
    ListTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesRequest = exports.ListTablesRequest || (exports.ListTablesRequest = {}));
var TableMember;
(function (TableMember) {
    /**
     * @internal
     */
    TableMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableMember = exports.TableMember || (exports.TableMember = {}));
var ListTablesResponse;
(function (ListTablesResponse) {
    /**
     * @internal
     */
    ListTablesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesResponse = exports.ListTablesResponse || (exports.ListTablesResponse = {}));
//# sourceMappingURL=models_0.js.map