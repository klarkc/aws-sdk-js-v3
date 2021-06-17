"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOpsSummaryRequest = exports.GetInventoryRequest = exports.OpsAggregator = exports.InventoryAggregator = exports.UpdateServiceSettingResult = exports.UpdateServiceSettingRequest = exports.UpdateResourceDataSyncResult = exports.UpdateResourceDataSyncRequest = exports.ResourceDataSyncConflictException = exports.UpdatePatchBaselineResult = exports.UpdatePatchBaselineRequest = exports.UpdateOpsMetadataResult = exports.UpdateOpsMetadataRequest = exports.OpsMetadataKeyLimitExceededException = exports.UpdateOpsItemResponse = exports.UpdateOpsItemRequest = exports.UpdateManagedInstanceRoleResult = exports.UpdateManagedInstanceRoleRequest = exports.UpdateMaintenanceWindowTaskResult = exports.UpdateMaintenanceWindowTaskRequest = exports.UpdateMaintenanceWindowTargetResult = exports.UpdateMaintenanceWindowTargetRequest = void 0;
const models_0_1 = require("./models_0");
const models_1_1 = require("./models_1");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var UpdateMaintenanceWindowTargetRequest;
(function (UpdateMaintenanceWindowTargetRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowTargetRequest = exports.UpdateMaintenanceWindowTargetRequest || (exports.UpdateMaintenanceWindowTargetRequest = {}));
var UpdateMaintenanceWindowTargetResult;
(function (UpdateMaintenanceWindowTargetResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTargetResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowTargetResult = exports.UpdateMaintenanceWindowTargetResult || (exports.UpdateMaintenanceWindowTargetResult = {}));
var UpdateMaintenanceWindowTaskRequest;
(function (UpdateMaintenanceWindowTaskRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TaskInvocationParameters && {
            TaskInvocationParameters: models_1_1.MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
        }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowTaskRequest = exports.UpdateMaintenanceWindowTaskRequest || (exports.UpdateMaintenanceWindowTaskRequest = {}));
var UpdateMaintenanceWindowTaskResult;
(function (UpdateMaintenanceWindowTaskResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TaskInvocationParameters && {
            TaskInvocationParameters: models_1_1.MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
        }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowTaskResult = exports.UpdateMaintenanceWindowTaskResult || (exports.UpdateMaintenanceWindowTaskResult = {}));
var UpdateManagedInstanceRoleRequest;
(function (UpdateManagedInstanceRoleRequest) {
    /**
     * @internal
     */
    UpdateManagedInstanceRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateManagedInstanceRoleRequest = exports.UpdateManagedInstanceRoleRequest || (exports.UpdateManagedInstanceRoleRequest = {}));
var UpdateManagedInstanceRoleResult;
(function (UpdateManagedInstanceRoleResult) {
    /**
     * @internal
     */
    UpdateManagedInstanceRoleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateManagedInstanceRoleResult = exports.UpdateManagedInstanceRoleResult || (exports.UpdateManagedInstanceRoleResult = {}));
var UpdateOpsItemRequest;
(function (UpdateOpsItemRequest) {
    /**
     * @internal
     */
    UpdateOpsItemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOpsItemRequest = exports.UpdateOpsItemRequest || (exports.UpdateOpsItemRequest = {}));
var UpdateOpsItemResponse;
(function (UpdateOpsItemResponse) {
    /**
     * @internal
     */
    UpdateOpsItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOpsItemResponse = exports.UpdateOpsItemResponse || (exports.UpdateOpsItemResponse = {}));
var OpsMetadataKeyLimitExceededException;
(function (OpsMetadataKeyLimitExceededException) {
    /**
     * @internal
     */
    OpsMetadataKeyLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataKeyLimitExceededException = exports.OpsMetadataKeyLimitExceededException || (exports.OpsMetadataKeyLimitExceededException = {}));
var UpdateOpsMetadataRequest;
(function (UpdateOpsMetadataRequest) {
    /**
     * @internal
     */
    UpdateOpsMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOpsMetadataRequest = exports.UpdateOpsMetadataRequest || (exports.UpdateOpsMetadataRequest = {}));
var UpdateOpsMetadataResult;
(function (UpdateOpsMetadataResult) {
    /**
     * @internal
     */
    UpdateOpsMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOpsMetadataResult = exports.UpdateOpsMetadataResult || (exports.UpdateOpsMetadataResult = {}));
var UpdatePatchBaselineRequest;
(function (UpdatePatchBaselineRequest) {
    /**
     * @internal
     */
    UpdatePatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sources && { Sources: obj.Sources.map((item) => models_0_1.PatchSource.filterSensitiveLog(item)) }),
    });
})(UpdatePatchBaselineRequest = exports.UpdatePatchBaselineRequest || (exports.UpdatePatchBaselineRequest = {}));
var UpdatePatchBaselineResult;
(function (UpdatePatchBaselineResult) {
    /**
     * @internal
     */
    UpdatePatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sources && { Sources: obj.Sources.map((item) => models_0_1.PatchSource.filterSensitiveLog(item)) }),
    });
})(UpdatePatchBaselineResult = exports.UpdatePatchBaselineResult || (exports.UpdatePatchBaselineResult = {}));
var ResourceDataSyncConflictException;
(function (ResourceDataSyncConflictException) {
    /**
     * @internal
     */
    ResourceDataSyncConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncConflictException = exports.ResourceDataSyncConflictException || (exports.ResourceDataSyncConflictException = {}));
var UpdateResourceDataSyncRequest;
(function (UpdateResourceDataSyncRequest) {
    /**
     * @internal
     */
    UpdateResourceDataSyncRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceDataSyncRequest = exports.UpdateResourceDataSyncRequest || (exports.UpdateResourceDataSyncRequest = {}));
var UpdateResourceDataSyncResult;
(function (UpdateResourceDataSyncResult) {
    /**
     * @internal
     */
    UpdateResourceDataSyncResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceDataSyncResult = exports.UpdateResourceDataSyncResult || (exports.UpdateResourceDataSyncResult = {}));
var UpdateServiceSettingRequest;
(function (UpdateServiceSettingRequest) {
    /**
     * @internal
     */
    UpdateServiceSettingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceSettingRequest = exports.UpdateServiceSettingRequest || (exports.UpdateServiceSettingRequest = {}));
var UpdateServiceSettingResult;
(function (UpdateServiceSettingResult) {
    /**
     * @internal
     */
    UpdateServiceSettingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceSettingResult = exports.UpdateServiceSettingResult || (exports.UpdateServiceSettingResult = {}));
var InventoryAggregator;
(function (InventoryAggregator) {
    /**
     * @internal
     */
    InventoryAggregator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryAggregator = exports.InventoryAggregator || (exports.InventoryAggregator = {}));
var OpsAggregator;
(function (OpsAggregator) {
    /**
     * @internal
     */
    OpsAggregator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsAggregator = exports.OpsAggregator || (exports.OpsAggregator = {}));
var GetInventoryRequest;
(function (GetInventoryRequest) {
    /**
     * @internal
     */
    GetInventoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInventoryRequest = exports.GetInventoryRequest || (exports.GetInventoryRequest = {}));
var GetOpsSummaryRequest;
(function (GetOpsSummaryRequest) {
    /**
     * @internal
     */
    GetOpsSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsSummaryRequest = exports.GetOpsSummaryRequest || (exports.GetOpsSummaryRequest = {}));
//# sourceMappingURL=models_2.js.map