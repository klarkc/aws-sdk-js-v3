"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subnet = exports.AvailabilityZone = exports.CreateDBInstanceMessage = exports.AuthorizationNotFoundFault = exports.CreateDBClusterSnapshotResult = exports.CreateDBClusterSnapshotMessage = exports.CreateDBClusterParameterGroupResult = exports.CreateDBClusterParameterGroupMessage = exports.StorageQuotaExceededFault = exports.InvalidVPCNetworkStateFault = exports.InvalidSubnet = exports.InvalidDBSubnetGroupStateFault = exports.InsufficientStorageClusterCapacityFault = exports.DBSubnetGroupNotFoundFault = exports.DBSubnetGroupDoesNotCoverEnoughAZs = exports.DBClusterQuotaExceededFault = exports.DBClusterParameterGroupNotFoundFault = exports.DBClusterAlreadyExistsFault = exports.CreateDBClusterResult = exports.DBCluster = exports.VpcSecurityGroupMembership = exports.DBClusterMember = exports.DBClusterRole = exports.CreateDBClusterMessage = exports.SnapshotQuotaExceededFault = exports.KMSKeyNotAccessibleFault = exports.InvalidDBClusterSnapshotStateFault = exports.DBClusterSnapshotNotFoundFault = exports.DBClusterSnapshotAlreadyExistsFault = exports.CopyDBClusterSnapshotResult = exports.DBClusterSnapshot = exports.CopyDBClusterSnapshotMessage = exports.DBParameterGroupQuotaExceededFault = exports.DBParameterGroupNotFoundFault = exports.DBParameterGroupAlreadyExistsFault = exports.CopyDBClusterParameterGroupResult = exports.DBClusterParameterGroup = exports.CopyDBClusterParameterGroupMessage = exports.ResourceNotFoundFault = exports.InvalidDBInstanceStateFault = exports.InvalidDBClusterStateFault = exports.ApplyPendingMaintenanceActionResult = exports.ResourcePendingMaintenanceActions = exports.PendingMaintenanceAction = exports.ApplyPendingMaintenanceActionMessage = exports.DBSnapshotNotFoundFault = exports.DBInstanceNotFoundFault = exports.DBClusterNotFoundFault = exports.AddTagsToResourceMessage = exports.Tag = void 0;
exports.DescribeDBEngineVersionsMessage = exports.DBEngineVersionMessage = exports.DBEngineVersion = exports.UpgradeTarget = exports.DescribeDBClusterSnapshotsMessage = exports.DBClusterSnapshotMessage = exports.DescribeDBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttribute = exports.DescribeDBClusterSnapshotAttributesMessage = exports.DescribeDBClustersMessage = exports.DBClusterMessage = exports.DescribeDBClusterParametersMessage = exports.DBClusterParameterGroupDetails = exports.Parameter = exports.DescribeDBClusterParameterGroupsMessage = exports.DBClusterParameterGroupsMessage = exports.DescribeCertificatesMessage = exports.Filter = exports.CertificateNotFoundFault = exports.CertificateMessage = exports.Certificate = exports.InvalidDBSubnetStateFault = exports.DeleteDBSubnetGroupMessage = exports.DeleteDBInstanceResult = exports.DeleteDBInstanceMessage = exports.DBSnapshotAlreadyExistsFault = exports.DeleteDBClusterSnapshotResult = exports.DeleteDBClusterSnapshotMessage = exports.InvalidDBParameterGroupStateFault = exports.DeleteDBClusterParameterGroupMessage = exports.DeleteDBClusterResult = exports.DeleteDBClusterMessage = exports.DBSubnetQuotaExceededFault = exports.DBSubnetGroupQuotaExceededFault = exports.DBSubnetGroupAlreadyExistsFault = exports.CreateDBSubnetGroupResult = exports.CreateDBSubnetGroupMessage = exports.StorageTypeNotSupportedFault = exports.InsufficientDBInstanceCapacityFault = exports.InstanceQuotaExceededFault = exports.DBSecurityGroupNotFoundFault = exports.DBInstanceAlreadyExistsFault = exports.CreateDBInstanceResult = exports.DBInstance = exports.DBInstanceStatusInfo = exports.PendingModifiedValues = exports.PendingCloudwatchLogsExports = exports.Endpoint = exports.DBSubnetGroup = void 0;
exports.StartDBClusterResult = exports.StartDBClusterMessage = exports.RestoreDBClusterToPointInTimeResult = exports.RestoreDBClusterToPointInTimeMessage = exports.RestoreDBClusterFromSnapshotResult = exports.RestoreDBClusterFromSnapshotMessage = exports.InvalidRestoreFault = exports.InvalidDBSnapshotStateFault = exports.InsufficientDBClusterCapacityFault = exports.ResetDBClusterParameterGroupMessage = exports.RemoveTagsFromResourceMessage = exports.RebootDBInstanceResult = exports.RebootDBInstanceMessage = exports.SubnetAlreadyInUse = exports.ModifyDBSubnetGroupResult = exports.ModifyDBSubnetGroupMessage = exports.ModifyDBInstanceResult = exports.ModifyDBInstanceMessage = exports.DBUpgradeDependencyFailureFault = exports.SharedSnapshotQuotaExceededFault = exports.ModifyDBClusterSnapshotAttributeResult = exports.ModifyDBClusterSnapshotAttributeMessage = exports.ModifyDBClusterParameterGroupMessage = exports.DBClusterParameterGroupNameMessage = exports.ModifyDBClusterResult = exports.ModifyDBClusterMessage = exports.CloudwatchLogsExportConfiguration = exports.InvalidDBSecurityGroupStateFault = exports.TagListMessage = exports.ListTagsForResourceMessage = exports.FailoverDBClusterResult = exports.FailoverDBClusterMessage = exports.PendingMaintenanceActionsMessage = exports.DescribePendingMaintenanceActionsMessage = exports.OrderableDBInstanceOptionsMessage = exports.OrderableDBInstanceOption = exports.DescribeOrderableDBInstanceOptionsMessage = exports.EventsMessage = exports.Event = exports.DescribeEventsMessage = exports.EventCategoriesMessage = exports.EventCategoriesMap = exports.DescribeEventCategoriesMessage = exports.DescribeEngineDefaultClusterParametersResult = exports.EngineDefaults = exports.DescribeEngineDefaultClusterParametersMessage = exports.DescribeDBSubnetGroupsMessage = exports.DBSubnetGroupMessage = exports.DescribeDBInstancesMessage = exports.DBInstanceMessage = void 0;
exports.StopDBClusterResult = exports.StopDBClusterMessage = void 0;
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
var DBClusterNotFoundFault;
(function (DBClusterNotFoundFault) {
    /**
     * @internal
     */
    DBClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterNotFoundFault = exports.DBClusterNotFoundFault || (exports.DBClusterNotFoundFault = {}));
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
var InvalidDBClusterStateFault;
(function (InvalidDBClusterStateFault) {
    /**
     * @internal
     */
    InvalidDBClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBClusterStateFault = exports.InvalidDBClusterStateFault || (exports.InvalidDBClusterStateFault = {}));
var InvalidDBInstanceStateFault;
(function (InvalidDBInstanceStateFault) {
    /**
     * @internal
     */
    InvalidDBInstanceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBInstanceStateFault = exports.InvalidDBInstanceStateFault || (exports.InvalidDBInstanceStateFault = {}));
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
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
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
var StorageTypeNotSupportedFault;
(function (StorageTypeNotSupportedFault) {
    /**
     * @internal
     */
    StorageTypeNotSupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageTypeNotSupportedFault = exports.StorageTypeNotSupportedFault || (exports.StorageTypeNotSupportedFault = {}));
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
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var CertificateMessage;
(function (CertificateMessage) {
    /**
     * @internal
     */
    CertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateMessage = exports.CertificateMessage || (exports.CertificateMessage = {}));
var CertificateNotFoundFault;
(function (CertificateNotFoundFault) {
    /**
     * @internal
     */
    CertificateNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateNotFoundFault = exports.CertificateNotFoundFault || (exports.CertificateNotFoundFault = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeCertificatesMessage;
(function (DescribeCertificatesMessage) {
    /**
     * @internal
     */
    DescribeCertificatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCertificatesMessage = exports.DescribeCertificatesMessage || (exports.DescribeCertificatesMessage = {}));
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