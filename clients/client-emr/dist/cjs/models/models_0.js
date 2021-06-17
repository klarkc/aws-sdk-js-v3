"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapActionConfig = exports.ScriptBootstrapActionConfig = exports.BlockPublicAccessConfigurationMetadata = exports.PortRange = exports.AutoScalingPolicyDescription = exports.AutoScalingPolicyStatus = exports.AutoScalingPolicyStateChangeReason = exports.AutoScalingPolicyStateChangeReasonCode = exports.AutoScalingPolicyState = exports.AuthMode = exports.Application = exports.AddTagsOutput = exports.AddTagsInput = exports.Tag = exports.AddJobFlowStepsOutput = exports.AddJobFlowStepsInput = exports.StepConfig = exports.HadoopJarStepConfig = exports.KeyValue = exports.InternalServerError = exports.AddInstanceGroupsOutput = exports.AutoScalingPolicy = exports.ScalingRule = exports.ScalingTrigger = exports.CloudWatchAlarmDefinition = exports.Unit = exports.Statistic = exports.MetricDimension = exports.ComparisonOperator = exports.ScalingAction = exports.SimpleScalingPolicyConfiguration = exports.AdjustmentType = exports.MarketType = exports.ScalingConstraints = exports.InvalidRequestException = exports.InternalServerException = exports.AddInstanceFleetOutput = exports.InstanceFleetProvisioningSpecifications = exports.SpotProvisioningSpecification = exports.SpotProvisioningAllocationStrategy = exports.OnDemandProvisioningSpecification = exports.OnDemandCapacityReservationOptions = exports.OnDemandCapacityReservationUsageStrategy = exports.OnDemandCapacityReservationPreference = exports.OnDemandProvisioningAllocationStrategy = exports.EbsConfiguration = exports.EbsBlockDeviceConfig = exports.VolumeSpecification = exports.InstanceFleetType = exports.ActionOnFailure = void 0;
exports.DescribeSecurityConfigurationInput = exports.DescribeNotebookExecutionOutput = exports.NotebookExecution = exports.NotebookExecutionStatus = exports.ExecutionEngineConfig = exports.ExecutionEngineType = exports.DescribeNotebookExecutionInput = exports.DescribeJobFlowsOutput = exports.JobFlowDetail = exports.StepDetail = exports.StepExecutionStatusDetail = exports.JobFlowInstancesDetail = exports.PlacementType = exports.InstanceGroupDetail = exports.InstanceGroupState = exports.JobFlowExecutionStatusDetail = exports.DescribeJobFlowsInput = exports.JobFlowExecutionState = exports.DescribeClusterInput = exports.DeleteStudioSessionMappingInput = exports.DeleteStudioInput = exports.DeleteSecurityConfigurationOutput = exports.DeleteSecurityConfigurationInput = exports.CreateStudioSessionMappingInput = exports.IdentityType = exports.CreateStudioOutput = exports.CreateStudioInput = exports.CreateSecurityConfigurationOutput = exports.CreateSecurityConfigurationInput = exports.ComputeLimits = exports.ComputeLimitsUnitType = exports.Command = exports.ClusterSummary = exports.ClusterStatus = exports.ClusterTimeline = exports.ClusterStateChangeReason = exports.ClusterStateChangeReasonCode = exports.ClusterState = exports.ScaleDownBehavior = exports.RepoUpgradeOnBoot = exports.PlacementGroupConfig = exports.PlacementGroupStrategy = exports.KerberosAttributes = exports.InstanceCollectionType = exports.Ec2InstanceAttributes = exports.CancelStepsOutput = exports.CancelStepsInfo = exports.CancelStepsRequestStatus = exports.CancelStepsInput = exports.BootstrapActionDetail = void 0;
exports.NotebookExecutionSummary = exports.ListNotebookExecutionsInput = exports.ListInstancesOutput = exports.Instance = exports.InstanceStatus = exports.InstanceTimeline = exports.InstanceStateChangeReason = exports.InstanceStateChangeReasonCode = exports.ListInstancesInput = exports.InstanceState = exports.InstanceGroupStatus = exports.InstanceGroupTimeline = exports.InstanceGroupStateChangeReason = exports.InstanceGroupStateChangeReasonCode = exports.ShrinkPolicy = exports.InstanceResizePolicy = exports.InstanceGroupType = exports.ListInstanceGroupsInput = exports.InstanceFleetStatus = exports.InstanceFleetTimeline = exports.InstanceFleetStateChangeReason = exports.InstanceFleetStateChangeReasonCode = exports.InstanceFleetState = exports.ListInstanceFleetsInput = exports.ListClustersOutput = exports.ListClustersInput = exports.ListBootstrapActionsOutput = exports.ListBootstrapActionsInput = exports.GetStudioSessionMappingOutput = exports.SessionMappingDetail = exports.GetStudioSessionMappingInput = exports.GetManagedScalingPolicyOutput = exports.ManagedScalingPolicy = exports.GetManagedScalingPolicyInput = exports.GetBlockPublicAccessConfigurationInput = exports.EbsVolume = exports.EbsBlockDevice = exports.DescribeStudioOutput = exports.Studio = exports.DescribeStudioInput = exports.DescribeStepOutput = exports.Step = exports.StepStatus = exports.StepTimeline = exports.StepStateChangeReason = exports.StepState = exports.FailureDetails = exports.HadoopStepConfig = exports.DescribeStepInput = exports.DescribeSecurityConfigurationOutput = void 0;
exports.InstanceFleet = exports.AddInstanceGroupsInput = exports.PutBlockPublicAccessConfigurationInput = exports.GetBlockPublicAccessConfigurationOutput = exports.DescribeClusterOutput = exports.InstanceTypeSpecification = exports.InstanceTypeConfig = exports.InstanceGroupModifyConfig = exports.InstanceGroupConfig = exports.Cluster = exports.BlockPublicAccessConfiguration = exports.Configuration = exports.UpdateStudioSessionMappingInput = exports.UpdateStudioInput = exports.TerminateJobFlowsInput = exports.StopNotebookExecutionInput = exports.StartNotebookExecutionOutput = exports.StartNotebookExecutionInput = exports.SetVisibleToAllUsersInput = exports.SetTerminationProtectionInput = exports.RunJobFlowOutput = exports.SupportedProductConfig = exports.RemoveTagsOutput = exports.RemoveTagsInput = exports.RemoveManagedScalingPolicyOutput = exports.RemoveManagedScalingPolicyInput = exports.RemoveAutoScalingPolicyOutput = exports.RemoveAutoScalingPolicyInput = exports.PutManagedScalingPolicyOutput = exports.PutManagedScalingPolicyInput = exports.PutBlockPublicAccessConfigurationOutput = exports.PutAutoScalingPolicyOutput = exports.PutAutoScalingPolicyInput = exports.ModifyInstanceFleetInput = exports.InstanceFleetModifyConfig = exports.ModifyClusterOutput = exports.ModifyClusterInput = exports.ListStudioSessionMappingsOutput = exports.SessionMappingSummary = exports.ListStudioSessionMappingsInput = exports.ListStudiosOutput = exports.StudioSummary = exports.ListStudiosInput = exports.ListStepsOutput = exports.StepSummary = exports.ListStepsInput = exports.ListSecurityConfigurationsOutput = exports.SecurityConfigurationSummary = exports.ListSecurityConfigurationsInput = exports.ListNotebookExecutionsOutput = void 0;
exports.RunJobFlowInput = exports.JobFlowInstancesConfig = exports.ListInstanceGroupsOutput = exports.ListInstanceFleetsOutput = exports.InstanceGroup = exports.AddInstanceFleetInput = exports.ModifyInstanceGroupsInput = exports.InstanceFleetConfig = void 0;
var ActionOnFailure;
(function (ActionOnFailure) {
    ActionOnFailure["CANCEL_AND_WAIT"] = "CANCEL_AND_WAIT";
    ActionOnFailure["CONTINUE"] = "CONTINUE";
    ActionOnFailure["TERMINATE_CLUSTER"] = "TERMINATE_CLUSTER";
    ActionOnFailure["TERMINATE_JOB_FLOW"] = "TERMINATE_JOB_FLOW";
})(ActionOnFailure = exports.ActionOnFailure || (exports.ActionOnFailure = {}));
var InstanceFleetType;
(function (InstanceFleetType) {
    InstanceFleetType["CORE"] = "CORE";
    InstanceFleetType["MASTER"] = "MASTER";
    InstanceFleetType["TASK"] = "TASK";
})(InstanceFleetType = exports.InstanceFleetType || (exports.InstanceFleetType = {}));
var VolumeSpecification;
(function (VolumeSpecification) {
    /**
     * @internal
     */
    VolumeSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeSpecification = exports.VolumeSpecification || (exports.VolumeSpecification = {}));
var EbsBlockDeviceConfig;
(function (EbsBlockDeviceConfig) {
    /**
     * @internal
     */
    EbsBlockDeviceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsBlockDeviceConfig = exports.EbsBlockDeviceConfig || (exports.EbsBlockDeviceConfig = {}));
var EbsConfiguration;
(function (EbsConfiguration) {
    /**
     * @internal
     */
    EbsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsConfiguration = exports.EbsConfiguration || (exports.EbsConfiguration = {}));
var OnDemandProvisioningAllocationStrategy;
(function (OnDemandProvisioningAllocationStrategy) {
    OnDemandProvisioningAllocationStrategy["LOWEST_PRICE"] = "lowest-price";
})(OnDemandProvisioningAllocationStrategy = exports.OnDemandProvisioningAllocationStrategy || (exports.OnDemandProvisioningAllocationStrategy = {}));
var OnDemandCapacityReservationPreference;
(function (OnDemandCapacityReservationPreference) {
    OnDemandCapacityReservationPreference["NONE"] = "none";
    OnDemandCapacityReservationPreference["OPEN"] = "open";
})(OnDemandCapacityReservationPreference = exports.OnDemandCapacityReservationPreference || (exports.OnDemandCapacityReservationPreference = {}));
var OnDemandCapacityReservationUsageStrategy;
(function (OnDemandCapacityReservationUsageStrategy) {
    OnDemandCapacityReservationUsageStrategy["USE_CAPACITY_RESERVATIONS_FIRST"] = "use-capacity-reservations-first";
})(OnDemandCapacityReservationUsageStrategy = exports.OnDemandCapacityReservationUsageStrategy || (exports.OnDemandCapacityReservationUsageStrategy = {}));
var OnDemandCapacityReservationOptions;
(function (OnDemandCapacityReservationOptions) {
    /**
     * @internal
     */
    OnDemandCapacityReservationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnDemandCapacityReservationOptions = exports.OnDemandCapacityReservationOptions || (exports.OnDemandCapacityReservationOptions = {}));
var OnDemandProvisioningSpecification;
(function (OnDemandProvisioningSpecification) {
    /**
     * @internal
     */
    OnDemandProvisioningSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnDemandProvisioningSpecification = exports.OnDemandProvisioningSpecification || (exports.OnDemandProvisioningSpecification = {}));
var SpotProvisioningAllocationStrategy;
(function (SpotProvisioningAllocationStrategy) {
    SpotProvisioningAllocationStrategy["CAPACITY_OPTIMIZED"] = "capacity-optimized";
})(SpotProvisioningAllocationStrategy = exports.SpotProvisioningAllocationStrategy || (exports.SpotProvisioningAllocationStrategy = {}));
var SpotProvisioningSpecification;
(function (SpotProvisioningSpecification) {
    /**
     * @internal
     */
    SpotProvisioningSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotProvisioningSpecification = exports.SpotProvisioningSpecification || (exports.SpotProvisioningSpecification = {}));
var InstanceFleetProvisioningSpecifications;
(function (InstanceFleetProvisioningSpecifications) {
    /**
     * @internal
     */
    InstanceFleetProvisioningSpecifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetProvisioningSpecifications = exports.InstanceFleetProvisioningSpecifications || (exports.InstanceFleetProvisioningSpecifications = {}));
var AddInstanceFleetOutput;
(function (AddInstanceFleetOutput) {
    /**
     * @internal
     */
    AddInstanceFleetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddInstanceFleetOutput = exports.AddInstanceFleetOutput || (exports.AddInstanceFleetOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ScalingConstraints;
(function (ScalingConstraints) {
    /**
     * @internal
     */
    ScalingConstraints.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingConstraints = exports.ScalingConstraints || (exports.ScalingConstraints = {}));
var MarketType;
(function (MarketType) {
    MarketType["ON_DEMAND"] = "ON_DEMAND";
    MarketType["SPOT"] = "SPOT";
})(MarketType = exports.MarketType || (exports.MarketType = {}));
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["CHANGE_IN_CAPACITY"] = "CHANGE_IN_CAPACITY";
    AdjustmentType["EXACT_CAPACITY"] = "EXACT_CAPACITY";
    AdjustmentType["PERCENT_CHANGE_IN_CAPACITY"] = "PERCENT_CHANGE_IN_CAPACITY";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var SimpleScalingPolicyConfiguration;
(function (SimpleScalingPolicyConfiguration) {
    /**
     * @internal
     */
    SimpleScalingPolicyConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleScalingPolicyConfiguration = exports.SimpleScalingPolicyConfiguration || (exports.SimpleScalingPolicyConfiguration = {}));
var ScalingAction;
(function (ScalingAction) {
    /**
     * @internal
     */
    ScalingAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingAction = exports.ScalingAction || (exports.ScalingAction = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
    ComparisonOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    ComparisonOperator["LESS_THAN"] = "LESS_THAN";
    ComparisonOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDimension = exports.MetricDimension || (exports.MetricDimension = {}));
var Statistic;
(function (Statistic) {
    Statistic["AVERAGE"] = "AVERAGE";
    Statistic["MAXIMUM"] = "MAXIMUM";
    Statistic["MINIMUM"] = "MINIMUM";
    Statistic["SAMPLE_COUNT"] = "SAMPLE_COUNT";
    Statistic["SUM"] = "SUM";
})(Statistic = exports.Statistic || (exports.Statistic = {}));
var Unit;
(function (Unit) {
    Unit["BITS"] = "BITS";
    Unit["BITS_PER_SECOND"] = "BITS_PER_SECOND";
    Unit["BYTES"] = "BYTES";
    Unit["BYTES_PER_SECOND"] = "BYTES_PER_SECOND";
    Unit["COUNT"] = "COUNT";
    Unit["COUNT_PER_SECOND"] = "COUNT_PER_SECOND";
    Unit["GIGA_BITS"] = "GIGA_BITS";
    Unit["GIGA_BITS_PER_SECOND"] = "GIGA_BITS_PER_SECOND";
    Unit["GIGA_BYTES"] = "GIGA_BYTES";
    Unit["GIGA_BYTES_PER_SECOND"] = "GIGA_BYTES_PER_SECOND";
    Unit["KILO_BITS"] = "KILO_BITS";
    Unit["KILO_BITS_PER_SECOND"] = "KILO_BITS_PER_SECOND";
    Unit["KILO_BYTES"] = "KILO_BYTES";
    Unit["KILO_BYTES_PER_SECOND"] = "KILO_BYTES_PER_SECOND";
    Unit["MEGA_BITS"] = "MEGA_BITS";
    Unit["MEGA_BITS_PER_SECOND"] = "MEGA_BITS_PER_SECOND";
    Unit["MEGA_BYTES"] = "MEGA_BYTES";
    Unit["MEGA_BYTES_PER_SECOND"] = "MEGA_BYTES_PER_SECOND";
    Unit["MICRO_SECONDS"] = "MICRO_SECONDS";
    Unit["MILLI_SECONDS"] = "MILLI_SECONDS";
    Unit["NONE"] = "NONE";
    Unit["PERCENT"] = "PERCENT";
    Unit["SECONDS"] = "SECONDS";
    Unit["TERA_BITS"] = "TERA_BITS";
    Unit["TERA_BITS_PER_SECOND"] = "TERA_BITS_PER_SECOND";
    Unit["TERA_BYTES"] = "TERA_BYTES";
    Unit["TERA_BYTES_PER_SECOND"] = "TERA_BYTES_PER_SECOND";
})(Unit = exports.Unit || (exports.Unit = {}));
var CloudWatchAlarmDefinition;
(function (CloudWatchAlarmDefinition) {
    /**
     * @internal
     */
    CloudWatchAlarmDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchAlarmDefinition = exports.CloudWatchAlarmDefinition || (exports.CloudWatchAlarmDefinition = {}));
var ScalingTrigger;
(function (ScalingTrigger) {
    /**
     * @internal
     */
    ScalingTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingTrigger = exports.ScalingTrigger || (exports.ScalingTrigger = {}));
var ScalingRule;
(function (ScalingRule) {
    /**
     * @internal
     */
    ScalingRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingRule = exports.ScalingRule || (exports.ScalingRule = {}));
var AutoScalingPolicy;
(function (AutoScalingPolicy) {
    /**
     * @internal
     */
    AutoScalingPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicy = exports.AutoScalingPolicy || (exports.AutoScalingPolicy = {}));
var AddInstanceGroupsOutput;
(function (AddInstanceGroupsOutput) {
    /**
     * @internal
     */
    AddInstanceGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddInstanceGroupsOutput = exports.AddInstanceGroupsOutput || (exports.AddInstanceGroupsOutput = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var KeyValue;
(function (KeyValue) {
    /**
     * @internal
     */
    KeyValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyValue = exports.KeyValue || (exports.KeyValue = {}));
var HadoopJarStepConfig;
(function (HadoopJarStepConfig) {
    /**
     * @internal
     */
    HadoopJarStepConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HadoopJarStepConfig = exports.HadoopJarStepConfig || (exports.HadoopJarStepConfig = {}));
var StepConfig;
(function (StepConfig) {
    /**
     * @internal
     */
    StepConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepConfig = exports.StepConfig || (exports.StepConfig = {}));
var AddJobFlowStepsInput;
(function (AddJobFlowStepsInput) {
    /**
     * @internal
     */
    AddJobFlowStepsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddJobFlowStepsInput = exports.AddJobFlowStepsInput || (exports.AddJobFlowStepsInput = {}));
var AddJobFlowStepsOutput;
(function (AddJobFlowStepsOutput) {
    /**
     * @internal
     */
    AddJobFlowStepsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddJobFlowStepsOutput = exports.AddJobFlowStepsOutput || (exports.AddJobFlowStepsOutput = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var Application;
(function (Application) {
    /**
     * @internal
     */
    Application.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Application = exports.Application || (exports.Application = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode = exports.AuthMode || (exports.AuthMode = {}));
var AutoScalingPolicyState;
(function (AutoScalingPolicyState) {
    AutoScalingPolicyState["ATTACHED"] = "ATTACHED";
    AutoScalingPolicyState["ATTACHING"] = "ATTACHING";
    AutoScalingPolicyState["DETACHED"] = "DETACHED";
    AutoScalingPolicyState["DETACHING"] = "DETACHING";
    AutoScalingPolicyState["FAILED"] = "FAILED";
    AutoScalingPolicyState["PENDING"] = "PENDING";
})(AutoScalingPolicyState = exports.AutoScalingPolicyState || (exports.AutoScalingPolicyState = {}));
var AutoScalingPolicyStateChangeReasonCode;
(function (AutoScalingPolicyStateChangeReasonCode) {
    AutoScalingPolicyStateChangeReasonCode["CLEANUP_FAILURE"] = "CLEANUP_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["PROVISION_FAILURE"] = "PROVISION_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
})(AutoScalingPolicyStateChangeReasonCode = exports.AutoScalingPolicyStateChangeReasonCode || (exports.AutoScalingPolicyStateChangeReasonCode = {}));
var AutoScalingPolicyStateChangeReason;
(function (AutoScalingPolicyStateChangeReason) {
    /**
     * @internal
     */
    AutoScalingPolicyStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicyStateChangeReason = exports.AutoScalingPolicyStateChangeReason || (exports.AutoScalingPolicyStateChangeReason = {}));
var AutoScalingPolicyStatus;
(function (AutoScalingPolicyStatus) {
    /**
     * @internal
     */
    AutoScalingPolicyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicyStatus = exports.AutoScalingPolicyStatus || (exports.AutoScalingPolicyStatus = {}));
var AutoScalingPolicyDescription;
(function (AutoScalingPolicyDescription) {
    /**
     * @internal
     */
    AutoScalingPolicyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicyDescription = exports.AutoScalingPolicyDescription || (exports.AutoScalingPolicyDescription = {}));
var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var BlockPublicAccessConfigurationMetadata;
(function (BlockPublicAccessConfigurationMetadata) {
    /**
     * @internal
     */
    BlockPublicAccessConfigurationMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockPublicAccessConfigurationMetadata = exports.BlockPublicAccessConfigurationMetadata || (exports.BlockPublicAccessConfigurationMetadata = {}));
var ScriptBootstrapActionConfig;
(function (ScriptBootstrapActionConfig) {
    /**
     * @internal
     */
    ScriptBootstrapActionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScriptBootstrapActionConfig = exports.ScriptBootstrapActionConfig || (exports.ScriptBootstrapActionConfig = {}));
var BootstrapActionConfig;
(function (BootstrapActionConfig) {
    /**
     * @internal
     */
    BootstrapActionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BootstrapActionConfig = exports.BootstrapActionConfig || (exports.BootstrapActionConfig = {}));
var BootstrapActionDetail;
(function (BootstrapActionDetail) {
    /**
     * @internal
     */
    BootstrapActionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BootstrapActionDetail = exports.BootstrapActionDetail || (exports.BootstrapActionDetail = {}));
var CancelStepsInput;
(function (CancelStepsInput) {
    /**
     * @internal
     */
    CancelStepsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelStepsInput = exports.CancelStepsInput || (exports.CancelStepsInput = {}));
var CancelStepsRequestStatus;
(function (CancelStepsRequestStatus) {
    CancelStepsRequestStatus["FAILED"] = "FAILED";
    CancelStepsRequestStatus["SUBMITTED"] = "SUBMITTED";
})(CancelStepsRequestStatus = exports.CancelStepsRequestStatus || (exports.CancelStepsRequestStatus = {}));
var CancelStepsInfo;
(function (CancelStepsInfo) {
    /**
     * @internal
     */
    CancelStepsInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelStepsInfo = exports.CancelStepsInfo || (exports.CancelStepsInfo = {}));
var CancelStepsOutput;
(function (CancelStepsOutput) {
    /**
     * @internal
     */
    CancelStepsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelStepsOutput = exports.CancelStepsOutput || (exports.CancelStepsOutput = {}));
var Ec2InstanceAttributes;
(function (Ec2InstanceAttributes) {
    /**
     * @internal
     */
    Ec2InstanceAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ec2InstanceAttributes = exports.Ec2InstanceAttributes || (exports.Ec2InstanceAttributes = {}));
var InstanceCollectionType;
(function (InstanceCollectionType) {
    InstanceCollectionType["INSTANCE_FLEET"] = "INSTANCE_FLEET";
    InstanceCollectionType["INSTANCE_GROUP"] = "INSTANCE_GROUP";
})(InstanceCollectionType = exports.InstanceCollectionType || (exports.InstanceCollectionType = {}));
var KerberosAttributes;
(function (KerberosAttributes) {
    /**
     * @internal
     */
    KerberosAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KerberosAttributes = exports.KerberosAttributes || (exports.KerberosAttributes = {}));
var PlacementGroupStrategy;
(function (PlacementGroupStrategy) {
    PlacementGroupStrategy["CLUSTER"] = "CLUSTER";
    PlacementGroupStrategy["NONE"] = "NONE";
    PlacementGroupStrategy["PARTITION"] = "PARTITION";
    PlacementGroupStrategy["SPREAD"] = "SPREAD";
})(PlacementGroupStrategy = exports.PlacementGroupStrategy || (exports.PlacementGroupStrategy = {}));
var PlacementGroupConfig;
(function (PlacementGroupConfig) {
    /**
     * @internal
     */
    PlacementGroupConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementGroupConfig = exports.PlacementGroupConfig || (exports.PlacementGroupConfig = {}));
var RepoUpgradeOnBoot;
(function (RepoUpgradeOnBoot) {
    RepoUpgradeOnBoot["NONE"] = "NONE";
    RepoUpgradeOnBoot["SECURITY"] = "SECURITY";
})(RepoUpgradeOnBoot = exports.RepoUpgradeOnBoot || (exports.RepoUpgradeOnBoot = {}));
var ScaleDownBehavior;
(function (ScaleDownBehavior) {
    ScaleDownBehavior["TERMINATE_AT_INSTANCE_HOUR"] = "TERMINATE_AT_INSTANCE_HOUR";
    ScaleDownBehavior["TERMINATE_AT_TASK_COMPLETION"] = "TERMINATE_AT_TASK_COMPLETION";
})(ScaleDownBehavior = exports.ScaleDownBehavior || (exports.ScaleDownBehavior = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    ClusterState["RUNNING"] = "RUNNING";
    ClusterState["STARTING"] = "STARTING";
    ClusterState["TERMINATED"] = "TERMINATED";
    ClusterState["TERMINATED_WITH_ERRORS"] = "TERMINATED_WITH_ERRORS";
    ClusterState["TERMINATING"] = "TERMINATING";
    ClusterState["WAITING"] = "WAITING";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var ClusterStateChangeReasonCode;
(function (ClusterStateChangeReasonCode) {
    ClusterStateChangeReasonCode["ALL_STEPS_COMPLETED"] = "ALL_STEPS_COMPLETED";
    ClusterStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FLEET_TIMEOUT"] = "INSTANCE_FLEET_TIMEOUT";
    ClusterStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ClusterStateChangeReasonCode["STEP_FAILURE"] = "STEP_FAILURE";
    ClusterStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
    ClusterStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(ClusterStateChangeReasonCode = exports.ClusterStateChangeReasonCode || (exports.ClusterStateChangeReasonCode = {}));
var ClusterStateChangeReason;
(function (ClusterStateChangeReason) {
    /**
     * @internal
     */
    ClusterStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterStateChangeReason = exports.ClusterStateChangeReason || (exports.ClusterStateChangeReason = {}));
var ClusterTimeline;
(function (ClusterTimeline) {
    /**
     * @internal
     */
    ClusterTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterTimeline = exports.ClusterTimeline || (exports.ClusterTimeline = {}));
var ClusterStatus;
(function (ClusterStatus) {
    /**
     * @internal
     */
    ClusterStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterStatus = exports.ClusterStatus || (exports.ClusterStatus = {}));
var ClusterSummary;
(function (ClusterSummary) {
    /**
     * @internal
     */
    ClusterSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSummary = exports.ClusterSummary || (exports.ClusterSummary = {}));
var Command;
(function (Command) {
    /**
     * @internal
     */
    Command.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Command = exports.Command || (exports.Command = {}));
var ComputeLimitsUnitType;
(function (ComputeLimitsUnitType) {
    ComputeLimitsUnitType["InstanceFleetUnits"] = "InstanceFleetUnits";
    ComputeLimitsUnitType["Instances"] = "Instances";
    ComputeLimitsUnitType["VCPU"] = "VCPU";
})(ComputeLimitsUnitType = exports.ComputeLimitsUnitType || (exports.ComputeLimitsUnitType = {}));
var ComputeLimits;
(function (ComputeLimits) {
    /**
     * @internal
     */
    ComputeLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComputeLimits = exports.ComputeLimits || (exports.ComputeLimits = {}));
var CreateSecurityConfigurationInput;
(function (CreateSecurityConfigurationInput) {
    /**
     * @internal
     */
    CreateSecurityConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityConfigurationInput = exports.CreateSecurityConfigurationInput || (exports.CreateSecurityConfigurationInput = {}));
var CreateSecurityConfigurationOutput;
(function (CreateSecurityConfigurationOutput) {
    /**
     * @internal
     */
    CreateSecurityConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityConfigurationOutput = exports.CreateSecurityConfigurationOutput || (exports.CreateSecurityConfigurationOutput = {}));
var CreateStudioInput;
(function (CreateStudioInput) {
    /**
     * @internal
     */
    CreateStudioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioInput = exports.CreateStudioInput || (exports.CreateStudioInput = {}));
var CreateStudioOutput;
(function (CreateStudioOutput) {
    /**
     * @internal
     */
    CreateStudioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioOutput = exports.CreateStudioOutput || (exports.CreateStudioOutput = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType["GROUP"] = "GROUP";
    IdentityType["USER"] = "USER";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
var CreateStudioSessionMappingInput;
(function (CreateStudioSessionMappingInput) {
    /**
     * @internal
     */
    CreateStudioSessionMappingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStudioSessionMappingInput = exports.CreateStudioSessionMappingInput || (exports.CreateStudioSessionMappingInput = {}));
var DeleteSecurityConfigurationInput;
(function (DeleteSecurityConfigurationInput) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityConfigurationInput = exports.DeleteSecurityConfigurationInput || (exports.DeleteSecurityConfigurationInput = {}));
var DeleteSecurityConfigurationOutput;
(function (DeleteSecurityConfigurationOutput) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityConfigurationOutput = exports.DeleteSecurityConfigurationOutput || (exports.DeleteSecurityConfigurationOutput = {}));
var DeleteStudioInput;
(function (DeleteStudioInput) {
    /**
     * @internal
     */
    DeleteStudioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioInput = exports.DeleteStudioInput || (exports.DeleteStudioInput = {}));
var DeleteStudioSessionMappingInput;
(function (DeleteStudioSessionMappingInput) {
    /**
     * @internal
     */
    DeleteStudioSessionMappingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStudioSessionMappingInput = exports.DeleteStudioSessionMappingInput || (exports.DeleteStudioSessionMappingInput = {}));
var DescribeClusterInput;
(function (DescribeClusterInput) {
    /**
     * @internal
     */
    DescribeClusterInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterInput = exports.DescribeClusterInput || (exports.DescribeClusterInput = {}));
var JobFlowExecutionState;
(function (JobFlowExecutionState) {
    JobFlowExecutionState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    JobFlowExecutionState["COMPLETED"] = "COMPLETED";
    JobFlowExecutionState["FAILED"] = "FAILED";
    JobFlowExecutionState["RUNNING"] = "RUNNING";
    JobFlowExecutionState["SHUTTING_DOWN"] = "SHUTTING_DOWN";
    JobFlowExecutionState["STARTING"] = "STARTING";
    JobFlowExecutionState["TERMINATED"] = "TERMINATED";
    JobFlowExecutionState["WAITING"] = "WAITING";
})(JobFlowExecutionState = exports.JobFlowExecutionState || (exports.JobFlowExecutionState = {}));
var DescribeJobFlowsInput;
(function (DescribeJobFlowsInput) {
    /**
     * @internal
     */
    DescribeJobFlowsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobFlowsInput = exports.DescribeJobFlowsInput || (exports.DescribeJobFlowsInput = {}));
var JobFlowExecutionStatusDetail;
(function (JobFlowExecutionStatusDetail) {
    /**
     * @internal
     */
    JobFlowExecutionStatusDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFlowExecutionStatusDetail = exports.JobFlowExecutionStatusDetail || (exports.JobFlowExecutionStatusDetail = {}));
var InstanceGroupState;
(function (InstanceGroupState) {
    InstanceGroupState["ARRESTED"] = "ARRESTED";
    InstanceGroupState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceGroupState["ENDED"] = "ENDED";
    InstanceGroupState["PROVISIONING"] = "PROVISIONING";
    InstanceGroupState["RECONFIGURING"] = "RECONFIGURING";
    InstanceGroupState["RESIZING"] = "RESIZING";
    InstanceGroupState["RUNNING"] = "RUNNING";
    InstanceGroupState["SHUTTING_DOWN"] = "SHUTTING_DOWN";
    InstanceGroupState["SUSPENDED"] = "SUSPENDED";
    InstanceGroupState["TERMINATED"] = "TERMINATED";
    InstanceGroupState["TERMINATING"] = "TERMINATING";
})(InstanceGroupState = exports.InstanceGroupState || (exports.InstanceGroupState = {}));
var InstanceGroupDetail;
(function (InstanceGroupDetail) {
    /**
     * @internal
     */
    InstanceGroupDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupDetail = exports.InstanceGroupDetail || (exports.InstanceGroupDetail = {}));
var PlacementType;
(function (PlacementType) {
    /**
     * @internal
     */
    PlacementType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementType = exports.PlacementType || (exports.PlacementType = {}));
var JobFlowInstancesDetail;
(function (JobFlowInstancesDetail) {
    /**
     * @internal
     */
    JobFlowInstancesDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFlowInstancesDetail = exports.JobFlowInstancesDetail || (exports.JobFlowInstancesDetail = {}));
var StepExecutionStatusDetail;
(function (StepExecutionStatusDetail) {
    /**
     * @internal
     */
    StepExecutionStatusDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepExecutionStatusDetail = exports.StepExecutionStatusDetail || (exports.StepExecutionStatusDetail = {}));
var StepDetail;
(function (StepDetail) {
    /**
     * @internal
     */
    StepDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepDetail = exports.StepDetail || (exports.StepDetail = {}));
var JobFlowDetail;
(function (JobFlowDetail) {
    /**
     * @internal
     */
    JobFlowDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFlowDetail = exports.JobFlowDetail || (exports.JobFlowDetail = {}));
var DescribeJobFlowsOutput;
(function (DescribeJobFlowsOutput) {
    /**
     * @internal
     */
    DescribeJobFlowsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobFlowsOutput = exports.DescribeJobFlowsOutput || (exports.DescribeJobFlowsOutput = {}));
var DescribeNotebookExecutionInput;
(function (DescribeNotebookExecutionInput) {
    /**
     * @internal
     */
    DescribeNotebookExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookExecutionInput = exports.DescribeNotebookExecutionInput || (exports.DescribeNotebookExecutionInput = {}));
var ExecutionEngineType;
(function (ExecutionEngineType) {
    ExecutionEngineType["EMR"] = "EMR";
})(ExecutionEngineType = exports.ExecutionEngineType || (exports.ExecutionEngineType = {}));
var ExecutionEngineConfig;
(function (ExecutionEngineConfig) {
    /**
     * @internal
     */
    ExecutionEngineConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionEngineConfig = exports.ExecutionEngineConfig || (exports.ExecutionEngineConfig = {}));
var NotebookExecutionStatus;
(function (NotebookExecutionStatus) {
    NotebookExecutionStatus["FAILED"] = "FAILED";
    NotebookExecutionStatus["FAILING"] = "FAILING";
    NotebookExecutionStatus["FINISHED"] = "FINISHED";
    NotebookExecutionStatus["FINISHING"] = "FINISHING";
    NotebookExecutionStatus["RUNNING"] = "RUNNING";
    NotebookExecutionStatus["STARTING"] = "STARTING";
    NotebookExecutionStatus["START_PENDING"] = "START_PENDING";
    NotebookExecutionStatus["STOPPED"] = "STOPPED";
    NotebookExecutionStatus["STOPPING"] = "STOPPING";
    NotebookExecutionStatus["STOP_PENDING"] = "STOP_PENDING";
})(NotebookExecutionStatus = exports.NotebookExecutionStatus || (exports.NotebookExecutionStatus = {}));
var NotebookExecution;
(function (NotebookExecution) {
    /**
     * @internal
     */
    NotebookExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotebookExecution = exports.NotebookExecution || (exports.NotebookExecution = {}));
var DescribeNotebookExecutionOutput;
(function (DescribeNotebookExecutionOutput) {
    /**
     * @internal
     */
    DescribeNotebookExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotebookExecutionOutput = exports.DescribeNotebookExecutionOutput || (exports.DescribeNotebookExecutionOutput = {}));
var DescribeSecurityConfigurationInput;
(function (DescribeSecurityConfigurationInput) {
    /**
     * @internal
     */
    DescribeSecurityConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityConfigurationInput = exports.DescribeSecurityConfigurationInput || (exports.DescribeSecurityConfigurationInput = {}));
var DescribeSecurityConfigurationOutput;
(function (DescribeSecurityConfigurationOutput) {
    /**
     * @internal
     */
    DescribeSecurityConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityConfigurationOutput = exports.DescribeSecurityConfigurationOutput || (exports.DescribeSecurityConfigurationOutput = {}));
var DescribeStepInput;
(function (DescribeStepInput) {
    /**
     * @internal
     */
    DescribeStepInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStepInput = exports.DescribeStepInput || (exports.DescribeStepInput = {}));
var HadoopStepConfig;
(function (HadoopStepConfig) {
    /**
     * @internal
     */
    HadoopStepConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HadoopStepConfig = exports.HadoopStepConfig || (exports.HadoopStepConfig = {}));
var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var StepState;
(function (StepState) {
    StepState["CANCELLED"] = "CANCELLED";
    StepState["CANCEL_PENDING"] = "CANCEL_PENDING";
    StepState["COMPLETED"] = "COMPLETED";
    StepState["FAILED"] = "FAILED";
    StepState["INTERRUPTED"] = "INTERRUPTED";
    StepState["PENDING"] = "PENDING";
    StepState["RUNNING"] = "RUNNING";
})(StepState = exports.StepState || (exports.StepState = {}));
var StepStateChangeReason;
(function (StepStateChangeReason) {
    /**
     * @internal
     */
    StepStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepStateChangeReason = exports.StepStateChangeReason || (exports.StepStateChangeReason = {}));
var StepTimeline;
(function (StepTimeline) {
    /**
     * @internal
     */
    StepTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepTimeline = exports.StepTimeline || (exports.StepTimeline = {}));
var StepStatus;
(function (StepStatus) {
    /**
     * @internal
     */
    StepStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepStatus = exports.StepStatus || (exports.StepStatus = {}));
var Step;
(function (Step) {
    /**
     * @internal
     */
    Step.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Step = exports.Step || (exports.Step = {}));
var DescribeStepOutput;
(function (DescribeStepOutput) {
    /**
     * @internal
     */
    DescribeStepOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStepOutput = exports.DescribeStepOutput || (exports.DescribeStepOutput = {}));
var DescribeStudioInput;
(function (DescribeStudioInput) {
    /**
     * @internal
     */
    DescribeStudioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStudioInput = exports.DescribeStudioInput || (exports.DescribeStudioInput = {}));
var Studio;
(function (Studio) {
    /**
     * @internal
     */
    Studio.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Studio = exports.Studio || (exports.Studio = {}));
var DescribeStudioOutput;
(function (DescribeStudioOutput) {
    /**
     * @internal
     */
    DescribeStudioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStudioOutput = exports.DescribeStudioOutput || (exports.DescribeStudioOutput = {}));
var EbsBlockDevice;
(function (EbsBlockDevice) {
    /**
     * @internal
     */
    EbsBlockDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsBlockDevice = exports.EbsBlockDevice || (exports.EbsBlockDevice = {}));
var EbsVolume;
(function (EbsVolume) {
    /**
     * @internal
     */
    EbsVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsVolume = exports.EbsVolume || (exports.EbsVolume = {}));
var GetBlockPublicAccessConfigurationInput;
(function (GetBlockPublicAccessConfigurationInput) {
    /**
     * @internal
     */
    GetBlockPublicAccessConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlockPublicAccessConfigurationInput = exports.GetBlockPublicAccessConfigurationInput || (exports.GetBlockPublicAccessConfigurationInput = {}));
var GetManagedScalingPolicyInput;
(function (GetManagedScalingPolicyInput) {
    /**
     * @internal
     */
    GetManagedScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedScalingPolicyInput = exports.GetManagedScalingPolicyInput || (exports.GetManagedScalingPolicyInput = {}));
var ManagedScalingPolicy;
(function (ManagedScalingPolicy) {
    /**
     * @internal
     */
    ManagedScalingPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedScalingPolicy = exports.ManagedScalingPolicy || (exports.ManagedScalingPolicy = {}));
var GetManagedScalingPolicyOutput;
(function (GetManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    GetManagedScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedScalingPolicyOutput = exports.GetManagedScalingPolicyOutput || (exports.GetManagedScalingPolicyOutput = {}));
var GetStudioSessionMappingInput;
(function (GetStudioSessionMappingInput) {
    /**
     * @internal
     */
    GetStudioSessionMappingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioSessionMappingInput = exports.GetStudioSessionMappingInput || (exports.GetStudioSessionMappingInput = {}));
var SessionMappingDetail;
(function (SessionMappingDetail) {
    /**
     * @internal
     */
    SessionMappingDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionMappingDetail = exports.SessionMappingDetail || (exports.SessionMappingDetail = {}));
var GetStudioSessionMappingOutput;
(function (GetStudioSessionMappingOutput) {
    /**
     * @internal
     */
    GetStudioSessionMappingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStudioSessionMappingOutput = exports.GetStudioSessionMappingOutput || (exports.GetStudioSessionMappingOutput = {}));
var ListBootstrapActionsInput;
(function (ListBootstrapActionsInput) {
    /**
     * @internal
     */
    ListBootstrapActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBootstrapActionsInput = exports.ListBootstrapActionsInput || (exports.ListBootstrapActionsInput = {}));
var ListBootstrapActionsOutput;
(function (ListBootstrapActionsOutput) {
    /**
     * @internal
     */
    ListBootstrapActionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBootstrapActionsOutput = exports.ListBootstrapActionsOutput || (exports.ListBootstrapActionsOutput = {}));
var ListClustersInput;
(function (ListClustersInput) {
    /**
     * @internal
     */
    ListClustersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersInput = exports.ListClustersInput || (exports.ListClustersInput = {}));
var ListClustersOutput;
(function (ListClustersOutput) {
    /**
     * @internal
     */
    ListClustersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersOutput = exports.ListClustersOutput || (exports.ListClustersOutput = {}));
var ListInstanceFleetsInput;
(function (ListInstanceFleetsInput) {
    /**
     * @internal
     */
    ListInstanceFleetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceFleetsInput = exports.ListInstanceFleetsInput || (exports.ListInstanceFleetsInput = {}));
var InstanceFleetState;
(function (InstanceFleetState) {
    InstanceFleetState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceFleetState["PROVISIONING"] = "PROVISIONING";
    InstanceFleetState["RESIZING"] = "RESIZING";
    InstanceFleetState["RUNNING"] = "RUNNING";
    InstanceFleetState["SUSPENDED"] = "SUSPENDED";
    InstanceFleetState["TERMINATED"] = "TERMINATED";
    InstanceFleetState["TERMINATING"] = "TERMINATING";
})(InstanceFleetState = exports.InstanceFleetState || (exports.InstanceFleetState = {}));
var InstanceFleetStateChangeReasonCode;
(function (InstanceFleetStateChangeReasonCode) {
    InstanceFleetStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceFleetStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceFleetStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceFleetStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceFleetStateChangeReasonCode = exports.InstanceFleetStateChangeReasonCode || (exports.InstanceFleetStateChangeReasonCode = {}));
var InstanceFleetStateChangeReason;
(function (InstanceFleetStateChangeReason) {
    /**
     * @internal
     */
    InstanceFleetStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetStateChangeReason = exports.InstanceFleetStateChangeReason || (exports.InstanceFleetStateChangeReason = {}));
var InstanceFleetTimeline;
(function (InstanceFleetTimeline) {
    /**
     * @internal
     */
    InstanceFleetTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetTimeline = exports.InstanceFleetTimeline || (exports.InstanceFleetTimeline = {}));
var InstanceFleetStatus;
(function (InstanceFleetStatus) {
    /**
     * @internal
     */
    InstanceFleetStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetStatus = exports.InstanceFleetStatus || (exports.InstanceFleetStatus = {}));
var ListInstanceGroupsInput;
(function (ListInstanceGroupsInput) {
    /**
     * @internal
     */
    ListInstanceGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceGroupsInput = exports.ListInstanceGroupsInput || (exports.ListInstanceGroupsInput = {}));
var InstanceGroupType;
(function (InstanceGroupType) {
    InstanceGroupType["CORE"] = "CORE";
    InstanceGroupType["MASTER"] = "MASTER";
    InstanceGroupType["TASK"] = "TASK";
})(InstanceGroupType = exports.InstanceGroupType || (exports.InstanceGroupType = {}));
var InstanceResizePolicy;
(function (InstanceResizePolicy) {
    /**
     * @internal
     */
    InstanceResizePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceResizePolicy = exports.InstanceResizePolicy || (exports.InstanceResizePolicy = {}));
var ShrinkPolicy;
(function (ShrinkPolicy) {
    /**
     * @internal
     */
    ShrinkPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShrinkPolicy = exports.ShrinkPolicy || (exports.ShrinkPolicy = {}));
var InstanceGroupStateChangeReasonCode;
(function (InstanceGroupStateChangeReasonCode) {
    InstanceGroupStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceGroupStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceGroupStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceGroupStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceGroupStateChangeReasonCode = exports.InstanceGroupStateChangeReasonCode || (exports.InstanceGroupStateChangeReasonCode = {}));
var InstanceGroupStateChangeReason;
(function (InstanceGroupStateChangeReason) {
    /**
     * @internal
     */
    InstanceGroupStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupStateChangeReason = exports.InstanceGroupStateChangeReason || (exports.InstanceGroupStateChangeReason = {}));
var InstanceGroupTimeline;
(function (InstanceGroupTimeline) {
    /**
     * @internal
     */
    InstanceGroupTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupTimeline = exports.InstanceGroupTimeline || (exports.InstanceGroupTimeline = {}));
var InstanceGroupStatus;
(function (InstanceGroupStatus) {
    /**
     * @internal
     */
    InstanceGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupStatus = exports.InstanceGroupStatus || (exports.InstanceGroupStatus = {}));
var InstanceState;
(function (InstanceState) {
    InstanceState["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    InstanceState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceState["PROVISIONING"] = "PROVISIONING";
    InstanceState["RUNNING"] = "RUNNING";
    InstanceState["TERMINATED"] = "TERMINATED";
})(InstanceState = exports.InstanceState || (exports.InstanceState = {}));
var ListInstancesInput;
(function (ListInstancesInput) {
    /**
     * @internal
     */
    ListInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesInput = exports.ListInstancesInput || (exports.ListInstancesInput = {}));
var InstanceStateChangeReasonCode;
(function (InstanceStateChangeReasonCode) {
    InstanceStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    InstanceStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceStateChangeReasonCode = exports.InstanceStateChangeReasonCode || (exports.InstanceStateChangeReasonCode = {}));
var InstanceStateChangeReason;
(function (InstanceStateChangeReason) {
    /**
     * @internal
     */
    InstanceStateChangeReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStateChangeReason = exports.InstanceStateChangeReason || (exports.InstanceStateChangeReason = {}));
var InstanceTimeline;
(function (InstanceTimeline) {
    /**
     * @internal
     */
    InstanceTimeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTimeline = exports.InstanceTimeline || (exports.InstanceTimeline = {}));
var InstanceStatus;
(function (InstanceStatus) {
    /**
     * @internal
     */
    InstanceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var ListInstancesOutput;
(function (ListInstancesOutput) {
    /**
     * @internal
     */
    ListInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesOutput = exports.ListInstancesOutput || (exports.ListInstancesOutput = {}));
var ListNotebookExecutionsInput;
(function (ListNotebookExecutionsInput) {
    /**
     * @internal
     */
    ListNotebookExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookExecutionsInput = exports.ListNotebookExecutionsInput || (exports.ListNotebookExecutionsInput = {}));
var NotebookExecutionSummary;
(function (NotebookExecutionSummary) {
    /**
     * @internal
     */
    NotebookExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotebookExecutionSummary = exports.NotebookExecutionSummary || (exports.NotebookExecutionSummary = {}));
var ListNotebookExecutionsOutput;
(function (ListNotebookExecutionsOutput) {
    /**
     * @internal
     */
    ListNotebookExecutionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotebookExecutionsOutput = exports.ListNotebookExecutionsOutput || (exports.ListNotebookExecutionsOutput = {}));
var ListSecurityConfigurationsInput;
(function (ListSecurityConfigurationsInput) {
    /**
     * @internal
     */
    ListSecurityConfigurationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityConfigurationsInput = exports.ListSecurityConfigurationsInput || (exports.ListSecurityConfigurationsInput = {}));
var SecurityConfigurationSummary;
(function (SecurityConfigurationSummary) {
    /**
     * @internal
     */
    SecurityConfigurationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityConfigurationSummary = exports.SecurityConfigurationSummary || (exports.SecurityConfigurationSummary = {}));
var ListSecurityConfigurationsOutput;
(function (ListSecurityConfigurationsOutput) {
    /**
     * @internal
     */
    ListSecurityConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityConfigurationsOutput = exports.ListSecurityConfigurationsOutput || (exports.ListSecurityConfigurationsOutput = {}));
var ListStepsInput;
(function (ListStepsInput) {
    /**
     * @internal
     */
    ListStepsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStepsInput = exports.ListStepsInput || (exports.ListStepsInput = {}));
var StepSummary;
(function (StepSummary) {
    /**
     * @internal
     */
    StepSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepSummary = exports.StepSummary || (exports.StepSummary = {}));
var ListStepsOutput;
(function (ListStepsOutput) {
    /**
     * @internal
     */
    ListStepsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStepsOutput = exports.ListStepsOutput || (exports.ListStepsOutput = {}));
var ListStudiosInput;
(function (ListStudiosInput) {
    /**
     * @internal
     */
    ListStudiosInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudiosInput = exports.ListStudiosInput || (exports.ListStudiosInput = {}));
var StudioSummary;
(function (StudioSummary) {
    /**
     * @internal
     */
    StudioSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StudioSummary = exports.StudioSummary || (exports.StudioSummary = {}));
var ListStudiosOutput;
(function (ListStudiosOutput) {
    /**
     * @internal
     */
    ListStudiosOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudiosOutput = exports.ListStudiosOutput || (exports.ListStudiosOutput = {}));
var ListStudioSessionMappingsInput;
(function (ListStudioSessionMappingsInput) {
    /**
     * @internal
     */
    ListStudioSessionMappingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioSessionMappingsInput = exports.ListStudioSessionMappingsInput || (exports.ListStudioSessionMappingsInput = {}));
var SessionMappingSummary;
(function (SessionMappingSummary) {
    /**
     * @internal
     */
    SessionMappingSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionMappingSummary = exports.SessionMappingSummary || (exports.SessionMappingSummary = {}));
var ListStudioSessionMappingsOutput;
(function (ListStudioSessionMappingsOutput) {
    /**
     * @internal
     */
    ListStudioSessionMappingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStudioSessionMappingsOutput = exports.ListStudioSessionMappingsOutput || (exports.ListStudioSessionMappingsOutput = {}));
var ModifyClusterInput;
(function (ModifyClusterInput) {
    /**
     * @internal
     */
    ModifyClusterInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterInput = exports.ModifyClusterInput || (exports.ModifyClusterInput = {}));
var ModifyClusterOutput;
(function (ModifyClusterOutput) {
    /**
     * @internal
     */
    ModifyClusterOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterOutput = exports.ModifyClusterOutput || (exports.ModifyClusterOutput = {}));
var InstanceFleetModifyConfig;
(function (InstanceFleetModifyConfig) {
    /**
     * @internal
     */
    InstanceFleetModifyConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetModifyConfig = exports.InstanceFleetModifyConfig || (exports.InstanceFleetModifyConfig = {}));
var ModifyInstanceFleetInput;
(function (ModifyInstanceFleetInput) {
    /**
     * @internal
     */
    ModifyInstanceFleetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceFleetInput = exports.ModifyInstanceFleetInput || (exports.ModifyInstanceFleetInput = {}));
var PutAutoScalingPolicyInput;
(function (PutAutoScalingPolicyInput) {
    /**
     * @internal
     */
    PutAutoScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAutoScalingPolicyInput = exports.PutAutoScalingPolicyInput || (exports.PutAutoScalingPolicyInput = {}));
var PutAutoScalingPolicyOutput;
(function (PutAutoScalingPolicyOutput) {
    /**
     * @internal
     */
    PutAutoScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAutoScalingPolicyOutput = exports.PutAutoScalingPolicyOutput || (exports.PutAutoScalingPolicyOutput = {}));
var PutBlockPublicAccessConfigurationOutput;
(function (PutBlockPublicAccessConfigurationOutput) {
    /**
     * @internal
     */
    PutBlockPublicAccessConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBlockPublicAccessConfigurationOutput = exports.PutBlockPublicAccessConfigurationOutput || (exports.PutBlockPublicAccessConfigurationOutput = {}));
var PutManagedScalingPolicyInput;
(function (PutManagedScalingPolicyInput) {
    /**
     * @internal
     */
    PutManagedScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutManagedScalingPolicyInput = exports.PutManagedScalingPolicyInput || (exports.PutManagedScalingPolicyInput = {}));
var PutManagedScalingPolicyOutput;
(function (PutManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    PutManagedScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutManagedScalingPolicyOutput = exports.PutManagedScalingPolicyOutput || (exports.PutManagedScalingPolicyOutput = {}));
var RemoveAutoScalingPolicyInput;
(function (RemoveAutoScalingPolicyInput) {
    /**
     * @internal
     */
    RemoveAutoScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAutoScalingPolicyInput = exports.RemoveAutoScalingPolicyInput || (exports.RemoveAutoScalingPolicyInput = {}));
var RemoveAutoScalingPolicyOutput;
(function (RemoveAutoScalingPolicyOutput) {
    /**
     * @internal
     */
    RemoveAutoScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAutoScalingPolicyOutput = exports.RemoveAutoScalingPolicyOutput || (exports.RemoveAutoScalingPolicyOutput = {}));
var RemoveManagedScalingPolicyInput;
(function (RemoveManagedScalingPolicyInput) {
    /**
     * @internal
     */
    RemoveManagedScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveManagedScalingPolicyInput = exports.RemoveManagedScalingPolicyInput || (exports.RemoveManagedScalingPolicyInput = {}));
var RemoveManagedScalingPolicyOutput;
(function (RemoveManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    RemoveManagedScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveManagedScalingPolicyOutput = exports.RemoveManagedScalingPolicyOutput || (exports.RemoveManagedScalingPolicyOutput = {}));
var RemoveTagsInput;
(function (RemoveTagsInput) {
    /**
     * @internal
     */
    RemoveTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsInput = exports.RemoveTagsInput || (exports.RemoveTagsInput = {}));
var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    /**
     * @internal
     */
    RemoveTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsOutput = exports.RemoveTagsOutput || (exports.RemoveTagsOutput = {}));
var SupportedProductConfig;
(function (SupportedProductConfig) {
    /**
     * @internal
     */
    SupportedProductConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SupportedProductConfig = exports.SupportedProductConfig || (exports.SupportedProductConfig = {}));
var RunJobFlowOutput;
(function (RunJobFlowOutput) {
    /**
     * @internal
     */
    RunJobFlowOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunJobFlowOutput = exports.RunJobFlowOutput || (exports.RunJobFlowOutput = {}));
var SetTerminationProtectionInput;
(function (SetTerminationProtectionInput) {
    /**
     * @internal
     */
    SetTerminationProtectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTerminationProtectionInput = exports.SetTerminationProtectionInput || (exports.SetTerminationProtectionInput = {}));
var SetVisibleToAllUsersInput;
(function (SetVisibleToAllUsersInput) {
    /**
     * @internal
     */
    SetVisibleToAllUsersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetVisibleToAllUsersInput = exports.SetVisibleToAllUsersInput || (exports.SetVisibleToAllUsersInput = {}));
var StartNotebookExecutionInput;
(function (StartNotebookExecutionInput) {
    /**
     * @internal
     */
    StartNotebookExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNotebookExecutionInput = exports.StartNotebookExecutionInput || (exports.StartNotebookExecutionInput = {}));
var StartNotebookExecutionOutput;
(function (StartNotebookExecutionOutput) {
    /**
     * @internal
     */
    StartNotebookExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNotebookExecutionOutput = exports.StartNotebookExecutionOutput || (exports.StartNotebookExecutionOutput = {}));
var StopNotebookExecutionInput;
(function (StopNotebookExecutionInput) {
    /**
     * @internal
     */
    StopNotebookExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopNotebookExecutionInput = exports.StopNotebookExecutionInput || (exports.StopNotebookExecutionInput = {}));
var TerminateJobFlowsInput;
(function (TerminateJobFlowsInput) {
    /**
     * @internal
     */
    TerminateJobFlowsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateJobFlowsInput = exports.TerminateJobFlowsInput || (exports.TerminateJobFlowsInput = {}));
var UpdateStudioInput;
(function (UpdateStudioInput) {
    /**
     * @internal
     */
    UpdateStudioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioInput = exports.UpdateStudioInput || (exports.UpdateStudioInput = {}));
var UpdateStudioSessionMappingInput;
(function (UpdateStudioSessionMappingInput) {
    /**
     * @internal
     */
    UpdateStudioSessionMappingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStudioSessionMappingInput = exports.UpdateStudioSessionMappingInput || (exports.UpdateStudioSessionMappingInput = {}));
var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var BlockPublicAccessConfiguration;
(function (BlockPublicAccessConfiguration) {
    /**
     * @internal
     */
    BlockPublicAccessConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockPublicAccessConfiguration = exports.BlockPublicAccessConfiguration || (exports.BlockPublicAccessConfiguration = {}));
var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var InstanceGroupConfig;
(function (InstanceGroupConfig) {
    /**
     * @internal
     */
    InstanceGroupConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupConfig = exports.InstanceGroupConfig || (exports.InstanceGroupConfig = {}));
var InstanceGroupModifyConfig;
(function (InstanceGroupModifyConfig) {
    /**
     * @internal
     */
    InstanceGroupModifyConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroupModifyConfig = exports.InstanceGroupModifyConfig || (exports.InstanceGroupModifyConfig = {}));
var InstanceTypeConfig;
(function (InstanceTypeConfig) {
    /**
     * @internal
     */
    InstanceTypeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTypeConfig = exports.InstanceTypeConfig || (exports.InstanceTypeConfig = {}));
var InstanceTypeSpecification;
(function (InstanceTypeSpecification) {
    /**
     * @internal
     */
    InstanceTypeSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTypeSpecification = exports.InstanceTypeSpecification || (exports.InstanceTypeSpecification = {}));
var DescribeClusterOutput;
(function (DescribeClusterOutput) {
    /**
     * @internal
     */
    DescribeClusterOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterOutput = exports.DescribeClusterOutput || (exports.DescribeClusterOutput = {}));
var GetBlockPublicAccessConfigurationOutput;
(function (GetBlockPublicAccessConfigurationOutput) {
    /**
     * @internal
     */
    GetBlockPublicAccessConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlockPublicAccessConfigurationOutput = exports.GetBlockPublicAccessConfigurationOutput || (exports.GetBlockPublicAccessConfigurationOutput = {}));
var PutBlockPublicAccessConfigurationInput;
(function (PutBlockPublicAccessConfigurationInput) {
    /**
     * @internal
     */
    PutBlockPublicAccessConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBlockPublicAccessConfigurationInput = exports.PutBlockPublicAccessConfigurationInput || (exports.PutBlockPublicAccessConfigurationInput = {}));
var AddInstanceGroupsInput;
(function (AddInstanceGroupsInput) {
    /**
     * @internal
     */
    AddInstanceGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddInstanceGroupsInput = exports.AddInstanceGroupsInput || (exports.AddInstanceGroupsInput = {}));
var InstanceFleet;
(function (InstanceFleet) {
    /**
     * @internal
     */
    InstanceFleet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleet = exports.InstanceFleet || (exports.InstanceFleet = {}));
var InstanceFleetConfig;
(function (InstanceFleetConfig) {
    /**
     * @internal
     */
    InstanceFleetConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFleetConfig = exports.InstanceFleetConfig || (exports.InstanceFleetConfig = {}));
var ModifyInstanceGroupsInput;
(function (ModifyInstanceGroupsInput) {
    /**
     * @internal
     */
    ModifyInstanceGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceGroupsInput = exports.ModifyInstanceGroupsInput || (exports.ModifyInstanceGroupsInput = {}));
var AddInstanceFleetInput;
(function (AddInstanceFleetInput) {
    /**
     * @internal
     */
    AddInstanceFleetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddInstanceFleetInput = exports.AddInstanceFleetInput || (exports.AddInstanceFleetInput = {}));
var InstanceGroup;
(function (InstanceGroup) {
    /**
     * @internal
     */
    InstanceGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceGroup = exports.InstanceGroup || (exports.InstanceGroup = {}));
var ListInstanceFleetsOutput;
(function (ListInstanceFleetsOutput) {
    /**
     * @internal
     */
    ListInstanceFleetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceFleetsOutput = exports.ListInstanceFleetsOutput || (exports.ListInstanceFleetsOutput = {}));
var ListInstanceGroupsOutput;
(function (ListInstanceGroupsOutput) {
    /**
     * @internal
     */
    ListInstanceGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceGroupsOutput = exports.ListInstanceGroupsOutput || (exports.ListInstanceGroupsOutput = {}));
var JobFlowInstancesConfig;
(function (JobFlowInstancesConfig) {
    /**
     * @internal
     */
    JobFlowInstancesConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFlowInstancesConfig = exports.JobFlowInstancesConfig || (exports.JobFlowInstancesConfig = {}));
var RunJobFlowInput;
(function (RunJobFlowInput) {
    /**
     * @internal
     */
    RunJobFlowInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunJobFlowInput = exports.RunJobFlowInput || (exports.RunJobFlowInput = {}));
//# sourceMappingURL=models_0.js.map