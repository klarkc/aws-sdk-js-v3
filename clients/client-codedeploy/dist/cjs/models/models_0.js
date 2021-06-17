"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentType = exports.DeploymentOption = exports.BlueGreenDeploymentConfiguration = exports.BlueInstanceTerminationOption = exports.InstanceAction = exports.GreenFleetProvisioningOption = exports.GreenFleetProvisioningAction = exports.DeploymentReadyOption = exports.DeploymentReadyAction = exports.BatchGetDeploymentGroupsInput = exports.BatchGetApplicationsOutput = exports.BatchGetApplicationsInput = exports.RevisionRequiredException = exports.InvalidRevisionException = exports.InvalidApplicationNameException = exports.BatchLimitExceededException = exports.BatchGetApplicationRevisionsOutput = exports.RevisionInfo = exports.GenericRevisionInfo = exports.BatchGetApplicationRevisionsInput = exports.RevisionLocation = exports.RawString = exports.S3Location = exports.BundleType = exports.RevisionLocationType = exports.GitHubLocation = exports.AutoScalingGroup = exports.AutoRollbackConfiguration = exports.AutoRollbackEvent = exports.ArnNotSupportedException = exports.AppSpecContent = exports.ApplicationRevisionSortBy = exports.ApplicationNameRequiredException = exports.ApplicationLimitExceededException = exports.ApplicationInfo = exports.ComputePlatform = exports.ApplicationDoesNotExistException = exports.ApplicationAlreadyExistsException = exports.AlarmsLimitExceededException = exports.AlarmConfiguration = exports.Alarm = exports.TagRequiredException = exports.TagLimitExceededException = exports.InvalidTagException = exports.InvalidInstanceNameException = exports.InstanceNotRegisteredException = exports.InstanceNameRequiredException = exports.InstanceLimitExceededException = exports.AddTagsToOnPremisesInstancesInput = exports.Tag = void 0;
exports.TargetStatus = exports.BatchGetDeploymentTargetsInput = exports.BatchGetDeploymentsOutput = exports.DeploymentInfo = exports.TargetInstances = exports.RollbackInfo = exports.RelatedDeployments = exports.FileExistsBehavior = exports.ErrorInformation = exports.ErrorCode = exports.DeploymentOverview = exports.DeploymentCreator = exports.BatchGetDeploymentsInput = exports.InvalidDeploymentIdException = exports.InvalidComputePlatformException = exports.InstanceIdRequiredException = exports.DeploymentIdRequiredException = exports.DeploymentDoesNotExistException = exports.BatchGetDeploymentInstancesOutput = exports.InstanceSummary = exports.InstanceStatus = exports.LifecycleEvent = exports.LifecycleEventStatus = exports.Diagnostics = exports.LifecycleErrorCode = exports._InstanceType = exports.BatchGetDeploymentInstancesInput = exports.InvalidDeploymentGroupNameException = exports.DeploymentGroupNameRequiredException = exports.DeploymentConfigDoesNotExistException = exports.BatchGetDeploymentGroupsOutput = exports.DeploymentGroupInfo = exports.TriggerConfig = exports.TriggerEventType = exports.OutdatedInstancesStrategy = exports.OnPremisesTagSet = exports.TagFilter = exports.TagFilterType = exports.LoadBalancerInfo = exports.TargetGroupPairInfo = exports.TrafficRoute = exports.TargetGroupInfo = exports.ELBInfo = exports.LastDeploymentInfo = exports.DeploymentStatus = exports.ECSService = exports.EC2TagSet = exports.EC2TagFilter = exports.EC2TagFilterType = exports.DeploymentStyle = void 0;
exports.TimeBasedCanary = exports.MinimumHealthyHosts = exports.ThrottlingException = exports.RevisionDoesNotExistException = exports.InvalidUpdateOutdatedInstancesOnlyValueException = exports.InvalidTrafficRoutingConfigurationException = exports.InvalidTargetInstancesException = exports.InvalidRoleException = exports.InvalidLoadBalancerInfoException = exports.InvalidIgnoreApplicationStopFailuresValueException = exports.InvalidGitHubAccountTokenException = exports.InvalidFileExistsBehaviorException = exports.InvalidDeploymentConfigNameException = exports.InvalidAutoScalingGroupException = exports.InvalidAutoRollbackConfigException = exports.DescriptionTooLongException = exports.DeploymentLimitExceededException = exports.DeploymentGroupDoesNotExistException = exports.CreateDeploymentOutput = exports.CreateDeploymentInput = exports.InvalidTagsToAddException = exports.CreateApplicationOutput = exports.CreateApplicationInput = exports.UnsupportedActionForDeploymentTypeException = exports.InvalidDeploymentWaitTypeException = exports.InvalidDeploymentStatusException = exports.DeploymentIsNotInReadyStateException = exports.DeploymentAlreadyCompletedException = exports.ContinueDeploymentInput = exports.DeploymentWaitType = exports.BucketNameFilterRequiredException = exports.BatchGetOnPremisesInstancesOutput = exports.InstanceInfo = exports.BatchGetOnPremisesInstancesInput = exports.InvalidDeploymentTargetIdException = exports.InstanceDoesNotExistException = exports.DeploymentTargetListSizeExceededException = exports.DeploymentTargetIdRequiredException = exports.DeploymentTargetDoesNotExistException = exports.DeploymentNotStartedException = exports.BatchGetDeploymentTargetsOutput = exports.DeploymentTarget = exports.LambdaTarget = exports.LambdaFunctionInfo = exports.InstanceTarget = exports.ECSTarget = exports.ECSTaskSet = exports.TargetLabel = exports.DeploymentTargetType = exports.CloudFormationTarget = void 0;
exports.GetDeploymentOutput = exports.GetDeploymentInput = exports.GetApplicationRevisionOutput = exports.GetApplicationRevisionInput = exports.GetApplicationOutput = exports.GetApplicationInput = exports.DeregisterOnPremisesInstanceInput = exports.DeleteResourcesByExternalIdOutput = exports.DeleteResourcesByExternalIdInput = exports.ResourceValidationException = exports.OperationNotSupportedException = exports.InvalidGitHubAccountTokenNameException = exports.GitHubAccountTokenNameRequiredException = exports.GitHubAccountTokenDoesNotExistException = exports.DeleteGitHubAccountTokenOutput = exports.DeleteGitHubAccountTokenInput = exports.DeleteDeploymentGroupOutput = exports.DeleteDeploymentGroupInput = exports.InvalidOperationException = exports.DeploymentConfigInUseException = exports.DeleteDeploymentConfigInput = exports.DeleteApplicationInput = exports.TriggerTargetsLimitExceededException = exports.TagSetListLimitExceededException = exports.RoleRequiredException = exports.LifecycleHookLimitExceededException = exports.InvalidTriggerConfigException = exports.InvalidTargetGroupPairException = exports.InvalidOnPremisesTagCombinationException = exports.InvalidInputException = exports.InvalidECSServiceException = exports.InvalidEC2TagException = exports.InvalidEC2TagCombinationException = exports.InvalidDeploymentStyleException = exports.InvalidBlueGreenDeploymentConfigurationException = exports.InvalidAlarmConfigException = exports.ECSServiceMappingLimitExceededException = exports.DeploymentGroupLimitExceededException = exports.DeploymentGroupAlreadyExistsException = exports.CreateDeploymentGroupOutput = exports.CreateDeploymentGroupInput = exports.InvalidMinimumHealthyHostValueException = exports.DeploymentConfigNameRequiredException = exports.DeploymentConfigLimitExceededException = exports.DeploymentConfigAlreadyExistsException = exports.CreateDeploymentConfigOutput = exports.CreateDeploymentConfigInput = exports.TrafficRoutingConfig = exports.TrafficRoutingType = exports.TimeBasedLinear = void 0;
exports.ListTagsForResourceInput = exports.InvalidArnException = exports.ListOnPremisesInstancesOutput = exports.ListOnPremisesInstancesInput = exports.RegistrationStatus = exports.InvalidTagFilterException = exports.InvalidRegistrationStatusException = exports.ListGitHubAccountTokenNamesOutput = exports.ListGitHubAccountTokenNamesInput = exports.ListDeploymentTargetsOutput = exports.ListDeploymentTargetsInput = exports.TargetFilterName = exports.ListDeploymentsOutput = exports.ListDeploymentsInput = exports.TimeRange = exports.InvalidTimeRangeException = exports.InvalidExternalIdException = exports.ListDeploymentInstancesOutput = exports.ListDeploymentInstancesInput = exports.InvalidTargetFilterNameException = exports.InvalidInstanceTypeException = exports.InvalidInstanceStatusException = exports.InvalidDeploymentInstanceTypeException = exports.ListDeploymentGroupsOutput = exports.ListDeploymentGroupsInput = exports.ListDeploymentConfigsOutput = exports.ListDeploymentConfigsInput = exports.ListApplicationsOutput = exports.ListApplicationsInput = exports.ListApplicationRevisionsOutput = exports.ListApplicationRevisionsInput = exports.SortOrder = exports.ListStateFilterAction = exports.InvalidSortOrderException = exports.InvalidSortByException = exports.InvalidNextTokenException = exports.InvalidKeyPrefixFilterException = exports.InvalidDeployedStateFilterException = exports.InvalidBucketNameFilterException = exports.GetOnPremisesInstanceOutput = exports.GetOnPremisesInstanceInput = exports.GetDeploymentTargetOutput = exports.GetDeploymentTargetInput = exports.GetDeploymentInstanceOutput = exports.GetDeploymentInstanceInput = exports.GetDeploymentGroupOutput = exports.GetDeploymentGroupInput = exports.GetDeploymentConfigOutput = exports.DeploymentConfigInfo = exports.GetDeploymentConfigInput = void 0;
exports.UpdateDeploymentGroupOutput = exports.UpdateDeploymentGroupInput = exports.UpdateApplicationInput = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.StopDeploymentOutput = exports.StopStatus = exports.StopDeploymentInput = exports.SkipWaitTimeForInstanceTerminationInput = exports.RemoveTagsFromOnPremisesInstancesInput = exports.RegisterOnPremisesInstanceInput = exports.MultipleIamArnsProvidedException = exports.InvalidIamUserArnException = exports.InvalidIamSessionArnException = exports.InstanceNameAlreadyRegisteredException = exports.IamUserArnRequiredException = exports.IamUserArnAlreadyRegisteredException = exports.IamSessionArnAlreadyRegisteredException = exports.IamArnRequiredException = exports.RegisterApplicationRevisionInput = exports.PutLifecycleEventHookExecutionStatusOutput = exports.PutLifecycleEventHookExecutionStatusInput = exports.LifecycleEventAlreadyCompletedException = exports.InvalidLifecycleEventHookExecutionStatusException = exports.InvalidLifecycleEventHookExecutionIdException = exports.ResourceArnRequiredException = exports.ListTagsForResourceOutput = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsToOnPremisesInstancesInput;
(function (AddTagsToOnPremisesInstancesInput) {
    /**
     * @internal
     */
    AddTagsToOnPremisesInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToOnPremisesInstancesInput = exports.AddTagsToOnPremisesInstancesInput || (exports.AddTagsToOnPremisesInstancesInput = {}));
var InstanceLimitExceededException;
(function (InstanceLimitExceededException) {
    /**
     * @internal
     */
    InstanceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceLimitExceededException = exports.InstanceLimitExceededException || (exports.InstanceLimitExceededException = {}));
var InstanceNameRequiredException;
(function (InstanceNameRequiredException) {
    /**
     * @internal
     */
    InstanceNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNameRequiredException = exports.InstanceNameRequiredException || (exports.InstanceNameRequiredException = {}));
var InstanceNotRegisteredException;
(function (InstanceNotRegisteredException) {
    /**
     * @internal
     */
    InstanceNotRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNotRegisteredException = exports.InstanceNotRegisteredException || (exports.InstanceNotRegisteredException = {}));
var InvalidInstanceNameException;
(function (InvalidInstanceNameException) {
    /**
     * @internal
     */
    InvalidInstanceNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInstanceNameException = exports.InvalidInstanceNameException || (exports.InvalidInstanceNameException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    /**
     * @internal
     */
    InvalidTagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var TagRequiredException;
(function (TagRequiredException) {
    /**
     * @internal
     */
    TagRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagRequiredException = exports.TagRequiredException || (exports.TagRequiredException = {}));
var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var AlarmConfiguration;
(function (AlarmConfiguration) {
    /**
     * @internal
     */
    AlarmConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmConfiguration = exports.AlarmConfiguration || (exports.AlarmConfiguration = {}));
var AlarmsLimitExceededException;
(function (AlarmsLimitExceededException) {
    /**
     * @internal
     */
    AlarmsLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmsLimitExceededException = exports.AlarmsLimitExceededException || (exports.AlarmsLimitExceededException = {}));
var ApplicationAlreadyExistsException;
(function (ApplicationAlreadyExistsException) {
    /**
     * @internal
     */
    ApplicationAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationAlreadyExistsException = exports.ApplicationAlreadyExistsException || (exports.ApplicationAlreadyExistsException = {}));
var ApplicationDoesNotExistException;
(function (ApplicationDoesNotExistException) {
    /**
     * @internal
     */
    ApplicationDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDoesNotExistException = exports.ApplicationDoesNotExistException || (exports.ApplicationDoesNotExistException = {}));
var ComputePlatform;
(function (ComputePlatform) {
    ComputePlatform["ECS"] = "ECS";
    ComputePlatform["LAMBDA"] = "Lambda";
    ComputePlatform["SERVER"] = "Server";
})(ComputePlatform = exports.ComputePlatform || (exports.ComputePlatform = {}));
var ApplicationInfo;
(function (ApplicationInfo) {
    /**
     * @internal
     */
    ApplicationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationInfo = exports.ApplicationInfo || (exports.ApplicationInfo = {}));
var ApplicationLimitExceededException;
(function (ApplicationLimitExceededException) {
    /**
     * @internal
     */
    ApplicationLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationLimitExceededException = exports.ApplicationLimitExceededException || (exports.ApplicationLimitExceededException = {}));
var ApplicationNameRequiredException;
(function (ApplicationNameRequiredException) {
    /**
     * @internal
     */
    ApplicationNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationNameRequiredException = exports.ApplicationNameRequiredException || (exports.ApplicationNameRequiredException = {}));
var ApplicationRevisionSortBy;
(function (ApplicationRevisionSortBy) {
    ApplicationRevisionSortBy["FirstUsedTime"] = "firstUsedTime";
    ApplicationRevisionSortBy["LastUsedTime"] = "lastUsedTime";
    ApplicationRevisionSortBy["RegisterTime"] = "registerTime";
})(ApplicationRevisionSortBy = exports.ApplicationRevisionSortBy || (exports.ApplicationRevisionSortBy = {}));
var AppSpecContent;
(function (AppSpecContent) {
    /**
     * @internal
     */
    AppSpecContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppSpecContent = exports.AppSpecContent || (exports.AppSpecContent = {}));
var ArnNotSupportedException;
(function (ArnNotSupportedException) {
    /**
     * @internal
     */
    ArnNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArnNotSupportedException = exports.ArnNotSupportedException || (exports.ArnNotSupportedException = {}));
var AutoRollbackEvent;
(function (AutoRollbackEvent) {
    AutoRollbackEvent["DEPLOYMENT_FAILURE"] = "DEPLOYMENT_FAILURE";
    AutoRollbackEvent["DEPLOYMENT_STOP_ON_ALARM"] = "DEPLOYMENT_STOP_ON_ALARM";
    AutoRollbackEvent["DEPLOYMENT_STOP_ON_REQUEST"] = "DEPLOYMENT_STOP_ON_REQUEST";
})(AutoRollbackEvent = exports.AutoRollbackEvent || (exports.AutoRollbackEvent = {}));
var AutoRollbackConfiguration;
(function (AutoRollbackConfiguration) {
    /**
     * @internal
     */
    AutoRollbackConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoRollbackConfiguration = exports.AutoRollbackConfiguration || (exports.AutoRollbackConfiguration = {}));
var AutoScalingGroup;
(function (AutoScalingGroup) {
    /**
     * @internal
     */
    AutoScalingGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroup = exports.AutoScalingGroup || (exports.AutoScalingGroup = {}));
var GitHubLocation;
(function (GitHubLocation) {
    /**
     * @internal
     */
    GitHubLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitHubLocation = exports.GitHubLocation || (exports.GitHubLocation = {}));
var RevisionLocationType;
(function (RevisionLocationType) {
    RevisionLocationType["AppSpecContent"] = "AppSpecContent";
    RevisionLocationType["GitHub"] = "GitHub";
    RevisionLocationType["S3"] = "S3";
    RevisionLocationType["String"] = "String";
})(RevisionLocationType = exports.RevisionLocationType || (exports.RevisionLocationType = {}));
var BundleType;
(function (BundleType) {
    BundleType["JSON"] = "JSON";
    BundleType["Tar"] = "tar";
    BundleType["TarGZip"] = "tgz";
    BundleType["YAML"] = "YAML";
    BundleType["Zip"] = "zip";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var RawString;
(function (RawString) {
    /**
     * @internal
     */
    RawString.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RawString = exports.RawString || (exports.RawString = {}));
var RevisionLocation;
(function (RevisionLocation) {
    /**
     * @internal
     */
    RevisionLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionLocation = exports.RevisionLocation || (exports.RevisionLocation = {}));
var BatchGetApplicationRevisionsInput;
(function (BatchGetApplicationRevisionsInput) {
    /**
     * @internal
     */
    BatchGetApplicationRevisionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetApplicationRevisionsInput = exports.BatchGetApplicationRevisionsInput || (exports.BatchGetApplicationRevisionsInput = {}));
var GenericRevisionInfo;
(function (GenericRevisionInfo) {
    /**
     * @internal
     */
    GenericRevisionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenericRevisionInfo = exports.GenericRevisionInfo || (exports.GenericRevisionInfo = {}));
var RevisionInfo;
(function (RevisionInfo) {
    /**
     * @internal
     */
    RevisionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionInfo = exports.RevisionInfo || (exports.RevisionInfo = {}));
var BatchGetApplicationRevisionsOutput;
(function (BatchGetApplicationRevisionsOutput) {
    /**
     * @internal
     */
    BatchGetApplicationRevisionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetApplicationRevisionsOutput = exports.BatchGetApplicationRevisionsOutput || (exports.BatchGetApplicationRevisionsOutput = {}));
var BatchLimitExceededException;
(function (BatchLimitExceededException) {
    /**
     * @internal
     */
    BatchLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchLimitExceededException = exports.BatchLimitExceededException || (exports.BatchLimitExceededException = {}));
var InvalidApplicationNameException;
(function (InvalidApplicationNameException) {
    /**
     * @internal
     */
    InvalidApplicationNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApplicationNameException = exports.InvalidApplicationNameException || (exports.InvalidApplicationNameException = {}));
var InvalidRevisionException;
(function (InvalidRevisionException) {
    /**
     * @internal
     */
    InvalidRevisionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRevisionException = exports.InvalidRevisionException || (exports.InvalidRevisionException = {}));
var RevisionRequiredException;
(function (RevisionRequiredException) {
    /**
     * @internal
     */
    RevisionRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionRequiredException = exports.RevisionRequiredException || (exports.RevisionRequiredException = {}));
var BatchGetApplicationsInput;
(function (BatchGetApplicationsInput) {
    /**
     * @internal
     */
    BatchGetApplicationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetApplicationsInput = exports.BatchGetApplicationsInput || (exports.BatchGetApplicationsInput = {}));
var BatchGetApplicationsOutput;
(function (BatchGetApplicationsOutput) {
    /**
     * @internal
     */
    BatchGetApplicationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetApplicationsOutput = exports.BatchGetApplicationsOutput || (exports.BatchGetApplicationsOutput = {}));
var BatchGetDeploymentGroupsInput;
(function (BatchGetDeploymentGroupsInput) {
    /**
     * @internal
     */
    BatchGetDeploymentGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentGroupsInput = exports.BatchGetDeploymentGroupsInput || (exports.BatchGetDeploymentGroupsInput = {}));
var DeploymentReadyAction;
(function (DeploymentReadyAction) {
    DeploymentReadyAction["CONTINUE_DEPLOYMENT"] = "CONTINUE_DEPLOYMENT";
    DeploymentReadyAction["STOP_DEPLOYMENT"] = "STOP_DEPLOYMENT";
})(DeploymentReadyAction = exports.DeploymentReadyAction || (exports.DeploymentReadyAction = {}));
var DeploymentReadyOption;
(function (DeploymentReadyOption) {
    /**
     * @internal
     */
    DeploymentReadyOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentReadyOption = exports.DeploymentReadyOption || (exports.DeploymentReadyOption = {}));
var GreenFleetProvisioningAction;
(function (GreenFleetProvisioningAction) {
    GreenFleetProvisioningAction["COPY_AUTO_SCALING_GROUP"] = "COPY_AUTO_SCALING_GROUP";
    GreenFleetProvisioningAction["DISCOVER_EXISTING"] = "DISCOVER_EXISTING";
})(GreenFleetProvisioningAction = exports.GreenFleetProvisioningAction || (exports.GreenFleetProvisioningAction = {}));
var GreenFleetProvisioningOption;
(function (GreenFleetProvisioningOption) {
    /**
     * @internal
     */
    GreenFleetProvisioningOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GreenFleetProvisioningOption = exports.GreenFleetProvisioningOption || (exports.GreenFleetProvisioningOption = {}));
var InstanceAction;
(function (InstanceAction) {
    InstanceAction["KEEP_ALIVE"] = "KEEP_ALIVE";
    InstanceAction["TERMINATE"] = "TERMINATE";
})(InstanceAction = exports.InstanceAction || (exports.InstanceAction = {}));
var BlueInstanceTerminationOption;
(function (BlueInstanceTerminationOption) {
    /**
     * @internal
     */
    BlueInstanceTerminationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlueInstanceTerminationOption = exports.BlueInstanceTerminationOption || (exports.BlueInstanceTerminationOption = {}));
var BlueGreenDeploymentConfiguration;
(function (BlueGreenDeploymentConfiguration) {
    /**
     * @internal
     */
    BlueGreenDeploymentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlueGreenDeploymentConfiguration = exports.BlueGreenDeploymentConfiguration || (exports.BlueGreenDeploymentConfiguration = {}));
var DeploymentOption;
(function (DeploymentOption) {
    DeploymentOption["WITHOUT_TRAFFIC_CONTROL"] = "WITHOUT_TRAFFIC_CONTROL";
    DeploymentOption["WITH_TRAFFIC_CONTROL"] = "WITH_TRAFFIC_CONTROL";
})(DeploymentOption = exports.DeploymentOption || (exports.DeploymentOption = {}));
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["BLUE_GREEN"] = "BLUE_GREEN";
    DeploymentType["IN_PLACE"] = "IN_PLACE";
})(DeploymentType = exports.DeploymentType || (exports.DeploymentType = {}));
var DeploymentStyle;
(function (DeploymentStyle) {
    /**
     * @internal
     */
    DeploymentStyle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentStyle = exports.DeploymentStyle || (exports.DeploymentStyle = {}));
var EC2TagFilterType;
(function (EC2TagFilterType) {
    EC2TagFilterType["KEY_AND_VALUE"] = "KEY_AND_VALUE";
    EC2TagFilterType["KEY_ONLY"] = "KEY_ONLY";
    EC2TagFilterType["VALUE_ONLY"] = "VALUE_ONLY";
})(EC2TagFilterType = exports.EC2TagFilterType || (exports.EC2TagFilterType = {}));
var EC2TagFilter;
(function (EC2TagFilter) {
    /**
     * @internal
     */
    EC2TagFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2TagFilter = exports.EC2TagFilter || (exports.EC2TagFilter = {}));
var EC2TagSet;
(function (EC2TagSet) {
    /**
     * @internal
     */
    EC2TagSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2TagSet = exports.EC2TagSet || (exports.EC2TagSet = {}));
var ECSService;
(function (ECSService) {
    /**
     * @internal
     */
    ECSService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ECSService = exports.ECSService || (exports.ECSService = {}));
var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["BAKING"] = "Baking";
    DeploymentStatus["CREATED"] = "Created";
    DeploymentStatus["FAILED"] = "Failed";
    DeploymentStatus["IN_PROGRESS"] = "InProgress";
    DeploymentStatus["QUEUED"] = "Queued";
    DeploymentStatus["READY"] = "Ready";
    DeploymentStatus["STOPPED"] = "Stopped";
    DeploymentStatus["SUCCEEDED"] = "Succeeded";
})(DeploymentStatus = exports.DeploymentStatus || (exports.DeploymentStatus = {}));
var LastDeploymentInfo;
(function (LastDeploymentInfo) {
    /**
     * @internal
     */
    LastDeploymentInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastDeploymentInfo = exports.LastDeploymentInfo || (exports.LastDeploymentInfo = {}));
var ELBInfo;
(function (ELBInfo) {
    /**
     * @internal
     */
    ELBInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ELBInfo = exports.ELBInfo || (exports.ELBInfo = {}));
var TargetGroupInfo;
(function (TargetGroupInfo) {
    /**
     * @internal
     */
    TargetGroupInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetGroupInfo = exports.TargetGroupInfo || (exports.TargetGroupInfo = {}));
var TrafficRoute;
(function (TrafficRoute) {
    /**
     * @internal
     */
    TrafficRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficRoute = exports.TrafficRoute || (exports.TrafficRoute = {}));
var TargetGroupPairInfo;
(function (TargetGroupPairInfo) {
    /**
     * @internal
     */
    TargetGroupPairInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetGroupPairInfo = exports.TargetGroupPairInfo || (exports.TargetGroupPairInfo = {}));
var LoadBalancerInfo;
(function (LoadBalancerInfo) {
    /**
     * @internal
     */
    LoadBalancerInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerInfo = exports.LoadBalancerInfo || (exports.LoadBalancerInfo = {}));
var TagFilterType;
(function (TagFilterType) {
    TagFilterType["KEY_AND_VALUE"] = "KEY_AND_VALUE";
    TagFilterType["KEY_ONLY"] = "KEY_ONLY";
    TagFilterType["VALUE_ONLY"] = "VALUE_ONLY";
})(TagFilterType = exports.TagFilterType || (exports.TagFilterType = {}));
var TagFilter;
(function (TagFilter) {
    /**
     * @internal
     */
    TagFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var OnPremisesTagSet;
(function (OnPremisesTagSet) {
    /**
     * @internal
     */
    OnPremisesTagSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnPremisesTagSet = exports.OnPremisesTagSet || (exports.OnPremisesTagSet = {}));
var OutdatedInstancesStrategy;
(function (OutdatedInstancesStrategy) {
    OutdatedInstancesStrategy["Ignore"] = "IGNORE";
    OutdatedInstancesStrategy["Update"] = "UPDATE";
})(OutdatedInstancesStrategy = exports.OutdatedInstancesStrategy || (exports.OutdatedInstancesStrategy = {}));
var TriggerEventType;
(function (TriggerEventType) {
    TriggerEventType["DEPLOYMENT_FAILURE"] = "DeploymentFailure";
    TriggerEventType["DEPLOYMENT_READY"] = "DeploymentReady";
    TriggerEventType["DEPLOYMENT_ROLLBACK"] = "DeploymentRollback";
    TriggerEventType["DEPLOYMENT_START"] = "DeploymentStart";
    TriggerEventType["DEPLOYMENT_STOP"] = "DeploymentStop";
    TriggerEventType["DEPLOYMENT_SUCCESS"] = "DeploymentSuccess";
    TriggerEventType["INSTANCE_FAILURE"] = "InstanceFailure";
    TriggerEventType["INSTANCE_READY"] = "InstanceReady";
    TriggerEventType["INSTANCE_START"] = "InstanceStart";
    TriggerEventType["INSTANCE_SUCCESS"] = "InstanceSuccess";
})(TriggerEventType = exports.TriggerEventType || (exports.TriggerEventType = {}));
var TriggerConfig;
(function (TriggerConfig) {
    /**
     * @internal
     */
    TriggerConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerConfig = exports.TriggerConfig || (exports.TriggerConfig = {}));
var DeploymentGroupInfo;
(function (DeploymentGroupInfo) {
    /**
     * @internal
     */
    DeploymentGroupInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentGroupInfo = exports.DeploymentGroupInfo || (exports.DeploymentGroupInfo = {}));
var BatchGetDeploymentGroupsOutput;
(function (BatchGetDeploymentGroupsOutput) {
    /**
     * @internal
     */
    BatchGetDeploymentGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentGroupsOutput = exports.BatchGetDeploymentGroupsOutput || (exports.BatchGetDeploymentGroupsOutput = {}));
var DeploymentConfigDoesNotExistException;
(function (DeploymentConfigDoesNotExistException) {
    /**
     * @internal
     */
    DeploymentConfigDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigDoesNotExistException = exports.DeploymentConfigDoesNotExistException || (exports.DeploymentConfigDoesNotExistException = {}));
var DeploymentGroupNameRequiredException;
(function (DeploymentGroupNameRequiredException) {
    /**
     * @internal
     */
    DeploymentGroupNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentGroupNameRequiredException = exports.DeploymentGroupNameRequiredException || (exports.DeploymentGroupNameRequiredException = {}));
var InvalidDeploymentGroupNameException;
(function (InvalidDeploymentGroupNameException) {
    /**
     * @internal
     */
    InvalidDeploymentGroupNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentGroupNameException = exports.InvalidDeploymentGroupNameException || (exports.InvalidDeploymentGroupNameException = {}));
var BatchGetDeploymentInstancesInput;
(function (BatchGetDeploymentInstancesInput) {
    /**
     * @internal
     */
    BatchGetDeploymentInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentInstancesInput = exports.BatchGetDeploymentInstancesInput || (exports.BatchGetDeploymentInstancesInput = {}));
var _InstanceType;
(function (_InstanceType) {
    _InstanceType["BLUE"] = "Blue";
    _InstanceType["GREEN"] = "Green";
})(_InstanceType = exports._InstanceType || (exports._InstanceType = {}));
var LifecycleErrorCode;
(function (LifecycleErrorCode) {
    LifecycleErrorCode["SCRIPT_FAILED"] = "ScriptFailed";
    LifecycleErrorCode["SCRIPT_MISSING"] = "ScriptMissing";
    LifecycleErrorCode["SCRIPT_NOT_EXECUTABLE"] = "ScriptNotExecutable";
    LifecycleErrorCode["SCRIPT_TIMED_OUT"] = "ScriptTimedOut";
    LifecycleErrorCode["SUCCESS"] = "Success";
    LifecycleErrorCode["UNKNOWN_ERROR"] = "UnknownError";
})(LifecycleErrorCode = exports.LifecycleErrorCode || (exports.LifecycleErrorCode = {}));
var Diagnostics;
(function (Diagnostics) {
    /**
     * @internal
     */
    Diagnostics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Diagnostics = exports.Diagnostics || (exports.Diagnostics = {}));
var LifecycleEventStatus;
(function (LifecycleEventStatus) {
    LifecycleEventStatus["FAILED"] = "Failed";
    LifecycleEventStatus["IN_PROGRESS"] = "InProgress";
    LifecycleEventStatus["PENDING"] = "Pending";
    LifecycleEventStatus["SKIPPED"] = "Skipped";
    LifecycleEventStatus["SUCCEEDED"] = "Succeeded";
    LifecycleEventStatus["UNKNOWN"] = "Unknown";
})(LifecycleEventStatus = exports.LifecycleEventStatus || (exports.LifecycleEventStatus = {}));
var LifecycleEvent;
(function (LifecycleEvent) {
    /**
     * @internal
     */
    LifecycleEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleEvent = exports.LifecycleEvent || (exports.LifecycleEvent = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["FAILED"] = "Failed";
    InstanceStatus["IN_PROGRESS"] = "InProgress";
    InstanceStatus["PENDING"] = "Pending";
    InstanceStatus["READY"] = "Ready";
    InstanceStatus["SKIPPED"] = "Skipped";
    InstanceStatus["SUCCEEDED"] = "Succeeded";
    InstanceStatus["UNKNOWN"] = "Unknown";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InstanceSummary;
(function (InstanceSummary) {
    /**
     * @internal
     */
    InstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceSummary = exports.InstanceSummary || (exports.InstanceSummary = {}));
var BatchGetDeploymentInstancesOutput;
(function (BatchGetDeploymentInstancesOutput) {
    /**
     * @internal
     */
    BatchGetDeploymentInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentInstancesOutput = exports.BatchGetDeploymentInstancesOutput || (exports.BatchGetDeploymentInstancesOutput = {}));
var DeploymentDoesNotExistException;
(function (DeploymentDoesNotExistException) {
    /**
     * @internal
     */
    DeploymentDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentDoesNotExistException = exports.DeploymentDoesNotExistException || (exports.DeploymentDoesNotExistException = {}));
var DeploymentIdRequiredException;
(function (DeploymentIdRequiredException) {
    /**
     * @internal
     */
    DeploymentIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentIdRequiredException = exports.DeploymentIdRequiredException || (exports.DeploymentIdRequiredException = {}));
var InstanceIdRequiredException;
(function (InstanceIdRequiredException) {
    /**
     * @internal
     */
    InstanceIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIdRequiredException = exports.InstanceIdRequiredException || (exports.InstanceIdRequiredException = {}));
var InvalidComputePlatformException;
(function (InvalidComputePlatformException) {
    /**
     * @internal
     */
    InvalidComputePlatformException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidComputePlatformException = exports.InvalidComputePlatformException || (exports.InvalidComputePlatformException = {}));
var InvalidDeploymentIdException;
(function (InvalidDeploymentIdException) {
    /**
     * @internal
     */
    InvalidDeploymentIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentIdException = exports.InvalidDeploymentIdException || (exports.InvalidDeploymentIdException = {}));
var BatchGetDeploymentsInput;
(function (BatchGetDeploymentsInput) {
    /**
     * @internal
     */
    BatchGetDeploymentsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentsInput = exports.BatchGetDeploymentsInput || (exports.BatchGetDeploymentsInput = {}));
var DeploymentCreator;
(function (DeploymentCreator) {
    DeploymentCreator["Autoscaling"] = "autoscaling";
    DeploymentCreator["CloudFormation"] = "CloudFormation";
    DeploymentCreator["CloudFormationRollback"] = "CloudFormationRollback";
    DeploymentCreator["CodeDeploy"] = "CodeDeploy";
    DeploymentCreator["CodeDeployAutoUpdate"] = "CodeDeployAutoUpdate";
    DeploymentCreator["CodeDeployRollback"] = "codeDeployRollback";
    DeploymentCreator["User"] = "user";
})(DeploymentCreator = exports.DeploymentCreator || (exports.DeploymentCreator = {}));
var DeploymentOverview;
(function (DeploymentOverview) {
    /**
     * @internal
     */
    DeploymentOverview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentOverview = exports.DeploymentOverview || (exports.DeploymentOverview = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AGENT_ISSUE"] = "AGENT_ISSUE";
    ErrorCode["ALARM_ACTIVE"] = "ALARM_ACTIVE";
    ErrorCode["APPLICATION_MISSING"] = "APPLICATION_MISSING";
    ErrorCode["AUTOSCALING_VALIDATION_ERROR"] = "AUTOSCALING_VALIDATION_ERROR";
    ErrorCode["AUTO_SCALING_CONFIGURATION"] = "AUTO_SCALING_CONFIGURATION";
    ErrorCode["AUTO_SCALING_IAM_ROLE_PERMISSIONS"] = "AUTO_SCALING_IAM_ROLE_PERMISSIONS";
    ErrorCode["CLOUDFORMATION_STACK_FAILURE"] = "CLOUDFORMATION_STACK_FAILURE";
    ErrorCode["CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"] = "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND";
    ErrorCode["CUSTOMER_APPLICATION_UNHEALTHY"] = "CUSTOMER_APPLICATION_UNHEALTHY";
    ErrorCode["DEPLOYMENT_GROUP_MISSING"] = "DEPLOYMENT_GROUP_MISSING";
    ErrorCode["ECS_UPDATE_ERROR"] = "ECS_UPDATE_ERROR";
    ErrorCode["ELASTIC_LOAD_BALANCING_INVALID"] = "ELASTIC_LOAD_BALANCING_INVALID";
    ErrorCode["ELB_INVALID_INSTANCE"] = "ELB_INVALID_INSTANCE";
    ErrorCode["HEALTH_CONSTRAINTS"] = "HEALTH_CONSTRAINTS";
    ErrorCode["HEALTH_CONSTRAINTS_INVALID"] = "HEALTH_CONSTRAINTS_INVALID";
    ErrorCode["HOOK_EXECUTION_FAILURE"] = "HOOK_EXECUTION_FAILURE";
    ErrorCode["IAM_ROLE_MISSING"] = "IAM_ROLE_MISSING";
    ErrorCode["IAM_ROLE_PERMISSIONS"] = "IAM_ROLE_PERMISSIONS";
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ErrorCode["INVALID_ECS_SERVICE"] = "INVALID_ECS_SERVICE";
    ErrorCode["INVALID_LAMBDA_CONFIGURATION"] = "INVALID_LAMBDA_CONFIGURATION";
    ErrorCode["INVALID_LAMBDA_FUNCTION"] = "INVALID_LAMBDA_FUNCTION";
    ErrorCode["INVALID_REVISION"] = "INVALID_REVISION";
    ErrorCode["MANUAL_STOP"] = "MANUAL_STOP";
    ErrorCode["MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"] = "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION";
    ErrorCode["MISSING_ELB_INFORMATION"] = "MISSING_ELB_INFORMATION";
    ErrorCode["MISSING_GITHUB_TOKEN"] = "MISSING_GITHUB_TOKEN";
    ErrorCode["NO_EC2_SUBSCRIPTION"] = "NO_EC2_SUBSCRIPTION";
    ErrorCode["NO_INSTANCES"] = "NO_INSTANCES";
    ErrorCode["OVER_MAX_INSTANCES"] = "OVER_MAX_INSTANCES";
    ErrorCode["RESOURCE_LIMIT_EXCEEDED"] = "RESOURCE_LIMIT_EXCEEDED";
    ErrorCode["REVISION_MISSING"] = "REVISION_MISSING";
    ErrorCode["THROTTLED"] = "THROTTLED";
    ErrorCode["TIMEOUT"] = "TIMEOUT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorInformation;
(function (ErrorInformation) {
    /**
     * @internal
     */
    ErrorInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorInformation = exports.ErrorInformation || (exports.ErrorInformation = {}));
var FileExistsBehavior;
(function (FileExistsBehavior) {
    FileExistsBehavior["DISALLOW"] = "DISALLOW";
    FileExistsBehavior["OVERWRITE"] = "OVERWRITE";
    FileExistsBehavior["RETAIN"] = "RETAIN";
})(FileExistsBehavior = exports.FileExistsBehavior || (exports.FileExistsBehavior = {}));
var RelatedDeployments;
(function (RelatedDeployments) {
    /**
     * @internal
     */
    RelatedDeployments.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelatedDeployments = exports.RelatedDeployments || (exports.RelatedDeployments = {}));
var RollbackInfo;
(function (RollbackInfo) {
    /**
     * @internal
     */
    RollbackInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackInfo = exports.RollbackInfo || (exports.RollbackInfo = {}));
var TargetInstances;
(function (TargetInstances) {
    /**
     * @internal
     */
    TargetInstances.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetInstances = exports.TargetInstances || (exports.TargetInstances = {}));
var DeploymentInfo;
(function (DeploymentInfo) {
    /**
     * @internal
     */
    DeploymentInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentInfo = exports.DeploymentInfo || (exports.DeploymentInfo = {}));
var BatchGetDeploymentsOutput;
(function (BatchGetDeploymentsOutput) {
    /**
     * @internal
     */
    BatchGetDeploymentsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentsOutput = exports.BatchGetDeploymentsOutput || (exports.BatchGetDeploymentsOutput = {}));
var BatchGetDeploymentTargetsInput;
(function (BatchGetDeploymentTargetsInput) {
    /**
     * @internal
     */
    BatchGetDeploymentTargetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentTargetsInput = exports.BatchGetDeploymentTargetsInput || (exports.BatchGetDeploymentTargetsInput = {}));
var TargetStatus;
(function (TargetStatus) {
    TargetStatus["FAILED"] = "Failed";
    TargetStatus["IN_PROGRESS"] = "InProgress";
    TargetStatus["PENDING"] = "Pending";
    TargetStatus["READY"] = "Ready";
    TargetStatus["SKIPPED"] = "Skipped";
    TargetStatus["SUCCEEDED"] = "Succeeded";
    TargetStatus["UNKNOWN"] = "Unknown";
})(TargetStatus = exports.TargetStatus || (exports.TargetStatus = {}));
var CloudFormationTarget;
(function (CloudFormationTarget) {
    /**
     * @internal
     */
    CloudFormationTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationTarget = exports.CloudFormationTarget || (exports.CloudFormationTarget = {}));
var DeploymentTargetType;
(function (DeploymentTargetType) {
    DeploymentTargetType["CLOUDFORMATION_TARGET"] = "CloudFormationTarget";
    DeploymentTargetType["ECS_TARGET"] = "ECSTarget";
    DeploymentTargetType["INSTANCE_TARGET"] = "InstanceTarget";
    DeploymentTargetType["LAMBDA_TARGET"] = "LambdaTarget";
})(DeploymentTargetType = exports.DeploymentTargetType || (exports.DeploymentTargetType = {}));
var TargetLabel;
(function (TargetLabel) {
    TargetLabel["BLUE"] = "Blue";
    TargetLabel["GREEN"] = "Green";
})(TargetLabel = exports.TargetLabel || (exports.TargetLabel = {}));
var ECSTaskSet;
(function (ECSTaskSet) {
    /**
     * @internal
     */
    ECSTaskSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ECSTaskSet = exports.ECSTaskSet || (exports.ECSTaskSet = {}));
var ECSTarget;
(function (ECSTarget) {
    /**
     * @internal
     */
    ECSTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ECSTarget = exports.ECSTarget || (exports.ECSTarget = {}));
var InstanceTarget;
(function (InstanceTarget) {
    /**
     * @internal
     */
    InstanceTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTarget = exports.InstanceTarget || (exports.InstanceTarget = {}));
var LambdaFunctionInfo;
(function (LambdaFunctionInfo) {
    /**
     * @internal
     */
    LambdaFunctionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionInfo = exports.LambdaFunctionInfo || (exports.LambdaFunctionInfo = {}));
var LambdaTarget;
(function (LambdaTarget) {
    /**
     * @internal
     */
    LambdaTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaTarget = exports.LambdaTarget || (exports.LambdaTarget = {}));
var DeploymentTarget;
(function (DeploymentTarget) {
    /**
     * @internal
     */
    DeploymentTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentTarget = exports.DeploymentTarget || (exports.DeploymentTarget = {}));
var BatchGetDeploymentTargetsOutput;
(function (BatchGetDeploymentTargetsOutput) {
    /**
     * @internal
     */
    BatchGetDeploymentTargetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDeploymentTargetsOutput = exports.BatchGetDeploymentTargetsOutput || (exports.BatchGetDeploymentTargetsOutput = {}));
var DeploymentNotStartedException;
(function (DeploymentNotStartedException) {
    /**
     * @internal
     */
    DeploymentNotStartedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentNotStartedException = exports.DeploymentNotStartedException || (exports.DeploymentNotStartedException = {}));
var DeploymentTargetDoesNotExistException;
(function (DeploymentTargetDoesNotExistException) {
    /**
     * @internal
     */
    DeploymentTargetDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentTargetDoesNotExistException = exports.DeploymentTargetDoesNotExistException || (exports.DeploymentTargetDoesNotExistException = {}));
var DeploymentTargetIdRequiredException;
(function (DeploymentTargetIdRequiredException) {
    /**
     * @internal
     */
    DeploymentTargetIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentTargetIdRequiredException = exports.DeploymentTargetIdRequiredException || (exports.DeploymentTargetIdRequiredException = {}));
var DeploymentTargetListSizeExceededException;
(function (DeploymentTargetListSizeExceededException) {
    /**
     * @internal
     */
    DeploymentTargetListSizeExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentTargetListSizeExceededException = exports.DeploymentTargetListSizeExceededException || (exports.DeploymentTargetListSizeExceededException = {}));
var InstanceDoesNotExistException;
(function (InstanceDoesNotExistException) {
    /**
     * @internal
     */
    InstanceDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceDoesNotExistException = exports.InstanceDoesNotExistException || (exports.InstanceDoesNotExistException = {}));
var InvalidDeploymentTargetIdException;
(function (InvalidDeploymentTargetIdException) {
    /**
     * @internal
     */
    InvalidDeploymentTargetIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentTargetIdException = exports.InvalidDeploymentTargetIdException || (exports.InvalidDeploymentTargetIdException = {}));
var BatchGetOnPremisesInstancesInput;
(function (BatchGetOnPremisesInstancesInput) {
    /**
     * @internal
     */
    BatchGetOnPremisesInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetOnPremisesInstancesInput = exports.BatchGetOnPremisesInstancesInput || (exports.BatchGetOnPremisesInstancesInput = {}));
var InstanceInfo;
(function (InstanceInfo) {
    /**
     * @internal
     */
    InstanceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceInfo = exports.InstanceInfo || (exports.InstanceInfo = {}));
var BatchGetOnPremisesInstancesOutput;
(function (BatchGetOnPremisesInstancesOutput) {
    /**
     * @internal
     */
    BatchGetOnPremisesInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetOnPremisesInstancesOutput = exports.BatchGetOnPremisesInstancesOutput || (exports.BatchGetOnPremisesInstancesOutput = {}));
var BucketNameFilterRequiredException;
(function (BucketNameFilterRequiredException) {
    /**
     * @internal
     */
    BucketNameFilterRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketNameFilterRequiredException = exports.BucketNameFilterRequiredException || (exports.BucketNameFilterRequiredException = {}));
var DeploymentWaitType;
(function (DeploymentWaitType) {
    DeploymentWaitType["READY_WAIT"] = "READY_WAIT";
    DeploymentWaitType["TERMINATION_WAIT"] = "TERMINATION_WAIT";
})(DeploymentWaitType = exports.DeploymentWaitType || (exports.DeploymentWaitType = {}));
var ContinueDeploymentInput;
(function (ContinueDeploymentInput) {
    /**
     * @internal
     */
    ContinueDeploymentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinueDeploymentInput = exports.ContinueDeploymentInput || (exports.ContinueDeploymentInput = {}));
var DeploymentAlreadyCompletedException;
(function (DeploymentAlreadyCompletedException) {
    /**
     * @internal
     */
    DeploymentAlreadyCompletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentAlreadyCompletedException = exports.DeploymentAlreadyCompletedException || (exports.DeploymentAlreadyCompletedException = {}));
var DeploymentIsNotInReadyStateException;
(function (DeploymentIsNotInReadyStateException) {
    /**
     * @internal
     */
    DeploymentIsNotInReadyStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentIsNotInReadyStateException = exports.DeploymentIsNotInReadyStateException || (exports.DeploymentIsNotInReadyStateException = {}));
var InvalidDeploymentStatusException;
(function (InvalidDeploymentStatusException) {
    /**
     * @internal
     */
    InvalidDeploymentStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentStatusException = exports.InvalidDeploymentStatusException || (exports.InvalidDeploymentStatusException = {}));
var InvalidDeploymentWaitTypeException;
(function (InvalidDeploymentWaitTypeException) {
    /**
     * @internal
     */
    InvalidDeploymentWaitTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentWaitTypeException = exports.InvalidDeploymentWaitTypeException || (exports.InvalidDeploymentWaitTypeException = {}));
var UnsupportedActionForDeploymentTypeException;
(function (UnsupportedActionForDeploymentTypeException) {
    /**
     * @internal
     */
    UnsupportedActionForDeploymentTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedActionForDeploymentTypeException = exports.UnsupportedActionForDeploymentTypeException || (exports.UnsupportedActionForDeploymentTypeException = {}));
var CreateApplicationInput;
(function (CreateApplicationInput) {
    /**
     * @internal
     */
    CreateApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationInput = exports.CreateApplicationInput || (exports.CreateApplicationInput = {}));
var CreateApplicationOutput;
(function (CreateApplicationOutput) {
    /**
     * @internal
     */
    CreateApplicationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationOutput = exports.CreateApplicationOutput || (exports.CreateApplicationOutput = {}));
var InvalidTagsToAddException;
(function (InvalidTagsToAddException) {
    /**
     * @internal
     */
    InvalidTagsToAddException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagsToAddException = exports.InvalidTagsToAddException || (exports.InvalidTagsToAddException = {}));
var CreateDeploymentInput;
(function (CreateDeploymentInput) {
    /**
     * @internal
     */
    CreateDeploymentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentInput = exports.CreateDeploymentInput || (exports.CreateDeploymentInput = {}));
var CreateDeploymentOutput;
(function (CreateDeploymentOutput) {
    /**
     * @internal
     */
    CreateDeploymentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentOutput = exports.CreateDeploymentOutput || (exports.CreateDeploymentOutput = {}));
var DeploymentGroupDoesNotExistException;
(function (DeploymentGroupDoesNotExistException) {
    /**
     * @internal
     */
    DeploymentGroupDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentGroupDoesNotExistException = exports.DeploymentGroupDoesNotExistException || (exports.DeploymentGroupDoesNotExistException = {}));
var DeploymentLimitExceededException;
(function (DeploymentLimitExceededException) {
    /**
     * @internal
     */
    DeploymentLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentLimitExceededException = exports.DeploymentLimitExceededException || (exports.DeploymentLimitExceededException = {}));
var DescriptionTooLongException;
(function (DescriptionTooLongException) {
    /**
     * @internal
     */
    DescriptionTooLongException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescriptionTooLongException = exports.DescriptionTooLongException || (exports.DescriptionTooLongException = {}));
var InvalidAutoRollbackConfigException;
(function (InvalidAutoRollbackConfigException) {
    /**
     * @internal
     */
    InvalidAutoRollbackConfigException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAutoRollbackConfigException = exports.InvalidAutoRollbackConfigException || (exports.InvalidAutoRollbackConfigException = {}));
var InvalidAutoScalingGroupException;
(function (InvalidAutoScalingGroupException) {
    /**
     * @internal
     */
    InvalidAutoScalingGroupException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAutoScalingGroupException = exports.InvalidAutoScalingGroupException || (exports.InvalidAutoScalingGroupException = {}));
var InvalidDeploymentConfigNameException;
(function (InvalidDeploymentConfigNameException) {
    /**
     * @internal
     */
    InvalidDeploymentConfigNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentConfigNameException = exports.InvalidDeploymentConfigNameException || (exports.InvalidDeploymentConfigNameException = {}));
var InvalidFileExistsBehaviorException;
(function (InvalidFileExistsBehaviorException) {
    /**
     * @internal
     */
    InvalidFileExistsBehaviorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFileExistsBehaviorException = exports.InvalidFileExistsBehaviorException || (exports.InvalidFileExistsBehaviorException = {}));
var InvalidGitHubAccountTokenException;
(function (InvalidGitHubAccountTokenException) {
    /**
     * @internal
     */
    InvalidGitHubAccountTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGitHubAccountTokenException = exports.InvalidGitHubAccountTokenException || (exports.InvalidGitHubAccountTokenException = {}));
var InvalidIgnoreApplicationStopFailuresValueException;
(function (InvalidIgnoreApplicationStopFailuresValueException) {
    /**
     * @internal
     */
    InvalidIgnoreApplicationStopFailuresValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIgnoreApplicationStopFailuresValueException = exports.InvalidIgnoreApplicationStopFailuresValueException || (exports.InvalidIgnoreApplicationStopFailuresValueException = {}));
var InvalidLoadBalancerInfoException;
(function (InvalidLoadBalancerInfoException) {
    /**
     * @internal
     */
    InvalidLoadBalancerInfoException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLoadBalancerInfoException = exports.InvalidLoadBalancerInfoException || (exports.InvalidLoadBalancerInfoException = {}));
var InvalidRoleException;
(function (InvalidRoleException) {
    /**
     * @internal
     */
    InvalidRoleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {}));
var InvalidTargetInstancesException;
(function (InvalidTargetInstancesException) {
    /**
     * @internal
     */
    InvalidTargetInstancesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetInstancesException = exports.InvalidTargetInstancesException || (exports.InvalidTargetInstancesException = {}));
var InvalidTrafficRoutingConfigurationException;
(function (InvalidTrafficRoutingConfigurationException) {
    /**
     * @internal
     */
    InvalidTrafficRoutingConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTrafficRoutingConfigurationException = exports.InvalidTrafficRoutingConfigurationException || (exports.InvalidTrafficRoutingConfigurationException = {}));
var InvalidUpdateOutdatedInstancesOnlyValueException;
(function (InvalidUpdateOutdatedInstancesOnlyValueException) {
    /**
     * @internal
     */
    InvalidUpdateOutdatedInstancesOnlyValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUpdateOutdatedInstancesOnlyValueException = exports.InvalidUpdateOutdatedInstancesOnlyValueException || (exports.InvalidUpdateOutdatedInstancesOnlyValueException = {}));
var RevisionDoesNotExistException;
(function (RevisionDoesNotExistException) {
    /**
     * @internal
     */
    RevisionDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionDoesNotExistException = exports.RevisionDoesNotExistException || (exports.RevisionDoesNotExistException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var MinimumHealthyHosts;
(function (MinimumHealthyHosts) {
    /**
     * @internal
     */
    MinimumHealthyHosts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MinimumHealthyHosts = exports.MinimumHealthyHosts || (exports.MinimumHealthyHosts = {}));
var TimeBasedCanary;
(function (TimeBasedCanary) {
    /**
     * @internal
     */
    TimeBasedCanary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeBasedCanary = exports.TimeBasedCanary || (exports.TimeBasedCanary = {}));
var TimeBasedLinear;
(function (TimeBasedLinear) {
    /**
     * @internal
     */
    TimeBasedLinear.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeBasedLinear = exports.TimeBasedLinear || (exports.TimeBasedLinear = {}));
var TrafficRoutingType;
(function (TrafficRoutingType) {
    TrafficRoutingType["AllAtOnce"] = "AllAtOnce";
    TrafficRoutingType["TimeBasedCanary"] = "TimeBasedCanary";
    TrafficRoutingType["TimeBasedLinear"] = "TimeBasedLinear";
})(TrafficRoutingType = exports.TrafficRoutingType || (exports.TrafficRoutingType = {}));
var TrafficRoutingConfig;
(function (TrafficRoutingConfig) {
    /**
     * @internal
     */
    TrafficRoutingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficRoutingConfig = exports.TrafficRoutingConfig || (exports.TrafficRoutingConfig = {}));
var CreateDeploymentConfigInput;
(function (CreateDeploymentConfigInput) {
    /**
     * @internal
     */
    CreateDeploymentConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentConfigInput = exports.CreateDeploymentConfigInput || (exports.CreateDeploymentConfigInput = {}));
var CreateDeploymentConfigOutput;
(function (CreateDeploymentConfigOutput) {
    /**
     * @internal
     */
    CreateDeploymentConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentConfigOutput = exports.CreateDeploymentConfigOutput || (exports.CreateDeploymentConfigOutput = {}));
var DeploymentConfigAlreadyExistsException;
(function (DeploymentConfigAlreadyExistsException) {
    /**
     * @internal
     */
    DeploymentConfigAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigAlreadyExistsException = exports.DeploymentConfigAlreadyExistsException || (exports.DeploymentConfigAlreadyExistsException = {}));
var DeploymentConfigLimitExceededException;
(function (DeploymentConfigLimitExceededException) {
    /**
     * @internal
     */
    DeploymentConfigLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigLimitExceededException = exports.DeploymentConfigLimitExceededException || (exports.DeploymentConfigLimitExceededException = {}));
var DeploymentConfigNameRequiredException;
(function (DeploymentConfigNameRequiredException) {
    /**
     * @internal
     */
    DeploymentConfigNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigNameRequiredException = exports.DeploymentConfigNameRequiredException || (exports.DeploymentConfigNameRequiredException = {}));
var InvalidMinimumHealthyHostValueException;
(function (InvalidMinimumHealthyHostValueException) {
    /**
     * @internal
     */
    InvalidMinimumHealthyHostValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMinimumHealthyHostValueException = exports.InvalidMinimumHealthyHostValueException || (exports.InvalidMinimumHealthyHostValueException = {}));
var CreateDeploymentGroupInput;
(function (CreateDeploymentGroupInput) {
    /**
     * @internal
     */
    CreateDeploymentGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentGroupInput = exports.CreateDeploymentGroupInput || (exports.CreateDeploymentGroupInput = {}));
var CreateDeploymentGroupOutput;
(function (CreateDeploymentGroupOutput) {
    /**
     * @internal
     */
    CreateDeploymentGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentGroupOutput = exports.CreateDeploymentGroupOutput || (exports.CreateDeploymentGroupOutput = {}));
var DeploymentGroupAlreadyExistsException;
(function (DeploymentGroupAlreadyExistsException) {
    /**
     * @internal
     */
    DeploymentGroupAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentGroupAlreadyExistsException = exports.DeploymentGroupAlreadyExistsException || (exports.DeploymentGroupAlreadyExistsException = {}));
var DeploymentGroupLimitExceededException;
(function (DeploymentGroupLimitExceededException) {
    /**
     * @internal
     */
    DeploymentGroupLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentGroupLimitExceededException = exports.DeploymentGroupLimitExceededException || (exports.DeploymentGroupLimitExceededException = {}));
var ECSServiceMappingLimitExceededException;
(function (ECSServiceMappingLimitExceededException) {
    /**
     * @internal
     */
    ECSServiceMappingLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ECSServiceMappingLimitExceededException = exports.ECSServiceMappingLimitExceededException || (exports.ECSServiceMappingLimitExceededException = {}));
var InvalidAlarmConfigException;
(function (InvalidAlarmConfigException) {
    /**
     * @internal
     */
    InvalidAlarmConfigException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAlarmConfigException = exports.InvalidAlarmConfigException || (exports.InvalidAlarmConfigException = {}));
var InvalidBlueGreenDeploymentConfigurationException;
(function (InvalidBlueGreenDeploymentConfigurationException) {
    /**
     * @internal
     */
    InvalidBlueGreenDeploymentConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBlueGreenDeploymentConfigurationException = exports.InvalidBlueGreenDeploymentConfigurationException || (exports.InvalidBlueGreenDeploymentConfigurationException = {}));
var InvalidDeploymentStyleException;
(function (InvalidDeploymentStyleException) {
    /**
     * @internal
     */
    InvalidDeploymentStyleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentStyleException = exports.InvalidDeploymentStyleException || (exports.InvalidDeploymentStyleException = {}));
var InvalidEC2TagCombinationException;
(function (InvalidEC2TagCombinationException) {
    /**
     * @internal
     */
    InvalidEC2TagCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEC2TagCombinationException = exports.InvalidEC2TagCombinationException || (exports.InvalidEC2TagCombinationException = {}));
var InvalidEC2TagException;
(function (InvalidEC2TagException) {
    /**
     * @internal
     */
    InvalidEC2TagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEC2TagException = exports.InvalidEC2TagException || (exports.InvalidEC2TagException = {}));
var InvalidECSServiceException;
(function (InvalidECSServiceException) {
    /**
     * @internal
     */
    InvalidECSServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidECSServiceException = exports.InvalidECSServiceException || (exports.InvalidECSServiceException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidOnPremisesTagCombinationException;
(function (InvalidOnPremisesTagCombinationException) {
    /**
     * @internal
     */
    InvalidOnPremisesTagCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOnPremisesTagCombinationException = exports.InvalidOnPremisesTagCombinationException || (exports.InvalidOnPremisesTagCombinationException = {}));
var InvalidTargetGroupPairException;
(function (InvalidTargetGroupPairException) {
    /**
     * @internal
     */
    InvalidTargetGroupPairException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetGroupPairException = exports.InvalidTargetGroupPairException || (exports.InvalidTargetGroupPairException = {}));
var InvalidTriggerConfigException;
(function (InvalidTriggerConfigException) {
    /**
     * @internal
     */
    InvalidTriggerConfigException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTriggerConfigException = exports.InvalidTriggerConfigException || (exports.InvalidTriggerConfigException = {}));
var LifecycleHookLimitExceededException;
(function (LifecycleHookLimitExceededException) {
    /**
     * @internal
     */
    LifecycleHookLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleHookLimitExceededException = exports.LifecycleHookLimitExceededException || (exports.LifecycleHookLimitExceededException = {}));
var RoleRequiredException;
(function (RoleRequiredException) {
    /**
     * @internal
     */
    RoleRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleRequiredException = exports.RoleRequiredException || (exports.RoleRequiredException = {}));
var TagSetListLimitExceededException;
(function (TagSetListLimitExceededException) {
    /**
     * @internal
     */
    TagSetListLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagSetListLimitExceededException = exports.TagSetListLimitExceededException || (exports.TagSetListLimitExceededException = {}));
var TriggerTargetsLimitExceededException;
(function (TriggerTargetsLimitExceededException) {
    /**
     * @internal
     */
    TriggerTargetsLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerTargetsLimitExceededException = exports.TriggerTargetsLimitExceededException || (exports.TriggerTargetsLimitExceededException = {}));
var DeleteApplicationInput;
(function (DeleteApplicationInput) {
    /**
     * @internal
     */
    DeleteApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationInput = exports.DeleteApplicationInput || (exports.DeleteApplicationInput = {}));
var DeleteDeploymentConfigInput;
(function (DeleteDeploymentConfigInput) {
    /**
     * @internal
     */
    DeleteDeploymentConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeploymentConfigInput = exports.DeleteDeploymentConfigInput || (exports.DeleteDeploymentConfigInput = {}));
var DeploymentConfigInUseException;
(function (DeploymentConfigInUseException) {
    /**
     * @internal
     */
    DeploymentConfigInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigInUseException = exports.DeploymentConfigInUseException || (exports.DeploymentConfigInUseException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var DeleteDeploymentGroupInput;
(function (DeleteDeploymentGroupInput) {
    /**
     * @internal
     */
    DeleteDeploymentGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeploymentGroupInput = exports.DeleteDeploymentGroupInput || (exports.DeleteDeploymentGroupInput = {}));
var DeleteDeploymentGroupOutput;
(function (DeleteDeploymentGroupOutput) {
    /**
     * @internal
     */
    DeleteDeploymentGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeploymentGroupOutput = exports.DeleteDeploymentGroupOutput || (exports.DeleteDeploymentGroupOutput = {}));
var DeleteGitHubAccountTokenInput;
(function (DeleteGitHubAccountTokenInput) {
    /**
     * @internal
     */
    DeleteGitHubAccountTokenInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGitHubAccountTokenInput = exports.DeleteGitHubAccountTokenInput || (exports.DeleteGitHubAccountTokenInput = {}));
var DeleteGitHubAccountTokenOutput;
(function (DeleteGitHubAccountTokenOutput) {
    /**
     * @internal
     */
    DeleteGitHubAccountTokenOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGitHubAccountTokenOutput = exports.DeleteGitHubAccountTokenOutput || (exports.DeleteGitHubAccountTokenOutput = {}));
var GitHubAccountTokenDoesNotExistException;
(function (GitHubAccountTokenDoesNotExistException) {
    /**
     * @internal
     */
    GitHubAccountTokenDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitHubAccountTokenDoesNotExistException = exports.GitHubAccountTokenDoesNotExistException || (exports.GitHubAccountTokenDoesNotExistException = {}));
var GitHubAccountTokenNameRequiredException;
(function (GitHubAccountTokenNameRequiredException) {
    /**
     * @internal
     */
    GitHubAccountTokenNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GitHubAccountTokenNameRequiredException = exports.GitHubAccountTokenNameRequiredException || (exports.GitHubAccountTokenNameRequiredException = {}));
var InvalidGitHubAccountTokenNameException;
(function (InvalidGitHubAccountTokenNameException) {
    /**
     * @internal
     */
    InvalidGitHubAccountTokenNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGitHubAccountTokenNameException = exports.InvalidGitHubAccountTokenNameException || (exports.InvalidGitHubAccountTokenNameException = {}));
var OperationNotSupportedException;
(function (OperationNotSupportedException) {
    /**
     * @internal
     */
    OperationNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotSupportedException = exports.OperationNotSupportedException || (exports.OperationNotSupportedException = {}));
var ResourceValidationException;
(function (ResourceValidationException) {
    /**
     * @internal
     */
    ResourceValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceValidationException = exports.ResourceValidationException || (exports.ResourceValidationException = {}));
var DeleteResourcesByExternalIdInput;
(function (DeleteResourcesByExternalIdInput) {
    /**
     * @internal
     */
    DeleteResourcesByExternalIdInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcesByExternalIdInput = exports.DeleteResourcesByExternalIdInput || (exports.DeleteResourcesByExternalIdInput = {}));
var DeleteResourcesByExternalIdOutput;
(function (DeleteResourcesByExternalIdOutput) {
    /**
     * @internal
     */
    DeleteResourcesByExternalIdOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcesByExternalIdOutput = exports.DeleteResourcesByExternalIdOutput || (exports.DeleteResourcesByExternalIdOutput = {}));
var DeregisterOnPremisesInstanceInput;
(function (DeregisterOnPremisesInstanceInput) {
    /**
     * @internal
     */
    DeregisterOnPremisesInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterOnPremisesInstanceInput = exports.DeregisterOnPremisesInstanceInput || (exports.DeregisterOnPremisesInstanceInput = {}));
var GetApplicationInput;
(function (GetApplicationInput) {
    /**
     * @internal
     */
    GetApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationInput = exports.GetApplicationInput || (exports.GetApplicationInput = {}));
var GetApplicationOutput;
(function (GetApplicationOutput) {
    /**
     * @internal
     */
    GetApplicationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationOutput = exports.GetApplicationOutput || (exports.GetApplicationOutput = {}));
var GetApplicationRevisionInput;
(function (GetApplicationRevisionInput) {
    /**
     * @internal
     */
    GetApplicationRevisionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationRevisionInput = exports.GetApplicationRevisionInput || (exports.GetApplicationRevisionInput = {}));
var GetApplicationRevisionOutput;
(function (GetApplicationRevisionOutput) {
    /**
     * @internal
     */
    GetApplicationRevisionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationRevisionOutput = exports.GetApplicationRevisionOutput || (exports.GetApplicationRevisionOutput = {}));
var GetDeploymentInput;
(function (GetDeploymentInput) {
    /**
     * @internal
     */
    GetDeploymentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentInput = exports.GetDeploymentInput || (exports.GetDeploymentInput = {}));
var GetDeploymentOutput;
(function (GetDeploymentOutput) {
    /**
     * @internal
     */
    GetDeploymentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentOutput = exports.GetDeploymentOutput || (exports.GetDeploymentOutput = {}));
var GetDeploymentConfigInput;
(function (GetDeploymentConfigInput) {
    /**
     * @internal
     */
    GetDeploymentConfigInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentConfigInput = exports.GetDeploymentConfigInput || (exports.GetDeploymentConfigInput = {}));
var DeploymentConfigInfo;
(function (DeploymentConfigInfo) {
    /**
     * @internal
     */
    DeploymentConfigInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfigInfo = exports.DeploymentConfigInfo || (exports.DeploymentConfigInfo = {}));
var GetDeploymentConfigOutput;
(function (GetDeploymentConfigOutput) {
    /**
     * @internal
     */
    GetDeploymentConfigOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentConfigOutput = exports.GetDeploymentConfigOutput || (exports.GetDeploymentConfigOutput = {}));
var GetDeploymentGroupInput;
(function (GetDeploymentGroupInput) {
    /**
     * @internal
     */
    GetDeploymentGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentGroupInput = exports.GetDeploymentGroupInput || (exports.GetDeploymentGroupInput = {}));
var GetDeploymentGroupOutput;
(function (GetDeploymentGroupOutput) {
    /**
     * @internal
     */
    GetDeploymentGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentGroupOutput = exports.GetDeploymentGroupOutput || (exports.GetDeploymentGroupOutput = {}));
var GetDeploymentInstanceInput;
(function (GetDeploymentInstanceInput) {
    /**
     * @internal
     */
    GetDeploymentInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentInstanceInput = exports.GetDeploymentInstanceInput || (exports.GetDeploymentInstanceInput = {}));
var GetDeploymentInstanceOutput;
(function (GetDeploymentInstanceOutput) {
    /**
     * @internal
     */
    GetDeploymentInstanceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentInstanceOutput = exports.GetDeploymentInstanceOutput || (exports.GetDeploymentInstanceOutput = {}));
var GetDeploymentTargetInput;
(function (GetDeploymentTargetInput) {
    /**
     * @internal
     */
    GetDeploymentTargetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentTargetInput = exports.GetDeploymentTargetInput || (exports.GetDeploymentTargetInput = {}));
var GetDeploymentTargetOutput;
(function (GetDeploymentTargetOutput) {
    /**
     * @internal
     */
    GetDeploymentTargetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentTargetOutput = exports.GetDeploymentTargetOutput || (exports.GetDeploymentTargetOutput = {}));
var GetOnPremisesInstanceInput;
(function (GetOnPremisesInstanceInput) {
    /**
     * @internal
     */
    GetOnPremisesInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOnPremisesInstanceInput = exports.GetOnPremisesInstanceInput || (exports.GetOnPremisesInstanceInput = {}));
var GetOnPremisesInstanceOutput;
(function (GetOnPremisesInstanceOutput) {
    /**
     * @internal
     */
    GetOnPremisesInstanceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOnPremisesInstanceOutput = exports.GetOnPremisesInstanceOutput || (exports.GetOnPremisesInstanceOutput = {}));
var InvalidBucketNameFilterException;
(function (InvalidBucketNameFilterException) {
    /**
     * @internal
     */
    InvalidBucketNameFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBucketNameFilterException = exports.InvalidBucketNameFilterException || (exports.InvalidBucketNameFilterException = {}));
var InvalidDeployedStateFilterException;
(function (InvalidDeployedStateFilterException) {
    /**
     * @internal
     */
    InvalidDeployedStateFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeployedStateFilterException = exports.InvalidDeployedStateFilterException || (exports.InvalidDeployedStateFilterException = {}));
var InvalidKeyPrefixFilterException;
(function (InvalidKeyPrefixFilterException) {
    /**
     * @internal
     */
    InvalidKeyPrefixFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKeyPrefixFilterException = exports.InvalidKeyPrefixFilterException || (exports.InvalidKeyPrefixFilterException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidSortByException;
(function (InvalidSortByException) {
    /**
     * @internal
     */
    InvalidSortByException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSortByException = exports.InvalidSortByException || (exports.InvalidSortByException = {}));
var InvalidSortOrderException;
(function (InvalidSortOrderException) {
    /**
     * @internal
     */
    InvalidSortOrderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSortOrderException = exports.InvalidSortOrderException || (exports.InvalidSortOrderException = {}));
var ListStateFilterAction;
(function (ListStateFilterAction) {
    ListStateFilterAction["Exclude"] = "exclude";
    ListStateFilterAction["Ignore"] = "ignore";
    ListStateFilterAction["Include"] = "include";
})(ListStateFilterAction = exports.ListStateFilterAction || (exports.ListStateFilterAction = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "ascending";
    SortOrder["Descending"] = "descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListApplicationRevisionsInput;
(function (ListApplicationRevisionsInput) {
    /**
     * @internal
     */
    ListApplicationRevisionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationRevisionsInput = exports.ListApplicationRevisionsInput || (exports.ListApplicationRevisionsInput = {}));
var ListApplicationRevisionsOutput;
(function (ListApplicationRevisionsOutput) {
    /**
     * @internal
     */
    ListApplicationRevisionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationRevisionsOutput = exports.ListApplicationRevisionsOutput || (exports.ListApplicationRevisionsOutput = {}));
var ListApplicationsInput;
(function (ListApplicationsInput) {
    /**
     * @internal
     */
    ListApplicationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsInput = exports.ListApplicationsInput || (exports.ListApplicationsInput = {}));
var ListApplicationsOutput;
(function (ListApplicationsOutput) {
    /**
     * @internal
     */
    ListApplicationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsOutput = exports.ListApplicationsOutput || (exports.ListApplicationsOutput = {}));
var ListDeploymentConfigsInput;
(function (ListDeploymentConfigsInput) {
    /**
     * @internal
     */
    ListDeploymentConfigsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentConfigsInput = exports.ListDeploymentConfigsInput || (exports.ListDeploymentConfigsInput = {}));
var ListDeploymentConfigsOutput;
(function (ListDeploymentConfigsOutput) {
    /**
     * @internal
     */
    ListDeploymentConfigsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentConfigsOutput = exports.ListDeploymentConfigsOutput || (exports.ListDeploymentConfigsOutput = {}));
var ListDeploymentGroupsInput;
(function (ListDeploymentGroupsInput) {
    /**
     * @internal
     */
    ListDeploymentGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentGroupsInput = exports.ListDeploymentGroupsInput || (exports.ListDeploymentGroupsInput = {}));
var ListDeploymentGroupsOutput;
(function (ListDeploymentGroupsOutput) {
    /**
     * @internal
     */
    ListDeploymentGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentGroupsOutput = exports.ListDeploymentGroupsOutput || (exports.ListDeploymentGroupsOutput = {}));
var InvalidDeploymentInstanceTypeException;
(function (InvalidDeploymentInstanceTypeException) {
    /**
     * @internal
     */
    InvalidDeploymentInstanceTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeploymentInstanceTypeException = exports.InvalidDeploymentInstanceTypeException || (exports.InvalidDeploymentInstanceTypeException = {}));
var InvalidInstanceStatusException;
(function (InvalidInstanceStatusException) {
    /**
     * @internal
     */
    InvalidInstanceStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInstanceStatusException = exports.InvalidInstanceStatusException || (exports.InvalidInstanceStatusException = {}));
var InvalidInstanceTypeException;
(function (InvalidInstanceTypeException) {
    /**
     * @internal
     */
    InvalidInstanceTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInstanceTypeException = exports.InvalidInstanceTypeException || (exports.InvalidInstanceTypeException = {}));
var InvalidTargetFilterNameException;
(function (InvalidTargetFilterNameException) {
    /**
     * @internal
     */
    InvalidTargetFilterNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetFilterNameException = exports.InvalidTargetFilterNameException || (exports.InvalidTargetFilterNameException = {}));
var ListDeploymentInstancesInput;
(function (ListDeploymentInstancesInput) {
    /**
     * @internal
     */
    ListDeploymentInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentInstancesInput = exports.ListDeploymentInstancesInput || (exports.ListDeploymentInstancesInput = {}));
var ListDeploymentInstancesOutput;
(function (ListDeploymentInstancesOutput) {
    /**
     * @internal
     */
    ListDeploymentInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentInstancesOutput = exports.ListDeploymentInstancesOutput || (exports.ListDeploymentInstancesOutput = {}));
var InvalidExternalIdException;
(function (InvalidExternalIdException) {
    /**
     * @internal
     */
    InvalidExternalIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExternalIdException = exports.InvalidExternalIdException || (exports.InvalidExternalIdException = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    /**
     * @internal
     */
    InvalidTimeRangeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var TimeRange;
(function (TimeRange) {
    /**
     * @internal
     */
    TimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var ListDeploymentsInput;
(function (ListDeploymentsInput) {
    /**
     * @internal
     */
    ListDeploymentsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentsInput = exports.ListDeploymentsInput || (exports.ListDeploymentsInput = {}));
var ListDeploymentsOutput;
(function (ListDeploymentsOutput) {
    /**
     * @internal
     */
    ListDeploymentsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentsOutput = exports.ListDeploymentsOutput || (exports.ListDeploymentsOutput = {}));
var TargetFilterName;
(function (TargetFilterName) {
    TargetFilterName["SERVER_INSTANCE_LABEL"] = "ServerInstanceLabel";
    TargetFilterName["TARGET_STATUS"] = "TargetStatus";
})(TargetFilterName = exports.TargetFilterName || (exports.TargetFilterName = {}));
var ListDeploymentTargetsInput;
(function (ListDeploymentTargetsInput) {
    /**
     * @internal
     */
    ListDeploymentTargetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentTargetsInput = exports.ListDeploymentTargetsInput || (exports.ListDeploymentTargetsInput = {}));
var ListDeploymentTargetsOutput;
(function (ListDeploymentTargetsOutput) {
    /**
     * @internal
     */
    ListDeploymentTargetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentTargetsOutput = exports.ListDeploymentTargetsOutput || (exports.ListDeploymentTargetsOutput = {}));
var ListGitHubAccountTokenNamesInput;
(function (ListGitHubAccountTokenNamesInput) {
    /**
     * @internal
     */
    ListGitHubAccountTokenNamesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGitHubAccountTokenNamesInput = exports.ListGitHubAccountTokenNamesInput || (exports.ListGitHubAccountTokenNamesInput = {}));
var ListGitHubAccountTokenNamesOutput;
(function (ListGitHubAccountTokenNamesOutput) {
    /**
     * @internal
     */
    ListGitHubAccountTokenNamesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGitHubAccountTokenNamesOutput = exports.ListGitHubAccountTokenNamesOutput || (exports.ListGitHubAccountTokenNamesOutput = {}));
var InvalidRegistrationStatusException;
(function (InvalidRegistrationStatusException) {
    /**
     * @internal
     */
    InvalidRegistrationStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRegistrationStatusException = exports.InvalidRegistrationStatusException || (exports.InvalidRegistrationStatusException = {}));
var InvalidTagFilterException;
(function (InvalidTagFilterException) {
    /**
     * @internal
     */
    InvalidTagFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagFilterException = exports.InvalidTagFilterException || (exports.InvalidTagFilterException = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["Deregistered"] = "Deregistered";
    RegistrationStatus["Registered"] = "Registered";
})(RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {}));
var ListOnPremisesInstancesInput;
(function (ListOnPremisesInstancesInput) {
    /**
     * @internal
     */
    ListOnPremisesInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOnPremisesInstancesInput = exports.ListOnPremisesInstancesInput || (exports.ListOnPremisesInstancesInput = {}));
var ListOnPremisesInstancesOutput;
(function (ListOnPremisesInstancesOutput) {
    /**
     * @internal
     */
    ListOnPremisesInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOnPremisesInstancesOutput = exports.ListOnPremisesInstancesOutput || (exports.ListOnPremisesInstancesOutput = {}));
var InvalidArnException;
(function (InvalidArnException) {
    /**
     * @internal
     */
    InvalidArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ResourceArnRequiredException;
(function (ResourceArnRequiredException) {
    /**
     * @internal
     */
    ResourceArnRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceArnRequiredException = exports.ResourceArnRequiredException || (exports.ResourceArnRequiredException = {}));
var InvalidLifecycleEventHookExecutionIdException;
(function (InvalidLifecycleEventHookExecutionIdException) {
    /**
     * @internal
     */
    InvalidLifecycleEventHookExecutionIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLifecycleEventHookExecutionIdException = exports.InvalidLifecycleEventHookExecutionIdException || (exports.InvalidLifecycleEventHookExecutionIdException = {}));
var InvalidLifecycleEventHookExecutionStatusException;
(function (InvalidLifecycleEventHookExecutionStatusException) {
    /**
     * @internal
     */
    InvalidLifecycleEventHookExecutionStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLifecycleEventHookExecutionStatusException = exports.InvalidLifecycleEventHookExecutionStatusException || (exports.InvalidLifecycleEventHookExecutionStatusException = {}));
var LifecycleEventAlreadyCompletedException;
(function (LifecycleEventAlreadyCompletedException) {
    /**
     * @internal
     */
    LifecycleEventAlreadyCompletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleEventAlreadyCompletedException = exports.LifecycleEventAlreadyCompletedException || (exports.LifecycleEventAlreadyCompletedException = {}));
var PutLifecycleEventHookExecutionStatusInput;
(function (PutLifecycleEventHookExecutionStatusInput) {
    /**
     * @internal
     */
    PutLifecycleEventHookExecutionStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecycleEventHookExecutionStatusInput = exports.PutLifecycleEventHookExecutionStatusInput || (exports.PutLifecycleEventHookExecutionStatusInput = {}));
var PutLifecycleEventHookExecutionStatusOutput;
(function (PutLifecycleEventHookExecutionStatusOutput) {
    /**
     * @internal
     */
    PutLifecycleEventHookExecutionStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecycleEventHookExecutionStatusOutput = exports.PutLifecycleEventHookExecutionStatusOutput || (exports.PutLifecycleEventHookExecutionStatusOutput = {}));
var RegisterApplicationRevisionInput;
(function (RegisterApplicationRevisionInput) {
    /**
     * @internal
     */
    RegisterApplicationRevisionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterApplicationRevisionInput = exports.RegisterApplicationRevisionInput || (exports.RegisterApplicationRevisionInput = {}));
var IamArnRequiredException;
(function (IamArnRequiredException) {
    /**
     * @internal
     */
    IamArnRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamArnRequiredException = exports.IamArnRequiredException || (exports.IamArnRequiredException = {}));
var IamSessionArnAlreadyRegisteredException;
(function (IamSessionArnAlreadyRegisteredException) {
    /**
     * @internal
     */
    IamSessionArnAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamSessionArnAlreadyRegisteredException = exports.IamSessionArnAlreadyRegisteredException || (exports.IamSessionArnAlreadyRegisteredException = {}));
var IamUserArnAlreadyRegisteredException;
(function (IamUserArnAlreadyRegisteredException) {
    /**
     * @internal
     */
    IamUserArnAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamUserArnAlreadyRegisteredException = exports.IamUserArnAlreadyRegisteredException || (exports.IamUserArnAlreadyRegisteredException = {}));
var IamUserArnRequiredException;
(function (IamUserArnRequiredException) {
    /**
     * @internal
     */
    IamUserArnRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamUserArnRequiredException = exports.IamUserArnRequiredException || (exports.IamUserArnRequiredException = {}));
var InstanceNameAlreadyRegisteredException;
(function (InstanceNameAlreadyRegisteredException) {
    /**
     * @internal
     */
    InstanceNameAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNameAlreadyRegisteredException = exports.InstanceNameAlreadyRegisteredException || (exports.InstanceNameAlreadyRegisteredException = {}));
var InvalidIamSessionArnException;
(function (InvalidIamSessionArnException) {
    /**
     * @internal
     */
    InvalidIamSessionArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIamSessionArnException = exports.InvalidIamSessionArnException || (exports.InvalidIamSessionArnException = {}));
var InvalidIamUserArnException;
(function (InvalidIamUserArnException) {
    /**
     * @internal
     */
    InvalidIamUserArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIamUserArnException = exports.InvalidIamUserArnException || (exports.InvalidIamUserArnException = {}));
var MultipleIamArnsProvidedException;
(function (MultipleIamArnsProvidedException) {
    /**
     * @internal
     */
    MultipleIamArnsProvidedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultipleIamArnsProvidedException = exports.MultipleIamArnsProvidedException || (exports.MultipleIamArnsProvidedException = {}));
var RegisterOnPremisesInstanceInput;
(function (RegisterOnPremisesInstanceInput) {
    /**
     * @internal
     */
    RegisterOnPremisesInstanceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterOnPremisesInstanceInput = exports.RegisterOnPremisesInstanceInput || (exports.RegisterOnPremisesInstanceInput = {}));
var RemoveTagsFromOnPremisesInstancesInput;
(function (RemoveTagsFromOnPremisesInstancesInput) {
    /**
     * @internal
     */
    RemoveTagsFromOnPremisesInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromOnPremisesInstancesInput = exports.RemoveTagsFromOnPremisesInstancesInput || (exports.RemoveTagsFromOnPremisesInstancesInput = {}));
var SkipWaitTimeForInstanceTerminationInput;
(function (SkipWaitTimeForInstanceTerminationInput) {
    /**
     * @internal
     */
    SkipWaitTimeForInstanceTerminationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SkipWaitTimeForInstanceTerminationInput = exports.SkipWaitTimeForInstanceTerminationInput || (exports.SkipWaitTimeForInstanceTerminationInput = {}));
var StopDeploymentInput;
(function (StopDeploymentInput) {
    /**
     * @internal
     */
    StopDeploymentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDeploymentInput = exports.StopDeploymentInput || (exports.StopDeploymentInput = {}));
var StopStatus;
(function (StopStatus) {
    StopStatus["PENDING"] = "Pending";
    StopStatus["SUCCEEDED"] = "Succeeded";
})(StopStatus = exports.StopStatus || (exports.StopStatus = {}));
var StopDeploymentOutput;
(function (StopDeploymentOutput) {
    /**
     * @internal
     */
    StopDeploymentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDeploymentOutput = exports.StopDeploymentOutput || (exports.StopDeploymentOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var UpdateApplicationInput;
(function (UpdateApplicationInput) {
    /**
     * @internal
     */
    UpdateApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationInput = exports.UpdateApplicationInput || (exports.UpdateApplicationInput = {}));
var UpdateDeploymentGroupInput;
(function (UpdateDeploymentGroupInput) {
    /**
     * @internal
     */
    UpdateDeploymentGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeploymentGroupInput = exports.UpdateDeploymentGroupInput || (exports.UpdateDeploymentGroupInput = {}));
var UpdateDeploymentGroupOutput;
(function (UpdateDeploymentGroupOutput) {
    /**
     * @internal
     */
    UpdateDeploymentGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeploymentGroupOutput = exports.UpdateDeploymentGroupOutput || (exports.UpdateDeploymentGroupOutput = {}));
//# sourceMappingURL=models_0.js.map