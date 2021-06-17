"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartStreamTranscriptionResponse = exports.TranscriptResultStream = exports.TranscriptEvent = exports.Transcript = exports.StartStreamTranscriptionRequest = exports.VocabularyFilterMethod = exports.StartMedicalStreamTranscriptionResponse = exports.StartMedicalStreamTranscriptionRequest = exports.Type = exports.Specialty = exports.Result = exports.PartialResultsStability = exports.MedicalTranscriptResultStream = exports.ServiceUnavailableException = exports.MedicalTranscriptEvent = exports.MedicalTranscript = exports.MedicalResult = exports.MedicalContentIdentificationType = exports.MedicalAlternative = exports.MedicalItem = exports.MedicalEntity = exports.MediaEncoding = exports.LimitExceededException = exports.LanguageCode = exports.InternalFailureException = exports.ConflictException = exports.BadRequestException = exports.AudioStream = exports.AudioEvent = exports.Alternative = exports.Item = exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["PRONUNCIATION"] = "pronunciation";
    ItemType["PUNCTUATION"] = "punctuation";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Item;
(function (Item) {
    /**
     * @internal
     */
    Item.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Item = exports.Item || (exports.Item = {}));
var Alternative;
(function (Alternative) {
    /**
     * @internal
     */
    Alternative.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alternative = exports.Alternative || (exports.Alternative = {}));
var AudioEvent;
(function (AudioEvent) {
    /**
     * @internal
     */
    AudioEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioEvent = exports.AudioEvent || (exports.AudioEvent = {}));
var AudioStream;
(function (AudioStream) {
    AudioStream.visit = (value, visitor) => {
        if (value.AudioEvent !== undefined)
            return visitor.AudioEvent(value.AudioEvent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AudioStream.filterSensitiveLog = (obj) => {
        if (obj.AudioEvent !== undefined)
            return { AudioEvent: AudioEvent.filterSensitiveLog(obj.AudioEvent) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AudioStream = exports.AudioStream || (exports.AudioStream = {}));
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
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["DE_DE"] = "de-DE";
    LanguageCode["EN_AU"] = "en-AU";
    LanguageCode["EN_GB"] = "en-GB";
    LanguageCode["EN_US"] = "en-US";
    LanguageCode["ES_US"] = "es-US";
    LanguageCode["FR_CA"] = "fr-CA";
    LanguageCode["FR_FR"] = "fr-FR";
    LanguageCode["IT_IT"] = "it-IT";
    LanguageCode["JA_JP"] = "ja-JP";
    LanguageCode["KO_KR"] = "ko-KR";
    LanguageCode["PT_BR"] = "pt-BR";
    LanguageCode["ZH_CN"] = "zh-CN";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var MediaEncoding;
(function (MediaEncoding) {
    MediaEncoding["FLAC"] = "flac";
    MediaEncoding["OGG_OPUS"] = "ogg-opus";
    MediaEncoding["PCM"] = "pcm";
})(MediaEncoding = exports.MediaEncoding || (exports.MediaEncoding = {}));
var MedicalEntity;
(function (MedicalEntity) {
    /**
     * @internal
     */
    MedicalEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalEntity = exports.MedicalEntity || (exports.MedicalEntity = {}));
var MedicalItem;
(function (MedicalItem) {
    /**
     * @internal
     */
    MedicalItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalItem = exports.MedicalItem || (exports.MedicalItem = {}));
var MedicalAlternative;
(function (MedicalAlternative) {
    /**
     * @internal
     */
    MedicalAlternative.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalAlternative = exports.MedicalAlternative || (exports.MedicalAlternative = {}));
var MedicalContentIdentificationType;
(function (MedicalContentIdentificationType) {
    MedicalContentIdentificationType["PHI"] = "PHI";
})(MedicalContentIdentificationType = exports.MedicalContentIdentificationType || (exports.MedicalContentIdentificationType = {}));
var MedicalResult;
(function (MedicalResult) {
    /**
     * @internal
     */
    MedicalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalResult = exports.MedicalResult || (exports.MedicalResult = {}));
var MedicalTranscript;
(function (MedicalTranscript) {
    /**
     * @internal
     */
    MedicalTranscript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscript = exports.MedicalTranscript || (exports.MedicalTranscript = {}));
var MedicalTranscriptEvent;
(function (MedicalTranscriptEvent) {
    /**
     * @internal
     */
    MedicalTranscriptEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscriptEvent = exports.MedicalTranscriptEvent || (exports.MedicalTranscriptEvent = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var MedicalTranscriptResultStream;
(function (MedicalTranscriptResultStream) {
    MedicalTranscriptResultStream.visit = (value, visitor) => {
        if (value.TranscriptEvent !== undefined)
            return visitor.TranscriptEvent(value.TranscriptEvent);
        if (value.BadRequestException !== undefined)
            return visitor.BadRequestException(value.BadRequestException);
        if (value.LimitExceededException !== undefined)
            return visitor.LimitExceededException(value.LimitExceededException);
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        if (value.ConflictException !== undefined)
            return visitor.ConflictException(value.ConflictException);
        if (value.ServiceUnavailableException !== undefined)
            return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    MedicalTranscriptResultStream.filterSensitiveLog = (obj) => {
        if (obj.TranscriptEvent !== undefined)
            return { TranscriptEvent: MedicalTranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
        if (obj.BadRequestException !== undefined)
            return { BadRequestException: BadRequestException.filterSensitiveLog(obj.BadRequestException) };
        if (obj.LimitExceededException !== undefined)
            return { LimitExceededException: LimitExceededException.filterSensitiveLog(obj.LimitExceededException) };
        if (obj.InternalFailureException !== undefined)
            return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
        if (obj.ConflictException !== undefined)
            return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
        if (obj.ServiceUnavailableException !== undefined)
            return {
                ServiceUnavailableException: ServiceUnavailableException.filterSensitiveLog(obj.ServiceUnavailableException),
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(MedicalTranscriptResultStream = exports.MedicalTranscriptResultStream || (exports.MedicalTranscriptResultStream = {}));
var PartialResultsStability;
(function (PartialResultsStability) {
    PartialResultsStability["HIGH"] = "high";
    PartialResultsStability["LOW"] = "low";
    PartialResultsStability["MEDIUM"] = "medium";
})(PartialResultsStability = exports.PartialResultsStability || (exports.PartialResultsStability = {}));
var Result;
(function (Result) {
    /**
     * @internal
     */
    Result.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Result = exports.Result || (exports.Result = {}));
var Specialty;
(function (Specialty) {
    Specialty["CARDIOLOGY"] = "CARDIOLOGY";
    Specialty["NEUROLOGY"] = "NEUROLOGY";
    Specialty["ONCOLOGY"] = "ONCOLOGY";
    Specialty["PRIMARYCARE"] = "PRIMARYCARE";
    Specialty["RADIOLOGY"] = "RADIOLOGY";
    Specialty["UROLOGY"] = "UROLOGY";
})(Specialty = exports.Specialty || (exports.Specialty = {}));
var Type;
(function (Type) {
    Type["CONVERSATION"] = "CONVERSATION";
    Type["DICTATION"] = "DICTATION";
})(Type = exports.Type || (exports.Type = {}));
var StartMedicalStreamTranscriptionRequest;
(function (StartMedicalStreamTranscriptionRequest) {
    /**
     * @internal
     */
    StartMedicalStreamTranscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
    });
})(StartMedicalStreamTranscriptionRequest = exports.StartMedicalStreamTranscriptionRequest || (exports.StartMedicalStreamTranscriptionRequest = {}));
var StartMedicalStreamTranscriptionResponse;
(function (StartMedicalStreamTranscriptionResponse) {
    /**
     * @internal
     */
    StartMedicalStreamTranscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
    });
})(StartMedicalStreamTranscriptionResponse = exports.StartMedicalStreamTranscriptionResponse || (exports.StartMedicalStreamTranscriptionResponse = {}));
var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
    VocabularyFilterMethod["TAG"] = "tag";
})(VocabularyFilterMethod = exports.VocabularyFilterMethod || (exports.VocabularyFilterMethod = {}));
var StartStreamTranscriptionRequest;
(function (StartStreamTranscriptionRequest) {
    /**
     * @internal
     */
    StartStreamTranscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
    });
})(StartStreamTranscriptionRequest = exports.StartStreamTranscriptionRequest || (exports.StartStreamTranscriptionRequest = {}));
var Transcript;
(function (Transcript) {
    /**
     * @internal
     */
    Transcript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transcript = exports.Transcript || (exports.Transcript = {}));
var TranscriptEvent;
(function (TranscriptEvent) {
    /**
     * @internal
     */
    TranscriptEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranscriptEvent = exports.TranscriptEvent || (exports.TranscriptEvent = {}));
var TranscriptResultStream;
(function (TranscriptResultStream) {
    TranscriptResultStream.visit = (value, visitor) => {
        if (value.TranscriptEvent !== undefined)
            return visitor.TranscriptEvent(value.TranscriptEvent);
        if (value.BadRequestException !== undefined)
            return visitor.BadRequestException(value.BadRequestException);
        if (value.LimitExceededException !== undefined)
            return visitor.LimitExceededException(value.LimitExceededException);
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        if (value.ConflictException !== undefined)
            return visitor.ConflictException(value.ConflictException);
        if (value.ServiceUnavailableException !== undefined)
            return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    TranscriptResultStream.filterSensitiveLog = (obj) => {
        if (obj.TranscriptEvent !== undefined)
            return { TranscriptEvent: TranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
        if (obj.BadRequestException !== undefined)
            return { BadRequestException: BadRequestException.filterSensitiveLog(obj.BadRequestException) };
        if (obj.LimitExceededException !== undefined)
            return { LimitExceededException: LimitExceededException.filterSensitiveLog(obj.LimitExceededException) };
        if (obj.InternalFailureException !== undefined)
            return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
        if (obj.ConflictException !== undefined)
            return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
        if (obj.ServiceUnavailableException !== undefined)
            return {
                ServiceUnavailableException: ServiceUnavailableException.filterSensitiveLog(obj.ServiceUnavailableException),
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(TranscriptResultStream = exports.TranscriptResultStream || (exports.TranscriptResultStream = {}));
var StartStreamTranscriptionResponse;
(function (StartStreamTranscriptionResponse) {
    /**
     * @internal
     */
    StartStreamTranscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
    });
})(StartStreamTranscriptionResponse = exports.StartStreamTranscriptionResponse || (exports.StartStreamTranscriptionResponse = {}));
//# sourceMappingURL=models_0.js.map