import { __assign } from "tslib";
export var AcceptEulasRequest;
(function (AcceptEulasRequest) {
    /**
     * @internal
     */
    AcceptEulasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptEulasRequest || (AcceptEulasRequest = {}));
export var EulaAcceptance;
(function (EulaAcceptance) {
    /**
     * @internal
     */
    EulaAcceptance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EulaAcceptance || (EulaAcceptance = {}));
export var AcceptEulasResponse;
(function (AcceptEulasResponse) {
    /**
     * @internal
     */
    AcceptEulasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptEulasResponse || (AcceptEulasResponse = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ActiveDirectoryComputerAttribute;
(function (ActiveDirectoryComputerAttribute) {
    /**
     * @internal
     */
    ActiveDirectoryComputerAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveDirectoryComputerAttribute || (ActiveDirectoryComputerAttribute = {}));
export var ActiveDirectoryConfiguration;
(function (ActiveDirectoryConfiguration) {
    /**
     * @internal
     */
    ActiveDirectoryConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveDirectoryConfiguration || (ActiveDirectoryConfiguration = {}));
export var ComputeFarmConfiguration;
(function (ComputeFarmConfiguration) {
    /**
     * @internal
     */
    ComputeFarmConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComputeFarmConfiguration || (ComputeFarmConfiguration = {}));
export var StreamingClipboardMode;
(function (StreamingClipboardMode) {
    StreamingClipboardMode["DISABLED"] = "DISABLED";
    StreamingClipboardMode["ENABLED"] = "ENABLED";
})(StreamingClipboardMode || (StreamingClipboardMode = {}));
export var StreamingInstanceType;
(function (StreamingInstanceType) {
    StreamingInstanceType["g4dn_12xlarge"] = "g4dn.12xlarge";
    StreamingInstanceType["g4dn_16xlarge"] = "g4dn.16xlarge";
    StreamingInstanceType["g4dn_2xlarge"] = "g4dn.2xlarge";
    StreamingInstanceType["g4dn_4xlarge"] = "g4dn.4xlarge";
    StreamingInstanceType["g4dn_8xlarge"] = "g4dn.8xlarge";
    StreamingInstanceType["g4dn_xlarge"] = "g4dn.xlarge";
})(StreamingInstanceType || (StreamingInstanceType = {}));
export var StreamConfigurationCreate;
(function (StreamConfigurationCreate) {
    /**
     * @internal
     */
    StreamConfigurationCreate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamConfigurationCreate || (StreamConfigurationCreate = {}));
export var CreateLaunchProfileRequest;
(function (CreateLaunchProfileRequest) {
    /**
     * @internal
     */
    CreateLaunchProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLaunchProfileRequest || (CreateLaunchProfileRequest = {}));
export var LaunchProfileState;
(function (LaunchProfileState) {
    LaunchProfileState["CREATE_FAILED"] = "CREATE_FAILED";
    LaunchProfileState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    LaunchProfileState["DELETED"] = "DELETED";
    LaunchProfileState["DELETE_FAILED"] = "DELETE_FAILED";
    LaunchProfileState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    LaunchProfileState["READY"] = "READY";
    LaunchProfileState["UPDATE_FAILED"] = "UPDATE_FAILED";
    LaunchProfileState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(LaunchProfileState || (LaunchProfileState = {}));
export var LaunchProfileStatusCode;
(function (LaunchProfileStatusCode) {
    LaunchProfileStatusCode["ENCRYPTION_KEY_ACCESS_DENIED"] = "ENCRYPTION_KEY_ACCESS_DENIED";
    LaunchProfileStatusCode["ENCRYPTION_KEY_NOT_FOUND"] = "ENCRYPTION_KEY_NOT_FOUND";
    LaunchProfileStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    LaunchProfileStatusCode["INVALID_SUBNETS_PROVIDED"] = "INVALID_SUBNETS_PROVIDED";
    LaunchProfileStatusCode["LAUNCH_PROFILE_CREATED"] = "LAUNCH_PROFILE_CREATED";
    LaunchProfileStatusCode["LAUNCH_PROFILE_CREATE_IN_PROGRESS"] = "LAUNCH_PROFILE_CREATE_IN_PROGRESS";
    LaunchProfileStatusCode["LAUNCH_PROFILE_DELETED"] = "LAUNCH_PROFILE_DELETED";
    LaunchProfileStatusCode["LAUNCH_PROFILE_DELETE_IN_PROGRESS"] = "LAUNCH_PROFILE_DELETE_IN_PROGRESS";
    LaunchProfileStatusCode["LAUNCH_PROFILE_UPDATED"] = "LAUNCH_PROFILE_UPDATED";
    LaunchProfileStatusCode["LAUNCH_PROFILE_UPDATE_IN_PROGRESS"] = "LAUNCH_PROFILE_UPDATE_IN_PROGRESS";
    LaunchProfileStatusCode["LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED"] = "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED";
    LaunchProfileStatusCode["STREAMING_IMAGE_NOT_FOUND"] = "STREAMING_IMAGE_NOT_FOUND";
    LaunchProfileStatusCode["STREAMING_IMAGE_NOT_READY"] = "STREAMING_IMAGE_NOT_READY";
})(LaunchProfileStatusCode || (LaunchProfileStatusCode = {}));
export var StreamConfiguration;
(function (StreamConfiguration) {
    /**
     * @internal
     */
    StreamConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamConfiguration || (StreamConfiguration = {}));
export var LaunchProfile;
(function (LaunchProfile) {
    /**
     * @internal
     */
    LaunchProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchProfile || (LaunchProfile = {}));
export var CreateLaunchProfileResponse;
(function (CreateLaunchProfileResponse) {
    /**
     * @internal
     */
    CreateLaunchProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLaunchProfileResponse || (CreateLaunchProfileResponse = {}));
export var CreateStreamingImageRequest;
(function (CreateStreamingImageRequest) {
    /**
     * @internal
     */
    CreateStreamingImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingImageRequest || (CreateStreamingImageRequest = {}));
export var StreamingImageEncryptionConfigurationKeyType;
(function (StreamingImageEncryptionConfigurationKeyType) {
    StreamingImageEncryptionConfigurationKeyType["CUSTOMER_MANAGED_KEY"] = "CUSTOMER_MANAGED_KEY";
})(StreamingImageEncryptionConfigurationKeyType || (StreamingImageEncryptionConfigurationKeyType = {}));
export var StreamingImageEncryptionConfiguration;
(function (StreamingImageEncryptionConfiguration) {
    /**
     * @internal
     */
    StreamingImageEncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamingImageEncryptionConfiguration || (StreamingImageEncryptionConfiguration = {}));
export var StreamingImageState;
(function (StreamingImageState) {
    StreamingImageState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingImageState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingImageState["DELETED"] = "DELETED";
    StreamingImageState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingImageState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingImageState["READY"] = "READY";
    StreamingImageState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StreamingImageState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StreamingImageState || (StreamingImageState = {}));
export var StreamingImageStatusCode;
(function (StreamingImageStatusCode) {
    StreamingImageStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StreamingImageStatusCode["STREAMING_IMAGE_CREATE_IN_PROGRESS"] = "STREAMING_IMAGE_CREATE_IN_PROGRESS";
    StreamingImageStatusCode["STREAMING_IMAGE_DELETED"] = "STREAMING_IMAGE_DELETED";
    StreamingImageStatusCode["STREAMING_IMAGE_DELETE_IN_PROGRESS"] = "STREAMING_IMAGE_DELETE_IN_PROGRESS";
    StreamingImageStatusCode["STREAMING_IMAGE_READY"] = "STREAMING_IMAGE_READY";
    StreamingImageStatusCode["STREAMING_IMAGE_UPDATE_IN_PROGRESS"] = "STREAMING_IMAGE_UPDATE_IN_PROGRESS";
})(StreamingImageStatusCode || (StreamingImageStatusCode = {}));
export var StreamingImage;
(function (StreamingImage) {
    /**
     * @internal
     */
    StreamingImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamingImage || (StreamingImage = {}));
export var CreateStreamingImageResponse;
(function (CreateStreamingImageResponse) {
    /**
     * @internal
     */
    CreateStreamingImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingImageResponse || (CreateStreamingImageResponse = {}));
export var CreateStreamingSessionRequest;
(function (CreateStreamingSessionRequest) {
    /**
     * @internal
     */
    CreateStreamingSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingSessionRequest || (CreateStreamingSessionRequest = {}));
export var StreamingSessionState;
(function (StreamingSessionState) {
    StreamingSessionState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingSessionState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingSessionState["DELETED"] = "DELETED";
    StreamingSessionState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingSessionState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingSessionState["READY"] = "READY";
})(StreamingSessionState || (StreamingSessionState = {}));
export var StreamingSessionStatusCode;
(function (StreamingSessionStatusCode) {
    StreamingSessionStatusCode["ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR"] = "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR";
    StreamingSessionStatusCode["DECRYPT_STREAMING_IMAGE_ERROR"] = "DECRYPT_STREAMING_IMAGE_ERROR";
    StreamingSessionStatusCode["INITIALIZATION_SCRIPT_ERROR"] = "INITIALIZATION_SCRIPT_ERROR";
    StreamingSessionStatusCode["INSUFFICIENT_CAPACITY"] = "INSUFFICIENT_CAPACITY";
    StreamingSessionStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StreamingSessionStatusCode["NETWORK_CONNECTION_ERROR"] = "NETWORK_CONNECTION_ERROR";
    StreamingSessionStatusCode["NETWORK_INTERFACE_ERROR"] = "NETWORK_INTERFACE_ERROR";
    StreamingSessionStatusCode["STREAMING_SESSION_CREATE_IN_PROGRESS"] = "STREAMING_SESSION_CREATE_IN_PROGRESS";
    StreamingSessionStatusCode["STREAMING_SESSION_DELETED"] = "STREAMING_SESSION_DELETED";
    StreamingSessionStatusCode["STREAMING_SESSION_DELETE_IN_PROGRESS"] = "STREAMING_SESSION_DELETE_IN_PROGRESS";
    StreamingSessionStatusCode["STREAMING_SESSION_READY"] = "STREAMING_SESSION_READY";
})(StreamingSessionStatusCode || (StreamingSessionStatusCode = {}));
export var StreamingSession;
(function (StreamingSession) {
    /**
     * @internal
     */
    StreamingSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamingSession || (StreamingSession = {}));
export var CreateStreamingSessionResponse;
(function (CreateStreamingSessionResponse) {
    /**
     * @internal
     */
    CreateStreamingSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingSessionResponse || (CreateStreamingSessionResponse = {}));
export var CreateStreamingSessionStreamRequest;
(function (CreateStreamingSessionStreamRequest) {
    /**
     * @internal
     */
    CreateStreamingSessionStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingSessionStreamRequest || (CreateStreamingSessionStreamRequest = {}));
export var StreamingSessionStreamState;
(function (StreamingSessionStreamState) {
    StreamingSessionStreamState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingSessionStreamState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingSessionStreamState["DELETED"] = "DELETED";
    StreamingSessionStreamState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingSessionStreamState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingSessionStreamState["READY"] = "READY";
})(StreamingSessionStreamState || (StreamingSessionStreamState = {}));
export var StreamingSessionStreamStatusCode;
(function (StreamingSessionStreamStatusCode) {
    StreamingSessionStreamStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StreamingSessionStreamStatusCode["NETWORK_CONNECTION_ERROR"] = "NETWORK_CONNECTION_ERROR";
    StreamingSessionStreamStatusCode["STREAM_CREATE_IN_PROGRESS"] = "STREAM_CREATE_IN_PROGRESS";
    StreamingSessionStreamStatusCode["STREAM_DELETED"] = "STREAM_DELETED";
    StreamingSessionStreamStatusCode["STREAM_DELETE_IN_PROGRESS"] = "STREAM_DELETE_IN_PROGRESS";
    StreamingSessionStreamStatusCode["STREAM_READY"] = "STREAM_READY";
})(StreamingSessionStreamStatusCode || (StreamingSessionStreamStatusCode = {}));
export var StreamingSessionStream;
(function (StreamingSessionStream) {
    /**
     * @internal
     */
    StreamingSessionStream.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamingSessionStream || (StreamingSessionStream = {}));
export var CreateStreamingSessionStreamResponse;
(function (CreateStreamingSessionStreamResponse) {
    /**
     * @internal
     */
    CreateStreamingSessionStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStreamingSessionStreamResponse || (CreateStreamingSessionStreamResponse = {}));
export var StudioEncryptionConfigurationKeyType;
(function (StudioEncryptionConfigurationKeyType) {
    StudioEncryptionConfigurationKeyType["AWS_OWNED_KEY"] = "AWS_OWNED_KEY";
    StudioEncryptionConfigurationKeyType["CUSTOMER_MANAGED_KEY"] = "CUSTOMER_MANAGED_KEY";
})(StudioEncryptionConfigurationKeyType || (StudioEncryptionConfigurationKeyType = {}));
export var StudioEncryptionConfiguration;
(function (StudioEncryptionConfiguration) {
    /**
     * @internal
     */
    StudioEncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioEncryptionConfiguration || (StudioEncryptionConfiguration = {}));
export var CreateStudioRequest;
(function (CreateStudioRequest) {
    /**
     * @internal
     */
    CreateStudioRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioRequest || (CreateStudioRequest = {}));
export var StudioState;
(function (StudioState) {
    StudioState["CREATE_FAILED"] = "CREATE_FAILED";
    StudioState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StudioState["DELETED"] = "DELETED";
    StudioState["DELETE_FAILED"] = "DELETE_FAILED";
    StudioState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StudioState["READY"] = "READY";
    StudioState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StudioState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StudioState || (StudioState = {}));
export var StudioStatusCode;
(function (StudioStatusCode) {
    StudioStatusCode["AWS_SSO_ACCESS_DENIED"] = "AWS_SSO_ACCESS_DENIED";
    StudioStatusCode["AWS_SSO_CONFIGURATION_REPAIRED"] = "AWS_SSO_CONFIGURATION_REPAIRED";
    StudioStatusCode["AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS"] = "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS";
    StudioStatusCode["AWS_SSO_NOT_ENABLED"] = "AWS_SSO_NOT_ENABLED";
    StudioStatusCode["ENCRYPTION_KEY_ACCESS_DENIED"] = "ENCRYPTION_KEY_ACCESS_DENIED";
    StudioStatusCode["ENCRYPTION_KEY_NOT_FOUND"] = "ENCRYPTION_KEY_NOT_FOUND";
    StudioStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StudioStatusCode["ROLE_COULD_NOT_BE_ASSUMED"] = "ROLE_COULD_NOT_BE_ASSUMED";
    StudioStatusCode["ROLE_NOT_OWNED_BY_STUDIO_OWNER"] = "ROLE_NOT_OWNED_BY_STUDIO_OWNER";
    StudioStatusCode["STUDIO_CREATED"] = "STUDIO_CREATED";
    StudioStatusCode["STUDIO_CREATE_IN_PROGRESS"] = "STUDIO_CREATE_IN_PROGRESS";
    StudioStatusCode["STUDIO_DELETED"] = "STUDIO_DELETED";
    StudioStatusCode["STUDIO_DELETE_IN_PROGRESS"] = "STUDIO_DELETE_IN_PROGRESS";
    StudioStatusCode["STUDIO_UPDATED"] = "STUDIO_UPDATED";
    StudioStatusCode["STUDIO_UPDATE_IN_PROGRESS"] = "STUDIO_UPDATE_IN_PROGRESS";
    StudioStatusCode["STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED"] = "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED";
    StudioStatusCode["STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED"] = "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED";
    StudioStatusCode["STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED"] = "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED";
})(StudioStatusCode || (StudioStatusCode = {}));
export var Studio;
(function (Studio) {
    /**
     * @internal
     */
    Studio.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Studio || (Studio = {}));
export var CreateStudioResponse;
(function (CreateStudioResponse) {
    /**
     * @internal
     */
    CreateStudioResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioResponse || (CreateStudioResponse = {}));
export var LicenseServiceConfiguration;
(function (LicenseServiceConfiguration) {
    /**
     * @internal
     */
    LicenseServiceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseServiceConfiguration || (LicenseServiceConfiguration = {}));
export var SharedFileSystemConfiguration;
(function (SharedFileSystemConfiguration) {
    /**
     * @internal
     */
    SharedFileSystemConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SharedFileSystemConfiguration || (SharedFileSystemConfiguration = {}));
export var StudioComponentConfiguration;
(function (StudioComponentConfiguration) {
    /**
     * @internal
     */
    StudioComponentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioComponentConfiguration || (StudioComponentConfiguration = {}));
export var LaunchProfilePlatform;
(function (LaunchProfilePlatform) {
    LaunchProfilePlatform["LINUX"] = "LINUX";
    LaunchProfilePlatform["WINDOWS"] = "WINDOWS";
})(LaunchProfilePlatform || (LaunchProfilePlatform = {}));
export var StudioComponentInitializationScriptRunContext;
(function (StudioComponentInitializationScriptRunContext) {
    StudioComponentInitializationScriptRunContext["SYSTEM_INITIALIZATION"] = "SYSTEM_INITIALIZATION";
    StudioComponentInitializationScriptRunContext["USER_INITIALIZATION"] = "USER_INITIALIZATION";
})(StudioComponentInitializationScriptRunContext || (StudioComponentInitializationScriptRunContext = {}));
export var StudioComponentInitializationScript;
(function (StudioComponentInitializationScript) {
    /**
     * @internal
     */
    StudioComponentInitializationScript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioComponentInitializationScript || (StudioComponentInitializationScript = {}));
export var ScriptParameterKeyValue;
(function (ScriptParameterKeyValue) {
    /**
     * @internal
     */
    ScriptParameterKeyValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScriptParameterKeyValue || (ScriptParameterKeyValue = {}));
export var StudioComponentSubtype;
(function (StudioComponentSubtype) {
    StudioComponentSubtype["AMAZON_FSX_FOR_LUSTRE"] = "AMAZON_FSX_FOR_LUSTRE";
    StudioComponentSubtype["AMAZON_FSX_FOR_WINDOWS"] = "AMAZON_FSX_FOR_WINDOWS";
    StudioComponentSubtype["AWS_MANAGED_MICROSOFT_AD"] = "AWS_MANAGED_MICROSOFT_AD";
    StudioComponentSubtype["CUSTOM"] = "CUSTOM";
})(StudioComponentSubtype || (StudioComponentSubtype = {}));
export var StudioComponentType;
(function (StudioComponentType) {
    StudioComponentType["ACTIVE_DIRECTORY"] = "ACTIVE_DIRECTORY";
    StudioComponentType["COMPUTE_FARM"] = "COMPUTE_FARM";
    StudioComponentType["CUSTOM"] = "CUSTOM";
    StudioComponentType["LICENSE_SERVICE"] = "LICENSE_SERVICE";
    StudioComponentType["SHARED_FILE_SYSTEM"] = "SHARED_FILE_SYSTEM";
})(StudioComponentType || (StudioComponentType = {}));
export var CreateStudioComponentRequest;
(function (CreateStudioComponentRequest) {
    /**
     * @internal
     */
    CreateStudioComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioComponentRequest || (CreateStudioComponentRequest = {}));
export var StudioComponentState;
(function (StudioComponentState) {
    StudioComponentState["CREATE_FAILED"] = "CREATE_FAILED";
    StudioComponentState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StudioComponentState["DELETED"] = "DELETED";
    StudioComponentState["DELETE_FAILED"] = "DELETE_FAILED";
    StudioComponentState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StudioComponentState["READY"] = "READY";
    StudioComponentState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StudioComponentState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StudioComponentState || (StudioComponentState = {}));
export var StudioComponentStatusCode;
(function (StudioComponentStatusCode) {
    StudioComponentStatusCode["ACTIVE_DIRECTORY_ALREADY_EXISTS"] = "ACTIVE_DIRECTORY_ALREADY_EXISTS";
    StudioComponentStatusCode["ENCRYPTION_KEY_ACCESS_DENIED"] = "ENCRYPTION_KEY_ACCESS_DENIED";
    StudioComponentStatusCode["ENCRYPTION_KEY_NOT_FOUND"] = "ENCRYPTION_KEY_NOT_FOUND";
    StudioComponentStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StudioComponentStatusCode["STUDIO_COMPONENT_CREATED"] = "STUDIO_COMPONENT_CREATED";
    StudioComponentStatusCode["STUDIO_COMPONENT_CREATE_IN_PROGRESS"] = "STUDIO_COMPONENT_CREATE_IN_PROGRESS";
    StudioComponentStatusCode["STUDIO_COMPONENT_DELETED"] = "STUDIO_COMPONENT_DELETED";
    StudioComponentStatusCode["STUDIO_COMPONENT_DELETE_IN_PROGRESS"] = "STUDIO_COMPONENT_DELETE_IN_PROGRESS";
    StudioComponentStatusCode["STUDIO_COMPONENT_UPDATED"] = "STUDIO_COMPONENT_UPDATED";
    StudioComponentStatusCode["STUDIO_COMPONENT_UPDATE_IN_PROGRESS"] = "STUDIO_COMPONENT_UPDATE_IN_PROGRESS";
})(StudioComponentStatusCode || (StudioComponentStatusCode = {}));
export var StudioComponent;
(function (StudioComponent) {
    /**
     * @internal
     */
    StudioComponent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioComponent || (StudioComponent = {}));
export var CreateStudioComponentResponse;
(function (CreateStudioComponentResponse) {
    /**
     * @internal
     */
    CreateStudioComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioComponentResponse || (CreateStudioComponentResponse = {}));
export var DeleteLaunchProfileRequest;
(function (DeleteLaunchProfileRequest) {
    /**
     * @internal
     */
    DeleteLaunchProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLaunchProfileRequest || (DeleteLaunchProfileRequest = {}));
export var DeleteLaunchProfileResponse;
(function (DeleteLaunchProfileResponse) {
    /**
     * @internal
     */
    DeleteLaunchProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLaunchProfileResponse || (DeleteLaunchProfileResponse = {}));
export var DeleteLaunchProfileMemberRequest;
(function (DeleteLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    DeleteLaunchProfileMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLaunchProfileMemberRequest || (DeleteLaunchProfileMemberRequest = {}));
export var DeleteLaunchProfileMemberResponse;
(function (DeleteLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    DeleteLaunchProfileMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLaunchProfileMemberResponse || (DeleteLaunchProfileMemberResponse = {}));
export var DeleteStreamingImageRequest;
(function (DeleteStreamingImageRequest) {
    /**
     * @internal
     */
    DeleteStreamingImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamingImageRequest || (DeleteStreamingImageRequest = {}));
export var DeleteStreamingImageResponse;
(function (DeleteStreamingImageResponse) {
    /**
     * @internal
     */
    DeleteStreamingImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamingImageResponse || (DeleteStreamingImageResponse = {}));
export var DeleteStreamingSessionRequest;
(function (DeleteStreamingSessionRequest) {
    /**
     * @internal
     */
    DeleteStreamingSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamingSessionRequest || (DeleteStreamingSessionRequest = {}));
export var DeleteStreamingSessionResponse;
(function (DeleteStreamingSessionResponse) {
    /**
     * @internal
     */
    DeleteStreamingSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStreamingSessionResponse || (DeleteStreamingSessionResponse = {}));
export var DeleteStudioRequest;
(function (DeleteStudioRequest) {
    /**
     * @internal
     */
    DeleteStudioRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioRequest || (DeleteStudioRequest = {}));
export var DeleteStudioResponse;
(function (DeleteStudioResponse) {
    /**
     * @internal
     */
    DeleteStudioResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioResponse || (DeleteStudioResponse = {}));
export var DeleteStudioComponentRequest;
(function (DeleteStudioComponentRequest) {
    /**
     * @internal
     */
    DeleteStudioComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioComponentRequest || (DeleteStudioComponentRequest = {}));
export var DeleteStudioComponentResponse;
(function (DeleteStudioComponentResponse) {
    /**
     * @internal
     */
    DeleteStudioComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioComponentResponse || (DeleteStudioComponentResponse = {}));
export var DeleteStudioMemberRequest;
(function (DeleteStudioMemberRequest) {
    /**
     * @internal
     */
    DeleteStudioMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioMemberRequest || (DeleteStudioMemberRequest = {}));
export var DeleteStudioMemberResponse;
(function (DeleteStudioMemberResponse) {
    /**
     * @internal
     */
    DeleteStudioMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioMemberResponse || (DeleteStudioMemberResponse = {}));
export var Eula;
(function (Eula) {
    /**
     * @internal
     */
    Eula.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Eula || (Eula = {}));
export var GetEulaRequest;
(function (GetEulaRequest) {
    /**
     * @internal
     */
    GetEulaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEulaRequest || (GetEulaRequest = {}));
export var GetEulaResponse;
(function (GetEulaResponse) {
    /**
     * @internal
     */
    GetEulaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEulaResponse || (GetEulaResponse = {}));
export var GetLaunchProfileRequest;
(function (GetLaunchProfileRequest) {
    /**
     * @internal
     */
    GetLaunchProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileRequest || (GetLaunchProfileRequest = {}));
export var GetLaunchProfileResponse;
(function (GetLaunchProfileResponse) {
    /**
     * @internal
     */
    GetLaunchProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileResponse || (GetLaunchProfileResponse = {}));
export var GetLaunchProfileDetailsRequest;
(function (GetLaunchProfileDetailsRequest) {
    /**
     * @internal
     */
    GetLaunchProfileDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileDetailsRequest || (GetLaunchProfileDetailsRequest = {}));
export var StudioComponentSummary;
(function (StudioComponentSummary) {
    /**
     * @internal
     */
    StudioComponentSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioComponentSummary || (StudioComponentSummary = {}));
export var GetLaunchProfileDetailsResponse;
(function (GetLaunchProfileDetailsResponse) {
    /**
     * @internal
     */
    GetLaunchProfileDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileDetailsResponse || (GetLaunchProfileDetailsResponse = {}));
export var GetLaunchProfileInitializationRequest;
(function (GetLaunchProfileInitializationRequest) {
    /**
     * @internal
     */
    GetLaunchProfileInitializationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileInitializationRequest || (GetLaunchProfileInitializationRequest = {}));
export var LaunchProfileInitializationActiveDirectory;
(function (LaunchProfileInitializationActiveDirectory) {
    /**
     * @internal
     */
    LaunchProfileInitializationActiveDirectory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchProfileInitializationActiveDirectory || (LaunchProfileInitializationActiveDirectory = {}));
export var LaunchProfileInitializationScript;
(function (LaunchProfileInitializationScript) {
    /**
     * @internal
     */
    LaunchProfileInitializationScript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchProfileInitializationScript || (LaunchProfileInitializationScript = {}));
export var LaunchProfileInitialization;
(function (LaunchProfileInitialization) {
    /**
     * @internal
     */
    LaunchProfileInitialization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchProfileInitialization || (LaunchProfileInitialization = {}));
export var GetLaunchProfileInitializationResponse;
(function (GetLaunchProfileInitializationResponse) {
    /**
     * @internal
     */
    GetLaunchProfileInitializationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileInitializationResponse || (GetLaunchProfileInitializationResponse = {}));
export var GetLaunchProfileMemberRequest;
(function (GetLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    GetLaunchProfileMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileMemberRequest || (GetLaunchProfileMemberRequest = {}));
export var LaunchProfilePersona;
(function (LaunchProfilePersona) {
    LaunchProfilePersona["USER"] = "USER";
})(LaunchProfilePersona || (LaunchProfilePersona = {}));
export var LaunchProfileMembership;
(function (LaunchProfileMembership) {
    /**
     * @internal
     */
    LaunchProfileMembership.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchProfileMembership || (LaunchProfileMembership = {}));
export var GetLaunchProfileMemberResponse;
(function (GetLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    GetLaunchProfileMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchProfileMemberResponse || (GetLaunchProfileMemberResponse = {}));
export var GetStreamingImageRequest;
(function (GetStreamingImageRequest) {
    /**
     * @internal
     */
    GetStreamingImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingImageRequest || (GetStreamingImageRequest = {}));
export var GetStreamingImageResponse;
(function (GetStreamingImageResponse) {
    /**
     * @internal
     */
    GetStreamingImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingImageResponse || (GetStreamingImageResponse = {}));
export var GetStreamingSessionRequest;
(function (GetStreamingSessionRequest) {
    /**
     * @internal
     */
    GetStreamingSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingSessionRequest || (GetStreamingSessionRequest = {}));
export var GetStreamingSessionResponse;
(function (GetStreamingSessionResponse) {
    /**
     * @internal
     */
    GetStreamingSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingSessionResponse || (GetStreamingSessionResponse = {}));
export var GetStreamingSessionStreamRequest;
(function (GetStreamingSessionStreamRequest) {
    /**
     * @internal
     */
    GetStreamingSessionStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingSessionStreamRequest || (GetStreamingSessionStreamRequest = {}));
export var GetStreamingSessionStreamResponse;
(function (GetStreamingSessionStreamResponse) {
    /**
     * @internal
     */
    GetStreamingSessionStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStreamingSessionStreamResponse || (GetStreamingSessionStreamResponse = {}));
export var GetStudioRequest;
(function (GetStudioRequest) {
    /**
     * @internal
     */
    GetStudioRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioRequest || (GetStudioRequest = {}));
export var GetStudioResponse;
(function (GetStudioResponse) {
    /**
     * @internal
     */
    GetStudioResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioResponse || (GetStudioResponse = {}));
export var GetStudioComponentRequest;
(function (GetStudioComponentRequest) {
    /**
     * @internal
     */
    GetStudioComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioComponentRequest || (GetStudioComponentRequest = {}));
export var GetStudioComponentResponse;
(function (GetStudioComponentResponse) {
    /**
     * @internal
     */
    GetStudioComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioComponentResponse || (GetStudioComponentResponse = {}));
export var GetStudioMemberRequest;
(function (GetStudioMemberRequest) {
    /**
     * @internal
     */
    GetStudioMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioMemberRequest || (GetStudioMemberRequest = {}));
export var StudioPersona;
(function (StudioPersona) {
    StudioPersona["ADMINISTRATOR"] = "ADMINISTRATOR";
})(StudioPersona || (StudioPersona = {}));
export var StudioMembership;
(function (StudioMembership) {
    /**
     * @internal
     */
    StudioMembership.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioMembership || (StudioMembership = {}));
export var GetStudioMemberResponse;
(function (GetStudioMemberResponse) {
    /**
     * @internal
     */
    GetStudioMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioMemberResponse || (GetStudioMemberResponse = {}));
export var ListEulaAcceptancesRequest;
(function (ListEulaAcceptancesRequest) {
    /**
     * @internal
     */
    ListEulaAcceptancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEulaAcceptancesRequest || (ListEulaAcceptancesRequest = {}));
export var ListEulaAcceptancesResponse;
(function (ListEulaAcceptancesResponse) {
    /**
     * @internal
     */
    ListEulaAcceptancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEulaAcceptancesResponse || (ListEulaAcceptancesResponse = {}));
export var ListEulasRequest;
(function (ListEulasRequest) {
    /**
     * @internal
     */
    ListEulasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEulasRequest || (ListEulasRequest = {}));
export var ListEulasResponse;
(function (ListEulasResponse) {
    /**
     * @internal
     */
    ListEulasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEulasResponse || (ListEulasResponse = {}));
export var ListLaunchProfileMembersRequest;
(function (ListLaunchProfileMembersRequest) {
    /**
     * @internal
     */
    ListLaunchProfileMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLaunchProfileMembersRequest || (ListLaunchProfileMembersRequest = {}));
export var ListLaunchProfileMembersResponse;
(function (ListLaunchProfileMembersResponse) {
    /**
     * @internal
     */
    ListLaunchProfileMembersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLaunchProfileMembersResponse || (ListLaunchProfileMembersResponse = {}));
export var ListLaunchProfilesRequest;
(function (ListLaunchProfilesRequest) {
    /**
     * @internal
     */
    ListLaunchProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLaunchProfilesRequest || (ListLaunchProfilesRequest = {}));
export var ListLaunchProfilesResponse;
(function (ListLaunchProfilesResponse) {
    /**
     * @internal
     */
    ListLaunchProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLaunchProfilesResponse || (ListLaunchProfilesResponse = {}));
export var ListStreamingImagesRequest;
(function (ListStreamingImagesRequest) {
    /**
     * @internal
     */
    ListStreamingImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamingImagesRequest || (ListStreamingImagesRequest = {}));
export var ListStreamingImagesResponse;
(function (ListStreamingImagesResponse) {
    /**
     * @internal
     */
    ListStreamingImagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamingImagesResponse || (ListStreamingImagesResponse = {}));
export var ListStreamingSessionsRequest;
(function (ListStreamingSessionsRequest) {
    /**
     * @internal
     */
    ListStreamingSessionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamingSessionsRequest || (ListStreamingSessionsRequest = {}));
export var ListStreamingSessionsResponse;
(function (ListStreamingSessionsResponse) {
    /**
     * @internal
     */
    ListStreamingSessionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStreamingSessionsResponse || (ListStreamingSessionsResponse = {}));
export var ListStudioComponentsRequest;
(function (ListStudioComponentsRequest) {
    /**
     * @internal
     */
    ListStudioComponentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioComponentsRequest || (ListStudioComponentsRequest = {}));
export var ListStudioComponentsResponse;
(function (ListStudioComponentsResponse) {
    /**
     * @internal
     */
    ListStudioComponentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioComponentsResponse || (ListStudioComponentsResponse = {}));
export var ListStudioMembersRequest;
(function (ListStudioMembersRequest) {
    /**
     * @internal
     */
    ListStudioMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioMembersRequest || (ListStudioMembersRequest = {}));
export var ListStudioMembersResponse;
(function (ListStudioMembersResponse) {
    /**
     * @internal
     */
    ListStudioMembersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioMembersResponse || (ListStudioMembersResponse = {}));
export var ListStudiosRequest;
(function (ListStudiosRequest) {
    /**
     * @internal
     */
    ListStudiosRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudiosRequest || (ListStudiosRequest = {}));
export var ListStudiosResponse;
(function (ListStudiosResponse) {
    /**
     * @internal
     */
    ListStudiosResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudiosResponse || (ListStudiosResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var NewLaunchProfileMember;
(function (NewLaunchProfileMember) {
    /**
     * @internal
     */
    NewLaunchProfileMember.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NewLaunchProfileMember || (NewLaunchProfileMember = {}));
export var NewStudioMember;
(function (NewStudioMember) {
    /**
     * @internal
     */
    NewStudioMember.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NewStudioMember || (NewStudioMember = {}));
export var PutLaunchProfileMembersRequest;
(function (PutLaunchProfileMembersRequest) {
    /**
     * @internal
     */
    PutLaunchProfileMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLaunchProfileMembersRequest || (PutLaunchProfileMembersRequest = {}));
export var PutLaunchProfileMembersResponse;
(function (PutLaunchProfileMembersResponse) {
    /**
     * @internal
     */
    PutLaunchProfileMembersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLaunchProfileMembersResponse || (PutLaunchProfileMembersResponse = {}));
export var PutStudioMembersRequest;
(function (PutStudioMembersRequest) {
    /**
     * @internal
     */
    PutStudioMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutStudioMembersRequest || (PutStudioMembersRequest = {}));
export var PutStudioMembersResponse;
(function (PutStudioMembersResponse) {
    /**
     * @internal
     */
    PutStudioMembersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutStudioMembersResponse || (PutStudioMembersResponse = {}));
export var StartStudioSSOConfigurationRepairRequest;
(function (StartStudioSSOConfigurationRepairRequest) {
    /**
     * @internal
     */
    StartStudioSSOConfigurationRepairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartStudioSSOConfigurationRepairRequest || (StartStudioSSOConfigurationRepairRequest = {}));
export var StartStudioSSOConfigurationRepairResponse;
(function (StartStudioSSOConfigurationRepairResponse) {
    /**
     * @internal
     */
    StartStudioSSOConfigurationRepairResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartStudioSSOConfigurationRepairResponse || (StartStudioSSOConfigurationRepairResponse = {}));
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
export var UpdateLaunchProfileRequest;
(function (UpdateLaunchProfileRequest) {
    /**
     * @internal
     */
    UpdateLaunchProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLaunchProfileRequest || (UpdateLaunchProfileRequest = {}));
export var UpdateLaunchProfileResponse;
(function (UpdateLaunchProfileResponse) {
    /**
     * @internal
     */
    UpdateLaunchProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLaunchProfileResponse || (UpdateLaunchProfileResponse = {}));
export var UpdateLaunchProfileMemberRequest;
(function (UpdateLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    UpdateLaunchProfileMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLaunchProfileMemberRequest || (UpdateLaunchProfileMemberRequest = {}));
export var UpdateLaunchProfileMemberResponse;
(function (UpdateLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    UpdateLaunchProfileMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLaunchProfileMemberResponse || (UpdateLaunchProfileMemberResponse = {}));
export var UpdateStreamingImageRequest;
(function (UpdateStreamingImageRequest) {
    /**
     * @internal
     */
    UpdateStreamingImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStreamingImageRequest || (UpdateStreamingImageRequest = {}));
export var UpdateStreamingImageResponse;
(function (UpdateStreamingImageResponse) {
    /**
     * @internal
     */
    UpdateStreamingImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStreamingImageResponse || (UpdateStreamingImageResponse = {}));
export var UpdateStudioRequest;
(function (UpdateStudioRequest) {
    /**
     * @internal
     */
    UpdateStudioRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioRequest || (UpdateStudioRequest = {}));
export var UpdateStudioResponse;
(function (UpdateStudioResponse) {
    /**
     * @internal
     */
    UpdateStudioResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioResponse || (UpdateStudioResponse = {}));
export var UpdateStudioComponentRequest;
(function (UpdateStudioComponentRequest) {
    /**
     * @internal
     */
    UpdateStudioComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioComponentRequest || (UpdateStudioComponentRequest = {}));
export var UpdateStudioComponentResponse;
(function (UpdateStudioComponentResponse) {
    /**
     * @internal
     */
    UpdateStudioComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioComponentResponse || (UpdateStudioComponentResponse = {}));
//# sourceMappingURL=models_0.js.map