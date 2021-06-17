import { __assign } from "tslib";
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var TypeHint;
(function (TypeHint) {
    TypeHint["DATE"] = "DATE";
    TypeHint["DECIMAL"] = "DECIMAL";
    TypeHint["JSON"] = "JSON";
    TypeHint["TIME"] = "TIME";
    TypeHint["TIMESTAMP"] = "TIMESTAMP";
    TypeHint["UUID"] = "UUID";
})(TypeHint || (TypeHint = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var ServiceUnavailableError;
(function (ServiceUnavailableError) {
    /**
     * @internal
     */
    ServiceUnavailableError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableError || (ServiceUnavailableError = {}));
export var StatementTimeoutException;
(function (StatementTimeoutException) {
    /**
     * @internal
     */
    StatementTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatementTimeoutException || (StatementTimeoutException = {}));
export var BeginTransactionRequest;
(function (BeginTransactionRequest) {
    /**
     * @internal
     */
    BeginTransactionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BeginTransactionRequest || (BeginTransactionRequest = {}));
export var BeginTransactionResponse;
(function (BeginTransactionResponse) {
    /**
     * @internal
     */
    BeginTransactionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BeginTransactionResponse || (BeginTransactionResponse = {}));
export var ColumnMetadata;
(function (ColumnMetadata) {
    /**
     * @internal
     */
    ColumnMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColumnMetadata || (ColumnMetadata = {}));
export var CommitTransactionRequest;
(function (CommitTransactionRequest) {
    /**
     * @internal
     */
    CommitTransactionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommitTransactionRequest || (CommitTransactionRequest = {}));
export var CommitTransactionResponse;
(function (CommitTransactionResponse) {
    /**
     * @internal
     */
    CommitTransactionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommitTransactionResponse || (CommitTransactionResponse = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DecimalReturnType;
(function (DecimalReturnType) {
    DecimalReturnType["DOUBLE_OR_LONG"] = "DOUBLE_OR_LONG";
    DecimalReturnType["STRING"] = "STRING";
})(DecimalReturnType || (DecimalReturnType = {}));
export var ExecuteSqlRequest;
(function (ExecuteSqlRequest) {
    /**
     * @internal
     */
    ExecuteSqlRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteSqlRequest || (ExecuteSqlRequest = {}));
export var ResultSetMetadata;
(function (ResultSetMetadata) {
    /**
     * @internal
     */
    ResultSetMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultSetMetadata || (ResultSetMetadata = {}));
export var ResultSetOptions;
(function (ResultSetOptions) {
    /**
     * @internal
     */
    ResultSetOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultSetOptions || (ResultSetOptions = {}));
export var RollbackTransactionRequest;
(function (RollbackTransactionRequest) {
    /**
     * @internal
     */
    RollbackTransactionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RollbackTransactionRequest || (RollbackTransactionRequest = {}));
export var RollbackTransactionResponse;
(function (RollbackTransactionResponse) {
    /**
     * @internal
     */
    RollbackTransactionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RollbackTransactionResponse || (RollbackTransactionResponse = {}));
export var ArrayValue;
(function (ArrayValue) {
    ArrayValue.visit = function (value, visitor) {
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
    ArrayValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.booleanValues !== undefined)
            return { booleanValues: obj.booleanValues };
        if (obj.longValues !== undefined)
            return { longValues: obj.longValues };
        if (obj.doubleValues !== undefined)
            return { doubleValues: obj.doubleValues };
        if (obj.stringValues !== undefined)
            return { stringValues: obj.stringValues };
        if (obj.arrayValues !== undefined)
            return { arrayValues: obj.arrayValues.map(function (item) { return ArrayValue.filterSensitiveLog(item); }) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ArrayValue || (ArrayValue = {}));
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
        if (value.arrayValue !== undefined)
            return visitor.arrayValue(value.arrayValue);
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
        if (obj.arrayValue !== undefined)
            return { arrayValue: ArrayValue.filterSensitiveLog(obj.arrayValue) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(Field || (Field = {}));
export var SqlParameter;
(function (SqlParameter) {
    /**
     * @internal
     */
    SqlParameter.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.value && { value: Field.filterSensitiveLog(obj.value) }))); };
})(SqlParameter || (SqlParameter = {}));
export var UpdateResult;
(function (UpdateResult) {
    /**
     * @internal
     */
    UpdateResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.generatedFields && { generatedFields: obj.generatedFields.map(function (item) { return Field.filterSensitiveLog(item); }) }))); };
})(UpdateResult || (UpdateResult = {}));
export var Value;
(function (Value) {
    Value.visit = function (value, visitor) {
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
    Value.filterSensitiveLog = function (obj) {
        var _a;
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
            return { arrayValues: obj.arrayValues.map(function (item) { return Value.filterSensitiveLog(item); }) };
        if (obj.structValue !== undefined)
            return { structValue: StructValue.filterSensitiveLog(obj.structValue) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(Value || (Value = {}));
export var ExecuteStatementRequest;
(function (ExecuteStatementRequest) {
    /**
     * @internal
     */
    ExecuteStatementRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.parameters && { parameters: obj.parameters.map(function (item) { return SqlParameter.filterSensitiveLog(item); }) }))); };
})(ExecuteStatementRequest || (ExecuteStatementRequest = {}));
export var StructValue;
(function (StructValue) {
    /**
     * @internal
     */
    StructValue.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.attributes && { attributes: obj.attributes.map(function (item) { return Value.filterSensitiveLog(item); }) }))); };
})(StructValue || (StructValue = {}));
export var BatchExecuteStatementRequest;
(function (BatchExecuteStatementRequest) {
    /**
     * @internal
     */
    BatchExecuteStatementRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.parameterSets && {
        parameterSets: obj.parameterSets.map(function (item) { return item.map(function (item) { return SqlParameter.filterSensitiveLog(item); }); }),
    }))); };
})(BatchExecuteStatementRequest || (BatchExecuteStatementRequest = {}));
export var BatchExecuteStatementResponse;
(function (BatchExecuteStatementResponse) {
    /**
     * @internal
     */
    BatchExecuteStatementResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.updateResults && { updateResults: obj.updateResults.map(function (item) { return UpdateResult.filterSensitiveLog(item); }) }))); };
})(BatchExecuteStatementResponse || (BatchExecuteStatementResponse = {}));
export var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.values && { values: obj.values.map(function (item) { return Value.filterSensitiveLog(item); }) }))); };
})(_Record || (_Record = {}));
export var ExecuteStatementResponse;
(function (ExecuteStatementResponse) {
    /**
     * @internal
     */
    ExecuteStatementResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.records && { records: obj.records.map(function (item) { return item.map(function (item) { return Field.filterSensitiveLog(item); }); }) })), (obj.generatedFields && { generatedFields: obj.generatedFields.map(function (item) { return Field.filterSensitiveLog(item); }) }))); };
})(ExecuteStatementResponse || (ExecuteStatementResponse = {}));
export var ResultFrame;
(function (ResultFrame) {
    /**
     * @internal
     */
    ResultFrame.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.records && { records: obj.records.map(function (item) { return _Record.filterSensitiveLog(item); }) }))); };
})(ResultFrame || (ResultFrame = {}));
export var SqlStatementResult;
(function (SqlStatementResult) {
    /**
     * @internal
     */
    SqlStatementResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlStatementResult || (SqlStatementResult = {}));
export var ExecuteSqlResponse;
(function (ExecuteSqlResponse) {
    /**
     * @internal
     */
    ExecuteSqlResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteSqlResponse || (ExecuteSqlResponse = {}));
//# sourceMappingURL=models_0.js.map