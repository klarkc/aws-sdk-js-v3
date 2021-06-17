"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecordsOutput = exports._Record = exports.StreamRecord = exports.AttributeValue = exports.ListStreamsOutput = exports._Stream = exports.ListStreamsInput = exports.GetShardIteratorOutput = exports.GetShardIteratorInput = exports.TrimmedDataAccessException = exports.LimitExceededException = exports.Identity = exports.GetRecordsInput = exports.ExpiredIteratorException = exports.ResourceNotFoundException = exports.InternalServerError = exports.DescribeStreamOutput = exports.StreamDescription = exports.Shard = exports.SequenceNumberRange = exports.KeySchemaElement = exports.DescribeStreamInput = void 0;
var DescribeStreamInput;
(function (DescribeStreamInput) {
    /**
     * @internal
     */
    DescribeStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamInput = exports.DescribeStreamInput || (exports.DescribeStreamInput = {}));
var KeySchemaElement;
(function (KeySchemaElement) {
    /**
     * @internal
     */
    KeySchemaElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySchemaElement = exports.KeySchemaElement || (exports.KeySchemaElement = {}));
var SequenceNumberRange;
(function (SequenceNumberRange) {
    /**
     * @internal
     */
    SequenceNumberRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SequenceNumberRange = exports.SequenceNumberRange || (exports.SequenceNumberRange = {}));
var Shard;
(function (Shard) {
    /**
     * @internal
     */
    Shard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Shard = exports.Shard || (exports.Shard = {}));
var StreamDescription;
(function (StreamDescription) {
    /**
     * @internal
     */
    StreamDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamDescription = exports.StreamDescription || (exports.StreamDescription = {}));
var DescribeStreamOutput;
(function (DescribeStreamOutput) {
    /**
     * @internal
     */
    DescribeStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamOutput = exports.DescribeStreamOutput || (exports.DescribeStreamOutput = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ExpiredIteratorException;
(function (ExpiredIteratorException) {
    /**
     * @internal
     */
    ExpiredIteratorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpiredIteratorException = exports.ExpiredIteratorException || (exports.ExpiredIteratorException = {}));
var GetRecordsInput;
(function (GetRecordsInput) {
    /**
     * @internal
     */
    GetRecordsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecordsInput = exports.GetRecordsInput || (exports.GetRecordsInput = {}));
var Identity;
(function (Identity) {
    /**
     * @internal
     */
    Identity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Identity = exports.Identity || (exports.Identity = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TrimmedDataAccessException;
(function (TrimmedDataAccessException) {
    /**
     * @internal
     */
    TrimmedDataAccessException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrimmedDataAccessException = exports.TrimmedDataAccessException || (exports.TrimmedDataAccessException = {}));
var GetShardIteratorInput;
(function (GetShardIteratorInput) {
    /**
     * @internal
     */
    GetShardIteratorInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetShardIteratorInput = exports.GetShardIteratorInput || (exports.GetShardIteratorInput = {}));
var GetShardIteratorOutput;
(function (GetShardIteratorOutput) {
    /**
     * @internal
     */
    GetShardIteratorOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetShardIteratorOutput = exports.GetShardIteratorOutput || (exports.GetShardIteratorOutput = {}));
var ListStreamsInput;
(function (ListStreamsInput) {
    /**
     * @internal
     */
    ListStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsInput = exports.ListStreamsInput || (exports.ListStreamsInput = {}));
var _Stream;
(function (_Stream) {
    /**
     * @internal
     */
    _Stream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Stream = exports._Stream || (exports._Stream = {}));
var ListStreamsOutput;
(function (ListStreamsOutput) {
    /**
     * @internal
     */
    ListStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamsOutput = exports.ListStreamsOutput || (exports.ListStreamsOutput = {}));
var AttributeValue;
(function (AttributeValue) {
    AttributeValue.visit = (value, visitor) => {
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
    AttributeValue.filterSensitiveLog = (obj) => {
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
                M: Object.entries(obj.M).reduce((acc, [key, value]) => ({
                    ...acc,
                    [key]: AttributeValue.filterSensitiveLog(value),
                }), {}),
            };
        if (obj.L !== undefined)
            return { L: obj.L.map((item) => AttributeValue.filterSensitiveLog(item)) };
        if (obj.NULL !== undefined)
            return { NULL: obj.NULL };
        if (obj.BOOL !== undefined)
            return { BOOL: obj.BOOL };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var StreamRecord;
(function (StreamRecord) {
    /**
     * @internal
     */
    StreamRecord.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Keys && {
            Keys: Object.entries(obj.Keys).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.NewImage && {
            NewImage: Object.entries(obj.NewImage).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.OldImage && {
            OldImage: Object.entries(obj.OldImage).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(StreamRecord = exports.StreamRecord || (exports.StreamRecord = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.dynamodb && { dynamodb: StreamRecord.filterSensitiveLog(obj.dynamodb) }),
    });
})(_Record = exports._Record || (exports._Record = {}));
var GetRecordsOutput;
(function (GetRecordsOutput) {
    /**
     * @internal
     */
    GetRecordsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Records && { Records: obj.Records.map((item) => _Record.filterSensitiveLog(item)) }),
    });
})(GetRecordsOutput = exports.GetRecordsOutput || (exports.GetRecordsOutput = {}));
//# sourceMappingURL=models_0.js.map