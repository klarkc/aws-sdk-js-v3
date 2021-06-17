/// <reference types="node" />
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";
/**
 * <p></p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>The time that a context is active. You can specify the time to live
 *          in seconds or in conversation turns.</p>
 */
export interface ActiveContextTimeToLive {
    /**
     * <p>The number of seconds that the context is active. You can specify
     *          between 5 and 86400 seconds (24 hours).</p>
     */
    timeToLiveInSeconds: number | undefined;
    /**
     * <p>The number of turns that the context is active. You can specify up
     *          to 20 turns. Each request and response from the bot is a turn.</p>
     */
    turnsToLive: number | undefined;
}
export declare namespace ActiveContextTimeToLive {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActiveContextTimeToLive) => any;
}
/**
 * <p>Contains information about the contexts that a user is using in a
 *          session. You can configure Amazon Lex to set a context when an intent is
 *          fulfilled, or you can set a context using the , , or  operations.</p>
 *          <p>Use a context to indicate to Amazon Lex intents that should be used as
 *          follow-up intents. For example, if the active context is
 *             <code>order-fulfilled</code>, only intents that have
 *             <code>order-fulfilled</code> configured as a trigger are considered
 *          for follow up.</p>
 */
export interface ActiveContext {
    /**
     * <p>The name of the context.</p>
     */
    name: string | undefined;
    /**
     * <p>Indicates the number of turns or seconds that the context is active.
     *          Once the time to live expires, the context is no longer returned in a
     *          response.</p>
     */
    timeToLive: ActiveContextTimeToLive | undefined;
    /**
     * <p>A lis tof contexts active for the request. A context can be
     *          activated when a previous intent is fulfilled, or by including the
     *          context in the request.</p>
     *          <p>If you don't specify a list of contexts, Amazon Lex will use the
     *          current list of contexts for the session. If you specify an empty list,
     *          all contexts for the session are cleared. </p>
     */
    contextAttributes?: {
        [key: string]: string;
    };
}
export declare namespace ActiveContext {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActiveContext) => any;
}
/**
 * <p>Represents a chunk of audio sent from the client application to
 *          Amazon Lex. The audio is all or part of an utterance from the user.</p>
 *          <p>Amazon Lex accumulates audio chunks until it recognizes a natural pause
 *          in speech before processing the input.</p>
 */
export interface AudioInputEvent {
    /**
     * <p>An encoded stream of audio.</p>
     */
    audioChunk?: Uint8Array;
    /**
     * <p>The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit
     *          mono-channel little-endian format. The value of the field should
     *          be:</p>
     *          <p>
     *             <code>audio/lpcm; sample-rate=8000; sample-size-bits=16;
     *             channel-count=1; is-big-endian=false</code>
     *          </p>
     */
    contentType: string | undefined;
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace AudioInputEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AudioInputEvent) => any;
}
/**
 * <p>An event sent from Amazon Lex to your client application containing audio
 *          to play to the user. </p>
 */
export interface AudioResponseEvent {
    /**
     * <p>A chunk of the audio to play. </p>
     */
    audioChunk?: Uint8Array;
    /**
     * <p>The encoding of the audio chunk. This is the same as the encoding
     *          configure in the <code>contentType</code> field of the
     *             <code>ConfigurationEvent</code>.</p>
     */
    contentType?: string;
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace AudioResponseEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AudioResponseEvent) => any;
}
/**
 * <p></p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface DeleteSessionRequest {
    /**
     * <p>The identifier of the bot that contains the session data.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier in use for the bot that contains the session
     *          data.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the session to delete.</p>
     */
    sessionId: string | undefined;
}
export declare namespace DeleteSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSessionRequest) => any;
}
export interface DeleteSessionResponse {
    /**
     * <p>The identifier of the bot that contained the session data.</p>
     */
    botId?: string;
    /**
     * <p>The alias identifier in use for the bot that contained the session
     *          data.</p>
     */
    botAliasId?: string;
    /**
     * <p>The locale where the session was used.</p>
     */
    localeId?: string;
    /**
     * <p>The identifier of the deleted session.</p>
     */
    sessionId?: string;
}
export declare namespace DeleteSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSessionResponse) => any;
}
/**
 * <p></p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p></p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p></p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface GetSessionRequest {
    /**
     * <p>The identifier of the bot that contains the session data.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier in use for the bot that contains the session
     *          data.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the session to return.</p>
     */
    sessionId: string | undefined;
}
export declare namespace GetSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSessionRequest) => any;
}
export declare enum ConfirmationState {
    CONFIRMED = "Confirmed",
    DENIED = "Denied",
    NONE = "None"
}
/**
 * <p>The value of a slot.</p>
 */
export interface Value {
    /**
     * <p>The text of the utterance from the user that was entered for the
     *          slot.</p>
     */
    originalValue?: string;
    /**
     * <p>The value that Amazon Lex determines for the slot. The actual value
     *          depends on the setting of the value selection strategy for the bot. You
     *          can choose to use the value entered by the user, or you can have Amazon Lex
     *          choose the first value in the <code>resolvedValues</code> list.</p>
     */
    interpretedValue: string | undefined;
    /**
     * <p>A list of additional values that have been recognized for the
     *          slot.</p>
     */
    resolvedValues?: string[];
}
export declare namespace Value {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Value) => any;
}
/**
 * <p>A value that Amazon Lex uses to fulfill an intent. </p>
 */
