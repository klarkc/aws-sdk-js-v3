"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = exports.PipelineExecutionStartCondition = exports.CreateImageResponse = exports.CreateImageRequest = exports.ImageTestsConfiguration = exports.CreateDistributionConfigurationResponse = exports.CreateDistributionConfigurationRequest = exports.Distribution = exports.LaunchTemplateConfiguration = exports.ResourceAlreadyExistsException = exports.CreateContainerRecipeResponse = exports.CreateContainerRecipeRequest = exports.ServiceQuotaExceededException = exports.InvalidVersionNumberException = exports.InvalidParameterCombinationException = exports.CreateComponentResponse = exports.CreateComponentRequest = exports.ContainerRecipeSummary = exports.ContainerRecipe = exports.InstanceConfiguration = exports.InstanceBlockDeviceMapping = exports.EbsInstanceBlockDeviceSpecification = exports.EbsVolumeType = exports.ContainerType = exports.ContainerDistributionConfiguration = exports.TargetContainerRepository = exports.ContainerRepositoryService = exports.Container = exports.ComponentVersion = exports.ComponentSummary = exports.ComponentFormat = exports.ComponentConfiguration = exports.Component = exports.ComponentType = exports.Platform = exports.ServiceUnavailableException = exports.ServiceException = exports.ResourceInUseException = exports.InvalidRequestException = exports.IdempotentParameterMismatchException = exports.ForbiddenException = exports.ClientException = exports.CancelImageCreationResponse = exports.CancelImageCreationRequest = exports.CallRateLimitExceededException = exports.AmiDistributionConfiguration = exports.LaunchPermissionConfiguration = exports.Ami = exports.ImageState = exports.ImageStatus = void 0;
exports.GetImagePolicyResponse = exports.GetImagePolicyRequest = exports.GetImagePipelineResponse = exports.ImagePipeline = exports.GetImagePipelineRequest = exports.GetImageResponse = exports.Image = exports.OutputResources = exports.InfrastructureConfiguration = exports.ImageRecipe = exports.ImageType = exports.GetImageRequest = exports.GetDistributionConfigurationResponse = exports.GetDistributionConfigurationRequest = exports.GetContainerRecipePolicyResponse = exports.GetContainerRecipePolicyRequest = exports.GetContainerRecipeResponse = exports.GetContainerRecipeRequest = exports.ResourceNotFoundException = exports.GetComponentPolicyResponse = exports.GetComponentPolicyRequest = exports.GetComponentResponse = exports.GetComponentRequest = exports.Filter = exports.DistributionConfigurationSummary = exports.DistributionConfiguration = exports.DeleteInfrastructureConfigurationResponse = exports.DeleteInfrastructureConfigurationRequest = exports.DeleteImageRecipeResponse = exports.DeleteImageRecipeRequest = exports.DeleteImagePipelineResponse = exports.DeleteImagePipelineRequest = exports.DeleteImageResponse = exports.DeleteImageRequest = exports.DeleteDistributionConfigurationResponse = exports.DeleteDistributionConfigurationRequest = exports.DeleteContainerRecipeResponse = exports.DeleteContainerRecipeRequest = exports.ResourceDependencyException = exports.DeleteComponentResponse = exports.DeleteComponentRequest = exports.CreateInfrastructureConfigurationResponse = exports.CreateInfrastructureConfigurationRequest = exports.Logging = exports.S3Logs = exports.CreateImageRecipeResponse = exports.CreateImageRecipeRequest = exports.CreateImagePipelineResponse = exports.CreateImagePipelineRequest = exports.PipelineStatus = void 0;
exports.StartImagePipelineExecutionRequest = exports.PutImageRecipePolicyResponse = exports.PutImageRecipePolicyRequest = exports.PutImagePolicyResponse = exports.PutImagePolicyRequest = exports.PutContainerRecipePolicyResponse = exports.PutContainerRecipePolicyRequest = exports.PutComponentPolicyResponse = exports.PutComponentPolicyRequest = exports.InvalidParameterValueException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.InvalidParameterException = exports.ListInfrastructureConfigurationsResponse = exports.InfrastructureConfigurationSummary = exports.ListInfrastructureConfigurationsRequest = exports.ListImagesResponse = exports.ImageVersion = exports.ListImagesRequest = exports.ListImageRecipesResponse = exports.ImageRecipeSummary = exports.ListImageRecipesRequest = exports.ListImagePipelinesResponse = exports.ListImagePipelinesRequest = exports.ListImagePipelineImagesResponse = exports.ListImagePipelineImagesRequest = exports.ListImagePackagesResponse = exports.ImagePackage = exports.ListImagePackagesRequest = exports.ListImageBuildVersionsResponse = exports.ImageSummary = exports.ListImageBuildVersionsRequest = exports.ListDistributionConfigurationsResponse = exports.ListDistributionConfigurationsRequest = exports.ListContainerRecipesResponse = exports.ListContainerRecipesRequest = exports.ListComponentsResponse = exports.ListComponentsRequest = exports.Ownership = exports.ListComponentBuildVersionsResponse = exports.ListComponentBuildVersionsRequest = exports.InvalidPaginationTokenException = exports.ImportComponentResponse = exports.ImportComponentRequest = exports.GetInfrastructureConfigurationResponse = exports.GetInfrastructureConfigurationRequest = exports.GetImageRecipePolicyResponse = exports.GetImageRecipePolicyRequest = exports.GetImageRecipeResponse = exports.GetImageRecipeRequest = void 0;
exports.UpdateInfrastructureConfigurationResponse = exports.UpdateInfrastructureConfigurationRequest = exports.UpdateImagePipelineResponse = exports.UpdateImagePipelineRequest = exports.UpdateDistributionConfigurationResponse = exports.UpdateDistributionConfigurationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartImagePipelineExecutionResponse = void 0;
var ImageStatus;
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
})(ImageStatus = exports.ImageStatus || (exports.ImageStatus = {}));
var ImageState;
(function (ImageState) {
    /**
     * @internal
     */
    ImageState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageState = exports.ImageState || (exports.ImageState = {}));
var Ami;
(function (Ami) {
    /**
     * @internal
     */
    Ami.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ami = exports.Ami || (exports.Ami = {}));
var LaunchPermissionConfiguration;
(function (LaunchPermissionConfiguration) {
    /**
     * @internal
     */
    LaunchPermissionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchPermissionConfiguration = exports.LaunchPermissionConfiguration || (exports.LaunchPermissionConfiguration = {}));
var AmiDistributionConfiguration;
(function (AmiDistributionConfiguration) {
    /**
     * @internal
     */
    AmiDistributionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AmiDistributionConfiguration = exports.AmiDistributionConfiguration || (exports.AmiDistributionConfiguration = {}));
var CallRateLimitExceededException;
(function (CallRateLimitExceededException) {
    /**
     * @internal
     */
    CallRateLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CallRateLimitExceededException = exports.CallRateLimitExceededException || (exports.CallRateLimitExceededException = {}));
var CancelImageCreationRequest;
(function (CancelImageCreationRequest) {
    /**
     * @internal
     */
    CancelImageCreationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelImageCreationRequest = exports.CancelImageCreationRequest || (exports.CancelImageCreationRequest = {}));
var CancelImageCreationResponse;
(function (CancelImageCreationResponse) {
    /**
     * @internal
     */
    CancelImageCreationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelImageCreationResponse = exports.CancelImageCreationResponse || (exports.CancelImageCreationResponse = {}));
var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var Platform;
(function (Platform) {
    Platform["LINUX"] = "Linux";
    Platform["WINDOWS"] = "Windows";
})(Platform = exports.Platform || (exports.Platform = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["BUILD"] = "BUILD";
    ComponentType["TEST"] = "TEST";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
var Component;
(function (Component) {
    /**
     * @internal
     */
    Component.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Component = exports.Component || (exports.Component = {}));
var ComponentConfiguration;
(function (ComponentConfiguration) {
    /**
     * @internal
     */
    ComponentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComponentConfiguration = exports.ComponentConfiguration || (exports.ComponentConfiguration = {}));
var ComponentFormat;
(function (ComponentFormat) {
    ComponentFormat["SHELL"] = "SHELL";
})(ComponentFormat = exports.ComponentFormat || (exports.ComponentFormat = {}));
var ComponentSummary;
(function (ComponentSummary) {
    /**
     * @internal
     */
    ComponentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComponentSummary = exports.ComponentSummary || (exports.ComponentSummary = {}));
var ComponentVersion;
(function (ComponentVersion) {
    /**
     * @internal
     */
    ComponentVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComponentVersion = exports.ComponentVersion || (exports.ComponentVersion = {}));
var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Container = exports.Container || (exports.Container = {}));
var ContainerRepositoryService;
(function (ContainerRepositoryService) {
    ContainerRepositoryService["ECR"] = "ECR";
})(ContainerRepositoryService = exports.ContainerRepositoryService || (exports.ContainerRepositoryService = {}));
var TargetContainerRepository;
(function (TargetContainerRepository) {
    /**
     * @internal
     */
    TargetContainerRepository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetContainerRepository = exports.TargetContainerRepository || (exports.TargetContainerRepository = {}));
var ContainerDistributionConfiguration;
(function (ContainerDistributionConfiguration) {
    /**
     * @internal
     */
    ContainerDistributionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDistributionConfiguration = exports.ContainerDistributionConfiguration || (exports.ContainerDistributionConfiguration = {}));
var ContainerType;
(function (ContainerType) {
    ContainerType["DOCKER"] = "DOCKER";
})(ContainerType = exports.ContainerType || (exports.ContainerType = {}));
var EbsVolumeType;
(function (EbsVolumeType) {
    EbsVolumeType["GP2"] = "gp2";
    EbsVolumeType["GP3"] = "gp3";
    EbsVolumeType["IO1"] = "io1";
    EbsVolumeType["IO2"] = "io2";
    EbsVolumeType["SC1"] = "sc1";
    EbsVolumeType["ST1"] = "st1";
    EbsVolumeType["STANDARD"] = "standard";
})(EbsVolumeType = exports.EbsVolumeType || (exports.EbsVolumeType = {}));
var EbsInstanceBlockDeviceSpecification;
(function (EbsInstanceBlockDeviceSpecification) {
    /**
     * @internal
     */
    EbsInstanceBlockDeviceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsInstanceBlockDeviceSpecification = exports.EbsInstanceBlockDeviceSpecification || (exports.EbsInstanceBlockDeviceSpecification = {}));
var InstanceBlockDeviceMapping;
(function (InstanceBlockDeviceMapping) {
    /**
     * @internal
     */
    InstanceBlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceBlockDeviceMapping = exports.InstanceBlockDeviceMapping || (exports.InstanceBlockDeviceMapping = {}));
var InstanceConfiguration;
(function (InstanceConfiguration) {
    /**
     * @internal
     */
    InstanceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceConfiguration = exports.InstanceConfiguration || (exports.InstanceConfiguration = {}));
var ContainerRecipe;
(function (ContainerRecipe) {
    /**
     * @internal
     */
    ContainerRecipe.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerRecipe = exports.ContainerRecipe || (exports.ContainerRecipe = {}));
var ContainerRecipeSummary;
(function (ContainerRecipeSummary) {
    /**
     * @internal
     */
    ContainerRecipeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerRecipeSummary = exports.ContainerRecipeSummary || (exports.ContainerRecipeSummary = {}));
var CreateComponentRequest;
(function (CreateComponentRequest) {
    /**
     * @internal
     */
    CreateComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateComponentRequest = exports.CreateComponentRequest || (exports.CreateComponentRequest = {}));
var CreateComponentResponse;
(function (CreateComponentResponse) {
    /**
     * @internal
     */
    CreateComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateComponentResponse = exports.CreateComponentResponse || (exports.CreateComponentResponse = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidVersionNumberException;
(function (InvalidVersionNumberException) {
    /**
     * @internal
     */
    InvalidVersionNumberException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVersionNumberException = exports.InvalidVersionNumberException || (exports.InvalidVersionNumberException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var CreateContainerRecipeRequest;
(function (CreateContainerRecipeRequest) {
    /**
     * @internal
     */
    CreateContainerRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerRecipeRequest = exports.CreateContainerRecipeRequest || (exports.CreateContainerRecipeRequest = {}));
var CreateContainerRecipeResponse;
(function (CreateContainerRecipeResponse) {
    /**
     * @internal
     */
    CreateContainerRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerRecipeResponse = exports.CreateContainerRecipeResponse || (exports.CreateContainerRecipeResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var LaunchTemplateConfiguration;
(function (LaunchTemplateConfiguration) {
    /**
     * @internal
     */
    LaunchTemplateConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateConfiguration = exports.LaunchTemplateConfiguration || (exports.LaunchTemplateConfiguration = {}));
var Distribution;
(function (Distribution) {
    /**
     * @internal
     */
    Distribution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Distribution = exports.Distribution || (exports.Distribution = {}));
var CreateDistributionConfigurationRequest;
(function (CreateDistributionConfigurationRequest) {
    /**
     * @internal
     */
    CreateDistributionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDistributionConfigurationRequest = exports.CreateDistributionConfigurationRequest || (exports.CreateDistributionConfigurationRequest = {}));
var CreateDistributionConfigurationResponse;
(function (CreateDistributionConfigurationResponse) {
    /**
     * @internal
     */
    CreateDistributionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDistributionConfigurationResponse = exports.CreateDistributionConfigurationResponse || (exports.CreateDistributionConfigurationResponse = {}));
var ImageTestsConfiguration;
(function (ImageTestsConfiguration) {
    /**
     * @internal
     */
    ImageTestsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageTestsConfiguration = exports.ImageTestsConfiguration || (exports.ImageTestsConfiguration = {}));
var CreateImageRequest;
(function (CreateImageRequest) {
    /**
     * @internal
     */
    CreateImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageRequest = exports.CreateImageRequest || (exports.CreateImageRequest = {}));
var CreateImageResponse;
(function (CreateImageResponse) {
    /**
     * @internal
     */
    CreateImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageResponse = exports.CreateImageResponse || (exports.CreateImageResponse = {}));
var PipelineExecutionStartCondition;
(function (PipelineExecutionStartCondition) {
    PipelineExecutionStartCondition["EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"] = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE";
    PipelineExecutionStartCondition["EXPRESSION_MATCH_ONLY"] = "EXPRESSION_MATCH_ONLY";
})(PipelineExecutionStartCondition = exports.PipelineExecutionStartCondition || (exports.PipelineExecutionStartCondition = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["DISABLED"] = "DISABLED";
    PipelineStatus["ENABLED"] = "ENABLED";
})(PipelineStatus = exports.PipelineStatus || (exports.PipelineStatus = {}));
var CreateImagePipelineRequest;
(function (CreateImagePipelineRequest) {
    /**
     * @internal
     */
    CreateImagePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImagePipelineRequest = exports.CreateImagePipelineRequest || (exports.CreateImagePipelineRequest = {}));
var CreateImagePipelineResponse;
(function (CreateImagePipelineResponse) {
    /**
     * @internal
     */
    CreateImagePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImagePipelineResponse = exports.CreateImagePipelineResponse || (exports.CreateImagePipelineResponse = {}));
var CreateImageRecipeRequest;
(function (CreateImageRecipeRequest) {
    /**
     * @internal
     */
    CreateImageRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageRecipeRequest = exports.CreateImageRecipeRequest || (exports.CreateImageRecipeRequest = {}));
var CreateImageRecipeResponse;
(function (CreateImageRecipeResponse) {
    /**
     * @internal
     */
    CreateImageRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageRecipeResponse = exports.CreateImageRecipeResponse || (exports.CreateImageRecipeResponse = {}));
var S3Logs;
(function (S3Logs) {
    /**
     * @internal
     */
    S3Logs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Logs = exports.S3Logs || (exports.S3Logs = {}));
var Logging;
(function (Logging) {
    /**
     * @internal
     */
    Logging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Logging = exports.Logging || (exports.Logging = {}));
var CreateInfrastructureConfigurationRequest;
(function (CreateInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    CreateInfrastructureConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInfrastructureConfigurationRequest = exports.CreateInfrastructureConfigurationRequest || (exports.CreateInfrastructureConfigurationRequest = {}));
var CreateInfrastructureConfigurationResponse;
(function (CreateInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    CreateInfrastructureConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInfrastructureConfigurationResponse = exports.CreateInfrastructureConfigurationResponse || (exports.CreateInfrastructureConfigurationResponse = {}));
var DeleteComponentRequest;
(function (DeleteComponentRequest) {
    /**
     * @internal
     */
    DeleteComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteComponentRequest = exports.DeleteComponentRequest || (exports.DeleteComponentRequest = {}));
var DeleteComponentResponse;
(function (DeleteComponentResponse) {
    /**
     * @internal
     */
    DeleteComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteComponentResponse = exports.DeleteComponentResponse || (exports.DeleteComponentResponse = {}));
var ResourceDependencyException;
(function (ResourceDependencyException) {
    /**
     * @internal
     */
    ResourceDependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDependencyException = exports.ResourceDependencyException || (exports.ResourceDependencyException = {}));
var DeleteContainerRecipeRequest;
(function (DeleteContainerRecipeRequest) {
    /**
     * @internal
     */
    DeleteContainerRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerRecipeRequest = exports.DeleteContainerRecipeRequest || (exports.DeleteContainerRecipeRequest = {}));
var DeleteContainerRecipeResponse;
(function (DeleteContainerRecipeResponse) {
    /**
     * @internal
     */
    DeleteContainerRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerRecipeResponse = exports.DeleteContainerRecipeResponse || (exports.DeleteContainerRecipeResponse = {}));
var DeleteDistributionConfigurationRequest;
(function (DeleteDistributionConfigurationRequest) {
    /**
     * @internal
     */
    DeleteDistributionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDistributionConfigurationRequest = exports.DeleteDistributionConfigurationRequest || (exports.DeleteDistributionConfigurationRequest = {}));
var DeleteDistributionConfigurationResponse;
(function (DeleteDistributionConfigurationResponse) {
    /**
     * @internal
     */
    DeleteDistributionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDistributionConfigurationResponse = exports.DeleteDistributionConfigurationResponse || (exports.DeleteDistributionConfigurationResponse = {}));
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
var DeleteImagePipelineRequest;
(function (DeleteImagePipelineRequest) {
    /**
     * @internal
     */
    DeleteImagePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImagePipelineRequest = exports.DeleteImagePipelineRequest || (exports.DeleteImagePipelineRequest = {}));
var DeleteImagePipelineResponse;
(function (DeleteImagePipelineResponse) {
    /**
     * @internal
     */
    DeleteImagePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImagePipelineResponse = exports.DeleteImagePipelineResponse || (exports.DeleteImagePipelineResponse = {}));
var DeleteImageRecipeRequest;
(function (DeleteImageRecipeRequest) {
    /**
     * @internal
     */
    DeleteImageRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageRecipeRequest = exports.DeleteImageRecipeRequest || (exports.DeleteImageRecipeRequest = {}));
var DeleteImageRecipeResponse;
(function (DeleteImageRecipeResponse) {
    /**
     * @internal
     */
    DeleteImageRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteImageRecipeResponse = exports.DeleteImageRecipeResponse || (exports.DeleteImageRecipeResponse = {}));
var DeleteInfrastructureConfigurationRequest;
(function (DeleteInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    DeleteInfrastructureConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInfrastructureConfigurationRequest = exports.DeleteInfrastructureConfigurationRequest || (exports.DeleteInfrastructureConfigurationRequest = {}));
var DeleteInfrastructureConfigurationResponse;
(function (DeleteInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    DeleteInfrastructureConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInfrastructureConfigurationResponse = exports.DeleteInfrastructureConfigurationResponse || (exports.DeleteInfrastructureConfigurationResponse = {}));
var DistributionConfiguration;
(function (DistributionConfiguration) {
    /**
     * @internal
     */
    DistributionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DistributionConfiguration = exports.DistributionConfiguration || (exports.DistributionConfiguration = {}));
var DistributionConfigurationSummary;
(function (DistributionConfigurationSummary) {
    /**
     * @internal
     */
    DistributionConfigurationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DistributionConfigurationSummary = exports.DistributionConfigurationSummary || (exports.DistributionConfigurationSummary = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var GetComponentRequest;
(function (GetComponentRequest) {
    /**
     * @internal
     */
    GetComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComponentRequest = exports.GetComponentRequest || (exports.GetComponentRequest = {}));
var GetComponentResponse;
(function (GetComponentResponse) {
    /**
     * @internal
     */
    GetComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComponentResponse = exports.GetComponentResponse || (exports.GetComponentResponse = {}));
var GetComponentPolicyRequest;
(function (GetComponentPolicyRequest) {
    /**
     * @internal
     */
    GetComponentPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComponentPolicyRequest = exports.GetComponentPolicyRequest || (exports.GetComponentPolicyRequest = {}));
var GetComponentPolicyResponse;
(function (GetComponentPolicyResponse) {
    /**
     * @internal
     */
    GetComponentPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComponentPolicyResponse = exports.GetComponentPolicyResponse || (exports.GetComponentPolicyResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var GetContainerRecipeRequest;
(function (GetContainerRecipeRequest) {
    /**
     * @internal
     */
    GetContainerRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerRecipeRequest = exports.GetContainerRecipeRequest || (exports.GetContainerRecipeRequest = {}));
var GetContainerRecipeResponse;
(function (GetContainerRecipeResponse) {
    /**
     * @internal
     */
    GetContainerRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerRecipeResponse = exports.GetContainerRecipeResponse || (exports.GetContainerRecipeResponse = {}));
var GetContainerRecipePolicyRequest;
(function (GetContainerRecipePolicyRequest) {
    /**
     * @internal
     */
    GetContainerRecipePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerRecipePolicyRequest = exports.GetContainerRecipePolicyRequest || (exports.GetContainerRecipePolicyRequest = {}));
var GetContainerRecipePolicyResponse;
(function (GetContainerRecipePolicyResponse) {
    /**
     * @internal
     */
    GetContainerRecipePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerRecipePolicyResponse = exports.GetContainerRecipePolicyResponse || (exports.GetContainerRecipePolicyResponse = {}));
var GetDistributionConfigurationRequest;
(function (GetDistributionConfigurationRequest) {
    /**
     * @internal
     */
    GetDistributionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionConfigurationRequest = exports.GetDistributionConfigurationRequest || (exports.GetDistributionConfigurationRequest = {}));
var GetDistributionConfigurationResponse;
(function (GetDistributionConfigurationResponse) {
    /**
     * @internal
     */
    GetDistributionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionConfigurationResponse = exports.GetDistributionConfigurationResponse || (exports.GetDistributionConfigurationResponse = {}));
var GetImageRequest;
(function (GetImageRequest) {
    /**
     * @internal
     */
    GetImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageRequest = exports.GetImageRequest || (exports.GetImageRequest = {}));
var ImageType;
(function (ImageType) {
    ImageType["AMI"] = "AMI";
    ImageType["DOCKER"] = "DOCKER";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
var ImageRecipe;
(function (ImageRecipe) {
    /**
     * @internal
     */
    ImageRecipe.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageRecipe = exports.ImageRecipe || (exports.ImageRecipe = {}));
var InfrastructureConfiguration;
(function (InfrastructureConfiguration) {
    /**
     * @internal
     */
    InfrastructureConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InfrastructureConfiguration = exports.InfrastructureConfiguration || (exports.InfrastructureConfiguration = {}));
var OutputResources;
(function (OutputResources) {
    /**
     * @internal
     */
    OutputResources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputResources = exports.OutputResources || (exports.OutputResources = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var GetImageResponse;
(function (GetImageResponse) {
    /**
     * @internal
     */
    GetImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageResponse = exports.GetImageResponse || (exports.GetImageResponse = {}));
var GetImagePipelineRequest;
(function (GetImagePipelineRequest) {
    /**
     * @internal
     */
    GetImagePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImagePipelineRequest = exports.GetImagePipelineRequest || (exports.GetImagePipelineRequest = {}));
var ImagePipeline;
(function (ImagePipeline) {
    /**
     * @internal
     */
    ImagePipeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImagePipeline = exports.ImagePipeline || (exports.ImagePipeline = {}));
var GetImagePipelineResponse;
(function (GetImagePipelineResponse) {
    /**
     * @internal
     */
    GetImagePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImagePipelineResponse = exports.GetImagePipelineResponse || (exports.GetImagePipelineResponse = {}));
var GetImagePolicyRequest;
(function (GetImagePolicyRequest) {
    /**
     * @internal
     */
    GetImagePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImagePolicyRequest = exports.GetImagePolicyRequest || (exports.GetImagePolicyRequest = {}));
var GetImagePolicyResponse;
(function (GetImagePolicyResponse) {
    /**
     * @internal
     */
    GetImagePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImagePolicyResponse = exports.GetImagePolicyResponse || (exports.GetImagePolicyResponse = {}));
var GetImageRecipeRequest;
(function (GetImageRecipeRequest) {
    /**
     * @internal
     */
    GetImageRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageRecipeRequest = exports.GetImageRecipeRequest || (exports.GetImageRecipeRequest = {}));
var GetImageRecipeResponse;
(function (GetImageRecipeResponse) {
    /**
     * @internal
     */
    GetImageRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageRecipeResponse = exports.GetImageRecipeResponse || (exports.GetImageRecipeResponse = {}));
var GetImageRecipePolicyRequest;
(function (GetImageRecipePolicyRequest) {
    /**
     * @internal
     */
    GetImageRecipePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageRecipePolicyRequest = exports.GetImageRecipePolicyRequest || (exports.GetImageRecipePolicyRequest = {}));
var GetImageRecipePolicyResponse;
(function (GetImageRecipePolicyResponse) {
    /**
     * @internal
     */
    GetImageRecipePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImageRecipePolicyResponse = exports.GetImageRecipePolicyResponse || (exports.GetImageRecipePolicyResponse = {}));
var GetInfrastructureConfigurationRequest;
(function (GetInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    GetInfrastructureConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInfrastructureConfigurationRequest = exports.GetInfrastructureConfigurationRequest || (exports.GetInfrastructureConfigurationRequest = {}));
var GetInfrastructureConfigurationResponse;
(function (GetInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    GetInfrastructureConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInfrastructureConfigurationResponse = exports.GetInfrastructureConfigurationResponse || (exports.GetInfrastructureConfigurationResponse = {}));
var ImportComponentRequest;
(function (ImportComponentRequest) {
    /**
     * @internal
     */
    ImportComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportComponentRequest = exports.ImportComponentRequest || (exports.ImportComponentRequest = {}));
var ImportComponentResponse;
(function (ImportComponentResponse) {
    /**
     * @internal
     */
    ImportComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportComponentResponse = exports.ImportComponentResponse || (exports.ImportComponentResponse = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var ListComponentBuildVersionsRequest;
(function (ListComponentBuildVersionsRequest) {
    /**
     * @internal
     */
    ListComponentBuildVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComponentBuildVersionsRequest = exports.ListComponentBuildVersionsRequest || (exports.ListComponentBuildVersionsRequest = {}));
var ListComponentBuildVersionsResponse;
(function (ListComponentBuildVersionsResponse) {
    /**
     * @internal
     */
    ListComponentBuildVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComponentBuildVersionsResponse = exports.ListComponentBuildVersionsResponse || (exports.ListComponentBuildVersionsResponse = {}));
var Ownership;
(function (Ownership) {
    Ownership["AMAZON"] = "Amazon";
    Ownership["SELF"] = "Self";
    Ownership["SHARED"] = "Shared";
})(Ownership = exports.Ownership || (exports.Ownership = {}));
var ListComponentsRequest;
(function (ListComponentsRequest) {
    /**
     * @internal
     */
    ListComponentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComponentsRequest = exports.ListComponentsRequest || (exports.ListComponentsRequest = {}));
var ListComponentsResponse;
(function (ListComponentsResponse) {
    /**
     * @internal
     */
    ListComponentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComponentsResponse = exports.ListComponentsResponse || (exports.ListComponentsResponse = {}));
var ListContainerRecipesRequest;
(function (ListContainerRecipesRequest) {
    /**
     * @internal
     */
    ListContainerRecipesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainerRecipesRequest = exports.ListContainerRecipesRequest || (exports.ListContainerRecipesRequest = {}));
var ListContainerRecipesResponse;
(function (ListContainerRecipesResponse) {
    /**
     * @internal
     */
    ListContainerRecipesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainerRecipesResponse = exports.ListContainerRecipesResponse || (exports.ListContainerRecipesResponse = {}));
var ListDistributionConfigurationsRequest;
(function (ListDistributionConfigurationsRequest) {
    /**
     * @internal
     */
    ListDistributionConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDistributionConfigurationsRequest = exports.ListDistributionConfigurationsRequest || (exports.ListDistributionConfigurationsRequest = {}));
var ListDistributionConfigurationsResponse;
(function (ListDistributionConfigurationsResponse) {
    /**
     * @internal
     */
    ListDistributionConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDistributionConfigurationsResponse = exports.ListDistributionConfigurationsResponse || (exports.ListDistributionConfigurationsResponse = {}));
var ListImageBuildVersionsRequest;
(function (ListImageBuildVersionsRequest) {
    /**
     * @internal
     */
    ListImageBuildVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageBuildVersionsRequest = exports.ListImageBuildVersionsRequest || (exports.ListImageBuildVersionsRequest = {}));
var ImageSummary;
(function (ImageSummary) {
    /**
     * @internal
     */
    ImageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageSummary = exports.ImageSummary || (exports.ImageSummary = {}));
var ListImageBuildVersionsResponse;
(function (ListImageBuildVersionsResponse) {
    /**
     * @internal
     */
    ListImageBuildVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageBuildVersionsResponse = exports.ListImageBuildVersionsResponse || (exports.ListImageBuildVersionsResponse = {}));
var ListImagePackagesRequest;
(function (ListImagePackagesRequest) {
    /**
     * @internal
     */
    ListImagePackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePackagesRequest = exports.ListImagePackagesRequest || (exports.ListImagePackagesRequest = {}));
var ImagePackage;
(function (ImagePackage) {
    /**
     * @internal
     */
    ImagePackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImagePackage = exports.ImagePackage || (exports.ImagePackage = {}));
var ListImagePackagesResponse;
(function (ListImagePackagesResponse) {
    /**
     * @internal
     */
    ListImagePackagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePackagesResponse = exports.ListImagePackagesResponse || (exports.ListImagePackagesResponse = {}));
var ListImagePipelineImagesRequest;
(function (ListImagePipelineImagesRequest) {
    /**
     * @internal
     */
    ListImagePipelineImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePipelineImagesRequest = exports.ListImagePipelineImagesRequest || (exports.ListImagePipelineImagesRequest = {}));
var ListImagePipelineImagesResponse;
(function (ListImagePipelineImagesResponse) {
    /**
     * @internal
     */
    ListImagePipelineImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePipelineImagesResponse = exports.ListImagePipelineImagesResponse || (exports.ListImagePipelineImagesResponse = {}));
var ListImagePipelinesRequest;
(function (ListImagePipelinesRequest) {
    /**
     * @internal
     */
    ListImagePipelinesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePipelinesRequest = exports.ListImagePipelinesRequest || (exports.ListImagePipelinesRequest = {}));
var ListImagePipelinesResponse;
(function (ListImagePipelinesResponse) {
    /**
     * @internal
     */
    ListImagePipelinesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagePipelinesResponse = exports.ListImagePipelinesResponse || (exports.ListImagePipelinesResponse = {}));
var ListImageRecipesRequest;
(function (ListImageRecipesRequest) {
    /**
     * @internal
     */
    ListImageRecipesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageRecipesRequest = exports.ListImageRecipesRequest || (exports.ListImageRecipesRequest = {}));
var ImageRecipeSummary;
(function (ImageRecipeSummary) {
    /**
     * @internal
     */
    ImageRecipeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageRecipeSummary = exports.ImageRecipeSummary || (exports.ImageRecipeSummary = {}));
var ListImageRecipesResponse;
(function (ListImageRecipesResponse) {
    /**
     * @internal
     */
    ListImageRecipesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImageRecipesResponse = exports.ListImageRecipesResponse || (exports.ListImageRecipesResponse = {}));
var ListImagesRequest;
(function (ListImagesRequest) {
    /**
     * @internal
     */
    ListImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesRequest = exports.ListImagesRequest || (exports.ListImagesRequest = {}));
var ImageVersion;
(function (ImageVersion) {
    /**
     * @internal
     */
    ImageVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageVersion = exports.ImageVersion || (exports.ImageVersion = {}));
var ListImagesResponse;
(function (ListImagesResponse) {
    /**
     * @internal
     */
    ListImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesResponse = exports.ListImagesResponse || (exports.ListImagesResponse = {}));
var ListInfrastructureConfigurationsRequest;
(function (ListInfrastructureConfigurationsRequest) {
    /**
     * @internal
     */
    ListInfrastructureConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInfrastructureConfigurationsRequest = exports.ListInfrastructureConfigurationsRequest || (exports.ListInfrastructureConfigurationsRequest = {}));
var InfrastructureConfigurationSummary;
(function (InfrastructureConfigurationSummary) {
    /**
     * @internal
     */
    InfrastructureConfigurationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InfrastructureConfigurationSummary = exports.InfrastructureConfigurationSummary || (exports.InfrastructureConfigurationSummary = {}));
var ListInfrastructureConfigurationsResponse;
(function (ListInfrastructureConfigurationsResponse) {
    /**
     * @internal
     */
    ListInfrastructureConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInfrastructureConfigurationsResponse = exports.ListInfrastructureConfigurationsResponse || (exports.ListInfrastructureConfigurationsResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
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
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var PutComponentPolicyRequest;
(function (PutComponentPolicyRequest) {
    /**
     * @internal
     */
    PutComponentPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutComponentPolicyRequest = exports.PutComponentPolicyRequest || (exports.PutComponentPolicyRequest = {}));
var PutComponentPolicyResponse;
(function (PutComponentPolicyResponse) {
    /**
     * @internal
     */
    PutComponentPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutComponentPolicyResponse = exports.PutComponentPolicyResponse || (exports.PutComponentPolicyResponse = {}));
var PutContainerRecipePolicyRequest;
(function (PutContainerRecipePolicyRequest) {
    /**
     * @internal
     */
    PutContainerRecipePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContainerRecipePolicyRequest = exports.PutContainerRecipePolicyRequest || (exports.PutContainerRecipePolicyRequest = {}));
var PutContainerRecipePolicyResponse;
(function (PutContainerRecipePolicyResponse) {
    /**
     * @internal
     */
    PutContainerRecipePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContainerRecipePolicyResponse = exports.PutContainerRecipePolicyResponse || (exports.PutContainerRecipePolicyResponse = {}));
var PutImagePolicyRequest;
(function (PutImagePolicyRequest) {
    /**
     * @internal
     */
    PutImagePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImagePolicyRequest = exports.PutImagePolicyRequest || (exports.PutImagePolicyRequest = {}));
var PutImagePolicyResponse;
(function (PutImagePolicyResponse) {
    /**
     * @internal
     */
    PutImagePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImagePolicyResponse = exports.PutImagePolicyResponse || (exports.PutImagePolicyResponse = {}));
var PutImageRecipePolicyRequest;
(function (PutImageRecipePolicyRequest) {
    /**
     * @internal
     */
    PutImageRecipePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageRecipePolicyRequest = exports.PutImageRecipePolicyRequest || (exports.PutImageRecipePolicyRequest = {}));
var PutImageRecipePolicyResponse;
(function (PutImageRecipePolicyResponse) {
    /**
     * @internal
     */
    PutImageRecipePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageRecipePolicyResponse = exports.PutImageRecipePolicyResponse || (exports.PutImageRecipePolicyResponse = {}));
var StartImagePipelineExecutionRequest;
(function (StartImagePipelineExecutionRequest) {
    /**
     * @internal
     */
    StartImagePipelineExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImagePipelineExecutionRequest = exports.StartImagePipelineExecutionRequest || (exports.StartImagePipelineExecutionRequest = {}));
var StartImagePipelineExecutionResponse;
(function (StartImagePipelineExecutionResponse) {
    /**
     * @internal
     */
    StartImagePipelineExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImagePipelineExecutionResponse = exports.StartImagePipelineExecutionResponse || (exports.StartImagePipelineExecutionResponse = {}));
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
var UpdateDistributionConfigurationRequest;
(function (UpdateDistributionConfigurationRequest) {
    /**
     * @internal
     */
    UpdateDistributionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionConfigurationRequest = exports.UpdateDistributionConfigurationRequest || (exports.UpdateDistributionConfigurationRequest = {}));
var UpdateDistributionConfigurationResponse;
(function (UpdateDistributionConfigurationResponse) {
    /**
     * @internal
     */
    UpdateDistributionConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionConfigurationResponse = exports.UpdateDistributionConfigurationResponse || (exports.UpdateDistributionConfigurationResponse = {}));
var UpdateImagePipelineRequest;
(function (UpdateImagePipelineRequest) {
    /**
     * @internal
     */
    UpdateImagePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateImagePipelineRequest = exports.UpdateImagePipelineRequest || (exports.UpdateImagePipelineRequest = {}));
var UpdateImagePipelineResponse;
(function (UpdateImagePipelineResponse) {
    /**
     * @internal
     */
    UpdateImagePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateImagePipelineResponse = exports.UpdateImagePipelineResponse || (exports.UpdateImagePipelineResponse = {}));
var UpdateInfrastructureConfigurationRequest;
(function (UpdateInfrastructureConfigurationRequest) {
    /**
     * @internal
     */
    UpdateInfrastructureConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInfrastructureConfigurationRequest = exports.UpdateInfrastructureConfigurationRequest || (exports.UpdateInfrastructureConfigurationRequest = {}));
var UpdateInfrastructureConfigurationResponse;
(function (UpdateInfrastructureConfigurationResponse) {
    /**
     * @internal
     */
    UpdateInfrastructureConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInfrastructureConfigurationResponse = exports.UpdateInfrastructureConfigurationResponse || (exports.UpdateInfrastructureConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map