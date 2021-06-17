"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartMaintenanceResponse = exports.StartMaintenanceRequest = exports.RestoreServerResponse = exports.RestoreServerRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ExportServerEngineAttributeResponse = exports.ExportServerEngineAttributeRequest = exports.DisassociateNodeResponse = exports.DisassociateNodeRequest = exports.DescribeServersResponse = exports.DescribeServersRequest = exports.DescribeNodeAssociationStatusResponse = exports.NodeAssociationStatus = exports.DescribeNodeAssociationStatusRequest = exports.DescribeEventsResponse = exports.ServerEvent = exports.DescribeEventsRequest = exports.InvalidNextTokenException = exports.DescribeBackupsResponse = exports.DescribeBackupsRequest = exports.DescribeAccountAttributesResponse = exports.DescribeAccountAttributesRequest = exports.DeleteServerResponse = exports.DeleteServerRequest = exports.DeleteBackupResponse = exports.DeleteBackupRequest = exports.ResourceAlreadyExistsException = exports.CreateServerResponse = exports.Server = exports.ServerStatus = exports.MaintenanceStatus = exports.CreateServerRequest = exports.LimitExceededException = exports.CreateBackupResponse = exports.CreateBackupRequest = exports.Tag = exports.Backup = exports.BackupStatus = exports.BackupType = exports.ValidationException = exports.ResourceNotFoundException = exports.InvalidStateException = exports.AssociateNodeResponse = exports.AssociateNodeRequest = exports.EngineAttribute = exports.AccountAttribute = void 0;
exports.UpdateServerEngineAttributesResponse = exports.UpdateServerEngineAttributesRequest = exports.UpdateServerResponse = exports.UpdateServerRequest = exports.UntagResourceResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountAttribute;
(function (AccountAttribute) {
    /**
     * @internal
     */
    AccountAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttribute = exports.AccountAttribute || (exports.AccountAttribute = {}));
var EngineAttribute;
(function (EngineAttribute) {
    /**
     * @internal
     */
    EngineAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
    });
})(EngineAttribute = exports.EngineAttribute || (exports.EngineAttribute = {}));
var AssociateNodeRequest;
(function (AssociateNodeRequest) {
    /**
     * @internal
     */
    AssociateNodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(AssociateNodeRequest = exports.AssociateNodeRequest || (exports.AssociateNodeRequest = {}));
var AssociateNodeResponse;
(function (AssociateNodeResponse) {
    /**
     * @internal
     */
    AssociateNodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateNodeResponse = exports.AssociateNodeResponse || (exports.AssociateNodeResponse = {}));
var InvalidStateException;
(function (InvalidStateException) {
    /**
     * @internal
     */
    InvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var BackupType;
(function (BackupType) {
    BackupType["AUTOMATED"] = "AUTOMATED";
    BackupType["MANUAL"] = "MANUAL";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var BackupStatus;
(function (BackupStatus) {
    BackupStatus["DELETING"] = "DELETING";
    BackupStatus["FAILED"] = "FAILED";
    BackupStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BackupStatus["OK"] = "OK";
})(BackupStatus = exports.BackupStatus || (exports.BackupStatus = {}));
var Backup;
(function (Backup) {
    /**
     * @internal
     */
    Backup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Backup = exports.Backup || (exports.Backup = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateBackupRequest;
(function (CreateBackupRequest) {
    /**
     * @internal
     */
    CreateBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupRequest = exports.CreateBackupRequest || (exports.CreateBackupRequest = {}));
var CreateBackupResponse;
(function (CreateBackupResponse) {
    /**
     * @internal
     */
    CreateBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupResponse = exports.CreateBackupResponse || (exports.CreateBackupResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateServerRequest;
(function (CreateServerRequest) {
    /**
     * @internal
     */
    CreateServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CustomPrivateKey && { CustomPrivateKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(CreateServerRequest = exports.CreateServerRequest || (exports.CreateServerRequest = {}));
var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["FAILED"] = "FAILED";
    MaintenanceStatus["SUCCESS"] = "SUCCESS";
})(MaintenanceStatus = exports.MaintenanceStatus || (exports.MaintenanceStatus = {}));
var ServerStatus;
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
})(ServerStatus = exports.ServerStatus || (exports.ServerStatus = {}));
var Server;
(function (Server) {
    /**
     * @internal
     */
    Server.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(Server = exports.Server || (exports.Server = {}));
var CreateServerResponse;
(function (CreateServerResponse) {
    /**
     * @internal
     */
    CreateServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }),
    });
})(CreateServerResponse = exports.CreateServerResponse || (exports.CreateServerResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var DeleteBackupRequest;
(function (DeleteBackupRequest) {
    /**
     * @internal
     */
    DeleteBackupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupRequest = exports.DeleteBackupRequest || (exports.DeleteBackupRequest = {}));
var DeleteBackupResponse;
(function (DeleteBackupResponse) {
    /**
     * @internal
     */
    DeleteBackupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupResponse = exports.DeleteBackupResponse || (exports.DeleteBackupResponse = {}));
var DeleteServerRequest;
(function (DeleteServerRequest) {
    /**
     * @internal
     */
    DeleteServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerRequest = exports.DeleteServerRequest || (exports.DeleteServerRequest = {}));
var DeleteServerResponse;
(function (DeleteServerResponse) {
    /**
     * @internal
     */
    DeleteServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerResponse = exports.DeleteServerResponse || (exports.DeleteServerResponse = {}));
var DescribeAccountAttributesRequest;
(function (DescribeAccountAttributesRequest) {
    /**
     * @internal
     */
    DescribeAccountAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesRequest = exports.DescribeAccountAttributesRequest || (exports.DescribeAccountAttributesRequest = {}));
var DescribeAccountAttributesResponse;
(function (DescribeAccountAttributesResponse) {
    /**
     * @internal
     */
    DescribeAccountAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesResponse = exports.DescribeAccountAttributesResponse || (exports.DescribeAccountAttributesResponse = {}));
var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
    /**
     * @internal
     */
    DescribeBackupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupsRequest = exports.DescribeBackupsRequest || (exports.DescribeBackupsRequest = {}));
var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
    /**
     * @internal
     */
    DescribeBackupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupsResponse = exports.DescribeBackupsResponse || (exports.DescribeBackupsResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    /**
     * @internal
     */
    DescribeEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsRequest = exports.DescribeEventsRequest || (exports.DescribeEventsRequest = {}));
var ServerEvent;
(function (ServerEvent) {
    /**
     * @internal
     */
    ServerEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerEvent = exports.ServerEvent || (exports.ServerEvent = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var DescribeNodeAssociationStatusRequest;
(function (DescribeNodeAssociationStatusRequest) {
    /**
     * @internal
     */
    DescribeNodeAssociationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNodeAssociationStatusRequest = exports.DescribeNodeAssociationStatusRequest || (exports.DescribeNodeAssociationStatusRequest = {}));
var NodeAssociationStatus;
(function (NodeAssociationStatus) {
    NodeAssociationStatus["FAILED"] = "FAILED";
    NodeAssociationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    NodeAssociationStatus["SUCCESS"] = "SUCCESS";
})(NodeAssociationStatus = exports.NodeAssociationStatus || (exports.NodeAssociationStatus = {}));
var DescribeNodeAssociationStatusResponse;
(function (DescribeNodeAssociationStatusResponse) {
    /**
     * @internal
     */
    DescribeNodeAssociationStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(DescribeNodeAssociationStatusResponse = exports.DescribeNodeAssociationStatusResponse || (exports.DescribeNodeAssociationStatusResponse = {}));
var DescribeServersRequest;
(function (DescribeServersRequest) {
    /**
     * @internal
     */
    DescribeServersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServersRequest = exports.DescribeServersRequest || (exports.DescribeServersRequest = {}));
var DescribeServersResponse;
(function (DescribeServersResponse) {
    /**
     * @internal
     */
    DescribeServersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServersResponse = exports.DescribeServersResponse || (exports.DescribeServersResponse = {}));
var DisassociateNodeRequest;
(function (DisassociateNodeRequest) {
    /**
     * @internal
     */
    DisassociateNodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(DisassociateNodeRequest = exports.DisassociateNodeRequest || (exports.DisassociateNodeRequest = {}));
var DisassociateNodeResponse;
(function (DisassociateNodeResponse) {
    /**
     * @internal
     */
    DisassociateNodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateNodeResponse = exports.DisassociateNodeResponse || (exports.DisassociateNodeResponse = {}));
var ExportServerEngineAttributeRequest;
(function (ExportServerEngineAttributeRequest) {
    /**
     * @internal
     */
    ExportServerEngineAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InputAttributes && {
            InputAttributes: obj.InputAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(ExportServerEngineAttributeRequest = exports.ExportServerEngineAttributeRequest || (exports.ExportServerEngineAttributeRequest = {}));
var ExportServerEngineAttributeResponse;
(function (ExportServerEngineAttributeResponse) {
    /**
     * @internal
     */
    ExportServerEngineAttributeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttribute && { EngineAttribute: EngineAttribute.filterSensitiveLog(obj.EngineAttribute) }),
    });
})(ExportServerEngineAttributeResponse = exports.ExportServerEngineAttributeResponse || (exports.ExportServerEngineAttributeResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var RestoreServerRequest;
(function (RestoreServerRequest) {
    /**
     * @internal
     */
    RestoreServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreServerRequest = exports.RestoreServerRequest || (exports.RestoreServerRequest = {}));
var RestoreServerResponse;
(function (RestoreServerResponse) {
    /**
     * @internal
     */
    RestoreServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }),
    });
})(RestoreServerResponse = exports.RestoreServerResponse || (exports.RestoreServerResponse = {}));
var StartMaintenanceRequest;
(function (StartMaintenanceRequest) {
    /**
     * @internal
     */
    StartMaintenanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EngineAttributes && {
            EngineAttributes: obj.EngineAttributes.map((item) => EngineAttribute.filterSensitiveLog(item)),
        }),
    });
})(StartMaintenanceRequest = exports.StartMaintenanceRequest || (exports.StartMaintenanceRequest = {}));
var StartMaintenanceResponse;
(function (StartMaintenanceResponse) {
    /**
     * @internal
     */
    StartMaintenanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }),
    });
})(StartMaintenanceResponse = exports.StartMaintenanceResponse || (exports.StartMaintenanceResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateServerRequest;
(function (UpdateServerRequest) {
    /**
     * @internal
     */
    UpdateServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServerRequest = exports.UpdateServerRequest || (exports.UpdateServerRequest = {}));
var UpdateServerResponse;
(function (UpdateServerResponse) {
    /**
     * @internal
     */
    UpdateServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }),
    });
})(UpdateServerResponse = exports.UpdateServerResponse || (exports.UpdateServerResponse = {}));
var UpdateServerEngineAttributesRequest;
(function (UpdateServerEngineAttributesRequest) {
    /**
     * @internal
     */
    UpdateServerEngineAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServerEngineAttributesRequest = exports.UpdateServerEngineAttributesRequest || (exports.UpdateServerEngineAttributesRequest = {}));
var UpdateServerEngineAttributesResponse;
(function (UpdateServerEngineAttributesResponse) {
    /**
     * @internal
     */
    UpdateServerEngineAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Server && { Server: Server.filterSensitiveLog(obj.Server) }),
    });
})(UpdateServerEngineAttributesResponse = exports.UpdateServerEngineAttributesResponse || (exports.UpdateServerEngineAttributesResponse = {}));
//# sourceMappingURL=models_0.js.map