"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentResultEvent = exports.InputMode = exports.HeartbeatEvent = exports.StartConversationRequest = exports.StartConversationRequestEventStream = exports.TextInputEvent = exports.PlaybackCompletionEvent = exports.DTMFInputEvent = exports.DisconnectionEvent = exports.ConfigurationEvent = exports.ConversationMode = exports.RecognizeUtteranceResponse = exports.RecognizeUtteranceRequest = exports.RecognizeTextResponse = exports.RecognizeTextRequest = exports.PutSessionResponse = exports.PutSessionRequest = exports.DependencyFailedException = exports.BadGatewayException = exports.GetSessionResponse = exports.SessionState = exports.DialogAction = exports.DialogActionType = exports.Message = exports.ImageResponseCard = exports.Button = exports.MessageContentType = exports.Interpretation = exports.SentimentResponse = exports.SentimentScore = exports.SentimentType = exports.ConfidenceScore = exports.Intent = exports.IntentState = exports.Slot = exports.Value = exports.ConfirmationState = exports.GetSessionRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.DeleteSessionResponse = exports.DeleteSessionRequest = exports.ConflictException = exports.AudioResponseEvent = exports.AudioInputEvent = exports.ActiveContext = exports.ActiveContextTimeToLive = exports.AccessDeniedException = void 0;
exports.StartConversationResponse = exports.StartConversationResponseEventStream = exports.TranscriptEvent = exports.TextResponseEvent = exports.PlaybackInterruptionEvent = exports.PlaybackInterruptionReason = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ActiveContextTimeToLive;
(function (ActiveContextTimeToLive) {
    /**
     * @internal
     */
    ActiveContextTimeToLive.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveContextTimeToLive = exports.ActiveContextTimeToLive || (exports.ActiveContextTimeToLive = {}));
var ActiveContext;
(function (ActiveContext) {
    /**
     * @internal
     */
    ActiveContext.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.contextAttributes && { contextAttributes: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActiveContext = exports.ActiveContext || (exports.ActiveContext = {}));
var AudioInputEvent;
(function (AudioInputEvent) {
    /**
     * @internal
     */
    AudioInputEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioInputEvent = exports.AudioInputEvent || (exports.AudioInputEvent = {}));
var AudioResponseEvent;
(function (AudioResponseEvent) {
    /**
     * @internal
     */
    AudioResponseEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioResponseEvent = exports.AudioResponseEvent || (exports.AudioResponseEvent = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeleteSessionRequest;
(function (DeleteSessionRequest) {
    /**
     * @internal
     */
    DeleteSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSessionRequest = exports.DeleteSessionRequest || (exports.DeleteSessionRequest = {}));
var DeleteSessionResponse;
(function (DeleteSessionResponse) {
    /**
     * @internal
     */
    DeleteSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSessionResponse = exports.DeleteSessionResponse || (exports.DeleteSessionResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
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
var GetSessionRequest;
(function (GetSessionRequest) {
    /**
     * @internal
     */
    GetSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSessionRequest = exports.GetSessionRequest || (exports.GetSessionRequest = {}));
var ConfirmationState;
(function (ConfirmationState) {
    ConfirmationState["CONFIRMED"] = "Confirmed";
    ConfirmationState["DENIED"] = "Denied";
    ConfirmationState["NONE"] = "None";
})(ConfirmationState = exports.ConfirmationState || (exports.ConfirmationState = {}));
var Value;
(function (Value) {
    /**
     * @internal
     */
    Value.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Value = exports.Value || (exports.Value = {}));
var Slot;
(function (Slot) {
    /**
     * @internal
     */
    Slot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Slot = exports.Slot || (exports.Slot = {}));
var IntentState;
(function (IntentState) {
    IntentState["FAILED"] = "Failed";
    IntentState["FULFILLED"] = "Fulfilled";
    IntentState["IN_PROGRESS"] = "InProgress";
    IntentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
    IntentState["WAITING"] = "Waiting";
})(IntentState = exports.IntentState || (exports.IntentState = {}));
var Intent;
(function (Intent) {
    /**
     * @internal
     */
    Intent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Intent = exports.Intent || (exports.Intent = {}));
var ConfidenceScore;
(function (ConfidenceScore) {
    /**
     * @internal
     */
    ConfidenceScore.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfidenceScore = exports.ConfidenceScore || (exports.ConfidenceScore = {}));
var SentimentType;
(function (SentimentType) {
    SentimentType["MIXED"] = "MIXED";
    SentimentType["NEGATIVE"] = "NEGATIVE";
    SentimentType["NEUTRAL"] = "NEUTRAL";
    SentimentType["POSITIVE"] = "POSITIVE";
})(SentimentType = exports.SentimentType || (exports.SentimentType = {}));
var SentimentScore;
(function (SentimentScore) {
    /**
     * @internal
     */
    SentimentScore.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SentimentScore = exports.SentimentScore || (exports.SentimentScore = {}));
var SentimentResponse;
(function (SentimentResponse) {
    /**
     * @internal
     */
    SentimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SentimentResponse = exports.SentimentResponse || (exports.SentimentResponse = {}));
var Interpretation;
(function (Interpretation) {
    /**
     * @internal
     */
    Interpretation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Interpretation = exports.Interpretation || (exports.Interpretation = {}));
var MessageContentType;
(function (MessageContentType) {
    MessageContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageContentType["IMAGE_RESPONSE_CARD"] = "ImageResponseCard";
    MessageContentType["PLAIN_TEXT"] = "PlainText";
    MessageContentType["SSML"] = "SSML";
})(MessageContentType = exports.MessageContentType || (exports.MessageContentType = {}));
var Button;
(function (Button) {
    /**
     * @internal
     */
    Button.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Button = exports.Button || (exports.Button = {}));
var ImageResponseCard;
(function (ImageResponseCard) {
    /**
     * @internal
     */
    ImageResponseCard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageResponseCard = exports.ImageResponseCard || (exports.ImageResponseCard = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.content && { content: smithy_client_1.SENSITIVE_STRING }),
    });
})(Message = exports.Message || (exports.Message = {}));
var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType = exports.DialogActionType || (exports.DialogActionType = {}));
var DialogAction;
(function (DialogAction) {
    /**
     * @internal
     */
    DialogAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DialogAction = exports.DialogAction || (exports.DialogAction = {}));
var SessionState;
(function (SessionState) {
    /**
     * @internal
     */
    SessionState.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.activeContexts && {
            activeContexts: obj.activeContexts.map((item) => ActiveContext.filterSensitiveLog(item)),
        }),
    });
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var GetSessionResponse;
(function (GetSessionResponse) {
    /**
     * @internal
     */
    GetSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
    });
})(GetSessionResponse = exports.GetSessionResponse || (exports.GetSessionResponse = {}));
var BadGatewayException;
(function (BadGatewayException) {
    /**
     * @internal
     */
    BadGatewayException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadGatewayException = exports.BadGatewayException || (exports.BadGatewayException = {}));
var DependencyFailedException;
(function (DependencyFailedException) {
    /**
     * @internal
     */
    DependencyFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyFailedException = exports.DependencyFailedException || (exports.DependencyFailedException = {}));
var PutSessionRequest;
(function (PutSessionRequest) {
    /**
     * @internal
     */
    PutSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
    });
})(PutSessionRequest = exports.PutSessionRequest || (exports.PutSessionRequest = {}));
var PutSessionResponse;
(function (PutSessionResponse) {
    /**
     * @internal
     */
    PutSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSessionResponse = exports.PutSessionResponse || (exports.PutSessionResponse = {}));
var RecognizeTextRequest;
(function (RecognizeTextRequest) {
    /**
     * @internal
     */
    RecognizeTextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.text && { text: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
    });
})(RecognizeTextRequest = exports.RecognizeTextRequest || (exports.RecognizeTextRequest = {}));
var RecognizeTextResponse;
(function (RecognizeTextResponse) {
    /**
     * @internal
     */
    RecognizeTextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
    });
})(RecognizeTextResponse = exports.RecognizeTextResponse || (exports.RecognizeTextResponse = {}));
var RecognizeUtteranceRequest;
(function (RecognizeUtteranceRequest) {
    /**
     * @internal
     */
    RecognizeUtteranceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionState && { sessionState: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
    });
})(RecognizeUtteranceRequest = exports.RecognizeUtteranceRequest || (exports.RecognizeUtteranceRequest = {}));
var RecognizeUtteranceResponse;
(function (RecognizeUtteranceResponse) {
    /**
     * @internal
     */
    RecognizeUtteranceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecognizeUtteranceResponse = exports.RecognizeUtteranceResponse || (exports.RecognizeUtteranceResponse = {}));
var ConversationMode;
(function (ConversationMode) {
    ConversationMode["AUDIO"] = "AUDIO";
    ConversationMode["TEXT"] = "TEXT";
})(ConversationMode = exports.ConversationMode || (exports.ConversationMode = {}));
var ConfigurationEvent;
(function (ConfigurationEvent) {
    /**
     * @internal
     */
    ConfigurationEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
        ...(obj.welcomeMessages && {
            welcomeMessages: obj.welcomeMessages.map((item) => Message.filterSensitiveLog(item)),
        }),
    });
})(ConfigurationEvent = exports.ConfigurationEvent || (exports.ConfigurationEvent = {}));
var DisconnectionEvent;
(function (DisconnectionEvent) {
    /**
     * @internal
     */
    DisconnectionEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectionEvent = exports.DisconnectionEvent || (exports.DisconnectionEvent = {}));
var DTMFInputEvent;
(function (DTMFInputEvent) {
    /**
     * @internal
     */
    DTMFInputEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.inputCharacter && { inputCharacter: smithy_client_1.SENSITIVE_STRING }),
    });
})(DTMFInputEvent = exports.DTMFInputEvent || (exports.DTMFInputEvent = {}));
var PlaybackCompletionEvent;
(function (PlaybackCompletionEvent) {
    /**
     * @internal
     */
    PlaybackCompletionEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlaybackCompletionEvent = exports.PlaybackCompletionEvent || (exports.PlaybackCompletionEvent = {}));
var TextInputEvent;
(function (TextInputEvent) {
    /**
     * @internal
     */
    TextInputEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.text && { text: smithy_client_1.SENSITIVE_STRING }),
    });
})(TextInputEvent = exports.TextInputEvent || (exports.TextInputEvent = {}));
var StartConversationRequestEventStream;
(function (StartConversationRequestEventStream) {
    StartConversationRequestEventStream.visit = (value, visitor) => {
        if (value.ConfigurationEvent !== undefined)
            return visitor.ConfigurationEvent(value.ConfigurationEvent);
        if (value.AudioInputEvent !== undefined)
            return visitor.AudioInputEvent(value.AudioInputEvent);
        if (value.DTMFInputEvent !== undefined)
            return visitor.DTMFInputEvent(value.DTMFInputEvent);
        if (value.TextInputEvent !== undefined)
            return visitor.TextInputEvent(value.TextInputEvent);
        if (value.PlaybackCompletionEvent !== undefined)
            return visitor.PlaybackCompletionEvent(value.PlaybackCompletionEvent);
        if (value.DisconnectionEvent !== undefined)
            return visitor.DisconnectionEvent(value.DisconnectionEvent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    StartConversationRequestEventStream.filterSensitiveLog = (obj) => {
        if (obj.ConfigurationEvent !== undefined)
            return { ConfigurationEvent: ConfigurationEvent.filterSensitiveLog(obj.ConfigurationEvent) };
        if (obj.AudioInputEvent !== undefined)
            return { AudioInputEvent: AudioInputEvent.filterSensitiveLog(obj.AudioInputEvent) };
        if (obj.DTMFInputEvent !== undefined)
            return { DTMFInputEvent: DTMFInputEvent.filterSensitiveLog(obj.DTMFInputEvent) };
        if (obj.TextInputEvent !== undefined)
            return { TextInputEvent: TextInputEvent.filterSensitiveLog(obj.TextInputEvent) };
        if (obj.PlaybackCompletionEvent !== undefined)
            return { PlaybackCompletionEvent: PlaybackCompletionEvent.filterSensitiveLog(obj.PlaybackCompletionEvent) };
        if (obj.DisconnectionEvent !== undefined)
            return { DisconnectionEvent: DisconnectionEvent.filterSensitiveLog(obj.DisconnectionEvent) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(StartConversationRequestEventStream = exports.StartConversationRequestEventStream || (exports.StartConversationRequestEventStream = {}));
var StartConversationRequest;
(function (StartConversationRequest) {
    /**
     * @internal
     */
    StartConversationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }),
    });
})(StartConversationRequest = exports.StartConversationRequest || (exports.StartConversationRequest = {}));
var HeartbeatEvent;
(function (HeartbeatEvent) {
    /**
     * @internal
     */
    HeartbeatEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HeartbeatEvent = exports.HeartbeatEvent || (exports.HeartbeatEvent = {}));
var InputMode;
(function (InputMode) {
    InputMode["DTMF"] = "DTMF";
    InputMode["SPEECH"] = "Speech";
    InputMode["TEXT"] = "Text";
})(InputMode = exports.InputMode || (exports.InputMode = {}));
var IntentResultEvent;
(function (IntentResultEvent) {
    /**
     * @internal
     */
    IntentResultEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }),
    });
})(IntentResultEvent = exports.IntentResultEvent || (exports.IntentResultEvent = {}));
var PlaybackInterruptionReason;
(function (PlaybackInterruptionReason) {
    PlaybackInterruptionReason["DTMF_START_DETECTED"] = "DTMF_START_DETECTED";
    PlaybackInterruptionReason["TEXT_DETECTED"] = "TEXT_DETECTED";
    PlaybackInterruptionReason["VOICE_START_DETECTED"] = "VOICE_START_DETECTED";
})(PlaybackInterruptionReason = exports.PlaybackInterruptionReason || (exports.PlaybackInterruptionReason = {}));
var PlaybackInterruptionEvent;
(function (PlaybackInterruptionEvent) {
    /**
     * @internal
     */
    PlaybackInterruptionEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlaybackInterruptionEvent = exports.PlaybackInterruptionEvent || (exports.PlaybackInterruptionEvent = {}));
var TextResponseEvent;
(function (TextResponseEvent) {
    /**
     * @internal
     */
    TextResponseEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
    });
})(TextResponseEvent = exports.TextResponseEvent || (exports.TextResponseEvent = {}));
var TranscriptEvent;
(function (TranscriptEvent) {
    /**
     * @internal
     */
    TranscriptEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranscriptEvent = exports.TranscriptEvent || (exports.TranscriptEvent = {}));
var StartConversationResponseEventStream;
(function (StartConversationResponseEventStream) {
    StartConversationResponseEventStream.visit = (value, visitor) => {
        if (value.PlaybackInterruptionEvent !== undefined)
            return visitor.PlaybackInterruptionEvent(value.PlaybackInterruptionEvent);
        if (value.TranscriptEvent !== undefined)
            return visitor.TranscriptEvent(value.TranscriptEvent);
        if (value.IntentResultEvent !== undefined)
            return visitor.IntentResultEvent(value.IntentResultEvent);
        if (value.TextResponseEvent !== undefined)
            return visitor.TextResponseEvent(value.TextResponseEvent);
        if (value.AudioResponseEvent !== undefined)
            return visitor.AudioResponseEvent(value.AudioResponseEvent);
        if (value.HeartbeatEvent !== undefined)
            return visitor.HeartbeatEvent(value.HeartbeatEvent);
        if (value.AccessDeniedException !== undefined)
            return visitor.AccessDeniedException(value.AccessDeniedException);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.ValidationException !== undefined)
            return visitor.ValidationException(value.ValidationException);
        if (value.ThrottlingException !== undefined)
            return visitor.ThrottlingException(value.ThrottlingException);
        if (value.InternalServerException !== undefined)
            return visitor.InternalServerException(value.InternalServerException);
        if (value.ConflictException !== undefined)
            return visitor.ConflictException(value.ConflictException);
        if (value.DependencyFailedException !== undefined)
            return visitor.DependencyFailedException(value.DependencyFailedException);
        if (value.BadGatewayException !== undefined)
            return visitor.BadGatewayException(value.BadGatewayException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    StartConversationResponseEventStream.filterSensitiveLog = (obj) => {
        if (obj.PlaybackInterruptionEvent !== undefined)
            return { PlaybackInterruptionEvent: PlaybackInterruptionEvent.filterSensitiveLog(obj.PlaybackInterruptionEvent) };
        if (obj.TranscriptEvent !== undefined)
            return { TranscriptEvent: TranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
        if (obj.IntentResultEvent !== undefined)
            return { IntentResultEvent: IntentResultEvent.filterSensitiveLog(obj.IntentResultEvent) };
        if (obj.TextResponseEvent !== undefined)
            return { TextResponseEvent: TextResponseEvent.filterSensitiveLog(obj.TextResponseEvent) };
        if (obj.AudioResponseEvent !== undefined)
            return { AudioResponseEvent: AudioResponseEvent.filterSensitiveLog(obj.AudioResponseEvent) };
        if (obj.HeartbeatEvent !== undefined)
            return { HeartbeatEvent: HeartbeatEvent.filterSensitiveLog(obj.HeartbeatEvent) };
        if (obj.AccessDeniedException !== undefined)
            return { AccessDeniedException: AccessDeniedException.filterSensitiveLog(obj.AccessDeniedException) };
        if (obj.ResourceNotFoundException !== undefined)
            return { ResourceNotFoundException: ResourceNotFoundException.filterSensitiveLog(obj.ResourceNotFoundException) };
        if (obj.ValidationException !== undefined)
            return { ValidationException: ValidationException.filterSensitiveLog(obj.ValidationException) };
        if (obj.ThrottlingException !== undefined)
            return { ThrottlingException: ThrottlingException.filterSensitiveLog(obj.ThrottlingException) };
        if (obj.InternalServerException !== undefined)
            return { InternalServerException: InternalServerException.filterSensitiveLog(obj.InternalServerException) };
        if (obj.ConflictException !== undefined)
            return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
        if (obj.DependencyFailedException !== undefined)
            return { DependencyFailedException: DependencyFailedException.filterSensitiveLog(obj.DependencyFailedException) };
        if (obj.BadGatewayException !== undefined)
            return { BadGatewayException: BadGatewayException.filterSensitiveLog(obj.BadGatewayException) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(StartConversationResponseEventStream = exports.StartConversationResponseEventStream || (exports.StartConversationResponseEventStream = {}));
var StartConversationResponse;
(function (StartConversationResponse) {
    /**
     * @internal
     */
    StartConversationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }),
    });
})(StartConversationResponse = exports.StartConversationResponse || (exports.StartConversationResponse = {}));
//# sourceMappingURL=models_0.js.map