"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAttachmentUploadResponse = exports.UploadMetadata = exports.StartAttachmentUploadRequest = exports.SendMessageResponse = exports.SendMessageRequest = exports.SendEventResponse = exports.SendEventRequest = exports.GetTranscriptResponse = exports.Item = exports.ChatItemType = exports.ParticipantRole = exports.AttachmentItem = exports.ArtifactStatus = exports.GetTranscriptRequest = exports.StartPosition = exports.SortKey = exports.ScanDirection = exports.GetAttachmentResponse = exports.GetAttachmentRequest = exports.DisconnectParticipantResponse = exports.DisconnectParticipantRequest = exports.CreateParticipantConnectionResponse = exports.Websocket = exports.ConnectionCredentials = exports.CreateParticipantConnectionRequest = exports.ConnectionType = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.InternalServerException = exports.ConflictException = exports.CompleteAttachmentUploadResponse = exports.CompleteAttachmentUploadRequest = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var CompleteAttachmentUploadRequest;
(function (CompleteAttachmentUploadRequest) {
    /**
     * @internal
     */
    CompleteAttachmentUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteAttachmentUploadRequest = exports.CompleteAttachmentUploadRequest || (exports.CompleteAttachmentUploadRequest = {}));
var CompleteAttachmentUploadResponse;
(function (CompleteAttachmentUploadResponse) {
    /**
     * @internal
     */
    CompleteAttachmentUploadResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteAttachmentUploadResponse = exports.CompleteAttachmentUploadResponse || (exports.CompleteAttachmentUploadResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ConnectionType;
(function (ConnectionType) {
    ConnectionType["CONNECTION_CREDENTIALS"] = "CONNECTION_CREDENTIALS";
    ConnectionType["WEBSOCKET"] = "WEBSOCKET";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
var CreateParticipantConnectionRequest;
(function (CreateParticipantConnectionRequest) {
    /**
     * @internal
     */
    CreateParticipantConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParticipantConnectionRequest = exports.CreateParticipantConnectionRequest || (exports.CreateParticipantConnectionRequest = {}));
var ConnectionCredentials;
(function (ConnectionCredentials) {
    /**
     * @internal
     */
    ConnectionCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionCredentials = exports.ConnectionCredentials || (exports.ConnectionCredentials = {}));
var Websocket;
(function (Websocket) {
    /**
     * @internal
     */
    Websocket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Websocket = exports.Websocket || (exports.Websocket = {}));
var CreateParticipantConnectionResponse;
(function (CreateParticipantConnectionResponse) {
    /**
     * @internal
     */
    CreateParticipantConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParticipantConnectionResponse = exports.CreateParticipantConnectionResponse || (exports.CreateParticipantConnectionResponse = {}));
var DisconnectParticipantRequest;
(function (DisconnectParticipantRequest) {
    /**
     * @internal
     */
    DisconnectParticipantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectParticipantRequest = exports.DisconnectParticipantRequest || (exports.DisconnectParticipantRequest = {}));
var DisconnectParticipantResponse;
(function (DisconnectParticipantResponse) {
    /**
     * @internal
     */
    DisconnectParticipantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectParticipantResponse = exports.DisconnectParticipantResponse || (exports.DisconnectParticipantResponse = {}));
var GetAttachmentRequest;
(function (GetAttachmentRequest) {
    /**
     * @internal
     */
    GetAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAttachmentRequest = exports.GetAttachmentRequest || (exports.GetAttachmentRequest = {}));
var GetAttachmentResponse;
(function (GetAttachmentResponse) {
    /**
     * @internal
     */
    GetAttachmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAttachmentResponse = exports.GetAttachmentResponse || (exports.GetAttachmentResponse = {}));
var ScanDirection;
(function (ScanDirection) {
    ScanDirection["BACKWARD"] = "BACKWARD";
    ScanDirection["FORWARD"] = "FORWARD";
})(ScanDirection = exports.ScanDirection || (exports.ScanDirection = {}));
var SortKey;
(function (SortKey) {
    SortKey["ASCENDING"] = "ASCENDING";
    SortKey["DESCENDING"] = "DESCENDING";
})(SortKey = exports.SortKey || (exports.SortKey = {}));
var StartPosition;
(function (StartPosition) {
    /**
     * @internal
     */
    StartPosition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPosition = exports.StartPosition || (exports.StartPosition = {}));
var GetTranscriptRequest;
(function (GetTranscriptRequest) {
    /**
     * @internal
     */
    GetTranscriptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTranscriptRequest = exports.GetTranscriptRequest || (exports.GetTranscriptRequest = {}));
var ArtifactStatus;
(function (ArtifactStatus) {
    ArtifactStatus["APPROVED"] = "APPROVED";
    ArtifactStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ArtifactStatus["REJECTED"] = "REJECTED";
})(ArtifactStatus = exports.ArtifactStatus || (exports.ArtifactStatus = {}));
var AttachmentItem;
(function (AttachmentItem) {
    /**
     * @internal
     */
    AttachmentItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentItem = exports.AttachmentItem || (exports.AttachmentItem = {}));
var ParticipantRole;
(function (ParticipantRole) {
    ParticipantRole["AGENT"] = "AGENT";
    ParticipantRole["CUSTOMER"] = "CUSTOMER";
    ParticipantRole["SYSTEM"] = "SYSTEM";
})(ParticipantRole = exports.ParticipantRole || (exports.ParticipantRole = {}));
var ChatItemType;
(function (ChatItemType) {
    ChatItemType["ATTACHMENT"] = "ATTACHMENT";
    ChatItemType["CHAT_ENDED"] = "CHAT_ENDED";
    ChatItemType["CONNECTION_ACK"] = "CONNECTION_ACK";
    ChatItemType["EVENT"] = "EVENT";
    ChatItemType["MESSAGE"] = "MESSAGE";
    ChatItemType["PARTICIPANT_JOINED"] = "PARTICIPANT_JOINED";
    ChatItemType["PARTICIPANT_LEFT"] = "PARTICIPANT_LEFT";
    ChatItemType["TRANSFER_FAILED"] = "TRANSFER_FAILED";
    ChatItemType["TRANSFER_SUCCEEDED"] = "TRANSFER_SUCCEEDED";
    ChatItemType["TYPING"] = "TYPING";
})(ChatItemType = exports.ChatItemType || (exports.ChatItemType = {}));
var Item;
(function (Item) {
    /**
     * @internal
     */
    Item.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Item = exports.Item || (exports.Item = {}));
var GetTranscriptResponse;
(function (GetTranscriptResponse) {
    /**
     * @internal
     */
    GetTranscriptResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTranscriptResponse = exports.GetTranscriptResponse || (exports.GetTranscriptResponse = {}));
var SendEventRequest;
(function (SendEventRequest) {
    /**
     * @internal
     */
    SendEventRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendEventRequest = exports.SendEventRequest || (exports.SendEventRequest = {}));
var SendEventResponse;
(function (SendEventResponse) {
    /**
     * @internal
     */
    SendEventResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendEventResponse = exports.SendEventResponse || (exports.SendEventResponse = {}));
var SendMessageRequest;
(function (SendMessageRequest) {
    /**
     * @internal
     */
    SendMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageRequest = exports.SendMessageRequest || (exports.SendMessageRequest = {}));
var SendMessageResponse;
(function (SendMessageResponse) {
    /**
     * @internal
     */
    SendMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageResponse = exports.SendMessageResponse || (exports.SendMessageResponse = {}));
var StartAttachmentUploadRequest;
(function (StartAttachmentUploadRequest) {
    /**
     * @internal
     */
    StartAttachmentUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAttachmentUploadRequest = exports.StartAttachmentUploadRequest || (exports.StartAttachmentUploadRequest = {}));
var UploadMetadata;
(function (UploadMetadata) {
    /**
     * @internal
     */
    UploadMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadMetadata = exports.UploadMetadata || (exports.UploadMetadata = {}));
var StartAttachmentUploadResponse;
(function (StartAttachmentUploadResponse) {
    /**
     * @internal
     */
    StartAttachmentUploadResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAttachmentUploadResponse = exports.StartAttachmentUploadResponse || (exports.StartAttachmentUploadResponse = {}));
//# sourceMappingURL=models_0.js.map