export interface Slot {
    /**
     * <p>The current value of the slot.</p>
     */
    value?: Value;
}
export declare namespace Slot {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Slot) => any;
}
export declare enum IntentState {
    FAILED = "Failed",
    FULFILLED = "Fulfilled",
    IN_PROGRESS = "InProgress",
    READY_FOR_FULFILLMENT = "ReadyForFulfillment",
    WAITING = "Waiting"
}
/**
 * <p>The current intent that Amazon Lex is attempting to fulfill.</p>
 */
export interface Intent {
    /**
     * <p>The name of the intent.</p>
     */
    name: string | undefined;
    /**
     * <p>A map of all of the slots for the intent. The name of the slot maps
     *          to the value of the slot. If a slot has not been filled, the value is
     *          null.</p>
     */
    slots?: {
        [key: string]: Slot;
    };
    /**
     * <p>Contains fulfillment information for the intent. </p>
     */
    state?: IntentState | string;
    /**
     * <p>Contains information about whether fulfillment of the intent has
     *          been confirmed.</p>
     */
    confirmationState?: ConfirmationState | string;
}
export declare namespace Intent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Intent) => any;
}
/**
 * <p>Provides a score that indicates the confidence that Amazon Lex has that
 *          an intent is the one that satisfies the user's intent.</p>
 */
export interface ConfidenceScore {
    /**
     * <p>A score that indicates how confident Amazon Lex is that an intent
     *          satisfies the user's intent. Ranges between 0.00 and 1.00. Higher
     *          scores indicate higher confidence.</p>
     */
    score?: number;
}
export declare namespace ConfidenceScore {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfidenceScore) => any;
}
export declare enum SentimentType {
    MIXED = "MIXED",
    NEGATIVE = "NEGATIVE",
    NEUTRAL = "NEUTRAL",
    POSITIVE = "POSITIVE"
}
/**
 * <p>The individual sentiment responses for the utterance.</p>
 */
export interface SentimentScore {
    /**
     * <p>The level of confidence that Amazon Comprehend has in the accuracy
     *          of its detection of the <code>POSITIVE</code> sentiment.</p>
     */
    positive?: number;
    /**
     * <p>The level of confidence that Amazon Comprehend has in the accuracy
     *          of its detection of the <code>NEGATIVE</code> sentiment.</p>
     */
    negative?: number;
    /**
     * <p>The level of confidence that Amazon Comprehend has in the accuracy
     *          of its detection of the <code>NEUTRAL</code> sentiment.</p>
     */
    neutral?: number;
    /**
     * <p>The level of confidence that Amazon Comprehend has in the accuracy
     *          of its detection of the <code>MIXED</code> sentiment.</p>
     */
    mixed?: number;
}
export declare namespace SentimentScore {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SentimentScore) => any;
}
/**
 * <p>Provides information about the sentiment expressed in a user's
 *          response in a conversation. Sentiments are determined using Amazon
 *          Comprehend. Sentiments are only returned if they are enabled for the
 *          bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html">
 *             Determine Sentiment </a> in the <i>Amazon Comprehend
 *             developer guide</i>.</p>
 */
export interface SentimentResponse {
    /**
     * <p>The overall sentiment expressed in the user's response. This is the
     *          sentiment most likely expressed by the user based on the analysis by
     *          Amazon Comprehend.</p>
     */
    sentiment?: SentimentType | string;
    /**
     * <p>The individual sentiment responses for the utterance.</p>
     */
    sentimentScore?: SentimentScore;
}
export declare namespace SentimentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SentimentResponse) => any;
}
/**
 * <p>An intent that Amazon Lex determined might satisfy the user's utterance.
 *          The intents are ordered by the confidence score. </p>
 */
export interface Interpretation {
    /**
     * <p>Determines the threshold where Amazon Lex will insert the
     *             <code>AMAZON.FallbackIntent</code>,
     *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
     *          alternative intents in a response. <code>AMAZON.FallbackIntent</code>
     *          and <code>AMAZON.KendraSearchIntent</code> are only inserted if they
     *          are configured for the bot.</p>
     */
    nluConfidence?: ConfidenceScore;
    /**
     * <p>The sentiment expressed in an utterance. </p>
     *          <p>When the bot is configured to send utterances to Amazon Comprehend
     *          for sentiment analysis, this field contains the result of the
     *          analysis.</p>
     */
    sentimentResponse?: SentimentResponse;
    /**
     * <p>A list of intents that might satisfy the user's utterance. The
     *          intents are ordered by the confidence score.</p>
     */
    intent?: Intent;
}
export declare namespace Interpretation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Interpretation) => any;
}
export declare enum MessageContentType {
    CUSTOM_PAYLOAD = "CustomPayload",
    IMAGE_RESPONSE_CARD = "ImageResponseCard",
    PLAIN_TEXT = "PlainText",
    SSML = "SSML"
}
/**
 * <p>A button that appears on a response card show to the user.</p>
 */
