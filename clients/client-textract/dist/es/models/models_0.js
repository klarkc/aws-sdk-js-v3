import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Object || (S3Object = {}));
export var Document;
(function (Document) {
    /**
     * @internal
     */
    Document.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Document || (Document = {}));
export var FeatureType;
(function (FeatureType) {
    FeatureType["FORMS"] = "FORMS";
    FeatureType["TABLES"] = "TABLES";
})(FeatureType || (FeatureType = {}));
export var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier || (ContentClassifier = {}));
export var HumanLoopDataAttributes;
(function (HumanLoopDataAttributes) {
    /**
     * @internal
     */
    HumanLoopDataAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopDataAttributes || (HumanLoopDataAttributes = {}));
export var HumanLoopConfig;
(function (HumanLoopConfig) {
    /**
     * @internal
     */
    HumanLoopConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopConfig || (HumanLoopConfig = {}));
export var AnalyzeDocumentRequest;
(function (AnalyzeDocumentRequest) {
    /**
     * @internal
     */
    AnalyzeDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyzeDocumentRequest || (AnalyzeDocumentRequest = {}));
export var BlockType;
(function (BlockType) {
    BlockType["CELL"] = "CELL";
    BlockType["KEY_VALUE_SET"] = "KEY_VALUE_SET";
    BlockType["LINE"] = "LINE";
    BlockType["PAGE"] = "PAGE";
    BlockType["SELECTION_ELEMENT"] = "SELECTION_ELEMENT";
    BlockType["TABLE"] = "TABLE";
    BlockType["WORD"] = "WORD";
})(BlockType || (BlockType = {}));
export var EntityType;
(function (EntityType) {
    EntityType["KEY"] = "KEY";
    EntityType["VALUE"] = "VALUE";
})(EntityType || (EntityType = {}));
export var BoundingBox;
(function (BoundingBox) {
    /**
     * @internal
     */
    BoundingBox.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BoundingBox || (BoundingBox = {}));
export var Point;
(function (Point) {
    /**
     * @internal
     */
    Point.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Point || (Point = {}));
export var Geometry;
(function (Geometry) {
    /**
     * @internal
     */
    Geometry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Geometry || (Geometry = {}));
export var RelationshipType;
(function (RelationshipType) {
    RelationshipType["CHILD"] = "CHILD";
    RelationshipType["COMPLEX_FEATURES"] = "COMPLEX_FEATURES";
    RelationshipType["VALUE"] = "VALUE";
})(RelationshipType || (RelationshipType = {}));
export var Relationship;
(function (Relationship) {
    /**
     * @internal
     */
    Relationship.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Relationship || (Relationship = {}));
export var SelectionStatus;
(function (SelectionStatus) {
    SelectionStatus["NOT_SELECTED"] = "NOT_SELECTED";
    SelectionStatus["SELECTED"] = "SELECTED";
})(SelectionStatus || (SelectionStatus = {}));
export var TextType;
(function (TextType) {
    TextType["HANDWRITING"] = "HANDWRITING";
    TextType["PRINTED"] = "PRINTED";
})(TextType || (TextType = {}));
export var Block;
(function (Block) {
    /**
     * @internal
     */
    Block.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Block || (Block = {}));
export var DocumentMetadata;
(function (DocumentMetadata) {
    /**
     * @internal
     */
    DocumentMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentMetadata || (DocumentMetadata = {}));
export var HumanLoopActivationOutput;
(function (HumanLoopActivationOutput) {
    /**
     * @internal
     */
    HumanLoopActivationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopActivationOutput || (HumanLoopActivationOutput = {}));
export var AnalyzeDocumentResponse;
(function (AnalyzeDocumentResponse) {
    /**
     * @internal
     */
    AnalyzeDocumentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyzeDocumentResponse || (AnalyzeDocumentResponse = {}));
export var BadDocumentException;
(function (BadDocumentException) {
    /**
     * @internal
     */
    BadDocumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadDocumentException || (BadDocumentException = {}));
export var DocumentTooLargeException;
(function (DocumentTooLargeException) {
    /**
     * @internal
     */
    DocumentTooLargeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentTooLargeException || (DocumentTooLargeException = {}));
export var HumanLoopQuotaExceededException;
(function (HumanLoopQuotaExceededException) {
    /**
     * @internal
     */
    HumanLoopQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HumanLoopQuotaExceededException || (HumanLoopQuotaExceededException = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var InvalidS3ObjectException;
(function (InvalidS3ObjectException) {
    /**
     * @internal
     */
    InvalidS3ObjectException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidS3ObjectException || (InvalidS3ObjectException = {}));
export var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    /**
     * @internal
     */
    ProvisionedThroughputExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisionedThroughputExceededException || (ProvisionedThroughputExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var UnsupportedDocumentException;
(function (UnsupportedDocumentException) {
    /**
     * @internal
     */
    UnsupportedDocumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedDocumentException || (UnsupportedDocumentException = {}));
export var DetectDocumentTextRequest;
(function (DetectDocumentTextRequest) {
    /**
     * @internal
     */
    DetectDocumentTextRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectDocumentTextRequest || (DetectDocumentTextRequest = {}));
export var DetectDocumentTextResponse;
(function (DetectDocumentTextResponse) {
    /**
     * @internal
     */
    DetectDocumentTextResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectDocumentTextResponse || (DetectDocumentTextResponse = {}));
export var DocumentLocation;
(function (DocumentLocation) {
    /**
     * @internal
     */
    DocumentLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentLocation || (DocumentLocation = {}));
export var GetDocumentAnalysisRequest;
(function (GetDocumentAnalysisRequest) {
    /**
     * @internal
     */
    GetDocumentAnalysisRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentAnalysisRequest || (GetDocumentAnalysisRequest = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    JobStatus["SUCCEEDED"] = "SUCCEEDED";
})(JobStatus || (JobStatus = {}));
export var Warning;
(function (Warning) {
    /**
     * @internal
     */
    Warning.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Warning || (Warning = {}));
export var GetDocumentAnalysisResponse;
(function (GetDocumentAnalysisResponse) {
    /**
     * @internal
     */
    GetDocumentAnalysisResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentAnalysisResponse || (GetDocumentAnalysisResponse = {}));
export var InvalidJobIdException;
(function (InvalidJobIdException) {
    /**
     * @internal
     */
    InvalidJobIdException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidJobIdException || (InvalidJobIdException = {}));
export var GetDocumentTextDetectionRequest;
(function (GetDocumentTextDetectionRequest) {
    /**
     * @internal
     */
    GetDocumentTextDetectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentTextDetectionRequest || (GetDocumentTextDetectionRequest = {}));
export var GetDocumentTextDetectionResponse;
(function (GetDocumentTextDetectionResponse) {
    /**
     * @internal
     */
    GetDocumentTextDetectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentTextDetectionResponse || (GetDocumentTextDetectionResponse = {}));
export var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
export var InvalidKMSKeyException;
(function (InvalidKMSKeyException) {
    /**
     * @internal
     */
    InvalidKMSKeyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidKMSKeyException || (InvalidKMSKeyException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NotificationChannel;
(function (NotificationChannel) {
    /**
     * @internal
     */
    NotificationChannel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationChannel || (NotificationChannel = {}));
export var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputConfig || (OutputConfig = {}));
export var StartDocumentAnalysisRequest;
(function (StartDocumentAnalysisRequest) {
    /**
     * @internal
     */
    StartDocumentAnalysisRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDocumentAnalysisRequest || (StartDocumentAnalysisRequest = {}));
export var StartDocumentAnalysisResponse;
(function (StartDocumentAnalysisResponse) {
    /**
     * @internal
     */
    StartDocumentAnalysisResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDocumentAnalysisResponse || (StartDocumentAnalysisResponse = {}));
export var StartDocumentTextDetectionRequest;
(function (StartDocumentTextDetectionRequest) {
    /**
     * @internal
     */
    StartDocumentTextDetectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDocumentTextDetectionRequest || (StartDocumentTextDetectionRequest = {}));
export var StartDocumentTextDetectionResponse;
(function (StartDocumentTextDetectionResponse) {
    /**
     * @internal
     */
    StartDocumentTextDetectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDocumentTextDetectionResponse || (StartDocumentTextDetectionResponse = {}));
//# sourceMappingURL=models_0.js.map