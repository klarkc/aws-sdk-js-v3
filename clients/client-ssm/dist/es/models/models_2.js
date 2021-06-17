import { __assign } from "tslib";
import { PatchSource, } from "./models_0";
import { MaintenanceWindowTaskInvocationParameters, } from "./models_1";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var UpdateMaintenanceWindowTargetRequest;
(function (UpdateMaintenanceWindowTargetRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTargetRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTargetRequest || (UpdateMaintenanceWindowTargetRequest = {}));
export var UpdateMaintenanceWindowTargetResult;
(function (UpdateMaintenanceWindowTargetResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTargetResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTargetResult || (UpdateMaintenanceWindowTargetResult = {}));
export var UpdateMaintenanceWindowTaskRequest;
(function (UpdateMaintenanceWindowTaskRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTaskRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTaskRequest || (UpdateMaintenanceWindowTaskRequest = {}));
export var UpdateMaintenanceWindowTaskResult;
(function (UpdateMaintenanceWindowTaskResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowTaskResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowTaskResult || (UpdateMaintenanceWindowTaskResult = {}));
export var UpdateManagedInstanceRoleRequest;
(function (UpdateManagedInstanceRoleRequest) {
    /**
     * @internal
     */
    UpdateManagedInstanceRoleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateManagedInstanceRoleRequest || (UpdateManagedInstanceRoleRequest = {}));
export var UpdateManagedInstanceRoleResult;
(function (UpdateManagedInstanceRoleResult) {
    /**
     * @internal
     */
    UpdateManagedInstanceRoleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateManagedInstanceRoleResult || (UpdateManagedInstanceRoleResult = {}));
export var UpdateOpsItemRequest;
(function (UpdateOpsItemRequest) {
    /**
     * @internal
     */
    UpdateOpsItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsItemRequest || (UpdateOpsItemRequest = {}));
export var UpdateOpsItemResponse;
(function (UpdateOpsItemResponse) {
    /**
     * @internal
     */
    UpdateOpsItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsItemResponse || (UpdateOpsItemResponse = {}));
export var OpsMetadataKeyLimitExceededException;
(function (OpsMetadataKeyLimitExceededException) {
    /**
     * @internal
     */
    OpsMetadataKeyLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataKeyLimitExceededException || (OpsMetadataKeyLimitExceededException = {}));
export var UpdateOpsMetadataRequest;
(function (UpdateOpsMetadataRequest) {
    /**
     * @internal
     */
    UpdateOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsMetadataRequest || (UpdateOpsMetadataRequest = {}));
export var UpdateOpsMetadataResult;
(function (UpdateOpsMetadataResult) {
    /**
     * @internal
     */
    UpdateOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOpsMetadataResult || (UpdateOpsMetadataResult = {}));
export var UpdatePatchBaselineRequest;
(function (UpdatePatchBaselineRequest) {
    /**
     * @internal
     */
    UpdatePatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(UpdatePatchBaselineRequest || (UpdatePatchBaselineRequest = {}));
export var UpdatePatchBaselineResult;
(function (UpdatePatchBaselineResult) {
    /**
     * @internal
     */
    UpdatePatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(UpdatePatchBaselineResult || (UpdatePatchBaselineResult = {}));
export var ResourceDataSyncConflictException;
(function (ResourceDataSyncConflictException) {
    /**
     * @internal
     */
    ResourceDataSyncConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncConflictException || (ResourceDataSyncConflictException = {}));
export var UpdateResourceDataSyncRequest;
(function (UpdateResourceDataSyncRequest) {
    /**
     * @internal
     */
    UpdateResourceDataSyncRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceDataSyncRequest || (UpdateResourceDataSyncRequest = {}));
export var UpdateResourceDataSyncResult;
(function (UpdateResourceDataSyncResult) {
    /**
     * @internal
     */
    UpdateResourceDataSyncResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceDataSyncResult || (UpdateResourceDataSyncResult = {}));
export var UpdateServiceSettingRequest;
(function (UpdateServiceSettingRequest) {
    /**
     * @internal
     */
    UpdateServiceSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingRequest || (UpdateServiceSettingRequest = {}));
export var UpdateServiceSettingResult;
(function (UpdateServiceSettingResult) {
    /**
     * @internal
     */
    UpdateServiceSettingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingResult || (UpdateServiceSettingResult = {}));
export var InventoryAggregator;
(function (InventoryAggregator) {
    /**
     * @internal
     */
    InventoryAggregator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryAggregator || (InventoryAggregator = {}));
export var OpsAggregator;
(function (OpsAggregator) {
    /**
     * @internal
     */
    OpsAggregator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsAggregator || (OpsAggregator = {}));
export var GetInventoryRequest;
(function (GetInventoryRequest) {
    /**
     * @internal
     */
    GetInventoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInventoryRequest || (GetInventoryRequest = {}));
export var GetOpsSummaryRequest;
(function (GetOpsSummaryRequest) {
    /**
     * @internal
     */
    GetOpsSummaryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsSummaryRequest || (GetOpsSummaryRequest = {}));
//# sourceMappingURL=models_2.js.map