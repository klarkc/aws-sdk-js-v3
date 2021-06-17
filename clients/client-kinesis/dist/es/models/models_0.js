import { __assign } from "tslib";
export var AddTagsToStreamInput;
(function (AddTagsToStreamInput) {
    /**
     * @internal
     */
    AddTagsToStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToStreamInput || (AddTagsToStreamInput = {}));
export var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArgumentException || (InvalidArgumentException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var HashKeyRange;
(function (HashKeyRange) {
    /**
     * @internal
     */
    HashKeyRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HashKeyRange || (HashKeyRange = {}));
export var ChildShard;
(function (ChildShard) {
    /**
     * @internal
     */
    ChildShard.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChildShard || (ChildShard = {}));
export var ConsumerStatus;
(function (ConsumerStatus) {
    ConsumerStatus["ACTIVE"] = "ACTIVE";
    ConsumerStatus["CREATING"] = "CREATING";
    ConsumerStatus["DELETING"] = "DELETING";
})(ConsumerStatus || (ConsumerStatus = {}));
export var Consumer;
(function (Consumer) {
    /**
     * @internal
     */
    Consumer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Consumer || (Consumer = {}));
export var ConsumerDescription;
(function (ConsumerDescription) {
    /**
     * @internal
     */
    ConsumerDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConsumerDescription || (ConsumerDescription = {}));
export var CreateStreamInput;
(function (CreateStreamInput) {
    /**
     * @internal
     */
    CreateStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamInput || (CreateStreamInput = {}));
export var DecreaseStreamRetentionPeriodInput;
(function (DecreaseStreamRetentionPeriodInput) {
    /**
     * @internal
     */
    DecreaseStreamRetentionPeriodInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DecreaseStreamRetentionPeriodInput || (DecreaseStreamRetentionPeriodInput = {}));
export var DeleteStreamInput;
(function (DeleteStreamInput) {
    /**
     * @internal
     */
    DeleteStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamInput || (DeleteStreamInput = {}));
export var DeregisterStreamConsumerInput;
(function (DeregisterStreamConsumerInput) {
    /**
     * @internal
     */
    DeregisterStreamConsumerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterStreamConsumerInput || (DeregisterStreamConsumerInput = {}));
export var DescribeLimitsInput;
(function (DescribeLimitsInput) {
    /**
     * @internal
     */
    DescribeLimitsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLimitsInput || (DescribeLimitsInput = {}));
export var DescribeLimitsOutput;
(function (DescribeLimitsOutput) {
    /**
     * @internal
     */
    DescribeLimitsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLimitsOutput || (DescribeLimitsOutput = {}));
export var DescribeStreamInput;
(function (DescribeStreamInput) {
    /**
     * @internal
     */
    DescribeStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamInput || (DescribeStreamInput = {}));
export var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
    EncryptionType["NONE"] = "NONE";
})(EncryptionType || (EncryptionType = {}));
export var MetricsName;
(function (MetricsName) {
    MetricsName["ALL"] = "ALL";
    MetricsName["INCOMING_BYTES"] = "IncomingBytes";
    MetricsName["INCOMING_RECORDS"] = "IncomingRecords";
    MetricsName["ITERATOR_AGE_MILLISECONDS"] = "IteratorAgeMilliseconds";
    MetricsName["OUTGOING_BYTES"] = "OutgoingBytes";
    MetricsName["OUTGOING_RECORDS"] = "OutgoingRecords";
    MetricsName["READ_PROVISIONED_THROUGHPUT_EXCEEDED"] = "ReadProvisionedThroughputExceeded";
    MetricsName["WRITE_PROVISIONED_THROUGHPUT_EXCEEDED"] = "WriteProvisionedThroughputExceeded";
})(MetricsName || (MetricsName = {}));
export var EnhancedMetrics;
(function (EnhancedMetrics) {
    /**
     * @internal
     */
    EnhancedMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnhancedMetrics || (EnhancedMetrics = {}));
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
export var StreamStatus;
(function (StreamStatus) {
    StreamStatus["ACTIVE"] = "ACTIVE";
    StreamStatus["CREATING"] = "CREATING";
    StreamStatus["DELETING"] = "DELETING";
    StreamStatus["UPDATING"] = "UPDATING";
})(StreamStatus || (StreamStatus = {}));
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
export var DescribeStreamConsumerInput;
(function (DescribeStreamConsumerInput) {
    /**
     * @internal
     */
    DescribeStreamConsumerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamConsumerInput || (DescribeStreamConsumerInput = {}));
export var DescribeStreamConsumerOutput;
(function (DescribeStreamConsumerOutput) {
    /**
     * @internal
     */
    DescribeStreamConsumerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamConsumerOutput || (DescribeStreamConsumerOutput = {}));
export var DescribeStreamSummaryInput;
(function (DescribeStreamSummaryInput) {
    /**
     * @internal
     */
    DescribeStreamSummaryInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamSummaryInput || (DescribeStreamSummaryInput = {}));
export var StreamDescriptionSummary;
(function (StreamDescriptionSummary) {
    /**
     * @internal
     */
    StreamDescriptionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamDescriptionSummary || (StreamDescriptionSummary = {}));
export var DescribeStreamSummaryOutput;
(function (DescribeStreamSummaryOutput) {
    /**
     * @internal
     */
    DescribeStreamSummaryOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStreamSummaryOutput || (DescribeStreamSummaryOutput = {}));
export var DisableEnhancedMonitoringInput;
(function (DisableEnhancedMonitoringInput) {
    /**
     * @internal
     */
    DisableEnhancedMonitoringInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableEnhancedMonitoringInput || (DisableEnhancedMonitoringInput = {}));
export var EnhancedMonitoringOutput;
(function (EnhancedMonitoringOutput) {
    /**
     * @internal
     */
    EnhancedMonitoringOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnhancedMonitoringOutput || (EnhancedMonitoringOutput = {}));
export var EnableEnhancedMonitoringInput;
(function (EnableEnhancedMonitoringInput) {
    /**
     * @internal
     */
    EnableEnhancedMonitoringInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableEnhancedMonitoringInput || (EnableEnhancedMonitoringInput = {}));
export var ExpiredIteratorException;
(function (ExpiredIteratorException) {
    /**
     * @internal
     */
    ExpiredIteratorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExpiredIteratorException || (ExpiredIteratorException = {}));
export var ExpiredNextTokenException;
(function (ExpiredNextTokenException) {
    /**
     * @internal
     */
    ExpiredNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExpiredNextTokenException || (ExpiredNextTokenException = {}));
export var GetRecordsInput;
(function (GetRecordsInput) {
    /**
     * @internal
     */
    GetRecordsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecordsInput || (GetRecordsInput = {}));
export var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Record || (_Record = {}));
export var GetRecordsOutput;
(function (GetRecordsOutput) {
    /**
     * @internal
     */
    GetRecordsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecordsOutput || (GetRecordsOutput = {}));
export var KMSAccessDeniedException;
(function (KMSAccessDeniedException) {
    /**
     * @internal
     */
    KMSAccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSAccessDeniedException || (KMSAccessDeniedException = {}));
export var KMSDisabledException;
(function (KMSDisabledException) {
    /**
     * @internal
     */
    KMSDisabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSDisabledException || (KMSDisabledException = {}));
export var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    /**
     * @internal
     */
    KMSInvalidStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSInvalidStateException || (KMSInvalidStateException = {}));
export var KMSNotFoundException;
(function (KMSNotFoundException) {
    /**
     * @internal
     */
    KMSNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSNotFoundException || (KMSNotFoundException = {}));
export var KMSOptInRequired;
(function (KMSOptInRequired) {
    /**
     * @internal
     */
    KMSOptInRequired.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSOptInRequired || (KMSOptInRequired = {}));
export var KMSThrottlingException;
(function (KMSThrottlingException) {
    /**
     * @internal
     */
    KMSThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSThrottlingException || (KMSThrottlingException = {}));
export var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    /**
     * @internal
     */
    ProvisionedThroughputExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisionedThroughputExceededException || (ProvisionedThroughputExceededException = {}));
export var ShardIteratorType;
(function (ShardIteratorType) {
    ShardIteratorType["AFTER_SEQUENCE_NUMBER"] = "AFTER_SEQUENCE_NUMBER";
    ShardIteratorType["AT_SEQUENCE_NUMBER"] = "AT_SEQUENCE_NUMBER";
    ShardIteratorType["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    ShardIteratorType["LATEST"] = "LATEST";
    ShardIteratorType["TRIM_HORIZON"] = "TRIM_HORIZON";
})(ShardIteratorType || (ShardIteratorType = {}));
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
export var IncreaseStreamRetentionPeriodInput;
(function (IncreaseStreamRetentionPeriodInput) {
    /**
     * @internal
     */
    IncreaseStreamRetentionPeriodInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncreaseStreamRetentionPeriodInput || (IncreaseStreamRetentionPeriodInput = {}));
export var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var ShardFilterType;
(function (ShardFilterType) {
    ShardFilterType["AFTER_SHARD_ID"] = "AFTER_SHARD_ID";
    ShardFilterType["AT_LATEST"] = "AT_LATEST";
    ShardFilterType["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    ShardFilterType["AT_TRIM_HORIZON"] = "AT_TRIM_HORIZON";
    ShardFilterType["FROM_TIMESTAMP"] = "FROM_TIMESTAMP";
    ShardFilterType["FROM_TRIM_HORIZON"] = "FROM_TRIM_HORIZON";
})(ShardFilterType || (ShardFilterType = {}));
export var ShardFilter;
(function (ShardFilter) {
    /**
     * @internal
     */
    ShardFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShardFilter || (ShardFilter = {}));
export var ListShardsInput;
(function (ListShardsInput) {
    /**
     * @internal
     */
    ListShardsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListShardsInput || (ListShardsInput = {}));
export var ListShardsOutput;
(function (ListShardsOutput) {
    /**
     * @internal
     */
    ListShardsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListShardsOutput || (ListShardsOutput = {}));
export var ListStreamConsumersInput;
(function (ListStreamConsumersInput) {
    /**
     * @internal
     */
    ListStreamConsumersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamConsumersInput || (ListStreamConsumersInput = {}));
export var ListStreamConsumersOutput;
(function (ListStreamConsumersOutput) {
    /**
     * @internal
     */
    ListStreamConsumersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamConsumersOutput || (ListStreamConsumersOutput = {}));
export var ListStreamsInput;
(function (ListStreamsInput) {
    /**
     * @internal
     */
    ListStreamsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamsInput || (ListStreamsInput = {}));
export var ListStreamsOutput;
(function (ListStreamsOutput) {
    /**
     * @internal
     */
    ListStreamsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamsOutput || (ListStreamsOutput = {}));
export var ListTagsForStreamInput;
(function (ListTagsForStreamInput) {
    /**
     * @internal
     */
    ListTagsForStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForStreamInput || (ListTagsForStreamInput = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var ListTagsForStreamOutput;
(function (ListTagsForStreamOutput) {
    /**
     * @internal
     */
    ListTagsForStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForStreamOutput || (ListTagsForStreamOutput = {}));
export var MergeShardsInput;
(function (MergeShardsInput) {
    /**
     * @internal
     */
    MergeShardsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MergeShardsInput || (MergeShardsInput = {}));
export var PutRecordInput;
(function (PutRecordInput) {
    /**
     * @internal
     */
    PutRecordInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordInput || (PutRecordInput = {}));
export var PutRecordOutput;
(function (PutRecordOutput) {
    /**
     * @internal
     */
    PutRecordOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordOutput || (PutRecordOutput = {}));
export var PutRecordsRequestEntry;
(function (PutRecordsRequestEntry) {
    /**
     * @internal
     */
    PutRecordsRequestEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordsRequestEntry || (PutRecordsRequestEntry = {}));
export var PutRecordsInput;
(function (PutRecordsInput) {
    /**
     * @internal
     */
    PutRecordsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordsInput || (PutRecordsInput = {}));
export var PutRecordsResultEntry;
(function (PutRecordsResultEntry) {
    /**
     * @internal
     */
    PutRecordsResultEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordsResultEntry || (PutRecordsResultEntry = {}));
export var PutRecordsOutput;
(function (PutRecordsOutput) {
    /**
     * @internal
     */
    PutRecordsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordsOutput || (PutRecordsOutput = {}));
export var RegisterStreamConsumerInput;
(function (RegisterStreamConsumerInput) {
    /**
     * @internal
     */
    RegisterStreamConsumerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterStreamConsumerInput || (RegisterStreamConsumerInput = {}));
export var RegisterStreamConsumerOutput;
(function (RegisterStreamConsumerOutput) {
    /**
     * @internal
     */
    RegisterStreamConsumerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterStreamConsumerOutput || (RegisterStreamConsumerOutput = {}));
export var RemoveTagsFromStreamInput;
(function (RemoveTagsFromStreamInput) {
    /**
     * @internal
     */
    RemoveTagsFromStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromStreamInput || (RemoveTagsFromStreamInput = {}));
export var SplitShardInput;
(function (SplitShardInput) {
    /**
     * @internal
     */
    SplitShardInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SplitShardInput || (SplitShardInput = {}));
export var StartStreamEncryptionInput;
(function (StartStreamEncryptionInput) {
    /**
     * @internal
     */
    StartStreamEncryptionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartStreamEncryptionInput || (StartStreamEncryptionInput = {}));
export var StopStreamEncryptionInput;
(function (StopStreamEncryptionInput) {
    /**
     * @internal
     */
    StopStreamEncryptionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopStreamEncryptionInput || (StopStreamEncryptionInput = {}));
export var StartingPosition;
(function (StartingPosition) {
    /**
     * @internal
     */
    StartingPosition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartingPosition || (StartingPosition = {}));
export var SubscribeToShardInput;
(function (SubscribeToShardInput) {
    /**
     * @internal
     */
    SubscribeToShardInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribeToShardInput || (SubscribeToShardInput = {}));
export var SubscribeToShardEvent;
(function (SubscribeToShardEvent) {
    /**
     * @internal
     */
    SubscribeToShardEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribeToShardEvent || (SubscribeToShardEvent = {}));
export var SubscribeToShardEventStream;
(function (SubscribeToShardEventStream) {
    SubscribeToShardEventStream.visit = function (value, visitor) {
        if (value.SubscribeToShardEvent !== undefined)
            return visitor.SubscribeToShardEvent(value.SubscribeToShardEvent);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.ResourceInUseException !== undefined)
            return visitor.ResourceInUseException(value.ResourceInUseException);
        if (value.KMSDisabledException !== undefined)
            return visitor.KMSDisabledException(value.KMSDisabledException);
        if (value.KMSInvalidStateException !== undefined)
            return visitor.KMSInvalidStateException(value.KMSInvalidStateException);
        if (value.KMSAccessDeniedException !== undefined)
            return visitor.KMSAccessDeniedException(value.KMSAccessDeniedException);
        if (value.KMSNotFoundException !== undefined)
            return visitor.KMSNotFoundException(value.KMSNotFoundException);
        if (value.KMSOptInRequired !== undefined)
            return visitor.KMSOptInRequired(value.KMSOptInRequired);
        if (value.KMSThrottlingException !== undefined)
            return visitor.KMSThrottlingException(value.KMSThrottlingException);
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    SubscribeToShardEventStream.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.SubscribeToShardEvent !== undefined)
            return { SubscribeToShardEvent: SubscribeToShardEvent.filterSensitiveLog(obj.SubscribeToShardEvent) };
        if (obj.ResourceNotFoundException !== undefined)
            return { ResourceNotFoundException: ResourceNotFoundException.filterSensitiveLog(obj.ResourceNotFoundException) };
        if (obj.ResourceInUseException !== undefined)
            return { ResourceInUseException: ResourceInUseException.filterSensitiveLog(obj.ResourceInUseException) };
        if (obj.KMSDisabledException !== undefined)
            return { KMSDisabledException: KMSDisabledException.filterSensitiveLog(obj.KMSDisabledException) };
        if (obj.KMSInvalidStateException !== undefined)
            return { KMSInvalidStateException: KMSInvalidStateException.filterSensitiveLog(obj.KMSInvalidStateException) };
        if (obj.KMSAccessDeniedException !== undefined)
            return { KMSAccessDeniedException: KMSAccessDeniedException.filterSensitiveLog(obj.KMSAccessDeniedException) };
        if (obj.KMSNotFoundException !== undefined)
            return { KMSNotFoundException: KMSNotFoundException.filterSensitiveLog(obj.KMSNotFoundException) };
        if (obj.KMSOptInRequired !== undefined)
            return { KMSOptInRequired: KMSOptInRequired.filterSensitiveLog(obj.KMSOptInRequired) };
        if (obj.KMSThrottlingException !== undefined)
            return { KMSThrottlingException: KMSThrottlingException.filterSensitiveLog(obj.KMSThrottlingException) };
        if (obj.InternalFailureException !== undefined)
            return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(SubscribeToShardEventStream || (SubscribeToShardEventStream = {}));
export var SubscribeToShardOutput;
(function (SubscribeToShardOutput) {
    /**
     * @internal
     */
    SubscribeToShardOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EventStream && { EventStream: "STREAMING_CONTENT" }))); };
})(SubscribeToShardOutput || (SubscribeToShardOutput = {}));
export var ScalingType;
(function (ScalingType) {
    ScalingType["UNIFORM_SCALING"] = "UNIFORM_SCALING";
})(ScalingType || (ScalingType = {}));
export var UpdateShardCountInput;
(function (UpdateShardCountInput) {
    /**
     * @internal
     */
    UpdateShardCountInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateShardCountInput || (UpdateShardCountInput = {}));
export var UpdateShardCountOutput;
(function (UpdateShardCountOutput) {
    /**
     * @internal
     */
    UpdateShardCountOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateShardCountOutput || (UpdateShardCountOutput = {}));
//# sourceMappingURL=models_0.js.map