export interface Button {
    /**
     * <p>The text that is displayed on the button.</p>
     */
    text: string | undefined;
    /**
     * <p>The value returned to Amazon Lex when a user chooses the button.</p>
     */
    value: string | undefined;
}
export declare namespace Button {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Button) => any;
}
/**
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 */
export interface ImageResponseCard {
    /**
     * <p>The title to display on the response card. The format of the title
     *          is determined by the platform displaying the response card.</p>
     */
    title: string | undefined;
    /**
     * <p>The subtitle to display on the response card. The format of the
     *          subtitle is determined by the platform displaying the response
     *          card.</p>
     */
    subtitle?: string;
    /**
     * <p>The URL of an image to display on the response card. The image URL
     *          must be publicly available so that the platform displaying the response
     *          card has access to the image.</p>
     */
    imageUrl?: string;
    /**
     * <p>A list of buttons that should be displayed on the response card. The
     *          arrangement of the buttons is determined by the platform that displays
     *          the button.</p>
     */
    buttons?: Button[];
}
export declare namespace ImageResponseCard {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageResponseCard) => any;
}
/**
 * <p>Container for text that is returned to the customer..</p>
 */
export interface Message {
    /**
     * <p>The text of the message.</p>
     */
    content?: string;
    /**
     * <p>Indicates the type of response.</p>
     */
    contentType?: MessageContentType | string;
    /**
     * <p>A card that is shown to the user by a messaging platform. You define
     *          the contents of the card, the card is displayed by the platform. </p>
     *          <p>When you use a response card, the response from the user is
     *          constrained to the text associated with a button on the card.</p>
     */
    imageResponseCard?: ImageResponseCard;
}
export declare namespace Message {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Message) => any;
}
export declare enum DialogActionType {
    CLOSE = "Close",
    CONFIRM_INTENT = "ConfirmIntent",
    DELEGATE = "Delegate",
    ELICIT_INTENT = "ElicitIntent",
    ELICIT_SLOT = "ElicitSlot"
}
/**
 * <p>The next action that Amazon Lex should take.</p>
 */
export interface DialogAction {
    /**
     * <p>The next action that the bot should take in its interaction with the
     *          user. The possible values are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Close</code> - Indicates that there will not be a
     *                response from the user. For example, the statement "Your order
     *                has been placed" does not require a response.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ConfirmIntent</code> - The next action is asking the
     *                user if the intent is complete and ready to be fulfilled. This is
     *                a yes/no question such as "Place the order?"</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Delegate</code> - The next action is determined by
     *                Amazon Lex.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ElicitSlot</code> - The next action is to elicit a slot
     *                value from the user.</p>
     *             </li>
     *          </ul>
     */
    type: DialogActionType | string | undefined;
    /**
     * <p>The name of the slot that should be elicited from the user.</p>
     */
    slotToElicit?: string;
}
export declare namespace DialogAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DialogAction) => any;
}
/**
 * <p>The state of the user's session with Amazon Lex.</p>
 */
export interface SessionState {
    /**
     * <p>The next step that Amazon Lex should take in the conversation with a
     *          user.</p>
     */
    dialogAction?: DialogAction;
    /**
     * <p>The active intent that Amazon Lex is processing.</p>
     */
    intent?: Intent;
    /**
     * <p>One or more contexts that indicate to Amazon Lex the context of a
     *          request. When a context is active, Amazon Lex considers intents with the
     *          matching context as a trigger as the next intent in a session.</p>
     */
    activeContexts?: ActiveContext[];
    /**
     * <p>Map of key/value pairs representing session-specific context
     *          information. It contains application information passed between Amazon Lex
     *          and a client application.</p>
     */
    sessionAttributes?: {
        [key: string]: string;
    };
    /**
     * <p></p>
     */
    originatingRequestId?: string;
}
export declare namespace SessionState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SessionState) => any;
}
export interface GetSessionResponse {
    /**
     * <p>The identifier of the returned session.</p>
     */
    sessionId?: string;
    /**
     * <p>A list of messages that were last sent to the user. The messages are
     *          ordered based on the order that your returned the messages from your
     *          Lambda function or the order that messages are defined in the bot.
     *       </p>
     */
    messages?: Message[];
    /**
     * <p>A list of intents that Amazon Lex determined might satisfy the user's
     *          utterance. </p>
     *          <p>Each interpretation includes the intent, a score that indicates how
     *          confident Amazon Lex is that the interpretation is the correct one, and an
     *          optional sentiment response that indicates the sentiment expressed in
     *          the utterance.</p>
     */
    interpretations?: Interpretation[];
    /**
     * <p>Represents the current state of the dialog between the user and the
     *          bot.</p>
     *          <p>You can use this to determine the progress of the conversation and
     *          what the next action might be.</p>
     */
    sessionState?: SessionState;
}
export declare namespace GetSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSessionResponse) => any;
}
/**
 * <p></p>
 */
export interface BadGatewayException extends __SmithyException, $MetadataBearer {
    name: "BadGatewayException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace BadGatewayException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadGatewayException) => any;
}
/**
 * <p></p>
 */
