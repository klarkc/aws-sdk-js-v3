import { __assign } from "tslib";
export var ItemType;
(function (ItemType) {
    ItemType["PRONUNCIATION"] = "pronunciation";
    ItemType["PUNCTUATION"] = "punctuation";
})(ItemType || (ItemType = {}));
export var Item;
(function (Item) {
    /**
     * @internal
     */
    Item.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Item || (Item = {}));
export var Alternative;
(function (Alternative) {
    /**
     * @internal
     */
    Alternative.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alternative || (Alternative = {}));
export var AudioEvent;
(function (AudioEvent) {
    /**
     * @internal
     */
    AudioEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioEvent || (AudioEvent = {}));
export var AudioStream;
(function (AudioStream) {
    AudioStream.visit = function (value, visitor) {
        if (value.AudioEvent !== undefined)
            return visitor.AudioEvent(value.AudioEvent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AudioStream.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.AudioEvent !== undefined)
            return { AudioEvent: AudioEvent.filterSensitiveLog(obj.AudioEvent) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AudioStream || (AudioStream = {}));
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
export var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var LanguageCode;
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
})(LanguageCode || (LanguageCode = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var MediaEncoding;
(function (MediaEncoding) {
    MediaEncoding["FLAC"] = "flac";
    MediaEncoding["OGG_OPUS"] = "ogg-opus";
    MediaEncoding["PCM"] = "pcm";
})(MediaEncoding || (MediaEncoding = {}));
export var MedicalEntity;
(function (MedicalEntity) {
    /**
     * @internal
     */
    MedicalEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalEntity || (MedicalEntity = {}));
export var MedicalItem;
(function (MedicalItem) {
    /**
     * @internal
     */
    MedicalItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalItem || (MedicalItem = {}));
export var MedicalAlternative;
(function (MedicalAlternative) {
    /**
     * @internal
     */
    MedicalAlternative.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalAlternative || (MedicalAlternative = {}));
export var MedicalContentIdentificationType;
(function (MedicalContentIdentificationType) {
    MedicalContentIdentificationType["PHI"] = "PHI";
})(MedicalContentIdentificationType || (MedicalContentIdentificationType = {}));
export var MedicalResult;
(function (MedicalResult) {
    /**
     * @internal
     */
    MedicalResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalResult || (MedicalResult = {}));
export var MedicalTranscript;
(function (MedicalTranscript) {
    /**
     * @internal
     */
    MedicalTranscript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscript || (MedicalTranscript = {}));
export var MedicalTranscriptEvent;
(function (MedicalTranscriptEvent) {
    /**
     * @internal
     */
    MedicalTranscriptEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptEvent || (MedicalTranscriptEvent = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var MedicalTranscriptResultStream;
(function (MedicalTranscriptResultStream) {
    MedicalTranscriptResultStream.visit = function (value, visitor) {
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
    MedicalTranscriptResultStream.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(MedicalTranscriptResultStream || (MedicalTranscriptResultStream = {}));
export var PartialResultsStability;
(function (PartialResultsStability) {
    PartialResultsStability["HIGH"] = "high";
    PartialResultsStability["LOW"] = "low";
    PartialResultsStability["MEDIUM"] = "medium";
})(PartialResultsStability || (PartialResultsStability = {}));
export var Result;
(function (Result) {
    /**
     * @internal
     */
    Result.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Result || (Result = {}));
export var Specialty;
(function (Specialty) {
    Specialty["CARDIOLOGY"] = "CARDIOLOGY";
    Specialty["NEUROLOGY"] = "NEUROLOGY";
    Specialty["ONCOLOGY"] = "ONCOLOGY";
    Specialty["PRIMARYCARE"] = "PRIMARYCARE";
    Specialty["RADIOLOGY"] = "RADIOLOGY";
    Specialty["UROLOGY"] = "UROLOGY";
})(Specialty || (Specialty = {}));
export var Type;
(function (Type) {
    Type["CONVERSATION"] = "CONVERSATION";
    Type["DICTATION"] = "DICTATION";
})(Type || (Type = {}));
export var StartMedicalStreamTranscriptionRequest;
(function (StartMedicalStreamTranscriptionRequest) {
    /**
     * @internal
     */
    StartMedicalStreamTranscriptionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }))); };
})(StartMedicalStreamTranscriptionRequest || (StartMedicalStreamTranscriptionRequest = {}));
export var StartMedicalStreamTranscriptionResponse;
(function (StartMedicalStreamTranscriptionResponse) {
    /**
     * @internal
     */
    StartMedicalStreamTranscriptionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }))); };
})(StartMedicalStreamTranscriptionResponse || (StartMedicalStreamTranscriptionResponse = {}));
export var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
    VocabularyFilterMethod["TAG"] = "tag";
})(VocabularyFilterMethod || (VocabularyFilterMethod = {}));
export var StartStreamTranscriptionRequest;
(function (StartStreamTranscriptionRequest) {
    /**
     * @internal
     */
    StartStreamTranscriptionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }))); };
})(StartStreamTranscriptionRequest || (StartStreamTranscriptionRequest = {}));
export var Transcript;
(function (Transcript) {
    /**
     * @internal
     */
    Transcript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transcript || (Transcript = {}));
export var TranscriptEvent;
(function (TranscriptEvent) {
    /**
     * @internal
     */
    TranscriptEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptEvent || (TranscriptEvent = {}));
export var TranscriptResultStream;
(function (TranscriptResultStream) {
    TranscriptResultStream.visit = function (value, visitor) {
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
    TranscriptResultStream.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(TranscriptResultStream || (TranscriptResultStream = {}));
export var StartStreamTranscriptionResponse;
(function (StartStreamTranscriptionResponse) {
    /**
     * @internal
     */
    StartStreamTranscriptionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }))); };
})(StartStreamTranscriptionResponse || (StartStreamTranscriptionResponse = {}));
//# sourceMappingURL=models_0.js.map