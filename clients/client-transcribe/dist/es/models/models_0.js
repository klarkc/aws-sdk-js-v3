import { __assign } from "tslib";
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var BaseModelName;
(function (BaseModelName) {
    BaseModelName["NARROW_BAND"] = "NarrowBand";
    BaseModelName["WIDE_BAND"] = "WideBand";
})(BaseModelName || (BaseModelName = {}));
export var CLMLanguageCode;
(function (CLMLanguageCode) {
    CLMLanguageCode["EN_AU"] = "en-AU";
    CLMLanguageCode["EN_GB"] = "en-GB";
    CLMLanguageCode["EN_US"] = "en-US";
    CLMLanguageCode["ES_US"] = "es-US";
    CLMLanguageCode["HI_IN"] = "hi-IN";
})(CLMLanguageCode || (CLMLanguageCode = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var RedactionOutput;
(function (RedactionOutput) {
    RedactionOutput["REDACTED"] = "redacted";
    RedactionOutput["REDACTED_AND_UNREDACTED"] = "redacted_and_unredacted";
})(RedactionOutput || (RedactionOutput = {}));
export var RedactionType;
(function (RedactionType) {
    RedactionType["PII"] = "PII";
})(RedactionType || (RedactionType = {}));
export var ContentRedaction;
(function (ContentRedaction) {
    /**
     * @internal
     */
    ContentRedaction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContentRedaction || (ContentRedaction = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDataConfig || (InputDataConfig = {}));
export var CreateLanguageModelRequest;
(function (CreateLanguageModelRequest) {
    /**
     * @internal
     */
    CreateLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLanguageModelRequest || (CreateLanguageModelRequest = {}));
export var ModelStatus;
(function (ModelStatus) {
    ModelStatus["COMPLETED"] = "COMPLETED";
    ModelStatus["FAILED"] = "FAILED";
    ModelStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ModelStatus || (ModelStatus = {}));
export var CreateLanguageModelResponse;
(function (CreateLanguageModelResponse) {
    /**
     * @internal
     */
    CreateLanguageModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLanguageModelResponse || (CreateLanguageModelResponse = {}));
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
export var LanguageCode;
(function (LanguageCode) {
    LanguageCode["AF_ZA"] = "af-ZA";
    LanguageCode["AR_AE"] = "ar-AE";
    LanguageCode["AR_SA"] = "ar-SA";
    LanguageCode["CY_GB"] = "cy-GB";
    LanguageCode["DA_DK"] = "da-DK";
    LanguageCode["DE_CH"] = "de-CH";
    LanguageCode["DE_DE"] = "de-DE";
    LanguageCode["EN_AB"] = "en-AB";
    LanguageCode["EN_AU"] = "en-AU";
    LanguageCode["EN_GB"] = "en-GB";
    LanguageCode["EN_IE"] = "en-IE";
    LanguageCode["EN_IN"] = "en-IN";
    LanguageCode["EN_US"] = "en-US";
    LanguageCode["EN_WL"] = "en-WL";
    LanguageCode["ES_ES"] = "es-ES";
    LanguageCode["ES_US"] = "es-US";
    LanguageCode["FA_IR"] = "fa-IR";
    LanguageCode["FR_CA"] = "fr-CA";
    LanguageCode["FR_FR"] = "fr-FR";
    LanguageCode["GA_IE"] = "ga-IE";
    LanguageCode["GD_GB"] = "gd-GB";
    LanguageCode["HE_IL"] = "he-IL";
    LanguageCode["HI_IN"] = "hi-IN";
    LanguageCode["ID_ID"] = "id-ID";
    LanguageCode["IT_IT"] = "it-IT";
    LanguageCode["JA_JP"] = "ja-JP";
    LanguageCode["KO_KR"] = "ko-KR";
    LanguageCode["MS_MY"] = "ms-MY";
    LanguageCode["NL_NL"] = "nl-NL";
    LanguageCode["PT_BR"] = "pt-BR";
    LanguageCode["PT_PT"] = "pt-PT";
    LanguageCode["RU_RU"] = "ru-RU";
    LanguageCode["TA_IN"] = "ta-IN";
    LanguageCode["TE_IN"] = "te-IN";
    LanguageCode["TR_TR"] = "tr-TR";
    LanguageCode["ZH_CN"] = "zh-CN";
})(LanguageCode || (LanguageCode = {}));
export var CreateMedicalVocabularyRequest;
(function (CreateMedicalVocabularyRequest) {
    /**
     * @internal
     */
    CreateMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMedicalVocabularyRequest || (CreateMedicalVocabularyRequest = {}));
export var VocabularyState;
(function (VocabularyState) {
    VocabularyState["FAILED"] = "FAILED";
    VocabularyState["PENDING"] = "PENDING";
    VocabularyState["READY"] = "READY";
})(VocabularyState || (VocabularyState = {}));
export var CreateMedicalVocabularyResponse;
(function (CreateMedicalVocabularyResponse) {
    /**
     * @internal
     */
    CreateMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMedicalVocabularyResponse || (CreateMedicalVocabularyResponse = {}));
export var CreateVocabularyRequest;
(function (CreateVocabularyRequest) {
    /**
     * @internal
     */
    CreateVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyRequest || (CreateVocabularyRequest = {}));
export var CreateVocabularyResponse;
(function (CreateVocabularyResponse) {
    /**
     * @internal
     */
    CreateVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyResponse || (CreateVocabularyResponse = {}));
export var CreateVocabularyFilterRequest;
(function (CreateVocabularyFilterRequest) {
    /**
     * @internal
     */
    CreateVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyFilterRequest || (CreateVocabularyFilterRequest = {}));
export var CreateVocabularyFilterResponse;
(function (CreateVocabularyFilterResponse) {
    /**
     * @internal
     */
    CreateVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyFilterResponse || (CreateVocabularyFilterResponse = {}));
export var DeleteLanguageModelRequest;
(function (DeleteLanguageModelRequest) {
    /**
     * @internal
     */
    DeleteLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLanguageModelRequest || (DeleteLanguageModelRequest = {}));
export var DeleteMedicalTranscriptionJobRequest;
(function (DeleteMedicalTranscriptionJobRequest) {
    /**
     * @internal
     */
    DeleteMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMedicalTranscriptionJobRequest || (DeleteMedicalTranscriptionJobRequest = {}));
export var DeleteMedicalVocabularyRequest;
(function (DeleteMedicalVocabularyRequest) {
    /**
     * @internal
     */
    DeleteMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMedicalVocabularyRequest || (DeleteMedicalVocabularyRequest = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DeleteTranscriptionJobRequest;
(function (DeleteTranscriptionJobRequest) {
    /**
     * @internal
     */
    DeleteTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTranscriptionJobRequest || (DeleteTranscriptionJobRequest = {}));
export var DeleteVocabularyRequest;
(function (DeleteVocabularyRequest) {
    /**
     * @internal
     */
    DeleteVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVocabularyRequest || (DeleteVocabularyRequest = {}));
export var DeleteVocabularyFilterRequest;
(function (DeleteVocabularyFilterRequest) {
    /**
     * @internal
     */
    DeleteVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVocabularyFilterRequest || (DeleteVocabularyFilterRequest = {}));
export var DescribeLanguageModelRequest;
(function (DescribeLanguageModelRequest) {
    /**
     * @internal
     */
    DescribeLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLanguageModelRequest || (DescribeLanguageModelRequest = {}));
export var LanguageModel;
(function (LanguageModel) {
    /**
     * @internal
     */
    LanguageModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LanguageModel || (LanguageModel = {}));
export var DescribeLanguageModelResponse;
(function (DescribeLanguageModelResponse) {
    /**
     * @internal
     */
    DescribeLanguageModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLanguageModelResponse || (DescribeLanguageModelResponse = {}));
export var GetMedicalTranscriptionJobRequest;
(function (GetMedicalTranscriptionJobRequest) {
    /**
     * @internal
     */
    GetMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalTranscriptionJobRequest || (GetMedicalTranscriptionJobRequest = {}));
export var MedicalContentIdentificationType;
(function (MedicalContentIdentificationType) {
    MedicalContentIdentificationType["PHI"] = "PHI";
})(MedicalContentIdentificationType || (MedicalContentIdentificationType = {}));
export var Media;
(function (Media) {
    /**
     * @internal
     */
    Media.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Media || (Media = {}));
export var MediaFormat;
(function (MediaFormat) {
    MediaFormat["AMR"] = "amr";
    MediaFormat["FLAC"] = "flac";
    MediaFormat["MP3"] = "mp3";
    MediaFormat["MP4"] = "mp4";
    MediaFormat["OGG"] = "ogg";
    MediaFormat["WAV"] = "wav";
    MediaFormat["WEBM"] = "webm";
})(MediaFormat || (MediaFormat = {}));
export var MedicalTranscriptionSetting;
(function (MedicalTranscriptionSetting) {
    /**
     * @internal
     */
    MedicalTranscriptionSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionSetting || (MedicalTranscriptionSetting = {}));
export var Specialty;
(function (Specialty) {
    Specialty["PRIMARYCARE"] = "PRIMARYCARE";
})(Specialty || (Specialty = {}));
export var MedicalTranscript;
(function (MedicalTranscript) {
    /**
     * @internal
     */
    MedicalTranscript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscript || (MedicalTranscript = {}));
export var TranscriptionJobStatus;
(function (TranscriptionJobStatus) {
    TranscriptionJobStatus["COMPLETED"] = "COMPLETED";
    TranscriptionJobStatus["FAILED"] = "FAILED";
    TranscriptionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TranscriptionJobStatus["QUEUED"] = "QUEUED";
})(TranscriptionJobStatus || (TranscriptionJobStatus = {}));
export var Type;
(function (Type) {
    Type["CONVERSATION"] = "CONVERSATION";
    Type["DICTATION"] = "DICTATION";
})(Type || (Type = {}));
export var MedicalTranscriptionJob;
(function (MedicalTranscriptionJob) {
    /**
     * @internal
     */
    MedicalTranscriptionJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionJob || (MedicalTranscriptionJob = {}));
export var GetMedicalTranscriptionJobResponse;
(function (GetMedicalTranscriptionJobResponse) {
    /**
     * @internal
     */
    GetMedicalTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalTranscriptionJobResponse || (GetMedicalTranscriptionJobResponse = {}));
export var GetMedicalVocabularyRequest;
(function (GetMedicalVocabularyRequest) {
    /**
     * @internal
     */
    GetMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalVocabularyRequest || (GetMedicalVocabularyRequest = {}));
export var GetMedicalVocabularyResponse;
(function (GetMedicalVocabularyResponse) {
    /**
     * @internal
     */
    GetMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalVocabularyResponse || (GetMedicalVocabularyResponse = {}));
export var GetTranscriptionJobRequest;
(function (GetTranscriptionJobRequest) {
    /**
     * @internal
     */
    GetTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptionJobRequest || (GetTranscriptionJobRequest = {}));
export var JobExecutionSettings;
(function (JobExecutionSettings) {
    /**
     * @internal
     */
    JobExecutionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobExecutionSettings || (JobExecutionSettings = {}));
export var ModelSettings;
(function (ModelSettings) {
    /**
     * @internal
     */
    ModelSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelSettings || (ModelSettings = {}));
export var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
    VocabularyFilterMethod["TAG"] = "tag";
})(VocabularyFilterMethod || (VocabularyFilterMethod = {}));
export var Settings;
(function (Settings) {
    /**
     * @internal
     */
    Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Settings || (Settings = {}));
export var Transcript;
(function (Transcript) {
    /**
     * @internal
     */
    Transcript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transcript || (Transcript = {}));
export var TranscriptionJob;
(function (TranscriptionJob) {
    /**
     * @internal
     */
    TranscriptionJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptionJob || (TranscriptionJob = {}));
export var GetTranscriptionJobResponse;
(function (GetTranscriptionJobResponse) {
    /**
     * @internal
     */
    GetTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptionJobResponse || (GetTranscriptionJobResponse = {}));
export var GetVocabularyRequest;
(function (GetVocabularyRequest) {
    /**
     * @internal
     */
    GetVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyRequest || (GetVocabularyRequest = {}));
export var GetVocabularyResponse;
(function (GetVocabularyResponse) {
    /**
     * @internal
     */
    GetVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyResponse || (GetVocabularyResponse = {}));
export var GetVocabularyFilterRequest;
(function (GetVocabularyFilterRequest) {
    /**
     * @internal
     */
    GetVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyFilterRequest || (GetVocabularyFilterRequest = {}));
export var GetVocabularyFilterResponse;
(function (GetVocabularyFilterResponse) {
    /**
     * @internal
     */
    GetVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyFilterResponse || (GetVocabularyFilterResponse = {}));
export var ListLanguageModelsRequest;
(function (ListLanguageModelsRequest) {
    /**
     * @internal
     */
    ListLanguageModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLanguageModelsRequest || (ListLanguageModelsRequest = {}));
export var ListLanguageModelsResponse;
(function (ListLanguageModelsResponse) {
    /**
     * @internal
     */
    ListLanguageModelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLanguageModelsResponse || (ListLanguageModelsResponse = {}));
export var ListMedicalTranscriptionJobsRequest;
(function (ListMedicalTranscriptionJobsRequest) {
    /**
     * @internal
     */
    ListMedicalTranscriptionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalTranscriptionJobsRequest || (ListMedicalTranscriptionJobsRequest = {}));
export var OutputLocationType;
(function (OutputLocationType) {
    OutputLocationType["CUSTOMER_BUCKET"] = "CUSTOMER_BUCKET";
    OutputLocationType["SERVICE_BUCKET"] = "SERVICE_BUCKET";
})(OutputLocationType || (OutputLocationType = {}));
export var MedicalTranscriptionJobSummary;
(function (MedicalTranscriptionJobSummary) {
    /**
     * @internal
     */
    MedicalTranscriptionJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionJobSummary || (MedicalTranscriptionJobSummary = {}));
export var ListMedicalTranscriptionJobsResponse;
(function (ListMedicalTranscriptionJobsResponse) {
    /**
     * @internal
     */
    ListMedicalTranscriptionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalTranscriptionJobsResponse || (ListMedicalTranscriptionJobsResponse = {}));
export var ListMedicalVocabulariesRequest;
(function (ListMedicalVocabulariesRequest) {
    /**
     * @internal
     */
    ListMedicalVocabulariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalVocabulariesRequest || (ListMedicalVocabulariesRequest = {}));
export var VocabularyInfo;
(function (VocabularyInfo) {
    /**
     * @internal
     */
    VocabularyInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VocabularyInfo || (VocabularyInfo = {}));
export var ListMedicalVocabulariesResponse;
(function (ListMedicalVocabulariesResponse) {
    /**
     * @internal
     */
    ListMedicalVocabulariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalVocabulariesResponse || (ListMedicalVocabulariesResponse = {}));
export var ListTranscriptionJobsRequest;
(function (ListTranscriptionJobsRequest) {
    /**
     * @internal
     */
    ListTranscriptionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTranscriptionJobsRequest || (ListTranscriptionJobsRequest = {}));
export var TranscriptionJobSummary;
(function (TranscriptionJobSummary) {
    /**
     * @internal
     */
    TranscriptionJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptionJobSummary || (TranscriptionJobSummary = {}));
export var ListTranscriptionJobsResponse;
(function (ListTranscriptionJobsResponse) {
    /**
     * @internal
     */
    ListTranscriptionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTranscriptionJobsResponse || (ListTranscriptionJobsResponse = {}));
export var ListVocabulariesRequest;
(function (ListVocabulariesRequest) {
    /**
     * @internal
     */
    ListVocabulariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabulariesRequest || (ListVocabulariesRequest = {}));
export var ListVocabulariesResponse;
(function (ListVocabulariesResponse) {
    /**
     * @internal
     */
    ListVocabulariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabulariesResponse || (ListVocabulariesResponse = {}));
export var ListVocabularyFiltersRequest;
(function (ListVocabularyFiltersRequest) {
    /**
     * @internal
     */
    ListVocabularyFiltersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabularyFiltersRequest || (ListVocabularyFiltersRequest = {}));
export var VocabularyFilterInfo;
(function (VocabularyFilterInfo) {
    /**
     * @internal
     */
    VocabularyFilterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VocabularyFilterInfo || (VocabularyFilterInfo = {}));
export var ListVocabularyFiltersResponse;
(function (ListVocabularyFiltersResponse) {
    /**
     * @internal
     */
    ListVocabularyFiltersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabularyFiltersResponse || (ListVocabularyFiltersResponse = {}));
export var StartMedicalTranscriptionJobRequest;
(function (StartMedicalTranscriptionJobRequest) {
    /**
     * @internal
     */
    StartMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMedicalTranscriptionJobRequest || (StartMedicalTranscriptionJobRequest = {}));
export var StartMedicalTranscriptionJobResponse;
(function (StartMedicalTranscriptionJobResponse) {
    /**
     * @internal
     */
    StartMedicalTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMedicalTranscriptionJobResponse || (StartMedicalTranscriptionJobResponse = {}));
export var StartTranscriptionJobRequest;
(function (StartTranscriptionJobRequest) {
    /**
     * @internal
     */
    StartTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTranscriptionJobRequest || (StartTranscriptionJobRequest = {}));
export var StartTranscriptionJobResponse;
(function (StartTranscriptionJobResponse) {
    /**
     * @internal
     */
    StartTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTranscriptionJobResponse || (StartTranscriptionJobResponse = {}));
export var UpdateMedicalVocabularyRequest;
(function (UpdateMedicalVocabularyRequest) {
    /**
     * @internal
     */
    UpdateMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMedicalVocabularyRequest || (UpdateMedicalVocabularyRequest = {}));
export var UpdateMedicalVocabularyResponse;
(function (UpdateMedicalVocabularyResponse) {
    /**
     * @internal
     */
    UpdateMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMedicalVocabularyResponse || (UpdateMedicalVocabularyResponse = {}));
export var UpdateVocabularyRequest;
(function (UpdateVocabularyRequest) {
    /**
     * @internal
     */
    UpdateVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyRequest || (UpdateVocabularyRequest = {}));
export var UpdateVocabularyResponse;
(function (UpdateVocabularyResponse) {
    /**
     * @internal
     */
    UpdateVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyResponse || (UpdateVocabularyResponse = {}));
export var UpdateVocabularyFilterRequest;
(function (UpdateVocabularyFilterRequest) {
    /**
     * @internal
     */
    UpdateVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyFilterRequest || (UpdateVocabularyFilterRequest = {}));
export var UpdateVocabularyFilterResponse;
(function (UpdateVocabularyFilterResponse) {
    /**
     * @internal
     */
    UpdateVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyFilterResponse || (UpdateVocabularyFilterResponse = {}));
//# sourceMappingURL=models_0.js.map