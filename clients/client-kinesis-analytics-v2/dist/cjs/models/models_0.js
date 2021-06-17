"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ReferenceDataSourceDescription = exports.AddApplicationReferenceDataSourceRequest = exports.ReferenceDataSource = exports.S3ReferenceDataSource = exports.AddApplicationOutputResponse = exports.OutputDescription = exports.LambdaOutputDescription = exports.KinesisStreamsOutputDescription = exports.KinesisFirehoseOutputDescription = exports.AddApplicationOutputRequest = exports.Output = exports.LambdaOutput = exports.KinesisStreamsOutput = exports.KinesisFirehoseOutput = exports.DestinationSchema = exports.AddApplicationInputProcessingConfigurationResponse = exports.AddApplicationInputProcessingConfigurationRequest = exports.CodeValidationException = exports.AddApplicationInputResponse = exports.InputDescription = exports.KinesisStreamsInputDescription = exports.KinesisFirehoseInputDescription = exports.InputStartingPositionConfiguration = exports.InputStartingPosition = exports.InputProcessingConfigurationDescription = exports.InputLambdaProcessorDescription = exports.AddApplicationInputRequest = exports.Input = exports.KinesisStreamsInput = exports.KinesisFirehoseInput = exports.SourceSchema = exports.RecordFormat = exports.RecordFormatType = exports.MappingParameters = exports.JSONMappingParameters = exports.CSVMappingParameters = exports.RecordColumn = exports.InputProcessingConfiguration = exports.InputLambdaProcessor = exports.InputParallelism = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InvalidRequestException = exports.InvalidArgumentException = exports.InvalidApplicationConfigurationException = exports.ConcurrentModificationException = exports.AddApplicationCloudWatchLoggingOptionResponse = exports.CloudWatchLoggingOptionDescription = exports.AddApplicationCloudWatchLoggingOptionRequest = exports.CloudWatchLoggingOption = void 0;
exports.CatalogConfigurationDescription = exports.GlueDataCatalogConfigurationDescription = exports.SqlApplicationConfigurationDescription = exports.RunConfigurationDescription = exports.FlinkRunConfiguration = exports.ApplicationRestoreConfiguration = exports.ApplicationRestoreType = exports.FlinkApplicationConfigurationDescription = exports.ParallelismConfigurationDescription = exports.MonitoringConfigurationDescription = exports.CheckpointConfigurationDescription = exports.EnvironmentPropertyDescriptions = exports.ApplicationSnapshotConfigurationDescription = exports.ApplicationConfiguration = exports.ZeppelinApplicationConfiguration = exports.ZeppelinMonitoringConfiguration = exports.DeployAsApplicationConfiguration = exports.S3ContentBaseLocation = exports.CustomArtifactConfiguration = exports.MavenReference = exports.ArtifactType = exports.CatalogConfiguration = exports.GlueDataCatalogConfiguration = exports.SqlApplicationConfiguration = exports.FlinkApplicationConfiguration = exports.ParallelismConfiguration = exports.MonitoringConfiguration = exports.MetricsLevel = exports.LogLevel = exports.CheckpointConfiguration = exports.ConfigurationType = exports.EnvironmentProperties = exports.PropertyGroup = exports.ApplicationSnapshotConfiguration = exports.ApplicationCodeConfigurationUpdate = exports.CodeContentUpdate = exports.S3ContentLocationUpdate = exports.ApplicationCodeConfigurationDescription = exports.CodeContentDescription = exports.S3ApplicationCodeLocationDescription = exports.ApplicationCodeConfiguration = exports.CodeContentType = exports.CodeContent = exports.S3ContentLocation = exports.AddApplicationVpcConfigurationResponse = exports.VpcConfigurationDescription = exports.AddApplicationVpcConfigurationRequest = exports.VpcConfiguration = exports.AddApplicationReferenceDataSourceResponse = exports.ReferenceDataSourceDescription = void 0;
exports.CreateApplicationPresignedUrlRequest = exports.UrlType = exports.TooManyTagsException = exports.LimitExceededException = exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.Tag = exports.CloudWatchLoggingOptionUpdate = exports.ApplicationVersionSummary = exports.ApplicationSummary = exports.ApplicationMaintenanceConfigurationUpdate = exports.ApplicationDetail = exports.RuntimeEnvironment = exports.ApplicationStatus = exports.ApplicationMode = exports.ApplicationMaintenanceConfigurationDescription = exports.ApplicationConfigurationUpdate = exports.ZeppelinApplicationConfigurationUpdate = exports.ZeppelinMonitoringConfigurationUpdate = exports.DeployAsApplicationConfigurationUpdate = exports.S3ContentBaseLocationUpdate = exports.CatalogConfigurationUpdate = exports.GlueDataCatalogConfigurationUpdate = exports.VpcConfigurationUpdate = exports.SqlApplicationConfigurationUpdate = exports.ReferenceDataSourceUpdate = exports.S3ReferenceDataSourceUpdate = exports.OutputUpdate = exports.LambdaOutputUpdate = exports.KinesisStreamsOutputUpdate = exports.KinesisFirehoseOutputUpdate = exports.InputUpdate = exports.KinesisStreamsInputUpdate = exports.KinesisFirehoseInputUpdate = exports.InputSchemaUpdate = exports.InputProcessingConfigurationUpdate = exports.InputLambdaProcessorUpdate = exports.InputParallelismUpdate = exports.FlinkApplicationConfigurationUpdate = exports.ParallelismConfigurationUpdate = exports.MonitoringConfigurationUpdate = exports.CheckpointConfigurationUpdate = exports.EnvironmentPropertyUpdates = exports.ApplicationSnapshotConfigurationUpdate = exports.ApplicationConfigurationDescription = exports.ZeppelinApplicationConfigurationDescription = exports.ZeppelinMonitoringConfigurationDescription = exports.DeployAsApplicationConfigurationDescription = exports.S3ContentBaseLocationDescription = exports.CustomArtifactConfigurationDescription = void 0;
exports.TagResourceResponse = exports.TagResourceRequest = exports.StopApplicationResponse = exports.StopApplicationRequest = exports.StartApplicationResponse = exports.StartApplicationRequest = exports.RunConfiguration = exports.SqlRunConfiguration = exports.RollbackApplicationResponse = exports.RollbackApplicationRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListApplicationVersionsResponse = exports.ListApplicationVersionsRequest = exports.ListApplicationSnapshotsResponse = exports.ListApplicationSnapshotsRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.UnableToDetectSchemaException = exports.ServiceUnavailableException = exports.ResourceProvisionedThroughputExceededException = exports.DiscoverInputSchemaResponse = exports.DiscoverInputSchemaRequest = exports.S3Configuration = exports.DescribeApplicationVersionResponse = exports.DescribeApplicationVersionRequest = exports.DescribeApplicationSnapshotResponse = exports.SnapshotDetails = exports.SnapshotStatus = exports.DescribeApplicationSnapshotRequest = exports.DescribeApplicationResponse = exports.DescribeApplicationRequest = exports.DeleteApplicationVpcConfigurationResponse = exports.DeleteApplicationVpcConfigurationRequest = exports.DeleteApplicationSnapshotResponse = exports.DeleteApplicationSnapshotRequest = exports.DeleteApplicationReferenceDataSourceResponse = exports.DeleteApplicationReferenceDataSourceRequest = exports.DeleteApplicationOutputResponse = exports.DeleteApplicationOutputRequest = exports.DeleteApplicationInputProcessingConfigurationResponse = exports.DeleteApplicationInputProcessingConfigurationRequest = exports.DeleteApplicationCloudWatchLoggingOptionResponse = exports.DeleteApplicationCloudWatchLoggingOptionRequest = exports.DeleteApplicationResponse = exports.DeleteApplicationRequest = exports.UnsupportedOperationException = exports.CreateApplicationSnapshotResponse = exports.CreateApplicationSnapshotRequest = exports.CreateApplicationPresignedUrlResponse = void 0;
exports.UpdateApplicationMaintenanceConfigurationResponse = exports.UpdateApplicationMaintenanceConfigurationRequest = exports.UpdateApplicationResponse = exports.UpdateApplicationRequest = exports.RunConfigurationUpdate = exports.UntagResourceResponse = exports.UntagResourceRequest = void 0;
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
var CloudWatchLoggingOptionDescription;
(function (CloudWatchLoggingOptionDescription) {
    /**
     * @internal
     */
    CloudWatchLoggingOptionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLoggingOptionDescription = exports.CloudWatchLoggingOptionDescription || (exports.CloudWatchLoggingOptionDescription = {}));
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
var InvalidApplicationConfigurationException;
(function (InvalidApplicationConfigurationException) {
    /**
     * @internal
     */
    InvalidApplicationConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApplicationConfigurationException = exports.InvalidApplicationConfigurationException || (exports.InvalidApplicationConfigurationException = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
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
var AddApplicationReferenceDataSourceResponse;
(function (AddApplicationReferenceDataSourceResponse) {
    /**
     * @internal
     */
    AddApplicationReferenceDataSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationReferenceDataSourceResponse = exports.AddApplicationReferenceDataSourceResponse || (exports.AddApplicationReferenceDataSourceResponse = {}));
var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfiguration = exports.VpcConfiguration || (exports.VpcConfiguration = {}));
var AddApplicationVpcConfigurationRequest;
(function (AddApplicationVpcConfigurationRequest) {
    /**
     * @internal
     */
    AddApplicationVpcConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationVpcConfigurationRequest = exports.AddApplicationVpcConfigurationRequest || (exports.AddApplicationVpcConfigurationRequest = {}));
var VpcConfigurationDescription;
(function (VpcConfigurationDescription) {
    /**
     * @internal
     */
    VpcConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigurationDescription = exports.VpcConfigurationDescription || (exports.VpcConfigurationDescription = {}));
var AddApplicationVpcConfigurationResponse;
(function (AddApplicationVpcConfigurationResponse) {
    /**
     * @internal
     */
    AddApplicationVpcConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddApplicationVpcConfigurationResponse = exports.AddApplicationVpcConfigurationResponse || (exports.AddApplicationVpcConfigurationResponse = {}));
var S3ContentLocation;
(function (S3ContentLocation) {
    /**
     * @internal
     */
    S3ContentLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ContentLocation = exports.S3ContentLocation || (exports.S3ContentLocation = {}));
var CodeContent;
(function (CodeContent) {
    /**
     * @internal
     */
    CodeContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeContent = exports.CodeContent || (exports.CodeContent = {}));
var CodeContentType;
(function (CodeContentType) {
    CodeContentType["PLAINTEXT"] = "PLAINTEXT";
    CodeContentType["ZIPFILE"] = "ZIPFILE";
})(CodeContentType = exports.CodeContentType || (exports.CodeContentType = {}));
var ApplicationCodeConfiguration;
(function (ApplicationCodeConfiguration) {
    /**
     * @internal
     */
    ApplicationCodeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationCodeConfiguration = exports.ApplicationCodeConfiguration || (exports.ApplicationCodeConfiguration = {}));
var S3ApplicationCodeLocationDescription;
(function (S3ApplicationCodeLocationDescription) {
    /**
     * @internal
     */
    S3ApplicationCodeLocationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ApplicationCodeLocationDescription = exports.S3ApplicationCodeLocationDescription || (exports.S3ApplicationCodeLocationDescription = {}));
var CodeContentDescription;
(function (CodeContentDescription) {
    /**
     * @internal
     */
    CodeContentDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeContentDescription = exports.CodeContentDescription || (exports.CodeContentDescription = {}));
var ApplicationCodeConfigurationDescription;
(function (ApplicationCodeConfigurationDescription) {
    /**
     * @internal
     */
    ApplicationCodeConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationCodeConfigurationDescription = exports.ApplicationCodeConfigurationDescription || (exports.ApplicationCodeConfigurationDescription = {}));
var S3ContentLocationUpdate;
(function (S3ContentLocationUpdate) {
    /**
     * @internal
     */
    S3ContentLocationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ContentLocationUpdate = exports.S3ContentLocationUpdate || (exports.S3ContentLocationUpdate = {}));
var CodeContentUpdate;
(function (CodeContentUpdate) {
    /**
     * @internal
     */
    CodeContentUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeContentUpdate = exports.CodeContentUpdate || (exports.CodeContentUpdate = {}));
var ApplicationCodeConfigurationUpdate;
(function (ApplicationCodeConfigurationUpdate) {
    /**
     * @internal
     */
    ApplicationCodeConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationCodeConfigurationUpdate = exports.ApplicationCodeConfigurationUpdate || (exports.ApplicationCodeConfigurationUpdate = {}));
var ApplicationSnapshotConfiguration;
(function (ApplicationSnapshotConfiguration) {
    /**
     * @internal
     */
    ApplicationSnapshotConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSnapshotConfiguration = exports.ApplicationSnapshotConfiguration || (exports.ApplicationSnapshotConfiguration = {}));
var PropertyGroup;
(function (PropertyGroup) {
    /**
     * @internal
     */
    PropertyGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyGroup = exports.PropertyGroup || (exports.PropertyGroup = {}));
var EnvironmentProperties;
(function (EnvironmentProperties) {
    /**
     * @internal
     */
    EnvironmentProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentProperties = exports.EnvironmentProperties || (exports.EnvironmentProperties = {}));
var ConfigurationType;
(function (ConfigurationType) {
    ConfigurationType["CUSTOM"] = "CUSTOM";
    ConfigurationType["DEFAULT"] = "DEFAULT";
})(ConfigurationType = exports.ConfigurationType || (exports.ConfigurationType = {}));
var CheckpointConfiguration;
(function (CheckpointConfiguration) {
    /**
     * @internal
     */
    CheckpointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckpointConfiguration = exports.CheckpointConfiguration || (exports.CheckpointConfiguration = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var MetricsLevel;
(function (MetricsLevel) {
    MetricsLevel["APPLICATION"] = "APPLICATION";
    MetricsLevel["OPERATOR"] = "OPERATOR";
    MetricsLevel["PARALLELISM"] = "PARALLELISM";
    MetricsLevel["TASK"] = "TASK";
})(MetricsLevel = exports.MetricsLevel || (exports.MetricsLevel = {}));
var MonitoringConfiguration;
(function (MonitoringConfiguration) {
    /**
     * @internal
     */
    MonitoringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringConfiguration = exports.MonitoringConfiguration || (exports.MonitoringConfiguration = {}));
var ParallelismConfiguration;
(function (ParallelismConfiguration) {
    /**
     * @internal
     */
    ParallelismConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelismConfiguration = exports.ParallelismConfiguration || (exports.ParallelismConfiguration = {}));
var FlinkApplicationConfiguration;
(function (FlinkApplicationConfiguration) {
    /**
     * @internal
     */
    FlinkApplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlinkApplicationConfiguration = exports.FlinkApplicationConfiguration || (exports.FlinkApplicationConfiguration = {}));
var SqlApplicationConfiguration;
(function (SqlApplicationConfiguration) {
    /**
     * @internal
     */
    SqlApplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlApplicationConfiguration = exports.SqlApplicationConfiguration || (exports.SqlApplicationConfiguration = {}));
var GlueDataCatalogConfiguration;
(function (GlueDataCatalogConfiguration) {
    /**
     * @internal
     */
    GlueDataCatalogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueDataCatalogConfiguration = exports.GlueDataCatalogConfiguration || (exports.GlueDataCatalogConfiguration = {}));
var CatalogConfiguration;
(function (CatalogConfiguration) {
    /**
     * @internal
     */
    CatalogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogConfiguration = exports.CatalogConfiguration || (exports.CatalogConfiguration = {}));
var ArtifactType;
(function (ArtifactType) {
    ArtifactType["DEPENDENCY_JAR"] = "DEPENDENCY_JAR";
    ArtifactType["UDF"] = "UDF";
})(ArtifactType = exports.ArtifactType || (exports.ArtifactType = {}));
var MavenReference;
(function (MavenReference) {
    /**
     * @internal
     */
    MavenReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MavenReference = exports.MavenReference || (exports.MavenReference = {}));
var CustomArtifactConfiguration;
(function (CustomArtifactConfiguration) {
    /**
     * @internal
     */
    CustomArtifactConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomArtifactConfiguration = exports.CustomArtifactConfiguration || (exports.CustomArtifactConfiguration = {}));
var S3ContentBaseLocation;
(function (S3ContentBaseLocation) {
    /**
     * @internal
     */
    S3ContentBaseLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ContentBaseLocation = exports.S3ContentBaseLocation || (exports.S3ContentBaseLocation = {}));
var DeployAsApplicationConfiguration;
(function (DeployAsApplicationConfiguration) {
    /**
     * @internal
     */
    DeployAsApplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeployAsApplicationConfiguration = exports.DeployAsApplicationConfiguration || (exports.DeployAsApplicationConfiguration = {}));
var ZeppelinMonitoringConfiguration;
(function (ZeppelinMonitoringConfiguration) {
    /**
     * @internal
     */
    ZeppelinMonitoringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinMonitoringConfiguration = exports.ZeppelinMonitoringConfiguration || (exports.ZeppelinMonitoringConfiguration = {}));
var ZeppelinApplicationConfiguration;
(function (ZeppelinApplicationConfiguration) {
    /**
     * @internal
     */
    ZeppelinApplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinApplicationConfiguration = exports.ZeppelinApplicationConfiguration || (exports.ZeppelinApplicationConfiguration = {}));
var ApplicationConfiguration;
(function (ApplicationConfiguration) {
    /**
     * @internal
     */
    ApplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationConfiguration = exports.ApplicationConfiguration || (exports.ApplicationConfiguration = {}));
var ApplicationSnapshotConfigurationDescription;
(function (ApplicationSnapshotConfigurationDescription) {
    /**
     * @internal
     */
    ApplicationSnapshotConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSnapshotConfigurationDescription = exports.ApplicationSnapshotConfigurationDescription || (exports.ApplicationSnapshotConfigurationDescription = {}));
var EnvironmentPropertyDescriptions;
(function (EnvironmentPropertyDescriptions) {
    /**
     * @internal
     */
    EnvironmentPropertyDescriptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentPropertyDescriptions = exports.EnvironmentPropertyDescriptions || (exports.EnvironmentPropertyDescriptions = {}));
var CheckpointConfigurationDescription;
(function (CheckpointConfigurationDescription) {
    /**
     * @internal
     */
    CheckpointConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckpointConfigurationDescription = exports.CheckpointConfigurationDescription || (exports.CheckpointConfigurationDescription = {}));
var MonitoringConfigurationDescription;
(function (MonitoringConfigurationDescription) {
    /**
     * @internal
     */
    MonitoringConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringConfigurationDescription = exports.MonitoringConfigurationDescription || (exports.MonitoringConfigurationDescription = {}));
var ParallelismConfigurationDescription;
(function (ParallelismConfigurationDescription) {
    /**
     * @internal
     */
    ParallelismConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelismConfigurationDescription = exports.ParallelismConfigurationDescription || (exports.ParallelismConfigurationDescription = {}));
var FlinkApplicationConfigurationDescription;
(function (FlinkApplicationConfigurationDescription) {
    /**
     * @internal
     */
    FlinkApplicationConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlinkApplicationConfigurationDescription = exports.FlinkApplicationConfigurationDescription || (exports.FlinkApplicationConfigurationDescription = {}));
var ApplicationRestoreType;
(function (ApplicationRestoreType) {
    ApplicationRestoreType["RESTORE_FROM_CUSTOM_SNAPSHOT"] = "RESTORE_FROM_CUSTOM_SNAPSHOT";
    ApplicationRestoreType["RESTORE_FROM_LATEST_SNAPSHOT"] = "RESTORE_FROM_LATEST_SNAPSHOT";
    ApplicationRestoreType["SKIP_RESTORE_FROM_SNAPSHOT"] = "SKIP_RESTORE_FROM_SNAPSHOT";
})(ApplicationRestoreType = exports.ApplicationRestoreType || (exports.ApplicationRestoreType = {}));
var ApplicationRestoreConfiguration;
(function (ApplicationRestoreConfiguration) {
    /**
     * @internal
     */
    ApplicationRestoreConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationRestoreConfiguration = exports.ApplicationRestoreConfiguration || (exports.ApplicationRestoreConfiguration = {}));
var FlinkRunConfiguration;
(function (FlinkRunConfiguration) {
    /**
     * @internal
     */
    FlinkRunConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlinkRunConfiguration = exports.FlinkRunConfiguration || (exports.FlinkRunConfiguration = {}));
var RunConfigurationDescription;
(function (RunConfigurationDescription) {
    /**
     * @internal
     */
    RunConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunConfigurationDescription = exports.RunConfigurationDescription || (exports.RunConfigurationDescription = {}));
var SqlApplicationConfigurationDescription;
(function (SqlApplicationConfigurationDescription) {
    /**
     * @internal
     */
    SqlApplicationConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlApplicationConfigurationDescription = exports.SqlApplicationConfigurationDescription || (exports.SqlApplicationConfigurationDescription = {}));
var GlueDataCatalogConfigurationDescription;
(function (GlueDataCatalogConfigurationDescription) {
    /**
     * @internal
     */
    GlueDataCatalogConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueDataCatalogConfigurationDescription = exports.GlueDataCatalogConfigurationDescription || (exports.GlueDataCatalogConfigurationDescription = {}));
var CatalogConfigurationDescription;
(function (CatalogConfigurationDescription) {
    /**
     * @internal
     */
    CatalogConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogConfigurationDescription = exports.CatalogConfigurationDescription || (exports.CatalogConfigurationDescription = {}));
var CustomArtifactConfigurationDescription;
(function (CustomArtifactConfigurationDescription) {
    /**
     * @internal
     */
    CustomArtifactConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomArtifactConfigurationDescription = exports.CustomArtifactConfigurationDescription || (exports.CustomArtifactConfigurationDescription = {}));
var S3ContentBaseLocationDescription;
(function (S3ContentBaseLocationDescription) {
    /**
     * @internal
     */
    S3ContentBaseLocationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ContentBaseLocationDescription = exports.S3ContentBaseLocationDescription || (exports.S3ContentBaseLocationDescription = {}));
var DeployAsApplicationConfigurationDescription;
(function (DeployAsApplicationConfigurationDescription) {
    /**
     * @internal
     */
    DeployAsApplicationConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeployAsApplicationConfigurationDescription = exports.DeployAsApplicationConfigurationDescription || (exports.DeployAsApplicationConfigurationDescription = {}));
var ZeppelinMonitoringConfigurationDescription;
(function (ZeppelinMonitoringConfigurationDescription) {
    /**
     * @internal
     */
    ZeppelinMonitoringConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinMonitoringConfigurationDescription = exports.ZeppelinMonitoringConfigurationDescription || (exports.ZeppelinMonitoringConfigurationDescription = {}));
var ZeppelinApplicationConfigurationDescription;
(function (ZeppelinApplicationConfigurationDescription) {
    /**
     * @internal
     */
    ZeppelinApplicationConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinApplicationConfigurationDescription = exports.ZeppelinApplicationConfigurationDescription || (exports.ZeppelinApplicationConfigurationDescription = {}));
var ApplicationConfigurationDescription;
(function (ApplicationConfigurationDescription) {
    /**
     * @internal
     */
    ApplicationConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationConfigurationDescription = exports.ApplicationConfigurationDescription || (exports.ApplicationConfigurationDescription = {}));
var ApplicationSnapshotConfigurationUpdate;
(function (ApplicationSnapshotConfigurationUpdate) {
    /**
     * @internal
     */
    ApplicationSnapshotConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSnapshotConfigurationUpdate = exports.ApplicationSnapshotConfigurationUpdate || (exports.ApplicationSnapshotConfigurationUpdate = {}));
var EnvironmentPropertyUpdates;
(function (EnvironmentPropertyUpdates) {
    /**
     * @internal
     */
    EnvironmentPropertyUpdates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentPropertyUpdates = exports.EnvironmentPropertyUpdates || (exports.EnvironmentPropertyUpdates = {}));
var CheckpointConfigurationUpdate;
(function (CheckpointConfigurationUpdate) {
    /**
     * @internal
     */
    CheckpointConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckpointConfigurationUpdate = exports.CheckpointConfigurationUpdate || (exports.CheckpointConfigurationUpdate = {}));
var MonitoringConfigurationUpdate;
(function (MonitoringConfigurationUpdate) {
    /**
     * @internal
     */
    MonitoringConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringConfigurationUpdate = exports.MonitoringConfigurationUpdate || (exports.MonitoringConfigurationUpdate = {}));
var ParallelismConfigurationUpdate;
(function (ParallelismConfigurationUpdate) {
    /**
     * @internal
     */
    ParallelismConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParallelismConfigurationUpdate = exports.ParallelismConfigurationUpdate || (exports.ParallelismConfigurationUpdate = {}));
var FlinkApplicationConfigurationUpdate;
(function (FlinkApplicationConfigurationUpdate) {
    /**
     * @internal
     */
    FlinkApplicationConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlinkApplicationConfigurationUpdate = exports.FlinkApplicationConfigurationUpdate || (exports.FlinkApplicationConfigurationUpdate = {}));
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
var SqlApplicationConfigurationUpdate;
(function (SqlApplicationConfigurationUpdate) {
    /**
     * @internal
     */
    SqlApplicationConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlApplicationConfigurationUpdate = exports.SqlApplicationConfigurationUpdate || (exports.SqlApplicationConfigurationUpdate = {}));
var VpcConfigurationUpdate;
(function (VpcConfigurationUpdate) {
    /**
     * @internal
     */
    VpcConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigurationUpdate = exports.VpcConfigurationUpdate || (exports.VpcConfigurationUpdate = {}));
var GlueDataCatalogConfigurationUpdate;
(function (GlueDataCatalogConfigurationUpdate) {
    /**
     * @internal
     */
    GlueDataCatalogConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueDataCatalogConfigurationUpdate = exports.GlueDataCatalogConfigurationUpdate || (exports.GlueDataCatalogConfigurationUpdate = {}));
var CatalogConfigurationUpdate;
(function (CatalogConfigurationUpdate) {
    /**
     * @internal
     */
    CatalogConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogConfigurationUpdate = exports.CatalogConfigurationUpdate || (exports.CatalogConfigurationUpdate = {}));
var S3ContentBaseLocationUpdate;
(function (S3ContentBaseLocationUpdate) {
    /**
     * @internal
     */
    S3ContentBaseLocationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ContentBaseLocationUpdate = exports.S3ContentBaseLocationUpdate || (exports.S3ContentBaseLocationUpdate = {}));
var DeployAsApplicationConfigurationUpdate;
(function (DeployAsApplicationConfigurationUpdate) {
    /**
     * @internal
     */
    DeployAsApplicationConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeployAsApplicationConfigurationUpdate = exports.DeployAsApplicationConfigurationUpdate || (exports.DeployAsApplicationConfigurationUpdate = {}));
var ZeppelinMonitoringConfigurationUpdate;
(function (ZeppelinMonitoringConfigurationUpdate) {
    /**
     * @internal
     */
    ZeppelinMonitoringConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinMonitoringConfigurationUpdate = exports.ZeppelinMonitoringConfigurationUpdate || (exports.ZeppelinMonitoringConfigurationUpdate = {}));
var ZeppelinApplicationConfigurationUpdate;
(function (ZeppelinApplicationConfigurationUpdate) {
    /**
     * @internal
     */
    ZeppelinApplicationConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZeppelinApplicationConfigurationUpdate = exports.ZeppelinApplicationConfigurationUpdate || (exports.ZeppelinApplicationConfigurationUpdate = {}));
var ApplicationConfigurationUpdate;
(function (ApplicationConfigurationUpdate) {
    /**
     * @internal
     */
    ApplicationConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationConfigurationUpdate = exports.ApplicationConfigurationUpdate || (exports.ApplicationConfigurationUpdate = {}));
var ApplicationMaintenanceConfigurationDescription;
(function (ApplicationMaintenanceConfigurationDescription) {
    /**
     * @internal
     */
    ApplicationMaintenanceConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationMaintenanceConfigurationDescription = exports.ApplicationMaintenanceConfigurationDescription || (exports.ApplicationMaintenanceConfigurationDescription = {}));
var ApplicationMode;
(function (ApplicationMode) {
    ApplicationMode["INTERACTIVE"] = "INTERACTIVE";
    ApplicationMode["STREAMING"] = "STREAMING";
})(ApplicationMode = exports.ApplicationMode || (exports.ApplicationMode = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["AUTOSCALING"] = "AUTOSCALING";
    ApplicationStatus["DELETING"] = "DELETING";
    ApplicationStatus["FORCE_STOPPING"] = "FORCE_STOPPING";
    ApplicationStatus["MAINTENANCE"] = "MAINTENANCE";
    ApplicationStatus["READY"] = "READY";
    ApplicationStatus["ROLLED_BACK"] = "ROLLED_BACK";
    ApplicationStatus["ROLLING_BACK"] = "ROLLING_BACK";
    ApplicationStatus["RUNNING"] = "RUNNING";
    ApplicationStatus["STARTING"] = "STARTING";
    ApplicationStatus["STOPPING"] = "STOPPING";
    ApplicationStatus["UPDATING"] = "UPDATING";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
var RuntimeEnvironment;
(function (RuntimeEnvironment) {
    RuntimeEnvironment["FLINK_1_11"] = "FLINK-1_11";
    RuntimeEnvironment["FLINK_1_6"] = "FLINK-1_6";
    RuntimeEnvironment["FLINK_1_8"] = "FLINK-1_8";
    RuntimeEnvironment["SQL_1_0"] = "SQL-1_0";
    RuntimeEnvironment["ZEPPELIN_FLINK_1_0"] = "ZEPPELIN-FLINK-1_0";
})(RuntimeEnvironment = exports.RuntimeEnvironment || (exports.RuntimeEnvironment = {}));
var ApplicationDetail;
(function (ApplicationDetail) {
    /**
     * @internal
     */
    ApplicationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDetail = exports.ApplicationDetail || (exports.ApplicationDetail = {}));
var ApplicationMaintenanceConfigurationUpdate;
(function (ApplicationMaintenanceConfigurationUpdate) {
    /**
     * @internal
     */
    ApplicationMaintenanceConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationMaintenanceConfigurationUpdate = exports.ApplicationMaintenanceConfigurationUpdate || (exports.ApplicationMaintenanceConfigurationUpdate = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    /**
     * @internal
     */
    ApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var ApplicationVersionSummary;
(function (ApplicationVersionSummary) {
    /**
     * @internal
     */
    ApplicationVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationVersionSummary = exports.ApplicationVersionSummary || (exports.ApplicationVersionSummary = {}));
var CloudWatchLoggingOptionUpdate;
(function (CloudWatchLoggingOptionUpdate) {
    /**
     * @internal
     */
    CloudWatchLoggingOptionUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLoggingOptionUpdate = exports.CloudWatchLoggingOptionUpdate || (exports.CloudWatchLoggingOptionUpdate = {}));
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
var UrlType;
(function (UrlType) {
    UrlType["FLINK_DASHBOARD_URL"] = "FLINK_DASHBOARD_URL";
    UrlType["ZEPPELIN_UI_URL"] = "ZEPPELIN_UI_URL";
})(UrlType = exports.UrlType || (exports.UrlType = {}));
var CreateApplicationPresignedUrlRequest;
(function (CreateApplicationPresignedUrlRequest) {
    /**
     * @internal
     */
    CreateApplicationPresignedUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationPresignedUrlRequest = exports.CreateApplicationPresignedUrlRequest || (exports.CreateApplicationPresignedUrlRequest = {}));
var CreateApplicationPresignedUrlResponse;
(function (CreateApplicationPresignedUrlResponse) {
    /**
     * @internal
     */
    CreateApplicationPresignedUrlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationPresignedUrlResponse = exports.CreateApplicationPresignedUrlResponse || (exports.CreateApplicationPresignedUrlResponse = {}));
var CreateApplicationSnapshotRequest;
(function (CreateApplicationSnapshotRequest) {
    /**
     * @internal
     */
    CreateApplicationSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationSnapshotRequest = exports.CreateApplicationSnapshotRequest || (exports.CreateApplicationSnapshotRequest = {}));
var CreateApplicationSnapshotResponse;
(function (CreateApplicationSnapshotResponse) {
    /**
     * @internal
     */
    CreateApplicationSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationSnapshotResponse = exports.CreateApplicationSnapshotResponse || (exports.CreateApplicationSnapshotResponse = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
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
var DeleteApplicationSnapshotRequest;
(function (DeleteApplicationSnapshotRequest) {
    /**
     * @internal
     */
    DeleteApplicationSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationSnapshotRequest = exports.DeleteApplicationSnapshotRequest || (exports.DeleteApplicationSnapshotRequest = {}));
var DeleteApplicationSnapshotResponse;
(function (DeleteApplicationSnapshotResponse) {
    /**
     * @internal
     */
    DeleteApplicationSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationSnapshotResponse = exports.DeleteApplicationSnapshotResponse || (exports.DeleteApplicationSnapshotResponse = {}));
var DeleteApplicationVpcConfigurationRequest;
(function (DeleteApplicationVpcConfigurationRequest) {
    /**
     * @internal
     */
    DeleteApplicationVpcConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationVpcConfigurationRequest = exports.DeleteApplicationVpcConfigurationRequest || (exports.DeleteApplicationVpcConfigurationRequest = {}));
var DeleteApplicationVpcConfigurationResponse;
(function (DeleteApplicationVpcConfigurationResponse) {
    /**
     * @internal
     */
    DeleteApplicationVpcConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationVpcConfigurationResponse = exports.DeleteApplicationVpcConfigurationResponse || (exports.DeleteApplicationVpcConfigurationResponse = {}));
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
var DescribeApplicationSnapshotRequest;
(function (DescribeApplicationSnapshotRequest) {
    /**
     * @internal
     */
    DescribeApplicationSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationSnapshotRequest = exports.DescribeApplicationSnapshotRequest || (exports.DescribeApplicationSnapshotRequest = {}));
var SnapshotStatus;
(function (SnapshotStatus) {
    SnapshotStatus["CREATING"] = "CREATING";
    SnapshotStatus["DELETING"] = "DELETING";
    SnapshotStatus["FAILED"] = "FAILED";
    SnapshotStatus["READY"] = "READY";
})(SnapshotStatus = exports.SnapshotStatus || (exports.SnapshotStatus = {}));
var SnapshotDetails;
(function (SnapshotDetails) {
    /**
     * @internal
     */
    SnapshotDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotDetails = exports.SnapshotDetails || (exports.SnapshotDetails = {}));
var DescribeApplicationSnapshotResponse;
(function (DescribeApplicationSnapshotResponse) {
    /**
     * @internal
     */
    DescribeApplicationSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationSnapshotResponse = exports.DescribeApplicationSnapshotResponse || (exports.DescribeApplicationSnapshotResponse = {}));
var DescribeApplicationVersionRequest;
(function (DescribeApplicationVersionRequest) {
    /**
     * @internal
     */
    DescribeApplicationVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationVersionRequest = exports.DescribeApplicationVersionRequest || (exports.DescribeApplicationVersionRequest = {}));
var DescribeApplicationVersionResponse;
(function (DescribeApplicationVersionResponse) {
    /**
     * @internal
     */
    DescribeApplicationVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationVersionResponse = exports.DescribeApplicationVersionResponse || (exports.DescribeApplicationVersionResponse = {}));
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
var ListApplicationSnapshotsRequest;
(function (ListApplicationSnapshotsRequest) {
    /**
     * @internal
     */
    ListApplicationSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationSnapshotsRequest = exports.ListApplicationSnapshotsRequest || (exports.ListApplicationSnapshotsRequest = {}));
var ListApplicationSnapshotsResponse;
(function (ListApplicationSnapshotsResponse) {
    /**
     * @internal
     */
    ListApplicationSnapshotsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationSnapshotsResponse = exports.ListApplicationSnapshotsResponse || (exports.ListApplicationSnapshotsResponse = {}));
var ListApplicationVersionsRequest;
(function (ListApplicationVersionsRequest) {
    /**
     * @internal
     */
    ListApplicationVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationVersionsRequest = exports.ListApplicationVersionsRequest || (exports.ListApplicationVersionsRequest = {}));
var ListApplicationVersionsResponse;
(function (ListApplicationVersionsResponse) {
    /**
     * @internal
     */
    ListApplicationVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationVersionsResponse = exports.ListApplicationVersionsResponse || (exports.ListApplicationVersionsResponse = {}));
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
var RollbackApplicationRequest;
(function (RollbackApplicationRequest) {
    /**
     * @internal
     */
    RollbackApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackApplicationRequest = exports.RollbackApplicationRequest || (exports.RollbackApplicationRequest = {}));
var RollbackApplicationResponse;
(function (RollbackApplicationResponse) {
    /**
     * @internal
     */
    RollbackApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackApplicationResponse = exports.RollbackApplicationResponse || (exports.RollbackApplicationResponse = {}));
var SqlRunConfiguration;
(function (SqlRunConfiguration) {
    /**
     * @internal
     */
    SqlRunConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlRunConfiguration = exports.SqlRunConfiguration || (exports.SqlRunConfiguration = {}));
var RunConfiguration;
(function (RunConfiguration) {
    /**
     * @internal
     */
    RunConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunConfiguration = exports.RunConfiguration || (exports.RunConfiguration = {}));
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
var RunConfigurationUpdate;
(function (RunConfigurationUpdate) {
    /**
     * @internal
     */
    RunConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunConfigurationUpdate = exports.RunConfigurationUpdate || (exports.RunConfigurationUpdate = {}));
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
var UpdateApplicationMaintenanceConfigurationRequest;
(function (UpdateApplicationMaintenanceConfigurationRequest) {
    /**
     * @internal
     */
    UpdateApplicationMaintenanceConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationMaintenanceConfigurationRequest = exports.UpdateApplicationMaintenanceConfigurationRequest || (exports.UpdateApplicationMaintenanceConfigurationRequest = {}));
var UpdateApplicationMaintenanceConfigurationResponse;
(function (UpdateApplicationMaintenanceConfigurationResponse) {
    /**
     * @internal
     */
    UpdateApplicationMaintenanceConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationMaintenanceConfigurationResponse = exports.UpdateApplicationMaintenanceConfigurationResponse || (exports.UpdateApplicationMaintenanceConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map