export interface DependencyFailedException extends __SmithyException, $MetadataBearer {
    name: "DependencyFailedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace DependencyFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DependencyFailedException) => any;
}
export interface PutSessionRequest {
    /**
     * <p>The identifier of the bot that receives the session data.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier of the bot that receives the session
     *          data.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the session that receives the session data.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>A list of messages to send to the user. Messages are sent in the
     *          order that they are defined in the list.</p>
     */
    messages?: Message[];
    /**
     * <p>Sets the state of the session with the user. You can use this to set
     *          the current intent, attributes, context, and dialog action. Use the
     *          dialog action to determine the next step that Amazon Lex should use in the
     *          conversation with the user.</p>
     */
    sessionState: SessionState | undefined;
    /**
     * <p>Request-specific information passed between Amazon Lex and the client
     *          application.</p>
     *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
     *          attributes. Don't create any request attributes with the prefix
     *             <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: {
        [key: string]: string;
    };
    /**
     * <p>The message that Amazon Lex returns in the response can be either text or
     *          speech depending on the value of this parameter. </p>
     *          <ul>
     *             <li>
     *                <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex
     *                returns text in the response.</p>
     *             </li>
     *          </ul>
     */
    responseContentType?: string;
}
export declare namespace PutSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutSessionRequest) => any;
}
export interface PutSessionResponse {
    /**
     * <p>The type of response. Same as the type specified in the
     *             <code>responseContentType</code> field in the request.</p>
     */
    contentType?: string;
    /**
     * <p>A list of messages that were last sent to the user. The messages are
     *          ordered based on how you return the messages from you Lambda function
     *          or the order that the messages are defined in the bot.</p>
     */
    messages?: string;
    /**
     * <p>Represents the current state of the dialog between the user and the
     *          bot.</p>
     *          <p>Use this to determine the progress of the conversation and what the
     *          next action may be.</p>
     */
    sessionState?: string;
    /**
     * <p>Request-specific information passed between the client application
     *          and Amazon Lex. These are the same as the <code>requestAttribute</code>
     *          parameter in the call to the <code>PutSession</code> operation.</p>
     */
    requestAttributes?: string;
    /**
     * <p>The identifier of the session that received the data.</p>
     */
    sessionId?: string;
    /**
     * <p>If the requested content type was audio, the audio version of the
     *          message to convey to the user.</p>
     */
    audioStream?: Readable | ReadableStream | Blob;
}
export declare namespace PutSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutSessionResponse) => any;
}
export interface RecognizeTextRequest {
    /**
     * <p>The identifier of the bot that processes the request.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier in use for the bot that processes the
     *          request.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the user session that is having the
     *          conversation.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The text that the user entered. Amazon Lex interprets this text.</p>
     */
    text: string | undefined;
    /**
     * <p>The current state of the dialog between the user and the bot.</p>
     */
    sessionState?: SessionState;
    /**
     * <p>Request-specific information passed between the client application
     *          and Amazon Lex </p>
     *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
     *          attributes. Don't create any request attributes with the prefix
     *             <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: {
        [key: string]: string;
    };
}
export declare namespace RecognizeTextRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecognizeTextRequest) => any;
}
export interface RecognizeTextResponse {
    /**
     * <p>A list of messages last sent to the user. The messages are ordered
     *          based on the order that you returned the messages from your Lambda
     *          function or the order that the messages are defined in the bot.</p>
     */
    messages?: Message[];
    /**
     * <p>Represents the current state of the dialog between the user and the
     *          bot. </p>
     *          <p>Use this to determine the progress of the conversation and what the
     *          next action may be.</p>
     */
    sessionState?: SessionState;
    /**
     * <p>A list of intents that Amazon Lex determined might satisfy the user's
     *          utterance. </p>
     *          <p>Each interpretation includes the intent, a score that indicates now
     *          confident Amazon Lex is that the interpretation is the correct one, and an
     *          optional sentiment response that indicates the sentiment expressed in
     *          the utterance.</p>
     */
    interpretations?: Interpretation[];
    /**
     * <p>The attributes sent in the request.</p>
     */
    requestAttributes?: {
        [key: string]: string;
    };
    /**
     * <p>The identifier of the session in use.</p>
     */
    sessionId?: string;
}
export declare namespace RecognizeTextResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecognizeTextResponse) => any;
}
export interface RecognizeUtteranceRequest {
    /**
     * <p>The identifier of the bot that should receive the request.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier in use for the bot that should receive the
     *          request.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the session in use.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>Sets the state of the session with the user. You can use this to set
     *          the current intent, attributes, context, and dialog action. Use the
     *          dialog action to determine the next step that Amazon Lex should use in the
     *          conversation with the user.</p>
     */
    sessionState?: string;
    /**
     * <p>Request-specific information passed between the client application
     *          and Amazon Lex </p>
     *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
     *          attributes. Don't create any request attributes for prefix
     *             <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: string;
    /**
     * <p>Indicates the format for audio input or that the content is text.
     *          The header must start with one of the following prefixes:</p>
     *          <ul>
     *             <li>
     *                <p>PCM format, audio data must be in little-endian byte
     *                order.</p>
     *                <ul>
     *                   <li>
     *                      <p>audio/l16; rate=16000; channels=1</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/x-l16; sample-rate=16000; channel-count=1</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/lpcm; sample-rate=8000; sample-size-bits=16;
     *                      channel-count=1; is-big-endian=false</p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>Opus format</p>
     *                <ul>
     *                   <li>
     *                      <p>audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4</p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>Text format</p>
     *                <ul>
     *                   <li>
     *                      <p>text/plain; charset=utf-8</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     */
    requestContentType: string | undefined;
    /**
     * <p>The message that Amazon Lex returns in the response can be either text or
     *          speech based on the <code>responseContentType</code> value.</p>
     *          <ul>
     *             <li>
     *                <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex
     *                returns text in the response.</p>
     *             </li>
     *             <li>
     *                <p>If the value begins with <code>audio/</code>, Amazon Lex returns
     *                speech in the response. Amazon Lex uses Amazon Polly to generate the speech
     *                using the configuration that you specified in the
     *                   <code>requestContentType</code> parameter. For example, if you
     *                specify <code>audio/mpeg</code> as the value, Amazon Lex returns
     *                speech in the MPEG format.</p>
     *             </li>
     *             <li>
     *                <p>If the value is <code>audio/pcm</code>, the speech returned is
     *                   <code>audio/pcm</code> at 16 KHz in 16-bit, little-endian
     *                format.</p>
     *             </li>
     *             <li>
     *                <p>The following are the accepted values:</p>
     *                <ul>
     *                   <li>
     *                      <p>audio/mpeg</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/ogg</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/pcm (16 KHz)</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/* (defaults to mpeg)</p>
     *                   </li>
     *                   <li>
     *                      <p>text/plain; charset=utf-8</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     */
    responseContentType?: string;
    /**
     * <p>User input in PCM or Opus audio format or text format as described
     *          in the <code>requestContentType</code> parameter.</p>
     */
    inputStream?: Readable | ReadableStream | Blob;
}
export declare namespace RecognizeUtteranceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecognizeUtteranceRequest) => any;
}
export interface RecognizeUtteranceResponse {
    /**
     * <p>Indicates whether the input mode to the operation was text or
     *          speech.
     *       </p>
     */
    inputMode?: string;
    /**
     * <p>Content type as specified in the <code>responseContentType</code> in
     *          the request.</p>
     */
    contentType?: string;
    /**
     * <p>A list of messages that were last sent to the user. The messages are
     *          ordered based on the order that you returned the messages from your
     *          Lambda function or the order that the messages are defined in the
     *          bot.</p>
     */
    messages?: string;
    /**
     * <p>A list of intents that Amazon Lex determined might satisfy the user's
     *          utterance.</p>
     *          <p>Each interpretation includes the intent, a score that indicates how
     *          confident Amazon Lex is that the interpretation is the correct one, and an
     *          optional sentiment response that indicates the sentiment expressed in
     *          the utterance.</p>
     */
    interpretations?: string;
    /**
     * <p>Represents the current state of the dialog between the user and the
     *          bot.</p>
     *          <p>Use this to determine the progress of the conversation and what the
     *          next action might be.</p>
     */
    sessionState?: string;
    /**
     * <p>The attributes sent in the request.</p>
     */
    requestAttributes?: string;
    /**
     * <p>The identifier of the session in use.</p>
     */
    sessionId?: string;
    /**
     * <p>The text used to process the request.</p>
     *          <p>If the input was an audio stream, the <code>inputTranscript</code>
     *          field contains the text extracted from the audio stream. This is the
     *          text that is actually processed to recognize intents and slot values.
     *          You can use this information to determine if Amazon Lex is correctly
     *          processing the audio that you send.</p>
     */
    inputTranscript?: string;
    /**
     * <p>The prompt or statement to send to the user. This is based on the
     *          bot configuration and context. For example, if Amazon Lex did not understand
     *          the user intent, it sends the <code>clarificationPrompt</code>
     *          configured for the bot. If the intent requires confirmation before
     *          taking the fulfillment action, it sends the
     *             <code>confirmationPrompt</code>. Another example: Suppose that the
     *          Lambda function successfully fulfilled the intent, and sent a message
     *          to convey to the user. Then Amazon Lex sends that message in the
     *          response.</p>
     */
    audioStream?: Readable | ReadableStream | Blob;
}
export declare namespace RecognizeUtteranceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecognizeUtteranceResponse) => any;
}
export declare enum ConversationMode {
    AUDIO = "AUDIO",
    TEXT = "TEXT"
}
/**
 * <p>The initial event sent from the application to Amazon Lex to configure
 *          the conversation, including session and request attributes and the
 *          response content type.</p>
 */
