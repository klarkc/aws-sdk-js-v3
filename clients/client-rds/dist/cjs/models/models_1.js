"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservedDBInstancesOffering = exports.DescribeReservedDBInstancesOfferingsMessage = exports.ReservedDBInstanceNotFoundFault = exports.ReservedDBInstanceMessage = exports.ReservedDBInstance = exports.RecurringCharge = exports.DescribeReservedDBInstancesMessage = exports.PendingMaintenanceActionsMessage = exports.DescribePendingMaintenanceActionsMessage = exports.OrderableDBInstanceOptionsMessage = exports.OrderableDBInstanceOption = exports.AvailableProcessorFeature = exports.DescribeOrderableDBInstanceOptionsMessage = exports.OptionGroups = exports.DescribeOptionGroupsMessage = exports.OptionGroupOptionsMessage = exports.OptionGroupOption = exports.OptionVersion = exports.OptionGroupOptionSetting = exports.MinimumEngineVersionPerAllowedValue = exports.DescribeOptionGroupOptionsMessage = exports.InstallationMediaMessage = exports.DescribeInstallationMediaMessage = exports.GlobalClustersMessage = exports.DescribeGlobalClustersMessage = exports.ExportTasksMessage = exports.DescribeExportTasksMessage = exports.EventSubscriptionsMessage = exports.DescribeEventSubscriptionsMessage = exports.EventsMessage = exports.Event = exports.DescribeEventsMessage = exports.EventCategoriesMessage = exports.EventCategoriesMap = exports.DescribeEventCategoriesMessage = exports.DescribeEngineDefaultParametersResult = exports.DescribeEngineDefaultParametersMessage = exports.DescribeEngineDefaultClusterParametersResult = exports.EngineDefaults = exports.DescribeEngineDefaultClusterParametersMessage = exports.DescribeDBSubnetGroupsMessage = exports.DBSubnetGroupMessage = exports.DescribeDBSnapshotsMessage = exports.DBSnapshotMessage = exports.DescribeDBSnapshotAttributesResult = exports.DBSnapshotAttributesResult = exports.DBSnapshotAttribute = exports.DescribeDBSnapshotAttributesMessage = exports.DescribeDBSecurityGroupsMessage = exports.DBSecurityGroupMessage = void 0;
exports.ModifyDBSnapshotResult = exports.ModifyDBSnapshotMessage = exports.ModifyDBProxyTargetGroupResponse = exports.ModifyDBProxyTargetGroupRequest = exports.ConnectionPoolConfiguration = exports.ModifyDBProxyEndpointResponse = exports.ModifyDBProxyEndpointRequest = exports.ModifyDBProxyResponse = exports.ModifyDBProxyRequest = exports.ModifyDBParameterGroupMessage = exports.DBParameterGroupNameMessage = exports.ModifyDBInstanceResult = exports.ModifyDBInstanceMessage = exports.DBUpgradeDependencyFailureFault = exports.SharedSnapshotQuotaExceededFault = exports.ModifyDBClusterSnapshotAttributeResult = exports.ModifyDBClusterSnapshotAttributeMessage = exports.ModifyDBClusterParameterGroupMessage = exports.DBClusterParameterGroupNameMessage = exports.ModifyDBClusterEndpointMessage = exports.ModifyDBClusterResult = exports.ModifyDBClusterMessage = exports.CloudwatchLogsExportConfiguration = exports.ModifyCurrentDBClusterCapacityMessage = exports.InvalidDBClusterCapacityFault = exports.DBClusterCapacityInfo = exports.ModifyCertificatesResult = exports.ModifyCertificatesMessage = exports.TagListMessage = exports.ListTagsForResourceMessage = exports.InstallationMediaAlreadyExistsFault = exports.ImportInstallationMediaMessage = exports.FailoverGlobalClusterResult = exports.FailoverGlobalClusterMessage = exports.FailoverDBClusterResult = exports.FailoverDBClusterMessage = exports.DownloadDBLogFilePortionMessage = exports.DownloadDBLogFilePortionDetails = exports.DBLogFileNotFoundFault = exports.DescribeValidDBInstanceModificationsResult = exports.ValidDBInstanceModificationsMessage = exports.ValidStorageOptions = exports.Range = exports.DoubleRange = exports.DescribeValidDBInstanceModificationsMessage = exports.SourceRegionMessage = exports.SourceRegion = exports.DescribeSourceRegionsMessage = exports.ReservedDBInstancesOfferingNotFoundFault = exports.ReservedDBInstancesOfferingMessage = void 0;
exports.RestoreDBInstanceFromS3Result = exports.RestoreDBInstanceFromS3Message = exports.RestoreDBInstanceFromDBSnapshotResult = exports.RestoreDBInstanceFromDBSnapshotMessage = exports.RestoreDBClusterToPointInTimeResult = exports.RestoreDBClusterToPointInTimeMessage = exports.RestoreDBClusterFromSnapshotResult = exports.RestoreDBClusterFromSnapshotMessage = exports.InvalidRestoreFault = exports.InsufficientDBClusterCapacityFault = exports.RestoreDBClusterFromS3Result = exports.RestoreDBClusterFromS3Message = exports.InvalidS3BucketFault = exports.ResetDBParameterGroupMessage = exports.ResetDBClusterParameterGroupMessage = exports.RemoveTagsFromResourceMessage = exports.RemoveSourceIdentifierFromSubscriptionResult = exports.RemoveSourceIdentifierFromSubscriptionMessage = exports.RemoveRoleFromDBInstanceMessage = exports.DBInstanceRoleNotFoundFault = exports.RemoveRoleFromDBClusterMessage = exports.DBClusterRoleNotFoundFault = exports.RemoveFromGlobalClusterResult = exports.RemoveFromGlobalClusterMessage = exports.RegisterDBProxyTargetsResponse = exports.RegisterDBProxyTargetsRequest = exports.InsufficientAvailableIPsInSubnetFault = exports.DBProxyTargetAlreadyRegisteredFault = exports.RebootDBInstanceResult = exports.RebootDBInstanceMessage = exports.ReservedDBInstanceQuotaExceededFault = exports.ReservedDBInstanceAlreadyExistsFault = exports.PurchaseReservedDBInstancesOfferingResult = exports.PurchaseReservedDBInstancesOfferingMessage = exports.PromoteReadReplicaDBClusterResult = exports.PromoteReadReplicaDBClusterMessage = exports.PromoteReadReplicaResult = exports.PromoteReadReplicaMessage = exports.ModifyOptionGroupResult = exports.ModifyOptionGroupMessage = exports.OptionConfiguration = exports.ModifyGlobalClusterResult = exports.ModifyGlobalClusterMessage = exports.ModifyEventSubscriptionResult = exports.ModifyEventSubscriptionMessage = exports.SubnetAlreadyInUse = exports.ModifyDBSubnetGroupResult = exports.ModifyDBSubnetGroupMessage = exports.ModifyDBSnapshotAttributeResult = exports.ModifyDBSnapshotAttributeMessage = void 0;
exports.StopDBInstanceAutomatedBackupsReplicationResult = exports.StopDBInstanceAutomatedBackupsReplicationMessage = exports.StopDBInstanceResult = exports.StopDBInstanceMessage = exports.StopDBClusterResult = exports.StopDBClusterMessage = exports.StopActivityStreamResponse = exports.StopActivityStreamRequest = exports.StartExportTaskMessage = exports.InvalidExportSourceStateFault = exports.InvalidExportOnlyFault = exports.IamRoleNotFoundFault = exports.IamRoleMissingPermissionsFault = exports.ExportTaskAlreadyExistsFault = exports.StartDBInstanceAutomatedBackupsReplicationResult = exports.StartDBInstanceAutomatedBackupsReplicationMessage = exports.StartDBInstanceResult = exports.StartDBInstanceMessage = exports.StartDBClusterResult = exports.StartDBClusterMessage = exports.StartActivityStreamResponse = exports.StartActivityStreamRequest = exports.RevokeDBSecurityGroupIngressResult = exports.RevokeDBSecurityGroupIngressMessage = exports.RestoreDBInstanceToPointInTimeResult = exports.RestoreDBInstanceToPointInTimeMessage = exports.PointInTimeRestoreNotEnabledFault = void 0;
var DBSecurityGroupMessage;
(function (DBSecurityGroupMessage) {
    /**
     * @internal
     */
    DBSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSecurityGroupMessage = exports.DBSecurityGroupMessage || (exports.DBSecurityGroupMessage = {}));
var DescribeDBSecurityGroupsMessage;
(function (DescribeDBSecurityGroupsMessage) {
    /**
     * @internal
     */
    DescribeDBSecurityGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBSecurityGroupsMessage = exports.DescribeDBSecurityGroupsMessage || (exports.DescribeDBSecurityGroupsMessage = {}));
var DescribeDBSnapshotAttributesMessage;
(function (DescribeDBSnapshotAttributesMessage) {
    /**
     * @internal
     */
    DescribeDBSnapshotAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBSnapshotAttributesMessage = exports.DescribeDBSnapshotAttributesMessage || (exports.DescribeDBSnapshotAttributesMessage = {}));
var DBSnapshotAttribute;
(function (DBSnapshotAttribute) {
    /**
     * @internal
     */
    DBSnapshotAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotAttribute = exports.DBSnapshotAttribute || (exports.DBSnapshotAttribute = {}));
var DBSnapshotAttributesResult;
(function (DBSnapshotAttributesResult) {
    /**
     * @internal
     */
    DBSnapshotAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotAttributesResult = exports.DBSnapshotAttributesResult || (exports.DBSnapshotAttributesResult = {}));
var DescribeDBSnapshotAttributesResult;
(function (DescribeDBSnapshotAttributesResult) {
    /**
     * @internal
     */
    DescribeDBSnapshotAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBSnapshotAttributesResult = exports.DescribeDBSnapshotAttributesResult || (exports.DescribeDBSnapshotAttributesResult = {}));
var DBSnapshotMessage;
(function (DBSnapshotMessage) {
    /**
     * @internal
     */
    DBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBSnapshotMessage = exports.DBSnapshotMessage || (exports.DBSnapshotMessage = {}));
var DescribeDBSnapshotsMessage;
(function (DescribeDBSnapshotsMessage) {
    /**
     * @internal
     */
    DescribeDBSnapshotsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDBSnapshotsMessage = exports.DescribeDBSnapshotsMessage || (exports.DescribeDBSnapshotsMessage = {}));
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
var DescribeExportTasksMessage;
(function (DescribeExportTasksMessage) {
    /**
     * @internal
     */
    DescribeExportTasksMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportTasksMessage = exports.DescribeExportTasksMessage || (exports.DescribeExportTasksMessage = {}));
var ExportTasksMessage;
(function (ExportTasksMessage) {
    /**
     * @internal
     */
    ExportTasksMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTasksMessage = exports.ExportTasksMessage || (exports.ExportTasksMessage = {}));
var DescribeGlobalClustersMessage;
(function (DescribeGlobalClustersMessage) {
    /**
     * @internal
     */
    DescribeGlobalClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalClustersMessage = exports.DescribeGlobalClustersMessage || (exports.DescribeGlobalClustersMessage = {}));
var GlobalClustersMessage;
(function (GlobalClustersMessage) {
    /**
     * @internal
     */
    GlobalClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalClustersMessage = exports.GlobalClustersMessage || (exports.GlobalClustersMessage = {}));
var DescribeInstallationMediaMessage;
(function (DescribeInstallationMediaMessage) {
    /**
     * @internal
     */
    DescribeInstallationMediaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstallationMediaMessage = exports.DescribeInstallationMediaMessage || (exports.DescribeInstallationMediaMessage = {}));
var InstallationMediaMessage;
(function (InstallationMediaMessage) {
    /**
     * @internal
     */
    InstallationMediaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallationMediaMessage = exports.InstallationMediaMessage || (exports.InstallationMediaMessage = {}));
var DescribeOptionGroupOptionsMessage;
(function (DescribeOptionGroupOptionsMessage) {
    /**
     * @internal
     */
    DescribeOptionGroupOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOptionGroupOptionsMessage = exports.DescribeOptionGroupOptionsMessage || (exports.DescribeOptionGroupOptionsMessage = {}));
var MinimumEngineVersionPerAllowedValue;
(function (MinimumEngineVersionPerAllowedValue) {
    /**
     * @internal
     */
    MinimumEngineVersionPerAllowedValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MinimumEngineVersionPerAllowedValue = exports.MinimumEngineVersionPerAllowedValue || (exports.MinimumEngineVersionPerAllowedValue = {}));
var OptionGroupOptionSetting;
(function (OptionGroupOptionSetting) {
    /**
     * @internal
     */
    OptionGroupOptionSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupOptionSetting = exports.OptionGroupOptionSetting || (exports.OptionGroupOptionSetting = {}));
var OptionVersion;
(function (OptionVersion) {
    /**
     * @internal
     */
    OptionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionVersion = exports.OptionVersion || (exports.OptionVersion = {}));
var OptionGroupOption;
(function (OptionGroupOption) {
    /**
     * @internal
     */
    OptionGroupOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupOption = exports.OptionGroupOption || (exports.OptionGroupOption = {}));
var OptionGroupOptionsMessage;
(function (OptionGroupOptionsMessage) {
    /**
     * @internal
     */
    OptionGroupOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroupOptionsMessage = exports.OptionGroupOptionsMessage || (exports.OptionGroupOptionsMessage = {}));
var DescribeOptionGroupsMessage;
(function (DescribeOptionGroupsMessage) {
    /**
     * @internal
     */
    DescribeOptionGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOptionGroupsMessage = exports.DescribeOptionGroupsMessage || (exports.DescribeOptionGroupsMessage = {}));
var OptionGroups;
(function (OptionGroups) {
    /**
     * @internal
     */
    OptionGroups.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionGroups = exports.OptionGroups || (exports.OptionGroups = {}));
var DescribeOrderableDBInstanceOptionsMessage;
(function (DescribeOrderableDBInstanceOptionsMessage) {
    /**
     * @internal
     */
    DescribeOrderableDBInstanceOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrderableDBInstanceOptionsMessage = exports.DescribeOrderableDBInstanceOptionsMessage || (exports.DescribeOrderableDBInstanceOptionsMessage = {}));
var AvailableProcessorFeature;
(function (AvailableProcessorFeature) {
    /**
     * @internal
     */
    AvailableProcessorFeature.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailableProcessorFeature = exports.AvailableProcessorFeature || (exports.AvailableProcessorFeature = {}));
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
var DescribeReservedDBInstancesMessage;
(function (DescribeReservedDBInstancesMessage) {
    /**
     * @internal
     */
    DescribeReservedDBInstancesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedDBInstancesMessage = exports.DescribeReservedDBInstancesMessage || (exports.DescribeReservedDBInstancesMessage = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var ReservedDBInstance;
(function (ReservedDBInstance) {
    /**
     * @internal
     */
    ReservedDBInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstance = exports.ReservedDBInstance || (exports.ReservedDBInstance = {}));
var ReservedDBInstanceMessage;
(function (ReservedDBInstanceMessage) {
    /**
     * @internal
     */
    ReservedDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstanceMessage = exports.ReservedDBInstanceMessage || (exports.ReservedDBInstanceMessage = {}));
var ReservedDBInstanceNotFoundFault;
(function (ReservedDBInstanceNotFoundFault) {
    /**
     * @internal
     */
    ReservedDBInstanceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstanceNotFoundFault = exports.ReservedDBInstanceNotFoundFault || (exports.ReservedDBInstanceNotFoundFault = {}));
var DescribeReservedDBInstancesOfferingsMessage;
(function (DescribeReservedDBInstancesOfferingsMessage) {
    /**
     * @internal
     */
    DescribeReservedDBInstancesOfferingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedDBInstancesOfferingsMessage = exports.DescribeReservedDBInstancesOfferingsMessage || (exports.DescribeReservedDBInstancesOfferingsMessage = {}));
var ReservedDBInstancesOffering;
(function (ReservedDBInstancesOffering) {
    /**
     * @internal
     */
    ReservedDBInstancesOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstancesOffering = exports.ReservedDBInstancesOffering || (exports.ReservedDBInstancesOffering = {}));
var ReservedDBInstancesOfferingMessage;
(function (ReservedDBInstancesOfferingMessage) {
    /**
     * @internal
     */
    ReservedDBInstancesOfferingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstancesOfferingMessage = exports.ReservedDBInstancesOfferingMessage || (exports.ReservedDBInstancesOfferingMessage = {}));
var ReservedDBInstancesOfferingNotFoundFault;
(function (ReservedDBInstancesOfferingNotFoundFault) {
    /**
     * @internal
     */
    ReservedDBInstancesOfferingNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstancesOfferingNotFoundFault = exports.ReservedDBInstancesOfferingNotFoundFault || (exports.ReservedDBInstancesOfferingNotFoundFault = {}));
var DescribeSourceRegionsMessage;
(function (DescribeSourceRegionsMessage) {
    /**
     * @internal
     */
    DescribeSourceRegionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSourceRegionsMessage = exports.DescribeSourceRegionsMessage || (exports.DescribeSourceRegionsMessage = {}));
var SourceRegion;
(function (SourceRegion) {
    /**
     * @internal
     */
    SourceRegion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceRegion = exports.SourceRegion || (exports.SourceRegion = {}));
var SourceRegionMessage;
(function (SourceRegionMessage) {
    /**
     * @internal
     */
    SourceRegionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceRegionMessage = exports.SourceRegionMessage || (exports.SourceRegionMessage = {}));
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
var DBLogFileNotFoundFault;
(function (DBLogFileNotFoundFault) {
    /**
     * @internal
     */
    DBLogFileNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBLogFileNotFoundFault = exports.DBLogFileNotFoundFault || (exports.DBLogFileNotFoundFault = {}));
var DownloadDBLogFilePortionDetails;
(function (DownloadDBLogFilePortionDetails) {
    /**
     * @internal
     */
    DownloadDBLogFilePortionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DownloadDBLogFilePortionDetails = exports.DownloadDBLogFilePortionDetails || (exports.DownloadDBLogFilePortionDetails = {}));
var DownloadDBLogFilePortionMessage;
(function (DownloadDBLogFilePortionMessage) {
    /**
     * @internal
     */
    DownloadDBLogFilePortionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DownloadDBLogFilePortionMessage = exports.DownloadDBLogFilePortionMessage || (exports.DownloadDBLogFilePortionMessage = {}));
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
var FailoverGlobalClusterMessage;
(function (FailoverGlobalClusterMessage) {
    /**
     * @internal
     */
    FailoverGlobalClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverGlobalClusterMessage = exports.FailoverGlobalClusterMessage || (exports.FailoverGlobalClusterMessage = {}));
var FailoverGlobalClusterResult;
(function (FailoverGlobalClusterResult) {
    /**
     * @internal
     */
    FailoverGlobalClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverGlobalClusterResult = exports.FailoverGlobalClusterResult || (exports.FailoverGlobalClusterResult = {}));
var ImportInstallationMediaMessage;
(function (ImportInstallationMediaMessage) {
    /**
     * @internal
     */
    ImportInstallationMediaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportInstallationMediaMessage = exports.ImportInstallationMediaMessage || (exports.ImportInstallationMediaMessage = {}));
var InstallationMediaAlreadyExistsFault;
(function (InstallationMediaAlreadyExistsFault) {
    /**
     * @internal
     */
    InstallationMediaAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstallationMediaAlreadyExistsFault = exports.InstallationMediaAlreadyExistsFault || (exports.InstallationMediaAlreadyExistsFault = {}));
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
var ModifyCertificatesMessage;
(function (ModifyCertificatesMessage) {
    /**
     * @internal
     */
    ModifyCertificatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCertificatesMessage = exports.ModifyCertificatesMessage || (exports.ModifyCertificatesMessage = {}));
var ModifyCertificatesResult;
(function (ModifyCertificatesResult) {
    /**
     * @internal
     */
    ModifyCertificatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCertificatesResult = exports.ModifyCertificatesResult || (exports.ModifyCertificatesResult = {}));
var DBClusterCapacityInfo;
(function (DBClusterCapacityInfo) {
    /**
     * @internal
     */
    DBClusterCapacityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBClusterCapacityInfo = exports.DBClusterCapacityInfo || (exports.DBClusterCapacityInfo = {}));
var InvalidDBClusterCapacityFault;
(function (InvalidDBClusterCapacityFault) {
    /**
     * @internal
     */
    InvalidDBClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDBClusterCapacityFault = exports.InvalidDBClusterCapacityFault || (exports.InvalidDBClusterCapacityFault = {}));
var ModifyCurrentDBClusterCapacityMessage;
(function (ModifyCurrentDBClusterCapacityMessage) {
    /**
     * @internal
     */
    ModifyCurrentDBClusterCapacityMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCurrentDBClusterCapacityMessage = exports.ModifyCurrentDBClusterCapacityMessage || (exports.ModifyCurrentDBClusterCapacityMessage = {}));
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
var ModifyDBProxyRequest;
(function (ModifyDBProxyRequest) {
    /**
     * @internal
     */
    ModifyDBProxyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyRequest = exports.ModifyDBProxyRequest || (exports.ModifyDBProxyRequest = {}));
var ModifyDBProxyResponse;
(function (ModifyDBProxyResponse) {
    /**
     * @internal
     */
    ModifyDBProxyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyResponse = exports.ModifyDBProxyResponse || (exports.ModifyDBProxyResponse = {}));
var ModifyDBProxyEndpointRequest;
(function (ModifyDBProxyEndpointRequest) {
    /**
     * @internal
     */
    ModifyDBProxyEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyEndpointRequest = exports.ModifyDBProxyEndpointRequest || (exports.ModifyDBProxyEndpointRequest = {}));
var ModifyDBProxyEndpointResponse;
(function (ModifyDBProxyEndpointResponse) {
    /**
     * @internal
     */
    ModifyDBProxyEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyEndpointResponse = exports.ModifyDBProxyEndpointResponse || (exports.ModifyDBProxyEndpointResponse = {}));
var ConnectionPoolConfiguration;
(function (ConnectionPoolConfiguration) {
    /**
     * @internal
     */
    ConnectionPoolConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionPoolConfiguration = exports.ConnectionPoolConfiguration || (exports.ConnectionPoolConfiguration = {}));
var ModifyDBProxyTargetGroupRequest;
(function (ModifyDBProxyTargetGroupRequest) {
    /**
     * @internal
     */
    ModifyDBProxyTargetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyTargetGroupRequest = exports.ModifyDBProxyTargetGroupRequest || (exports.ModifyDBProxyTargetGroupRequest = {}));
var ModifyDBProxyTargetGroupResponse;
(function (ModifyDBProxyTargetGroupResponse) {
    /**
     * @internal
     */
    ModifyDBProxyTargetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBProxyTargetGroupResponse = exports.ModifyDBProxyTargetGroupResponse || (exports.ModifyDBProxyTargetGroupResponse = {}));
var ModifyDBSnapshotMessage;
(function (ModifyDBSnapshotMessage) {
    /**
     * @internal
     */
    ModifyDBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSnapshotMessage = exports.ModifyDBSnapshotMessage || (exports.ModifyDBSnapshotMessage = {}));
var ModifyDBSnapshotResult;
(function (ModifyDBSnapshotResult) {
    /**
     * @internal
     */
    ModifyDBSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSnapshotResult = exports.ModifyDBSnapshotResult || (exports.ModifyDBSnapshotResult = {}));
var ModifyDBSnapshotAttributeMessage;
(function (ModifyDBSnapshotAttributeMessage) {
    /**
     * @internal
     */
    ModifyDBSnapshotAttributeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSnapshotAttributeMessage = exports.ModifyDBSnapshotAttributeMessage || (exports.ModifyDBSnapshotAttributeMessage = {}));
var ModifyDBSnapshotAttributeResult;
(function (ModifyDBSnapshotAttributeResult) {
    /**
     * @internal
     */
    ModifyDBSnapshotAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDBSnapshotAttributeResult = exports.ModifyDBSnapshotAttributeResult || (exports.ModifyDBSnapshotAttributeResult = {}));
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
var ModifyGlobalClusterMessage;
(function (ModifyGlobalClusterMessage) {
    /**
     * @internal
     */
    ModifyGlobalClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyGlobalClusterMessage = exports.ModifyGlobalClusterMessage || (exports.ModifyGlobalClusterMessage = {}));
var ModifyGlobalClusterResult;
(function (ModifyGlobalClusterResult) {
    /**
     * @internal
     */
    ModifyGlobalClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyGlobalClusterResult = exports.ModifyGlobalClusterResult || (exports.ModifyGlobalClusterResult = {}));
var OptionConfiguration;
(function (OptionConfiguration) {
    /**
     * @internal
     */
    OptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionConfiguration = exports.OptionConfiguration || (exports.OptionConfiguration = {}));
var ModifyOptionGroupMessage;
(function (ModifyOptionGroupMessage) {
    /**
     * @internal
     */
    ModifyOptionGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyOptionGroupMessage = exports.ModifyOptionGroupMessage || (exports.ModifyOptionGroupMessage = {}));
var ModifyOptionGroupResult;
(function (ModifyOptionGroupResult) {
    /**
     * @internal
     */
    ModifyOptionGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyOptionGroupResult = exports.ModifyOptionGroupResult || (exports.ModifyOptionGroupResult = {}));
var PromoteReadReplicaMessage;
(function (PromoteReadReplicaMessage) {
    /**
     * @internal
     */
    PromoteReadReplicaMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteReadReplicaMessage = exports.PromoteReadReplicaMessage || (exports.PromoteReadReplicaMessage = {}));
var PromoteReadReplicaResult;
(function (PromoteReadReplicaResult) {
    /**
     * @internal
     */
    PromoteReadReplicaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteReadReplicaResult = exports.PromoteReadReplicaResult || (exports.PromoteReadReplicaResult = {}));
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
var PurchaseReservedDBInstancesOfferingMessage;
(function (PurchaseReservedDBInstancesOfferingMessage) {
    /**
     * @internal
     */
    PurchaseReservedDBInstancesOfferingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedDBInstancesOfferingMessage = exports.PurchaseReservedDBInstancesOfferingMessage || (exports.PurchaseReservedDBInstancesOfferingMessage = {}));
var PurchaseReservedDBInstancesOfferingResult;
(function (PurchaseReservedDBInstancesOfferingResult) {
    /**
     * @internal
     */
    PurchaseReservedDBInstancesOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedDBInstancesOfferingResult = exports.PurchaseReservedDBInstancesOfferingResult || (exports.PurchaseReservedDBInstancesOfferingResult = {}));
var ReservedDBInstanceAlreadyExistsFault;
(function (ReservedDBInstanceAlreadyExistsFault) {
    /**
     * @internal
     */
    ReservedDBInstanceAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstanceAlreadyExistsFault = exports.ReservedDBInstanceAlreadyExistsFault || (exports.ReservedDBInstanceAlreadyExistsFault = {}));
var ReservedDBInstanceQuotaExceededFault;
(function (ReservedDBInstanceQuotaExceededFault) {
    /**
     * @internal
     */
    ReservedDBInstanceQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedDBInstanceQuotaExceededFault = exports.ReservedDBInstanceQuotaExceededFault || (exports.ReservedDBInstanceQuotaExceededFault = {}));
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
var DBProxyTargetAlreadyRegisteredFault;
(function (DBProxyTargetAlreadyRegisteredFault) {
    /**
     * @internal
     */
    DBProxyTargetAlreadyRegisteredFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBProxyTargetAlreadyRegisteredFault = exports.DBProxyTargetAlreadyRegisteredFault || (exports.DBProxyTargetAlreadyRegisteredFault = {}));
var InsufficientAvailableIPsInSubnetFault;
(function (InsufficientAvailableIPsInSubnetFault) {
    /**
     * @internal
     */
    InsufficientAvailableIPsInSubnetFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientAvailableIPsInSubnetFault = exports.InsufficientAvailableIPsInSubnetFault || (exports.InsufficientAvailableIPsInSubnetFault = {}));
var RegisterDBProxyTargetsRequest;
(function (RegisterDBProxyTargetsRequest) {
    /**
     * @internal
     */
    RegisterDBProxyTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDBProxyTargetsRequest = exports.RegisterDBProxyTargetsRequest || (exports.RegisterDBProxyTargetsRequest = {}));
var RegisterDBProxyTargetsResponse;
(function (RegisterDBProxyTargetsResponse) {
    /**
     * @internal
     */
    RegisterDBProxyTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDBProxyTargetsResponse = exports.RegisterDBProxyTargetsResponse || (exports.RegisterDBProxyTargetsResponse = {}));
var RemoveFromGlobalClusterMessage;
(function (RemoveFromGlobalClusterMessage) {
    /**
     * @internal
     */
    RemoveFromGlobalClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFromGlobalClusterMessage = exports.RemoveFromGlobalClusterMessage || (exports.RemoveFromGlobalClusterMessage = {}));
var RemoveFromGlobalClusterResult;
(function (RemoveFromGlobalClusterResult) {
    /**
     * @internal
     */
    RemoveFromGlobalClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFromGlobalClusterResult = exports.RemoveFromGlobalClusterResult || (exports.RemoveFromGlobalClusterResult = {}));
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
var DBInstanceRoleNotFoundFault;
(function (DBInstanceRoleNotFoundFault) {
    /**
     * @internal
     */
    DBInstanceRoleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DBInstanceRoleNotFoundFault = exports.DBInstanceRoleNotFoundFault || (exports.DBInstanceRoleNotFoundFault = {}));
var RemoveRoleFromDBInstanceMessage;
(function (RemoveRoleFromDBInstanceMessage) {
    /**
     * @internal
     */
    RemoveRoleFromDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveRoleFromDBInstanceMessage = exports.RemoveRoleFromDBInstanceMessage || (exports.RemoveRoleFromDBInstanceMessage = {}));
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
var InvalidS3BucketFault;
(function (InvalidS3BucketFault) {
    /**
     * @internal
     */
    InvalidS3BucketFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3BucketFault = exports.InvalidS3BucketFault || (exports.InvalidS3BucketFault = {}));
var RestoreDBClusterFromS3Message;
(function (RestoreDBClusterFromS3Message) {
    /**
     * @internal
     */
    RestoreDBClusterFromS3Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterFromS3Message = exports.RestoreDBClusterFromS3Message || (exports.RestoreDBClusterFromS3Message = {}));
var RestoreDBClusterFromS3Result;
(function (RestoreDBClusterFromS3Result) {
    /**
     * @internal
     */
    RestoreDBClusterFromS3Result.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBClusterFromS3Result = exports.RestoreDBClusterFromS3Result || (exports.RestoreDBClusterFromS3Result = {}));
var InsufficientDBClusterCapacityFault;
(function (InsufficientDBClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientDBClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientDBClusterCapacityFault = exports.InsufficientDBClusterCapacityFault || (exports.InsufficientDBClusterCapacityFault = {}));
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
var RestoreDBInstanceFromDBSnapshotMessage;
(function (RestoreDBInstanceFromDBSnapshotMessage) {
    /**
     * @internal
     */
    RestoreDBInstanceFromDBSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceFromDBSnapshotMessage = exports.RestoreDBInstanceFromDBSnapshotMessage || (exports.RestoreDBInstanceFromDBSnapshotMessage = {}));
var RestoreDBInstanceFromDBSnapshotResult;
(function (RestoreDBInstanceFromDBSnapshotResult) {
    /**
     * @internal
     */
    RestoreDBInstanceFromDBSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceFromDBSnapshotResult = exports.RestoreDBInstanceFromDBSnapshotResult || (exports.RestoreDBInstanceFromDBSnapshotResult = {}));
var RestoreDBInstanceFromS3Message;
(function (RestoreDBInstanceFromS3Message) {
    /**
     * @internal
     */
    RestoreDBInstanceFromS3Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceFromS3Message = exports.RestoreDBInstanceFromS3Message || (exports.RestoreDBInstanceFromS3Message = {}));
var RestoreDBInstanceFromS3Result;
(function (RestoreDBInstanceFromS3Result) {
    /**
     * @internal
     */
    RestoreDBInstanceFromS3Result.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceFromS3Result = exports.RestoreDBInstanceFromS3Result || (exports.RestoreDBInstanceFromS3Result = {}));
var PointInTimeRestoreNotEnabledFault;
(function (PointInTimeRestoreNotEnabledFault) {
    /**
     * @internal
     */
    PointInTimeRestoreNotEnabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PointInTimeRestoreNotEnabledFault = exports.PointInTimeRestoreNotEnabledFault || (exports.PointInTimeRestoreNotEnabledFault = {}));
var RestoreDBInstanceToPointInTimeMessage;
(function (RestoreDBInstanceToPointInTimeMessage) {
    /**
     * @internal
     */
    RestoreDBInstanceToPointInTimeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceToPointInTimeMessage = exports.RestoreDBInstanceToPointInTimeMessage || (exports.RestoreDBInstanceToPointInTimeMessage = {}));
var RestoreDBInstanceToPointInTimeResult;
(function (RestoreDBInstanceToPointInTimeResult) {
    /**
     * @internal
     */
    RestoreDBInstanceToPointInTimeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDBInstanceToPointInTimeResult = exports.RestoreDBInstanceToPointInTimeResult || (exports.RestoreDBInstanceToPointInTimeResult = {}));
var RevokeDBSecurityGroupIngressMessage;
(function (RevokeDBSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    RevokeDBSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeDBSecurityGroupIngressMessage = exports.RevokeDBSecurityGroupIngressMessage || (exports.RevokeDBSecurityGroupIngressMessage = {}));
var RevokeDBSecurityGroupIngressResult;
(function (RevokeDBSecurityGroupIngressResult) {
    /**
     * @internal
     */
    RevokeDBSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeDBSecurityGroupIngressResult = exports.RevokeDBSecurityGroupIngressResult || (exports.RevokeDBSecurityGroupIngressResult = {}));
var StartActivityStreamRequest;
(function (StartActivityStreamRequest) {
    /**
     * @internal
     */
    StartActivityStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartActivityStreamRequest = exports.StartActivityStreamRequest || (exports.StartActivityStreamRequest = {}));
var StartActivityStreamResponse;
(function (StartActivityStreamResponse) {
    /**
     * @internal
     */
    StartActivityStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartActivityStreamResponse = exports.StartActivityStreamResponse || (exports.StartActivityStreamResponse = {}));
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
var StartDBInstanceMessage;
(function (StartDBInstanceMessage) {
    /**
     * @internal
     */
    StartDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBInstanceMessage = exports.StartDBInstanceMessage || (exports.StartDBInstanceMessage = {}));
var StartDBInstanceResult;
(function (StartDBInstanceResult) {
    /**
     * @internal
     */
    StartDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBInstanceResult = exports.StartDBInstanceResult || (exports.StartDBInstanceResult = {}));
var StartDBInstanceAutomatedBackupsReplicationMessage;
(function (StartDBInstanceAutomatedBackupsReplicationMessage) {
    /**
     * @internal
     */
    StartDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBInstanceAutomatedBackupsReplicationMessage = exports.StartDBInstanceAutomatedBackupsReplicationMessage || (exports.StartDBInstanceAutomatedBackupsReplicationMessage = {}));
var StartDBInstanceAutomatedBackupsReplicationResult;
(function (StartDBInstanceAutomatedBackupsReplicationResult) {
    /**
     * @internal
     */
    StartDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDBInstanceAutomatedBackupsReplicationResult = exports.StartDBInstanceAutomatedBackupsReplicationResult || (exports.StartDBInstanceAutomatedBackupsReplicationResult = {}));
var ExportTaskAlreadyExistsFault;
(function (ExportTaskAlreadyExistsFault) {
    /**
     * @internal
     */
    ExportTaskAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTaskAlreadyExistsFault = exports.ExportTaskAlreadyExistsFault || (exports.ExportTaskAlreadyExistsFault = {}));
var IamRoleMissingPermissionsFault;
(function (IamRoleMissingPermissionsFault) {
    /**
     * @internal
     */
    IamRoleMissingPermissionsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamRoleMissingPermissionsFault = exports.IamRoleMissingPermissionsFault || (exports.IamRoleMissingPermissionsFault = {}));
var IamRoleNotFoundFault;
(function (IamRoleNotFoundFault) {
    /**
     * @internal
     */
    IamRoleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamRoleNotFoundFault = exports.IamRoleNotFoundFault || (exports.IamRoleNotFoundFault = {}));
var InvalidExportOnlyFault;
(function (InvalidExportOnlyFault) {
    /**
     * @internal
     */
    InvalidExportOnlyFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExportOnlyFault = exports.InvalidExportOnlyFault || (exports.InvalidExportOnlyFault = {}));
var InvalidExportSourceStateFault;
(function (InvalidExportSourceStateFault) {
    /**
     * @internal
     */
    InvalidExportSourceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExportSourceStateFault = exports.InvalidExportSourceStateFault || (exports.InvalidExportSourceStateFault = {}));
var StartExportTaskMessage;
(function (StartExportTaskMessage) {
    /**
     * @internal
     */
    StartExportTaskMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExportTaskMessage = exports.StartExportTaskMessage || (exports.StartExportTaskMessage = {}));
var StopActivityStreamRequest;
(function (StopActivityStreamRequest) {
    /**
     * @internal
     */
    StopActivityStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopActivityStreamRequest = exports.StopActivityStreamRequest || (exports.StopActivityStreamRequest = {}));
var StopActivityStreamResponse;
(function (StopActivityStreamResponse) {
    /**
     * @internal
     */
    StopActivityStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopActivityStreamResponse = exports.StopActivityStreamResponse || (exports.StopActivityStreamResponse = {}));
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
var StopDBInstanceMessage;
(function (StopDBInstanceMessage) {
    /**
     * @internal
     */
    StopDBInstanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBInstanceMessage = exports.StopDBInstanceMessage || (exports.StopDBInstanceMessage = {}));
var StopDBInstanceResult;
(function (StopDBInstanceResult) {
    /**
     * @internal
     */
    StopDBInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBInstanceResult = exports.StopDBInstanceResult || (exports.StopDBInstanceResult = {}));
var StopDBInstanceAutomatedBackupsReplicationMessage;
(function (StopDBInstanceAutomatedBackupsReplicationMessage) {
    /**
     * @internal
     */
    StopDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBInstanceAutomatedBackupsReplicationMessage = exports.StopDBInstanceAutomatedBackupsReplicationMessage || (exports.StopDBInstanceAutomatedBackupsReplicationMessage = {}));
var StopDBInstanceAutomatedBackupsReplicationResult;
(function (StopDBInstanceAutomatedBackupsReplicationResult) {
    /**
     * @internal
     */
    StopDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDBInstanceAutomatedBackupsReplicationResult = exports.StopDBInstanceAutomatedBackupsReplicationResult || (exports.StopDBInstanceAutomatedBackupsReplicationResult = {}));
//# sourceMappingURL=models_1.js.map