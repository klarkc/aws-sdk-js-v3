"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchProfilePlatform = exports.StudioComponentConfiguration = exports.SharedFileSystemConfiguration = exports.LicenseServiceConfiguration = exports.CreateStudioResponse = exports.Studio = exports.StudioStatusCode = exports.StudioState = exports.CreateStudioRequest = exports.StudioEncryptionConfiguration = exports.StudioEncryptionConfigurationKeyType = exports.CreateStreamingSessionStreamResponse = exports.StreamingSessionStream = exports.StreamingSessionStreamStatusCode = exports.StreamingSessionStreamState = exports.CreateStreamingSessionStreamRequest = exports.CreateStreamingSessionResponse = exports.StreamingSession = exports.StreamingSessionStatusCode = exports.StreamingSessionState = exports.CreateStreamingSessionRequest = exports.CreateStreamingImageResponse = exports.StreamingImage = exports.StreamingImageStatusCode = exports.StreamingImageState = exports.StreamingImageEncryptionConfiguration = exports.StreamingImageEncryptionConfigurationKeyType = exports.CreateStreamingImageRequest = exports.CreateLaunchProfileResponse = exports.LaunchProfile = exports.StreamConfiguration = exports.LaunchProfileStatusCode = exports.LaunchProfileState = exports.CreateLaunchProfileRequest = exports.StreamConfigurationCreate = exports.StreamingInstanceType = exports.StreamingClipboardMode = exports.ComputeFarmConfiguration = exports.ActiveDirectoryConfiguration = exports.ActiveDirectoryComputerAttribute = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerErrorException = exports.ConflictException = exports.AccessDeniedException = exports.AcceptEulasResponse = exports.EulaAcceptance = exports.AcceptEulasRequest = void 0;
exports.GetStudioComponentRequest = exports.GetStudioResponse = exports.GetStudioRequest = exports.GetStreamingSessionStreamResponse = exports.GetStreamingSessionStreamRequest = exports.GetStreamingSessionResponse = exports.GetStreamingSessionRequest = exports.GetStreamingImageResponse = exports.GetStreamingImageRequest = exports.GetLaunchProfileMemberResponse = exports.LaunchProfileMembership = exports.LaunchProfilePersona = exports.GetLaunchProfileMemberRequest = exports.GetLaunchProfileInitializationResponse = exports.LaunchProfileInitialization = exports.LaunchProfileInitializationScript = exports.LaunchProfileInitializationActiveDirectory = exports.GetLaunchProfileInitializationRequest = exports.GetLaunchProfileDetailsResponse = exports.StudioComponentSummary = exports.GetLaunchProfileDetailsRequest = exports.GetLaunchProfileResponse = exports.GetLaunchProfileRequest = exports.GetEulaResponse = exports.GetEulaRequest = exports.Eula = exports.DeleteStudioMemberResponse = exports.DeleteStudioMemberRequest = exports.DeleteStudioComponentResponse = exports.DeleteStudioComponentRequest = exports.DeleteStudioResponse = exports.DeleteStudioRequest = exports.DeleteStreamingSessionResponse = exports.DeleteStreamingSessionRequest = exports.DeleteStreamingImageResponse = exports.DeleteStreamingImageRequest = exports.DeleteLaunchProfileMemberResponse = exports.DeleteLaunchProfileMemberRequest = exports.DeleteLaunchProfileResponse = exports.DeleteLaunchProfileRequest = exports.CreateStudioComponentResponse = exports.StudioComponent = exports.StudioComponentStatusCode = exports.StudioComponentState = exports.CreateStudioComponentRequest = exports.StudioComponentType = exports.StudioComponentSubtype = exports.ScriptParameterKeyValue = exports.StudioComponentInitializationScript = exports.StudioComponentInitializationScriptRunContext = void 0;
exports.UpdateStudioComponentResponse = exports.UpdateStudioComponentRequest = exports.UpdateStudioResponse = exports.UpdateStudioRequest = exports.UpdateStreamingImageResponse = exports.UpdateStreamingImageRequest = exports.UpdateLaunchProfileMemberResponse = exports.UpdateLaunchProfileMemberRequest = exports.UpdateLaunchProfileResponse = exports.UpdateLaunchProfileRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartStudioSSOConfigurationRepairResponse = exports.StartStudioSSOConfigurationRepairRequest = exports.PutStudioMembersResponse = exports.PutStudioMembersRequest = exports.PutLaunchProfileMembersResponse = exports.PutLaunchProfileMembersRequest = exports.NewStudioMember = exports.NewLaunchProfileMember = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListStudiosResponse = exports.ListStudiosRequest = exports.ListStudioMembersResponse = exports.ListStudioMembersRequest = exports.ListStudioComponentsResponse = exports.ListStudioComponentsRequest = exports.ListStreamingSessionsResponse = exports.ListStreamingSessionsRequest = exports.ListStreamingImagesResponse = exports.ListStreamingImagesRequest = exports.ListLaunchProfilesResponse = exports.ListLaunchProfilesRequest = exports.ListLaunchProfileMembersResponse = exports.ListLaunchProfileMembersRequest = exports.ListEulasResponse = exports.ListEulasRequest = exports.ListEulaAcceptancesResponse = exports.ListEulaAcceptancesRequest = exports.GetStudioMemberResponse = exports.StudioMembership = exports.StudioPersona = exports.GetStudioMemberRequest = exports.GetStudioComponentResponse = void 0;
var AcceptEulasRequest;
(function (AcceptEulasRequest) {
    /**
     * @internal
     */
    AcceptEulasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptEulasRequest = exports.AcceptEulasRequest || (exports.AcceptEulasRequest = {}));
var EulaAcceptance;
(function (EulaAcceptance) {
    /**
     * @internal
     */
    EulaAcceptance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EulaAcceptance = exports.EulaAcceptance || (exports.EulaAcceptance = {}));
var AcceptEulasResponse;
(function (AcceptEulasResponse) {
    /**
     * @internal
     */
    AcceptEulasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptEulasResponse = exports.AcceptEulasResponse || (exports.AcceptEulasResponse = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ActiveDirectoryComputerAttribute;
(function (ActiveDirectoryComputerAttribute) {
    /**
     * @internal
     */
    ActiveDirectoryComputerAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveDirectoryComputerAttribute = exports.ActiveDirectoryComputerAttribute || (exports.ActiveDirectoryComputerAttribute = {}));
var ActiveDirectoryConfiguration;
(function (ActiveDirectoryConfiguration) {
    /**
     * @internal
     */
    ActiveDirectoryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveDirectoryConfiguration = exports.ActiveDirectoryConfiguration || (exports.ActiveDirectoryConfiguration = {}));
var ComputeFarmConfiguration;
(function (ComputeFarmConfiguration) {
    /**
     * @internal
     */
    ComputeFarmConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComputeFarmConfiguration = exports.ComputeFarmConfiguration || (exports.ComputeFarmConfiguration = {}));
var StreamingClipboardMode;
(function (StreamingClipboardMode) {
    StreamingClipboardMode["DISABLED"] = "DISABLED";
    StreamingClipboardMode["ENABLED"] = "ENABLED";
})(StreamingClipboardMode = exports.StreamingClipboardMode || (exports.StreamingClipboardMode = {}));
var StreamingInstanceType;
(function (StreamingInstanceType) {
    StreamingInstanceType["g4dn_12xlarge"] = "g4dn.12xlarge";
    StreamingInstanceType["g4dn_16xlarge"] = "g4dn.16xlarge";
    StreamingInstanceType["g4dn_2xlarge"] = "g4dn.2xlarge";
    StreamingInstanceType["g4dn_4xlarge"] = "g4dn.4xlarge";
    StreamingInstanceType["g4dn_8xlarge"] = "g4dn.8xlarge";
    StreamingInstanceType["g4dn_xlarge"] = "g4dn.xlarge";
})(StreamingInstanceType = exports.StreamingInstanceType || (exports.StreamingInstanceType = {}));
var StreamConfigurationCreate;
(function (StreamConfigurationCreate) {
    /**
     * @internal
     */
    StreamConfigurationCreate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamConfigurationCreate = exports.StreamConfigurationCreate || (exports.StreamConfigurationCreate = {}));
var CreateLaunchProfileRequest;
(function (CreateLaunchProfileRequest) {
    /**
     * @internal
     */
    CreateLaunchProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchProfileRequest = exports.CreateLaunchProfileRequest || (exports.CreateLaunchProfileRequest = {}));
var LaunchProfileState;
(function (LaunchProfileState) {
    LaunchProfileState["CREATE_FAILED"] = "CREATE_FAILED";
    LaunchProfileState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    LaunchProfileState["DELETED"] = "DELETED";
    LaunchProfileState["DELETE_FAILED"] = "DELETE_FAILED";
    LaunchProfileState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    LaunchProfileState["READY"] = "READY";
    LaunchProfileState["UPDATE_FAILED"] = "UPDATE_FAILED";
    LaunchProfileState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(LaunchProfileState = exports.LaunchProfileState || (exports.LaunchProfileState = {}));
var LaunchProfileStatusCode;
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
})(LaunchProfileStatusCode = exports.LaunchProfileStatusCode || (exports.LaunchProfileStatusCode = {}));
var StreamConfiguration;
(function (StreamConfiguration) {
    /**
     * @internal
     */
    StreamConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamConfiguration = exports.StreamConfiguration || (exports.StreamConfiguration = {}));
var LaunchProfile;
(function (LaunchProfile) {
    /**
     * @internal
     */
    LaunchProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchProfile = exports.LaunchProfile || (exports.LaunchProfile = {}));
var CreateLaunchProfileResponse;
(function (CreateLaunchProfileResponse) {
    /**
     * @internal
     */
    CreateLaunchProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchProfileResponse = exports.CreateLaunchProfileResponse || (exports.CreateLaunchProfileResponse = {}));
var CreateStreamingImageRequest;
(function (CreateStreamingImageRequest) {
    /**
     * @internal
     */
    CreateStreamingImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingImageRequest = exports.CreateStreamingImageRequest || (exports.CreateStreamingImageRequest = {}));
var StreamingImageEncryptionConfigurationKeyType;
(function (StreamingImageEncryptionConfigurationKeyType) {
    StreamingImageEncryptionConfigurationKeyType["CUSTOMER_MANAGED_KEY"] = "CUSTOMER_MANAGED_KEY";
})(StreamingImageEncryptionConfigurationKeyType = exports.StreamingImageEncryptionConfigurationKeyType || (exports.StreamingImageEncryptionConfigurationKeyType = {}));
var StreamingImageEncryptionConfiguration;
(function (StreamingImageEncryptionConfiguration) {
    /**
     * @internal
     */
    StreamingImageEncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamingImageEncryptionConfiguration = exports.StreamingImageEncryptionConfiguration || (exports.StreamingImageEncryptionConfiguration = {}));
var StreamingImageState;
(function (StreamingImageState) {
    StreamingImageState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingImageState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingImageState["DELETED"] = "DELETED";
    StreamingImageState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingImageState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingImageState["READY"] = "READY";
    StreamingImageState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StreamingImageState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StreamingImageState = exports.StreamingImageState || (exports.StreamingImageState = {}));
var StreamingImageStatusCode;
(function (StreamingImageStatusCode) {
    StreamingImageStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StreamingImageStatusCode["STREAMING_IMAGE_CREATE_IN_PROGRESS"] = "STREAMING_IMAGE_CREATE_IN_PROGRESS";
    StreamingImageStatusCode["STREAMING_IMAGE_DELETED"] = "STREAMING_IMAGE_DELETED";
    StreamingImageStatusCode["STREAMING_IMAGE_DELETE_IN_PROGRESS"] = "STREAMING_IMAGE_DELETE_IN_PROGRESS";
    StreamingImageStatusCode["STREAMING_IMAGE_READY"] = "STREAMING_IMAGE_READY";
    StreamingImageStatusCode["STREAMING_IMAGE_UPDATE_IN_PROGRESS"] = "STREAMING_IMAGE_UPDATE_IN_PROGRESS";
})(StreamingImageStatusCode = exports.StreamingImageStatusCode || (exports.StreamingImageStatusCode = {}));
var StreamingImage;
(function (StreamingImage) {
    /**
     * @internal
     */
    StreamingImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamingImage = exports.StreamingImage || (exports.StreamingImage = {}));
var CreateStreamingImageResponse;
(function (CreateStreamingImageResponse) {
    /**
     * @internal
     */
    CreateStreamingImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingImageResponse = exports.CreateStreamingImageResponse || (exports.CreateStreamingImageResponse = {}));
var CreateStreamingSessionRequest;
(function (CreateStreamingSessionRequest) {
    /**
     * @internal
     */
    CreateStreamingSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingSessionRequest = exports.CreateStreamingSessionRequest || (exports.CreateStreamingSessionRequest = {}));
var StreamingSessionState;
(function (StreamingSessionState) {
    StreamingSessionState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingSessionState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingSessionState["DELETED"] = "DELETED";
    StreamingSessionState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingSessionState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingSessionState["READY"] = "READY";
})(StreamingSessionState = exports.StreamingSessionState || (exports.StreamingSessionState = {}));
var StreamingSessionStatusCode;
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
})(StreamingSessionStatusCode = exports.StreamingSessionStatusCode || (exports.StreamingSessionStatusCode = {}));
var StreamingSession;
(function (StreamingSession) {
    /**
     * @internal
     */
    StreamingSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamingSession = exports.StreamingSession || (exports.StreamingSession = {}));
var CreateStreamingSessionResponse;
(function (CreateStreamingSessionResponse) {
    /**
     * @internal
     */
    CreateStreamingSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingSessionResponse = exports.CreateStreamingSessionResponse || (exports.CreateStreamingSessionResponse = {}));
var CreateStreamingSessionStreamRequest;
(function (CreateStreamingSessionStreamRequest) {
    /**
     * @internal
     */
    CreateStreamingSessionStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingSessionStreamRequest = exports.CreateStreamingSessionStreamRequest || (exports.CreateStreamingSessionStreamRequest = {}));
var StreamingSessionStreamState;
(function (StreamingSessionStreamState) {
    StreamingSessionStreamState["CREATE_FAILED"] = "CREATE_FAILED";
    StreamingSessionStreamState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StreamingSessionStreamState["DELETED"] = "DELETED";
    StreamingSessionStreamState["DELETE_FAILED"] = "DELETE_FAILED";
    StreamingSessionStreamState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StreamingSessionStreamState["READY"] = "READY";
})(StreamingSessionStreamState = exports.StreamingSessionStreamState || (exports.StreamingSessionStreamState = {}));
var StreamingSessionStreamStatusCode;
(function (StreamingSessionStreamStatusCode) {
    StreamingSessionStreamStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    StreamingSessionStreamStatusCode["NETWORK_CONNECTION_ERROR"] = "NETWORK_CONNECTION_ERROR";
    StreamingSessionStreamStatusCode["STREAM_CREATE_IN_PROGRESS"] = "STREAM_CREATE_IN_PROGRESS";
    StreamingSessionStreamStatusCode["STREAM_DELETED"] = "STREAM_DELETED";
    StreamingSessionStreamStatusCode["STREAM_DELETE_IN_PROGRESS"] = "STREAM_DELETE_IN_PROGRESS";
    StreamingSessionStreamStatusCode["STREAM_READY"] = "STREAM_READY";
})(StreamingSessionStreamStatusCode = exports.StreamingSessionStreamStatusCode || (exports.StreamingSessionStreamStatusCode = {}));
var StreamingSessionStream;
(function (StreamingSessionStream) {
    /**
     * @internal
     */
    StreamingSessionStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamingSessionStream = exports.StreamingSessionStream || (exports.StreamingSessionStream = {}));
var CreateStreamingSessionStreamResponse;
(function (CreateStreamingSessionStreamResponse) {
    /**
     * @internal
     */
    CreateStreamingSessionStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamingSessionStreamResponse = exports.CreateStreamingSessionStreamResponse || (exports.CreateStreamingSessionStreamResponse = {}));
var StudioEncryptionConfigurationKeyType;
(function (StudioEncryptionConfigurationKeyType) {
    StudioEncryptionConfigurationKeyType["AWS_OWNED_KEY"] = "AWS_OWNED_KEY";
    StudioEncryptionConfigurationKeyType["CUSTOMER_MANAGED_KEY"] = "CUSTOMER_MANAGED_KEY";
})(StudioEncryptionConfigurationKeyType = exports.StudioEncryptionConfigurationKeyType || (exports.StudioEncryptionConfigurationKeyType = {}));
var StudioEncryptionConfiguration;
(function (StudioEncryptionConfiguration) {
    /**
     * @internal
     */
    StudioEncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioEncryptionConfiguration = exports.StudioEncryptionConfiguration || (exports.StudioEncryptionConfiguration = {}));
var CreateStudioRequest;
(function (CreateStudioRequest) {
    /**
     * @internal
     */
    CreateStudioRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioRequest = exports.CreateStudioRequest || (exports.CreateStudioRequest = {}));
var StudioState;
(function (StudioState) {
    StudioState["CREATE_FAILED"] = "CREATE_FAILED";
    StudioState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StudioState["DELETED"] = "DELETED";
    StudioState["DELETE_FAILED"] = "DELETE_FAILED";
    StudioState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StudioState["READY"] = "READY";
    StudioState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StudioState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StudioState = exports.StudioState || (exports.StudioState = {}));
var StudioStatusCode;
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
})(StudioStatusCode = exports.StudioStatusCode || (exports.StudioStatusCode = {}));
var Studio;
(function (Studio) {
    /**
     * @internal
     */
    Studio.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Studio = exports.Studio || (exports.Studio = {}));
var CreateStudioResponse;
(function (CreateStudioResponse) {
    /**
     * @internal
     */
    CreateStudioResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioResponse = exports.CreateStudioResponse || (exports.CreateStudioResponse = {}));
var LicenseServiceConfiguration;
(function (LicenseServiceConfiguration) {
    /**
     * @internal
     */
    LicenseServiceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseServiceConfiguration = exports.LicenseServiceConfiguration || (exports.LicenseServiceConfiguration = {}));
var SharedFileSystemConfiguration;
(function (SharedFileSystemConfiguration) {
    /**
     * @internal
     */
    SharedFileSystemConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SharedFileSystemConfiguration = exports.SharedFileSystemConfiguration || (exports.SharedFileSystemConfiguration = {}));
var StudioComponentConfiguration;
(function (StudioComponentConfiguration) {
    /**
     * @internal
     */
    StudioComponentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioComponentConfiguration = exports.StudioComponentConfiguration || (exports.StudioComponentConfiguration = {}));
var LaunchProfilePlatform;
(function (LaunchProfilePlatform) {
    LaunchProfilePlatform["LINUX"] = "LINUX";
    LaunchProfilePlatform["WINDOWS"] = "WINDOWS";
})(LaunchProfilePlatform = exports.LaunchProfilePlatform || (exports.LaunchProfilePlatform = {}));
var StudioComponentInitializationScriptRunContext;
(function (StudioComponentInitializationScriptRunContext) {
    StudioComponentInitializationScriptRunContext["SYSTEM_INITIALIZATION"] = "SYSTEM_INITIALIZATION";
    StudioComponentInitializationScriptRunContext["USER_INITIALIZATION"] = "USER_INITIALIZATION";
})(StudioComponentInitializationScriptRunContext = exports.StudioComponentInitializationScriptRunContext || (exports.StudioComponentInitializationScriptRunContext = {}));
var StudioComponentInitializationScript;
(function (StudioComponentInitializationScript) {
    /**
     * @internal
     */
    StudioComponentInitializationScript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioComponentInitializationScript = exports.StudioComponentInitializationScript || (exports.StudioComponentInitializationScript = {}));
var ScriptParameterKeyValue;
(function (ScriptParameterKeyValue) {
    /**
     * @internal
     */
    ScriptParameterKeyValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScriptParameterKeyValue = exports.ScriptParameterKeyValue || (exports.ScriptParameterKeyValue = {}));
var StudioComponentSubtype;
(function (StudioComponentSubtype) {
    StudioComponentSubtype["AMAZON_FSX_FOR_LUSTRE"] = "AMAZON_FSX_FOR_LUSTRE";
    StudioComponentSubtype["AMAZON_FSX_FOR_WINDOWS"] = "AMAZON_FSX_FOR_WINDOWS";
    StudioComponentSubtype["AWS_MANAGED_MICROSOFT_AD"] = "AWS_MANAGED_MICROSOFT_AD";
    StudioComponentSubtype["CUSTOM"] = "CUSTOM";
})(StudioComponentSubtype = exports.StudioComponentSubtype || (exports.StudioComponentSubtype = {}));
var StudioComponentType;
(function (StudioComponentType) {
    StudioComponentType["ACTIVE_DIRECTORY"] = "ACTIVE_DIRECTORY";
    StudioComponentType["COMPUTE_FARM"] = "COMPUTE_FARM";
    StudioComponentType["CUSTOM"] = "CUSTOM";
    StudioComponentType["LICENSE_SERVICE"] = "LICENSE_SERVICE";
    StudioComponentType["SHARED_FILE_SYSTEM"] = "SHARED_FILE_SYSTEM";
})(StudioComponentType = exports.StudioComponentType || (exports.StudioComponentType = {}));
var CreateStudioComponentRequest;
(function (CreateStudioComponentRequest) {
    /**
     * @internal
     */
    CreateStudioComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioComponentRequest = exports.CreateStudioComponentRequest || (exports.CreateStudioComponentRequest = {}));
var StudioComponentState;
(function (StudioComponentState) {
    StudioComponentState["CREATE_FAILED"] = "CREATE_FAILED";
    StudioComponentState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StudioComponentState["DELETED"] = "DELETED";
    StudioComponentState["DELETE_FAILED"] = "DELETE_FAILED";
    StudioComponentState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StudioComponentState["READY"] = "READY";
    StudioComponentState["UPDATE_FAILED"] = "UPDATE_FAILED";
    StudioComponentState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(StudioComponentState = exports.StudioComponentState || (exports.StudioComponentState = {}));
var StudioComponentStatusCode;
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
})(StudioComponentStatusCode = exports.StudioComponentStatusCode || (exports.StudioComponentStatusCode = {}));
var StudioComponent;
(function (StudioComponent) {
    /**
     * @internal
     */
    StudioComponent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioComponent = exports.StudioComponent || (exports.StudioComponent = {}));
var CreateStudioComponentResponse;
(function (CreateStudioComponentResponse) {
    /**
     * @internal
     */
    CreateStudioComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioComponentResponse = exports.CreateStudioComponentResponse || (exports.CreateStudioComponentResponse = {}));
var DeleteLaunchProfileRequest;
(function (DeleteLaunchProfileRequest) {
    /**
     * @internal
     */
    DeleteLaunchProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchProfileRequest = exports.DeleteLaunchProfileRequest || (exports.DeleteLaunchProfileRequest = {}));
var DeleteLaunchProfileResponse;
(function (DeleteLaunchProfileResponse) {
    /**
     * @internal
     */
    DeleteLaunchProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchProfileResponse = exports.DeleteLaunchProfileResponse || (exports.DeleteLaunchProfileResponse = {}));
var DeleteLaunchProfileMemberRequest;
(function (DeleteLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    DeleteLaunchProfileMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchProfileMemberRequest = exports.DeleteLaunchProfileMemberRequest || (exports.DeleteLaunchProfileMemberRequest = {}));
var DeleteLaunchProfileMemberResponse;
(function (DeleteLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    DeleteLaunchProfileMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchProfileMemberResponse = exports.DeleteLaunchProfileMemberResponse || (exports.DeleteLaunchProfileMemberResponse = {}));
var DeleteStreamingImageRequest;
(function (DeleteStreamingImageRequest) {
    /**
     * @internal
     */
    DeleteStreamingImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamingImageRequest = exports.DeleteStreamingImageRequest || (exports.DeleteStreamingImageRequest = {}));
var DeleteStreamingImageResponse;
(function (DeleteStreamingImageResponse) {
    /**
     * @internal
     */
    DeleteStreamingImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamingImageResponse = exports.DeleteStreamingImageResponse || (exports.DeleteStreamingImageResponse = {}));
var DeleteStreamingSessionRequest;
(function (DeleteStreamingSessionRequest) {
    /**
     * @internal
     */
    DeleteStreamingSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamingSessionRequest = exports.DeleteStreamingSessionRequest || (exports.DeleteStreamingSessionRequest = {}));
var DeleteStreamingSessionResponse;
(function (DeleteStreamingSessionResponse) {
    /**
     * @internal
     */
    DeleteStreamingSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamingSessionResponse = exports.DeleteStreamingSessionResponse || (exports.DeleteStreamingSessionResponse = {}));
var DeleteStudioRequest;
(function (DeleteStudioRequest) {
    /**
     * @internal
     */
    DeleteStudioRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioRequest = exports.DeleteStudioRequest || (exports.DeleteStudioRequest = {}));
var DeleteStudioResponse;
(function (DeleteStudioResponse) {
    /**
     * @internal
     */
    DeleteStudioResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioResponse = exports.DeleteStudioResponse || (exports.DeleteStudioResponse = {}));
var DeleteStudioComponentRequest;
(function (DeleteStudioComponentRequest) {
    /**
     * @internal
     */
    DeleteStudioComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioComponentRequest = exports.DeleteStudioComponentRequest || (exports.DeleteStudioComponentRequest = {}));
var DeleteStudioComponentResponse;
(function (DeleteStudioComponentResponse) {
    /**
     * @internal
     */
    DeleteStudioComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioComponentResponse = exports.DeleteStudioComponentResponse || (exports.DeleteStudioComponentResponse = {}));
var DeleteStudioMemberRequest;
(function (DeleteStudioMemberRequest) {
    /**
     * @internal
     */
    DeleteStudioMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioMemberRequest = exports.DeleteStudioMemberRequest || (exports.DeleteStudioMemberRequest = {}));
var DeleteStudioMemberResponse;
(function (DeleteStudioMemberResponse) {
    /**
     * @internal
     */
    DeleteStudioMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioMemberResponse = exports.DeleteStudioMemberResponse || (exports.DeleteStudioMemberResponse = {}));
var Eula;
(function (Eula) {
    /**
     * @internal
     */
    Eula.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Eula = exports.Eula || (exports.Eula = {}));
var GetEulaRequest;
(function (GetEulaRequest) {
    /**
     * @internal
     */
    GetEulaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEulaRequest = exports.GetEulaRequest || (exports.GetEulaRequest = {}));
var GetEulaResponse;
(function (GetEulaResponse) {
    /**
     * @internal
     */
    GetEulaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEulaResponse = exports.GetEulaResponse || (exports.GetEulaResponse = {}));
var GetLaunchProfileRequest;
(function (GetLaunchProfileRequest) {
    /**
     * @internal
     */
    GetLaunchProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileRequest = exports.GetLaunchProfileRequest || (exports.GetLaunchProfileRequest = {}));
var GetLaunchProfileResponse;
(function (GetLaunchProfileResponse) {
    /**
     * @internal
     */
    GetLaunchProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileResponse = exports.GetLaunchProfileResponse || (exports.GetLaunchProfileResponse = {}));
var GetLaunchProfileDetailsRequest;
(function (GetLaunchProfileDetailsRequest) {
    /**
     * @internal
     */
    GetLaunchProfileDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileDetailsRequest = exports.GetLaunchProfileDetailsRequest || (exports.GetLaunchProfileDetailsRequest = {}));
var StudioComponentSummary;
(function (StudioComponentSummary) {
    /**
     * @internal
     */
    StudioComponentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioComponentSummary = exports.StudioComponentSummary || (exports.StudioComponentSummary = {}));
var GetLaunchProfileDetailsResponse;
(function (GetLaunchProfileDetailsResponse) {
    /**
     * @internal
     */
    GetLaunchProfileDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileDetailsResponse = exports.GetLaunchProfileDetailsResponse || (exports.GetLaunchProfileDetailsResponse = {}));
var GetLaunchProfileInitializationRequest;
(function (GetLaunchProfileInitializationRequest) {
    /**
     * @internal
     */
    GetLaunchProfileInitializationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileInitializationRequest = exports.GetLaunchProfileInitializationRequest || (exports.GetLaunchProfileInitializationRequest = {}));
var LaunchProfileInitializationActiveDirectory;
(function (LaunchProfileInitializationActiveDirectory) {
    /**
     * @internal
     */
    LaunchProfileInitializationActiveDirectory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchProfileInitializationActiveDirectory = exports.LaunchProfileInitializationActiveDirectory || (exports.LaunchProfileInitializationActiveDirectory = {}));
var LaunchProfileInitializationScript;
(function (LaunchProfileInitializationScript) {
    /**
     * @internal
     */
    LaunchProfileInitializationScript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchProfileInitializationScript = exports.LaunchProfileInitializationScript || (exports.LaunchProfileInitializationScript = {}));
var LaunchProfileInitialization;
(function (LaunchProfileInitialization) {
    /**
     * @internal
     */
    LaunchProfileInitialization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchProfileInitialization = exports.LaunchProfileInitialization || (exports.LaunchProfileInitialization = {}));
var GetLaunchProfileInitializationResponse;
(function (GetLaunchProfileInitializationResponse) {
    /**
     * @internal
     */
    GetLaunchProfileInitializationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileInitializationResponse = exports.GetLaunchProfileInitializationResponse || (exports.GetLaunchProfileInitializationResponse = {}));
var GetLaunchProfileMemberRequest;
(function (GetLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    GetLaunchProfileMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileMemberRequest = exports.GetLaunchProfileMemberRequest || (exports.GetLaunchProfileMemberRequest = {}));
var LaunchProfilePersona;
(function (LaunchProfilePersona) {
    LaunchProfilePersona["USER"] = "USER";
})(LaunchProfilePersona = exports.LaunchProfilePersona || (exports.LaunchProfilePersona = {}));
var LaunchProfileMembership;
(function (LaunchProfileMembership) {
    /**
     * @internal
     */
    LaunchProfileMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchProfileMembership = exports.LaunchProfileMembership || (exports.LaunchProfileMembership = {}));
var GetLaunchProfileMemberResponse;
(function (GetLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    GetLaunchProfileMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchProfileMemberResponse = exports.GetLaunchProfileMemberResponse || (exports.GetLaunchProfileMemberResponse = {}));
var GetStreamingImageRequest;
(function (GetStreamingImageRequest) {
    /**
     * @internal
     */
    GetStreamingImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingImageRequest = exports.GetStreamingImageRequest || (exports.GetStreamingImageRequest = {}));
var GetStreamingImageResponse;
(function (GetStreamingImageResponse) {
    /**
     * @internal
     */
    GetStreamingImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingImageResponse = exports.GetStreamingImageResponse || (exports.GetStreamingImageResponse = {}));
var GetStreamingSessionRequest;
(function (GetStreamingSessionRequest) {
    /**
     * @internal
     */
    GetStreamingSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingSessionRequest = exports.GetStreamingSessionRequest || (exports.GetStreamingSessionRequest = {}));
var GetStreamingSessionResponse;
(function (GetStreamingSessionResponse) {
    /**
     * @internal
     */
    GetStreamingSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingSessionResponse = exports.GetStreamingSessionResponse || (exports.GetStreamingSessionResponse = {}));
var GetStreamingSessionStreamRequest;
(function (GetStreamingSessionStreamRequest) {
    /**
     * @internal
     */
    GetStreamingSessionStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingSessionStreamRequest = exports.GetStreamingSessionStreamRequest || (exports.GetStreamingSessionStreamRequest = {}));
var GetStreamingSessionStreamResponse;
(function (GetStreamingSessionStreamResponse) {
    /**
     * @internal
     */
    GetStreamingSessionStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStreamingSessionStreamResponse = exports.GetStreamingSessionStreamResponse || (exports.GetStreamingSessionStreamResponse = {}));
var GetStudioRequest;
(function (GetStudioRequest) {
    /**
     * @internal
     */
    GetStudioRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioRequest = exports.GetStudioRequest || (exports.GetStudioRequest = {}));
var GetStudioResponse;
(function (GetStudioResponse) {
    /**
     * @internal
     */
    GetStudioResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioResponse = exports.GetStudioResponse || (exports.GetStudioResponse = {}));
var GetStudioComponentRequest;
(function (GetStudioComponentRequest) {
    /**
     * @internal
     */
    GetStudioComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioComponentRequest = exports.GetStudioComponentRequest || (exports.GetStudioComponentRequest = {}));
var GetStudioComponentResponse;
(function (GetStudioComponentResponse) {
    /**
     * @internal
     */
    GetStudioComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioComponentResponse = exports.GetStudioComponentResponse || (exports.GetStudioComponentResponse = {}));
var GetStudioMemberRequest;
(function (GetStudioMemberRequest) {
    /**
     * @internal
     */
    GetStudioMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioMemberRequest = exports.GetStudioMemberRequest || (exports.GetStudioMemberRequest = {}));
var StudioPersona;
(function (StudioPersona) {
    StudioPersona["ADMINISTRATOR"] = "ADMINISTRATOR";
})(StudioPersona = exports.StudioPersona || (exports.StudioPersona = {}));
var StudioMembership;
(function (StudioMembership) {
    /**
     * @internal
     */
    StudioMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioMembership = exports.StudioMembership || (exports.StudioMembership = {}));
var GetStudioMemberResponse;
(function (GetStudioMemberResponse) {
    /**
     * @internal
     */
    GetStudioMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioMemberResponse = exports.GetStudioMemberResponse || (exports.GetStudioMemberResponse = {}));
var ListEulaAcceptancesRequest;
(function (ListEulaAcceptancesRequest) {
    /**
     * @internal
     */
    ListEulaAcceptancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEulaAcceptancesRequest = exports.ListEulaAcceptancesRequest || (exports.ListEulaAcceptancesRequest = {}));
var ListEulaAcceptancesResponse;
(function (ListEulaAcceptancesResponse) {
    /**
     * @internal
     */
    ListEulaAcceptancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEulaAcceptancesResponse = exports.ListEulaAcceptancesResponse || (exports.ListEulaAcceptancesResponse = {}));
var ListEulasRequest;
(function (ListEulasRequest) {
    /**
     * @internal
     */
    ListEulasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEulasRequest = exports.ListEulasRequest || (exports.ListEulasRequest = {}));
var ListEulasResponse;
(function (ListEulasResponse) {
    /**
     * @internal
     */
    ListEulasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEulasResponse = exports.ListEulasResponse || (exports.ListEulasResponse = {}));
var ListLaunchProfileMembersRequest;
(function (ListLaunchProfileMembersRequest) {
    /**
     * @internal
     */
    ListLaunchProfileMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchProfileMembersRequest = exports.ListLaunchProfileMembersRequest || (exports.ListLaunchProfileMembersRequest = {}));
var ListLaunchProfileMembersResponse;
(function (ListLaunchProfileMembersResponse) {
    /**
     * @internal
     */
    ListLaunchProfileMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchProfileMembersResponse = exports.ListLaunchProfileMembersResponse || (exports.ListLaunchProfileMembersResponse = {}));
var ListLaunchProfilesRequest;
(function (ListLaunchProfilesRequest) {
    /**
     * @internal
     */
    ListLaunchProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchProfilesRequest = exports.ListLaunchProfilesRequest || (exports.ListLaunchProfilesRequest = {}));
var ListLaunchProfilesResponse;
(function (ListLaunchProfilesResponse) {
    /**
     * @internal
     */
    ListLaunchProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchProfilesResponse = exports.ListLaunchProfilesResponse || (exports.ListLaunchProfilesResponse = {}));
var ListStreamingImagesRequest;
(function (ListStreamingImagesRequest) {
    /**
     * @internal
     */
    ListStreamingImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamingImagesRequest = exports.ListStreamingImagesRequest || (exports.ListStreamingImagesRequest = {}));
var ListStreamingImagesResponse;
(function (ListStreamingImagesResponse) {
    /**
     * @internal
     */
    ListStreamingImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamingImagesResponse = exports.ListStreamingImagesResponse || (exports.ListStreamingImagesResponse = {}));
var ListStreamingSessionsRequest;
(function (ListStreamingSessionsRequest) {
    /**
     * @internal
     */
    ListStreamingSessionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamingSessionsRequest = exports.ListStreamingSessionsRequest || (exports.ListStreamingSessionsRequest = {}));
var ListStreamingSessionsResponse;
(function (ListStreamingSessionsResponse) {
    /**
     * @internal
     */
    ListStreamingSessionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamingSessionsResponse = exports.ListStreamingSessionsResponse || (exports.ListStreamingSessionsResponse = {}));
var ListStudioComponentsRequest;
(function (ListStudioComponentsRequest) {
    /**
     * @internal
     */
    ListStudioComponentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioComponentsRequest = exports.ListStudioComponentsRequest || (exports.ListStudioComponentsRequest = {}));
var ListStudioComponentsResponse;
(function (ListStudioComponentsResponse) {
    /**
     * @internal
     */
    ListStudioComponentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioComponentsResponse = exports.ListStudioComponentsResponse || (exports.ListStudioComponentsResponse = {}));
var ListStudioMembersRequest;
(function (ListStudioMembersRequest) {
    /**
     * @internal
     */
    ListStudioMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioMembersRequest = exports.ListStudioMembersRequest || (exports.ListStudioMembersRequest = {}));
var ListStudioMembersResponse;
(function (ListStudioMembersResponse) {
    /**
     * @internal
     */
    ListStudioMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioMembersResponse = exports.ListStudioMembersResponse || (exports.ListStudioMembersResponse = {}));
var ListStudiosRequest;
(function (ListStudiosRequest) {
    /**
     * @internal
     */
    ListStudiosRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudiosRequest = exports.ListStudiosRequest || (exports.ListStudiosRequest = {}));
var ListStudiosResponse;
(function (ListStudiosResponse) {
    /**
     * @internal
     */
    ListStudiosResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudiosResponse = exports.ListStudiosResponse || (exports.ListStudiosResponse = {}));
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
var NewLaunchProfileMember;
(function (NewLaunchProfileMember) {
    /**
     * @internal
     */
    NewLaunchProfileMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewLaunchProfileMember = exports.NewLaunchProfileMember || (exports.NewLaunchProfileMember = {}));
var NewStudioMember;
(function (NewStudioMember) {
    /**
     * @internal
     */
    NewStudioMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewStudioMember = exports.NewStudioMember || (exports.NewStudioMember = {}));
var PutLaunchProfileMembersRequest;
(function (PutLaunchProfileMembersRequest) {
    /**
     * @internal
     */
    PutLaunchProfileMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLaunchProfileMembersRequest = exports.PutLaunchProfileMembersRequest || (exports.PutLaunchProfileMembersRequest = {}));
var PutLaunchProfileMembersResponse;
(function (PutLaunchProfileMembersResponse) {
    /**
     * @internal
     */
    PutLaunchProfileMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLaunchProfileMembersResponse = exports.PutLaunchProfileMembersResponse || (exports.PutLaunchProfileMembersResponse = {}));
var PutStudioMembersRequest;
(function (PutStudioMembersRequest) {
    /**
     * @internal
     */
    PutStudioMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutStudioMembersRequest = exports.PutStudioMembersRequest || (exports.PutStudioMembersRequest = {}));
var PutStudioMembersResponse;
(function (PutStudioMembersResponse) {
    /**
     * @internal
     */
    PutStudioMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutStudioMembersResponse = exports.PutStudioMembersResponse || (exports.PutStudioMembersResponse = {}));
var StartStudioSSOConfigurationRepairRequest;
(function (StartStudioSSOConfigurationRepairRequest) {
    /**
     * @internal
     */
    StartStudioSSOConfigurationRepairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartStudioSSOConfigurationRepairRequest = exports.StartStudioSSOConfigurationRepairRequest || (exports.StartStudioSSOConfigurationRepairRequest = {}));
var StartStudioSSOConfigurationRepairResponse;
(function (StartStudioSSOConfigurationRepairResponse) {
    /**
     * @internal
     */
    StartStudioSSOConfigurationRepairResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartStudioSSOConfigurationRepairResponse = exports.StartStudioSSOConfigurationRepairResponse || (exports.StartStudioSSOConfigurationRepairResponse = {}));
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
var UpdateLaunchProfileRequest;
(function (UpdateLaunchProfileRequest) {
    /**
     * @internal
     */
    UpdateLaunchProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLaunchProfileRequest = exports.UpdateLaunchProfileRequest || (exports.UpdateLaunchProfileRequest = {}));
var UpdateLaunchProfileResponse;
(function (UpdateLaunchProfileResponse) {
    /**
     * @internal
     */
    UpdateLaunchProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLaunchProfileResponse = exports.UpdateLaunchProfileResponse || (exports.UpdateLaunchProfileResponse = {}));
var UpdateLaunchProfileMemberRequest;
(function (UpdateLaunchProfileMemberRequest) {
    /**
     * @internal
     */
    UpdateLaunchProfileMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLaunchProfileMemberRequest = exports.UpdateLaunchProfileMemberRequest || (exports.UpdateLaunchProfileMemberRequest = {}));
var UpdateLaunchProfileMemberResponse;
(function (UpdateLaunchProfileMemberResponse) {
    /**
     * @internal
     */
    UpdateLaunchProfileMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLaunchProfileMemberResponse = exports.UpdateLaunchProfileMemberResponse || (exports.UpdateLaunchProfileMemberResponse = {}));
var UpdateStreamingImageRequest;
(function (UpdateStreamingImageRequest) {
    /**
     * @internal
     */
    UpdateStreamingImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamingImageRequest = exports.UpdateStreamingImageRequest || (exports.UpdateStreamingImageRequest = {}));
var UpdateStreamingImageResponse;
(function (UpdateStreamingImageResponse) {
    /**
     * @internal
     */
    UpdateStreamingImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamingImageResponse = exports.UpdateStreamingImageResponse || (exports.UpdateStreamingImageResponse = {}));
var UpdateStudioRequest;
(function (UpdateStudioRequest) {
    /**
     * @internal
     */
    UpdateStudioRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioRequest = exports.UpdateStudioRequest || (exports.UpdateStudioRequest = {}));
var UpdateStudioResponse;
(function (UpdateStudioResponse) {
    /**
     * @internal
     */
    UpdateStudioResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioResponse = exports.UpdateStudioResponse || (exports.UpdateStudioResponse = {}));
var UpdateStudioComponentRequest;
(function (UpdateStudioComponentRequest) {
    /**
     * @internal
     */
    UpdateStudioComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioComponentRequest = exports.UpdateStudioComponentRequest || (exports.UpdateStudioComponentRequest = {}));
var UpdateStudioComponentResponse;
(function (UpdateStudioComponentResponse) {
    /**
     * @internal
     */
    UpdateStudioComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioComponentResponse = exports.UpdateStudioComponentResponse || (exports.UpdateStudioComponentResponse = {}));
//# sourceMappingURL=models_0.js.map