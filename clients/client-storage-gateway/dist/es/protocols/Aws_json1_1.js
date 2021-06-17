import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1ActivateGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ActivateGateway",
        };
        body = JSON.stringify(serializeAws_json1_1ActivateGatewayInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddCacheCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AddCache",
        };
        body = JSON.stringify(serializeAws_json1_1AddCacheInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddTagsToResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AddTagsToResource",
        };
        body = JSON.stringify(serializeAws_json1_1AddTagsToResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddUploadBufferCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AddUploadBuffer",
        };
        body = JSON.stringify(serializeAws_json1_1AddUploadBufferInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddWorkingStorageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AddWorkingStorage",
        };
        body = JSON.stringify(serializeAws_json1_1AddWorkingStorageInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssignTapePoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AssignTapePool",
        };
        body = JSON.stringify(serializeAws_json1_1AssignTapePoolInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AssociateFileSystem",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateFileSystemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AttachVolumeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.AttachVolume",
        };
        body = JSON.stringify(serializeAws_json1_1AttachVolumeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelArchivalCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CancelArchival",
        };
        body = JSON.stringify(serializeAws_json1_1CancelArchivalInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelRetrievalCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CancelRetrieval",
        };
        body = JSON.stringify(serializeAws_json1_1CancelRetrievalInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCachediSCSIVolumeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateCachediSCSIVolume",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateNFSFileShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateNFSFileShare",
        };
        body = JSON.stringify(serializeAws_json1_1CreateNFSFileShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSMBFileShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateSMBFileShare",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSMBFileShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateSnapshot",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSnapshotInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateStorediSCSIVolumeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateStorediSCSIVolume",
        };
        body = JSON.stringify(serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTapePoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateTapePool",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTapePoolInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTapesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateTapes",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTapesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTapeWithBarcodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.CreateTapeWithBarcode",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTapeWithBarcodeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteBandwidthRateLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteBandwidthRateLimit",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteChapCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteChapCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteChapCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFileShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteFileShare",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFileShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteGateway",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteGatewayInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteSnapshotSchedule",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSnapshotScheduleInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTapeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteTape",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTapeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTapeArchiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteTapeArchive",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTapeArchiveInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTapePoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteTapePool",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTapePoolInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteVolumeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DeleteVolume",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteVolumeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeAvailabilityMonitorTest",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeBandwidthRateLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimit",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCacheCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeCache",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCacheInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCachediSCSIVolumesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeCachediSCSIVolumes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeChapCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeChapCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeChapCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFileSystemAssociationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeFileSystemAssociations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAssociationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeGatewayInformationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeGatewayInformation",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeGatewayInformationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeMaintenanceStartTimeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeMaintenanceStartTime",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeNFSFileSharesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeNFSFileShares",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeNFSFileSharesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSMBFileSharesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeSMBFileShares",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSMBFileSharesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSMBSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeSMBSettings",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSMBSettingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeSnapshotSchedule",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSnapshotScheduleInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeStorediSCSIVolumesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeStorediSCSIVolumes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTapeArchivesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeTapeArchives",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTapeArchivesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTapeRecoveryPointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeTapeRecoveryPoints",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTapesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeTapes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTapesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeUploadBufferCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeUploadBuffer",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeUploadBufferInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeVTLDevicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeVTLDevices",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeVTLDevicesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeWorkingStorageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DescribeWorkingStorage",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeWorkingStorageInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DetachVolumeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DetachVolume",
        };
        body = JSON.stringify(serializeAws_json1_1DetachVolumeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DisableGateway",
        };
        body = JSON.stringify(serializeAws_json1_1DisableGatewayInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.DisassociateFileSystem",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1JoinDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.JoinDomain",
        };
        body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListAutomaticTapeCreationPolicies",
        };
        body = JSON.stringify(serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListFileSharesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListFileShares",
        };
        body = JSON.stringify(serializeAws_json1_1ListFileSharesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListFileSystemAssociationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListFileSystemAssociations",
        };
        body = JSON.stringify(serializeAws_json1_1ListFileSystemAssociationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGatewaysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListGateways",
        };
        body = JSON.stringify(serializeAws_json1_1ListGatewaysInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListLocalDisksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListLocalDisks",
        };
        body = JSON.stringify(serializeAws_json1_1ListLocalDisksInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTapePoolsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListTapePools",
        };
        body = JSON.stringify(serializeAws_json1_1ListTapePoolsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTapesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListTapes",
        };
        body = JSON.stringify(serializeAws_json1_1ListTapesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListVolumeInitiatorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListVolumeInitiators",
        };
        body = JSON.stringify(serializeAws_json1_1ListVolumeInitiatorsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListVolumeRecoveryPointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListVolumeRecoveryPoints",
        };
        body = JSON.stringify(serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListVolumesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ListVolumes",
        };
        body = JSON.stringify(serializeAws_json1_1ListVolumesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1NotifyWhenUploadedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.NotifyWhenUploaded",
        };
        body = JSON.stringify(serializeAws_json1_1NotifyWhenUploadedInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RefreshCacheCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.RefreshCache",
        };
        body = JSON.stringify(serializeAws_json1_1RefreshCacheInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveTagsFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.RemoveTagsFromResource",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ResetCacheCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ResetCache",
        };
        body = JSON.stringify(serializeAws_json1_1ResetCacheInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetrieveTapeArchiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.RetrieveTapeArchive",
        };
        body = JSON.stringify(serializeAws_json1_1RetrieveTapeArchiveInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetrieveTapeRecoveryPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.RetrieveTapeRecoveryPoint",
        };
        body = JSON.stringify(serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetLocalConsolePasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.SetLocalConsolePassword",
        };
        body = JSON.stringify(serializeAws_json1_1SetLocalConsolePasswordInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetSMBGuestPasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.SetSMBGuestPassword",
        };
        body = JSON.stringify(serializeAws_json1_1SetSMBGuestPasswordInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ShutdownGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.ShutdownGateway",
        };
        body = JSON.stringify(serializeAws_json1_1ShutdownGatewayInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartAvailabilityMonitorTestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.StartAvailabilityMonitorTest",
        };
        body = JSON.stringify(serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartGatewayCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.StartGateway",
        };
        body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateBandwidthRateLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimit",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateChapCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateChapCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateChapCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateFileSystemAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateFileSystemAssociation",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateFileSystemAssociationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGatewayInformationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateGatewayInformation",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGatewayInformationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGatewaySoftwareNowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateGatewaySoftwareNow",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateMaintenanceStartTimeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateMaintenanceStartTime",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateNFSFileShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateNFSFileShare",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateNFSFileShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateSMBFileShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShare",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateSMBFileShareVisibilityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShareVisibility",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareVisibilityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateSMBSecurityStrategyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateSMBSecurityStrategy",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateSnapshotSchedule",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateSnapshotScheduleInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateVTLDeviceTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StorageGateway_20130630.UpdateVTLDeviceType",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1ActivateGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ActivateGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ActivateGatewayOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ActivateGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddCacheCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddCacheCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddCacheOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddCacheCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddTagsToResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddTagsToResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddTagsToResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddTagsToResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddUploadBufferCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddUploadBufferCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddUploadBufferOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddUploadBufferCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddWorkingStorageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddWorkingStorageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddWorkingStorageOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddWorkingStorageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssignTapePoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssignTapePoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssignTapePoolOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssignTapePoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateFileSystemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateFileSystemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AttachVolumeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AttachVolumeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AttachVolumeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AttachVolumeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CancelArchivalCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelArchivalCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelArchivalOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelArchivalCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CancelRetrievalCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelRetrievalCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelRetrievalOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelRetrievalCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateCachediSCSIVolumeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCachediSCSIVolumeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCachediSCSIVolumeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateNFSFileShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateNFSFileShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateNFSFileShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateNFSFileShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateSMBFileShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSMBFileShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSMBFileShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSMBFileShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSnapshotOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "ServiceUnavailableError": return [3 /*break*/, 6];
                    case "com.amazonaws.storagegateway#ServiceUnavailableError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "ServiceUnavailableError": return [3 /*break*/, 6];
                    case "com.amazonaws.storagegateway#ServiceUnavailableError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateStorediSCSIVolumeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateStorediSCSIVolumeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateStorediSCSIVolumeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTapePoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTapePoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTapePoolOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTapePoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTapesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTapesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTapesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTapesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTapeWithBarcodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTapeWithBarcodeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTapeWithBarcodeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTapeWithBarcodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteBandwidthRateLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteBandwidthRateLimitOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteBandwidthRateLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteChapCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteChapCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteChapCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteChapCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteFileShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFileShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteFileShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteFileShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteGatewayOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSnapshotScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteSnapshotScheduleOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteTapeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTapeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTapeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTapeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteTapeArchiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTapeArchiveOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTapeArchiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteTapePoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTapePoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTapePoolOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTapePoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteVolumeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteVolumeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteVolumeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteVolumeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeBandwidthRateLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeBandwidthRateLimitOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeBandwidthRateLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeCacheCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCacheCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCacheOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCacheCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCachediSCSIVolumesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeChapCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeChapCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeChapCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeChapCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeFileSystemAssociationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFileSystemAssociationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFileSystemAssociationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFileSystemAssociationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeGatewayInformationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeGatewayInformationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeGatewayInformationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeGatewayInformationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeMaintenanceStartTimeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeNFSFileSharesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeNFSFileSharesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeNFSFileSharesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeNFSFileSharesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeSMBFileSharesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSMBFileSharesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSMBFileSharesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSMBFileSharesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeSMBSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSMBSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSMBSettingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSMBSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSnapshotScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSnapshotScheduleOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeStorediSCSIVolumesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTapeArchivesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTapeArchivesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTapeArchivesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTapeArchivesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTapeRecoveryPointsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTapesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTapesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTapesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTapesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeUploadBufferCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeUploadBufferCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeUploadBufferOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeUploadBufferCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeVTLDevicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeVTLDevicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeVTLDevicesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeVTLDevicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeWorkingStorageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeWorkingStorageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeWorkingStorageOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeWorkingStorageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DetachVolumeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DetachVolumeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DetachVolumeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DetachVolumeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisableGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisableGatewayOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisableGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateFileSystemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateFileSystemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1JoinDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1JoinDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1JoinDomainOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1JoinDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListFileSharesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListFileSharesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListFileSharesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListFileSharesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListFileSystemAssociationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListFileSystemAssociationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListFileSystemAssociationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListFileSystemAssociationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListGatewaysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGatewaysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGatewaysOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGatewaysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListLocalDisksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListLocalDisksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListLocalDisksOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListLocalDisksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTapePoolsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTapePoolsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTapePoolsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTapePoolsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTapesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTapesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTapesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTapesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListVolumeInitiatorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListVolumeInitiatorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListVolumeInitiatorsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListVolumeInitiatorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListVolumeRecoveryPointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListVolumeRecoveryPointsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListVolumeRecoveryPointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListVolumesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListVolumesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListVolumesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListVolumesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1NotifyWhenUploadedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1NotifyWhenUploadedCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1NotifyWhenUploadedOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1NotifyWhenUploadedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RefreshCacheCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RefreshCacheCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RefreshCacheOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RefreshCacheCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RemoveTagsFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveTagsFromResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveTagsFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ResetCacheCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ResetCacheCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ResetCacheOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ResetCacheCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RetrieveTapeArchiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetrieveTapeArchiveCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RetrieveTapeArchiveOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RetrieveTapeArchiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RetrieveTapeRecoveryPointOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetLocalConsolePasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetLocalConsolePasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetLocalConsolePasswordOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetLocalConsolePasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetSMBGuestPasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetSMBGuestPasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetSMBGuestPasswordOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetSMBGuestPasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ShutdownGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ShutdownGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ShutdownGatewayOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ShutdownGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartAvailabilityMonitorTestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartAvailabilityMonitorTestOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartAvailabilityMonitorTestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartGatewayCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartGatewayCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartGatewayOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartGatewayCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateBandwidthRateLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateBandwidthRateLimitOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateBandwidthRateLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateChapCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateChapCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateChapCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateChapCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateFileSystemAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateFileSystemAssociationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateFileSystemAssociationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateFileSystemAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGatewayInformationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGatewayInformationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGatewayInformationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGatewayInformationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGatewaySoftwareNowOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateMaintenanceStartTimeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateNFSFileShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateNFSFileShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateNFSFileShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateNFSFileShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateSMBFileShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateSMBFileShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateSMBFileShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateSMBFileShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateSMBSecurityStrategyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateSnapshotScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateSnapshotScheduleOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateVTLDeviceTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateVTLDeviceTypeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateVTLDeviceTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.storagegateway#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidGatewayRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.storagegateway#InvalidGatewayRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGatewayRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGatewayRequestException(body, context);
        contents = __assign({ name: "InvalidGatewayRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceUnavailableErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceUnavailableError(body, context);
        contents = __assign({ name: "ServiceUnavailableError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1ActivateGatewayInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ActivationKey !== undefined && input.ActivationKey !== null && { ActivationKey: input.ActivationKey })), (input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName })), (input.GatewayRegion !== undefined && input.GatewayRegion !== null && { GatewayRegion: input.GatewayRegion })), (input.GatewayTimezone !== undefined &&
        input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone })), (input.GatewayType !== undefined && input.GatewayType !== null && { GatewayType: input.GatewayType })), (input.MediumChangerType !== undefined &&
        input.MediumChangerType !== null && { MediumChangerType: input.MediumChangerType })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.TapeDriveType !== undefined && input.TapeDriveType !== null && { TapeDriveType: input.TapeDriveType }));
};
var serializeAws_json1_1AddCacheInput = function (input, context) {
    return __assign(__assign({}, (input.DiskIds !== undefined &&
        input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1AddTagsToResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1AddUploadBufferInput = function (input, context) {
    return __assign(__assign({}, (input.DiskIds !== undefined &&
        input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1AddWorkingStorageInput = function (input, context) {
    return __assign(__assign({}, (input.DiskIds !== undefined &&
        input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1AssignTapePoolInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.BypassGovernanceRetention !== undefined &&
        input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention })), (input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1AssociateFileSystemInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AuditDestinationARN !== undefined &&
        input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN })), (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_json1_1AttachVolumeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.NetworkInterfaceId !== undefined &&
        input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId })), (input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName })), (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1AutomaticTapeCreationRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.MinimumNumTapes !== undefined &&
        input.MinimumNumTapes !== null && { MinimumNumTapes: input.MinimumNumTapes })), (input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId })), (input.TapeBarcodePrefix !== undefined &&
        input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix })), (input.TapeSizeInBytes !== undefined &&
        input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes })), (input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }));
};
var serializeAws_json1_1AutomaticTapeCreationRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};
var serializeAws_json1_1BandwidthRateLimitInterval = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
        input.AverageDownloadRateLimitInBitsPerSec !== null && {
        AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
    })), (input.AverageUploadRateLimitInBitsPerSec !== undefined &&
        input.AverageUploadRateLimitInBitsPerSec !== null && {
        AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    })), (input.DaysOfWeek !== undefined &&
        input.DaysOfWeek !== null && { DaysOfWeek: serializeAws_json1_1DaysOfWeek(input.DaysOfWeek, context) })), (input.EndHourOfDay !== undefined && input.EndHourOfDay !== null && { EndHourOfDay: input.EndHourOfDay })), (input.EndMinuteOfHour !== undefined &&
        input.EndMinuteOfHour !== null && { EndMinuteOfHour: input.EndMinuteOfHour })), (input.StartHourOfDay !== undefined &&
        input.StartHourOfDay !== null && { StartHourOfDay: input.StartHourOfDay })), (input.StartMinuteOfHour !== undefined &&
        input.StartMinuteOfHour !== null && { StartMinuteOfHour: input.StartMinuteOfHour }));
};
var serializeAws_json1_1BandwidthRateLimitIntervals = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};
var serializeAws_json1_1CacheAttributes = function (input, context) {
    return __assign({}, (input.CacheStaleTimeoutInSeconds !== undefined &&
        input.CacheStaleTimeoutInSeconds !== null && { CacheStaleTimeoutInSeconds: input.CacheStaleTimeoutInSeconds }));
};
var serializeAws_json1_1CancelArchivalInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1CancelRetrievalInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1CreateCachediSCSIVolumeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.NetworkInterfaceId !== undefined &&
        input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId })), (input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId })), (input.SourceVolumeARN !== undefined &&
        input.SourceVolumeARN !== null && { SourceVolumeARN: input.SourceVolumeARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName })), (input.VolumeSizeInBytes !== undefined &&
        input.VolumeSizeInBytes !== null && { VolumeSizeInBytes: input.VolumeSizeInBytes }));
};
var serializeAws_json1_1CreateNFSFileShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.ClientList !== undefined &&
        input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) })), (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.DefaultStorageClass !== undefined &&
        input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass })), (input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.GuessMIMETypeEnabled !== undefined &&
        input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN })), (input.NFSFileShareDefaults !== undefined &&
        input.NFSFileShareDefaults !== null && {
        NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
    })), (input.NotificationPolicy !== undefined &&
        input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy })), (input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL })), (input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly })), (input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateSMBFileShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessBasedEnumeration !== undefined &&
        input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration })), (input.AdminUserList !== undefined &&
        input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) })), (input.AuditDestinationARN !== undefined &&
        input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN })), (input.Authentication !== undefined &&
        input.Authentication !== null && { Authentication: input.Authentication })), (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.CaseSensitivity !== undefined &&
        input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity })), (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.DefaultStorageClass !== undefined &&
        input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass })), (input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.GuessMIMETypeEnabled !== undefined &&
        input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled })), (input.InvalidUserList !== undefined &&
        input.InvalidUserList !== null && {
        InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
    })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN })), (input.NotificationPolicy !== undefined &&
        input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy })), (input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL })), (input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly })), (input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.ValidUserList !== undefined &&
        input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }));
};
var serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.SnapshotDescription !== undefined &&
        input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1CreateSnapshotInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.SnapshotDescription !== undefined &&
        input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1CreateStorediSCSIVolumeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.NetworkInterfaceId !== undefined &&
        input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId })), (input.PreserveExistingData !== undefined &&
        input.PreserveExistingData !== null && { PreserveExistingData: input.PreserveExistingData })), (input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }));
};
var serializeAws_json1_1CreateTapePoolInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName })), (input.RetentionLockTimeInDays !== undefined &&
        input.RetentionLockTimeInDays !== null && { RetentionLockTimeInDays: input.RetentionLockTimeInDays })), (input.RetentionLockType !== undefined &&
        input.RetentionLockType !== null && { RetentionLockType: input.RetentionLockType })), (input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateTapesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.NumTapesToCreate !== undefined &&
        input.NumTapesToCreate !== null && { NumTapesToCreate: input.NumTapesToCreate })), (input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.TapeBarcodePrefix !== undefined &&
        input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix })), (input.TapeSizeInBytes !== undefined &&
        input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes })), (input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }));
};
var serializeAws_json1_1CreateTapeWithBarcodeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.TapeBarcode !== undefined && input.TapeBarcode !== null && { TapeBarcode: input.TapeBarcode })), (input.TapeSizeInBytes !== undefined &&
        input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes })), (input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }));
};
var serializeAws_json1_1DaysOfWeek = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DeleteBandwidthRateLimitInput = function (input, context) {
    return __assign(__assign({}, (input.BandwidthType !== undefined && input.BandwidthType !== null && { BandwidthType: input.BandwidthType })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DeleteChapCredentialsInput = function (input, context) {
    return __assign(__assign({}, (input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName })), (input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }));
};
var serializeAws_json1_1DeleteFileShareInput = function (input, context) {
    return __assign(__assign({}, (input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN })), (input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }));
};
var serializeAws_json1_1DeleteGatewayInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DeleteSnapshotScheduleInput = function (input, context) {
    return __assign({}, (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1DeleteTapeArchiveInput = function (input, context) {
    return __assign(__assign({}, (input.BypassGovernanceRetention !== undefined &&
        input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1DeleteTapeInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.BypassGovernanceRetention !== undefined &&
        input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1DeleteTapePoolInput = function (input, context) {
    return __assign({}, (input.PoolARN !== undefined && input.PoolARN !== null && { PoolARN: input.PoolARN }));
};
var serializeAws_json1_1DeleteVolumeInput = function (input, context) {
    return __assign({}, (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1DescribeAvailabilityMonitorTestInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeBandwidthRateLimitInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeCachediSCSIVolumesInput = function (input, context) {
    return __assign({}, (input.VolumeARNs !== undefined &&
        input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }));
};
var serializeAws_json1_1DescribeCacheInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeChapCredentialsInput = function (input, context) {
    return __assign({}, (input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }));
};
var serializeAws_json1_1DescribeFileSystemAssociationsInput = function (input, context) {
    return __assign({}, (input.FileSystemAssociationARNList !== undefined &&
        input.FileSystemAssociationARNList !== null && {
        FileSystemAssociationARNList: serializeAws_json1_1FileSystemAssociationARNList(input.FileSystemAssociationARNList, context),
    }));
};
var serializeAws_json1_1DescribeGatewayInformationInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeMaintenanceStartTimeInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeNFSFileSharesInput = function (input, context) {
    return __assign({}, (input.FileShareARNList !== undefined &&
        input.FileShareARNList !== null && {
        FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
    }));
};
var serializeAws_json1_1DescribeSMBFileSharesInput = function (input, context) {
    return __assign({}, (input.FileShareARNList !== undefined &&
        input.FileShareARNList !== null && {
        FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
    }));
};
var serializeAws_json1_1DescribeSMBSettingsInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeSnapshotScheduleInput = function (input, context) {
    return __assign({}, (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1DescribeStorediSCSIVolumesInput = function (input, context) {
    return __assign({}, (input.VolumeARNs !== undefined &&
        input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }));
};
var serializeAws_json1_1DescribeTapeArchivesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.TapeARNs !== undefined &&
        input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }));
};
var serializeAws_json1_1DescribeTapeRecoveryPointsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1DescribeTapesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.TapeARNs !== undefined &&
        input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }));
};
var serializeAws_json1_1DescribeUploadBufferInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DescribeVTLDevicesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.VTLDeviceARNs !== undefined &&
        input.VTLDeviceARNs !== null && {
        VTLDeviceARNs: serializeAws_json1_1VTLDeviceARNs(input.VTLDeviceARNs, context),
    }));
};
var serializeAws_json1_1DescribeWorkingStorageInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DetachVolumeInput = function (input, context) {
    return __assign(__assign({}, (input.ForceDetach !== undefined && input.ForceDetach !== null && { ForceDetach: input.ForceDetach })), (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1DisableGatewayInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1DisassociateFileSystemInput = function (input, context) {
    return __assign(__assign({}, (input.FileSystemAssociationARN !== undefined &&
        input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN })), (input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }));
};
var serializeAws_json1_1DiskIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FileShareARNList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FileShareClientList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FileSystemAssociationARNList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FolderList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Hosts = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1JoinDomainInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DomainControllers !== undefined &&
        input.DomainControllers !== null && {
        DomainControllers: serializeAws_json1_1Hosts(input.DomainControllers, context),
    })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.OrganizationalUnit !== undefined &&
        input.OrganizationalUnit !== null && { OrganizationalUnit: input.OrganizationalUnit })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.TimeoutInSeconds !== undefined &&
        input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1ListFileSharesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListFileSystemAssociationsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListGatewaysInput = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListLocalDisksInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1ListTagsForResourceInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1ListTapePoolsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.PoolARNs !== undefined &&
        input.PoolARNs !== null && { PoolARNs: serializeAws_json1_1PoolARNs(input.PoolARNs, context) }));
};
var serializeAws_json1_1ListTapesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.TapeARNs !== undefined &&
        input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }));
};
var serializeAws_json1_1ListVolumeInitiatorsInput = function (input, context) {
    return __assign({}, (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1ListVolumeRecoveryPointsInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1ListVolumesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1NFSFileShareDefaults = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DirectoryMode !== undefined && input.DirectoryMode !== null && { DirectoryMode: input.DirectoryMode })), (input.FileMode !== undefined && input.FileMode !== null && { FileMode: input.FileMode })), (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }));
};
var serializeAws_json1_1NotifyWhenUploadedInput = function (input, context) {
    return __assign({}, (input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }));
};
var serializeAws_json1_1PoolARNs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1RefreshCacheInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN })), (input.FolderList !== undefined &&
        input.FolderList !== null && { FolderList: serializeAws_json1_1FolderList(input.FolderList, context) })), (input.Recursive !== undefined && input.Recursive !== null && { Recursive: input.Recursive }));
};
var serializeAws_json1_1RemoveTagsFromResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }));
};
var serializeAws_json1_1ResetCacheInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1RetrieveTapeArchiveInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1RetrieveTapeRecoveryPointInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }));
};
var serializeAws_json1_1SetLocalConsolePasswordInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.LocalConsolePassword !== undefined &&
        input.LocalConsolePassword !== null && { LocalConsolePassword: input.LocalConsolePassword }));
};
var serializeAws_json1_1SetSMBGuestPasswordInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.Password !== undefined && input.Password !== null && { Password: input.Password }));
};
var serializeAws_json1_1ShutdownGatewayInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1StartAvailabilityMonitorTestInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1StartGatewayInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TapeARNs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput = function (input, context) {
    return __assign(__assign({}, (input.AutomaticTapeCreationRules !== undefined &&
        input.AutomaticTapeCreationRules !== null && {
        AutomaticTapeCreationRules: serializeAws_json1_1AutomaticTapeCreationRules(input.AutomaticTapeCreationRules, context),
    })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1UpdateBandwidthRateLimitInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
        input.AverageDownloadRateLimitInBitsPerSec !== null && {
        AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
    })), (input.AverageUploadRateLimitInBitsPerSec !== undefined &&
        input.AverageUploadRateLimitInBitsPerSec !== null && {
        AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput = function (input, context) {
    return __assign(__assign({}, (input.BandwidthRateLimitIntervals !== undefined &&
        input.BandwidthRateLimitIntervals !== null && {
        BandwidthRateLimitIntervals: serializeAws_json1_1BandwidthRateLimitIntervals(input.BandwidthRateLimitIntervals, context),
    })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1UpdateChapCredentialsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName })), (input.SecretToAuthenticateInitiator !== undefined &&
        input.SecretToAuthenticateInitiator !== null && {
        SecretToAuthenticateInitiator: input.SecretToAuthenticateInitiator,
    })), (input.SecretToAuthenticateTarget !== undefined &&
        input.SecretToAuthenticateTarget !== null && { SecretToAuthenticateTarget: input.SecretToAuthenticateTarget })), (input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }));
};
var serializeAws_json1_1UpdateFileSystemAssociationInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AuditDestinationARN !== undefined &&
        input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN })), (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.FileSystemAssociationARN !== undefined &&
        input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_json1_1UpdateGatewayInformationInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CloudWatchLogGroupARN !== undefined &&
        input.CloudWatchLogGroupARN !== null && { CloudWatchLogGroupARN: input.CloudWatchLogGroupARN })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName })), (input.GatewayTimezone !== undefined &&
        input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone }));
};
var serializeAws_json1_1UpdateGatewaySoftwareNowInput = function (input, context) {
    return __assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1UpdateMaintenanceStartTimeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DayOfMonth !== undefined && input.DayOfMonth !== null && { DayOfMonth: input.DayOfMonth })), (input.DayOfWeek !== undefined && input.DayOfWeek !== null && { DayOfWeek: input.DayOfWeek })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.HourOfDay !== undefined && input.HourOfDay !== null && { HourOfDay: input.HourOfDay })), (input.MinuteOfHour !== undefined && input.MinuteOfHour !== null && { MinuteOfHour: input.MinuteOfHour }));
};
var serializeAws_json1_1UpdateNFSFileShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.ClientList !== undefined &&
        input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) })), (input.DefaultStorageClass !== undefined &&
        input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass })), (input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN })), (input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName })), (input.GuessMIMETypeEnabled !== undefined &&
        input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.NFSFileShareDefaults !== undefined &&
        input.NFSFileShareDefaults !== null && {
        NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
    })), (input.NotificationPolicy !== undefined &&
        input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy })), (input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL })), (input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly })), (input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays })), (input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash }));
};
var serializeAws_json1_1UpdateSMBFileShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessBasedEnumeration !== undefined &&
        input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration })), (input.AdminUserList !== undefined &&
        input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) })), (input.AuditDestinationARN !== undefined &&
        input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN })), (input.CacheAttributes !== undefined &&
        input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
    })), (input.CaseSensitivity !== undefined &&
        input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity })), (input.DefaultStorageClass !== undefined &&
        input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass })), (input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN })), (input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName })), (input.GuessMIMETypeEnabled !== undefined &&
        input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled })), (input.InvalidUserList !== undefined &&
        input.InvalidUserList !== null && {
        InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
    })), (input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted })), (input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey })), (input.NotificationPolicy !== undefined &&
        input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy })), (input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL })), (input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly })), (input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays })), (input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled })), (input.ValidUserList !== undefined &&
        input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }));
};
var serializeAws_json1_1UpdateSMBFileShareVisibilityInput = function (input, context) {
    return __assign(__assign({}, (input.FileSharesVisible !== undefined &&
        input.FileSharesVisible !== null && { FileSharesVisible: input.FileSharesVisible })), (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }));
};
var serializeAws_json1_1UpdateSMBSecurityStrategyInput = function (input, context) {
    return __assign(__assign({}, (input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN })), (input.SMBSecurityStrategy !== undefined &&
        input.SMBSecurityStrategy !== null && { SMBSecurityStrategy: input.SMBSecurityStrategy }));
};
var serializeAws_json1_1UpdateSnapshotScheduleInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.RecurrenceInHours !== undefined &&
        input.RecurrenceInHours !== null && { RecurrenceInHours: input.RecurrenceInHours })), (input.StartAt !== undefined && input.StartAt !== null && { StartAt: input.StartAt })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }));
};
var serializeAws_json1_1UpdateVTLDeviceTypeInput = function (input, context) {
    return __assign(__assign({}, (input.DeviceType !== undefined && input.DeviceType !== null && { DeviceType: input.DeviceType })), (input.VTLDeviceARN !== undefined && input.VTLDeviceARN !== null && { VTLDeviceARN: input.VTLDeviceARN }));
};
var serializeAws_json1_1UserList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1VolumeARNs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1VTLDeviceARNs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ActivateGatewayOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1AddCacheOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1AddTagsToResourceOutput = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1AddUploadBufferOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1AddWorkingStorageOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1AssignTapePoolOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1AssociateFileSystemOutput = function (output, context) {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
var deserializeAws_json1_1AttachVolumeOutput = function (output, context) {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1AutomaticTapeCreationPolicyInfo = function (output, context) {
    return {
        AutomaticTapeCreationRules: output.AutomaticTapeCreationRules !== undefined && output.AutomaticTapeCreationRules !== null
            ? deserializeAws_json1_1AutomaticTapeCreationRules(output.AutomaticTapeCreationRules, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1AutomaticTapeCreationPolicyInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutomaticTapeCreationPolicyInfo(entry, context);
    });
};
var deserializeAws_json1_1AutomaticTapeCreationRule = function (output, context) {
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
var deserializeAws_json1_1AutomaticTapeCreationRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};
var deserializeAws_json1_1BandwidthRateLimitInterval = function (output, context) {
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
var deserializeAws_json1_1BandwidthRateLimitIntervals = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};
var deserializeAws_json1_1CacheAttributes = function (output, context) {
    return {
        CacheStaleTimeoutInSeconds: output.CacheStaleTimeoutInSeconds !== undefined && output.CacheStaleTimeoutInSeconds !== null
            ? output.CacheStaleTimeoutInSeconds
            : undefined,
    };
};
var deserializeAws_json1_1CachediSCSIVolume = function (output, context) {
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
var deserializeAws_json1_1CachediSCSIVolumes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CachediSCSIVolume(entry, context);
    });
};
var deserializeAws_json1_1CancelArchivalOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1CancelRetrievalOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1ChapCredentials = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ChapInfo(entry, context);
    });
};
var deserializeAws_json1_1ChapInfo = function (output, context) {
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
var deserializeAws_json1_1CreateCachediSCSIVolumeOutput = function (output, context) {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1CreateNFSFileShareOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
var deserializeAws_json1_1CreateSMBFileShareOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
var deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = function (output, context) {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeRecoveryPointTime: output.VolumeRecoveryPointTime !== undefined && output.VolumeRecoveryPointTime !== null
            ? output.VolumeRecoveryPointTime
            : undefined,
    };
};
var deserializeAws_json1_1CreateSnapshotOutput = function (output, context) {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1CreateStorediSCSIVolumeOutput = function (output, context) {
    return {
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
        VolumeSizeInBytes: output.VolumeSizeInBytes !== undefined && output.VolumeSizeInBytes !== null
            ? output.VolumeSizeInBytes
            : undefined,
    };
};
var deserializeAws_json1_1CreateTapePoolOutput = function (output, context) {
    return {
        PoolARN: output.PoolARN !== undefined && output.PoolARN !== null ? output.PoolARN : undefined,
    };
};
var deserializeAws_json1_1CreateTapesOutput = function (output, context) {
    return {
        TapeARNs: output.TapeARNs !== undefined && output.TapeARNs !== null
            ? deserializeAws_json1_1TapeARNs(output.TapeARNs, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateTapeWithBarcodeOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1DaysOfWeek = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1DeleteBandwidthRateLimitOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1DeleteChapCredentialsOutput = function (output, context) {
    return {
        InitiatorName: output.InitiatorName !== undefined && output.InitiatorName !== null ? output.InitiatorName : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
var deserializeAws_json1_1DeleteFileShareOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
var deserializeAws_json1_1DeleteGatewayOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1DeleteSnapshotScheduleOutput = function (output, context) {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1DeleteTapeArchiveOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1DeleteTapeOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1DeleteTapePoolOutput = function (output, context) {
    return {
        PoolARN: output.PoolARN !== undefined && output.PoolARN !== null ? output.PoolARN : undefined,
    };
};
var deserializeAws_json1_1DeleteVolumeOutput = function (output, context) {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1DescribeBandwidthRateLimitOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput = function (output, context) {
    return {
        BandwidthRateLimitIntervals: output.BandwidthRateLimitIntervals !== undefined && output.BandwidthRateLimitIntervals !== null
            ? deserializeAws_json1_1BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = function (output, context) {
    return {
        CachediSCSIVolumes: output.CachediSCSIVolumes !== undefined && output.CachediSCSIVolumes !== null
            ? deserializeAws_json1_1CachediSCSIVolumes(output.CachediSCSIVolumes, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeCacheOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeChapCredentialsOutput = function (output, context) {
    return {
        ChapCredentials: output.ChapCredentials !== undefined && output.ChapCredentials !== null
            ? deserializeAws_json1_1ChapCredentials(output.ChapCredentials, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFileSystemAssociationsOutput = function (output, context) {
    return {
        FileSystemAssociationInfoList: output.FileSystemAssociationInfoList !== undefined && output.FileSystemAssociationInfoList !== null
            ? deserializeAws_json1_1FileSystemAssociationInfoList(output.FileSystemAssociationInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeGatewayInformationOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = function (output, context) {
    return {
        DayOfMonth: output.DayOfMonth !== undefined && output.DayOfMonth !== null ? output.DayOfMonth : undefined,
        DayOfWeek: output.DayOfWeek !== undefined && output.DayOfWeek !== null ? output.DayOfWeek : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        HourOfDay: output.HourOfDay !== undefined && output.HourOfDay !== null ? output.HourOfDay : undefined,
        MinuteOfHour: output.MinuteOfHour !== undefined && output.MinuteOfHour !== null ? output.MinuteOfHour : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
var deserializeAws_json1_1DescribeNFSFileSharesOutput = function (output, context) {
    return {
        NFSFileShareInfoList: output.NFSFileShareInfoList !== undefined && output.NFSFileShareInfoList !== null
            ? deserializeAws_json1_1NFSFileShareInfoList(output.NFSFileShareInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSMBFileSharesOutput = function (output, context) {
    return {
        SMBFileShareInfoList: output.SMBFileShareInfoList !== undefined && output.SMBFileShareInfoList !== null
            ? deserializeAws_json1_1SMBFileShareInfoList(output.SMBFileShareInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSMBSettingsOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeSnapshotScheduleOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = function (output, context) {
    return {
        StorediSCSIVolumes: output.StorediSCSIVolumes !== undefined && output.StorediSCSIVolumes !== null
            ? deserializeAws_json1_1StorediSCSIVolumes(output.StorediSCSIVolumes, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTapeArchivesOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeArchives: output.TapeArchives !== undefined && output.TapeArchives !== null
            ? deserializeAws_json1_1TapeArchives(output.TapeArchives, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeRecoveryPointInfos: output.TapeRecoveryPointInfos !== undefined && output.TapeRecoveryPointInfos !== null
            ? deserializeAws_json1_1TapeRecoveryPointInfos(output.TapeRecoveryPointInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTapesOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Tapes: output.Tapes !== undefined && output.Tapes !== null
            ? deserializeAws_json1_1Tapes(output.Tapes, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeUploadBufferOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeVTLDevicesOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        VTLDevices: output.VTLDevices !== undefined && output.VTLDevices !== null
            ? deserializeAws_json1_1VTLDevices(output.VTLDevices, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeWorkingStorageOutput = function (output, context) {
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
var deserializeAws_json1_1DetachVolumeOutput = function (output, context) {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1DeviceiSCSIAttributes = function (output, context) {
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
var deserializeAws_json1_1DisableGatewayOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1DisassociateFileSystemOutput = function (output, context) {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
var deserializeAws_json1_1Disk = function (output, context) {
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
var deserializeAws_json1_1DiskAttributeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DiskIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Disks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Disk(entry, context);
    });
};
var deserializeAws_json1_1errorDetails = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1FileShareClientList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FileShareInfo = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        FileShareId: output.FileShareId !== undefined && output.FileShareId !== null ? output.FileShareId : undefined,
        FileShareStatus: output.FileShareStatus !== undefined && output.FileShareStatus !== null ? output.FileShareStatus : undefined,
        FileShareType: output.FileShareType !== undefined && output.FileShareType !== null ? output.FileShareType : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1FileShareInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileShareInfo(entry, context);
    });
};
var deserializeAws_json1_1FileSystemAssociationInfo = function (output, context) {
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
var deserializeAws_json1_1FileSystemAssociationInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystemAssociationInfo(entry, context);
    });
};
var deserializeAws_json1_1FileSystemAssociationSummary = function (output, context) {
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
var deserializeAws_json1_1FileSystemAssociationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystemAssociationSummary(entry, context);
    });
};
var deserializeAws_json1_1GatewayInfo = function (output, context) {
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
var deserializeAws_json1_1GatewayNetworkInterfaces = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};
var deserializeAws_json1_1Gateways = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GatewayInfo(entry, context);
    });
};
var deserializeAws_json1_1Initiators = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InternalServerError = function (output, context) {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidGatewayRequestException = function (output, context) {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1JoinDomainOutput = function (output, context) {
    return {
        ActiveDirectoryStatus: output.ActiveDirectoryStatus !== undefined && output.ActiveDirectoryStatus !== null
            ? output.ActiveDirectoryStatus
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput = function (output, context) {
    return {
        AutomaticTapeCreationPolicyInfos: output.AutomaticTapeCreationPolicyInfos !== undefined && output.AutomaticTapeCreationPolicyInfos !== null
            ? deserializeAws_json1_1AutomaticTapeCreationPolicyInfos(output.AutomaticTapeCreationPolicyInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListFileSharesOutput = function (output, context) {
    return {
        FileShareInfoList: output.FileShareInfoList !== undefined && output.FileShareInfoList !== null
            ? deserializeAws_json1_1FileShareInfoList(output.FileShareInfoList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
var deserializeAws_json1_1ListFileSystemAssociationsOutput = function (output, context) {
    return {
        FileSystemAssociationSummaryList: output.FileSystemAssociationSummaryList !== undefined && output.FileSystemAssociationSummaryList !== null
            ? deserializeAws_json1_1FileSystemAssociationSummaryList(output.FileSystemAssociationSummaryList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
var deserializeAws_json1_1ListGatewaysOutput = function (output, context) {
    return {
        Gateways: output.Gateways !== undefined && output.Gateways !== null
            ? deserializeAws_json1_1Gateways(output.Gateways, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListLocalDisksOutput = function (output, context) {
    return {
        Disks: output.Disks !== undefined && output.Disks !== null
            ? deserializeAws_json1_1Disks(output.Disks, context)
            : undefined,
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1ListTapePoolsOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        PoolInfos: output.PoolInfos !== undefined && output.PoolInfos !== null
            ? deserializeAws_json1_1PoolInfos(output.PoolInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTapesOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        TapeInfos: output.TapeInfos !== undefined && output.TapeInfos !== null
            ? deserializeAws_json1_1TapeInfos(output.TapeInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListVolumeInitiatorsOutput = function (output, context) {
    return {
        Initiators: output.Initiators !== undefined && output.Initiators !== null
            ? deserializeAws_json1_1Initiators(output.Initiators, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListVolumeRecoveryPointsOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        VolumeRecoveryPointInfos: output.VolumeRecoveryPointInfos !== undefined && output.VolumeRecoveryPointInfos !== null
            ? deserializeAws_json1_1VolumeRecoveryPointInfos(output.VolumeRecoveryPointInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListVolumesOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        VolumeInfos: output.VolumeInfos !== undefined && output.VolumeInfos !== null
            ? deserializeAws_json1_1VolumeInfos(output.VolumeInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1NetworkInterface = function (output, context) {
    return {
        Ipv4Address: output.Ipv4Address !== undefined && output.Ipv4Address !== null ? output.Ipv4Address : undefined,
        Ipv6Address: output.Ipv6Address !== undefined && output.Ipv6Address !== null ? output.Ipv6Address : undefined,
        MacAddress: output.MacAddress !== undefined && output.MacAddress !== null ? output.MacAddress : undefined,
    };
};
var deserializeAws_json1_1NFSFileShareDefaults = function (output, context) {
    return {
        DirectoryMode: output.DirectoryMode !== undefined && output.DirectoryMode !== null ? output.DirectoryMode : undefined,
        FileMode: output.FileMode !== undefined && output.FileMode !== null ? output.FileMode : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    };
};
var deserializeAws_json1_1NFSFileShareInfo = function (output, context) {
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
var deserializeAws_json1_1NFSFileShareInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NFSFileShareInfo(entry, context);
    });
};
var deserializeAws_json1_1NotifyWhenUploadedOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        NotificationId: output.NotificationId !== undefined && output.NotificationId !== null ? output.NotificationId : undefined,
    };
};
var deserializeAws_json1_1PoolInfo = function (output, context) {
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
var deserializeAws_json1_1PoolInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PoolInfo(entry, context);
    });
};
var deserializeAws_json1_1RefreshCacheOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
        NotificationId: output.NotificationId !== undefined && output.NotificationId !== null ? output.NotificationId : undefined,
    };
};
var deserializeAws_json1_1RemoveTagsFromResourceOutput = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1ResetCacheOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1RetrieveTapeArchiveOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
    };
};
var deserializeAws_json1_1ServiceUnavailableError = function (output, context) {
    return {
        error: output.error !== undefined && output.error !== null
            ? deserializeAws_json1_1StorageGatewayError(output.error, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SetLocalConsolePasswordOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1SetSMBGuestPasswordOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1ShutdownGatewayOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1SMBFileShareInfo = function (output, context) {
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
var deserializeAws_json1_1SMBFileShareInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SMBFileShareInfo(entry, context);
    });
};
var deserializeAws_json1_1StartAvailabilityMonitorTestOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1StartGatewayOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1StorageGatewayError = function (output, context) {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorDetails: output.errorDetails !== undefined && output.errorDetails !== null
            ? deserializeAws_json1_1errorDetails(output.errorDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1StorediSCSIVolume = function (output, context) {
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
var deserializeAws_json1_1StorediSCSIVolumes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StorediSCSIVolume(entry, context);
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1Tape = function (output, context) {
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
var deserializeAws_json1_1TapeArchive = function (output, context) {
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
var deserializeAws_json1_1TapeArchives = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeArchive(entry, context);
    });
};
var deserializeAws_json1_1TapeARNs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TapeInfo = function (output, context) {
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
var deserializeAws_json1_1TapeInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeInfo(entry, context);
    });
};
var deserializeAws_json1_1TapeRecoveryPointInfo = function (output, context) {
    return {
        TapeARN: output.TapeARN !== undefined && output.TapeARN !== null ? output.TapeARN : undefined,
        TapeRecoveryPointTime: output.TapeRecoveryPointTime !== undefined && output.TapeRecoveryPointTime !== null
            ? new Date(Math.round(output.TapeRecoveryPointTime * 1000))
            : undefined,
        TapeSizeInBytes: output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null ? output.TapeSizeInBytes : undefined,
        TapeStatus: output.TapeStatus !== undefined && output.TapeStatus !== null ? output.TapeStatus : undefined,
    };
};
var deserializeAws_json1_1TapeRecoveryPointInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TapeRecoveryPointInfo(entry, context);
    });
};
var deserializeAws_json1_1Tapes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tape(entry, context);
    });
};
var deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateBandwidthRateLimitOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateChapCredentialsOutput = function (output, context) {
    return {
        InitiatorName: output.InitiatorName !== undefined && output.InitiatorName !== null ? output.InitiatorName : undefined,
        TargetARN: output.TargetARN !== undefined && output.TargetARN !== null ? output.TargetARN : undefined,
    };
};
var deserializeAws_json1_1UpdateFileSystemAssociationOutput = function (output, context) {
    return {
        FileSystemAssociationARN: output.FileSystemAssociationARN !== undefined && output.FileSystemAssociationARN !== null
            ? output.FileSystemAssociationARN
            : undefined,
    };
};
var deserializeAws_json1_1UpdateGatewayInformationOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
        GatewayName: output.GatewayName !== undefined && output.GatewayName !== null ? output.GatewayName : undefined,
    };
};
var deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateNFSFileShareOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
var deserializeAws_json1_1UpdateSMBFileShareOutput = function (output, context) {
    return {
        FileShareARN: output.FileShareARN !== undefined && output.FileShareARN !== null ? output.FileShareARN : undefined,
    };
};
var deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = function (output, context) {
    return {
        GatewayARN: output.GatewayARN !== undefined && output.GatewayARN !== null ? output.GatewayARN : undefined,
    };
};
var deserializeAws_json1_1UpdateSnapshotScheduleOutput = function (output, context) {
    return {
        VolumeARN: output.VolumeARN !== undefined && output.VolumeARN !== null ? output.VolumeARN : undefined,
    };
};
var deserializeAws_json1_1UpdateVTLDeviceTypeOutput = function (output, context) {
    return {
        VTLDeviceARN: output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null ? output.VTLDeviceARN : undefined,
    };
};
var deserializeAws_json1_1UserList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1VolumeInfo = function (output, context) {
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
var deserializeAws_json1_1VolumeInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeInfo(entry, context);
    });
};
var deserializeAws_json1_1VolumeiSCSIAttributes = function (output, context) {
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
var deserializeAws_json1_1VolumeRecoveryPointInfo = function (output, context) {
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
var deserializeAws_json1_1VolumeRecoveryPointInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context);
    });
};
var deserializeAws_json1_1VTLDevice = function (output, context) {
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
var deserializeAws_json1_1VTLDevices = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VTLDevice(entry, context);
    });
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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