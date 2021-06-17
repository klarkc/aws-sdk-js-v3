"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyClusterSubnetGroupResult = exports.ModifyClusterSubnetGroupMessage = exports.ModifyClusterSnapshotScheduleMessage = exports.ModifyClusterSnapshotResult = exports.ModifyClusterSnapshotMessage = exports.ModifyClusterParameterGroupMessage = exports.ModifyClusterMaintenanceResult = exports.ModifyClusterMaintenanceMessage = exports.ModifyClusterIamRolesResult = exports.ModifyClusterIamRolesMessage = exports.ModifyClusterDbRevisionResult = exports.ModifyClusterDbRevisionMessage = exports.UnsupportedOptionFault = exports.TableLimitExceededFault = exports.ModifyClusterResult = exports.ModifyClusterMessage = exports.ModifyAquaOutputMessage = exports.ModifyAquaInputMessage = exports.InvalidTableRestoreArgumentFault = exports.InvalidRestoreFault = exports.InProgressTableRestoreQuotaExceededFault = exports.GetReservedNodeExchangeOfferingsOutputMessage = exports.GetReservedNodeExchangeOfferingsInputMessage = exports.GetClusterCredentialsMessage = exports.EndpointAuthorizationNotFoundFault = exports.UnknownSnapshotCopyRegionFault = exports.SnapshotCopyAlreadyEnabledFault = exports.IncompatibleOrderableOptions = exports.EnableSnapshotCopyResult = exports.EnableSnapshotCopyMessage = exports.InvalidS3KeyPrefixFault = exports.InvalidS3BucketNameFault = exports.InsufficientS3BucketPolicyFault = exports.EnableLoggingMessage = exports.SnapshotCopyAlreadyDisabledFault = exports.DisableSnapshotCopyResult = exports.DisableSnapshotCopyMessage = exports.DisableLoggingMessage = exports.UsageLimitList = exports.DescribeUsageLimitsMessage = exports.TaggedResourceListMessage = exports.TaggedResource = exports.DescribeTagsMessage = exports.TableRestoreStatusMessage = exports.TableRestoreStatus = exports.TableRestoreNotFoundFault = exports.DescribeTableRestoreStatusMessage = exports.DescribeSnapshotSchedulesOutputMessage = exports.DescribeSnapshotSchedulesMessage = exports.SnapshotCopyGrantMessage = void 0;
exports.UpdatePartnerStatusInputMessage = exports.RotateEncryptionKeyResult = exports.RotateEncryptionKeyMessage = exports.RevokeSnapshotAccessResult = exports.RevokeSnapshotAccessMessage = exports.RevokeEndpointAccessMessage = exports.RevokeClusterSecurityGroupIngressResult = exports.RevokeClusterSecurityGroupIngressMessage = exports.ResumeClusterResult = exports.RestoreTableFromClusterSnapshotResult = exports.RestoreTableFromClusterSnapshotMessage = exports.RestoreFromClusterSnapshotResult = exports.RestoreFromClusterSnapshotMessage = exports.ResizeClusterResult = exports.ResetClusterParameterGroupMessage = exports.RebootClusterResult = exports.RebootClusterMessage = exports.ReservedNodeQuotaExceededFault = exports.PurchaseReservedNodeOfferingResult = exports.PurchaseReservedNodeOfferingMessage = exports.PauseClusterResult = exports.ModifyUsageLimitMessage = exports.SnapshotScheduleUpdateInProgressFault = exports.ModifySnapshotScheduleMessage = exports.SnapshotCopyDisabledFault = exports.ModifySnapshotCopyRetentionPeriodResult = exports.ModifySnapshotCopyRetentionPeriodMessage = exports.ModifyScheduledActionMessage = exports.ModifyEventSubscriptionResult = exports.ModifyEventSubscriptionMessage = exports.ModifyEndpointAccessMessage = exports.SubnetAlreadyInUse = void 0;
var SnapshotCopyGrantMessage;
(function (SnapshotCopyGrantMessage) {
    /**
     * @internal
     */
    SnapshotCopyGrantMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyGrantMessage = exports.SnapshotCopyGrantMessage || (exports.SnapshotCopyGrantMessage = {}));
var DescribeSnapshotSchedulesMessage;
(function (DescribeSnapshotSchedulesMessage) {
    /**
     * @internal
     */
    DescribeSnapshotSchedulesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotSchedulesMessage = exports.DescribeSnapshotSchedulesMessage || (exports.DescribeSnapshotSchedulesMessage = {}));
var DescribeSnapshotSchedulesOutputMessage;
(function (DescribeSnapshotSchedulesOutputMessage) {
    /**
     * @internal
     */
    DescribeSnapshotSchedulesOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotSchedulesOutputMessage = exports.DescribeSnapshotSchedulesOutputMessage || (exports.DescribeSnapshotSchedulesOutputMessage = {}));
var DescribeTableRestoreStatusMessage;
(function (DescribeTableRestoreStatusMessage) {
    /**
     * @internal
     */
    DescribeTableRestoreStatusMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableRestoreStatusMessage = exports.DescribeTableRestoreStatusMessage || (exports.DescribeTableRestoreStatusMessage = {}));
var TableRestoreNotFoundFault;
(function (TableRestoreNotFoundFault) {
    /**
     * @internal
     */
    TableRestoreNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableRestoreNotFoundFault = exports.TableRestoreNotFoundFault || (exports.TableRestoreNotFoundFault = {}));
var TableRestoreStatus;
(function (TableRestoreStatus) {
    /**
     * @internal
     */
    TableRestoreStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableRestoreStatus = exports.TableRestoreStatus || (exports.TableRestoreStatus = {}));
var TableRestoreStatusMessage;
(function (TableRestoreStatusMessage) {
    /**
     * @internal
     */
    TableRestoreStatusMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableRestoreStatusMessage = exports.TableRestoreStatusMessage || (exports.TableRestoreStatusMessage = {}));
var DescribeTagsMessage;
(function (DescribeTagsMessage) {
    /**
     * @internal
     */
    DescribeTagsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsMessage = exports.DescribeTagsMessage || (exports.DescribeTagsMessage = {}));
var TaggedResource;
(function (TaggedResource) {
    /**
     * @internal
     */
    TaggedResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaggedResource = exports.TaggedResource || (exports.TaggedResource = {}));
var TaggedResourceListMessage;
(function (TaggedResourceListMessage) {
    /**
     * @internal
     */
    TaggedResourceListMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaggedResourceListMessage = exports.TaggedResourceListMessage || (exports.TaggedResourceListMessage = {}));
var DescribeUsageLimitsMessage;
(function (DescribeUsageLimitsMessage) {
    /**
     * @internal
     */
    DescribeUsageLimitsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUsageLimitsMessage = exports.DescribeUsageLimitsMessage || (exports.DescribeUsageLimitsMessage = {}));
var UsageLimitList;
(function (UsageLimitList) {
    /**
     * @internal
     */
    UsageLimitList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageLimitList = exports.UsageLimitList || (exports.UsageLimitList = {}));
var DisableLoggingMessage;
(function (DisableLoggingMessage) {
    /**
     * @internal
     */
    DisableLoggingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableLoggingMessage = exports.DisableLoggingMessage || (exports.DisableLoggingMessage = {}));
var DisableSnapshotCopyMessage;
(function (DisableSnapshotCopyMessage) {
    /**
     * @internal
     */
    DisableSnapshotCopyMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSnapshotCopyMessage = exports.DisableSnapshotCopyMessage || (exports.DisableSnapshotCopyMessage = {}));
var DisableSnapshotCopyResult;
(function (DisableSnapshotCopyResult) {
    /**
     * @internal
     */
    DisableSnapshotCopyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSnapshotCopyResult = exports.DisableSnapshotCopyResult || (exports.DisableSnapshotCopyResult = {}));
var SnapshotCopyAlreadyDisabledFault;
(function (SnapshotCopyAlreadyDisabledFault) {
    /**
     * @internal
     */
    SnapshotCopyAlreadyDisabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyAlreadyDisabledFault = exports.SnapshotCopyAlreadyDisabledFault || (exports.SnapshotCopyAlreadyDisabledFault = {}));
var EnableLoggingMessage;
(function (EnableLoggingMessage) {
    /**
     * @internal
     */
    EnableLoggingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableLoggingMessage = exports.EnableLoggingMessage || (exports.EnableLoggingMessage = {}));
var InsufficientS3BucketPolicyFault;
(function (InsufficientS3BucketPolicyFault) {
    /**
     * @internal
     */
    InsufficientS3BucketPolicyFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientS3BucketPolicyFault = exports.InsufficientS3BucketPolicyFault || (exports.InsufficientS3BucketPolicyFault = {}));
var InvalidS3BucketNameFault;
(function (InvalidS3BucketNameFault) {
    /**
     * @internal
     */
    InvalidS3BucketNameFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3BucketNameFault = exports.InvalidS3BucketNameFault || (exports.InvalidS3BucketNameFault = {}));
var InvalidS3KeyPrefixFault;
(function (InvalidS3KeyPrefixFault) {
    /**
     * @internal
     */
    InvalidS3KeyPrefixFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3KeyPrefixFault = exports.InvalidS3KeyPrefixFault || (exports.InvalidS3KeyPrefixFault = {}));
var EnableSnapshotCopyMessage;
(function (EnableSnapshotCopyMessage) {
    /**
     * @internal
     */
    EnableSnapshotCopyMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSnapshotCopyMessage = exports.EnableSnapshotCopyMessage || (exports.EnableSnapshotCopyMessage = {}));
var EnableSnapshotCopyResult;
(function (EnableSnapshotCopyResult) {
    /**
     * @internal
     */
    EnableSnapshotCopyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSnapshotCopyResult = exports.EnableSnapshotCopyResult || (exports.EnableSnapshotCopyResult = {}));
var IncompatibleOrderableOptions;
(function (IncompatibleOrderableOptions) {
    /**
     * @internal
     */
    IncompatibleOrderableOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibleOrderableOptions = exports.IncompatibleOrderableOptions || (exports.IncompatibleOrderableOptions = {}));
var SnapshotCopyAlreadyEnabledFault;
(function (SnapshotCopyAlreadyEnabledFault) {
    /**
     * @internal
     */
    SnapshotCopyAlreadyEnabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyAlreadyEnabledFault = exports.SnapshotCopyAlreadyEnabledFault || (exports.SnapshotCopyAlreadyEnabledFault = {}));
var UnknownSnapshotCopyRegionFault;
(function (UnknownSnapshotCopyRegionFault) {
    /**
     * @internal
     */
    UnknownSnapshotCopyRegionFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownSnapshotCopyRegionFault = exports.UnknownSnapshotCopyRegionFault || (exports.UnknownSnapshotCopyRegionFault = {}));
var EndpointAuthorizationNotFoundFault;
(function (EndpointAuthorizationNotFoundFault) {
    /**
     * @internal
     */
    EndpointAuthorizationNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAuthorizationNotFoundFault = exports.EndpointAuthorizationNotFoundFault || (exports.EndpointAuthorizationNotFoundFault = {}));
var GetClusterCredentialsMessage;
(function (GetClusterCredentialsMessage) {
    /**
     * @internal
     */
    GetClusterCredentialsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClusterCredentialsMessage = exports.GetClusterCredentialsMessage || (exports.GetClusterCredentialsMessage = {}));
var GetReservedNodeExchangeOfferingsInputMessage;
(function (GetReservedNodeExchangeOfferingsInputMessage) {
    /**
     * @internal
     */
    GetReservedNodeExchangeOfferingsInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservedNodeExchangeOfferingsInputMessage = exports.GetReservedNodeExchangeOfferingsInputMessage || (exports.GetReservedNodeExchangeOfferingsInputMessage = {}));
var GetReservedNodeExchangeOfferingsOutputMessage;
(function (GetReservedNodeExchangeOfferingsOutputMessage) {
    /**
     * @internal
     */
    GetReservedNodeExchangeOfferingsOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservedNodeExchangeOfferingsOutputMessage = exports.GetReservedNodeExchangeOfferingsOutputMessage || (exports.GetReservedNodeExchangeOfferingsOutputMessage = {}));
var InProgressTableRestoreQuotaExceededFault;
(function (InProgressTableRestoreQuotaExceededFault) {
    /**
     * @internal
     */
    InProgressTableRestoreQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InProgressTableRestoreQuotaExceededFault = exports.InProgressTableRestoreQuotaExceededFault || (exports.InProgressTableRestoreQuotaExceededFault = {}));
var InvalidRestoreFault;
(function (InvalidRestoreFault) {
    /**
     * @internal
     */
    InvalidRestoreFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRestoreFault = exports.InvalidRestoreFault || (exports.InvalidRestoreFault = {}));
var InvalidTableRestoreArgumentFault;
(function (InvalidTableRestoreArgumentFault) {
    /**
     * @internal
     */
    InvalidTableRestoreArgumentFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTableRestoreArgumentFault = exports.InvalidTableRestoreArgumentFault || (exports.InvalidTableRestoreArgumentFault = {}));
var ModifyAquaInputMessage;
(function (ModifyAquaInputMessage) {
    /**
     * @internal
     */
    ModifyAquaInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAquaInputMessage = exports.ModifyAquaInputMessage || (exports.ModifyAquaInputMessage = {}));
var ModifyAquaOutputMessage;
(function (ModifyAquaOutputMessage) {
    /**
     * @internal
     */
    ModifyAquaOutputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAquaOutputMessage = exports.ModifyAquaOutputMessage || (exports.ModifyAquaOutputMessage = {}));
var ModifyClusterMessage;
(function (ModifyClusterMessage) {
    /**
     * @internal
     */
    ModifyClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterMessage = exports.ModifyClusterMessage || (exports.ModifyClusterMessage = {}));
var ModifyClusterResult;
(function (ModifyClusterResult) {
    /**
     * @internal
     */
    ModifyClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterResult = exports.ModifyClusterResult || (exports.ModifyClusterResult = {}));
var TableLimitExceededFault;
(function (TableLimitExceededFault) {
    /**
     * @internal
     */
    TableLimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableLimitExceededFault = exports.TableLimitExceededFault || (exports.TableLimitExceededFault = {}));
var UnsupportedOptionFault;
(function (UnsupportedOptionFault) {
    /**
     * @internal
     */
    UnsupportedOptionFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOptionFault = exports.UnsupportedOptionFault || (exports.UnsupportedOptionFault = {}));
var ModifyClusterDbRevisionMessage;
(function (ModifyClusterDbRevisionMessage) {
    /**
     * @internal
     */
    ModifyClusterDbRevisionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterDbRevisionMessage = exports.ModifyClusterDbRevisionMessage || (exports.ModifyClusterDbRevisionMessage = {}));
var ModifyClusterDbRevisionResult;
(function (ModifyClusterDbRevisionResult) {
    /**
     * @internal
     */
    ModifyClusterDbRevisionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterDbRevisionResult = exports.ModifyClusterDbRevisionResult || (exports.ModifyClusterDbRevisionResult = {}));
var ModifyClusterIamRolesMessage;
(function (ModifyClusterIamRolesMessage) {
    /**
     * @internal
     */
    ModifyClusterIamRolesMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterIamRolesMessage = exports.ModifyClusterIamRolesMessage || (exports.ModifyClusterIamRolesMessage = {}));
var ModifyClusterIamRolesResult;
(function (ModifyClusterIamRolesResult) {
    /**
     * @internal
     */
    ModifyClusterIamRolesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterIamRolesResult = exports.ModifyClusterIamRolesResult || (exports.ModifyClusterIamRolesResult = {}));
var ModifyClusterMaintenanceMessage;
(function (ModifyClusterMaintenanceMessage) {
    /**
     * @internal
     */
    ModifyClusterMaintenanceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterMaintenanceMessage = exports.ModifyClusterMaintenanceMessage || (exports.ModifyClusterMaintenanceMessage = {}));
var ModifyClusterMaintenanceResult;
(function (ModifyClusterMaintenanceResult) {
    /**
     * @internal
     */
    ModifyClusterMaintenanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterMaintenanceResult = exports.ModifyClusterMaintenanceResult || (exports.ModifyClusterMaintenanceResult = {}));
var ModifyClusterParameterGroupMessage;
(function (ModifyClusterParameterGroupMessage) {
    /**
     * @internal
     */
    ModifyClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterParameterGroupMessage = exports.ModifyClusterParameterGroupMessage || (exports.ModifyClusterParameterGroupMessage = {}));
var ModifyClusterSnapshotMessage;
(function (ModifyClusterSnapshotMessage) {
    /**
     * @internal
     */
    ModifyClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterSnapshotMessage = exports.ModifyClusterSnapshotMessage || (exports.ModifyClusterSnapshotMessage = {}));
var ModifyClusterSnapshotResult;
(function (ModifyClusterSnapshotResult) {
    /**
     * @internal
     */
    ModifyClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterSnapshotResult = exports.ModifyClusterSnapshotResult || (exports.ModifyClusterSnapshotResult = {}));
var ModifyClusterSnapshotScheduleMessage;
(function (ModifyClusterSnapshotScheduleMessage) {
    /**
     * @internal
     */
    ModifyClusterSnapshotScheduleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterSnapshotScheduleMessage = exports.ModifyClusterSnapshotScheduleMessage || (exports.ModifyClusterSnapshotScheduleMessage = {}));
var ModifyClusterSubnetGroupMessage;
(function (ModifyClusterSubnetGroupMessage) {
    /**
     * @internal
     */
    ModifyClusterSubnetGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterSubnetGroupMessage = exports.ModifyClusterSubnetGroupMessage || (exports.ModifyClusterSubnetGroupMessage = {}));
var ModifyClusterSubnetGroupResult;
(function (ModifyClusterSubnetGroupResult) {
    /**
     * @internal
     */
    ModifyClusterSubnetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClusterSubnetGroupResult = exports.ModifyClusterSubnetGroupResult || (exports.ModifyClusterSubnetGroupResult = {}));
var SubnetAlreadyInUse;
(function (SubnetAlreadyInUse) {
    /**
     * @internal
     */
    SubnetAlreadyInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetAlreadyInUse = exports.SubnetAlreadyInUse || (exports.SubnetAlreadyInUse = {}));
var ModifyEndpointAccessMessage;
(function (ModifyEndpointAccessMessage) {
    /**
     * @internal
     */
    ModifyEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEndpointAccessMessage = exports.ModifyEndpointAccessMessage || (exports.ModifyEndpointAccessMessage = {}));
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
var ModifyScheduledActionMessage;
(function (ModifyScheduledActionMessage) {
    /**
     * @internal
     */
    ModifyScheduledActionMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyScheduledActionMessage = exports.ModifyScheduledActionMessage || (exports.ModifyScheduledActionMessage = {}));
var ModifySnapshotCopyRetentionPeriodMessage;
(function (ModifySnapshotCopyRetentionPeriodMessage) {
    /**
     * @internal
     */
    ModifySnapshotCopyRetentionPeriodMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySnapshotCopyRetentionPeriodMessage = exports.ModifySnapshotCopyRetentionPeriodMessage || (exports.ModifySnapshotCopyRetentionPeriodMessage = {}));
var ModifySnapshotCopyRetentionPeriodResult;
(function (ModifySnapshotCopyRetentionPeriodResult) {
    /**
     * @internal
     */
    ModifySnapshotCopyRetentionPeriodResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySnapshotCopyRetentionPeriodResult = exports.ModifySnapshotCopyRetentionPeriodResult || (exports.ModifySnapshotCopyRetentionPeriodResult = {}));
var SnapshotCopyDisabledFault;
(function (SnapshotCopyDisabledFault) {
    /**
     * @internal
     */
    SnapshotCopyDisabledFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotCopyDisabledFault = exports.SnapshotCopyDisabledFault || (exports.SnapshotCopyDisabledFault = {}));
var ModifySnapshotScheduleMessage;
(function (ModifySnapshotScheduleMessage) {
    /**
     * @internal
     */
    ModifySnapshotScheduleMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySnapshotScheduleMessage = exports.ModifySnapshotScheduleMessage || (exports.ModifySnapshotScheduleMessage = {}));
var SnapshotScheduleUpdateInProgressFault;
(function (SnapshotScheduleUpdateInProgressFault) {
    /**
     * @internal
     */
    SnapshotScheduleUpdateInProgressFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotScheduleUpdateInProgressFault = exports.SnapshotScheduleUpdateInProgressFault || (exports.SnapshotScheduleUpdateInProgressFault = {}));
var ModifyUsageLimitMessage;
(function (ModifyUsageLimitMessage) {
    /**
     * @internal
     */
    ModifyUsageLimitMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyUsageLimitMessage = exports.ModifyUsageLimitMessage || (exports.ModifyUsageLimitMessage = {}));
var PauseClusterResult;
(function (PauseClusterResult) {
    /**
     * @internal
     */
    PauseClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PauseClusterResult = exports.PauseClusterResult || (exports.PauseClusterResult = {}));
var PurchaseReservedNodeOfferingMessage;
(function (PurchaseReservedNodeOfferingMessage) {
    /**
     * @internal
     */
    PurchaseReservedNodeOfferingMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedNodeOfferingMessage = exports.PurchaseReservedNodeOfferingMessage || (exports.PurchaseReservedNodeOfferingMessage = {}));
var PurchaseReservedNodeOfferingResult;
(function (PurchaseReservedNodeOfferingResult) {
    /**
     * @internal
     */
    PurchaseReservedNodeOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedNodeOfferingResult = exports.PurchaseReservedNodeOfferingResult || (exports.PurchaseReservedNodeOfferingResult = {}));
var ReservedNodeQuotaExceededFault;
(function (ReservedNodeQuotaExceededFault) {
    /**
     * @internal
     */
    ReservedNodeQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedNodeQuotaExceededFault = exports.ReservedNodeQuotaExceededFault || (exports.ReservedNodeQuotaExceededFault = {}));
var RebootClusterMessage;
(function (RebootClusterMessage) {
    /**
     * @internal
     */
    RebootClusterMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootClusterMessage = exports.RebootClusterMessage || (exports.RebootClusterMessage = {}));
var RebootClusterResult;
(function (RebootClusterResult) {
    /**
     * @internal
     */
    RebootClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootClusterResult = exports.RebootClusterResult || (exports.RebootClusterResult = {}));
var ResetClusterParameterGroupMessage;
(function (ResetClusterParameterGroupMessage) {
    /**
     * @internal
     */
    ResetClusterParameterGroupMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetClusterParameterGroupMessage = exports.ResetClusterParameterGroupMessage || (exports.ResetClusterParameterGroupMessage = {}));
var ResizeClusterResult;
(function (ResizeClusterResult) {
    /**
     * @internal
     */
    ResizeClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResizeClusterResult = exports.ResizeClusterResult || (exports.ResizeClusterResult = {}));
var RestoreFromClusterSnapshotMessage;
(function (RestoreFromClusterSnapshotMessage) {
    /**
     * @internal
     */
    RestoreFromClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreFromClusterSnapshotMessage = exports.RestoreFromClusterSnapshotMessage || (exports.RestoreFromClusterSnapshotMessage = {}));
var RestoreFromClusterSnapshotResult;
(function (RestoreFromClusterSnapshotResult) {
    /**
     * @internal
     */
    RestoreFromClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreFromClusterSnapshotResult = exports.RestoreFromClusterSnapshotResult || (exports.RestoreFromClusterSnapshotResult = {}));
var RestoreTableFromClusterSnapshotMessage;
(function (RestoreTableFromClusterSnapshotMessage) {
    /**
     * @internal
     */
    RestoreTableFromClusterSnapshotMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableFromClusterSnapshotMessage = exports.RestoreTableFromClusterSnapshotMessage || (exports.RestoreTableFromClusterSnapshotMessage = {}));
var RestoreTableFromClusterSnapshotResult;
(function (RestoreTableFromClusterSnapshotResult) {
    /**
     * @internal
     */
    RestoreTableFromClusterSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableFromClusterSnapshotResult = exports.RestoreTableFromClusterSnapshotResult || (exports.RestoreTableFromClusterSnapshotResult = {}));
var ResumeClusterResult;
(function (ResumeClusterResult) {
    /**
     * @internal
     */
    ResumeClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeClusterResult = exports.ResumeClusterResult || (exports.ResumeClusterResult = {}));
var RevokeClusterSecurityGroupIngressMessage;
(function (RevokeClusterSecurityGroupIngressMessage) {
    /**
     * @internal
     */
    RevokeClusterSecurityGroupIngressMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeClusterSecurityGroupIngressMessage = exports.RevokeClusterSecurityGroupIngressMessage || (exports.RevokeClusterSecurityGroupIngressMessage = {}));
var RevokeClusterSecurityGroupIngressResult;
(function (RevokeClusterSecurityGroupIngressResult) {
    /**
     * @internal
     */
    RevokeClusterSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeClusterSecurityGroupIngressResult = exports.RevokeClusterSecurityGroupIngressResult || (exports.RevokeClusterSecurityGroupIngressResult = {}));
var RevokeEndpointAccessMessage;
(function (RevokeEndpointAccessMessage) {
    /**
     * @internal
     */
    RevokeEndpointAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeEndpointAccessMessage = exports.RevokeEndpointAccessMessage || (exports.RevokeEndpointAccessMessage = {}));
var RevokeSnapshotAccessMessage;
(function (RevokeSnapshotAccessMessage) {
    /**
     * @internal
     */
    RevokeSnapshotAccessMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSnapshotAccessMessage = exports.RevokeSnapshotAccessMessage || (exports.RevokeSnapshotAccessMessage = {}));
var RevokeSnapshotAccessResult;
(function (RevokeSnapshotAccessResult) {
    /**
     * @internal
     */
    RevokeSnapshotAccessResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSnapshotAccessResult = exports.RevokeSnapshotAccessResult || (exports.RevokeSnapshotAccessResult = {}));
var RotateEncryptionKeyMessage;
(function (RotateEncryptionKeyMessage) {
    /**
     * @internal
     */
    RotateEncryptionKeyMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateEncryptionKeyMessage = exports.RotateEncryptionKeyMessage || (exports.RotateEncryptionKeyMessage = {}));
var RotateEncryptionKeyResult;
(function (RotateEncryptionKeyResult) {
    /**
     * @internal
     */
    RotateEncryptionKeyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateEncryptionKeyResult = exports.RotateEncryptionKeyResult || (exports.RotateEncryptionKeyResult = {}));
var UpdatePartnerStatusInputMessage;
(function (UpdatePartnerStatusInputMessage) {
    /**
     * @internal
     */
    UpdatePartnerStatusInputMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePartnerStatusInputMessage = exports.UpdatePartnerStatusInputMessage || (exports.UpdatePartnerStatusInputMessage = {}));
//# sourceMappingURL=models_1.js.map