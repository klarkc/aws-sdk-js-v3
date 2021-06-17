"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyBucketsException = exports.CreateConfigurationTemplateMessage = exports.SourceConfiguration = exports.ConfigurationSettingsDescription = exports.ConfigurationOptionSetting = exports.TooManyApplicationVersionsException = exports.S3LocationNotInServiceRegionException = exports.CreateApplicationVersionMessage = exports.BuildConfiguration = exports.ComputeType = exports.CodeBuildNotInServiceRegionException = exports.TooManyApplicationsException = exports.CreateApplicationMessage = exports.Tag = exports.TooManyEnvironmentsException = exports.EnvironmentDescriptionsMessage = exports.EnvironmentDescription = exports.EnvironmentTier = exports.EnvironmentResourcesDescription = exports.LoadBalancerDescription = exports.Listener = exports.EnvironmentLink = exports.ComposeEnvironmentsMessage = exports.CheckDNSAvailabilityResultMessage = exports.CheckDNSAvailabilityMessage = exports.SolutionStackDescription = exports.AutoScalingGroup = exports.AssociateEnvironmentOperationsRoleMessage = exports.ManagedActionInvalidStateException = exports.ElasticBeanstalkServiceException = exports.ApplyEnvironmentManagedActionResult = exports.ApplyEnvironmentManagedActionRequest = exports.ApplicationVersionDescriptionsMessage = exports.ApplicationVersionDescriptionMessage = exports.ApplicationVersionDescription = exports.S3Location = exports.SourceBuildInformation = exports.ApplicationResourceLifecycleDescriptionMessage = exports.ApplicationMetrics = exports.StatusCodes = exports.Latency = exports.ApplicationDescriptionsMessage = exports.ApplicationDescriptionMessage = exports.ApplicationDescription = exports.ApplicationResourceLifecycleConfig = exports.ApplicationVersionLifecycleConfig = exports.MaxCountRule = exports.MaxAgeRule = exports.InsufficientPrivilegesException = exports.AbortEnvironmentUpdateMessage = void 0;
exports.EnvironmentResourceDescriptionsMessage = exports.EnvironmentResourceDescription = exports.Trigger = exports.Queue = exports.LoadBalancer = exports.LaunchTemplate = exports.LaunchConfiguration = exports.Instance = exports.DescribeEnvironmentResourcesMessage = exports.DescribeEnvironmentManagedActionsResult = exports.ManagedAction = exports.DescribeEnvironmentManagedActionsRequest = exports.DescribeEnvironmentManagedActionHistoryResult = exports.ManagedActionHistoryItem = exports.DescribeEnvironmentManagedActionHistoryRequest = exports.InvalidRequestException = exports.DescribeEnvironmentHealthResult = exports.InstanceHealthSummary = exports.DescribeEnvironmentHealthRequest = exports.EnvironmentHealthAttribute = exports.DescribeConfigurationSettingsMessage = exports.ConfigurationSettingsDescriptions = exports.DescribeConfigurationOptionsMessage = exports.ConfigurationOptionsDescription = exports.ConfigurationOptionDescription = exports.OptionRestrictionRegex = exports.DescribeApplicationVersionsMessage = exports.DescribeApplicationsMessage = exports.DescribeAccountAttributesResult = exports.ResourceQuotas = exports.ResourceQuota = exports.PlatformVersionStillReferencedException = exports.DeletePlatformVersionResult = exports.DeletePlatformVersionRequest = exports.DeleteEnvironmentConfigurationMessage = exports.DeleteConfigurationTemplateMessage = exports.SourceBundleDeletionException = exports.DeleteApplicationVersionMessage = exports.OperationInProgressException = exports.DeleteApplicationMessage = exports.S3SubscriptionRequiredException = exports.CreateStorageLocationResultMessage = exports.TooManyPlatformsException = exports.CreatePlatformVersionResult = exports.PlatformSummary = exports.Builder = exports.CreatePlatformVersionRequest = exports.CreateEnvironmentMessage = exports.OptionSpecification = exports.TooManyConfigurationTemplatesException = void 0;
exports.ValidateConfigurationSettingsMessage = exports.ConfigurationSettingsValidationMessages = exports.ValidationMessage = exports.UpdateTagsForResourceMessage = exports.TooManyTagsException = exports.UpdateEnvironmentMessage = exports.UpdateConfigurationTemplateMessage = exports.UpdateApplicationVersionMessage = exports.UpdateApplicationResourceLifecycleMessage = exports.UpdateApplicationMessage = exports.TerminateEnvironmentMessage = exports.SwapEnvironmentCNAMEsMessage = exports.RetrieveEnvironmentInfoResultMessage = exports.EnvironmentInfoDescription = exports.RetrieveEnvironmentInfoMessage = exports.RestartAppServerMessage = exports.RequestEnvironmentInfoMessage = exports.RebuildEnvironmentMessage = exports.ResourceTypeNotSupportedException = exports.ResourceTagsDescriptionMessage = exports.ResourceNotFoundException = exports.ListTagsForResourceMessage = exports.ListPlatformVersionsResult = exports.ListPlatformVersionsRequest = exports.PlatformFilter = exports.ListPlatformBranchesResult = exports.PlatformBranchSummary = exports.ListPlatformBranchesRequest = exports.SearchFilter = exports.ListAvailableSolutionStacksResultMessage = exports.DisassociateEnvironmentOperationsRoleMessage = exports.DescribePlatformVersionResult = exports.PlatformDescription = exports.PlatformProgrammingLanguage = exports.PlatformFramework = exports.CustomAmi = exports.DescribePlatformVersionRequest = exports.DescribeInstancesHealthResult = exports.SingleInstanceHealth = exports.SystemStatus = exports.CPUUtilization = exports.Deployment = exports.DescribeInstancesHealthRequest = exports.InstancesHealthAttribute = exports.EventDescriptionsMessage = exports.EventDescription = exports.DescribeEventsMessage = exports.DescribeEnvironmentsMessage = void 0;
var AbortEnvironmentUpdateMessage;
(function (AbortEnvironmentUpdateMessage) {
    /**
     * @internal
     */
    AbortEnvironmentUpdateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortEnvironmentUpdateMessage = exports.AbortEnvironmentUpdateMessage || (exports.AbortEnvironmentUpdateMessage = {}));
var InsufficientPrivilegesException;
(function (InsufficientPrivilegesException) {
    /**
     * @internal
     */
    InsufficientPrivilegesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientPrivilegesException = exports.InsufficientPrivilegesException || (exports.InsufficientPrivilegesException = {}));
var MaxAgeRule;
(function (MaxAgeRule) {
    /**
     * @internal
     */
    MaxAgeRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxAgeRule = exports.MaxAgeRule || (exports.MaxAgeRule = {}));
var MaxCountRule;
(function (MaxCountRule) {
    /**
     * @internal
     */
    MaxCountRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxCountRule = exports.MaxCountRule || (exports.MaxCountRule = {}));
var ApplicationVersionLifecycleConfig;
(function (ApplicationVersionLifecycleConfig) {
    /**
     * @internal
     */
    ApplicationVersionLifecycleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationVersionLifecycleConfig = exports.ApplicationVersionLifecycleConfig || (exports.ApplicationVersionLifecycleConfig = {}));
var ApplicationResourceLifecycleConfig;
(function (ApplicationResourceLifecycleConfig) {
    /**
     * @internal
     */
    ApplicationResourceLifecycleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationResourceLifecycleConfig = exports.ApplicationResourceLifecycleConfig || (exports.ApplicationResourceLifecycleConfig = {}));
var ApplicationDescription;
(function (ApplicationDescription) {
    /**
     * @internal
     */
    ApplicationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDescription = exports.ApplicationDescription || (exports.ApplicationDescription = {}));
var ApplicationDescriptionMessage;
(function (ApplicationDescriptionMessage) {
    /**
     * @internal
     */
    ApplicationDescriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDescriptionMessage = exports.ApplicationDescriptionMessage || (exports.ApplicationDescriptionMessage = {}));
var ApplicationDescriptionsMessage;
(function (ApplicationDescriptionsMessage) {
    /**
     * @internal
     */
    ApplicationDescriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDescriptionsMessage = exports.ApplicationDescriptionsMessage || (exports.ApplicationDescriptionsMessage = {}));
var Latency;
(function (Latency) {
    /**
     * @internal
     */
    Latency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Latency = exports.Latency || (exports.Latency = {}));
var StatusCodes;
(function (StatusCodes) {
    /**
     * @internal
     */
    StatusCodes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
var ApplicationMetrics;
(function (ApplicationMetrics) {
    /**
     * @internal
     */
    ApplicationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationMetrics = exports.ApplicationMetrics || (exports.ApplicationMetrics = {}));
var ApplicationResourceLifecycleDescriptionMessage;
(function (ApplicationResourceLifecycleDescriptionMessage) {
    /**
     * @internal
     */
    ApplicationResourceLifecycleDescriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationResourceLifecycleDescriptionMessage = exports.ApplicationResourceLifecycleDescriptionMessage || (exports.ApplicationResourceLifecycleDescriptionMessage = {}));
var SourceBuildInformation;
(function (SourceBuildInformation) {
    /**
     * @internal
     */
    SourceBuildInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceBuildInformation = exports.SourceBuildInformation || (exports.SourceBuildInformation = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var ApplicationVersionDescription;
(function (ApplicationVersionDescription) {
    /**
     * @internal
     */
    ApplicationVersionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationVersionDescription = exports.ApplicationVersionDescription || (exports.ApplicationVersionDescription = {}));
var ApplicationVersionDescriptionMessage;
(function (ApplicationVersionDescriptionMessage) {
    /**
     * @internal
     */
    ApplicationVersionDescriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationVersionDescriptionMessage = exports.ApplicationVersionDescriptionMessage || (exports.ApplicationVersionDescriptionMessage = {}));
var ApplicationVersionDescriptionsMessage;
(function (ApplicationVersionDescriptionsMessage) {
    /**
     * @internal
     */
    ApplicationVersionDescriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationVersionDescriptionsMessage = exports.ApplicationVersionDescriptionsMessage || (exports.ApplicationVersionDescriptionsMessage = {}));
var ApplyEnvironmentManagedActionRequest;
(function (ApplyEnvironmentManagedActionRequest) {
    /**
     * @internal
     */
    ApplyEnvironmentManagedActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyEnvironmentManagedActionRequest = exports.ApplyEnvironmentManagedActionRequest || (exports.ApplyEnvironmentManagedActionRequest = {}));
var ApplyEnvironmentManagedActionResult;
(function (ApplyEnvironmentManagedActionResult) {
    /**
     * @internal
     */
    ApplyEnvironmentManagedActionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyEnvironmentManagedActionResult = exports.ApplyEnvironmentManagedActionResult || (exports.ApplyEnvironmentManagedActionResult = {}));
var ElasticBeanstalkServiceException;
(function (ElasticBeanstalkServiceException) {
    /**
     * @internal
     */
    ElasticBeanstalkServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticBeanstalkServiceException = exports.ElasticBeanstalkServiceException || (exports.ElasticBeanstalkServiceException = {}));
var ManagedActionInvalidStateException;
(function (ManagedActionInvalidStateException) {
    /**
     * @internal
     */
    ManagedActionInvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedActionInvalidStateException = exports.ManagedActionInvalidStateException || (exports.ManagedActionInvalidStateException = {}));
var AssociateEnvironmentOperationsRoleMessage;
(function (AssociateEnvironmentOperationsRoleMessage) {
    /**
     * @internal
     */
    AssociateEnvironmentOperationsRoleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEnvironmentOperationsRoleMessage = exports.AssociateEnvironmentOperationsRoleMessage || (exports.AssociateEnvironmentOperationsRoleMessage = {}));
var AutoScalingGroup;
(function (AutoScalingGroup) {
    /**
     * @internal
     */
    AutoScalingGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroup = exports.AutoScalingGroup || (exports.AutoScalingGroup = {}));
var SolutionStackDescription;
(function (SolutionStackDescription) {
    /**
     * @internal
     */
    SolutionStackDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SolutionStackDescription = exports.SolutionStackDescription || (exports.SolutionStackDescription = {}));
var CheckDNSAvailabilityMessage;
(function (CheckDNSAvailabilityMessage) {
    /**
     * @internal
     */
    CheckDNSAvailabilityMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckDNSAvailabilityMessage = exports.CheckDNSAvailabilityMessage || (exports.CheckDNSAvailabilityMessage = {}));
var CheckDNSAvailabilityResultMessage;
(function (CheckDNSAvailabilityResultMessage) {
    /**
     * @internal
     */
    CheckDNSAvailabilityResultMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckDNSAvailabilityResultMessage = exports.CheckDNSAvailabilityResultMessage || (exports.CheckDNSAvailabilityResultMessage = {}));
var ComposeEnvironmentsMessage;
(function (ComposeEnvironmentsMessage) {
    /**
     * @internal
     */
    ComposeEnvironmentsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComposeEnvironmentsMessage = exports.ComposeEnvironmentsMessage || (exports.ComposeEnvironmentsMessage = {}));
var EnvironmentLink;
(function (EnvironmentLink) {
    /**
     * @internal
     */
    EnvironmentLink.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentLink = exports.EnvironmentLink || (exports.EnvironmentLink = {}));
var Listener;
(function (Listener) {
    /**
     * @internal
     */
    Listener.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Listener = exports.Listener || (exports.Listener = {}));
var LoadBalancerDescription;
(function (LoadBalancerDescription) {
    /**
     * @internal
     */
    LoadBalancerDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerDescription = exports.LoadBalancerDescription || (exports.LoadBalancerDescription = {}));
var EnvironmentResourcesDescription;
(function (EnvironmentResourcesDescription) {
    /**
     * @internal
     */
    EnvironmentResourcesDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentResourcesDescription = exports.EnvironmentResourcesDescription || (exports.EnvironmentResourcesDescription = {}));
var EnvironmentTier;
(function (EnvironmentTier) {
    /**
     * @internal
     */
    EnvironmentTier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentTier = exports.EnvironmentTier || (exports.EnvironmentTier = {}));
var EnvironmentDescription;
(function (EnvironmentDescription) {
    /**
     * @internal
     */
    EnvironmentDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentDescription = exports.EnvironmentDescription || (exports.EnvironmentDescription = {}));
var EnvironmentDescriptionsMessage;
(function (EnvironmentDescriptionsMessage) {
    /**
     * @internal
     */
    EnvironmentDescriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentDescriptionsMessage = exports.EnvironmentDescriptionsMessage || (exports.EnvironmentDescriptionsMessage = {}));
var TooManyEnvironmentsException;
(function (TooManyEnvironmentsException) {
    /**
     * @internal
     */
    TooManyEnvironmentsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyEnvironmentsException = exports.TooManyEnvironmentsException || (exports.TooManyEnvironmentsException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateApplicationMessage;
(function (CreateApplicationMessage) {
    /**
     * @internal
     */
    CreateApplicationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationMessage = exports.CreateApplicationMessage || (exports.CreateApplicationMessage = {}));
var TooManyApplicationsException;
(function (TooManyApplicationsException) {
    /**
     * @internal
     */
    TooManyApplicationsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyApplicationsException = exports.TooManyApplicationsException || (exports.TooManyApplicationsException = {}));
var CodeBuildNotInServiceRegionException;
(function (CodeBuildNotInServiceRegionException) {
    /**
     * @internal
     */
    CodeBuildNotInServiceRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeBuildNotInServiceRegionException = exports.CodeBuildNotInServiceRegionException || (exports.CodeBuildNotInServiceRegionException = {}));
var ComputeType;
(function (ComputeType) {
    ComputeType["BUILD_GENERAL1_LARGE"] = "BUILD_GENERAL1_LARGE";
    ComputeType["BUILD_GENERAL1_MEDIUM"] = "BUILD_GENERAL1_MEDIUM";
    ComputeType["BUILD_GENERAL1_SMALL"] = "BUILD_GENERAL1_SMALL";
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var BuildConfiguration;
(function (BuildConfiguration) {
    /**
     * @internal
     */
    BuildConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildConfiguration = exports.BuildConfiguration || (exports.BuildConfiguration = {}));
var CreateApplicationVersionMessage;
(function (CreateApplicationVersionMessage) {
    /**
     * @internal
     */
    CreateApplicationVersionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationVersionMessage = exports.CreateApplicationVersionMessage || (exports.CreateApplicationVersionMessage = {}));
var S3LocationNotInServiceRegionException;
(function (S3LocationNotInServiceRegionException) {
    /**
     * @internal
     */
    S3LocationNotInServiceRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3LocationNotInServiceRegionException = exports.S3LocationNotInServiceRegionException || (exports.S3LocationNotInServiceRegionException = {}));
var TooManyApplicationVersionsException;
(function (TooManyApplicationVersionsException) {
    /**
     * @internal
     */
    TooManyApplicationVersionsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyApplicationVersionsException = exports.TooManyApplicationVersionsException || (exports.TooManyApplicationVersionsException = {}));
var ConfigurationOptionSetting;
(function (ConfigurationOptionSetting) {
    /**
     * @internal
     */
    ConfigurationOptionSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationOptionSetting = exports.ConfigurationOptionSetting || (exports.ConfigurationOptionSetting = {}));
var ConfigurationSettingsDescription;
(function (ConfigurationSettingsDescription) {
    /**
     * @internal
     */
    ConfigurationSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationSettingsDescription = exports.ConfigurationSettingsDescription || (exports.ConfigurationSettingsDescription = {}));
var SourceConfiguration;
(function (SourceConfiguration) {
    /**
     * @internal
     */
    SourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceConfiguration = exports.SourceConfiguration || (exports.SourceConfiguration = {}));
var CreateConfigurationTemplateMessage;
(function (CreateConfigurationTemplateMessage) {
    /**
     * @internal
     */
    CreateConfigurationTemplateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationTemplateMessage = exports.CreateConfigurationTemplateMessage || (exports.CreateConfigurationTemplateMessage = {}));
var TooManyBucketsException;
(function (TooManyBucketsException) {
    /**
     * @internal
     */
    TooManyBucketsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyBucketsException = exports.TooManyBucketsException || (exports.TooManyBucketsException = {}));
var TooManyConfigurationTemplatesException;
(function (TooManyConfigurationTemplatesException) {
    /**
     * @internal
     */
    TooManyConfigurationTemplatesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyConfigurationTemplatesException = exports.TooManyConfigurationTemplatesException || (exports.TooManyConfigurationTemplatesException = {}));
var OptionSpecification;
(function (OptionSpecification) {
    /**
     * @internal
     */
    OptionSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionSpecification = exports.OptionSpecification || (exports.OptionSpecification = {}));
var CreateEnvironmentMessage;
(function (CreateEnvironmentMessage) {
    /**
     * @internal
     */
    CreateEnvironmentMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEnvironmentMessage = exports.CreateEnvironmentMessage || (exports.CreateEnvironmentMessage = {}));
var CreatePlatformVersionRequest;
(function (CreatePlatformVersionRequest) {
    /**
     * @internal
     */
    CreatePlatformVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlatformVersionRequest = exports.CreatePlatformVersionRequest || (exports.CreatePlatformVersionRequest = {}));
var Builder;
(function (Builder) {
    /**
     * @internal
     */
    Builder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Builder = exports.Builder || (exports.Builder = {}));
var PlatformSummary;
(function (PlatformSummary) {
    /**
     * @internal
     */
    PlatformSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformSummary = exports.PlatformSummary || (exports.PlatformSummary = {}));
var CreatePlatformVersionResult;
(function (CreatePlatformVersionResult) {
    /**
     * @internal
     */
    CreatePlatformVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlatformVersionResult = exports.CreatePlatformVersionResult || (exports.CreatePlatformVersionResult = {}));
var TooManyPlatformsException;
(function (TooManyPlatformsException) {
    /**
     * @internal
     */
    TooManyPlatformsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyPlatformsException = exports.TooManyPlatformsException || (exports.TooManyPlatformsException = {}));
var CreateStorageLocationResultMessage;
(function (CreateStorageLocationResultMessage) {
    /**
     * @internal
     */
    CreateStorageLocationResultMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStorageLocationResultMessage = exports.CreateStorageLocationResultMessage || (exports.CreateStorageLocationResultMessage = {}));
var S3SubscriptionRequiredException;
(function (S3SubscriptionRequiredException) {
    /**
     * @internal
     */
    S3SubscriptionRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SubscriptionRequiredException = exports.S3SubscriptionRequiredException || (exports.S3SubscriptionRequiredException = {}));
var DeleteApplicationMessage;
(function (DeleteApplicationMessage) {
    /**
     * @internal
     */
    DeleteApplicationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationMessage = exports.DeleteApplicationMessage || (exports.DeleteApplicationMessage = {}));
var OperationInProgressException;
(function (OperationInProgressException) {
    /**
     * @internal
     */
    OperationInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationInProgressException = exports.OperationInProgressException || (exports.OperationInProgressException = {}));
var DeleteApplicationVersionMessage;
(function (DeleteApplicationVersionMessage) {
    /**
     * @internal
     */
    DeleteApplicationVersionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationVersionMessage = exports.DeleteApplicationVersionMessage || (exports.DeleteApplicationVersionMessage = {}));
var SourceBundleDeletionException;
(function (SourceBundleDeletionException) {
    /**
     * @internal
     */
    SourceBundleDeletionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceBundleDeletionException = exports.SourceBundleDeletionException || (exports.SourceBundleDeletionException = {}));
var DeleteConfigurationTemplateMessage;
(function (DeleteConfigurationTemplateMessage) {
    /**
     * @internal
     */
    DeleteConfigurationTemplateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationTemplateMessage = exports.DeleteConfigurationTemplateMessage || (exports.DeleteConfigurationTemplateMessage = {}));
var DeleteEnvironmentConfigurationMessage;
(function (DeleteEnvironmentConfigurationMessage) {
    /**
     * @internal
     */
    DeleteEnvironmentConfigurationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEnvironmentConfigurationMessage = exports.DeleteEnvironmentConfigurationMessage || (exports.DeleteEnvironmentConfigurationMessage = {}));
var DeletePlatformVersionRequest;
(function (DeletePlatformVersionRequest) {
    /**
     * @internal
     */
    DeletePlatformVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlatformVersionRequest = exports.DeletePlatformVersionRequest || (exports.DeletePlatformVersionRequest = {}));
var DeletePlatformVersionResult;
(function (DeletePlatformVersionResult) {
    /**
     * @internal
     */
    DeletePlatformVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlatformVersionResult = exports.DeletePlatformVersionResult || (exports.DeletePlatformVersionResult = {}));
var PlatformVersionStillReferencedException;
(function (PlatformVersionStillReferencedException) {
    /**
     * @internal
     */
    PlatformVersionStillReferencedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformVersionStillReferencedException = exports.PlatformVersionStillReferencedException || (exports.PlatformVersionStillReferencedException = {}));
var ResourceQuota;
(function (ResourceQuota) {
    /**
     * @internal
     */
    ResourceQuota.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceQuota = exports.ResourceQuota || (exports.ResourceQuota = {}));
var ResourceQuotas;
(function (ResourceQuotas) {
    /**
     * @internal
     */
    ResourceQuotas.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceQuotas = exports.ResourceQuotas || (exports.ResourceQuotas = {}));
var DescribeAccountAttributesResult;
(function (DescribeAccountAttributesResult) {
    /**
     * @internal
     */
    DescribeAccountAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesResult = exports.DescribeAccountAttributesResult || (exports.DescribeAccountAttributesResult = {}));
var DescribeApplicationsMessage;
(function (DescribeApplicationsMessage) {
    /**
     * @internal
     */
    DescribeApplicationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationsMessage = exports.DescribeApplicationsMessage || (exports.DescribeApplicationsMessage = {}));
var DescribeApplicationVersionsMessage;
(function (DescribeApplicationVersionsMessage) {
    /**
     * @internal
     */
    DescribeApplicationVersionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApplicationVersionsMessage = exports.DescribeApplicationVersionsMessage || (exports.DescribeApplicationVersionsMessage = {}));
var OptionRestrictionRegex;
(function (OptionRestrictionRegex) {
    /**
     * @internal
     */
    OptionRestrictionRegex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionRestrictionRegex = exports.OptionRestrictionRegex || (exports.OptionRestrictionRegex = {}));
var ConfigurationOptionDescription;
(function (ConfigurationOptionDescription) {
    /**
     * @internal
     */
    ConfigurationOptionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationOptionDescription = exports.ConfigurationOptionDescription || (exports.ConfigurationOptionDescription = {}));
var ConfigurationOptionsDescription;
(function (ConfigurationOptionsDescription) {
    /**
     * @internal
     */
    ConfigurationOptionsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationOptionsDescription = exports.ConfigurationOptionsDescription || (exports.ConfigurationOptionsDescription = {}));
var DescribeConfigurationOptionsMessage;
(function (DescribeConfigurationOptionsMessage) {
    /**
     * @internal
     */
    DescribeConfigurationOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationOptionsMessage = exports.DescribeConfigurationOptionsMessage || (exports.DescribeConfigurationOptionsMessage = {}));
var ConfigurationSettingsDescriptions;
(function (ConfigurationSettingsDescriptions) {
    /**
     * @internal
     */
    ConfigurationSettingsDescriptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationSettingsDescriptions = exports.ConfigurationSettingsDescriptions || (exports.ConfigurationSettingsDescriptions = {}));
var DescribeConfigurationSettingsMessage;
(function (DescribeConfigurationSettingsMessage) {
    /**
     * @internal
     */
    DescribeConfigurationSettingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationSettingsMessage = exports.DescribeConfigurationSettingsMessage || (exports.DescribeConfigurationSettingsMessage = {}));
var EnvironmentHealthAttribute;
(function (EnvironmentHealthAttribute) {
    EnvironmentHealthAttribute["All"] = "All";
    EnvironmentHealthAttribute["ApplicationMetrics"] = "ApplicationMetrics";
    EnvironmentHealthAttribute["Causes"] = "Causes";
    EnvironmentHealthAttribute["Color"] = "Color";
    EnvironmentHealthAttribute["HealthStatus"] = "HealthStatus";
    EnvironmentHealthAttribute["InstancesHealth"] = "InstancesHealth";
    EnvironmentHealthAttribute["RefreshedAt"] = "RefreshedAt";
    EnvironmentHealthAttribute["Status"] = "Status";
})(EnvironmentHealthAttribute = exports.EnvironmentHealthAttribute || (exports.EnvironmentHealthAttribute = {}));
var DescribeEnvironmentHealthRequest;
(function (DescribeEnvironmentHealthRequest) {
    /**
     * @internal
     */
    DescribeEnvironmentHealthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentHealthRequest = exports.DescribeEnvironmentHealthRequest || (exports.DescribeEnvironmentHealthRequest = {}));
var InstanceHealthSummary;
(function (InstanceHealthSummary) {
    /**
     * @internal
     */
    InstanceHealthSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceHealthSummary = exports.InstanceHealthSummary || (exports.InstanceHealthSummary = {}));
var DescribeEnvironmentHealthResult;
(function (DescribeEnvironmentHealthResult) {
    /**
     * @internal
     */
    DescribeEnvironmentHealthResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentHealthResult = exports.DescribeEnvironmentHealthResult || (exports.DescribeEnvironmentHealthResult = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var DescribeEnvironmentManagedActionHistoryRequest;
(function (DescribeEnvironmentManagedActionHistoryRequest) {
    /**
     * @internal
     */
    DescribeEnvironmentManagedActionHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentManagedActionHistoryRequest = exports.DescribeEnvironmentManagedActionHistoryRequest || (exports.DescribeEnvironmentManagedActionHistoryRequest = {}));
var ManagedActionHistoryItem;
(function (ManagedActionHistoryItem) {
    /**
     * @internal
     */
    ManagedActionHistoryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedActionHistoryItem = exports.ManagedActionHistoryItem || (exports.ManagedActionHistoryItem = {}));
var DescribeEnvironmentManagedActionHistoryResult;
(function (DescribeEnvironmentManagedActionHistoryResult) {
    /**
     * @internal
     */
    DescribeEnvironmentManagedActionHistoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentManagedActionHistoryResult = exports.DescribeEnvironmentManagedActionHistoryResult || (exports.DescribeEnvironmentManagedActionHistoryResult = {}));
var DescribeEnvironmentManagedActionsRequest;
(function (DescribeEnvironmentManagedActionsRequest) {
    /**
     * @internal
     */
    DescribeEnvironmentManagedActionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentManagedActionsRequest = exports.DescribeEnvironmentManagedActionsRequest || (exports.DescribeEnvironmentManagedActionsRequest = {}));
var ManagedAction;
(function (ManagedAction) {
    /**
     * @internal
     */
    ManagedAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedAction = exports.ManagedAction || (exports.ManagedAction = {}));
var DescribeEnvironmentManagedActionsResult;
(function (DescribeEnvironmentManagedActionsResult) {
    /**
     * @internal
     */
    DescribeEnvironmentManagedActionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentManagedActionsResult = exports.DescribeEnvironmentManagedActionsResult || (exports.DescribeEnvironmentManagedActionsResult = {}));
var DescribeEnvironmentResourcesMessage;
(function (DescribeEnvironmentResourcesMessage) {
    /**
     * @internal
     */
    DescribeEnvironmentResourcesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentResourcesMessage = exports.DescribeEnvironmentResourcesMessage || (exports.DescribeEnvironmentResourcesMessage = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var LaunchConfiguration;
(function (LaunchConfiguration) {
    /**
     * @internal
     */
    LaunchConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchConfiguration = exports.LaunchConfiguration || (exports.LaunchConfiguration = {}));
var LaunchTemplate;
(function (LaunchTemplate) {
    /**
     * @internal
     */
    LaunchTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplate = exports.LaunchTemplate || (exports.LaunchTemplate = {}));
var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var Queue;
(function (Queue) {
    /**
     * @internal
     */
    Queue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Queue = exports.Queue || (exports.Queue = {}));
var Trigger;
(function (Trigger) {
    /**
     * @internal
     */
    Trigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trigger = exports.Trigger || (exports.Trigger = {}));
var EnvironmentResourceDescription;
(function (EnvironmentResourceDescription) {
    /**
     * @internal
     */
    EnvironmentResourceDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentResourceDescription = exports.EnvironmentResourceDescription || (exports.EnvironmentResourceDescription = {}));
var EnvironmentResourceDescriptionsMessage;
(function (EnvironmentResourceDescriptionsMessage) {
    /**
     * @internal
     */
    EnvironmentResourceDescriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentResourceDescriptionsMessage = exports.EnvironmentResourceDescriptionsMessage || (exports.EnvironmentResourceDescriptionsMessage = {}));
var DescribeEnvironmentsMessage;
(function (DescribeEnvironmentsMessage) {
    /**
     * @internal
     */
    DescribeEnvironmentsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEnvironmentsMessage = exports.DescribeEnvironmentsMessage || (exports.DescribeEnvironmentsMessage = {}));
var DescribeEventsMessage;
(function (DescribeEventsMessage) {
    /**
     * @internal
     */
    DescribeEventsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsMessage = exports.DescribeEventsMessage || (exports.DescribeEventsMessage = {}));
var EventDescription;
(function (EventDescription) {
    /**
     * @internal
     */
    EventDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDescription = exports.EventDescription || (exports.EventDescription = {}));
var EventDescriptionsMessage;
(function (EventDescriptionsMessage) {
    /**
     * @internal
     */
    EventDescriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDescriptionsMessage = exports.EventDescriptionsMessage || (exports.EventDescriptionsMessage = {}));
var InstancesHealthAttribute;
(function (InstancesHealthAttribute) {
    InstancesHealthAttribute["All"] = "All";
    InstancesHealthAttribute["ApplicationMetrics"] = "ApplicationMetrics";
    InstancesHealthAttribute["AvailabilityZone"] = "AvailabilityZone";
    InstancesHealthAttribute["Causes"] = "Causes";
    InstancesHealthAttribute["Color"] = "Color";
    InstancesHealthAttribute["Deployment"] = "Deployment";
    InstancesHealthAttribute["HealthStatus"] = "HealthStatus";
    InstancesHealthAttribute["InstanceType"] = "InstanceType";
    InstancesHealthAttribute["LaunchedAt"] = "LaunchedAt";
    InstancesHealthAttribute["RefreshedAt"] = "RefreshedAt";
    InstancesHealthAttribute["System"] = "System";
})(InstancesHealthAttribute = exports.InstancesHealthAttribute || (exports.InstancesHealthAttribute = {}));
var DescribeInstancesHealthRequest;
(function (DescribeInstancesHealthRequest) {
    /**
     * @internal
     */
    DescribeInstancesHealthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesHealthRequest = exports.DescribeInstancesHealthRequest || (exports.DescribeInstancesHealthRequest = {}));
var Deployment;
(function (Deployment) {
    /**
     * @internal
     */
    Deployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var CPUUtilization;
(function (CPUUtilization) {
    /**
     * @internal
     */
    CPUUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CPUUtilization = exports.CPUUtilization || (exports.CPUUtilization = {}));
var SystemStatus;
(function (SystemStatus) {
    /**
     * @internal
     */
    SystemStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemStatus = exports.SystemStatus || (exports.SystemStatus = {}));
var SingleInstanceHealth;
(function (SingleInstanceHealth) {
    /**
     * @internal
     */
    SingleInstanceHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SingleInstanceHealth = exports.SingleInstanceHealth || (exports.SingleInstanceHealth = {}));
var DescribeInstancesHealthResult;
(function (DescribeInstancesHealthResult) {
    /**
     * @internal
     */
    DescribeInstancesHealthResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesHealthResult = exports.DescribeInstancesHealthResult || (exports.DescribeInstancesHealthResult = {}));
var DescribePlatformVersionRequest;
(function (DescribePlatformVersionRequest) {
    /**
     * @internal
     */
    DescribePlatformVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlatformVersionRequest = exports.DescribePlatformVersionRequest || (exports.DescribePlatformVersionRequest = {}));
var CustomAmi;
(function (CustomAmi) {
    /**
     * @internal
     */
    CustomAmi.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomAmi = exports.CustomAmi || (exports.CustomAmi = {}));
var PlatformFramework;
(function (PlatformFramework) {
    /**
     * @internal
     */
    PlatformFramework.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformFramework = exports.PlatformFramework || (exports.PlatformFramework = {}));
var PlatformProgrammingLanguage;
(function (PlatformProgrammingLanguage) {
    /**
     * @internal
     */
    PlatformProgrammingLanguage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformProgrammingLanguage = exports.PlatformProgrammingLanguage || (exports.PlatformProgrammingLanguage = {}));
var PlatformDescription;
(function (PlatformDescription) {
    /**
     * @internal
     */
    PlatformDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformDescription = exports.PlatformDescription || (exports.PlatformDescription = {}));
var DescribePlatformVersionResult;
(function (DescribePlatformVersionResult) {
    /**
     * @internal
     */
    DescribePlatformVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlatformVersionResult = exports.DescribePlatformVersionResult || (exports.DescribePlatformVersionResult = {}));
var DisassociateEnvironmentOperationsRoleMessage;
(function (DisassociateEnvironmentOperationsRoleMessage) {
    /**
     * @internal
     */
    DisassociateEnvironmentOperationsRoleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateEnvironmentOperationsRoleMessage = exports.DisassociateEnvironmentOperationsRoleMessage || (exports.DisassociateEnvironmentOperationsRoleMessage = {}));
var ListAvailableSolutionStacksResultMessage;
(function (ListAvailableSolutionStacksResultMessage) {
    /**
     * @internal
     */
    ListAvailableSolutionStacksResultMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableSolutionStacksResultMessage = exports.ListAvailableSolutionStacksResultMessage || (exports.ListAvailableSolutionStacksResultMessage = {}));
var SearchFilter;
(function (SearchFilter) {
    /**
     * @internal
     */
    SearchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFilter = exports.SearchFilter || (exports.SearchFilter = {}));
var ListPlatformBranchesRequest;
(function (ListPlatformBranchesRequest) {
    /**
     * @internal
     */
    ListPlatformBranchesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformBranchesRequest = exports.ListPlatformBranchesRequest || (exports.ListPlatformBranchesRequest = {}));
var PlatformBranchSummary;
(function (PlatformBranchSummary) {
    /**
     * @internal
     */
    PlatformBranchSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformBranchSummary = exports.PlatformBranchSummary || (exports.PlatformBranchSummary = {}));
var ListPlatformBranchesResult;
(function (ListPlatformBranchesResult) {
    /**
     * @internal
     */
    ListPlatformBranchesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformBranchesResult = exports.ListPlatformBranchesResult || (exports.ListPlatformBranchesResult = {}));
var PlatformFilter;
(function (PlatformFilter) {
    /**
     * @internal
     */
    PlatformFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformFilter = exports.PlatformFilter || (exports.PlatformFilter = {}));
var ListPlatformVersionsRequest;
(function (ListPlatformVersionsRequest) {
    /**
     * @internal
     */
    ListPlatformVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformVersionsRequest = exports.ListPlatformVersionsRequest || (exports.ListPlatformVersionsRequest = {}));
var ListPlatformVersionsResult;
(function (ListPlatformVersionsResult) {
    /**
     * @internal
     */
    ListPlatformVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformVersionsResult = exports.ListPlatformVersionsResult || (exports.ListPlatformVersionsResult = {}));
var ListTagsForResourceMessage;
(function (ListTagsForResourceMessage) {
    /**
     * @internal
     */
    ListTagsForResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceMessage = exports.ListTagsForResourceMessage || (exports.ListTagsForResourceMessage = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceTagsDescriptionMessage;
(function (ResourceTagsDescriptionMessage) {
    /**
     * @internal
     */
    ResourceTagsDescriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTagsDescriptionMessage = exports.ResourceTagsDescriptionMessage || (exports.ResourceTagsDescriptionMessage = {}));
var ResourceTypeNotSupportedException;
(function (ResourceTypeNotSupportedException) {
    /**
     * @internal
     */
    ResourceTypeNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTypeNotSupportedException = exports.ResourceTypeNotSupportedException || (exports.ResourceTypeNotSupportedException = {}));
var RebuildEnvironmentMessage;
(function (RebuildEnvironmentMessage) {
    /**
     * @internal
     */
    RebuildEnvironmentMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebuildEnvironmentMessage = exports.RebuildEnvironmentMessage || (exports.RebuildEnvironmentMessage = {}));
var RequestEnvironmentInfoMessage;
(function (RequestEnvironmentInfoMessage) {
    /**
     * @internal
     */
    RequestEnvironmentInfoMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestEnvironmentInfoMessage = exports.RequestEnvironmentInfoMessage || (exports.RequestEnvironmentInfoMessage = {}));
var RestartAppServerMessage;
(function (RestartAppServerMessage) {
    /**
     * @internal
     */
    RestartAppServerMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestartAppServerMessage = exports.RestartAppServerMessage || (exports.RestartAppServerMessage = {}));
var RetrieveEnvironmentInfoMessage;
(function (RetrieveEnvironmentInfoMessage) {
    /**
     * @internal
     */
    RetrieveEnvironmentInfoMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveEnvironmentInfoMessage = exports.RetrieveEnvironmentInfoMessage || (exports.RetrieveEnvironmentInfoMessage = {}));
var EnvironmentInfoDescription;
(function (EnvironmentInfoDescription) {
    /**
     * @internal
     */
    EnvironmentInfoDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentInfoDescription = exports.EnvironmentInfoDescription || (exports.EnvironmentInfoDescription = {}));
var RetrieveEnvironmentInfoResultMessage;
(function (RetrieveEnvironmentInfoResultMessage) {
    /**
     * @internal
     */
    RetrieveEnvironmentInfoResultMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveEnvironmentInfoResultMessage = exports.RetrieveEnvironmentInfoResultMessage || (exports.RetrieveEnvironmentInfoResultMessage = {}));
var SwapEnvironmentCNAMEsMessage;
(function (SwapEnvironmentCNAMEsMessage) {
    /**
     * @internal
     */
    SwapEnvironmentCNAMEsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SwapEnvironmentCNAMEsMessage = exports.SwapEnvironmentCNAMEsMessage || (exports.SwapEnvironmentCNAMEsMessage = {}));
var TerminateEnvironmentMessage;
(function (TerminateEnvironmentMessage) {
    /**
     * @internal
     */
    TerminateEnvironmentMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateEnvironmentMessage = exports.TerminateEnvironmentMessage || (exports.TerminateEnvironmentMessage = {}));
var UpdateApplicationMessage;
(function (UpdateApplicationMessage) {
    /**
     * @internal
     */
    UpdateApplicationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationMessage = exports.UpdateApplicationMessage || (exports.UpdateApplicationMessage = {}));
var UpdateApplicationResourceLifecycleMessage;
(function (UpdateApplicationResourceLifecycleMessage) {
    /**
     * @internal
     */
    UpdateApplicationResourceLifecycleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationResourceLifecycleMessage = exports.UpdateApplicationResourceLifecycleMessage || (exports.UpdateApplicationResourceLifecycleMessage = {}));
var UpdateApplicationVersionMessage;
(function (UpdateApplicationVersionMessage) {
    /**
     * @internal
     */
    UpdateApplicationVersionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationVersionMessage = exports.UpdateApplicationVersionMessage || (exports.UpdateApplicationVersionMessage = {}));
var UpdateConfigurationTemplateMessage;
(function (UpdateConfigurationTemplateMessage) {
    /**
     * @internal
     */
    UpdateConfigurationTemplateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationTemplateMessage = exports.UpdateConfigurationTemplateMessage || (exports.UpdateConfigurationTemplateMessage = {}));
var UpdateEnvironmentMessage;
(function (UpdateEnvironmentMessage) {
    /**
     * @internal
     */
    UpdateEnvironmentMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEnvironmentMessage = exports.UpdateEnvironmentMessage || (exports.UpdateEnvironmentMessage = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UpdateTagsForResourceMessage;
(function (UpdateTagsForResourceMessage) {
    /**
     * @internal
     */
    UpdateTagsForResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTagsForResourceMessage = exports.UpdateTagsForResourceMessage || (exports.UpdateTagsForResourceMessage = {}));
var ValidationMessage;
(function (ValidationMessage) {
    /**
     * @internal
     */
    ValidationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationMessage = exports.ValidationMessage || (exports.ValidationMessage = {}));
var ConfigurationSettingsValidationMessages;
(function (ConfigurationSettingsValidationMessages) {
    /**
     * @internal
     */
    ConfigurationSettingsValidationMessages.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationSettingsValidationMessages = exports.ConfigurationSettingsValidationMessages || (exports.ConfigurationSettingsValidationMessages = {}));
var ValidateConfigurationSettingsMessage;
(function (ValidateConfigurationSettingsMessage) {
    /**
     * @internal
     */
    ValidateConfigurationSettingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateConfigurationSettingsMessage = exports.ValidateConfigurationSettingsMessage || (exports.ValidateConfigurationSettingsMessage = {}));
//# sourceMappingURL=models_0.js.map