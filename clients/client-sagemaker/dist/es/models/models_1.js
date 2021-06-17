import { __assign, __read } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var ModelDataQuality;
(function (ModelDataQuality) {
    /**
     * @internal
     */
    ModelDataQuality.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelDataQuality || (ModelDataQuality = {}));
export var ModelQuality;
(function (ModelQuality) {
    /**
     * @internal
     */
    ModelQuality.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelQuality || (ModelQuality = {}));
export var ModelMetrics;
(function (ModelMetrics) {
    /**
     * @internal
     */
    ModelMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelMetrics || (ModelMetrics = {}));
export var SourceAlgorithm;
(function (SourceAlgorithm) {
    /**
     * @internal
     */
    SourceAlgorithm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceAlgorithm || (SourceAlgorithm = {}));
export var SourceAlgorithmSpecification;
(function (SourceAlgorithmSpecification) {
    /**
     * @internal
     */
    SourceAlgorithmSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceAlgorithmSpecification || (SourceAlgorithmSpecification = {}));
export var ModelPackageValidationProfile;
(function (ModelPackageValidationProfile) {
    /**
     * @internal
     */
    ModelPackageValidationProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPackageValidationProfile || (ModelPackageValidationProfile = {}));
export var ModelPackageValidationSpecification;
(function (ModelPackageValidationSpecification) {
    /**
     * @internal
     */
    ModelPackageValidationSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPackageValidationSpecification || (ModelPackageValidationSpecification = {}));
export var CreateModelPackageInput;
(function (CreateModelPackageInput) {
    /**
     * @internal
     */
    CreateModelPackageInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelPackageInput || (CreateModelPackageInput = {}));
export var CreateModelPackageOutput;
(function (CreateModelPackageOutput) {
    /**
     * @internal
     */
    CreateModelPackageOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelPackageOutput || (CreateModelPackageOutput = {}));
export var CreateModelPackageGroupInput;
(function (CreateModelPackageGroupInput) {
    /**
     * @internal
     */
    CreateModelPackageGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelPackageGroupInput || (CreateModelPackageGroupInput = {}));
export var CreateModelPackageGroupOutput;
(function (CreateModelPackageGroupOutput) {
    /**
     * @internal
     */
    CreateModelPackageGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelPackageGroupOutput || (CreateModelPackageGroupOutput = {}));
export var MonitoringProblemType;
(function (MonitoringProblemType) {
    MonitoringProblemType["BINARY_CLASSIFICATION"] = "BinaryClassification";
    MonitoringProblemType["MULTICLASS_CLASSIFICATION"] = "MulticlassClassification";
    MonitoringProblemType["REGRESSION"] = "Regression";
})(MonitoringProblemType || (MonitoringProblemType = {}));
export var ModelQualityAppSpecification;
(function (ModelQualityAppSpecification) {
    /**
     * @internal
     */
    ModelQualityAppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelQualityAppSpecification || (ModelQualityAppSpecification = {}));
export var ModelQualityBaselineConfig;
(function (ModelQualityBaselineConfig) {
    /**
     * @internal
     */
    ModelQualityBaselineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelQualityBaselineConfig || (ModelQualityBaselineConfig = {}));
export var ModelQualityJobInput;
(function (ModelQualityJobInput) {
    /**
     * @internal
     */
    ModelQualityJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelQualityJobInput || (ModelQualityJobInput = {}));
export var CreateModelQualityJobDefinitionRequest;
(function (CreateModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelQualityJobDefinitionRequest || (CreateModelQualityJobDefinitionRequest = {}));
export var CreateModelQualityJobDefinitionResponse;
(function (CreateModelQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelQualityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelQualityJobDefinitionResponse || (CreateModelQualityJobDefinitionResponse = {}));
export var MonitoringBaselineConfig;
(function (MonitoringBaselineConfig) {
    /**
     * @internal
     */
    MonitoringBaselineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringBaselineConfig || (MonitoringBaselineConfig = {}));
export var MonitoringAppSpecification;
(function (MonitoringAppSpecification) {
    /**
     * @internal
     */
    MonitoringAppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringAppSpecification || (MonitoringAppSpecification = {}));
export var MonitoringInput;
(function (MonitoringInput) {
    /**
     * @internal
     */
    MonitoringInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringInput || (MonitoringInput = {}));
export var NetworkConfig;
(function (NetworkConfig) {
    /**
     * @internal
     */
    NetworkConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkConfig || (NetworkConfig = {}));
export var MonitoringJobDefinition;
(function (MonitoringJobDefinition) {
    /**
     * @internal
     */
    MonitoringJobDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringJobDefinition || (MonitoringJobDefinition = {}));
export var MonitoringType;
(function (MonitoringType) {
    MonitoringType["DATA_QUALITY"] = "DataQuality";
    MonitoringType["MODEL_BIAS"] = "ModelBias";
    MonitoringType["MODEL_EXPLAINABILITY"] = "ModelExplainability";
    MonitoringType["MODEL_QUALITY"] = "ModelQuality";
})(MonitoringType || (MonitoringType = {}));
export var ScheduleConfig;
(function (ScheduleConfig) {
    /**
     * @internal
     */
    ScheduleConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleConfig || (ScheduleConfig = {}));
export var MonitoringScheduleConfig;
(function (MonitoringScheduleConfig) {
    /**
     * @internal
     */
    MonitoringScheduleConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringScheduleConfig || (MonitoringScheduleConfig = {}));
export var CreateMonitoringScheduleRequest;
(function (CreateMonitoringScheduleRequest) {
    /**
     * @internal
     */
    CreateMonitoringScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMonitoringScheduleRequest || (CreateMonitoringScheduleRequest = {}));
export var CreateMonitoringScheduleResponse;
(function (CreateMonitoringScheduleResponse) {
    /**
     * @internal
     */
    CreateMonitoringScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMonitoringScheduleResponse || (CreateMonitoringScheduleResponse = {}));
export var NotebookInstanceAcceleratorType;
(function (NotebookInstanceAcceleratorType) {
    NotebookInstanceAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    NotebookInstanceAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    NotebookInstanceAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    NotebookInstanceAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    NotebookInstanceAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    NotebookInstanceAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(NotebookInstanceAcceleratorType || (NotebookInstanceAcceleratorType = {}));
export var DirectInternetAccess;
(function (DirectInternetAccess) {
    DirectInternetAccess["DISABLED"] = "Disabled";
    DirectInternetAccess["ENABLED"] = "Enabled";
})(DirectInternetAccess || (DirectInternetAccess = {}));
export var _InstanceType;
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
})(_InstanceType || (_InstanceType = {}));
export var RootAccess;
(function (RootAccess) {
    RootAccess["DISABLED"] = "Disabled";
    RootAccess["ENABLED"] = "Enabled";
})(RootAccess || (RootAccess = {}));
export var CreateNotebookInstanceInput;
(function (CreateNotebookInstanceInput) {
    /**
     * @internal
     */
    CreateNotebookInstanceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotebookInstanceInput || (CreateNotebookInstanceInput = {}));
export var CreateNotebookInstanceOutput;
(function (CreateNotebookInstanceOutput) {
    /**
     * @internal
     */
    CreateNotebookInstanceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotebookInstanceOutput || (CreateNotebookInstanceOutput = {}));
export var NotebookInstanceLifecycleHook;
(function (NotebookInstanceLifecycleHook) {
    /**
     * @internal
     */
    NotebookInstanceLifecycleHook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotebookInstanceLifecycleHook || (NotebookInstanceLifecycleHook = {}));
export var CreateNotebookInstanceLifecycleConfigInput;
(function (CreateNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    CreateNotebookInstanceLifecycleConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotebookInstanceLifecycleConfigInput || (CreateNotebookInstanceLifecycleConfigInput = {}));
export var CreateNotebookInstanceLifecycleConfigOutput;
(function (CreateNotebookInstanceLifecycleConfigOutput) {
    /**
     * @internal
     */
    CreateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotebookInstanceLifecycleConfigOutput || (CreateNotebookInstanceLifecycleConfigOutput = {}));
export var CreatePipelineRequest;
(function (CreatePipelineRequest) {
    /**
     * @internal
     */
    CreatePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePipelineRequest || (CreatePipelineRequest = {}));
export var CreatePipelineResponse;
(function (CreatePipelineResponse) {
    /**
     * @internal
     */
    CreatePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePipelineResponse || (CreatePipelineResponse = {}));
export var CreatePresignedDomainUrlRequest;
(function (CreatePresignedDomainUrlRequest) {
    /**
     * @internal
     */
    CreatePresignedDomainUrlRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresignedDomainUrlRequest || (CreatePresignedDomainUrlRequest = {}));
export var CreatePresignedDomainUrlResponse;
(function (CreatePresignedDomainUrlResponse) {
    /**
     * @internal
     */
    CreatePresignedDomainUrlResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresignedDomainUrlResponse || (CreatePresignedDomainUrlResponse = {}));
export var CreatePresignedNotebookInstanceUrlInput;
(function (CreatePresignedNotebookInstanceUrlInput) {
    /**
     * @internal
     */
    CreatePresignedNotebookInstanceUrlInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresignedNotebookInstanceUrlInput || (CreatePresignedNotebookInstanceUrlInput = {}));
export var CreatePresignedNotebookInstanceUrlOutput;
(function (CreatePresignedNotebookInstanceUrlOutput) {
    /**
     * @internal
     */
    CreatePresignedNotebookInstanceUrlOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresignedNotebookInstanceUrlOutput || (CreatePresignedNotebookInstanceUrlOutput = {}));
export var ExperimentConfig;
(function (ExperimentConfig) {
    /**
     * @internal
     */
    ExperimentConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExperimentConfig || (ExperimentConfig = {}));
export var DataDistributionType;
(function (DataDistributionType) {
    DataDistributionType["FULLYREPLICATED"] = "FullyReplicated";
    DataDistributionType["SHARDEDBYS3KEY"] = "ShardedByS3Key";
})(DataDistributionType || (DataDistributionType = {}));
export var InputMode;
(function (InputMode) {
    InputMode["FILE"] = "File";
    InputMode["PIPE"] = "Pipe";
})(InputMode || (InputMode = {}));
export var RedshiftResultCompressionType;
(function (RedshiftResultCompressionType) {
    RedshiftResultCompressionType["BZIP2"] = "BZIP2";
    RedshiftResultCompressionType["GZIP"] = "GZIP";
    RedshiftResultCompressionType["NONE"] = "None";
    RedshiftResultCompressionType["SNAPPY"] = "SNAPPY";
    RedshiftResultCompressionType["ZSTD"] = "ZSTD";
})(RedshiftResultCompressionType || (RedshiftResultCompressionType = {}));
export var RedshiftResultFormat;
(function (RedshiftResultFormat) {
    RedshiftResultFormat["CSV"] = "CSV";
    RedshiftResultFormat["PARQUET"] = "PARQUET";
})(RedshiftResultFormat || (RedshiftResultFormat = {}));
export var RedshiftDatasetDefinition;
(function (RedshiftDatasetDefinition) {
    /**
     * @internal
     */
    RedshiftDatasetDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftDatasetDefinition || (RedshiftDatasetDefinition = {}));
export var DatasetDefinition;
(function (DatasetDefinition) {
    /**
     * @internal
     */
    DatasetDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetDefinition || (DatasetDefinition = {}));
export var ProcessingS3CompressionType;
(function (ProcessingS3CompressionType) {
    ProcessingS3CompressionType["GZIP"] = "Gzip";
    ProcessingS3CompressionType["NONE"] = "None";
})(ProcessingS3CompressionType || (ProcessingS3CompressionType = {}));
export var ProcessingS3DataType;
(function (ProcessingS3DataType) {
    ProcessingS3DataType["MANIFEST_FILE"] = "ManifestFile";
    ProcessingS3DataType["S3_PREFIX"] = "S3Prefix";
})(ProcessingS3DataType || (ProcessingS3DataType = {}));
export var ProcessingS3Input;
(function (ProcessingS3Input) {
    /**
     * @internal
     */
    ProcessingS3Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingS3Input || (ProcessingS3Input = {}));
export var ProcessingInput;
(function (ProcessingInput) {
    /**
     * @internal
     */
    ProcessingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingInput || (ProcessingInput = {}));
export var ProcessingFeatureStoreOutput;
(function (ProcessingFeatureStoreOutput) {
    /**
     * @internal
     */
    ProcessingFeatureStoreOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingFeatureStoreOutput || (ProcessingFeatureStoreOutput = {}));
export var ProcessingS3Output;
(function (ProcessingS3Output) {
    /**
     * @internal
     */
    ProcessingS3Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingS3Output || (ProcessingS3Output = {}));
export var ProcessingOutput;
(function (ProcessingOutput) {
    /**
     * @internal
     */
    ProcessingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingOutput || (ProcessingOutput = {}));
export var ProcessingOutputConfig;
(function (ProcessingOutputConfig) {
    /**
     * @internal
     */
    ProcessingOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingOutputConfig || (ProcessingOutputConfig = {}));
export var ProcessingClusterConfig;
(function (ProcessingClusterConfig) {
    /**
     * @internal
     */
    ProcessingClusterConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingClusterConfig || (ProcessingClusterConfig = {}));
export var ProcessingResources;
(function (ProcessingResources) {
    /**
     * @internal
     */
    ProcessingResources.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingResources || (ProcessingResources = {}));
export var ProcessingStoppingCondition;
(function (ProcessingStoppingCondition) {
    /**
     * @internal
     */
    ProcessingStoppingCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProcessingStoppingCondition || (ProcessingStoppingCondition = {}));
export var CreateProcessingJobRequest;
(function (CreateProcessingJobRequest) {
    /**
     * @internal
     */
    CreateProcessingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProcessingJobRequest || (CreateProcessingJobRequest = {}));
export var CreateProcessingJobResponse;
(function (CreateProcessingJobResponse) {
    /**
     * @internal
     */
    CreateProcessingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProcessingJobResponse || (CreateProcessingJobResponse = {}));
export var ProvisioningParameter;
(function (ProvisioningParameter) {
    /**
     * @internal
     */
    ProvisioningParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisioningParameter || (ProvisioningParameter = {}));
export var ServiceCatalogProvisioningDetails;
(function (ServiceCatalogProvisioningDetails) {
    /**
     * @internal
     */
    ServiceCatalogProvisioningDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceCatalogProvisioningDetails || (ServiceCatalogProvisioningDetails = {}));
export var CreateProjectInput;
(function (CreateProjectInput) {
    /**
     * @internal
     */
    CreateProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectInput || (CreateProjectInput = {}));
export var CreateProjectOutput;
(function (CreateProjectOutput) {
    /**
     * @internal
     */
    CreateProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectOutput || (CreateProjectOutput = {}));
export var DebugHookConfig;
(function (DebugHookConfig) {
    /**
     * @internal
     */
    DebugHookConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DebugHookConfig || (DebugHookConfig = {}));
export var DebugRuleConfiguration;
(function (DebugRuleConfiguration) {
    /**
     * @internal
     */
    DebugRuleConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DebugRuleConfiguration || (DebugRuleConfiguration = {}));
export var ProfilerConfig;
(function (ProfilerConfig) {
    /**
     * @internal
     */
    ProfilerConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfilerConfig || (ProfilerConfig = {}));
export var ProfilerRuleConfiguration;
(function (ProfilerRuleConfiguration) {
    /**
     * @internal
     */
    ProfilerRuleConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfilerRuleConfiguration || (ProfilerRuleConfiguration = {}));
export var TensorBoardOutputConfig;
(function (TensorBoardOutputConfig) {
    /**
     * @internal
     */
    TensorBoardOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TensorBoardOutputConfig || (TensorBoardOutputConfig = {}));
export var CreateTrainingJobRequest;
(function (CreateTrainingJobRequest) {
    /**
     * @internal
     */
    CreateTrainingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrainingJobRequest || (CreateTrainingJobRequest = {}));
export var CreateTrainingJobResponse;
(function (CreateTrainingJobResponse) {
    /**
     * @internal
     */
    CreateTrainingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrainingJobResponse || (CreateTrainingJobResponse = {}));
export var JoinSource;
(function (JoinSource) {
    JoinSource["INPUT"] = "Input";
    JoinSource["NONE"] = "None";
})(JoinSource || (JoinSource = {}));
export var DataProcessing;
(function (DataProcessing) {
    /**
     * @internal
     */
    DataProcessing.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataProcessing || (DataProcessing = {}));
export var ModelClientConfig;
(function (ModelClientConfig) {
    /**
     * @internal
     */
    ModelClientConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelClientConfig || (ModelClientConfig = {}));
export var CreateTransformJobRequest;
(function (CreateTransformJobRequest) {
    /**
     * @internal
     */
    CreateTransformJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTransformJobRequest || (CreateTransformJobRequest = {}));
export var CreateTransformJobResponse;
(function (CreateTransformJobResponse) {
    /**
     * @internal
     */
    CreateTransformJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTransformJobResponse || (CreateTransformJobResponse = {}));
export var CreateTrialRequest;
(function (CreateTrialRequest) {
    /**
     * @internal
     */
    CreateTrialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrialRequest || (CreateTrialRequest = {}));
export var CreateTrialResponse;
(function (CreateTrialResponse) {
    /**
     * @internal
     */
    CreateTrialResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrialResponse || (CreateTrialResponse = {}));
export var TrialComponentArtifact;
(function (TrialComponentArtifact) {
    /**
     * @internal
     */
    TrialComponentArtifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialComponentArtifact || (TrialComponentArtifact = {}));
export var TrialComponentParameterValue;
(function (TrialComponentParameterValue) {
    TrialComponentParameterValue.visit = function (value, visitor) {
        if (value.StringValue !== undefined)
            return visitor.StringValue(value.StringValue);
        if (value.NumberValue !== undefined)
            return visitor.NumberValue(value.NumberValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    TrialComponentParameterValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.NumberValue !== undefined)
            return { NumberValue: obj.NumberValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(TrialComponentParameterValue || (TrialComponentParameterValue = {}));
export var TrialComponentPrimaryStatus;
(function (TrialComponentPrimaryStatus) {
    TrialComponentPrimaryStatus["COMPLETED"] = "Completed";
    TrialComponentPrimaryStatus["FAILED"] = "Failed";
    TrialComponentPrimaryStatus["IN_PROGRESS"] = "InProgress";
    TrialComponentPrimaryStatus["STOPPED"] = "Stopped";
    TrialComponentPrimaryStatus["STOPPING"] = "Stopping";
})(TrialComponentPrimaryStatus || (TrialComponentPrimaryStatus = {}));
export var TrialComponentStatus;
(function (TrialComponentStatus) {
    /**
     * @internal
     */
    TrialComponentStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialComponentStatus || (TrialComponentStatus = {}));
export var CreateTrialComponentRequest;
(function (CreateTrialComponentRequest) {
    /**
     * @internal
     */
    CreateTrialComponentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Parameters && {
        Parameters: Object.entries(obj.Parameters).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = TrialComponentParameterValue.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(CreateTrialComponentRequest || (CreateTrialComponentRequest = {}));
export var CreateTrialComponentResponse;
(function (CreateTrialComponentResponse) {
    /**
     * @internal
     */
    CreateTrialComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrialComponentResponse || (CreateTrialComponentResponse = {}));
export var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    /**
     * @internal
     */
    CreateUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserProfileRequest || (CreateUserProfileRequest = {}));
export var CreateUserProfileResponse;
(function (CreateUserProfileResponse) {
    /**
     * @internal
     */
    CreateUserProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserProfileResponse || (CreateUserProfileResponse = {}));
export var OidcConfig;
(function (OidcConfig) {
    /**
     * @internal
     */
    OidcConfig.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }))); };
})(OidcConfig || (OidcConfig = {}));
export var SourceIpConfig;
(function (SourceIpConfig) {
    /**
     * @internal
     */
    SourceIpConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceIpConfig || (SourceIpConfig = {}));
export var CreateWorkforceRequest;
(function (CreateWorkforceRequest) {
    /**
     * @internal
     */
    CreateWorkforceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }))); };
})(CreateWorkforceRequest || (CreateWorkforceRequest = {}));
export var CreateWorkforceResponse;
(function (CreateWorkforceResponse) {
    /**
     * @internal
     */
    CreateWorkforceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorkforceResponse || (CreateWorkforceResponse = {}));
export var OidcMemberDefinition;
(function (OidcMemberDefinition) {
    /**
     * @internal
     */
    OidcMemberDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OidcMemberDefinition || (OidcMemberDefinition = {}));
export var MemberDefinition;
(function (MemberDefinition) {
    /**
     * @internal
     */
    MemberDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberDefinition || (MemberDefinition = {}));
export var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationConfiguration || (NotificationConfiguration = {}));
export var CreateWorkteamRequest;
(function (CreateWorkteamRequest) {
    /**
     * @internal
     */
    CreateWorkteamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorkteamRequest || (CreateWorkteamRequest = {}));
export var CreateWorkteamResponse;
(function (CreateWorkteamResponse) {
    /**
     * @internal
     */
    CreateWorkteamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorkteamResponse || (CreateWorkteamResponse = {}));
export var DataCaptureConfigSummary;
(function (DataCaptureConfigSummary) {
    /**
     * @internal
     */
    DataCaptureConfigSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataCaptureConfigSummary || (DataCaptureConfigSummary = {}));
export var RuleEvaluationStatus;
(function (RuleEvaluationStatus) {
    RuleEvaluationStatus["ERROR"] = "Error";
    RuleEvaluationStatus["IN_PROGRESS"] = "InProgress";
    RuleEvaluationStatus["ISSUES_FOUND"] = "IssuesFound";
    RuleEvaluationStatus["NO_ISSUES_FOUND"] = "NoIssuesFound";
    RuleEvaluationStatus["STOPPED"] = "Stopped";
    RuleEvaluationStatus["STOPPING"] = "Stopping";
})(RuleEvaluationStatus || (RuleEvaluationStatus = {}));
export var DebugRuleEvaluationStatus;
(function (DebugRuleEvaluationStatus) {
    /**
     * @internal
     */
    DebugRuleEvaluationStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DebugRuleEvaluationStatus || (DebugRuleEvaluationStatus = {}));
export var DeleteActionRequest;
(function (DeleteActionRequest) {
    /**
     * @internal
     */
    DeleteActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActionRequest || (DeleteActionRequest = {}));
export var DeleteActionResponse;
(function (DeleteActionResponse) {
    /**
     * @internal
     */
    DeleteActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActionResponse || (DeleteActionResponse = {}));
export var DeleteAlgorithmInput;
(function (DeleteAlgorithmInput) {
    /**
     * @internal
     */
    DeleteAlgorithmInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAlgorithmInput || (DeleteAlgorithmInput = {}));
export var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppRequest || (DeleteAppRequest = {}));
export var DeleteAppImageConfigRequest;
(function (DeleteAppImageConfigRequest) {
    /**
     * @internal
     */
    DeleteAppImageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppImageConfigRequest || (DeleteAppImageConfigRequest = {}));
export var DeleteArtifactRequest;
(function (DeleteArtifactRequest) {
    /**
     * @internal
     */
    DeleteArtifactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteArtifactRequest || (DeleteArtifactRequest = {}));
export var DeleteArtifactResponse;
(function (DeleteArtifactResponse) {
    /**
     * @internal
     */
    DeleteArtifactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteArtifactResponse || (DeleteArtifactResponse = {}));
export var DeleteAssociationRequest;
(function (DeleteAssociationRequest) {
    /**
     * @internal
     */
    DeleteAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssociationRequest || (DeleteAssociationRequest = {}));
export var DeleteAssociationResponse;
(function (DeleteAssociationResponse) {
    /**
     * @internal
     */
    DeleteAssociationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssociationResponse || (DeleteAssociationResponse = {}));
export var DeleteCodeRepositoryInput;
(function (DeleteCodeRepositoryInput) {
    /**
     * @internal
     */
    DeleteCodeRepositoryInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCodeRepositoryInput || (DeleteCodeRepositoryInput = {}));
export var DeleteContextRequest;
(function (DeleteContextRequest) {
    /**
     * @internal
     */
    DeleteContextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContextRequest || (DeleteContextRequest = {}));
export var DeleteContextResponse;
(function (DeleteContextResponse) {
    /**
     * @internal
     */
    DeleteContextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContextResponse || (DeleteContextResponse = {}));
export var DeleteDataQualityJobDefinitionRequest;
(function (DeleteDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteDataQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDataQualityJobDefinitionRequest || (DeleteDataQualityJobDefinitionRequest = {}));
export var DeleteDeviceFleetRequest;
(function (DeleteDeviceFleetRequest) {
    /**
     * @internal
     */
    DeleteDeviceFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeviceFleetRequest || (DeleteDeviceFleetRequest = {}));
export var RetentionType;
(function (RetentionType) {
    RetentionType["Delete"] = "Delete";
    RetentionType["Retain"] = "Retain";
})(RetentionType || (RetentionType = {}));
export var RetentionPolicy;
(function (RetentionPolicy) {
    /**
     * @internal
     */
    RetentionPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetentionPolicy || (RetentionPolicy = {}));
export var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainRequest || (DeleteDomainRequest = {}));
export var DeleteEndpointInput;
(function (DeleteEndpointInput) {
    /**
     * @internal
     */
    DeleteEndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEndpointInput || (DeleteEndpointInput = {}));
export var DeleteEndpointConfigInput;
(function (DeleteEndpointConfigInput) {
    /**
     * @internal
     */
    DeleteEndpointConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEndpointConfigInput || (DeleteEndpointConfigInput = {}));
export var DeleteExperimentRequest;
(function (DeleteExperimentRequest) {
    /**
     * @internal
     */
    DeleteExperimentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExperimentRequest || (DeleteExperimentRequest = {}));
export var DeleteExperimentResponse;
(function (DeleteExperimentResponse) {
    /**
     * @internal
     */
    DeleteExperimentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteExperimentResponse || (DeleteExperimentResponse = {}));
export var DeleteFeatureGroupRequest;
(function (DeleteFeatureGroupRequest) {
    /**
     * @internal
     */
    DeleteFeatureGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFeatureGroupRequest || (DeleteFeatureGroupRequest = {}));
export var DeleteFlowDefinitionRequest;
(function (DeleteFlowDefinitionRequest) {
    /**
     * @internal
     */
    DeleteFlowDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFlowDefinitionRequest || (DeleteFlowDefinitionRequest = {}));
export var DeleteFlowDefinitionResponse;
(function (DeleteFlowDefinitionResponse) {
    /**
     * @internal
     */
    DeleteFlowDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFlowDefinitionResponse || (DeleteFlowDefinitionResponse = {}));
export var DeleteHumanTaskUiRequest;
(function (DeleteHumanTaskUiRequest) {
    /**
     * @internal
     */
    DeleteHumanTaskUiRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteHumanTaskUiRequest || (DeleteHumanTaskUiRequest = {}));
export var DeleteHumanTaskUiResponse;
(function (DeleteHumanTaskUiResponse) {
    /**
     * @internal
     */
    DeleteHumanTaskUiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteHumanTaskUiResponse || (DeleteHumanTaskUiResponse = {}));
export var DeleteImageRequest;
(function (DeleteImageRequest) {
    /**
     * @internal
     */
    DeleteImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageRequest || (DeleteImageRequest = {}));
export var DeleteImageResponse;
(function (DeleteImageResponse) {
    /**
     * @internal
     */
    DeleteImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageResponse || (DeleteImageResponse = {}));
export var DeleteImageVersionRequest;
(function (DeleteImageVersionRequest) {
    /**
     * @internal
     */
    DeleteImageVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageVersionRequest || (DeleteImageVersionRequest = {}));
export var DeleteImageVersionResponse;
(function (DeleteImageVersionResponse) {
    /**
     * @internal
     */
    DeleteImageVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageVersionResponse || (DeleteImageVersionResponse = {}));
export var DeleteModelInput;
(function (DeleteModelInput) {
    /**
     * @internal
     */
    DeleteModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelInput || (DeleteModelInput = {}));
export var DeleteModelBiasJobDefinitionRequest;
(function (DeleteModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelBiasJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelBiasJobDefinitionRequest || (DeleteModelBiasJobDefinitionRequest = {}));
export var DeleteModelExplainabilityJobDefinitionRequest;
(function (DeleteModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelExplainabilityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelExplainabilityJobDefinitionRequest || (DeleteModelExplainabilityJobDefinitionRequest = {}));
export var DeleteModelPackageInput;
(function (DeleteModelPackageInput) {
    /**
     * @internal
     */
    DeleteModelPackageInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelPackageInput || (DeleteModelPackageInput = {}));
export var DeleteModelPackageGroupInput;
(function (DeleteModelPackageGroupInput) {
    /**
     * @internal
     */
    DeleteModelPackageGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelPackageGroupInput || (DeleteModelPackageGroupInput = {}));
export var DeleteModelPackageGroupPolicyInput;
(function (DeleteModelPackageGroupPolicyInput) {
    /**
     * @internal
     */
    DeleteModelPackageGroupPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelPackageGroupPolicyInput || (DeleteModelPackageGroupPolicyInput = {}));
export var DeleteModelQualityJobDefinitionRequest;
(function (DeleteModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DeleteModelQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelQualityJobDefinitionRequest || (DeleteModelQualityJobDefinitionRequest = {}));
export var DeleteMonitoringScheduleRequest;
(function (DeleteMonitoringScheduleRequest) {
    /**
     * @internal
     */
    DeleteMonitoringScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMonitoringScheduleRequest || (DeleteMonitoringScheduleRequest = {}));
export var DeleteNotebookInstanceInput;
(function (DeleteNotebookInstanceInput) {
    /**
     * @internal
     */
    DeleteNotebookInstanceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotebookInstanceInput || (DeleteNotebookInstanceInput = {}));
export var DeleteNotebookInstanceLifecycleConfigInput;
(function (DeleteNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    DeleteNotebookInstanceLifecycleConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotebookInstanceLifecycleConfigInput || (DeleteNotebookInstanceLifecycleConfigInput = {}));
export var DeletePipelineRequest;
(function (DeletePipelineRequest) {
    /**
     * @internal
     */
    DeletePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePipelineRequest || (DeletePipelineRequest = {}));
export var DeletePipelineResponse;
(function (DeletePipelineResponse) {
    /**
     * @internal
     */
    DeletePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePipelineResponse || (DeletePipelineResponse = {}));
export var DeleteProjectInput;
(function (DeleteProjectInput) {
    /**
     * @internal
     */
    DeleteProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectInput || (DeleteProjectInput = {}));
export var DeleteTagsInput;
(function (DeleteTagsInput) {
    /**
     * @internal
     */
    DeleteTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsInput || (DeleteTagsInput = {}));
export var DeleteTagsOutput;
(function (DeleteTagsOutput) {
    /**
     * @internal
     */
    DeleteTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsOutput || (DeleteTagsOutput = {}));
export var DeleteTrialRequest;
(function (DeleteTrialRequest) {
    /**
     * @internal
     */
    DeleteTrialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrialRequest || (DeleteTrialRequest = {}));
export var DeleteTrialResponse;
(function (DeleteTrialResponse) {
    /**
     * @internal
     */
    DeleteTrialResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrialResponse || (DeleteTrialResponse = {}));
export var DeleteTrialComponentRequest;
(function (DeleteTrialComponentRequest) {
    /**
     * @internal
     */
    DeleteTrialComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrialComponentRequest || (DeleteTrialComponentRequest = {}));
export var DeleteTrialComponentResponse;
(function (DeleteTrialComponentResponse) {
    /**
     * @internal
     */
    DeleteTrialComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrialComponentResponse || (DeleteTrialComponentResponse = {}));
export var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    /**
     * @internal
     */
    DeleteUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserProfileRequest || (DeleteUserProfileRequest = {}));
export var DeleteWorkforceRequest;
(function (DeleteWorkforceRequest) {
    /**
     * @internal
     */
    DeleteWorkforceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorkforceRequest || (DeleteWorkforceRequest = {}));
export var DeleteWorkforceResponse;
(function (DeleteWorkforceResponse) {
    /**
     * @internal
     */
    DeleteWorkforceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorkforceResponse || (DeleteWorkforceResponse = {}));
export var DeleteWorkteamRequest;
(function (DeleteWorkteamRequest) {
    /**
     * @internal
     */
    DeleteWorkteamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorkteamRequest || (DeleteWorkteamRequest = {}));
export var DeleteWorkteamResponse;
(function (DeleteWorkteamResponse) {
    /**
     * @internal
     */
    DeleteWorkteamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorkteamResponse || (DeleteWorkteamResponse = {}));
export var DeployedImage;
(function (DeployedImage) {
    /**
     * @internal
     */
    DeployedImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeployedImage || (DeployedImage = {}));
export var DeploymentConfig;
(function (DeploymentConfig) {
    /**
     * @internal
     */
    DeploymentConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentConfig || (DeploymentConfig = {}));
export var DeregisterDevicesRequest;
(function (DeregisterDevicesRequest) {
    /**
     * @internal
     */
    DeregisterDevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterDevicesRequest || (DeregisterDevicesRequest = {}));
export var DescribeActionRequest;
(function (DescribeActionRequest) {
    /**
     * @internal
     */
    DescribeActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActionRequest || (DescribeActionRequest = {}));
export var DescribeActionResponse;
(function (DescribeActionResponse) {
    /**
     * @internal
     */
    DescribeActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActionResponse || (DescribeActionResponse = {}));
export var DescribeAlgorithmInput;
(function (DescribeAlgorithmInput) {
    /**
     * @internal
     */
    DescribeAlgorithmInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAlgorithmInput || (DescribeAlgorithmInput = {}));
export var DescribeAlgorithmOutput;
(function (DescribeAlgorithmOutput) {
    /**
     * @internal
     */
    DescribeAlgorithmOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAlgorithmOutput || (DescribeAlgorithmOutput = {}));
export var DescribeAppRequest;
(function (DescribeAppRequest) {
    /**
     * @internal
     */
    DescribeAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAppRequest || (DescribeAppRequest = {}));
export var DescribeAppResponse;
(function (DescribeAppResponse) {
    /**
     * @internal
     */
    DescribeAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAppResponse || (DescribeAppResponse = {}));
export var DescribeAppImageConfigRequest;
(function (DescribeAppImageConfigRequest) {
    /**
     * @internal
     */
    DescribeAppImageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAppImageConfigRequest || (DescribeAppImageConfigRequest = {}));
export var DescribeAppImageConfigResponse;
(function (DescribeAppImageConfigResponse) {
    /**
     * @internal
     */
    DescribeAppImageConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAppImageConfigResponse || (DescribeAppImageConfigResponse = {}));
export var DescribeArtifactRequest;
(function (DescribeArtifactRequest) {
    /**
     * @internal
     */
    DescribeArtifactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeArtifactRequest || (DescribeArtifactRequest = {}));
export var DescribeArtifactResponse;
(function (DescribeArtifactResponse) {
    /**
     * @internal
     */
    DescribeArtifactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeArtifactResponse || (DescribeArtifactResponse = {}));
export var DescribeAutoMLJobRequest;
(function (DescribeAutoMLJobRequest) {
    /**
     * @internal
     */
    DescribeAutoMLJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutoMLJobRequest || (DescribeAutoMLJobRequest = {}));
export var ModelDeployResult;
(function (ModelDeployResult) {
    /**
     * @internal
     */
    ModelDeployResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelDeployResult || (ModelDeployResult = {}));
export var ResolvedAttributes;
(function (ResolvedAttributes) {
    /**
     * @internal
     */
    ResolvedAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResolvedAttributes || (ResolvedAttributes = {}));
export var DescribeAutoMLJobResponse;
(function (DescribeAutoMLJobResponse) {
    /**
     * @internal
     */
    DescribeAutoMLJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutoMLJobResponse || (DescribeAutoMLJobResponse = {}));
export var DescribeCodeRepositoryInput;
(function (DescribeCodeRepositoryInput) {
    /**
     * @internal
     */
    DescribeCodeRepositoryInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeRepositoryInput || (DescribeCodeRepositoryInput = {}));
export var DescribeCodeRepositoryOutput;
(function (DescribeCodeRepositoryOutput) {
    /**
     * @internal
     */
    DescribeCodeRepositoryOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeRepositoryOutput || (DescribeCodeRepositoryOutput = {}));
export var DescribeCompilationJobRequest;
(function (DescribeCompilationJobRequest) {
    /**
     * @internal
     */
    DescribeCompilationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCompilationJobRequest || (DescribeCompilationJobRequest = {}));
export var ModelArtifacts;
(function (ModelArtifacts) {
    /**
     * @internal
     */
    ModelArtifacts.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelArtifacts || (ModelArtifacts = {}));
export var ModelDigests;
(function (ModelDigests) {
    /**
     * @internal
     */
    ModelDigests.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelDigests || (ModelDigests = {}));
export var DescribeCompilationJobResponse;
(function (DescribeCompilationJobResponse) {
    /**
     * @internal
     */
    DescribeCompilationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCompilationJobResponse || (DescribeCompilationJobResponse = {}));
export var DescribeContextRequest;
(function (DescribeContextRequest) {
    /**
     * @internal
     */
    DescribeContextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContextRequest || (DescribeContextRequest = {}));
export var DescribeContextResponse;
(function (DescribeContextResponse) {
    /**
     * @internal
     */
    DescribeContextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContextResponse || (DescribeContextResponse = {}));
export var DescribeDataQualityJobDefinitionRequest;
(function (DescribeDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeDataQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataQualityJobDefinitionRequest || (DescribeDataQualityJobDefinitionRequest = {}));
export var DescribeDataQualityJobDefinitionResponse;
(function (DescribeDataQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeDataQualityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataQualityJobDefinitionResponse || (DescribeDataQualityJobDefinitionResponse = {}));
export var DescribeDeviceRequest;
(function (DescribeDeviceRequest) {
    /**
     * @internal
     */
    DescribeDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeviceRequest || (DescribeDeviceRequest = {}));
export var EdgeModel;
(function (EdgeModel) {
    /**
     * @internal
     */
    EdgeModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EdgeModel || (EdgeModel = {}));
export var DescribeDeviceResponse;
(function (DescribeDeviceResponse) {
    /**
     * @internal
     */
    DescribeDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeviceResponse || (DescribeDeviceResponse = {}));
export var DescribeDeviceFleetRequest;
(function (DescribeDeviceFleetRequest) {
    /**
     * @internal
     */
    DescribeDeviceFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeviceFleetRequest || (DescribeDeviceFleetRequest = {}));
export var DescribeDeviceFleetResponse;
(function (DescribeDeviceFleetResponse) {
    /**
     * @internal
     */
    DescribeDeviceFleetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeviceFleetResponse || (DescribeDeviceFleetResponse = {}));
export var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    /**
     * @internal
     */
    DescribeDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainRequest || (DescribeDomainRequest = {}));
export var DomainStatus;
(function (DomainStatus) {
    DomainStatus["Delete_Failed"] = "Delete_Failed";
    DomainStatus["Deleting"] = "Deleting";
    DomainStatus["Failed"] = "Failed";
    DomainStatus["InService"] = "InService";
    DomainStatus["Pending"] = "Pending";
    DomainStatus["Update_Failed"] = "Update_Failed";
    DomainStatus["Updating"] = "Updating";
})(DomainStatus || (DomainStatus = {}));
export var DescribeDomainResponse;
(function (DescribeDomainResponse) {
    /**
     * @internal
     */
    DescribeDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainResponse || (DescribeDomainResponse = {}));
export var DescribeEdgePackagingJobRequest;
(function (DescribeEdgePackagingJobRequest) {
    /**
     * @internal
     */
    DescribeEdgePackagingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEdgePackagingJobRequest || (DescribeEdgePackagingJobRequest = {}));
export var EdgePackagingJobStatus;
(function (EdgePackagingJobStatus) {
    EdgePackagingJobStatus["Completed"] = "COMPLETED";
    EdgePackagingJobStatus["Failed"] = "FAILED";
    EdgePackagingJobStatus["InProgress"] = "INPROGRESS";
    EdgePackagingJobStatus["Starting"] = "STARTING";
    EdgePackagingJobStatus["Stopped"] = "STOPPED";
    EdgePackagingJobStatus["Stopping"] = "STOPPING";
})(EdgePackagingJobStatus || (EdgePackagingJobStatus = {}));
export var DescribeEdgePackagingJobResponse;
(function (DescribeEdgePackagingJobResponse) {
    /**
     * @internal
     */
    DescribeEdgePackagingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEdgePackagingJobResponse || (DescribeEdgePackagingJobResponse = {}));
export var DescribeEndpointInput;
(function (DescribeEndpointInput) {
    /**
     * @internal
     */
    DescribeEndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointInput || (DescribeEndpointInput = {}));
export var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["CREATING"] = "Creating";
    EndpointStatus["DELETING"] = "Deleting";
    EndpointStatus["FAILED"] = "Failed";
    EndpointStatus["IN_SERVICE"] = "InService";
    EndpointStatus["OUT_OF_SERVICE"] = "OutOfService";
    EndpointStatus["ROLLING_BACK"] = "RollingBack";
    EndpointStatus["SYSTEM_UPDATING"] = "SystemUpdating";
    EndpointStatus["UPDATING"] = "Updating";
})(EndpointStatus || (EndpointStatus = {}));
export var ProductionVariantSummary;
(function (ProductionVariantSummary) {
    /**
     * @internal
     */
    ProductionVariantSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProductionVariantSummary || (ProductionVariantSummary = {}));
export var DescribeEndpointOutput;
(function (DescribeEndpointOutput) {
    /**
     * @internal
     */
    DescribeEndpointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointOutput || (DescribeEndpointOutput = {}));
export var DescribeEndpointConfigInput;
(function (DescribeEndpointConfigInput) {
    /**
     * @internal
     */
    DescribeEndpointConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointConfigInput || (DescribeEndpointConfigInput = {}));
export var DescribeEndpointConfigOutput;
(function (DescribeEndpointConfigOutput) {
    /**
     * @internal
     */
    DescribeEndpointConfigOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointConfigOutput || (DescribeEndpointConfigOutput = {}));
export var DescribeExperimentRequest;
(function (DescribeExperimentRequest) {
    /**
     * @internal
     */
    DescribeExperimentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExperimentRequest || (DescribeExperimentRequest = {}));
export var ExperimentSource;
(function (ExperimentSource) {
    /**
     * @internal
     */
    ExperimentSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExperimentSource || (ExperimentSource = {}));
export var DescribeExperimentResponse;
(function (DescribeExperimentResponse) {
    /**
     * @internal
     */
    DescribeExperimentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExperimentResponse || (DescribeExperimentResponse = {}));
export var DescribeFeatureGroupRequest;
(function (DescribeFeatureGroupRequest) {
    /**
     * @internal
     */
    DescribeFeatureGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFeatureGroupRequest || (DescribeFeatureGroupRequest = {}));
export var FeatureGroupStatus;
(function (FeatureGroupStatus) {
    FeatureGroupStatus["CREATED"] = "Created";
    FeatureGroupStatus["CREATE_FAILED"] = "CreateFailed";
    FeatureGroupStatus["CREATING"] = "Creating";
    FeatureGroupStatus["DELETE_FAILED"] = "DeleteFailed";
    FeatureGroupStatus["DELETING"] = "Deleting";
})(FeatureGroupStatus || (FeatureGroupStatus = {}));
export var OfflineStoreStatusValue;
(function (OfflineStoreStatusValue) {
    OfflineStoreStatusValue["ACTIVE"] = "Active";
    OfflineStoreStatusValue["BLOCKED"] = "Blocked";
    OfflineStoreStatusValue["DISABLED"] = "Disabled";
})(OfflineStoreStatusValue || (OfflineStoreStatusValue = {}));
export var OfflineStoreStatus;
(function (OfflineStoreStatus) {
    /**
     * @internal
     */
    OfflineStoreStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OfflineStoreStatus || (OfflineStoreStatus = {}));
export var DescribeFeatureGroupResponse;
(function (DescribeFeatureGroupResponse) {
    /**
     * @internal
     */
    DescribeFeatureGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFeatureGroupResponse || (DescribeFeatureGroupResponse = {}));
export var DescribeFlowDefinitionRequest;
(function (DescribeFlowDefinitionRequest) {
    /**
     * @internal
     */
    DescribeFlowDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFlowDefinitionRequest || (DescribeFlowDefinitionRequest = {}));
export var FlowDefinitionStatus;
(function (FlowDefinitionStatus) {
    FlowDefinitionStatus["ACTIVE"] = "Active";
    FlowDefinitionStatus["DELETING"] = "Deleting";
    FlowDefinitionStatus["FAILED"] = "Failed";
    FlowDefinitionStatus["INITIALIZING"] = "Initializing";
})(FlowDefinitionStatus || (FlowDefinitionStatus = {}));
export var DescribeFlowDefinitionResponse;
(function (DescribeFlowDefinitionResponse) {
    /**
     * @internal
     */
    DescribeFlowDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFlowDefinitionResponse || (DescribeFlowDefinitionResponse = {}));
export var DescribeHumanTaskUiRequest;
(function (DescribeHumanTaskUiRequest) {
    /**
     * @internal
     */
    DescribeHumanTaskUiRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHumanTaskUiRequest || (DescribeHumanTaskUiRequest = {}));
export var HumanTaskUiStatus;
(function (HumanTaskUiStatus) {
    HumanTaskUiStatus["ACTIVE"] = "Active";
    HumanTaskUiStatus["DELETING"] = "Deleting";
})(HumanTaskUiStatus || (HumanTaskUiStatus = {}));
export var UiTemplateInfo;
(function (UiTemplateInfo) {
    /**
     * @internal
     */
    UiTemplateInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UiTemplateInfo || (UiTemplateInfo = {}));
export var DescribeHumanTaskUiResponse;
(function (DescribeHumanTaskUiResponse) {
    /**
     * @internal
     */
    DescribeHumanTaskUiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHumanTaskUiResponse || (DescribeHumanTaskUiResponse = {}));
export var DescribeHyperParameterTuningJobRequest;
(function (DescribeHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    DescribeHyperParameterTuningJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHyperParameterTuningJobRequest || (DescribeHyperParameterTuningJobRequest = {}));
export var FinalHyperParameterTuningJobObjectiveMetric;
(function (FinalHyperParameterTuningJobObjectiveMetric) {
    /**
     * @internal
     */
    FinalHyperParameterTuningJobObjectiveMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FinalHyperParameterTuningJobObjectiveMetric || (FinalHyperParameterTuningJobObjectiveMetric = {}));
export var TrainingJobStatus;
(function (TrainingJobStatus) {
    TrainingJobStatus["COMPLETED"] = "Completed";
    TrainingJobStatus["FAILED"] = "Failed";
    TrainingJobStatus["IN_PROGRESS"] = "InProgress";
    TrainingJobStatus["STOPPED"] = "Stopped";
    TrainingJobStatus["STOPPING"] = "Stopping";
})(TrainingJobStatus || (TrainingJobStatus = {}));
export var HyperParameterTrainingJobSummary;
(function (HyperParameterTrainingJobSummary) {
    /**
     * @internal
     */
    HyperParameterTrainingJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTrainingJobSummary || (HyperParameterTrainingJobSummary = {}));
export var HyperParameterTuningJobStatus;
(function (HyperParameterTuningJobStatus) {
    HyperParameterTuningJobStatus["COMPLETED"] = "Completed";
    HyperParameterTuningJobStatus["FAILED"] = "Failed";
    HyperParameterTuningJobStatus["IN_PROGRESS"] = "InProgress";
    HyperParameterTuningJobStatus["STOPPED"] = "Stopped";
    HyperParameterTuningJobStatus["STOPPING"] = "Stopping";
})(HyperParameterTuningJobStatus || (HyperParameterTuningJobStatus = {}));
export var ObjectiveStatusCounters;
(function (ObjectiveStatusCounters) {
    /**
     * @internal
     */
    ObjectiveStatusCounters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectiveStatusCounters || (ObjectiveStatusCounters = {}));
export var TrainingJobStatusCounters;
(function (TrainingJobStatusCounters) {
    /**
     * @internal
     */
    TrainingJobStatusCounters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingJobStatusCounters || (TrainingJobStatusCounters = {}));
export var DescribeHyperParameterTuningJobResponse;
(function (DescribeHyperParameterTuningJobResponse) {
    /**
     * @internal
     */
    DescribeHyperParameterTuningJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHyperParameterTuningJobResponse || (DescribeHyperParameterTuningJobResponse = {}));
export var DescribeImageRequest;
(function (DescribeImageRequest) {
    /**
     * @internal
     */
    DescribeImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageRequest || (DescribeImageRequest = {}));
export var ImageStatus;
(function (ImageStatus) {
    ImageStatus["CREATED"] = "CREATED";
    ImageStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ImageStatus["CREATING"] = "CREATING";
    ImageStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ImageStatus["DELETING"] = "DELETING";
    ImageStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    ImageStatus["UPDATING"] = "UPDATING";
})(ImageStatus || (ImageStatus = {}));
export var DescribeImageResponse;
(function (DescribeImageResponse) {
    /**
     * @internal
     */
    DescribeImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageResponse || (DescribeImageResponse = {}));
export var DescribeImageVersionRequest;
(function (DescribeImageVersionRequest) {
    /**
     * @internal
     */
    DescribeImageVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageVersionRequest || (DescribeImageVersionRequest = {}));
export var ImageVersionStatus;
(function (ImageVersionStatus) {
    ImageVersionStatus["CREATED"] = "CREATED";
    ImageVersionStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ImageVersionStatus["CREATING"] = "CREATING";
    ImageVersionStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ImageVersionStatus["DELETING"] = "DELETING";
})(ImageVersionStatus || (ImageVersionStatus = {}));
export var DescribeImageVersionResponse;
(function (DescribeImageVersionResponse) {
    /**
     * @internal
     */
    DescribeImageVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageVersionResponse || (DescribeImageVersionResponse = {}));
export var DescribeLabelingJobRequest;
(function (DescribeLabelingJobRequest) {
    /**
     * @internal
     */
    DescribeLabelingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLabelingJobRequest || (DescribeLabelingJobRequest = {}));
export var LabelCounters;
(function (LabelCounters) {
    /**
     * @internal
     */
    LabelCounters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelCounters || (LabelCounters = {}));
export var LabelingJobOutput;
(function (LabelingJobOutput) {
    /**
     * @internal
     */
    LabelingJobOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobOutput || (LabelingJobOutput = {}));
export var LabelingJobStatus;
(function (LabelingJobStatus) {
    LabelingJobStatus["COMPLETED"] = "Completed";
    LabelingJobStatus["FAILED"] = "Failed";
    LabelingJobStatus["INITIALIZING"] = "Initializing";
    LabelingJobStatus["IN_PROGRESS"] = "InProgress";
    LabelingJobStatus["STOPPED"] = "Stopped";
    LabelingJobStatus["STOPPING"] = "Stopping";
})(LabelingJobStatus || (LabelingJobStatus = {}));
export var DescribeLabelingJobResponse;
(function (DescribeLabelingJobResponse) {
    /**
     * @internal
     */
    DescribeLabelingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLabelingJobResponse || (DescribeLabelingJobResponse = {}));
export var DescribeModelInput;
(function (DescribeModelInput) {
    /**
     * @internal
     */
    DescribeModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelInput || (DescribeModelInput = {}));
export var DescribeModelOutput;
(function (DescribeModelOutput) {
    /**
     * @internal
     */
    DescribeModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelOutput || (DescribeModelOutput = {}));
export var DescribeModelBiasJobDefinitionRequest;
(function (DescribeModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelBiasJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelBiasJobDefinitionRequest || (DescribeModelBiasJobDefinitionRequest = {}));
export var DescribeModelBiasJobDefinitionResponse;
(function (DescribeModelBiasJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelBiasJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelBiasJobDefinitionResponse || (DescribeModelBiasJobDefinitionResponse = {}));
export var DescribeModelExplainabilityJobDefinitionRequest;
(function (DescribeModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelExplainabilityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelExplainabilityJobDefinitionRequest || (DescribeModelExplainabilityJobDefinitionRequest = {}));
export var DescribeModelExplainabilityJobDefinitionResponse;
(function (DescribeModelExplainabilityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelExplainabilityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelExplainabilityJobDefinitionResponse || (DescribeModelExplainabilityJobDefinitionResponse = {}));
export var DescribeModelPackageInput;
(function (DescribeModelPackageInput) {
    /**
     * @internal
     */
    DescribeModelPackageInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelPackageInput || (DescribeModelPackageInput = {}));
export var ModelPackageStatus;
(function (ModelPackageStatus) {
    ModelPackageStatus["COMPLETED"] = "Completed";
    ModelPackageStatus["DELETING"] = "Deleting";
    ModelPackageStatus["FAILED"] = "Failed";
    ModelPackageStatus["IN_PROGRESS"] = "InProgress";
    ModelPackageStatus["PENDING"] = "Pending";
})(ModelPackageStatus || (ModelPackageStatus = {}));
export var DetailedModelPackageStatus;
(function (DetailedModelPackageStatus) {
    DetailedModelPackageStatus["COMPLETED"] = "Completed";
    DetailedModelPackageStatus["FAILED"] = "Failed";
    DetailedModelPackageStatus["IN_PROGRESS"] = "InProgress";
    DetailedModelPackageStatus["NOT_STARTED"] = "NotStarted";
})(DetailedModelPackageStatus || (DetailedModelPackageStatus = {}));
export var ModelPackageStatusItem;
(function (ModelPackageStatusItem) {
    /**
     * @internal
     */
    ModelPackageStatusItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPackageStatusItem || (ModelPackageStatusItem = {}));
export var ModelPackageStatusDetails;
(function (ModelPackageStatusDetails) {
    /**
     * @internal
     */
    ModelPackageStatusDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPackageStatusDetails || (ModelPackageStatusDetails = {}));
export var DescribeModelPackageOutput;
(function (DescribeModelPackageOutput) {
    /**
     * @internal
     */
    DescribeModelPackageOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelPackageOutput || (DescribeModelPackageOutput = {}));
export var DescribeModelPackageGroupInput;
(function (DescribeModelPackageGroupInput) {
    /**
     * @internal
     */
    DescribeModelPackageGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelPackageGroupInput || (DescribeModelPackageGroupInput = {}));
export var ModelPackageGroupStatus;
(function (ModelPackageGroupStatus) {
    ModelPackageGroupStatus["COMPLETED"] = "Completed";
    ModelPackageGroupStatus["DELETE_FAILED"] = "DeleteFailed";
    ModelPackageGroupStatus["DELETING"] = "Deleting";
    ModelPackageGroupStatus["FAILED"] = "Failed";
    ModelPackageGroupStatus["IN_PROGRESS"] = "InProgress";
    ModelPackageGroupStatus["PENDING"] = "Pending";
})(ModelPackageGroupStatus || (ModelPackageGroupStatus = {}));
export var DescribeModelPackageGroupOutput;
(function (DescribeModelPackageGroupOutput) {
    /**
     * @internal
     */
    DescribeModelPackageGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelPackageGroupOutput || (DescribeModelPackageGroupOutput = {}));
export var DescribeModelQualityJobDefinitionRequest;
(function (DescribeModelQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    DescribeModelQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelQualityJobDefinitionRequest || (DescribeModelQualityJobDefinitionRequest = {}));
export var DescribeModelQualityJobDefinitionResponse;
(function (DescribeModelQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    DescribeModelQualityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelQualityJobDefinitionResponse || (DescribeModelQualityJobDefinitionResponse = {}));
export var DescribeMonitoringScheduleRequest;
(function (DescribeMonitoringScheduleRequest) {
    /**
     * @internal
     */
    DescribeMonitoringScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMonitoringScheduleRequest || (DescribeMonitoringScheduleRequest = {}));
export var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["COMPLETED"] = "Completed";
    ExecutionStatus["COMPLETED_WITH_VIOLATIONS"] = "CompletedWithViolations";
    ExecutionStatus["FAILED"] = "Failed";
    ExecutionStatus["IN_PROGRESS"] = "InProgress";
    ExecutionStatus["PENDING"] = "Pending";
    ExecutionStatus["STOPPED"] = "Stopped";
    ExecutionStatus["STOPPING"] = "Stopping";
})(ExecutionStatus || (ExecutionStatus = {}));
export var MonitoringExecutionSummary;
(function (MonitoringExecutionSummary) {
    /**
     * @internal
     */
    MonitoringExecutionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringExecutionSummary || (MonitoringExecutionSummary = {}));
export var ScheduleStatus;
(function (ScheduleStatus) {
    ScheduleStatus["FAILED"] = "Failed";
    ScheduleStatus["PENDING"] = "Pending";
    ScheduleStatus["SCHEDULED"] = "Scheduled";
    ScheduleStatus["STOPPED"] = "Stopped";
})(ScheduleStatus || (ScheduleStatus = {}));
export var DescribeMonitoringScheduleResponse;
(function (DescribeMonitoringScheduleResponse) {
    /**
     * @internal
     */
    DescribeMonitoringScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMonitoringScheduleResponse || (DescribeMonitoringScheduleResponse = {}));
export var DescribeNotebookInstanceInput;
(function (DescribeNotebookInstanceInput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookInstanceInput || (DescribeNotebookInstanceInput = {}));
export var NotebookInstanceStatus;
(function (NotebookInstanceStatus) {
    NotebookInstanceStatus["Deleting"] = "Deleting";
    NotebookInstanceStatus["Failed"] = "Failed";
    NotebookInstanceStatus["InService"] = "InService";
    NotebookInstanceStatus["Pending"] = "Pending";
    NotebookInstanceStatus["Stopped"] = "Stopped";
    NotebookInstanceStatus["Stopping"] = "Stopping";
    NotebookInstanceStatus["Updating"] = "Updating";
})(NotebookInstanceStatus || (NotebookInstanceStatus = {}));
export var DescribeNotebookInstanceOutput;
(function (DescribeNotebookInstanceOutput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookInstanceOutput || (DescribeNotebookInstanceOutput = {}));
export var DescribeNotebookInstanceLifecycleConfigInput;
(function (DescribeNotebookInstanceLifecycleConfigInput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceLifecycleConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookInstanceLifecycleConfigInput || (DescribeNotebookInstanceLifecycleConfigInput = {}));
export var DescribeNotebookInstanceLifecycleConfigOutput;
(function (DescribeNotebookInstanceLifecycleConfigOutput) {
    /**
     * @internal
     */
    DescribeNotebookInstanceLifecycleConfigOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookInstanceLifecycleConfigOutput || (DescribeNotebookInstanceLifecycleConfigOutput = {}));
export var DescribePipelineRequest;
(function (DescribePipelineRequest) {
    /**
     * @internal
     */
    DescribePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineRequest || (DescribePipelineRequest = {}));
export var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["ACTIVE"] = "Active";
})(PipelineStatus || (PipelineStatus = {}));
export var DescribePipelineResponse;
(function (DescribePipelineResponse) {
    /**
     * @internal
     */
    DescribePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineResponse || (DescribePipelineResponse = {}));
export var DescribePipelineDefinitionForExecutionRequest;
(function (DescribePipelineDefinitionForExecutionRequest) {
    /**
     * @internal
     */
    DescribePipelineDefinitionForExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineDefinitionForExecutionRequest || (DescribePipelineDefinitionForExecutionRequest = {}));
export var DescribePipelineDefinitionForExecutionResponse;
(function (DescribePipelineDefinitionForExecutionResponse) {
    /**
     * @internal
     */
    DescribePipelineDefinitionForExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineDefinitionForExecutionResponse || (DescribePipelineDefinitionForExecutionResponse = {}));
export var DescribePipelineExecutionRequest;
(function (DescribePipelineExecutionRequest) {
    /**
     * @internal
     */
    DescribePipelineExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineExecutionRequest || (DescribePipelineExecutionRequest = {}));
export var PipelineExecutionStatus;
(function (PipelineExecutionStatus) {
    PipelineExecutionStatus["EXECUTING"] = "Executing";
    PipelineExecutionStatus["FAILED"] = "Failed";
    PipelineExecutionStatus["STOPPED"] = "Stopped";
    PipelineExecutionStatus["STOPPING"] = "Stopping";
    PipelineExecutionStatus["SUCCEEDED"] = "Succeeded";
})(PipelineExecutionStatus || (PipelineExecutionStatus = {}));
export var DescribePipelineExecutionResponse;
(function (DescribePipelineExecutionResponse) {
    /**
     * @internal
     */
    DescribePipelineExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePipelineExecutionResponse || (DescribePipelineExecutionResponse = {}));
export var DescribeProcessingJobRequest;
(function (DescribeProcessingJobRequest) {
    /**
     * @internal
     */
    DescribeProcessingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProcessingJobRequest || (DescribeProcessingJobRequest = {}));
export var ProcessingJobStatus;
(function (ProcessingJobStatus) {
    ProcessingJobStatus["COMPLETED"] = "Completed";
    ProcessingJobStatus["FAILED"] = "Failed";
    ProcessingJobStatus["IN_PROGRESS"] = "InProgress";
    ProcessingJobStatus["STOPPED"] = "Stopped";
    ProcessingJobStatus["STOPPING"] = "Stopping";
})(ProcessingJobStatus || (ProcessingJobStatus = {}));
export var DescribeProcessingJobResponse;
(function (DescribeProcessingJobResponse) {
    /**
     * @internal
     */
    DescribeProcessingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProcessingJobResponse || (DescribeProcessingJobResponse = {}));
export var DescribeProjectInput;
(function (DescribeProjectInput) {
    /**
     * @internal
     */
    DescribeProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectInput || (DescribeProjectInput = {}));
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["CREATE_COMPLETED"] = "CreateCompleted";
    ProjectStatus["CREATE_FAILED"] = "CreateFailed";
    ProjectStatus["CREATE_IN_PROGRESS"] = "CreateInProgress";
    ProjectStatus["DELETE_COMPLETED"] = "DeleteCompleted";
    ProjectStatus["DELETE_FAILED"] = "DeleteFailed";
    ProjectStatus["DELETE_IN_PROGRESS"] = "DeleteInProgress";
    ProjectStatus["PENDING"] = "Pending";
})(ProjectStatus || (ProjectStatus = {}));
export var ServiceCatalogProvisionedProductDetails;
(function (ServiceCatalogProvisionedProductDetails) {
    /**
     * @internal
     */
    ServiceCatalogProvisionedProductDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceCatalogProvisionedProductDetails || (ServiceCatalogProvisionedProductDetails = {}));
export var DescribeProjectOutput;
(function (DescribeProjectOutput) {
    /**
     * @internal
     */
    DescribeProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectOutput || (DescribeProjectOutput = {}));
export var DescribeSubscribedWorkteamRequest;
(function (DescribeSubscribedWorkteamRequest) {
    /**
     * @internal
     */
    DescribeSubscribedWorkteamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSubscribedWorkteamRequest || (DescribeSubscribedWorkteamRequest = {}));
export var SubscribedWorkteam;
(function (SubscribedWorkteam) {
    /**
     * @internal
     */
    SubscribedWorkteam.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribedWorkteam || (SubscribedWorkteam = {}));
export var DescribeSubscribedWorkteamResponse;
(function (DescribeSubscribedWorkteamResponse) {
    /**
     * @internal
     */
    DescribeSubscribedWorkteamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSubscribedWorkteamResponse || (DescribeSubscribedWorkteamResponse = {}));
export var DescribeTrainingJobRequest;
(function (DescribeTrainingJobRequest) {
    /**
     * @internal
     */
    DescribeTrainingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrainingJobRequest || (DescribeTrainingJobRequest = {}));
export var MetricData;
(function (MetricData) {
    /**
     * @internal
     */
    MetricData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricData || (MetricData = {}));
export var ProfilerRuleEvaluationStatus;
(function (ProfilerRuleEvaluationStatus) {
    /**
     * @internal
     */
    ProfilerRuleEvaluationStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProfilerRuleEvaluationStatus || (ProfilerRuleEvaluationStatus = {}));
export var ProfilingStatus;
(function (ProfilingStatus) {
    ProfilingStatus["DISABLED"] = "Disabled";
    ProfilingStatus["ENABLED"] = "Enabled";
})(ProfilingStatus || (ProfilingStatus = {}));
export var SecondaryStatus;
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
})(SecondaryStatus || (SecondaryStatus = {}));
export var SecondaryStatusTransition;
(function (SecondaryStatusTransition) {
    /**
     * @internal
     */
    SecondaryStatusTransition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecondaryStatusTransition || (SecondaryStatusTransition = {}));
export var DescribeTrainingJobResponse;
(function (DescribeTrainingJobResponse) {
    /**
     * @internal
     */
    DescribeTrainingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrainingJobResponse || (DescribeTrainingJobResponse = {}));
export var DescribeTransformJobRequest;
(function (DescribeTransformJobRequest) {
    /**
     * @internal
     */
    DescribeTransformJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTransformJobRequest || (DescribeTransformJobRequest = {}));
export var TransformJobStatus;
(function (TransformJobStatus) {
    TransformJobStatus["COMPLETED"] = "Completed";
    TransformJobStatus["FAILED"] = "Failed";
    TransformJobStatus["IN_PROGRESS"] = "InProgress";
    TransformJobStatus["STOPPED"] = "Stopped";
    TransformJobStatus["STOPPING"] = "Stopping";
})(TransformJobStatus || (TransformJobStatus = {}));
export var DescribeTransformJobResponse;
(function (DescribeTransformJobResponse) {
    /**
     * @internal
     */
    DescribeTransformJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTransformJobResponse || (DescribeTransformJobResponse = {}));
export var DescribeTrialRequest;
(function (DescribeTrialRequest) {
    /**
     * @internal
     */
    DescribeTrialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrialRequest || (DescribeTrialRequest = {}));
export var TrialSource;
(function (TrialSource) {
    /**
     * @internal
     */
    TrialSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialSource || (TrialSource = {}));
export var DescribeTrialResponse;
(function (DescribeTrialResponse) {
    /**
     * @internal
     */
    DescribeTrialResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrialResponse || (DescribeTrialResponse = {}));
export var DescribeTrialComponentRequest;
(function (DescribeTrialComponentRequest) {
    /**
     * @internal
     */
    DescribeTrialComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrialComponentRequest || (DescribeTrialComponentRequest = {}));
export var TrialComponentMetricSummary;
(function (TrialComponentMetricSummary) {
    /**
     * @internal
     */
    TrialComponentMetricSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialComponentMetricSummary || (TrialComponentMetricSummary = {}));
export var TrialComponentSource;
(function (TrialComponentSource) {
    /**
     * @internal
     */
    TrialComponentSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialComponentSource || (TrialComponentSource = {}));
export var DescribeTrialComponentResponse;
(function (DescribeTrialComponentResponse) {
    /**
     * @internal
     */
    DescribeTrialComponentResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Parameters && {
        Parameters: Object.entries(obj.Parameters).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = TrialComponentParameterValue.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(DescribeTrialComponentResponse || (DescribeTrialComponentResponse = {}));
export var DescribeUserProfileRequest;
(function (DescribeUserProfileRequest) {
    /**
     * @internal
     */
    DescribeUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserProfileRequest || (DescribeUserProfileRequest = {}));
export var UserProfileStatus;
(function (UserProfileStatus) {
    UserProfileStatus["Delete_Failed"] = "Delete_Failed";
    UserProfileStatus["Deleting"] = "Deleting";
    UserProfileStatus["Failed"] = "Failed";
    UserProfileStatus["InService"] = "InService";
    UserProfileStatus["Pending"] = "Pending";
    UserProfileStatus["Update_Failed"] = "Update_Failed";
    UserProfileStatus["Updating"] = "Updating";
})(UserProfileStatus || (UserProfileStatus = {}));
export var DescribeUserProfileResponse;
(function (DescribeUserProfileResponse) {
    /**
     * @internal
     */
    DescribeUserProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserProfileResponse || (DescribeUserProfileResponse = {}));
export var DescribeWorkforceRequest;
(function (DescribeWorkforceRequest) {
    /**
     * @internal
     */
    DescribeWorkforceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorkforceRequest || (DescribeWorkforceRequest = {}));
export var OidcConfigForResponse;
(function (OidcConfigForResponse) {
    /**
     * @internal
     */
    OidcConfigForResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OidcConfigForResponse || (OidcConfigForResponse = {}));
export var Workforce;
(function (Workforce) {
    /**
     * @internal
     */
    Workforce.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Workforce || (Workforce = {}));
//# sourceMappingURL=models_1.js.map