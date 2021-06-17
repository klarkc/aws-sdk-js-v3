"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H265InterlaceMode = exports.H265GopSizeUnits = exports.H265GopBReference = exports.H265FramerateConversionAlgorithm = exports.H265FramerateControl = exports.H265FlickerAdaptiveQuantization = exports.H265DynamicSubGop = exports.H265CodecProfile = exports.H265CodecLevel = exports.H265AlternateTransferFunctionSei = exports.H265AdaptiveQuantization = exports.H264Settings = exports.H264UnregisteredSeiTimecode = exports.H264TemporalAdaptiveQuantization = exports.H264Telecine = exports.H264Syntax = exports.H264SpatialAdaptiveQuantization = exports.H264SlowPal = exports.H264SceneChangeDetect = exports.H264ScanTypeConversionMode = exports.H264RepeatPps = exports.H264RateControlMode = exports.H264QvbrSettings = exports.H264QualityTuningLevel = exports.H264ParControl = exports.H264InterlaceMode = exports.H264GopSizeUnits = exports.H264GopBReference = exports.H264FramerateConversionAlgorithm = exports.H264FramerateControl = exports.H264FlickerAdaptiveQuantization = exports.H264FieldEncoding = exports.H264EntropyEncoding = exports.H264DynamicSubGop = exports.H264CodecProfile = exports.H264CodecLevel = exports.H264AdaptiveQuantization = exports.FrameCaptureSettings = exports.VideoCodec = exports.AvcIntraSettings = exports.AvcIntraTelecine = exports.AvcIntraSlowPal = exports.AvcIntraScanTypeConversionMode = exports.AvcIntraInterlaceMode = exports.AvcIntraFramerateConversionAlgorithm = exports.AvcIntraFramerateControl = exports.AvcIntraUhdSettings = exports.AvcIntraUhdQualityTuningLevel = exports.AvcIntraClass = exports.Av1Settings = void 0;
exports.Vc3SlowPal = exports.Vc3ScanTypeConversionMode = exports.Vc3InterlaceMode = exports.Vc3FramerateConversionAlgorithm = exports.Vc3FramerateControl = exports.ProresSettings = exports.ProresTelecine = exports.ProresSlowPal = exports.ProresScanTypeConversionMode = exports.ProresParControl = exports.ProresInterlaceMode = exports.ProresFramerateConversionAlgorithm = exports.ProresFramerateControl = exports.ProresCodecProfile = exports.Mpeg2Settings = exports.Mpeg2TemporalAdaptiveQuantization = exports.Mpeg2Telecine = exports.Mpeg2Syntax = exports.Mpeg2SpatialAdaptiveQuantization = exports.Mpeg2SlowPal = exports.Mpeg2SceneChangeDetect = exports.Mpeg2ScanTypeConversionMode = exports.Mpeg2RateControlMode = exports.Mpeg2QualityTuningLevel = exports.Mpeg2ParControl = exports.Mpeg2IntraDcPrecision = exports.Mpeg2InterlaceMode = exports.Mpeg2GopSizeUnits = exports.Mpeg2FramerateConversionAlgorithm = exports.Mpeg2FramerateControl = exports.Mpeg2DynamicSubGop = exports.Mpeg2CodecProfile = exports.Mpeg2CodecLevel = exports.Mpeg2AdaptiveQuantization = exports.H265Settings = exports.H265WriteMp4PackagingType = exports.H265UnregisteredSeiTimecode = exports.H265Tiles = exports.H265TemporalIds = exports.H265TemporalAdaptiveQuantization = exports.H265Telecine = exports.H265SpatialAdaptiveQuantization = exports.H265SlowPal = exports.H265SceneChangeDetect = exports.H265ScanTypeConversionMode = exports.H265SampleAdaptiveOffsetFilterMode = exports.H265RateControlMode = exports.H265QvbrSettings = exports.H265QualityTuningLevel = exports.H265ParControl = void 0;
exports.JobSettings = exports.TimedMetadataInsertion = exports.TimecodeConfig = exports.TimecodeSource = exports.OutputGroup = exports.Output = exports.VideoDescription = exports.VideoPreprocessor = exports.TimecodeBurnin = exports.TimecodeBurninPosition = exports.PartnerWatermarking = exports.NexGuardFileMarkerSettings = exports.WatermarkingStrength = exports.NoiseReducer = exports.NoiseReducerTemporalFilterSettings = exports.NoiseFilterPostTemporalSharpening = exports.NoiseReducerSpatialFilterSettings = exports.NoiseReducerFilterSettings = exports.NoiseReducerFilter = exports.DolbyVision = exports.DolbyVisionProfile = exports.DolbyVisionLevel6Mode = exports.DolbyVisionLevel6Metadata = exports.Deinterlacer = exports.DeinterlacerMode = exports.DeinterlacerControl = exports.DeinterlaceAlgorithm = exports.ColorCorrector = exports.ColorSpaceConversion = exports.VideoTimecodeInsertion = exports.ScalingBehavior = exports.RespondToAfd = exports.DropFrameTimecode = exports.ColorMetadata = exports.VideoCodecSettings = exports.Vp9Settings = exports.Vp9RateControlMode = exports.Vp9QualityTuningLevel = exports.Vp9ParControl = exports.Vp9FramerateConversionAlgorithm = exports.Vp9FramerateControl = exports.Vp8Settings = exports.Vp8RateControlMode = exports.Vp8QualityTuningLevel = exports.Vp8ParControl = exports.Vp8FramerateConversionAlgorithm = exports.Vp8FramerateControl = exports.Vc3Settings = exports.Vc3Class = exports.Vc3Telecine = void 0;
exports.GetJobTemplateRequest = exports.GetJobResponse = exports.GetJobRequest = exports.DisassociateCertificateResponse = exports.DisassociateCertificateRequest = exports.DescribeEndpointsResponse = exports.DescribeEndpointsRequest = exports.DescribeEndpointsMode = exports.DeleteQueueResponse = exports.DeleteQueueRequest = exports.DeletePresetResponse = exports.DeletePresetRequest = exports.DeleteJobTemplateResponse = exports.DeleteJobTemplateRequest = exports.CreateQueueResponse = exports.CreateQueueRequest = exports.ReservationPlanSettings = exports.CreatePresetResponse = exports.CreatePresetRequest = exports.CreateJobTemplateResponse = exports.CreateJobTemplateRequest = exports.CreateJobResponse = exports.CreateJobRequest = exports.CancelJobResponse = exports.CancelJobRequest = exports.TooManyRequestsException = exports.NotFoundException = exports.InternalServerErrorException = exports.ForbiddenException = exports.ConflictException = exports.BadRequestException = exports.AssociateCertificateResponse = exports.AssociateCertificateRequest = exports.Queue = exports.QueueStatus = exports.ReservationPlan = exports.ReservationPlanStatus = exports.RenewalType = exports.Commitment = exports.PricingPlan = exports.Preset = exports.PresetSettings = exports.JobTemplate = exports.Type = exports.JobTemplateSettings = exports.Job = exports.Timing = exports.StatusUpdateInterval = exports.JobStatus = exports.SimulateReservedQueue = void 0;
exports.UpdateQueueResponse = exports.UpdateQueueRequest = exports.UpdatePresetResponse = exports.UpdatePresetRequest = exports.UpdateJobTemplateResponse = exports.UpdateJobTemplateRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ResourceTags = exports.ListTagsForResourceRequest = exports.ListQueuesResponse = exports.ListQueuesRequest = exports.QueueListBy = exports.ListPresetsResponse = exports.ListPresetsRequest = exports.PresetListBy = exports.ListJobTemplatesResponse = exports.ListJobTemplatesRequest = exports.ListJobsResponse = exports.ListJobsRequest = exports.Order = exports.JobTemplateListBy = exports.GetQueueResponse = exports.GetQueueRequest = exports.GetPresetResponse = exports.GetPresetRequest = exports.GetJobTemplateResponse = void 0;
var Av1Settings;
(function (Av1Settings) {
    /**
     * @internal
     */
    Av1Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Av1Settings = exports.Av1Settings || (exports.Av1Settings = {}));
var AvcIntraClass;
(function (AvcIntraClass) {
    AvcIntraClass["CLASS_100"] = "CLASS_100";
    AvcIntraClass["CLASS_200"] = "CLASS_200";
    AvcIntraClass["CLASS_4K_2K"] = "CLASS_4K_2K";
    AvcIntraClass["CLASS_50"] = "CLASS_50";
})(AvcIntraClass = exports.AvcIntraClass || (exports.AvcIntraClass = {}));
var AvcIntraUhdQualityTuningLevel;
(function (AvcIntraUhdQualityTuningLevel) {
    AvcIntraUhdQualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    AvcIntraUhdQualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
})(AvcIntraUhdQualityTuningLevel = exports.AvcIntraUhdQualityTuningLevel || (exports.AvcIntraUhdQualityTuningLevel = {}));
var AvcIntraUhdSettings;
(function (AvcIntraUhdSettings) {
    /**
     * @internal
     */
    AvcIntraUhdSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvcIntraUhdSettings = exports.AvcIntraUhdSettings || (exports.AvcIntraUhdSettings = {}));
var AvcIntraFramerateControl;
(function (AvcIntraFramerateControl) {
    AvcIntraFramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    AvcIntraFramerateControl["SPECIFIED"] = "SPECIFIED";
})(AvcIntraFramerateControl = exports.AvcIntraFramerateControl || (exports.AvcIntraFramerateControl = {}));
var AvcIntraFramerateConversionAlgorithm;
(function (AvcIntraFramerateConversionAlgorithm) {
    AvcIntraFramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    AvcIntraFramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    AvcIntraFramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(AvcIntraFramerateConversionAlgorithm = exports.AvcIntraFramerateConversionAlgorithm || (exports.AvcIntraFramerateConversionAlgorithm = {}));
var AvcIntraInterlaceMode;
(function (AvcIntraInterlaceMode) {
    AvcIntraInterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    AvcIntraInterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    AvcIntraInterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    AvcIntraInterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    AvcIntraInterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(AvcIntraInterlaceMode = exports.AvcIntraInterlaceMode || (exports.AvcIntraInterlaceMode = {}));
var AvcIntraScanTypeConversionMode;
(function (AvcIntraScanTypeConversionMode) {
    AvcIntraScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    AvcIntraScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(AvcIntraScanTypeConversionMode = exports.AvcIntraScanTypeConversionMode || (exports.AvcIntraScanTypeConversionMode = {}));
var AvcIntraSlowPal;
(function (AvcIntraSlowPal) {
    AvcIntraSlowPal["DISABLED"] = "DISABLED";
    AvcIntraSlowPal["ENABLED"] = "ENABLED";
})(AvcIntraSlowPal = exports.AvcIntraSlowPal || (exports.AvcIntraSlowPal = {}));
var AvcIntraTelecine;
(function (AvcIntraTelecine) {
    AvcIntraTelecine["HARD"] = "HARD";
    AvcIntraTelecine["NONE"] = "NONE";
})(AvcIntraTelecine = exports.AvcIntraTelecine || (exports.AvcIntraTelecine = {}));
var AvcIntraSettings;
(function (AvcIntraSettings) {
    /**
     * @internal
     */
    AvcIntraSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvcIntraSettings = exports.AvcIntraSettings || (exports.AvcIntraSettings = {}));
var VideoCodec;
(function (VideoCodec) {
    VideoCodec["AV1"] = "AV1";
    VideoCodec["AVC_INTRA"] = "AVC_INTRA";
    VideoCodec["FRAME_CAPTURE"] = "FRAME_CAPTURE";
    VideoCodec["H_264"] = "H_264";
    VideoCodec["H_265"] = "H_265";
    VideoCodec["MPEG2"] = "MPEG2";
    VideoCodec["PRORES"] = "PRORES";
    VideoCodec["VC3"] = "VC3";
    VideoCodec["VP8"] = "VP8";
    VideoCodec["VP9"] = "VP9";
})(VideoCodec = exports.VideoCodec || (exports.VideoCodec = {}));
var FrameCaptureSettings;
(function (FrameCaptureSettings) {
    /**
     * @internal
     */
    FrameCaptureSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureSettings = exports.FrameCaptureSettings || (exports.FrameCaptureSettings = {}));
var H264AdaptiveQuantization;
(function (H264AdaptiveQuantization) {
    H264AdaptiveQuantization["AUTO"] = "AUTO";
    H264AdaptiveQuantization["HIGH"] = "HIGH";
    H264AdaptiveQuantization["HIGHER"] = "HIGHER";
    H264AdaptiveQuantization["LOW"] = "LOW";
    H264AdaptiveQuantization["MAX"] = "MAX";
    H264AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H264AdaptiveQuantization["OFF"] = "OFF";
})(H264AdaptiveQuantization = exports.H264AdaptiveQuantization || (exports.H264AdaptiveQuantization = {}));
var H264CodecLevel;
(function (H264CodecLevel) {
    H264CodecLevel["AUTO"] = "AUTO";
    H264CodecLevel["LEVEL_1"] = "LEVEL_1";
    H264CodecLevel["LEVEL_1_1"] = "LEVEL_1_1";
    H264CodecLevel["LEVEL_1_2"] = "LEVEL_1_2";
    H264CodecLevel["LEVEL_1_3"] = "LEVEL_1_3";
    H264CodecLevel["LEVEL_2"] = "LEVEL_2";
    H264CodecLevel["LEVEL_2_1"] = "LEVEL_2_1";
    H264CodecLevel["LEVEL_2_2"] = "LEVEL_2_2";
    H264CodecLevel["LEVEL_3"] = "LEVEL_3";
    H264CodecLevel["LEVEL_3_1"] = "LEVEL_3_1";
    H264CodecLevel["LEVEL_3_2"] = "LEVEL_3_2";
    H264CodecLevel["LEVEL_4"] = "LEVEL_4";
    H264CodecLevel["LEVEL_4_1"] = "LEVEL_4_1";
    H264CodecLevel["LEVEL_4_2"] = "LEVEL_4_2";
    H264CodecLevel["LEVEL_5"] = "LEVEL_5";
    H264CodecLevel["LEVEL_5_1"] = "LEVEL_5_1";
    H264CodecLevel["LEVEL_5_2"] = "LEVEL_5_2";
})(H264CodecLevel = exports.H264CodecLevel || (exports.H264CodecLevel = {}));
var H264CodecProfile;
(function (H264CodecProfile) {
    H264CodecProfile["BASELINE"] = "BASELINE";
    H264CodecProfile["HIGH"] = "HIGH";
    H264CodecProfile["HIGH_10BIT"] = "HIGH_10BIT";
    H264CodecProfile["HIGH_422"] = "HIGH_422";
    H264CodecProfile["HIGH_422_10BIT"] = "HIGH_422_10BIT";
    H264CodecProfile["MAIN"] = "MAIN";
})(H264CodecProfile = exports.H264CodecProfile || (exports.H264CodecProfile = {}));
var H264DynamicSubGop;
(function (H264DynamicSubGop) {
    H264DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    H264DynamicSubGop["STATIC"] = "STATIC";
})(H264DynamicSubGop = exports.H264DynamicSubGop || (exports.H264DynamicSubGop = {}));
var H264EntropyEncoding;
(function (H264EntropyEncoding) {
    H264EntropyEncoding["CABAC"] = "CABAC";
    H264EntropyEncoding["CAVLC"] = "CAVLC";
})(H264EntropyEncoding = exports.H264EntropyEncoding || (exports.H264EntropyEncoding = {}));
var H264FieldEncoding;
(function (H264FieldEncoding) {
    H264FieldEncoding["FORCE_FIELD"] = "FORCE_FIELD";
    H264FieldEncoding["PAFF"] = "PAFF";
})(H264FieldEncoding = exports.H264FieldEncoding || (exports.H264FieldEncoding = {}));
var H264FlickerAdaptiveQuantization;
(function (H264FlickerAdaptiveQuantization) {
    H264FlickerAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264FlickerAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264FlickerAdaptiveQuantization = exports.H264FlickerAdaptiveQuantization || (exports.H264FlickerAdaptiveQuantization = {}));
var H264FramerateControl;
(function (H264FramerateControl) {
    H264FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H264FramerateControl = exports.H264FramerateControl || (exports.H264FramerateControl = {}));
var H264FramerateConversionAlgorithm;
(function (H264FramerateConversionAlgorithm) {
    H264FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    H264FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    H264FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(H264FramerateConversionAlgorithm = exports.H264FramerateConversionAlgorithm || (exports.H264FramerateConversionAlgorithm = {}));
var H264GopBReference;
(function (H264GopBReference) {
    H264GopBReference["DISABLED"] = "DISABLED";
    H264GopBReference["ENABLED"] = "ENABLED";
})(H264GopBReference = exports.H264GopBReference || (exports.H264GopBReference = {}));
var H264GopSizeUnits;
(function (H264GopSizeUnits) {
    H264GopSizeUnits["FRAMES"] = "FRAMES";
    H264GopSizeUnits["SECONDS"] = "SECONDS";
})(H264GopSizeUnits = exports.H264GopSizeUnits || (exports.H264GopSizeUnits = {}));
var H264InterlaceMode;
(function (H264InterlaceMode) {
    H264InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    H264InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    H264InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    H264InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    H264InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(H264InterlaceMode = exports.H264InterlaceMode || (exports.H264InterlaceMode = {}));
var H264ParControl;
(function (H264ParControl) {
    H264ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264ParControl["SPECIFIED"] = "SPECIFIED";
})(H264ParControl = exports.H264ParControl || (exports.H264ParControl = {}));
var H264QualityTuningLevel;
(function (H264QualityTuningLevel) {
    H264QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
    H264QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
    H264QualityTuningLevel["SINGLE_PASS_HQ"] = "SINGLE_PASS_HQ";
})(H264QualityTuningLevel = exports.H264QualityTuningLevel || (exports.H264QualityTuningLevel = {}));
var H264QvbrSettings;
(function (H264QvbrSettings) {
    /**
     * @internal
     */
    H264QvbrSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H264QvbrSettings = exports.H264QvbrSettings || (exports.H264QvbrSettings = {}));
var H264RateControlMode;
(function (H264RateControlMode) {
    H264RateControlMode["CBR"] = "CBR";
    H264RateControlMode["QVBR"] = "QVBR";
    H264RateControlMode["VBR"] = "VBR";
})(H264RateControlMode = exports.H264RateControlMode || (exports.H264RateControlMode = {}));
var H264RepeatPps;
(function (H264RepeatPps) {
    H264RepeatPps["DISABLED"] = "DISABLED";
    H264RepeatPps["ENABLED"] = "ENABLED";
})(H264RepeatPps = exports.H264RepeatPps || (exports.H264RepeatPps = {}));
var H264ScanTypeConversionMode;
(function (H264ScanTypeConversionMode) {
    H264ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    H264ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(H264ScanTypeConversionMode = exports.H264ScanTypeConversionMode || (exports.H264ScanTypeConversionMode = {}));
var H264SceneChangeDetect;
(function (H264SceneChangeDetect) {
    H264SceneChangeDetect["DISABLED"] = "DISABLED";
    H264SceneChangeDetect["ENABLED"] = "ENABLED";
    H264SceneChangeDetect["TRANSITION_DETECTION"] = "TRANSITION_DETECTION";
})(H264SceneChangeDetect = exports.H264SceneChangeDetect || (exports.H264SceneChangeDetect = {}));
var H264SlowPal;
(function (H264SlowPal) {
    H264SlowPal["DISABLED"] = "DISABLED";
    H264SlowPal["ENABLED"] = "ENABLED";
})(H264SlowPal = exports.H264SlowPal || (exports.H264SlowPal = {}));
var H264SpatialAdaptiveQuantization;
(function (H264SpatialAdaptiveQuantization) {
    H264SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264SpatialAdaptiveQuantization = exports.H264SpatialAdaptiveQuantization || (exports.H264SpatialAdaptiveQuantization = {}));
var H264Syntax;
(function (H264Syntax) {
    H264Syntax["DEFAULT"] = "DEFAULT";
    H264Syntax["RP2027"] = "RP2027";
})(H264Syntax = exports.H264Syntax || (exports.H264Syntax = {}));
var H264Telecine;
(function (H264Telecine) {
    H264Telecine["HARD"] = "HARD";
    H264Telecine["NONE"] = "NONE";
    H264Telecine["SOFT"] = "SOFT";
})(H264Telecine = exports.H264Telecine || (exports.H264Telecine = {}));
var H264TemporalAdaptiveQuantization;
(function (H264TemporalAdaptiveQuantization) {
    H264TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264TemporalAdaptiveQuantization = exports.H264TemporalAdaptiveQuantization || (exports.H264TemporalAdaptiveQuantization = {}));
var H264UnregisteredSeiTimecode;
(function (H264UnregisteredSeiTimecode) {
    H264UnregisteredSeiTimecode["DISABLED"] = "DISABLED";
    H264UnregisteredSeiTimecode["ENABLED"] = "ENABLED";
})(H264UnregisteredSeiTimecode = exports.H264UnregisteredSeiTimecode || (exports.H264UnregisteredSeiTimecode = {}));
var H264Settings;
(function (H264Settings) {
    /**
     * @internal
     */
    H264Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H264Settings = exports.H264Settings || (exports.H264Settings = {}));
var H265AdaptiveQuantization;
(function (H265AdaptiveQuantization) {
    H265AdaptiveQuantization["HIGH"] = "HIGH";
    H265AdaptiveQuantization["HIGHER"] = "HIGHER";
    H265AdaptiveQuantization["LOW"] = "LOW";
    H265AdaptiveQuantization["MAX"] = "MAX";
    H265AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H265AdaptiveQuantization["OFF"] = "OFF";
})(H265AdaptiveQuantization = exports.H265AdaptiveQuantization || (exports.H265AdaptiveQuantization = {}));
var H265AlternateTransferFunctionSei;
(function (H265AlternateTransferFunctionSei) {
    H265AlternateTransferFunctionSei["DISABLED"] = "DISABLED";
    H265AlternateTransferFunctionSei["ENABLED"] = "ENABLED";
})(H265AlternateTransferFunctionSei = exports.H265AlternateTransferFunctionSei || (exports.H265AlternateTransferFunctionSei = {}));
var H265CodecLevel;
(function (H265CodecLevel) {
    H265CodecLevel["AUTO"] = "AUTO";
    H265CodecLevel["LEVEL_1"] = "LEVEL_1";
    H265CodecLevel["LEVEL_2"] = "LEVEL_2";
    H265CodecLevel["LEVEL_2_1"] = "LEVEL_2_1";
    H265CodecLevel["LEVEL_3"] = "LEVEL_3";
    H265CodecLevel["LEVEL_3_1"] = "LEVEL_3_1";
    H265CodecLevel["LEVEL_4"] = "LEVEL_4";
    H265CodecLevel["LEVEL_4_1"] = "LEVEL_4_1";
    H265CodecLevel["LEVEL_5"] = "LEVEL_5";
    H265CodecLevel["LEVEL_5_1"] = "LEVEL_5_1";
    H265CodecLevel["LEVEL_5_2"] = "LEVEL_5_2";
    H265CodecLevel["LEVEL_6"] = "LEVEL_6";
    H265CodecLevel["LEVEL_6_1"] = "LEVEL_6_1";
    H265CodecLevel["LEVEL_6_2"] = "LEVEL_6_2";
})(H265CodecLevel = exports.H265CodecLevel || (exports.H265CodecLevel = {}));
var H265CodecProfile;
(function (H265CodecProfile) {
    H265CodecProfile["MAIN10_HIGH"] = "MAIN10_HIGH";
    H265CodecProfile["MAIN10_MAIN"] = "MAIN10_MAIN";
    H265CodecProfile["MAIN_422_10BIT_HIGH"] = "MAIN_422_10BIT_HIGH";
    H265CodecProfile["MAIN_422_10BIT_MAIN"] = "MAIN_422_10BIT_MAIN";
    H265CodecProfile["MAIN_422_8BIT_HIGH"] = "MAIN_422_8BIT_HIGH";
    H265CodecProfile["MAIN_422_8BIT_MAIN"] = "MAIN_422_8BIT_MAIN";
    H265CodecProfile["MAIN_HIGH"] = "MAIN_HIGH";
    H265CodecProfile["MAIN_MAIN"] = "MAIN_MAIN";
})(H265CodecProfile = exports.H265CodecProfile || (exports.H265CodecProfile = {}));
var H265DynamicSubGop;
(function (H265DynamicSubGop) {
    H265DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    H265DynamicSubGop["STATIC"] = "STATIC";
})(H265DynamicSubGop = exports.H265DynamicSubGop || (exports.H265DynamicSubGop = {}));
var H265FlickerAdaptiveQuantization;
(function (H265FlickerAdaptiveQuantization) {
    H265FlickerAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265FlickerAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265FlickerAdaptiveQuantization = exports.H265FlickerAdaptiveQuantization || (exports.H265FlickerAdaptiveQuantization = {}));
var H265FramerateControl;
(function (H265FramerateControl) {
    H265FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H265FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H265FramerateControl = exports.H265FramerateControl || (exports.H265FramerateControl = {}));
var H265FramerateConversionAlgorithm;
(function (H265FramerateConversionAlgorithm) {
    H265FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    H265FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    H265FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(H265FramerateConversionAlgorithm = exports.H265FramerateConversionAlgorithm || (exports.H265FramerateConversionAlgorithm = {}));
var H265GopBReference;
(function (H265GopBReference) {
    H265GopBReference["DISABLED"] = "DISABLED";
    H265GopBReference["ENABLED"] = "ENABLED";
})(H265GopBReference = exports.H265GopBReference || (exports.H265GopBReference = {}));
var H265GopSizeUnits;
(function (H265GopSizeUnits) {
    H265GopSizeUnits["FRAMES"] = "FRAMES";
    H265GopSizeUnits["SECONDS"] = "SECONDS";
})(H265GopSizeUnits = exports.H265GopSizeUnits || (exports.H265GopSizeUnits = {}));
var H265InterlaceMode;
(function (H265InterlaceMode) {
    H265InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    H265InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    H265InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    H265InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    H265InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(H265InterlaceMode = exports.H265InterlaceMode || (exports.H265InterlaceMode = {}));
var H265ParControl;
(function (H265ParControl) {
    H265ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H265ParControl["SPECIFIED"] = "SPECIFIED";
})(H265ParControl = exports.H265ParControl || (exports.H265ParControl = {}));
var H265QualityTuningLevel;
(function (H265QualityTuningLevel) {
    H265QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
    H265QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
    H265QualityTuningLevel["SINGLE_PASS_HQ"] = "SINGLE_PASS_HQ";
})(H265QualityTuningLevel = exports.H265QualityTuningLevel || (exports.H265QualityTuningLevel = {}));
var H265QvbrSettings;
(function (H265QvbrSettings) {
    /**
     * @internal
     */
    H265QvbrSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H265QvbrSettings = exports.H265QvbrSettings || (exports.H265QvbrSettings = {}));
var H265RateControlMode;
(function (H265RateControlMode) {
    H265RateControlMode["CBR"] = "CBR";
    H265RateControlMode["QVBR"] = "QVBR";
    H265RateControlMode["VBR"] = "VBR";
})(H265RateControlMode = exports.H265RateControlMode || (exports.H265RateControlMode = {}));
var H265SampleAdaptiveOffsetFilterMode;
(function (H265SampleAdaptiveOffsetFilterMode) {
    H265SampleAdaptiveOffsetFilterMode["ADAPTIVE"] = "ADAPTIVE";
    H265SampleAdaptiveOffsetFilterMode["DEFAULT"] = "DEFAULT";
    H265SampleAdaptiveOffsetFilterMode["OFF"] = "OFF";
})(H265SampleAdaptiveOffsetFilterMode = exports.H265SampleAdaptiveOffsetFilterMode || (exports.H265SampleAdaptiveOffsetFilterMode = {}));
var H265ScanTypeConversionMode;
(function (H265ScanTypeConversionMode) {
    H265ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    H265ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(H265ScanTypeConversionMode = exports.H265ScanTypeConversionMode || (exports.H265ScanTypeConversionMode = {}));
var H265SceneChangeDetect;
(function (H265SceneChangeDetect) {
    H265SceneChangeDetect["DISABLED"] = "DISABLED";
    H265SceneChangeDetect["ENABLED"] = "ENABLED";
    H265SceneChangeDetect["TRANSITION_DETECTION"] = "TRANSITION_DETECTION";
})(H265SceneChangeDetect = exports.H265SceneChangeDetect || (exports.H265SceneChangeDetect = {}));
var H265SlowPal;
(function (H265SlowPal) {
    H265SlowPal["DISABLED"] = "DISABLED";
    H265SlowPal["ENABLED"] = "ENABLED";
})(H265SlowPal = exports.H265SlowPal || (exports.H265SlowPal = {}));
var H265SpatialAdaptiveQuantization;
(function (H265SpatialAdaptiveQuantization) {
    H265SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265SpatialAdaptiveQuantization = exports.H265SpatialAdaptiveQuantization || (exports.H265SpatialAdaptiveQuantization = {}));
var H265Telecine;
(function (H265Telecine) {
    H265Telecine["HARD"] = "HARD";
    H265Telecine["NONE"] = "NONE";
    H265Telecine["SOFT"] = "SOFT";
})(H265Telecine = exports.H265Telecine || (exports.H265Telecine = {}));
var H265TemporalAdaptiveQuantization;
(function (H265TemporalAdaptiveQuantization) {
    H265TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265TemporalAdaptiveQuantization = exports.H265TemporalAdaptiveQuantization || (exports.H265TemporalAdaptiveQuantization = {}));
var H265TemporalIds;
(function (H265TemporalIds) {
    H265TemporalIds["DISABLED"] = "DISABLED";
    H265TemporalIds["ENABLED"] = "ENABLED";
})(H265TemporalIds = exports.H265TemporalIds || (exports.H265TemporalIds = {}));
var H265Tiles;
(function (H265Tiles) {
    H265Tiles["DISABLED"] = "DISABLED";
    H265Tiles["ENABLED"] = "ENABLED";
})(H265Tiles = exports.H265Tiles || (exports.H265Tiles = {}));
var H265UnregisteredSeiTimecode;
(function (H265UnregisteredSeiTimecode) {
    H265UnregisteredSeiTimecode["DISABLED"] = "DISABLED";
    H265UnregisteredSeiTimecode["ENABLED"] = "ENABLED";
})(H265UnregisteredSeiTimecode = exports.H265UnregisteredSeiTimecode || (exports.H265UnregisteredSeiTimecode = {}));
var H265WriteMp4PackagingType;
(function (H265WriteMp4PackagingType) {
    H265WriteMp4PackagingType["HEV1"] = "HEV1";
    H265WriteMp4PackagingType["HVC1"] = "HVC1";
})(H265WriteMp4PackagingType = exports.H265WriteMp4PackagingType || (exports.H265WriteMp4PackagingType = {}));
var H265Settings;
(function (H265Settings) {
    /**
     * @internal
     */
    H265Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H265Settings = exports.H265Settings || (exports.H265Settings = {}));
var Mpeg2AdaptiveQuantization;
(function (Mpeg2AdaptiveQuantization) {
    Mpeg2AdaptiveQuantization["HIGH"] = "HIGH";
    Mpeg2AdaptiveQuantization["LOW"] = "LOW";
    Mpeg2AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Mpeg2AdaptiveQuantization["OFF"] = "OFF";
})(Mpeg2AdaptiveQuantization = exports.Mpeg2AdaptiveQuantization || (exports.Mpeg2AdaptiveQuantization = {}));
var Mpeg2CodecLevel;
(function (Mpeg2CodecLevel) {
    Mpeg2CodecLevel["AUTO"] = "AUTO";
    Mpeg2CodecLevel["HIGH"] = "HIGH";
    Mpeg2CodecLevel["HIGH1440"] = "HIGH1440";
    Mpeg2CodecLevel["LOW"] = "LOW";
    Mpeg2CodecLevel["MAIN"] = "MAIN";
})(Mpeg2CodecLevel = exports.Mpeg2CodecLevel || (exports.Mpeg2CodecLevel = {}));
var Mpeg2CodecProfile;
(function (Mpeg2CodecProfile) {
    Mpeg2CodecProfile["MAIN"] = "MAIN";
    Mpeg2CodecProfile["PROFILE_422"] = "PROFILE_422";
})(Mpeg2CodecProfile = exports.Mpeg2CodecProfile || (exports.Mpeg2CodecProfile = {}));
var Mpeg2DynamicSubGop;
(function (Mpeg2DynamicSubGop) {
    Mpeg2DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    Mpeg2DynamicSubGop["STATIC"] = "STATIC";
})(Mpeg2DynamicSubGop = exports.Mpeg2DynamicSubGop || (exports.Mpeg2DynamicSubGop = {}));
var Mpeg2FramerateControl;
(function (Mpeg2FramerateControl) {
    Mpeg2FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Mpeg2FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Mpeg2FramerateControl = exports.Mpeg2FramerateControl || (exports.Mpeg2FramerateControl = {}));
var Mpeg2FramerateConversionAlgorithm;
(function (Mpeg2FramerateConversionAlgorithm) {
    Mpeg2FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Mpeg2FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Mpeg2FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Mpeg2FramerateConversionAlgorithm = exports.Mpeg2FramerateConversionAlgorithm || (exports.Mpeg2FramerateConversionAlgorithm = {}));
var Mpeg2GopSizeUnits;
(function (Mpeg2GopSizeUnits) {
    Mpeg2GopSizeUnits["FRAMES"] = "FRAMES";
    Mpeg2GopSizeUnits["SECONDS"] = "SECONDS";
})(Mpeg2GopSizeUnits = exports.Mpeg2GopSizeUnits || (exports.Mpeg2GopSizeUnits = {}));
var Mpeg2InterlaceMode;
(function (Mpeg2InterlaceMode) {
    Mpeg2InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    Mpeg2InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    Mpeg2InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    Mpeg2InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    Mpeg2InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(Mpeg2InterlaceMode = exports.Mpeg2InterlaceMode || (exports.Mpeg2InterlaceMode = {}));
var Mpeg2IntraDcPrecision;
(function (Mpeg2IntraDcPrecision) {
    Mpeg2IntraDcPrecision["AUTO"] = "AUTO";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_10"] = "INTRA_DC_PRECISION_10";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_11"] = "INTRA_DC_PRECISION_11";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_8"] = "INTRA_DC_PRECISION_8";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_9"] = "INTRA_DC_PRECISION_9";
})(Mpeg2IntraDcPrecision = exports.Mpeg2IntraDcPrecision || (exports.Mpeg2IntraDcPrecision = {}));
var Mpeg2ParControl;
(function (Mpeg2ParControl) {
    Mpeg2ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Mpeg2ParControl["SPECIFIED"] = "SPECIFIED";
})(Mpeg2ParControl = exports.Mpeg2ParControl || (exports.Mpeg2ParControl = {}));
var Mpeg2QualityTuningLevel;
(function (Mpeg2QualityTuningLevel) {
    Mpeg2QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Mpeg2QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
})(Mpeg2QualityTuningLevel = exports.Mpeg2QualityTuningLevel || (exports.Mpeg2QualityTuningLevel = {}));
var Mpeg2RateControlMode;
(function (Mpeg2RateControlMode) {
    Mpeg2RateControlMode["CBR"] = "CBR";
    Mpeg2RateControlMode["VBR"] = "VBR";
})(Mpeg2RateControlMode = exports.Mpeg2RateControlMode || (exports.Mpeg2RateControlMode = {}));
var Mpeg2ScanTypeConversionMode;
(function (Mpeg2ScanTypeConversionMode) {
    Mpeg2ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    Mpeg2ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(Mpeg2ScanTypeConversionMode = exports.Mpeg2ScanTypeConversionMode || (exports.Mpeg2ScanTypeConversionMode = {}));
var Mpeg2SceneChangeDetect;
(function (Mpeg2SceneChangeDetect) {
    Mpeg2SceneChangeDetect["DISABLED"] = "DISABLED";
    Mpeg2SceneChangeDetect["ENABLED"] = "ENABLED";
})(Mpeg2SceneChangeDetect = exports.Mpeg2SceneChangeDetect || (exports.Mpeg2SceneChangeDetect = {}));
var Mpeg2SlowPal;
(function (Mpeg2SlowPal) {
    Mpeg2SlowPal["DISABLED"] = "DISABLED";
    Mpeg2SlowPal["ENABLED"] = "ENABLED";
})(Mpeg2SlowPal = exports.Mpeg2SlowPal || (exports.Mpeg2SlowPal = {}));
var Mpeg2SpatialAdaptiveQuantization;
(function (Mpeg2SpatialAdaptiveQuantization) {
    Mpeg2SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    Mpeg2SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Mpeg2SpatialAdaptiveQuantization = exports.Mpeg2SpatialAdaptiveQuantization || (exports.Mpeg2SpatialAdaptiveQuantization = {}));
var Mpeg2Syntax;
(function (Mpeg2Syntax) {
    Mpeg2Syntax["DEFAULT"] = "DEFAULT";
    Mpeg2Syntax["D_10"] = "D_10";
})(Mpeg2Syntax = exports.Mpeg2Syntax || (exports.Mpeg2Syntax = {}));
var Mpeg2Telecine;
(function (Mpeg2Telecine) {
    Mpeg2Telecine["HARD"] = "HARD";
    Mpeg2Telecine["NONE"] = "NONE";
    Mpeg2Telecine["SOFT"] = "SOFT";
})(Mpeg2Telecine = exports.Mpeg2Telecine || (exports.Mpeg2Telecine = {}));
var Mpeg2TemporalAdaptiveQuantization;
(function (Mpeg2TemporalAdaptiveQuantization) {
    Mpeg2TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    Mpeg2TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Mpeg2TemporalAdaptiveQuantization = exports.Mpeg2TemporalAdaptiveQuantization || (exports.Mpeg2TemporalAdaptiveQuantization = {}));
var Mpeg2Settings;
(function (Mpeg2Settings) {
    /**
     * @internal
     */
    Mpeg2Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mpeg2Settings = exports.Mpeg2Settings || (exports.Mpeg2Settings = {}));
var ProresCodecProfile;
(function (ProresCodecProfile) {
    ProresCodecProfile["APPLE_PRORES_422"] = "APPLE_PRORES_422";
    ProresCodecProfile["APPLE_PRORES_422_HQ"] = "APPLE_PRORES_422_HQ";
    ProresCodecProfile["APPLE_PRORES_422_LT"] = "APPLE_PRORES_422_LT";
    ProresCodecProfile["APPLE_PRORES_422_PROXY"] = "APPLE_PRORES_422_PROXY";
})(ProresCodecProfile = exports.ProresCodecProfile || (exports.ProresCodecProfile = {}));
var ProresFramerateControl;
(function (ProresFramerateControl) {
    ProresFramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    ProresFramerateControl["SPECIFIED"] = "SPECIFIED";
})(ProresFramerateControl = exports.ProresFramerateControl || (exports.ProresFramerateControl = {}));
var ProresFramerateConversionAlgorithm;
(function (ProresFramerateConversionAlgorithm) {
    ProresFramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    ProresFramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    ProresFramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(ProresFramerateConversionAlgorithm = exports.ProresFramerateConversionAlgorithm || (exports.ProresFramerateConversionAlgorithm = {}));
var ProresInterlaceMode;
(function (ProresInterlaceMode) {
    ProresInterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    ProresInterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    ProresInterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    ProresInterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    ProresInterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(ProresInterlaceMode = exports.ProresInterlaceMode || (exports.ProresInterlaceMode = {}));
var ProresParControl;
(function (ProresParControl) {
    ProresParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    ProresParControl["SPECIFIED"] = "SPECIFIED";
})(ProresParControl = exports.ProresParControl || (exports.ProresParControl = {}));
var ProresScanTypeConversionMode;
(function (ProresScanTypeConversionMode) {
    ProresScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    ProresScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(ProresScanTypeConversionMode = exports.ProresScanTypeConversionMode || (exports.ProresScanTypeConversionMode = {}));
var ProresSlowPal;
(function (ProresSlowPal) {
    ProresSlowPal["DISABLED"] = "DISABLED";
    ProresSlowPal["ENABLED"] = "ENABLED";
})(ProresSlowPal = exports.ProresSlowPal || (exports.ProresSlowPal = {}));
var ProresTelecine;
(function (ProresTelecine) {
    ProresTelecine["HARD"] = "HARD";
    ProresTelecine["NONE"] = "NONE";
})(ProresTelecine = exports.ProresTelecine || (exports.ProresTelecine = {}));
var ProresSettings;
(function (ProresSettings) {
    /**
     * @internal
     */
    ProresSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProresSettings = exports.ProresSettings || (exports.ProresSettings = {}));
var Vc3FramerateControl;
(function (Vc3FramerateControl) {
    Vc3FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vc3FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vc3FramerateControl = exports.Vc3FramerateControl || (exports.Vc3FramerateControl = {}));
var Vc3FramerateConversionAlgorithm;
(function (Vc3FramerateConversionAlgorithm) {
    Vc3FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vc3FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vc3FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vc3FramerateConversionAlgorithm = exports.Vc3FramerateConversionAlgorithm || (exports.Vc3FramerateConversionAlgorithm = {}));
var Vc3InterlaceMode;
(function (Vc3InterlaceMode) {
    Vc3InterlaceMode["INTERLACED"] = "INTERLACED";
    Vc3InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
})(Vc3InterlaceMode = exports.Vc3InterlaceMode || (exports.Vc3InterlaceMode = {}));
var Vc3ScanTypeConversionMode;
(function (Vc3ScanTypeConversionMode) {
    Vc3ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    Vc3ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(Vc3ScanTypeConversionMode = exports.Vc3ScanTypeConversionMode || (exports.Vc3ScanTypeConversionMode = {}));
var Vc3SlowPal;
(function (Vc3SlowPal) {
    Vc3SlowPal["DISABLED"] = "DISABLED";
    Vc3SlowPal["ENABLED"] = "ENABLED";
})(Vc3SlowPal = exports.Vc3SlowPal || (exports.Vc3SlowPal = {}));
var Vc3Telecine;
(function (Vc3Telecine) {
    Vc3Telecine["HARD"] = "HARD";
    Vc3Telecine["NONE"] = "NONE";
})(Vc3Telecine = exports.Vc3Telecine || (exports.Vc3Telecine = {}));
var Vc3Class;
(function (Vc3Class) {
    Vc3Class["CLASS_145_8BIT"] = "CLASS_145_8BIT";
    Vc3Class["CLASS_220_10BIT"] = "CLASS_220_10BIT";
    Vc3Class["CLASS_220_8BIT"] = "CLASS_220_8BIT";
})(Vc3Class = exports.Vc3Class || (exports.Vc3Class = {}));
var Vc3Settings;
(function (Vc3Settings) {
    /**
     * @internal
     */
    Vc3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Vc3Settings = exports.Vc3Settings || (exports.Vc3Settings = {}));
var Vp8FramerateControl;
(function (Vp8FramerateControl) {
    Vp8FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp8FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vp8FramerateControl = exports.Vp8FramerateControl || (exports.Vp8FramerateControl = {}));
var Vp8FramerateConversionAlgorithm;
(function (Vp8FramerateConversionAlgorithm) {
    Vp8FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vp8FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vp8FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vp8FramerateConversionAlgorithm = exports.Vp8FramerateConversionAlgorithm || (exports.Vp8FramerateConversionAlgorithm = {}));
var Vp8ParControl;
(function (Vp8ParControl) {
    Vp8ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp8ParControl["SPECIFIED"] = "SPECIFIED";
})(Vp8ParControl = exports.Vp8ParControl || (exports.Vp8ParControl = {}));
var Vp8QualityTuningLevel;
(function (Vp8QualityTuningLevel) {
    Vp8QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Vp8QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
})(Vp8QualityTuningLevel = exports.Vp8QualityTuningLevel || (exports.Vp8QualityTuningLevel = {}));
var Vp8RateControlMode;
(function (Vp8RateControlMode) {
    Vp8RateControlMode["VBR"] = "VBR";
})(Vp8RateControlMode = exports.Vp8RateControlMode || (exports.Vp8RateControlMode = {}));
var Vp8Settings;
(function (Vp8Settings) {
    /**
     * @internal
     */
    Vp8Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Vp8Settings = exports.Vp8Settings || (exports.Vp8Settings = {}));
var Vp9FramerateControl;
(function (Vp9FramerateControl) {
    Vp9FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp9FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vp9FramerateControl = exports.Vp9FramerateControl || (exports.Vp9FramerateControl = {}));
var Vp9FramerateConversionAlgorithm;
(function (Vp9FramerateConversionAlgorithm) {
    Vp9FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vp9FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vp9FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vp9FramerateConversionAlgorithm = exports.Vp9FramerateConversionAlgorithm || (exports.Vp9FramerateConversionAlgorithm = {}));
var Vp9ParControl;
(function (Vp9ParControl) {
    Vp9ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp9ParControl["SPECIFIED"] = "SPECIFIED";
})(Vp9ParControl = exports.Vp9ParControl || (exports.Vp9ParControl = {}));
var Vp9QualityTuningLevel;
(function (Vp9QualityTuningLevel) {
    Vp9QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Vp9QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
})(Vp9QualityTuningLevel = exports.Vp9QualityTuningLevel || (exports.Vp9QualityTuningLevel = {}));
var Vp9RateControlMode;
(function (Vp9RateControlMode) {
    Vp9RateControlMode["VBR"] = "VBR";
})(Vp9RateControlMode = exports.Vp9RateControlMode || (exports.Vp9RateControlMode = {}));
var Vp9Settings;
(function (Vp9Settings) {
    /**
     * @internal
     */
    Vp9Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Vp9Settings = exports.Vp9Settings || (exports.Vp9Settings = {}));
var VideoCodecSettings;
(function (VideoCodecSettings) {
    /**
     * @internal
     */
    VideoCodecSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoCodecSettings = exports.VideoCodecSettings || (exports.VideoCodecSettings = {}));
var ColorMetadata;
(function (ColorMetadata) {
    ColorMetadata["IGNORE"] = "IGNORE";
    ColorMetadata["INSERT"] = "INSERT";
})(ColorMetadata = exports.ColorMetadata || (exports.ColorMetadata = {}));
var DropFrameTimecode;
(function (DropFrameTimecode) {
    DropFrameTimecode["DISABLED"] = "DISABLED";
    DropFrameTimecode["ENABLED"] = "ENABLED";
})(DropFrameTimecode = exports.DropFrameTimecode || (exports.DropFrameTimecode = {}));
var RespondToAfd;
(function (RespondToAfd) {
    RespondToAfd["NONE"] = "NONE";
    RespondToAfd["PASSTHROUGH"] = "PASSTHROUGH";
    RespondToAfd["RESPOND"] = "RESPOND";
})(RespondToAfd = exports.RespondToAfd || (exports.RespondToAfd = {}));
var ScalingBehavior;
(function (ScalingBehavior) {
    ScalingBehavior["DEFAULT"] = "DEFAULT";
    ScalingBehavior["STRETCH_TO_OUTPUT"] = "STRETCH_TO_OUTPUT";
})(ScalingBehavior = exports.ScalingBehavior || (exports.ScalingBehavior = {}));
var VideoTimecodeInsertion;
(function (VideoTimecodeInsertion) {
    VideoTimecodeInsertion["DISABLED"] = "DISABLED";
    VideoTimecodeInsertion["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(VideoTimecodeInsertion = exports.VideoTimecodeInsertion || (exports.VideoTimecodeInsertion = {}));
var ColorSpaceConversion;
(function (ColorSpaceConversion) {
    ColorSpaceConversion["FORCE_601"] = "FORCE_601";
    ColorSpaceConversion["FORCE_709"] = "FORCE_709";
    ColorSpaceConversion["FORCE_HDR10"] = "FORCE_HDR10";
    ColorSpaceConversion["FORCE_HLG_2020"] = "FORCE_HLG_2020";
    ColorSpaceConversion["NONE"] = "NONE";
})(ColorSpaceConversion = exports.ColorSpaceConversion || (exports.ColorSpaceConversion = {}));
var ColorCorrector;
(function (ColorCorrector) {
    /**
     * @internal
     */
    ColorCorrector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColorCorrector = exports.ColorCorrector || (exports.ColorCorrector = {}));
var DeinterlaceAlgorithm;
(function (DeinterlaceAlgorithm) {
    DeinterlaceAlgorithm["BLEND"] = "BLEND";
    DeinterlaceAlgorithm["BLEND_TICKER"] = "BLEND_TICKER";
    DeinterlaceAlgorithm["INTERPOLATE"] = "INTERPOLATE";
    DeinterlaceAlgorithm["INTERPOLATE_TICKER"] = "INTERPOLATE_TICKER";
})(DeinterlaceAlgorithm = exports.DeinterlaceAlgorithm || (exports.DeinterlaceAlgorithm = {}));
var DeinterlacerControl;
(function (DeinterlacerControl) {
    DeinterlacerControl["FORCE_ALL_FRAMES"] = "FORCE_ALL_FRAMES";
    DeinterlacerControl["NORMAL"] = "NORMAL";
})(DeinterlacerControl = exports.DeinterlacerControl || (exports.DeinterlacerControl = {}));
var DeinterlacerMode;
(function (DeinterlacerMode) {
    DeinterlacerMode["ADAPTIVE"] = "ADAPTIVE";
    DeinterlacerMode["DEINTERLACE"] = "DEINTERLACE";
    DeinterlacerMode["INVERSE_TELECINE"] = "INVERSE_TELECINE";
})(DeinterlacerMode = exports.DeinterlacerMode || (exports.DeinterlacerMode = {}));
var Deinterlacer;
(function (Deinterlacer) {
    /**
     * @internal
     */
    Deinterlacer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Deinterlacer = exports.Deinterlacer || (exports.Deinterlacer = {}));
var DolbyVisionLevel6Metadata;
(function (DolbyVisionLevel6Metadata) {
    /**
     * @internal
     */
    DolbyVisionLevel6Metadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DolbyVisionLevel6Metadata = exports.DolbyVisionLevel6Metadata || (exports.DolbyVisionLevel6Metadata = {}));
var DolbyVisionLevel6Mode;
(function (DolbyVisionLevel6Mode) {
    DolbyVisionLevel6Mode["PASSTHROUGH"] = "PASSTHROUGH";
    DolbyVisionLevel6Mode["RECALCULATE"] = "RECALCULATE";
    DolbyVisionLevel6Mode["SPECIFY"] = "SPECIFY";
})(DolbyVisionLevel6Mode = exports.DolbyVisionLevel6Mode || (exports.DolbyVisionLevel6Mode = {}));
var DolbyVisionProfile;
(function (DolbyVisionProfile) {
    DolbyVisionProfile["PROFILE_5"] = "PROFILE_5";
})(DolbyVisionProfile = exports.DolbyVisionProfile || (exports.DolbyVisionProfile = {}));
var DolbyVision;
(function (DolbyVision) {
    /**
     * @internal
     */
    DolbyVision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DolbyVision = exports.DolbyVision || (exports.DolbyVision = {}));
var NoiseReducerFilter;
(function (NoiseReducerFilter) {
    NoiseReducerFilter["BILATERAL"] = "BILATERAL";
    NoiseReducerFilter["CONSERVE"] = "CONSERVE";
    NoiseReducerFilter["GAUSSIAN"] = "GAUSSIAN";
    NoiseReducerFilter["LANCZOS"] = "LANCZOS";
    NoiseReducerFilter["MEAN"] = "MEAN";
    NoiseReducerFilter["SHARPEN"] = "SHARPEN";
    NoiseReducerFilter["SPATIAL"] = "SPATIAL";
    NoiseReducerFilter["TEMPORAL"] = "TEMPORAL";
})(NoiseReducerFilter = exports.NoiseReducerFilter || (exports.NoiseReducerFilter = {}));
var NoiseReducerFilterSettings;
(function (NoiseReducerFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerFilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoiseReducerFilterSettings = exports.NoiseReducerFilterSettings || (exports.NoiseReducerFilterSettings = {}));
var NoiseReducerSpatialFilterSettings;
(function (NoiseReducerSpatialFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerSpatialFilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoiseReducerSpatialFilterSettings = exports.NoiseReducerSpatialFilterSettings || (exports.NoiseReducerSpatialFilterSettings = {}));
var NoiseFilterPostTemporalSharpening;
(function (NoiseFilterPostTemporalSharpening) {
    NoiseFilterPostTemporalSharpening["AUTO"] = "AUTO";
    NoiseFilterPostTemporalSharpening["DISABLED"] = "DISABLED";
    NoiseFilterPostTemporalSharpening["ENABLED"] = "ENABLED";
})(NoiseFilterPostTemporalSharpening = exports.NoiseFilterPostTemporalSharpening || (exports.NoiseFilterPostTemporalSharpening = {}));
var NoiseReducerTemporalFilterSettings;
(function (NoiseReducerTemporalFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerTemporalFilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoiseReducerTemporalFilterSettings = exports.NoiseReducerTemporalFilterSettings || (exports.NoiseReducerTemporalFilterSettings = {}));
var NoiseReducer;
(function (NoiseReducer) {
    /**
     * @internal
     */
    NoiseReducer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoiseReducer = exports.NoiseReducer || (exports.NoiseReducer = {}));
var WatermarkingStrength;
(function (WatermarkingStrength) {
    WatermarkingStrength["DEFAULT"] = "DEFAULT";
    WatermarkingStrength["LIGHTER"] = "LIGHTER";
    WatermarkingStrength["LIGHTEST"] = "LIGHTEST";
    WatermarkingStrength["STRONGER"] = "STRONGER";
    WatermarkingStrength["STRONGEST"] = "STRONGEST";
})(WatermarkingStrength = exports.WatermarkingStrength || (exports.WatermarkingStrength = {}));
var NexGuardFileMarkerSettings;
(function (NexGuardFileMarkerSettings) {
    /**
     * @internal
     */
    NexGuardFileMarkerSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NexGuardFileMarkerSettings = exports.NexGuardFileMarkerSettings || (exports.NexGuardFileMarkerSettings = {}));
var PartnerWatermarking;
(function (PartnerWatermarking) {
    /**
     * @internal
     */
    PartnerWatermarking.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerWatermarking = exports.PartnerWatermarking || (exports.PartnerWatermarking = {}));
var TimecodeBurninPosition;
(function (TimecodeBurninPosition) {
    TimecodeBurninPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
    TimecodeBurninPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    TimecodeBurninPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
    TimecodeBurninPosition["MIDDLE_CENTER"] = "MIDDLE_CENTER";
    TimecodeBurninPosition["MIDDLE_LEFT"] = "MIDDLE_LEFT";
    TimecodeBurninPosition["MIDDLE_RIGHT"] = "MIDDLE_RIGHT";
    TimecodeBurninPosition["TOP_CENTER"] = "TOP_CENTER";
    TimecodeBurninPosition["TOP_LEFT"] = "TOP_LEFT";
    TimecodeBurninPosition["TOP_RIGHT"] = "TOP_RIGHT";
})(TimecodeBurninPosition = exports.TimecodeBurninPosition || (exports.TimecodeBurninPosition = {}));
var TimecodeBurnin;
(function (TimecodeBurnin) {
    /**
     * @internal
     */
    TimecodeBurnin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimecodeBurnin = exports.TimecodeBurnin || (exports.TimecodeBurnin = {}));
var VideoPreprocessor;
(function (VideoPreprocessor) {
    /**
     * @internal
     */
    VideoPreprocessor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoPreprocessor = exports.VideoPreprocessor || (exports.VideoPreprocessor = {}));
var VideoDescription;
(function (VideoDescription) {
    /**
     * @internal
     */
    VideoDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoDescription = exports.VideoDescription || (exports.VideoDescription = {}));
var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Output = exports.Output || (exports.Output = {}));
var OutputGroup;
(function (OutputGroup) {
    /**
     * @internal
     */
    OutputGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputGroup = exports.OutputGroup || (exports.OutputGroup = {}));
var TimecodeSource;
(function (TimecodeSource) {
    TimecodeSource["EMBEDDED"] = "EMBEDDED";
    TimecodeSource["SPECIFIEDSTART"] = "SPECIFIEDSTART";
    TimecodeSource["ZEROBASED"] = "ZEROBASED";
})(TimecodeSource = exports.TimecodeSource || (exports.TimecodeSource = {}));
var TimecodeConfig;
(function (TimecodeConfig) {
    /**
     * @internal
     */
    TimecodeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimecodeConfig = exports.TimecodeConfig || (exports.TimecodeConfig = {}));
var TimedMetadataInsertion;
(function (TimedMetadataInsertion) {
    /**
     * @internal
     */
    TimedMetadataInsertion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimedMetadataInsertion = exports.TimedMetadataInsertion || (exports.TimedMetadataInsertion = {}));
var JobSettings;
(function (JobSettings) {
    /**
     * @internal
     */
    JobSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobSettings = exports.JobSettings || (exports.JobSettings = {}));
var SimulateReservedQueue;
(function (SimulateReservedQueue) {
    SimulateReservedQueue["DISABLED"] = "DISABLED";
    SimulateReservedQueue["ENABLED"] = "ENABLED";
})(SimulateReservedQueue = exports.SimulateReservedQueue || (exports.SimulateReservedQueue = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["CANCELED"] = "CANCELED";
    JobStatus["COMPLETE"] = "COMPLETE";
    JobStatus["ERROR"] = "ERROR";
    JobStatus["PROGRESSING"] = "PROGRESSING";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var StatusUpdateInterval;
(function (StatusUpdateInterval) {
    StatusUpdateInterval["SECONDS_10"] = "SECONDS_10";
    StatusUpdateInterval["SECONDS_12"] = "SECONDS_12";
    StatusUpdateInterval["SECONDS_120"] = "SECONDS_120";
    StatusUpdateInterval["SECONDS_15"] = "SECONDS_15";
    StatusUpdateInterval["SECONDS_180"] = "SECONDS_180";
    StatusUpdateInterval["SECONDS_20"] = "SECONDS_20";
    StatusUpdateInterval["SECONDS_240"] = "SECONDS_240";
    StatusUpdateInterval["SECONDS_30"] = "SECONDS_30";
    StatusUpdateInterval["SECONDS_300"] = "SECONDS_300";
    StatusUpdateInterval["SECONDS_360"] = "SECONDS_360";
    StatusUpdateInterval["SECONDS_420"] = "SECONDS_420";
    StatusUpdateInterval["SECONDS_480"] = "SECONDS_480";
    StatusUpdateInterval["SECONDS_540"] = "SECONDS_540";
    StatusUpdateInterval["SECONDS_60"] = "SECONDS_60";
    StatusUpdateInterval["SECONDS_600"] = "SECONDS_600";
})(StatusUpdateInterval = exports.StatusUpdateInterval || (exports.StatusUpdateInterval = {}));
var Timing;
(function (Timing) {
    /**
     * @internal
     */
    Timing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Timing = exports.Timing || (exports.Timing = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var JobTemplateSettings;
(function (JobTemplateSettings) {
    /**
     * @internal
     */
    JobTemplateSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobTemplateSettings = exports.JobTemplateSettings || (exports.JobTemplateSettings = {}));
var Type;
(function (Type) {
    Type["CUSTOM"] = "CUSTOM";
    Type["SYSTEM"] = "SYSTEM";
})(Type = exports.Type || (exports.Type = {}));
var JobTemplate;
(function (JobTemplate) {
    /**
     * @internal
     */
    JobTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobTemplate = exports.JobTemplate || (exports.JobTemplate = {}));
var PresetSettings;
(function (PresetSettings) {
    /**
     * @internal
     */
    PresetSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PresetSettings = exports.PresetSettings || (exports.PresetSettings = {}));
var Preset;
(function (Preset) {
    /**
     * @internal
     */
    Preset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Preset = exports.Preset || (exports.Preset = {}));
var PricingPlan;
(function (PricingPlan) {
    PricingPlan["ON_DEMAND"] = "ON_DEMAND";
    PricingPlan["RESERVED"] = "RESERVED";
})(PricingPlan = exports.PricingPlan || (exports.PricingPlan = {}));
var Commitment;
(function (Commitment) {
    Commitment["ONE_YEAR"] = "ONE_YEAR";
})(Commitment = exports.Commitment || (exports.Commitment = {}));
var RenewalType;
(function (RenewalType) {
    RenewalType["AUTO_RENEW"] = "AUTO_RENEW";
    RenewalType["EXPIRE"] = "EXPIRE";
})(RenewalType = exports.RenewalType || (exports.RenewalType = {}));
var ReservationPlanStatus;
(function (ReservationPlanStatus) {
    ReservationPlanStatus["ACTIVE"] = "ACTIVE";
    ReservationPlanStatus["EXPIRED"] = "EXPIRED";
})(ReservationPlanStatus = exports.ReservationPlanStatus || (exports.ReservationPlanStatus = {}));
var ReservationPlan;
(function (ReservationPlan) {
    /**
     * @internal
     */
    ReservationPlan.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPlan = exports.ReservationPlan || (exports.ReservationPlan = {}));
var QueueStatus;
(function (QueueStatus) {
    QueueStatus["ACTIVE"] = "ACTIVE";
    QueueStatus["PAUSED"] = "PAUSED";
})(QueueStatus = exports.QueueStatus || (exports.QueueStatus = {}));
var Queue;
(function (Queue) {
    /**
     * @internal
     */
    Queue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Queue = exports.Queue || (exports.Queue = {}));
var AssociateCertificateRequest;
(function (AssociateCertificateRequest) {
    /**
     * @internal
     */
    AssociateCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCertificateRequest = exports.AssociateCertificateRequest || (exports.AssociateCertificateRequest = {}));
var AssociateCertificateResponse;
(function (AssociateCertificateResponse) {
    /**
     * @internal
     */
    AssociateCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCertificateResponse = exports.AssociateCertificateResponse || (exports.AssociateCertificateResponse = {}));
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
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var CancelJobResponse;
(function (CancelJobResponse) {
    /**
     * @internal
     */
    CancelJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobResponse = exports.CancelJobResponse || (exports.CancelJobResponse = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var CreateJobTemplateRequest;
(function (CreateJobTemplateRequest) {
    /**
     * @internal
     */
    CreateJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobTemplateRequest = exports.CreateJobTemplateRequest || (exports.CreateJobTemplateRequest = {}));
var CreateJobTemplateResponse;
(function (CreateJobTemplateResponse) {
    /**
     * @internal
     */
    CreateJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobTemplateResponse = exports.CreateJobTemplateResponse || (exports.CreateJobTemplateResponse = {}));
var CreatePresetRequest;
(function (CreatePresetRequest) {
    /**
     * @internal
     */
    CreatePresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresetRequest = exports.CreatePresetRequest || (exports.CreatePresetRequest = {}));
var CreatePresetResponse;
(function (CreatePresetResponse) {
    /**
     * @internal
     */
    CreatePresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresetResponse = exports.CreatePresetResponse || (exports.CreatePresetResponse = {}));
var ReservationPlanSettings;
(function (ReservationPlanSettings) {
    /**
     * @internal
     */
    ReservationPlanSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPlanSettings = exports.ReservationPlanSettings || (exports.ReservationPlanSettings = {}));
var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueRequest = exports.CreateQueueRequest || (exports.CreateQueueRequest = {}));
var CreateQueueResponse;
(function (CreateQueueResponse) {
    /**
     * @internal
     */
    CreateQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueResponse = exports.CreateQueueResponse || (exports.CreateQueueResponse = {}));
var DeleteJobTemplateRequest;
(function (DeleteJobTemplateRequest) {
    /**
     * @internal
     */
    DeleteJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobTemplateRequest = exports.DeleteJobTemplateRequest || (exports.DeleteJobTemplateRequest = {}));
var DeleteJobTemplateResponse;
(function (DeleteJobTemplateResponse) {
    /**
     * @internal
     */
    DeleteJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobTemplateResponse = exports.DeleteJobTemplateResponse || (exports.DeleteJobTemplateResponse = {}));
var DeletePresetRequest;
(function (DeletePresetRequest) {
    /**
     * @internal
     */
    DeletePresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePresetRequest = exports.DeletePresetRequest || (exports.DeletePresetRequest = {}));
var DeletePresetResponse;
(function (DeletePresetResponse) {
    /**
     * @internal
     */
    DeletePresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePresetResponse = exports.DeletePresetResponse || (exports.DeletePresetResponse = {}));
var DeleteQueueRequest;
(function (DeleteQueueRequest) {
    /**
     * @internal
     */
    DeleteQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueueRequest = exports.DeleteQueueRequest || (exports.DeleteQueueRequest = {}));
var DeleteQueueResponse;
(function (DeleteQueueResponse) {
    /**
     * @internal
     */
    DeleteQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueueResponse = exports.DeleteQueueResponse || (exports.DeleteQueueResponse = {}));
var DescribeEndpointsMode;
(function (DescribeEndpointsMode) {
    DescribeEndpointsMode["DEFAULT"] = "DEFAULT";
    DescribeEndpointsMode["GET_ONLY"] = "GET_ONLY";
})(DescribeEndpointsMode = exports.DescribeEndpointsMode || (exports.DescribeEndpointsMode = {}));
var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    /**
     * @internal
     */
    DescribeEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsRequest = exports.DescribeEndpointsRequest || (exports.DescribeEndpointsRequest = {}));
var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsResponse = exports.DescribeEndpointsResponse || (exports.DescribeEndpointsResponse = {}));
var DisassociateCertificateRequest;
(function (DisassociateCertificateRequest) {
    /**
     * @internal
     */
    DisassociateCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCertificateRequest = exports.DisassociateCertificateRequest || (exports.DisassociateCertificateRequest = {}));
var DisassociateCertificateResponse;
(function (DisassociateCertificateResponse) {
    /**
     * @internal
     */
    DisassociateCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCertificateResponse = exports.DisassociateCertificateResponse || (exports.DisassociateCertificateResponse = {}));
var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var GetJobResponse;
(function (GetJobResponse) {
    /**
     * @internal
     */
    GetJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobResponse = exports.GetJobResponse || (exports.GetJobResponse = {}));
var GetJobTemplateRequest;
(function (GetJobTemplateRequest) {
    /**
     * @internal
     */
    GetJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobTemplateRequest = exports.GetJobTemplateRequest || (exports.GetJobTemplateRequest = {}));
var GetJobTemplateResponse;
(function (GetJobTemplateResponse) {
    /**
     * @internal
     */
    GetJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobTemplateResponse = exports.GetJobTemplateResponse || (exports.GetJobTemplateResponse = {}));
var GetPresetRequest;
(function (GetPresetRequest) {
    /**
     * @internal
     */
    GetPresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPresetRequest = exports.GetPresetRequest || (exports.GetPresetRequest = {}));
var GetPresetResponse;
(function (GetPresetResponse) {
    /**
     * @internal
     */
    GetPresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPresetResponse = exports.GetPresetResponse || (exports.GetPresetResponse = {}));
var GetQueueRequest;
(function (GetQueueRequest) {
    /**
     * @internal
     */
    GetQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueRequest = exports.GetQueueRequest || (exports.GetQueueRequest = {}));
var GetQueueResponse;
(function (GetQueueResponse) {
    /**
     * @internal
     */
    GetQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueResponse = exports.GetQueueResponse || (exports.GetQueueResponse = {}));
var JobTemplateListBy;
(function (JobTemplateListBy) {
    JobTemplateListBy["CREATION_DATE"] = "CREATION_DATE";
    JobTemplateListBy["NAME"] = "NAME";
    JobTemplateListBy["SYSTEM"] = "SYSTEM";
})(JobTemplateListBy = exports.JobTemplateListBy || (exports.JobTemplateListBy = {}));
var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order = exports.Order || (exports.Order = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListJobTemplatesRequest;
(function (ListJobTemplatesRequest) {
    /**
     * @internal
     */
    ListJobTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobTemplatesRequest = exports.ListJobTemplatesRequest || (exports.ListJobTemplatesRequest = {}));
var ListJobTemplatesResponse;
(function (ListJobTemplatesResponse) {
    /**
     * @internal
     */
    ListJobTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobTemplatesResponse = exports.ListJobTemplatesResponse || (exports.ListJobTemplatesResponse = {}));
var PresetListBy;
(function (PresetListBy) {
    PresetListBy["CREATION_DATE"] = "CREATION_DATE";
    PresetListBy["NAME"] = "NAME";
    PresetListBy["SYSTEM"] = "SYSTEM";
})(PresetListBy = exports.PresetListBy || (exports.PresetListBy = {}));
var ListPresetsRequest;
(function (ListPresetsRequest) {
    /**
     * @internal
     */
    ListPresetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPresetsRequest = exports.ListPresetsRequest || (exports.ListPresetsRequest = {}));
var ListPresetsResponse;
(function (ListPresetsResponse) {
    /**
     * @internal
     */
    ListPresetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPresetsResponse = exports.ListPresetsResponse || (exports.ListPresetsResponse = {}));
var QueueListBy;
(function (QueueListBy) {
    QueueListBy["CREATION_DATE"] = "CREATION_DATE";
    QueueListBy["NAME"] = "NAME";
})(QueueListBy = exports.QueueListBy || (exports.QueueListBy = {}));
var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesRequest = exports.ListQueuesRequest || (exports.ListQueuesRequest = {}));
var ListQueuesResponse;
(function (ListQueuesResponse) {
    /**
     * @internal
     */
    ListQueuesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesResponse = exports.ListQueuesResponse || (exports.ListQueuesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ResourceTags;
(function (ResourceTags) {
    /**
     * @internal
     */
    ResourceTags.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTags = exports.ResourceTags || (exports.ResourceTags = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
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
var UpdateJobTemplateRequest;
(function (UpdateJobTemplateRequest) {
    /**
     * @internal
     */
    UpdateJobTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobTemplateRequest = exports.UpdateJobTemplateRequest || (exports.UpdateJobTemplateRequest = {}));
var UpdateJobTemplateResponse;
(function (UpdateJobTemplateResponse) {
    /**
     * @internal
     */
    UpdateJobTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobTemplateResponse = exports.UpdateJobTemplateResponse || (exports.UpdateJobTemplateResponse = {}));
var UpdatePresetRequest;
(function (UpdatePresetRequest) {
    /**
     * @internal
     */
    UpdatePresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePresetRequest = exports.UpdatePresetRequest || (exports.UpdatePresetRequest = {}));
var UpdatePresetResponse;
(function (UpdatePresetResponse) {
    /**
     * @internal
     */
    UpdatePresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePresetResponse = exports.UpdatePresetResponse || (exports.UpdatePresetResponse = {}));
var UpdateQueueRequest;
(function (UpdateQueueRequest) {
    /**
     * @internal
     */
    UpdateQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueRequest = exports.UpdateQueueRequest || (exports.UpdateQueueRequest = {}));
var UpdateQueueResponse;
(function (UpdateQueueResponse) {
    /**
     * @internal
     */
    UpdateQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueResponse = exports.UpdateQueueResponse || (exports.UpdateQueueResponse = {}));
//# sourceMappingURL=models_1.js.map