import { __assign, __read } from "tslib";
export var DescribeStreamInput;
(function (DescribeStreamInput) {
    /**
     * @internal
     */
    DescribeStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamInput || (DescribeStreamInput = {}));
export var KeySchemaElement;
(function (KeySchemaElement) {
    /**
     * @internal
     */
    KeySchemaElement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeySchemaElement || (KeySchemaElement = {}));
export var SequenceNumberRange;
(function (SequenceNumberRange) {
    /**
     * @internal
     */
    SequenceNumberRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SequenceNumberRange || (SequenceNumberRange = {}));
export var Shard;
(function (Shard) {
    /**
     * @internal
     */
    Shard.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Shard || (Shard = {}));
export var StreamDescription;
(function (StreamDescription) {
    /**
     * @internal
     */
    StreamDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamDescription || (StreamDescription = {}));
export var DescribeStreamOutput;
(function (DescribeStreamOutput) {
    /**
     * @internal
     */
    DescribeStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamOutput || (DescribeStreamOutput = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ExpiredIteratorException;
(function (ExpiredIteratorException) {
    /**
     * @internal
     */
    ExpiredIteratorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExpiredIteratorException || (ExpiredIteratorException = {}));
export var GetRecordsInput;
(function (GetRecordsInput) {
    /**
     * @internal
     */
    GetRecordsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecordsInput || (GetRecordsInput = {}));
export var Identity;
(function (Identity) {
    /**
     * @internal
     */
    Identity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Identity || (Identity = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var TrimmedDataAccessException;
(function (TrimmedDataAccessException) {
    /**
     * @internal
     */
    TrimmedDataAccessException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrimmedDataAccessException || (TrimmedDataAccessException = {}));
export var GetShardIteratorInput;
(function (GetShardIteratorInput) {
    /**
     * @internal
     */
    GetShardIteratorInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetShardIteratorInput || (GetShardIteratorInput = {}));
export var GetShardIteratorOutput;
(function (GetShardIteratorOutput) {
    /**
     * @internal
     */
    GetShardIteratorOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetShardIteratorOutput || (GetShardIteratorOutput = {}));
export var ListStreamsInput;
(function (ListStreamsInput) {
    /**
     * @internal
     */
    ListStreamsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamsInput || (ListStreamsInput = {}));
export var _Stream;
(function (_Stream) {
    /**
     * @internal
     */
    _Stream.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Stream || (_Stream = {}));
export var ListStreamsOutput;
(function (ListStreamsOutput) {
    /**
     * @internal
     */
    ListStreamsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamsOutput || (ListStreamsOutput = {}));
export var AttributeValue;
(function (AttributeValue) {
    AttributeValue.visit = function (value, visitor) {
        if (value.S !== undefined)
            return visitor.S(value.S);
        if (value.N !== undefined)
            return visitor.N(value.N);
        if (value.B !== undefined)
            return visitor.B(value.B);
        if (value.SS !== undefined)
            return visitor.SS(value.SS);
        if (value.NS !== undefined)
            return visitor.NS(value.NS);
        if (value.BS !== undefined)
            return visitor.BS(value.BS);
        if (value.M !== undefined)
            return visitor.M(value.M);
        if (value.L !== undefined)
            return visitor.L(value.L);
        if (value.NULL !== undefined)
            return visitor.NULL(value.NULL);
        if (value.BOOL !== undefined)
            return visitor.BOOL(value.BOOL);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AttributeValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.S !== undefined)
            return { S: obj.S };
        if (obj.N !== undefined)
            return { N: obj.N };
        if (obj.B !== undefined)
            return { B: obj.B };
        if (obj.SS !== undefined)
            return { SS: obj.SS };
        if (obj.NS !== undefined)
            return { NS: obj.NS };
        if (obj.BS !== undefined)
            return { BS: obj.BS };
        if (obj.M !== undefined)
            return {
                M: Object.entries(obj.M).reduce(function (acc, _a) {
                    var _b;
                    var _c = __read(_a, 2), key = _c[0], value = _c[1];
                    return (__assign(__assign({}, acc), (_b = {}, _b[key] = AttributeValue.filterSensitiveLog(value), _b)));
                }, {}),
            };
        if (obj.L !== undefined)
            return { L: obj.L.map(function (item) { return AttributeValue.filterSensitiveLog(item); }) };
        if (obj.NULL !== undefined)
            return { NULL: obj.NULL };
        if (obj.BOOL !== undefined)
            return { BOOL: obj.BOOL };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AttributeValue || (AttributeValue = {}));
export var StreamRecord;
(function (StreamRecord) {
    /**
     * @internal
     */
    StreamRecord.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.Keys && {
        Keys: Object.entries(obj.Keys).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = AttributeValue.filterSensitiveLog(value), _b)));
        }, {}),
    })), (obj.NewImage && {
        NewImage: Object.entries(obj.NewImage).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = AttributeValue.filterSensitiveLog(value), _b)));
        }, {}),
    })), (obj.OldImage && {
        OldImage: Object.entries(obj.OldImage).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = AttributeValue.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(StreamRecord || (StreamRecord = {}));
export var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.dynamodb && { dynamodb: StreamRecord.filterSensitiveLog(obj.dynamodb) }))); };
})(_Record || (_Record = {}));
export var GetRecordsOutput;
(function (GetRecordsOutput) {
    /**
     * @internal
     */
    GetRecordsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Records && { Records: obj.Records.map(function (item) { return _Record.filterSensitiveLog(item); }) }))); };
})(GetRecordsOutput || (GetRecordsOutput = {}));
//# sourceMappingURL=models_0.js.map