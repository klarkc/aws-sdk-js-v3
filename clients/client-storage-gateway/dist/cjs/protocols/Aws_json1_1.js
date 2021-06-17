"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DetachVolumeCommand = exports.serializeAws_json1_1DescribeWorkingStorageCommand = exports.serializeAws_json1_1DescribeVTLDevicesCommand = exports.serializeAws_json1_1DescribeUploadBufferCommand = exports.serializeAws_json1_1DescribeTapesCommand = exports.serializeAws_json1_1DescribeTapeRecoveryPointsCommand = exports.serializeAws_json1_1DescribeTapeArchivesCommand = exports.serializeAws_json1_1DescribeStorediSCSIVolumesCommand = exports.serializeAws_json1_1DescribeSnapshotScheduleCommand = exports.serializeAws_json1_1DescribeSMBSettingsCommand = exports.serializeAws_json1_1DescribeSMBFileSharesCommand = exports.serializeAws_json1_1DescribeNFSFileSharesCommand = exports.serializeAws_json1_1DescribeMaintenanceStartTimeCommand = exports.serializeAws_json1_1DescribeGatewayInformationCommand = exports.serializeAws_json1_1DescribeFileSystemAssociationsCommand = exports.serializeAws_json1_1DescribeChapCredentialsCommand = exports.serializeAws_json1_1DescribeCachediSCSIVolumesCommand = exports.serializeAws_json1_1DescribeCacheCommand = exports.serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = exports.serializeAws_json1_1DescribeBandwidthRateLimitCommand = exports.serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = exports.serializeAws_json1_1DeleteVolumeCommand = exports.serializeAws_json1_1DeleteTapePoolCommand = exports.serializeAws_json1_1DeleteTapeArchiveCommand = exports.serializeAws_json1_1DeleteTapeCommand = exports.serializeAws_json1_1DeleteSnapshotScheduleCommand = exports.serializeAws_json1_1DeleteGatewayCommand = exports.serializeAws_json1_1DeleteFileShareCommand = exports.serializeAws_json1_1DeleteChapCredentialsCommand = exports.serializeAws_json1_1DeleteBandwidthRateLimitCommand = exports.serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = exports.serializeAws_json1_1CreateTapeWithBarcodeCommand = exports.serializeAws_json1_1CreateTapesCommand = exports.serializeAws_json1_1CreateTapePoolCommand = exports.serializeAws_json1_1CreateStorediSCSIVolumeCommand = exports.serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = exports.serializeAws_json1_1CreateSnapshotCommand = exports.serializeAws_json1_1CreateSMBFileShareCommand = exports.serializeAws_json1_1CreateNFSFileShareCommand = exports.serializeAws_json1_1CreateCachediSCSIVolumeCommand = exports.serializeAws_json1_1CancelRetrievalCommand = exports.serializeAws_json1_1CancelArchivalCommand = exports.serializeAws_json1_1AttachVolumeCommand = exports.serializeAws_json1_1AssociateFileSystemCommand = exports.serializeAws_json1_1AssignTapePoolCommand = exports.serializeAws_json1_1AddWorkingStorageCommand = exports.serializeAws_json1_1AddUploadBufferCommand = exports.serializeAws_json1_1AddTagsToResourceCommand = exports.serializeAws_json1_1AddCacheCommand = exports.serializeAws_json1_1ActivateGatewayCommand = void 0;
exports.deserializeAws_json1_1CreateCachediSCSIVolumeCommand = exports.deserializeAws_json1_1CancelRetrievalCommand = exports.deserializeAws_json1_1CancelArchivalCommand = exports.deserializeAws_json1_1AttachVolumeCommand = exports.deserializeAws_json1_1AssociateFileSystemCommand = exports.deserializeAws_json1_1AssignTapePoolCommand = exports.deserializeAws_json1_1AddWorkingStorageCommand = exports.deserializeAws_json1_1AddUploadBufferCommand = exports.deserializeAws_json1_1AddTagsToResourceCommand = exports.deserializeAws_json1_1AddCacheCommand = exports.deserializeAws_json1_1ActivateGatewayCommand = exports.serializeAws_json1_1UpdateVTLDeviceTypeCommand = exports.serializeAws_json1_1UpdateSnapshotScheduleCommand = exports.serializeAws_json1_1UpdateSMBSecurityStrategyCommand = exports.serializeAws_json1_1UpdateSMBFileShareVisibilityCommand = exports.serializeAws_json1_1UpdateSMBFileShareCommand = exports.serializeAws_json1_1UpdateNFSFileShareCommand = exports.serializeAws_json1_1UpdateMaintenanceStartTimeCommand = exports.serializeAws_json1_1UpdateGatewaySoftwareNowCommand = exports.serializeAws_json1_1UpdateGatewayInformationCommand = exports.serializeAws_json1_1UpdateFileSystemAssociationCommand = exports.serializeAws_json1_1UpdateChapCredentialsCommand = exports.serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = exports.serializeAws_json1_1UpdateBandwidthRateLimitCommand = exports.serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = exports.serializeAws_json1_1StartGatewayCommand = exports.serializeAws_json1_1StartAvailabilityMonitorTestCommand = exports.serializeAws_json1_1ShutdownGatewayCommand = exports.serializeAws_json1_1SetSMBGuestPasswordCommand = exports.serializeAws_json1_1SetLocalConsolePasswordCommand = exports.serializeAws_json1_1RetrieveTapeRecoveryPointCommand = exports.serializeAws_json1_1RetrieveTapeArchiveCommand = exports.serializeAws_json1_1ResetCacheCommand = exports.serializeAws_json1_1RemoveTagsFromResourceCommand = exports.serializeAws_json1_1RefreshCacheCommand = exports.serializeAws_json1_1NotifyWhenUploadedCommand = exports.serializeAws_json1_1ListVolumesCommand = exports.serializeAws_json1_1ListVolumeRecoveryPointsCommand = exports.serializeAws_json1_1ListVolumeInitiatorsCommand = exports.serializeAws_json1_1ListTapesCommand = exports.serializeAws_json1_1ListTapePoolsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListLocalDisksCommand = exports.serializeAws_json1_1ListGatewaysCommand = exports.serializeAws_json1_1ListFileSystemAssociationsCommand = exports.serializeAws_json1_1ListFileSharesCommand = exports.serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = exports.serializeAws_json1_1JoinDomainCommand = exports.serializeAws_json1_1DisassociateFileSystemCommand = exports.serializeAws_json1_1DisableGatewayCommand = void 0;
exports.deserializeAws_json1_1ListTapesCommand = exports.deserializeAws_json1_1ListTapePoolsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListLocalDisksCommand = exports.deserializeAws_json1_1ListGatewaysCommand = exports.deserializeAws_json1_1ListFileSystemAssociationsCommand = exports.deserializeAws_json1_1ListFileSharesCommand = exports.deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = exports.deserializeAws_json1_1JoinDomainCommand = exports.deserializeAws_json1_1DisassociateFileSystemCommand = exports.deserializeAws_json1_1DisableGatewayCommand = exports.deserializeAws_json1_1DetachVolumeCommand = exports.deserializeAws_json1_1DescribeWorkingStorageCommand = exports.deserializeAws_json1_1DescribeVTLDevicesCommand = exports.deserializeAws_json1_1DescribeUploadBufferCommand = exports.deserializeAws_json1_1DescribeTapesCommand = exports.deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = exports.deserializeAws_json1_1DescribeTapeArchivesCommand = exports.deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = exports.deserializeAws_json1_1DescribeSnapshotScheduleCommand = exports.deserializeAws_json1_1DescribeSMBSettingsCommand = exports.deserializeAws_json1_1DescribeSMBFileSharesCommand = exports.deserializeAws_json1_1DescribeNFSFileSharesCommand = exports.deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = exports.deserializeAws_json1_1DescribeGatewayInformationCommand = exports.deserializeAws_json1_1DescribeFileSystemAssociationsCommand = exports.deserializeAws_json1_1DescribeChapCredentialsCommand = exports.deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = exports.deserializeAws_json1_1DescribeCacheCommand = exports.deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = exports.deserializeAws_json1_1DescribeBandwidthRateLimitCommand = exports.deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = exports.deserializeAws_json1_1DeleteVolumeCommand = exports.deserializeAws_json1_1DeleteTapePoolCommand = exports.deserializeAws_json1_1DeleteTapeArchiveCommand = exports.deserializeAws_json1_1DeleteTapeCommand = exports.deserializeAws_json1_1DeleteSnapshotScheduleCommand = exports.deserializeAws_json1_1DeleteGatewayCommand = exports.deserializeAws_json1_1DeleteFileShareCommand = exports.deserializeAws_json1_1DeleteChapCredentialsCommand = exports.deserializeAws_json1_1DeleteBandwidthRateLimitCommand = exports.deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = exports.deserializeAws_json1_1CreateTapeWithBarcodeCommand = exports.deserializeAws_json1_1CreateTapesCommand = exports.deserializeAws_json1_1CreateTapePoolCommand = exports.deserializeAws_json1_1CreateStorediSCSIVolumeCommand = exports.deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = exports.deserializeAws_json1_1CreateSnapshotCommand = exports.deserializeAws_json1_1CreateSMBFileShareCommand = exports.deserializeAws_json1_1CreateNFSFileShareCommand = void 0;
exports.deserializeAws_json1_1UpdateVTLDeviceTypeCommand = exports.deserializeAws_json1_1UpdateSnapshotScheduleCommand = exports.deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = exports.deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand = exports.deserializeAws_json1_1UpdateSMBFileShareCommand = exports.deserializeAws_json1_1UpdateNFSFileShareCommand = exports.deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = exports.deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = exports.deserializeAws_json1_1UpdateGatewayInformationCommand = exports.deserializeAws_json1_1UpdateFileSystemAssociationCommand = exports.deserializeAws_json1_1UpdateChapCredentialsCommand = exports.deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = exports.deserializeAws_json1_1UpdateBandwidthRateLimitCommand = exports.deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = exports.deserializeAws_json1_1StartGatewayCommand = exports.deserializeAws_json1_1StartAvailabilityMonitorTestCommand = exports.deserializeAws_json1_1ShutdownGatewayCommand = exports.deserializeAws_json1_1SetSMBGuestPasswordCommand = exports.deserializeAws_json1_1SetLocalConsolePasswordCommand = exports.deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = exports.deserializeAws_json1_1RetrieveTapeArchiveCommand = exports.deserializeAws_json1_1ResetCacheCommand = exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = exports.deserializeAws_json1_1RefreshCacheCommand = exports.deserializeAws_json1_1NotifyWhenUploadedCommand = exports.deserializeAws_json1_1ListVolumesCommand = exports.deserializeAws_json1_1ListVolumeRecoveryPointsCommand = exports.deserializeAws_json1_1ListVolumeInitiatorsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1ActivateGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ActivateGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivateGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ActivateGatewayCommand = serializeAws_json1_1ActivateGatewayCommand;
const serializeAws_json1_1AddCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AddCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddCacheCommand = serializeAws_json1_1AddCacheCommand;
const serializeAws_json1_1AddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AddTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
const serializeAws_json1_1AddUploadBufferCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AddUploadBuffer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddUploadBufferInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddUploadBufferCommand = serializeAws_json1_1AddUploadBufferCommand;
const serializeAws_json1_1AddWorkingStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AddWorkingStorage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddWorkingStorageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddWorkingStorageCommand = serializeAws_json1_1AddWorkingStorageCommand;
const serializeAws_json1_1AssignTapePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AssignTapePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignTapePoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssignTapePoolCommand = serializeAws_json1_1AssignTapePoolCommand;
const serializeAws_json1_1AssociateFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AssociateFileSystem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateFileSystemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateFileSystemCommand = serializeAws_json1_1AssociateFileSystemCommand;
const serializeAws_json1_1AttachVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.AttachVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachVolumeCommand = serializeAws_json1_1AttachVolumeCommand;
const serializeAws_json1_1CancelArchivalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CancelArchival",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelArchivalInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelArchivalCommand = serializeAws_json1_1CancelArchivalCommand;
const serializeAws_json1_1CancelRetrievalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CancelRetrieval",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelRetrievalInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelRetrievalCommand = serializeAws_json1_1CancelRetrievalCommand;
const serializeAws_json1_1CreateCachediSCSIVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateCachediSCSIVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCachediSCSIVolumeCommand = serializeAws_json1_1CreateCachediSCSIVolumeCommand;
const serializeAws_json1_1CreateNFSFileShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateNFSFileShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNFSFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateNFSFileShareCommand = serializeAws_json1_1CreateNFSFileShareCommand;
const serializeAws_json1_1CreateSMBFileShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateSMBFileShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSMBFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSMBFileShareCommand = serializeAws_json1_1CreateSMBFileShareCommand;
const serializeAws_json1_1CreateSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSnapshotCommand = serializeAws_json1_1CreateSnapshotCommand;
const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand;
const serializeAws_json1_1CreateStorediSCSIVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateStorediSCSIVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStorediSCSIVolumeCommand = serializeAws_json1_1CreateStorediSCSIVolumeCommand;
const serializeAws_json1_1CreateTapePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateTapePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTapePoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTapePoolCommand = serializeAws_json1_1CreateTapePoolCommand;
const serializeAws_json1_1CreateTapesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateTapes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTapesCommand = serializeAws_json1_1CreateTapesCommand;
const serializeAws_json1_1CreateTapeWithBarcodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.CreateTapeWithBarcode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTapeWithBarcodeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTapeWithBarcodeCommand = serializeAws_json1_1CreateTapeWithBarcodeCommand;
const serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand;
const serializeAws_json1_1DeleteBandwidthRateLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteBandwidthRateLimit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBandwidthRateLimitCommand = serializeAws_json1_1DeleteBandwidthRateLimitCommand;
const serializeAws_json1_1DeleteChapCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteChapCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteChapCredentialsCommand = serializeAws_json1_1DeleteChapCredentialsCommand;
const serializeAws_json1_1DeleteFileShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteFileShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFileShareCommand = serializeAws_json1_1DeleteFileShareCommand;
const serializeAws_json1_1DeleteGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGatewayCommand = serializeAws_json1_1DeleteGatewayCommand;
const serializeAws_json1_1DeleteSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteSnapshotSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSnapshotScheduleCommand = serializeAws_json1_1DeleteSnapshotScheduleCommand;
const serializeAws_json1_1DeleteTapeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteTape",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTapeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTapeCommand = serializeAws_json1_1DeleteTapeCommand;
const serializeAws_json1_1DeleteTapeArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteTapeArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTapeArchiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTapeArchiveCommand = serializeAws_json1_1DeleteTapeArchiveCommand;
const serializeAws_json1_1DeleteTapePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteTapePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTapePoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTapePoolCommand = serializeAws_json1_1DeleteTapePoolCommand;
const serializeAws_json1_1DeleteVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DeleteVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVolumeCommand = serializeAws_json1_1DeleteVolumeCommand;
const serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeAvailabilityMonitorTest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = serializeAws_json1_1DescribeAvailabilityMonitorTestCommand;
const serializeAws_json1_1DescribeBandwidthRateLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBandwidthRateLimitCommand = serializeAws_json1_1DescribeBandwidthRateLimitCommand;
const serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand;
const serializeAws_json1_1DescribeCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCacheCommand = serializeAws_json1_1DescribeCacheCommand;
const serializeAws_json1_1DescribeCachediSCSIVolumesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeCachediSCSIVolumes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCachediSCSIVolumesCommand = serializeAws_json1_1DescribeCachediSCSIVolumesCommand;
const serializeAws_json1_1DescribeChapCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeChapCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeChapCredentialsCommand = serializeAws_json1_1DescribeChapCredentialsCommand;
const serializeAws_json1_1DescribeFileSystemAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeFileSystemAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAssociationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFileSystemAssociationsCommand = serializeAws_json1_1DescribeFileSystemAssociationsCommand;
const serializeAws_json1_1DescribeGatewayInformationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeGatewayInformation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGatewayInformationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGatewayInformationCommand = serializeAws_json1_1DescribeGatewayInformationCommand;
const serializeAws_json1_1DescribeMaintenanceStartTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeMaintenanceStartTime",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMaintenanceStartTimeCommand = serializeAws_json1_1DescribeMaintenanceStartTimeCommand;
const serializeAws_json1_1DescribeNFSFileSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeNFSFileShares",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNFSFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeNFSFileSharesCommand = serializeAws_json1_1DescribeNFSFileSharesCommand;
const serializeAws_json1_1DescribeSMBFileSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeSMBFileShares",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSMBFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSMBFileSharesCommand = serializeAws_json1_1DescribeSMBFileSharesCommand;
const serializeAws_json1_1DescribeSMBSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeSMBSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSMBSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSMBSettingsCommand = serializeAws_json1_1DescribeSMBSettingsCommand;
const serializeAws_json1_1DescribeSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeSnapshotSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSnapshotScheduleCommand = serializeAws_json1_1DescribeSnapshotScheduleCommand;
const serializeAws_json1_1DescribeStorediSCSIVolumesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeStorediSCSIVolumes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStorediSCSIVolumesCommand = serializeAws_json1_1DescribeStorediSCSIVolumesCommand;
const serializeAws_json1_1DescribeTapeArchivesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeTapeArchives",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapeArchivesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTapeArchivesCommand = serializeAws_json1_1DescribeTapeArchivesCommand;
const serializeAws_json1_1DescribeTapeRecoveryPointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeTapeRecoveryPoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTapeRecoveryPointsCommand = serializeAws_json1_1DescribeTapeRecoveryPointsCommand;
const serializeAws_json1_1DescribeTapesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeTapes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTapesCommand = serializeAws_json1_1DescribeTapesCommand;
const serializeAws_json1_1DescribeUploadBufferCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeUploadBuffer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUploadBufferInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUploadBufferCommand = serializeAws_json1_1DescribeUploadBufferCommand;
const serializeAws_json1_1DescribeVTLDevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeVTLDevices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVTLDevicesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVTLDevicesCommand = serializeAws_json1_1DescribeVTLDevicesCommand;
const serializeAws_json1_1DescribeWorkingStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DescribeWorkingStorage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkingStorageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkingStorageCommand = serializeAws_json1_1DescribeWorkingStorageCommand;
const serializeAws_json1_1DetachVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DetachVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachVolumeCommand = serializeAws_json1_1DetachVolumeCommand;
const serializeAws_json1_1DisableGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DisableGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableGatewayCommand = serializeAws_json1_1DisableGatewayCommand;
const serializeAws_json1_1DisassociateFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.DisassociateFileSystem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateFileSystemCommand = serializeAws_json1_1DisassociateFileSystemCommand;
const serializeAws_json1_1JoinDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.JoinDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1JoinDomainCommand = serializeAws_json1_1JoinDomainCommand;
const serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListAutomaticTapeCreationPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand;
const serializeAws_json1_1ListFileSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListFileShares",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFileSharesCommand = serializeAws_json1_1ListFileSharesCommand;
const serializeAws_json1_1ListFileSystemAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListFileSystemAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFileSystemAssociationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFileSystemAssociationsCommand = serializeAws_json1_1ListFileSystemAssociationsCommand;
const serializeAws_json1_1ListGatewaysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListGateways",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGatewaysInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGatewaysCommand = serializeAws_json1_1ListGatewaysCommand;
const serializeAws_json1_1ListLocalDisksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListLocalDisks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLocalDisksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLocalDisksCommand = serializeAws_json1_1ListLocalDisksCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTapePoolsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListTapePools",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTapePoolsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTapePoolsCommand = serializeAws_json1_1ListTapePoolsCommand;
const serializeAws_json1_1ListTapesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListTapes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTapesCommand = serializeAws_json1_1ListTapesCommand;
const serializeAws_json1_1ListVolumeInitiatorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListVolumeInitiators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumeInitiatorsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVolumeInitiatorsCommand = serializeAws_json1_1ListVolumeInitiatorsCommand;
const serializeAws_json1_1ListVolumeRecoveryPointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListVolumeRecoveryPoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVolumeRecoveryPointsCommand = serializeAws_json1_1ListVolumeRecoveryPointsCommand;
const serializeAws_json1_1ListVolumesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ListVolumes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVolumesCommand = serializeAws_json1_1ListVolumesCommand;
const serializeAws_json1_1NotifyWhenUploadedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.NotifyWhenUploaded",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyWhenUploadedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1NotifyWhenUploadedCommand = serializeAws_json1_1NotifyWhenUploadedCommand;
const serializeAws_json1_1RefreshCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.RefreshCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RefreshCacheCommand = serializeAws_json1_1RefreshCacheCommand;
const serializeAws_json1_1RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.RemoveTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
const serializeAws_json1_1ResetCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ResetCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetCacheCommand = serializeAws_json1_1ResetCacheCommand;
const serializeAws_json1_1RetrieveTapeArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.RetrieveTapeArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveTapeArchiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetrieveTapeArchiveCommand = serializeAws_json1_1RetrieveTapeArchiveCommand;
const serializeAws_json1_1RetrieveTapeRecoveryPointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.RetrieveTapeRecoveryPoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetrieveTapeRecoveryPointCommand = serializeAws_json1_1RetrieveTapeRecoveryPointCommand;
const serializeAws_json1_1SetLocalConsolePasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.SetLocalConsolePassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetLocalConsolePasswordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetLocalConsolePasswordCommand = serializeAws_json1_1SetLocalConsolePasswordCommand;
const serializeAws_json1_1SetSMBGuestPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.SetSMBGuestPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetSMBGuestPasswordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetSMBGuestPasswordCommand = serializeAws_json1_1SetSMBGuestPasswordCommand;
const serializeAws_json1_1ShutdownGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.ShutdownGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ShutdownGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ShutdownGatewayCommand = serializeAws_json1_1ShutdownGatewayCommand;
const serializeAws_json1_1StartAvailabilityMonitorTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.StartAvailabilityMonitorTest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAvailabilityMonitorTestCommand = serializeAws_json1_1StartAvailabilityMonitorTestCommand;
const serializeAws_json1_1StartGatewayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.StartGateway",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartGatewayCommand = serializeAws_json1_1StartGatewayCommand;
const serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand;
const serializeAws_json1_1UpdateBandwidthRateLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBandwidthRateLimitCommand = serializeAws_json1_1UpdateBandwidthRateLimitCommand;
const serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand;
const serializeAws_json1_1UpdateChapCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateChapCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateChapCredentialsCommand = serializeAws_json1_1UpdateChapCredentialsCommand;
const serializeAws_json1_1UpdateFileSystemAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateFileSystemAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFileSystemAssociationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFileSystemAssociationCommand = serializeAws_json1_1UpdateFileSystemAssociationCommand;
const serializeAws_json1_1UpdateGatewayInformationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateGatewayInformation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewayInformationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGatewayInformationCommand = serializeAws_json1_1UpdateGatewayInformationCommand;
const serializeAws_json1_1UpdateGatewaySoftwareNowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateGatewaySoftwareNow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGatewaySoftwareNowCommand = serializeAws_json1_1UpdateGatewaySoftwareNowCommand;
const serializeAws_json1_1UpdateMaintenanceStartTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateMaintenanceStartTime",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMaintenanceStartTimeCommand = serializeAws_json1_1UpdateMaintenanceStartTimeCommand;
const serializeAws_json1_1UpdateNFSFileShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateNFSFileShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNFSFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNFSFileShareCommand = serializeAws_json1_1UpdateNFSFileShareCommand;
const serializeAws_json1_1UpdateSMBFileShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSMBFileShareCommand = serializeAws_json1_1UpdateSMBFileShareCommand;
const serializeAws_json1_1UpdateSMBFileShareVisibilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShareVisibility",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareVisibilityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSMBFileShareVisibilityCommand = serializeAws_json1_1UpdateSMBFileShareVisibilityCommand;
const serializeAws_json1_1UpdateSMBSecurityStrategyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateSMBSecurityStrategy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSMBSecurityStrategyCommand = serializeAws_json1_1UpdateSMBSecurityStrategyCommand;
const serializeAws_json1_1UpdateSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateSnapshotSchedule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSnapshotScheduleCommand = serializeAws_json1_1UpdateSnapshotScheduleCommand;
const serializeAws_json1_1UpdateVTLDeviceTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StorageGateway_20130630.UpdateVTLDeviceType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVTLDeviceTypeCommand = serializeAws_json1_1UpdateVTLDeviceTypeCommand;
const deserializeAws_json1_1ActivateGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ActivateGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ActivateGatewayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ActivateGatewayCommand = deserializeAws_json1_1ActivateGatewayCommand;
const deserializeAws_json1_1ActivateGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AddCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCacheOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddCacheCommand = deserializeAws_json1_1AddCacheCommand;
const deserializeAws_json1_1AddCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AddUploadBufferCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddUploadBufferCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddUploadBufferOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddUploadBufferCommand = deserializeAws_json1_1AddUploadBufferCommand;
const deserializeAws_json1_1AddUploadBufferCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AddWorkingStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddWorkingStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddWorkingStorageOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddWorkingStorageCommand = deserializeAws_json1_1AddWorkingStorageCommand;
const deserializeAws_json1_1AddWorkingStorageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssignTapePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssignTapePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssignTapePoolOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssignTapePoolCommand = deserializeAws_json1_1AssignTapePoolCommand;
const deserializeAws_json1_1AssignTapePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateFileSystemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateFileSystemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateFileSystemCommand = deserializeAws_json1_1AssociateFileSystemCommand;
const deserializeAws_json1_1AssociateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AttachVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachVolumeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachVolumeCommand = deserializeAws_json1_1AttachVolumeCommand;
const deserializeAws_json1_1AttachVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CancelArchivalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelArchivalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelArchivalOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelArchivalCommand = deserializeAws_json1_1CancelArchivalCommand;
const deserializeAws_json1_1CancelArchivalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CancelRetrievalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelRetrievalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelRetrievalOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelRetrievalCommand = deserializeAws_json1_1CancelRetrievalCommand;
const deserializeAws_json1_1CancelRetrievalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCachediSCSIVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCachediSCSIVolumeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCachediSCSIVolumeCommand = deserializeAws_json1_1CreateCachediSCSIVolumeCommand;
const deserializeAws_json1_1CreateCachediSCSIVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateNFSFileShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateNFSFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNFSFileShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateNFSFileShareCommand = deserializeAws_json1_1CreateNFSFileShareCommand;
const deserializeAws_json1_1CreateNFSFileShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSMBFileShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSMBFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSMBFileShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSMBFileShareCommand = deserializeAws_json1_1CreateSMBFileShareCommand;
const deserializeAws_json1_1CreateSMBFileShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSnapshotOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSnapshotCommand = deserializeAws_json1_1CreateSnapshotCommand;
const deserializeAws_json1_1CreateSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.storagegateway#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand;
const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.storagegateway#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateStorediSCSIVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStorediSCSIVolumeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStorediSCSIVolumeCommand = deserializeAws_json1_1CreateStorediSCSIVolumeCommand;
const deserializeAws_json1_1CreateStorediSCSIVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTapePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTapePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTapePoolOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTapePoolCommand = deserializeAws_json1_1CreateTapePoolCommand;
const deserializeAws_json1_1CreateTapePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTapesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTapesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTapesCommand = deserializeAws_json1_1CreateTapesCommand;
const deserializeAws_json1_1CreateTapesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTapeWithBarcodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTapeWithBarcodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTapeWithBarcodeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTapeWithBarcodeCommand = deserializeAws_json1_1CreateTapeWithBarcodeCommand;
const deserializeAws_json1_1CreateTapeWithBarcodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand;
const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteBandwidthRateLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBandwidthRateLimitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBandwidthRateLimitCommand = deserializeAws_json1_1DeleteBandwidthRateLimitCommand;
const deserializeAws_json1_1DeleteBandwidthRateLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteChapCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteChapCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteChapCredentialsCommand = deserializeAws_json1_1DeleteChapCredentialsCommand;
const deserializeAws_json1_1DeleteChapCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteFileShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFileShareCommand = deserializeAws_json1_1DeleteFileShareCommand;
const deserializeAws_json1_1DeleteFileShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGatewayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGatewayCommand = deserializeAws_json1_1DeleteGatewayCommand;
const deserializeAws_json1_1DeleteGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSnapshotScheduleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSnapshotScheduleCommand = deserializeAws_json1_1DeleteSnapshotScheduleCommand;
const deserializeAws_json1_1DeleteSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTapeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTapeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTapeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTapeCommand = deserializeAws_json1_1DeleteTapeCommand;
const deserializeAws_json1_1DeleteTapeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTapeArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTapeArchiveOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTapeArchiveCommand = deserializeAws_json1_1DeleteTapeArchiveCommand;
const deserializeAws_json1_1DeleteTapeArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTapePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTapePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTapePoolOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTapePoolCommand = deserializeAws_json1_1DeleteTapePoolCommand;
const deserializeAws_json1_1DeleteTapePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVolumeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVolumeCommand = deserializeAws_json1_1DeleteVolumeCommand;
const deserializeAws_json1_1DeleteVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand;
const deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeBandwidthRateLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBandwidthRateLimitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBandwidthRateLimitCommand = deserializeAws_json1_1DescribeBandwidthRateLimitCommand;
const deserializeAws_json1_1DescribeBandwidthRateLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand;
const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCacheOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCacheCommand = deserializeAws_json1_1DescribeCacheCommand;
const deserializeAws_json1_1DescribeCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCachediSCSIVolumesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = deserializeAws_json1_1DescribeCachediSCSIVolumesCommand;
const deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeChapCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeChapCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeChapCredentialsCommand = deserializeAws_json1_1DescribeChapCredentialsCommand;
const deserializeAws_json1_1DescribeChapCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeFileSystemAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFileSystemAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFileSystemAssociationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFileSystemAssociationsCommand = deserializeAws_json1_1DescribeFileSystemAssociationsCommand;
const deserializeAws_json1_1DescribeFileSystemAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeGatewayInformationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGatewayInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGatewayInformationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGatewayInformationCommand = deserializeAws_json1_1DescribeGatewayInformationCommand;
const deserializeAws_json1_1DescribeGatewayInformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceStartTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = deserializeAws_json1_1DescribeMaintenanceStartTimeCommand;
const deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeNFSFileSharesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeNFSFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNFSFileSharesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeNFSFileSharesCommand = deserializeAws_json1_1DescribeNFSFileSharesCommand;
const deserializeAws_json1_1DescribeNFSFileSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeSMBFileSharesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSMBFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSMBFileSharesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSMBFileSharesCommand = deserializeAws_json1_1DescribeSMBFileSharesCommand;
const deserializeAws_json1_1DescribeSMBFileSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeSMBSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSMBSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSMBSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSMBSettingsCommand = deserializeAws_json1_1DescribeSMBSettingsCommand;
const deserializeAws_json1_1DescribeSMBSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSnapshotScheduleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSnapshotScheduleCommand = deserializeAws_json1_1DescribeSnapshotScheduleCommand;
const deserializeAws_json1_1DescribeSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStorediSCSIVolumesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = deserializeAws_json1_1DescribeStorediSCSIVolumesCommand;
const deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTapeArchivesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTapeArchivesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapeArchivesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTapeArchivesCommand = deserializeAws_json1_1DescribeTapeArchivesCommand;
const deserializeAws_json1_1DescribeTapeArchivesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapeRecoveryPointsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = deserializeAws_json1_1DescribeTapeRecoveryPointsCommand;
const deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTapesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTapesCommand = deserializeAws_json1_1DescribeTapesCommand;
const deserializeAws_json1_1DescribeTapesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeUploadBufferCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUploadBufferCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUploadBufferOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUploadBufferCommand = deserializeAws_json1_1DescribeUploadBufferCommand;
const deserializeAws_json1_1DescribeUploadBufferCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeVTLDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVTLDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVTLDevicesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVTLDevicesCommand = deserializeAws_json1_1DescribeVTLDevicesCommand;
const deserializeAws_json1_1DescribeVTLDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeWorkingStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkingStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkingStorageOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkingStorageCommand = deserializeAws_json1_1DescribeWorkingStorageCommand;
const deserializeAws_json1_1DescribeWorkingStorageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DetachVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachVolumeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachVolumeCommand = deserializeAws_json1_1DetachVolumeCommand;
const deserializeAws_json1_1DetachVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableGatewayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableGatewayCommand = deserializeAws_json1_1DisableGatewayCommand;
const deserializeAws_json1_1DisableGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateFileSystemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateFileSystemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateFileSystemCommand = deserializeAws_json1_1DisassociateFileSystemCommand;
const deserializeAws_json1_1DisassociateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1JoinDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1JoinDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1JoinDomainOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1JoinDomainCommand = deserializeAws_json1_1JoinDomainCommand;
const deserializeAws_json1_1JoinDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand;
const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListFileSharesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFileSharesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFileSharesCommand = deserializeAws_json1_1ListFileSharesCommand;
const deserializeAws_json1_1ListFileSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListFileSystemAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFileSystemAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFileSystemAssociationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFileSystemAssociationsCommand = deserializeAws_json1_1ListFileSystemAssociationsCommand;
const deserializeAws_json1_1ListFileSystemAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListGatewaysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGatewaysOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGatewaysCommand = deserializeAws_json1_1ListGatewaysCommand;
const deserializeAws_json1_1ListGatewaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListLocalDisksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLocalDisksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLocalDisksOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLocalDisksCommand = deserializeAws_json1_1ListLocalDisksCommand;
const deserializeAws_json1_1ListLocalDisksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTapePoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTapePoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTapePoolsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTapePoolsCommand = deserializeAws_json1_1ListTapePoolsCommand;
const deserializeAws_json1_1ListTapePoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTapesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTapesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTapesCommand = deserializeAws_json1_1ListTapesCommand;
const deserializeAws_json1_1ListTapesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListVolumeInitiatorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVolumeInitiatorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumeInitiatorsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVolumeInitiatorsCommand = deserializeAws_json1_1ListVolumeInitiatorsCommand;
const deserializeAws_json1_1ListVolumeInitiatorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListVolumeRecoveryPointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumeRecoveryPointsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVolumeRecoveryPointsCommand = deserializeAws_json1_1ListVolumeRecoveryPointsCommand;
const deserializeAws_json1_1ListVolumeRecoveryPointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListVolumesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVolumesCommand = deserializeAws_json1_1ListVolumesCommand;
const deserializeAws_json1_1ListVolumesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1NotifyWhenUploadedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1NotifyWhenUploadedCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyWhenUploadedOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1NotifyWhenUploadedCommand = deserializeAws_json1_1NotifyWhenUploadedCommand;
const deserializeAws_json1_1NotifyWhenUploadedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RefreshCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RefreshCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshCacheOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RefreshCacheCommand = deserializeAws_json1_1RefreshCacheCommand;
const deserializeAws_json1_1RefreshCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ResetCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetCacheOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetCacheCommand = deserializeAws_json1_1ResetCacheCommand;
const deserializeAws_json1_1ResetCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RetrieveTapeArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetrieveTapeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveTapeArchiveOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetrieveTapeArchiveCommand = deserializeAws_json1_1RetrieveTapeArchiveCommand;
const deserializeAws_json1_1RetrieveTapeArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveTapeRecoveryPointOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = deserializeAws_json1_1RetrieveTapeRecoveryPointCommand;
const deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SetLocalConsolePasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetLocalConsolePasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetLocalConsolePasswordOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetLocalConsolePasswordCommand = deserializeAws_json1_1SetLocalConsolePasswordCommand;
const deserializeAws_json1_1SetLocalConsolePasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SetSMBGuestPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetSMBGuestPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetSMBGuestPasswordOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetSMBGuestPasswordCommand = deserializeAws_json1_1SetSMBGuestPasswordCommand;
const deserializeAws_json1_1SetSMBGuestPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ShutdownGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ShutdownGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ShutdownGatewayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ShutdownGatewayCommand = deserializeAws_json1_1ShutdownGatewayCommand;
const deserializeAws_json1_1ShutdownGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartAvailabilityMonitorTestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAvailabilityMonitorTestOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAvailabilityMonitorTestCommand = deserializeAws_json1_1StartAvailabilityMonitorTestCommand;
const deserializeAws_json1_1StartAvailabilityMonitorTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartGatewayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartGatewayOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartGatewayCommand = deserializeAws_json1_1StartGatewayCommand;
const deserializeAws_json1_1StartGatewayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand;
const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateBandwidthRateLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBandwidthRateLimitOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBandwidthRateLimitCommand = deserializeAws_json1_1UpdateBandwidthRateLimitCommand;
const deserializeAws_json1_1UpdateBandwidthRateLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand;
const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateChapCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateChapCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateChapCredentialsCommand = deserializeAws_json1_1UpdateChapCredentialsCommand;
const deserializeAws_json1_1UpdateChapCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateFileSystemAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFileSystemAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFileSystemAssociationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFileSystemAssociationCommand = deserializeAws_json1_1UpdateFileSystemAssociationCommand;
const deserializeAws_json1_1UpdateFileSystemAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateGatewayInformationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGatewayInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewayInformationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGatewayInformationCommand = deserializeAws_json1_1UpdateGatewayInformationCommand;
const deserializeAws_json1_1UpdateGatewayInformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewaySoftwareNowOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = deserializeAws_json1_1UpdateGatewaySoftwareNowCommand;
const deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceStartTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = deserializeAws_json1_1UpdateMaintenanceStartTimeCommand;
const deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateNFSFileShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateNFSFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNFSFileShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNFSFileShareCommand = deserializeAws_json1_1UpdateNFSFileShareCommand;
const deserializeAws_json1_1UpdateNFSFileShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSMBFileShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSMBFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSMBFileShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSMBFileShareCommand = deserializeAws_json1_1UpdateSMBFileShareCommand;
const deserializeAws_json1_1UpdateSMBFileShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand = deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand;
const deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSMBSecurityStrategyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = deserializeAws_json1_1UpdateSMBSecurityStrategyCommand;
const deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSnapshotScheduleOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSnapshotScheduleCommand = deserializeAws_json1_1UpdateSnapshotScheduleCommand;
const deserializeAws_json1_1UpdateSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateVTLDeviceTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVTLDeviceTypeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVTLDeviceTypeCommand = deserializeAws_json1_1UpdateVTLDeviceTypeCommand;
const deserializeAws_json1_1UpdateVTLDeviceTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.storagegateway#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGatewayRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGatewayRequestException(body, context);
    const contents = {
        name: "InvalidGatewayRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableError(body, context);
    const contents = {
        name: "ServiceUnavailableError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ActivateGatewayInput = (input, context) => {
    return {
        ...(input.ActivationKey !== undefined && input.ActivationKey !== null && { ActivationKey: input.ActivationKey }),
        ...(input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName }),
        ...(input.GatewayRegion !== undefined && input.GatewayRegion !== null && { GatewayRegion: input.GatewayRegion }),
        ...(input.GatewayTimezone !== undefined &&
            input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone }),
        ...(input.GatewayType !== undefined && input.GatewayType !== null && { GatewayType: input.GatewayType }),
        ...(input.MediumChangerType !== undefined &&
            input.MediumChangerType !== null && { MediumChangerType: input.MediumChangerType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TapeDriveType !== undefined && input.TapeDriveType !== null && { TapeDriveType: input.TapeDriveType }),
    };
};
const serializeAws_json1_1AddCacheInput = (input, context) => {
    return {
        ...(input.DiskIds !== undefined &&
            input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1AddTagsToResourceInput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1AddUploadBufferInput = (input, context) => {
    return {
        ...(input.DiskIds !== undefined &&
            input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1AddWorkingStorageInput = (input, context) => {
    return {
        ...(input.DiskIds !== undefined &&
            input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1AssignTapePoolInput = (input, context) => {
    return {
        ...(input.BypassGovernanceRetention !== undefined &&
            input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
        ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1AssociateFileSystemInput = (input, context) => {
    return {
        ...(input.AuditDestinationARN !== undefined &&
            input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1AttachVolumeInput = (input, context) => {
    return {
        ...(input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.NetworkInterfaceId !== undefined &&
            input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
        ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1AutomaticTapeCreationRule = (input, context) => {
    return {
        ...(input.MinimumNumTapes !== undefined &&
            input.MinimumNumTapes !== null && { MinimumNumTapes: input.MinimumNumTapes }),
        ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
        ...(input.TapeBarcodePrefix !== undefined &&
            input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
        ...(input.TapeSizeInBytes !== undefined &&
            input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
        ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
    };
};
const serializeAws_json1_1AutomaticTapeCreationRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};
const serializeAws_json1_1BandwidthRateLimitInterval = (input, context) => {
    return {
        ...(input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
            input.AverageDownloadRateLimitInBitsPerSec !== null && {
            AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
        }),
        ...(input.AverageUploadRateLimitInBitsPerSec !== undefined &&
            input.AverageUploadRateLimitInBitsPerSec !== null && {
            AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
        }),
        ...(input.DaysOfWeek !== undefined &&
            input.DaysOfWeek !== null && { DaysOfWeek: serializeAws_json1_1DaysOfWeek(input.DaysOfWeek, context) }),
        ...(input.EndHourOfDay !== undefined && input.EndHourOfDay !== null && { EndHourOfDay: input.EndHourOfDay }),
        ...(input.EndMinuteOfHour !== undefined &&
            input.EndMinuteOfHour !== null && { EndMinuteOfHour: input.EndMinuteOfHour }),
        ...(input.StartHourOfDay !== undefined &&
            input.StartHourOfDay !== null && { StartHourOfDay: input.StartHourOfDay }),
        ...(input.StartMinuteOfHour !== undefined &&
            input.StartMinuteOfHour !== null && { StartMinuteOfHour: input.StartMinuteOfHour }),
    };
};
const serializeAws_json1_1BandwidthRateLimitIntervals = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};
const serializeAws_json1_1CacheAttributes = (input, context) => {
    return {
        ...(input.CacheStaleTimeoutInSeconds !== undefined &&
            input.CacheStaleTimeoutInSeconds !== null && { CacheStaleTimeoutInSeconds: input.CacheStaleTimeoutInSeconds }),
    };
};
const serializeAws_json1_1CancelArchivalInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1CancelRetrievalInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1CreateCachediSCSIVolumeInput = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.NetworkInterfaceId !== undefined &&
            input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
        ...(input.SourceVolumeARN !== undefined &&
            input.SourceVolumeARN !== null && { SourceVolumeARN: input.SourceVolumeARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
        ...(input.VolumeSizeInBytes !== undefined &&
            input.VolumeSizeInBytes !== null && { VolumeSizeInBytes: input.VolumeSizeInBytes }),
    };
};
const serializeAws_json1_1CreateNFSFileShareInput = (input, context) => {
    return {
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.ClientList !== undefined &&
            input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DefaultStorageClass !== undefined &&
            input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
        ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.GuessMIMETypeEnabled !== undefined &&
            input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
        ...(input.NFSFileShareDefaults !== undefined &&
            input.NFSFileShareDefaults !== null && {
            NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
        }),
        ...(input.NotificationPolicy !== undefined &&
            input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
        ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
        ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
        ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateSMBFileShareInput = (input, context) => {
    return {
        ...(input.AccessBasedEnumeration !== undefined &&
            input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
        ...(input.AdminUserList !== undefined &&
            input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) }),
        ...(input.AuditDestinationARN !== undefined &&
            input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
        ...(input.Authentication !== undefined &&
            input.Authentication !== null && { Authentication: input.Authentication }),
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.CaseSensitivity !== undefined &&
            input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DefaultStorageClass !== undefined &&
            input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
        ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.GuessMIMETypeEnabled !== undefined &&
            input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
        ...(input.InvalidUserList !== undefined &&
            input.InvalidUserList !== null && {
            InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
        }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
        ...(input.NotificationPolicy !== undefined &&
            input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
        ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
        ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
        ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.ValidUserList !== undefined &&
            input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }),
    };
};
const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = (input, context) => {
    return {
        ...(input.SnapshotDescription !== undefined &&
            input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1CreateSnapshotInput = (input, context) => {
    return {
        ...(input.SnapshotDescription !== undefined &&
            input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1CreateStorediSCSIVolumeInput = (input, context) => {
    return {
        ...(input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.NetworkInterfaceId !== undefined &&
            input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
        ...(input.PreserveExistingData !== undefined &&
            input.PreserveExistingData !== null && { PreserveExistingData: input.PreserveExistingData }),
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
    };
};
const serializeAws_json1_1CreateTapePoolInput = (input, context) => {
    return {
        ...(input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName }),
        ...(input.RetentionLockTimeInDays !== undefined &&
            input.RetentionLockTimeInDays !== null && { RetentionLockTimeInDays: input.RetentionLockTimeInDays }),
        ...(input.RetentionLockType !== undefined &&
            input.RetentionLockType !== null && { RetentionLockType: input.RetentionLockType }),
        ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateTapesInput = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.NumTapesToCreate !== undefined &&
            input.NumTapesToCreate !== null && { NumTapesToCreate: input.NumTapesToCreate }),
        ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TapeBarcodePrefix !== undefined &&
            input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
        ...(input.TapeSizeInBytes !== undefined &&
            input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
        ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
    };
};
const serializeAws_json1_1CreateTapeWithBarcodeInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TapeBarcode !== undefined && input.TapeBarcode !== null && { TapeBarcode: input.TapeBarcode }),
        ...(input.TapeSizeInBytes !== undefined &&
            input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
        ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
    };
};
const serializeAws_json1_1DaysOfWeek = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DeleteBandwidthRateLimitInput = (input, context) => {
    return {
        ...(input.BandwidthType !== undefined && input.BandwidthType !== null && { BandwidthType: input.BandwidthType }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DeleteChapCredentialsInput = (input, context) => {
    return {
        ...(input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName }),
        ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
    };
};
const serializeAws_json1_1DeleteFileShareInput = (input, context) => {
    return {
        ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
        ...(input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }),
    };
};
const serializeAws_json1_1DeleteGatewayInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DeleteSnapshotScheduleInput = (input, context) => {
    return {
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1DeleteTapeArchiveInput = (input, context) => {
    return {
        ...(input.BypassGovernanceRetention !== undefined &&
            input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1DeleteTapeInput = (input, context) => {
    return {
        ...(input.BypassGovernanceRetention !== undefined &&
            input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1DeleteTapePoolInput = (input, context) => {
    return {
        ...(input.PoolARN !== undefined && input.PoolARN !== null && { PoolARN: input.PoolARN }),
    };
};
const serializeAws_json1_1DeleteVolumeInput = (input, context) => {
    return {
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1DescribeAvailabilityMonitorTestInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeBandwidthRateLimitInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeCachediSCSIVolumesInput = (input, context) => {
    return {
        ...(input.VolumeARNs !== undefined &&
            input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }),
    };
};
const serializeAws_json1_1DescribeCacheInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeChapCredentialsInput = (input, context) => {
    return {
        ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
    };
};
const serializeAws_json1_1DescribeFileSystemAssociationsInput = (input, context) => {
    return {
        ...(input.FileSystemAssociationARNList !== undefined &&
            input.FileSystemAssociationARNList !== null && {
            FileSystemAssociationARNList: serializeAws_json1_1FileSystemAssociationARNList(input.FileSystemAssociationARNList, context),
        }),
    };
};
const serializeAws_json1_1DescribeGatewayInformationInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeMaintenanceStartTimeInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeNFSFileSharesInput = (input, context) => {
    return {
        ...(input.FileShareARNList !== undefined &&
            input.FileShareARNList !== null && {
            FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
        }),
    };
};
const serializeAws_json1_1DescribeSMBFileSharesInput = (input, context) => {
    return {
        ...(input.FileShareARNList !== undefined &&
            input.FileShareARNList !== null && {
            FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
        }),
    };
};
const serializeAws_json1_1DescribeSMBSettingsInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeSnapshotScheduleInput = (input, context) => {
    return {
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1DescribeStorediSCSIVolumesInput = (input, context) => {
    return {
        ...(input.VolumeARNs !== undefined &&
            input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }),
    };
};
const serializeAws_json1_1DescribeTapeArchivesInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.TapeARNs !== undefined &&
            input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
    };
};
const serializeAws_json1_1DescribeTapeRecoveryPointsInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1DescribeTapesInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.TapeARNs !== undefined &&
            input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
    };
};
const serializeAws_json1_1DescribeUploadBufferInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DescribeVTLDevicesInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.VTLDeviceARNs !== undefined &&
            input.VTLDeviceARNs !== null && {
            VTLDeviceARNs: serializeAws_json1_1VTLDeviceARNs(input.VTLDeviceARNs, context),
        }),
    };
};
const serializeAws_json1_1DescribeWorkingStorageInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DetachVolumeInput = (input, context) => {
    return {
        ...(input.ForceDetach !== undefined && input.ForceDetach !== null && { ForceDetach: input.ForceDetach }),
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1DisableGatewayInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1DisassociateFileSystemInput = (input, context) => {
    return {
        ...(input.FileSystemAssociationARN !== undefined &&
            input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
        ...(input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }),
    };
};
const serializeAws_json1_1DiskIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FileShareARNList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FileShareClientList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FileSystemAssociationARNList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FolderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Hosts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1JoinDomainInput = (input, context) => {
    return {
        ...(input.DomainControllers !== undefined &&
            input.DomainControllers !== null && {
            DomainControllers: serializeAws_json1_1Hosts(input.DomainControllers, context),
        }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.OrganizationalUnit !== undefined &&
            input.OrganizationalUnit !== null && { OrganizationalUnit: input.OrganizationalUnit }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.TimeoutInSeconds !== undefined &&
            input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1ListFileSharesInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListFileSystemAssociationsInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListGatewaysInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListLocalDisksInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListTapePoolsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.PoolARNs !== undefined &&
            input.PoolARNs !== null && { PoolARNs: serializeAws_json1_1PoolARNs(input.PoolARNs, context) }),
    };
};
const serializeAws_json1_1ListTapesInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.TapeARNs !== undefined &&
            input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
    };
};
const serializeAws_json1_1ListVolumeInitiatorsInput = (input, context) => {
    return {
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1ListVolumeRecoveryPointsInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1ListVolumesInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1NFSFileShareDefaults = (input, context) => {
    return {
        ...(input.DirectoryMode !== undefined && input.DirectoryMode !== null && { DirectoryMode: input.DirectoryMode }),
        ...(input.FileMode !== undefined && input.FileMode !== null && { FileMode: input.FileMode }),
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    };
};
const serializeAws_json1_1NotifyWhenUploadedInput = (input, context) => {
    return {
        ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
    };
};
const serializeAws_json1_1PoolARNs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RefreshCacheInput = (input, context) => {
    return {
        ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
        ...(input.FolderList !== undefined &&
            input.FolderList !== null && { FolderList: serializeAws_json1_1FolderList(input.FolderList, context) }),
        ...(input.Recursive !== undefined && input.Recursive !== null && { Recursive: input.Recursive }),
    };
};
const serializeAws_json1_1RemoveTagsFromResourceInput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1ResetCacheInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1RetrieveTapeArchiveInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1RetrieveTapeRecoveryPointInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
    };
};
const serializeAws_json1_1SetLocalConsolePasswordInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.LocalConsolePassword !== undefined &&
            input.LocalConsolePassword !== null && { LocalConsolePassword: input.LocalConsolePassword }),
    };
};
const serializeAws_json1_1SetSMBGuestPasswordInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    };
};
const serializeAws_json1_1ShutdownGatewayInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1StartAvailabilityMonitorTestInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1StartGatewayInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TapeARNs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput = (input, context) => {
    return {
        ...(input.AutomaticTapeCreationRules !== undefined &&
            input.AutomaticTapeCreationRules !== null && {
            AutomaticTapeCreationRules: serializeAws_json1_1AutomaticTapeCreationRules(input.AutomaticTapeCreationRules, context),
        }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1UpdateBandwidthRateLimitInput = (input, context) => {
    return {
        ...(input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
            input.AverageDownloadRateLimitInBitsPerSec !== null && {
            AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
        }),
        ...(input.AverageUploadRateLimitInBitsPerSec !== undefined &&
            input.AverageUploadRateLimitInBitsPerSec !== null && {
            AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
        }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput = (input, context) => {
    return {
        ...(input.BandwidthRateLimitIntervals !== undefined &&
            input.BandwidthRateLimitIntervals !== null && {
            BandwidthRateLimitIntervals: serializeAws_json1_1BandwidthRateLimitIntervals(input.BandwidthRateLimitIntervals, context),
        }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1UpdateChapCredentialsInput = (input, context) => {
    return {
        ...(input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName }),
        ...(input.SecretToAuthenticateInitiator !== undefined &&
            input.SecretToAuthenticateInitiator !== null && {
            SecretToAuthenticateInitiator: input.SecretToAuthenticateInitiator,
        }),
        ...(input.SecretToAuthenticateTarget !== undefined &&
            input.SecretToAuthenticateTarget !== null && { SecretToAuthenticateTarget: input.SecretToAuthenticateTarget }),
        ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
    };
};
const serializeAws_json1_1UpdateFileSystemAssociationInput = (input, context) => {
    return {
        ...(input.AuditDestinationARN !== undefined &&
            input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.FileSystemAssociationARN !== undefined &&
            input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1UpdateGatewayInformationInput = (input, context) => {
    return {
        ...(input.CloudWatchLogGroupARN !== undefined &&
            input.CloudWatchLogGroupARN !== null && { CloudWatchLogGroupARN: input.CloudWatchLogGroupARN }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName }),
        ...(input.GatewayTimezone !== undefined &&
            input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone }),
    };
};
const serializeAws_json1_1UpdateGatewaySoftwareNowInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1UpdateMaintenanceStartTimeInput = (input, context) => {
    return {
        ...(input.DayOfMonth !== undefined && input.DayOfMonth !== null && { DayOfMonth: input.DayOfMonth }),
        ...(input.DayOfWeek !== undefined && input.DayOfWeek !== null && { DayOfWeek: input.DayOfWeek }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.HourOfDay !== undefined && input.HourOfDay !== null && { HourOfDay: input.HourOfDay }),
        ...(input.MinuteOfHour !== undefined && input.MinuteOfHour !== null && { MinuteOfHour: input.MinuteOfHour }),
    };
};
const serializeAws_json1_1UpdateNFSFileShareInput = (input, context) => {
    return {
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.ClientList !== undefined &&
            input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) }),
        ...(input.DefaultStorageClass !== undefined &&
            input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
        ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
        ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
        ...(input.GuessMIMETypeEnabled !== undefined &&
            input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.NFSFileShareDefaults !== undefined &&
            input.NFSFileShareDefaults !== null && {
            NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
        }),
        ...(input.NotificationPolicy !== undefined &&
            input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
        ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
        ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
        ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
        ...(input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash }),
    };
};
const serializeAws_json1_1UpdateSMBFileShareInput = (input, context) => {
    return {
        ...(input.AccessBasedEnumeration !== undefined &&
            input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
        ...(input.AdminUserList !== undefined &&
            input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) }),
        ...(input.AuditDestinationARN !== undefined &&
            input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
        ...(input.CacheAttributes !== undefined &&
            input.CacheAttributes !== null && {
            CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
        }),
        ...(input.CaseSensitivity !== undefined &&
            input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity }),
        ...(input.DefaultStorageClass !== undefined &&
            input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
        ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
        ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
        ...(input.GuessMIMETypeEnabled !== undefined &&
            input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
        ...(input.InvalidUserList !== undefined &&
            input.InvalidUserList !== null && {
            InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
        }),
        ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.NotificationPolicy !== undefined &&
            input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
        ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
        ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
        ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
        ...(input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled }),
        ...(input.ValidUserList !== undefined &&
            input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }),
    };
};
const serializeAws_json1_1UpdateSMBFileShareVisibilityInput = (input, context) => {
    return {
        ...(input.FileSharesVisible !== undefined &&
            input.FileSharesVisible !== null && { FileSharesVisible: input.FileSharesVisible }),
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    };
};
const serializeAws_json1_1UpdateSMBSecurityStrategyInput = (input, context) => {
    return {
        ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
        ...(input.SMBSecurityStrategy !== undefined &&
            input.SMBSecurityStrategy !== null && { SMBSecurityStrategy: input.SMBSecurityStrategy }),
    };
};
const serializeAws_json1_1UpdateSnapshotScheduleInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.RecurrenceInHours !== undefined &&
            input.RecurrenceInHours !== null && { RecurrenceInHours: input.RecurrenceInHours }),
        ...(input.StartAt !== undefined && input.StartAt !== null && { StartAt: input.StartAt }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
    };
};
const serializeAws_json1_1UpdateVTLDeviceTypeInput = (input, context) => {
    return {
        ...(input.DeviceType !== undefined && input.DeviceType !== null && { DeviceType: input.DeviceType }),
        ...(input.VTLDeviceARN !== undefined && input.VTLDeviceARN !== null && { VTLDeviceARN: input.VTLDeviceARN }),
    };
};
const serializeAws_json1_1UserList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1VolumeARNs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1VTLDeviceARNs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ActivateGatewayOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1AddCacheOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1AddTagsToResourceOutput = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1AddUploadBufferOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1AddWorkingStorageOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1AssignTapePoolOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1AssociateFileSystemOutput = (output, context) => {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
const deserializeAws_json1_1AttachVolumeOutput = (output, context) => {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1AutomaticTapeCreationPolicyInfo = (output, context) => {
    return {
        AutomaticTapeCreationRules: output.AutomaticTapeCreationRules !== undefined && output.AutomaticTapeCreationRules !== null
            ? deserializeAws_json1_1AutomaticTapeCreationRules(output.AutomaticTapeCreationRules, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1AutomaticTapeCreationPolicyInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutomaticTapeCreationPolicyInfo(entry, context);
    });
};
const deserializeAws_json1_1AutomaticTapeCreationRule = (output, context) => {
    return {
        MinimumNumTapes: output.MinimumNumTapes !== undefined && output.MinimumNumTapes !== null ? output.MinimumNumTapes : undefined,
        PoolId: output.PoolId !== undefined && output.PoolId !== null ? output.PoolId : undefined,
        TapeBarcodePrefix: output.TapeBarcodePrefix !== undefined && output.TapeBarcodePrefix !== null
            ? output.TapeBarcodePrefix
            : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        Worm: output.Worm !== undefined && output.Worm !== null ? output.Worm : undefined,
    };
};
const deserializeAws_json1_1AutomaticTapeCreationRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};
const deserializeAws_json1_1BandwidthRateLimitInterval = (output, context) => {
    return {
        AverageDownloadRateLimitInBitsPerSec: output.AverageDownloadRateLimitInBitsPerSec !== undefined && output.AverageDownloadRateLimitInBitsPerSec !== null
            ? output.AverageDownloadRateLimitInBitsPerSec
            : undefined,
        AverageUploadRateLimitInBitsPerSec: output.AverageUploadRateLimitInBitsPerSec !== undefined && output.AverageUploadRateLimitInBitsPerSec !== null
            ? output.AverageUploadRateLimitInBitsPerSec
            : undefined,
        DaysOfWeek: output.DaysOfWeek !== undefined && output.DaysOfWeek !== null
            ? deserializeAws_json1_1DaysOfWeek(output.DaysOfWeek, context)
            : undefined,
        EndHourOfDay: output.EndHourOfDay !== undefined && output.EndHourOfDay !== null ? output.EndHourOfDay : undefined,
        EndMinuteOfHour: output.EndMinuteOfHour !== undefined && output.EndMinuteOfHour !== null ? output.EndMinuteOfHour : undefined,
        StartHourOfDay: output.StartHourOfDay !== undefined && output.StartHourOfDay !== null ? output.StartHourOfDay : undefined,
        StartMinuteOfHour: output.StartMinuteOfHour !== undefined && output.StartMinuteOfHour !== null
            ? output.StartMinuteOfHour
            : undefined,
    };
};
const deserializeAws_json1_1BandwidthRateLimitIntervals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};
const deserializeAws_json1_1CacheAttributes = (output, context) => {
    return {
        CacheStaleTimeoutInSeconds: output.CacheStaleTimeoutInSeconds !== undefined && output.CacheStaleTimeoutInSeconds !== null
            ? output.CacheStaleTimeoutInSeconds
            : undefined,
    };
};
const deserializeAws_json1_1CachediSCSIVolume = (output, context) => {
    return {
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        SourceSnapshotId: output.SourceSnapshotId !== undefined && output.SourceSnapshotId !== null ? output.SourceSnapshotId : undefined,
        TargetName: output.TargetName !== undefined && output.TargetName !== null ? output.TargetName : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeAttachmentStatus: output.VolumeAttachmentStatus !== undefined && output.VolumeAttachmentStatus !== null
            ? output.VolumeAttachmentStatus
            : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
        VolumeProgress: output.VolumeProgress !== undefined && output.VolumeProgress !== null ? output.VolumeProgress : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
        VolumeStatus: output.VolumeStatus !== undefined && output.VolumeStatus !== null ? output.VolumeStatus : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
        VolumeUsedInBytes: output.VolumeUsedInBytes !== undefined && output.VolumeUsedInBytes !== null
            ? output.VolumeUsedInBytes
            : undefined,
        VolumeiSCSIAttributes: output.VolumeiSCSIAttributes !== undefined && output.VolumeiSCSIAttributes !== null
            ? deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1CachediSCSIVolumes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CachediSCSIVolume(entry, context);
    });
};
const deserializeAws_json1_1CancelArchivalOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1CancelRetrievalOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1ChapCredentials = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ChapInfo(entry, context);
    });
};
const deserializeAws_json1_1ChapInfo = (output, context) => {
    return {
        InitiatorName: output.InitiatorName !== undefined && output.InitiatorName !== null ? output.InitiatorName : undefined,
        SecretToAuthenticateInitiator: output.SecretToAuthenticateInitiator !== undefined && output.SecretToAuthenticateInitiator !== null
            ? output.SecretToAuthenticateInitiator
            : undefined,
        SecretToAuthenticateTarget: output.SecretToAuthenticateTarget !== undefined && output.SecretToAuthenticateTarget !== null
            ? output.SecretToAuthenticateTarget
            : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
const deserializeAws_json1_1CreateCachediSCSIVolumeOutput = (output, context) => {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1CreateNFSFileShareOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
const deserializeAws_json1_1CreateSMBFileShareOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = (output, context) => {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeRecoveryPointTime: output.VolumeRecoveryPointTime !== undefined && output.VolumeRecoveryPointTime !== null
            ? output.VolumeRecoveryPointTime
            : undefined,
    };
};
const deserializeAws_json1_1CreateSnapshotOutput = (output, context) => {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1CreateStorediSCSIVolumeOutput = (output, context) => {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
    };
};
const deserializeAws_json1_1CreateTapePoolOutput = (output, context) => {
    return {
        PoolARN: output.PoolARN !== undefined && output.PoolARN !== null ? output.PoolARN : undefined,
    };
};
const deserializeAws_json1_1CreateTapesOutput = (output, context) => {
    return {
        TapeARNs: output.TapeARNs !== undefined && output.TapeARNs !== null
            ? deserializeAws_json1_1TapeARNs(output.TapeARNs, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTapeWithBarcodeOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1DaysOfWeek = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DeleteBandwidthRateLimitOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DeleteChapCredentialsOutput = (output, context) => {
    return {
        InitiatorName: output.InitiatorName !== undefined && output.InitiatorName !== null ? output.InitiatorName : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
const deserializeAws_json1_1DeleteFileShareOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
const deserializeAws_json1_1DeleteGatewayOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DeleteSnapshotScheduleOutput = (output, context) => {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1DeleteTapeArchiveOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1DeleteTapeOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1DeleteTapePoolOutput = (output, context) => {
    return {
        PoolARN: output.PoolARN !== undefined && output.PoolARN !== null ? output.PoolARN : undefined,
    };
};
const deserializeAws_json1_1DeleteVolumeOutput = (output, context) => {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeBandwidthRateLimitOutput = (output, context) => {
    return {
        AverageDownloadRateLimitInBitsPerSec: output.AverageDownloadRateLimitInBitsPerSec !== undefined && output.AverageDownloadRateLimitInBitsPerSec !== null
            ? output.AverageDownloadRateLimitInBitsPerSec
            : undefined,
        AverageUploadRateLimitInBitsPerSec: output.AverageUploadRateLimitInBitsPerSec !== undefined && output.AverageUploadRateLimitInBitsPerSec !== null
            ? output.AverageUploadRateLimitInBitsPerSec
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput = (output, context) => {
    return {
        BandwidthRateLimitIntervals: output.BandwidthRateLimitIntervals !== undefined && output.BandwidthRateLimitIntervals !== null
            ? deserializeAws_json1_1BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = (output, context) => {
    return {
        CachediSCSIVolumes: output.CachediSCSIVolumes !== undefined && output.CachediSCSIVolumes !== null
            ? deserializeAws_json1_1CachediSCSIVolumes(output.CachediSCSIVolumes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCacheOutput = (output, context) => {
    return {
        CacheAllocatedInBytes: output.CacheAllocatedInBytes !== undefined && output.CacheAllocatedInBytes !== null
            ? output.CacheAllocatedInBytes
            : undefined,
        CacheDirtyPercentage: output.CacheDirtyPercentage !== undefined && output.CacheDirtyPercentage !== null
            ? output.CacheDirtyPercentage
            : undefined,
        CacheHitPercentage: output.CacheHitPercentage !== undefined && output.CacheHitPercentage !== null
            ? output.CacheHitPercentage
            : undefined,
        CacheMissPercentage: output.CacheMissPercentage !== undefined && output.CacheMissPercentage !== null
            ? output.CacheMissPercentage
            : undefined,
        CacheUsedPercentage: output.CacheUsedPercentage !== undefined && output.CacheUsedPercentage !== null
            ? output.CacheUsedPercentage
            : undefined,
        DiskIds: output.DiskIds !== undefined && output.DiskIds !== null
            ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DescribeChapCredentialsOutput = (output, context) => {
    return {
        ChapCredentials: output.ChapCredentials !== undefined && output.ChapCredentials !== null
            ? deserializeAws_json1_1ChapCredentials(output.ChapCredentials, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFileSystemAssociationsOutput = (output, context) => {
    return {
        FileSystemAssociationInfoList: output.FileSystemAssociationInfoList !== undefined && output.FileSystemAssociationInfoList !== null
            ? deserializeAws_json1_1FileSystemAssociationInfoList(output.FileSystemAssociationInfoList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeGatewayInformationOutput = (output, context) => {
    return {
        CloudWatchLogGroupARN: output.CloudWatchLogGroupARN !== undefined && output.CloudWatchLogGroupARN !== null
            ? output.CloudWatchLogGroupARN
            : undefined,
        DeprecationDate: output.DeprecationDate !== undefined && output.DeprecationDate !== null ? output.DeprecationDate : undefined,
        Ec2InstanceId: output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null ? output.Ec2InstanceId : undefined,
        Ec2InstanceRegion: output.Ec2InstanceRegion !== undefined && output.Ec2InstanceRegion !== null
            ? output.Ec2InstanceRegion
            : undefined,
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GatewayId: output.GatewayId !== undefined && output.GatewayId !== null ? output.GatewayId : undefined,
        GatewayName: output.GatewayName !== undefined && output.GatewayName !== null ? output.GatewayName : undefined,
        GatewayNetworkInterfaces: output.GatewayNetworkInterfaces !== undefined && output.GatewayNetworkInterfaces !== null
            ? deserializeAws_json1_1GatewayNetworkInterfaces(output.GatewayNetworkInterfaces, context)
            : undefined,
        GatewayState: output.GatewayState !== undefined && output.GatewayState !== null ? output.GatewayState : undefined,
        GatewayTimezone: output.GatewayTimezone !== undefined && output.GatewayTimezone !== null ? output.GatewayTimezone : undefined,
        GatewayType: output.GatewayType !== undefined && output.GatewayType !== null ? output.GatewayType : undefined,
        HostEnvironment: output.HostEnvironment !== undefined && output.HostEnvironment !== null ? output.HostEnvironment : undefined,
        LastSoftwareUpdate: output.LastSoftwareUpdate !== undefined && output.LastSoftwareUpdate !== null
            ? output.LastSoftwareUpdate
            : undefined,
        NextUpdateAvailabilityDate: output.NextUpdateAvailabilityDate !== undefined && output.NextUpdateAvailabilityDate !== null
            ? output.NextUpdateAvailabilityDate
            : undefined,
        SoftwareUpdatesEndDate: output.SoftwareUpdatesEndDate !== undefined && output.SoftwareUpdatesEndDate !== null
            ? output.SoftwareUpdatesEndDate
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        VPCEndpoint: output.VPCEndpoint !== undefined && output.VPCEndpoint !== null ? output.VPCEndpoint : undefined,
    };
};
const deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = (output, context) => {
    return {
        DayOfMonth: output.DayOfMonth !== undefined && output.DayOfMonth !== null ? output.DayOfMonth : undefined,
        DayOfWeek: output.DayOfWeek !== undefined && output.DayOfWeek !== null ? output.DayOfWeek : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        HourOfDay: output.HourOfDay !== undefined && output.HourOfDay !== null ? output.HourOfDay : undefined,
        MinuteOfHour: output.MinuteOfHour !== undefined && output.MinuteOfHour !== null ? output.MinuteOfHour : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
const deserializeAws_json1_1DescribeNFSFileSharesOutput = (output, context) => {
    return {
        NFSFileShareInfoList: output.NFSFileShareInfoList !== undefined && output.NFSFileShareInfoList !== null
            ? deserializeAws_json1_1NFSFileShareInfoList(output.NFSFileShareInfoList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSMBFileSharesOutput = (output, context) => {
    return {
        SMBFileShareInfoList: output.SMBFileShareInfoList !== undefined && output.SMBFileShareInfoList !== null
            ? deserializeAws_json1_1SMBFileShareInfoList(output.SMBFileShareInfoList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSMBSettingsOutput = (output, context) => {
    return {
        ActiveDirectoryStatus: output.ActiveDirectoryStatus !== undefined && output.ActiveDirectoryStatus !== null
            ? output.ActiveDirectoryStatus
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        FileSharesVisible: output.FileSharesVisible !== undefined && output.FileSharesVisible !== null
            ? output.FileSharesVisible
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        SMBGuestPasswordSet: output.SMBGuestPasswordSet !== undefined && output.SMBGuestPasswordSet !== null
            ? output.SMBGuestPasswordSet
            : undefined,
        SMBSecurityStrategy: output.SMBSecurityStrategy !== undefined && output.SMBSecurityStrategy !== null
            ? output.SMBSecurityStrategy
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSnapshotScheduleOutput = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RecurrenceInHours: output.RecurrenceInHours !== undefined && output.RecurrenceInHours !== null
            ? output.RecurrenceInHours
            : undefined,
        StartAt: output.StartAt !== undefined && output.StartAt !== null ? output.StartAt : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = (output, context) => {
    return {
        StorediSCSIVolumes: output.StorediSCSIVolumes !== undefined && output.StorediSCSIVolumes !== null
            ? deserializeAws_json1_1StorediSCSIVolumes(output.StorediSCSIVolumes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTapeArchivesOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeArchives: output.TapeArchives !== undefined && output.TapeArchives !== null
            ? deserializeAws_json1_1TapeArchives(output.TapeArchives, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeRecoveryPointInfos: output.TapeRecoveryPointInfos !== undefined && output.TapeRecoveryPointInfos !== null
            ? deserializeAws_json1_1TapeRecoveryPointInfos(output.TapeRecoveryPointInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTapesOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Tapes: output.Tapes !== undefined && output.Tapes !== null
            ? deserializeAws_json1_1Tapes(output.Tapes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUploadBufferOutput = (output, context) => {
    return {
        DiskIds: output.DiskIds !== undefined && output.DiskIds !== null
            ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        UploadBufferAllocatedInBytes: output.UploadBufferAllocatedInBytes !== undefined && output.UploadBufferAllocatedInBytes !== null
            ? output.UploadBufferAllocatedInBytes
            : undefined,
        UploadBufferUsedInBytes: output.UploadBufferUsedInBytes !== undefined && output.UploadBufferUsedInBytes !== null
            ? output.UploadBufferUsedInBytes
            : undefined,
    };
};
const deserializeAws_json1_1DescribeVTLDevicesOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        VTLDevices: output.VTLDevices !== undefined && output.VTLDevices !== null
            ? deserializeAws_json1_1VTLDevices(output.VTLDevices, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkingStorageOutput = (output, context) => {
    return {
        DiskIds: output.DiskIds !== undefined && output.DiskIds !== null
            ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        WorkingStorageAllocatedInBytes: output.WorkingStorageAllocatedInBytes !== undefined && output.WorkingStorageAllocatedInBytes !== null
            ? output.WorkingStorageAllocatedInBytes
            : undefined,
        WorkingStorageUsedInBytes: output.WorkingStorageUsedInBytes !== undefined && output.WorkingStorageUsedInBytes !== null
            ? output.WorkingStorageUsedInBytes
            : undefined,
    };
};
const deserializeAws_json1_1DetachVolumeOutput = (output, context) => {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1DeviceiSCSIAttributes = (output, context) => {
    return {
        ChapEnabled: output.ChapEnabled !== undefined && output.ChapEnabled !== null ? output.ChapEnabled : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        NetworkInterfacePort: output.NetworkInterfacePort !== undefined && output.NetworkInterfacePort !== null
            ? output.NetworkInterfacePort
            : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
const deserializeAws_json1_1DisableGatewayOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1DisassociateFileSystemOutput = (output, context) => {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
const deserializeAws_json1_1Disk = (output, context) => {
    return {
        DiskAllocationResource: output.DiskAllocationResource !== undefined && output.DiskAllocationResource !== null
            ? output.DiskAllocationResource
            : undefined,
        DiskAllocationType: output.DiskAllocationType !== undefined && output.DiskAllocationType !== null
            ? output.DiskAllocationType
            : undefined,
        DiskAttributeList: output.DiskAttributeList !== undefined && output.DiskAttributeList !== null
            ? deserializeAws_json1_1DiskAttributeList(output.DiskAttributeList, context)
            : undefined,
        DiskId: output.DiskId !== undefined && output.DiskId !== null ? output.DiskId : undefined,
        DiskNode: output.DiskNode !== undefined && output.DiskNode !== null ? output.DiskNode : undefined,
        DiskPath: output.DiskPath !== undefined && output.DiskPath !== null ? output.DiskPath : undefined,
        DiskSizeInBytes: output.DiskSizeInBytes !== undefined && output.DiskSizeInBytes !== null ? output.DiskSizeInBytes : undefined,
        DiskStatus: output.DiskStatus !== undefined && output.DiskStatus !== null ? output.DiskStatus : undefined,
    };
};
const deserializeAws_json1_1DiskAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DiskIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Disks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Disk(entry, context);
    });
};
const deserializeAws_json1_1errorDetails = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1FileShareClientList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FileShareInfo = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        FileShareId: output.FileShareId !== undefined && output.FileShareId !== null ? output.FileShareId : undefined,
        FileShareStatus: output.FileShareStatus !== undefined && output.FileShareStatus !== null ? output.FileShareStatus : undefined,
        FileShareType: output.FileShareType !== undefined && output.FileShareType !== null ? output.FileShareType : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1FileShareInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileShareInfo(entry, context);
    });
};
const deserializeAws_json1_1FileSystemAssociationInfo = (output, context) => {
    return {
        AuditDestinationARN: output.AuditDestinationARN !== undefined && output.AuditDestinationARN !== null
            ? output.AuditDestinationARN
            : undefined,
        CacheAttributes: output.CacheAttributes !== undefined && output.CacheAttributes !== null
            ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
            : undefined,
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
        FileSystemAssociationStatus: output.FileSystemAssociationStatus !== undefined && output.FileSystemAssociationStatus !== null
            ? output.FileSystemAssociationStatus
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        LocationARN: output.LocationARN !== undefined && output.LocationARN !== null ? output.LocationARN : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1FileSystemAssociationInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystemAssociationInfo(entry, context);
    });
};
const deserializeAws_json1_1FileSystemAssociationSummary = (output, context) => {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
        FileSystemAssociationId: output.FileSystemAssociationId !== undefined && output.FileSystemAssociationId !== null
            ? output.FileSystemAssociationId
            : undefined,
        FileSystemAssociationStatus: output.FileSystemAssociationStatus !== undefined && output.FileSystemAssociationStatus !== null
            ? output.FileSystemAssociationStatus
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1FileSystemAssociationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystemAssociationSummary(entry, context);
    });
};
const deserializeAws_json1_1GatewayInfo = (output, context) => {
    return {
        Ec2InstanceId: output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null ? output.Ec2InstanceId : undefined,
        Ec2InstanceRegion: output.Ec2InstanceRegion !== undefined && output.Ec2InstanceRegion !== null
            ? output.Ec2InstanceRegion
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GatewayId: output.GatewayId !== undefined && output.GatewayId !== null ? output.GatewayId : undefined,
        GatewayName: output.GatewayName !== undefined && output.GatewayName !== null ? output.GatewayName : undefined,
        GatewayOperationalState: output.GatewayOperationalState !== undefined && output.GatewayOperationalState !== null
            ? output.GatewayOperationalState
            : undefined,
        GatewayType: output.GatewayType !== undefined && output.GatewayType !== null ? output.GatewayType : undefined,
    };
};
const deserializeAws_json1_1GatewayNetworkInterfaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};
const deserializeAws_json1_1Gateways = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GatewayInfo(entry, context);
    });
};
const deserializeAws_json1_1Initiators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidGatewayRequestException = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1JoinDomainOutput = (output, context) => {
    return {
        ActiveDirectoryStatus: output.ActiveDirectoryStatus !== undefined && output.ActiveDirectoryStatus !== null
            ? output.ActiveDirectoryStatus
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput = (output, context) => {
    return {
        AutomaticTapeCreationPolicyInfos: output.AutomaticTapeCreationPolicyInfos !== undefined && output.AutomaticTapeCreationPolicyInfos !== null
            ? deserializeAws_json1_1AutomaticTapeCreationPolicyInfos(output.AutomaticTapeCreationPolicyInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListFileSharesOutput = (output, context) => {
    return {
        FileShareInfoList: output.FileShareInfoList !== undefined && output.FileShareInfoList !== null
            ? deserializeAws_json1_1FileShareInfoList(output.FileShareInfoList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListFileSystemAssociationsOutput = (output, context) => {
    return {
        FileSystemAssociationSummaryList: output.FileSystemAssociationSummaryList !== undefined && output.FileSystemAssociationSummaryList !== null
            ? deserializeAws_json1_1FileSystemAssociationSummaryList(output.FileSystemAssociationSummaryList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListGatewaysOutput = (output, context) => {
    return {
        Gateways: output.Gateways !== undefined && output.Gateways !== null
            ? deserializeAws_json1_1Gateways(output.Gateways, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListLocalDisksOutput = (output, context) => {
    return {
        Disks: output.Disks !== undefined && output.Disks !== null
            ? deserializeAws_json1_1Disks(output.Disks, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListTapePoolsOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        PoolInfos: output.PoolInfos !== undefined && output.PoolInfos !== null
            ? deserializeAws_json1_1PoolInfos(output.PoolInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTapesOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeInfos: output.TapeInfos !== undefined && output.TapeInfos !== null
            ? deserializeAws_json1_1TapeInfos(output.TapeInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVolumeInitiatorsOutput = (output, context) => {
    return {
        Initiators: output.Initiators !== undefined && output.Initiators !== null
            ? deserializeAws_json1_1Initiators(output.Initiators, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVolumeRecoveryPointsOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        VolumeRecoveryPointInfos: output.VolumeRecoveryPointInfos !== undefined && output.VolumeRecoveryPointInfos !== null
            ? deserializeAws_json1_1VolumeRecoveryPointInfos(output.VolumeRecoveryPointInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVolumesOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        VolumeInfos: output.VolumeInfos !== undefined && output.VolumeInfos !== null
            ? deserializeAws_json1_1VolumeInfos(output.VolumeInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    return {
        Ipv4Address: output.Ipv4Address !== undefined && output.Ipv4Address !== null ? output.Ipv4Address : undefined,
        Ipv6Address: output.Ipv6Address !== undefined && output.Ipv6Address !== null ? output.Ipv6Address : undefined,
        MacAddress: output.MacAddress !== undefined && output.MacAddress !== null ? output.MacAddress : undefined,
    };
};
const deserializeAws_json1_1NFSFileShareDefaults = (output, context) => {
    return {
        DirectoryMode: output.DirectoryMode !== undefined && output.DirectoryMode !== null ? output.DirectoryMode : undefined,
        FileMode: output.FileMode !== undefined && output.FileMode !== null ? output.FileMode : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    };
};
const deserializeAws_json1_1NFSFileShareInfo = (output, context) => {
    return {
        CacheAttributes: output.CacheAttributes !== undefined && output.CacheAttributes !== null
            ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
            : undefined,
        ClientList: output.ClientList !== undefined && output.ClientList !== null
            ? deserializeAws_json1_1FileShareClientList(output.ClientList, context)
            : undefined,
        DefaultStorageClass: output.DefaultStorageClass !== undefined && output.DefaultStorageClass !== null
            ? output.DefaultStorageClass
            : undefined,
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        FileShareId: output.FileShareId !== undefined && output.FileShareId !== null ? output.FileShareId : undefined,
        FileShareName: output.FileShareName !== undefined && output.FileShareName !== null ? output.FileShareName : undefined,
        FileShareStatus: output.FileShareStatus !== undefined && output.FileShareStatus !== null ? output.FileShareStatus : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GuessMIMETypeEnabled: output.GuessMIMETypeEnabled !== undefined && output.GuessMIMETypeEnabled !== null
            ? output.GuessMIMETypeEnabled
            : undefined,
        KMSEncrypted: output.KMSEncrypted !== undefined && output.KMSEncrypted !== null ? output.KMSEncrypted : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        LocationARN: output.LocationARN !== undefined && output.LocationARN !== null ? output.LocationARN : undefined,
        NFSFileShareDefaults: output.NFSFileShareDefaults !== undefined && output.NFSFileShareDefaults !== null
            ? deserializeAws_json1_1NFSFileShareDefaults(output.NFSFileShareDefaults, context)
            : undefined,
        NotificationPolicy: output.NotificationPolicy !== undefined && output.NotificationPolicy !== null
            ? output.NotificationPolicy
            : undefined,
        ObjectACL: output.ObjectACL !== undefined && output.ObjectACL !== null ? output.ObjectACL : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        ReadOnly: output.ReadOnly !== undefined && output.ReadOnly !== null ? output.ReadOnly : undefined,
        RequesterPays: output.RequesterPays !== undefined && output.RequesterPays !== null ? output.RequesterPays : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Squash: output.Squash !== undefined && output.Squash !== null ? output.Squash : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1NFSFileShareInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NFSFileShareInfo(entry, context);
    });
};
const deserializeAws_json1_1NotifyWhenUploadedOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        NotificationId: output.NotificationId !== undefined && output.NotificationId !== null ? output.NotificationId : undefined,
    };
};
const deserializeAws_json1_1PoolInfo = (output, context) => {
    return {
        PoolARN: output.PoolARN !== undefined && output.PoolARN !== null ? output.PoolARN : undefined,
        PoolName: output.PoolName !== undefined && output.PoolName !== null ? output.PoolName : undefined,
        PoolStatus: output.PoolStatus !== undefined && output.PoolStatus !== null ? output.PoolStatus : undefined,
        RetentionLockTimeInDays: output.RetentionLockTimeInDays !== undefined && output.RetentionLockTimeInDays !== null
            ? output.RetentionLockTimeInDays
            : undefined,
        RetentionLockType: output.RetentionLockType !== undefined && output.RetentionLockType !== null
            ? output.RetentionLockType
            : undefined,
        StorageClass: output.StorageClass !== undefined && output.StorageClass !== null ? output.StorageClass : undefined,
    };
};
const deserializeAws_json1_1PoolInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PoolInfo(entry, context);
    });
};
const deserializeAws_json1_1RefreshCacheOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        NotificationId: output.NotificationId !== undefined && output.NotificationId !== null ? output.NotificationId : undefined,
    };
};
const deserializeAws_json1_1RemoveTagsFromResourceOutput = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1ResetCacheOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1RetrieveTapeArchiveOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
const deserializeAws_json1_1ServiceUnavailableError = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SetLocalConsolePasswordOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1SetSMBGuestPasswordOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1ShutdownGatewayOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1SMBFileShareInfo = (output, context) => {
    return {
        AccessBasedEnumeration: output.AccessBasedEnumeration !== undefined && output.AccessBasedEnumeration !== null
            ? output.AccessBasedEnumeration
            : undefined,
        AdminUserList: output.AdminUserList !== undefined && output.AdminUserList !== null
            ? deserializeAws_json1_1UserList(output.AdminUserList, context)
            : undefined,
        AuditDestinationARN: output.AuditDestinationARN !== undefined && output.AuditDestinationARN !== null
            ? output.AuditDestinationARN
            : undefined,
        Authentication: output.Authentication !== undefined && output.Authentication !== null ? output.Authentication : undefined,
        CacheAttributes: output.CacheAttributes !== undefined && output.CacheAttributes !== null
            ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
            : undefined,
        CaseSensitivity: output.CaseSensitivity !== undefined && output.CaseSensitivity !== null ? output.CaseSensitivity : undefined,
        DefaultStorageClass: output.DefaultStorageClass !== undefined && output.DefaultStorageClass !== null
            ? output.DefaultStorageClass
            : undefined,
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        FileShareId: output.FileShareId !== undefined && output.FileShareId !== null ? output.FileShareId : undefined,
        FileShareName: output.FileShareName !== undefined && output.FileShareName !== null ? output.FileShareName : undefined,
        FileShareStatus: output.FileShareStatus !== undefined && output.FileShareStatus !== null ? output.FileShareStatus : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GuessMIMETypeEnabled: output.GuessMIMETypeEnabled !== undefined && output.GuessMIMETypeEnabled !== null
            ? output.GuessMIMETypeEnabled
            : undefined,
        InvalidUserList: output.InvalidUserList !== undefined && output.InvalidUserList !== null
            ? deserializeAws_json1_1UserList(output.InvalidUserList, context)
            : undefined,
        KMSEncrypted: output.KMSEncrypted !== undefined && output.KMSEncrypted !== null ? output.KMSEncrypted : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        LocationARN: output.LocationARN !== undefined && output.LocationARN !== null ? output.LocationARN : undefined,
        NotificationPolicy: output.NotificationPolicy !== undefined && output.NotificationPolicy !== null
            ? output.NotificationPolicy
            : undefined,
        ObjectACL: output.ObjectACL !== undefined && output.ObjectACL !== null ? output.ObjectACL : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        ReadOnly: output.ReadOnly !== undefined && output.ReadOnly !== null ? output.ReadOnly : undefined,
        RequesterPays: output.RequesterPays !== undefined && output.RequesterPays !== null ? output.RequesterPays : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        SMBACLEnabled: output.SMBACLEnabled !== undefined && output.SMBACLEnabled !== null ? output.SMBACLEnabled : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        ValidUserList: output.ValidUserList !== undefined && output.ValidUserList !== null
            ? deserializeAws_json1_1UserList(output.ValidUserList, context)
            : undefined,
    };
};
const deserializeAws_json1_1SMBFileShareInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SMBFileShareInfo(entry, context);
    });
};
const deserializeAws_json1_1StartAvailabilityMonitorTestOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1StartGatewayOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1StorageGatewayError = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorDetails: output.errorDetails !== undefined && output.errorDetails !== null
            ? deserializeAws_json1_1errorDetails(output.errorDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1StorediSCSIVolume = (output, context) => {
    return {
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        PreservedExistingData: output.PreservedExistingData !== undefined && output.PreservedExistingData !== null
            ? output.PreservedExistingData
            : undefined,
        SourceSnapshotId: output.SourceSnapshotId !== undefined && output.SourceSnapshotId !== null ? output.SourceSnapshotId : undefined,
        TargetName: output.TargetName !== undefined && output.TargetName !== null ? output.TargetName : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeAttachmentStatus: output.VolumeAttachmentStatus !== undefined && output.VolumeAttachmentStatus !== null
            ? output.VolumeAttachmentStatus
            : undefined,
        VolumeDiskId: output.VolumeDiskId !== undefined && output.VolumeDiskId !== null ? output.VolumeDiskId : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
        VolumeProgress: output.VolumeProgress !== undefined && output.VolumeProgress !== null ? output.VolumeProgress : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
        VolumeStatus: output.VolumeStatus !== undefined && output.VolumeStatus !== null ? output.VolumeStatus : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
        VolumeUsedInBytes: output.VolumeUsedInBytes !== undefined && output.VolumeUsedInBytes !== null
            ? output.VolumeUsedInBytes
            : undefined,
        VolumeiSCSIAttributes: output.VolumeiSCSIAttributes !== undefined && output.VolumeiSCSIAttributes !== null
            ? deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1StorediSCSIVolumes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StorediSCSIVolume(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1Tape = (output, context) => {
    return {
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        PoolEntryDate: output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
            ? new Date(Math.round(output.PoolEntryDate * 1000))
            : undefined,
        PoolId: output.PoolId !== undefined && output.PoolId !== null ? output.PoolId : undefined,
        Progress: output.Progress !== undefined && output.Progress !== null ? output.Progress : undefined,
        RetentionStartDate: output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
            ? new Date(Math.round(output.RetentionStartDate * 1000))
            : undefined,
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
        TapeBarcode: output.TapeBarcode !== undefined && output.TapeBarcode !== null ? output.TapeBarcode : undefined,
        TapeCreatedDate: output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
            ? new Date(Math.round(output.TapeCreatedDate * 1000))
            : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        TapeStatus: output.TapeStatus !== undefined && output.TapeStatus !== null ? output.TapeStatus : undefined,
        TapeUsedInBytes: output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null ? output.TapeUsedInBytes : undefined,
        VTLDevice: output.VTLDevice !== undefined && output.VTLDevice !== null ? output.VTLDevice : undefined,
        Worm: output.Worm !== undefined && output.Worm !== null ? output.Worm : undefined,
    };
};
const deserializeAws_json1_1TapeArchive = (output, context) => {
    return {
        CompletionTime: output.CompletionTime !== undefined && output.CompletionTime !== null
            ? new Date(Math.round(output.CompletionTime * 1000))
            : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        PoolEntryDate: output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
            ? new Date(Math.round(output.PoolEntryDate * 1000))
            : undefined,
        PoolId: output.PoolId !== undefined && output.PoolId !== null ? output.PoolId : undefined,
        RetentionStartDate: output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
            ? new Date(Math.round(output.RetentionStartDate * 1000))
            : undefined,
        RetrievedTo: output.RetrievedTo !== undefined && output.RetrievedTo !== null ? output.RetrievedTo : undefined,
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
        TapeBarcode: output.TapeBarcode !== undefined && output.TapeBarcode !== null ? output.TapeBarcode : undefined,
        TapeCreatedDate: output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
            ? new Date(Math.round(output.TapeCreatedDate * 1000))
            : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        TapeStatus: output.TapeStatus !== undefined && output.TapeStatus !== null ? output.TapeStatus : undefined,
        TapeUsedInBytes: output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null ? output.TapeUsedInBytes : undefined,
        Worm: output.Worm !== undefined && output.Worm !== null ? output.Worm : undefined,
    };
};
const deserializeAws_json1_1TapeArchives = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeArchive(entry, context);
    });
};
const deserializeAws_json1_1TapeARNs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TapeInfo = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        PoolEntryDate: output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
            ? new Date(Math.round(output.PoolEntryDate * 1000))
            : undefined,
        PoolId: output.PoolId !== undefined && output.PoolId !== null ? output.PoolId : undefined,
        RetentionStartDate: output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
            ? new Date(Math.round(output.RetentionStartDate * 1000))
            : undefined,
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
        TapeBarcode: output.TapeBarcode !== undefined && output.TapeBarcode !== null ? output.TapeBarcode : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        TapeStatus: output.TapeStatus !== undefined && output.TapeStatus !== null ? output.TapeStatus : undefined,
    };
};
const deserializeAws_json1_1TapeInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeInfo(entry, context);
    });
};
const deserializeAws_json1_1TapeRecoveryPointInfo = (output, context) => {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
        TapeRecoveryPointTime: output.TapeRecoveryPointTime !== undefined && output.TapeRecoveryPointTime !== null
            ? new Date(Math.round(output.TapeRecoveryPointTime * 1000))
            : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        TapeStatus: output.TapeStatus !== undefined && output.TapeStatus !== null ? output.TapeStatus : undefined,
    };
};
const deserializeAws_json1_1TapeRecoveryPointInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeRecoveryPointInfo(entry, context);
    });
};
const deserializeAws_json1_1Tapes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tape(entry, context);
    });
};
const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateBandwidthRateLimitOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateChapCredentialsOutput = (output, context) => {
    return {
        InitiatorName: output.InitiatorName !== undefined && output.InitiatorName !== null ? output.InitiatorName : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
const deserializeAws_json1_1UpdateFileSystemAssociationOutput = (output, context) => {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
const deserializeAws_json1_1UpdateGatewayInformationOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GatewayName: output.GatewayName !== undefined && output.GatewayName !== null ? output.GatewayName : undefined,
    };
};
const deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateNFSFileShareOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
const deserializeAws_json1_1UpdateSMBFileShareOutput = (output, context) => {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
const deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
const deserializeAws_json1_1UpdateSnapshotScheduleOutput = (output, context) => {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
const deserializeAws_json1_1UpdateVTLDeviceTypeOutput = (output, context) => {
    return {
        VTLDeviceARN: output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null ? output.VTLDeviceARN : undefined,
    };
};
const deserializeAws_json1_1UserList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1VolumeInfo = (output, context) => {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GatewayId: output.GatewayId !== undefined && output.GatewayId !== null ? output.GatewayId : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeAttachmentStatus: output.VolumeAttachmentStatus !== undefined && output.VolumeAttachmentStatus !== null
            ? output.VolumeAttachmentStatus
            : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1VolumeInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeInfo(entry, context);
    });
};
const deserializeAws_json1_1VolumeiSCSIAttributes = (output, context) => {
    return {
        ChapEnabled: output.ChapEnabled !== undefined && output.ChapEnabled !== null ? output.ChapEnabled : undefined,
        LunNumber: output.LunNumber !== undefined && output.LunNumber !== null ? output.LunNumber : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        NetworkInterfacePort: output.NetworkInterfacePort !== undefined && output.NetworkInterfacePort !== null
            ? output.NetworkInterfacePort
            : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
const deserializeAws_json1_1VolumeRecoveryPointInfo = (output, context) => {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeRecoveryPointTime: output.VolumeRecoveryPointTime !== undefined && output.VolumeRecoveryPointTime !== null
            ? output.VolumeRecoveryPointTime
            : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
        VolumeUsageInBytes: output.VolumeUsageInBytes !== undefined && output.VolumeUsageInBytes !== null
            ? output.VolumeUsageInBytes
            : undefined,
    };
};
const deserializeAws_json1_1VolumeRecoveryPointInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context);
    });
};
const deserializeAws_json1_1VTLDevice = (output, context) => {
    return {
        DeviceiSCSIAttributes: output.DeviceiSCSIAttributes !== undefined && output.DeviceiSCSIAttributes !== null
            ? deserializeAws_json1_1DeviceiSCSIAttributes(output.DeviceiSCSIAttributes, context)
            : undefined,
        VTLDeviceARN: output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null ? output.VTLDeviceARN : undefined,
        VTLDeviceProductIdentifier: output.VTLDeviceProductIdentifier !== undefined && output.VTLDeviceProductIdentifier !== null
            ? output.VTLDeviceProductIdentifier
            : undefined,
        VTLDeviceType: output.VTLDeviceType !== undefined && output.VTLDeviceType !== null ? output.VTLDeviceType : undefined,
        VTLDeviceVendor: output.VTLDeviceVendor !== undefined && output.VTLDeviceVendor !== null ? output.VTLDeviceVendor : undefined,
    };
};
const deserializeAws_json1_1VTLDevices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VTLDevice(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map