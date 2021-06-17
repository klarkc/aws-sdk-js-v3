"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthesizeSpeechOutput = exports.SynthesizeSpeechInput = exports.TextLengthExceededException = exports.StartSpeechSynthesisTaskOutput = exports.StartSpeechSynthesisTaskInput = exports.SsmlMarksNotSupportedForTextTypeException = exports.UnsupportedPlsLanguageException = exports.UnsupportedPlsAlphabetException = exports.PutLexiconOutput = exports.PutLexiconInput = exports.MaxLexiconsNumberExceededException = exports.MaxLexemeLengthExceededException = exports.MarksNotSupportedForFormatException = exports.ListSpeechSynthesisTasksOutput = exports.ListSpeechSynthesisTasksInput = exports.ListLexiconsOutput = exports.ListLexiconsInput = exports.LexiconSizeExceededException = exports.LexiconDescription = exports.LanguageNotSupportedException = exports.InvalidSsmlException = exports.InvalidSnsTopicArnException = exports.InvalidSampleRateException = exports.InvalidS3KeyException = exports.InvalidS3BucketException = exports.InvalidLexiconException = exports.SynthesisTaskNotFoundException = exports.InvalidTaskIdException = exports.GetSpeechSynthesisTaskOutput = exports.SynthesisTask = exports.TextType = exports.TaskStatus = exports.SpeechMarkType = exports.OutputFormat = exports.GetSpeechSynthesisTaskInput = exports.GetLexiconOutput = exports.LexiconAttributes = exports.Lexicon = exports.GetLexiconInput = exports.EngineNotSupportedException = exports.InvalidNextTokenException = exports.DescribeVoicesOutput = exports.Voice = exports.DescribeVoicesInput = exports.Engine = exports.ServiceFailureException = exports.LexiconNotFoundException = exports.DeleteLexiconOutput = exports.DeleteLexiconInput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var DeleteLexiconInput;
(function (DeleteLexiconInput) {
    /**
     * @internal
     */
    DeleteLexiconInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLexiconInput = exports.DeleteLexiconInput || (exports.DeleteLexiconInput = {}));
var DeleteLexiconOutput;
(function (DeleteLexiconOutput) {
    /**
     * @internal
     */
    DeleteLexiconOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLexiconOutput = exports.DeleteLexiconOutput || (exports.DeleteLexiconOutput = {}));
var LexiconNotFoundException;
(function (LexiconNotFoundException) {
    /**
     * @internal
     */
    LexiconNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LexiconNotFoundException = exports.LexiconNotFoundException || (exports.LexiconNotFoundException = {}));
var ServiceFailureException;
(function (ServiceFailureException) {
    /**
     * @internal
     */
    ServiceFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceFailureException = exports.ServiceFailureException || (exports.ServiceFailureException = {}));
var Engine;
(function (Engine) {
    Engine["NEURAL"] = "neural";
    Engine["STANDARD"] = "standard";
})(Engine = exports.Engine || (exports.Engine = {}));
var DescribeVoicesInput;
(function (DescribeVoicesInput) {
    /**
     * @internal
     */
    DescribeVoicesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVoicesInput = exports.DescribeVoicesInput || (exports.DescribeVoicesInput = {}));
var Voice;
(function (Voice) {
    /**
     * @internal
     */
    Voice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Voice = exports.Voice || (exports.Voice = {}));
var DescribeVoicesOutput;
(function (DescribeVoicesOutput) {
    /**
     * @internal
     */
    DescribeVoicesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVoicesOutput = exports.DescribeVoicesOutput || (exports.DescribeVoicesOutput = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var EngineNotSupportedException;
(function (EngineNotSupportedException) {
    /**
     * @internal
     */
    EngineNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EngineNotSupportedException = exports.EngineNotSupportedException || (exports.EngineNotSupportedException = {}));
var GetLexiconInput;
(function (GetLexiconInput) {
    /**
     * @internal
     */
    GetLexiconInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLexiconInput = exports.GetLexiconInput || (exports.GetLexiconInput = {}));
var Lexicon;
(function (Lexicon) {
    /**
     * @internal
     */
    Lexicon.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    });
})(Lexicon = exports.Lexicon || (exports.Lexicon = {}));
var LexiconAttributes;
(function (LexiconAttributes) {
    /**
     * @internal
     */
    LexiconAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LexiconAttributes = exports.LexiconAttributes || (exports.LexiconAttributes = {}));
var GetLexiconOutput;
(function (GetLexiconOutput) {
    /**
     * @internal
     */
    GetLexiconOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Lexicon && { Lexicon: Lexicon.filterSensitiveLog(obj.Lexicon) }),
    });
})(GetLexiconOutput = exports.GetLexiconOutput || (exports.GetLexiconOutput = {}));
var GetSpeechSynthesisTaskInput;
(function (GetSpeechSynthesisTaskInput) {
    /**
     * @internal
     */
    GetSpeechSynthesisTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSpeechSynthesisTaskInput = exports.GetSpeechSynthesisTaskInput || (exports.GetSpeechSynthesisTaskInput = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["JSON"] = "json";
    OutputFormat["MP3"] = "mp3";
    OutputFormat["OGG_VORBIS"] = "ogg_vorbis";
    OutputFormat["PCM"] = "pcm";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
var SpeechMarkType;
(function (SpeechMarkType) {
    SpeechMarkType["SENTENCE"] = "sentence";
    SpeechMarkType["SSML"] = "ssml";
    SpeechMarkType["VISEME"] = "viseme";
    SpeechMarkType["WORD"] = "word";
})(SpeechMarkType = exports.SpeechMarkType || (exports.SpeechMarkType = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["FAILED"] = "failed";
    TaskStatus["IN_PROGRESS"] = "inProgress";
    TaskStatus["SCHEDULED"] = "scheduled";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var TextType;
(function (TextType) {
    TextType["SSML"] = "ssml";
    TextType["TEXT"] = "text";
})(TextType = exports.TextType || (exports.TextType = {}));
var SynthesisTask;
(function (SynthesisTask) {
    /**
     * @internal
     */
    SynthesisTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SynthesisTask = exports.SynthesisTask || (exports.SynthesisTask = {}));
var GetSpeechSynthesisTaskOutput;
(function (GetSpeechSynthesisTaskOutput) {
    /**
     * @internal
     */
    GetSpeechSynthesisTaskOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSpeechSynthesisTaskOutput = exports.GetSpeechSynthesisTaskOutput || (exports.GetSpeechSynthesisTaskOutput = {}));
var InvalidTaskIdException;
(function (InvalidTaskIdException) {
    /**
     * @internal
     */
    InvalidTaskIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTaskIdException = exports.InvalidTaskIdException || (exports.InvalidTaskIdException = {}));
var SynthesisTaskNotFoundException;
(function (SynthesisTaskNotFoundException) {
    /**
     * @internal
     */
    SynthesisTaskNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SynthesisTaskNotFoundException = exports.SynthesisTaskNotFoundException || (exports.SynthesisTaskNotFoundException = {}));
var InvalidLexiconException;
(function (InvalidLexiconException) {
    /**
     * @internal
     */
    InvalidLexiconException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLexiconException = exports.InvalidLexiconException || (exports.InvalidLexiconException = {}));
var InvalidS3BucketException;
(function (InvalidS3BucketException) {
    /**
     * @internal
     */
    InvalidS3BucketException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3BucketException = exports.InvalidS3BucketException || (exports.InvalidS3BucketException = {}));
var InvalidS3KeyException;
(function (InvalidS3KeyException) {
    /**
     * @internal
     */
    InvalidS3KeyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3KeyException = exports.InvalidS3KeyException || (exports.InvalidS3KeyException = {}));
var InvalidSampleRateException;
(function (InvalidSampleRateException) {
    /**
     * @internal
     */
    InvalidSampleRateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSampleRateException = exports.InvalidSampleRateException || (exports.InvalidSampleRateException = {}));
var InvalidSnsTopicArnException;
(function (InvalidSnsTopicArnException) {
    /**
     * @internal
     */
    InvalidSnsTopicArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSnsTopicArnException = exports.InvalidSnsTopicArnException || (exports.InvalidSnsTopicArnException = {}));
var InvalidSsmlException;
(function (InvalidSsmlException) {
    /**
     * @internal
     */
    InvalidSsmlException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSsmlException = exports.InvalidSsmlException || (exports.InvalidSsmlException = {}));
var LanguageNotSupportedException;
(function (LanguageNotSupportedException) {
    /**
     * @internal
     */
    LanguageNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LanguageNotSupportedException = exports.LanguageNotSupportedException || (exports.LanguageNotSupportedException = {}));
var LexiconDescription;
(function (LexiconDescription) {
    /**
     * @internal
     */
    LexiconDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LexiconDescription = exports.LexiconDescription || (exports.LexiconDescription = {}));
var LexiconSizeExceededException;
(function (LexiconSizeExceededException) {
    /**
     * @internal
     */
    LexiconSizeExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LexiconSizeExceededException = exports.LexiconSizeExceededException || (exports.LexiconSizeExceededException = {}));
var ListLexiconsInput;
(function (ListLexiconsInput) {
    /**
     * @internal
     */
    ListLexiconsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLexiconsInput = exports.ListLexiconsInput || (exports.ListLexiconsInput = {}));
var ListLexiconsOutput;
(function (ListLexiconsOutput) {
    /**
     * @internal
     */
    ListLexiconsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLexiconsOutput = exports.ListLexiconsOutput || (exports.ListLexiconsOutput = {}));
var ListSpeechSynthesisTasksInput;
(function (ListSpeechSynthesisTasksInput) {
    /**
     * @internal
     */
    ListSpeechSynthesisTasksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSpeechSynthesisTasksInput = exports.ListSpeechSynthesisTasksInput || (exports.ListSpeechSynthesisTasksInput = {}));
var ListSpeechSynthesisTasksOutput;
(function (ListSpeechSynthesisTasksOutput) {
    /**
     * @internal
     */
    ListSpeechSynthesisTasksOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSpeechSynthesisTasksOutput = exports.ListSpeechSynthesisTasksOutput || (exports.ListSpeechSynthesisTasksOutput = {}));
var MarksNotSupportedForFormatException;
(function (MarksNotSupportedForFormatException) {
    /**
     * @internal
     */
    MarksNotSupportedForFormatException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MarksNotSupportedForFormatException = exports.MarksNotSupportedForFormatException || (exports.MarksNotSupportedForFormatException = {}));
var MaxLexemeLengthExceededException;
(function (MaxLexemeLengthExceededException) {
    /**
     * @internal
     */
    MaxLexemeLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxLexemeLengthExceededException = exports.MaxLexemeLengthExceededException || (exports.MaxLexemeLengthExceededException = {}));
var MaxLexiconsNumberExceededException;
(function (MaxLexiconsNumberExceededException) {
    /**
     * @internal
     */
    MaxLexiconsNumberExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxLexiconsNumberExceededException = exports.MaxLexiconsNumberExceededException || (exports.MaxLexiconsNumberExceededException = {}));
var PutLexiconInput;
(function (PutLexiconInput) {
    /**
     * @internal
     */
    PutLexiconInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutLexiconInput = exports.PutLexiconInput || (exports.PutLexiconInput = {}));
var PutLexiconOutput;
(function (PutLexiconOutput) {
    /**
     * @internal
     */
    PutLexiconOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLexiconOutput = exports.PutLexiconOutput || (exports.PutLexiconOutput = {}));
var UnsupportedPlsAlphabetException;
(function (UnsupportedPlsAlphabetException) {
    /**
     * @internal
     */
    UnsupportedPlsAlphabetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedPlsAlphabetException = exports.UnsupportedPlsAlphabetException || (exports.UnsupportedPlsAlphabetException = {}));
var UnsupportedPlsLanguageException;
(function (UnsupportedPlsLanguageException) {
    /**
     * @internal
     */
    UnsupportedPlsLanguageException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedPlsLanguageException = exports.UnsupportedPlsLanguageException || (exports.UnsupportedPlsLanguageException = {}));
var SsmlMarksNotSupportedForTextTypeException;
(function (SsmlMarksNotSupportedForTextTypeException) {
    /**
     * @internal
     */
    SsmlMarksNotSupportedForTextTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SsmlMarksNotSupportedForTextTypeException = exports.SsmlMarksNotSupportedForTextTypeException || (exports.SsmlMarksNotSupportedForTextTypeException = {}));
var StartSpeechSynthesisTaskInput;
(function (StartSpeechSynthesisTaskInput) {
    /**
     * @internal
     */
    StartSpeechSynthesisTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSpeechSynthesisTaskInput = exports.StartSpeechSynthesisTaskInput || (exports.StartSpeechSynthesisTaskInput = {}));
var StartSpeechSynthesisTaskOutput;
(function (StartSpeechSynthesisTaskOutput) {
    /**
     * @internal
     */
    StartSpeechSynthesisTaskOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSpeechSynthesisTaskOutput = exports.StartSpeechSynthesisTaskOutput || (exports.StartSpeechSynthesisTaskOutput = {}));
var TextLengthExceededException;
(function (TextLengthExceededException) {
    /**
     * @internal
     */
    TextLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextLengthExceededException = exports.TextLengthExceededException || (exports.TextLengthExceededException = {}));
var SynthesizeSpeechInput;
(function (SynthesizeSpeechInput) {
    /**
     * @internal
     */
    SynthesizeSpeechInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SynthesizeSpeechInput = exports.SynthesizeSpeechInput || (exports.SynthesizeSpeechInput = {}));
var SynthesizeSpeechOutput;
(function (SynthesizeSpeechOutput) {
    /**
     * @internal
     */
    SynthesizeSpeechOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SynthesizeSpeechOutput = exports.SynthesizeSpeechOutput || (exports.SynthesizeSpeechOutput = {}));
//# sourceMappingURL=models_0.js.map