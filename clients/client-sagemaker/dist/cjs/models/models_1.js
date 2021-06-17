"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessingS3CompressionType = exports.DatasetDefinition = exports.RedshiftDatasetDefinition = exports.RedshiftResultFormat = exports.RedshiftResultCompressionType = exports.InputMode = exports.DataDistributionType = exports.ExperimentConfig = exports.CreatePresignedNotebookInstanceUrlOutput = exports.CreatePresignedNotebookInstanceUrlInput = exports.CreatePresignedDomainUrlResponse = exports.CreatePresignedDomainUrlRequest = exports.CreatePipelineResponse = exports.CreatePipelineRequest = exports.CreateNotebookInstanceLifecycleConfigOutput = exports.CreateNotebookInstanceLifecycleConfigInput = exports.NotebookInstanceLifecycleHook = exports.CreateNotebookInstanceOutput = exports.CreateNotebookInstanceInput = exports.RootAccess = exports._InstanceType = exports.DirectInternetAccess = exports.NotebookInstanceAcceleratorType = exports.CreateMonitoringScheduleResponse = exports.CreateMonitoringScheduleRequest = exports.MonitoringScheduleConfig = exports.ScheduleConfig = exports.MonitoringType = exports.MonitoringJobDefinition = exports.NetworkConfig = exports.MonitoringInput = exports.MonitoringAppSpecification = exports.MonitoringBaselineConfig = exports.CreateModelQualityJobDefinitionResponse = exports.CreateModelQualityJobDefinitionRequest = exports.ModelQualityJobInput = exports.ModelQualityBaselineConfig = exports.ModelQualityAppSpecification = exports.MonitoringProblemType = exports.CreateModelPackageGroupOutput = exports.CreateModelPackageGroupInput = exports.CreateModelPackageOutput = exports.CreateModelPackageInput = exports.ModelPackageValidationSpecification = exports.ModelPackageValidationProfile = exports.SourceAlgorithmSpecification = exports.SourceAlgorithm = exports.ModelMetrics = exports.ModelQuality = exports.ModelDataQuality = void 0;
exports.DebugRuleEvaluationStatus = exports.RuleEvaluationStatus = exports.DataCaptureConfigSummary = exports.CreateWorkteamResponse = exports.CreateWorkteamRequest = exports.NotificationConfiguration = exports.MemberDefinition = exports.OidcMemberDefinition = exports.CreateWorkforceResponse = exports.CreateWorkforceRequest = exports.SourceIpConfig = exports.OidcConfig = exports.CreateUserProfileResponse = exports.CreateUserProfileRequest = exports.CreateTrialComponentResponse = exports.CreateTrialComponentRequest = exports.TrialComponentStatus = exports.TrialComponentPrimaryStatus = exports.TrialComponentParameterValue = exports.TrialComponentArtifact = exports.CreateTrialResponse = exports.CreateTrialRequest = exports.CreateTransformJobResponse = exports.CreateTransformJobRequest = exports.ModelClientConfig = exports.DataProcessing = exports.JoinSource = exports.CreateTrainingJobResponse = exports.CreateTrainingJobRequest = exports.TensorBoardOutputConfig = exports.ProfilerRuleConfiguration = exports.ProfilerConfig = exports.DebugRuleConfiguration = exports.DebugHookConfig = exports.CreateProjectOutput = exports.CreateProjectInput = exports.ServiceCatalogProvisioningDetails = exports.ProvisioningParameter = exports.CreateProcessingJobResponse = exports.CreateProcessingJobRequest = exports.ProcessingStoppingCondition = exports.ProcessingResources = exports.ProcessingClusterConfig = exports.ProcessingOutputConfig = exports.ProcessingOutput = exports.ProcessingS3Output = exports.ProcessingFeatureStoreOutput = exports.ProcessingInput = exports.ProcessingS3Input = exports.ProcessingS3DataType = void 0;
exports.DeleteUserProfileRequest = exports.DeleteTrialComponentResponse = exports.DeleteTrialComponentRequest = exports.DeleteTrialResponse = exports.DeleteTrialRequest = exports.DeleteTagsOutput = exports.DeleteTagsInput = exports.DeleteProjectInput = exports.DeletePipelineResponse = exports.DeletePipelineRequest = exports.DeleteNotebookInstanceLifecycleConfigInput = exports.DeleteNotebookInstanceInput = exports.DeleteMonitoringScheduleRequest = exports.DeleteModelQualityJobDefinitionRequest = exports.DeleteModelPackageGroupPolicyInput = exports.DeleteModelPackageGroupInput = exports.DeleteModelPackageInput = exports.DeleteModelExplainabilityJobDefinitionRequest = exports.DeleteModelBiasJobDefinitionRequest = exports.DeleteModelInput = exports.DeleteImageVersionResponse = exports.DeleteImageVersionRequest = exports.DeleteImageResponse = exports.DeleteImageRequest = exports.DeleteHumanTaskUiResponse = exports.DeleteHumanTaskUiRequest = exports.DeleteFlowDefinitionResponse = exports.DeleteFlowDefinitionRequest = exports.DeleteFeatureGroupRequest = exports.DeleteExperimentResponse = exports.DeleteExperimentRequest = exports.DeleteEndpointConfigInput = exports.DeleteEndpointInput = exports.DeleteDomainRequest = exports.RetentionPolicy = exports.RetentionType = exports.DeleteDeviceFleetRequest = exports.DeleteDataQualityJobDefinitionRequest = exports.DeleteContextResponse = exports.DeleteContextRequest = exports.DeleteCodeRepositoryInput = exports.DeleteAssociationResponse = exports.DeleteAssociationRequest = exports.DeleteArtifactResponse = exports.DeleteArtifactRequest = exports.DeleteAppImageConfigRequest = exports.DeleteAppRequest = exports.DeleteAlgorithmInput = exports.DeleteActionResponse = exports.DeleteActionRequest = void 0;
exports.ExperimentSource = exports.DescribeExperimentRequest = exports.DescribeEndpointConfigOutput = exports.DescribeEndpointConfigInput = exports.DescribeEndpointOutput = exports.ProductionVariantSummary = exports.EndpointStatus = exports.DescribeEndpointInput = exports.DescribeEdgePackagingJobResponse = exports.EdgePackagingJobStatus = exports.DescribeEdgePackagingJobRequest = exports.DescribeDomainResponse = exports.DomainStatus = exports.DescribeDomainRequest = exports.DescribeDeviceFleetResponse = exports.DescribeDeviceFleetRequest = exports.DescribeDeviceResponse = exports.EdgeModel = exports.DescribeDeviceRequest = exports.DescribeDataQualityJobDefinitionResponse = exports.DescribeDataQualityJobDefinitionRequest = exports.DescribeContextResponse = exports.DescribeContextRequest = exports.DescribeCompilationJobResponse = exports.ModelDigests = exports.ModelArtifacts = exports.DescribeCompilationJobRequest = exports.DescribeCodeRepositoryOutput = exports.DescribeCodeRepositoryInput = exports.DescribeAutoMLJobResponse = exports.ResolvedAttributes = exports.ModelDeployResult = exports.DescribeAutoMLJobRequest = exports.DescribeArtifactResponse = exports.DescribeArtifactRequest = exports.DescribeAppImageConfigResponse = exports.DescribeAppImageConfigRequest = exports.DescribeAppResponse = exports.DescribeAppRequest = exports.DescribeAlgorithmOutput = exports.DescribeAlgorithmInput = exports.DescribeActionResponse = exports.DescribeActionRequest = exports.DeregisterDevicesRequest = exports.DeploymentConfig = exports.DeployedImage = exports.DeleteWorkteamResponse = exports.DeleteWorkteamRequest = exports.DeleteWorkforceResponse = exports.DeleteWorkforceRequest = void 0;
exports.DescribeMonitoringScheduleRequest = exports.DescribeModelQualityJobDefinitionResponse = exports.DescribeModelQualityJobDefinitionRequest = exports.DescribeModelPackageGroupOutput = exports.ModelPackageGroupStatus = exports.DescribeModelPackageGroupInput = exports.DescribeModelPackageOutput = exports.ModelPackageStatusDetails = exports.ModelPackageStatusItem = exports.DetailedModelPackageStatus = exports.ModelPackageStatus = exports.DescribeModelPackageInput = exports.DescribeModelExplainabilityJobDefinitionResponse = exports.DescribeModelExplainabilityJobDefinitionRequest = exports.DescribeModelBiasJobDefinitionResponse = exports.DescribeModelBiasJobDefinitionRequest = exports.DescribeModelOutput = exports.DescribeModelInput = exports.DescribeLabelingJobResponse = exports.LabelingJobStatus = exports.LabelingJobOutput = exports.LabelCounters = exports.DescribeLabelingJobRequest = exports.DescribeImageVersionResponse = exports.ImageVersionStatus = exports.DescribeImageVersionRequest = exports.DescribeImageResponse = exports.ImageStatus = exports.DescribeImageRequest = exports.DescribeHyperParameterTuningJobResponse = exports.TrainingJobStatusCounters = exports.ObjectiveStatusCounters = exports.HyperParameterTuningJobStatus = exports.HyperParameterTrainingJobSummary = exports.TrainingJobStatus = exports.FinalHyperParameterTuningJobObjectiveMetric = exports.DescribeHyperParameterTuningJobRequest = exports.DescribeHumanTaskUiResponse = exports.UiTemplateInfo = exports.HumanTaskUiStatus = exports.DescribeHumanTaskUiRequest = exports.DescribeFlowDefinitionResponse = exports.FlowDefinitionStatus = exports.DescribeFlowDefinitionRequest = exports.DescribeFeatureGroupResponse = exports.OfflineStoreStatus = exports.OfflineStoreStatusValue = exports.FeatureGroupStatus = exports.DescribeFeatureGroupRequest = exports.DescribeExperimentResponse = void 0;
exports.Workforce = exports.OidcConfigForResponse = exports.DescribeWorkforceRequest = exports.DescribeUserProfileResponse = exports.UserProfileStatus = exports.DescribeUserProfileRequest = exports.DescribeTrialComponentResponse = exports.TrialComponentSource = exports.TrialComponentMetricSummary = exports.DescribeTrialComponentRequest = exports.DescribeTrialResponse = exports.TrialSource = exports.DescribeTrialRequest = exports.DescribeTransformJobResponse = exports.TransformJobStatus = exports.DescribeTransformJobRequest = exports.DescribeTrainingJobResponse = exports.SecondaryStatusTransition = exports.SecondaryStatus = exports.ProfilingStatus = exports.ProfilerRuleEvaluationStatus = exports.MetricData = exports.DescribeTrainingJobRequest = exports.DescribeSubscribedWorkteamResponse = exports.SubscribedWorkteam = exports.DescribeSubscribedWorkteamRequest = exports.DescribeProjectOutput = exports.ServiceCatalogProvisionedProductDetails = exports.ProjectStatus = exports.DescribeProjectInput = exports.DescribeProcessingJobResponse = exports.ProcessingJobStatus = exports.DescribeProcessingJobRequest = exports.DescribePipelineExecutionResponse = exports.PipelineExecutionStatus = exports.DescribePipelineExecutionRequest = exports.DescribePipelineDefinitionForExecutionResponse = exports.DescribePipelineDefinitionForExecutionRequest = exports.DescribePipelineResponse = exports.PipelineStatus = exports.DescribePipelineRequest = exports.DescribeNotebookInstanceLifecycleConfigOutput = exports.DescribeNotebookInstanceLifecycleConfigInput = exports.DescribeNotebookInstanceOutput = exports.NotebookInstanceStatus = exports.DescribeNotebookInstanceInput = exports.DescribeMonitoringScheduleResponse = exports.ScheduleStatus = exports.MonitoringExecutionSummary = exports.ExecutionStatus = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ModelDataQuality;
(function (ModelDataQuality) {
    /**
     * @internal
     */
    ModelDataQuality.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelDataQuality = exports.ModelDataQuality || (exports.ModelDataQuality = {}));
var ModelQuality;
(function (ModelQuality) {
    /**
     * @internal
     */
    ModelQuality.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelQuality = exports.ModelQuality || (exports.ModelQuality = {}));
var ModelMetrics;
(function (ModelMetrics) {
    /**
     * @internal
     */
    ModelMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelMetrics = exports.ModelMetrics || (exports.ModelMetrics = {}));
var SourceAlgorithm;
(function (SourceAlgorithm) {
    /**
     * @internal
     */
    SourceAlgorithm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceAlgorithm = exports.SourceAlgorithm || (exports.SourceAlgorithm = {}));
var SourceAlgorithmSpecification;
(function (SourceAlgorithmSpecification) {
    /**
     * @internal
     */
    SourceAlgorithmSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceAlgorithmSpecification = exports.SourceAlgorithmSpecification || (exports.SourceAlgorithmSpecification = {}));
var ModelPackageValidationProfile;
(function (ModelPackageValidationProfile) {
    /**
     * @internal
     */
    ModelPackageValidationProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageValidationProfile = exports.ModelPackageValidationProfile || (exports.ModelPackageValidationProfile = {}));
var ModelPackageValidationSpecification;
(function (ModelPackageValidationSpecification) {
    /**
     * @internal
     */
    ModelPackageValidationSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageValidationSpecification = exports.ModelPackageValidationSpecification || (exports.ModelPackageValidationSpecification = {}));
var CreateModelPackageInput;
(function (CreateModelPackageInput) {
    /**
     * @internal
     */
    CreateModelPackageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelPackageInput = exports.CreateModelPackageInput || (exports.CreateModelPackageInput = {}));
var CreateModelPackageOutput;
(function (CreateModelPackageOutput) {
    /**
     * @internal
     */
    CreateModelPackageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelPackageOutput = exports.CreateModelPackageOutput || (exports.CreateModelPackageOutput = {}));
var CreateModelPackageGroupInput;
(function (CreateModelPackageGroupInput) {
    /**
     * @internal
     */
    CreateModelPackageGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelPackageGroupInput = exports.CreateModelPackageGroupInput || (exports.CreateModelPackageGroupInput = {}));
var CreateModelPackageGroupOutput;
(function (CreateModelPackageGroupOutput) {
    /**
     * @internal
     */
    CreateModelPackageGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelPackageGroupOutput = exports.CreateModelPackageGroupOutput || (exports.CreateModelPackageGroupOutput = {}));
var MonitoringProblemType;
(function (MonitoringProblemType) {
    MonitoringProblemType["BINARY_CLASSIFICATION"] = "BinaryClassification";
    MonitoringProblemType["MULTICLASS_CLASSIFICATION"] = "MulticlassClassification";
    MonitoringProblemType["REGRESSION"] = "Regression";
})(MonitoringProblemType = exports.MonitoringProblemType || (exports.MonitoringProblemType = {}));
var ModelQualityAppSpecification;
(function (ModelQualityAppSpecification) {
    /**
     * @internal
     */
    ModelQualityAppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelQualityAppSpecification = exports.ModelQualityAppSpecification || (exports.ModelQualityAppSpecification = {}));
var ModelQualityBaselineConfig;
(function (ModelQualityBaselineConfig) {
    /**
     * @internal
     */
    ModelQualityBaselineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelQualityBaselineConfig = exports.ModelQualityBaselineConfig || (exports.ModelQualityBaselineConfig = {}));
var ModelQualityJobInput;
(function (ModelQualityJobInput) {
    /**
     * @internal
     */
    ModelQualityJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelQualityJobInput = exports.ModelQualityJobInput || (exports.ModelQualityJobInput = {}));
var CreateModelQualityJobDefinitionRequest;
(function (CreateModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelQualityJobDefinitionRequest = exports.CreateModelQualityJobDefinitionRequest || (exports.CreateModelQualityJobDefinitionRequest = {}));
var CreateModelQualityJobDefinitionResponse;
(function (CreateModelQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelQualityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelQualityJobDefinitionResponse = exports.CreateModelQualityJobDefinitionResponse || (exports.CreateModelQualityJobDefinitionResponse = {}));
var MonitoringBaselineConfig;
(function (MonitoringBaselineConfig) {
    /**
     * @internal
     */
    MonitoringBaselineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringBaselineConfig = exports.MonitoringBaselineConfig || (exports.MonitoringBaselineConfig = {}));
var MonitoringAppSpecification;
(function (MonitoringAppSpecification) {
    /**
     * @internal
     */
    MonitoringAppSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringAppSpecification = exports.MonitoringAppSpecification || (exports.MonitoringAppSpecification = {}));
var MonitoringInput;
(function (MonitoringInput) {
    /**
     * @internal
     */
    MonitoringInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringInput = exports.MonitoringInput || (exports.MonitoringInput = {}));
var NetworkConfig;
(function (NetworkConfig) {
    /**
     * @internal
     */
    NetworkConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConfig = exports.NetworkConfig || (exports.NetworkConfig = {}));
var MonitoringJobDefinition;
(function (MonitoringJobDefinition) {
    /**
     * @internal
     */
    MonitoringJobDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringJobDefinition = exports.MonitoringJobDefinition || (exports.MonitoringJobDefinition = {}));
var MonitoringType;
(function (MonitoringType) {
    MonitoringType["DATA_QUALITY"] = "DataQuality";
    MonitoringType["MODEL_BIAS"] = "ModelBias";
    MonitoringType["MODEL_EXPLAINABILITY"] = "ModelExplainability";
    MonitoringType["MODEL_QUALITY"] = "ModelQuality";
})(MonitoringType = exports.MonitoringType || (exports.MonitoringType = {}));
var ScheduleConfig;
(function (ScheduleConfig) {
    /**
     * @internal
     */
    ScheduleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleConfig = exports.ScheduleConfig || (exports.ScheduleConfig = {}));
var MonitoringScheduleConfig;
(function (MonitoringScheduleConfig) {
    /**
     * @internal
     */
    MonitoringScheduleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringScheduleConfig = exports.MonitoringScheduleConfig || (exports.MonitoringScheduleConfig = {}));
var CreateMonitoringScheduleRequest;
(function (CreateMonitoringScheduleRequest) {
    /**
     * @internal
     */
    CreateMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMonitoringScheduleRequest = exports.CreateMonitoringScheduleRequest || (exports.CreateMonitoringScheduleRequest = {}));
var CreateMonitoringScheduleResponse;
(function (CreateMonitoringScheduleResponse) {
    /**
     * @internal
     */
    CreateMonitoringScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMonitoringScheduleResponse = exports.CreateMonitoringScheduleResponse || (exports.CreateMonitoringScheduleResponse = {}));
var NotebookInstanceAcceleratorType;
(function (NotebookInstanceAcceleratorType) {
    NotebookInstanceAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    NotebookInstanceAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    NotebookInstanceAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    NotebookInstanceAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    NotebookInstanceAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    NotebookInstanceAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(NotebookInstanceAcceleratorType = exports.NotebookInstanceAcceleratorType || (exports.NotebookInstanceAcceleratorType = {}));
var DirectInternetAccess;
(function (DirectInternetAccess) {
    DirectInternetAccess["DISABLED"] = "Disabled";
    DirectInternetAccess["ENABLED"] = "Enabled";
})(DirectInternetAccess = exports.DirectInternetAccess || (exports.DirectInternetAccess = {}));
var _InstanceType;
(function (_InstanceType) {
    _InstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    _InstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    _InstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    _InstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    _InstanceType["ML_C5D_18XLARGE"] = "ml.c5d.18xlarge";
    _InstanceType["ML_C5D_2XLARGE"] = "ml.c5d.2xlarge";
    _InstanceType["ML_C5D_4XLARGE"] = "ml.c5d.4xlarge";
    _InstanceType["ML_C5D_9XLARGE"] = "ml.c5d.9xlarge";
    _InstanceType["ML_C5D_XLARGE"] = "ml.c5d.xlarge";
    _InstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    _InstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    _InstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    _InstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    _InstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    _InstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    _InstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    _InstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    _InstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    _InstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    _InstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    _InstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    _InstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    _InstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    _InstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    _InstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    _InstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    _InstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    _InstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    _InstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    _InstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    _InstanceType["ML_T2_2XLARGE"] = "ml.t2.2xlarge";
    _InstanceType["ML_T2_LARGE"] = "ml.t2.large";
    _InstanceType["ML_T2_MEDIUM"] = "ml.t2.medium";
    _InstanceType["ML_T2_XLARGE"] = "ml.t2.xlarge";
    _InstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    _InstanceType["ML_T3_LARGE"] = "ml.t3.large";
    _InstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    _InstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
})(_InstanceType = exports._InstanceType || (exports._InstanceType = {}));
var RootAccess;
(function (RootAccess) {
    RootAccess["DISABLED"] = "Disabled";
    RootAccess["ENABLED"] = "Enabled";
})(RootAccess = exports.RootAccess || (exports.RootAccess = {}));
var CreateNotebookInstanceInput;
(function (CreateNotebookInstanceInput) {
    /**
     * @internal
     */
    CreateNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotebookInstanceInput = exports.CreateNotebookInstanceInput || (exports.CreateNotebookInstanceInput = {}));
var CreateNotebookInstanceOutput;
(function (CreateNotebookInstanceOutput) {
    /**
     * @internal
     */
    CreateNotebookInstanceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotebookInstanceOutput = exports.CreateNotebookInstanceOutput || (exports.CreateNotebookInstanceOutput = {}));
var NotebookInstanceLifecycleHook;
(function (NotebookInstanceLifecycleHook) {
    /**
     * @internal
     */
    NotebookInstanceLifecycleHook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotebookInstanceLifecycleHook = exports.NotebookInstanceLifecycleHook || (exports.NotebookInstanceLifecycleHook = {}));
var CreateNotebookInstanceLifecycleConfigInput;
(function (CreateNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    CreateNotebookInstanceLifecycleConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotebookInstanceLifecycleConfigInput = exports.CreateNotebookInstanceLifecycleConfigInput || (exports.CreateNotebookInstanceLifecycleConfigInput = {}));
var CreateNotebookInstanceLifecycleConfigOutput;
(function (CreateNotebookInstanceLifecycleConfigOutput) {
    /**
     * @internal
     */
    CreateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotebookInstanceLifecycleConfigOutput = exports.CreateNotebookInstanceLifecycleConfigOutput || (exports.CreateNotebookInstanceLifecycleConfigOutput = {}));
var CreatePipelineRequest;
(function (CreatePipelineRequest) {
    /**
     * @internal
     */
    CreatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineRequest = exports.CreatePipelineRequest || (exports.CreatePipelineRequest = {}));
var CreatePipelineResponse;
(function (CreatePipelineResponse) {
    /**
     * @internal
     */
    CreatePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineResponse = exports.CreatePipelineResponse || (exports.CreatePipelineResponse = {}));
var CreatePresignedDomainUrlRequest;
(function (CreatePresignedDomainUrlRequest) {
    /**
     * @internal
     */
    CreatePresignedDomainUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresignedDomainUrlRequest = exports.CreatePresignedDomainUrlRequest || (exports.CreatePresignedDomainUrlRequest = {}));
var CreatePresignedDomainUrlResponse;
(function (CreatePresignedDomainUrlResponse) {
    /**
     * @internal
     */
    CreatePresignedDomainUrlResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresignedDomainUrlResponse = exports.CreatePresignedDomainUrlResponse || (exports.CreatePresignedDomainUrlResponse = {}));
var CreatePresignedNotebookInstanceUrlInput;
(function (CreatePresignedNotebookInstanceUrlInput) {
    /**
     * @internal
     */
    CreatePresignedNotebookInstanceUrlInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresignedNotebookInstanceUrlInput = exports.CreatePresignedNotebookInstanceUrlInput || (exports.CreatePresignedNotebookInstanceUrlInput = {}));
var CreatePresignedNotebookInstanceUrlOutput;
(function (CreatePresignedNotebookInstanceUrlOutput) {
    /**
     * @internal
     */
    CreatePresignedNotebookInstanceUrlOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresignedNotebookInstanceUrlOutput = exports.CreatePresignedNotebookInstanceUrlOutput || (exports.CreatePresignedNotebookInstanceUrlOutput = {}));
var ExperimentConfig;
(function (ExperimentConfig) {
    /**
     * @internal
     */
    ExperimentConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentConfig = exports.ExperimentConfig || (exports.ExperimentConfig = {}));
var DataDistributionType;
(function (DataDistributionType) {
    DataDistributionType["FULLYREPLICATED"] = "FullyReplicated";
    DataDistributionType["SHARDEDBYS3KEY"] = "ShardedByS3Key";
})(DataDistributionType = exports.DataDistributionType || (exports.DataDistributionType = {}));
var InputMode;
(function (InputMode) {
    InputMode["FILE"] = "File";
    InputMode["PIPE"] = "Pipe";
})(InputMode = exports.InputMode || (exports.InputMode = {}));
var RedshiftResultCompressionType;
(function (RedshiftResultCompressionType) {
    RedshiftResultCompressionType["BZIP2"] = "BZIP2";
    RedshiftResultCompressionType["GZIP"] = "GZIP";
    RedshiftResultCompressionType["NONE"] = "None";
    RedshiftResultCompressionType["SNAPPY"] = "SNAPPY";
    RedshiftResultCompressionType["ZSTD"] = "ZSTD";
})(RedshiftResultCompressionType = exports.RedshiftResultCompressionType || (exports.RedshiftResultCompressionType = {}));
var RedshiftResultFormat;
(function (RedshiftResultFormat) {
    RedshiftResultFormat["CSV"] = "CSV";
    RedshiftResultFormat["PARQUET"] = "PARQUET";
})(RedshiftResultFormat = exports.RedshiftResultFormat || (exports.RedshiftResultFormat = {}));
var RedshiftDatasetDefinition;
(function (RedshiftDatasetDefinition) {
    /**
     * @internal
     */
    RedshiftDatasetDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftDatasetDefinition = exports.RedshiftDatasetDefinition || (exports.RedshiftDatasetDefinition = {}));
var DatasetDefinition;
(function (DatasetDefinition) {
    /**
     * @internal
     */
    DatasetDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetDefinition = exports.DatasetDefinition || (exports.DatasetDefinition = {}));
var ProcessingS3CompressionType;
(function (ProcessingS3CompressionType) {
    ProcessingS3CompressionType["GZIP"] = "Gzip";
    ProcessingS3CompressionType["NONE"] = "None";
})(ProcessingS3CompressionType = exports.ProcessingS3CompressionType || (exports.ProcessingS3CompressionType = {}));
var ProcessingS3DataType;
(function (ProcessingS3DataType) {
    ProcessingS3DataType["MANIFEST_FILE"] = "ManifestFile";
    ProcessingS3DataType["S3_PREFIX"] = "S3Prefix";
})(ProcessingS3DataType = exports.ProcessingS3DataType || (exports.ProcessingS3DataType = {}));
var ProcessingS3Input;
(function (ProcessingS3Input) {
    /**
     * @internal
     */
    ProcessingS3Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingS3Input = exports.ProcessingS3Input || (exports.ProcessingS3Input = {}));
var ProcessingInput;
(function (ProcessingInput) {
    /**
     * @internal
     */
    ProcessingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingInput = exports.ProcessingInput || (exports.ProcessingInput = {}));
var ProcessingFeatureStoreOutput;
(function (ProcessingFeatureStoreOutput) {
    /**
     * @internal
     */
    ProcessingFeatureStoreOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingFeatureStoreOutput = exports.ProcessingFeatureStoreOutput || (exports.ProcessingFeatureStoreOutput = {}));
var ProcessingS3Output;
(function (ProcessingS3Output) {
    /**
     * @internal
     */
    ProcessingS3Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingS3Output = exports.ProcessingS3Output || (exports.ProcessingS3Output = {}));
var ProcessingOutput;
(function (ProcessingOutput) {
    /**
     * @internal
     */
    ProcessingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingOutput = exports.ProcessingOutput || (exports.ProcessingOutput = {}));
var ProcessingOutputConfig;
(function (ProcessingOutputConfig) {
    /**
     * @internal
     */
    ProcessingOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingOutputConfig = exports.ProcessingOutputConfig || (exports.ProcessingOutputConfig = {}));
var ProcessingClusterConfig;
(function (ProcessingClusterConfig) {
    /**
     * @internal
     */
    ProcessingClusterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingClusterConfig = exports.ProcessingClusterConfig || (exports.ProcessingClusterConfig = {}));
var ProcessingResources;
(function (ProcessingResources) {
    /**
     * @internal
     */
    ProcessingResources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingResources = exports.ProcessingResources || (exports.ProcessingResources = {}));
var ProcessingStoppingCondition;
(function (ProcessingStoppingCondition) {
    /**
     * @internal
     */
    ProcessingStoppingCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessingStoppingCondition = exports.ProcessingStoppingCondition || (exports.ProcessingStoppingCondition = {}));
var CreateProcessingJobRequest;
(function (CreateProcessingJobRequest) {
    /**
     * @internal
     */
    CreateProcessingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProcessingJobRequest = exports.CreateProcessingJobRequest || (exports.CreateProcessingJobRequest = {}));
var CreateProcessingJobResponse;
(function (CreateProcessingJobResponse) {
    /**
     * @internal
     */
    CreateProcessingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProcessingJobResponse = exports.CreateProcessingJobResponse || (exports.CreateProcessingJobResponse = {}));
var ProvisioningParameter;
(function (ProvisioningParameter) {
    /**
     * @internal
     */
    ProvisioningParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningParameter = exports.ProvisioningParameter || (exports.ProvisioningParameter = {}));
var ServiceCatalogProvisioningDetails;
(function (ServiceCatalogProvisioningDetails) {
    /**
     * @internal
     */
    ServiceCatalogProvisioningDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceCatalogProvisioningDetails = exports.ServiceCatalogProvisioningDetails || (exports.ServiceCatalogProvisioningDetails = {}));
var CreateProjectInput;
(function (CreateProjectInput) {
    /**
     * @internal
     */
    CreateProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectInput = exports.CreateProjectInput || (exports.CreateProjectInput = {}));
var CreateProjectOutput;
(function (CreateProjectOutput) {
    /**
     * @internal
     */
    CreateProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectOutput = exports.CreateProjectOutput || (exports.CreateProjectOutput = {}));
var DebugHookConfig;
(function (DebugHookConfig) {
    /**
     * @internal
     */
    DebugHookConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DebugHookConfig = exports.DebugHookConfig || (exports.DebugHookConfig = {}));
var DebugRuleConfiguration;
(function (DebugRuleConfiguration) {
    /**
     * @internal
     */
    DebugRuleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DebugRuleConfiguration = exports.DebugRuleConfiguration || (exports.DebugRuleConfiguration = {}));
var ProfilerConfig;
(function (ProfilerConfig) {
    /**
     * @internal
     */
    ProfilerConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilerConfig = exports.ProfilerConfig || (exports.ProfilerConfig = {}));
var ProfilerRuleConfiguration;
(function (ProfilerRuleConfiguration) {
    /**
     * @internal
     */
    ProfilerRuleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilerRuleConfiguration = exports.ProfilerRuleConfiguration || (exports.ProfilerRuleConfiguration = {}));
var TensorBoardOutputConfig;
(function (TensorBoardOutputConfig) {
    /**
     * @internal
     */
    TensorBoardOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TensorBoardOutputConfig = exports.TensorBoardOutputConfig || (exports.TensorBoardOutputConfig = {}));
var CreateTrainingJobRequest;
(function (CreateTrainingJobRequest) {
    /**
     * @internal
     */
    CreateTrainingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrainingJobRequest = exports.CreateTrainingJobRequest || (exports.CreateTrainingJobRequest = {}));
var CreateTrainingJobResponse;
(function (CreateTrainingJobResponse) {
    /**
     * @internal
     */
    CreateTrainingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrainingJobResponse = exports.CreateTrainingJobResponse || (exports.CreateTrainingJobResponse = {}));
var JoinSource;
(function (JoinSource) {
    JoinSource["INPUT"] = "Input";
    JoinSource["NONE"] = "None";
})(JoinSource = exports.JoinSource || (exports.JoinSource = {}));
var DataProcessing;
(function (DataProcessing) {
    /**
     * @internal
     */
    DataProcessing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataProcessing = exports.DataProcessing || (exports.DataProcessing = {}));
var ModelClientConfig;
(function (ModelClientConfig) {
    /**
     * @internal
     */
    ModelClientConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelClientConfig = exports.ModelClientConfig || (exports.ModelClientConfig = {}));
var CreateTransformJobRequest;
(function (CreateTransformJobRequest) {
    /**
     * @internal
     */
    CreateTransformJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransformJobRequest = exports.CreateTransformJobRequest || (exports.CreateTransformJobRequest = {}));
var CreateTransformJobResponse;
(function (CreateTransformJobResponse) {
    /**
     * @internal
     */
    CreateTransformJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransformJobResponse = exports.CreateTransformJobResponse || (exports.CreateTransformJobResponse = {}));
var CreateTrialRequest;
(function (CreateTrialRequest) {
    /**
     * @internal
     */
    CreateTrialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrialRequest = exports.CreateTrialRequest || (exports.CreateTrialRequest = {}));
var CreateTrialResponse;
(function (CreateTrialResponse) {
    /**
     * @internal
     */
    CreateTrialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrialResponse = exports.CreateTrialResponse || (exports.CreateTrialResponse = {}));
var TrialComponentArtifact;
(function (TrialComponentArtifact) {
    /**
     * @internal
     */
    TrialComponentArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentArtifact = exports.TrialComponentArtifact || (exports.TrialComponentArtifact = {}));
var TrialComponentParameterValue;
(function (TrialComponentParameterValue) {
    TrialComponentParameterValue.visit = (value, visitor) => {
        if (value.StringValue !== undefined)
            return visitor.StringValue(value.StringValue);
        if (value.NumberValue !== undefined)
            return visitor.NumberValue(value.NumberValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    TrialComponentParameterValue.filterSensitiveLog = (obj) => {
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.NumberValue !== undefined)
            return { NumberValue: obj.NumberValue };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(TrialComponentParameterValue = exports.TrialComponentParameterValue || (exports.TrialComponentParameterValue = {}));
var TrialComponentPrimaryStatus;
(function (TrialComponentPrimaryStatus) {
    TrialComponentPrimaryStatus["COMPLETED"] = "Completed";
    TrialComponentPrimaryStatus["FAILED"] = "Failed";
    TrialComponentPrimaryStatus["IN_PROGRESS"] = "InProgress";
    TrialComponentPrimaryStatus["STOPPED"] = "Stopped";
    TrialComponentPrimaryStatus["STOPPING"] = "Stopping";
})(TrialComponentPrimaryStatus = exports.TrialComponentPrimaryStatus || (exports.TrialComponentPrimaryStatus = {}));
var TrialComponentStatus;
(function (TrialComponentStatus) {
    /**
     * @internal
     */
    TrialComponentStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentStatus = exports.TrialComponentStatus || (exports.TrialComponentStatus = {}));
var CreateTrialComponentRequest;
(function (CreateTrialComponentRequest) {
    /**
     * @internal
     */
    CreateTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && {
            Parameters: Object.entries(obj.Parameters).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: TrialComponentParameterValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(CreateTrialComponentRequest = exports.CreateTrialComponentRequest || (exports.CreateTrialComponentRequest = {}));
var CreateTrialComponentResponse;
(function (CreateTrialComponentResponse) {
    /**
     * @internal
     */
    CreateTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrialComponentResponse = exports.CreateTrialComponentResponse || (exports.CreateTrialComponentResponse = {}));
var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    /**
     * @internal
     */
    CreateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserProfileRequest = exports.CreateUserProfileRequest || (exports.CreateUserProfileRequest = {}));
var CreateUserProfileResponse;
(function (CreateUserProfileResponse) {
    /**
     * @internal
     */
    CreateUserProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserProfileResponse = exports.CreateUserProfileResponse || (exports.CreateUserProfileResponse = {}));
var OidcConfig;
(function (OidcConfig) {
    /**
     * @internal
     */
    OidcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientSecret && { ClientSecret: smithy_client_1.SENSITIVE_STRING }),
    });
})(OidcConfig = exports.OidcConfig || (exports.OidcConfig = {}));
var SourceIpConfig;
(function (SourceIpConfig) {
    /**
     * @internal
     */
    SourceIpConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceIpConfig = exports.SourceIpConfig || (exports.SourceIpConfig = {}));
var CreateWorkforceRequest;
(function (CreateWorkforceRequest) {
    /**
     * @internal
     */
    CreateWorkforceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
    });
})(CreateWorkforceRequest = exports.CreateWorkforceRequest || (exports.CreateWorkforceRequest = {}));
var CreateWorkforceResponse;
(function (CreateWorkforceResponse) {
    /**
     * @internal
     */
    CreateWorkforceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkforceResponse = exports.CreateWorkforceResponse || (exports.CreateWorkforceResponse = {}));
var OidcMemberDefinition;
(function (OidcMemberDefinition) {
    /**
     * @internal
     */
    OidcMemberDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OidcMemberDefinition = exports.OidcMemberDefinition || (exports.OidcMemberDefinition = {}));
var MemberDefinition;
(function (MemberDefinition) {
    /**
     * @internal
     */
    MemberDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberDefinition = exports.MemberDefinition || (exports.MemberDefinition = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var CreateWorkteamRequest;
(function (CreateWorkteamRequest) {
    /**
     * @internal
     */
    CreateWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkteamRequest = exports.CreateWorkteamRequest || (exports.CreateWorkteamRequest = {}));
var CreateWorkteamResponse;
(function (CreateWorkteamResponse) {
    /**
     * @internal
     */
    CreateWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorkteamResponse = exports.CreateWorkteamResponse || (exports.CreateWorkteamResponse = {}));
var DataCaptureConfigSummary;
(function (DataCaptureConfigSummary) {
    /**
     * @internal
     */
    DataCaptureConfigSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataCaptureConfigSummary = exports.DataCaptureConfigSummary || (exports.DataCaptureConfigSummary = {}));
var RuleEvaluationStatus;
(function (RuleEvaluationStatus) {
    RuleEvaluationStatus["ERROR"] = "Error";
    RuleEvaluationStatus["IN_PROGRESS"] = "InProgress";
    RuleEvaluationStatus["ISSUES_FOUND"] = "IssuesFound";
    RuleEvaluationStatus["NO_ISSUES_FOUND"] = "NoIssuesFound";
    RuleEvaluationStatus["STOPPED"] = "Stopped";
    RuleEvaluationStatus["STOPPING"] = "Stopping";
})(RuleEvaluationStatus = exports.RuleEvaluationStatus || (exports.RuleEvaluationStatus = {}));
var DebugRuleEvaluationStatus;
(function (DebugRuleEvaluationStatus) {
    /**
     * @internal
     */
    DebugRuleEvaluationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DebugRuleEvaluationStatus = exports.DebugRuleEvaluationStatus || (exports.DebugRuleEvaluationStatus = {}));
var DeleteActionRequest;
(function (DeleteActionRequest) {
    /**
     * @internal
     */
    DeleteActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActionRequest = exports.DeleteActionRequest || (exports.DeleteActionRequest = {}));
var DeleteActionResponse;
(function (DeleteActionResponse) {
    /**
     * @internal
     */
    DeleteActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActionResponse = exports.DeleteActionResponse || (exports.DeleteActionResponse = {}));
var DeleteAlgorithmInput;
(function (DeleteAlgorithmInput) {
    /**
     * @internal
     */
    DeleteAlgorithmInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlgorithmInput = exports.DeleteAlgorithmInput || (exports.DeleteAlgorithmInput = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteAppImageConfigRequest;
(function (DeleteAppImageConfigRequest) {
    /**
     * @internal
     */
    DeleteAppImageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppImageConfigRequest = exports.DeleteAppImageConfigRequest || (exports.DeleteAppImageConfigRequest = {}));
var DeleteArtifactRequest;
(function (DeleteArtifactRequest) {
    /**
     * @internal
     */
    DeleteArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteArtifactRequest = exports.DeleteArtifactRequest || (exports.DeleteArtifactRequest = {}));
var DeleteArtifactResponse;
(function (DeleteArtifactResponse) {
    /**
     * @internal
     */
    DeleteArtifactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteArtifactResponse = exports.DeleteArtifactResponse || (exports.DeleteArtifactResponse = {}));
var DeleteAssociationRequest;
(function (DeleteAssociationRequest) {
    /**
     * @internal
     */
    DeleteAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssociationRequest = exports.DeleteAssociationRequest || (exports.DeleteAssociationRequest = {}));
var DeleteAssociationResponse;
(function (DeleteAssociationResponse) {
    /**
     * @internal
     */
    DeleteAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssociationResponse = exports.DeleteAssociationResponse || (exports.DeleteAssociationResponse = {}));
var DeleteCodeRepositoryInput;
(function (DeleteCodeRepositoryInput) {
    /**
     * @internal
     */
    DeleteCodeRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCodeRepositoryInput = exports.DeleteCodeRepositoryInput || (exports.DeleteCodeRepositoryInput = {}));
var DeleteContextRequest;
(function (DeleteContextRequest) {
    /**
     * @internal
     */
    DeleteContextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContextRequest = exports.DeleteContextRequest || (exports.DeleteContextRequest = {}));
var DeleteContextResponse;
(function (DeleteContextResponse) {
    /**
     * @internal
     */
    DeleteContextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContextResponse = exports.DeleteContextResponse || (exports.DeleteContextResponse = {}));
var DeleteDataQualityJobDefinitionRequest;
(function (DeleteDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteDataQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataQualityJobDefinitionRequest = exports.DeleteDataQualityJobDefinitionRequest || (exports.DeleteDataQualityJobDefinitionRequest = {}));
var DeleteDeviceFleetRequest;
(function (DeleteDeviceFleetRequest) {
    /**
     * @internal
     */
    DeleteDeviceFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceFleetRequest = exports.DeleteDeviceFleetRequest || (exports.DeleteDeviceFleetRequest = {}));
var RetentionType;
(function (RetentionType) {
    RetentionType["Delete"] = "Delete";
    RetentionType["Retain"] = "Retain";
})(RetentionType = exports.RetentionType || (exports.RetentionType = {}));
var RetentionPolicy;
(function (RetentionPolicy) {
    /**
     * @internal
     */
    RetentionPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetentionPolicy = exports.RetentionPolicy || (exports.RetentionPolicy = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteEndpointInput;
(function (DeleteEndpointInput) {
    /**
     * @internal
     */
    DeleteEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointInput = exports.DeleteEndpointInput || (exports.DeleteEndpointInput = {}));
var DeleteEndpointConfigInput;
(function (DeleteEndpointConfigInput) {
    /**
     * @internal
     */
    DeleteEndpointConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointConfigInput = exports.DeleteEndpointConfigInput || (exports.DeleteEndpointConfigInput = {}));
var DeleteExperimentRequest;
(function (DeleteExperimentRequest) {
    /**
     * @internal
     */
    DeleteExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExperimentRequest = exports.DeleteExperimentRequest || (exports.DeleteExperimentRequest = {}));
var DeleteExperimentResponse;
(function (DeleteExperimentResponse) {
    /**
     * @internal
     */
    DeleteExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExperimentResponse = exports.DeleteExperimentResponse || (exports.DeleteExperimentResponse = {}));
var DeleteFeatureGroupRequest;
(function (DeleteFeatureGroupRequest) {
    /**
     * @internal
     */
    DeleteFeatureGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFeatureGroupRequest = exports.DeleteFeatureGroupRequest || (exports.DeleteFeatureGroupRequest = {}));
var DeleteFlowDefinitionRequest;
(function (DeleteFlowDefinitionRequest) {
    /**
     * @internal
     */
    DeleteFlowDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowDefinitionRequest = exports.DeleteFlowDefinitionRequest || (exports.DeleteFlowDefinitionRequest = {}));
var DeleteFlowDefinitionResponse;
(function (DeleteFlowDefinitionResponse) {
    /**
     * @internal
     */
    DeleteFlowDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowDefinitionResponse = exports.DeleteFlowDefinitionResponse || (exports.DeleteFlowDefinitionResponse = {}));
var DeleteHumanTaskUiRequest;
(function (DeleteHumanTaskUiRequest) {
    /**
     * @internal
     */
    DeleteHumanTaskUiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHumanTaskUiRequest = exports.DeleteHumanTaskUiRequest || (exports.DeleteHumanTaskUiRequest = {}));
var DeleteHumanTaskUiResponse;
(function (DeleteHumanTaskUiResponse) {
    /**
     * @internal
     */
    DeleteHumanTaskUiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHumanTaskUiResponse = exports.DeleteHumanTaskUiResponse || (exports.DeleteHumanTaskUiResponse = {}));
var DeleteImageRequest;
(function (DeleteImageRequest) {
    /**
     * @internal
     */
    DeleteImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageRequest = exports.DeleteImageRequest || (exports.DeleteImageRequest = {}));
var DeleteImageResponse;
(function (DeleteImageResponse) {
    /**
     * @internal
     */
    DeleteImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageResponse = exports.DeleteImageResponse || (exports.DeleteImageResponse = {}));
var DeleteImageVersionRequest;
(function (DeleteImageVersionRequest) {
    /**
     * @internal
     */
    DeleteImageVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageVersionRequest = exports.DeleteImageVersionRequest || (exports.DeleteImageVersionRequest = {}));
var DeleteImageVersionResponse;
(function (DeleteImageVersionResponse) {
    /**
     * @internal
     */
    DeleteImageVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageVersionResponse = exports.DeleteImageVersionResponse || (exports.DeleteImageVersionResponse = {}));
var DeleteModelInput;
(function (DeleteModelInput) {
    /**
     * @internal
     */
    DeleteModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelInput = exports.DeleteModelInput || (exports.DeleteModelInput = {}));
var DeleteModelBiasJobDefinitionRequest;
(function (DeleteModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelBiasJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelBiasJobDefinitionRequest = exports.DeleteModelBiasJobDefinitionRequest || (exports.DeleteModelBiasJobDefinitionRequest = {}));
var DeleteModelExplainabilityJobDefinitionRequest;
(function (DeleteModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelExplainabilityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelExplainabilityJobDefinitionRequest = exports.DeleteModelExplainabilityJobDefinitionRequest || (exports.DeleteModelExplainabilityJobDefinitionRequest = {}));
var DeleteModelPackageInput;
(function (DeleteModelPackageInput) {
    /**
     * @internal
     */
    DeleteModelPackageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelPackageInput = exports.DeleteModelPackageInput || (exports.DeleteModelPackageInput = {}));
var DeleteModelPackageGroupInput;
(function (DeleteModelPackageGroupInput) {
    /**
     * @internal
     */
    DeleteModelPackageGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelPackageGroupInput = exports.DeleteModelPackageGroupInput || (exports.DeleteModelPackageGroupInput = {}));
var DeleteModelPackageGroupPolicyInput;
(function (DeleteModelPackageGroupPolicyInput) {
    /**
     * @internal
     */
    DeleteModelPackageGroupPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelPackageGroupPolicyInput = exports.DeleteModelPackageGroupPolicyInput || (exports.DeleteModelPackageGroupPolicyInput = {}));
var DeleteModelQualityJobDefinitionRequest;
(function (DeleteModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelQualityJobDefinitionRequest = exports.DeleteModelQualityJobDefinitionRequest || (exports.DeleteModelQualityJobDefinitionRequest = {}));
var DeleteMonitoringScheduleRequest;
(function (DeleteMonitoringScheduleRequest) {
    /**
     * @internal
     */
    DeleteMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMonitoringScheduleRequest = exports.DeleteMonitoringScheduleRequest || (exports.DeleteMonitoringScheduleRequest = {}));
var DeleteNotebookInstanceInput;
(function (DeleteNotebookInstanceInput) {
    /**
     * @internal
     */
    DeleteNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotebookInstanceInput = exports.DeleteNotebookInstanceInput || (exports.DeleteNotebookInstanceInput = {}));
var DeleteNotebookInstanceLifecycleConfigInput;
(function (DeleteNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    DeleteNotebookInstanceLifecycleConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotebookInstanceLifecycleConfigInput = exports.DeleteNotebookInstanceLifecycleConfigInput || (exports.DeleteNotebookInstanceLifecycleConfigInput = {}));
var DeletePipelineRequest;
(function (DeletePipelineRequest) {
    /**
     * @internal
     */
    DeletePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineRequest = exports.DeletePipelineRequest || (exports.DeletePipelineRequest = {}));
var DeletePipelineResponse;
(function (DeletePipelineResponse) {
    /**
     * @internal
     */
    DeletePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineResponse = exports.DeletePipelineResponse || (exports.DeletePipelineResponse = {}));
var DeleteProjectInput;
(function (DeleteProjectInput) {
    /**
     * @internal
     */
    DeleteProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectInput = exports.DeleteProjectInput || (exports.DeleteProjectInput = {}));
var DeleteTagsInput;
(function (DeleteTagsInput) {
    /**
     * @internal
     */
    DeleteTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsInput = exports.DeleteTagsInput || (exports.DeleteTagsInput = {}));
var DeleteTagsOutput;
(function (DeleteTagsOutput) {
    /**
     * @internal
     */
    DeleteTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsOutput = exports.DeleteTagsOutput || (exports.DeleteTagsOutput = {}));
var DeleteTrialRequest;
(function (DeleteTrialRequest) {
    /**
     * @internal
     */
    DeleteTrialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrialRequest = exports.DeleteTrialRequest || (exports.DeleteTrialRequest = {}));
var DeleteTrialResponse;
(function (DeleteTrialResponse) {
    /**
     * @internal
     */
    DeleteTrialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrialResponse = exports.DeleteTrialResponse || (exports.DeleteTrialResponse = {}));
var DeleteTrialComponentRequest;
(function (DeleteTrialComponentRequest) {
    /**
     * @internal
     */
    DeleteTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrialComponentRequest = exports.DeleteTrialComponentRequest || (exports.DeleteTrialComponentRequest = {}));
var DeleteTrialComponentResponse;
(function (DeleteTrialComponentResponse) {
    /**
     * @internal
     */
    DeleteTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrialComponentResponse = exports.DeleteTrialComponentResponse || (exports.DeleteTrialComponentResponse = {}));
var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    /**
     * @internal
     */
    DeleteUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserProfileRequest = exports.DeleteUserProfileRequest || (exports.DeleteUserProfileRequest = {}));
var DeleteWorkforceRequest;
(function (DeleteWorkforceRequest) {
    /**
     * @internal
     */
    DeleteWorkforceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkforceRequest = exports.DeleteWorkforceRequest || (exports.DeleteWorkforceRequest = {}));
var DeleteWorkforceResponse;
(function (DeleteWorkforceResponse) {
    /**
     * @internal
     */
    DeleteWorkforceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkforceResponse = exports.DeleteWorkforceResponse || (exports.DeleteWorkforceResponse = {}));
var DeleteWorkteamRequest;
(function (DeleteWorkteamRequest) {
    /**
     * @internal
     */
    DeleteWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkteamRequest = exports.DeleteWorkteamRequest || (exports.DeleteWorkteamRequest = {}));
var DeleteWorkteamResponse;
(function (DeleteWorkteamResponse) {
    /**
     * @internal
     */
    DeleteWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorkteamResponse = exports.DeleteWorkteamResponse || (exports.DeleteWorkteamResponse = {}));
var DeployedImage;
(function (DeployedImage) {
    /**
     * @internal
     */
    DeployedImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeployedImage = exports.DeployedImage || (exports.DeployedImage = {}));
var DeploymentConfig;
(function (DeploymentConfig) {
    /**
     * @internal
     */
    DeploymentConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfig = exports.DeploymentConfig || (exports.DeploymentConfig = {}));
var DeregisterDevicesRequest;
(function (DeregisterDevicesRequest) {
    /**
     * @internal
     */
    DeregisterDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterDevicesRequest = exports.DeregisterDevicesRequest || (exports.DeregisterDevicesRequest = {}));
var DescribeActionRequest;
(function (DescribeActionRequest) {
    /**
     * @internal
     */
    DescribeActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActionRequest = exports.DescribeActionRequest || (exports.DescribeActionRequest = {}));
var DescribeActionResponse;
(function (DescribeActionResponse) {
    /**
     * @internal
     */
    DescribeActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActionResponse = exports.DescribeActionResponse || (exports.DescribeActionResponse = {}));
var DescribeAlgorithmInput;
(function (DescribeAlgorithmInput) {
    /**
     * @internal
     */
    DescribeAlgorithmInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlgorithmInput = exports.DescribeAlgorithmInput || (exports.DescribeAlgorithmInput = {}));
var DescribeAlgorithmOutput;
(function (DescribeAlgorithmOutput) {
    /**
     * @internal
     */
    DescribeAlgorithmOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlgorithmOutput = exports.DescribeAlgorithmOutput || (exports.DescribeAlgorithmOutput = {}));
var DescribeAppRequest;
(function (DescribeAppRequest) {
    /**
     * @internal
     */
    DescribeAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppRequest = exports.DescribeAppRequest || (exports.DescribeAppRequest = {}));
var DescribeAppResponse;
(function (DescribeAppResponse) {
    /**
     * @internal
     */
    DescribeAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppResponse = exports.DescribeAppResponse || (exports.DescribeAppResponse = {}));
var DescribeAppImageConfigRequest;
(function (DescribeAppImageConfigRequest) {
    /**
     * @internal
     */
    DescribeAppImageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppImageConfigRequest = exports.DescribeAppImageConfigRequest || (exports.DescribeAppImageConfigRequest = {}));
var DescribeAppImageConfigResponse;
(function (DescribeAppImageConfigResponse) {
    /**
     * @internal
     */
    DescribeAppImageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppImageConfigResponse = exports.DescribeAppImageConfigResponse || (exports.DescribeAppImageConfigResponse = {}));
var DescribeArtifactRequest;
(function (DescribeArtifactRequest) {
    /**
     * @internal
     */
    DescribeArtifactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeArtifactRequest = exports.DescribeArtifactRequest || (exports.DescribeArtifactRequest = {}));
var DescribeArtifactResponse;
(function (DescribeArtifactResponse) {
    /**
     * @internal
     */
    DescribeArtifactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeArtifactResponse = exports.DescribeArtifactResponse || (exports.DescribeArtifactResponse = {}));
var DescribeAutoMLJobRequest;
(function (DescribeAutoMLJobRequest) {
    /**
     * @internal
     */
    DescribeAutoMLJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutoMLJobRequest = exports.DescribeAutoMLJobRequest || (exports.DescribeAutoMLJobRequest = {}));
var ModelDeployResult;
(function (ModelDeployResult) {
    /**
     * @internal
     */
    ModelDeployResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelDeployResult = exports.ModelDeployResult || (exports.ModelDeployResult = {}));
var ResolvedAttributes;
(function (ResolvedAttributes) {
    /**
     * @internal
     */
    ResolvedAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolvedAttributes = exports.ResolvedAttributes || (exports.ResolvedAttributes = {}));
var DescribeAutoMLJobResponse;
(function (DescribeAutoMLJobResponse) {
    /**
     * @internal
     */
    DescribeAutoMLJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutoMLJobResponse = exports.DescribeAutoMLJobResponse || (exports.DescribeAutoMLJobResponse = {}));
var DescribeCodeRepositoryInput;
(function (DescribeCodeRepositoryInput) {
    /**
     * @internal
     */
    DescribeCodeRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeRepositoryInput = exports.DescribeCodeRepositoryInput || (exports.DescribeCodeRepositoryInput = {}));
var DescribeCodeRepositoryOutput;
(function (DescribeCodeRepositoryOutput) {
    /**
     * @internal
     */
    DescribeCodeRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeRepositoryOutput = exports.DescribeCodeRepositoryOutput || (exports.DescribeCodeRepositoryOutput = {}));
var DescribeCompilationJobRequest;
(function (DescribeCompilationJobRequest) {
    /**
     * @internal
     */
    DescribeCompilationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCompilationJobRequest = exports.DescribeCompilationJobRequest || (exports.DescribeCompilationJobRequest = {}));
var ModelArtifacts;
(function (ModelArtifacts) {
    /**
     * @internal
     */
    ModelArtifacts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelArtifacts = exports.ModelArtifacts || (exports.ModelArtifacts = {}));
var ModelDigests;
(function (ModelDigests) {
    /**
     * @internal
     */
    ModelDigests.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelDigests = exports.ModelDigests || (exports.ModelDigests = {}));
var DescribeCompilationJobResponse;
(function (DescribeCompilationJobResponse) {
    /**
     * @internal
     */
    DescribeCompilationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCompilationJobResponse = exports.DescribeCompilationJobResponse || (exports.DescribeCompilationJobResponse = {}));
var DescribeContextRequest;
(function (DescribeContextRequest) {
    /**
     * @internal
     */
    DescribeContextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContextRequest = exports.DescribeContextRequest || (exports.DescribeContextRequest = {}));
var DescribeContextResponse;
(function (DescribeContextResponse) {
    /**
     * @internal
     */
    DescribeContextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContextResponse = exports.DescribeContextResponse || (exports.DescribeContextResponse = {}));
var DescribeDataQualityJobDefinitionRequest;
(function (DescribeDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeDataQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataQualityJobDefinitionRequest = exports.DescribeDataQualityJobDefinitionRequest || (exports.DescribeDataQualityJobDefinitionRequest = {}));
var DescribeDataQualityJobDefinitionResponse;
(function (DescribeDataQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeDataQualityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataQualityJobDefinitionResponse = exports.DescribeDataQualityJobDefinitionResponse || (exports.DescribeDataQualityJobDefinitionResponse = {}));
var DescribeDeviceRequest;
(function (DescribeDeviceRequest) {
    /**
     * @internal
     */
    DescribeDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceRequest = exports.DescribeDeviceRequest || (exports.DescribeDeviceRequest = {}));
var EdgeModel;
(function (EdgeModel) {
    /**
     * @internal
     */
    EdgeModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgeModel = exports.EdgeModel || (exports.EdgeModel = {}));
var DescribeDeviceResponse;
(function (DescribeDeviceResponse) {
    /**
     * @internal
     */
    DescribeDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceResponse = exports.DescribeDeviceResponse || (exports.DescribeDeviceResponse = {}));
var DescribeDeviceFleetRequest;
(function (DescribeDeviceFleetRequest) {
    /**
     * @internal
     */
    DescribeDeviceFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceFleetRequest = exports.DescribeDeviceFleetRequest || (exports.DescribeDeviceFleetRequest = {}));
var DescribeDeviceFleetResponse;
(function (DescribeDeviceFleetResponse) {
    /**
     * @internal
     */
    DescribeDeviceFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceFleetResponse = exports.DescribeDeviceFleetResponse || (exports.DescribeDeviceFleetResponse = {}));
var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    /**
     * @internal
     */
    DescribeDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainRequest = exports.DescribeDomainRequest || (exports.DescribeDomainRequest = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["Delete_Failed"] = "Delete_Failed";
    DomainStatus["Deleting"] = "Deleting";
    DomainStatus["Failed"] = "Failed";
    DomainStatus["InService"] = "InService";
    DomainStatus["Pending"] = "Pending";
    DomainStatus["Update_Failed"] = "Update_Failed";
    DomainStatus["Updating"] = "Updating";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DescribeDomainResponse;
(function (DescribeDomainResponse) {
    /**
     * @internal
     */
    DescribeDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainResponse = exports.DescribeDomainResponse || (exports.DescribeDomainResponse = {}));
var DescribeEdgePackagingJobRequest;
(function (DescribeEdgePackagingJobRequest) {
    /**
     * @internal
     */
    DescribeEdgePackagingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEdgePackagingJobRequest = exports.DescribeEdgePackagingJobRequest || (exports.DescribeEdgePackagingJobRequest = {}));
var EdgePackagingJobStatus;
(function (EdgePackagingJobStatus) {
    EdgePackagingJobStatus["Completed"] = "COMPLETED";
    EdgePackagingJobStatus["Failed"] = "FAILED";
    EdgePackagingJobStatus["InProgress"] = "INPROGRESS";
    EdgePackagingJobStatus["Starting"] = "STARTING";
    EdgePackagingJobStatus["Stopped"] = "STOPPED";
    EdgePackagingJobStatus["Stopping"] = "STOPPING";
})(EdgePackagingJobStatus = exports.EdgePackagingJobStatus || (exports.EdgePackagingJobStatus = {}));
var DescribeEdgePackagingJobResponse;
(function (DescribeEdgePackagingJobResponse) {
    /**
     * @internal
     */
    DescribeEdgePackagingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEdgePackagingJobResponse = exports.DescribeEdgePackagingJobResponse || (exports.DescribeEdgePackagingJobResponse = {}));
var DescribeEndpointInput;
(function (DescribeEndpointInput) {
    /**
     * @internal
     */
    DescribeEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointInput = exports.DescribeEndpointInput || (exports.DescribeEndpointInput = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["CREATING"] = "Creating";
    EndpointStatus["DELETING"] = "Deleting";
    EndpointStatus["FAILED"] = "Failed";
    EndpointStatus["IN_SERVICE"] = "InService";
    EndpointStatus["OUT_OF_SERVICE"] = "OutOfService";
    EndpointStatus["ROLLING_BACK"] = "RollingBack";
    EndpointStatus["SYSTEM_UPDATING"] = "SystemUpdating";
    EndpointStatus["UPDATING"] = "Updating";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var ProductionVariantSummary;
(function (ProductionVariantSummary) {
    /**
     * @internal
     */
    ProductionVariantSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductionVariantSummary = exports.ProductionVariantSummary || (exports.ProductionVariantSummary = {}));
var DescribeEndpointOutput;
(function (DescribeEndpointOutput) {
    /**
     * @internal
     */
    DescribeEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointOutput = exports.DescribeEndpointOutput || (exports.DescribeEndpointOutput = {}));
var DescribeEndpointConfigInput;
(function (DescribeEndpointConfigInput) {
    /**
     * @internal
     */
    DescribeEndpointConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointConfigInput = exports.DescribeEndpointConfigInput || (exports.DescribeEndpointConfigInput = {}));
var DescribeEndpointConfigOutput;
(function (DescribeEndpointConfigOutput) {
    /**
     * @internal
     */
    DescribeEndpointConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointConfigOutput = exports.DescribeEndpointConfigOutput || (exports.DescribeEndpointConfigOutput = {}));
var DescribeExperimentRequest;
(function (DescribeExperimentRequest) {
    /**
     * @internal
     */
    DescribeExperimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExperimentRequest = exports.DescribeExperimentRequest || (exports.DescribeExperimentRequest = {}));
var ExperimentSource;
(function (ExperimentSource) {
    /**
     * @internal
     */
    ExperimentSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExperimentSource = exports.ExperimentSource || (exports.ExperimentSource = {}));
var DescribeExperimentResponse;
(function (DescribeExperimentResponse) {
    /**
     * @internal
     */
    DescribeExperimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExperimentResponse = exports.DescribeExperimentResponse || (exports.DescribeExperimentResponse = {}));
var DescribeFeatureGroupRequest;
(function (DescribeFeatureGroupRequest) {
    /**
     * @internal
     */
    DescribeFeatureGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeatureGroupRequest = exports.DescribeFeatureGroupRequest || (exports.DescribeFeatureGroupRequest = {}));
var FeatureGroupStatus;
(function (FeatureGroupStatus) {
    FeatureGroupStatus["CREATED"] = "Created";
    FeatureGroupStatus["CREATE_FAILED"] = "CreateFailed";
    FeatureGroupStatus["CREATING"] = "Creating";
    FeatureGroupStatus["DELETE_FAILED"] = "DeleteFailed";
    FeatureGroupStatus["DELETING"] = "Deleting";
})(FeatureGroupStatus = exports.FeatureGroupStatus || (exports.FeatureGroupStatus = {}));
var OfflineStoreStatusValue;
(function (OfflineStoreStatusValue) {
    OfflineStoreStatusValue["ACTIVE"] = "Active";
    OfflineStoreStatusValue["BLOCKED"] = "Blocked";
    OfflineStoreStatusValue["DISABLED"] = "Disabled";
})(OfflineStoreStatusValue = exports.OfflineStoreStatusValue || (exports.OfflineStoreStatusValue = {}));
var OfflineStoreStatus;
(function (OfflineStoreStatus) {
    /**
     * @internal
     */
    OfflineStoreStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OfflineStoreStatus = exports.OfflineStoreStatus || (exports.OfflineStoreStatus = {}));
var DescribeFeatureGroupResponse;
(function (DescribeFeatureGroupResponse) {
    /**
     * @internal
     */
    DescribeFeatureGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeatureGroupResponse = exports.DescribeFeatureGroupResponse || (exports.DescribeFeatureGroupResponse = {}));
var DescribeFlowDefinitionRequest;
(function (DescribeFlowDefinitionRequest) {
    /**
     * @internal
     */
    DescribeFlowDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowDefinitionRequest = exports.DescribeFlowDefinitionRequest || (exports.DescribeFlowDefinitionRequest = {}));
var FlowDefinitionStatus;
(function (FlowDefinitionStatus) {
    FlowDefinitionStatus["ACTIVE"] = "Active";
    FlowDefinitionStatus["DELETING"] = "Deleting";
    FlowDefinitionStatus["FAILED"] = "Failed";
    FlowDefinitionStatus["INITIALIZING"] = "Initializing";
})(FlowDefinitionStatus = exports.FlowDefinitionStatus || (exports.FlowDefinitionStatus = {}));
var DescribeFlowDefinitionResponse;
(function (DescribeFlowDefinitionResponse) {
    /**
     * @internal
     */
    DescribeFlowDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowDefinitionResponse = exports.DescribeFlowDefinitionResponse || (exports.DescribeFlowDefinitionResponse = {}));
var DescribeHumanTaskUiRequest;
(function (DescribeHumanTaskUiRequest) {
    /**
     * @internal
     */
    DescribeHumanTaskUiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHumanTaskUiRequest = exports.DescribeHumanTaskUiRequest || (exports.DescribeHumanTaskUiRequest = {}));
var HumanTaskUiStatus;
(function (HumanTaskUiStatus) {
    HumanTaskUiStatus["ACTIVE"] = "Active";
    HumanTaskUiStatus["DELETING"] = "Deleting";
})(HumanTaskUiStatus = exports.HumanTaskUiStatus || (exports.HumanTaskUiStatus = {}));
var UiTemplateInfo;
(function (UiTemplateInfo) {
    /**
     * @internal
     */
    UiTemplateInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UiTemplateInfo = exports.UiTemplateInfo || (exports.UiTemplateInfo = {}));
var DescribeHumanTaskUiResponse;
(function (DescribeHumanTaskUiResponse) {
    /**
     * @internal
     */
    DescribeHumanTaskUiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHumanTaskUiResponse = exports.DescribeHumanTaskUiResponse || (exports.DescribeHumanTaskUiResponse = {}));
var DescribeHyperParameterTuningJobRequest;
(function (DescribeHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    DescribeHyperParameterTuningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHyperParameterTuningJobRequest = exports.DescribeHyperParameterTuningJobRequest || (exports.DescribeHyperParameterTuningJobRequest = {}));
var FinalHyperParameterTuningJobObjectiveMetric;
(function (FinalHyperParameterTuningJobObjectiveMetric) {
    /**
     * @internal
     */
    FinalHyperParameterTuningJobObjectiveMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalHyperParameterTuningJobObjectiveMetric = exports.FinalHyperParameterTuningJobObjectiveMetric || (exports.FinalHyperParameterTuningJobObjectiveMetric = {}));
var TrainingJobStatus;
(function (TrainingJobStatus) {
    TrainingJobStatus["COMPLETED"] = "Completed";
    TrainingJobStatus["FAILED"] = "Failed";
    TrainingJobStatus["IN_PROGRESS"] = "InProgress";
    TrainingJobStatus["STOPPED"] = "Stopped";
    TrainingJobStatus["STOPPING"] = "Stopping";
})(TrainingJobStatus = exports.TrainingJobStatus || (exports.TrainingJobStatus = {}));
var HyperParameterTrainingJobSummary;
(function (HyperParameterTrainingJobSummary) {
    /**
     * @internal
     */
    HyperParameterTrainingJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTrainingJobSummary = exports.HyperParameterTrainingJobSummary || (exports.HyperParameterTrainingJobSummary = {}));
var HyperParameterTuningJobStatus;
(function (HyperParameterTuningJobStatus) {
    HyperParameterTuningJobStatus["COMPLETED"] = "Completed";
    HyperParameterTuningJobStatus["FAILED"] = "Failed";
    HyperParameterTuningJobStatus["IN_PROGRESS"] = "InProgress";
    HyperParameterTuningJobStatus["STOPPED"] = "Stopped";
    HyperParameterTuningJobStatus["STOPPING"] = "Stopping";
})(HyperParameterTuningJobStatus = exports.HyperParameterTuningJobStatus || (exports.HyperParameterTuningJobStatus = {}));
var ObjectiveStatusCounters;
(function (ObjectiveStatusCounters) {
    /**
     * @internal
     */
    ObjectiveStatusCounters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectiveStatusCounters = exports.ObjectiveStatusCounters || (exports.ObjectiveStatusCounters = {}));
var TrainingJobStatusCounters;
(function (TrainingJobStatusCounters) {
    /**
     * @internal
     */
    TrainingJobStatusCounters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingJobStatusCounters = exports.TrainingJobStatusCounters || (exports.TrainingJobStatusCounters = {}));
var DescribeHyperParameterTuningJobResponse;
(function (DescribeHyperParameterTuningJobResponse) {
    /**
     * @internal
     */
    DescribeHyperParameterTuningJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHyperParameterTuningJobResponse = exports.DescribeHyperParameterTuningJobResponse || (exports.DescribeHyperParameterTuningJobResponse = {}));
var DescribeImageRequest;
(function (DescribeImageRequest) {
    /**
     * @internal
     */
    DescribeImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageRequest = exports.DescribeImageRequest || (exports.DescribeImageRequest = {}));
var ImageStatus;
(function (ImageStatus) {
    ImageStatus["CREATED"] = "CREATED";
    ImageStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ImageStatus["CREATING"] = "CREATING";
    ImageStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ImageStatus["DELETING"] = "DELETING";
    ImageStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    ImageStatus["UPDATING"] = "UPDATING";
})(ImageStatus = exports.ImageStatus || (exports.ImageStatus = {}));
var DescribeImageResponse;
(function (DescribeImageResponse) {
    /**
     * @internal
     */
    DescribeImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageResponse = exports.DescribeImageResponse || (exports.DescribeImageResponse = {}));
var DescribeImageVersionRequest;
(function (DescribeImageVersionRequest) {
    /**
     * @internal
     */
    DescribeImageVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageVersionRequest = exports.DescribeImageVersionRequest || (exports.DescribeImageVersionRequest = {}));
var ImageVersionStatus;
(function (ImageVersionStatus) {
    ImageVersionStatus["CREATED"] = "CREATED";
    ImageVersionStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ImageVersionStatus["CREATING"] = "CREATING";
    ImageVersionStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ImageVersionStatus["DELETING"] = "DELETING";
})(ImageVersionStatus = exports.ImageVersionStatus || (exports.ImageVersionStatus = {}));
var DescribeImageVersionResponse;
(function (DescribeImageVersionResponse) {
    /**
     * @internal
     */
    DescribeImageVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageVersionResponse = exports.DescribeImageVersionResponse || (exports.DescribeImageVersionResponse = {}));
var DescribeLabelingJobRequest;
(function (DescribeLabelingJobRequest) {
    /**
     * @internal
     */
    DescribeLabelingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLabelingJobRequest = exports.DescribeLabelingJobRequest || (exports.DescribeLabelingJobRequest = {}));
var LabelCounters;
(function (LabelCounters) {
    /**
     * @internal
     */
    LabelCounters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelCounters = exports.LabelCounters || (exports.LabelCounters = {}));
var LabelingJobOutput;
(function (LabelingJobOutput) {
    /**
     * @internal
     */
    LabelingJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingJobOutput = exports.LabelingJobOutput || (exports.LabelingJobOutput = {}));
var LabelingJobStatus;
(function (LabelingJobStatus) {
    LabelingJobStatus["COMPLETED"] = "Completed";
    LabelingJobStatus["FAILED"] = "Failed";
    LabelingJobStatus["INITIALIZING"] = "Initializing";
    LabelingJobStatus["IN_PROGRESS"] = "InProgress";
    LabelingJobStatus["STOPPED"] = "Stopped";
    LabelingJobStatus["STOPPING"] = "Stopping";
})(LabelingJobStatus = exports.LabelingJobStatus || (exports.LabelingJobStatus = {}));
var DescribeLabelingJobResponse;
(function (DescribeLabelingJobResponse) {
    /**
     * @internal
     */
    DescribeLabelingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLabelingJobResponse = exports.DescribeLabelingJobResponse || (exports.DescribeLabelingJobResponse = {}));
var DescribeModelInput;
(function (DescribeModelInput) {
    /**
     * @internal
     */
    DescribeModelInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelInput = exports.DescribeModelInput || (exports.DescribeModelInput = {}));
var DescribeModelOutput;
(function (DescribeModelOutput) {
    /**
     * @internal
     */
    DescribeModelOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelOutput = exports.DescribeModelOutput || (exports.DescribeModelOutput = {}));
var DescribeModelBiasJobDefinitionRequest;
(function (DescribeModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelBiasJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelBiasJobDefinitionRequest = exports.DescribeModelBiasJobDefinitionRequest || (exports.DescribeModelBiasJobDefinitionRequest = {}));
var DescribeModelBiasJobDefinitionResponse;
(function (DescribeModelBiasJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelBiasJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelBiasJobDefinitionResponse = exports.DescribeModelBiasJobDefinitionResponse || (exports.DescribeModelBiasJobDefinitionResponse = {}));
var DescribeModelExplainabilityJobDefinitionRequest;
(function (DescribeModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelExplainabilityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelExplainabilityJobDefinitionRequest = exports.DescribeModelExplainabilityJobDefinitionRequest || (exports.DescribeModelExplainabilityJobDefinitionRequest = {}));
var DescribeModelExplainabilityJobDefinitionResponse;
(function (DescribeModelExplainabilityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelExplainabilityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelExplainabilityJobDefinitionResponse = exports.DescribeModelExplainabilityJobDefinitionResponse || (exports.DescribeModelExplainabilityJobDefinitionResponse = {}));
var DescribeModelPackageInput;
(function (DescribeModelPackageInput) {
    /**
     * @internal
     */
    DescribeModelPackageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelPackageInput = exports.DescribeModelPackageInput || (exports.DescribeModelPackageInput = {}));
var ModelPackageStatus;
(function (ModelPackageStatus) {
    ModelPackageStatus["COMPLETED"] = "Completed";
    ModelPackageStatus["DELETING"] = "Deleting";
    ModelPackageStatus["FAILED"] = "Failed";
    ModelPackageStatus["IN_PROGRESS"] = "InProgress";
    ModelPackageStatus["PENDING"] = "Pending";
})(ModelPackageStatus = exports.ModelPackageStatus || (exports.ModelPackageStatus = {}));
var DetailedModelPackageStatus;
(function (DetailedModelPackageStatus) {
    DetailedModelPackageStatus["COMPLETED"] = "Completed";
    DetailedModelPackageStatus["FAILED"] = "Failed";
    DetailedModelPackageStatus["IN_PROGRESS"] = "InProgress";
    DetailedModelPackageStatus["NOT_STARTED"] = "NotStarted";
})(DetailedModelPackageStatus = exports.DetailedModelPackageStatus || (exports.DetailedModelPackageStatus = {}));
var ModelPackageStatusItem;
(function (ModelPackageStatusItem) {
    /**
     * @internal
     */
    ModelPackageStatusItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageStatusItem = exports.ModelPackageStatusItem || (exports.ModelPackageStatusItem = {}));
var ModelPackageStatusDetails;
(function (ModelPackageStatusDetails) {
    /**
     * @internal
     */
    ModelPackageStatusDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPackageStatusDetails = exports.ModelPackageStatusDetails || (exports.ModelPackageStatusDetails = {}));
var DescribeModelPackageOutput;
(function (DescribeModelPackageOutput) {
    /**
     * @internal
     */
    DescribeModelPackageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelPackageOutput = exports.DescribeModelPackageOutput || (exports.DescribeModelPackageOutput = {}));
var DescribeModelPackageGroupInput;
(function (DescribeModelPackageGroupInput) {
    /**
     * @internal
     */
    DescribeModelPackageGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelPackageGroupInput = exports.DescribeModelPackageGroupInput || (exports.DescribeModelPackageGroupInput = {}));
var ModelPackageGroupStatus;
(function (ModelPackageGroupStatus) {
    ModelPackageGroupStatus["COMPLETED"] = "Completed";
    ModelPackageGroupStatus["DELETE_FAILED"] = "DeleteFailed";
    ModelPackageGroupStatus["DELETING"] = "Deleting";
    ModelPackageGroupStatus["FAILED"] = "Failed";
    ModelPackageGroupStatus["IN_PROGRESS"] = "InProgress";
    ModelPackageGroupStatus["PENDING"] = "Pending";
})(ModelPackageGroupStatus = exports.ModelPackageGroupStatus || (exports.ModelPackageGroupStatus = {}));
var DescribeModelPackageGroupOutput;
(function (DescribeModelPackageGroupOutput) {
    /**
     * @internal
     */
    DescribeModelPackageGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelPackageGroupOutput = exports.DescribeModelPackageGroupOutput || (exports.DescribeModelPackageGroupOutput = {}));
var DescribeModelQualityJobDefinitionRequest;
(function (DescribeModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelQualityJobDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelQualityJobDefinitionRequest = exports.DescribeModelQualityJobDefinitionRequest || (exports.DescribeModelQualityJobDefinitionRequest = {}));
var DescribeModelQualityJobDefinitionResponse;
(function (DescribeModelQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelQualityJobDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelQualityJobDefinitionResponse = exports.DescribeModelQualityJobDefinitionResponse || (exports.DescribeModelQualityJobDefinitionResponse = {}));
var DescribeMonitoringScheduleRequest;
(function (DescribeMonitoringScheduleRequest) {
    /**
     * @internal
     */
    DescribeMonitoringScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMonitoringScheduleRequest = exports.DescribeMonitoringScheduleRequest || (exports.DescribeMonitoringScheduleRequest = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["COMPLETED"] = "Completed";
    ExecutionStatus["COMPLETED_WITH_VIOLATIONS"] = "CompletedWithViolations";
    ExecutionStatus["FAILED"] = "Failed";
    ExecutionStatus["IN_PROGRESS"] = "InProgress";
    ExecutionStatus["PENDING"] = "Pending";
    ExecutionStatus["STOPPED"] = "Stopped";
    ExecutionStatus["STOPPING"] = "Stopping";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
var MonitoringExecutionSummary;
(function (MonitoringExecutionSummary) {
    /**
     * @internal
     */
    MonitoringExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringExecutionSummary = exports.MonitoringExecutionSummary || (exports.MonitoringExecutionSummary = {}));
var ScheduleStatus;
(function (ScheduleStatus) {
    ScheduleStatus["FAILED"] = "Failed";
    ScheduleStatus["PENDING"] = "Pending";
    ScheduleStatus["SCHEDULED"] = "Scheduled";
    ScheduleStatus["STOPPED"] = "Stopped";
})(ScheduleStatus = exports.ScheduleStatus || (exports.ScheduleStatus = {}));
var DescribeMonitoringScheduleResponse;
(function (DescribeMonitoringScheduleResponse) {
    /**
     * @internal
     */
    DescribeMonitoringScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMonitoringScheduleResponse = exports.DescribeMonitoringScheduleResponse || (exports.DescribeMonitoringScheduleResponse = {}));
var DescribeNotebookInstanceInput;
(function (DescribeNotebookInstanceInput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookInstanceInput = exports.DescribeNotebookInstanceInput || (exports.DescribeNotebookInstanceInput = {}));
var NotebookInstanceStatus;
(function (NotebookInstanceStatus) {
    NotebookInstanceStatus["Deleting"] = "Deleting";
    NotebookInstanceStatus["Failed"] = "Failed";
    NotebookInstanceStatus["InService"] = "InService";
    NotebookInstanceStatus["Pending"] = "Pending";
    NotebookInstanceStatus["Stopped"] = "Stopped";
    NotebookInstanceStatus["Stopping"] = "Stopping";
    NotebookInstanceStatus["Updating"] = "Updating";
})(NotebookInstanceStatus = exports.NotebookInstanceStatus || (exports.NotebookInstanceStatus = {}));
var DescribeNotebookInstanceOutput;
(function (DescribeNotebookInstanceOutput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookInstanceOutput = exports.DescribeNotebookInstanceOutput || (exports.DescribeNotebookInstanceOutput = {}));
var DescribeNotebookInstanceLifecycleConfigInput;
(function (DescribeNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceLifecycleConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookInstanceLifecycleConfigInput = exports.DescribeNotebookInstanceLifecycleConfigInput || (exports.DescribeNotebookInstanceLifecycleConfigInput = {}));
var DescribeNotebookInstanceLifecycleConfigOutput;
(function (DescribeNotebookInstanceLifecycleConfigOutput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceLifecycleConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookInstanceLifecycleConfigOutput = exports.DescribeNotebookInstanceLifecycleConfigOutput || (exports.DescribeNotebookInstanceLifecycleConfigOutput = {}));
var DescribePipelineRequest;
(function (DescribePipelineRequest) {
    /**
     * @internal
     */
    DescribePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineRequest = exports.DescribePipelineRequest || (exports.DescribePipelineRequest = {}));
var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["ACTIVE"] = "Active";
})(PipelineStatus = exports.PipelineStatus || (exports.PipelineStatus = {}));
var DescribePipelineResponse;
(function (DescribePipelineResponse) {
    /**
     * @internal
     */
    DescribePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineResponse = exports.DescribePipelineResponse || (exports.DescribePipelineResponse = {}));
var DescribePipelineDefinitionForExecutionRequest;
(function (DescribePipelineDefinitionForExecutionRequest) {
    /**
     * @internal
     */
    DescribePipelineDefinitionForExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineDefinitionForExecutionRequest = exports.DescribePipelineDefinitionForExecutionRequest || (exports.DescribePipelineDefinitionForExecutionRequest = {}));
var DescribePipelineDefinitionForExecutionResponse;
(function (DescribePipelineDefinitionForExecutionResponse) {
    /**
     * @internal
     */
    DescribePipelineDefinitionForExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineDefinitionForExecutionResponse = exports.DescribePipelineDefinitionForExecutionResponse || (exports.DescribePipelineDefinitionForExecutionResponse = {}));
var DescribePipelineExecutionRequest;
(function (DescribePipelineExecutionRequest) {
    /**
     * @internal
     */
    DescribePipelineExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineExecutionRequest = exports.DescribePipelineExecutionRequest || (exports.DescribePipelineExecutionRequest = {}));
var PipelineExecutionStatus;
(function (PipelineExecutionStatus) {
    PipelineExecutionStatus["EXECUTING"] = "Executing";
    PipelineExecutionStatus["FAILED"] = "Failed";
    PipelineExecutionStatus["STOPPED"] = "Stopped";
    PipelineExecutionStatus["STOPPING"] = "Stopping";
    PipelineExecutionStatus["SUCCEEDED"] = "Succeeded";
})(PipelineExecutionStatus = exports.PipelineExecutionStatus || (exports.PipelineExecutionStatus = {}));
var DescribePipelineExecutionResponse;
(function (DescribePipelineExecutionResponse) {
    /**
     * @internal
     */
    DescribePipelineExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelineExecutionResponse = exports.DescribePipelineExecutionResponse || (exports.DescribePipelineExecutionResponse = {}));
var DescribeProcessingJobRequest;
(function (DescribeProcessingJobRequest) {
    /**
     * @internal
     */
    DescribeProcessingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProcessingJobRequest = exports.DescribeProcessingJobRequest || (exports.DescribeProcessingJobRequest = {}));
var ProcessingJobStatus;
(function (ProcessingJobStatus) {
    ProcessingJobStatus["COMPLETED"] = "Completed";
    ProcessingJobStatus["FAILED"] = "Failed";
    ProcessingJobStatus["IN_PROGRESS"] = "InProgress";
    ProcessingJobStatus["STOPPED"] = "Stopped";
    ProcessingJobStatus["STOPPING"] = "Stopping";
})(ProcessingJobStatus = exports.ProcessingJobStatus || (exports.ProcessingJobStatus = {}));
var DescribeProcessingJobResponse;
(function (DescribeProcessingJobResponse) {
    /**
     * @internal
     */
    DescribeProcessingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProcessingJobResponse = exports.DescribeProcessingJobResponse || (exports.DescribeProcessingJobResponse = {}));
var DescribeProjectInput;
(function (DescribeProjectInput) {
    /**
     * @internal
     */
    DescribeProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectInput = exports.DescribeProjectInput || (exports.DescribeProjectInput = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["CREATE_COMPLETED"] = "CreateCompleted";
    ProjectStatus["CREATE_FAILED"] = "CreateFailed";
    ProjectStatus["CREATE_IN_PROGRESS"] = "CreateInProgress";
    ProjectStatus["DELETE_COMPLETED"] = "DeleteCompleted";
    ProjectStatus["DELETE_FAILED"] = "DeleteFailed";
    ProjectStatus["DELETE_IN_PROGRESS"] = "DeleteInProgress";
    ProjectStatus["PENDING"] = "Pending";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var ServiceCatalogProvisionedProductDetails;
(function (ServiceCatalogProvisionedProductDetails) {
    /**
     * @internal
     */
    ServiceCatalogProvisionedProductDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceCatalogProvisionedProductDetails = exports.ServiceCatalogProvisionedProductDetails || (exports.ServiceCatalogProvisionedProductDetails = {}));
var DescribeProjectOutput;
(function (DescribeProjectOutput) {
    /**
     * @internal
     */
    DescribeProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectOutput = exports.DescribeProjectOutput || (exports.DescribeProjectOutput = {}));
var DescribeSubscribedWorkteamRequest;
(function (DescribeSubscribedWorkteamRequest) {
    /**
     * @internal
     */
    DescribeSubscribedWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubscribedWorkteamRequest = exports.DescribeSubscribedWorkteamRequest || (exports.DescribeSubscribedWorkteamRequest = {}));
var SubscribedWorkteam;
(function (SubscribedWorkteam) {
    /**
     * @internal
     */
    SubscribedWorkteam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribedWorkteam = exports.SubscribedWorkteam || (exports.SubscribedWorkteam = {}));
var DescribeSubscribedWorkteamResponse;
(function (DescribeSubscribedWorkteamResponse) {
    /**
     * @internal
     */
    DescribeSubscribedWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubscribedWorkteamResponse = exports.DescribeSubscribedWorkteamResponse || (exports.DescribeSubscribedWorkteamResponse = {}));
var DescribeTrainingJobRequest;
(function (DescribeTrainingJobRequest) {
    /**
     * @internal
     */
    DescribeTrainingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrainingJobRequest = exports.DescribeTrainingJobRequest || (exports.DescribeTrainingJobRequest = {}));
var MetricData;
(function (MetricData) {
    /**
     * @internal
     */
    MetricData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricData = exports.MetricData || (exports.MetricData = {}));
var ProfilerRuleEvaluationStatus;
(function (ProfilerRuleEvaluationStatus) {
    /**
     * @internal
     */
    ProfilerRuleEvaluationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProfilerRuleEvaluationStatus = exports.ProfilerRuleEvaluationStatus || (exports.ProfilerRuleEvaluationStatus = {}));
var ProfilingStatus;
(function (ProfilingStatus) {
    ProfilingStatus["DISABLED"] = "Disabled";
    ProfilingStatus["ENABLED"] = "Enabled";
})(ProfilingStatus = exports.ProfilingStatus || (exports.ProfilingStatus = {}));
var SecondaryStatus;
(function (SecondaryStatus) {
    SecondaryStatus["COMPLETED"] = "Completed";
    SecondaryStatus["DOWNLOADING"] = "Downloading";
    SecondaryStatus["DOWNLOADING_TRAINING_IMAGE"] = "DownloadingTrainingImage";
    SecondaryStatus["FAILED"] = "Failed";
    SecondaryStatus["INTERRUPTED"] = "Interrupted";
    SecondaryStatus["LAUNCHING_ML_INSTANCES"] = "LaunchingMLInstances";
    SecondaryStatus["MAX_RUNTIME_EXCEEDED"] = "MaxRuntimeExceeded";
    SecondaryStatus["MAX_WAIT_TIME_EXCEEDED"] = "MaxWaitTimeExceeded";
    SecondaryStatus["PREPARING_TRAINING_STACK"] = "PreparingTrainingStack";
    SecondaryStatus["RESTARTING"] = "Restarting";
    SecondaryStatus["STARTING"] = "Starting";
    SecondaryStatus["STOPPED"] = "Stopped";
    SecondaryStatus["STOPPING"] = "Stopping";
    SecondaryStatus["TRAINING"] = "Training";
    SecondaryStatus["UPDATING"] = "Updating";
    SecondaryStatus["UPLOADING"] = "Uploading";
})(SecondaryStatus = exports.SecondaryStatus || (exports.SecondaryStatus = {}));
var SecondaryStatusTransition;
(function (SecondaryStatusTransition) {
    /**
     * @internal
     */
    SecondaryStatusTransition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecondaryStatusTransition = exports.SecondaryStatusTransition || (exports.SecondaryStatusTransition = {}));
var DescribeTrainingJobResponse;
(function (DescribeTrainingJobResponse) {
    /**
     * @internal
     */
    DescribeTrainingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrainingJobResponse = exports.DescribeTrainingJobResponse || (exports.DescribeTrainingJobResponse = {}));
var DescribeTransformJobRequest;
(function (DescribeTransformJobRequest) {
    /**
     * @internal
     */
    DescribeTransformJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransformJobRequest = exports.DescribeTransformJobRequest || (exports.DescribeTransformJobRequest = {}));
var TransformJobStatus;
(function (TransformJobStatus) {
    TransformJobStatus["COMPLETED"] = "Completed";
    TransformJobStatus["FAILED"] = "Failed";
    TransformJobStatus["IN_PROGRESS"] = "InProgress";
    TransformJobStatus["STOPPED"] = "Stopped";
    TransformJobStatus["STOPPING"] = "Stopping";
})(TransformJobStatus = exports.TransformJobStatus || (exports.TransformJobStatus = {}));
var DescribeTransformJobResponse;
(function (DescribeTransformJobResponse) {
    /**
     * @internal
     */
    DescribeTransformJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransformJobResponse = exports.DescribeTransformJobResponse || (exports.DescribeTransformJobResponse = {}));
var DescribeTrialRequest;
(function (DescribeTrialRequest) {
    /**
     * @internal
     */
    DescribeTrialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrialRequest = exports.DescribeTrialRequest || (exports.DescribeTrialRequest = {}));
var TrialSource;
(function (TrialSource) {
    /**
     * @internal
     */
    TrialSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialSource = exports.TrialSource || (exports.TrialSource = {}));
var DescribeTrialResponse;
(function (DescribeTrialResponse) {
    /**
     * @internal
     */
    DescribeTrialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrialResponse = exports.DescribeTrialResponse || (exports.DescribeTrialResponse = {}));
var DescribeTrialComponentRequest;
(function (DescribeTrialComponentRequest) {
    /**
     * @internal
     */
    DescribeTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrialComponentRequest = exports.DescribeTrialComponentRequest || (exports.DescribeTrialComponentRequest = {}));
var TrialComponentMetricSummary;
(function (TrialComponentMetricSummary) {
    /**
     * @internal
     */
    TrialComponentMetricSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentMetricSummary = exports.TrialComponentMetricSummary || (exports.TrialComponentMetricSummary = {}));
var TrialComponentSource;
(function (TrialComponentSource) {
    /**
     * @internal
     */
    TrialComponentSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialComponentSource = exports.TrialComponentSource || (exports.TrialComponentSource = {}));
var DescribeTrialComponentResponse;
(function (DescribeTrialComponentResponse) {
    /**
     * @internal
     */
    DescribeTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && {
            Parameters: Object.entries(obj.Parameters).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: TrialComponentParameterValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(DescribeTrialComponentResponse = exports.DescribeTrialComponentResponse || (exports.DescribeTrialComponentResponse = {}));
var DescribeUserProfileRequest;
(function (DescribeUserProfileRequest) {
    /**
     * @internal
     */
    DescribeUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserProfileRequest = exports.DescribeUserProfileRequest || (exports.DescribeUserProfileRequest = {}));
var UserProfileStatus;
(function (UserProfileStatus) {
    UserProfileStatus["Delete_Failed"] = "Delete_Failed";
    UserProfileStatus["Deleting"] = "Deleting";
    UserProfileStatus["Failed"] = "Failed";
    UserProfileStatus["InService"] = "InService";
    UserProfileStatus["Pending"] = "Pending";
    UserProfileStatus["Update_Failed"] = "Update_Failed";
    UserProfileStatus["Updating"] = "Updating";
})(UserProfileStatus = exports.UserProfileStatus || (exports.UserProfileStatus = {}));
var DescribeUserProfileResponse;
(function (DescribeUserProfileResponse) {
    /**
     * @internal
     */
    DescribeUserProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserProfileResponse = exports.DescribeUserProfileResponse || (exports.DescribeUserProfileResponse = {}));
var DescribeWorkforceRequest;
(function (DescribeWorkforceRequest) {
    /**
     * @internal
     */
    DescribeWorkforceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkforceRequest = exports.DescribeWorkforceRequest || (exports.DescribeWorkforceRequest = {}));
var OidcConfigForResponse;
(function (OidcConfigForResponse) {
    /**
     * @internal
     */
    OidcConfigForResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OidcConfigForResponse = exports.OidcConfigForResponse || (exports.OidcConfigForResponse = {}));
var Workforce;
(function (Workforce) {
    /**
     * @internal
     */
    Workforce.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Workforce = exports.Workforce || (exports.Workforce = {}));
//# sourceMappingURL=models_1.js.map