"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReshardingStatus = exports.SlotMigration = exports.PendingLogDeliveryConfiguration = exports.PendingAutomaticFailoverStatus = exports.NodeGroup = exports.NodeGroupMember = exports.MultiAZStatus = exports.LogDeliveryConfiguration = exports.LogDeliveryConfigurationStatus = exports.LogType = exports.LogFormat = exports.DestinationType = exports.DestinationDetails = exports.KinesisFirehoseDestinationDetails = exports.CloudWatchLogsDestinationDetails = exports.GlobalReplicationGroupInfo = exports.Endpoint = exports.AutomaticFailoverStatus = exports.CompleteMigrationMessage = exports.BatchStopUpdateActionMessage = exports.UpdateActionResultsMessage = exports.UnprocessedUpdateAction = exports.ProcessedUpdateAction = exports.UpdateActionStatus = exports.ServiceUpdateNotFoundFault = exports.BatchApplyUpdateActionMessage = exports.InvalidParameterValueException = exports.InvalidParameterCombinationException = exports.InvalidCacheSecurityGroupStateFault = exports.AuthorizeCacheSecurityGroupIngressResult = exports.CacheSecurityGroup = exports.EC2SecurityGroup = exports.AuthorizeCacheSecurityGroupIngressMessage = exports.AuthorizationAlreadyExistsFault = exports.AllowedNodeTypeModificationsMessage = exports.UserNotFoundFault = exports.UserGroupNotFoundFault = exports.TagQuotaPerResourceExceeded = exports.TagListMessage = exports.SnapshotNotFoundFault = exports.ReservedCacheNodeNotFoundFault = exports.ReplicationGroupNotFoundFault = exports.InvalidReplicationGroupStateFault = exports.InvalidARNFault = exports.CacheSubnetGroupNotFoundFault = exports.CacheSecurityGroupNotFoundFault = exports.CacheParameterGroupNotFoundFault = exports.CacheClusterNotFoundFault = exports.AddTagsToResourceMessage = exports.Tag = void 0;
exports.CreateCacheSubnetGroupResult = exports.CacheSubnetGroup = exports.Subnet = exports.SubnetOutpost = exports.AvailabilityZone = exports.CreateCacheSubnetGroupMessage = exports.CacheSubnetQuotaExceededFault = exports.CacheSubnetGroupQuotaExceededFault = exports.CacheSubnetGroupAlreadyExistsFault = exports.CreateCacheSecurityGroupResult = exports.CreateCacheSecurityGroupMessage = exports.CacheSecurityGroupQuotaExceededFault = exports.CacheSecurityGroupAlreadyExistsFault = exports.InvalidCacheParameterGroupStateFault = exports.CreateCacheParameterGroupResult = exports.CacheParameterGroup = exports.CreateCacheParameterGroupMessage = exports.CacheParameterGroupQuotaExceededFault = exports.CacheParameterGroupAlreadyExistsFault = exports.NodeQuotaForCustomerExceededFault = exports.NodeQuotaForClusterExceededFault = exports.InvalidVPCNetworkStateFault = exports.InsufficientCacheClusterCapacityFault = exports.CreateCacheClusterResult = exports.CacheCluster = exports.SecurityGroupMembership = exports.PendingModifiedValues = exports.NotificationConfiguration = exports.CacheSecurityGroupMembership = exports.CacheParameterGroupStatus = exports.CacheNode = exports.CreateCacheClusterMessage = exports.OutpostMode = exports.LogDeliveryConfigurationRequest = exports.AZMode = exports.ClusterQuotaForCustomerExceededFault = exports.CacheClusterAlreadyExistsFault = exports.SnapshotQuotaExceededFault = exports.SnapshotAlreadyExistsFault = exports.InvalidSnapshotStateFault = exports.CopySnapshotResult = exports.Snapshot = exports.NodeSnapshot = exports.NodeGroupConfiguration = exports.CopySnapshotMessage = exports.ReplicationGroupNotUnderMigrationFault = exports.CompleteMigrationResponse = exports.ReplicationGroup = exports.ReplicationGroupPendingModifiedValues = exports.UserGroupsUpdateStatus = void 0;
exports.DeleteSnapshotMessage = exports.DeleteReplicationGroupResult = exports.DeleteReplicationGroupMessage = exports.DeleteGlobalReplicationGroupResult = exports.DeleteGlobalReplicationGroupMessage = exports.DeleteCacheSubnetGroupMessage = exports.CacheSubnetGroupInUse = exports.DeleteCacheSecurityGroupMessage = exports.DeleteCacheParameterGroupMessage = exports.DeleteCacheClusterResult = exports.DeleteCacheClusterMessage = exports.NoOperationFault = exports.DecreaseReplicaCountResult = exports.DecreaseReplicaCountMessage = exports.ConfigureShard = exports.DecreaseNodeGroupsInGlobalReplicationGroupResult = exports.DecreaseNodeGroupsInGlobalReplicationGroupMessage = exports.UserGroupQuotaExceededFault = exports.UserGroupAlreadyExistsFault = exports.UserGroup = exports.UserGroupPendingChanges = exports.DefaultUserRequired = exports.CreateUserGroupMessage = exports.UserQuotaExceededFault = exports.UserAlreadyExistsFault = exports.User = exports.Authentication = exports.AuthenticationType = exports.DuplicateUserNameFault = exports.CreateUserMessage = exports.SnapshotFeatureNotSupportedFault = exports.CreateSnapshotResult = exports.CreateSnapshotMessage = exports.ReplicationGroupAlreadyExistsFault = exports.NodeGroupsPerReplicationGroupQuotaExceededFault = exports.InvalidUserGroupStateFault = exports.InvalidGlobalReplicationGroupStateFault = exports.InvalidCacheClusterStateFault = exports.GlobalReplicationGroupNotFoundFault = exports.CreateReplicationGroupResult = exports.CreateReplicationGroupMessage = exports.ServiceLinkedRoleNotFoundFault = exports.GlobalReplicationGroupAlreadyExistsFault = exports.CreateGlobalReplicationGroupResult = exports.GlobalReplicationGroup = exports.GlobalReplicationGroupMember = exports.GlobalNodeGroup = exports.CreateGlobalReplicationGroupMessage = exports.SubnetNotAllowedFault = exports.InvalidSubnet = void 0;
exports.NodeUpdateInitiatedBy = exports.DescribeUpdateActionsMessage = exports.TimeRangeFilter = exports.DescribeSnapshotsMessage = exports.DescribeSnapshotsListMessage = exports.ServiceUpdatesMessage = exports.ServiceUpdate = exports.ServiceUpdateType = exports.ServiceUpdateSeverity = exports.DescribeServiceUpdatesMessage = exports.ServiceUpdateStatus = exports.ReservedCacheNodesOfferingNotFoundFault = exports.ReservedCacheNodesOfferingMessage = exports.ReservedCacheNodesOffering = exports.DescribeReservedCacheNodesOfferingsMessage = exports.ReservedCacheNodeMessage = exports.ReservedCacheNode = exports.RecurringCharge = exports.DescribeReservedCacheNodesMessage = exports.ReplicationGroupMessage = exports.DescribeReplicationGroupsMessage = exports.DescribeGlobalReplicationGroupsResult = exports.DescribeGlobalReplicationGroupsMessage = exports.EventsMessage = exports.Event = exports.DescribeEventsMessage = exports.DescribeEngineDefaultParametersResult = exports.EngineDefaults = exports.DescribeEngineDefaultParametersMessage = exports.DescribeCacheSubnetGroupsMessage = exports.CacheSubnetGroupMessage = exports.DescribeCacheSecurityGroupsMessage = exports.CacheSecurityGroupMessage = exports.DescribeCacheParametersMessage = exports.CacheParameterGroupDetails = exports.Parameter = exports.CacheNodeTypeSpecificParameter = exports.CacheNodeTypeSpecificValue = exports.DescribeCacheParameterGroupsMessage = exports.CacheParameterGroupsMessage = exports.DescribeCacheEngineVersionsMessage = exports.CacheEngineVersionMessage = exports.CacheEngineVersion = exports.DescribeCacheClustersMessage = exports.CacheClusterMessage = exports.DeleteUserGroupMessage = exports.InvalidUserStateFault = exports.DeleteUserMessage = exports.DefaultUserAssociatedToUserGroupFault = exports.DeleteSnapshotResult = void 0;
exports.RemoveTagsFromResourceMessage = exports.RebootCacheClusterResult = exports.RebootCacheClusterMessage = exports.RebalanceSlotsInGlobalReplicationGroupResult = exports.RebalanceSlotsInGlobalReplicationGroupMessage = exports.ReservedCacheNodeQuotaExceededFault = exports.ReservedCacheNodeAlreadyExistsFault = exports.PurchaseReservedCacheNodesOfferingResult = exports.PurchaseReservedCacheNodesOfferingMessage = exports.ModifyUserGroupMessage = exports.ModifyUserMessage = exports.ModifyReplicationGroupShardConfigurationResult = exports.ModifyReplicationGroupShardConfigurationMessage = exports.ModifyReplicationGroupResult = exports.ModifyReplicationGroupMessage = exports.ModifyGlobalReplicationGroupResult = exports.ModifyGlobalReplicationGroupMessage = exports.SubnetInUse = exports.ModifyCacheSubnetGroupResult = exports.ModifyCacheSubnetGroupMessage = exports.ModifyCacheParameterGroupMessage = exports.ParameterNameValue = exports.CacheParameterGroupNameMessage = exports.ModifyCacheClusterResult = exports.ModifyCacheClusterMessage = exports.ListTagsForResourceMessage = exports.ListAllowedNodeTypeModificationsMessage = exports.InvalidKMSKeyFault = exports.IncreaseReplicaCountResult = exports.IncreaseReplicaCountMessage = exports.IncreaseNodeGroupsInGlobalReplicationGroupResult = exports.IncreaseNodeGroupsInGlobalReplicationGroupMessage = exports.RegionalConfiguration = exports.ReshardingConfiguration = exports.FailoverGlobalReplicationGroupResult = exports.FailoverGlobalReplicationGroupMessage = exports.DisassociateGlobalReplicationGroupResult = exports.DisassociateGlobalReplicationGroupMessage = exports.DescribeUsersResult = exports.DescribeUsersMessage = exports.Filter = exports.DescribeUserGroupsResult = exports.DescribeUserGroupsMessage = exports.UpdateActionsMessage = exports.UpdateAction = exports.SlaMet = exports.NodeGroupUpdateStatus = exports.NodeGroupMemberUpdateStatus = exports.CacheNodeUpdateStatus = exports.NodeUpdateStatus = void 0;
exports.TestFailoverResult = exports.TestFailoverNotAvailableFault = exports.TestFailoverMessage = exports.NodeGroupNotFoundFault = exports.APICallRateForCustomerExceededFault = exports.StartMigrationResponse = exports.StartMigrationMessage = exports.CustomerNodeEndpoint = exports.ReplicationGroupAlreadyUnderMigrationFault = exports.RevokeCacheSecurityGroupIngressResult = exports.RevokeCacheSecurityGroupIngressMessage = exports.AuthorizationNotFoundFault = exports.ResetCacheParameterGroupMessage = exports.TagNotFoundFault = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsToResourceMessage;
(function (AddTagsToResourceMessage) {
    /**
     * @internal
     */
    AddTagsToResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceMessage = exports.AddTagsToResourceMessage || (exports.AddTagsToResourceMessage = {}));
var CacheClusterNotFoundFault;
(function (CacheClusterNotFoundFault) {
    /**
     * @internal
     */
    CacheClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheClusterNotFoundFault = exports.CacheClusterNotFoundFault || (exports.CacheClusterNotFoundFault = {}));
var CacheParameterGroupNotFoundFault;
(function (CacheParameterGroupNotFoundFault) {
    /**
     * @internal
     */
    CacheParameterGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupNotFoundFault = exports.CacheParameterGroupNotFoundFault || (exports.CacheParameterGroupNotFoundFault = {}));
var CacheSecurityGroupNotFoundFault;
(function (CacheSecurityGroupNotFoundFault) {
    /**
     * @internal
     */
    CacheSecurityGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroupNotFoundFault = exports.CacheSecurityGroupNotFoundFault || (exports.CacheSecurityGroupNotFoundFault = {}));
var CacheSubnetGroupNotFoundFault;
(function (CacheSubnetGroupNotFoundFault) {
    /**
     * @internal
     */
    CacheSubnetGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroupNotFoundFault = exports.CacheSubnetGroupNotFoundFault || (exports.CacheSubnetGroupNotFoundFault = {}));
var InvalidARNFault;
(function (InvalidARNFault) {
    /**
     * @internal
     */
    InvalidARNFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidARNFault = exports.InvalidARNFault || (exports.InvalidARNFault = {}));
var InvalidReplicationGroupStateFault;
(function (InvalidReplicationGroupStateFault) {
    /**
     * @internal
     */
    InvalidReplicationGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReplicationGroupStateFault = exports.InvalidReplicationGroupStateFault || (exports.InvalidReplicationGroupStateFault = {}));
var ReplicationGroupNotFoundFault;
(function (ReplicationGroupNotFoundFault) {
    /**
     * @internal
     */
    ReplicationGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupNotFoundFault = exports.ReplicationGroupNotFoundFault || (exports.ReplicationGroupNotFoundFault = {}));
var ReservedCacheNodeNotFoundFault;
(function (ReservedCacheNodeNotFoundFault) {
    /**
     * @internal
     */
    ReservedCacheNodeNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodeNotFoundFault = exports.ReservedCacheNodeNotFoundFault || (exports.ReservedCacheNodeNotFoundFault = {}));
var SnapshotNotFoundFault;
(function (SnapshotNotFoundFault) {
    /**
     * @internal
     */
    SnapshotNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotNotFoundFault = exports.SnapshotNotFoundFault || (exports.SnapshotNotFoundFault = {}));
var TagListMessage;
(function (TagListMessage) {
    /**
     * @internal
     */
    TagListMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagListMessage = exports.TagListMessage || (exports.TagListMessage = {}));
var TagQuotaPerResourceExceeded;
(function (TagQuotaPerResourceExceeded) {
    /**
     * @internal
     */
    TagQuotaPerResourceExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagQuotaPerResourceExceeded = exports.TagQuotaPerResourceExceeded || (exports.TagQuotaPerResourceExceeded = {}));
var UserGroupNotFoundFault;
(function (UserGroupNotFoundFault) {
    /**
     * @internal
     */
    UserGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroupNotFoundFault = exports.UserGroupNotFoundFault || (exports.UserGroupNotFoundFault = {}));
var UserNotFoundFault;
(function (UserNotFoundFault) {
    /**
     * @internal
     */
    UserNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserNotFoundFault = exports.UserNotFoundFault || (exports.UserNotFoundFault = {}));
var AllowedNodeTypeModificationsMessage;
(function (AllowedNodeTypeModificationsMessage) {
    /**
     * @internal
     */
    AllowedNodeTypeModificationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllowedNodeTypeModificationsMessage = exports.AllowedNodeTypeModificationsMessage || (exports.AllowedNodeTypeModificationsMessage = {}));
var AuthorizationAlreadyExistsFault;
(function (AuthorizationAlreadyExistsFault) {
    /**
     * @internal
     */
    AuthorizationAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationAlreadyExistsFault = exports.AuthorizationAlreadyExistsFault || (exports.AuthorizationAlreadyExistsFault = {}));
var AuthorizeCacheSecurityGroupIngressMessage;
(function (AuthorizeCacheSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    AuthorizeCacheSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeCacheSecurityGroupIngressMessage = exports.AuthorizeCacheSecurityGroupIngressMessage || (exports.AuthorizeCacheSecurityGroupIngressMessage = {}));
var EC2SecurityGroup;
(function (EC2SecurityGroup) {
    /**
     * @internal
     */
    EC2SecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2SecurityGroup = exports.EC2SecurityGroup || (exports.EC2SecurityGroup = {}));
var CacheSecurityGroup;
(function (CacheSecurityGroup) {
    /**
     * @internal
     */
    CacheSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroup = exports.CacheSecurityGroup || (exports.CacheSecurityGroup = {}));
var AuthorizeCacheSecurityGroupIngressResult;
(function (AuthorizeCacheSecurityGroupIngressResult) {
    /**
     * @internal
     */
    AuthorizeCacheSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeCacheSecurityGroupIngressResult = exports.AuthorizeCacheSecurityGroupIngressResult || (exports.AuthorizeCacheSecurityGroupIngressResult = {}));
var InvalidCacheSecurityGroupStateFault;
(function (InvalidCacheSecurityGroupStateFault) {
    /**
     * @internal
     */
    InvalidCacheSecurityGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCacheSecurityGroupStateFault = exports.InvalidCacheSecurityGroupStateFault || (exports.InvalidCacheSecurityGroupStateFault = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var BatchApplyUpdateActionMessage;
(function (BatchApplyUpdateActionMessage) {
    /**
     * @internal
     */
    BatchApplyUpdateActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchApplyUpdateActionMessage = exports.BatchApplyUpdateActionMessage || (exports.BatchApplyUpdateActionMessage = {}));
var ServiceUpdateNotFoundFault;
(function (ServiceUpdateNotFoundFault) {
    /**
     * @internal
     */
    ServiceUpdateNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUpdateNotFoundFault = exports.ServiceUpdateNotFoundFault || (exports.ServiceUpdateNotFoundFault = {}));
var UpdateActionStatus;
(function (UpdateActionStatus) {
    UpdateActionStatus["COMPLETE"] = "complete";
    UpdateActionStatus["IN_PROGRESS"] = "in-progress";
    UpdateActionStatus["NOT_APPLICABLE"] = "not-applicable";
    UpdateActionStatus["NOT_APPLIED"] = "not-applied";
    UpdateActionStatus["SCHEDULED"] = "scheduled";
    UpdateActionStatus["SCHEDULING"] = "scheduling";
    UpdateActionStatus["STOPPED"] = "stopped";
    UpdateActionStatus["STOPPING"] = "stopping";
    UpdateActionStatus["WAITING_TO_START"] = "waiting-to-start";
})(UpdateActionStatus = exports.UpdateActionStatus || (exports.UpdateActionStatus = {}));
var ProcessedUpdateAction;
(function (ProcessedUpdateAction) {
    /**
     * @internal
     */
    ProcessedUpdateAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessedUpdateAction = exports.ProcessedUpdateAction || (exports.ProcessedUpdateAction = {}));
var UnprocessedUpdateAction;
(function (UnprocessedUpdateAction) {
    /**
     * @internal
     */
    UnprocessedUpdateAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedUpdateAction = exports.UnprocessedUpdateAction || (exports.UnprocessedUpdateAction = {}));
var UpdateActionResultsMessage;
(function (UpdateActionResultsMessage) {
    /**
     * @internal
     */
    UpdateActionResultsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionResultsMessage = exports.UpdateActionResultsMessage || (exports.UpdateActionResultsMessage = {}));
var BatchStopUpdateActionMessage;
(function (BatchStopUpdateActionMessage) {
    /**
     * @internal
     */
    BatchStopUpdateActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopUpdateActionMessage = exports.BatchStopUpdateActionMessage || (exports.BatchStopUpdateActionMessage = {}));
var CompleteMigrationMessage;
(function (CompleteMigrationMessage) {
    /**
     * @internal
     */
    CompleteMigrationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteMigrationMessage = exports.CompleteMigrationMessage || (exports.CompleteMigrationMessage = {}));
var AutomaticFailoverStatus;
(function (AutomaticFailoverStatus) {
    AutomaticFailoverStatus["DISABLED"] = "disabled";
    AutomaticFailoverStatus["DISABLING"] = "disabling";
    AutomaticFailoverStatus["ENABLED"] = "enabled";
    AutomaticFailoverStatus["ENABLING"] = "enabling";
})(AutomaticFailoverStatus = exports.AutomaticFailoverStatus || (exports.AutomaticFailoverStatus = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var GlobalReplicationGroupInfo;
(function (GlobalReplicationGroupInfo) {
    /**
     * @internal
     */
    GlobalReplicationGroupInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalReplicationGroupInfo = exports.GlobalReplicationGroupInfo || (exports.GlobalReplicationGroupInfo = {}));
var CloudWatchLogsDestinationDetails;
(function (CloudWatchLogsDestinationDetails) {
    /**
     * @internal
     */
    CloudWatchLogsDestinationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsDestinationDetails = exports.CloudWatchLogsDestinationDetails || (exports.CloudWatchLogsDestinationDetails = {}));
var KinesisFirehoseDestinationDetails;
(function (KinesisFirehoseDestinationDetails) {
    /**
     * @internal
     */
    KinesisFirehoseDestinationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseDestinationDetails = exports.KinesisFirehoseDestinationDetails || (exports.KinesisFirehoseDestinationDetails = {}));
var DestinationDetails;
(function (DestinationDetails) {
    /**
     * @internal
     */
    DestinationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationDetails = exports.DestinationDetails || (exports.DestinationDetails = {}));
var DestinationType;
(function (DestinationType) {
    DestinationType["CloudWatchLogs"] = "cloudwatch-logs";
    DestinationType["KinesisFirehose"] = "kinesis-firehose";
})(DestinationType = exports.DestinationType || (exports.DestinationType = {}));
var LogFormat;
(function (LogFormat) {
    LogFormat["JSON"] = "json";
    LogFormat["TEXT"] = "text";
})(LogFormat = exports.LogFormat || (exports.LogFormat = {}));
var LogType;
(function (LogType) {
    LogType["SLOW_LOG"] = "slow-log";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogDeliveryConfigurationStatus;
(function (LogDeliveryConfigurationStatus) {
    LogDeliveryConfigurationStatus["ACTIVE"] = "active";
    LogDeliveryConfigurationStatus["DISABLING"] = "disabling";
    LogDeliveryConfigurationStatus["ENABLING"] = "enabling";
    LogDeliveryConfigurationStatus["ERROR"] = "error";
    LogDeliveryConfigurationStatus["MODIFYING"] = "modifying";
})(LogDeliveryConfigurationStatus = exports.LogDeliveryConfigurationStatus || (exports.LogDeliveryConfigurationStatus = {}));
var LogDeliveryConfiguration;
(function (LogDeliveryConfiguration) {
    /**
     * @internal
     */
    LogDeliveryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogDeliveryConfiguration = exports.LogDeliveryConfiguration || (exports.LogDeliveryConfiguration = {}));
var MultiAZStatus;
(function (MultiAZStatus) {
    MultiAZStatus["DISABLED"] = "disabled";
    MultiAZStatus["ENABLED"] = "enabled";
})(MultiAZStatus = exports.MultiAZStatus || (exports.MultiAZStatus = {}));
var NodeGroupMember;
(function (NodeGroupMember) {
    /**
     * @internal
     */
    NodeGroupMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupMember = exports.NodeGroupMember || (exports.NodeGroupMember = {}));
var NodeGroup;
(function (NodeGroup) {
    /**
     * @internal
     */
    NodeGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroup = exports.NodeGroup || (exports.NodeGroup = {}));
var PendingAutomaticFailoverStatus;
(function (PendingAutomaticFailoverStatus) {
    PendingAutomaticFailoverStatus["DISABLED"] = "disabled";
    PendingAutomaticFailoverStatus["ENABLED"] = "enabled";
})(PendingAutomaticFailoverStatus = exports.PendingAutomaticFailoverStatus || (exports.PendingAutomaticFailoverStatus = {}));
var PendingLogDeliveryConfiguration;
(function (PendingLogDeliveryConfiguration) {
    /**
     * @internal
     */
    PendingLogDeliveryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingLogDeliveryConfiguration = exports.PendingLogDeliveryConfiguration || (exports.PendingLogDeliveryConfiguration = {}));
var SlotMigration;
(function (SlotMigration) {
    /**
     * @internal
     */
    SlotMigration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotMigration = exports.SlotMigration || (exports.SlotMigration = {}));
var ReshardingStatus;
(function (ReshardingStatus) {
    /**
     * @internal
     */
    ReshardingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReshardingStatus = exports.ReshardingStatus || (exports.ReshardingStatus = {}));
var UserGroupsUpdateStatus;
(function (UserGroupsUpdateStatus) {
    /**
     * @internal
     */
    UserGroupsUpdateStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroupsUpdateStatus = exports.UserGroupsUpdateStatus || (exports.UserGroupsUpdateStatus = {}));
var ReplicationGroupPendingModifiedValues;
(function (ReplicationGroupPendingModifiedValues) {
    /**
     * @internal
     */
    ReplicationGroupPendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupPendingModifiedValues = exports.ReplicationGroupPendingModifiedValues || (exports.ReplicationGroupPendingModifiedValues = {}));
var ReplicationGroup;
(function (ReplicationGroup) {
    /**
     * @internal
     */
    ReplicationGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroup = exports.ReplicationGroup || (exports.ReplicationGroup = {}));
var CompleteMigrationResponse;
(function (CompleteMigrationResponse) {
    /**
     * @internal
     */
    CompleteMigrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteMigrationResponse = exports.CompleteMigrationResponse || (exports.CompleteMigrationResponse = {}));
var ReplicationGroupNotUnderMigrationFault;
(function (ReplicationGroupNotUnderMigrationFault) {
    /**
     * @internal
     */
    ReplicationGroupNotUnderMigrationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupNotUnderMigrationFault = exports.ReplicationGroupNotUnderMigrationFault || (exports.ReplicationGroupNotUnderMigrationFault = {}));
var CopySnapshotMessage;
(function (CopySnapshotMessage) {
    /**
     * @internal
     */
    CopySnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotMessage = exports.CopySnapshotMessage || (exports.CopySnapshotMessage = {}));
var NodeGroupConfiguration;
(function (NodeGroupConfiguration) {
    /**
     * @internal
     */
    NodeGroupConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupConfiguration = exports.NodeGroupConfiguration || (exports.NodeGroupConfiguration = {}));
var NodeSnapshot;
(function (NodeSnapshot) {
    /**
     * @internal
     */
    NodeSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeSnapshot = exports.NodeSnapshot || (exports.NodeSnapshot = {}));
var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var CopySnapshotResult;
(function (CopySnapshotResult) {
    /**
     * @internal
     */
    CopySnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotResult = exports.CopySnapshotResult || (exports.CopySnapshotResult = {}));
var InvalidSnapshotStateFault;
(function (InvalidSnapshotStateFault) {
    /**
     * @internal
     */
    InvalidSnapshotStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSnapshotStateFault = exports.InvalidSnapshotStateFault || (exports.InvalidSnapshotStateFault = {}));
var SnapshotAlreadyExistsFault;
(function (SnapshotAlreadyExistsFault) {
    /**
     * @internal
     */
    SnapshotAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotAlreadyExistsFault = exports.SnapshotAlreadyExistsFault || (exports.SnapshotAlreadyExistsFault = {}));
var SnapshotQuotaExceededFault;
(function (SnapshotQuotaExceededFault) {
    /**
     * @internal
     */
    SnapshotQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotQuotaExceededFault = exports.SnapshotQuotaExceededFault || (exports.SnapshotQuotaExceededFault = {}));
var CacheClusterAlreadyExistsFault;
(function (CacheClusterAlreadyExistsFault) {
    /**
     * @internal
     */
    CacheClusterAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheClusterAlreadyExistsFault = exports.CacheClusterAlreadyExistsFault || (exports.CacheClusterAlreadyExistsFault = {}));
var ClusterQuotaForCustomerExceededFault;
(function (ClusterQuotaForCustomerExceededFault) {
    /**
     * @internal
     */
    ClusterQuotaForCustomerExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterQuotaForCustomerExceededFault = exports.ClusterQuotaForCustomerExceededFault || (exports.ClusterQuotaForCustomerExceededFault = {}));
var AZMode;
(function (AZMode) {
    AZMode["CROSS_AZ"] = "cross-az";
    AZMode["SINGLE_AZ"] = "single-az";
})(AZMode = exports.AZMode || (exports.AZMode = {}));
var LogDeliveryConfigurationRequest;
(function (LogDeliveryConfigurationRequest) {
    /**
     * @internal
     */
    LogDeliveryConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogDeliveryConfigurationRequest = exports.LogDeliveryConfigurationRequest || (exports.LogDeliveryConfigurationRequest = {}));
var OutpostMode;
(function (OutpostMode) {
    OutpostMode["CROSS_OUTPOST"] = "cross-outpost";
    OutpostMode["SINGLE_OUTPOST"] = "single-outpost";
})(OutpostMode = exports.OutpostMode || (exports.OutpostMode = {}));
var CreateCacheClusterMessage;
(function (CreateCacheClusterMessage) {
    /**
     * @internal
     */
    CreateCacheClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheClusterMessage = exports.CreateCacheClusterMessage || (exports.CreateCacheClusterMessage = {}));
var CacheNode;
(function (CacheNode) {
    /**
     * @internal
     */
    CacheNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheNode = exports.CacheNode || (exports.CacheNode = {}));
var CacheParameterGroupStatus;
(function (CacheParameterGroupStatus) {
    /**
     * @internal
     */
    CacheParameterGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupStatus = exports.CacheParameterGroupStatus || (exports.CacheParameterGroupStatus = {}));
var CacheSecurityGroupMembership;
(function (CacheSecurityGroupMembership) {
    /**
     * @internal
     */
    CacheSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroupMembership = exports.CacheSecurityGroupMembership || (exports.CacheSecurityGroupMembership = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var PendingModifiedValues;
(function (PendingModifiedValues) {
    /**
     * @internal
     */
    PendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingModifiedValues = exports.PendingModifiedValues || (exports.PendingModifiedValues = {}));
var SecurityGroupMembership;
(function (SecurityGroupMembership) {
    /**
     * @internal
     */
    SecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupMembership = exports.SecurityGroupMembership || (exports.SecurityGroupMembership = {}));
var CacheCluster;
(function (CacheCluster) {
    /**
     * @internal
     */
    CacheCluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheCluster = exports.CacheCluster || (exports.CacheCluster = {}));
var CreateCacheClusterResult;
(function (CreateCacheClusterResult) {
    /**
     * @internal
     */
    CreateCacheClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheClusterResult = exports.CreateCacheClusterResult || (exports.CreateCacheClusterResult = {}));
var InsufficientCacheClusterCapacityFault;
(function (InsufficientCacheClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientCacheClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientCacheClusterCapacityFault = exports.InsufficientCacheClusterCapacityFault || (exports.InsufficientCacheClusterCapacityFault = {}));
var InvalidVPCNetworkStateFault;
(function (InvalidVPCNetworkStateFault) {
    /**
     * @internal
     */
    InvalidVPCNetworkStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVPCNetworkStateFault = exports.InvalidVPCNetworkStateFault || (exports.InvalidVPCNetworkStateFault = {}));
var NodeQuotaForClusterExceededFault;
(function (NodeQuotaForClusterExceededFault) {
    /**
     * @internal
     */
    NodeQuotaForClusterExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeQuotaForClusterExceededFault = exports.NodeQuotaForClusterExceededFault || (exports.NodeQuotaForClusterExceededFault = {}));
var NodeQuotaForCustomerExceededFault;
(function (NodeQuotaForCustomerExceededFault) {
    /**
     * @internal
     */
    NodeQuotaForCustomerExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeQuotaForCustomerExceededFault = exports.NodeQuotaForCustomerExceededFault || (exports.NodeQuotaForCustomerExceededFault = {}));
var CacheParameterGroupAlreadyExistsFault;
(function (CacheParameterGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    CacheParameterGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupAlreadyExistsFault = exports.CacheParameterGroupAlreadyExistsFault || (exports.CacheParameterGroupAlreadyExistsFault = {}));
var CacheParameterGroupQuotaExceededFault;
(function (CacheParameterGroupQuotaExceededFault) {
    /**
     * @internal
     */
    CacheParameterGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupQuotaExceededFault = exports.CacheParameterGroupQuotaExceededFault || (exports.CacheParameterGroupQuotaExceededFault = {}));
var CreateCacheParameterGroupMessage;
(function (CreateCacheParameterGroupMessage) {
    /**
     * @internal
     */
    CreateCacheParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheParameterGroupMessage = exports.CreateCacheParameterGroupMessage || (exports.CreateCacheParameterGroupMessage = {}));
var CacheParameterGroup;
(function (CacheParameterGroup) {
    /**
     * @internal
     */
    CacheParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroup = exports.CacheParameterGroup || (exports.CacheParameterGroup = {}));
var CreateCacheParameterGroupResult;
(function (CreateCacheParameterGroupResult) {
    /**
     * @internal
     */
    CreateCacheParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheParameterGroupResult = exports.CreateCacheParameterGroupResult || (exports.CreateCacheParameterGroupResult = {}));
var InvalidCacheParameterGroupStateFault;
(function (InvalidCacheParameterGroupStateFault) {
    /**
     * @internal
     */
    InvalidCacheParameterGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCacheParameterGroupStateFault = exports.InvalidCacheParameterGroupStateFault || (exports.InvalidCacheParameterGroupStateFault = {}));
var CacheSecurityGroupAlreadyExistsFault;
(function (CacheSecurityGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    CacheSecurityGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroupAlreadyExistsFault = exports.CacheSecurityGroupAlreadyExistsFault || (exports.CacheSecurityGroupAlreadyExistsFault = {}));
var CacheSecurityGroupQuotaExceededFault;
(function (CacheSecurityGroupQuotaExceededFault) {
    /**
     * @internal
     */
    CacheSecurityGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroupQuotaExceededFault = exports.CacheSecurityGroupQuotaExceededFault || (exports.CacheSecurityGroupQuotaExceededFault = {}));
var CreateCacheSecurityGroupMessage;
(function (CreateCacheSecurityGroupMessage) {
    /**
     * @internal
     */
    CreateCacheSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheSecurityGroupMessage = exports.CreateCacheSecurityGroupMessage || (exports.CreateCacheSecurityGroupMessage = {}));
var CreateCacheSecurityGroupResult;
(function (CreateCacheSecurityGroupResult) {
    /**
     * @internal
     */
    CreateCacheSecurityGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheSecurityGroupResult = exports.CreateCacheSecurityGroupResult || (exports.CreateCacheSecurityGroupResult = {}));
var CacheSubnetGroupAlreadyExistsFault;
(function (CacheSubnetGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    CacheSubnetGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroupAlreadyExistsFault = exports.CacheSubnetGroupAlreadyExistsFault || (exports.CacheSubnetGroupAlreadyExistsFault = {}));
var CacheSubnetGroupQuotaExceededFault;
(function (CacheSubnetGroupQuotaExceededFault) {
    /**
     * @internal
     */
    CacheSubnetGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroupQuotaExceededFault = exports.CacheSubnetGroupQuotaExceededFault || (exports.CacheSubnetGroupQuotaExceededFault = {}));
var CacheSubnetQuotaExceededFault;
(function (CacheSubnetQuotaExceededFault) {
    /**
     * @internal
     */
    CacheSubnetQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetQuotaExceededFault = exports.CacheSubnetQuotaExceededFault || (exports.CacheSubnetQuotaExceededFault = {}));
var CreateCacheSubnetGroupMessage;
(function (CreateCacheSubnetGroupMessage) {
    /**
     * @internal
     */
    CreateCacheSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheSubnetGroupMessage = exports.CreateCacheSubnetGroupMessage || (exports.CreateCacheSubnetGroupMessage = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var SubnetOutpost;
(function (SubnetOutpost) {
    /**
     * @internal
     */
    SubnetOutpost.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetOutpost = exports.SubnetOutpost || (exports.SubnetOutpost = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var CacheSubnetGroup;
(function (CacheSubnetGroup) {
    /**
     * @internal
     */
    CacheSubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroup = exports.CacheSubnetGroup || (exports.CacheSubnetGroup = {}));
var CreateCacheSubnetGroupResult;
(function (CreateCacheSubnetGroupResult) {
    /**
     * @internal
     */
    CreateCacheSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCacheSubnetGroupResult = exports.CreateCacheSubnetGroupResult || (exports.CreateCacheSubnetGroupResult = {}));
var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnet = exports.InvalidSubnet || (exports.InvalidSubnet = {}));
var SubnetNotAllowedFault;
(function (SubnetNotAllowedFault) {
    /**
     * @internal
     */
    SubnetNotAllowedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetNotAllowedFault = exports.SubnetNotAllowedFault || (exports.SubnetNotAllowedFault = {}));
var CreateGlobalReplicationGroupMessage;
(function (CreateGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    CreateGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalReplicationGroupMessage = exports.CreateGlobalReplicationGroupMessage || (exports.CreateGlobalReplicationGroupMessage = {}));
var GlobalNodeGroup;
(function (GlobalNodeGroup) {
    /**
     * @internal
     */
    GlobalNodeGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalNodeGroup = exports.GlobalNodeGroup || (exports.GlobalNodeGroup = {}));
var GlobalReplicationGroupMember;
(function (GlobalReplicationGroupMember) {
    /**
     * @internal
     */
    GlobalReplicationGroupMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalReplicationGroupMember = exports.GlobalReplicationGroupMember || (exports.GlobalReplicationGroupMember = {}));
var GlobalReplicationGroup;
(function (GlobalReplicationGroup) {
    /**
     * @internal
     */
    GlobalReplicationGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalReplicationGroup = exports.GlobalReplicationGroup || (exports.GlobalReplicationGroup = {}));
var CreateGlobalReplicationGroupResult;
(function (CreateGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    CreateGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalReplicationGroupResult = exports.CreateGlobalReplicationGroupResult || (exports.CreateGlobalReplicationGroupResult = {}));
var GlobalReplicationGroupAlreadyExistsFault;
(function (GlobalReplicationGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    GlobalReplicationGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalReplicationGroupAlreadyExistsFault = exports.GlobalReplicationGroupAlreadyExistsFault || (exports.GlobalReplicationGroupAlreadyExistsFault = {}));
var ServiceLinkedRoleNotFoundFault;
(function (ServiceLinkedRoleNotFoundFault) {
    /**
     * @internal
     */
    ServiceLinkedRoleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLinkedRoleNotFoundFault = exports.ServiceLinkedRoleNotFoundFault || (exports.ServiceLinkedRoleNotFoundFault = {}));
var CreateReplicationGroupMessage;
(function (CreateReplicationGroupMessage) {
    /**
     * @internal
     */
    CreateReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationGroupMessage = exports.CreateReplicationGroupMessage || (exports.CreateReplicationGroupMessage = {}));
var CreateReplicationGroupResult;
(function (CreateReplicationGroupResult) {
    /**
     * @internal
     */
    CreateReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationGroupResult = exports.CreateReplicationGroupResult || (exports.CreateReplicationGroupResult = {}));
var GlobalReplicationGroupNotFoundFault;
(function (GlobalReplicationGroupNotFoundFault) {
    /**
     * @internal
     */
    GlobalReplicationGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalReplicationGroupNotFoundFault = exports.GlobalReplicationGroupNotFoundFault || (exports.GlobalReplicationGroupNotFoundFault = {}));
var InvalidCacheClusterStateFault;
(function (InvalidCacheClusterStateFault) {
    /**
     * @internal
     */
    InvalidCacheClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCacheClusterStateFault = exports.InvalidCacheClusterStateFault || (exports.InvalidCacheClusterStateFault = {}));
var InvalidGlobalReplicationGroupStateFault;
(function (InvalidGlobalReplicationGroupStateFault) {
    /**
     * @internal
     */
    InvalidGlobalReplicationGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGlobalReplicationGroupStateFault = exports.InvalidGlobalReplicationGroupStateFault || (exports.InvalidGlobalReplicationGroupStateFault = {}));
var InvalidUserGroupStateFault;
(function (InvalidUserGroupStateFault) {
    /**
     * @internal
     */
    InvalidUserGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUserGroupStateFault = exports.InvalidUserGroupStateFault || (exports.InvalidUserGroupStateFault = {}));
var NodeGroupsPerReplicationGroupQuotaExceededFault;
(function (NodeGroupsPerReplicationGroupQuotaExceededFault) {
    /**
     * @internal
     */
    NodeGroupsPerReplicationGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupsPerReplicationGroupQuotaExceededFault = exports.NodeGroupsPerReplicationGroupQuotaExceededFault || (exports.NodeGroupsPerReplicationGroupQuotaExceededFault = {}));
var ReplicationGroupAlreadyExistsFault;
(function (ReplicationGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    ReplicationGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupAlreadyExistsFault = exports.ReplicationGroupAlreadyExistsFault || (exports.ReplicationGroupAlreadyExistsFault = {}));
var CreateSnapshotMessage;
(function (CreateSnapshotMessage) {
    /**
     * @internal
     */
    CreateSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotMessage = exports.CreateSnapshotMessage || (exports.CreateSnapshotMessage = {}));
var CreateSnapshotResult;
(function (CreateSnapshotResult) {
    /**
     * @internal
     */
    CreateSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotResult = exports.CreateSnapshotResult || (exports.CreateSnapshotResult = {}));
var SnapshotFeatureNotSupportedFault;
(function (SnapshotFeatureNotSupportedFault) {
    /**
     * @internal
     */
    SnapshotFeatureNotSupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotFeatureNotSupportedFault = exports.SnapshotFeatureNotSupportedFault || (exports.SnapshotFeatureNotSupportedFault = {}));
var CreateUserMessage;
(function (CreateUserMessage) {
    /**
     * @internal
     */
    CreateUserMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserMessage = exports.CreateUserMessage || (exports.CreateUserMessage = {}));
var DuplicateUserNameFault;
(function (DuplicateUserNameFault) {
    /**
     * @internal
     */
    DuplicateUserNameFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateUserNameFault = exports.DuplicateUserNameFault || (exports.DuplicateUserNameFault = {}));
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["NO_PASSWORD"] = "no-password";
    AuthenticationType["PASSWORD"] = "password";
})(AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {}));
var Authentication;
(function (Authentication) {
    /**
     * @internal
     */
    Authentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Authentication = exports.Authentication || (exports.Authentication = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var UserAlreadyExistsFault;
(function (UserAlreadyExistsFault) {
    /**
     * @internal
     */
    UserAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserAlreadyExistsFault = exports.UserAlreadyExistsFault || (exports.UserAlreadyExistsFault = {}));
var UserQuotaExceededFault;
(function (UserQuotaExceededFault) {
    /**
     * @internal
     */
    UserQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserQuotaExceededFault = exports.UserQuotaExceededFault || (exports.UserQuotaExceededFault = {}));
var CreateUserGroupMessage;
(function (CreateUserGroupMessage) {
    /**
     * @internal
     */
    CreateUserGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserGroupMessage = exports.CreateUserGroupMessage || (exports.CreateUserGroupMessage = {}));
var DefaultUserRequired;
(function (DefaultUserRequired) {
    /**
     * @internal
     */
    DefaultUserRequired.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultUserRequired = exports.DefaultUserRequired || (exports.DefaultUserRequired = {}));
var UserGroupPendingChanges;
(function (UserGroupPendingChanges) {
    /**
     * @internal
     */
    UserGroupPendingChanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroupPendingChanges = exports.UserGroupPendingChanges || (exports.UserGroupPendingChanges = {}));
var UserGroup;
(function (UserGroup) {
    /**
     * @internal
     */
    UserGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroup = exports.UserGroup || (exports.UserGroup = {}));
var UserGroupAlreadyExistsFault;
(function (UserGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    UserGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroupAlreadyExistsFault = exports.UserGroupAlreadyExistsFault || (exports.UserGroupAlreadyExistsFault = {}));
var UserGroupQuotaExceededFault;
(function (UserGroupQuotaExceededFault) {
    /**
     * @internal
     */
    UserGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserGroupQuotaExceededFault = exports.UserGroupQuotaExceededFault || (exports.UserGroupQuotaExceededFault = {}));
var DecreaseNodeGroupsInGlobalReplicationGroupMessage;
(function (DecreaseNodeGroupsInGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    DecreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseNodeGroupsInGlobalReplicationGroupMessage = exports.DecreaseNodeGroupsInGlobalReplicationGroupMessage || (exports.DecreaseNodeGroupsInGlobalReplicationGroupMessage = {}));
var DecreaseNodeGroupsInGlobalReplicationGroupResult;
(function (DecreaseNodeGroupsInGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    DecreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseNodeGroupsInGlobalReplicationGroupResult = exports.DecreaseNodeGroupsInGlobalReplicationGroupResult || (exports.DecreaseNodeGroupsInGlobalReplicationGroupResult = {}));
var ConfigureShard;
(function (ConfigureShard) {
    /**
     * @internal
     */
    ConfigureShard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigureShard = exports.ConfigureShard || (exports.ConfigureShard = {}));
var DecreaseReplicaCountMessage;
(function (DecreaseReplicaCountMessage) {
    /**
     * @internal
     */
    DecreaseReplicaCountMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseReplicaCountMessage = exports.DecreaseReplicaCountMessage || (exports.DecreaseReplicaCountMessage = {}));
var DecreaseReplicaCountResult;
(function (DecreaseReplicaCountResult) {
    /**
     * @internal
     */
    DecreaseReplicaCountResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseReplicaCountResult = exports.DecreaseReplicaCountResult || (exports.DecreaseReplicaCountResult = {}));
var NoOperationFault;
(function (NoOperationFault) {
    /**
     * @internal
     */
    NoOperationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoOperationFault = exports.NoOperationFault || (exports.NoOperationFault = {}));
var DeleteCacheClusterMessage;
(function (DeleteCacheClusterMessage) {
    /**
     * @internal
     */
    DeleteCacheClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCacheClusterMessage = exports.DeleteCacheClusterMessage || (exports.DeleteCacheClusterMessage = {}));
var DeleteCacheClusterResult;
(function (DeleteCacheClusterResult) {
    /**
     * @internal
     */
    DeleteCacheClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCacheClusterResult = exports.DeleteCacheClusterResult || (exports.DeleteCacheClusterResult = {}));
var DeleteCacheParameterGroupMessage;
(function (DeleteCacheParameterGroupMessage) {
    /**
     * @internal
     */
    DeleteCacheParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCacheParameterGroupMessage = exports.DeleteCacheParameterGroupMessage || (exports.DeleteCacheParameterGroupMessage = {}));
var DeleteCacheSecurityGroupMessage;
(function (DeleteCacheSecurityGroupMessage) {
    /**
     * @internal
     */
    DeleteCacheSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCacheSecurityGroupMessage = exports.DeleteCacheSecurityGroupMessage || (exports.DeleteCacheSecurityGroupMessage = {}));
var CacheSubnetGroupInUse;
(function (CacheSubnetGroupInUse) {
    /**
     * @internal
     */
    CacheSubnetGroupInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroupInUse = exports.CacheSubnetGroupInUse || (exports.CacheSubnetGroupInUse = {}));
var DeleteCacheSubnetGroupMessage;
(function (DeleteCacheSubnetGroupMessage) {
    /**
     * @internal
     */
    DeleteCacheSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCacheSubnetGroupMessage = exports.DeleteCacheSubnetGroupMessage || (exports.DeleteCacheSubnetGroupMessage = {}));
var DeleteGlobalReplicationGroupMessage;
(function (DeleteGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    DeleteGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalReplicationGroupMessage = exports.DeleteGlobalReplicationGroupMessage || (exports.DeleteGlobalReplicationGroupMessage = {}));
var DeleteGlobalReplicationGroupResult;
(function (DeleteGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    DeleteGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalReplicationGroupResult = exports.DeleteGlobalReplicationGroupResult || (exports.DeleteGlobalReplicationGroupResult = {}));
var DeleteReplicationGroupMessage;
(function (DeleteReplicationGroupMessage) {
    /**
     * @internal
     */
    DeleteReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationGroupMessage = exports.DeleteReplicationGroupMessage || (exports.DeleteReplicationGroupMessage = {}));
var DeleteReplicationGroupResult;
(function (DeleteReplicationGroupResult) {
    /**
     * @internal
     */
    DeleteReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationGroupResult = exports.DeleteReplicationGroupResult || (exports.DeleteReplicationGroupResult = {}));
var DeleteSnapshotMessage;
(function (DeleteSnapshotMessage) {
    /**
     * @internal
     */
    DeleteSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotMessage = exports.DeleteSnapshotMessage || (exports.DeleteSnapshotMessage = {}));
var DeleteSnapshotResult;
(function (DeleteSnapshotResult) {
    /**
     * @internal
     */
    DeleteSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotResult = exports.DeleteSnapshotResult || (exports.DeleteSnapshotResult = {}));
var DefaultUserAssociatedToUserGroupFault;
(function (DefaultUserAssociatedToUserGroupFault) {
    /**
     * @internal
     */
    DefaultUserAssociatedToUserGroupFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultUserAssociatedToUserGroupFault = exports.DefaultUserAssociatedToUserGroupFault || (exports.DefaultUserAssociatedToUserGroupFault = {}));
var DeleteUserMessage;
(function (DeleteUserMessage) {
    /**
     * @internal
     */
    DeleteUserMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserMessage = exports.DeleteUserMessage || (exports.DeleteUserMessage = {}));
var InvalidUserStateFault;
(function (InvalidUserStateFault) {
    /**
     * @internal
     */
    InvalidUserStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUserStateFault = exports.InvalidUserStateFault || (exports.InvalidUserStateFault = {}));
var DeleteUserGroupMessage;
(function (DeleteUserGroupMessage) {
    /**
     * @internal
     */
    DeleteUserGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserGroupMessage = exports.DeleteUserGroupMessage || (exports.DeleteUserGroupMessage = {}));
var CacheClusterMessage;
(function (CacheClusterMessage) {
    /**
     * @internal
     */
    CacheClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheClusterMessage = exports.CacheClusterMessage || (exports.CacheClusterMessage = {}));
var DescribeCacheClustersMessage;
(function (DescribeCacheClustersMessage) {
    /**
     * @internal
     */
    DescribeCacheClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheClustersMessage = exports.DescribeCacheClustersMessage || (exports.DescribeCacheClustersMessage = {}));
var CacheEngineVersion;
(function (CacheEngineVersion) {
    /**
     * @internal
     */
    CacheEngineVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheEngineVersion = exports.CacheEngineVersion || (exports.CacheEngineVersion = {}));
var CacheEngineVersionMessage;
(function (CacheEngineVersionMessage) {
    /**
     * @internal
     */
    CacheEngineVersionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheEngineVersionMessage = exports.CacheEngineVersionMessage || (exports.CacheEngineVersionMessage = {}));
var DescribeCacheEngineVersionsMessage;
(function (DescribeCacheEngineVersionsMessage) {
    /**
     * @internal
     */
    DescribeCacheEngineVersionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheEngineVersionsMessage = exports.DescribeCacheEngineVersionsMessage || (exports.DescribeCacheEngineVersionsMessage = {}));
var CacheParameterGroupsMessage;
(function (CacheParameterGroupsMessage) {
    /**
     * @internal
     */
    CacheParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupsMessage = exports.CacheParameterGroupsMessage || (exports.CacheParameterGroupsMessage = {}));
var DescribeCacheParameterGroupsMessage;
(function (DescribeCacheParameterGroupsMessage) {
    /**
     * @internal
     */
    DescribeCacheParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheParameterGroupsMessage = exports.DescribeCacheParameterGroupsMessage || (exports.DescribeCacheParameterGroupsMessage = {}));
var CacheNodeTypeSpecificValue;
(function (CacheNodeTypeSpecificValue) {
    /**
     * @internal
     */
    CacheNodeTypeSpecificValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheNodeTypeSpecificValue = exports.CacheNodeTypeSpecificValue || (exports.CacheNodeTypeSpecificValue = {}));
var CacheNodeTypeSpecificParameter;
(function (CacheNodeTypeSpecificParameter) {
    /**
     * @internal
     */
    CacheNodeTypeSpecificParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheNodeTypeSpecificParameter = exports.CacheNodeTypeSpecificParameter || (exports.CacheNodeTypeSpecificParameter = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var CacheParameterGroupDetails;
(function (CacheParameterGroupDetails) {
    /**
     * @internal
     */
    CacheParameterGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupDetails = exports.CacheParameterGroupDetails || (exports.CacheParameterGroupDetails = {}));
var DescribeCacheParametersMessage;
(function (DescribeCacheParametersMessage) {
    /**
     * @internal
     */
    DescribeCacheParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheParametersMessage = exports.DescribeCacheParametersMessage || (exports.DescribeCacheParametersMessage = {}));
var CacheSecurityGroupMessage;
(function (CacheSecurityGroupMessage) {
    /**
     * @internal
     */
    CacheSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSecurityGroupMessage = exports.CacheSecurityGroupMessage || (exports.CacheSecurityGroupMessage = {}));
var DescribeCacheSecurityGroupsMessage;
(function (DescribeCacheSecurityGroupsMessage) {
    /**
     * @internal
     */
    DescribeCacheSecurityGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheSecurityGroupsMessage = exports.DescribeCacheSecurityGroupsMessage || (exports.DescribeCacheSecurityGroupsMessage = {}));
var CacheSubnetGroupMessage;
(function (CacheSubnetGroupMessage) {
    /**
     * @internal
     */
    CacheSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSubnetGroupMessage = exports.CacheSubnetGroupMessage || (exports.CacheSubnetGroupMessage = {}));
var DescribeCacheSubnetGroupsMessage;
(function (DescribeCacheSubnetGroupsMessage) {
    /**
     * @internal
     */
    DescribeCacheSubnetGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheSubnetGroupsMessage = exports.DescribeCacheSubnetGroupsMessage || (exports.DescribeCacheSubnetGroupsMessage = {}));
var DescribeEngineDefaultParametersMessage;
(function (DescribeEngineDefaultParametersMessage) {
    /**
     * @internal
     */
    DescribeEngineDefaultParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultParametersMessage = exports.DescribeEngineDefaultParametersMessage || (exports.DescribeEngineDefaultParametersMessage = {}));
var EngineDefaults;
(function (EngineDefaults) {
    /**
     * @internal
     */
    EngineDefaults.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EngineDefaults = exports.EngineDefaults || (exports.EngineDefaults = {}));
var DescribeEngineDefaultParametersResult;
(function (DescribeEngineDefaultParametersResult) {
    /**
     * @internal
     */
    DescribeEngineDefaultParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultParametersResult = exports.DescribeEngineDefaultParametersResult || (exports.DescribeEngineDefaultParametersResult = {}));
var DescribeEventsMessage;
(function (DescribeEventsMessage) {
    /**
     * @internal
     */
    DescribeEventsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsMessage = exports.DescribeEventsMessage || (exports.DescribeEventsMessage = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var EventsMessage;
(function (EventsMessage) {
    /**
     * @internal
     */
    EventsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsMessage = exports.EventsMessage || (exports.EventsMessage = {}));
var DescribeGlobalReplicationGroupsMessage;
(function (DescribeGlobalReplicationGroupsMessage) {
    /**
     * @internal
     */
    DescribeGlobalReplicationGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalReplicationGroupsMessage = exports.DescribeGlobalReplicationGroupsMessage || (exports.DescribeGlobalReplicationGroupsMessage = {}));
var DescribeGlobalReplicationGroupsResult;
(function (DescribeGlobalReplicationGroupsResult) {
    /**
     * @internal
     */
    DescribeGlobalReplicationGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalReplicationGroupsResult = exports.DescribeGlobalReplicationGroupsResult || (exports.DescribeGlobalReplicationGroupsResult = {}));
var DescribeReplicationGroupsMessage;
(function (DescribeReplicationGroupsMessage) {
    /**
     * @internal
     */
    DescribeReplicationGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationGroupsMessage = exports.DescribeReplicationGroupsMessage || (exports.DescribeReplicationGroupsMessage = {}));
var ReplicationGroupMessage;
(function (ReplicationGroupMessage) {
    /**
     * @internal
     */
    ReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupMessage = exports.ReplicationGroupMessage || (exports.ReplicationGroupMessage = {}));
var DescribeReservedCacheNodesMessage;
(function (DescribeReservedCacheNodesMessage) {
    /**
     * @internal
     */
    DescribeReservedCacheNodesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedCacheNodesMessage = exports.DescribeReservedCacheNodesMessage || (exports.DescribeReservedCacheNodesMessage = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var ReservedCacheNode;
(function (ReservedCacheNode) {
    /**
     * @internal
     */
    ReservedCacheNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNode = exports.ReservedCacheNode || (exports.ReservedCacheNode = {}));
var ReservedCacheNodeMessage;
(function (ReservedCacheNodeMessage) {
    /**
     * @internal
     */
    ReservedCacheNodeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodeMessage = exports.ReservedCacheNodeMessage || (exports.ReservedCacheNodeMessage = {}));
var DescribeReservedCacheNodesOfferingsMessage;
(function (DescribeReservedCacheNodesOfferingsMessage) {
    /**
     * @internal
     */
    DescribeReservedCacheNodesOfferingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedCacheNodesOfferingsMessage = exports.DescribeReservedCacheNodesOfferingsMessage || (exports.DescribeReservedCacheNodesOfferingsMessage = {}));
var ReservedCacheNodesOffering;
(function (ReservedCacheNodesOffering) {
    /**
     * @internal
     */
    ReservedCacheNodesOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodesOffering = exports.ReservedCacheNodesOffering || (exports.ReservedCacheNodesOffering = {}));
var ReservedCacheNodesOfferingMessage;
(function (ReservedCacheNodesOfferingMessage) {
    /**
     * @internal
     */
    ReservedCacheNodesOfferingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodesOfferingMessage = exports.ReservedCacheNodesOfferingMessage || (exports.ReservedCacheNodesOfferingMessage = {}));
var ReservedCacheNodesOfferingNotFoundFault;
(function (ReservedCacheNodesOfferingNotFoundFault) {
    /**
     * @internal
     */
    ReservedCacheNodesOfferingNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodesOfferingNotFoundFault = exports.ReservedCacheNodesOfferingNotFoundFault || (exports.ReservedCacheNodesOfferingNotFoundFault = {}));
var ServiceUpdateStatus;
(function (ServiceUpdateStatus) {
    ServiceUpdateStatus["AVAILABLE"] = "available";
    ServiceUpdateStatus["CANCELLED"] = "cancelled";
    ServiceUpdateStatus["EXPIRED"] = "expired";
})(ServiceUpdateStatus = exports.ServiceUpdateStatus || (exports.ServiceUpdateStatus = {}));
var DescribeServiceUpdatesMessage;
(function (DescribeServiceUpdatesMessage) {
    /**
     * @internal
     */
    DescribeServiceUpdatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceUpdatesMessage = exports.DescribeServiceUpdatesMessage || (exports.DescribeServiceUpdatesMessage = {}));
var ServiceUpdateSeverity;
(function (ServiceUpdateSeverity) {
    ServiceUpdateSeverity["CRITICAL"] = "critical";
    ServiceUpdateSeverity["IMPORTANT"] = "important";
    ServiceUpdateSeverity["LOW"] = "low";
    ServiceUpdateSeverity["MEDIUM"] = "medium";
})(ServiceUpdateSeverity = exports.ServiceUpdateSeverity || (exports.ServiceUpdateSeverity = {}));
var ServiceUpdateType;
(function (ServiceUpdateType) {
    ServiceUpdateType["SECURITY_UPDATE"] = "security-update";
})(ServiceUpdateType = exports.ServiceUpdateType || (exports.ServiceUpdateType = {}));
var ServiceUpdate;
(function (ServiceUpdate) {
    /**
     * @internal
     */
    ServiceUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUpdate = exports.ServiceUpdate || (exports.ServiceUpdate = {}));
var ServiceUpdatesMessage;
(function (ServiceUpdatesMessage) {
    /**
     * @internal
     */
    ServiceUpdatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUpdatesMessage = exports.ServiceUpdatesMessage || (exports.ServiceUpdatesMessage = {}));
var DescribeSnapshotsListMessage;
(function (DescribeSnapshotsListMessage) {
    /**
     * @internal
     */
    DescribeSnapshotsListMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsListMessage = exports.DescribeSnapshotsListMessage || (exports.DescribeSnapshotsListMessage = {}));
var DescribeSnapshotsMessage;
(function (DescribeSnapshotsMessage) {
    /**
     * @internal
     */
    DescribeSnapshotsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsMessage = exports.DescribeSnapshotsMessage || (exports.DescribeSnapshotsMessage = {}));
var TimeRangeFilter;
(function (TimeRangeFilter) {
    /**
     * @internal
     */
    TimeRangeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeRangeFilter = exports.TimeRangeFilter || (exports.TimeRangeFilter = {}));
var DescribeUpdateActionsMessage;
(function (DescribeUpdateActionsMessage) {
    /**
     * @internal
     */
    DescribeUpdateActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUpdateActionsMessage = exports.DescribeUpdateActionsMessage || (exports.DescribeUpdateActionsMessage = {}));
var NodeUpdateInitiatedBy;
(function (NodeUpdateInitiatedBy) {
    NodeUpdateInitiatedBy["CUSTOMER"] = "customer";
    NodeUpdateInitiatedBy["SYSTEM"] = "system";
})(NodeUpdateInitiatedBy = exports.NodeUpdateInitiatedBy || (exports.NodeUpdateInitiatedBy = {}));
var NodeUpdateStatus;
(function (NodeUpdateStatus) {
    NodeUpdateStatus["COMPLETE"] = "complete";
    NodeUpdateStatus["IN_PROGRESS"] = "in-progress";
    NodeUpdateStatus["NOT_APPLIED"] = "not-applied";
    NodeUpdateStatus["STOPPED"] = "stopped";
    NodeUpdateStatus["STOPPING"] = "stopping";
    NodeUpdateStatus["WAITING_TO_START"] = "waiting-to-start";
})(NodeUpdateStatus = exports.NodeUpdateStatus || (exports.NodeUpdateStatus = {}));
var CacheNodeUpdateStatus;
(function (CacheNodeUpdateStatus) {
    /**
     * @internal
     */
    CacheNodeUpdateStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheNodeUpdateStatus = exports.CacheNodeUpdateStatus || (exports.CacheNodeUpdateStatus = {}));
var NodeGroupMemberUpdateStatus;
(function (NodeGroupMemberUpdateStatus) {
    /**
     * @internal
     */
    NodeGroupMemberUpdateStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupMemberUpdateStatus = exports.NodeGroupMemberUpdateStatus || (exports.NodeGroupMemberUpdateStatus = {}));
var NodeGroupUpdateStatus;
(function (NodeGroupUpdateStatus) {
    /**
     * @internal
     */
    NodeGroupUpdateStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupUpdateStatus = exports.NodeGroupUpdateStatus || (exports.NodeGroupUpdateStatus = {}));
var SlaMet;
(function (SlaMet) {
    SlaMet["NA"] = "n/a";
    SlaMet["NO"] = "no";
    SlaMet["YES"] = "yes";
})(SlaMet = exports.SlaMet || (exports.SlaMet = {}));
var UpdateAction;
(function (UpdateAction) {
    /**
     * @internal
     */
    UpdateAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAction = exports.UpdateAction || (exports.UpdateAction = {}));
var UpdateActionsMessage;
(function (UpdateActionsMessage) {
    /**
     * @internal
     */
    UpdateActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionsMessage = exports.UpdateActionsMessage || (exports.UpdateActionsMessage = {}));
var DescribeUserGroupsMessage;
(function (DescribeUserGroupsMessage) {
    /**
     * @internal
     */
    DescribeUserGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserGroupsMessage = exports.DescribeUserGroupsMessage || (exports.DescribeUserGroupsMessage = {}));
var DescribeUserGroupsResult;
(function (DescribeUserGroupsResult) {
    /**
     * @internal
     */
    DescribeUserGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserGroupsResult = exports.DescribeUserGroupsResult || (exports.DescribeUserGroupsResult = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeUsersMessage;
(function (DescribeUsersMessage) {
    /**
     * @internal
     */
    DescribeUsersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUsersMessage = exports.DescribeUsersMessage || (exports.DescribeUsersMessage = {}));
var DescribeUsersResult;
(function (DescribeUsersResult) {
    /**
     * @internal
     */
    DescribeUsersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUsersResult = exports.DescribeUsersResult || (exports.DescribeUsersResult = {}));
var DisassociateGlobalReplicationGroupMessage;
(function (DisassociateGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    DisassociateGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateGlobalReplicationGroupMessage = exports.DisassociateGlobalReplicationGroupMessage || (exports.DisassociateGlobalReplicationGroupMessage = {}));
var DisassociateGlobalReplicationGroupResult;
(function (DisassociateGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    DisassociateGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateGlobalReplicationGroupResult = exports.DisassociateGlobalReplicationGroupResult || (exports.DisassociateGlobalReplicationGroupResult = {}));
var FailoverGlobalReplicationGroupMessage;
(function (FailoverGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    FailoverGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverGlobalReplicationGroupMessage = exports.FailoverGlobalReplicationGroupMessage || (exports.FailoverGlobalReplicationGroupMessage = {}));
var FailoverGlobalReplicationGroupResult;
(function (FailoverGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    FailoverGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverGlobalReplicationGroupResult = exports.FailoverGlobalReplicationGroupResult || (exports.FailoverGlobalReplicationGroupResult = {}));
var ReshardingConfiguration;
(function (ReshardingConfiguration) {
    /**
     * @internal
     */
    ReshardingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReshardingConfiguration = exports.ReshardingConfiguration || (exports.ReshardingConfiguration = {}));
var RegionalConfiguration;
(function (RegionalConfiguration) {
    /**
     * @internal
     */
    RegionalConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionalConfiguration = exports.RegionalConfiguration || (exports.RegionalConfiguration = {}));
var IncreaseNodeGroupsInGlobalReplicationGroupMessage;
(function (IncreaseNodeGroupsInGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    IncreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseNodeGroupsInGlobalReplicationGroupMessage = exports.IncreaseNodeGroupsInGlobalReplicationGroupMessage || (exports.IncreaseNodeGroupsInGlobalReplicationGroupMessage = {}));
var IncreaseNodeGroupsInGlobalReplicationGroupResult;
(function (IncreaseNodeGroupsInGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    IncreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseNodeGroupsInGlobalReplicationGroupResult = exports.IncreaseNodeGroupsInGlobalReplicationGroupResult || (exports.IncreaseNodeGroupsInGlobalReplicationGroupResult = {}));
var IncreaseReplicaCountMessage;
(function (IncreaseReplicaCountMessage) {
    /**
     * @internal
     */
    IncreaseReplicaCountMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseReplicaCountMessage = exports.IncreaseReplicaCountMessage || (exports.IncreaseReplicaCountMessage = {}));
var IncreaseReplicaCountResult;
(function (IncreaseReplicaCountResult) {
    /**
     * @internal
     */
    IncreaseReplicaCountResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseReplicaCountResult = exports.IncreaseReplicaCountResult || (exports.IncreaseReplicaCountResult = {}));
var InvalidKMSKeyFault;
(function (InvalidKMSKeyFault) {
    /**
     * @internal
     */
    InvalidKMSKeyFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKMSKeyFault = exports.InvalidKMSKeyFault || (exports.InvalidKMSKeyFault = {}));
var ListAllowedNodeTypeModificationsMessage;
(function (ListAllowedNodeTypeModificationsMessage) {
    /**
     * @internal
     */
    ListAllowedNodeTypeModificationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAllowedNodeTypeModificationsMessage = exports.ListAllowedNodeTypeModificationsMessage || (exports.ListAllowedNodeTypeModificationsMessage = {}));
var ListTagsForResourceMessage;
(function (ListTagsForResourceMessage) {
    /**
     * @internal
     */
    ListTagsForResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceMessage = exports.ListTagsForResourceMessage || (exports.ListTagsForResourceMessage = {}));
var ModifyCacheClusterMessage;
(function (ModifyCacheClusterMessage) {
    /**
     * @internal
     */
    ModifyCacheClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCacheClusterMessage = exports.ModifyCacheClusterMessage || (exports.ModifyCacheClusterMessage = {}));
var ModifyCacheClusterResult;
(function (ModifyCacheClusterResult) {
    /**
     * @internal
     */
    ModifyCacheClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCacheClusterResult = exports.ModifyCacheClusterResult || (exports.ModifyCacheClusterResult = {}));
var CacheParameterGroupNameMessage;
(function (CacheParameterGroupNameMessage) {
    /**
     * @internal
     */
    CacheParameterGroupNameMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheParameterGroupNameMessage = exports.CacheParameterGroupNameMessage || (exports.CacheParameterGroupNameMessage = {}));
var ParameterNameValue;
(function (ParameterNameValue) {
    /**
     * @internal
     */
    ParameterNameValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterNameValue = exports.ParameterNameValue || (exports.ParameterNameValue = {}));
var ModifyCacheParameterGroupMessage;
(function (ModifyCacheParameterGroupMessage) {
    /**
     * @internal
     */
    ModifyCacheParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCacheParameterGroupMessage = exports.ModifyCacheParameterGroupMessage || (exports.ModifyCacheParameterGroupMessage = {}));
var ModifyCacheSubnetGroupMessage;
(function (ModifyCacheSubnetGroupMessage) {
    /**
     * @internal
     */
    ModifyCacheSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCacheSubnetGroupMessage = exports.ModifyCacheSubnetGroupMessage || (exports.ModifyCacheSubnetGroupMessage = {}));
var ModifyCacheSubnetGroupResult;
(function (ModifyCacheSubnetGroupResult) {
    /**
     * @internal
     */
    ModifyCacheSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCacheSubnetGroupResult = exports.ModifyCacheSubnetGroupResult || (exports.ModifyCacheSubnetGroupResult = {}));
var SubnetInUse;
(function (SubnetInUse) {
    /**
     * @internal
     */
    SubnetInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetInUse = exports.SubnetInUse || (exports.SubnetInUse = {}));
var ModifyGlobalReplicationGroupMessage;
(function (ModifyGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    ModifyGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyGlobalReplicationGroupMessage = exports.ModifyGlobalReplicationGroupMessage || (exports.ModifyGlobalReplicationGroupMessage = {}));
var ModifyGlobalReplicationGroupResult;
(function (ModifyGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    ModifyGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyGlobalReplicationGroupResult = exports.ModifyGlobalReplicationGroupResult || (exports.ModifyGlobalReplicationGroupResult = {}));
var ModifyReplicationGroupMessage;
(function (ModifyReplicationGroupMessage) {
    /**
     * @internal
     */
    ModifyReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationGroupMessage = exports.ModifyReplicationGroupMessage || (exports.ModifyReplicationGroupMessage = {}));
var ModifyReplicationGroupResult;
(function (ModifyReplicationGroupResult) {
    /**
     * @internal
     */
    ModifyReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationGroupResult = exports.ModifyReplicationGroupResult || (exports.ModifyReplicationGroupResult = {}));
var ModifyReplicationGroupShardConfigurationMessage;
(function (ModifyReplicationGroupShardConfigurationMessage) {
    /**
     * @internal
     */
    ModifyReplicationGroupShardConfigurationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationGroupShardConfigurationMessage = exports.ModifyReplicationGroupShardConfigurationMessage || (exports.ModifyReplicationGroupShardConfigurationMessage = {}));
var ModifyReplicationGroupShardConfigurationResult;
(function (ModifyReplicationGroupShardConfigurationResult) {
    /**
     * @internal
     */
    ModifyReplicationGroupShardConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReplicationGroupShardConfigurationResult = exports.ModifyReplicationGroupShardConfigurationResult || (exports.ModifyReplicationGroupShardConfigurationResult = {}));
var ModifyUserMessage;
(function (ModifyUserMessage) {
    /**
     * @internal
     */
    ModifyUserMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyUserMessage = exports.ModifyUserMessage || (exports.ModifyUserMessage = {}));
var ModifyUserGroupMessage;
(function (ModifyUserGroupMessage) {
    /**
     * @internal
     */
    ModifyUserGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyUserGroupMessage = exports.ModifyUserGroupMessage || (exports.ModifyUserGroupMessage = {}));
var PurchaseReservedCacheNodesOfferingMessage;
(function (PurchaseReservedCacheNodesOfferingMessage) {
    /**
     * @internal
     */
    PurchaseReservedCacheNodesOfferingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedCacheNodesOfferingMessage = exports.PurchaseReservedCacheNodesOfferingMessage || (exports.PurchaseReservedCacheNodesOfferingMessage = {}));
var PurchaseReservedCacheNodesOfferingResult;
(function (PurchaseReservedCacheNodesOfferingResult) {
    /**
     * @internal
     */
    PurchaseReservedCacheNodesOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedCacheNodesOfferingResult = exports.PurchaseReservedCacheNodesOfferingResult || (exports.PurchaseReservedCacheNodesOfferingResult = {}));
var ReservedCacheNodeAlreadyExistsFault;
(function (ReservedCacheNodeAlreadyExistsFault) {
    /**
     * @internal
     */
    ReservedCacheNodeAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodeAlreadyExistsFault = exports.ReservedCacheNodeAlreadyExistsFault || (exports.ReservedCacheNodeAlreadyExistsFault = {}));
var ReservedCacheNodeQuotaExceededFault;
(function (ReservedCacheNodeQuotaExceededFault) {
    /**
     * @internal
     */
    ReservedCacheNodeQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedCacheNodeQuotaExceededFault = exports.ReservedCacheNodeQuotaExceededFault || (exports.ReservedCacheNodeQuotaExceededFault = {}));
var RebalanceSlotsInGlobalReplicationGroupMessage;
(function (RebalanceSlotsInGlobalReplicationGroupMessage) {
    /**
     * @internal
     */
    RebalanceSlotsInGlobalReplicationGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebalanceSlotsInGlobalReplicationGroupMessage = exports.RebalanceSlotsInGlobalReplicationGroupMessage || (exports.RebalanceSlotsInGlobalReplicationGroupMessage = {}));
var RebalanceSlotsInGlobalReplicationGroupResult;
(function (RebalanceSlotsInGlobalReplicationGroupResult) {
    /**
     * @internal
     */
    RebalanceSlotsInGlobalReplicationGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebalanceSlotsInGlobalReplicationGroupResult = exports.RebalanceSlotsInGlobalReplicationGroupResult || (exports.RebalanceSlotsInGlobalReplicationGroupResult = {}));
var RebootCacheClusterMessage;
(function (RebootCacheClusterMessage) {
    /**
     * @internal
     */
    RebootCacheClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootCacheClusterMessage = exports.RebootCacheClusterMessage || (exports.RebootCacheClusterMessage = {}));
var RebootCacheClusterResult;
(function (RebootCacheClusterResult) {
    /**
     * @internal
     */
    RebootCacheClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootCacheClusterResult = exports.RebootCacheClusterResult || (exports.RebootCacheClusterResult = {}));
var RemoveTagsFromResourceMessage;
(function (RemoveTagsFromResourceMessage) {
    /**
     * @internal
     */
    RemoveTagsFromResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceMessage = exports.RemoveTagsFromResourceMessage || (exports.RemoveTagsFromResourceMessage = {}));
var TagNotFoundFault;
(function (TagNotFoundFault) {
    /**
     * @internal
     */
    TagNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagNotFoundFault = exports.TagNotFoundFault || (exports.TagNotFoundFault = {}));
var ResetCacheParameterGroupMessage;
(function (ResetCacheParameterGroupMessage) {
    /**
     * @internal
     */
    ResetCacheParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetCacheParameterGroupMessage = exports.ResetCacheParameterGroupMessage || (exports.ResetCacheParameterGroupMessage = {}));
var AuthorizationNotFoundFault;
(function (AuthorizationNotFoundFault) {
    /**
     * @internal
     */
    AuthorizationNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationNotFoundFault = exports.AuthorizationNotFoundFault || (exports.AuthorizationNotFoundFault = {}));
var RevokeCacheSecurityGroupIngressMessage;
(function (RevokeCacheSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    RevokeCacheSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeCacheSecurityGroupIngressMessage = exports.RevokeCacheSecurityGroupIngressMessage || (exports.RevokeCacheSecurityGroupIngressMessage = {}));
var RevokeCacheSecurityGroupIngressResult;
(function (RevokeCacheSecurityGroupIngressResult) {
    /**
     * @internal
     */
    RevokeCacheSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeCacheSecurityGroupIngressResult = exports.RevokeCacheSecurityGroupIngressResult || (exports.RevokeCacheSecurityGroupIngressResult = {}));
var ReplicationGroupAlreadyUnderMigrationFault;
(function (ReplicationGroupAlreadyUnderMigrationFault) {
    /**
     * @internal
     */
    ReplicationGroupAlreadyUnderMigrationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupAlreadyUnderMigrationFault = exports.ReplicationGroupAlreadyUnderMigrationFault || (exports.ReplicationGroupAlreadyUnderMigrationFault = {}));
var CustomerNodeEndpoint;
(function (CustomerNodeEndpoint) {
    /**
     * @internal
     */
    CustomerNodeEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerNodeEndpoint = exports.CustomerNodeEndpoint || (exports.CustomerNodeEndpoint = {}));
var StartMigrationMessage;
(function (StartMigrationMessage) {
    /**
     * @internal
     */
    StartMigrationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMigrationMessage = exports.StartMigrationMessage || (exports.StartMigrationMessage = {}));
var StartMigrationResponse;
(function (StartMigrationResponse) {
    /**
     * @internal
     */
    StartMigrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMigrationResponse = exports.StartMigrationResponse || (exports.StartMigrationResponse = {}));
var APICallRateForCustomerExceededFault;
(function (APICallRateForCustomerExceededFault) {
    /**
     * @internal
     */
    APICallRateForCustomerExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APICallRateForCustomerExceededFault = exports.APICallRateForCustomerExceededFault || (exports.APICallRateForCustomerExceededFault = {}));
var NodeGroupNotFoundFault;
(function (NodeGroupNotFoundFault) {
    /**
     * @internal
     */
    NodeGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeGroupNotFoundFault = exports.NodeGroupNotFoundFault || (exports.NodeGroupNotFoundFault = {}));
var TestFailoverMessage;
(function (TestFailoverMessage) {
    /**
     * @internal
     */
    TestFailoverMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestFailoverMessage = exports.TestFailoverMessage || (exports.TestFailoverMessage = {}));
var TestFailoverNotAvailableFault;
(function (TestFailoverNotAvailableFault) {
    /**
     * @internal
     */
    TestFailoverNotAvailableFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestFailoverNotAvailableFault = exports.TestFailoverNotAvailableFault || (exports.TestFailoverNotAvailableFault = {}));
var TestFailoverResult;
(function (TestFailoverResult) {
    /**
     * @internal
     */
    TestFailoverResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestFailoverResult = exports.TestFailoverResult || (exports.TestFailoverResult = {}));
//# sourceMappingURL=models_0.js.map