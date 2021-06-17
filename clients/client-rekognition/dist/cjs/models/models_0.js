"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModerationDetection = exports.ModerationLabel = exports.ContentClassifier = exports.ThrottlingException = exports.ProvisionedThroughputExceededException = exports.InvalidS3ObjectException = exports.InvalidParameterException = exports.InvalidImageFormatException = exports.InternalServerError = exports.ImageTooLargeException = exports.CompareFacesResponse = exports.OrientationCorrection = exports.CompareFacesMatch = exports.CompareFacesRequest = exports.Image = exports.QualityFilter = exports.ComparedSourceImageFace = exports.CelebrityRecognitionSortBy = exports.CelebrityRecognition = exports.CelebrityDetail = exports.FaceDetail = exports.Sunglasses = exports.Smile = exports.Mustache = exports.MouthOpen = exports.Gender = exports.GenderType = exports.EyeOpen = exports.Eyeglasses = exports.Emotion = exports.Celebrity = exports.ComparedFace = exports.ImageQuality = exports.Pose = exports.Landmark = exports.LandmarkType = exports.ProtectiveEquipmentBodyPart = exports.EquipmentDetection = exports.ProtectiveEquipmentType = exports.CoversBodyPart = exports.BoundingBox = exports.BodyPart = exports.Beard = exports.AudioMetadata = exports.Attribute = exports.Asset = exports.GroundTruthManifest = exports.S3Object = exports.AgeRange = exports.AccessDeniedException = void 0;
exports.TrainingDataResult = exports.TestingDataResult = exports.ValidationData = exports.EvaluationResult = exports.Summary = exports.DescribeProjectVersionsRequest = exports.InvalidPaginationTokenException = exports.DescribeProjectsResponse = exports.ProjectDescription = exports.DescribeProjectsRequest = exports.DescribeCollectionResponse = exports.DescribeCollectionRequest = exports.DeleteStreamProcessorResponse = exports.DeleteStreamProcessorRequest = exports.DeleteProjectVersionResponse = exports.ProjectVersionStatus = exports.DeleteProjectVersionRequest = exports.DeleteProjectResponse = exports.ProjectStatus = exports.DeleteProjectRequest = exports.DeleteFacesResponse = exports.DeleteFacesRequest = exports.DeleteCollectionResponse = exports.DeleteCollectionRequest = exports.CustomLabel = exports.Geometry = exports.Point = exports.CreateStreamProcessorResponse = exports.CreateStreamProcessorRequest = exports.StreamProcessorSettings = exports.FaceSearchSettings = exports.StreamProcessorOutput = exports.KinesisDataStream = exports.StreamProcessorInput = exports.KinesisVideoStream = exports.ResourceNotFoundException = exports.CreateProjectVersionResponse = exports.CreateProjectVersionRequest = exports.TrainingData = exports.TestingData = exports.OutputConfig = exports.ResourceInUseException = exports.LimitExceededException = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.ServiceQuotaExceededException = exports.ResourceAlreadyExistsException = exports.CreateCollectionResponse = exports.CreateCollectionRequest = exports.ContentModerationSortBy = void 0;
exports.GetFaceSearchRequest = exports.GetFaceDetectionResponse = exports.GetFaceDetectionRequest = exports.GetContentModerationResponse = exports.GetContentModerationRequest = exports.GetCelebrityRecognitionResponse = exports.VideoMetadata = exports.VideoJobStatus = exports.GetCelebrityRecognitionRequest = exports.GetCelebrityInfoResponse = exports.GetCelebrityInfoRequest = exports.FaceSearchSortBy = exports.FaceRecord = exports.FaceMatch = exports.FaceDetection = exports.FaceAttributes = exports.Face = exports.DetectTextResponse = exports.TextDetection = exports.TextTypes = exports.DetectTextRequest = exports.DetectTextFilters = exports.RegionOfInterest = exports.DetectProtectiveEquipmentResponse = exports.ProtectiveEquipmentSummary = exports.ProtectiveEquipmentPerson = exports.DetectProtectiveEquipmentRequest = exports.ProtectiveEquipmentSummarizationAttributes = exports.HumanLoopQuotaExceededException = exports.DetectModerationLabelsResponse = exports.HumanLoopActivationOutput = exports.DetectModerationLabelsRequest = exports.HumanLoopConfig = exports.HumanLoopDataAttributes = exports.DetectLabelsResponse = exports.Label = exports.Parent = exports.Instance = exports.DetectLabelsRequest = exports.DetectionFilter = exports.DetectFacesResponse = exports.DetectFacesRequest = exports.ResourceNotReadyException = exports.DetectCustomLabelsResponse = exports.DetectCustomLabelsRequest = exports.DescribeStreamProcessorResponse = exports.StreamProcessorStatus = exports.DescribeStreamProcessorRequest = exports.DescribeProjectVersionsResponse = exports.ProjectVersionDescription = void 0;
exports.StartFaceDetectionRequest = exports.StartContentModerationResponse = exports.StartContentModerationRequest = exports.VideoTooLargeException = exports.StartCelebrityRecognitionResponse = exports.StartCelebrityRecognitionRequest = exports.Video = exports.SearchFacesByImageResponse = exports.SearchFacesByImageRequest = exports.SearchFacesResponse = exports.SearchFacesRequest = exports.RecognizeCelebritiesResponse = exports.RecognizeCelebritiesRequest = exports.NotificationChannel = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListStreamProcessorsResponse = exports.StreamProcessor = exports.ListStreamProcessorsRequest = exports.ListFacesResponse = exports.ListFacesRequest = exports.ListCollectionsResponse = exports.ListCollectionsRequest = exports.IndexFacesResponse = exports.UnindexedFace = exports.Reason = exports.IndexFacesRequest = exports.IdempotentParameterMismatchException = exports.GetTextDetectionResponse = exports.TextDetectionResult = exports.GetTextDetectionRequest = exports.GetSegmentDetectionResponse = exports.SegmentTypeInfo = exports.SegmentDetection = exports.SegmentType = exports.TechnicalCueSegment = exports.TechnicalCueType = exports.ShotSegment = exports.GetSegmentDetectionRequest = exports.GetPersonTrackingResponse = exports.PersonDetection = exports.GetPersonTrackingRequest = exports.PersonTrackingSortBy = exports.GetLabelDetectionResponse = exports.LabelDetection = exports.GetLabelDetectionRequest = exports.LabelDetectionSortBy = exports.GetFaceSearchResponse = exports.PersonMatch = exports.PersonDetail = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopStreamProcessorResponse = exports.StopStreamProcessorRequest = exports.StopProjectVersionResponse = exports.StopProjectVersionRequest = exports.StartTextDetectionResponse = exports.StartTextDetectionRequest = exports.StartTextDetectionFilters = exports.StartStreamProcessorResponse = exports.StartStreamProcessorRequest = exports.StartSegmentDetectionResponse = exports.StartSegmentDetectionRequest = exports.StartSegmentDetectionFilters = exports.StartTechnicalCueDetectionFilter = exports.StartShotDetectionFilter = exports.StartProjectVersionResponse = exports.StartProjectVersionRequest = exports.StartPersonTrackingResponse = exports.StartPersonTrackingRequest = exports.StartLabelDetectionResponse = exports.StartLabelDetectionRequest = exports.StartFaceSearchResponse = exports.StartFaceSearchRequest = exports.StartFaceDetectionResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AgeRange;
(function (AgeRange) {
    /**
     * @internal
     */
    AgeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgeRange = exports.AgeRange || (exports.AgeRange = {}));
var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var GroundTruthManifest;
(function (GroundTruthManifest) {
    /**
     * @internal
     */
    GroundTruthManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroundTruthManifest = exports.GroundTruthManifest || (exports.GroundTruthManifest = {}));
var Asset;
(function (Asset) {
    /**
     * @internal
     */
    Asset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Asset = exports.Asset || (exports.Asset = {}));
var Attribute;
(function (Attribute) {
    Attribute["ALL"] = "ALL";
    Attribute["DEFAULT"] = "DEFAULT";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AudioMetadata;
(function (AudioMetadata) {
    /**
     * @internal
     */
    AudioMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioMetadata = exports.AudioMetadata || (exports.AudioMetadata = {}));
var Beard;
(function (Beard) {
    /**
     * @internal
     */
    Beard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Beard = exports.Beard || (exports.Beard = {}));
var BodyPart;
(function (BodyPart) {
    BodyPart["FACE"] = "FACE";
    BodyPart["HEAD"] = "HEAD";
    BodyPart["LEFT_HAND"] = "LEFT_HAND";
    BodyPart["RIGHT_HAND"] = "RIGHT_HAND";
})(BodyPart = exports.BodyPart || (exports.BodyPart = {}));
var BoundingBox;
(function (BoundingBox) {
    /**
     * @internal
     */
    BoundingBox.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {}));
var CoversBodyPart;
(function (CoversBodyPart) {
    /**
     * @internal
     */
    CoversBodyPart.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoversBodyPart = exports.CoversBodyPart || (exports.CoversBodyPart = {}));
var ProtectiveEquipmentType;
(function (ProtectiveEquipmentType) {
    ProtectiveEquipmentType["FACE_COVER"] = "FACE_COVER";
    ProtectiveEquipmentType["HAND_COVER"] = "HAND_COVER";
    ProtectiveEquipmentType["HEAD_COVER"] = "HEAD_COVER";
})(ProtectiveEquipmentType = exports.ProtectiveEquipmentType || (exports.ProtectiveEquipmentType = {}));
var EquipmentDetection;
(function (EquipmentDetection) {
    /**
     * @internal
     */
    EquipmentDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EquipmentDetection = exports.EquipmentDetection || (exports.EquipmentDetection = {}));
var ProtectiveEquipmentBodyPart;
(function (ProtectiveEquipmentBodyPart) {
    /**
     * @internal
     */
    ProtectiveEquipmentBodyPart.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectiveEquipmentBodyPart = exports.ProtectiveEquipmentBodyPart || (exports.ProtectiveEquipmentBodyPart = {}));
var LandmarkType;
(function (LandmarkType) {
    LandmarkType["chinBottom"] = "chinBottom";
    LandmarkType["eyeLeft"] = "eyeLeft";
    LandmarkType["eyeRight"] = "eyeRight";
    LandmarkType["leftEyeBrowLeft"] = "leftEyeBrowLeft";
    LandmarkType["leftEyeBrowRight"] = "leftEyeBrowRight";
    LandmarkType["leftEyeBrowUp"] = "leftEyeBrowUp";
    LandmarkType["leftEyeDown"] = "leftEyeDown";
    LandmarkType["leftEyeLeft"] = "leftEyeLeft";
    LandmarkType["leftEyeRight"] = "leftEyeRight";
    LandmarkType["leftEyeUp"] = "leftEyeUp";
    LandmarkType["leftPupil"] = "leftPupil";
    LandmarkType["midJawlineLeft"] = "midJawlineLeft";
    LandmarkType["midJawlineRight"] = "midJawlineRight";
    LandmarkType["mouthDown"] = "mouthDown";
    LandmarkType["mouthLeft"] = "mouthLeft";
    LandmarkType["mouthRight"] = "mouthRight";
    LandmarkType["mouthUp"] = "mouthUp";
    LandmarkType["nose"] = "nose";
    LandmarkType["noseLeft"] = "noseLeft";
    LandmarkType["noseRight"] = "noseRight";
    LandmarkType["rightEyeBrowLeft"] = "rightEyeBrowLeft";
    LandmarkType["rightEyeBrowRight"] = "rightEyeBrowRight";
    LandmarkType["rightEyeBrowUp"] = "rightEyeBrowUp";
    LandmarkType["rightEyeDown"] = "rightEyeDown";
    LandmarkType["rightEyeLeft"] = "rightEyeLeft";
    LandmarkType["rightEyeRight"] = "rightEyeRight";
    LandmarkType["rightEyeUp"] = "rightEyeUp";
    LandmarkType["rightPupil"] = "rightPupil";
    LandmarkType["upperJawlineLeft"] = "upperJawlineLeft";
    LandmarkType["upperJawlineRight"] = "upperJawlineRight";
})(LandmarkType = exports.LandmarkType || (exports.LandmarkType = {}));
var Landmark;
(function (Landmark) {
    /**
     * @internal
     */
    Landmark.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Landmark = exports.Landmark || (exports.Landmark = {}));
var Pose;
(function (Pose) {
    /**
     * @internal
     */
    Pose.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Pose = exports.Pose || (exports.Pose = {}));
var ImageQuality;
(function (ImageQuality) {
    /**
     * @internal
     */
    ImageQuality.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageQuality = exports.ImageQuality || (exports.ImageQuality = {}));
var ComparedFace;
(function (ComparedFace) {
    /**
     * @internal
     */
    ComparedFace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComparedFace = exports.ComparedFace || (exports.ComparedFace = {}));
var Celebrity;
(function (Celebrity) {
    /**
     * @internal
     */
    Celebrity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Celebrity = exports.Celebrity || (exports.Celebrity = {}));
var Emotion;
(function (Emotion) {
    /**
     * @internal
     */
    Emotion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Emotion = exports.Emotion || (exports.Emotion = {}));
var Eyeglasses;
(function (Eyeglasses) {
    /**
     * @internal
     */
    Eyeglasses.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Eyeglasses = exports.Eyeglasses || (exports.Eyeglasses = {}));
var EyeOpen;
(function (EyeOpen) {
    /**
     * @internal
     */
    EyeOpen.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EyeOpen = exports.EyeOpen || (exports.EyeOpen = {}));
var GenderType;
(function (GenderType) {
    GenderType["Female"] = "Female";
    GenderType["Male"] = "Male";
})(GenderType = exports.GenderType || (exports.GenderType = {}));
var Gender;
(function (Gender) {
    /**
     * @internal
     */
    Gender.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Gender = exports.Gender || (exports.Gender = {}));
var MouthOpen;
(function (MouthOpen) {
    /**
     * @internal
     */
    MouthOpen.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MouthOpen = exports.MouthOpen || (exports.MouthOpen = {}));
var Mustache;
(function (Mustache) {
    /**
     * @internal
     */
    Mustache.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mustache = exports.Mustache || (exports.Mustache = {}));
var Smile;
(function (Smile) {
    /**
     * @internal
     */
    Smile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Smile = exports.Smile || (exports.Smile = {}));
var Sunglasses;
(function (Sunglasses) {
    /**
     * @internal
     */
    Sunglasses.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sunglasses = exports.Sunglasses || (exports.Sunglasses = {}));
var FaceDetail;
(function (FaceDetail) {
    /**
     * @internal
     */
    FaceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaceDetail = exports.FaceDetail || (exports.FaceDetail = {}));
var CelebrityDetail;
(function (CelebrityDetail) {
    /**
     * @internal
     */
    CelebrityDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CelebrityDetail = exports.CelebrityDetail || (exports.CelebrityDetail = {}));
var CelebrityRecognition;
(function (CelebrityRecognition) {
    /**
     * @internal
     */
    CelebrityRecognition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CelebrityRecognition = exports.CelebrityRecognition || (exports.CelebrityRecognition = {}));
var CelebrityRecognitionSortBy;
(function (CelebrityRecognitionSortBy) {
    CelebrityRecognitionSortBy["ID"] = "ID";
    CelebrityRecognitionSortBy["TIMESTAMP"] = "TIMESTAMP";
})(CelebrityRecognitionSortBy = exports.CelebrityRecognitionSortBy || (exports.CelebrityRecognitionSortBy = {}));
var ComparedSourceImageFace;
(function (ComparedSourceImageFace) {
    /**
     * @internal
     */
    ComparedSourceImageFace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComparedSourceImageFace = exports.ComparedSourceImageFace || (exports.ComparedSourceImageFace = {}));
var QualityFilter;
(function (QualityFilter) {
    QualityFilter["AUTO"] = "AUTO";
    QualityFilter["HIGH"] = "HIGH";
    QualityFilter["LOW"] = "LOW";
    QualityFilter["MEDIUM"] = "MEDIUM";
    QualityFilter["NONE"] = "NONE";
})(QualityFilter = exports.QualityFilter || (exports.QualityFilter = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var CompareFacesRequest;
(function (CompareFacesRequest) {
    /**
     * @internal
     */
    CompareFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompareFacesRequest = exports.CompareFacesRequest || (exports.CompareFacesRequest = {}));
var CompareFacesMatch;
(function (CompareFacesMatch) {
    /**
     * @internal
     */
    CompareFacesMatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompareFacesMatch = exports.CompareFacesMatch || (exports.CompareFacesMatch = {}));
var OrientationCorrection;
(function (OrientationCorrection) {
    OrientationCorrection["ROTATE_0"] = "ROTATE_0";
    OrientationCorrection["ROTATE_180"] = "ROTATE_180";
    OrientationCorrection["ROTATE_270"] = "ROTATE_270";
    OrientationCorrection["ROTATE_90"] = "ROTATE_90";
})(OrientationCorrection = exports.OrientationCorrection || (exports.OrientationCorrection = {}));
var CompareFacesResponse;
(function (CompareFacesResponse) {
    /**
     * @internal
     */
    CompareFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompareFacesResponse = exports.CompareFacesResponse || (exports.CompareFacesResponse = {}));
var ImageTooLargeException;
(function (ImageTooLargeException) {
    /**
     * @internal
     */
    ImageTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageTooLargeException = exports.ImageTooLargeException || (exports.ImageTooLargeException = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidImageFormatException;
(function (InvalidImageFormatException) {
    /**
     * @internal
     */
    InvalidImageFormatException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidImageFormatException = exports.InvalidImageFormatException || (exports.InvalidImageFormatException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidS3ObjectException;
(function (InvalidS3ObjectException) {
    /**
     * @internal
     */
    InvalidS3ObjectException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3ObjectException = exports.InvalidS3ObjectException || (exports.InvalidS3ObjectException = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    /**
     * @internal
     */
    ProvisionedThroughputExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var ModerationLabel;
(function (ModerationLabel) {
    /**
     * @internal
     */
    ModerationLabel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModerationLabel = exports.ModerationLabel || (exports.ModerationLabel = {}));
var ContentModerationDetection;
(function (ContentModerationDetection) {
    /**
     * @internal
     */
    ContentModerationDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContentModerationDetection = exports.ContentModerationDetection || (exports.ContentModerationDetection = {}));
var ContentModerationSortBy;
(function (ContentModerationSortBy) {
    ContentModerationSortBy["NAME"] = "NAME";
    ContentModerationSortBy["TIMESTAMP"] = "TIMESTAMP";
})(ContentModerationSortBy = exports.ContentModerationSortBy || (exports.ContentModerationSortBy = {}));
var CreateCollectionRequest;
(function (CreateCollectionRequest) {
    /**
     * @internal
     */
    CreateCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCollectionRequest = exports.CreateCollectionRequest || (exports.CreateCollectionRequest = {}));
var CreateCollectionResponse;
(function (CreateCollectionResponse) {
    /**
     * @internal
     */
    CreateCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCollectionResponse = exports.CreateCollectionResponse || (exports.CreateCollectionResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputConfig = exports.OutputConfig || (exports.OutputConfig = {}));
var TestingData;
(function (TestingData) {
    /**
     * @internal
     */
    TestingData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestingData = exports.TestingData || (exports.TestingData = {}));
var TrainingData;
(function (TrainingData) {
    /**
     * @internal
     */
    TrainingData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingData = exports.TrainingData || (exports.TrainingData = {}));
var CreateProjectVersionRequest;
(function (CreateProjectVersionRequest) {
    /**
     * @internal
     */
    CreateProjectVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectVersionRequest = exports.CreateProjectVersionRequest || (exports.CreateProjectVersionRequest = {}));
var CreateProjectVersionResponse;
(function (CreateProjectVersionResponse) {
    /**
     * @internal
     */
    CreateProjectVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectVersionResponse = exports.CreateProjectVersionResponse || (exports.CreateProjectVersionResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var KinesisVideoStream;
(function (KinesisVideoStream) {
    /**
     * @internal
     */
    KinesisVideoStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisVideoStream = exports.KinesisVideoStream || (exports.KinesisVideoStream = {}));
var StreamProcessorInput;
(function (StreamProcessorInput) {
    /**
     * @internal
     */
    StreamProcessorInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamProcessorInput = exports.StreamProcessorInput || (exports.StreamProcessorInput = {}));
var KinesisDataStream;
(function (KinesisDataStream) {
    /**
     * @internal
     */
    KinesisDataStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisDataStream = exports.KinesisDataStream || (exports.KinesisDataStream = {}));
var StreamProcessorOutput;
(function (StreamProcessorOutput) {
    /**
     * @internal
     */
    StreamProcessorOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamProcessorOutput = exports.StreamProcessorOutput || (exports.StreamProcessorOutput = {}));
var FaceSearchSettings;
(function (FaceSearchSettings) {
    /**
     * @internal
     */
    FaceSearchSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaceSearchSettings = exports.FaceSearchSettings || (exports.FaceSearchSettings = {}));
var StreamProcessorSettings;
(function (StreamProcessorSettings) {
    /**
     * @internal
     */
    StreamProcessorSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamProcessorSettings = exports.StreamProcessorSettings || (exports.StreamProcessorSettings = {}));
var CreateStreamProcessorRequest;
(function (CreateStreamProcessorRequest) {
    /**
     * @internal
     */
    CreateStreamProcessorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamProcessorRequest = exports.CreateStreamProcessorRequest || (exports.CreateStreamProcessorRequest = {}));
var CreateStreamProcessorResponse;
(function (CreateStreamProcessorResponse) {
    /**
     * @internal
     */
    CreateStreamProcessorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStreamProcessorResponse = exports.CreateStreamProcessorResponse || (exports.CreateStreamProcessorResponse = {}));
var Point;
(function (Point) {
    /**
     * @internal
     */
    Point.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Point = exports.Point || (exports.Point = {}));
var Geometry;
(function (Geometry) {
    /**
     * @internal
     */
    Geometry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Geometry = exports.Geometry || (exports.Geometry = {}));
var CustomLabel;
(function (CustomLabel) {
    /**
     * @internal
     */
    CustomLabel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomLabel = exports.CustomLabel || (exports.CustomLabel = {}));
var DeleteCollectionRequest;
(function (DeleteCollectionRequest) {
    /**
     * @internal
     */
    DeleteCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCollectionRequest = exports.DeleteCollectionRequest || (exports.DeleteCollectionRequest = {}));
var DeleteCollectionResponse;
(function (DeleteCollectionResponse) {
    /**
     * @internal
     */
    DeleteCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCollectionResponse = exports.DeleteCollectionResponse || (exports.DeleteCollectionResponse = {}));
var DeleteFacesRequest;
(function (DeleteFacesRequest) {
    /**
     * @internal
     */
    DeleteFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFacesRequest = exports.DeleteFacesRequest || (exports.DeleteFacesRequest = {}));
var DeleteFacesResponse;
(function (DeleteFacesResponse) {
    /**
     * @internal
     */
    DeleteFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFacesResponse = exports.DeleteFacesResponse || (exports.DeleteFacesResponse = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["CREATED"] = "CREATED";
    ProjectStatus["CREATING"] = "CREATING";
    ProjectStatus["DELETING"] = "DELETING";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResponse = exports.DeleteProjectResponse || (exports.DeleteProjectResponse = {}));
var DeleteProjectVersionRequest;
(function (DeleteProjectVersionRequest) {
    /**
     * @internal
     */
    DeleteProjectVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectVersionRequest = exports.DeleteProjectVersionRequest || (exports.DeleteProjectVersionRequest = {}));
var ProjectVersionStatus;
(function (ProjectVersionStatus) {
    ProjectVersionStatus["DELETING"] = "DELETING";
    ProjectVersionStatus["FAILED"] = "FAILED";
    ProjectVersionStatus["RUNNING"] = "RUNNING";
    ProjectVersionStatus["STARTING"] = "STARTING";
    ProjectVersionStatus["STOPPED"] = "STOPPED";
    ProjectVersionStatus["STOPPING"] = "STOPPING";
    ProjectVersionStatus["TRAINING_COMPLETED"] = "TRAINING_COMPLETED";
    ProjectVersionStatus["TRAINING_FAILED"] = "TRAINING_FAILED";
    ProjectVersionStatus["TRAINING_IN_PROGRESS"] = "TRAINING_IN_PROGRESS";
})(ProjectVersionStatus = exports.ProjectVersionStatus || (exports.ProjectVersionStatus = {}));
var DeleteProjectVersionResponse;
(function (DeleteProjectVersionResponse) {
    /**
     * @internal
     */
    DeleteProjectVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectVersionResponse = exports.DeleteProjectVersionResponse || (exports.DeleteProjectVersionResponse = {}));
var DeleteStreamProcessorRequest;
(function (DeleteStreamProcessorRequest) {
    /**
     * @internal
     */
    DeleteStreamProcessorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamProcessorRequest = exports.DeleteStreamProcessorRequest || (exports.DeleteStreamProcessorRequest = {}));
var DeleteStreamProcessorResponse;
(function (DeleteStreamProcessorResponse) {
    /**
     * @internal
     */
    DeleteStreamProcessorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStreamProcessorResponse = exports.DeleteStreamProcessorResponse || (exports.DeleteStreamProcessorResponse = {}));
var DescribeCollectionRequest;
(function (DescribeCollectionRequest) {
    /**
     * @internal
     */
    DescribeCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCollectionRequest = exports.DescribeCollectionRequest || (exports.DescribeCollectionRequest = {}));
var DescribeCollectionResponse;
(function (DescribeCollectionResponse) {
    /**
     * @internal
     */
    DescribeCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCollectionResponse = exports.DescribeCollectionResponse || (exports.DescribeCollectionResponse = {}));
var DescribeProjectsRequest;
(function (DescribeProjectsRequest) {
    /**
     * @internal
     */
    DescribeProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectsRequest = exports.DescribeProjectsRequest || (exports.DescribeProjectsRequest = {}));
var ProjectDescription;
(function (ProjectDescription) {
    /**
     * @internal
     */
    ProjectDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectDescription = exports.ProjectDescription || (exports.ProjectDescription = {}));
var DescribeProjectsResponse;
(function (DescribeProjectsResponse) {
    /**
     * @internal
     */
    DescribeProjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectsResponse = exports.DescribeProjectsResponse || (exports.DescribeProjectsResponse = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var DescribeProjectVersionsRequest;
(function (DescribeProjectVersionsRequest) {
    /**
     * @internal
     */
    DescribeProjectVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectVersionsRequest = exports.DescribeProjectVersionsRequest || (exports.DescribeProjectVersionsRequest = {}));
var Summary;
(function (Summary) {
    /**
     * @internal
     */
    Summary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Summary = exports.Summary || (exports.Summary = {}));
var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var ValidationData;
(function (ValidationData) {
    /**
     * @internal
     */
    ValidationData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationData = exports.ValidationData || (exports.ValidationData = {}));
var TestingDataResult;
(function (TestingDataResult) {
    /**
     * @internal
     */
    TestingDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestingDataResult = exports.TestingDataResult || (exports.TestingDataResult = {}));
var TrainingDataResult;
(function (TrainingDataResult) {
    /**
     * @internal
     */
    TrainingDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrainingDataResult = exports.TrainingDataResult || (exports.TrainingDataResult = {}));
var ProjectVersionDescription;
(function (ProjectVersionDescription) {
    /**
     * @internal
     */
    ProjectVersionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectVersionDescription = exports.ProjectVersionDescription || (exports.ProjectVersionDescription = {}));
var DescribeProjectVersionsResponse;
(function (DescribeProjectVersionsResponse) {
    /**
     * @internal
     */
    DescribeProjectVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectVersionsResponse = exports.DescribeProjectVersionsResponse || (exports.DescribeProjectVersionsResponse = {}));
var DescribeStreamProcessorRequest;
(function (DescribeStreamProcessorRequest) {
    /**
     * @internal
     */
    DescribeStreamProcessorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamProcessorRequest = exports.DescribeStreamProcessorRequest || (exports.DescribeStreamProcessorRequest = {}));
var StreamProcessorStatus;
(function (StreamProcessorStatus) {
    StreamProcessorStatus["FAILED"] = "FAILED";
    StreamProcessorStatus["RUNNING"] = "RUNNING";
    StreamProcessorStatus["STARTING"] = "STARTING";
    StreamProcessorStatus["STOPPED"] = "STOPPED";
    StreamProcessorStatus["STOPPING"] = "STOPPING";
})(StreamProcessorStatus = exports.StreamProcessorStatus || (exports.StreamProcessorStatus = {}));
var DescribeStreamProcessorResponse;
(function (DescribeStreamProcessorResponse) {
    /**
     * @internal
     */
    DescribeStreamProcessorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStreamProcessorResponse = exports.DescribeStreamProcessorResponse || (exports.DescribeStreamProcessorResponse = {}));
var DetectCustomLabelsRequest;
(function (DetectCustomLabelsRequest) {
    /**
     * @internal
     */
    DetectCustomLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectCustomLabelsRequest = exports.DetectCustomLabelsRequest || (exports.DetectCustomLabelsRequest = {}));
var DetectCustomLabelsResponse;
(function (DetectCustomLabelsResponse) {
    /**
     * @internal
     */
    DetectCustomLabelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectCustomLabelsResponse = exports.DetectCustomLabelsResponse || (exports.DetectCustomLabelsResponse = {}));
var ResourceNotReadyException;
(function (ResourceNotReadyException) {
    /**
     * @internal
     */
    ResourceNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotReadyException = exports.ResourceNotReadyException || (exports.ResourceNotReadyException = {}));
var DetectFacesRequest;
(function (DetectFacesRequest) {
    /**
     * @internal
     */
    DetectFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectFacesRequest = exports.DetectFacesRequest || (exports.DetectFacesRequest = {}));
var DetectFacesResponse;
(function (DetectFacesResponse) {
    /**
     * @internal
     */
    DetectFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectFacesResponse = exports.DetectFacesResponse || (exports.DetectFacesResponse = {}));
var DetectionFilter;
(function (DetectionFilter) {
    /**
     * @internal
     */
    DetectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectionFilter = exports.DetectionFilter || (exports.DetectionFilter = {}));
var DetectLabelsRequest;
(function (DetectLabelsRequest) {
    /**
     * @internal
     */
    DetectLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectLabelsRequest = exports.DetectLabelsRequest || (exports.DetectLabelsRequest = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var Parent;
(function (Parent) {
    /**
     * @internal
     */
    Parent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parent = exports.Parent || (exports.Parent = {}));
var Label;
(function (Label) {
    /**
     * @internal
     */
    Label.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Label = exports.Label || (exports.Label = {}));
var DetectLabelsResponse;
(function (DetectLabelsResponse) {
    /**
     * @internal
     */
    DetectLabelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectLabelsResponse = exports.DetectLabelsResponse || (exports.DetectLabelsResponse = {}));
var HumanLoopDataAttributes;
(function (HumanLoopDataAttributes) {
    /**
     * @internal
     */
    HumanLoopDataAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopDataAttributes = exports.HumanLoopDataAttributes || (exports.HumanLoopDataAttributes = {}));
var HumanLoopConfig;
(function (HumanLoopConfig) {
    /**
     * @internal
     */
    HumanLoopConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopConfig = exports.HumanLoopConfig || (exports.HumanLoopConfig = {}));
var DetectModerationLabelsRequest;
(function (DetectModerationLabelsRequest) {
    /**
     * @internal
     */
    DetectModerationLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectModerationLabelsRequest = exports.DetectModerationLabelsRequest || (exports.DetectModerationLabelsRequest = {}));
var HumanLoopActivationOutput;
(function (HumanLoopActivationOutput) {
    /**
     * @internal
     */
    HumanLoopActivationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopActivationOutput = exports.HumanLoopActivationOutput || (exports.HumanLoopActivationOutput = {}));
var DetectModerationLabelsResponse;
(function (DetectModerationLabelsResponse) {
    /**
     * @internal
     */
    DetectModerationLabelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectModerationLabelsResponse = exports.DetectModerationLabelsResponse || (exports.DetectModerationLabelsResponse = {}));
var HumanLoopQuotaExceededException;
(function (HumanLoopQuotaExceededException) {
    /**
     * @internal
     */
    HumanLoopQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HumanLoopQuotaExceededException = exports.HumanLoopQuotaExceededException || (exports.HumanLoopQuotaExceededException = {}));
var ProtectiveEquipmentSummarizationAttributes;
(function (ProtectiveEquipmentSummarizationAttributes) {
    /**
     * @internal
     */
    ProtectiveEquipmentSummarizationAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectiveEquipmentSummarizationAttributes = exports.ProtectiveEquipmentSummarizationAttributes || (exports.ProtectiveEquipmentSummarizationAttributes = {}));
var DetectProtectiveEquipmentRequest;
(function (DetectProtectiveEquipmentRequest) {
    /**
     * @internal
     */
    DetectProtectiveEquipmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectProtectiveEquipmentRequest = exports.DetectProtectiveEquipmentRequest || (exports.DetectProtectiveEquipmentRequest = {}));
var ProtectiveEquipmentPerson;
(function (ProtectiveEquipmentPerson) {
    /**
     * @internal
     */
    ProtectiveEquipmentPerson.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectiveEquipmentPerson = exports.ProtectiveEquipmentPerson || (exports.ProtectiveEquipmentPerson = {}));
var ProtectiveEquipmentSummary;
(function (ProtectiveEquipmentSummary) {
    /**
     * @internal
     */
    ProtectiveEquipmentSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectiveEquipmentSummary = exports.ProtectiveEquipmentSummary || (exports.ProtectiveEquipmentSummary = {}));
var DetectProtectiveEquipmentResponse;
(function (DetectProtectiveEquipmentResponse) {
    /**
     * @internal
     */
    DetectProtectiveEquipmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectProtectiveEquipmentResponse = exports.DetectProtectiveEquipmentResponse || (exports.DetectProtectiveEquipmentResponse = {}));
var RegionOfInterest;
(function (RegionOfInterest) {
    /**
     * @internal
     */
    RegionOfInterest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionOfInterest = exports.RegionOfInterest || (exports.RegionOfInterest = {}));
var DetectTextFilters;
(function (DetectTextFilters) {
    /**
     * @internal
     */
    DetectTextFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectTextFilters = exports.DetectTextFilters || (exports.DetectTextFilters = {}));
var DetectTextRequest;
(function (DetectTextRequest) {
    /**
     * @internal
     */
    DetectTextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectTextRequest = exports.DetectTextRequest || (exports.DetectTextRequest = {}));
var TextTypes;
(function (TextTypes) {
    TextTypes["LINE"] = "LINE";
    TextTypes["WORD"] = "WORD";
})(TextTypes = exports.TextTypes || (exports.TextTypes = {}));
var TextDetection;
(function (TextDetection) {
    /**
     * @internal
     */
    TextDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextDetection = exports.TextDetection || (exports.TextDetection = {}));
var DetectTextResponse;
(function (DetectTextResponse) {
    /**
     * @internal
     */
    DetectTextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectTextResponse = exports.DetectTextResponse || (exports.DetectTextResponse = {}));
var Face;
(function (Face) {
    /**
     * @internal
     */
    Face.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Face = exports.Face || (exports.Face = {}));
var FaceAttributes;
(function (FaceAttributes) {
    FaceAttributes["ALL"] = "ALL";
    FaceAttributes["DEFAULT"] = "DEFAULT";
})(FaceAttributes = exports.FaceAttributes || (exports.FaceAttributes = {}));
var FaceDetection;
(function (FaceDetection) {
    /**
     * @internal
     */
    FaceDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaceDetection = exports.FaceDetection || (exports.FaceDetection = {}));
var FaceMatch;
(function (FaceMatch) {
    /**
     * @internal
     */
    FaceMatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaceMatch = exports.FaceMatch || (exports.FaceMatch = {}));
var FaceRecord;
(function (FaceRecord) {
    /**
     * @internal
     */
    FaceRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaceRecord = exports.FaceRecord || (exports.FaceRecord = {}));
var FaceSearchSortBy;
(function (FaceSearchSortBy) {
    FaceSearchSortBy["INDEX"] = "INDEX";
    FaceSearchSortBy["TIMESTAMP"] = "TIMESTAMP";
})(FaceSearchSortBy = exports.FaceSearchSortBy || (exports.FaceSearchSortBy = {}));
var GetCelebrityInfoRequest;
(function (GetCelebrityInfoRequest) {
    /**
     * @internal
     */
    GetCelebrityInfoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCelebrityInfoRequest = exports.GetCelebrityInfoRequest || (exports.GetCelebrityInfoRequest = {}));
var GetCelebrityInfoResponse;
(function (GetCelebrityInfoResponse) {
    /**
     * @internal
     */
    GetCelebrityInfoResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCelebrityInfoResponse = exports.GetCelebrityInfoResponse || (exports.GetCelebrityInfoResponse = {}));
var GetCelebrityRecognitionRequest;
(function (GetCelebrityRecognitionRequest) {
    /**
     * @internal
     */
    GetCelebrityRecognitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCelebrityRecognitionRequest = exports.GetCelebrityRecognitionRequest || (exports.GetCelebrityRecognitionRequest = {}));
var VideoJobStatus;
(function (VideoJobStatus) {
    VideoJobStatus["FAILED"] = "FAILED";
    VideoJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    VideoJobStatus["SUCCEEDED"] = "SUCCEEDED";
})(VideoJobStatus = exports.VideoJobStatus || (exports.VideoJobStatus = {}));
var VideoMetadata;
(function (VideoMetadata) {
    /**
     * @internal
     */
    VideoMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoMetadata = exports.VideoMetadata || (exports.VideoMetadata = {}));
var GetCelebrityRecognitionResponse;
(function (GetCelebrityRecognitionResponse) {
    /**
     * @internal
     */
    GetCelebrityRecognitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCelebrityRecognitionResponse = exports.GetCelebrityRecognitionResponse || (exports.GetCelebrityRecognitionResponse = {}));
var GetContentModerationRequest;
(function (GetContentModerationRequest) {
    /**
     * @internal
     */
    GetContentModerationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContentModerationRequest = exports.GetContentModerationRequest || (exports.GetContentModerationRequest = {}));
var GetContentModerationResponse;
(function (GetContentModerationResponse) {
    /**
     * @internal
     */
    GetContentModerationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContentModerationResponse = exports.GetContentModerationResponse || (exports.GetContentModerationResponse = {}));
var GetFaceDetectionRequest;
(function (GetFaceDetectionRequest) {
    /**
     * @internal
     */
    GetFaceDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFaceDetectionRequest = exports.GetFaceDetectionRequest || (exports.GetFaceDetectionRequest = {}));
var GetFaceDetectionResponse;
(function (GetFaceDetectionResponse) {
    /**
     * @internal
     */
    GetFaceDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFaceDetectionResponse = exports.GetFaceDetectionResponse || (exports.GetFaceDetectionResponse = {}));
var GetFaceSearchRequest;
(function (GetFaceSearchRequest) {
    /**
     * @internal
     */
    GetFaceSearchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFaceSearchRequest = exports.GetFaceSearchRequest || (exports.GetFaceSearchRequest = {}));
var PersonDetail;
(function (PersonDetail) {
    /**
     * @internal
     */
    PersonDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PersonDetail = exports.PersonDetail || (exports.PersonDetail = {}));
var PersonMatch;
(function (PersonMatch) {
    /**
     * @internal
     */
    PersonMatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PersonMatch = exports.PersonMatch || (exports.PersonMatch = {}));
var GetFaceSearchResponse;
(function (GetFaceSearchResponse) {
    /**
     * @internal
     */
    GetFaceSearchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFaceSearchResponse = exports.GetFaceSearchResponse || (exports.GetFaceSearchResponse = {}));
var LabelDetectionSortBy;
(function (LabelDetectionSortBy) {
    LabelDetectionSortBy["NAME"] = "NAME";
    LabelDetectionSortBy["TIMESTAMP"] = "TIMESTAMP";
})(LabelDetectionSortBy = exports.LabelDetectionSortBy || (exports.LabelDetectionSortBy = {}));
var GetLabelDetectionRequest;
(function (GetLabelDetectionRequest) {
    /**
     * @internal
     */
    GetLabelDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLabelDetectionRequest = exports.GetLabelDetectionRequest || (exports.GetLabelDetectionRequest = {}));
var LabelDetection;
(function (LabelDetection) {
    /**
     * @internal
     */
    LabelDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelDetection = exports.LabelDetection || (exports.LabelDetection = {}));
var GetLabelDetectionResponse;
(function (GetLabelDetectionResponse) {
    /**
     * @internal
     */
    GetLabelDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLabelDetectionResponse = exports.GetLabelDetectionResponse || (exports.GetLabelDetectionResponse = {}));
var PersonTrackingSortBy;
(function (PersonTrackingSortBy) {
    PersonTrackingSortBy["INDEX"] = "INDEX";
    PersonTrackingSortBy["TIMESTAMP"] = "TIMESTAMP";
})(PersonTrackingSortBy = exports.PersonTrackingSortBy || (exports.PersonTrackingSortBy = {}));
var GetPersonTrackingRequest;
(function (GetPersonTrackingRequest) {
    /**
     * @internal
     */
    GetPersonTrackingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPersonTrackingRequest = exports.GetPersonTrackingRequest || (exports.GetPersonTrackingRequest = {}));
var PersonDetection;
(function (PersonDetection) {
    /**
     * @internal
     */
    PersonDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PersonDetection = exports.PersonDetection || (exports.PersonDetection = {}));
var GetPersonTrackingResponse;
(function (GetPersonTrackingResponse) {
    /**
     * @internal
     */
    GetPersonTrackingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPersonTrackingResponse = exports.GetPersonTrackingResponse || (exports.GetPersonTrackingResponse = {}));
var GetSegmentDetectionRequest;
(function (GetSegmentDetectionRequest) {
    /**
     * @internal
     */
    GetSegmentDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentDetectionRequest = exports.GetSegmentDetectionRequest || (exports.GetSegmentDetectionRequest = {}));
var ShotSegment;
(function (ShotSegment) {
    /**
     * @internal
     */
    ShotSegment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShotSegment = exports.ShotSegment || (exports.ShotSegment = {}));
var TechnicalCueType;
(function (TechnicalCueType) {
    TechnicalCueType["BLACK_FRAMES"] = "BlackFrames";
    TechnicalCueType["COLOR_BARS"] = "ColorBars";
    TechnicalCueType["END_CREDITS"] = "EndCredits";
})(TechnicalCueType = exports.TechnicalCueType || (exports.TechnicalCueType = {}));
var TechnicalCueSegment;
(function (TechnicalCueSegment) {
    /**
     * @internal
     */
    TechnicalCueSegment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TechnicalCueSegment = exports.TechnicalCueSegment || (exports.TechnicalCueSegment = {}));
var SegmentType;
(function (SegmentType) {
    SegmentType["SHOT"] = "SHOT";
    SegmentType["TECHNICAL_CUE"] = "TECHNICAL_CUE";
})(SegmentType = exports.SegmentType || (exports.SegmentType = {}));
var SegmentDetection;
(function (SegmentDetection) {
    /**
     * @internal
     */
    SegmentDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentDetection = exports.SegmentDetection || (exports.SegmentDetection = {}));
var SegmentTypeInfo;
(function (SegmentTypeInfo) {
    /**
     * @internal
     */
    SegmentTypeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentTypeInfo = exports.SegmentTypeInfo || (exports.SegmentTypeInfo = {}));
var GetSegmentDetectionResponse;
(function (GetSegmentDetectionResponse) {
    /**
     * @internal
     */
    GetSegmentDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentDetectionResponse = exports.GetSegmentDetectionResponse || (exports.GetSegmentDetectionResponse = {}));
var GetTextDetectionRequest;
(function (GetTextDetectionRequest) {
    /**
     * @internal
     */
    GetTextDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTextDetectionRequest = exports.GetTextDetectionRequest || (exports.GetTextDetectionRequest = {}));
var TextDetectionResult;
(function (TextDetectionResult) {
    /**
     * @internal
     */
    TextDetectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextDetectionResult = exports.TextDetectionResult || (exports.TextDetectionResult = {}));
var GetTextDetectionResponse;
(function (GetTextDetectionResponse) {
    /**
     * @internal
     */
    GetTextDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTextDetectionResponse = exports.GetTextDetectionResponse || (exports.GetTextDetectionResponse = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var IndexFacesRequest;
(function (IndexFacesRequest) {
    /**
     * @internal
     */
    IndexFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexFacesRequest = exports.IndexFacesRequest || (exports.IndexFacesRequest = {}));
var Reason;
(function (Reason) {
    Reason["EXCEEDS_MAX_FACES"] = "EXCEEDS_MAX_FACES";
    Reason["EXTREME_POSE"] = "EXTREME_POSE";
    Reason["LOW_BRIGHTNESS"] = "LOW_BRIGHTNESS";
    Reason["LOW_CONFIDENCE"] = "LOW_CONFIDENCE";
    Reason["LOW_FACE_QUALITY"] = "LOW_FACE_QUALITY";
    Reason["LOW_SHARPNESS"] = "LOW_SHARPNESS";
    Reason["SMALL_BOUNDING_BOX"] = "SMALL_BOUNDING_BOX";
})(Reason = exports.Reason || (exports.Reason = {}));
var UnindexedFace;
(function (UnindexedFace) {
    /**
     * @internal
     */
    UnindexedFace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnindexedFace = exports.UnindexedFace || (exports.UnindexedFace = {}));
var IndexFacesResponse;
(function (IndexFacesResponse) {
    /**
     * @internal
     */
    IndexFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexFacesResponse = exports.IndexFacesResponse || (exports.IndexFacesResponse = {}));
var ListCollectionsRequest;
(function (ListCollectionsRequest) {
    /**
     * @internal
     */
    ListCollectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCollectionsRequest = exports.ListCollectionsRequest || (exports.ListCollectionsRequest = {}));
var ListCollectionsResponse;
(function (ListCollectionsResponse) {
    /**
     * @internal
     */
    ListCollectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCollectionsResponse = exports.ListCollectionsResponse || (exports.ListCollectionsResponse = {}));
var ListFacesRequest;
(function (ListFacesRequest) {
    /**
     * @internal
     */
    ListFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFacesRequest = exports.ListFacesRequest || (exports.ListFacesRequest = {}));
var ListFacesResponse;
(function (ListFacesResponse) {
    /**
     * @internal
     */
    ListFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFacesResponse = exports.ListFacesResponse || (exports.ListFacesResponse = {}));
var ListStreamProcessorsRequest;
(function (ListStreamProcessorsRequest) {
    /**
     * @internal
     */
    ListStreamProcessorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamProcessorsRequest = exports.ListStreamProcessorsRequest || (exports.ListStreamProcessorsRequest = {}));
var StreamProcessor;
(function (StreamProcessor) {
    /**
     * @internal
     */
    StreamProcessor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamProcessor = exports.StreamProcessor || (exports.StreamProcessor = {}));
var ListStreamProcessorsResponse;
(function (ListStreamProcessorsResponse) {
    /**
     * @internal
     */
    ListStreamProcessorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStreamProcessorsResponse = exports.ListStreamProcessorsResponse || (exports.ListStreamProcessorsResponse = {}));
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
var NotificationChannel;
(function (NotificationChannel) {
    /**
     * @internal
     */
    NotificationChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationChannel = exports.NotificationChannel || (exports.NotificationChannel = {}));
var RecognizeCelebritiesRequest;
(function (RecognizeCelebritiesRequest) {
    /**
     * @internal
     */
    RecognizeCelebritiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecognizeCelebritiesRequest = exports.RecognizeCelebritiesRequest || (exports.RecognizeCelebritiesRequest = {}));
var RecognizeCelebritiesResponse;
(function (RecognizeCelebritiesResponse) {
    /**
     * @internal
     */
    RecognizeCelebritiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecognizeCelebritiesResponse = exports.RecognizeCelebritiesResponse || (exports.RecognizeCelebritiesResponse = {}));
var SearchFacesRequest;
(function (SearchFacesRequest) {
    /**
     * @internal
     */
    SearchFacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFacesRequest = exports.SearchFacesRequest || (exports.SearchFacesRequest = {}));
var SearchFacesResponse;
(function (SearchFacesResponse) {
    /**
     * @internal
     */
    SearchFacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFacesResponse = exports.SearchFacesResponse || (exports.SearchFacesResponse = {}));
var SearchFacesByImageRequest;
(function (SearchFacesByImageRequest) {
    /**
     * @internal
     */
    SearchFacesByImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFacesByImageRequest = exports.SearchFacesByImageRequest || (exports.SearchFacesByImageRequest = {}));
var SearchFacesByImageResponse;
(function (SearchFacesByImageResponse) {
    /**
     * @internal
     */
    SearchFacesByImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchFacesByImageResponse = exports.SearchFacesByImageResponse || (exports.SearchFacesByImageResponse = {}));
var Video;
(function (Video) {
    /**
     * @internal
     */
    Video.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Video = exports.Video || (exports.Video = {}));
var StartCelebrityRecognitionRequest;
(function (StartCelebrityRecognitionRequest) {
    /**
     * @internal
     */
    StartCelebrityRecognitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCelebrityRecognitionRequest = exports.StartCelebrityRecognitionRequest || (exports.StartCelebrityRecognitionRequest = {}));
var StartCelebrityRecognitionResponse;
(function (StartCelebrityRecognitionResponse) {
    /**
     * @internal
     */
    StartCelebrityRecognitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCelebrityRecognitionResponse = exports.StartCelebrityRecognitionResponse || (exports.StartCelebrityRecognitionResponse = {}));
var VideoTooLargeException;
(function (VideoTooLargeException) {
    /**
     * @internal
     */
    VideoTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoTooLargeException = exports.VideoTooLargeException || (exports.VideoTooLargeException = {}));
var StartContentModerationRequest;
(function (StartContentModerationRequest) {
    /**
     * @internal
     */
    StartContentModerationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartContentModerationRequest = exports.StartContentModerationRequest || (exports.StartContentModerationRequest = {}));
var StartContentModerationResponse;
(function (StartContentModerationResponse) {
    /**
     * @internal
     */
    StartContentModerationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartContentModerationResponse = exports.StartContentModerationResponse || (exports.StartContentModerationResponse = {}));
var StartFaceDetectionRequest;
(function (StartFaceDetectionRequest) {
    /**
     * @internal
     */
    StartFaceDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFaceDetectionRequest = exports.StartFaceDetectionRequest || (exports.StartFaceDetectionRequest = {}));
var StartFaceDetectionResponse;
(function (StartFaceDetectionResponse) {
    /**
     * @internal
     */
    StartFaceDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFaceDetectionResponse = exports.StartFaceDetectionResponse || (exports.StartFaceDetectionResponse = {}));
var StartFaceSearchRequest;
(function (StartFaceSearchRequest) {
    /**
     * @internal
     */
    StartFaceSearchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFaceSearchRequest = exports.StartFaceSearchRequest || (exports.StartFaceSearchRequest = {}));
var StartFaceSearchResponse;
(function (StartFaceSearchResponse) {
    /**
     * @internal
     */
    StartFaceSearchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFaceSearchResponse = exports.StartFaceSearchResponse || (exports.StartFaceSearchResponse = {}));
var StartLabelDetectionRequest;
(function (StartLabelDetectionRequest) {
    /**
     * @internal
     */
    StartLabelDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLabelDetectionRequest = exports.StartLabelDetectionRequest || (exports.StartLabelDetectionRequest = {}));
var StartLabelDetectionResponse;
(function (StartLabelDetectionResponse) {
    /**
     * @internal
     */
    StartLabelDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLabelDetectionResponse = exports.StartLabelDetectionResponse || (exports.StartLabelDetectionResponse = {}));
var StartPersonTrackingRequest;
(function (StartPersonTrackingRequest) {
    /**
     * @internal
     */
    StartPersonTrackingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPersonTrackingRequest = exports.StartPersonTrackingRequest || (exports.StartPersonTrackingRequest = {}));
var StartPersonTrackingResponse;
(function (StartPersonTrackingResponse) {
    /**
     * @internal
     */
    StartPersonTrackingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPersonTrackingResponse = exports.StartPersonTrackingResponse || (exports.StartPersonTrackingResponse = {}));
var StartProjectVersionRequest;
(function (StartProjectVersionRequest) {
    /**
     * @internal
     */
    StartProjectVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartProjectVersionRequest = exports.StartProjectVersionRequest || (exports.StartProjectVersionRequest = {}));
var StartProjectVersionResponse;
(function (StartProjectVersionResponse) {
    /**
     * @internal
     */
    StartProjectVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartProjectVersionResponse = exports.StartProjectVersionResponse || (exports.StartProjectVersionResponse = {}));
var StartShotDetectionFilter;
(function (StartShotDetectionFilter) {
    /**
     * @internal
     */
    StartShotDetectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartShotDetectionFilter = exports.StartShotDetectionFilter || (exports.StartShotDetectionFilter = {}));
var StartTechnicalCueDetectionFilter;
(function (StartTechnicalCueDetectionFilter) {
    /**
     * @internal
     */
    StartTechnicalCueDetectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTechnicalCueDetectionFilter = exports.StartTechnicalCueDetectionFilter || (exports.StartTechnicalCueDetectionFilter = {}));
var StartSegmentDetectionFilters;
(function (StartSegmentDetectionFilters) {
    /**
     * @internal
     */
    StartSegmentDetectionFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSegmentDetectionFilters = exports.StartSegmentDetectionFilters || (exports.StartSegmentDetectionFilters = {}));
var StartSegmentDetectionRequest;
(function (StartSegmentDetectionRequest) {
    /**
     * @internal
     */
    StartSegmentDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSegmentDetectionRequest = exports.StartSegmentDetectionRequest || (exports.StartSegmentDetectionRequest = {}));
var StartSegmentDetectionResponse;
(function (StartSegmentDetectionResponse) {
    /**
     * @internal
     */
    StartSegmentDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSegmentDetectionResponse = exports.StartSegmentDetectionResponse || (exports.StartSegmentDetectionResponse = {}));
var StartStreamProcessorRequest;
(function (StartStreamProcessorRequest) {
    /**
     * @internal
     */
    StartStreamProcessorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartStreamProcessorRequest = exports.StartStreamProcessorRequest || (exports.StartStreamProcessorRequest = {}));
var StartStreamProcessorResponse;
(function (StartStreamProcessorResponse) {
    /**
     * @internal
     */
    StartStreamProcessorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartStreamProcessorResponse = exports.StartStreamProcessorResponse || (exports.StartStreamProcessorResponse = {}));
var StartTextDetectionFilters;
(function (StartTextDetectionFilters) {
    /**
     * @internal
     */
    StartTextDetectionFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTextDetectionFilters = exports.StartTextDetectionFilters || (exports.StartTextDetectionFilters = {}));
var StartTextDetectionRequest;
(function (StartTextDetectionRequest) {
    /**
     * @internal
     */
    StartTextDetectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTextDetectionRequest = exports.StartTextDetectionRequest || (exports.StartTextDetectionRequest = {}));
var StartTextDetectionResponse;
(function (StartTextDetectionResponse) {
    /**
     * @internal
     */
    StartTextDetectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTextDetectionResponse = exports.StartTextDetectionResponse || (exports.StartTextDetectionResponse = {}));
var StopProjectVersionRequest;
(function (StopProjectVersionRequest) {
    /**
     * @internal
     */
    StopProjectVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopProjectVersionRequest = exports.StopProjectVersionRequest || (exports.StopProjectVersionRequest = {}));
var StopProjectVersionResponse;
(function (StopProjectVersionResponse) {
    /**
     * @internal
     */
    StopProjectVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopProjectVersionResponse = exports.StopProjectVersionResponse || (exports.StopProjectVersionResponse = {}));
var StopStreamProcessorRequest;
(function (StopStreamProcessorRequest) {
    /**
     * @internal
     */
    StopStreamProcessorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopStreamProcessorRequest = exports.StopStreamProcessorRequest || (exports.StopStreamProcessorRequest = {}));
var StopStreamProcessorResponse;
(function (StopStreamProcessorResponse) {
    /**
     * @internal
     */
    StopStreamProcessorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopStreamProcessorResponse = exports.StopStreamProcessorResponse || (exports.StopStreamProcessorResponse = {}));
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
//# sourceMappingURL=models_0.js.map