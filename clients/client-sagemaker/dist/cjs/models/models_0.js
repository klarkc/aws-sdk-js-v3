"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmValidationSpecification = exports.AlgorithmValidationProfile = exports.TransformJobDefinition = exports.TransformResources = exports.TransformInstanceType = exports.TransformOutput = exports.AssemblyType = exports.TransformInput = exports.SplitType = exports.TransformDataSource = exports.TransformS3DataSource = exports.BatchStrategy = exports.TrainingJobDefinition = exports.StoppingCondition = exports.ResourceConfig = exports.TrainingInstanceType = exports.OutputDataConfig = exports.Channel = exports.ShuffleConfig = exports.RecordWrapper = exports.DataSource = exports.S3DataSource = exports.S3DataType = exports.S3DataDistribution = exports.FileSystemDataSource = exports.FileSystemType = exports.FileSystemAccessMode = exports.CompressionType = exports.AlgorithmSummary = exports.AlgorithmStatusDetails = exports.AlgorithmStatusItem = exports.DetailedAlgorithmStatus = exports.AlgorithmStatus = exports.AlgorithmSpecification = exports.TrainingInputMode = exports.MetricDefinition = exports.AlgorithmSortBy = exports.Alarm = exports.AgentVersion = exports.AddTagsOutput = exports.AddTagsInput = exports.Tag = exports.ResourceNotFound = exports.ResourceLimitExceeded = exports.AddAssociationResponse = exports.AddAssociationRequest = exports.AssociationEdgeType = exports.ActionSummary = exports.ActionStatus = exports.ActionSource = void 0;
exports.AutoMLJobSummary = exports.AutoMLPartialFailureReason = exports.AutoMLJobStatus = exports.AutoMLJobSecondaryStatus = exports.AutoMLJobObjective = exports.AutoMLJobConfig = exports.AutoMLSecurityConfig = exports.VpcConfig = exports.AutoMLJobCompletionCriteria = exports.AutoMLJobArtifacts = exports.AutoMLChannel = exports.AutoMLDataSource = exports.AutoMLS3DataSource = exports.AutoMLS3DataType = exports.AutoMLCandidate = exports.ObjectiveStatus = exports.AutoMLContainerDefinition = exports.FinalAutoMLJobObjectiveMetric = exports.AutoMLJobObjectiveType = exports.AutoMLMetricEnum = exports.AutoMLCandidateStep = exports.CandidateStepType = exports.CandidateStatus = exports.CandidateProperties = exports.CandidateArtifactLocations = exports.AuthMode = exports.AthenaDatasetDefinition = exports.AthenaResultFormat = exports.AthenaResultCompressionType = exports.AssociationSummary = exports.UserContext = exports.AssociateTrialComponentResponse = exports.AssociateTrialComponentRequest = exports.ArtifactSummary = exports.ArtifactSource = exports.ArtifactSourceType = exports.ArtifactSourceIdType = exports.AppSpecification = exports.AppSortKey = exports.AppNetworkAccessType = exports.AppInstanceType = exports.AppImageConfigSortKey = exports.AppImageConfigDetails = exports.KernelGatewayImageConfig = exports.KernelSpec = exports.FileSystemConfig = exports.AppDetails = exports.AppStatus = exports.AppType = exports.AnnotationConsolidationConfig = void 0;
exports.HyperParameterScalingType = exports.ContextSummary = exports.ContextSource = exports.ContentClassifier = exports.ContainerDefinition = exports.MultiModelConfig = exports.ModelCacheSetting = exports.ContainerMode = exports.ImageConfig = exports.RepositoryAuthConfig = exports.RepositoryAccessMode = exports.ConflictException = exports.ConditionStepMetadata = exports.ConditionOutcome = exports.CompilationJobSummary = exports.TargetPlatformOs = exports.TargetPlatformArch = exports.TargetPlatformAccelerator = exports.TargetDevice = exports.CompilationJobStatus = exports.CollectionConfiguration = exports.CognitoMemberDefinition = exports.CognitoConfig = exports.CodeRepositorySummary = exports.GitConfig = exports.CodeRepositorySortOrder = exports.CodeRepositorySortBy = exports.CheckpointConfig = exports.ChannelSpecification = exports.CategoricalParameterRangeSpecification = exports.CategoricalParameterRange = exports.CaptureStatus = exports.CaptureOption = exports.CaptureMode = exports.CaptureContentTypeHeader = exports.CandidateSortBy = exports.CacheHitResult = exports.BooleanOperator = exports.BlueGreenUpdatePolicy = exports.TrafficRoutingConfig = exports.TrafficRoutingConfigType = exports.CapacitySize = exports.CapacitySizeType = exports.Bias = exports.MetricsSource = exports.AwsManagedHumanLoopRequestSource = exports.AutoRollbackConfig = exports.AutoMLSortOrder = exports.AutoMLSortBy = exports.AutoMLOutputDataConfig = void 0;
exports.MonitoringOutput = exports.MonitoringS3Output = exports.ProcessingS3UploadMode = exports.DataQualityJobInput = exports.EndpointInput = exports.ProcessingS3InputMode = exports.ProcessingS3DataDistributionType = exports.DataQualityBaselineConfig = exports.MonitoringStatisticsResource = exports.MonitoringConstraintsResource = exports.DataQualityAppSpecification = exports.CreateContextResponse = exports.CreateContextRequest = exports.CreateCompilationJobResponse = exports.CreateCompilationJobRequest = exports.OutputConfig = exports.TargetPlatform = exports.InputConfig = exports.Framework = exports.CreateCodeRepositoryOutput = exports.CreateCodeRepositoryInput = exports.CreateAutoMLJobResponse = exports.CreateAutoMLJobRequest = exports.ProblemType = exports.ModelDeployConfig = exports.CreateArtifactResponse = exports.CreateArtifactRequest = exports.CreateAppImageConfigResponse = exports.CreateAppImageConfigRequest = exports.ResourceInUse = exports.CreateAppResponse = exports.CreateAppRequest = exports.ResourceSpec = exports.CreateAlgorithmOutput = exports.CreateAlgorithmInput = exports.TrainingSpecification = exports.HyperParameterTuningJobObjective = exports.HyperParameterTuningJobObjectiveType = exports.HyperParameterSpecification = exports.ParameterType = exports.ParameterRange = exports.IntegerParameterRangeSpecification = exports.InferenceSpecification = exports.ProductionVariantInstanceType = exports.ModelPackageContainerDefinition = exports.CreateActionResponse = exports.CreateActionRequest = exports.MetadataProperties = exports.ContinuousParameterRangeSpecification = exports.ContinuousParameterRange = void 0;
exports.CreateHumanTaskUiRequest = exports.UiTemplate = exports.CreateFlowDefinitionResponse = exports.CreateFlowDefinitionRequest = exports.FlowDefinitionOutputConfig = exports.HumanLoopRequestSource = exports.HumanLoopConfig = exports.PublicWorkforceTaskPrice = exports.USD = exports.HumanLoopActivationConfig = exports.HumanLoopActivationConditionsConfig = exports.CreateFeatureGroupResponse = exports.CreateFeatureGroupRequest = exports.OnlineStoreConfig = exports.OnlineStoreSecurityConfig = exports.OfflineStoreConfig = exports.S3StorageConfig = exports.DataCatalogConfig = exports.FeatureDefinition = exports.FeatureType = exports.CreateExperimentResponse = exports.CreateExperimentRequest = exports.CreateEndpointConfigOutput = exports.CreateEndpointConfigInput = exports.ProductionVariant = exports.ProductionVariantCoreDumpConfig = exports.ProductionVariantAcceleratorType = exports.DataCaptureConfig = exports.CreateEndpointOutput = exports.CreateEndpointInput = exports.CreateEdgePackagingJobRequest = exports.CreateDomainResponse = exports.CreateDomainRequest = exports.UserSettings = exports.TensorBoardAppSettings = exports.SharingSettings = exports.NotebookOutputOption = exports.KernelGatewayAppSettings = exports.CustomImage = exports.JupyterServerAppSettings = exports.CreateDeviceFleetRequest = exports.EdgeOutputConfig = exports.CreateDataQualityJobDefinitionResponse = exports.CreateDataQualityJobDefinitionRequest = exports.MonitoringStoppingCondition = exports.MonitoringNetworkConfig = exports.MonitoringResources = exports.MonitoringClusterConfig = exports.ProcessingInstanceType = exports.MonitoringOutputConfig = void 0;
exports.Explainability = exports.ModelApprovalStatus = exports.CreateModelExplainabilityJobDefinitionResponse = exports.CreateModelExplainabilityJobDefinitionRequest = exports.ModelExplainabilityJobInput = exports.ModelExplainabilityBaselineConfig = exports.ModelExplainabilityAppSpecification = exports.CreateModelBiasJobDefinitionResponse = exports.CreateModelBiasJobDefinitionRequest = exports.ModelBiasJobInput = exports.MonitoringGroundTruthS3Input = exports.ModelBiasBaselineConfig = exports.ModelBiasAppSpecification = exports.CreateModelOutput = exports.CreateModelInput = exports.InferenceExecutionConfig = exports.InferenceExecutionMode = exports.CreateLabelingJobResponse = exports.CreateLabelingJobRequest = exports.LabelingJobStoppingConditions = exports.LabelingJobOutputConfig = exports.LabelingJobAlgorithmsConfig = exports.LabelingJobResourceConfig = exports.LabelingJobInputConfig = exports.LabelingJobDataSource = exports.LabelingJobSnsDataSource = exports.LabelingJobS3DataSource = exports.LabelingJobDataAttributes = exports.HumanTaskConfig = exports.UiConfig = exports.CreateImageVersionResponse = exports.CreateImageVersionRequest = exports.CreateImageResponse = exports.CreateImageRequest = exports.CreateHyperParameterTuningJobResponse = exports.CreateHyperParameterTuningJobRequest = exports.HyperParameterTuningJobWarmStartConfig = exports.HyperParameterTuningJobWarmStartType = exports.ParentHyperParameterTuningJob = exports.HyperParameterTrainingJobDefinition = exports.RetryStrategy = exports.HyperParameterAlgorithmSpecification = exports.HyperParameterTuningJobConfig = exports.TuningJobCompletionCriteria = exports.TrainingJobEarlyStoppingType = exports.HyperParameterTuningJobStrategyType = exports.ResourceLimits = exports.ParameterRanges = exports.IntegerParameterRange = exports.CreateHumanTaskUiResponse = void 0;
var ActionSource;
(function (ActionSource) {
    /**
     * @internal
     */
    ActionSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionSource = exports.ActionSource || (exports.ActionSource = {}));
var ActionStatus;
(function (ActionStatus) {
    ActionStatus["COMPLETED"] = "Completed";
    ActionStatus["FAILED"] = "Failed";
    ActionStatus["IN_PROGRESS"] = "InProgress";
    ActionStatus["STOPPED"] = "Stopped";
    ActionStatus["STOPPING"] = "Stopping";
    ActionStatus["UNKNOWN"] = "Unknown";
})(ActionStatus = exports.ActionStatus || (exports.ActionStatus = {}));
var ActionSummary;
(function (ActionSummary) {
    /**
     * @internal
     */
    ActionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionSummary = exports.ActionSummary || (exports.ActionSummary = {}));
var AssociationEdgeType;
(function (AssociationEdgeType) {
    AssociationEdgeType["ASSOCIATED_WITH"] = "AssociatedWith";
    AssociationEdgeType["CONTRIBUTED_TO"] = "ContributedTo";
    AssociationEdgeType["DERIVED_FROM"] = "DerivedFrom";
    AssociationEdgeType["PRODUCED"] = "Produced";
})(AssociationEdgeType = exports.AssociationEdgeType || (exports.AssociationEdgeType = {}));
var AddAssociationRequest;
(function (AddAssociationRequest) {
    /**
     * @internal
     */
    AddAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAssociationRequest = exports.AddAssociationRequest || (exports.AddAssociationRequest = {}));
var AddAssociationResponse;
(function (AddAssociationResponse) {
    /**
     * @internal
     */
    AddAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAssociationResponse = exports.AddAssociationResponse || (exports.AddAssociationResponse = {}));
var ResourceLimitExceeded;
(function (ResourceLimitExceeded) {
    /**
     * @internal
     */
    ResourceLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceeded = exports.ResourceLimitExceeded || (exports.ResourceLimitExceeded = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var AgentVersion;
(function (AgentVersion) {
    /**
     * @internal
     */
    AgentVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentVersion = exports.AgentVersion || (exports.AgentVersion = {}));
var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var AlgorithmSortBy;
(function (AlgorithmSortBy) {
    AlgorithmSortBy["CREATION_TIME"] = "CreationTime";
    AlgorithmSortBy["NAME"] = "Name";
})(AlgorithmSortBy = exports.AlgorithmSortBy || (exports.AlgorithmSortBy = {}));
var MetricDefinition;
(function (MetricDefinition) {
    /**
     * @internal
     */
    MetricDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDefinition = exports.MetricDefinition || (exports.MetricDefinition = {}));
var TrainingInputMode;
(function (TrainingInputMode) {
    TrainingInputMode["FILE"] = "File";
    TrainingInputMode["PIPE"] = "Pipe";
})(TrainingInputMode = exports.TrainingInputMode || (exports.TrainingInputMode = {}));
var AlgorithmSpecification;
(function (AlgorithmSpecification) {
    /**
     * @internal
     */
    AlgorithmSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmSpecification = exports.AlgorithmSpecification || (exports.AlgorithmSpecification = {}));
var AlgorithmStatus;
(function (AlgorithmStatus) {
    AlgorithmStatus["COMPLETED"] = "Completed";
    AlgorithmStatus["DELETING"] = "Deleting";
    AlgorithmStatus["FAILED"] = "Failed";
    AlgorithmStatus["IN_PROGRESS"] = "InProgress";
    AlgorithmStatus["PENDING"] = "Pending";
})(AlgorithmStatus = exports.AlgorithmStatus || (exports.AlgorithmStatus = {}));
var DetailedAlgorithmStatus;
(function (DetailedAlgorithmStatus) {
    DetailedAlgorithmStatus["COMPLETED"] = "Completed";
    DetailedAlgorithmStatus["FAILED"] = "Failed";
    DetailedAlgorithmStatus["IN_PROGRESS"] = "InProgress";
    DetailedAlgorithmStatus["NOT_STARTED"] = "NotStarted";
})(DetailedAlgorithmStatus = exports.DetailedAlgorithmStatus || (exports.DetailedAlgorithmStatus = {}));
var AlgorithmStatusItem;
(function (AlgorithmStatusItem) {
    /**
     * @internal
     */
    AlgorithmStatusItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmStatusItem = exports.AlgorithmStatusItem || (exports.AlgorithmStatusItem = {}));
var AlgorithmStatusDetails;
(function (AlgorithmStatusDetails) {
    /**
     * @internal
     */
    AlgorithmStatusDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmStatusDetails = exports.AlgorithmStatusDetails || (exports.AlgorithmStatusDetails = {}));
var AlgorithmSummary;
(function (AlgorithmSummary) {
    /**
     * @internal
     */
    AlgorithmSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmSummary = exports.AlgorithmSummary || (exports.AlgorithmSummary = {}));
var CompressionType;
(function (CompressionType) {
    CompressionType["GZIP"] = "Gzip";
    CompressionType["NONE"] = "None";
})(CompressionType = exports.CompressionType || (exports.CompressionType = {}));
var FileSystemAccessMode;
(function (FileSystemAccessMode) {
    FileSystemAccessMode["RO"] = "ro";
    FileSystemAccessMode["RW"] = "rw";
})(FileSystemAccessMode = exports.FileSystemAccessMode || (exports.FileSystemAccessMode = {}));
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["EFS"] = "EFS";
    FileSystemType["FSXLUSTRE"] = "FSxLustre";
})(FileSystemType = exports.FileSystemType || (exports.FileSystemType = {}));
var FileSystemDataSource;
(function (FileSystemDataSource) {
    /**
     * @internal
     */
    FileSystemDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemDataSource = exports.FileSystemDataSource || (exports.FileSystemDataSource = {}));
var S3DataDistribution;
(function (S3DataDistribution) {
    S3DataDistribution["FULLY_REPLICATED"] = "FullyReplicated";
    S3DataDistribution["SHARDED_BY_S3_KEY"] = "ShardedByS3Key";
})(S3DataDistribution = exports.S3DataDistribution || (exports.S3DataDistribution = {}));
var S3DataType;
(function (S3DataType) {
    S3DataType["AUGMENTED_MANIFEST_FILE"] = "AugmentedManifestFile";
    S3DataType["MANIFEST_FILE"] = "ManifestFile";
    S3DataType["S3_PREFIX"] = "S3Prefix";
})(S3DataType = exports.S3DataType || (exports.S3DataType = {}));
var S3DataSource;
(function (S3DataSource) {
    /**
     * @internal
     */
    S3DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DataSource = exports.S3DataSource || (exports.S3DataSource = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var RecordWrapper;
(function (RecordWrapper) {
    RecordWrapper["NONE"] = "None";
    RecordWrapper["RECORDIO"] = "RecordIO";
})(RecordWrapper = exports.RecordWrapper || (exports.RecordWrapper = {}));
var ShuffleConfig;
(function (ShuffleConfig) {
    /**
     * @internal
     */
    ShuffleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShuffleConfig = exports.ShuffleConfig || (exports.ShuffleConfig = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var TrainingInstanceType;
(function (TrainingInstanceType) {
    TrainingInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    TrainingInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    TrainingInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    TrainingInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    TrainingInstanceType["ML_C5N_18XLARGE"] = "ml.c5n.18xlarge";
    TrainingInstanceType["ML_C5N_2XLARGE"] = "ml.c5n.2xlarge";
    TrainingInstanceType["ML_C5N_4XLARGE"] = "ml.c5n.4xlarge";
    TrainingInstanceType["ML_C5N_9XLARGE"] = "ml.c5n.9xlarge";
    TrainingInstanceType["ML_C5N_XLARGE"] = "ml.c5n.xlarge";
    TrainingInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    TrainingInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    TrainingInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    TrainingInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    TrainingInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    TrainingInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    TrainingInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    TrainingInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    TrainingInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    TrainingInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    TrainingInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    TrainingInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    TrainingInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    TrainingInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    TrainingInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    TrainingInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    TrainingInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    TrainingInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    TrainingInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    TrainingInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    TrainingInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    TrainingInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    TrainingInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    TrainingInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    TrainingInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    TrainingInstanceType["ML_P3DN_24XLARGE"] = "ml.p3dn.24xlarge";
    TrainingInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    TrainingInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    TrainingInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    TrainingInstanceType["ML_P4D_24XLARGE"] = "ml.p4d.24xlarge";
})(TrainingInstanceType = exports.TrainingInstanceType || (exports.TrainingInstanceType = {}));
var ResourceConfig;
(function (ResourceConfig) {
    /**
     * @internal
     */
    ResourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConfig = exports.ResourceConfig || (exports.ResourceConfig = {}));
var StoppingCondition;
(function (StoppingCondition) {
    /**
     * @internal
     */
    StoppingCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StoppingCondition = exports.StoppingCondition || (exports.StoppingCondition = {}));
var TrainingJobDefinition;
(function (TrainingJobDefinition) {
    /**
     * @internal
     */
    TrainingJobDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingJobDefinition = exports.TrainingJobDefinition || (exports.TrainingJobDefinition = {}));
var BatchStrategy;
(function (BatchStrategy) {
    BatchStrategy["MULTI_RECORD"] = "MultiRecord";
    BatchStrategy["SINGLE_RECORD"] = "SingleRecord";
})(BatchStrategy = exports.BatchStrategy || (exports.BatchStrategy = {}));
var TransformS3DataSource;
(function (TransformS3DataSource) {
    /**
     * @internal
     */
    TransformS3DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformS3DataSource = exports.TransformS3DataSource || (exports.TransformS3DataSource = {}));
var TransformDataSource;
(function (TransformDataSource) {
    /**
     * @internal
     */
    TransformDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformDataSource = exports.TransformDataSource || (exports.TransformDataSource = {}));
var SplitType;
(function (SplitType) {
    SplitType["LINE"] = "Line";
    SplitType["NONE"] = "None";
    SplitType["RECORDIO"] = "RecordIO";
    SplitType["TFRECORD"] = "TFRecord";
})(SplitType = exports.SplitType || (exports.SplitType = {}));
var TransformInput;
(function (TransformInput) {
    /**
     * @internal
     */
    TransformInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformInput = exports.TransformInput || (exports.TransformInput = {}));
var AssemblyType;
(function (AssemblyType) {
    AssemblyType["LINE"] = "Line";
    AssemblyType["NONE"] = "None";
})(AssemblyType = exports.AssemblyType || (exports.AssemblyType = {}));
var TransformOutput;
(function (TransformOutput) {
    /**
     * @internal
     */
    TransformOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformOutput = exports.TransformOutput || (exports.TransformOutput = {}));
var TransformInstanceType;
(function (TransformInstanceType) {
    TransformInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    TransformInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    TransformInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    TransformInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    TransformInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    TransformInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    TransformInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    TransformInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    TransformInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    TransformInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    TransformInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    TransformInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    TransformInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    TransformInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    TransformInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    TransformInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    TransformInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    TransformInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    TransformInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    TransformInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    TransformInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    TransformInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    TransformInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    TransformInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    TransformInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    TransformInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
})(TransformInstanceType = exports.TransformInstanceType || (exports.TransformInstanceType = {}));
var TransformResources;
(function (TransformResources) {
    /**
     * @internal
     */
    TransformResources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformResources = exports.TransformResources || (exports.TransformResources = {}));
var TransformJobDefinition;
(function (TransformJobDefinition) {
    /**
     * @internal
     */
    TransformJobDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformJobDefinition = exports.TransformJobDefinition || (exports.TransformJobDefinition = {}));
var AlgorithmValidationProfile;
(function (AlgorithmValidationProfile) {
    /**
     * @internal
     */
    AlgorithmValidationProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmValidationProfile = exports.AlgorithmValidationProfile || (exports.AlgorithmValidationProfile = {}));
var AlgorithmValidationSpecification;
(function (AlgorithmValidationSpecification) {
    /**
     * @internal
     */
    AlgorithmValidationSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmValidationSpecification = exports.AlgorithmValidationSpecification || (exports.AlgorithmValidationSpecification = {}));
var AnnotationConsolidationConfig;
(function (AnnotationConsolidationConfig) {
    /**
     * @internal
     */
    AnnotationConsolidationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnnotationConsolidationConfig = exports.AnnotationConsolidationConfig || (exports.AnnotationConsolidationConfig = {}));
var AppType;
(function (AppType) {
    AppType["JupyterServer"] = "JupyterServer";
    AppType["KernelGateway"] = "KernelGateway";
    AppType["TensorBoard"] = "TensorBoard";
})(AppType = exports.AppType || (exports.AppType = {}));
var AppStatus;
(function (AppStatus) {
    AppStatus["Deleted"] = "Deleted";
    AppStatus["Deleting"] = "Deleting";
    AppStatus["Failed"] = "Failed";
    AppStatus["InService"] = "InService";
    AppStatus["Pending"] = "Pending";
})(AppStatus = exports.AppStatus || (exports.AppStatus = {}));
var AppDetails;
(function (AppDetails) {
    /**
     * @internal
     */
    AppDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppDetails = exports.AppDetails || (exports.AppDetails = {}));
var FileSystemConfig;
(function (FileSystemConfig) {
    /**
     * @internal
     */
    FileSystemConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemConfig = exports.FileSystemConfig || (exports.FileSystemConfig = {}));
var KernelSpec;
(function (KernelSpec) {
    /**
     * @internal
     */
    KernelSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KernelSpec = exports.KernelSpec || (exports.KernelSpec = {}));
var KernelGatewayImageConfig;
(function (KernelGatewayImageConfig) {
    /**
     * @internal
     */
    KernelGatewayImageConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KernelGatewayImageConfig = exports.KernelGatewayImageConfig || (exports.KernelGatewayImageConfig = {}));
var AppImageConfigDetails;
(function (AppImageConfigDetails) {
    /**
     * @internal
     */
    AppImageConfigDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppImageConfigDetails = exports.AppImageConfigDetails || (exports.AppImageConfigDetails = {}));
var AppImageConfigSortKey;
(function (AppImageConfigSortKey) {
    AppImageConfigSortKey["CreationTime"] = "CreationTime";
    AppImageConfigSortKey["LastModifiedTime"] = "LastModifiedTime";
    AppImageConfigSortKey["Name"] = "Name";
})(AppImageConfigSortKey = exports.AppImageConfigSortKey || (exports.AppImageConfigSortKey = {}));
var AppInstanceType;
(function (AppInstanceType) {
    AppInstanceType["ML_C5_12XLARGE"] = "ml.c5.12xlarge";
    AppInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    AppInstanceType["ML_C5_24XLARGE"] = "ml.c5.24xlarge";
    AppInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    AppInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    AppInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    AppInstanceType["ML_C5_LARGE"] = "ml.c5.large";
    AppInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    AppInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    AppInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    AppInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    AppInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    AppInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    AppInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    AppInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    AppInstanceType["ML_M5_16XLARGE"] = "ml.m5.16xlarge";
    AppInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    AppInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    AppInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    AppInstanceType["ML_M5_8XLARGE"] = "ml.m5.8xlarge";
    AppInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    AppInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    AppInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    AppInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    AppInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    AppInstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    AppInstanceType["ML_T3_LARGE"] = "ml.t3.large";
    AppInstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    AppInstanceType["ML_T3_MICRO"] = "ml.t3.micro";
    AppInstanceType["ML_T3_SMALL"] = "ml.t3.small";
    AppInstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
    AppInstanceType["SYSTEM"] = "system";
})(AppInstanceType = exports.AppInstanceType || (exports.AppInstanceType = {}));
var AppNetworkAccessType;
(function (AppNetworkAccessType) {
    AppNetworkAccessType["PublicInternetOnly"] = "PublicInternetOnly";
    AppNetworkAccessType["VpcOnly"] = "VpcOnly";
})(AppNetworkAccessType = exports.AppNetworkAccessType || (exports.AppNetworkAccessType = {}));
var AppSortKey;
(function (AppSortKey) {
    AppSortKey["CreationTime"] = "CreationTime";
})(AppSortKey = exports.AppSortKey || (exports.AppSortKey = {}));
var AppSpecification;
(function (AppSpecification) {
    /**
     * @internal
     */
    AppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppSpecification = exports.AppSpecification || (exports.AppSpecification = {}));
var ArtifactSourceIdType;
(function (ArtifactSourceIdType) {
    ArtifactSourceIdType["CUSTOM"] = "Custom";
    ArtifactSourceIdType["MD5_HASH"] = "MD5Hash";
    ArtifactSourceIdType["S3_ETAG"] = "S3ETag";
    ArtifactSourceIdType["S3_VERSION"] = "S3Version";
})(ArtifactSourceIdType = exports.ArtifactSourceIdType || (exports.ArtifactSourceIdType = {}));
var ArtifactSourceType;
(function (ArtifactSourceType) {
    /**
     * @internal
     */
    ArtifactSourceType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactSourceType = exports.ArtifactSourceType || (exports.ArtifactSourceType = {}));
var ArtifactSource;
(function (ArtifactSource) {
    /**
     * @internal
     */
    ArtifactSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactSource = exports.ArtifactSource || (exports.ArtifactSource = {}));
var ArtifactSummary;
(function (ArtifactSummary) {
    /**
     * @internal
     */
    ArtifactSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactSummary = exports.ArtifactSummary || (exports.ArtifactSummary = {}));
var AssociateTrialComponentRequest;
(function (AssociateTrialComponentRequest) {
    /**
     * @internal
     */
    AssociateTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTrialComponentRequest = exports.AssociateTrialComponentRequest || (exports.AssociateTrialComponentRequest = {}));
var AssociateTrialComponentResponse;
(function (AssociateTrialComponentResponse) {
    /**
     * @internal
     */
    AssociateTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTrialComponentResponse = exports.AssociateTrialComponentResponse || (exports.AssociateTrialComponentResponse = {}));
var UserContext;
(function (UserContext) {
    /**
     * @internal
     */
    UserContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserContext = exports.UserContext || (exports.UserContext = {}));
var AssociationSummary;
(function (AssociationSummary) {
    /**
     * @internal
     */
    AssociationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationSummary = exports.AssociationSummary || (exports.AssociationSummary = {}));
var AthenaResultCompressionType;
(function (AthenaResultCompressionType) {
    AthenaResultCompressionType["GZIP"] = "GZIP";
    AthenaResultCompressionType["SNAPPY"] = "SNAPPY";
    AthenaResultCompressionType["ZLIB"] = "ZLIB";
})(AthenaResultCompressionType = exports.AthenaResultCompressionType || (exports.AthenaResultCompressionType = {}));
var AthenaResultFormat;
(function (AthenaResultFormat) {
    AthenaResultFormat["AVRO"] = "AVRO";
    AthenaResultFormat["JSON"] = "JSON";
    AthenaResultFormat["ORC"] = "ORC";
    AthenaResultFormat["PARQUET"] = "PARQUET";
    AthenaResultFormat["TEXTFILE"] = "TEXTFILE";
})(AthenaResultFormat = exports.AthenaResultFormat || (exports.AthenaResultFormat = {}));
var AthenaDatasetDefinition;
(function (AthenaDatasetDefinition) {
    /**
     * @internal
     */
    AthenaDatasetDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AthenaDatasetDefinition = exports.AthenaDatasetDefinition || (exports.AthenaDatasetDefinition = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode = exports.AuthMode || (exports.AuthMode = {}));
var CandidateArtifactLocations;
(function (CandidateArtifactLocations) {
    /**
     * @internal
     */
    CandidateArtifactLocations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CandidateArtifactLocations = exports.CandidateArtifactLocations || (exports.CandidateArtifactLocations = {}));
var CandidateProperties;
(function (CandidateProperties) {
    /**
     * @internal
     */
    CandidateProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CandidateProperties = exports.CandidateProperties || (exports.CandidateProperties = {}));
var CandidateStatus;
(function (CandidateStatus) {
    CandidateStatus["COMPLETED"] = "Completed";
    CandidateStatus["FAILED"] = "Failed";
    CandidateStatus["IN_PROGRESS"] = "InProgress";
    CandidateStatus["STOPPED"] = "Stopped";
    CandidateStatus["STOPPING"] = "Stopping";
})(CandidateStatus = exports.CandidateStatus || (exports.CandidateStatus = {}));
var CandidateStepType;
(function (CandidateStepType) {
    CandidateStepType["PROCESSING"] = "AWS::SageMaker::ProcessingJob";
    CandidateStepType["TRAINING"] = "AWS::SageMaker::TrainingJob";
    CandidateStepType["TRANSFORM"] = "AWS::SageMaker::TransformJob";
})(CandidateStepType = exports.CandidateStepType || (exports.CandidateStepType = {}));
var AutoMLCandidateStep;
(function (AutoMLCandidateStep) {
    /**
     * @internal
     */
    AutoMLCandidateStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLCandidateStep = exports.AutoMLCandidateStep || (exports.AutoMLCandidateStep = {}));
var AutoMLMetricEnum;
(function (AutoMLMetricEnum) {
    AutoMLMetricEnum["ACCURACY"] = "Accuracy";
    AutoMLMetricEnum["AUC"] = "AUC";
    AutoMLMetricEnum["F1"] = "F1";
    AutoMLMetricEnum["F1_MACRO"] = "F1macro";
    AutoMLMetricEnum["MSE"] = "MSE";
})(AutoMLMetricEnum = exports.AutoMLMetricEnum || (exports.AutoMLMetricEnum = {}));
var AutoMLJobObjectiveType;
(function (AutoMLJobObjectiveType) {
    AutoMLJobObjectiveType["MAXIMIZE"] = "Maximize";
    AutoMLJobObjectiveType["MINIMIZE"] = "Minimize";
})(AutoMLJobObjectiveType = exports.AutoMLJobObjectiveType || (exports.AutoMLJobObjectiveType = {}));
var FinalAutoMLJobObjectiveMetric;
(function (FinalAutoMLJobObjectiveMetric) {
    /**
     * @internal
     */
    FinalAutoMLJobObjectiveMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalAutoMLJobObjectiveMetric = exports.FinalAutoMLJobObjectiveMetric || (exports.FinalAutoMLJobObjectiveMetric = {}));
var AutoMLContainerDefinition;
(function (AutoMLContainerDefinition) {
    /**
     * @internal
     */
    AutoMLContainerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLContainerDefinition = exports.AutoMLContainerDefinition || (exports.AutoMLContainerDefinition = {}));
var ObjectiveStatus;
(function (ObjectiveStatus) {
    ObjectiveStatus["Failed"] = "Failed";
    ObjectiveStatus["Pending"] = "Pending";
    ObjectiveStatus["Succeeded"] = "Succeeded";
})(ObjectiveStatus = exports.ObjectiveStatus || (exports.ObjectiveStatus = {}));
var AutoMLCandidate;
(function (AutoMLCandidate) {
    /**
     * @internal
     */
    AutoMLCandidate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLCandidate = exports.AutoMLCandidate || (exports.AutoMLCandidate = {}));
var AutoMLS3DataType;
(function (AutoMLS3DataType) {
    AutoMLS3DataType["MANIFEST_FILE"] = "ManifestFile";
    AutoMLS3DataType["S3_PREFIX"] = "S3Prefix";
})(AutoMLS3DataType = exports.AutoMLS3DataType || (exports.AutoMLS3DataType = {}));
var AutoMLS3DataSource;
(function (AutoMLS3DataSource) {
    /**
     * @internal
     */
    AutoMLS3DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLS3DataSource = exports.AutoMLS3DataSource || (exports.AutoMLS3DataSource = {}));
var AutoMLDataSource;
(function (AutoMLDataSource) {
    /**
     * @internal
     */
    AutoMLDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLDataSource = exports.AutoMLDataSource || (exports.AutoMLDataSource = {}));
var AutoMLChannel;
(function (AutoMLChannel) {
    /**
     * @internal
     */
    AutoMLChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLChannel = exports.AutoMLChannel || (exports.AutoMLChannel = {}));
var AutoMLJobArtifacts;
(function (AutoMLJobArtifacts) {
    /**
     * @internal
     */
    AutoMLJobArtifacts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLJobArtifacts = exports.AutoMLJobArtifacts || (exports.AutoMLJobArtifacts = {}));
var AutoMLJobCompletionCriteria;
(function (AutoMLJobCompletionCriteria) {
    /**
     * @internal
     */
    AutoMLJobCompletionCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLJobCompletionCriteria = exports.AutoMLJobCompletionCriteria || (exports.AutoMLJobCompletionCriteria = {}));
var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var AutoMLSecurityConfig;
(function (AutoMLSecurityConfig) {
    /**
     * @internal
     */
    AutoMLSecurityConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLSecurityConfig = exports.AutoMLSecurityConfig || (exports.AutoMLSecurityConfig = {}));
var AutoMLJobConfig;
(function (AutoMLJobConfig) {
    /**
     * @internal
     */
    AutoMLJobConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLJobConfig = exports.AutoMLJobConfig || (exports.AutoMLJobConfig = {}));
var AutoMLJobObjective;
(function (AutoMLJobObjective) {
    /**
     * @internal
     */
    AutoMLJobObjective.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLJobObjective = exports.AutoMLJobObjective || (exports.AutoMLJobObjective = {}));
var AutoMLJobSecondaryStatus;
(function (AutoMLJobSecondaryStatus) {
    AutoMLJobSecondaryStatus["ANALYZING_DATA"] = "AnalyzingData";
    AutoMLJobSecondaryStatus["CANDIDATE_DEFINITIONS_GENERATED"] = "CandidateDefinitionsGenerated";
    AutoMLJobSecondaryStatus["COMPLETED"] = "Completed";
    AutoMLJobSecondaryStatus["DEPLOYING_MODEL"] = "DeployingModel";
    AutoMLJobSecondaryStatus["EXPLAINABILITY_ERROR"] = "ExplainabilityError";
    AutoMLJobSecondaryStatus["FAILED"] = "Failed";
    AutoMLJobSecondaryStatus["FEATURE_ENGINEERING"] = "FeatureEngineering";
    AutoMLJobSecondaryStatus["GENERATING_EXPLAINABILITY_REPORT"] = "GeneratingExplainabilityReport";
    AutoMLJobSecondaryStatus["MAX_AUTO_ML_JOB_RUNTIME_REACHED"] = "MaxAutoMLJobRuntimeReached";
    AutoMLJobSecondaryStatus["MAX_CANDIDATES_REACHED"] = "MaxCandidatesReached";
    AutoMLJobSecondaryStatus["MODEL_DEPLOYMENT_ERROR"] = "ModelDeploymentError";
    AutoMLJobSecondaryStatus["MODEL_TUNING"] = "ModelTuning";
    AutoMLJobSecondaryStatus["STARTING"] = "Starting";
    AutoMLJobSecondaryStatus["STOPPED"] = "Stopped";
    AutoMLJobSecondaryStatus["STOPPING"] = "Stopping";
})(AutoMLJobSecondaryStatus = exports.AutoMLJobSecondaryStatus || (exports.AutoMLJobSecondaryStatus = {}));
var AutoMLJobStatus;
(function (AutoMLJobStatus) {
    AutoMLJobStatus["COMPLETED"] = "Completed";
    AutoMLJobStatus["FAILED"] = "Failed";
    AutoMLJobStatus["IN_PROGRESS"] = "InProgress";
    AutoMLJobStatus["STOPPED"] = "Stopped";
    AutoMLJobStatus["STOPPING"] = "Stopping";
})(AutoMLJobStatus = exports.AutoMLJobStatus || (exports.AutoMLJobStatus = {}));
var AutoMLPartialFailureReason;
(function (AutoMLPartialFailureReason) {
    /**
     * @internal
     */
    AutoMLPartialFailureReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLPartialFailureReason = exports.AutoMLPartialFailureReason || (exports.AutoMLPartialFailureReason = {}));
var AutoMLJobSummary;
(function (AutoMLJobSummary) {
    /**
     * @internal
     */
    AutoMLJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLJobSummary = exports.AutoMLJobSummary || (exports.AutoMLJobSummary = {}));
var AutoMLOutputDataConfig;
(function (AutoMLOutputDataConfig) {
    /**
     * @internal
     */
    AutoMLOutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLOutputDataConfig = exports.AutoMLOutputDataConfig || (exports.AutoMLOutputDataConfig = {}));
var AutoMLSortBy;
(function (AutoMLSortBy) {
    AutoMLSortBy["CREATION_TIME"] = "CreationTime";
    AutoMLSortBy["NAME"] = "Name";
    AutoMLSortBy["STATUS"] = "Status";
})(AutoMLSortBy = exports.AutoMLSortBy || (exports.AutoMLSortBy = {}));
var AutoMLSortOrder;
(function (AutoMLSortOrder) {
    AutoMLSortOrder["ASCENDING"] = "Ascending";
    AutoMLSortOrder["DESCENDING"] = "Descending";
})(AutoMLSortOrder = exports.AutoMLSortOrder || (exports.AutoMLSortOrder = {}));
var AutoRollbackConfig;
(function (AutoRollbackConfig) {
    /**
     * @internal
     */
    AutoRollbackConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoRollbackConfig = exports.AutoRollbackConfig || (exports.AutoRollbackConfig = {}));
var AwsManagedHumanLoopRequestSource;
(function (AwsManagedHumanLoopRequestSource) {
    AwsManagedHumanLoopRequestSource["REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3"] = "AWS/Rekognition/DetectModerationLabels/Image/V3";
    AwsManagedHumanLoopRequestSource["TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1"] = "AWS/Textract/AnalyzeDocument/Forms/V1";
})(AwsManagedHumanLoopRequestSource = exports.AwsManagedHumanLoopRequestSource || (exports.AwsManagedHumanLoopRequestSource = {}));
var MetricsSource;
(function (MetricsSource) {
    /**
     * @internal
     */
    MetricsSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricsSource = exports.MetricsSource || (exports.MetricsSource = {}));
var Bias;
(function (Bias) {
    /**
     * @internal
     */
    Bias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Bias = exports.Bias || (exports.Bias = {}));
var CapacitySizeType;
(function (CapacitySizeType) {
    CapacitySizeType["CAPACITY_PERCENT"] = "CAPACITY_PERCENT";
    CapacitySizeType["INSTANCE_COUNT"] = "INSTANCE_COUNT";
})(CapacitySizeType = exports.CapacitySizeType || (exports.CapacitySizeType = {}));
var CapacitySize;
(function (CapacitySize) {
    /**
     * @internal
     */
    CapacitySize.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacitySize = exports.CapacitySize || (exports.CapacitySize = {}));
var TrafficRoutingConfigType;
(function (TrafficRoutingConfigType) {
    TrafficRoutingConfigType["ALL_AT_ONCE"] = "ALL_AT_ONCE";
    TrafficRoutingConfigType["CANARY"] = "CANARY";
})(TrafficRoutingConfigType = exports.TrafficRoutingConfigType || (exports.TrafficRoutingConfigType = {}));
var TrafficRoutingConfig;
(function (TrafficRoutingConfig) {
    /**
     * @internal
     */
    TrafficRoutingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficRoutingConfig = exports.TrafficRoutingConfig || (exports.TrafficRoutingConfig = {}));
var BlueGreenUpdatePolicy;
(function (BlueGreenUpdatePolicy) {
    /**
     * @internal
     */
    BlueGreenUpdatePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlueGreenUpdatePolicy = exports.BlueGreenUpdatePolicy || (exports.BlueGreenUpdatePolicy = {}));
var BooleanOperator;
(function (BooleanOperator) {
    BooleanOperator["AND"] = "And";
    BooleanOperator["OR"] = "Or";
})(BooleanOperator = exports.BooleanOperator || (exports.BooleanOperator = {}));
var CacheHitResult;
(function (CacheHitResult) {
    /**
     * @internal
     */
    CacheHitResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheHitResult = exports.CacheHitResult || (exports.CacheHitResult = {}));
var CandidateSortBy;
(function (CandidateSortBy) {
    CandidateSortBy["CreationTime"] = "CreationTime";
    CandidateSortBy["FinalObjectiveMetricValue"] = "FinalObjectiveMetricValue";
    CandidateSortBy["Status"] = "Status";
})(CandidateSortBy = exports.CandidateSortBy || (exports.CandidateSortBy = {}));
var CaptureContentTypeHeader;
(function (CaptureContentTypeHeader) {
    /**
     * @internal
     */
    CaptureContentTypeHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptureContentTypeHeader = exports.CaptureContentTypeHeader || (exports.CaptureContentTypeHeader = {}));
var CaptureMode;
(function (CaptureMode) {
    CaptureMode["INPUT"] = "Input";
    CaptureMode["OUTPUT"] = "Output";
})(CaptureMode = exports.CaptureMode || (exports.CaptureMode = {}));
var CaptureOption;
(function (CaptureOption) {
    /**
     * @internal
     */
    CaptureOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptureOption = exports.CaptureOption || (exports.CaptureOption = {}));
var CaptureStatus;
(function (CaptureStatus) {
    CaptureStatus["STARTED"] = "Started";
    CaptureStatus["STOPPED"] = "Stopped";
})(CaptureStatus = exports.CaptureStatus || (exports.CaptureStatus = {}));
var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    /**
     * @internal
     */
    CategoricalParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CategoricalParameterRange = exports.CategoricalParameterRange || (exports.CategoricalParameterRange = {}));
var CategoricalParameterRangeSpecification;
(function (CategoricalParameterRangeSpecification) {
    /**
     * @internal
     */
    CategoricalParameterRangeSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CategoricalParameterRangeSpecification = exports.CategoricalParameterRangeSpecification || (exports.CategoricalParameterRangeSpecification = {}));
var ChannelSpecification;
(function (ChannelSpecification) {
    /**
     * @internal
     */
    ChannelSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelSpecification = exports.ChannelSpecification || (exports.ChannelSpecification = {}));
var CheckpointConfig;
(function (CheckpointConfig) {
    /**
     * @internal
     */
    CheckpointConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckpointConfig = exports.CheckpointConfig || (exports.CheckpointConfig = {}));
var CodeRepositorySortBy;
(function (CodeRepositorySortBy) {
    CodeRepositorySortBy["CREATION_TIME"] = "CreationTime";
    CodeRepositorySortBy["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    CodeRepositorySortBy["NAME"] = "Name";
})(CodeRepositorySortBy = exports.CodeRepositorySortBy || (exports.CodeRepositorySortBy = {}));
var CodeRepositorySortOrder;
(function (CodeRepositorySortOrder) {
    CodeRepositorySortOrder["ASCENDING"] = "Ascending";
    CodeRepositorySortOrder["DESCENDING"] = "Descending";
})(CodeRepositorySortOrder = exports.CodeRepositorySortOrder || (exports.CodeRepositorySortOrder = {}));
var GitConfig;
(function (GitConfig) {
    /**
     * @internal
     */
    GitConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitConfig = exports.GitConfig || (exports.GitConfig = {}));
var CodeRepositorySummary;
(function (CodeRepositorySummary) {
    /**
     * @internal
     */
    CodeRepositorySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeRepositorySummary = exports.CodeRepositorySummary || (exports.CodeRepositorySummary = {}));
var CognitoConfig;
(function (CognitoConfig) {
    /**
     * @internal
     */
    CognitoConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoConfig = exports.CognitoConfig || (exports.CognitoConfig = {}));
var CognitoMemberDefinition;
(function (CognitoMemberDefinition) {
    /**
     * @internal
     */
    CognitoMemberDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoMemberDefinition = exports.CognitoMemberDefinition || (exports.CognitoMemberDefinition = {}));
var CollectionConfiguration;
(function (CollectionConfiguration) {
    /**
     * @internal
     */
    CollectionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CollectionConfiguration = exports.CollectionConfiguration || (exports.CollectionConfiguration = {}));
var CompilationJobStatus;
(function (CompilationJobStatus) {
    CompilationJobStatus["COMPLETED"] = "COMPLETED";
    CompilationJobStatus["FAILED"] = "FAILED";
    CompilationJobStatus["INPROGRESS"] = "INPROGRESS";
    CompilationJobStatus["STARTING"] = "STARTING";
    CompilationJobStatus["STOPPED"] = "STOPPED";
    CompilationJobStatus["STOPPING"] = "STOPPING";
})(CompilationJobStatus = exports.CompilationJobStatus || (exports.CompilationJobStatus = {}));
var TargetDevice;
(function (TargetDevice) {
    TargetDevice["AISAGE"] = "aisage";
    TargetDevice["AMBA_CV22"] = "amba_cv22";
    TargetDevice["COREML"] = "coreml";
    TargetDevice["DEEPLENS"] = "deeplens";
    TargetDevice["IMX8QM"] = "imx8qm";
    TargetDevice["JACINTO_TDA4VM"] = "jacinto_tda4vm";
    TargetDevice["JETSON_NANO"] = "jetson_nano";
    TargetDevice["JETSON_TX1"] = "jetson_tx1";
    TargetDevice["JETSON_TX2"] = "jetson_tx2";
    TargetDevice["JETSON_XAVIER"] = "jetson_xavier";
    TargetDevice["LAMBDA"] = "lambda";
    TargetDevice["ML_C4"] = "ml_c4";
    TargetDevice["ML_C5"] = "ml_c5";
    TargetDevice["ML_EIA2"] = "ml_eia2";
    TargetDevice["ML_G4DN"] = "ml_g4dn";
    TargetDevice["ML_INF1"] = "ml_inf1";
    TargetDevice["ML_M4"] = "ml_m4";
    TargetDevice["ML_M5"] = "ml_m5";
    TargetDevice["ML_P2"] = "ml_p2";
    TargetDevice["ML_P3"] = "ml_p3";
    TargetDevice["QCS603"] = "qcs603";
    TargetDevice["QCS605"] = "qcs605";
    TargetDevice["RASP3B"] = "rasp3b";
    TargetDevice["RK3288"] = "rk3288";
    TargetDevice["RK3399"] = "rk3399";
    TargetDevice["SBE_C"] = "sbe_c";
    TargetDevice["SITARA_AM57X"] = "sitara_am57x";
    TargetDevice["X86_WIN32"] = "x86_win32";
    TargetDevice["X86_WIN64"] = "x86_win64";
})(TargetDevice = exports.TargetDevice || (exports.TargetDevice = {}));
var TargetPlatformAccelerator;
(function (TargetPlatformAccelerator) {
    TargetPlatformAccelerator["INTEL_GRAPHICS"] = "INTEL_GRAPHICS";
    TargetPlatformAccelerator["MALI"] = "MALI";
    TargetPlatformAccelerator["NVIDIA"] = "NVIDIA";
})(TargetPlatformAccelerator = exports.TargetPlatformAccelerator || (exports.TargetPlatformAccelerator = {}));
var TargetPlatformArch;
(function (TargetPlatformArch) {
    TargetPlatformArch["ARM64"] = "ARM64";
    TargetPlatformArch["ARM_EABI"] = "ARM_EABI";
    TargetPlatformArch["ARM_EABIHF"] = "ARM_EABIHF";
    TargetPlatformArch["X86"] = "X86";
    TargetPlatformArch["X86_64"] = "X86_64";
})(TargetPlatformArch = exports.TargetPlatformArch || (exports.TargetPlatformArch = {}));
var TargetPlatformOs;
(function (TargetPlatformOs) {
    TargetPlatformOs["ANDROID"] = "ANDROID";
    TargetPlatformOs["LINUX"] = "LINUX";
})(TargetPlatformOs = exports.TargetPlatformOs || (exports.TargetPlatformOs = {}));
var CompilationJobSummary;
(function (CompilationJobSummary) {
    /**
     * @internal
     */
    CompilationJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompilationJobSummary = exports.CompilationJobSummary || (exports.CompilationJobSummary = {}));
var ConditionOutcome;
(function (ConditionOutcome) {
    ConditionOutcome["FALSE"] = "False";
    ConditionOutcome["TRUE"] = "True";
})(ConditionOutcome = exports.ConditionOutcome || (exports.ConditionOutcome = {}));
var ConditionStepMetadata;
(function (ConditionStepMetadata) {
    /**
     * @internal
     */
    ConditionStepMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionStepMetadata = exports.ConditionStepMetadata || (exports.ConditionStepMetadata = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var RepositoryAccessMode;
(function (RepositoryAccessMode) {
    RepositoryAccessMode["PLATFORM"] = "Platform";
    RepositoryAccessMode["VPC"] = "Vpc";
})(RepositoryAccessMode = exports.RepositoryAccessMode || (exports.RepositoryAccessMode = {}));
var RepositoryAuthConfig;
(function (RepositoryAuthConfig) {
    /**
     * @internal
     */
    RepositoryAuthConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryAuthConfig = exports.RepositoryAuthConfig || (exports.RepositoryAuthConfig = {}));
var ImageConfig;
(function (ImageConfig) {
    /**
     * @internal
     */
    ImageConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageConfig = exports.ImageConfig || (exports.ImageConfig = {}));
var ContainerMode;
(function (ContainerMode) {
    ContainerMode["MULTI_MODEL"] = "MultiModel";
    ContainerMode["SINGLE_MODEL"] = "SingleModel";
})(ContainerMode = exports.ContainerMode || (exports.ContainerMode = {}));
var ModelCacheSetting;
(function (ModelCacheSetting) {
    ModelCacheSetting["DISABLED"] = "Disabled";
    ModelCacheSetting["ENABLED"] = "Enabled";
})(ModelCacheSetting = exports.ModelCacheSetting || (exports.ModelCacheSetting = {}));
var MultiModelConfig;
(function (MultiModelConfig) {
    /**
     * @internal
     */
    MultiModelConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiModelConfig = exports.MultiModelConfig || (exports.MultiModelConfig = {}));
var ContainerDefinition;
(function (ContainerDefinition) {
    /**
     * @internal
     */
    ContainerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDefinition = exports.ContainerDefinition || (exports.ContainerDefinition = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var ContextSource;
(function (ContextSource) {
    /**
     * @internal
     */
    ContextSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContextSource = exports.ContextSource || (exports.ContextSource = {}));
var ContextSummary;
(function (ContextSummary) {
    /**
     * @internal
     */
    ContextSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContextSummary = exports.ContextSummary || (exports.ContextSummary = {}));
var HyperParameterScalingType;
(function (HyperParameterScalingType) {
    HyperParameterScalingType["AUTO"] = "Auto";
    HyperParameterScalingType["LINEAR"] = "Linear";
    HyperParameterScalingType["LOGARITHMIC"] = "Logarithmic";
    HyperParameterScalingType["REVERSE_LOGARITHMIC"] = "ReverseLogarithmic";
})(HyperParameterScalingType = exports.HyperParameterScalingType || (exports.HyperParameterScalingType = {}));
var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    /**
     * @internal
     */
    ContinuousParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousParameterRange = exports.ContinuousParameterRange || (exports.ContinuousParameterRange = {}));
var ContinuousParameterRangeSpecification;
(function (ContinuousParameterRangeSpecification) {
    /**
     * @internal
     */
    ContinuousParameterRangeSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousParameterRangeSpecification = exports.ContinuousParameterRangeSpecification || (exports.ContinuousParameterRangeSpecification = {}));
var MetadataProperties;
(function (MetadataProperties) {
    /**
     * @internal
     */
    MetadataProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetadataProperties = exports.MetadataProperties || (exports.MetadataProperties = {}));
var CreateActionRequest;
(function (CreateActionRequest) {
    /**
     * @internal
     */
    CreateActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActionRequest = exports.CreateActionRequest || (exports.CreateActionRequest = {}));
var CreateActionResponse;
(function (CreateActionResponse) {
    /**
     * @internal
     */
    CreateActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActionResponse = exports.CreateActionResponse || (exports.CreateActionResponse = {}));
var ModelPackageContainerDefinition;
(function (ModelPackageContainerDefinition) {
    /**
     * @internal
     */
    ModelPackageContainerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageContainerDefinition = exports.ModelPackageContainerDefinition || (exports.ModelPackageContainerDefinition = {}));
var ProductionVariantInstanceType;
(function (ProductionVariantInstanceType) {
    ProductionVariantInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    ProductionVariantInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    ProductionVariantInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    ProductionVariantInstanceType["ML_C4_LARGE"] = "ml.c4.large";
    ProductionVariantInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    ProductionVariantInstanceType["ML_C5D_18XLARGE"] = "ml.c5d.18xlarge";
    ProductionVariantInstanceType["ML_C5D_2XLARGE"] = "ml.c5d.2xlarge";
    ProductionVariantInstanceType["ML_C5D_4XLARGE"] = "ml.c5d.4xlarge";
    ProductionVariantInstanceType["ML_C5D_9XLARGE"] = "ml.c5d.9xlarge";
    ProductionVariantInstanceType["ML_C5D_LARGE"] = "ml.c5d.large";
    ProductionVariantInstanceType["ML_C5D_XLARGE"] = "ml.c5d.xlarge";
    ProductionVariantInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    ProductionVariantInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    ProductionVariantInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    ProductionVariantInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    ProductionVariantInstanceType["ML_C5_LARGE"] = "ml.c5.large";
    ProductionVariantInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    ProductionVariantInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    ProductionVariantInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    ProductionVariantInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    ProductionVariantInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    ProductionVariantInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    ProductionVariantInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    ProductionVariantInstanceType["ML_INF1_24XLARGE"] = "ml.inf1.24xlarge";
    ProductionVariantInstanceType["ML_INF1_2XLARGE"] = "ml.inf1.2xlarge";
    ProductionVariantInstanceType["ML_INF1_6XLARGE"] = "ml.inf1.6xlarge";
    ProductionVariantInstanceType["ML_INF1_XLARGE"] = "ml.inf1.xlarge";
    ProductionVariantInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    ProductionVariantInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    ProductionVariantInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    ProductionVariantInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    ProductionVariantInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    ProductionVariantInstanceType["ML_M5D_12XLARGE"] = "ml.m5d.12xlarge";
    ProductionVariantInstanceType["ML_M5D_24XLARGE"] = "ml.m5d.24xlarge";
    ProductionVariantInstanceType["ML_M5D_2XLARGE"] = "ml.m5d.2xlarge";
    ProductionVariantInstanceType["ML_M5D_4XLARGE"] = "ml.m5d.4xlarge";
    ProductionVariantInstanceType["ML_M5D_LARGE"] = "ml.m5d.large";
    ProductionVariantInstanceType["ML_M5D_XLARGE"] = "ml.m5d.xlarge";
    ProductionVariantInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    ProductionVariantInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    ProductionVariantInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    ProductionVariantInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    ProductionVariantInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    ProductionVariantInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    ProductionVariantInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    ProductionVariantInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    ProductionVariantInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    ProductionVariantInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    ProductionVariantInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    ProductionVariantInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    ProductionVariantInstanceType["ML_R5D_12XLARGE"] = "ml.r5d.12xlarge";
    ProductionVariantInstanceType["ML_R5D_24XLARGE"] = "ml.r5d.24xlarge";
    ProductionVariantInstanceType["ML_R5D_2XLARGE"] = "ml.r5d.2xlarge";
    ProductionVariantInstanceType["ML_R5D_4XLARGE"] = "ml.r5d.4xlarge";
    ProductionVariantInstanceType["ML_R5D_LARGE"] = "ml.r5d.large";
    ProductionVariantInstanceType["ML_R5D_XLARGE"] = "ml.r5d.xlarge";
    ProductionVariantInstanceType["ML_R5_12XLARGE"] = "ml.r5.12xlarge";
    ProductionVariantInstanceType["ML_R5_24XLARGE"] = "ml.r5.24xlarge";
    ProductionVariantInstanceType["ML_R5_2XLARGE"] = "ml.r5.2xlarge";
    ProductionVariantInstanceType["ML_R5_4XLARGE"] = "ml.r5.4xlarge";
    ProductionVariantInstanceType["ML_R5_LARGE"] = "ml.r5.large";
    ProductionVariantInstanceType["ML_R5_XLARGE"] = "ml.r5.xlarge";
    ProductionVariantInstanceType["ML_T2_2XLARGE"] = "ml.t2.2xlarge";
    ProductionVariantInstanceType["ML_T2_LARGE"] = "ml.t2.large";
    ProductionVariantInstanceType["ML_T2_MEDIUM"] = "ml.t2.medium";
    ProductionVariantInstanceType["ML_T2_XLARGE"] = "ml.t2.xlarge";
})(ProductionVariantInstanceType = exports.ProductionVariantInstanceType || (exports.ProductionVariantInstanceType = {}));
var InferenceSpecification;
(function (InferenceSpecification) {
    /**
     * @internal
     */
    InferenceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceSpecification = exports.InferenceSpecification || (exports.InferenceSpecification = {}));
var IntegerParameterRangeSpecification;
(function (IntegerParameterRangeSpecification) {
    /**
     * @internal
     */
    IntegerParameterRangeSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegerParameterRangeSpecification = exports.IntegerParameterRangeSpecification || (exports.IntegerParameterRangeSpecification = {}));
var ParameterRange;
(function (ParameterRange) {
    /**
     * @internal
     */
    ParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterRange = exports.ParameterRange || (exports.ParameterRange = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType["CATEGORICAL"] = "Categorical";
    ParameterType["CONTINUOUS"] = "Continuous";
    ParameterType["FREE_TEXT"] = "FreeText";
    ParameterType["INTEGER"] = "Integer";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
var HyperParameterSpecification;
(function (HyperParameterSpecification) {
    /**
     * @internal
     */
    HyperParameterSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterSpecification = exports.HyperParameterSpecification || (exports.HyperParameterSpecification = {}));
var HyperParameterTuningJobObjectiveType;
(function (HyperParameterTuningJobObjectiveType) {
    HyperParameterTuningJobObjectiveType["MAXIMIZE"] = "Maximize";
    HyperParameterTuningJobObjectiveType["MINIMIZE"] = "Minimize";
})(HyperParameterTuningJobObjectiveType = exports.HyperParameterTuningJobObjectiveType || (exports.HyperParameterTuningJobObjectiveType = {}));
var HyperParameterTuningJobObjective;
(function (HyperParameterTuningJobObjective) {
    /**
     * @internal
     */
    HyperParameterTuningJobObjective.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTuningJobObjective = exports.HyperParameterTuningJobObjective || (exports.HyperParameterTuningJobObjective = {}));
var TrainingSpecification;
(function (TrainingSpecification) {
    /**
     * @internal
     */
    TrainingSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingSpecification = exports.TrainingSpecification || (exports.TrainingSpecification = {}));
var CreateAlgorithmInput;
(function (CreateAlgorithmInput) {
    /**
     * @internal
     */
    CreateAlgorithmInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAlgorithmInput = exports.CreateAlgorithmInput || (exports.CreateAlgorithmInput = {}));
var CreateAlgorithmOutput;
(function (CreateAlgorithmOutput) {
    /**
     * @internal
     */
    CreateAlgorithmOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAlgorithmOutput = exports.CreateAlgorithmOutput || (exports.CreateAlgorithmOutput = {}));
var ResourceSpec;
(function (ResourceSpec) {
    /**
     * @internal
     */
    ResourceSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceSpec = exports.ResourceSpec || (exports.ResourceSpec = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppResponse = exports.CreateAppResponse || (exports.CreateAppResponse = {}));
var ResourceInUse;
(function (ResourceInUse) {
    /**
     * @internal
     */
    ResourceInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUse = exports.ResourceInUse || (exports.ResourceInUse = {}));
var CreateAppImageConfigRequest;
(function (CreateAppImageConfigRequest) {
    /**
     * @internal
     */
    CreateAppImageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppImageConfigRequest = exports.CreateAppImageConfigRequest || (exports.CreateAppImageConfigRequest = {}));
var CreateAppImageConfigResponse;
(function (CreateAppImageConfigResponse) {
    /**
     * @internal
     */
    CreateAppImageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppImageConfigResponse = exports.CreateAppImageConfigResponse || (exports.CreateAppImageConfigResponse = {}));
var CreateArtifactRequest;
(function (CreateArtifactRequest) {
    /**
     * @internal
     */
    CreateArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateArtifactRequest = exports.CreateArtifactRequest || (exports.CreateArtifactRequest = {}));
var CreateArtifactResponse;
(function (CreateArtifactResponse) {
    /**
     * @internal
     */
    CreateArtifactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateArtifactResponse = exports.CreateArtifactResponse || (exports.CreateArtifactResponse = {}));
var ModelDeployConfig;
(function (ModelDeployConfig) {
    /**
     * @internal
     */
    ModelDeployConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelDeployConfig = exports.ModelDeployConfig || (exports.ModelDeployConfig = {}));
var ProblemType;
(function (ProblemType) {
    ProblemType["BINARY_CLASSIFICATION"] = "BinaryClassification";
    ProblemType["MULTICLASS_CLASSIFICATION"] = "MulticlassClassification";
    ProblemType["REGRESSION"] = "Regression";
})(ProblemType = exports.ProblemType || (exports.ProblemType = {}));
var CreateAutoMLJobRequest;
(function (CreateAutoMLJobRequest) {
    /**
     * @internal
     */
    CreateAutoMLJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAutoMLJobRequest = exports.CreateAutoMLJobRequest || (exports.CreateAutoMLJobRequest = {}));
var CreateAutoMLJobResponse;
(function (CreateAutoMLJobResponse) {
    /**
     * @internal
     */
    CreateAutoMLJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAutoMLJobResponse = exports.CreateAutoMLJobResponse || (exports.CreateAutoMLJobResponse = {}));
var CreateCodeRepositoryInput;
(function (CreateCodeRepositoryInput) {
    /**
     * @internal
     */
    CreateCodeRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeRepositoryInput = exports.CreateCodeRepositoryInput || (exports.CreateCodeRepositoryInput = {}));
var CreateCodeRepositoryOutput;
(function (CreateCodeRepositoryOutput) {
    /**
     * @internal
     */
    CreateCodeRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeRepositoryOutput = exports.CreateCodeRepositoryOutput || (exports.CreateCodeRepositoryOutput = {}));
var Framework;
(function (Framework) {
    Framework["DARKNET"] = "DARKNET";
    Framework["KERAS"] = "KERAS";
    Framework["MXNET"] = "MXNET";
    Framework["ONNX"] = "ONNX";
    Framework["PYTORCH"] = "PYTORCH";
    Framework["SKLEARN"] = "SKLEARN";
    Framework["TENSORFLOW"] = "TENSORFLOW";
    Framework["TFLITE"] = "TFLITE";
    Framework["XGBOOST"] = "XGBOOST";
})(Framework = exports.Framework || (exports.Framework = {}));
var InputConfig;
(function (InputConfig) {
    /**
     * @internal
     */
    InputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputConfig = exports.InputConfig || (exports.InputConfig = {}));
var TargetPlatform;
(function (TargetPlatform) {
    /**
     * @internal
     */
    TargetPlatform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetPlatform = exports.TargetPlatform || (exports.TargetPlatform = {}));
var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputConfig = exports.OutputConfig || (exports.OutputConfig = {}));
var CreateCompilationJobRequest;
(function (CreateCompilationJobRequest) {
    /**
     * @internal
     */
    CreateCompilationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCompilationJobRequest = exports.CreateCompilationJobRequest || (exports.CreateCompilationJobRequest = {}));
var CreateCompilationJobResponse;
(function (CreateCompilationJobResponse) {
    /**
     * @internal
     */
    CreateCompilationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCompilationJobResponse = exports.CreateCompilationJobResponse || (exports.CreateCompilationJobResponse = {}));
var CreateContextRequest;
(function (CreateContextRequest) {
    /**
     * @internal
     */
    CreateContextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContextRequest = exports.CreateContextRequest || (exports.CreateContextRequest = {}));
var CreateContextResponse;
(function (CreateContextResponse) {
    /**
     * @internal
     */
    CreateContextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContextResponse = exports.CreateContextResponse || (exports.CreateContextResponse = {}));
var DataQualityAppSpecification;
(function (DataQualityAppSpecification) {
    /**
     * @internal
     */
    DataQualityAppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataQualityAppSpecification = exports.DataQualityAppSpecification || (exports.DataQualityAppSpecification = {}));
var MonitoringConstraintsResource;
(function (MonitoringConstraintsResource) {
    /**
     * @internal
     */
    MonitoringConstraintsResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringConstraintsResource = exports.MonitoringConstraintsResource || (exports.MonitoringConstraintsResource = {}));
var MonitoringStatisticsResource;
(function (MonitoringStatisticsResource) {
    /**
     * @internal
     */
    MonitoringStatisticsResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringStatisticsResource = exports.MonitoringStatisticsResource || (exports.MonitoringStatisticsResource = {}));
var DataQualityBaselineConfig;
(function (DataQualityBaselineConfig) {
    /**
     * @internal
     */
    DataQualityBaselineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataQualityBaselineConfig = exports.DataQualityBaselineConfig || (exports.DataQualityBaselineConfig = {}));
var ProcessingS3DataDistributionType;
(function (ProcessingS3DataDistributionType) {
    ProcessingS3DataDistributionType["FULLYREPLICATED"] = "FullyReplicated";
    ProcessingS3DataDistributionType["SHARDEDBYS3KEY"] = "ShardedByS3Key";
})(ProcessingS3DataDistributionType = exports.ProcessingS3DataDistributionType || (exports.ProcessingS3DataDistributionType = {}));
var ProcessingS3InputMode;
(function (ProcessingS3InputMode) {
    ProcessingS3InputMode["FILE"] = "File";
    ProcessingS3InputMode["PIPE"] = "Pipe";
})(ProcessingS3InputMode = exports.ProcessingS3InputMode || (exports.ProcessingS3InputMode = {}));
var EndpointInput;
(function (EndpointInput) {
    /**
     * @internal
     */
    EndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointInput = exports.EndpointInput || (exports.EndpointInput = {}));
var DataQualityJobInput;
(function (DataQualityJobInput) {
    /**
     * @internal
     */
    DataQualityJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataQualityJobInput = exports.DataQualityJobInput || (exports.DataQualityJobInput = {}));
var ProcessingS3UploadMode;
(function (ProcessingS3UploadMode) {
    ProcessingS3UploadMode["CONTINUOUS"] = "Continuous";
    ProcessingS3UploadMode["END_OF_JOB"] = "EndOfJob";
})(ProcessingS3UploadMode = exports.ProcessingS3UploadMode || (exports.ProcessingS3UploadMode = {}));
var MonitoringS3Output;
(function (MonitoringS3Output) {
    /**
     * @internal
     */
    MonitoringS3Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringS3Output = exports.MonitoringS3Output || (exports.MonitoringS3Output = {}));
var MonitoringOutput;
(function (MonitoringOutput) {
    /**
     * @internal
     */
    MonitoringOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringOutput = exports.MonitoringOutput || (exports.MonitoringOutput = {}));
var MonitoringOutputConfig;
(function (MonitoringOutputConfig) {
    /**
     * @internal
     */
    MonitoringOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringOutputConfig = exports.MonitoringOutputConfig || (exports.MonitoringOutputConfig = {}));
var ProcessingInstanceType;
(function (ProcessingInstanceType) {
    ProcessingInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    ProcessingInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    ProcessingInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    ProcessingInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    ProcessingInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    ProcessingInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    ProcessingInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    ProcessingInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    ProcessingInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    ProcessingInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    ProcessingInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    ProcessingInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    ProcessingInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    ProcessingInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    ProcessingInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    ProcessingInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    ProcessingInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    ProcessingInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    ProcessingInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    ProcessingInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    ProcessingInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    ProcessingInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    ProcessingInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    ProcessingInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    ProcessingInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    ProcessingInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    ProcessingInstanceType["ML_R5_12XLARGE"] = "ml.r5.12xlarge";
    ProcessingInstanceType["ML_R5_16XLARGE"] = "ml.r5.16xlarge";
    ProcessingInstanceType["ML_R5_24XLARGE"] = "ml.r5.24xlarge";
    ProcessingInstanceType["ML_R5_2XLARGE"] = "ml.r5.2xlarge";
    ProcessingInstanceType["ML_R5_4XLARGE"] = "ml.r5.4xlarge";
    ProcessingInstanceType["ML_R5_8XLARGE"] = "ml.r5.8xlarge";
    ProcessingInstanceType["ML_R5_LARGE"] = "ml.r5.large";
    ProcessingInstanceType["ML_R5_XLARGE"] = "ml.r5.xlarge";
    ProcessingInstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    ProcessingInstanceType["ML_T3_LARGE"] = "ml.t3.large";
    ProcessingInstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    ProcessingInstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
})(ProcessingInstanceType = exports.ProcessingInstanceType || (exports.ProcessingInstanceType = {}));
var MonitoringClusterConfig;
(function (MonitoringClusterConfig) {
    /**
     * @internal
     */
    MonitoringClusterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringClusterConfig = exports.MonitoringClusterConfig || (exports.MonitoringClusterConfig = {}));
var MonitoringResources;
(function (MonitoringResources) {
    /**
     * @internal
     */
    MonitoringResources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringResources = exports.MonitoringResources || (exports.MonitoringResources = {}));
var MonitoringNetworkConfig;
(function (MonitoringNetworkConfig) {
    /**
     * @internal
     */
    MonitoringNetworkConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringNetworkConfig = exports.MonitoringNetworkConfig || (exports.MonitoringNetworkConfig = {}));
var MonitoringStoppingCondition;
(function (MonitoringStoppingCondition) {
    /**
     * @internal
     */
    MonitoringStoppingCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringStoppingCondition = exports.MonitoringStoppingCondition || (exports.MonitoringStoppingCondition = {}));
var CreateDataQualityJobDefinitionRequest;
(function (CreateDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateDataQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataQualityJobDefinitionRequest = exports.CreateDataQualityJobDefinitionRequest || (exports.CreateDataQualityJobDefinitionRequest = {}));
var CreateDataQualityJobDefinitionResponse;
(function (CreateDataQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateDataQualityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataQualityJobDefinitionResponse = exports.CreateDataQualityJobDefinitionResponse || (exports.CreateDataQualityJobDefinitionResponse = {}));
var EdgeOutputConfig;
(function (EdgeOutputConfig) {
    /**
     * @internal
     */
    EdgeOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgeOutputConfig = exports.EdgeOutputConfig || (exports.EdgeOutputConfig = {}));
var CreateDeviceFleetRequest;
(function (CreateDeviceFleetRequest) {
    /**
     * @internal
     */
    CreateDeviceFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceFleetRequest = exports.CreateDeviceFleetRequest || (exports.CreateDeviceFleetRequest = {}));
var JupyterServerAppSettings;
(function (JupyterServerAppSettings) {
    /**
     * @internal
     */
    JupyterServerAppSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JupyterServerAppSettings = exports.JupyterServerAppSettings || (exports.JupyterServerAppSettings = {}));
var CustomImage;
(function (CustomImage) {
    /**
     * @internal
     */
    CustomImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomImage = exports.CustomImage || (exports.CustomImage = {}));
var KernelGatewayAppSettings;
(function (KernelGatewayAppSettings) {
    /**
     * @internal
     */
    KernelGatewayAppSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KernelGatewayAppSettings = exports.KernelGatewayAppSettings || (exports.KernelGatewayAppSettings = {}));
var NotebookOutputOption;
(function (NotebookOutputOption) {
    NotebookOutputOption["Allowed"] = "Allowed";
    NotebookOutputOption["Disabled"] = "Disabled";
})(NotebookOutputOption = exports.NotebookOutputOption || (exports.NotebookOutputOption = {}));
var SharingSettings;
(function (SharingSettings) {
    /**
     * @internal
     */
    SharingSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SharingSettings = exports.SharingSettings || (exports.SharingSettings = {}));
var TensorBoardAppSettings;
(function (TensorBoardAppSettings) {
    /**
     * @internal
     */
    TensorBoardAppSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TensorBoardAppSettings = exports.TensorBoardAppSettings || (exports.TensorBoardAppSettings = {}));
var UserSettings;
(function (UserSettings) {
    /**
     * @internal
     */
    UserSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserSettings = exports.UserSettings || (exports.UserSettings = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var CreateDomainResponse;
(function (CreateDomainResponse) {
    /**
     * @internal
     */
    CreateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResponse = exports.CreateDomainResponse || (exports.CreateDomainResponse = {}));
var CreateEdgePackagingJobRequest;
(function (CreateEdgePackagingJobRequest) {
    /**
     * @internal
     */
    CreateEdgePackagingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEdgePackagingJobRequest = exports.CreateEdgePackagingJobRequest || (exports.CreateEdgePackagingJobRequest = {}));
var CreateEndpointInput;
(function (CreateEndpointInput) {
    /**
     * @internal
     */
    CreateEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointInput = exports.CreateEndpointInput || (exports.CreateEndpointInput = {}));
var CreateEndpointOutput;
(function (CreateEndpointOutput) {
    /**
     * @internal
     */
    CreateEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointOutput = exports.CreateEndpointOutput || (exports.CreateEndpointOutput = {}));
var DataCaptureConfig;
(function (DataCaptureConfig) {
    /**
     * @internal
     */
    DataCaptureConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataCaptureConfig = exports.DataCaptureConfig || (exports.DataCaptureConfig = {}));
var ProductionVariantAcceleratorType;
(function (ProductionVariantAcceleratorType) {
    ProductionVariantAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    ProductionVariantAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    ProductionVariantAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    ProductionVariantAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    ProductionVariantAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    ProductionVariantAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(ProductionVariantAcceleratorType = exports.ProductionVariantAcceleratorType || (exports.ProductionVariantAcceleratorType = {}));
var ProductionVariantCoreDumpConfig;
(function (ProductionVariantCoreDumpConfig) {
    /**
     * @internal
     */
    ProductionVariantCoreDumpConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductionVariantCoreDumpConfig = exports.ProductionVariantCoreDumpConfig || (exports.ProductionVariantCoreDumpConfig = {}));
var ProductionVariant;
(function (ProductionVariant) {
    /**
     * @internal
     */
    ProductionVariant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductionVariant = exports.ProductionVariant || (exports.ProductionVariant = {}));
var CreateEndpointConfigInput;
(function (CreateEndpointConfigInput) {
    /**
     * @internal
     */
    CreateEndpointConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointConfigInput = exports.CreateEndpointConfigInput || (exports.CreateEndpointConfigInput = {}));
var CreateEndpointConfigOutput;
(function (CreateEndpointConfigOutput) {
    /**
     * @internal
     */
    CreateEndpointConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointConfigOutput = exports.CreateEndpointConfigOutput || (exports.CreateEndpointConfigOutput = {}));
var CreateExperimentRequest;
(function (CreateExperimentRequest) {
    /**
     * @internal
     */
    CreateExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentRequest = exports.CreateExperimentRequest || (exports.CreateExperimentRequest = {}));
var CreateExperimentResponse;
(function (CreateExperimentResponse) {
    /**
     * @internal
     */
    CreateExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExperimentResponse = exports.CreateExperimentResponse || (exports.CreateExperimentResponse = {}));
var FeatureType;
(function (FeatureType) {
    FeatureType["FRACTIONAL"] = "Fractional";
    FeatureType["INTEGRAL"] = "Integral";
    FeatureType["STRING"] = "String";
})(FeatureType = exports.FeatureType || (exports.FeatureType = {}));
var FeatureDefinition;
(function (FeatureDefinition) {
    /**
     * @internal
     */
    FeatureDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureDefinition = exports.FeatureDefinition || (exports.FeatureDefinition = {}));
var DataCatalogConfig;
(function (DataCatalogConfig) {
    /**
     * @internal
     */
    DataCatalogConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataCatalogConfig = exports.DataCatalogConfig || (exports.DataCatalogConfig = {}));
var S3StorageConfig;
(function (S3StorageConfig) {
    /**
     * @internal
     */
    S3StorageConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3StorageConfig = exports.S3StorageConfig || (exports.S3StorageConfig = {}));
var OfflineStoreConfig;
(function (OfflineStoreConfig) {
    /**
     * @internal
     */
    OfflineStoreConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OfflineStoreConfig = exports.OfflineStoreConfig || (exports.OfflineStoreConfig = {}));
var OnlineStoreSecurityConfig;
(function (OnlineStoreSecurityConfig) {
    /**
     * @internal
     */
    OnlineStoreSecurityConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnlineStoreSecurityConfig = exports.OnlineStoreSecurityConfig || (exports.OnlineStoreSecurityConfig = {}));
var OnlineStoreConfig;
(function (OnlineStoreConfig) {
    /**
     * @internal
     */
    OnlineStoreConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnlineStoreConfig = exports.OnlineStoreConfig || (exports.OnlineStoreConfig = {}));
var CreateFeatureGroupRequest;
(function (CreateFeatureGroupRequest) {
    /**
     * @internal
     */
    CreateFeatureGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFeatureGroupRequest = exports.CreateFeatureGroupRequest || (exports.CreateFeatureGroupRequest = {}));
var CreateFeatureGroupResponse;
(function (CreateFeatureGroupResponse) {
    /**
     * @internal
     */
    CreateFeatureGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFeatureGroupResponse = exports.CreateFeatureGroupResponse || (exports.CreateFeatureGroupResponse = {}));
var HumanLoopActivationConditionsConfig;
(function (HumanLoopActivationConditionsConfig) {
    /**
     * @internal
     */
    HumanLoopActivationConditionsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopActivationConditionsConfig = exports.HumanLoopActivationConditionsConfig || (exports.HumanLoopActivationConditionsConfig = {}));
var HumanLoopActivationConfig;
(function (HumanLoopActivationConfig) {
    /**
     * @internal
     */
    HumanLoopActivationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopActivationConfig = exports.HumanLoopActivationConfig || (exports.HumanLoopActivationConfig = {}));
var USD;
(function (USD) {
    /**
     * @internal
     */
    USD.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(USD = exports.USD || (exports.USD = {}));
var PublicWorkforceTaskPrice;
(function (PublicWorkforceTaskPrice) {
    /**
     * @internal
     */
    PublicWorkforceTaskPrice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicWorkforceTaskPrice = exports.PublicWorkforceTaskPrice || (exports.PublicWorkforceTaskPrice = {}));
var HumanLoopConfig;
(function (HumanLoopConfig) {
    /**
     * @internal
     */
    HumanLoopConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopConfig = exports.HumanLoopConfig || (exports.HumanLoopConfig = {}));
var HumanLoopRequestSource;
(function (HumanLoopRequestSource) {
    /**
     * @internal
     */
    HumanLoopRequestSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopRequestSource = exports.HumanLoopRequestSource || (exports.HumanLoopRequestSource = {}));
var FlowDefinitionOutputConfig;
(function (FlowDefinitionOutputConfig) {
    /**
     * @internal
     */
    FlowDefinitionOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowDefinitionOutputConfig = exports.FlowDefinitionOutputConfig || (exports.FlowDefinitionOutputConfig = {}));
var CreateFlowDefinitionRequest;
(function (CreateFlowDefinitionRequest) {
    /**
     * @internal
     */
    CreateFlowDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowDefinitionRequest = exports.CreateFlowDefinitionRequest || (exports.CreateFlowDefinitionRequest = {}));
var CreateFlowDefinitionResponse;
(function (CreateFlowDefinitionResponse) {
    /**
     * @internal
     */
    CreateFlowDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowDefinitionResponse = exports.CreateFlowDefinitionResponse || (exports.CreateFlowDefinitionResponse = {}));
var UiTemplate;
(function (UiTemplate) {
    /**
     * @internal
     */
    UiTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UiTemplate = exports.UiTemplate || (exports.UiTemplate = {}));
var CreateHumanTaskUiRequest;
(function (CreateHumanTaskUiRequest) {
    /**
     * @internal
     */
    CreateHumanTaskUiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHumanTaskUiRequest = exports.CreateHumanTaskUiRequest || (exports.CreateHumanTaskUiRequest = {}));
var CreateHumanTaskUiResponse;
(function (CreateHumanTaskUiResponse) {
    /**
     * @internal
     */
    CreateHumanTaskUiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHumanTaskUiResponse = exports.CreateHumanTaskUiResponse || (exports.CreateHumanTaskUiResponse = {}));
var IntegerParameterRange;
(function (IntegerParameterRange) {
    /**
     * @internal
     */
    IntegerParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegerParameterRange = exports.IntegerParameterRange || (exports.IntegerParameterRange = {}));
var ParameterRanges;
(function (ParameterRanges) {
    /**
     * @internal
     */
    ParameterRanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterRanges = exports.ParameterRanges || (exports.ParameterRanges = {}));
var ResourceLimits;
(function (ResourceLimits) {
    /**
     * @internal
     */
    ResourceLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimits = exports.ResourceLimits || (exports.ResourceLimits = {}));
var HyperParameterTuningJobStrategyType;
(function (HyperParameterTuningJobStrategyType) {
    HyperParameterTuningJobStrategyType["BAYESIAN"] = "Bayesian";
    HyperParameterTuningJobStrategyType["RANDOM"] = "Random";
})(HyperParameterTuningJobStrategyType = exports.HyperParameterTuningJobStrategyType || (exports.HyperParameterTuningJobStrategyType = {}));
var TrainingJobEarlyStoppingType;
(function (TrainingJobEarlyStoppingType) {
    TrainingJobEarlyStoppingType["AUTO"] = "Auto";
    TrainingJobEarlyStoppingType["OFF"] = "Off";
})(TrainingJobEarlyStoppingType = exports.TrainingJobEarlyStoppingType || (exports.TrainingJobEarlyStoppingType = {}));
var TuningJobCompletionCriteria;
(function (TuningJobCompletionCriteria) {
    /**
     * @internal
     */
    TuningJobCompletionCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TuningJobCompletionCriteria = exports.TuningJobCompletionCriteria || (exports.TuningJobCompletionCriteria = {}));
var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTuningJobConfig = exports.HyperParameterTuningJobConfig || (exports.HyperParameterTuningJobConfig = {}));
var HyperParameterAlgorithmSpecification;
(function (HyperParameterAlgorithmSpecification) {
    /**
     * @internal
     */
    HyperParameterAlgorithmSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterAlgorithmSpecification = exports.HyperParameterAlgorithmSpecification || (exports.HyperParameterAlgorithmSpecification = {}));
var RetryStrategy;
(function (RetryStrategy) {
    /**
     * @internal
     */
    RetryStrategy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryStrategy = exports.RetryStrategy || (exports.RetryStrategy = {}));
var HyperParameterTrainingJobDefinition;
(function (HyperParameterTrainingJobDefinition) {
    /**
     * @internal
     */
    HyperParameterTrainingJobDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTrainingJobDefinition = exports.HyperParameterTrainingJobDefinition || (exports.HyperParameterTrainingJobDefinition = {}));
var ParentHyperParameterTuningJob;
(function (ParentHyperParameterTuningJob) {
    /**
     * @internal
     */
    ParentHyperParameterTuningJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentHyperParameterTuningJob = exports.ParentHyperParameterTuningJob || (exports.ParentHyperParameterTuningJob = {}));
var HyperParameterTuningJobWarmStartType;
(function (HyperParameterTuningJobWarmStartType) {
    HyperParameterTuningJobWarmStartType["IDENTICAL_DATA_AND_ALGORITHM"] = "IdenticalDataAndAlgorithm";
    HyperParameterTuningJobWarmStartType["TRANSFER_LEARNING"] = "TransferLearning";
})(HyperParameterTuningJobWarmStartType = exports.HyperParameterTuningJobWarmStartType || (exports.HyperParameterTuningJobWarmStartType = {}));
var HyperParameterTuningJobWarmStartConfig;
(function (HyperParameterTuningJobWarmStartConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobWarmStartConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTuningJobWarmStartConfig = exports.HyperParameterTuningJobWarmStartConfig || (exports.HyperParameterTuningJobWarmStartConfig = {}));
var CreateHyperParameterTuningJobRequest;
(function (CreateHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    CreateHyperParameterTuningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHyperParameterTuningJobRequest = exports.CreateHyperParameterTuningJobRequest || (exports.CreateHyperParameterTuningJobRequest = {}));
var CreateHyperParameterTuningJobResponse;
(function (CreateHyperParameterTuningJobResponse) {
    /**
     * @internal
     */
    CreateHyperParameterTuningJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHyperParameterTuningJobResponse = exports.CreateHyperParameterTuningJobResponse || (exports.CreateHyperParameterTuningJobResponse = {}));
var CreateImageRequest;
(function (CreateImageRequest) {
    /**
     * @internal
     */
    CreateImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageRequest = exports.CreateImageRequest || (exports.CreateImageRequest = {}));
var CreateImageResponse;
(function (CreateImageResponse) {
    /**
     * @internal
     */
    CreateImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageResponse = exports.CreateImageResponse || (exports.CreateImageResponse = {}));
var CreateImageVersionRequest;
(function (CreateImageVersionRequest) {
    /**
     * @internal
     */
    CreateImageVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageVersionRequest = exports.CreateImageVersionRequest || (exports.CreateImageVersionRequest = {}));
var CreateImageVersionResponse;
(function (CreateImageVersionResponse) {
    /**
     * @internal
     */
    CreateImageVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageVersionResponse = exports.CreateImageVersionResponse || (exports.CreateImageVersionResponse = {}));
var UiConfig;
(function (UiConfig) {
    /**
     * @internal
     */
    UiConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UiConfig = exports.UiConfig || (exports.UiConfig = {}));
var HumanTaskConfig;
(function (HumanTaskConfig) {
    /**
     * @internal
     */
    HumanTaskConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanTaskConfig = exports.HumanTaskConfig || (exports.HumanTaskConfig = {}));
var LabelingJobDataAttributes;
(function (LabelingJobDataAttributes) {
    /**
     * @internal
     */
    LabelingJobDataAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobDataAttributes = exports.LabelingJobDataAttributes || (exports.LabelingJobDataAttributes = {}));
var LabelingJobS3DataSource;
(function (LabelingJobS3DataSource) {
    /**
     * @internal
     */
    LabelingJobS3DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobS3DataSource = exports.LabelingJobS3DataSource || (exports.LabelingJobS3DataSource = {}));
var LabelingJobSnsDataSource;
(function (LabelingJobSnsDataSource) {
    /**
     * @internal
     */
    LabelingJobSnsDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobSnsDataSource = exports.LabelingJobSnsDataSource || (exports.LabelingJobSnsDataSource = {}));
var LabelingJobDataSource;
(function (LabelingJobDataSource) {
    /**
     * @internal
     */
    LabelingJobDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobDataSource = exports.LabelingJobDataSource || (exports.LabelingJobDataSource = {}));
var LabelingJobInputConfig;
(function (LabelingJobInputConfig) {
    /**
     * @internal
     */
    LabelingJobInputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobInputConfig = exports.LabelingJobInputConfig || (exports.LabelingJobInputConfig = {}));
var LabelingJobResourceConfig;
(function (LabelingJobResourceConfig) {
    /**
     * @internal
     */
    LabelingJobResourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobResourceConfig = exports.LabelingJobResourceConfig || (exports.LabelingJobResourceConfig = {}));
var LabelingJobAlgorithmsConfig;
(function (LabelingJobAlgorithmsConfig) {
    /**
     * @internal
     */
    LabelingJobAlgorithmsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobAlgorithmsConfig = exports.LabelingJobAlgorithmsConfig || (exports.LabelingJobAlgorithmsConfig = {}));
var LabelingJobOutputConfig;
(function (LabelingJobOutputConfig) {
    /**
     * @internal
     */
    LabelingJobOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobOutputConfig = exports.LabelingJobOutputConfig || (exports.LabelingJobOutputConfig = {}));
var LabelingJobStoppingConditions;
(function (LabelingJobStoppingConditions) {
    /**
     * @internal
     */
    LabelingJobStoppingConditions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobStoppingConditions = exports.LabelingJobStoppingConditions || (exports.LabelingJobStoppingConditions = {}));
var CreateLabelingJobRequest;
(function (CreateLabelingJobRequest) {
    /**
     * @internal
     */
    CreateLabelingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLabelingJobRequest = exports.CreateLabelingJobRequest || (exports.CreateLabelingJobRequest = {}));
var CreateLabelingJobResponse;
(function (CreateLabelingJobResponse) {
    /**
     * @internal
     */
    CreateLabelingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLabelingJobResponse = exports.CreateLabelingJobResponse || (exports.CreateLabelingJobResponse = {}));
var InferenceExecutionMode;
(function (InferenceExecutionMode) {
    InferenceExecutionMode["DIRECT"] = "Direct";
    InferenceExecutionMode["SERIAL"] = "Serial";
})(InferenceExecutionMode = exports.InferenceExecutionMode || (exports.InferenceExecutionMode = {}));
var InferenceExecutionConfig;
(function (InferenceExecutionConfig) {
    /**
     * @internal
     */
    InferenceExecutionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceExecutionConfig = exports.InferenceExecutionConfig || (exports.InferenceExecutionConfig = {}));
var CreateModelInput;
(function (CreateModelInput) {
    /**
     * @internal
     */
    CreateModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelInput = exports.CreateModelInput || (exports.CreateModelInput = {}));
var CreateModelOutput;
(function (CreateModelOutput) {
    /**
     * @internal
     */
    CreateModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelOutput = exports.CreateModelOutput || (exports.CreateModelOutput = {}));
var ModelBiasAppSpecification;
(function (ModelBiasAppSpecification) {
    /**
     * @internal
     */
    ModelBiasAppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelBiasAppSpecification = exports.ModelBiasAppSpecification || (exports.ModelBiasAppSpecification = {}));
var ModelBiasBaselineConfig;
(function (ModelBiasBaselineConfig) {
    /**
     * @internal
     */
    ModelBiasBaselineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelBiasBaselineConfig = exports.ModelBiasBaselineConfig || (exports.ModelBiasBaselineConfig = {}));
var MonitoringGroundTruthS3Input;
(function (MonitoringGroundTruthS3Input) {
    /**
     * @internal
     */
    MonitoringGroundTruthS3Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringGroundTruthS3Input = exports.MonitoringGroundTruthS3Input || (exports.MonitoringGroundTruthS3Input = {}));
var ModelBiasJobInput;
(function (ModelBiasJobInput) {
    /**
     * @internal
     */
    ModelBiasJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelBiasJobInput = exports.ModelBiasJobInput || (exports.ModelBiasJobInput = {}));
var CreateModelBiasJobDefinitionRequest;
(function (CreateModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelBiasJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelBiasJobDefinitionRequest = exports.CreateModelBiasJobDefinitionRequest || (exports.CreateModelBiasJobDefinitionRequest = {}));
var CreateModelBiasJobDefinitionResponse;
(function (CreateModelBiasJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelBiasJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelBiasJobDefinitionResponse = exports.CreateModelBiasJobDefinitionResponse || (exports.CreateModelBiasJobDefinitionResponse = {}));
var ModelExplainabilityAppSpecification;
(function (ModelExplainabilityAppSpecification) {
    /**
     * @internal
     */
    ModelExplainabilityAppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelExplainabilityAppSpecification = exports.ModelExplainabilityAppSpecification || (exports.ModelExplainabilityAppSpecification = {}));
var ModelExplainabilityBaselineConfig;
(function (ModelExplainabilityBaselineConfig) {
    /**
     * @internal
     */
    ModelExplainabilityBaselineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelExplainabilityBaselineConfig = exports.ModelExplainabilityBaselineConfig || (exports.ModelExplainabilityBaselineConfig = {}));
var ModelExplainabilityJobInput;
(function (ModelExplainabilityJobInput) {
    /**
     * @internal
     */
    ModelExplainabilityJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelExplainabilityJobInput = exports.ModelExplainabilityJobInput || (exports.ModelExplainabilityJobInput = {}));
var CreateModelExplainabilityJobDefinitionRequest;
(function (CreateModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelExplainabilityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelExplainabilityJobDefinitionRequest = exports.CreateModelExplainabilityJobDefinitionRequest || (exports.CreateModelExplainabilityJobDefinitionRequest = {}));
var CreateModelExplainabilityJobDefinitionResponse;
(function (CreateModelExplainabilityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelExplainabilityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelExplainabilityJobDefinitionResponse = exports.CreateModelExplainabilityJobDefinitionResponse || (exports.CreateModelExplainabilityJobDefinitionResponse = {}));
var ModelApprovalStatus;
(function (ModelApprovalStatus) {
    ModelApprovalStatus["APPROVED"] = "Approved";
    ModelApprovalStatus["PENDING_MANUAL_APPROVAL"] = "PendingManualApproval";
    ModelApprovalStatus["REJECTED"] = "Rejected";
})(ModelApprovalStatus = exports.ModelApprovalStatus || (exports.ModelApprovalStatus = {}));
var Explainability;
(function (Explainability) {
    /**
     * @internal
     */
    Explainability.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Explainability = exports.Explainability || (exports.Explainability = {}));
//# sourceMappingURL=models_0.js.map