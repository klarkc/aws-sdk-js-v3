import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var ActivateGatewayInput;
(function (ActivateGatewayInput) {
    /**
     * @internal
     */
    ActivateGatewayInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateGatewayInput || (ActivateGatewayInput = {}));
export var ActivateGatewayOutput;
(function (ActivateGatewayOutput) {
    /**
     * @internal
     */
    ActivateGatewayOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateGatewayOutput || (ActivateGatewayOutput = {}));
export var StorageGatewayError;
(function (StorageGatewayError) {
    /**
     * @internal
     */
    StorageGatewayError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageGatewayError || (StorageGatewayError = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var InvalidGatewayRequestException;
(function (InvalidGatewayRequestException) {
    /**
     * @internal
     */
    InvalidGatewayRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidGatewayRequestException || (InvalidGatewayRequestException = {}));
export var AddCacheInput;
(function (AddCacheInput) {
    /**
     * @internal
     */
    AddCacheInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddCacheInput || (AddCacheInput = {}));
export var AddCacheOutput;
(function (AddCacheOutput) {
    /**
     * @internal
     */
    AddCacheOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddCacheOutput || (AddCacheOutput = {}));
export var AddTagsToResourceInput;
(function (AddTagsToResourceInput) {
    /**
     * @internal
     */
    AddTagsToResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceInput || (AddTagsToResourceInput = {}));
export var AddTagsToResourceOutput;
(function (AddTagsToResourceOutput) {
    /**
     * @internal
     */
    AddTagsToResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceOutput || (AddTagsToResourceOutput = {}));
export var AddUploadBufferInput;
(function (AddUploadBufferInput) {
    /**
     * @internal
     */
    AddUploadBufferInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddUploadBufferInput || (AddUploadBufferInput = {}));
export var AddUploadBufferOutput;
(function (AddUploadBufferOutput) {
    /**
     * @internal
     */
    AddUploadBufferOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddUploadBufferOutput || (AddUploadBufferOutput = {}));
export var AddWorkingStorageInput;
(function (AddWorkingStorageInput) {
    /**
     * @internal
     */
    AddWorkingStorageInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddWorkingStorageInput || (AddWorkingStorageInput = {}));
export var AddWorkingStorageOutput;
(function (AddWorkingStorageOutput) {
    /**
     * @internal
     */
    AddWorkingStorageOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddWorkingStorageOutput || (AddWorkingStorageOutput = {}));
export var AssignTapePoolInput;
(function (AssignTapePoolInput) {
    /**
     * @internal
     */
    AssignTapePoolInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssignTapePoolInput || (AssignTapePoolInput = {}));
export var AssignTapePoolOutput;
(function (AssignTapePoolOutput) {
    /**
     * @internal
     */
    AssignTapePoolOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssignTapePoolOutput || (AssignTapePoolOutput = {}));
export var CacheAttributes;
(function (CacheAttributes) {
    /**
     * @internal
     */
    CacheAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CacheAttributes || (CacheAttributes = {}));
export var AssociateFileSystemInput;
(function (AssociateFileSystemInput) {
    /**
     * @internal
     */
    AssociateFileSystemInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(AssociateFileSystemInput || (AssociateFileSystemInput = {}));
export var AssociateFileSystemOutput;
(function (AssociateFileSystemOutput) {
    /**
     * @internal
     */
    AssociateFileSystemOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateFileSystemOutput || (AssociateFileSystemOutput = {}));
export var AttachVolumeInput;
(function (AttachVolumeInput) {
    /**
     * @internal
     */
    AttachVolumeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachVolumeInput || (AttachVolumeInput = {}));
export var AttachVolumeOutput;
(function (AttachVolumeOutput) {
    /**
     * @internal
     */
    AttachVolumeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachVolumeOutput || (AttachVolumeOutput = {}));
export var AutomaticTapeCreationRule;
(function (AutomaticTapeCreationRule) {
    /**
     * @internal
     */
    AutomaticTapeCreationRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomaticTapeCreationRule || (AutomaticTapeCreationRule = {}));
export var AutomaticTapeCreationPolicyInfo;
(function (AutomaticTapeCreationPolicyInfo) {
    /**
     * @internal
     */
    AutomaticTapeCreationPolicyInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomaticTapeCreationPolicyInfo || (AutomaticTapeCreationPolicyInfo = {}));
export var BandwidthRateLimitInterval;
(function (BandwidthRateLimitInterval) {
    /**
     * @internal
     */
    BandwidthRateLimitInterval.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BandwidthRateLimitInterval || (BandwidthRateLimitInterval = {}));
export var VolumeiSCSIAttributes;
(function (VolumeiSCSIAttributes) {
    /**
     * @internal
     */
    VolumeiSCSIAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeiSCSIAttributes || (VolumeiSCSIAttributes = {}));
export var CachediSCSIVolume;
(function (CachediSCSIVolume) {
    /**
     * @internal
     */
    CachediSCSIVolume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CachediSCSIVolume || (CachediSCSIVolume = {}));
export var CancelArchivalInput;
(function (CancelArchivalInput) {
    /**
     * @internal
     */
    CancelArchivalInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelArchivalInput || (CancelArchivalInput = {}));
export var CancelArchivalOutput;
(function (CancelArchivalOutput) {
    /**
     * @internal
     */
    CancelArchivalOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelArchivalOutput || (CancelArchivalOutput = {}));
export var CancelRetrievalInput;
(function (CancelRetrievalInput) {
    /**
     * @internal
     */
    CancelRetrievalInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelRetrievalInput || (CancelRetrievalInput = {}));
export var CancelRetrievalOutput;
(function (CancelRetrievalOutput) {
    /**
     * @internal
     */
    CancelRetrievalOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelRetrievalOutput || (CancelRetrievalOutput = {}));
export var ChapInfo;
(function (ChapInfo) {
    /**
     * @internal
     */
    ChapInfo.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING })), (obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }))); };
})(ChapInfo || (ChapInfo = {}));
export var CreateCachediSCSIVolumeInput;
(function (CreateCachediSCSIVolumeInput) {
    /**
     * @internal
     */
    CreateCachediSCSIVolumeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCachediSCSIVolumeInput || (CreateCachediSCSIVolumeInput = {}));
export var CreateCachediSCSIVolumeOutput;
(function (CreateCachediSCSIVolumeOutput) {
    /**
     * @internal
     */
    CreateCachediSCSIVolumeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCachediSCSIVolumeOutput || (CreateCachediSCSIVolumeOutput = {}));
export var NFSFileShareDefaults;
(function (NFSFileShareDefaults) {
    /**
     * @internal
     */
    NFSFileShareDefaults.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NFSFileShareDefaults || (NFSFileShareDefaults = {}));
export var CreateNFSFileShareInput;
(function (CreateNFSFileShareInput) {
    /**
     * @internal
     */
    CreateNFSFileShareInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNFSFileShareInput || (CreateNFSFileShareInput = {}));
export var CreateNFSFileShareOutput;
(function (CreateNFSFileShareOutput) {
    /**
     * @internal
     */
    CreateNFSFileShareOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNFSFileShareOutput || (CreateNFSFileShareOutput = {}));
export var CreateSMBFileShareInput;
(function (CreateSMBFileShareInput) {
    /**
     * @internal
     */
    CreateSMBFileShareInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSMBFileShareInput || (CreateSMBFileShareInput = {}));
export var CreateSMBFileShareOutput;
(function (CreateSMBFileShareOutput) {
    /**
     * @internal
     */
    CreateSMBFileShareOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSMBFileShareOutput || (CreateSMBFileShareOutput = {}));
export var CreateSnapshotInput;
(function (CreateSnapshotInput) {
    /**
     * @internal
     */
    CreateSnapshotInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotInput || (CreateSnapshotInput = {}));
export var CreateSnapshotOutput;
(function (CreateSnapshotOutput) {
    /**
     * @internal
     */
    CreateSnapshotOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotOutput || (CreateSnapshotOutput = {}));
export var ServiceUnavailableError;
(function (ServiceUnavailableError) {
    /**
     * @internal
     */
    ServiceUnavailableError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableError || (ServiceUnavailableError = {}));
export var CreateSnapshotFromVolumeRecoveryPointInput;
(function (CreateSnapshotFromVolumeRecoveryPointInput) {
    /**
     * @internal
     */
    CreateSnapshotFromVolumeRecoveryPointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotFromVolumeRecoveryPointInput || (CreateSnapshotFromVolumeRecoveryPointInput = {}));
export var CreateSnapshotFromVolumeRecoveryPointOutput;
(function (CreateSnapshotFromVolumeRecoveryPointOutput) {
    /**
     * @internal
     */
    CreateSnapshotFromVolumeRecoveryPointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSnapshotFromVolumeRecoveryPointOutput || (CreateSnapshotFromVolumeRecoveryPointOutput = {}));
export var CreateStorediSCSIVolumeInput;
(function (CreateStorediSCSIVolumeInput) {
    /**
     * @internal
     */
    CreateStorediSCSIVolumeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStorediSCSIVolumeInput || (CreateStorediSCSIVolumeInput = {}));
export var CreateStorediSCSIVolumeOutput;
(function (CreateStorediSCSIVolumeOutput) {
    /**
     * @internal
     */
    CreateStorediSCSIVolumeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStorediSCSIVolumeOutput || (CreateStorediSCSIVolumeOutput = {}));
export var CreateTapePoolInput;
(function (CreateTapePoolInput) {
    /**
     * @internal
     */
    CreateTapePoolInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapePoolInput || (CreateTapePoolInput = {}));
export var CreateTapePoolOutput;
(function (CreateTapePoolOutput) {
    /**
     * @internal
     */
    CreateTapePoolOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapePoolOutput || (CreateTapePoolOutput = {}));
export var CreateTapesInput;
(function (CreateTapesInput) {
    /**
     * @internal
     */
    CreateTapesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapesInput || (CreateTapesInput = {}));
export var CreateTapesOutput;
(function (CreateTapesOutput) {
    /**
     * @internal
     */
    CreateTapesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapesOutput || (CreateTapesOutput = {}));
export var CreateTapeWithBarcodeInput;
(function (CreateTapeWithBarcodeInput) {
    /**
     * @internal
     */
    CreateTapeWithBarcodeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapeWithBarcodeInput || (CreateTapeWithBarcodeInput = {}));
export var CreateTapeWithBarcodeOutput;
(function (CreateTapeWithBarcodeOutput) {
    /**
     * @internal
     */
    CreateTapeWithBarcodeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTapeWithBarcodeOutput || (CreateTapeWithBarcodeOutput = {}));
export var DeleteAutomaticTapeCreationPolicyInput;
(function (DeleteAutomaticTapeCreationPolicyInput) {
    /**
     * @internal
     */
    DeleteAutomaticTapeCreationPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAutomaticTapeCreationPolicyInput || (DeleteAutomaticTapeCreationPolicyInput = {}));
export var DeleteAutomaticTapeCreationPolicyOutput;
(function (DeleteAutomaticTapeCreationPolicyOutput) {
    /**
     * @internal
     */
    DeleteAutomaticTapeCreationPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAutomaticTapeCreationPolicyOutput || (DeleteAutomaticTapeCreationPolicyOutput = {}));
export var DeleteBandwidthRateLimitInput;
(function (DeleteBandwidthRateLimitInput) {
    /**
     * @internal
     */
    DeleteBandwidthRateLimitInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBandwidthRateLimitInput || (DeleteBandwidthRateLimitInput = {}));
export var DeleteBandwidthRateLimitOutput;
(function (DeleteBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    DeleteBandwidthRateLimitOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBandwidthRateLimitOutput || (DeleteBandwidthRateLimitOutput = {}));
export var DeleteChapCredentialsInput;
(function (DeleteChapCredentialsInput) {
    /**
     * @internal
     */
    DeleteChapCredentialsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteChapCredentialsInput || (DeleteChapCredentialsInput = {}));
export var DeleteChapCredentialsOutput;
(function (DeleteChapCredentialsOutput) {
    /**
     * @internal
     */
    DeleteChapCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteChapCredentialsOutput || (DeleteChapCredentialsOutput = {}));
export var DeleteFileShareInput;
(function (DeleteFileShareInput) {
    /**
     * @internal
     */
    DeleteFileShareInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileShareInput || (DeleteFileShareInput = {}));
export var DeleteFileShareOutput;
(function (DeleteFileShareOutput) {
    /**
     * @internal
     */
    DeleteFileShareOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFileShareOutput || (DeleteFileShareOutput = {}));
export var DeleteGatewayInput;
(function (DeleteGatewayInput) {
    /**
     * @internal
     */
    DeleteGatewayInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGatewayInput || (DeleteGatewayInput = {}));
export var DeleteGatewayOutput;
(function (DeleteGatewayOutput) {
    /**
     * @internal
     */
    DeleteGatewayOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGatewayOutput || (DeleteGatewayOutput = {}));
export var DeleteSnapshotScheduleInput;
(function (DeleteSnapshotScheduleInput) {
    /**
     * @internal
     */
    DeleteSnapshotScheduleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSnapshotScheduleInput || (DeleteSnapshotScheduleInput = {}));
export var DeleteSnapshotScheduleOutput;
(function (DeleteSnapshotScheduleOutput) {
    /**
     * @internal
     */
    DeleteSnapshotScheduleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSnapshotScheduleOutput || (DeleteSnapshotScheduleOutput = {}));
export var DeleteTapeInput;
(function (DeleteTapeInput) {
    /**
     * @internal
     */
    DeleteTapeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapeInput || (DeleteTapeInput = {}));
export var DeleteTapeOutput;
(function (DeleteTapeOutput) {
    /**
     * @internal
     */
    DeleteTapeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapeOutput || (DeleteTapeOutput = {}));
export var DeleteTapeArchiveInput;
(function (DeleteTapeArchiveInput) {
    /**
     * @internal
     */
    DeleteTapeArchiveInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapeArchiveInput || (DeleteTapeArchiveInput = {}));
export var DeleteTapeArchiveOutput;
(function (DeleteTapeArchiveOutput) {
    /**
     * @internal
     */
    DeleteTapeArchiveOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapeArchiveOutput || (DeleteTapeArchiveOutput = {}));
export var DeleteTapePoolInput;
(function (DeleteTapePoolInput) {
    /**
     * @internal
     */
    DeleteTapePoolInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapePoolInput || (DeleteTapePoolInput = {}));
export var DeleteTapePoolOutput;
(function (DeleteTapePoolOutput) {
    /**
     * @internal
     */
    DeleteTapePoolOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTapePoolOutput || (DeleteTapePoolOutput = {}));
export var DeleteVolumeInput;
(function (DeleteVolumeInput) {
    /**
     * @internal
     */
    DeleteVolumeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVolumeInput || (DeleteVolumeInput = {}));
export var DeleteVolumeOutput;
(function (DeleteVolumeOutput) {
    /**
     * @internal
     */
    DeleteVolumeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVolumeOutput || (DeleteVolumeOutput = {}));
export var DescribeAvailabilityMonitorTestInput;
(function (DescribeAvailabilityMonitorTestInput) {
    /**
     * @internal
     */
    DescribeAvailabilityMonitorTestInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAvailabilityMonitorTestInput || (DescribeAvailabilityMonitorTestInput = {}));
export var DescribeAvailabilityMonitorTestOutput;
(function (DescribeAvailabilityMonitorTestOutput) {
    /**
     * @internal
     */
    DescribeAvailabilityMonitorTestOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAvailabilityMonitorTestOutput || (DescribeAvailabilityMonitorTestOutput = {}));
export var DescribeBandwidthRateLimitInput;
(function (DescribeBandwidthRateLimitInput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBandwidthRateLimitInput || (DescribeBandwidthRateLimitInput = {}));
export var DescribeBandwidthRateLimitOutput;
(function (DescribeBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBandwidthRateLimitOutput || (DescribeBandwidthRateLimitOutput = {}));
export var DescribeBandwidthRateLimitScheduleInput;
(function (DescribeBandwidthRateLimitScheduleInput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitScheduleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBandwidthRateLimitScheduleInput || (DescribeBandwidthRateLimitScheduleInput = {}));
export var DescribeBandwidthRateLimitScheduleOutput;
(function (DescribeBandwidthRateLimitScheduleOutput) {
    /**
     * @internal
     */
    DescribeBandwidthRateLimitScheduleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBandwidthRateLimitScheduleOutput || (DescribeBandwidthRateLimitScheduleOutput = {}));
export var DescribeCacheInput;
(function (DescribeCacheInput) {
    /**
     * @internal
     */
    DescribeCacheInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCacheInput || (DescribeCacheInput = {}));
export var DescribeCacheOutput;
(function (DescribeCacheOutput) {
    /**
     * @internal
     */
    DescribeCacheOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCacheOutput || (DescribeCacheOutput = {}));
export var DescribeCachediSCSIVolumesInput;
(function (DescribeCachediSCSIVolumesInput) {
    /**
     * @internal
     */
    DescribeCachediSCSIVolumesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCachediSCSIVolumesInput || (DescribeCachediSCSIVolumesInput = {}));
export var DescribeCachediSCSIVolumesOutput;
(function (DescribeCachediSCSIVolumesOutput) {
    /**
     * @internal
     */
    DescribeCachediSCSIVolumesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCachediSCSIVolumesOutput || (DescribeCachediSCSIVolumesOutput = {}));
export var DescribeChapCredentialsInput;
(function (DescribeChapCredentialsInput) {
    /**
     * @internal
     */
    DescribeChapCredentialsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeChapCredentialsInput || (DescribeChapCredentialsInput = {}));
export var DescribeChapCredentialsOutput;
(function (DescribeChapCredentialsOutput) {
    /**
     * @internal
     */
    DescribeChapCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ChapCredentials && {
        ChapCredentials: obj.ChapCredentials.map(function (item) { return ChapInfo.filterSensitiveLog(item); }),
    }))); };
})(DescribeChapCredentialsOutput || (DescribeChapCredentialsOutput = {}));
export var DescribeFileSystemAssociationsInput;
(function (DescribeFileSystemAssociationsInput) {
    /**
     * @internal
     */
    DescribeFileSystemAssociationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemAssociationsInput || (DescribeFileSystemAssociationsInput = {}));
export var FileSystemAssociationInfo;
(function (FileSystemAssociationInfo) {
    /**
     * @internal
     */
    FileSystemAssociationInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemAssociationInfo || (FileSystemAssociationInfo = {}));
export var DescribeFileSystemAssociationsOutput;
(function (DescribeFileSystemAssociationsOutput) {
    /**
     * @internal
     */
    DescribeFileSystemAssociationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFileSystemAssociationsOutput || (DescribeFileSystemAssociationsOutput = {}));
export var DescribeGatewayInformationInput;
(function (DescribeGatewayInformationInput) {
    /**
     * @internal
     */
    DescribeGatewayInformationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGatewayInformationInput || (DescribeGatewayInformationInput = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var DescribeGatewayInformationOutput;
(function (DescribeGatewayInformationOutput) {
    /**
     * @internal
     */
    DescribeGatewayInformationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGatewayInformationOutput || (DescribeGatewayInformationOutput = {}));
export var DescribeMaintenanceStartTimeInput;
(function (DescribeMaintenanceStartTimeInput) {
    /**
     * @internal
     */
    DescribeMaintenanceStartTimeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceStartTimeInput || (DescribeMaintenanceStartTimeInput = {}));
export var DescribeMaintenanceStartTimeOutput;
(function (DescribeMaintenanceStartTimeOutput) {
    /**
     * @internal
     */
    DescribeMaintenanceStartTimeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceStartTimeOutput || (DescribeMaintenanceStartTimeOutput = {}));
export var DescribeNFSFileSharesInput;
(function (DescribeNFSFileSharesInput) {
    /**
     * @internal
     */
    DescribeNFSFileSharesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNFSFileSharesInput || (DescribeNFSFileSharesInput = {}));
export var NFSFileShareInfo;
(function (NFSFileShareInfo) {
    /**
     * @internal
     */
    NFSFileShareInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NFSFileShareInfo || (NFSFileShareInfo = {}));
export var DescribeNFSFileSharesOutput;
(function (DescribeNFSFileSharesOutput) {
    /**
     * @internal
     */
    DescribeNFSFileSharesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNFSFileSharesOutput || (DescribeNFSFileSharesOutput = {}));
export var DescribeSMBFileSharesInput;
(function (DescribeSMBFileSharesInput) {
    /**
     * @internal
     */
    DescribeSMBFileSharesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSMBFileSharesInput || (DescribeSMBFileSharesInput = {}));
export var SMBFileShareInfo;
(function (SMBFileShareInfo) {
    /**
     * @internal
     */
    SMBFileShareInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMBFileShareInfo || (SMBFileShareInfo = {}));
export var DescribeSMBFileSharesOutput;
(function (DescribeSMBFileSharesOutput) {
    /**
     * @internal
     */
    DescribeSMBFileSharesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSMBFileSharesOutput || (DescribeSMBFileSharesOutput = {}));
export var DescribeSMBSettingsInput;
(function (DescribeSMBSettingsInput) {
    /**
     * @internal
     */
    DescribeSMBSettingsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSMBSettingsInput || (DescribeSMBSettingsInput = {}));
export var DescribeSMBSettingsOutput;
(function (DescribeSMBSettingsOutput) {
    /**
     * @internal
     */
    DescribeSMBSettingsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSMBSettingsOutput || (DescribeSMBSettingsOutput = {}));
export var DescribeSnapshotScheduleInput;
(function (DescribeSnapshotScheduleInput) {
    /**
     * @internal
     */
    DescribeSnapshotScheduleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSnapshotScheduleInput || (DescribeSnapshotScheduleInput = {}));
export var DescribeSnapshotScheduleOutput;
(function (DescribeSnapshotScheduleOutput) {
    /**
     * @internal
     */
    DescribeSnapshotScheduleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSnapshotScheduleOutput || (DescribeSnapshotScheduleOutput = {}));
export var DescribeStorediSCSIVolumesInput;
(function (DescribeStorediSCSIVolumesInput) {
    /**
     * @internal
     */
    DescribeStorediSCSIVolumesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStorediSCSIVolumesInput || (DescribeStorediSCSIVolumesInput = {}));
export var StorediSCSIVolume;
(function (StorediSCSIVolume) {
    /**
     * @internal
     */
    StorediSCSIVolume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorediSCSIVolume || (StorediSCSIVolume = {}));
export var DescribeStorediSCSIVolumesOutput;
(function (DescribeStorediSCSIVolumesOutput) {
    /**
     * @internal
     */
    DescribeStorediSCSIVolumesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStorediSCSIVolumesOutput || (DescribeStorediSCSIVolumesOutput = {}));
export var DescribeTapeArchivesInput;
(function (DescribeTapeArchivesInput) {
    /**
     * @internal
     */
    DescribeTapeArchivesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapeArchivesInput || (DescribeTapeArchivesInput = {}));
export var TapeArchive;
(function (TapeArchive) {
    /**
     * @internal
     */
    TapeArchive.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TapeArchive || (TapeArchive = {}));
export var DescribeTapeArchivesOutput;
(function (DescribeTapeArchivesOutput) {
    /**
     * @internal
     */
    DescribeTapeArchivesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapeArchivesOutput || (DescribeTapeArchivesOutput = {}));
export var DescribeTapeRecoveryPointsInput;
(function (DescribeTapeRecoveryPointsInput) {
    /**
     * @internal
     */
    DescribeTapeRecoveryPointsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapeRecoveryPointsInput || (DescribeTapeRecoveryPointsInput = {}));
export var TapeRecoveryPointInfo;
(function (TapeRecoveryPointInfo) {
    /**
     * @internal
     */
    TapeRecoveryPointInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TapeRecoveryPointInfo || (TapeRecoveryPointInfo = {}));
export var DescribeTapeRecoveryPointsOutput;
(function (DescribeTapeRecoveryPointsOutput) {
    /**
     * @internal
     */
    DescribeTapeRecoveryPointsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapeRecoveryPointsOutput || (DescribeTapeRecoveryPointsOutput = {}));
export var DescribeTapesInput;
(function (DescribeTapesInput) {
    /**
     * @internal
     */
    DescribeTapesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapesInput || (DescribeTapesInput = {}));
export var Tape;
(function (Tape) {
    /**
     * @internal
     */
    Tape.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tape || (Tape = {}));
export var DescribeTapesOutput;
(function (DescribeTapesOutput) {
    /**
     * @internal
     */
    DescribeTapesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTapesOutput || (DescribeTapesOutput = {}));
export var DescribeUploadBufferInput;
(function (DescribeUploadBufferInput) {
    /**
     * @internal
     */
    DescribeUploadBufferInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUploadBufferInput || (DescribeUploadBufferInput = {}));
export var DescribeUploadBufferOutput;
(function (DescribeUploadBufferOutput) {
    /**
     * @internal
     */
    DescribeUploadBufferOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUploadBufferOutput || (DescribeUploadBufferOutput = {}));
export var DescribeVTLDevicesInput;
(function (DescribeVTLDevicesInput) {
    /**
     * @internal
     */
    DescribeVTLDevicesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVTLDevicesInput || (DescribeVTLDevicesInput = {}));
export var DeviceiSCSIAttributes;
(function (DeviceiSCSIAttributes) {
    /**
     * @internal
     */
    DeviceiSCSIAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceiSCSIAttributes || (DeviceiSCSIAttributes = {}));
export var VTLDevice;
(function (VTLDevice) {
    /**
     * @internal
     */
    VTLDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VTLDevice || (VTLDevice = {}));
export var DescribeVTLDevicesOutput;
(function (DescribeVTLDevicesOutput) {
    /**
     * @internal
     */
    DescribeVTLDevicesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVTLDevicesOutput || (DescribeVTLDevicesOutput = {}));
export var DescribeWorkingStorageInput;
(function (DescribeWorkingStorageInput) {
    /**
     * @internal
     */
    DescribeWorkingStorageInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorkingStorageInput || (DescribeWorkingStorageInput = {}));
export var DescribeWorkingStorageOutput;
(function (DescribeWorkingStorageOutput) {
    /**
     * @internal
     */
    DescribeWorkingStorageOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorkingStorageOutput || (DescribeWorkingStorageOutput = {}));
export var DetachVolumeInput;
(function (DetachVolumeInput) {
    /**
     * @internal
     */
    DetachVolumeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachVolumeInput || (DetachVolumeInput = {}));
export var DetachVolumeOutput;
(function (DetachVolumeOutput) {
    /**
     * @internal
     */
    DetachVolumeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachVolumeOutput || (DetachVolumeOutput = {}));
export var DisableGatewayInput;
(function (DisableGatewayInput) {
    /**
     * @internal
     */
    DisableGatewayInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableGatewayInput || (DisableGatewayInput = {}));
export var DisableGatewayOutput;
(function (DisableGatewayOutput) {
    /**
     * @internal
     */
    DisableGatewayOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableGatewayOutput || (DisableGatewayOutput = {}));
export var DisassociateFileSystemInput;
(function (DisassociateFileSystemInput) {
    /**
     * @internal
     */
    DisassociateFileSystemInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFileSystemInput || (DisassociateFileSystemInput = {}));
export var DisassociateFileSystemOutput;
(function (DisassociateFileSystemOutput) {
    /**
     * @internal
     */
    DisassociateFileSystemOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFileSystemOutput || (DisassociateFileSystemOutput = {}));
export var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Disk || (Disk = {}));
export var FileShareInfo;
(function (FileShareInfo) {
    /**
     * @internal
     */
    FileShareInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileShareInfo || (FileShareInfo = {}));
export var FileSystemAssociationSummary;
(function (FileSystemAssociationSummary) {
    /**
     * @internal
     */
    FileSystemAssociationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSystemAssociationSummary || (FileSystemAssociationSummary = {}));
export var GatewayInfo;
(function (GatewayInfo) {
    /**
     * @internal
     */
    GatewayInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GatewayInfo || (GatewayInfo = {}));
export var JoinDomainInput;
(function (JoinDomainInput) {
    /**
     * @internal
     */
    JoinDomainInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(JoinDomainInput || (JoinDomainInput = {}));
export var JoinDomainOutput;
(function (JoinDomainOutput) {
    /**
     * @internal
     */
    JoinDomainOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JoinDomainOutput || (JoinDomainOutput = {}));
export var ListAutomaticTapeCreationPoliciesInput;
(function (ListAutomaticTapeCreationPoliciesInput) {
    /**
     * @internal
     */
    ListAutomaticTapeCreationPoliciesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAutomaticTapeCreationPoliciesInput || (ListAutomaticTapeCreationPoliciesInput = {}));
export var ListAutomaticTapeCreationPoliciesOutput;
(function (ListAutomaticTapeCreationPoliciesOutput) {
    /**
     * @internal
     */
    ListAutomaticTapeCreationPoliciesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAutomaticTapeCreationPoliciesOutput || (ListAutomaticTapeCreationPoliciesOutput = {}));
export var ListFileSharesInput;
(function (ListFileSharesInput) {
    /**
     * @internal
     */
    ListFileSharesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFileSharesInput || (ListFileSharesInput = {}));
export var ListFileSharesOutput;
(function (ListFileSharesOutput) {
    /**
     * @internal
     */
    ListFileSharesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFileSharesOutput || (ListFileSharesOutput = {}));
export var ListFileSystemAssociationsInput;
(function (ListFileSystemAssociationsInput) {
    /**
     * @internal
     */
    ListFileSystemAssociationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFileSystemAssociationsInput || (ListFileSystemAssociationsInput = {}));
export var ListFileSystemAssociationsOutput;
(function (ListFileSystemAssociationsOutput) {
    /**
     * @internal
     */
    ListFileSystemAssociationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFileSystemAssociationsOutput || (ListFileSystemAssociationsOutput = {}));
export var ListGatewaysInput;
(function (ListGatewaysInput) {
    /**
     * @internal
     */
    ListGatewaysInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGatewaysInput || (ListGatewaysInput = {}));
export var ListGatewaysOutput;
(function (ListGatewaysOutput) {
    /**
     * @internal
     */
    ListGatewaysOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGatewaysOutput || (ListGatewaysOutput = {}));
export var ListLocalDisksInput;
(function (ListLocalDisksInput) {
    /**
     * @internal
     */
    ListLocalDisksInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLocalDisksInput || (ListLocalDisksInput = {}));
export var ListLocalDisksOutput;
(function (ListLocalDisksOutput) {
    /**
     * @internal
     */
    ListLocalDisksOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLocalDisksOutput || (ListLocalDisksOutput = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var ListTapePoolsInput;
(function (ListTapePoolsInput) {
    /**
     * @internal
     */
    ListTapePoolsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTapePoolsInput || (ListTapePoolsInput = {}));
export var PoolInfo;
(function (PoolInfo) {
    /**
     * @internal
     */
    PoolInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PoolInfo || (PoolInfo = {}));
export var ListTapePoolsOutput;
(function (ListTapePoolsOutput) {
    /**
     * @internal
     */
    ListTapePoolsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTapePoolsOutput || (ListTapePoolsOutput = {}));
export var ListTapesInput;
(function (ListTapesInput) {
    /**
     * @internal
     */
    ListTapesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTapesInput || (ListTapesInput = {}));
export var TapeInfo;
(function (TapeInfo) {
    /**
     * @internal
     */
    TapeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TapeInfo || (TapeInfo = {}));
export var ListTapesOutput;
(function (ListTapesOutput) {
    /**
     * @internal
     */
    ListTapesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTapesOutput || (ListTapesOutput = {}));
export var ListVolumeInitiatorsInput;
(function (ListVolumeInitiatorsInput) {
    /**
     * @internal
     */
    ListVolumeInitiatorsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumeInitiatorsInput || (ListVolumeInitiatorsInput = {}));
export var ListVolumeInitiatorsOutput;
(function (ListVolumeInitiatorsOutput) {
    /**
     * @internal
     */
    ListVolumeInitiatorsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumeInitiatorsOutput || (ListVolumeInitiatorsOutput = {}));
export var ListVolumeRecoveryPointsInput;
(function (ListVolumeRecoveryPointsInput) {
    /**
     * @internal
     */
    ListVolumeRecoveryPointsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumeRecoveryPointsInput || (ListVolumeRecoveryPointsInput = {}));
export var VolumeRecoveryPointInfo;
(function (VolumeRecoveryPointInfo) {
    /**
     * @internal
     */
    VolumeRecoveryPointInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeRecoveryPointInfo || (VolumeRecoveryPointInfo = {}));
export var ListVolumeRecoveryPointsOutput;
(function (ListVolumeRecoveryPointsOutput) {
    /**
     * @internal
     */
    ListVolumeRecoveryPointsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumeRecoveryPointsOutput || (ListVolumeRecoveryPointsOutput = {}));
export var ListVolumesInput;
(function (ListVolumesInput) {
    /**
     * @internal
     */
    ListVolumesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumesInput || (ListVolumesInput = {}));
export var VolumeInfo;
(function (VolumeInfo) {
    /**
     * @internal
     */
    VolumeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeInfo || (VolumeInfo = {}));
export var ListVolumesOutput;
(function (ListVolumesOutput) {
    /**
     * @internal
     */
    ListVolumesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVolumesOutput || (ListVolumesOutput = {}));
export var NotifyWhenUploadedInput;
(function (NotifyWhenUploadedInput) {
    /**
     * @internal
     */
    NotifyWhenUploadedInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyWhenUploadedInput || (NotifyWhenUploadedInput = {}));
export var NotifyWhenUploadedOutput;
(function (NotifyWhenUploadedOutput) {
    /**
     * @internal
     */
    NotifyWhenUploadedOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyWhenUploadedOutput || (NotifyWhenUploadedOutput = {}));
export var RefreshCacheInput;
(function (RefreshCacheInput) {
    /**
     * @internal
     */
    RefreshCacheInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RefreshCacheInput || (RefreshCacheInput = {}));
export var RefreshCacheOutput;
(function (RefreshCacheOutput) {
    /**
     * @internal
     */
    RefreshCacheOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RefreshCacheOutput || (RefreshCacheOutput = {}));
export var RemoveTagsFromResourceInput;
(function (RemoveTagsFromResourceInput) {
    /**
     * @internal
     */
    RemoveTagsFromResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceInput || (RemoveTagsFromResourceInput = {}));
export var RemoveTagsFromResourceOutput;
(function (RemoveTagsFromResourceOutput) {
    /**
     * @internal
     */
    RemoveTagsFromResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceOutput || (RemoveTagsFromResourceOutput = {}));
export var ResetCacheInput;
(function (ResetCacheInput) {
    /**
     * @internal
     */
    ResetCacheInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetCacheInput || (ResetCacheInput = {}));
export var ResetCacheOutput;
(function (ResetCacheOutput) {
    /**
     * @internal
     */
    ResetCacheOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetCacheOutput || (ResetCacheOutput = {}));
export var RetrieveTapeArchiveInput;
(function (RetrieveTapeArchiveInput) {
    /**
     * @internal
     */
    RetrieveTapeArchiveInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetrieveTapeArchiveInput || (RetrieveTapeArchiveInput = {}));
export var RetrieveTapeArchiveOutput;
(function (RetrieveTapeArchiveOutput) {
    /**
     * @internal
     */
    RetrieveTapeArchiveOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetrieveTapeArchiveOutput || (RetrieveTapeArchiveOutput = {}));
export var RetrieveTapeRecoveryPointInput;
(function (RetrieveTapeRecoveryPointInput) {
    /**
     * @internal
     */
    RetrieveTapeRecoveryPointInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetrieveTapeRecoveryPointInput || (RetrieveTapeRecoveryPointInput = {}));
export var RetrieveTapeRecoveryPointOutput;
(function (RetrieveTapeRecoveryPointOutput) {
    /**
     * @internal
     */
    RetrieveTapeRecoveryPointOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetrieveTapeRecoveryPointOutput || (RetrieveTapeRecoveryPointOutput = {}));
export var SetLocalConsolePasswordInput;
(function (SetLocalConsolePasswordInput) {
    /**
     * @internal
     */
    SetLocalConsolePasswordInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.LocalConsolePassword && { LocalConsolePassword: SENSITIVE_STRING }))); };
})(SetLocalConsolePasswordInput || (SetLocalConsolePasswordInput = {}));
export var SetLocalConsolePasswordOutput;
(function (SetLocalConsolePasswordOutput) {
    /**
     * @internal
     */
    SetLocalConsolePasswordOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetLocalConsolePasswordOutput || (SetLocalConsolePasswordOutput = {}));
export var SetSMBGuestPasswordInput;
(function (SetSMBGuestPasswordInput) {
    /**
     * @internal
     */
    SetSMBGuestPasswordInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(SetSMBGuestPasswordInput || (SetSMBGuestPasswordInput = {}));
export var SetSMBGuestPasswordOutput;
(function (SetSMBGuestPasswordOutput) {
    /**
     * @internal
     */
    SetSMBGuestPasswordOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSMBGuestPasswordOutput || (SetSMBGuestPasswordOutput = {}));
export var ShutdownGatewayInput;
(function (ShutdownGatewayInput) {
    /**
     * @internal
     */
    ShutdownGatewayInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShutdownGatewayInput || (ShutdownGatewayInput = {}));
export var ShutdownGatewayOutput;
(function (ShutdownGatewayOutput) {
    /**
     * @internal
     */
    ShutdownGatewayOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ShutdownGatewayOutput || (ShutdownGatewayOutput = {}));
export var StartAvailabilityMonitorTestInput;
(function (StartAvailabilityMonitorTestInput) {
    /**
     * @internal
     */
    StartAvailabilityMonitorTestInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAvailabilityMonitorTestInput || (StartAvailabilityMonitorTestInput = {}));
export var StartAvailabilityMonitorTestOutput;
(function (StartAvailabilityMonitorTestOutput) {
    /**
     * @internal
     */
    StartAvailabilityMonitorTestOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAvailabilityMonitorTestOutput || (StartAvailabilityMonitorTestOutput = {}));
export var StartGatewayInput;
(function (StartGatewayInput) {
    /**
     * @internal
     */
    StartGatewayInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartGatewayInput || (StartGatewayInput = {}));
export var StartGatewayOutput;
(function (StartGatewayOutput) {
    /**
     * @internal
     */
    StartGatewayOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartGatewayOutput || (StartGatewayOutput = {}));
export var UpdateAutomaticTapeCreationPolicyInput;
(function (UpdateAutomaticTapeCreationPolicyInput) {
    /**
     * @internal
     */
    UpdateAutomaticTapeCreationPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAutomaticTapeCreationPolicyInput || (UpdateAutomaticTapeCreationPolicyInput = {}));
export var UpdateAutomaticTapeCreationPolicyOutput;
(function (UpdateAutomaticTapeCreationPolicyOutput) {
    /**
     * @internal
     */
    UpdateAutomaticTapeCreationPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAutomaticTapeCreationPolicyOutput || (UpdateAutomaticTapeCreationPolicyOutput = {}));
export var UpdateBandwidthRateLimitInput;
(function (UpdateBandwidthRateLimitInput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBandwidthRateLimitInput || (UpdateBandwidthRateLimitInput = {}));
export var UpdateBandwidthRateLimitOutput;
(function (UpdateBandwidthRateLimitOutput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBandwidthRateLimitOutput || (UpdateBandwidthRateLimitOutput = {}));
export var UpdateBandwidthRateLimitScheduleInput;
(function (UpdateBandwidthRateLimitScheduleInput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitScheduleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBandwidthRateLimitScheduleInput || (UpdateBandwidthRateLimitScheduleInput = {}));
export var UpdateBandwidthRateLimitScheduleOutput;
(function (UpdateBandwidthRateLimitScheduleOutput) {
    /**
     * @internal
     */
    UpdateBandwidthRateLimitScheduleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBandwidthRateLimitScheduleOutput || (UpdateBandwidthRateLimitScheduleOutput = {}));
export var UpdateChapCredentialsInput;
(function (UpdateChapCredentialsInput) {
    /**
     * @internal
     */
    UpdateChapCredentialsInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING })), (obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }))); };
})(UpdateChapCredentialsInput || (UpdateChapCredentialsInput = {}));
export var UpdateChapCredentialsOutput;
(function (UpdateChapCredentialsOutput) {
    /**
     * @internal
     */
    UpdateChapCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateChapCredentialsOutput || (UpdateChapCredentialsOutput = {}));
export var UpdateFileSystemAssociationInput;
(function (UpdateFileSystemAssociationInput) {
    /**
     * @internal
     */
    UpdateFileSystemAssociationInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(UpdateFileSystemAssociationInput || (UpdateFileSystemAssociationInput = {}));
export var UpdateFileSystemAssociationOutput;
(function (UpdateFileSystemAssociationOutput) {
    /**
     * @internal
     */
    UpdateFileSystemAssociationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFileSystemAssociationOutput || (UpdateFileSystemAssociationOutput = {}));
export var UpdateGatewayInformationInput;
(function (UpdateGatewayInformationInput) {
    /**
     * @internal
     */
    UpdateGatewayInformationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGatewayInformationInput || (UpdateGatewayInformationInput = {}));
export var UpdateGatewayInformationOutput;
(function (UpdateGatewayInformationOutput) {
    /**
     * @internal
     */
    UpdateGatewayInformationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGatewayInformationOutput || (UpdateGatewayInformationOutput = {}));
export var UpdateGatewaySoftwareNowInput;
(function (UpdateGatewaySoftwareNowInput) {
    /**
     * @internal
     */
    UpdateGatewaySoftwareNowInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGatewaySoftwareNowInput || (UpdateGatewaySoftwareNowInput = {}));
export var UpdateGatewaySoftwareNowOutput;
(function (UpdateGatewaySoftwareNowOutput) {
    /**
     * @internal
     */
    UpdateGatewaySoftwareNowOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGatewaySoftwareNowOutput || (UpdateGatewaySoftwareNowOutput = {}));
export var UpdateMaintenanceStartTimeInput;
(function (UpdateMaintenanceStartTimeInput) {
    /**
     * @internal
     */
    UpdateMaintenanceStartTimeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMaintenanceStartTimeInput || (UpdateMaintenanceStartTimeInput = {}));
export var UpdateMaintenanceStartTimeOutput;
(function (UpdateMaintenanceStartTimeOutput) {
    /**
     * @internal
     */
    UpdateMaintenanceStartTimeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMaintenanceStartTimeOutput || (UpdateMaintenanceStartTimeOutput = {}));
export var UpdateNFSFileShareInput;
(function (UpdateNFSFileShareInput) {
    /**
     * @internal
     */
    UpdateNFSFileShareInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNFSFileShareInput || (UpdateNFSFileShareInput = {}));
export var UpdateNFSFileShareOutput;
(function (UpdateNFSFileShareOutput) {
    /**
     * @internal
     */
    UpdateNFSFileShareOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNFSFileShareOutput || (UpdateNFSFileShareOutput = {}));
export var UpdateSMBFileShareInput;
(function (UpdateSMBFileShareInput) {
    /**
     * @internal
     */
    UpdateSMBFileShareInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBFileShareInput || (UpdateSMBFileShareInput = {}));
export var UpdateSMBFileShareOutput;
(function (UpdateSMBFileShareOutput) {
    /**
     * @internal
     */
    UpdateSMBFileShareOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBFileShareOutput || (UpdateSMBFileShareOutput = {}));
export var UpdateSMBFileShareVisibilityInput;
(function (UpdateSMBFileShareVisibilityInput) {
    /**
     * @internal
     */
    UpdateSMBFileShareVisibilityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBFileShareVisibilityInput || (UpdateSMBFileShareVisibilityInput = {}));
export var UpdateSMBFileShareVisibilityOutput;
(function (UpdateSMBFileShareVisibilityOutput) {
    /**
     * @internal
     */
    UpdateSMBFileShareVisibilityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBFileShareVisibilityOutput || (UpdateSMBFileShareVisibilityOutput = {}));
export var UpdateSMBSecurityStrategyInput;
(function (UpdateSMBSecurityStrategyInput) {
    /**
     * @internal
     */
    UpdateSMBSecurityStrategyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBSecurityStrategyInput || (UpdateSMBSecurityStrategyInput = {}));
export var UpdateSMBSecurityStrategyOutput;
(function (UpdateSMBSecurityStrategyOutput) {
    /**
     * @internal
     */
    UpdateSMBSecurityStrategyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSMBSecurityStrategyOutput || (UpdateSMBSecurityStrategyOutput = {}));
export var UpdateSnapshotScheduleInput;
(function (UpdateSnapshotScheduleInput) {
    /**
     * @internal
     */
    UpdateSnapshotScheduleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSnapshotScheduleInput || (UpdateSnapshotScheduleInput = {}));
export var UpdateSnapshotScheduleOutput;
(function (UpdateSnapshotScheduleOutput) {
    /**
     * @internal
     */
    UpdateSnapshotScheduleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSnapshotScheduleOutput || (UpdateSnapshotScheduleOutput = {}));
export var UpdateVTLDeviceTypeInput;
(function (UpdateVTLDeviceTypeInput) {
    /**
     * @internal
     */
    UpdateVTLDeviceTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVTLDeviceTypeInput || (UpdateVTLDeviceTypeInput = {}));
export var UpdateVTLDeviceTypeOutput;
(function (UpdateVTLDeviceTypeOutput) {
    /**
     * @internal
     */
    UpdateVTLDeviceTypeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVTLDeviceTypeOutput || (UpdateVTLDeviceTypeOutput = {}));
//# sourceMappingURL=models_0.js.map