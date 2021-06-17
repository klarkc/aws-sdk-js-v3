import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var CompleteAttachmentUploadRequest;
(function (CompleteAttachmentUploadRequest) {
    /**
     * @internal
     */
    CompleteAttachmentUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteAttachmentUploadRequest || (CompleteAttachmentUploadRequest = {}));
export var CompleteAttachmentUploadResponse;
(function (CompleteAttachmentUploadResponse) {
    /**
     * @internal
     */
    CompleteAttachmentUploadResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteAttachmentUploadResponse || (CompleteAttachmentUploadResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ConnectionType;
(function (ConnectionType) {
    ConnectionType["CONNECTION_CREDENTIALS"] = "CONNECTION_CREDENTIALS";
    ConnectionType["WEBSOCKET"] = "WEBSOCKET";
})(ConnectionType || (ConnectionType = {}));
export var CreateParticipantConnectionRequest;
(function (CreateParticipantConnectionRequest) {
    /**
     * @internal
     */
    CreateParticipantConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateParticipantConnectionRequest || (CreateParticipantConnectionRequest = {}));
export var ConnectionCredentials;
(function (ConnectionCredentials) {
    /**
     * @internal
     */
    ConnectionCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionCredentials || (ConnectionCredentials = {}));
export var Websocket;
(function (Websocket) {
    /**
     * @internal
     */
    Websocket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Websocket || (Websocket = {}));
export var CreateParticipantConnectionResponse;
(function (CreateParticipantConnectionResponse) {
    /**
     * @internal
     */
    CreateParticipantConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateParticipantConnectionResponse || (CreateParticipantConnectionResponse = {}));
export var DisconnectParticipantRequest;
(function (DisconnectParticipantRequest) {
    /**
     * @internal
     */
    DisconnectParticipantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectParticipantRequest || (DisconnectParticipantRequest = {}));
export var DisconnectParticipantResponse;
(function (DisconnectParticipantResponse) {
    /**
     * @internal
     */
    DisconnectParticipantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectParticipantResponse || (DisconnectParticipantResponse = {}));
export var GetAttachmentRequest;
(function (GetAttachmentRequest) {
    /**
     * @internal
     */
    GetAttachmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAttachmentRequest || (GetAttachmentRequest = {}));
export var GetAttachmentResponse;
(function (GetAttachmentResponse) {
    /**
     * @internal
     */
    GetAttachmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAttachmentResponse || (GetAttachmentResponse = {}));
export var ScanDirection;
(function (ScanDirection) {
    ScanDirection["BACKWARD"] = "BACKWARD";
    ScanDirection["FORWARD"] = "FORWARD";
})(ScanDirection || (ScanDirection = {}));
export var SortKey;
(function (SortKey) {
    SortKey["ASCENDING"] = "ASCENDING";
    SortKey["DESCENDING"] = "DESCENDING";
})(SortKey || (SortKey = {}));
export var StartPosition;
(function (StartPosition) {
    /**
     * @internal
     */
    StartPosition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartPosition || (StartPosition = {}));
export var GetTranscriptRequest;
(function (GetTranscriptRequest) {
    /**
     * @internal
     */
    GetTranscriptRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptRequest || (GetTranscriptRequest = {}));
export var ArtifactStatus;
(function (ArtifactStatus) {
    ArtifactStatus["APPROVED"] = "APPROVED";
    ArtifactStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ArtifactStatus["REJECTED"] = "REJECTED";
})(ArtifactStatus || (ArtifactStatus = {}));
export var AttachmentItem;
(function (AttachmentItem) {
    /**
     * @internal
     */
    AttachmentItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachmentItem || (AttachmentItem = {}));
export var ParticipantRole;
(function (ParticipantRole) {
    ParticipantRole["AGENT"] = "AGENT";
    ParticipantRole["CUSTOMER"] = "CUSTOMER";
    ParticipantRole["SYSTEM"] = "SYSTEM";
})(ParticipantRole || (ParticipantRole = {}));
export var ChatItemType;
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
})(ChatItemType || (ChatItemType = {}));
export var Item;
(function (Item) {
    /**
     * @internal
     */
    Item.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Item || (Item = {}));
export var GetTranscriptResponse;
(function (GetTranscriptResponse) {
    /**
     * @internal
     */
    GetTranscriptResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptResponse || (GetTranscriptResponse = {}));
export var SendEventRequest;
(function (SendEventRequest) {
    /**
     * @internal
     */
    SendEventRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendEventRequest || (SendEventRequest = {}));
export var SendEventResponse;
(function (SendEventResponse) {
    /**
     * @internal
     */
    SendEventResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendEventResponse || (SendEventResponse = {}));
export var SendMessageRequest;
(function (SendMessageRequest) {
    /**
     * @internal
     */
    SendMessageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendMessageRequest || (SendMessageRequest = {}));
export var SendMessageResponse;
(function (SendMessageResponse) {
    /**
     * @internal
     */
    SendMessageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendMessageResponse || (SendMessageResponse = {}));
export var StartAttachmentUploadRequest;
(function (StartAttachmentUploadRequest) {
    /**
     * @internal
     */
    StartAttachmentUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAttachmentUploadRequest || (StartAttachmentUploadRequest = {}));
export var UploadMetadata;
(function (UploadMetadata) {
    /**
     * @internal
     */
    UploadMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadMetadata || (UploadMetadata = {}));
export var StartAttachmentUploadResponse;
(function (StartAttachmentUploadResponse) {
    /**
     * @internal
     */
    StartAttachmentUploadResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAttachmentUploadResponse || (StartAttachmentUploadResponse = {}));
//# sourceMappingURL=models_0.js.map