export interface ConfigurationEvent {
    /**
     * <p>Request-specific information passed between the client application
     *          and Amazon Lex.</p>
     *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
     *          attributes. Don't create any request attributes for prefix
     *             <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: {
        [key: string]: string;
    };
    /**
     * <p>The message that Amazon Lex returns in the response can be either text or
     *          speech based on the <code>responseContentType</code> value.</p>
     *          <ul>
     *             <li>
     *                <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex
     *                returns text in the response.</p>
     *             </li>
     *             <li>
     *                <p>If the value begins with <code>audio/</code>, Amazon Lex returns
     *                speech in the response. Amazon Lex uses Amazon Polly to generate the speech
     *                using the configuration that you specified in the
     *                   <code>requestContentType</code> parameter. For example, if you
     *                specify <code>audio/mpeg</code> as the value, Amazon Lex returns
     *                speech in the MPEG format.</p>
     *             </li>
     *             <li>
     *                <p>If the value is <code>audio/pcm</code>, the speech returned is
     *                audio/pcm in 16-bit, little-endian format.</p>
     *             </li>
     *             <li>
     *                <p>The following are the accepted values:</p>
     *                <ul>
     *                   <li>
     *                      <p>audio/mpeg</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/ogg</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/pcm</p>
     *                   </li>
     *                   <li>
     *                      <p>audio/* (defaults to mpeg)</p>
     *                   </li>
     *                   <li>
     *                      <p>text/plain; charset=utf-8</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     */
    responseContentType: string | undefined;
    /**
     * <p>The state of the user's session with Amazon Lex.</p>
     */
    sessionState?: SessionState;
    /**
     * <p>A list of messages to send to the user.</p>
     */
    welcomeMessages?: Message[];
    /**
     * <p>Determines whether Amazon Lex should send audio responses to the
     *       client application. When this parameter if <code>false</code>,
     *       the client application needs to create responses for the user.
     *
     *       </p>
     */
    disablePlayback?: boolean;
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace ConfigurationEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigurationEvent) => any;
}
/**
 * <p>A notification from the client that it is disconnecting from Amazon Lex.
 *          Sending a <code>DisconnectionEvent</code> event is optional, but can
 *          help identify a conversation in logs.</p>
 */
