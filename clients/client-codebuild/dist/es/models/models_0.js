import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccountLimitExceededException;
(function (AccountLimitExceededException) {
    /**
     * @internal
     */
    AccountLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountLimitExceededException || (AccountLimitExceededException = {}));
export var ArtifactNamespace;
(function (ArtifactNamespace) {
    ArtifactNamespace["BUILD_ID"] = "BUILD_ID";
    ArtifactNamespace["NONE"] = "NONE";
})(ArtifactNamespace || (ArtifactNamespace = {}));
export var ArtifactPackaging;
(function (ArtifactPackaging) {
    ArtifactPackaging["NONE"] = "NONE";
    ArtifactPackaging["ZIP"] = "ZIP";
})(ArtifactPackaging || (ArtifactPackaging = {}));
export var ArtifactsType;
(function (ArtifactsType) {
    ArtifactsType["CODEPIPELINE"] = "CODEPIPELINE";
    ArtifactsType["NO_ARTIFACTS"] = "NO_ARTIFACTS";
    ArtifactsType["S3"] = "S3";
})(ArtifactsType || (ArtifactsType = {}));
export var AuthType;
(function (AuthType) {
    AuthType["BASIC_AUTH"] = "BASIC_AUTH";
    AuthType["OAUTH"] = "OAUTH";
    AuthType["PERSONAL_ACCESS_TOKEN"] = "PERSONAL_ACCESS_TOKEN";
})(AuthType || (AuthType = {}));
export var BatchDeleteBuildsInput;
(function (BatchDeleteBuildsInput) {
    /**
     * @internal
     */
    BatchDeleteBuildsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteBuildsInput || (BatchDeleteBuildsInput = {}));
export var BuildNotDeleted;
(function (BuildNotDeleted) {
    /**
     * @internal
     */
    BuildNotDeleted.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildNotDeleted || (BuildNotDeleted = {}));
export var BatchDeleteBuildsOutput;
(function (BatchDeleteBuildsOutput) {
    /**
     * @internal
     */
    BatchDeleteBuildsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteBuildsOutput || (BatchDeleteBuildsOutput = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var BatchGetBuildBatchesInput;
(function (BatchGetBuildBatchesInput) {
    /**
     * @internal
     */
    BatchGetBuildBatchesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetBuildBatchesInput || (BatchGetBuildBatchesInput = {}));
export var BucketOwnerAccess;
(function (BucketOwnerAccess) {
    BucketOwnerAccess["FULL"] = "FULL";
    BucketOwnerAccess["NONE"] = "NONE";
    BucketOwnerAccess["READ_ONLY"] = "READ_ONLY";
})(BucketOwnerAccess || (BucketOwnerAccess = {}));
export var BuildArtifacts;
(function (BuildArtifacts) {
    /**
     * @internal
     */
    BuildArtifacts.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildArtifacts || (BuildArtifacts = {}));
export var BatchRestrictions;
(function (BatchRestrictions) {
    /**
     * @internal
     */
    BatchRestrictions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchRestrictions || (BatchRestrictions = {}));
export var ProjectBuildBatchConfig;
(function (ProjectBuildBatchConfig) {
    /**
     * @internal
     */
    ProjectBuildBatchConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectBuildBatchConfig || (ProjectBuildBatchConfig = {}));
export var StatusType;
(function (StatusType) {
    StatusType["FAILED"] = "FAILED";
    StatusType["FAULT"] = "FAULT";
    StatusType["IN_PROGRESS"] = "IN_PROGRESS";
    StatusType["STOPPED"] = "STOPPED";
    StatusType["SUCCEEDED"] = "SUCCEEDED";
    StatusType["TIMED_OUT"] = "TIMED_OUT";
})(StatusType || (StatusType = {}));
export var ResolvedArtifact;
(function (ResolvedArtifact) {
    /**
     * @internal
     */
    ResolvedArtifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResolvedArtifact || (ResolvedArtifact = {}));
export var BuildSummary;
(function (BuildSummary) {
    /**
     * @internal
     */
    BuildSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildSummary || (BuildSummary = {}));
export var BuildGroup;
(function (BuildGroup) {
    /**
     * @internal
     */
    BuildGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildGroup || (BuildGroup = {}));
export var CacheMode;
(function (CacheMode) {
    CacheMode["LOCAL_CUSTOM_CACHE"] = "LOCAL_CUSTOM_CACHE";
    CacheMode["LOCAL_DOCKER_LAYER_CACHE"] = "LOCAL_DOCKER_LAYER_CACHE";
    CacheMode["LOCAL_SOURCE_CACHE"] = "LOCAL_SOURCE_CACHE";
})(CacheMode || (CacheMode = {}));
export var CacheType;
(function (CacheType) {
    CacheType["LOCAL"] = "LOCAL";
    CacheType["NO_CACHE"] = "NO_CACHE";
    CacheType["S3"] = "S3";
})(CacheType || (CacheType = {}));
export var ProjectCache;
(function (ProjectCache) {
    /**
     * @internal
     */
    ProjectCache.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectCache || (ProjectCache = {}));
export var ComputeType;
(function (ComputeType) {
    ComputeType["BUILD_GENERAL1_2XLARGE"] = "BUILD_GENERAL1_2XLARGE";
    ComputeType["BUILD_GENERAL1_LARGE"] = "BUILD_GENERAL1_LARGE";
    ComputeType["BUILD_GENERAL1_MEDIUM"] = "BUILD_GENERAL1_MEDIUM";
    ComputeType["BUILD_GENERAL1_SMALL"] = "BUILD_GENERAL1_SMALL";
})(ComputeType || (ComputeType = {}));
export var EnvironmentVariableType;
(function (EnvironmentVariableType) {
    EnvironmentVariableType["PARAMETER_STORE"] = "PARAMETER_STORE";
    EnvironmentVariableType["PLAINTEXT"] = "PLAINTEXT";
    EnvironmentVariableType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(EnvironmentVariableType || (EnvironmentVariableType = {}));
export var EnvironmentVariable;
(function (EnvironmentVariable) {
    /**
     * @internal
     */
    EnvironmentVariable.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnvironmentVariable || (EnvironmentVariable = {}));
export var ImagePullCredentialsType;
(function (ImagePullCredentialsType) {
    ImagePullCredentialsType["CODEBUILD"] = "CODEBUILD";
    ImagePullCredentialsType["SERVICE_ROLE"] = "SERVICE_ROLE";
})(ImagePullCredentialsType || (ImagePullCredentialsType = {}));
export var CredentialProviderType;
(function (CredentialProviderType) {
    CredentialProviderType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(CredentialProviderType || (CredentialProviderType = {}));
export var RegistryCredential;
(function (RegistryCredential) {
    /**
     * @internal
     */
    RegistryCredential.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistryCredential || (RegistryCredential = {}));
export var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["ARM_CONTAINER"] = "ARM_CONTAINER";
    EnvironmentType["LINUX_CONTAINER"] = "LINUX_CONTAINER";
    EnvironmentType["LINUX_GPU_CONTAINER"] = "LINUX_GPU_CONTAINER";
    EnvironmentType["WINDOWS_CONTAINER"] = "WINDOWS_CONTAINER";
    EnvironmentType["WINDOWS_SERVER_2019_CONTAINER"] = "WINDOWS_SERVER_2019_CONTAINER";
})(EnvironmentType || (EnvironmentType = {}));
export var ProjectEnvironment;
(function (ProjectEnvironment) {
    /**
     * @internal
     */
    ProjectEnvironment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectEnvironment || (ProjectEnvironment = {}));
export var FileSystemType;
(function (FileSystemType) {
    FileSystemType["EFS"] = "EFS";
})(FileSystemType || (FileSystemType = {}));
export var ProjectFileSystemLocation;
(function (ProjectFileSystemLocation) {
    /**
     * @internal
     */
    ProjectFileSystemLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectFileSystemLocation || (ProjectFileSystemLocation = {}));
export var LogsConfigStatusType;
(function (LogsConfigStatusType) {
    LogsConfigStatusType["DISABLED"] = "DISABLED";
    LogsConfigStatusType["ENABLED"] = "ENABLED";
})(LogsConfigStatusType || (LogsConfigStatusType = {}));
export var CloudWatchLogsConfig;
(function (CloudWatchLogsConfig) {
    /**
     * @internal
     */
    CloudWatchLogsConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchLogsConfig || (CloudWatchLogsConfig = {}));
export var S3LogsConfig;
(function (S3LogsConfig) {
    /**
     * @internal
     */
    S3LogsConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3LogsConfig || (S3LogsConfig = {}));
export var LogsConfig;
(function (LogsConfig) {
    /**
     * @internal
     */
    LogsConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogsConfig || (LogsConfig = {}));
export var PhaseContext;
(function (PhaseContext) {
    /**
     * @internal
     */
    PhaseContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PhaseContext || (PhaseContext = {}));
export var BuildBatchPhaseType;
(function (BuildBatchPhaseType) {
    BuildBatchPhaseType["COMBINE_ARTIFACTS"] = "COMBINE_ARTIFACTS";
    BuildBatchPhaseType["DOWNLOAD_BATCHSPEC"] = "DOWNLOAD_BATCHSPEC";
    BuildBatchPhaseType["FAILED"] = "FAILED";
    BuildBatchPhaseType["IN_PROGRESS"] = "IN_PROGRESS";
    BuildBatchPhaseType["STOPPED"] = "STOPPED";
    BuildBatchPhaseType["SUBMITTED"] = "SUBMITTED";
    BuildBatchPhaseType["SUCCEEDED"] = "SUCCEEDED";
})(BuildBatchPhaseType || (BuildBatchPhaseType = {}));
export var BuildBatchPhase;
(function (BuildBatchPhase) {
    /**
     * @internal
     */
    BuildBatchPhase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildBatchPhase || (BuildBatchPhase = {}));
export var SourceAuthType;
(function (SourceAuthType) {
    SourceAuthType["OAUTH"] = "OAUTH";
})(SourceAuthType || (SourceAuthType = {}));
export var SourceAuth;
(function (SourceAuth) {
    /**
     * @internal
     */
    SourceAuth.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceAuth || (SourceAuth = {}));
export var BuildStatusConfig;
(function (BuildStatusConfig) {
    /**
     * @internal
     */
    BuildStatusConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildStatusConfig || (BuildStatusConfig = {}));
export var GitSubmodulesConfig;
(function (GitSubmodulesConfig) {
    /**
     * @internal
     */
    GitSubmodulesConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GitSubmodulesConfig || (GitSubmodulesConfig = {}));
export var SourceType;
(function (SourceType) {
    SourceType["BITBUCKET"] = "BITBUCKET";
    SourceType["CODECOMMIT"] = "CODECOMMIT";
    SourceType["CODEPIPELINE"] = "CODEPIPELINE";
    SourceType["GITHUB"] = "GITHUB";
    SourceType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
    SourceType["NO_SOURCE"] = "NO_SOURCE";
    SourceType["S3"] = "S3";
})(SourceType || (SourceType = {}));
export var ProjectSource;
(function (ProjectSource) {
    /**
     * @internal
     */
    ProjectSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectSource || (ProjectSource = {}));
export var ProjectSourceVersion;
(function (ProjectSourceVersion) {
    /**
     * @internal
     */
    ProjectSourceVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectSourceVersion || (ProjectSourceVersion = {}));
export var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfig || (VpcConfig = {}));
export var BuildBatch;
(function (BuildBatch) {
    /**
     * @internal
     */
    BuildBatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildBatch || (BuildBatch = {}));
export var BatchGetBuildBatchesOutput;
(function (BatchGetBuildBatchesOutput) {
    /**
     * @internal
     */
    BatchGetBuildBatchesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetBuildBatchesOutput || (BatchGetBuildBatchesOutput = {}));
export var BatchGetBuildsInput;
(function (BatchGetBuildsInput) {
    /**
     * @internal
     */
    BatchGetBuildsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetBuildsInput || (BatchGetBuildsInput = {}));
export var DebugSession;
(function (DebugSession) {
    /**
     * @internal
     */
    DebugSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DebugSession || (DebugSession = {}));
export var ExportedEnvironmentVariable;
(function (ExportedEnvironmentVariable) {
    /**
     * @internal
     */
    ExportedEnvironmentVariable.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportedEnvironmentVariable || (ExportedEnvironmentVariable = {}));
export var LogsLocation;
(function (LogsLocation) {
    /**
     * @internal
     */
    LogsLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogsLocation || (LogsLocation = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var BuildPhaseType;
(function (BuildPhaseType) {
    BuildPhaseType["BUILD"] = "BUILD";
    BuildPhaseType["COMPLETED"] = "COMPLETED";
    BuildPhaseType["DOWNLOAD_SOURCE"] = "DOWNLOAD_SOURCE";
    BuildPhaseType["FINALIZING"] = "FINALIZING";
    BuildPhaseType["INSTALL"] = "INSTALL";
    BuildPhaseType["POST_BUILD"] = "POST_BUILD";
    BuildPhaseType["PRE_BUILD"] = "PRE_BUILD";
    BuildPhaseType["PROVISIONING"] = "PROVISIONING";
    BuildPhaseType["QUEUED"] = "QUEUED";
    BuildPhaseType["SUBMITTED"] = "SUBMITTED";
    BuildPhaseType["UPLOAD_ARTIFACTS"] = "UPLOAD_ARTIFACTS";
})(BuildPhaseType || (BuildPhaseType = {}));
export var BuildPhase;
(function (BuildPhase) {
    /**
     * @internal
     */
    BuildPhase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildPhase || (BuildPhase = {}));
export var Build;
(function (Build) {
    /**
     * @internal
     */
    Build.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Build || (Build = {}));
export var BatchGetBuildsOutput;
(function (BatchGetBuildsOutput) {
    /**
     * @internal
     */
    BatchGetBuildsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetBuildsOutput || (BatchGetBuildsOutput = {}));
export var BatchGetProjectsInput;
(function (BatchGetProjectsInput) {
    /**
     * @internal
     */
    BatchGetProjectsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetProjectsInput || (BatchGetProjectsInput = {}));
export var ProjectArtifacts;
(function (ProjectArtifacts) {
    /**
     * @internal
     */
    ProjectArtifacts.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectArtifacts || (ProjectArtifacts = {}));
export var ProjectBadge;
(function (ProjectBadge) {
    /**
     * @internal
     */
    ProjectBadge.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectBadge || (ProjectBadge = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var WebhookBuildType;
(function (WebhookBuildType) {
    WebhookBuildType["BUILD"] = "BUILD";
    WebhookBuildType["BUILD_BATCH"] = "BUILD_BATCH";
})(WebhookBuildType || (WebhookBuildType = {}));
export var WebhookFilterType;
(function (WebhookFilterType) {
    WebhookFilterType["ACTOR_ACCOUNT_ID"] = "ACTOR_ACCOUNT_ID";
    WebhookFilterType["BASE_REF"] = "BASE_REF";
    WebhookFilterType["COMMIT_MESSAGE"] = "COMMIT_MESSAGE";
    WebhookFilterType["EVENT"] = "EVENT";
    WebhookFilterType["FILE_PATH"] = "FILE_PATH";
    WebhookFilterType["HEAD_REF"] = "HEAD_REF";
})(WebhookFilterType || (WebhookFilterType = {}));
export var WebhookFilter;
(function (WebhookFilter) {
    /**
     * @internal
     */
    WebhookFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebhookFilter || (WebhookFilter = {}));
export var Webhook;
(function (Webhook) {
    /**
     * @internal
     */
    Webhook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Webhook || (Webhook = {}));
export var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Project || (Project = {}));
export var BatchGetProjectsOutput;
(function (BatchGetProjectsOutput) {
    /**
     * @internal
     */
    BatchGetProjectsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetProjectsOutput || (BatchGetProjectsOutput = {}));
export var BatchGetReportGroupsInput;
(function (BatchGetReportGroupsInput) {
    /**
     * @internal
     */
    BatchGetReportGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetReportGroupsInput || (BatchGetReportGroupsInput = {}));
export var ReportExportConfigType;
(function (ReportExportConfigType) {
    ReportExportConfigType["NO_EXPORT"] = "NO_EXPORT";
    ReportExportConfigType["S3"] = "S3";
})(ReportExportConfigType || (ReportExportConfigType = {}));
export var ReportPackagingType;
(function (ReportPackagingType) {
    ReportPackagingType["NONE"] = "NONE";
    ReportPackagingType["ZIP"] = "ZIP";
})(ReportPackagingType || (ReportPackagingType = {}));
export var S3ReportExportConfig;
(function (S3ReportExportConfig) {
    /**
     * @internal
     */
    S3ReportExportConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ReportExportConfig || (S3ReportExportConfig = {}));
export var ReportExportConfig;
(function (ReportExportConfig) {
    /**
     * @internal
     */
    ReportExportConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportExportConfig || (ReportExportConfig = {}));
export var ReportGroupStatusType;
(function (ReportGroupStatusType) {
    ReportGroupStatusType["ACTIVE"] = "ACTIVE";
    ReportGroupStatusType["DELETING"] = "DELETING";
})(ReportGroupStatusType || (ReportGroupStatusType = {}));
export var ReportType;
(function (ReportType) {
    ReportType["CODE_COVERAGE"] = "CODE_COVERAGE";
    ReportType["TEST"] = "TEST";
})(ReportType || (ReportType = {}));
export var ReportGroup;
(function (ReportGroup) {
    /**
     * @internal
     */
    ReportGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportGroup || (ReportGroup = {}));
export var BatchGetReportGroupsOutput;
(function (BatchGetReportGroupsOutput) {
    /**
     * @internal
     */
    BatchGetReportGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetReportGroupsOutput || (BatchGetReportGroupsOutput = {}));
export var BatchGetReportsInput;
(function (BatchGetReportsInput) {
    /**
     * @internal
     */
    BatchGetReportsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetReportsInput || (BatchGetReportsInput = {}));
export var CodeCoverageReportSummary;
(function (CodeCoverageReportSummary) {
    /**
     * @internal
     */
    CodeCoverageReportSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeCoverageReportSummary || (CodeCoverageReportSummary = {}));
export var ReportStatusType;
(function (ReportStatusType) {
    ReportStatusType["DELETING"] = "DELETING";
    ReportStatusType["FAILED"] = "FAILED";
    ReportStatusType["GENERATING"] = "GENERATING";
    ReportStatusType["INCOMPLETE"] = "INCOMPLETE";
    ReportStatusType["SUCCEEDED"] = "SUCCEEDED";
})(ReportStatusType || (ReportStatusType = {}));
export var TestReportSummary;
(function (TestReportSummary) {
    /**
     * @internal
     */
    TestReportSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestReportSummary || (TestReportSummary = {}));
export var Report;
(function (Report) {
    /**
     * @internal
     */
    Report.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Report || (Report = {}));
export var BatchGetReportsOutput;
(function (BatchGetReportsOutput) {
    /**
     * @internal
     */
    BatchGetReportsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetReportsOutput || (BatchGetReportsOutput = {}));
export var BuildBatchFilter;
(function (BuildBatchFilter) {
    /**
     * @internal
     */
    BuildBatchFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BuildBatchFilter || (BuildBatchFilter = {}));
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
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var CreateReportGroupInput;
(function (CreateReportGroupInput) {
    /**
     * @internal
     */
    CreateReportGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReportGroupInput || (CreateReportGroupInput = {}));
export var CreateReportGroupOutput;
(function (CreateReportGroupOutput) {
    /**
     * @internal
     */
    CreateReportGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReportGroupOutput || (CreateReportGroupOutput = {}));
export var CreateWebhookInput;
(function (CreateWebhookInput) {
    /**
     * @internal
     */
    CreateWebhookInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebhookInput || (CreateWebhookInput = {}));
export var CreateWebhookOutput;
(function (CreateWebhookOutput) {
    /**
     * @internal
     */
    CreateWebhookOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebhookOutput || (CreateWebhookOutput = {}));
export var OAuthProviderException;
(function (OAuthProviderException) {
    /**
     * @internal
     */
    OAuthProviderException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OAuthProviderException || (OAuthProviderException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeleteBuildBatchInput;
(function (DeleteBuildBatchInput) {
    /**
     * @internal
     */
    DeleteBuildBatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBuildBatchInput || (DeleteBuildBatchInput = {}));
export var DeleteBuildBatchOutput;
(function (DeleteBuildBatchOutput) {
    /**
     * @internal
     */
    DeleteBuildBatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBuildBatchOutput || (DeleteBuildBatchOutput = {}));
export var DeleteProjectInput;
(function (DeleteProjectInput) {
    /**
     * @internal
     */
    DeleteProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectInput || (DeleteProjectInput = {}));
export var DeleteProjectOutput;
(function (DeleteProjectOutput) {
    /**
     * @internal
     */
    DeleteProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectOutput || (DeleteProjectOutput = {}));
export var DeleteReportInput;
(function (DeleteReportInput) {
    /**
     * @internal
     */
    DeleteReportInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReportInput || (DeleteReportInput = {}));
export var DeleteReportOutput;
(function (DeleteReportOutput) {
    /**
     * @internal
     */
    DeleteReportOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReportOutput || (DeleteReportOutput = {}));
export var DeleteReportGroupInput;
(function (DeleteReportGroupInput) {
    /**
     * @internal
     */
    DeleteReportGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReportGroupInput || (DeleteReportGroupInput = {}));
export var DeleteReportGroupOutput;
(function (DeleteReportGroupOutput) {
    /**
     * @internal
     */
    DeleteReportGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReportGroupOutput || (DeleteReportGroupOutput = {}));
export var DeleteResourcePolicyInput;
(function (DeleteResourcePolicyInput) {
    /**
     * @internal
     */
    DeleteResourcePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyInput || (DeleteResourcePolicyInput = {}));
export var DeleteResourcePolicyOutput;
(function (DeleteResourcePolicyOutput) {
    /**
     * @internal
     */
    DeleteResourcePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyOutput || (DeleteResourcePolicyOutput = {}));
export var DeleteSourceCredentialsInput;
(function (DeleteSourceCredentialsInput) {
    /**
     * @internal
     */
    DeleteSourceCredentialsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSourceCredentialsInput || (DeleteSourceCredentialsInput = {}));
export var DeleteSourceCredentialsOutput;
(function (DeleteSourceCredentialsOutput) {
    /**
     * @internal
     */
    DeleteSourceCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSourceCredentialsOutput || (DeleteSourceCredentialsOutput = {}));
export var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    /**
     * @internal
     */
    DeleteWebhookInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebhookInput || (DeleteWebhookInput = {}));
export var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    /**
     * @internal
     */
    DeleteWebhookOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebhookOutput || (DeleteWebhookOutput = {}));
export var ReportCodeCoverageSortByType;
(function (ReportCodeCoverageSortByType) {
    ReportCodeCoverageSortByType["FILE_PATH"] = "FILE_PATH";
    ReportCodeCoverageSortByType["LINE_COVERAGE_PERCENTAGE"] = "LINE_COVERAGE_PERCENTAGE";
})(ReportCodeCoverageSortByType || (ReportCodeCoverageSortByType = {}));
export var SortOrderType;
(function (SortOrderType) {
    SortOrderType["ASCENDING"] = "ASCENDING";
    SortOrderType["DESCENDING"] = "DESCENDING";
})(SortOrderType || (SortOrderType = {}));
export var DescribeCodeCoveragesInput;
(function (DescribeCodeCoveragesInput) {
    /**
     * @internal
     */
    DescribeCodeCoveragesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeCoveragesInput || (DescribeCodeCoveragesInput = {}));
export var CodeCoverage;
(function (CodeCoverage) {
    /**
     * @internal
     */
    CodeCoverage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeCoverage || (CodeCoverage = {}));
export var DescribeCodeCoveragesOutput;
(function (DescribeCodeCoveragesOutput) {
    /**
     * @internal
     */
    DescribeCodeCoveragesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeCoveragesOutput || (DescribeCodeCoveragesOutput = {}));
export var TestCaseFilter;
(function (TestCaseFilter) {
    /**
     * @internal
     */
    TestCaseFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestCaseFilter || (TestCaseFilter = {}));
export var DescribeTestCasesInput;
(function (DescribeTestCasesInput) {
    /**
     * @internal
     */
    DescribeTestCasesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTestCasesInput || (DescribeTestCasesInput = {}));
export var TestCase;
(function (TestCase) {
    /**
     * @internal
     */
    TestCase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestCase || (TestCase = {}));
export var DescribeTestCasesOutput;
(function (DescribeTestCasesOutput) {
    /**
     * @internal
     */
    DescribeTestCasesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTestCasesOutput || (DescribeTestCasesOutput = {}));
export var ReportGroupTrendFieldType;
(function (ReportGroupTrendFieldType) {
    ReportGroupTrendFieldType["BRANCHES_COVERED"] = "BRANCHES_COVERED";
    ReportGroupTrendFieldType["BRANCHES_MISSED"] = "BRANCHES_MISSED";
    ReportGroupTrendFieldType["BRANCH_COVERAGE"] = "BRANCH_COVERAGE";
    ReportGroupTrendFieldType["DURATION"] = "DURATION";
    ReportGroupTrendFieldType["LINES_COVERED"] = "LINES_COVERED";
    ReportGroupTrendFieldType["LINES_MISSED"] = "LINES_MISSED";
    ReportGroupTrendFieldType["LINE_COVERAGE"] = "LINE_COVERAGE";
    ReportGroupTrendFieldType["PASS_RATE"] = "PASS_RATE";
    ReportGroupTrendFieldType["TOTAL"] = "TOTAL";
})(ReportGroupTrendFieldType || (ReportGroupTrendFieldType = {}));
export var GetReportGroupTrendInput;
(function (GetReportGroupTrendInput) {
    /**
     * @internal
     */
    GetReportGroupTrendInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReportGroupTrendInput || (GetReportGroupTrendInput = {}));
export var ReportWithRawData;
(function (ReportWithRawData) {
    /**
     * @internal
     */
    ReportWithRawData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportWithRawData || (ReportWithRawData = {}));
export var ReportGroupTrendStats;
(function (ReportGroupTrendStats) {
    /**
     * @internal
     */
    ReportGroupTrendStats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportGroupTrendStats || (ReportGroupTrendStats = {}));
export var GetReportGroupTrendOutput;
(function (GetReportGroupTrendOutput) {
    /**
     * @internal
     */
    GetReportGroupTrendOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReportGroupTrendOutput || (GetReportGroupTrendOutput = {}));
export var GetResourcePolicyInput;
(function (GetResourcePolicyInput) {
    /**
     * @internal
     */
    GetResourcePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePolicyInput || (GetResourcePolicyInput = {}));
export var GetResourcePolicyOutput;
(function (GetResourcePolicyOutput) {
    /**
     * @internal
     */
    GetResourcePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePolicyOutput || (GetResourcePolicyOutput = {}));
export var ServerType;
(function (ServerType) {
    ServerType["BITBUCKET"] = "BITBUCKET";
    ServerType["GITHUB"] = "GITHUB";
    ServerType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
})(ServerType || (ServerType = {}));
export var ImportSourceCredentialsInput;
(function (ImportSourceCredentialsInput) {
    /**
     * @internal
     */
    ImportSourceCredentialsInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.token && { token: SENSITIVE_STRING }))); };
})(ImportSourceCredentialsInput || (ImportSourceCredentialsInput = {}));
export var ImportSourceCredentialsOutput;
(function (ImportSourceCredentialsOutput) {
    /**
     * @internal
     */
    ImportSourceCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportSourceCredentialsOutput || (ImportSourceCredentialsOutput = {}));
export var InvalidateProjectCacheInput;
(function (InvalidateProjectCacheInput) {
    /**
     * @internal
     */
    InvalidateProjectCacheInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidateProjectCacheInput || (InvalidateProjectCacheInput = {}));
export var InvalidateProjectCacheOutput;
(function (InvalidateProjectCacheOutput) {
    /**
     * @internal
     */
    InvalidateProjectCacheOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidateProjectCacheOutput || (InvalidateProjectCacheOutput = {}));
export var ListBuildBatchesInput;
(function (ListBuildBatchesInput) {
    /**
     * @internal
     */
    ListBuildBatchesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildBatchesInput || (ListBuildBatchesInput = {}));
export var ListBuildBatchesOutput;
(function (ListBuildBatchesOutput) {
    /**
     * @internal
     */
    ListBuildBatchesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildBatchesOutput || (ListBuildBatchesOutput = {}));
export var ListBuildBatchesForProjectInput;
(function (ListBuildBatchesForProjectInput) {
    /**
     * @internal
     */
    ListBuildBatchesForProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildBatchesForProjectInput || (ListBuildBatchesForProjectInput = {}));
export var ListBuildBatchesForProjectOutput;
(function (ListBuildBatchesForProjectOutput) {
    /**
     * @internal
     */
    ListBuildBatchesForProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildBatchesForProjectOutput || (ListBuildBatchesForProjectOutput = {}));
export var ListBuildsInput;
(function (ListBuildsInput) {
    /**
     * @internal
     */
    ListBuildsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsInput || (ListBuildsInput = {}));
export var ListBuildsOutput;
(function (ListBuildsOutput) {
    /**
     * @internal
     */
    ListBuildsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsOutput || (ListBuildsOutput = {}));
export var ListBuildsForProjectInput;
(function (ListBuildsForProjectInput) {
    /**
     * @internal
     */
    ListBuildsForProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsForProjectInput || (ListBuildsForProjectInput = {}));
export var ListBuildsForProjectOutput;
(function (ListBuildsForProjectOutput) {
    /**
     * @internal
     */
    ListBuildsForProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsForProjectOutput || (ListBuildsForProjectOutput = {}));
export var ListCuratedEnvironmentImagesInput;
(function (ListCuratedEnvironmentImagesInput) {
    /**
     * @internal
     */
    ListCuratedEnvironmentImagesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCuratedEnvironmentImagesInput || (ListCuratedEnvironmentImagesInput = {}));
export var EnvironmentImage;
(function (EnvironmentImage) {
    /**
     * @internal
     */
    EnvironmentImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnvironmentImage || (EnvironmentImage = {}));
export var LanguageType;
(function (LanguageType) {
    LanguageType["ANDROID"] = "ANDROID";
    LanguageType["BASE"] = "BASE";
    LanguageType["DOCKER"] = "DOCKER";
    LanguageType["DOTNET"] = "DOTNET";
    LanguageType["GOLANG"] = "GOLANG";
    LanguageType["JAVA"] = "JAVA";
    LanguageType["NODE_JS"] = "NODE_JS";
    LanguageType["PHP"] = "PHP";
    LanguageType["PYTHON"] = "PYTHON";
    LanguageType["RUBY"] = "RUBY";
})(LanguageType || (LanguageType = {}));
export var EnvironmentLanguage;
(function (EnvironmentLanguage) {
    /**
     * @internal
     */
    EnvironmentLanguage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnvironmentLanguage || (EnvironmentLanguage = {}));
export var PlatformType;
(function (PlatformType) {
    PlatformType["AMAZON_LINUX"] = "AMAZON_LINUX";
    PlatformType["DEBIAN"] = "DEBIAN";
    PlatformType["UBUNTU"] = "UBUNTU";
    PlatformType["WINDOWS_SERVER"] = "WINDOWS_SERVER";
})(PlatformType || (PlatformType = {}));
export var EnvironmentPlatform;
(function (EnvironmentPlatform) {
    /**
     * @internal
     */
    EnvironmentPlatform.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnvironmentPlatform || (EnvironmentPlatform = {}));
export var ListCuratedEnvironmentImagesOutput;
(function (ListCuratedEnvironmentImagesOutput) {
    /**
     * @internal
     */
    ListCuratedEnvironmentImagesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCuratedEnvironmentImagesOutput || (ListCuratedEnvironmentImagesOutput = {}));
export var ProjectSortByType;
(function (ProjectSortByType) {
    ProjectSortByType["CREATED_TIME"] = "CREATED_TIME";
    ProjectSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ProjectSortByType["NAME"] = "NAME";
})(ProjectSortByType || (ProjectSortByType = {}));
export var ListProjectsInput;
(function (ListProjectsInput) {
    /**
     * @internal
     */
    ListProjectsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsInput || (ListProjectsInput = {}));
export var ListProjectsOutput;
(function (ListProjectsOutput) {
    /**
     * @internal
     */
    ListProjectsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsOutput || (ListProjectsOutput = {}));
export var ReportGroupSortByType;
(function (ReportGroupSortByType) {
    ReportGroupSortByType["CREATED_TIME"] = "CREATED_TIME";
    ReportGroupSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ReportGroupSortByType["NAME"] = "NAME";
})(ReportGroupSortByType || (ReportGroupSortByType = {}));
export var ListReportGroupsInput;
(function (ListReportGroupsInput) {
    /**
     * @internal
     */
    ListReportGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportGroupsInput || (ListReportGroupsInput = {}));
export var ListReportGroupsOutput;
(function (ListReportGroupsOutput) {
    /**
     * @internal
     */
    ListReportGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportGroupsOutput || (ListReportGroupsOutput = {}));
export var ReportFilter;
(function (ReportFilter) {
    /**
     * @internal
     */
    ReportFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportFilter || (ReportFilter = {}));
export var ListReportsInput;
(function (ListReportsInput) {
    /**
     * @internal
     */
    ListReportsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportsInput || (ListReportsInput = {}));
export var ListReportsOutput;
(function (ListReportsOutput) {
    /**
     * @internal
     */
    ListReportsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportsOutput || (ListReportsOutput = {}));
export var ListReportsForReportGroupInput;
(function (ListReportsForReportGroupInput) {
    /**
     * @internal
     */
    ListReportsForReportGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportsForReportGroupInput || (ListReportsForReportGroupInput = {}));
export var ListReportsForReportGroupOutput;
(function (ListReportsForReportGroupOutput) {
    /**
     * @internal
     */
    ListReportsForReportGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReportsForReportGroupOutput || (ListReportsForReportGroupOutput = {}));
export var SharedResourceSortByType;
(function (SharedResourceSortByType) {
    SharedResourceSortByType["ARN"] = "ARN";
    SharedResourceSortByType["MODIFIED_TIME"] = "MODIFIED_TIME";
})(SharedResourceSortByType || (SharedResourceSortByType = {}));
export var ListSharedProjectsInput;
(function (ListSharedProjectsInput) {
    /**
     * @internal
     */
    ListSharedProjectsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSharedProjectsInput || (ListSharedProjectsInput = {}));
export var ListSharedProjectsOutput;
(function (ListSharedProjectsOutput) {
    /**
     * @internal
     */
    ListSharedProjectsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSharedProjectsOutput || (ListSharedProjectsOutput = {}));
export var ListSharedReportGroupsInput;
(function (ListSharedReportGroupsInput) {
    /**
     * @internal
     */
    ListSharedReportGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSharedReportGroupsInput || (ListSharedReportGroupsInput = {}));
export var ListSharedReportGroupsOutput;
(function (ListSharedReportGroupsOutput) {
    /**
     * @internal
     */
    ListSharedReportGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSharedReportGroupsOutput || (ListSharedReportGroupsOutput = {}));
export var ListSourceCredentialsInput;
(function (ListSourceCredentialsInput) {
    /**
     * @internal
     */
    ListSourceCredentialsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSourceCredentialsInput || (ListSourceCredentialsInput = {}));
export var SourceCredentialsInfo;
(function (SourceCredentialsInfo) {
    /**
     * @internal
     */
    SourceCredentialsInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceCredentialsInfo || (SourceCredentialsInfo = {}));
export var ListSourceCredentialsOutput;
(function (ListSourceCredentialsOutput) {
    /**
     * @internal
     */
    ListSourceCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSourceCredentialsOutput || (ListSourceCredentialsOutput = {}));
export var PutResourcePolicyInput;
(function (PutResourcePolicyInput) {
    /**
     * @internal
     */
    PutResourcePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyInput || (PutResourcePolicyInput = {}));
export var PutResourcePolicyOutput;
(function (PutResourcePolicyOutput) {
    /**
     * @internal
     */
    PutResourcePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyOutput || (PutResourcePolicyOutput = {}));
export var RetryBuildInput;
(function (RetryBuildInput) {
    /**
     * @internal
     */
    RetryBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryBuildInput || (RetryBuildInput = {}));
export var RetryBuildOutput;
(function (RetryBuildOutput) {
    /**
     * @internal
     */
    RetryBuildOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryBuildOutput || (RetryBuildOutput = {}));
export var RetryBuildBatchType;
(function (RetryBuildBatchType) {
    RetryBuildBatchType["RETRY_ALL_BUILDS"] = "RETRY_ALL_BUILDS";
    RetryBuildBatchType["RETRY_FAILED_BUILDS"] = "RETRY_FAILED_BUILDS";
})(RetryBuildBatchType || (RetryBuildBatchType = {}));
export var RetryBuildBatchInput;
(function (RetryBuildBatchInput) {
    /**
     * @internal
     */
    RetryBuildBatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryBuildBatchInput || (RetryBuildBatchInput = {}));
export var RetryBuildBatchOutput;
(function (RetryBuildBatchOutput) {
    /**
     * @internal
     */
    RetryBuildBatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryBuildBatchOutput || (RetryBuildBatchOutput = {}));
export var StartBuildInput;
(function (StartBuildInput) {
    /**
     * @internal
     */
    StartBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartBuildInput || (StartBuildInput = {}));
export var StartBuildOutput;
(function (StartBuildOutput) {
    /**
     * @internal
     */
    StartBuildOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartBuildOutput || (StartBuildOutput = {}));
export var StartBuildBatchInput;
(function (StartBuildBatchInput) {
    /**
     * @internal
     */
    StartBuildBatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartBuildBatchInput || (StartBuildBatchInput = {}));
export var StartBuildBatchOutput;
(function (StartBuildBatchOutput) {
    /**
     * @internal
     */
    StartBuildBatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartBuildBatchOutput || (StartBuildBatchOutput = {}));
export var StopBuildInput;
(function (StopBuildInput) {
    /**
     * @internal
     */
    StopBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopBuildInput || (StopBuildInput = {}));
export var StopBuildOutput;
(function (StopBuildOutput) {
    /**
     * @internal
     */
    StopBuildOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopBuildOutput || (StopBuildOutput = {}));
export var StopBuildBatchInput;
(function (StopBuildBatchInput) {
    /**
     * @internal
     */
    StopBuildBatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopBuildBatchInput || (StopBuildBatchInput = {}));
export var StopBuildBatchOutput;
(function (StopBuildBatchOutput) {
    /**
     * @internal
     */
    StopBuildBatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopBuildBatchOutput || (StopBuildBatchOutput = {}));
export var UpdateProjectInput;
(function (UpdateProjectInput) {
    /**
     * @internal
     */
    UpdateProjectInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectInput || (UpdateProjectInput = {}));
export var UpdateProjectOutput;
(function (UpdateProjectOutput) {
    /**
     * @internal
     */
    UpdateProjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectOutput || (UpdateProjectOutput = {}));
export var UpdateReportGroupInput;
(function (UpdateReportGroupInput) {
    /**
     * @internal
     */
    UpdateReportGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReportGroupInput || (UpdateReportGroupInput = {}));
export var UpdateReportGroupOutput;
(function (UpdateReportGroupOutput) {
    /**
     * @internal
     */
    UpdateReportGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReportGroupOutput || (UpdateReportGroupOutput = {}));
export var UpdateWebhookInput;
(function (UpdateWebhookInput) {
    /**
     * @internal
     */
    UpdateWebhookInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebhookInput || (UpdateWebhookInput = {}));
export var UpdateWebhookOutput;
(function (UpdateWebhookOutput) {
    /**
     * @internal
     */
    UpdateWebhookOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebhookOutput || (UpdateWebhookOutput = {}));
//# sourceMappingURL=models_0.js.map