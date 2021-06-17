"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSession = exports.BatchGetBuildsInput = exports.BatchGetBuildBatchesOutput = exports.BuildBatch = exports.VpcConfig = exports.ProjectSourceVersion = exports.ProjectSource = exports.SourceType = exports.GitSubmodulesConfig = exports.BuildStatusConfig = exports.SourceAuth = exports.SourceAuthType = exports.BuildBatchPhase = exports.BuildBatchPhaseType = exports.PhaseContext = exports.LogsConfig = exports.S3LogsConfig = exports.CloudWatchLogsConfig = exports.LogsConfigStatusType = exports.ProjectFileSystemLocation = exports.FileSystemType = exports.ProjectEnvironment = exports.EnvironmentType = exports.RegistryCredential = exports.CredentialProviderType = exports.ImagePullCredentialsType = exports.EnvironmentVariable = exports.EnvironmentVariableType = exports.ComputeType = exports.ProjectCache = exports.CacheType = exports.CacheMode = exports.BuildGroup = exports.BuildSummary = exports.ResolvedArtifact = exports.StatusType = exports.ProjectBuildBatchConfig = exports.BatchRestrictions = exports.BuildArtifacts = exports.BucketOwnerAccess = exports.BatchGetBuildBatchesInput = exports.InvalidInputException = exports.BatchDeleteBuildsOutput = exports.BuildNotDeleted = exports.BatchDeleteBuildsInput = exports.AuthType = exports.ArtifactsType = exports.ArtifactPackaging = exports.ArtifactNamespace = exports.AccountLimitExceededException = void 0;
exports.DeleteReportGroupOutput = exports.DeleteReportGroupInput = exports.DeleteReportOutput = exports.DeleteReportInput = exports.DeleteProjectOutput = exports.DeleteProjectInput = exports.DeleteBuildBatchOutput = exports.DeleteBuildBatchInput = exports.ResourceNotFoundException = exports.OAuthProviderException = exports.CreateWebhookOutput = exports.CreateWebhookInput = exports.CreateReportGroupOutput = exports.CreateReportGroupInput = exports.ResourceAlreadyExistsException = exports.CreateProjectOutput = exports.CreateProjectInput = exports.BuildBatchFilter = exports.BatchGetReportsOutput = exports.Report = exports.TestReportSummary = exports.ReportStatusType = exports.CodeCoverageReportSummary = exports.BatchGetReportsInput = exports.BatchGetReportGroupsOutput = exports.ReportGroup = exports.ReportType = exports.ReportGroupStatusType = exports.ReportExportConfig = exports.S3ReportExportConfig = exports.ReportPackagingType = exports.ReportExportConfigType = exports.BatchGetReportGroupsInput = exports.BatchGetProjectsOutput = exports.Project = exports.Webhook = exports.WebhookFilter = exports.WebhookFilterType = exports.WebhookBuildType = exports.Tag = exports.ProjectBadge = exports.ProjectArtifacts = exports.BatchGetProjectsInput = exports.BatchGetBuildsOutput = exports.Build = exports.BuildPhase = exports.BuildPhaseType = exports.NetworkInterface = exports.LogsLocation = exports.ExportedEnvironmentVariable = void 0;
exports.ListReportsInput = exports.ReportFilter = exports.ListReportGroupsOutput = exports.ListReportGroupsInput = exports.ReportGroupSortByType = exports.ListProjectsOutput = exports.ListProjectsInput = exports.ProjectSortByType = exports.ListCuratedEnvironmentImagesOutput = exports.EnvironmentPlatform = exports.PlatformType = exports.EnvironmentLanguage = exports.LanguageType = exports.EnvironmentImage = exports.ListCuratedEnvironmentImagesInput = exports.ListBuildsForProjectOutput = exports.ListBuildsForProjectInput = exports.ListBuildsOutput = exports.ListBuildsInput = exports.ListBuildBatchesForProjectOutput = exports.ListBuildBatchesForProjectInput = exports.ListBuildBatchesOutput = exports.ListBuildBatchesInput = exports.InvalidateProjectCacheOutput = exports.InvalidateProjectCacheInput = exports.ImportSourceCredentialsOutput = exports.ImportSourceCredentialsInput = exports.ServerType = exports.GetResourcePolicyOutput = exports.GetResourcePolicyInput = exports.GetReportGroupTrendOutput = exports.ReportGroupTrendStats = exports.ReportWithRawData = exports.GetReportGroupTrendInput = exports.ReportGroupTrendFieldType = exports.DescribeTestCasesOutput = exports.TestCase = exports.DescribeTestCasesInput = exports.TestCaseFilter = exports.DescribeCodeCoveragesOutput = exports.CodeCoverage = exports.DescribeCodeCoveragesInput = exports.SortOrderType = exports.ReportCodeCoverageSortByType = exports.DeleteWebhookOutput = exports.DeleteWebhookInput = exports.DeleteSourceCredentialsOutput = exports.DeleteSourceCredentialsInput = exports.DeleteResourcePolicyOutput = exports.DeleteResourcePolicyInput = void 0;
exports.UpdateWebhookOutput = exports.UpdateWebhookInput = exports.UpdateReportGroupOutput = exports.UpdateReportGroupInput = exports.UpdateProjectOutput = exports.UpdateProjectInput = exports.StopBuildBatchOutput = exports.StopBuildBatchInput = exports.StopBuildOutput = exports.StopBuildInput = exports.StartBuildBatchOutput = exports.StartBuildBatchInput = exports.StartBuildOutput = exports.StartBuildInput = exports.RetryBuildBatchOutput = exports.RetryBuildBatchInput = exports.RetryBuildBatchType = exports.RetryBuildOutput = exports.RetryBuildInput = exports.PutResourcePolicyOutput = exports.PutResourcePolicyInput = exports.ListSourceCredentialsOutput = exports.SourceCredentialsInfo = exports.ListSourceCredentialsInput = exports.ListSharedReportGroupsOutput = exports.ListSharedReportGroupsInput = exports.ListSharedProjectsOutput = exports.ListSharedProjectsInput = exports.SharedResourceSortByType = exports.ListReportsForReportGroupOutput = exports.ListReportsForReportGroupInput = exports.ListReportsOutput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountLimitExceededException;
(function (AccountLimitExceededException) {
    /**
     * @internal
     */
    AccountLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLimitExceededException = exports.AccountLimitExceededException || (exports.AccountLimitExceededException = {}));
var ArtifactNamespace;
(function (ArtifactNamespace) {
    ArtifactNamespace["BUILD_ID"] = "BUILD_ID";
    ArtifactNamespace["NONE"] = "NONE";
})(ArtifactNamespace = exports.ArtifactNamespace || (exports.ArtifactNamespace = {}));
var ArtifactPackaging;
(function (ArtifactPackaging) {
    ArtifactPackaging["NONE"] = "NONE";
    ArtifactPackaging["ZIP"] = "ZIP";
})(ArtifactPackaging = exports.ArtifactPackaging || (exports.ArtifactPackaging = {}));
var ArtifactsType;
(function (ArtifactsType) {
    ArtifactsType["CODEPIPELINE"] = "CODEPIPELINE";
    ArtifactsType["NO_ARTIFACTS"] = "NO_ARTIFACTS";
    ArtifactsType["S3"] = "S3";
})(ArtifactsType = exports.ArtifactsType || (exports.ArtifactsType = {}));
var AuthType;
(function (AuthType) {
    AuthType["BASIC_AUTH"] = "BASIC_AUTH";
    AuthType["OAUTH"] = "OAUTH";
    AuthType["PERSONAL_ACCESS_TOKEN"] = "PERSONAL_ACCESS_TOKEN";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
var BatchDeleteBuildsInput;
(function (BatchDeleteBuildsInput) {
    /**
     * @internal
     */
    BatchDeleteBuildsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteBuildsInput = exports.BatchDeleteBuildsInput || (exports.BatchDeleteBuildsInput = {}));
var BuildNotDeleted;
(function (BuildNotDeleted) {
    /**
     * @internal
     */
    BuildNotDeleted.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildNotDeleted = exports.BuildNotDeleted || (exports.BuildNotDeleted = {}));
var BatchDeleteBuildsOutput;
(function (BatchDeleteBuildsOutput) {
    /**
     * @internal
     */
    BatchDeleteBuildsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteBuildsOutput = exports.BatchDeleteBuildsOutput || (exports.BatchDeleteBuildsOutput = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var BatchGetBuildBatchesInput;
(function (BatchGetBuildBatchesInput) {
    /**
     * @internal
     */
    BatchGetBuildBatchesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetBuildBatchesInput = exports.BatchGetBuildBatchesInput || (exports.BatchGetBuildBatchesInput = {}));
var BucketOwnerAccess;
(function (BucketOwnerAccess) {
    BucketOwnerAccess["FULL"] = "FULL";
    BucketOwnerAccess["NONE"] = "NONE";
    BucketOwnerAccess["READ_ONLY"] = "READ_ONLY";
})(BucketOwnerAccess = exports.BucketOwnerAccess || (exports.BucketOwnerAccess = {}));
var BuildArtifacts;
(function (BuildArtifacts) {
    /**
     * @internal
     */
    BuildArtifacts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildArtifacts = exports.BuildArtifacts || (exports.BuildArtifacts = {}));
var BatchRestrictions;
(function (BatchRestrictions) {
    /**
     * @internal
     */
    BatchRestrictions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRestrictions = exports.BatchRestrictions || (exports.BatchRestrictions = {}));
var ProjectBuildBatchConfig;
(function (ProjectBuildBatchConfig) {
    /**
     * @internal
     */
    ProjectBuildBatchConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectBuildBatchConfig = exports.ProjectBuildBatchConfig || (exports.ProjectBuildBatchConfig = {}));
var StatusType;
(function (StatusType) {
    StatusType["FAILED"] = "FAILED";
    StatusType["FAULT"] = "FAULT";
    StatusType["IN_PROGRESS"] = "IN_PROGRESS";
    StatusType["STOPPED"] = "STOPPED";
    StatusType["SUCCEEDED"] = "SUCCEEDED";
    StatusType["TIMED_OUT"] = "TIMED_OUT";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var ResolvedArtifact;
(function (ResolvedArtifact) {
    /**
     * @internal
     */
    ResolvedArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolvedArtifact = exports.ResolvedArtifact || (exports.ResolvedArtifact = {}));
var BuildSummary;
(function (BuildSummary) {
    /**
     * @internal
     */
    BuildSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildSummary = exports.BuildSummary || (exports.BuildSummary = {}));
var BuildGroup;
(function (BuildGroup) {
    /**
     * @internal
     */
    BuildGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildGroup = exports.BuildGroup || (exports.BuildGroup = {}));
var CacheMode;
(function (CacheMode) {
    CacheMode["LOCAL_CUSTOM_CACHE"] = "LOCAL_CUSTOM_CACHE";
    CacheMode["LOCAL_DOCKER_LAYER_CACHE"] = "LOCAL_DOCKER_LAYER_CACHE";
    CacheMode["LOCAL_SOURCE_CACHE"] = "LOCAL_SOURCE_CACHE";
})(CacheMode = exports.CacheMode || (exports.CacheMode = {}));
var CacheType;
(function (CacheType) {
    CacheType["LOCAL"] = "LOCAL";
    CacheType["NO_CACHE"] = "NO_CACHE";
    CacheType["S3"] = "S3";
})(CacheType = exports.CacheType || (exports.CacheType = {}));
var ProjectCache;
(function (ProjectCache) {
    /**
     * @internal
     */
    ProjectCache.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectCache = exports.ProjectCache || (exports.ProjectCache = {}));
var ComputeType;
(function (ComputeType) {
    ComputeType["BUILD_GENERAL1_2XLARGE"] = "BUILD_GENERAL1_2XLARGE";
    ComputeType["BUILD_GENERAL1_LARGE"] = "BUILD_GENERAL1_LARGE";
    ComputeType["BUILD_GENERAL1_MEDIUM"] = "BUILD_GENERAL1_MEDIUM";
    ComputeType["BUILD_GENERAL1_SMALL"] = "BUILD_GENERAL1_SMALL";
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var EnvironmentVariableType;
(function (EnvironmentVariableType) {
    EnvironmentVariableType["PARAMETER_STORE"] = "PARAMETER_STORE";
    EnvironmentVariableType["PLAINTEXT"] = "PLAINTEXT";
    EnvironmentVariableType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(EnvironmentVariableType = exports.EnvironmentVariableType || (exports.EnvironmentVariableType = {}));
var EnvironmentVariable;
(function (EnvironmentVariable) {
    /**
     * @internal
     */
    EnvironmentVariable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentVariable = exports.EnvironmentVariable || (exports.EnvironmentVariable = {}));
var ImagePullCredentialsType;
(function (ImagePullCredentialsType) {
    ImagePullCredentialsType["CODEBUILD"] = "CODEBUILD";
    ImagePullCredentialsType["SERVICE_ROLE"] = "SERVICE_ROLE";
})(ImagePullCredentialsType = exports.ImagePullCredentialsType || (exports.ImagePullCredentialsType = {}));
var CredentialProviderType;
(function (CredentialProviderType) {
    CredentialProviderType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(CredentialProviderType = exports.CredentialProviderType || (exports.CredentialProviderType = {}));
var RegistryCredential;
(function (RegistryCredential) {
    /**
     * @internal
     */
    RegistryCredential.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryCredential = exports.RegistryCredential || (exports.RegistryCredential = {}));
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["ARM_CONTAINER"] = "ARM_CONTAINER";
    EnvironmentType["LINUX_CONTAINER"] = "LINUX_CONTAINER";
    EnvironmentType["LINUX_GPU_CONTAINER"] = "LINUX_GPU_CONTAINER";
    EnvironmentType["WINDOWS_CONTAINER"] = "WINDOWS_CONTAINER";
    EnvironmentType["WINDOWS_SERVER_2019_CONTAINER"] = "WINDOWS_SERVER_2019_CONTAINER";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
var ProjectEnvironment;
(function (ProjectEnvironment) {
    /**
     * @internal
     */
    ProjectEnvironment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectEnvironment = exports.ProjectEnvironment || (exports.ProjectEnvironment = {}));
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["EFS"] = "EFS";
})(FileSystemType = exports.FileSystemType || (exports.FileSystemType = {}));
var ProjectFileSystemLocation;
(function (ProjectFileSystemLocation) {
    /**
     * @internal
     */
    ProjectFileSystemLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectFileSystemLocation = exports.ProjectFileSystemLocation || (exports.ProjectFileSystemLocation = {}));
var LogsConfigStatusType;
(function (LogsConfigStatusType) {
    LogsConfigStatusType["DISABLED"] = "DISABLED";
    LogsConfigStatusType["ENABLED"] = "ENABLED";
})(LogsConfigStatusType = exports.LogsConfigStatusType || (exports.LogsConfigStatusType = {}));
var CloudWatchLogsConfig;
(function (CloudWatchLogsConfig) {
    /**
     * @internal
     */
    CloudWatchLogsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsConfig = exports.CloudWatchLogsConfig || (exports.CloudWatchLogsConfig = {}));
var S3LogsConfig;
(function (S3LogsConfig) {
    /**
     * @internal
     */
    S3LogsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3LogsConfig = exports.S3LogsConfig || (exports.S3LogsConfig = {}));
var LogsConfig;
(function (LogsConfig) {
    /**
     * @internal
     */
    LogsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogsConfig = exports.LogsConfig || (exports.LogsConfig = {}));
var PhaseContext;
(function (PhaseContext) {
    /**
     * @internal
     */
    PhaseContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhaseContext = exports.PhaseContext || (exports.PhaseContext = {}));
var BuildBatchPhaseType;
(function (BuildBatchPhaseType) {
    BuildBatchPhaseType["COMBINE_ARTIFACTS"] = "COMBINE_ARTIFACTS";
    BuildBatchPhaseType["DOWNLOAD_BATCHSPEC"] = "DOWNLOAD_BATCHSPEC";
    BuildBatchPhaseType["FAILED"] = "FAILED";
    BuildBatchPhaseType["IN_PROGRESS"] = "IN_PROGRESS";
    BuildBatchPhaseType["STOPPED"] = "STOPPED";
    BuildBatchPhaseType["SUBMITTED"] = "SUBMITTED";
    BuildBatchPhaseType["SUCCEEDED"] = "SUCCEEDED";
})(BuildBatchPhaseType = exports.BuildBatchPhaseType || (exports.BuildBatchPhaseType = {}));
var BuildBatchPhase;
(function (BuildBatchPhase) {
    /**
     * @internal
     */
    BuildBatchPhase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildBatchPhase = exports.BuildBatchPhase || (exports.BuildBatchPhase = {}));
var SourceAuthType;
(function (SourceAuthType) {
    SourceAuthType["OAUTH"] = "OAUTH";
})(SourceAuthType = exports.SourceAuthType || (exports.SourceAuthType = {}));
var SourceAuth;
(function (SourceAuth) {
    /**
     * @internal
     */
    SourceAuth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceAuth = exports.SourceAuth || (exports.SourceAuth = {}));
var BuildStatusConfig;
(function (BuildStatusConfig) {
    /**
     * @internal
     */
    BuildStatusConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildStatusConfig = exports.BuildStatusConfig || (exports.BuildStatusConfig = {}));
var GitSubmodulesConfig;
(function (GitSubmodulesConfig) {
    /**
     * @internal
     */
    GitSubmodulesConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitSubmodulesConfig = exports.GitSubmodulesConfig || (exports.GitSubmodulesConfig = {}));
var SourceType;
(function (SourceType) {
    SourceType["BITBUCKET"] = "BITBUCKET";
    SourceType["CODECOMMIT"] = "CODECOMMIT";
    SourceType["CODEPIPELINE"] = "CODEPIPELINE";
    SourceType["GITHUB"] = "GITHUB";
    SourceType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
    SourceType["NO_SOURCE"] = "NO_SOURCE";
    SourceType["S3"] = "S3";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var ProjectSource;
(function (ProjectSource) {
    /**
     * @internal
     */
    ProjectSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSource = exports.ProjectSource || (exports.ProjectSource = {}));
var ProjectSourceVersion;
(function (ProjectSourceVersion) {
    /**
     * @internal
     */
    ProjectSourceVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSourceVersion = exports.ProjectSourceVersion || (exports.ProjectSourceVersion = {}));
var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var BuildBatch;
(function (BuildBatch) {
    /**
     * @internal
     */
    BuildBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildBatch = exports.BuildBatch || (exports.BuildBatch = {}));
var BatchGetBuildBatchesOutput;
(function (BatchGetBuildBatchesOutput) {
    /**
     * @internal
     */
    BatchGetBuildBatchesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetBuildBatchesOutput = exports.BatchGetBuildBatchesOutput || (exports.BatchGetBuildBatchesOutput = {}));
var BatchGetBuildsInput;
(function (BatchGetBuildsInput) {
    /**
     * @internal
     */
    BatchGetBuildsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetBuildsInput = exports.BatchGetBuildsInput || (exports.BatchGetBuildsInput = {}));
var DebugSession;
(function (DebugSession) {
    /**
     * @internal
     */
    DebugSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DebugSession = exports.DebugSession || (exports.DebugSession = {}));
var ExportedEnvironmentVariable;
(function (ExportedEnvironmentVariable) {
    /**
     * @internal
     */
    ExportedEnvironmentVariable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportedEnvironmentVariable = exports.ExportedEnvironmentVariable || (exports.ExportedEnvironmentVariable = {}));
var LogsLocation;
(function (LogsLocation) {
    /**
     * @internal
     */
    LogsLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogsLocation = exports.LogsLocation || (exports.LogsLocation = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var BuildPhaseType;
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
})(BuildPhaseType = exports.BuildPhaseType || (exports.BuildPhaseType = {}));
var BuildPhase;
(function (BuildPhase) {
    /**
     * @internal
     */
    BuildPhase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildPhase = exports.BuildPhase || (exports.BuildPhase = {}));
var Build;
(function (Build) {
    /**
     * @internal
     */
    Build.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Build = exports.Build || (exports.Build = {}));
var BatchGetBuildsOutput;
(function (BatchGetBuildsOutput) {
    /**
     * @internal
     */
    BatchGetBuildsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetBuildsOutput = exports.BatchGetBuildsOutput || (exports.BatchGetBuildsOutput = {}));
var BatchGetProjectsInput;
(function (BatchGetProjectsInput) {
    /**
     * @internal
     */
    BatchGetProjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetProjectsInput = exports.BatchGetProjectsInput || (exports.BatchGetProjectsInput = {}));
var ProjectArtifacts;
(function (ProjectArtifacts) {
    /**
     * @internal
     */
    ProjectArtifacts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectArtifacts = exports.ProjectArtifacts || (exports.ProjectArtifacts = {}));
var ProjectBadge;
(function (ProjectBadge) {
    /**
     * @internal
     */
    ProjectBadge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectBadge = exports.ProjectBadge || (exports.ProjectBadge = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var WebhookBuildType;
(function (WebhookBuildType) {
    WebhookBuildType["BUILD"] = "BUILD";
    WebhookBuildType["BUILD_BATCH"] = "BUILD_BATCH";
})(WebhookBuildType = exports.WebhookBuildType || (exports.WebhookBuildType = {}));
var WebhookFilterType;
(function (WebhookFilterType) {
    WebhookFilterType["ACTOR_ACCOUNT_ID"] = "ACTOR_ACCOUNT_ID";
    WebhookFilterType["BASE_REF"] = "BASE_REF";
    WebhookFilterType["COMMIT_MESSAGE"] = "COMMIT_MESSAGE";
    WebhookFilterType["EVENT"] = "EVENT";
    WebhookFilterType["FILE_PATH"] = "FILE_PATH";
    WebhookFilterType["HEAD_REF"] = "HEAD_REF";
})(WebhookFilterType = exports.WebhookFilterType || (exports.WebhookFilterType = {}));
var WebhookFilter;
(function (WebhookFilter) {
    /**
     * @internal
     */
    WebhookFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebhookFilter = exports.WebhookFilter || (exports.WebhookFilter = {}));
var Webhook;
(function (Webhook) {
    /**
     * @internal
     */
    Webhook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Webhook = exports.Webhook || (exports.Webhook = {}));
var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Project = exports.Project || (exports.Project = {}));
var BatchGetProjectsOutput;
(function (BatchGetProjectsOutput) {
    /**
     * @internal
     */
    BatchGetProjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetProjectsOutput = exports.BatchGetProjectsOutput || (exports.BatchGetProjectsOutput = {}));
var BatchGetReportGroupsInput;
(function (BatchGetReportGroupsInput) {
    /**
     * @internal
     */
    BatchGetReportGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetReportGroupsInput = exports.BatchGetReportGroupsInput || (exports.BatchGetReportGroupsInput = {}));
var ReportExportConfigType;
(function (ReportExportConfigType) {
    ReportExportConfigType["NO_EXPORT"] = "NO_EXPORT";
    ReportExportConfigType["S3"] = "S3";
})(ReportExportConfigType = exports.ReportExportConfigType || (exports.ReportExportConfigType = {}));
var ReportPackagingType;
(function (ReportPackagingType) {
    ReportPackagingType["NONE"] = "NONE";
    ReportPackagingType["ZIP"] = "ZIP";
})(ReportPackagingType = exports.ReportPackagingType || (exports.ReportPackagingType = {}));
var S3ReportExportConfig;
(function (S3ReportExportConfig) {
    /**
     * @internal
     */
    S3ReportExportConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ReportExportConfig = exports.S3ReportExportConfig || (exports.S3ReportExportConfig = {}));
var ReportExportConfig;
(function (ReportExportConfig) {
    /**
     * @internal
     */
    ReportExportConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportExportConfig = exports.ReportExportConfig || (exports.ReportExportConfig = {}));
var ReportGroupStatusType;
(function (ReportGroupStatusType) {
    ReportGroupStatusType["ACTIVE"] = "ACTIVE";
    ReportGroupStatusType["DELETING"] = "DELETING";
})(ReportGroupStatusType = exports.ReportGroupStatusType || (exports.ReportGroupStatusType = {}));
var ReportType;
(function (ReportType) {
    ReportType["CODE_COVERAGE"] = "CODE_COVERAGE";
    ReportType["TEST"] = "TEST";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var ReportGroup;
(function (ReportGroup) {
    /**
     * @internal
     */
    ReportGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportGroup = exports.ReportGroup || (exports.ReportGroup = {}));
var BatchGetReportGroupsOutput;
(function (BatchGetReportGroupsOutput) {
    /**
     * @internal
     */
    BatchGetReportGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetReportGroupsOutput = exports.BatchGetReportGroupsOutput || (exports.BatchGetReportGroupsOutput = {}));
var BatchGetReportsInput;
(function (BatchGetReportsInput) {
    /**
     * @internal
     */
    BatchGetReportsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetReportsInput = exports.BatchGetReportsInput || (exports.BatchGetReportsInput = {}));
var CodeCoverageReportSummary;
(function (CodeCoverageReportSummary) {
    /**
     * @internal
     */
    CodeCoverageReportSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeCoverageReportSummary = exports.CodeCoverageReportSummary || (exports.CodeCoverageReportSummary = {}));
var ReportStatusType;
(function (ReportStatusType) {
    ReportStatusType["DELETING"] = "DELETING";
    ReportStatusType["FAILED"] = "FAILED";
    ReportStatusType["GENERATING"] = "GENERATING";
    ReportStatusType["INCOMPLETE"] = "INCOMPLETE";
    ReportStatusType["SUCCEEDED"] = "SUCCEEDED";
})(ReportStatusType = exports.ReportStatusType || (exports.ReportStatusType = {}));
var TestReportSummary;
(function (TestReportSummary) {
    /**
     * @internal
     */
    TestReportSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestReportSummary = exports.TestReportSummary || (exports.TestReportSummary = {}));
var Report;
(function (Report) {
    /**
     * @internal
     */
    Report.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Report = exports.Report || (exports.Report = {}));
var BatchGetReportsOutput;
(function (BatchGetReportsOutput) {
    /**
     * @internal
     */
    BatchGetReportsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetReportsOutput = exports.BatchGetReportsOutput || (exports.BatchGetReportsOutput = {}));
var BuildBatchFilter;
(function (BuildBatchFilter) {
    /**
     * @internal
     */
    BuildBatchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildBatchFilter = exports.BuildBatchFilter || (exports.BuildBatchFilter = {}));
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
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var CreateReportGroupInput;
(function (CreateReportGroupInput) {
    /**
     * @internal
     */
    CreateReportGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReportGroupInput = exports.CreateReportGroupInput || (exports.CreateReportGroupInput = {}));
var CreateReportGroupOutput;
(function (CreateReportGroupOutput) {
    /**
     * @internal
     */
    CreateReportGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReportGroupOutput = exports.CreateReportGroupOutput || (exports.CreateReportGroupOutput = {}));
var CreateWebhookInput;
(function (CreateWebhookInput) {
    /**
     * @internal
     */
    CreateWebhookInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebhookInput = exports.CreateWebhookInput || (exports.CreateWebhookInput = {}));
var CreateWebhookOutput;
(function (CreateWebhookOutput) {
    /**
     * @internal
     */
    CreateWebhookOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebhookOutput = exports.CreateWebhookOutput || (exports.CreateWebhookOutput = {}));
var OAuthProviderException;
(function (OAuthProviderException) {
    /**
     * @internal
     */
    OAuthProviderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OAuthProviderException = exports.OAuthProviderException || (exports.OAuthProviderException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteBuildBatchInput;
(function (DeleteBuildBatchInput) {
    /**
     * @internal
     */
    DeleteBuildBatchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBuildBatchInput = exports.DeleteBuildBatchInput || (exports.DeleteBuildBatchInput = {}));
var DeleteBuildBatchOutput;
(function (DeleteBuildBatchOutput) {
    /**
     * @internal
     */
    DeleteBuildBatchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBuildBatchOutput = exports.DeleteBuildBatchOutput || (exports.DeleteBuildBatchOutput = {}));
var DeleteProjectInput;
(function (DeleteProjectInput) {
    /**
     * @internal
     */
    DeleteProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectInput = exports.DeleteProjectInput || (exports.DeleteProjectInput = {}));
var DeleteProjectOutput;
(function (DeleteProjectOutput) {
    /**
     * @internal
     */
    DeleteProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectOutput = exports.DeleteProjectOutput || (exports.DeleteProjectOutput = {}));
var DeleteReportInput;
(function (DeleteReportInput) {
    /**
     * @internal
     */
    DeleteReportInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportInput = exports.DeleteReportInput || (exports.DeleteReportInput = {}));
var DeleteReportOutput;
(function (DeleteReportOutput) {
    /**
     * @internal
     */
    DeleteReportOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportOutput = exports.DeleteReportOutput || (exports.DeleteReportOutput = {}));
var DeleteReportGroupInput;
(function (DeleteReportGroupInput) {
    /**
     * @internal
     */
    DeleteReportGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportGroupInput = exports.DeleteReportGroupInput || (exports.DeleteReportGroupInput = {}));
var DeleteReportGroupOutput;
(function (DeleteReportGroupOutput) {
    /**
     * @internal
     */
    DeleteReportGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReportGroupOutput = exports.DeleteReportGroupOutput || (exports.DeleteReportGroupOutput = {}));
var DeleteResourcePolicyInput;
(function (DeleteResourcePolicyInput) {
    /**
     * @internal
     */
    DeleteResourcePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyInput = exports.DeleteResourcePolicyInput || (exports.DeleteResourcePolicyInput = {}));
var DeleteResourcePolicyOutput;
(function (DeleteResourcePolicyOutput) {
    /**
     * @internal
     */
    DeleteResourcePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyOutput = exports.DeleteResourcePolicyOutput || (exports.DeleteResourcePolicyOutput = {}));
var DeleteSourceCredentialsInput;
(function (DeleteSourceCredentialsInput) {
    /**
     * @internal
     */
    DeleteSourceCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceCredentialsInput = exports.DeleteSourceCredentialsInput || (exports.DeleteSourceCredentialsInput = {}));
var DeleteSourceCredentialsOutput;
(function (DeleteSourceCredentialsOutput) {
    /**
     * @internal
     */
    DeleteSourceCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceCredentialsOutput = exports.DeleteSourceCredentialsOutput || (exports.DeleteSourceCredentialsOutput = {}));
var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    /**
     * @internal
     */
    DeleteWebhookInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebhookInput = exports.DeleteWebhookInput || (exports.DeleteWebhookInput = {}));
var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    /**
     * @internal
     */
    DeleteWebhookOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebhookOutput = exports.DeleteWebhookOutput || (exports.DeleteWebhookOutput = {}));
var ReportCodeCoverageSortByType;
(function (ReportCodeCoverageSortByType) {
    ReportCodeCoverageSortByType["FILE_PATH"] = "FILE_PATH";
    ReportCodeCoverageSortByType["LINE_COVERAGE_PERCENTAGE"] = "LINE_COVERAGE_PERCENTAGE";
})(ReportCodeCoverageSortByType = exports.ReportCodeCoverageSortByType || (exports.ReportCodeCoverageSortByType = {}));
var SortOrderType;
(function (SortOrderType) {
    SortOrderType["ASCENDING"] = "ASCENDING";
    SortOrderType["DESCENDING"] = "DESCENDING";
})(SortOrderType = exports.SortOrderType || (exports.SortOrderType = {}));
var DescribeCodeCoveragesInput;
(function (DescribeCodeCoveragesInput) {
    /**
     * @internal
     */
    DescribeCodeCoveragesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeCoveragesInput = exports.DescribeCodeCoveragesInput || (exports.DescribeCodeCoveragesInput = {}));
var CodeCoverage;
(function (CodeCoverage) {
    /**
     * @internal
     */
    CodeCoverage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeCoverage = exports.CodeCoverage || (exports.CodeCoverage = {}));
var DescribeCodeCoveragesOutput;
(function (DescribeCodeCoveragesOutput) {
    /**
     * @internal
     */
    DescribeCodeCoveragesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeCoveragesOutput = exports.DescribeCodeCoveragesOutput || (exports.DescribeCodeCoveragesOutput = {}));
var TestCaseFilter;
(function (TestCaseFilter) {
    /**
     * @internal
     */
    TestCaseFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestCaseFilter = exports.TestCaseFilter || (exports.TestCaseFilter = {}));
var DescribeTestCasesInput;
(function (DescribeTestCasesInput) {
    /**
     * @internal
     */
    DescribeTestCasesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTestCasesInput = exports.DescribeTestCasesInput || (exports.DescribeTestCasesInput = {}));
var TestCase;
(function (TestCase) {
    /**
     * @internal
     */
    TestCase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestCase = exports.TestCase || (exports.TestCase = {}));
var DescribeTestCasesOutput;
(function (DescribeTestCasesOutput) {
    /**
     * @internal
     */
    DescribeTestCasesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTestCasesOutput = exports.DescribeTestCasesOutput || (exports.DescribeTestCasesOutput = {}));
var ReportGroupTrendFieldType;
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
})(ReportGroupTrendFieldType = exports.ReportGroupTrendFieldType || (exports.ReportGroupTrendFieldType = {}));
var GetReportGroupTrendInput;
(function (GetReportGroupTrendInput) {
    /**
     * @internal
     */
    GetReportGroupTrendInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReportGroupTrendInput = exports.GetReportGroupTrendInput || (exports.GetReportGroupTrendInput = {}));
var ReportWithRawData;
(function (ReportWithRawData) {
    /**
     * @internal
     */
    ReportWithRawData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportWithRawData = exports.ReportWithRawData || (exports.ReportWithRawData = {}));
var ReportGroupTrendStats;
(function (ReportGroupTrendStats) {
    /**
     * @internal
     */
    ReportGroupTrendStats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportGroupTrendStats = exports.ReportGroupTrendStats || (exports.ReportGroupTrendStats = {}));
var GetReportGroupTrendOutput;
(function (GetReportGroupTrendOutput) {
    /**
     * @internal
     */
    GetReportGroupTrendOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReportGroupTrendOutput = exports.GetReportGroupTrendOutput || (exports.GetReportGroupTrendOutput = {}));
var GetResourcePolicyInput;
(function (GetResourcePolicyInput) {
    /**
     * @internal
     */
    GetResourcePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyInput = exports.GetResourcePolicyInput || (exports.GetResourcePolicyInput = {}));
var GetResourcePolicyOutput;
(function (GetResourcePolicyOutput) {
    /**
     * @internal
     */
    GetResourcePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyOutput = exports.GetResourcePolicyOutput || (exports.GetResourcePolicyOutput = {}));
var ServerType;
(function (ServerType) {
    ServerType["BITBUCKET"] = "BITBUCKET";
    ServerType["GITHUB"] = "GITHUB";
    ServerType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
})(ServerType = exports.ServerType || (exports.ServerType = {}));
var ImportSourceCredentialsInput;
(function (ImportSourceCredentialsInput) {
    /**
     * @internal
     */
    ImportSourceCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING }),
    });
})(ImportSourceCredentialsInput = exports.ImportSourceCredentialsInput || (exports.ImportSourceCredentialsInput = {}));
var ImportSourceCredentialsOutput;
(function (ImportSourceCredentialsOutput) {
    /**
     * @internal
     */
    ImportSourceCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSourceCredentialsOutput = exports.ImportSourceCredentialsOutput || (exports.ImportSourceCredentialsOutput = {}));
var InvalidateProjectCacheInput;
(function (InvalidateProjectCacheInput) {
    /**
     * @internal
     */
    InvalidateProjectCacheInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidateProjectCacheInput = exports.InvalidateProjectCacheInput || (exports.InvalidateProjectCacheInput = {}));
var InvalidateProjectCacheOutput;
(function (InvalidateProjectCacheOutput) {
    /**
     * @internal
     */
    InvalidateProjectCacheOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidateProjectCacheOutput = exports.InvalidateProjectCacheOutput || (exports.InvalidateProjectCacheOutput = {}));
var ListBuildBatchesInput;
(function (ListBuildBatchesInput) {
    /**
     * @internal
     */
    ListBuildBatchesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildBatchesInput = exports.ListBuildBatchesInput || (exports.ListBuildBatchesInput = {}));
var ListBuildBatchesOutput;
(function (ListBuildBatchesOutput) {
    /**
     * @internal
     */
    ListBuildBatchesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildBatchesOutput = exports.ListBuildBatchesOutput || (exports.ListBuildBatchesOutput = {}));
var ListBuildBatchesForProjectInput;
(function (ListBuildBatchesForProjectInput) {
    /**
     * @internal
     */
    ListBuildBatchesForProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildBatchesForProjectInput = exports.ListBuildBatchesForProjectInput || (exports.ListBuildBatchesForProjectInput = {}));
var ListBuildBatchesForProjectOutput;
(function (ListBuildBatchesForProjectOutput) {
    /**
     * @internal
     */
    ListBuildBatchesForProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildBatchesForProjectOutput = exports.ListBuildBatchesForProjectOutput || (exports.ListBuildBatchesForProjectOutput = {}));
var ListBuildsInput;
(function (ListBuildsInput) {
    /**
     * @internal
     */
    ListBuildsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsInput = exports.ListBuildsInput || (exports.ListBuildsInput = {}));
var ListBuildsOutput;
(function (ListBuildsOutput) {
    /**
     * @internal
     */
    ListBuildsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsOutput = exports.ListBuildsOutput || (exports.ListBuildsOutput = {}));
var ListBuildsForProjectInput;
(function (ListBuildsForProjectInput) {
    /**
     * @internal
     */
    ListBuildsForProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsForProjectInput = exports.ListBuildsForProjectInput || (exports.ListBuildsForProjectInput = {}));
var ListBuildsForProjectOutput;
(function (ListBuildsForProjectOutput) {
    /**
     * @internal
     */
    ListBuildsForProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsForProjectOutput = exports.ListBuildsForProjectOutput || (exports.ListBuildsForProjectOutput = {}));
var ListCuratedEnvironmentImagesInput;
(function (ListCuratedEnvironmentImagesInput) {
    /**
     * @internal
     */
    ListCuratedEnvironmentImagesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCuratedEnvironmentImagesInput = exports.ListCuratedEnvironmentImagesInput || (exports.ListCuratedEnvironmentImagesInput = {}));
var EnvironmentImage;
(function (EnvironmentImage) {
    /**
     * @internal
     */
    EnvironmentImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentImage = exports.EnvironmentImage || (exports.EnvironmentImage = {}));
var LanguageType;
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
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
var EnvironmentLanguage;
(function (EnvironmentLanguage) {
    /**
     * @internal
     */
    EnvironmentLanguage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentLanguage = exports.EnvironmentLanguage || (exports.EnvironmentLanguage = {}));
var PlatformType;
(function (PlatformType) {
    PlatformType["AMAZON_LINUX"] = "AMAZON_LINUX";
    PlatformType["DEBIAN"] = "DEBIAN";
    PlatformType["UBUNTU"] = "UBUNTU";
    PlatformType["WINDOWS_SERVER"] = "WINDOWS_SERVER";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
var EnvironmentPlatform;
(function (EnvironmentPlatform) {
    /**
     * @internal
     */
    EnvironmentPlatform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentPlatform = exports.EnvironmentPlatform || (exports.EnvironmentPlatform = {}));
var ListCuratedEnvironmentImagesOutput;
(function (ListCuratedEnvironmentImagesOutput) {
    /**
     * @internal
     */
    ListCuratedEnvironmentImagesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCuratedEnvironmentImagesOutput = exports.ListCuratedEnvironmentImagesOutput || (exports.ListCuratedEnvironmentImagesOutput = {}));
var ProjectSortByType;
(function (ProjectSortByType) {
    ProjectSortByType["CREATED_TIME"] = "CREATED_TIME";
    ProjectSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ProjectSortByType["NAME"] = "NAME";
})(ProjectSortByType = exports.ProjectSortByType || (exports.ProjectSortByType = {}));
var ListProjectsInput;
(function (ListProjectsInput) {
    /**
     * @internal
     */
    ListProjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsInput = exports.ListProjectsInput || (exports.ListProjectsInput = {}));
var ListProjectsOutput;
(function (ListProjectsOutput) {
    /**
     * @internal
     */
    ListProjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsOutput = exports.ListProjectsOutput || (exports.ListProjectsOutput = {}));
var ReportGroupSortByType;
(function (ReportGroupSortByType) {
    ReportGroupSortByType["CREATED_TIME"] = "CREATED_TIME";
    ReportGroupSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ReportGroupSortByType["NAME"] = "NAME";
})(ReportGroupSortByType = exports.ReportGroupSortByType || (exports.ReportGroupSortByType = {}));
var ListReportGroupsInput;
(function (ListReportGroupsInput) {
    /**
     * @internal
     */
    ListReportGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportGroupsInput = exports.ListReportGroupsInput || (exports.ListReportGroupsInput = {}));
var ListReportGroupsOutput;
(function (ListReportGroupsOutput) {
    /**
     * @internal
     */
    ListReportGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportGroupsOutput = exports.ListReportGroupsOutput || (exports.ListReportGroupsOutput = {}));
var ReportFilter;
(function (ReportFilter) {
    /**
     * @internal
     */
    ReportFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportFilter = exports.ReportFilter || (exports.ReportFilter = {}));
var ListReportsInput;
(function (ListReportsInput) {
    /**
     * @internal
     */
    ListReportsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportsInput = exports.ListReportsInput || (exports.ListReportsInput = {}));
var ListReportsOutput;
(function (ListReportsOutput) {
    /**
     * @internal
     */
    ListReportsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportsOutput = exports.ListReportsOutput || (exports.ListReportsOutput = {}));
var ListReportsForReportGroupInput;
(function (ListReportsForReportGroupInput) {
    /**
     * @internal
     */
    ListReportsForReportGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportsForReportGroupInput = exports.ListReportsForReportGroupInput || (exports.ListReportsForReportGroupInput = {}));
var ListReportsForReportGroupOutput;
(function (ListReportsForReportGroupOutput) {
    /**
     * @internal
     */
    ListReportsForReportGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReportsForReportGroupOutput = exports.ListReportsForReportGroupOutput || (exports.ListReportsForReportGroupOutput = {}));
var SharedResourceSortByType;
(function (SharedResourceSortByType) {
    SharedResourceSortByType["ARN"] = "ARN";
    SharedResourceSortByType["MODIFIED_TIME"] = "MODIFIED_TIME";
})(SharedResourceSortByType = exports.SharedResourceSortByType || (exports.SharedResourceSortByType = {}));
var ListSharedProjectsInput;
(function (ListSharedProjectsInput) {
    /**
     * @internal
     */
    ListSharedProjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSharedProjectsInput = exports.ListSharedProjectsInput || (exports.ListSharedProjectsInput = {}));
var ListSharedProjectsOutput;
(function (ListSharedProjectsOutput) {
    /**
     * @internal
     */
    ListSharedProjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSharedProjectsOutput = exports.ListSharedProjectsOutput || (exports.ListSharedProjectsOutput = {}));
var ListSharedReportGroupsInput;
(function (ListSharedReportGroupsInput) {
    /**
     * @internal
     */
    ListSharedReportGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSharedReportGroupsInput = exports.ListSharedReportGroupsInput || (exports.ListSharedReportGroupsInput = {}));
var ListSharedReportGroupsOutput;
(function (ListSharedReportGroupsOutput) {
    /**
     * @internal
     */
    ListSharedReportGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSharedReportGroupsOutput = exports.ListSharedReportGroupsOutput || (exports.ListSharedReportGroupsOutput = {}));
var ListSourceCredentialsInput;
(function (ListSourceCredentialsInput) {
    /**
     * @internal
     */
    ListSourceCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSourceCredentialsInput = exports.ListSourceCredentialsInput || (exports.ListSourceCredentialsInput = {}));
var SourceCredentialsInfo;
(function (SourceCredentialsInfo) {
    /**
     * @internal
     */
    SourceCredentialsInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceCredentialsInfo = exports.SourceCredentialsInfo || (exports.SourceCredentialsInfo = {}));
var ListSourceCredentialsOutput;
(function (ListSourceCredentialsOutput) {
    /**
     * @internal
     */
    ListSourceCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSourceCredentialsOutput = exports.ListSourceCredentialsOutput || (exports.ListSourceCredentialsOutput = {}));
var PutResourcePolicyInput;
(function (PutResourcePolicyInput) {
    /**
     * @internal
     */
    PutResourcePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyInput = exports.PutResourcePolicyInput || (exports.PutResourcePolicyInput = {}));
var PutResourcePolicyOutput;
(function (PutResourcePolicyOutput) {
    /**
     * @internal
     */
    PutResourcePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyOutput = exports.PutResourcePolicyOutput || (exports.PutResourcePolicyOutput = {}));
var RetryBuildInput;
(function (RetryBuildInput) {
    /**
     * @internal
     */
    RetryBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryBuildInput = exports.RetryBuildInput || (exports.RetryBuildInput = {}));
var RetryBuildOutput;
(function (RetryBuildOutput) {
    /**
     * @internal
     */
    RetryBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryBuildOutput = exports.RetryBuildOutput || (exports.RetryBuildOutput = {}));
var RetryBuildBatchType;
(function (RetryBuildBatchType) {
    RetryBuildBatchType["RETRY_ALL_BUILDS"] = "RETRY_ALL_BUILDS";
    RetryBuildBatchType["RETRY_FAILED_BUILDS"] = "RETRY_FAILED_BUILDS";
})(RetryBuildBatchType = exports.RetryBuildBatchType || (exports.RetryBuildBatchType = {}));
var RetryBuildBatchInput;
(function (RetryBuildBatchInput) {
    /**
     * @internal
     */
    RetryBuildBatchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryBuildBatchInput = exports.RetryBuildBatchInput || (exports.RetryBuildBatchInput = {}));
var RetryBuildBatchOutput;
(function (RetryBuildBatchOutput) {
    /**
     * @internal
     */
    RetryBuildBatchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryBuildBatchOutput = exports.RetryBuildBatchOutput || (exports.RetryBuildBatchOutput = {}));
var StartBuildInput;
(function (StartBuildInput) {
    /**
     * @internal
     */
    StartBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBuildInput = exports.StartBuildInput || (exports.StartBuildInput = {}));
var StartBuildOutput;
(function (StartBuildOutput) {
    /**
     * @internal
     */
    StartBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBuildOutput = exports.StartBuildOutput || (exports.StartBuildOutput = {}));
var StartBuildBatchInput;
(function (StartBuildBatchInput) {
    /**
     * @internal
     */
    StartBuildBatchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBuildBatchInput = exports.StartBuildBatchInput || (exports.StartBuildBatchInput = {}));
var StartBuildBatchOutput;
(function (StartBuildBatchOutput) {
    /**
     * @internal
     */
    StartBuildBatchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBuildBatchOutput = exports.StartBuildBatchOutput || (exports.StartBuildBatchOutput = {}));
var StopBuildInput;
(function (StopBuildInput) {
    /**
     * @internal
     */
    StopBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBuildInput = exports.StopBuildInput || (exports.StopBuildInput = {}));
var StopBuildOutput;
(function (StopBuildOutput) {
    /**
     * @internal
     */
    StopBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBuildOutput = exports.StopBuildOutput || (exports.StopBuildOutput = {}));
var StopBuildBatchInput;
(function (StopBuildBatchInput) {
    /**
     * @internal
     */
    StopBuildBatchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBuildBatchInput = exports.StopBuildBatchInput || (exports.StopBuildBatchInput = {}));
var StopBuildBatchOutput;
(function (StopBuildBatchOutput) {
    /**
     * @internal
     */
    StopBuildBatchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBuildBatchOutput = exports.StopBuildBatchOutput || (exports.StopBuildBatchOutput = {}));
var UpdateProjectInput;
(function (UpdateProjectInput) {
    /**
     * @internal
     */
    UpdateProjectInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectInput = exports.UpdateProjectInput || (exports.UpdateProjectInput = {}));
var UpdateProjectOutput;
(function (UpdateProjectOutput) {
    /**
     * @internal
     */
    UpdateProjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectOutput = exports.UpdateProjectOutput || (exports.UpdateProjectOutput = {}));
var UpdateReportGroupInput;
(function (UpdateReportGroupInput) {
    /**
     * @internal
     */
    UpdateReportGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReportGroupInput = exports.UpdateReportGroupInput || (exports.UpdateReportGroupInput = {}));
var UpdateReportGroupOutput;
(function (UpdateReportGroupOutput) {
    /**
     * @internal
     */
    UpdateReportGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReportGroupOutput = exports.UpdateReportGroupOutput || (exports.UpdateReportGroupOutput = {}));
var UpdateWebhookInput;
(function (UpdateWebhookInput) {
    /**
     * @internal
     */
    UpdateWebhookInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebhookInput = exports.UpdateWebhookInput || (exports.UpdateWebhookInput = {}));
var UpdateWebhookOutput;
(function (UpdateWebhookOutput) {
    /**
     * @internal
     */
    UpdateWebhookOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebhookOutput = exports.UpdateWebhookOutput || (exports.UpdateWebhookOutput = {}));
//# sourceMappingURL=models_0.js.map