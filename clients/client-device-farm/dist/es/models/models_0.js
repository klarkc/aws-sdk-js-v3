import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var TrialMinutes;
(function (TrialMinutes) {
    /**
     * @internal
     */
    TrialMinutes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrialMinutes || (TrialMinutes = {}));
export var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["ANDROID"] = "ANDROID";
    DevicePlatform["IOS"] = "IOS";
})(DevicePlatform || (DevicePlatform = {}));
export var AccountSettings;
(function (AccountSettings) {
    /**
     * @internal
     */
    AccountSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountSettings || (AccountSettings = {}));
export var ArgumentException;
(function (ArgumentException) {
    /**
     * @internal
     */
    ArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArgumentException || (ArgumentException = {}));
export var ArtifactType;
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
})(ArtifactType || (ArtifactType = {}));
export var Artifact;
(function (Artifact) {
    /**
     * @internal
     */
    Artifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Artifact || (Artifact = {}));
export var ArtifactCategory;
(function (ArtifactCategory) {
    ArtifactCategory["FILE"] = "FILE";
    ArtifactCategory["LOG"] = "LOG";
    ArtifactCategory["SCREENSHOT"] = "SCREENSHOT";
})(ArtifactCategory || (ArtifactCategory = {}));
export var BillingMethod;
(function (BillingMethod) {
    BillingMethod["METERED"] = "METERED";
    BillingMethod["UNMETERED"] = "UNMETERED";
})(BillingMethod || (BillingMethod = {}));
export var CannotDeleteException;
(function (CannotDeleteException) {
    /**
     * @internal
     */
    CannotDeleteException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CannotDeleteException || (CannotDeleteException = {}));
export var Counters;
(function (Counters) {
    /**
     * @internal
     */
    Counters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Counters || (Counters = {}));
export var CPU;
(function (CPU) {
    /**
     * @internal
     */
    CPU.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CPU || (CPU = {}));
export var DeviceAttribute;
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
})(DeviceAttribute || (DeviceAttribute = {}));
export var RuleOperator;
(function (RuleOperator) {
    RuleOperator["CONTAINS"] = "CONTAINS";
    RuleOperator["EQUALS"] = "EQUALS";
    RuleOperator["GREATER_THAN"] = "GREATER_THAN";
    RuleOperator["GREATER_THAN_OR_EQUALS"] = "GREATER_THAN_OR_EQUALS";
    RuleOperator["IN"] = "IN";
    RuleOperator["LESS_THAN"] = "LESS_THAN";
    RuleOperator["LESS_THAN_OR_EQUALS"] = "LESS_THAN_OR_EQUALS";
    RuleOperator["NOT_IN"] = "NOT_IN";
})(RuleOperator || (RuleOperator = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var CreateDevicePoolRequest;
(function (CreateDevicePoolRequest) {
    /**
     * @internal
     */
    CreateDevicePoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDevicePoolRequest || (CreateDevicePoolRequest = {}));
export var DevicePoolType;
(function (DevicePoolType) {
    DevicePoolType["CURATED"] = "CURATED";
    DevicePoolType["PRIVATE"] = "PRIVATE";
})(DevicePoolType || (DevicePoolType = {}));
export var DevicePool;
(function (DevicePool) {
    /**
     * @internal
     */
    DevicePool.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DevicePool || (DevicePool = {}));
export var CreateDevicePoolResult;
(function (CreateDevicePoolResult) {
    /**
     * @internal
     */
    CreateDevicePoolResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDevicePoolResult || (CreateDevicePoolResult = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var ServiceAccountException;
(function (ServiceAccountException) {
    /**
     * @internal
     */
    ServiceAccountException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceAccountException || (ServiceAccountException = {}));
export var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    /**
     * @internal
     */
    CreateInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceProfileRequest || (CreateInstanceProfileRequest = {}));
export var InstanceProfile;
(function (InstanceProfile) {
    /**
     * @internal
     */
    InstanceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceProfile || (InstanceProfile = {}));
export var CreateInstanceProfileResult;
(function (CreateInstanceProfileResult) {
    /**
     * @internal
     */
    CreateInstanceProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceProfileResult || (CreateInstanceProfileResult = {}));
export var NetworkProfileType;
(function (NetworkProfileType) {
    NetworkProfileType["CURATED"] = "CURATED";
    NetworkProfileType["PRIVATE"] = "PRIVATE";
})(NetworkProfileType || (NetworkProfileType = {}));
export var CreateNetworkProfileRequest;
(function (CreateNetworkProfileRequest) {
    /**
     * @internal
     */
    CreateNetworkProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNetworkProfileRequest || (CreateNetworkProfileRequest = {}));
export var NetworkProfile;
(function (NetworkProfile) {
    /**
     * @internal
     */
    NetworkProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkProfile || (NetworkProfile = {}));
export var CreateNetworkProfileResult;
(function (CreateNetworkProfileResult) {
    /**
     * @internal
     */
    CreateNetworkProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNetworkProfileResult || (CreateNetworkProfileResult = {}));
export var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectRequest || (CreateProjectRequest = {}));
export var Project;
(function (Project) {
    /**
     * @internal
     */
    Project.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Project || (Project = {}));
export var CreateProjectResult;
(function (CreateProjectResult) {
    /**
     * @internal
     */
    CreateProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectResult || (CreateProjectResult = {}));
export var TagOperationException;
(function (TagOperationException) {
    /**
     * @internal
     */
    TagOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagOperationException || (TagOperationException = {}));
export var CreateRemoteAccessSessionConfiguration;
(function (CreateRemoteAccessSessionConfiguration) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRemoteAccessSessionConfiguration || (CreateRemoteAccessSessionConfiguration = {}));
export var InteractionMode;
(function (InteractionMode) {
    InteractionMode["INTERACTIVE"] = "INTERACTIVE";
    InteractionMode["NO_VIDEO"] = "NO_VIDEO";
    InteractionMode["VIDEO_ONLY"] = "VIDEO_ONLY";
})(InteractionMode || (InteractionMode = {}));
export var CreateRemoteAccessSessionRequest;
(function (CreateRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRemoteAccessSessionRequest || (CreateRemoteAccessSessionRequest = {}));
export var DeviceAvailability;
(function (DeviceAvailability) {
    DeviceAvailability["AVAILABLE"] = "AVAILABLE";
    DeviceAvailability["BUSY"] = "BUSY";
    DeviceAvailability["HIGHLY_AVAILABLE"] = "HIGHLY_AVAILABLE";
    DeviceAvailability["TEMPORARY_NOT_AVAILABLE"] = "TEMPORARY_NOT_AVAILABLE";
})(DeviceAvailability || (DeviceAvailability = {}));
export var DeviceFormFactor;
(function (DeviceFormFactor) {
    DeviceFormFactor["PHONE"] = "PHONE";
    DeviceFormFactor["TABLET"] = "TABLET";
})(DeviceFormFactor || (DeviceFormFactor = {}));
export var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["AVAILABLE"] = "AVAILABLE";
    InstanceStatus["IN_USE"] = "IN_USE";
    InstanceStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
    InstanceStatus["PREPARING"] = "PREPARING";
})(InstanceStatus || (InstanceStatus = {}));
export var DeviceInstance;
(function (DeviceInstance) {
    /**
     * @internal
     */
    DeviceInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceInstance || (DeviceInstance = {}));
export var Resolution;
(function (Resolution) {
    /**
     * @internal
     */
    Resolution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Resolution || (Resolution = {}));
export var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Device || (Device = {}));
export var DeviceMinutes;
(function (DeviceMinutes) {
    /**
     * @internal
     */
    DeviceMinutes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceMinutes || (DeviceMinutes = {}));
export var ExecutionResult;
(function (ExecutionResult) {
    ExecutionResult["ERRORED"] = "ERRORED";
    ExecutionResult["FAILED"] = "FAILED";
    ExecutionResult["PASSED"] = "PASSED";
    ExecutionResult["PENDING"] = "PENDING";
    ExecutionResult["SKIPPED"] = "SKIPPED";
    ExecutionResult["STOPPED"] = "STOPPED";
    ExecutionResult["WARNED"] = "WARNED";
})(ExecutionResult || (ExecutionResult = {}));
export var ExecutionStatus;
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
})(ExecutionStatus || (ExecutionStatus = {}));
export var RemoteAccessSession;
(function (RemoteAccessSession) {
    /**
     * @internal
     */
    RemoteAccessSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoteAccessSession || (RemoteAccessSession = {}));
export var CreateRemoteAccessSessionResult;
(function (CreateRemoteAccessSessionResult) {
    /**
     * @internal
     */
    CreateRemoteAccessSessionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRemoteAccessSessionResult || (CreateRemoteAccessSessionResult = {}));
export var TestGridVpcConfig;
(function (TestGridVpcConfig) {
    /**
     * @internal
     */
    TestGridVpcConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestGridVpcConfig || (TestGridVpcConfig = {}));
export var CreateTestGridProjectRequest;
(function (CreateTestGridProjectRequest) {
    /**
     * @internal
     */
    CreateTestGridProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTestGridProjectRequest || (CreateTestGridProjectRequest = {}));
export var TestGridProject;
(function (TestGridProject) {
    /**
     * @internal
     */
    TestGridProject.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestGridProject || (TestGridProject = {}));
export var CreateTestGridProjectResult;
(function (CreateTestGridProjectResult) {
    /**
     * @internal
     */
    CreateTestGridProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTestGridProjectResult || (CreateTestGridProjectResult = {}));
export var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceException || (InternalServiceException = {}));
export var CreateTestGridUrlRequest;
(function (CreateTestGridUrlRequest) {
    /**
     * @internal
     */
    CreateTestGridUrlRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTestGridUrlRequest || (CreateTestGridUrlRequest = {}));
export var CreateTestGridUrlResult;
(function (CreateTestGridUrlResult) {
    /**
     * @internal
     */
    CreateTestGridUrlResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.url && { url: SENSITIVE_STRING }))); };
})(CreateTestGridUrlResult || (CreateTestGridUrlResult = {}));
export var UploadType;
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
})(UploadType || (UploadType = {}));
export var CreateUploadRequest;
(function (CreateUploadRequest) {
    /**
     * @internal
     */
    CreateUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUploadRequest || (CreateUploadRequest = {}));
export var UploadCategory;
(function (UploadCategory) {
    UploadCategory["CURATED"] = "CURATED";
    UploadCategory["PRIVATE"] = "PRIVATE";
})(UploadCategory || (UploadCategory = {}));
export var UploadStatus;
(function (UploadStatus) {
    UploadStatus["FAILED"] = "FAILED";
    UploadStatus["INITIALIZED"] = "INITIALIZED";
    UploadStatus["PROCESSING"] = "PROCESSING";
    UploadStatus["SUCCEEDED"] = "SUCCEEDED";
})(UploadStatus || (UploadStatus = {}));
export var Upload;
(function (Upload) {
    /**
     * @internal
     */
    Upload.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.url && { url: SENSITIVE_STRING }))); };
})(Upload || (Upload = {}));
export var CreateUploadResult;
(function (CreateUploadResult) {
    /**
     * @internal
     */
    CreateUploadResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }))); };
})(CreateUploadResult || (CreateUploadResult = {}));
export var CreateVPCEConfigurationRequest;
(function (CreateVPCEConfigurationRequest) {
    /**
     * @internal
     */
    CreateVPCEConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVPCEConfigurationRequest || (CreateVPCEConfigurationRequest = {}));
export var VPCEConfiguration;
(function (VPCEConfiguration) {
    /**
     * @internal
     */
    VPCEConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCEConfiguration || (VPCEConfiguration = {}));
export var CreateVPCEConfigurationResult;
(function (CreateVPCEConfigurationResult) {
    /**
     * @internal
     */
    CreateVPCEConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVPCEConfigurationResult || (CreateVPCEConfigurationResult = {}));
export var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["USD"] = "USD";
})(CurrencyCode || (CurrencyCode = {}));
export var CustomerArtifactPaths;
(function (CustomerArtifactPaths) {
    /**
     * @internal
     */
    CustomerArtifactPaths.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomerArtifactPaths || (CustomerArtifactPaths = {}));
export var DeleteDevicePoolRequest;
(function (DeleteDevicePoolRequest) {
    /**
     * @internal
     */
    DeleteDevicePoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDevicePoolRequest || (DeleteDevicePoolRequest = {}));
export var DeleteDevicePoolResult;
(function (DeleteDevicePoolResult) {
    /**
     * @internal
     */
    DeleteDevicePoolResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDevicePoolResult || (DeleteDevicePoolResult = {}));
export var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    /**
     * @internal
     */
    DeleteInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceProfileRequest || (DeleteInstanceProfileRequest = {}));
export var DeleteInstanceProfileResult;
(function (DeleteInstanceProfileResult) {
    /**
     * @internal
     */
    DeleteInstanceProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceProfileResult || (DeleteInstanceProfileResult = {}));
export var DeleteNetworkProfileRequest;
(function (DeleteNetworkProfileRequest) {
    /**
     * @internal
     */
    DeleteNetworkProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNetworkProfileRequest || (DeleteNetworkProfileRequest = {}));
export var DeleteNetworkProfileResult;
(function (DeleteNetworkProfileResult) {
    /**
     * @internal
     */
    DeleteNetworkProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNetworkProfileResult || (DeleteNetworkProfileResult = {}));
export var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectRequest || (DeleteProjectRequest = {}));
export var DeleteProjectResult;
(function (DeleteProjectResult) {
    /**
     * @internal
     */
    DeleteProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectResult || (DeleteProjectResult = {}));
export var DeleteRemoteAccessSessionRequest;
(function (DeleteRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    DeleteRemoteAccessSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRemoteAccessSessionRequest || (DeleteRemoteAccessSessionRequest = {}));
export var DeleteRemoteAccessSessionResult;
(function (DeleteRemoteAccessSessionResult) {
    /**
     * @internal
     */
    DeleteRemoteAccessSessionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRemoteAccessSessionResult || (DeleteRemoteAccessSessionResult = {}));
export var DeleteRunRequest;
(function (DeleteRunRequest) {
    /**
     * @internal
     */
    DeleteRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRunRequest || (DeleteRunRequest = {}));
export var DeleteRunResult;
(function (DeleteRunResult) {
    /**
     * @internal
     */
    DeleteRunResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRunResult || (DeleteRunResult = {}));
export var DeleteTestGridProjectRequest;
(function (DeleteTestGridProjectRequest) {
    /**
     * @internal
     */
    DeleteTestGridProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTestGridProjectRequest || (DeleteTestGridProjectRequest = {}));
export var DeleteTestGridProjectResult;
(function (DeleteTestGridProjectResult) {
    /**
     * @internal
     */
    DeleteTestGridProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTestGridProjectResult || (DeleteTestGridProjectResult = {}));
export var DeleteUploadRequest;
(function (DeleteUploadRequest) {
    /**
     * @internal
     */
    DeleteUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUploadRequest || (DeleteUploadRequest = {}));
export var DeleteUploadResult;
(function (DeleteUploadResult) {
    /**
     * @internal
     */
    DeleteUploadResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUploadResult || (DeleteUploadResult = {}));
export var DeleteVPCEConfigurationRequest;
(function (DeleteVPCEConfigurationRequest) {
    /**
     * @internal
     */
    DeleteVPCEConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVPCEConfigurationRequest || (DeleteVPCEConfigurationRequest = {}));
export var DeleteVPCEConfigurationResult;
(function (DeleteVPCEConfigurationResult) {
    /**
     * @internal
     */
    DeleteVPCEConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVPCEConfigurationResult || (DeleteVPCEConfigurationResult = {}));
export var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOperationException || (InvalidOperationException = {}));
export var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
    /**
     * @internal
     */
    GetAccountSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountSettingsRequest || (GetAccountSettingsRequest = {}));
export var GetAccountSettingsResult;
(function (GetAccountSettingsResult) {
    /**
     * @internal
     */
    GetAccountSettingsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountSettingsResult || (GetAccountSettingsResult = {}));
export var GetDeviceRequest;
(function (GetDeviceRequest) {
    /**
     * @internal
     */
    GetDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceRequest || (GetDeviceRequest = {}));
export var GetDeviceResult;
(function (GetDeviceResult) {
    /**
     * @internal
     */
    GetDeviceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceResult || (GetDeviceResult = {}));
export var GetDeviceInstanceRequest;
(function (GetDeviceInstanceRequest) {
    /**
     * @internal
     */
    GetDeviceInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceInstanceRequest || (GetDeviceInstanceRequest = {}));
export var GetDeviceInstanceResult;
(function (GetDeviceInstanceResult) {
    /**
     * @internal
     */
    GetDeviceInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceInstanceResult || (GetDeviceInstanceResult = {}));
export var GetDevicePoolRequest;
(function (GetDevicePoolRequest) {
    /**
     * @internal
     */
    GetDevicePoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePoolRequest || (GetDevicePoolRequest = {}));
export var GetDevicePoolResult;
(function (GetDevicePoolResult) {
    /**
     * @internal
     */
    GetDevicePoolResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePoolResult || (GetDevicePoolResult = {}));
export var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Location || (Location = {}));
export var Radios;
(function (Radios) {
    /**
     * @internal
     */
    Radios.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Radios || (Radios = {}));
export var ScheduleRunConfiguration;
(function (ScheduleRunConfiguration) {
    /**
     * @internal
     */
    ScheduleRunConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleRunConfiguration || (ScheduleRunConfiguration = {}));
export var TestType;
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
})(TestType || (TestType = {}));
export var ScheduleRunTest;
(function (ScheduleRunTest) {
    /**
     * @internal
     */
    ScheduleRunTest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleRunTest || (ScheduleRunTest = {}));
export var GetDevicePoolCompatibilityRequest;
(function (GetDevicePoolCompatibilityRequest) {
    /**
     * @internal
     */
    GetDevicePoolCompatibilityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePoolCompatibilityRequest || (GetDevicePoolCompatibilityRequest = {}));
export var IncompatibilityMessage;
(function (IncompatibilityMessage) {
    /**
     * @internal
     */
    IncompatibilityMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncompatibilityMessage || (IncompatibilityMessage = {}));
export var DevicePoolCompatibilityResult;
(function (DevicePoolCompatibilityResult) {
    /**
     * @internal
     */
    DevicePoolCompatibilityResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DevicePoolCompatibilityResult || (DevicePoolCompatibilityResult = {}));
export var GetDevicePoolCompatibilityResult;
(function (GetDevicePoolCompatibilityResult) {
    /**
     * @internal
     */
    GetDevicePoolCompatibilityResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePoolCompatibilityResult || (GetDevicePoolCompatibilityResult = {}));
export var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    /**
     * @internal
     */
    GetInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceProfileRequest || (GetInstanceProfileRequest = {}));
export var GetInstanceProfileResult;
(function (GetInstanceProfileResult) {
    /**
     * @internal
     */
    GetInstanceProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceProfileResult || (GetInstanceProfileResult = {}));
export var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobRequest || (GetJobRequest = {}));
export var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Job || (Job = {}));
export var GetJobResult;
(function (GetJobResult) {
    /**
     * @internal
     */
    GetJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobResult || (GetJobResult = {}));
export var GetNetworkProfileRequest;
(function (GetNetworkProfileRequest) {
    /**
     * @internal
     */
    GetNetworkProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNetworkProfileRequest || (GetNetworkProfileRequest = {}));
export var GetNetworkProfileResult;
(function (GetNetworkProfileResult) {
    /**
     * @internal
     */
    GetNetworkProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNetworkProfileResult || (GetNetworkProfileResult = {}));
export var GetOfferingStatusRequest;
(function (GetOfferingStatusRequest) {
    /**
     * @internal
     */
    GetOfferingStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOfferingStatusRequest || (GetOfferingStatusRequest = {}));
export var MonetaryAmount;
(function (MonetaryAmount) {
    /**
     * @internal
     */
    MonetaryAmount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonetaryAmount || (MonetaryAmount = {}));
export var RecurringChargeFrequency;
(function (RecurringChargeFrequency) {
    RecurringChargeFrequency["MONTHLY"] = "MONTHLY";
})(RecurringChargeFrequency || (RecurringChargeFrequency = {}));
export var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecurringCharge || (RecurringCharge = {}));
export var OfferingType;
(function (OfferingType) {
    OfferingType["RECURRING"] = "RECURRING";
})(OfferingType || (OfferingType = {}));
export var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Offering || (Offering = {}));
export var OfferingTransactionType;
(function (OfferingTransactionType) {
    OfferingTransactionType["PURCHASE"] = "PURCHASE";
    OfferingTransactionType["RENEW"] = "RENEW";
    OfferingTransactionType["SYSTEM"] = "SYSTEM";
})(OfferingTransactionType || (OfferingTransactionType = {}));
export var OfferingStatus;
(function (OfferingStatus) {
    /**
     * @internal
     */
    OfferingStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OfferingStatus || (OfferingStatus = {}));
export var GetOfferingStatusResult;
(function (GetOfferingStatusResult) {
    /**
     * @internal
     */
    GetOfferingStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOfferingStatusResult || (GetOfferingStatusResult = {}));
export var NotEligibleException;
(function (NotEligibleException) {
    /**
     * @internal
     */
    NotEligibleException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotEligibleException || (NotEligibleException = {}));
export var GetProjectRequest;
(function (GetProjectRequest) {
    /**
     * @internal
     */
    GetProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProjectRequest || (GetProjectRequest = {}));
export var GetProjectResult;
(function (GetProjectResult) {
    /**
     * @internal
     */
    GetProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProjectResult || (GetProjectResult = {}));
export var GetRemoteAccessSessionRequest;
(function (GetRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    GetRemoteAccessSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRemoteAccessSessionRequest || (GetRemoteAccessSessionRequest = {}));
export var GetRemoteAccessSessionResult;
(function (GetRemoteAccessSessionResult) {
    /**
     * @internal
     */
    GetRemoteAccessSessionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRemoteAccessSessionResult || (GetRemoteAccessSessionResult = {}));
export var GetRunRequest;
(function (GetRunRequest) {
    /**
     * @internal
     */
    GetRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRunRequest || (GetRunRequest = {}));
export var DeviceFilterAttribute;
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
})(DeviceFilterAttribute || (DeviceFilterAttribute = {}));
export var DeviceFilter;
(function (DeviceFilter) {
    /**
     * @internal
     */
    DeviceFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceFilter || (DeviceFilter = {}));
export var DeviceSelectionResult;
(function (DeviceSelectionResult) {
    /**
     * @internal
     */
    DeviceSelectionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceSelectionResult || (DeviceSelectionResult = {}));
export var ExecutionResultCode;
(function (ExecutionResultCode) {
    ExecutionResultCode["PARSING_FAILED"] = "PARSING_FAILED";
    ExecutionResultCode["VPC_ENDPOINT_SETUP_FAILED"] = "VPC_ENDPOINT_SETUP_FAILED";
})(ExecutionResultCode || (ExecutionResultCode = {}));
export var Run;
(function (Run) {
    /**
     * @internal
     */
    Run.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Run || (Run = {}));
export var GetRunResult;
(function (GetRunResult) {
    /**
     * @internal
     */
    GetRunResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRunResult || (GetRunResult = {}));
export var GetSuiteRequest;
(function (GetSuiteRequest) {
    /**
     * @internal
     */
    GetSuiteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSuiteRequest || (GetSuiteRequest = {}));
export var Suite;
(function (Suite) {
    /**
     * @internal
     */
    Suite.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Suite || (Suite = {}));
export var GetSuiteResult;
(function (GetSuiteResult) {
    /**
     * @internal
     */
    GetSuiteResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSuiteResult || (GetSuiteResult = {}));
export var GetTestRequest;
(function (GetTestRequest) {
    /**
     * @internal
     */
    GetTestRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestRequest || (GetTestRequest = {}));
export var Test;
(function (Test) {
    /**
     * @internal
     */
    Test.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Test || (Test = {}));
export var GetTestResult;
(function (GetTestResult) {
    /**
     * @internal
     */
    GetTestResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestResult || (GetTestResult = {}));
export var GetTestGridProjectRequest;
(function (GetTestGridProjectRequest) {
    /**
     * @internal
     */
    GetTestGridProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestGridProjectRequest || (GetTestGridProjectRequest = {}));
export var GetTestGridProjectResult;
(function (GetTestGridProjectResult) {
    /**
     * @internal
     */
    GetTestGridProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestGridProjectResult || (GetTestGridProjectResult = {}));
export var GetTestGridSessionRequest;
(function (GetTestGridSessionRequest) {
    /**
     * @internal
     */
    GetTestGridSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestGridSessionRequest || (GetTestGridSessionRequest = {}));
export var TestGridSessionStatus;
(function (TestGridSessionStatus) {
    TestGridSessionStatus["ACTIVE"] = "ACTIVE";
    TestGridSessionStatus["CLOSED"] = "CLOSED";
    TestGridSessionStatus["ERRORED"] = "ERRORED";
})(TestGridSessionStatus || (TestGridSessionStatus = {}));
export var TestGridSession;
(function (TestGridSession) {
    /**
     * @internal
     */
    TestGridSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestGridSession || (TestGridSession = {}));
export var GetTestGridSessionResult;
(function (GetTestGridSessionResult) {
    /**
     * @internal
     */
    GetTestGridSessionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTestGridSessionResult || (GetTestGridSessionResult = {}));
export var GetUploadRequest;
(function (GetUploadRequest) {
    /**
     * @internal
     */
    GetUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUploadRequest || (GetUploadRequest = {}));
export var GetUploadResult;
(function (GetUploadResult) {
    /**
     * @internal
     */
    GetUploadResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }))); };
})(GetUploadResult || (GetUploadResult = {}));
export var GetVPCEConfigurationRequest;
(function (GetVPCEConfigurationRequest) {
    /**
     * @internal
     */
    GetVPCEConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVPCEConfigurationRequest || (GetVPCEConfigurationRequest = {}));
export var GetVPCEConfigurationResult;
(function (GetVPCEConfigurationResult) {
    /**
     * @internal
     */
    GetVPCEConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVPCEConfigurationResult || (GetVPCEConfigurationResult = {}));
export var InstallToRemoteAccessSessionRequest;
(function (InstallToRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    InstallToRemoteAccessSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstallToRemoteAccessSessionRequest || (InstallToRemoteAccessSessionRequest = {}));
export var InstallToRemoteAccessSessionResult;
(function (InstallToRemoteAccessSessionResult) {
    /**
     * @internal
     */
    InstallToRemoteAccessSessionResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.appUpload && { appUpload: Upload.filterSensitiveLog(obj.appUpload) }))); };
})(InstallToRemoteAccessSessionResult || (InstallToRemoteAccessSessionResult = {}));
export var ListArtifactsRequest;
(function (ListArtifactsRequest) {
    /**
     * @internal
     */
    ListArtifactsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListArtifactsRequest || (ListArtifactsRequest = {}));
export var ListArtifactsResult;
(function (ListArtifactsResult) {
    /**
     * @internal
     */
    ListArtifactsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListArtifactsResult || (ListArtifactsResult = {}));
export var ListDeviceInstancesRequest;
(function (ListDeviceInstancesRequest) {
    /**
     * @internal
     */
    ListDeviceInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeviceInstancesRequest || (ListDeviceInstancesRequest = {}));
export var ListDeviceInstancesResult;
(function (ListDeviceInstancesResult) {
    /**
     * @internal
     */
    ListDeviceInstancesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeviceInstancesResult || (ListDeviceInstancesResult = {}));
export var ListDevicePoolsRequest;
(function (ListDevicePoolsRequest) {
    /**
     * @internal
     */
    ListDevicePoolsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicePoolsRequest || (ListDevicePoolsRequest = {}));
export var ListDevicePoolsResult;
(function (ListDevicePoolsResult) {
    /**
     * @internal
     */
    ListDevicePoolsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicePoolsResult || (ListDevicePoolsResult = {}));
export var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicesRequest || (ListDevicesRequest = {}));
export var ListDevicesResult;
(function (ListDevicesResult) {
    /**
     * @internal
     */
    ListDevicesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicesResult || (ListDevicesResult = {}));
export var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    /**
     * @internal
     */
    ListInstanceProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesRequest || (ListInstanceProfilesRequest = {}));
export var ListInstanceProfilesResult;
(function (ListInstanceProfilesResult) {
    /**
     * @internal
     */
    ListInstanceProfilesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceProfilesResult || (ListInstanceProfilesResult = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResult || (ListJobsResult = {}));
export var ListNetworkProfilesRequest;
(function (ListNetworkProfilesRequest) {
    /**
     * @internal
     */
    ListNetworkProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNetworkProfilesRequest || (ListNetworkProfilesRequest = {}));
export var ListNetworkProfilesResult;
(function (ListNetworkProfilesResult) {
    /**
     * @internal
     */
    ListNetworkProfilesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNetworkProfilesResult || (ListNetworkProfilesResult = {}));
export var ListOfferingPromotionsRequest;
(function (ListOfferingPromotionsRequest) {
    /**
     * @internal
     */
    ListOfferingPromotionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingPromotionsRequest || (ListOfferingPromotionsRequest = {}));
export var OfferingPromotion;
(function (OfferingPromotion) {
    /**
     * @internal
     */
    OfferingPromotion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OfferingPromotion || (OfferingPromotion = {}));
export var ListOfferingPromotionsResult;
(function (ListOfferingPromotionsResult) {
    /**
     * @internal
     */
    ListOfferingPromotionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingPromotionsResult || (ListOfferingPromotionsResult = {}));
export var ListOfferingsRequest;
(function (ListOfferingsRequest) {
    /**
     * @internal
     */
    ListOfferingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingsRequest || (ListOfferingsRequest = {}));
export var ListOfferingsResult;
(function (ListOfferingsResult) {
    /**
     * @internal
     */
    ListOfferingsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingsResult || (ListOfferingsResult = {}));
export var ListOfferingTransactionsRequest;
(function (ListOfferingTransactionsRequest) {
    /**
     * @internal
     */
    ListOfferingTransactionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingTransactionsRequest || (ListOfferingTransactionsRequest = {}));
export var OfferingTransaction;
(function (OfferingTransaction) {
    /**
     * @internal
     */
    OfferingTransaction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OfferingTransaction || (OfferingTransaction = {}));
export var ListOfferingTransactionsResult;
(function (ListOfferingTransactionsResult) {
    /**
     * @internal
     */
    ListOfferingTransactionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingTransactionsResult || (ListOfferingTransactionsResult = {}));
export var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsRequest || (ListProjectsRequest = {}));
export var ListProjectsResult;
(function (ListProjectsResult) {
    /**
     * @internal
     */
    ListProjectsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsResult || (ListProjectsResult = {}));
export var ListRemoteAccessSessionsRequest;
(function (ListRemoteAccessSessionsRequest) {
    /**
     * @internal
     */
    ListRemoteAccessSessionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRemoteAccessSessionsRequest || (ListRemoteAccessSessionsRequest = {}));
export var ListRemoteAccessSessionsResult;
(function (ListRemoteAccessSessionsResult) {
    /**
     * @internal
     */
    ListRemoteAccessSessionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRemoteAccessSessionsResult || (ListRemoteAccessSessionsResult = {}));
export var ListRunsRequest;
(function (ListRunsRequest) {
    /**
     * @internal
     */
    ListRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRunsRequest || (ListRunsRequest = {}));
export var ListRunsResult;
(function (ListRunsResult) {
    /**
     * @internal
     */
    ListRunsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRunsResult || (ListRunsResult = {}));
export var ListSamplesRequest;
(function (ListSamplesRequest) {
    /**
     * @internal
     */
    ListSamplesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSamplesRequest || (ListSamplesRequest = {}));
export var SampleType;
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
})(SampleType || (SampleType = {}));
export var Sample;
(function (Sample) {
    /**
     * @internal
     */
    Sample.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Sample || (Sample = {}));
export var ListSamplesResult;
(function (ListSamplesResult) {
    /**
     * @internal
     */
    ListSamplesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSamplesResult || (ListSamplesResult = {}));
export var ListSuitesRequest;
(function (ListSuitesRequest) {
    /**
     * @internal
     */
    ListSuitesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSuitesRequest || (ListSuitesRequest = {}));
export var ListSuitesResult;
(function (ListSuitesResult) {
    /**
     * @internal
     */
    ListSuitesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSuitesResult || (ListSuitesResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListTestGridProjectsRequest;
(function (ListTestGridProjectsRequest) {
    /**
     * @internal
     */
    ListTestGridProjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridProjectsRequest || (ListTestGridProjectsRequest = {}));
export var ListTestGridProjectsResult;
(function (ListTestGridProjectsResult) {
    /**
     * @internal
     */
    ListTestGridProjectsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridProjectsResult || (ListTestGridProjectsResult = {}));
export var ListTestGridSessionActionsRequest;
(function (ListTestGridSessionActionsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionActionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridSessionActionsRequest || (ListTestGridSessionActionsRequest = {}));
export var TestGridSessionAction;
(function (TestGridSessionAction) {
    /**
     * @internal
     */
    TestGridSessionAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestGridSessionAction || (TestGridSessionAction = {}));
export var ListTestGridSessionActionsResult;
(function (ListTestGridSessionActionsResult) {
    /**
     * @internal
     */
    ListTestGridSessionActionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridSessionActionsResult || (ListTestGridSessionActionsResult = {}));
export var TestGridSessionArtifactCategory;
(function (TestGridSessionArtifactCategory) {
    TestGridSessionArtifactCategory["LOG"] = "LOG";
    TestGridSessionArtifactCategory["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactCategory || (TestGridSessionArtifactCategory = {}));
export var ListTestGridSessionArtifactsRequest;
(function (ListTestGridSessionArtifactsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionArtifactsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridSessionArtifactsRequest || (ListTestGridSessionArtifactsRequest = {}));
export var TestGridSessionArtifactType;
(function (TestGridSessionArtifactType) {
    TestGridSessionArtifactType["SELENIUM_LOG"] = "SELENIUM_LOG";
    TestGridSessionArtifactType["UNKNOWN"] = "UNKNOWN";
    TestGridSessionArtifactType["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactType || (TestGridSessionArtifactType = {}));
export var TestGridSessionArtifact;
(function (TestGridSessionArtifact) {
    /**
     * @internal
     */
    TestGridSessionArtifact.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.url && { url: SENSITIVE_STRING }))); };
})(TestGridSessionArtifact || (TestGridSessionArtifact = {}));
export var ListTestGridSessionArtifactsResult;
(function (ListTestGridSessionArtifactsResult) {
    /**
     * @internal
     */
    ListTestGridSessionArtifactsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.artifacts && { artifacts: obj.artifacts.map(function (item) { return TestGridSessionArtifact.filterSensitiveLog(item); }) }))); };
})(ListTestGridSessionArtifactsResult || (ListTestGridSessionArtifactsResult = {}));
export var ListTestGridSessionsRequest;
(function (ListTestGridSessionsRequest) {
    /**
     * @internal
     */
    ListTestGridSessionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridSessionsRequest || (ListTestGridSessionsRequest = {}));
export var ListTestGridSessionsResult;
(function (ListTestGridSessionsResult) {
    /**
     * @internal
     */
    ListTestGridSessionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestGridSessionsResult || (ListTestGridSessionsResult = {}));
export var ListTestsRequest;
(function (ListTestsRequest) {
    /**
     * @internal
     */
    ListTestsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestsRequest || (ListTestsRequest = {}));
export var ListTestsResult;
(function (ListTestsResult) {
    /**
     * @internal
     */
    ListTestsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTestsResult || (ListTestsResult = {}));
export var ListUniqueProblemsRequest;
(function (ListUniqueProblemsRequest) {
    /**
     * @internal
     */
    ListUniqueProblemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUniqueProblemsRequest || (ListUniqueProblemsRequest = {}));
export var ProblemDetail;
(function (ProblemDetail) {
    /**
     * @internal
     */
    ProblemDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProblemDetail || (ProblemDetail = {}));
export var Problem;
(function (Problem) {
    /**
     * @internal
     */
    Problem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Problem || (Problem = {}));
export var UniqueProblem;
(function (UniqueProblem) {
    /**
     * @internal
     */
    UniqueProblem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UniqueProblem || (UniqueProblem = {}));
export var ListUniqueProblemsResult;
(function (ListUniqueProblemsResult) {
    /**
     * @internal
     */
    ListUniqueProblemsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUniqueProblemsResult || (ListUniqueProblemsResult = {}));
export var ListUploadsRequest;
(function (ListUploadsRequest) {
    /**
     * @internal
     */
    ListUploadsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUploadsRequest || (ListUploadsRequest = {}));
export var ListUploadsResult;
(function (ListUploadsResult) {
    /**
     * @internal
     */
    ListUploadsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.uploads && { uploads: obj.uploads.map(function (item) { return Upload.filterSensitiveLog(item); }) }))); };
})(ListUploadsResult || (ListUploadsResult = {}));
export var ListVPCEConfigurationsRequest;
(function (ListVPCEConfigurationsRequest) {
    /**
     * @internal
     */
    ListVPCEConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVPCEConfigurationsRequest || (ListVPCEConfigurationsRequest = {}));
export var ListVPCEConfigurationsResult;
(function (ListVPCEConfigurationsResult) {
    /**
     * @internal
     */
    ListVPCEConfigurationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVPCEConfigurationsResult || (ListVPCEConfigurationsResult = {}));
export var PurchaseOfferingRequest;
(function (PurchaseOfferingRequest) {
    /**
     * @internal
     */
    PurchaseOfferingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseOfferingRequest || (PurchaseOfferingRequest = {}));
export var PurchaseOfferingResult;
(function (PurchaseOfferingResult) {
    /**
     * @internal
     */
    PurchaseOfferingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseOfferingResult || (PurchaseOfferingResult = {}));
export var RenewOfferingRequest;
(function (RenewOfferingRequest) {
    /**
     * @internal
     */
    RenewOfferingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenewOfferingRequest || (RenewOfferingRequest = {}));
export var RenewOfferingResult;
(function (RenewOfferingResult) {
    /**
     * @internal
     */
    RenewOfferingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenewOfferingResult || (RenewOfferingResult = {}));
export var IdempotencyException;
(function (IdempotencyException) {
    /**
     * @internal
     */
    IdempotencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotencyException || (IdempotencyException = {}));
export var DeviceSelectionConfiguration;
(function (DeviceSelectionConfiguration) {
    /**
     * @internal
     */
    DeviceSelectionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceSelectionConfiguration || (DeviceSelectionConfiguration = {}));
export var ExecutionConfiguration;
(function (ExecutionConfiguration) {
    /**
     * @internal
     */
    ExecutionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionConfiguration || (ExecutionConfiguration = {}));
export var ScheduleRunRequest;
(function (ScheduleRunRequest) {
    /**
     * @internal
     */
    ScheduleRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleRunRequest || (ScheduleRunRequest = {}));
export var ScheduleRunResult;
(function (ScheduleRunResult) {
    /**
     * @internal
     */
    ScheduleRunResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleRunResult || (ScheduleRunResult = {}));
export var StopJobRequest;
(function (StopJobRequest) {
    /**
     * @internal
     */
    StopJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopJobRequest || (StopJobRequest = {}));
export var StopJobResult;
(function (StopJobResult) {
    /**
     * @internal
     */
    StopJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopJobResult || (StopJobResult = {}));
export var StopRemoteAccessSessionRequest;
(function (StopRemoteAccessSessionRequest) {
    /**
     * @internal
     */
    StopRemoteAccessSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRemoteAccessSessionRequest || (StopRemoteAccessSessionRequest = {}));
export var StopRemoteAccessSessionResult;
(function (StopRemoteAccessSessionResult) {
    /**
     * @internal
     */
    StopRemoteAccessSessionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRemoteAccessSessionResult || (StopRemoteAccessSessionResult = {}));
export var StopRunRequest;
(function (StopRunRequest) {
    /**
     * @internal
     */
    StopRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRunRequest || (StopRunRequest = {}));
export var StopRunResult;
(function (StopRunResult) {
    /**
     * @internal
     */
    StopRunResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRunResult || (StopRunResult = {}));
export var TagPolicyException;
(function (TagPolicyException) {
    /**
     * @internal
     */
    TagPolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagPolicyException || (TagPolicyException = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateDeviceInstanceRequest;
(function (UpdateDeviceInstanceRequest) {
    /**
     * @internal
     */
    UpdateDeviceInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeviceInstanceRequest || (UpdateDeviceInstanceRequest = {}));
export var UpdateDeviceInstanceResult;
(function (UpdateDeviceInstanceResult) {
    /**
     * @internal
     */
    UpdateDeviceInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeviceInstanceResult || (UpdateDeviceInstanceResult = {}));
export var UpdateDevicePoolRequest;
(function (UpdateDevicePoolRequest) {
    /**
     * @internal
     */
    UpdateDevicePoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDevicePoolRequest || (UpdateDevicePoolRequest = {}));
export var UpdateDevicePoolResult;
(function (UpdateDevicePoolResult) {
    /**
     * @internal
     */
    UpdateDevicePoolResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDevicePoolResult || (UpdateDevicePoolResult = {}));
export var UpdateInstanceProfileRequest;
(function (UpdateInstanceProfileRequest) {
    /**
     * @internal
     */
    UpdateInstanceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceProfileRequest || (UpdateInstanceProfileRequest = {}));
export var UpdateInstanceProfileResult;
(function (UpdateInstanceProfileResult) {
    /**
     * @internal
     */
    UpdateInstanceProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceProfileResult || (UpdateInstanceProfileResult = {}));
export var UpdateNetworkProfileRequest;
(function (UpdateNetworkProfileRequest) {
    /**
     * @internal
     */
    UpdateNetworkProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNetworkProfileRequest || (UpdateNetworkProfileRequest = {}));
export var UpdateNetworkProfileResult;
(function (UpdateNetworkProfileResult) {
    /**
     * @internal
     */
    UpdateNetworkProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNetworkProfileResult || (UpdateNetworkProfileResult = {}));
export var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectRequest || (UpdateProjectRequest = {}));
export var UpdateProjectResult;
(function (UpdateProjectResult) {
    /**
     * @internal
     */
    UpdateProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectResult || (UpdateProjectResult = {}));
export var UpdateTestGridProjectRequest;
(function (UpdateTestGridProjectRequest) {
    /**
     * @internal
     */
    UpdateTestGridProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTestGridProjectRequest || (UpdateTestGridProjectRequest = {}));
export var UpdateTestGridProjectResult;
(function (UpdateTestGridProjectResult) {
    /**
     * @internal
     */
    UpdateTestGridProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTestGridProjectResult || (UpdateTestGridProjectResult = {}));
export var UpdateUploadRequest;
(function (UpdateUploadRequest) {
    /**
     * @internal
     */
    UpdateUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUploadRequest || (UpdateUploadRequest = {}));
export var UpdateUploadResult;
(function (UpdateUploadResult) {
    /**
     * @internal
     */
    UpdateUploadResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.upload && { upload: Upload.filterSensitiveLog(obj.upload) }))); };
})(UpdateUploadResult || (UpdateUploadResult = {}));
export var UpdateVPCEConfigurationRequest;
(function (UpdateVPCEConfigurationRequest) {
    /**
     * @internal
     */
    UpdateVPCEConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVPCEConfigurationRequest || (UpdateVPCEConfigurationRequest = {}));
export var UpdateVPCEConfigurationResult;
(function (UpdateVPCEConfigurationResult) {
    /**
     * @internal
     */
    UpdateVPCEConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVPCEConfigurationResult || (UpdateVPCEConfigurationResult = {}));
//# sourceMappingURL=models_0.js.map