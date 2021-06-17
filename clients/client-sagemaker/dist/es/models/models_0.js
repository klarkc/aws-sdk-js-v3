import { __assign } from "tslib";
export var ActionSource;
(function (ActionSource) {
    /**
     * @internal
     */
    ActionSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionSource || (ActionSource = {}));
export var ActionStatus;
(function (ActionStatus) {
    ActionStatus["COMPLETED"] = "Completed";
    ActionStatus["FAILED"] = "Failed";
    ActionStatus["IN_PROGRESS"] = "InProgress";
    ActionStatus["STOPPED"] = "Stopped";
    ActionStatus["STOPPING"] = "Stopping";
    ActionStatus["UNKNOWN"] = "Unknown";
})(ActionStatus || (ActionStatus = {}));
export var ActionSummary;
(function (ActionSummary) {
    /**
     * @internal
     */
    ActionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionSummary || (ActionSummary = {}));
export var AssociationEdgeType;
(function (AssociationEdgeType) {
    AssociationEdgeType["ASSOCIATED_WITH"] = "AssociatedWith";
    AssociationEdgeType["CONTRIBUTED_TO"] = "ContributedTo";
    AssociationEdgeType["DERIVED_FROM"] = "DerivedFrom";
    AssociationEdgeType["PRODUCED"] = "Produced";
})(AssociationEdgeType || (AssociationEdgeType = {}));
export var AddAssociationRequest;
(function (AddAssociationRequest) {
    /**
     * @internal
     */
    AddAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddAssociationRequest || (AddAssociationRequest = {}));
export var AddAssociationResponse;
(function (AddAssociationResponse) {
    /**
     * @internal
     */
    AddAssociationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddAssociationResponse || (AddAssociationResponse = {}));
export var ResourceLimitExceeded;
(function (ResourceLimitExceeded) {
    /**
     * @internal
     */
    ResourceLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimitExceeded || (ResourceLimitExceeded = {}));
export var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFound || (ResourceNotFound = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsInput || (AddTagsInput = {}));
export var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsOutput || (AddTagsOutput = {}));
export var AgentVersion;
(function (AgentVersion) {
    /**
     * @internal
     */
    AgentVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentVersion || (AgentVersion = {}));
export var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alarm || (Alarm = {}));
export var AlgorithmSortBy;
(function (AlgorithmSortBy) {
    AlgorithmSortBy["CREATION_TIME"] = "CreationTime";
    AlgorithmSortBy["NAME"] = "Name";
})(AlgorithmSortBy || (AlgorithmSortBy = {}));
export var MetricDefinition;
(function (MetricDefinition) {
    /**
     * @internal
     */
    MetricDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDefinition || (MetricDefinition = {}));
export var TrainingInputMode;
(function (TrainingInputMode) {
    TrainingInputMode["FILE"] = "File";
    TrainingInputMode["PIPE"] = "Pipe";
})(TrainingInputMode || (TrainingInputMode = {}));
export var AlgorithmSpecification;
(function (AlgorithmSpecification) {
    /**
     * @internal
     */
    AlgorithmSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmSpecification || (AlgorithmSpecification = {}));
export var AlgorithmStatus;
(function (AlgorithmStatus) {
    AlgorithmStatus["COMPLETED"] = "Completed";
    AlgorithmStatus["DELETING"] = "Deleting";
    AlgorithmStatus["FAILED"] = "Failed";
    AlgorithmStatus["IN_PROGRESS"] = "InProgress";
    AlgorithmStatus["PENDING"] = "Pending";
})(AlgorithmStatus || (AlgorithmStatus = {}));
export var DetailedAlgorithmStatus;
(function (DetailedAlgorithmStatus) {
    DetailedAlgorithmStatus["COMPLETED"] = "Completed";
    DetailedAlgorithmStatus["FAILED"] = "Failed";
    DetailedAlgorithmStatus["IN_PROGRESS"] = "InProgress";
    DetailedAlgorithmStatus["NOT_STARTED"] = "NotStarted";
})(DetailedAlgorithmStatus || (DetailedAlgorithmStatus = {}));
export var AlgorithmStatusItem;
(function (AlgorithmStatusItem) {
    /**
     * @internal
     */
    AlgorithmStatusItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmStatusItem || (AlgorithmStatusItem = {}));
export var AlgorithmStatusDetails;
(function (AlgorithmStatusDetails) {
    /**
     * @internal
     */
    AlgorithmStatusDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmStatusDetails || (AlgorithmStatusDetails = {}));
export var AlgorithmSummary;
(function (AlgorithmSummary) {
    /**
     * @internal
     */
    AlgorithmSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmSummary || (AlgorithmSummary = {}));
export var CompressionType;
(function (CompressionType) {
    CompressionType["GZIP"] = "Gzip";
    CompressionType["NONE"] = "None";
})(CompressionType || (CompressionType = {}));
export var FileSystemAccessMode;
(function (FileSystemAccessMode) {
    FileSystemAccessMode["RO"] = "ro";
    FileSystemAccessMode["RW"] = "rw";
})(FileSystemAccessMode || (FileSystemAccessMode = {}));
export var FileSystemType;
(function (FileSystemType) {
    FileSystemType["EFS"] = "EFS";
    FileSystemType["FSXLUSTRE"] = "FSxLustre";
})(FileSystemType || (FileSystemType = {}));
export var FileSystemDataSource;
(function (FileSystemDataSource) {
    /**
     * @internal
     */
    FileSystemDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemDataSource || (FileSystemDataSource = {}));
export var S3DataDistribution;
(function (S3DataDistribution) {
    S3DataDistribution["FULLY_REPLICATED"] = "FullyReplicated";
    S3DataDistribution["SHARDED_BY_S3_KEY"] = "ShardedByS3Key";
})(S3DataDistribution || (S3DataDistribution = {}));
export var S3DataType;
(function (S3DataType) {
    S3DataType["AUGMENTED_MANIFEST_FILE"] = "AugmentedManifestFile";
    S3DataType["MANIFEST_FILE"] = "ManifestFile";
    S3DataType["S3_PREFIX"] = "S3Prefix";
})(S3DataType || (S3DataType = {}));
export var S3DataSource;
(function (S3DataSource) {
    /**
     * @internal
     */
    S3DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DataSource || (S3DataSource = {}));
export var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSource || (DataSource = {}));
export var RecordWrapper;
(function (RecordWrapper) {
    RecordWrapper["NONE"] = "None";
    RecordWrapper["RECORDIO"] = "RecordIO";
})(RecordWrapper || (RecordWrapper = {}));
export var ShuffleConfig;
(function (ShuffleConfig) {
    /**
     * @internal
     */
    ShuffleConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShuffleConfig || (ShuffleConfig = {}));
export var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Channel || (Channel = {}));
export var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDataConfig || (OutputDataConfig = {}));
export var TrainingInstanceType;
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
})(TrainingInstanceType || (TrainingInstanceType = {}));
export var ResourceConfig;
(function (ResourceConfig) {
    /**
     * @internal
     */
    ResourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceConfig || (ResourceConfig = {}));
export var StoppingCondition;
(function (StoppingCondition) {
    /**
     * @internal
     */
    StoppingCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StoppingCondition || (StoppingCondition = {}));
export var TrainingJobDefinition;
(function (TrainingJobDefinition) {
    /**
     * @internal
     */
    TrainingJobDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingJobDefinition || (TrainingJobDefinition = {}));
export var BatchStrategy;
(function (BatchStrategy) {
    BatchStrategy["MULTI_RECORD"] = "MultiRecord";
    BatchStrategy["SINGLE_RECORD"] = "SingleRecord";
})(BatchStrategy || (BatchStrategy = {}));
export var TransformS3DataSource;
(function (TransformS3DataSource) {
    /**
     * @internal
     */
    TransformS3DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformS3DataSource || (TransformS3DataSource = {}));
export var TransformDataSource;
(function (TransformDataSource) {
    /**
     * @internal
     */
    TransformDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformDataSource || (TransformDataSource = {}));
export var SplitType;
(function (SplitType) {
    SplitType["LINE"] = "Line";
    SplitType["NONE"] = "None";
    SplitType["RECORDIO"] = "RecordIO";
    SplitType["TFRECORD"] = "TFRecord";
})(SplitType || (SplitType = {}));
export var TransformInput;
(function (TransformInput) {
    /**
     * @internal
     */
    TransformInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformInput || (TransformInput = {}));
export var AssemblyType;
(function (AssemblyType) {
    AssemblyType["LINE"] = "Line";
    AssemblyType["NONE"] = "None";
})(AssemblyType || (AssemblyType = {}));
export var TransformOutput;
(function (TransformOutput) {
    /**
     * @internal
     */
    TransformOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformOutput || (TransformOutput = {}));
export var TransformInstanceType;
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
})(TransformInstanceType || (TransformInstanceType = {}));
export var TransformResources;
(function (TransformResources) {
    /**
     * @internal
     */
    TransformResources.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformResources || (TransformResources = {}));
export var TransformJobDefinition;
(function (TransformJobDefinition) {
    /**
     * @internal
     */
    TransformJobDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransformJobDefinition || (TransformJobDefinition = {}));
export var AlgorithmValidationProfile;
(function (AlgorithmValidationProfile) {
    /**
     * @internal
     */
    AlgorithmValidationProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmValidationProfile || (AlgorithmValidationProfile = {}));
export var AlgorithmValidationSpecification;
(function (AlgorithmValidationSpecification) {
    /**
     * @internal
     */
    AlgorithmValidationSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlgorithmValidationSpecification || (AlgorithmValidationSpecification = {}));
export var AnnotationConsolidationConfig;
(function (AnnotationConsolidationConfig) {
    /**
     * @internal
     */
    AnnotationConsolidationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnnotationConsolidationConfig || (AnnotationConsolidationConfig = {}));
export var AppType;
(function (AppType) {
    AppType["JupyterServer"] = "JupyterServer";
    AppType["KernelGateway"] = "KernelGateway";
    AppType["TensorBoard"] = "TensorBoard";
})(AppType || (AppType = {}));
export var AppStatus;
(function (AppStatus) {
    AppStatus["Deleted"] = "Deleted";
    AppStatus["Deleting"] = "Deleting";
    AppStatus["Failed"] = "Failed";
    AppStatus["InService"] = "InService";
    AppStatus["Pending"] = "Pending";
})(AppStatus || (AppStatus = {}));
export var AppDetails;
(function (AppDetails) {
    /**
     * @internal
     */
    AppDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppDetails || (AppDetails = {}));
export var FileSystemConfig;
(function (FileSystemConfig) {
    /**
     * @internal
     */
    FileSystemConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemConfig || (FileSystemConfig = {}));
export var KernelSpec;
(function (KernelSpec) {
    /**
     * @internal
     */
    KernelSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KernelSpec || (KernelSpec = {}));
export var KernelGatewayImageConfig;
(function (KernelGatewayImageConfig) {
    /**
     * @internal
     */
    KernelGatewayImageConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KernelGatewayImageConfig || (KernelGatewayImageConfig = {}));
export var AppImageConfigDetails;
(function (AppImageConfigDetails) {
    /**
     * @internal
     */
    AppImageConfigDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppImageConfigDetails || (AppImageConfigDetails = {}));
export var AppImageConfigSortKey;
(function (AppImageConfigSortKey) {
    AppImageConfigSortKey["CreationTime"] = "CreationTime";
    AppImageConfigSortKey["LastModifiedTime"] = "LastModifiedTime";
    AppImageConfigSortKey["Name"] = "Name";
})(AppImageConfigSortKey || (AppImageConfigSortKey = {}));
export var AppInstanceType;
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
})(AppInstanceType || (AppInstanceType = {}));
export var AppNetworkAccessType;
(function (AppNetworkAccessType) {
    AppNetworkAccessType["PublicInternetOnly"] = "PublicInternetOnly";
    AppNetworkAccessType["VpcOnly"] = "VpcOnly";
})(AppNetworkAccessType || (AppNetworkAccessType = {}));
export var AppSortKey;
(function (AppSortKey) {
    AppSortKey["CreationTime"] = "CreationTime";
})(AppSortKey || (AppSortKey = {}));
export var AppSpecification;
(function (AppSpecification) {
    /**
     * @internal
     */
    AppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppSpecification || (AppSpecification = {}));
export var ArtifactSourceIdType;
(function (ArtifactSourceIdType) {
    ArtifactSourceIdType["CUSTOM"] = "Custom";
    ArtifactSourceIdType["MD5_HASH"] = "MD5Hash";
    ArtifactSourceIdType["S3_ETAG"] = "S3ETag";
    ArtifactSourceIdType["S3_VERSION"] = "S3Version";
})(ArtifactSourceIdType || (ArtifactSourceIdType = {}));
export var ArtifactSourceType;
(function (ArtifactSourceType) {
    /**
     * @internal
     */
    ArtifactSourceType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactSourceType || (ArtifactSourceType = {}));
export var ArtifactSource;
(function (ArtifactSource) {
    /**
     * @internal
     */
    ArtifactSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactSource || (ArtifactSource = {}));
export var ArtifactSummary;
(function (ArtifactSummary) {
    /**
     * @internal
     */
    ArtifactSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactSummary || (ArtifactSummary = {}));
export var AssociateTrialComponentRequest;
(function (AssociateTrialComponentRequest) {
    /**
     * @internal
     */
    AssociateTrialComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTrialComponentRequest || (AssociateTrialComponentRequest = {}));
export var AssociateTrialComponentResponse;
(function (AssociateTrialComponentResponse) {
    /**
     * @internal
     */
    AssociateTrialComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTrialComponentResponse || (AssociateTrialComponentResponse = {}));
export var UserContext;
(function (UserContext) {
    /**
     * @internal
     */
    UserContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserContext || (UserContext = {}));
export var AssociationSummary;
(function (AssociationSummary) {
    /**
     * @internal
     */
    AssociationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationSummary || (AssociationSummary = {}));
export var AthenaResultCompressionType;
(function (AthenaResultCompressionType) {
    AthenaResultCompressionType["GZIP"] = "GZIP";
    AthenaResultCompressionType["SNAPPY"] = "SNAPPY";
    AthenaResultCompressionType["ZLIB"] = "ZLIB";
})(AthenaResultCompressionType || (AthenaResultCompressionType = {}));
export var AthenaResultFormat;
(function (AthenaResultFormat) {
    AthenaResultFormat["AVRO"] = "AVRO";
    AthenaResultFormat["JSON"] = "JSON";
    AthenaResultFormat["ORC"] = "ORC";
    AthenaResultFormat["PARQUET"] = "PARQUET";
    AthenaResultFormat["TEXTFILE"] = "TEXTFILE";
})(AthenaResultFormat || (AthenaResultFormat = {}));
export var AthenaDatasetDefinition;
(function (AthenaDatasetDefinition) {
    /**
     * @internal
     */
    AthenaDatasetDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AthenaDatasetDefinition || (AthenaDatasetDefinition = {}));
export var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode || (AuthMode = {}));
export var CandidateArtifactLocations;
(function (CandidateArtifactLocations) {
    /**
     * @internal
     */
    CandidateArtifactLocations.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CandidateArtifactLocations || (CandidateArtifactLocations = {}));
export var CandidateProperties;
(function (CandidateProperties) {
    /**
     * @internal
     */
    CandidateProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CandidateProperties || (CandidateProperties = {}));
export var CandidateStatus;
(function (CandidateStatus) {
    CandidateStatus["COMPLETED"] = "Completed";
    CandidateStatus["FAILED"] = "Failed";
    CandidateStatus["IN_PROGRESS"] = "InProgress";
    CandidateStatus["STOPPED"] = "Stopped";
    CandidateStatus["STOPPING"] = "Stopping";
})(CandidateStatus || (CandidateStatus = {}));
export var CandidateStepType;
(function (CandidateStepType) {
    CandidateStepType["PROCESSING"] = "AWS::SageMaker::ProcessingJob";
    CandidateStepType["TRAINING"] = "AWS::SageMaker::TrainingJob";
    CandidateStepType["TRANSFORM"] = "AWS::SageMaker::TransformJob";
})(CandidateStepType || (CandidateStepType = {}));
export var AutoMLCandidateStep;
(function (AutoMLCandidateStep) {
    /**
     * @internal
     */
    AutoMLCandidateStep.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLCandidateStep || (AutoMLCandidateStep = {}));
export var AutoMLMetricEnum;
(function (AutoMLMetricEnum) {
    AutoMLMetricEnum["ACCURACY"] = "Accuracy";
    AutoMLMetricEnum["AUC"] = "AUC";
    AutoMLMetricEnum["F1"] = "F1";
    AutoMLMetricEnum["F1_MACRO"] = "F1macro";
    AutoMLMetricEnum["MSE"] = "MSE";
})(AutoMLMetricEnum || (AutoMLMetricEnum = {}));
export var AutoMLJobObjectiveType;
(function (AutoMLJobObjectiveType) {
    AutoMLJobObjectiveType["MAXIMIZE"] = "Maximize";
    AutoMLJobObjectiveType["MINIMIZE"] = "Minimize";
})(AutoMLJobObjectiveType || (AutoMLJobObjectiveType = {}));
export var FinalAutoMLJobObjectiveMetric;
(function (FinalAutoMLJobObjectiveMetric) {
    /**
     * @internal
     */
    FinalAutoMLJobObjectiveMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FinalAutoMLJobObjectiveMetric || (FinalAutoMLJobObjectiveMetric = {}));
export var AutoMLContainerDefinition;
(function (AutoMLContainerDefinition) {
    /**
     * @internal
     */
    AutoMLContainerDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLContainerDefinition || (AutoMLContainerDefinition = {}));
export var ObjectiveStatus;
(function (ObjectiveStatus) {
    ObjectiveStatus["Failed"] = "Failed";
    ObjectiveStatus["Pending"] = "Pending";
    ObjectiveStatus["Succeeded"] = "Succeeded";
})(ObjectiveStatus || (ObjectiveStatus = {}));
export var AutoMLCandidate;
(function (AutoMLCandidate) {
    /**
     * @internal
     */
    AutoMLCandidate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLCandidate || (AutoMLCandidate = {}));
export var AutoMLS3DataType;
(function (AutoMLS3DataType) {
    AutoMLS3DataType["MANIFEST_FILE"] = "ManifestFile";
    AutoMLS3DataType["S3_PREFIX"] = "S3Prefix";
})(AutoMLS3DataType || (AutoMLS3DataType = {}));
export var AutoMLS3DataSource;
(function (AutoMLS3DataSource) {
    /**
     * @internal
     */
    AutoMLS3DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLS3DataSource || (AutoMLS3DataSource = {}));
export var AutoMLDataSource;
(function (AutoMLDataSource) {
    /**
     * @internal
     */
    AutoMLDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLDataSource || (AutoMLDataSource = {}));
export var AutoMLChannel;
(function (AutoMLChannel) {
    /**
     * @internal
     */
    AutoMLChannel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLChannel || (AutoMLChannel = {}));
export var AutoMLJobArtifacts;
(function (AutoMLJobArtifacts) {
    /**
     * @internal
     */
    AutoMLJobArtifacts.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLJobArtifacts || (AutoMLJobArtifacts = {}));
export var AutoMLJobCompletionCriteria;
(function (AutoMLJobCompletionCriteria) {
    /**
     * @internal
     */
    AutoMLJobCompletionCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLJobCompletionCriteria || (AutoMLJobCompletionCriteria = {}));
export var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfig || (VpcConfig = {}));
export var AutoMLSecurityConfig;
(function (AutoMLSecurityConfig) {
    /**
     * @internal
     */
    AutoMLSecurityConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLSecurityConfig || (AutoMLSecurityConfig = {}));
export var AutoMLJobConfig;
(function (AutoMLJobConfig) {
    /**
     * @internal
     */
    AutoMLJobConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLJobConfig || (AutoMLJobConfig = {}));
export var AutoMLJobObjective;
(function (AutoMLJobObjective) {
    /**
     * @internal
     */
    AutoMLJobObjective.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLJobObjective || (AutoMLJobObjective = {}));
export var AutoMLJobSecondaryStatus;
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
})(AutoMLJobSecondaryStatus || (AutoMLJobSecondaryStatus = {}));
export var AutoMLJobStatus;
(function (AutoMLJobStatus) {
    AutoMLJobStatus["COMPLETED"] = "Completed";
    AutoMLJobStatus["FAILED"] = "Failed";
    AutoMLJobStatus["IN_PROGRESS"] = "InProgress";
    AutoMLJobStatus["STOPPED"] = "Stopped";
    AutoMLJobStatus["STOPPING"] = "Stopping";
})(AutoMLJobStatus || (AutoMLJobStatus = {}));
export var AutoMLPartialFailureReason;
(function (AutoMLPartialFailureReason) {
    /**
     * @internal
     */
    AutoMLPartialFailureReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLPartialFailureReason || (AutoMLPartialFailureReason = {}));
export var AutoMLJobSummary;
(function (AutoMLJobSummary) {
    /**
     * @internal
     */
    AutoMLJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLJobSummary || (AutoMLJobSummary = {}));
export var AutoMLOutputDataConfig;
(function (AutoMLOutputDataConfig) {
    /**
     * @internal
     */
    AutoMLOutputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoMLOutputDataConfig || (AutoMLOutputDataConfig = {}));
export var AutoMLSortBy;
(function (AutoMLSortBy) {
    AutoMLSortBy["CREATION_TIME"] = "CreationTime";
    AutoMLSortBy["NAME"] = "Name";
    AutoMLSortBy["STATUS"] = "Status";
})(AutoMLSortBy || (AutoMLSortBy = {}));
export var AutoMLSortOrder;
(function (AutoMLSortOrder) {
    AutoMLSortOrder["ASCENDING"] = "Ascending";
    AutoMLSortOrder["DESCENDING"] = "Descending";
})(AutoMLSortOrder || (AutoMLSortOrder = {}));
export var AutoRollbackConfig;
(function (AutoRollbackConfig) {
    /**
     * @internal
     */
    AutoRollbackConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoRollbackConfig || (AutoRollbackConfig = {}));
export var AwsManagedHumanLoopRequestSource;
(function (AwsManagedHumanLoopRequestSource) {
    AwsManagedHumanLoopRequestSource["REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3"] = "AWS/Rekognition/DetectModerationLabels/Image/V3";
    AwsManagedHumanLoopRequestSource["TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1"] = "AWS/Textract/AnalyzeDocument/Forms/V1";
})(AwsManagedHumanLoopRequestSource || (AwsManagedHumanLoopRequestSource = {}));
export var MetricsSource;
(function (MetricsSource) {
    /**
     * @internal
     */
    MetricsSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricsSource || (MetricsSource = {}));
export var Bias;
(function (Bias) {
    /**
     * @internal
     */
    Bias.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Bias || (Bias = {}));
export var CapacitySizeType;
(function (CapacitySizeType) {
    CapacitySizeType["CAPACITY_PERCENT"] = "CAPACITY_PERCENT";
    CapacitySizeType["INSTANCE_COUNT"] = "INSTANCE_COUNT";
})(CapacitySizeType || (CapacitySizeType = {}));
export var CapacitySize;
(function (CapacitySize) {
    /**
     * @internal
     */
    CapacitySize.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CapacitySize || (CapacitySize = {}));
export var TrafficRoutingConfigType;
(function (TrafficRoutingConfigType) {
    TrafficRoutingConfigType["ALL_AT_ONCE"] = "ALL_AT_ONCE";
    TrafficRoutingConfigType["CANARY"] = "CANARY";
})(TrafficRoutingConfigType || (TrafficRoutingConfigType = {}));
export var TrafficRoutingConfig;
(function (TrafficRoutingConfig) {
    /**
     * @internal
     */
    TrafficRoutingConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrafficRoutingConfig || (TrafficRoutingConfig = {}));
export var BlueGreenUpdatePolicy;
(function (BlueGreenUpdatePolicy) {
    /**
     * @internal
     */
    BlueGreenUpdatePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlueGreenUpdatePolicy || (BlueGreenUpdatePolicy = {}));
export var BooleanOperator;
(function (BooleanOperator) {
    BooleanOperator["AND"] = "And";
    BooleanOperator["OR"] = "Or";
})(BooleanOperator || (BooleanOperator = {}));
export var CacheHitResult;
(function (CacheHitResult) {
    /**
     * @internal
     */
    CacheHitResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CacheHitResult || (CacheHitResult = {}));
export var CandidateSortBy;
(function (CandidateSortBy) {
    CandidateSortBy["CreationTime"] = "CreationTime";
    CandidateSortBy["FinalObjectiveMetricValue"] = "FinalObjectiveMetricValue";
    CandidateSortBy["Status"] = "Status";
})(CandidateSortBy || (CandidateSortBy = {}));
export var CaptureContentTypeHeader;
(function (CaptureContentTypeHeader) {
    /**
     * @internal
     */
    CaptureContentTypeHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptureContentTypeHeader || (CaptureContentTypeHeader = {}));
export var CaptureMode;
(function (CaptureMode) {
    CaptureMode["INPUT"] = "Input";
    CaptureMode["OUTPUT"] = "Output";
})(CaptureMode || (CaptureMode = {}));
export var CaptureOption;
(function (CaptureOption) {
    /**
     * @internal
     */
    CaptureOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptureOption || (CaptureOption = {}));
export var CaptureStatus;
(function (CaptureStatus) {
    CaptureStatus["STARTED"] = "Started";
    CaptureStatus["STOPPED"] = "Stopped";
})(CaptureStatus || (CaptureStatus = {}));
export var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    /**
     * @internal
     */
    CategoricalParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CategoricalParameterRange || (CategoricalParameterRange = {}));
export var CategoricalParameterRangeSpecification;
(function (CategoricalParameterRangeSpecification) {
    /**
     * @internal
     */
    CategoricalParameterRangeSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CategoricalParameterRangeSpecification || (CategoricalParameterRangeSpecification = {}));
export var ChannelSpecification;
(function (ChannelSpecification) {
    /**
     * @internal
     */
    ChannelSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelSpecification || (ChannelSpecification = {}));
export var CheckpointConfig;
(function (CheckpointConfig) {
    /**
     * @internal
     */
    CheckpointConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckpointConfig || (CheckpointConfig = {}));
export var CodeRepositorySortBy;
(function (CodeRepositorySortBy) {
    CodeRepositorySortBy["CREATION_TIME"] = "CreationTime";
    CodeRepositorySortBy["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    CodeRepositorySortBy["NAME"] = "Name";
})(CodeRepositorySortBy || (CodeRepositorySortBy = {}));
export var CodeRepositorySortOrder;
(function (CodeRepositorySortOrder) {
    CodeRepositorySortOrder["ASCENDING"] = "Ascending";
    CodeRepositorySortOrder["DESCENDING"] = "Descending";
})(CodeRepositorySortOrder || (CodeRepositorySortOrder = {}));
export var GitConfig;
(function (GitConfig) {
    /**
     * @internal
     */
    GitConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GitConfig || (GitConfig = {}));
export var CodeRepositorySummary;
(function (CodeRepositorySummary) {
    /**
     * @internal
     */
    CodeRepositorySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeRepositorySummary || (CodeRepositorySummary = {}));
export var CognitoConfig;
(function (CognitoConfig) {
    /**
     * @internal
     */
    CognitoConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CognitoConfig || (CognitoConfig = {}));
export var CognitoMemberDefinition;
(function (CognitoMemberDefinition) {
    /**
     * @internal
     */
    CognitoMemberDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CognitoMemberDefinition || (CognitoMemberDefinition = {}));
export var CollectionConfiguration;
(function (CollectionConfiguration) {
    /**
     * @internal
     */
    CollectionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CollectionConfiguration || (CollectionConfiguration = {}));
export var CompilationJobStatus;
(function (CompilationJobStatus) {
    CompilationJobStatus["COMPLETED"] = "COMPLETED";
    CompilationJobStatus["FAILED"] = "FAILED";
    CompilationJobStatus["INPROGRESS"] = "INPROGRESS";
    CompilationJobStatus["STARTING"] = "STARTING";
    CompilationJobStatus["STOPPED"] = "STOPPED";
    CompilationJobStatus["STOPPING"] = "STOPPING";
})(CompilationJobStatus || (CompilationJobStatus = {}));
export var TargetDevice;
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
})(TargetDevice || (TargetDevice = {}));
export var TargetPlatformAccelerator;
(function (TargetPlatformAccelerator) {
    TargetPlatformAccelerator["INTEL_GRAPHICS"] = "INTEL_GRAPHICS";
    TargetPlatformAccelerator["MALI"] = "MALI";
    TargetPlatformAccelerator["NVIDIA"] = "NVIDIA";
})(TargetPlatformAccelerator || (TargetPlatformAccelerator = {}));
export var TargetPlatformArch;
(function (TargetPlatformArch) {
    TargetPlatformArch["ARM64"] = "ARM64";
    TargetPlatformArch["ARM_EABI"] = "ARM_EABI";
    TargetPlatformArch["ARM_EABIHF"] = "ARM_EABIHF";
    TargetPlatformArch["X86"] = "X86";
    TargetPlatformArch["X86_64"] = "X86_64";
})(TargetPlatformArch || (TargetPlatformArch = {}));
export var TargetPlatformOs;
(function (TargetPlatformOs) {
    TargetPlatformOs["ANDROID"] = "ANDROID";
    TargetPlatformOs["LINUX"] = "LINUX";
})(TargetPlatformOs || (TargetPlatformOs = {}));
export var CompilationJobSummary;
(function (CompilationJobSummary) {
    /**
     * @internal
     */
    CompilationJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompilationJobSummary || (CompilationJobSummary = {}));
export var ConditionOutcome;
(function (ConditionOutcome) {
    ConditionOutcome["FALSE"] = "False";
    ConditionOutcome["TRUE"] = "True";
})(ConditionOutcome || (ConditionOutcome = {}));
export var ConditionStepMetadata;
(function (ConditionStepMetadata) {
    /**
     * @internal
     */
    ConditionStepMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConditionStepMetadata || (ConditionStepMetadata = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var RepositoryAccessMode;
(function (RepositoryAccessMode) {
    RepositoryAccessMode["PLATFORM"] = "Platform";
    RepositoryAccessMode["VPC"] = "Vpc";
})(RepositoryAccessMode || (RepositoryAccessMode = {}));
export var RepositoryAuthConfig;
(function (RepositoryAuthConfig) {
    /**
     * @internal
     */
    RepositoryAuthConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryAuthConfig || (RepositoryAuthConfig = {}));
export var ImageConfig;
(function (ImageConfig) {
    /**
     * @internal
     */
    ImageConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageConfig || (ImageConfig = {}));
export var ContainerMode;
(function (ContainerMode) {
    ContainerMode["MULTI_MODEL"] = "MultiModel";
    ContainerMode["SINGLE_MODEL"] = "SingleModel";
})(ContainerMode || (ContainerMode = {}));
export var ModelCacheSetting;
(function (ModelCacheSetting) {
    ModelCacheSetting["DISABLED"] = "Disabled";
    ModelCacheSetting["ENABLED"] = "Enabled";
})(ModelCacheSetting || (ModelCacheSetting = {}));
export var MultiModelConfig;
(function (MultiModelConfig) {
    /**
     * @internal
     */
    MultiModelConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiModelConfig || (MultiModelConfig = {}));
export var ContainerDefinition;
(function (ContainerDefinition) {
    /**
     * @internal
     */
    ContainerDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerDefinition || (ContainerDefinition = {}));
export var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier || (ContentClassifier = {}));
export var ContextSource;
(function (ContextSource) {
    /**
     * @internal
     */
    ContextSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContextSource || (ContextSource = {}));
export var ContextSummary;
(function (ContextSummary) {
    /**
     * @internal
     */
    ContextSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContextSummary || (ContextSummary = {}));
export var HyperParameterScalingType;
(function (HyperParameterScalingType) {
    HyperParameterScalingType["AUTO"] = "Auto";
    HyperParameterScalingType["LINEAR"] = "Linear";
    HyperParameterScalingType["LOGARITHMIC"] = "Logarithmic";
    HyperParameterScalingType["REVERSE_LOGARITHMIC"] = "ReverseLogarithmic";
})(HyperParameterScalingType || (HyperParameterScalingType = {}));
export var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    /**
     * @internal
     */
    ContinuousParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContinuousParameterRange || (ContinuousParameterRange = {}));
export var ContinuousParameterRangeSpecification;
(function (ContinuousParameterRangeSpecification) {
    /**
     * @internal
     */
    ContinuousParameterRangeSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContinuousParameterRangeSpecification || (ContinuousParameterRangeSpecification = {}));
export var MetadataProperties;
(function (MetadataProperties) {
    /**
     * @internal
     */
    MetadataProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetadataProperties || (MetadataProperties = {}));
export var CreateActionRequest;
(function (CreateActionRequest) {
    /**
     * @internal
     */
    CreateActionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActionRequest || (CreateActionRequest = {}));
export var CreateActionResponse;
(function (CreateActionResponse) {
    /**
     * @internal
     */
    CreateActionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActionResponse || (CreateActionResponse = {}));
export var ModelPackageContainerDefinition;
(function (ModelPackageContainerDefinition) {
    /**
     * @internal
     */
    ModelPackageContainerDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPackageContainerDefinition || (ModelPackageContainerDefinition = {}));
export var ProductionVariantInstanceType;
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
})(ProductionVariantInstanceType || (ProductionVariantInstanceType = {}));
export var InferenceSpecification;
(function (InferenceSpecification) {
    /**
     * @internal
     */
    InferenceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceSpecification || (InferenceSpecification = {}));
export var IntegerParameterRangeSpecification;
(function (IntegerParameterRangeSpecification) {
    /**
     * @internal
     */
    IntegerParameterRangeSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntegerParameterRangeSpecification || (IntegerParameterRangeSpecification = {}));
export var ParameterRange;
(function (ParameterRange) {
    /**
     * @internal
     */
    ParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterRange || (ParameterRange = {}));
export var ParameterType;
(function (ParameterType) {
    ParameterType["CATEGORICAL"] = "Categorical";
    ParameterType["CONTINUOUS"] = "Continuous";
    ParameterType["FREE_TEXT"] = "FreeText";
    ParameterType["INTEGER"] = "Integer";
})(ParameterType || (ParameterType = {}));
export var HyperParameterSpecification;
(function (HyperParameterSpecification) {
    /**
     * @internal
     */
    HyperParameterSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterSpecification || (HyperParameterSpecification = {}));
export var HyperParameterTuningJobObjectiveType;
(function (HyperParameterTuningJobObjectiveType) {
    HyperParameterTuningJobObjectiveType["MAXIMIZE"] = "Maximize";
    HyperParameterTuningJobObjectiveType["MINIMIZE"] = "Minimize";
})(HyperParameterTuningJobObjectiveType || (HyperParameterTuningJobObjectiveType = {}));
export var HyperParameterTuningJobObjective;
(function (HyperParameterTuningJobObjective) {
    /**
     * @internal
     */
    HyperParameterTuningJobObjective.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTuningJobObjective || (HyperParameterTuningJobObjective = {}));
export var TrainingSpecification;
(function (TrainingSpecification) {
    /**
     * @internal
     */
    TrainingSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrainingSpecification || (TrainingSpecification = {}));
export var CreateAlgorithmInput;
(function (CreateAlgorithmInput) {
    /**
     * @internal
     */
    CreateAlgorithmInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAlgorithmInput || (CreateAlgorithmInput = {}));
export var CreateAlgorithmOutput;
(function (CreateAlgorithmOutput) {
    /**
     * @internal
     */
    CreateAlgorithmOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAlgorithmOutput || (CreateAlgorithmOutput = {}));
export var ResourceSpec;
(function (ResourceSpec) {
    /**
     * @internal
     */
    ResourceSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceSpec || (ResourceSpec = {}));
export var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppRequest || (CreateAppRequest = {}));
export var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppResponse || (CreateAppResponse = {}));
export var ResourceInUse;
(function (ResourceInUse) {
    /**
     * @internal
     */
    ResourceInUse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUse || (ResourceInUse = {}));
export var CreateAppImageConfigRequest;
(function (CreateAppImageConfigRequest) {
    /**
     * @internal
     */
    CreateAppImageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppImageConfigRequest || (CreateAppImageConfigRequest = {}));
export var CreateAppImageConfigResponse;
(function (CreateAppImageConfigResponse) {
    /**
     * @internal
     */
    CreateAppImageConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppImageConfigResponse || (CreateAppImageConfigResponse = {}));
export var CreateArtifactRequest;
(function (CreateArtifactRequest) {
    /**
     * @internal
     */
    CreateArtifactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateArtifactRequest || (CreateArtifactRequest = {}));
export var CreateArtifactResponse;
(function (CreateArtifactResponse) {
    /**
     * @internal
     */
    CreateArtifactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateArtifactResponse || (CreateArtifactResponse = {}));
export var ModelDeployConfig;
(function (ModelDeployConfig) {
    /**
     * @internal
     */
    ModelDeployConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelDeployConfig || (ModelDeployConfig = {}));
export var ProblemType;
(function (ProblemType) {
    ProblemType["BINARY_CLASSIFICATION"] = "BinaryClassification";
    ProblemType["MULTICLASS_CLASSIFICATION"] = "MulticlassClassification";
    ProblemType["REGRESSION"] = "Regression";
})(ProblemType || (ProblemType = {}));
export var CreateAutoMLJobRequest;
(function (CreateAutoMLJobRequest) {
    /**
     * @internal
     */
    CreateAutoMLJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAutoMLJobRequest || (CreateAutoMLJobRequest = {}));
export var CreateAutoMLJobResponse;
(function (CreateAutoMLJobResponse) {
    /**
     * @internal
     */
    CreateAutoMLJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAutoMLJobResponse || (CreateAutoMLJobResponse = {}));
export var CreateCodeRepositoryInput;
(function (CreateCodeRepositoryInput) {
    /**
     * @internal
     */
    CreateCodeRepositoryInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCodeRepositoryInput || (CreateCodeRepositoryInput = {}));
export var CreateCodeRepositoryOutput;
(function (CreateCodeRepositoryOutput) {
    /**
     * @internal
     */
    CreateCodeRepositoryOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCodeRepositoryOutput || (CreateCodeRepositoryOutput = {}));
export var Framework;
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
})(Framework || (Framework = {}));
export var InputConfig;
(function (InputConfig) {
    /**
     * @internal
     */
    InputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputConfig || (InputConfig = {}));
export var TargetPlatform;
(function (TargetPlatform) {
    /**
     * @internal
     */
    TargetPlatform.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetPlatform || (TargetPlatform = {}));
export var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputConfig || (OutputConfig = {}));
export var CreateCompilationJobRequest;
(function (CreateCompilationJobRequest) {
    /**
     * @internal
     */
    CreateCompilationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCompilationJobRequest || (CreateCompilationJobRequest = {}));
export var CreateCompilationJobResponse;
(function (CreateCompilationJobResponse) {
    /**
     * @internal
     */
    CreateCompilationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCompilationJobResponse || (CreateCompilationJobResponse = {}));
export var CreateContextRequest;
(function (CreateContextRequest) {
    /**
     * @internal
     */
    CreateContextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContextRequest || (CreateContextRequest = {}));
export var CreateContextResponse;
(function (CreateContextResponse) {
    /**
     * @internal
     */
    CreateContextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContextResponse || (CreateContextResponse = {}));
export var DataQualityAppSpecification;
(function (DataQualityAppSpecification) {
    /**
     * @internal
     */
    DataQualityAppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataQualityAppSpecification || (DataQualityAppSpecification = {}));
export var MonitoringConstraintsResource;
(function (MonitoringConstraintsResource) {
    /**
     * @internal
     */
    MonitoringConstraintsResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringConstraintsResource || (MonitoringConstraintsResource = {}));
export var MonitoringStatisticsResource;
(function (MonitoringStatisticsResource) {
    /**
     * @internal
     */
    MonitoringStatisticsResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringStatisticsResource || (MonitoringStatisticsResource = {}));
export var DataQualityBaselineConfig;
(function (DataQualityBaselineConfig) {
    /**
     * @internal
     */
    DataQualityBaselineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataQualityBaselineConfig || (DataQualityBaselineConfig = {}));
export var ProcessingS3DataDistributionType;
(function (ProcessingS3DataDistributionType) {
    ProcessingS3DataDistributionType["FULLYREPLICATED"] = "FullyReplicated";
    ProcessingS3DataDistributionType["SHARDEDBYS3KEY"] = "ShardedByS3Key";
})(ProcessingS3DataDistributionType || (ProcessingS3DataDistributionType = {}));
export var ProcessingS3InputMode;
(function (ProcessingS3InputMode) {
    ProcessingS3InputMode["FILE"] = "File";
    ProcessingS3InputMode["PIPE"] = "Pipe";
})(ProcessingS3InputMode || (ProcessingS3InputMode = {}));
export var EndpointInput;
(function (EndpointInput) {
    /**
     * @internal
     */
    EndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointInput || (EndpointInput = {}));
export var DataQualityJobInput;
(function (DataQualityJobInput) {
    /**
     * @internal
     */
    DataQualityJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataQualityJobInput || (DataQualityJobInput = {}));
export var ProcessingS3UploadMode;
(function (ProcessingS3UploadMode) {
    ProcessingS3UploadMode["CONTINUOUS"] = "Continuous";
    ProcessingS3UploadMode["END_OF_JOB"] = "EndOfJob";
})(ProcessingS3UploadMode || (ProcessingS3UploadMode = {}));
export var MonitoringS3Output;
(function (MonitoringS3Output) {
    /**
     * @internal
     */
    MonitoringS3Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringS3Output || (MonitoringS3Output = {}));
export var MonitoringOutput;
(function (MonitoringOutput) {
    /**
     * @internal
     */
    MonitoringOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringOutput || (MonitoringOutput = {}));
export var MonitoringOutputConfig;
(function (MonitoringOutputConfig) {
    /**
     * @internal
     */
    MonitoringOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringOutputConfig || (MonitoringOutputConfig = {}));
export var ProcessingInstanceType;
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
})(ProcessingInstanceType || (ProcessingInstanceType = {}));
export var MonitoringClusterConfig;
(function (MonitoringClusterConfig) {
    /**
     * @internal
     */
    MonitoringClusterConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringClusterConfig || (MonitoringClusterConfig = {}));
export var MonitoringResources;
(function (MonitoringResources) {
    /**
     * @internal
     */
    MonitoringResources.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringResources || (MonitoringResources = {}));
export var MonitoringNetworkConfig;
(function (MonitoringNetworkConfig) {
    /**
     * @internal
     */
    MonitoringNetworkConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringNetworkConfig || (MonitoringNetworkConfig = {}));
export var MonitoringStoppingCondition;
(function (MonitoringStoppingCondition) {
    /**
     * @internal
     */
    MonitoringStoppingCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringStoppingCondition || (MonitoringStoppingCondition = {}));
export var CreateDataQualityJobDefinitionRequest;
(function (CreateDataQualityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateDataQualityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataQualityJobDefinitionRequest || (CreateDataQualityJobDefinitionRequest = {}));
export var CreateDataQualityJobDefinitionResponse;
(function (CreateDataQualityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateDataQualityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataQualityJobDefinitionResponse || (CreateDataQualityJobDefinitionResponse = {}));
export var EdgeOutputConfig;
(function (EdgeOutputConfig) {
    /**
     * @internal
     */
    EdgeOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EdgeOutputConfig || (EdgeOutputConfig = {}));
export var CreateDeviceFleetRequest;
(function (CreateDeviceFleetRequest) {
    /**
     * @internal
     */
    CreateDeviceFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeviceFleetRequest || (CreateDeviceFleetRequest = {}));
export var JupyterServerAppSettings;
(function (JupyterServerAppSettings) {
    /**
     * @internal
     */
    JupyterServerAppSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JupyterServerAppSettings || (JupyterServerAppSettings = {}));
export var CustomImage;
(function (CustomImage) {
    /**
     * @internal
     */
    CustomImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomImage || (CustomImage = {}));
export var KernelGatewayAppSettings;
(function (KernelGatewayAppSettings) {
    /**
     * @internal
     */
    KernelGatewayAppSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KernelGatewayAppSettings || (KernelGatewayAppSettings = {}));
export var NotebookOutputOption;
(function (NotebookOutputOption) {
    NotebookOutputOption["Allowed"] = "Allowed";
    NotebookOutputOption["Disabled"] = "Disabled";
})(NotebookOutputOption || (NotebookOutputOption = {}));
export var SharingSettings;
(function (SharingSettings) {
    /**
     * @internal
     */
    SharingSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SharingSettings || (SharingSettings = {}));
export var TensorBoardAppSettings;
(function (TensorBoardAppSettings) {
    /**
     * @internal
     */
    TensorBoardAppSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TensorBoardAppSettings || (TensorBoardAppSettings = {}));
export var UserSettings;
(function (UserSettings) {
    /**
     * @internal
     */
    UserSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserSettings || (UserSettings = {}));
export var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainRequest || (CreateDomainRequest = {}));
export var CreateDomainResponse;
(function (CreateDomainResponse) {
    /**
     * @internal
     */
    CreateDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainResponse || (CreateDomainResponse = {}));
export var CreateEdgePackagingJobRequest;
(function (CreateEdgePackagingJobRequest) {
    /**
     * @internal
     */
    CreateEdgePackagingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEdgePackagingJobRequest || (CreateEdgePackagingJobRequest = {}));
export var CreateEndpointInput;
(function (CreateEndpointInput) {
    /**
     * @internal
     */
    CreateEndpointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEndpointInput || (CreateEndpointInput = {}));
export var CreateEndpointOutput;
(function (CreateEndpointOutput) {
    /**
     * @internal
     */
    CreateEndpointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEndpointOutput || (CreateEndpointOutput = {}));
export var DataCaptureConfig;
(function (DataCaptureConfig) {
    /**
     * @internal
     */
    DataCaptureConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataCaptureConfig || (DataCaptureConfig = {}));
export var ProductionVariantAcceleratorType;
(function (ProductionVariantAcceleratorType) {
    ProductionVariantAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    ProductionVariantAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    ProductionVariantAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    ProductionVariantAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    ProductionVariantAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    ProductionVariantAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(ProductionVariantAcceleratorType || (ProductionVariantAcceleratorType = {}));
export var ProductionVariantCoreDumpConfig;
(function (ProductionVariantCoreDumpConfig) {
    /**
     * @internal
     */
    ProductionVariantCoreDumpConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProductionVariantCoreDumpConfig || (ProductionVariantCoreDumpConfig = {}));
export var ProductionVariant;
(function (ProductionVariant) {
    /**
     * @internal
     */
    ProductionVariant.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProductionVariant || (ProductionVariant = {}));
export var CreateEndpointConfigInput;
(function (CreateEndpointConfigInput) {
    /**
     * @internal
     */
    CreateEndpointConfigInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEndpointConfigInput || (CreateEndpointConfigInput = {}));
export var CreateEndpointConfigOutput;
(function (CreateEndpointConfigOutput) {
    /**
     * @internal
     */
    CreateEndpointConfigOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEndpointConfigOutput || (CreateEndpointConfigOutput = {}));
export var CreateExperimentRequest;
(function (CreateExperimentRequest) {
    /**
     * @internal
     */
    CreateExperimentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExperimentRequest || (CreateExperimentRequest = {}));
export var CreateExperimentResponse;
(function (CreateExperimentResponse) {
    /**
     * @internal
     */
    CreateExperimentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExperimentResponse || (CreateExperimentResponse = {}));
export var FeatureType;
(function (FeatureType) {
    FeatureType["FRACTIONAL"] = "Fractional";
    FeatureType["INTEGRAL"] = "Integral";
    FeatureType["STRING"] = "String";
})(FeatureType || (FeatureType = {}));
export var FeatureDefinition;
(function (FeatureDefinition) {
    /**
     * @internal
     */
    FeatureDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FeatureDefinition || (FeatureDefinition = {}));
export var DataCatalogConfig;
(function (DataCatalogConfig) {
    /**
     * @internal
     */
    DataCatalogConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataCatalogConfig || (DataCatalogConfig = {}));
export var S3StorageConfig;
(function (S3StorageConfig) {
    /**
     * @internal
     */
    S3StorageConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3StorageConfig || (S3StorageConfig = {}));
export var OfflineStoreConfig;
(function (OfflineStoreConfig) {
    /**
     * @internal
     */
    OfflineStoreConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OfflineStoreConfig || (OfflineStoreConfig = {}));
export var OnlineStoreSecurityConfig;
(function (OnlineStoreSecurityConfig) {
    /**
     * @internal
     */
    OnlineStoreSecurityConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OnlineStoreSecurityConfig || (OnlineStoreSecurityConfig = {}));
export var OnlineStoreConfig;
(function (OnlineStoreConfig) {
    /**
     * @internal
     */
    OnlineStoreConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OnlineStoreConfig || (OnlineStoreConfig = {}));
export var CreateFeatureGroupRequest;
(function (CreateFeatureGroupRequest) {
    /**
     * @internal
     */
    CreateFeatureGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFeatureGroupRequest || (CreateFeatureGroupRequest = {}));
export var CreateFeatureGroupResponse;
(function (CreateFeatureGroupResponse) {
    /**
     * @internal
     */
    CreateFeatureGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFeatureGroupResponse || (CreateFeatureGroupResponse = {}));
export var HumanLoopActivationConditionsConfig;
(function (HumanLoopActivationConditionsConfig) {
    /**
     * @internal
     */
    HumanLoopActivationConditionsConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopActivationConditionsConfig || (HumanLoopActivationConditionsConfig = {}));
export var HumanLoopActivationConfig;
(function (HumanLoopActivationConfig) {
    /**
     * @internal
     */
    HumanLoopActivationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopActivationConfig || (HumanLoopActivationConfig = {}));
export var USD;
(function (USD) {
    /**
     * @internal
     */
    USD.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(USD || (USD = {}));
export var PublicWorkforceTaskPrice;
(function (PublicWorkforceTaskPrice) {
    /**
     * @internal
     */
    PublicWorkforceTaskPrice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublicWorkforceTaskPrice || (PublicWorkforceTaskPrice = {}));
export var HumanLoopConfig;
(function (HumanLoopConfig) {
    /**
     * @internal
     */
    HumanLoopConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopConfig || (HumanLoopConfig = {}));
export var HumanLoopRequestSource;
(function (HumanLoopRequestSource) {
    /**
     * @internal
     */
    HumanLoopRequestSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopRequestSource || (HumanLoopRequestSource = {}));
export var FlowDefinitionOutputConfig;
(function (FlowDefinitionOutputConfig) {
    /**
     * @internal
     */
    FlowDefinitionOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FlowDefinitionOutputConfig || (FlowDefinitionOutputConfig = {}));
export var CreateFlowDefinitionRequest;
(function (CreateFlowDefinitionRequest) {
    /**
     * @internal
     */
    CreateFlowDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFlowDefinitionRequest || (CreateFlowDefinitionRequest = {}));
export var CreateFlowDefinitionResponse;
(function (CreateFlowDefinitionResponse) {
    /**
     * @internal
     */
    CreateFlowDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFlowDefinitionResponse || (CreateFlowDefinitionResponse = {}));
export var UiTemplate;
(function (UiTemplate) {
    /**
     * @internal
     */
    UiTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UiTemplate || (UiTemplate = {}));
export var CreateHumanTaskUiRequest;
(function (CreateHumanTaskUiRequest) {
    /**
     * @internal
     */
    CreateHumanTaskUiRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateHumanTaskUiRequest || (CreateHumanTaskUiRequest = {}));
export var CreateHumanTaskUiResponse;
(function (CreateHumanTaskUiResponse) {
    /**
     * @internal
     */
    CreateHumanTaskUiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateHumanTaskUiResponse || (CreateHumanTaskUiResponse = {}));
export var IntegerParameterRange;
(function (IntegerParameterRange) {
    /**
     * @internal
     */
    IntegerParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntegerParameterRange || (IntegerParameterRange = {}));
export var ParameterRanges;
(function (ParameterRanges) {
    /**
     * @internal
     */
    ParameterRanges.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterRanges || (ParameterRanges = {}));
export var ResourceLimits;
(function (ResourceLimits) {
    /**
     * @internal
     */
    ResourceLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimits || (ResourceLimits = {}));
export var HyperParameterTuningJobStrategyType;
(function (HyperParameterTuningJobStrategyType) {
    HyperParameterTuningJobStrategyType["BAYESIAN"] = "Bayesian";
    HyperParameterTuningJobStrategyType["RANDOM"] = "Random";
})(HyperParameterTuningJobStrategyType || (HyperParameterTuningJobStrategyType = {}));
export var TrainingJobEarlyStoppingType;
(function (TrainingJobEarlyStoppingType) {
    TrainingJobEarlyStoppingType["AUTO"] = "Auto";
    TrainingJobEarlyStoppingType["OFF"] = "Off";
})(TrainingJobEarlyStoppingType || (TrainingJobEarlyStoppingType = {}));
export var TuningJobCompletionCriteria;
(function (TuningJobCompletionCriteria) {
    /**
     * @internal
     */
    TuningJobCompletionCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TuningJobCompletionCriteria || (TuningJobCompletionCriteria = {}));
export var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTuningJobConfig || (HyperParameterTuningJobConfig = {}));
export var HyperParameterAlgorithmSpecification;
(function (HyperParameterAlgorithmSpecification) {
    /**
     * @internal
     */
    HyperParameterAlgorithmSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterAlgorithmSpecification || (HyperParameterAlgorithmSpecification = {}));
export var RetryStrategy;
(function (RetryStrategy) {
    /**
     * @internal
     */
    RetryStrategy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryStrategy || (RetryStrategy = {}));
export var HyperParameterTrainingJobDefinition;
(function (HyperParameterTrainingJobDefinition) {
    /**
     * @internal
     */
    HyperParameterTrainingJobDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTrainingJobDefinition || (HyperParameterTrainingJobDefinition = {}));
export var ParentHyperParameterTuningJob;
(function (ParentHyperParameterTuningJob) {
    /**
     * @internal
     */
    ParentHyperParameterTuningJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParentHyperParameterTuningJob || (ParentHyperParameterTuningJob = {}));
export var HyperParameterTuningJobWarmStartType;
(function (HyperParameterTuningJobWarmStartType) {
    HyperParameterTuningJobWarmStartType["IDENTICAL_DATA_AND_ALGORITHM"] = "IdenticalDataAndAlgorithm";
    HyperParameterTuningJobWarmStartType["TRANSFER_LEARNING"] = "TransferLearning";
})(HyperParameterTuningJobWarmStartType || (HyperParameterTuningJobWarmStartType = {}));
export var HyperParameterTuningJobWarmStartConfig;
(function (HyperParameterTuningJobWarmStartConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobWarmStartConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTuningJobWarmStartConfig || (HyperParameterTuningJobWarmStartConfig = {}));
export var CreateHyperParameterTuningJobRequest;
(function (CreateHyperParameterTuningJobRequest) {
    /**
     * @internal
     */
    CreateHyperParameterTuningJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateHyperParameterTuningJobRequest || (CreateHyperParameterTuningJobRequest = {}));
export var CreateHyperParameterTuningJobResponse;
(function (CreateHyperParameterTuningJobResponse) {
    /**
     * @internal
     */
    CreateHyperParameterTuningJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateHyperParameterTuningJobResponse || (CreateHyperParameterTuningJobResponse = {}));
export var CreateImageRequest;
(function (CreateImageRequest) {
    /**
     * @internal
     */
    CreateImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageRequest || (CreateImageRequest = {}));
export var CreateImageResponse;
(function (CreateImageResponse) {
    /**
     * @internal
     */
    CreateImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageResponse || (CreateImageResponse = {}));
export var CreateImageVersionRequest;
(function (CreateImageVersionRequest) {
    /**
     * @internal
     */
    CreateImageVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageVersionRequest || (CreateImageVersionRequest = {}));
export var CreateImageVersionResponse;
(function (CreateImageVersionResponse) {
    /**
     * @internal
     */
    CreateImageVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageVersionResponse || (CreateImageVersionResponse = {}));
export var UiConfig;
(function (UiConfig) {
    /**
     * @internal
     */
    UiConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UiConfig || (UiConfig = {}));
export var HumanTaskConfig;
(function (HumanTaskConfig) {
    /**
     * @internal
     */
    HumanTaskConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanTaskConfig || (HumanTaskConfig = {}));
export var LabelingJobDataAttributes;
(function (LabelingJobDataAttributes) {
    /**
     * @internal
     */
    LabelingJobDataAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobDataAttributes || (LabelingJobDataAttributes = {}));
export var LabelingJobS3DataSource;
(function (LabelingJobS3DataSource) {
    /**
     * @internal
     */
    LabelingJobS3DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobS3DataSource || (LabelingJobS3DataSource = {}));
export var LabelingJobSnsDataSource;
(function (LabelingJobSnsDataSource) {
    /**
     * @internal
     */
    LabelingJobSnsDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobSnsDataSource || (LabelingJobSnsDataSource = {}));
export var LabelingJobDataSource;
(function (LabelingJobDataSource) {
    /**
     * @internal
     */
    LabelingJobDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobDataSource || (LabelingJobDataSource = {}));
export var LabelingJobInputConfig;
(function (LabelingJobInputConfig) {
    /**
     * @internal
     */
    LabelingJobInputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobInputConfig || (LabelingJobInputConfig = {}));
export var LabelingJobResourceConfig;
(function (LabelingJobResourceConfig) {
    /**
     * @internal
     */
    LabelingJobResourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobResourceConfig || (LabelingJobResourceConfig = {}));
export var LabelingJobAlgorithmsConfig;
(function (LabelingJobAlgorithmsConfig) {
    /**
     * @internal
     */
    LabelingJobAlgorithmsConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobAlgorithmsConfig || (LabelingJobAlgorithmsConfig = {}));
export var LabelingJobOutputConfig;
(function (LabelingJobOutputConfig) {
    /**
     * @internal
     */
    LabelingJobOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobOutputConfig || (LabelingJobOutputConfig = {}));
export var LabelingJobStoppingConditions;
(function (LabelingJobStoppingConditions) {
    /**
     * @internal
     */
    LabelingJobStoppingConditions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelingJobStoppingConditions || (LabelingJobStoppingConditions = {}));
export var CreateLabelingJobRequest;
(function (CreateLabelingJobRequest) {
    /**
     * @internal
     */
    CreateLabelingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLabelingJobRequest || (CreateLabelingJobRequest = {}));
export var CreateLabelingJobResponse;
(function (CreateLabelingJobResponse) {
    /**
     * @internal
     */
    CreateLabelingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLabelingJobResponse || (CreateLabelingJobResponse = {}));
export var InferenceExecutionMode;
(function (InferenceExecutionMode) {
    InferenceExecutionMode["DIRECT"] = "Direct";
    InferenceExecutionMode["SERIAL"] = "Serial";
})(InferenceExecutionMode || (InferenceExecutionMode = {}));
export var InferenceExecutionConfig;
(function (InferenceExecutionConfig) {
    /**
     * @internal
     */
    InferenceExecutionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceExecutionConfig || (InferenceExecutionConfig = {}));
export var CreateModelInput;
(function (CreateModelInput) {
    /**
     * @internal
     */
    CreateModelInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelInput || (CreateModelInput = {}));
export var CreateModelOutput;
(function (CreateModelOutput) {
    /**
     * @internal
     */
    CreateModelOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelOutput || (CreateModelOutput = {}));
export var ModelBiasAppSpecification;
(function (ModelBiasAppSpecification) {
    /**
     * @internal
     */
    ModelBiasAppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelBiasAppSpecification || (ModelBiasAppSpecification = {}));
export var ModelBiasBaselineConfig;
(function (ModelBiasBaselineConfig) {
    /**
     * @internal
     */
    ModelBiasBaselineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelBiasBaselineConfig || (ModelBiasBaselineConfig = {}));
export var MonitoringGroundTruthS3Input;
(function (MonitoringGroundTruthS3Input) {
    /**
     * @internal
     */
    MonitoringGroundTruthS3Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringGroundTruthS3Input || (MonitoringGroundTruthS3Input = {}));
export var ModelBiasJobInput;
(function (ModelBiasJobInput) {
    /**
     * @internal
     */
    ModelBiasJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelBiasJobInput || (ModelBiasJobInput = {}));
export var CreateModelBiasJobDefinitionRequest;
(function (CreateModelBiasJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelBiasJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelBiasJobDefinitionRequest || (CreateModelBiasJobDefinitionRequest = {}));
export var CreateModelBiasJobDefinitionResponse;
(function (CreateModelBiasJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelBiasJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelBiasJobDefinitionResponse || (CreateModelBiasJobDefinitionResponse = {}));
export var ModelExplainabilityAppSpecification;
(function (ModelExplainabilityAppSpecification) {
    /**
     * @internal
     */
    ModelExplainabilityAppSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelExplainabilityAppSpecification || (ModelExplainabilityAppSpecification = {}));
export var ModelExplainabilityBaselineConfig;
(function (ModelExplainabilityBaselineConfig) {
    /**
     * @internal
     */
    ModelExplainabilityBaselineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelExplainabilityBaselineConfig || (ModelExplainabilityBaselineConfig = {}));
export var ModelExplainabilityJobInput;
(function (ModelExplainabilityJobInput) {
    /**
     * @internal
     */
    ModelExplainabilityJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelExplainabilityJobInput || (ModelExplainabilityJobInput = {}));
export var CreateModelExplainabilityJobDefinitionRequest;
(function (CreateModelExplainabilityJobDefinitionRequest) {
    /**
     * @internal
     */
    CreateModelExplainabilityJobDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelExplainabilityJobDefinitionRequest || (CreateModelExplainabilityJobDefinitionRequest = {}));
export var CreateModelExplainabilityJobDefinitionResponse;
(function (CreateModelExplainabilityJobDefinitionResponse) {
    /**
     * @internal
     */
    CreateModelExplainabilityJobDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelExplainabilityJobDefinitionResponse || (CreateModelExplainabilityJobDefinitionResponse = {}));
export var ModelApprovalStatus;
(function (ModelApprovalStatus) {
    ModelApprovalStatus["APPROVED"] = "Approved";
    ModelApprovalStatus["PENDING_MANUAL_APPROVAL"] = "PendingManualApproval";
    ModelApprovalStatus["REJECTED"] = "Rejected";
})(ModelApprovalStatus || (ModelApprovalStatus = {}));
export var Explainability;
(function (Explainability) {
    /**
     * @internal
     */
    Explainability.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Explainability || (Explainability = {}));
//# sourceMappingURL=models_0.js.map