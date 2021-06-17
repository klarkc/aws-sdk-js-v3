"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSessionResponse = exports.PutSessionRequest = exports.PostTextResponse = exports.SentimentResponse = exports.ResponseCard = exports.GenericAttachment = exports.Button = exports.ContentType = exports.PredictedIntent = exports.IntentConfidence = exports.PostTextRequest = exports.UnsupportedMediaTypeException = exports.RequestTimeoutException = exports.PostContentResponse = exports.DialogState = exports.PostContentRequest = exports.NotAcceptableException = exports.LoopDetectedException = exports.DependencyFailedException = exports.BadGatewayException = exports.GetSessionResponse = exports.IntentSummary = exports.ConfirmationStatus = exports.DialogAction = exports.DialogActionType = exports.MessageFormatType = exports.FulfillmentState = exports.GetSessionRequest = exports.NotFoundException = exports.LimitExceededException = exports.InternalFailureException = exports.DeleteSessionResponse = exports.DeleteSessionRequest = exports.ConflictException = exports.BadRequestException = exports.ActiveContext = exports.ActiveContextTimeToLive = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
        ...(obj.parameters && { parameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActiveContext = exports.ActiveContext || (exports.ActiveContext = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
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
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var GetSessionRequest;
(function (GetSessionRequest) {
    /**
     * @internal
     */
    GetSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSessionRequest = exports.GetSessionRequest || (exports.GetSessionRequest = {}));
var FulfillmentState;
(function (FulfillmentState) {
    FulfillmentState["FAILED"] = "Failed";
    FulfillmentState["FULFILLED"] = "Fulfilled";
    FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState = exports.FulfillmentState || (exports.FulfillmentState = {}));
var MessageFormatType;
(function (MessageFormatType) {
    MessageFormatType["COMPOSITE"] = "Composite";
    MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageFormatType["PLAIN_TEXT"] = "PlainText";
    MessageFormatType["SSML"] = "SSML";
})(MessageFormatType = exports.MessageFormatType || (exports.MessageFormatType = {}));
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
        ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
    });
})(DialogAction = exports.DialogAction || (exports.DialogAction = {}));
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["CONFIRMED"] = "Confirmed";
    ConfirmationStatus["DENIED"] = "Denied";
    ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus = exports.ConfirmationStatus || (exports.ConfirmationStatus = {}));
var IntentSummary;
(function (IntentSummary) {
    /**
     * @internal
     */
    IntentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
    });
})(IntentSummary = exports.IntentSummary || (exports.IntentSummary = {}));
var GetSessionResponse;
(function (GetSessionResponse) {
    /**
     * @internal
     */
    GetSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.recentIntentSummaryView && {
            recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => IntentSummary.filterSensitiveLog(item)),
        }),
        ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
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
var LoopDetectedException;
(function (LoopDetectedException) {
    /**
     * @internal
     */
    LoopDetectedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoopDetectedException = exports.LoopDetectedException || (exports.LoopDetectedException = {}));
var NotAcceptableException;
(function (NotAcceptableException) {
    /**
     * @internal
     */
    NotAcceptableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAcceptableException = exports.NotAcceptableException || (exports.NotAcceptableException = {}));
var PostContentRequest;
(function (PostContentRequest) {
    /**
     * @internal
     */
    PostContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PostContentRequest = exports.PostContentRequest || (exports.PostContentRequest = {}));
var DialogState;
(function (DialogState) {
    DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogState["ELICIT_INTENT"] = "ElicitIntent";
    DialogState["ELICIT_SLOT"] = "ElicitSlot";
    DialogState["FAILED"] = "Failed";
    DialogState["FULFILLED"] = "Fulfilled";
    DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState = exports.DialogState || (exports.DialogState = {}));
var PostContentResponse;
(function (PostContentResponse) {
    /**
     * @internal
     */
    PostContentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.encodedMessage && { encodedMessage: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.encodedInputTranscript && { encodedInputTranscript: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PostContentResponse = exports.PostContentResponse || (exports.PostContentResponse = {}));
var RequestTimeoutException;
(function (RequestTimeoutException) {
    /**
     * @internal
     */
    RequestTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestTimeoutException = exports.RequestTimeoutException || (exports.RequestTimeoutException = {}));
var UnsupportedMediaTypeException;
(function (UnsupportedMediaTypeException) {
    /**
     * @internal
     */
    UnsupportedMediaTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedMediaTypeException = exports.UnsupportedMediaTypeException || (exports.UnsupportedMediaTypeException = {}));
var PostTextRequest;
(function (PostTextRequest) {
    /**
     * @internal
     */
    PostTextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.inputText && { inputText: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PostTextRequest = exports.PostTextRequest || (exports.PostTextRequest = {}));
var IntentConfidence;
(function (IntentConfidence) {
    /**
     * @internal
     */
    IntentConfidence.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntentConfidence = exports.IntentConfidence || (exports.IntentConfidence = {}));
var PredictedIntent;
(function (PredictedIntent) {
    /**
     * @internal
     */
    PredictedIntent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
    });
})(PredictedIntent = exports.PredictedIntent || (exports.PredictedIntent = {}));
var ContentType;
(function (ContentType) {
    ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var Button;
(function (Button) {
    /**
     * @internal
     */
    Button.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Button = exports.Button || (exports.Button = {}));
var GenericAttachment;
(function (GenericAttachment) {
    /**
     * @internal
     */
    GenericAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenericAttachment = exports.GenericAttachment || (exports.GenericAttachment = {}));
var ResponseCard;
(function (ResponseCard) {
    /**
     * @internal
     */
    ResponseCard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseCard = exports.ResponseCard || (exports.ResponseCard = {}));
var SentimentResponse;
(function (SentimentResponse) {
    /**
     * @internal
     */
    SentimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SentimentResponse = exports.SentimentResponse || (exports.SentimentResponse = {}));
var PostTextResponse;
(function (PostTextResponse) {
    /**
     * @internal
     */
    PostTextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.alternativeIntents && {
            alternativeIntents: obj.alternativeIntents.map((item) => PredictedIntent.filterSensitiveLog(item)),
        }),
        ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PostTextResponse = exports.PostTextResponse || (exports.PostTextResponse = {}));
var PutSessionRequest;
(function (PutSessionRequest) {
    /**
     * @internal
     */
    PutSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) }),
        ...(obj.recentIntentSummaryView && {
            recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => IntentSummary.filterSensitiveLog(item)),
        }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutSessionRequest = exports.PutSessionRequest || (exports.PutSessionRequest = {}));
var PutSessionResponse;
(function (PutSessionResponse) {
    /**
     * @internal
     */
    PutSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.encodedMessage && { encodedMessage: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutSessionResponse = exports.PutSessionResponse || (exports.PutSessionResponse = {}));
//# sourceMappingURL=models_0.js.map