export interface DisconnectionEvent {
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace DisconnectionEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisconnectionEvent) => any;
}
/**
 * <p>A DTMF character sent from the client application. DTMF characters
 *          are typically sent from a phone keypad to represent numbers. For
 *          example, you can have Amazon Lex process a credit card number input from a
 *          phone.</p>
 */
export interface DTMFInputEvent {
    /**
     * <p>The DTMF character that the user pressed. The allowed characters are
     *          A - D, 0 - 9, # and *.</p>
     */
    inputCharacter: string | undefined;
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace DTMFInputEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DTMFInputEvent) => any;
}
/**
 * <p>Event sent from the client application to Amazon Lex to indicate that
 *          playback of audio is complete and that Amazon Lex should start processing
 *          the user's input.</p>
 */
export interface PlaybackCompletionEvent {
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace PlaybackCompletionEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlaybackCompletionEvent) => any;
}
/**
 * <p>The event sent from your client application to Amazon Lex with text input
 *          from the user.</p>
 */
export interface TextInputEvent {
    /**
     * <p>The text from the user. Amazon Lex processes this as a complete
     *          statement.</p>
     */
    text: string | undefined;
    /**
     * <p>A unique identifier that your application assigns to the event. You
     *          can use this to identify events in logs.</p>
     */
    eventId?: string;
    /**
     * <p>A timestamp set by the client of the date and time that the event
     *          was sent to Amazon Lex.</p>
     */
    clientTimestampMillis?: number;
}
export declare namespace TextInputEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TextInputEvent) => any;
}
/**
 * <p>Represents a stream of events between your application and
 *          Amazon Lex.</p>
 */
export declare type StartConversationRequestEventStream = StartConversationRequestEventStream.AudioInputEventMember | StartConversationRequestEventStream.ConfigurationEventMember | StartConversationRequestEventStream.DTMFInputEventMember | StartConversationRequestEventStream.DisconnectionEventMember | StartConversationRequestEventStream.PlaybackCompletionEventMember | StartConversationRequestEventStream.TextInputEventMember | StartConversationRequestEventStream.$UnknownMember;
export declare namespace StartConversationRequestEventStream {
    /**
     * <p>Configuration information sent from your client application to
     *          Amazon Lex</p>
     */
    interface ConfigurationEventMember {
        ConfigurationEvent: ConfigurationEvent;
        AudioInputEvent?: never;
        DTMFInputEvent?: never;
        TextInputEvent?: never;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent?: never;
        $unknown?: never;
    }
    /**
     * <p>Speech audio sent from your client application to Amazon Lex. Audio
     *          starts accumulating when Amazon Lex identifies a voice and continues until a
     *          natural pause in the speech is found before processing.</p>
     */
    interface AudioInputEventMember {
        ConfigurationEvent?: never;
        AudioInputEvent: AudioInputEvent;
        DTMFInputEvent?: never;
        TextInputEvent?: never;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent?: never;
        $unknown?: never;
    }
    /**
     * <p>DTMF information sent to Amazon Lex by your application. Amazon Lex
     *          accumulates the DMTF information from when the user sends the first
     *          character and ends</p>
     *          <ul>
     *             <li>
     *                <p>when there's a pause longer that the value configured for the
     *                end timeout.</p>
     *             </li>
     *             <li>
     *                <p>when there's a digit that is the configured end
     *                character.</p>
     *             </li>
     *             <li>
     *                <p>when Amazon Lex accumulates characters equal to the maximum DTMF
     *                character configuration.</p>
     *             </li>
     *          </ul>
     */
    interface DTMFInputEventMember {
        ConfigurationEvent?: never;
        AudioInputEvent?: never;
        DTMFInputEvent: DTMFInputEvent;
        TextInputEvent?: never;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent?: never;
        $unknown?: never;
    }
    /**
     * <p>Text sent from your client application to Amazon Lex. Each
     *             <code>TextInputEvent</code> is processed individually.</p>
     */
    interface TextInputEventMember {
        ConfigurationEvent?: never;
        AudioInputEvent?: never;
        DTMFInputEvent?: never;
        TextInputEvent: TextInputEvent;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent?: never;
        $unknown?: never;
    }
    /**
     * <p>Event sent from the client application to Amazon Lex to indicate that it
     *          has finished playing audio and that Amazon Lex should start listening for
     *          user input.</p>
     */
    interface PlaybackCompletionEventMember {
        ConfigurationEvent?: never;
        AudioInputEvent?: never;
        DTMFInputEvent?: never;
        TextInputEvent?: never;
        PlaybackCompletionEvent: PlaybackCompletionEvent;
        DisconnectionEvent?: never;
        $unknown?: never;
    }
    /**
     * <p>Event sent from the client application to indicate to Amazon Lex that the
     *          conversation is over.</p>
     */
    interface DisconnectionEventMember {
        ConfigurationEvent?: never;
        AudioInputEvent?: never;
        DTMFInputEvent?: never;
        TextInputEvent?: never;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent: DisconnectionEvent;
        $unknown?: never;
    }
    interface $UnknownMember {
        ConfigurationEvent?: never;
        AudioInputEvent?: never;
        DTMFInputEvent?: never;
        TextInputEvent?: never;
        PlaybackCompletionEvent?: never;
        DisconnectionEvent?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        ConfigurationEvent: (value: ConfigurationEvent) => T;
        AudioInputEvent: (value: AudioInputEvent) => T;
        DTMFInputEvent: (value: DTMFInputEvent) => T;
        TextInputEvent: (value: TextInputEvent) => T;
        PlaybackCompletionEvent: (value: PlaybackCompletionEvent) => T;
        DisconnectionEvent: (value: DisconnectionEvent) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: StartConversationRequestEventStream, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartConversationRequestEventStream) => any;
}
export interface StartConversationRequest {
    /**
     * <p>The identifier of the bot to process the request.</p>
     */
    botId: string | undefined;
    /**
     * <p>The alias identifier in use for the bot that processes the
     *          request.</p>
     */
    botAliasId: string | undefined;
    /**
     * <p>The locale where the session is in use.</p>
     */
    localeId: string | undefined;
    /**
     * <p>The identifier of the user session that is having the
     *          conversation.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The conversation type that you are using the Amazon Lex. If the
     *          conversation mode is <code>AUDIO</code> you can send both audio and
     *          DTMF information. If the mode is <code>TEXT</code> you can only send
     *          text.</p>
     */
    conversationMode?: ConversationMode | string;
    /**
     * <p>Represents the stream of events to Amazon Lex from your application. The
     *          events are encoded as HTTP/2 data frames.</p>
     */
    requestEventStream: AsyncIterable<StartConversationRequestEventStream> | undefined;
}
export declare namespace StartConversationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartConversationRequest) => any;
}
/**
 * <p>Event that Amazon Lex sends to indicate that the stream is still open
 *          between the client application and Amazon Lex </p>
 */
