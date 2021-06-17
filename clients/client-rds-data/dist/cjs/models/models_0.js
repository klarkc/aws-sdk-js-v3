"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteSqlResponse = exports.SqlStatementResult = exports.ResultFrame = exports.ExecuteStatementResponse = exports._Record = exports.BatchExecuteStatementResponse = exports.BatchExecuteStatementRequest = exports.StructValue = exports.ExecuteStatementRequest = exports.Value = exports.UpdateResult = exports.SqlParameter = exports.Field = exports.ArrayValue = exports.RollbackTransactionResponse = exports.RollbackTransactionRequest = exports.ResultSetOptions = exports.ResultSetMetadata = exports.ExecuteSqlRequest = exports.DecimalReturnType = exports.NotFoundException = exports.CommitTransactionResponse = exports.CommitTransactionRequest = exports.ColumnMetadata = exports.BeginTransactionResponse = exports.BeginTransactionRequest = exports.StatementTimeoutException = exports.ServiceUnavailableError = exports.InternalServerErrorException = exports.ForbiddenException = exports.TypeHint = exports.BadRequestException = void 0;
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var TypeHint;
(function (TypeHint) {
    TypeHint["DATE"] = "DATE";
    TypeHint["DECIMAL"] = "DECIMAL";
    TypeHint["JSON"] = "JSON";
    TypeHint["TIME"] = "TIME";
    TypeHint["TIMESTAMP"] = "TIMESTAMP";
    TypeHint["UUID"] = "UUID";
})(TypeHint = exports.TypeHint || (exports.TypeHint = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var ServiceUnavailableError;
(function (ServiceUnavailableError) {
    /**
     * @internal
     */
    ServiceUnavailableError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableError = exports.ServiceUnavailableError || (exports.ServiceUnavailableError = {}));
var StatementTimeoutException;
(function (StatementTimeoutException) {
    /**
     * @internal
     */
    StatementTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatementTimeoutException = exports.StatementTimeoutException || (exports.StatementTimeoutException = {}));
var BeginTransactionRequest;
(function (BeginTransactionRequest) {
    /**
     * @internal
     */
    BeginTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BeginTransactionRequest = exports.BeginTransactionRequest || (exports.BeginTransactionRequest = {}));
var BeginTransactionResponse;
(function (BeginTransactionResponse) {
    /**
     * @internal
     */
    BeginTransactionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BeginTransactionResponse = exports.BeginTransactionResponse || (exports.BeginTransactionResponse = {}));
var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnMetadata = exports.ColumnMetadata || (exports.ColumnMetadata = {}));
var CommitTransactionRequest;
(function (CommitTransactionRequest) {
    /**
     * @internal
     */
    CommitTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitTransactionRequest = exports.CommitTransactionRequest || (exports.CommitTransactionRequest = {}));
var CommitTransactionResponse;
(function (CommitTransactionResponse) {
    /**
     * @internal
     */
    CommitTransactionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitTransactionResponse = exports.CommitTransactionResponse || (exports.CommitTransactionResponse = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DecimalReturnType;
(function (DecimalReturnType) {
    DecimalReturnType["DOUBLE_OR_LONG"] = "DOUBLE_OR_LONG";
    DecimalReturnType["STRING"] = "STRING";
})(DecimalReturnType = exports.DecimalReturnType || (exports.DecimalReturnType = {}));
var ExecuteSqlRequest;
(function (ExecuteSqlRequest) {
    /**
     * @internal
     */
    ExecuteSqlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteSqlRequest = exports.ExecuteSqlRequest || (exports.ExecuteSqlRequest = {}));
var ResultSetMetadata;
(function (ResultSetMetadata) {
    /**
     * @internal
     */
    ResultSetMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultSetMetadata = exports.ResultSetMetadata || (exports.ResultSetMetadata = {}));
var ResultSetOptions;
(function (ResultSetOptions) {
    /**
     * @internal
     */
    ResultSetOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultSetOptions = exports.ResultSetOptions || (exports.ResultSetOptions = {}));
var RollbackTransactionRequest;
(function (RollbackTransactionRequest) {
    /**
     * @internal
     */
    RollbackTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackTransactionRequest = exports.RollbackTransactionRequest || (exports.RollbackTransactionRequest = {}));
var RollbackTransactionResponse;
(function (RollbackTransactionResponse) {
    /**
     * @internal
     */
    RollbackTransactionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackTransactionResponse = exports.RollbackTransactionResponse || (exports.RollbackTransactionResponse = {}));
var ArrayValue;
(function (ArrayValue) {
    ArrayValue.visit = (value, visitor) => {
        if (value.booleanValues !== undefined)
            return visitor.booleanValues(value.booleanValues);
        if (value.longValues !== undefined)
            return visitor.longValues(value.longValues);
        if (value.doubleValues !== undefined)
            return visitor.doubleValues(value.doubleValues);
        if (value.stringValues !== undefined)
            return visitor.stringValues(value.stringValues);
        if (value.arrayValues !== undefined)
            return visitor.arrayValues(value.arrayValues);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ArrayValue.filterSensitiveLog = (obj) => {
        if (obj.booleanValues !== undefined)
            return { booleanValues: obj.booleanValues };
        if (obj.longValues !== undefined)
            return { longValues: obj.longValues };
        if (obj.doubleValues !== undefined)
            return { doubleValues: obj.doubleValues };
        if (obj.stringValues !== undefined)
            return { stringValues: obj.stringValues };
        if (obj.arrayValues !== undefined)
            return { arrayValues: obj.arrayValues.map((item) => ArrayValue.filterSensitiveLog(item)) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ArrayValue = exports.ArrayValue || (exports.ArrayValue = {}));
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
        if (value.arrayValue !== undefined)
            return visitor.arrayValue(value.arrayValue);
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
        if (obj.arrayValue !== undefined)
            return { arrayValue: ArrayValue.filterSensitiveLog(obj.arrayValue) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(Field = exports.Field || (exports.Field = {}));
var SqlParameter;
(function (SqlParameter) {
    /**
     * @internal
     */
    SqlParameter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.value && { value: Field.filterSensitiveLog(obj.value) }),
    });
})(SqlParameter = exports.SqlParameter || (exports.SqlParameter = {}));
var UpdateResult;
(function (UpdateResult) {
    /**
     * @internal
     */
    UpdateResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.generatedFields && { generatedFields: obj.generatedFields.map((item) => Field.filterSensitiveLog(item)) }),
    });
})(UpdateResult = exports.UpdateResult || (exports.UpdateResult = {}));
var Value;
(function (Value) {
    Value.visit = (value, visitor) => {
        if (value.isNull !== undefined)
            return visitor.isNull(value.isNull);
        if (value.bitValue !== undefined)
            return visitor.bitValue(value.bitValue);
        if (value.bigIntValue !== undefined)
            return visitor.bigIntValue(value.bigIntValue);
        if (value.intValue !== undefined)
            return visitor.intValue(value.intValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.realValue !== undefined)
            return visitor.realValue(value.realValue);
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.blobValue !== undefined)
            return visitor.blobValue(value.blobValue);
        if (value.arrayValues !== undefined)
            return visitor.arrayValues(value.arrayValues);
        if (value.structValue !== undefined)
            return visitor.structValue(value.structValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    Value.filterSensitiveLog = (obj) => {
        if (obj.isNull !== undefined)
            return { isNull: obj.isNull };
        if (obj.bitValue !== undefined)
            return { bitValue: obj.bitValue };
        if (obj.bigIntValue !== undefined)
            return { bigIntValue: obj.bigIntValue };
        if (obj.intValue !== undefined)
            return { intValue: obj.intValue };
        if (obj.doubleValue !== undefined)
            return { doubleValue: obj.doubleValue };
        if (obj.realValue !== undefined)
            return { realValue: obj.realValue };
        if (obj.stringValue !== undefined)
            return { stringValue: obj.stringValue };
        if (obj.blobValue !== undefined)
            return { blobValue: obj.blobValue };
        if (obj.arrayValues !== undefined)
            return { arrayValues: obj.arrayValues.map((item) => Value.filterSensitiveLog(item)) };
        if (obj.structValue !== undefined)
            return { structValue: StructValue.filterSensitiveLog(obj.structValue) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(Value = exports.Value || (exports.Value = {}));
var ExecuteStatementRequest;
(function (ExecuteStatementRequest) {
    /**
     * @internal
     */
    ExecuteStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.parameters && { parameters: obj.parameters.map((item) => SqlParameter.filterSensitiveLog(item)) }),
    });
})(ExecuteStatementRequest = exports.ExecuteStatementRequest || (exports.ExecuteStatementRequest = {}));
var StructValue;
(function (StructValue) {
    /**
     * @internal
     */
    StructValue.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.attributes && { attributes: obj.attributes.map((item) => Value.filterSensitiveLog(item)) }),
    });
})(StructValue = exports.StructValue || (exports.StructValue = {}));
var BatchExecuteStatementRequest;
(function (BatchExecuteStatementRequest) {
    /**
     * @internal
     */
    BatchExecuteStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.parameterSets && {
            parameterSets: obj.parameterSets.map((item) => item.map((item) => SqlParameter.filterSensitiveLog(item))),
        }),
    });
})(BatchExecuteStatementRequest = exports.BatchExecuteStatementRequest || (exports.BatchExecuteStatementRequest = {}));
var BatchExecuteStatementResponse;
(function (BatchExecuteStatementResponse) {
    /**
     * @internal
     */
    BatchExecuteStatementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.updateResults && { updateResults: obj.updateResults.map((item) => UpdateResult.filterSensitiveLog(item)) }),
    });
})(BatchExecuteStatementResponse = exports.BatchExecuteStatementResponse || (exports.BatchExecuteStatementResponse = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.values && { values: obj.values.map((item) => Value.filterSensitiveLog(item)) }),
    });
})(_Record = exports._Record || (exports._Record = {}));
var ExecuteStatementResponse;
(function (ExecuteStatementResponse) {
    /**
     * @internal
     */
    ExecuteStatementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.records && { records: obj.records.map((item) => item.map((item) => Field.filterSensitiveLog(item))) }),
        ...(obj.generatedFields && { generatedFields: obj.generatedFields.map((item) => Field.filterSensitiveLog(item)) }),
    });
})(ExecuteStatementResponse = exports.ExecuteStatementResponse || (exports.ExecuteStatementResponse = {}));
var ResultFrame;
(function (ResultFrame) {
    /**
     * @internal
     */
    ResultFrame.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.records && { records: obj.records.map((item) => _Record.filterSensitiveLog(item)) }),
    });
})(ResultFrame = exports.ResultFrame || (exports.ResultFrame = {}));
var SqlStatementResult;
(function (SqlStatementResult) {
    /**
     * @internal
     */
    SqlStatementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlStatementResult = exports.SqlStatementResult || (exports.SqlStatementResult = {}));
var ExecuteSqlResponse;
(function (ExecuteSqlResponse) {
    /**
     * @internal
     */
    ExecuteSqlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteSqlResponse = exports.ExecuteSqlResponse || (exports.ExecuteSqlResponse = {}));
//# sourceMappingURL=models_0.js.map