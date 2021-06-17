"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcConfig = exports.Tag = exports.DocumentClassifierOutputDataConfig = exports.DocumentClassifierMode = exports.DocumentClassifierInputDataConfig = exports.DocumentClassifierDataFormat = exports.ContainsPiiEntitiesResponse = exports.EntityLabel = exports.PiiEntityType = exports.ContainsPiiEntitiesRequest = exports.ResourceUnavailableException = exports.ClassifyDocumentResponse = exports.DocumentLabel = exports.DocumentClass = exports.ClassifyDocumentRequest = exports.ClassifierMetadata = exports.ClassifierEvaluationMetrics = exports.BatchDetectSyntaxResponse = exports.BatchDetectSyntaxItemResult = exports.SyntaxToken = exports.PartOfSpeechTag = exports.PartOfSpeechTagType = exports.BatchDetectSyntaxRequest = exports.SyntaxLanguageCode = exports.BatchDetectSentimentResponse = exports.BatchDetectSentimentItemResult = exports.SentimentScore = exports.SentimentType = exports.BatchDetectSentimentRequest = exports.BatchDetectKeyPhrasesResponse = exports.BatchDetectKeyPhrasesItemResult = exports.KeyPhrase = exports.BatchDetectKeyPhrasesRequest = exports.UnsupportedLanguageException = exports.BatchDetectEntitiesResponse = exports.BatchDetectEntitiesItemResult = exports.Entity = exports.EntityType = exports.BatchDetectEntitiesRequest = exports.LanguageCode = exports.TextSizeLimitExceededException = exports.InvalidRequestException = exports.InternalServerException = exports.BatchSizeLimitExceededException = exports.BatchDetectDominantLanguageResponse = exports.BatchDetectDominantLanguageItemResult = exports.DominantLanguage = exports.BatchItemError = exports.BatchDetectDominantLanguageRequest = exports.AugmentedManifestsListItem = void 0;
exports.EntityRecognizerEvaluationMetrics = exports.EntityRecognizerMetadataEntityTypesListItem = exports.EntityTypesEvaluationMetrics = exports.DescribeEntityRecognizerRequest = exports.DescribeEntitiesDetectionJobResponse = exports.EntitiesDetectionJobProperties = exports.DescribeEntitiesDetectionJobRequest = exports.DescribeEndpointResponse = exports.EndpointProperties = exports.EndpointStatus = exports.DescribeEndpointRequest = exports.DescribeDominantLanguageDetectionJobResponse = exports.DominantLanguageDetectionJobProperties = exports.DescribeDominantLanguageDetectionJobRequest = exports.DescribeDocumentClassifierResponse = exports.DocumentClassifierProperties = exports.ModelStatus = exports.DescribeDocumentClassifierRequest = exports.JobNotFoundException = exports.DescribeDocumentClassificationJobResponse = exports.DocumentClassificationJobProperties = exports.OutputDataConfig = exports.JobStatus = exports.InputDataConfig = exports.InputFormat = exports.DescribeDocumentClassificationJobRequest = exports.DeleteEntityRecognizerResponse = exports.DeleteEntityRecognizerRequest = exports.DeleteEndpointResponse = exports.DeleteEndpointRequest = exports.DeleteDocumentClassifierResponse = exports.DeleteDocumentClassifierRequest = exports.CreateEntityRecognizerResponse = exports.CreateEntityRecognizerRequest = exports.EntityRecognizerInputDataConfig = exports.EntityTypesListItem = exports.EntityRecognizerEntityList = exports.EntityRecognizerDocuments = exports.EntityRecognizerDataFormat = exports.EntityRecognizerAnnotations = exports.ResourceNotFoundException = exports.CreateEndpointResponse = exports.CreateEndpointRequest = exports.TooManyTagsException = exports.TooManyRequestsException = exports.ResourceLimitExceededException = exports.ResourceInUseException = exports.KmsKeyValidationException = exports.CreateDocumentClassifierResponse = exports.CreateDocumentClassifierRequest = void 0;
exports.ListEntitiesDetectionJobsRequest = exports.EntitiesDetectionJobFilter = exports.ListEndpointsResponse = exports.ListEndpointsRequest = exports.EndpointFilter = exports.ListDominantLanguageDetectionJobsResponse = exports.ListDominantLanguageDetectionJobsRequest = exports.DominantLanguageDetectionJobFilter = exports.ListDocumentClassifiersResponse = exports.ListDocumentClassifiersRequest = exports.DocumentClassifierFilter = exports.ListDocumentClassificationJobsResponse = exports.ListDocumentClassificationJobsRequest = exports.DocumentClassificationJobFilter = exports.InvalidFilterException = exports.DetectSyntaxResponse = exports.DetectSyntaxRequest = exports.DetectSentimentResponse = exports.DetectSentimentRequest = exports.DetectPiiEntitiesResponse = exports.PiiEntity = exports.DetectPiiEntitiesRequest = exports.DetectKeyPhrasesResponse = exports.DetectKeyPhrasesRequest = exports.DetectEntitiesResponse = exports.DetectEntitiesRequest = exports.DetectDominantLanguageResponse = exports.DetectDominantLanguageRequest = exports.DescribeTopicsDetectionJobResponse = exports.TopicsDetectionJobProperties = exports.DescribeTopicsDetectionJobRequest = exports.DescribeSentimentDetectionJobResponse = exports.SentimentDetectionJobProperties = exports.DescribeSentimentDetectionJobRequest = exports.DescribePiiEntitiesDetectionJobResponse = exports.PiiEntitiesDetectionJobProperties = exports.RedactionConfig = exports.PiiEntitiesDetectionMaskMode = exports.PiiOutputDataConfig = exports.PiiEntitiesDetectionMode = exports.DescribePiiEntitiesDetectionJobRequest = exports.DescribeKeyPhrasesDetectionJobResponse = exports.KeyPhrasesDetectionJobProperties = exports.DescribeKeyPhrasesDetectionJobRequest = exports.DescribeEventsDetectionJobResponse = exports.EventsDetectionJobProperties = exports.DescribeEventsDetectionJobRequest = exports.DescribeEntityRecognizerResponse = exports.EntityRecognizerProperties = exports.EntityRecognizerMetadata = void 0;
exports.StopTrainingDocumentClassifierRequest = exports.StopSentimentDetectionJobResponse = exports.StopSentimentDetectionJobRequest = exports.StopPiiEntitiesDetectionJobResponse = exports.StopPiiEntitiesDetectionJobRequest = exports.StopKeyPhrasesDetectionJobResponse = exports.StopKeyPhrasesDetectionJobRequest = exports.StopEventsDetectionJobResponse = exports.StopEventsDetectionJobRequest = exports.StopEntitiesDetectionJobResponse = exports.StopEntitiesDetectionJobRequest = exports.StopDominantLanguageDetectionJobResponse = exports.StopDominantLanguageDetectionJobRequest = exports.StartTopicsDetectionJobResponse = exports.StartTopicsDetectionJobRequest = exports.StartSentimentDetectionJobResponse = exports.StartSentimentDetectionJobRequest = exports.StartPiiEntitiesDetectionJobResponse = exports.StartPiiEntitiesDetectionJobRequest = exports.StartKeyPhrasesDetectionJobResponse = exports.StartKeyPhrasesDetectionJobRequest = exports.StartEventsDetectionJobResponse = exports.StartEventsDetectionJobRequest = exports.StartEntitiesDetectionJobResponse = exports.StartEntitiesDetectionJobRequest = exports.StartDominantLanguageDetectionJobResponse = exports.StartDominantLanguageDetectionJobRequest = exports.StartDocumentClassificationJobResponse = exports.StartDocumentClassificationJobRequest = exports.ListTopicsDetectionJobsResponse = exports.ListTopicsDetectionJobsRequest = exports.TopicsDetectionJobFilter = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSentimentDetectionJobsResponse = exports.ListSentimentDetectionJobsRequest = exports.SentimentDetectionJobFilter = exports.ListPiiEntitiesDetectionJobsResponse = exports.ListPiiEntitiesDetectionJobsRequest = exports.PiiEntitiesDetectionJobFilter = exports.ListKeyPhrasesDetectionJobsResponse = exports.ListKeyPhrasesDetectionJobsRequest = exports.KeyPhrasesDetectionJobFilter = exports.ListEventsDetectionJobsResponse = exports.ListEventsDetectionJobsRequest = exports.EventsDetectionJobFilter = exports.ListEntityRecognizersResponse = exports.ListEntityRecognizersRequest = exports.EntityRecognizerFilter = exports.ListEntitiesDetectionJobsResponse = void 0;
exports.UpdateEndpointResponse = exports.UpdateEndpointRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagKeysException = exports.TagResourceResponse = exports.TagResourceRequest = exports.ConcurrentModificationException = exports.StopTrainingEntityRecognizerResponse = exports.StopTrainingEntityRecognizerRequest = exports.StopTrainingDocumentClassifierResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AugmentedManifestsListItem;
(function (AugmentedManifestsListItem) {
    /**
     * @internal
     */
    AugmentedManifestsListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AugmentedManifestsListItem = exports.AugmentedManifestsListItem || (exports.AugmentedManifestsListItem = {}));
var BatchDetectDominantLanguageRequest;
(function (BatchDetectDominantLanguageRequest) {
    /**
     * @internal
     */
    BatchDetectDominantLanguageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TextList && { TextList: smithy_client_1.SENSITIVE_STRING }),
    });
})(BatchDetectDominantLanguageRequest = exports.BatchDetectDominantLanguageRequest || (exports.BatchDetectDominantLanguageRequest = {}));
var BatchItemError;
(function (BatchItemError) {
    /**
     * @internal
     */
    BatchItemError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchItemError = exports.BatchItemError || (exports.BatchItemError = {}));
var DominantLanguage;
(function (DominantLanguage) {
    /**
     * @internal
     */
    DominantLanguage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DominantLanguage = exports.DominantLanguage || (exports.DominantLanguage = {}));
var BatchDetectDominantLanguageItemResult;
(function (BatchDetectDominantLanguageItemResult) {
    /**
     * @internal
     */
    BatchDetectDominantLanguageItemResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectDominantLanguageItemResult = exports.BatchDetectDominantLanguageItemResult || (exports.BatchDetectDominantLanguageItemResult = {}));
var BatchDetectDominantLanguageResponse;
(function (BatchDetectDominantLanguageResponse) {
    /**
     * @internal
     */
    BatchDetectDominantLanguageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectDominantLanguageResponse = exports.BatchDetectDominantLanguageResponse || (exports.BatchDetectDominantLanguageResponse = {}));
var BatchSizeLimitExceededException;
(function (BatchSizeLimitExceededException) {
    /**
     * @internal
     */
    BatchSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchSizeLimitExceededException = exports.BatchSizeLimitExceededException || (exports.BatchSizeLimitExceededException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    /**
     * @internal
     */
    TextSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextSizeLimitExceededException = exports.TextSizeLimitExceededException || (exports.TextSizeLimitExceededException = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["AR"] = "ar";
    LanguageCode["DE"] = "de";
    LanguageCode["EN"] = "en";
    LanguageCode["ES"] = "es";
    LanguageCode["FR"] = "fr";
    LanguageCode["HI"] = "hi";
    LanguageCode["IT"] = "it";
    LanguageCode["JA"] = "ja";
    LanguageCode["KO"] = "ko";
    LanguageCode["PT"] = "pt";
    LanguageCode["ZH"] = "zh";
    LanguageCode["ZH_TW"] = "zh-TW";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var BatchDetectEntitiesRequest;
(function (BatchDetectEntitiesRequest) {
    /**
     * @internal
     */
    BatchDetectEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TextList && { TextList: smithy_client_1.SENSITIVE_STRING }),
    });
})(BatchDetectEntitiesRequest = exports.BatchDetectEntitiesRequest || (exports.BatchDetectEntitiesRequest = {}));
var EntityType;
(function (EntityType) {
    EntityType["COMMERCIAL_ITEM"] = "COMMERCIAL_ITEM";
    EntityType["DATE"] = "DATE";
    EntityType["EVENT"] = "EVENT";
    EntityType["LOCATION"] = "LOCATION";
    EntityType["ORGANIZATION"] = "ORGANIZATION";
    EntityType["OTHER"] = "OTHER";
    EntityType["PERSON"] = "PERSON";
    EntityType["QUANTITY"] = "QUANTITY";
    EntityType["TITLE"] = "TITLE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entity = exports.Entity || (exports.Entity = {}));
var BatchDetectEntitiesItemResult;
(function (BatchDetectEntitiesItemResult) {
    /**
     * @internal
     */
    BatchDetectEntitiesItemResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectEntitiesItemResult = exports.BatchDetectEntitiesItemResult || (exports.BatchDetectEntitiesItemResult = {}));
var BatchDetectEntitiesResponse;
(function (BatchDetectEntitiesResponse) {
    /**
     * @internal
     */
    BatchDetectEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectEntitiesResponse = exports.BatchDetectEntitiesResponse || (exports.BatchDetectEntitiesResponse = {}));
var UnsupportedLanguageException;
(function (UnsupportedLanguageException) {
    /**
     * @internal
     */
    UnsupportedLanguageException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedLanguageException = exports.UnsupportedLanguageException || (exports.UnsupportedLanguageException = {}));
var BatchDetectKeyPhrasesRequest;
(function (BatchDetectKeyPhrasesRequest) {
    /**
     * @internal
     */
    BatchDetectKeyPhrasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TextList && { TextList: smithy_client_1.SENSITIVE_STRING }),
    });
})(BatchDetectKeyPhrasesRequest = exports.BatchDetectKeyPhrasesRequest || (exports.BatchDetectKeyPhrasesRequest = {}));
var KeyPhrase;
(function (KeyPhrase) {
    /**
     * @internal
     */
    KeyPhrase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPhrase = exports.KeyPhrase || (exports.KeyPhrase = {}));
var BatchDetectKeyPhrasesItemResult;
(function (BatchDetectKeyPhrasesItemResult) {
    /**
     * @internal
     */
    BatchDetectKeyPhrasesItemResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectKeyPhrasesItemResult = exports.BatchDetectKeyPhrasesItemResult || (exports.BatchDetectKeyPhrasesItemResult = {}));
var BatchDetectKeyPhrasesResponse;
(function (BatchDetectKeyPhrasesResponse) {
    /**
     * @internal
     */
    BatchDetectKeyPhrasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectKeyPhrasesResponse = exports.BatchDetectKeyPhrasesResponse || (exports.BatchDetectKeyPhrasesResponse = {}));
var BatchDetectSentimentRequest;
(function (BatchDetectSentimentRequest) {
    /**
     * @internal
     */
    BatchDetectSentimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TextList && { TextList: smithy_client_1.SENSITIVE_STRING }),
    });
})(BatchDetectSentimentRequest = exports.BatchDetectSentimentRequest || (exports.BatchDetectSentimentRequest = {}));
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
var BatchDetectSentimentItemResult;
(function (BatchDetectSentimentItemResult) {
    /**
     * @internal
     */
    BatchDetectSentimentItemResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectSentimentItemResult = exports.BatchDetectSentimentItemResult || (exports.BatchDetectSentimentItemResult = {}));
var BatchDetectSentimentResponse;
(function (BatchDetectSentimentResponse) {
    /**
     * @internal
     */
    BatchDetectSentimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectSentimentResponse = exports.BatchDetectSentimentResponse || (exports.BatchDetectSentimentResponse = {}));
var SyntaxLanguageCode;
(function (SyntaxLanguageCode) {
    SyntaxLanguageCode["DE"] = "de";
    SyntaxLanguageCode["EN"] = "en";
    SyntaxLanguageCode["ES"] = "es";
    SyntaxLanguageCode["FR"] = "fr";
    SyntaxLanguageCode["IT"] = "it";
    SyntaxLanguageCode["PT"] = "pt";
})(SyntaxLanguageCode = exports.SyntaxLanguageCode || (exports.SyntaxLanguageCode = {}));
var BatchDetectSyntaxRequest;
(function (BatchDetectSyntaxRequest) {
    /**
     * @internal
     */
    BatchDetectSyntaxRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TextList && { TextList: smithy_client_1.SENSITIVE_STRING }),
    });
})(BatchDetectSyntaxRequest = exports.BatchDetectSyntaxRequest || (exports.BatchDetectSyntaxRequest = {}));
var PartOfSpeechTagType;
(function (PartOfSpeechTagType) {
    PartOfSpeechTagType["ADJ"] = "ADJ";
    PartOfSpeechTagType["ADP"] = "ADP";
    PartOfSpeechTagType["ADV"] = "ADV";
    PartOfSpeechTagType["AUX"] = "AUX";
    PartOfSpeechTagType["CCONJ"] = "CCONJ";
    PartOfSpeechTagType["CONJ"] = "CONJ";
    PartOfSpeechTagType["DET"] = "DET";
    PartOfSpeechTagType["INTJ"] = "INTJ";
    PartOfSpeechTagType["NOUN"] = "NOUN";
    PartOfSpeechTagType["NUM"] = "NUM";
    PartOfSpeechTagType["O"] = "O";
    PartOfSpeechTagType["PART"] = "PART";
    PartOfSpeechTagType["PRON"] = "PRON";
    PartOfSpeechTagType["PROPN"] = "PROPN";
    PartOfSpeechTagType["PUNCT"] = "PUNCT";
    PartOfSpeechTagType["SCONJ"] = "SCONJ";
    PartOfSpeechTagType["SYM"] = "SYM";
    PartOfSpeechTagType["VERB"] = "VERB";
})(PartOfSpeechTagType = exports.PartOfSpeechTagType || (exports.PartOfSpeechTagType = {}));
var PartOfSpeechTag;
(function (PartOfSpeechTag) {
    /**
     * @internal
     */
    PartOfSpeechTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartOfSpeechTag = exports.PartOfSpeechTag || (exports.PartOfSpeechTag = {}));
var SyntaxToken;
(function (SyntaxToken) {
    /**
     * @internal
     */
    SyntaxToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyntaxToken = exports.SyntaxToken || (exports.SyntaxToken = {}));
var BatchDetectSyntaxItemResult;
(function (BatchDetectSyntaxItemResult) {
    /**
     * @internal
     */
    BatchDetectSyntaxItemResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectSyntaxItemResult = exports.BatchDetectSyntaxItemResult || (exports.BatchDetectSyntaxItemResult = {}));
var BatchDetectSyntaxResponse;
(function (BatchDetectSyntaxResponse) {
    /**
     * @internal
     */
    BatchDetectSyntaxResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDetectSyntaxResponse = exports.BatchDetectSyntaxResponse || (exports.BatchDetectSyntaxResponse = {}));
var ClassifierEvaluationMetrics;
(function (ClassifierEvaluationMetrics) {
    /**
     * @internal
     */
    ClassifierEvaluationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassifierEvaluationMetrics = exports.ClassifierEvaluationMetrics || (exports.ClassifierEvaluationMetrics = {}));
var ClassifierMetadata;
(function (ClassifierMetadata) {
    /**
     * @internal
     */
    ClassifierMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassifierMetadata = exports.ClassifierMetadata || (exports.ClassifierMetadata = {}));
var ClassifyDocumentRequest;
(function (ClassifyDocumentRequest) {
    /**
     * @internal
     */
    ClassifyDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(ClassifyDocumentRequest = exports.ClassifyDocumentRequest || (exports.ClassifyDocumentRequest = {}));
var DocumentClass;
(function (DocumentClass) {
    /**
     * @internal
     */
    DocumentClass.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClass = exports.DocumentClass || (exports.DocumentClass = {}));
var DocumentLabel;
(function (DocumentLabel) {
    /**
     * @internal
     */
    DocumentLabel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentLabel = exports.DocumentLabel || (exports.DocumentLabel = {}));
var ClassifyDocumentResponse;
(function (ClassifyDocumentResponse) {
    /**
     * @internal
     */
    ClassifyDocumentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassifyDocumentResponse = exports.ClassifyDocumentResponse || (exports.ClassifyDocumentResponse = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var ContainsPiiEntitiesRequest;
(function (ContainsPiiEntitiesRequest) {
    /**
     * @internal
     */
    ContainsPiiEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainsPiiEntitiesRequest = exports.ContainsPiiEntitiesRequest || (exports.ContainsPiiEntitiesRequest = {}));
var PiiEntityType;
(function (PiiEntityType) {
    PiiEntityType["ADDRESS"] = "ADDRESS";
    PiiEntityType["AGE"] = "AGE";
    PiiEntityType["ALL"] = "ALL";
    PiiEntityType["AWS_ACCESS_KEY"] = "AWS_ACCESS_KEY";
    PiiEntityType["AWS_SECRET_KEY"] = "AWS_SECRET_KEY";
    PiiEntityType["BANK_ACCOUNT_NUMBER"] = "BANK_ACCOUNT_NUMBER";
    PiiEntityType["BANK_ROUTING"] = "BANK_ROUTING";
    PiiEntityType["CREDIT_DEBIT_CVV"] = "CREDIT_DEBIT_CVV";
    PiiEntityType["CREDIT_DEBIT_EXPIRY"] = "CREDIT_DEBIT_EXPIRY";
    PiiEntityType["CREDIT_DEBIT_NUMBER"] = "CREDIT_DEBIT_NUMBER";
    PiiEntityType["DATE_TIME"] = "DATE_TIME";
    PiiEntityType["DRIVER_ID"] = "DRIVER_ID";
    PiiEntityType["EMAIL"] = "EMAIL";
    PiiEntityType["IP_ADDRESS"] = "IP_ADDRESS";
    PiiEntityType["MAC_ADDRESS"] = "MAC_ADDRESS";
    PiiEntityType["NAME"] = "NAME";
    PiiEntityType["PASSPORT_NUMBER"] = "PASSPORT_NUMBER";
    PiiEntityType["PASSWORD"] = "PASSWORD";
    PiiEntityType["PHONE"] = "PHONE";
    PiiEntityType["PIN"] = "PIN";
    PiiEntityType["SSN"] = "SSN";
    PiiEntityType["URL"] = "URL";
    PiiEntityType["USERNAME"] = "USERNAME";
})(PiiEntityType = exports.PiiEntityType || (exports.PiiEntityType = {}));
var EntityLabel;
(function (EntityLabel) {
    /**
     * @internal
     */
    EntityLabel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityLabel = exports.EntityLabel || (exports.EntityLabel = {}));
var ContainsPiiEntitiesResponse;
(function (ContainsPiiEntitiesResponse) {
    /**
     * @internal
     */
    ContainsPiiEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainsPiiEntitiesResponse = exports.ContainsPiiEntitiesResponse || (exports.ContainsPiiEntitiesResponse = {}));
var DocumentClassifierDataFormat;
(function (DocumentClassifierDataFormat) {
    DocumentClassifierDataFormat["AUGMENTED_MANIFEST"] = "AUGMENTED_MANIFEST";
    DocumentClassifierDataFormat["COMPREHEND_CSV"] = "COMPREHEND_CSV";
})(DocumentClassifierDataFormat = exports.DocumentClassifierDataFormat || (exports.DocumentClassifierDataFormat = {}));
var DocumentClassifierInputDataConfig;
(function (DocumentClassifierInputDataConfig) {
    /**
     * @internal
     */
    DocumentClassifierInputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClassifierInputDataConfig = exports.DocumentClassifierInputDataConfig || (exports.DocumentClassifierInputDataConfig = {}));
var DocumentClassifierMode;
(function (DocumentClassifierMode) {
    DocumentClassifierMode["MULTI_CLASS"] = "MULTI_CLASS";
    DocumentClassifierMode["MULTI_LABEL"] = "MULTI_LABEL";
})(DocumentClassifierMode = exports.DocumentClassifierMode || (exports.DocumentClassifierMode = {}));
var DocumentClassifierOutputDataConfig;
(function (DocumentClassifierOutputDataConfig) {
    /**
     * @internal
     */
    DocumentClassifierOutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClassifierOutputDataConfig = exports.DocumentClassifierOutputDataConfig || (exports.DocumentClassifierOutputDataConfig = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var CreateDocumentClassifierRequest;
(function (CreateDocumentClassifierRequest) {
    /**
     * @internal
     */
    CreateDocumentClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDocumentClassifierRequest = exports.CreateDocumentClassifierRequest || (exports.CreateDocumentClassifierRequest = {}));
var CreateDocumentClassifierResponse;
(function (CreateDocumentClassifierResponse) {
    /**
     * @internal
     */
    CreateDocumentClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDocumentClassifierResponse = exports.CreateDocumentClassifierResponse || (exports.CreateDocumentClassifierResponse = {}));
var KmsKeyValidationException;
(function (KmsKeyValidationException) {
    /**
     * @internal
     */
    KmsKeyValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KmsKeyValidationException = exports.KmsKeyValidationException || (exports.KmsKeyValidationException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var CreateEndpointRequest;
(function (CreateEndpointRequest) {
    /**
     * @internal
     */
    CreateEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointRequest = exports.CreateEndpointRequest || (exports.CreateEndpointRequest = {}));
var CreateEndpointResponse;
(function (CreateEndpointResponse) {
    /**
     * @internal
     */
    CreateEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointResponse = exports.CreateEndpointResponse || (exports.CreateEndpointResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var EntityRecognizerAnnotations;
(function (EntityRecognizerAnnotations) {
    /**
     * @internal
     */
    EntityRecognizerAnnotations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerAnnotations = exports.EntityRecognizerAnnotations || (exports.EntityRecognizerAnnotations = {}));
var EntityRecognizerDataFormat;
(function (EntityRecognizerDataFormat) {
    EntityRecognizerDataFormat["AUGMENTED_MANIFEST"] = "AUGMENTED_MANIFEST";
    EntityRecognizerDataFormat["COMPREHEND_CSV"] = "COMPREHEND_CSV";
})(EntityRecognizerDataFormat = exports.EntityRecognizerDataFormat || (exports.EntityRecognizerDataFormat = {}));
var EntityRecognizerDocuments;
(function (EntityRecognizerDocuments) {
    /**
     * @internal
     */
    EntityRecognizerDocuments.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerDocuments = exports.EntityRecognizerDocuments || (exports.EntityRecognizerDocuments = {}));
var EntityRecognizerEntityList;
(function (EntityRecognizerEntityList) {
    /**
     * @internal
     */
    EntityRecognizerEntityList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerEntityList = exports.EntityRecognizerEntityList || (exports.EntityRecognizerEntityList = {}));
var EntityTypesListItem;
(function (EntityTypesListItem) {
    /**
     * @internal
     */
    EntityTypesListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityTypesListItem = exports.EntityTypesListItem || (exports.EntityTypesListItem = {}));
var EntityRecognizerInputDataConfig;
(function (EntityRecognizerInputDataConfig) {
    /**
     * @internal
     */
    EntityRecognizerInputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerInputDataConfig = exports.EntityRecognizerInputDataConfig || (exports.EntityRecognizerInputDataConfig = {}));
var CreateEntityRecognizerRequest;
(function (CreateEntityRecognizerRequest) {
    /**
     * @internal
     */
    CreateEntityRecognizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEntityRecognizerRequest = exports.CreateEntityRecognizerRequest || (exports.CreateEntityRecognizerRequest = {}));
var CreateEntityRecognizerResponse;
(function (CreateEntityRecognizerResponse) {
    /**
     * @internal
     */
    CreateEntityRecognizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEntityRecognizerResponse = exports.CreateEntityRecognizerResponse || (exports.CreateEntityRecognizerResponse = {}));
var DeleteDocumentClassifierRequest;
(function (DeleteDocumentClassifierRequest) {
    /**
     * @internal
     */
    DeleteDocumentClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDocumentClassifierRequest = exports.DeleteDocumentClassifierRequest || (exports.DeleteDocumentClassifierRequest = {}));
var DeleteDocumentClassifierResponse;
(function (DeleteDocumentClassifierResponse) {
    /**
     * @internal
     */
    DeleteDocumentClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDocumentClassifierResponse = exports.DeleteDocumentClassifierResponse || (exports.DeleteDocumentClassifierResponse = {}));
var DeleteEndpointRequest;
(function (DeleteEndpointRequest) {
    /**
     * @internal
     */
    DeleteEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointRequest = exports.DeleteEndpointRequest || (exports.DeleteEndpointRequest = {}));
var DeleteEndpointResponse;
(function (DeleteEndpointResponse) {
    /**
     * @internal
     */
    DeleteEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointResponse = exports.DeleteEndpointResponse || (exports.DeleteEndpointResponse = {}));
var DeleteEntityRecognizerRequest;
(function (DeleteEntityRecognizerRequest) {
    /**
     * @internal
     */
    DeleteEntityRecognizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEntityRecognizerRequest = exports.DeleteEntityRecognizerRequest || (exports.DeleteEntityRecognizerRequest = {}));
var DeleteEntityRecognizerResponse;
(function (DeleteEntityRecognizerResponse) {
    /**
     * @internal
     */
    DeleteEntityRecognizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEntityRecognizerResponse = exports.DeleteEntityRecognizerResponse || (exports.DeleteEntityRecognizerResponse = {}));
var DescribeDocumentClassificationJobRequest;
(function (DescribeDocumentClassificationJobRequest) {
    /**
     * @internal
     */
    DescribeDocumentClassificationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentClassificationJobRequest = exports.DescribeDocumentClassificationJobRequest || (exports.DescribeDocumentClassificationJobRequest = {}));
var InputFormat;
(function (InputFormat) {
    InputFormat["ONE_DOC_PER_FILE"] = "ONE_DOC_PER_FILE";
    InputFormat["ONE_DOC_PER_LINE"] = "ONE_DOC_PER_LINE";
})(InputFormat = exports.InputFormat || (exports.InputFormat = {}));
var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    /**
     * @internal
     */
    OutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var DocumentClassificationJobProperties;
(function (DocumentClassificationJobProperties) {
    /**
     * @internal
     */
    DocumentClassificationJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClassificationJobProperties = exports.DocumentClassificationJobProperties || (exports.DocumentClassificationJobProperties = {}));
var DescribeDocumentClassificationJobResponse;
(function (DescribeDocumentClassificationJobResponse) {
    /**
     * @internal
     */
    DescribeDocumentClassificationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentClassificationJobResponse = exports.DescribeDocumentClassificationJobResponse || (exports.DescribeDocumentClassificationJobResponse = {}));
var JobNotFoundException;
(function (JobNotFoundException) {
    /**
     * @internal
     */
    JobNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobNotFoundException = exports.JobNotFoundException || (exports.JobNotFoundException = {}));
var DescribeDocumentClassifierRequest;
(function (DescribeDocumentClassifierRequest) {
    /**
     * @internal
     */
    DescribeDocumentClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentClassifierRequest = exports.DescribeDocumentClassifierRequest || (exports.DescribeDocumentClassifierRequest = {}));
var ModelStatus;
(function (ModelStatus) {
    ModelStatus["DELETING"] = "DELETING";
    ModelStatus["IN_ERROR"] = "IN_ERROR";
    ModelStatus["STOPPED"] = "STOPPED";
    ModelStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    ModelStatus["SUBMITTED"] = "SUBMITTED";
    ModelStatus["TRAINED"] = "TRAINED";
    ModelStatus["TRAINING"] = "TRAINING";
})(ModelStatus = exports.ModelStatus || (exports.ModelStatus = {}));
var DocumentClassifierProperties;
(function (DocumentClassifierProperties) {
    /**
     * @internal
     */
    DocumentClassifierProperties.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClassifierMetadata && { ClassifierMetadata: smithy_client_1.SENSITIVE_STRING }),
    });
})(DocumentClassifierProperties = exports.DocumentClassifierProperties || (exports.DocumentClassifierProperties = {}));
var DescribeDocumentClassifierResponse;
(function (DescribeDocumentClassifierResponse) {
    /**
     * @internal
     */
    DescribeDocumentClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentClassifierProperties && {
            DocumentClassifierProperties: DocumentClassifierProperties.filterSensitiveLog(obj.DocumentClassifierProperties),
        }),
    });
})(DescribeDocumentClassifierResponse = exports.DescribeDocumentClassifierResponse || (exports.DescribeDocumentClassifierResponse = {}));
var DescribeDominantLanguageDetectionJobRequest;
(function (DescribeDominantLanguageDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeDominantLanguageDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDominantLanguageDetectionJobRequest = exports.DescribeDominantLanguageDetectionJobRequest || (exports.DescribeDominantLanguageDetectionJobRequest = {}));
var DominantLanguageDetectionJobProperties;
(function (DominantLanguageDetectionJobProperties) {
    /**
     * @internal
     */
    DominantLanguageDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DominantLanguageDetectionJobProperties = exports.DominantLanguageDetectionJobProperties || (exports.DominantLanguageDetectionJobProperties = {}));
var DescribeDominantLanguageDetectionJobResponse;
(function (DescribeDominantLanguageDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeDominantLanguageDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDominantLanguageDetectionJobResponse = exports.DescribeDominantLanguageDetectionJobResponse || (exports.DescribeDominantLanguageDetectionJobResponse = {}));
var DescribeEndpointRequest;
(function (DescribeEndpointRequest) {
    /**
     * @internal
     */
    DescribeEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointRequest = exports.DescribeEndpointRequest || (exports.DescribeEndpointRequest = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["CREATING"] = "CREATING";
    EndpointStatus["DELETING"] = "DELETING";
    EndpointStatus["FAILED"] = "FAILED";
    EndpointStatus["IN_SERVICE"] = "IN_SERVICE";
    EndpointStatus["UPDATING"] = "UPDATING";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var EndpointProperties;
(function (EndpointProperties) {
    /**
     * @internal
     */
    EndpointProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointProperties = exports.EndpointProperties || (exports.EndpointProperties = {}));
var DescribeEndpointResponse;
(function (DescribeEndpointResponse) {
    /**
     * @internal
     */
    DescribeEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointResponse = exports.DescribeEndpointResponse || (exports.DescribeEndpointResponse = {}));
var DescribeEntitiesDetectionJobRequest;
(function (DescribeEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntitiesDetectionJobRequest = exports.DescribeEntitiesDetectionJobRequest || (exports.DescribeEntitiesDetectionJobRequest = {}));
var EntitiesDetectionJobProperties;
(function (EntitiesDetectionJobProperties) {
    /**
     * @internal
     */
    EntitiesDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitiesDetectionJobProperties = exports.EntitiesDetectionJobProperties || (exports.EntitiesDetectionJobProperties = {}));
var DescribeEntitiesDetectionJobResponse;
(function (DescribeEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntitiesDetectionJobResponse = exports.DescribeEntitiesDetectionJobResponse || (exports.DescribeEntitiesDetectionJobResponse = {}));
var DescribeEntityRecognizerRequest;
(function (DescribeEntityRecognizerRequest) {
    /**
     * @internal
     */
    DescribeEntityRecognizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntityRecognizerRequest = exports.DescribeEntityRecognizerRequest || (exports.DescribeEntityRecognizerRequest = {}));
var EntityTypesEvaluationMetrics;
(function (EntityTypesEvaluationMetrics) {
    /**
     * @internal
     */
    EntityTypesEvaluationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityTypesEvaluationMetrics = exports.EntityTypesEvaluationMetrics || (exports.EntityTypesEvaluationMetrics = {}));
var EntityRecognizerMetadataEntityTypesListItem;
(function (EntityRecognizerMetadataEntityTypesListItem) {
    /**
     * @internal
     */
    EntityRecognizerMetadataEntityTypesListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerMetadataEntityTypesListItem = exports.EntityRecognizerMetadataEntityTypesListItem || (exports.EntityRecognizerMetadataEntityTypesListItem = {}));
var EntityRecognizerEvaluationMetrics;
(function (EntityRecognizerEvaluationMetrics) {
    /**
     * @internal
     */
    EntityRecognizerEvaluationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerEvaluationMetrics = exports.EntityRecognizerEvaluationMetrics || (exports.EntityRecognizerEvaluationMetrics = {}));
var EntityRecognizerMetadata;
(function (EntityRecognizerMetadata) {
    /**
     * @internal
     */
    EntityRecognizerMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerMetadata = exports.EntityRecognizerMetadata || (exports.EntityRecognizerMetadata = {}));
var EntityRecognizerProperties;
(function (EntityRecognizerProperties) {
    /**
     * @internal
     */
    EntityRecognizerProperties.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RecognizerMetadata && { RecognizerMetadata: smithy_client_1.SENSITIVE_STRING }),
    });
})(EntityRecognizerProperties = exports.EntityRecognizerProperties || (exports.EntityRecognizerProperties = {}));
var DescribeEntityRecognizerResponse;
(function (DescribeEntityRecognizerResponse) {
    /**
     * @internal
     */
    DescribeEntityRecognizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EntityRecognizerProperties && {
            EntityRecognizerProperties: EntityRecognizerProperties.filterSensitiveLog(obj.EntityRecognizerProperties),
        }),
    });
})(DescribeEntityRecognizerResponse = exports.DescribeEntityRecognizerResponse || (exports.DescribeEntityRecognizerResponse = {}));
var DescribeEventsDetectionJobRequest;
(function (DescribeEventsDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeEventsDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsDetectionJobRequest = exports.DescribeEventsDetectionJobRequest || (exports.DescribeEventsDetectionJobRequest = {}));
var EventsDetectionJobProperties;
(function (EventsDetectionJobProperties) {
    /**
     * @internal
     */
    EventsDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsDetectionJobProperties = exports.EventsDetectionJobProperties || (exports.EventsDetectionJobProperties = {}));
var DescribeEventsDetectionJobResponse;
(function (DescribeEventsDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeEventsDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsDetectionJobResponse = exports.DescribeEventsDetectionJobResponse || (exports.DescribeEventsDetectionJobResponse = {}));
var DescribeKeyPhrasesDetectionJobRequest;
(function (DescribeKeyPhrasesDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeKeyPhrasesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyPhrasesDetectionJobRequest = exports.DescribeKeyPhrasesDetectionJobRequest || (exports.DescribeKeyPhrasesDetectionJobRequest = {}));
var KeyPhrasesDetectionJobProperties;
(function (KeyPhrasesDetectionJobProperties) {
    /**
     * @internal
     */
    KeyPhrasesDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPhrasesDetectionJobProperties = exports.KeyPhrasesDetectionJobProperties || (exports.KeyPhrasesDetectionJobProperties = {}));
var DescribeKeyPhrasesDetectionJobResponse;
(function (DescribeKeyPhrasesDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeKeyPhrasesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyPhrasesDetectionJobResponse = exports.DescribeKeyPhrasesDetectionJobResponse || (exports.DescribeKeyPhrasesDetectionJobResponse = {}));
var DescribePiiEntitiesDetectionJobRequest;
(function (DescribePiiEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    DescribePiiEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePiiEntitiesDetectionJobRequest = exports.DescribePiiEntitiesDetectionJobRequest || (exports.DescribePiiEntitiesDetectionJobRequest = {}));
var PiiEntitiesDetectionMode;
(function (PiiEntitiesDetectionMode) {
    PiiEntitiesDetectionMode["ONLY_OFFSETS"] = "ONLY_OFFSETS";
    PiiEntitiesDetectionMode["ONLY_REDACTION"] = "ONLY_REDACTION";
})(PiiEntitiesDetectionMode = exports.PiiEntitiesDetectionMode || (exports.PiiEntitiesDetectionMode = {}));
var PiiOutputDataConfig;
(function (PiiOutputDataConfig) {
    /**
     * @internal
     */
    PiiOutputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PiiOutputDataConfig = exports.PiiOutputDataConfig || (exports.PiiOutputDataConfig = {}));
var PiiEntitiesDetectionMaskMode;
(function (PiiEntitiesDetectionMaskMode) {
    PiiEntitiesDetectionMaskMode["MASK"] = "MASK";
    PiiEntitiesDetectionMaskMode["REPLACE_WITH_PII_ENTITY_TYPE"] = "REPLACE_WITH_PII_ENTITY_TYPE";
})(PiiEntitiesDetectionMaskMode = exports.PiiEntitiesDetectionMaskMode || (exports.PiiEntitiesDetectionMaskMode = {}));
var RedactionConfig;
(function (RedactionConfig) {
    /**
     * @internal
     */
    RedactionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedactionConfig = exports.RedactionConfig || (exports.RedactionConfig = {}));
var PiiEntitiesDetectionJobProperties;
(function (PiiEntitiesDetectionJobProperties) {
    /**
     * @internal
     */
    PiiEntitiesDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PiiEntitiesDetectionJobProperties = exports.PiiEntitiesDetectionJobProperties || (exports.PiiEntitiesDetectionJobProperties = {}));
var DescribePiiEntitiesDetectionJobResponse;
(function (DescribePiiEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    DescribePiiEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePiiEntitiesDetectionJobResponse = exports.DescribePiiEntitiesDetectionJobResponse || (exports.DescribePiiEntitiesDetectionJobResponse = {}));
var DescribeSentimentDetectionJobRequest;
(function (DescribeSentimentDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeSentimentDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSentimentDetectionJobRequest = exports.DescribeSentimentDetectionJobRequest || (exports.DescribeSentimentDetectionJobRequest = {}));
var SentimentDetectionJobProperties;
(function (SentimentDetectionJobProperties) {
    /**
     * @internal
     */
    SentimentDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SentimentDetectionJobProperties = exports.SentimentDetectionJobProperties || (exports.SentimentDetectionJobProperties = {}));
var DescribeSentimentDetectionJobResponse;
(function (DescribeSentimentDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeSentimentDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSentimentDetectionJobResponse = exports.DescribeSentimentDetectionJobResponse || (exports.DescribeSentimentDetectionJobResponse = {}));
var DescribeTopicsDetectionJobRequest;
(function (DescribeTopicsDetectionJobRequest) {
    /**
     * @internal
     */
    DescribeTopicsDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTopicsDetectionJobRequest = exports.DescribeTopicsDetectionJobRequest || (exports.DescribeTopicsDetectionJobRequest = {}));
var TopicsDetectionJobProperties;
(function (TopicsDetectionJobProperties) {
    /**
     * @internal
     */
    TopicsDetectionJobProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicsDetectionJobProperties = exports.TopicsDetectionJobProperties || (exports.TopicsDetectionJobProperties = {}));
var DescribeTopicsDetectionJobResponse;
(function (DescribeTopicsDetectionJobResponse) {
    /**
     * @internal
     */
    DescribeTopicsDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTopicsDetectionJobResponse = exports.DescribeTopicsDetectionJobResponse || (exports.DescribeTopicsDetectionJobResponse = {}));
var DetectDominantLanguageRequest;
(function (DetectDominantLanguageRequest) {
    /**
     * @internal
     */
    DetectDominantLanguageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(DetectDominantLanguageRequest = exports.DetectDominantLanguageRequest || (exports.DetectDominantLanguageRequest = {}));
var DetectDominantLanguageResponse;
(function (DetectDominantLanguageResponse) {
    /**
     * @internal
     */
    DetectDominantLanguageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectDominantLanguageResponse = exports.DetectDominantLanguageResponse || (exports.DetectDominantLanguageResponse = {}));
var DetectEntitiesRequest;
(function (DetectEntitiesRequest) {
    /**
     * @internal
     */
    DetectEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(DetectEntitiesRequest = exports.DetectEntitiesRequest || (exports.DetectEntitiesRequest = {}));
var DetectEntitiesResponse;
(function (DetectEntitiesResponse) {
    /**
     * @internal
     */
    DetectEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectEntitiesResponse = exports.DetectEntitiesResponse || (exports.DetectEntitiesResponse = {}));
var DetectKeyPhrasesRequest;
(function (DetectKeyPhrasesRequest) {
    /**
     * @internal
     */
    DetectKeyPhrasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(DetectKeyPhrasesRequest = exports.DetectKeyPhrasesRequest || (exports.DetectKeyPhrasesRequest = {}));
var DetectKeyPhrasesResponse;
(function (DetectKeyPhrasesResponse) {
    /**
     * @internal
     */
    DetectKeyPhrasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectKeyPhrasesResponse = exports.DetectKeyPhrasesResponse || (exports.DetectKeyPhrasesResponse = {}));
var DetectPiiEntitiesRequest;
(function (DetectPiiEntitiesRequest) {
    /**
     * @internal
     */
    DetectPiiEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectPiiEntitiesRequest = exports.DetectPiiEntitiesRequest || (exports.DetectPiiEntitiesRequest = {}));
var PiiEntity;
(function (PiiEntity) {
    /**
     * @internal
     */
    PiiEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PiiEntity = exports.PiiEntity || (exports.PiiEntity = {}));
var DetectPiiEntitiesResponse;
(function (DetectPiiEntitiesResponse) {
    /**
     * @internal
     */
    DetectPiiEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectPiiEntitiesResponse = exports.DetectPiiEntitiesResponse || (exports.DetectPiiEntitiesResponse = {}));
var DetectSentimentRequest;
(function (DetectSentimentRequest) {
    /**
     * @internal
     */
    DetectSentimentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(DetectSentimentRequest = exports.DetectSentimentRequest || (exports.DetectSentimentRequest = {}));
var DetectSentimentResponse;
(function (DetectSentimentResponse) {
    /**
     * @internal
     */
    DetectSentimentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectSentimentResponse = exports.DetectSentimentResponse || (exports.DetectSentimentResponse = {}));
var DetectSyntaxRequest;
(function (DetectSyntaxRequest) {
    /**
     * @internal
     */
    DetectSyntaxRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(DetectSyntaxRequest = exports.DetectSyntaxRequest || (exports.DetectSyntaxRequest = {}));
var DetectSyntaxResponse;
(function (DetectSyntaxResponse) {
    /**
     * @internal
     */
    DetectSyntaxResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectSyntaxResponse = exports.DetectSyntaxResponse || (exports.DetectSyntaxResponse = {}));
var InvalidFilterException;
(function (InvalidFilterException) {
    /**
     * @internal
     */
    InvalidFilterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilterException = exports.InvalidFilterException || (exports.InvalidFilterException = {}));
var DocumentClassificationJobFilter;
(function (DocumentClassificationJobFilter) {
    /**
     * @internal
     */
    DocumentClassificationJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClassificationJobFilter = exports.DocumentClassificationJobFilter || (exports.DocumentClassificationJobFilter = {}));
var ListDocumentClassificationJobsRequest;
(function (ListDocumentClassificationJobsRequest) {
    /**
     * @internal
     */
    ListDocumentClassificationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentClassificationJobsRequest = exports.ListDocumentClassificationJobsRequest || (exports.ListDocumentClassificationJobsRequest = {}));
var ListDocumentClassificationJobsResponse;
(function (ListDocumentClassificationJobsResponse) {
    /**
     * @internal
     */
    ListDocumentClassificationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentClassificationJobsResponse = exports.ListDocumentClassificationJobsResponse || (exports.ListDocumentClassificationJobsResponse = {}));
var DocumentClassifierFilter;
(function (DocumentClassifierFilter) {
    /**
     * @internal
     */
    DocumentClassifierFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentClassifierFilter = exports.DocumentClassifierFilter || (exports.DocumentClassifierFilter = {}));
var ListDocumentClassifiersRequest;
(function (ListDocumentClassifiersRequest) {
    /**
     * @internal
     */
    ListDocumentClassifiersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentClassifiersRequest = exports.ListDocumentClassifiersRequest || (exports.ListDocumentClassifiersRequest = {}));
var ListDocumentClassifiersResponse;
(function (ListDocumentClassifiersResponse) {
    /**
     * @internal
     */
    ListDocumentClassifiersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentClassifierPropertiesList && {
            DocumentClassifierPropertiesList: obj.DocumentClassifierPropertiesList.map((item) => DocumentClassifierProperties.filterSensitiveLog(item)),
        }),
    });
})(ListDocumentClassifiersResponse = exports.ListDocumentClassifiersResponse || (exports.ListDocumentClassifiersResponse = {}));
var DominantLanguageDetectionJobFilter;
(function (DominantLanguageDetectionJobFilter) {
    /**
     * @internal
     */
    DominantLanguageDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DominantLanguageDetectionJobFilter = exports.DominantLanguageDetectionJobFilter || (exports.DominantLanguageDetectionJobFilter = {}));
var ListDominantLanguageDetectionJobsRequest;
(function (ListDominantLanguageDetectionJobsRequest) {
    /**
     * @internal
     */
    ListDominantLanguageDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDominantLanguageDetectionJobsRequest = exports.ListDominantLanguageDetectionJobsRequest || (exports.ListDominantLanguageDetectionJobsRequest = {}));
var ListDominantLanguageDetectionJobsResponse;
(function (ListDominantLanguageDetectionJobsResponse) {
    /**
     * @internal
     */
    ListDominantLanguageDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDominantLanguageDetectionJobsResponse = exports.ListDominantLanguageDetectionJobsResponse || (exports.ListDominantLanguageDetectionJobsResponse = {}));
var EndpointFilter;
(function (EndpointFilter) {
    /**
     * @internal
     */
    EndpointFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointFilter = exports.EndpointFilter || (exports.EndpointFilter = {}));
var ListEndpointsRequest;
(function (ListEndpointsRequest) {
    /**
     * @internal
     */
    ListEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsRequest = exports.ListEndpointsRequest || (exports.ListEndpointsRequest = {}));
var ListEndpointsResponse;
(function (ListEndpointsResponse) {
    /**
     * @internal
     */
    ListEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsResponse = exports.ListEndpointsResponse || (exports.ListEndpointsResponse = {}));
var EntitiesDetectionJobFilter;
(function (EntitiesDetectionJobFilter) {
    /**
     * @internal
     */
    EntitiesDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitiesDetectionJobFilter = exports.EntitiesDetectionJobFilter || (exports.EntitiesDetectionJobFilter = {}));
var ListEntitiesDetectionJobsRequest;
(function (ListEntitiesDetectionJobsRequest) {
    /**
     * @internal
     */
    ListEntitiesDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesDetectionJobsRequest = exports.ListEntitiesDetectionJobsRequest || (exports.ListEntitiesDetectionJobsRequest = {}));
var ListEntitiesDetectionJobsResponse;
(function (ListEntitiesDetectionJobsResponse) {
    /**
     * @internal
     */
    ListEntitiesDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesDetectionJobsResponse = exports.ListEntitiesDetectionJobsResponse || (exports.ListEntitiesDetectionJobsResponse = {}));
var EntityRecognizerFilter;
(function (EntityRecognizerFilter) {
    /**
     * @internal
     */
    EntityRecognizerFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityRecognizerFilter = exports.EntityRecognizerFilter || (exports.EntityRecognizerFilter = {}));
var ListEntityRecognizersRequest;
(function (ListEntityRecognizersRequest) {
    /**
     * @internal
     */
    ListEntityRecognizersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntityRecognizersRequest = exports.ListEntityRecognizersRequest || (exports.ListEntityRecognizersRequest = {}));
var ListEntityRecognizersResponse;
(function (ListEntityRecognizersResponse) {
    /**
     * @internal
     */
    ListEntityRecognizersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EntityRecognizerPropertiesList && {
            EntityRecognizerPropertiesList: obj.EntityRecognizerPropertiesList.map((item) => EntityRecognizerProperties.filterSensitiveLog(item)),
        }),
    });
})(ListEntityRecognizersResponse = exports.ListEntityRecognizersResponse || (exports.ListEntityRecognizersResponse = {}));
var EventsDetectionJobFilter;
(function (EventsDetectionJobFilter) {
    /**
     * @internal
     */
    EventsDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsDetectionJobFilter = exports.EventsDetectionJobFilter || (exports.EventsDetectionJobFilter = {}));
var ListEventsDetectionJobsRequest;
(function (ListEventsDetectionJobsRequest) {
    /**
     * @internal
     */
    ListEventsDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventsDetectionJobsRequest = exports.ListEventsDetectionJobsRequest || (exports.ListEventsDetectionJobsRequest = {}));
var ListEventsDetectionJobsResponse;
(function (ListEventsDetectionJobsResponse) {
    /**
     * @internal
     */
    ListEventsDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventsDetectionJobsResponse = exports.ListEventsDetectionJobsResponse || (exports.ListEventsDetectionJobsResponse = {}));
var KeyPhrasesDetectionJobFilter;
(function (KeyPhrasesDetectionJobFilter) {
    /**
     * @internal
     */
    KeyPhrasesDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPhrasesDetectionJobFilter = exports.KeyPhrasesDetectionJobFilter || (exports.KeyPhrasesDetectionJobFilter = {}));
var ListKeyPhrasesDetectionJobsRequest;
(function (ListKeyPhrasesDetectionJobsRequest) {
    /**
     * @internal
     */
    ListKeyPhrasesDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeyPhrasesDetectionJobsRequest = exports.ListKeyPhrasesDetectionJobsRequest || (exports.ListKeyPhrasesDetectionJobsRequest = {}));
var ListKeyPhrasesDetectionJobsResponse;
(function (ListKeyPhrasesDetectionJobsResponse) {
    /**
     * @internal
     */
    ListKeyPhrasesDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKeyPhrasesDetectionJobsResponse = exports.ListKeyPhrasesDetectionJobsResponse || (exports.ListKeyPhrasesDetectionJobsResponse = {}));
var PiiEntitiesDetectionJobFilter;
(function (PiiEntitiesDetectionJobFilter) {
    /**
     * @internal
     */
    PiiEntitiesDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PiiEntitiesDetectionJobFilter = exports.PiiEntitiesDetectionJobFilter || (exports.PiiEntitiesDetectionJobFilter = {}));
var ListPiiEntitiesDetectionJobsRequest;
(function (ListPiiEntitiesDetectionJobsRequest) {
    /**
     * @internal
     */
    ListPiiEntitiesDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPiiEntitiesDetectionJobsRequest = exports.ListPiiEntitiesDetectionJobsRequest || (exports.ListPiiEntitiesDetectionJobsRequest = {}));
var ListPiiEntitiesDetectionJobsResponse;
(function (ListPiiEntitiesDetectionJobsResponse) {
    /**
     * @internal
     */
    ListPiiEntitiesDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPiiEntitiesDetectionJobsResponse = exports.ListPiiEntitiesDetectionJobsResponse || (exports.ListPiiEntitiesDetectionJobsResponse = {}));
var SentimentDetectionJobFilter;
(function (SentimentDetectionJobFilter) {
    /**
     * @internal
     */
    SentimentDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SentimentDetectionJobFilter = exports.SentimentDetectionJobFilter || (exports.SentimentDetectionJobFilter = {}));
var ListSentimentDetectionJobsRequest;
(function (ListSentimentDetectionJobsRequest) {
    /**
     * @internal
     */
    ListSentimentDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSentimentDetectionJobsRequest = exports.ListSentimentDetectionJobsRequest || (exports.ListSentimentDetectionJobsRequest = {}));
var ListSentimentDetectionJobsResponse;
(function (ListSentimentDetectionJobsResponse) {
    /**
     * @internal
     */
    ListSentimentDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSentimentDetectionJobsResponse = exports.ListSentimentDetectionJobsResponse || (exports.ListSentimentDetectionJobsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var TopicsDetectionJobFilter;
(function (TopicsDetectionJobFilter) {
    /**
     * @internal
     */
    TopicsDetectionJobFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicsDetectionJobFilter = exports.TopicsDetectionJobFilter || (exports.TopicsDetectionJobFilter = {}));
var ListTopicsDetectionJobsRequest;
(function (ListTopicsDetectionJobsRequest) {
    /**
     * @internal
     */
    ListTopicsDetectionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicsDetectionJobsRequest = exports.ListTopicsDetectionJobsRequest || (exports.ListTopicsDetectionJobsRequest = {}));
var ListTopicsDetectionJobsResponse;
(function (ListTopicsDetectionJobsResponse) {
    /**
     * @internal
     */
    ListTopicsDetectionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicsDetectionJobsResponse = exports.ListTopicsDetectionJobsResponse || (exports.ListTopicsDetectionJobsResponse = {}));
var StartDocumentClassificationJobRequest;
(function (StartDocumentClassificationJobRequest) {
    /**
     * @internal
     */
    StartDocumentClassificationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDocumentClassificationJobRequest = exports.StartDocumentClassificationJobRequest || (exports.StartDocumentClassificationJobRequest = {}));
var StartDocumentClassificationJobResponse;
(function (StartDocumentClassificationJobResponse) {
    /**
     * @internal
     */
    StartDocumentClassificationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDocumentClassificationJobResponse = exports.StartDocumentClassificationJobResponse || (exports.StartDocumentClassificationJobResponse = {}));
var StartDominantLanguageDetectionJobRequest;
(function (StartDominantLanguageDetectionJobRequest) {
    /**
     * @internal
     */
    StartDominantLanguageDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDominantLanguageDetectionJobRequest = exports.StartDominantLanguageDetectionJobRequest || (exports.StartDominantLanguageDetectionJobRequest = {}));
var StartDominantLanguageDetectionJobResponse;
(function (StartDominantLanguageDetectionJobResponse) {
    /**
     * @internal
     */
    StartDominantLanguageDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDominantLanguageDetectionJobResponse = exports.StartDominantLanguageDetectionJobResponse || (exports.StartDominantLanguageDetectionJobResponse = {}));
var StartEntitiesDetectionJobRequest;
(function (StartEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    StartEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEntitiesDetectionJobRequest = exports.StartEntitiesDetectionJobRequest || (exports.StartEntitiesDetectionJobRequest = {}));
var StartEntitiesDetectionJobResponse;
(function (StartEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    StartEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEntitiesDetectionJobResponse = exports.StartEntitiesDetectionJobResponse || (exports.StartEntitiesDetectionJobResponse = {}));
var StartEventsDetectionJobRequest;
(function (StartEventsDetectionJobRequest) {
    /**
     * @internal
     */
    StartEventsDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEventsDetectionJobRequest = exports.StartEventsDetectionJobRequest || (exports.StartEventsDetectionJobRequest = {}));
var StartEventsDetectionJobResponse;
(function (StartEventsDetectionJobResponse) {
    /**
     * @internal
     */
    StartEventsDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartEventsDetectionJobResponse = exports.StartEventsDetectionJobResponse || (exports.StartEventsDetectionJobResponse = {}));
var StartKeyPhrasesDetectionJobRequest;
(function (StartKeyPhrasesDetectionJobRequest) {
    /**
     * @internal
     */
    StartKeyPhrasesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartKeyPhrasesDetectionJobRequest = exports.StartKeyPhrasesDetectionJobRequest || (exports.StartKeyPhrasesDetectionJobRequest = {}));
var StartKeyPhrasesDetectionJobResponse;
(function (StartKeyPhrasesDetectionJobResponse) {
    /**
     * @internal
     */
    StartKeyPhrasesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartKeyPhrasesDetectionJobResponse = exports.StartKeyPhrasesDetectionJobResponse || (exports.StartKeyPhrasesDetectionJobResponse = {}));
var StartPiiEntitiesDetectionJobRequest;
(function (StartPiiEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    StartPiiEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPiiEntitiesDetectionJobRequest = exports.StartPiiEntitiesDetectionJobRequest || (exports.StartPiiEntitiesDetectionJobRequest = {}));
var StartPiiEntitiesDetectionJobResponse;
(function (StartPiiEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    StartPiiEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPiiEntitiesDetectionJobResponse = exports.StartPiiEntitiesDetectionJobResponse || (exports.StartPiiEntitiesDetectionJobResponse = {}));
var StartSentimentDetectionJobRequest;
(function (StartSentimentDetectionJobRequest) {
    /**
     * @internal
     */
    StartSentimentDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSentimentDetectionJobRequest = exports.StartSentimentDetectionJobRequest || (exports.StartSentimentDetectionJobRequest = {}));
var StartSentimentDetectionJobResponse;
(function (StartSentimentDetectionJobResponse) {
    /**
     * @internal
     */
    StartSentimentDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSentimentDetectionJobResponse = exports.StartSentimentDetectionJobResponse || (exports.StartSentimentDetectionJobResponse = {}));
var StartTopicsDetectionJobRequest;
(function (StartTopicsDetectionJobRequest) {
    /**
     * @internal
     */
    StartTopicsDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTopicsDetectionJobRequest = exports.StartTopicsDetectionJobRequest || (exports.StartTopicsDetectionJobRequest = {}));
var StartTopicsDetectionJobResponse;
(function (StartTopicsDetectionJobResponse) {
    /**
     * @internal
     */
    StartTopicsDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTopicsDetectionJobResponse = exports.StartTopicsDetectionJobResponse || (exports.StartTopicsDetectionJobResponse = {}));
var StopDominantLanguageDetectionJobRequest;
(function (StopDominantLanguageDetectionJobRequest) {
    /**
     * @internal
     */
    StopDominantLanguageDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDominantLanguageDetectionJobRequest = exports.StopDominantLanguageDetectionJobRequest || (exports.StopDominantLanguageDetectionJobRequest = {}));
var StopDominantLanguageDetectionJobResponse;
(function (StopDominantLanguageDetectionJobResponse) {
    /**
     * @internal
     */
    StopDominantLanguageDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDominantLanguageDetectionJobResponse = exports.StopDominantLanguageDetectionJobResponse || (exports.StopDominantLanguageDetectionJobResponse = {}));
var StopEntitiesDetectionJobRequest;
(function (StopEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    StopEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEntitiesDetectionJobRequest = exports.StopEntitiesDetectionJobRequest || (exports.StopEntitiesDetectionJobRequest = {}));
var StopEntitiesDetectionJobResponse;
(function (StopEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    StopEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEntitiesDetectionJobResponse = exports.StopEntitiesDetectionJobResponse || (exports.StopEntitiesDetectionJobResponse = {}));
var StopEventsDetectionJobRequest;
(function (StopEventsDetectionJobRequest) {
    /**
     * @internal
     */
    StopEventsDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEventsDetectionJobRequest = exports.StopEventsDetectionJobRequest || (exports.StopEventsDetectionJobRequest = {}));
var StopEventsDetectionJobResponse;
(function (StopEventsDetectionJobResponse) {
    /**
     * @internal
     */
    StopEventsDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopEventsDetectionJobResponse = exports.StopEventsDetectionJobResponse || (exports.StopEventsDetectionJobResponse = {}));
var StopKeyPhrasesDetectionJobRequest;
(function (StopKeyPhrasesDetectionJobRequest) {
    /**
     * @internal
     */
    StopKeyPhrasesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopKeyPhrasesDetectionJobRequest = exports.StopKeyPhrasesDetectionJobRequest || (exports.StopKeyPhrasesDetectionJobRequest = {}));
var StopKeyPhrasesDetectionJobResponse;
(function (StopKeyPhrasesDetectionJobResponse) {
    /**
     * @internal
     */
    StopKeyPhrasesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopKeyPhrasesDetectionJobResponse = exports.StopKeyPhrasesDetectionJobResponse || (exports.StopKeyPhrasesDetectionJobResponse = {}));
var StopPiiEntitiesDetectionJobRequest;
(function (StopPiiEntitiesDetectionJobRequest) {
    /**
     * @internal
     */
    StopPiiEntitiesDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPiiEntitiesDetectionJobRequest = exports.StopPiiEntitiesDetectionJobRequest || (exports.StopPiiEntitiesDetectionJobRequest = {}));
var StopPiiEntitiesDetectionJobResponse;
(function (StopPiiEntitiesDetectionJobResponse) {
    /**
     * @internal
     */
    StopPiiEntitiesDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPiiEntitiesDetectionJobResponse = exports.StopPiiEntitiesDetectionJobResponse || (exports.StopPiiEntitiesDetectionJobResponse = {}));
var StopSentimentDetectionJobRequest;
(function (StopSentimentDetectionJobRequest) {
    /**
     * @internal
     */
    StopSentimentDetectionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopSentimentDetectionJobRequest = exports.StopSentimentDetectionJobRequest || (exports.StopSentimentDetectionJobRequest = {}));
var StopSentimentDetectionJobResponse;
(function (StopSentimentDetectionJobResponse) {
    /**
     * @internal
     */
    StopSentimentDetectionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopSentimentDetectionJobResponse = exports.StopSentimentDetectionJobResponse || (exports.StopSentimentDetectionJobResponse = {}));
var StopTrainingDocumentClassifierRequest;
(function (StopTrainingDocumentClassifierRequest) {
    /**
     * @internal
     */
    StopTrainingDocumentClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTrainingDocumentClassifierRequest = exports.StopTrainingDocumentClassifierRequest || (exports.StopTrainingDocumentClassifierRequest = {}));
var StopTrainingDocumentClassifierResponse;
(function (StopTrainingDocumentClassifierResponse) {
    /**
     * @internal
     */
    StopTrainingDocumentClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTrainingDocumentClassifierResponse = exports.StopTrainingDocumentClassifierResponse || (exports.StopTrainingDocumentClassifierResponse = {}));
var StopTrainingEntityRecognizerRequest;
(function (StopTrainingEntityRecognizerRequest) {
    /**
     * @internal
     */
    StopTrainingEntityRecognizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTrainingEntityRecognizerRequest = exports.StopTrainingEntityRecognizerRequest || (exports.StopTrainingEntityRecognizerRequest = {}));
var StopTrainingEntityRecognizerResponse;
(function (StopTrainingEntityRecognizerResponse) {
    /**
     * @internal
     */
    StopTrainingEntityRecognizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTrainingEntityRecognizerResponse = exports.StopTrainingEntityRecognizerResponse || (exports.StopTrainingEntityRecognizerResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TooManyTagKeysException;
(function (TooManyTagKeysException) {
    /**
     * @internal
     */
    TooManyTagKeysException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagKeysException = exports.TooManyTagKeysException || (exports.TooManyTagKeysException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateEndpointRequest;
(function (UpdateEndpointRequest) {
    /**
     * @internal
     */
    UpdateEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointRequest = exports.UpdateEndpointRequest || (exports.UpdateEndpointRequest = {}));
var UpdateEndpointResponse;
(function (UpdateEndpointResponse) {
    /**
     * @internal
     */
    UpdateEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointResponse = exports.UpdateEndpointResponse || (exports.UpdateEndpointResponse = {}));
//# sourceMappingURL=models_0.js.map