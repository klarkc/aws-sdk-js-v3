import { __assign } from "tslib";
export var ActionOnFailure;
(function (ActionOnFailure) {
    ActionOnFailure["CANCEL_AND_WAIT"] = "CANCEL_AND_WAIT";
    ActionOnFailure["CONTINUE"] = "CONTINUE";
    ActionOnFailure["TERMINATE_CLUSTER"] = "TERMINATE_CLUSTER";
    ActionOnFailure["TERMINATE_JOB_FLOW"] = "TERMINATE_JOB_FLOW";
})(ActionOnFailure || (ActionOnFailure = {}));
export var InstanceFleetType;
(function (InstanceFleetType) {
    InstanceFleetType["CORE"] = "CORE";
    InstanceFleetType["MASTER"] = "MASTER";
    InstanceFleetType["TASK"] = "TASK";
})(InstanceFleetType || (InstanceFleetType = {}));
export var VolumeSpecification;
(function (VolumeSpecification) {
    /**
     * @internal
     */
    VolumeSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeSpecification || (VolumeSpecification = {}));
export var EbsBlockDeviceConfig;
(function (EbsBlockDeviceConfig) {
    /**
     * @internal
     */
    EbsBlockDeviceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbsBlockDeviceConfig || (EbsBlockDeviceConfig = {}));
export var EbsConfiguration;
(function (EbsConfiguration) {
    /**
     * @internal
     */
    EbsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbsConfiguration || (EbsConfiguration = {}));
export var OnDemandProvisioningAllocationStrategy;
(function (OnDemandProvisioningAllocationStrategy) {
    OnDemandProvisioningAllocationStrategy["LOWEST_PRICE"] = "lowest-price";
})(OnDemandProvisioningAllocationStrategy || (OnDemandProvisioningAllocationStrategy = {}));
export var OnDemandCapacityReservationPreference;
(function (OnDemandCapacityReservationPreference) {
    OnDemandCapacityReservationPreference["NONE"] = "none";
    OnDemandCapacityReservationPreference["OPEN"] = "open";
})(OnDemandCapacityReservationPreference || (OnDemandCapacityReservationPreference = {}));
export var OnDemandCapacityReservationUsageStrategy;
(function (OnDemandCapacityReservationUsageStrategy) {
    OnDemandCapacityReservationUsageStrategy["USE_CAPACITY_RESERVATIONS_FIRST"] = "use-capacity-reservations-first";
})(OnDemandCapacityReservationUsageStrategy || (OnDemandCapacityReservationUsageStrategy = {}));
export var OnDemandCapacityReservationOptions;
(function (OnDemandCapacityReservationOptions) {
    /**
     * @internal
     */
    OnDemandCapacityReservationOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OnDemandCapacityReservationOptions || (OnDemandCapacityReservationOptions = {}));
export var OnDemandProvisioningSpecification;
(function (OnDemandProvisioningSpecification) {
    /**
     * @internal
     */
    OnDemandProvisioningSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OnDemandProvisioningSpecification || (OnDemandProvisioningSpecification = {}));
export var SpotProvisioningAllocationStrategy;
(function (SpotProvisioningAllocationStrategy) {
    SpotProvisioningAllocationStrategy["CAPACITY_OPTIMIZED"] = "capacity-optimized";
})(SpotProvisioningAllocationStrategy || (SpotProvisioningAllocationStrategy = {}));
export var SpotProvisioningSpecification;
(function (SpotProvisioningSpecification) {
    /**
     * @internal
     */
    SpotProvisioningSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SpotProvisioningSpecification || (SpotProvisioningSpecification = {}));
export var InstanceFleetProvisioningSpecifications;
(function (InstanceFleetProvisioningSpecifications) {
    /**
     * @internal
     */
    InstanceFleetProvisioningSpecifications.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetProvisioningSpecifications || (InstanceFleetProvisioningSpecifications = {}));
export var AddInstanceFleetOutput;
(function (AddInstanceFleetOutput) {
    /**
     * @internal
     */
    AddInstanceFleetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddInstanceFleetOutput || (AddInstanceFleetOutput = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ScalingConstraints;
(function (ScalingConstraints) {
    /**
     * @internal
     */
    ScalingConstraints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScalingConstraints || (ScalingConstraints = {}));
export var MarketType;
(function (MarketType) {
    MarketType["ON_DEMAND"] = "ON_DEMAND";
    MarketType["SPOT"] = "SPOT";
})(MarketType || (MarketType = {}));
export var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["CHANGE_IN_CAPACITY"] = "CHANGE_IN_CAPACITY";
    AdjustmentType["EXACT_CAPACITY"] = "EXACT_CAPACITY";
    AdjustmentType["PERCENT_CHANGE_IN_CAPACITY"] = "PERCENT_CHANGE_IN_CAPACITY";
})(AdjustmentType || (AdjustmentType = {}));
export var SimpleScalingPolicyConfiguration;
(function (SimpleScalingPolicyConfiguration) {
    /**
     * @internal
     */
    SimpleScalingPolicyConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleScalingPolicyConfiguration || (SimpleScalingPolicyConfiguration = {}));
export var ScalingAction;
(function (ScalingAction) {
    /**
     * @internal
     */
    ScalingAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScalingAction || (ScalingAction = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
    ComparisonOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    ComparisonOperator["LESS_THAN"] = "LESS_THAN";
    ComparisonOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
})(ComparisonOperator || (ComparisonOperator = {}));
export var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDimension || (MetricDimension = {}));
export var Statistic;
(function (Statistic) {
    Statistic["AVERAGE"] = "AVERAGE";
    Statistic["MAXIMUM"] = "MAXIMUM";
    Statistic["MINIMUM"] = "MINIMUM";
    Statistic["SAMPLE_COUNT"] = "SAMPLE_COUNT";
    Statistic["SUM"] = "SUM";
})(Statistic || (Statistic = {}));
export var Unit;
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
})(Unit || (Unit = {}));
export var CloudWatchAlarmDefinition;
(function (CloudWatchAlarmDefinition) {
    /**
     * @internal
     */
    CloudWatchAlarmDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchAlarmDefinition || (CloudWatchAlarmDefinition = {}));
export var ScalingTrigger;
(function (ScalingTrigger) {
    /**
     * @internal
     */
    ScalingTrigger.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScalingTrigger || (ScalingTrigger = {}));
export var ScalingRule;
(function (ScalingRule) {
    /**
     * @internal
     */
    ScalingRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScalingRule || (ScalingRule = {}));
export var AutoScalingPolicy;
(function (AutoScalingPolicy) {
    /**
     * @internal
     */
    AutoScalingPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingPolicy || (AutoScalingPolicy = {}));
export var AddInstanceGroupsOutput;
(function (AddInstanceGroupsOutput) {
    /**
     * @internal
     */
    AddInstanceGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddInstanceGroupsOutput || (AddInstanceGroupsOutput = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var KeyValue;
(function (KeyValue) {
    /**
     * @internal
     */
    KeyValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyValue || (KeyValue = {}));
export var HadoopJarStepConfig;
(function (HadoopJarStepConfig) {
    /**
     * @internal
     */
    HadoopJarStepConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HadoopJarStepConfig || (HadoopJarStepConfig = {}));
export var StepConfig;
(function (StepConfig) {
    /**
     * @internal
     */
    StepConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepConfig || (StepConfig = {}));
export var AddJobFlowStepsInput;
(function (AddJobFlowStepsInput) {
    /**
     * @internal
     */
    AddJobFlowStepsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddJobFlowStepsInput || (AddJobFlowStepsInput = {}));
export var AddJobFlowStepsOutput;
(function (AddJobFlowStepsOutput) {
    /**
     * @internal
     */
    AddJobFlowStepsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddJobFlowStepsOutput || (AddJobFlowStepsOutput = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsInput || (AddTagsInput = {}));
export var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsOutput || (AddTagsOutput = {}));
export var Application;
(function (Application) {
    /**
     * @internal
     */
    Application.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Application || (Application = {}));
export var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode || (AuthMode = {}));
export var AutoScalingPolicyState;
(function (AutoScalingPolicyState) {
    AutoScalingPolicyState["ATTACHED"] = "ATTACHED";
    AutoScalingPolicyState["ATTACHING"] = "ATTACHING";
    AutoScalingPolicyState["DETACHED"] = "DETACHED";
    AutoScalingPolicyState["DETACHING"] = "DETACHING";
    AutoScalingPolicyState["FAILED"] = "FAILED";
    AutoScalingPolicyState["PENDING"] = "PENDING";
})(AutoScalingPolicyState || (AutoScalingPolicyState = {}));
export var AutoScalingPolicyStateChangeReasonCode;
(function (AutoScalingPolicyStateChangeReasonCode) {
    AutoScalingPolicyStateChangeReasonCode["CLEANUP_FAILURE"] = "CLEANUP_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["PROVISION_FAILURE"] = "PROVISION_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
})(AutoScalingPolicyStateChangeReasonCode || (AutoScalingPolicyStateChangeReasonCode = {}));
export var AutoScalingPolicyStateChangeReason;
(function (AutoScalingPolicyStateChangeReason) {
    /**
     * @internal
     */
    AutoScalingPolicyStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingPolicyStateChangeReason || (AutoScalingPolicyStateChangeReason = {}));
export var AutoScalingPolicyStatus;
(function (AutoScalingPolicyStatus) {
    /**
     * @internal
     */
    AutoScalingPolicyStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingPolicyStatus || (AutoScalingPolicyStatus = {}));
export var AutoScalingPolicyDescription;
(function (AutoScalingPolicyDescription) {
    /**
     * @internal
     */
    AutoScalingPolicyDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingPolicyDescription || (AutoScalingPolicyDescription = {}));
export var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PortRange || (PortRange = {}));
export var BlockPublicAccessConfigurationMetadata;
(function (BlockPublicAccessConfigurationMetadata) {
    /**
     * @internal
     */
    BlockPublicAccessConfigurationMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockPublicAccessConfigurationMetadata || (BlockPublicAccessConfigurationMetadata = {}));
export var ScriptBootstrapActionConfig;
(function (ScriptBootstrapActionConfig) {
    /**
     * @internal
     */
    ScriptBootstrapActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScriptBootstrapActionConfig || (ScriptBootstrapActionConfig = {}));
export var BootstrapActionConfig;
(function (BootstrapActionConfig) {
    /**
     * @internal
     */
    BootstrapActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BootstrapActionConfig || (BootstrapActionConfig = {}));
export var BootstrapActionDetail;
(function (BootstrapActionDetail) {
    /**
     * @internal
     */
    BootstrapActionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BootstrapActionDetail || (BootstrapActionDetail = {}));
export var CancelStepsInput;
(function (CancelStepsInput) {
    /**
     * @internal
     */
    CancelStepsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelStepsInput || (CancelStepsInput = {}));
export var CancelStepsRequestStatus;
(function (CancelStepsRequestStatus) {
    CancelStepsRequestStatus["FAILED"] = "FAILED";
    CancelStepsRequestStatus["SUBMITTED"] = "SUBMITTED";
})(CancelStepsRequestStatus || (CancelStepsRequestStatus = {}));
export var CancelStepsInfo;
(function (CancelStepsInfo) {
    /**
     * @internal
     */
    CancelStepsInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelStepsInfo || (CancelStepsInfo = {}));
export var CancelStepsOutput;
(function (CancelStepsOutput) {
    /**
     * @internal
     */
    CancelStepsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelStepsOutput || (CancelStepsOutput = {}));
export var Ec2InstanceAttributes;
(function (Ec2InstanceAttributes) {
    /**
     * @internal
     */
    Ec2InstanceAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ec2InstanceAttributes || (Ec2InstanceAttributes = {}));
export var InstanceCollectionType;
(function (InstanceCollectionType) {
    InstanceCollectionType["INSTANCE_FLEET"] = "INSTANCE_FLEET";
    InstanceCollectionType["INSTANCE_GROUP"] = "INSTANCE_GROUP";
})(InstanceCollectionType || (InstanceCollectionType = {}));
export var KerberosAttributes;
(function (KerberosAttributes) {
    /**
     * @internal
     */
    KerberosAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KerberosAttributes || (KerberosAttributes = {}));
export var PlacementGroupStrategy;
(function (PlacementGroupStrategy) {
    PlacementGroupStrategy["CLUSTER"] = "CLUSTER";
    PlacementGroupStrategy["NONE"] = "NONE";
    PlacementGroupStrategy["PARTITION"] = "PARTITION";
    PlacementGroupStrategy["SPREAD"] = "SPREAD";
})(PlacementGroupStrategy || (PlacementGroupStrategy = {}));
export var PlacementGroupConfig;
(function (PlacementGroupConfig) {
    /**
     * @internal
     */
    PlacementGroupConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacementGroupConfig || (PlacementGroupConfig = {}));
export var RepoUpgradeOnBoot;
(function (RepoUpgradeOnBoot) {
    RepoUpgradeOnBoot["NONE"] = "NONE";
    RepoUpgradeOnBoot["SECURITY"] = "SECURITY";
})(RepoUpgradeOnBoot || (RepoUpgradeOnBoot = {}));
export var ScaleDownBehavior;
(function (ScaleDownBehavior) {
    ScaleDownBehavior["TERMINATE_AT_INSTANCE_HOUR"] = "TERMINATE_AT_INSTANCE_HOUR";
    ScaleDownBehavior["TERMINATE_AT_TASK_COMPLETION"] = "TERMINATE_AT_TASK_COMPLETION";
})(ScaleDownBehavior || (ScaleDownBehavior = {}));
export var ClusterState;
(function (ClusterState) {
    ClusterState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    ClusterState["RUNNING"] = "RUNNING";
    ClusterState["STARTING"] = "STARTING";
    ClusterState["TERMINATED"] = "TERMINATED";
    ClusterState["TERMINATED_WITH_ERRORS"] = "TERMINATED_WITH_ERRORS";
    ClusterState["TERMINATING"] = "TERMINATING";
    ClusterState["WAITING"] = "WAITING";
})(ClusterState || (ClusterState = {}));
export var ClusterStateChangeReasonCode;
(function (ClusterStateChangeReasonCode) {
    ClusterStateChangeReasonCode["ALL_STEPS_COMPLETED"] = "ALL_STEPS_COMPLETED";
    ClusterStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FLEET_TIMEOUT"] = "INSTANCE_FLEET_TIMEOUT";
    ClusterStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ClusterStateChangeReasonCode["STEP_FAILURE"] = "STEP_FAILURE";
    ClusterStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
    ClusterStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(ClusterStateChangeReasonCode || (ClusterStateChangeReasonCode = {}));
export var ClusterStateChangeReason;
(function (ClusterStateChangeReason) {
    /**
     * @internal
     */
    ClusterStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterStateChangeReason || (ClusterStateChangeReason = {}));
export var ClusterTimeline;
(function (ClusterTimeline) {
    /**
     * @internal
     */
    ClusterTimeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterTimeline || (ClusterTimeline = {}));
export var ClusterStatus;
(function (ClusterStatus) {
    /**
     * @internal
     */
    ClusterStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterStatus || (ClusterStatus = {}));
export var ClusterSummary;
(function (ClusterSummary) {
    /**
     * @internal
     */
    ClusterSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterSummary || (ClusterSummary = {}));
export var Command;
(function (Command) {
    /**
     * @internal
     */
    Command.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Command || (Command = {}));
export var ComputeLimitsUnitType;
(function (ComputeLimitsUnitType) {
    ComputeLimitsUnitType["InstanceFleetUnits"] = "InstanceFleetUnits";
    ComputeLimitsUnitType["Instances"] = "Instances";
    ComputeLimitsUnitType["VCPU"] = "VCPU";
})(ComputeLimitsUnitType || (ComputeLimitsUnitType = {}));
export var ComputeLimits;
(function (ComputeLimits) {
    /**
     * @internal
     */
    ComputeLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComputeLimits || (ComputeLimits = {}));
export var CreateSecurityConfigurationInput;
(function (CreateSecurityConfigurationInput) {
    /**
     * @internal
     */
    CreateSecurityConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSecurityConfigurationInput || (CreateSecurityConfigurationInput = {}));
export var CreateSecurityConfigurationOutput;
(function (CreateSecurityConfigurationOutput) {
    /**
     * @internal
     */
    CreateSecurityConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSecurityConfigurationOutput || (CreateSecurityConfigurationOutput = {}));
export var CreateStudioInput;
(function (CreateStudioInput) {
    /**
     * @internal
     */
    CreateStudioInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioInput || (CreateStudioInput = {}));
export var CreateStudioOutput;
(function (CreateStudioOutput) {
    /**
     * @internal
     */
    CreateStudioOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioOutput || (CreateStudioOutput = {}));
export var IdentityType;
(function (IdentityType) {
    IdentityType["GROUP"] = "GROUP";
    IdentityType["USER"] = "USER";
})(IdentityType || (IdentityType = {}));
export var CreateStudioSessionMappingInput;
(function (CreateStudioSessionMappingInput) {
    /**
     * @internal
     */
    CreateStudioSessionMappingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStudioSessionMappingInput || (CreateStudioSessionMappingInput = {}));
export var DeleteSecurityConfigurationInput;
(function (DeleteSecurityConfigurationInput) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSecurityConfigurationInput || (DeleteSecurityConfigurationInput = {}));
export var DeleteSecurityConfigurationOutput;
(function (DeleteSecurityConfigurationOutput) {
    /**
     * @internal
     */
    DeleteSecurityConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSecurityConfigurationOutput || (DeleteSecurityConfigurationOutput = {}));
export var DeleteStudioInput;
(function (DeleteStudioInput) {
    /**
     * @internal
     */
    DeleteStudioInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioInput || (DeleteStudioInput = {}));
export var DeleteStudioSessionMappingInput;
(function (DeleteStudioSessionMappingInput) {
    /**
     * @internal
     */
    DeleteStudioSessionMappingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStudioSessionMappingInput || (DeleteStudioSessionMappingInput = {}));
export var DescribeClusterInput;
(function (DescribeClusterInput) {
    /**
     * @internal
     */
    DescribeClusterInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterInput || (DescribeClusterInput = {}));
export var JobFlowExecutionState;
(function (JobFlowExecutionState) {
    JobFlowExecutionState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    JobFlowExecutionState["COMPLETED"] = "COMPLETED";
    JobFlowExecutionState["FAILED"] = "FAILED";
    JobFlowExecutionState["RUNNING"] = "RUNNING";
    JobFlowExecutionState["SHUTTING_DOWN"] = "SHUTTING_DOWN";
    JobFlowExecutionState["STARTING"] = "STARTING";
    JobFlowExecutionState["TERMINATED"] = "TERMINATED";
    JobFlowExecutionState["WAITING"] = "WAITING";
})(JobFlowExecutionState || (JobFlowExecutionState = {}));
export var DescribeJobFlowsInput;
(function (DescribeJobFlowsInput) {
    /**
     * @internal
     */
    DescribeJobFlowsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobFlowsInput || (DescribeJobFlowsInput = {}));
export var JobFlowExecutionStatusDetail;
(function (JobFlowExecutionStatusDetail) {
    /**
     * @internal
     */
    JobFlowExecutionStatusDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFlowExecutionStatusDetail || (JobFlowExecutionStatusDetail = {}));
export var InstanceGroupState;
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
})(InstanceGroupState || (InstanceGroupState = {}));
export var InstanceGroupDetail;
(function (InstanceGroupDetail) {
    /**
     * @internal
     */
    InstanceGroupDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupDetail || (InstanceGroupDetail = {}));
export var PlacementType;
(function (PlacementType) {
    /**
     * @internal
     */
    PlacementType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacementType || (PlacementType = {}));
export var JobFlowInstancesDetail;
(function (JobFlowInstancesDetail) {
    /**
     * @internal
     */
    JobFlowInstancesDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFlowInstancesDetail || (JobFlowInstancesDetail = {}));
export var StepExecutionStatusDetail;
(function (StepExecutionStatusDetail) {
    /**
     * @internal
     */
    StepExecutionStatusDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepExecutionStatusDetail || (StepExecutionStatusDetail = {}));
export var StepDetail;
(function (StepDetail) {
    /**
     * @internal
     */
    StepDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepDetail || (StepDetail = {}));
export var JobFlowDetail;
(function (JobFlowDetail) {
    /**
     * @internal
     */
    JobFlowDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFlowDetail || (JobFlowDetail = {}));
export var DescribeJobFlowsOutput;
(function (DescribeJobFlowsOutput) {
    /**
     * @internal
     */
    DescribeJobFlowsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobFlowsOutput || (DescribeJobFlowsOutput = {}));
export var DescribeNotebookExecutionInput;
(function (DescribeNotebookExecutionInput) {
    /**
     * @internal
     */
    DescribeNotebookExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookExecutionInput || (DescribeNotebookExecutionInput = {}));
export var ExecutionEngineType;
(function (ExecutionEngineType) {
    ExecutionEngineType["EMR"] = "EMR";
})(ExecutionEngineType || (ExecutionEngineType = {}));
export var ExecutionEngineConfig;
(function (ExecutionEngineConfig) {
    /**
     * @internal
     */
    ExecutionEngineConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionEngineConfig || (ExecutionEngineConfig = {}));
export var NotebookExecutionStatus;
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
})(NotebookExecutionStatus || (NotebookExecutionStatus = {}));
export var NotebookExecution;
(function (NotebookExecution) {
    /**
     * @internal
     */
    NotebookExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotebookExecution || (NotebookExecution = {}));
export var DescribeNotebookExecutionOutput;
(function (DescribeNotebookExecutionOutput) {
    /**
     * @internal
     */
    DescribeNotebookExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotebookExecutionOutput || (DescribeNotebookExecutionOutput = {}));
export var DescribeSecurityConfigurationInput;
(function (DescribeSecurityConfigurationInput) {
    /**
     * @internal
     */
    DescribeSecurityConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSecurityConfigurationInput || (DescribeSecurityConfigurationInput = {}));
export var DescribeSecurityConfigurationOutput;
(function (DescribeSecurityConfigurationOutput) {
    /**
     * @internal
     */
    DescribeSecurityConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSecurityConfigurationOutput || (DescribeSecurityConfigurationOutput = {}));
export var DescribeStepInput;
(function (DescribeStepInput) {
    /**
     * @internal
     */
    DescribeStepInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStepInput || (DescribeStepInput = {}));
export var HadoopStepConfig;
(function (HadoopStepConfig) {
    /**
     * @internal
     */
    HadoopStepConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HadoopStepConfig || (HadoopStepConfig = {}));
export var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureDetails || (FailureDetails = {}));
export var StepState;
(function (StepState) {
    StepState["CANCELLED"] = "CANCELLED";
    StepState["CANCEL_PENDING"] = "CANCEL_PENDING";
    StepState["COMPLETED"] = "COMPLETED";
    StepState["FAILED"] = "FAILED";
    StepState["INTERRUPTED"] = "INTERRUPTED";
    StepState["PENDING"] = "PENDING";
    StepState["RUNNING"] = "RUNNING";
})(StepState || (StepState = {}));
export var StepStateChangeReason;
(function (StepStateChangeReason) {
    /**
     * @internal
     */
    StepStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepStateChangeReason || (StepStateChangeReason = {}));
export var StepTimeline;
(function (StepTimeline) {
    /**
     * @internal
     */
    StepTimeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepTimeline || (StepTimeline = {}));
export var StepStatus;
(function (StepStatus) {
    /**
     * @internal
     */
    StepStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepStatus || (StepStatus = {}));
export var Step;
(function (Step) {
    /**
     * @internal
     */
    Step.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Step || (Step = {}));
export var DescribeStepOutput;
(function (DescribeStepOutput) {
    /**
     * @internal
     */
    DescribeStepOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStepOutput || (DescribeStepOutput = {}));
export var DescribeStudioInput;
(function (DescribeStudioInput) {
    /**
     * @internal
     */
    DescribeStudioInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStudioInput || (DescribeStudioInput = {}));
export var Studio;
(function (Studio) {
    /**
     * @internal
     */
    Studio.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Studio || (Studio = {}));
export var DescribeStudioOutput;
(function (DescribeStudioOutput) {
    /**
     * @internal
     */
    DescribeStudioOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStudioOutput || (DescribeStudioOutput = {}));
export var EbsBlockDevice;
(function (EbsBlockDevice) {
    /**
     * @internal
     */
    EbsBlockDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbsBlockDevice || (EbsBlockDevice = {}));
export var EbsVolume;
(function (EbsVolume) {
    /**
     * @internal
     */
    EbsVolume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbsVolume || (EbsVolume = {}));
export var GetBlockPublicAccessConfigurationInput;
(function (GetBlockPublicAccessConfigurationInput) {
    /**
     * @internal
     */
    GetBlockPublicAccessConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlockPublicAccessConfigurationInput || (GetBlockPublicAccessConfigurationInput = {}));
export var GetManagedScalingPolicyInput;
(function (GetManagedScalingPolicyInput) {
    /**
     * @internal
     */
    GetManagedScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetManagedScalingPolicyInput || (GetManagedScalingPolicyInput = {}));
export var ManagedScalingPolicy;
(function (ManagedScalingPolicy) {
    /**
     * @internal
     */
    ManagedScalingPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedScalingPolicy || (ManagedScalingPolicy = {}));
export var GetManagedScalingPolicyOutput;
(function (GetManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    GetManagedScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetManagedScalingPolicyOutput || (GetManagedScalingPolicyOutput = {}));
export var GetStudioSessionMappingInput;
(function (GetStudioSessionMappingInput) {
    /**
     * @internal
     */
    GetStudioSessionMappingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioSessionMappingInput || (GetStudioSessionMappingInput = {}));
export var SessionMappingDetail;
(function (SessionMappingDetail) {
    /**
     * @internal
     */
    SessionMappingDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionMappingDetail || (SessionMappingDetail = {}));
export var GetStudioSessionMappingOutput;
(function (GetStudioSessionMappingOutput) {
    /**
     * @internal
     */
    GetStudioSessionMappingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStudioSessionMappingOutput || (GetStudioSessionMappingOutput = {}));
export var ListBootstrapActionsInput;
(function (ListBootstrapActionsInput) {
    /**
     * @internal
     */
    ListBootstrapActionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBootstrapActionsInput || (ListBootstrapActionsInput = {}));
export var ListBootstrapActionsOutput;
(function (ListBootstrapActionsOutput) {
    /**
     * @internal
     */
    ListBootstrapActionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBootstrapActionsOutput || (ListBootstrapActionsOutput = {}));
export var ListClustersInput;
(function (ListClustersInput) {
    /**
     * @internal
     */
    ListClustersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersInput || (ListClustersInput = {}));
export var ListClustersOutput;
(function (ListClustersOutput) {
    /**
     * @internal
     */
    ListClustersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersOutput || (ListClustersOutput = {}));
export var ListInstanceFleetsInput;
(function (ListInstanceFleetsInput) {
    /**
     * @internal
     */
    ListInstanceFleetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceFleetsInput || (ListInstanceFleetsInput = {}));
export var InstanceFleetState;
(function (InstanceFleetState) {
    InstanceFleetState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceFleetState["PROVISIONING"] = "PROVISIONING";
    InstanceFleetState["RESIZING"] = "RESIZING";
    InstanceFleetState["RUNNING"] = "RUNNING";
    InstanceFleetState["SUSPENDED"] = "SUSPENDED";
    InstanceFleetState["TERMINATED"] = "TERMINATED";
    InstanceFleetState["TERMINATING"] = "TERMINATING";
})(InstanceFleetState || (InstanceFleetState = {}));
export var InstanceFleetStateChangeReasonCode;
(function (InstanceFleetStateChangeReasonCode) {
    InstanceFleetStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceFleetStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceFleetStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceFleetStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceFleetStateChangeReasonCode || (InstanceFleetStateChangeReasonCode = {}));
export var InstanceFleetStateChangeReason;
(function (InstanceFleetStateChangeReason) {
    /**
     * @internal
     */
    InstanceFleetStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetStateChangeReason || (InstanceFleetStateChangeReason = {}));
export var InstanceFleetTimeline;
(function (InstanceFleetTimeline) {
    /**
     * @internal
     */
    InstanceFleetTimeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetTimeline || (InstanceFleetTimeline = {}));
export var InstanceFleetStatus;
(function (InstanceFleetStatus) {
    /**
     * @internal
     */
    InstanceFleetStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetStatus || (InstanceFleetStatus = {}));
export var ListInstanceGroupsInput;
(function (ListInstanceGroupsInput) {
    /**
     * @internal
     */
    ListInstanceGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceGroupsInput || (ListInstanceGroupsInput = {}));
export var InstanceGroupType;
(function (InstanceGroupType) {
    InstanceGroupType["CORE"] = "CORE";
    InstanceGroupType["MASTER"] = "MASTER";
    InstanceGroupType["TASK"] = "TASK";
})(InstanceGroupType || (InstanceGroupType = {}));
export var InstanceResizePolicy;
(function (InstanceResizePolicy) {
    /**
     * @internal
     */
    InstanceResizePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceResizePolicy || (InstanceResizePolicy = {}));
export var ShrinkPolicy;
(function (ShrinkPolicy) {
    /**
     * @internal
     */
    ShrinkPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShrinkPolicy || (ShrinkPolicy = {}));
export var InstanceGroupStateChangeReasonCode;
(function (InstanceGroupStateChangeReasonCode) {
    InstanceGroupStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceGroupStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceGroupStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceGroupStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceGroupStateChangeReasonCode || (InstanceGroupStateChangeReasonCode = {}));
export var InstanceGroupStateChangeReason;
(function (InstanceGroupStateChangeReason) {
    /**
     * @internal
     */
    InstanceGroupStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupStateChangeReason || (InstanceGroupStateChangeReason = {}));
export var InstanceGroupTimeline;
(function (InstanceGroupTimeline) {
    /**
     * @internal
     */
    InstanceGroupTimeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupTimeline || (InstanceGroupTimeline = {}));
export var InstanceGroupStatus;
(function (InstanceGroupStatus) {
    /**
     * @internal
     */
    InstanceGroupStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupStatus || (InstanceGroupStatus = {}));
export var InstanceState;
(function (InstanceState) {
    InstanceState["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    InstanceState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceState["PROVISIONING"] = "PROVISIONING";
    InstanceState["RUNNING"] = "RUNNING";
    InstanceState["TERMINATED"] = "TERMINATED";
})(InstanceState || (InstanceState = {}));
export var ListInstancesInput;
(function (ListInstancesInput) {
    /**
     * @internal
     */
    ListInstancesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstancesInput || (ListInstancesInput = {}));
export var InstanceStateChangeReasonCode;
(function (InstanceStateChangeReasonCode) {
    InstanceStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    InstanceStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceStateChangeReasonCode || (InstanceStateChangeReasonCode = {}));
export var InstanceStateChangeReason;
(function (InstanceStateChangeReason) {
    /**
     * @internal
     */
    InstanceStateChangeReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceStateChangeReason || (InstanceStateChangeReason = {}));
export var InstanceTimeline;
(function (InstanceTimeline) {
    /**
     * @internal
     */
    InstanceTimeline.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceTimeline || (InstanceTimeline = {}));
export var InstanceStatus;
(function (InstanceStatus) {
    /**
     * @internal
     */
    InstanceStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceStatus || (InstanceStatus = {}));
export var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Instance || (Instance = {}));
export var ListInstancesOutput;
(function (ListInstancesOutput) {
    /**
     * @internal
     */
    ListInstancesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstancesOutput || (ListInstancesOutput = {}));
export var ListNotebookExecutionsInput;
(function (ListNotebookExecutionsInput) {
    /**
     * @internal
     */
    ListNotebookExecutionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNotebookExecutionsInput || (ListNotebookExecutionsInput = {}));
export var NotebookExecutionSummary;
(function (NotebookExecutionSummary) {
    /**
     * @internal
     */
    NotebookExecutionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotebookExecutionSummary || (NotebookExecutionSummary = {}));
export var ListNotebookExecutionsOutput;
(function (ListNotebookExecutionsOutput) {
    /**
     * @internal
     */
    ListNotebookExecutionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNotebookExecutionsOutput || (ListNotebookExecutionsOutput = {}));
export var ListSecurityConfigurationsInput;
(function (ListSecurityConfigurationsInput) {
    /**
     * @internal
     */
    ListSecurityConfigurationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityConfigurationsInput || (ListSecurityConfigurationsInput = {}));
export var SecurityConfigurationSummary;
(function (SecurityConfigurationSummary) {
    /**
     * @internal
     */
    SecurityConfigurationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityConfigurationSummary || (SecurityConfigurationSummary = {}));
export var ListSecurityConfigurationsOutput;
(function (ListSecurityConfigurationsOutput) {
    /**
     * @internal
     */
    ListSecurityConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityConfigurationsOutput || (ListSecurityConfigurationsOutput = {}));
export var ListStepsInput;
(function (ListStepsInput) {
    /**
     * @internal
     */
    ListStepsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStepsInput || (ListStepsInput = {}));
export var StepSummary;
(function (StepSummary) {
    /**
     * @internal
     */
    StepSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepSummary || (StepSummary = {}));
export var ListStepsOutput;
(function (ListStepsOutput) {
    /**
     * @internal
     */
    ListStepsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStepsOutput || (ListStepsOutput = {}));
export var ListStudiosInput;
(function (ListStudiosInput) {
    /**
     * @internal
     */
    ListStudiosInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudiosInput || (ListStudiosInput = {}));
export var StudioSummary;
(function (StudioSummary) {
    /**
     * @internal
     */
    StudioSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StudioSummary || (StudioSummary = {}));
export var ListStudiosOutput;
(function (ListStudiosOutput) {
    /**
     * @internal
     */
    ListStudiosOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudiosOutput || (ListStudiosOutput = {}));
export var ListStudioSessionMappingsInput;
(function (ListStudioSessionMappingsInput) {
    /**
     * @internal
     */
    ListStudioSessionMappingsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioSessionMappingsInput || (ListStudioSessionMappingsInput = {}));
export var SessionMappingSummary;
(function (SessionMappingSummary) {
    /**
     * @internal
     */
    SessionMappingSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionMappingSummary || (SessionMappingSummary = {}));
export var ListStudioSessionMappingsOutput;
(function (ListStudioSessionMappingsOutput) {
    /**
     * @internal
     */
    ListStudioSessionMappingsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStudioSessionMappingsOutput || (ListStudioSessionMappingsOutput = {}));
export var ModifyClusterInput;
(function (ModifyClusterInput) {
    /**
     * @internal
     */
    ModifyClusterInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyClusterInput || (ModifyClusterInput = {}));
export var ModifyClusterOutput;
(function (ModifyClusterOutput) {
    /**
     * @internal
     */
    ModifyClusterOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyClusterOutput || (ModifyClusterOutput = {}));
export var InstanceFleetModifyConfig;
(function (InstanceFleetModifyConfig) {
    /**
     * @internal
     */
    InstanceFleetModifyConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetModifyConfig || (InstanceFleetModifyConfig = {}));
export var ModifyInstanceFleetInput;
(function (ModifyInstanceFleetInput) {
    /**
     * @internal
     */
    ModifyInstanceFleetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyInstanceFleetInput || (ModifyInstanceFleetInput = {}));
export var PutAutoScalingPolicyInput;
(function (PutAutoScalingPolicyInput) {
    /**
     * @internal
     */
    PutAutoScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAutoScalingPolicyInput || (PutAutoScalingPolicyInput = {}));
export var PutAutoScalingPolicyOutput;
(function (PutAutoScalingPolicyOutput) {
    /**
     * @internal
     */
    PutAutoScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAutoScalingPolicyOutput || (PutAutoScalingPolicyOutput = {}));
export var PutBlockPublicAccessConfigurationOutput;
(function (PutBlockPublicAccessConfigurationOutput) {
    /**
     * @internal
     */
    PutBlockPublicAccessConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBlockPublicAccessConfigurationOutput || (PutBlockPublicAccessConfigurationOutput = {}));
export var PutManagedScalingPolicyInput;
(function (PutManagedScalingPolicyInput) {
    /**
     * @internal
     */
    PutManagedScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutManagedScalingPolicyInput || (PutManagedScalingPolicyInput = {}));
export var PutManagedScalingPolicyOutput;
(function (PutManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    PutManagedScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutManagedScalingPolicyOutput || (PutManagedScalingPolicyOutput = {}));
export var RemoveAutoScalingPolicyInput;
(function (RemoveAutoScalingPolicyInput) {
    /**
     * @internal
     */
    RemoveAutoScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAutoScalingPolicyInput || (RemoveAutoScalingPolicyInput = {}));
export var RemoveAutoScalingPolicyOutput;
(function (RemoveAutoScalingPolicyOutput) {
    /**
     * @internal
     */
    RemoveAutoScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAutoScalingPolicyOutput || (RemoveAutoScalingPolicyOutput = {}));
export var RemoveManagedScalingPolicyInput;
(function (RemoveManagedScalingPolicyInput) {
    /**
     * @internal
     */
    RemoveManagedScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveManagedScalingPolicyInput || (RemoveManagedScalingPolicyInput = {}));
export var RemoveManagedScalingPolicyOutput;
(function (RemoveManagedScalingPolicyOutput) {
    /**
     * @internal
     */
    RemoveManagedScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveManagedScalingPolicyOutput || (RemoveManagedScalingPolicyOutput = {}));
export var RemoveTagsInput;
(function (RemoveTagsInput) {
    /**
     * @internal
     */
    RemoveTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsInput || (RemoveTagsInput = {}));
export var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    /**
     * @internal
     */
    RemoveTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsOutput || (RemoveTagsOutput = {}));
export var SupportedProductConfig;
(function (SupportedProductConfig) {
    /**
     * @internal
     */
    SupportedProductConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SupportedProductConfig || (SupportedProductConfig = {}));
export var RunJobFlowOutput;
(function (RunJobFlowOutput) {
    /**
     * @internal
     */
    RunJobFlowOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunJobFlowOutput || (RunJobFlowOutput = {}));
export var SetTerminationProtectionInput;
(function (SetTerminationProtectionInput) {
    /**
     * @internal
     */
    SetTerminationProtectionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetTerminationProtectionInput || (SetTerminationProtectionInput = {}));
export var SetVisibleToAllUsersInput;
(function (SetVisibleToAllUsersInput) {
    /**
     * @internal
     */
    SetVisibleToAllUsersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetVisibleToAllUsersInput || (SetVisibleToAllUsersInput = {}));
export var StartNotebookExecutionInput;
(function (StartNotebookExecutionInput) {
    /**
     * @internal
     */
    StartNotebookExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartNotebookExecutionInput || (StartNotebookExecutionInput = {}));
export var StartNotebookExecutionOutput;
(function (StartNotebookExecutionOutput) {
    /**
     * @internal
     */
    StartNotebookExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartNotebookExecutionOutput || (StartNotebookExecutionOutput = {}));
export var StopNotebookExecutionInput;
(function (StopNotebookExecutionInput) {
    /**
     * @internal
     */
    StopNotebookExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopNotebookExecutionInput || (StopNotebookExecutionInput = {}));
export var TerminateJobFlowsInput;
(function (TerminateJobFlowsInput) {
    /**
     * @internal
     */
    TerminateJobFlowsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateJobFlowsInput || (TerminateJobFlowsInput = {}));
export var UpdateStudioInput;
(function (UpdateStudioInput) {
    /**
     * @internal
     */
    UpdateStudioInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioInput || (UpdateStudioInput = {}));
export var UpdateStudioSessionMappingInput;
(function (UpdateStudioSessionMappingInput) {
    /**
     * @internal
     */
    UpdateStudioSessionMappingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStudioSessionMappingInput || (UpdateStudioSessionMappingInput = {}));
export var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Configuration || (Configuration = {}));
export var BlockPublicAccessConfiguration;
(function (BlockPublicAccessConfiguration) {
    /**
     * @internal
     */
    BlockPublicAccessConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockPublicAccessConfiguration || (BlockPublicAccessConfiguration = {}));
export var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Cluster || (Cluster = {}));
export var InstanceGroupConfig;
(function (InstanceGroupConfig) {
    /**
     * @internal
     */
    InstanceGroupConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupConfig || (InstanceGroupConfig = {}));
export var InstanceGroupModifyConfig;
(function (InstanceGroupModifyConfig) {
    /**
     * @internal
     */
    InstanceGroupModifyConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroupModifyConfig || (InstanceGroupModifyConfig = {}));
export var InstanceTypeConfig;
(function (InstanceTypeConfig) {
    /**
     * @internal
     */
    InstanceTypeConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceTypeConfig || (InstanceTypeConfig = {}));
export var InstanceTypeSpecification;
(function (InstanceTypeSpecification) {
    /**
     * @internal
     */
    InstanceTypeSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceTypeSpecification || (InstanceTypeSpecification = {}));
export var DescribeClusterOutput;
(function (DescribeClusterOutput) {
    /**
     * @internal
     */
    DescribeClusterOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterOutput || (DescribeClusterOutput = {}));
export var GetBlockPublicAccessConfigurationOutput;
(function (GetBlockPublicAccessConfigurationOutput) {
    /**
     * @internal
     */
    GetBlockPublicAccessConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlockPublicAccessConfigurationOutput || (GetBlockPublicAccessConfigurationOutput = {}));
export var PutBlockPublicAccessConfigurationInput;
(function (PutBlockPublicAccessConfigurationInput) {
    /**
     * @internal
     */
    PutBlockPublicAccessConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBlockPublicAccessConfigurationInput || (PutBlockPublicAccessConfigurationInput = {}));
export var AddInstanceGroupsInput;
(function (AddInstanceGroupsInput) {
    /**
     * @internal
     */
    AddInstanceGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddInstanceGroupsInput || (AddInstanceGroupsInput = {}));
export var InstanceFleet;
(function (InstanceFleet) {
    /**
     * @internal
     */
    InstanceFleet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleet || (InstanceFleet = {}));
export var InstanceFleetConfig;
(function (InstanceFleetConfig) {
    /**
     * @internal
     */
    InstanceFleetConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceFleetConfig || (InstanceFleetConfig = {}));
export var ModifyInstanceGroupsInput;
(function (ModifyInstanceGroupsInput) {
    /**
     * @internal
     */
    ModifyInstanceGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyInstanceGroupsInput || (ModifyInstanceGroupsInput = {}));
export var AddInstanceFleetInput;
(function (AddInstanceFleetInput) {
    /**
     * @internal
     */
    AddInstanceFleetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddInstanceFleetInput || (AddInstanceFleetInput = {}));
export var InstanceGroup;
(function (InstanceGroup) {
    /**
     * @internal
     */
    InstanceGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceGroup || (InstanceGroup = {}));
export var ListInstanceFleetsOutput;
(function (ListInstanceFleetsOutput) {
    /**
     * @internal
     */
    ListInstanceFleetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceFleetsOutput || (ListInstanceFleetsOutput = {}));
export var ListInstanceGroupsOutput;
(function (ListInstanceGroupsOutput) {
    /**
     * @internal
     */
    ListInstanceGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceGroupsOutput || (ListInstanceGroupsOutput = {}));
export var JobFlowInstancesConfig;
(function (JobFlowInstancesConfig) {
    /**
     * @internal
     */
    JobFlowInstancesConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFlowInstancesConfig || (JobFlowInstancesConfig = {}));
export var RunJobFlowInput;
(function (RunJobFlowInput) {
    /**
     * @internal
     */
    RunJobFlowInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunJobFlowInput || (RunJobFlowInput = {}));
//# sourceMappingURL=models_0.js.map