export interface HeartbeatEvent {
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace HeartbeatEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HeartbeatEvent) => any;
}
export declare enum InputMode {
    DTMF = "DTMF",
    SPEECH = "Speech",
    TEXT = "Text"
}
/**
 * <p>Contains the current state of the conversation between the client
 *          application and Amazon Lex.</p>
 */
export interface IntentResultEvent {
    /**
     * <p>Indicates whether the input to the operation was text or speech.</p>
     */
    inputMode?: InputMode | string;
    /**
     * <p>A list of intents that Amazon Lex determined might satisfy the user's
     *          utterance.</p>
     *
     *          <p>Each interpretation includes the intent, a score that indicates how
     *          confident Amazon Lex is that the interpretation is the correct one, and an
     *          optional sentiment response that indicates the sentiment expressed in
     *          the utterance.</p>
     */
    interpretations?: Interpretation[];
    /**
     * <p>The state of the user's session with Amazon Lex.</p>
     */
    sessionState?: SessionState;
    /**
     * <p>The attributes sent in the request.</p>
     */
    requestAttributes?: {
        [key: string]: string;
    };
    /**
     * <p>The identifier of the session in use.</p>
     */
    sessionId?: string;
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace IntentResultEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IntentResultEvent) => any;
}
export declare enum PlaybackInterruptionReason {
    DTMF_START_DETECTED = "DTMF_START_DETECTED",
    TEXT_DETECTED = "TEXT_DETECTED",
    VOICE_START_DETECTED = "VOICE_START_DETECTED"
}
/**
 * <p>Event sent from Amazon Lex to indicate to the client application should
 *          stop playback of audio. For example, if the client is playing a prompt
 *          that asks for the user's telephone number, the user might start to say
 *          the phone number before the prompt is complete. Amazon Lex sends this event
 *          to the client application to indicate that the user is responding and
 *          that Amazon Lex is processing their input.</p>
 */
export interface PlaybackInterruptionEvent {
    /**
     * <p>Indicates the type of user input that Amazon Lex detected.</p>
     */
    eventReason?: PlaybackInterruptionReason | string;
    /**
     * <p>The identifier of the event that contained the audio, DTMF, or text
     *          that caused the interruption.</p>
     */
    causedByEventId?: string;
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace PlaybackInterruptionEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlaybackInterruptionEvent) => any;
}
/**
 * <p>The event sent from Amazon Lex to your application with text to present
 *          to the user.</p>
 */
export interface TextResponseEvent {
    /**
     * <p>A list of messages to send to the user. Messages are ordered based
     *          on the order that you returned the messages from your Lambda function
     *          or the order that the messages are defined in the bot.</p>
     */
    messages?: Message[];
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace TextResponseEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TextResponseEvent) => any;
}
/**
 * <p>Event sent from Amazon Lex to your client application that contains a
 *          transcript of voice audio. </p>
 */
export interface TranscriptEvent {
    /**
     * <p>The transcript of the voice audio from the user.</p>
     */
    transcript?: string;
    /**
     * <p>A unique identifier of the event sent by Amazon Lex. The identifier is in
     *          the form <code>RESPONSE-N</code>, where N is a number starting with one
     *          and incremented for each event sent by Amazon Lex in the current
     *          session.</p>
     */
    eventId?: string;
}
export declare namespace TranscriptEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TranscriptEvent) => any;
}
/**
 * <p>Represents a stream of events between Amazon Lex and your
 *          application.</p>
 */
