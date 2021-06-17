import { __assign } from "tslib";
import { SENSITIVE_STRING, } from "@aws-sdk/smithy-client";
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
    ActiveContext.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.parameters && { parameters: SENSITIVE_STRING }))); };
})(ActiveContext || (ActiveContext = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
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
export var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var GetSessionRequest;
(function (GetSessionRequest) {
    /**
     * @internal
     */
    GetSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSessionRequest || (GetSessionRequest = {}));
export var FulfillmentState;
(function (FulfillmentState) {
    FulfillmentState["FAILED"] = "Failed";
    FulfillmentState["FULFILLED"] = "Fulfilled";
    FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState || (FulfillmentState = {}));
export var MessageFormatType;
(function (MessageFormatType) {
    MessageFormatType["COMPOSITE"] = "Composite";
    MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageFormatType["PLAIN_TEXT"] = "PlainText";
    MessageFormatType["SSML"] = "SSML";
})(MessageFormatType || (MessageFormatType = {}));
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
    DialogAction.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING })), (obj.message && { message: SENSITIVE_STRING }))); };
})(DialogAction || (DialogAction = {}));
export var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["CONFIRMED"] = "Confirmed";
    ConfirmationStatus["DENIED"] = "Denied";
    ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus || (ConfirmationStatus = {}));
export var IntentSummary;
(function (IntentSummary) {
    /**
     * @internal
     */
    IntentSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING }))); };
})(IntentSummary || (IntentSummary = {}));
export var GetSessionResponse;
(function (GetSessionResponse) {
    /**
     * @internal
     */
    GetSessionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummary.filterSensitiveLog(item); }),
    })), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
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
export var LoopDetectedException;
(function (LoopDetectedException) {
    /**
     * @internal
     */
    LoopDetectedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoopDetectedException || (LoopDetectedException = {}));
export var NotAcceptableException;
(function (NotAcceptableException) {
    /**
     * @internal
     */
    NotAcceptableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotAcceptableException || (NotAcceptableException = {}));
export var PostContentRequest;
(function (PostContentRequest) {
    /**
     * @internal
     */
    PostContentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PostContentRequest || (PostContentRequest = {}));
export var DialogState;
(function (DialogState) {
    DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogState["ELICIT_INTENT"] = "ElicitIntent";
    DialogState["ELICIT_SLOT"] = "ElicitSlot";
    DialogState["FAILED"] = "Failed";
    DialogState["FULFILLED"] = "Fulfilled";
    DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState || (DialogState = {}));
export var PostContentResponse;
(function (PostContentResponse) {
    /**
     * @internal
     */
    PostContentResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.message && { message: SENSITIVE_STRING })), (obj.encodedMessage && { encodedMessage: SENSITIVE_STRING })), (obj.encodedInputTranscript && { encodedInputTranscript: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PostContentResponse || (PostContentResponse = {}));
export var RequestTimeoutException;
(function (RequestTimeoutException) {
    /**
     * @internal
     */
    RequestTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestTimeoutException || (RequestTimeoutException = {}));
export var UnsupportedMediaTypeException;
(function (UnsupportedMediaTypeException) {
    /**
     * @internal
     */
    UnsupportedMediaTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedMediaTypeException || (UnsupportedMediaTypeException = {}));
export var PostTextRequest;
(function (PostTextRequest) {
    /**
     * @internal
     */
    PostTextRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING })), (obj.inputText && { inputText: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PostTextRequest || (PostTextRequest = {}));
export var IntentConfidence;
(function (IntentConfidence) {
    /**
     * @internal
     */
    IntentConfidence.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntentConfidence || (IntentConfidence = {}));
export var PredictedIntent;
(function (PredictedIntent) {
    /**
     * @internal
     */
    PredictedIntent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING }))); };
})(PredictedIntent || (PredictedIntent = {}));
export var ContentType;
(function (ContentType) {
    ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType || (ContentType = {}));
export var Button;
(function (Button) {
    /**
     * @internal
     */
    Button.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Button || (Button = {}));
export var GenericAttachment;
(function (GenericAttachment) {
    /**
     * @internal
     */
    GenericAttachment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenericAttachment || (GenericAttachment = {}));
export var ResponseCard;
(function (ResponseCard) {
    /**
     * @internal
     */
    ResponseCard.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseCard || (ResponseCard = {}));
export var SentimentResponse;
(function (SentimentResponse) {
    /**
     * @internal
     */
    SentimentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SentimentResponse || (SentimentResponse = {}));
export var PostTextResponse;
(function (PostTextResponse) {
    /**
     * @internal
     */
    PostTextResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.alternativeIntents && {
        alternativeIntents: obj.alternativeIntents.map(function (item) { return PredictedIntent.filterSensitiveLog(item); }),
    })), (obj.slots && { slots: SENSITIVE_STRING })), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.message && { message: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PostTextResponse || (PostTextResponse = {}));
export var PutSessionRequest;
(function (PutSessionRequest) {
    /**
     * @internal
     */
    PutSessionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) })), (obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummary.filterSensitiveLog(item); }),
    })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PutSessionRequest || (PutSessionRequest = {}));
export var PutSessionResponse;
(function (PutSessionResponse) {
    /**
     * @internal
     */
    PutSessionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.message && { message: SENSITIVE_STRING })), (obj.encodedMessage && { encodedMessage: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
})(PutSessionResponse || (PutSessionResponse = {}));
//# sourceMappingURL=models_0.js.map