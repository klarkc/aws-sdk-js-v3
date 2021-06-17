"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputDescription = exports.LambdaOutputDescription = exports.KinesisStreamsOutputDescription = exports.KinesisFirehoseOutputDescription = exports.InputDescription = exports.KinesisStreamsInputDescription = exports.KinesisFirehoseInputDescription = exports.InputStartingPositionConfiguration = exports.InputStartingPosition = exports.InputProcessingConfigurationDescription = exports.InputLambdaProcessorDescription = exports.CloudWatchLoggingOptionDescription = exports.ApplicationStatus = exports.AddApplicationReferenceDataSourceResponse = exports.AddApplicationReferenceDataSourceRequest = exports.ReferenceDataSource = exports.S3ReferenceDataSource = exports.AddApplicationOutputResponse = exports.AddApplicationOutputRequest = exports.Output = exports.LambdaOutput = exports.KinesisStreamsOutput = exports.KinesisFirehoseOutput = exports.DestinationSchema = exports.AddApplicationInputProcessingConfigurationResponse = exports.AddApplicationInputProcessingConfigurationRequest = exports.CodeValidationException = exports.AddApplicationInputResponse = exports.AddApplicationInputRequest = exports.Input = exports.KinesisStreamsInput = exports.KinesisFirehoseInput = exports.SourceSchema = exports.RecordFormat = exports.RecordFormatType = exports.MappingParameters = exports.JSONMappingParameters = exports.CSVMappingParameters = exports.RecordColumn = exports.InputProcessingConfiguration = exports.InputLambdaProcessor = exports.InputParallelism = exports.UnsupportedOperationException = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InvalidArgumentException = exports.ConcurrentModificationException = exports.AddApplicationCloudWatchLoggingOptionResponse = exports.AddApplicationCloudWatchLoggingOptionRequest = exports.CloudWatchLoggingOption = void 0;
exports.StartApplicationResponse = exports.StartApplicationRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.InvalidApplicationConfigurationException = exports.InputConfiguration = exports.UnableToDetectSchemaException = exports.ServiceUnavailableException = exports.ResourceProvisionedThroughputExceededException = exports.DiscoverInputSchemaResponse = exports.DiscoverInputSchemaRequest = exports.S3Configuration = exports.DescribeApplicationResponse = exports.DescribeApplicationRequest = exports.DeleteApplicationReferenceDataSourceResponse = exports.DeleteApplicationReferenceDataSourceRequest = exports.DeleteApplicationOutputResponse = exports.DeleteApplicationOutputRequest = exports.DeleteApplicationInputProcessingConfigurationResponse = exports.DeleteApplicationInputProcessingConfigurationRequest = exports.DeleteApplicationCloudWatchLoggingOptionResponse = exports.DeleteApplicationCloudWatchLoggingOptionRequest = exports.DeleteApplicationResponse = exports.DeleteApplicationRequest = exports.TooManyTagsException = exports.LimitExceededException = exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.Tag = exports.ApplicationUpdate = exports.ReferenceDataSourceUpdate = exports.S3ReferenceDataSourceUpdate = exports.OutputUpdate = exports.LambdaOutputUpdate = exports.KinesisStreamsOutputUpdate = exports.KinesisFirehoseOutputUpdate = exports.InputUpdate = exports.KinesisStreamsInputUpdate = exports.KinesisFirehoseInputUpdate = exports.InputSchemaUpdate = exports.InputProcessingConfigurationUpdate = exports.InputLambdaProcessorUpdate = exports.InputParallelismUpdate = exports.CloudWatchLoggingOptionUpdate = exports.ApplicationSummary = exports.ApplicationDetail = exports.ReferenceDataSourceDescription = exports.S3ReferenceDataSourceDescription = void 0;
exports.UpdateApplicationResponse = exports.UpdateApplicationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopApplicationResponse = exports.StopApplicationRequest = void 0;
var CloudWatchLoggingOption;
(function (CloudWatchLoggingOption) {
    /**
     * @internal
     */
    CloudWatchLoggingOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLoggingOption = exports.CloudWatchLoggingOption || (exports.CloudWatchLoggingOption = {}));
var AddApplicationCloudWatchLoggingOptionRequest;
(function (AddApplicationCloudWatchLoggingOptionRequest) {
    /**
     * @internal
     */
    AddApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationCloudWatchLoggingOptionRequest = exports.AddApplicationCloudWatchLoggingOptionRequest || (exports.AddApplicationCloudWatchLoggingOptionRequest = {}));
var AddApplicationCloudWatchLoggingOptionResponse;
(function (AddApplicationCloudWatchLoggingOptionResponse) {
    /**
     * @internal
     */
    AddApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationCloudWatchLoggingOptionResponse = exports.AddApplicationCloudWatchLoggingOptionResponse || (exports.AddApplicationCloudWatchLoggingOptionResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var InputParallelism;
(function (InputParallelism) {
    /**
     * @internal
     */
    InputParallelism.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputParallelism = exports.InputParallelism || (exports.InputParallelism = {}));
var InputLambdaProcessor;
(function (InputLambdaProcessor) {
    /**
     * @internal
     */
    InputLambdaProcessor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLambdaProcessor = exports.InputLambdaProcessor || (exports.InputLambdaProcessor = {}));
var InputProcessingConfiguration;
(function (InputProcessingConfiguration) {
    /**
     * @internal
     */
    InputProcessingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputProcessingConfiguration = exports.InputProcessingConfiguration || (exports.InputProcessingConfiguration = {}));
var RecordColumn;
(function (RecordColumn) {
    /**
     * @internal
     */
    RecordColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordColumn = exports.RecordColumn || (exports.RecordColumn = {}));
var CSVMappingParameters;
(function (CSVMappingParameters) {
    /**
     * @internal
     */
    CSVMappingParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CSVMappingParameters = exports.CSVMappingParameters || (exports.CSVMappingParameters = {}));
var JSONMappingParameters;
(function (JSONMappingParameters) {
    /**
     * @internal
     */
    JSONMappingParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JSONMappingParameters = exports.JSONMappingParameters || (exports.JSONMappingParameters = {}));
var MappingParameters;
(function (MappingParameters) {
    /**
     * @internal
     */
    MappingParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MappingParameters = exports.MappingParameters || (exports.MappingParameters = {}));
var RecordFormatType;
(function (RecordFormatType) {
    RecordFormatType["CSV"] = "CSV";
    RecordFormatType["JSON"] = "JSON";
})(RecordFormatType = exports.RecordFormatType || (exports.RecordFormatType = {}));
var RecordFormat;
(function (RecordFormat) {
    /**
     * @internal
     */
    RecordFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordFormat = exports.RecordFormat || (exports.RecordFormat = {}));
var SourceSchema;
(function (SourceSchema) {
    /**
     * @internal
     */
    SourceSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceSchema = exports.SourceSchema || (exports.SourceSchema = {}));
var KinesisFirehoseInput;
(function (KinesisFirehoseInput) {
    /**
     * @internal
     */
    KinesisFirehoseInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseInput = exports.KinesisFirehoseInput || (exports.KinesisFirehoseInput = {}));
var KinesisStreamsInput;
(function (KinesisStreamsInput) {
    /**
     * @internal
     */
    KinesisStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsInput = exports.KinesisStreamsInput || (exports.KinesisStreamsInput = {}));
var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Input = exports.Input || (exports.Input = {}));
var AddApplicationInputRequest;
(function (AddApplicationInputRequest) {
    /**
     * @internal
     */
    AddApplicationInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationInputRequest = exports.AddApplicationInputRequest || (exports.AddApplicationInputRequest = {}));
var AddApplicationInputResponse;
(function (AddApplicationInputResponse) {
    /**
     * @internal
     */
    AddApplicationInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationInputResponse = exports.AddApplicationInputResponse || (exports.AddApplicationInputResponse = {}));
var CodeValidationException;
(function (CodeValidationException) {
    /**
     * @internal
     */
    CodeValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeValidationException = exports.CodeValidationException || (exports.CodeValidationException = {}));
var AddApplicationInputProcessingConfigurationRequest;
(function (AddApplicationInputProcessingConfigurationRequest) {
    /**
     * @internal
     */
    AddApplicationInputProcessingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationInputProcessingConfigurationRequest = exports.AddApplicationInputProcessingConfigurationRequest || (exports.AddApplicationInputProcessingConfigurationRequest = {}));
var AddApplicationInputProcessingConfigurationResponse;
(function (AddApplicationInputProcessingConfigurationResponse) {
    /**
     * @internal
     */
    AddApplicationInputProcessingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationInputProcessingConfigurationResponse = exports.AddApplicationInputProcessingConfigurationResponse || (exports.AddApplicationInputProcessingConfigurationResponse = {}));
var DestinationSchema;
(function (DestinationSchema) {
    /**
     * @internal
     */
    DestinationSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationSchema = exports.DestinationSchema || (exports.DestinationSchema = {}));
var KinesisFirehoseOutput;
(function (KinesisFirehoseOutput) {
    /**
     * @internal
     */
    KinesisFirehoseOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseOutput = exports.KinesisFirehoseOutput || (exports.KinesisFirehoseOutput = {}));
var KinesisStreamsOutput;
(function (KinesisStreamsOutput) {
    /**
     * @internal
     */
    KinesisStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsOutput = exports.KinesisStreamsOutput || (exports.KinesisStreamsOutput = {}));
var LambdaOutput;
(function (LambdaOutput) {
    /**
     * @internal
     */
    LambdaOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaOutput = exports.LambdaOutput || (exports.LambdaOutput = {}));
var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Output = exports.Output || (exports.Output = {}));
var AddApplicationOutputRequest;
(function (AddApplicationOutputRequest) {
    /**
     * @internal
     */
    AddApplicationOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationOutputRequest = exports.AddApplicationOutputRequest || (exports.AddApplicationOutputRequest = {}));
var AddApplicationOutputResponse;
(function (AddApplicationOutputResponse) {
    /**
     * @internal
     */
    AddApplicationOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationOutputResponse = exports.AddApplicationOutputResponse || (exports.AddApplicationOutputResponse = {}));
var S3ReferenceDataSource;
(function (S3ReferenceDataSource) {
    /**
     * @internal
     */
    S3ReferenceDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ReferenceDataSource = exports.S3ReferenceDataSource || (exports.S3ReferenceDataSource = {}));
var ReferenceDataSource;
(function (ReferenceDataSource) {
    /**
     * @internal
     */
    ReferenceDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceDataSource = exports.ReferenceDataSource || (exports.ReferenceDataSource = {}));
var AddApplicationReferenceDataSourceRequest;
(function (AddApplicationReferenceDataSourceRequest) {
    /**
     * @internal
     */
    AddApplicationReferenceDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationReferenceDataSourceRequest = exports.AddApplicationReferenceDataSourceRequest || (exports.AddApplicationReferenceDataSourceRequest = {}));
var AddApplicationReferenceDataSourceResponse;
(function (AddApplicationReferenceDataSourceResponse) {
    /**
     * @internal
     */
    AddApplicationReferenceDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationReferenceDataSourceResponse = exports.AddApplicationReferenceDataSourceResponse || (exports.AddApplicationReferenceDataSourceResponse = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["DELETING"] = "DELETING";
    ApplicationStatus["READY"] = "READY";
    ApplicationStatus["RUNNING"] = "RUNNING";
    ApplicationStatus["STARTING"] = "STARTING";
    ApplicationStatus["STOPPING"] = "STOPPING";
    ApplicationStatus["UPDATING"] = "UPDATING";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
var CloudWatchLoggingOptionDescription;
(function (CloudWatchLoggingOptionDescription) {
    /**
     * @internal
     */
    CloudWatchLoggingOptionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLoggingOptionDescription = exports.CloudWatchLoggingOptionDescription || (exports.CloudWatchLoggingOptionDescription = {}));
var InputLambdaProcessorDescription;
(function (InputLambdaProcessorDescription) {
    /**
     * @internal
     */
    InputLambdaProcessorDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLambdaProcessorDescription = exports.InputLambdaProcessorDescription || (exports.InputLambdaProcessorDescription = {}));
var InputProcessingConfigurationDescription;
(function (InputProcessingConfigurationDescription) {
    /**
     * @internal
     */
    InputProcessingConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputProcessingConfigurationDescription = exports.InputProcessingConfigurationDescription || (exports.InputProcessingConfigurationDescription = {}));
var InputStartingPosition;
(function (InputStartingPosition) {
    InputStartingPosition["LAST_STOPPED_POINT"] = "LAST_STOPPED_POINT";
    InputStartingPosition["NOW"] = "NOW";
    InputStartingPosition["TRIM_HORIZON"] = "TRIM_HORIZON";
})(InputStartingPosition = exports.InputStartingPosition || (exports.InputStartingPosition = {}));
var InputStartingPositionConfiguration;
(function (InputStartingPositionConfiguration) {
    /**
     * @internal
     */
    InputStartingPositionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputStartingPositionConfiguration = exports.InputStartingPositionConfiguration || (exports.InputStartingPositionConfiguration = {}));
var KinesisFirehoseInputDescription;
(function (KinesisFirehoseInputDescription) {
    /**
     * @internal
     */
    KinesisFirehoseInputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseInputDescription = exports.KinesisFirehoseInputDescription || (exports.KinesisFirehoseInputDescription = {}));
var KinesisStreamsInputDescription;
(function (KinesisStreamsInputDescription) {
    /**
     * @internal
     */
    KinesisStreamsInputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsInputDescription = exports.KinesisStreamsInputDescription || (exports.KinesisStreamsInputDescription = {}));
var InputDescription;
(function (InputDescription) {
    /**
     * @internal
     */
    InputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDescription = exports.InputDescription || (exports.InputDescription = {}));
var KinesisFirehoseOutputDescription;
(function (KinesisFirehoseOutputDescription) {
    /**
     * @internal
     */
    KinesisFirehoseOutputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseOutputDescription = exports.KinesisFirehoseOutputDescription || (exports.KinesisFirehoseOutputDescription = {}));
var KinesisStreamsOutputDescription;
(function (KinesisStreamsOutputDescription) {
    /**
     * @internal
     */
    KinesisStreamsOutputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsOutputDescription = exports.KinesisStreamsOutputDescription || (exports.KinesisStreamsOutputDescription = {}));
var LambdaOutputDescription;
(function (LambdaOutputDescription) {
    /**
     * @internal
     */
    LambdaOutputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaOutputDescription = exports.LambdaOutputDescription || (exports.LambdaOutputDescription = {}));
var OutputDescription;
(function (OutputDescription) {
    /**
     * @internal
     */
    OutputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDescription = exports.OutputDescription || (exports.OutputDescription = {}));
var S3ReferenceDataSourceDescription;
(function (S3ReferenceDataSourceDescription) {
    /**
     * @internal
     */
    S3ReferenceDataSourceDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ReferenceDataSourceDescription = exports.S3ReferenceDataSourceDescription || (exports.S3ReferenceDataSourceDescription = {}));
var ReferenceDataSourceDescription;
(function (ReferenceDataSourceDescription) {
    /**
     * @internal
     */
    ReferenceDataSourceDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceDataSourceDescription = exports.ReferenceDataSourceDescription || (exports.ReferenceDataSourceDescription = {}));
var ApplicationDetail;
(function (ApplicationDetail) {
    /**
     * @internal
     */
    ApplicationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDetail = exports.ApplicationDetail || (exports.ApplicationDetail = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    /**
     * @internal
     */
    ApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var CloudWatchLoggingOptionUpdate;
(function (CloudWatchLoggingOptionUpdate) {
    /**
     * @internal
     */
    CloudWatchLoggingOptionUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLoggingOptionUpdate = exports.CloudWatchLoggingOptionUpdate || (exports.CloudWatchLoggingOptionUpdate = {}));
var InputParallelismUpdate;
(function (InputParallelismUpdate) {
    /**
     * @internal
     */
    InputParallelismUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputParallelismUpdate = exports.InputParallelismUpdate || (exports.InputParallelismUpdate = {}));
var InputLambdaProcessorUpdate;
(function (InputLambdaProcessorUpdate) {
    /**
     * @internal
     */
    InputLambdaProcessorUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLambdaProcessorUpdate = exports.InputLambdaProcessorUpdate || (exports.InputLambdaProcessorUpdate = {}));
var InputProcessingConfigurationUpdate;
(function (InputProcessingConfigurationUpdate) {
    /**
     * @internal
     */
    InputProcessingConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputProcessingConfigurationUpdate = exports.InputProcessingConfigurationUpdate || (exports.InputProcessingConfigurationUpdate = {}));
var InputSchemaUpdate;
(function (InputSchemaUpdate) {
    /**
     * @internal
     */
    InputSchemaUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSchemaUpdate = exports.InputSchemaUpdate || (exports.InputSchemaUpdate = {}));
var KinesisFirehoseInputUpdate;
(function (KinesisFirehoseInputUpdate) {
    /**
     * @internal
     */
    KinesisFirehoseInputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseInputUpdate = exports.KinesisFirehoseInputUpdate || (exports.KinesisFirehoseInputUpdate = {}));
var KinesisStreamsInputUpdate;
(function (KinesisStreamsInputUpdate) {
    /**
     * @internal
     */
    KinesisStreamsInputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsInputUpdate = exports.KinesisStreamsInputUpdate || (exports.KinesisStreamsInputUpdate = {}));
var InputUpdate;
(function (InputUpdate) {
    /**
     * @internal
     */
    InputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputUpdate = exports.InputUpdate || (exports.InputUpdate = {}));
var KinesisFirehoseOutputUpdate;
(function (KinesisFirehoseOutputUpdate) {
    /**
     * @internal
     */
    KinesisFirehoseOutputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseOutputUpdate = exports.KinesisFirehoseOutputUpdate || (exports.KinesisFirehoseOutputUpdate = {}));
var KinesisStreamsOutputUpdate;
(function (KinesisStreamsOutputUpdate) {
    /**
     * @internal
     */
    KinesisStreamsOutputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamsOutputUpdate = exports.KinesisStreamsOutputUpdate || (exports.KinesisStreamsOutputUpdate = {}));
var LambdaOutputUpdate;
(function (LambdaOutputUpdate) {
    /**
     * @internal
     */
    LambdaOutputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaOutputUpdate = exports.LambdaOutputUpdate || (exports.LambdaOutputUpdate = {}));
var OutputUpdate;
(function (OutputUpdate) {
    /**
     * @internal
     */
    OutputUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputUpdate = exports.OutputUpdate || (exports.OutputUpdate = {}));
var S3ReferenceDataSourceUpdate;
(function (S3ReferenceDataSourceUpdate) {
    /**
     * @internal
     */
    S3ReferenceDataSourceUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ReferenceDataSourceUpdate = exports.S3ReferenceDataSourceUpdate || (exports.S3ReferenceDataSourceUpdate = {}));
var ReferenceDataSourceUpdate;
(function (ReferenceDataSourceUpdate) {
    /**
     * @internal
     */
    ReferenceDataSourceUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceDataSourceUpdate = exports.ReferenceDataSourceUpdate || (exports.ReferenceDataSourceUpdate = {}));
var ApplicationUpdate;
(function (ApplicationUpdate) {
    /**
     * @internal
     */
    ApplicationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationUpdate = exports.ApplicationUpdate || (exports.ApplicationUpdate = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    /**
     * @internal
     */
    CreateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    /**
     * @internal
     */
    DeleteApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
    /**
     * @internal
     */
    DeleteApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {}));
var DeleteApplicationCloudWatchLoggingOptionRequest;
(function (DeleteApplicationCloudWatchLoggingOptionRequest) {
    /**
     * @internal
     */
    DeleteApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationCloudWatchLoggingOptionRequest = exports.DeleteApplicationCloudWatchLoggingOptionRequest || (exports.DeleteApplicationCloudWatchLoggingOptionRequest = {}));
var DeleteApplicationCloudWatchLoggingOptionResponse;
(function (DeleteApplicationCloudWatchLoggingOptionResponse) {
    /**
     * @internal
     */
    DeleteApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationCloudWatchLoggingOptionResponse = exports.DeleteApplicationCloudWatchLoggingOptionResponse || (exports.DeleteApplicationCloudWatchLoggingOptionResponse = {}));
var DeleteApplicationInputProcessingConfigurationRequest;
(function (DeleteApplicationInputProcessingConfigurationRequest) {
    /**
     * @internal
     */
    DeleteApplicationInputProcessingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationInputProcessingConfigurationRequest = exports.DeleteApplicationInputProcessingConfigurationRequest || (exports.DeleteApplicationInputProcessingConfigurationRequest = {}));
var DeleteApplicationInputProcessingConfigurationResponse;
(function (DeleteApplicationInputProcessingConfigurationResponse) {
    /**
     * @internal
     */
    DeleteApplicationInputProcessingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationInputProcessingConfigurationResponse = exports.DeleteApplicationInputProcessingConfigurationResponse || (exports.DeleteApplicationInputProcessingConfigurationResponse = {}));
var DeleteApplicationOutputRequest;
(function (DeleteApplicationOutputRequest) {
    /**
     * @internal
     */
    DeleteApplicationOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationOutputRequest = exports.DeleteApplicationOutputRequest || (exports.DeleteApplicationOutputRequest = {}));
var DeleteApplicationOutputResponse;
(function (DeleteApplicationOutputResponse) {
    /**
     * @internal
     */
    DeleteApplicationOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationOutputResponse = exports.DeleteApplicationOutputResponse || (exports.DeleteApplicationOutputResponse = {}));
var DeleteApplicationReferenceDataSourceRequest;
(function (DeleteApplicationReferenceDataSourceRequest) {
    /**
     * @internal
     */
    DeleteApplicationReferenceDataSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationReferenceDataSourceRequest = exports.DeleteApplicationReferenceDataSourceRequest || (exports.DeleteApplicationReferenceDataSourceRequest = {}));
var DeleteApplicationReferenceDataSourceResponse;
(function (DeleteApplicationReferenceDataSourceResponse) {
    /**
     * @internal
     */
    DeleteApplicationReferenceDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationReferenceDataSourceResponse = exports.DeleteApplicationReferenceDataSourceResponse || (exports.DeleteApplicationReferenceDataSourceResponse = {}));
var DescribeApplicationRequest;
(function (DescribeApplicationRequest) {
    /**
     * @internal
     */
    DescribeApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationRequest = exports.DescribeApplicationRequest || (exports.DescribeApplicationRequest = {}));
var DescribeApplicationResponse;
(function (DescribeApplicationResponse) {
    /**
     * @internal
     */
    DescribeApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationResponse = exports.DescribeApplicationResponse || (exports.DescribeApplicationResponse = {}));
var S3Configuration;
(function (S3Configuration) {
    /**
     * @internal
     */
    S3Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Configuration = exports.S3Configuration || (exports.S3Configuration = {}));
var DiscoverInputSchemaRequest;
(function (DiscoverInputSchemaRequest) {
    /**
     * @internal
     */
    DiscoverInputSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverInputSchemaRequest = exports.DiscoverInputSchemaRequest || (exports.DiscoverInputSchemaRequest = {}));
var DiscoverInputSchemaResponse;
(function (DiscoverInputSchemaResponse) {
    /**
     * @internal
     */
    DiscoverInputSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverInputSchemaResponse = exports.DiscoverInputSchemaResponse || (exports.DiscoverInputSchemaResponse = {}));
var ResourceProvisionedThroughputExceededException;
(function (ResourceProvisionedThroughputExceededException) {
    /**
     * @internal
     */
    ResourceProvisionedThroughputExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceProvisionedThroughputExceededException = exports.ResourceProvisionedThroughputExceededException || (exports.ResourceProvisionedThroughputExceededException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var UnableToDetectSchemaException;
(function (UnableToDetectSchemaException) {
    /**
     * @internal
     */
    UnableToDetectSchemaException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnableToDetectSchemaException = exports.UnableToDetectSchemaException || (exports.UnableToDetectSchemaException = {}));
var InputConfiguration;
(function (InputConfiguration) {
    /**
     * @internal
     */
    InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputConfiguration = exports.InputConfiguration || (exports.InputConfiguration = {}));
var InvalidApplicationConfigurationException;
(function (InvalidApplicationConfigurationException) {
    /**
     * @internal
     */
    InvalidApplicationConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApplicationConfigurationException = exports.InvalidApplicationConfigurationException || (exports.InvalidApplicationConfigurationException = {}));
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
    /**
     * @internal
     */
    ListApplicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {}));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
    /**
     * @internal
     */
    ListApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var StartApplicationRequest;
(function (StartApplicationRequest) {
    /**
     * @internal
     */
    StartApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartApplicationRequest = exports.StartApplicationRequest || (exports.StartApplicationRequest = {}));
var StartApplicationResponse;
(function (StartApplicationResponse) {
    /**
     * @internal
     */
    StartApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartApplicationResponse = exports.StartApplicationResponse || (exports.StartApplicationResponse = {}));
var StopApplicationRequest;
(function (StopApplicationRequest) {
    /**
     * @internal
     */
    StopApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopApplicationRequest = exports.StopApplicationRequest || (exports.StopApplicationRequest = {}));
var StopApplicationResponse;
(function (StopApplicationResponse) {
    /**
     * @internal
     */
    StopApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopApplicationResponse = exports.StopApplicationResponse || (exports.StopApplicationResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
    /**
     * @internal
     */
    UpdateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {}));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
    /**
     * @internal
     */
    UpdateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {}));
//# sourceMappingURL=models_0.js.map