export declare type StartConversationResponseEventStream = StartConversationResponseEventStream.AccessDeniedExceptionMember | StartConversationResponseEventStream.AudioResponseEventMember | StartConversationResponseEventStream.BadGatewayExceptionMember | StartConversationResponseEventStream.ConflictExceptionMember | StartConversationResponseEventStream.DependencyFailedExceptionMember | StartConversationResponseEventStream.HeartbeatEventMember | StartConversationResponseEventStream.IntentResultEventMember | StartConversationResponseEventStream.InternalServerExceptionMember | StartConversationResponseEventStream.PlaybackInterruptionEventMember | StartConversationResponseEventStream.ResourceNotFoundExceptionMember | StartConversationResponseEventStream.TextResponseEventMember | StartConversationResponseEventStream.ThrottlingExceptionMember | StartConversationResponseEventStream.TranscriptEventMember | StartConversationResponseEventStream.ValidationExceptionMember | StartConversationResponseEventStream.$UnknownMember;
export declare namespace StartConversationResponseEventStream {
    /**
     * <p>Event sent from Amazon Lex to indicate to the client application should
     *          stop playback of audio. For example, if the client is playing a prompt
     *          that asks for the user's telephone number, the user might start to say
     *          the phone number before the prompt is complete. Amazon Lex sends this event
     *          to the client application to indicate that the user is responding and
     *          that Amazon Lex is processing their input.</p>
     */
    interface PlaybackInterruptionEventMember {
        PlaybackInterruptionEvent: PlaybackInterruptionEvent;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Event sent from Amazon Lex to your client application that contains a
     *          transcript of voice audio. </p>
     */
    interface TranscriptEventMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent: TranscriptEvent;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Event sent from Amazon Lex to the client application containing the
     *          current state of the conversation between the user and Amazon Lex.</p>
     */
    interface IntentResultEventMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent: IntentResultEvent;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>The event sent from Amazon Lex to your application with text to present
     *          to the user.</p>
     */
    interface TextResponseEventMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent: TextResponseEvent;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>An event sent from Amazon Lex to your client application containing audio
     *          to play to the user. </p>
     */
    interface AudioResponseEventMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent: AudioResponseEvent;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Event that Amazon Lex sends to indicate that the stream is still open
     *          between the client application and Amazon Lex </p>
     */
    interface HeartbeatEventMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent: HeartbeatEvent;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Exception thrown when the credentials passed with the request are
     *          invalid or expired. Also thrown when the credentials in the request do
     *          not have permission to access the <code>StartConversation</code>
     *          operation.</p>
     */
    interface AccessDeniedExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException: AccessDeniedException;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Exception thrown if one of the input parameters points to a resource
     *          that does not exist. For example, if the bot ID specified does not
     *          exist.</p>
     */
    interface ResourceNotFoundExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException: ResourceNotFoundException;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Exception thrown when one or more parameters could not be validated.
     *          The <code>message</code> contains the name of the field that isn't
     *          valid.</p>
     */
    interface ValidationExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException: ValidationException;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Exception thrown when your application exceeds the maximum number of
     *          concurrent requests. </p>
     */
    interface ThrottlingExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException: ThrottlingException;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>An error occurred with Amazon Lex.</p>
     */
    interface InternalServerExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException: InternalServerException;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p>Exception thrown when two clients are using the same AWS account,
     *          Amazon Lex bot, and session ID.</p>
     */
    interface ConflictExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException: ConflictException;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p></p>
     */
    interface DependencyFailedExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException: DependencyFailedException;
        BadGatewayException?: never;
        $unknown?: never;
    }
    /**
     * <p></p>
     */
    interface BadGatewayExceptionMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException: BadGatewayException;
        $unknown?: never;
    }
    interface $UnknownMember {
        PlaybackInterruptionEvent?: never;
        TranscriptEvent?: never;
        IntentResultEvent?: never;
        TextResponseEvent?: never;
        AudioResponseEvent?: never;
        HeartbeatEvent?: never;
        AccessDeniedException?: never;
        ResourceNotFoundException?: never;
        ValidationException?: never;
        ThrottlingException?: never;
        InternalServerException?: never;
        ConflictException?: never;
        DependencyFailedException?: never;
        BadGatewayException?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        PlaybackInterruptionEvent: (value: PlaybackInterruptionEvent) => T;
        TranscriptEvent: (value: TranscriptEvent) => T;
        IntentResultEvent: (value: IntentResultEvent) => T;
        TextResponseEvent: (value: TextResponseEvent) => T;
        AudioResponseEvent: (value: AudioResponseEvent) => T;
        HeartbeatEvent: (value: HeartbeatEvent) => T;
        AccessDeniedException: (value: AccessDeniedException) => T;
        ResourceNotFoundException: (value: ResourceNotFoundException) => T;
        ValidationException: (value: ValidationException) => T;
        ThrottlingException: (value: ThrottlingException) => T;
        InternalServerException: (value: InternalServerException) => T;
        ConflictException: (value: ConflictException) => T;
        DependencyFailedException: (value: DependencyFailedException) => T;
        BadGatewayException: (value: BadGatewayException) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: StartConversationResponseEventStream, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartConversationResponseEventStream) => any;
}
export interface StartConversationResponse {
    /**
     * <p>Represents the stream of events from Amazon Lex to your application. The
     *          events are encoded as HTTP/2 data frames.</p>
     */
    responseEventStream?: AsyncIterable<StartConversationResponseEventStream>;
}
export declare namespace StartConversationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartConversationResponse) => any;
}
