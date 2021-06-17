import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ActiveContextTimeToLive;
(function (ActiveContextTimeToLive) {
    /**
     * @internal
     */
    ActiveContextTimeToLive.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActiveContextTimeToLive || (ActiveContextTimeToLive = {}));
export var ActiveContext;
(function (ActiveContext) {
    /**
     * @internal
     */
    ActiveContext.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.contextAttributes && { contextAttributes: SENSITIVE_STRING }))); };
})(ActiveContext || (ActiveContext = {}));
export var AudioInputEvent;
(function (AudioInputEvent) {
    /**
     * @internal
     */
    AudioInputEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioInputEvent || (AudioInputEvent = {}));
export var AudioResponseEvent;
(function (AudioResponseEvent) {
    /**
     * @internal
     */
    AudioResponseEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioResponseEvent || (AudioResponseEvent = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var DeleteSessionRequest;
(function (DeleteSessionRequest) {
    /**
     * @internal
     */
    DeleteSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSessionRequest || (DeleteSessionRequest = {}));
export var DeleteSessionResponse;
(function (DeleteSessionResponse) {
    /**
     * @internal
     */
    DeleteSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSessionResponse || (DeleteSessionResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
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
export var GetSessionRequest;
(function (GetSessionRequest) {
    /**
     * @internal
     */
    GetSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSessionRequest || (GetSessionRequest = {}));
export var ConfirmationState;
(function (ConfirmationState) {
    ConfirmationState["CONFIRMED"] = "Confirmed";
    ConfirmationState["DENIED"] = "Denied";
    ConfirmationState["NONE"] = "None";
})(ConfirmationState || (ConfirmationState = {}));
export var Value;
(function (Value) {
    /**
     * @internal
     */
    Value.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Value || (Value = {}));
export var Slot;
(function (Slot) {
    /**
     * @internal
     */
    Slot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Slot || (Slot = {}));
export var IntentState;
(function (IntentState) {
    IntentState["FAILED"] = "Failed";
    IntentState["FULFILLED"] = "Fulfilled";
    IntentState["IN_PROGRESS"] = "InProgress";
    IntentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
    IntentState["WAITING"] = "Waiting";
})(IntentState || (IntentState = {}));
export var Intent;
(function (Intent) {
    /**
     * @internal
     */
    Intent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Intent || (Intent = {}));
export var ConfidenceScore;
(function (ConfidenceScore) {
    /**
     * @internal
     */
    ConfidenceScore.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfidenceScore || (ConfidenceScore = {}));
export var SentimentType;
(function (SentimentType) {
    SentimentType["MIXED"] = "MIXED";
    SentimentType["NEGATIVE"] = "NEGATIVE";
    SentimentType["NEUTRAL"] = "NEUTRAL";
    SentimentType["POSITIVE"] = "POSITIVE";
})(SentimentType || (SentimentType = {}));
export var SentimentScore;
(function (SentimentScore) {
    /**
     * @internal
     */
    SentimentScore.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SentimentScore || (SentimentScore = {}));
export var SentimentResponse;
(function (SentimentResponse) {
    /**
     * @internal
     */
    SentimentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SentimentResponse || (SentimentResponse = {}));
export var Interpretation;
(function (Interpretation) {
    /**
     * @internal
     */
    Interpretation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Interpretation || (Interpretation = {}));
export var MessageContentType;
(function (MessageContentType) {
    MessageContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageContentType["IMAGE_RESPONSE_CARD"] = "ImageResponseCard";
    MessageContentType["PLAIN_TEXT"] = "PlainText";
    MessageContentType["SSML"] = "SSML";
})(MessageContentType || (MessageContentType = {}));
export var Button;
(function (Button) {
    /**
     * @internal
     */
    Button.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Button || (Button = {}));
export var ImageResponseCard;
(function (ImageResponseCard) {
    /**
     * @internal
     */
    ImageResponseCard.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageResponseCard || (ImageResponseCard = {}));
export var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.content && { content: SENSITIVE_STRING }))); };
})(Message || (Message = {}));
export var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType || (DialogActionType = {}));
export var DialogAction;
(function (DialogAction) {
    /**
     * @internal
     */
    DialogAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DialogAction || (DialogAction = {}));
export var SessionState;
(function (SessionState) {
    /**
     * @internal
     */
    SessionState.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.activeContexts && {
        activeContexts: obj.activeContexts.map(function (item) { return ActiveContext.filterSensitiveLog(item); }),
    }))); };
})(SessionState || (SessionState = {}));
export var GetSessionResponse;
(function (GetSessionResponse) {
    /**
     * @internal
     */
    GetSessionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return Message.filterSensitiveLog(item); }) })), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }))); };
})(GetSessionResponse || (GetSessionResponse = {}));
export var BadGatewayException;
(function (BadGatewayException) {
    /**
     * @internal
     */
    BadGatewayException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadGatewayException || (BadGatewayException = {}));
export var DependencyFailedException;
(function (DependencyFailedException) {
    /**
     * @internal
     */
    DependencyFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DependencyFailedException || (DependencyFailedException = {}));
export var PutSessionRequest;
(function (PutSessionRequest) {
    /**
     * @internal
     */
    PutSessionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return Message.filterSensitiveLog(item); }) })), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }))); };
})(PutSessionRequest || (PutSessionRequest = {}));
export var PutSessionResponse;
(function (PutSessionResponse) {
    /**
     * @internal
     */
    PutSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSessionResponse || (PutSessionResponse = {}));
export var RecognizeTextRequest;
(function (RecognizeTextRequest) {
    /**
     * @internal
     */
    RecognizeTextRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.text && { text: SENSITIVE_STRING })), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }))); };
})(RecognizeTextRequest || (RecognizeTextRequest = {}));
export var RecognizeTextResponse;
(function (RecognizeTextResponse) {
    /**
     * @internal
     */
    RecognizeTextResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return Message.filterSensitiveLog(item); }) })), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }))); };
})(RecognizeTextResponse || (RecognizeTextResponse = {}));
export var RecognizeUtteranceRequest;
(function (RecognizeUtteranceRequest) {
    /**
     * @internal
     */
    RecognizeUtteranceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.sessionState && { sessionState: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }))); };
})(RecognizeUtteranceRequest || (RecognizeUtteranceRequest = {}));
export var RecognizeUtteranceResponse;
(function (RecognizeUtteranceResponse) {
    /**
     * @internal
     */
    RecognizeUtteranceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecognizeUtteranceResponse || (RecognizeUtteranceResponse = {}));
export var ConversationMode;
(function (ConversationMode) {
    ConversationMode["AUDIO"] = "AUDIO";
    ConversationMode["TEXT"] = "TEXT";
})(ConversationMode || (ConversationMode = {}));
export var ConfigurationEvent;
(function (ConfigurationEvent) {
    /**
     * @internal
     */
    ConfigurationEvent.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) })), (obj.welcomeMessages && {
        welcomeMessages: obj.welcomeMessages.map(function (item) { return Message.filterSensitiveLog(item); }),
    }))); };
})(ConfigurationEvent || (ConfigurationEvent = {}));
export var DisconnectionEvent;
(function (DisconnectionEvent) {
    /**
     * @internal
     */
    DisconnectionEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectionEvent || (DisconnectionEvent = {}));
export var DTMFInputEvent;
(function (DTMFInputEvent) {
    /**
     * @internal
     */
    DTMFInputEvent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.inputCharacter && { inputCharacter: SENSITIVE_STRING }))); };
})(DTMFInputEvent || (DTMFInputEvent = {}));
export var PlaybackCompletionEvent;
(function (PlaybackCompletionEvent) {
    /**
     * @internal
     */
    PlaybackCompletionEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlaybackCompletionEvent || (PlaybackCompletionEvent = {}));
export var TextInputEvent;
(function (TextInputEvent) {
    /**
     * @internal
     */
    TextInputEvent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.text && { text: SENSITIVE_STRING }))); };
})(TextInputEvent || (TextInputEvent = {}));
export var StartConversationRequestEventStream;
(function (StartConversationRequestEventStream) {
    StartConversationRequestEventStream.visit = function (value, visitor) {
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
    StartConversationRequestEventStream.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(StartConversationRequestEventStream || (StartConversationRequestEventStream = {}));
export var StartConversationRequest;
(function (StartConversationRequest) {
    /**
     * @internal
     */
    StartConversationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }))); };
})(StartConversationRequest || (StartConversationRequest = {}));
export var HeartbeatEvent;
(function (HeartbeatEvent) {
    /**
     * @internal
     */
    HeartbeatEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HeartbeatEvent || (HeartbeatEvent = {}));
export var InputMode;
(function (InputMode) {
    InputMode["DTMF"] = "DTMF";
    InputMode["SPEECH"] = "Speech";
    InputMode["TEXT"] = "Text";
})(InputMode || (InputMode = {}));
export var IntentResultEvent;
(function (IntentResultEvent) {
    /**
     * @internal
     */
    IntentResultEvent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.sessionState && { sessionState: SessionState.filterSensitiveLog(obj.sessionState) }))); };
})(IntentResultEvent || (IntentResultEvent = {}));
export var PlaybackInterruptionReason;
(function (PlaybackInterruptionReason) {
    PlaybackInterruptionReason["DTMF_START_DETECTED"] = "DTMF_START_DETECTED";
    PlaybackInterruptionReason["TEXT_DETECTED"] = "TEXT_DETECTED";
    PlaybackInterruptionReason["VOICE_START_DETECTED"] = "VOICE_START_DETECTED";
})(PlaybackInterruptionReason || (PlaybackInterruptionReason = {}));
export var PlaybackInterruptionEvent;
(function (PlaybackInterruptionEvent) {
    /**
     * @internal
     */
    PlaybackInterruptionEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlaybackInterruptionEvent || (PlaybackInterruptionEvent = {}));
export var TextResponseEvent;
(function (TextResponseEvent) {
    /**
     * @internal
     */
    TextResponseEvent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return Message.filterSensitiveLog(item); }) }))); };
})(TextResponseEvent || (TextResponseEvent = {}));
export var TranscriptEvent;
(function (TranscriptEvent) {
    /**
     * @internal
     */
    TranscriptEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptEvent || (TranscriptEvent = {}));
export var StartConversationResponseEventStream;
(function (StartConversationResponseEventStream) {
    StartConversationResponseEventStream.visit = function (value, visitor) {
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
    StartConversationResponseEventStream.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(StartConversationResponseEventStream || (StartConversationResponseEventStream = {}));
export var StartConversationResponse;
(function (StartConversationResponse) {
    /**
     * @internal
     */
    StartConversationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }))); };
})(StartConversationResponse || (StartConversationResponse = {}));
//# sourceMappingURL=models_0.js.map