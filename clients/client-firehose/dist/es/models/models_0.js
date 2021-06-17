import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var BufferingHints;
(function (BufferingHints) {
    /**
     * @internal
     */
    BufferingHints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BufferingHints || (BufferingHints = {}));
export var CloudWatchLoggingOptions;
(function (CloudWatchLoggingOptions) {
    /**
     * @internal
     */
    CloudWatchLoggingOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchLoggingOptions || (CloudWatchLoggingOptions = {}));
export var CompressionFormat;
(function (CompressionFormat) {
    CompressionFormat["GZIP"] = "GZIP";
    CompressionFormat["HADOOP_SNAPPY"] = "HADOOP_SNAPPY";
    CompressionFormat["SNAPPY"] = "Snappy";
    CompressionFormat["UNCOMPRESSED"] = "UNCOMPRESSED";
    CompressionFormat["ZIP"] = "ZIP";
})(CompressionFormat || (CompressionFormat = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var ContentEncoding;
(function (ContentEncoding) {
    ContentEncoding["GZIP"] = "GZIP";
    ContentEncoding["NONE"] = "NONE";
})(ContentEncoding || (ContentEncoding = {}));
export var CopyCommand;
(function (CopyCommand) {
    /**
     * @internal
     */
    CopyCommand.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyCommand || (CopyCommand = {}));
export var KeyType;
(function (KeyType) {
    KeyType["AWS_OWNED_CMK"] = "AWS_OWNED_CMK";
    KeyType["CUSTOMER_MANAGED_CMK"] = "CUSTOMER_MANAGED_CMK";
})(KeyType || (KeyType = {}));
export var DeliveryStreamEncryptionConfigurationInput;
(function (DeliveryStreamEncryptionConfigurationInput) {
    /**
     * @internal
     */
    DeliveryStreamEncryptionConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeliveryStreamEncryptionConfigurationInput || (DeliveryStreamEncryptionConfigurationInput = {}));
export var ElasticsearchBufferingHints;
(function (ElasticsearchBufferingHints) {
    /**
     * @internal
     */
    ElasticsearchBufferingHints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchBufferingHints || (ElasticsearchBufferingHints = {}));
export var ProcessorParameterName;
(function (ProcessorParameterName) {
    ProcessorParameterName["BUFFER_INTERVAL_IN_SECONDS"] = "BufferIntervalInSeconds";
    ProcessorParameterName["BUFFER_SIZE_IN_MB"] = "BufferSizeInMBs";
    ProcessorParameterName["LAMBDA_ARN"] = "LambdaArn";
    ProcessorParameterName["LAMBDA_NUMBER_OF_RETRIES"] = "NumberOfRetries";
    ProcessorParameterName["ROLE_ARN"] = "RoleArn";
})(ProcessorParameterName || (ProcessorParameterName = {}));
export var ProcessorParameter;
(function (ProcessorParameter) {
    /**
     * @internal
     */
    ProcessorParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessorParameter || (ProcessorParameter = {}));
export var Processor;
(function (Processor) {
    /**
     * @internal
     */
    Processor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Processor || (Processor = {}));
export var ProcessingConfiguration;
(function (ProcessingConfiguration) {
    /**
     * @internal
     */
    ProcessingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingConfiguration || (ProcessingConfiguration = {}));
export var ElasticsearchRetryOptions;
(function (ElasticsearchRetryOptions) {
    /**
     * @internal
     */
    ElasticsearchRetryOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchRetryOptions || (ElasticsearchRetryOptions = {}));
export var KMSEncryptionConfig;
(function (KMSEncryptionConfig) {
    /**
     * @internal
     */
    KMSEncryptionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSEncryptionConfig || (KMSEncryptionConfig = {}));
export var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
export var S3DestinationConfiguration;
(function (S3DestinationConfiguration) {
    /**
     * @internal
     */
    S3DestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationConfiguration || (S3DestinationConfiguration = {}));
export var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfiguration || (VpcConfiguration = {}));
export var ElasticsearchDestinationConfiguration;
(function (ElasticsearchDestinationConfiguration) {
    /**
     * @internal
     */
    ElasticsearchDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchDestinationConfiguration || (ElasticsearchDestinationConfiguration = {}));
export var HiveJsonSerDe;
(function (HiveJsonSerDe) {
    /**
     * @internal
     */
    HiveJsonSerDe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HiveJsonSerDe || (HiveJsonSerDe = {}));
export var OpenXJsonSerDe;
(function (OpenXJsonSerDe) {
    /**
     * @internal
     */
    OpenXJsonSerDe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenXJsonSerDe || (OpenXJsonSerDe = {}));
export var Deserializer;
(function (Deserializer) {
    /**
     * @internal
     */
    Deserializer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Deserializer || (Deserializer = {}));
export var InputFormatConfiguration;
(function (InputFormatConfiguration) {
    /**
     * @internal
     */
    InputFormatConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputFormatConfiguration || (InputFormatConfiguration = {}));
export var OrcCompression;
(function (OrcCompression) {
    OrcCompression["NONE"] = "NONE";
    OrcCompression["SNAPPY"] = "SNAPPY";
    OrcCompression["ZLIB"] = "ZLIB";
})(OrcCompression || (OrcCompression = {}));
export var OrcFormatVersion;
(function (OrcFormatVersion) {
    OrcFormatVersion["V0_11"] = "V0_11";
    OrcFormatVersion["V0_12"] = "V0_12";
})(OrcFormatVersion || (OrcFormatVersion = {}));
export var OrcSerDe;
(function (OrcSerDe) {
    /**
     * @internal
     */
    OrcSerDe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrcSerDe || (OrcSerDe = {}));
export var ParquetCompression;
(function (ParquetCompression) {
    ParquetCompression["GZIP"] = "GZIP";
    ParquetCompression["SNAPPY"] = "SNAPPY";
    ParquetCompression["UNCOMPRESSED"] = "UNCOMPRESSED";
})(ParquetCompression || (ParquetCompression = {}));
export var ParquetWriterVersion;
(function (ParquetWriterVersion) {
    ParquetWriterVersion["V1"] = "V1";
    ParquetWriterVersion["V2"] = "V2";
})(ParquetWriterVersion || (ParquetWriterVersion = {}));
export var ParquetSerDe;
(function (ParquetSerDe) {
    /**
     * @internal
     */
    ParquetSerDe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParquetSerDe || (ParquetSerDe = {}));
export var Serializer;
(function (Serializer) {
    /**
     * @internal
     */
    Serializer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Serializer || (Serializer = {}));
export var OutputFormatConfiguration;
(function (OutputFormatConfiguration) {
    /**
     * @internal
     */
    OutputFormatConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputFormatConfiguration || (OutputFormatConfiguration = {}));
export var SchemaConfiguration;
(function (SchemaConfiguration) {
    /**
     * @internal
     */
    SchemaConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaConfiguration || (SchemaConfiguration = {}));
export var DataFormatConversionConfiguration;
(function (DataFormatConversionConfiguration) {
    /**
     * @internal
     */
    DataFormatConversionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataFormatConversionConfiguration || (DataFormatConversionConfiguration = {}));
export var ExtendedS3DestinationConfiguration;
(function (ExtendedS3DestinationConfiguration) {
    /**
     * @internal
     */
    ExtendedS3DestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtendedS3DestinationConfiguration || (ExtendedS3DestinationConfiguration = {}));
export var HttpEndpointBufferingHints;
(function (HttpEndpointBufferingHints) {
    /**
     * @internal
     */
    HttpEndpointBufferingHints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpEndpointBufferingHints || (HttpEndpointBufferingHints = {}));
export var HttpEndpointConfiguration;
(function (HttpEndpointConfiguration) {
    /**
     * @internal
     */
    HttpEndpointConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Url && { Url: SENSITIVE_STRING })), (obj.AccessKey && { AccessKey: SENSITIVE_STRING }))); };
})(HttpEndpointConfiguration || (HttpEndpointConfiguration = {}));
export var HttpEndpointCommonAttribute;
(function (HttpEndpointCommonAttribute) {
    /**
     * @internal
     */
    HttpEndpointCommonAttribute.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AttributeName && { AttributeName: SENSITIVE_STRING })), (obj.AttributeValue && { AttributeValue: SENSITIVE_STRING }))); };
})(HttpEndpointCommonAttribute || (HttpEndpointCommonAttribute = {}));
export var HttpEndpointRequestConfiguration;
(function (HttpEndpointRequestConfiguration) {
    /**
     * @internal
     */
    HttpEndpointRequestConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CommonAttributes && {
        CommonAttributes: obj.CommonAttributes.map(function (item) { return HttpEndpointCommonAttribute.filterSensitiveLog(item); }),
    }))); };
})(HttpEndpointRequestConfiguration || (HttpEndpointRequestConfiguration = {}));
export var HttpEndpointRetryOptions;
(function (HttpEndpointRetryOptions) {
    /**
     * @internal
     */
    HttpEndpointRetryOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpEndpointRetryOptions || (HttpEndpointRetryOptions = {}));
export var HttpEndpointDestinationConfiguration;
(function (HttpEndpointDestinationConfiguration) {
    /**
     * @internal
     */
    HttpEndpointDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.EndpointConfiguration && {
        EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration),
    })), (obj.RequestConfiguration && {
        RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }))); };
})(HttpEndpointDestinationConfiguration || (HttpEndpointDestinationConfiguration = {}));
export var KinesisStreamSourceConfiguration;
(function (KinesisStreamSourceConfiguration) {
    /**
     * @internal
     */
    KinesisStreamSourceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisStreamSourceConfiguration || (KinesisStreamSourceConfiguration = {}));
export var RedshiftRetryOptions;
(function (RedshiftRetryOptions) {
    /**
     * @internal
     */
    RedshiftRetryOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftRetryOptions || (RedshiftRetryOptions = {}));
export var RedshiftDestinationConfiguration;
(function (RedshiftDestinationConfiguration) {
    /**
     * @internal
     */
    RedshiftDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(RedshiftDestinationConfiguration || (RedshiftDestinationConfiguration = {}));
export var SplunkRetryOptions;
(function (SplunkRetryOptions) {
    /**
     * @internal
     */
    SplunkRetryOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SplunkRetryOptions || (SplunkRetryOptions = {}));
export var SplunkDestinationConfiguration;
(function (SplunkDestinationConfiguration) {
    /**
     * @internal
     */
    SplunkDestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SplunkDestinationConfiguration || (SplunkDestinationConfiguration = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateDeliveryStreamInput;
(function (CreateDeliveryStreamInput) {
    /**
     * @internal
     */
    CreateDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.RedshiftDestinationConfiguration && {
        RedshiftDestinationConfiguration: RedshiftDestinationConfiguration.filterSensitiveLog(obj.RedshiftDestinationConfiguration),
    })), (obj.HttpEndpointDestinationConfiguration && {
        HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfiguration.filterSensitiveLog(obj.HttpEndpointDestinationConfiguration),
    }))); };
})(CreateDeliveryStreamInput || (CreateDeliveryStreamInput = {}));
export var CreateDeliveryStreamOutput;
(function (CreateDeliveryStreamOutput) {
    /**
     * @internal
     */
    CreateDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeliveryStreamOutput || (CreateDeliveryStreamOutput = {}));
export var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArgumentException || (InvalidArgumentException = {}));
export var InvalidKMSResourceException;
(function (InvalidKMSResourceException) {
    /**
     * @internal
     */
    InvalidKMSResourceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidKMSResourceException || (InvalidKMSResourceException = {}));
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
export var DeleteDeliveryStreamInput;
(function (DeleteDeliveryStreamInput) {
    /**
     * @internal
     */
    DeleteDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeliveryStreamInput || (DeleteDeliveryStreamInput = {}));
export var DeleteDeliveryStreamOutput;
(function (DeleteDeliveryStreamOutput) {
    /**
     * @internal
     */
    DeleteDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeliveryStreamOutput || (DeleteDeliveryStreamOutput = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeliveryStreamFailureType;
(function (DeliveryStreamFailureType) {
    DeliveryStreamFailureType["CREATE_ENI_FAILED"] = "CREATE_ENI_FAILED";
    DeliveryStreamFailureType["CREATE_KMS_GRANT_FAILED"] = "CREATE_KMS_GRANT_FAILED";
    DeliveryStreamFailureType["DELETE_ENI_FAILED"] = "DELETE_ENI_FAILED";
    DeliveryStreamFailureType["DISABLED_KMS_KEY"] = "DISABLED_KMS_KEY";
    DeliveryStreamFailureType["ENI_ACCESS_DENIED"] = "ENI_ACCESS_DENIED";
    DeliveryStreamFailureType["INVALID_KMS_KEY"] = "INVALID_KMS_KEY";
    DeliveryStreamFailureType["KMS_ACCESS_DENIED"] = "KMS_ACCESS_DENIED";
    DeliveryStreamFailureType["KMS_KEY_NOT_FOUND"] = "KMS_KEY_NOT_FOUND";
    DeliveryStreamFailureType["KMS_OPT_IN_REQUIRED"] = "KMS_OPT_IN_REQUIRED";
    DeliveryStreamFailureType["RETIRE_KMS_GRANT_FAILED"] = "RETIRE_KMS_GRANT_FAILED";
    DeliveryStreamFailureType["SECURITY_GROUP_ACCESS_DENIED"] = "SECURITY_GROUP_ACCESS_DENIED";
    DeliveryStreamFailureType["SECURITY_GROUP_NOT_FOUND"] = "SECURITY_GROUP_NOT_FOUND";
    DeliveryStreamFailureType["SUBNET_ACCESS_DENIED"] = "SUBNET_ACCESS_DENIED";
    DeliveryStreamFailureType["SUBNET_NOT_FOUND"] = "SUBNET_NOT_FOUND";
    DeliveryStreamFailureType["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(DeliveryStreamFailureType || (DeliveryStreamFailureType = {}));
export var FailureDescription;
(function (FailureDescription) {
    /**
     * @internal
     */
    FailureDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureDescription || (FailureDescription = {}));
export var DeliveryStreamEncryptionStatus;
(function (DeliveryStreamEncryptionStatus) {
    DeliveryStreamEncryptionStatus["DISABLED"] = "DISABLED";
    DeliveryStreamEncryptionStatus["DISABLING"] = "DISABLING";
    DeliveryStreamEncryptionStatus["DISABLING_FAILED"] = "DISABLING_FAILED";
    DeliveryStreamEncryptionStatus["ENABLED"] = "ENABLED";
    DeliveryStreamEncryptionStatus["ENABLING"] = "ENABLING";
    DeliveryStreamEncryptionStatus["ENABLING_FAILED"] = "ENABLING_FAILED";
})(DeliveryStreamEncryptionStatus || (DeliveryStreamEncryptionStatus = {}));
export var DeliveryStreamEncryptionConfiguration;
(function (DeliveryStreamEncryptionConfiguration) {
    /**
     * @internal
     */
    DeliveryStreamEncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeliveryStreamEncryptionConfiguration || (DeliveryStreamEncryptionConfiguration = {}));
export var DeliveryStreamStatus;
(function (DeliveryStreamStatus) {
    DeliveryStreamStatus["ACTIVE"] = "ACTIVE";
    DeliveryStreamStatus["CREATING"] = "CREATING";
    DeliveryStreamStatus["CREATING_FAILED"] = "CREATING_FAILED";
    DeliveryStreamStatus["DELETING"] = "DELETING";
    DeliveryStreamStatus["DELETING_FAILED"] = "DELETING_FAILED";
})(DeliveryStreamStatus || (DeliveryStreamStatus = {}));
export var S3DestinationDescription;
(function (S3DestinationDescription) {
    /**
     * @internal
     */
    S3DestinationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationDescription || (S3DestinationDescription = {}));
export var VpcConfigurationDescription;
(function (VpcConfigurationDescription) {
    /**
     * @internal
     */
    VpcConfigurationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfigurationDescription || (VpcConfigurationDescription = {}));
export var ElasticsearchDestinationDescription;
(function (ElasticsearchDestinationDescription) {
    /**
     * @internal
     */
    ElasticsearchDestinationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchDestinationDescription || (ElasticsearchDestinationDescription = {}));
export var ExtendedS3DestinationDescription;
(function (ExtendedS3DestinationDescription) {
    /**
     * @internal
     */
    ExtendedS3DestinationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtendedS3DestinationDescription || (ExtendedS3DestinationDescription = {}));
export var HttpEndpointDescription;
(function (HttpEndpointDescription) {
    /**
     * @internal
     */
    HttpEndpointDescription.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Url && { Url: SENSITIVE_STRING }))); };
})(HttpEndpointDescription || (HttpEndpointDescription = {}));
export var HttpEndpointDestinationDescription;
(function (HttpEndpointDestinationDescription) {
    /**
     * @internal
     */
    HttpEndpointDestinationDescription.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.EndpointConfiguration && {
        EndpointConfiguration: HttpEndpointDescription.filterSensitiveLog(obj.EndpointConfiguration),
    })), (obj.RequestConfiguration && {
        RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }))); };
})(HttpEndpointDestinationDescription || (HttpEndpointDestinationDescription = {}));
export var RedshiftDestinationDescription;
(function (RedshiftDestinationDescription) {
    /**
     * @internal
     */
    RedshiftDestinationDescription.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(RedshiftDestinationDescription || (RedshiftDestinationDescription = {}));
export var SplunkDestinationDescription;
(function (SplunkDestinationDescription) {
    /**
     * @internal
     */
    SplunkDestinationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SplunkDestinationDescription || (SplunkDestinationDescription = {}));
export var DestinationDescription;
(function (DestinationDescription) {
    /**
     * @internal
     */
    DestinationDescription.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.RedshiftDestinationDescription && {
        RedshiftDestinationDescription: RedshiftDestinationDescription.filterSensitiveLog(obj.RedshiftDestinationDescription),
    })), (obj.HttpEndpointDestinationDescription && {
        HttpEndpointDestinationDescription: HttpEndpointDestinationDescription.filterSensitiveLog(obj.HttpEndpointDestinationDescription),
    }))); };
})(DestinationDescription || (DestinationDescription = {}));
export var KinesisStreamSourceDescription;
(function (KinesisStreamSourceDescription) {
    /**
     * @internal
     */
    KinesisStreamSourceDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisStreamSourceDescription || (KinesisStreamSourceDescription = {}));
export var SourceDescription;
(function (SourceDescription) {
    /**
     * @internal
     */
    SourceDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceDescription || (SourceDescription = {}));
export var DeliveryStreamDescription;
(function (DeliveryStreamDescription) {
    /**
     * @internal
     */
    DeliveryStreamDescription.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Destinations && {
        Destinations: obj.Destinations.map(function (item) { return DestinationDescription.filterSensitiveLog(item); }),
    }))); };
})(DeliveryStreamDescription || (DeliveryStreamDescription = {}));
export var DescribeDeliveryStreamInput;
(function (DescribeDeliveryStreamInput) {
    /**
     * @internal
     */
    DescribeDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeliveryStreamInput || (DescribeDeliveryStreamInput = {}));
export var DescribeDeliveryStreamOutput;
(function (DescribeDeliveryStreamOutput) {
    /**
     * @internal
     */
    DescribeDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DeliveryStreamDescription && {
        DeliveryStreamDescription: DeliveryStreamDescription.filterSensitiveLog(obj.DeliveryStreamDescription),
    }))); };
})(DescribeDeliveryStreamOutput || (DescribeDeliveryStreamOutput = {}));
export var S3DestinationUpdate;
(function (S3DestinationUpdate) {
    /**
     * @internal
     */
    S3DestinationUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationUpdate || (S3DestinationUpdate = {}));
export var ElasticsearchDestinationUpdate;
(function (ElasticsearchDestinationUpdate) {
    /**
     * @internal
     */
    ElasticsearchDestinationUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchDestinationUpdate || (ElasticsearchDestinationUpdate = {}));
export var ExtendedS3DestinationUpdate;
(function (ExtendedS3DestinationUpdate) {
    /**
     * @internal
     */
    ExtendedS3DestinationUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtendedS3DestinationUpdate || (ExtendedS3DestinationUpdate = {}));
export var ListDeliveryStreamsInput;
(function (ListDeliveryStreamsInput) {
    /**
     * @internal
     */
    ListDeliveryStreamsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeliveryStreamsInput || (ListDeliveryStreamsInput = {}));
export var ListDeliveryStreamsOutput;
(function (ListDeliveryStreamsOutput) {
    /**
     * @internal
     */
    ListDeliveryStreamsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeliveryStreamsOutput || (ListDeliveryStreamsOutput = {}));
export var ListTagsForDeliveryStreamInput;
(function (ListTagsForDeliveryStreamInput) {
    /**
     * @internal
     */
    ListTagsForDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForDeliveryStreamInput || (ListTagsForDeliveryStreamInput = {}));
export var ListTagsForDeliveryStreamOutput;
(function (ListTagsForDeliveryStreamOutput) {
    /**
     * @internal
     */
    ListTagsForDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForDeliveryStreamOutput || (ListTagsForDeliveryStreamOutput = {}));
export var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Record || (_Record = {}));
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
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var PutRecordBatchInput;
(function (PutRecordBatchInput) {
    /**
     * @internal
     */
    PutRecordBatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordBatchInput || (PutRecordBatchInput = {}));
export var PutRecordBatchResponseEntry;
(function (PutRecordBatchResponseEntry) {
    /**
     * @internal
     */
    PutRecordBatchResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordBatchResponseEntry || (PutRecordBatchResponseEntry = {}));
export var PutRecordBatchOutput;
(function (PutRecordBatchOutput) {
    /**
     * @internal
     */
    PutRecordBatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecordBatchOutput || (PutRecordBatchOutput = {}));
export var StartDeliveryStreamEncryptionInput;
(function (StartDeliveryStreamEncryptionInput) {
    /**
     * @internal
     */
    StartDeliveryStreamEncryptionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDeliveryStreamEncryptionInput || (StartDeliveryStreamEncryptionInput = {}));
export var StartDeliveryStreamEncryptionOutput;
(function (StartDeliveryStreamEncryptionOutput) {
    /**
     * @internal
     */
    StartDeliveryStreamEncryptionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDeliveryStreamEncryptionOutput || (StartDeliveryStreamEncryptionOutput = {}));
export var StopDeliveryStreamEncryptionInput;
(function (StopDeliveryStreamEncryptionInput) {
    /**
     * @internal
     */
    StopDeliveryStreamEncryptionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopDeliveryStreamEncryptionInput || (StopDeliveryStreamEncryptionInput = {}));
export var StopDeliveryStreamEncryptionOutput;
(function (StopDeliveryStreamEncryptionOutput) {
    /**
     * @internal
     */
    StopDeliveryStreamEncryptionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopDeliveryStreamEncryptionOutput || (StopDeliveryStreamEncryptionOutput = {}));
export var TagDeliveryStreamInput;
(function (TagDeliveryStreamInput) {
    /**
     * @internal
     */
    TagDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagDeliveryStreamInput || (TagDeliveryStreamInput = {}));
export var TagDeliveryStreamOutput;
(function (TagDeliveryStreamOutput) {
    /**
     * @internal
     */
    TagDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagDeliveryStreamOutput || (TagDeliveryStreamOutput = {}));
export var UntagDeliveryStreamInput;
(function (UntagDeliveryStreamInput) {
    /**
     * @internal
     */
    UntagDeliveryStreamInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagDeliveryStreamInput || (UntagDeliveryStreamInput = {}));
export var UntagDeliveryStreamOutput;
(function (UntagDeliveryStreamOutput) {
    /**
     * @internal
     */
    UntagDeliveryStreamOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagDeliveryStreamOutput || (UntagDeliveryStreamOutput = {}));
export var HttpEndpointDestinationUpdate;
(function (HttpEndpointDestinationUpdate) {
    /**
     * @internal
     */
    HttpEndpointDestinationUpdate.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.EndpointConfiguration && {
        EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration),
    })), (obj.RequestConfiguration && {
        RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }))); };
})(HttpEndpointDestinationUpdate || (HttpEndpointDestinationUpdate = {}));
export var RedshiftDestinationUpdate;
(function (RedshiftDestinationUpdate) {
    /**
     * @internal
     */
    RedshiftDestinationUpdate.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(RedshiftDestinationUpdate || (RedshiftDestinationUpdate = {}));
export var SplunkDestinationUpdate;
(function (SplunkDestinationUpdate) {
    /**
     * @internal
     */
    SplunkDestinationUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SplunkDestinationUpdate || (SplunkDestinationUpdate = {}));
export var UpdateDestinationInput;
(function (UpdateDestinationInput) {
    /**
     * @internal
     */
    UpdateDestinationInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.RedshiftDestinationUpdate && {
        RedshiftDestinationUpdate: RedshiftDestinationUpdate.filterSensitiveLog(obj.RedshiftDestinationUpdate),
    })), (obj.HttpEndpointDestinationUpdate && {
        HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdate.filterSensitiveLog(obj.HttpEndpointDestinationUpdate),
    }))); };
})(UpdateDestinationInput || (UpdateDestinationInput = {}));
export var UpdateDestinationOutput;
(function (UpdateDestinationOutput) {
    /**
     * @internal
     */
    UpdateDestinationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDestinationOutput || (UpdateDestinationOutput = {}));
//# sourceMappingURL=models_0.js.map