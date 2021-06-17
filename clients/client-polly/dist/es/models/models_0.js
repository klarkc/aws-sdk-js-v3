import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var DeleteLexiconInput;
(function (DeleteLexiconInput) {
    /**
     * @internal
     */
    DeleteLexiconInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLexiconInput || (DeleteLexiconInput = {}));
export var DeleteLexiconOutput;
(function (DeleteLexiconOutput) {
    /**
     * @internal
     */
    DeleteLexiconOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLexiconOutput || (DeleteLexiconOutput = {}));
export var LexiconNotFoundException;
(function (LexiconNotFoundException) {
    /**
     * @internal
     */
    LexiconNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LexiconNotFoundException || (LexiconNotFoundException = {}));
export var ServiceFailureException;
(function (ServiceFailureException) {
    /**
     * @internal
     */
    ServiceFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceFailureException || (ServiceFailureException = {}));
export var Engine;
(function (Engine) {
    Engine["NEURAL"] = "neural";
    Engine["STANDARD"] = "standard";
})(Engine || (Engine = {}));
export var DescribeVoicesInput;
(function (DescribeVoicesInput) {
    /**
     * @internal
     */
    DescribeVoicesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVoicesInput || (DescribeVoicesInput = {}));
export var Voice;
(function (Voice) {
    /**
     * @internal
     */
    Voice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Voice || (Voice = {}));
export var DescribeVoicesOutput;
(function (DescribeVoicesOutput) {
    /**
     * @internal
     */
    DescribeVoicesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVoicesOutput || (DescribeVoicesOutput = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var EngineNotSupportedException;
(function (EngineNotSupportedException) {
    /**
     * @internal
     */
    EngineNotSupportedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EngineNotSupportedException || (EngineNotSupportedException = {}));
export var GetLexiconInput;
(function (GetLexiconInput) {
    /**
     * @internal
     */
    GetLexiconInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLexiconInput || (GetLexiconInput = {}));
export var Lexicon;
(function (Lexicon) {
    /**
     * @internal
     */
    Lexicon.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Content && { Content: SENSITIVE_STRING }))); };
})(Lexicon || (Lexicon = {}));
export var LexiconAttributes;
(function (LexiconAttributes) {
    /**
     * @internal
     */
    LexiconAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LexiconAttributes || (LexiconAttributes = {}));
export var GetLexiconOutput;
(function (GetLexiconOutput) {
    /**
     * @internal
     */
    GetLexiconOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Lexicon && { Lexicon: Lexicon.filterSensitiveLog(obj.Lexicon) }))); };
})(GetLexiconOutput || (GetLexiconOutput = {}));
export var GetSpeechSynthesisTaskInput;
(function (GetSpeechSynthesisTaskInput) {
    /**
     * @internal
     */
    GetSpeechSynthesisTaskInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSpeechSynthesisTaskInput || (GetSpeechSynthesisTaskInput = {}));
export var OutputFormat;
(function (OutputFormat) {
    OutputFormat["JSON"] = "json";
    OutputFormat["MP3"] = "mp3";
    OutputFormat["OGG_VORBIS"] = "ogg_vorbis";
    OutputFormat["PCM"] = "pcm";
})(OutputFormat || (OutputFormat = {}));
export var SpeechMarkType;
(function (SpeechMarkType) {
    SpeechMarkType["SENTENCE"] = "sentence";
    SpeechMarkType["SSML"] = "ssml";
    SpeechMarkType["VISEME"] = "viseme";
    SpeechMarkType["WORD"] = "word";
})(SpeechMarkType || (SpeechMarkType = {}));
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["FAILED"] = "failed";
    TaskStatus["IN_PROGRESS"] = "inProgress";
    TaskStatus["SCHEDULED"] = "scheduled";
})(TaskStatus || (TaskStatus = {}));
export var TextType;
(function (TextType) {
    TextType["SSML"] = "ssml";
    TextType["TEXT"] = "text";
})(TextType || (TextType = {}));
export var SynthesisTask;
(function (SynthesisTask) {
    /**
     * @internal
     */
    SynthesisTask.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SynthesisTask || (SynthesisTask = {}));
export var GetSpeechSynthesisTaskOutput;
(function (GetSpeechSynthesisTaskOutput) {
    /**
     * @internal
     */
    GetSpeechSynthesisTaskOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSpeechSynthesisTaskOutput || (GetSpeechSynthesisTaskOutput = {}));
export var InvalidTaskIdException;
(function (InvalidTaskIdException) {
    /**
     * @internal
     */
    InvalidTaskIdException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTaskIdException || (InvalidTaskIdException = {}));
export var SynthesisTaskNotFoundException;
(function (SynthesisTaskNotFoundException) {
    /**
     * @internal
     */
    SynthesisTaskNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SynthesisTaskNotFoundException || (SynthesisTaskNotFoundException = {}));
export var InvalidLexiconException;
(function (InvalidLexiconException) {
    /**
     * @internal
     */
    InvalidLexiconException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLexiconException || (InvalidLexiconException = {}));
export var InvalidS3BucketException;
(function (InvalidS3BucketException) {
    /**
     * @internal
     */
    InvalidS3BucketException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidS3BucketException || (InvalidS3BucketException = {}));
export var InvalidS3KeyException;
(function (InvalidS3KeyException) {
    /**
     * @internal
     */
    InvalidS3KeyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidS3KeyException || (InvalidS3KeyException = {}));
export var InvalidSampleRateException;
(function (InvalidSampleRateException) {
    /**
     * @internal
     */
    InvalidSampleRateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSampleRateException || (InvalidSampleRateException = {}));
export var InvalidSnsTopicArnException;
(function (InvalidSnsTopicArnException) {
    /**
     * @internal
     */
    InvalidSnsTopicArnException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSnsTopicArnException || (InvalidSnsTopicArnException = {}));
export var InvalidSsmlException;
(function (InvalidSsmlException) {
    /**
     * @internal
     */
    InvalidSsmlException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSsmlException || (InvalidSsmlException = {}));
export var LanguageNotSupportedException;
(function (LanguageNotSupportedException) {
    /**
     * @internal
     */
    LanguageNotSupportedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LanguageNotSupportedException || (LanguageNotSupportedException = {}));
export var LexiconDescription;
(function (LexiconDescription) {
    /**
     * @internal
     */
    LexiconDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LexiconDescription || (LexiconDescription = {}));
export var LexiconSizeExceededException;
(function (LexiconSizeExceededException) {
    /**
     * @internal
     */
    LexiconSizeExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LexiconSizeExceededException || (LexiconSizeExceededException = {}));
export var ListLexiconsInput;
(function (ListLexiconsInput) {
    /**
     * @internal
     */
    ListLexiconsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLexiconsInput || (ListLexiconsInput = {}));
export var ListLexiconsOutput;
(function (ListLexiconsOutput) {
    /**
     * @internal
     */
    ListLexiconsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLexiconsOutput || (ListLexiconsOutput = {}));
export var ListSpeechSynthesisTasksInput;
(function (ListSpeechSynthesisTasksInput) {
    /**
     * @internal
     */
    ListSpeechSynthesisTasksInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSpeechSynthesisTasksInput || (ListSpeechSynthesisTasksInput = {}));
export var ListSpeechSynthesisTasksOutput;
(function (ListSpeechSynthesisTasksOutput) {
    /**
     * @internal
     */
    ListSpeechSynthesisTasksOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSpeechSynthesisTasksOutput || (ListSpeechSynthesisTasksOutput = {}));
export var MarksNotSupportedForFormatException;
(function (MarksNotSupportedForFormatException) {
    /**
     * @internal
     */
    MarksNotSupportedForFormatException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MarksNotSupportedForFormatException || (MarksNotSupportedForFormatException = {}));
export var MaxLexemeLengthExceededException;
(function (MaxLexemeLengthExceededException) {
    /**
     * @internal
     */
    MaxLexemeLengthExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaxLexemeLengthExceededException || (MaxLexemeLengthExceededException = {}));
export var MaxLexiconsNumberExceededException;
(function (MaxLexiconsNumberExceededException) {
    /**
     * @internal
     */
    MaxLexiconsNumberExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaxLexiconsNumberExceededException || (MaxLexiconsNumberExceededException = {}));
export var PutLexiconInput;
(function (PutLexiconInput) {
    /**
     * @internal
     */
    PutLexiconInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Content && { Content: SENSITIVE_STRING }))); };
})(PutLexiconInput || (PutLexiconInput = {}));
export var PutLexiconOutput;
(function (PutLexiconOutput) {
    /**
     * @internal
     */
    PutLexiconOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLexiconOutput || (PutLexiconOutput = {}));
export var UnsupportedPlsAlphabetException;
(function (UnsupportedPlsAlphabetException) {
    /**
     * @internal
     */
    UnsupportedPlsAlphabetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedPlsAlphabetException || (UnsupportedPlsAlphabetException = {}));
export var UnsupportedPlsLanguageException;
(function (UnsupportedPlsLanguageException) {
    /**
     * @internal
     */
    UnsupportedPlsLanguageException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedPlsLanguageException || (UnsupportedPlsLanguageException = {}));
export var SsmlMarksNotSupportedForTextTypeException;
(function (SsmlMarksNotSupportedForTextTypeException) {
    /**
     * @internal
     */
    SsmlMarksNotSupportedForTextTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SsmlMarksNotSupportedForTextTypeException || (SsmlMarksNotSupportedForTextTypeException = {}));
export var StartSpeechSynthesisTaskInput;
(function (StartSpeechSynthesisTaskInput) {
    /**
     * @internal
     */
    StartSpeechSynthesisTaskInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSpeechSynthesisTaskInput || (StartSpeechSynthesisTaskInput = {}));
export var StartSpeechSynthesisTaskOutput;
(function (StartSpeechSynthesisTaskOutput) {
    /**
     * @internal
     */
    StartSpeechSynthesisTaskOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSpeechSynthesisTaskOutput || (StartSpeechSynthesisTaskOutput = {}));
export var TextLengthExceededException;
(function (TextLengthExceededException) {
    /**
     * @internal
     */
    TextLengthExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextLengthExceededException || (TextLengthExceededException = {}));
export var SynthesizeSpeechInput;
(function (SynthesizeSpeechInput) {
    /**
     * @internal
     */
    SynthesizeSpeechInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SynthesizeSpeechInput || (SynthesizeSpeechInput = {}));
export var SynthesizeSpeechOutput;
(function (SynthesizeSpeechOutput) {
    /**
     * @internal
     */
    SynthesizeSpeechOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SynthesizeSpeechOutput || (SynthesizeSpeechOutput = {}));
//# sourceMappingURL=models_0.js.map