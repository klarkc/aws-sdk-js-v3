import { __assign } from "tslib";
export var ImageStatus;
(function (ImageStatus) {
    ImageStatus["AVAILABLE"] = "AVAILABLE";
    ImageStatus["BUILDING"] = "BUILDING";
    ImageStatus["CANCELLED"] = "CANCELLED";
    ImageStatus["CREATING"] = "CREATING";
    ImageStatus["DELETED"] = "DELETED";
    ImageStatus["DEPRECATED"] = "DEPRECATED";
    ImageStatus["DISTRIBUTING"] = "DISTRIBUTING";
    ImageStatus["FAILED"] = "FAILED";
    ImageStatus["INTEGRATING"] = "INTEGRATING";
    ImageStatus["PENDING"] = "PENDING";
    ImageStatus["TESTING"] = "TESTING";
})(ImageStatus || (ImageStatus = {}));
export var ImageState;
(function (ImageState) {
    /**
     * @internal
     */
    ImageState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageState || (ImageState = {}));
export var Ami;
(function (Ami) {
    /**
     * @internal
     */
    Ami.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ami || (Ami = {}));
export var LaunchPermissionConfiguration;
(function (LaunchPermissionConfiguration) {
    /**
     * @internal
     */
    LaunchPermissionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchPermissionConfiguration || (LaunchPermissionConfiguration = {}));
export var AmiDistributionConfiguration;
(function (AmiDistributionConfiguration) {
    /**
     * @internal
     */
    AmiDistributionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AmiDistributionConfiguration || (AmiDistributionConfiguration = {}));
export var CallRateLimitExceededException;
(function (CallRateLimitExceededException) {
    /**
     * @internal
     */
    CallRateLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CallRateLimitExceededException || (CallRateLimitExceededException = {}));
export var CancelImageCreationRequest;
(function (CancelImageCreationRequest) {
    /**
     * @internal
     */
    CancelImageCreationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelImageCreationRequest || (CancelImageCreationRequest = {}));
export var CancelImageCreationResponse;
(function (CancelImageCreationResponse) {
    /**
     * @internal
     */
    CancelImageCreationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelImageCreationResponse || (CancelImageCreationResponse = {}));
export var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientException || (ClientException = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceException || (ServiceException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var Platform;
(function (Platform) {
    Platform["LINUX"] = "Linux";
    Platform["WINDOWS"] = "Windows";
})(Platform || (Platform = {}));
export var ComponentType;
(function (ComponentType) {
    ComponentType["BUILD"] = "BUILD";
    ComponentType["TEST"] = "TEST";
})(ComponentType || (ComponentType = {}));
export var Component;
(function (Component) {
    /**
     * @internal
     */
    Component.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Component || (Component = {}));
export var ComponentConfiguration;
(function (ComponentConfiguration) {
    /**
     * @internal
     */
    ComponentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComponentConfiguration || (ComponentConfiguration = {}));
export var ComponentFormat;
(function (ComponentFormat) {
    ComponentFormat["SHELL"] = "SHELL";
})(ComponentFormat || (ComponentFormat = {}));
export var ComponentSummary;
(function (ComponentSummary) {
    /**
     * @internal
     */
    ComponentSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComponentSummary || (ComponentSummary = {}));
export var ComponentVersion;
(function (ComponentVersion) {
    /**
     * @internal
     */
    ComponentVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComponentVersion || (ComponentVersion = {}));
export var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Container || (Container = {}));
export var ContainerRepositoryService;
(function (ContainerRepositoryService) {
    ContainerRepositoryService["ECR"] = "ECR";
})(ContainerRepositoryService || (ContainerRepositoryService = {}));
export var TargetContainerRepository;
(function (TargetContainerRepository) {
    /**
     * @internal
     */
    TargetContainerRepository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetContainerRepository || (TargetContainerRepository = {}));
export var ContainerDistributionConfiguration;
(function (ContainerDistributionConfiguration) {
    /**
     * @internal
     */
    ContainerDistributionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerDistributionConfiguration || (ContainerDistributionConfiguration = {}));
export var ContainerType;
(function (ContainerType) {
    ContainerType["DOCKER"] = "DOCKER";
})(ContainerType || (ContainerType = {}));
export var EbsVolumeType;
(function (EbsVolumeType) {
    EbsVolumeType["GP2"] = "gp2";
    EbsVolumeType["GP3"] = "gp3";
    EbsVolumeType["IO1"] = "io1";
    EbsVolumeType["IO2"] = "io2";
    EbsVolumeType["SC1"] = "sc1";
    EbsVolumeType["ST1"] = "st1";
    EbsVolumeType["STANDARD"] = "standard";
})(EbsVolumeType || (EbsVolumeType = {}));
export var EbsInstanceBlockDeviceSpecification;
(function (EbsInstanceBlockDeviceSpecification) {
    /**
     * @internal
     */
    EbsInstanceBlockDeviceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbsInstanceBlockDeviceSpecification || (EbsInstanceBlockDeviceSpecification = {}));
export var InstanceBlockDeviceMapping;
(function (InstanceBlockDeviceMapping) {
    /**
     * @internal
     */
    InstanceBlockDeviceMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceBlockDeviceMapping || (InstanceBlockDeviceMapping = {}));
export var InstanceConfiguration;
(function (InstanceConfiguration) {
    /**
     * @internal
     */
    InstanceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceConfiguration || (InstanceConfiguration = {}));
export var ContainerRecipe;
(function (ContainerRecipe) {
    /**
     * @internal
     */
    ContainerRecipe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerRecipe || (ContainerRecipe = {}));
export var ContainerRecipeSummary;
(function (ContainerRecipeSummary) {
    /**
     * @internal
     */
    ContainerRecipeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerRecipeSummary || (ContainerRecipeSummary = {}));
export var CreateComponentRequest;
(function (CreateComponentRequest) {
    /**
     * @internal
     */
    CreateComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateComponentRequest || (CreateComponentRequest = {}));
export var CreateComponentResponse;
(function (CreateComponentResponse) {
    /**
     * @internal
     */
    CreateComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateComponentResponse || (CreateComponentResponse = {}));
export var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterCombinationException || (InvalidParameterCombinationException = {}));
export var InvalidVersionNumberException;
(function (InvalidVersionNumberException) {
    /**
     * @internal
     */
    InvalidVersionNumberException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidVersionNumberException || (InvalidVersionNumberException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var CreateContainerRecipeRequest;
(function (CreateContainerRecipeRequest) {
    /**
     * @internal
     */
    CreateContainerRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerRecipeRequest || (CreateContainerRecipeRequest = {}));
export var CreateContainerRecipeResponse;
(function (CreateContainerRecipeResponse) {
    /**
     * @internal
     */
    CreateContainerRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerRecipeResponse || (CreateContainerRecipeResponse = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var LaunchTemplateConfiguration;
(function (LaunchTemplateConfiguration) {
    /**
     * @internal
     */
    LaunchTemplateConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchTemplateConfiguration || (LaunchTemplateConfiguration = {}));
export var Distribution;
(function (Distribution) {
    /**
     * @internal
     */
    Distribution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Distribution || (Distribution = {}));
export var CreateDistributionConfigurationRequest;
(function (CreateDistributionConfigurationRequest) {
    /**
     * @internal
     */
    CreateDistributionConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDistributionConfigurationRequest || (CreateDistributionConfigurationRequest = {}));
export var CreateDistributionConfigurationResponse;
(function (CreateDistributionConfigurationResponse) {
    /**
     * @internal
     */
    CreateDistributionConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDistributionConfigurationResponse || (CreateDistributionConfigurationResponse = {}));
export var ImageTestsConfiguration;
(function (ImageTestsConfiguration) {
    /**
     * @internal
     */
    ImageTestsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageTestsConfiguration || (ImageTestsConfiguration = {}));
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
export var PipelineExecutionStartCondition;
(function (PipelineExecutionStartCondition) {
    PipelineExecutionStartCondition["EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"] = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE";
    PipelineExecutionStartCondition["EXPRESSION_MATCH_ONLY"] = "EXPRESSION_MATCH_ONLY";
})(PipelineExecutionStartCondition || (PipelineExecutionStartCondition = {}));
export var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Schedule || (Schedule = {}));
export var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["DISABLED"] = "DISABLED";
    PipelineStatus["ENABLED"] = "ENABLED";
})(PipelineStatus || (PipelineStatus = {}));
export var CreateImagePipelineRequest;
(function (CreateImagePipelineRequest) {
    /**
     * @internal
     */
    CreateImagePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImagePipelineRequest || (CreateImagePipelineRequest = {}));
export var CreateImagePipelineResponse;
(function (CreateImagePipelineResponse) {
    /**
     * @internal
     */
    CreateImagePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImagePipelineResponse || (CreateImagePipelineResponse = {}));
export var CreateImageRecipeRequest;
(function (CreateImageRecipeRequest) {
    /**
     * @internal
     */
    CreateImageRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageRecipeRequest || (CreateImageRecipeRequest = {}));
export var CreateImageRecipeResponse;
(function (CreateImageRecipeResponse) {
    /**
     * @internal
     */
    CreateImageRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImageRecipeResponse || (CreateImageRecipeResponse = {}));
export var S3Logs;
(function (S3Logs) {
    /**
     * @internal
     */
    S3Logs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Logs || (S3Logs = {}));
export var Logging;
(function (Logging) {
    /**
     * @internal
     */
    Logging.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Logging || (Logging = {}));
export var CreateInfrastructureConfigurationRequest;
(function (CreateInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    CreateInfrastructureConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInfrastructureConfigurationRequest || (CreateInfrastructureConfigurationRequest = {}));
export var CreateInfrastructureConfigurationResponse;
(function (CreateInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    CreateInfrastructureConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInfrastructureConfigurationResponse || (CreateInfrastructureConfigurationResponse = {}));
export var DeleteComponentRequest;
(function (DeleteComponentRequest) {
    /**
     * @internal
     */
    DeleteComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteComponentRequest || (DeleteComponentRequest = {}));
export var DeleteComponentResponse;
(function (DeleteComponentResponse) {
    /**
     * @internal
     */
    DeleteComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteComponentResponse || (DeleteComponentResponse = {}));
export var ResourceDependencyException;
(function (ResourceDependencyException) {
    /**
     * @internal
     */
    ResourceDependencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDependencyException || (ResourceDependencyException = {}));
export var DeleteContainerRecipeRequest;
(function (DeleteContainerRecipeRequest) {
    /**
     * @internal
     */
    DeleteContainerRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerRecipeRequest || (DeleteContainerRecipeRequest = {}));
export var DeleteContainerRecipeResponse;
(function (DeleteContainerRecipeResponse) {
    /**
     * @internal
     */
    DeleteContainerRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerRecipeResponse || (DeleteContainerRecipeResponse = {}));
export var DeleteDistributionConfigurationRequest;
(function (DeleteDistributionConfigurationRequest) {
    /**
     * @internal
     */
    DeleteDistributionConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDistributionConfigurationRequest || (DeleteDistributionConfigurationRequest = {}));
export var DeleteDistributionConfigurationResponse;
(function (DeleteDistributionConfigurationResponse) {
    /**
     * @internal
     */
    DeleteDistributionConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDistributionConfigurationResponse || (DeleteDistributionConfigurationResponse = {}));
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
export var DeleteImagePipelineRequest;
(function (DeleteImagePipelineRequest) {
    /**
     * @internal
     */
    DeleteImagePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImagePipelineRequest || (DeleteImagePipelineRequest = {}));
export var DeleteImagePipelineResponse;
(function (DeleteImagePipelineResponse) {
    /**
     * @internal
     */
    DeleteImagePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImagePipelineResponse || (DeleteImagePipelineResponse = {}));
export var DeleteImageRecipeRequest;
(function (DeleteImageRecipeRequest) {
    /**
     * @internal
     */
    DeleteImageRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageRecipeRequest || (DeleteImageRecipeRequest = {}));
export var DeleteImageRecipeResponse;
(function (DeleteImageRecipeResponse) {
    /**
     * @internal
     */
    DeleteImageRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteImageRecipeResponse || (DeleteImageRecipeResponse = {}));
export var DeleteInfrastructureConfigurationRequest;
(function (DeleteInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    DeleteInfrastructureConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInfrastructureConfigurationRequest || (DeleteInfrastructureConfigurationRequest = {}));
export var DeleteInfrastructureConfigurationResponse;
(function (DeleteInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    DeleteInfrastructureConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInfrastructureConfigurationResponse || (DeleteInfrastructureConfigurationResponse = {}));
export var DistributionConfiguration;
(function (DistributionConfiguration) {
    /**
     * @internal
     */
    DistributionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DistributionConfiguration || (DistributionConfiguration = {}));
export var DistributionConfigurationSummary;
(function (DistributionConfigurationSummary) {
    /**
     * @internal
     */
    DistributionConfigurationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DistributionConfigurationSummary || (DistributionConfigurationSummary = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var GetComponentRequest;
(function (GetComponentRequest) {
    /**
     * @internal
     */
    GetComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComponentRequest || (GetComponentRequest = {}));
export var GetComponentResponse;
(function (GetComponentResponse) {
    /**
     * @internal
     */
    GetComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComponentResponse || (GetComponentResponse = {}));
export var GetComponentPolicyRequest;
(function (GetComponentPolicyRequest) {
    /**
     * @internal
     */
    GetComponentPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComponentPolicyRequest || (GetComponentPolicyRequest = {}));
export var GetComponentPolicyResponse;
(function (GetComponentPolicyResponse) {
    /**
     * @internal
     */
    GetComponentPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComponentPolicyResponse || (GetComponentPolicyResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var GetContainerRecipeRequest;
(function (GetContainerRecipeRequest) {
    /**
     * @internal
     */
    GetContainerRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerRecipeRequest || (GetContainerRecipeRequest = {}));
export var GetContainerRecipeResponse;
(function (GetContainerRecipeResponse) {
    /**
     * @internal
     */
    GetContainerRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerRecipeResponse || (GetContainerRecipeResponse = {}));
export var GetContainerRecipePolicyRequest;
(function (GetContainerRecipePolicyRequest) {
    /**
     * @internal
     */
    GetContainerRecipePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerRecipePolicyRequest || (GetContainerRecipePolicyRequest = {}));
export var GetContainerRecipePolicyResponse;
(function (GetContainerRecipePolicyResponse) {
    /**
     * @internal
     */
    GetContainerRecipePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerRecipePolicyResponse || (GetContainerRecipePolicyResponse = {}));
export var GetDistributionConfigurationRequest;
(function (GetDistributionConfigurationRequest) {
    /**
     * @internal
     */
    GetDistributionConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionConfigurationRequest || (GetDistributionConfigurationRequest = {}));
export var GetDistributionConfigurationResponse;
(function (GetDistributionConfigurationResponse) {
    /**
     * @internal
     */
    GetDistributionConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionConfigurationResponse || (GetDistributionConfigurationResponse = {}));
export var GetImageRequest;
(function (GetImageRequest) {
    /**
     * @internal
     */
    GetImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageRequest || (GetImageRequest = {}));
export var ImageType;
(function (ImageType) {
    ImageType["AMI"] = "AMI";
    ImageType["DOCKER"] = "DOCKER";
})(ImageType || (ImageType = {}));
export var ImageRecipe;
(function (ImageRecipe) {
    /**
     * @internal
     */
    ImageRecipe.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageRecipe || (ImageRecipe = {}));
export var InfrastructureConfiguration;
(function (InfrastructureConfiguration) {
    /**
     * @internal
     */
    InfrastructureConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InfrastructureConfiguration || (InfrastructureConfiguration = {}));
export var OutputResources;
(function (OutputResources) {
    /**
     * @internal
     */
    OutputResources.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputResources || (OutputResources = {}));
export var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Image || (Image = {}));
export var GetImageResponse;
(function (GetImageResponse) {
    /**
     * @internal
     */
    GetImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageResponse || (GetImageResponse = {}));
export var GetImagePipelineRequest;
(function (GetImagePipelineRequest) {
    /**
     * @internal
     */
    GetImagePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImagePipelineRequest || (GetImagePipelineRequest = {}));
export var ImagePipeline;
(function (ImagePipeline) {
    /**
     * @internal
     */
    ImagePipeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImagePipeline || (ImagePipeline = {}));
export var GetImagePipelineResponse;
(function (GetImagePipelineResponse) {
    /**
     * @internal
     */
    GetImagePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImagePipelineResponse || (GetImagePipelineResponse = {}));
export var GetImagePolicyRequest;
(function (GetImagePolicyRequest) {
    /**
     * @internal
     */
    GetImagePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImagePolicyRequest || (GetImagePolicyRequest = {}));
export var GetImagePolicyResponse;
(function (GetImagePolicyResponse) {
    /**
     * @internal
     */
    GetImagePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImagePolicyResponse || (GetImagePolicyResponse = {}));
export var GetImageRecipeRequest;
(function (GetImageRecipeRequest) {
    /**
     * @internal
     */
    GetImageRecipeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageRecipeRequest || (GetImageRecipeRequest = {}));
export var GetImageRecipeResponse;
(function (GetImageRecipeResponse) {
    /**
     * @internal
     */
    GetImageRecipeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageRecipeResponse || (GetImageRecipeResponse = {}));
export var GetImageRecipePolicyRequest;
(function (GetImageRecipePolicyRequest) {
    /**
     * @internal
     */
    GetImageRecipePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageRecipePolicyRequest || (GetImageRecipePolicyRequest = {}));
export var GetImageRecipePolicyResponse;
(function (GetImageRecipePolicyResponse) {
    /**
     * @internal
     */
    GetImageRecipePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImageRecipePolicyResponse || (GetImageRecipePolicyResponse = {}));
export var GetInfrastructureConfigurationRequest;
(function (GetInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    GetInfrastructureConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInfrastructureConfigurationRequest || (GetInfrastructureConfigurationRequest = {}));
export var GetInfrastructureConfigurationResponse;
(function (GetInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    GetInfrastructureConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInfrastructureConfigurationResponse || (GetInfrastructureConfigurationResponse = {}));
export var ImportComponentRequest;
(function (ImportComponentRequest) {
    /**
     * @internal
     */
    ImportComponentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportComponentRequest || (ImportComponentRequest = {}));
export var ImportComponentResponse;
(function (ImportComponentResponse) {
    /**
     * @internal
     */
    ImportComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportComponentResponse || (ImportComponentResponse = {}));
export var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPaginationTokenException || (InvalidPaginationTokenException = {}));
export var ListComponentBuildVersionsRequest;
(function (ListComponentBuildVersionsRequest) {
    /**
     * @internal
     */
    ListComponentBuildVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComponentBuildVersionsRequest || (ListComponentBuildVersionsRequest = {}));
export var ListComponentBuildVersionsResponse;
(function (ListComponentBuildVersionsResponse) {
    /**
     * @internal
     */
    ListComponentBuildVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComponentBuildVersionsResponse || (ListComponentBuildVersionsResponse = {}));
export var Ownership;
(function (Ownership) {
    Ownership["AMAZON"] = "Amazon";
    Ownership["SELF"] = "Self";
    Ownership["SHARED"] = "Shared";
})(Ownership || (Ownership = {}));
export var ListComponentsRequest;
(function (ListComponentsRequest) {
    /**
     * @internal
     */
    ListComponentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComponentsRequest || (ListComponentsRequest = {}));
export var ListComponentsResponse;
(function (ListComponentsResponse) {
    /**
     * @internal
     */
    ListComponentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComponentsResponse || (ListComponentsResponse = {}));
export var ListContainerRecipesRequest;
(function (ListContainerRecipesRequest) {
    /**
     * @internal
     */
    ListContainerRecipesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainerRecipesRequest || (ListContainerRecipesRequest = {}));
export var ListContainerRecipesResponse;
(function (ListContainerRecipesResponse) {
    /**
     * @internal
     */
    ListContainerRecipesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainerRecipesResponse || (ListContainerRecipesResponse = {}));
export var ListDistributionConfigurationsRequest;
(function (ListDistributionConfigurationsRequest) {
    /**
     * @internal
     */
    ListDistributionConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDistributionConfigurationsRequest || (ListDistributionConfigurationsRequest = {}));
export var ListDistributionConfigurationsResponse;
(function (ListDistributionConfigurationsResponse) {
    /**
     * @internal
     */
    ListDistributionConfigurationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDistributionConfigurationsResponse || (ListDistributionConfigurationsResponse = {}));
export var ListImageBuildVersionsRequest;
(function (ListImageBuildVersionsRequest) {
    /**
     * @internal
     */
    ListImageBuildVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImageBuildVersionsRequest || (ListImageBuildVersionsRequest = {}));
export var ImageSummary;
(function (ImageSummary) {
    /**
     * @internal
     */
    ImageSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageSummary || (ImageSummary = {}));
export var ListImageBuildVersionsResponse;
(function (ListImageBuildVersionsResponse) {
    /**
     * @internal
     */
    ListImageBuildVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImageBuildVersionsResponse || (ListImageBuildVersionsResponse = {}));
export var ListImagePackagesRequest;
(function (ListImagePackagesRequest) {
    /**
     * @internal
     */
    ListImagePackagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePackagesRequest || (ListImagePackagesRequest = {}));
export var ImagePackage;
(function (ImagePackage) {
    /**
     * @internal
     */
    ImagePackage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImagePackage || (ImagePackage = {}));
export var ListImagePackagesResponse;
(function (ListImagePackagesResponse) {
    /**
     * @internal
     */
    ListImagePackagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePackagesResponse || (ListImagePackagesResponse = {}));
export var ListImagePipelineImagesRequest;
(function (ListImagePipelineImagesRequest) {
    /**
     * @internal
     */
    ListImagePipelineImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePipelineImagesRequest || (ListImagePipelineImagesRequest = {}));
export var ListImagePipelineImagesResponse;
(function (ListImagePipelineImagesResponse) {
    /**
     * @internal
     */
    ListImagePipelineImagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePipelineImagesResponse || (ListImagePipelineImagesResponse = {}));
export var ListImagePipelinesRequest;
(function (ListImagePipelinesRequest) {
    /**
     * @internal
     */
    ListImagePipelinesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePipelinesRequest || (ListImagePipelinesRequest = {}));
export var ListImagePipelinesResponse;
(function (ListImagePipelinesResponse) {
    /**
     * @internal
     */
    ListImagePipelinesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagePipelinesResponse || (ListImagePipelinesResponse = {}));
export var ListImageRecipesRequest;
(function (ListImageRecipesRequest) {
    /**
     * @internal
     */
    ListImageRecipesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImageRecipesRequest || (ListImageRecipesRequest = {}));
export var ImageRecipeSummary;
(function (ImageRecipeSummary) {
    /**
     * @internal
     */
    ImageRecipeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageRecipeSummary || (ImageRecipeSummary = {}));
export var ListImageRecipesResponse;
(function (ListImageRecipesResponse) {
    /**
     * @internal
     */
    ListImageRecipesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImageRecipesResponse || (ListImageRecipesResponse = {}));
export var ListImagesRequest;
(function (ListImagesRequest) {
    /**
     * @internal
     */
    ListImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagesRequest || (ListImagesRequest = {}));
export var ImageVersion;
(function (ImageVersion) {
    /**
     * @internal
     */
    ImageVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageVersion || (ImageVersion = {}));
export var ListImagesResponse;
(function (ListImagesResponse) {
    /**
     * @internal
     */
    ListImagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagesResponse || (ListImagesResponse = {}));
export var ListInfrastructureConfigurationsRequest;
(function (ListInfrastructureConfigurationsRequest) {
    /**
     * @internal
     */
    ListInfrastructureConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInfrastructureConfigurationsRequest || (ListInfrastructureConfigurationsRequest = {}));
export var InfrastructureConfigurationSummary;
(function (InfrastructureConfigurationSummary) {
    /**
     * @internal
     */
    InfrastructureConfigurationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InfrastructureConfigurationSummary || (InfrastructureConfigurationSummary = {}));
export var ListInfrastructureConfigurationsResponse;
(function (ListInfrastructureConfigurationsResponse) {
    /**
     * @internal
     */
    ListInfrastructureConfigurationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInfrastructureConfigurationsResponse || (ListInfrastructureConfigurationsResponse = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
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
export var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
export var PutComponentPolicyRequest;
(function (PutComponentPolicyRequest) {
    /**
     * @internal
     */
    PutComponentPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutComponentPolicyRequest || (PutComponentPolicyRequest = {}));
export var PutComponentPolicyResponse;
(function (PutComponentPolicyResponse) {
    /**
     * @internal
     */
    PutComponentPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutComponentPolicyResponse || (PutComponentPolicyResponse = {}));
export var PutContainerRecipePolicyRequest;
(function (PutContainerRecipePolicyRequest) {
    /**
     * @internal
     */
    PutContainerRecipePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutContainerRecipePolicyRequest || (PutContainerRecipePolicyRequest = {}));
export var PutContainerRecipePolicyResponse;
(function (PutContainerRecipePolicyResponse) {
    /**
     * @internal
     */
    PutContainerRecipePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutContainerRecipePolicyResponse || (PutContainerRecipePolicyResponse = {}));
export var PutImagePolicyRequest;
(function (PutImagePolicyRequest) {
    /**
     * @internal
     */
    PutImagePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImagePolicyRequest || (PutImagePolicyRequest = {}));
export var PutImagePolicyResponse;
(function (PutImagePolicyResponse) {
    /**
     * @internal
     */
    PutImagePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImagePolicyResponse || (PutImagePolicyResponse = {}));
export var PutImageRecipePolicyRequest;
(function (PutImageRecipePolicyRequest) {
    /**
     * @internal
     */
    PutImageRecipePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageRecipePolicyRequest || (PutImageRecipePolicyRequest = {}));
export var PutImageRecipePolicyResponse;
(function (PutImageRecipePolicyResponse) {
    /**
     * @internal
     */
    PutImageRecipePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageRecipePolicyResponse || (PutImageRecipePolicyResponse = {}));
export var StartImagePipelineExecutionRequest;
(function (StartImagePipelineExecutionRequest) {
    /**
     * @internal
     */
    StartImagePipelineExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartImagePipelineExecutionRequest || (StartImagePipelineExecutionRequest = {}));
export var StartImagePipelineExecutionResponse;
(function (StartImagePipelineExecutionResponse) {
    /**
     * @internal
     */
    StartImagePipelineExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartImagePipelineExecutionResponse || (StartImagePipelineExecutionResponse = {}));
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
export var UpdateDistributionConfigurationRequest;
(function (UpdateDistributionConfigurationRequest) {
    /**
     * @internal
     */
    UpdateDistributionConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionConfigurationRequest || (UpdateDistributionConfigurationRequest = {}));
export var UpdateDistributionConfigurationResponse;
(function (UpdateDistributionConfigurationResponse) {
    /**
     * @internal
     */
    UpdateDistributionConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionConfigurationResponse || (UpdateDistributionConfigurationResponse = {}));
export var UpdateImagePipelineRequest;
(function (UpdateImagePipelineRequest) {
    /**
     * @internal
     */
    UpdateImagePipelineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateImagePipelineRequest || (UpdateImagePipelineRequest = {}));
export var UpdateImagePipelineResponse;
(function (UpdateImagePipelineResponse) {
    /**
     * @internal
     */
    UpdateImagePipelineResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateImagePipelineResponse || (UpdateImagePipelineResponse = {}));
export var UpdateInfrastructureConfigurationRequest;
(function (UpdateInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    UpdateInfrastructureConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInfrastructureConfigurationRequest || (UpdateInfrastructureConfigurationRequest = {}));
export var UpdateInfrastructureConfigurationResponse;
(function (UpdateInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    UpdateInfrastructureConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInfrastructureConfigurationResponse || (UpdateInfrastructureConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map