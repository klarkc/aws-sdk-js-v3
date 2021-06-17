"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTapeWithBarcodeInput = exports.CreateTapesOutput = exports.CreateTapesInput = exports.CreateTapePoolOutput = exports.CreateTapePoolInput = exports.CreateStorediSCSIVolumeOutput = exports.CreateStorediSCSIVolumeInput = exports.CreateSnapshotFromVolumeRecoveryPointOutput = exports.CreateSnapshotFromVolumeRecoveryPointInput = exports.ServiceUnavailableError = exports.CreateSnapshotOutput = exports.CreateSnapshotInput = exports.CreateSMBFileShareOutput = exports.CreateSMBFileShareInput = exports.CreateNFSFileShareOutput = exports.CreateNFSFileShareInput = exports.NFSFileShareDefaults = exports.CreateCachediSCSIVolumeOutput = exports.CreateCachediSCSIVolumeInput = exports.ChapInfo = exports.CancelRetrievalOutput = exports.CancelRetrievalInput = exports.CancelArchivalOutput = exports.CancelArchivalInput = exports.CachediSCSIVolume = exports.VolumeiSCSIAttributes = exports.BandwidthRateLimitInterval = exports.AutomaticTapeCreationPolicyInfo = exports.AutomaticTapeCreationRule = exports.AttachVolumeOutput = exports.AttachVolumeInput = exports.AssociateFileSystemOutput = exports.AssociateFileSystemInput = exports.CacheAttributes = exports.AssignTapePoolOutput = exports.AssignTapePoolInput = exports.AddWorkingStorageOutput = exports.AddWorkingStorageInput = exports.AddUploadBufferOutput = exports.AddUploadBufferInput = exports.AddTagsToResourceOutput = exports.AddTagsToResourceInput = exports.AddCacheOutput = exports.AddCacheInput = exports.InvalidGatewayRequestException = exports.InternalServerError = exports.StorageGatewayError = exports.ActivateGatewayOutput = exports.ActivateGatewayInput = exports.Tag = void 0;
exports.DescribeSnapshotScheduleInput = exports.DescribeSMBSettingsOutput = exports.DescribeSMBSettingsInput = exports.DescribeSMBFileSharesOutput = exports.SMBFileShareInfo = exports.DescribeSMBFileSharesInput = exports.DescribeNFSFileSharesOutput = exports.NFSFileShareInfo = exports.DescribeNFSFileSharesInput = exports.DescribeMaintenanceStartTimeOutput = exports.DescribeMaintenanceStartTimeInput = exports.DescribeGatewayInformationOutput = exports.NetworkInterface = exports.DescribeGatewayInformationInput = exports.DescribeFileSystemAssociationsOutput = exports.FileSystemAssociationInfo = exports.DescribeFileSystemAssociationsInput = exports.DescribeChapCredentialsOutput = exports.DescribeChapCredentialsInput = exports.DescribeCachediSCSIVolumesOutput = exports.DescribeCachediSCSIVolumesInput = exports.DescribeCacheOutput = exports.DescribeCacheInput = exports.DescribeBandwidthRateLimitScheduleOutput = exports.DescribeBandwidthRateLimitScheduleInput = exports.DescribeBandwidthRateLimitOutput = exports.DescribeBandwidthRateLimitInput = exports.DescribeAvailabilityMonitorTestOutput = exports.DescribeAvailabilityMonitorTestInput = exports.DeleteVolumeOutput = exports.DeleteVolumeInput = exports.DeleteTapePoolOutput = exports.DeleteTapePoolInput = exports.DeleteTapeArchiveOutput = exports.DeleteTapeArchiveInput = exports.DeleteTapeOutput = exports.DeleteTapeInput = exports.DeleteSnapshotScheduleOutput = exports.DeleteSnapshotScheduleInput = exports.DeleteGatewayOutput = exports.DeleteGatewayInput = exports.DeleteFileShareOutput = exports.DeleteFileShareInput = exports.DeleteChapCredentialsOutput = exports.DeleteChapCredentialsInput = exports.DeleteBandwidthRateLimitOutput = exports.DeleteBandwidthRateLimitInput = exports.DeleteAutomaticTapeCreationPolicyOutput = exports.DeleteAutomaticTapeCreationPolicyInput = exports.CreateTapeWithBarcodeOutput = void 0;
exports.TapeInfo = exports.ListTapesInput = exports.ListTapePoolsOutput = exports.PoolInfo = exports.ListTapePoolsInput = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListLocalDisksOutput = exports.ListLocalDisksInput = exports.ListGatewaysOutput = exports.ListGatewaysInput = exports.ListFileSystemAssociationsOutput = exports.ListFileSystemAssociationsInput = exports.ListFileSharesOutput = exports.ListFileSharesInput = exports.ListAutomaticTapeCreationPoliciesOutput = exports.ListAutomaticTapeCreationPoliciesInput = exports.JoinDomainOutput = exports.JoinDomainInput = exports.GatewayInfo = exports.FileSystemAssociationSummary = exports.FileShareInfo = exports.Disk = exports.DisassociateFileSystemOutput = exports.DisassociateFileSystemInput = exports.DisableGatewayOutput = exports.DisableGatewayInput = exports.DetachVolumeOutput = exports.DetachVolumeInput = exports.DescribeWorkingStorageOutput = exports.DescribeWorkingStorageInput = exports.DescribeVTLDevicesOutput = exports.VTLDevice = exports.DeviceiSCSIAttributes = exports.DescribeVTLDevicesInput = exports.DescribeUploadBufferOutput = exports.DescribeUploadBufferInput = exports.DescribeTapesOutput = exports.Tape = exports.DescribeTapesInput = exports.DescribeTapeRecoveryPointsOutput = exports.TapeRecoveryPointInfo = exports.DescribeTapeRecoveryPointsInput = exports.DescribeTapeArchivesOutput = exports.TapeArchive = exports.DescribeTapeArchivesInput = exports.DescribeStorediSCSIVolumesOutput = exports.StorediSCSIVolume = exports.DescribeStorediSCSIVolumesInput = exports.DescribeSnapshotScheduleOutput = void 0;
exports.UpdateSMBFileShareInput = exports.UpdateNFSFileShareOutput = exports.UpdateNFSFileShareInput = exports.UpdateMaintenanceStartTimeOutput = exports.UpdateMaintenanceStartTimeInput = exports.UpdateGatewaySoftwareNowOutput = exports.UpdateGatewaySoftwareNowInput = exports.UpdateGatewayInformationOutput = exports.UpdateGatewayInformationInput = exports.UpdateFileSystemAssociationOutput = exports.UpdateFileSystemAssociationInput = exports.UpdateChapCredentialsOutput = exports.UpdateChapCredentialsInput = exports.UpdateBandwidthRateLimitScheduleOutput = exports.UpdateBandwidthRateLimitScheduleInput = exports.UpdateBandwidthRateLimitOutput = exports.UpdateBandwidthRateLimitInput = exports.UpdateAutomaticTapeCreationPolicyOutput = exports.UpdateAutomaticTapeCreationPolicyInput = exports.StartGatewayOutput = exports.StartGatewayInput = exports.StartAvailabilityMonitorTestOutput = exports.StartAvailabilityMonitorTestInput = exports.ShutdownGatewayOutput = exports.ShutdownGatewayInput = exports.SetSMBGuestPasswordOutput = exports.SetSMBGuestPasswordInput = exports.SetLocalConsolePasswordOutput = exports.SetLocalConsolePasswordInput = exports.RetrieveTapeRecoveryPointOutput = exports.RetrieveTapeRecoveryPointInput = exports.RetrieveTapeArchiveOutput = exports.RetrieveTapeArchiveInput = exports.ResetCacheOutput = exports.ResetCacheInput = exports.RemoveTagsFromResourceOutput = exports.RemoveTagsFromResourceInput = exports.RefreshCacheOutput = exports.RefreshCacheInput = exports.NotifyWhenUploadedOutput = exports.NotifyWhenUploadedInput = exports.ListVolumesOutput = exports.VolumeInfo = exports.ListVolumesInput = exports.ListVolumeRecoveryPointsOutput = exports.VolumeRecoveryPointInfo = exports.ListVolumeRecoveryPointsInput = exports.ListVolumeInitiatorsOutput = exports.ListVolumeInitiatorsInput = exports.ListTapesOutput = void 0;
exports.UpdateVTLDeviceTypeOutput = exports.UpdateVTLDeviceTypeInput = exports.UpdateSnapshotScheduleOutput = exports.UpdateSnapshotScheduleInput = exports.UpdateSMBSecurityStrategyOutput = exports.UpdateSMBSecurityStrategyInput = exports.UpdateSMBFileShareVisibilityOutput = exports.UpdateSMBFileShareVisibilityInput = exports.UpdateSMBFileShareOutput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ActivateGatewayInput;
(function (ActivateGatewayInput) {
    /**
     * @internal
     */
    ActivateGatewayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateGatewayInput = exports.ActivateGatewayInput || (exports.ActivateGatewayInput = {}));
var ActivateGatewayOutput;
(function (ActivateGatewayOutput) {
    /**
     * @internal
     */
    ActivateGatewayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateGatewayOutput = exports.ActivateGatewayOutput || (exports.ActivateGatewayOutput = {}));
var StorageGatewayError;
(function (StorageGatewayError) {
    /**
     * @internal
     */
    StorageGatewayError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageGatewayError = exports.StorageGatewayError || (exports.StorageGatewayError = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidGatewayRequestException;
(function (InvalidGatewayRequestException) {
    /**
     * @internal
     */
    InvalidGatewayRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGatewayRequestException = exports.InvalidGatewayRequestException || (exports.InvalidGatewayRequestException = {}));
var AddCacheInput;
(function (AddCacheInput) {
    /**
     * @internal
     */
    AddCacheInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCacheInput = exports.AddCacheInput || (exports.AddCacheInput = {}));
var AddCacheOutput;
(function (AddCacheOutput) {
    /**
     * @internal
     */
    AddCacheOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCacheOutput = exports.AddCacheOutput || (exports.AddCacheOutput = {}));
var AddTagsToResourceInput;
(function (AddTagsToResourceInput) {
    /**
     * @internal
     */
    AddTagsToResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceInput = exports.AddTagsToResourceInput || (exports.AddTagsToResourceInput = {}));
var AddTagsToResourceOutput;
(function (AddTagsToResourceOutput) {
    /**
     * @internal
     */
    AddTagsToResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceOutput = exports.AddTagsToResourceOutput || (exports.AddTagsToResourceOutput = {}));
var AddUploadBufferInput;
(function (AddUploadBufferInput) {
    /**
     * @internal
     */
    AddUploadBufferInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddUploadBufferInput = exports.AddUploadBufferInput || (exports.AddUploadBufferInput = {}));
var AddUploadBufferOutput;
(function (AddUploadBufferOutput) {
    /**
     * @internal
     */
    AddUploadBufferOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddUploadBufferOutput = exports.AddUploadBufferOutput || (exports.AddUploadBufferOutput = {}));
var AddWorkingStorageInput;
(function (AddWorkingStorageInput) {
    /**
     * @internal
     */
    AddWorkingStorageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddWorkingStorageInput = exports.AddWorkingStorageInput || (exports.AddWorkingStorageInput = {}));
var AddWorkingStorageOutput;
(function (AddWorkingStorageOutput) {
    /**
     * @internal
     */
    AddWorkingStorageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddWorkingStorageOutput = exports.AddWorkingStorageOutput || (exports.AddWorkingStorageOutput = {}));
var AssignTapePoolInput;
(function (AssignTapePoolInput) {
    /**
     * @internal
     */
    AssignTapePoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignTapePoolInput = exports.AssignTapePoolInput || (exports.AssignTapePoolInput = {}));
var AssignTapePoolOutput;
(function (AssignTapePoolOutput) {
    /**
     * @internal
     */
    AssignTapePoolOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignTapePoolOutput = exports.AssignTapePoolOutput || (exports.AssignTapePoolOutput = {}));
var CacheAttributes;
(function (CacheAttributes) {
    /**
     * @internal
     */
    CacheAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheAttributes = exports.CacheAttributes || (exports.CacheAttributes = {}));
var AssociateFileSystemInput;
(function (AssociateFileSystemInput) {
    /**
     * @internal
     */
    AssociateFileSystemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(AssociateFileSystemInput = exports.AssociateFileSystemInput || (exports.AssociateFileSystemInput = {}));
var AssociateFileSystemOutput;
(function (AssociateFileSystemOutput) {
    /**
     * @internal
     */
    AssociateFileSystemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFileSystemOutput = exports.AssociateFileSystemOutput || (exports.AssociateFileSystemOutput = {}));
var AttachVolumeInput;
(function (AttachVolumeInput) {
    /**
     * @internal
     */
    AttachVolumeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachVolumeInput = exports.AttachVolumeInput || (exports.AttachVolumeInput = {}));
var AttachVolumeOutput;
(function (AttachVolumeOutput) {
    /**
     * @internal
     */
    AttachVolumeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachVolumeOutput = exports.AttachVolumeOutput || (exports.AttachVolumeOutput = {}));
var AutomaticTapeCreationRule;
(function (AutomaticTapeCreationRule) {
    /**
     * @internal
     */
    AutomaticTapeCreationRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomaticTapeCreationRule = exports.AutomaticTapeCreationRule || (exports.AutomaticTapeCreationRule = {}));
var AutomaticTapeCreationPolicyInfo;
(function (AutomaticTapeCreationPolicyInfo) {
    /**
     * @internal
     */
    AutomaticTapeCreationPolicyInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomaticTapeCreationPolicyInfo = exports.AutomaticTapeCreationPolicyInfo || (exports.AutomaticTapeCreationPolicyInfo = {}));
var BandwidthRateLimitInterval;
(function (BandwidthRateLimitInterval) {
    /**
     * @internal
     */
    BandwidthRateLimitInterval.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BandwidthRateLimitInterval = exports.BandwidthRateLimitInterval || (exports.BandwidthRateLimitInterval = {}));
var VolumeiSCSIAttributes;
(function (VolumeiSCSIAttributes) {
    /**
     * @internal
     */
    VolumeiSCSIAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeiSCSIAttributes = exports.VolumeiSCSIAttributes || (exports.VolumeiSCSIAttributes = {}));
var CachediSCSIVolume;
(function (CachediSCSIVolume) {
    /**
     * @internal
     */
    CachediSCSIVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CachediSCSIVolume = exports.CachediSCSIVolume || (exports.CachediSCSIVolume = {}));
var CancelArchivalInput;
(function (CancelArchivalInput) {
    /**
     * @internal
     */
    CancelArchivalInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelArchivalInput = exports.CancelArchivalInput || (exports.CancelArchivalInput = {}));
var CancelArchivalOutput;
(function (CancelArchivalOutput) {
    /**
     * @internal
     */
    CancelArchivalOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelArchivalOutput = exports.CancelArchivalOutput || (exports.CancelArchivalOutput = {}));
var CancelRetrievalInput;
(function (CancelRetrievalInput) {
    /**
     * @internal
     */
    CancelRetrievalInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelRetrievalInput = exports.CancelRetrievalInput || (exports.CancelRetrievalInput = {}));
var CancelRetrievalOutput;
(function (CancelRetrievalOutput) {
    /**
     * @internal
     */
    CancelRetrievalOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelRetrievalOutput = exports.CancelRetrievalOutput || (exports.CancelRetrievalOutput = {}));
var ChapInfo;
(function (ChapInfo) {
    /**
     * @internal
     */
    ChapInfo.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: smithy_client_1.SENSITIVE_STRING }),
    });
})(ChapInfo = exports.ChapInfo || (exports.ChapInfo = {}));
var CreateCachediSCSIVolumeInput;
(function (CreateCachediSCSIVolumeInput) {
    /**
     * @internal
     */
    CreateCachediSCSIVolumeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCachediSCSIVolumeInput = exports.CreateCachediSCSIVolumeInput || (exports.CreateCachediSCSIVolumeInput = {}));
var CreateCachediSCSIVolumeOutput;
(function (CreateCachediSCSIVolumeOutput) {
    /**
     * @internal
     */
    CreateCachediSCSIVolumeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCachediSCSIVolumeOutput = exports.CreateCachediSCSIVolumeOutput || (exports.CreateCachediSCSIVolumeOutput = {}));
var NFSFileShareDefaults;
(function (NFSFileShareDefaults) {
    /**
     * @internal
     */
    NFSFileShareDefaults.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NFSFileShareDefaults = exports.NFSFileShareDefaults || (exports.NFSFileShareDefaults = {}));
var CreateNFSFileShareInput;
(function (CreateNFSFileShareInput) {
    /**
     * @internal
     */
    CreateNFSFileShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNFSFileShareInput = exports.CreateNFSFileShareInput || (exports.CreateNFSFileShareInput = {}));
var CreateNFSFileShareOutput;
(function (CreateNFSFileShareOutput) {
    /**
     * @internal
     */
    CreateNFSFileShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNFSFileShareOutput = exports.CreateNFSFileShareOutput || (exports.CreateNFSFileShareOutput = {}));
var CreateSMBFileShareInput;
(function (CreateSMBFileShareInput) {
    /**
     * @internal
     */
    CreateSMBFileShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSMBFileShareInput = exports.CreateSMBFileShareInput || (exports.CreateSMBFileShareInput = {}));
var CreateSMBFileShareOutput;
(function (CreateSMBFileShareOutput) {
    /**
     * @internal
     */
    CreateSMBFileShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSMBFileShareOutput = exports.CreateSMBFileShareOutput || (exports.CreateSMBFileShareOutput = {}));
var CreateSnapshotInput;
(function (CreateSnapshotInput) {
    /**
     * @internal
     */
    CreateSnapshotInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotInput = exports.CreateSnapshotInput || (exports.CreateSnapshotInput = {}));
var CreateSnapshotOutput;
(function (CreateSnapshotOutput) {
    /**
     * @internal
     */
    CreateSnapshotOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotOutput = exports.CreateSnapshotOutput || (exports.CreateSnapshotOutput = {}));
var ServiceUnavailableError;
(function (ServiceUnavailableError) {
    /**
     * @internal
     */
    ServiceUnavailableError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableError = exports.ServiceUnavailableError || (exports.ServiceUnavailableError = {}));
var CreateSnapshotFromVolumeRecoveryPointInput;
(function (CreateSnapshotFromVolumeRecoveryPointInput) {
    /**
     * @internal
     */
    CreateSnapshotFromVolumeRecoveryPointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotFromVolumeRecoveryPointInput = exports.CreateSnapshotFromVolumeRecoveryPointInput || (exports.CreateSnapshotFromVolumeRecoveryPointInput = {}));
var CreateSnapshotFromVolumeRecoveryPointOutput;
(function (CreateSnapshotFromVolumeRecoveryPointOutput) {
    /**
     * @internal
     */
    CreateSnapshotFromVolumeRecoveryPointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotFromVolumeRecoveryPointOutput = exports.CreateSnapshotFromVolumeRecoveryPointOutput || (exports.CreateSnapshotFromVolumeRecoveryPointOutput = {}));
var CreateStorediSCSIVolumeInput;
(function (CreateStorediSCSIVolumeInput) {
    /**
     * @internal
     */
    CreateStorediSCSIVolumeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStorediSCSIVolumeInput = exports.CreateStorediSCSIVolumeInput || (exports.CreateStorediSCSIVolumeInput = {}));
var CreateStorediSCSIVolumeOutput;
(function (CreateStorediSCSIVolumeOutput) {
    /**
     * @internal
     */
    CreateStorediSCSIVolumeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStorediSCSIVolumeOutput = exports.CreateStorediSCSIVolumeOutput || (exports.CreateStorediSCSIVolumeOutput = {}));
var CreateTapePoolInput;
(function (CreateTapePoolInput) {
    /**
     * @internal
     */
    CreateTapePoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapePoolInput = exports.CreateTapePoolInput || (exports.CreateTapePoolInput = {}));
var CreateTapePoolOutput;
(function (CreateTapePoolOutput) {
    /**
     * @internal
     */
    CreateTapePoolOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapePoolOutput = exports.CreateTapePoolOutput || (exports.CreateTapePoolOutput = {}));
var CreateTapesInput;
(function (CreateTapesInput) {
    /**
     * @internal
     */
    CreateTapesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapesInput = exports.CreateTapesInput || (exports.CreateTapesInput = {}));
var CreateTapesOutput;
(function (CreateTapesOutput) {
    /**
     * @internal
     */
    CreateTapesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapesOutput = exports.CreateTapesOutput || (exports.CreateTapesOutput = {}));
var CreateTapeWithBarcodeInput;
(function (CreateTapeWithBarcodeInput) {
    /**
     * @internal
     */
    CreateTapeWithBarcodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapeWithBarcodeInput = exports.CreateTapeWithBarcodeInput || (exports.CreateTapeWithBarcodeInput = {}));
var CreateTapeWithBarcodeOutput;
(function (CreateTapeWithBarcodeOutput) {
    /**
     * @internal
     */
    CreateTapeWithBarcodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTapeWithBarcodeOutput = exports.CreateTapeWithBarcodeOutput || (exports.CreateTapeWithBarcodeOutput = {}));
var DeleteAutomaticTapeCreationPolicyInput;
(function (DeleteAutomaticTapeCreationPolicyInput) {
    /**
     * @internal
     */
    DeleteAutomaticTapeCreationPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAutomaticTapeCreationPolicyInput = exports.DeleteAutomaticTapeCreationPolicyInput || (exports.DeleteAutomaticTapeCreationPolicyInput = {}));
var DeleteAutomaticTapeCreationPolicyOutput;
(function (DeleteAutomaticTapeCreationPolicyOutput) {
    /**
     * @internal
     */
    DeleteAutomaticTapeCreationPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAutomaticTapeCreationPolicyOutput = exports.DeleteAutomaticTapeCreationPolicyOutput || (exports.DeleteAutomaticTapeCreationPolicyOutput = {}));
var DeleteBandwidthRateLimitInput;
(function (DeleteBandwidthRateLimitInput) {
    /**
     * @internal
     */
    DeleteBandwidthRateLimitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBandwidthRateLimitInput = exports.DeleteBandwidthRateLimitInput || (exports.DeleteBandwidthRateLimitInput = {}));
var DeleteBandwidthRateLimitOutput;
(function (DeleteBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    DeleteBandwidthRateLimitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBandwidthRateLimitOutput = exports.DeleteBandwidthRateLimitOutput || (exports.DeleteBandwidthRateLimitOutput = {}));
var DeleteChapCredentialsInput;
(function (DeleteChapCredentialsInput) {
    /**
     * @internal
     */
    DeleteChapCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChapCredentialsInput = exports.DeleteChapCredentialsInput || (exports.DeleteChapCredentialsInput = {}));
var DeleteChapCredentialsOutput;
(function (DeleteChapCredentialsOutput) {
    /**
     * @internal
     */
    DeleteChapCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChapCredentialsOutput = exports.DeleteChapCredentialsOutput || (exports.DeleteChapCredentialsOutput = {}));
var DeleteFileShareInput;
(function (DeleteFileShareInput) {
    /**
     * @internal
     */
    DeleteFileShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileShareInput = exports.DeleteFileShareInput || (exports.DeleteFileShareInput = {}));
var DeleteFileShareOutput;
(function (DeleteFileShareOutput) {
    /**
     * @internal
     */
    DeleteFileShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileShareOutput = exports.DeleteFileShareOutput || (exports.DeleteFileShareOutput = {}));
var DeleteGatewayInput;
(function (DeleteGatewayInput) {
    /**
     * @internal
     */
    DeleteGatewayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGatewayInput = exports.DeleteGatewayInput || (exports.DeleteGatewayInput = {}));
var DeleteGatewayOutput;
(function (DeleteGatewayOutput) {
    /**
     * @internal
     */
    DeleteGatewayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGatewayOutput = exports.DeleteGatewayOutput || (exports.DeleteGatewayOutput = {}));
var DeleteSnapshotScheduleInput;
(function (DeleteSnapshotScheduleInput) {
    /**
     * @internal
     */
    DeleteSnapshotScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotScheduleInput = exports.DeleteSnapshotScheduleInput || (exports.DeleteSnapshotScheduleInput = {}));
var DeleteSnapshotScheduleOutput;
(function (DeleteSnapshotScheduleOutput) {
    /**
     * @internal
     */
    DeleteSnapshotScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotScheduleOutput = exports.DeleteSnapshotScheduleOutput || (exports.DeleteSnapshotScheduleOutput = {}));
var DeleteTapeInput;
(function (DeleteTapeInput) {
    /**
     * @internal
     */
    DeleteTapeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapeInput = exports.DeleteTapeInput || (exports.DeleteTapeInput = {}));
var DeleteTapeOutput;
(function (DeleteTapeOutput) {
    /**
     * @internal
     */
    DeleteTapeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapeOutput = exports.DeleteTapeOutput || (exports.DeleteTapeOutput = {}));
var DeleteTapeArchiveInput;
(function (DeleteTapeArchiveInput) {
    /**
     * @internal
     */
    DeleteTapeArchiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapeArchiveInput = exports.DeleteTapeArchiveInput || (exports.DeleteTapeArchiveInput = {}));
var DeleteTapeArchiveOutput;
(function (DeleteTapeArchiveOutput) {
    /**
     * @internal
     */
    DeleteTapeArchiveOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapeArchiveOutput = exports.DeleteTapeArchiveOutput || (exports.DeleteTapeArchiveOutput = {}));
var DeleteTapePoolInput;
(function (DeleteTapePoolInput) {
    /**
     * @internal
     */
    DeleteTapePoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapePoolInput = exports.DeleteTapePoolInput || (exports.DeleteTapePoolInput = {}));
var DeleteTapePoolOutput;
(function (DeleteTapePoolOutput) {
    /**
     * @internal
     */
    DeleteTapePoolOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTapePoolOutput = exports.DeleteTapePoolOutput || (exports.DeleteTapePoolOutput = {}));
var DeleteVolumeInput;
(function (DeleteVolumeInput) {
    /**
     * @internal
     */
    DeleteVolumeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVolumeInput = exports.DeleteVolumeInput || (exports.DeleteVolumeInput = {}));
var DeleteVolumeOutput;
(function (DeleteVolumeOutput) {
    /**
     * @internal
     */
    DeleteVolumeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVolumeOutput = exports.DeleteVolumeOutput || (exports.DeleteVolumeOutput = {}));
var DescribeAvailabilityMonitorTestInput;
(function (DescribeAvailabilityMonitorTestInput) {
    /**
     * @internal
     */
    DescribeAvailabilityMonitorTestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityMonitorTestInput = exports.DescribeAvailabilityMonitorTestInput || (exports.DescribeAvailabilityMonitorTestInput = {}));
var DescribeAvailabilityMonitorTestOutput;
(function (DescribeAvailabilityMonitorTestOutput) {
    /**
     * @internal
     */
    DescribeAvailabilityMonitorTestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityMonitorTestOutput = exports.DescribeAvailabilityMonitorTestOutput || (exports.DescribeAvailabilityMonitorTestOutput = {}));
var DescribeBandwidthRateLimitInput;
(function (DescribeBandwidthRateLimitInput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBandwidthRateLimitInput = exports.DescribeBandwidthRateLimitInput || (exports.DescribeBandwidthRateLimitInput = {}));
var DescribeBandwidthRateLimitOutput;
(function (DescribeBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBandwidthRateLimitOutput = exports.DescribeBandwidthRateLimitOutput || (exports.DescribeBandwidthRateLimitOutput = {}));
var DescribeBandwidthRateLimitScheduleInput;
(function (DescribeBandwidthRateLimitScheduleInput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBandwidthRateLimitScheduleInput = exports.DescribeBandwidthRateLimitScheduleInput || (exports.DescribeBandwidthRateLimitScheduleInput = {}));
var DescribeBandwidthRateLimitScheduleOutput;
(function (DescribeBandwidthRateLimitScheduleOutput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBandwidthRateLimitScheduleOutput = exports.DescribeBandwidthRateLimitScheduleOutput || (exports.DescribeBandwidthRateLimitScheduleOutput = {}));
var DescribeCacheInput;
(function (DescribeCacheInput) {
    /**
     * @internal
     */
    DescribeCacheInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheInput = exports.DescribeCacheInput || (exports.DescribeCacheInput = {}));
var DescribeCacheOutput;
(function (DescribeCacheOutput) {
    /**
     * @internal
     */
    DescribeCacheOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCacheOutput = exports.DescribeCacheOutput || (exports.DescribeCacheOutput = {}));
var DescribeCachediSCSIVolumesInput;
(function (DescribeCachediSCSIVolumesInput) {
    /**
     * @internal
     */
    DescribeCachediSCSIVolumesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCachediSCSIVolumesInput = exports.DescribeCachediSCSIVolumesInput || (exports.DescribeCachediSCSIVolumesInput = {}));
var DescribeCachediSCSIVolumesOutput;
(function (DescribeCachediSCSIVolumesOutput) {
    /**
     * @internal
     */
    DescribeCachediSCSIVolumesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCachediSCSIVolumesOutput = exports.DescribeCachediSCSIVolumesOutput || (exports.DescribeCachediSCSIVolumesOutput = {}));
var DescribeChapCredentialsInput;
(function (DescribeChapCredentialsInput) {
    /**
     * @internal
     */
    DescribeChapCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChapCredentialsInput = exports.DescribeChapCredentialsInput || (exports.DescribeChapCredentialsInput = {}));
var DescribeChapCredentialsOutput;
(function (DescribeChapCredentialsOutput) {
    /**
     * @internal
     */
    DescribeChapCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ChapCredentials && {
            ChapCredentials: obj.ChapCredentials.map((item) => ChapInfo.filterSensitiveLog(item)),
        }),
    });
})(DescribeChapCredentialsOutput = exports.DescribeChapCredentialsOutput || (exports.DescribeChapCredentialsOutput = {}));
var DescribeFileSystemAssociationsInput;
(function (DescribeFileSystemAssociationsInput) {
    /**
     * @internal
     */
    DescribeFileSystemAssociationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemAssociationsInput = exports.DescribeFileSystemAssociationsInput || (exports.DescribeFileSystemAssociationsInput = {}));
var FileSystemAssociationInfo;
(function (FileSystemAssociationInfo) {
    /**
     * @internal
     */
    FileSystemAssociationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemAssociationInfo = exports.FileSystemAssociationInfo || (exports.FileSystemAssociationInfo = {}));
var DescribeFileSystemAssociationsOutput;
(function (DescribeFileSystemAssociationsOutput) {
    /**
     * @internal
     */
    DescribeFileSystemAssociationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFileSystemAssociationsOutput = exports.DescribeFileSystemAssociationsOutput || (exports.DescribeFileSystemAssociationsOutput = {}));
var DescribeGatewayInformationInput;
(function (DescribeGatewayInformationInput) {
    /**
     * @internal
     */
    DescribeGatewayInformationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayInformationInput = exports.DescribeGatewayInformationInput || (exports.DescribeGatewayInformationInput = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var DescribeGatewayInformationOutput;
(function (DescribeGatewayInformationOutput) {
    /**
     * @internal
     */
    DescribeGatewayInformationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGatewayInformationOutput = exports.DescribeGatewayInformationOutput || (exports.DescribeGatewayInformationOutput = {}));
var DescribeMaintenanceStartTimeInput;
(function (DescribeMaintenanceStartTimeInput) {
    /**
     * @internal
     */
    DescribeMaintenanceStartTimeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceStartTimeInput = exports.DescribeMaintenanceStartTimeInput || (exports.DescribeMaintenanceStartTimeInput = {}));
var DescribeMaintenanceStartTimeOutput;
(function (DescribeMaintenanceStartTimeOutput) {
    /**
     * @internal
     */
    DescribeMaintenanceStartTimeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceStartTimeOutput = exports.DescribeMaintenanceStartTimeOutput || (exports.DescribeMaintenanceStartTimeOutput = {}));
var DescribeNFSFileSharesInput;
(function (DescribeNFSFileSharesInput) {
    /**
     * @internal
     */
    DescribeNFSFileSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNFSFileSharesInput = exports.DescribeNFSFileSharesInput || (exports.DescribeNFSFileSharesInput = {}));
var NFSFileShareInfo;
(function (NFSFileShareInfo) {
    /**
     * @internal
     */
    NFSFileShareInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NFSFileShareInfo = exports.NFSFileShareInfo || (exports.NFSFileShareInfo = {}));
var DescribeNFSFileSharesOutput;
(function (DescribeNFSFileSharesOutput) {
    /**
     * @internal
     */
    DescribeNFSFileSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNFSFileSharesOutput = exports.DescribeNFSFileSharesOutput || (exports.DescribeNFSFileSharesOutput = {}));
var DescribeSMBFileSharesInput;
(function (DescribeSMBFileSharesInput) {
    /**
     * @internal
     */
    DescribeSMBFileSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSMBFileSharesInput = exports.DescribeSMBFileSharesInput || (exports.DescribeSMBFileSharesInput = {}));
var SMBFileShareInfo;
(function (SMBFileShareInfo) {
    /**
     * @internal
     */
    SMBFileShareInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMBFileShareInfo = exports.SMBFileShareInfo || (exports.SMBFileShareInfo = {}));
var DescribeSMBFileSharesOutput;
(function (DescribeSMBFileSharesOutput) {
    /**
     * @internal
     */
    DescribeSMBFileSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSMBFileSharesOutput = exports.DescribeSMBFileSharesOutput || (exports.DescribeSMBFileSharesOutput = {}));
var DescribeSMBSettingsInput;
(function (DescribeSMBSettingsInput) {
    /**
     * @internal
     */
    DescribeSMBSettingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSMBSettingsInput = exports.DescribeSMBSettingsInput || (exports.DescribeSMBSettingsInput = {}));
var DescribeSMBSettingsOutput;
(function (DescribeSMBSettingsOutput) {
    /**
     * @internal
     */
    DescribeSMBSettingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSMBSettingsOutput = exports.DescribeSMBSettingsOutput || (exports.DescribeSMBSettingsOutput = {}));
var DescribeSnapshotScheduleInput;
(function (DescribeSnapshotScheduleInput) {
    /**
     * @internal
     */
    DescribeSnapshotScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotScheduleInput = exports.DescribeSnapshotScheduleInput || (exports.DescribeSnapshotScheduleInput = {}));
var DescribeSnapshotScheduleOutput;
(function (DescribeSnapshotScheduleOutput) {
    /**
     * @internal
     */
    DescribeSnapshotScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotScheduleOutput = exports.DescribeSnapshotScheduleOutput || (exports.DescribeSnapshotScheduleOutput = {}));
var DescribeStorediSCSIVolumesInput;
(function (DescribeStorediSCSIVolumesInput) {
    /**
     * @internal
     */
    DescribeStorediSCSIVolumesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStorediSCSIVolumesInput = exports.DescribeStorediSCSIVolumesInput || (exports.DescribeStorediSCSIVolumesInput = {}));
var StorediSCSIVolume;
(function (StorediSCSIVolume) {
    /**
     * @internal
     */
    StorediSCSIVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorediSCSIVolume = exports.StorediSCSIVolume || (exports.StorediSCSIVolume = {}));
var DescribeStorediSCSIVolumesOutput;
(function (DescribeStorediSCSIVolumesOutput) {
    /**
     * @internal
     */
    DescribeStorediSCSIVolumesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStorediSCSIVolumesOutput = exports.DescribeStorediSCSIVolumesOutput || (exports.DescribeStorediSCSIVolumesOutput = {}));
var DescribeTapeArchivesInput;
(function (DescribeTapeArchivesInput) {
    /**
     * @internal
     */
    DescribeTapeArchivesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapeArchivesInput = exports.DescribeTapeArchivesInput || (exports.DescribeTapeArchivesInput = {}));
var TapeArchive;
(function (TapeArchive) {
    /**
     * @internal
     */
    TapeArchive.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TapeArchive = exports.TapeArchive || (exports.TapeArchive = {}));
var DescribeTapeArchivesOutput;
(function (DescribeTapeArchivesOutput) {
    /**
     * @internal
     */
    DescribeTapeArchivesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapeArchivesOutput = exports.DescribeTapeArchivesOutput || (exports.DescribeTapeArchivesOutput = {}));
var DescribeTapeRecoveryPointsInput;
(function (DescribeTapeRecoveryPointsInput) {
    /**
     * @internal
     */
    DescribeTapeRecoveryPointsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapeRecoveryPointsInput = exports.DescribeTapeRecoveryPointsInput || (exports.DescribeTapeRecoveryPointsInput = {}));
var TapeRecoveryPointInfo;
(function (TapeRecoveryPointInfo) {
    /**
     * @internal
     */
    TapeRecoveryPointInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TapeRecoveryPointInfo = exports.TapeRecoveryPointInfo || (exports.TapeRecoveryPointInfo = {}));
var DescribeTapeRecoveryPointsOutput;
(function (DescribeTapeRecoveryPointsOutput) {
    /**
     * @internal
     */
    DescribeTapeRecoveryPointsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapeRecoveryPointsOutput = exports.DescribeTapeRecoveryPointsOutput || (exports.DescribeTapeRecoveryPointsOutput = {}));
var DescribeTapesInput;
(function (DescribeTapesInput) {
    /**
     * @internal
     */
    DescribeTapesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapesInput = exports.DescribeTapesInput || (exports.DescribeTapesInput = {}));
var Tape;
(function (Tape) {
    /**
     * @internal
     */
    Tape.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tape = exports.Tape || (exports.Tape = {}));
var DescribeTapesOutput;
(function (DescribeTapesOutput) {
    /**
     * @internal
     */
    DescribeTapesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTapesOutput = exports.DescribeTapesOutput || (exports.DescribeTapesOutput = {}));
var DescribeUploadBufferInput;
(function (DescribeUploadBufferInput) {
    /**
     * @internal
     */
    DescribeUploadBufferInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUploadBufferInput = exports.DescribeUploadBufferInput || (exports.DescribeUploadBufferInput = {}));
var DescribeUploadBufferOutput;
(function (DescribeUploadBufferOutput) {
    /**
     * @internal
     */
    DescribeUploadBufferOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUploadBufferOutput = exports.DescribeUploadBufferOutput || (exports.DescribeUploadBufferOutput = {}));
var DescribeVTLDevicesInput;
(function (DescribeVTLDevicesInput) {
    /**
     * @internal
     */
    DescribeVTLDevicesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVTLDevicesInput = exports.DescribeVTLDevicesInput || (exports.DescribeVTLDevicesInput = {}));
var DeviceiSCSIAttributes;
(function (DeviceiSCSIAttributes) {
    /**
     * @internal
     */
    DeviceiSCSIAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceiSCSIAttributes = exports.DeviceiSCSIAttributes || (exports.DeviceiSCSIAttributes = {}));
var VTLDevice;
(function (VTLDevice) {
    /**
     * @internal
     */
    VTLDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VTLDevice = exports.VTLDevice || (exports.VTLDevice = {}));
var DescribeVTLDevicesOutput;
(function (DescribeVTLDevicesOutput) {
    /**
     * @internal
     */
    DescribeVTLDevicesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVTLDevicesOutput = exports.DescribeVTLDevicesOutput || (exports.DescribeVTLDevicesOutput = {}));
var DescribeWorkingStorageInput;
(function (DescribeWorkingStorageInput) {
    /**
     * @internal
     */
    DescribeWorkingStorageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkingStorageInput = exports.DescribeWorkingStorageInput || (exports.DescribeWorkingStorageInput = {}));
var DescribeWorkingStorageOutput;
(function (DescribeWorkingStorageOutput) {
    /**
     * @internal
     */
    DescribeWorkingStorageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkingStorageOutput = exports.DescribeWorkingStorageOutput || (exports.DescribeWorkingStorageOutput = {}));
var DetachVolumeInput;
(function (DetachVolumeInput) {
    /**
     * @internal
     */
    DetachVolumeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachVolumeInput = exports.DetachVolumeInput || (exports.DetachVolumeInput = {}));
var DetachVolumeOutput;
(function (DetachVolumeOutput) {
    /**
     * @internal
     */
    DetachVolumeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachVolumeOutput = exports.DetachVolumeOutput || (exports.DetachVolumeOutput = {}));
var DisableGatewayInput;
(function (DisableGatewayInput) {
    /**
     * @internal
     */
    DisableGatewayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableGatewayInput = exports.DisableGatewayInput || (exports.DisableGatewayInput = {}));
var DisableGatewayOutput;
(function (DisableGatewayOutput) {
    /**
     * @internal
     */
    DisableGatewayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableGatewayOutput = exports.DisableGatewayOutput || (exports.DisableGatewayOutput = {}));
var DisassociateFileSystemInput;
(function (DisassociateFileSystemInput) {
    /**
     * @internal
     */
    DisassociateFileSystemInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFileSystemInput = exports.DisassociateFileSystemInput || (exports.DisassociateFileSystemInput = {}));
var DisassociateFileSystemOutput;
(function (DisassociateFileSystemOutput) {
    /**
     * @internal
     */
    DisassociateFileSystemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFileSystemOutput = exports.DisassociateFileSystemOutput || (exports.DisassociateFileSystemOutput = {}));
var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Disk = exports.Disk || (exports.Disk = {}));
var FileShareInfo;
(function (FileShareInfo) {
    /**
     * @internal
     */
    FileShareInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileShareInfo = exports.FileShareInfo || (exports.FileShareInfo = {}));
var FileSystemAssociationSummary;
(function (FileSystemAssociationSummary) {
    /**
     * @internal
     */
    FileSystemAssociationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemAssociationSummary = exports.FileSystemAssociationSummary || (exports.FileSystemAssociationSummary = {}));
var GatewayInfo;
(function (GatewayInfo) {
    /**
     * @internal
     */
    GatewayInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GatewayInfo = exports.GatewayInfo || (exports.GatewayInfo = {}));
var JoinDomainInput;
(function (JoinDomainInput) {
    /**
     * @internal
     */
    JoinDomainInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(JoinDomainInput = exports.JoinDomainInput || (exports.JoinDomainInput = {}));
var JoinDomainOutput;
(function (JoinDomainOutput) {
    /**
     * @internal
     */
    JoinDomainOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinDomainOutput = exports.JoinDomainOutput || (exports.JoinDomainOutput = {}));
var ListAutomaticTapeCreationPoliciesInput;
(function (ListAutomaticTapeCreationPoliciesInput) {
    /**
     * @internal
     */
    ListAutomaticTapeCreationPoliciesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAutomaticTapeCreationPoliciesInput = exports.ListAutomaticTapeCreationPoliciesInput || (exports.ListAutomaticTapeCreationPoliciesInput = {}));
var ListAutomaticTapeCreationPoliciesOutput;
(function (ListAutomaticTapeCreationPoliciesOutput) {
    /**
     * @internal
     */
    ListAutomaticTapeCreationPoliciesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAutomaticTapeCreationPoliciesOutput = exports.ListAutomaticTapeCreationPoliciesOutput || (exports.ListAutomaticTapeCreationPoliciesOutput = {}));
var ListFileSharesInput;
(function (ListFileSharesInput) {
    /**
     * @internal
     */
    ListFileSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFileSharesInput = exports.ListFileSharesInput || (exports.ListFileSharesInput = {}));
var ListFileSharesOutput;
(function (ListFileSharesOutput) {
    /**
     * @internal
     */
    ListFileSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFileSharesOutput = exports.ListFileSharesOutput || (exports.ListFileSharesOutput = {}));
var ListFileSystemAssociationsInput;
(function (ListFileSystemAssociationsInput) {
    /**
     * @internal
     */
    ListFileSystemAssociationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFileSystemAssociationsInput = exports.ListFileSystemAssociationsInput || (exports.ListFileSystemAssociationsInput = {}));
var ListFileSystemAssociationsOutput;
(function (ListFileSystemAssociationsOutput) {
    /**
     * @internal
     */
    ListFileSystemAssociationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFileSystemAssociationsOutput = exports.ListFileSystemAssociationsOutput || (exports.ListFileSystemAssociationsOutput = {}));
var ListGatewaysInput;
(function (ListGatewaysInput) {
    /**
     * @internal
     */
    ListGatewaysInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGatewaysInput = exports.ListGatewaysInput || (exports.ListGatewaysInput = {}));
var ListGatewaysOutput;
(function (ListGatewaysOutput) {
    /**
     * @internal
     */
    ListGatewaysOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGatewaysOutput = exports.ListGatewaysOutput || (exports.ListGatewaysOutput = {}));
var ListLocalDisksInput;
(function (ListLocalDisksInput) {
    /**
     * @internal
     */
    ListLocalDisksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLocalDisksInput = exports.ListLocalDisksInput || (exports.ListLocalDisksInput = {}));
var ListLocalDisksOutput;
(function (ListLocalDisksOutput) {
    /**
     * @internal
     */
    ListLocalDisksOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLocalDisksOutput = exports.ListLocalDisksOutput || (exports.ListLocalDisksOutput = {}));
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
var ListTapePoolsInput;
(function (ListTapePoolsInput) {
    /**
     * @internal
     */
    ListTapePoolsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTapePoolsInput = exports.ListTapePoolsInput || (exports.ListTapePoolsInput = {}));
var PoolInfo;
(function (PoolInfo) {
    /**
     * @internal
     */
    PoolInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PoolInfo = exports.PoolInfo || (exports.PoolInfo = {}));
var ListTapePoolsOutput;
(function (ListTapePoolsOutput) {
    /**
     * @internal
     */
    ListTapePoolsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTapePoolsOutput = exports.ListTapePoolsOutput || (exports.ListTapePoolsOutput = {}));
var ListTapesInput;
(function (ListTapesInput) {
    /**
     * @internal
     */
    ListTapesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTapesInput = exports.ListTapesInput || (exports.ListTapesInput = {}));
var TapeInfo;
(function (TapeInfo) {
    /**
     * @internal
     */
    TapeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TapeInfo = exports.TapeInfo || (exports.TapeInfo = {}));
var ListTapesOutput;
(function (ListTapesOutput) {
    /**
     * @internal
     */
    ListTapesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTapesOutput = exports.ListTapesOutput || (exports.ListTapesOutput = {}));
var ListVolumeInitiatorsInput;
(function (ListVolumeInitiatorsInput) {
    /**
     * @internal
     */
    ListVolumeInitiatorsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumeInitiatorsInput = exports.ListVolumeInitiatorsInput || (exports.ListVolumeInitiatorsInput = {}));
var ListVolumeInitiatorsOutput;
(function (ListVolumeInitiatorsOutput) {
    /**
     * @internal
     */
    ListVolumeInitiatorsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumeInitiatorsOutput = exports.ListVolumeInitiatorsOutput || (exports.ListVolumeInitiatorsOutput = {}));
var ListVolumeRecoveryPointsInput;
(function (ListVolumeRecoveryPointsInput) {
    /**
     * @internal
     */
    ListVolumeRecoveryPointsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumeRecoveryPointsInput = exports.ListVolumeRecoveryPointsInput || (exports.ListVolumeRecoveryPointsInput = {}));
var VolumeRecoveryPointInfo;
(function (VolumeRecoveryPointInfo) {
    /**
     * @internal
     */
    VolumeRecoveryPointInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeRecoveryPointInfo = exports.VolumeRecoveryPointInfo || (exports.VolumeRecoveryPointInfo = {}));
var ListVolumeRecoveryPointsOutput;
(function (ListVolumeRecoveryPointsOutput) {
    /**
     * @internal
     */
    ListVolumeRecoveryPointsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumeRecoveryPointsOutput = exports.ListVolumeRecoveryPointsOutput || (exports.ListVolumeRecoveryPointsOutput = {}));
var ListVolumesInput;
(function (ListVolumesInput) {
    /**
     * @internal
     */
    ListVolumesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumesInput = exports.ListVolumesInput || (exports.ListVolumesInput = {}));
var VolumeInfo;
(function (VolumeInfo) {
    /**
     * @internal
     */
    VolumeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeInfo = exports.VolumeInfo || (exports.VolumeInfo = {}));
var ListVolumesOutput;
(function (ListVolumesOutput) {
    /**
     * @internal
     */
    ListVolumesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVolumesOutput = exports.ListVolumesOutput || (exports.ListVolumesOutput = {}));
var NotifyWhenUploadedInput;
(function (NotifyWhenUploadedInput) {
    /**
     * @internal
     */
    NotifyWhenUploadedInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyWhenUploadedInput = exports.NotifyWhenUploadedInput || (exports.NotifyWhenUploadedInput = {}));
var NotifyWhenUploadedOutput;
(function (NotifyWhenUploadedOutput) {
    /**
     * @internal
     */
    NotifyWhenUploadedOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyWhenUploadedOutput = exports.NotifyWhenUploadedOutput || (exports.NotifyWhenUploadedOutput = {}));
var RefreshCacheInput;
(function (RefreshCacheInput) {
    /**
     * @internal
     */
    RefreshCacheInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshCacheInput = exports.RefreshCacheInput || (exports.RefreshCacheInput = {}));
var RefreshCacheOutput;
(function (RefreshCacheOutput) {
    /**
     * @internal
     */
    RefreshCacheOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshCacheOutput = exports.RefreshCacheOutput || (exports.RefreshCacheOutput = {}));
var RemoveTagsFromResourceInput;
(function (RemoveTagsFromResourceInput) {
    /**
     * @internal
     */
    RemoveTagsFromResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceInput = exports.RemoveTagsFromResourceInput || (exports.RemoveTagsFromResourceInput = {}));
var RemoveTagsFromResourceOutput;
(function (RemoveTagsFromResourceOutput) {
    /**
     * @internal
     */
    RemoveTagsFromResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceOutput = exports.RemoveTagsFromResourceOutput || (exports.RemoveTagsFromResourceOutput = {}));
var ResetCacheInput;
(function (ResetCacheInput) {
    /**
     * @internal
     */
    ResetCacheInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetCacheInput = exports.ResetCacheInput || (exports.ResetCacheInput = {}));
var ResetCacheOutput;
(function (ResetCacheOutput) {
    /**
     * @internal
     */
    ResetCacheOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetCacheOutput = exports.ResetCacheOutput || (exports.ResetCacheOutput = {}));
var RetrieveTapeArchiveInput;
(function (RetrieveTapeArchiveInput) {
    /**
     * @internal
     */
    RetrieveTapeArchiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveTapeArchiveInput = exports.RetrieveTapeArchiveInput || (exports.RetrieveTapeArchiveInput = {}));
var RetrieveTapeArchiveOutput;
(function (RetrieveTapeArchiveOutput) {
    /**
     * @internal
     */
    RetrieveTapeArchiveOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveTapeArchiveOutput = exports.RetrieveTapeArchiveOutput || (exports.RetrieveTapeArchiveOutput = {}));
var RetrieveTapeRecoveryPointInput;
(function (RetrieveTapeRecoveryPointInput) {
    /**
     * @internal
     */
    RetrieveTapeRecoveryPointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveTapeRecoveryPointInput = exports.RetrieveTapeRecoveryPointInput || (exports.RetrieveTapeRecoveryPointInput = {}));
var RetrieveTapeRecoveryPointOutput;
(function (RetrieveTapeRecoveryPointOutput) {
    /**
     * @internal
     */
    RetrieveTapeRecoveryPointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveTapeRecoveryPointOutput = exports.RetrieveTapeRecoveryPointOutput || (exports.RetrieveTapeRecoveryPointOutput = {}));
var SetLocalConsolePasswordInput;
(function (SetLocalConsolePasswordInput) {
    /**
     * @internal
     */
    SetLocalConsolePasswordInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.LocalConsolePassword && { LocalConsolePassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetLocalConsolePasswordInput = exports.SetLocalConsolePasswordInput || (exports.SetLocalConsolePasswordInput = {}));
var SetLocalConsolePasswordOutput;
(function (SetLocalConsolePasswordOutput) {
    /**
     * @internal
     */
    SetLocalConsolePasswordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetLocalConsolePasswordOutput = exports.SetLocalConsolePasswordOutput || (exports.SetLocalConsolePasswordOutput = {}));
var SetSMBGuestPasswordInput;
(function (SetSMBGuestPasswordInput) {
    /**
     * @internal
     */
    SetSMBGuestPasswordInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetSMBGuestPasswordInput = exports.SetSMBGuestPasswordInput || (exports.SetSMBGuestPasswordInput = {}));
var SetSMBGuestPasswordOutput;
(function (SetSMBGuestPasswordOutput) {
    /**
     * @internal
     */
    SetSMBGuestPasswordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSMBGuestPasswordOutput = exports.SetSMBGuestPasswordOutput || (exports.SetSMBGuestPasswordOutput = {}));
var ShutdownGatewayInput;
(function (ShutdownGatewayInput) {
    /**
     * @internal
     */
    ShutdownGatewayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShutdownGatewayInput = exports.ShutdownGatewayInput || (exports.ShutdownGatewayInput = {}));
var ShutdownGatewayOutput;
(function (ShutdownGatewayOutput) {
    /**
     * @internal
     */
    ShutdownGatewayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShutdownGatewayOutput = exports.ShutdownGatewayOutput || (exports.ShutdownGatewayOutput = {}));
var StartAvailabilityMonitorTestInput;
(function (StartAvailabilityMonitorTestInput) {
    /**
     * @internal
     */
    StartAvailabilityMonitorTestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAvailabilityMonitorTestInput = exports.StartAvailabilityMonitorTestInput || (exports.StartAvailabilityMonitorTestInput = {}));
var StartAvailabilityMonitorTestOutput;
(function (StartAvailabilityMonitorTestOutput) {
    /**
     * @internal
     */
    StartAvailabilityMonitorTestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAvailabilityMonitorTestOutput = exports.StartAvailabilityMonitorTestOutput || (exports.StartAvailabilityMonitorTestOutput = {}));
var StartGatewayInput;
(function (StartGatewayInput) {
    /**
     * @internal
     */
    StartGatewayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartGatewayInput = exports.StartGatewayInput || (exports.StartGatewayInput = {}));
var StartGatewayOutput;
(function (StartGatewayOutput) {
    /**
     * @internal
     */
    StartGatewayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartGatewayOutput = exports.StartGatewayOutput || (exports.StartGatewayOutput = {}));
var UpdateAutomaticTapeCreationPolicyInput;
(function (UpdateAutomaticTapeCreationPolicyInput) {
    /**
     * @internal
     */
    UpdateAutomaticTapeCreationPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAutomaticTapeCreationPolicyInput = exports.UpdateAutomaticTapeCreationPolicyInput || (exports.UpdateAutomaticTapeCreationPolicyInput = {}));
var UpdateAutomaticTapeCreationPolicyOutput;
(function (UpdateAutomaticTapeCreationPolicyOutput) {
    /**
     * @internal
     */
    UpdateAutomaticTapeCreationPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAutomaticTapeCreationPolicyOutput = exports.UpdateAutomaticTapeCreationPolicyOutput || (exports.UpdateAutomaticTapeCreationPolicyOutput = {}));
var UpdateBandwidthRateLimitInput;
(function (UpdateBandwidthRateLimitInput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBandwidthRateLimitInput = exports.UpdateBandwidthRateLimitInput || (exports.UpdateBandwidthRateLimitInput = {}));
var UpdateBandwidthRateLimitOutput;
(function (UpdateBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBandwidthRateLimitOutput = exports.UpdateBandwidthRateLimitOutput || (exports.UpdateBandwidthRateLimitOutput = {}));
var UpdateBandwidthRateLimitScheduleInput;
(function (UpdateBandwidthRateLimitScheduleInput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBandwidthRateLimitScheduleInput = exports.UpdateBandwidthRateLimitScheduleInput || (exports.UpdateBandwidthRateLimitScheduleInput = {}));
var UpdateBandwidthRateLimitScheduleOutput;
(function (UpdateBandwidthRateLimitScheduleOutput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBandwidthRateLimitScheduleOutput = exports.UpdateBandwidthRateLimitScheduleOutput || (exports.UpdateBandwidthRateLimitScheduleOutput = {}));
var UpdateChapCredentialsInput;
(function (UpdateChapCredentialsInput) {
    /**
     * @internal
     */
    UpdateChapCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateChapCredentialsInput = exports.UpdateChapCredentialsInput || (exports.UpdateChapCredentialsInput = {}));
var UpdateChapCredentialsOutput;
(function (UpdateChapCredentialsOutput) {
    /**
     * @internal
     */
    UpdateChapCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChapCredentialsOutput = exports.UpdateChapCredentialsOutput || (exports.UpdateChapCredentialsOutput = {}));
var UpdateFileSystemAssociationInput;
(function (UpdateFileSystemAssociationInput) {
    /**
     * @internal
     */
    UpdateFileSystemAssociationInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateFileSystemAssociationInput = exports.UpdateFileSystemAssociationInput || (exports.UpdateFileSystemAssociationInput = {}));
var UpdateFileSystemAssociationOutput;
(function (UpdateFileSystemAssociationOutput) {
    /**
     * @internal
     */
    UpdateFileSystemAssociationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFileSystemAssociationOutput = exports.UpdateFileSystemAssociationOutput || (exports.UpdateFileSystemAssociationOutput = {}));
var UpdateGatewayInformationInput;
(function (UpdateGatewayInformationInput) {
    /**
     * @internal
     */
    UpdateGatewayInformationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewayInformationInput = exports.UpdateGatewayInformationInput || (exports.UpdateGatewayInformationInput = {}));
var UpdateGatewayInformationOutput;
(function (UpdateGatewayInformationOutput) {
    /**
     * @internal
     */
    UpdateGatewayInformationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewayInformationOutput = exports.UpdateGatewayInformationOutput || (exports.UpdateGatewayInformationOutput = {}));
var UpdateGatewaySoftwareNowInput;
(function (UpdateGatewaySoftwareNowInput) {
    /**
     * @internal
     */
    UpdateGatewaySoftwareNowInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewaySoftwareNowInput = exports.UpdateGatewaySoftwareNowInput || (exports.UpdateGatewaySoftwareNowInput = {}));
var UpdateGatewaySoftwareNowOutput;
(function (UpdateGatewaySoftwareNowOutput) {
    /**
     * @internal
     */
    UpdateGatewaySoftwareNowOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGatewaySoftwareNowOutput = exports.UpdateGatewaySoftwareNowOutput || (exports.UpdateGatewaySoftwareNowOutput = {}));
var UpdateMaintenanceStartTimeInput;
(function (UpdateMaintenanceStartTimeInput) {
    /**
     * @internal
     */
    UpdateMaintenanceStartTimeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMaintenanceStartTimeInput = exports.UpdateMaintenanceStartTimeInput || (exports.UpdateMaintenanceStartTimeInput = {}));
var UpdateMaintenanceStartTimeOutput;
(function (UpdateMaintenanceStartTimeOutput) {
    /**
     * @internal
     */
    UpdateMaintenanceStartTimeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMaintenanceStartTimeOutput = exports.UpdateMaintenanceStartTimeOutput || (exports.UpdateMaintenanceStartTimeOutput = {}));
var UpdateNFSFileShareInput;
(function (UpdateNFSFileShareInput) {
    /**
     * @internal
     */
    UpdateNFSFileShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNFSFileShareInput = exports.UpdateNFSFileShareInput || (exports.UpdateNFSFileShareInput = {}));
var UpdateNFSFileShareOutput;
(function (UpdateNFSFileShareOutput) {
    /**
     * @internal
     */
    UpdateNFSFileShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNFSFileShareOutput = exports.UpdateNFSFileShareOutput || (exports.UpdateNFSFileShareOutput = {}));
var UpdateSMBFileShareInput;
(function (UpdateSMBFileShareInput) {
    /**
     * @internal
     */
    UpdateSMBFileShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBFileShareInput = exports.UpdateSMBFileShareInput || (exports.UpdateSMBFileShareInput = {}));
var UpdateSMBFileShareOutput;
(function (UpdateSMBFileShareOutput) {
    /**
     * @internal
     */
    UpdateSMBFileShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBFileShareOutput = exports.UpdateSMBFileShareOutput || (exports.UpdateSMBFileShareOutput = {}));
var UpdateSMBFileShareVisibilityInput;
(function (UpdateSMBFileShareVisibilityInput) {
    /**
     * @internal
     */
    UpdateSMBFileShareVisibilityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBFileShareVisibilityInput = exports.UpdateSMBFileShareVisibilityInput || (exports.UpdateSMBFileShareVisibilityInput = {}));
var UpdateSMBFileShareVisibilityOutput;
(function (UpdateSMBFileShareVisibilityOutput) {
    /**
     * @internal
     */
    UpdateSMBFileShareVisibilityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBFileShareVisibilityOutput = exports.UpdateSMBFileShareVisibilityOutput || (exports.UpdateSMBFileShareVisibilityOutput = {}));
var UpdateSMBSecurityStrategyInput;
(function (UpdateSMBSecurityStrategyInput) {
    /**
     * @internal
     */
    UpdateSMBSecurityStrategyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBSecurityStrategyInput = exports.UpdateSMBSecurityStrategyInput || (exports.UpdateSMBSecurityStrategyInput = {}));
var UpdateSMBSecurityStrategyOutput;
(function (UpdateSMBSecurityStrategyOutput) {
    /**
     * @internal
     */
    UpdateSMBSecurityStrategyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSMBSecurityStrategyOutput = exports.UpdateSMBSecurityStrategyOutput || (exports.UpdateSMBSecurityStrategyOutput = {}));
var UpdateSnapshotScheduleInput;
(function (UpdateSnapshotScheduleInput) {
    /**
     * @internal
     */
    UpdateSnapshotScheduleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSnapshotScheduleInput = exports.UpdateSnapshotScheduleInput || (exports.UpdateSnapshotScheduleInput = {}));
var UpdateSnapshotScheduleOutput;
(function (UpdateSnapshotScheduleOutput) {
    /**
     * @internal
     */
    UpdateSnapshotScheduleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSnapshotScheduleOutput = exports.UpdateSnapshotScheduleOutput || (exports.UpdateSnapshotScheduleOutput = {}));
var UpdateVTLDeviceTypeInput;
(function (UpdateVTLDeviceTypeInput) {
    /**
     * @internal
     */
    UpdateVTLDeviceTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVTLDeviceTypeInput = exports.UpdateVTLDeviceTypeInput || (exports.UpdateVTLDeviceTypeInput = {}));
var UpdateVTLDeviceTypeOutput;
(function (UpdateVTLDeviceTypeOutput) {
    /**
     * @internal
     */
    UpdateVTLDeviceTypeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVTLDeviceTypeOutput = exports.UpdateVTLDeviceTypeOutput || (exports.UpdateVTLDeviceTypeOutput = {}));
//# sourceMappingURL=models_0.js.map