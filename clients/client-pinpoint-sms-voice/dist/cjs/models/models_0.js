"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationRequest = exports.SendVoiceMessageResponse = exports.SendVoiceMessageRequest = exports.VoiceMessageContent = exports.SSMLMessageType = exports.PlainTextMessageType = exports.ListConfigurationSetsResponse = exports.ListConfigurationSetsRequest = exports.GetConfigurationSetEventDestinationsResponse = exports.GetConfigurationSetEventDestinationsRequest = exports.EventDestination = exports.DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetResponse = exports.DeleteConfigurationSetRequest = exports.NotFoundException = exports.CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationRequest = exports.EventDestinationDefinition = exports.SnsDestination = exports.EventType = exports.KinesisFirehoseDestination = exports.TooManyRequestsException = exports.LimitExceededException = exports.InternalServiceErrorException = exports.CreateConfigurationSetResponse = exports.CreateConfigurationSetRequest = exports.CloudWatchLogsDestination = exports.CallInstructionsMessageType = exports.BadRequestException = exports.AlreadyExistsException = void 0;
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CallInstructionsMessageType;
(function (CallInstructionsMessageType) {
    /**
     * @internal
     */
    CallInstructionsMessageType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CallInstructionsMessageType = exports.CallInstructionsMessageType || (exports.CallInstructionsMessageType = {}));
var CloudWatchLogsDestination;
(function (CloudWatchLogsDestination) {
    /**
     * @internal
     */
    CloudWatchLogsDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsDestination = exports.CloudWatchLogsDestination || (exports.CloudWatchLogsDestination = {}));
var CreateConfigurationSetRequest;
(function (CreateConfigurationSetRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetRequest = exports.CreateConfigurationSetRequest || (exports.CreateConfigurationSetRequest = {}));
var CreateConfigurationSetResponse;
(function (CreateConfigurationSetResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetResponse = exports.CreateConfigurationSetResponse || (exports.CreateConfigurationSetResponse = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var KinesisFirehoseDestination;
(function (KinesisFirehoseDestination) {
    /**
     * @internal
     */
    KinesisFirehoseDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseDestination = exports.KinesisFirehoseDestination || (exports.KinesisFirehoseDestination = {}));
var EventType;
(function (EventType) {
    EventType["ANSWERED"] = "ANSWERED";
    EventType["BUSY"] = "BUSY";
    EventType["COMPLETED_CALL"] = "COMPLETED_CALL";
    EventType["FAILED"] = "FAILED";
    EventType["INITIATED_CALL"] = "INITIATED_CALL";
    EventType["NO_ANSWER"] = "NO_ANSWER";
    EventType["RINGING"] = "RINGING";
})(EventType = exports.EventType || (exports.EventType = {}));
var SnsDestination;
(function (SnsDestination) {
    /**
     * @internal
     */
    SnsDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnsDestination = exports.SnsDestination || (exports.SnsDestination = {}));
var EventDestinationDefinition;
(function (EventDestinationDefinition) {
    /**
     * @internal
     */
    EventDestinationDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDestinationDefinition = exports.EventDestinationDefinition || (exports.EventDestinationDefinition = {}));
var CreateConfigurationSetEventDestinationRequest;
(function (CreateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetEventDestinationRequest = exports.CreateConfigurationSetEventDestinationRequest || (exports.CreateConfigurationSetEventDestinationRequest = {}));
var CreateConfigurationSetEventDestinationResponse;
(function (CreateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationResponse || (exports.CreateConfigurationSetEventDestinationResponse = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DeleteConfigurationSetRequest;
(function (DeleteConfigurationSetRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetRequest = exports.DeleteConfigurationSetRequest || (exports.DeleteConfigurationSetRequest = {}));
var DeleteConfigurationSetResponse;
(function (DeleteConfigurationSetResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetResponse = exports.DeleteConfigurationSetResponse || (exports.DeleteConfigurationSetResponse = {}));
var DeleteConfigurationSetEventDestinationRequest;
(function (DeleteConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetEventDestinationRequest || (exports.DeleteConfigurationSetEventDestinationRequest = {}));
var DeleteConfigurationSetEventDestinationResponse;
(function (DeleteConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationResponse || (exports.DeleteConfigurationSetEventDestinationResponse = {}));
var EventDestination;
(function (EventDestination) {
    /**
     * @internal
     */
    EventDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDestination = exports.EventDestination || (exports.EventDestination = {}));
var GetConfigurationSetEventDestinationsRequest;
(function (GetConfigurationSetEventDestinationsRequest) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetEventDestinationsRequest = exports.GetConfigurationSetEventDestinationsRequest || (exports.GetConfigurationSetEventDestinationsRequest = {}));
var GetConfigurationSetEventDestinationsResponse;
(function (GetConfigurationSetEventDestinationsResponse) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetEventDestinationsResponse = exports.GetConfigurationSetEventDestinationsResponse || (exports.GetConfigurationSetEventDestinationsResponse = {}));
var ListConfigurationSetsRequest;
(function (ListConfigurationSetsRequest) {
    /**
     * @internal
     */
    ListConfigurationSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationSetsRequest = exports.ListConfigurationSetsRequest || (exports.ListConfigurationSetsRequest = {}));
var ListConfigurationSetsResponse;
(function (ListConfigurationSetsResponse) {
    /**
     * @internal
     */
    ListConfigurationSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationSetsResponse = exports.ListConfigurationSetsResponse || (exports.ListConfigurationSetsResponse = {}));
var PlainTextMessageType;
(function (PlainTextMessageType) {
    /**
     * @internal
     */
    PlainTextMessageType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlainTextMessageType = exports.PlainTextMessageType || (exports.PlainTextMessageType = {}));
var SSMLMessageType;
(function (SSMLMessageType) {
    /**
     * @internal
     */
    SSMLMessageType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSMLMessageType = exports.SSMLMessageType || (exports.SSMLMessageType = {}));
var VoiceMessageContent;
(function (VoiceMessageContent) {
    /**
     * @internal
     */
    VoiceMessageContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceMessageContent = exports.VoiceMessageContent || (exports.VoiceMessageContent = {}));
var SendVoiceMessageRequest;
(function (SendVoiceMessageRequest) {
    /**
     * @internal
     */
    SendVoiceMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendVoiceMessageRequest = exports.SendVoiceMessageRequest || (exports.SendVoiceMessageRequest = {}));
var SendVoiceMessageResponse;
(function (SendVoiceMessageResponse) {
    /**
     * @internal
     */
    SendVoiceMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendVoiceMessageResponse = exports.SendVoiceMessageResponse || (exports.SendVoiceMessageResponse = {}));
var UpdateConfigurationSetEventDestinationRequest;
(function (UpdateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationSetEventDestinationRequest = exports.UpdateConfigurationSetEventDestinationRequest || (exports.UpdateConfigurationSetEventDestinationRequest = {}));
var UpdateConfigurationSetEventDestinationResponse;
(function (UpdateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationResponse || (exports.UpdateConfigurationSetEventDestinationResponse = {}));
//# sourceMappingURL=models_0.js.map