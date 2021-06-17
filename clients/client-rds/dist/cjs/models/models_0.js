"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClusterSnapshot = exports.CopyDBClusterSnapshotMessage = exports.DBParameterGroupQuotaExceededFault = exports.DBParameterGroupNotFoundFault = exports.DBParameterGroupAlreadyExistsFault = exports.CopyDBClusterParameterGroupResult = exports.DBClusterParameterGroup = exports.CopyDBClusterParameterGroupMessage = exports.InvalidExportTaskStateFault = exports.ExportTaskNotFoundFault = exports.ExportTask = exports.CancelExportTaskMessage = exports.DBClusterBacktrack = exports.BacktrackDBClusterMessage = exports.InvalidDBSecurityGroupStateFault = exports.DBSecurityGroupNotFoundFault = exports.AuthorizeDBSecurityGroupIngressResult = exports.DBSecurityGroup = exports.IPRange = exports.EC2SecurityGroup = exports.AuthorizeDBSecurityGroupIngressMessage = exports.AuthorizationQuotaExceededFault = exports.AuthorizationAlreadyExistsFault = exports.ResourceNotFoundFault = exports.ApplyPendingMaintenanceActionResult = exports.ResourcePendingMaintenanceActions = exports.PendingMaintenanceAction = exports.ApplyPendingMaintenanceActionMessage = exports.DBSnapshotNotFoundFault = exports.DBProxyTargetGroupNotFoundFault = exports.DBProxyNotFoundFault = exports.AddTagsToResourceMessage = exports.Tag = exports.SubscriptionNotFoundFault = exports.SourceNotFoundFault = exports.AddSourceIdentifierToSubscriptionResult = exports.EventSubscription = exports.AddSourceIdentifierToSubscriptionMessage = exports.InvalidDBInstanceStateFault = exports.DBInstanceRoleQuotaExceededFault = exports.DBInstanceRoleAlreadyExistsFault = exports.DBInstanceNotFoundFault = exports.AddRoleToDBInstanceMessage = exports.InvalidDBClusterStateFault = exports.DBClusterRoleQuotaExceededFault = exports.DBClusterRoleAlreadyExistsFault = exports.DBClusterNotFoundFault = exports.AddRoleToDBClusterMessage = exports.AccountAttributesMessage = exports.AccountQuota = void 0;
exports.DomainNotFoundFault = exports.DBSubnetGroupNotFoundFault = exports.DBSubnetGroupDoesNotCoverEnoughAZs = exports.DBClusterQuotaExceededFault = exports.DBClusterParameterGroupNotFoundFault = exports.DBClusterAlreadyExistsFault = exports.CreateDBClusterResult = exports.DBCluster = exports.ScalingConfigurationInfo = exports.ClusterPendingModifiedValues = exports.PendingCloudwatchLogsExports = exports.WriteForwardingStatus = exports.DomainMembership = exports.DBClusterOptionGroupStatus = exports.DBClusterMember = exports.DBClusterRole = exports.CreateDBClusterMessage = exports.ScalingConfiguration = exports.CustomAvailabilityZoneQuotaExceededFault = exports.CustomAvailabilityZoneAlreadyExistsFault = exports.CreateCustomAvailabilityZoneResult = exports.CustomAvailabilityZone = exports.VpnDetails = exports.CreateCustomAvailabilityZoneMessage = exports.OptionGroupQuotaExceededFault = exports.OptionGroupNotFoundFault = exports.OptionGroupAlreadyExistsFault = exports.CopyOptionGroupResult = exports.OptionGroup = exports.Option = exports.VpcSecurityGroupMembership = exports.OptionSetting = exports.DBSecurityGroupMembership = exports.CopyOptionGroupMessage = exports.InvalidDBSnapshotStateFault = exports.DBSnapshotAlreadyExistsFault = exports.CustomAvailabilityZoneNotFoundFault = exports.CopyDBSnapshotResult = exports.DBSnapshot = exports.ProcessorFeature = exports.CopyDBSnapshotMessage = exports.CopyDBParameterGroupResult = exports.DBParameterGroup = exports.CopyDBParameterGroupMessage = exports.SnapshotQuotaExceededFault = exports.KMSKeyNotAccessibleFault = exports.InvalidDBClusterSnapshotStateFault = exports.DBClusterSnapshotNotFoundFault = exports.DBClusterSnapshotAlreadyExistsFault = exports.CopyDBClusterSnapshotResult = void 0;
exports.DBProxyStatus = exports.UserAuthConfigInfo = exports.CreateDBProxyRequest = exports.EngineFamily = exports.UserAuthConfig = exports.IAMAuthMode = exports.AuthScheme = exports.CreateDBParameterGroupResult = exports.CreateDBParameterGroupMessage = exports.InvalidDBSubnetGroupFault = exports.DBSubnetGroupNotAllowedFault = exports.CreateDBInstanceReadReplicaResult = exports.CreateDBInstanceReadReplicaMessage = exports.StorageTypeNotSupportedFault = exports.ProvisionedIopsNotAvailableInAZFault = exports.InsufficientDBInstanceCapacityFault = exports.InstanceQuotaExceededFault = exports.DBInstanceAlreadyExistsFault = exports.CreateDBInstanceResult = exports.DBInstance = exports.DBInstanceStatusInfo = exports.ReplicaMode = exports.PendingModifiedValues = exports.OptionGroupMembership = exports.Endpoint = exports.DBSubnetGroup = exports.Subnet = exports.Outpost = exports.AvailabilityZone = exports.DBParameterGroupStatus = exports.DBInstanceAutomatedBackupsReplication = exports.DBInstanceRole = exports.CreateDBInstanceMessage = exports.BackupPolicyNotFoundFault = exports.AuthorizationNotFoundFault = exports.CreateDBClusterSnapshotResult = exports.CreateDBClusterSnapshotMessage = exports.CreateDBClusterParameterGroupResult = exports.CreateDBClusterParameterGroupMessage = exports.DBClusterEndpointQuotaExceededFault = exports.DBClusterEndpointAlreadyExistsFault = exports.DBClusterEndpoint = exports.CreateDBClusterEndpointMessage = exports.StorageQuotaExceededFault = exports.InvalidVPCNetworkStateFault = exports.InvalidSubnet = exports.InvalidGlobalClusterStateFault = exports.InvalidDBSubnetGroupStateFault = exports.InsufficientStorageClusterCapacityFault = exports.GlobalClusterNotFoundFault = void 0;
exports.DeleteDBClusterParameterGroupMessage = exports.InvalidDBClusterEndpointStateFault = exports.DeleteDBClusterEndpointMessage = exports.DBClusterEndpointNotFoundFault = exports.DeleteDBClusterResult = exports.DeleteDBClusterMessage = exports.DeleteCustomAvailabilityZoneResult = exports.DeleteCustomAvailabilityZoneMessage = exports.CreateOptionGroupResult = exports.CreateOptionGroupMessage = exports.GlobalClusterQuotaExceededFault = exports.GlobalClusterAlreadyExistsFault = exports.CreateGlobalClusterResult = exports.GlobalCluster = exports.GlobalClusterMember = exports.FailoverState = exports.FailoverStatus = exports.CreateGlobalClusterMessage = exports.SubscriptionCategoryNotFoundFault = exports.SubscriptionAlreadyExistFault = exports.SNSTopicArnNotFoundFault = exports.SNSNoAuthorizationFault = exports.SNSInvalidTopicFault = exports.EventSubscriptionQuotaExceededFault = exports.CreateEventSubscriptionResult = exports.CreateEventSubscriptionMessage = exports.DBSubnetQuotaExceededFault = exports.DBSubnetGroupQuotaExceededFault = exports.DBSubnetGroupAlreadyExistsFault = exports.CreateDBSubnetGroupResult = exports.CreateDBSubnetGroupMessage = exports.CreateDBSnapshotResult = exports.CreateDBSnapshotMessage = exports.DBSecurityGroupQuotaExceededFault = exports.DBSecurityGroupNotSupportedFault = exports.DBSecurityGroupAlreadyExistsFault = exports.CreateDBSecurityGroupResult = exports.CreateDBSecurityGroupMessage = exports.InvalidDBProxyStateFault = exports.DBProxyEndpointQuotaExceededFault = exports.DBProxyEndpointAlreadyExistsFault = exports.CreateDBProxyEndpointResponse = exports.DBProxyEndpoint = exports.DBProxyEndpointStatus = exports.CreateDBProxyEndpointRequest = exports.DBProxyEndpointTargetRole = exports.DBProxyQuotaExceededFault = exports.DBProxyAlreadyExistsFault = exports.CreateDBProxyResponse = exports.DBProxy = void 0;
exports.DBClusterEndpointMessage = exports.DescribeDBClusterBacktracksMessage = exports.DBClusterBacktrackNotFoundFault = exports.DBClusterBacktrackMessage = exports.DescribeCustomAvailabilityZonesMessage = exports.CustomAvailabilityZoneMessage = exports.DescribeCertificatesMessage = exports.Filter = exports.CertificateNotFoundFault = exports.CertificateMessage = exports.Certificate = exports.DescribeAccountAttributesMessage = exports.DeregisterDBProxyTargetsResponse = exports.DeregisterDBProxyTargetsRequest = exports.DBProxyTargetNotFoundFault = exports.InvalidOptionGroupStateFault = exports.DeleteOptionGroupMessage = exports.InstallationMediaNotFoundFault = exports.InstallationMedia = exports.InstallationMediaFailureCause = exports.DeleteInstallationMediaMessage = exports.DeleteGlobalClusterResult = exports.DeleteGlobalClusterMessage = exports.InvalidEventSubscriptionStateFault = exports.DeleteEventSubscriptionResult = exports.DeleteEventSubscriptionMessage = exports.InvalidDBSubnetStateFault = exports.DeleteDBSubnetGroupMessage = exports.DeleteDBSnapshotResult = exports.DeleteDBSnapshotMessage = exports.DeleteDBSecurityGroupMessage = exports.InvalidDBProxyEndpointStateFault = exports.DeleteDBProxyEndpointResponse = exports.DeleteDBProxyEndpointRequest = exports.DBProxyEndpointNotFoundFault = exports.DeleteDBProxyResponse = exports.DeleteDBProxyRequest = exports.DeleteDBParameterGroupMessage = exports.InvalidDBInstanceAutomatedBackupStateFault = exports.DeleteDBInstanceAutomatedBackupResult = exports.DBInstanceAutomatedBackup = exports.RestoreWindow = exports.DeleteDBInstanceAutomatedBackupMessage = exports.DBInstanceAutomatedBackupNotFoundFault = exports.DeleteDBInstanceResult = exports.DeleteDBInstanceMessage = exports.DBInstanceAutomatedBackupQuotaExceededFault = exports.DeleteDBClusterSnapshotResult = exports.DeleteDBClusterSnapshotMessage = exports.InvalidDBParameterGroupStateFault = void 0;
exports.DescribeDBProxyTargetsResponse = exports.DBProxyTarget = exports.TargetType = exports.TargetHealth = exports.TargetState = exports.TargetHealthReason = exports.TargetRole = exports.DescribeDBProxyTargetsRequest = exports.DescribeDBProxyTargetGroupsResponse = exports.DBProxyTargetGroup = exports.ConnectionPoolConfigurationInfo = exports.DescribeDBProxyTargetGroupsRequest = exports.DescribeDBProxyEndpointsResponse = exports.DescribeDBProxyEndpointsRequest = exports.DescribeDBProxiesResponse = exports.DescribeDBProxiesRequest = exports.DescribeDBParametersMessage = exports.DBParameterGroupDetails = exports.DescribeDBParameterGroupsMessage = exports.DBParameterGroupsMessage = exports.DescribeDBLogFilesResponse = exports.DescribeDBLogFilesDetails = exports.DescribeDBLogFilesMessage = exports.DescribeDBInstancesMessage = exports.DBInstanceMessage = exports.DescribeDBInstanceAutomatedBackupsMessage = exports.DBInstanceAutomatedBackupMessage = exports.DescribeDBEngineVersionsMessage = exports.DBEngineVersionMessage = exports.DBEngineVersion = exports.UpgradeTarget = exports.Timezone = exports.CharacterSet = exports.DescribeDBClusterSnapshotsMessage = exports.DBClusterSnapshotMessage = exports.DescribeDBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttributesResult = exports.DBClusterSnapshotAttribute = exports.DescribeDBClusterSnapshotAttributesMessage = exports.DescribeDBClustersMessage = exports.DBClusterMessage = exports.DescribeDBClusterParametersMessage = exports.DBClusterParameterGroupDetails = exports.Parameter = exports.DescribeDBClusterParameterGroupsMessage = exports.DBClusterParameterGroupsMessage = exports.DescribeDBClusterEndpointsMessage = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountQuota;
(function (AccountQuota) {
    /**
     * @internal
     */
    AccountQuota.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountQuota = exports.AccountQuota || (exports.AccountQuota = {}));
var AccountAttributesMessage;
(function (AccountAttributesMessage) {
    /**
     * @internal
     */
    AccountAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttributesMessage = exports.AccountAttributesMessage || (exports.AccountAttributesMessage = {}));
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
var AddRoleToDBInstanceMessage;
(function (AddRoleToDBInstanceMessage) {
    /**
     * @internal
     */
    AddRoleToDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRoleToDBInstanceMessage = exports.AddRoleToDBInstanceMessage || (exports.AddRoleToDBInstanceMessage = {}));
var DBInstanceNotFoundFault;
(function (DBInstanceNotFoundFault) {
    /**
     * @internal
     */
    DBInstanceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceNotFoundFault = exports.DBInstanceNotFoundFault || (exports.DBInstanceNotFoundFault = {}));
var DBInstanceRoleAlreadyExistsFault;
(function (DBInstanceRoleAlreadyExistsFault) {
    /**
     * @internal
     */
    DBInstanceRoleAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceRoleAlreadyExistsFault = exports.DBInstanceRoleAlreadyExistsFault || (exports.DBInstanceRoleAlreadyExistsFault = {}));
var DBInstanceRoleQuotaExceededFault;
(function (DBInstanceRoleQuotaExceededFault) {
    /**
     * @internal
     */
    DBInstanceRoleQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceRoleQuotaExceededFault = exports.DBInstanceRoleQuotaExceededFault || (exports.DBInstanceRoleQuotaExceededFault = {}));
var InvalidDBInstanceStateFault;
(function (InvalidDBInstanceStateFault) {
    /**
     * @internal
     */
    InvalidDBInstanceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBInstanceStateFault = exports.InvalidDBInstanceStateFault || (exports.InvalidDBInstanceStateFault = {}));
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
var DBProxyNotFoundFault;
(function (DBProxyNotFoundFault) {
    /**
     * @internal
     */
    DBProxyNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyNotFoundFault = exports.DBProxyNotFoundFault || (exports.DBProxyNotFoundFault = {}));
var DBProxyTargetGroupNotFoundFault;
(function (DBProxyTargetGroupNotFoundFault) {
    /**
     * @internal
     */
    DBProxyTargetGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyTargetGroupNotFoundFault = exports.DBProxyTargetGroupNotFoundFault || (exports.DBProxyTargetGroupNotFoundFault = {}));
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
var AuthorizationAlreadyExistsFault;
(function (AuthorizationAlreadyExistsFault) {
    /**
     * @internal
     */
    AuthorizationAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationAlreadyExistsFault = exports.AuthorizationAlreadyExistsFault || (exports.AuthorizationAlreadyExistsFault = {}));
var AuthorizationQuotaExceededFault;
(function (AuthorizationQuotaExceededFault) {
    /**
     * @internal
     */
    AuthorizationQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationQuotaExceededFault = exports.AuthorizationQuotaExceededFault || (exports.AuthorizationQuotaExceededFault = {}));
var AuthorizeDBSecurityGroupIngressMessage;
(function (AuthorizeDBSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    AuthorizeDBSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeDBSecurityGroupIngressMessage = exports.AuthorizeDBSecurityGroupIngressMessage || (exports.AuthorizeDBSecurityGroupIngressMessage = {}));
var EC2SecurityGroup;
(function (EC2SecurityGroup) {
    /**
     * @internal
     */
    EC2SecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2SecurityGroup = exports.EC2SecurityGroup || (exports.EC2SecurityGroup = {}));
var IPRange;
(function (IPRange) {
    /**
     * @internal
     */
    IPRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPRange = exports.IPRange || (exports.IPRange = {}));
var DBSecurityGroup;
(function (DBSecurityGroup) {
    /**
     * @internal
     */
    DBSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroup = exports.DBSecurityGroup || (exports.DBSecurityGroup = {}));
var AuthorizeDBSecurityGroupIngressResult;
(function (AuthorizeDBSecurityGroupIngressResult) {
    /**
     * @internal
     */
    AuthorizeDBSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeDBSecurityGroupIngressResult = exports.AuthorizeDBSecurityGroupIngressResult || (exports.AuthorizeDBSecurityGroupIngressResult = {}));
var DBSecurityGroupNotFoundFault;
(function (DBSecurityGroupNotFoundFault) {
    /**
     * @internal
     */
    DBSecurityGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupNotFoundFault = exports.DBSecurityGroupNotFoundFault || (exports.DBSecurityGroupNotFoundFault = {}));
var InvalidDBSecurityGroupStateFault;
(function (InvalidDBSecurityGroupStateFault) {
    /**
     * @internal
     */
    InvalidDBSecurityGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSecurityGroupStateFault = exports.InvalidDBSecurityGroupStateFault || (exports.InvalidDBSecurityGroupStateFault = {}));
var BacktrackDBClusterMessage;
(function (BacktrackDBClusterMessage) {
    /**
     * @internal
     */
    BacktrackDBClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BacktrackDBClusterMessage = exports.BacktrackDBClusterMessage || (exports.BacktrackDBClusterMessage = {}));
var DBClusterBacktrack;
(function (DBClusterBacktrack) {
    /**
     * @internal
     */
    DBClusterBacktrack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterBacktrack = exports.DBClusterBacktrack || (exports.DBClusterBacktrack = {}));
var CancelExportTaskMessage;
(function (CancelExportTaskMessage) {
    /**
     * @internal
     */
    CancelExportTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelExportTaskMessage = exports.CancelExportTaskMessage || (exports.CancelExportTaskMessage = {}));
var ExportTask;
(function (ExportTask) {
    /**
     * @internal
     */
    ExportTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTask = exports.ExportTask || (exports.ExportTask = {}));
var ExportTaskNotFoundFault;
(function (ExportTaskNotFoundFault) {
    /**
     * @internal
     */
    ExportTaskNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTaskNotFoundFault = exports.ExportTaskNotFoundFault || (exports.ExportTaskNotFoundFault = {}));
var InvalidExportTaskStateFault;
(function (InvalidExportTaskStateFault) {
    /**
     * @internal
     */
    InvalidExportTaskStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExportTaskStateFault = exports.InvalidExportTaskStateFault || (exports.InvalidExportTaskStateFault = {}));
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
var CopyDBSnapshotMessage;
(function (CopyDBSnapshotMessage) {
    /**
     * @internal
     */
    CopyDBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBSnapshotMessage = exports.CopyDBSnapshotMessage || (exports.CopyDBSnapshotMessage = {}));
var ProcessorFeature;
(function (ProcessorFeature) {
    /**
     * @internal
     */
    ProcessorFeature.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessorFeature = exports.ProcessorFeature || (exports.ProcessorFeature = {}));
var DBSnapshot;
(function (DBSnapshot) {
    /**
     * @internal
     */
    DBSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshot = exports.DBSnapshot || (exports.DBSnapshot = {}));
var CopyDBSnapshotResult;
(function (CopyDBSnapshotResult) {
    /**
     * @internal
     */
    CopyDBSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyDBSnapshotResult = exports.CopyDBSnapshotResult || (exports.CopyDBSnapshotResult = {}));
var CustomAvailabilityZoneNotFoundFault;
(function (CustomAvailabilityZoneNotFoundFault) {
    /**
     * @internal
     */
    CustomAvailabilityZoneNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomAvailabilityZoneNotFoundFault = exports.CustomAvailabilityZoneNotFoundFault || (exports.CustomAvailabilityZoneNotFoundFault = {}));
var DBSnapshotAlreadyExistsFault;
(function (DBSnapshotAlreadyExistsFault) {
    /**
     * @internal
     */
    DBSnapshotAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotAlreadyExistsFault = exports.DBSnapshotAlreadyExistsFault || (exports.DBSnapshotAlreadyExistsFault = {}));
var InvalidDBSnapshotStateFault;
(function (InvalidDBSnapshotStateFault) {
    /**
     * @internal
     */
    InvalidDBSnapshotStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSnapshotStateFault = exports.InvalidDBSnapshotStateFault || (exports.InvalidDBSnapshotStateFault = {}));
var CopyOptionGroupMessage;
(function (CopyOptionGroupMessage) {
    /**
     * @internal
     */
    CopyOptionGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyOptionGroupMessage = exports.CopyOptionGroupMessage || (exports.CopyOptionGroupMessage = {}));
var DBSecurityGroupMembership;
(function (DBSecurityGroupMembership) {
    /**
     * @internal
     */
    DBSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupMembership = exports.DBSecurityGroupMembership || (exports.DBSecurityGroupMembership = {}));
var OptionSetting;
(function (OptionSetting) {
    /**
     * @internal
     */
    OptionSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionSetting = exports.OptionSetting || (exports.OptionSetting = {}));
var VpcSecurityGroupMembership;
(function (VpcSecurityGroupMembership) {
    /**
     * @internal
     */
    VpcSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcSecurityGroupMembership = exports.VpcSecurityGroupMembership || (exports.VpcSecurityGroupMembership = {}));
var Option;
(function (Option) {
    /**
     * @internal
     */
    Option.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Option = exports.Option || (exports.Option = {}));
var OptionGroup;
(function (OptionGroup) {
    /**
     * @internal
     */
    OptionGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroup = exports.OptionGroup || (exports.OptionGroup = {}));
var CopyOptionGroupResult;
(function (CopyOptionGroupResult) {
    /**
     * @internal
     */
    CopyOptionGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyOptionGroupResult = exports.CopyOptionGroupResult || (exports.CopyOptionGroupResult = {}));
var OptionGroupAlreadyExistsFault;
(function (OptionGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    OptionGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupAlreadyExistsFault = exports.OptionGroupAlreadyExistsFault || (exports.OptionGroupAlreadyExistsFault = {}));
var OptionGroupNotFoundFault;
(function (OptionGroupNotFoundFault) {
    /**
     * @internal
     */
    OptionGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupNotFoundFault = exports.OptionGroupNotFoundFault || (exports.OptionGroupNotFoundFault = {}));
var OptionGroupQuotaExceededFault;
(function (OptionGroupQuotaExceededFault) {
    /**
     * @internal
     */
    OptionGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupQuotaExceededFault = exports.OptionGroupQuotaExceededFault || (exports.OptionGroupQuotaExceededFault = {}));
var CreateCustomAvailabilityZoneMessage;
(function (CreateCustomAvailabilityZoneMessage) {
    /**
     * @internal
     */
    CreateCustomAvailabilityZoneMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomAvailabilityZoneMessage = exports.CreateCustomAvailabilityZoneMessage || (exports.CreateCustomAvailabilityZoneMessage = {}));
var VpnDetails;
(function (VpnDetails) {
    /**
     * @internal
     */
    VpnDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.VpnPSK && { VpnPSK: smithy_client_1.SENSITIVE_STRING }),
    });
})(VpnDetails = exports.VpnDetails || (exports.VpnDetails = {}));
var CustomAvailabilityZone;
(function (CustomAvailabilityZone) {
    /**
     * @internal
     */
    CustomAvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.VpnDetails && { VpnDetails: VpnDetails.filterSensitiveLog(obj.VpnDetails) }),
    });
})(CustomAvailabilityZone = exports.CustomAvailabilityZone || (exports.CustomAvailabilityZone = {}));
var CreateCustomAvailabilityZoneResult;
(function (CreateCustomAvailabilityZoneResult) {
    /**
     * @internal
     */
    CreateCustomAvailabilityZoneResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CustomAvailabilityZone && {
            CustomAvailabilityZone: CustomAvailabilityZone.filterSensitiveLog(obj.CustomAvailabilityZone),
        }),
    });
})(CreateCustomAvailabilityZoneResult = exports.CreateCustomAvailabilityZoneResult || (exports.CreateCustomAvailabilityZoneResult = {}));
var CustomAvailabilityZoneAlreadyExistsFault;
(function (CustomAvailabilityZoneAlreadyExistsFault) {
    /**
     * @internal
     */
    CustomAvailabilityZoneAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomAvailabilityZoneAlreadyExistsFault = exports.CustomAvailabilityZoneAlreadyExistsFault || (exports.CustomAvailabilityZoneAlreadyExistsFault = {}));
var CustomAvailabilityZoneQuotaExceededFault;
(function (CustomAvailabilityZoneQuotaExceededFault) {
    /**
     * @internal
     */
    CustomAvailabilityZoneQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomAvailabilityZoneQuotaExceededFault = exports.CustomAvailabilityZoneQuotaExceededFault || (exports.CustomAvailabilityZoneQuotaExceededFault = {}));
var ScalingConfiguration;
(function (ScalingConfiguration) {
    /**
     * @internal
     */
    ScalingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingConfiguration = exports.ScalingConfiguration || (exports.ScalingConfiguration = {}));
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
var DomainMembership;
(function (DomainMembership) {
    /**
     * @internal
     */
    DomainMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainMembership = exports.DomainMembership || (exports.DomainMembership = {}));
var WriteForwardingStatus;
(function (WriteForwardingStatus) {
    WriteForwardingStatus["DISABLED"] = "disabled";
    WriteForwardingStatus["DISABLING"] = "disabling";
    WriteForwardingStatus["ENABLED"] = "enabled";
    WriteForwardingStatus["ENABLING"] = "enabling";
    WriteForwardingStatus["UNKNOWN"] = "unknown";
})(WriteForwardingStatus = exports.WriteForwardingStatus || (exports.WriteForwardingStatus = {}));
var PendingCloudwatchLogsExports;
(function (PendingCloudwatchLogsExports) {
    /**
     * @internal
     */
    PendingCloudwatchLogsExports.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingCloudwatchLogsExports = exports.PendingCloudwatchLogsExports || (exports.PendingCloudwatchLogsExports = {}));
var ClusterPendingModifiedValues;
(function (ClusterPendingModifiedValues) {
    /**
     * @internal
     */
    ClusterPendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterPendingModifiedValues = exports.ClusterPendingModifiedValues || (exports.ClusterPendingModifiedValues = {}));
var ScalingConfigurationInfo;
(function (ScalingConfigurationInfo) {
    /**
     * @internal
     */
    ScalingConfigurationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingConfigurationInfo = exports.ScalingConfigurationInfo || (exports.ScalingConfigurationInfo = {}));
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
var DomainNotFoundFault;
(function (DomainNotFoundFault) {
    /**
     * @internal
     */
    DomainNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainNotFoundFault = exports.DomainNotFoundFault || (exports.DomainNotFoundFault = {}));
var GlobalClusterNotFoundFault;
(function (GlobalClusterNotFoundFault) {
    /**
     * @internal
     */
    GlobalClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalClusterNotFoundFault = exports.GlobalClusterNotFoundFault || (exports.GlobalClusterNotFoundFault = {}));
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
var InvalidGlobalClusterStateFault;
(function (InvalidGlobalClusterStateFault) {
    /**
     * @internal
     */
    InvalidGlobalClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGlobalClusterStateFault = exports.InvalidGlobalClusterStateFault || (exports.InvalidGlobalClusterStateFault = {}));
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
var DBClusterEndpoint;
(function (DBClusterEndpoint) {
    /**
     * @internal
     */
    DBClusterEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpoint = exports.DBClusterEndpoint || (exports.DBClusterEndpoint = {}));
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
var BackupPolicyNotFoundFault;
(function (BackupPolicyNotFoundFault) {
    /**
     * @internal
     */
    BackupPolicyNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupPolicyNotFoundFault = exports.BackupPolicyNotFoundFault || (exports.BackupPolicyNotFoundFault = {}));
var CreateDBInstanceMessage;
(function (CreateDBInstanceMessage) {
    /**
     * @internal
     */
    CreateDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBInstanceMessage = exports.CreateDBInstanceMessage || (exports.CreateDBInstanceMessage = {}));
var DBInstanceRole;
(function (DBInstanceRole) {
    /**
     * @internal
     */
    DBInstanceRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceRole = exports.DBInstanceRole || (exports.DBInstanceRole = {}));
var DBInstanceAutomatedBackupsReplication;
(function (DBInstanceAutomatedBackupsReplication) {
    /**
     * @internal
     */
    DBInstanceAutomatedBackupsReplication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAutomatedBackupsReplication = exports.DBInstanceAutomatedBackupsReplication || (exports.DBInstanceAutomatedBackupsReplication = {}));
var DBParameterGroupStatus;
(function (DBParameterGroupStatus) {
    /**
     * @internal
     */
    DBParameterGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBParameterGroupStatus = exports.DBParameterGroupStatus || (exports.DBParameterGroupStatus = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var Outpost;
(function (Outpost) {
    /**
     * @internal
     */
    Outpost.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Outpost = exports.Outpost || (exports.Outpost = {}));
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
var OptionGroupMembership;
(function (OptionGroupMembership) {
    /**
     * @internal
     */
    OptionGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupMembership = exports.OptionGroupMembership || (exports.OptionGroupMembership = {}));
var PendingModifiedValues;
(function (PendingModifiedValues) {
    /**
     * @internal
     */
    PendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingModifiedValues = exports.PendingModifiedValues || (exports.PendingModifiedValues = {}));
var ReplicaMode;
(function (ReplicaMode) {
    ReplicaMode["MOUNTED"] = "mounted";
    ReplicaMode["OPEN_READ_ONLY"] = "open-read-only";
})(ReplicaMode = exports.ReplicaMode || (exports.ReplicaMode = {}));
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
var CreateDBInstanceReadReplicaMessage;
(function (CreateDBInstanceReadReplicaMessage) {
    /**
     * @internal
     */
    CreateDBInstanceReadReplicaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBInstanceReadReplicaMessage = exports.CreateDBInstanceReadReplicaMessage || (exports.CreateDBInstanceReadReplicaMessage = {}));
var CreateDBInstanceReadReplicaResult;
(function (CreateDBInstanceReadReplicaResult) {
    /**
     * @internal
     */
    CreateDBInstanceReadReplicaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBInstanceReadReplicaResult = exports.CreateDBInstanceReadReplicaResult || (exports.CreateDBInstanceReadReplicaResult = {}));
var DBSubnetGroupNotAllowedFault;
(function (DBSubnetGroupNotAllowedFault) {
    /**
     * @internal
     */
    DBSubnetGroupNotAllowedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSubnetGroupNotAllowedFault = exports.DBSubnetGroupNotAllowedFault || (exports.DBSubnetGroupNotAllowedFault = {}));
var InvalidDBSubnetGroupFault;
(function (InvalidDBSubnetGroupFault) {
    /**
     * @internal
     */
    InvalidDBSubnetGroupFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBSubnetGroupFault = exports.InvalidDBSubnetGroupFault || (exports.InvalidDBSubnetGroupFault = {}));
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
var AuthScheme;
(function (AuthScheme) {
    AuthScheme["SECRETS"] = "SECRETS";
})(AuthScheme = exports.AuthScheme || (exports.AuthScheme = {}));
var IAMAuthMode;
(function (IAMAuthMode) {
    IAMAuthMode["DISABLED"] = "DISABLED";
    IAMAuthMode["REQUIRED"] = "REQUIRED";
})(IAMAuthMode = exports.IAMAuthMode || (exports.IAMAuthMode = {}));
var UserAuthConfig;
(function (UserAuthConfig) {
    /**
     * @internal
     */
    UserAuthConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserAuthConfig = exports.UserAuthConfig || (exports.UserAuthConfig = {}));
var EngineFamily;
(function (EngineFamily) {
    EngineFamily["MYSQL"] = "MYSQL";
    EngineFamily["POSTGRESQL"] = "POSTGRESQL";
})(EngineFamily = exports.EngineFamily || (exports.EngineFamily = {}));
var CreateDBProxyRequest;
(function (CreateDBProxyRequest) {
    /**
     * @internal
     */
    CreateDBProxyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBProxyRequest = exports.CreateDBProxyRequest || (exports.CreateDBProxyRequest = {}));
var UserAuthConfigInfo;
(function (UserAuthConfigInfo) {
    /**
     * @internal
     */
    UserAuthConfigInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserAuthConfigInfo = exports.UserAuthConfigInfo || (exports.UserAuthConfigInfo = {}));
var DBProxyStatus;
(function (DBProxyStatus) {
    DBProxyStatus["AVAILABLE"] = "available";
    DBProxyStatus["CREATING"] = "creating";
    DBProxyStatus["DELETING"] = "deleting";
    DBProxyStatus["INCOMPATIBLE_NETWORK"] = "incompatible-network";
    DBProxyStatus["INSUFFICIENT_RESOURCE_LIMITS"] = "insufficient-resource-limits";
    DBProxyStatus["MODIFYING"] = "modifying";
    DBProxyStatus["REACTIVATING"] = "reactivating";
    DBProxyStatus["SUSPENDED"] = "suspended";
    DBProxyStatus["SUSPENDING"] = "suspending";
})(DBProxyStatus = exports.DBProxyStatus || (exports.DBProxyStatus = {}));
var DBProxy;
(function (DBProxy) {
    /**
     * @internal
     */
    DBProxy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxy = exports.DBProxy || (exports.DBProxy = {}));
var CreateDBProxyResponse;
(function (CreateDBProxyResponse) {
    /**
     * @internal
     */
    CreateDBProxyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBProxyResponse = exports.CreateDBProxyResponse || (exports.CreateDBProxyResponse = {}));
var DBProxyAlreadyExistsFault;
(function (DBProxyAlreadyExistsFault) {
    /**
     * @internal
     */
    DBProxyAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyAlreadyExistsFault = exports.DBProxyAlreadyExistsFault || (exports.DBProxyAlreadyExistsFault = {}));
var DBProxyQuotaExceededFault;
(function (DBProxyQuotaExceededFault) {
    /**
     * @internal
     */
    DBProxyQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyQuotaExceededFault = exports.DBProxyQuotaExceededFault || (exports.DBProxyQuotaExceededFault = {}));
var DBProxyEndpointTargetRole;
(function (DBProxyEndpointTargetRole) {
    DBProxyEndpointTargetRole["READ_ONLY"] = "READ_ONLY";
    DBProxyEndpointTargetRole["READ_WRITE"] = "READ_WRITE";
})(DBProxyEndpointTargetRole = exports.DBProxyEndpointTargetRole || (exports.DBProxyEndpointTargetRole = {}));
var CreateDBProxyEndpointRequest;
(function (CreateDBProxyEndpointRequest) {
    /**
     * @internal
     */
    CreateDBProxyEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBProxyEndpointRequest = exports.CreateDBProxyEndpointRequest || (exports.CreateDBProxyEndpointRequest = {}));
var DBProxyEndpointStatus;
(function (DBProxyEndpointStatus) {
    DBProxyEndpointStatus["AVAILABLE"] = "available";
    DBProxyEndpointStatus["CREATING"] = "creating";
    DBProxyEndpointStatus["DELETING"] = "deleting";
    DBProxyEndpointStatus["INCOMPATIBLE_NETWORK"] = "incompatible-network";
    DBProxyEndpointStatus["INSUFFICIENT_RESOURCE_LIMITS"] = "insufficient-resource-limits";
    DBProxyEndpointStatus["MODIFYING"] = "modifying";
})(DBProxyEndpointStatus = exports.DBProxyEndpointStatus || (exports.DBProxyEndpointStatus = {}));
var DBProxyEndpoint;
(function (DBProxyEndpoint) {
    /**
     * @internal
     */
    DBProxyEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyEndpoint = exports.DBProxyEndpoint || (exports.DBProxyEndpoint = {}));
var CreateDBProxyEndpointResponse;
(function (CreateDBProxyEndpointResponse) {
    /**
     * @internal
     */
    CreateDBProxyEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBProxyEndpointResponse = exports.CreateDBProxyEndpointResponse || (exports.CreateDBProxyEndpointResponse = {}));
var DBProxyEndpointAlreadyExistsFault;
(function (DBProxyEndpointAlreadyExistsFault) {
    /**
     * @internal
     */
    DBProxyEndpointAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyEndpointAlreadyExistsFault = exports.DBProxyEndpointAlreadyExistsFault || (exports.DBProxyEndpointAlreadyExistsFault = {}));
var DBProxyEndpointQuotaExceededFault;
(function (DBProxyEndpointQuotaExceededFault) {
    /**
     * @internal
     */
    DBProxyEndpointQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyEndpointQuotaExceededFault = exports.DBProxyEndpointQuotaExceededFault || (exports.DBProxyEndpointQuotaExceededFault = {}));
var InvalidDBProxyStateFault;
(function (InvalidDBProxyStateFault) {
    /**
     * @internal
     */
    InvalidDBProxyStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBProxyStateFault = exports.InvalidDBProxyStateFault || (exports.InvalidDBProxyStateFault = {}));
var CreateDBSecurityGroupMessage;
(function (CreateDBSecurityGroupMessage) {
    /**
     * @internal
     */
    CreateDBSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSecurityGroupMessage = exports.CreateDBSecurityGroupMessage || (exports.CreateDBSecurityGroupMessage = {}));
var CreateDBSecurityGroupResult;
(function (CreateDBSecurityGroupResult) {
    /**
     * @internal
     */
    CreateDBSecurityGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSecurityGroupResult = exports.CreateDBSecurityGroupResult || (exports.CreateDBSecurityGroupResult = {}));
var DBSecurityGroupAlreadyExistsFault;
(function (DBSecurityGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    DBSecurityGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupAlreadyExistsFault = exports.DBSecurityGroupAlreadyExistsFault || (exports.DBSecurityGroupAlreadyExistsFault = {}));
var DBSecurityGroupNotSupportedFault;
(function (DBSecurityGroupNotSupportedFault) {
    /**
     * @internal
     */
    DBSecurityGroupNotSupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupNotSupportedFault = exports.DBSecurityGroupNotSupportedFault || (exports.DBSecurityGroupNotSupportedFault = {}));
var DBSecurityGroupQuotaExceededFault;
(function (DBSecurityGroupQuotaExceededFault) {
    /**
     * @internal
     */
    DBSecurityGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupQuotaExceededFault = exports.DBSecurityGroupQuotaExceededFault || (exports.DBSecurityGroupQuotaExceededFault = {}));
var CreateDBSnapshotMessage;
(function (CreateDBSnapshotMessage) {
    /**
     * @internal
     */
    CreateDBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSnapshotMessage = exports.CreateDBSnapshotMessage || (exports.CreateDBSnapshotMessage = {}));
var CreateDBSnapshotResult;
(function (CreateDBSnapshotResult) {
    /**
     * @internal
     */
    CreateDBSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDBSnapshotResult = exports.CreateDBSnapshotResult || (exports.CreateDBSnapshotResult = {}));
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
var CreateGlobalClusterMessage;
(function (CreateGlobalClusterMessage) {
    /**
     * @internal
     */
    CreateGlobalClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalClusterMessage = exports.CreateGlobalClusterMessage || (exports.CreateGlobalClusterMessage = {}));
var FailoverStatus;
(function (FailoverStatus) {
    FailoverStatus["CANCELLING"] = "cancelling";
    FailoverStatus["FAILING_OVER"] = "failing-over";
    FailoverStatus["PENDING"] = "pending";
})(FailoverStatus = exports.FailoverStatus || (exports.FailoverStatus = {}));
var FailoverState;
(function (FailoverState) {
    /**
     * @internal
     */
    FailoverState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverState = exports.FailoverState || (exports.FailoverState = {}));
var GlobalClusterMember;
(function (GlobalClusterMember) {
    /**
     * @internal
     */
    GlobalClusterMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalClusterMember = exports.GlobalClusterMember || (exports.GlobalClusterMember = {}));
var GlobalCluster;
(function (GlobalCluster) {
    /**
     * @internal
     */
    GlobalCluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalCluster = exports.GlobalCluster || (exports.GlobalCluster = {}));
var CreateGlobalClusterResult;
(function (CreateGlobalClusterResult) {
    /**
     * @internal
     */
    CreateGlobalClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalClusterResult = exports.CreateGlobalClusterResult || (exports.CreateGlobalClusterResult = {}));
var GlobalClusterAlreadyExistsFault;
(function (GlobalClusterAlreadyExistsFault) {
    /**
     * @internal
     */
    GlobalClusterAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalClusterAlreadyExistsFault = exports.GlobalClusterAlreadyExistsFault || (exports.GlobalClusterAlreadyExistsFault = {}));
var GlobalClusterQuotaExceededFault;
(function (GlobalClusterQuotaExceededFault) {
    /**
     * @internal
     */
    GlobalClusterQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalClusterQuotaExceededFault = exports.GlobalClusterQuotaExceededFault || (exports.GlobalClusterQuotaExceededFault = {}));
var CreateOptionGroupMessage;
(function (CreateOptionGroupMessage) {
    /**
     * @internal
     */
    CreateOptionGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOptionGroupMessage = exports.CreateOptionGroupMessage || (exports.CreateOptionGroupMessage = {}));
var CreateOptionGroupResult;
(function (CreateOptionGroupResult) {
    /**
     * @internal
     */
    CreateOptionGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOptionGroupResult = exports.CreateOptionGroupResult || (exports.CreateOptionGroupResult = {}));
var DeleteCustomAvailabilityZoneMessage;
(function (DeleteCustomAvailabilityZoneMessage) {
    /**
     * @internal
     */
    DeleteCustomAvailabilityZoneMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomAvailabilityZoneMessage = exports.DeleteCustomAvailabilityZoneMessage || (exports.DeleteCustomAvailabilityZoneMessage = {}));
var DeleteCustomAvailabilityZoneResult;
(function (DeleteCustomAvailabilityZoneResult) {
    /**
     * @internal
     */
    DeleteCustomAvailabilityZoneResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CustomAvailabilityZone && {
            CustomAvailabilityZone: CustomAvailabilityZone.filterSensitiveLog(obj.CustomAvailabilityZone),
        }),
    });
})(DeleteCustomAvailabilityZoneResult = exports.DeleteCustomAvailabilityZoneResult || (exports.DeleteCustomAvailabilityZoneResult = {}));
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
var DBInstanceAutomatedBackupQuotaExceededFault;
(function (DBInstanceAutomatedBackupQuotaExceededFault) {
    /**
     * @internal
     */
    DBInstanceAutomatedBackupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAutomatedBackupQuotaExceededFault = exports.DBInstanceAutomatedBackupQuotaExceededFault || (exports.DBInstanceAutomatedBackupQuotaExceededFault = {}));
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
var DBInstanceAutomatedBackupNotFoundFault;
(function (DBInstanceAutomatedBackupNotFoundFault) {
    /**
     * @internal
     */
    DBInstanceAutomatedBackupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAutomatedBackupNotFoundFault = exports.DBInstanceAutomatedBackupNotFoundFault || (exports.DBInstanceAutomatedBackupNotFoundFault = {}));
var DeleteDBInstanceAutomatedBackupMessage;
(function (DeleteDBInstanceAutomatedBackupMessage) {
    /**
     * @internal
     */
    DeleteDBInstanceAutomatedBackupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBInstanceAutomatedBackupMessage = exports.DeleteDBInstanceAutomatedBackupMessage || (exports.DeleteDBInstanceAutomatedBackupMessage = {}));
var RestoreWindow;
(function (RestoreWindow) {
    /**
     * @internal
     */
    RestoreWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreWindow = exports.RestoreWindow || (exports.RestoreWindow = {}));
var DBInstanceAutomatedBackup;
(function (DBInstanceAutomatedBackup) {
    /**
     * @internal
     */
    DBInstanceAutomatedBackup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAutomatedBackup = exports.DBInstanceAutomatedBackup || (exports.DBInstanceAutomatedBackup = {}));
var DeleteDBInstanceAutomatedBackupResult;
(function (DeleteDBInstanceAutomatedBackupResult) {
    /**
     * @internal
     */
    DeleteDBInstanceAutomatedBackupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBInstanceAutomatedBackupResult = exports.DeleteDBInstanceAutomatedBackupResult || (exports.DeleteDBInstanceAutomatedBackupResult = {}));
var InvalidDBInstanceAutomatedBackupStateFault;
(function (InvalidDBInstanceAutomatedBackupStateFault) {
    /**
     * @internal
     */
    InvalidDBInstanceAutomatedBackupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBInstanceAutomatedBackupStateFault = exports.InvalidDBInstanceAutomatedBackupStateFault || (exports.InvalidDBInstanceAutomatedBackupStateFault = {}));
var DeleteDBParameterGroupMessage;
(function (DeleteDBParameterGroupMessage) {
    /**
     * @internal
     */
    DeleteDBParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBParameterGroupMessage = exports.DeleteDBParameterGroupMessage || (exports.DeleteDBParameterGroupMessage = {}));
var DeleteDBProxyRequest;
(function (DeleteDBProxyRequest) {
    /**
     * @internal
     */
    DeleteDBProxyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBProxyRequest = exports.DeleteDBProxyRequest || (exports.DeleteDBProxyRequest = {}));
var DeleteDBProxyResponse;
(function (DeleteDBProxyResponse) {
    /**
     * @internal
     */
    DeleteDBProxyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBProxyResponse = exports.DeleteDBProxyResponse || (exports.DeleteDBProxyResponse = {}));
var DBProxyEndpointNotFoundFault;
(function (DBProxyEndpointNotFoundFault) {
    /**
     * @internal
     */
    DBProxyEndpointNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyEndpointNotFoundFault = exports.DBProxyEndpointNotFoundFault || (exports.DBProxyEndpointNotFoundFault = {}));
var DeleteDBProxyEndpointRequest;
(function (DeleteDBProxyEndpointRequest) {
    /**
     * @internal
     */
    DeleteDBProxyEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBProxyEndpointRequest = exports.DeleteDBProxyEndpointRequest || (exports.DeleteDBProxyEndpointRequest = {}));
var DeleteDBProxyEndpointResponse;
(function (DeleteDBProxyEndpointResponse) {
    /**
     * @internal
     */
    DeleteDBProxyEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBProxyEndpointResponse = exports.DeleteDBProxyEndpointResponse || (exports.DeleteDBProxyEndpointResponse = {}));
var InvalidDBProxyEndpointStateFault;
(function (InvalidDBProxyEndpointStateFault) {
    /**
     * @internal
     */
    InvalidDBProxyEndpointStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBProxyEndpointStateFault = exports.InvalidDBProxyEndpointStateFault || (exports.InvalidDBProxyEndpointStateFault = {}));
var DeleteDBSecurityGroupMessage;
(function (DeleteDBSecurityGroupMessage) {
    /**
     * @internal
     */
    DeleteDBSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBSecurityGroupMessage = exports.DeleteDBSecurityGroupMessage || (exports.DeleteDBSecurityGroupMessage = {}));
var DeleteDBSnapshotMessage;
(function (DeleteDBSnapshotMessage) {
    /**
     * @internal
     */
    DeleteDBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBSnapshotMessage = exports.DeleteDBSnapshotMessage || (exports.DeleteDBSnapshotMessage = {}));
var DeleteDBSnapshotResult;
(function (DeleteDBSnapshotResult) {
    /**
     * @internal
     */
    DeleteDBSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDBSnapshotResult = exports.DeleteDBSnapshotResult || (exports.DeleteDBSnapshotResult = {}));
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
var DeleteGlobalClusterMessage;
(function (DeleteGlobalClusterMessage) {
    /**
     * @internal
     */
    DeleteGlobalClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalClusterMessage = exports.DeleteGlobalClusterMessage || (exports.DeleteGlobalClusterMessage = {}));
var DeleteGlobalClusterResult;
(function (DeleteGlobalClusterResult) {
    /**
     * @internal
     */
    DeleteGlobalClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalClusterResult = exports.DeleteGlobalClusterResult || (exports.DeleteGlobalClusterResult = {}));
var DeleteInstallationMediaMessage;
(function (DeleteInstallationMediaMessage) {
    /**
     * @internal
     */
    DeleteInstallationMediaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstallationMediaMessage = exports.DeleteInstallationMediaMessage || (exports.DeleteInstallationMediaMessage = {}));
var InstallationMediaFailureCause;
(function (InstallationMediaFailureCause) {
    /**
     * @internal
     */
    InstallationMediaFailureCause.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallationMediaFailureCause = exports.InstallationMediaFailureCause || (exports.InstallationMediaFailureCause = {}));
var InstallationMedia;
(function (InstallationMedia) {
    /**
     * @internal
     */
    InstallationMedia.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallationMedia = exports.InstallationMedia || (exports.InstallationMedia = {}));
var InstallationMediaNotFoundFault;
(function (InstallationMediaNotFoundFault) {
    /**
     * @internal
     */
    InstallationMediaNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallationMediaNotFoundFault = exports.InstallationMediaNotFoundFault || (exports.InstallationMediaNotFoundFault = {}));
var DeleteOptionGroupMessage;
(function (DeleteOptionGroupMessage) {
    /**
     * @internal
     */
    DeleteOptionGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOptionGroupMessage = exports.DeleteOptionGroupMessage || (exports.DeleteOptionGroupMessage = {}));
var InvalidOptionGroupStateFault;
(function (InvalidOptionGroupStateFault) {
    /**
     * @internal
     */
    InvalidOptionGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOptionGroupStateFault = exports.InvalidOptionGroupStateFault || (exports.InvalidOptionGroupStateFault = {}));
var DBProxyTargetNotFoundFault;
(function (DBProxyTargetNotFoundFault) {
    /**
     * @internal
     */
    DBProxyTargetNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyTargetNotFoundFault = exports.DBProxyTargetNotFoundFault || (exports.DBProxyTargetNotFoundFault = {}));
var DeregisterDBProxyTargetsRequest;
(function (DeregisterDBProxyTargetsRequest) {
    /**
     * @internal
     */
    DeregisterDBProxyTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterDBProxyTargetsRequest = exports.DeregisterDBProxyTargetsRequest || (exports.DeregisterDBProxyTargetsRequest = {}));
var DeregisterDBProxyTargetsResponse;
(function (DeregisterDBProxyTargetsResponse) {
    /**
     * @internal
     */
    DeregisterDBProxyTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterDBProxyTargetsResponse = exports.DeregisterDBProxyTargetsResponse || (exports.DeregisterDBProxyTargetsResponse = {}));
var DescribeAccountAttributesMessage;
(function (DescribeAccountAttributesMessage) {
    /**
     * @internal
     */
    DescribeAccountAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesMessage = exports.DescribeAccountAttributesMessage || (exports.DescribeAccountAttributesMessage = {}));
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
var CustomAvailabilityZoneMessage;
(function (CustomAvailabilityZoneMessage) {
    /**
     * @internal
     */
    CustomAvailabilityZoneMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CustomAvailabilityZones && {
            CustomAvailabilityZones: obj.CustomAvailabilityZones.map((item) => CustomAvailabilityZone.filterSensitiveLog(item)),
        }),
    });
})(CustomAvailabilityZoneMessage = exports.CustomAvailabilityZoneMessage || (exports.CustomAvailabilityZoneMessage = {}));
var DescribeCustomAvailabilityZonesMessage;
(function (DescribeCustomAvailabilityZonesMessage) {
    /**
     * @internal
     */
    DescribeCustomAvailabilityZonesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomAvailabilityZonesMessage = exports.DescribeCustomAvailabilityZonesMessage || (exports.DescribeCustomAvailabilityZonesMessage = {}));
var DBClusterBacktrackMessage;
(function (DBClusterBacktrackMessage) {
    /**
     * @internal
     */
    DBClusterBacktrackMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterBacktrackMessage = exports.DBClusterBacktrackMessage || (exports.DBClusterBacktrackMessage = {}));
var DBClusterBacktrackNotFoundFault;
(function (DBClusterBacktrackNotFoundFault) {
    /**
     * @internal
     */
    DBClusterBacktrackNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterBacktrackNotFoundFault = exports.DBClusterBacktrackNotFoundFault || (exports.DBClusterBacktrackNotFoundFault = {}));
var DescribeDBClusterBacktracksMessage;
(function (DescribeDBClusterBacktracksMessage) {
    /**
     * @internal
     */
    DescribeDBClusterBacktracksMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBClusterBacktracksMessage = exports.DescribeDBClusterBacktracksMessage || (exports.DescribeDBClusterBacktracksMessage = {}));
var DBClusterEndpointMessage;
(function (DBClusterEndpointMessage) {
    /**
     * @internal
     */
    DBClusterEndpointMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterEndpointMessage = exports.DBClusterEndpointMessage || (exports.DBClusterEndpointMessage = {}));
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
var DBInstanceAutomatedBackupMessage;
(function (DBInstanceAutomatedBackupMessage) {
    /**
     * @internal
     */
    DBInstanceAutomatedBackupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceAutomatedBackupMessage = exports.DBInstanceAutomatedBackupMessage || (exports.DBInstanceAutomatedBackupMessage = {}));
var DescribeDBInstanceAutomatedBackupsMessage;
(function (DescribeDBInstanceAutomatedBackupsMessage) {
    /**
     * @internal
     */
    DescribeDBInstanceAutomatedBackupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBInstanceAutomatedBackupsMessage = exports.DescribeDBInstanceAutomatedBackupsMessage || (exports.DescribeDBInstanceAutomatedBackupsMessage = {}));
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
var DescribeDBLogFilesMessage;
(function (DescribeDBLogFilesMessage) {
    /**
     * @internal
     */
    DescribeDBLogFilesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBLogFilesMessage = exports.DescribeDBLogFilesMessage || (exports.DescribeDBLogFilesMessage = {}));
var DescribeDBLogFilesDetails;
(function (DescribeDBLogFilesDetails) {
    /**
     * @internal
     */
    DescribeDBLogFilesDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBLogFilesDetails = exports.DescribeDBLogFilesDetails || (exports.DescribeDBLogFilesDetails = {}));
var DescribeDBLogFilesResponse;
(function (DescribeDBLogFilesResponse) {
    /**
     * @internal
     */
    DescribeDBLogFilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBLogFilesResponse = exports.DescribeDBLogFilesResponse || (exports.DescribeDBLogFilesResponse = {}));
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
var DescribeDBProxiesRequest;
(function (DescribeDBProxiesRequest) {
    /**
     * @internal
     */
    DescribeDBProxiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxiesRequest = exports.DescribeDBProxiesRequest || (exports.DescribeDBProxiesRequest = {}));
var DescribeDBProxiesResponse;
(function (DescribeDBProxiesResponse) {
    /**
     * @internal
     */
    DescribeDBProxiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxiesResponse = exports.DescribeDBProxiesResponse || (exports.DescribeDBProxiesResponse = {}));
var DescribeDBProxyEndpointsRequest;
(function (DescribeDBProxyEndpointsRequest) {
    /**
     * @internal
     */
    DescribeDBProxyEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyEndpointsRequest = exports.DescribeDBProxyEndpointsRequest || (exports.DescribeDBProxyEndpointsRequest = {}));
var DescribeDBProxyEndpointsResponse;
(function (DescribeDBProxyEndpointsResponse) {
    /**
     * @internal
     */
    DescribeDBProxyEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyEndpointsResponse = exports.DescribeDBProxyEndpointsResponse || (exports.DescribeDBProxyEndpointsResponse = {}));
var DescribeDBProxyTargetGroupsRequest;
(function (DescribeDBProxyTargetGroupsRequest) {
    /**
     * @internal
     */
    DescribeDBProxyTargetGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyTargetGroupsRequest = exports.DescribeDBProxyTargetGroupsRequest || (exports.DescribeDBProxyTargetGroupsRequest = {}));
var ConnectionPoolConfigurationInfo;
(function (ConnectionPoolConfigurationInfo) {
    /**
     * @internal
     */
    ConnectionPoolConfigurationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionPoolConfigurationInfo = exports.ConnectionPoolConfigurationInfo || (exports.ConnectionPoolConfigurationInfo = {}));
var DBProxyTargetGroup;
(function (DBProxyTargetGroup) {
    /**
     * @internal
     */
    DBProxyTargetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyTargetGroup = exports.DBProxyTargetGroup || (exports.DBProxyTargetGroup = {}));
var DescribeDBProxyTargetGroupsResponse;
(function (DescribeDBProxyTargetGroupsResponse) {
    /**
     * @internal
     */
    DescribeDBProxyTargetGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyTargetGroupsResponse = exports.DescribeDBProxyTargetGroupsResponse || (exports.DescribeDBProxyTargetGroupsResponse = {}));
var DescribeDBProxyTargetsRequest;
(function (DescribeDBProxyTargetsRequest) {
    /**
     * @internal
     */
    DescribeDBProxyTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyTargetsRequest = exports.DescribeDBProxyTargetsRequest || (exports.DescribeDBProxyTargetsRequest = {}));
var TargetRole;
(function (TargetRole) {
    TargetRole["READ_ONLY"] = "READ_ONLY";
    TargetRole["READ_WRITE"] = "READ_WRITE";
    TargetRole["UNKNOWN"] = "UNKNOWN";
})(TargetRole = exports.TargetRole || (exports.TargetRole = {}));
var TargetHealthReason;
(function (TargetHealthReason) {
    TargetHealthReason["AUTH_FAILURE"] = "AUTH_FAILURE";
    TargetHealthReason["CONNECTION_FAILED"] = "CONNECTION_FAILED";
    TargetHealthReason["INVALID_REPLICATION_STATE"] = "INVALID_REPLICATION_STATE";
    TargetHealthReason["PENDING_PROXY_CAPACITY"] = "PENDING_PROXY_CAPACITY";
    TargetHealthReason["UNREACHABLE"] = "UNREACHABLE";
})(TargetHealthReason = exports.TargetHealthReason || (exports.TargetHealthReason = {}));
var TargetState;
(function (TargetState) {
    TargetState["available"] = "AVAILABLE";
    TargetState["registering"] = "REGISTERING";
    TargetState["unavailable"] = "UNAVAILABLE";
})(TargetState = exports.TargetState || (exports.TargetState = {}));
var TargetHealth;
(function (TargetHealth) {
    /**
     * @internal
     */
    TargetHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetHealth = exports.TargetHealth || (exports.TargetHealth = {}));
var TargetType;
(function (TargetType) {
    TargetType["RDS_INSTANCE"] = "RDS_INSTANCE";
    TargetType["RDS_SERVERLESS_ENDPOINT"] = "RDS_SERVERLESS_ENDPOINT";
    TargetType["TRACKED_CLUSTER"] = "TRACKED_CLUSTER";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var DBProxyTarget;
(function (DBProxyTarget) {
    /**
     * @internal
     */
    DBProxyTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyTarget = exports.DBProxyTarget || (exports.DBProxyTarget = {}));
var DescribeDBProxyTargetsResponse;
(function (DescribeDBProxyTargetsResponse) {
    /**
     * @internal
     */
    DescribeDBProxyTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBProxyTargetsResponse = exports.DescribeDBProxyTargetsResponse || (exports.DescribeDBProxyTargetsResponse = {}));
//# sourceMappingURL=models_0.js.map