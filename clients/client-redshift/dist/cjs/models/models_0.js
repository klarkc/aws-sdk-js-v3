"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependentServiceRequestThrottlingFault = exports.ClusterSnapshotNotFoundFault = exports.AuthorizeSnapshotAccessResult = exports.Snapshot = exports.AuthorizeSnapshotAccessMessage = exports.InvalidClusterStateFault = exports.InvalidAuthorizationStateFault = exports.EndpointAuthorizationsPerClusterLimitExceededFault = exports.EndpointAuthorizationAlreadyExistsFault = exports.EndpointAuthorization = exports.AuthorizeEndpointAccessMessage = exports.InvalidClusterSecurityGroupStateFault = exports.ClusterSecurityGroupNotFoundFault = exports.AuthorizeClusterSecurityGroupIngressResult = exports.ClusterSecurityGroup = exports.IPRange = exports.EC2SecurityGroup = exports.Tag = exports.AuthorizeClusterSecurityGroupIngressMessage = exports.AuthorizationStatus = exports.AuthorizationQuotaExceededFault = exports.AuthorizationNotFoundFault = exports.AuthorizationAlreadyExistsFault = exports.ClusterAssociatedToSchedule = exports.AquaConfiguration = exports.AquaStatus = exports.AquaConfigurationStatus = exports.UnauthorizedPartnerIntegrationFault = exports.PartnerNotFoundFault = exports.PartnerIntegrationOutputMessage = exports.PartnerIntegrationInputMessage = exports.ClusterNotFoundFault = exports.ActionType = exports.AccountWithRestoreAccess = exports.AccountAttributeList = exports.AccountAttribute = exports.AttributeValueTarget = exports.AccessToSnapshotDeniedFault = exports.AccessToClusterDeniedFault = exports.UnsupportedOperationFault = exports.ReservedNodeOfferingNotFoundFault = exports.ReservedNodeNotFoundFault = exports.ReservedNodeAlreadyMigratedFault = exports.ReservedNodeAlreadyExistsFault = exports.InvalidReservedNodeStateFault = exports.DependentServiceUnavailableFault = exports.AcceptReservedNodeExchangeOutputMessage = exports.ReservedNode = exports.RecurringCharge = exports.AcceptReservedNodeExchangeInputMessage = void 0;
exports.ClusterQuotaExceededFault = exports.ClusterParameterGroupsMessage = exports.ClusterParameterGroupQuotaExceededFault = exports.ClusterParameterGroupNotFoundFault = exports.ClusterParameterGroupNameMessage = exports.ClusterParameterGroupDetails = exports.Parameter = exports.ClusterParameterGroupAlreadyExistsFault = exports.ClusterParameterGroup = exports.ClusterOnLatestRevisionFault = exports.ClusterDbRevisionsMessage = exports.ClusterDbRevision = exports.RevisionTarget = exports.ClusterCredentials = exports.ClusterAlreadyExistsFault = exports.Cluster = exports.VpcSecurityGroupMembership = exports.RestoreStatus = exports.ResizeInfo = exports.PendingModifiedValues = exports.ClusterIamRole = exports.HsmStatus = exports.Endpoint = exports.VpcEndpoint = exports.NetworkInterface = exports.ElasticIpStatus = exports.DeferredMaintenanceWindow = exports.DataTransferProgress = exports.ClusterSnapshotCopyStatus = exports.ClusterSecurityGroupMembership = exports.ClusterParameterGroupStatus = exports.ClusterParameterStatus = exports.ClusterNode = exports.ResizeProgressMessage = exports.ResizeNotFoundFault = exports.CancelResizeMessage = exports.BucketNotFoundFault = exports.InvalidRetentionPeriodFault = exports.BatchModifyClusterSnapshotsOutputMessage = exports.BatchModifyClusterSnapshotsMessage = exports.BatchModifyClusterSnapshotsLimitExceededFault = exports.BatchDeleteRequestSizeExceededFault = exports.BatchDeleteClusterSnapshotsResult = exports.SnapshotErrorMessage = exports.BatchDeleteClusterSnapshotsRequest = exports.DeleteClusterSnapshotMessage = exports.AvailabilityZone = exports.SupportedPlatform = exports.LimitExceededFault = exports.InvalidClusterSnapshotStateFault = void 0;
exports.CreateEventSubscriptionResult = exports.EventSubscription = exports.CreateEventSubscriptionMessage = exports.EndpointsPerClusterLimitExceededFault = exports.EndpointsPerAuthorizationLimitExceededFault = exports.EndpointAlreadyExistsFault = exports.EndpointAccess = exports.CreateEndpointAccessMessage = exports.CreateClusterSubnetGroupResult = exports.CreateClusterSubnetGroupMessage = exports.CreateClusterSnapshotResult = exports.CreateClusterSnapshotMessage = exports.CreateClusterSecurityGroupResult = exports.CreateClusterSecurityGroupMessage = exports.CreateClusterParameterGroupResult = exports.CreateClusterParameterGroupMessage = exports.UnauthorizedOperation = exports.TagLimitExceededFault = exports.SnapshotScheduleNotFoundFault = exports.NumberOfNodesQuotaExceededFault = exports.NumberOfNodesPerClusterLimitExceededFault = exports.InvalidVPCNetworkStateFault = exports.InvalidTagFault = exports.InvalidSubnet = exports.InvalidElasticIpFault = exports.InvalidClusterTrackFault = exports.InvalidClusterSubnetGroupStateFault = exports.InsufficientClusterCapacityFault = exports.HsmConfigurationNotFoundFault = exports.HsmClientCertificateNotFoundFault = exports.CreateClusterResult = exports.CreateClusterMessage = exports.CopyToRegionDisabledFault = exports.CopyClusterSnapshotResult = exports.CopyClusterSnapshotMessage = exports.ClusterVersionsMessage = exports.ClusterVersion = exports.ClusterSubnetQuotaExceededFault = exports.ClusterSubnetGroupQuotaExceededFault = exports.ClusterSubnetGroupNotFoundFault = exports.ClusterSubnetGroupMessage = exports.ClusterSubnetGroupAlreadyExistsFault = exports.ClusterSubnetGroup = exports.Subnet = exports.ClusterSnapshotQuotaExceededFault = exports.ClusterSnapshotAlreadyExistsFault = exports.ClustersMessage = exports.ClusterSecurityGroupQuotaExceededFault = exports.ClusterSecurityGroupMessage = exports.ClusterSecurityGroupAlreadyExistsFault = void 0;
exports.UsageLimit = exports.InvalidUsageLimitFault = exports.CreateUsageLimitMessage = exports.UsageLimitPeriod = exports.UsageLimitLimitType = exports.UsageLimitFeatureType = exports.UsageLimitBreachAction = exports.ResourceNotFoundFault = exports.CreateTagsMessage = exports.SnapshotScheduleQuotaExceededFault = exports.SnapshotScheduleAlreadyExistsFault = exports.SnapshotSchedule = exports.ScheduleDefinitionTypeUnsupportedFault = exports.CreateSnapshotScheduleMessage = exports.SnapshotCopyGrantQuotaExceededFault = exports.SnapshotCopyGrantAlreadyExistsFault = exports.CreateSnapshotCopyGrantResult = exports.SnapshotCopyGrant = exports.CreateSnapshotCopyGrantMessage = exports.ScheduledActionTypeUnsupportedFault = exports.ScheduledActionQuotaExceededFault = exports.ScheduledActionAlreadyExistsFault = exports.ScheduledAction = exports.ScheduledActionState = exports.InvalidScheduleFault = exports.InvalidScheduledActionFault = exports.CreateScheduledActionMessage = exports.ScheduledActionType = exports.ResumeClusterMessage = exports.ResizeClusterMessage = exports.PauseClusterMessage = exports.HsmConfigurationQuotaExceededFault = exports.HsmConfigurationAlreadyExistsFault = exports.CreateHsmConfigurationResult = exports.HsmConfiguration = exports.CreateHsmConfigurationMessage = exports.HsmClientCertificateQuotaExceededFault = exports.HsmClientCertificateAlreadyExistsFault = exports.CreateHsmClientCertificateResult = exports.HsmClientCertificate = exports.CreateHsmClientCertificateMessage = exports.SubscriptionSeverityNotFoundFault = exports.SubscriptionEventIdNotFoundFault = exports.SubscriptionCategoryNotFoundFault = exports.SubscriptionAlreadyExistFault = exports.SourceNotFoundFault = exports.SNSTopicArnNotFoundFault = exports.SNSNoAuthorizationFault = exports.SNSInvalidTopicFault = exports.EventSubscriptionQuotaExceededFault = void 0;
exports.DescribeDefaultClusterParametersMessage = exports.DescribeClusterVersionsMessage = exports.TrackListMessage = exports.MaintenanceTrack = exports.UpdateTarget = exports.SupportedOperation = exports.DescribeClusterTracksMessage = exports.DescribeClusterSubnetGroupsMessage = exports.SnapshotMessage = exports.DescribeClusterSnapshotsMessage = exports.SnapshotSortingEntity = exports.SortByOrder = exports.SnapshotAttributeToSortBy = exports.DescribeClusterSecurityGroupsMessage = exports.DescribeClustersMessage = exports.DescribeClusterParametersMessage = exports.DescribeClusterParameterGroupsMessage = exports.DescribeClusterDbRevisionsMessage = exports.DescribeAccountAttributesMessage = exports.UsageLimitNotFoundFault = exports.DeleteUsageLimitMessage = exports.DeleteTagsMessage = exports.InvalidClusterSnapshotScheduleStateFault = exports.DeleteSnapshotScheduleMessage = exports.SnapshotCopyGrantNotFoundFault = exports.InvalidSnapshotCopyGrantStateFault = exports.DeleteSnapshotCopyGrantMessage = exports.ScheduledActionNotFoundFault = exports.DeleteScheduledActionMessage = exports.InvalidHsmConfigurationStateFault = exports.DeleteHsmConfigurationMessage = exports.InvalidHsmClientCertificateStateFault = exports.DeleteHsmClientCertificateMessage = exports.SubscriptionNotFoundFault = exports.InvalidSubscriptionStateFault = exports.DeleteEventSubscriptionMessage = exports.InvalidEndpointStateFault = exports.EndpointNotFoundFault = exports.DeleteEndpointAccessMessage = exports.InvalidClusterSubnetStateFault = exports.DeleteClusterSubnetGroupMessage = exports.DeleteClusterSnapshotResult = exports.DeleteClusterSecurityGroupMessage = exports.InvalidClusterParameterGroupStateFault = exports.DeleteClusterParameterGroupMessage = exports.DeleteClusterResult = exports.DeleteClusterMessage = exports.DefaultClusterParameters = exports.CustomerStorageMessage = exports.UsageLimitAlreadyExistsFault = void 0;
exports.DescribeSnapshotCopyGrantsMessage = exports.ScheduledActionsMessage = exports.DescribeScheduledActionsMessage = exports.ScheduledActionTypeValues = exports.ScheduledActionFilter = exports.ScheduledActionFilterName = exports.DescribeResizeMessage = exports.ReservedNodesMessage = exports.DescribeReservedNodesMessage = exports.ReservedNodeOfferingsMessage = exports.ReservedNodeOffering = exports.DescribeReservedNodeOfferingsMessage = exports.DescribePartnersOutputMessage = exports.PartnerIntegrationInfo = exports.PartnerIntegrationStatus = exports.DescribePartnersInputMessage = exports.OrderableClusterOptionsMessage = exports.OrderableClusterOption = exports.DescribeOrderableClusterOptionsMessage = exports.NodeConfigurationOptionsMessage = exports.NodeConfigurationOption = exports.Mode = exports.DescribeNodeConfigurationOptionsMessage = exports.NodeConfigurationOptionsFilter = exports.OperatorType = exports.NodeConfigurationOptionsFilterName = exports.LoggingStatus = exports.DescribeLoggingStatusMessage = exports.HsmConfigurationMessage = exports.DescribeHsmConfigurationsMessage = exports.HsmClientCertificateMessage = exports.DescribeHsmClientCertificatesMessage = exports.EventSubscriptionsMessage = exports.DescribeEventSubscriptionsMessage = exports.EventsMessage = exports.Event = exports.DescribeEventsMessage = exports.EventCategoriesMessage = exports.EventCategoriesMap = exports.EventInfoMap = exports.DescribeEventCategoriesMessage = exports.EndpointAuthorizationList = exports.DescribeEndpointAuthorizationMessage = exports.EndpointAccessList = exports.DescribeEndpointAccessMessage = exports.DescribeDefaultClusterParametersResult = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptReservedNodeExchangeInputMessage;
(function (AcceptReservedNodeExchangeInputMessage) {
    /**
     * @internal
     */
    AcceptReservedNodeExchangeInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptReservedNodeExchangeInputMessage = exports.AcceptReservedNodeExchangeInputMessage || (exports.AcceptReservedNodeExchangeInputMessage = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var ReservedNode;
(function (ReservedNode) {
    /**
     * @internal
     */
    ReservedNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNode = exports.ReservedNode || (exports.ReservedNode = {}));
var AcceptReservedNodeExchangeOutputMessage;
(function (AcceptReservedNodeExchangeOutputMessage) {
    /**
     * @internal
     */
    AcceptReservedNodeExchangeOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptReservedNodeExchangeOutputMessage = exports.AcceptReservedNodeExchangeOutputMessage || (exports.AcceptReservedNodeExchangeOutputMessage = {}));
var DependentServiceUnavailableFault;
(function (DependentServiceUnavailableFault) {
    /**
     * @internal
     */
    DependentServiceUnavailableFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependentServiceUnavailableFault = exports.DependentServiceUnavailableFault || (exports.DependentServiceUnavailableFault = {}));
var InvalidReservedNodeStateFault;
(function (InvalidReservedNodeStateFault) {
    /**
     * @internal
     */
    InvalidReservedNodeStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReservedNodeStateFault = exports.InvalidReservedNodeStateFault || (exports.InvalidReservedNodeStateFault = {}));
var ReservedNodeAlreadyExistsFault;
(function (ReservedNodeAlreadyExistsFault) {
    /**
     * @internal
     */
    ReservedNodeAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeAlreadyExistsFault = exports.ReservedNodeAlreadyExistsFault || (exports.ReservedNodeAlreadyExistsFault = {}));
var ReservedNodeAlreadyMigratedFault;
(function (ReservedNodeAlreadyMigratedFault) {
    /**
     * @internal
     */
    ReservedNodeAlreadyMigratedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeAlreadyMigratedFault = exports.ReservedNodeAlreadyMigratedFault || (exports.ReservedNodeAlreadyMigratedFault = {}));
var ReservedNodeNotFoundFault;
(function (ReservedNodeNotFoundFault) {
    /**
     * @internal
     */
    ReservedNodeNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeNotFoundFault = exports.ReservedNodeNotFoundFault || (exports.ReservedNodeNotFoundFault = {}));
var ReservedNodeOfferingNotFoundFault;
(function (ReservedNodeOfferingNotFoundFault) {
    /**
     * @internal
     */
    ReservedNodeOfferingNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeOfferingNotFoundFault = exports.ReservedNodeOfferingNotFoundFault || (exports.ReservedNodeOfferingNotFoundFault = {}));
var UnsupportedOperationFault;
(function (UnsupportedOperationFault) {
    /**
     * @internal
     */
    UnsupportedOperationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationFault = exports.UnsupportedOperationFault || (exports.UnsupportedOperationFault = {}));
var AccessToClusterDeniedFault;
(function (AccessToClusterDeniedFault) {
    /**
     * @internal
     */
    AccessToClusterDeniedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessToClusterDeniedFault = exports.AccessToClusterDeniedFault || (exports.AccessToClusterDeniedFault = {}));
var AccessToSnapshotDeniedFault;
(function (AccessToSnapshotDeniedFault) {
    /**
     * @internal
     */
    AccessToSnapshotDeniedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessToSnapshotDeniedFault = exports.AccessToSnapshotDeniedFault || (exports.AccessToSnapshotDeniedFault = {}));
var AttributeValueTarget;
(function (AttributeValueTarget) {
    /**
     * @internal
     */
    AttributeValueTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeValueTarget = exports.AttributeValueTarget || (exports.AttributeValueTarget = {}));
var AccountAttribute;
(function (AccountAttribute) {
    /**
     * @internal
     */
    AccountAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttribute = exports.AccountAttribute || (exports.AccountAttribute = {}));
var AccountAttributeList;
(function (AccountAttributeList) {
    /**
     * @internal
     */
    AccountAttributeList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttributeList = exports.AccountAttributeList || (exports.AccountAttributeList = {}));
var AccountWithRestoreAccess;
(function (AccountWithRestoreAccess) {
    /**
     * @internal
     */
    AccountWithRestoreAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountWithRestoreAccess = exports.AccountWithRestoreAccess || (exports.AccountWithRestoreAccess = {}));
var ActionType;
(function (ActionType) {
    ActionType["RECOMMEND_NODE_CONFIG"] = "recommend-node-config";
    ActionType["RESIZE_CLUSTER"] = "resize-cluster";
    ActionType["RESTORE_CLUSTER"] = "restore-cluster";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ClusterNotFoundFault;
(function (ClusterNotFoundFault) {
    /**
     * @internal
     */
    ClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterNotFoundFault = exports.ClusterNotFoundFault || (exports.ClusterNotFoundFault = {}));
var PartnerIntegrationInputMessage;
(function (PartnerIntegrationInputMessage) {
    /**
     * @internal
     */
    PartnerIntegrationInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerIntegrationInputMessage = exports.PartnerIntegrationInputMessage || (exports.PartnerIntegrationInputMessage = {}));
var PartnerIntegrationOutputMessage;
(function (PartnerIntegrationOutputMessage) {
    /**
     * @internal
     */
    PartnerIntegrationOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerIntegrationOutputMessage = exports.PartnerIntegrationOutputMessage || (exports.PartnerIntegrationOutputMessage = {}));
var PartnerNotFoundFault;
(function (PartnerNotFoundFault) {
    /**
     * @internal
     */
    PartnerNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerNotFoundFault = exports.PartnerNotFoundFault || (exports.PartnerNotFoundFault = {}));
var UnauthorizedPartnerIntegrationFault;
(function (UnauthorizedPartnerIntegrationFault) {
    /**
     * @internal
     */
    UnauthorizedPartnerIntegrationFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedPartnerIntegrationFault = exports.UnauthorizedPartnerIntegrationFault || (exports.UnauthorizedPartnerIntegrationFault = {}));
var AquaConfigurationStatus;
(function (AquaConfigurationStatus) {
    AquaConfigurationStatus["AUTO"] = "auto";
    AquaConfigurationStatus["DISABLED"] = "disabled";
    AquaConfigurationStatus["ENABLED"] = "enabled";
})(AquaConfigurationStatus = exports.AquaConfigurationStatus || (exports.AquaConfigurationStatus = {}));
var AquaStatus;
(function (AquaStatus) {
    AquaStatus["APPLYING"] = "applying";
    AquaStatus["DISABLED"] = "disabled";
    AquaStatus["ENABLED"] = "enabled";
})(AquaStatus = exports.AquaStatus || (exports.AquaStatus = {}));
var AquaConfiguration;
(function (AquaConfiguration) {
    /**
     * @internal
     */
    AquaConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AquaConfiguration = exports.AquaConfiguration || (exports.AquaConfiguration = {}));
var ClusterAssociatedToSchedule;
(function (ClusterAssociatedToSchedule) {
    /**
     * @internal
     */
    ClusterAssociatedToSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterAssociatedToSchedule = exports.ClusterAssociatedToSchedule || (exports.ClusterAssociatedToSchedule = {}));
var AuthorizationAlreadyExistsFault;
(function (AuthorizationAlreadyExistsFault) {
    /**
     * @internal
     */
    AuthorizationAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationAlreadyExistsFault = exports.AuthorizationAlreadyExistsFault || (exports.AuthorizationAlreadyExistsFault = {}));
var AuthorizationNotFoundFault;
(function (AuthorizationNotFoundFault) {
    /**
     * @internal
     */
    AuthorizationNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationNotFoundFault = exports.AuthorizationNotFoundFault || (exports.AuthorizationNotFoundFault = {}));
var AuthorizationQuotaExceededFault;
(function (AuthorizationQuotaExceededFault) {
    /**
     * @internal
     */
    AuthorizationQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationQuotaExceededFault = exports.AuthorizationQuotaExceededFault || (exports.AuthorizationQuotaExceededFault = {}));
var AuthorizationStatus;
(function (AuthorizationStatus) {
    AuthorizationStatus["AUTHORIZED"] = "Authorized";
    AuthorizationStatus["REVOKING"] = "Revoking";
})(AuthorizationStatus = exports.AuthorizationStatus || (exports.AuthorizationStatus = {}));
var AuthorizeClusterSecurityGroupIngressMessage;
(function (AuthorizeClusterSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    AuthorizeClusterSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeClusterSecurityGroupIngressMessage = exports.AuthorizeClusterSecurityGroupIngressMessage || (exports.AuthorizeClusterSecurityGroupIngressMessage = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
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
var ClusterSecurityGroup;
(function (ClusterSecurityGroup) {
    /**
     * @internal
     */
    ClusterSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroup = exports.ClusterSecurityGroup || (exports.ClusterSecurityGroup = {}));
var AuthorizeClusterSecurityGroupIngressResult;
(function (AuthorizeClusterSecurityGroupIngressResult) {
    /**
     * @internal
     */
    AuthorizeClusterSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeClusterSecurityGroupIngressResult = exports.AuthorizeClusterSecurityGroupIngressResult || (exports.AuthorizeClusterSecurityGroupIngressResult = {}));
var ClusterSecurityGroupNotFoundFault;
(function (ClusterSecurityGroupNotFoundFault) {
    /**
     * @internal
     */
    ClusterSecurityGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroupNotFoundFault = exports.ClusterSecurityGroupNotFoundFault || (exports.ClusterSecurityGroupNotFoundFault = {}));
var InvalidClusterSecurityGroupStateFault;
(function (InvalidClusterSecurityGroupStateFault) {
    /**
     * @internal
     */
    InvalidClusterSecurityGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterSecurityGroupStateFault = exports.InvalidClusterSecurityGroupStateFault || (exports.InvalidClusterSecurityGroupStateFault = {}));
var AuthorizeEndpointAccessMessage;
(function (AuthorizeEndpointAccessMessage) {
    /**
     * @internal
     */
    AuthorizeEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeEndpointAccessMessage = exports.AuthorizeEndpointAccessMessage || (exports.AuthorizeEndpointAccessMessage = {}));
var EndpointAuthorization;
(function (EndpointAuthorization) {
    /**
     * @internal
     */
    EndpointAuthorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAuthorization = exports.EndpointAuthorization || (exports.EndpointAuthorization = {}));
var EndpointAuthorizationAlreadyExistsFault;
(function (EndpointAuthorizationAlreadyExistsFault) {
    /**
     * @internal
     */
    EndpointAuthorizationAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAuthorizationAlreadyExistsFault = exports.EndpointAuthorizationAlreadyExistsFault || (exports.EndpointAuthorizationAlreadyExistsFault = {}));
var EndpointAuthorizationsPerClusterLimitExceededFault;
(function (EndpointAuthorizationsPerClusterLimitExceededFault) {
    /**
     * @internal
     */
    EndpointAuthorizationsPerClusterLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAuthorizationsPerClusterLimitExceededFault = exports.EndpointAuthorizationsPerClusterLimitExceededFault || (exports.EndpointAuthorizationsPerClusterLimitExceededFault = {}));
var InvalidAuthorizationStateFault;
(function (InvalidAuthorizationStateFault) {
    /**
     * @internal
     */
    InvalidAuthorizationStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAuthorizationStateFault = exports.InvalidAuthorizationStateFault || (exports.InvalidAuthorizationStateFault = {}));
var InvalidClusterStateFault;
(function (InvalidClusterStateFault) {
    /**
     * @internal
     */
    InvalidClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterStateFault = exports.InvalidClusterStateFault || (exports.InvalidClusterStateFault = {}));
var AuthorizeSnapshotAccessMessage;
(function (AuthorizeSnapshotAccessMessage) {
    /**
     * @internal
     */
    AuthorizeSnapshotAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeSnapshotAccessMessage = exports.AuthorizeSnapshotAccessMessage || (exports.AuthorizeSnapshotAccessMessage = {}));
var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var AuthorizeSnapshotAccessResult;
(function (AuthorizeSnapshotAccessResult) {
    /**
     * @internal
     */
    AuthorizeSnapshotAccessResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeSnapshotAccessResult = exports.AuthorizeSnapshotAccessResult || (exports.AuthorizeSnapshotAccessResult = {}));
var ClusterSnapshotNotFoundFault;
(function (ClusterSnapshotNotFoundFault) {
    /**
     * @internal
     */
    ClusterSnapshotNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSnapshotNotFoundFault = exports.ClusterSnapshotNotFoundFault || (exports.ClusterSnapshotNotFoundFault = {}));
var DependentServiceRequestThrottlingFault;
(function (DependentServiceRequestThrottlingFault) {
    /**
     * @internal
     */
    DependentServiceRequestThrottlingFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependentServiceRequestThrottlingFault = exports.DependentServiceRequestThrottlingFault || (exports.DependentServiceRequestThrottlingFault = {}));
var InvalidClusterSnapshotStateFault;
(function (InvalidClusterSnapshotStateFault) {
    /**
     * @internal
     */
    InvalidClusterSnapshotStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterSnapshotStateFault = exports.InvalidClusterSnapshotStateFault || (exports.InvalidClusterSnapshotStateFault = {}));
var LimitExceededFault;
(function (LimitExceededFault) {
    /**
     * @internal
     */
    LimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededFault = exports.LimitExceededFault || (exports.LimitExceededFault = {}));
var SupportedPlatform;
(function (SupportedPlatform) {
    /**
     * @internal
     */
    SupportedPlatform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SupportedPlatform = exports.SupportedPlatform || (exports.SupportedPlatform = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var DeleteClusterSnapshotMessage;
(function (DeleteClusterSnapshotMessage) {
    /**
     * @internal
     */
    DeleteClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterSnapshotMessage = exports.DeleteClusterSnapshotMessage || (exports.DeleteClusterSnapshotMessage = {}));
var BatchDeleteClusterSnapshotsRequest;
(function (BatchDeleteClusterSnapshotsRequest) {
    /**
     * @internal
     */
    BatchDeleteClusterSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteClusterSnapshotsRequest = exports.BatchDeleteClusterSnapshotsRequest || (exports.BatchDeleteClusterSnapshotsRequest = {}));
var SnapshotErrorMessage;
(function (SnapshotErrorMessage) {
    /**
     * @internal
     */
    SnapshotErrorMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotErrorMessage = exports.SnapshotErrorMessage || (exports.SnapshotErrorMessage = {}));
var BatchDeleteClusterSnapshotsResult;
(function (BatchDeleteClusterSnapshotsResult) {
    /**
     * @internal
     */
    BatchDeleteClusterSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteClusterSnapshotsResult = exports.BatchDeleteClusterSnapshotsResult || (exports.BatchDeleteClusterSnapshotsResult = {}));
var BatchDeleteRequestSizeExceededFault;
(function (BatchDeleteRequestSizeExceededFault) {
    /**
     * @internal
     */
    BatchDeleteRequestSizeExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteRequestSizeExceededFault = exports.BatchDeleteRequestSizeExceededFault || (exports.BatchDeleteRequestSizeExceededFault = {}));
var BatchModifyClusterSnapshotsLimitExceededFault;
(function (BatchModifyClusterSnapshotsLimitExceededFault) {
    /**
     * @internal
     */
    BatchModifyClusterSnapshotsLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchModifyClusterSnapshotsLimitExceededFault = exports.BatchModifyClusterSnapshotsLimitExceededFault || (exports.BatchModifyClusterSnapshotsLimitExceededFault = {}));
var BatchModifyClusterSnapshotsMessage;
(function (BatchModifyClusterSnapshotsMessage) {
    /**
     * @internal
     */
    BatchModifyClusterSnapshotsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchModifyClusterSnapshotsMessage = exports.BatchModifyClusterSnapshotsMessage || (exports.BatchModifyClusterSnapshotsMessage = {}));
var BatchModifyClusterSnapshotsOutputMessage;
(function (BatchModifyClusterSnapshotsOutputMessage) {
    /**
     * @internal
     */
    BatchModifyClusterSnapshotsOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchModifyClusterSnapshotsOutputMessage = exports.BatchModifyClusterSnapshotsOutputMessage || (exports.BatchModifyClusterSnapshotsOutputMessage = {}));
var InvalidRetentionPeriodFault;
(function (InvalidRetentionPeriodFault) {
    /**
     * @internal
     */
    InvalidRetentionPeriodFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRetentionPeriodFault = exports.InvalidRetentionPeriodFault || (exports.InvalidRetentionPeriodFault = {}));
var BucketNotFoundFault;
(function (BucketNotFoundFault) {
    /**
     * @internal
     */
    BucketNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketNotFoundFault = exports.BucketNotFoundFault || (exports.BucketNotFoundFault = {}));
var CancelResizeMessage;
(function (CancelResizeMessage) {
    /**
     * @internal
     */
    CancelResizeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelResizeMessage = exports.CancelResizeMessage || (exports.CancelResizeMessage = {}));
var ResizeNotFoundFault;
(function (ResizeNotFoundFault) {
    /**
     * @internal
     */
    ResizeNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResizeNotFoundFault = exports.ResizeNotFoundFault || (exports.ResizeNotFoundFault = {}));
var ResizeProgressMessage;
(function (ResizeProgressMessage) {
    /**
     * @internal
     */
    ResizeProgressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResizeProgressMessage = exports.ResizeProgressMessage || (exports.ResizeProgressMessage = {}));
var ClusterNode;
(function (ClusterNode) {
    /**
     * @internal
     */
    ClusterNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterNode = exports.ClusterNode || (exports.ClusterNode = {}));
var ClusterParameterStatus;
(function (ClusterParameterStatus) {
    /**
     * @internal
     */
    ClusterParameterStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterStatus = exports.ClusterParameterStatus || (exports.ClusterParameterStatus = {}));
var ClusterParameterGroupStatus;
(function (ClusterParameterGroupStatus) {
    /**
     * @internal
     */
    ClusterParameterGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupStatus = exports.ClusterParameterGroupStatus || (exports.ClusterParameterGroupStatus = {}));
var ClusterSecurityGroupMembership;
(function (ClusterSecurityGroupMembership) {
    /**
     * @internal
     */
    ClusterSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroupMembership = exports.ClusterSecurityGroupMembership || (exports.ClusterSecurityGroupMembership = {}));
var ClusterSnapshotCopyStatus;
(function (ClusterSnapshotCopyStatus) {
    /**
     * @internal
     */
    ClusterSnapshotCopyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSnapshotCopyStatus = exports.ClusterSnapshotCopyStatus || (exports.ClusterSnapshotCopyStatus = {}));
var DataTransferProgress;
(function (DataTransferProgress) {
    /**
     * @internal
     */
    DataTransferProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataTransferProgress = exports.DataTransferProgress || (exports.DataTransferProgress = {}));
var DeferredMaintenanceWindow;
(function (DeferredMaintenanceWindow) {
    /**
     * @internal
     */
    DeferredMaintenanceWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeferredMaintenanceWindow = exports.DeferredMaintenanceWindow || (exports.DeferredMaintenanceWindow = {}));
var ElasticIpStatus;
(function (ElasticIpStatus) {
    /**
     * @internal
     */
    ElasticIpStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticIpStatus = exports.ElasticIpStatus || (exports.ElasticIpStatus = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var VpcEndpoint;
(function (VpcEndpoint) {
    /**
     * @internal
     */
    VpcEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcEndpoint = exports.VpcEndpoint || (exports.VpcEndpoint = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var HsmStatus;
(function (HsmStatus) {
    /**
     * @internal
     */
    HsmStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmStatus = exports.HsmStatus || (exports.HsmStatus = {}));
var ClusterIamRole;
(function (ClusterIamRole) {
    /**
     * @internal
     */
    ClusterIamRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterIamRole = exports.ClusterIamRole || (exports.ClusterIamRole = {}));
var PendingModifiedValues;
(function (PendingModifiedValues) {
    /**
     * @internal
     */
    PendingModifiedValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingModifiedValues = exports.PendingModifiedValues || (exports.PendingModifiedValues = {}));
var ResizeInfo;
(function (ResizeInfo) {
    /**
     * @internal
     */
    ResizeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResizeInfo = exports.ResizeInfo || (exports.ResizeInfo = {}));
var RestoreStatus;
(function (RestoreStatus) {
    /**
     * @internal
     */
    RestoreStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreStatus = exports.RestoreStatus || (exports.RestoreStatus = {}));
var VpcSecurityGroupMembership;
(function (VpcSecurityGroupMembership) {
    /**
     * @internal
     */
    VpcSecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcSecurityGroupMembership = exports.VpcSecurityGroupMembership || (exports.VpcSecurityGroupMembership = {}));
var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var ClusterAlreadyExistsFault;
(function (ClusterAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterAlreadyExistsFault = exports.ClusterAlreadyExistsFault || (exports.ClusterAlreadyExistsFault = {}));
var ClusterCredentials;
(function (ClusterCredentials) {
    /**
     * @internal
     */
    ClusterCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DbPassword && { DbPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(ClusterCredentials = exports.ClusterCredentials || (exports.ClusterCredentials = {}));
var RevisionTarget;
(function (RevisionTarget) {
    /**
     * @internal
     */
    RevisionTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionTarget = exports.RevisionTarget || (exports.RevisionTarget = {}));
var ClusterDbRevision;
(function (ClusterDbRevision) {
    /**
     * @internal
     */
    ClusterDbRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterDbRevision = exports.ClusterDbRevision || (exports.ClusterDbRevision = {}));
var ClusterDbRevisionsMessage;
(function (ClusterDbRevisionsMessage) {
    /**
     * @internal
     */
    ClusterDbRevisionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterDbRevisionsMessage = exports.ClusterDbRevisionsMessage || (exports.ClusterDbRevisionsMessage = {}));
var ClusterOnLatestRevisionFault;
(function (ClusterOnLatestRevisionFault) {
    /**
     * @internal
     */
    ClusterOnLatestRevisionFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterOnLatestRevisionFault = exports.ClusterOnLatestRevisionFault || (exports.ClusterOnLatestRevisionFault = {}));
var ClusterParameterGroup;
(function (ClusterParameterGroup) {
    /**
     * @internal
     */
    ClusterParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroup = exports.ClusterParameterGroup || (exports.ClusterParameterGroup = {}));
var ClusterParameterGroupAlreadyExistsFault;
(function (ClusterParameterGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterParameterGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupAlreadyExistsFault = exports.ClusterParameterGroupAlreadyExistsFault || (exports.ClusterParameterGroupAlreadyExistsFault = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var ClusterParameterGroupDetails;
(function (ClusterParameterGroupDetails) {
    /**
     * @internal
     */
    ClusterParameterGroupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupDetails = exports.ClusterParameterGroupDetails || (exports.ClusterParameterGroupDetails = {}));
var ClusterParameterGroupNameMessage;
(function (ClusterParameterGroupNameMessage) {
    /**
     * @internal
     */
    ClusterParameterGroupNameMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupNameMessage = exports.ClusterParameterGroupNameMessage || (exports.ClusterParameterGroupNameMessage = {}));
var ClusterParameterGroupNotFoundFault;
(function (ClusterParameterGroupNotFoundFault) {
    /**
     * @internal
     */
    ClusterParameterGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupNotFoundFault = exports.ClusterParameterGroupNotFoundFault || (exports.ClusterParameterGroupNotFoundFault = {}));
var ClusterParameterGroupQuotaExceededFault;
(function (ClusterParameterGroupQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterParameterGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupQuotaExceededFault = exports.ClusterParameterGroupQuotaExceededFault || (exports.ClusterParameterGroupQuotaExceededFault = {}));
var ClusterParameterGroupsMessage;
(function (ClusterParameterGroupsMessage) {
    /**
     * @internal
     */
    ClusterParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterParameterGroupsMessage = exports.ClusterParameterGroupsMessage || (exports.ClusterParameterGroupsMessage = {}));
var ClusterQuotaExceededFault;
(function (ClusterQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterQuotaExceededFault = exports.ClusterQuotaExceededFault || (exports.ClusterQuotaExceededFault = {}));
var ClusterSecurityGroupAlreadyExistsFault;
(function (ClusterSecurityGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterSecurityGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroupAlreadyExistsFault = exports.ClusterSecurityGroupAlreadyExistsFault || (exports.ClusterSecurityGroupAlreadyExistsFault = {}));
var ClusterSecurityGroupMessage;
(function (ClusterSecurityGroupMessage) {
    /**
     * @internal
     */
    ClusterSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroupMessage = exports.ClusterSecurityGroupMessage || (exports.ClusterSecurityGroupMessage = {}));
var ClusterSecurityGroupQuotaExceededFault;
(function (ClusterSecurityGroupQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterSecurityGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSecurityGroupQuotaExceededFault = exports.ClusterSecurityGroupQuotaExceededFault || (exports.ClusterSecurityGroupQuotaExceededFault = {}));
var ClustersMessage;
(function (ClustersMessage) {
    /**
     * @internal
     */
    ClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClustersMessage = exports.ClustersMessage || (exports.ClustersMessage = {}));
var ClusterSnapshotAlreadyExistsFault;
(function (ClusterSnapshotAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterSnapshotAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSnapshotAlreadyExistsFault = exports.ClusterSnapshotAlreadyExistsFault || (exports.ClusterSnapshotAlreadyExistsFault = {}));
var ClusterSnapshotQuotaExceededFault;
(function (ClusterSnapshotQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterSnapshotQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSnapshotQuotaExceededFault = exports.ClusterSnapshotQuotaExceededFault || (exports.ClusterSnapshotQuotaExceededFault = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var ClusterSubnetGroup;
(function (ClusterSubnetGroup) {
    /**
     * @internal
     */
    ClusterSubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetGroup = exports.ClusterSubnetGroup || (exports.ClusterSubnetGroup = {}));
var ClusterSubnetGroupAlreadyExistsFault;
(function (ClusterSubnetGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterSubnetGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetGroupAlreadyExistsFault = exports.ClusterSubnetGroupAlreadyExistsFault || (exports.ClusterSubnetGroupAlreadyExistsFault = {}));
var ClusterSubnetGroupMessage;
(function (ClusterSubnetGroupMessage) {
    /**
     * @internal
     */
    ClusterSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetGroupMessage = exports.ClusterSubnetGroupMessage || (exports.ClusterSubnetGroupMessage = {}));
var ClusterSubnetGroupNotFoundFault;
(function (ClusterSubnetGroupNotFoundFault) {
    /**
     * @internal
     */
    ClusterSubnetGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetGroupNotFoundFault = exports.ClusterSubnetGroupNotFoundFault || (exports.ClusterSubnetGroupNotFoundFault = {}));
var ClusterSubnetGroupQuotaExceededFault;
(function (ClusterSubnetGroupQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterSubnetGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetGroupQuotaExceededFault = exports.ClusterSubnetGroupQuotaExceededFault || (exports.ClusterSubnetGroupQuotaExceededFault = {}));
var ClusterSubnetQuotaExceededFault;
(function (ClusterSubnetQuotaExceededFault) {
    /**
     * @internal
     */
    ClusterSubnetQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSubnetQuotaExceededFault = exports.ClusterSubnetQuotaExceededFault || (exports.ClusterSubnetQuotaExceededFault = {}));
var ClusterVersion;
(function (ClusterVersion) {
    /**
     * @internal
     */
    ClusterVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterVersion = exports.ClusterVersion || (exports.ClusterVersion = {}));
var ClusterVersionsMessage;
(function (ClusterVersionsMessage) {
    /**
     * @internal
     */
    ClusterVersionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterVersionsMessage = exports.ClusterVersionsMessage || (exports.ClusterVersionsMessage = {}));
var CopyClusterSnapshotMessage;
(function (CopyClusterSnapshotMessage) {
    /**
     * @internal
     */
    CopyClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyClusterSnapshotMessage = exports.CopyClusterSnapshotMessage || (exports.CopyClusterSnapshotMessage = {}));
var CopyClusterSnapshotResult;
(function (CopyClusterSnapshotResult) {
    /**
     * @internal
     */
    CopyClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyClusterSnapshotResult = exports.CopyClusterSnapshotResult || (exports.CopyClusterSnapshotResult = {}));
var CopyToRegionDisabledFault;
(function (CopyToRegionDisabledFault) {
    /**
     * @internal
     */
    CopyToRegionDisabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyToRegionDisabledFault = exports.CopyToRegionDisabledFault || (exports.CopyToRegionDisabledFault = {}));
var CreateClusterMessage;
(function (CreateClusterMessage) {
    /**
     * @internal
     */
    CreateClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterMessage = exports.CreateClusterMessage || (exports.CreateClusterMessage = {}));
var CreateClusterResult;
(function (CreateClusterResult) {
    /**
     * @internal
     */
    CreateClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResult = exports.CreateClusterResult || (exports.CreateClusterResult = {}));
var HsmClientCertificateNotFoundFault;
(function (HsmClientCertificateNotFoundFault) {
    /**
     * @internal
     */
    HsmClientCertificateNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmClientCertificateNotFoundFault = exports.HsmClientCertificateNotFoundFault || (exports.HsmClientCertificateNotFoundFault = {}));
var HsmConfigurationNotFoundFault;
(function (HsmConfigurationNotFoundFault) {
    /**
     * @internal
     */
    HsmConfigurationNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmConfigurationNotFoundFault = exports.HsmConfigurationNotFoundFault || (exports.HsmConfigurationNotFoundFault = {}));
var InsufficientClusterCapacityFault;
(function (InsufficientClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientClusterCapacityFault = exports.InsufficientClusterCapacityFault || (exports.InsufficientClusterCapacityFault = {}));
var InvalidClusterSubnetGroupStateFault;
(function (InvalidClusterSubnetGroupStateFault) {
    /**
     * @internal
     */
    InvalidClusterSubnetGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterSubnetGroupStateFault = exports.InvalidClusterSubnetGroupStateFault || (exports.InvalidClusterSubnetGroupStateFault = {}));
var InvalidClusterTrackFault;
(function (InvalidClusterTrackFault) {
    /**
     * @internal
     */
    InvalidClusterTrackFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterTrackFault = exports.InvalidClusterTrackFault || (exports.InvalidClusterTrackFault = {}));
var InvalidElasticIpFault;
(function (InvalidElasticIpFault) {
    /**
     * @internal
     */
    InvalidElasticIpFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidElasticIpFault = exports.InvalidElasticIpFault || (exports.InvalidElasticIpFault = {}));
var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnet = exports.InvalidSubnet || (exports.InvalidSubnet = {}));
var InvalidTagFault;
(function (InvalidTagFault) {
    /**
     * @internal
     */
    InvalidTagFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagFault = exports.InvalidTagFault || (exports.InvalidTagFault = {}));
var InvalidVPCNetworkStateFault;
(function (InvalidVPCNetworkStateFault) {
    /**
     * @internal
     */
    InvalidVPCNetworkStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVPCNetworkStateFault = exports.InvalidVPCNetworkStateFault || (exports.InvalidVPCNetworkStateFault = {}));
var NumberOfNodesPerClusterLimitExceededFault;
(function (NumberOfNodesPerClusterLimitExceededFault) {
    /**
     * @internal
     */
    NumberOfNodesPerClusterLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberOfNodesPerClusterLimitExceededFault = exports.NumberOfNodesPerClusterLimitExceededFault || (exports.NumberOfNodesPerClusterLimitExceededFault = {}));
var NumberOfNodesQuotaExceededFault;
(function (NumberOfNodesQuotaExceededFault) {
    /**
     * @internal
     */
    NumberOfNodesQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberOfNodesQuotaExceededFault = exports.NumberOfNodesQuotaExceededFault || (exports.NumberOfNodesQuotaExceededFault = {}));
var SnapshotScheduleNotFoundFault;
(function (SnapshotScheduleNotFoundFault) {
    /**
     * @internal
     */
    SnapshotScheduleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotScheduleNotFoundFault = exports.SnapshotScheduleNotFoundFault || (exports.SnapshotScheduleNotFoundFault = {}));
var TagLimitExceededFault;
(function (TagLimitExceededFault) {
    /**
     * @internal
     */
    TagLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededFault = exports.TagLimitExceededFault || (exports.TagLimitExceededFault = {}));
var UnauthorizedOperation;
(function (UnauthorizedOperation) {
    /**
     * @internal
     */
    UnauthorizedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedOperation = exports.UnauthorizedOperation || (exports.UnauthorizedOperation = {}));
var CreateClusterParameterGroupMessage;
(function (CreateClusterParameterGroupMessage) {
    /**
     * @internal
     */
    CreateClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterParameterGroupMessage = exports.CreateClusterParameterGroupMessage || (exports.CreateClusterParameterGroupMessage = {}));
var CreateClusterParameterGroupResult;
(function (CreateClusterParameterGroupResult) {
    /**
     * @internal
     */
    CreateClusterParameterGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterParameterGroupResult = exports.CreateClusterParameterGroupResult || (exports.CreateClusterParameterGroupResult = {}));
var CreateClusterSecurityGroupMessage;
(function (CreateClusterSecurityGroupMessage) {
    /**
     * @internal
     */
    CreateClusterSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSecurityGroupMessage = exports.CreateClusterSecurityGroupMessage || (exports.CreateClusterSecurityGroupMessage = {}));
var CreateClusterSecurityGroupResult;
(function (CreateClusterSecurityGroupResult) {
    /**
     * @internal
     */
    CreateClusterSecurityGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSecurityGroupResult = exports.CreateClusterSecurityGroupResult || (exports.CreateClusterSecurityGroupResult = {}));
var CreateClusterSnapshotMessage;
(function (CreateClusterSnapshotMessage) {
    /**
     * @internal
     */
    CreateClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSnapshotMessage = exports.CreateClusterSnapshotMessage || (exports.CreateClusterSnapshotMessage = {}));
var CreateClusterSnapshotResult;
(function (CreateClusterSnapshotResult) {
    /**
     * @internal
     */
    CreateClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSnapshotResult = exports.CreateClusterSnapshotResult || (exports.CreateClusterSnapshotResult = {}));
var CreateClusterSubnetGroupMessage;
(function (CreateClusterSubnetGroupMessage) {
    /**
     * @internal
     */
    CreateClusterSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSubnetGroupMessage = exports.CreateClusterSubnetGroupMessage || (exports.CreateClusterSubnetGroupMessage = {}));
var CreateClusterSubnetGroupResult;
(function (CreateClusterSubnetGroupResult) {
    /**
     * @internal
     */
    CreateClusterSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterSubnetGroupResult = exports.CreateClusterSubnetGroupResult || (exports.CreateClusterSubnetGroupResult = {}));
var CreateEndpointAccessMessage;
(function (CreateEndpointAccessMessage) {
    /**
     * @internal
     */
    CreateEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointAccessMessage = exports.CreateEndpointAccessMessage || (exports.CreateEndpointAccessMessage = {}));
var EndpointAccess;
(function (EndpointAccess) {
    /**
     * @internal
     */
    EndpointAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAccess = exports.EndpointAccess || (exports.EndpointAccess = {}));
var EndpointAlreadyExistsFault;
(function (EndpointAlreadyExistsFault) {
    /**
     * @internal
     */
    EndpointAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAlreadyExistsFault = exports.EndpointAlreadyExistsFault || (exports.EndpointAlreadyExistsFault = {}));
var EndpointsPerAuthorizationLimitExceededFault;
(function (EndpointsPerAuthorizationLimitExceededFault) {
    /**
     * @internal
     */
    EndpointsPerAuthorizationLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointsPerAuthorizationLimitExceededFault = exports.EndpointsPerAuthorizationLimitExceededFault || (exports.EndpointsPerAuthorizationLimitExceededFault = {}));
var EndpointsPerClusterLimitExceededFault;
(function (EndpointsPerClusterLimitExceededFault) {
    /**
     * @internal
     */
    EndpointsPerClusterLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointsPerClusterLimitExceededFault = exports.EndpointsPerClusterLimitExceededFault || (exports.EndpointsPerClusterLimitExceededFault = {}));
var CreateEventSubscriptionMessage;
(function (CreateEventSubscriptionMessage) {
    /**
     * @internal
     */
    CreateEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSubscriptionMessage = exports.CreateEventSubscriptionMessage || (exports.CreateEventSubscriptionMessage = {}));
var EventSubscription;
(function (EventSubscription) {
    /**
     * @internal
     */
    EventSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSubscription = exports.EventSubscription || (exports.EventSubscription = {}));
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
var SourceNotFoundFault;
(function (SourceNotFoundFault) {
    /**
     * @internal
     */
    SourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceNotFoundFault = exports.SourceNotFoundFault || (exports.SourceNotFoundFault = {}));
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
var SubscriptionEventIdNotFoundFault;
(function (SubscriptionEventIdNotFoundFault) {
    /**
     * @internal
     */
    SubscriptionEventIdNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionEventIdNotFoundFault = exports.SubscriptionEventIdNotFoundFault || (exports.SubscriptionEventIdNotFoundFault = {}));
var SubscriptionSeverityNotFoundFault;
(function (SubscriptionSeverityNotFoundFault) {
    /**
     * @internal
     */
    SubscriptionSeverityNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionSeverityNotFoundFault = exports.SubscriptionSeverityNotFoundFault || (exports.SubscriptionSeverityNotFoundFault = {}));
var CreateHsmClientCertificateMessage;
(function (CreateHsmClientCertificateMessage) {
    /**
     * @internal
     */
    CreateHsmClientCertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmClientCertificateMessage = exports.CreateHsmClientCertificateMessage || (exports.CreateHsmClientCertificateMessage = {}));
var HsmClientCertificate;
(function (HsmClientCertificate) {
    /**
     * @internal
     */
    HsmClientCertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmClientCertificate = exports.HsmClientCertificate || (exports.HsmClientCertificate = {}));
var CreateHsmClientCertificateResult;
(function (CreateHsmClientCertificateResult) {
    /**
     * @internal
     */
    CreateHsmClientCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmClientCertificateResult = exports.CreateHsmClientCertificateResult || (exports.CreateHsmClientCertificateResult = {}));
var HsmClientCertificateAlreadyExistsFault;
(function (HsmClientCertificateAlreadyExistsFault) {
    /**
     * @internal
     */
    HsmClientCertificateAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmClientCertificateAlreadyExistsFault = exports.HsmClientCertificateAlreadyExistsFault || (exports.HsmClientCertificateAlreadyExistsFault = {}));
var HsmClientCertificateQuotaExceededFault;
(function (HsmClientCertificateQuotaExceededFault) {
    /**
     * @internal
     */
    HsmClientCertificateQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmClientCertificateQuotaExceededFault = exports.HsmClientCertificateQuotaExceededFault || (exports.HsmClientCertificateQuotaExceededFault = {}));
var CreateHsmConfigurationMessage;
(function (CreateHsmConfigurationMessage) {
    /**
     * @internal
     */
    CreateHsmConfigurationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmConfigurationMessage = exports.CreateHsmConfigurationMessage || (exports.CreateHsmConfigurationMessage = {}));
var HsmConfiguration;
(function (HsmConfiguration) {
    /**
     * @internal
     */
    HsmConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmConfiguration = exports.HsmConfiguration || (exports.HsmConfiguration = {}));
var CreateHsmConfigurationResult;
(function (CreateHsmConfigurationResult) {
    /**
     * @internal
     */
    CreateHsmConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmConfigurationResult = exports.CreateHsmConfigurationResult || (exports.CreateHsmConfigurationResult = {}));
var HsmConfigurationAlreadyExistsFault;
(function (HsmConfigurationAlreadyExistsFault) {
    /**
     * @internal
     */
    HsmConfigurationAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmConfigurationAlreadyExistsFault = exports.HsmConfigurationAlreadyExistsFault || (exports.HsmConfigurationAlreadyExistsFault = {}));
var HsmConfigurationQuotaExceededFault;
(function (HsmConfigurationQuotaExceededFault) {
    /**
     * @internal
     */
    HsmConfigurationQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmConfigurationQuotaExceededFault = exports.HsmConfigurationQuotaExceededFault || (exports.HsmConfigurationQuotaExceededFault = {}));
var PauseClusterMessage;
(function (PauseClusterMessage) {
    /**
     * @internal
     */
    PauseClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PauseClusterMessage = exports.PauseClusterMessage || (exports.PauseClusterMessage = {}));
var ResizeClusterMessage;
(function (ResizeClusterMessage) {
    /**
     * @internal
     */
    ResizeClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResizeClusterMessage = exports.ResizeClusterMessage || (exports.ResizeClusterMessage = {}));
var ResumeClusterMessage;
(function (ResumeClusterMessage) {
    /**
     * @internal
     */
    ResumeClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeClusterMessage = exports.ResumeClusterMessage || (exports.ResumeClusterMessage = {}));
var ScheduledActionType;
(function (ScheduledActionType) {
    /**
     * @internal
     */
    ScheduledActionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionType = exports.ScheduledActionType || (exports.ScheduledActionType = {}));
var CreateScheduledActionMessage;
(function (CreateScheduledActionMessage) {
    /**
     * @internal
     */
    CreateScheduledActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScheduledActionMessage = exports.CreateScheduledActionMessage || (exports.CreateScheduledActionMessage = {}));
var InvalidScheduledActionFault;
(function (InvalidScheduledActionFault) {
    /**
     * @internal
     */
    InvalidScheduledActionFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidScheduledActionFault = exports.InvalidScheduledActionFault || (exports.InvalidScheduledActionFault = {}));
var InvalidScheduleFault;
(function (InvalidScheduleFault) {
    /**
     * @internal
     */
    InvalidScheduleFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidScheduleFault = exports.InvalidScheduleFault || (exports.InvalidScheduleFault = {}));
var ScheduledActionState;
(function (ScheduledActionState) {
    ScheduledActionState["ACTIVE"] = "ACTIVE";
    ScheduledActionState["DISABLED"] = "DISABLED";
})(ScheduledActionState = exports.ScheduledActionState || (exports.ScheduledActionState = {}));
var ScheduledAction;
(function (ScheduledAction) {
    /**
     * @internal
     */
    ScheduledAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledAction = exports.ScheduledAction || (exports.ScheduledAction = {}));
var ScheduledActionAlreadyExistsFault;
(function (ScheduledActionAlreadyExistsFault) {
    /**
     * @internal
     */
    ScheduledActionAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionAlreadyExistsFault = exports.ScheduledActionAlreadyExistsFault || (exports.ScheduledActionAlreadyExistsFault = {}));
var ScheduledActionQuotaExceededFault;
(function (ScheduledActionQuotaExceededFault) {
    /**
     * @internal
     */
    ScheduledActionQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionQuotaExceededFault = exports.ScheduledActionQuotaExceededFault || (exports.ScheduledActionQuotaExceededFault = {}));
var ScheduledActionTypeUnsupportedFault;
(function (ScheduledActionTypeUnsupportedFault) {
    /**
     * @internal
     */
    ScheduledActionTypeUnsupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionTypeUnsupportedFault = exports.ScheduledActionTypeUnsupportedFault || (exports.ScheduledActionTypeUnsupportedFault = {}));
var CreateSnapshotCopyGrantMessage;
(function (CreateSnapshotCopyGrantMessage) {
    /**
     * @internal
     */
    CreateSnapshotCopyGrantMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotCopyGrantMessage = exports.CreateSnapshotCopyGrantMessage || (exports.CreateSnapshotCopyGrantMessage = {}));
var SnapshotCopyGrant;
(function (SnapshotCopyGrant) {
    /**
     * @internal
     */
    SnapshotCopyGrant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyGrant = exports.SnapshotCopyGrant || (exports.SnapshotCopyGrant = {}));
var CreateSnapshotCopyGrantResult;
(function (CreateSnapshotCopyGrantResult) {
    /**
     * @internal
     */
    CreateSnapshotCopyGrantResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotCopyGrantResult = exports.CreateSnapshotCopyGrantResult || (exports.CreateSnapshotCopyGrantResult = {}));
var SnapshotCopyGrantAlreadyExistsFault;
(function (SnapshotCopyGrantAlreadyExistsFault) {
    /**
     * @internal
     */
    SnapshotCopyGrantAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyGrantAlreadyExistsFault = exports.SnapshotCopyGrantAlreadyExistsFault || (exports.SnapshotCopyGrantAlreadyExistsFault = {}));
var SnapshotCopyGrantQuotaExceededFault;
(function (SnapshotCopyGrantQuotaExceededFault) {
    /**
     * @internal
     */
    SnapshotCopyGrantQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyGrantQuotaExceededFault = exports.SnapshotCopyGrantQuotaExceededFault || (exports.SnapshotCopyGrantQuotaExceededFault = {}));
var CreateSnapshotScheduleMessage;
(function (CreateSnapshotScheduleMessage) {
    /**
     * @internal
     */
    CreateSnapshotScheduleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotScheduleMessage = exports.CreateSnapshotScheduleMessage || (exports.CreateSnapshotScheduleMessage = {}));
var ScheduleDefinitionTypeUnsupportedFault;
(function (ScheduleDefinitionTypeUnsupportedFault) {
    /**
     * @internal
     */
    ScheduleDefinitionTypeUnsupportedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleDefinitionTypeUnsupportedFault = exports.ScheduleDefinitionTypeUnsupportedFault || (exports.ScheduleDefinitionTypeUnsupportedFault = {}));
var SnapshotSchedule;
(function (SnapshotSchedule) {
    /**
     * @internal
     */
    SnapshotSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotSchedule = exports.SnapshotSchedule || (exports.SnapshotSchedule = {}));
var SnapshotScheduleAlreadyExistsFault;
(function (SnapshotScheduleAlreadyExistsFault) {
    /**
     * @internal
     */
    SnapshotScheduleAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotScheduleAlreadyExistsFault = exports.SnapshotScheduleAlreadyExistsFault || (exports.SnapshotScheduleAlreadyExistsFault = {}));
var SnapshotScheduleQuotaExceededFault;
(function (SnapshotScheduleQuotaExceededFault) {
    /**
     * @internal
     */
    SnapshotScheduleQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotScheduleQuotaExceededFault = exports.SnapshotScheduleQuotaExceededFault || (exports.SnapshotScheduleQuotaExceededFault = {}));
var CreateTagsMessage;
(function (CreateTagsMessage) {
    /**
     * @internal
     */
    CreateTagsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsMessage = exports.CreateTagsMessage || (exports.CreateTagsMessage = {}));
var ResourceNotFoundFault;
(function (ResourceNotFoundFault) {
    /**
     * @internal
     */
    ResourceNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundFault = exports.ResourceNotFoundFault || (exports.ResourceNotFoundFault = {}));
var UsageLimitBreachAction;
(function (UsageLimitBreachAction) {
    UsageLimitBreachAction["DISABLE"] = "disable";
    UsageLimitBreachAction["EMIT_METRIC"] = "emit-metric";
    UsageLimitBreachAction["LOG"] = "log";
})(UsageLimitBreachAction = exports.UsageLimitBreachAction || (exports.UsageLimitBreachAction = {}));
var UsageLimitFeatureType;
(function (UsageLimitFeatureType) {
    UsageLimitFeatureType["CONCURRENCY_SCALING"] = "concurrency-scaling";
    UsageLimitFeatureType["SPECTRUM"] = "spectrum";
})(UsageLimitFeatureType = exports.UsageLimitFeatureType || (exports.UsageLimitFeatureType = {}));
var UsageLimitLimitType;
(function (UsageLimitLimitType) {
    UsageLimitLimitType["DATA_SCANNED"] = "data-scanned";
    UsageLimitLimitType["TIME"] = "time";
})(UsageLimitLimitType = exports.UsageLimitLimitType || (exports.UsageLimitLimitType = {}));
var UsageLimitPeriod;
(function (UsageLimitPeriod) {
    UsageLimitPeriod["DAILY"] = "daily";
    UsageLimitPeriod["MONTHLY"] = "monthly";
    UsageLimitPeriod["WEEKLY"] = "weekly";
})(UsageLimitPeriod = exports.UsageLimitPeriod || (exports.UsageLimitPeriod = {}));
var CreateUsageLimitMessage;
(function (CreateUsageLimitMessage) {
    /**
     * @internal
     */
    CreateUsageLimitMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUsageLimitMessage = exports.CreateUsageLimitMessage || (exports.CreateUsageLimitMessage = {}));
var InvalidUsageLimitFault;
(function (InvalidUsageLimitFault) {
    /**
     * @internal
     */
    InvalidUsageLimitFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUsageLimitFault = exports.InvalidUsageLimitFault || (exports.InvalidUsageLimitFault = {}));
var UsageLimit;
(function (UsageLimit) {
    /**
     * @internal
     */
    UsageLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageLimit = exports.UsageLimit || (exports.UsageLimit = {}));
var UsageLimitAlreadyExistsFault;
(function (UsageLimitAlreadyExistsFault) {
    /**
     * @internal
     */
    UsageLimitAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageLimitAlreadyExistsFault = exports.UsageLimitAlreadyExistsFault || (exports.UsageLimitAlreadyExistsFault = {}));
var CustomerStorageMessage;
(function (CustomerStorageMessage) {
    /**
     * @internal
     */
    CustomerStorageMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerStorageMessage = exports.CustomerStorageMessage || (exports.CustomerStorageMessage = {}));
var DefaultClusterParameters;
(function (DefaultClusterParameters) {
    /**
     * @internal
     */
    DefaultClusterParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultClusterParameters = exports.DefaultClusterParameters || (exports.DefaultClusterParameters = {}));
var DeleteClusterMessage;
(function (DeleteClusterMessage) {
    /**
     * @internal
     */
    DeleteClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterMessage = exports.DeleteClusterMessage || (exports.DeleteClusterMessage = {}));
var DeleteClusterResult;
(function (DeleteClusterResult) {
    /**
     * @internal
     */
    DeleteClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterResult = exports.DeleteClusterResult || (exports.DeleteClusterResult = {}));
var DeleteClusterParameterGroupMessage;
(function (DeleteClusterParameterGroupMessage) {
    /**
     * @internal
     */
    DeleteClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterParameterGroupMessage = exports.DeleteClusterParameterGroupMessage || (exports.DeleteClusterParameterGroupMessage = {}));
var InvalidClusterParameterGroupStateFault;
(function (InvalidClusterParameterGroupStateFault) {
    /**
     * @internal
     */
    InvalidClusterParameterGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterParameterGroupStateFault = exports.InvalidClusterParameterGroupStateFault || (exports.InvalidClusterParameterGroupStateFault = {}));
var DeleteClusterSecurityGroupMessage;
(function (DeleteClusterSecurityGroupMessage) {
    /**
     * @internal
     */
    DeleteClusterSecurityGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterSecurityGroupMessage = exports.DeleteClusterSecurityGroupMessage || (exports.DeleteClusterSecurityGroupMessage = {}));
var DeleteClusterSnapshotResult;
(function (DeleteClusterSnapshotResult) {
    /**
     * @internal
     */
    DeleteClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterSnapshotResult = exports.DeleteClusterSnapshotResult || (exports.DeleteClusterSnapshotResult = {}));
var DeleteClusterSubnetGroupMessage;
(function (DeleteClusterSubnetGroupMessage) {
    /**
     * @internal
     */
    DeleteClusterSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterSubnetGroupMessage = exports.DeleteClusterSubnetGroupMessage || (exports.DeleteClusterSubnetGroupMessage = {}));
var InvalidClusterSubnetStateFault;
(function (InvalidClusterSubnetStateFault) {
    /**
     * @internal
     */
    InvalidClusterSubnetStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterSubnetStateFault = exports.InvalidClusterSubnetStateFault || (exports.InvalidClusterSubnetStateFault = {}));
var DeleteEndpointAccessMessage;
(function (DeleteEndpointAccessMessage) {
    /**
     * @internal
     */
    DeleteEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointAccessMessage = exports.DeleteEndpointAccessMessage || (exports.DeleteEndpointAccessMessage = {}));
var EndpointNotFoundFault;
(function (EndpointNotFoundFault) {
    /**
     * @internal
     */
    EndpointNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointNotFoundFault = exports.EndpointNotFoundFault || (exports.EndpointNotFoundFault = {}));
var InvalidEndpointStateFault;
(function (InvalidEndpointStateFault) {
    /**
     * @internal
     */
    InvalidEndpointStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEndpointStateFault = exports.InvalidEndpointStateFault || (exports.InvalidEndpointStateFault = {}));
var DeleteEventSubscriptionMessage;
(function (DeleteEventSubscriptionMessage) {
    /**
     * @internal
     */
    DeleteEventSubscriptionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSubscriptionMessage = exports.DeleteEventSubscriptionMessage || (exports.DeleteEventSubscriptionMessage = {}));
var InvalidSubscriptionStateFault;
(function (InvalidSubscriptionStateFault) {
    /**
     * @internal
     */
    InvalidSubscriptionStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubscriptionStateFault = exports.InvalidSubscriptionStateFault || (exports.InvalidSubscriptionStateFault = {}));
var SubscriptionNotFoundFault;
(function (SubscriptionNotFoundFault) {
    /**
     * @internal
     */
    SubscriptionNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionNotFoundFault = exports.SubscriptionNotFoundFault || (exports.SubscriptionNotFoundFault = {}));
var DeleteHsmClientCertificateMessage;
(function (DeleteHsmClientCertificateMessage) {
    /**
     * @internal
     */
    DeleteHsmClientCertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHsmClientCertificateMessage = exports.DeleteHsmClientCertificateMessage || (exports.DeleteHsmClientCertificateMessage = {}));
var InvalidHsmClientCertificateStateFault;
(function (InvalidHsmClientCertificateStateFault) {
    /**
     * @internal
     */
    InvalidHsmClientCertificateStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidHsmClientCertificateStateFault = exports.InvalidHsmClientCertificateStateFault || (exports.InvalidHsmClientCertificateStateFault = {}));
var DeleteHsmConfigurationMessage;
(function (DeleteHsmConfigurationMessage) {
    /**
     * @internal
     */
    DeleteHsmConfigurationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHsmConfigurationMessage = exports.DeleteHsmConfigurationMessage || (exports.DeleteHsmConfigurationMessage = {}));
var InvalidHsmConfigurationStateFault;
(function (InvalidHsmConfigurationStateFault) {
    /**
     * @internal
     */
    InvalidHsmConfigurationStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidHsmConfigurationStateFault = exports.InvalidHsmConfigurationStateFault || (exports.InvalidHsmConfigurationStateFault = {}));
var DeleteScheduledActionMessage;
(function (DeleteScheduledActionMessage) {
    /**
     * @internal
     */
    DeleteScheduledActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduledActionMessage = exports.DeleteScheduledActionMessage || (exports.DeleteScheduledActionMessage = {}));
var ScheduledActionNotFoundFault;
(function (ScheduledActionNotFoundFault) {
    /**
     * @internal
     */
    ScheduledActionNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionNotFoundFault = exports.ScheduledActionNotFoundFault || (exports.ScheduledActionNotFoundFault = {}));
var DeleteSnapshotCopyGrantMessage;
(function (DeleteSnapshotCopyGrantMessage) {
    /**
     * @internal
     */
    DeleteSnapshotCopyGrantMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotCopyGrantMessage = exports.DeleteSnapshotCopyGrantMessage || (exports.DeleteSnapshotCopyGrantMessage = {}));
var InvalidSnapshotCopyGrantStateFault;
(function (InvalidSnapshotCopyGrantStateFault) {
    /**
     * @internal
     */
    InvalidSnapshotCopyGrantStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSnapshotCopyGrantStateFault = exports.InvalidSnapshotCopyGrantStateFault || (exports.InvalidSnapshotCopyGrantStateFault = {}));
var SnapshotCopyGrantNotFoundFault;
(function (SnapshotCopyGrantNotFoundFault) {
    /**
     * @internal
     */
    SnapshotCopyGrantNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyGrantNotFoundFault = exports.SnapshotCopyGrantNotFoundFault || (exports.SnapshotCopyGrantNotFoundFault = {}));
var DeleteSnapshotScheduleMessage;
(function (DeleteSnapshotScheduleMessage) {
    /**
     * @internal
     */
    DeleteSnapshotScheduleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotScheduleMessage = exports.DeleteSnapshotScheduleMessage || (exports.DeleteSnapshotScheduleMessage = {}));
var InvalidClusterSnapshotScheduleStateFault;
(function (InvalidClusterSnapshotScheduleStateFault) {
    /**
     * @internal
     */
    InvalidClusterSnapshotScheduleStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterSnapshotScheduleStateFault = exports.InvalidClusterSnapshotScheduleStateFault || (exports.InvalidClusterSnapshotScheduleStateFault = {}));
var DeleteTagsMessage;
(function (DeleteTagsMessage) {
    /**
     * @internal
     */
    DeleteTagsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsMessage = exports.DeleteTagsMessage || (exports.DeleteTagsMessage = {}));
var DeleteUsageLimitMessage;
(function (DeleteUsageLimitMessage) {
    /**
     * @internal
     */
    DeleteUsageLimitMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUsageLimitMessage = exports.DeleteUsageLimitMessage || (exports.DeleteUsageLimitMessage = {}));
var UsageLimitNotFoundFault;
(function (UsageLimitNotFoundFault) {
    /**
     * @internal
     */
    UsageLimitNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageLimitNotFoundFault = exports.UsageLimitNotFoundFault || (exports.UsageLimitNotFoundFault = {}));
var DescribeAccountAttributesMessage;
(function (DescribeAccountAttributesMessage) {
    /**
     * @internal
     */
    DescribeAccountAttributesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesMessage = exports.DescribeAccountAttributesMessage || (exports.DescribeAccountAttributesMessage = {}));
var DescribeClusterDbRevisionsMessage;
(function (DescribeClusterDbRevisionsMessage) {
    /**
     * @internal
     */
    DescribeClusterDbRevisionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterDbRevisionsMessage = exports.DescribeClusterDbRevisionsMessage || (exports.DescribeClusterDbRevisionsMessage = {}));
var DescribeClusterParameterGroupsMessage;
(function (DescribeClusterParameterGroupsMessage) {
    /**
     * @internal
     */
    DescribeClusterParameterGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterParameterGroupsMessage = exports.DescribeClusterParameterGroupsMessage || (exports.DescribeClusterParameterGroupsMessage = {}));
var DescribeClusterParametersMessage;
(function (DescribeClusterParametersMessage) {
    /**
     * @internal
     */
    DescribeClusterParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterParametersMessage = exports.DescribeClusterParametersMessage || (exports.DescribeClusterParametersMessage = {}));
var DescribeClustersMessage;
(function (DescribeClustersMessage) {
    /**
     * @internal
     */
    DescribeClustersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClustersMessage = exports.DescribeClustersMessage || (exports.DescribeClustersMessage = {}));
var DescribeClusterSecurityGroupsMessage;
(function (DescribeClusterSecurityGroupsMessage) {
    /**
     * @internal
     */
    DescribeClusterSecurityGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterSecurityGroupsMessage = exports.DescribeClusterSecurityGroupsMessage || (exports.DescribeClusterSecurityGroupsMessage = {}));
var SnapshotAttributeToSortBy;
(function (SnapshotAttributeToSortBy) {
    SnapshotAttributeToSortBy["CREATE_TIME"] = "CREATE_TIME";
    SnapshotAttributeToSortBy["SOURCE_TYPE"] = "SOURCE_TYPE";
    SnapshotAttributeToSortBy["TOTAL_SIZE"] = "TOTAL_SIZE";
})(SnapshotAttributeToSortBy = exports.SnapshotAttributeToSortBy || (exports.SnapshotAttributeToSortBy = {}));
var SortByOrder;
(function (SortByOrder) {
    SortByOrder["ASCENDING"] = "ASC";
    SortByOrder["DESCENDING"] = "DESC";
})(SortByOrder = exports.SortByOrder || (exports.SortByOrder = {}));
var SnapshotSortingEntity;
(function (SnapshotSortingEntity) {
    /**
     * @internal
     */
    SnapshotSortingEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotSortingEntity = exports.SnapshotSortingEntity || (exports.SnapshotSortingEntity = {}));
var DescribeClusterSnapshotsMessage;
(function (DescribeClusterSnapshotsMessage) {
    /**
     * @internal
     */
    DescribeClusterSnapshotsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterSnapshotsMessage = exports.DescribeClusterSnapshotsMessage || (exports.DescribeClusterSnapshotsMessage = {}));
var SnapshotMessage;
(function (SnapshotMessage) {
    /**
     * @internal
     */
    SnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotMessage = exports.SnapshotMessage || (exports.SnapshotMessage = {}));
var DescribeClusterSubnetGroupsMessage;
(function (DescribeClusterSubnetGroupsMessage) {
    /**
     * @internal
     */
    DescribeClusterSubnetGroupsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterSubnetGroupsMessage = exports.DescribeClusterSubnetGroupsMessage || (exports.DescribeClusterSubnetGroupsMessage = {}));
var DescribeClusterTracksMessage;
(function (DescribeClusterTracksMessage) {
    /**
     * @internal
     */
    DescribeClusterTracksMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterTracksMessage = exports.DescribeClusterTracksMessage || (exports.DescribeClusterTracksMessage = {}));
var SupportedOperation;
(function (SupportedOperation) {
    /**
     * @internal
     */
    SupportedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SupportedOperation = exports.SupportedOperation || (exports.SupportedOperation = {}));
var UpdateTarget;
(function (UpdateTarget) {
    /**
     * @internal
     */
    UpdateTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTarget = exports.UpdateTarget || (exports.UpdateTarget = {}));
var MaintenanceTrack;
(function (MaintenanceTrack) {
    /**
     * @internal
     */
    MaintenanceTrack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceTrack = exports.MaintenanceTrack || (exports.MaintenanceTrack = {}));
var TrackListMessage;
(function (TrackListMessage) {
    /**
     * @internal
     */
    TrackListMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrackListMessage = exports.TrackListMessage || (exports.TrackListMessage = {}));
var DescribeClusterVersionsMessage;
(function (DescribeClusterVersionsMessage) {
    /**
     * @internal
     */
    DescribeClusterVersionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterVersionsMessage = exports.DescribeClusterVersionsMessage || (exports.DescribeClusterVersionsMessage = {}));
var DescribeDefaultClusterParametersMessage;
(function (DescribeDefaultClusterParametersMessage) {
    /**
     * @internal
     */
    DescribeDefaultClusterParametersMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultClusterParametersMessage = exports.DescribeDefaultClusterParametersMessage || (exports.DescribeDefaultClusterParametersMessage = {}));
var DescribeDefaultClusterParametersResult;
(function (DescribeDefaultClusterParametersResult) {
    /**
     * @internal
     */
    DescribeDefaultClusterParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultClusterParametersResult = exports.DescribeDefaultClusterParametersResult || (exports.DescribeDefaultClusterParametersResult = {}));
var DescribeEndpointAccessMessage;
(function (DescribeEndpointAccessMessage) {
    /**
     * @internal
     */
    DescribeEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointAccessMessage = exports.DescribeEndpointAccessMessage || (exports.DescribeEndpointAccessMessage = {}));
var EndpointAccessList;
(function (EndpointAccessList) {
    /**
     * @internal
     */
    EndpointAccessList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAccessList = exports.EndpointAccessList || (exports.EndpointAccessList = {}));
var DescribeEndpointAuthorizationMessage;
(function (DescribeEndpointAuthorizationMessage) {
    /**
     * @internal
     */
    DescribeEndpointAuthorizationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointAuthorizationMessage = exports.DescribeEndpointAuthorizationMessage || (exports.DescribeEndpointAuthorizationMessage = {}));
var EndpointAuthorizationList;
(function (EndpointAuthorizationList) {
    /**
     * @internal
     */
    EndpointAuthorizationList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAuthorizationList = exports.EndpointAuthorizationList || (exports.EndpointAuthorizationList = {}));
var DescribeEventCategoriesMessage;
(function (DescribeEventCategoriesMessage) {
    /**
     * @internal
     */
    DescribeEventCategoriesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventCategoriesMessage = exports.DescribeEventCategoriesMessage || (exports.DescribeEventCategoriesMessage = {}));
var EventInfoMap;
(function (EventInfoMap) {
    /**
     * @internal
     */
    EventInfoMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventInfoMap = exports.EventInfoMap || (exports.EventInfoMap = {}));
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
var DescribeHsmClientCertificatesMessage;
(function (DescribeHsmClientCertificatesMessage) {
    /**
     * @internal
     */
    DescribeHsmClientCertificatesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHsmClientCertificatesMessage = exports.DescribeHsmClientCertificatesMessage || (exports.DescribeHsmClientCertificatesMessage = {}));
var HsmClientCertificateMessage;
(function (HsmClientCertificateMessage) {
    /**
     * @internal
     */
    HsmClientCertificateMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmClientCertificateMessage = exports.HsmClientCertificateMessage || (exports.HsmClientCertificateMessage = {}));
var DescribeHsmConfigurationsMessage;
(function (DescribeHsmConfigurationsMessage) {
    /**
     * @internal
     */
    DescribeHsmConfigurationsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHsmConfigurationsMessage = exports.DescribeHsmConfigurationsMessage || (exports.DescribeHsmConfigurationsMessage = {}));
var HsmConfigurationMessage;
(function (HsmConfigurationMessage) {
    /**
     * @internal
     */
    HsmConfigurationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HsmConfigurationMessage = exports.HsmConfigurationMessage || (exports.HsmConfigurationMessage = {}));
var DescribeLoggingStatusMessage;
(function (DescribeLoggingStatusMessage) {
    /**
     * @internal
     */
    DescribeLoggingStatusMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingStatusMessage = exports.DescribeLoggingStatusMessage || (exports.DescribeLoggingStatusMessage = {}));
var LoggingStatus;
(function (LoggingStatus) {
    /**
     * @internal
     */
    LoggingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingStatus = exports.LoggingStatus || (exports.LoggingStatus = {}));
var NodeConfigurationOptionsFilterName;
(function (NodeConfigurationOptionsFilterName) {
    NodeConfigurationOptionsFilterName["ESTIMATED_DISK_UTILIZATION_PERCENT"] = "EstimatedDiskUtilizationPercent";
    NodeConfigurationOptionsFilterName["MODE"] = "Mode";
    NodeConfigurationOptionsFilterName["NODE_TYPE"] = "NodeType";
    NodeConfigurationOptionsFilterName["NUM_NODES"] = "NumberOfNodes";
})(NodeConfigurationOptionsFilterName = exports.NodeConfigurationOptionsFilterName || (exports.NodeConfigurationOptionsFilterName = {}));
var OperatorType;
(function (OperatorType) {
    OperatorType["BETWEEN"] = "between";
    OperatorType["EQ"] = "eq";
    OperatorType["GE"] = "ge";
    OperatorType["GT"] = "gt";
    OperatorType["IN"] = "in";
    OperatorType["LE"] = "le";
    OperatorType["LT"] = "lt";
})(OperatorType = exports.OperatorType || (exports.OperatorType = {}));
var NodeConfigurationOptionsFilter;
(function (NodeConfigurationOptionsFilter) {
    /**
     * @internal
     */
    NodeConfigurationOptionsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeConfigurationOptionsFilter = exports.NodeConfigurationOptionsFilter || (exports.NodeConfigurationOptionsFilter = {}));
var DescribeNodeConfigurationOptionsMessage;
(function (DescribeNodeConfigurationOptionsMessage) {
    /**
     * @internal
     */
    DescribeNodeConfigurationOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNodeConfigurationOptionsMessage = exports.DescribeNodeConfigurationOptionsMessage || (exports.DescribeNodeConfigurationOptionsMessage = {}));
var Mode;
(function (Mode) {
    Mode["HIGH_PERFORMANCE"] = "high-performance";
    Mode["STANDARD"] = "standard";
})(Mode = exports.Mode || (exports.Mode = {}));
var NodeConfigurationOption;
(function (NodeConfigurationOption) {
    /**
     * @internal
     */
    NodeConfigurationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeConfigurationOption = exports.NodeConfigurationOption || (exports.NodeConfigurationOption = {}));
var NodeConfigurationOptionsMessage;
(function (NodeConfigurationOptionsMessage) {
    /**
     * @internal
     */
    NodeConfigurationOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeConfigurationOptionsMessage = exports.NodeConfigurationOptionsMessage || (exports.NodeConfigurationOptionsMessage = {}));
var DescribeOrderableClusterOptionsMessage;
(function (DescribeOrderableClusterOptionsMessage) {
    /**
     * @internal
     */
    DescribeOrderableClusterOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrderableClusterOptionsMessage = exports.DescribeOrderableClusterOptionsMessage || (exports.DescribeOrderableClusterOptionsMessage = {}));
var OrderableClusterOption;
(function (OrderableClusterOption) {
    /**
     * @internal
     */
    OrderableClusterOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrderableClusterOption = exports.OrderableClusterOption || (exports.OrderableClusterOption = {}));
var OrderableClusterOptionsMessage;
(function (OrderableClusterOptionsMessage) {
    /**
     * @internal
     */
    OrderableClusterOptionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrderableClusterOptionsMessage = exports.OrderableClusterOptionsMessage || (exports.OrderableClusterOptionsMessage = {}));
var DescribePartnersInputMessage;
(function (DescribePartnersInputMessage) {
    /**
     * @internal
     */
    DescribePartnersInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePartnersInputMessage = exports.DescribePartnersInputMessage || (exports.DescribePartnersInputMessage = {}));
var PartnerIntegrationStatus;
(function (PartnerIntegrationStatus) {
    PartnerIntegrationStatus["Active"] = "Active";
    PartnerIntegrationStatus["ConnectionFailure"] = "ConnectionFailure";
    PartnerIntegrationStatus["Inactive"] = "Inactive";
    PartnerIntegrationStatus["RuntimeFailure"] = "RuntimeFailure";
})(PartnerIntegrationStatus = exports.PartnerIntegrationStatus || (exports.PartnerIntegrationStatus = {}));
var PartnerIntegrationInfo;
(function (PartnerIntegrationInfo) {
    /**
     * @internal
     */
    PartnerIntegrationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerIntegrationInfo = exports.PartnerIntegrationInfo || (exports.PartnerIntegrationInfo = {}));
var DescribePartnersOutputMessage;
(function (DescribePartnersOutputMessage) {
    /**
     * @internal
     */
    DescribePartnersOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePartnersOutputMessage = exports.DescribePartnersOutputMessage || (exports.DescribePartnersOutputMessage = {}));
var DescribeReservedNodeOfferingsMessage;
(function (DescribeReservedNodeOfferingsMessage) {
    /**
     * @internal
     */
    DescribeReservedNodeOfferingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedNodeOfferingsMessage = exports.DescribeReservedNodeOfferingsMessage || (exports.DescribeReservedNodeOfferingsMessage = {}));
var ReservedNodeOffering;
(function (ReservedNodeOffering) {
    /**
     * @internal
     */
    ReservedNodeOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeOffering = exports.ReservedNodeOffering || (exports.ReservedNodeOffering = {}));
var ReservedNodeOfferingsMessage;
(function (ReservedNodeOfferingsMessage) {
    /**
     * @internal
     */
    ReservedNodeOfferingsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeOfferingsMessage = exports.ReservedNodeOfferingsMessage || (exports.ReservedNodeOfferingsMessage = {}));
var DescribeReservedNodesMessage;
(function (DescribeReservedNodesMessage) {
    /**
     * @internal
     */
    DescribeReservedNodesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedNodesMessage = exports.DescribeReservedNodesMessage || (exports.DescribeReservedNodesMessage = {}));
var ReservedNodesMessage;
(function (ReservedNodesMessage) {
    /**
     * @internal
     */
    ReservedNodesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodesMessage = exports.ReservedNodesMessage || (exports.ReservedNodesMessage = {}));
var DescribeResizeMessage;
(function (DescribeResizeMessage) {
    /**
     * @internal
     */
    DescribeResizeMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResizeMessage = exports.DescribeResizeMessage || (exports.DescribeResizeMessage = {}));
var ScheduledActionFilterName;
(function (ScheduledActionFilterName) {
    ScheduledActionFilterName["CLUSTER_IDENTIFIER"] = "cluster-identifier";
    ScheduledActionFilterName["IAM_ROLE"] = "iam-role";
})(ScheduledActionFilterName = exports.ScheduledActionFilterName || (exports.ScheduledActionFilterName = {}));
var ScheduledActionFilter;
(function (ScheduledActionFilter) {
    /**
     * @internal
     */
    ScheduledActionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionFilter = exports.ScheduledActionFilter || (exports.ScheduledActionFilter = {}));
var ScheduledActionTypeValues;
(function (ScheduledActionTypeValues) {
    ScheduledActionTypeValues["PAUSE_CLUSTER"] = "PauseCluster";
    ScheduledActionTypeValues["RESIZE_CLUSTER"] = "ResizeCluster";
    ScheduledActionTypeValues["RESUME_CLUSTER"] = "ResumeCluster";
})(ScheduledActionTypeValues = exports.ScheduledActionTypeValues || (exports.ScheduledActionTypeValues = {}));
var DescribeScheduledActionsMessage;
(function (DescribeScheduledActionsMessage) {
    /**
     * @internal
     */
    DescribeScheduledActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledActionsMessage = exports.DescribeScheduledActionsMessage || (exports.DescribeScheduledActionsMessage = {}));
var ScheduledActionsMessage;
(function (ScheduledActionsMessage) {
    /**
     * @internal
     */
    ScheduledActionsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledActionsMessage = exports.ScheduledActionsMessage || (exports.ScheduledActionsMessage = {}));
var DescribeSnapshotCopyGrantsMessage;
(function (DescribeSnapshotCopyGrantsMessage) {
    /**
     * @internal
     */
    DescribeSnapshotCopyGrantsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotCopyGrantsMessage = exports.DescribeSnapshotCopyGrantsMessage || (exports.DescribeSnapshotCopyGrantsMessage = {}));
//# sourceMappingURL=models_0.js.map