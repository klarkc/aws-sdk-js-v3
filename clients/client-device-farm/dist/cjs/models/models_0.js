"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestGridProjectResult = exports.TestGridProject = exports.CreateTestGridProjectRequest = exports.TestGridVpcConfig = exports.CreateRemoteAccessSessionResult = exports.RemoteAccessSession = exports.ExecutionStatus = exports.ExecutionResult = exports.DeviceMinutes = exports.Device = exports.Resolution = exports.DeviceInstance = exports.InstanceStatus = exports.DeviceFormFactor = exports.DeviceAvailability = exports.CreateRemoteAccessSessionRequest = exports.InteractionMode = exports.CreateRemoteAccessSessionConfiguration = exports.TagOperationException = exports.CreateProjectResult = exports.Project = exports.CreateProjectRequest = exports.CreateNetworkProfileResult = exports.NetworkProfile = exports.CreateNetworkProfileRequest = exports.NetworkProfileType = exports.CreateInstanceProfileResult = exports.InstanceProfile = exports.CreateInstanceProfileRequest = exports.ServiceAccountException = exports.NotFoundException = exports.LimitExceededException = exports.CreateDevicePoolResult = exports.DevicePool = exports.DevicePoolType = exports.CreateDevicePoolRequest = exports.Rule = exports.RuleOperator = exports.DeviceAttribute = exports.CPU = exports.Counters = exports.CannotDeleteException = exports.BillingMethod = exports.ArtifactCategory = exports.Artifact = exports.ArtifactType = exports.ArgumentException = exports.AccountSettings = exports.DevicePlatform = exports.TrialMinutes = void 0;
exports.GetDevicePoolCompatibilityResult = exports.DevicePoolCompatibilityResult = exports.IncompatibilityMessage = exports.GetDevicePoolCompatibilityRequest = exports.ScheduleRunTest = exports.TestType = exports.ScheduleRunConfiguration = exports.Radios = exports.Location = exports.GetDevicePoolResult = exports.GetDevicePoolRequest = exports.GetDeviceInstanceResult = exports.GetDeviceInstanceRequest = exports.GetDeviceResult = exports.GetDeviceRequest = exports.GetAccountSettingsResult = exports.GetAccountSettingsRequest = exports.InvalidOperationException = exports.DeleteVPCEConfigurationResult = exports.DeleteVPCEConfigurationRequest = exports.DeleteUploadResult = exports.DeleteUploadRequest = exports.DeleteTestGridProjectResult = exports.DeleteTestGridProjectRequest = exports.DeleteRunResult = exports.DeleteRunRequest = exports.DeleteRemoteAccessSessionResult = exports.DeleteRemoteAccessSessionRequest = exports.DeleteProjectResult = exports.DeleteProjectRequest = exports.DeleteNetworkProfileResult = exports.DeleteNetworkProfileRequest = exports.DeleteInstanceProfileResult = exports.DeleteInstanceProfileRequest = exports.DeleteDevicePoolResult = exports.DeleteDevicePoolRequest = exports.CustomerArtifactPaths = exports.CurrencyCode = exports.CreateVPCEConfigurationResult = exports.VPCEConfiguration = exports.CreateVPCEConfigurationRequest = exports.CreateUploadResult = exports.Upload = exports.UploadStatus = exports.UploadCategory = exports.CreateUploadRequest = exports.UploadType = exports.CreateTestGridUrlResult = exports.CreateTestGridUrlRequest = exports.InternalServiceException = void 0;
exports.ListDeviceInstancesResult = exports.ListDeviceInstancesRequest = exports.ListArtifactsResult = exports.ListArtifactsRequest = exports.InstallToRemoteAccessSessionResult = exports.InstallToRemoteAccessSessionRequest = exports.GetVPCEConfigurationResult = exports.GetVPCEConfigurationRequest = exports.GetUploadResult = exports.GetUploadRequest = exports.GetTestGridSessionResult = exports.TestGridSession = exports.TestGridSessionStatus = exports.GetTestGridSessionRequest = exports.GetTestGridProjectResult = exports.GetTestGridProjectRequest = exports.GetTestResult = exports.Test = exports.GetTestRequest = exports.GetSuiteResult = exports.Suite = exports.GetSuiteRequest = exports.GetRunResult = exports.Run = exports.ExecutionResultCode = exports.DeviceSelectionResult = exports.DeviceFilter = exports.DeviceFilterAttribute = exports.GetRunRequest = exports.GetRemoteAccessSessionResult = exports.GetRemoteAccessSessionRequest = exports.GetProjectResult = exports.GetProjectRequest = exports.NotEligibleException = exports.GetOfferingStatusResult = exports.OfferingStatus = exports.OfferingTransactionType = exports.Offering = exports.OfferingType = exports.RecurringCharge = exports.RecurringChargeFrequency = exports.MonetaryAmount = exports.GetOfferingStatusRequest = exports.GetNetworkProfileResult = exports.GetNetworkProfileRequest = exports.GetJobResult = exports.Job = exports.GetJobRequest = exports.GetInstanceProfileResult = exports.GetInstanceProfileRequest = void 0;
exports.Problem = exports.ProblemDetail = exports.ListUniqueProblemsRequest = exports.ListTestsResult = exports.ListTestsRequest = exports.ListTestGridSessionsResult = exports.ListTestGridSessionsRequest = exports.ListTestGridSessionArtifactsResult = exports.TestGridSessionArtifact = exports.TestGridSessionArtifactType = exports.ListTestGridSessionArtifactsRequest = exports.TestGridSessionArtifactCategory = exports.ListTestGridSessionActionsResult = exports.TestGridSessionAction = exports.ListTestGridSessionActionsRequest = exports.ListTestGridProjectsResult = exports.ListTestGridProjectsRequest = exports.ListTagsForResourceResponse = exports.Tag = exports.ListTagsForResourceRequest = exports.ListSuitesResult = exports.ListSuitesRequest = exports.ListSamplesResult = exports.Sample = exports.SampleType = exports.ListSamplesRequest = exports.ListRunsResult = exports.ListRunsRequest = exports.ListRemoteAccessSessionsResult = exports.ListRemoteAccessSessionsRequest = exports.ListProjectsResult = exports.ListProjectsRequest = exports.ListOfferingTransactionsResult = exports.OfferingTransaction = exports.ListOfferingTransactionsRequest = exports.ListOfferingsResult = exports.ListOfferingsRequest = exports.ListOfferingPromotionsResult = exports.OfferingPromotion = exports.ListOfferingPromotionsRequest = exports.ListNetworkProfilesResult = exports.ListNetworkProfilesRequest = exports.ListJobsResult = exports.ListJobsRequest = exports.ListInstanceProfilesResult = exports.ListInstanceProfilesRequest = exports.ListDevicesResult = exports.ListDevicesRequest = exports.ListDevicePoolsResult = exports.ListDevicePoolsRequest = void 0;
exports.UpdateVPCEConfigurationResult = exports.UpdateVPCEConfigurationRequest = exports.UpdateUploadResult = exports.UpdateUploadRequest = exports.UpdateTestGridProjectResult = exports.UpdateTestGridProjectRequest = exports.UpdateProjectResult = exports.UpdateProjectRequest = exports.UpdateNetworkProfileResult = exports.UpdateNetworkProfileRequest = exports.UpdateInstanceProfileResult = exports.UpdateInstanceProfileRequest = exports.UpdateDevicePoolResult = exports.UpdateDevicePoolRequest = exports.UpdateDeviceInstanceResult = exports.UpdateDeviceInstanceRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.TagPolicyException = exports.StopRunResult = exports.StopRunRequest = exports.StopRemoteAccessSessionResult = exports.StopRemoteAccessSessionRequest = exports.StopJobResult = exports.StopJobRequest = exports.ScheduleRunResult = exports.ScheduleRunRequest = exports.ExecutionConfiguration = exports.DeviceSelectionConfiguration = exports.IdempotencyException = exports.RenewOfferingResult = exports.RenewOfferingRequest = exports.PurchaseOfferingResult = exports.PurchaseOfferingRequest = exports.ListVPCEConfigurationsResult = exports.ListVPCEConfigurationsRequest = exports.ListUploadsResult = exports.ListUploadsRequest = exports.ListUniqueProblemsResult = exports.UniqueProblem = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var TrialMinutes;
(function (TrialMinutes) {
    /**
     * @internal
     */
    TrialMinutes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrialMinutes = exports.TrialMinutes || (exports.TrialMinutes = {}));
var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["ANDROID"] = "ANDROID";
    DevicePlatform["IOS"] = "IOS";
})(DevicePlatform = exports.DevicePlatform || (exports.DevicePlatform = {}));
var AccountSettings;
(function (AccountSettings) {
    /**
     * @internal
     */
    AccountSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountSettings = exports.AccountSettings || (exports.AccountSettings = {}));
var ArgumentException;
(function (ArgumentException) {
    /**
     * @internal
     */
    ArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArgumentException = exports.ArgumentException || (exports.ArgumentException = {}));
var ArtifactType;
(function (ArtifactType) {
    ArtifactType["APPIUM_JAVA_OUTPUT"] = "APPIUM_JAVA_OUTPUT";
    ArtifactType["APPIUM_JAVA_XML_OUTPUT"] = "APPIUM_JAVA_XML_OUTPUT";
    ArtifactType["APPIUM_PYTHON_OUTPUT"] = "APPIUM_PYTHON_OUTPUT";
    ArtifactType["APPIUM_PYTHON_XML_OUTPUT"] = "APPIUM_PYTHON_XML_OUTPUT";
    ArtifactType["APPIUM_SERVER_OUTPUT"] = "APPIUM_SERVER_OUTPUT";
    ArtifactType["APPLICATION_CRASH_REPORT"] = "APPLICATION_CRASH_REPORT";
    ArtifactType["AUTOMATION_OUTPUT"] = "AUTOMATION_OUTPUT";
    ArtifactType["CALABASH_JAVA_XML_OUTPUT"] = "CALABASH_JAVA_XML_OUTPUT";
    ArtifactType["CALABASH_JSON_OUTPUT"] = "CALABASH_JSON_OUTPUT";
    ArtifactType["CALABASH_PRETTY_OUTPUT"] = "CALABASH_PRETTY_OUTPUT";
    ArtifactType["CALABASH_STANDARD_OUTPUT"] = "CALABASH_STANDARD_OUTPUT";
    ArtifactType["CUSTOMER_ARTIFACT"] = "CUSTOMER_ARTIFACT";
    ArtifactType["CUSTOMER_ARTIFACT_LOG"] = "CUSTOMER_ARTIFACT_LOG";
    ArtifactType["DEVICE_LOG"] = "DEVICE_LOG";
    ArtifactType["EXERCISER_MONKEY_OUTPUT"] = "EXERCISER_MONKEY_OUTPUT";
    ArtifactType["EXPLORER_EVENT_LOG"] = "EXPLORER_EVENT_LOG";
    ArtifactType["EXPLORER_SUMMARY_LOG"] = "EXPLORER_SUMMARY_LOG";
    ArtifactType["INSTRUMENTATION_OUTPUT"] = "INSTRUMENTATION_OUTPUT";
    ArtifactType["MESSAGE_LOG"] = "MESSAGE_LOG";
    ArtifactType["RESULT_LOG"] = "RESULT_LOG";
    ArtifactType["SCREENSHOT"] = "SCREENSHOT";
    ArtifactType["SERVICE_LOG"] = "SERVICE_LOG";
    ArtifactType["TESTSPEC_OUTPUT"] = "TESTSPEC_OUTPUT";
    ArtifactType["UNKNOWN"] = "UNKNOWN";
    ArtifactType["VIDEO"] = "VIDEO";
    ArtifactType["VIDEO_LOG"] = "VIDEO_LOG";
    ArtifactType["WEBKIT_LOG"] = "WEBKIT_LOG";
    ArtifactType["XCTEST_LOG"] = "XCTEST_LOG";
})(ArtifactType = exports.ArtifactType || (exports.ArtifactType = {}));
var Artifact;
(function (Artifact) {
    /**
     * @internal
     */
    Artifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var ArtifactCategory;
(function (ArtifactCategory) {
    ArtifactCategory["FILE"] = "FILE";
    ArtifactCategory["LOG"] = "LOG";
    ArtifactCategory["SCREENSHOT"] = "SCREENSHOT";
})(ArtifactCategory = exports.ArtifactCategory || (exports.ArtifactCategory = {}));
var BillingMethod;
(function (BillingMethod) {
    BillingMethod["METERED"] = "METERED";
    BillingMethod["UNMETERED"] = "UNMETERED";
})(BillingMethod = exports.BillingMethod || (exports.BillingMethod = {}));
var CannotDeleteException;
(function (CannotDeleteException) {
    /**
     * @internal
     */
    CannotDeleteException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CannotDeleteException = exports.CannotDeleteException || (exports.CannotDeleteException = {}));
var Counters;
(function (Counters) {
    /**
     * @internal
     */
    Counters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Counters = exports.Counters || (exports.Counters = {}));
var CPU;
(function (CPU) {
    /**
     * @internal
     */
    CPU.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CPU = exports.CPU || (exports.CPU = {}));
var DeviceAttribute;
(function (DeviceAttribute) {
    DeviceAttribute["APPIUM_VERSION"] = "APPIUM_VERSION";
    DeviceAttribute["ARN"] = "ARN";
    DeviceAttribute["AVAILABILITY"] = "AVAILABILITY";
    DeviceAttribute["FLEET_TYPE"] = "FLEET_TYPE";
    DeviceAttribute["FORM_FACTOR"] = "FORM_FACTOR";
    DeviceAttribute["INSTANCE_ARN"] = "INSTANCE_ARN";
    DeviceAttribute["INSTANCE_LABELS"] = "INSTANCE_LABELS";
    DeviceAttribute["MANUFACTURER"] = "MANUFACTURER";
    DeviceAttribute["MODEL"] = "MODEL";
    DeviceAttribute["OS_VERSION"] = "OS_VERSION";
    DeviceAttribute["PLATFORM"] = "PLATFORM";
    DeviceAttribute["REMOTE_ACCESS_ENABLED"] = "REMOTE_ACCESS_ENABLED";
    DeviceAttribute["REMOTE_DEBUG_ENABLED"] = "REMOTE_DEBUG_ENABLED";
})(DeviceAttribute = exports.DeviceAttribute || (exports.DeviceAttribute = {}));
var RuleOperator;
(function (RuleOperator) {
    RuleOperator["CONTAINS"] = "CONTAINS";
    RuleOperator["EQUALS"] = "EQUALS";
    RuleOperator["GREATER_THAN"] = "GREATER_THAN";
    RuleOperator["GREATER_THAN_OR_EQUALS"] = "GREATER_THAN_OR_EQUALS";
    RuleOperator["IN"] = "IN";
    RuleOperator["LESS_THAN"] = "LESS_THAN";
    RuleOperator["LESS_THAN_OR_EQUALS"] = "LESS_THAN_OR_EQUALS";
    RuleOperator["NOT_IN"] = "NOT_IN";
})(RuleOperator = exports.RuleOperator || (exports.RuleOperator = {}));
var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rule = exports.Rule || (exports.Rule = {}));
var CreateDevicePoolRequest;
(function (CreateDevicePoolRequest) {
    /**
     * @internal
     */
    CreateDevicePoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDevicePoolRequest = exports.CreateDevicePoolRequest || (exports.CreateDevicePoolRequest = {}));
var DevicePoolType;
(function (DevicePoolType) {
    DevicePoolType["CURATED"] = "CURATED";
    DevicePoolType["PRIVATE"] = "PRIVATE";
})(DevicePoolType = exports.DevicePoolType || (exports.DevicePoolType = {}));
var DevicePool;
(function (DevicePool) {
    /**
     * @internal
     */
    DevicePool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DevicePool = exports.DevicePool || (exports.DevicePool = {}));
var CreateDevicePoolResult;
(function (CreateDevicePoolResult) {
    /**
     * @internal
     */
    CreateDevicePoolResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDevicePoolResult = exports.CreateDevicePoolResult || (exports.CreateDevicePoolResult = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var ServiceAccountException;
(function (ServiceAccountException) {
    /**
     * @internal
     */
    ServiceAccountException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceAccountException = exports.ServiceAccountException || (exports.ServiceAccountException = {}));
var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    /**
     * @internal
     */
    CreateInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceProfileRequest = exports.CreateInstanceProfileRequest || (exports.CreateInstanceProfileRequest = {}));
var InstanceProfile;
(function (InstanceProfile) {
    /**
     * @internal
     */
    InstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceProfile = exports.InstanceProfile || (exports.InstanceProfile = {}));
var CreateInstanceProfileResult;
(function (CreateInstanceProfileResult) {
    /**
     * @internal
     */
    CreateInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceProfileResult = exports.CreateInstanceProfileResult || (exports.CreateInstanceProfileResult = {}));
var NetworkProfileType;
(function (NetworkProfileType) {
    NetworkProfileType["CURATED"] = "CURATED";
    NetworkProfileType["PRIVATE"] = "PRIVATE";
})(NetworkProfileType = exports.NetworkProfileType || (exports.NetworkProfileType = {}));
var CreateNetworkProfileRequest;
(function (CreateNetworkProfileRequest) {
    /**
     * @internal
     */
    CreateNetworkProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkProfileRequest = exports.CreateNetworkProfileRequest || (exports.CreateNetworkProfileRequest = {}));
var NetworkProfile;
(function (NetworkProfile) {
    /**
     * @internal
     */
    NetworkProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkProfile = exports.NetworkProfile || (exports.NetworkProfile = {}));
var CreateNetworkProfileResult;
(function (CreateNetworkProfileResult) {
    /**
     * @internal
     */
    CreateNetworkProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkProfileResult = exports.CreateNetworkProfileResult || (exports.CreateNetworkProfileResult = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Project = exports.Project || (exports.Project = {}));
var CreateProjectResult;
(function (CreateProjectResult) {
    /**
     * @internal
     */
    CreateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResult = exports.CreateProjectResult || (exports.CreateProjectResult = {}));
var TagOperationException;
(function (TagOperationException) {
    /**
     * @internal
     */
    TagOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOperationException = exports.TagOperationException || (exports.TagOperationException = {}));
var CreateRemoteAccessSessionConfiguration;
(function (CreateRemoteAccessSessionConfiguration) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRemoteAccessSessionConfiguration = exports.CreateRemoteAccessSessionConfiguration || (exports.CreateRemoteAccessSessionConfiguration = {}));
var InteractionMode;
(function (InteractionMode) {
    InteractionMode["INTERACTIVE"] = "INTERACTIVE";
    InteractionMode["NO_VIDEO"] = "NO_VIDEO";
    InteractionMode["VIDEO_ONLY"] = "VIDEO_ONLY";
})(InteractionMode = exports.InteractionMode || (exports.InteractionMode = {}));
var CreateRemoteAccessSessionRequest;
(function (CreateRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRemoteAccessSessionRequest = exports.CreateRemoteAccessSessionRequest || (exports.CreateRemoteAccessSessionRequest = {}));
var DeviceAvailability;
(function (DeviceAvailability) {
    DeviceAvailability["AVAILABLE"] = "AVAILABLE";
    DeviceAvailability["BUSY"] = "BUSY";
    DeviceAvailability["HIGHLY_AVAILABLE"] = "HIGHLY_AVAILABLE";
    DeviceAvailability["TEMPORARY_NOT_AVAILABLE"] = "TEMPORARY_NOT_AVAILABLE";
})(DeviceAvailability = exports.DeviceAvailability || (exports.DeviceAvailability = {}));
var DeviceFormFactor;
(function (DeviceFormFactor) {
    DeviceFormFactor["PHONE"] = "PHONE";
    DeviceFormFactor["TABLET"] = "TABLET";
})(DeviceFormFactor = exports.DeviceFormFactor || (exports.DeviceFormFactor = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["AVAILABLE"] = "AVAILABLE";
    InstanceStatus["IN_USE"] = "IN_USE";
    InstanceStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
    InstanceStatus["PREPARING"] = "PREPARING";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var DeviceInstance;
(function (DeviceInstance) {
    /**
     * @internal
     */
    DeviceInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceInstance = exports.DeviceInstance || (exports.DeviceInstance = {}));
var Resolution;
(function (Resolution) {
    /**
     * @internal
     */
    Resolution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resolution = exports.Resolution || (exports.Resolution = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Device = exports.Device || (exports.Device = {}));
var DeviceMinutes;
(function (DeviceMinutes) {
    /**
     * @internal
     */
    DeviceMinutes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceMinutes = exports.DeviceMinutes || (exports.DeviceMinutes = {}));
var ExecutionResult;
(function (ExecutionResult) {
    ExecutionResult["ERRORED"] = "ERRORED";
    ExecutionResult["FAILED"] = "FAILED";
    ExecutionResult["PASSED"] = "PASSED";
    ExecutionResult["PENDING"] = "PENDING";
    ExecutionResult["SKIPPED"] = "SKIPPED";
    ExecutionResult["STOPPED"] = "STOPPED";
    ExecutionResult["WARNED"] = "WARNED";
})(ExecutionResult = exports.ExecutionResult || (exports.ExecutionResult = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["COMPLETED"] = "COMPLETED";
    ExecutionStatus["PENDING"] = "PENDING";
    ExecutionStatus["PENDING_CONCURRNECY"] = "PENDING_CONCURRENCY";
    ExecutionStatus["PENDING_DEVICE"] = "PENDING_DEVICE";
    ExecutionStatus["PREPARING"] = "PREPARING";
    ExecutionStatus["PROCESSING"] = "PROCESSING";
    ExecutionStatus["RUNNING"] = "RUNNING";
    ExecutionStatus["SCHEDULING"] = "SCHEDULING";
    ExecutionStatus["STOPPING"] = "STOPPING";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
var RemoteAccessSession;
(function (RemoteAccessSession) {
    /**
     * @internal
     */
    RemoteAccessSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoteAccessSession = exports.RemoteAccessSession || (exports.RemoteAccessSession = {}));
var CreateRemoteAccessSessionResult;
(function (CreateRemoteAccessSessionResult) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRemoteAccessSessionResult = exports.CreateRemoteAccessSessionResult || (exports.CreateRemoteAccessSessionResult = {}));
var TestGridVpcConfig;
(function (TestGridVpcConfig) {
    /**
     * @internal
     */
    TestGridVpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestGridVpcConfig = exports.TestGridVpcConfig || (exports.TestGridVpcConfig = {}));
var CreateTestGridProjectRequest;
(function (CreateTestGridProjectRequest) {
    /**
     * @internal
     */
    CreateTestGridProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTestGridProjectRequest = exports.CreateTestGridProjectRequest || (exports.CreateTestGridProjectRequest = {}));
var TestGridProject;
(function (TestGridProject) {
    /**
     * @internal
     */
    TestGridProject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestGridProject = exports.TestGridProject || (exports.TestGridProject = {}));
var CreateTestGridProjectResult;
(function (CreateTestGridProjectResult) {
    /**
     * @internal
     */
    CreateTestGridProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTestGridProjectResult = exports.CreateTestGridProjectResult || (exports.CreateTestGridProjectResult = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var CreateTestGridUrlRequest;
(function (CreateTestGridUrlRequest) {
    /**
     * @internal
     */
    CreateTestGridUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTestGridUrlRequest = exports.CreateTestGridUrlRequest || (exports.CreateTestGridUrlRequest = {}));
var CreateTestGridUrlResult;
(function (CreateTestGridUrlResult) {
    /**
     * @internal
     */
    CreateTestGridUrlResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.url && { url: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateTestGridUrlResult = exports.CreateTestGridUrlResult || (exports.CreateTestGridUrlResult = {}));
var UploadType;
(function (UploadType) {
    UploadType["ANDROID_APP"] = "ANDROID_APP";
    UploadType["APPIUM_JAVA_JUNIT_TEST_PACKAGE"] = "APPIUM_JAVA_JUNIT_TEST_PACKAGE";
    UploadType["APPIUM_JAVA_JUNIT_TEST_SPEC"] = "APPIUM_JAVA_JUNIT_TEST_SPEC";
    UploadType["APPIUM_JAVA_TESTNG_TEST_PACKAGE"] = "APPIUM_JAVA_TESTNG_TEST_PACKAGE";
    UploadType["APPIUM_JAVA_TESTNG_TEST_SPEC"] = "APPIUM_JAVA_TESTNG_TEST_SPEC";
    UploadType["APPIUM_NODE_TEST_PACKAGE"] = "APPIUM_NODE_TEST_PACKAGE";
    UploadType["APPIUM_NODE_TEST_SPEC"] = "APPIUM_NODE_TEST_SPEC";
    UploadType["APPIUM_PYTHON_TEST_PACKAGE"] = "APPIUM_PYTHON_TEST_PACKAGE";
    UploadType["APPIUM_PYTHON_TEST_SPEC"] = "APPIUM_PYTHON_TEST_SPEC";
    UploadType["APPIUM_RUBY_TEST_PACKAGE"] = "APPIUM_RUBY_TEST_PACKAGE";
    UploadType["APPIUM_RUBY_TEST_SPEC"] = "APPIUM_RUBY_TEST_SPEC";
    UploadType["APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"] = "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE";
    UploadType["APPIUM_WEB_JAVA_JUNIT_TEST_SPEC"] = "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC";
    UploadType["APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"] = "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE";
    UploadType["APPIUM_WEB_JAVA_TESTNG_TEST_SPEC"] = "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC";
    UploadType["APPIUM_WEB_NODE_TEST_PACKAGE"] = "APPIUM_WEB_NODE_TEST_PACKAGE";
    UploadType["APPIUM_WEB_NODE_TEST_SPEC"] = "APPIUM_WEB_NODE_TEST_SPEC";
    UploadType["APPIUM_WEB_PYTHON_TEST_PACKAGE"] = "APPIUM_WEB_PYTHON_TEST_PACKAGE";
    UploadType["APPIUM_WEB_PYTHON_TEST_SPEC"] = "APPIUM_WEB_PYTHON_TEST_SPEC";
    UploadType["APPIUM_WEB_RUBY_TEST_PACKAGE"] = "APPIUM_WEB_RUBY_TEST_PACKAGE";
    UploadType["APPIUM_WEB_RUBY_TEST_SPEC"] = "APPIUM_WEB_RUBY_TEST_SPEC";
    UploadType["CALABASH_TEST_PACKAGE"] = "CALABASH_TEST_PACKAGE";
    UploadType["EXTERNAL_DATA"] = "EXTERNAL_DATA";
    UploadType["INSTRUMENTATION_TEST_PACKAGE"] = "INSTRUMENTATION_TEST_PACKAGE";
    UploadType["INSTRUMENTATION_TEST_SPEC"] = "INSTRUMENTATION_TEST_SPEC";
    UploadType["IOS_APP"] = "IOS_APP";
    UploadType["UIAUTOMATION_TEST_PACKAGE"] = "UIAUTOMATION_TEST_PACKAGE";
    UploadType["UIAUTOMATOR_TEST_PACKAGE"] = "UIAUTOMATOR_TEST_PACKAGE";
    UploadType["WEB_APP"] = "WEB_APP";
    UploadType["XCTEST_TEST_PACKAGE"] = "XCTEST_TEST_PACKAGE";
    UploadType["XCTEST_UI_TEST_PACKAGE"] = "XCTEST_UI_TEST_PACKAGE";
    UploadType["XCTEST_UI_TEST_SPEC"] = "XCTEST_UI_TEST_SPEC";
})(UploadType = exports.UploadType || (exports.UploadType = {}));
var CreateUploadRequest;
(function (CreateUploadRequest) {
    /**
     * @internal
     */
    CreateUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUploadRequest = exports.CreateUploadRequest || (exports.CreateUploadRequest = {}));
var UploadCategory;
(function (UploadCategory) {
    UploadCategory["CURATED"] = "CURATED";
    UploadCategory["PRIVATE"] = "PRIVATE";
})(UploadCategory = exports.UploadCategory || (exports.UploadCategory = {}));
var UploadStatus;
(function (UploadStatus) {
    UploadStatus["FAILED"] = "FAILED";
    UploadStatus["INITIALIZED"] = "INITIALIZED";
    UploadStatus["PROCESSING"] = "PROCESSING";
    UploadStatus["SUCCEEDED"] = "SUCCEEDED";
})(UploadStatus = exports.UploadStatus || (exports.UploadStatus = {}));
var Upload;
(function (Upload) {
    /**
     * @internal
     */
    Upload.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.url && { url: smithy_client_1.SENSITIVE_STRING }),
    });
})(Upload = exports.Upload || (exports.Upload = {}));
var CreateUploadResult;
(function (CreateUploadResult) {
    /**
     * @internal
     */
    CreateUploadResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }),
    });
})(CreateUploadResult = exports.CreateUploadResult || (exports.CreateUploadResult = {}));
var CreateVPCEConfigurationRequest;
(function (CreateVPCEConfigurationRequest) {
    /**
     * @internal
     */
    CreateVPCEConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVPCEConfigurationRequest = exports.CreateVPCEConfigurationRequest || (exports.CreateVPCEConfigurationRequest = {}));
var VPCEConfiguration;
(function (VPCEConfiguration) {
    /**
     * @internal
     */
    VPCEConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCEConfiguration = exports.VPCEConfiguration || (exports.VPCEConfiguration = {}));
var CreateVPCEConfigurationResult;
(function (CreateVPCEConfigurationResult) {
    /**
     * @internal
     */
    CreateVPCEConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVPCEConfigurationResult = exports.CreateVPCEConfigurationResult || (exports.CreateVPCEConfigurationResult = {}));
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["USD"] = "USD";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
var CustomerArtifactPaths;
(function (CustomerArtifactPaths) {
    /**
     * @internal
     */
    CustomerArtifactPaths.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerArtifactPaths = exports.CustomerArtifactPaths || (exports.CustomerArtifactPaths = {}));
var DeleteDevicePoolRequest;
(function (DeleteDevicePoolRequest) {
    /**
     * @internal
     */
    DeleteDevicePoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDevicePoolRequest = exports.DeleteDevicePoolRequest || (exports.DeleteDevicePoolRequest = {}));
var DeleteDevicePoolResult;
(function (DeleteDevicePoolResult) {
    /**
     * @internal
     */
    DeleteDevicePoolResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDevicePoolResult = exports.DeleteDevicePoolResult || (exports.DeleteDevicePoolResult = {}));
var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    /**
     * @internal
     */
    DeleteInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceProfileRequest = exports.DeleteInstanceProfileRequest || (exports.DeleteInstanceProfileRequest = {}));
var DeleteInstanceProfileResult;
(function (DeleteInstanceProfileResult) {
    /**
     * @internal
     */
    DeleteInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceProfileResult = exports.DeleteInstanceProfileResult || (exports.DeleteInstanceProfileResult = {}));
var DeleteNetworkProfileRequest;
(function (DeleteNetworkProfileRequest) {
    /**
     * @internal
     */
    DeleteNetworkProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkProfileRequest = exports.DeleteNetworkProfileRequest || (exports.DeleteNetworkProfileRequest = {}));
var DeleteNetworkProfileResult;
(function (DeleteNetworkProfileResult) {
    /**
     * @internal
     */
    DeleteNetworkProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkProfileResult = exports.DeleteNetworkProfileResult || (exports.DeleteNetworkProfileResult = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResult;
(function (DeleteProjectResult) {
    /**
     * @internal
     */
    DeleteProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResult = exports.DeleteProjectResult || (exports.DeleteProjectResult = {}));
var DeleteRemoteAccessSessionRequest;
(function (DeleteRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    DeleteRemoteAccessSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemoteAccessSessionRequest = exports.DeleteRemoteAccessSessionRequest || (exports.DeleteRemoteAccessSessionRequest = {}));
var DeleteRemoteAccessSessionResult;
(function (DeleteRemoteAccessSessionResult) {
    /**
     * @internal
     */
    DeleteRemoteAccessSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRemoteAccessSessionResult = exports.DeleteRemoteAccessSessionResult || (exports.DeleteRemoteAccessSessionResult = {}));
var DeleteRunRequest;
(function (DeleteRunRequest) {
    /**
     * @internal
     */
    DeleteRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRunRequest = exports.DeleteRunRequest || (exports.DeleteRunRequest = {}));
var DeleteRunResult;
(function (DeleteRunResult) {
    /**
     * @internal
     */
    DeleteRunResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRunResult = exports.DeleteRunResult || (exports.DeleteRunResult = {}));
var DeleteTestGridProjectRequest;
(function (DeleteTestGridProjectRequest) {
    /**
     * @internal
     */
    DeleteTestGridProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTestGridProjectRequest = exports.DeleteTestGridProjectRequest || (exports.DeleteTestGridProjectRequest = {}));
var DeleteTestGridProjectResult;
(function (DeleteTestGridProjectResult) {
    /**
     * @internal
     */
    DeleteTestGridProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTestGridProjectResult = exports.DeleteTestGridProjectResult || (exports.DeleteTestGridProjectResult = {}));
var DeleteUploadRequest;
(function (DeleteUploadRequest) {
    /**
     * @internal
     */
    DeleteUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUploadRequest = exports.DeleteUploadRequest || (exports.DeleteUploadRequest = {}));
var DeleteUploadResult;
(function (DeleteUploadResult) {
    /**
     * @internal
     */
    DeleteUploadResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUploadResult = exports.DeleteUploadResult || (exports.DeleteUploadResult = {}));
var DeleteVPCEConfigurationRequest;
(function (DeleteVPCEConfigurationRequest) {
    /**
     * @internal
     */
    DeleteVPCEConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVPCEConfigurationRequest = exports.DeleteVPCEConfigurationRequest || (exports.DeleteVPCEConfigurationRequest = {}));
var DeleteVPCEConfigurationResult;
(function (DeleteVPCEConfigurationResult) {
    /**
     * @internal
     */
    DeleteVPCEConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVPCEConfigurationResult = exports.DeleteVPCEConfigurationResult || (exports.DeleteVPCEConfigurationResult = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
    /**
     * @internal
     */
    GetAccountSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountSettingsRequest = exports.GetAccountSettingsRequest || (exports.GetAccountSettingsRequest = {}));
var GetAccountSettingsResult;
(function (GetAccountSettingsResult) {
    /**
     * @internal
     */
    GetAccountSettingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountSettingsResult = exports.GetAccountSettingsResult || (exports.GetAccountSettingsResult = {}));
var GetDeviceRequest;
(function (GetDeviceRequest) {
    /**
     * @internal
     */
    GetDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {}));
var GetDeviceResult;
(function (GetDeviceResult) {
    /**
     * @internal
     */
    GetDeviceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceResult = exports.GetDeviceResult || (exports.GetDeviceResult = {}));
var GetDeviceInstanceRequest;
(function (GetDeviceInstanceRequest) {
    /**
     * @internal
     */
    GetDeviceInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceInstanceRequest = exports.GetDeviceInstanceRequest || (exports.GetDeviceInstanceRequest = {}));
var GetDeviceInstanceResult;
(function (GetDeviceInstanceResult) {
    /**
     * @internal
     */
    GetDeviceInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceInstanceResult = exports.GetDeviceInstanceResult || (exports.GetDeviceInstanceResult = {}));
var GetDevicePoolRequest;
(function (GetDevicePoolRequest) {
    /**
     * @internal
     */
    GetDevicePoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePoolRequest = exports.GetDevicePoolRequest || (exports.GetDevicePoolRequest = {}));
var GetDevicePoolResult;
(function (GetDevicePoolResult) {
    /**
     * @internal
     */
    GetDevicePoolResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePoolResult = exports.GetDevicePoolResult || (exports.GetDevicePoolResult = {}));
var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Location = exports.Location || (exports.Location = {}));
var Radios;
(function (Radios) {
    /**
     * @internal
     */
    Radios.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Radios = exports.Radios || (exports.Radios = {}));
var ScheduleRunConfiguration;
(function (ScheduleRunConfiguration) {
    /**
     * @internal
     */
    ScheduleRunConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleRunConfiguration = exports.ScheduleRunConfiguration || (exports.ScheduleRunConfiguration = {}));
var TestType;
(function (TestType) {
    TestType["APPIUM_JAVA_JUNIT"] = "APPIUM_JAVA_JUNIT";
    TestType["APPIUM_JAVA_TESTNG"] = "APPIUM_JAVA_TESTNG";
    TestType["APPIUM_NODE"] = "APPIUM_NODE";
    TestType["APPIUM_PYTHON"] = "APPIUM_PYTHON";
    TestType["APPIUM_RUBY"] = "APPIUM_RUBY";
    TestType["APPIUM_WEB_JAVA_JUNIT"] = "APPIUM_WEB_JAVA_JUNIT";
    TestType["APPIUM_WEB_JAVA_TESTNG"] = "APPIUM_WEB_JAVA_TESTNG";
    TestType["APPIUM_WEB_NODE"] = "APPIUM_WEB_NODE";
    TestType["APPIUM_WEB_PYTHON"] = "APPIUM_WEB_PYTHON";
    TestType["APPIUM_WEB_RUBY"] = "APPIUM_WEB_RUBY";
    TestType["BUILTIN_EXPLORER"] = "BUILTIN_EXPLORER";
    TestType["BUILTIN_FUZZ"] = "BUILTIN_FUZZ";
    TestType["CALABASH"] = "CALABASH";
    TestType["INSTRUMENTATION"] = "INSTRUMENTATION";
    TestType["REMOTE_ACCESS_RECORD"] = "REMOTE_ACCESS_RECORD";
    TestType["REMOTE_ACCESS_REPLAY"] = "REMOTE_ACCESS_REPLAY";
    TestType["UIAUTOMATION"] = "UIAUTOMATION";
    TestType["UIAUTOMATOR"] = "UIAUTOMATOR";
    TestType["WEB_PERFORMANCE_PROFILE"] = "WEB_PERFORMANCE_PROFILE";
    TestType["XCTEST"] = "XCTEST";
    TestType["XCTEST_UI"] = "XCTEST_UI";
})(TestType = exports.TestType || (exports.TestType = {}));
var ScheduleRunTest;
(function (ScheduleRunTest) {
    /**
     * @internal
     */
    ScheduleRunTest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleRunTest = exports.ScheduleRunTest || (exports.ScheduleRunTest = {}));
var GetDevicePoolCompatibilityRequest;
(function (GetDevicePoolCompatibilityRequest) {
    /**
     * @internal
     */
    GetDevicePoolCompatibilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePoolCompatibilityRequest = exports.GetDevicePoolCompatibilityRequest || (exports.GetDevicePoolCompatibilityRequest = {}));
var IncompatibilityMessage;
(function (IncompatibilityMessage) {
    /**
     * @internal
     */
    IncompatibilityMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibilityMessage = exports.IncompatibilityMessage || (exports.IncompatibilityMessage = {}));
var DevicePoolCompatibilityResult;
(function (DevicePoolCompatibilityResult) {
    /**
     * @internal
     */
    DevicePoolCompatibilityResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DevicePoolCompatibilityResult = exports.DevicePoolCompatibilityResult || (exports.DevicePoolCompatibilityResult = {}));
var GetDevicePoolCompatibilityResult;
(function (GetDevicePoolCompatibilityResult) {
    /**
     * @internal
     */
    GetDevicePoolCompatibilityResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePoolCompatibilityResult = exports.GetDevicePoolCompatibilityResult || (exports.GetDevicePoolCompatibilityResult = {}));
var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    /**
     * @internal
     */
    GetInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceProfileRequest = exports.GetInstanceProfileRequest || (exports.GetInstanceProfileRequest = {}));
var GetInstanceProfileResult;
(function (GetInstanceProfileResult) {
    /**
     * @internal
     */
    GetInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceProfileResult = exports.GetInstanceProfileResult || (exports.GetInstanceProfileResult = {}));
var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var GetJobResult;
(function (GetJobResult) {
    /**
     * @internal
     */
    GetJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobResult = exports.GetJobResult || (exports.GetJobResult = {}));
var GetNetworkProfileRequest;
(function (GetNetworkProfileRequest) {
    /**
     * @internal
     */
    GetNetworkProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNetworkProfileRequest = exports.GetNetworkProfileRequest || (exports.GetNetworkProfileRequest = {}));
var GetNetworkProfileResult;
(function (GetNetworkProfileResult) {
    /**
     * @internal
     */
    GetNetworkProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNetworkProfileResult = exports.GetNetworkProfileResult || (exports.GetNetworkProfileResult = {}));
var GetOfferingStatusRequest;
(function (GetOfferingStatusRequest) {
    /**
     * @internal
     */
    GetOfferingStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOfferingStatusRequest = exports.GetOfferingStatusRequest || (exports.GetOfferingStatusRequest = {}));
var MonetaryAmount;
(function (MonetaryAmount) {
    /**
     * @internal
     */
    MonetaryAmount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonetaryAmount = exports.MonetaryAmount || (exports.MonetaryAmount = {}));
var RecurringChargeFrequency;
(function (RecurringChargeFrequency) {
    RecurringChargeFrequency["MONTHLY"] = "MONTHLY";
})(RecurringChargeFrequency = exports.RecurringChargeFrequency || (exports.RecurringChargeFrequency = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var OfferingType;
(function (OfferingType) {
    OfferingType["RECURRING"] = "RECURRING";
})(OfferingType = exports.OfferingType || (exports.OfferingType = {}));
var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Offering = exports.Offering || (exports.Offering = {}));
var OfferingTransactionType;
(function (OfferingTransactionType) {
    OfferingTransactionType["PURCHASE"] = "PURCHASE";
    OfferingTransactionType["RENEW"] = "RENEW";
    OfferingTransactionType["SYSTEM"] = "SYSTEM";
})(OfferingTransactionType = exports.OfferingTransactionType || (exports.OfferingTransactionType = {}));
var OfferingStatus;
(function (OfferingStatus) {
    /**
     * @internal
     */
    OfferingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OfferingStatus = exports.OfferingStatus || (exports.OfferingStatus = {}));
var GetOfferingStatusResult;
(function (GetOfferingStatusResult) {
    /**
     * @internal
     */
    GetOfferingStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOfferingStatusResult = exports.GetOfferingStatusResult || (exports.GetOfferingStatusResult = {}));
var NotEligibleException;
(function (NotEligibleException) {
    /**
     * @internal
     */
    NotEligibleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotEligibleException = exports.NotEligibleException || (exports.NotEligibleException = {}));
var GetProjectRequest;
(function (GetProjectRequest) {
    /**
     * @internal
     */
    GetProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProjectRequest = exports.GetProjectRequest || (exports.GetProjectRequest = {}));
var GetProjectResult;
(function (GetProjectResult) {
    /**
     * @internal
     */
    GetProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProjectResult = exports.GetProjectResult || (exports.GetProjectResult = {}));
var GetRemoteAccessSessionRequest;
(function (GetRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    GetRemoteAccessSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRemoteAccessSessionRequest = exports.GetRemoteAccessSessionRequest || (exports.GetRemoteAccessSessionRequest = {}));
var GetRemoteAccessSessionResult;
(function (GetRemoteAccessSessionResult) {
    /**
     * @internal
     */
    GetRemoteAccessSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRemoteAccessSessionResult = exports.GetRemoteAccessSessionResult || (exports.GetRemoteAccessSessionResult = {}));
var GetRunRequest;
(function (GetRunRequest) {
    /**
     * @internal
     */
    GetRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRunRequest = exports.GetRunRequest || (exports.GetRunRequest = {}));
var DeviceFilterAttribute;
(function (DeviceFilterAttribute) {
    DeviceFilterAttribute["ARN"] = "ARN";
    DeviceFilterAttribute["AVAILABILITY"] = "AVAILABILITY";
    DeviceFilterAttribute["FLEET_TYPE"] = "FLEET_TYPE";
    DeviceFilterAttribute["FORM_FACTOR"] = "FORM_FACTOR";
    DeviceFilterAttribute["INSTANCE_ARN"] = "INSTANCE_ARN";
    DeviceFilterAttribute["INSTANCE_LABELS"] = "INSTANCE_LABELS";
    DeviceFilterAttribute["MANUFACTURER"] = "MANUFACTURER";
    DeviceFilterAttribute["MODEL"] = "MODEL";
    DeviceFilterAttribute["OS_VERSION"] = "OS_VERSION";
    DeviceFilterAttribute["PLATFORM"] = "PLATFORM";
    DeviceFilterAttribute["REMOTE_ACCESS_ENABLED"] = "REMOTE_ACCESS_ENABLED";
    DeviceFilterAttribute["REMOTE_DEBUG_ENABLED"] = "REMOTE_DEBUG_ENABLED";
})(DeviceFilterAttribute = exports.DeviceFilterAttribute || (exports.DeviceFilterAttribute = {}));
var DeviceFilter;
(function (DeviceFilter) {
    /**
     * @internal
     */
    DeviceFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceFilter = exports.DeviceFilter || (exports.DeviceFilter = {}));
var DeviceSelectionResult;
(function (DeviceSelectionResult) {
    /**
     * @internal
     */
    DeviceSelectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceSelectionResult = exports.DeviceSelectionResult || (exports.DeviceSelectionResult = {}));
var ExecutionResultCode;
(function (ExecutionResultCode) {
    ExecutionResultCode["PARSING_FAILED"] = "PARSING_FAILED";
    ExecutionResultCode["VPC_ENDPOINT_SETUP_FAILED"] = "VPC_ENDPOINT_SETUP_FAILED";
})(ExecutionResultCode = exports.ExecutionResultCode || (exports.ExecutionResultCode = {}));
var Run;
(function (Run) {
    /**
     * @internal
     */
    Run.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Run = exports.Run || (exports.Run = {}));
var GetRunResult;
(function (GetRunResult) {
    /**
     * @internal
     */
    GetRunResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRunResult = exports.GetRunResult || (exports.GetRunResult = {}));
var GetSuiteRequest;
(function (GetSuiteRequest) {
    /**
     * @internal
     */
    GetSuiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteRequest = exports.GetSuiteRequest || (exports.GetSuiteRequest = {}));
var Suite;
(function (Suite) {
    /**
     * @internal
     */
    Suite.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Suite = exports.Suite || (exports.Suite = {}));
var GetSuiteResult;
(function (GetSuiteResult) {
    /**
     * @internal
     */
    GetSuiteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuiteResult = exports.GetSuiteResult || (exports.GetSuiteResult = {}));
var GetTestRequest;
(function (GetTestRequest) {
    /**
     * @internal
     */
    GetTestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestRequest = exports.GetTestRequest || (exports.GetTestRequest = {}));
var Test;
(function (Test) {
    /**
     * @internal
     */
    Test.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Test = exports.Test || (exports.Test = {}));
var GetTestResult;
(function (GetTestResult) {
    /**
     * @internal
     */
    GetTestResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestResult = exports.GetTestResult || (exports.GetTestResult = {}));
var GetTestGridProjectRequest;
(function (GetTestGridProjectRequest) {
    /**
     * @internal
     */
    GetTestGridProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestGridProjectRequest = exports.GetTestGridProjectRequest || (exports.GetTestGridProjectRequest = {}));
var GetTestGridProjectResult;
(function (GetTestGridProjectResult) {
    /**
     * @internal
     */
    GetTestGridProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestGridProjectResult = exports.GetTestGridProjectResult || (exports.GetTestGridProjectResult = {}));
var GetTestGridSessionRequest;
(function (GetTestGridSessionRequest) {
    /**
     * @internal
     */
    GetTestGridSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestGridSessionRequest = exports.GetTestGridSessionRequest || (exports.GetTestGridSessionRequest = {}));
var TestGridSessionStatus;
(function (TestGridSessionStatus) {
    TestGridSessionStatus["ACTIVE"] = "ACTIVE";
    TestGridSessionStatus["CLOSED"] = "CLOSED";
    TestGridSessionStatus["ERRORED"] = "ERRORED";
})(TestGridSessionStatus = exports.TestGridSessionStatus || (exports.TestGridSessionStatus = {}));
var TestGridSession;
(function (TestGridSession) {
    /**
     * @internal
     */
    TestGridSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestGridSession = exports.TestGridSession || (exports.TestGridSession = {}));
var GetTestGridSessionResult;
(function (GetTestGridSessionResult) {
    /**
     * @internal
     */
    GetTestGridSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTestGridSessionResult = exports.GetTestGridSessionResult || (exports.GetTestGridSessionResult = {}));
var GetUploadRequest;
(function (GetUploadRequest) {
    /**
     * @internal
     */
    GetUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUploadRequest = exports.GetUploadRequest || (exports.GetUploadRequest = {}));
var GetUploadResult;
(function (GetUploadResult) {
    /**
     * @internal
     */
    GetUploadResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }),
    });
})(GetUploadResult = exports.GetUploadResult || (exports.GetUploadResult = {}));
var GetVPCEConfigurationRequest;
(function (GetVPCEConfigurationRequest) {
    /**
     * @internal
     */
    GetVPCEConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVPCEConfigurationRequest = exports.GetVPCEConfigurationRequest || (exports.GetVPCEConfigurationRequest = {}));
var GetVPCEConfigurationResult;
(function (GetVPCEConfigurationResult) {
    /**
     * @internal
     */
    GetVPCEConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVPCEConfigurationResult = exports.GetVPCEConfigurationResult || (exports.GetVPCEConfigurationResult = {}));
var InstallToRemoteAccessSessionRequest;
(function (InstallToRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    InstallToRemoteAccessSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallToRemoteAccessSessionRequest = exports.InstallToRemoteAccessSessionRequest || (exports.InstallToRemoteAccessSessionRequest = {}));
var InstallToRemoteAccessSessionResult;
(function (InstallToRemoteAccessSessionResult) {
    /**
     * @internal
     */
    InstallToRemoteAccessSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.appUpload && { appUpload: Upload.filterSensitiveLog(obj.appUpload) }),
    });
})(InstallToRemoteAccessSessionResult = exports.InstallToRemoteAccessSessionResult || (exports.InstallToRemoteAccessSessionResult = {}));
var ListArtifactsRequest;
(function (ListArtifactsRequest) {
    /**
     * @internal
     */
    ListArtifactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArtifactsRequest = exports.ListArtifactsRequest || (exports.ListArtifactsRequest = {}));
var ListArtifactsResult;
(function (ListArtifactsResult) {
    /**
     * @internal
     */
    ListArtifactsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArtifactsResult = exports.ListArtifactsResult || (exports.ListArtifactsResult = {}));
var ListDeviceInstancesRequest;
(function (ListDeviceInstancesRequest) {
    /**
     * @internal
     */
    ListDeviceInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceInstancesRequest = exports.ListDeviceInstancesRequest || (exports.ListDeviceInstancesRequest = {}));
var ListDeviceInstancesResult;
(function (ListDeviceInstancesResult) {
    /**
     * @internal
     */
    ListDeviceInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceInstancesResult = exports.ListDeviceInstancesResult || (exports.ListDeviceInstancesResult = {}));
var ListDevicePoolsRequest;
(function (ListDevicePoolsRequest) {
    /**
     * @internal
     */
    ListDevicePoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicePoolsRequest = exports.ListDevicePoolsRequest || (exports.ListDevicePoolsRequest = {}));
var ListDevicePoolsResult;
(function (ListDevicePoolsResult) {
    /**
     * @internal
     */
    ListDevicePoolsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicePoolsResult = exports.ListDevicePoolsResult || (exports.ListDevicePoolsResult = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResult;
(function (ListDevicesResult) {
    /**
     * @internal
     */
    ListDevicesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesResult = exports.ListDevicesResult || (exports.ListDevicesResult = {}));
var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesRequest = exports.ListInstanceProfilesRequest || (exports.ListInstanceProfilesRequest = {}));
var ListInstanceProfilesResult;
(function (ListInstanceProfilesResult) {
    /**
     * @internal
     */
    ListInstanceProfilesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceProfilesResult = exports.ListInstanceProfilesResult || (exports.ListInstanceProfilesResult = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {}));
var ListNetworkProfilesRequest;
(function (ListNetworkProfilesRequest) {
    /**
     * @internal
     */
    ListNetworkProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNetworkProfilesRequest = exports.ListNetworkProfilesRequest || (exports.ListNetworkProfilesRequest = {}));
var ListNetworkProfilesResult;
(function (ListNetworkProfilesResult) {
    /**
     * @internal
     */
    ListNetworkProfilesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNetworkProfilesResult = exports.ListNetworkProfilesResult || (exports.ListNetworkProfilesResult = {}));
var ListOfferingPromotionsRequest;
(function (ListOfferingPromotionsRequest) {
    /**
     * @internal
     */
    ListOfferingPromotionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingPromotionsRequest = exports.ListOfferingPromotionsRequest || (exports.ListOfferingPromotionsRequest = {}));
var OfferingPromotion;
(function (OfferingPromotion) {
    /**
     * @internal
     */
    OfferingPromotion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OfferingPromotion = exports.OfferingPromotion || (exports.OfferingPromotion = {}));
var ListOfferingPromotionsResult;
(function (ListOfferingPromotionsResult) {
    /**
     * @internal
     */
    ListOfferingPromotionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingPromotionsResult = exports.ListOfferingPromotionsResult || (exports.ListOfferingPromotionsResult = {}));
var ListOfferingsRequest;
(function (ListOfferingsRequest) {
    /**
     * @internal
     */
    ListOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingsRequest = exports.ListOfferingsRequest || (exports.ListOfferingsRequest = {}));
var ListOfferingsResult;
(function (ListOfferingsResult) {
    /**
     * @internal
     */
    ListOfferingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingsResult = exports.ListOfferingsResult || (exports.ListOfferingsResult = {}));
var ListOfferingTransactionsRequest;
(function (ListOfferingTransactionsRequest) {
    /**
     * @internal
     */
    ListOfferingTransactionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingTransactionsRequest = exports.ListOfferingTransactionsRequest || (exports.ListOfferingTransactionsRequest = {}));
var OfferingTransaction;
(function (OfferingTransaction) {
    /**
     * @internal
     */
    OfferingTransaction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OfferingTransaction = exports.OfferingTransaction || (exports.OfferingTransaction = {}));
var ListOfferingTransactionsResult;
(function (ListOfferingTransactionsResult) {
    /**
     * @internal
     */
    ListOfferingTransactionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingTransactionsResult = exports.ListOfferingTransactionsResult || (exports.ListOfferingTransactionsResult = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ListProjectsResult;
(function (ListProjectsResult) {
    /**
     * @internal
     */
    ListProjectsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResult = exports.ListProjectsResult || (exports.ListProjectsResult = {}));
var ListRemoteAccessSessionsRequest;
(function (ListRemoteAccessSessionsRequest) {
    /**
     * @internal
     */
    ListRemoteAccessSessionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRemoteAccessSessionsRequest = exports.ListRemoteAccessSessionsRequest || (exports.ListRemoteAccessSessionsRequest = {}));
var ListRemoteAccessSessionsResult;
(function (ListRemoteAccessSessionsResult) {
    /**
     * @internal
     */
    ListRemoteAccessSessionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRemoteAccessSessionsResult = exports.ListRemoteAccessSessionsResult || (exports.ListRemoteAccessSessionsResult = {}));
var ListRunsRequest;
(function (ListRunsRequest) {
    /**
     * @internal
     */
    ListRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRunsRequest = exports.ListRunsRequest || (exports.ListRunsRequest = {}));
var ListRunsResult;
(function (ListRunsResult) {
    /**
     * @internal
     */
    ListRunsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRunsResult = exports.ListRunsResult || (exports.ListRunsResult = {}));
var ListSamplesRequest;
(function (ListSamplesRequest) {
    /**
     * @internal
     */
    ListSamplesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSamplesRequest = exports.ListSamplesRequest || (exports.ListSamplesRequest = {}));
var SampleType;
(function (SampleType) {
    SampleType["CPU"] = "CPU";
    SampleType["MEMORY"] = "MEMORY";
    SampleType["NATIVE_AVG_DRAWTIME"] = "NATIVE_AVG_DRAWTIME";
    SampleType["NATIVE_FPS"] = "NATIVE_FPS";
    SampleType["NATIVE_FRAMES"] = "NATIVE_FRAMES";
    SampleType["NATIVE_MAX_DRAWTIME"] = "NATIVE_MAX_DRAWTIME";
    SampleType["NATIVE_MIN_DRAWTIME"] = "NATIVE_MIN_DRAWTIME";
    SampleType["OPENGL_AVG_DRAWTIME"] = "OPENGL_AVG_DRAWTIME";
    SampleType["OPENGL_FPS"] = "OPENGL_FPS";
    SampleType["OPENGL_FRAMES"] = "OPENGL_FRAMES";
    SampleType["OPENGL_MAX_DRAWTIME"] = "OPENGL_MAX_DRAWTIME";
    SampleType["OPENGL_MIN_DRAWTIME"] = "OPENGL_MIN_DRAWTIME";
    SampleType["RX"] = "RX";
    SampleType["RX_RATE"] = "RX_RATE";
    SampleType["THREADS"] = "THREADS";
    SampleType["TX"] = "TX";
    SampleType["TX_RATE"] = "TX_RATE";
})(SampleType = exports.SampleType || (exports.SampleType = {}));
var Sample;
(function (Sample) {
    /**
     * @internal
     */
    Sample.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sample = exports.Sample || (exports.Sample = {}));
var ListSamplesResult;
(function (ListSamplesResult) {
    /**
     * @internal
     */
    ListSamplesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSamplesResult = exports.ListSamplesResult || (exports.ListSamplesResult = {}));
var ListSuitesRequest;
(function (ListSuitesRequest) {
    /**
     * @internal
     */
    ListSuitesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuitesRequest = exports.ListSuitesRequest || (exports.ListSuitesRequest = {}));
var ListSuitesResult;
(function (ListSuitesResult) {
    /**
     * @internal
     */
    ListSuitesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuitesResult = exports.ListSuitesResult || (exports.ListSuitesResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListTestGridProjectsRequest;
(function (ListTestGridProjectsRequest) {
    /**
     * @internal
     */
    ListTestGridProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridProjectsRequest = exports.ListTestGridProjectsRequest || (exports.ListTestGridProjectsRequest = {}));
var ListTestGridProjectsResult;
(function (ListTestGridProjectsResult) {
    /**
     * @internal
     */
    ListTestGridProjectsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridProjectsResult = exports.ListTestGridProjectsResult || (exports.ListTestGridProjectsResult = {}));
var ListTestGridSessionActionsRequest;
(function (ListTestGridSessionActionsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionActionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridSessionActionsRequest = exports.ListTestGridSessionActionsRequest || (exports.ListTestGridSessionActionsRequest = {}));
var TestGridSessionAction;
(function (TestGridSessionAction) {
    /**
     * @internal
     */
    TestGridSessionAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestGridSessionAction = exports.TestGridSessionAction || (exports.TestGridSessionAction = {}));
var ListTestGridSessionActionsResult;
(function (ListTestGridSessionActionsResult) {
    /**
     * @internal
     */
    ListTestGridSessionActionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridSessionActionsResult = exports.ListTestGridSessionActionsResult || (exports.ListTestGridSessionActionsResult = {}));
var TestGridSessionArtifactCategory;
(function (TestGridSessionArtifactCategory) {
    TestGridSessionArtifactCategory["LOG"] = "LOG";
    TestGridSessionArtifactCategory["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactCategory = exports.TestGridSessionArtifactCategory || (exports.TestGridSessionArtifactCategory = {}));
var ListTestGridSessionArtifactsRequest;
(function (ListTestGridSessionArtifactsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionArtifactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridSessionArtifactsRequest = exports.ListTestGridSessionArtifactsRequest || (exports.ListTestGridSessionArtifactsRequest = {}));
var TestGridSessionArtifactType;
(function (TestGridSessionArtifactType) {
    TestGridSessionArtifactType["SELENIUM_LOG"] = "SELENIUM_LOG";
    TestGridSessionArtifactType["UNKNOWN"] = "UNKNOWN";
    TestGridSessionArtifactType["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactType = exports.TestGridSessionArtifactType || (exports.TestGridSessionArtifactType = {}));
var TestGridSessionArtifact;
(function (TestGridSessionArtifact) {
    /**
     * @internal
     */
    TestGridSessionArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.url && { url: smithy_client_1.SENSITIVE_STRING }),
    });
})(TestGridSessionArtifact = exports.TestGridSessionArtifact || (exports.TestGridSessionArtifact = {}));
var ListTestGridSessionArtifactsResult;
(function (ListTestGridSessionArtifactsResult) {
    /**
     * @internal
     */
    ListTestGridSessionArtifactsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.artifacts && { artifacts: obj.artifacts.map((item) => TestGridSessionArtifact.filterSensitiveLog(item)) }),
    });
})(ListTestGridSessionArtifactsResult = exports.ListTestGridSessionArtifactsResult || (exports.ListTestGridSessionArtifactsResult = {}));
var ListTestGridSessionsRequest;
(function (ListTestGridSessionsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridSessionsRequest = exports.ListTestGridSessionsRequest || (exports.ListTestGridSessionsRequest = {}));
var ListTestGridSessionsResult;
(function (ListTestGridSessionsResult) {
    /**
     * @internal
     */
    ListTestGridSessionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestGridSessionsResult = exports.ListTestGridSessionsResult || (exports.ListTestGridSessionsResult = {}));
var ListTestsRequest;
(function (ListTestsRequest) {
    /**
     * @internal
     */
    ListTestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestsRequest = exports.ListTestsRequest || (exports.ListTestsRequest = {}));
var ListTestsResult;
(function (ListTestsResult) {
    /**
     * @internal
     */
    ListTestsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTestsResult = exports.ListTestsResult || (exports.ListTestsResult = {}));
var ListUniqueProblemsRequest;
(function (ListUniqueProblemsRequest) {
    /**
     * @internal
     */
    ListUniqueProblemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUniqueProblemsRequest = exports.ListUniqueProblemsRequest || (exports.ListUniqueProblemsRequest = {}));
var ProblemDetail;
(function (ProblemDetail) {
    /**
     * @internal
     */
    ProblemDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProblemDetail = exports.ProblemDetail || (exports.ProblemDetail = {}));
var Problem;
(function (Problem) {
    /**
     * @internal
     */
    Problem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Problem = exports.Problem || (exports.Problem = {}));
var UniqueProblem;
(function (UniqueProblem) {
    /**
     * @internal
     */
    UniqueProblem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UniqueProblem = exports.UniqueProblem || (exports.UniqueProblem = {}));
var ListUniqueProblemsResult;
(function (ListUniqueProblemsResult) {
    /**
     * @internal
     */
    ListUniqueProblemsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUniqueProblemsResult = exports.ListUniqueProblemsResult || (exports.ListUniqueProblemsResult = {}));
var ListUploadsRequest;
(function (ListUploadsRequest) {
    /**
     * @internal
     */
    ListUploadsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUploadsRequest = exports.ListUploadsRequest || (exports.ListUploadsRequest = {}));
var ListUploadsResult;
(function (ListUploadsResult) {
    /**
     * @internal
     */
    ListUploadsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.uploads && { uploads: obj.uploads.map((item) => Upload.filterSensitiveLog(item)) }),
    });
})(ListUploadsResult = exports.ListUploadsResult || (exports.ListUploadsResult = {}));
var ListVPCEConfigurationsRequest;
(function (ListVPCEConfigurationsRequest) {
    /**
     * @internal
     */
    ListVPCEConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVPCEConfigurationsRequest = exports.ListVPCEConfigurationsRequest || (exports.ListVPCEConfigurationsRequest = {}));
var ListVPCEConfigurationsResult;
(function (ListVPCEConfigurationsResult) {
    /**
     * @internal
     */
    ListVPCEConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVPCEConfigurationsResult = exports.ListVPCEConfigurationsResult || (exports.ListVPCEConfigurationsResult = {}));
var PurchaseOfferingRequest;
(function (PurchaseOfferingRequest) {
    /**
     * @internal
     */
    PurchaseOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseOfferingRequest = exports.PurchaseOfferingRequest || (exports.PurchaseOfferingRequest = {}));
var PurchaseOfferingResult;
(function (PurchaseOfferingResult) {
    /**
     * @internal
     */
    PurchaseOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseOfferingResult = exports.PurchaseOfferingResult || (exports.PurchaseOfferingResult = {}));
var RenewOfferingRequest;
(function (RenewOfferingRequest) {
    /**
     * @internal
     */
    RenewOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenewOfferingRequest = exports.RenewOfferingRequest || (exports.RenewOfferingRequest = {}));
var RenewOfferingResult;
(function (RenewOfferingResult) {
    /**
     * @internal
     */
    RenewOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenewOfferingResult = exports.RenewOfferingResult || (exports.RenewOfferingResult = {}));
var IdempotencyException;
(function (IdempotencyException) {
    /**
     * @internal
     */
    IdempotencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotencyException = exports.IdempotencyException || (exports.IdempotencyException = {}));
var DeviceSelectionConfiguration;
(function (DeviceSelectionConfiguration) {
    /**
     * @internal
     */
    DeviceSelectionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceSelectionConfiguration = exports.DeviceSelectionConfiguration || (exports.DeviceSelectionConfiguration = {}));
var ExecutionConfiguration;
(function (ExecutionConfiguration) {
    /**
     * @internal
     */
    ExecutionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionConfiguration = exports.ExecutionConfiguration || (exports.ExecutionConfiguration = {}));
var ScheduleRunRequest;
(function (ScheduleRunRequest) {
    /**
     * @internal
     */
    ScheduleRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleRunRequest = exports.ScheduleRunRequest || (exports.ScheduleRunRequest = {}));
var ScheduleRunResult;
(function (ScheduleRunResult) {
    /**
     * @internal
     */
    ScheduleRunResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleRunResult = exports.ScheduleRunResult || (exports.ScheduleRunResult = {}));
var StopJobRequest;
(function (StopJobRequest) {
    /**
     * @internal
     */
    StopJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopJobRequest = exports.StopJobRequest || (exports.StopJobRequest = {}));
var StopJobResult;
(function (StopJobResult) {
    /**
     * @internal
     */
    StopJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopJobResult = exports.StopJobResult || (exports.StopJobResult = {}));
var StopRemoteAccessSessionRequest;
(function (StopRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    StopRemoteAccessSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRemoteAccessSessionRequest = exports.StopRemoteAccessSessionRequest || (exports.StopRemoteAccessSessionRequest = {}));
var StopRemoteAccessSessionResult;
(function (StopRemoteAccessSessionResult) {
    /**
     * @internal
     */
    StopRemoteAccessSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRemoteAccessSessionResult = exports.StopRemoteAccessSessionResult || (exports.StopRemoteAccessSessionResult = {}));
var StopRunRequest;
(function (StopRunRequest) {
    /**
     * @internal
     */
    StopRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRunRequest = exports.StopRunRequest || (exports.StopRunRequest = {}));
var StopRunResult;
(function (StopRunResult) {
    /**
     * @internal
     */
    StopRunResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRunResult = exports.StopRunResult || (exports.StopRunResult = {}));
var TagPolicyException;
(function (TagPolicyException) {
    /**
     * @internal
     */
    TagPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
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
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
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
var UpdateDeviceInstanceRequest;
(function (UpdateDeviceInstanceRequest) {
    /**
     * @internal
     */
    UpdateDeviceInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceInstanceRequest = exports.UpdateDeviceInstanceRequest || (exports.UpdateDeviceInstanceRequest = {}));
var UpdateDeviceInstanceResult;
(function (UpdateDeviceInstanceResult) {
    /**
     * @internal
     */
    UpdateDeviceInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceInstanceResult = exports.UpdateDeviceInstanceResult || (exports.UpdateDeviceInstanceResult = {}));
var UpdateDevicePoolRequest;
(function (UpdateDevicePoolRequest) {
    /**
     * @internal
     */
    UpdateDevicePoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevicePoolRequest = exports.UpdateDevicePoolRequest || (exports.UpdateDevicePoolRequest = {}));
var UpdateDevicePoolResult;
(function (UpdateDevicePoolResult) {
    /**
     * @internal
     */
    UpdateDevicePoolResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevicePoolResult = exports.UpdateDevicePoolResult || (exports.UpdateDevicePoolResult = {}));
var UpdateInstanceProfileRequest;
(function (UpdateInstanceProfileRequest) {
    /**
     * @internal
     */
    UpdateInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceProfileRequest = exports.UpdateInstanceProfileRequest || (exports.UpdateInstanceProfileRequest = {}));
var UpdateInstanceProfileResult;
(function (UpdateInstanceProfileResult) {
    /**
     * @internal
     */
    UpdateInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceProfileResult = exports.UpdateInstanceProfileResult || (exports.UpdateInstanceProfileResult = {}));
var UpdateNetworkProfileRequest;
(function (UpdateNetworkProfileRequest) {
    /**
     * @internal
     */
    UpdateNetworkProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNetworkProfileRequest = exports.UpdateNetworkProfileRequest || (exports.UpdateNetworkProfileRequest = {}));
var UpdateNetworkProfileResult;
(function (UpdateNetworkProfileResult) {
    /**
     * @internal
     */
    UpdateNetworkProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNetworkProfileResult = exports.UpdateNetworkProfileResult || (exports.UpdateNetworkProfileResult = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResult;
(function (UpdateProjectResult) {
    /**
     * @internal
     */
    UpdateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResult = exports.UpdateProjectResult || (exports.UpdateProjectResult = {}));
var UpdateTestGridProjectRequest;
(function (UpdateTestGridProjectRequest) {
    /**
     * @internal
     */
    UpdateTestGridProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTestGridProjectRequest = exports.UpdateTestGridProjectRequest || (exports.UpdateTestGridProjectRequest = {}));
var UpdateTestGridProjectResult;
(function (UpdateTestGridProjectResult) {
    /**
     * @internal
     */
    UpdateTestGridProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTestGridProjectResult = exports.UpdateTestGridProjectResult || (exports.UpdateTestGridProjectResult = {}));
var UpdateUploadRequest;
(function (UpdateUploadRequest) {
    /**
     * @internal
     */
    UpdateUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUploadRequest = exports.UpdateUploadRequest || (exports.UpdateUploadRequest = {}));
var UpdateUploadResult;
(function (UpdateUploadResult) {
    /**
     * @internal
     */
    UpdateUploadResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }),
    });
})(UpdateUploadResult = exports.UpdateUploadResult || (exports.UpdateUploadResult = {}));
var UpdateVPCEConfigurationRequest;
(function (UpdateVPCEConfigurationRequest) {
    /**
     * @internal
     */
    UpdateVPCEConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVPCEConfigurationRequest = exports.UpdateVPCEConfigurationRequest || (exports.UpdateVPCEConfigurationRequest = {}));
var UpdateVPCEConfigurationResult;
(function (UpdateVPCEConfigurationResult) {
    /**
     * @internal
     */
    UpdateVPCEConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVPCEConfigurationResult = exports.UpdateVPCEConfigurationResult || (exports.UpdateVPCEConfigurationResult = {}));
//# sourceMappingURL=models_0.js.map