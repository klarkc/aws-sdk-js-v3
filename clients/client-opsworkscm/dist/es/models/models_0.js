import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccountAttribute;
(function (AccountAttribute) {
    /**
     * @internal
     */
    AccountAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountAttribute || (AccountAttribute = {}));
export var EngineAttribute;
(function (EngineAttribute) {
    /**
     * @internal
     */
    EngineAttribute.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Value && { Value: SENSITIVE_STRING }))); };
})(EngineAttribute || (EngineAttribute = {}));
export var AssociateNodeRequest;
(function (AssociateNodeRequest) {
    /**
     * @internal
     */
    AssociateNodeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(AssociateNodeRequest || (AssociateNodeRequest = {}));
export var AssociateNodeResponse;
(function (AssociateNodeResponse) {
    /**
     * @internal
     */
    AssociateNodeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateNodeResponse || (AssociateNodeResponse = {}));
export var InvalidStateException;
(function (InvalidStateException) {
    /**
     * @internal
     */
    InvalidStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidStateException || (InvalidStateException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var BackupType;
(function (BackupType) {
    BackupType["AUTOMATED"] = "AUTOMATED";
    BackupType["MANUAL"] = "MANUAL";
})(BackupType || (BackupType = {}));
export var BackupStatus;
(function (BackupStatus) {
    BackupStatus["DELETING"] = "DELETING";
    BackupStatus["FAILED"] = "FAILED";
    BackupStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BackupStatus["OK"] = "OK";
})(BackupStatus || (BackupStatus = {}));
export var Backup;
(function (Backup) {
    /**
     * @internal
     */
    Backup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Backup || (Backup = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateBackupRequest;
(function (CreateBackupRequest) {
    /**
     * @internal
     */
    CreateBackupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBackupRequest || (CreateBackupRequest = {}));
export var CreateBackupResponse;
(function (CreateBackupResponse) {
    /**
     * @internal
     */
    CreateBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBackupResponse || (CreateBackupResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateServerRequest;
(function (CreateServerRequest) {
    /**
     * @internal
     */
    CreateServerRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.CustomPrivateKey && { CustomPrivateKey: SENSITIVE_STRING })), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(CreateServerRequest || (CreateServerRequest = {}));
export var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["FAILED"] = "FAILED";
    MaintenanceStatus["SUCCESS"] = "SUCCESS";
})(MaintenanceStatus || (MaintenanceStatus = {}));
export var ServerStatus;
(function (ServerStatus) {
    ServerStatus["BACKING_UP"] = "BACKING_UP";
    ServerStatus["CONNECTION_LOST"] = "CONNECTION_LOST";
    ServerStatus["CREATING"] = "CREATING";
    ServerStatus["DELETING"] = "DELETING";
    ServerStatus["FAILED"] = "FAILED";
    ServerStatus["HEALTHY"] = "HEALTHY";
    ServerStatus["MODIFYING"] = "MODIFYING";
    ServerStatus["RESTORING"] = "RESTORING";
    ServerStatus["RUNNING"] = "RUNNING";
    ServerStatus["SETUP"] = "SETUP";
    ServerStatus["TERMINATED"] = "TERMINATED";
    ServerStatus["UNDER_MAINTENANCE"] = "UNDER_MAINTENANCE";
    ServerStatus["UNHEALTHY"] = "UNHEALTHY";
})(ServerStatus || (ServerStatus = {}));
export var Server;
(function (Server) {
    /**
     * @internal
     */
    Server.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(Server || (Server = {}));
export var CreateServerResponse;
(function (CreateServerResponse) {
    /**
     * @internal
     */
    CreateServerResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }))); };
})(CreateServerResponse || (CreateServerResponse = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var DeleteBackupRequest;
(function (DeleteBackupRequest) {
    /**
     * @internal
     */
    DeleteBackupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBackupRequest || (DeleteBackupRequest = {}));
export var DeleteBackupResponse;
(function (DeleteBackupResponse) {
    /**
     * @internal
     */
    DeleteBackupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBackupResponse || (DeleteBackupResponse = {}));
export var DeleteServerRequest;
(function (DeleteServerRequest) {
    /**
     * @internal
     */
    DeleteServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerRequest || (DeleteServerRequest = {}));
export var DeleteServerResponse;
(function (DeleteServerResponse) {
    /**
     * @internal
     */
    DeleteServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerResponse || (DeleteServerResponse = {}));
export var DescribeAccountAttributesRequest;
(function (DescribeAccountAttributesRequest) {
    /**
     * @internal
     */
    DescribeAccountAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAttributesRequest || (DescribeAccountAttributesRequest = {}));
export var DescribeAccountAttributesResponse;
(function (DescribeAccountAttributesResponse) {
    /**
     * @internal
     */
    DescribeAccountAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAttributesResponse || (DescribeAccountAttributesResponse = {}));
export var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
    /**
     * @internal
     */
    DescribeBackupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBackupsRequest || (DescribeBackupsRequest = {}));
export var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
    /**
     * @internal
     */
    DescribeBackupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBackupsResponse || (DescribeBackupsResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    /**
     * @internal
     */
    DescribeEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsRequest || (DescribeEventsRequest = {}));
export var ServerEvent;
(function (ServerEvent) {
    /**
     * @internal
     */
    ServerEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerEvent || (ServerEvent = {}));
export var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsResponse || (DescribeEventsResponse = {}));
export var DescribeNodeAssociationStatusRequest;
(function (DescribeNodeAssociationStatusRequest) {
    /**
     * @internal
     */
    DescribeNodeAssociationStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNodeAssociationStatusRequest || (DescribeNodeAssociationStatusRequest = {}));
export var NodeAssociationStatus;
(function (NodeAssociationStatus) {
    NodeAssociationStatus["FAILED"] = "FAILED";
    NodeAssociationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    NodeAssociationStatus["SUCCESS"] = "SUCCESS";
})(NodeAssociationStatus || (NodeAssociationStatus = {}));
export var DescribeNodeAssociationStatusResponse;
(function (DescribeNodeAssociationStatusResponse) {
    /**
     * @internal
     */
    DescribeNodeAssociationStatusResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(DescribeNodeAssociationStatusResponse || (DescribeNodeAssociationStatusResponse = {}));
export var DescribeServersRequest;
(function (DescribeServersRequest) {
    /**
     * @internal
     */
    DescribeServersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServersRequest || (DescribeServersRequest = {}));
export var DescribeServersResponse;
(function (DescribeServersResponse) {
    /**
     * @internal
     */
    DescribeServersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServersResponse || (DescribeServersResponse = {}));
export var DisassociateNodeRequest;
(function (DisassociateNodeRequest) {
    /**
     * @internal
     */
    DisassociateNodeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(DisassociateNodeRequest || (DisassociateNodeRequest = {}));
export var DisassociateNodeResponse;
(function (DisassociateNodeResponse) {
    /**
     * @internal
     */
    DisassociateNodeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateNodeResponse || (DisassociateNodeResponse = {}));
export var ExportServerEngineAttributeRequest;
(function (ExportServerEngineAttributeRequest) {
    /**
     * @internal
     */
    ExportServerEngineAttributeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InputAttributes && {
        InputAttributes: obj.InputAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(ExportServerEngineAttributeRequest || (ExportServerEngineAttributeRequest = {}));
export var ExportServerEngineAttributeResponse;
(function (ExportServerEngineAttributeResponse) {
    /**
     * @internal
     */
    ExportServerEngineAttributeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttribute && { EngineAttribute: EngineAttribute.filterSensitiveLog(obj.EngineAttribute) }))); };
})(ExportServerEngineAttributeResponse || (ExportServerEngineAttributeResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var RestoreServerRequest;
(function (RestoreServerRequest) {
    /**
     * @internal
     */
    RestoreServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestoreServerRequest || (RestoreServerRequest = {}));
export var RestoreServerResponse;
(function (RestoreServerResponse) {
    /**
     * @internal
     */
    RestoreServerResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }))); };
})(RestoreServerResponse || (RestoreServerResponse = {}));
export var StartMaintenanceRequest;
(function (StartMaintenanceRequest) {
    /**
     * @internal
     */
    StartMaintenanceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EngineAttributes && {
        EngineAttributes: obj.EngineAttributes.map(function (item) { return EngineAttribute.filterSensitiveLog(item); }),
    }))); };
})(StartMaintenanceRequest || (StartMaintenanceRequest = {}));
export var StartMaintenanceResponse;
(function (StartMaintenanceResponse) {
    /**
     * @internal
     */
    StartMaintenanceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }))); };
})(StartMaintenanceResponse || (StartMaintenanceResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateServerRequest;
(function (UpdateServerRequest) {
    /**
     * @internal
     */
    UpdateServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServerRequest || (UpdateServerRequest = {}));
export var UpdateServerResponse;
(function (UpdateServerResponse) {
    /**
     * @internal
     */
    UpdateServerResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }))); };
})(UpdateServerResponse || (UpdateServerResponse = {}));
export var UpdateServerEngineAttributesRequest;
(function (UpdateServerEngineAttributesRequest) {
    /**
     * @internal
     */
    UpdateServerEngineAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServerEngineAttributesRequest || (UpdateServerEngineAttributesRequest = {}));
export var UpdateServerEngineAttributesResponse;
(function (UpdateServerEngineAttributesResponse) {
    /**
     * @internal
     */
    UpdateServerEngineAttributesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }))); };
})(UpdateServerEngineAttributesResponse || (UpdateServerEngineAttributesResponse = {}));
//# sourceMappingURL=models_0.js.map