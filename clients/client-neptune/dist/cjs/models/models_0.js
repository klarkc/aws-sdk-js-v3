"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDBInstanceStateFault = exports.InsufficientStorageClusterCapacityFault = exports.DBSubnetGroupNotFoundFault = exports.DBSubnetGroupDoesNotCoverEnoughAZs = exports.DBClusterQuotaExceededFault = exports.DBClusterParameterGroupNotFoundFault = exports.DBClusterAlreadyExistsFault = exports.CreateDBClusterResult = exports.DBCluster = exports.VpcSecurityGroupMembership = exports.DBClusterOptionGroupStatus = exports.DBClusterMember = exports.DBClusterRole = exports.CreateDBClusterMessage = exports.CopyDBParameterGroupResult = exports.DBParameterGroup = exports.CopyDBParameterGroupMessage = exports.SnapshotQuotaExceededFault = exports.KMSKeyNotAccessibleFault = exports.InvalidDBClusterSnapshotStateFault = exports.DBClusterSnapshotNotFoundFault = exports.DBClusterSnapshotAlreadyExistsFault = exports.CopyDBClusterSnapshotResult = exports.DBClusterSnapshot = exports.CopyDBClusterSnapshotMessage = exports.DBParameterGroupQuotaExceededFault = exports.DBParameterGroupNotFoundFault = exports.DBParameterGroupAlreadyExistsFault = exports.CopyDBClusterParameterGroupResult = exports.DBClusterParameterGroup = exports.CopyDBClusterParameterGroupMessage = exports.ResourceNotFoundFault = exports.ApplyPendingMaintenanceActionResult = exports.ResourcePendingMaintenanceActions = exports.PendingMaintenanceAction = exports.ApplyPendingMaintenanceActionMessage = exports.DBSnapshotNotFoundFault = exports.DBInstanceNotFoundFault = exports.AddTagsToResourceMessage = exports.Tag = exports.SubscriptionNotFoundFault = exports.SourceNotFoundFault = exports.AddSourceIdentifierToSubscriptionResult = exports.EventSubscription = exports.AddSourceIdentifierToSubscriptionMessage = exports.InvalidDBClusterStateFault = exports.DBClusterRoleQuotaExceededFault = exports.DBClusterRoleAlreadyExistsFault = exports.DBClusterNotFoundFault = exports.AddRoleToDBClusterMessage = void 0;
exports.SubscriptionCategoryNotFoundFault = exports.SubscriptionAlreadyExistFault = exports.SNSTopicArnNotFoundFault = exports.SNSNoAuthorizationFault = exports.SNSInvalidTopicFault = exports.EventSubscriptionQuotaExceededFault = exports.CreateEventSubscriptionResult = exports.CreateEventSubscriptionMessage = exports.DBSubnetQuotaExceededFault = exports.DBSubnetGroupQuotaExceededFault = exports.DBSubnetGroupAlreadyExistsFault = exports.CreateDBSubnetGroupResult = exports.CreateDBSubnetGroupMessage = exports.CreateDBParameterGroupResult = exports.CreateDBParameterGroupMessage = exports.StorageTypeNotSupportedFault = exports.ProvisionedIopsNotAvailableInAZFault = exports.OptionGroupNotFoundFault = exports.InsufficientDBInstanceCapacityFault = exports.InstanceQuotaExceededFault = exports.DomainNotFoundFault = exports.DBSecurityGroupNotFoundFault = exports.DBInstanceAlreadyExistsFault = exports.CreateDBInstanceResult = exports.DBInstance = exports.DBInstanceStatusInfo = exports.PendingModifiedValues = exports.PendingCloudwatchLogsExports = exports.OptionGroupMembership = exports.Endpoint = exports.DomainMembership = exports.DBSubnetGroup = exports.Subnet = exports.AvailabilityZone = exports.DBSecurityGroupMembership = exports.DBParameterGroupStatus = exports.CreateDBInstanceMessage = exports.AuthorizationNotFoundFault = exports.CreateDBClusterSnapshotResult = exports.CreateDBClusterSnapshotMessage = exports.CreateDBClusterParameterGroupResult = exports.CreateDBClusterParameterGroupMessage = exports.DBClusterEndpointQuotaExceededFault = exports.DBClusterEndpointAlreadyExistsFault = exports.CreateDBClusterEndpointOutput = exports.CreateDBClusterEndpointMessage = exports.StorageQuotaExceededFault = exports.InvalidVPCNetworkStateFault = exports.InvalidSubnet = exports.InvalidDBSubnetGroupStateFault = void 0;
exports.DescribeDBSubnetGroupsMessage = exports.DBSubnetGroupMessage = exports.DescribeDBParametersMessage = exports.DBParameterGroupDetails = exports.DescribeDBParameterGroupsMessage = exports.DBParameterGroupsMessage = exports.DescribeDBInstancesMessage = exports.DBInstanceMessage = exports.DescribeDBEngineVersionsMessage = exports.DBEngineVersionMessage = exports.DBEngineVersion = exports.UpgradeTarget = exports.Timezone = exports.CharacterSet = exports.DescribeDBClusterSnapshotsMessage = exports.DBClusterSnapshotMessage = exports.DescribeDBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttribute = exports.DescribeDBClusterSnapshotAttributesMessage = exports.DescribeDBClustersMessage = exports.DBClusterMessage = exports.DescribeDBClusterParametersMessage = exports.DBClusterParameterGroupDetails = exports.Parameter = exports.DescribeDBClusterParameterGroupsMessage = exports.DBClusterParameterGroupsMessage = exports.DescribeDBClusterEndpointsMessage = exports.Filter = exports.DBClusterEndpointMessage = exports.DBClusterEndpoint = exports.InvalidEventSubscriptionStateFault = exports.DeleteEventSubscriptionResult = exports.DeleteEventSubscriptionMessage = exports.InvalidDBSubnetStateFault = exports.DeleteDBSubnetGroupMessage = exports.DeleteDBParameterGroupMessage = exports.DeleteDBInstanceResult = exports.DeleteDBInstanceMessage = exports.DBSnapshotAlreadyExistsFault = exports.DeleteDBClusterSnapshotResult = exports.DeleteDBClusterSnapshotMessage = exports.InvalidDBParameterGroupStateFault = exports.DeleteDBClusterParameterGroupMessage = exports.InvalidDBClusterEndpointStateFault = exports.DeleteDBClusterEndpointOutput = exports.DeleteDBClusterEndpointMessage = exports.DBClusterEndpointNotFoundFault = exports.DeleteDBClusterResult = exports.DeleteDBClusterMessage = void 0;
exports.ModifyEventSubscriptionResult = exports.ModifyEventSubscriptionMessage = exports.SubnetAlreadyInUse = exports.ModifyDBSubnetGroupResult = exports.ModifyDBSubnetGroupMessage = exports.ModifyDBParameterGroupMessage = exports.DBParameterGroupNameMessage = exports.ModifyDBInstanceResult = exports.ModifyDBInstanceMessage = exports.DBUpgradeDependencyFailureFault = exports.CertificateNotFoundFault = exports.SharedSnapshotQuotaExceededFault = exports.ModifyDBClusterSnapshotAttributeResult = exports.ModifyDBClusterSnapshotAttributeMessage = exports.ModifyDBClusterParameterGroupMessage = exports.DBClusterParameterGroupNameMessage = exports.ModifyDBClusterEndpointOutput = exports.ModifyDBClusterEndpointMessage = exports.ModifyDBClusterResult = exports.ModifyDBClusterMessage = exports.CloudwatchLogsExportConfiguration = exports.InvalidDBSecurityGroupStateFault = exports.TagListMessage = exports.ListTagsForResourceMessage = exports.FailoverDBClusterResult = exports.FailoverDBClusterMessage = exports.DescribeValidDBInstanceModificationsResult = exports.ValidDBInstanceModificationsMessage = exports.ValidStorageOptions = exports.Range = exports.DoubleRange = exports.DescribeValidDBInstanceModificationsMessage = exports.PendingMaintenanceActionsMessage = exports.DescribePendingMaintenanceActionsMessage = exports.OrderableDBInstanceOptionsMessage = exports.OrderableDBInstanceOption = exports.DescribeOrderableDBInstanceOptionsMessage = exports.EventSubscriptionsMessage = exports.DescribeEventSubscriptionsMessage = exports.EventsMessage = exports.Event = exports.DescribeEventsMessage = exports.EventCategoriesMessage = exports.EventCategoriesMap = exports.DescribeEventCategoriesMessage = exports.DescribeEngineDefaultParametersResult = exports.DescribeEngineDefaultParametersMessage = exports.DescribeEngineDefaultClusterParametersResult = exports.EngineDefaults = exports.DescribeEngineDefaultClusterParametersMessage = void 0;
exports.StopDBClusterResult = exports.StopDBClusterMessage = exports.StartDBClusterResult = exports.StartDBClusterMessage = exports.RestoreDBClusterToPointInTimeResult = exports.RestoreDBClusterToPointInTimeMessage = exports.RestoreDBClusterFromSnapshotResult = exports.RestoreDBClusterFromSnapshotMessage = exports.InvalidRestoreFault = exports.InvalidDBSnapshotStateFault = exports.InsufficientDBClusterCapacityFault = exports.ResetDBParameterGroupMessage = exports.ResetDBClusterParameterGroupMessage = exports.RemoveTagsFromResourceMessage = exports.RemoveSourceIdentifierFromSubscriptionResult = exports.RemoveSourceIdentifierFromSubscriptionMessage = exports.RemoveRoleFromDBClusterMessage = exports.DBClusterRoleNotFoundFault = exports.RebootDBInstanceResult = exports.RebootDBInstanceMessage = exports.PromoteReadReplicaDBClusterResult = exports.PromoteReadReplicaDBClusterMessage = void 0;
var AddRoleToDBClusterMessage;
(function (AddRoleToDBClusterMessage) {
    /**
     * @internal
     */
    AddRoleToDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRoleToDBClusterMessage = exports.AddRoleToDBClusterMessage || (exports.AddRoleToDBClusterMessage = {}));
var DBClusterNotFoundFault;
(function (DBClusterNotFoundFault) {
    /**
     * @internal
     */
    DBClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterNotFoundFault = exports.DBClusterNotFoundFault || (exports.DBClusterNotFoundFault = {}));
var DBClusterRoleAlreadyExistsFault;
(function (DBClusterRoleAlreadyExistsFault) {
    /**
     * @internal
     */
    DBClusterRoleAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterRoleAlreadyExistsFault = exports.DBClusterRoleAlreadyExistsFault || (exports.DBClusterRoleAlreadyExistsFault = {}));
var DBClusterRoleQuotaExceededFault;
(function (DBClusterRoleQuotaExceededFault) {
    /**
     * @internal
     */
    DBClusterRoleQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterRoleQuotaExceededFault = exports.DBClusterRoleQuotaExceededFault || (exports.DBClusterRoleQuotaExceededFault = {}));
var InvalidDBClusterStateFault;
(function (InvalidDBClusterStateFault) {
    /**
     * @internal
     */
    InvalidDBClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBClusterStateFault = exports.InvalidDBClusterStateFault || (exports.InvalidDBClusterStateFault = {}));
var AddSourceIdentifierToSubscriptionMessage;
(function (AddSourceIdentifierToSubscriptionMessage) {
    /**
     * @internal
     */
    AddSourceIdentifierToSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddSourceIdentifierToSubscriptionMessage = exports.AddSourceIdentifierToSubscriptionMessage || (exports.AddSourceIdentifierToSubscriptionMessage = {}));
var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscription = exports.EventSubscription || (exports.EventSubscription = {}));
var AddSourceIdentifierToSubscriptionResult;
(function (AddSourceIdentifierToSubscriptionResult) {
    /**
     * @internal
     */
    AddSourceIdentifierToSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddSourceIdentifierToSubscriptionResult = exports.AddSourceIdentifierToSubscriptionResult || (exports.AddSourceIdentifierToSubscriptionResult = {}));
var SourceNotFoundFault;
(function (SourceNotFoundFault) {
    /**
     * @internal
     */
    SourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceNotFoundFault = exports.SourceNotFoundFault || (exports.SourceNotFoundFault = {}));
var SubscriptionNotFoundFault;
(function (SubscriptionNotFoundFault) {
    /**
     * @internal
     */
    SubscriptionNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionNotFoundFault = exports.SubscriptionNotFoundFault || (exports.SubscriptionNotFoundFault = {}));
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
var DBInstanceNotFoundFault;
(function (DBInstanceNotFoundFault) {
    /**
     * @internal
     */
    DBInstanceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceNotFoundFault = exports.DBInstanceNotFoundFault || (exports.DBInstanceNotFoundFault = {}));
var DBSnapshotNotFoundFault;
(function (DBSnapshotNotFoundFault) {
    /**
     * @internal
     */
    DBSnapshotNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotNotFoundFault = exports.DBSnapshotNotFoundFault || (exports.DBSnapshotNotFoundFault = {}));
var ApplyPendingMaintenanceActionMessage;
(function (ApplyPendingMaintenanceActionMessage) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyPendingMaintenanceActionMessage = exports.ApplyPendingMaintenanceActionMessage || (exports.ApplyPendingMaintenanceActionMessage = {}));
var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    /**
     * @internal
     */
    PendingMaintenanceAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingMaintenanceAction = exports.PendingMaintenanceAction || (exports.PendingMaintenanceAction = {}));
var ResourcePendingMaintenanceActions;
(function (ResourcePendingMaintenanceActions) {
    /**
     * @internal
     */
    ResourcePendingMaintenanceActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePendingMaintenanceActions = exports.ResourcePendingMaintenanceActions || (exports.ResourcePendingMaintenanceActions = {}));
var ApplyPendingMaintenanceActionResult;
(function (ApplyPendingMaintenanceActionResult) {
    /**
     * @internal
     */
    ApplyPendingMaintenanceActionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplyPendingMaintenanceActionResult = exports.ApplyPendingMaintenanceActionResult || (exports.ApplyPendingMaintenanceActionResult = {}));
var ResourceNotFoundFault;
(function (ResourceNotFoundFault) {
    /**
     * @internal
     */
    ResourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundFault = exports.ResourceNotFoundFault || (exports.ResourceNotFoundFault = {}));
var CopyDBClusterParameterGroupMessage;
(function (CopyDBClusterParameterGroupMessage) {
    /**
     * @internal
     */
    CopyDBClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBClusterParameterGroupMessage = exports.CopyDBClusterParameterGroupMessage || (exports.CopyDBClusterParameterGroupMessage = {}));
var DBClusterParameterGroup;
(function (DBClusterParameterGroup) {
    /**
     * @internal
     */
    DBClusterParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterParameterGroup = exports.DBClusterParameterGroup || (exports.DBClusterParameterGroup = {}));
var CopyDBClusterParameterGroupResult;
(function (CopyDBClusterParameterGroupResult) {
    /**
     * @internal
     */
    CopyDBClusterParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBClusterParameterGroupResult = exports.CopyDBClusterParameterGroupResult || (exports.CopyDBClusterParameterGroupResult = {}));
var DBParameterGroupAlreadyExistsFault;
(function (DBParameterGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    DBParameterGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupAlreadyExistsFault = exports.DBParameterGroupAlreadyExistsFault || (exports.DBParameterGroupAlreadyExistsFault = {}));
var DBParameterGroupNotFoundFault;
(function (DBParameterGroupNotFoundFault) {
    /**
     * @internal
     */
    DBParameterGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupNotFoundFault = exports.DBParameterGroupNotFoundFault || (exports.DBParameterGroupNotFoundFault = {}));
var DBParameterGroupQuotaExceededFault;
(function (DBParameterGroupQuotaExceededFault) {
    /**
     * @internal
     */
    DBParameterGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupQuotaExceededFault = exports.DBParameterGroupQuotaExceededFault || (exports.DBParameterGroupQuotaExceededFault = {}));
var CopyDBClusterSnapshotMessage;
(function (CopyDBClusterSnapshotMessage) {
    /**
     * @internal
     */
    CopyDBClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBClusterSnapshotMessage = exports.CopyDBClusterSnapshotMessage || (exports.CopyDBClusterSnapshotMessage = {}));
var DBClusterSnapshot;
(function (DBClusterSnapshot) {
    /**
     * @internal
     */
    DBClusterSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshot = exports.DBClusterSnapshot || (exports.DBClusterSnapshot = {}));
var CopyDBClusterSnapshotResult;
(function (CopyDBClusterSnapshotResult) {
    /**
     * @internal
     */
    CopyDBClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBClusterSnapshotResult = exports.CopyDBClusterSnapshotResult || (exports.CopyDBClusterSnapshotResult = {}));
var DBClusterSnapshotAlreadyExistsFault;
(function (DBClusterSnapshotAlreadyExistsFault) {
    /**
     * @internal
     */
    DBClusterSnapshotAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshotAlreadyExistsFault = exports.DBClusterSnapshotAlreadyExistsFault || (exports.DBClusterSnapshotAlreadyExistsFault = {}));
var DBClusterSnapshotNotFoundFault;
(function (DBClusterSnapshotNotFoundFault) {
    /**
     * @internal
     */
    DBClusterSnapshotNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshotNotFoundFault = exports.DBClusterSnapshotNotFoundFault || (exports.DBClusterSnapshotNotFoundFault = {}));
var InvalidDBClusterSnapshotStateFault;
(function (InvalidDBClusterSnapshotStateFault) {
    /**
     * @internal
     */
    InvalidDBClusterSnapshotStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBClusterSnapshotStateFault = exports.InvalidDBClusterSnapshotStateFault || (exports.InvalidDBClusterSnapshotStateFault = {}));
var KMSKeyNotAccessibleFault;
(function (KMSKeyNotAccessibleFault) {
    /**
     * @internal
     */
    KMSKeyNotAccessibleFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSKeyNotAccessibleFault = exports.KMSKeyNotAccessibleFault || (exports.KMSKeyNotAccessibleFault = {}));
var SnapshotQuotaExceededFault;
(function (SnapshotQuotaExceededFault) {
    /**
     * @internal
     */
    SnapshotQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotQuotaExceededFault = exports.SnapshotQuotaExceededFault || (exports.SnapshotQuotaExceededFault = {}));
var CopyDBParameterGroupMessage;
(function (CopyDBParameterGroupMessage) {
    /**
     * @internal
     */
    CopyDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBParameterGroupMessage = exports.CopyDBParameterGroupMessage || (exports.CopyDBParameterGroupMessage = {}));
var DBParameterGroup;
(function (DBParameterGroup) {
    /**
     * @internal
     */
    DBParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroup = exports.DBParameterGroup || (exports.DBParameterGroup = {}));
var CopyDBParameterGroupResult;
(function (CopyDBParameterGroupResult) {
    /**
     * @internal
     */
    CopyDBParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBParameterGroupResult = exports.CopyDBParameterGroupResult || (exports.CopyDBParameterGroupResult = {}));
var CreateDBClusterMessage;
(function (CreateDBClusterMessage) {
    /**
     * @internal
     */
    CreateDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterMessage = exports.CreateDBClusterMessage || (exports.CreateDBClusterMessage = {}));
var DBClusterRole;
(function (DBClusterRole) {
    /**
     * @internal
     */
    DBClusterRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterRole = exports.DBClusterRole || (exports.DBClusterRole = {}));
var DBClusterMember;
(function (DBClusterMember) {
    /**
     * @internal
     */
    DBClusterMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterMember = exports.DBClusterMember || (exports.DBClusterMember = {}));
var DBClusterOptionGroupStatus;
(function (DBClusterOptionGroupStatus) {
    /**
     * @internal
     */
    DBClusterOptionGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterOptionGroupStatus = exports.DBClusterOptionGroupStatus || (exports.DBClusterOptionGroupStatus = {}));
var VpcSecurityGroupMembership;
(function (VpcSecurityGroupMembership) {
    /**
     * @internal
     */
    VpcSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcSecurityGroupMembership = exports.VpcSecurityGroupMembership || (exports.VpcSecurityGroupMembership = {}));
var DBCluster;
(function (DBCluster) {
    /**
     * @internal
     */
    DBCluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBCluster = exports.DBCluster || (exports.DBCluster = {}));
var CreateDBClusterResult;
(function (CreateDBClusterResult) {
    /**
     * @internal
     */
    CreateDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterResult = exports.CreateDBClusterResult || (exports.CreateDBClusterResult = {}));
var DBClusterAlreadyExistsFault;
(function (DBClusterAlreadyExistsFault) {
    /**
     * @internal
     */
    DBClusterAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterAlreadyExistsFault = exports.DBClusterAlreadyExistsFault || (exports.DBClusterAlreadyExistsFault = {}));
var DBClusterParameterGroupNotFoundFault;
(function (DBClusterParameterGroupNotFoundFault) {
    /**
     * @internal
     */
    DBClusterParameterGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterParameterGroupNotFoundFault = exports.DBClusterParameterGroupNotFoundFault || (exports.DBClusterParameterGroupNotFoundFault = {}));
var DBClusterQuotaExceededFault;
(function (DBClusterQuotaExceededFault) {
    /**
     * @internal
     */
    DBClusterQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterQuotaExceededFault = exports.DBClusterQuotaExceededFault || (exports.DBClusterQuotaExceededFault = {}));
var DBSubnetGroupDoesNotCoverEnoughAZs;
(function (DBSubnetGroupDoesNotCoverEnoughAZs) {
    /**
     * @internal
     */
    DBSubnetGroupDoesNotCoverEnoughAZs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupDoesNotCoverEnoughAZs = exports.DBSubnetGroupDoesNotCoverEnoughAZs || (exports.DBSubnetGroupDoesNotCoverEnoughAZs = {}));
var DBSubnetGroupNotFoundFault;
(function (DBSubnetGroupNotFoundFault) {
    /**
     * @internal
     */
    DBSubnetGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupNotFoundFault = exports.DBSubnetGroupNotFoundFault || (exports.DBSubnetGroupNotFoundFault = {}));
var InsufficientStorageClusterCapacityFault;
(function (InsufficientStorageClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientStorageClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientStorageClusterCapacityFault = exports.InsufficientStorageClusterCapacityFault || (exports.InsufficientStorageClusterCapacityFault = {}));
var InvalidDBInstanceStateFault;
(function (InvalidDBInstanceStateFault) {
    /**
     * @internal
     */
    InvalidDBInstanceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBInstanceStateFault = exports.InvalidDBInstanceStateFault || (exports.InvalidDBInstanceStateFault = {}));
var InvalidDBSubnetGroupStateFault;
(function (InvalidDBSubnetGroupStateFault) {
    /**
     * @internal
     */
    InvalidDBSubnetGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSubnetGroupStateFault = exports.InvalidDBSubnetGroupStateFault || (exports.InvalidDBSubnetGroupStateFault = {}));
var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnet = exports.InvalidSubnet || (exports.InvalidSubnet = {}));
var InvalidVPCNetworkStateFault;
(function (InvalidVPCNetworkStateFault) {
    /**
     * @internal
     */
    InvalidVPCNetworkStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVPCNetworkStateFault = exports.InvalidVPCNetworkStateFault || (exports.InvalidVPCNetworkStateFault = {}));
var StorageQuotaExceededFault;
(function (StorageQuotaExceededFault) {
    /**
     * @internal
     */
    StorageQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageQuotaExceededFault = exports.StorageQuotaExceededFault || (exports.StorageQuotaExceededFault = {}));
var CreateDBClusterEndpointMessage;
(function (CreateDBClusterEndpointMessage) {
    /**
     * @internal
     */
    CreateDBClusterEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterEndpointMessage = exports.CreateDBClusterEndpointMessage || (exports.CreateDBClusterEndpointMessage = {}));
var CreateDBClusterEndpointOutput;
(function (CreateDBClusterEndpointOutput) {
    /**
     * @internal
     */
    CreateDBClusterEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterEndpointOutput = exports.CreateDBClusterEndpointOutput || (exports.CreateDBClusterEndpointOutput = {}));
var DBClusterEndpointAlreadyExistsFault;
(function (DBClusterEndpointAlreadyExistsFault) {
    /**
     * @internal
     */
    DBClusterEndpointAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpointAlreadyExistsFault = exports.DBClusterEndpointAlreadyExistsFault || (exports.DBClusterEndpointAlreadyExistsFault = {}));
var DBClusterEndpointQuotaExceededFault;
(function (DBClusterEndpointQuotaExceededFault) {
    /**
     * @internal
     */
    DBClusterEndpointQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpointQuotaExceededFault = exports.DBClusterEndpointQuotaExceededFault || (exports.DBClusterEndpointQuotaExceededFault = {}));
var CreateDBClusterParameterGroupMessage;
(function (CreateDBClusterParameterGroupMessage) {
    /**
     * @internal
     */
    CreateDBClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterParameterGroupMessage = exports.CreateDBClusterParameterGroupMessage || (exports.CreateDBClusterParameterGroupMessage = {}));
var CreateDBClusterParameterGroupResult;
(function (CreateDBClusterParameterGroupResult) {
    /**
     * @internal
     */
    CreateDBClusterParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterParameterGroupResult = exports.CreateDBClusterParameterGroupResult || (exports.CreateDBClusterParameterGroupResult = {}));
var CreateDBClusterSnapshotMessage;
(function (CreateDBClusterSnapshotMessage) {
    /**
     * @internal
     */
    CreateDBClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterSnapshotMessage = exports.CreateDBClusterSnapshotMessage || (exports.CreateDBClusterSnapshotMessage = {}));
var CreateDBClusterSnapshotResult;
(function (CreateDBClusterSnapshotResult) {
    /**
     * @internal
     */
    CreateDBClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBClusterSnapshotResult = exports.CreateDBClusterSnapshotResult || (exports.CreateDBClusterSnapshotResult = {}));
var AuthorizationNotFoundFault;
(function (AuthorizationNotFoundFault) {
    /**
     * @internal
     */
    AuthorizationNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationNotFoundFault = exports.AuthorizationNotFoundFault || (exports.AuthorizationNotFoundFault = {}));
var CreateDBInstanceMessage;
(function (CreateDBInstanceMessage) {
    /**
     * @internal
     */
    CreateDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBInstanceMessage = exports.CreateDBInstanceMessage || (exports.CreateDBInstanceMessage = {}));
var DBParameterGroupStatus;
(function (DBParameterGroupStatus) {
    /**
     * @internal
     */
    DBParameterGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupStatus = exports.DBParameterGroupStatus || (exports.DBParameterGroupStatus = {}));
var DBSecurityGroupMembership;
(function (DBSecurityGroupMembership) {
    /**
     * @internal
     */
    DBSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupMembership = exports.DBSecurityGroupMembership || (exports.DBSecurityGroupMembership = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var DBSubnetGroup;
(function (DBSubnetGroup) {
    /**
     * @internal
     */
    DBSubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroup = exports.DBSubnetGroup || (exports.DBSubnetGroup = {}));
var DomainMembership;
(function (DomainMembership) {
    /**
     * @internal
     */
    DomainMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainMembership = exports.DomainMembership || (exports.DomainMembership = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var OptionGroupMembership;
(function (OptionGroupMembership) {
    /**
     * @internal
     */
    OptionGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupMembership = exports.OptionGroupMembership || (exports.OptionGroupMembership = {}));
var PendingCloudwatchLogsExports;
(function (PendingCloudwatchLogsExports) {
    /**
     * @internal
     */
    PendingCloudwatchLogsExports.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingCloudwatchLogsExports = exports.PendingCloudwatchLogsExports || (exports.PendingCloudwatchLogsExports = {}));
var PendingModifiedValues;
(function (PendingModifiedValues) {
    /**
     * @internal
     */
    PendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingModifiedValues = exports.PendingModifiedValues || (exports.PendingModifiedValues = {}));
var DBInstanceStatusInfo;
(function (DBInstanceStatusInfo) {
    /**
     * @internal
     */
    DBInstanceStatusInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceStatusInfo = exports.DBInstanceStatusInfo || (exports.DBInstanceStatusInfo = {}));
var DBInstance;
(function (DBInstance) {
    /**
     * @internal
     */
    DBInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstance = exports.DBInstance || (exports.DBInstance = {}));
var CreateDBInstanceResult;
(function (CreateDBInstanceResult) {
    /**
     * @internal
     */
    CreateDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBInstanceResult = exports.CreateDBInstanceResult || (exports.CreateDBInstanceResult = {}));
var DBInstanceAlreadyExistsFault;
(function (DBInstanceAlreadyExistsFault) {
    /**
     * @internal
     */
    DBInstanceAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAlreadyExistsFault = exports.DBInstanceAlreadyExistsFault || (exports.DBInstanceAlreadyExistsFault = {}));
var DBSecurityGroupNotFoundFault;
(function (DBSecurityGroupNotFoundFault) {
    /**
     * @internal
     */
    DBSecurityGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupNotFoundFault = exports.DBSecurityGroupNotFoundFault || (exports.DBSecurityGroupNotFoundFault = {}));
var DomainNotFoundFault;
(function (DomainNotFoundFault) {
    /**
     * @internal
     */
    DomainNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainNotFoundFault = exports.DomainNotFoundFault || (exports.DomainNotFoundFault = {}));
var InstanceQuotaExceededFault;
(function (InstanceQuotaExceededFault) {
    /**
     * @internal
     */
    InstanceQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceQuotaExceededFault = exports.InstanceQuotaExceededFault || (exports.InstanceQuotaExceededFault = {}));
var InsufficientDBInstanceCapacityFault;
(function (InsufficientDBInstanceCapacityFault) {
    /**
     * @internal
     */
    InsufficientDBInstanceCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientDBInstanceCapacityFault = exports.InsufficientDBInstanceCapacityFault || (exports.InsufficientDBInstanceCapacityFault = {}));
var OptionGroupNotFoundFault;
(function (OptionGroupNotFoundFault) {
    /**
     * @internal
     */
    OptionGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupNotFoundFault = exports.OptionGroupNotFoundFault || (exports.OptionGroupNotFoundFault = {}));
var ProvisionedIopsNotAvailableInAZFault;
(function (ProvisionedIopsNotAvailableInAZFault) {
    /**
     * @internal
     */
    ProvisionedIopsNotAvailableInAZFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedIopsNotAvailableInAZFault = exports.ProvisionedIopsNotAvailableInAZFault || (exports.ProvisionedIopsNotAvailableInAZFault = {}));
var StorageTypeNotSupportedFault;
(function (StorageTypeNotSupportedFault) {
    /**
     * @internal
     */
    StorageTypeNotSupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageTypeNotSupportedFault = exports.StorageTypeNotSupportedFault || (exports.StorageTypeNotSupportedFault = {}));
var CreateDBParameterGroupMessage;
(function (CreateDBParameterGroupMessage) {
    /**
     * @internal
     */
    CreateDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBParameterGroupMessage = exports.CreateDBParameterGroupMessage || (exports.CreateDBParameterGroupMessage = {}));
var CreateDBParameterGroupResult;
(function (CreateDBParameterGroupResult) {
    /**
     * @internal
     */
    CreateDBParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBParameterGroupResult = exports.CreateDBParameterGroupResult || (exports.CreateDBParameterGroupResult = {}));
var CreateDBSubnetGroupMessage;
(function (CreateDBSubnetGroupMessage) {
    /**
     * @internal
     */
    CreateDBSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSubnetGroupMessage = exports.CreateDBSubnetGroupMessage || (exports.CreateDBSubnetGroupMessage = {}));
var CreateDBSubnetGroupResult;
(function (CreateDBSubnetGroupResult) {
    /**
     * @internal
     */
    CreateDBSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSubnetGroupResult = exports.CreateDBSubnetGroupResult || (exports.CreateDBSubnetGroupResult = {}));
var DBSubnetGroupAlreadyExistsFault;
(function (DBSubnetGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    DBSubnetGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupAlreadyExistsFault = exports.DBSubnetGroupAlreadyExistsFault || (exports.DBSubnetGroupAlreadyExistsFault = {}));
var DBSubnetGroupQuotaExceededFault;
(function (DBSubnetGroupQuotaExceededFault) {
    /**
     * @internal
     */
    DBSubnetGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupQuotaExceededFault = exports.DBSubnetGroupQuotaExceededFault || (exports.DBSubnetGroupQuotaExceededFault = {}));
var DBSubnetQuotaExceededFault;
(function (DBSubnetQuotaExceededFault) {
    /**
     * @internal
     */
    DBSubnetQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetQuotaExceededFault = exports.DBSubnetQuotaExceededFault || (exports.DBSubnetQuotaExceededFault = {}));
var CreateEventSubscriptionMessage;
(function (CreateEventSubscriptionMessage) {
    /**
     * @internal
     */
    CreateEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSubscriptionMessage = exports.CreateEventSubscriptionMessage || (exports.CreateEventSubscriptionMessage = {}));
var CreateEventSubscriptionResult;
(function (CreateEventSubscriptionResult) {
    /**
     * @internal
     */
    CreateEventSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSubscriptionResult = exports.CreateEventSubscriptionResult || (exports.CreateEventSubscriptionResult = {}));
var EventSubscriptionQuotaExceededFault;
(function (EventSubscriptionQuotaExceededFault) {
    /**
     * @internal
     */
    EventSubscriptionQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscriptionQuotaExceededFault = exports.EventSubscriptionQuotaExceededFault || (exports.EventSubscriptionQuotaExceededFault = {}));
var SNSInvalidTopicFault;
(function (SNSInvalidTopicFault) {
    /**
     * @internal
     */
    SNSInvalidTopicFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSInvalidTopicFault = exports.SNSInvalidTopicFault || (exports.SNSInvalidTopicFault = {}));
var SNSNoAuthorizationFault;
(function (SNSNoAuthorizationFault) {
    /**
     * @internal
     */
    SNSNoAuthorizationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSNoAuthorizationFault = exports.SNSNoAuthorizationFault || (exports.SNSNoAuthorizationFault = {}));
var SNSTopicArnNotFoundFault;
(function (SNSTopicArnNotFoundFault) {
    /**
     * @internal
     */
    SNSTopicArnNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SNSTopicArnNotFoundFault = exports.SNSTopicArnNotFoundFault || (exports.SNSTopicArnNotFoundFault = {}));
var SubscriptionAlreadyExistFault;
(function (SubscriptionAlreadyExistFault) {
    /**
     * @internal
     */
    SubscriptionAlreadyExistFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionAlreadyExistFault = exports.SubscriptionAlreadyExistFault || (exports.SubscriptionAlreadyExistFault = {}));
var SubscriptionCategoryNotFoundFault;
(function (SubscriptionCategoryNotFoundFault) {
    /**
     * @internal
     */
    SubscriptionCategoryNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionCategoryNotFoundFault = exports.SubscriptionCategoryNotFoundFault || (exports.SubscriptionCategoryNotFoundFault = {}));
var DeleteDBClusterMessage;
(function (DeleteDBClusterMessage) {
    /**
     * @internal
     */
    DeleteDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterMessage = exports.DeleteDBClusterMessage || (exports.DeleteDBClusterMessage = {}));
var DeleteDBClusterResult;
(function (DeleteDBClusterResult) {
    /**
     * @internal
     */
    DeleteDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterResult = exports.DeleteDBClusterResult || (exports.DeleteDBClusterResult = {}));
var DBClusterEndpointNotFoundFault;
(function (DBClusterEndpointNotFoundFault) {
    /**
     * @internal
     */
    DBClusterEndpointNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpointNotFoundFault = exports.DBClusterEndpointNotFoundFault || (exports.DBClusterEndpointNotFoundFault = {}));
var DeleteDBClusterEndpointMessage;
(function (DeleteDBClusterEndpointMessage) {
    /**
     * @internal
     */
    DeleteDBClusterEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterEndpointMessage = exports.DeleteDBClusterEndpointMessage || (exports.DeleteDBClusterEndpointMessage = {}));
var DeleteDBClusterEndpointOutput;
(function (DeleteDBClusterEndpointOutput) {
    /**
     * @internal
     */
    DeleteDBClusterEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterEndpointOutput = exports.DeleteDBClusterEndpointOutput || (exports.DeleteDBClusterEndpointOutput = {}));
var InvalidDBClusterEndpointStateFault;
(function (InvalidDBClusterEndpointStateFault) {
    /**
     * @internal
     */
    InvalidDBClusterEndpointStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBClusterEndpointStateFault = exports.InvalidDBClusterEndpointStateFault || (exports.InvalidDBClusterEndpointStateFault = {}));
var DeleteDBClusterParameterGroupMessage;
(function (DeleteDBClusterParameterGroupMessage) {
    /**
     * @internal
     */
    DeleteDBClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterParameterGroupMessage = exports.DeleteDBClusterParameterGroupMessage || (exports.DeleteDBClusterParameterGroupMessage = {}));
var InvalidDBParameterGroupStateFault;
(function (InvalidDBParameterGroupStateFault) {
    /**
     * @internal
     */
    InvalidDBParameterGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBParameterGroupStateFault = exports.InvalidDBParameterGroupStateFault || (exports.InvalidDBParameterGroupStateFault = {}));
var DeleteDBClusterSnapshotMessage;
(function (DeleteDBClusterSnapshotMessage) {
    /**
     * @internal
     */
    DeleteDBClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterSnapshotMessage = exports.DeleteDBClusterSnapshotMessage || (exports.DeleteDBClusterSnapshotMessage = {}));
var DeleteDBClusterSnapshotResult;
(function (DeleteDBClusterSnapshotResult) {
    /**
     * @internal
     */
    DeleteDBClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBClusterSnapshotResult = exports.DeleteDBClusterSnapshotResult || (exports.DeleteDBClusterSnapshotResult = {}));
var DBSnapshotAlreadyExistsFault;
(function (DBSnapshotAlreadyExistsFault) {
    /**
     * @internal
     */
    DBSnapshotAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotAlreadyExistsFault = exports.DBSnapshotAlreadyExistsFault || (exports.DBSnapshotAlreadyExistsFault = {}));
var DeleteDBInstanceMessage;
(function (DeleteDBInstanceMessage) {
    /**
     * @internal
     */
    DeleteDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBInstanceMessage = exports.DeleteDBInstanceMessage || (exports.DeleteDBInstanceMessage = {}));
var DeleteDBInstanceResult;
(function (DeleteDBInstanceResult) {
    /**
     * @internal
     */
    DeleteDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBInstanceResult = exports.DeleteDBInstanceResult || (exports.DeleteDBInstanceResult = {}));
var DeleteDBParameterGroupMessage;
(function (DeleteDBParameterGroupMessage) {
    /**
     * @internal
     */
    DeleteDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBParameterGroupMessage = exports.DeleteDBParameterGroupMessage || (exports.DeleteDBParameterGroupMessage = {}));
var DeleteDBSubnetGroupMessage;
(function (DeleteDBSubnetGroupMessage) {
    /**
     * @internal
     */
    DeleteDBSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBSubnetGroupMessage = exports.DeleteDBSubnetGroupMessage || (exports.DeleteDBSubnetGroupMessage = {}));
var InvalidDBSubnetStateFault;
(function (InvalidDBSubnetStateFault) {
    /**
     * @internal
     */
    InvalidDBSubnetStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSubnetStateFault = exports.InvalidDBSubnetStateFault || (exports.InvalidDBSubnetStateFault = {}));
var DeleteEventSubscriptionMessage;
(function (DeleteEventSubscriptionMessage) {
    /**
     * @internal
     */
    DeleteEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSubscriptionMessage = exports.DeleteEventSubscriptionMessage || (exports.DeleteEventSubscriptionMessage = {}));
var DeleteEventSubscriptionResult;
(function (DeleteEventSubscriptionResult) {
    /**
     * @internal
     */
    DeleteEventSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSubscriptionResult = exports.DeleteEventSubscriptionResult || (exports.DeleteEventSubscriptionResult = {}));
var InvalidEventSubscriptionStateFault;
(function (InvalidEventSubscriptionStateFault) {
    /**
     * @internal
     */
    InvalidEventSubscriptionStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEventSubscriptionStateFault = exports.InvalidEventSubscriptionStateFault || (exports.InvalidEventSubscriptionStateFault = {}));
var DBClusterEndpoint;
(function (DBClusterEndpoint) {
    /**
     * @internal
     */
    DBClusterEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpoint = exports.DBClusterEndpoint || (exports.DBClusterEndpoint = {}));
var DBClusterEndpointMessage;
(function (DBClusterEndpointMessage) {
    /**
     * @internal
     */
    DBClusterEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpointMessage = exports.DBClusterEndpointMessage || (exports.DBClusterEndpointMessage = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeDBClusterEndpointsMessage;
(function (DescribeDBClusterEndpointsMessage) {
    /**
     * @internal
     */
    DescribeDBClusterEndpointsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterEndpointsMessage = exports.DescribeDBClusterEndpointsMessage || (exports.DescribeDBClusterEndpointsMessage = {}));
var DBClusterParameterGroupsMessage;
(function (DBClusterParameterGroupsMessage) {
    /**
     * @internal
     */
    DBClusterParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterParameterGroupsMessage = exports.DBClusterParameterGroupsMessage || (exports.DBClusterParameterGroupsMessage = {}));
var DescribeDBClusterParameterGroupsMessage;
(function (DescribeDBClusterParameterGroupsMessage) {
    /**
     * @internal
     */
    DescribeDBClusterParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterParameterGroupsMessage = exports.DescribeDBClusterParameterGroupsMessage || (exports.DescribeDBClusterParameterGroupsMessage = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var DBClusterParameterGroupDetails;
(function (DBClusterParameterGroupDetails) {
    /**
     * @internal
     */
    DBClusterParameterGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterParameterGroupDetails = exports.DBClusterParameterGroupDetails || (exports.DBClusterParameterGroupDetails = {}));
var DescribeDBClusterParametersMessage;
(function (DescribeDBClusterParametersMessage) {
    /**
     * @internal
     */
    DescribeDBClusterParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterParametersMessage = exports.DescribeDBClusterParametersMessage || (exports.DescribeDBClusterParametersMessage = {}));
var DBClusterMessage;
(function (DBClusterMessage) {
    /**
     * @internal
     */
    DBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterMessage = exports.DBClusterMessage || (exports.DBClusterMessage = {}));
var DescribeDBClustersMessage;
(function (DescribeDBClustersMessage) {
    /**
     * @internal
     */
    DescribeDBClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClustersMessage = exports.DescribeDBClustersMessage || (exports.DescribeDBClustersMessage = {}));
var DescribeDBClusterSnapshotAttributesMessage;
(function (DescribeDBClusterSnapshotAttributesMessage) {
    /**
     * @internal
     */
    DescribeDBClusterSnapshotAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterSnapshotAttributesMessage = exports.DescribeDBClusterSnapshotAttributesMessage || (exports.DescribeDBClusterSnapshotAttributesMessage = {}));
var DBClusterSnapshotAttribute;
(function (DBClusterSnapshotAttribute) {
    /**
     * @internal
     */
    DBClusterSnapshotAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshotAttribute = exports.DBClusterSnapshotAttribute || (exports.DBClusterSnapshotAttribute = {}));
var DBClusterSnapshotAttributesResult;
(function (DBClusterSnapshotAttributesResult) {
    /**
     * @internal
     */
    DBClusterSnapshotAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttributesResult || (exports.DBClusterSnapshotAttributesResult = {}));
var DescribeDBClusterSnapshotAttributesResult;
(function (DescribeDBClusterSnapshotAttributesResult) {
    /**
     * @internal
     */
    DescribeDBClusterSnapshotAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterSnapshotAttributesResult = exports.DescribeDBClusterSnapshotAttributesResult || (exports.DescribeDBClusterSnapshotAttributesResult = {}));
var DBClusterSnapshotMessage;
(function (DBClusterSnapshotMessage) {
    /**
     * @internal
     */
    DBClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterSnapshotMessage = exports.DBClusterSnapshotMessage || (exports.DBClusterSnapshotMessage = {}));
var DescribeDBClusterSnapshotsMessage;
(function (DescribeDBClusterSnapshotsMessage) {
    /**
     * @internal
     */
    DescribeDBClusterSnapshotsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterSnapshotsMessage = exports.DescribeDBClusterSnapshotsMessage || (exports.DescribeDBClusterSnapshotsMessage = {}));
var CharacterSet;
(function (CharacterSet) {
    /**
     * @internal
     */
    CharacterSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CharacterSet = exports.CharacterSet || (exports.CharacterSet = {}));
var Timezone;
(function (Timezone) {
    /**
     * @internal
     */
    Timezone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Timezone = exports.Timezone || (exports.Timezone = {}));
var UpgradeTarget;
(function (UpgradeTarget) {
    /**
     * @internal
     */
    UpgradeTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeTarget = exports.UpgradeTarget || (exports.UpgradeTarget = {}));
var DBEngineVersion;
(function (DBEngineVersion) {
    /**
     * @internal
     */
    DBEngineVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBEngineVersion = exports.DBEngineVersion || (exports.DBEngineVersion = {}));
var DBEngineVersionMessage;
(function (DBEngineVersionMessage) {
    /**
     * @internal
     */
    DBEngineVersionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBEngineVersionMessage = exports.DBEngineVersionMessage || (exports.DBEngineVersionMessage = {}));
var DescribeDBEngineVersionsMessage;
(function (DescribeDBEngineVersionsMessage) {
    /**
     * @internal
     */
    DescribeDBEngineVersionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBEngineVersionsMessage = exports.DescribeDBEngineVersionsMessage || (exports.DescribeDBEngineVersionsMessage = {}));
var DBInstanceMessage;
(function (DBInstanceMessage) {
    /**
     * @internal
     */
    DBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceMessage = exports.DBInstanceMessage || (exports.DBInstanceMessage = {}));
var DescribeDBInstancesMessage;
(function (DescribeDBInstancesMessage) {
    /**
     * @internal
     */
    DescribeDBInstancesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBInstancesMessage = exports.DescribeDBInstancesMessage || (exports.DescribeDBInstancesMessage = {}));
var DBParameterGroupsMessage;
(function (DBParameterGroupsMessage) {
    /**
     * @internal
     */
    DBParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupsMessage = exports.DBParameterGroupsMessage || (exports.DBParameterGroupsMessage = {}));
var DescribeDBParameterGroupsMessage;
(function (DescribeDBParameterGroupsMessage) {
    /**
     * @internal
     */
    DescribeDBParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBParameterGroupsMessage = exports.DescribeDBParameterGroupsMessage || (exports.DescribeDBParameterGroupsMessage = {}));
var DBParameterGroupDetails;
(function (DBParameterGroupDetails) {
    /**
     * @internal
     */
    DBParameterGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupDetails = exports.DBParameterGroupDetails || (exports.DBParameterGroupDetails = {}));
var DescribeDBParametersMessage;
(function (DescribeDBParametersMessage) {
    /**
     * @internal
     */
    DescribeDBParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBParametersMessage = exports.DescribeDBParametersMessage || (exports.DescribeDBParametersMessage = {}));
var DBSubnetGroupMessage;
(function (DBSubnetGroupMessage) {
    /**
     * @internal
     */
    DBSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupMessage = exports.DBSubnetGroupMessage || (exports.DBSubnetGroupMessage = {}));
var DescribeDBSubnetGroupsMessage;
(function (DescribeDBSubnetGroupsMessage) {
    /**
     * @internal
     */
    DescribeDBSubnetGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBSubnetGroupsMessage = exports.DescribeDBSubnetGroupsMessage || (exports.DescribeDBSubnetGroupsMessage = {}));
var DescribeEngineDefaultClusterParametersMessage;
(function (DescribeEngineDefaultClusterParametersMessage) {
    /**
     * @internal
     */
    DescribeEngineDefaultClusterParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultClusterParametersMessage = exports.DescribeEngineDefaultClusterParametersMessage || (exports.DescribeEngineDefaultClusterParametersMessage = {}));
var EngineDefaults;
(function (EngineDefaults) {
    /**
     * @internal
     */
    EngineDefaults.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EngineDefaults = exports.EngineDefaults || (exports.EngineDefaults = {}));
var DescribeEngineDefaultClusterParametersResult;
(function (DescribeEngineDefaultClusterParametersResult) {
    /**
     * @internal
     */
    DescribeEngineDefaultClusterParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultClusterParametersResult = exports.DescribeEngineDefaultClusterParametersResult || (exports.DescribeEngineDefaultClusterParametersResult = {}));
var DescribeEngineDefaultParametersMessage;
(function (DescribeEngineDefaultParametersMessage) {
    /**
     * @internal
     */
    DescribeEngineDefaultParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultParametersMessage = exports.DescribeEngineDefaultParametersMessage || (exports.DescribeEngineDefaultParametersMessage = {}));
var DescribeEngineDefaultParametersResult;
(function (DescribeEngineDefaultParametersResult) {
    /**
     * @internal
     */
    DescribeEngineDefaultParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEngineDefaultParametersResult = exports.DescribeEngineDefaultParametersResult || (exports.DescribeEngineDefaultParametersResult = {}));
var DescribeEventCategoriesMessage;
(function (DescribeEventCategoriesMessage) {
    /**
     * @internal
     */
    DescribeEventCategoriesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventCategoriesMessage = exports.DescribeEventCategoriesMessage || (exports.DescribeEventCategoriesMessage = {}));
var EventCategoriesMap;
(function (EventCategoriesMap) {
    /**
     * @internal
     */
    EventCategoriesMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventCategoriesMap = exports.EventCategoriesMap || (exports.EventCategoriesMap = {}));
var EventCategoriesMessage;
(function (EventCategoriesMessage) {
    /**
     * @internal
     */
    EventCategoriesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventCategoriesMessage = exports.EventCategoriesMessage || (exports.EventCategoriesMessage = {}));
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
var DescribeEventSubscriptionsMessage;
(function (DescribeEventSubscriptionsMessage) {
    /**
     * @internal
     */
    DescribeEventSubscriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventSubscriptionsMessage = exports.DescribeEventSubscriptionsMessage || (exports.DescribeEventSubscriptionsMessage = {}));
var EventSubscriptionsMessage;
(function (EventSubscriptionsMessage) {
    /**
     * @internal
     */
    EventSubscriptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscriptionsMessage = exports.EventSubscriptionsMessage || (exports.EventSubscriptionsMessage = {}));
var DescribeOrderableDBInstanceOptionsMessage;
(function (DescribeOrderableDBInstanceOptionsMessage) {
    /**
     * @internal
     */
    DescribeOrderableDBInstanceOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrderableDBInstanceOptionsMessage = exports.DescribeOrderableDBInstanceOptionsMessage || (exports.DescribeOrderableDBInstanceOptionsMessage = {}));
var OrderableDBInstanceOption;
(function (OrderableDBInstanceOption) {
    /**
     * @internal
     */
    OrderableDBInstanceOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrderableDBInstanceOption = exports.OrderableDBInstanceOption || (exports.OrderableDBInstanceOption = {}));
var OrderableDBInstanceOptionsMessage;
(function (OrderableDBInstanceOptionsMessage) {
    /**
     * @internal
     */
    OrderableDBInstanceOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrderableDBInstanceOptionsMessage = exports.OrderableDBInstanceOptionsMessage || (exports.OrderableDBInstanceOptionsMessage = {}));
var DescribePendingMaintenanceActionsMessage;
(function (DescribePendingMaintenanceActionsMessage) {
    /**
     * @internal
     */
    DescribePendingMaintenanceActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePendingMaintenanceActionsMessage = exports.DescribePendingMaintenanceActionsMessage || (exports.DescribePendingMaintenanceActionsMessage = {}));
var PendingMaintenanceActionsMessage;
(function (PendingMaintenanceActionsMessage) {
    /**
     * @internal
     */
    PendingMaintenanceActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingMaintenanceActionsMessage = exports.PendingMaintenanceActionsMessage || (exports.PendingMaintenanceActionsMessage = {}));
var DescribeValidDBInstanceModificationsMessage;
(function (DescribeValidDBInstanceModificationsMessage) {
    /**
     * @internal
     */
    DescribeValidDBInstanceModificationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeValidDBInstanceModificationsMessage = exports.DescribeValidDBInstanceModificationsMessage || (exports.DescribeValidDBInstanceModificationsMessage = {}));
var DoubleRange;
(function (DoubleRange) {
    /**
     * @internal
     */
    DoubleRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DoubleRange = exports.DoubleRange || (exports.DoubleRange = {}));
var Range;
(function (Range) {
    /**
     * @internal
     */
    Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Range = exports.Range || (exports.Range = {}));
var ValidStorageOptions;
(function (ValidStorageOptions) {
    /**
     * @internal
     */
    ValidStorageOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidStorageOptions = exports.ValidStorageOptions || (exports.ValidStorageOptions = {}));
var ValidDBInstanceModificationsMessage;
(function (ValidDBInstanceModificationsMessage) {
    /**
     * @internal
     */
    ValidDBInstanceModificationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidDBInstanceModificationsMessage = exports.ValidDBInstanceModificationsMessage || (exports.ValidDBInstanceModificationsMessage = {}));
var DescribeValidDBInstanceModificationsResult;
(function (DescribeValidDBInstanceModificationsResult) {
    /**
     * @internal
     */
    DescribeValidDBInstanceModificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeValidDBInstanceModificationsResult = exports.DescribeValidDBInstanceModificationsResult || (exports.DescribeValidDBInstanceModificationsResult = {}));
var FailoverDBClusterMessage;
(function (FailoverDBClusterMessage) {
    /**
     * @internal
     */
    FailoverDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverDBClusterMessage = exports.FailoverDBClusterMessage || (exports.FailoverDBClusterMessage = {}));
var FailoverDBClusterResult;
(function (FailoverDBClusterResult) {
    /**
     * @internal
     */
    FailoverDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverDBClusterResult = exports.FailoverDBClusterResult || (exports.FailoverDBClusterResult = {}));
var ListTagsForResourceMessage;
(function (ListTagsForResourceMessage) {
    /**
     * @internal
     */
    ListTagsForResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceMessage = exports.ListTagsForResourceMessage || (exports.ListTagsForResourceMessage = {}));
var TagListMessage;
(function (TagListMessage) {
    /**
     * @internal
     */
    TagListMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagListMessage = exports.TagListMessage || (exports.TagListMessage = {}));
var InvalidDBSecurityGroupStateFault;
(function (InvalidDBSecurityGroupStateFault) {
    /**
     * @internal
     */
    InvalidDBSecurityGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSecurityGroupStateFault = exports.InvalidDBSecurityGroupStateFault || (exports.InvalidDBSecurityGroupStateFault = {}));
var CloudwatchLogsExportConfiguration;
(function (CloudwatchLogsExportConfiguration) {
    /**
     * @internal
     */
    CloudwatchLogsExportConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudwatchLogsExportConfiguration = exports.CloudwatchLogsExportConfiguration || (exports.CloudwatchLogsExportConfiguration = {}));
var ModifyDBClusterMessage;
(function (ModifyDBClusterMessage) {
    /**
     * @internal
     */
    ModifyDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterMessage = exports.ModifyDBClusterMessage || (exports.ModifyDBClusterMessage = {}));
var ModifyDBClusterResult;
(function (ModifyDBClusterResult) {
    /**
     * @internal
     */
    ModifyDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterResult = exports.ModifyDBClusterResult || (exports.ModifyDBClusterResult = {}));
var ModifyDBClusterEndpointMessage;
(function (ModifyDBClusterEndpointMessage) {
    /**
     * @internal
     */
    ModifyDBClusterEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterEndpointMessage = exports.ModifyDBClusterEndpointMessage || (exports.ModifyDBClusterEndpointMessage = {}));
var ModifyDBClusterEndpointOutput;
(function (ModifyDBClusterEndpointOutput) {
    /**
     * @internal
     */
    ModifyDBClusterEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterEndpointOutput = exports.ModifyDBClusterEndpointOutput || (exports.ModifyDBClusterEndpointOutput = {}));
var DBClusterParameterGroupNameMessage;
(function (DBClusterParameterGroupNameMessage) {
    /**
     * @internal
     */
    DBClusterParameterGroupNameMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterParameterGroupNameMessage = exports.DBClusterParameterGroupNameMessage || (exports.DBClusterParameterGroupNameMessage = {}));
var ModifyDBClusterParameterGroupMessage;
(function (ModifyDBClusterParameterGroupMessage) {
    /**
     * @internal
     */
    ModifyDBClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterParameterGroupMessage = exports.ModifyDBClusterParameterGroupMessage || (exports.ModifyDBClusterParameterGroupMessage = {}));
var ModifyDBClusterSnapshotAttributeMessage;
(function (ModifyDBClusterSnapshotAttributeMessage) {
    /**
     * @internal
     */
    ModifyDBClusterSnapshotAttributeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterSnapshotAttributeMessage = exports.ModifyDBClusterSnapshotAttributeMessage || (exports.ModifyDBClusterSnapshotAttributeMessage = {}));
var ModifyDBClusterSnapshotAttributeResult;
(function (ModifyDBClusterSnapshotAttributeResult) {
    /**
     * @internal
     */
    ModifyDBClusterSnapshotAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBClusterSnapshotAttributeResult = exports.ModifyDBClusterSnapshotAttributeResult || (exports.ModifyDBClusterSnapshotAttributeResult = {}));
var SharedSnapshotQuotaExceededFault;
(function (SharedSnapshotQuotaExceededFault) {
    /**
     * @internal
     */
    SharedSnapshotQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SharedSnapshotQuotaExceededFault = exports.SharedSnapshotQuotaExceededFault || (exports.SharedSnapshotQuotaExceededFault = {}));
var CertificateNotFoundFault;
(function (CertificateNotFoundFault) {
    /**
     * @internal
     */
    CertificateNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateNotFoundFault = exports.CertificateNotFoundFault || (exports.CertificateNotFoundFault = {}));
var DBUpgradeDependencyFailureFault;
(function (DBUpgradeDependencyFailureFault) {
    /**
     * @internal
     */
    DBUpgradeDependencyFailureFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBUpgradeDependencyFailureFault = exports.DBUpgradeDependencyFailureFault || (exports.DBUpgradeDependencyFailureFault = {}));
var ModifyDBInstanceMessage;
(function (ModifyDBInstanceMessage) {
    /**
     * @internal
     */
    ModifyDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBInstanceMessage = exports.ModifyDBInstanceMessage || (exports.ModifyDBInstanceMessage = {}));
var ModifyDBInstanceResult;
(function (ModifyDBInstanceResult) {
    /**
     * @internal
     */
    ModifyDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBInstanceResult = exports.ModifyDBInstanceResult || (exports.ModifyDBInstanceResult = {}));
var DBParameterGroupNameMessage;
(function (DBParameterGroupNameMessage) {
    /**
     * @internal
     */
    DBParameterGroupNameMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupNameMessage = exports.DBParameterGroupNameMessage || (exports.DBParameterGroupNameMessage = {}));
var ModifyDBParameterGroupMessage;
(function (ModifyDBParameterGroupMessage) {
    /**
     * @internal
     */
    ModifyDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBParameterGroupMessage = exports.ModifyDBParameterGroupMessage || (exports.ModifyDBParameterGroupMessage = {}));
var ModifyDBSubnetGroupMessage;
(function (ModifyDBSubnetGroupMessage) {
    /**
     * @internal
     */
    ModifyDBSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSubnetGroupMessage = exports.ModifyDBSubnetGroupMessage || (exports.ModifyDBSubnetGroupMessage = {}));
var ModifyDBSubnetGroupResult;
(function (ModifyDBSubnetGroupResult) {
    /**
     * @internal
     */
    ModifyDBSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSubnetGroupResult = exports.ModifyDBSubnetGroupResult || (exports.ModifyDBSubnetGroupResult = {}));
var SubnetAlreadyInUse;
(function (SubnetAlreadyInUse) {
    /**
     * @internal
     */
    SubnetAlreadyInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetAlreadyInUse = exports.SubnetAlreadyInUse || (exports.SubnetAlreadyInUse = {}));
var ModifyEventSubscriptionMessage;
(function (ModifyEventSubscriptionMessage) {
    /**
     * @internal
     */
    ModifyEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEventSubscriptionMessage = exports.ModifyEventSubscriptionMessage || (exports.ModifyEventSubscriptionMessage = {}));
var ModifyEventSubscriptionResult;
(function (ModifyEventSubscriptionResult) {
    /**
     * @internal
     */
    ModifyEventSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEventSubscriptionResult = exports.ModifyEventSubscriptionResult || (exports.ModifyEventSubscriptionResult = {}));
var PromoteReadReplicaDBClusterMessage;
(function (PromoteReadReplicaDBClusterMessage) {
    /**
     * @internal
     */
    PromoteReadReplicaDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteReadReplicaDBClusterMessage = exports.PromoteReadReplicaDBClusterMessage || (exports.PromoteReadReplicaDBClusterMessage = {}));
var PromoteReadReplicaDBClusterResult;
(function (PromoteReadReplicaDBClusterResult) {
    /**
     * @internal
     */
    PromoteReadReplicaDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteReadReplicaDBClusterResult = exports.PromoteReadReplicaDBClusterResult || (exports.PromoteReadReplicaDBClusterResult = {}));
var RebootDBInstanceMessage;
(function (RebootDBInstanceMessage) {
    /**
     * @internal
     */
    RebootDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootDBInstanceMessage = exports.RebootDBInstanceMessage || (exports.RebootDBInstanceMessage = {}));
var RebootDBInstanceResult;
(function (RebootDBInstanceResult) {
    /**
     * @internal
     */
    RebootDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootDBInstanceResult = exports.RebootDBInstanceResult || (exports.RebootDBInstanceResult = {}));
var DBClusterRoleNotFoundFault;
(function (DBClusterRoleNotFoundFault) {
    /**
     * @internal
     */
    DBClusterRoleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterRoleNotFoundFault = exports.DBClusterRoleNotFoundFault || (exports.DBClusterRoleNotFoundFault = {}));
var RemoveRoleFromDBClusterMessage;
(function (RemoveRoleFromDBClusterMessage) {
    /**
     * @internal
     */
    RemoveRoleFromDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveRoleFromDBClusterMessage = exports.RemoveRoleFromDBClusterMessage || (exports.RemoveRoleFromDBClusterMessage = {}));
var RemoveSourceIdentifierFromSubscriptionMessage;
(function (RemoveSourceIdentifierFromSubscriptionMessage) {
    /**
     * @internal
     */
    RemoveSourceIdentifierFromSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveSourceIdentifierFromSubscriptionMessage = exports.RemoveSourceIdentifierFromSubscriptionMessage || (exports.RemoveSourceIdentifierFromSubscriptionMessage = {}));
var RemoveSourceIdentifierFromSubscriptionResult;
(function (RemoveSourceIdentifierFromSubscriptionResult) {
    /**
     * @internal
     */
    RemoveSourceIdentifierFromSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveSourceIdentifierFromSubscriptionResult = exports.RemoveSourceIdentifierFromSubscriptionResult || (exports.RemoveSourceIdentifierFromSubscriptionResult = {}));
var RemoveTagsFromResourceMessage;
(function (RemoveTagsFromResourceMessage) {
    /**
     * @internal
     */
    RemoveTagsFromResourceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceMessage = exports.RemoveTagsFromResourceMessage || (exports.RemoveTagsFromResourceMessage = {}));
var ResetDBClusterParameterGroupMessage;
(function (ResetDBClusterParameterGroupMessage) {
    /**
     * @internal
     */
    ResetDBClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDBClusterParameterGroupMessage = exports.ResetDBClusterParameterGroupMessage || (exports.ResetDBClusterParameterGroupMessage = {}));
var ResetDBParameterGroupMessage;
(function (ResetDBParameterGroupMessage) {
    /**
     * @internal
     */
    ResetDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDBParameterGroupMessage = exports.ResetDBParameterGroupMessage || (exports.ResetDBParameterGroupMessage = {}));
var InsufficientDBClusterCapacityFault;
(function (InsufficientDBClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientDBClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientDBClusterCapacityFault = exports.InsufficientDBClusterCapacityFault || (exports.InsufficientDBClusterCapacityFault = {}));
var InvalidDBSnapshotStateFault;
(function (InvalidDBSnapshotStateFault) {
    /**
     * @internal
     */
    InvalidDBSnapshotStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSnapshotStateFault = exports.InvalidDBSnapshotStateFault || (exports.InvalidDBSnapshotStateFault = {}));
var InvalidRestoreFault;
(function (InvalidRestoreFault) {
    /**
     * @internal
     */
    InvalidRestoreFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRestoreFault = exports.InvalidRestoreFault || (exports.InvalidRestoreFault = {}));
var RestoreDBClusterFromSnapshotMessage;
(function (RestoreDBClusterFromSnapshotMessage) {
    /**
     * @internal
     */
    RestoreDBClusterFromSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterFromSnapshotMessage = exports.RestoreDBClusterFromSnapshotMessage || (exports.RestoreDBClusterFromSnapshotMessage = {}));
var RestoreDBClusterFromSnapshotResult;
(function (RestoreDBClusterFromSnapshotResult) {
    /**
     * @internal
     */
    RestoreDBClusterFromSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterFromSnapshotResult = exports.RestoreDBClusterFromSnapshotResult || (exports.RestoreDBClusterFromSnapshotResult = {}));
var RestoreDBClusterToPointInTimeMessage;
(function (RestoreDBClusterToPointInTimeMessage) {
    /**
     * @internal
     */
    RestoreDBClusterToPointInTimeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterToPointInTimeMessage = exports.RestoreDBClusterToPointInTimeMessage || (exports.RestoreDBClusterToPointInTimeMessage = {}));
var RestoreDBClusterToPointInTimeResult;
(function (RestoreDBClusterToPointInTimeResult) {
    /**
     * @internal
     */
    RestoreDBClusterToPointInTimeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterToPointInTimeResult = exports.RestoreDBClusterToPointInTimeResult || (exports.RestoreDBClusterToPointInTimeResult = {}));
var StartDBClusterMessage;
(function (StartDBClusterMessage) {
    /**
     * @internal
     */
    StartDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBClusterMessage = exports.StartDBClusterMessage || (exports.StartDBClusterMessage = {}));
var StartDBClusterResult;
(function (StartDBClusterResult) {
    /**
     * @internal
     */
    StartDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBClusterResult = exports.StartDBClusterResult || (exports.StartDBClusterResult = {}));
var StopDBClusterMessage;
(function (StopDBClusterMessage) {
    /**
     * @internal
     */
    StopDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBClusterMessage = exports.StopDBClusterMessage || (exports.StopDBClusterMessage = {}));
var StopDBClusterResult;
(function (StopDBClusterResult) {
    /**
     * @internal
     */
    StopDBClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBClusterResult = exports.StopDBClusterResult || (exports.StopDBClusterResult = {}));
//# sourceMappingURL=models_0.js.map